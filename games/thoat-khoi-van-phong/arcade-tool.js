(function (root) {
    "use strict";

    const API = "https://localhost/account/";
    const CONFIG = { debounceMs: 1500, intervalMs: 10000, timeoutMs: 5000 };
    const keys = [];
    for (let i = 0; i < 30; i++) keys.push("stage" + i, "srcn" + i);
    for (let i = 1; i <= 34; i++) keys.push("item" + i);
    for (let i = 1; i <= 24; i++) for (let j = 1; j <= 3; j++) keys.push("hint" + (10 * i + j));
    keys.push("sound", "freshover");
    const tracked = new Set(keys);

    function valid(key, value) {
        if (value == null || !/^-?\d+$/.test(String(value))) return null;
        const n = Number(value);
        if (key === "sound") return n === 1 || n === -1 ? String(n) : null;
        if (key.startsWith("srcn")) return Number.isSafeInteger(n) && n >= 0 ? String(n) : null;
        return n >= 0 && n <= (key.startsWith("stage") ? 2 : 1) ? String(n) : null;
    }

    function normalize(value) {
        if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Invalid progress");
        const result = {};
        for (const key of Object.keys(value)) {
            if (!tracked.has(key)) continue;
            const v = valid(key, value[key]);
            if (v === null) throw new Error("Invalid progress field: " + key);
            result[key] = v;
        }
        if (!Object.keys(result).length) throw new Error("Unknown progress schema");
        return result;
    }

    const parse = value => typeof value === "string" ? JSON.parse(value) : value;
    function stamp(value) {
        return value && (value.updatedAt || value.UpdatedAt || value.NgaySua || value.ngaySua) || null;
    }
    function response(value) {
        const body = parse(value);
        if (!body || typeof body !== "object") throw new Error("Invalid API response");
        if (body.Status != null && Number(body.Status) !== 1) throw new Error("API rejected request");
        if (body.success === false || body.Success === false) throw new Error("API rejected request");
        return body;
    }
    function decode(value) {
        const body = response(value);
        const hasData = Object.prototype.hasOwnProperty.call(body, "Data") || Object.prototype.hasOwnProperty.call(body, "data");
        const data = Object.prototype.hasOwnProperty.call(body, "Data") ? body.Data : body.data;
        if (!hasData) throw new Error("Missing history envelope");
        if (data == null || (Array.isArray(data) && !data.length)) return { progress: null, updatedAt: stamp(body), resetId: "" };
        const record = parse(data);
        const metaKey = ["MetaData", "metadata", "Metadata"].find(k => Object.prototype.hasOwnProperty.call(record, k));
        if (!metaKey) throw new Error("Missing metadata");
        const meta = record[metaKey] === "" ? null : parse(record[metaKey]);
        const updatedAt = stamp(record) || stamp(body);
        if (meta == null || meta === "" || (typeof meta === "object" && !Object.keys(meta).length)) return { progress: null, updatedAt, resetId: "" };
        // H5 metadata must contain structured progress, never a serialized save blob.
        const progress = normalize(meta.Progress);
        const completed = levelOf(progress);
        if (Number(meta.CurrentLevel || 0) > completed) throw new Error("Metadata cannot be restored safely");
        for (const field of ["TotalScore", "BestScore"]) {
            const score = Number(meta[field] || 0);
            if (!Number.isInteger(score) || score < 0 || score > scoreOf(progress)) throw new Error("Invalid completion score");
        }
        if (meta.ResetId != null && (typeof meta.ResetId !== "string" || meta.ResetId.length > 100)) throw new Error("Invalid reset marker");
        return { progress, updatedAt, resetId: meta.ResetId || "" };
    }
    function levelOf(progress) {
        let level = 0;
        for (let i = 1; i <= 24; i++) if (progress["stage" + i] === "1") level = i;
        return level;
    }
    function rank(key, value) {
        if (key.startsWith("stage")) return value === "1" ? 2 : value === "2" ? 1 : 0;
        return Number(value || 0);
    }
    function weaker(local, cloud) {
        return Object.keys(cloud).some(key => key !== "sound" && !key.startsWith("srcn") && rank(key, local[key]) < rank(key, cloud[key]));
    }
    function merge(local, cloud) {
        const result = Object.assign({}, cloud, local);
        for (const key of Object.keys(cloud)) {
            if (key !== "sound" && rank(key, cloud[key]) > rank(key, local[key])) result[key] = cloud[key];
        }
        return result;
    }
    function scoreOf(progress) {
        let score = 0;
        for (let i = 1; i <= 24; i++) if (progress["stage" + i] === "1") score++;
        return score;
    }
    function metadata(progress, resetId) {
        const score = scoreOf(progress);
        const meta = { CurrentLevel: levelOf(progress), CurrentStage: 0, TotalScore: score, BestScore: score,
            SavedAt: new Date().toISOString(), Progress: progress };
        if (resetId) meta.ResetId = resetId;
        return meta;
    }
    function identity(token) {
        try {
            const part = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
            const claim = JSON.parse(decodeURIComponent(Array.from(root.atob(part), c => "%" + c.charCodeAt(0).toString(16).padStart(2, "0")).join("")));
            return claim.userid || claim.userId || claim.sub || claim.username || null;
        } catch (_) { return null; }
    }

    function create(options) {
        const env = options || {};
        const location = env.location || root.location;
        const qs = new URLSearchParams(location.search);
        const gid = qs.get("gid") || "";
        const token = qs.get("token") || "";
        const user = identity(token);
        const authenticated = Boolean(gid && token && user);
        let native;
        try { native = env.storage || root.localStorage; } catch (_) { native = null; }
        const cacheFamily = "gv:office:v1:" + encodeURIComponent(location.pathname + "|" + gid + "|");
        const prefix = cacheFamily + encodeURIComponent(user || "guest") + ":";
        const memory = new Map();
        const timers = env.timers || root;
        let dirty = false, revision = 0, ready = false, allowed = false, busy = false, warnedStorage = false;
        let baseline = {}, expectedUpdatedAt = null, timer, interval, initPromise;
        let resetId = "", resetting = false, activeFlush = null, scorePopupOpen = false;
        const log = message => { if (root.console) root.console.info("[Arcade] " + message); };
        function read(key) {
            if (memory.has(key)) return memory.get(key);
            try { return native ? native.getItem(prefix + key) : null; } catch (_) { return null; }
        }
        function write(key, value) {
            memory.set(key, value);
            try {
                if (native) value === null ? native.removeItem(prefix + key) : native.setItem(prefix + key, value);
            } catch (_) { if (!warnedStorage) { warnedStorage = true; log("Local storage unavailable; using memory for this session"); } }
        }
        function schedule() {
            if (!ready || !allowed || timer || resetting || scorePopupOpen) return;
            timer = timers.setTimeout(() => { timer = null; flush(); }, CONFIG.debounceMs);
        }
        function mark() { dirty = true; revision++; write("$dirty", "1"); schedule(); }
        const storage = {
            getItem(key) { return read(String(key)); },
            setItem(key, value) {
                if (resetting) return;
                key = String(key); value = String(value);
                if (read(key) === value) return;
                write(key, value);
                if (tracked.has(key)) mark();
            },
            removeItem(key) { if (resetting) return; key = String(key); write(key, null); if (tracked.has(key)) mark(); },
            clear() { if (resetting) return; keys.forEach(key => write(key, null)); mark(); }
        };
        function snapshot() {
            const result = {};
            keys.forEach(key => { const value = valid(key, read(key)); if (value !== null) result[key] = value; });
            // A valid first save also represents a player who has not cleared a stage yet.
            if (!Object.keys(result).length) result.freshover = "0";
            return result;
        }
        function seed(progress) {
            keys.forEach(key => write(key, Object.prototype.hasOwnProperty.call(progress, key) ? progress[key] : null));
        }
        const request = env.request || function (name, params) {
            return new Promise((resolve, reject) => {
                const xhr = new root.XMLHttpRequest();
                xhr.open("POST", API + name, true);
                xhr.withCredentials = true;
                xhr.timeout = CONFIG.timeoutMs;
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
                xhr.onload = () => resolve({ status: xhr.status, body: xhr.responseText });
                xhr.onerror = xhr.ontimeout = () => reject(new Error("History network error"));
                xhr.send(new URLSearchParams(params).toString());
            });
        };
        async function load() {
            const r = await request("GetHistoryGame", { gameId: gid, token });
            if (r.status === 401 || r.status === 403) allowed = false;
            if (r.status < 200 || r.status >= 300) throw new Error("History load rejected");
            return decode(r.body);
        }
        async function init() {
            if (initPromise) return initPromise;
            initPromise = (async () => {
                dirty = read("$dirty") === "1";
                if (authenticated) {
                    try {
                        let pending = dirty ? snapshot() : null;
                        const cloud = await load();
                        if (cloud.resetId !== (read("$resetId") || "")) {
                            pending = null; dirty = false; write("$dirty", "0");
                        }
                        resetId = cloud.resetId;
                        write("$resetId", resetId);
                        baseline = cloud.progress || {};
                        expectedUpdatedAt = cloud.updatedAt;
                        if (cloud.progress) seed(pending ? merge(pending, baseline) : baseline);
                        allowed = true;
                        log("Cloud sync active");
                    } catch (_) {
                        // Do not upload fallback/default data after a failed or unrecognized read.
                        log("History unavailable or unsafe; local fallback, uploads paused until reload");
                    }
                } else {
                    // Guest data stays separate from authenticated accounts. Never upload another user's legacy keys.
                    if (!read("$migrated")) {
                        keys.forEach(key => { try { const v = valid(key, native && native.getItem(key)); if (v !== null) write(key, v); } catch (_) {} });
                        write("$migrated", "1");
                    }
                    log("No valid gid/token identity; local-only fallback");
                }
                ready = true;
                interval = timers.setInterval(() => { if (dirty) flush(); }, CONFIG.intervalMs);
                if (dirty) schedule();
            })();
            return initPromise;
        }
        async function doFlush() {
            if (!ready || !allowed || !dirty || busy || resetting || scorePopupOpen) return false;
            busy = true;
            try {
                // Refetch before every write, in addition to the server's conditional write.
                for (let attempt = 0; attempt < 2; attempt++) {
                    const cloud = await load();
                    if (scorePopupOpen) return false;
                    if (cloud.resetId !== resetId) { allowed = false; return false; }
                    baseline = cloud.progress || {};
                    expectedUpdatedAt = cloud.updatedAt;
                    let progress = snapshot();
                    // A backend reset must not be silently reversed by a stale open tab.
                    if (weaker(cloud.progress || {}, lastAccepted)) { allowed = false; return false; }
                    if (weaker(progress, baseline)) progress = merge(progress, baseline);
                    const sendingRevision = revision;
                    const meta = metadata(progress, resetId);
                    const params = { gameId: gid, token, metadata: JSON.stringify(meta), score: String(meta.TotalScore),
                        expectedUpdatedAt: expectedUpdatedAt == null ? "" : String(expectedUpdatedAt) };
                    const result = await request("SaveHistoryGame", params);
                    if (result.status === 409) continue; // Refetch and recompute; never retry stale payload/token.
                    if (result.status === 401 || result.status === 403) allowed = false;
                    if (result.status < 200 || result.status >= 300) throw new Error("Save rejected");
                    const body = response(result.body);
                    if (body.Status == null && body.success !== true && body.Success !== true) throw new Error("Unconfirmed save");
                    baseline = progress;
                    lastAccepted = progress;
                    expectedUpdatedAt = stamp(body.Data || body.data) || stamp(body);
                    if (revision === sendingRevision) { dirty = false; write("$dirty", "0"); }
                    log("SaveHistory OK CurrentLevel=" + meta.CurrentLevel);
                    return true;
                }
            } catch (_) { log("SaveHistory failed; pending progress retained"); }
            finally { busy = false; if (dirty) schedule(); }
            return false;
        }
        function flush() {
            if (resetting || scorePopupOpen) return Promise.resolve(false);
            if (activeFlush) return activeFlush;
            activeFlush = doFlush().finally(() => { activeFlush = null; });
            return activeFlush;
        }
        async function levelCompleted(stage) {
            if (resetting || !Number.isInteger(stage) || stage < 1 || stage > 24) return false;
            if (!scoreOf(snapshot()) || typeof root.GV !== "function") { flush(); return false; }
            scorePopupOpen = true;
            if (timer) { timers.clearTimeout(timer); timer = null; }
            let closed = false;
            const onClose = () => {
                if (closed) return;
                closed = true; scorePopupOpen = false; flush();
            };
            let progress = snapshot();
            if (authenticated && allowed) {
                try {
                    const cloud = await load();
                    if (cloud.resetId !== resetId) { allowed = false; onClose(); return false; }
                    progress = merge(progress, cloud.progress || {});
                } catch (_) { /* SDK can still handle submitting the locally known completion score. */ }
            }
            if (resetting) { onClose(); return false; }
            try { new root.GV().saveScore(scoreOf(progress), onClose); return true; }
            catch (_) { onClose(); return false; }
        }
        function clearGameCache() {
            // Remove this game's cache and old native keys, never storage belonging to another game.
            if (native) {
                const remove = [];
                try {
                    for (let i = 0; i < native.length; i++) {
                        const key = native.key(i);
                        if (key && key.startsWith(cacheFamily)) remove.push(key);
                    }
                } catch (_) {}
                remove.concat(keys, ["bgmVolume", "sfxVolume", "bgmusic", "sounds", "date_launch", "date_exit"]).forEach(key => {
                    try { native.removeItem(key); } catch (_) {}
                });
            }
            memory.clear();
        }
        async function reset() {
            if (!ready || resetting) return false;
            resetting = true;
            if (timer) { timers.clearTimeout(timer); timer = null; }
            try {
                if (activeFlush) await activeFlush;
                const fresh = { freshover: "0", sound: "1" };
                const nextResetId = Date.now().toString(36) + "-" + Math.random().toString(36).slice(2);
                if (authenticated) {
                    let confirmed = false;
                    for (let attempt = 0; attempt < 2; attempt++) {
                        const cloud = await load();
                        const meta = metadata(fresh, nextResetId);
                        const result = await request("SaveHistoryGame", { gameId: gid, token, metadata: JSON.stringify(meta),
                            score: "0", expectedUpdatedAt: cloud.updatedAt == null ? "" : String(cloud.updatedAt) });
                        if (result.status === 409) continue;
                        if (result.status < 200 || result.status >= 300) throw new Error("Reset rejected");
                        const body = response(result.body);
                        if (body.Status == null && body.success !== true && body.Success !== true) throw new Error("Unconfirmed reset");
                        const verified = await load();
                        if (verified.resetId !== nextResetId || !verified.progress || Object.keys(verified.progress).length !== Object.keys(fresh).length ||
                            Object.keys(fresh).some(key => verified.progress[key] !== fresh[key])) throw new Error("Reset verification failed");
                        expectedUpdatedAt = verified.updatedAt; confirmed = true; break;
                    }
                    if (!confirmed) throw new Error("Reset conflicted");
                }
                // Local data is removed only after cloud acknowledges AND read-back verifies the reset.
                clearGameCache();
                resetId = nextResetId; baseline = fresh; lastAccepted = fresh;
                seed(fresh); write("$resetId", resetId); write("$dirty", "0"); write("$migrated", "1");
                dirty = false; revision++; allowed = authenticated;
                if (env.reload) env.reload(); else if (root.location && root.location.reload) root.location.reload();
                return true;
            } catch (_) {
                log("Reset failed; local progress retained");
                return false;
            } finally { resetting = false; if (dirty) schedule(); }
        }
        let lastAccepted = {};
        return {
            init: async function () { await init(); lastAccepted = baseline; }, storage, flush, reset, levelCompleted,
            dispose() { if (timer) timers.clearTimeout(timer); if (interval) timers.clearInterval(interval); },
            state() { return { ready, allowed, dirty, busy, resetting, scorePopupOpen, expectedUpdatedAt }; }
        };
    }

    function showResetDialog(resetAction, document) {
        const doc = document || root.document;
        if (doc.getElementById("gv-reset-dialog")) return;
        const previousFocus = doc.activeElement;
        const overlay = doc.createElement("div");
        overlay.id = "gv-reset-dialog";
        overlay.style.cssText = "position:fixed;inset:0;z-index:2147483000;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;padding:20px;box-sizing:border-box;";
        const panel = doc.createElement("div");
        panel.setAttribute("role", "dialog"); panel.setAttribute("aria-modal", "true"); panel.setAttribute("aria-labelledby", "gv-reset-message");
        panel.style.cssText = "box-sizing:border-box;width:380px;max-width:100%;padding:30px 24px;background:#c5e9fb;border:3px solid #39a4df;border-radius:18px;text-align:center;font:700 18px/1.5 Arial,sans-serif;color:#227bac;box-shadow:0 5px 18px #0003;";
        const message = doc.createElement("p"); message.id = "gv-reset-message";
        message.textContent = "Bạn chắc chắn muốn xóa toàn bộ dữ liệu game?";
        message.style.cssText = "margin:0 0 24px;";
        const actions = doc.createElement("div"); actions.style.cssText = "display:flex;gap:16px;justify-content:center;";
        const button = text => {
            const element = doc.createElement("button"); element.type = "button"; element.textContent = text;
            element.style.cssText = "border:0;border-radius:7px;background:#69bdef;color:#fff;font:700 18px Arial,sans-serif;min-width:110px;min-height:48px;padding:10px 20px;cursor:pointer;touch-action:manipulation;";
            return element;
        };
        const ok = button("OK"), cancel = button("Hủy");
        const status = doc.createElement("p"); status.setAttribute("aria-live", "polite"); status.style.cssText = "font-size:14px;font-weight:400;margin:16px 0 0;";
        let busy = false;
        function close() { if (busy) return; overlay.remove(); if (previousFocus && previousFocus.focus) previousFocus.focus(); }
        cancel.addEventListener("click", close);
        ok.addEventListener("click", async () => {
            if (busy) return;
            busy = true; ok.disabled = cancel.disabled = true; status.textContent = "Đang xóa dữ liệu…";
            let success = false;
            try { success = await resetAction(); } catch (_) {}
            if (success) return;
            busy = false; ok.disabled = cancel.disabled = false;
            status.textContent = "Chưa thể xóa dữ liệu. Vui lòng kiểm tra kết nối và thử lại.";
            ok.focus();
        });
        overlay.addEventListener("keydown", event => {
            if (event.key === "Escape") { event.preventDefault(); close(); }
            if (event.key === "Tab") {
                event.preventDefault();
                if (!busy) (doc.activeElement === ok ? cancel : ok).focus();
            }
        });
        actions.appendChild(ok); actions.appendChild(cancel);
        panel.appendChild(message); panel.appendChild(actions); panel.appendChild(status); overlay.appendChild(panel); doc.body.appendChild(overlay);
        cancel.focus();
        return overlay;
    }
    let resetButtonFrame;
    function addResetButton(panel, action) {
        if (!panel || panel.getChildByName("ArcadeReset")) return;
        const cc = root.cc, template = panel.getChildByName("ButtonOther");
        if (!template) return;
        const node = new cc.Node("ArcadeReset");
        node.setContentSize(template.width, template.height);
        const tips = panel.getChildByName("GO_Tips_CN");
        node.setPosition(template.x, tips && tips.active ? -225 : template.y - 99);
        // A canvas-backed Sprite renders on both Cocos WebGL and Canvas backends.
        if (!resetButtonFrame || !cc.isValid(resetButtonFrame)) {
            const image = root.document.createElement("canvas"); image.width = 230; image.height = 69;
            const context = image.getContext("2d"), w = image.width, h = image.height, r = 7;
            context.fillStyle = "#69bdef"; context.beginPath(); context.moveTo(r, 0);
            context.arcTo(w, 0, w, h, r); context.arcTo(w, h, 0, h, r);
            context.arcTo(0, h, 0, 0, r); context.arcTo(0, 0, w, 0, r); context.closePath(); context.fill();
            const texture = new cc.Texture2D(); texture.initWithElement(image);
            resetButtonFrame = new cc.SpriteFrame(texture);
        }
        const sprite = node.addComponent(cc.Sprite); sprite.spriteFrame = resetButtonFrame; sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        const labelNode = new cc.Node("Label"); labelNode.setContentSize(node.width - 12, node.height);
        const label = labelNode.addComponent(cc.Label);
        label.string = "Xóa dữ liệu"; label.fontSize = 24; label.lineHeight = node.height; label.isBold = true;
        label.horizontalAlign = cc.Label.HorizontalAlign.CENTER; label.verticalAlign = cc.Label.VerticalAlign.CENTER;
        node.addChild(labelNode);
        const button = node.addComponent(cc.Button); button.transition = cc.Button.Transition.SCALE;
        node.on("click", action || (() => root.ArcadeTool.showResetDialog()));
        panel.addChild(node);
        return node;
    }
    let instance;
    root.ArcadeTool = {
        init: function () {
            if (!instance) {
                instance = create();
                root.cc.sys.localStorage = instance.storage;
                if (root.cc.sys.localStorage !== instance.storage) throw new Error("Cannot install game storage");
                root.document.addEventListener("visibilitychange", () => { if (root.document.hidden) instance.flush(); });
                root.addEventListener("pagehide", () => instance.flush());
            }
            return instance.init();
        },
        flush: () => instance && instance.flush(),
        onLevelComplete: stage => instance && instance.levelCompleted(stage),
        addResetButton,
        showResetDialog: () => instance && showResetDialog(() => instance.reset())
    };
    // Test exports use the same implementation as the browser, with independent simulated clients.
    if (typeof module !== "undefined" && module.exports) module.exports = { create, decode, metadata, normalize, merge, weaker, scoreOf, showResetDialog, addResetButton };
    /* Unrequested features (Leaderboard, Ads, Logo) remain inactive. */
})(typeof window !== "undefined" ? window : globalThis);

