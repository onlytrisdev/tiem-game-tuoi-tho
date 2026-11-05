/**
 * Portrait 9:16 letterbox — CSS-first, reentrancy-safe.
 * Avoids Cocos setResizeCallback ↔ setFrameSize recursion.
 */
(function () {
  "use strict";

  var ASPECT_W = 9;
  var ASPECT_H = 16;
  var FALLBACK_DESIGN_W = 720;
  var FALLBACK_DESIGN_H = 1280;
  var DEBOUNCE_MS = 80;

  var hooked = false;
  var isFitting = false;
  var debounceTimer = null;
  var lastBox = { w: 0, h: 0 };
  var cocosFrameLocked = false;
  var readyLogged = false;

  function getViewportSize() {
    return {
      w: Math.max(1, window.innerWidth || document.documentElement.clientWidth || 1),
      h: Math.max(1, window.innerHeight || document.documentElement.clientHeight || 1)
    };
  }

  function calcPortraitBox(vw, vh) {
    var boxW = vw;
    var boxH = Math.floor((boxW * ASPECT_H) / ASPECT_W);
    if (boxH > vh) {
      boxH = vh;
      boxW = Math.floor((boxH * ASPECT_W) / ASPECT_H);
    }
    return {
      w: Math.max(1, boxW),
      h: Math.max(1, boxH)
    };
  }

  function ensureStageHierarchy() {
    var stage = document.getElementById("GameStage");
    var container = document.getElementById("Cocos2dGameContainer");
    var canvas = document.getElementById("GameCanvas");
    if (!stage) {
      return;
    }
    // Keep Cocos container under the centered stage when engine creates/moves it.
    if (container && container.parentNode !== stage) {
      stage.appendChild(container);
    }
    if (canvas && container && canvas.parentNode !== container) {
      container.appendChild(canvas);
    } else if (canvas && !container && canvas.parentNode !== stage) {
      stage.appendChild(canvas);
    }
  }

  function applyDomBox(box) {
    ensureStageHierarchy();

    var stage = document.getElementById("GameStage");
    var container = document.getElementById("Cocos2dGameContainer");
    var canvas = document.getElementById("GameCanvas");

    if (stage) {
      stage.style.width = box.w + "px";
      stage.style.height = box.h + "px";
      stage.style.left = "50%";
      stage.style.top = "50%";
      stage.style.transform = "translate(-50%, -50%)";
      stage.style.position = "absolute";
      stage.style.margin = "0";
    }

    if (container) {
      container.style.position = "absolute";
      container.style.left = "0";
      container.style.top = "0";
      container.style.right = "auto";
      container.style.bottom = "auto";
      container.style.transform = "none";
      container.style.margin = "0";
      container.style.width = box.w + "px";
      container.style.height = box.h + "px";
    }

    if (canvas) {
      canvas.style.position = "absolute";
      canvas.style.left = "0";
      canvas.style.top = "0";
      canvas.style.transform = "none";
      canvas.style.margin = "0";
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.maxWidth = "none";
      canvas.style.maxHeight = "none";
      if (!container && !stage) {
        canvas.style.left = "50%";
        canvas.style.top = "50%";
        canvas.style.transform = "translate(-50%, -50%)";
        canvas.style.width = box.w + "px";
        canvas.style.height = box.h + "px";
      }
    }
  }

  function applyCocosFrame(box) {
    if (typeof window.cc === "undefined" || !window.cc.view) {
      return;
    }
    var view = window.cc.view;

    if (!cocosFrameLocked && typeof view.resizeWithBrowserSize === "function") {
      view.resizeWithBrowserSize(false);
      cocosFrameLocked = true;
    }

    if (typeof view.setFrameSize === "function") {
      view.setFrameSize(box.w, box.h);
    }

    var designW = FALLBACK_DESIGN_W;
    var designH = FALLBACK_DESIGN_H;
    if (typeof view.getDesignResolutionSize === "function") {
      var design = view.getDesignResolutionSize();
      if (design && design.width > 0 && design.height > 0) {
        designW = design.width;
        designH = design.height;
      }
    }

    var policy =
      window.cc.ResolutionPolicy && typeof window.cc.ResolutionPolicy.SHOW_ALL === "number"
        ? window.cc.ResolutionPolicy.SHOW_ALL
        : 2;

    if (typeof view.setDesignResolutionSize === "function") {
      view.setDesignResolutionSize(designW, designH, policy);
    }
  }

  function fitPortrait() {
    if (isFitting) {
      return;
    }
    isFitting = true;
    try {
      var vp = getViewportSize();
      var box = calcPortraitBox(vp.w, vp.h);
      applyDomBox(box);

      var sizeChanged = box.w !== lastBox.w || box.h !== lastBox.h;
      lastBox = { w: box.w, h: box.h };
      if (sizeChanged || !cocosFrameLocked) {
        applyCocosFrame(box);
      }
    } catch (error) {
      console.warn("[GV_PORTRAIT_FIT_FAIL]", error);
    } finally {
      isFitting = false;
    }
  }

  function scheduleFit() {
    if (debounceTimer !== null) {
      window.clearTimeout(debounceTimer);
    }
    debounceTimer = window.setTimeout(function () {
      debounceTimer = null;
      fitPortrait();
    }, DEBOUNCE_MS);
  }

  function start() {
    if (hooked) {
      return;
    }
    hooked = true;

    window.addEventListener("resize", scheduleFit, false);
    window.addEventListener("orientationchange", scheduleFit, false);
    document.addEventListener("fullscreenchange", scheduleFit, false);
    document.addEventListener("webkitfullscreenchange", scheduleFit, false);
    document.addEventListener("mozfullscreenchange", scheduleFit, false);
    document.addEventListener("MSFullscreenChange", scheduleFit, false);

    fitPortrait();

    var tries = 0;
    var poll = window.setInterval(function () {
      tries += 1;
      fitPortrait();
      var hasScene =
        typeof window.cc !== "undefined" &&
        window.cc.view &&
        window.cc.director &&
        typeof window.cc.director.getScene === "function" &&
        window.cc.director.getScene();
      if (hasScene || tries > 200) {
        window.clearInterval(poll);
        fitPortrait();
        if (!readyLogged) {
          readyLogged = true;
          console.log("[GV_PORTRAIT_FIT_READY]");
        }
      }
    }, 100);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
