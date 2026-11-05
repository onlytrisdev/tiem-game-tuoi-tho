/**
 * Arcade cloud save — đồng bộ game_userdata qua SaveHistoryGame / GetHistoryGame.
 * Chỉ hoạt động khi URL có ?gid=...&token=...
 * Không sửa bundle gameplay.
 *
 * Fix initPlants hang: không gọi getUserDataJson/getPlantsPK quá sớm (grids rỗng
 * sẽ wipe plantsPK → TypeError pk.type → treo loading).
 */
(function (global) {
  'use strict';

  var API_SAVE = 'https://localhost/account/SaveHistoryGame';
  var API_GET = 'https://localhost/account/GetHistoryGame';
  var USER_DATA_KEY = 'game_userdata';

  var FIELD_LEVEL = 'level';
  var FIELD_CHAPTER = 'chapterId';
  var FIELD_CHAPTER_CUR = 'curChapterId';
  var FIELD_MONEY = 'money';
  var FIELD_PLANTS_PK = 'plantsPK';

  /** Chapter 1 có FortSize(~8) + compound(14) ≈ 22; tối thiểu an toàn để initPlants. */
  var MIN_PLANTS_PK_LENGTH = 8;

  var qs = new URLSearchParams(global.location.search);
  var gameId = qs.get('gid');
  var token = qs.get('token');
  var debug = qs.get('gv_debug') === '1';
  var enabled = !!(gameId && token);

  var readyResolve;
  var ready = new Promise(function (resolve) {
    readyResolve = resolve;
  });

  var initDone = false;
  var localStorageHooked = false;
  var getPlantsPkPatched = false;
  var uploadTimer = null;
  var lastTrackedLevel = null;
  var lastTrackedChapter = null;
  var pendingUpload = false;
  var uploadDeferCount = 0;
  var MAX_UPLOAD_DEFER = 15;

  function log() {
    if (!debug || !global.console) return;
    try {
      console.log.apply(console, ['[ArcadeCloudSave]'].concat([].slice.call(arguments)));
    } catch (e) { /* ignore */ }
  }

  function parseJsonSafe(text) {
    if (!text) return null;
    try {
      return JSON.parse(text);
    } catch (e) {
      return null;
    }
  }

  function getUserDataFromStorage() {
    if (!global.localStorage) return null;
    return parseJsonSafe(global.localStorage.getItem(USER_DATA_KEY));
  }

  function normalizeGameSave(gameSave) {
    if (!gameSave) return null;
    if (typeof gameSave === 'string') return parseJsonSafe(gameSave);
    return gameSave;
  }

  /**
   * plantsPK phải đủ slot; mảng rỗng/thiếu → initPlants đọc pk.type sẽ crash.
   */
  function isValidPlantGrid(gameSave) {
    var gs = normalizeGameSave(gameSave);
    if (!gs) return false;
    var pk = gs[FIELD_PLANTS_PK];
    if (!Array.isArray(pk) || pk.length < MIN_PLANTS_PK_LENGTH) return false;
    for (var i = 0; i < pk.length; i++) {
      if (!pk[i] || typeof pk[i].type === 'undefined') return false;
    }
    return true;
  }

  function arePlantGridsReady() {
    try {
      var grids = global.cc &&
        global.cc.Mgr &&
        global.cc.Mgr.plantMgr &&
        global.cc.Mgr.plantMgr.grids;
      return !!(grids && grids.length > 0);
    } catch (e) {
      return false;
    }
  }

  /**
   * Chỉ lấy runtime JSON khi plant grids đã sẵn sàng.
   * getUserDataJson → getPlantsPK() luôn `plantsPK = []` rồi rebuild từ grids;
   * gọi sớm khi grids rỗng sẽ xóa plantsPK trong RAM.
   */
  function getRuntimeUserDataJsonSafe() {
    if (!arePlantGridsReady()) return null;
    try {
      if (!global.cc || !global.cc.Mgr || !global.cc.Mgr.UserDataMgr) return null;
      var mgr = global.cc.Mgr.UserDataMgr;
      if (typeof mgr.getUserDataJson !== 'function') return null;
      var data = mgr.getUserDataJson();
      if (!isValidPlantGrid(data)) return null;
      return data;
    } catch (e) {
      log('getRuntimeUserDataJsonSafe error', e && e.message);
      return null;
    }
  }

  /**
   * Ưu tiên payload vừa ghi / storage — tránh gọi getUserDataJson lúc boot.
   */
  function getBestGameSave(fallback) {
    var fromFallback = normalizeGameSave(fallback);
    if (fromFallback && isValidPlantGrid(fromFallback)) return fromFallback;

    var fromStorage = getUserDataFromStorage();
    if (fromStorage && isValidPlantGrid(fromStorage)) return fromStorage;

    var fromRuntime = getRuntimeUserDataJsonSafe();
    if (fromRuntime) return fromRuntime;

    // Fallback cuối: chấp nhận object có field khác dù plantsPK xấu (không dùng để apply).
    return fromFallback || fromStorage || null;
  }

  function buildSummary(gameSave) {
    var gs = gameSave || {};
    return {
      CurrentLevel: Number(gs[FIELD_LEVEL]) || 0,
      CurrentStage: Number(gs[FIELD_CHAPTER]) || Number(gs[FIELD_CHAPTER_CUR]) || 0,
      TotalScore: Number(gs[FIELD_MONEY]) || 0,
      savedAt: new Date().toISOString()
    };
  }

  function buildMetadata(gameSave) {
    var gs = getBestGameSave(gameSave);
    if (!gs) return null;
    if (!isValidPlantGrid(gs)) {
      log('skip upload — invalid plantsPK', gs[FIELD_PLANTS_PK] && gs[FIELD_PLANTS_PK].length);
      return null;
    }
    var meta = buildSummary(gs);
    meta.gameSave = gs;
    return meta;
  }

  function parseCloudMeta(res) {
    if (!res || res.Status !== 1 || !res.Data) return null;
    var raw = res.Data.MetaData || res.Data.metaData || res.Data.metadata;
    if (!raw) return null;
    if (typeof raw === 'string') return parseJsonSafe(raw);
    return raw;
  }

  function shouldPreferCloud(cloudMeta, localData) {
    if (!cloudMeta) return false;
    if (cloudMeta.cleared) return true;
    if (!cloudMeta.gameSave) return false;
    if (!localData) return true;

    var cloudSave = normalizeGameSave(cloudMeta.gameSave);
    if (!cloudSave) return false;

    var localLevel = Number(localData[FIELD_LEVEL]) || 0;
    var cloudLevel = Number(cloudSave[FIELD_LEVEL]) || 0;
    if (cloudLevel > localLevel) return true;
    if (cloudLevel < localLevel) return false;

    var localChapter = Number(localData[FIELD_CHAPTER]) || Number(localData[FIELD_CHAPTER_CUR]) || 0;
    var cloudChapter = Number(cloudSave[FIELD_CHAPTER]) || Number(cloudSave[FIELD_CHAPTER_CUR]) || 0;
    if (cloudChapter > localChapter) return true;

    var localTime = Number(localData.lastPlayTime) || 0;
    var cloudTime = 0;
    if (cloudMeta.savedAt) {
      cloudTime = Math.floor(new Date(cloudMeta.savedAt).getTime() / 1000);
    } else if (cloudSave.lastPlayTime) {
      cloudTime = Number(cloudSave.lastPlayTime) || 0;
    }
    return cloudTime >= localTime;
  }

  function applyCloudMeta(meta) {
    if (!meta || !global.localStorage) return false;

    if (meta.cleared) {
      global.localStorage.removeItem(USER_DATA_KEY);
      log('apply cleared cloud state');
      return true;
    }

    if (!meta.gameSave) return false;

    var cloudSave = normalizeGameSave(meta.gameSave);
    if (!cloudSave) return false;

    if (!isValidPlantGrid(cloudSave)) {
      log('reject cloud save — invalid/empty plantsPK (would crash initPlants)');
      return false;
    }

    var cloudStr = JSON.stringify(cloudSave);
    var localData = getUserDataFromStorage();

    if (shouldPreferCloud(meta, localData)) {
      global.localStorage.setItem(USER_DATA_KEY, cloudStr);
      log('restored cloud save', buildSummary(cloudSave));
      return true;
    }

    log('kept local save over cloud');
    return false;
  }

  function fetchCloudMeta() {
    return fetch(API_GET, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: new URLSearchParams({
        gameId: gameId,
        token: token
      })
    }).then(function (r) {
      return r.json();
    });
  }

  function saveMetadata(meta) {
    if (!enabled || !meta) return Promise.resolve(null);
    return fetch(API_SAVE, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: new URLSearchParams({
        gameId: gameId,
        token: token,
        metadata: JSON.stringify(meta)
      })
    }).then(function (r) {
      return r.json();
    }).then(function (res) {
      log('save response', res);
      return res;
    }).catch(function (err) {
      log('save error', err);
      throw err;
    });
  }

  function saveProgress(gameSave) {
    var meta = buildMetadata(gameSave);
    if (!meta) return Promise.resolve(null);
    return saveMetadata(meta);
  }

  function saveDefaultProgress() {
    if (!enabled) return Promise.resolve(null);
    var meta = {
      CurrentLevel: 1,
      CurrentStage: 1,
      TotalScore: 0,
      savedAt: new Date().toISOString(),
      cleared: true
    };
    return saveMetadata(meta);
  }

  function initTrackingFromStorage() {
    var data = getUserDataFromStorage();
    if (!data) {
      lastTrackedLevel = 0;
      lastTrackedChapter = 0;
      return;
    }
    lastTrackedLevel = Number(data[FIELD_LEVEL]) || 0;
    lastTrackedChapter = Number(data[FIELD_CHAPTER]) || Number(data[FIELD_CHAPTER_CUR]) || 0;
  }

  /**
   * Default fresh write (level 1, chapter 1) không coi là "progress" cần upload ngay —
   * tránh race với initPlants. Chỉ upload khi level/chapter tăng thật.
   */
  function isFreshDefaultWrite(data) {
    var level = Number(data[FIELD_LEVEL]) || 0;
    var chapter = Number(data[FIELD_CHAPTER]) || Number(data[FIELD_CHAPTER_CUR]) || 0;
    return level <= 1 && chapter <= 1;
  }

  function hasProgressed(data) {
    var level = Number(data[FIELD_LEVEL]) || 0;
    var chapter = Number(data[FIELD_CHAPTER]) || Number(data[FIELD_CHAPTER_CUR]) || 0;
    if (lastTrackedLevel === null || lastTrackedChapter === null) {
      lastTrackedLevel = level;
      lastTrackedChapter = chapter;
      return false;
    }
    if (level > lastTrackedLevel || chapter > lastTrackedChapter) {
      lastTrackedLevel = level;
      lastTrackedChapter = chapter;
      return true;
    }
    return false;
  }

  function scheduleUpload(parsed) {
    if (!enabled || !initDone) return;
    clearTimeout(uploadTimer);
    uploadTimer = global.setTimeout(function () {
      if (pendingUpload) return;

      // Ưu tiên bản mới nhất trên storage (đã có plantsPK đầy đủ từ setDefaultUserData).
      var payload = getUserDataFromStorage() || parsed;
      if (!isValidPlantGrid(payload)) {
        if (!arePlantGridsReady() && uploadDeferCount < MAX_UPLOAD_DEFER) {
          uploadDeferCount++;
          log('defer upload — plants not ready', uploadDeferCount);
          scheduleUpload(parsed);
          return;
        }
        log('skip upload — invalid plantsPK after defer');
        uploadDeferCount = 0;
        return;
      }

      uploadDeferCount = 0;
      pendingUpload = true;
      // Dùng payload storage/setItem; không gọi getUserDataJson lúc boot.
      saveProgress(payload).finally(function () {
        pendingUpload = false;
      });
    }, 1200);
  }

  function onUserDataWritten(jsonStr) {
    if (!enabled || !initDone) return;
    var data = parseJsonSafe(jsonStr);
    if (!data) return;

    // Ghi default lần đầu (level/chapter = 1) sau wipe/reset: không upload ngay.
    if (isFreshDefaultWrite(data) && lastTrackedLevel <= 1 && lastTrackedChapter <= 1) {
      lastTrackedLevel = Number(data[FIELD_LEVEL]) || 0;
      lastTrackedChapter = Number(data[FIELD_CHAPTER]) || Number(data[FIELD_CHAPTER_CUR]) || 0;
      log('skip upload for fresh default write');
      return;
    }

    if (hasProgressed(data)) {
      log('progress detected, uploading', buildSummary(data));
      scheduleUpload(data);
    }
  }

  function hookLocalStorage() {
    if (localStorageHooked || !global.localStorage) return;
    localStorageHooked = true;
    var originalSetItem = global.localStorage.setItem.bind(global.localStorage);
    global.localStorage.setItem = function (key, value) {
      originalSetItem(key, value);
      if (key === USER_DATA_KEY) {
        onUserDataWritten(value);
      }
    };
  }

  function maybeUploadLocalIfCloudEmpty(hadCloudSave) {
    if (!enabled || hadCloudSave) return;
    var local = getUserDataFromStorage();
    if (!local) return;
    var level = Number(local[FIELD_LEVEL]) || 0;
    var chapter = Number(local[FIELD_CHAPTER]) || Number(local[FIELD_CHAPTER_CUR]) || 0;
    if (level <= 1 && chapter <= 1) return;
    if (!isValidPlantGrid(local)) {
      log('skip first-login sync — local plantsPK invalid');
      return;
    }
    log('first login sync — upload existing local progress');
    scheduleUpload(local);
  }

  /**
   * Xóa local save hỏng (plantsPK rỗng) để game gọi setDefaultUserData thay vì crash.
   * Chạy cả khi không có gid/token.
   */
  function repairCorruptLocalSave() {
    if (!global.localStorage) return;
    var local = getUserDataFromStorage();
    if (!local) return;
    if (isValidPlantGrid(local)) return;
    global.localStorage.removeItem(USER_DATA_KEY);
    log('removed corrupt local save — invalid plantsPK');
  }

  /**
   * Monkey-patch getPlantsPK: khi grids chưa có thì giữ plantsPK hiện tại,
   * không reset thành []. Chạy khi cc.Mgr.game đã sẵn sàng.
   */
  function patchGetPlantsPk() {
    if (getPlantsPkPatched) return true;
    try {
      var game = global.cc && global.cc.Mgr && global.cc.Mgr.game;
      if (!game || typeof game.getPlantsPK !== 'function') return false;
      if (game.getPlantsPK.__gvPatched) {
        getPlantsPkPatched = true;
        return true;
      }

      var original = game.getPlantsPK.bind(game);
      game.getPlantsPK = function () {
        var grids = global.cc.Mgr.plantMgr && global.cc.Mgr.plantMgr.grids;
        if (!grids || grids.length === 0) {
          if (!Array.isArray(this.plantsPK)) this.plantsPK = [];
          log('getPlantsPK skipped wipe — grids empty, keep length', this.plantsPK.length);
          return this.plantsPK;
        }
        return original();
      };
      game.getPlantsPK.__gvPatched = true;
      getPlantsPkPatched = true;
      log('patched getPlantsPK');
      return true;
    } catch (e) {
      log('patchGetPlantsPk error', e && e.message);
      return false;
    }
  }

  function watchAndPatchGetPlantsPk() {
    if (patchGetPlantsPk()) return;
    var tries = 0;
    var timer = global.setInterval(function () {
      tries++;
      if (patchGetPlantsPk() || tries > 200) {
        global.clearInterval(timer);
      }
    }, 50);
  }

  function bootstrap() {
    hookLocalStorage();
    watchAndPatchGetPlantsPk();
    repairCorruptLocalSave();

    if (!enabled) {
      log('disabled — missing gid/token');
      initDone = true;
      readyResolve();
      return;
    }

    fetchCloudMeta()
      .then(function (res) {
        log('get response', res);
        var meta = parseCloudMeta(res);
        var applied = false;
        if (meta) {
          applied = !!applyCloudMeta(meta);
        }
        // Cloud có gameSave nhưng bị reject (plantsPK hỏng) → không coi là hadCloudSave hữu ích.
        var hadUsableCloudSave = !!(meta && (meta.cleared || applied ||
          (meta.gameSave && isValidPlantGrid(normalizeGameSave(meta.gameSave)))));
        repairCorruptLocalSave();
        initTrackingFromStorage();
        initDone = true;
        maybeUploadLocalIfCloudEmpty(hadUsableCloudSave);
        readyResolve();
      })
      .catch(function (err) {
        log('get error', err);
        repairCorruptLocalSave();
        initTrackingFromStorage();
        initDone = true;
        readyResolve();
      });
  }

  global.ArcadeCloudSave = {
    ready: ready,
    isEnabled: function () {
      return enabled;
    },
    buildMetadata: buildMetadata,
    saveProgress: saveProgress,
    saveDefaultProgress: saveDefaultProgress,
    loadFromCloud: fetchCloudMeta,
    isValidPlantGrid: isValidPlantGrid,
    USER_DATA_KEY: USER_DATA_KEY
  };

  bootstrap();
})(window);
