/**
 * Tích hợp quảng cáo Arcade (GVAdBreak)
 */
const GVAds = (function () {
  'use strict';

  function isReady() {
    return typeof window.GVAdBreak === 'function';
  }

  /**
   * Hiển thị quảng cáo thưởng, gọi onComplete sau khi QC kết thúc
   * @param {Function} onComplete
   * @param {Function} [onUnavailable]
   */
  function showRewarded(onComplete, onUnavailable) {
    if (isReady()) {
      window.GVAdBreak(function () {
        if (typeof onComplete === 'function') onComplete();
      });
      return;
    }
    if (typeof onUnavailable === 'function') onUnavailable();
    else if (typeof onComplete === 'function') onComplete();
  }

  return { isReady, showRewarded };
})();
