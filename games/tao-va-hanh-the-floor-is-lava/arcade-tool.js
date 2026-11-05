/**
 * Arcade tool — Táo và Hành / The Floor is Lava (Phaser CE)
 * FEATURE: cloud save/load (apple_onion_save), xóa data (Menu top-left),
 * gửi điểm khi StageCompletePanel Idle (sau animate kết quả) → GV.saveScore + pause/resume.
 */
(function (global) {
  'use strict';

  var MODULE_VERSION = 'tao-va-hanh-tool-v1';
  var SAVE_KEY = 'apple_onion_save';
  var SAVE_URL = 'https://localhost/account/SaveHistoryGame';
  var GET_URL = 'https://localhost/account/GetHistoryGame';
  var SAVE_DEBOUNCE_MS = 60000;
  var BOOT_TIMEOUT_MS = 3000;
  var DELETE_ICON = 'xoa-data-gv.png';

  var state = {
    loadStarted: false,
    cloudSeeded: false,
    dirty: false,
    saveTimer: 0,
    lastSaveAt: 0,
    pendingSaveReason: '',
    resetting: false,
    hooksReady: false,
    scorePopupOpen: false,
    pausedForScore: false,
    deleteBtn: null,
    confirmEl: null,
    menuWatchStarted: false,
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
      global.localStorage.setItem(key, value);
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

  /* -------------------------------- progress / score -------------------------------- */

  function getLevelDataFromBlob(blob) {
    if (!Array.isArray(blob)) return null;
    for (var i = 0; i < blob.length; i++) {
      if (blob[i] && blob[i].id === 'GameManager' && blob[i].value) {
        return blob[i].value.levelData || null;
      }
    }
    return null;
  }

  function getLiveLevelData() {
    try {
      if (global.GameManager && GameManager.Instance && GameManager.Instance.levelData) {
        return GameManager.Instance.levelData;
      }
    } catch (e) { /* ignore */ }
    return getLevelDataFromBlob(readSaveBlob());
  }

  function summarizeLevelData(levelData) {
    var totalStars = 0;
    var levelsCompleted = 0;
    var currentLevel = 'park_0';
    var lastCompleted = null;
    var frontier = 'park_0';

    if (!levelData || typeof levelData !== 'object') {
      return {
        TotalStars: 0,
        LevelsCompleted: 0,
        CurrentLevel: 'park_0',
        TotalScore: 0
      };
    }

    var ids = Object.keys(levelData);
    for (var i = 0; i < ids.length; i++) {
      var id = ids[i];
      var d = levelData[id];
      if (!d) continue;
      frontier = id;
      if (d.time !== null && d.time !== undefined) {
        levelsCompleted++;
        lastCompleted = id;
      }
      if (Array.isArray(d.stars)) {
        for (var s = 0; s < d.stars.length; s++) {
          if (d.stars[s]) totalStars++;
        }
      }
    }

    currentLevel = lastCompleted || frontier || 'park_0';
    var totalScore = totalStars * 1000 + levelsCompleted;

    return {
      TotalStars: totalStars,
      LevelsCompleted: levelsCompleted,
      CurrentLevel: currentLevel,
      TotalScore: totalScore
    };
  }

  function computeTotalScore() {
    return summarizeLevelData(getLiveLevelData()).TotalScore;
  }

  function parseStageIndex(levelId) {
    if (!levelId || typeof levelId !== 'string') return 0;
    var parts = levelId.split('_');
    var n = parseInt(parts[parts.length - 1], 10);
    return isNaN(n) ? 0 : n;
  }

  function buildMetadata(blob) {
    var levelData = getLevelDataFromBlob(blob) || getLiveLevelData() || {};
    var summary = summarizeLevelData(levelData);
    return {
      game: 'tao-va-hanh-the-floor-is-lava',
      CurrentLevel: summary.CurrentLevel,
      CurrentStage: parseStageIndex(summary.CurrentLevel),
      TotalScore: summary.TotalScore,
      TotalStars: summary.TotalStars,
      LevelsCompleted: summary.LevelsCompleted,
      SavedAt: new Date().toISOString(),
      SaveBlob: Array.isArray(blob) ? blob : readSaveBlob() || []
    };
  }

  function buildClearedMetadata() {
    return {
      game: 'tao-va-hanh-the-floor-is-lava',
      cleared: true,
      CurrentLevel: 'park_0',
      CurrentStage: 0,
      TotalScore: 0,
      TotalStars: 0,
      LevelsCompleted: 0,
      SavedAt: new Date().toISOString(),
      SaveBlob: []
    };
  }

  function metadataToSaveBlob(metadata) {
    if (!metadata || typeof metadata !== 'object' || metadata.cleared) return null;
    if (Array.isArray(metadata.SaveBlob)) return metadata.SaveBlob;
    if (metadata.SaveBlob && typeof metadata.SaveBlob === 'string') {
      try {
        return JSON.parse(metadata.SaveBlob);
      } catch (e) {
        return null;
      }
    }
    return null;
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
    if (!blob && global.SaveDataManager && SaveDataManager.Instance) {
      try {
        blob = SaveDataManager.Instance.data;
      } catch (e) { /* ignore */ }
    }
    if (!blob) {
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
      CurrentLevel: metadata.CurrentLevel,
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
    if (state.resetting) return;
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
        if (!blob || !Array.isArray(blob) || !blob.length) {
          logInfo('Load: metadata thiếu SaveBlob');
          return { ok: true, seeded: false };
        }
        if (writeSaveBlob(blob)) {
          state.cloudSeeded = true;
          applyCloudToGameManager(blob);
          logInfo('Load OK: seeded apple_onion_save', {
            TotalScore: metadata.TotalScore,
            CurrentLevel: metadata.CurrentLevel
          });
          return { ok: true, seeded: true };
        }
        return { ok: false, seeded: false };
      })
      .then(finish, function (err) {
        logWarn('GetHistoryGame failed — continue local', err);
        finish({ ok: false, error: true });
      });

    return ready;
  }

  function applyCloudToGameManager(blob) {
    var levelData = getLevelDataFromBlob(blob);
    if (!levelData) return;
    try {
      if (global.GameManager && GameManager.Instance) {
        GameManager.Instance.levelData = levelData;
      }
      if (global.SaveDataManager && SaveDataManager.Instance) {
        SaveDataManager.Instance.data = blob;
      }
    } catch (e) {
      logWarn('applyCloudToGameManager failed', e);
    }
  }

  /* -------------------------------- pause / resume -------------------------------- */

  function pauseGame() {
    state.pausedForScore = true;
    try {
      if (global.GameManager && GameManager.Instance) {
        if (typeof GameManager.Instance.Pause === 'function') {
          GameManager.Instance.Pause();
        }
        if (GameManager.Instance.game) {
          GameManager.Instance.game.paused = true;
        }
      }
    } catch (e) {
      logWarn('pauseGame failed', e);
    }
    try {
      if (global.AudioManager && AudioManager.Instance) {
        AudioManager.Instance.PauseLayer('sfx_game');
        AudioManager.Instance.PauseLayer('ui_game');
        AudioManager.Instance.PauseLayer('ambience_game');
        AudioManager.Instance.PauseLayer('music_game');
      }
    } catch (e2) { /* ignore */ }
  }

  function resumeGame() {
    if (!state.pausedForScore) return;
    state.pausedForScore = false;
    try {
      if (global.GameManager && GameManager.Instance) {
        if (GameManager.Instance.game) {
          GameManager.Instance.game.paused = false;
        }
        if (typeof GameManager.Instance.Resume === 'function') {
          GameManager.Instance.Resume();
        }
      }
    } catch (e) {
      logWarn('resumeGame failed', e);
    }
    try {
      if (global.AudioManager && AudioManager.Instance) {
        AudioManager.Instance.ResumeLayer('sfx_game');
        AudioManager.Instance.ResumeLayer('ui_game');
        AudioManager.Instance.ResumeLayer('ambience_game');
        AudioManager.Instance.ResumeLayer('music_game');
      }
    } catch (e2) { /* ignore */ }
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

  /* -------------------------------- hooks into Phaser game -------------------------------- */

  function installGameplayHooks() {
    if (state.hooksReady) return true;
    if (typeof global.GameScene !== 'function') return false;
    if (!GameScene.prototype || typeof GameScene.prototype.ShowSummary !== 'function') return false;
    if (!global.AppleOnion || !AppleOnion.StageCompletePanel || !AppleOnion.StageCompletePanel.prototype) return false;
    if (typeof AppleOnion.StageCompletePanel.prototype.SetState !== 'function') return false;

    // Cloud dirty khi clear — không mở popup (popup chờ Idle)
    if (!GameScene.prototype.__gvShowSummaryHooked) {
      var origShow = GameScene.prototype.ShowSummary;
      GameScene.prototype.ShowSummary = function () {
        var result = origShow.apply(this, arguments);
        try {
          requestSave('level-complete');
        } catch (e) {
          logWarn('requestSave level-complete error', e);
        }
        return result;
      };
      GameScene.prototype.__gvShowSummaryHooked = true;
      logInfo('ShowSummary hooked for cloud save only');
    }

    // Popup gửi điểm sau khi panel kết thúc đã animate xong (Idle)
    if (!AppleOnion.StageCompletePanel.prototype.__gvIdleScoreHooked) {
      var IdleState = AppleOnion.StageCompletePanel.State && AppleOnion.StageCompletePanel.State.Idle;
      var origSetState = AppleOnion.StageCompletePanel.prototype.SetState;
      AppleOnion.StageCompletePanel.prototype.SetState = function (nextState) {
        var result = origSetState.apply(this, arguments);
        try {
          if (nextState === IdleState || nextState === 8) {
            onLevelComplete(this);
          }
        } catch (e) {
          logWarn('onLevelComplete (Idle) error', e);
        }
        return result;
      };
      AppleOnion.StageCompletePanel.prototype.__gvIdleScoreHooked = true;
      logInfo('StageCompletePanel.SetState hooked — saveScore on Idle');
    }

    if (global.SaveDataManager && SaveDataManager.prototype && !SaveDataManager.prototype.__gvSaveHooked) {
      var origSave = SaveDataManager.prototype.SaveToStorage;
      SaveDataManager.prototype.SaveToStorage = function () {
        var r = origSave.apply(this, arguments);
        try {
          if (!state.resetting) requestSave('SaveToStorage');
        } catch (e) { /* ignore */ }
        return r;
      };
      SaveDataManager.prototype.__gvSaveHooked = true;
      logInfo('SaveToStorage hooked for cloud dirty');
    }

    if (global.GameManager && GameManager.prototype && !GameManager.prototype.__gvLoadHooked) {
      var origLoad = GameManager.prototype.LoadData;
      GameManager.prototype.LoadData = function () {
        if (state.cloudSeeded) {
          try {
            var blob = readSaveBlob();
            if (blob) {
              SaveDataManager.Instance.data = blob;
            }
          } catch (e) { /* ignore */ }
        }
        var r = origLoad.apply(this, arguments);
        if (state.cloudSeeded) {
          applyCloudToGameManager(readSaveBlob());
        }
        return r;
      };
      GameManager.prototype.__gvLoadHooked = true;
      logInfo('LoadData hooked for cloud-first');
    }

    state.hooksReady = true;
    return true;
  }

  function watchForHooks() {
    var tries = 0;
    var t = global.setInterval(function () {
      tries++;
      if (installGameplayHooks() || tries > 120) {
        clearInterval(t);
        if (!state.hooksReady) logWarn('gameplay hooks timeout');
      }
    }, 250);
  }

  /* -------------------------------- delete UI (Menu top-left) -------------------------------- */

  function injectStyles() {
    if (global.document.getElementById('gv-tool-styles')) return;
    var style = global.document.createElement('style');
    style.id = 'gv-tool-styles';
    style.textContent =
      '#gv-delete-btn{position:fixed;top:12px;left:12px;z-index:10050;border:0;background:transparent;padding:0;cursor:pointer;' +
      'opacity:0.6;transform:scale(0.8);transition:opacity 0.2s,transform 0.2s;line-height:0;}' +
      '#gv-delete-btn:hover,#gv-delete-btn:focus-visible{opacity:1;transform:scale(1);outline:none;}' +
      '#gv-delete-btn img{display:block;width:64px;height:64px;pointer-events:none;}' +
      '#gv-delete-btn[hidden]{display:none!important;}' +
      '#gv-confirm-overlay{position:fixed;inset:0;z-index:10060;background:rgba(0,0,0,0.55);display:flex;align-items:center;justify-content:center;}' +
      '#gv-confirm-overlay[hidden]{display:none!important;}' +
      '#gv-confirm-box{background:#1a1a1a;color:#fff;padding:20px 24px;border-radius:10px;max-width:90vw;width:360px;font-family:Arial,sans-serif;text-align:center;}' +
      '#gv-confirm-box p{margin:0 0 16px;font-size:16px;line-height:1.4;}' +
      '#gv-confirm-actions{display:flex;gap:12px;justify-content:center;}' +
      '#gv-confirm-actions button{min-width:96px;padding:10px 16px;font-size:16px;border:0;border-radius:6px;cursor:pointer;}' +
      '#gv-confirm-ok{background:#e74c3c;color:#fff;}' +
      '#gv-confirm-cancel{background:#555;color:#fff;}';
    global.document.head.appendChild(style);
  }

  function isMainMenuReady() {
    try {
      if (!global.GameManager || !GameManager.Instance || !GameManager.Instance.game) return false;
      var game = GameManager.Instance.game;
      if (!game.state || game.state.current !== 'MainMenuScene') return false;
      var scene = game.state.states && game.state.states.MainMenuScene;
      if (!scene || !scene.playButton) return false;
      // DomButton.Enable → visibility visible; Disable → hidden (intro chưa xong)
      var view = scene.playButton.viewElement;
      if (view && view.style) {
        return view.style.visibility !== 'hidden';
      }
      if (typeof global.MainMenuScene !== 'undefined' && MainMenuScene.State) {
        return scene.state === MainMenuScene.State.Idle || scene.state === MainMenuScene.State.None;
      }
      return false;
    } catch (e) {
      return false;
    }
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
    btn.innerHTML = '<img src="' + DELETE_ICON + '" alt="Xóa dữ liệu" width="64" height="64">';
    btn.addEventListener('click', function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      showDeleteConfirm();
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
      if (global.SaveDataManager && SaveDataManager.Instance && typeof SaveDataManager.Instance.ClearData === 'function') {
        SaveDataManager.Instance.ClearData(true);
      } else {
        lsRemove(SAVE_KEY);
        try {
          global.localStorage.clear();
        } catch (e) { /* ignore */ }
      }
      if (global.GameManager && GameManager.Instance) {
        GameManager.Instance.levelData = {};
        if (typeof GameManager.Instance.SetDefaultData === 'function') {
          GameManager.Instance.SetDefaultData('park_0');
        }
      }
    } catch (e) {
      logWarn('local clear failed', e);
      lsRemove(SAVE_KEY);
    }

    var cred = getCredentials();
    var afterCloud = function () {
      logInfo('Đã xóa data — reload');
      var url = global.location.href.split('#')[0];
      var sep = url.indexOf('?') >= 0 ? '&' : '?';
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
      CurrentLevel: 'park_0',
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
    btn.hidden = !isMainMenuReady();
  }

  function startMenuWatch() {
    if (state.menuWatchStarted) return;
    state.menuWatchStarted = true;
    ensureDeleteButton();
    global.setInterval(updateDeleteButtonVisibility, 500);
  }

  /* -------------------------------- lifecycle -------------------------------- */

  function onVisibilityFlush() {
    if (global.document.hidden) {
      if (state.dirty) flushSave('visibility');
    }
  }

  function init() {
    logInfo('init ' + MODULE_VERSION);
    injectStyles();
    loadProgress().then(function () {
      watchForHooks();
      startMenuWatch();
    });

    // Also start hooks early in case cloud load is slow
    watchForHooks();
    startMenuWatch();

    global.document.addEventListener('visibilitychange', onVisibilityFlush);
    global.addEventListener('pagehide', function () {
      if (state.dirty) flushSave('pagehide');
    });
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
