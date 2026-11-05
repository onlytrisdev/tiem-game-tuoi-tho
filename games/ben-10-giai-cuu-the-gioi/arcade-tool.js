/**
 * Arcade tool — Ben 10 Giải cứu thế giới (Phaser / Cangrejo)
 * Cloud Get/SaveHistoryGame (localStorage ben10WR_v1.5:*),
 * GV.saveScore khi thắng trận, nút Xóa data trên màn Tùy chỉnh,
 * bỏ qua video intro qua Constants.SHOW_VIDEO = false.
 *
 * Điểm (best per level — replay không cộng dồn):
 *   levelScore = 100 + bestKills*2 + (itemPicked ? 40 : 0)
 *   TotalScore = tổng levelScore các level đã completed
 */
(function (global) {
  'use strict';

  var MODULE_VERSION = 'ben-10-giai-cuu-the-gioi-tool-v2';
  var GAME_SLUG = 'ben-10-giai-cuu-the-gioi';
  var SAVE_URL = 'https://localhost/account/SaveHistoryGame';
  var LOAD_URL = 'https://localhost/account/GetHistoryGame';
  var STORAGE_NS = 'ben10WR_v1.5:';
  var GAME_DATA_KEY = 'gameDataen';
  var FULL_GAME_DATA_KEY = STORAGE_NS + GAME_DATA_KEY;
  var BESTS_KEY = STORAGE_NS + 'gvLevelBests';
  var LEGACY_KILLS_KEY = STORAGE_NS + 'gvEnemiesKilled';
  var SAVE_DEBOUNCE_MS = 60000;
  var BOOT_TIMEOUT_MS = 8000;
  var DELETE_IMG_NAME = 'xoa-data-gv.png';

  /* Score weights — balanced for career totals in low thousands */
  var W_LEVEL = 100;
  var W_KILL = 2;
  var W_ITEM = 40;

  var qsKill = false;
  var qsDebug = false;
  try {
    var bootQs = new URLSearchParams(global.location.search);
    qsKill = bootQs.get('gvsave') === '0';
    qsDebug = bootQs.get('gv_debug') === '1';
  } catch (e0) {
    qsKill = false;
  }

  var scriptBase = '';
  try {
    if (document.currentScript && document.currentScript.src) {
      scriptBase = document.currentScript.src.replace(/[^/]*$/, '');
    }
  } catch (e1) { /* ignore */ }
  if (!scriptBase) {
    try {
      scriptBase = new URL('.', global.location.href).href;
    } catch (e2) {
      scriptBase = String(global.location.href).replace(/[#?].*$/, '').replace(/[^/]*$/, '');
    }
  }

  function resolveAssetUrl(name) {
    try {
      return new URL(name, scriptBase || global.location.href).href;
    } catch (e) {
      return name;
    }
  }

  var DELETE_IMG = resolveAssetUrl(DELETE_IMG_NAME);

  var state = {
    seeding: false,
    dirty: false,
    saveTimer: 0,
    lastSaveAt: 0,
    pendingReason: '',
    resetting: false,
    loadStarted: false,
    lsPatched: false,
    hooksReady: false,
    scoreOpen: false,
    settingsVisible: false,
    uiReady: false,
    expectedUpdatedAt: null,
    sessionKills: 0
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

  function isOfflineCloudHost() {
    try {
      var host = String((global.location && global.location.hostname) || '').toLowerCase();
      if (!host || host === 'localhost' || host === '127.0.0.1') return true;
      if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) return true;
      if (host === 'localhost' || host === 'www.localhost' || host === 'e.localhost') return false;
      if (host.indexOf('.localhost') >= 0) return false;
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

  /* ============================ local progress ============================ */

  function safeGet(key) {
    try {
      return global.localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function safeSet(key, value) {
    try {
      global.localStorage.setItem(key, value);
      return true;
    } catch (e) {
      return false;
    }
  }

  function safeRemove(key) {
    try {
      global.localStorage.removeItem(key);
      return true;
    } catch (e) {
      return false;
    }
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

  function readGameData() {
    return parseMaybeJson(safeGet(FULL_GAME_DATA_KEY));
  }

  function writeGameData(data) {
    if (!data || typeof data !== 'object') return false;
    return safeSet(FULL_GAME_DATA_KEY, JSON.stringify(data));
  }

  function readLevelBests() {
    var raw = parseMaybeJson(safeGet(BESTS_KEY));
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return {};
    return raw;
  }

  function writeLevelBests(bests) {
    if (!bests || typeof bests !== 'object') bests = {};
    safeSet(BESTS_KEY, JSON.stringify(bests));
    return bests;
  }

  function getBestKills(bests, levelId) {
    var key = String(levelId);
    if (!bests || !bests[key]) return 0;
    var n = parseInt(bests[key].kills, 10);
    return isFinite(n) && n > 0 ? n : 0;
  }

  /**
   * Cập nhật best kills cho level — chỉ giữ max, không cộng dồn khi replay.
   * @returns {{ bests: object, prev: number, next: number, improved: boolean }}
   */
  function updateLevelBestKills(levelId, sessionKills) {
    var bests = readLevelBests();
    var key = String(levelId);
    var prev = getBestKills(bests, levelId);
    var next = Math.max(prev, Math.max(0, Math.floor(sessionKills || 0)));
    if (!bests[key] || typeof bests[key] !== 'object') bests[key] = {};
    bests[key].kills = next;
    writeLevelBests(bests);
    return { bests: bests, prev: prev, next: next, improved: next > prev };
  }

  function sumBestKills(bests) {
    bests = bests || readLevelBests();
    var sum = 0;
    Object.keys(bests).forEach(function (k) {
      sum += getBestKills(bests, k);
    });
    return sum;
  }

  function countCompletedLevels(gameData) {
    if (!gameData || !Array.isArray(gameData.levels)) return 0;
    var n = 0;
    for (var i = 0; i < gameData.levels.length; i++) {
      if (gameData.levels[i] && gameData.levels[i].completed) n++;
    }
    return n;
  }

  function countItemsFound(gameData) {
    if (!gameData) return 0;
    var h = parseInt(gameData.itemsHealth, 10) || 0;
    var p = parseInt(gameData.itemsPower, 10) || 0;
    return Math.max(0, h) + Math.max(0, p);
  }

  function highestCompletedIndex(gameData) {
    if (!gameData || !Array.isArray(gameData.levels)) return -1;
    var max = -1;
    for (var i = 0; i < gameData.levels.length; i++) {
      if (gameData.levels[i] && gameData.levels[i].completed) max = i;
    }
    return max;
  }

  function levelScore(bestKills, itemPicked) {
    return W_LEVEL + Math.max(0, Math.floor(bestKills || 0)) * W_KILL + (itemPicked ? W_ITEM : 0);
  }

  /**
   * TotalScore = sum over completed levels of (100 + bestKills*2 + item*40).
   * Replay cùng level chỉ giữ best kills — không cộng dồn.
   */
  function computeTotalScore(gameData, bests) {
    if (!gameData || !Array.isArray(gameData.levels)) return 0;
    bests = bests || readLevelBests();
    var total = 0;
    for (var i = 0; i < gameData.levels.length; i++) {
      var lv = gameData.levels[i];
      if (!lv || !lv.completed) continue;
      total += levelScore(getBestKills(bests, i), !!lv.itemPicked);
    }
    return total;
  }

  function buildMetadata() {
    var gameData = readGameData();
    var bests = readLevelBests();
    var levels = countCompletedLevels(gameData);
    var items = countItemsFound(gameData);
    var kills = sumBestKills(bests);
    var total = computeTotalScore(gameData, bests);
    var highest = highestCompletedIndex(gameData);
    return {
      schemaVersion: 2,
      metaVersion: 2,
      module: MODULE_VERSION,
      game: GAME_SLUG,
      gameSlug: GAME_SLUG,
      CurrentLevel: highest >= 0 ? highest + 1 : 0,
      CurrentStage: highest >= 0 ? highest + 1 : 0,
      TotalScore: total,
      LevelsCompleted: levels,
      EnemiesKilled: kills,
      ItemsFound: items,
      ItemsHealth: gameData ? (parseInt(gameData.itemsHealth, 10) || 0) : 0,
      ItemsPower: gameData ? (parseInt(gameData.itemsPower, 10) || 0) : 0,
      SecondPartUnlocked: !!(gameData && gameData.secondPartUnlocked),
      TutorialShown: !!(gameData && gameData.tutorialShown),
      gameData: gameData,
      levelBests: bests,
      scoreWeights: { level: W_LEVEL, kill: W_KILL, item: W_ITEM },
      scoreMode: 'best-per-level',
      cleared: false,
      savedAt: new Date().toISOString()
    };
  }

  function buildClearedMetadata() {
    return {
      schemaVersion: 2,
      metaVersion: 2,
      module: MODULE_VERSION,
      game: GAME_SLUG,
      gameSlug: GAME_SLUG,
      CurrentLevel: 0,
      CurrentStage: 0,
      TotalScore: 0,
      LevelsCompleted: 0,
      EnemiesKilled: 0,
      ItemsFound: 0,
      gameData: null,
      levelBests: {},
      scoreMode: 'best-per-level',
      cleared: true,
      savedAt: new Date().toISOString()
    };
  }

  function clearLocalProgress() {
    state.seeding = true;
    try {
      var keys = [];
      try {
        for (var i = 0; i < global.localStorage.length; i++) {
          var k = global.localStorage.key(i);
          if (k && k.indexOf(STORAGE_NS) === 0) keys.push(k);
        }
      } catch (e) { /* ignore */ }
      for (var j = 0; j < keys.length; j++) safeRemove(keys[j]);
      /* also clear raw debug keys if present */
      safeRemove('ben10WR_v1.5_renderer');
      safeRemove('ben10WR_v1.5_debug');
    } finally {
      state.seeding = false;
    }
  }

  function applyRemoteMeta(meta) {
    if (!meta || typeof meta !== 'object') return false;
    if (meta.cleared) {
      clearLocalProgress();
      logInfo('Load: cloud cleared — đã xóa local');
      return true;
    }

    var data = meta.gameData != null ? meta.gameData : null;
    if (typeof data === 'string') data = parseMaybeJson(data);
    if (!data || typeof data !== 'object' || !Array.isArray(data.levels)) {
      logInfo('Load: metadata trống / không hợp lệ — giữ local');
      return false;
    }

    state.seeding = true;
    try {
      writeGameData(data);
      var bests = meta.levelBests;
      if (typeof bests === 'string') bests = parseMaybeJson(bests);
      if (bests && typeof bests === 'object' && !Array.isArray(bests)) {
        writeLevelBests(bests);
      } else {
        /* Save cũ chỉ có career kills — không migrate ảo; best map rỗng, tự fill khi thắng */
        writeLevelBests({});
      }
      try {
        safeRemove(LEGACY_KILLS_KEY);
      } catch (eLegacy) { /* ignore */ }
    } finally {
      state.seeding = false;
    }
    var seededBests = readLevelBests();
    logInfo('Load OK: seed gameData + levelBests', {
      LevelsCompleted: countCompletedLevels(data),
      EnemiesKilled: sumBestKills(seededBests),
      TotalScore: computeTotalScore(data, seededBests)
    });
    return true;
  }

  function parseMeta(res) {
    if (!res) return null;
    if (res.updatedAt || res.NgaySua) {
      state.expectedUpdatedAt = res.updatedAt || res.NgaySua;
    }
    if (res.Status !== 1 && res.Status !== '1' && !(res.Data || res.data)) {
      /* some responses omit Status but still have Data */
      if (!res.Data && !res.data && !res.MetaData && !res.metaData) return null;
    }
    var raw =
      (res.Data && (res.Data.MetaData || res.Data.metaData || res.Data.metadata)) ||
      res.MetaData ||
      res.metaData ||
      res.metadata ||
      (res.Data && res.Data) ||
      null;
    if (!raw) return null;
    if (typeof raw === 'string') {
      try {
        raw = JSON.parse(raw);
      } catch (e) {
        return null;
      }
    }
    return raw && typeof raw === 'object' ? raw : null;
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
    var fields = {
      gameId: cred.gid,
      token: cred.token,
      metadata: JSON.stringify(metadata),
      metaData: JSON.stringify(metadata),
      CurrentLevel: metadata.CurrentLevel,
      CurrentStage: metadata.CurrentStage,
      TotalScore: metadata.TotalScore
    };
    if (state.expectedUpdatedAt) {
      fields.expectedUpdatedAt = state.expectedUpdatedAt;
      fields.NgaySua = state.expectedUpdatedAt;
    }
    return postForm(SAVE_URL, fields)
      .then(function (res) {
        var ok = !!(res && (res.Status === 1 || res.Status === '1'));
        if (ok) {
          if (res.updatedAt || res.NgaySua || (res.Data && (res.Data.updatedAt || res.Data.NgaySua))) {
            state.expectedUpdatedAt =
              res.updatedAt ||
              res.NgaySua ||
              (res.Data && (res.Data.updatedAt || res.Data.NgaySua)) ||
              state.expectedUpdatedAt;
          }
          logInfo('Save OK (' + reason + ') score=' + metadata.TotalScore);
        } else logWarn('Save failed (' + reason + ')', res);
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

  function flushSave(reason) {
    if (state.saveTimer) {
      global.clearTimeout(state.saveTimer);
      state.saveTimer = 0;
    }
    if (state.dirty || Date.now() - state.lastSaveAt > 1000) {
      return sendSave(reason || 'flush');
    }
    return Promise.resolve(false);
  }

  function patchLocalStorage() {
    if (state.lsPatched) return;
    try {
      var proto = Storage.prototype;
      var origSet = proto.setItem;
      var origRemove = proto.removeItem;
      var origClear = proto.clear;
      proto.setItem = function (key, value) {
        var result = origSet.apply(this, arguments);
        var k = String(key);
        if (!state.seeding && !state.resetting && k.indexOf(STORAGE_NS) === 0) {
          requestSave('ls-set:' + k.replace(STORAGE_NS, ''));
        }
        return result;
      };
      proto.removeItem = function (key) {
        var result = origRemove.apply(this, arguments);
        var k = String(key);
        if (!state.seeding && !state.resetting && k.indexOf(STORAGE_NS) === 0) {
          requestSave('ls-remove');
        }
        return result;
      };
      proto.clear = function () {
        var result = origClear.apply(this, arguments);
        if (!state.seeding && !state.resetting) requestSave('ls-clear');
        return result;
      };
      state.lsPatched = true;
      logInfo('Đã patch localStorage cho namespace ' + STORAGE_NS);
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

  function pauseGameForScore(on) {
    try {
      var app = global.Game && Game.App && Game.App.getInstance && Game.App.getInstance();
      if (!app) return;
      if (on) {
        if (typeof app.paused !== 'undefined') app.paused = true;
        if (app.stage) app.stage.existing = app.stage.existing;
      } else {
        if (typeof app.paused !== 'undefined') app.paused = false;
      }
    } catch (e) { /* ignore */ }
  }

  function onLevelWin() {
    if (state.scoreOpen || state.resetting) return;

    var gameData = readGameData();
    var levelId = -1;
    /* DataManager vừa ghi — ưu tiên đọc từ Instances nếu có */
    try {
      if (Game.Instances && Game.Instances.dataManager && Game.Instances.dataManager.gameData) {
        gameData = Game.Instances.dataManager.gameData;
      }
      if (Game.Instances && typeof Game.Instances.currentLevelId === 'number') {
        levelId = Game.Instances.currentLevelId;
      }
    } catch (e) { /* ignore */ }

    var sessionKills = Math.max(0, Math.floor(state.sessionKills || 0));
    var bestUpdate = { bests: readLevelBests(), prev: 0, next: 0, improved: false };
    if (levelId >= 0) {
      bestUpdate = updateLevelBestKills(levelId, sessionKills);
    }

    var score = computeTotalScore(gameData, bestUpdate.bests);
    var levels = countCompletedLevels(gameData);
    var items = countItemsFound(gameData);
    var itemThis =
      gameData &&
      gameData.levels &&
      gameData.levels[levelId] &&
      gameData.levels[levelId].itemPicked;

    logInfo('Level win -> saveScore=' + score, {
      levelId: levelId,
      sessionKills: sessionKills,
      bestKills: bestUpdate.next,
      bestImproved: bestUpdate.improved,
      levels: levels,
      items: items,
      itemThisLevel: !!itemThis,
      mode: 'best-per-level'
    });

    requestSave('level-win');
    state.scoreOpen = true;

    var done = function () {
      state.scoreOpen = false;
      pauseGameForScore(false);
      flushSave('score-onClose');
    };

    var cred = getCredentials();
    if (!cred.gid) {
      logInfo('GV_SAVE_SCORE_SKIP_NO_GID', score);
      state.scoreOpen = false;
      flushSave('win-no-gid');
      return;
    }

    pauseGameForScore(true);

    try {
      if (typeof global.GV === 'function') {
        new global.GV().saveScore(score, done);
        flushSave('win-immediate');
        global.setTimeout(function () {
          if (!document.getElementById('gv_savescore') && state.scoreOpen) done();
        }, 500);
        return;
      }
      logWarn('GV chưa sẵn sàng — bỏ qua saveScore');
      done();
    } catch (e) {
      logWarn('saveScore lỗi', e);
      done();
    }
  }

  /* ============================ delete UI (Settings) ============================ */

  function ensureOverlay() {
    if (state.uiReady) return;
    var doc = global.document;
    if (!doc || !doc.body || !doc.head) return;

    var style = doc.createElement('style');
    style.id = 'gv-ben10wr-style';
    style.textContent =
      '#gv-delete-btn{position:fixed;z-index:99990;padding:0;border:0;background:transparent;cursor:pointer;' +
      'width:56px;height:56px;display:none;pointer-events:auto;' +
      'opacity:0.6;transform:scale(0.8);transform-origin:center center;' +
      'transition:opacity 0.2s ease,transform 0.2s ease;' +
      '-webkit-tap-highlight-color:transparent;touch-action:manipulation;}' +
      '#gv-delete-btn:hover,#gv-delete-btn:focus-visible{opacity:1;transform:scale(1);outline:none;}' +
      '#gv-delete-btn img{display:block;width:100%;height:100%;object-fit:contain;' +
      'filter:drop-shadow(0 2px 3px rgba(0,0,0,.45));pointer-events:none;}' +
      '#gv-reset-modal{position:fixed;inset:0;z-index:100000;display:none;align-items:center;justify-content:center;' +
      'background:rgba(0,0,0,.55);}' +
      '#gv-reset-modal .gv-reset-box{background:#1a1a2e;color:#fff;border-radius:12px;padding:20px 22px;max-width:340px;' +
      'width:86%;box-shadow:0 8px 24px rgba(0,0,0,.4);font-family:Arial,Helvetica,sans-serif;}' +
      '#gv-reset-modal h3{margin:0 0 10px;font-size:18px;}' +
      '#gv-reset-modal p{margin:0 0 16px;font-size:14px;line-height:1.45;}' +
      '#gv-reset-modal .gv-reset-actions{display:flex;gap:10px;justify-content:flex-end;}' +
      '#gv-reset-modal button{border:0;border-radius:8px;padding:10px 16px;font-size:14px;font-weight:700;cursor:pointer;}' +
      '#gv-reset-confirm{background:#d32f2f;color:#fff;}' +
      '#gv-reset-cancel{background:#455a64;color:#fff;}';
    doc.head.appendChild(style);

    var btn = doc.createElement('button');
    btn.id = 'gv-delete-btn';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Xóa dữ liệu');
    btn.title = 'Xóa dữ liệu';
    btn.innerHTML = '<img src="' + DELETE_IMG + '" alt="">';
    btn.addEventListener('click', onDeleteClick);
    doc.body.appendChild(btn);

    var modal = doc.createElement('div');
    modal.id = 'gv-reset-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.innerHTML =
      '<div class="gv-reset-box">' +
      '<h3>Xóa dữ liệu</h3>' +
      '<p>Bạn chắc chắn muốn xóa tất cả dữ liệu game và chơi lại từ đầu?</p>' +
      '<div class="gv-reset-actions">' +
      '<button type="button" id="gv-reset-cancel">Hủy</button>' +
      '<button type="button" id="gv-reset-confirm">OK</button>' +
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
    if (modal) modal.style.display = 'flex';
  }

  function hideResetModal() {
    var modal = global.document.getElementById('gv-reset-modal');
    if (modal) modal.style.display = 'none';
  }

  function layoutDeleteButton() {
    ensureOverlay();
    var btn = global.document.getElementById('gv-delete-btn');
    if (!btn) return;
    if (!state.settingsVisible) {
      btn.style.display = 'none';
      return;
    }

    var host =
      global.document.getElementById('content') ||
      global.document.getElementById('game') ||
      global.document.body;
    var rect = host.getBoundingClientRect();
    var size = Math.max(48, Math.min(64, Math.round(Math.min(rect.width, rect.height) * 0.07)));
    var left = rect.left + rect.width - size - 14;
    var top = rect.top + 14;

    if (left < rect.left + 8) left = rect.left + 8;
    if (top < rect.top + 8) top = rect.top + 8;

    btn.style.display = 'block';
    btn.style.width = size + 'px';
    btn.style.height = size + 'px';
    btn.style.left = Math.round(left) + 'px';
    btn.style.top = Math.round(top) + 'px';
  }

  function setSettingsVisible(visible) {
    state.settingsVisible = !!visible;
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
          if (!(res && (res.Status === 1 || res.Status === '1'))) throw new Error('wipe save failed');
          return postForm(LOAD_URL, {
            gameId: cred.gid,
            token: cred.token
          });
        })
        .then(function (res) {
          var meta = parseMeta(res);
          if (meta && !meta.cleared && meta.gameData) {
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

  /* ============================ engine hooks ============================ */

  function isEnemyParent(parent) {
    if (!parent) return false;
    try {
      var player = Game.Instances && Game.Instances.player;
      if (player && parent === player) return false;
      /* Player dùng setDeath; quái/boss dùng setDead */
      if (typeof parent.setDeath === 'function') return false;
      if (typeof parent.setDead === 'function') return true;
      if (
        Game.CollisionLayers &&
        parent.filter &&
        (parent.filter.categoryBits & Game.CollisionLayers.Enemies) === Game.CollisionLayers.Enemies
      ) {
        return true;
      }
    } catch (e) { /* ignore */ }
    return false;
  }

  function installGameHooks() {
    if (state.hooksReady) return true;
    if (!global.Game) return false;

    try {
      /* Global Constants (không phải Game.Constants) — PreloaderState đọc biến này */
      if (typeof global.Constants !== 'undefined') {
        global.Constants.SHOW_VIDEO = false;
        logInfo('Constants.SHOW_VIDEO = false (skip intro video)');
      }
    } catch (e) {
      logWarn('Không set SHOW_VIDEO', e);
    }

    try {
      if (
        Game.PreloaderState &&
        Game.PreloaderState.prototype &&
        !Game.PreloaderState.prototype.__gvSkipIntroHook
      ) {
        var origCreate = Game.PreloaderState.prototype.create;
        Game.PreloaderState.prototype.create = function () {
          var self = this;
          var result = origCreate.apply(this, arguments);
          /* Bỏ nút Play CN + video → thẳng main menu */
          try {
            if (typeof global.Constants !== 'undefined') {
              global.Constants.SHOW_VIDEO = false;
            }
            if (self.game && self.game.time && self.game.time.events) {
              self.game.time.events.add(50, function () {
                if (typeof self.onEndVideo === 'function') self.onEndVideo();
              }, self);
            } else if (typeof self.onEndVideo === 'function') {
              self.onEndVideo();
            }
          } catch (skipErr) {
            logWarn('Auto skip intro lỗi', skipErr);
            try {
              if (typeof self.onEndVideo === 'function') self.onEndVideo();
            } catch (eSkip) { /* ignore */ }
          }
          return result;
        };
        Game.PreloaderState.prototype.__gvSkipIntroHook = true;
        logInfo('Hook PreloaderState.create → onEndVideo (boot thẳng main menu)');
      }
    } catch (ePre) {
      logWarn('Hook PreloaderState thất bại', ePre);
    }

    try {
      if (Game.LifeManager && Game.LifeManager.prototype && !Game.LifeManager.prototype.__gvKillHook) {
        var origRemove = Game.LifeManager.prototype.removeLife;
        Game.LifeManager.prototype.removeLife = function (amount) {
          var wasAlive = this.lifes > 0;
          var parent = this.parent;
          var result = origRemove.apply(this, arguments);
          if (wasAlive && this.lifes <= 0 && isEnemyParent(parent)) {
            state.sessionKills = Math.max(0, Math.floor(state.sessionKills || 0)) + 1;
            if (qsDebug) logInfo('Session kill #' + state.sessionKills);
          }
          return result;
        };
        Game.LifeManager.prototype.__gvKillHook = true;
        logInfo('Hook LifeManager.removeLife (session kills)');
      }
    } catch (e2) {
      logWarn('Hook LifeManager thất bại', e2);
    }

    try {
      if (
        Game.GameplayState &&
        Game.GameplayState.prototype &&
        !Game.GameplayState.prototype.__gvWinHook
      ) {
        if (!Game.GameplayState.prototype.__gvSessionResetHook) {
          var origInit = Game.GameplayState.prototype.init;
          Game.GameplayState.prototype.init = function () {
            state.sessionKills = 0;
            if (qsDebug) logInfo('Gameplay init — sessionKills reset');
            return origInit.apply(this, arguments);
          };
          Game.GameplayState.prototype.__gvSessionResetHook = true;
        }

        var origEnd = Game.GameplayState.prototype.endGame;
        Game.GameplayState.prototype.endGame = function (won) {
          var result = origEnd.apply(this, arguments);
          if (won) {
            try {
              global.setTimeout(function () {
                onLevelWin();
              }, 80);
            } catch (e3) {
              onLevelWin();
            }
          }
          return result;
        };
        Game.GameplayState.prototype.__gvWinHook = true;
        logInfo('Hook GameplayState (session reset + saveScore khi thắng)');
      }
    } catch (e4) {
      logWarn('Hook endGame thất bại', e4);
    }

    try {
      if (Game.UISettings && Game.UISettings.prototype && !Game.UISettings.prototype.__gvSettingsHook) {
        var origShow = Game.UISettings.prototype.show;
        var origHide = Game.UISettings.prototype.hide;
        var origDone = Game.UISettings.prototype.onCompletedHide;
        Game.UISettings.prototype.show = function () {
          var r = origShow.apply(this, arguments);
          setSettingsVisible(true);
          return r;
        };
        Game.UISettings.prototype.hide = function () {
          var r = origHide.apply(this, arguments);
          /* ẩn nút ngay khi bắt đầu đóng */
          setSettingsVisible(false);
          return r;
        };
        if (typeof origDone === 'function') {
          Game.UISettings.prototype.onCompletedHide = function () {
            var r = origDone.apply(this, arguments);
            setSettingsVisible(false);
            return r;
          };
        }
        Game.UISettings.prototype.__gvSettingsHook = true;
        logInfo('Hook UISettings show/hide (nút Xóa dữ liệu)');
      }
    } catch (e5) {
      logWarn('Hook UISettings thất bại', e5);
    }

    state.hooksReady = true;
    ensureOverlay();
    return true;
  }

  function waitAndHook(maxMs) {
    maxMs = maxMs || 15000;
    var started = Date.now();
    return new Promise(function (resolve) {
      function tick() {
        if (installGameHooks()) {
          resolve(true);
          return;
        }
        if (Date.now() - started >= maxMs) {
          logWarn('Timeout chờ Game.* hooks');
          resolve(false);
          return;
        }
        global.setTimeout(tick, 50);
      }
      tick();
    });
  }

  /* ============================ public API ============================ */

  var api = {
    version: MODULE_VERSION,
    ready: ready,
    init: function () {
      patchLocalStorage();
      ensureOverlay();
      return loadProgress();
    },
    installHooks: installGameHooks,
    waitAndHook: waitAndHook,
    onLevelWin: onLevelWin,
    computeTotalScore: function () {
      return computeTotalScore(readGameData(), readLevelBests());
    },
    getStats: function () {
      var gd = readGameData();
      var bests = readLevelBests();
      return {
        levelsCompleted: countCompletedLevels(gd),
        enemiesKilled: sumBestKills(bests),
        sessionKills: state.sessionKills,
        itemsFound: countItemsFound(gd),
        totalScore: computeTotalScore(gd, bests),
        levelBests: bests,
        scoreMode: 'best-per-level',
        weights: { level: W_LEVEL, kill: W_KILL, item: W_ITEM }
      };
    },
    requestSave: requestSave,
    flushSave: flushSave,
    setSettingsVisible: setSettingsVisible
  };

  global.ArcadeTool = api;

  /* auto-init load (seed trước khi game start — index chờ ready) */
  if (global.document && global.document.readyState === 'loading') {
    global.document.addEventListener('DOMContentLoaded', function () {
      api.init();
    });
  } else {
    api.init();
  }
})(typeof window !== 'undefined' ? window : this);
