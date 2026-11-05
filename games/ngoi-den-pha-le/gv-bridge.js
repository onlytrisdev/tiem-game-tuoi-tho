/**
 * Arcade bridge — Fireboy & Watergirl Crystal Temple (H5 thuần)
 * Save/Get: https://localhost/account/GetHistoryGame + SaveHistoryGame
 * (cùng quy luật nhanh-tay-tim-hinh)
 */
(function (global) {
    "use strict";

    var SAVE_URL = "https://localhost/account/SaveHistoryGame";
    var GET_URL = "https://localhost/account/GetHistoryGame";
    var PROGRESS_KEY = "fb-crystal:progress";
    var SETTINGS_KEY = "fb-crystal:settings";
    var STAMP_KEY = "fb-crystal:gvUpdatedAt";
    var DATA_KEY = "FbCrystalData";
    var SAVE_DEBOUNCE_MS = 3500;
    var BOOT_TIMEOUT_MS = 8000;

    var nativeOpen = global.open;
    var nativeSetItem = global.localStorage.setItem.bind(global.localStorage);
    var nativeRemoveItem = global.localStorage.removeItem.bind(global.localStorage);

    var state = {
        seeding: false,
        dirty: false,
        saveTimer: 0,
        resetting: false,
        hydrateDone: false,
        historySettled: false,
        cloudSaveLocked: false,
        cloudSeedFailed: false,
        forceCloudSave: false,
        cloudSnapshot: null
    };

    function logInfo(msg, d) {
        if (global.console && console.info) {
            if (d !== undefined) console.info("[GVBridge] " + msg, d);
            else console.info("[GVBridge] " + msg);
        }
    }

    function logWarn(msg, d) {
        if (global.console && console.warn) {
            if (d !== undefined) console.warn("[GVBridge] " + msg, d);
            else console.warn("[GVBridge] " + msg);
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

        return { gameId: gid, token: token || "" };
    }

    function lockViewport() {
        var vp = global.document.getElementById("viewport") || global.document.querySelector('meta[name="viewport"]');
        if (!vp) return;
        vp.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover");
    }

    function measure() {
        var de = global.document.documentElement;
        var w = de.clientWidth || global.innerWidth || 1;
        var h = de.clientHeight || global.innerHeight || 1;
        if (global.visualViewport) {
            var vw = Math.round(global.visualViewport.width);
            var vh = Math.round(global.visualViewport.height);
            if (vw > 0) w = Math.min(w, vw);
            if (vh > 0) h = Math.min(h, vh);
        }
        return { w: Math.max(1, Math.floor(w)), h: Math.max(1, Math.floor(h)) };
    }

    function onFitted(w, h) {
        var overlay = global.document.getElementById("gv-rotate");
        if (overlay) overlay.style.display = h > w ? "flex" : "none";
        var hammer = global.document.getElementById("hammer");
        if (hammer) {
            hammer.style.position = "absolute";
            hammer.style.top = "0";
            hammer.style.left = "0";
            hammer.style.width = w + "px";
            hammer.style.height = h + "px";
        }
        if (global.scrollTo) global.scrollTo(0, 0);
        lockViewport();
    }

    var pokeTimer = 0;
    function pokeResize() {
        clearTimeout(pokeTimer);
        pokeTimer = setTimeout(function () {
            try {
                global.dispatchEvent(new Event("resize"));
            } catch (e) {
                var legacy = global.document.createEvent("Event");
                legacy.initEvent("resize", true, true);
                global.dispatchEvent(legacy);
            }
        }, 50);
    }

    function parseJson(text) {
        if (!text) return null;
        try {
            return JSON.parse(text);
        } catch (e) {
            return null;
        }
    }

    function parseJsonDeep(value, maxDepth) {
        var cur = value;
        var depth = typeof maxDepth === "number" ? maxDepth : 2;
        for (var i = 0; i < depth; i++) {
            if (typeof cur !== "string") break;
            var s = cur.trim();
            if (!s) return null;
            try {
                cur = JSON.parse(s);
            } catch (e) {
                return null;
            }
        }
        return cur;
    }

    function num(value) {
        var n = Number(value);
        return isFinite(n) ? n : 0;
    }

    function isBetter(candidate, current) {
        var starsA = num(candidate.stars);
        var starsB = num(current.stars);
        if (starsA !== starsB) return starsA > starsB;
        var diamondsA = num(candidate.diamonds);
        var diamondsB = num(current.diamonds);
        if (diamondsA !== diamondsB) return diamondsA > diamondsB;
        var timeA = candidate.time == null ? Infinity : num(candidate.time);
        var timeB = current.time == null ? Infinity : num(current.time);
        return timeA < timeB;
    }

    function levelKey(level) {
        if (!level) return "";
        if (level._id != null) return "id:" + level._id;
        if (level.filename) return "file:" + level.filename;
        return "n:" + level.id;
    }

    function mergeProgress(local, remote) {
        if (!local && !remote) return null;
        if (!local) return JSON.parse(JSON.stringify(remote));
        if (!remote) return JSON.parse(JSON.stringify(local));
        var base = JSON.parse(JSON.stringify(local));
        var baseTemples = base.temples || (base.temples = []);
        var byTemple = {};
        var i;
        for (i = 0; i < baseTemples.length; i++) {
            if (baseTemples[i] && baseTemples[i].id != null) byTemple[baseTemples[i].id] = baseTemples[i];
        }
        var remoteTemples = remote.temples || [];
        for (i = 0; i < remoteTemples.length; i++) {
            var remoteTemple = remoteTemples[i];
            if (!remoteTemple) continue;
            var temple = byTemple[remoteTemple.id];
            if (!temple) {
                baseTemples.push(JSON.parse(JSON.stringify(remoteTemple)));
                continue;
            }
            var localLevels = {};
            var levels = temple.levels || (temple.levels = []);
            var j;
            for (j = 0; j < levels.length; j++) localLevels[levelKey(levels[j])] = levels[j];
            var remoteLevels = remoteTemple.levels || [];
            for (j = 0; j < remoteLevels.length; j++) {
                var remoteLevel = remoteLevels[j];
                var key = levelKey(remoteLevel);
                var localLevel = localLevels[key];
                if (!localLevel) {
                    levels.push(JSON.parse(JSON.stringify(remoteLevel)));
                    continue;
                }
                if (remoteLevel.played) localLevel.played = true;
                if (remoteLevel.best && localLevel.best) {
                    if (isBetter(remoteLevel.best, localLevel.best)) {
                        localLevel.best = JSON.parse(JSON.stringify(remoteLevel.best));
                    }
                } else if (remoteLevel.best && !localLevel.best) {
                    localLevel.best = JSON.parse(JSON.stringify(remoteLevel.best));
                }
            }
        }
        if (remote.gameComplete) base.gameComplete = true;
        return base;
    }

    function sumBestStarsFromProgress(progress) {
        if (!progress) return 0;
        var temples = progress.temples;
        if (!temples || !temples.length) return 0;
        var total = 0;
        var i, j, levels, best;
        for (i = 0; i < temples.length; i++) {
            levels = temples[i] && temples[i].levels;
            if (!levels) continue;
            for (j = 0; j < levels.length; j++) {
                best = levels[j] && levels[j].best;
                if (best && num(best.stars) > 0) total += num(best.stars) | 0;
            }
        }
        return total;
    }

    function careerHighScore(progress) {
        if (!progress) return 0;
        if (typeof progress.get === "function") {
            var temples = progress.get("temples");
            if (temples) return sumBestStarsFromProgress({ temples: temples });
            if (typeof progress.totalStars === "number") return progress.totalStars | 0;
            return 0;
        }
        return sumBestStarsFromProgress(progress);
    }

    function countClearedLevels(progress) {
        if (!progress || !progress.temples) return 0;
        var n = 0;
        var i, j, levels, best;
        for (i = 0; i < progress.temples.length; i++) {
            levels = progress.temples[i] && progress.temples[i].levels;
            if (!levels) continue;
            for (j = 0; j < levels.length; j++) {
                best = levels[j] && levels[j].best;
                if (best && num(best.stars) > 0) n++;
            }
        }
        return n;
    }

    function buildMetadata() {
        var progress = parseJson(global.localStorage.getItem(PROGRESS_KEY));
        var settings = parseJson(global.localStorage.getItem(SETTINGS_KEY));
        var score = sumBestStarsFromProgress(progress);
        var cleared = countClearedLevels(progress);
        var meta = {
            CurrentLevel: Math.max(1, cleared),
            CurrentStage: Math.max(1, cleared),
            TotalScore: score,
            BestScore: score,
            SavedAt: new Date().toISOString()
        };
        meta[DATA_KEY] = {
            progress: progress,
            settings: settings
        };
        return meta;
    }

    function looksLikeProgressMeta(obj) {
        if (!obj || typeof obj !== "object" || Array.isArray(obj)) return false;
        return !!(
            obj[DATA_KEY] ||
            obj.TotalScore != null ||
            obj.BestScore != null ||
            obj.CurrentLevel != null ||
            (obj.progress && obj.progress.temples)
        );
    }

    function unwrapHistoryMeta(res) {
        if (!res || typeof res !== "object") return null;
        var candidates = [
            res.MetaData,
            res.metadata,
            res.Data && res.Data.MetaData,
            res.Data && res.Data.metadata,
            res.data && res.data.MetaData,
            res.data && res.data.metadata,
            res.Data,
            res.data
        ];
        for (var i = 0; i < candidates.length; i++) {
            var raw = candidates[i];
            if (raw == null || raw === "") continue;
            var parsed = raw;
            if (typeof raw === "string") {
                parsed = parseJsonDeep(raw, 2);
                if (!parsed) continue;
            }
            if (typeof parsed !== "object" || Array.isArray(parsed)) continue;
            if (!looksLikeProgressMeta(parsed) && (parsed.MetaData || parsed.metadata)) {
                var inner = parsed.MetaData || parsed.metadata;
                if (typeof inner === "string") inner = parseJsonDeep(inner, 2);
                if (inner && typeof inner === "object" && looksLikeProgressMeta(inner)) return inner;
                continue;
            }
            if (looksLikeProgressMeta(parsed)) return parsed;
        }
        return null;
    }

    function extractBundleFromMeta(meta) {
        if (!meta || typeof meta !== "object") return null;
        var direct = meta[DATA_KEY];
        if (typeof direct === "string") direct = parseJsonDeep(direct, 2);
        if (direct && typeof direct === "object") {
            return {
                progress: direct.progress || null,
                settings: direct.settings || null
            };
        }
        if (meta.progress && meta.progress.temples) {
            return { progress: meta.progress, settings: meta.settings || null };
        }
        return null;
    }

    function takeCloudSnapshot(meta) {
        if (!meta || typeof meta !== "object") {
            state.cloudSnapshot = null;
            return null;
        }
        var bundle = extractBundleFromMeta(meta);
        var score = Math.max(
            0,
            Math.floor(Number(meta.TotalScore) || 0),
            sumBestStarsFromProgress(bundle && bundle.progress)
        );
        var level = Math.max(1, Math.floor(Number(meta.CurrentLevel) || 0), countClearedLevels(bundle && bundle.progress));
        state.cloudSnapshot = {
            TotalScore: score,
            CurrentLevel: level,
            SavedAt: meta.SavedAt || null
        };
        return state.cloudSnapshot;
    }

    function isLocalWeakerThanCloud(localMeta) {
        var snap = state.cloudSnapshot;
        if (!snap || !localMeta) return false;
        var localScore = Math.max(0, Math.floor(Number(localMeta.TotalScore) || 0));
        var localLevel = Math.max(1, Math.floor(Number(localMeta.CurrentLevel) || 1));
        if (localScore < snap.TotalScore) return true;
        if (localScore === snap.TotalScore && localLevel < snap.CurrentLevel) return true;
        return false;
    }

    function applyCloudMeta(meta) {
        var bundle = extractBundleFromMeta(meta);
        if (!bundle) return false;
        state.seeding = true;
        try {
            var localProgress = parseJson(global.localStorage.getItem(PROGRESS_KEY));
            var merged = mergeProgress(localProgress, bundle.progress);
            if (merged) nativeSetItem(PROGRESS_KEY, JSON.stringify(merged));
            if (bundle.settings) {
                var localStamp = Number(global.localStorage.getItem(STAMP_KEY) || 0);
                var remoteStamp = meta.SavedAt ? Date.parse(meta.SavedAt) || 0 : 0;
                if (!localStamp || remoteStamp >= localStamp || !global.localStorage.getItem(SETTINGS_KEY)) {
                    nativeSetItem(SETTINGS_KEY, JSON.stringify(bundle.settings));
                }
            }
            nativeSetItem(STAMP_KEY, String(Date.now()));
            return true;
        } finally {
            state.seeding = false;
        }
    }

    function postForm(url, fields) {
        return fetch(url, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
            body: new URLSearchParams(fields)
        }).then(function (res) {
            return res.json();
        });
    }

    function saveHistory(reason) {
        var force = !!(state.forceCloudSave || state.resetting);
        if (!state.hydrateDone && !force) {
            logInfo("Skip SaveHistory (not hydrated)", reason);
            return Promise.resolve({ skipped: true });
        }
        if (!force && !state.historySettled) {
            logWarn("Skip SaveHistory (GetHistory not settled)", reason);
            return Promise.resolve({ skipped: true });
        }
        if (!force && state.cloudSaveLocked) {
            logWarn("Skip SaveHistory (cloud save locked)", reason);
            return Promise.resolve({ skipped: true });
        }
        if (!force && state.cloudSeedFailed) {
            logWarn("Skip SaveHistory (cloud seed failed)", reason);
            return Promise.resolve({ skipped: true });
        }
        var cred = getCredentials();
        if (!cred.gameId) {
            logInfo("Skip SaveHistory (no gid)", reason);
            return Promise.resolve({ skipped: true });
        }
        var meta = buildMetadata();
        if (!force && isLocalWeakerThanCloud(meta)) {
            logWarn("blocked weaker save", { reason: reason, local: meta.TotalScore, cloud: state.cloudSnapshot });
            return Promise.resolve({ skipped: true, weaker: true });
        }
        return postForm(SAVE_URL, {
            gameId: cred.gameId,
            token: cred.token,
            metadata: JSON.stringify(meta)
        })
            .then(function (res) {
                state.dirty = false;
                state.forceCloudSave = false;
                takeCloudSnapshot(meta);
                logInfo("SaveHistory OK", { reason: reason, score: meta.TotalScore });
                return res;
            })
            .catch(function (err) {
                logWarn("SaveHistory fail", err);
                return null;
            });
    }

    function requestSave(reason) {
        if (
            state.seeding ||
            (!state.forceCloudSave &&
                (state.resetting ||
                    !state.hydrateDone ||
                    !state.historySettled ||
                    state.cloudSaveLocked ||
                    state.cloudSeedFailed))
        ) {
            return;
        }
        state.dirty = true;
        if (state.saveTimer) global.clearTimeout(state.saveTimer);
        state.saveTimer = global.setTimeout(function () {
            state.saveTimer = 0;
            saveHistory(reason || "debounce");
        }, SAVE_DEBOUNCE_MS);
    }

    function loadHistory() {
        var cred = getCredentials();
        state.cloudSeedFailed = false;
        state.cloudSaveLocked = false;
        if (!cred.gameId) {
            logInfo("GetHistory skipped (no gid)");
            state.cloudSnapshot = null;
            return Promise.resolve({ ok: true, seeded: false });
        }
        logInfo("GetHistory start", { gameId: cred.gameId, hasToken: !!cred.token });
        return postForm(GET_URL, {
            gameId: cred.gameId,
            token: cred.token
        })
            .then(function (res) {
                var meta = null;
                try {
                    meta = unwrapHistoryMeta(res);
                } catch (e) {
                    meta = null;
                }
                if (!meta) {
                    logInfo("GetHistory empty", {
                        topKeys: res && typeof res === "object" ? Object.keys(res) : []
                    });
                    state.cloudSnapshot = null;
                    return { ok: true, seeded: false };
                }
                takeCloudSnapshot(meta);
                if (applyCloudMeta(meta)) {
                    state.cloudSeedFailed = false;
                    state.cloudSaveLocked = false;
                    logInfo("GetHistory seeded", {
                        score: meta.TotalScore,
                        level: meta.CurrentLevel,
                        snapshot: state.cloudSnapshot
                    });
                    return { ok: true, seeded: true };
                }
                state.cloudSeedFailed = true;
                state.cloudSaveLocked = true;
                logWarn("GetHistory MetaData present but seed failed", {
                    keys: Object.keys(meta)
                });
                return { ok: true, seeded: false, seedFailed: true };
            })
            .catch(function (err) {
                logWarn("GetHistory fail — play local", err);
                return { ok: false, seeded: false };
            });
    }

    function installHook() {
        global.localStorage.setItem = function (key, value) {
            var result = nativeSetItem(key, value);
            if ((key === PROGRESS_KEY || key === SETTINGS_KEY) && !state.seeding && !state.resetting) {
                requestSave("ls:" + key);
            }
            return result;
        };
    }

    function clearAllProgress(game) {
        state.resetting = true;
        state.forceCloudSave = true;
        state.cloudSeedFailed = false;
        state.cloudSaveLocked = false;
        state.cloudSnapshot = null;
        clearTimeout(state.saveTimer);
        try {
            if (game && game.progress && typeof game.progress.erase === "function") game.progress.erase();
        } catch (e) {}
        state.seeding = true;
        try {
            nativeRemoveItem(PROGRESS_KEY);
            nativeRemoveItem(SETTINGS_KEY);
            nativeRemoveItem(STAMP_KEY);
        } finally {
            state.seeding = false;
        }
        return saveHistory("delete").finally(function () {
            global.location.reload();
        });
    }

    function hideClearNotice() {
        var notice = global.document.getElementById("gv-clear-notice");
        if (notice) notice.classList.remove("gv-show");
    }

    function confirmClearProgress(game) {
        var notice = global.document.getElementById("gv-clear-notice");
        if (!notice) {
            notice = global.document.createElement("div");
            notice.id = "gv-clear-notice";
            notice.innerHTML =
                '<div class="gv-clear-box" role="dialog" aria-modal="true">' +
                '<p class="gv-clear-msg">Bạn có chắc muốn xóa toàn bộ tiến trình đã lưu?</p>' +
                '<div class="gv-clear-actions">' +
                '<button type="button" class="gv-clear-btn gv-clear-cancel">Hủy</button>' +
                '<button type="button" class="gv-clear-btn gv-clear-ok">Xóa</button>' +
                "</div></div>";
            global.document.body.appendChild(notice);
            notice.addEventListener("click", function (event) {
                if (event.target === notice) hideClearNotice();
            });
            notice.querySelector(".gv-clear-cancel").addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();
                hideClearNotice();
            });
            notice.querySelector(".gv-clear-ok").addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();
                hideClearNotice();
                clearAllProgress(notice._gvGame || game);
            });
        }
        notice._gvGame = game;
        notice.classList.add("gv-show");
    }

    function neutralizeScoreDialog() {
        var root = global.document.getElementById("gv_savescore");
        if (!root) return;
        var links = root.querySelectorAll("a");
        var i;
        for (i = 0; i < links.length; i++) {
            var link = links[i];
            var cls = link.className || "";
            if (cls.indexOf("gv_btn-submit") >= 0 || cls.indexOf("gv_btn-close") >= 0) continue;
            if (link.getAttribute("data-gv-inert") === "1") continue;
            link.setAttribute("data-gv-inert", "1");
            link.removeAttribute("href");
            link.removeAttribute("target");
            link.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();
            });
        }
    }

    function onLevelClear(game) {
        var score = careerHighScore(game && game.progress);
        requestSave("level-clear");
        if (typeof global.GV !== "function") return;
        if (!global.__gvClient) {
            try {
                global.__gvClient = new global.GV();
            } catch (e) {
                return;
            }
        }
        var old = global.document.getElementById("gv_savescore");
        if (old && old.parentNode) old.parentNode.removeChild(old);
        try {
            global.__gvClient.saveScore(score);
        } catch (e) {
            return;
        }
        neutralizeScoreDialog();
    }

    global.open = function (url, target, features) {
        var address = String(url || "");
        if (address.indexOf("localhost/account/login") >= 0 || address.indexOf("localhost/account/login") >= 0) {
            return nativeOpen.call(global, url, target, features);
        }
        return null;
    };

    global.addEventListener("resize", function () {
        var size = measure();
        onFitted(size.w, size.h);
    });
    global.addEventListener("orientationchange", function () {
        setTimeout(pokeResize, 200);
    });
    if (global.visualViewport) global.visualViewport.addEventListener("resize", pokeResize);
    global.document.addEventListener("touchmove", function (event) {
        var target = event.target;
        if (
            target &&
            target.closest &&
            (target.closest("#gv_savescore") || target.closest("#gv-rotate") || target.closest("#gv-clear-notice"))
        ) {
            return;
        }
        event.preventDefault();
    }, { passive: false });

    if (global.document.body) {
        var observer = new MutationObserver(function () {
            neutralizeScoreDialog();
        });
        observer.observe(global.document.body, { childList: true, subtree: true });
    } else {
        global.document.addEventListener("DOMContentLoaded", function () {
            var observer = new MutationObserver(function () {
                neutralizeScoreDialog();
            });
            observer.observe(global.document.body, { childList: true, subtree: true });
            onFitted(measure().w, measure().h);
        });
    }

    lockViewport();
    installHook();

    state.historySettled = false;
    state.cloudSaveLocked = true;
    state.hydrateDone = false;

    var slowTimer = global.setTimeout(function () {
        if (!state.historySettled) logWarn("GetHistory still pending — waiting before boot");
    }, BOOT_TIMEOUT_MS);

    var ready = loadHistory()
        .catch(function (err) {
            logWarn("GetHistory unexpected", err);
            return { ok: false, seeded: false };
        })
        .then(function (result) {
            global.clearTimeout(slowTimer);
            state.historySettled = true;
            state.hydrateDone = true;
            if (!(result && result.seedFailed)) state.cloudSaveLocked = false;
            logInfo("History settled — boot allowed", {
                seeded: !!(result && result.seeded),
                seedFailed: !!(result && result.seedFailed),
                snapshot: state.cloudSnapshot
            });
            return result || { ok: true };
        });

    global.addEventListener("visibilitychange", function () {
        if (global.document.visibilityState === "hidden" && state.dirty) saveHistory("visibility");
    });
    global.addEventListener("pagehide", function () {
        if (state.dirty) saveHistory("pagehide");
    });

    global.GVBridge = {
        measure: measure,
        onFitted: onFitted,
        onLevelClear: onLevelClear,
        clearAllProgress: clearAllProgress,
        confirmClearProgress: confirmClearProgress,
        lockViewport: lockViewport,
        getCredentials: getCredentials,
        ready: ready
    };
})(window);
