/**

 * Arcade bridge — DataManager cloud sync, win/lose high-score gate, logo.

 */

(function (global) {

  'use strict';



  var LOG = '[ArcadeBridge]';

  var LOGO_ID = 'gv-arcade-logo';

  var LOGO_SRC = 'https://localhost/themes/default/images/logo-2022.svg';

  var POPUP_DELAY_MS = 800;



  var dataManagerPatched = false;

  var gameplayPatched = false;

  var logoMounted = false;

  var pollTimer = 0;

  var directorBound = false;



  function hist() {

    return global.ArcadeHistory || null;

  }



  function wrapMethod(proto, name, buildWrapper) {

    var orig = proto[name];

    if (typeof orig !== 'function') return false;

    if (orig._gvWrapped) return true;

    var wrapped = buildWrapper(orig);

    wrapped._gvWrapped = true;

    proto[name] = wrapped;

    return true;

  }



  function getClass(name) {

    try {

      if (global.cc && global.cc.js && typeof global.cc.js.getClassByName === 'function') {

        return global.cc.js.getClassByName(name);

      }

    } catch (e) {

      /* ignore */

    }

    return null;

  }



  function findClassByMethod(methodName) {

    try {

      if (!global.cc || !global.cc.director) return null;

      var scene = global.cc.director.getScene();

      if (!scene || typeof scene.getComponentsInChildren !== 'function') return null;

      var comps = scene.getComponentsInChildren(global.cc.Component);

      var i, c;

      for (i = 0; i < comps.length; i++) {

        c = comps[i];

        if (c && typeof c[methodName] === 'function' && c.constructor) {

          return c.constructor;

        }

      }

    } catch (e) {

      /* ignore */

    }

    return null;

  }



  function resolveClass(names, methodHint) {

    var i, cls;

    for (i = 0; i < names.length; i++) {

      cls = getClass(names[i]);

      if (cls && cls.prototype) return cls;

    }

    if (methodHint) {

      cls = findClassByMethod(methodHint);

      if (cls && cls.prototype) return cls;

    }

    return null;

  }



  function getSceneName() {

    try {

      var scene = global.cc && global.cc.director && global.cc.director.getScene();

      if (!scene) return '';

      return String(scene.name || scene._name || '');

    } catch (e) {

      return '';

    }

  }



  /** Map active scene to high-score mode id. */

  function detectScoreMode() {

    var name = getSceneName();

    if (name === 'game2') return 'endless';

    if (name === 'game3') return 'adventure';

    return 'classic';

  }



  function readScoreFromController(ctrl) {

    if (!ctrl) return 0;

    return Math.max(0, Math.floor(Number(ctrl.curMoney) || 0));

  }



  /** Endless layer win: capture curMoney, try high score, always sync cloud. */

  function onEndlessLayerComplete(ctrl) {

    var h = hist();

    if (!ctrl || !(ctrl.curMoney >= ctrl.maxMoney) || !h) {

      return Promise.resolve(null);

    }



    var layerScore = readScoreFromController(ctrl);

    var prevBest =

      typeof h.getModeBest === 'function' ? h.getModeBest('endless') : 0;



    var highScorePromise = Promise.resolve(false);

    if (typeof h.offerNewHighScore === 'function') {

      highScorePromise = h.offerNewHighScore('endless', layerScore);

    }



    return highScorePromise.then(function (improved) {

      if (!improved) {

        console.log(

          LOG,

          'endless layer complete',

          layerScore,

          '| best endless:',

          prevBest,

          layerScore > prevBest

            ? '(syncing progress)'

            : '(no new record, syncing progress)'

        );

      }



      if (typeof h.saveProgress === 'function') {

        return h.saveProgress();

      }

      return null;

    });

  }



  function attachEndlessLayerPromise(self) {

    if (self.curMoney >= self.maxMoney) {

      self._gvHighScorePromise = onEndlessLayerComplete(self);

    } else {

      self._gvHighScorePromise = null;

    }

  }



  function offerScoreSoon(mode, score, thenFn) {

    var h = hist();

    var run = function () {

      if (!h || typeof h.offerNewHighScore !== 'function') {

        if (typeof thenFn === 'function') thenFn();

        return;

      }

      h.offerNewHighScore(mode, score).then(

        function () {

          if (typeof thenFn === 'function') thenFn();

        },

        function () {

          if (typeof thenFn === 'function') thenFn();

        }

      );

    };

    setTimeout(run, POPUP_DELAY_MS);

  }



  function patchDataManager() {

    if (dataManagerPatched) return !!global.DataManager;

    var dm = global.DataManager;

    if (!dm || typeof dm.save !== 'function') return false;



    var origSave = dm.save;

    if (!origSave._gvWrapped) {

      dm.save = function () {

        var result = origSave.apply(this, arguments);

        var h = hist();

        if (h && typeof h.scheduleSaveProgress === 'function') {

          h.scheduleSaveProgress();

        }

        return result;

      };

      dm.save._gvWrapped = true;

    }



    if (typeof dm.initData === 'function' && !dm.initData._gvWrapped) {

      var origInit = dm.initData;

      dm.initData = function (cb) {

        var self = this;

        var h = hist();

        var wrappedCb = function () {

          if (h && typeof h.restoreProgress === 'function') {

            h.restoreProgress().finally(function () {

              if (typeof cb === 'function') cb();

            });

          } else if (typeof cb === 'function') {

            cb();

          }

        };

        return origInit.call(self, wrappedCb);

      };

      dm.initData._gvWrapped = true;

    }



    dataManagerPatched = true;

    console.log(LOG, 'DataManager patched');

    if (dm.inited) {

      var h2 = hist();

      if (h2 && typeof h2.restoreProgress === 'function') {

        h2.restoreProgress();

      }

    }

    return true;

  }



  function patchDstInfo() {

    var Cls = resolveClass(['dstInfo'], 'showWin');

    if (!Cls || !Cls.prototype) return false;

    var proto = Cls.prototype;

    var ok = false;



    ok =

      wrapMethod(proto, 'showWin', function (orig) {

        return function (root) {

          var result = orig.apply(this, arguments);

          var mode = detectScoreMode();

          var score = readScoreFromController(root || this.root);

          offerScoreSoon(mode, score, null);

          return result;

        };

      }) || ok;



    ok =

      wrapMethod(proto, 'showLose', function (orig) {

        return function () {

          var result = orig.apply(this, arguments);

          var mode = detectScoreMode();

          var score = readScoreFromController(this.root);

          offerScoreSoon(mode, score, null);

          return result;

        };

      }) || ok;



    ok =

      wrapMethod(proto, 'hide2', function (orig) {

        return function () {

          var self = this;

          var args = arguments;

          var h = hist();

          var proceed = function () {

            orig.apply(self, args);

          };

          if (!h || !h.isScoreGateOpen || !h.isScoreGateOpen()) {

            return proceed();

          }

          var wait = function () {

            if (h.isScoreGateOpen()) {

              setTimeout(wait, 100);

              return;

            }

            proceed();

          };

          wait();

        };

      }) || ok;



    return ok;

  }



  function patchGamelogic2() {

    var Cls = resolveClass(['gamelogic2'], 'goToNext');

    if (!Cls || !Cls.prototype) return false;

    var proto = Cls.prototype;

    var ok = false;



    ok =

      wrapMethod(proto, 'gameover', function (orig) {

        return function () {

          attachEndlessLayerPromise(this);

          return orig.apply(this, arguments);

        };

      }) || ok;



    ok =

      wrapMethod(proto, 'onNext', function (orig) {

        return function () {

          attachEndlessLayerPromise(this);

          return orig.apply(this, arguments);

        };

      }) || ok;



    ok =

      wrapMethod(proto, 'goToNext', function (orig) {

        return function () {

          var self = this;

          var args = arguments;

          var pending = self._gvHighScorePromise;

          self._gvHighScorePromise = null;

          return Promise.resolve(pending).then(function () {

            return orig.apply(self, args);

          });

        };

      }) || ok;



    return ok;

  }



  function patchLoseui2() {

    var Cls = resolveClass(['loseui2'], 'show');

    if (!Cls || !Cls.prototype) return false;

    return wrapMethod(Cls.prototype, 'show', function (orig) {

      return function (root) {

        var result = orig.apply(this, arguments);

        var score = readScoreFromController(root || this.root);

        offerScoreSoon('endless', score, null);

        return result;

      };

    });

  }



  function patchGameplay() {

    if (gameplayPatched) return true;

    var a = patchDstInfo();

    var b = patchGamelogic2();

    var c = patchLoseui2();

    if (a && b && c) {

      gameplayPatched = true;

      console.log(LOG, 'gameplay hooks ready', { dstInfo: a, gamelogic2: b, loseui2: c });

    } else if (a || b || c) {

      console.log(LOG, 'gameplay hooks partial', { dstInfo: a, gamelogic2: b, loseui2: c });

    }

    return a || b || c;

  }



  function isSplashVisible() {

    var splash = document.getElementById('splash');

    if (!splash) return false;

    if (splash.style.display === 'none') return false;

    if (splash.hasAttribute('hidden')) return false;

    try {

      var style = global.getComputedStyle(splash);

      if (style.display === 'none' || style.visibility === 'hidden') return false;

    } catch (e) {

      /* ignore */

    }

    return splash.offsetParent !== null || splash.clientHeight > 0;

  }



  function ensureLogo() {

    var logo = document.getElementById(LOGO_ID);

    if (!logo) {

      logo = document.createElement('div');

      logo.id = LOGO_ID;

      logo.className = 'arcade-logo';

      logo.setAttribute('aria-hidden', 'true');

      logo.hidden = true;

      var img = document.createElement('img');

      img.alt = 'Arcade';

      img.src = LOGO_SRC;

      img.draggable = false;

      logo.appendChild(img);

      document.body.appendChild(logo);

    }

    logoMounted = true;

    return logo;

  }



  function updateLogoVisibility() {

    var logo = ensureLogo();

    logo.hidden = isSplashVisible();

  }



  function bindDirector() {

    if (directorBound) return;

    if (!global.cc || !global.cc.director || typeof global.cc.director.on !== 'function') {

      return;

    }

    directorBound = true;

    try {

      global.cc.director.on(global.cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {

        gameplayPatched = false;

        patchGameplay();

        updateLogoVisibility();

        if (global.ArcadeInput && typeof global.ArcadeInput.focusCanvas === 'function') {

          global.ArcadeInput.focusCanvas();

        }

      });

    } catch (e) {

      console.warn(LOG, 'director bind failed', e);

    }

  }



  function tick() {

    patchDataManager();

    patchGameplay();

    bindDirector();

    updateLogoVisibility();

  }



  function start() {

    ensureLogo();

    tick();

    if (pollTimer) clearInterval(pollTimer);

    pollTimer = setInterval(tick, 500);

    setTimeout(function () {

      if (pollTimer) {

        clearInterval(pollTimer);

        pollTimer = setInterval(tick, 2000);

      }

    }, 15000);

  }



  if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', start);

  } else {

    start();

  }



  global.ArcadeBridge = {

    patchNow: tick,

    updateLogoVisibility: updateLogoVisibility,

    detectScoreMode: detectScoreMode

  };

})(window);


