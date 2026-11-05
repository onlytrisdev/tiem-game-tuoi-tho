/**
 * Arcade run state — tối thiểu cho revive sau QC thưởng (không điểm / không cloud).
 */
(function (global) {
  'use strict';

  var runActive = false;
  var awaitingNewRun = true;
  var loseCandidate = false;

  function isAdsBusy() {
    try {
      if (global.ArcadeAds && typeof global.ArcadeAds.isAdsResuming === 'function') {
        if (global.ArcadeAds.isAdsResuming()) return true;
      }
      if (global.ArcadeAds && typeof global.ArcadeAds.isRewardInFlight === 'function') {
        return !!global.ArcadeAds.isRewardInFlight();
      }
    } catch (e) {
      /* ignore */
    }
    return false;
  }

  function clearLoseFlags() {
    loseCandidate = false;
  }

  function onGameplayStart() {
    if (isAdsBusy()) return;
    runActive = true;
    awaitingNewRun = false;
    clearLoseFlags();
  }

  function onGameplayStop() {
    if (isAdsBusy()) return;
    if (!runActive) return;
    loseCandidate = true;
  }

  function onCommercialBreak() {
    /* Không popup điểm — commercial break no-op */
  }

  function onRewardedBreakStart() {
    /* REVIVE / ADD MONEY — pause handled by ArcadeAds */
  }

  function onRewardedBreak(success) {
    if (!success) return;
    loseCandidate = false;
    awaitingNewRun = false;
    runActive = true;
    console.info('[ArcadeRun] rewarded ok — continue run');
  }

  global.ArcadeRun = {
    onGameplayStart: onGameplayStart,
    onGameplayStop: onGameplayStop,
    onCommercialBreak: onCommercialBreak,
    onRewardedBreakStart: onRewardedBreakStart,
    onRewardedBreak: onRewardedBreak
  };
})(window);
