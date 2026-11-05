/**
 * Arcade adapter — hook tối thiểu vào Result.getReward (END_BATTLE) + Setting (nút Xóa data).
 * Không sửa logic gameplay; chỉ gọi save/score sau khi thắng wave.
 */
(function (global) {
  'use strict';

  var hookedResult = false;
  var hookedSetting = false;
  var hookedUpdateReward = false;
  var bootLoadStarted = false;
  var languageForced = false;
  var VI_LANG = 'VietnameseDB/';

  function getClassByName(name) {
    try {
      if (global.cc && cc.js && typeof cc.js.getClassByName === 'function') {
        var cls = cc.js.getClassByName(name);
        if (cls) {
          return cls;
        }
      }
    } catch (e) {
      /* ignore */
    }
    try {
      if (typeof global.__require === 'function') {
        return global.__require(name);
      }
    } catch (e2) {
      /* ignore */
    }
    return null;
  }

  function onWaveSettled(isWin) {
    try {
      if (global.OfflineAPI && typeof global.OfflineAPI.syncFromUserModel === 'function') {
        global.OfflineAPI.syncFromUserModel();
      }
    } catch (e) {
      /* ignore */
    }

    var wave = 0;
    try {
      if (global.ArcadeScore && typeof global.ArcadeScore.readGameplayWave === 'function') {
        wave = global.ArcadeScore.readGameplayWave();
      }
    } catch (e2) {
      /* ignore */
    }

    if (isWin && wave > 0 && global.ArcadeScore && typeof global.ArcadeScore.presentScoreThenContinue === 'function') {
      global.ArcadeScore.presentScoreThenContinue(wave, function () {
        if (global.ArcadeSave && typeof global.ArcadeSave.saveAfterRound === 'function') {
          global.ArcadeSave.saveAfterRound();
        }
      });
      return;
    }

    if (global.ArcadeSave && typeof global.ArcadeSave.saveAfterRound === 'function') {
      global.ArcadeSave.saveAfterRound();
    }
  }

  function forceVietnameseLanguage() {
    if (languageForced) {
      return true;
    }
    try {
      var mod = typeof global.__require === 'function' ? global.__require('GameTool') : null;
      var GT = mod && (mod.default || mod);
      if (!GT || typeof GT.getlanguage !== 'function') {
        return false;
      }
      if (GT.getlanguage.__gvViForced) {
        languageForced = true;
        return true;
      }
      GT.getlanguage = function () {
        return VI_LANG;
      };
      GT.getlanguage.__gvViForced = true;
      languageForced = true;
      console.log('[ArcadeAdapter] language forced to', VI_LANG);
      return true;
    } catch (e) {
      return false;
    }
  }

  function hookResult() {
    if (hookedResult) {
      return true;
    }
    var mod = getClassByName('Result');
    var Cls = mod && (mod.default || mod);
    if (!Cls || !Cls.prototype || typeof Cls.prototype.getReward !== 'function') {
      return false;
    }
    if (Cls.prototype.getReward.__gvWrapped) {
      hookedResult = true;
      return true;
    }

    var original = Cls.prototype.getReward;
    Cls.prototype.getReward = function (isDouble) {
      var self = this;
      var wasWin = !!(self && self._isWin);
      var result = original.apply(this, arguments);
      try {
        setTimeout(function () {
          onWaveSettled(wasWin);
        }, 400);
      } catch (e) {
        console.warn('[ArcadeAdapter] after getReward failed', e);
      }
      return result;
    };
    Cls.prototype.getReward.__gvWrapped = true;
    hookedResult = true;
    console.log('[ArcadeAdapter] Result.getReward hooked');
    return true;
  }

  /** Đưa nút Xóa data vào bảng Cài đặt (Setting). */
  function hookSetting() {
    if (hookedSetting) {
      return true;
    }
    var mod = getClassByName('Setting');
    var Cls = mod && (mod.default || mod);
    if (!Cls || !Cls.prototype || typeof Cls.prototype.start !== 'function') {
      return false;
    }
    if (Cls.prototype.start.__gvDeleteHooked) {
      hookedSetting = true;
      return true;
    }

    var origStart = Cls.prototype.start;
    Cls.prototype.start = function () {
      var result = origStart.apply(this, arguments);
      try {
        var self = this;
        setTimeout(function () {
          if (global.ArcadeUI && typeof global.ArcadeUI.attachDeleteToSetting === 'function') {
            global.ArcadeUI.attachDeleteToSetting(self);
          }
        }, 50);
      } catch (e) {
        console.warn('[ArcadeAdapter] Setting delete inject failed', e);
      }
      return result;
    };
    Cls.prototype.start.__gvDeleteHooked = true;

    if (typeof Cls.prototype.destorybase === 'function') {
      var origDestroy = Cls.prototype.destorybase;
      Cls.prototype.destorybase = function () {
        try {
          if (global.ArcadeUI && typeof global.ArcadeUI.detachDeleteFromSetting === 'function') {
            global.ArcadeUI.detachDeleteFromSetting(this);
          }
        } catch (e2) {
          /* ignore */
        }
        return origDestroy.apply(this, arguments);
      };
    }

    hookedSetting = true;
    console.log('[ArcadeAdapter] Setting delete button hooked');
    return true;
  }

  /** Sau updateReward (QC/thưởng) → sync offline save. */
  function hookUpdateReward() {
    if (hookedUpdateReward) {
      return true;
    }
    var mod = getClassByName('UserModel');
    var UM = mod && (mod.default || mod);
    if (!UM || typeof UM.updateReward !== 'function') {
      return false;
    }
    if (UM.updateReward.__gvWrapped) {
      hookedUpdateReward = true;
      return true;
    }
    var orig = UM.updateReward;
    UM.updateReward = function () {
      var r = orig.apply(this, arguments);
      try {
        setTimeout(function () {
          if (global.OfflineAPI && typeof global.OfflineAPI.syncFromUserModel === 'function') {
            global.OfflineAPI.syncFromUserModel();
          }
        }, 100);
      } catch (e) {
        /* ignore */
      }
      return r;
    };
    UM.updateReward.__gvWrapped = true;
    hookedUpdateReward = true;
    console.log('[ArcadeAdapter] UserModel.updateReward hooked');
    return true;
  }

  function startBootLoad() {
    if (bootLoadStarted) {
      return;
    }
    bootLoadStarted = true;
    if (global.OfflineAPI && typeof global.OfflineAPI.patchHttp === 'function') {
      global.OfflineAPI.patchHttp();
    }
    var p =
      global.ArcadeSave && typeof global.ArcadeSave.bootLoad === 'function'
        ? global.ArcadeSave.bootLoad()
        : Promise.resolve(false);
    global.__gvCloudBoot = p;
    p.then(function () {
      console.log('[ArcadeAdapter] bootLoad done');
    });
  }

  function onVisibilityFlush() {
    try {
      if (document.hidden && global.ArcadeSave && typeof global.ArcadeSave.saveProgressNow === 'function') {
        global.ArcadeSave.saveProgressNow();
      }
    } catch (e) {
      /* ignore */
    }
  }

  startBootLoad();

  var tries = 0;
  var timer = setInterval(function () {
    tries++;
    try {
      if (typeof global.__require === 'function') {
        if (global.OfflineAPI) {
          global.OfflineAPI.patchHttp();
        }
        forceVietnameseLanguage();
        hookResult();
        hookSetting();
        hookUpdateReward();
      }
    } catch (e) {
      /* ignore */
    }
    if ((hookedResult && hookedSetting && hookedUpdateReward && bootLoadStarted && languageForced) || tries > 6000) {
      clearInterval(timer);
    }
  }, 50);

  document.addEventListener('visibilitychange', onVisibilityFlush);

  global.ArcadeAdapter = {
    hookResult: hookResult,
    hookSetting: hookSetting,
    startBootLoad: startBootLoad,
    forceVietnameseLanguage: forceVietnameseLanguage
  };
})(window);
