/**
 * playerProgress.js — Kỷ lục 6 cấp + unlock level
 */
const PlayerProgress = (function () {
  'use strict';

  const VERSION = 4;
  const LEVEL_COUNT = Board.LEVEL_COUNT;

  /** TEST UI: true = mở khóa mọi cấp. Đặt false khi release. */
  const DEBUG_UNLOCK_ALL_LEVELS = false;

  function storageKey() {
    const gid = new URLSearchParams(location.search).get('gid');
    return gid ? 'pikachu_trai_cay_progress_' + gid : 'pikachu_trai_cay_progress';
  }

  function emptyBestScores() {
    const best = {};
    for (let i = 1; i <= LEVEL_COUNT; i++) {
      best[String(i)] = 0;
    }
    return best;
  }

  function emptyProgress() {
    return {
      version: VERSION,
      bestScores: emptyBestScores(),
      maxUnlockedLevel: 1,
      totalScore: 0,
      lastRound: null
    };
  }

  function calcTotal(bestScores) {
    let sum = 0;
    for (let i = 1; i <= LEVEL_COUNT; i++) {
      sum += parseInt(bestScores[String(i)], 10) || 0;
    }
    return sum;
  }

  function parseBestScores(source) {
    const best = emptyBestScores();
    if (!source || typeof source !== 'object') return best;

    if (source.easy !== undefined || source.normal !== undefined || source.hard !== undefined) {
      best['1'] = Math.max(0, parseInt(source.easy, 10) || 0);
      best['3'] = Math.max(0, parseInt(source.normal, 10) || 0);
      best['5'] = Math.max(0, parseInt(source.hard, 10) || 0);
      return best;
    }

    for (let i = 1; i <= LEVEL_COUNT; i++) {
      const n = parseInt(source[String(i)] ?? source[i], 10);
      best[String(i)] = Number.isFinite(n) && n >= 0 ? n : 0;
    }
    return best;
  }

  function normalize(meta) {
    if (!meta || typeof meta !== 'object') return emptyProgress();

    const bestScores = parseBestScores(meta.bestScores);
    let maxUnlockedLevel = parseInt(meta.maxUnlockedLevel, 10);
    if (!Number.isFinite(maxUnlockedLevel) || maxUnlockedLevel < 1) {
      maxUnlockedLevel = 1;
    }
    if (maxUnlockedLevel > LEVEL_COUNT) {
      maxUnlockedLevel = LEVEL_COUNT;
    }

    return {
      version: VERSION,
      bestScores: bestScores,
      maxUnlockedLevel: maxUnlockedLevel,
      totalScore: calcTotal(bestScores),
      lastRound: meta.lastRound || null
    };
  }

  function loadLocal() {
    try {
      const raw = localStorage.getItem(storageKey());
      if (!raw) return emptyProgress();
      return normalize(JSON.parse(raw));
    } catch (err) {
      console.warn('PlayerProgress.loadLocal:', err);
      return emptyProgress();
    }
  }

  function saveLocal(progress) {
    const data = normalize(progress);
    data.totalScore = calcTotal(data.bestScores);
    try {
      localStorage.setItem(storageKey(), JSON.stringify(data));
    } catch (err) {
      console.warn('PlayerProgress.saveLocal:', err);
    }
    return data;
  }

  function applyFromServer(serverMeta) {
    if (!serverMeta || typeof serverMeta !== 'object') return loadLocal();

    const local = loadLocal();
    const server = normalize(serverMeta);
    const merged = emptyProgress();

    for (let i = 1; i <= LEVEL_COUNT; i++) {
      const key = String(i);
      merged.bestScores[key] = Math.max(local.bestScores[key], server.bestScores[key]);
    }

    merged.maxUnlockedLevel = Math.max(local.maxUnlockedLevel, server.maxUnlockedLevel);

    if (serverMeta.CurrentLevel !== undefined && serverMeta.CurrentLevel !== null) {
      const currentLevel = parseInt(serverMeta.CurrentLevel, 10);
      if (Number.isFinite(currentLevel) && currentLevel >= 0) {
        merged.maxUnlockedLevel = Math.max(merged.maxUnlockedLevel, currentLevel + 1);
      }
    }

    merged.totalScore = calcTotal(merged.bestScores);

    const localAt = local.lastRound && local.lastRound.savedAt;
    const serverAt = server.lastRound && server.lastRound.savedAt;
    merged.lastRound = (serverAt && (!localAt || serverAt >= localAt))
      ? server.lastRound
      : local.lastRound;

    return saveLocal(merged);
  }

  function isLevelUnlocked(levelId, progress) {
    const id = parseInt(levelId, 10);
    if (DEBUG_UNLOCK_ALL_LEVELS) {
      return id >= 1 && id <= LEVEL_COUNT;
    }
    const data = progress || loadLocal();
    return id >= 1 && id <= data.maxUnlockedLevel;
  }

  function recordRound(levelId, roundScore, isVictory) {
    const progress = loadLocal();
    const id = parseInt(levelId, 10);
    const score = Math.max(0, parseInt(roundScore, 10) || 0);
    const key = String(id);

    if (id >= 1 && id <= LEVEL_COUNT && score > (progress.bestScores[key] || 0)) {
      progress.bestScores[key] = score;
    }

    if (isVictory && id < LEVEL_COUNT) {
      progress.maxUnlockedLevel = Math.max(progress.maxUnlockedLevel, id + 1);
    }

    progress.totalScore = calcTotal(progress.bestScores);
    progress.lastRound = {
      levelId: id,
      score: score,
      isVictory: !!isVictory,
      savedAt: new Date().toISOString()
    };

    return saveLocal(progress);
  }

  function toMetadata(progress) {
    const data = normalize(progress || loadLocal());
    const bestScores = {};
    for (let i = 1; i <= LEVEL_COUNT; i++) {
      bestScores[String(i)] = data.bestScores[String(i)];
    }

    return {
      version: VERSION,
      bestScores: bestScores,
      maxUnlockedLevel: data.maxUnlockedLevel,
      totalScore: data.totalScore,
      lastRound: data.lastRound
    };
  }

  return {
    VERSION,
    LEVEL_COUNT,
    storageKey,
    loadLocal,
    saveLocal,
    applyFromServer,
    isLevelUnlocked,
    recordRound,
    toMetadata,
    calcTotal
  };
})();
