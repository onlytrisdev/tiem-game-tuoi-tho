/**
 * Arcade adapter — hook start / game over / reward → cloud save + điểm.
 * Điểm: ám sát = max(0, 2000 − 20×killSeconds); vua = 200 × caughtCount.
 */
(function (global) {
  'use strict';

  var BUILD = '20260818-2';
  var playing = false;
  var sessionStart = 0;
  var assassinAttemptStart = 0;
  var scoreTimer = 0;
  var extra = emptyExtra();

  function emptyExtra() {
    return {
      sessionSeconds: 0,
      healthLeft: 0,
      killerIndex: 0,
      killSeconds: 0,
      caughtCount: 0,
      hasKilledKing: false
    };
  }

  function storageSet(key, value) {
    try {
      if (global.ArcadeStorage) {
        global.ArcadeStorage.get().setItem(key, String(value));
        return;
      }
      global.localStorage.setItem(key, String(value));
    } catch (e) {
      /* ignored */
    }
  }

  function captureRuntime(levelMgr) {
    extra = extra || emptyExtra();
    extra.sessionSeconds = sessionStart ? Math.max(0, Math.floor((Date.now() - sessionStart) / 1000)) : 0;
    try {
      if (levelMgr && levelMgr.HealthProgressBar) {
        extra.healthLeft = Number(levelMgr.HealthProgressBar.progress) || 0;
      }
    } catch (e) {
      extra.healthLeft = 0;
    }
    try {
      extra.killerIndex = levelMgr && levelMgr.GameCreateNPCKillerIndex != null
        ? Number(levelMgr.GameCreateNPCKillerIndex) || 0
        : 0;
    } catch (e2) {
      extra.killerIndex = 0;
    }
    return extra;
  }

  function onGameStart() {
    playing = true;
    sessionStart = Date.now();
    assassinAttemptStart = sessionStart;
    storageSet('gv_session_start', String(sessionStart));
    extra = emptyExtra();
    console.log('[Arcade] game start');
  }

  function onAssassinKilledKing() {
    if (!playing || extra.hasKilledKing) return;
    var start = assassinAttemptStart || sessionStart;
    extra.hasKilledKing = true;
    extra.killSeconds = start ? Math.max(0, Math.floor((Date.now() - start) / 1000)) : 0;
  }

  function onAssassinJailedRetry() {
    if (!playing || extra.hasKilledKing) return;
    assassinAttemptStart = Date.now();
    extra.killSeconds = 0;
  }

  function onKingCaughtAssassin() {
    if (!playing) return;
    extra.caughtCount = (Number(extra.caughtCount) || 0) + 1;
  }

  function onGameOver(levelMgr) {
    captureRuntime(levelMgr);
    playing = true;
    var prevBest = 0;
    try {
      prevBest = Number((global.ArcadeSave && global.ArcadeSave.readProgress
        ? global.ArcadeSave.readProgress().gv_best_total
        : 0) || 0) || 0;
    } catch (e0) {
      prevBest = 0;
    }
    if (global.ArcadeSave && global.ArcadeSave.config && global.ArcadeSave.config.saveOnGameOver) {
      if (typeof global.ArcadeSave.save === 'function') {
        global.ArcadeSave.save({ extra: extra }).catch(function () { /* §16 */ });
      }
    }
    global.clearTimeout(scoreTimer);
    scoreTimer = global.setTimeout(function () {
      try {
        var score = global.ArcadeSave && global.ArcadeSave.calculateScore
          ? global.ArcadeSave.calculateScore(extra)
          : null;
        var sessionTotal = score ? (score.sessionScore + score.bonus) : 0;
        if (sessionTotal > prevBest && global.ArcadeScore && typeof global.ArcadeScore.submitManualScore === 'function') {
          global.ArcadeScore.submitManualScore(extra);
        }
      } catch (e) {
        /* ignored */
      }
    }, 900);
    console.log('[Arcade] game over', extra);
  }

  function onReward() {
    if (global.ArcadeSave && typeof global.ArcadeSave.scheduleSave === 'function') {
      global.ArcadeSave.scheduleSave(400);
    }
  }

  function onArchiveWrite(key) {
    var watched = {
      HasGetGift: 1,
      HasUseAddSpeed: 1,
      GiftTime: 1,
      RedYao: 1,
      GreenYao: 1,
      HasIcon: 1,
      gv_best_total: 1
    };
    if (!watched[key]) return;
    if (!playing && key !== 'gv_best_total') return;
    if (global.ArcadeSave && typeof global.ArcadeSave.scheduleSave === 'function') {
      global.ArcadeSave.scheduleSave();
    }
  }

  function isPlaying() {
    return playing;
  }

  global.ArcadeBuild = global.ArcadeBuild || { version: BUILD, modules: {} };
  global.ArcadeBuild.modules.adapter = BUILD;

  if (global.ArcadeStorage && typeof global.ArcadeStorage.onWrite === 'function') {
    global.ArcadeStorage.onWrite(onArchiveWrite);
  }

  global.ArcadeAdapter = {
    onGameStart: onGameStart,
    onGameOver: onGameOver,
    onReward: onReward,
    onAssassinKilledKing: onAssassinKilledKing,
    onAssassinJailedRetry: onAssassinJailedRetry,
    onKingCaughtAssassin: onKingCaughtAssassin,
    isPlaying: isPlaying,
    captureRuntime: captureRuntime,
    get sessionStart() {
      return sessionStart;
    },
    get extra() {
      return extra;
    }
  };
})(window);
