/* Arcade H5: lưu tiến trình cờ caro theo tài khoản, không lưu bàn đang đánh dở. */
(function (root) {
    "use strict";
    const API = "https://localhost/account/";
    const GAME = "caro-den-trang";
    // Mỗi ải chỉ được cộng điểm một lần, theo chương thử thách.
    // Thứ tự ID khớp với 31 thế cờ trong index.html (ID không liên tục).
    const PUZZLE_GROUPS = [
        { points: 1, ids: [1, 2, 3, 4, 5, 6, 11, 12] },
        { points: 2, ids: [21, 22, 23, 24, 25, 26, 27] },
        { points: 3, ids: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40] },
        { points: 4, ids: [41, 42, 43, 44, 45, 46] }
    ];
    const PUZZLE_POINTS = Object.fromEntries(
        PUZZLE_GROUPS.flatMap(group => group.ids.map(id => [id, group.points]))
    );
    const SCHEMA_VERSION = 3;
    const PREFIX = "gv_caro_den_trang_v1:";
    const ACTIVE = PREFIX + "active";
    const KEYS = ["gomoku-progress", "gomoku-difficulty", "gomoku-bgm", "gomoku-sfx"];
    // In some Arcade embeds, credentials live on the parent URL or referrer.
    // Do not treat ?gid alone as an authenticated player: it is also used by ad tests.
    function credentials() {
        const params = new URLSearchParams(root.location.search);
        let gid = params.get("gid") || "";
        let token = params.get("token") || "";
        if ((!gid || !token) && root.parent !== root) {
            try {
                const parent = new URLSearchParams(root.parent.location.search);
                gid = gid || parent.get("gid") || "";
                token = token || parent.get("token") || "";
            } catch (_) { /* Cross-origin parent. */ }
        }
        if ((!gid || !token) && root.document.referrer) {
            try {
                const referrer = new URL(root.document.referrer);
                const parent = new URLSearchParams(referrer.search);
                gid = gid || parent.get("gid") || "";
                token = token || parent.get("token") || "";
            } catch (_) {}
        }
        return { gid, token };
    }
    const { gid, token } = credentials();
    const authenticated = !!(gid && token);
    let storage = null;
    try { storage = root.localStorage; } catch (_) {}

    function read(key) { try { return storage ? storage.getItem(key) : null; } catch (_) { return null; } }
    function write(key, value) { try { if (storage) storage.setItem(key, value); } catch (_) {} }
    function drop(key) { try { if (storage) storage.removeItem(key); } catch (_) {} }
    function parse(value) { return typeof value === "string" ? JSON.parse(value) : value; }
    function number(value, max) {
        const n = Number(value);
        return Number.isSafeInteger(n) && n >= 0 && n <= max ? n : 0;
    }
    function identity() {
        if (!authenticated) return "guest";
        let claim = "";
        try {
            const encoded = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
            const payload = JSON.parse(decodeURIComponent(Array.from(root.atob(encoded), c =>
                "%" + c.charCodeAt(0).toString(16).padStart(2, "0")).join("")));
            claim = String(payload.userid || payload.userId || payload.sub || payload.username || "");
        } catch (_) {}
        const input = gid + "|" + (claim || token);
        let hash = 2166136261;
        for (let i = 0; i < input.length; i++) hash = Math.imul(hash ^ input.charCodeAt(i), 16777619);
        return "user-" + (hash >>> 0).toString(16);
    }
    const account = identity();
    const cacheKey = PREFIX + "player:" + account;
    function empty() {
        return { progress: {}, wins: { easy: 0, medium: 0, hard: 0 },
            settings: { difficulty: "medium", bgm: "1", sfx: "1" },
            lastMode: "", lastPuzzle: 0 };
    }
    function normalize(value) {
        if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Invalid game record");
        const result = empty();
        if (value.progress && typeof value.progress === "object" && !Array.isArray(value.progress)) {
            for (const [key, score] of Object.entries(value.progress)) {
                const n = Number(key);
                if (Object.prototype.hasOwnProperty.call(PUZZLE_POINTS, key) && String(n) === key)
                    result.progress[key] = number(score, 3);
            }
        }
        if (value.wins && typeof value.wins === "object") {
            for (const diff of ["easy", "medium", "hard"])
                result.wins[diff] = number(value.wins[diff], 10000000);
        }
        if (value.settings && typeof value.settings === "object") {
            result.settings.difficulty = ["easy", "medium", "hard"].includes(value.settings.difficulty)
                ? value.settings.difficulty : "medium";
            result.settings.bgm = value.settings.bgm === "0" ? "0" : "1";
            result.settings.sfx = value.settings.sfx === "0" ? "0" : "1";
        }
        result.lastMode = ["pve", "pvp", "endgame"].includes(value.lastMode) ? value.lastMode : "";
        result.lastPuzzle = number(value.lastPuzzle, 30);
        return result;
    }
    function localProgress() {
        try { return parse(read("gomoku-progress")) || {}; } catch (_) { return {}; }
    }
    function legacy() {
        const d = empty();
        d.progress = localProgress();
        d.settings.difficulty = read("gomoku-difficulty") || "medium";
        d.settings.bgm = read("gomoku-bgm") === "0" ? "0" : "1";
        const sound = read("gomoku-sfx");
        d.settings.sfx = sound === "0" || (sound === null && read("gomoku-muted") === "1") ? "0" : "1";
        return normalize(d);
    }
    function aiScore(d) { return d.wins.easy + d.wins.medium * 2 + d.wins.hard * 3; }
    function puzzleScore(d, schemaVersion = SCHEMA_VERSION) {
        return Object.entries(d.progress).reduce((score, [id, stars]) => {
            const points = PUZZLE_POINTS[id] || 0;
            return score + (stars > 0 ? (schemaVersion < 3 ? Math.min(points, 3) : points) : 0);
        }, 0);
    }
    function total(d) { return aiScore(d) + puzzleScore(d); }
    function level(d) { return Object.values(d.progress).filter(v => v > 0).length; }
    // Only durable progress is synced. An unfinished match is not a saved game.
    function signature(d) {
        return JSON.stringify({ progress: d.progress, wins: d.wins, settings: d.settings });
    }
    function readCache() {
        try {
            const cached = parse(read(cacheKey));
            return cached && cached.data ? {
                data: normalize(cached.data), dirty: !!cached.dirty,
                nonce: typeof cached.nonce === "string" ? cached.nonce : ""
            } : null;
        } catch (_) { return null; }
    }
    function saveCache() {
        write(cacheKey, JSON.stringify({ data: current, nonce: resetNonce, dirty: dirty }));
    }
    function apply(d) {
        write("gomoku-progress", JSON.stringify(d.progress));
        write("gomoku-difficulty", d.settings.difficulty);
        write("gomoku-bgm", d.settings.bgm);
        write("gomoku-sfx", d.settings.sfx);
    }
    function capture() {
        current.progress = normalize({ progress: localProgress() }).progress;
        current.settings.difficulty = ["easy", "medium", "hard"].includes(read("gomoku-difficulty"))
            ? read("gomoku-difficulty") : current.settings.difficulty;
        current.settings.bgm = read("gomoku-bgm") === "0" ? "0" : "1";
        current.settings.sfx = read("gomoku-sfx") === "0" ? "0" : "1";
    }
    function merge(a, b) {
        const x = normalize(a), y = normalize(b);
        const result = normalize(x);
        for (const key of Object.keys(y.progress))
            result.progress[key] = Math.max(result.progress[key] || 0, y.progress[key]);
        for (const key of ["easy", "medium", "hard"])
            result.wins[key] = Math.max(x.wins[key], y.wins[key]);
        return result;
    }
    function metadata(d) {
        const data = normalize(d);
        return { Game: GAME, SchemaVersion: SCHEMA_VERSION, ResetNonce: resetNonce,
            CurrentLevel: level(data), CurrentStage: 0,
            TotalScore: total(data), BestScore: total(data), SavedAt: new Date().toISOString(),
            Record: { __version__: SCHEMA_VERSION, localKeys: {
                "gomoku-progress": JSON.stringify(data.progress),
                "gomoku-difficulty": data.settings.difficulty,
                "gomoku-bgm": data.settings.bgm,
                "gomoku-sfx": data.settings.sfx
            }, Wins: data.wins, LastMode: "", LastPuzzle: 0 }
        };
    }
    function stamp(value) {
        return value && (value.updatedAt || value.UpdatedAt || value.NgaySua || value.ngaySua) || "";
    }
    function decode(body) {
        if (!body || typeof body !== "object" || (body.Status != null && Number(body.Status) !== 1)
            || body.success === false || body.Success === false) throw new Error("Arcade API rejected response");
        if (!Object.prototype.hasOwnProperty.call(body, "Data") &&
            !Object.prototype.hasOwnProperty.call(body, "data")) throw new Error("Missing Arcade history");
        let saved = Object.prototype.hasOwnProperty.call(body, "Data") ? body.Data : body.data;
        saved = saved == null || saved === "" ? null : parse(saved);
        if (Array.isArray(saved) && !saved.length) saved = null;
        if (saved == null) return { data: null, nonce: "", updatedAt: stamp(body) };
        if (typeof saved !== "object" || Array.isArray(saved)) throw new Error("Invalid Arcade history");
        const raw = saved.MetaData !== undefined ? saved.MetaData :
            saved.metaData !== undefined ? saved.metaData :
            saved.metadata !== undefined ? saved.metadata : saved.Metadata;
        if (raw === undefined) throw new Error("Missing Arcade metadata");
        const meta = raw === "" || raw == null ? null : parse(raw);
        if (!meta || (typeof meta === "object" && !Object.keys(meta).length))
            return { data: null, nonce: "", updatedAt: stamp(saved) || stamp(body) };
        const schemaVersion = Number(meta.SchemaVersion);
        if (meta.Game !== GAME || ![1, 2, SCHEMA_VERSION].includes(schemaVersion) || !meta.Record ||
            !meta.Record.localKeys || !meta.Record.Wins) throw new Error("Unknown H5 save schema");
        const keys = meta.Record.localKeys;
        const data = normalize({
            progress: parse(keys["gomoku-progress"] || "{}"),
            wins: meta.Record.Wins,
            settings: { difficulty: keys["gomoku-difficulty"], bgm: keys["gomoku-bgm"], sfx: keys["gomoku-sfx"] },
            lastMode: meta.Record.LastMode, lastPuzzle: meta.Record.LastPuzzle
        });
        // v1 tính thắng AI; v2 tính giải thế cờ tối đa +3/ải; v3 tăng Đỉnh Cao lên +4/ải.
        const expectedScore = schemaVersion === 1 ? aiScore(data) :
            schemaVersion === 2 ? aiScore(data) + puzzleScore(data, 2) : total(data);
        if (Number(meta.TotalScore) !== expectedScore) throw new Error("Incorrect H5 score metadata");
        if (meta.ResetNonce != null && typeof meta.ResetNonce !== "string")
            throw new Error("Invalid reset nonce");
        return { data, nonce: meta.ResetNonce || "", schemaVersion,
            updatedAt: stamp(saved) || stamp(body) };
    }
    function request(name, body) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", API + name, true);
            xhr.withCredentials = true;
            xhr.timeout = 6500;
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            xhr.onload = () => {
                if (xhr.status < 200 || xhr.status >= 300) return reject(new Error("Arcade HTTP " + xhr.status));
                try { resolve(parse(xhr.responseText)); } catch (e) { reject(e); }
            };
            xhr.onerror = xhr.ontimeout = () => reject(new Error("Arcade connection unavailable"));
            xhr.send(new URLSearchParams(body).toString());
        });
    }
    function getCloud() {
        return request("GetHistoryGame", { gameId: gid, token: token }).then(decode);
    }
    let current = empty();
    let resetNonce = "", dirty = false, ready = false, allowed = false;
    let initPromise = null, savePromise = null, timer = null, popupOpen = false;
    let recovering = false, lastSignature = "";
    function schedule() {
        if (!ready || !dirty || !allowed || timer) return;
        timer = root.setTimeout(() => { timer = null; flush(); }, 600);
    }
    function mark(immediate) {
        if (!ready) return;
        const previousPuzzleScore = puzzleScore(current);
        capture();
        const puzzleWin = current.lastMode === "endgame" && puzzleScore(current) > previousPuzzleScore;
        const nextSignature = signature(current);
        // Starting/leaving a match must not upload an unfinished board or mode.
        if (nextSignature !== lastSignature) {
            dirty = true;
            lastSignature = nextSignature;
            saveCache();
        }
        if (dirty) {
            if (immediate) flush();
            else schedule();
        }
        // Hàm ghi sao của game gọi mark(true) trước khi hiện bảng kết quả.
        // Chờ kết quả hiển thị rồi mới dùng popup gốc Arcade.
        if (puzzleWin) {
            const score = total(current);
            root.setTimeout(() => showScore(score), 1100);
        }
    }
    async function init() {
        if (initPromise) return initPromise;
        initPromise = (async () => {
            const former = read(ACTIVE);
            const raw = legacy();
            const cached = readCache();
            // Không sử dụng dữ liệu của người chơi cũ khi đổi tài khoản.
            if (former !== account) {
                if (former !== null) {
                    const previous = PREFIX + "player:" + former;
                    const old = read(previous);
                    if (old) {
                        try {
                            const parsed = parse(old);
                            parsed.data = normalize(Object.assign({}, parsed.data, {
                                progress: raw.progress, settings: raw.settings
                            }));
                            write(previous, JSON.stringify(parsed));
                        } catch (_) {}
                    }
                }
                KEYS.forEach(drop);
                drop("gomoku-muted");
                write(ACTIVE, account);
            }
            if (cached) {
                current = cached.data;
                dirty = cached.dirty;
                resetNonce = cached.nonce;
            } else if (former === null || former === "guest") {
                current = raw;
                dirty = Object.keys(raw.progress).length > 0;
            }
            apply(current);
            if (authenticated) {
                try {
                    const cloud = await getCloud(); // Chờ GET trước khi game nhận thao tác.
                    if (cloud.data) {
                        if (dirty && cloud.nonce === resetNonce)
                            current = merge(current, cloud.data);
                        else {
                            current = cloud.data;
                            dirty = false;
                        }
                        resetNonce = cloud.nonce;
                        // Tự nâng cấp bản lưu v1 mà không xóa sao/điểm cũ.
                        if (cloud.schemaVersion < SCHEMA_VERSION) dirty = true;
                    } else if (resetNonce) {
                        // Cloud record was cleared: a stale browser cache must not revive it.
                        current = empty();
                        resetNonce = "";
                        dirty = false;
                    } else if (cached || Object.keys(current.progress).length || total(current)) {
                        dirty = true;
                    }
                    allowed = true;
                } catch (e) {
                    // Không bao giờ ghi dữ liệu mặc định đè lên bản cloud chưa đọc được.
                    allowed = false;
                    console.warn("[Arcade Caro] GET lỗi; tạm ngưng ghi cloud:", e);
                }
            }
            // Restore permanent progress/settings only. Never restore an active match.
            current.lastMode = "";
            current.lastPuzzle = 0;
            apply(current);
            ready = true;
            lastSignature = signature(current);
            saveCache();
            if (dirty) schedule();
            root.setInterval(() => {
                if (!ready) return;
                const old = lastSignature;
                capture();
                if (signature(current) !== old) mark(false);
                if (authenticated && !allowed) recover();
                else if (dirty) flush();
            }, 9000);
            root.addEventListener("pagehide", () => {
                if (!ready) return;
                mark(false);
                if (dirty) flush();
            });
            return true;
        })();
        return initPromise;
    }
    async function recover() {
        if (!ready || !authenticated || allowed || recovering) return false;
        recovering = true;
        try {
            const cloud = await getCloud();
            if (cloud.data) {
                if (dirty && cloud.nonce === resetNonce) current = merge(current, cloud.data);
                else { current = cloud.data; dirty = false; }
                resetNonce = cloud.nonce;
                if (cloud.schemaVersion < SCHEMA_VERSION) dirty = true;
            } else if (resetNonce) {
                current = empty();
                resetNonce = "";
                dirty = false;
            } else if (Object.keys(current.progress).length || total(current)) dirty = true;
            apply(current);
            lastSignature = signature(current);
            allowed = true;
            saveCache();
            if (dirty) schedule();
            return true;
        } catch (error) {
            console.warn("[Arcade Caro] Đang thử kết nối lại:", error);
            return false;
        } finally { recovering = false; }
    }
    async function flush() {
        if (!ready || !allowed || !authenticated || !dirty) return false;
        if (savePromise) return savePromise;
        savePromise = (async () => {
            try {
                const cloud = await getCloud();
                if (cloud.nonce !== resetNonce) {
                    allowed = false;
                    throw new Error("Cloud reset changed; refusing to overwrite");
                }
                capture();
                const sent = signature(current);
                const data = cloud.data ? merge(current, cloud.data) : normalize(current);
                const meta = metadata(data);
                const serialized = JSON.stringify(meta);
                const args = { gameId: gid, token: token,
                    // Both metadata spellings are in use across existing Arcade H5 bridges.
                    metaData: serialized, metadata: serialized,
                    CurrentLevel: String(meta.CurrentLevel), TotalScore: String(meta.TotalScore),
                    score: String(meta.TotalScore) };
                if (cloud.updatedAt) args.expectedUpdatedAt = String(cloud.updatedAt);
                const response = await request("SaveHistoryGame", args);
                if (!response || typeof response !== "object" ||
                    (response.Status != null && Number(response.Status) !== 1) ||
                    response.success === false || response.Success === false)
                    throw new Error("Arcade SAVE was not accepted");
                const checked = await getCloud();
                if (!checked.data || checked.nonce !== resetNonce ||
                    total(checked.data) < total(data) ||
                    Object.entries(data.progress).some(([k, v]) => (checked.data.progress[k] || 0) < v))
                    throw new Error("Cloud save not confirmed");
                const changed = signature(current) !== sent;
                current = changed ? merge(current, checked.data) : normalize(checked.data);
                dirty = changed;
                apply(current);
                lastSignature = signature(current);
                saveCache();
                if (dirty) schedule();
                return true;
            } catch (error) {
                console.warn("[Arcade Caro] SAVE chờ thử lại:", error);
                return false;
            }
        })();
        try { return await savePromise; }
        finally { savePromise = null; }
    }
    function begin(mode, puzzle, difficulty) {
        if (!ready) return;
        current.lastMode = mode;
        current.lastPuzzle = number(puzzle, 30);
        if (["easy", "medium", "hard"].includes(difficulty)) {
            current.settings.difficulty = difficulty;
            write("gomoku-difficulty", difficulty);
        }
        mark(false);
    }
    function leave() {
        if (!ready) return;
        current.lastMode = "";
        mark(false);
    }
    function win(difficulty) {
        if (!ready || current.lastMode !== "pve" || !["easy", "medium", "hard"].includes(difficulty)) return null;
        current.wins[difficulty] = Math.min(10000000, current.wins[difficulty] + 1);
        mark(true); // Mỗi chiến thắng đấu AI được lưu ngay.
        return total(current);
    }
    // Giữ điểm thắng đang chờ nếu SDK Arcade tải chậm. Không tự dựng popup thay thế.
    let pendingScore = 0, scoreRetryTimer = null, scoreRetryStarted = 0;
    function scoreSDK() {
        const hosts = [root];
        try { if (root.parent !== root) hosts.push(root.parent); } catch (_) {}
        try { if (root.top !== root && root.top !== root.parent) hosts.push(root.top); } catch (_) {}
        for (const host of hosts) {
            try {
                if (typeof host.GV === "function") return { host, GV: host.GV };
            } catch (_) {}
        }
        return null;
    }
    function liftScorePopup(host) {
        let attempt = 0;
        function lift() {
            if (!popupOpen) return;
            for (const frame of [host, root]) {
                try {
                    const el = frame.document.getElementById("gv_savescore");
                    if (el) {
                        // Popup gốc phải nằm trên overlay kết quả của game.
                        el.style.setProperty("z-index", "2147483647", "important");
                        return;
                    }
                } catch (_) {}
            }
            if (++attempt < 30) root.setTimeout(lift, 100);
        }
        lift();
    }
    function showScore(score) {
        if (!Number.isSafeInteger(score) || score < 1) {
            console.warn("[Arcade Caro] Điểm gửi không hợp lệ:", score);
            return false;
        }
        if (popupOpen) return false;
        pendingScore = Math.max(pendingScore, score);
        const sdk = scoreSDK();
        if (!sdk) {
            if (!scoreRetryTimer) {
                scoreRetryStarted = Date.now();
                console.warn("[Arcade Caro] Chưa tìm thấy GV SDK; chờ để gửi điểm:", pendingScore);
                const retry = () => {
                    scoreRetryTimer = null;
                    if (popupOpen) return;
                    if (scoreSDK()) {
                        showScore(pendingScore);
                    } else if (Date.now() - scoreRetryStarted < 12000) {
                        scoreRetryTimer = root.setTimeout(retry, 250);
                    } else {
                        console.warn("[Arcade Caro] GV SDK không khả dụng; chưa thể mở popup gốc. Kiểm tra score.min.js, gid và trình chặn script.");
                    }
                };
                scoreRetryTimer = root.setTimeout(retry, 250);
            }
            return false;
        }
        if (scoreRetryTimer) root.clearTimeout(scoreRetryTimer);
        scoreRetryTimer = null;
        const value = pendingScore;
        pendingScore = 0;
        popupOpen = true;
        let watchdog;
        const close = () => {
            if (watchdog) root.clearTimeout(watchdog);
            popupOpen = false;
        };
        try {
            const gv = new sdk.GV();
            if (typeof gv.saveScore !== "function") throw new Error("GV().saveScore không tồn tại");
            gv.saveScore(value, close);
            liftScorePopup(sdk.host);
            watchdog = root.setTimeout(close, 120000);
            return true;
        } catch (error) {
            pendingScore = Math.max(pendingScore, value);
            close();
            console.warn("[Arcade Caro] Không mở được popup gửi điểm:", error);
            return false;
        }
    }
    root.ArcadeCaro = {
        init, mark, flush, recover, begin, leave, win, showScore,
        // index.html calls resume() at startup; return null to match the original
        // game's Start screen regardless of refresh or cloud-saved last mode.
        resume: () => null,
        status: () => ({ ready, authenticated, cloudAllowed: allowed, pendingSave: dirty,
            score: total(current), scorePopup: { sdkReady: !!scoreSDK(), open: popupOpen, pending: pendingScore },
            wins: Object.assign({}, current.wins),
            progress: Object.assign({}, current.progress), lastMode: current.lastMode })
    };
})(window);
