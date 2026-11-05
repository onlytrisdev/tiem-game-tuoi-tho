(function (root) {
  "use strict";
  var STORAGE = root.localStorage;
  var PREFIX = "gv_truy_kich_";
  var BESTS = PREFIX + "bests:v1";
  var LEGACY = PREFIX + "legacy_best:v1";
  var RESET = PREFIX + "reset:v1";
  var DIRTY = PREFIX + "dirty:v1";
  var IDENTITY = PREFIX + "identity:v1";
  var FIELDS = ["s2score", "s2pLockSpeed", "s2mobileSpeed", "s2money", "s2armor", "s2gun", "s2med", BESTS, LEGACY];
  for (var a = 0; a < 12; a++) FIELDS.push("achievements2" + a);
  var api = "https://localhost/account/";
  var query = new URLSearchParams(root.location.search);
  var gid = query.get("gid") || "";
  var token = query.get("token") || "";
  var authenticated = !!(gid && token);
  var initialized = false, canSave = false, dirty = false, resetting = false;
  var scorePopupOpen = false, activeSave = null, lastSnapshot = "", expectedUpdatedAt = "", resetNonce = "";
  var userKey = "guest";
  // Non-cryptographic profile partition key, not an authentication mechanism.
  if (authenticated) {
    // Prefer stable account claims so refreshing an access token does not wipe
    // a player's offline save. The server still authenticates every request.
    var account = "";
    try {
      var payload = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
      var claims = JSON.parse(root.atob(payload));
      account = String(claims.userid || claims.userId || claims.sub || claims.username || "");
    } catch (_) {}
    var fingerprint = gid + ":" + (account || token), h = 2166136261;
    for (var j = 0; j < fingerprint.length; j++) h = Math.imul(h ^ fingerprint.charCodeAt(j), 16777619);
    userKey = "account:" + (h >>> 0).toString(16);
  }
  var timer = null;
  function number(v, max) {
    var n = Number(v);
    return Number.isSafeInteger(n) && n >= 0 && n <= (max || 999999999) ? n : 0;
  }
  function bests() {
    var v;
    try { v = JSON.parse(STORAGE.getItem(BESTS) || "null"); } catch (_) {}
    if (!Array.isArray(v)) v = [0, 0, 0];
    return [number(v[0]), number(v[1]), number(v[2])];
  }
  function total() { return bests().reduce(function (sum, n) { return sum + n; }, 0); }
  function snapshot() {
    var output = {};
    FIELDS.forEach(function (key) { var v = STORAGE.getItem(key); if (v !== null) output[key] = v; });
    return output;
  }
  function clearLocal() {
    FIELDS.forEach(function (key) { STORAGE.removeItem(key); });
    STORAGE.removeItem(RESET);
    STORAGE.removeItem(DIRTY);
  }
  function applyKeys(keys) {
    if (!keys || typeof keys !== "object" || Array.isArray(keys)) throw new Error("Invalid Arcade save");
    FIELDS.forEach(function (key) {
      if (!Object.prototype.hasOwnProperty.call(keys, key)) STORAGE.removeItem(key);
      else {
        var value = keys[key];
        if (typeof value !== "string" || value.length > 10000) throw new Error("Invalid save field");
        STORAGE.setItem(key, value);
      }
    });
    var v = bests();
    STORAGE.setItem(BESTS, JSON.stringify(v));
  }
  function mergeBests(keys) {
    var localBests = bests(), remoteBests = [0, 0, 0];
    try { remoteBests = JSON.parse(keys[BESTS] || "[0,0,0]"); } catch (_) {}
    if (!Array.isArray(remoteBests)) remoteBests = [0, 0, 0];
    var merged = localBests.map(function (n, i) { return Math.max(n, number(remoteBests[i])); });
    STORAGE.setItem(BESTS, JSON.stringify(merged));
  }
  function metadata(nonce) {
    var scores = bests();
    return {
      Game: "truy-kich", SchemaVersion: 2,
      ResetNonce: nonce || "", SavedAt: new Date().toISOString(),
      CurrentLevel: 0, CurrentStage: 0, TotalScore: total(), BestScore: total(),
      LegacyBestScore: number(STORAGE.getItem(LEGACY)),
      DifficultyBest: { Easy: scores[0], Normal: scores[1], Hard: scores[2] },
      Record: { localKeys: snapshot() }
    };
  }
  function request(name, params) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", api + name, true);
      xhr.withCredentials = true;
      xhr.timeout = 6500;
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
      xhr.onload = function () {
        if (xhr.status < 200 || xhr.status >= 300) { reject(new Error("Arcade HTTP " + xhr.status)); return; }
        try {
          var data = JSON.parse(xhr.responseText);
          if (!data || (data.Status != null && Number(data.Status) !== 1) || data.success === false) throw new Error("Arcade rejected");
          resolve(data);
        } catch (err) { reject(err); }
      };
      xhr.onerror = xhr.ontimeout = function () { reject(new Error("Arcade network")); };
      xhr.send(new URLSearchParams(params).toString());
    });
  }
  function parseHistory(body) {
    var data = body.Data != null ? body.Data : body.data;
    if (typeof data === "string") data = JSON.parse(data);
    if (Array.isArray(data) && data.length === 0) data = null;
    var raw = data && (data.MetaData != null ? data.MetaData : data.metadata != null ? data.metadata : data.Metadata);
    if (typeof raw === "string" && raw) raw = JSON.parse(raw);
    if (!raw || (typeof raw === "object" && !Object.keys(raw).length)) return { meta: null, stamp: "" };
    if (raw.Game !== "truy-kich" || raw.SchemaVersion !== 2 || !raw.Record || !raw.Record.localKeys ||
      typeof raw.ResetNonce !== "string") throw new Error("Incompatible Arcade save");
    return { meta: raw, stamp: String((data && (data.updatedAt || data.UpdatedAt)) || body.updatedAt || body.UpdatedAt || "") };
  }
  function fetchHistory() { return request("GetHistoryGame", { gameId: gid, token: token }).then(parseHistory); }
  async function init() {
    var previous = STORAGE.getItem(IDENTITY);
    if (previous !== userKey) {
      // Preserve pre-integration guest saves on their first visit. Authenticated
      // identities must never inherit data belonging to a different profile.
      if (previous !== null || authenticated) clearLocal();
      STORAGE.setItem(IDENTITY, userKey);
    }
    // The old game only had one global 's2score'. Keep it as historical
    // metadata rather than falsely crediting an unknown difficulty.
    if (!STORAGE.getItem(BESTS) && !STORAGE.getItem(LEGACY)) {
      var oldBest = number(STORAGE.getItem("s2score"));
      if (oldBest > 0) STORAGE.setItem(LEGACY, String(oldBest));
    }
    resetNonce = STORAGE.getItem(RESET) || "";
    var pendingLocal = STORAGE.getItem(DIRTY) === "1";
    if (authenticated) {
      try {
        var cloud = await fetchHistory();
        if (cloud.meta) {
          if (pendingLocal && cloud.meta.ResetNonce === resetNonce) {
            // Preserve offline progress after a failed or interrupted save.
            mergeBests(cloud.meta.Record.localKeys);
            dirty = true;
          } else {
            applyKeys(cloud.meta.Record.localKeys);
            STORAGE.setItem(DIRTY, "0");
          }
          resetNonce = cloud.meta.ResetNonce;
          STORAGE.setItem(RESET, resetNonce);
        } else if (pendingLocal) {
          dirty = true;
        }
        expectedUpdatedAt = cloud.stamp;
        canSave = true;
      } catch (err) {
        // Never overwrite server data if GetHistoryGame fails or uses an unknown schema.
        console.warn("[Arcade] Đọc dữ liệu thất bại, tạm dừng đồng bộ:", err);
      }
    }
    if (!STORAGE.getItem(BESTS)) STORAGE.setItem(BESTS, "[0,0,0]");
    initialized = true;
    lastSnapshot = JSON.stringify(snapshot());
    if (dirty) flush();
    timer = setInterval(function () {
      if (resetting || scorePopupOpen) return;
      var current = JSON.stringify(snapshot());
      if (current !== lastSnapshot) { dirty = true; STORAGE.setItem(DIRTY, "1"); lastSnapshot = current; }
      if (dirty) flush();
    }, 4000);
    return true;
  }
  function recordResult(mode, score) {
    if (resetting) return;
    var index = number(mode, 2), current = bests(), points = number(score);
    current[index] = Math.max(current[index], points);
    STORAGE.setItem(BESTS, JSON.stringify(current));
    dirty = true;
    STORAGE.setItem(DIRTY, "1");
    lastSnapshot = JSON.stringify(snapshot());
  }
  function queueSave() {
    if (!initialized || resetting) return;
    dirty = true;
    STORAGE.setItem(DIRTY, "1");
    lastSnapshot = JSON.stringify(snapshot());
  }
  function flush() {
    if (!initialized || !canSave || resetting || scorePopupOpen || !dirty) return Promise.resolve(false);
    if (activeSave) return activeSave;
    activeSave = (async function () {
      try {
        for (var attempt = 0; attempt < 2; attempt++) {
          var cloud = await fetchHistory();
          if (cloud.meta && cloud.meta.ResetNonce !== resetNonce) {
            canSave = false; throw new Error("Reset changed in another tab");
          }
          if (cloud.meta) mergeBests(cloud.meta.Record.localKeys);
          var revision = JSON.stringify(snapshot());
          var meta = metadata(resetNonce);
          var params = { gameId: gid, token: token, metadata: JSON.stringify(meta),
            score: String(meta.TotalScore), expectedUpdatedAt: cloud.stamp };
          var reply = await request("SaveHistoryGame", params);
          if (reply.Status === 1 || reply.success === true || reply.Success === true) {
            if (JSON.stringify(snapshot()) === revision) {
              dirty = false;
              STORAGE.setItem(DIRTY, "0");
            }
            lastSnapshot = JSON.stringify(snapshot());
            return true;
          }
        }
      } catch (err) { console.warn("[Arcade] Chưa thể đồng bộ:", err); }
      return false;
    })().finally(function () { activeSave = null; });
    return activeSave;
  }
  async function reset() {
    if (!initialized || resetting || scorePopupOpen) return false;
    resetting = true;
    try {
      if (activeSave) await activeSave;
      var nonce = "reset-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2);
      if (authenticated) {
        if (!canSave) throw new Error("Chưa xác minh được dữ liệu trên máy chủ");
        var cloud = await fetchHistory();
        if (cloud.meta && cloud.meta.ResetNonce !== resetNonce) throw new Error("Dữ liệu đã thay đổi ở nơi khác");
        // Make a fresh empty record, but do not erase local data before server confirms.
        var empty = { Game: "truy-kich", SchemaVersion: 2, ResetNonce: nonce,
          SavedAt: new Date().toISOString(), CurrentLevel: 0, CurrentStage: 0,
          TotalScore: 0, BestScore: 0, LegacyBestScore: 0,
          DifficultyBest: { Easy: 0, Normal: 0, Hard: 0 },
          Record: { localKeys: { [BESTS]: "[0,0,0]" } } };
        await request("SaveHistoryGame", { gameId: gid, token: token,
          metadata: JSON.stringify(empty), score: "0", expectedUpdatedAt: cloud.stamp });
        var verify = await fetchHistory();
        if (!verify.meta || verify.meta.ResetNonce !== nonce || verify.meta.TotalScore !== 0) {
          throw new Error("Máy chủ chưa xác nhận xóa");
        }
      }
      clearLocal();
      STORAGE.setItem(BESTS, "[0,0,0]");
      STORAGE.setItem(RESET, nonce);
      STORAGE.setItem(IDENTITY, userKey);
      root.location.reload();
      return true;
    } catch (err) {
      console.warn("[Arcade] Không xóa dữ liệu khi chưa đồng bộ được:", err);
      resetting = false;
      return false;
    }
  }
  function showScore() {
    if (scorePopupOpen || resetting) return;
    // Show the original Arcade popup promptly once the result animation has
    // stopped. Waiting for a slow cloud save could reopen it during the next round.
    if (typeof root.GV !== "function") { flush(); return; }
    scorePopupOpen = true;
    try {
      new root.GV().saveScore(total(), function () {
        scorePopupOpen = false;
        flush();
      });
    } catch (err) {
      scorePopupOpen = false;
      console.warn("[Arcade] saveScore:", err);
      flush();
    }
  }
  function confirmReset() {
    if (document.getElementById("gv-truy-kich-dialog")) return;
    var overlay = document.createElement("div");
    overlay.id = "gv-truy-kich-dialog";
    overlay.style.cssText = "position:fixed;inset:0;z-index:999999;background:rgba(0,0,0,.7);display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif";
    var panel = document.createElement("div");
    panel.style.cssText = "background:#333;color:#fff;border:2px solid #aaa;padding:24px;text-align:center;max-width:420px;width:82%;box-shadow:7px 7px #111";
    panel.setAttribute("role", "dialog"); panel.setAttribute("aria-modal", "true");
    var message = document.createElement("p");
    message.textContent = "Bạn chắc chắn muốn xóa toàn bộ dữ liệu trò chơi?";
    message.style.cssText = "font-size:18px;line-height:1.5;margin:0 0 20px";
    var actions = document.createElement("div");
    actions.style.cssText = "display:flex;gap:15px;justify-content:center";
    function button(label) {
      var b = document.createElement("button"); b.type = "button"; b.textContent = label;
      b.style.cssText = "font-size:16px;font-weight:bold;color:#fff;background:#454545;border:1px solid #bbb;padding:11px 30px;cursor:pointer";
      actions.appendChild(b); return b;
    }
    var cancel = button("Hủy"), ok = button("OK");
    cancel.onclick = function () { overlay.remove(); };
    ok.onclick = async function () {
      cancel.disabled = ok.disabled = true;
      var success = await reset();
      if (!success) {
        message.textContent = "Không thể đồng bộ xóa dữ liệu. Vui lòng kiểm tra kết nối rồi thử lại.";
        cancel.disabled = ok.disabled = false;
      }
    };
    panel.appendChild(message); panel.appendChild(actions); overlay.appendChild(panel);
    document.body.appendChild(overlay); cancel.focus();
  }
  root.ArcadeTruyKich = { init: init, recordResult: recordResult, queueSave: queueSave,
    flush: flush, reset: reset, confirmReset: confirmReset, showScore: showScore,
    totalScore: total, bestScores: bests };
})(window);
