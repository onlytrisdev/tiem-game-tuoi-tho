/**
 * pathfinder.js — Thuật toán nối Pikachu / Onet
 *
 * Quy tắc:
 * 1. Đường đi chỉ theo cạnh lưới (ngang hoặc dọc), không chéo.
 * 2. Không đi xuyên ô còn icon (chỉ qua ô trống hoặc hai đầu mút).
 * 3. Được phép đi ra ngoài biên bàn chơi.
 * 4. Tối đa 2 lần rẽ 90° (tối đa 3 đoạn thẳng).
 * 5. Chọn đường đơn giản nhất: thẳng → L → U (ưu tiên ít rẽ, ít đoạn).
 */
const Pathfinder = (function () {
  'use strict';

  const MAX_TURNS = 2;
  const MAX_SEGMENTS = MAX_TURNS + 1;

  function point(row, col) {
    return { row, col };
  }

  function sameCell(r1, c1, r2, c2) {
    return r1 === r2 && c1 === c2;
  }

  function inGrid(grid, row, col) {
    return row >= 0 && col >= 0 && row < grid.length && col < grid[0].length;
  }

  /** Ô trống hoặc ngoài lưới — dùng cho điểm rẽ trên path */
  function isPassable(grid, row, col, start, end) {
    if (sameCell(row, col, start.row, start.col)) return true;
    if (sameCell(row, col, end.row, end.col)) return true;
    if (!inGrid(grid, row, col)) return true;
    return grid[row][col] === 0;
  }

  /**
   * Ô có được đi qua trên MỘT đoạn thẳng (chỉ hai đầu mút đoạn được miễn).
   * Không miễn start/end của cặp đang ghép — tránh đường khác xuyên qua ô đó.
   */
  function isClearOnSegment(grid, row, col, segA, segB) {
    if (sameCell(row, col, segA.row, segA.col)) return true;
    if (sameCell(row, col, segB.row, segB.col)) return true;
    if (!inGrid(grid, row, col)) return true;
    return grid[row][col] === 0;
  }

  function isValidBendPoint(grid, row, col) {
    if (!inGrid(grid, row, col)) return true;
    return grid[row][col] === 0;
  }

  function isAxisAligned(r1, c1, r2, c2) {
    return r1 === r2 || c1 === c2;
  }

  function isSegmentClear(grid, r1, c1, r2, c2) {
    if (!isAxisAligned(r1, c1, r2, c2)) return false;
    if (sameCell(r1, c1, r2, c2)) return true;

    const segA = point(r1, c1);
    const segB = point(r2, c2);

    if (r1 === r2) {
      const min = Math.min(c1, c2);
      const max = Math.max(c1, c2);
      for (let c = min + 1; c < max; c++) {
        if (!isClearOnSegment(grid, r1, c, segA, segB)) return false;
      }
      return true;
    }

    const min = Math.min(r1, r2);
    const max = Math.max(r1, r2);
    for (let r = min + 1; r < max; r++) {
      if (!isClearOnSegment(grid, r, c1, segA, segB)) return false;
    }
    return true;
  }

  function pathCrossesOccupied(grid, path) {
    for (let i = 0; i < path.length - 1; i++) {
      const a = path[i];
      const b = path[i + 1];
      if (!isSegmentClear(grid, a.row, a.col, b.row, b.col)) return true;
    }
    return false;
  }

  function countTurns(path) {
    if (path.length < 3) return 0;

    let turns = 0;
    for (let i = 1; i < path.length - 1; i++) {
      const prev = path[i - 1];
      const curr = path[i];
      const next = path[i + 1];
      const inDr = curr.row - prev.row;
      const inDc = curr.col - prev.col;
      const outDr = next.row - curr.row;
      const outDc = next.col - curr.col;
      if (inDr !== outDr || inDc !== outDc) turns++;
    }
    return turns;
  }

  function manhattanPathLength(path) {
    let len = 0;
    for (let i = 0; i < path.length - 1; i++) {
      len += Math.abs(path[i + 1].row - path[i].row);
      len += Math.abs(path[i + 1].col - path[i].col);
    }
    return len;
  }

  function validatePath(grid, path, start, end) {
    if (!path || path.length < 2) return false;
    if (path.length - 1 > MAX_SEGMENTS) return false;

    const first = path[0];
    const last = path[path.length - 1];
    if (!sameCell(first.row, first.col, start.row, start.col)) return false;
    if (!sameCell(last.row, last.col, end.row, end.col)) return false;

    for (let i = 0; i < path.length - 1; i++) {
      const a = path[i];
      const b = path[i + 1];
      if (!isAxisAligned(a.row, a.col, b.row, b.col)) return false;
      if (!isSegmentClear(grid, a.row, a.col, b.row, b.col)) return false;
    }

    for (let i = 1; i < path.length - 1; i++) {
      const p = path[i];
      if (!isValidBendPoint(grid, p.row, p.col)) return false;
    }

    return countTurns(path) <= MAX_TURNS;
  }

  function compactPath(path, grid) {
    if (path.length <= 2) return path;

    const compact = [path[0]];
    for (let i = 1; i < path.length - 1; i++) {
      const prev = compact[compact.length - 1];
      const curr = path[i];
      const next = path[i + 1];
      const sameRowLine = prev.row === curr.row && curr.row === next.row;
      const sameColLine = prev.col === curr.col && curr.col === next.col;
      if (!sameRowLine && !sameColLine) {
        compact.push(curr);
        continue;
      }
      if (grid && !isSegmentClear(grid, prev.row, prev.col, next.row, next.col)) {
        compact.push(curr);
      }
    }
    compact.push(path[path.length - 1]);
    return compact;
  }

  function acceptPath(grid, path, start, end) {
    const compact = compactPath(path, grid);
    return validatePath(grid, compact, start, end) ? compact : null;
  }

  function scorePath(path, gridRows, gridCols) {
    const turns = countTurns(path);
    const segments = path.length - 1;
    const length = manhattanPathLength(path);
    const usesExterior = path.some(function (p) {
      return p.row < 0 || p.col < 0 || p.row >= gridRows || p.col >= gridCols;
    });
    const exteriorPenalty = usesExterior ? 600 : 0;
    return turns * 10000 + segments * 1000 + length + exteriorPenalty;
  }

  function pickBestPath(candidates, gridRows, gridCols) {
    if (!candidates.length) return null;
    candidates.sort(function (a, b) {
      return scorePath(a, gridRows, gridCols) - scorePath(b, gridRows, gridCols);
    });
    return candidates[0];
  }

  function tryPath(grid, points, start, end) {
    return acceptPath(grid, points, start, end);
  }

  /** Chỉ số hàng/cột làn U — ưu tiên làn ngoài bàn (bounds ± 1) */
  function bridgeLineIndices(grid, bounds, axis) {
    const size = axis === 'row' ? grid.length : grid[0].length;
    const order = [];
    const seen = new Set();

    function push(v) {
      if (seen.has(v)) return;
      seen.add(v);
      order.push(v);
    }

    if (bounds) {
      push(axis === 'row' ? bounds.minRow - 1 : bounds.minCol - 1);
      push(axis === 'row' ? bounds.maxRow + 1 : bounds.maxCol + 1);
    }

    push(-1);
    push(size);
    push(0);
    push(size - 1);

    for (let i = 1; i < size - 1; i++) {
      push(i);
    }

    return order;
  }

  function scanBridgeLines(grid, start, end, axis, bounds) {
    const { row: r1, col: c1 } = start;
    const { row: r2, col: c2 } = end;
    const candidates = [];

    for (const i of bridgeLineIndices(grid, bounds, axis)) {
      let path;
      if (axis === 'row') {
        path = tryPath(grid, [
          point(r1, c1),
          point(i, c1),
          point(i, c2),
          point(r2, c2)
        ], start, end);
      } else {
        path = tryPath(grid, [
          point(r1, c1),
          point(r1, i),
          point(r2, i),
          point(r2, c2)
        ], start, end);
      }
      if (path) candidates.push(path);
    }

    return candidates;
  }

  /** 0 góc — đường thẳng */
  function findZeroTurnPaths(grid, start, end) {
    const { row: r1, col: c1 } = start;
    const { row: r2, col: c2 } = end;
    const path = tryPath(grid, [point(r1, c1), point(r2, c2)], start, end);
    return path ? [path] : [];
  }

  /** 1 góc 90° — chữ L (2 biến thể) */
  function findOneTurnPaths(grid, start, end) {
    const { row: r1, col: c1 } = start;
    const { row: r2, col: c2 } = end;
    const candidates = [];

    const lHorizontalFirst = tryPath(grid, [
      point(r1, c1),
      point(r1, c2),
      point(r2, c2)
    ], start, end);
    if (lHorizontalFirst) candidates.push(lHorizontalFirst);

    const lVerticalFirst = tryPath(grid, [
      point(r1, c1),
      point(r2, c1),
      point(r2, c2)
    ], start, end);
    if (lVerticalFirst) candidates.push(lVerticalFirst);

    return candidates;
  }

  /** 2 góc 90° — chữ U / Z (Onet: quét hàng, cột, rồi góc trong) */
  function findTwoTurnPaths(grid, start, end, bounds) {
    const { row: r1, col: c1 } = start;
    const { row: r2, col: c2 } = end;
    const candidates = [];

    if (c1 === c2) {
      candidates.push(...scanBridgeLines(grid, start, end, 'col', bounds));
      candidates.push(...findInnerZPaths(grid, start, end));
      return candidates;
    }
    if (r1 === r2) {
      candidates.push(...scanBridgeLines(grid, start, end, 'row', bounds));
      candidates.push(...findInnerZPaths(grid, start, end));
      return candidates;
    }

    candidates.push(...scanBridgeLines(grid, start, end, 'row', bounds));
    candidates.push(...scanBridgeLines(grid, start, end, 'col', bounds));
    candidates.push(...findInnerZPaths(grid, start, end));
    return candidates;
  }

  function findStraightPath(grid, start, end) {
    const paths = findZeroTurnPaths(grid, start, end);
    return paths.length ? paths[0] : null;
  }

  function findOneTurnPath(grid, start, end) {
    return pickBestPath(findOneTurnPaths(grid, start, end), grid.length, grid[0].length);
  }

  function findTwoTurnPath(grid, start, end, bounds) {
    return pickBestPath(findTwoTurnPaths(grid, start, end, bounds), grid.length, grid[0].length);
  }

  function findInnerZPaths(grid, start, end) {
    const rows = grid.length;
    const cols = grid[0].length;
    const { row: r1, col: c1 } = start;
    const { row: r2, col: c2 } = end;
    const candidates = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] !== 0
          && !sameCell(r, c, start.row, start.col)
          && !sameCell(r, c, end.row, end.col)) {
          continue;
        }

        const pathA = tryPath(grid, [
          point(r1, c1),
          point(r1, c),
          point(r, c),
          point(r2, c2)
        ], start, end);
        if (pathA) candidates.push(pathA);

        const pathB = tryPath(grid, [
          point(r1, c1),
          point(r, c1),
          point(r, c2),
          point(r2, c2)
        ], start, end);
        if (pathB) candidates.push(pathB);
      }
    }

    return candidates;
  }

  function findPath(grid, r1, c1, r2, c2, bounds) {
    if (sameCell(r1, c1, r2, c2)) return null;
    if (!inGrid(grid, r1, c1) || !inGrid(grid, r2, c2)) return null;
    if (grid[r1][c1] === 0 || grid[r2][c2] === 0) return null;
    if (grid[r1][c1] !== grid[r2][c2]) return null;

    const start = point(r1, c1);
    const end = point(r2, c2);
    const candidates = [];

    const straight = findStraightPath(grid, start, end);
    if (straight) candidates.push(straight);

    const oneTurn = findOneTurnPath(grid, start, end);
    if (oneTurn) candidates.push(oneTurn);

    const twoTurn = findTwoTurnPath(grid, start, end, bounds);
    if (twoTurn) candidates.push(twoTurn);

    const best = pickBestPath(candidates, grid.length, grid[0].length);
    if (!best || !validatePath(grid, best, start, end) || pathCrossesOccupied(grid, best)) {
      return null;
    }
    return best;
  }

  function canConnect(grid, r1, c1, r2, c2, bounds) {
    return findPath(grid, r1, c1, r2, c2, bounds) !== null;
  }

  function findHint(grid, playableBounds) {
    const { minRow, maxRow, minCol, maxCol } = playableBounds;

    for (let r1 = minRow; r1 <= maxRow; r1++) {
      for (let c1 = minCol; c1 <= maxCol; c1++) {
        if (grid[r1][c1] === 0) continue;

        for (let r2 = minRow; r2 <= maxRow; r2++) {
          for (let c2 = minCol; c2 <= maxCol; c2++) {
            if (r2 < r1 || (r2 === r1 && c2 <= c1)) continue;
            if (grid[r2][c2] === 0) continue;
            if (grid[r1][c1] !== grid[r2][c2]) continue;

            const path = findPath(grid, r1, c1, r2, c2, playableBounds);
            if (path) {
              return { r1, c1, r2, c2, path };
            }
          }
        }
      }
    }
    return null;
  }

  function hasValidPair(grid, playableBounds) {
    return findHint(grid, playableBounds) !== null;
  }

  return {
    findPath,
    canConnect,
    findHint,
    hasValidPair,
    _validatePath: validatePath,
    _isPassable: isPassable,
    _isSegmentClear: isSegmentClear,
    _pathCrossesOccupied: pathCrossesOccupied
  };
})();
