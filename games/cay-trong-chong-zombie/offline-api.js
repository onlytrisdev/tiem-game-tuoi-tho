/**
 * Offline API — thay backend tangyun.minigame.vip (chết).
 * Chỉ đủ để LOGIN + protocol cốt lõi; persist UserModel vào localStorage.
 * Game vẫn chạy khi chưa login Arcade (§16).
 */
(function (global) {
  'use strict';

  var SAVE_KEY = 'zwdjs_offline_save';
  var PROTO = {
    LOGIN: 10001,
    CASTLE_UP: 11001,
    HERO_UP: 11101,
    UNLOCK_ITEM: 11102,
    START_BATTLE: 11201,
    END_BATTLE: 11202,
    GET_RANDOM_REWARD: 11203,
    GET_SKY_REWARD: 11204,
    OUTLINE: 11205,
    PARTNER_INFO: 11300,
    PARTNER_BUY: 11301,
    PARTNER_SET_POS: 11302,
    PARTNER_LV_UP: 11303,
    AVTIVITY_TALENT: 11304,
    AWAKEN: 11305,
    SYN_ITEMS: 11400,
    USE_ITEM: 11401,
    SIGN: 11501,
    TURNTABLE: 11601,
    AD_REWARD: 11701,
    ANY_INFO: 11801,
    SYN_MONEY: 11802,
    GUIDE: 11901,
    SYN_USERINFO: 12001,
    LIMITBAG_PAGE: 11402,
    ADD_PROPS: 12901,
    USE_PROPS: 12902,
    GET_TOWER_INFO: 12500,
    S_UPDATE_INFO: 12002,
    S_SHOP_BUY: 12803,
    S_BIND_DRAW: 12802
  };

  // ProtocolEnums có thể khác số GET_TOWER_INFO — đọc động khi patch
  var patched = false;

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
      console.warn('[OfflineAPI] localStorage set failed', e);
      return false;
    }
  }

  function safeRemove(key) {
    try {
      global.localStorage.removeItem(key);
    } catch (e) {
      /* ignore */
    }
  }

  function clone(obj) {
    try {
      return JSON.parse(JSON.stringify(obj));
    } catch (e) {
      return null;
    }
  }

  function defaultPlayerId() {
    var id = safeGet('webplayerid');
    if (id) {
      return id;
    }
    id = Math.floor(1e4 * Math.random()) + '-' + Date.now();
    safeSet('webplayerid', id);
    return id;
  }

  function createDefaultSave() {
    var pid = defaultPlayerId();
    var now = Date.now();
    return {
      ret: 0,
      openId: pid,
      isNewUser: true,
      gameSessionKey: 'gv_offline_' + pid,
      systemTime: now,
      registerTime: now,
      battleData: [],
      data: {
        player_id: pid,
        player_name: 'Player',
        head_icon: '',
        stage: 1,
        gold: 500,
        diamond: 50,
        medal: 0,
        energy: 30,
        pill: 0,
        guideId: 0,
        freeTimes: 0,
        laveShareNum: 10,
        castleReward: 0,
        gameIdList: ''
      },
      castleData: {
        castleLv: 1
      },
      heroData: {
        heroLv: 1,
        rebirthNum: 0,
        itemState: '0,0,0,0',
        id: 200001,
        latent: []
      },
      info: {
        taskdata: {
          dayTask: {
            lvNum: 0,
            upPNum: 0,
            upzwNum: 0,
            gradEy: 0,
            uptr: 0,
            ocCity: 0,
            ocFight: 0,
            opBox: 0
          },
          achieveTask: {
            lv: 0,
            upPc: 0,
            ukzw: 0,
            upzw: 0,
            upzwnum: 0,
            upjl: 0,
            upjlnum: 0,
            jltb: 0,
            jltbnum: 0,
            lsjs: 0,
            lzsjs: 0,
            csjs: 0,
            hsjs: 0,
            lsjsnum: 0,
            lzsjsnum: 0,
            csjsnum: 0,
            hsjsnum: 0,
            upsht: 0,
            cycszl: 0,
            cycszlnum: 0,
            ptdz: 0,
            ptdznum: 0
          }
        },
        sign: {
          day: 1,
          ret: 1
        }
      },
      towerinfo: {
        curStage: 1,
        maxStage: 1,
        laveResetNum: 1,
        laveOneKeyNum: 0,
        doubleAtk: 0,
        roleType: 1,
        ranks: []
      }
    };
  }

  function normalizeSave(save) {
    if (!save || typeof save !== 'object') {
      return save;
    }
    if (!Array.isArray(save.battleData)) {
      save.battleData = [];
    }
    return save;
  }

  function readSave() {
    var raw = safeGet(SAVE_KEY);
    if (!raw) {
      return null;
    }
    try {
      var data = JSON.parse(raw);
      if (!data || !data.data) {
        return null;
      }
      return normalizeSave(data);
    } catch (e) {
      return null;
    }
  }

  function writeSave(data) {
    if (!data) {
      return false;
    }
    normalizeSave(data);
    data.systemTime = Date.now();
    return safeSet(SAVE_KEY, JSON.stringify(data));
  }

  function ensureSave() {
    var s = readSave();
    if (s) {
      s.isNewUser = false;
      return normalizeSave(s);
    }
    s = createDefaultSave();
    writeSave(s);
    return s;
  }

  function moneyPayload(save) {
    return {
      ret: 0,
      gold: parseInt(save.data.gold, 10) || 0,
      diamond: parseInt(save.data.diamond, 10) || 0,
      medal: parseInt(save.data.medal, 10) || 0,
      energy: parseInt(save.data.energy, 10) || 0,
      pill: parseInt(save.data.pill, 10) || 0
    };
  }

  function getParamDB() {
    try {
      var DB = global.__require && global.__require('DBMgr');
      var db = DB && (DB.default || DB);
      if (db && db.data && db.data.paramDB) {
        return db.data.paramDB;
      }
    } catch (e) {
      /* ignore */
    }
    return null;
  }

  function paramNum(paramDB, key, fallback) {
    try {
      if (paramDB && paramDB[key] != null && paramDB[key].value != null) {
        var n = parseFloat(paramDB[key].value);
        if (!isNaN(n)) {
          return n;
        }
      }
    } catch (e) {
      /* ignore */
    }
    return fallback;
  }

  function getWave(save) {
    try {
      var UserModel = global.__require && global.__require('UserModel');
      if (UserModel && UserModel.default && UserModel.default.wave) {
        return parseInt(UserModel.default.wave, 10) || 1;
      }
    } catch (e) {
      /* ignore */
    }
    return parseInt(save && save.data && save.data.stage, 10) || 1;
  }

  /** Công thức NotEnough (~10244–10251) — type 1 gold / type 2 medal */
  function calcNotEnoughAmount(type, save) {
    var wave = getWave(save);
    var pdb = getParamDB();
    var w = Math.max(1, wave);
    if (type === 1) {
      var t1 = paramNum(pdb, 'hangup_gold_basics', 20);
      var e1 = paramNum(pdb, 'hangup_gold_param1', 500);
      var a1 = paramNum(pdb, 'video_gold_num_times', 5) / 5;
      return Math.max(
        1,
        Math.floor(t1 * Math.pow(1 + e1 / 1e4, Math.floor((w - 1) / 10)) + Math.floor((w - 1) / 5)) * a1
      );
    }
    var t2 = paramNum(pdb, 'win_medal_basics', 2);
    var e2 = paramNum(pdb, 'win_medal_param1', 500);
    var a2 = paramNum(pdb, 'video_medal_num_times', 5) / 5;
    var added = paramNum(pdb, 'win_medal_added', 0);
    var everylv = paramNum(pdb, 'win_medal_everylv', 0);
    return Math.max(
      1,
      Math.floor(
        t2 * Math.pow(1 + e2 / 1e4, Math.floor((w - 1) / 10)) +
          Math.floor((w - 1) / 5) +
          added +
          everylv * Math.floor((w + 4) / 5)
      ) * a2
    );
  }

  function ensureBoxArray(save) {
    if (!save.data) {
      save.data = {};
    }
    if (!Array.isArray(save.data.box)) {
      save.data.box = [];
    }
    if (!Array.isArray(save.battleData)) {
      save.battleData = [];
    }
    return save.data.box;
  }

  function syncFromUserModel() {
    try {
      var UserModel = global.__require && global.__require('UserModel');
      if (!UserModel || !UserModel.default || !UserModel.default.data) {
        return;
      }
      var ud = UserModel.default.data;
      if (!ud || !ud.data) {
        return;
      }
      writeSave(clone(ud));
    } catch (e) {
      /* ignore */
    }
  }

  function applyToUserModel(save) {
    try {
      var UserModel = global.__require && global.__require('UserModel');
      if (UserModel && UserModel.default) {
        UserModel.default.data = save;
      }
    } catch (e) {
      /* ignore */
    }
  }

  function handleProtocol(protoId, reqData) {
    var save = ensureSave();
    var id = protoId % 10000;
    // Một số build dùng id đầy đủ
    var full = protoId;

    if (full === PROTO.LOGIN || id === 1) {
      // Ưu tiên bản cloud đã import (nếu bootLoad xong trước)
      var existing = readSave();
      if (existing && existing.data) {
        save = existing;
      }
      save.isNewUser = !safeGet(SAVE_KEY + '_seen');
      safeSet(SAVE_KEY + '_seen', '1');
      save.systemTime = Date.now();
      if (!save.gameSessionKey) {
        save.gameSessionKey = 'gv_offline_' + (save.data && save.data.player_id ? save.data.player_id : defaultPlayerId());
      }
      writeSave(save);
      return clone(save);
    }

    if (full === PROTO.END_BATTLE || id === 1202) {
      var win = !!(reqData && (reqData.result === true || reqData.result === 'true' || reqData.result === 1 || reqData.result === '1'));
      var isDouble = !!(reqData && (reqData.isDouble === true || reqData.isDouble === 1 || reqData.isDouble === '1'));
      var cur = parseInt(save.data.stage, 10) || 1;
      var rewardGold = win ? (isDouble ? 80 : 40) : 10;
      var rewardMedal = win ? (isDouble ? 4 : 2) : 0;
      save.data.gold = (parseInt(save.data.gold, 10) || 0) + rewardGold;
      save.data.medal = (parseInt(save.data.medal, 10) || 0) + rewardMedal;
      var newId = cur;
      if (win) {
        newId = cur + 1;
        save.data.stage = newId;
      }
      writeSave(save);
      applyToUserModel(save);
      var endRes = moneyPayload(save);
      endRes.newId = newId;
      return endRes;
    }

    if (full === PROTO.START_BATTLE || id === 1201) {
      return { ret: 0 };
    }

    if (full === PROTO.CASTLE_UP || id === 1001) {
      var cost = Math.max(50, (parseInt(save.castleData.castleLv, 10) || 1) * 50);
      var gold = parseInt(save.data.gold, 10) || 0;
      if (gold >= cost) {
        save.data.gold = gold - cost;
        save.castleData.castleLv = (parseInt(save.castleData.castleLv, 10) || 1) + 1;
      }
      writeSave(save);
      applyToUserModel(save);
      var cup = moneyPayload(save);
      cup.newLv = save.castleData.castleLv;
      return cup;
    }

    if (full === PROTO.HERO_UP || id === 1101) {
      var hCost = Math.max(50, (parseInt(save.heroData.heroLv, 10) || 1) * 40);
      var g2 = parseInt(save.data.gold, 10) || 0;
      if (g2 >= hCost) {
        save.data.gold = g2 - hCost;
        save.heroData.heroLv = (parseInt(save.heroData.heroLv, 10) || 1) + 1;
      }
      writeSave(save);
      applyToUserModel(save);
      return moneyPayload(save);
    }

    if (full === PROTO.ADD_PROPS || id === 2901) {
      syncFromUserModel();
      save = ensureSave();
      var propId = reqData && reqData.id;
      var num = parseInt(reqData && reqData.num, 10) || 0;
      // Ghi save; UI thường SHOW_REWARD → updateReward trên UserModel (tránh applyToUserModel cộng đôi)
      if (propId == 10001 || propId === '10001') {
        save.data.gold = (parseInt(save.data.gold, 10) || 0) + num;
      } else if (propId == 10002 || propId === '10002') {
        save.data.medal = (parseInt(save.data.medal, 10) || 0) + num;
      } else if (propId == 10003 || propId === '10003' || propId == 10013 || propId === '10013') {
        save.data.diamond = (parseInt(save.data.diamond, 10) || 0) + num;
      }
      writeSave(save);
      return moneyPayload(save);
    }

    if (full === PROTO.SYN_MONEY || id === 1802) {
      // Không syncFromUserModel — tránh ghi đè grant vừa ghi bởi ADD_PROPS (castle tutorial)
      save = ensureSave();
      return moneyPayload(save);
    }

    if (full === PROTO.ANY_INFO || id === 1801) {
      syncFromUserModel();
      save = ensureSave();
      ensureBoxArray(save);
      var anyRes = moneyPayload(save);
      anyRes.box = save.data.box;
      anyRes.nextTimeBoxTime = save.data.nextTimeBoxTime != null ? save.data.nextTimeBoxTime : -1;
      anyRes.boxType = save.data.boxType || 1;
      return anyRes;
    }

    if (full === PROTO.LIMITBAG_PAGE || id === 1402) {
      syncFromUserModel();
      save = ensureSave();
      var box = ensureBoxArray(save);
      writeSave(save);
      return { ret: 0, box: box };
    }

    if (full === PROTO.GUIDE || id === 1901) {
      if (reqData && reqData.id != null) {
        save.data.guideId = reqData.id;
        writeSave(save);
      }
      return { ret: 0 };
    }

    if (full === PROTO.SYN_USERINFO || id === 2001 || full === PROTO.S_UPDATE_INFO || id === 2002) {
      if (reqData) {
        if (reqData.name) {
          save.data.player_name = reqData.name;
        }
        if (reqData.head) {
          save.data.head_icon = reqData.head;
        }
        if (reqData.info) {
          try {
            save.info = typeof reqData.info === 'string' ? JSON.parse(reqData.info) : reqData.info;
          } catch (e2) {
            /* ignore */
          }
        }
        writeSave(save);
      }
      return { ret: 0 };
    }

    if (full === PROTO.GET_TOWER_INFO || id === 2500) {
      if (!save.towerinfo) {
        save.towerinfo = {
          curStage: 1,
          maxStage: 1,
          laveResetNum: 1,
          laveOneKeyNum: 0,
          doubleAtk: 0,
          roleType: 1,
          ranks: []
        };
        writeSave(save);
      }
      var ti = clone(save.towerinfo);
      ti.ret = 0;
      return ti;
    }

    if (full === PROTO.OUTLINE || id === 1205) {
      syncFromUserModel();
      save = ensureSave();
      var oType = reqData && parseInt(reqData.type, 10);
      var baseGold = 30 + Math.max(0, (getWave(save) - 1) * 2);
      if (oType === 0 || isNaN(oType)) {
        var peek = moneyPayload(save);
        peek.addGold = baseGold;
        return peek;
      }
      var mult = oType === 2 || oType === 3 ? 3 : 1;
      var addG = baseGold * mult;
      if (oType === 3) {
        addG = baseGold * 5;
      }
      save.data.gold = (parseInt(save.data.gold, 10) || 0) + addG;
      writeSave(save);
      applyToUserModel(save);
      var oRes = moneyPayload(save);
      oRes.addGold = addG;
      oRes.fiveNum = oType === 3 ? 1 : 0;
      return oRes;
    }

    if (full === PROTO.GET_SKY_REWARD || id === 1204) {
      syncFromUserModel();
      save = ensureSave();
      var skyAmt = 40;
      var isDbl = !!(reqData && (reqData.isDouble === true || reqData.isDouble === 1 || reqData.isDouble === '1'));
      if (isDbl) {
        skyAmt *= 2;
      }
      // Client SHOW_REWARD → updateReward; chỉ trả chuỗi reward
      var sky = moneyPayload(save);
      sky.reward = '10001:' + skyAmt;
      return sky;
    }

    if (full === PROTO.AD_REWARD) {
      syncFromUserModel();
      save = ensureSave();
      var adType = reqData && parseInt(reqData.type, 10);
      var adRes = moneyPayload(save);
      adRes.ret = 0;
      var rewardStr = '';
      var pid = reqData && (reqData.paramId != null ? reqData.paramId : reqData.paramid);

      try {
        // NotEnough: vàng (1) / thức ăn-medal (2) — không có paramId
        // Client SHOW_REWARD(t.reward) → updateReward; offline chỉ trả chuỗi đúng
        if (adType === 1 || adType === 2) {
          var amount = calcNotEnoughAmount(adType, save);
          rewardStr = adType === 1 ? '10001:' + amount : '10002:' + amount;
          adRes.reward = rewardStr;
          return adRes;
        }

        // Turntable: cộng lượt quay
        if (adType === 3) {
          adRes.laveTimes = 1;
          adRes.reward = '';
          return adRes;
        }

        // TimeBox: paramId 0|1 là cờ, không phải item id
        if (adType === 5) {
          var tbGold = Math.max(20, 15 + getWave(save) * 2);
          adRes.reward = '10001:' + tbGold;
          return adRes;
        }

        // LiveWay mopup — cần reward không rỗng (Flop type 17 bỏ qua reward, tự updateReward)
        if (adType === 17) {
          adRes.reward = '10001:50';
          return adRes;
        }

        // Machine phase skin
        if (adType === 22) {
          adRes.reward = '10001:30';
          return adRes;
        }

        // FreeGet / recruit / … — build từ paramId nếu là item id thật
        var qty = 1;
        try {
          var pdb = getParamDB();
          if (pdb && pdb.battle_aditem_get) {
            var v = parseInt(pdb.battle_aditem_get.value, 10);
            if (v > 0) {
              qty = v;
            }
          }
        } catch (eDb) {
          /* ignore */
        }
        if (pid != null && pid !== '' && String(pid) !== '0') {
          var pidNum = parseInt(pid, 10);
          if (!isNaN(pidNum) && pidNum > 1) {
            rewardStr = String(pid) + ':' + String(qty);
          }
        }
      } catch (eR) {
        /* ignore */
      }

      adRes.reward = rewardStr;
      return adRes;
    }

    if (full === PROTO.PARTNER_BUY || full === PROTO.PARTNER_SET_POS || full === PROTO.PARTNER_LV_UP ||
        full === PROTO.PARTNER_INFO || full === PROTO.AVTIVITY_TALENT || full === PROTO.AWAKEN ||
        full === PROTO.SYN_ITEMS || full === PROTO.USE_ITEM || full === PROTO.SIGN ||
        full === PROTO.TURNTABLE ||
        full === PROTO.GET_RANDOM_REWARD ||
        full === PROTO.UNLOCK_ITEM || full === PROTO.USE_PROPS ||
        full === PROTO.S_SHOP_BUY || full === PROTO.S_BIND_DRAW) {
      syncFromUserModel();
      save = ensureSave();
      if (full === PROTO.PARTNER_LV_UP || full === PROTO.TURNTABLE || full === PROTO.SIGN) {
        var pay = moneyPayload(save);
        if (full === PROTO.TURNTABLE) {
          pay.reward = '10001:20';
          pay.turnId = 1;
        }
        return pay;
      }
      if (full === PROTO.S_SHOP_BUY || full === PROTO.S_BIND_DRAW || full === PROTO.GET_RANDOM_REWARD) {
        var shop = moneyPayload(save);
        shop.reward = '10001:10';
        return shop;
      }
      return { ret: 0 };
    }

    // Fallback an toàn — không block gameplay
    syncFromUserModel();
    save = ensureSave();
    ensureBoxArray(save);
    var fb = moneyPayload(save);
    fb.ret = 0;
    fb.box = save.data.box;
    fb.reward = fb.reward || '';
    return fb;
  }

  function patchHttp() {
    if (patched) {
      return true;
    }
    try {
      if (typeof global.__require !== 'function') {
        return false;
      }
      var Http = global.__require('Http');
      if (!Http || !Http.default || typeof Http.default.send !== 'function') {
        return false;
      }
      if (Http.default.__gvOfflinePatched) {
        patched = true;
        return true;
      }

      try {
        var PE = global.__require('ProtocolEnums');
        if (PE && PE.default) {
          if (PE.default.GET_TOWER_INFO) {
            PROTO.GET_TOWER_INFO = PE.default.GET_TOWER_INFO;
          }
          if (PE.default.S_UPDATE_INFO) {
            PROTO.S_UPDATE_INFO = PE.default.S_UPDATE_INFO;
          }
          if (PE.default.LOGIN) {
            PROTO.LOGIN = PE.default.LOGIN;
          }
        }
      } catch (ePe) {
        /* ignore */
      }

      var orig = Http.default.send.bind(Http.default);
      Http.default.send = function (protoId, data, callback, retry, force) {
        var run = function () {
          try {
            var payload = handleProtocol(protoId, data || {});
            if (typeof callback === 'function') {
              setTimeout(function () {
                try {
                  callback(payload);
                } catch (cbErr) {
                  console.warn('[OfflineAPI] callback error', cbErr);
                }
              }, 0);
            }
          } catch (err) {
            console.warn('[OfflineAPI] handle failed, fallback orig', err);
            return orig(protoId, data, callback, retry, force);
          }
        };
        // LOGIN: chờ cloud boot tối đa ~2.5s nếu đang load
        var isLogin = protoId === PROTO.LOGIN || protoId % 10000 === 1;
        if (isLogin && global.__gvCloudBoot && typeof global.__gvCloudBoot.then === 'function') {
          var done = false;
          var t = setTimeout(function () {
            if (!done) {
              done = true;
              run();
            }
          }, 2500);
          global.__gvCloudBoot.then(function () {
            if (!done) {
              done = true;
              clearTimeout(t);
              run();
            }
          }, function () {
            if (!done) {
              done = true;
              clearTimeout(t);
              run();
            }
          });
          return;
        }
        return run();
      };
      Http.default.__gvOfflinePatched = true;
      patched = true;
      console.log('[OfflineAPI] Http.send patched (offline)');
      return true;
    } catch (e) {
      return false;
    }
  }

  function clearSave() {
    safeRemove(SAVE_KEY);
    safeRemove(SAVE_KEY + '_seen');
  }

  function importPlayerData(playerData) {
    if (!playerData || typeof playerData !== 'object' || !playerData.data) {
      return false;
    }
    var data = clone(playerData);
    data.isNewUser = false;
    data.systemTime = Date.now();
    writeSave(data);
    safeSet(SAVE_KEY + '_seen', '1');
    return true;
  }

  function exportPlayerData() {
    return clone(ensureSave());
  }

  // Poll đến khi bundle main sẵn sàng
  var tries = 0;
  var timer = setInterval(function () {
    tries++;
    if (patchHttp() || tries > 6000) {
      clearInterval(timer);
    }
  }, 50);

  global.OfflineAPI = {
    patchHttp: patchHttp,
    readSave: readSave,
    writeSave: writeSave,
    ensureSave: ensureSave,
    clearSave: clearSave,
    importPlayerData: importPlayerData,
    exportPlayerData: exportPlayerData,
    syncFromUserModel: syncFromUserModel,
    SAVE_KEY: SAVE_KEY
  };
})(window);
