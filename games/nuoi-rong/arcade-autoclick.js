/**
 * Arcade Auto Click — mỗi 1s click mọi Kizi trên world hiện tại (thêm xu).
 * Lần đầu free 180s; lần sau GVAdBreak; hồi 180s. Hiện cùng lúc với Auto merge.
 */
(function (global) {
  'use strict';

  var STATE_KEY = 'gv_nuoi_rong_autoclick:v1';
  var DURATION_SEC = 180;
  var COOLDOWN_SEC = 180;
  var WRAP_ID = 'gv-autoclick-wrap';
  var BUTTON_ID = 'gv-btn-autoclick';
  var LABEL_ID = 'gv-autoclick-label';
  var TIMER_ID = 'gv-autoclick-timer';
  var FREE_ID = 'gv-autoclick-free';
  var QC_ID = 'gv-autoclick-qc';

  var watchingAd = false;
  var uiTimer = 0;
  var lastPulseAt = 0;

  function nowMs() {
    return Date.now();
  }

  function showToast(message) {
    if (global.ArcadeScore && typeof global.ArcadeScore.showToast === 'function') {
      global.ArcadeScore.showToast(message);
      return;
    }
    try {
      console.log('[ArcadeAutoClick]', message);
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
      global.__gvAutoClickStop = true;
      global.__gvAutoClickPulse = false;
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

  function shouldShow() {
    if (global.ArcadeAutoMerge && typeof global.ArcadeAutoMerge.shouldShow === 'function') {
      return global.ArcadeAutoMerge.shouldShow();
    }
    return false;
  }

  function pulseIfRunning() {
    var state = normalizeState(readState());
    if (!isRunning(state)) return;
    var t = nowMs();
    if (t - lastPulseAt < 1000) return;
    lastPulseAt = t;
    global.__gvAutoClickPulse = true;
  }

  function startSession() {
    var state = normalizeState(readState());
    var endsAt = nowMs() + DURATION_SEC * 1000;
    state.usedFree = true;
    state.sessionEndsAt = endsAt;
    state.cooldownUntil = endsAt + COOLDOWN_SEC * 1000;
    writeState(state);
    lastPulseAt = 0;
    global.__gvAutoClickStop = false;
    global.__gvAutoClickPulse = true;
    showToast('Tự động click 180 giây');
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
      console.warn('[ArcadeAutoClick] GVAdBreak error', e);
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
      showToast('Tự động click đang chạy: ' + remainingRunSec(state) + 's');
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
    showToast('Xem quảng cáo để tự động click');
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

    pulseIfRunning();

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

    if (label) label.textContent = 'Tự động\nClick';
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

    btn.setAttribute('aria-label', 'Tự động click');
    if (running) btn.title = 'Tự động click đang chạy';
    else if (cooling) btn.title = 'Đang hồi chiêu';
    else if (!state.usedFree) btn.title = 'Tự động click miễn phí 180 giây';
    else btn.title = 'Xem QC để tự động click 180 giây';
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
    normalizeState(readState());
    bind();
    refreshButton();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

  global.ArcadeAutoClick = {
    STATE_KEY: STATE_KEY,
    DURATION_SEC: DURATION_SEC,
    COOLDOWN_SEC: COOLDOWN_SEC,
    readState: readState,
    shouldShow: shouldShow,
    tryActivate: tryActivate,
    refreshButton: refreshButton,
    start: start
  };
})(window);
