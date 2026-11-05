/**
 * Arcade adapter — cầu nối Cocos: i18n, ads, save round / level, gửi điểm (§9).
 *
 * Win stage: pause → popup GV.saveScore(level) → đóng/gửi → resume → claim/close → stage mới.
 */
(function (global) {
  'use strict';

  var hookedBigResult = false;
  var hookedNewRecord = false;
  var bootLoadStarted = false;
  var seededBeforeInit = false;

  function getClassByName(name) {
    try {
      if (cc && cc.js && typeof cc.js.getClassByName === 'function') {
        var cls = cc.js.getClassByName(name);
        if (cls) {
          return cls;
        }
      }
    } catch (e) {
      /* ignore */
    }
    try {
      if (typeof __require === 'function') {
        return __require(name);
      }
    } catch (e2) {
      /* ignore */
    }
    return null;
  }

  function wrapMethod(proto, name, beforeFn, afterFn) {
    if (!proto || typeof proto[name] !== 'function' || proto[name].__gvWrapped) {
      return;
    }
    var original = proto[name];
    proto[name] = function () {
      var self = this;
      var args = arguments;
      if (beforeFn) {
        try {
          beforeFn(self, args);
        } catch (e) {
          /* ignore */
        }
      }
      var result = original.apply(self, args);
      if (afterFn) {
        try {
          afterFn(self, args, result);
        } catch (e2) {
          /* ignore */
        }
      }
      return result;
    };
    proto[name].__gvWrapped = true;
  }

  /**
   * Wrap claim/close: thắng stage → hiện gửi điểm trước, xong mới chạy logic gốc + save.
   */
  function wrapWinScoreGate(proto, name) {
    if (!proto || typeof proto[name] !== 'function' || proto[name].__gvScoreGate) {
      return;
    }
    var original = proto[name];
    proto[name] = function () {
      var self = this;
      var args = arguments;

      var runOriginalAndSave = function () {
        try {
          original.apply(self, args);
        } catch (e) {
          console.warn('[ArcadeAdapter] ' + name + ' after score failed', e);
        }
        onRoundComplete(self);
      };

      // Thua: không popup điểm
      if (!self || !self.suc) {
        runOriginalAndSave();
        return;
      }

      // Đã hiện popup: nếu gate vẫn mở (countdown auto-claim / click trùng) → bỏ qua, giữ pause.
      // Gate đã đóng → chạy original (vd. claim xong gọi closeUI).
      if (self.__gvScorePresented) {
        var gateOpen =
          global.ArcadeScore && typeof global.ArcadeScore.isScoreGateOpen === 'function'
            ? global.ArcadeScore.isScoreGateOpen()
            : false;
        if (gateOpen) {
          console.log('[ArcadeAdapter] ' + name + ' ignored — score popup còn mở');
          try {
            if (typeof global.ArcadeScore.freezeBigResultTimer === 'function') {
              global.ArcadeScore.freezeBigResultTimer();
            }
          } catch (eFreeze) {
            /* ignore */
          }
          return;
        }
        runOriginalAndSave();
        return;
      }

      self.__gvScorePresented = true;

      try {
        if (global.ArcadeScore && typeof global.ArcadeScore.presentScoreThenContinue === 'function') {
          var level =
            typeof global.ArcadeScore.readGameplayLevel === 'function'
              ? global.ArcadeScore.readGameplayLevel()
              : 0;
          global.ArcadeScore.presentScoreThenContinue(level, runOriginalAndSave);
          return;
        }
      } catch (e2) {
        console.warn('[ArcadeAdapter] presentScore failed', e2);
      }

      runOriginalAndSave();
    };
    proto[name].__gvScoreGate = true;
    proto[name].__gvWrapped = true;
  }

  function onRoundComplete(ctx) {
    if (ctx && ctx.__gvRoundSaved) {
      return;
    }
    if (ctx) {
      ctx.__gvRoundSaved = true;
    }

    try {
      if (global.ArcadeSave && global.ArcadeSave.saveAfterRound) {
        global.ArcadeSave.saveAfterRound();
      }
    } catch (e2) {
      console.warn('[ArcadeAdapter] saveAfterRound failed', e2);
    }
  }

  function saveProgress() {
    try {
      if (global.ArcadeSave && global.ArcadeSave.saveProgressNow) {
        global.ArcadeSave.saveProgressNow();
      } else if (global.ArcadeSave && global.ArcadeSave.saveAfterRound) {
        global.ArcadeSave.saveAfterRound();
      }
    } catch (e) {
      console.warn('[ArcadeAdapter] saveProgress failed', e);
    }
  }

  function hookBigResult() {
    if (hookedBigResult) {
      return true;
    }
    var Cls = getClassByName('bigResult');
    if (!Cls || !Cls.prototype) {
      return false;
    }
    var proto = Cls.prototype;

    wrapMethod(proto, 'show', function (self) {
      if (self) {
        self.__gvRoundSaved = false;
        self.__gvScorePresented = false;
      }
    }, null);

    // Thắng → pause + popup điểm → resume → claim/close → stage mới
    wrapWinScoreGate(proto, 'claim');
    wrapWinScoreGate(proto, 'doubleClaim');
    wrapWinScoreGate(proto, 'closeUI');

    hookedBigResult = true;
    console.log('[ArcadeAdapter] bigResult hooked (score gate on win)');
    return true;
  }

  function hookNewRecord() {
    if (hookedNewRecord) {
      return true;
    }
    var Cls = getClassByName('newRecordUI');
    if (!Cls || !Cls.prototype) {
      return false;
    }
    wrapMethod(Cls.prototype, 'showUI', null, function () {
      saveProgress();
    });
    wrapMethod(Cls.prototype, 'closeUI', function () {
      saveProgress();
    }, null);

    hookedNewRecord = true;
    console.log('[ArcadeAdapter] newRecordUI hooked');
    return true;
  }

  function seedBeforeInit() {
    if (seededBeforeInit) {
      return;
    }
    try {
      if (global.ArcadeSave) {
        if (global.ArcadeSave.patchGameSnacksStorage) {
          global.ArcadeSave.patchGameSnacksStorage();
        }
        if (global.ArcadeSave.seedUserdataIntoGameStorage) {
          global.ArcadeSave.seedUserdataIntoGameStorage();
        }
      }
      if (global.cc && cc.Mgr) {
        seededBeforeInit = true;
      }
    } catch (e) {
      /* ignore */
    }
  }

  function startBootLoadWhenReady() {
    if (bootLoadStarted) {
      return;
    }
    if (!cc.Mgr || cc.Mgr.initData !== true) {
      return;
    }
    bootLoadStarted = true;
    if (global.ArcadeSave && global.ArcadeSave.bootLoad) {
      global.ArcadeSave.bootLoad();
    }
    if (global.ArcadeSave && global.ArcadeSave.startForceMirrorInterval) {
      global.ArcadeSave.startForceMirrorInterval();
    }
    if (global.ArcadeSave && global.ArcadeSave.forceMirrorToBrowserLocal) {
      global.ArcadeSave.forceMirrorToBrowserLocal();
    }
    if (global.ArcadeSave && global.ArcadeSave.ensureProgressAfterInit) {
      setTimeout(function () {
        global.ArcadeSave.ensureProgressAfterInit();
      }, 1000);
      setTimeout(function () {
        global.ArcadeSave.ensureProgressAfterInit();
      }, 2500);
    }
  }

  function tick() {
    seedBeforeInit();
    try {
      if (global.ArcadeI18n && global.ArcadeI18n.apply) {
        global.ArcadeI18n.apply();
      }
    } catch (e) {
      /* ignore */
    }
    try {
      if (global.ArcadeAds && global.ArcadeAds.wrapAdmob) {
        global.ArcadeAds.wrapAdmob();
      }
    } catch (e2) {
      /* ignore */
    }
    hookBigResult();
    hookNewRecord();
    startBootLoadWhenReady();
  }

  function start() {
    seedBeforeInit();
    var early = 0;
    var earlyTimer = setInterval(function () {
      early++;
      seedBeforeInit();
      if (seededBeforeInit || early > 80) {
        clearInterval(earlyTimer);
      }
    }, 50);

    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      tick();
      if ((hookedBigResult && bootLoadStarted) || tries > 180) {
        if (tries > 180) {
          clearInterval(timer);
          setInterval(function () {
            try {
              if (global.ArcadeI18n && global.ArcadeI18n.apply) {
                global.ArcadeI18n.apply();
              }
              hookBigResult();
              hookNewRecord();
            } catch (e) {
              /* ignore */
            }
          }, 3000);
        }
      }
    }, 400);

    if (global.ArcadeI18n && global.ArcadeI18n.start) {
      global.ArcadeI18n.start();
    }
    if (global.ArcadeAds && global.ArcadeAds.start) {
      global.ArcadeAds.start();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

  global.ArcadeAdapter = {
    start: start,
    hookBigResult: hookBigResult,
    hookNewRecord: hookNewRecord
  };
})(window);
