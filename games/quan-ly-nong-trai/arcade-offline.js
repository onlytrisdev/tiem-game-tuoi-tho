/**
 * Arcade Offline — mock Login, chặn URL 4399. API noop + UI social: arcade-no4399.js.
 *
 * LoadScene đợi GBaseEvent.HttpLogin (emit trong NetHelper.init("Login")).
 * NetHelper.init: if ("" != t.err_code) → lỗi. Phải gửi err_code:"" (không để undefined).
 * nextScene chặn khi loginModel==1 && Token=="".
 */
(function (global) {
  'use strict';

  var patchedNet = false;
  var patchedLogin = false;
  var patchedH5 = false;
  var patchedNextScene = false;
  var loginDone = false;
  var httpLoginEmitted = false;
  var keepCloseNetTimer = null;
  var watchdogStarted = false;
  var logLastByKey = Object.create(null);
  var LOG_THROTTLE_MS = 5000;

  function isDebugLogEnabled() {
    try {
      return global.localStorage.getItem('gv_debug') === '1';
    } catch (e) {
      return false;
    }
  }

  function log() {
    if (!isDebugLogEnabled()) return;
    try {
      var key = String(arguments[0] || '');
      var now = Date.now();
      if (key && logLastByKey[key] && now - logLastByKey[key] < LOG_THROTTLE_MS) return;
      if (key) logLastByKey[key] = now;
      console.log.apply(console, ['[ArcadeOffline]'].concat([].slice.call(arguments)));
    } catch (e) {
      /* ignore */
    }
  }

  var GAME_LOG_SKIP = /newhelper|reloadUi|updateUi|openSetWindow|sendALDCount|loadscene|WxLogin _onLoad|IndexScene start/i;
  var origConsoleLog = console.log.bind(console);
  var ccLogPatched = false;

  function shouldSkipGameLog(args) {
    if (isDebugLogEnabled()) return false;
    try {
      return GAME_LOG_SKIP.test([].slice.call(args).join(' '));
    } catch (e) {
      return false;
    }
  }

  console.log = function () {
    if (shouldSkipGameLog(arguments)) return;
    return origConsoleLog.apply(console, arguments);
  };

  function patchCcLogQuiet() {
    if (ccLogPatched || !global.cc || typeof global.cc.log !== 'function') return;
    ccLogPatched = true;
    var origCcLog = global.cc.log.bind(global.cc);
    global.cc.log = function () {
      if (shouldSkipGameLog(arguments)) return;
      return origCcLog.apply(global.cc, arguments);
    };
  }

  function isOfflineHost() {
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

  function ensureH5apiStub() {
    if (patchedH5) return;
    patchedH5 = true;
    if (!global.h5api) global.h5api = {};

    global.h5api.isLogin = function () {
      return true;
    };
    global.h5api.login = function (ok) {
      var ptid = (global.Data && global.Data.PTid) || 1;
      var user = { uId: String(ptid), userName: 'Arcade', nickName: 'Arcade' };
      if (typeof ok === 'function') {
        try {
          ok(user);
        } catch (e) {
          /* ignore */
        }
      }
    };
    global.h5api.getUserAvatar = function () {
      return '';
    };
    if (typeof global.h5api.canPlayAd !== 'function') {
      global.h5api.canPlayAd = function (cb) {
        if (typeof cb === 'function') cb({ canPlayAd: true });
      };
    }
    if (typeof global.h5api.playAd !== 'function') {
      global.h5api.playAd = function (cb) {
        if (typeof global.ArcadeAds === 'object' && typeof global.ArcadeAds.showRewardAd === 'function') {
          global.ArcadeAds.showRewardAd(function () {
            if (typeof cb === 'function') cb({ code: 10001, message: 'ok' });
          });
        } else if (typeof global.GVAdBreak === 'function') {
          global.GVAdBreak(function () {
            if (typeof cb === 'function') cb({ code: 10001, message: 'ok' });
          });
        } else if (typeof cb === 'function') {
          cb({ code: 10001, message: 'ok' });
        }
      };
    }
    if (typeof global.h5api.share !== 'function') {
      global.h5api.share = function () {
        /* no-op */
      };
    }
    log('h5api auth stubbed (always logged in)');
  }

  function forceCloseNet() {
    try {
      if (global.TestData) {
        global.TestData.closeNet = true;
      }
    } catch (e) {
      /* ignore */
    }
  }

  function keepCloseNet() {
    forceCloseNet();
    if (keepCloseNetTimer) return;
    var n = 0;
    keepCloseNetTimer = setInterval(function () {
      forceCloseNet();
      n++;
      if (n > 200) {
        clearInterval(keepCloseNetTimer);
        keepCloseNetTimer = null;
      }
    }, 250);
  }

  /** Contract server: err_code phải là "" — undefined bị coi là lỗi ("" != undefined === true). */
  function buildFakeLoginData() {
    var ptid = 1;
    try {
      if (global.Data && global.Data.PTid != null) ptid = global.Data.PTid;
    } catch (e) {
      /* ignore */
    }
    var uidNum = parseInt(ptid, 10);
    if (isNaN(uidNum) || uidNum <= 0) uidNum = 1;
    var now = Math.floor(Date.now() / 1000);
    var ver = '1.1.1.5';
    try {
      if (global.Config && global.Config.Version) ver = String(global.Config.Version);
    } catch (e2) {
      /* ignore */
    }
    return {
      err_code: '',
      data: {
        uid: uidNum,
        token: 'gv-local-' + uidNum,
        dbId: 0,
        serverUnix: now,
        gameList: [],
        commonShareTextList: [],
        bannerClose: true,
        version: ver,
        adSwitch: 1
      }
    };
  }

  function ensureGameStub() {
    try {
      if (!global.Game) {
        global.Game = {
          reloadGoldLabel: function () {},
          showWaitingLayer: function () {},
          hideWaitingLayer: function () {},
          reGame: function () {},
          showAlertBar: function (msg) {
            log('showAlertBar', msg);
          },
          getBgScale: function () {
            return 1;
          }
        };
      } else {
        if (typeof global.Game.reloadGoldLabel !== 'function') {
          global.Game.reloadGoldLabel = function () {};
        }
        if (typeof global.Game.hideWaitingLayer !== 'function') {
          global.Game.hideWaitingLayer = function () {};
        }
        if (typeof global.Game.showWaitingLayer !== 'function') {
          global.Game.showWaitingLayer = function () {};
        }
      }
    } catch (e0) {
      /* ignore */
    }
  }

  function loadSceneListening() {
    // LoadScene.start gán window.LoadScene = this và on(HttpLogin)
    return !!(global.LoadScene && typeof global.LoadScene.curLoadNum === 'number');
  }

  function emitHttpLogin(force) {
    try {
      if (!force && httpLoginEmitted) return;
      if (global.GEventDispatch && global.GBaseEvent) {
        global.GEventDispatch.emit(global.GBaseEvent.HttpLogin);
        httpLoginEmitted = true;
        log('HttpLogin emitted', force ? '(force)' : '');
      }
    } catch (e) {
      console.warn('[ArcadeOffline] emit HttpLogin failed', e);
    }
  }

  function forceLocalToken(fake) {
    var o = (fake && fake.data) || buildFakeLoginData().data;
    global.Data.loginModel = 1;
    global.Data.UId = o.uid;
    global.Data.Token = o.token || 'gv-local-1';
    global.Data.ServerId = o.dbId || 0;
    global.Data.nowServerLoginTime = o.serverUnix || Math.floor(Date.now() / 1000);
    if (!global.Data.AdGameList) global.Data.AdGameList = [];
    log('force local Token=', global.Data.Token);
  }

  /**
   * @param {{forceEmit?: boolean}} opts
   * forceEmit: re-emit HttpLogin (khi emit sớm trước listener LoadScene).
   */
  function applyMockLogin(opts) {
    opts = opts || {};
    if (loginDone && global.Data && global.Data.Token) {
      if (opts.forceEmit || !httpLoginEmitted) emitHttpLogin(!!opts.forceEmit);
      return true;
    }
    if (!global.NetHelper || typeof global.NetHelper.init !== 'function') return false;
    if (!global.Data) return false;

    forceCloseNet();
    ensureH5apiStub();
    ensureGameStub();

    var fake = buildFakeLoginData();
    log('mock Login → NetHelper.init uid=', fake.data.uid, 'err_code=""');

    var emitCount = 0;
    var origEmit = null;
    try {
      if (global.GEventDispatch && typeof global.GEventDispatch.emit === 'function' && global.GBaseEvent) {
        origEmit = global.GEventDispatch.emit.bind(global.GEventDispatch);
        global.GEventDispatch.emit = function (ev) {
          if (ev === global.GBaseEvent.HttpLogin) emitCount++;
          return origEmit.apply(null, arguments);
        };
      }
      global.NetHelper.init('Login', fake, null);
    } catch (e) {
      console.warn('[ArcadeOffline] NetHelper.init Login error', e);
    } finally {
      if (origEmit && global.GEventDispatch) {
        global.GEventDispatch.emit = origEmit;
      }
    }

    if (global.Data && global.Data.Token) {
      loginDone = true;
      if (global.WxLogin) {
        global.WxLogin.avatarUrl = '';
      }
      if (emitCount > 0) {
        httpLoginEmitted = true;
        log('Login OK / HttpLogin from NetHelper / Token=', global.Data.Token);
      } else {
        emitHttpLogin(true);
        log('Login OK / HttpLogin patched (init missed emit) / Token=', global.Data.Token);
      }
      if (opts.forceEmit) emitHttpLogin(true);
      return true;
    }

    log('NetHelper.init returned without Token — fallback');
    try {
      forceLocalToken(fake);
      if (global.WxLogin) {
        global.WxLogin.avatarUrl = '';
      }
      emitHttpLogin(true);
      loginDone = true;
      log('Login OK via fallback + HttpLogin');
      return true;
    } catch (e2) {
      console.warn('[ArcadeOffline] mock Login fallback failed', e2);
      return false;
    }
  }

  function patchNetManager() {
    if (patchedNet) return true;
    if (!global.NetManager || typeof global.NetManager.send !== 'function') return false;

    global.NetManager.send = function (code) {
      forceCloseNet();
      code = code || 'Login';
      log('block XHR', code);
      if (code === 'Login') {
        applyMockLogin();
      }
    };

    global.NetManager.__gvOfflinePatched = true;
    patchedNet = true;
    log('NetManager.send patched');
    return true;
  }

  function patchNetHelperSendRequest() {
    if (!global.NetHelper || typeof global.NetHelper.sendRequest !== 'function') return false;
    if (global.NetHelper.__gvOfflinePatched) return true;

    global.NetHelper.sendRequest = function (code, payload, callback) {
      forceCloseNet();
      if (code === 'Login') {
        log('NetHelper.sendRequest Login → mock');
        applyMockLogin();
        return;
      }
      if (code === 'GetInviteInfo') {
        // Không gọi máy chủ 4399 nhưng phải phản hồi cho giao diện thu hoạch.
        if (typeof callback === 'function') {
          callback({ inviteeOpenIdList: [], targetList: [] });
        }
        return;
      }
      log('NetHelper.sendRequest no-op', code);
    };
    global.NetHelper.__gvOfflinePatched = true;
    log('NetHelper.sendRequest patched');
    return true;
  }

  function patchYxhAndWxLogin() {
    var ok = false;

    if (global.YxhLogin && typeof global.YxhLogin.login === 'function' && !global.YxhLogin.__gvOfflinePatched) {
      global.YxhLogin.login = function () {
        log('YxhLogin.login → mock');
        ensureH5apiStub();
        forceCloseNet();
        applyMockLogin();
      };
      global.YxhLogin.createChangeLogin = function () {
        log('skip change_login');
      };
      global.YxhLogin.__gvOfflinePatched = true;
      ok = true;
      log('YxhLogin patched');
    }

    if (global.WxLogin && typeof global.WxLogin.login === 'function' && !global.WxLogin.__gvOfflinePatched) {
      global.WxLogin.login = function () {
        log('WxLogin.login → offline');
        ensureH5apiStub();
        forceCloseNet();
        applyMockLogin();
      };
      if (typeof global.WxLogin.getAddress === 'function') {
        global.WxLogin.getAddress = function (cb) {
          if (typeof cb === 'function') cb();
        };
      }
      global.WxLogin.__gvOfflinePatched = true;
      ok = true;
      log('WxLogin patched');
    }

    if (ok) patchedLogin = true;
    return patchedLogin;
  }

  /** Backup: nextScene không kẹt khi Token rỗng */
  function patchLoadSceneNextScene() {
    if (patchedNextScene) return true;
    var ls = global.LoadScene;
    if (!ls || typeof ls.nextScene !== 'function') return false;
    if (ls.__gvNextPatched) {
      patchedNextScene = true;
      return true;
    }

    var original = ls.nextScene.bind(ls);
    ls.nextScene = function () {
      try {
        if (global.Data && global.Data.loginModel == 1 && global.Data.Token === '') {
          log('nextScene: Token empty — force mock Login');
          applyMockLogin({ forceEmit: true });
          if (!global.Data.Token) {
            forceLocalToken(buildFakeLoginData());
            emitHttpLogin(true);
          }
        }
      } catch (e) {
        console.warn('[ArcadeOffline] nextScene pre-check', e);
      }
      return original();
    };
    ls.__gvNextPatched = true;
    patchedNextScene = true;
    log('LoadScene.nextScene patched');
    return true;
  }

  function bumpLoadSceneIfStuck(ls) {
    if (!ls || ls.__gvForcedHttpTick) return;
    if (typeof ls.curLoadNum !== 'number' || typeof ls.allLoadNum !== 'number') return;
    if (!(global.Data && global.Data.Token)) return;
    if (ls.curLoadNum >= ls.allLoadNum) return;
    // Thiếu đúng 1 tick (HttpLogin) — tăng + emit lại rồi gọi nextScene
    if (ls.curLoadNum >= ls.allLoadNum - 1) {
      ls.__gvForcedHttpTick = true;
      log('watchdog: bump curLoadNum + nextScene', ls.curLoadNum, '/', ls.allLoadNum);
      emitHttpLogin(true);
      ls.curLoadNum = ls.allLoadNum;
      try {
        if (typeof ls.nextScene === 'function') ls.nextScene();
      } catch (e) {
        console.warn('[ArcadeOffline] forced nextScene failed', e);
      }
    }
  }

  function startWatchdog() {
    if (watchdogStarted) return;
    watchdogStarted = true;
    var n = 0;
    var stuckSince = 0;
    var timer = setInterval(function () {
      n++;
      forceCloseNet();
      patchLoadSceneNextScene();

      try {
        var ls = global.LoadScene;
        if (ls && typeof ls.curLoadNum === 'number' && typeof ls.allLoadNum === 'number') {
          // Prefab gần xong / đã xong mà chưa Token
          if (ls.curLoadNum >= 4 && (!global.Data.Token || global.Data.Token === '')) {
            log('watchdog: no Token — force Login');
            applyMockLogin({ forceEmit: true });
          }
          // Có Token nhưng thiếu HttpLogin tick (emit sớm trước listener)
          if (global.Data.Token && ls.curLoadNum < ls.allLoadNum) {
            stuckSince++;
            if (stuckSince === 15) {
              log('watchdog: re-emit HttpLogin (possible early emit)');
              applyMockLogin({ forceEmit: true });
            }
            if (stuckSince >= 25) {
              bumpLoadSceneIfStuck(ls);
            }
          } else {
            stuckSince = 0;
          }
        } else if (!loginDone && global.NetHelper && global.Data && loadSceneListening()) {
          applyMockLogin();
        }
      } catch (e) {
        /* ignore */
      }

      if ((loginDone && patchedNextScene && n > 80) || n > 250) {
        clearInterval(timer);
        log('watchdog end', { loginDone: loginDone, token: global.Data && global.Data.Token, n: n });
      }
    }, 100);
  }

  /** Chặn fetch/XHR tới map.qq.com và /action/?api= */
  function patchGlobalNetworkGuards() {
    if (global.__gvNetGuards) return;
    global.__gvNetGuards = true;

    function isBlockedUrl(url) {
      if (!url) return false;
      var u = String(url);
      if (
        u.indexOf('/action/?api=') >= 0 ||
        u.indexOf('3304399.net') >= 0 ||
        u.indexOf('4399.com') >= 0 ||
        u.indexOf('apis.map.qq.com') >= 0
      ) {
        return true;
      }
      // Offline/local host: never hit Arcade account APIs (404/CORS spam).
      if (isOfflineHost()) {
        if (u.indexOf('/account/userInfo') >= 0) return true;
        if (u.indexOf('getuserinfo.aspx') >= 0) return true;
      }
      return false;
    }

    if (typeof global.fetch === 'function') {
      var ofetch = global.fetch.bind(global);
      global.fetch = function (input, init) {
        var url = typeof input === 'string' ? input : input && input.url;
        if (isBlockedUrl(url)) {
          return Promise.reject(new Error('[ArcadeOffline] blocked: ' + url));
        }
        return ofetch(input, init);
      };
    }

    var XO = global.XMLHttpRequest;
    if (XO && XO.prototype) {
      var open = XO.prototype.open;
      XO.prototype.open = function (method, url) {
        this.__gvUrl = url;
        if (isBlockedUrl(url)) {
          this.__gvBlocked = true;
        }
        return open.apply(this, arguments);
      };
      var send = XO.prototype.send;
      XO.prototype.send = function () {
        if (this.__gvBlocked) {
          var self = this;
          setTimeout(function () {
            try {
              Object.defineProperty(self, 'readyState', { configurable: true, get: function () { return 4; } });
              Object.defineProperty(self, 'status', { configurable: true, get: function () { return 0; } });
              if (typeof self.onreadystatechange === 'function') self.onreadystatechange();
              if (typeof self.onerror === 'function') self.onerror(new Error('blocked'));
            } catch (e) {
              /* ignore */
            }
          }, 0);
          return;
        }
        return send.apply(this, arguments);
      };
    }
  }

  function tick() {
    patchCcLogQuiet();
    ensureH5apiStub();
    keepCloseNet();
    patchNetManager();
    patchNetHelperSendRequest();
    var justLogin = patchYxhAndWxLogin();
    patchLoadSceneNextScene();

    // Chỉ auto-mock khi LoadScene đã on(HttpLogin) — tránh emit mất
    // (Yxh/Wx/NetManager vẫn gọi applyMockLogin trực tiếp khi game login)
    if (!loginDone && global.NetHelper && global.Data && loadSceneListening()) {
      applyMockLogin();
    } else if (justLogin && !loginDone && loadSceneListening()) {
      applyMockLogin();
    }
  }

  function start() {
    patchCcLogQuiet();
    patchGlobalNetworkGuards();
    ensureH5apiStub();
    startWatchdog();
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      tick();
      if ((patchedNet && patchedLogin && loginDone && patchedNextScene) || tries > 300) {
        if (loginDone || tries > 300) {
          clearInterval(timer);
          log('patch loop end', {
            patchedNet: patchedNet,
            patchedLogin: patchedLogin,
            patchedNextScene: patchedNextScene,
            loginDone: loginDone,
            token: global.Data && global.Data.Token,
            tries: tries
          });
        }
      }
    }, 50);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

  global.ArcadeOffline = {
    applyMockLogin: applyMockLogin,
    forceCloseNet: forceCloseNet,
    isReady: function () {
      return !!(loginDone && global.Data && global.Data.Token);
    }
  };
})(window);
