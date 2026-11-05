/**
 * Arcade tool — Quán ăn nhanh (Dream Chefs / Cocos Creator)
 * FEATURE: cloud save/load, xóa data (trong Cài đặt), ads shim (GVAdBreak), i18n VI, gửi điểm (ShowPass → GV.saveScore).
 * Logo / nút BXH riêng: không yêu cầu — giữ trong khối comment cuối file.
 */
(function (global) {
  'use strict';

  var MODULE_VERSION = 'quan-an-nhanh-tool-v2';
  var SAVE_URL = 'https://localhost/account/SaveHistoryGame';
  var GET_URL = 'https://localhost/account/GetHistoryGame';
  var SAVE_DEBOUNCE_MS = 3000;
  var BOOT_TIMEOUT_MS = 10000;
  var META_VERSION = 1;

  /** Trọng số điểm career (BXH) — không dùng Coin ví / Diamonds */
  var SCORE_W_LEVEL = 1000;
  var SCORE_W_STAR = 100;
  var SCORE_W_HOUSING = 50;
  var SCORE_W_WARE = 20;
  var EARNED_GOLD_KEY = 'gvEarnedGold';

  /** Keys LCData / ParamName — khớp project.3b653.js */
  var SAVE_KEYS = [
    'v',
    'AllHousingInfo',
    'CurrentHousingIndex',
    'HousingNewItem',
    'Level1',
    'Level2',
    'Level3',
    'Level4',
    'Level5',
    'Chapter1',
    'Chapter2',
    'Chapter3',
    'Chapter4',
    'Chapter5',
    'SumWareInfo1',
    'SumWareInfo2',
    'SumWareInfo3',
    'SumWareInfo4',
    'SumWareInfo5',
    'Vitality',
    'Coin',
    'IsNewUser',
    'VitalityTime',
    'SoundDisable',
    'MusicDisable',
    'Guide',
    'GameItem',
    'Guide14',
    'Guide15',
    'Diamonds',
    'StaminaPack',
    'UPGUIDE1',
    'UPGUIDE2',
    'UPGUIDE3',
    'UPGUIDE4',
    'UPGUIDE5',
    'LianSheng',
    'IsShielding',
    'ShowBanner',
    'scores',
    EARNED_GOLD_KEY
  ];

  /** fbStorage.ToStorageKey khi InFB: FBInstant.player.getID() + '_' + name */
  var FB_PLAYER_ID = 'gv-local';

  function storageKey(logical) {
    return FB_PLAYER_ID + '_' + logical;
  }

  function isTrackedKey(rawKey) {
    var k = String(rawKey || '');
    if (k.slice(-8) === '_changed') k = k.slice(0, -8);
    if (SAVE_KEYS.indexOf(k) >= 0) return true;
    var prefix = FB_PLAYER_ID + '_';
    if (k.indexOf(prefix) === 0 && SAVE_KEYS.indexOf(k.slice(prefix.length)) >= 0) return true;
    return false;
  }

  var state = {
    seeding: false,
    dirty: false,
    saveTimer: 0,
    resetting: false,
    settingsOpen: false,
    i18nDone: false,
    adsReady: false,
    hooksReady: false,
    scorePopupOpen: false,
    passScoreHooked: false
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

    return { gid: gid, token: token };
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
      return typeof raw === 'string' ? JSON.parse(raw) : raw;
    } catch (e) {
      return null;
    }
  }

  /* ============================ local storage ============================ */

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
      return false;
    }
  }

  function lsRemove(key) {
    try {
      global.localStorage.removeItem(key);
    } catch (e) {
      /* ignore */
    }
  }

  var FORCE_CLEARED_KEY = 'gv-force-cleared';

  function lsGetChanged(logicalKey) {
    var v = lsGet(storageKey(logicalKey) + '_changed');
    if (v == null || v === '') v = lsGet(logicalKey + '_changed');
    return v;
  }

  function readLocalBlob() {
    var blob = {};
    var i;
    for (i = 0; i < SAVE_KEYS.length; i++) {
      var k = SAVE_KEYS[i];
      var v = lsGetChanged(k);
      if (v == null || v === '') v = lsGet(storageKey(k));
      if (v == null || v === '') v = lsGet(k);
      if (v != null && v !== '') blob[k] = v;
    }
    return blob;
  }

  function writeLocalBlob(blob) {
    if (!blob || typeof blob !== 'object') return false;
    state.seeding = true;
    try {
      var i;
      for (i = 0; i < SAVE_KEYS.length; i++) {
        var k = SAVE_KEYS[i];
        if (Object.prototype.hasOwnProperty.call(blob, k) && blob[k] != null) {
          lsSet(storageKey(k), String(blob[k]));
          lsSet(k, String(blob[k]));
          // ClearChange-style: base đã sync → bỏ _changed
          lsRemove(storageKey(k) + '_changed');
          lsRemove(k + '_changed');
        }
      }
      return true;
    } finally {
      state.seeding = false;
    }
  }

  function clearLocalSave() {
    var i;
    for (i = 0; i < SAVE_KEYS.length; i++) {
      var k = SAVE_KEYS[i];
      lsRemove(k);
      lsRemove(storageKey(k));
      lsRemove(k + '_changed');
      lsRemove(storageKey(k) + '_changed');
    }
    lsRemove('LCData_Changed_Key');
    lsRemove(storageKey('LCData_Changed_Key'));
  }

  function setForceCleared(on) {
    try {
      if (on) global.sessionStorage.setItem(FORCE_CLEARED_KEY, '1');
      else global.sessionStorage.removeItem(FORCE_CLEARED_KEY);
    } catch (e) {
      /* ignore */
    }
  }

  function isForceCleared() {
    try {
      return global.sessionStorage.getItem(FORCE_CLEARED_KEY) === '1';
    } catch (e) {
      return false;
    }
  }

  function buildMetadata() {
    var blob = readLocalBlob();
    var coin = parseInt(blob.Coin, 10) || 0;
    var diamonds = parseInt(blob.Diamonds, 10) || 0;
    var levelMax = 0;
    var ch;
    for (ch = 1; ch <= 5; ch++) {
      try {
        var raw = blob['Level' + ch];
        if (!raw) continue;
        var n = parseInt(raw, 10);
        if (!isNaN(n) && String(n) === String(raw).trim()) {
          levelMax = Math.max(levelMax, n);
          continue;
        }
        var parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) levelMax = Math.max(levelMax, parsed.length);
        else if (parsed && typeof parsed === 'object') {
          levelMax = Math.max(levelMax, Object.keys(parsed).length);
        }
      } catch (e) {
        /* ignore */
      }
    }
    var scores = parseInt(blob.scores, 10) || 0;
    var career = computeCareerScore(parseInt(blob[EARNED_GOLD_KEY], 10) || 0);
    return {
      metaVersion: META_VERSION,
      CurrentLevel: levelMax,
      CurrentStage: parseInt(blob.CurrentHousingIndex, 10) || 0,
      TotalScore: career || scores || coin,
      Coin: coin,
      Diamonds: diamonds,
      Vitality: parseInt(blob.Vitality, 10) || 0,
      savedAt: new Date().toISOString(),
      ProgressBlob: blob
    };
  }

  function defaultMetadata() {
    return {
      metaVersion: META_VERSION,
      CurrentLevel: 0,
      CurrentStage: 0,
      TotalScore: 0,
      Coin: 0,
      Diamonds: 0,
      Vitality: 0,
      savedAt: new Date().toISOString(),
      ProgressBlob: {},
      cleared: true
    };
  }

  function applyRemoteMeta(meta) {
    if (isForceCleared() || (meta && meta.cleared)) {
      clearLocalSave();
      setForceCleared(false);
      logInfo('cleared — skip ProgressBlob restore', {
        force: true,
        cloudCleared: !!(meta && meta.cleared)
      });
      return true;
    }
    if (!meta || typeof meta !== 'object') return false;
    var blob = meta.ProgressBlob;
    if (!blob || typeof blob !== 'object') return false;
    writeLocalBlob(blob);
    logInfo('restored ProgressBlob from cloud', {
      CurrentLevel: meta.CurrentLevel,
      Coin: meta.Coin
    });
    return true;
  }

  function fetchRemote() {
    var cred = getCredentials();
    if (!cred.gid) {
      logWarn('No gid/token -> local fallback (dev only)');
      return Promise.resolve(null);
    }
    logInfo('Cloud sync active (production)', { gid: cred.gid });
    return postForm(GET_URL, {
      gameId: cred.gid,
      token: cred.token || ''
    })
      .then(function (res) {
        if (!res || res.Status !== 1 || !res.Data) return null;
        return parseMetaData(res.Data.MetaData);
      })
      .catch(function (err) {
        logWarn('GetHistoryGame failed', err);
        return null;
      });
  }

  function postSave(meta) {
    var cred = getCredentials();
    if (!cred.gid) {
      logWarn('thiếu gid — bỏ qua SaveHistoryGame');
      return Promise.resolve(false);
    }
    return postForm(SAVE_URL, {
      gameId: cred.gid,
      token: cred.token || '',
      metadata: JSON.stringify(meta)
    })
      .then(function (res) {
        if (!res || res.Status !== 1) {
          logWarn('SaveHistoryGame failed', res);
          return false;
        }
        logInfo('SaveHistoryGame ok', {
          CurrentLevel: meta.CurrentLevel,
          TotalScore: meta.TotalScore,
          cleared: !!meta.cleared
        });
        return true;
      })
      .catch(function (err) {
        logWarn('SaveHistoryGame network error', err);
        return false;
      });
  }

  function saveProgressNow() {
    if (state.resetting || state.seeding) return Promise.resolve(false);
    state.dirty = false;
    return postSave(buildMetadata());
  }

  function scheduleSave(reason) {
    if (state.seeding || state.resetting) return;
    state.dirty = true;
    if (state.saveTimer) clearTimeout(state.saveTimer);
    state.saveTimer = setTimeout(function () {
      state.saveTimer = 0;
      saveProgressNow().then(function () {
        logInfo('autosave', reason || '');
      });
    }, SAVE_DEBOUNCE_MS);
  }

  function hookLocalStorage() {
    if (!global.localStorage) return;
    var proto = Object.getPrototypeOf(global.localStorage) || Storage.prototype;
    if (!proto || proto.__gvDreamChefsHooked) return;
    var origSet = proto.setItem;
    proto.setItem = function (key, value) {
      var ret = origSet.apply(this, arguments);
      if (!state.seeding && !state.resetting && isTrackedKey(key)) {
        scheduleSave('setItem:' + key);
      }
      return ret;
    };
    proto.__gvDreamChefsHooked = true;

    global.addEventListener('visibilitychange', function () {
      if (global.document.visibilityState === 'hidden' && state.dirty) {
        saveProgressNow();
      }
    });
    global.addEventListener('pagehide', function () {
      if (state.dirty) saveProgressNow();
    });
  }

  function deleteAll() {
    logInfo('deleteAll');
    state.resetting = true;
    if (state.saveTimer) {
      clearTimeout(state.saveTimer);
      state.saveTimer = 0;
    }
    clearLocalSave();
    setForceCleared(true);
    var meta = defaultMetadata();
    postSave(meta)
      .then(function (ok) {
        if (!ok) logWarn('clear cloud save failed — local force-cleared vẫn giữ');
      })
      .finally(function () {
        setTimeout(function () {
          try {
            global.location.reload();
          } catch (e) {
            /* ignore */
          }
        }, 200);
      });
  }

  function bootLoad() {
    var timedOut = false;
    var timer = setTimeout(function () {
      timedOut = true;
      logWarn('bootLoad timeout — continue with local');
      finishReady({ ok: true, timedOut: true });
    }, BOOT_TIMEOUT_MS);

    return fetchRemote()
      .then(function (meta) {
        if (!timedOut) applyRemoteMeta(meta);
      })
      .catch(function (err) {
        logWarn('bootLoad error', err);
      })
      .then(function () {
        clearTimeout(timer);
        if (!timedOut) finishReady({ ok: true });
      });
  }

  /* ============================ pause / resume (ads + score popup) ============================ */

  function pauseGame() {
    try {
      if (global.cc && cc.audioEngine) cc.audioEngine.pauseAll();
    } catch (e) {
      /* ignore */
    }
    try {
      if (global.gamesetting && gamesetting.StopBGM) gamesetting.StopBGM();
    } catch (e2) {
      /* ignore */
    }
    try {
      if (global.cc && cc.director) cc.director.pause();
    } catch (e3) {
      /* ignore */
    }
    global.isAdPlaying = true;
  }

  function resumeGame() {
    global.isAdPlaying = false;
    try {
      if (global.cc && cc.director) cc.director.resume();
    } catch (e) {
      /* ignore */
    }
    try {
      if (global.cc && cc.audioEngine) cc.audioEngine.resumeAll();
    } catch (e2) {
      /* ignore */
    }
    try {
      if (global.gamesetting && gamesetting.ApplyMusic) gamesetting.ApplyMusic();
    } catch (e3) {
      /* ignore */
    }
  }

  /* ============================ ads shim ============================ */

  function installAdsShim() {
    if (state.adsReady) return;
    state.adsReady = true;

    function runRewardedBreak() {
      return new Promise(function (resolve) {
        var done = false;
        function finish() {
          if (done) return;
          done = true;
          resumeGame();
          resolve();
        }
        pauseGame();
        if (typeof global.GVAdBreak === 'function') {
          try {
            global.GVAdBreak(function () {
              finish();
            });
            return;
          } catch (e) {
            logWarn('GVAdBreak error', e);
          }
        }
        logWarn('GVAdBreak unavailable — grant fallback');
        finish();
      });
    }

    /** Ad instance giả cho AdsManager preload/show (FB Instant path). */
    function makeAdInstance(kind) {
      return {
        loadAsync: function () {
          return Promise.resolve();
        },
        showAsync: function () {
          if (kind === 'rewarded') return runRewardedBreak();
          return Promise.resolve();
        }
      };
    }

    function rejectUnsupported(name) {
      return Promise.reject(new Error('FBInstant.' + name + ' not available'));
    }

    var playerStub = {
      getID: function () {
        return FB_PLAYER_ID;
      },
      getName: function () {
        return 'Player';
      },
      getPhoto: function () {
        return null;
      },
      getDataAsync: function () {
        return Promise.resolve({});
      },
      setDataAsync: function () {
        return Promise.resolve();
      },
      flushDataAsync: function () {
        return Promise.resolve();
      },
      canSubscribeBotAsync: function () {
        return Promise.resolve(false);
      },
      subscribeBotAsync: function () {
        return rejectUnsupported('player.subscribeBotAsync');
      }
    };

    var contextStub = {
      getID: function () {
        return null;
      },
      chooseAsync: function () {
        return rejectUnsupported('context.chooseAsync');
      }
    };

    var SUPPORTED_APIS = [
      'getRewardedVideoAsync',
      'getInterstitialAdAsync',
      'getSupportedAPIs',
      'getSDKVersion',
      'getPlatform',
      'getLocale',
      'setLoadingProgress',
      'player.getID',
      'player.getDataAsync',
      'player.setDataAsync',
      'initializeAsync',
      'startGameAsync',
      'getEntryPointData',
      'logEvent',
      'onPause',
      'quit'
    ];

    var fbDefaults = {
      initializeAsync: function () {
        return Promise.resolve();
      },
      startGameAsync: function () {
        return Promise.resolve();
      },
      getLocale: function () {
        return 'vi_VN';
      },
      getPlatform: function () {
        return 'WEB';
      },
      getSDKVersion: function () {
        return '6.3';
      },
      setLoadingProgress: function () {},
      getPlayer: function () {
        return playerStub;
      },
      player: playerStub,
      context: contextStub,
      getEntryPointData: function () {
        return {};
      },
      getEntryPointAsync: function () {
        return Promise.resolve('');
      },
      onPause: function () {},
      quit: function () {},
      logEvent: function () {},
      getSupportedAPIs: function () {
        return SUPPORTED_APIS.slice();
      },
      getRewardedVideoAsync: function () {
        return Promise.resolve(makeAdInstance('rewarded'));
      },
      getInterstitialAdAsync: function () {
        return Promise.resolve(makeAdInstance('interstitial'));
      },
      shareAsync: function () {
        return rejectUnsupported('shareAsync');
      },
      switchGameAsync: function () {
        return rejectUnsupported('switchGameAsync');
      },
      canCreateShortcutAsync: function () {
        return Promise.resolve(false);
      },
      createShortcutAsync: function () {
        return rejectUnsupported('createShortcutAsync');
      },
      getLeaderboardAsync: function () {
        return rejectUnsupported('getLeaderboardAsync');
      },
      updateAsync: function () {
        return Promise.resolve();
      }
    };

    // Merge: luôn bổ sung method thiếu (không ghi đè API thật nếu đã có)
    if (!global.FBInstant) global.FBInstant = {};
    var fb = global.FBInstant;
    var key;
    for (key in fbDefaults) {
      if (!Object.prototype.hasOwnProperty.call(fbDefaults, key)) continue;
      if (typeof fb[key] === 'undefined') fb[key] = fbDefaults[key];
    }
    if (!fb.player) fb.player = playerStub;
    else {
      for (key in playerStub) {
        if (!Object.prototype.hasOwnProperty.call(playerStub, key)) continue;
        if (typeof fb.player[key] === 'undefined') fb.player[key] = playerStub[key];
      }
    }
    if (!fb.context) fb.context = contextStub;
    else {
      for (key in contextStub) {
        if (!Object.prototype.hasOwnProperty.call(contextStub, key)) continue;
        if (typeof fb.context[key] === 'undefined') fb.context[key] = contextStub[key];
      }
    }
    // Đảm bảo ads API luôn có (fix lỗi getRewardedVideoAsync is not a function)
    fb.getRewardedVideoAsync = fbDefaults.getRewardedVideoAsync;
    fb.getInterstitialAdAsync = fbDefaults.getInterstitialAdAsync;
    fb.getSupportedAPIs = fbDefaults.getSupportedAPIs;

    if (!global.MiniGameTools) {
      global.MiniGameTools = {
        onFacebookInited: function () {}
      };
    }

    /**
     * rewarded → GVAdBreak rồi resolve (EVT_GIVE_REWARDED).
     * interstitial (no type) → no-op (bỏ QC giữa game).
     */
    global.gdsdk = {
      showAd: function (type) {
        if (type === 'rewarded') return runRewardedBreak();
        return Promise.resolve();
      }
    };
    logInfo('gdsdk + FBInstant ads stub installed (rewarded→GVAdBreak)');
  }

  /* ============================ i18n VI ============================ */

  function formatVi(str, args) {
    if (!args || !args.length) return str;
    return String(str).replace(/\{(\d+)\}/g, function (_, i) {
      return args[i] != null ? args[i] : '';
    });
  }

  /** Bản Việt game thủ — ngắn, đủ ý; ghi đè String_VI khi cần polish */
  var VI_OVERRIDE = {
    0x65: 'OK',
    0x66: 'Huỷ',
    0x67: 'Thông báo',
    0x6b: 'Chờ chút…',
    0x6d: 'Chưa xem hết QC — không nhận thưởng',
    0x6e: 'Hết lượt thưởng hôm nay, mai quay lại',
    0x6f: 'Spam quá! Thử lại sau',
    0x70: 'Chưa có QC, thử lại sau',
    0x71: 'Rẻ nhất',
    0x72: 'Bán chạy',
    0x73: 'Sale',
    0x74: 'Gợi ý',
    0x75: 'Mua 1 lần',
    0x76: 'Tip +1',
    0x79: 'Đổi OK — nhận {0} NL',
    0x7a: 'Mua OK — nhận {0} gói NL',
    0x7b: 'Dùng OK — nhận {0} NL',
    0x7c: 'Thiếu gói NL',
    0x7d: 'Thiếu kim cương',
    0x83: 'Đổi OK — nhận {0} vàng',
    0x8d: 'Xem QC',
    0x8e: 'Xem QC nhận thưởng',
    0xbf: 'Đang thanh toán, thử lại sau',
    0xc0: 'Mạng lag, thử lại sau',
    0xc1: 'Đã huỷ thanh toán',
    0xc9: 'Mẹo: trang trí quán → tip cao hơn',
    0xca: 'Mẹo: thanh chờ xanh → phục vụ ăn tip',
    0xcb: 'Mẹo: trang trí full quán → mở chương mới',
    0xcc: 'Mẹo: nâng cấp nguyên liệu cho dễ chơi',
    0xcd: 'Mẹo: thanh chờ xanh → phục vụ ăn tip',
    0xce: 'Mẹo: giữ đồ trang trí để đổi skin',
    0xcf: 'Mẹo: tip liên tiếp → thưởng lớn hơn',
    0xd0: 'Mẹo: thanh chờ xanh → phục vụ ăn tip',
    0xd1: 'Mẹo: xài item cho dễ pass',
    0xd2: 'Mẹo: replay màn đã clear thoải mái',
    0x12d: 'Pass màn trước để mở',
    0x12e: 'Chương sau',
    0x12f: 'Nâng cấp → nấu nhanh hơn',
    0x130: 'Nâng cấp → nấu nhiều hơn',
    0x131: 'Nâng cấp → bán đắt hơn',
    0x132: 'Pass Chương 1 màn 7 để mở',
    0x133: 'Pass Chương 1 màn 9 để mở',
    0x134: 'Pass Chương 2 màn 13 để mở',
    0x136: 'Phải đủ số khách mới pass',
    0x137: 'Phải kịp giờ mới pass',
    0x138: 'Mục tiêu: thu vàng',
    0x139: 'Mục tiêu: hoàn thành đơn',
    0x13a: 'Mục tiêu: nhận like',
    0x13b: 'Cấm cháy đồ',
    0x13c: 'Cấm để khách giận',
    0x13d: 'Cấm vứt đồ ăn',
    0x140: 'Full',
    0x141: 'Cài đặt',
    0x142: 'Góp ý',
    0x143: 'Nhạc',
    0x144: 'Âm thanh',
    0x14b: 'Thiếu dụng cụ',
    0x14c: 'Tìm dụng cụ',
    0x14d: 'Đánh màn mới để lấy thêm dụng cụ!',
    0x155: 'Danh sách màn',
    0x15f: 'Vàng free',
    0x160: 'Nhận',
    0x161: 'Thiếu vàng',
    0x162: 'Còn thiếu',
    0x163: 'Đổi kim cương lấy <outline color=#733C03 width=2><color=white>{0}</o></c> vàng?',
    0x169: 'Mua kim cương',
    0x16a: 'Kim cương free',
    0x173: 'Mua item',
    0x174: 'Mua item để dễ pass',
    0x17d: 'Nạp NL',
    0x17e: 'Xem hết QC<br/>nhận 1 NL',
    0x17f: 'Nhận NL',
    0x180: 'Full NL ngay!',
    0x181: 'Chọn để dùng gói NL',
    0x182: 'Dùng 1 gói NL',
    0x183: 'Dùng',
    0x184: 'Mua gói NL',
    0x185: 'NL đã full',
    0x186: 'Chưa có gói NL',
    0x187: 'Bạn nhận',
    0x191: 'Trang trí xong chương trước để mở',
    0x192: 'Quán còn đồ chưa trang trí',
    0x19b: 'Chương 1',
    0x19c: 'Chương 2',
    0x19d: 'Chương 3',
    0x19e: 'Chương 4',
    0x19f: 'Chương 5',
    0x1f5: 'Màn này không cháy đồ',
    0x1f6: 'Tip x2 màn này',
    0x1f7: 'Tự phục vụ liên tục',
    0x1ff: '+{0}s',
    0x200: '+{0} khách',
    0x201: 'Bỏ qua lỗi, chơi tiếp',
    0x209: 'Chưa đủ vàng',
    0x20a: 'Chưa đủ đĩa',
    0x20b: 'Chưa đủ like',
    0x20c: 'Khách giận mất rồi',
    0x20d: 'Đồ cháy mất rồi',
    0x213: 'Lên Lv.{0}',
    0x214: 'Đã lên Lv.{0}',
    0x21d: 'Xem QC để chơi tiếp',
    0x21e: 'Dùng item để chơi tiếp',
    0x227: 'Tạm dừng',
    0x228: 'Nhạc',
    0x229: 'Âm thanh',
    0x22a: 'Về trang chủ',
    0x22b: 'Tiếp tục',
    0x231: 'Thoát luôn?',
    0x232: 'Sẽ mất 1 NL',
    0x233: 'Thoát',
    0x234: 'Tiếp tục',
    0x23b: 'Nhận luôn',
    0x23c: 'Vàng x2',
    0x23d: 'KC x2',
    0x23e: 'Tip',
    0x258: 'THUA',
    0x259: 'Màn {0}',
    0x25a: 'Item',
    0x25b: 'Chơi',
    0x25c: 'Thử lại',
    0x25d: 'Khó'
  };

  function forceVietnameseLocale() {
    try {
      // Module L10n / txtLocale gắn trên require cache — tìm qua window hooks
      if (typeof global.txtLocale === 'function') {
        global.txtLocale('_VI');
      }
    } catch (e) {
      /* ignore */
    }

    // Patch Id2String body + LCTag qua cc.js class scan / module exports
    try {
      if (!global.cc || !cc._RF) return;
    } catch (e2) {
      return;
    }

    // Override sau khi project load: poll module trên webpack-like bundle
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      var ok = false;
      try {
        // project exposes via window patterns — tìm object có Id2StringData
        var mods = global.__gvFindModules && global.__gvFindModules();
        if (!mods) {
          // fallback: walk known global MD / SData
        }
        if (typeof global.txtLocale === 'function') {
          global.txtLocale('_VI');
          ok = true;
        }
        // Direct patch if Id2StringData leaked
        if (global.Id2StringData && global.Id2StringData.body) {
          applyViOverrides(global.Id2StringData.body);
          ok = true;
        }
      } catch (e3) {
        /* ignore */
      }
      if (ok || tries > 80) {
        clearInterval(timer);
        if (ok) {
          state.i18nDone = true;
          logInfo('locale forced _VI');
        }
      }
    }, 250);
  }

  function applyViOverrides(body) {
    if (!body) return;
    Object.keys(VI_OVERRIDE).forEach(function (k) {
      var id = Number(k);
      var row = body[id] || body[k];
      if (!row || !row.length) {
        body[id] = [id, VI_OVERRIDE[k], VI_OVERRIDE[k], '0', '0', '0', VI_OVERRIDE[k], '0'];
        return;
      }
      // columns: ID, String, EN, ID, HI, PT, VI(6), TH
      row[6] = VI_OVERRIDE[k];
      // nếu đang EN-only (CN=0) cũng vá EN để fallback
      if (row[1] === '0' || row[1] === 0) row[2] = VI_OVERRIDE[k];
    });
  }

  /**
   * Patch sâu hơn: monkey-patch sau khi cc.game chạy — hook txt() nếu có trên window.
   * Bundle dùng module private; dùng cc.js.getClassByName không lấy được bảng string.
   * Cách ổn: wrap Function prototype không — thay bằng patch source sau load project bằng
   * tìm chuỗi trong define modules.
   */
  function hookProjectI18n() {
    // Sau project.3b653.js: các module đăng ký vào cc._RF nhưng không public.
    // Ta patch bằng cách thay thế LCTag khi phát hiện gamesetting / platform.
    var tries = 0;
    var t = setInterval(function () {
      tries++;
      try {
        // Cocos Creator 2.x: require từ bundle không lộ. Dùng eval nhẹ trên webpack jsonp nếu có.
        if (global.window && global.cc) {
          // Tìm trong cc.game._persistRootNodes không giúp.
          // Patch: ghi đè mọi Label đang hiện EN bằng cách set LCTag qua known export.
          var found = false;
          // Một số build gắn SData / MD lên window
          if (global.MD && global.MD.txtLocale) {
            global.MD.txtLocale('_VI');
            found = true;
          }
          if (typeof global.txtLocale === 'function') {
            global.txtLocale('_VI');
            found = true;
          }
          // Tìm module Id2String trong cc._RF history — không ổn định.
          // Patch trực tiếp file đã minify: inject qua redefine của hàm txt nếu lộ.
          if (global.__require) {
            try {
              var mod = global.__require('Id2String');
              if (mod && mod.Id2StringData) {
                applyViOverrides(mod.Id2StringData.body);
                found = true;
              }
            } catch (e) {
              /* ignore */
            }
          }
          if (found) {
            state.i18nDone = true;
            logInfo('i18n VI applied');
            clearInterval(t);
            return;
          }
        }
      } catch (e2) {
        /* ignore */
      }
      if (tries > 120) clearInterval(t);
    }, 200);
  }

  /* Patch project bundle strings in-memory after script eval:
   * We redefine by scanning cc._RFpush modules — unreliable.
   * Better approach used below: after project loads, find Id2String via string match on Function.toString of loaded modules.
   * Practical approach for this game: force FB Instant path off + set LCTag via patched platform boot.
   */

  function patchI18nAfterProject() {
    // Intercept when project sets LCTag to _EN_US
    var desc;
    try {
      // Create a global setter trap used by our small preload in index
      Object.defineProperty(global, '__gvLCTag', {
        configurable: true,
        set: function (v) {
          /* ignore external */
        },
        get: function () {
          return '_VI';
        }
      });
    } catch (e) {
      /* ignore */
    }

    // Thời điểm project đã có: poll cc.director scene labels — không cần.
    // Patch Id2String bằng cách chạy lại đoạn body nếu ta expose qua eval trong index sau project.
    // Cách chắc: dùng Mutation of Function — skip.

    // Thực tế: game có cột String_VI sẵn. Chỉ cần gọi txtLocale('_VI') đúng lúc.
    // Bundle: tìm hàm txtLocale trong project bằng cách wrap cc.game.onStart.
    if (global.cc && cc.game) {
      var orig = cc.game._prepare || null;
      cc.game.once('game_inited', function () {
        tryForceViFromRuntime();
      });
    }
    setTimeout(tryForceViFromRuntime, 1500);
    setTimeout(tryForceViFromRuntime, 4000);
  }

  function tryForceViFromRuntime() {
    try {
      // Duyệt cc.js._registeredClassNames không có Id2String.
      // Tìm trên mọi property của window có LCTag
      var keys = Object.keys(global);
      var i;
      for (i = 0; i < keys.length; i++) {
        var obj = global[keys[i]];
        if (!obj || typeof obj !== 'object') continue;
        if (typeof obj.txtLocale === 'function') {
          obj.txtLocale('_VI');
          if (obj.Id2StringData) applyViOverrides(obj.Id2StringData.body);
          state.i18nDone = true;
          logInfo('VI via global.' + keys[i]);
          return true;
        }
        if (obj.LCTag !== undefined && typeof obj.txt === 'function') {
          obj.LCTag = '_VI';
          state.i18nDone = true;
          logInfo('VI via LCTag on ' + keys[i]);
          return true;
        }
      }
    } catch (e) {
      /* ignore */
    }
    return false;
  }

  /* ============================ Settings delete UI ============================ */

  function ensureDeleteStyles() {
    if (global.document.getElementById('gv-dreamchefs-style')) return;
    var style = global.document.createElement('style');
    style.id = 'gv-dreamchefs-style';
    style.textContent =
      '#gv-btn-delete{position:fixed;z-index:99990;width:120px;height:120px;padding:0;border:0;background:transparent;cursor:pointer;' +
      'opacity:0.85;transform:scale(1);transition:opacity .15s,transform .15s;display:none;touch-action:manipulation;}' +
      '#gv-btn-delete:hover,#gv-btn-delete:active{opacity:1;transform:scale(1.05);}' +
      '#gv-btn-delete img{width:100%;height:100%;display:block;pointer-events:none;}' +
      '#gv-delete-modal{position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.55);display:none;align-items:center;justify-content:center;}' +
      '#gv-delete-modal .gv-box{background:#1a1a1a;color:#fff;border-radius:12px;padding:20px 22px;max-width:320px;width:86%;font-family:system-ui,sans-serif;text-align:center;}' +
      '#gv-delete-modal p{margin:0 0 16px;font-size:15px;line-height:1.4;}' +
      '#gv-delete-modal .gv-actions{display:flex;gap:10px;justify-content:center;}' +
      '#gv-delete-modal button{flex:1;padding:10px 12px;border:0;border-radius:8px;font-size:14px;cursor:pointer;}' +
      '#gv-delete-modal .gv-cancel{background:#444;color:#fff;}' +
      '#gv-delete-modal .gv-ok{background:#c0392b;color:#fff;}';
    global.document.head.appendChild(style);
  }

  var deleteUiScheduled = false;

  function scheduleEnsureDeleteUi() {
    if (deleteUiScheduled) return;
    if (global.document && global.document.body) {
      ensureDeleteUi();
      return;
    }
    deleteUiScheduled = true;
    if (global.document && global.document.addEventListener) {
      global.document.addEventListener('DOMContentLoaded', function onReady() {
        global.document.removeEventListener('DOMContentLoaded', onReady);
        deleteUiScheduled = false;
        ensureDeleteUi();
      });
    }
  }

  function ensureDeleteUi() {
    if (!global.document || !global.document.body) {
      scheduleEnsureDeleteUi();
      return;
    }
    ensureDeleteStyles();
    if (!global.document.getElementById('gv-btn-delete')) {
      var btn = global.document.createElement('button');
      btn.type = 'button';
      btn.id = 'gv-btn-delete';
      btn.title = 'Xóa dữ liệu';
      btn.setAttribute('aria-label', 'Xóa dữ liệu');
      btn.innerHTML = '<img src="xoa-data-gv.png" alt="Xóa dữ liệu" width="120" height="120">';
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        showDeleteModal(true);
      });
      global.document.body.appendChild(btn);
    }
    if (!global.document.getElementById('gv-delete-modal')) {
      var modal = global.document.createElement('div');
      modal.id = 'gv-delete-modal';
      modal.innerHTML =
        '<div class="gv-box">' +
        '<p>Xóa hết tiến trình?<br>Không hoàn tác được.</p>' +
        '<div class="gv-actions">' +
        '<button type="button" class="gv-cancel" id="gv-del-cancel">Huỷ</button>' +
        '<button type="button" class="gv-ok" id="gv-del-ok">Xóa</button>' +
        '</div></div>';
      global.document.body.appendChild(modal);
      modal.querySelector('#gv-del-cancel').addEventListener('click', function () {
        showDeleteModal(false);
      });
      modal.querySelector('#gv-del-ok').addEventListener('click', function () {
        showDeleteModal(false);
        deleteAll();
      });
    }
  }

  function showDeleteModal(on) {
    var m = global.document.getElementById('gv-delete-modal');
    if (!m) return;
    m.style.display = on ? 'flex' : 'none';
  }

  function setDeleteBtnVisible(on) {
    ensureDeleteUi();
    var btn = global.document.getElementById('gv-btn-delete');
    if (!btn) return;
    state.settingsOpen = !!on;
    if (!on) {
      btn.style.display = 'none';
      return;
    }
    // Cùng hàng Âm thanh/Nhạc, khe kem phải — không chạm pill / không sát mép phải
    var canvas = global.document.getElementById('GameCanvas');
    var rect =
      canvas && canvas.getBoundingClientRect
        ? canvas.getBoundingClientRect()
        : { left: 0, top: 0, width: global.innerWidth || 800, height: global.innerHeight || 450 };
    var ox = rect.left;
    var oy = rect.top;
    var cw = rect.width || 800;
    var ch = rect.height || 450;
    var size = Math.max(56, Math.min(70, Math.floor(ch * 0.11)));
    btn.style.width = size + 'px';
    btn.style.height = size + 'px';
    btn.style.display = 'block';
    btn.style.left = Math.floor(ox + cw * 0.5 + Math.min(cw, ch * 1.6) * 0.175 - size * 0.5) + 'px';
    btn.style.top = Math.floor(oy + ch * 0.50 - size * 0.5) + 'px';
  }

  function wrapSettingsMethods(proto) {
    if (!proto || proto.__gvSettingsWrapped) return false;
    if (typeof proto.OnClickSetting !== 'function') return false;
    var origOpen = proto.OnClickSetting;
    var origClose = proto.OnClickCloseSetting;
    proto.OnClickSetting = function () {
      var r = origOpen.apply(this, arguments);
      setDeleteBtnVisible(true);
      return r;
    };
    if (typeof origClose === 'function') {
      proto.OnClickCloseSetting = function () {
        setDeleteBtnVisible(false);
        return origClose.apply(this, arguments);
      };
    }
    proto.__gvSettingsWrapped = true;
    return true;
  }

  function hookSettings() {
    if (state.hooksReady) return;
    var tries = 0;
    var t = setInterval(function () {
      tries++;
      var wrapped = 0;
      try {
        if (global.cc && cc.js && typeof cc.js.getClassesByName === 'function') {
          /* rare */
        }
        if (global.cc && cc.director) {
          var scene = cc.director.getScene();
          if (scene && scene.getComponentsInChildren) {
            var comps = scene.getComponentsInChildren(cc.Component);
            var i;
            for (i = 0; i < comps.length; i++) {
              var c = comps[i];
              if (c && c.constructor && c.constructor.prototype) {
                if (wrapSettingsMethods(c.constructor.prototype)) wrapped++;
              }
              // sync visibility if SettingNode already active
              if (c && c.SettingNode && c.SettingNode.active) setDeleteBtnVisible(true);
            }
          }
        }
      } catch (e) {
        /* ignore */
      }
      if (wrapped > 0) {
        state.hooksReady = true;
        logInfo('SettingNode hooked', wrapped);
        clearInterval(t);
      }
      if (tries > 150) clearInterval(t);
    }, 300);

    // Fallback: poll SettingNode.active
    setInterval(function () {
      try {
        if (!global.cc || !cc.director) return;
        var scene = cc.director.getScene();
        if (!scene) return;
        var comps = scene.getComponentsInChildren(cc.Component);
        var open = false;
        var i;
        for (i = 0; i < comps.length; i++) {
          var c = comps[i];
          if (c && c.SettingNode && c.SettingNode.active) {
            open = true;
            break;
          }
        }
        if (open !== state.settingsOpen) setDeleteBtnVisible(open);
      } catch (e2) {
        /* ignore */
      }
    }, 500);
  }

  /* ============================ FEATURE ON: điểm career (composite) ============================ */

  function lsGetEither(logicalKey) {
    var v = lsGet(storageKey(logicalKey));
    if (v == null || v === '') v = lsGet(logicalKey);
    return v == null ? '' : String(v);
  }

  function sumMaxLevels() {
    var sum = 0;
    var i;
    for (i = 1; i <= 5; i++) {
      sum += parseInt(lsGetEither('Level' + i), 10) || 0;
    }
    return sum;
  }

  function sumChapterStars() {
    var sum = 0;
    var i;
    for (i = 1; i <= 5; i++) {
      try {
        var raw = lsGetEither('Chapter' + i);
        if (!raw) continue;
        var doc = JSON.parse(raw);
        var zj = doc && doc['zj' + i];
        var stars = zj && zj.star;
        if (!stars || !stars.length) continue;
        var j;
        for (j = 0; j < stars.length; j++) sum += Number(stars[j]) || 0;
      } catch (e) {
        /* ignore bad JSON */
      }
    }
    return sum;
  }

  function countHousingUnlocks() {
    var n = 0;
    try {
      var raw = lsGetEither('AllHousingInfo');
      if (!raw) return 0;
      var parsed = JSON.parse(raw);
      var info = (parsed && parsed.info) || parsed;
      if (!info || typeof info !== 'object') return 0;
      var hid;
      for (hid in info) {
        if (!Object.prototype.hasOwnProperty.call(info, hid)) continue;
        var h = info[hid];
        if (!h || !h.isUnlock || !h.isUnlock.length) continue;
        var i;
        for (i = 0; i < h.isUnlock.length; i++) {
          if (h.isUnlock[i]) n++;
        }
      }
    } catch (e) {
      /* ignore */
    }
    return n;
  }

  function sumWareLevels() {
    var sum = 0;
    var i;
    for (i = 1; i <= 5; i++) {
      try {
        var raw = lsGetEither('SumWareInfo' + i);
        if (!raw) continue;
        var obj = JSON.parse(raw);
        if (!obj || typeof obj !== 'object') continue;
        var id;
        for (id in obj) {
          if (!Object.prototype.hasOwnProperty.call(obj, id)) continue;
          var arr = obj[id];
          if (Array.isArray(arr) && arr.length > 1) sum += Number(arr[1]) || 0;
          else if (typeof arr === 'number') sum += arr;
        }
      } catch (e) {
        /* ignore */
      }
    }
    return sum;
  }

  function getEarnedGold() {
    return parseInt(lsGetEither(EARNED_GOLD_KEY), 10) || 0;
  }

  function addEarnedGold(coinSun) {
    var add = Math.max(0, Math.floor(Number(coinSun) || 0));
    var next = getEarnedGold() + add;
    lsSet(storageKey(EARNED_GOLD_KEY), String(next));
    lsSet(EARNED_GOLD_KEY, String(next));
    scheduleSave(EARNED_GOLD_KEY);
    return next;
  }

  /**
   * Điểm BXH = tiến độ career + tổng vàng kiếm các bàn thắng.
   * Level×1000 + sao×100 + nội thất×50 + cấp thiết bị×20 + gvEarnedGold
   */
  function computeCareerScore(earnedGold) {
    var levels = sumMaxLevels();
    var stars = sumChapterStars();
    var housing = countHousingUnlocks();
    var ware = sumWareLevels();
    var gold = Math.max(0, Math.floor(Number(earnedGold) || 0));
    return (
      levels * SCORE_W_LEVEL +
      stars * SCORE_W_STAR +
      housing * SCORE_W_HOUSING +
      ware * SCORE_W_WARE +
      gold
    );
  }

  function maybeUpdateLocalScores(score) {
    try {
      var cur = parseInt(lsGet(storageKey('scores')) || lsGet('scores') || '0', 10) || 0;
      if (score > cur) {
        lsSet(storageKey('scores'), String(score));
        lsSet('scores', String(score));
        scheduleSave('scores');
      }
    } catch (e) {
      /* ignore */
    }
  }

  function submitHighScore(coinSun) {
    var earned = addEarnedGold(coinSun);
    var parts = {
      levels: sumMaxLevels(),
      stars: sumChapterStars(),
      housing: countHousingUnlocks(),
      ware: sumWareLevels(),
      earnedGold: earned,
      coinSun: Math.max(0, Math.floor(Number(coinSun) || 0))
    };
    var score = computeCareerScore(earned);
    if (state.scorePopupOpen) return score;

    var cred = getCredentials();
    if (typeof global.GV !== 'function') {
      logWarn('GV unavailable — bỏ qua popup điểm');
      maybeUpdateLocalScores(score);
      return score;
    }
    if (!cred.gid) {
      logWarn('thiếu gid — bỏ qua popup điểm');
      maybeUpdateLocalScores(score);
      return score;
    }

    state.scorePopupOpen = true;
    maybeUpdateLocalScores(score);

    var finished = false;
    function done() {
      if (finished) return;
      finished = true;
      state.scorePopupOpen = false;
      resumeGame();
      logInfo('score popup closed', { score: score });
    }

    pauseGame();
    logInfo('submitHighScore career', { score: score, parts: parts });

    try {
      new global.GV().saveScore(score, done);
      setTimeout(function () {
        if (!global.document.getElementById('gv_savescore')) done();
      }, 150);
    } catch (e) {
      try {
        new global.GV().saveScore(score);
        setTimeout(done, 300);
      } catch (e2) {
        logWarn('saveScore failed', e2);
        done();
      }
    }
    return score;
  }

  function wrapOpenPass(proto) {
    if (!proto || typeof proto.OpenPass !== 'function' || proto.__gvScoreHooked) return false;
    var orig = proto.OpenPass;
    proto.OpenPass = function () {
      var self = this;
      var r = orig.apply(this, arguments);
      var score = self.CoinSun;
      var done = false;
      var fallbackTimer = 0;

      function fire() {
        if (done) return;
        done = true;
        if (fallbackTimer) {
          clearTimeout(fallbackTimer);
          fallbackTimer = 0;
        }
        try {
          submitHighScore(score);
        } catch (e) {
          logWarn('submitHighScore error', e);
        }
      }

      // Chờ PassAnim hiện hết thẻ thưởng / vàng rồi mới popup điểm
      try {
        var anim = self.PassAnim;
        if (anim && typeof anim.on === 'function') {
          var onFinished = function () {
            try {
              if (typeof anim.off === 'function') anim.off('finished', onFinished);
            } catch (eOff) {
              /* ignore */
            }
            fire();
          };
          anim.on('finished', onFinished);
        }
      } catch (eAnim) {
        logWarn('PassAnim hook failed', eAnim);
      }

      fallbackTimer = setTimeout(fire, 2800);
      return r;
    };
    proto.__gvScoreHooked = true;
    return true;
  }

  function hookPassScorePopup() {
    if (state.passScoreHooked) return;
    var tries = 0;
    var t = setInterval(function () {
      tries++;
      var ok = false;
      try {
        if (global.cc && cc.js && typeof cc.js.getClassByName === 'function') {
          var Cls = cc.js.getClassByName('WndFighting');
          if (Cls && Cls.prototype) ok = wrapOpenPass(Cls.prototype);
        }
      } catch (e) {
        /* ignore */
      }
      if (!ok) {
        try {
          var scene = global.cc && cc.director && cc.director.getScene && cc.director.getScene();
          if (scene) {
            var comps = scene.getComponentsInChildren
              ? scene.getComponentsInChildren('WndFighting')
              : [];
            var i;
            for (i = 0; i < comps.length; i++) {
              if (wrapOpenPass(Object.getPrototypeOf(comps[i]))) {
                ok = true;
                break;
              }
            }
          }
        } catch (e2) {
          /* ignore */
        }
      }
      if (ok) {
        state.passScoreHooked = true;
        clearInterval(t);
        logInfo('OpenPass hooked for GV saveScore (after PassAnim)');
      } else if (tries > 60) {
        clearInterval(t);
        logWarn('OpenPass hook timeout');
      }
    }, 500);
  }

  /* ============================ i18n: patch project source LCTag ============================ */

  /**
   * Sau khi project.3b653.js load, bundle đăng ký modules.
   * Ta vá bằng cách chạy script tìm `LCTag` export — và set `_VI`.
   * Đồng thời vá String_VI trong Id2String nếu tìm được qua webpack jsonp.
   */
  function installProjectLoadHook() {
    // index sẽ gọi ArcadeTool.onProjectLoaded() sau khi project script load
  }

  function onProjectLoaded() {
    installAdsShim();
    hookSettings();
    ensureDeleteUi();
    hookPassScorePopup();
    patchI18nAfterProject();
    hookProjectI18n();
    forceVietnameseLocale();

    // Patch mạnh: tìm trong cc._RF hoặc module map của Cocos
    setTimeout(function () {
      tryPatchId2StringFromEngine();
    }, 800);
  }

  function tryPatchId2StringFromEngine() {
    try {
      // Cocos Creator 2 browser: modules in window._CCSettings already consumed.
      // Search script elements — không còn.
      // Dùng cc.assetManager không có string table.
      //
      // Cách khác: monkey-patch Label.string khi set nếu khớp EN dictionary — quá nặng.
      //
      // Vá trực tiếp: redefine known tip functions trên window.gamesetting sibling.
      if (global.gamesetting) {
        // no locale here
      }

      // Inject vào prototype chain của mọi component có method dùng txt — skip.

      // FINAL reliable approach for this obfuscated build:
      // Patch the string table in the already-evaluated module by scanning
      // Function constructors in require.modules if present (webpack).
      var wp = global.webpackJsonp || global.webpackChunk || null;
      if (!wp && global.cc) {
        // Some builds attach to window.__require
      }

      // Direct string replacement approach: override locale tag property on a
      // commonly used module by intercepting Tips / txt calls if exposed.
      if (typeof global.txt === 'function') {
        var origTxt = global.txt;
        global.txt = function (id) {
          if (VI_OVERRIDE[id] != null) {
            return formatVi(VI_OVERRIDE[id], [].slice.call(arguments, 1));
          }
          return origTxt.apply(this, arguments);
        };
        state.i18nDone = true;
        logInfo('wrapped global.txt');
      }
    } catch (e) {
      logWarn('tryPatchId2String', e);
    }
  }

  /**
   * Patch project file in-page: sau load, eval hook thay LCTag default.
   * index gọi này với reference tới module finder.
   */
  function applyViByPatchingLoadedScript() {
    // Scan all functions on cc for 'LCTag'
    try {
      if (!global.cc) return;
      var stack = [global.cc];
      var seen = typeof WeakSet !== 'undefined' ? new WeakSet() : null;
      var guard = 0;
      while (stack.length && guard++ < 5000) {
        var cur = stack.pop();
        if (!cur || typeof cur !== 'object') continue;
        if (seen) {
          if (seen.has(cur)) continue;
          seen.add(cur);
        }
        if (Object.prototype.hasOwnProperty.call(cur, 'LCTag') && typeof cur.txt === 'function') {
          cur.LCTag = '_VI';
          if (typeof cur.txtLocale === 'function') cur.txtLocale('_VI');
          if (!cur.__gvTxtWrapped) {
            var origCurTxt = cur.txt;
            cur.txt = function (id) {
              if (VI_OVERRIDE[id] != null) {
                return formatVi(VI_OVERRIDE[id], [].slice.call(arguments, 1));
              }
              return origCurTxt.apply(this, arguments);
            };
            cur.__gvTxtWrapped = true;
          }
          state.i18nDone = true;
          logInfo('found LCTag module — set _VI');
          // also try to find Id2StringData nearby
          if (cur.Id2StringData && cur.Id2StringData.body) applyViOverrides(cur.Id2StringData.body);
          return true;
        }
        var ks = Object.keys(cur);
        var i;
        for (i = 0; i < ks.length && i < 40; i++) {
          try {
            var v = cur[ks[i]];
            if (v && typeof v === 'object') stack.push(v);
          } catch (e) {
            /* ignore */
          }
        }
      }
    } catch (e2) {
      /* ignore */
    }
    return false;
  }

  /* ============================ public API ============================ */

  function init() {
    logInfo('init ' + MODULE_VERSION);
    installAdsShim();
    hookLocalStorage();
    scheduleEnsureDeleteUi();
    return bootLoad();
  }

  global.ArcadeTool = {
    ready: ready,
    init: init,
    onProjectLoaded: onProjectLoaded,
    saveProgressNow: saveProgressNow,
    deleteAll: deleteAll,
    getCredentials: getCredentials,
    buildMetadata: buildMetadata,
    applyViByPatchingLoadedScript: applyViByPatchingLoadedScript,
    setDeleteBtnVisible: setDeleteBtnVisible,
    submitHighScore: submitHighScore
  };

  // Auto-init immediately (index awaits ready before Cocos boot)
  init();

  /* ============================ FEATURE OFF: logo / nút BXH riêng ============================
  function ensureScoreButton() {
    // copy from other games: save-score.png / gv-gui-diem.png
  }
  ================================================================================ */
})(typeof window !== 'undefined' ? window : this);
