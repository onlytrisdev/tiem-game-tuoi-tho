/**
 * Arcade tool — Giải mã mê cung (PIXI / Apple & Onion maze)
 * FEATURE: cloud save/load (appleAndOnionZombiesData), xóa data (SplashScene),
 * gửi điểm khi ResultsScene thắng (sau animate sao) → GV.saveScore + pause/resume.
 */
(function (global) {
  'use strict';

  var MODULE_VERSION = 'giai-ma-me-cung-tool-v1';
  var SAVE_KEY = 'appleAndOnionZombiesData';
  var SAVE_URL = 'https://localhost/account/SaveHistoryGame';
  var GET_URL = 'https://localhost/account/GetHistoryGame';
  var SAVE_DEBOUNCE_MS = 60000;
  var BOOT_TIMEOUT_MS = 3000;
  var SCORE_POPUP_DELAY_MS = 2500;
  var DELETE_ICON = 'xoa-data-gv.png';
  var DESIGN_WIDTH = 1664;
  var GAME_ID = 'tao-va-hanh-giai-ma-me-cung';

  var DEFAULT_SAVE = {
    isMuted: false,
    locked: [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    trainersUnlocked: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    starsEarned: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    lastPlayedLevel: 0,
    upgradePoints: 0,
    isFullyUpgraded: false,
    upgrades: {
      pistol: 0,
      bomb: 0,
      rifle: 0,
      shotgun: 0
    }
  };

  var state = {
    loadStarted: false,
    cloudSeeded: false,
    seeding: false,
    dirty: false,
    saveTimer: 0,
    lastSaveAt: 0,
    pendingSaveReason: '',
    resetting: false,
    hooksReady: false,
    scorePopupOpen: false,
    scorePopupScheduled: false,
    pausedForScore: false,
    deleteBtn: null,
    confirmEl: null,
    menuWatchStarted: false,
    storageHooked: false,
    qsKill: false
  };

  try {
    state.qsKill = new URLSearchParams(global.location.search).get('gvsave') === '0';
  } catch (e) {
    state.qsKill = false;
  }

  var readyResolve;
  var ready = new Promise(function (resolve) {
    readyResolve = resolve;
  });

  var nativeSetItem = null;
  try {
    nativeSetItem = Storage.prototype.setItem;
  } catch (e) {
    nativeSetItem = null;
  }

  function finishReady(result) {
    if (readyResolve) {
      readyResolve(result || { ok: true });
      readyResolve = null;
    }
    return result;
  }

  function logInfo(msg, d) {
    if (global.console && console.info) {
      if (d !== undefined) console.info('[ArcadeTool] ' + msg, d);
      else console.info('[ArcadeTool] ' + msg);
    }
  }

  function logWarn(msg, d) {
    if (global.console && console.warn) {
      if (d !== undefined) console.warn('[ArcadeTool] ' + msg, d);
      else console.warn('[ArcadeTool] ' + msg);
    }
  }

  /* -------------------------------- credentials -------------------------------- */

  function readQs(search) {
    try {
      return new URLSearchParams(search || '');
    } catch (e) {
      return new URLSearchParams();
    }
  }

  function getCredentials() {
    var local = readQs(global.location.search);
    var gid = local.get('gid') || '';
    var token = local.get('token') || '';

    if ((!gid || !token) && global.parent !== global) {
      try {
        var parentQs = readQs(global.parent.location.search);
        if (!gid) gid = parentQs.get('gid') || '';
        if (!token) token = parentQs.get('token') || '';
      } catch (e) { /* cross-origin */ }
    }

    if ((!gid || !token) && global.document && global.document.referrer) {
      try {
        var ref = new URL(global.document.referrer);
        var refQs = readQs(ref.search);
        if (!gid) gid = refQs.get('gid') || '';
        if (!token) token = refQs.get('token') || '';
      } catch (e2) { /* ignore */ }
    }

    return { gid: gid, token: token || '' };
  }

  function cloudEnabled() {
    if (state.qsKill) return false;
    return !!getCredentials().gid;
  }

  /* -------------------------------- storage helpers -------------------------------- */

  function lsGet(key) {
    try {
      return global.localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function lsSet(key, value) {
    try {
      if (nativeSetItem) {
        nativeSetItem.call(global.localStorage, key, value);
      } else {
        global.localStorage.setItem(key, value);
      }
      return true;
    } catch (e) {
      logWarn('localStorage.setItem failed', e);
      return false;
    }
  }

  function lsRemove(key) {
    try {
      global.localStorage.removeItem(key);
    } catch (e) { /* ignore */ }
  }

  function readSaveBlob() {
    var raw = lsGet(SAVE_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  function writeSaveBlob(blob) {
    if (blob == null) return false;
    var str = typeof blob === 'string' ? blob : JSON.stringify(blob);
    return lsSet(SAVE_KEY, str);
  }

  function installStorageHook() {
    if (state.storageHooked || !nativeSetItem) return;
    state.storageHooked = true;
    Storage.prototype.setItem = function (key, value) {
      nativeSetItem.call(this, key, value);
      if (key === SAVE_KEY && !state.resetting && !state.seeding) {
        try {
          requestSave('setItem');
        } catch (e) { /* ignore */ }
      }
    };
    logInfo('localStorage.setItem hooked for cloud dirty');
  }

  /* -------------------------------- progress / score -------------------------------- */

  function isValidSaveBlob(blob) {
    return !!(blob && typeof blob === 'object' && !Array.isArray(blob) && Array.isArray(blob.starsEarned));
  }

  function summarizeSaveData(data) {
    var totalStars = 0;
    var levelsCompleted = 0;
    var currentLevel = 0;

    if (!isValidSaveBlob(data) && !(data && typeof data === 'object')) {
      return {
        TotalStars: 0,
        LevelsCompleted: 0,
        CurrentLevel: 0,
        TotalScore: 0
      };
    }

    var stars = data.starsEarned || [];
    for (var i = 0; i < stars.length; i++) {
      var n = Number(stars[i]) || 0;
      if (n > 0) {
        totalStars += n;
        levelsCompleted++;
      }
    }

    if (typeof data.lastPlayedLevel === 'number' && !isNaN(data.lastPlayedLevel)) {
      currentLevel = data.lastPlayedLevel;
    } else if (Array.isArray(data.locked)) {
      for (var j = 0; j < data.locked.length; j++) {
        if (data.locked[j] === false) currentLevel = j;
      }
    }

    return {
      TotalStars: totalStars,
      LevelsCompleted: levelsCompleted,
      CurrentLevel: currentLevel,
      TotalScore: totalStars * 1000 + levelsCompleted
    };
  }

  function getLiveSaveData() {
    return readSaveBlob();
  }

  function computeTotalScore() {
    return summarizeSaveData(getLiveSaveData()).TotalScore;
  }

  function buildMetadata(blob) {
    var data = isValidSaveBlob(blob) ? blob : readSaveBlob() || {};
    var summary = summarizeSaveData(data);
    return {
      game: GAME_ID,
      CurrentLevel: summary.CurrentLevel,
      CurrentStage: summary.CurrentLevel,
      TotalScore: summary.TotalScore,
      TotalStars: summary.TotalStars,
      LevelsCompleted: summary.LevelsCompleted,
      SavedAt: new Date().toISOString(),
      SaveBlob: data
    };
  }

  function buildClearedMetadata() {
    return {
      game: GAME_ID,
      cleared: true,
      CurrentLevel: 0,
      CurrentStage: 0,
      TotalScore: 0,
      TotalStars: 0,
      LevelsCompleted: 0,
      SavedAt: new Date().toISOString(),
      SaveBlob: {}
    };
  }

  function metadataToSaveBlob(metadata) {
    if (!metadata || typeof metadata !== 'object' || metadata.cleared) return null;
    var blob = metadata.SaveBlob;
    if (typeof blob === 'string') {
      try {
        blob = JSON.parse(blob);
      } catch (e) {
        return null;
      }
    }
    if (isValidSaveBlob(blob)) return blob;
    return null;
  }

  function getDefaultSave() {
    return JSON.parse(JSON.stringify(DEFAULT_SAVE));
  }

  /* -------------------------------- API -------------------------------- */

  function postForm(url, fields) {
    return fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: new URLSearchParams(fields)
    }).then(function (res) {
      return res.json().catch(function () {
        return null;
      });
    });
  }

  function parseMeta(res) {
    if (!res || res.Status !== 1 || !res.Data) return null;
    var raw = res.Data.MetaData || res.Data.metaData || res.Data.metadata;
    if (!raw) return null;
    try {
      return typeof raw === 'string' ? JSON.parse(raw) : raw;
    } catch (e) {
      return null;
    }
  }

  function sendSave(reason) {
    if (state.resetting) return Promise.resolve(false);
    if (!cloudEnabled()) {
      logInfo('Bỏ qua save (' + reason + '): thiếu gid / gvsave=0');
      return Promise.resolve(false);
    }

    var cred = getCredentials();
    var blob = readSaveBlob();
    if (!isValidSaveBlob(blob)) {
      logInfo('Bỏ qua save (' + reason + '): chưa có blob');
      return Promise.resolve(false);
    }

    state.lastSaveAt = Date.now();
    state.dirty = false;
    var metadata = buildMetadata(blob);

    return postForm(SAVE_URL, {
      gameId: cred.gid,
      token: cred.token,
      metadata: JSON.stringify(metadata),
      metaData: JSON.stringify(metadata),
      CurrentLevel: String(metadata.CurrentLevel),
      CurrentStage: String(metadata.CurrentStage),
      TotalScore: String(metadata.TotalScore)
    })
      .then(function (res) {
        var ok = !!(res && res.Status === 1);
        if (ok) logInfo('SaveHistoryGame ok (' + reason + ')', { TotalScore: metadata.TotalScore });
        else logWarn('SaveHistoryGame failed (' + reason + ')', res);
        return ok;
      })
      .catch(function (err) {
        logWarn('SaveHistoryGame network error (' + reason + ')', err);
        return false;
      });
  }

  function requestSave(reason) {
    if (state.resetting || state.seeding) return;
    state.dirty = true;
    state.pendingSaveReason = reason || 'dirty';
    var elapsed = Date.now() - state.lastSaveAt;
    if (elapsed >= SAVE_DEBOUNCE_MS) {
      sendSave(state.pendingSaveReason);
      return;
    }
    if (state.saveTimer) return;
    state.saveTimer = global.setTimeout(function () {
      state.saveTimer = 0;
      sendSave(state.pendingSaveReason);
    }, Math.max(250, SAVE_DEBOUNCE_MS - elapsed));
  }

  function flushSave(reason) {
    if (state.saveTimer) {
      global.clearTimeout(state.saveTimer);
      state.saveTimer = 0;
    }
    return sendSave(reason || 'flush');
  }

  function loadProgress() {
    if (state.loadStarted) return ready;
    state.loadStarted = true;

    var timedOut = false;
    var timer = global.setTimeout(function () {
      timedOut = true;
      logWarn('GetHistoryGame timeout — chơi local');
      finishReady({ ok: false, timeout: true });
    }, BOOT_TIMEOUT_MS);

    var finish = function (result) {
      global.clearTimeout(timer);
      if (!timedOut) finishReady(result);
    };

    if (state.qsKill) {
      logInfo('gvsave=0 — bỏ qua cloud load');
      finish({ ok: true, skipped: true });
      return ready;
    }

    if (!getCredentials().gid) {
      logInfo('Bỏ qua load: không có gid');
      finish({ ok: true, skipped: true });
      return ready;
    }

    var cred = getCredentials();
    postForm(GET_URL, {
      gameId: cred.gid,
      token: cred.token
    })
      .then(function (res) {
        logInfo('GetHistoryGame Status=' + (res && res.Status));
        var metadata = parseMeta(res);
        if (!metadata) {
          logInfo('Load: chưa có save cloud');
          return { ok: true, seeded: false };
        }
        if (metadata.cleared) {
          logInfo('Load: cloud cleared');
          return { ok: true, seeded: false };
        }
        var blob = metadataToSaveBlob(metadata);
        if (!blob) {
          logInfo('Load: metadata thiếu SaveBlob hợp lệ');
          return { ok: true, seeded: false };
        }
        state.seeding = true;
        var ok = writeSaveBlob(blob);
        state.seeding = false;
        if (ok) {
          state.cloudSeeded = true;
          logInfo('Load OK: seeded ' + SAVE_KEY, {
            TotalScore: metadata.TotalScore,
            CurrentLevel: metadata.CurrentLevel
          });
          return { ok: true, seeded: true };
        }
        return { ok: false, seeded: false };
      })
      .then(finish, function (err) {
        state.seeding = false;
        logWarn('GetHistoryGame failed — continue local', err);
        finish({ ok: false, error: true });
      });

    return ready;
  }

  /* -------------------------------- pause / resume -------------------------------- */

  function pauseGame() {
    state.pausedForScore = true;
    try {
      if (global.P3 && P3.audio && P3.audio.music && typeof P3.audio.music.pause === 'function') {
        P3.audio.music.pause();
      }
    } catch (e) {
      logWarn('pauseGame failed', e);
    }
  }

  function resumeGame() {
    if (!state.pausedForScore) return;
    state.pausedForScore = false;
    try {
      if (global.P3 && P3.audio && P3.audio.music && typeof P3.audio.music.resume === 'function') {
        P3.audio.music.resume();
      } else if (global.P3 && P3.audio && P3.audio.music && typeof P3.audio.music.play === 'function') {
        P3.audio.music.play();
      }
    } catch (e) {
      logWarn('resumeGame failed', e);
    }
  }

  /* -------------------------------- score popup -------------------------------- */

  function onLevelComplete() {
    var score = Math.max(0, Math.floor(computeTotalScore()));
    requestSave('level-complete');

    if (typeof global.GV !== 'function') {
      logWarn('GV unavailable — bỏ qua popup điểm');
      return score;
    }
    if (!getCredentials().gid) {
      logWarn('thiếu gid — bỏ qua popup điểm');
      return score;
    }

    if (state.scorePopupOpen) return score;
    state.scorePopupOpen = true;

    var finished = false;
    function done() {
      if (finished) return;
      finished = true;
      state.scorePopupOpen = false;
      state.scorePopupScheduled = false;
      resumeGame();
      flushSave('score-close');
      logInfo('score popup closed', { score: score });
    }

    pauseGame();
    logInfo('submit saveScore', { score: score });

    try {
      new global.GV().saveScore(score, done);
      global.setTimeout(function () {
        if (!global.document.getElementById('gv_savescore')) done();
      }, 150);
    } catch (e) {
      try {
        new global.GV().saveScore(score);
        global.setTimeout(done, 300);
      } catch (e2) {
        logWarn('saveScore failed', e2);
        done();
      }
    }
    return score;
  }

  function scheduleScorePopup() {
    if (state.scorePopupScheduled || state.scorePopupOpen) return;
    state.scorePopupScheduled = true;
    global.setTimeout(function () {
      try {
        onLevelComplete();
      } catch (e) {
        state.scorePopupScheduled = false;
        logWarn('onLevelComplete error', e);
      }
    }, SCORE_POPUP_DELAY_MS);
  }

  /* -------------------------------- scene hooks (PIXI / P3) -------------------------------- */

  function getTopScene() {
    try {
      if (global.P3 && P3.scene && P3.scene.top) return P3.scene.top;
    } catch (e) { /* ignore */ }
    return null;
  }

  function isSplashScene(scene) {
    return !!(scene && scene._gameLogo != null && scene._playButton != null);
  }

  function isWinResultsScene(scene) {
    return !!(scene && scene._wentThroughExit === true && typeof scene._rewardStars === 'function');
  }

  function installGameplayHooks() {
    if (state.hooksReady) return true;
    if (!global.P3 || !P3.scene || !P3.scene.signals || !P3.scene.signals.next) return false;

    if (!P3.scene.__gvScoreHooked) {
      P3.scene.signals.next.add(function (_mgr, scene) {
        try {
          var top = scene || getTopScene();
          if (isWinResultsScene(top)) {
            scheduleScorePopup();
          } else {
            state.scorePopupScheduled = false;
          }
        } catch (e) {
          logWarn('scene.next score hook error', e);
        }
      });
      P3.scene.__gvScoreHooked = true;
      logInfo('P3.scene.signals.next hooked for ResultsScene win');
    }

    state.hooksReady = true;
    return true;
  }

  function watchForHooks() {
    var tries = 0;
    var t = global.setInterval(function () {
      tries++;
      if (installGameplayHooks() || tries > 240) {
        clearInterval(t);
        if (!state.hooksReady) logWarn('gameplay hooks timeout');
      }
    }, 250);
  }

  /* -------------------------------- delete UI (SplashScene) -------------------------------- */

  function injectStyles() {
    if (global.document.getElementById('gv-tool-styles')) return;
    var style = global.document.createElement('style');
    style.id = 'gv-tool-styles';
    style.textContent =
      '#gv-delete-btn{position:fixed;z-index:10050;border:0;background:transparent;padding:0;cursor:pointer;' +
      'opacity:0.6;transform:scale(0.8);transform-origin:top left;transition:opacity 0.2s,transform 0.2s;line-height:0;' +
      '-webkit-tap-highlight-color:transparent;user-select:none;-webkit-user-select:none;}' +
      '#gv-delete-btn:hover,#gv-delete-btn:focus-visible{opacity:1;transform:scale(1);outline:none;}' +
      '#gv-delete-btn img{display:block;width:64px;height:auto;pointer-events:none;-webkit-user-drag:none;user-select:none;}' +
      '#gv-delete-btn[hidden]{display:none!important;}' +
      '#gv-confirm-overlay{position:fixed;inset:0;z-index:10060;background:rgba(0,0,0,0.55);display:flex;align-items:center;justify-content:center;}' +
      '#gv-confirm-overlay[hidden]{display:none!important;}' +
      '#gv-confirm-box{background:#1a1a1a;color:#fff;padding:20px 24px;border-radius:10px;max-width:90vw;width:360px;font-family:Arial,sans-serif;text-align:center;}' +
      '#gv-confirm-box p{margin:0 0 16px;font-size:16px;line-height:1.4;}' +
      '#gv-confirm-actions{display:flex;gap:12px;justify-content:center;}' +
      '#gv-confirm-actions button{min-width:96px;padding:10px 16px;font-size:16px;border:0;border-radius:6px;cursor:pointer;}' +
      '#gv-confirm-ok{background:#e74c3c;color:#fff;}' +
      '#gv-confirm-cancel{background:#2ecc71;color:#fff;}';
    global.document.head.appendChild(style);
  }

  function findGameCanvas() {
    var root = global.document.getElementById('game');
    if (root) {
      var c = root.querySelector('canvas');
      if (c) return c;
    }
    return global.document.querySelector('canvas');
  }

  function syncDeleteButtonPosition() {
    var btn = state.deleteBtn;
    if (!btn || btn.hidden) return;
    var canvas = findGameCanvas();
    if (!canvas) {
      btn.style.top = '12px';
      btn.style.left = '12px';
      return;
    }
    var rect = canvas.getBoundingClientRect();
    if (!rect.width) return;
    var s = rect.width / DESIGN_WIDTH;
    var pad = Math.max(8, Math.round(8 * s));
    btn.style.top = Math.round(rect.top + pad) + 'px';
    btn.style.left = Math.round(rect.left + pad) + 'px';
  }

  function isSplashReady() {
    return isSplashScene(getTopScene());
  }

  function ensureDeleteButton() {
    injectStyles();
    if (state.deleteBtn) return state.deleteBtn;
    var btn = global.document.createElement('button');
    btn.id = 'gv-delete-btn';
    btn.type = 'button';
    btn.title = 'Xóa dữ liệu';
    btn.setAttribute('aria-label', 'Xóa dữ liệu');
    btn.hidden = true;
    btn.innerHTML = '<img src="' + DELETE_ICON + '" alt="" width="64" height="64" draggable="false">';
    btn.addEventListener('click', function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      showDeleteConfirm();
    });
    btn.addEventListener('dragstart', function (ev) {
      ev.preventDefault();
    });
    global.document.body.appendChild(btn);
    state.deleteBtn = btn;
    return btn;
  }

  function showDeleteConfirm() {
    injectStyles();
    if (!state.confirmEl) {
      var overlay = global.document.createElement('div');
      overlay.id = 'gv-confirm-overlay';
      overlay.hidden = true;
      overlay.innerHTML =
        '<div id="gv-confirm-box" role="dialog" aria-modal="true">' +
        '<p>Bạn chắc chắn muốn xóa tất cả dữ liệu game và chơi lại từ đầu?</p>' +
        '<div id="gv-confirm-actions">' +
        '<button type="button" id="gv-confirm-ok">OK</button>' +
        '<button type="button" id="gv-confirm-cancel">Hủy</button>' +
        '</div></div>';
      global.document.body.appendChild(overlay);
      overlay.querySelector('#gv-confirm-cancel').addEventListener('click', function () {
        overlay.hidden = true;
      });
      overlay.querySelector('#gv-confirm-ok').addEventListener('click', function () {
        overlay.hidden = true;
        deleteAllData();
      });
      overlay.addEventListener('click', function (e) {
        if (e.target === overlay) overlay.hidden = true;
      });
      state.confirmEl = overlay;
    }
    state.confirmEl.hidden = false;
  }

  function deleteAllData() {
    state.resetting = true;
    try {
      writeSaveBlob(getDefaultSave());
    } catch (e) {
      logWarn('local clear failed', e);
      lsRemove(SAVE_KEY);
    }

    var cred = getCredentials();
    var afterCloud = function () {
      logInfo('Đã xóa data — reload');
      var url = global.location.href.split('#')[0];
      var sep = url.indexOf('?') >= 0 ? '&' : '?';
      // Strip previous _gv to avoid stacking
      try {
        var u = new URL(url, global.location.href);
        u.searchParams.delete('_gv');
        u.searchParams.set('_gv', String(Date.now()));
        global.location.href = u.toString();
        return;
      } catch (e2) { /* fallback */ }
      global.location.href = url + sep + '_gv=' + Date.now();
    };

    if (!cloudEnabled()) {
      afterCloud();
      return;
    }

    var cleared = buildClearedMetadata();
    postForm(SAVE_URL, {
      gameId: cred.gid,
      token: cred.token,
      metadata: JSON.stringify(cleared),
      metaData: JSON.stringify(cleared),
      CurrentLevel: '0',
      CurrentStage: '0',
      TotalScore: '0'
    })
      .then(function () {
        afterCloud();
      })
      .catch(function () {
        afterCloud();
      });
  }

  function updateDeleteButtonVisibility() {
    var btn = ensureDeleteButton();
    var show = isSplashReady();
    btn.hidden = !show;
    if (show) syncDeleteButtonPosition();
  }

  function burstSyncDeleteBtn() {
    var n = 0;
    function tick() {
      syncDeleteButtonPosition();
      n++;
      if (n < 24) global.requestAnimationFrame(tick);
    }
    global.requestAnimationFrame(tick);
  }

  function startMenuWatch() {
    if (state.menuWatchStarted) return;
    state.menuWatchStarted = true;
    ensureDeleteButton();
    global.setInterval(updateDeleteButtonVisibility, 500);
    global.addEventListener('resize', burstSyncDeleteBtn);
    global.addEventListener('orientationchange', burstSyncDeleteBtn);
    global.addEventListener('fullscreenchange', burstSyncDeleteBtn);
    if (global.visualViewport) {
      global.visualViewport.addEventListener('resize', burstSyncDeleteBtn);
      global.visualViewport.addEventListener('scroll', burstSyncDeleteBtn);
    }
  }

  /* -------------------------------- lifecycle -------------------------------- */

  function onVisibilityFlush() {
    if (global.document.hidden) {
      if (state.dirty) flushSave('visibility');
    }
  }

  function init() {
    if (state._inited) return ready;
    state._inited = true;
    logInfo('init ' + MODULE_VERSION);
    injectStyles();
    installStorageHook();
    loadProgress().then(function () {
      watchForHooks();
      startMenuWatch();
    });

    watchForHooks();
    startMenuWatch();

    global.document.addEventListener('visibilitychange', onVisibilityFlush);
    global.addEventListener('pagehide', function () {
      if (state.dirty) flushSave('pagehide');
    });
    return ready;
  }

  var api = {
    version: MODULE_VERSION,
    init: init,
    ready: ready,
    getCredentials: getCredentials,
    computeTotalScore: computeTotalScore,
    onLevelComplete: onLevelComplete,
    flushSave: flushSave,
    requestSave: requestSave,
    deleteAllData: deleteAllData
  };

  global.ArcadeTool = api;

  if (global.document.readyState === 'loading') {
    global.document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(typeof window !== 'undefined' ? window : this);
