/**
 * Arcade tool — Mũi tên phép thuật 2 (Babylon.js / Arrow Fest)
 * Cloud save/load (localStorage DataStorage), xóa data hub, GV.saveScore khi kết thúc vòng.
 *
 * Điểm kỷ lục:
 *   roundScore = roundKnights + ARROW_UPDATE_LEVEL + COIN_UPDATE_LEVEL + (full clear ? 1 : 0)
 *   LEVEL_BEST[levelId] = max(...); TotalScore = sum(LEVEL_BEST)
 */
(function (global) {
  "use strict";

  var MODULE_VERSION = "mui-ten-phep-thuat-2-tool-v2";
  var GAME_SLUG = "mui-ten-phep-thuat-2";
  var SAVE_URL = "https://localhost/account/SaveHistoryGame";
  var LOAD_URL = "https://localhost/account/GetHistoryGame";
  var ID_PREFIX = "ds_2021_8_arrows_fest_v3_";
  var DELETE_IMG = "xoa-data-gv.png";
  var SAVE_DEBOUNCE_MS = 2500;
  var BOOT_TIMEOUT_MS = 8000;

  /** Keys Babylon.DataStorage (localStorage) — số */
  var FIELD_KEYS = [
    "ARROWS",
    "CURRENT_LEVEL_VISIBLE",
    "CURRENT_LEVEL_TEMP",
    "ARROW_UPDATE_LEVEL",
    "ARROW_UPDATE_PRICE",
    "COIN_UPDATE_LEVEL",
    "COIN_UPDATE_PRICE",
    "COIN_MULT",
    "COINS",
    "max",
    "wins",
    "KNIGHTS",
    "TOTAL_SCORE"
  ];

  /** JSON object map levelId -> best round score */
  var JSON_KEYS = ["LEVEL_BEST"];

  var DEFAULTS = {
    ARROWS: 1,
    CURRENT_LEVEL_VISIBLE: 1,
    CURRENT_LEVEL_TEMP: 1,
    ARROW_UPDATE_LEVEL: 1,
    ARROW_UPDATE_PRICE: 100,
    COIN_UPDATE_LEVEL: 1,
    COIN_UPDATE_PRICE: 100,
    COIN_MULT: 1,
    COINS: 0,
    max: 0,
    wins: 0,
    KNIGHTS: 0,
    TOTAL_SCORE: 0,
    LEVEL_BEST: {}
  };

  var qsKill = false;
  try {
    qsKill = new URLSearchParams(global.location.search).get("gvsave") === "0";
  } catch (e) {
    qsKill = false;
  }

  var state = {
    seeding: false,
    dirty: false,
    saveTimer: 0,
    resetting: false,
    lsPatched: false,
    uiReady: false,
    hubVisible: false,
    loaderGone: false,
    roundKnights: 0,
    roundWon: false,
    lastPresentedScore: 0,
    scoreBusy: false
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

  function logInfo(msg, d) {
    if (global.console && console.info) {
      if (d !== undefined) console.info("[ArcadeTool] " + msg, d);
      else console.info("[ArcadeTool] " + msg);
    }
  }

  function logWarn(msg, d) {
    if (global.console && console.warn) {
      if (d !== undefined) console.warn("[ArcadeTool] " + msg, d);
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
    var local = readQs(global.location && global.location.search);
    var gid = local.get("gid") || "";
    var token = local.get("token") || "";

    if ((!gid || !token) && global.parent !== global) {
      try {
        var parentQs = readQs(global.parent.location.search);
        if (!gid) gid = parentQs.get("gid") || "";
        if (!token) token = parentQs.get("token") || "";
      } catch (e) {
        /* cross-origin */
      }
    }

    if ((!gid || !token) && global.document && global.document.referrer) {
      try {
        var ref = new URL(global.document.referrer);
        var refQs = readQs(ref.search);
        if (!gid) gid = refQs.get("gid") || "";
        if (!token) token = refQs.get("token") || "";
      } catch (e2) {
        /* ignore */
      }
    }

    return { gid: gid, token: token || "" };
  }

  function isOfflineCloudHost() {
    try {
      var host = String((global.location && global.location.hostname) || "").toLowerCase();
      if (!host || host === "localhost" || host === "127.0.0.1") return true;
      if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) return true;
      if (host === "localhost" || host === "www.localhost" || host === "e.localhost") return false;
      if (host.indexOf(".localhost") >= 0) return false;
      return false;
    } catch (e) {
      return true;
    }
  }

  function cloudEnabled() {
    return !qsKill && !isOfflineCloudHost() && !!getCredentials().gid;
  }

  function storageKey(field) {
    return ID_PREFIX + field;
  }

  function isTrackedKey(key) {
    var k = String(key || "");
    if (k.indexOf(ID_PREFIX) !== 0) return false;
    var field = k.slice(ID_PREFIX.length);
    return FIELD_KEYS.indexOf(field) >= 0 || JSON_KEYS.indexOf(field) >= 0;
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
      global.localStorage.setItem(key, value);
      return true;
    } catch (e) {
      return false;
    }
  }

  function lsRemove(key) {
    try {
      global.localStorage.removeItem(key);
    } catch (e) {
      /* ignore */
    }
  }

  function readNumber(field, fallback) {
    var raw = lsGet(storageKey(field));
    if (raw === null || raw === undefined || raw === "") {
      return fallback !== undefined ? fallback : DEFAULTS[field] || 0;
    }
    var n = Number(raw);
    return isFinite(n) ? n : fallback !== undefined ? fallback : DEFAULTS[field] || 0;
  }

  function writeNumber(field, value) {
    lsSet(storageKey(field), String(value));
  }

  function readLevelBest() {
    var raw = lsGet(storageKey("LEVEL_BEST"));
    if (!raw) return {};
    try {
      var parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
      return parsed;
    } catch (e) {
      return {};
    }
  }

  function writeLevelBest(map) {
    lsSet(storageKey("LEVEL_BEST"), JSON.stringify(map && typeof map === "object" ? map : {}));
  }

  function sumLevelBest(map) {
    var best = map || {};
    var total = 0;
    var keys = Object.keys(best);
    for (var i = 0; i < keys.length; i++) {
      var v = Math.max(0, Math.floor(Number(best[keys[i]]) || 0));
      total += v;
    }
    return total;
  }

  function readAllFields() {
    var out = {};
    for (var i = 0; i < FIELD_KEYS.length; i++) {
      var f = FIELD_KEYS[i];
      out[f] = readNumber(f, DEFAULTS[f]);
    }
    out.LEVEL_BEST = readLevelBest();
    out.TOTAL_SCORE = sumLevelBest(out.LEVEL_BEST);
    return out;
  }

  /** TotalScore = tổng điểm cao từng level đã chơi */
  function computeScore(fields) {
    var f = fields || readAllFields();
    if (f.LEVEL_BEST && typeof f.LEVEL_BEST === "object") {
      return sumLevelBest(f.LEVEL_BEST);
    }
    return Math.max(0, Math.floor(Number(f.TOTAL_SCORE) || 0));
  }

  function computeRoundScore(fields) {
    var f = fields || readAllFields();
    var arrowLv = Math.max(0, Math.floor(Number(f.ARROW_UPDATE_LEVEL) || 0));
    var coinLv = Math.max(0, Math.floor(Number(f.COIN_UPDATE_LEVEL) || 0));
    var knights = Math.max(0, Math.floor(Number(state.roundKnights) || 0));
    var winBonus = state.roundWon ? 1 : 0;
    return knights + arrowLv + coinLv + winBonus;
  }

  function buildMetadata(fields) {
    var f = fields || readAllFields();
    var score = computeScore(f);
    f.TOTAL_SCORE = score;
    f.LEVEL_BEST = f.LEVEL_BEST || readLevelBest();
    return {
      schemaVersion: 2,
      game: GAME_SLUG,
      gameSlug: GAME_SLUG,
      CurrentLevel: Math.max(0, Math.floor(Number(f.CURRENT_LEVEL_VISIBLE) || 1)),
      CurrentStage: Math.max(0, Math.floor(Number(f.CURRENT_LEVEL_TEMP) || 1)),
      TotalScore: score,
      fields: f,
      cleared: false,
      savedAt: new Date().toISOString()
    };
  }

  function buildClearedMetadata() {
    var clearedFields = Object.assign({}, DEFAULTS, { LEVEL_BEST: {}, TOTAL_SCORE: 0 });
    return {
      schemaVersion: 2,
      game: GAME_SLUG,
      gameSlug: GAME_SLUG,
      CurrentLevel: 0,
      CurrentStage: 0,
      TotalScore: 0,
      fields: clearedFields,
      cleared: true,
      savedAt: new Date().toISOString()
    };
  }

  function postForm(url, fields) {
    return fetch(url, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
      body: new URLSearchParams(fields)
    }).then(function (res) {
      return res.json().catch(function () {
        return null;
      });
    });
  }

  function parseMeta(res) {
    if (!res) return null;
    var raw = null;
    if (res.Status === 1 && res.Data) {
      raw = res.Data.MetaData || res.Data.metaData || res.Data.metadata;
    } else {
      raw = res.MetaData || res.metadata || res.data || res.Data;
    }
    if (!raw) return null;
    try {
      return typeof raw === "string" ? JSON.parse(raw) : raw;
    } catch (e) {
      return null;
    }
  }

  function applyFields(fields) {
    if (!fields || typeof fields !== "object") return false;
    state.seeding = true;
    try {
      for (var i = 0; i < FIELD_KEYS.length; i++) {
        var f = FIELD_KEYS[i];
        if (fields[f] === undefined || fields[f] === null) continue;
        writeNumber(f, fields[f]);
      }
      if (fields.LEVEL_BEST !== undefined && fields.LEVEL_BEST !== null) {
        var best = fields.LEVEL_BEST;
        if (typeof best === "string") {
          try {
            best = JSON.parse(best);
          } catch (e) {
            best = {};
          }
        }
        writeLevelBest(best);
        writeNumber("TOTAL_SCORE", sumLevelBest(best));
      } else if (fields.TOTAL_SCORE !== undefined) {
        writeNumber("TOTAL_SCORE", fields.TOTAL_SCORE);
      }
    } finally {
      state.seeding = false;
    }
    return true;
  }

  function clearLocalProgress() {
    state.seeding = true;
    try {
      for (var i = 0; i < FIELD_KEYS.length; i++) {
        lsRemove(storageKey(FIELD_KEYS[i]));
      }
      for (var j = 0; j < JSON_KEYS.length; j++) {
        lsRemove(storageKey(JSON_KEYS[j]));
      }
    } finally {
      state.seeding = false;
    }
  }

  function sendSave(reason) {
    if (state.resetting) return Promise.resolve(false);
    if (!cloudEnabled()) {
      logInfo("Bo qua save (" + reason + "): cloud tat / thieu gid.");
      return Promise.resolve(false);
    }
    var cred = getCredentials();
    var metadata = buildMetadata();
    state.dirty = false;
    return postForm(SAVE_URL, {
      gameId: cred.gid,
      token: cred.token,
      metadata: JSON.stringify(metadata),
      metaData: JSON.stringify(metadata),
      CurrentLevel: metadata.CurrentLevel,
      CurrentStage: metadata.CurrentStage,
      TotalScore: metadata.TotalScore
    })
      .then(function (res) {
        var ok = !!(res && res.Status === 1);
        if (ok) logInfo("Save OK (" + reason + ") TotalScore=" + metadata.TotalScore);
        else logWarn("Save failed (" + reason + ")", res);
        return ok;
      })
      .catch(function (err) {
        logWarn("Save loi (" + reason + "): " + (err && err.message ? err.message : err));
        return false;
      });
  }

  function requestSave(reason) {
    if (state.seeding || state.resetting) return;
    state.dirty = true;
    if (state.saveTimer) return;
    state.saveTimer = global.setTimeout(function () {
      state.saveTimer = 0;
      sendSave(reason || "debounce");
    }, SAVE_DEBOUNCE_MS);
  }

  function flushSave(reason) {
    if (state.saveTimer) {
      global.clearTimeout(state.saveTimer);
      state.saveTimer = 0;
    }
    return sendSave(reason || "flush");
  }

  function patchLocalStorage() {
    if (state.lsPatched) return;
    try {
      var proto = Storage.prototype;
      if (proto.__gvMuiTenPatched) return;
      var origSet = proto.setItem;
      var origRemove = proto.removeItem;
      proto.setItem = function (key, value) {
        var result = origSet.apply(this, arguments);
        if (!state.seeding && !state.resetting && isTrackedKey(key)) {
          requestSave("ls-set:" + key);
        }
        return result;
      };
      proto.removeItem = function (key) {
        var result = origRemove.apply(this, arguments);
        if (!state.seeding && !state.resetting && isTrackedKey(key)) {
          requestSave("ls-remove:" + key);
        }
        return result;
      };
      proto.__gvMuiTenPatched = true;
      state.lsPatched = true;
      logInfo("Da patch localStorage prefix " + ID_PREFIX);
    } catch (e) {
      logWarn("Patch localStorage that bai", e);
    }
  }

  function loadHistory() {
    var run = function () {
      if (qsKill) {
        logInfo("gvsave=0 — bo qua cloud load.");
        return Promise.resolve({ ok: true, seeded: false });
      }
      if (!getCredentials().gid) {
        logInfo("Bo qua load: khong co gid.");
        return Promise.resolve({ ok: true, seeded: false });
      }
      if (isOfflineCloudHost()) {
        logInfo("Bo qua load: host offline.");
        return Promise.resolve({ ok: true, seeded: false });
      }

      var cred = getCredentials();
      return postForm(LOAD_URL, {
        gameId: cred.gid,
        token: cred.token
      })
        .then(function (res) {
          logInfo("GetHistoryGame Status=" + (res && res.Status));
          var metadata = parseMeta(res);
          if (!metadata) {
            logInfo("Load: chua co save cloud.");
            return { ok: true, seeded: false };
          }
          if (metadata.cleared) {
            logInfo("Load: cloud cleared — xoa local.");
            clearLocalProgress();
            return { ok: true, seeded: false };
          }
          var fields = metadata.fields || (metadata.Storage && metadata.Storage.fields) || null;
          if (!fields) {
            logInfo("Load: metadata thieu fields.");
            return { ok: true, seeded: false };
          }
          applyFields(fields);
          state.lastPresentedScore = Math.max(
            state.lastPresentedScore,
            computeScore(fields)
          );
          logInfo("Load OK TotalScore=" + computeScore(fields));
          return { ok: true, seeded: true };
        })
        .catch(function (err) {
          logWarn("Load loi (fail-open): " + (err && err.message ? err.message : err));
          return { ok: false, seeded: false };
        });
    };

    return Promise.race([
      run(),
      new Promise(function (resolve) {
        global.setTimeout(function () {
          logWarn("Load timeout " + BOOT_TIMEOUT_MS + "ms — fail-open.");
          resolve({ ok: false, seeded: false, timeout: true });
        }, BOOT_TIMEOUT_MS);
      })
    ]).then(function (result) {
      return finishReady(result);
    });
  }

  /* ============================ score ============================ */

  function presentScoreIfRecord(score) {
    var n = Math.max(0, Math.floor(Number(score) || 0));
    if (!(n > state.lastPresentedScore)) {
      logInfo("Skip saveScore (not new record)", { score: n, last: state.lastPresentedScore });
      return;
    }
    if (typeof global.GV !== "function") {
      logWarn("GV chua san sang — bo qua saveScore.");
      state.lastPresentedScore = n;
      flushSave("score-no-gv");
      return;
    }

    state.scoreBusy = true;
    state.lastPresentedScore = n;
    logInfo("Present saveScore (new record)", n);

    function done() {
      state.scoreBusy = false;
      flushSave("score-close");
    }

    try {
      new global.GV().saveScore(n, done);
      global.setTimeout(function () {
        if (state.scoreBusy) {
          var el = global.document.getElementById("gv_savescore");
          if (!el) done();
        }
      }, 4000);
    } catch (e) {
      logWarn("saveScore loi", e);
      done();
    }
  }

  function onKnightDefeated(knightNumber) {
    state.roundKnights++;
    if (Number(knightNumber) === 10) {
      state.roundWon = true;
    }
    var total = readNumber("KNIGHTS", 0) + 1;
    state.seeding = true;
    try {
      writeNumber("KNIGHTS", total);
    } finally {
      state.seeding = false;
    }
    requestSave("knight");
  }

  function onRoundEnd() {
    var fields = readAllFields();
    var levelId = 1;
    try {
      if (global.game && global.game.CURRENT_LEVEL_VISIBLE != null) {
        levelId = Math.max(1, Math.floor(Number(global.game.CURRENT_LEVEL_VISIBLE) || 1));
      } else {
        levelId = Math.max(1, Math.floor(Number(fields.CURRENT_LEVEL_VISIBLE) || 1));
      }
    } catch (e) {
      levelId = Math.max(1, Math.floor(Number(fields.CURRENT_LEVEL_VISIBLE) || 1));
    }

    var roundScore = computeRoundScore(fields);
    var levelBest = readLevelBest();
    var prevBest = Math.max(0, Math.floor(Number(levelBest[String(levelId)]) || 0));
    if (roundScore > prevBest) {
      levelBest[String(levelId)] = roundScore;
    }
    var totalScore = sumLevelBest(levelBest);

    state.seeding = true;
    try {
      writeLevelBest(levelBest);
      writeNumber("TOTAL_SCORE", totalScore);
    } finally {
      state.seeding = false;
    }

    logInfo("Round end level=" + levelId + " roundScore=" + roundScore + " TotalScore=" + totalScore, {
      prevBest: prevBest,
      arrowLv: fields.ARROW_UPDATE_LEVEL,
      coinLv: fields.COIN_UPDATE_LEVEL,
      roundKnights: state.roundKnights,
      roundWon: state.roundWon,
      levelBest: levelBest
    });

    flushSave("round-end");
    presentScoreIfRecord(totalScore);
    state.roundKnights = 0;
    state.roundWon = false;
  }

  function onRunStart() {
    state.roundKnights = 0;
    state.roundWon = false;
    setHubVisible(false);
  }

  function onHubReady() {
    state.loaderGone = true;
    setHubVisible(true);
  }

  function onLoaderHidden() {
    state.loaderGone = true;
    updateDeleteVisibility();
  }

  /* ============================ delete UI ============================ */

  function ensureOverlay() {
    if (state.uiReady) return;
    var doc = global.document;
    if (!doc || !doc.body) return;

    var style = doc.createElement("style");
    style.id = "gv-tool-style";
    style.textContent =
      "#gv-btn-xoa{position:fixed;z-index:99991;pointer-events:auto;border:0;padding:0;" +
      "background:transparent;cursor:pointer;-webkit-tap-highlight-color:transparent;" +
      "display:none;touch-action:manipulation;width:56px;height:56px;" +
      "opacity:0.85;transform:scale(0.8);transform-origin:bottom left;" +
      "transition:opacity .2s ease,transform .2s ease;}" +
      "#gv-btn-xoa:hover,#gv-btn-xoa:focus-visible{opacity:1;transform:scale(1);outline:none;}" +
      "#gv-btn-xoa img{display:block;width:100%;height:100%;object-fit:contain;pointer-events:none;}" +
      "#gv-reset-modal{position:fixed;inset:0;z-index:100000;display:none;align-items:center;" +
      "justify-content:center;background:rgba(0,0,0,.55);pointer-events:auto;}" +
      "#gv-reset-modal .gv-reset-box{background:#1a1a2e;color:#fff;border-radius:12px;" +
      "padding:20px 22px;max-width:320px;width:86%;box-shadow:0 8px 24px rgba(0,0,0,.4);" +
      "font-family:Arial,Helvetica,sans-serif;}" +
      "#gv-reset-modal h3{margin:0 0 10px;font-size:18px;}" +
      "#gv-reset-modal p{margin:0 0 16px;font-size:14px;line-height:1.45;}" +
      "#gv-reset-modal .gv-reset-actions{display:flex;gap:10px;justify-content:flex-end;}" +
      "#gv-reset-modal button{border:0;border-radius:8px;padding:10px 16px;font-size:14px;" +
      "font-weight:700;cursor:pointer;}" +
      "#gv-reset-confirm{background:#d32f2f;color:#fff;}" +
      "#gv-reset-cancel{background:#444;color:#fff;}";
    doc.head.appendChild(style);

    var btn = doc.createElement("button");
    btn.id = "gv-btn-xoa";
    btn.type = "button";
    btn.setAttribute("aria-label", "Xóa dữ liệu");
    btn.title = "Xóa dữ liệu";
    btn.innerHTML = '<img src="' + DELETE_IMG + '" alt="">';
    btn.addEventListener("click", function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      showResetModal();
    });
    doc.body.appendChild(btn);

    var modal = doc.createElement("div");
    modal.id = "gv-reset-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.innerHTML =
      '<div class="gv-reset-box">' +
      "<h3>Xóa dữ liệu</h3>" +
      "<p>Bạn chắc chắn muốn xóa tất cả dữ liệu game và chơi lại từ đầu?</p>" +
      '<div class="gv-reset-actions">' +
      '<button type="button" id="gv-reset-cancel">Hủy</button>' +
      '<button type="button" id="gv-reset-confirm">OK</button>' +
      "</div></div>";
    doc.body.appendChild(modal);
    modal.querySelector("#gv-reset-cancel").addEventListener("click", hideResetModal);
    modal.querySelector("#gv-reset-confirm").addEventListener("click", function () {
      hideResetModal();
      wipeAndReload();
    });
    modal.addEventListener("click", function (ev) {
      if (ev.target === modal) hideResetModal();
    });

    state.uiReady = true;
    global.addEventListener("resize", layoutDeleteButton);
    global.addEventListener("orientationchange", function () {
      global.setTimeout(layoutDeleteButton, 200);
    });
    layoutDeleteButton();
  }

  function showResetModal() {
    var modal = global.document.getElementById("gv-reset-modal");
    if (modal) modal.style.display = "flex";
  }

  function hideResetModal() {
    var modal = global.document.getElementById("gv-reset-modal");
    if (modal) modal.style.display = "none";
  }

  function layoutDeleteButton() {
    ensureOverlay();
    var btn = global.document.getElementById("gv-btn-xoa");
    if (!btn) return;

    var canvas = global.document.getElementById("canvas");
    var rect = canvas ? canvas.getBoundingClientRect() : null;
    var left = 12;
    var bottom = 12;
    var size = 56;
    if (rect && rect.width > 0) {
      size = Math.max(44, Math.min(64, Math.round(rect.width * 0.09)));
      left = Math.round(rect.left + 12);
      bottom = Math.round(Math.max(8, global.innerHeight - rect.bottom + 12));
    }
    btn.style.width = size + "px";
    btn.style.height = size + "px";
    btn.style.left = left + "px";
    btn.style.bottom = bottom + "px";
    btn.style.right = "auto";
    btn.style.top = "auto";
  }

  function setHubVisible(visible) {
    state.hubVisible = !!visible;
    updateDeleteVisibility();
  }

  function updateDeleteVisibility() {
    ensureOverlay();
    var btn = global.document.getElementById("gv-btn-xoa");
    if (!btn) return;
    // loaderGone already means hub boot finished — do not re-check lock_loader
    // (onHubReady runs before main.js hides the loader).
    var show = state.loaderGone && state.hubVisible && !state.resetting;
    btn.style.display = show ? "block" : "none";
    if (show) layoutDeleteButton();
  }

  function wipeAndReload() {
    state.resetting = true;
    updateDeleteVisibility();
    clearLocalProgress();
    var cred = getCredentials();
    var wipe = Promise.resolve(false);
    if (cloudEnabled()) {
      var meta = buildClearedMetadata();
      wipe = postForm(SAVE_URL, {
        gameId: cred.gid,
        token: cred.token,
        metadata: JSON.stringify(meta),
        metaData: JSON.stringify(meta),
        CurrentLevel: 0,
        CurrentStage: 0,
        TotalScore: 0
      })
        .then(function (res) {
          logInfo("Wipe cloud Status=" + (res && res.Status));
          return !!(res && res.Status === 1);
        })
        .catch(function (err) {
          logWarn("Wipe cloud loi", err);
          return false;
        });
    }
    wipe.finally(function () {
      global.location.reload();
    });
  }

  /* ============================ boot ============================ */

  function init() {
    patchLocalStorage();
    ensureOverlay();
    logInfo("Init " + MODULE_VERSION);
  }

  if (global.document && global.document.body) {
    init();
  } else {
    global.addEventListener("DOMContentLoaded", init);
  }

  var bootPromise = loadHistory();

  global.ArcadeTool = {
    version: MODULE_VERSION,
    ready: bootPromise,
    computeScore: computeScore,
    onKnightDefeated: onKnightDefeated,
    onRoundEnd: onRoundEnd,
    onRunStart: onRunStart,
    onHubReady: onHubReady,
    onLoaderHidden: onLoaderHidden,
    requestSave: requestSave,
    flushSave: flushSave,
    setHubVisible: setHubVisible
  };
})(typeof window !== "undefined" ? window : this);
