/**
 * Arcade tool — Vương quốc Mèo phòng thủ (Cocos H5)
 * Active: cloud Save/Load + GVAdBreak + gửi điểm (CurrentGates) + xóa data hub.
 * Commented (not requested): BXH history / logo / nút gửi điểm thủ công.
 */
(function (global) {
  'use strict';

  var BUILD = '20261015-2';
  var GAME_SLUG = 'vuong-quoc-meo-phong-thu';
  var SAVE_URL = 'https://localhost/account/SaveHistoryGame';
  var GET_URL = 'https://localhost/account/GetHistoryGame';
  var SAVE_DEBOUNCE_MS = 1800;
  var DELETE_BTN_ID = 'gv-delete-data-btn';
  var CLEAR_FLAG = 'gv_user_cleared';
  var HUB_POLL_MS = 500;
  var FIXED_KEYS = [
    'CurrentGolds',
    'CurrentGates',
    'CurrentBattery',
    'ShiyongBattery',
    'ScreenbulletNum',
    'ProtectNum',
    'GuajiGold',
    'offlineTime',
    'SignInDays',
    'SignedTime',
    'bullet1',
    'bullet2',
    'bullet3',
    'bullet4',
    'bullet5',
    'bullet6',
    'bullet7'
  ];

  var bootDone = false;
  var saving = false;
  var deleting = false;
  var saveTimer = 0;
  var saveRequested = false;
  var storageHooked = false;
  var hubPollTimer = 0;
  var readyResolve;
  var ready = new Promise(function (resolve) {
    readyResolve = resolve;
  });

  function storage() {
    try {
      return global.localStorage;
    } catch (e) {
      return null;
    }
  }

  function storageGet(key) {
    try {
      var s = storage();
      return s ? s.getItem(key) : null;
    } catch (e) {
      return null;
    }
  }

  function storageSet(key, value) {
    try {
      var s = storage();
      if (!s) return false;
      s.setItem(key, String(value));
      return true;
    } catch (e) {
      return false;
    }
  }

  function storageRemove(key) {
    try {
      var s = storage();
      if (s) s.removeItem(key);
    } catch (e) {
      /* ignored */
    }
  }

  function readQs(search) {
    try {
      return new URLSearchParams(search || '');
    } catch (e) {
      return new URLSearchParams();
    }
  }

  function ensureCredentialsOnLocation() {
    var local = readQs(global.location.search);
    var gid = local.get('gid') || '';
    var token = local.get('token') || '';

    if ((!gid || !token) && global.parent !== global) {
      try {
        var parentQs = readQs(global.parent.location.search);
        if (!gid) gid = parentQs.get('gid') || '';
        if (!token) token = parentQs.get('token') || '';
      } catch (e) {
        /* cross-origin */
      }
    }
    if ((!gid || !token) && global.document && global.document.referrer) {
      try {
        var ref = new URL(global.document.referrer);
        var refQs = readQs(ref.search);
        if (!gid) gid = refQs.get('gid') || '';
        if (!token) token = refQs.get('token') || '';
      } catch (e2) {
        /* ignored */
      }
    }

    if (gid && (!local.get('gid') || (token && !local.get('token')))) {
      try {
        var next = new URLSearchParams(global.location.search);
        next.set('gid', gid);
        if (token) next.set('token', token);
        global.history.replaceState(
          null,
          '',
          global.location.pathname + '?' + next.toString() + (global.location.hash || '')
        );
      } catch (e3) {
        /* ignored */
      }
    }
    return { gid: gid, token: token || '' };
  }

  function getCredentials() {
    return ensureCredentialsOnLocation();
  }

  function isLoggedIn() {
    var cred = getCredentials();
    return !!(cred.gid && cred.token);
  }

  function isOfflineCloudHost() {
    try {
      var h = String((global.location && global.location.hostname) || '').toLowerCase();
      if (!h || h === 'localhost' || h === '127.0.0.1') return true;
      if (h === 'test.game' || h.indexOf('test.game') >= 0) return true;
      if (/^\d{1,3}(\.\d{1,3}){3}$/.test(h)) return true;
      if (h === 'localhost' || h === 'www.localhost' || h === 'e.localhost') return false;
      if (h.indexOf('.localhost') >= 0) return false;
      return true;
    } catch (e) {
      return true;
    }
  }

  function number(value) {
    value = Number(value);
    return isFinite(value) ? value : 0;
  }

  function collectBattKeys() {
    var keys = [];
    try {
      var s = storage();
      if (!s) return keys;
      for (var i = 0; i < s.length; i++) {
        var k = s.key(i);
        if (k && k.indexOf('BATT_') === 0) keys.push(k);
      }
    } catch (e) {
      /* ignored */
    }
    return keys;
  }

  function watchedKey(key) {
    if (!key) return false;
    if (FIXED_KEYS.indexOf(key) >= 0) return true;
    if (key.indexOf('BATT_') === 0) return true;
    return false;
  }

  function readProgress() {
    var progress = {};
    FIXED_KEYS.forEach(function (key) {
      var v = storageGet(key);
      if (v != null) progress[key] = v;
    });
    collectBattKeys().forEach(function (key) {
      var v = storageGet(key);
      if (v != null) progress[key] = v;
    });
    return progress;
  }

  function applyProgress(progress) {
    if (!progress || typeof progress !== 'object') return;
    Object.keys(progress).forEach(function (key) {
      if (key === 'savedAt' || key === 'gv_local_saved_at') return;
      if (progress[key] == null) return;
      if (watchedKey(key) || FIXED_KEYS.indexOf(key) >= 0 || key.indexOf('BATT_') === 0) {
        storageSet(key, progress[key]);
      }
    });
  }

  function buildMetadata() {
    var progress = readProgress();
    var gates = Math.max(1, Math.floor(number(progress.CurrentGates) || 1));
    return {
      game: GAME_SLUG,
      CurrentLevel: gates,
      CurrentStage: gates,
      CurrentGates: gates,
      CurrentGolds: number(progress.CurrentGolds),
      TotalScore: gates,
      savedAt: new Date().toISOString(),
      progress: progress
    };
  }

  function postForm(url, fields) {
    return fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: new URLSearchParams(fields)
    }).then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    });
  }

  function parseMeta(res) {
    if (!res || Number(res.Status) !== 1 || !res.Data) return null;
    var raw = res.Data.MetaData || res.Data.metaData || res.Data.metadata;
    if (!raw) return null;
    try {
      return typeof raw === 'string' ? JSON.parse(raw) : raw;
    } catch (e) {
      return null;
    }
  }

  function save(options) {
    options = options || {};
    if (deleting) return Promise.resolve({ skipped: 'deleting' });
    if (isOfflineCloudHost()) return Promise.resolve({ skipped: 'offline-host' });
    var cred = getCredentials();
    if (!cred.gid || !cred.token) return Promise.resolve({ skipped: 'not-logged-in' });
    if (saving && !options.force) {
      saveRequested = true;
      return Promise.resolve({ skipped: 'in-flight' });
    }

    saving = true;
    saveRequested = false;
    var meta = options.metadata || buildMetadata();
    storageSet('gv_local_saved_at', meta.savedAt || new Date().toISOString());
    var serialized = JSON.stringify(meta);

    return postForm(SAVE_URL, {
      gameId: cred.gid,
      token: cred.token,
      metadata: serialized,
      metaData: serialized,
      CurrentLevel: meta.CurrentLevel != null ? meta.CurrentLevel : 1,
      CurrentStage: meta.CurrentStage != null ? meta.CurrentStage : 1,
      TotalScore: meta.TotalScore != null ? meta.TotalScore : 0
    })
      .then(function (res) {
        if (!res || Number(res.Status) !== 1) {
          console.warn('[ArcadeTool] SaveHistoryGame failed', res);
          return { ok: false, res: res };
        }
        console.log('[ArcadeTool] saved TotalScore=', meta.TotalScore);
        return { ok: true, metadata: meta };
      })
      .catch(function (err) {
        console.warn('[ArcadeTool] SaveHistoryGame network error', err);
        return { ok: false, error: err };
      })
      .then(function (result) {
        saving = false;
        if (saveRequested) scheduleSave();
        return result;
      });
  }

  function scheduleSave(delay) {
    if (deleting || !isLoggedIn() || isOfflineCloudHost()) return;
    saveRequested = true;
    global.clearTimeout(saveTimer);
    saveTimer = global.setTimeout(function () {
      save();
    }, delay == null ? SAVE_DEBOUNCE_MS : delay);
  }

  /** Điểm BXH cộng dồn = CurrentGates (số màn đã vượt, max data 84). */
  function getChallengeScore() {
    var gates = Math.floor(number(storageGet('CurrentGates')));
    if (!isFinite(gates) || gates < 0) gates = 0;
    // hub dùng 0; điểm gửi tối thiểu phản ánh tiến độ đã vượt (>=1 sau thắng đầu)
    return gates;
  }

  /**
   * Popup gửi điểm cao kỷ lục Arcade — gọi ngay khi cửa sổ THẮNG xuất hiện
   * (sau CurrentGates++ trong FightVictory), không đợi nhận vàng.
   * score = CurrentGates (đã +1).
   */
  function submitChallengeScore() {
    try {
      var score = getChallengeScore();
      if (score < 1) score = 1;
      storageSet('gv_best_gates', String(Math.max(score, number(storageGet('gv_best_gates')))));
      if (typeof global.GV === 'function') {
        new global.GV().saveScore(score);
        console.log('[ArcadeTool] saveScore CurrentGates=', score);
      } else {
        console.warn('[ArcadeTool] GV unavailable — skip saveScore');
      }
      scheduleSave(400);
    } catch (e) {
      console.warn('[ArcadeTool] submitChallengeScore error', e);
    }
  }

  function fetchCloud() {
    if (isOfflineCloudHost()) return Promise.resolve(null);
    var cred = getCredentials();
    if (!cred.gid) return Promise.resolve(null);
    return postForm(GET_URL, { gameId: cred.gid, token: cred.token || '' })
      .then(parseMeta)
      .catch(function (err) {
        console.warn('[ArcadeTool] GetHistoryGame error', err);
        return null;
      });
  }

  function applyCloudMeta(meta) {
    if (!meta) return false;
    if (meta.cleared) return false;
    var progress = meta.progress;
    if (progress && typeof progress === 'object') {
      applyProgress(progress);
      console.log('[ArcadeTool] restored cloud progress, TotalScore=', meta.TotalScore);
      return true;
    }
    // flat fields fallback
    if (meta.CurrentGates != null || meta.CurrentGolds != null) {
      applyProgress({
        CurrentGates: meta.CurrentGates,
        CurrentGolds: meta.CurrentGolds,
        CurrentBattery: meta.CurrentBattery
      });
      return true;
    }
    return false;
  }

  function hookLocalStorage() {
    if (storageHooked) return;
    var s = storage();
    if (!s) return;
    storageHooked = true;
    var origSet = s.setItem.bind(s);
    s.setItem = function (key, value) {
      origSet(key, value);
      if (watchedKey(key)) scheduleSave();
    };
  }

  /* ========== FEATURE: Ads helper ========== */
  function showRewardAd(successCb, failCb) {
    var done = false;
    function finish(ok) {
      if (done) return;
      done = true;
      try {
        if (ok) {
          if (typeof successCb === 'function') successCb();
          scheduleSave(400);
        } else if (typeof failCb === 'function') {
          failCb();
        } else if (typeof successCb === 'function') {
          // offline / no SDK: grant to avoid stuck reward flow (§16)
          successCb();
          scheduleSave(400);
        }
      } catch (e) {
        console.warn('[ArcadeTool] reward callback error', e);
      }
    }

    if (typeof global.GVAdBreak === 'function') {
      try {
        global.GVAdBreak(function () {
          finish(true);
        });
        return;
      } catch (e) {
        console.warn('[ArcadeTool] GVAdBreak error', e);
        finish(true);
        return;
      }
    }
    // No SDK (local/offline): grant so reward flow is not stuck (§16)
    console.warn('[ArcadeTool] GVAdBreak unavailable — fallback grant');
    finish(true);
  }

  /* ========== FEATURE: SendScore (auto popup sau thắng) — active ========== */
  // submitChallengeScore() ở trên; hook từ FightVictory.

  /* ========== FEATURE: Delete save — nút góc trên-phải hub Bắt đầu ========== */
  function ensureDeleteStyles() {
    if (document.getElementById('gv-tool-styles')) return;
    var style = document.createElement('style');
    style.id = 'gv-tool-styles';
    style.textContent =
      '#' +
      DELETE_BTN_ID +
      '{' +
      'position:fixed;z-index:10050;padding:0;border:0;background:transparent;cursor:pointer;' +
      'line-height:0;transform:scale(0.8);opacity:0.6;transition:transform .2s ease,opacity .2s ease;' +
      'display:none;touch-action:manipulation;-webkit-tap-highlight-color:transparent;' +
      '}' +
      '#' +
      DELETE_BTN_ID +
      ':hover,#' +
      DELETE_BTN_ID +
      ':focus-visible{transform:scale(1);opacity:1;outline:none;}' +
      '#' +
      DELETE_BTN_ID +
      ' img{display:block;width:56px;height:auto;pointer-events:none;}';
    document.head.appendChild(style);
  }

  function getCanvasRect() {
    var canvas = document.getElementById('GameCanvas');
    if (!canvas) return null;
    try {
      return canvas.getBoundingClientRect();
    } catch (e) {
      return null;
    }
  }

  function positionDeleteBtn(btn) {
    var rect = getCanvasRect();
    if (!rect) return;
    var w = 56;
    var margin = 8;
    btn.style.left = Math.round(rect.right - w - margin) + 'px';
    btn.style.top = Math.round(rect.top + margin) + 'px';
  }

  function isSplashVisible() {
    var splash = document.getElementById('splash');
    if (!splash) return false;
    var d = splash.style.display;
    if (d === 'none') return false;
    try {
      return global.getComputedStyle(splash).display !== 'none';
    } catch (e) {
      return d !== 'none';
    }
  }

  /** Hub Bắt đầu: scene FightScene + guajiNode active (AFK / ngoài trận). */
  function isHubStartScreen() {
    try {
      if (isSplashVisible()) return false;
      if (!global.cc || !cc.director) return false;
      var scene = cc.director.getScene();
      if (!scene) return false;
      var guaji =
        (typeof cc.find === 'function' && cc.find('Canvas/guajiNode')) || null;
      if (!guaji && scene) {
        var canvas = scene.getChildByName && scene.getChildByName('Canvas');
        guaji = canvas && canvas.getChildByName && canvas.getChildByName('guajiNode');
      }
      return !!(guaji && guaji.active);
    } catch (e) {
      return false;
    }
  }

  function purgeLocalSaveKeys() {
    FIXED_KEYS.forEach(storageRemove);
    collectBattKeys().forEach(storageRemove);
    storageRemove('gv_best_gates');
    storageRemove('gv_local_saved_at');
    storageRemove('RecorderPath');
    try {
      if (global.cc && cc.sys && cc.sys.localStorage) {
        FIXED_KEYS.forEach(function (k) {
          try {
            cc.sys.localStorage.removeItem(k);
          } catch (e) {
            /* ignored */
          }
        });
      }
    } catch (e2) {
      /* ignored */
    }
  }

  function deleteAll() {
    deleting = true;
    try {
      global.sessionStorage.setItem(CLEAR_FLAG, '1');
    } catch (e) {
      /* ignored */
    }
    global.clearTimeout(saveTimer);
    purgeLocalSaveKeys();
    console.log('[ArcadeTool] deleteAll cleared local');

    var clearedMeta = {
      game: GAME_SLUG,
      cleared: true,
      CurrentLevel: 1,
      CurrentStage: 1,
      CurrentGates: 1,
      CurrentGolds: 0,
      TotalScore: 0,
      savedAt: new Date().toISOString(),
      progress: {
        CurrentGates: '1',
        CurrentGolds: '0'
      }
    };

    var cloudPromise = Promise.resolve();
    if (!isOfflineCloudHost() && isLoggedIn()) {
      cloudPromise = save({ force: true, metadata: clearedMeta }).catch(function () {
        /* §16 */
      });
    }

    Promise.race([
      cloudPromise,
      new Promise(function (resolve) {
        setTimeout(resolve, 3000);
      })
    ]).then(function () {
      purgeLocalSaveKeys();
      try {
        global.location.reload();
      } catch (e) {
        global.location.href = global.location.href;
      }
    });
  }

  function ensureDeleteButton() {
    ensureDeleteStyles();
    var btn = document.getElementById(DELETE_BTN_ID);
    if (btn) return btn;
    btn = document.createElement('button');
    btn.id = DELETE_BTN_ID;
    btn.type = 'button';
    btn.title = 'Xóa dữ liệu';
    btn.setAttribute('aria-label', 'Xóa dữ liệu');
    var img = document.createElement('img');
    img.src = 'xoa-data-gv.png';
    img.alt = 'Xóa dữ liệu';
    btn.appendChild(img);
    btn.addEventListener('click', function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      var ok = global.confirm(
        'Bạn chắc chắn muốn xóa tất cả dữ liệu game và chơi lại từ đầu?'
      );
      if (ok) deleteAll();
    });
    document.body.appendChild(btn);
    return btn;
  }

  function updateDeleteButtonVisibility() {
    var btn = ensureDeleteButton();
    var show = isHubStartScreen();
    btn.style.display = show ? 'block' : 'none';
    if (show) positionDeleteBtn(btn);
  }

  function initDeleteSave() {
    ensureDeleteButton();
    updateDeleteButtonVisibility();
    global.clearInterval(hubPollTimer);
    hubPollTimer = global.setInterval(updateDeleteButtonVisibility, HUB_POLL_MS);
    global.addEventListener('resize', function () {
      var btn = document.getElementById(DELETE_BTN_ID);
      if (btn && btn.style.display !== 'none') positionDeleteBtn(btn);
    });
  }

  /* ========== FEATURE: Leaderboard / Logo / manual SendScore button (not requested) ==========
  function initLeaderboard() {}
  function initLogo() {}
  function initManualSendScoreButton() {}
  ========== */

  function bootCloud() {
    if (bootDone) return ready;
    bootDone = true;
    ensureCredentialsOnLocation();
    hookLocalStorage();

    return fetchCloud()
      .then(function (meta) {
        applyCloudMeta(meta);
      })
      .catch(function () {
        /* §16 */
      })
      .then(function () {
        readyResolve();
        return ready;
      });
  }

  function init() {
    var p = bootCloud();
    // Overlay sau khi DOM sẵn sàng
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initDeleteSave);
    } else {
      initDeleteSave();
    }
    return p;
  }

  global.ArcadeBuild = global.ArcadeBuild || { version: BUILD, modules: {} };
  global.ArcadeBuild.modules.tool = BUILD;

  global.ArcadeTool = {
    BUILD: BUILD,
    ready: ready,
    init: init,
    boot: bootCloud,
    save: save,
    scheduleSave: scheduleSave,
    readProgress: readProgress,
    buildMetadata: buildMetadata,
    showRewardAd: showRewardAd,
    submitChallengeScore: submitChallengeScore,
    getChallengeScore: getChallengeScore,
    deleteAll: deleteAll,
    isLoggedIn: isLoggedIn,
    getCredentials: getCredentials
  };

  // Auto-start cloud load as early as possible
  init();
})(window);
