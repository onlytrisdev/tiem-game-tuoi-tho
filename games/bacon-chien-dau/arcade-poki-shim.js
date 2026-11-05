/* Minimal Poki lifecycle compatibility for the exported GameMaker game.
   Advertising is owned by Arcade (see cqh_poki.js). */
(function (win) {
  "use strict";
  function noOp() {}
  win.PokiSDK = {
    init: function () { return Promise.resolve(); },
    setDebug: noOp, gameLoadingStart: noOp, gameLoadingFinished: noOp,
    gameLoadingProgress: noOp, gameplayStart: noOp, gameplayStop: noOp,
    happyTime: noOp, logError: noOp, muteAd: noOp,
    commercialBreak: function () { return Promise.resolve(); },
    rewardedBreak: function () { return Promise.resolve(false); }
  };
}(window));
