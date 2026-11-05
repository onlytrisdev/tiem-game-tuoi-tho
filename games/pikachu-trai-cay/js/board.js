/**
 * board.js — Quản lý bàn chơi, sinh cặp icon, xáo trộn
 */
const Board = (function () {
  'use strict';

  const BORDER = 1;
  const LEVEL_COUNT = 9;
  const SCORE_PER_MATCH = 100;
  const SCORE_HINT_ASSISTED_MATCH = 80;
  const SCORE_PENALTY_HINT_USE = 15;
  const SCORE_PENALTY_SHUFFLE_USE = 25;
  const SCORE_CLEAN_BONUS = 100;
  /** Trừ điểm mỗi giây khi hoàn thành cấp — càng lâu càng ít điểm */
  const TIME_PENALTY_PER_SEC = 2;

  /** 9 cấp — phương án B, tối ưu màn ngang; 1–3 Dễ, 4–6 Thường, 7–9 Khó */
  const LEVELS = [
    { id: 1, rows: 4, cols: 10, tier: 'easy', label: 'Cấp 1' },
    { id: 2, rows: 4, cols: 11, tier: 'easy', label: 'Cấp 2' },
    { id: 3, rows: 4, cols: 12, tier: 'easy', label: 'Cấp 3' },
    { id: 4, rows: 5, cols: 12, tier: 'normal', label: 'Cấp 4' },
    { id: 5, rows: 6, cols: 10, tier: 'normal', label: 'Cấp 5' },
    { id: 6, rows: 6, cols: 11, tier: 'normal', label: 'Cấp 6' },
    { id: 7, rows: 6, cols: 12, tier: 'hard', label: 'Cấp 7' },
    { id: 8, rows: 7, cols: 12, tier: 'hard', label: 'Cấp 8' },
    { id: 9, rows: 8, cols: 12, tier: 'hard', label: 'Cấp 9' }
  ];

  const TIER_LABELS = { easy: 'Dễ', normal: 'Thường', hard: 'Khó' };

  function getTotalIcons() {
    return FruitAssets.TOTAL;
  }

  function getLevel(levelId) {
    const id = parseInt(levelId, 10);
    return LEVELS.find(function (lv) { return lv.id === id; }) || null;
  }

  function getLevelConfig(levelId) {
    const lv = getLevel(levelId);
    if (!lv) return null;
    return {
      levelId: lv.id,
      tier: lv.tier,
      tierLabel: TIER_LABELS[lv.tier],
      label: lv.label,
      scorePerMatch: SCORE_PER_MATCH,
      hints: 3,
      shuffles: 3
    };
  }

  function calcTimePenalty(elapsedSeconds) {
    const sec = Math.max(0, parseInt(elapsedSeconds, 10) || 0);
    return sec * TIME_PENALTY_PER_SEC;
  }

  function applyTimePenalty(rawScore, elapsedSeconds) {
    const score = Math.max(0, parseInt(rawScore, 10) || 0);
    return Math.max(0, score - calcTimePenalty(elapsedSeconds));
  }

  function calcMatchScore(isHintAssisted) {
    return isHintAssisted ? SCORE_HINT_ASSISTED_MATCH : SCORE_PER_MATCH;
  }

  function isSameTilePair(aRow, aCol, bRow, bCol, hint) {
    if (!hint) return false;
    return (aRow === hint.r1 && aCol === hint.c1 && bRow === hint.r2 && bCol === hint.c2)
      || (aRow === hint.r2 && aCol === hint.c2 && bRow === hint.r1 && bCol === hint.c1);
  }

  /**
   * Điểm cuối khi thắng: điểm đang chạy − thời gian + bonus sạch (0 gợi ý & 0 xáo player).
   */
  function finalizeVictoryScore(runningScore, elapsedSeconds, hintsUsed, shufflesUsed) {
    const base = Math.max(0, parseInt(runningScore, 10) || 0);
    const timePenalty = calcTimePenalty(elapsedSeconds);
    const cleanBonus = (Math.max(0, parseInt(hintsUsed, 10) || 0) === 0
      && Math.max(0, parseInt(shufflesUsed, 10) || 0) === 0)
      ? SCORE_CLEAN_BONUS
      : 0;
    const finalScore = Math.max(0, base - timePenalty + cleanBonus);

    return {
      finalScore: finalScore,
      timePenalty: timePenalty,
      cleanBonus: cleanBonus,
      hintPenalty: Math.max(0, parseInt(hintsUsed, 10) || 0) * SCORE_PENALTY_HINT_USE,
      shufflePenalty: Math.max(0, parseInt(shufflesUsed, 10) || 0) * SCORE_PENALTY_SHUFFLE_USE
    };
  }

  function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function generatePairs(playableRows, playableCols) {
    const totalCells = playableRows * playableCols;
    if (totalCells % 2 !== 0) {
      throw new Error('Số ô chơi phải chẵn');
    }
    const totalIcons = getTotalIcons();
    const pairCount = totalCells / 2;
    const iconPool = [];
    for (let i = 0; i < pairCount; i++) {
      const iconId = (i % totalIcons) + 1;
      iconPool.push(iconId, iconId);
    }
    return shuffleArray(iconPool);
  }

  function createGrid(playableRows, playableCols, pairs) {
    const totalRows = playableRows + BORDER * 2;
    const totalCols = playableCols + BORDER * 2;
    const grid = Array.from({ length: totalRows }, () => new Array(totalCols).fill(0));

    let idx = 0;
    for (let r = BORDER; r < BORDER + playableRows; r++) {
      for (let c = BORDER; c < BORDER + playableCols; c++) {
        grid[r][c] = pairs[idx++];
      }
    }
    return grid;
  }

  function getPlayableBounds(grid) {
    return {
      minRow: BORDER,
      maxRow: grid.length - BORDER - 1,
      minCol: BORDER,
      maxCol: grid[0].length - BORDER - 1
    };
  }

  function countRemainingTiles(grid, bounds) {
    let count = 0;
    for (let r = bounds.minRow; r <= bounds.maxRow; r++) {
      for (let c = bounds.minCol; c <= bounds.maxCol; c++) {
        if (grid[r][c] !== 0) count++;
      }
    }
    return count;
  }

  function removeTiles(grid, r1, c1, r2, c2) {
    grid[r1][c1] = 0;
    grid[r2][c2] = 0;
  }

  function collectActiveTiles(grid, bounds) {
    const tiles = [];
    const positions = [];

    for (let r = bounds.minRow; r <= bounds.maxRow; r++) {
      for (let c = bounds.minCol; c <= bounds.maxCol; c++) {
        if (grid[r][c] !== 0) {
          tiles.push(grid[r][c]);
          positions.push({ row: r, col: c });
        }
      }
    }

    return { tiles, positions };
  }

  function findDuplicateIcon(tiles) {
    const counts = new Map();
    for (const iconId of tiles) {
      counts.set(iconId, (counts.get(iconId) || 0) + 1);
      if (counts.get(iconId) >= 2) return iconId;
    }
    return null;
  }

  function getGuaranteedAnchorPositions(bounds) {
    return {
      a: { row: bounds.minRow, col: bounds.minCol },
      b: { row: bounds.minRow, col: bounds.maxCol }
    };
  }

  function posKey(row, col) {
    return `${row},${col}`;
  }

  function applyGuaranteedLayout(grid, bounds, tiles, positions) {
    const pairIcon = findDuplicateIcon(tiles);
    if (!pairIcon) return false;

    const { a, b } = getGuaranteedAnchorPositions(bounds);
    const anchorAKey = posKey(a.row, a.col);
    const anchorBKey = posKey(b.row, b.col);

    const pool = [];
    let pairRemoved = 0;
    for (const iconId of tiles) {
      if (iconId === pairIcon && pairRemoved < 2) {
        pairRemoved++;
        continue;
      }
      pool.push(iconId);
    }

    const shuffledPool = shuffleArray(pool);
    const assignment = new Map();
    assignment.set(anchorAKey, pairIcon);
    assignment.set(anchorBKey, pairIcon);

    let poolIdx = 0;
    for (const pos of positions) {
      const key = posKey(pos.row, pos.col);
      if (assignment.has(key)) continue;
      assignment.set(key, shuffledPool[poolIdx++]);
    }

    positions.forEach(pos => {
      grid[pos.row][pos.col] = assignment.get(posKey(pos.row, pos.col));
    });

    return Pathfinder.hasValidPair(grid, bounds);
  }

  function shuffleBoard(grid, bounds) {
    const { tiles, positions } = collectActiveTiles(grid, bounds);
    if (tiles.length < 2) return false;

    const maxAttempts = 400;
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const shuffled = shuffleArray(tiles);
      positions.forEach((pos, i) => {
        grid[pos.row][pos.col] = shuffled[i];
      });
      if (Pathfinder.hasValidPair(grid, bounds)) {
        return true;
      }
    }

    return applyGuaranteedLayout(grid, bounds, tiles, positions);
  }

  function ensureValidPair(grid, bounds) {
    if (Pathfinder.hasValidPair(grid, bounds)) return true;

    const { tiles, positions } = collectActiveTiles(grid, bounds);
    if (tiles.length < 2) return false;

    return shuffleBoard(grid, bounds) || applyGuaranteedLayout(grid, bounds, tiles, positions);
  }

  function create(levelId) {
    const level = getLevel(levelId);
    if (!level) throw new Error('Level không hợp lệ: ' + levelId);

    const config = getLevelConfig(level.id);
    const pairs = generatePairs(level.rows, level.cols);
    const grid = createGrid(level.rows, level.cols, pairs);
    const bounds = getPlayableBounds(grid);
    ensureValidPair(grid, bounds);

    return {
      levelId: level.id,
      tier: level.tier,
      config,
      playableRows: level.rows,
      playableCols: level.cols,
      grid,
      bounds
    };
  }

  function restoreFromSaved(saved) {
    if (!saved || !saved.grid || !Array.isArray(saved.grid) || saved.grid.length === 0) {
      return null;
    }

    let levelId = saved.levelId;
    if (!levelId && saved.difficulty) {
      const legacyMap = { easy: 1, normal: 4, hard: 7 };
      levelId = legacyMap[saved.difficulty] || 1;
    }

    const level = getLevel(levelId);
    if (!level) return null;

    const playableRows = saved.playableRows || level.rows;
    const playableCols = saved.playableCols || level.cols;
    const expectedRows = playableRows + BORDER * 2;
    const expectedCols = playableCols + BORDER * 2;
    if (saved.grid.length !== expectedRows) return null;
    if (saved.grid[0].length !== expectedCols) return null;

    const grid = saved.grid.map(function (row) { return row.slice(); });
    const bounds = getPlayableBounds(grid);
    const config = getLevelConfig(level.id);

    return {
      levelId: level.id,
      tier: level.tier,
      config,
      playableRows,
      playableCols,
      grid,
      bounds
    };
  }

  return {
    LEVELS,
    LEVEL_COUNT,
    SCORE_PER_MATCH,
    SCORE_HINT_ASSISTED_MATCH,
    SCORE_PENALTY_HINT_USE,
    SCORE_PENALTY_SHUFFLE_USE,
    SCORE_CLEAN_BONUS,
    TIME_PENALTY_PER_SEC,
    calcMatchScore,
    isSameTilePair,
    finalizeVictoryScore,
    BORDER,
    TIER_LABELS,
    getLevel,
    getLevelConfig,
    getTotalIcons,
    calcTimePenalty,
    applyTimePenalty,
    create,
    restoreFromSaved,
    getPlayableBounds,
    countRemainingTiles,
    removeTiles,
    shuffleBoard,
    ensureValidPair
  };
})();