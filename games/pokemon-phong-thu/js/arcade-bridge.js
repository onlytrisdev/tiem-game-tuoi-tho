/**
 * Arcade bridge — gửi điểm qua score.min.js (GV.saveScore).
 * Local: ?gid=xxxx để bật popup; thiếu gid thì bỏ qua im lặng.
 */
(function (global) {
  "use strict";

  function getQueryParam(name) {
    try {
      return new URLSearchParams(global.location.search).get(name);
    } catch (e) {
      return null;
    }
  }

  function getGid() {
    var gid = getQueryParam("gid");
    if (gid) return gid;
    try {
      var scripts = document.querySelectorAll('script[src*="score."]');
      for (var i = 0; i < scripts.length; i++) {
        var src = scripts[i].getAttribute("src") || "";
        var q = src.indexOf("?");
        if (q >= 0) {
          var g = new URLSearchParams(src.substring(q + 1)).get("gid");
          if (g) return g;
        }
      }
    } catch (e) {}
    return null;
  }

  function hasGV() {
    return typeof global.GV === "function";
  }

  var submitting = false;

  /**
   * @param {number} score
   * @param {function=} onDone called when popup đóng (hoặc bỏ qua)
   */
  function submitScore(score, onDone) {
    var done = typeof onDone === "function" ? onDone : function () {};
    var gid = getGid();
    if (!gid || !hasGV()) {
      done(false);
      return;
    }
    score = parseInt(score, 10) || 0;
    if (score <= 0) {
      done(false);
      return;
    }
    if (submitting) {
      done(false);
      return;
    }
    submitting = true;

    try {
      if (typeof cc !== "undefined" && cc.game) cc.game.pause();
    } catch (e) {}

    var finished = false;
    function finish() {
      if (finished) return;
      finished = true;
      submitting = false;
      try {
        if (typeof cc !== "undefined" && cc.game) cc.game.resume();
      } catch (e) {}
      done(true);
    }

    try {
      var gv = new global.GV();
      gv.saveScore(score, finish);
      // Fallback: đợi popup #gv_savescore xuất hiện rồi biến mất (nếu callback không chạy)
      var seenPopup = !!document.getElementById("gv_savescore");
      var observer = null;
      try {
        observer = new MutationObserver(function () {
          var el = document.getElementById("gv_savescore");
          if (el) seenPopup = true;
          else if (seenPopup) {
            if (observer) observer.disconnect();
            finish();
          }
        });
        observer.observe(document.body, { childList: true, subtree: true });
      } catch (e) {}
      setTimeout(function () {
        if (!seenPopup && !document.getElementById("gv_savescore")) {
          if (observer) observer.disconnect();
          finish();
        }
      }, 2000);
    } catch (err) {
      console.error("[ArcadeBridge] saveScore lỗi", err);
      finish();
    }
  }

  var SCORE_KEY = "pptGvScore";
  var WAVE_POINTS = 2;

  function getStoredScore() {
    try {
      var n = parseInt(localStorage.getItem(SCORE_KEY), 10);
      return isNaN(n) || n < 0 ? 0 : n;
    } catch (e) {
      return 0;
    }
  }

  function setStoredScore(n) {
    n = Math.max(0, parseInt(n, 10) || 0);
    try {
      localStorage.setItem(SCORE_KEY, String(n));
    } catch (e) {}
    return n;
  }

  /**
   * Công thức:
   * - Thắng 1 wave (chưa clear level): +2
   * - Thắng clear level: điểm level = (2 × waveCount) × 2; cộng phần còn lại sau các wave giữa
   * - Thua: không cộng, giữ điểm cũ
   * @returns {number} tổng điểm sau sự kiện
   */
  function applyDefenseScore(won, isLevelClear, waveCount) {
    var total = getStoredScore();
    if (!won) return total;
    waveCount = parseInt(waveCount, 10) || 1;
    if (waveCount < 1) waveCount = 1;
    var add;
    if (isLevelClear) {
      var levelTotal = WAVE_POINTS * waveCount * 2;
      var alreadyFromPriorWaves = WAVE_POINTS * (waveCount - 1);
      add = levelTotal - alreadyFromPriorWaves;
      if (add < WAVE_POINTS) add = WAVE_POINTS;
    } else {
      add = WAVE_POINTS;
    }
    total = setStoredScore(total + add);
    console.log(
      "[ArcadeBridge] +" + add + " (win, levelClear=" + !!isLevelClear +
        ", waves=" + waveCount + ") => " + total
    );
    return total;
  }

  /**
   * Gọi sau mỗi đợt defense. Chỉ cộng điểm khi thắng; thua giữ điểm cũ rồi vẫn mở popup (nếu có điểm > 0).
   * @param {boolean} won
   * @param {boolean} isLevelClear bigResult / hết wave của level
   * @param {number} waveCount số wave của level
   * @param {function=} onDone
   */
  function onDefenseResult(won, isLevelClear, waveCount, onDone) {
    var total = applyDefenseScore(won, isLevelClear, waveCount);
    submitScore(total, onDone);
  }

  /** @deprecated dùng onDefenseResult */
  function submitLevelScore(onDone) {
    submitScore(getStoredScore(), onDone);
  }

  function clearPlayerData() {
    if (global.ArcadeSave && typeof global.ArcadeSave.deleteAll === "function") {
      global.ArcadeSave.deleteAll();
      return;
    }
    try {
      localStorage.removeItem("userdataHH");
      localStorage.removeItem("bgmVolume");
      localStorage.removeItem("sfxVolume");
      localStorage.removeItem(SCORE_KEY);
    } catch (e) {}
    global.location.reload();
  }

  function mountDeleteButton() {
    if (document.getElementById("ppt-delete-data")) return;
    var btn = document.createElement("button");
    btn.id = "ppt-delete-data";
    btn.type = "button";
    btn.setAttribute("aria-label", "Xóa data");
    btn.style.display = "none";
    var img = document.createElement("img");
    img.src = "img/xoa-data-gv.png";
    img.alt = "Xóa data";
    img.draggable = false;
    btn.appendChild(img);
    btn.addEventListener("click", function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      if (
        global.confirm(
          "Bạn chắc chắn muốn xóa tất cả dữ liệu game và chơi lại từ đầu?"
        )
      ) {
        clearPlayerData();
      }
    });
    document.body.appendChild(btn);
  }

  function showDeleteButton() {
    injectDeleteStyles();
    mountDeleteButton();
    var btn = document.getElementById("ppt-delete-data");
    if (btn) btn.style.display = "";
  }

  function injectDeleteStyles() {
    if (document.getElementById("ppt-delete-data-style")) return;
    var style = document.createElement("style");
    style.id = "ppt-delete-data-style";
    style.textContent =
      "#ppt-delete-data{position:fixed;top:8px;right:8px;z-index:4000;" +
      "padding:0;margin:0;border:0;background:transparent;cursor:pointer;" +
      "-webkit-tap-highlight-color:transparent;line-height:0;}" +
      "#ppt-delete-data img{display:block;height:36px;width:auto;pointer-events:none;}" +
      "#ppt-delete-data:active{opacity:.85;}" +
      "#gv_savescore{z-index:5000!important;}";
    document.head.appendChild(style);
  }

  function isNearWhiteColor(c) {
    return c && c.r >= 245 && c.g >= 245 && c.b >= 245;
  }

  function outlineIfWhiteLabel(lbl) {
    if (!lbl || !lbl.node || typeof cc === "undefined" || !cc.LabelOutline) return;
    try {
      if (!isNearWhiteColor(lbl.node.color)) return;
      var outline = lbl.node.getComponent(cc.LabelOutline);
      if (!outline) outline = lbl.node.addComponent(cc.LabelOutline);
      outline.color = cc.color(0, 0, 0);
      outline.width = 2;
    } catch (e) {}
  }

  /** Viền đen cho mọi Label màu trắng trong cây node (mission, HUD, popup…). */
  function applyWhiteTextOutlines(root) {
    if (typeof cc === "undefined" || !cc.Label) return;
    if (!root) {
      try {
        var scene = cc.director.getScene();
        root = scene;
      } catch (e) {
        return;
      }
    }
    if (!root || typeof root.getComponentsInChildren !== "function") return;
    var labels = root.getComponentsInChildren(cc.Label);
    for (var i = 0; i < labels.length; i++) outlineIfWhiteLabel(labels[i]);
  }

  function patchLabelWhiteOutlines() {
    if (typeof cc === "undefined" || !cc.Label || !cc.Label.prototype) {
      setTimeout(patchLabelWhiteOutlines, 200);
      return;
    }
    if (cc.Label.prototype.__gvWhiteOutlinePatched) return;
    cc.Label.prototype.__gvWhiteOutlinePatched = true;
    var origOnEnable = cc.Label.prototype.onEnable;
    cc.Label.prototype.onEnable = function () {
      if (typeof origOnEnable === "function") origOnEnable.call(this);
      outlineIfWhiteLabel(this);
    };
  }

  function isStubGvAdBreak(fn) {
    try {
      return Function.prototype.toString.call(fn).indexOf("Không hỗ trợ") >= 0;
    } catch (e) {
      return false;
    }
  }

  function isLocalHost() {
    var h = global.location && global.location.hostname;
    return h === "localhost" || h === "127.0.0.1" || h === "";
  }

  /**
   * QC nhận thưởng Arcade. Callback chỉ chạy khi xem xong (hoặc stub/localhost).
   * @param {function} onRewarded
   * @param {function=} onSkip khi không thưởng
   */
  function runRewardAd(onRewarded, onSkip) {
    var rewarded =
      typeof onRewarded === "function" ? onRewarded : function () {};
    var skipped = typeof onSkip === "function" ? onSkip : function () {};
    var done = false;
    function grant() {
      if (done) return;
      done = true;
      rewarded();
    }
    function deny() {
      if (done) return;
      done = true;
      skipped();
    }

    if (typeof global.GVAdBreak === "function" && !isStubGvAdBreak(global.GVAdBreak)) {
      try {
        console.log("GV_AD_BREAK_START");
        global.GVAdBreak(function () {
          console.log("GV_AD_BREAK_DONE");
          grant();
        });
        return;
      } catch (err) {
        console.error("GV_ADBREAK_FAIL", err);
        if (isLocalHost()) grant();
        else deny();
        return;
      }
    }

    console.warn("GV_ADBREAK_MISSING");
    if (isLocalHost()) grant();
    else deny();
  }

  function initUi() {
    injectDeleteStyles();
    mountDeleteButton();
    patchLabelWhiteOutlines();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initUi);
  } else {
    initUi();
  }

  global.ArcadeBridge = {
    getGid: getGid,
    getStoredScore: getStoredScore,
    submitScore: submitScore,
    submitLevelScore: submitLevelScore,
    onDefenseResult: onDefenseResult,
    clearPlayerData: clearPlayerData,
    showDeleteButton: showDeleteButton,
    applyWhiteTextOutlines: applyWhiteTextOutlines,
    runRewardAd: runRewardAd,
  };
})(typeof window !== "undefined" ? window : this);
