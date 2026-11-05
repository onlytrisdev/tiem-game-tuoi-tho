/**
 * Dual Metric High Score — Survival vs SpeedClear
 * Exposes window.ModeScoreService for the Cocos bundle to call.
 */
(function (w) {
  "use strict";

  var STORAGE_PREFIX = "GV_BEST_";

  var MODES = {
    classic: { group: "survival", budget: 0, label: "Solo vs Thợ Săn" },
    cooperation: { group: "survival", budget: 0, label: "Giường đôi" },
    infection: { group: "survival", budget: 0, label: "Nằm ngủ" },
    duoren: { group: "survival", budget: 0, label: "Đại chiến Thợ Săn" },
    duoren_infinity: { group: "survival", budget: 0, label: "Phòng ngủ vô tận" },
    zombie: { group: "speed", budget: 300, label: "Zombie" },
    battle: { group: "speed", budget: 600, label: "Làm Thợ Săn" }
  };

  var _modeId = null;
  var _running = false;
  var _paused = false;
  var _timeScale = 1;
  var _elapsed = 0;
  var _lastTs = 0;
  var _raf = 0;
  var _lastResult = null;
  var _recorded = false;

  function getMode(modeId) {
    return MODES[modeId] || MODES.classic;
  }

  function storageKey(modeId) {
    return STORAGE_PREFIX + modeId;
  }

  function loadBest(modeId) {
    try {
      var raw = localStorage.getItem(storageKey(modeId));
      if (!raw) return null;
      if (raw.charAt(0) === "{") return JSON.parse(raw);
      // migrate legacy numeric score
      var n = Number(raw) || 0;
      if (n <= 0) return null;
      var m = getMode(modeId);
      return {
        group: m.group,
        rawSec: m.group === "survival" ? n : Math.max(1, m.budget - n),
        gvScore: n,
        updatedAt: 0,
        legacy: true
      };
    } catch (e) {
      return null;
    }
  }

  function saveBest(modeId, record) {
    try {
      localStorage.setItem(storageKey(modeId), JSON.stringify(record));
    } catch (e) {
      console.log("ModeScore save err", e);
    }
  }

  function toGvScore(modeId, rawSec) {
    var m = getMode(modeId);
    var sec = Math.max(0, Math.floor(Number(rawSec) || 0));
    if (m.group === "speed") {
      return Math.max(1, Math.floor(m.budget - sec));
    }
    return Math.max(1, sec);
  }

  function isBetter(modeId, rawSec, best) {
    if (!best || typeof best.rawSec !== "number") return true;
    var m = getMode(modeId);
    var raw = Math.max(0, Number(rawSec) || 0);
    if (m.group === "speed") {
      return raw > 0 && raw < best.rawSec;
    }
    return raw > best.rawSec;
  }

  function formatTime(sec) {
    sec = Math.max(0, Math.floor(Number(sec) || 0));
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }

  function formatMetricLine(modeId, rawSec, isNew) {
    var m = getMode(modeId);
    var t = formatTime(rawSec);
    var head = m.group === "speed" ? "Hạ gục: " + t : "Sống: " + t;
    var badge = isNew ? "\n★ KỶ LỤC MỚI ★" : "";
    var gv = toGvScore(modeId, rawSec);
    return head + badge + "\nĐiểm Arcade: " + gv;
  }

  function tick(now) {
    if (_running) {
      if (!_lastTs) _lastTs = now;
      var dt = (now - _lastTs) / 1000;
      _lastTs = now;
      if (!_paused && _timeScale >= 1 && dt > 0 && dt < 1) {
        _elapsed += dt;
      }
    } else {
      _lastTs = now;
    }
    _raf = w.requestAnimationFrame(tick);
  }

  function ensureLoop() {
    if (!_raf) {
      _lastTs = 0;
      _raf = w.requestAnimationFrame(tick);
    }
  }

  function startRun(modeId) {
    if (!MODES[modeId]) {
      console.log("ModeScore unknown mode", modeId);
      modeId = "classic";
    }
    _modeId = modeId;
    _elapsed = 0;
    _running = true;
    _paused = false;
    _timeScale = 1;
    _lastTs = 0;
    _lastResult = null;
    _recorded = false;
    ensureLoop();
    console.log("ModeScore startRun", modeId);
  }

  function stopRun() {
    _running = false;
  }

  function setPaused(paused) {
    _paused = !!paused;
  }

  function setTimeScale(scale) {
    _timeScale = Number(scale);
    if (isNaN(_timeScale)) _timeScale = 1;
  }

  function getElapsedSec() {
    return Math.max(0, Math.floor(_elapsed));
  }

  function getModeId() {
    return _modeId;
  }

  /**
   * Resolve modeId from gameplay context flags.
   * sceneType: 1=zombie, 2=battle, 3=infection
   */
  function resolveModeId(ctx) {
    ctx = ctx || {};
    if (ctx.sceneType === 1) return "zombie";
    if (ctx.sceneType === 2) return "battle";
    if (ctx.sceneType === 3) return "infection";
    if (ctx.cooperation) return "cooperation";
    if (ctx.duoren) {
      return ctx.isInfinity ? "duoren_infinity" : "duoren";
    }
    return "classic";
  }

  /**
   * Record a finished run. Returns result for UI.
   * { modeId, group, rawSec, gvScore, isNewRecord, best }
   */
  function recordRun(modeId, rawSec) {
    modeId = modeId || _modeId || "classic";
    if (_recorded && _lastResult && _lastResult.modeId === modeId) {
      return _lastResult;
    }
    stopRun();
    if (rawSec == null || rawSec === undefined) {
      rawSec = getElapsedSec();
    }
    rawSec = Math.max(0, Math.floor(Number(rawSec) || 0));
    // Speed clear with 0 sec is invalid (timer never started) — use 1
    if (getMode(modeId).group === "speed" && rawSec <= 0) {
      rawSec = 1;
    }
    var gvScore = toGvScore(modeId, rawSec);
    var best = loadBest(modeId);
    var isNew = isBetter(modeId, rawSec, best);
    var record = {
      group: getMode(modeId).group,
      rawSec: rawSec,
      gvScore: gvScore,
      updatedAt: Date.now()
    };
    if (isNew) {
      saveBest(modeId, record);
      best = record;
    }
    try {
      if (w.GV && gvScore > 0) {
        new w.GV().saveScore(gvScore);
      }
    } catch (e) {
      console.log("GV saveScore err", e);
    }
    _recorded = true;
    _lastResult = {
      modeId: modeId,
      group: record.group,
      rawSec: rawSec,
      gvScore: gvScore,
      isNewRecord: isNew,
      best: best,
      labelLine: formatMetricLine(modeId, rawSec, isNew)
    };
    console.log("ModeScore recordRun", _lastResult);
    return _lastResult;
  }

  function getLastResult() {
    return _lastResult;
  }

  function appendScoreToLabel(baseText, result) {
    if (!result) return baseText || "";
    var extra = result.labelLine;
    if (!baseText) return extra;
    return String(baseText).replace(/\nVượt qua \d+% người chơi!?/g, "") + "\n" + extra;
  }

  function setLeaderboardVisible(visible) {
    try {
      var doc = w.document;
      if (!doc || !doc.getElementById) return;
      var el = doc.getElementById("gv_history_leaderboard_btn");
      if (!el || !el.style) return;
      el.style.display = visible ? "" : "none";
    } catch (e) {
      console.log("setLeaderboardVisible err", e);
    }
  }

  function openLeaderboard() {
    try {
      if (w.HistoryLeaderboard && typeof w.HistoryLeaderboard.open === "function") {
        w.HistoryLeaderboard.open();
      } else {
        console.log("HistoryLeaderboard chưa load");
      }
    } catch (e) {
      console.log("openLeaderboard err", e);
    }
  }

  w.ModeScoreService = {
    MODES: MODES,
    startRun: startRun,
    stopRun: stopRun,
    setPaused: setPaused,
    setTimeScale: setTimeScale,
    getElapsedSec: getElapsedSec,
    getModeId: getModeId,
    resolveModeId: resolveModeId,
    toGvScore: toGvScore,
    isBetter: isBetter,
    loadBest: loadBest,
    recordRun: recordRun,
    getLastResult: getLastResult,
    formatTime: formatTime,
    formatMetricLine: formatMetricLine,
    appendScoreToLabel: appendScoreToLabel,
    openLeaderboard: openLeaderboard,
    setLeaderboardVisible: setLeaderboardVisible
  };

  ensureLoop();
})(window);
