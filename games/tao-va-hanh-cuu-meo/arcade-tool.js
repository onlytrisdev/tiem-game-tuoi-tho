/**
 * Arcade tool — Táo và Hành: Cứu mèo (Phaser)
 * Cloud Get/SaveHistoryGame, nút xóa data (Menu), GV.saveScore khi thắng level.
 * Chỉ 1 file tích hợp; hook từ app bundle gọi ArcadeTool.*.
 */
(function (global) {
  'use strict';

  var MODULE_VERSION = 'tao-va-hanh-cuu-meo-tool-v1';
  var GAME_SLUG = 'tao-va-hanh-cuu-meo';
  var SAVE_URL = 'https://localhost/account/SaveHistoryGame';
  var LOAD_URL = 'https://localhost/account/GetHistoryGame';
  var SIMPLE_STORAGE_KEY = 'simpleStorage';
  var KEY_GAME = 'dennisGAME';
  var KEY_UI = 'dennisUI';
  var SAVE_DEBOUNCE_MS = 3000;
  var BOOT_TIMEOUT_MS = 10000;

  var qsKill = false;
  try {
    qsKill = new URLSearchParams(global.location.search).get('gvsave') === '0';
  } catch (e) {
    qsKill = false;
  }

  var state = {
    seeding: false,
    dirty: false,
    saveTimer: 0,
    lastSaveAt: 0,
    pendingReason: '',
    resetting: false,
    menuVisible: false,
    uiReady: false,
    lsPatched: false,
    loadStarted: false,
    scoreOpen: false
  };

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

  /* ============================ credentials ============================ */

  function readQs(search) {
    try {
      return new URLSearchParams(search || '');
    } catch (e) {
      return new URLSearchParams();
    }
  }

  function getCredentials() {
    var local = readQs(global.location && global.location.search);
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
        /* ignore */
      }
    }

    return { gid: gid, token: token || '' };
  }

  function isOfflineCloudHost() {
    try {
      var host = String((global.location && global.location.hostname) || '').toLowerCase();
      if (!host || host === 'localhost' || host === '127.0.0.1') return true;
      if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) return true;
      if (host === 'localhost' || host === 'www.localhost' || host === 'e.localhost') return false;
      if (host.indexOf('.localhost') >= 0) return false;
      // Host deploy/test (vd. test.game) vẫn bật cloud khi có gid
      return false;
    } catch (e) {
      return true;
    }
  }

  function cloudEnabled() {
    return !qsKill && !isOfflineCloudHost() && !!getCredentials().gid;
  }

  function postForm(url, fields) {
    return fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      body: new URLSearchParams(fields)
    }).then(function (res) {
      return res.json().catch(function () {
        return null;
      });
    });
  }

  /* ============================ simpleStorage ============================ */

  function readSimpleRoot() {
    try {
      var raw = global.localStorage.getItem(SIMPLE_STORAGE_KEY);
      if (!raw) return {};
      var parsed = JSON.parse(raw);
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch (e) {
      return {};
    }
  }

  function writeSimpleRoot(root) {
    try {
      global.localStorage.setItem(SIMPLE_STORAGE_KEY, JSON.stringify(root || {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function getSimpleValue(key) {
    var root = readSimpleRoot();
    return root.hasOwnProperty(key) ? root[key] : undefined;
  }

  function setSimpleValue(key, value) {
    var root = readSimpleRoot();
    if (value === undefined) delete root[key];
    else root[key] = value;
    return writeSimpleRoot(root);
  }

  function parseMaybeJson(value) {
    if (value == null) return null;
    if (typeof value === 'object') return value;
    try {
      return JSON.parse(String(value));
    } catch (e) {
      return null;
    }
  }

  function readPlayerLevelFromGameData(gameData) {
    var data = parseMaybeJson(gameData);
    if (!data || typeof data !== 'object') return 1;
    var save = data.savePLAYER_ONE;
    var player = parseMaybeJson(save);
    if (!player || typeof player !== 'object') return 1;
    var level = parseInt(player.level, 10);
    return isFinite(level) && level > 0 ? level : 1;
  }

  function buildMetadata() {
    var gameRaw = getSimpleValue(KEY_GAME);
    var uiRaw = getSimpleValue(KEY_UI);
    var level = readPlayerLevelFromGameData(gameRaw);
    return {
      schemaVersion: 1,
      game: GAME_SLUG,
      gameSlug: GAME_SLUG,
      CurrentLevel: level,
      CurrentStage: level,
      TotalScore: level,
      dennisGAME: gameRaw == null ? null : gameRaw,
      dennisUI: uiRaw == null ? null : uiRaw,
      cleared: false,
      savedAt: new Date().toISOString()
    };
  }

  function buildClearedMetadata() {
    return {
      schemaVersion: 1,
      game: GAME_SLUG,
      gameSlug: GAME_SLUG,
      CurrentLevel: 0,
      CurrentStage: 0,
      TotalScore: 0,
      dennisGAME: null,
      dennisUI: null,
      cleared: true,
      savedAt: new Date().toISOString()
    };
  }

  function applyRemoteMeta(meta) {
    if (!meta || typeof meta !== 'object') return false;
    if (meta.cleared) {
      state.seeding = true;
      try {
        var root = readSimpleRoot();
        delete root[KEY_GAME];
        delete root[KEY_UI];
        writeSimpleRoot(root);
      } finally {
        state.seeding = false;
      }
      logInfo('Load: cloud cleared — đã xóa local dennis*');
      return true;
    }

    var hasGame = meta.dennisGAME != null && meta.dennisGAME !== '';
    var hasUi = meta.dennisUI != null && meta.dennisUI !== '';
    if (!hasGame && !hasUi) {
      logInfo('Load: metadata trống — giữ local');
      return false;
    }

    state.seeding = true;
    try {
      if (hasGame) setSimpleValue(KEY_GAME, meta.dennisGAME);
      if (hasUi) setSimpleValue(KEY_UI, meta.dennisUI);
    } finally {
      state.seeding = false;
    }
    logInfo('Load OK: seed simpleStorage', {
      CurrentLevel: meta.CurrentLevel,
      hasGame: hasGame,
      hasUi: hasUi
    });
    return true;
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

  /* ============================ cloud save/load ============================ */

  function sendSave(reason) {
    if (state.resetting) return Promise.resolve(false);
    if (!cloudEnabled()) {
      logInfo('Bỏ qua save (' + reason + '): cloud tắt / thiếu gid');
      return Promise.resolve(false);
    }
    var cred = getCredentials();
    var metadata = buildMetadata();
    state.lastSaveAt = Date.now();
    state.dirty = false;
    return postForm(SAVE_URL, {
      gameId: cred.gid,
      token: cred.token,
      metadata: JSON.stringify(metadata),
      metaData: JSON.stringify(metadata),
      CurrentLevel: metadata.CurrentLevel,
      CurrentStage: metadata.CurrentStage,
      TotalScore: metadata.TotalScore
    })
      .then(function (res) {
        var ok = !!(res && res.Status === 1);
        if (ok) logInfo('Save OK (' + reason + ') level=' + metadata.CurrentLevel);
        else logWarn('Save failed (' + reason + ')', res);
        return ok;
      })
      .catch(function (err) {
        logWarn('Save lỗi (' + reason + '): ' + (err && err.message ? err.message : err));
        return false;
      });
  }

  function requestSave(reason) {
    if (state.seeding || state.resetting) return;
    state.dirty = true;
    state.pendingReason = reason || 'dirty';
    var elapsed = Date.now() - state.lastSaveAt;
    if (elapsed >= SAVE_DEBOUNCE_MS) {
      sendSave(state.pendingReason);
      return;
    }
    if (state.saveTimer) return;
    state.saveTimer = global.setTimeout(function () {
      state.saveTimer = 0;
      sendSave(state.pendingReason);
    }, Math.max(250, SAVE_DEBOUNCE_MS - elapsed));
  }

  function flushSave() {
    if (state.saveTimer) {
      global.clearTimeout(state.saveTimer);
      state.saveTimer = 0;
    }
    if (state.dirty || Date.now() - state.lastSaveAt > 1000) {
      return sendSave('flush');
    }
    return Promise.resolve(false);
  }

  function patchLocalStorage() {
    if (state.lsPatched) return;
    try {
      var proto = Storage.prototype;
      var origSet = proto.setItem;
      var origRemove = proto.removeItem;
      proto.setItem = function (key, value) {
        var result = origSet.apply(this, arguments);
        if (!state.seeding && !state.resetting && String(key) === SIMPLE_STORAGE_KEY) {
          requestSave('simpleStorage-set');
        }
        return result;
      };
      proto.removeItem = function (key) {
        var result = origRemove.apply(this, arguments);
        if (!state.seeding && !state.resetting && String(key) === SIMPLE_STORAGE_KEY) {
          requestSave('simpleStorage-remove');
        }
        return result;
      };
      state.lsPatched = true;
      logInfo('Đã patch localStorage cho ' + SIMPLE_STORAGE_KEY);
    } catch (e) {
      logWarn('Patch localStorage thất bại', e);
    }
  }

  function loadProgress() {
    if (state.loadStarted) return ready;
    state.loadStarted = true;

    var run = function () {
      if (qsKill) {
        logInfo('gvsave=0 — bỏ qua cloud load');
        return Promise.resolve(false);
      }
      if (!getCredentials().gid) {
        logInfo('Bỏ qua load: không có gid');
        return Promise.resolve(false);
      }
      if (isOfflineCloudHost()) {
        logInfo('Bỏ qua load: host offline');
        return Promise.resolve(false);
      }

      var cred = getCredentials();
      return postForm(LOAD_URL, {
        gameId: cred.gid,
        token: cred.token
      })
        .then(function (res) {
          logInfo('GetHistoryGame Status=' + (res && res.Status));
          var metadata = parseMeta(res);
          if (!metadata) {
            logInfo('Load: chưa có save cloud — chơi local');
            return false;
          }
          return applyRemoteMeta(metadata);
        })
        .catch(function (err) {
          logWarn('Load lỗi (fail-open): ' + (err && err.message ? err.message : err));
          return false;
        });
    };

    var timed = Promise.race([
      run(),
      new Promise(function (resolve) {
        global.setTimeout(function () {
          logWarn('Load timeout ' + BOOT_TIMEOUT_MS + 'ms — fail-open');
          resolve(false);
        }, BOOT_TIMEOUT_MS);
      })
    ]);

    return timed.then(function (result) {
      return finishReady(result);
    });
  }

  /* ============================ score popup ============================ */

  function onLevelWin(level) {
    var n = parseInt(level, 10);
    if (!isFinite(n) || n < 1) n = 1;
    logInfo('Level win -> saveScore=' + n);
    requestSave('level-win');

    if (state.scoreOpen) return;
    state.scoreOpen = true;

    var done = function () {
      state.scoreOpen = false;
      flushSave();
    };

    try {
      if (typeof global.GV === 'function') {
        new global.GV().saveScore(n, done);
        return;
      }
      logWarn('GV chưa sẵn sàng — bỏ qua saveScore');
      done();
    } catch (e) {
      logWarn('saveScore lỗi', e);
      done();
    }
  }

  /* ============================ delete UI (Menu) ============================ */

  function ensureOverlay() {
    if (state.uiReady) return;
    var doc = global.document;
    if (!doc || !doc.body) return;

    var style = doc.createElement('style');
    style.textContent =
      '#gv-btn-xoa{position:fixed;z-index:99990;display:none;pointer-events:auto;border:0;padding:0;' +
      'background:transparent;cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation;}' +
      '#gv-btn-xoa .gv-xoa-icon{display:block;width:100%;height:auto;filter:drop-shadow(0 2px 3px rgba(0,0,0,.45));}' +
      '#gv-btn-xoa .gv-xoa-label{display:block;margin-top:2px;font:700 11px/1.2 Arial,Helvetica,sans-serif;' +
      'color:#fff;text-shadow:0 1px 2px #000,0 0 3px #000;text-align:center;}' +
      '#gv-reset-modal{position:fixed;inset:0;z-index:100000;display:none;align-items:center;justify-content:center;' +
      'background:rgba(0,0,0,.55);}' +
      '#gv-reset-modal .gv-reset-box{background:#1a1a2e;color:#fff;border-radius:12px;padding:20px 22px;max-width:320px;' +
      'width:86%;box-shadow:0 8px 24px rgba(0,0,0,.4);font-family:Arial,Helvetica,sans-serif;}' +
      '#gv-reset-modal h3{margin:0 0 10px;font-size:18px;}' +
      '#gv-reset-modal p{margin:0 0 16px;font-size:14px;line-height:1.4;}' +
      '#gv-reset-modal .gv-reset-actions{display:flex;gap:10px;justify-content:flex-end;}' +
      '#gv-reset-modal button{border:0;border-radius:8px;padding:10px 16px;font-size:14px;font-weight:700;cursor:pointer;}' +
      '#gv-reset-confirm{background:#d32f2f;color:#fff;}' +
      '#gv-reset-cancel{background:#2e7d32;color:#fff;}';
    doc.head.appendChild(style);

    var btn = doc.createElement('button');
    btn.id = 'gv-btn-xoa';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Xóa dữ liệu');
    btn.title = 'Xóa dữ liệu';
    btn.innerHTML =
      '<svg class="gv-xoa-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<circle cx="32" cy="32" r="30" fill="#e74c3c"/>' +
      '<path d="M22 24h20l-2 26H24L22 24zm6-8h8v4h-8v-4zm-8 8h24v4H20v-4z" fill="#fff"/>' +
      '</svg>' +
      '<span class="gv-xoa-label">Xóa data</span>';
    btn.addEventListener('click', onDeleteClick);
    doc.body.appendChild(btn);

    var modal = doc.createElement('div');
    modal.id = 'gv-reset-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.innerHTML =
      '<div class="gv-reset-box">' +
      '<h3>Xóa dữ liệu</h3>' +
      '<p>Bạn có chắc chắn xóa không?<br>Mọi dữ liệu sẽ bị xóa vĩnh viễn và không thể khôi phục.</p>' +
      '<div class="gv-reset-actions">' +
      '<button type="button" id="gv-reset-cancel">Hủy</button>' +
      '<button type="button" id="gv-reset-confirm">Xác nhận</button>' +
      '</div></div>';
    doc.body.appendChild(modal);
    modal.querySelector('#gv-reset-cancel').addEventListener('click', hideResetModal);
    modal.querySelector('#gv-reset-confirm').addEventListener('click', function () {
      hideResetModal();
      wipeAndReload();
    });
    modal.addEventListener('click', function (ev) {
      if (ev.target === modal) hideResetModal();
    });

    state.uiReady = true;
    global.addEventListener('resize', layoutDeleteButton);
    global.addEventListener('orientationchange', function () {
      global.setTimeout(layoutDeleteButton, 200);
    });
    layoutDeleteButton();
  }

  function showResetModal() {
    var modal = global.document.getElementById('gv-reset-modal');
    if (!modal) return;
    modal.style.display = 'flex';
  }

  function hideResetModal() {
    var modal = global.document.getElementById('gv-reset-modal');
    if (!modal) return;
    modal.style.display = 'none';
  }

  function layoutDeleteButton() {
    ensureOverlay();
    var btn = global.document.getElementById('gv-btn-xoa');
    if (!btn) return;
    if (!state.menuVisible) {
      btn.style.display = 'none';
      return;
    }

    var host = global.document.getElementById('game-holder') || global.document.body;
    var rect = host.getBoundingClientRect();
    var size = Math.max(52, Math.min(72, Math.round(Math.min(rect.width, rect.height) * 0.09)));
    var left = rect.left + rect.width - size - 16;
    var top = rect.top + rect.height - size - 36;

    if (left < rect.left + 8) left = rect.left + 8;
    if (top < rect.top + 8) top = rect.top + 8;

    btn.style.display = 'block';
    btn.style.width = size + 'px';
    btn.style.left = Math.round(left) + 'px';
    btn.style.top = Math.round(top) + 'px';
  }

  function setMenuVisible(visible) {
    state.menuVisible = !!visible;
    layoutDeleteButton();
  }

  function onDeleteClick(ev) {
    if (ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    showResetModal();
  }

  function reloadWithCacheBust() {
    try {
      var url = new URL(global.location.href);
      url.searchParams.set('_gv', String(Date.now()));
      global.location.replace(url.toString());
    } catch (e) {
      global.location.reload();
    }
  }

  function clearLocalProgress() {
    state.seeding = true;
    try {
      var root = readSimpleRoot();
      delete root[KEY_GAME];
      delete root[KEY_UI];
      writeSimpleRoot(root);
    } finally {
      state.seeding = false;
    }
  }

  function wipeAndReload() {
    state.resetting = true;
    if (state.saveTimer) {
      global.clearTimeout(state.saveTimer);
      state.saveTimer = 0;
    }

    if (!cloudEnabled()) {
      clearLocalProgress();
      logWarn('GV_RESET_LOCAL_ONLY — thiếu gid/token, chỉ xóa local');
      global.setTimeout(reloadWithCacheBust, 50);
      return;
    }

    var cred = getCredentials();
    var metadata = buildClearedMetadata();
    var attempt = 0;
    var maxAttempts = 3;

    function tryWipe() {
      attempt++;
      return postForm(SAVE_URL, {
        gameId: cred.gid,
        token: cred.token,
        metadata: JSON.stringify(metadata),
        metaData: JSON.stringify(metadata),
        CurrentLevel: 0,
        CurrentStage: 0,
        TotalScore: 0
      })
        .then(function (res) {
          if (!(res && res.Status === 1)) throw new Error('wipe save failed');
          return postForm(LOAD_URL, {
            gameId: cred.gid,
            token: cred.token
          });
        })
        .then(function (res) {
          var meta = parseMeta(res);
          if (meta && !meta.cleared && (meta.dennisGAME || meta.dennisUI)) {
            throw new Error('wipe verify failed');
          }
          clearLocalProgress();
          logInfo('Wipe cloud + local OK');
          reloadWithCacheBust();
        })
        .catch(function (err) {
          logWarn('Wipe attempt ' + attempt + ' lỗi', err);
          if (attempt < maxAttempts) return tryWipe();
          state.resetting = false;
          logWarn('Wipe thất bại — không xóa local');
          global.alert('Không thể xóa dữ liệu trên máy chủ. Vui lòng thử lại.');
        });
    }

    tryWipe();
  }

  /* ============================ boot scripts ============================ */

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = global.document.createElement('script');
      s.src = src;
      s.async = false;
      s.onload = function () {
        resolve(src);
      };
      s.onerror = function () {
        reject(new Error('Failed to load ' + src));
      };
      global.document.body.appendChild(s);
    });
  }

  function loadScriptsSequential(list) {
    var chain = Promise.resolve();
    list.forEach(function (src) {
      chain = chain.then(function () {
        return loadScript(src);
      });
    });
    return chain;
  }

  function installFlushListeners() {
    global.addEventListener('visibilitychange', function () {
      if (global.document.visibilityState === 'hidden') flushSave();
    });
    global.addEventListener('pagehide', function () {
      flushSave();
    });
  }

  function init() {
    logInfo('init ' + MODULE_VERSION);
    patchLocalStorage();
    ensureOverlay();
    setMenuVisible(false);
    installFlushListeners();
    return loadProgress();
  }

  /**
   * Bootstrap: seed cloud rồi mới nạp vendor + app.
   * @param {{scripts?: string[]}} opts
   */
  function boot(opts) {
    opts = opts || {};
    var scripts = opts.scripts || [
      'js/vendor.bf7a2ab0.bundle.js',
      'js/app.3d79d0d8.bundle.js'
    ];

    var start = function () {
      return init().then(function () {
        return loadScriptsSequential(scripts);
      });
    };

    if (global.document.readyState === 'loading') {
      return new Promise(function (resolve, reject) {
        global.document.addEventListener('DOMContentLoaded', function () {
          start().then(resolve).catch(reject);
        });
      });
    }
    return start();
  }

  var api = {
    version: MODULE_VERSION,
    ready: ready,
    init: init,
    boot: boot,
    onLevelWin: onLevelWin,
    setMenuVisible: setMenuVisible,
    flushSave: flushSave,
    requestSave: requestSave,
    getCredentials: getCredentials
  };

  global.ArcadeTool = api;
})(typeof window !== 'undefined' ? window : this);
