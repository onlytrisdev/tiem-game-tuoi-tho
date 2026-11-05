/**
 * backgroundAssets.js — Ảnh nền theo cấp, không trùng trong một lượt chơi
 */
const BackgroundAssets = (function () {
  'use strict';

  const FILES = [
    'bg-01.jpg', 'bg-02.jpg', 'bg-03.jpg', 'bg-04.jpg', 'bg-05.jpg',
    'bg-06.jpg', 'bg-07.jpg', 'bg-08.jpg', 'bg-09.jpg', 'bg-10.jpg',
    'bg-11.jpg', 'bg-12.jpg', 'bg-13.jpg', 'bg-14.jpg'
  ];

  function isValidFile(filename) {
    return FILES.indexOf(filename) !== -1;
  }

  function storageKey() {
    const gid = new URLSearchParams(location.search).get('gid');
    return gid ? 'pikachu_trai_cay_bg_run_' + gid : 'pikachu_trai_cay_bg_run';
  }

  function emptyRunState() {
    return { assignments: {}, used: [] };
  }

  function loadRunState() {
    try {
      const raw = localStorage.getItem(storageKey());
      if (!raw) return emptyRunState();
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return emptyRunState();
      return {
        assignments: parsed.assignments && typeof parsed.assignments === 'object' ? parsed.assignments : {},
        used: Array.isArray(parsed.used) ? parsed.used.filter(isValidFile) : []
      };
    } catch (err) {
      console.warn('BackgroundAssets.loadRunState:', err);
      return emptyRunState();
    }
  }

  function saveRunState(state) {
    try {
      localStorage.setItem(storageKey(), JSON.stringify({
        assignments: state.assignments || {},
        used: state.used || []
      }));
    } catch (err) {
      console.warn('BackgroundAssets.saveRunState:', err);
    }
  }

  function resetRun() {
    saveRunState(emptyRunState());
  }

  function getAssetBase() {
    const path = window.location.pathname;
    return path.substring(0, path.lastIndexOf('/') + 1);
  }

  function getUrl(filename) {
    if (!filename) return '';
    return getAssetBase() + 'images/bg/' + filename;
  }

  function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /**
   * Bắt đầu lượt mới khi đã gán đủ nền cho mọi cấp và player vào lại cấp 1
   */
  function maybeStartNewRun(levelId, forceNew) {
    const id = parseInt(levelId, 10);
    const levelCount = typeof Board !== 'undefined' ? Board.LEVEL_COUNT : 9;
    const state = loadRunState();
    const assignedCount = Object.keys(state.assignments).length;

    if (forceNew && id === 1 && assignedCount >= levelCount) {
      resetRun();
    }
  }

  /**
   * Gán ảnh nền cho cấp — giữ cố định khi replay cùng cấp, không dùng lại ảnh đã xuất hiện ở cấp khác
   */
  function assignForLevel(levelId) {
    const id = String(parseInt(levelId, 10));
    const state = loadRunState();

    if (state.assignments[id] && isValidFile(state.assignments[id])) {
      return state.assignments[id];
    }

    if (state.assignments[id]) {
      delete state.assignments[id];
      state.used = state.used.filter(isValidFile);
      saveRunState(state);
    }

    let available = FILES.filter(function (f) { return state.used.indexOf(f) === -1; });
    if (available.length === 0) {
      resetRun();
      available = FILES.slice();
    }

    const pick = available[Math.floor(Math.random() * available.length)];
    state.assignments[id] = pick;
    if (state.used.indexOf(pick) === -1) {
      state.used.push(pick);
    }
    saveRunState(state);
    return pick;
  }

  function applyToGameScreen(levelId, options) {
    options = options || {};
    maybeStartNewRun(levelId, options.forceNew);

    const filename = assignForLevel(levelId);
    const screen = document.getElementById('game-screen');
    if (screen) {
      screen.style.backgroundImage = 'url("' + getUrl(filename) + '")';
    }
    return filename;
  }

  function clearGameScreenBackground() {
    const screen = document.getElementById('game-screen');
    if (screen) {
      screen.style.backgroundImage = '';
    }
  }

  return {
    FILES,
    resetRun,
    maybeStartNewRun,
    assignForLevel,
    getUrl,
    applyToGameScreen,
    clearGameScreenBackground,
    loadRunState,
    saveRunState
  };
})();
