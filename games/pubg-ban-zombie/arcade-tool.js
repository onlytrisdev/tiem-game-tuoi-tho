/* Arcade HTML5 history integration for PUBG bắn Zombie (Cocos Creator 2.x).
 * History metadata stays JSON-native; no Unity/Defold binary save blob.
 */
(function (root) {
    "use strict";
    const API = "https://localhost/account/";
    const qs = new URLSearchParams(root.location.search);
    const gid = qs.get("gid") || "";
    const token = qs.get("token") || "";
    const KEYPREFIX = "PUBGxZombie_";
    const NAMESPACE = "gv:pubg-zombie:v1:";
    const DEBOUNCE = 1500;
    const PERIOD = 10000;
    const TIMEOUT = 6000;
    const MAX_LEVEL = 1000000;
    const MAX_SCORE = 2147483647; // Game displays scores as signed 32-bit integers.
    const SCORE_KEY = "PUBGxZombie_HighScores";
    const MAX_NATIVE_SIZE = 1500000;

    function tokenIdentity(jwt) {
        try {
            const part = jwt.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
            const decoded = root.atob(part);
            const bytes = Array.from(decoded, c => "%" + c.charCodeAt(0).toString(16).padStart(2, "0")).join("");
            const claims = JSON.parse(decodeURIComponent(bytes));
            const id = claims.userid || claims.userId || claims.sub || claims.username;
            return typeof id === "string" || typeof id === "number" ? String(id) : "";
        } catch (_) { return ""; }
    }

    const account = tokenIdentity(token);
    const authenticated = Boolean(gid && token && account);
    const family = NAMESPACE + encodeURIComponent(root.location.pathname + "|" + gid + "|");
    const prefix = family + encodeURIComponent(account || "guest") + ":";
    const memory = new Map();
    let nativeStore = null;
    try { nativeStore = root.localStorage; } catch (_) {}
    let ready = false, allowed = false, dirty = false, busy = false, resetting = false;
    let popupOpen = false, revision = 0, resetId = "", expectedUpdatedAt = null;
    let timer = null, interval = null, activeFlush = null, initializing = null;
    let wins = [], changed = false;

    function log(message) { if (root.console) root.console.info("[Arcade H5] " + message); }
    function read(key) {
        if (memory.has(key)) return memory.get(key);
        try { return nativeStore ? nativeStore.getItem(prefix + key) : null; } catch (_) { return null; }
    }
    function write(key, value) {
        memory.set(key, value);
        try {
            if (nativeStore) {
                if (value == null) nativeStore.removeItem(prefix + key);
                else nativeStore.setItem(prefix + key, value);
            }
        } catch (_) {}
    }
    function localKeys() {
        const result = new Set();
        for (const key of memory.keys()) if (key.startsWith("native:")) result.add(key);
        try {
            if (nativeStore) {
                for (let i = 0; i < nativeStore.length; i++) {
                    const key = nativeStore.key(i);
                    if (key && key.startsWith(prefix + "native:")) result.add(key.slice(prefix.length));
                }
            }
        } catch (_) {}
        return Array.from(result);
    }
    function validName(key) {
        return typeof key === "string" && /^PUBGxZombie_[A-Za-z0-9_]+$/.test(key);
    }
    function normalizeWins(value) {
        if (!Array.isArray(value) || value.length > MAX_LEVEL) throw new Error("Invalid completed levels");
        const levels = new Set();
        for (const v of value) {
            if (!Number.isSafeInteger(v) || v < 1 || v > MAX_LEVEL) throw new Error("Invalid win level");
            levels.add(v);
        }
        return Array.from(levels).sort((a, b) => a - b);
    }
    function normalizeNative(value) {
        if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Invalid native progress");
        const output = Object.create(null);
        for (const key of Object.keys(value)) {
            if (!validName(key)) throw new Error("Invalid native key");
            if (!value[key] || typeof value[key] !== "object") throw new Error("Invalid native value");
            const json = JSON.stringify(value[key]);
            if (!json || json.length > MAX_NATIVE_SIZE) throw new Error("Invalid native payload");
            output[key] = JSON.parse(json);
        }
        if (JSON.stringify(output).length > MAX_NATIVE_SIZE) throw new Error("Native progress too large");
        return output;
    }
    function normalizeProgress(value) {
        if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Invalid Progress");
        return {
            Native: normalizeNative(value.Native),
            WonLevels: normalizeWins(value.WonLevels)
        };
    }
    // A genuine match score, never a counter of wins or the day number.
    function asScore(value) {
        const number = Number(value);
        return Number.isFinite(number) && number >= 0 && number <= MAX_SCORE
            ? Math.floor(number) : 0;
    }
    function validDay(day) {
        return /^[1-9]\d*$/.test(String(day)) && Number(day) <= MAX_LEVEL;
    }
    function scoreRecords(native) {
        const raw = native[SCORE_KEY] || {};
        const record = { ByDay: {}, Survival: 0 };
        const days = raw.ByDay && typeof raw.ByDay === "object" && !Array.isArray(raw.ByDay)
            ? raw.ByDay : {};
        for (const [day, score] of Object.entries(days)) {
            if (validDay(day)) record.ByDay[day] = asScore(score);
        }
        record.Survival = asScore(raw.Survival);
        // Backward compatible with native save data from before high-score support.
        const levels = native.PUBGxZombie_Levels || {};
        for (const [day, level] of Object.entries(levels)) {
            if (validDay(day) && level && typeof level === "object") {
                record.ByDay[day] = Math.max(record.ByDay[day] || 0, asScore(level.maxscore));
            }
        }
        const survival = native.PUBGxZombie_Survial || {};
        record.Survival = Math.max(record.Survival, asScore(survival.maxscore));
        return record;
    }
    function unionScores(left, right) {
        const result = { ByDay: {}, Survival: Math.max(left.Survival, right.Survival) };
        for (const records of [left.ByDay, right.ByDay]) {
            for (const [day, score] of Object.entries(records)) {
                if (validDay(day)) result.ByDay[day] = Math.max(result.ByDay[day] || 0, asScore(score));
            }
        }
        return result;
    }
    // v2 metadata used the best single match. Keep the old formula only
    // for verifying older server saves before migrating them to v3.
    function legacyBestOf(progress) {
        const records = scoreRecords(progress.Native);
        let best = records.Survival;
        for (const value of Object.values(records.ByDay)) best = Math.max(best, value);
        return best;
    }
    // Exactly one high score for each cleared day, plus one for Survival.
    // Failed daily attempts do not qualify. Completed Survival runs do.
    function scoreOf(progress) {
        const records = scoreRecords(progress.Native);
        const completed = new Set(progress.WonLevels.concat(passedLevels(progress.Native)));
        let total = records.Survival;
        for (const [day, score] of Object.entries(records.ByDay)) {
            if (completed.has(Number(day))) total += score;
        }
        return total;
    }
    function snapshot() {
        const native = Object.create(null);
        for (const storedKey of localKeys()) {
            const key = storedKey.slice(7);
            if (!validName(key)) continue;
            const raw = read(storedKey);
            if (!raw) continue;
            try { native[key] = JSON.parse(raw); }
            catch (_) { throw new Error("Corrupt local game data: " + key); }
        }
        return normalizeProgress({ Native: native, WonLevels: wins });
    }
    function passedLevels(native) {
        const levels = native && native["PUBGxZombie_Levels"];
        if (!levels || typeof levels !== "object" || Array.isArray(levels)) return [];
        return Object.keys(levels).filter(key =>
            /^[1-9]\d*$/.test(key) && Number.isSafeInteger(Number(key)) &&
            Number(key) <= MAX_LEVEL && levels[key] && Number(levels[key].state) === 1
        ).map(Number).sort((a,b) => a-b);
    }
    function userLevel(progress) {
        const levels = progress.Native["PUBGxZombie_Levels"] || {};
        const used = Object.keys(levels).map(Number).filter(n => Number.isSafeInteger(n) && n >= 1);
        const incomplete = used.filter(n => levels[n] && Number(levels[n].state) !== 1);
        return incomplete.length ? Math.min(...incomplete) : Math.max(1, ...used, ...progress.WonLevels.map(n=>n+1));
    }
    function metadata(progress, marker) {
        const score = scoreOf(progress);
        return {
            SchemaVersion: 3, Game: "pubg-ban-zombie",
            CurrentLevel: userLevel(progress), CurrentStage: userLevel(progress),
            TotalScore: score, BestScore: score,
            SavedAt: new Date().toISOString(),
            Progress: progress,
            ResetId: marker || ""
        };
    }
    function applyProgress(progress) {
        const next = new Map();
        for (const [key, data] of Object.entries(progress.Native)) next.set("native:" + key, JSON.stringify(data));
        for (const key of localKeys()) if (!next.has(key)) write(key, null);
        for (const [key, value] of next) write(key, value);
        wins = progress.WonLevels.slice();
        write("$wins", JSON.stringify(wins));
    }
    function mergeProgress(local, remote) {
        if (!remote) return local;
        const native = Object.assign(Object.create(null), remote.Native, local.Native);
        const a = remote.Native["PUBGxZombie_Levels"] || {};
        const b = local.Native["PUBGxZombie_Levels"] || {};
        if (Object.keys(a).length || Object.keys(b).length) {
            const levels = {};
            for (const day of new Set([...Object.keys(a), ...Object.keys(b)])) {
                const older = a[day] || {}, newer = b[day] || {};
                const level = Object.assign({}, older, newer);
                if (Number(older.state) === 1 || Number(newer.state) === 1) level.state = 1;
                if (older.maxscore != null || newer.maxscore != null) {
                    level.maxscore = Math.max(asScore(older.maxscore), asScore(newer.maxscore));
                }
                levels[day] = level;
            }
            native["PUBGxZombie_Levels"] = levels;
        }
        if (remote.Native.PUBGxZombie_Survial || local.Native.PUBGxZombie_Survial) {
            const remoteSurvival = remote.Native.PUBGxZombie_Survial || {};
            const localSurvival = local.Native.PUBGxZombie_Survial || {};
            native.PUBGxZombie_Survial = Object.assign({}, remoteSurvival, localSurvival, {
                maxscore: Math.max(asScore(remoteSurvival.maxscore), asScore(localSurvival.maxscore))
            });
        }
        native[SCORE_KEY] = unionScores(scoreRecords(remote.Native), scoreRecords(local.Native));
        const mergedWins = new Set(local.WonLevels.concat(remote.WonLevels));
        passedLevels(native).forEach(n => mergedWins.add(n));
        return normalizeProgress({
            Native: native,
            WonLevels: Array.from(mergedWins).sort((a,b) => a-b)
        });
    }
    function parse(value) { return typeof value === "string" ? JSON.parse(value) : value; }
    function stamp(body) {
        return body && (body.updatedAt || body.UpdatedAt || body.NgaySua || body.ngaySua) || null;
    }
    function response(raw) {
        const body = parse(raw);
        if (!body || typeof body !== "object") throw new Error("Invalid server response");
        if (body.Status != null && Number(body.Status) !== 1) throw new Error("History request rejected");
        if (body.Success === false || body.success === false) throw new Error("History request rejected");
        return body;
    }
    function decode(raw) {
        const body = response(raw);
        const has = Object.prototype.hasOwnProperty.call(body, "Data") ||
            Object.prototype.hasOwnProperty.call(body, "data");
        if (!has) throw new Error("Missing GetHistoryGame Data");
        const data = Object.prototype.hasOwnProperty.call(body, "Data") ? body.Data : body.data;
        if (data == null || data === "" || (Array.isArray(data) && !data.length)) {
            return { progress: null, updatedAt: stamp(body), resetId: "" };
        }
        const record = parse(data);
        if (!record || typeof record !== "object") throw new Error("Invalid history record");
        const field = ["MetaData", "metadata", "Metadata"].find(k =>
            Object.prototype.hasOwnProperty.call(record, k));
        if (!field) throw new Error("Missing H5 metadata");
        const meta = record[field] === "" ? null : parse(record[field]);
        if (meta == null || !Object.keys(meta).length) {
            return { progress: null, updatedAt: stamp(record) || stamp(body), resetId: "" };
        }
        const schema = Number(meta.SchemaVersion);
        if (meta.Game !== "pubg-ban-zombie" || (schema !== 1 && schema !== 2 && schema !== 3)) {
            throw new Error("Unknown H5 game schema");
        }
        const progress = normalizeProgress(meta.Progress);
        // v1: win count; v2: single-match best; v3: cumulative record scores.
        const score = schema === 1 ? progress.WonLevels.length :
            schema === 2 ? legacyBestOf(progress) : scoreOf(progress);
        if (Number(meta.TotalScore) !== score || Number(meta.BestScore) !== score ||
            Number(meta.CurrentLevel) !== userLevel(progress)) {
            throw new Error("Inconsistent H5 history metadata");
        }
        if (meta.ResetId != null && (typeof meta.ResetId !== "string" || meta.ResetId.length > 100)) {
            throw new Error("Invalid ResetId");
        }
        return { progress, updatedAt: stamp(record) || stamp(body), resetId: meta.ResetId || "", schema };
    }
    function request(method, params) {
        return new Promise((resolve, reject) => {
            const xhr = new root.XMLHttpRequest();
            xhr.open("POST", API + method, true);
            xhr.withCredentials = true;
            xhr.timeout = TIMEOUT;
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            xhr.onload = () => resolve({ status: xhr.status, body: xhr.responseText });
            xhr.onerror = xhr.ontimeout = () => reject(new Error("History network error"));
            xhr.send(new URLSearchParams(params).toString());
        });
    }
    async function load() {
        const reply = await request("GetHistoryGame", { gameId: gid, token });
        if (reply.status === 401 || reply.status === 403) allowed = false;
        if (reply.status < 200 || reply.status >= 300) throw new Error("History GET failed");
        return decode(reply.body);
    }
    function schedule() {
        if (timer || !ready || !allowed || !dirty || resetting || popupOpen) return;
        timer = root.setTimeout(() => { timer = null; flush(); }, DEBOUNCE);
    }
    function mark() {
        if (resetting) return;
        dirty = true;
        revision += 1;
        write("$dirty", "1");
        schedule();
    }
    const storage = {
        getItem(key) {
            key = String(key);
            if (key.startsWith(KEYPREFIX)) return read("native:" + key);
            try { return nativeStore ? nativeStore.getItem(key) : null; } catch (_) { return null; }
        },
        setItem(key, value) {
            if (resetting) return;
            key = String(key); value = String(value);
            if (!key.startsWith(KEYPREFIX)) {
                try { if (nativeStore) nativeStore.setItem(key, value); } catch (_) {}
                return;
            }
            if (!validName(key) || read("native:" + key) === value) return;
            write("native:" + key, value);
            mark();
        },
        removeItem(key) {
            if (resetting) return;
            key = String(key);
            if (!key.startsWith(KEYPREFIX)) {
                try { if (nativeStore) nativeStore.removeItem(key); } catch (_) {}
                return;
            }
            if (read("native:" + key) == null) return;
            write("native:" + key, null);
            mark();
        }
    };
    async function init() {
        if (initializing) return initializing;
        initializing = (async () => {
            let pending = null;
            try { wins = normalizeWins(JSON.parse(read("$wins") || "[]")); pending = snapshot(); }
            catch (_) { wins = []; pending = { Native: {}, WonLevels: [] }; }
            dirty = read("$dirty") === "1";
            if (authenticated) {
                try {
                    const cloud = await load();
                    const lastMarker = read("$resetId") || "";
                    if (cloud.resetId !== lastMarker) {
                        pending = null; dirty = false; write("$dirty", "0");
                    }
                    resetId = cloud.resetId;
                    expectedUpdatedAt = cloud.updatedAt;
                    applyProgress(pending && dirty ? mergeProgress(pending, cloud.progress) :
                        (cloud.progress || { Native: {}, WonLevels: [] }));
                    write("$resetId", resetId);
                    allowed = true;
                    // Upgrade valid v1/v2 history even if no new record is set
                    // in this session. Flush will refetch and merge first.
                    if (cloud.progress && cloud.schema < 3) mark();
                    if (dirty) write("$dirty", "1");
                    log("Arcade cloud H5 history restored");
                } catch (error) {
                    // Never upload defaults over an inaccessible / malformed cloud record.
                    log("GET unavailable or invalid; cloud writes paused: " + error.message);
                }
            } else {
                // Guest migration from this game's legacy keys only; do not import to another account.
                if (read("$migrated") !== "1") {
                    try {
                        if (nativeStore) {
                            const keys = [];
                            for (let i = 0; i < nativeStore.length; i++) {
                                const key = nativeStore.key(i);
                                if (validName(key)) keys.push(key);
                            }
                            for (const key of keys) write("native:" + key, nativeStore.getItem(key));
                        }
                    } catch (_) {}
                    write("$migrated", "1");
                }
                // Existing guests may have passed days saved before this integration.
                const old = snapshot();
                const passed = passedLevels(old.Native);
                if (passed.length && !wins.length) {
                    wins = passed;
                    write("$wins", JSON.stringify(wins));
                    mark();
                }
                log("No valid gid/token identity; guest data is local-only");
            }
            ready = true;
            interval = root.setInterval(() => { if (dirty) flush(); }, PERIOD);
            if (dirty) schedule();
        })();
        return initializing;
    }
    async function doFlush() {
        if (!ready || !allowed || !dirty || resetting || popupOpen || busy) return false;
        busy = true;
        const startRevision = revision;
        try {
            for (let attempt = 0; attempt < 2; attempt++) {
                const cloud = await load();
                if (resetting || popupOpen || cloud.resetId !== resetId) {
                    allowed = false;
                    return false;
                }
                const progress = mergeProgress(snapshot(), cloud.progress);
                const meta = metadata(progress, resetId);
                const reply = await request("SaveHistoryGame", {
                    gameId: gid, token,
                    metadata: JSON.stringify(meta), score: String(meta.TotalScore),
                    expectedUpdatedAt: cloud.updatedAt == null ? "" : String(cloud.updatedAt)
                });
                if (reply.status === 409) continue;
                if (reply.status < 200 || reply.status >= 300) throw new Error("History SAVE failed");
                const body = response(reply.body);
                if (body.Status == null && body.success !== true && body.Success !== true) {
                    throw new Error("Unconfirmed history SAVE");
                }
                expectedUpdatedAt = stamp(body) || cloud.updatedAt;
                if (revision === startRevision) {
                    dirty = false;
                    write("$dirty", "0");
                }
                return true;
            }
            throw new Error("History SAVE conflict");
        } catch (error) {
            log("SAVE pending retry: " + error.message);
            return false;
        } finally {
            busy = false;
            if (dirty) schedule();
        }
    }
    function flush() {
        if (activeFlush) return activeFlush;
        activeFlush = doFlush().finally(() => { activeFlush = null; });
        return activeFlush;
    }

    // Store the best successful match per day and the best finished
    // Survival run, then submit the SUM of those records to Arcade.
    function onMatchEnd(result) {
        if (resetting || !result || typeof result !== "object") return false;
        const mode = Number(result.gamemode); // 1: Survival; 2: Level/day
        const day = Number(result.levelid);
        if (mode !== 1 && mode !== 2) return false;
        if (mode === 2 && (!Number.isSafeInteger(day) || day < 1 || day > MAX_LEVEL)) return false;
        const matchScore = asScore(result.score);
        // Keep the completed-level flags for progress, not for ranking scores.
        if (mode === 2 && !result.dead && !wins.includes(day)) {
            wins.push(day);
            wins.sort((a,b) => a-b);
            write("$wins", JSON.stringify(wins));
            mark();
        }
        let records;
        try { records = scoreRecords(snapshot().Native); }
        catch (error) { log("Cannot read high scores: " + error.message); return false; }
        if (mode === 2 && !result.dead && matchScore > (records.ByDay[day] || 0)) {
            records.ByDay[day] = matchScore;
            storage.setItem(SCORE_KEY, JSON.stringify(records));
        } else if (mode === 1 && matchScore > records.Survival) {
            records.Survival = matchScore;
            storage.setItem(SCORE_KEY, JSON.stringify(records));
        }
        if (popupOpen) return false;
        if (typeof root.GV !== "function") {
            log("Arcade score.min.js unavailable; cumulative score saved for later sync");
            schedule();
            return false;
        }
        popupOpen = true;
        if (timer) { root.clearTimeout(timer); timer = null; }
        let completed = false, watchdog;
        const close = () => {
            if (completed) return;
            completed = true;
            if (watchdog) root.clearTimeout(watchdog);
            popupOpen = false;
            schedule();
        };
        const submitBest = async () => {
            try {
                let highScore = scoreOf(snapshot());
                // Union the per-day high scores, not the already-added totals:
                // otherwise two browsers clearing different days undercount.
                if (authenticated && allowed) {
                    try {
                        const cloud = await load();
                        if (cloud.resetId !== resetId) {
                            log("Score not submitted: another session reset game data");
                            close();
                            return false;
                        }
                        if (cloud.progress) highScore = scoreOf(mergeProgress(snapshot(), cloud.progress));
                    } catch (error) {
                        log("High-score cloud refresh unavailable; retaining local record");
                    }
                }
                if (resetting || completed) { close(); return false; }
                watchdog = root.setTimeout(close, 20000);
                // Original Arcade SDK; ?ads=0 affects ads only.
                new root.GV().saveScore(highScore, close);
                return true;
            } catch (error) {
                log("Arcade saveScore failed: " + error.message);
                close();
                return false;
            }
        };
        return submitBest();
    }

    // Arcade's local ?ads=0 harness skips the video and may call GVAdBreak's
    // callback synchronously. Treat that SDK callback as a simulated view ONLY
    // on explicit local test hosts. Production still requires an asynchronous
    // rewarded callback; URL parameters alone never grant a reward.
    const localAdSimulation = qs.get("ads") === "0" &&
        /^(?:test\.game|localhost|127\.0\.0\.1|\[?::1\]?)$/i.test(root.location.hostname || "");
    // Shared Arcade video adapter. Production: no completed ad == no reward.
    let rewardedBusy = false;
    function arcadeVideo(onSuccess, onFailure, placement) {
        if (rewardedBusy || typeof root.GVAdBreak !== "function") {
            log("Arcade video unavailable / busy: " + placement);
            if (typeof onFailure === "function") onFailure("unavailable");
            return false;
        }
        rewardedBusy = true;
        let finished = false;
        let watchdog = null;
        let sdkReturned = false;
        let earlyCallback = false;
        let earlyResult;
        function finish(success, reason) {
            if (finished) return;
            finished = true;
            rewardedBusy = false;
            if (watchdog) root.clearTimeout(watchdog);
            try {
                if (success) {
                    if (typeof onSuccess === "function") onSuccess();
                } else {
                    log("Arcade video not rewarded [" + placement + "]: " + (reason || "cancelled"));
                    if (typeof onFailure === "function") onFailure(reason || "cancelled");
                }
            } catch (error) {
                log("Arcade video callback error: " + error.message);
            }
        }
        function approved(value) {
            // Legacy SDK: async callback() signals that the video was watched.
            // Explicit error / dismiss / no-ad statuses must never grant rewards.
            if (value === undefined || value === true || value === 1) return true;
            if (typeof value === "string")
                return /^(success|complete|completed|viewed|rewarded)$/i.test(value.trim());
            if (value && typeof value === "object") {
                if (value.success === false || value.rewarded === false || value.error) return false;
                return value.success === true || value.rewarded === true ||
                    /^(success|complete|completed|viewed|rewarded)$/i.test(
                        String(value.status || value.result || value.breakStatus || "")
                    );
            }
            return false;
        }
        // Fail closed: a crashed/unavailable SDK must not grant coins.
        watchdog = root.setTimeout(() => finish(false, "timeout"), 90000);
        try {
            const result = root.GVAdBreak((value) => {
                if (!sdkReturned) {
                    earlyCallback = true;
                    earlyResult = value;
                    return;
                }
                finish(approved(value), approved(value) ? "" : "cancelled");
            });
            sdkReturned = true;
            if (earlyCallback && localAdSimulation &&
                (earlyResult == null || approved(earlyResult))) {
                // ads=0 on test.game intentionally suppresses video playback.
                // The Arcade SDK still fires the reward event. Never simulate
                // a reward without a callback or after an explicit failure.
                log("Local ads=0: Arcade reward callback simulated [" + placement + "]");
                finish(true);
            } else if (result === false ||
                (typeof result === "string" && /^(unsupported|unavailable|failed|error|noad)$/i.test(result)) ||
                (result && typeof result === "object" &&
                    (result.supported === false || result.available === false || result.error))) {
                finish(false, "unsupported");
            } else if (earlyCallback) {
                // Production must not reward an instant (unviewed) video.
                finish(false, "instant callback without video");
            } else if (result && typeof result.then === "function") {
                result.then((status) => {
                    if (status !== undefined) finish(approved(status), "cancelled");
                }).catch(() => finish(false, "SDK rejection"));
            }
            return !finished;
        } catch (error) {
            sdkReturned = true;
            log("Arcade GVAdBreak exception: " + error.message);
            finish(false, "SDK exception");
            return false;
        }
    }
    function rewardedAd(onSuccess, onFailure, placement) {
        return arcadeVideo(onSuccess, onFailure, placement || "rewarded");
    }
    function interstitialAd(onSuccess, onFailure, placement) {
        // Existing SDK exposes GVAdBreak; no GameDistribution or FBInstant
        // advertising is used in the HTML5 build. Interstitial has no reward.
        return arcadeVideo(onSuccess, onFailure, placement || "interstitial");
    }
    function clearScopedGameData() {
        const keys = [];
        try {
            if (nativeStore) {
                for (let i = 0; i < nativeStore.length; i++) {
                    const key = nativeStore.key(i);
                    if (key && (key.startsWith(family) || key.startsWith(KEYPREFIX))) {
                        keys.push(key);
                    }
                }
                for (const key of keys) nativeStore.removeItem(key);
            }
        } catch (_) {}
        memory.clear();
    }
    async function reset() {
        if (!ready || resetting || popupOpen) return false;
        resetting = true;
        if (timer) { root.clearTimeout(timer); timer = null; }
        try {
            if (activeFlush) await activeFlush;
            const fresh = { Native: {}, WonLevels: [] };
            const marker = Date.now().toString(36) + "-" + Math.random().toString(36).slice(2);
            if (authenticated) {
                let confirmed = false;
                for (let attempt = 0; attempt < 2; attempt++) {
                    const cloud = await load();
                    const meta = metadata(fresh, marker);
                    const reply = await request("SaveHistoryGame", {
                        gameId: gid, token, metadata: JSON.stringify(meta), score: "0",
                        expectedUpdatedAt: cloud.updatedAt == null ? "" : String(cloud.updatedAt)
                    });
                    if (reply.status === 409) continue;
                    if (reply.status < 200 || reply.status >= 300) throw new Error("Reset SAVE failed");
                    const body = response(reply.body);
                    if (body.Status == null && body.success !== true && body.Success !== true) {
                        throw new Error("Reset not confirmed");
                    }
                    const verified = await load();
                    if (verified.resetId !== marker || !verified.progress ||
                        verified.progress.WonLevels.length || Object.keys(verified.progress.Native).length) {
                        throw new Error("Reset read-back verification failed");
                    }
                    expectedUpdatedAt = verified.updatedAt;
                    confirmed = true;
                    break;
                }
                if (!confirmed) throw new Error("Reset conflict");
            }
            clearScopedGameData();
            wins = []; dirty = false; revision++;
            resetId = marker;
            write("$wins", "[]");
            write("$dirty", "0");
            write("$resetId", resetId);
            write("$migrated", "1");
            root.location.reload();
            return true;
        } catch (error) {
            log("Reset failed, local data preserved: " + error.message);
            return false;
        } finally {
            resetting = false;
            if (dirty) schedule();
        }
    }
    function confirmReset() {
        if (!root.document || root.document.getElementById("gv-pubg-reset")) return;
        const doc = root.document;
        const prevFocus = doc.activeElement;
        const overlay = doc.createElement("div");
        overlay.id = "gv-pubg-reset";
        overlay.style.cssText = "position:fixed;inset:0;z-index:2147483000;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;padding:18px;box-sizing:border-box";
        const panel = doc.createElement("div");
        panel.setAttribute("role", "dialog");
        panel.setAttribute("aria-modal", "true");
        panel.setAttribute("aria-labelledby", "gv-pubg-reset-message");
        panel.style.cssText = "box-sizing:border-box;width:370px;max-width:100%;padding:26px 22px;background:#c8edfb;border:3px solid #38a3d9;border-radius:17px;text-align:center;color:#136c9a;font:700 18px/1.5 Arial,sans-serif";
        const message = doc.createElement("p");
        message.id = "gv-pubg-reset-message";
        message.style.cssText = "margin:0 0 22px";
        message.textContent = "Bạn có chắc chắn xóa không? Mọi dữ liệu sẽ bị xóa vĩnh viễn và không thể khôi phục.";
        const row = doc.createElement("div");
        row.style.cssText = "display:flex;gap:12px;justify-content:center";
        function button(text) {
            const b = doc.createElement("button");
            b.type = "button"; b.textContent = text;
            b.style.cssText = "border:0;border-radius:8px;background:#4eade3;color:white;font:700 18px Arial,sans-serif;min-width:105px;min-height:46px;cursor:pointer";
            return b;
        }
        const ok = button("OK"), cancel = button("Hủy");
        const status = doc.createElement("p");
        status.setAttribute("aria-live", "polite");
        status.style.cssText = "font:400 14px Arial,sans-serif;margin:14px 0 0";
        let submitting = false;
        function dismiss() {
            if (submitting) return;
            overlay.remove();
            if (prevFocus && prevFocus.focus) prevFocus.focus();
        }
        cancel.addEventListener("click", dismiss);
        ok.addEventListener("click", async () => {
            if (submitting) return;
            submitting = true; ok.disabled = cancel.disabled = true;
            status.textContent = "Đang xóa dữ liệu…";
            const success = await reset();
            if (success) return;
            submitting = false; ok.disabled = cancel.disabled = false;
            status.textContent = "Không thể đồng bộ xóa dữ liệu. Hãy thử lại.";
            ok.focus();
        });
        overlay.addEventListener("keydown", ev => {
            if (ev.key === "Escape") { ev.preventDefault(); dismiss(); }
            if (ev.key === "Tab") {
                ev.preventDefault();
                if (!submitting) (doc.activeElement === ok ? cancel : ok).focus();
            }
        });
        row.appendChild(ok); row.appendChild(cancel);
        panel.appendChild(message); panel.appendChild(row); panel.appendChild(status);
        overlay.appendChild(panel); doc.body.appendChild(overlay); cancel.focus();
    }
    // This button belongs to the Cocos Settings popup, not an always-visible webpage overlay.
    function attachDelete(option) {
        if (!option || !option.music || !option.music.parent || !root.cc) return;
        const cc = root.cc, parent = option.music.parent;
        if (parent.getChildByName("ArcadeDeleteData")) return;
        const node = new cc.Node("ArcadeDeleteData");
        node.width = 214; node.height = 40;
        node.x = option.music.x; node.y = option.music.y - 51;
        node.parent = parent;
        const graphics = node.addComponent(cc.Graphics);
        graphics.fillColor = cc.color(202, 79, 34, 255);
        graphics.roundRect(-107, -20, 214, 40, 7);
        graphics.fill();
        const textNode = new cc.Node("Label");
        textNode.parent = node;
        textNode.width = 200; textNode.height = 38;
        const label = textNode.addComponent(cc.Label);
        label.string = "Xóa dữ liệu";
        label.fontSize = 23;
        label.lineHeight = 30;
        label.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
        label.verticalAlign = cc.Label.VerticalAlign.CENTER;
        textNode.color = cc.color(255,255,255);
        node.on(cc.Node.EventType.TOUCH_END, e => {
            if (e && e.stopPropagation) e.stopPropagation();
            confirmReset();
        }, option);
    }

    // WASD / Arrow keys use the exact same movement calls as the mobile joystick.

    // Allow Cocos and browser keyboard events. A physical key stays pressed
    // until KEY_UP, even if the first keydown occurs before a frame update.
    function bindKeyboard() {
        if (bindKeyboard.bound) return;
        bindKeyboard.bound = true;
        const keys = new Set();
        const recognized = new Set(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"]);
        const keyCodes = {87:"w",65:"a",83:"s",68:"d",38:"arrowup",40:"arrowdown",37:"arrowleft",39:"arrowright"};
        let activeField = null;
        let moving = false;
        function field() {
            try {
                const cc = root.cc;
                const node = cc && cc.find && cc.find("Game");
                const result = node && node.getComponent("Battlefield");
                return result && result.isPlaying() ? result : null;
            } catch (_) { return null; }
        }
        function keyName(event) {
            let key = String(event.key || event.code || "").toLowerCase();
            if (key.startsWith("key") && key.length === 4) key = key.slice(3);
            return recognized.has(key) ? key : keyCodes[event.keyCode] || "";
        }
        function shouldIgnore(event) {
            const element = event.target;
            const tag = element && element.tagName;
            return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" ||
                (element && element.isContentEditable) || event.ctrlKey || event.metaKey || event.altKey;
        }
        function update() {
            const current = field();
            if (!current) {
                // Scene changed, menu or result popup: do not carry key state
                // into another level.
                keys.clear();
                moving = false;
                activeField = null;
                return;
            }
            if (current !== activeField) { activeField = current; moving = false; }
            const x = Number(keys.has("d") || keys.has("arrowright")) -
                      Number(keys.has("a") || keys.has("arrowleft"));
            const y = Number(keys.has("w") || keys.has("arrowup")) -
                      Number(keys.has("s") || keys.has("arrowdown"));
            if (x || y) {
                const magnitude = Math.sqrt(x*x+y*y);
                current.startMove(root.cc.v2(x/magnitude, y/magnitude));
                moving = true;
            } else if (moving) {
                current.stopMove();
                moving = false;
            }
        }
        function down(event) {
            const key = keyName(event);
            if (!key || shouldIgnore(event) || !field()) return;
            if (event.preventDefault) event.preventDefault();
            keys.add(key);
            update();
        }
        function up(event) {
            const key = keyName(event);
            if (!key) return;
            if (event.preventDefault) event.preventDefault();
            keys.delete(key);
            update();
        }
        function reset() {
            keys.clear();
            if (moving && activeField && activeField.isPlaying()) {
                activeField.stopMove();
            }
            moving = false;
        }
        // DOM capture intercepts arrows before scrolling and responds to WASD
        // regardless of gameCanvas bubbling/focus event registration order.
        root.document.addEventListener("keydown", down, true);
        root.document.addEventListener("keyup", up, true);
        // Cocos platform key events may not carry `event.key` but have keyCode.
        if (root.cc && root.cc.systemEvent && root.cc.SystemEvent) {
            root.cc.systemEvent.on(root.cc.SystemEvent.EventType.KEY_DOWN, down);
            root.cc.systemEvent.on(root.cc.SystemEvent.EventType.KEY_UP, up);
        }
        const canvas = root.document.getElementById("GameCanvas");
        if (canvas) {
            const focus = () => { try { canvas.focus({ preventScroll: true }); } catch (_) { canvas.focus(); } };
            canvas.addEventListener("pointerdown", focus);
            canvas.addEventListener("touchstart", focus, {passive:true});
        }
        root.addEventListener("blur", reset);
        root.document.addEventListener("visibilitychange", () => {
            if (root.document.hidden) reset();
        });
        // Apply direction continuously, just like joystick movement across frames.
        // This also allows resuming play after unrelated UI interactions.
        root.setInterval(update, 40);
        log("WASD and arrow-key movement installed (Cocos + DOM)");
    }

    function installStorage() { if (root.cc && root.cc.sys) root.cc.sys.localStorage = storage; }
    root.ArcadeTool = {
        init, storage, flush, reset, confirmReset, onMatchEnd, rewardedAd, interstitialAd, attachDelete, bindKeyboard, installStorage,
        state: () => ({ ready, allowed, dirty, resetting, popupOpen,
            score: scoreOf(snapshot()), wins: wins.length, resetId, expectedUpdatedAt }),
        metadata: () => metadata(snapshot(), resetId)
    };
})(window);
