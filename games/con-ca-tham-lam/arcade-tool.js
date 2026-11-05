/* Arcade HTML5 history integration for Con cá tham lam (Cocos Creator 2.4).
 * History metadata stays JSON-native; no Unity/Defold binary save blob.
 */
(function (root) {
    "use strict";
    const API = "https://localhost/account/";
    const qs = new URLSearchParams(root.location.search);
    const gid = qs.get("gid") || "";
    const token = qs.get("token") || "";
    const KEYPREFIX = "FishRun:";
    const NAMESPACE = "gv:greedyfish:v1:";
    const DEBOUNCE = 1500;
    const PERIOD = 10000;
    const TIMEOUT = 6000;
    const MAX_LEVEL = 1000000;
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
        return typeof key === "string" && /^FishRun:[A-Za-z0-9_]+$/.test(key);
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
    function userLevel(progress) {
        const u = progress.Native["FishRun:udata"];
        const level = u && Number(u.level);
        return Number.isSafeInteger(level) && level >= 1 && level <= MAX_LEVEL ? level : 1;
    }
    function metadata(progress, marker) {
        const score = progress.WonLevels.length;
        return {
            SchemaVersion: 1, Game: "con-ca-tham-lam",
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
        const a = local.Native["FishRun:udata"];
        const b = remote.Native["FishRun:udata"];
        if (a && b) {
            const combined = Object.assign({}, b, a);
            if (Number(b.level || 1) > Number(a.level || 1)) {
                combined.level = b.level;
                combined.cfglevel = b.cfglevel;
            }
            const shop = new Map();
            for (const item of [].concat(b.shopData || [], a.shopData || [])) {
                if (!item || !Number.isSafeInteger(Number(item.id))) continue;
                const prior = shop.get(item.id);
                if (!prior || Number(item.isGet || 0) > Number(prior.isGet || 0)) shop.set(item.id, item);
            }
            if (shop.size) combined.shopData = Array.from(shop.values());
            native["FishRun:udata"] = combined;
        }
        return normalizeProgress({
            Native: native,
            WonLevels: Array.from(new Set(local.WonLevels.concat(remote.WonLevels)))
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
        if (meta.Game !== "con-ca-tham-lam" || Number(meta.SchemaVersion) !== 1) {
            throw new Error("Unknown H5 game schema");
        }
        const progress = normalizeProgress(meta.Progress);
        const score = progress.WonLevels.length;
        if (Number(meta.TotalScore) !== score || Number(meta.BestScore) !== score ||
            Number(meta.CurrentLevel) > userLevel(progress)) {
            throw new Error("Inconsistent H5 history metadata");
        }
        if (meta.ResetId != null && (typeof meta.ResetId !== "string" || meta.ResetId.length > 100)) {
            throw new Error("Invalid ResetId");
        }
        return { progress, updatedAt: stamp(record) || stamp(body), resetId: meta.ResetId || "" };
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
    async function onLevelWin(level) {
        level = Number(level);
        if (resetting || !Number.isSafeInteger(level) || level < 1 || level > MAX_LEVEL) return false;
        if (!wins.includes(level)) {
            wins.push(level); wins.sort((a, b) => a - b);
            write("$wins", JSON.stringify(wins));
            mark();
        }
        // Every actual win opens the SDK popup, including a replay. Failure/skips never do.
        if (popupOpen) return false;
        popupOpen = true;
        if (timer) { root.clearTimeout(timer); timer = null; }
        let done = false, watchdog;
        const close = () => {
            if (done) return;
            done = true;
            if (watchdog) root.clearTimeout(watchdog);
            popupOpen = false;
            schedule();
        };
        if (!authenticated || typeof root.GV !== "function") {
            close(); return false;
        }
        let score = wins.length;
        if (allowed) {
            try {
                const cloud = await load();
                if (cloud.resetId !== resetId) { allowed = false; close(); return false; }
                if (cloud.progress) score = mergeProgress(snapshot(), cloud.progress).WonLevels.length;
            } catch (_) { /* Score SDK may still work if history GET is unavailable. */ }
        }
        if (resetting) { close(); return false; }
        try {
            watchdog = root.setTimeout(close, 20000);
            new root.GV().saveScore(score, close);
            return true;
        } catch (_) { close(); return false; }
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
        if (!root.document || root.document.getElementById("gv-fish-reset")) return;
        const doc = root.document;
        const prevFocus = doc.activeElement;
        const overlay = doc.createElement("div");
        overlay.id = "gv-fish-reset";
        overlay.style.cssText = "position:fixed;inset:0;z-index:2147483000;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;padding:18px;box-sizing:border-box";
        const panel = doc.createElement("div");
        panel.setAttribute("role", "dialog");
        panel.setAttribute("aria-modal", "true");
        panel.setAttribute("aria-labelledby", "gv-fish-reset-message");
        panel.style.cssText = "box-sizing:border-box;width:370px;max-width:100%;padding:26px 22px;background:#c8edfb;border:3px solid #38a3d9;border-radius:17px;text-align:center;color:#136c9a;font:700 18px/1.5 Arial,sans-serif";
        const message = doc.createElement("p");
        message.id = "gv-fish-reset-message";
        message.style.cssText = "margin:0 0 22px";
        message.textContent = "Bạn chắc chắn muốn xóa toàn bộ dữ liệu game?";
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
    function installHooks(requireModule) {
        if (typeof requireModule !== "function") return false;
        try {
            const cache = requireModule("CacheUtils").CacheUtils;
            if (!cache || cache.__arcadeInstalled) return true;
            cache.getData = key => storage.getItem(key);
            cache.saveData = (key, value) => storage.setItem(key, value);
            cache.__arcadeInstalled = true;
            const setting = requireModule("UISetting").default;
            const end = requireModule("UIEnd").default;
            if (!setting || !end) throw new Error("Cocos UI modules missing");
            const settingInit = setting.prototype.init;
            setting.prototype.init = function () {
                const result = settingInit.apply(this, arguments);
                if (this.btnPricavy) {
                    this.btnPricavy.off(root.cc.Node.EventType.TOUCH_END);
                    this.btnPricavy.on(root.cc.Node.EventType.TOUCH_END, confirmReset, this);
                    const setLabel = node => {
                        const label = node.getComponent && node.getComponent(root.cc.Label);
                        if (label) label.string = "Xóa dữ liệu";
                        if (node.children) node.children.forEach(setLabel);
                    };
                    setLabel(this.btnPricavy);
                }
                return result;
            };
            const originalEndInit = end.prototype.init;
            end.prototype.init = function (isWin) {
                const result = originalEndInit.apply(this, arguments);
                // UIEnd can be cached and re-opened for many different levels.
                // One init corresponds to one actual win; WonLevels deduplicates score.
                if (isWin) onLevelWin(this.currentLevel);
                return result;
            };
            log("Native Cocos save / victory / delete hooks active");
            return true;
        } catch (error) {
            log("Unable to install Cocos hooks: " + error.message);
            return false;
        }
    }

    root.ArcadeTool = {
        init, storage, flush, reset, confirmReset, onLevelWin, installHooks,
        state: () => ({ ready, allowed, dirty, resetting, popupOpen,
            score: wins.length, resetId, expectedUpdatedAt }),
        metadata: () => metadata(snapshot(), resetId)
    };
})(window);
