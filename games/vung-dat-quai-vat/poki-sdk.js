/**
 * PokiSDK stub for Arcade — no poki-sdk-core (no Poki interstitial/rewarded).
 * rewardedBreak → ArcadeAds / GVAdBreak; commercialBreak → no-op (no mid-game QC).
 */
(function () {
  'use strict';

  function getUrlParam(name) {
    var m = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return m && decodeURIComponent(m[1].replace(/\+/g, ' '));
  }

  function noop() {}

  function resolvePromise() {
    return Promise.resolve();
  }

  function runRewardedViaBridge() {
    return new Promise(function (resolve) {
      if (window.ArcadeAds && typeof window.ArcadeAds.showRewardAd === 'function') {
        window.ArcadeAds.showRewardAd(
          function () {
            resolve(true);
          },
          function () {
            resolve(false);
          }
        );
        return;
      }
      if (typeof window.GVAdBreak === 'function') {
        try {
          window.GVAdBreak(function () {
            resolve(true);
          });
          return;
        } catch (e) {
          console.warn('[PokiSDK stub] GVAdBreak error', e);
        }
      }
      resolve(false);
    });
  }

  function runCommercialBreak() {
    return Promise.resolve(true);
  }

  window.PokiSDK = {
    init: resolvePromise,
    initWithVideoHB: resolvePromise,
    commercialBreak: runCommercialBreak,
    rewardedBreak: runRewardedViaBridge,
    displayAd: noop,
    destroyAd: noop,
    customEvent: noop,
    getLeaderboard: function () {
      return Promise.resolve([]);
    },
    getSharableURL: function () {
      return Promise.reject();
    },
    shareableURL: function () {
      return Promise.resolve(location.href);
    },
    getURLParam: function (n) {
      return getUrlParam('gd' + n) || getUrlParam(n) || '';
    },
    disableProgrammatic: noop,
    gameLoadingStart: noop,
    gameLoadingFinished: noop,
    gameInteractive: noop,
    roundStart: noop,
    roundEnd: noop,
    muteAd: noop,
    setDebug: noop,
    gameplayStart: noop,
    gameplayStop: noop,
    gameLoadingProgress: noop,
    happyTime: noop,
    setPlayerAge: noop,
    togglePlayerAdvertisingConsent: noop,
    toggleNonPersonalized: noop,
    setConsentString: noop,
    logError: noop,
    sendHighscore: noop,
    captureError: noop,
    isAdBlocked: function () {
      return false;
    },
    setDebugTouchOverlayController: noop
  };
})();
