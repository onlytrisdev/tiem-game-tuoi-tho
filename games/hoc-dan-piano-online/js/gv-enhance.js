(function () {
  "use strict";

  var scoreSent = false;
  var vars = null;
  var lastScore = 0;
  var combo = 0;
  var playing = false;
  var particles = [];
  var pCanvas = null;
  var pCtx = null;
  var rafId = 0;
  var lastTs = 0;
  var KEY_LANES = { KeyA: 0, KeyS: 1, KeyJ: 2, KeyK: 3, a: 0, s: 1, j: 2, k: 3, A: 0, S: 1, J: 2, K: 3 };
  var keysHeld = {};
  var keyTapPoints = {};
  var themeTier = -1;
  var tierPulseTimer = 0;

  function $(id) {
    return document.getElementById(id);
  }

  function findVars(rt) {
    var map = {};
    var list = rt.all_global_vars || [];
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i] && list[i].name) map[list[i].name] = list[i];
    }
    return map;
  }

  function wrapSetValue(ev, before) {
    var proto = Object.getPrototypeOf(ev);
    var orig = proto.setValue || ev.setValue;
    ev.setValue = function (x) {
      try { before(x, ev); } catch (err) {}
      return orig.call(this, x);
    };
  }

  function sendScoreOnLose(n) {
    if (scoreSent) return;
    scoreSent = true;
    try {
      if (typeof GV !== "undefined") new GV().saveScore(n);
    } catch (err) { /* fire-and-forget */ }
  }

  function num(v) {
    try {
      return Number(v.getValue());
    } catch (err) {
      return 0;
    }
  }

  function onLose() {
    triggerMissFx();
    combo = 0;
    playing = false;
    releaseAllKeys();
    updateHud();
    applyThemeTier(0, false);
    document.documentElement.setAttribute("data-gv-playing", "0");
    sendScoreOnLose(Math.max(0, Math.round(num(vars.Score) || 0)));
  }

  function hookRuntime(rt) {
    vars = findVars(rt);
    if (!vars.gameisover || !vars.Score) return false;

    wrapSetValue(vars.gameisover, function (x, ev) {
      var prev = Number(ev.getValue());
      if (Number(x) === 1 && prev !== 1) onLose();
    });

    wrapSetValue(vars.Score, function (x) {
      if (Number(x) === 0) {
        scoreSent = false;
        applyThemeTier(0, false);
        document.documentElement.setAttribute("data-gv-playing", "0");
      }
    });

    return true;
  }

  function waitForRuntime() {
    var tries = 0;
    function tick() {
      var rt = window.cr_getC2Runtime ? window.cr_getC2Runtime() : null;
      if (rt && rt.all_global_vars && rt.all_global_vars.length && hookRuntime(rt)) {
        hideUnusedMenuButtons();
        startLoop();
        return;
      }
      tries += 1;
      if (tries < 600) setTimeout(tick, 50);
    }
    tick();
  }

  function recordPanelMarkup() {
    return (
      '<div id="gv-record-panel" aria-hidden="true">' +
      '<div class="gv-record-inner">' +
      '<div class="gv-record-head">' +
      '<span class="gv-record-cup"></span>' +
      '<span class="gv-record-label">Kỷ lục:</span>' +
      '</div>' +
      '<div id="gv-record-score"></div>' +
      '</div>' +
      '</div>'
    );
  }

  function playHintMarkup() {
    return (
      '<div id="gv-play-hint" aria-hidden="true">' +
      '<span class="gv-play-hint-lead">Sử dụng</span>' +
      '<span class="gv-key">A</span>' +
      '<span class="gv-key">S</span>' +
      '<span class="gv-key">J</span>' +
      '<span class="gv-key">K</span>' +
      '<span class="gv-play-hint-tail">để chơi</span>' +
      '</div>'
    );
  }

  function ensureRecordPanelDom() {
    var wrap = $("gv-fx-wrap");
    var panel, tmp;
    if (!wrap) return;
    panel = $("gv-record-panel");
    if (panel && panel.querySelector(".gv-record-inner") && panel.querySelector("#gv-record-score")) return;
    if (panel && panel.parentNode) panel.parentNode.removeChild(panel);
    tmp = document.createElement("div");
    tmp.innerHTML = recordPanelMarkup();
    wrap.appendChild(tmp.firstChild);
  }

  function ensurePlayHintDom() {
    var wrap = $("gv-fx-wrap");
    var hint, tmp;
    if (!wrap) return;
    hint = $("gv-play-hint");
    if (hint && hint.querySelector(".gv-play-hint-lead") && hint.querySelector(".gv-play-hint-tail")) return;
    if (hint && hint.parentNode) hint.parentNode.removeChild(hint);
    tmp = document.createElement("div");
    tmp.innerHTML = playHintMarkup();
    wrap.appendChild(tmp.firstChild);
  }

  function buildOverlay() {
    var host = $("c2canvasdiv");
    if (!host) return;
    if ($("gv-fx-wrap")) {
      ensureRecordPanelDom();
      ensurePlayHintDom();
      return;
    }

    var wrap = document.createElement("div");
    wrap.id = "gv-fx-wrap";
    wrap.innerHTML =
      '<canvas id="gv-fx-particles"></canvas>' +
      '<div id="gv-fx-vignette"></div>' +
      '<div id="gv-theme-lanes">' +
      '<div class="gv-lane"></div><div class="gv-lane"></div><div class="gv-lane"></div><div class="gv-lane"></div>' +
      '</div>' +
      '<div id="gv-fx-flash"></div>' +
      '<div id="gv-hit-line"></div>' +
      '<div id="gv-combo"><span id="gv-combo-n">0</span><span id="gv-combo-label">COMBO</span></div>' +
      '<div id="gv-float">HOÀN HẢO</div>' +
      recordPanelMarkup() +
      playHintMarkup();
    host.appendChild(wrap);

    pCanvas = $("gv-fx-particles");
    pCtx = pCanvas.getContext("2d");
    sizeParticleCanvas();
  }

  function sizeParticleCanvas() {
    if (!pCanvas) return;
    var wrap = $("gv-fx-wrap");
    if (!wrap) return;
    var w = wrap.clientWidth || 720;
    var h = wrap.clientHeight || 1280;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    pCanvas.width = Math.max(1, Math.round(w * dpr));
    pCanvas.height = Math.max(1, Math.round(h * dpr));
    pCanvas.style.width = w + "px";
    pCanvas.style.height = h + "px";
    pCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function burstSync() {
    var n = 0;
    function step() {
      sizeParticleCanvas();
      updateDesktopHintFlag();
      syncPlayHintDisplay(playing);
      n += 1;
      if (n < 24) requestAnimationFrame(step);
    }
    step();
  }

  function isDesktopPlayHint() {
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }

  function updateDesktopHintFlag() {
    document.documentElement.setAttribute("data-gv-desktop", isDesktopPlayHint() ? "1" : "0");
  }

  function bindResize() {
    window.addEventListener("resize", burstSync, false);
    window.addEventListener("orientationchange", burstSync, false);
    document.addEventListener("fullscreenchange", burstSync, false);
    document.addEventListener("webkitfullscreenchange", burstSync, false);
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", burstSync, false);
      window.visualViewport.addEventListener("scroll", burstSync, false);
    }
    var host = $("c2canvasdiv");
    if (host && window.ResizeObserver) {
      new ResizeObserver(burstSync).observe(host);
    }
  }

  function spawnParticles(x, y, color, count) {
    var i, a, sp;
    for (i = 0; i < count; i++) {
      a = Math.random() * Math.PI * 2;
      sp = 1.2 + Math.random() * 5.5;
      particles.push({
        x: x,
        y: y,
        vx: Math.cos(a) * sp,
        vy: Math.sin(a) * sp - 1.8,
        life: 1,
        decay: 0.018 + Math.random() * 0.02,
        size: 2 + Math.random() * 3.5,
        color: color
      });
    }
  }

  function spawnRipple(x, y) {
    var wrap = $("gv-fx-wrap");
    if (!wrap) return;
    var el = document.createElement("div");
    el.className = "gv-ripple";
    el.style.left = x + "px";
    el.style.top = y + "px";
    wrap.appendChild(el);
    setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 480);
  }

  function pulseHitLine() {
    var line = $("gv-hit-line");
    if (!line) return;
    line.classList.remove("gv-pulse");
    void line.offsetWidth;
    line.classList.add("gv-pulse");
  }

  function localPoint(ev) {
    var canvas = $("c2canvas");
    if (!canvas) return null;
    var rect = canvas.getBoundingClientRect();
    if (!rect.width) return null;
    return {
      x: ev.clientX - rect.left,
      y: ev.clientY - rect.top,
      w: rect.width,
      h: rect.height
    };
  }

  function playHitFx(clientX, clientY) {
    var pt = localPoint({ clientX: clientX, clientY: clientY, button: 0 });
    if (!pt || !playing) return;
    spawnParticles(pt.x, pt.y, "rgba(255,255,255,0.95)", 16);
    spawnParticles(pt.x, pt.y, "rgba(160,240,255,0.9)", 8);
    spawnRipple(pt.x, pt.y);
    pulseHitLine();
  }

  function onPointerDown(ev) {
    if (ev.button != null && ev.button !== 0) return;
    if (!playing) return;
    playHitFx(ev.clientX, ev.clientY);
  }

  function onTouchStartFx(ev) {
    if (!ev.changedTouches || !ev.changedTouches[0]) return;
    var t = ev.changedTouches[0];
    onPointerDown({ clientX: t.clientX, clientY: t.clientY, button: 0 });
  }

  function bindInput() {
    var canvas = $("c2canvas");
    if (!canvas) return;
    if (window.PointerEvent) {
      canvas.addEventListener("pointerdown", onPointerDown, true);
    } else {
      canvas.addEventListener("mousedown", onPointerDown, true);
      canvas.addEventListener("touchstart", onTouchStartFx, true);
    }
    bindKeyboard();
  }

  function laneFromKey(ev) {
    if (ev.code && Object.prototype.hasOwnProperty.call(KEY_LANES, ev.code)) return KEY_LANES[ev.code];
    if (ev.key && Object.prototype.hasOwnProperty.call(KEY_LANES, ev.key)) return KEY_LANES[ev.key];
    return -1;
  }

  function isTypingTarget(el) {
    if (!el || !el.tagName) return false;
    var tag = el.tagName.toLowerCase();
    return tag === "input" || tag === "textarea" || tag === "select" || el.isContentEditable;
  }

  function getRuntime() {
    return window.cr_getC2Runtime ? window.cr_getC2Runtime() : null;
  }

  function getTileType() {
    var rt = getRuntime();
    if (!rt) return null;
    if (rt.types && rt.types.t1) return rt.types.t1;
    if (rt.types_by_index && rt.types_by_index[1]) return rt.types_by_index[1];
    return null;
  }

  function getAudioInstance() {
    var rt = getRuntime();
    if (!rt || !rt.types || !rt.types.t6 || !rt.types.t6.instances || !rt.types.t6.instances.length) return null;
    return rt.types.t6.instances[0];
  }

  function getScoreTextInstance() {
    var rt = getRuntime();
    if (!rt || !rt.types || !rt.types.t10 || !rt.types.t10.instances || !rt.types.t10.instances.length) return null;
    return rt.types.t10.instances[0];
  }

  function getRecordPanelInstance() {
    var rt = getRuntime();
    if (!rt || !rt.types || !rt.types.t8 || !rt.types.t8.instances || !rt.types.t8.instances.length) return null;
    return rt.types.t8.instances[0];
  }

  function getStartButtonInstance() {
    var rt = getRuntime();
    if (!rt || !rt.types || !rt.types.t5 || !rt.types.t5.instances || !rt.types.t5.instances.length) return null;
    return rt.types.t5.instances[0];
  }

  function recordPanelCanvasBox(inst) {
    var layer, left, top, right, bottom, cLeft, cTop, cRight, cBottom;
    if (!inst || !inst.layer) return null;
    if (inst.update_bbox) inst.update_bbox();
    if (inst.bbox) {
      left = inst.bbox.left;
      top = inst.bbox.top;
      right = inst.bbox.right;
      bottom = inst.bbox.bottom;
    } else {
      left = inst.x - (inst.width || 0) * 0.5;
      top = inst.y;
      right = inst.x + (inst.width || 0) * 0.5;
      bottom = inst.y + (inst.height || 0);
    }
    layer = inst.layer;
    cLeft = layer.layerToCanvas(left, top, true);
    cTop = layer.layerToCanvas(left, top, false);
    cRight = layer.layerToCanvas(right, bottom, true);
    cBottom = layer.layerToCanvas(right, bottom, false);
    return {
      left: cLeft,
      top: cTop,
      right: cRight,
      bottom: cBottom,
      width: cRight - cLeft,
      height: cBottom - cTop
    };
  }

  function recordPanelOverlayRect(inst) {
    var box, canvas, wrap, canvasRect, wrapRect, ox, oy;
    box = recordPanelCanvasBox(inst);
    canvas = $("c2canvas");
    wrap = $("gv-fx-wrap");
    if (!box || !canvas || !wrap) return null;
    canvasRect = canvas.getBoundingClientRect();
    wrapRect = wrap.getBoundingClientRect();
    ox = canvasRect.left - wrapRect.left;
    oy = canvasRect.top - wrapRect.top;
    return {
      left: box.left + ox,
      top: box.top + oy,
      width: box.width,
      height: box.height,
      bottom: box.bottom + oy
    };
  }

  function isRecordPanelVisible(inst, box) {
    var op, rect;
    if (!inst || !box) return false;
    op = typeof inst.opacity === "number" ? inst.opacity : 1;
    if (!inst.visible || op <= 0.5) return false;
    rect = box.bottom != null ? box : recordPanelOverlayRect(inst);
    if (!rect) return false;
    return rect.bottom > 24;
  }

  function isMenuUiVisible(inst, box) {
    return isRecordPanelVisible(inst, box);
  }

  function syncPlayHintDisplay(isPlaying) {
    var hint = $("gv-play-hint");
    var rtInst, box, rect, show;
    if (!hint) {
      document.documentElement.setAttribute("data-gv-play-hint", "0");
      return;
    }
    show = vars && !isPlaying && isDesktopPlayHint();
    if (show) {
      rtInst = getStartButtonInstance();
      box = rtInst ? recordPanelCanvasBox(rtInst) : null;
      show = isMenuUiVisible(rtInst, box);
      if (show) {
        rect = recordPanelOverlayRect(rtInst);
        if (rect) {
          hint.style.top = (rect.top + rect.height + 12) + "px";
          hint.style.left = (rect.left + rect.width * 0.5) + "px";
          hint.style.transform = "translateX(-50%)";
          hint.style.width = "auto";
        } else {
          show = false;
        }
      }
    }
    if (!show) {
      clearRecordScoreLayout(hint);
      hint.style.transform = "";
      hint.style.width = "";
    }
    document.documentElement.setAttribute("data-gv-play-hint", show ? "1" : "0");
  }

  function clearRecordScoreLayout(el) {
    el.style.top = "";
    el.style.height = "";
    el.style.left = "";
    el.style.width = "";
    el.style.right = "";
  }

  function getTouchInstance() {
    var rt = getRuntime();
    if (!rt || !rt.types_by_index || typeof cr === "undefined" || !cr.plugins_ || !cr.plugins_.Touch) return null;
    var i, type;
    for (i = 0; i < rt.types_by_index.length; i++) {
      type = rt.types_by_index[i];
      if (type.plugin instanceof cr.plugins_.Touch && type.instances && type.instances.length)
        return type.instances[0];
    }
    return null;
  }

  function scoreThemeTier(score) {
    return Math.floor(Math.max(0, score) / 100);
  }

  function pulseThemeTierUp() {
    var host = $("c2canvasdiv");
    var vignette = $("gv-fx-vignette");
    if (host) {
      host.classList.remove("gv-tier-pulse");
      void host.offsetWidth;
      host.classList.add("gv-tier-pulse");
      if (tierPulseTimer) clearTimeout(tierPulseTimer);
      tierPulseTimer = setTimeout(function () {
        host.classList.remove("gv-tier-pulse");
      }, 350);
    }
    if (vignette) {
      vignette.classList.add("gv-tier-flash");
      setTimeout(function () {
        vignette.classList.remove("gv-tier-flash");
      }, 150);
    }
  }

  function applyThemeTier(tier, pulse) {
    var mod = ((tier % 5) + 5) % 5;
    if (mod === themeTier && !pulse) return;
    var increased = mod > themeTier && themeTier >= 0;
    themeTier = mod;
    document.documentElement.setAttribute("data-gv-tier", String(mod));
    if (pulse && increased) pulseThemeTierUp();
  }

  function updateThemeFromGameState(isPlaying, score) {
    if (!isPlaying) {
      document.documentElement.setAttribute("data-gv-playing", "0");
      applyThemeTier(0, false);
      return;
    }
    document.documentElement.setAttribute("data-gv-playing", "1");
    applyThemeTier(scoreThemeTier(score), true);
  }

  /** Cup/medal menu buttons (Lagged) — t20 cup, t22 medal (not t21 = countdown). */
  function hideMenuBestScoreFont() {
    var rt = getRuntime();
    if (!rt || !rt.types || !rt.types.t9) return;
    var type = rt.types.t9;
    var setVisible = typeof cr !== "undefined" && cr.plugins_ && cr.plugins_.Sprite &&
      cr.plugins_.Sprite.prototype.acts.SetVisible;
    var ii, inst;
    for (ii = 0; ii < type.instances.length; ii++) {
      inst = type.instances[ii];
      if (setVisible) {
        try { setVisible.call(inst, 0); } catch (err) { /* ignore */ }
      }
      inst.visible = false;
      inst.opacity = 0;
    }
  }

  function getBestScoreRecord() {
    var rt = getRuntime();
    var ii, inst, txt;
    if (rt && rt.types && rt.types.t9 && rt.types.t9.instances) {
      for (ii = 0; ii < rt.types.t9.instances.length; ii++) {
        inst = rt.types.t9.instances[ii];
        if (inst && inst.text) {
          txt = String(inst.text).replace(/\s/g, "");
          if (txt && txt !== "0") return txt;
        }
      }
    }
    try {
      txt = localStorage.getItem("Score");
      if (txt !== null && txt !== "") return String(Math.max(0, parseInt(txt, 10) || 0));
    } catch (e) { /* ignore */ }
    return "0";
  }

  function syncRecordScoreDisplay(isPlaying) {
    var panel = $("gv-record-panel");
    var scoreEl = $("gv-record-score");
    var inst, box, visible, rect;
    hideMenuBestScoreFont();
    if (!panel || !scoreEl) return;
    if (isPlaying) {
      scoreEl.textContent = "";
      document.documentElement.setAttribute("data-gv-record-visible", "0");
      clearRecordScoreLayout(panel);
      return;
    }
    inst = getRecordPanelInstance();
    box = recordPanelCanvasBox(inst);
    visible = isRecordPanelVisible(inst, box);
    document.documentElement.setAttribute("data-gv-record-visible", visible ? "1" : "0");
    if (!visible) {
      scoreEl.textContent = "";
      clearRecordScoreLayout(panel);
      return;
    }
    rect = recordPanelOverlayRect(inst);
    if (!rect) {
      scoreEl.textContent = "";
      clearRecordScoreLayout(panel);
      return;
    }
    scoreEl.textContent = getBestScoreRecord();
    panel.style.top = rect.top + "px";
    panel.style.left = rect.left + "px";
    panel.style.width = rect.width + "px";
    panel.style.height = rect.height + "px";
  }

  function hideUnusedMenuButtons() {
    var rt = getRuntime();
    if (!rt || !rt.types) return;
    var names = ["t20", "t22"];
    var ni, type, ii, inst;
    var setVisible = typeof cr !== "undefined" && cr.plugins_ && cr.plugins_.Sprite &&
      cr.plugins_.Sprite.prototype.acts.SetVisible;
    for (ni = 0; ni < names.length; ni++) {
      type = rt.types[names[ni]];
      if (!type || !type.instances) continue;
      for (ii = 0; ii < type.instances.length; ii++) {
        inst = type.instances[ii];
        if (setVisible) {
          try { setVisible.call(inst, 0); } catch (err) { /* ignore */ }
        }
        inst.visible = false;
        inst.opacity = 0;
      }
    }
  }

  function canvasCssSize() {
    var canvas = $("c2canvas");
    if (!canvas) return { w: 720, h: 1280 };
    var rect = canvas.getBoundingClientRect();
    return { w: rect.width || 720, h: rect.height || 1280 };
  }

  function pageOffsetForCanvas() {
    var canvas = $("c2canvas");
    if (!canvas) return { left: 0, top: 0 };
    if (typeof jQuery !== "undefined") {
      var off = jQuery(canvas).offset();
      return { left: off.left, top: off.top };
    }
    var rect = canvas.getBoundingClientRect();
    return {
      left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || 0),
      top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || 0)
    };
  }

  function makeTapPoint(lane, localX, localY) {
    var canvas = $("c2canvas");
    if (!canvas) return null;
    var rect = canvas.getBoundingClientRect();
    var off = pageOffsetForCanvas();
    return {
      canvas: canvas,
      lane: lane,
      localX: localX,
      localY: localY,
      clientX: rect.left + localX,
      clientY: rect.top + localY,
      pageX: off.left + localX,
      pageY: off.top + localY,
      pointerId: 9000 + lane
    };
  }

  /** Safe Y below pause/score HUD (~116px design on 1280). */
  function safeMissY(cssH) {
    var hud = Math.max(cssH * 0.12, (116 / 1280) * cssH + 8);
    return Math.max(hud, cssH * 0.22);
  }

  function tileCanvasCenter(inst, size) {
    var midX, midY, layer, canvasX, canvasY, instLane;
    if (inst.update_bbox) inst.update_bbox();
    if (inst.bbox) {
      midX = (inst.bbox.left + inst.bbox.right) * 0.5;
      midY = (inst.bbox.top + inst.bbox.bottom) * 0.5;
    } else {
      midX = inst.x - (inst.width || 0) * 0.5;
      midY = inst.y - (inst.height || 0) * 0.5;
    }
    layer = inst.layer;
    canvasX = layer.layerToCanvas(midX, midY, true);
    canvasY = layer.layerToCanvas(midX, midY, false);
    instLane = Math.max(0, Math.min(3, Math.floor((canvasX / size.w) * 4)));
    return { x: canvasX, y: canvasY, lane: instLane, midX: midX, midY: midY };
  }

  function findBestTileInLane(lane) {
    var size = canvasCssSize();
    var tileType = getTileType();
    var best = null;
    var bestY = -Infinity;
    var hasAnyUntapped = false;
    var i, inst, op, center, order;

    if (!tileType || !tileType.instances) return { tile: null, anyUntapped: false, center: null };

    for (i = 0; i < tileType.instances.length; i++) {
      inst = tileType.instances[i];
      if (!inst || !inst.layer) continue;
      op = typeof inst.opacity === "number" ? inst.opacity : 1;
      if (op < 0.85) continue;
      try {
        center = tileCanvasCenter(inst, size);
        if (center.lane !== lane) continue;
        hasAnyUntapped = true;
        order = inst.instance_vars && inst.instance_vars.length > 1 ? Number(inst.instance_vars[1]) : NaN;
        if (center.y > bestY) {
          bestY = center.y;
          best = { inst: inst, center: center, order: order };
        }
      } catch (err) { /* skip */ }
    }
    return { tile: best, anyUntapped: hasAnyUntapped };
  }

  function playNoteByName(filename) {
    var audioInst = getAudioInstance();
    var name = String(filename || "");
    if (audioInst && typeof cr !== "undefined" && cr.plugins_ && cr.plugins_.Audio) {
      try {
        cr.plugins_.Audio.prototype.acts.PlayByName.call(audioInst, 0, name, 0, 0, "");
        return;
      } catch (err) { /* fallback */ }
    }
    try {
      var a = new Audio("media/" + name.toLowerCase() + ".ogg");
      a.play();
    } catch (err2) { /* ignore */ }
  }

  function setScoreHud(scoreVal) {
    var textInst = getScoreTextInstance();
    if (textInst && typeof cr !== "undefined" && cr.plugins_ && cr.plugins_.Spritefont2) {
      try {
        cr.plugins_.Spritefont2.prototype.acts.SetText.call(textInst, scoreVal);
      } catch (err) { /* ignore */ }
    }
  }

  function applyDirectTileHit(inst, center) {
    if (!vars || !inst) return false;
    var need = vars.Number_of_sound ? Math.round(num(vars.Number_of_sound)) : 1;
    var order = inst.instance_vars && inst.instance_vars.length > 1 ? Number(inst.instance_vars[1]) : NaN;
    if (order !== need) return false;

    var choice = vars.Music_Choice ? String(vars.Music_Choice.getValue()) : "";
    var noteName = choice + String(need);
    playNoteByName(noteName);

    inst.opacity = 0.4;
    if (inst.runtime) inst.runtime.redraw = true;

    var scoreVar = vars.Score;
    var nosVar = vars.Number_of_sound;
    var maxVar = vars.Max_sounds;
    var newScore = (scoreVar ? num(scoreVar) : 0) + 1;
    var newNos = need + 1;
    var maxS = maxVar ? num(maxVar) : 0;
    if (maxS > 0 && newNos > maxS) newNos = 1;

    if (scoreVar) scoreVar.setValue(newScore);
    if (nosVar) nosVar.setValue(newNos);
    setScoreHud(newScore);

    if (center) {
      var rect = $("c2canvas").getBoundingClientRect();
      playHitFx(rect.left + center.x, rect.top + center.y);
    }
    return true;
  }

  function safeMissPoint(lane) {
    var size = canvasCssSize();
    return makeTapPoint(lane, (lane + 0.5) * (size.w / 4), safeMissY(size.h));
  }

  function dispatchLanePointer(pt, pressed) {
    if (!pt) return;
    var touch = getTouchInstance();
    if (touch) {
      var fake = { changedTouches: [{ pageX: pt.pageX, pageY: pt.pageY, identifier: pt.pointerId }] };
      if (pressed) touch.onTouchStart(fake);
      else touch.onTouchEnd(fake);
      return;
    }

    if (window.PointerEvent) {
      try {
        var pointerTarget = pressed ? pt.canvas : document;
        pointerTarget.dispatchEvent(new PointerEvent(pressed ? "pointerdown" : "pointerup", {
          bubbles: true,
          cancelable: true,
          view: window,
          pointerId: pt.pointerId,
          pointerType: "touch",
          isPrimary: pt.lane === 0,
          clientX: pt.clientX,
          clientY: pt.clientY,
          pageX: pt.pageX,
          pageY: pt.pageY,
          screenX: pt.clientX,
          screenY: pt.clientY,
          button: 0,
          buttons: pressed ? 1 : 0,
          width: 24,
          height: 24,
          pressure: pressed ? 0.5 : 0
        }));
        return;
      } catch (err) { /* fall through */ }
    }

    var mouseType = pressed ? "mousedown" : "mouseup";
    var ev;
    try {
      ev = new MouseEvent(mouseType, {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: pt.clientX,
        clientY: pt.clientY,
        screenX: pt.clientX,
        screenY: pt.clientY,
        button: 0,
        buttons: pressed ? 1 : 0
      });
    } catch (err2) {
      ev = document.createEvent("MouseEvents");
      ev.initMouseEvent(mouseType, true, true, window, 1, pt.clientX, pt.clientY, pt.clientX, pt.clientY, false, false, false, false, 0, null);
    }
    document.dispatchEvent(ev);
  }

  function onKeyDown(ev) {
    var lane = laneFromKey(ev);
    var found, need, pt;
    if (lane < 0) return;
    if (isTypingTarget(ev.target)) return;
    if (ev.repeat || keysHeld[lane]) {
      ev.preventDefault();
      return;
    }
    if (!playing) return;
    ev.preventDefault();
    keysHeld[lane] = true;

    found = findBestTileInLane(lane);
    need = vars && vars.Number_of_sound ? Math.round(num(vars.Number_of_sound)) : 1;

    // Correct next note in this lane: hit directly (never Touch-inject onto HUD/pause)
    if (found.tile && found.tile.order === need) {
      applyDirectTileHit(found.tile.inst, found.tile.center);
      keyTapPoints[lane] = null;
      return;
    }

    // Wrong-order tile under finger equivalent: do nothing (matches C2 tap-on-wrong-tile)
    if (found.anyUntapped) {
      keyTapPoints[lane] = null;
      return;
    }

    // Empty lane: miss via Touch at Y below HUD so pause is never hit
    pt = safeMissPoint(lane);
    keyTapPoints[lane] = pt;
    dispatchLanePointer(pt, true);
  }

  function onKeyUp(ev) {
    var lane = laneFromKey(ev);
    var pt;
    if (lane < 0) return;
    if (!keysHeld[lane]) return;
    ev.preventDefault();
    keysHeld[lane] = false;
    pt = keyTapPoints[lane];
    delete keyTapPoints[lane];
    if (pt) dispatchLanePointer(pt, false);
  }

  function bindKeyboard() {
    window.addEventListener("keydown", onKeyDown, false);
    window.addEventListener("keyup", onKeyUp, false);
    window.addEventListener("blur", releaseAllKeys, false);
  }

  function releaseAllKeys() {
    var lane, pt;
    for (lane in keysHeld) {
      if (!keysHeld[lane]) continue;
      keysHeld[lane] = false;
      pt = keyTapPoints[lane];
      delete keyTapPoints[lane];
      if (pt) dispatchLanePointer(pt, false);
    }
  }

  function triggerMissFx() {
    var flash = $("gv-fx-flash");
    var host = $("c2canvasdiv");
    if (flash) {
      flash.classList.add("gv-on");
      setTimeout(function () { flash.classList.remove("gv-on"); }, 140);
      setTimeout(function () { flash.classList.add("gv-on"); }, 200);
      setTimeout(function () { flash.classList.remove("gv-on"); }, 360);
    }
    if (host) {
      host.classList.remove("gv-shake");
      void host.offsetWidth;
      host.classList.add("gv-shake");
      setTimeout(function () { host.classList.remove("gv-shake"); }, 420);
    }
    var canvas = $("c2canvas");
    if (canvas) {
      var rect = canvas.getBoundingClientRect();
      spawnParticles(rect.width / 2, rect.height * 0.72, "rgba(255,60,80,0.95)", 36);
    }
  }

  function updateHud() {
    var comboEl = $("gv-combo");
    var nEl = $("gv-combo-n");
    var line = $("gv-hit-line");
    var show = playing && combo > 0;
    if (comboEl) comboEl.classList.toggle("gv-show", show);
    if (nEl) nEl.textContent = String(combo);
    if (line) line.classList.toggle("gv-show", playing);
  }

  function popCombo() {
    var comboEl = $("gv-combo");
    var flt = $("gv-float");
    if (comboEl) {
      comboEl.classList.remove("gv-pop");
      void comboEl.offsetWidth;
      comboEl.classList.add("gv-pop");
    }
    if (flt && combo > 0 && combo % 5 === 0) {
      flt.textContent = combo >= 20 ? "TUYỆT VỜI" : "HOÀN HẢO";
      flt.classList.remove("gv-go");
      void flt.offsetWidth;
      flt.classList.add("gv-go");
    }
  }

  function readPlaying() {
    hideUnusedMenuButtons();
    if (!vars) return;
    var move = vars.Move ? num(vars.Move) : 0;
    var over = vars.gameisover ? num(vars.gameisover) : 0;
    playing = move === 1 && over !== 1;
    var score = vars.Score ? num(vars.Score) : 0;
    if (playing && score > lastScore) {
      combo += (score - lastScore);
      popCombo();
    }
    if (!playing) {
      if (combo !== 0) combo = 0;
      releaseAllKeys();
    }
    lastScore = score;
    updateThemeFromGameState(playing, score);
    syncRecordScoreDisplay(playing);
    syncPlayHintDisplay(playing);
    updateHud();
  }

  function drawParticles(dt) {
    if (!pCtx || !pCanvas) return;
    var w = pCanvas.clientWidth;
    var h = pCanvas.clientHeight;
    pCtx.clearRect(0, 0, w, h);
    var i, p;
    for (i = particles.length - 1; i >= 0; i--) {
      p = particles[i];
      p.x += p.vx * dt * 60;
      p.y += p.vy * dt * 60;
      p.vy += 0.12 * dt * 60;
      p.life -= p.decay * dt * 60;
      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }
      pCtx.globalAlpha = Math.max(0, p.life);
      pCtx.fillStyle = p.color;
      pCtx.beginPath();
      pCtx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
      pCtx.fill();
    }
    pCtx.globalAlpha = 1;
  }

  function loop(ts) {
    rafId = requestAnimationFrame(loop);
    if (!lastTs) lastTs = ts;
    var dt = Math.min(0.05, (ts - lastTs) / 1000);
    lastTs = ts;
    readPlaying();
    drawParticles(dt);
  }

  function startLoop() {
    if (!rafId) rafId = requestAnimationFrame(loop);
  }

  function init() {
    document.documentElement.setAttribute("data-gv-tier", "0");
    document.documentElement.setAttribute("data-gv-playing", "0");
    document.documentElement.setAttribute("data-gv-record-visible", "0");
    document.documentElement.setAttribute("data-gv-play-hint", "0");
    updateDesktopHintFlag();
    buildOverlay();
    bindInput();
    bindResize();
    waitForRuntime();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, false);
  } else {
    init();
  }
})();
