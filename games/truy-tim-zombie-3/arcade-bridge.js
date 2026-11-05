/**
 * Arcade — bridge điểm BXH (time-attack 18 stage).
 *
 * Markers theo nhóm độ khó (phút):
 *   Early 1–3:     2 / 5 / 12
 *   Mid 4–11:      3 / 7 / 15   (trừ boss 9)
 *   Late 12–17:    5 / 10 / 15
 *   Boss 9 & 18:   4 / 10 / 20
 *
 *   t = clamp(clearTimeSec, min, cap)
 *   stagePoints = round(1000 * (ref / t))
 * highscore = tổng stagePoints 18 stage.
 *
 * Mỗi lần hoàn thành stage → popup GV.saveScore sau Win Screen.
 */
(function (window) {
	"use strict";

	var StorageKeys = {
		BestTimes: "zm3_best_times",
		BestGrid: "zm3_best_grid",
		HighScore: "zm3_highscore",
		HighScoreMeta: "zm3_highscore_meta"
	};
	var StageCount = 18;
	var FallbackCapSec = 20 * 60;
	var PollIntervalMs = 500;
	var WinScreenName = "Win Screen";
	var EndWinScreenName = "End Win";
	var WinScreenPopupDelayMs = 1000;
	var BackupSubmitDelayMs = 2000;
	var CancelLayouts = {
		"Stage Select": true,
		"Main Menu": true,
		"Game Over": true,
		"Intro": true
	};

	var state = {
		activeRun: null,
		lastStage: 0,
		lastRunSnapshot: null,
		previousWin: false,
		previousPlaying: false,
		previousPaused: false,
		pendingSubmit: null,
		winScreenSeenAt: null,
		backupTimer: 0,
		flushedForPendingId: 0,
		pendingId: 0
	};

	function number(value, fallback) {
		value = Number(value);
		return isFinite(value) ? value : (fallback !== undefined ? fallback : 0);
	}

	function logInfo(message, detail) {
		if (detail !== undefined) {
			console.info("[Arcade] " + message, detail);
		} else {
			console.info("[Arcade] " + message);
		}
	}

	function logWarn(message, detail) {
		if (detail !== undefined) {
			console.warn("[Arcade] " + message, detail);
		} else {
			console.warn("[Arcade] " + message);
		}
	}

	function readJson(key, fallback) {
		try {
			var raw = window.localStorage.getItem(key);
			return raw ? JSON.parse(raw) : fallback;
		} catch (error) {
			logWarn("Cannot read " + key, error);
			return fallback;
		}
	}

	function writeRaw(key, value) {
		try {
			window.localStorage.setItem(key, value);
		} catch (error) {
			logWarn("Cannot write " + key, error);
		}
	}

	function writeJson(key, value) {
		writeRaw(key, JSON.stringify(value));
	}

	function createMap() {
		var map = {};
		for (var stage = 1; stage <= StageCount; stage++) {
			map[String(stage)] = 0;
		}
		return map;
	}

	function normalizeMap(map) {
		map = map && typeof map === "object" ? map : {};
		var out = createMap();
		for (var stage = 1; stage <= StageCount; stage++) {
			var key = String(stage);
			out[key] = Math.max(0, number(map[key]));
		}
		return out;
	}

	function getBestTimes() {
		return normalizeMap(readJson(StorageKeys.BestTimes, createMap()));
	}

	function getBestGrid() {
		return normalizeMap(readJson(StorageKeys.BestGrid, createMap()));
	}

	function markersForStage(stage) {
		stage = Math.floor(number(stage));
		if (stage === 9 || stage === 18) {
			return { min: 4 * 60, ref: 10 * 60, cap: 20 * 60 };
		}
		if (stage <= 3) {
			return { min: 2 * 60, ref: 5 * 60, cap: 12 * 60 };
		}
		if (stage <= 11) {
			return { min: 3 * 60, ref: 7 * 60, cap: 15 * 60 };
		}
		return { min: 5 * 60, ref: 10 * 60, cap: 15 * 60 };
	}

	function stagePointsFromTime(clearTimeSec, stage) {
		var m = markersForStage(stage);
		var t = Math.max(m.min, Math.min(m.cap, number(clearTimeSec, m.cap)));
		return Math.max(1, Math.round(1000 * (m.ref / t)));
	}

	function recomputeTotals(times, points, metadata) {
		var total = 0;
		for (var stage = 1; stage <= StageCount; stage++) {
			total += number(points[String(stage)]);
		}

		writeJson(StorageKeys.BestTimes, times);
		writeJson(StorageKeys.BestGrid, points);
		writeRaw(StorageKeys.HighScore, String(total));

		if (metadata) {
			writeJson(StorageKeys.HighScoreMeta, metadata);
		}

		return total;
	}

	function recordCompletedStage(stage, clearTimeSec) {
		stage = Math.floor(number(stage));
		if (stage < 1 || stage > StageCount) {
			logWarn("saveScore skipped: no_stage", { stage: stage });
			return { improved: false, total: getHighScore(), stagePoints: 0 };
		}

		var times = getBestTimes();
		var points = getBestGrid();
		var key = String(stage);
		var clearSec = Math.max(1, number(clearTimeSec));
		var stagePoints = stagePointsFromTime(clearSec, stage);
		var oldPoints = number(points[key]);
		var oldTime = number(times[key]);
		var improved = stagePoints > oldPoints || (oldTime <= 0 && stagePoints > 0);

		if (improved) {
			times[key] = clearSec;
			points[key] = stagePoints;
		}

		return {
			improved: improved,
			previous: oldPoints,
			stagePoints: stagePoints,
			clearTimeSec: clearSec,
			total: recomputeTotals(times, points, {
				lastImproved: improved ? {
					stage: stage,
					clearTimeSec: clearSec,
					stagePoints: stagePoints,
					previous: oldPoints
				} : undefined,
				updatedAt: new Date().toISOString()
			})
		};
	}

	function getHighScore() {
		return Math.max(0, Math.floor(number(window.localStorage.getItem(StorageKeys.HighScore))));
	}

	function getC2Runtime() {
		return typeof window.cr_getC2Runtime === "function"
			? window.cr_getC2Runtime()
			: null;
	}

	/** Unminified: all_global_vars; minify Zombie 3: H1 */
	function getGlobalVarList(runtime) {
		if (!runtime) {
			return [];
		}
		if (runtime.all_global_vars && runtime.all_global_vars.length) {
			return runtime.all_global_vars;
		}
		if (runtime.H1 && runtime.H1.length) {
			return runtime.H1;
		}
		return [];
	}

	function readVarValue(variable) {
		if (!variable) {
			return undefined;
		}
		return typeof variable.gi === "function" ? variable.gi() : variable.data;
	}

	/** Unminified: running_layout; minify: Na */
	function getRunningLayout(runtime) {
		return runtime && (runtime.running_layout || runtime.Na) || null;
	}

	function getRuntimeVariables() {
		var runtime = getC2Runtime();
		var values = {};
		var list = getGlobalVarList(runtime);
		var i;

		for (i = 0; i < list.length; i++) {
			if (list[i] && list[i].name) {
				values[list[i].name] = readVarValue(list[i]);
			}
		}

		return values;
	}

	function getStageNumber(values) {
		var candidate = number(values.level_aktif, NaN);
		if (!isFinite(candidate) || candidate < 1) {
			candidate = number(values.curstage, NaN);
		}
		candidate = Math.floor(candidate);
		return candidate >= 1 && candidate <= StageCount ? candidate : 0;
	}

	function getRunningLayoutName() {
		var layout = getRunningLayout(getC2Runtime());
		return layout && layout.name ? layout.name : "";
	}

	function isResultLayout(name) {
		return name === WinScreenName || name === EndWinScreenName;
	}

	function isArcadeContext() {
		return new URLSearchParams(window.location.search).has("gid");
	}

	function saveScoreToArcade(callback) {
		var score = getHighScore();

		if (!isArcadeContext()) {
			logInfo("saveScore skipped: missing_gid");
			if (callback) {
				callback(false, "missing_gid");
			}
			return false;
		}

		if (typeof window.GV !== "function") {
			logWarn("saveScore skipped: sdk_unavailable");
			if (callback) {
				callback(false, "sdk_unavailable");
			}
			return false;
		}

		if (score <= 0) {
			logWarn("saveScore skipped: zero_score");
			if (callback) {
				callback(false, "zero_score");
			}
			return false;
		}

		logInfo("saveScore flushed", { score: score });
		new window.GV().saveScore(score, function () {
			if (callback) {
				callback(true);
			}
		});
		return true;
	}

	function clearBackupTimer() {
		if (state.backupTimer) {
			window.clearTimeout(state.backupTimer);
			state.backupTimer = 0;
		}
	}

	function flushPendingSubmit(reason) {
		if (!state.pendingSubmit) {
			return;
		}

		var pendingId = state.pendingSubmit.id;
		if (pendingId && state.flushedForPendingId === pendingId) {
			return;
		}

		var total = state.pendingSubmit.total;
		state.flushedForPendingId = pendingId || state.flushedForPendingId;
		state.pendingSubmit = null;
		state.winScreenSeenAt = null;
		clearBackupTimer();

		if (total <= 0) {
			logWarn("saveScore skipped: zero_score (pending total)");
			return;
		}

		logInfo("saveScore queued flush (" + (reason || "unknown") + ")", { total: total });
		saveScoreToArcade();
	}

	function queueSubmitAfterWin(total) {
		var score = Math.max(0, Math.floor(number(total, getHighScore())));
		if (score <= 0) {
			score = getHighScore();
		}
		if (score <= 0) {
			logWarn("saveScore skipped: zero_score (queue)");
			return;
		}

		state.pendingId += 1;
		state.pendingSubmit = { total: score, id: state.pendingId };
		state.winScreenSeenAt = null;
		state.flushedForPendingId = 0;
		clearBackupTimer();

		logInfo("saveScore queued", { total: score, pendingId: state.pendingId });

		state.backupTimer = window.setTimeout(function () {
			state.backupTimer = 0;
			flushPendingSubmit("backup_timeout");
		}, BackupSubmitDelayMs);
	}

	function processPendingSubmit() {
		if (!state.pendingSubmit) {
			state.winScreenSeenAt = null;
			return;
		}

		var layoutName = getRunningLayoutName();

		if (CancelLayouts[layoutName]) {
			logInfo("saveScore pending cancelled (left to " + layoutName + ")");
			state.pendingSubmit = null;
			state.winScreenSeenAt = null;
			clearBackupTimer();
			return;
		}

		if (!isResultLayout(layoutName)) {
			// Giữ pending trong lúc transition / còn trên Lv — không hủy.
			return;
		}

		var now = Date.now();
		if (state.winScreenSeenAt === null) {
			state.winScreenSeenAt = now;
			logInfo("saveScore waiting on result layout", { layout: layoutName });
			return;
		}

		if (now - state.winScreenSeenAt >= WinScreenPopupDelayMs) {
			flushPendingSubmit("result_layout");
		}
	}

	function startRun(stage) {
		state.activeRun = {
			stage: stage,
			startedAt: Date.now(),
			accumulatedMs: 0,
			segmentStartedAt: Date.now(),
			paused: false
		};
		state.lastStage = stage;
		state.lastRunSnapshot = null;
	}

	function snapshotRun() {
		if (!state.activeRun) {
			return;
		}
		var clearSec = getClearTimeSecFromRun(state.activeRun);
		state.lastStage = state.activeRun.stage;
		state.lastRunSnapshot = {
			stage: state.activeRun.stage,
			clearTimeSec: clearSec
		};
	}

	function pauseRun() {
		if (!state.activeRun || state.activeRun.paused) {
			return;
		}
		state.activeRun.accumulatedMs += Date.now() - state.activeRun.segmentStartedAt;
		state.activeRun.paused = true;
	}

	function resumeRun() {
		if (!state.activeRun || !state.activeRun.paused) {
			return;
		}
		state.activeRun.segmentStartedAt = Date.now();
		state.activeRun.paused = false;
	}

	function getClearTimeSecFromRun(run) {
		if (!run) {
			return FallbackCapSec;
		}
		var ms = run.accumulatedMs;
		if (!run.paused) {
			ms += Date.now() - run.segmentStartedAt;
		}
		return Math.max(1, ms / 1000);
	}

	function getClearTimeSec() {
		if (state.activeRun) {
			return getClearTimeSecFromRun(state.activeRun);
		}
		if (state.lastRunSnapshot) {
			return Math.max(1, number(state.lastRunSnapshot.clearTimeSec, FallbackCapSec));
		}
		return FallbackCapSec;
	}

	function resolveWinStage(values) {
		if (state.activeRun && state.activeRun.stage) {
			return state.activeRun.stage;
		}
		if (state.lastStage) {
			return state.lastStage;
		}
		if (state.lastRunSnapshot && state.lastRunSnapshot.stage) {
			return state.lastRunSnapshot.stage;
		}
		return getStageNumber(values);
	}

	function handleWin(values) {
		if (state.activeRun) {
			snapshotRun();
		}

		var stage = resolveWinStage(values);
		var clearSec = getClearTimeSec();
		var result = recordCompletedStage(stage, clearSec);

		logInfo("stage win recorded", {
			stage: stage,
			clearTimeSec: clearSec,
			stagePoints: result.stagePoints,
			total: result.total,
			improved: result.improved
		});

		queueSubmitAfterWin(result.total);
		state.activeRun = null;
	}

	function pollGame() {
		var values = getRuntimeVariables();
		var isPlaying = number(values.isingame) === 1;
		var isPaused = number(values.ispaused) === 1;
		var isWin = number(values.iswin) === 1;
		var stage = getStageNumber(values);

		if (isPlaying && stage && (!state.activeRun || state.activeRun.stage !== stage || (!state.previousPlaying && isPlaying))) {
			startRun(stage);
		}

		if (stage) {
			state.lastStage = stage;
		}

		if (state.activeRun && isPlaying) {
			if (isPaused && !state.previousPaused) {
				pauseRun();
			} else if (!isPaused && state.previousPaused) {
				resumeRun();
			}
		}

		if (isWin && !state.previousWin) {
			handleWin(values);
		}

		processPendingSubmit();

		if (!isPlaying && !isWin && state.activeRun) {
			snapshotRun();
			state.activeRun = null;
		}

		state.previousWin = isWin;
		state.previousPlaying = isPlaying;
		state.previousPaused = isPaused;
	}

	window.ArcadeBridge = {
		getBestTimes: getBestTimes,
		getBestGrid: getBestGrid,
		getHighScore: getHighScore,
		markersForStage: markersForStage,
		stagePointsFromTime: stagePointsFromTime,
		saveScoreToArcade: saveScoreToArcade
	};

	window.setInterval(pollGame, PollIntervalMs);
}(window));
