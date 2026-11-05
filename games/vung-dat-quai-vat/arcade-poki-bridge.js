/**

 * Arcade — patch PokiSDK ads to use GVAdBreak (Lands of Blight).

 * commercialBreak: no-op (no mid-game QC). rewardedBreak: GVAdBreak (ADS/REROLL/REVIVE).

 */

(function (global) {

  'use strict';



  function markGameReady(source) {

    if (global.__gvGameReady) return;

    global.__gvGameReady = true;

    try {

      global.dispatchEvent(new CustomEvent('gv-game-ready', { detail: { source: source || 'unknown' } }));

    } catch (e) {

      try {

        var ev = document.createEvent('Event');

        ev.initEvent('gv-game-ready', true, true);

        global.dispatchEvent(ev);

      } catch (e2) {

        /* ignore */

      }

    }

  }



  function notifyRun(method, arg) {

    try {

      var run = global.ArcadeRun;

      if (run && typeof run[method] === 'function') {

        run[method](arg);

      }

    } catch (e) {

      console.warn('[ArcadePokiBridge] run hook error', e);

    }

  }



  function notifyScore(method, arg) {

    try {

      var score = global.ArcadeScore;

      if (score && typeof score[method] === 'function') {

        score[method](arg);

      }

    } catch (e) {

      console.warn('[ArcadePokiBridge] score hook error', e);

    }

  }



  function runRewardedAd() {

    return new Promise(function (resolve) {

      if (global.ArcadeAds && typeof global.ArcadeAds.showRewardAd === 'function') {

        global.ArcadeAds.showRewardAd(

          function () {

            resolve(true);

          },

          function () {

            resolve(false);

          }

        );

        return;

      }

      console.warn('[ArcadePokiBridge] ArcadeAds.showRewardAd unavailable');

      resolve(false);

    });

  }



  function commercialBreakImpl() {

    markGameReady('commercialBreak');

    notifyScore('onCommercialBreak');

    return Promise.resolve(true);

  }



  function rewardedBreakImpl() {

    markGameReady('rewardedBreak');

    notifyRun('onRewardedBreakStart');

    return runRewardedAd().then(function (ok) {

      notifyRun('onRewardedBreak', !!ok);

      notifyScore('onRewardedBreak', !!ok);

      return ok;

    });

  }



  function lockAdMethods(sdk) {

    if (!sdk) return;

    try {

      Object.defineProperty(sdk, 'commercialBreak', {

        value: commercialBreakImpl,

        writable: false,

        configurable: true,

        enumerable: true

      });

      Object.defineProperty(sdk, 'rewardedBreak', {

        value: rewardedBreakImpl,

        writable: false,

        configurable: true,

        enumerable: true

      });

    } catch (e) {

      sdk.commercialBreak = commercialBreakImpl;

      sdk.rewardedBreak = rewardedBreakImpl;

    }

  }



  function patchSdk(sdk) {

    if (!sdk) return;



    lockAdMethods(sdk);



    var origGameplayStart = sdk.gameplayStart;

    if (typeof origGameplayStart === 'function' && !origGameplayStart.__gvWrapped) {

      sdk.gameplayStart = function () {

        markGameReady('gameplayStart');

        notifyRun('onGameplayStart');

        notifyScore('onGameplayStart');

        return origGameplayStart.apply(this, arguments);

      };

      sdk.gameplayStart.__gvWrapped = true;

    } else if (typeof sdk.gameplayStart !== 'function') {

      sdk.gameplayStart = function () {

        markGameReady('gameplayStart');

        notifyRun('onGameplayStart');

        notifyScore('onGameplayStart');

      };

      sdk.gameplayStart.__gvWrapped = true;

    }



    var origGameplayStop = sdk.gameplayStop;

    if (typeof origGameplayStop === 'function' && !origGameplayStop.__gvWrapped) {

      sdk.gameplayStop = function () {

        notifyRun('onGameplayStop');

        notifyScore('onGameplayStop');

        return origGameplayStop.apply(this, arguments);

      };

      sdk.gameplayStop.__gvWrapped = true;

    } else if (typeof sdk.gameplayStop !== 'function') {

      sdk.gameplayStop = function () {

        notifyRun('onGameplayStop');

        notifyScore('onGameplayStop');

      };

      sdk.gameplayStop.__gvWrapped = true;

    }



    global.__gvMarkGameReady = markGameReady;

  }



  patchSdk(global.PokiSDK);



  setInterval(function () {

    patchSdk(global.PokiSDK);

  }, 1500);



  global.addEventListener('load', function () {

    patchSdk(global.PokiSDK);

  });



  global.__gvPokiBridge = true;

})(window);

