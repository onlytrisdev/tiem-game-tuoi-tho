/**
 * renderer.js — Render bàn chơi DOM, vẽ đường nối SVG, hiệu ứng
 */
const Renderer = (function () {
  'use strict';

  let boardEl = null;
  let svgEl = null;
  let wrapperEl = null;
  let tileElements = {};
  let gridBounds = null;
  let gridGeometry = null;

  const BOARD_GAP = 3;
  /** Khoảng cách tối thiểu từ mép ô tới làn nối ở biên bàn */
  const BORDER_PAD_MIN = 14;
  const BORDER_PAD_MIN_MOBILE = 18;

  function computeLaneInset(tileH, gap) {
    const h = Math.max(1, tileH || 40);
    const g = Number.isFinite(gap) ? gap : BOARD_GAP;
    const minPad = isMobileGameplay() ? BORDER_PAD_MIN_MOBILE : BORDER_PAD_MIN;
    return Math.max(minPad, Math.round(g * 2.5 + h * 0.4));
  }

  function getLanePaddingInsets(tileH, gap) {
    const g = Number.isFinite(gap) ? gap : BOARD_GAP;
    const inset = computeLaneInset(tileH, g);
    if (!isMobileGameplay()) {
      return { top: inset, right: inset, bottom: inset, left: inset };
    }
    const bottomExtra = Math.max(10, Math.round(inset * 0.5));
    return { top: inset, right: inset, bottom: inset + bottomExtra, left: inset };
  }

  function applyConnectionLanePadding(tileH) {
    if (!wrapperEl) return BORDER_PAD_MIN;
    const pads = getLanePaddingInsets(tileH, getBoardGap());
    wrapperEl.style.padding = pads.top + 'px ' + pads.right + 'px ' + pads.bottom + 'px ' + pads.left + 'px';
    return pads;
  }

  function readWrapperPadding() {
    if (!wrapperEl) {
      return { top: BORDER_PAD_MIN, right: BORDER_PAD_MIN, bottom: BORDER_PAD_MIN, left: BORDER_PAD_MIN };
    }
    const style = getComputedStyle(wrapperEl);
    return {
      top: parseFloat(style.paddingTop) || BORDER_PAD_MIN,
      right: parseFloat(style.paddingRight) || BORDER_PAD_MIN,
      bottom: parseFloat(style.paddingBottom) || BORDER_PAD_MIN,
      left: parseFloat(style.paddingLeft) || BORDER_PAD_MIN
    };
  }

  function refreshGridGeometry() {
    if (!gridBounds || !wrapperEl) {
      gridGeometry = null;
      return;
    }

    const { minRow, maxRow, minCol, maxCol } = gridBounds;
    const topLeft = tileElements[`${minRow},${minCol}`];
    const topRight = tileElements[`${minRow},${maxCol}`];
    const bottomLeft = tileElements[`${maxRow},${minCol}`];
    if (!topLeft || !topRight || !bottomLeft) {
      gridGeometry = null;
      return;
    }

    const wrapRect = wrapperEl.getBoundingClientRect();
    const tl = topLeft.getBoundingClientRect();
    const tr = topRight.getBoundingClientRect();
    const bl = bottomLeft.getBoundingClientRect();

    const tileW = tl.width;
    const tileH = tl.height;
    const gap = getBoardGap();
    const stepX = tileW + gap;
    const stepY = tileH + gap;
    const laneInset = computeLaneInset(tileH, gap);
    const pads = readWrapperPadding();

    gridGeometry = {
      innerLeft: tl.left - wrapRect.left,
      innerTop: tl.top - wrapRect.top,
      innerRight: tr.right - wrapRect.left,
      innerBottom: bl.bottom - wrapRect.top,
      tileW,
      tileH,
      stepX,
      stepY,
      laneInset,
      laneInsetTop: pads.top,
      laneInsetBottom: pads.bottom,
      laneInsetLeft: pads.left,
      laneInsetRight: pads.right,
      wrapWidth: wrapRect.width,
      wrapHeight: wrapRect.height
    };
  }

  function getTilePixelCenter(row, col) {
    if (!wrapperEl) return { x: 0, y: 0 };

    const tile = tileElements[`${row},${col}`];
    if (tile) {
      const wrapRect = wrapperEl.getBoundingClientRect();
      const tr = tile.getBoundingClientRect();
      return {
        x: tr.left + tr.width / 2 - wrapRect.left,
        y: tr.top + tr.height / 2 - wrapRect.top
      };
    }

    return estimateNodePoint(row, col);
  }

  function estimateNodePoint(row, col) {
    if (!gridBounds || !gridGeometry) return { x: 0, y: 0 };

    const { minRow, maxRow, minCol, maxCol } = gridBounds;
    const { innerLeft, innerTop, innerRight, innerBottom, tileW, tileH, stepX, stepY } = gridGeometry;
    const laneTop = gridGeometry.laneInsetTop != null ? gridGeometry.laneInsetTop : gridGeometry.laneInset;
    const laneBottom = gridGeometry.laneInsetBottom != null ? gridGeometry.laneInsetBottom : gridGeometry.laneInset;
    const laneLeft = gridGeometry.laneInsetLeft != null ? gridGeometry.laneInsetLeft : gridGeometry.laneInset;
    const laneRight = gridGeometry.laneInsetRight != null ? gridGeometry.laneInsetRight : gridGeometry.laneInset;

    const clampCol = Math.max(minCol, Math.min(maxCol, col));
    const clampRow = Math.max(minRow, Math.min(maxRow, row));

    let x = innerLeft + (clampCol - minCol) * stepX + tileW / 2;
    let y = innerTop + (clampRow - minRow) * stepY + tileH / 2;

    if (row < minRow) y = innerTop - laneTop;
    else if (row > maxRow) y = innerBottom + laneBottom;

    if (col < minCol) x = innerLeft - laneLeft;
    else if (col > maxCol) x = innerRight + laneRight;

    return { x, y };
  }

  function pathNodeToPoint(row, col) {
    if (!gridBounds) return { x: 0, y: 0 };

    const { minRow, maxRow, minCol, maxCol } = gridBounds;
    const isInterior = row >= minRow && row <= maxRow && col >= minCol && col <= maxCol;
    if (isInterior) return getTilePixelCenter(row, col);
    return estimateNodePoint(row, col);
  }

  function isTileVisuallyOccupied(row, col) {
    const tile = tileElements[`${row},${col}`];
    if (!tile) return false;
    if (tile.classList.contains('tile--empty')) return false;
    return tile.dataset.iconId !== '0';
  }

  function isPlayableCell(bounds, row, col) {
    return row >= bounds.minRow && row <= bounds.maxRow
      && col >= bounds.minCol && col <= bounds.maxCol;
  }

  function nodeKey(row, col) {
    return row + ',' + col;
  }

  function isOccupiedCell(grid, bounds, row, col) {
    if (!isPlayableCell(bounds, row, col)) return false;
    if (grid[row][col] !== 0) return true;
    return isTileVisuallyOccupied(row, col);
  }

  function isAxisAlignedNodes(a, b) {
    return a.row === b.row || a.col === b.col;
  }

  function segmentOccupiedInGrid(grid, bounds, a, b) {
    if (!isAxisAlignedNodes(a, b)) return true;

    if (typeof Pathfinder !== 'undefined' && Pathfinder._isSegmentClear) {
      if (!Pathfinder._isSegmentClear(grid, a.row, a.col, b.row, b.col)) return true;
    }

    if (a.row === b.row) {
      const lo = Math.min(a.col, b.col);
      const hi = Math.max(a.col, b.col);
      for (let c = lo + 1; c < hi; c++) {
        if (isOccupiedCell(grid, bounds, a.row, c)) return true;
      }
      return false;
    }

    const lo = Math.min(a.row, b.row);
    const hi = Math.max(a.row, b.row);
    for (let r = lo + 1; r < hi; r++) {
      if (isOccupiedCell(grid, bounds, r, a.col)) return true;
    }
    return false;
  }

  function getOccupiedTileRects(excludeKeys) {
    const wrapRect = wrapperEl.getBoundingClientRect();
    const rects = [];

    Object.keys(tileElements).forEach(function (key) {
      if (excludeKeys.indexOf(key) >= 0) return;
      const tile = tileElements[key];
      if (!tile || tile.classList.contains('tile--empty')) return;
      if (tile.dataset.iconId === '0') return;

      const tr = tile.getBoundingClientRect();
      rects.push({
        left: tr.left - wrapRect.left,
        top: tr.top - wrapRect.top,
        right: tr.right - wrapRect.left,
        bottom: tr.bottom - wrapRect.top
      });
    });

    return rects;
  }

  function axisLineHitsRect(x1, y1, x2, y2, rect, inset) {
    const pad = inset || 4;

    if (Math.abs(y1 - y2) < 0.5) {
      const y = y1;
      const minX = Math.min(x1, x2);
      const maxX = Math.max(x1, x2);
      if (y < rect.top + pad || y > rect.bottom - pad) return false;
      return maxX > rect.left + pad && minX < rect.right - pad;
    }

    if (Math.abs(x1 - x2) < 0.5) {
      const x = x1;
      const minY = Math.min(y1, y2);
      const maxY = Math.max(y1, y2);
      if (x < rect.left + pad || x > rect.right - pad) return false;
      return maxY > rect.top + pad && minY < rect.bottom - pad;
    }

    return false;
  }

  function pixelSegmentHitsTiles(p1, p2, excludeKeys) {
    const rects = getOccupiedTileRects(excludeKeys);
    for (let i = 0; i < rects.length; i++) {
      if (axisLineHitsRect(p1.x, p1.y, p2.x, p2.y, rects[i], 4)) return true;
    }
    return false;
  }

  function canDrawSegment(a, b, grid, bounds, excludeKeys) {
    if (!isAxisAlignedNodes(a, b)) return false;
    if (segmentOccupiedInGrid(grid, bounds, a, b)) return false;

    const p1 = pathNodeToPoint(a.row, a.col);
    const p2 = pathNodeToPoint(b.row, b.col);
    return !pixelSegmentHitsTiles(p1, p2, excludeKeys);
  }

  function nodesEqual(a, b) {
    return a.row === b.row && a.col === b.col;
  }

  function pushNode(list, node) {
    const last = list[list.length - 1];
    if (!last || !nodesEqual(last, node)) {
      list.push({ row: node.row, col: node.col });
    }
  }

  function scoreRoute(route, grid, bounds, excludeKeys) {
    let len = 0;
    let ok = true;

    for (let s = 0; s < route.length - 1; s++) {
      if (!canDrawSegment(route[s], route[s + 1], grid, bounds, excludeKeys)) {
        ok = false;
        break;
      }
      const p1 = pathNodeToPoint(route[s].row, route[s].col);
      const p2 = pathNodeToPoint(route[s + 1].row, route[s + 1].col);
      len += Math.abs(p2.x - p1.x) + Math.abs(p2.y - p1.y);
    }

    return ok ? len : Infinity;
  }

  function routeSegment(a, b, grid, bounds, excludeKeys) {
    if (canDrawSegment(a, b, grid, bounds, excludeKeys)) {
      return [a, b];
    }

    const topR = bounds.minRow - 1;
    const bottomR = bounds.maxRow + 1;
    const leftC = bounds.minCol - 1;
    const rightC = bounds.maxCol + 1;

    const candidates = [
      [a, { row: topR, col: a.col }, { row: topR, col: b.col }, b],
      [a, { row: bottomR, col: a.col }, { row: bottomR, col: b.col }, b],
      [a, { row: a.row, col: leftC }, { row: b.row, col: leftC }, b],
      [a, { row: a.row, col: rightC }, { row: b.row, col: rightC }, b],
      [a, { row: topR, col: a.col }, { row: topR, col: leftC }, { row: b.row, col: leftC }, b],
      [a, { row: topR, col: a.col }, { row: topR, col: rightC }, { row: b.row, col: rightC }, b],
      [a, { row: bottomR, col: a.col }, { row: bottomR, col: leftC }, { row: b.row, col: leftC }, b],
      [a, { row: bottomR, col: a.col }, { row: bottomR, col: rightC }, { row: b.row, col: rightC }, b]
    ];

    let best = null;
    let bestLen = Infinity;

    for (let i = 0; i < candidates.length; i++) {
      const len = scoreRoute(candidates[i], grid, bounds, excludeKeys);
      if (len < bestLen) {
        best = candidates[i];
        bestLen = len;
      }
    }

    return best || [a, { row: topR, col: a.col }, { row: topR, col: b.col }, b];
  }

  function buildSafeRenderPath(logicalPath, grid, bounds, startRow, startCol, endRow, endCol) {
    if (!logicalPath || logicalPath.length < 2) return logicalPath;

    const excludeKeys = [nodeKey(startRow, startCol), nodeKey(endRow, endCol)];
    const out = [{ row: logicalPath[0].row, col: logicalPath[0].col }];

    for (let i = 1; i < logicalPath.length; i++) {
      const a = out[out.length - 1];
      const b = logicalPath[i];
      const route = routeSegment(a, b, grid, bounds, excludeKeys);

      for (let j = 1; j < route.length; j++) {
        pushNode(out, route[j]);
      }
    }

    return out;
  }

  function pointsClose(a, b) {
    return Math.abs(a.x - b.x) < 0.5 && Math.abs(a.y - b.y) < 0.5;
  }

  function buildConnectionVertices(path) {
    const verts = [];
    for (let i = 0; i < path.length; i++) {
      const p = pathNodeToPoint(path[i].row, path[i].col);
      const last = verts[verts.length - 1];
      if (!last || !pointsClose(last, p)) {
        verts.push(p);
      }
    }
    return verts;
  }

  function appendAxisSegment(group, a, b, className) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('class', className);

    if (Math.abs(a.y - b.y) < 0.5) {
      line.setAttribute('x1', String(a.x));
      line.setAttribute('y1', String(a.y));
      line.setAttribute('x2', String(b.x));
      line.setAttribute('y2', String(a.y));
    } else if (Math.abs(a.x - b.x) < 0.5) {
      line.setAttribute('x1', String(a.x));
      line.setAttribute('y1', String(a.y));
      line.setAttribute('x2', String(a.x));
      line.setAttribute('y2', String(b.y));
    } else {
      const corner = { x: b.x, y: a.y };
      appendAxisSegment(group, a, corner, className);
      appendAxisSegment(group, corner, b, className);
      return true;
    }

    group.appendChild(line);
    return true;
  }

  function appendDot(group, x, y) {
    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dot.setAttribute('class', 'connection-dot');
    dot.setAttribute('cx', String(x));
    dot.setAttribute('cy', String(y));
    dot.setAttribute('r', '4');
    group.appendChild(dot);
  }

  function drawConnectionPath(path) {
    if (!path || path.length < 2) return;

    const verts = buildConnectionVertices(path);
    if (verts.length < 2) return;

    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.setAttribute('class', 'connection-line-group');

    for (let i = 0; i < verts.length - 1; i++) {
      appendAxisSegment(group, verts[i], verts[i + 1], 'connection-line');
    }

    appendDot(group, verts[0].x, verts[0].y);
    appendDot(group, verts[verts.length - 1].x, verts[verts.length - 1].y);

    svgEl.appendChild(group);
  }

  function getBoardGap() {
    if (!boardEl) return BOARD_GAP;
    const parsed = parseFloat(getComputedStyle(boardEl).gap);
    return Number.isFinite(parsed) ? parsed : BOARD_GAP;
  }

  function isMobileGameplay() {
    return window.innerWidth < 900
      || (window.innerHeight < 560 && window.innerWidth > window.innerHeight);
  }

  function getGameAreaMetrics() {
    const mobile = isMobileGameplay();
    const gap = mobile ? 2 : BOARD_GAP;
    const padX = mobile ? 6 : 12;
    const padY = mobile ? 4 : 12;

    const mainEl = wrapperEl ? wrapperEl.closest('.game-main') : null;
    if (mainEl) {
      const w = mainEl.clientWidth;
      const h = mainEl.clientHeight;
      if (w > 0 && h > 0) {
        return {
          availW: Math.max(0, w - padX * 2),
          availH: Math.max(0, h - padY * 2),
          gap: gap
        };
      }
    }

    const vv = window.visualViewport;
    const vw = vv ? vv.width : window.innerWidth;
    const vh = vv ? vv.height : window.innerHeight;

    return {
      availW: Math.max(0, vw - padX * 2),
      availH: Math.max(0, vh - (mobile ? 52 : 118)),
      gap: gap
    };
  }

  function reserveLaneSpace(availW, availH, playableRows, playableCols, gap) {
    let maxByH = (availH - gap * (playableRows - 1)) / playableRows;
    let maxByW = (availW - gap * (playableCols - 1)) / playableCols;
    const estTile = Math.max(1, Math.floor(Math.min(maxByH, maxByW)));
    const pads = getLanePaddingInsets(estTile, gap);
    return {
      availH: Math.max(0, availH - pads.top - pads.bottom),
      availW: Math.max(0, availW - pads.left - pads.right)
    };
  }

  function calcTileSize(playableRows, playableCols) {
    const metrics = getGameAreaMetrics();
    const mobile = isMobileGameplay();
    const gap = metrics.gap;
    const reserved = reserveLaneSpace(metrics.availW, metrics.availH, playableRows, playableCols, gap);

    const maxByH = (reserved.availH - gap * (playableRows - 1)) / playableRows;
    const maxByW = (reserved.availW - gap * (playableCols - 1)) / playableCols;

    let tileSize = Math.min(maxByH, maxByW);

    if (mobile) {
      tileSize = Math.max(34, tileSize);
    } else {
      tileSize = Math.max(28, Math.min(tileSize, 80));
    }

    return Math.floor(tileSize);
  }

  function applyBoardDimensions(playableRows, playableCols, tileSize) {
    if (!boardEl) return;

    const gap = isMobileGameplay() ? 2 : BOARD_GAP;
    const boardW = playableCols * tileSize + gap * (playableCols - 1);
    const boardH = playableRows * tileSize + gap * (playableRows - 1);

    boardEl.style.width = boardW + 'px';
    boardEl.style.height = boardH + 'px';
    boardEl.style.gap = gap + 'px';
    boardEl.style.gridTemplateColumns = 'repeat(' + playableCols + ', ' + tileSize + 'px)';
    boardEl.style.gridTemplateRows = 'repeat(' + playableRows + ', ' + tileSize + 'px)';
  }

  function applyTileIcon(tile, iconId) {
    const nextId = iconId ? String(iconId) : '0';
    if (tile.dataset.iconId === nextId) return;

    tile.dataset.iconId = nextId;

    if (!iconId) {
      tile.innerHTML = '';
      return;
    }

    const existingIcon = tile.querySelector('.tile__icon');
    if (existingIcon) {
      FruitAssets.applyIconToElement(existingIcon, iconId);
      return;
    }

    tile.innerHTML = '';
    tile.appendChild(FruitAssets.createIconElement(iconId));
  }

  function resizeBoard(playableRows, playableCols) {
    const tileSize = calcTileSize(playableRows, playableCols);
    document.documentElement.style.setProperty('--tile-size', tileSize + 'px');
    applyBoardDimensions(playableRows, playableCols, tileSize);
    applyConnectionLanePadding(tileSize);
    requestAnimationFrame(refreshGridGeometry);
  }

  function init(boardElement, svgElement, wrapperElement) {
    boardEl = boardElement;
    svgEl = svgElement;
    wrapperEl = wrapperElement;
  }

  function buildBoard(state) {
    const { grid, playableRows, playableCols, bounds } = state;
    const tileSize = calcTileSize(playableRows, playableCols);

    document.documentElement.style.setProperty('--tile-size', tileSize + 'px');
    applyBoardDimensions(playableRows, playableCols, tileSize);
    applyConnectionLanePadding(tileSize);
    boardEl.innerHTML = '';
    tileElements = {};
    gridBounds = { ...bounds };

    for (let r = bounds.minRow; r <= bounds.maxRow; r++) {
      for (let c = bounds.minCol; c <= bounds.maxCol; c++) {
        const iconId = grid[r][c];
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.dataset.row = r;
        tile.dataset.col = c;
        tile.setAttribute('role', 'gridcell');
        tile.setAttribute('aria-label', `Ô ${r - bounds.minRow + 1}, ${c - bounds.minCol + 1}`);

        if (iconId === 0) {
          tile.classList.add('tile--empty');
          tile.dataset.iconId = '0';
        } else {
          applyTileIcon(tile, iconId);
        }

        boardEl.appendChild(tile);
        tileElements[`${r},${c}`] = tile;
      }
    }

    clearConnection();
    requestAnimationFrame(refreshGridGeometry);
  }

  function clearTile(row, col) {
    const tile = tileElements[`${row},${col}`];
    if (!tile) return;
    tile.classList.add('tile--empty', 'tile--matched');
    tile.dataset.iconId = '0';
    tile.innerHTML = '';
    tile.classList.remove('tile--selected', 'tile--hint');
  }

  function syncFromGrid(grid, bounds) {
    for (let r = bounds.minRow; r <= bounds.maxRow; r++) {
      for (let c = bounds.minCol; c <= bounds.maxCol; c++) {
        const tile = tileElements[`${r},${c}`];
        if (!tile) continue;

        const iconId = grid[r][c];
        tile.classList.remove('tile--selected', 'tile--hint', 'tile--matched', 'tile--shake');

        if (iconId === 0) {
          tile.classList.add('tile--empty');
          tile.dataset.iconId = '0';
          tile.innerHTML = '';
        } else {
          tile.classList.remove('tile--empty');
          applyTileIcon(tile, iconId);
        }
      }
    }
    clearConnection();
  }

  function setSelected(row, col, selected) {
    const tile = tileElements[`${row},${col}`];
    if (!tile) return;
    tile.classList.toggle('tile--selected', selected);
  }

  function clearSelection() {
    Object.values(tileElements).forEach(tile => {
      tile.classList.remove('tile--selected');
    });
  }

  function shakeTiles(row1, col1, row2, col2) {
    [tileElements[`${row1},${col1}`], tileElements[`${row2},${col2}`]].forEach(tile => {
      if (!tile) return;
      tile.classList.remove('tile--shake');
      void tile.offsetWidth;
      tile.classList.add('tile--shake');
    });
  }

  function highlightHint(r1, c1, r2, c2) {
    clearHintHighlight();
    [tileElements[`${r1},${c1}`], tileElements[`${r2},${c2}`]].forEach(tile => {
      if (tile) tile.classList.add('tile--hint');
    });
  }

  function clearHintHighlight() {
    Object.values(tileElements).forEach(tile => {
      tile.classList.remove('tile--hint');
    });
  }

  function drawConnection(path, grid, startRow, startCol, endRow, endCol) {
    if (!svgEl || !wrapperEl || !path || path.length < 2) return;

    refreshGridGeometry();
    if (!gridGeometry || !gridBounds) return;

    const start = { row: startRow, col: startCol };
    const end = { row: endRow, col: endCol };

    if (typeof Pathfinder !== 'undefined' && Pathfinder._validatePath) {
      if (!Pathfinder._validatePath(grid, path, start, end)) return;
    }

    const drawPath = grid
      ? buildSafeRenderPath(path, grid, gridBounds, startRow, startCol, endRow, endCol)
      : path;

    const wrapRect = wrapperEl.getBoundingClientRect();
    svgEl.setAttribute('width', String(wrapRect.width));
    svgEl.setAttribute('height', String(wrapRect.height));
    svgEl.removeAttribute('viewBox');
    svgEl.setAttribute('overflow', 'visible');
    svgEl.querySelectorAll('.connection-line-group').forEach(function (el) { el.remove(); });

    drawConnectionPath(drawPath);
  }

  function clearConnection() {
    if (svgEl) svgEl.innerHTML = '';
  }

  function getTileElement(row, col) {
    return tileElements[`${row},${col}`];
  }

  return {
    init,
    buildBoard,
    clearTile,
    syncFromGrid,
    setSelected,
    clearSelection,
    shakeTiles,
    highlightHint,
    clearHintHighlight,
    drawConnection,
    clearConnection,
    getTileElement,
    calcTileSize,
    resizeBoard
  };
})();
