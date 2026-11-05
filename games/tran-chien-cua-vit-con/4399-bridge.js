/* Arcade reward-ad bridge for the existing AdManager callbacks. */
(function (root) {
  "use strict";
  var busy = false;
  function findArcadeAd() {
    var hosts = [root];
    try { if (root.parent !== root) hosts.push(root.parent); } catch (_) {}
    try { if (root.top !== root) hosts.push(root.top); } catch (_) {}
    for (var i = 0; i < hosts.length; i++) {
      try {
        if (typeof hosts[i].GVAdBreak === "function") return hosts[i].GVAdBreak.bind(hosts[i]);
      } catch (_) {}
    }
    return null;
  }
  function playReward(success, fail) {
    if (busy) { if (typeof fail === "function") fail(); return; }
    busy = true;
    var finished = false, watchdog;
    function done(ok) {
      if (finished) return;
      finished = true; busy = false; clearTimeout(watchdog);
      try {
        if (ok) { if (typeof success === "function") success(); }
        else if (typeof fail === "function") fail();
      } catch (err) { console.error("[Arcade Ads] Phát thưởng:", err); }
    }
    watchdog = root.setTimeout(function () { done(false); }, 45000);
    var q = new URLSearchParams(root.location.search);
    if (q.get("ads") === "0" && /^(test\.game|localhost|127\.0\.0\.1)$/.test(root.location.hostname)) {
      console.info("[Arcade Ads] QC được tắt bằng ?ads=0, nhưng callback thưởng vẫn phát");
      root.setTimeout(function () { done(true); }, 0);
      return;
    }
    var show = findArcadeAd();
    if (show) {
      try { show(function () { done(true); }); }
      catch (err) { console.warn("[Arcade Ads] Không phát được:", err); done(false); }
    } else {
      console.warn("[Arcade Ads] GVAdBreak không khả dụng, không phát thưởng");
      done(false);
    }
  }
  function interstitial() {
    // Disable unsolicited/interstitial advertising entirely.
    // Rewarded ads remain available only through explicit player interaction.
    return false;
  }
  root.PlayRewardAd = playReward;
  root.playRewardAd = playReward;
  root.PlayInsertAd = interstitial;
  root.playInsertAd = interstitial;
  root.AdSdk = {
    initAd: function () {},
    showAd: function (type) {
      playReward(function () {
        if (typeof root.__adComplete === "function") root.__adComplete(type, true);
      }, function () {
        if (typeof root.__adComplete === "function") root.__adComplete(type, false);
      });
    }
  };
})(window);
