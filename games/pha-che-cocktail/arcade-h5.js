(function (root) {
  "use strict";
  // Arcade player progress bridge. Does not call/replace GV().saveScore().
  var PREFIX = "gv_pha_che_cocktail_v2:";
  var ACTIVE = PREFIX + "active";
  var GAME_SAVE = "bartender_make_right_mix_save";
  var ACHIEVE_SAVE = "bartender_make_right_mix_achievements";
  var API = "https://localhost/account/";
  var params = new URLSearchParams(root.location.search);
  var gid = params.get("gid") || "";
  var token = params.get("token") || "";
  var authenticated = Boolean(gid && token);
  var storage = null;
  try { storage = root.localStorage; } catch (_) {}
  function read(key) { try { return storage && storage.getItem(key); } catch (_) { return null; } }
  function write(key, value) { try { if (storage) storage.setItem(key, value); } catch (_) {} }
  function drop(key) { try { if (storage) storage.removeItem(key); } catch (_) {} }
  function parse(v) { if (typeof v !== "string") return v; return JSON.parse(v); }
  function number(value, max) {
    var n = Number(value);
    return Number.isSafeInteger(n) && n >= 0 && n <= (max || 999999999) ? n : 0;
  }
  function flags(value, length) {
    var out = [];
    for (var i = 0; i < length; i++) out.push(Array.isArray(value) ? value[i] === true : false);
    return out;
  }
  function defaults() {
    return { totalPlayGame: 0, totalPushButton: 0, totalOnOffSound: 0,
      bolTouchBotol: flags(null, 20), koleksiEnding: flags(null, 10) };
  }
  function validateProgress(p) {
    if (!p || typeof p !== "object" || Array.isArray(p)) throw new Error("Invalid progress");
    return { totalPlayGame: number(p.totalPlayGame), totalPushButton: number(p.totalPushButton),
      totalOnOffSound: number(p.totalOnOffSound), bolTouchBotol: flags(p.bolTouchBotol, 20),
      koleksiEnding: flags(p.koleksiEnding, 10) };
  }
  function validatedAchievements(a) { return flags(a, 12); }
  function storedProgress() {
    try { return validateProgress(parse(read(GAME_SAVE)) || defaults()); }
    catch (_) { return defaults(); }
  }
  function storedAchievements() {
    try { return validatedAchievements(parse(read(ACHIEVE_SAVE))); }
    catch (_) { return validatedAchievements(null); }
  }
  function mergeFlags(a, b, len) {
    var out = [];
    for (var i = 0; i < len; i++) out.push(Boolean(a[i] || b[i]));
    return out;
  }
  function merge(a, b) {
    return { totalPlayGame: Math.max(a.totalPlayGame, b.totalPlayGame),
      totalPushButton: Math.max(a.totalPushButton, b.totalPushButton),
      totalOnOffSound: Math.max(a.totalOnOffSound, b.totalOnOffSound),
      bolTouchBotol: mergeFlags(a.bolTouchBotol, b.bolTouchBotol, 20),
      koleksiEnding: mergeFlags(a.koleksiEnding, b.koleksiEnding, 10) };
  }
  function accountKey() {
    if (!authenticated) return "guest";
    var claim = "";
    try {
      var part = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
      var user = JSON.parse(root.atob(part));
      claim = String(user.userid || user.userId || user.sub || user.username || "");
    } catch (_) {}
    var id = gid + "|" + (claim || token), hash = 2166136261;
    for (var i = 0; i < id.length; i++) hash = Math.imul(hash ^ id.charCodeAt(i), 16777619);
    return "account:" + (hash >>> 0).toString(16);
  }
  var userKey = accountKey();
  function cacheKey(id) { return PREFIX + "player:" + id; }
  function saveCache(dirty) {
    write(cacheKey(userKey), JSON.stringify({
      progress: storedProgress(), achievements: storedAchievements(),
      bestScore: bestScore, lastScore: lastScore, lastEnding: lastEnding,
      resetNonce: resetNonce, dirty: Boolean(dirty)
    }));
  }
  function decodeCache(id) {
    try {
      var c = parse(read(cacheKey(id)));
      if (!c || !c.progress) return null;
      return { progress: validateProgress(c.progress), achievements: validatedAchievements(c.achievements),
        bestScore: number(c.bestScore), lastScore: number(c.lastScore),
        lastEnding: number(c.lastEnding, 10),
        resetNonce: typeof c.resetNonce === "string" ? c.resetNonce : "",
        dirty: Boolean(c.dirty) };
    } catch (_) { return null; }
  }
  var bestScore = 0, lastScore = 0, lastEnding = 0, resetNonce = "";
  var dirty = false, initialized = false, allowed = false, resetting = false;
  var activeSave = null, timer = null, retry = null, lastSignature = "";
  var resetButton = null, dialog = null;
  function apply(progress, achievements) {
    write(GAME_SAVE, JSON.stringify(validateProgress(progress)));
    write(ACHIEVE_SAVE, JSON.stringify(validatedAchievements(achievements)));
  }
  function snapshot() {
    return { progress: storedProgress(), achievements: storedAchievements(),
      bestScore: bestScore, lastScore: lastScore, lastEnding: lastEnding };
  }
  function signature() { return JSON.stringify(snapshot()); }
  function metadata(data, nonce) {
    var endings = data.progress.koleksiEnding.filter(Boolean).length;
    return { Game: "pha-che-cocktail", SchemaVersion: 2, ResetNonce: nonce || "",
      SavedAt: new Date().toISOString(), CurrentLevel: endings, CurrentStage: data.lastEnding,
      TotalScore: data.bestScore, BestScore: data.bestScore, LastScore: data.lastScore,
      Record: { Progress: data.progress, Achievements: data.achievements,
        LastEnding: data.lastEnding } };
  }
  function request(name, values) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", API + name, true);
      xhr.withCredentials = true;
      xhr.timeout = 6500;
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
      xhr.onload = function () {
        if (xhr.status < 200 || xhr.status >= 300) { reject(new Error("HTTP " + xhr.status)); return; }
        try {
          var response = JSON.parse(xhr.responseText);
          if (!response || (response.Status != null && Number(response.Status) !== 1) ||
              response.success === false || response.Success === false) throw new Error("Rejected by Arcade");
          resolve(response);
        } catch (err) { reject(err); }
      };
      xhr.onerror = xhr.ontimeout = function () { reject(new Error("Arcade connection unavailable")); };
      xhr.send(new URLSearchParams(values).toString());
    });
  }
  function stamp(a) { return a && (a.updatedAt || a.UpdatedAt || a.NgaySua || a.ngaySua) || ""; }
  function decodeResponse(body) {
    if (!Object.prototype.hasOwnProperty.call(body, "Data") &&
        !Object.prototype.hasOwnProperty.call(body, "data")) throw new Error("Missing history envelope");
    var value = Object.prototype.hasOwnProperty.call(body, "Data") ? body.Data : body.data;
    value = value == null ? null : parse(value);
    if (Array.isArray(value) && !value.length) value = null;
    if (value == null) return { data: null, updatedAt: stamp(body) };
    if (typeof value !== "object" || Array.isArray(value)) throw new Error("Invalid history");
    var raw = value.MetaData !== undefined ? value.MetaData :
      value.metadata !== undefined ? value.metadata : value.Metadata;
    if (raw === undefined) throw new Error("Missing Arcade metadata");
    raw = raw ? parse(raw) : null;
    if (!raw || !Object.keys(raw).length) return { data: null, updatedAt: stamp(value) || stamp(body) };
    if (raw.Game !== "pha-che-cocktail" || raw.SchemaVersion !== 2 ||
        typeof raw.ResetNonce !== "string" || !raw.Record || !raw.Record.Progress)
      throw new Error("Unsupported Arcade save schema");
    var record = raw.Record;
    return { data: { progress: validateProgress(record.Progress),
      achievements: validatedAchievements(record.Achievements),
      bestScore: number(raw.BestScore), lastScore: number(raw.LastScore),
      lastEnding: number(record.LastEnding, 10), resetNonce: raw.ResetNonce },
      updatedAt: stamp(value) || stamp(body) };
  }
  function getCloud() {
    return request("GetHistoryGame", { gameId: gid, token: token }).then(decodeResponse);
  }
  function restore(data) {
    apply(data.progress, data.achievements);
    bestScore = number(data.bestScore);
    lastScore = number(data.lastScore);
    lastEnding = number(data.lastEnding, 10);
    resetNonce = data.resetNonce || "";
  }
  function mergeData(local, remote) {
    return { progress: merge(local.progress, remote.progress),
      achievements: mergeFlags(local.achievements, remote.achievements, 12),
      bestScore: Math.max(local.bestScore, remote.bestScore),
      lastScore: local.lastScore, lastEnding: local.lastEnding, resetNonce: remote.resetNonce };
  }
  async function init() {
    var previous = read(ACTIVE);
    if (previous !== userKey) {
      // Preserve each account's local cache separately; never mix two Arcade players.
      if (previous !== null) {
        var old = decodeCache(previous) || {};
        write(cacheKey(previous), JSON.stringify({
          progress: storedProgress(), achievements: storedAchievements(),
          bestScore: number(old.bestScore), lastScore: number(old.lastScore),
          lastEnding: number(old.lastEnding, 10), resetNonce: old.resetNonce || "", dirty: Boolean(old.dirty)
        }));
      } else if (read(GAME_SAVE) || read(ACHIEVE_SAVE)) {
        write(cacheKey("guest"), JSON.stringify({ progress: storedProgress(),
          achievements: storedAchievements(), bestScore: 0, lastScore: 0,
          lastEnding: 0, resetNonce: "", dirty: false }));
      }
      drop(GAME_SAVE); drop(ACHIEVE_SAVE);
      write(ACTIVE, userKey);
    }
    var local = decodeCache(userKey);
    if (local) restore(local);
    else apply(defaults(), validatedAchievements(null));
    dirty = Boolean(local && local.dirty);
    if (authenticated) {
      try {
        var cloud = await getCloud();
        if (cloud.data) {
          // A cloud reset is authoritative; old browser tabs cannot resurrect old progress.
          if (dirty && cloud.data.resetNonce === resetNonce) restore(mergeData(snapshot(), cloud.data));
          else { restore(cloud.data); dirty = false; }
        } else if (local) dirty = true; // First authenticated upload after a successful GET.
        allowed = true;
      } catch (err) {
        console.warn("[Arcade Cocktail] Could not safely load cloud history; uploads paused:", err);
      }
    }
    initialized = true;
    lastSignature = signature();
    saveCache(dirty);
    if (dirty) schedule();
    retry = root.setInterval(function () {
      if (resetting) return;
      if (signature() !== lastSignature) markSaved();
      if (dirty) flush();
    }, 9000);
    root.addEventListener("pagehide", function () { if (!resetting) { saveCache(dirty); flush(); } });
    return true;
  }
  function schedule() {
    if (!initialized || !allowed || resetting || timer) return;
    timer = root.setTimeout(function () { timer = null; flush(); }, 1300);
  }
  function markSaved() {
    if (resetting || !initialized) return;
    dirty = true;
    lastSignature = signature();
    saveCache(true);
    schedule();
  }
  function recordResult(score, ending) {
    if (resetting) return;
    lastScore = number(score);
    bestScore = Math.max(bestScore, lastScore);
    lastEnding = number(ending, 10);
    markSaved();
  }
  async function flush() {
    if (!initialized || !allowed || !dirty || resetting) return false;
    if (activeSave) return activeSave;
    activeSave = (async function () {
      try {
        for (var attempt = 0; attempt < 2; attempt++) {
          var cloud = await getCloud();
          if (cloud.data && cloud.data.resetNonce !== resetNonce) {
            allowed = false; throw new Error("Cloud reset changed");
          }
          var data = snapshot();
          if (cloud.data) data = mergeData(data, cloud.data);
          var sent = signature();
          var meta = metadata(data, resetNonce);
          await request("SaveHistoryGame", { gameId: gid, token: token,
            metadata: JSON.stringify(meta), score: String(meta.TotalScore),
            expectedUpdatedAt: cloud.updatedAt });
          var verified = await getCloud();
          if (!verified.data || verified.data.resetNonce !== resetNonce)
            throw new Error("Cloud save not confirmed");
          // Only mark clean when the local state has not changed during the request.
          if (sent === signature()) { restore(data); dirty = false; lastSignature = signature(); }
          saveCache(dirty);
          return true;
        }
      } catch (err) { console.warn("[Arcade Cocktail] Save pending:", err); }
      return false;
    })();
    try { return await activeSave; }
    finally { activeSave = null; }
  }
  function clearAllLocal() {
    // Only this game's keys, never another game or Arcade authentication keys.
    var keys = [GAME_SAVE, ACHIEVE_SAVE, ACTIVE];
    try {
      for (var i = 0; storage && i < storage.length; i++) {
        var key = storage.key(i);
        if (key && key.indexOf(PREFIX) === 0) keys.push(key);
      }
    } catch (_) {}
    keys.forEach(drop);
  }
  async function reset() {
    if (!initialized || resetting) return false;
    resetting = true;
    if (timer) { root.clearTimeout(timer); timer = null; }
    try {
      if (activeSave) await activeSave;
      var nonce = "reset-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2);
      if (authenticated) {
        if (!allowed) throw new Error("Cloud history has not been verified");
        var cloud = await getCloud();
        if (cloud.data && cloud.data.resetNonce !== resetNonce) throw new Error("Progress reset by another session");
        var empty = { progress: defaults(), achievements: validatedAchievements(null),
          bestScore: 0, lastScore: 0, lastEnding: 0 };
        await request("SaveHistoryGame", { gameId: gid, token: token,
          metadata: JSON.stringify(metadata(empty, nonce)), score: "0",
          expectedUpdatedAt: cloud.updatedAt });
        var verified = await getCloud();
        if (!verified.data || verified.data.resetNonce !== nonce ||
            verified.data.bestScore !== 0 || verified.data.progress.totalPlayGame !== 0 ||
            verified.data.progress.koleksiEnding.some(Boolean) ||
            verified.data.achievements.some(Boolean)) throw new Error("Reset not verified by server");
      }
      clearAllLocal();
      root.location.reload();
      return true;
    } catch (err) {
      resetting = false;
      console.warn("[Arcade Cocktail] Reset cancelled; local data preserved:", err);
      return false;
    }
  }
  function confirmReset() {
    if (dialog) return;
    dialog = root.document.createElement("div");
    dialog.id = "gv-cocktail-confirm";
    dialog.style.cssText = "position:fixed;inset:0;z-index:2147483600;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.67);font-family:Arial,sans-serif;padding:16px;box-sizing:border-box";
    var panel = root.document.createElement("div");
    panel.setAttribute("role", "dialog"); panel.setAttribute("aria-modal", "true");
    panel.style.cssText = "background:#fff6dd;border:5px solid #a45213;border-radius:18px;box-shadow:0 8px 0 #582a0a;padding:28px 20px;text-align:center;width:390px;max-width:100%;box-sizing:border-box";
    var message = root.document.createElement("p");
    message.textContent = "Bạn chắc chắn muốn xóa toàn bộ dữ liệu trò chơi?";
    message.style.cssText = "font:bold 20px/1.45 Arial;color:#673813;margin:0 0 22px";
    var row = root.document.createElement("div");
    row.style.cssText = "display:flex;align-items:center;justify-content:center;gap:16px";
    function makeButton(text) {
      var b = root.document.createElement("button");
      b.type = "button"; b.textContent = text;
      b.style.cssText = "cursor:pointer;border:3px solid #9a490d;border-radius:12px;background:#ffb327;color:#fff;text-shadow:1px 2px #8a440c;font:bold 18px Arial;padding:11px 22px;min-width:100px";
      row.appendChild(b); return b;
    }
    var cancel = makeButton("Hủy"), ok = makeButton("OK");
    function close() { dialog.remove(); dialog = null; }
    cancel.onclick = close;
    ok.onclick = async function () {
      ok.disabled = cancel.disabled = true;
      message.textContent = "Đang đồng bộ dữ liệu...";
      if (!await reset()) {
        message.textContent = "Không thể đồng bộ xóa dữ liệu. Vui lòng kiểm tra kết nối rồi thử lại.";
        ok.disabled = cancel.disabled = false;
      }
    };
    panel.appendChild(message); panel.appendChild(row); dialog.appendChild(panel);
    root.document.body.appendChild(dialog);
    cancel.focus();
  }
  function showResetButton(visible) {
    if (!resetButton) {
      resetButton = root.document.createElement("button");
      resetButton.id = "gv-cocktail-reset";
      resetButton.type = "button";
      resetButton.title = "Xóa dữ liệu";
      resetButton.setAttribute("aria-label", "Xóa dữ liệu");
      resetButton.style.cssText = "position:fixed;left:12px;top:12px;z-index:10000;border:0;background:transparent;padding:0;cursor:pointer;display:none;touch-action:manipulation";
      var img = root.document.createElement("img");
      img.src = "xoa-data-gv.png";
      img.alt = "Xóa dữ liệu";
      img.style.cssText = "width:clamp(48px,7vw,76px);height:auto;display:block;filter:drop-shadow(0 2px 3px #333)";
      resetButton.appendChild(img);
      resetButton.onclick = confirmReset;
      root.document.body.appendChild(resetButton);
    }
    resetButton.style.display = visible ? "block" : "none";
  }
  root.ArcadeCocktail = { init: init, markSaved: markSaved, recordResult: recordResult,
    flush: flush, reset: reset, confirmReset: confirmReset, showResetButton: showResetButton,
    status: function () { return { initialized: initialized, authenticated: authenticated,
      cloudAllowed: allowed, dirty: dirty, resetting: resetting, bestScore: bestScore,
      user: userKey }; } };
})(window);
