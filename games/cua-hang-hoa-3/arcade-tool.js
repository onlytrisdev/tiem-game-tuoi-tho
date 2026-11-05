/**
 * Arcade tool — Cửa hàng hoa 3 (Cocos Creator / record_game79)
 * One file: cloud SaveHistory/GetHistory, Gửi điểm, Xóa data (PNG overlay).
 */
(function (global) {
  "use strict";

  var MODULE_VERSION = "cua-hang-hoa-3-tool-v3";
  var SAVE_KEY = "record_game79";
  var SAVE_URL = "https://localhost/account/SaveHistoryGame";
  var LOAD_URL = "https://localhost/account/GetHistoryGame";
  var SEND_IMG = "gv-gui-diem.png";
  var DELETE_IMG = "xoa-data-gv.png";
  var SAVE_DEBOUNCE_MS = 4000;
  var SAVE_HEARTBEAT_MS = 60000;
  var BOOT_TIMEOUT_MS = 8000;
  var SCORE_ITEM_GOLD = "2";
  /** CMS MetaData soft cap — nếu vượt thì retry metadata slim (không Progress). */
  var META_SOFT_MAX_CHARS = 48000;

  var qsKill = false;
  try {
    qsKill = new URLSearchParams(global.location.search).get("gvsave") === "0";
  } catch (e0) {
    qsKill = false;
  }

  var state = {
    seeding: false,
    resetting: false,
    dirty: false,
    lastSaveAt: 0,
    pendingSaveTimer: 0,
    lsPatched: false,
    uiReady: false,
    uiVisible: false,
    heartbeatTimer: 0,
    paused: false,
    ready: false
  };

  var readyResolve;
  var ready = new Promise(function (resolve) {
    readyResolve = resolve;
  });

  function finishReady(result) {
    if (readyResolve) {
      readyResolve(result || { ok: true });
      readyResolve = null;
    }
    return result;
  }

  function logInfo(msg, detail) {
    if (global.console && console.info) {
      if (detail !== undefined) console.info("[ArcadeTool] " + msg, detail);
      else console.info("[ArcadeTool] " + msg);
    }
  }

  function logWarn(msg, detail) {
    if (global.console && console.warn) {
      if (detail !== undefined) console.warn("[ArcadeTool] " + msg, detail);
      else console.warn("[ArcadeTool] " + msg);
    }
  }

  function readQs(search) {
    try {
      return new URLSearchParams(search || "");
    } catch (e) {
      return new URLSearchParams();
    }
  }

  function getCredentials() {
    var local = readQs(global.location.search);
    var gid = local.get("gid") || "";
    var token = local.get("token") || "";

    if ((!gid || !token) && global.parent !== global) {
      try {
        var parentQs = readQs(global.parent.location.search);
        if (!gid) gid = parentQs.get("gid") || "";
        if (!token) token = parentQs.get("token") || "";
      } catch (e1) { /* cross-origin */ }
    }

    if ((!gid || !token) && global.document && global.document.referrer) {
      try {
        var ref = new URL(global.document.referrer);
        var refQs = readQs(ref.search);
        if (!gid) gid = refQs.get("gid") || "";
        if (!token) token = refQs.get("token") || "";
      } catch (e2) { /* ignore */ }
    }

    if (!gid) return null;
    return { gameId: gid, token: token || "" };
  }

  function cloudEnabled() {
    return !qsKill && !!getCredentials();
  }

  function lsGet(key) {
    try {
      return global.localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function lsSet(key, value) {
    try {
      global.localStorage.setItem(key, String(value));
      return true;
    } catch (e) {
      return false;
    }
  }

  function lsRemove(key) {
    try {
      global.localStorage.removeItem(key);
    } catch (e) { /* ignore */ }
  }

  function safeParse(raw, fallback) {
    if (raw == null || raw === "") return fallback;
    try {
      return JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }

  function getRecord() {
    return safeParse(lsGet(SAVE_KEY), null);
  }

  function itemAmount(record, itemId) {
    if (!record || !record.player || !record.player.items) return 0;
    var v = record.player.items[itemId];
    if (v == null) v = record.player.items[String(itemId)];
    return parseInt(v, 10) || 0;
  }

  function computeHighScore(record) {
    var rec = record || getRecord();
    return itemAmount(rec, SCORE_ITEM_GOLD);
  }

  function getStageProgress(record) {
    var rec = record || getRecord();
    if (rec && rec.stage && rec.stage.stageProgress != null) {
      return parseInt(rec.stage.stageProgress, 10) || 0;
    }
    return 0;
  }

  /**
   * H5 thuần — metadata field + object Progress (cấm SaveBlob / string blob record).
   * Progress = object đã parse từ record_game79 localStorage (một lần stringify khi gửi).
   */
  function buildMetadata(recordOverride, options) {
    var opts = options || {};
    var raw =
      recordOverride != null
        ? typeof recordOverride === "string"
          ? recordOverride
          : JSON.stringify(recordOverride)
        : lsGet(SAVE_KEY);
    var parsed =
      recordOverride != null && typeof recordOverride === "object"
        ? recordOverride
        : safeParse(raw, null);
    var score = computeHighScore(parsed);
    var stage = getStageProgress(parsed);
    var meta = {
      CurrentLevel: stage,
      CurrentStage: stage,
      TotalScore: score,
      BestScore: score,
      SavedAt: new Date().toISOString(),
      gameSlug: "cua-hang-hoa-3"
    };
    // Object tiến độ — không nhúng string blob (tránh stringify kép / vượt limit CMS)
    if (!opts.slim && parsed && typeof parsed === "object") {
      meta.Progress = parsed;
    }
    return meta;
  }

  function defaultMetadata() {
    return {
      CurrentLevel: 0,
      CurrentStage: 0,
      TotalScore: 0,
      BestScore: 0,
      SavedAt: new Date().toISOString(),
      gameSlug: "cua-hang-hoa-3",
      Progress: { __version__: 1 }
    };
  }

  function isSizeLimitError(res) {
    if (!res || res.Status === 1) return false;
    var msg = String(
      (res && (res.Message || res.Msg || res.message || res.msg)) || ""
    );
    return /giới hạn|gioi han|size|limit|quá lớn|qua lon|vượt|vuot/i.test(msg);
  }

  function postForm(url, fields) {
    return fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: new URLSearchParams(fields)
    }).then(function (r) {
      return r.json().catch(function () {
        return { Status: 0 };
      });
    });
  }

  function postSaveMetadata(creds, meta) {
    var payload = JSON.stringify(meta);
    return postForm(SAVE_URL, {
      gameId: creds.gameId,
      token: creds.token,
      metadata: payload
    }).then(function (res) {
      return { res: res, payloadLen: payload.length };
    });
  }

  function saveHistoryToCloud(force) {
    var creds = getCredentials();
    if (!creds) return Promise.resolve({ skipped: true, reason: "no_gid" });
    if (!cloudEnabled()) return Promise.resolve({ skipped: true, reason: "disabled" });

    var now = Date.now();
    if (!force && now - state.lastSaveAt < SAVE_DEBOUNCE_MS) {
      state.dirty = true;
      scheduleSave();
      return Promise.resolve({ skipped: true, reason: "throttle" });
    }

    var meta = state.resetting ? defaultMetadata() : buildMetadata();
    var metaJson = JSON.stringify(meta);
    // Nếu Progress làm payload quá lớn — gửi slim field chuẩn trước (không blob)
    if (!state.resetting && metaJson.length > META_SOFT_MAX_CHARS) {
      logWarn("Metadata over soft cap, save slim fields", metaJson.length);
      meta = buildMetadata(null, { slim: true });
    }

    state.lastSaveAt = now;
    state.dirty = false;

    return postSaveMetadata(creds, meta)
      .then(function (pack) {
        var res = pack.res;
        logInfo("SaveHistoryGame", res);

        if (res && res.Status === 1) return res;

        // Size limit → retry slim (CurrentLevel/Stage/TotalScore only, no Progress)
        if (!state.resetting && isSizeLimitError(res)) {
          logWarn("SaveHistory size limit — retry slim metadata", res);
          var slim = buildMetadata(null, { slim: true });
          return postSaveMetadata(creds, slim).then(function (pack2) {
            logInfo("SaveHistoryGame slim retry", pack2.res);
            if (!(pack2.res && pack2.res.Status === 1)) {
              state.dirty = true;
            }
            return pack2.res;
          });
        }

        state.dirty = true;
        return res || { Status: 0 };
      })
      .catch(function (err) {
        state.dirty = true;
        logWarn("SaveHistoryGame failed", err);
        return { error: String(err && err.message ? err.message : err) };
      });
  }

  function scheduleSave() {
    if (state.pendingSaveTimer) clearTimeout(state.pendingSaveTimer);
    state.pendingSaveTimer = setTimeout(function () {
      state.pendingSaveTimer = 0;
      if (state.dirty) saveHistoryToCloud(true);
    }, SAVE_DEBOUNCE_MS);
  }

  /** Seed localStorage từ MetaData H5 (Progress object). Legacy blob chỉ đọc. */
  function recordFromMeta(meta) {
    if (!meta || typeof meta !== "object") return null;

    if (meta.Progress != null) {
      return typeof meta.Progress === "string"
        ? meta.Progress
        : JSON.stringify(meta.Progress);
    }

    // Legacy (chỉ đọc, không ghi lại): string blob cũ / SaveBlob Unity-style
    if (meta.record_game79 != null && meta.record_game79 !== "") {
      return typeof meta.record_game79 === "string"
        ? meta.record_game79
        : JSON.stringify(meta.record_game79);
    }
    if (meta.SaveBlob != null && meta.SaveBlob !== "") {
      return typeof meta.SaveBlob === "string"
        ? meta.SaveBlob
        : JSON.stringify(meta.SaveBlob);
    }

    // Slim cloud: chỉ có field chuẩn — patch stage/score vào record local hoặc seed tối thiểu
    if (
      meta.CurrentLevel != null ||
      meta.CurrentStage != null ||
      meta.TotalScore != null
    ) {
      var base = safeParse(lsGet(SAVE_KEY), null) || { __version__: 1 };
      if (!base.stage || typeof base.stage !== "object") base.stage = {};
      var stageVal =
        meta.CurrentStage != null
          ? meta.CurrentStage
          : meta.CurrentLevel != null
            ? meta.CurrentLevel
            : 0;
      base.stage.stageProgress = parseInt(stageVal, 10) || 0;
      if (!base.player || typeof base.player !== "object") base.player = {};
      if (!base.player.items || typeof base.player.items !== "object") {
        base.player.items = {};
      }
      if (meta.TotalScore != null) {
        base.player.items[SCORE_ITEM_GOLD] = parseInt(meta.TotalScore, 10) || 0;
      }
      base.__version__ = base.__version__ || 1;
      return JSON.stringify(base);
    }

    return null;
  }

  function fetchHistoryFromCloud() {
    var creds = getCredentials();
    if (!creds) return Promise.resolve(null);

    return postForm(LOAD_URL, {
      gameId: creds.gameId,
      token: creds.token
    })
      .then(function (res) {
        if (res && res.Status === 1 && res.Data) {
          var raw = res.Data.MetaData;
          var meta = typeof raw === "string" ? safeParse(raw, null) : raw;
          logInfo("GetHistoryGame ok");
          return meta;
        }
        logInfo("GetHistoryGame: no saved data", res);
        return null;
      })
      .catch(function (err) {
        logWarn("GetHistoryGame failed", err);
        return null;
      });
  }

  function chooseNewerBlob(localRaw, cloudRaw) {
    if (!localRaw && !cloudRaw) return null;
    if (!localRaw) return cloudRaw;
    if (!cloudRaw) return localRaw;
    var localObj = safeParse(localRaw, null);
    var cloudObj = safeParse(cloudRaw, null);
    var localScore = computeHighScore(localObj);
    var cloudScore = computeHighScore(cloudObj);
    var localStage = getStageProgress(localObj);
    var cloudStage = getStageProgress(cloudObj);
    if (cloudStage > localStage) return cloudRaw;
    if (localStage > cloudStage) return localRaw;
    if (cloudScore >= localScore) return cloudRaw;
    return localRaw;
  }

  function hydrateFromCloud() {
    if (!cloudEnabled()) return Promise.resolve(false);

    var localRaw = lsGet(SAVE_KEY);
    return fetchHistoryFromCloud().then(function (meta) {
      var cloudRaw = recordFromMeta(meta);
      var picked = chooseNewerBlob(localRaw, cloudRaw);
      if (!picked) return false;

      state.seeding = true;
      try {
        lsSet(SAVE_KEY, picked);
      } finally {
        state.seeding = false;
      }

      // Local mới hơn cloud (hoặc cloud slim) → đẩy lên định dạng H5 mới
      if (picked === localRaw && localRaw && cloudEnabled()) {
        return saveHistoryToCloud(true).then(function () {
          return true;
        });
      }
      return true;
    });
  }

  function patchLocalStorage() {
    if (state.lsPatched) return;
    state.lsPatched = true;
    var original = global.localStorage.setItem.bind(global.localStorage);
    global.localStorage.setItem = function (key, value) {
      original(key, value);
      if (key === SAVE_KEY && !state.seeding && !state.resetting && cloudEnabled()) {
        state.dirty = true;
        scheduleSave();
      }
    };
  }

  /* -------------------------------- pause / score -------------------------------- */

  var rawSetInterval = global.setInterval.bind(global);
  var rawClearInterval = global.clearInterval.bind(global);
  global.setInterval = function (fn, delay) {
    if (typeof fn !== "function") return rawSetInterval(fn, delay);
    return rawSetInterval(function () {
      if (state.paused) return;
      return fn.apply(this, arguments);
    }, delay);
  };

  function pauseGame() {
    state.paused = true;
    try {
      if (typeof cc !== "undefined") {
        if (cc.director) cc.director.pause();
        if (cc.audioEngine && cc.audioEngine.pauseAll) cc.audioEngine.pauseAll();
      }
    } catch (e) { /* ignore */ }
  }

  function resumeGame() {
    state.paused = false;
    try {
      if (typeof cc !== "undefined") {
        if (cc.director) cc.director.resume();
        if (cc.audioEngine && cc.audioEngine.resumeAll) cc.audioEngine.resumeAll();
      }
    } catch (e) { /* ignore */ }
  }

  function submitScore(onClose) {
    var score = computeHighScore();
    var closed = false;
    function done() {
      if (closed) return;
      closed = true;
      resumeGame();
      if (typeof onClose === "function") onClose();
    }

    // score.min.js exposes constructor GV — call new GV().saveScore (local: ?gid= only)
    if (typeof GV !== "function") {
      logWarn("GV constructor unavailable (score.min.js)");
      alert("Chưa tải được dịch vụ điểm Arcade.");
      done();
      return score;
    }
    if (!getCredentials()) {
      logWarn("Gửi điểm cần ?gid= trên URL");
      alert("Thiếu gid trên URL. Thêm ?gid=... để gửi điểm.");
      done();
      return score;
    }
    if (!(score > 0)) {
      alert("Bạn chưa có điểm để gửi.\n(Điểm hiện tại: " + score + ")");
      done();
      return score;
    }

    pauseGame();
    try {
      new GV().saveScore(score, done);
    } catch (e) {
      logWarn("saveScore failed", e);
      done();
      return score;
    }

    var appeared = false;
    var guard = rawSetInterval(function () {
      var dlg = document.getElementById("gv_savescore");
      if (dlg) appeared = true;
      if (appeared && !dlg) {
        rawClearInterval(guard);
        done();
      }
    }, 300);
    setTimeout(function () {
      if (!appeared) {
        rawClearInterval(guard);
        done();
      }
    }, 2500);
    return score;
  }

  /* -------------------------------- Cocos scene helpers -------------------------------- */

  function forEachNode(node, fn) {
    if (!node) return;
    fn(node);
    var children = node.children;
    if (!children || !children.length) return;
    for (var i = 0; i < children.length; i++) forEachNode(children[i], fn);
  }

  function findNodeByNames(names) {
    if (typeof cc === "undefined" || !cc.director) return null;
    var scene = cc.director.getScene();
    if (!scene) return null;
    var want = {};
    for (var i = 0; i < names.length; i++) want[names[i]] = true;
    var found = null;
    forEachNode(scene, function (node) {
      if (found) return;
      if (want[node.name]) found = node;
    });
    return found;
  }

  function isNodeReallyVisible(node) {
    if (!node) return false;
    var cur = node;
    while (cur) {
      if (cur.active === false) return false;
      if (typeof cur.opacity === "number" && cur.opacity <= 0) return false;
      cur = cur.parent;
    }
    return true;
  }

  function isLoadingScreen() {
    var splash = document.getElementById("splash");
    if (splash && splash.style.display !== "none" && splash.style.display !== "") return true;
    var loading = findNodeByNames(["vLoadingDialog"]);
    return !!(loading && isNodeReallyVisible(loading));
  }

  function findSettingButtonNode() {
    if (typeof cc === "undefined" || !cc.director) return null;
    var scene = cc.director.getScene();
    if (!scene) return null;
    var found = null;
    forEachNode(scene, function (node) {
      if (found) return;
      if (
        node.name === "CC_buttonSetting" ||
        node.name === "buttonSetting" ||
        node.name === "btnSetting"
      ) {
        found = node;
        return;
      }
      var comps = node._components || [];
      for (var i = 0; i < comps.length; i++) {
        var c = comps[i];
        if (c && c.buttonSetting && c.buttonSetting.node) {
          found = c.buttonSetting.node;
          return;
        }
      }
    });
    return found;
  }

  function isMainHudVisible() {
    if (isLoadingScreen()) return false;
    var setting = findSettingButtonNode();
    if (setting && isNodeReallyVisible(setting)) return true;
    var hud = findNodeByNames(["vHudDialog", "CC_nodeHudUIRoot", "CC_nodeHudUINormal"]);
    return !!(hud && isNodeReallyVisible(hud));
  }

  /* -------------------------------- Overlay UI (icon-only PNG) -------------------------------- */

  function ensureStyles() {
    if (document.getElementById("gv-tool-style")) return;
    var css = document.createElement("style");
    css.id = "gv-tool-style";
    css.textContent =
      "#gv-ui-overlay{position:fixed;inset:0;pointer-events:none;z-index:99990;}" +
      "#gv-ui-overlay.gv-hidden{display:none !important;}" +
      "#gv-ui-overlay .gv-btn{pointer-events:auto;position:absolute;border:0;background:transparent;" +
      "padding:0;margin:0;cursor:pointer;-webkit-tap-highlight-color:transparent;" +
      "transform:scale(0.8);opacity:0.6;transition:transform .2s ease,opacity .2s ease;}" +
      "#gv-ui-overlay .gv-btn:hover,#gv-ui-overlay .gv-btn:focus-visible{transform:scale(1);opacity:1;}" +
      "#gv-ui-overlay .gv-btn:active{transform:scale(0.96);opacity:1;}" +
      "#gv-ui-overlay .gv-btn img{display:block;width:52px;height:52px;object-fit:contain;}" +
      "#gv-reset-modal{display:none;position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.55);" +
      "align-items:center;justify-content:center;font-family:sans-serif;}" +
      "#gv-reset-modal.gv-open{display:flex;}" +
      "#gv-reset-modal .box{background:#fff;border-radius:12px;padding:18px 20px;max-width:320px;width:86%;text-align:center;}" +
      "#gv-reset-modal p{margin:0 0 14px;color:#333;font-size:15px;line-height:1.4;}" +
      "#gv-reset-modal .row{display:flex;gap:10px;}" +
      "#gv-reset-modal button{flex:1;padding:10px;border:none;border-radius:8px;font-weight:700;cursor:pointer;}" +
      "#gv-reset-ok{background:#e74c3c;color:#fff;}" +
      "#gv-reset-cancel{background:#bdc3c7;color:#222;}";
    document.head.appendChild(css);
  }

  function createOverlay() {
    if (state.uiReady) return;
    ensureStyles();

    var wrap = document.createElement("div");
    wrap.id = "gv-ui-overlay";
    wrap.className = "gv-hidden";

    var btnScore = document.createElement("button");
    btnScore.type = "button";
    btnScore.id = "gv-btn-gui";
    btnScore.className = "gv-btn";
    btnScore.title = "Gửi điểm";
    btnScore.setAttribute("aria-label", "Gửi điểm");
    var imgScore = document.createElement("img");
    imgScore.src = SEND_IMG;
    imgScore.alt = "Gửi điểm";
    btnScore.appendChild(imgScore);

    var btnDel = document.createElement("button");
    btnDel.type = "button";
    btnDel.id = "gv-btn-xoa";
    btnDel.className = "gv-btn";
    btnDel.title = "Xóa dữ liệu";
    btnDel.setAttribute("aria-label", "Xóa dữ liệu");
    var imgDel = document.createElement("img");
    imgDel.src = DELETE_IMG;
    imgDel.alt = "Xóa dữ liệu";
    btnDel.appendChild(imgDel);

    btnScore.addEventListener("click", function (ev) {
      ev.preventDefault();
      submitScore(function () {
        saveHistoryToCloud(true);
      });
    });
    btnDel.addEventListener("click", function (ev) {
      ev.preventDefault();
      showResetModal(true);
    });

    wrap.appendChild(btnScore);
    wrap.appendChild(btnDel);
    document.body.appendChild(wrap);

    var modal = document.createElement("div");
    modal.id = "gv-reset-modal";
    modal.innerHTML =
      '<div class="box"><p>Bạn chắc chắn muốn xóa tất cả dữ liệu game và chơi lại từ đầu?</p>' +
      '<div class="row"><button type="button" id="gv-reset-cancel">Hủy</button>' +
      '<button type="button" id="gv-reset-ok">OK</button></div></div>';
    document.body.appendChild(modal);
    modal.querySelector("#gv-reset-cancel").onclick = function () {
      showResetModal(false);
    };
    modal.querySelector("#gv-reset-ok").onclick = function () {
      showResetModal(false);
      resetAllProgress();
    };

    state.uiReady = true;
    rawSetInterval(refreshOverlay, 400);
    global.addEventListener("resize", positionButtons);
  }

  function showResetModal(open) {
    var modal = document.getElementById("gv-reset-modal");
    if (!modal) return;
    if (open) modal.classList.add("gv-open");
    else modal.classList.remove("gv-open");
  }

  function resetAllProgress() {
    state.resetting = true;
    try {
      lsRemove(SAVE_KEY);
    } catch (e) { /* ignore */ }
    var done = function () {
      state.resetting = false;
      global.location.reload();
    };
    if (cloudEnabled()) {
      saveHistoryToCloud(true)
        .catch(function () {})
        .then(done);
    } else {
      done();
    }
  }

  function positionButtons() {
    var btnScore = document.getElementById("gv-btn-gui");
    var btnDel = document.getElementById("gv-btn-xoa");
    if (!btnScore || !btnDel) return;

    var canvas = document.getElementById("GameCanvas");
    var rect = canvas ? canvas.getBoundingClientRect() : null;
    var right = rect ? Math.max(8, window.innerWidth - rect.right + 10) : 10;
    var top = rect ? Math.max(8, rect.top + 10) : 10;
    var gap = 8;
    var size = 52;

    btnScore.style.right = right + "px";
    btnScore.style.top = top + "px";
    btnScore.style.left = "auto";

    btnDel.style.right = right + size + gap + "px";
    btnDel.style.top = top + "px";
    btnDel.style.left = "auto";

    // Prefer place delete under settings when settings gear is found
    var setting = findSettingButtonNode();
    if (setting && canvas && typeof cc !== "undefined" && cc.view) {
      try {
        var wp = setting.convertToWorldSpaceAR(cc.v2(0, 0));
        var vis = cc.view.getVisibleSize();
        var origin = cc.view.getVisibleOrigin();
        var scaleX = rect.width / vis.width;
        var scaleY = rect.height / vis.height;
        var sx = (wp.x - origin.x) * scaleX + rect.left;
        var sy = (vis.height - (wp.y - origin.y)) * scaleY + rect.top;
        var nodeH = (setting.height || 60) * Math.abs(setting.scaleY || 1) * scaleY;
        btnDel.style.left = Math.max(4, sx - size / 2) + "px";
        btnDel.style.right = "auto";
        btnDel.style.top = Math.max(4, sy + nodeH * 0.55) + "px";
      } catch (e) { /* keep corner layout */ }
    }
  }

  function refreshOverlay() {
    if (!state.uiReady) return;
    var wrap = document.getElementById("gv-ui-overlay");
    if (!wrap) return;
    if (isMainHudVisible()) {
      wrap.classList.remove("gv-hidden");
      state.uiVisible = true;
      positionButtons();
    } else {
      wrap.classList.add("gv-hidden");
      state.uiVisible = false;
    }
  }

  /* -------------------------------- Ads / network stubs (keep playable on Arcade) -------------------------------- */

  function installH5ApiStub() {
    var stub = {
      initGame: function (cb) {
        if (typeof cb === "function") setTimeout(cb, 0);
      },
      progress: function () {},
      canPlayAd: function (cb) {
        if (typeof cb === "function")
          setTimeout(function () {
            cb({ canPlayAd: true, remain: 99 });
          }, 0);
      },
      playAd: function (cb) {
        if (typeof cb !== "function") return;
        setTimeout(function () {
          cb({ code: 10000 });
        }, 30);
        setTimeout(function () {
          cb({ code: 10001 });
        }, 120);
      },
      share: function () {},
      isLogin: function () {
        return !!getCredentials();
      },
      login: function (cb) {
        if (typeof cb === "function")
          setTimeout(function () {
            cb({ uId: "guest", userName: "guest" });
          }, 0);
      },
      getUserAvatar: function () {
        return "";
      },
      getRanking: function (cb) {
        if (typeof cb === "function")
          setTimeout(function () {
            cb({ code: 0, data: [] });
          }, 0);
      },
      submitRanking: function (score, cb) {
        if (typeof cb === "function")
          setTimeout(function () {
            cb({ code: 0 });
          }, 0);
      }
    };
    try {
      Object.defineProperty(global, "h5api", {
        configurable: true,
        enumerable: true,
        get: function () {
          return stub;
        },
        set: function () {}
      });
    } catch (e) {
      global.h5api = stub;
    }
  }

  function isBlockedRemoteUrl(url) {
    if (!url) return false;
    var u = String(url).toLowerCase();
    return (
      u.indexOf("ultralisk.cn") >= 0 ||
      u.indexOf("192.168.1.149") >= 0 ||
      u.indexOf("h.api.4399.com") >= 0 ||
      u.indexOf("h5api-interface") >= 0
    );
  }

  function installNetworkFastFail() {
    var origAppend = Node.prototype.appendChild;
    Node.prototype.appendChild = function (child) {
      try {
        if (
          child &&
          child.tagName === "SCRIPT" &&
          isBlockedRemoteUrl(child.src || child.getAttribute("src"))
        ) {
          setTimeout(function () {
            if (typeof child.onload === "function") child.onload();
          }, 0);
          return child;
        }
      } catch (e) { /* ignore */ }
      return origAppend.apply(this, arguments);
    };

    var Xo = global.XMLHttpRequest;
    if (Xo) {
      var open = Xo.prototype.open;
      var send = Xo.prototype.send;
      Xo.prototype.open = function (method, url) {
        this.__gvBlocked = isBlockedRemoteUrl(url);
        return open.apply(this, arguments);
      };
      Xo.prototype.send = function () {
        if (this.__gvBlocked) {
          var self = this;
          setTimeout(function () {
            Object.defineProperty(self, "readyState", {
              configurable: true,
              get: function () {
                return 4;
              }
            });
            Object.defineProperty(self, "status", {
              configurable: true,
              get: function () {
                return 0;
              }
            });
            Object.defineProperty(self, "responseText", {
              configurable: true,
              get: function () {
                return "";
              }
            });
            if (typeof self.onreadystatechange === "function") self.onreadystatechange();
            if (typeof self.onerror === "function") self.onerror(new ProgressEvent("error"));
          }, 0);
          return;
        }
        return send.apply(this, arguments);
      };
    }
  }

  /* -------------------------------- Boot -------------------------------- */

  function afterGameRunning() {
    if (state.ready) {
      createOverlay();
      return;
    }
    state.ready = true;
    createOverlay();
    patchLocalStorage();
    if (!state.heartbeatTimer && cloudEnabled()) {
      state.heartbeatTimer = rawSetInterval(function () {
        if (state.dirty) saveHistoryToCloud(true);
      }, SAVE_HEARTBEAT_MS);
    }
    logInfo("ready " + MODULE_VERSION);
  }

  function waitForSceneThenReady() {
    var wait = rawSetInterval(function () {
      if (typeof cc !== "undefined" && cc.director && cc.director.getScene()) {
        rawClearInterval(wait);
        afterGameRunning();
      }
    }, 200);
  }

  function runBootChain(originalBoot) {
    var timedOut = false;
    var timer = setTimeout(function () {
      timedOut = true;
      logWarn("cloud hydrate timeout — boot with local");
      finishReady({ ok: true, timedOut: true });
      originalBoot();
      waitForSceneThenReady();
    }, BOOT_TIMEOUT_MS);

    hydrateFromCloud()
      .catch(function () {
        return false;
      })
      .then(function () {
        if (timedOut) return;
        clearTimeout(timer);
        finishReady({ ok: true });
        originalBoot();
        waitForSceneThenReady();
      });
  }

  function installBootHook() {
    if (typeof global.boot !== "function") return false;
    if (global.boot.__gvWrapped) return true;
    var originalBoot = global.boot;
    global.boot = function () {
      runBootChain(originalBoot);
    };
    global.boot.__gvWrapped = true;
    logInfo("boot wrapped");
    return true;
  }

  installH5ApiStub();
  installNetworkFastFail();
  patchLocalStorage();

  if (!installBootHook()) {
    var poll = rawSetInterval(function () {
      if (installBootHook()) rawClearInterval(poll);
    }, 10);
  }

  rawSetInterval(function () {
    if (typeof cc !== "undefined" && cc.director && cc.director.getScene()) {
      afterGameRunning();
    }
  }, 2000);

  global.ArcadeTool = {
    version: MODULE_VERSION,
    ready: ready,
    getHighScore: function () {
      return computeHighScore();
    },
    saveNow: function () {
      return saveHistoryToCloud(true);
    },
    submitScore: submitScore
  };
})(typeof window !== "undefined" ? window : this);
