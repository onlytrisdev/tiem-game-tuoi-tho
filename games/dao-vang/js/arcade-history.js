/**

 * Arcade history + aggregated high score for Đào vàng.

 * TotalHighScore = BestClassic + BestEndless + BestAdventure (missing mode = 0).

 */

(function (global) {

  'use strict';



  var LOG = '[ArcadeHistory]';

  var HIGH_SCORE_KEY = 'daoVangHighScore';

  var DATA_MANAGER_KEY = '2.0.3';

  var FREE_GOLD_KEY = 'daoVangFreeGoldVideoAt';

  var SAVE_URL = 'https://localhost/account/SaveHistoryGame';

  var GET_URL = 'https://localhost/account/GetHistoryGame';

  var FALLBACK_CLOSE_MS = 60000;



  var MODE_KEYS = {

    classic: 'daoVangBestClassic',

    endless: 'daoVangBestEndless',

    adventure: 'daoVangBestAdventure'

  };



  var MODE_META = {

    classic: 'BestClassic',

    endless: 'BestEndless',

    adventure: 'BestAdventure'

  };



  var restoreReady = false;

  var restorePromise = Promise.resolve(null);

  var restoringFromServer = false;

  var scoreGateOpen = false;

  var closeFallbackTimer = 0;

  var pendingCloseFns = [];



  function readQs(search) {

    try {

      return new URLSearchParams(search || '');

    } catch (e) {

      return new URLSearchParams();

    }

  }



  function getParentParams() {

    if (global.parent === global) return null;

    try {

      return readQs(global.parent.location.search);

    } catch (e) {

      return null;

    }

  }



  function ensureCredentials() {

    var local = readQs(global.location.search);

    var gid = local.get('gid') || '';

    var token = local.get('token') || '';

    if (!gid || !token) {

      var parentQs = getParentParams();

      if (parentQs) {

        if (!gid) gid = parentQs.get('gid') || '';

        if (!token) token = parentQs.get('token') || '';

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

      } catch (e) {

        console.warn(LOG, 'replaceState gid/token failed', e);

      }

    }

    return { gid: gid, token: token };

  }



  function canUseServer() {

    return !!ensureCredentials().gid;

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

      return res.json();

    });

  }



  function normalizeMode(mode) {

    var m = String(mode || '').toLowerCase();

    if (m === 'classic' || m === 'endless' || m === 'adventure') return m;

    return 'classic';

  }



  function readStoredInt(key) {

    try {

      var raw = global.localStorage.getItem(key);

      if (raw === null || raw === '') return 0;

      var n = parseInt(raw, 10);

      return isNaN(n) ? 0 : Math.max(0, n);

    } catch (e) {

      return 0;

    }

  }



  function writeStoredInt(key, value) {

    var v = Math.max(0, Math.floor(Number(value) || 0));

    try {

      global.localStorage.setItem(key, String(v));

    } catch (e) {

      console.warn(LOG, 'writeStoredInt failed', key, e);

    }

    return v;

  }



  function getModeBest(mode) {

    var m = normalizeMode(mode);

    return readStoredInt(MODE_KEYS[m]);

  }



  function setModeBest(mode, score) {

    var m = normalizeMode(mode);

    return writeStoredInt(MODE_KEYS[m], score);

  }



  function mergeModeBest(mode, score) {

    var m = normalizeMode(mode);

    var incoming = Math.max(0, Math.floor(Number(score) || 0));

    var current = getModeBest(m);

    if (incoming > current) {

      setModeBest(m, incoming);

      return incoming;

    }

    return current;

  }



  function getTotalHighScore() {

    return (

      getModeBest('classic') +

      getModeBest('endless') +

      getModeBest('adventure')

    );

  }



  function syncLegacyTotal(total) {

    writeStoredInt(HIGH_SCORE_KEY, total);

    return total;

  }



  /** Backward-compatible alias — returns aggregated total. */

  function getHighScore() {

    return syncLegacyTotal(getTotalHighScore());

  }



  function setHighScore(score) {

    return syncLegacyTotal(Math.max(0, Math.floor(Number(score) || 0)));

  }



  function getModeBestsSnapshot() {

    return {

      classic: getModeBest('classic'),

      endless: getModeBest('endless'),

      adventure: getModeBest('adventure')

    };

  }



  function deepCopy(value) {

    try {

      return JSON.parse(JSON.stringify(value));

    } catch (e) {

      return value;

    }

  }



  function getPlayerData() {

    if (global.DataManager && global.DataManager.playerData) {

      return deepCopy(global.DataManager.playerData);

    }

    return null;

  }



  function buildMetadata(totalOverride) {

    var pd = getPlayerData() || {};

    var stage2 = Math.max(0, parseInt(pd.stage2, 10) || 0);

    var bests = getModeBestsSnapshot();

    var total =

      totalOverride !== undefined && totalOverride !== null

        ? Math.max(0, Math.floor(Number(totalOverride) || 0))

        : getTotalHighScore();

    syncLegacyTotal(total);

    var meta = {

      CurrentLevel: Math.max(1, stage2 + 1),

      CurrentStage: stage2,

      BestClassic: bests.classic,

      BestEndless: bests.endless,

      BestAdventure: bests.adventure,

      TotalScore: total,

      HighScore: total,

      PlayerData: pd,

      savedAt: new Date().toISOString()

    };

    return meta;

  }



  function applyPlayerData(playerData) {

    if (!playerData || !global.DataManager) return false;

    var dm = global.DataManager;

    restoringFromServer = true;

    try {

      dm.playerData = deepCopy(playerData);

      if (dm.dataTemplate) {

        for (var key in dm.dataTemplate) {

          if (dm.playerData[key] == null) {

            dm.playerData[key] =

              typeof dm.deepCopy === 'function'

                ? dm.deepCopy(dm.dataTemplate[key])

                : deepCopy(dm.dataTemplate[key]);

          }

        }

      }

      try {

        dm.save();

      } catch (e) {

        console.warn(LOG, 'applyPlayerData save failed', e);

      }

      try {

        if (typeof dm.updateMoney === 'function') dm.updateMoney();

      } catch (e2) {

        /* ignore */

      }

      return true;

    } finally {

      restoringFromServer = false;

    }

  }



  function applyMeta(meta) {

    if (!meta) return null;



    if (

      meta.BestClassic != null ||

      meta.BestEndless != null ||

      meta.BestAdventure != null

    ) {

      if (meta.BestClassic != null) mergeModeBest('classic', meta.BestClassic);

      if (meta.BestEndless != null) mergeModeBest('endless', meta.BestEndless);

      if (meta.BestAdventure != null) mergeModeBest('adventure', meta.BestAdventure);

    } else {

      var serverTotal = Math.max(

        0,

        Math.floor(Number(meta.HighScore != null ? meta.HighScore : meta.TotalScore) || 0)

      );

      var localTotal = getTotalHighScore();

      if (serverTotal > localTotal) {

        syncLegacyTotal(serverTotal);

      }

    }



    syncLegacyTotal(getTotalHighScore());

    if (meta.PlayerData) applyPlayerData(meta.PlayerData);

    return meta;

  }



  function saveProgress(totalOverride) {

    var meta = buildMetadata(totalOverride);

    if (!canUseServer()) {

      return Promise.resolve(meta);

    }

    var cred = ensureCredentials();

    console.log(LOG, 'SaveHistoryGame', cred.gid, meta.TotalScore, meta);

    return postForm(SAVE_URL, {

      gameId: cred.gid,

      token: cred.token || '',

      metadata: JSON.stringify(meta)

    })

      .then(function (res) {

        if (!res || res.Status !== 1) {

          console.warn(LOG, 'SaveHistoryGame failed', res);

        } else {

          console.log(LOG, 'SaveHistoryGame ok');

        }

        return meta;

      })

      .catch(function (err) {

        console.warn(LOG, 'SaveHistoryGame network error', err);

        return meta;

      });

  }



  function scheduleSaveProgress() {

    if (restoringFromServer) return;

    saveProgress();

  }



  function fetchFromServer() {

    if (!canUseServer()) return Promise.resolve(null);

    var cred = ensureCredentials();

    console.log(LOG, 'GetHistoryGame', cred.gid);

    return postForm(GET_URL, {

      gameId: cred.gid,

      token: cred.token || ''

    })

      .then(function (res) {

        if (res && res.Status === 1 && res.Data && res.Data.MetaData) {

          try {

            var meta =

              typeof res.Data.MetaData === 'string'

                ? JSON.parse(res.Data.MetaData)

                : res.Data.MetaData;

            console.log(LOG, 'GetHistoryGame ok', meta && meta.TotalScore);

            return meta;

          } catch (e) {

            console.warn(LOG, 'MetaData parse error', e);

            return null;

          }

        }

        console.log(LOG, 'GetHistoryGame no data', res);

        return null;

      })

      .catch(function (err) {

        console.warn(LOG, 'GetHistoryGame network error', err);

        return null;

      });

  }



  function restoreProgress() {

    restoreReady = false;

    restorePromise = fetchFromServer()

      .then(function (meta) {

        if (meta) applyMeta(meta);

        syncLegacyTotal(getTotalHighScore());

        restoreReady = true;

        return meta;

      })

      .catch(function (err) {

        restoreReady = true;

        console.warn(LOG, 'restore failed', err);

        return null;

      });

    return restorePromise;

  }



  function pauseGame() {

    try {

      if (global.DataManager) global.DataManager.pause = true;

    } catch (e) {

      /* ignore */

    }

  }



  function resumeGame() {

    /* Win/lose flows clear pause in game code. */

  }



  function removeScorePopup() {

    try {

      var el = document.getElementById('gv_savescore');

      if (el && el.parentNode) el.parentNode.removeChild(el);

    } catch (e) {

      /* ignore */

    }

  }



  function clearCloseFallback() {

    if (closeFallbackTimer) {

      clearTimeout(closeFallbackTimer);

      closeFallbackTimer = 0;

    }

  }



  function finishScoreGate() {

    if (!scoreGateOpen) return;

    scoreGateOpen = false;

    clearCloseFallback();

    removeScorePopup();

    resumeGame();

    var fns = pendingCloseFns.slice();

    pendingCloseFns.length = 0;

    for (var i = 0; i < fns.length; i++) {

      try {

        fns[i]();

      } catch (e) {

        console.warn(LOG, 'onClose handler error', e);

      }

    }

  }



  function bindPopupDismiss(root) {

    if (!root || root.getAttribute('data-gv-bound') === '1') return !!root;

    root.setAttribute('data-gv-bound', '1');

    root.addEventListener(

      'click',

      function (ev) {

        var t = ev.target;

        if (!t || !t.closest) return;

        if (t.closest('.gv_btn-submit') || t.closest('.gv_btn-close')) {

          setTimeout(finishScoreGate, 0);

        }

      },

      false

    );

    return true;

  }



  function waitBindPopup(attempt) {

    if (!scoreGateOpen) return;

    if (bindPopupDismiss(document.getElementById('gv_savescore'))) return;

    if ((attempt || 0) >= 40) return;

    setTimeout(function () {

      waitBindPopup((attempt || 0) + 1);

    }, 100);

  }



  function openSaveScorePopup(value) {

    if (typeof global.GV === 'undefined') {

      console.warn(LOG, 'GV missing — skip popup');

      return false;

    }

    try {

      new global.GV().saveScore(value, function () {

        finishScoreGate();

      });

      return true;

    } catch (err) {

      console.warn(LOG, 'saveScore failed', err);

      return false;

    }

  }



  function openScoreGate(total, onDone) {

    if (scoreGateOpen) {

      return new Promise(function (resolve) {

        pendingCloseFns.push(function () {

          if (typeof onDone === 'function') onDone(true);

          resolve(true);

        });

      });

    }



    scoreGateOpen = true;

    pauseGame();

    saveProgress(total);



    return new Promise(function (resolve) {

      pendingCloseFns.push(function () {

        if (typeof onDone === 'function') onDone(true);

        resolve(true);

      });



      var opened = openSaveScorePopup(total);

      if (!opened) {

        finishScoreGate();

        return;

      }



      waitBindPopup(0);

      clearCloseFallback();

      closeFallbackTimer = setTimeout(function () {

        if (scoreGateOpen) finishScoreGate();

      }, FALLBACK_CLOSE_MS);

    });

  }



  /**

   * Update per-mode best; popup when aggregated total increases.

   * @param {string} mode classic | endless | adventure

   * @param {number} score curMoney at end of round/layer

   */

  function offerNewHighScore(mode, score, onDone) {

    var modeId = normalizeMode(mode);

    var value = Math.max(0, Math.floor(Number(score) || 0));

    var prevModeBest = getModeBest(modeId);

    var prevTotal = getTotalHighScore();



    function done(improved) {

      if (typeof onDone === 'function') onDone(!!improved);

    }



    if (!(value > prevModeBest)) {

      done(false);

      return Promise.resolve(false);

    }



    setModeBest(modeId, value);

    var newTotal = getTotalHighScore();

    syncLegacyTotal(newTotal);



    if (!(newTotal > prevTotal)) {

      done(false);

      saveProgress(newTotal);

      return Promise.resolve(false);

    }



    console.log(

      LOG,

      'new total high score',

      modeId,

      prevModeBest,

      '→',

      value,

      '| total',

      prevTotal,

      '→',

      newTotal

    );



    return openScoreGate(newTotal, onDone).then(function () {

      return true;

    });

  }

  /**
   * Reset local game progress + local high-score cache.
   * (Settings "Xóa dữ liệu" only)
   *
   * We also try to sync a zero-score metadata to Arcade when login params exist.
   */
  function resetAllProgress() {
    var keys = [
      DATA_MANAGER_KEY,
      HIGH_SCORE_KEY,
      MODE_KEYS.classic,
      MODE_KEYS.endless,
      MODE_KEYS.adventure,
      FREE_GOLD_KEY
    ];

    for (var i = 0; i < keys.length; i++) {
      try {
        global.localStorage && global.localStorage.removeItem(keys[i]);
      } catch (e) {
        /* ignore */
      }
    }

    // Best effort: push zero metadata to server (no popup; just HTTP)
    try {
      if (canUseServer()) {
        return saveProgress(0);
      }
    } catch (e2) {
      /* ignore */
    }

    return Promise.resolve(true);
  }



  try {

    ensureCredentials();

    syncLegacyTotal(getTotalHighScore());

  } catch (e) {

    /* ignore */

  }



  global.ArcadeHistory = {

    HIGH_SCORE_KEY: HIGH_SCORE_KEY,

    MODE_KEYS: MODE_KEYS,

    getModeBest: getModeBest,

    getModeBests: getModeBestsSnapshot,

    getTotalHighScore: getTotalHighScore,

    getHighScore: getHighScore,

    setHighScore: setHighScore,

    buildMetadata: buildMetadata,

    saveProgress: saveProgress,

    scheduleSaveProgress: scheduleSaveProgress,

    restoreProgress: restoreProgress,

    offerNewHighScore: offerNewHighScore,

    resetAllProgress: resetAllProgress,

    ensureCredentials: ensureCredentials,

    isScoreGateOpen: function () {

      return scoreGateOpen;

    },

    isRestoreReady: function () {

      return restoreReady;

    },

    whenRestored: function () {

      return restorePromise;

    }

  };

})(window);


