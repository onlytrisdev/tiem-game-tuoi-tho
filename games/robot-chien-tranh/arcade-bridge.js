(function (window, document) {
    "use strict";

    var StorageKeys = {
        BestGrid: "ma_best_grid",
        HighScore: "ma_highscore",
        HighScore1P: "ma_highscore_1p",
        HighScore2P: "ma_highscore_2p",
        HighScoreMeta: "ma_highscore_meta"
    };
    var StageCount = 15;
    var DifficultyCount = 3;
    var PollIntervalMs = 500;
    var WinScreenName = "Win Screen";
    var WinScreenPopupDelayMs = 1000;
    var state = {
        activeRun: null,
        previousScore: null,
        previousWin: false,
        lastSubmittedScore: null,
        pendingSubmit: null,
        winScreenSeenAt: null
    };

    function number(value, fallback) {
        value = Number(value);
        return isFinite(value) ? value : (fallback !== undefined ? fallback : 0);
    }

    function readJson(key, fallback) {
        try {
            var raw = window.localStorage.getItem(key);
            return raw ? JSON.parse(raw) : fallback;
        } catch (error) {
            console.warn("[Arcade] Cannot read " + key, error);
            return fallback;
        }
    }

    function writeRaw(key, value) {
        try {
            window.localStorage.setItem(key, value);
        } catch (error) {
            // Safari private mode / hết quota: bỏ qua, game vẫn chạy
            console.warn("[Arcade] Cannot write " + key, error);
        }
    }

    function writeJson(key, value) {
        writeRaw(key, JSON.stringify(value));
    }

    function createGrid() {
        return { "1p": {}, "2p": {} };
    }

    function normalizeGrid(grid) {
        grid = grid && typeof grid === "object" ? grid : createGrid();

        ["1p", "2p"].forEach(function (mode) {
            if (!grid[mode] || typeof grid[mode] !== "object") {
                grid[mode] = {};
            }

            for (var stage = 1; stage <= StageCount; stage++) {
                var stageKey = String(stage);
                if (!grid[mode][stageKey] || typeof grid[mode][stageKey] !== "object") {
                    grid[mode][stageKey] = {};
                }

                for (var difficulty = 1; difficulty <= DifficultyCount; difficulty++) {
                    var difficultyKey = String(difficulty);
                    grid[mode][stageKey][difficultyKey] = Math.max(
                        0,
                        number(grid[mode][stageKey][difficultyKey])
                    );
                }
            }
        });

        return grid;
    }

    function getGrid() {
        return normalizeGrid(readJson(StorageKeys.BestGrid, createGrid()));
    }

    function getRuntimeVariables() {
        var runtime = typeof window.cr_getC2Runtime === "function"
            ? window.cr_getC2Runtime()
            : null;
        var values = {};

        if (!runtime || !runtime.all_global_vars) {
            return values;
        }

        runtime.all_global_vars.forEach(function (variable) {
            values[variable.name] = variable.data;
        });

        return values;
    }

    function getStageNumber(values) {
        var candidate = number(values.level_aktif, NaN);
        if (!isFinite(candidate)) {
            candidate = number(values.curstage, NaN);
        }

        /*
         * The stage selector and level_terbuka both use 1..15. Keep this
         * human-readable value unchanged in the leaderboard grid.
         */
        candidate = Math.floor(candidate);
        return candidate >= 1 && candidate <= StageCount ? candidate : 0;
    }

    function getRunContext(values) {
        var stage = getStageNumber(values);
        var difficulty = Math.min(
            DifficultyCount,
            Math.max(1, Math.floor(number(values.difficult_gain, values.difficulty || 1)))
        );

        if (!stage) {
            return null;
        }

        return {
            mode: number(values.istwoplayer) === 1 ? "2p" : "1p",
            stage: stage,
            difficulty: difficulty
        };
    }

    function sameContext(left, right) {
        return left && right &&
            left.mode === right.mode &&
            left.stage === right.stage &&
            left.difficulty === right.difficulty;
    }

    function recomputeTotals(grid, metadata) {
        var totals = { "1p": 0, "2p": 0 };

        ["1p", "2p"].forEach(function (mode) {
            for (var stage = 1; stage <= StageCount; stage++) {
                for (var difficulty = 1; difficulty <= DifficultyCount; difficulty++) {
                    totals[mode] += number(grid[mode][stage][difficulty]);
                }
            }
        });

        var total = totals["1p"] + totals["2p"];
        writeJson(StorageKeys.BestGrid, grid);
        writeRaw(StorageKeys.HighScore1P, String(totals["1p"]));
        writeRaw(StorageKeys.HighScore2P, String(totals["2p"]));
        writeRaw(StorageKeys.HighScore, String(total));

        if (metadata) {
            writeJson(StorageKeys.HighScoreMeta, metadata);
        }

        return total;
    }

    function recordCompletedStage(context, score) {
        var grid = getGrid();
        var oldScore = number(grid[context.mode][context.stage][context.difficulty]);
        score = Math.max(0, Math.floor(number(score)));

        if (score <= oldScore) {
            return { improved: false, total: getHighScore(), previous: oldScore };
        }

        grid[context.mode][context.stage][context.difficulty] = score;
        return {
            improved: true,
            previous: oldScore,
            total: recomputeTotals(grid, {
                lastImproved: {
                    mode: context.mode,
                    stage: context.stage,
                    difficulty: context.difficulty,
                    score: score,
                    previous: oldScore
                },
                updatedAt: new Date().toISOString()
            })
        };
    }

    function getHighScore() {
        return Math.max(0, Math.floor(number(window.localStorage.getItem(StorageKeys.HighScore))));
    }

    function isArcadeContext() {
        return new URLSearchParams(window.location.search).has("gid");
    }

    function saveScoreToArcade(callback) {
        var score = getHighScore();

        if (!isArcadeContext()) {
            console.info("[Arcade] Skip score submission: missing gid in the game URL.");
            if (callback) {
                callback(false, "missing_gid");
            }
            return false;
        }

        if (typeof window.GV !== "function") {
            console.warn("[Arcade] Skip score submission: Arcade SDK is unavailable.");
            if (callback) {
                callback(false, "sdk_unavailable");
            }
            return false;
        }

        if (score <= 0) {
            if (callback) {
                callback(false, "zero_score");
            }
            return false;
        }

        new window.GV().saveScore(score, function () {
            if (callback) {
                callback(true);
            }
        });
        return true;
    }

    function queueSubmitIfImproved(result) {
        if (!result.improved || result.total <= 0 || result.total === state.lastSubmittedScore) {
            return;
        }

        state.pendingSubmit = { total: result.total };
        state.winScreenSeenAt = null;
    }

    function getRunningLayoutName() {
        var runtime = typeof window.cr_getC2Runtime === "function"
            ? window.cr_getC2Runtime()
            : null;

        return runtime && runtime.running_layout ? runtime.running_layout.name : "";
    }

    function flushPendingSubmit() {
        if (!state.pendingSubmit) {
            return;
        }

        var total = state.pendingSubmit.total;
        state.pendingSubmit = null;
        state.winScreenSeenAt = null;

        if (total <= 0 || total === state.lastSubmittedScore) {
            return;
        }

        state.lastSubmittedScore = total;
        saveScoreToArcade();
    }

    function processPendingSubmit() {
        if (!state.pendingSubmit) {
            state.winScreenSeenAt = null;
            return;
        }

        if (getRunningLayoutName() !== WinScreenName) {
            // Left Win Screen before the delayed popup — drop the queued dialog.
            if (state.winScreenSeenAt !== null) {
                state.pendingSubmit = null;
                state.winScreenSeenAt = null;
            }
            return;
        }

        var now = Date.now();
        if (state.winScreenSeenAt === null) {
            state.winScreenSeenAt = now;
            return;
        }

        if (now - state.winScreenSeenAt >= WinScreenPopupDelayMs) {
            flushPendingSubmit();
        }
    }

    function startRun(context, score) {
        state.activeRun = {
            context: context,
            score: 0
        };
        state.previousScore = Math.max(0, number(score));
    }

    function pollGame() {
        var values = getRuntimeVariables();
        var isPlaying = number(values.isingame) === 1;
        var context = getRunContext(values);
        var currentScore = Math.max(0, number(values.score));
        var isWin = number(values.iswino) === 1;

        if (isPlaying && context && (!state.activeRun || !sameContext(state.activeRun.context, context))) {
            startRun(context, currentScore);
        }

        if (state.activeRun && state.previousScore !== null) {
            if (currentScore >= state.previousScore) {
                state.activeRun.score += currentScore - state.previousScore;
            } else {
                // score resets after 50 pickups to award an extra life
                state.activeRun.score += (50 - state.previousScore) + currentScore;
            }
        }

        state.previousScore = currentScore;

        if (isWin && !state.previousWin && state.activeRun) {
            var result = recordCompletedStage(state.activeRun.context, state.activeRun.score);
            queueSubmitIfImproved(result);
        }

        processPendingSubmit();

        if (!isPlaying && !isWin) {
            state.activeRun = null;
            state.previousScore = null;
        }

        state.previousWin = isWin;
    }

    // Đọc/ghi progress cho cloud save do arcade-save.js đảm nhiệm (§2).

    window.ArcadeBridge = {
        getBestGrid: getGrid,
        getHighScore: getHighScore,
        recomputeTotals: function () {
            return recomputeTotals(getGrid());
        },
        saveScoreToArcade: saveScoreToArcade
    };

    window.setInterval(pollGame, PollIntervalMs);
}(window, document));
