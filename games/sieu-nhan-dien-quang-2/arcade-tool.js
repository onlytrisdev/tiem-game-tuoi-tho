/**
 * Arcade tool — Siêu nhân Điện Quang 2 (Construct 2)
 * FEATURE: cloud Save/GetHistoryGame, GV.saveScore khi thắng màn,
 * nút Xóa data giữa thanh trên (选人界面), đếm quái tiêu diệt theo cấp.
 * Logo / BXH DOM / ads: không trong scope — giữ comment cuối file.
 */
(function (global) {
  'use strict';

  var MODULE_VERSION = 'sndq2-tool-v1';
  var SAVE_URL = 'https://localhost/account/SaveHistoryGame';
  var GET_URL = 'https://localhost/account/GetHistoryGame';
  var LS_PREFIX = '机动奥特曼大作战_';
  var TOOL_META_KEY = 'gv_sndq2_tool_meta';
  var KILLS_KEY = 'gv_sndq2_monsters_killed';
  var DELETE_IMG = 'xoa-data-gv.png';
  var SAVE_DEBOUNCE_MS = 4000;
  var SAVE_INTERVAL_MS = 60000;
  var BOOT_TIMEOUT_MS = 8000;
  var META_VERSION = 1;
  var DESIGN_W = 800;
  var DESIGN_H = 480;
  var CHAR_SELECT_LAYOUT = '选人界面';
  var LEVEL_LAYOUT_RE = /^关卡\s*\d+$/;

  var KEY_COIN = LS_PREFIX + '货币';
  var KEY_SCORE = LS_PREFIX + '积分';
  var KEY_ITEM1 = LS_PREFIX + '修理箱数量';
  var KEY_ITEM2 = LS_PREFIX + '复活奖牌数量';
  var KEY_UNLOCK = LS_PREFIX + '已开启关卡';
  var STAR_SUFFIX = '关星级';

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
    intervalTimer: 0,
    resetting: false,
    scorePopupOpen: false,
    lastScoreLevel: -1,
    hooksReady: false,
    uiReady: false,
    layoutWatchStarted: false,
    levelEnemyStart: 0,
    levelTracked: '',
    expectedUpdatedAt: null,
    lastLayoutName: ''
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
      return false;
    } catch (e) {
      return true;
    }
  }

  function cloudEnabled() {
    return !qsKill && !!getCredentials().gid;
  }

  function postForm(url, fields) {
    return fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      body: new URLSearchParams(fields)
    }).then(function (res) {
      return res.json();
    });
  }

  function parseMetaData(raw) {
    if (!raw) return null;
    try {
      if (typeof raw === 'string') return JSON.parse(raw);
      return raw;
    } catch (e) {
      return null;
    }
  }

  /* ============================ localStorage ============================ */

  var nativeSetItem = null;
  var nativeRemoveItem = null;
  var nativeClear = null;

  function lsGet(key) {
    try {
      return global.localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function lsSetRaw(key, value) {
    try {
      if (nativeSetItem) nativeSetItem.call(global.localStorage, key, value);
      else global.localStorage.setItem(key, value);
      return true;
    } catch (e) {
      return false;
    }
  }

  function lsRemoveRaw(key) {
    try {
      if (nativeRemoveItem) nativeRemoveItem.call(global.localStorage, key);
      else global.localStorage.removeItem(key);
    } catch (e) {
      /* ignore */
    }
  }

  function isGameSaveKey(key) {
    var k = String(key || '');
    if (k.indexOf(LS_PREFIX) === 0) return true;
    if (k === TOOL_META_KEY || k === KILLS_KEY) return true;
    return false;
  }

  function isStarKey(key) {
    var k = String(key || '');
    return k.indexOf(LS_PREFIX) === 0 && k.indexOf(STAR_SUFFIX) === k.length - STAR_SUFFIX.length;
  }

  function collectLocalKeys() {
    var out = {};
    try {
      for (var i = 0; i < global.localStorage.length; i++) {
        var key = global.localStorage.key(i);
        if (!key) continue;
        if (key.indexOf(LS_PREFIX) === 0) {
          out[key] = global.localStorage.getItem(key);
        }
      }
    } catch (e) {
      /* ignore */
    }
    return out;
  }

  function clearGameLocalKeys() {
    var keys = [];
    try {
      for (var i = 0; i < global.localStorage.length; i++) {
        var key = global.localStorage.key(i);
        if (key && key.indexOf(LS_PREFIX) === 0) keys.push(key);
      }
    } catch (e) {
      /* ignore */
    }
    for (var j = 0; j < keys.length; j++) lsRemoveRaw(keys[j]);
    lsRemoveRaw(TOOL_META_KEY);
    lsRemoveRaw(KILLS_KEY);
  }

  function intOr(v, fallback) {
    var n = parseInt(v, 10);
    return isNaN(n) ? (fallback || 0) : n;
  }

  /* ============================ C2 runtime helpers ============================ */

  function getRuntime() {
    try {
      if (typeof global.cr_getC2Runtime === 'function') return global.cr_getC2Runtime();
    } catch (e) {
      /* ignore */
    }
    return null;
  }

  function getGlobalVar(name) {
    var rt = getRuntime();
    if (!rt || !rt.all_global_vars) return null;
    for (var i = 0; i < rt.all_global_vars.length; i++) {
      var g = rt.all_global_vars[i];
      if (g && g.name === name) {
        try {
          return typeof g.getValue === 'function' ? g.getValue() : g.data;
        } catch (e) {
          return g.data;
        }
      }
    }
    return null;
  }

  function getLayoutName() {
    var rt = getRuntime();
    if (!rt || !rt.running_layout) return '';
    return String(rt.running_layout.name || '');
  }

  function countEnemyInstances() {
    var rt = getRuntime();
    if (!rt || !rt.types_by_index) return 0;
    // Family t210 = enemies (types_by_index[210])
    var t = rt.types_by_index[210];
    if (!t || !t.instances) return 0;
    return t.instances.length;
  }

  /** Object t93 — gameplay flags; IV[4]==1 khi 过关 (win UI hiện). */
  function isWinFlagSet() {
    var rt = getRuntime();
    if (!rt || !rt.types_by_index) return false;
    var t = rt.types_by_index[93];
    if (!t || !t.instances || !t.instances.length) return false;
    try {
      var iv = t.instances[0].instance_vars;
      return iv && intOr(iv[4], 0) === 1;
    } catch (e) {
      return false;
    }
  }

  function markDirty(reason) {
    if (state.seeding || state.resetting || qsKill) return;
    state.dirty = true;
    scheduleSave(reason || 'dirty');
  }

  function scheduleSave(reason) {
    if (!cloudEnabled()) return;
    if (state.saveTimer) clearTimeout(state.saveTimer);
    state.saveTimer = setTimeout(function () {
      state.saveTimer = 0;
      flushSave({ reason: reason || 'debounce' });
    }, SAVE_DEBOUNCE_MS);
  }

  function patchLocalStorage() {
    if (state.hooksReady) return;
    try {
      nativeSetItem = global.localStorage.setItem;
      nativeRemoveItem = global.localStorage.removeItem;
      nativeClear = global.localStorage.clear;

      global.localStorage.setItem = function (key, value) {
        var ret = nativeSetItem.apply(this, arguments);
        try {
          if (isGameSaveKey(key)) {
            markDirty('setItem:' + key);
            if (key === KEY_UNLOCK || isStarKey(key)) {
              onProgressWinHint(key, value);
            }
          }
        } catch (e) {
          logWarn('setItem hook error', e);
        }
        return ret;
      };

      global.localStorage.removeItem = function (key) {
        var ret = nativeRemoveItem.apply(this, arguments);
        if (isGameSaveKey(key) && !state.resetting) markDirty('removeItem:' + key);
        return ret;
      };

      state.hooksReady = true;
      logInfo('localStorage patched');
    } catch (e) {
      logWarn('patchLocalStorage failed', e);
    }
  }

  /* ============================ metadata ============================ */

  function readLevelStars() {
    var stars = {};
    try {
      for (var i = 0; i < global.localStorage.length; i++) {
        var key = global.localStorage.key(i);
        if (!key || !isStarKey(key)) continue;
        var mid = key.slice(LS_PREFIX.length, key.length - STAR_SUFFIX.length);
        stars[mid] = intOr(global.localStorage.getItem(key), 0);
      }
    } catch (e) {
      /* ignore */
    }
    return stars;
  }

  function getMonstersKilledTotal() {
    return intOr(lsGet(KILLS_KEY), 0);
  }

  function addMonstersKilled(n) {
    if (!n || n < 0) return;
    var total = getMonstersKilledTotal() + n;
    lsSetRaw(KILLS_KEY, String(total));
  }

  function buildMetadata(extra) {
    var unlock = intOr(lsGet(KEY_UNLOCK), 1);
    var score = intOr(lsGet(KEY_SCORE), 0);
    var coin = intOr(lsGet(KEY_COIN), 0);
    var gUnlock = getGlobalVar('全局变量数值_已开启关卡');
    var gScore = getGlobalVar('全局变量数值_积分');
    var gCoin = getGlobalVar('全局变量数值_货币');
    var gLevel = getGlobalVar('全局变量数值_当前关卡');
    var gPlayers = getGlobalVar('全局变量数值_玩家人数');
    var gMode = getGlobalVar('全局变量数值_游戏模式');
    var gItem1 = getGlobalVar('全局变量数值_道具1');
    var gItem2 = getGlobalVar('全局变量数值_道具2');

    if (gUnlock != null) unlock = intOr(gUnlock, unlock);
    if (gScore != null) score = intOr(gScore, score);
    if (gCoin != null) coin = intOr(gCoin, coin);

    var meta = {
      metaVersion: META_VERSION,
      module: MODULE_VERSION,
      CurrentLevel: intOr(gLevel, Math.max(1, unlock - 1)),
      UnlockedLevel: unlock,
      TotalScore: score,
      Coin: coin,
      ItemRepair: intOr(gItem1 != null ? gItem1 : lsGet(KEY_ITEM1), 0),
      ItemRevive: intOr(gItem2 != null ? gItem2 : lsGet(KEY_ITEM2), 0),
      LevelStars: readLevelStars(),
      PlayerCount: intOr(gPlayers, 1),
      GameMode: intOr(gMode, 1),
      MonstersKilled: getMonstersKilledTotal(),
      CompletedLevel: intOr(gLevel, 0),
      LocalKeys: collectLocalKeys(),
      savedAt: Date.now()
    };

    if (extra && typeof extra === 'object') {
      for (var k in extra) {
        if (Object.prototype.hasOwnProperty.call(extra, k)) meta[k] = extra[k];
      }
    }
    return meta;
  }

  function defaultMetadata() {
    return {
      metaVersion: META_VERSION,
      module: MODULE_VERSION,
      CurrentLevel: 1,
      UnlockedLevel: 1,
      TotalScore: 0,
      Coin: 0,
      ItemRepair: 0,
      ItemRevive: 0,
      LevelStars: {},
      PlayerCount: 1,
      GameMode: 1,
      MonstersKilled: 0,
      CompletedLevel: 0,
      LocalKeys: {},
      savedAt: Date.now(),
      reset: true
    };
  }

  function applyMetadataToLocal(meta) {
    if (!meta || typeof meta !== 'object') return false;
    state.seeding = true;
    try {
      clearGameLocalKeys();

      if (meta.LocalKeys && typeof meta.LocalKeys === 'object') {
        for (var key in meta.LocalKeys) {
          if (!Object.prototype.hasOwnProperty.call(meta.LocalKeys, key)) continue;
          if (String(key).indexOf(LS_PREFIX) !== 0) continue;
          lsSetRaw(key, String(meta.LocalKeys[key]));
        }
      } else {
        lsSetRaw(KEY_UNLOCK, String(intOr(meta.UnlockedLevel, 1)));
        lsSetRaw(KEY_SCORE, String(intOr(meta.TotalScore, 0)));
        lsSetRaw(KEY_COIN, String(intOr(meta.Coin, 0)));
        lsSetRaw(KEY_ITEM1, String(intOr(meta.ItemRepair, 0)));
        lsSetRaw(KEY_ITEM2, String(intOr(meta.ItemRevive, 0)));
        if (meta.LevelStars && typeof meta.LevelStars === 'object') {
          for (var lv in meta.LevelStars) {
            if (!Object.prototype.hasOwnProperty.call(meta.LevelStars, lv)) continue;
            lsSetRaw(LS_PREFIX + lv + STAR_SUFFIX, String(intOr(meta.LevelStars[lv], 0)));
          }
        }
      }

      lsSetRaw(KILLS_KEY, String(intOr(meta.MonstersKilled, 0)));
      lsSetRaw(TOOL_META_KEY, JSON.stringify({
        expectedUpdatedAt: meta.updatedAt || meta.NgaySua || null,
        seededAt: Date.now()
      }));
      state.expectedUpdatedAt = meta.updatedAt || meta.NgaySua || null;
      logInfo('Seeded localStorage from cloud', {
        unlock: lsGet(KEY_UNLOCK),
        score: lsGet(KEY_SCORE),
        coin: lsGet(KEY_COIN)
      });
      return true;
    } catch (e) {
      logWarn('applyMetadataToLocal failed', e);
      return false;
    } finally {
      state.seeding = false;
    }
  }

  /* ============================ cloud API ============================ */

  function flushSave(opts) {
    opts = opts || {};
    if (qsKill || state.resetting) return Promise.resolve({ skipped: true });
    if (!cloudEnabled()) {
      if (opts.force) logInfo('Save skip — no gid (dev/local ok)');
      return Promise.resolve({ skipped: true, reason: 'no-gid' });
    }
    if (!state.dirty && !opts.force) return Promise.resolve({ skipped: true, reason: 'clean' });

    var cred = getCredentials();
    var meta = buildMetadata(opts.extra);
    var body = {
      gameId: cred.gid,
      token: cred.token || '',
      metadata: JSON.stringify(meta)
    };
    if (state.expectedUpdatedAt) {
      body.expectedUpdatedAt = String(state.expectedUpdatedAt);
    }

    logInfo('SaveHistoryGame', { reason: opts.reason || 'flush', score: meta.TotalScore });

    return postForm(SAVE_URL, body)
      .then(function (res) {
        state.dirty = false;
        if (res && (res.updatedAt || res.NgaySua)) {
          state.expectedUpdatedAt = res.updatedAt || res.NgaySua;
        }
        if (res && (res.Status === 409 || res.status === 409)) {
          logWarn('Save conflict 409 — refetch', res);
          return loadCloudAndApply().then(function () {
            state.dirty = true;
            return flushSave({ force: true, reason: 'conflict-retry' });
          });
        }
        logInfo('SaveHistoryGame ok', res && (res.Status || res.status));
        return res;
      })
      .catch(function (err) {
        logWarn('SaveHistoryGame error — keep local', err);
        return { error: true };
      });
  }

  function loadCloudAndApply() {
    if (qsKill) return Promise.resolve({ skipped: true, reason: 'gvsave=0' });
    var cred = getCredentials();
    if (!cred.gid) {
      logInfo('No gid/token -> local fallback (dev only)');
      return Promise.resolve({ skipped: true, reason: 'no-gid' });
    }

    var body = { gameId: cred.gid, token: cred.token || '' };
    return Promise.race([
      postForm(GET_URL, body),
      new Promise(function (resolve) {
        setTimeout(function () {
          resolve({ __timeout: true });
        }, BOOT_TIMEOUT_MS);
      })
    ])
      .then(function (res) {
        if (res && res.__timeout) {
          logWarn('GetHistoryGame timeout — play local');
          return { skipped: true, reason: 'timeout' };
        }
        var raw = res && (res.MetaData || res.metadata || res.Data || res.data);
        var meta = parseMetaData(raw);
        if (res && (res.updatedAt || res.NgaySua)) {
          state.expectedUpdatedAt = res.updatedAt || res.NgaySua;
        }
        if (meta && (meta.LocalKeys || meta.UnlockedLevel != null || meta.TotalScore != null)) {
          if (res && (res.updatedAt || res.NgaySua)) {
            meta.updatedAt = res.updatedAt || res.NgaySua;
          }
          applyMetadataToLocal(meta);
          return { ok: true, seeded: true };
        }
        logInfo('GetHistoryGame empty — start fresh / local');
        return { ok: true, seeded: false };
      })
      .catch(function (err) {
        logWarn('GetHistoryGame error — chơi local', err);
        return { error: true };
      });
  }

  /* ============================ win / score ============================ */

  function onProgressWinHint(key, value) {
    // Unlock or star write often happens on win — defer to layout poll for full context
    tryShowScorePopup('ls:' + key);
  }

  function finalizeLevelKills() {
    if (!state.levelTracked) return 0;
    var remaining = countEnemyInstances();
    var killed = Math.max(0, state.levelEnemyStart - remaining);
    if (killed > 0) addMonstersKilled(killed);
    var n = killed;
    state.levelEnemyStart = 0;
    state.levelTracked = '';
    return n;
  }

  function tryShowScorePopup(reason) {
    if (state.scorePopupOpen || state.resetting || qsKill) return false;

    var completed = intOr(getGlobalVar('全局变量数值_当前关卡'), 0);
    if (completed <= 0) return false;
    if (state.lastScoreLevel === completed) return false;

    var score = intOr(getGlobalVar('全局变量数值_积分'), intOr(lsGet(KEY_SCORE), 0));
    var killedThis = finalizeLevelKills();
    var cred = getCredentials();

    state.lastScoreLevel = completed;
    state.scorePopupOpen = true;

    var extra = {
      CompletedLevel: completed,
      MonstersKilled: getMonstersKilledTotal(),
      MonstersKilledThisLevel: killedThis,
      PlayerCount: intOr(getGlobalVar('全局变量数值_玩家人数'), 1),
      GameMode: intOr(getGlobalVar('全局变量数值_游戏模式'), 1),
      Coin: intOr(getGlobalVar('全局变量数值_货币'), intOr(lsGet(KEY_COIN), 0)),
      winReason: reason
    };

    logInfo('Level end -> saveScore=' + score, extra);

    function afterClose() {
      state.scorePopupOpen = false;
      state.dirty = true;
      flushSave({ force: true, reason: 'score-onClose', extra: extra });
    }

    if (!cred.gid) {
      logInfo('GV_SAVE_SCORE_SKIP_NO_GID', score);
      state.scorePopupOpen = false;
      state.dirty = true;
      flushSave({ force: true, reason: 'win-no-gid', extra: extra });
      return false;
    }

    try {
      if (typeof global.GV !== 'undefined') {
        new global.GV().saveScore(score, afterClose);
        console.log('GV_SAVE_SCORE', score);
        state.dirty = true;
        flushSave({ force: true, reason: 'win-immediate', extra: extra });
        return true;
      }
      logWarn('GV chua san sang — bo qua saveScore');
      state.scorePopupOpen = false;
      afterClose();
    } catch (e) {
      logWarn('saveScore loi', e);
      state.scorePopupOpen = false;
      afterClose();
    }
    return false;
  }

  function onLayoutChanged(name) {
    if (!name) return;

    if (LEVEL_LAYOUT_RE.test(name) || name.indexOf('关卡') === 0) {
      // Delay count so instances spawn
      setTimeout(function () {
        if (getLayoutName() !== name) return;
        state.levelTracked = name;
        state.levelEnemyStart = countEnemyInstances();
        state.lastScoreLevel = -1;
        logInfo('Level start enemies=' + state.levelEnemyStart, name);
      }, 800);
    }

    updateDeleteButtonVisibility();
  }

  function startLayoutWatch() {
    if (state.layoutWatchStarted) return;
    state.layoutWatchStarted = true;
    setInterval(function () {
      var name = getLayoutName();
      if (name && name !== state.lastLayoutName) {
        state.lastLayoutName = name;
        onLayoutChanged(name);
      }
      // Win detection: object 93 IV[4]==1 khi hiện UI 过关; LS unlock/star cũng hook
      if (name && name.indexOf('关卡') === 0) {
        var current = intOr(getGlobalVar('全局变量数值_当前关卡'), 0);
        if (current > 0 && isWinFlagSet() && state.lastScoreLevel !== current) {
          tryShowScorePopup('poll-win-flag');
        }
      }
      updateDeleteButtonVisibility();
    }, 500);
  }

  /* ============================ delete UI ============================ */

  function ensureDeleteStyles() {
    if (document.getElementById('gv-sndq2-style')) return;
    var style = document.createElement('style');
    style.id = 'gv-sndq2-style';
    style.textContent =
      '#gv-delete-btn{position:fixed;z-index:99990;padding:0;border:0;background:transparent;cursor:pointer;' +
      'width:56px;height:56px;opacity:0.6;transform:scale(0.8);transform-origin:center center;' +
      'transition:opacity 0.2s ease,transform 0.2s ease;display:none;pointer-events:auto;}' +
      '#gv-delete-btn:hover,#gv-delete-btn:focus-visible{opacity:1;transform:scale(1);outline:none;}' +
      '#gv-delete-btn img{display:block;width:100%;height:100%;pointer-events:none;}' +
      '#gv-reset-modal{position:fixed;inset:0;z-index:100000;display:none;align-items:center;justify-content:center;' +
      'background:rgba(0,0,0,0.55);}' +
      '#gv-reset-modal .gv-reset-box{background:#1a2a4a;border:2px solid #4db8ff;border-radius:12px;padding:20px 24px;' +
      'max-width:90vw;width:360px;color:#fff;font-family:Arial,sans-serif;text-align:center;box-shadow:0 8px 24px rgba(0,0,0,0.4);}' +
      '#gv-reset-modal p{margin:0 0 16px;line-height:1.45;font-size:15px;}' +
      '#gv-reset-modal .gv-reset-actions{display:flex;gap:12px;justify-content:center;}' +
      '#gv-reset-modal button{min-width:96px;padding:8px 16px;border-radius:8px;border:0;font-weight:700;cursor:pointer;font-size:14px;}' +
      '#gv-reset-ok{background:#e74c3c;color:#fff;}' +
      '#gv-reset-cancel{background:#3d5a80;color:#fff;}';
    document.head.appendChild(style);
  }

  function ensureDeleteButton() {
    if (document.getElementById('gv-delete-btn')) return;
    ensureDeleteStyles();
    var btn = document.createElement('button');
    btn.id = 'gv-delete-btn';
    btn.type = 'button';
    btn.title = 'Xóa dữ liệu';
    btn.setAttribute('aria-label', 'Xóa dữ liệu');
    var img = document.createElement('img');
    img.src = DELETE_IMG;
    img.alt = '';
    img.width = 56;
    img.height = 56;
    img.draggable = false;
    btn.appendChild(img);
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      openResetModal();
    });
    document.body.appendChild(btn);

    var modal = document.createElement('div');
    modal.id = 'gv-reset-modal';
    modal.innerHTML =
      '<div class="gv-reset-box" role="dialog" aria-modal="true">' +
      '<p>Bạn chắc chắn muốn xóa tất cả dữ liệu game và chơi lại từ đầu?</p>' +
      '<div class="gv-reset-actions">' +
      '<button type="button" id="gv-reset-ok">OK</button>' +
      '<button type="button" id="gv-reset-cancel">Hủy</button>' +
      '</div></div>';
    document.body.appendChild(modal);
    document.getElementById('gv-reset-ok').addEventListener('click', function () {
      closeResetModal();
      performReset();
    });
    document.getElementById('gv-reset-cancel').addEventListener('click', closeResetModal);
    modal.addEventListener('click', function (ev) {
      if (ev.target === modal) closeResetModal();
    });

    global.addEventListener('resize', positionDeleteButton);
    global.addEventListener('orientationchange', positionDeleteButton);
    state.uiReady = true;
  }

  function getCanvasRect() {
    var el = document.getElementById('c2canvas') || document.getElementById('c2canvasdiv');
    if (!el) return null;
    return el.getBoundingClientRect();
  }

  function positionDeleteButton() {
    var btn = document.getElementById('gv-delete-btn');
    if (!btn || btn.style.display === 'none') return;
    var rect = getCanvasRect();
    if (!rect || rect.width < 10) return;
    var scale = rect.width / DESIGN_W;
    var size = Math.max(36, Math.min(64, 56 * scale));
    // Center of top bar: between crown (~88) and BXH (~656) → design X=400, Y=40
    var designX = DESIGN_W / 2;
    var designY = 40;
    var left = rect.left + designX * scale - size / 2;
    var top = rect.top + designY * scale - size / 2;
    btn.style.width = size + 'px';
    btn.style.height = size + 'px';
    btn.style.left = Math.round(left) + 'px';
    btn.style.top = Math.round(top) + 'px';
  }

  function updateDeleteButtonVisibility() {
    ensureDeleteButton();
    var btn = document.getElementById('gv-delete-btn');
    if (!btn) return;
    var name = getLayoutName();
    var show = name === CHAR_SELECT_LAYOUT;
    btn.style.display = show ? 'block' : 'none';
    if (show) positionDeleteButton();
  }

  function openResetModal() {
    var modal = document.getElementById('gv-reset-modal');
    if (!modal) return;
    modal.style.display = 'flex';
    try {
      if (typeof global.cr_setSuspended === 'function') global.cr_setSuspended(true);
    } catch (e) {
      /* ignore */
    }
  }

  function closeResetModal() {
    var modal = document.getElementById('gv-reset-modal');
    if (modal) modal.style.display = 'none';
    try {
      if (typeof global.cr_setSuspended === 'function') global.cr_setSuspended(false);
    } catch (e) {
      /* ignore */
    }
  }

  function performReset() {
    state.resetting = true;
    var cred = getCredentials();
    var meta = defaultMetadata();
    var done = function () {
      clearGameLocalKeys();
      // Seed default local keys so game doesn't see stale null weirdness
      lsSetRaw(KEY_UNLOCK, '1');
      lsSetRaw(KEY_SCORE, '0');
      lsSetRaw(KEY_COIN, '0');
      lsSetRaw(KEY_ITEM1, '0');
      lsSetRaw(KEY_ITEM2, '0');
      lsSetRaw(KILLS_KEY, '0');
      logInfo('Local wipe done — reload');
      global.location.reload();
    };

    if (cloudEnabled() && cred.gid) {
      var body = {
        gameId: cred.gid,
        token: cred.token || '',
        metadata: JSON.stringify(meta)
      };
      if (state.expectedUpdatedAt) body.expectedUpdatedAt = String(state.expectedUpdatedAt);
      postForm(SAVE_URL, body)
        .then(function (res) {
          logInfo('Cloud wipe save ok', res && (res.Status || res.status));
          done();
        })
        .catch(function (err) {
          logWarn('Cloud wipe failed — still clear local', err);
          done();
        });
    } else {
      done();
    }
  }

  /* ============================ init ============================ */

  function bindLifecycle() {
    global.addEventListener('pagehide', function () {
      if (state.dirty) flushSave({ force: true, reason: 'pagehide' });
    });
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden' && state.dirty) {
        flushSave({ force: true, reason: 'visibility' });
      }
    });
    state.intervalTimer = setInterval(function () {
      if (state.dirty) flushSave({ reason: 'interval' });
    }, SAVE_INTERVAL_MS);
  }

  function init() {
    if (qsKill) {
      logInfo('gvsave=0 — tool idle');
      return Promise.resolve(finishReady({ ok: true, disabled: true }));
    }

    patchLocalStorage();
    bindLifecycle();
    ensureDeleteButton();

    var boot = loadCloudAndApply().then(function (result) {
      startLayoutWatch();
      // Start watching UI after runtime likely exists
      setTimeout(startLayoutWatch, 1000);
      return finishReady(result);
    });

    return boot;
  }

  var ArcadeTool = {
    version: MODULE_VERSION,
    init: init,
    ready: ready,
    flushSave: flushSave,
    buildMetadata: buildMetadata
  };

  global.ArcadeTool = ArcadeTool;

  /* ============================ FEATURE OFF (commented) ============================
   * Logo Arcade shine, history-leaderboard.js, GVAdBreak shim — not requested.
   * ================================================================================ */

})(typeof window !== 'undefined' ? window : this);
