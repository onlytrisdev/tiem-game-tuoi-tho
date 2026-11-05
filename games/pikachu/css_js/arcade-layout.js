/**
 * Arcade layout — scale fit landscape + Safari iOS helpers.
 */
(function (global) {
  'use strict';

  var DESIGN_W = 993;
  var DESIGN_H = 646;
  var resizeTimer = 0;
  var audioUnlocked = false;
  var timerWasRunning = false;
  var timerPausedForLeaderboard = false;
  var leaderboardPauseActive = false;
  var leaderboardCloseObserver = null;
  var leaderboardOpenCheckTimer = 0;
  var leaderboardSafetyPollTimer = 0;
  var LEADERBOARD_OPEN_GRACE_MS = 2500;
  var LEADERBOARD_SAFETY_POLL_MS = 2000;

  function getViewportSize() {
    var vv = global.visualViewport;
    if (vv && vv.width && vv.height) {
      return { w: vv.width, h: vv.height };
    }
    return {
      w: global.innerWidth || document.documentElement.clientWidth || DESIGN_W,
      h: global.innerHeight || document.documentElement.clientHeight || DESIGN_H
    };
  }

  function fitStage() {
    var wrap = document.getElementById('gv-scale-wrap');
    var stage = document.getElementById('gv-stage');
    if (!wrap || !stage) {
      return;
    }

    var vp = getViewportSize();
    var scale = Math.min(vp.w / DESIGN_W, vp.h / DESIGN_H);
    if (!(scale > 0) || !isFinite(scale)) {
      scale = 1;
    }

    wrap.style.position = 'relative';
    wrap.style.left = '';
    wrap.style.top = '';
    wrap.style.width = DESIGN_W + 'px';
    wrap.style.height = DESIGN_H + 'px';
    wrap.style.margin = '';
    wrap.style.transformOrigin = '0 0';
    wrap.style.webkitTransformOrigin = '0 0';
    wrap.style.transform = 'scale(' + scale + ')';
    wrap.style.webkitTransform = 'scale(' + scale + ')';

    stage.style.left = '50%';
    stage.style.top = '50%';
    stage.style.right = 'auto';
    stage.style.bottom = 'auto';
    stage.style.transform = 'translate(-50%, -50%)';
    stage.style.webkitTransform = 'translate(-50%, -50%)';
    stage.style.width = Math.round(DESIGN_W * scale) + 'px';
    stage.style.height = Math.round(DESIGN_H * scale) + 'px';
    stage.style.overflow = 'hidden';

    /* Neo settings vào góc trên-phải khung game (993×646) */
    var settings = document.getElementById('gv-settings');
    if (settings) {
      settings.style.position = 'absolute';
      settings.style.top = '8px';
      settings.style.left = (DESIGN_W - 52 - 8) + 'px';
      settings.style.right = 'auto';
      settings.style.bottom = 'auto';
      settings.style.zIndex = '10050';
      settings.style.width = '52px';
      settings.style.height = '52px';
      settings.style.margin = '0';
      settings.style.padding = '0';
      settings.style.background = 'transparent';
    }
  }

  function scheduleFit() {
    if (resizeTimer) {
      clearTimeout(resizeTimer);
    }
    resizeTimer = setTimeout(fitStage, 50);
  }

  function unlockAudioOnce() {
    if (audioUnlocked) {
      return;
    }
    audioUnlocked = true;
    try {
      var nodes = document.querySelectorAll('audio:not(#gv-bgm)');
      for (var i = 0; i < nodes.length; i++) {
        var a = nodes[i];
        var p = a.play();
        if (p && typeof p.then === 'function') {
          p.then(function () {
            a.pause();
            try {
              a.currentTime = 0;
            } catch (e) {}
          }).catch(function () {});
        } else {
          try {
            a.pause();
          } catch (e2) {}
        }
      }
    } catch (err) {
      console.warn('[Arcade] audio unlock', err);
    }
    if (global.ArcadeAudio && global.ArcadeAudio.tryStart) {
      global.ArcadeAudio.tryStart();
    }
  }

  function pauseTimerForBackground() {
    if (typeof global.timeID === 'undefined') {
      return;
    }
    if (leaderboardPauseActive) {
      return;
    }
    if (document.hidden) {
      if (global.timeID > 0) {
        timerWasRunning = true;
        clearInterval(global.timeID);
        global.timeID = 0;
      }
    } else if (timerWasRunning) {
      timerWasRunning = false;
      if (typeof global.decTime === 'function' && global.elTimebar) {
        var intervalMs =
          typeof global.getLevelIntervalMs === 'function'
            ? global.getLevelIntervalMs()
            : global.gvTimeIntervalMs || 1250;
        global.gvTimeIntervalMs = intervalMs;
        global.timeID = setInterval('decTime()', intervalMs);
      }
    }
  }

  function pauseTimerForLeaderboard() {
    if (typeof global.timeID === 'undefined') {
      return;
    }
    if (global.timeID > 0) {
      timerPausedForLeaderboard = true;
      clearInterval(global.timeID);
      global.timeID = 0;
    } else {
      timerPausedForLeaderboard = false;
    }
  }

  function resumeTimerFromLeaderboard() {
    if (!timerPausedForLeaderboard) {
      return;
    }
    timerPausedForLeaderboard = false;
    if (
      typeof global.decTime === 'function' &&
      global.elTimebar &&
      global.elTimebar.tmp > 0
    ) {
      var intervalMs =
        typeof global.getLevelIntervalMs === 'function'
          ? global.getLevelIntervalMs()
          : global.gvTimeIntervalMs || 1250;
      global.gvTimeIntervalMs = intervalMs;
      global.timeID = setInterval('decTime()', intervalMs);
    }
  }

  function stopLeaderboardCloseWatcher() {
    if (leaderboardCloseObserver) {
      leaderboardCloseObserver.disconnect();
      leaderboardCloseObserver = null;
    }
    if (leaderboardOpenCheckTimer) {
      clearTimeout(leaderboardOpenCheckTimer);
      leaderboardOpenCheckTimer = 0;
    }
    if (leaderboardSafetyPollTimer) {
      clearInterval(leaderboardSafetyPollTimer);
      leaderboardSafetyPollTimer = 0;
    }
  }

  function isLeaderboardPopupOpen() {
    return (
      !!document.getElementById('history-leaderboard-popup') ||
      (document.body &&
        document.body.classList.contains('history-leaderboard-open'))
    );
  }

  function maybeResumeLeaderboardIfClosed(reason) {
    if (!leaderboardPauseActive) {
      return false;
    }
    if (isLeaderboardPopupOpen()) {
      return false;
    }
    if (isGvDebug()) {
      console.warn(
        '[Arcade] resume BXH pause — không còn popup',
        reason || ''
      );
    }
    resumeFromLeaderboard();
    return true;
  }

  function resumeFromLeaderboard() {
    if (!leaderboardPauseActive) {
      return;
    }
    leaderboardPauseActive = false;
    global.gvLeaderboardPaused = false;
    stopLeaderboardCloseWatcher();

    var wrap = document.getElementById('gv-scale-wrap');
    if (wrap) {
      wrap.classList.remove('gv-leaderboard-paused');
    }
    resumeTimerFromLeaderboard();
  }

  function startLeaderboardCloseWatcher() {
    stopLeaderboardCloseWatcher();

    leaderboardCloseObserver = new MutationObserver(function () {
      maybeResumeLeaderboardIfClosed('mutation');
    });
    leaderboardCloseObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    });

    /* Nếu open() thất bại / không tạo popup → mở khóa sau grace. */
    leaderboardOpenCheckTimer = setTimeout(function () {
      leaderboardOpenCheckTimer = 0;
      maybeResumeLeaderboardIfClosed('open-grace');
    }, LEADERBOARD_OPEN_GRACE_MS);

    /*
     * Safety poll: popup đã đóng nhưng observer miss / class kẹt
     * → cứ 2s kiểm tra lại trong lúc còn pause.
     */
    leaderboardSafetyPollTimer = setInterval(function () {
      maybeResumeLeaderboardIfClosed('safety-poll');
    }, LEADERBOARD_SAFETY_POLL_MS);
  }

  function isGvDebug() {
    try {
      return /(?:^|[?&])gvdebug=1(?:&|$)/.test(global.location.search || '');
    } catch (e) {
      return false;
    }
  }

  /**
   * Checklist khi treo: gọi ArcadeDebug.dumpFreezeState() hoặc ?gvdebug=1
   */
  function dumpFreezeState() {
    var wrap = document.getElementById('gv-scale-wrap');
    var notify = document.getElementById('gv-notify');
    var board = document.getElementById('board');
    var cx = Math.floor((global.innerWidth || 0) / 2);
    var cy = Math.floor((global.innerHeight || 0) / 2);
    var hit = null;
    try {
      hit = document.elementFromPoint(cx, cy);
    } catch (e) {}

    var state = {
      gvAwaitingScore: !!global.gvAwaitingScore,
      gvLeaderboardPaused: !!global.gvLeaderboardPaused,
      leaderboardPauseActive: leaderboardPauseActive,
      leaderboardPopupOpen: isLeaderboardPopupOpen(),
      adFreezeActive: !!(
        global.ArcadeHint &&
        typeof global.ArcadeHint.isAdFreezeActive === 'function' &&
        global.ArcadeHint.isAdFreezeActive()
      ),
      wrapClasses: wrap ? wrap.className : null,
      notifyHidden: notify ? !!notify.hidden : null,
      notifyClass: notify ? notify.className : null,
      historyPopup: !!document.getElementById('history-leaderboard-popup'),
      bodyLeaderboardOpen: !!(
        document.body &&
        document.body.classList.contains('history-leaderboard-open')
      ),
      boardPointerEvents: board
        ? global.getComputedStyle(board).pointerEvents
        : null,
      elementFromPointCenter: hit
        ? {
            tag: hit.tagName,
            id: hit.id || '',
            className: String(hit.className || '').slice(0, 120)
          }
        : null,
      tip:
        'A/B: mở thẳng e.localhost/.../pikachu/ (không qua trang game). Nếu hết treo → nghi ads/Unibots trên parent. F8 = dump lại.'
    };

    console.log('[Arcade] dumpFreezeState', state);
    return state;
  }

  function pauseForLeaderboard() {
    if (leaderboardPauseActive) {
      return;
    }
    leaderboardPauseActive = true;
    global.gvLeaderboardPaused = true;

    var wrap = document.getElementById('gv-scale-wrap');
    if (wrap) {
      wrap.classList.add('gv-leaderboard-paused');
    }

    pauseTimerForLeaderboard();
    startLeaderboardCloseWatcher();
  }

  function bindLeaderboardPauseEvents() {
    document.addEventListener('historyleaderboard:error', function () {
      if (leaderboardPauseActive) {
        resumeFromLeaderboard();
      }
    });
    document.addEventListener('historyleaderboard:close', function () {
      if (leaderboardPauseActive) {
        resumeFromLeaderboard();
      }
    });
  }

  function bindSafariHelpers() {
    document.addEventListener('touchstart', unlockAudioOnce, { passive: true });
    document.addEventListener('click', unlockAudioOnce, true);
    document.addEventListener('visibilitychange', pauseTimerForBackground);

    global.addEventListener('resize', scheduleFit);
    global.addEventListener('orientationchange', scheduleFit);
    if (global.visualViewport) {
      global.visualViewport.addEventListener('resize', scheduleFit);
      global.visualViewport.addEventListener('scroll', scheduleFit);
    }
  }

  function init() {
    bindLeaderboardPauseEvents();
    bindSafariHelpers();
    fitStage();
    if (global.ArcadeScore && global.ArcadeScore.ensureCredentialsOnLocation) {
      global.ArcadeScore.ensureCredentialsOnLocation();
    }
    if (isGvDebug()) {
      console.info(
        '[Arcade] gvdebug=1 — khi treo gọi ArcadeDebug.dumpFreezeState()'
      );
      dumpFreezeState();
      global.addEventListener('keydown', function (e) {
        if (e && (e.key === 'F8' || e.keyCode === 119)) {
          dumpFreezeState();
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  global.ArcadeLayout = {
    fitStage: fitStage,
    DESIGN_W: DESIGN_W,
    DESIGN_H: DESIGN_H,
    pauseForLeaderboard: pauseForLeaderboard,
    resumeFromLeaderboard: resumeFromLeaderboard,
    isLeaderboardPopupOpen: isLeaderboardPopupOpen
  };

  global.ArcadeDebug = {
    dumpFreezeState: dumpFreezeState,
    isEnabled: isGvDebug
  };
})(window);
