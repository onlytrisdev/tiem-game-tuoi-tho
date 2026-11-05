/**
 * gameSession.js — Lưu / khôi phục ván chơi dở (grid + điểm + thời gian)
 * Đồng bộ qua GameHistory API (gid + token) và localStorage dự phòng.
 */
const GameSession = (function () {
  'use strict';

  const VERSION = 2;

  function storageKey() {
    const gid = new URLSearchParams(location.search).get('gid');
    return gid ? 'pikachu_trai_cay_session_' + gid : 'pikachu_trai_cay_session';
  }

  function cloneGrid(grid) {
    return grid.map(function (row) { return row.slice(); });
  }

  function readElapsed(raw) {
    if (raw.elapsedSeconds !== undefined && raw.elapsedSeconds !== null) {
      return Math.max(0, parseInt(raw.elapsedSeconds, 10) || 0);
    }
    return 0;
  }

  /**
   * Tạo snapshot từ state runtime — gọi khi game over (thua / bỏ dở)
   * @param {object|null} boardState
   * @param {object} runtime
   * @param {boolean} isVictory
   */
  function createSnapshot(boardState, runtime, isVictory) {
    if (isVictory || !boardState) return null;

    const remaining = Board.countRemainingTiles(boardState.grid, boardState.bounds);
    if (remaining <= 0) return null;

    return {
      version: VERSION,
      board: {
        levelId: boardState.levelId,
        playableRows: boardState.playableRows,
        playableCols: boardState.playableCols,
        grid: cloneGrid(boardState.grid)
      },
      score: Math.max(0, parseInt(runtime.score, 10) || 0),
      elapsedSeconds: readElapsed(runtime),
      backgroundFile: runtime.backgroundFile || null,
      hintsLeft: Math.max(0, parseInt(runtime.hintsLeft, 10) || 0),
      shufflesLeft: Math.max(0, parseInt(runtime.shufflesLeft, 10) || 0),
      hintAdWatchedThisLevel: !!runtime.hintAdWatchedThisLevel,
      shuffleAdWatchedThisLevel: !!runtime.shuffleAdWatchedThisLevel,
      hintsUsedThisLevel: Math.max(0, parseInt(runtime.hintsUsedThisLevel, 10) || 0),
      shufflesUsedThisLevel: Math.max(0, parseInt(runtime.shufflesUsedThisLevel, 10) || 0),
      matchPointsTotal: Math.max(0, parseInt(runtime.matchPointsTotal, 10) || 0),
      savedAt: new Date().toISOString()
    };
  }

  function normalizeSession(raw) {
    if (!raw || typeof raw !== 'object') return null;
    if (!raw.board || !raw.board.grid) return null;

    const board = Board.restoreFromSaved(raw.board);
    if (!board) return null;

    if (Board.countRemainingTiles(board.grid, board.bounds) <= 0) return null;

    return {
      version: VERSION,
      board: {
        levelId: board.levelId,
        playableRows: board.playableRows,
        playableCols: board.playableCols,
        grid: cloneGrid(board.grid)
      },
      score: Math.max(0, parseInt(raw.score, 10) || 0),
      elapsedSeconds: readElapsed(raw),
      backgroundFile: raw.backgroundFile || null,
      hintsLeft: Math.max(0, parseInt(raw.hintsLeft, 10) || 0),
      shufflesLeft: Math.max(0, parseInt(raw.shufflesLeft, 10) || 0),
      hintAdWatchedThisLevel: !!raw.hintAdWatchedThisLevel,
      shuffleAdWatchedThisLevel: !!raw.shuffleAdWatchedThisLevel,
      hintsUsedThisLevel: Math.max(0, parseInt(raw.hintsUsedThisLevel, 10) || 0),
      shufflesUsedThisLevel: Math.max(0, parseInt(raw.shufflesUsedThisLevel, 10) || 0),
      matchPointsTotal: Math.max(0, parseInt(raw.matchPointsTotal, 10) || 0),
      savedAt: raw.savedAt || null
    };
  }

  function loadLocal() {
    try {
      const raw = localStorage.getItem(storageKey());
      if (!raw) return null;
      const normalized = normalizeSession(JSON.parse(raw));
      if (!normalized) {
        localStorage.removeItem(storageKey());
        return null;
      }
      return normalized;
    } catch (err) {
      console.warn('GameSession.loadLocal:', err);
      return null;
    }
  }

  function saveLocal(session) {
    try {
      if (!session) {
        localStorage.removeItem(storageKey());
        return;
      }
      const normalized = normalizeSession(session);
      if (!normalized) {
        localStorage.removeItem(storageKey());
        return;
      }
      localStorage.setItem(storageKey(), JSON.stringify(normalized));
    } catch (err) {
      console.warn('GameSession.saveLocal:', err);
    }
  }

  function clearLocal() {
    try {
      localStorage.removeItem(storageKey());
    } catch (err) {
      console.warn('GameSession.clearLocal:', err);
    }
  }

  function mergeSessions(serverSession, localSession) {
    const server = normalizeSession(serverSession);
    const local = normalizeSession(localSession);

    if (!server) return local;
    if (!local) return server;

    const serverAt = server.savedAt || '';
    const localAt = local.savedAt || '';
    return localAt >= serverAt ? local : server;
  }

  function applyFromServer(serverMeta) {
    const serverSession = serverMeta && serverMeta.currentSession;
    const merged = mergeSessions(serverSession, loadLocal());
    saveLocal(merged);
    return merged;
  }

  function canResume(session, levelId) {
    const s = normalizeSession(session);
    if (!s) return false;
    if (levelId && s.board.levelId !== parseInt(levelId, 10)) return false;
    return true;
  }

  function getResumeLevelId(session) {
    const s = normalizeSession(session);
    return s ? s.board.levelId : null;
  }

  function restore(session) {
    const s = normalizeSession(session);
    if (!s) return null;

    const boardState = Board.restoreFromSaved(s.board);
    if (!boardState) return null;

    return {
      boardState: boardState,
      score: s.score,
      elapsedSeconds: s.elapsedSeconds,
      backgroundFile: s.backgroundFile,
      hintsLeft: s.hintsLeft,
      shufflesLeft: s.shufflesLeft,
      hintAdWatchedThisLevel: s.hintAdWatchedThisLevel,
      shuffleAdWatchedThisLevel: s.shuffleAdWatchedThisLevel,
      hintsUsedThisLevel: s.hintsUsedThisLevel,
      shufflesUsedThisLevel: s.shufflesUsedThisLevel,
      matchPointsTotal: s.matchPointsTotal
    };
  }

  function buildMetadata(progress, session) {
    if (typeof CloudSave !== 'undefined') {
      return CloudSave.buildMetadata(progress, session);
    }

    const data = PlayerProgress.toMetadata(progress);
    const snap = normalizeSession(session);
    const maxUnlocked = parseInt(data.maxUnlockedLevel, 10) || 1;

    return Object.assign({}, data, {
      CurrentLevel: Math.max(0, maxUnlocked - 1),
      TotalScore: data.totalScore,
      CurrentStage: 0,
      currentSession: snap
    });
  }

  function getStoredSession() {
    return loadLocal();
  }

  return {
    VERSION,
    createSnapshot,
    normalizeSession,
    loadLocal,
    saveLocal,
    clearLocal,
    applyFromServer,
    canResume,
    getResumeLevelId,
    getResumeDifficulty: getResumeLevelId,
    restore,
    buildMetadata,
    getStoredSession
  };
})();
