(function (root) {
  "use strict";
  var GAME = "dong-goi-hop-qua", PREFIX = "gv:" + GAME + ":v1:";
  var params = new URLSearchParams(root.location.search);
  var gid = params.get("gid") || "", token = params.get("token") || "";
  var authenticated = Boolean(gid && token), storage;
  try { storage = root.localStorage; } catch (_) {}
  function read(key) { try { return storage && storage.getItem(key); } catch (_) { return null; } }
  function write(key, value) { try { if (storage) storage.setItem(key, value); } catch (_) {} }
  function erase(key) { try { if (storage) storage.removeItem(key); } catch (_) {} }
  function copy(value) { return JSON.parse(JSON.stringify(value)); }
  function parse(value) { return typeof value === "string" ? JSON.parse(value) : value; }
  function integer(value, max) {
    if (!Number.isSafeInteger(value) || value < 0 || value > max) throw new Error("Invalid save number");
    return value;
  }
  function defaults() {
    return { coin: 20, gem: 0, power: 0, signInfo: { days: 0, allow: true },
      lastOnLineTime: Date.now(), p_BigLevel: [1,0,0,0,0,0,0,0,0,0],
      p_SmallLevel: [[1],[1],[1],[1],[1],[1],[1],[1],[1],[1]] };
  }
  function player(value) {
    if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Invalid playerData");
    var out = {};
    ["coin", "gem", "power", "lastOnLineTime"].forEach(function (key) { out[key] = integer(value[key], Number.MAX_SAFE_INTEGER); });
    if (!value.signInfo || typeof value.signInfo.allow !== "boolean") throw new Error("Invalid signInfo");
    out.signInfo = { days: integer(value.signInfo.days, 7), allow: value.signInfo.allow };
    if (!Array.isArray(value.p_BigLevel) || value.p_BigLevel.length < 10 || value.p_BigLevel.length > 11 ||
        !Array.isArray(value.p_SmallLevel) || value.p_SmallLevel.length !== 10) throw new Error("Invalid levels");
    out.p_BigLevel = value.p_BigLevel.map(function (v) { return integer(v, 1); });
    out.p_SmallLevel = value.p_SmallLevel.map(function (row) {
      if (!Array.isArray(row) || !row.length || row.length > 11) throw new Error("Invalid stages");
      return Array.from(row, function (v) { return v === null || v === undefined ? 0 : integer(v, 2); });
    });
    ["prop_bomb", "prop_eliminate", "prop_powerful", "maxScore_model1", "isVip"].forEach(function (key) {
      if (value[key] !== undefined) out[key] = integer(value[key], Number.MAX_SAFE_INTEGER);
    });
    return out;
  }
  async function accountKey() {
    if (!authenticated) return "guest";
    var identity = token;
    try {
      var part = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
      var claims = JSON.parse(root.atob(part));
      identity = String(claims.userid || claims.userId || claims.sub || claims.username || token);
    } catch (_) {}
    // Claims select a local namespace only; the server authenticates the token.
    if (root.crypto && root.crypto.subtle) {
      var hash = await root.crypto.subtle.digest("SHA-256", new TextEncoder().encode(gid + "|" + identity));
      return Array.from(new Uint8Array(hash), function (b) { return b.toString(16).padStart(2, "0"); }).join("");
    }
    // HTTP test hosts lack SubtleCrypto. Never persist an opaque token as a key.
    var text = gid + "|" + identity, hashes = [2166136261, 2246822507, 3266489909, 668265263];
    return hashes.map(function (hash) {
      for (var i = 0; i < text.length; i++) hash = Math.imul(hash ^ text.charCodeAt(i), 16777619);
      return (hash >>> 0).toString(16).padStart(8, "0");
    }).join("");
  }
  var key, state, baseline = null, dirty = false, ready = false, blocked = false;
  var resetting = false, activeSave = null, timer = null, version = 0, roundEnded = false;
  var adBusy = false, scoreBusy = false, scoreQueue = [], resultPending = false, firstGame = true;
  function fresh(resetId) {
    return { SchemaVersion: 1, Game: GAME, CurrentLevel: 0, CurrentStage: 0,
      TotalScore: 0, BestScore: 0, SavedAt: new Date().toISOString(), ResetId: resetId || "",
      Progress: { playerData: defaults() } };
  }
  function validate(m) {
    if (!m || m.Game !== GAME || m.SchemaVersion !== 1 || typeof m.ResetId !== "string" ||
        !m.Progress || !Number.isFinite(Date.parse(m.SavedAt))) throw new Error("Unsupported save schema");
    var result = copy(m);
    result.Progress = { playerData: player(m.Progress.playerData) };
    integer(m.TotalScore, Number.MAX_SAFE_INTEGER); integer(m.BestScore, Number.MAX_SAFE_INTEGER);
    integer(m.CurrentLevel, 9); integer(m.CurrentStage, 9);
    if (m.TotalScore !== m.BestScore) throw new Error("Inconsistent score");
    return result;
  }
  function signature(m) { return m === null ? "null" : JSON.stringify(validate(m)); }
  function cache() {
    if (key) write(key, JSON.stringify({ state: state, baseline: baseline, dirty: dirty }));
  }
  function changed() {
    if (!ready || blocked || resetting) return;
    state.SavedAt = new Date().toISOString(); dirty = true; version++; cache();
    if (!timer) timer = root.setTimeout(function () { timer = null; flush(); }, 1500);
  }
  function request(name, values) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "https://localhost/account/" + name, true);
      xhr.withCredentials = true; xhr.timeout = 8000;
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
      xhr.onload = function () {
        try {
          if (xhr.status < 200 || xhr.status >= 300) { var error = new Error("HTTP " + xhr.status); error.status = xhr.status; throw error; }
          var body = JSON.parse(xhr.responseText);
          if (!body || body.Success === false || body.success === false ||
              (body.Status !== undefined && Number(body.Status) !== 1)) throw new Error("Arcade rejected request");
          resolve(body);
        } catch (err) { reject(err); }
      };
      xhr.onerror = xhr.ontimeout = function () { reject(new Error("Arcade connection unavailable")); };
      xhr.send(new URLSearchParams(values).toString());
    });
  }
  function stamp(v) { return v && (v.updatedAt || v.UpdatedAt || v.NgaySua || v.ngaySua) || ""; }
  async function getCloud() {
    var body = await request("GetHistoryGame", { gameId: gid, token: token });
    if (!("Data" in body) && !("data" in body)) throw new Error("Missing history envelope");
    var data = parse("Data" in body ? body.Data : body.data), updated = stamp(data) || stamp(body);
    if (data === null || (Array.isArray(data) && data.length === 0)) return { state: null, updated: updated };
    if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error("Invalid history envelope");
    var raw = data.MetaData !== undefined ? data.MetaData : data.metadata !== undefined ? data.metadata : data.Metadata;
    if (raw === undefined) throw new Error("Missing metadata");
    // A recognized history row without metadata is a pre-integration score-only record.
    if (raw === null || raw === "") return { state: null, updated: updated };
    return { state: validate(parse(raw)), updated: updated };
  }
  function saveCloud(m, updated) {
    return request("SaveHistoryGame", { gameId: gid, token: token, metadata: JSON.stringify(m),
      score: String(m.TotalScore), expectedUpdatedAt: updated });
  }
  function pause() {
    if (root.cc && root.cc.game && !root.cc.game.isPaused()) { root.cc.game.pause(); return true; }
    return false;
  }
  function resume(wasRunning) { if (wasRunning && !blocked && !resetting && root.cc) root.cc.game.resume(); }
  function conflict() {
    blocked = true; scoreQueue = []; pause();
    notice("Tiến trình đã thay đổi ở phiên khác. Tải lại để sử dụng dữ liệu mới nhất.", true);
  }
  function notice(message, reload) {
    var box = document.getElementById("gv-progress-notice");
    if (!box) {
      box = document.createElement("div"); box.id = "gv-progress-notice";
      box.style.cssText = "position:fixed;top:10px;left:10px;right:10px;z-index:10000;background:#fff4d6;color:#40204f;padding:12px;font:16px/1.4 Arial;border-radius:10px;text-align:center";
      document.body.appendChild(box);
    }
    box.textContent = message;
    if (reload) { var button = document.createElement("button"); button.textContent = "Tải lại"; button.onclick = function () { root.location.reload(); }; box.appendChild(button); }
  }
  async function init() {
    key = PREFIX + await accountKey(); state = fresh();
    try {
      var saved = parse(read(key));
      if (saved) { state = validate(saved.state); baseline = saved.baseline; dirty = saved.dirty === true; firstGame = false; }
      else if (!authenticated && read("shaonao_2022-03-19 20:21:44") && read("playerData")) {
        state.Progress.playerData = player(parse(read("playerData"))); dirty = true; firstGame = false;
      }
    } catch (_) {
      write(key + ":invalid", read(key) || read("playerData") || "");
      notice("Bản lưu cục bộ không hợp lệ. Bản gốc được giữ để kiểm tra.", false);
    }
    if (authenticated) {
      try {
        var cloud = await getCloud(), remote = signature(cloud.state);
        if (cloud.state && (!dirty || baseline !== remote)) {
          if (dirty) write(key + ":pending", JSON.stringify(state));
          state = cloud.state; dirty = false; firstGame = false;
        } else if (!cloud.state && baseline && baseline !== "null") {
          throw new Error("Existing history disappeared");
        }
        baseline = remote;
      } catch (_) {
        // Do not boot with defaults after a failed GET: retry must precede all game writes.
        notice("Chưa tải được dữ liệu Arcade. Kiểm tra kết nối rồi tải lại để bảo vệ tiến trình.", true);
        throw new Error("Cloud bootstrap blocked");
      }
    }
    ready = true; cache();
    root.setInterval(function () { if (dirty) flush(); }, 10000);
    return true;
  }
  function savePlayer(value) {
    if (!ready || blocked || resetting) return;
    var next = player(value);
    if (JSON.stringify(next) !== JSON.stringify(state.Progress.playerData)) { state.Progress.playerData = next; changed(); }
  }
  async function flush() {
    if (!ready || blocked || resetting || !authenticated || !dirty) return false;
    if (activeSave) return activeSave;
    activeSave = (async function () {
      try {
        var cloud = await getCloud();
        if (signature(cloud.state) !== baseline) { conflict(); return false; }
        var sent = copy(state), sentVersion = version;
        try { await saveCloud(sent, cloud.updated); }
        catch (err) {
          if (err.status === 409) { await getCloud(); conflict(); }
          // On an ambiguous timeout, GET verification below can acknowledge our exact write.
          else { var retry = await getCloud(); if (signature(retry.state) !== signature(sent)) throw err; }
        }
        if (blocked) return false;
        var verified = await getCloud();
        if (signature(verified.state) !== signature(sent)) { conflict(); return false; }
        baseline = signature(sent); dirty = version !== sentVersion; cache(); return true;
      } catch (_) { return false; }
    })();
    try { return await activeSave; } finally { activeSave = null; }
  }
  function startRound() { roundEnded = false; resultPending = false; }
  function endRound(won) {
    if (roundEnded || resetting || blocked) return false;
    roundEnded = true; resultPending = true;
    if (won) state.TotalScore++;
    state.BestScore = state.TotalScore;
    if (root.cc && root.cc.global) {
      state.CurrentLevel = Math.max(0, Math.min(9, root.cc.global.nowChoseBigIndex));
      state.CurrentStage = Math.max(0, Math.min(9, root.cc.global.nowChoseSmallIndex));
      // Commit the native unlock at the real win, before delayed result UI is constructed.
      if (won) {
        var row = root.cc.playerData.p_SmallLevel[state.CurrentLevel];
        row[state.CurrentStage] = 2;
        if (!row[state.CurrentStage + 1]) row[state.CurrentStage + 1] = 1;
      }
      state.Progress.playerData = player(root.cc.playerData);
    }
    changed(); return true;
  }
  function pumpScore() {
    if (scoreBusy || adBusy || resetting || blocked || !scoreQueue.length || typeof root.GV !== "function") return;
    scoreBusy = true; var running = pause(), done = false;
    function complete() { if (done) return; done = true; scoreBusy = false; resume(running); pumpScore(); }
    try { new root.GV().saveScore(scoreQueue.shift(), complete); } catch (_) { complete(); }
  }
  function showResult() {
    if (!resultPending) return;
    resultPending = false; scoreQueue.push(state.TotalScore); pumpScore();
  }
  function reward(success, failure) {
    if (adBusy || scoreBusy || resetting || blocked || typeof success !== "function") return;
    if (typeof root.GVAdBreak !== "function") { if (failure) failure(); return; }
    adBusy = true; var running = pause(), done = false;
    try {
      root.GVAdBreak(function () {
        if (done) return; done = true;
        try { if (!blocked && !resetting) { success(); if (root.cc && root.cc.playerData) savePlayer(root.cc.playerData); } }
        finally { adBusy = false; resume(running); pumpScore(); }
      });
    } catch (_) { if (!done) { done = true; adBusy = false; resume(running); if (failure) failure(); } }
  }
  async function reset() {
    if (!ready || resetting || blocked || adBusy || scoreBusy) return false;
    resetting = true; var running = pause();
    if (timer) { root.clearTimeout(timer); timer = null; }
    try {
      if (activeSave) await activeSave;
      if (blocked) throw new Error("Conflict");
      var empty = fresh("reset-" + Date.now() + "-" + Math.random().toString(36).slice(2));
      if (authenticated) {
        var cloud = await getCloud();
        if (signature(cloud.state) !== baseline) { conflict(); throw new Error("Conflict"); }
        await saveCloud(empty, cloud.updated);
        var verified = await getCloud();
        if (signature(verified.state) !== signature(empty)) throw new Error("Reset not verified");
      }
      // Remove obsolete local saves only after the cloud reset has been verified.
      erase("playerData"); erase("shaonao_2022-03-19 20:21:44");
      erase(key + ":pending"); erase(key + ":invalid");
      state = empty; baseline = authenticated ? signature(empty) : null; dirty = false; cache();
      root.location.reload(); return true;
    } catch (_) { resetting = false; resume(running); return false; }
  }
  var resetDialog = null;
  function confirmReset() {
    if (adBusy || scoreBusy || resetting || blocked || !ready || resetDialog) return;
    var wasRunning = pause();
    var shade = document.createElement("div");
    shade.id = "gv-reset-dialog";
    shade.setAttribute("role", "dialog");
    shade.setAttribute("aria-modal", "true");
    shade.setAttribute("aria-label", "Xóa dữ liệu");
    shade.style.cssText = "position:fixed;inset:0;z-index:10001;display:flex;align-items:center;justify-content:center;background:rgba(9,11,26,.75);padding:16px;box-sizing:border-box;font:16px/1.5 Arial,sans-serif";
    var panel = document.createElement("div");
    panel.style.cssText = "width:100%;max-width:360px;box-sizing:border-box;background:#fff5df;color:#40204f;border:3px solid #a97137;border-radius:18px;padding:24px 18px;box-shadow:0 10px 40px #0008;text-align:center";
    var message = document.createElement("p");
    message.textContent = "Bạn chắc chắn muốn xóa toàn bộ dữ liệu trò chơi?";
    message.style.cssText = "margin:0 0 20px;font-size:18px;font-weight:bold";
    var error = document.createElement("p");
    error.style.cssText = "margin:0 0 14px;color:#9a2323;font-size:14px";
    error.setAttribute("role", "alert");
    var actions = document.createElement("div");
    actions.style.cssText = "display:flex;gap:12px;justify-content:center";
    function makeButton(label, background) {
      var button = document.createElement("button");
      button.type = "button";
      button.textContent = label;
      button.style.cssText = "flex:1;max-width:130px;padding:10px;border:0;border-radius:10px;background:" + background + ";color:white;font:bold 17px Arial;cursor:pointer";
      return button;
    }
    var cancel = makeButton("Hủy", "#77717d");
    var okay = makeButton("Ok", "#cf842b");
    var previousFocus = document.activeElement;
    function close() {
      if (resetting) return;
      document.removeEventListener("keydown", onKeydown);
      if (shade.parentNode) shade.parentNode.removeChild(shade);
      resetDialog = null;
      resume(wasRunning);
      if (previousFocus && previousFocus.focus) previousFocus.focus();
    }
    function onKeydown(event) {
      if (event.key === "Escape" && !resetting) { event.preventDefault(); close(); }
    }
    cancel.onclick = close;
    okay.onclick = function () {
      if (resetting) return;
      cancel.disabled = true;
      okay.disabled = true;
      okay.textContent = "Đang xóa...";
      error.textContent = "";
      reset().then(function (success) {
        if (success) return; // reset() reloads the game after cloud verification.
        error.textContent = blocked
          ? "Tiến trình đã thay đổi ở phiên khác. Hãy tải lại."
          : "Chưa thể xác nhận xóa dữ liệu Arcade. Dữ liệu cũ được giữ nguyên.";
        cancel.disabled = false;
        okay.disabled = blocked;
        okay.textContent = "Ok";
      });
    };
    actions.appendChild(cancel); actions.appendChild(okay);
    panel.appendChild(message); panel.appendChild(error); panel.appendChild(actions);
    shade.appendChild(panel);
    resetDialog = shade;
    document.body.appendChild(shade);
    document.addEventListener("keydown", onKeydown);
    cancel.focus();
  }
  root.addEventListener("storage", function (event) {
    if (ready && event.key === key && event.newValue && !resetting) {
      try { if (signature(parse(event.newValue).state) !== signature(state)) conflict(); } catch (_) { conflict(); }
    }
  });
  root.addEventListener("pagehide", function () { if (!blocked && !resetting) { cache(); flush(); } });
  document.addEventListener("visibilitychange", function () { if (document.hidden) flush(); });
  function setResetButtonVisible(visible) {
    var button = document.getElementById("btn-reset-data");
    if (!button) return;
    var display = visible ? "block" : "none";
    if (button.style.display !== display) button.style.display = display;
  }
  function syncResetButton() {
    var scene = root.cc && root.cc.director && root.cc.director.getScene && root.cc.director.getScene();
    var onHome = Boolean(scene && scene.name === "GameHome");
    if (onHome) {
      // These Cocos prefabs overlay the home menu without changing its scene.
      var dialogs = ["signWindow", "shopWindow", "getCoinWindow", "chooseLevel_big", "chooseLevel_small"];
      onHome = !dialogs.some(function (name) {
        var node = scene.getChildByName(name);
        return node && node.active;
      });
    }
    setResetButtonVisible(onHome);
  }
  root.ArcadeTool = { setResetButtonVisible: setResetButtonVisible, syncResetButton: syncResetButton,
    init: init, isFirstGame: function () { return firstGame; }, getPlayer: function () { return copy(state.Progress.playerData); },
    savePlayer: savePlayer, startRound: startRound, endRound: endRound, showResult: showResult,
    reward: reward, confirmReset: confirmReset, flush: flush };
})(window);
