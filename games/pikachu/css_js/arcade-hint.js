/**

 * Arcade — gợi ý: 3 lượt free/bàn, xem QC 1 lần (+3), tối đa 6/bàn.

 * Hết 6 lượt hoặc đã xem QC mà hết lượt → disable nút Gợi ý.

 */

(function (global) {

  'use strict';



  var FREE_HINTS_PER_LEVEL = 3;

  var AD_BONUS_HINTS = 3;

  var MAX_HINTS_PER_LEVEL = 6;



  var hintsLeft = FREE_HINTS_PER_LEVEL;

  var hintAdWatchedThisLevel = false;

  var activeHintPair = null;

  var adFreezeActive = false;
  var adSafetyTimer = 0;
  var AD_SAFETY_MS = 90000;



  var hintBtn = null;

  var hintCountEl = null;

  var hintAdBadgeEl = null;



  function canWatchAd() {

    return typeof global.GVAdBreak === 'function';

  }



  function canOfferHintAd() {

    return hintsLeft <= 0 && canWatchAd() && !hintAdWatchedThisLevel;

  }



  function isFullyExhausted() {

    return hintsLeft <= 0 && !canOfferHintAd();

  }



  function isBlocked() {

    return !!global.gvAwaitingScore || !!global.gvLeaderboardPaused || adFreezeActive;

  }



  function setAdBadge(show) {

    if (!hintAdBadgeEl) {

      return;

    }

    hintAdBadgeEl.hidden = !show;

    if (show) {

      hintAdBadgeEl.removeAttribute('aria-hidden');

    } else {

      hintAdBadgeEl.setAttribute('aria-hidden', 'true');

    }

  }



  function refreshHintUI() {

    var showAdMode = canOfferHintAd();

    var fullyExhausted = isFullyExhausted();



    if (hintCountEl) {

      if (showAdMode) {

        hintCountEl.hidden = true;

      } else {

        hintCountEl.hidden = false;

        hintCountEl.textContent = String(hintsLeft);

      }

    }



    setAdBadge(showAdMode);



    if (hintBtn) {

      hintBtn.classList.toggle('gv-hint-needs-ad', showAdMode);

      hintBtn.classList.toggle('gv-hint-exhausted', fullyExhausted);

      hintBtn.disabled = fullyExhausted;

      hintBtn.setAttribute('aria-disabled', fullyExhausted ? 'true' : 'false');

    }

  }



  function isHintPairValid(pair) {

    if (!pair || !global.el) {

      return false;

    }



    var board = global.el;

    var v1 = board.arrValue[pair.x][pair.y];

    var v2 = board.arrValue[pair.wx][pair.wy];



    return v1 > 0 && v2 > 0 && v1 === v2;

  }



  function applyHintHighlight(pair) {

    if (!pair || !global.el) {

      return;

    }



    var board = global.el;



    if (board.arrPiece[pair.x] && board.arrPiece[pair.x][pair.y]) {

      var pieceA = board.arrPiece[pair.x][pair.y];

      if (typeof pieceA.setHintMark === 'function') {

        pieceA.setHintMark(true);

      } else {

        pieceA.setSelected(50);

      }

    }

    if (board.arrPiece[pair.wx] && board.arrPiece[pair.wx][pair.wy]) {

      var pieceB = board.arrPiece[pair.wx][pair.wy];

      if (typeof pieceB.setHintMark === 'function') {

        pieceB.setHintMark(true);

      } else {

        pieceB.setSelected(50);

      }

    }

  }



  function clearHintVisual(pair) {

    if (!pair || !global.el) {

      return;

    }



    var board = global.el;



    if (board.arrPiece[pair.x] && board.arrPiece[pair.x][pair.y]) {

      var pieceA = board.arrPiece[pair.x][pair.y];

      if (typeof pieceA.setHintMark === 'function') {

        pieceA.setHintMark(false);

      }

      pieceA.setSelected(100);

    }

    if (board.arrPiece[pair.wx] && board.arrPiece[pair.wx][pair.wy]) {

      var pieceB = board.arrPiece[pair.wx][pair.wy];

      if (typeof pieceB.setHintMark === 'function') {

        pieceB.setHintMark(false);

      }

      pieceB.setSelected(100);

    }

  }



  function clearHighlight() {

    if (activeHintPair) {

      clearHintVisual(activeHintPair);

    }

    activeHintPair = null;

  }



  function refreshActiveHint() {

    if (!isHintPairValid(activeHintPair)) {

      activeHintPair = null;

      return false;

    }



    applyHintHighlight(activeHintPair);

    return true;

  }



  function activateNewHint() {

    if (!global.el || typeof global.findCheat !== 'function') {

      return false;

    }



    var rect = global.findCheat(global.el.arrValue);

    if (!rect) {

      if (typeof global.gvShowNotify === 'function') {

        global.gvShowNotify('Không còn cặp nào có thể loại bỏ');

      }

      return false;

    }



    if (activeHintPair) {

      clearHintVisual(activeHintPair);

    }



    activeHintPair = {

      x: rect.x,

      y: rect.y,

      wx: rect.width,

      wy: rect.height

    };

    applyHintHighlight(activeHintPair);

    return true;

  }



  function syncAfterBoardChange() {

    if (!activeHintPair || !global.el) {

      return;

    }



    var board = global.el;

    var p = activeHintPair;

    var v1 = board.arrValue[p.x][p.y];

    var v2 = board.arrValue[p.wx][p.wy];



    if (v1 === 0 && v2 === 0) {

      activeHintPair = null;

      return;

    }



    if (v1 === 0 || v2 === 0 || v1 !== v2) {

      clearHighlight();

      return;

    }



    applyHintHighlight(activeHintPair);

  }



  function invalidateHint() {

    clearHighlight();

  }



  function pauseForAd() {
    adFreezeActive = true;
    if (adSafetyTimer) {
      clearTimeout(adSafetyTimer);
      adSafetyTimer = 0;
    }
    adSafetyTimer = setTimeout(function () {
      adSafetyTimer = 0;
      if (adFreezeActive) {
        console.warn('[Arcade] Timeout QC gợi ý — tự resumeAfterAd');
        resumeAfterAd();
      }
    }, AD_SAFETY_MS);

    var bgm = document.getElementById('gv-bgm');
    if (bgm && !bgm.paused) {
      bgm._gvHintPaused = true;
      bgm.pause();
    }
  }

  function resumeAfterAd() {
    if (adSafetyTimer) {
      clearTimeout(adSafetyTimer);
      adSafetyTimer = 0;
    }
    adFreezeActive = false;

    var bgm = document.getElementById('gv-bgm');
    if (bgm && bgm._gvHintPaused) {
      bgm._gvHintPaused = false;
      if (global.ArcadeAudio && typeof global.ArcadeAudio.tryStart === 'function') {
        global.ArcadeAudio.tryStart();
      } else {
        bgm.play().catch(function () {});
      }
    }
  }



  function requestHintAd() {

    if (!canOfferHintAd()) {

      return;

    }



    var msg = 'Xem quảng cáo để nhận thêm 3 lượt gợi ý?';



    function runAd() {

      pauseForAd();



      function onAdDone() {

        try {

          hintAdWatchedThisLevel = true;

          hintsLeft = Math.min(hintsLeft + AD_BONUS_HINTS, MAX_HINTS_PER_LEVEL);

          refreshHintUI();

        } finally {

          resumeAfterAd();

        }

      }



      try {

        if (canWatchAd()) {

          global.GVAdBreak(onAdDone);

        } else {

          onAdDone();

        }

      } catch (err) {

        console.warn('[Arcade] GVAdBreak lỗi', err);

        resumeAfterAd();

      }

    }



    if (global.ArcadeNotify && typeof global.ArcadeNotify.confirm === 'function') {

      global.ArcadeNotify.confirm(msg, runAd);

    } else if (global.confirm(msg)) {

      runAd();

    }

  }



  function onHintClick() {

    if (isBlocked()) {

      return;

    }

    if (hintBtn && hintBtn.disabled) {

      return;

    }



    if (hintsLeft <= 0) {

      if (canOfferHintAd()) {

        requestHintAd();

      } else if (isFullyExhausted()) {

        if (typeof global.gvShowNotify === 'function') {

          global.gvShowNotify(

            hintAdWatchedThisLevel

              ? 'Bạn đã hết lượt gợi ý trong bàn này'

              : 'Bạn đã hết lượt gợi ý'

          );

        }

      }

      return;

    }



    if (isHintPairValid(activeHintPair)) {

      refreshActiveHint();

      return;

    }



    if (!activateNewHint()) {

      return;

    }



    hintsLeft--;

    refreshHintUI();

  }



  function resetForLevel() {

    hintsLeft = FREE_HINTS_PER_LEVEL;

    hintAdWatchedThisLevel = false;

    clearHighlight();

    refreshHintUI();

  }



  function bindHintButton() {

    hintBtn = document.getElementById('gv-btn-hint');

    hintCountEl = document.getElementById('gv-hint-count');

    hintAdBadgeEl = document.getElementById('gv-hint-ad-badge');



    if (!hintBtn) {

      return;

    }



    hintBtn.addEventListener('click', onHintClick);

    refreshHintUI();

  }



  if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', bindHintButton);

  } else {

    bindHintButton();

  }



  global.ArcadeHint = {
    resetForLevel: resetForLevel,
    clearHighlight: clearHighlight,
    syncAfterBoardChange: syncAfterBoardChange,
    invalidateHint: invalidateHint,
    refreshUI: refreshHintUI,
    isAdFreezeActive: function () {
      return adFreezeActive;
    }
  };

})(window);


