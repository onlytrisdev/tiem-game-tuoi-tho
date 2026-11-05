/**
 * Arcade Auto Merge — vòng autoMergeCreature gốc.
 * Hiện sau tutorial merge (bàn tay). Lần đầu free; lần sau GVAdBreak; hồi 180s.
 */
(function (global) {
  'use strict';

  var STATE_KEY = 'gv_nuoi_rong_automerge:v1';
  var DURATION_SEC = 180;
  var COOLDOWN_SEC = 180;
  var WRAP_ID = 'gv-automerge-wrap';
  var BUTTON_ID = 'gv-btn-automerge';
  var LABEL_ID = 'gv-automerge-label';
  var TIMER_ID = 'gv-automerge-timer';
  var FREE_ID = 'gv-automerge-free';
  var QC_ID = 'gv-automerge-qc';
  var GAME_STATE_KEY = 'flambe:kizilandgameState';

  var watchingAd = false;
  var uiTimer = 0;
  var tutorialDoneCached = false;

  function nowMs() {
    return Date.now();
  }

  function showToast(message) {
    if (global.ArcadeScore && typeof global.ArcadeScore.showToast === 'function') {
      global.ArcadeScore.showToast(message);
      return;
    }
    try {
      console.log('[ArcadeAutoMerge]', message);
    } catch (e) {
      /* ignore */
    }
  }

  function defaultState() {
    return {
      usedFree: false,
      cooldownUntil: 0,
      sessionEndsAt: 0
    };
  }

  function readState() {
    try {
      var raw = global.localStorage.getItem(STATE_KEY);
      if (!raw) return defaultState();
      var o = JSON.parse(raw);
      return {
        usedFree: !!o.usedFree,
        cooldownUntil: Math.max(0, Number(o.cooldownUntil) || 0),
        sessionEndsAt: Math.max(0, Number(o.sessionEndsAt) || 0)
      };
    } catch (e) {
      return defaultState();
    }
  }

  function writeState(state) {
    try {
      global.localStorage.setItem(STATE_KEY, JSON.stringify(state));
    } catch (e) {
      /* ignore */
    }
    return state;
  }

  function normalizeState(state) {
    state = state || readState();
    var t = nowMs();
    if (state.sessionEndsAt > 0 && t >= state.sessionEndsAt) {
      if (!state.cooldownUntil || state.cooldownUntil < state.sessionEndsAt) {
        state.cooldownUntil = state.sessionEndsAt + COOLDOWN_SEC * 1000;
      }
      state.sessionEndsAt = 0;
      global.__gvAutoMergeForce = false;
      global.__gvAutoMergeStartSec = 0;
      global.__gvAutoMergeStop = true;
      writeState(state);
    }
    return state;
  }

  function remainingMs(until) {
    return Math.max(0, (until || 0) - nowMs());
  }

  function formatMmSs(ms) {
    var sec = Math.max(0, Math.ceil(ms / 1000));
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function remainingRunSec(state) {
    return Math.max(0, Math.ceil(remainingMs(state.sessionEndsAt) / 1000));
  }

  function isRunning(state) {
    state = state || normalizeState(readState());
    return remainingMs(state.sessionEndsAt) > 0;
  }

  function isCooling(state) {
    state = state || normalizeState(readState());
    return !isRunning(state) && remainingMs(state.cooldownUntil) > 0;
  }

  function isCanvasMounted() {
    var canvas =
      document.getElementById('content-canvas') ||
      document.querySelector('#content canvas') ||
      document.querySelector('canvas');
    if (!canvas) return false;
    var width = canvas.width || canvas.clientWidth || 0;
    var height = canvas.height || canvas.clientHeight || 0;
    return width >= 32 && height >= 32;
  }

  function gameStateKey() {
    if (global.ArcadeSave && global.ArcadeSave.GAME_STATE_KEY) {
      return global.ArcadeSave.GAME_STATE_KEY;
    }
    return GAME_STATE_KEY;
  }

  function parseHaxeBoolField(blob, field) {
    if (!blob || !field) return null;
    var escaped = String(field).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    var m = String(blob).match(new RegExp('y\\d+:' + escaped + '([tf])'));
    if (!m) return null;
    return m[1] === 't';
  }

  function parseHaxeIntField(blob, field) {
    if (!blob || !field) return 0;
    if (global.ArcadeSave && typeof global.ArcadeSave.parseProgressFromBlob === 'function' && field === 'maxCreatureLevelReached') {
      try {
        var p = global.ArcadeSave.parseProgressFromBlob(blob);
        return Math.max(0, Math.floor(Number(p.maxCreatureLevelReached) || 0));
      } catch (e) {
        /* fall through */
      }
    }
    var escaped = String(field).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    var m = String(blob).match(new RegExp('y\\d+:' + escaped + '(z|i(-?\\d+)|d([\\d.eE+-]+))'));
    if (!m) return 0;
    if (m[1] === 'z') return 0;
    if (m[2] != null) return Math.max(0, parseInt(m[2], 10));
    if (m[3] != null) return Math.max(0, Math.floor(Number(m[3]) || 0));
    return 0;
  }

  function countCreaturesInBlob(blob) {
    if (!blob) return 0;
    var matches = String(blob).match(/y5:level(?:z|i-?\d+|d[\d.eE+-]+)/g);
    return matches ? matches.length : 0;
  }

  function isMergeTutorialDone() {
    if (tutorialDoneCached) return true;
    try {
      var blob = global.localStorage.getItem(gameStateKey());
      if (!blob) return false;
      var mergeDone = parseHaxeBoolField(blob, 'isFirstMergeTutorialDone');
      if (mergeDone === true) {
        tutorialDoneCached = true;
        return true;
      }
      var maxLevel = parseHaxeIntField(blob, 'maxCreatureLevelReached');
      if (maxLevel >= 1) {
        tutorialDoneCached = true;
        return true;
      }
      var eggDone = parseHaxeBoolField(blob, 'isFirstEggTutorialDone');
      if (eggDone === true && countCreaturesInBlob(blob) >= 1) {
        tutorialDoneCached = true;
        return true;
      }
    } catch (e) {
      return false;
    }
    return false;
  }

  function shouldShow() {
    return isMergeTutorialDone() && isCanvasMounted();
  }

  function startSession() {
    var state = normalizeState(readState());
    var endsAt = nowMs() + DURATION_SEC * 1000;
    state.usedFree = true;
    state.sessionEndsAt = endsAt;
    state.cooldownUntil = endsAt + COOLDOWN_SEC * 1000;
    writeState(state);
    global.__gvAutoMergeStartSec = DURATION_SEC;
    global.__gvAutoMergeForce = true;
    global.__gvAutoMergeStop = false;
    showToast('Tự động gộp 180 giây');
    refreshButton();
    return true;
  }

  function showRewardAd(successCb, failCb) {
    if (typeof global.GVAdBreak !== 'function') {
      if (typeof failCb === 'function') failCb();
      return;
    }
    try {
      global.GVAdBreak(function () {
        if (typeof successCb === 'function') successCb();
      });
    } catch (e) {
      console.warn('[ArcadeAutoMerge] GVAdBreak error', e);
      if (typeof failCb === 'function') failCb();
    }
  }

  function tryActivate() {
    if (!shouldShow()) return false;
    var state = normalizeState(readState());
    if (watchingAd) {
      showToast('Đang xem quảng cáo...');
      return false;
    }
    if (isRunning(state)) {
      showToast('Tự động gộp đang chạy: ' + remainingRunSec(state) + 's');
      return false;
    }
    if (isCooling(state)) {
      showToast('Đang hồi chiêu: ' + formatMmSs(remainingMs(state.cooldownUntil)));
      return false;
    }
    if (!state.usedFree) {
      return startSession();
    }
    watchingAd = true;
    refreshButton();
    showToast('Xem quảng cáo để tự động gộp');
    showRewardAd(
      function () {
        watchingAd = false;
        startSession();
      },
      function () {
        watchingAd = false;
        showToast('Không xem được quảng cáo — chưa kích hoạt.');
        refreshButton();
      }
    );
    return true;
  }

  function setHidden(el, hidden) {
    if (!el) return;
    if (hidden) {
      el.hidden = true;
      el.setAttribute('aria-hidden', 'true');
    } else {
      el.hidden = false;
      el.setAttribute('aria-hidden', 'false');
    }
  }

  function refreshButton() {
    var wrap = document.getElementById(WRAP_ID);
    var btn = document.getElementById(BUTTON_ID);
    var label = document.getElementById(LABEL_ID);
    var timer = document.getElementById(TIMER_ID);
    var freeBadge = document.getElementById(FREE_ID);
    var qcIcon = document.getElementById(QC_ID);
    if (!btn) return;

    var show = shouldShow();
    if (wrap) {
      wrap.hidden = !show;
      wrap.classList.toggle('gv-visible', show);
      wrap.setAttribute('aria-hidden', show ? 'false' : 'true');
    }
    btn.hidden = !show;
    btn.classList.toggle('gv-visible', show);

    if (!show) return;

    var state = normalizeState(readState());
    var running = isRunning(state);
    var cooling = isCooling(state);
    btn.classList.toggle('gv-running', running);
    btn.classList.toggle('gv-cooldown', cooling && !running);
    btn.classList.toggle('gv-busy', watchingAd);
    btn.classList.toggle('gv-needs-ad', !!state.usedFree && !running && !cooling && !watchingAd);

    if (label) label.textContent = 'Tự động\ngộp';
    setHidden(freeBadge, state.usedFree || running || cooling || watchingAd);
    setHidden(qcIcon, !state.usedFree || running);
    if (qcIcon) qcIcon.setAttribute('aria-hidden', !state.usedFree || running ? 'true' : 'false');

    if (timer) {
      if (running) {
        timer.hidden = false;
        timer.textContent = remainingRunSec(state) + 's';
      } else if (cooling) {
        timer.hidden = false;
        timer.textContent = 'Hồi ' + formatMmSs(remainingMs(state.cooldownUntil));
      } else if (watchingAd) {
        timer.hidden = false;
        timer.textContent = 'QC...';
      } else {
        timer.hidden = true;
        timer.textContent = '';
      }
    }

    btn.setAttribute('aria-label', 'Tự động gộp');
    if (running) btn.title = 'Tự động gộp đang chạy';
    else if (cooling) btn.title = 'Đang hồi chiêu';
    else if (!state.usedFree) btn.title = 'Tự động gộp miễn phí 180 giây';
    else btn.title = 'Xem QC để tự động gộp 180 giây';
  }

  function startUiTick() {
    if (uiTimer) return;
    uiTimer = setInterval(refreshButton, 250);
  }

  function bind() {
    var btn = document.getElementById(BUTTON_ID);
    if (!btn || btn.__gvBound) return;
    btn.__gvBound = true;
    btn.addEventListener('click', function () {
      tryActivate();
    });
    refreshButton();
    startUiTick();
  }

  function start() {
    var state = normalizeState(readState());
    if (isRunning(state)) global.__gvAutoMergeForce = true;
    bind();
    refreshButton();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

  global.ArcadeAutoMerge = {
    STATE_KEY: STATE_KEY,
    DURATION_SEC: DURATION_SEC,
    COOLDOWN_SEC: COOLDOWN_SEC,
    readState: readState,
    isMergeTutorialDone: isMergeTutorialDone,
    shouldShow: shouldShow,
    tryActivate: tryActivate,
    refreshButton: refreshButton,
    start: start
  };
})(window);
