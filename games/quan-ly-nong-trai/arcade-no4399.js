/**

 * Arcade No4399 — cut 4399 /action API, SaveProfile, social UI actions.

 * Local save + ArcadeSave only. Load after arcade-offline.js, before arcade-save.js.

 */

(function (global) {

  'use strict';



  var enabled = true;

  var patched = false;

  var pollTimer = null;



  var BLOCKED_TY_KEYS = {

    3: true,

    4: true,

    15: true,

    16: true,

    19: true,

    20: true,

    21: true,

    23: true,

    24: true,

    28: true,

    29: true

  };



  var BLOCKED_API = {

    SaveProfile: true,

    RankGet: true,

    FriendList: true,

    EnemyList: true,

    FriendApply: true,

    FriendApplyList: true,

    FriendAccept: true,

    FriendIgnore: true,

    FriendDelete: true,

    FriendTakeCare: true,

    FriendMakeTrouble: true,

    FriendByInvite: true,

    MailList: true,

    MailRead: true,

    MailReward: true,

    MailDel: true,

    LookupProfile: true,

    LookupUserInfo: true,

    ScareCrowHeartList: true,

    HeartLog: true,

    Invite: true,

    ClearInvite: true,

    TakeInviteAward: true,

    GetInviteInfo: true,

    GetInviteInfoList: true,

    NoticeGet: true,

    SendTopNotice: true,

    UpdateTitle: true,

    UpdateInfo: true,

    RandUser: true,

    ClientError: true,

    GetRecommendFriendList: true

  };



  function log() {

    try {

      console.log.apply(console, ['[ArcadeNo4399]'].concat([].slice.call(arguments)));

    } catch (e) {

      /* ignore */

    }

  }



  function noop() {}



  function isBlockedApi(code) {

    return enabled && code && BLOCKED_API[code];

  }



  function patchNetHelper() {
    var proto = null;
    if (global.NetHelper && global.NetHelper.constructor && global.NetHelper.constructor.prototype) {
      proto = global.NetHelper.constructor.prototype;
    } else if (global.cc && global.cc.js) {
      var Cls = global.cc.js.getClassByName('NetHelper');
      if (Cls) proto = Cls.prototype;
    }
    if (!proto || !proto.init || !proto.sendRequest || proto.__gvNo4399Patched) return false;

    var origInit = proto.init;
    proto.init = function (e, t, i) {
      if (enabled && e === 'Login' && t && t.data) {
        delete t.data.profile;
      }
      return origInit.call(this, e, t, i);
    };

    proto.sendSaveProfileRequest = noop;
    proto.sendClientErrorRequest = noop;
    proto.sendUpdateInfoRequest = noop;

    var origSend = proto.sendRequest;
    proto.sendRequest = function (code, p, f, o) {
      if (isBlockedApi(code)) {
        // Thu hoạch vẫn cần callback local để mở MarketLayer khi đã chặn API 4399.
        if (code === 'GetInviteInfo' && typeof f === 'function') {
          f({ inviteeOpenIdList: [], targetList: [] });
        }
        return;
      }
      return origSend.apply(this, arguments);
    };

    proto.__gvNo4399Patched = true;
    log('NetHelper patched');
    return true;
  }



  function patchGame2() {

    var g2 = global.Game2;

    if (!g2 || !g2.TyClickChange || g2.__gvNo4399TyPatched) return false;



    var origTy = g2.TyClickChange.bind(g2);

    g2.TyClickChange = function (e, t, i, o) {

      var key = parseInt(t, 10);

      if (enabled && BLOCKED_TY_KEYS[key]) {

        return;

      }

      return origTy(e, t, i, o);

    };



    var origLook = g2.LookFriendScene;

    if (typeof origLook === 'function') {

      g2.LookFriendScene = function () {

        if (enabled) return;

        return origLook.apply(this, arguments);

      };

    }



    g2.__gvNo4399TyPatched = true;

    log('Game2 TyClickChange patched');

    return true;

  }



  function patchGame() {

    var game = global.Game;

    if (!game || game.__gvNo4399Patched) return false;



    game.createRankWindow = noop;

    game.createYqylWindow = noop;

    game.createPackageWindow = noop;



    game.__gvNo4399Patched = true;

    log('Game social windows patched');

    return true;

  }



  function resolveIndexSceneClass() {

    if (!global.cc || !global.cc.js) return null;

    return global.cc.js.getClassByName('IndexScene');

  }



  function patchIndexSceneProto() {

    var Cls = resolveIndexSceneClass();

    if (!Cls || !Cls.prototype || Cls.prototype.__gvNo4399Patched) return false;



    Cls.prototype.BtClickFriend = noop;

    Cls.prototype.BtClickYqyl = noop;

    Cls.prototype.BtClickPackage = noop;



    var origBtTy = Cls.prototype.BtTyClick;

    if (typeof origBtTy === 'function') {

      Cls.prototype.BtTyClick = function (e, t) {

        var key = parseInt(t, 10);

        if (enabled && BLOCKED_TY_KEYS[key]) {

          return;

        }

        return origBtTy.apply(this, arguments);

      };

    }



    Cls.prototype.__gvNo4399Patched = true;

    log('IndexScene prototype patched');

    return true;

  }



  function patchYxhLogin() {

    var yxh = global.YxhLogin;

    if (!yxh || !yxh.login || yxh.__gvNo4399Patched) return false;



    var orig = yxh.login.bind(yxh);

    yxh.login = function (force) {

      if (enabled) {

        return;

      }

      return orig(force);

    };



    yxh.__gvNo4399Patched = true;

    log('YxhLogin.login patched');

    return true;

  }



  function childPath(root, parts) {

    var n = root;

    for (var i = 0; i < parts.length; i++) {

      if (!n) return null;

      n = n.getChildByName(parts[i]);

    }

    return n;

  }



  function hideSocialHud(indexScene) {

    if (!enabled || !indexScene || !indexScene.node) return;



    var root = indexScene.node;

    var paths = [
      ['panel', 'Button2'],
      ['bt_panel1', 'Button3']
    ];

    paths.forEach(function (parts) {
      var node = childPath(root, parts);
      if (node && node.isValid) {
        node.active = false;
      }
    });
  }



  function tick() {

    if (!enabled) return;



    patchNetHelper();

    patchGame2();

    patchGame();

    patchIndexSceneProto();

    patchYxhLogin();



    if (global.IndexScene && global.IndexScene.node) {

      hideSocialHud(global.IndexScene);

    }

  }



  function startWatcher() {

    tick();

    var n = 0;

    pollTimer = setInterval(function () {

      n++;

      tick();

      if (patched && n > 120) {

        clearInterval(pollTimer);

        pollTimer = null;

      }

    }, 250);

  }



  if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', startWatcher);

  } else {

    startWatcher();

  }



  global.ArcadeNo4399 = {

    enabled: enabled,

    skipProfileMerge: true,

    BLOCKED_TY_KEYS: BLOCKED_TY_KEYS,

    BLOCKED_API: BLOCKED_API,

    tick: tick

  };



  patched = true;

})(window);


