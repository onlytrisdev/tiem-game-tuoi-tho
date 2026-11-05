/**
 * Arcade tool — Gumball Tìm Bạn (Cocos Creator 2.x)
 * Cloud save/load (cicn-gumball-puzzle), Xóa dữ liệu (mainmenu),
 * Gửi điểm (gameplay + popup khi thắng), logo Arcade.
 *
 * Điểm: stars * 10000 + max(0, 3600 - seconds)
 * stars theo timeRankConfig native: ≤25m→3, ≤30m→2, ≤35m→1, else 0
 */
(function (global) {
	"use strict";

	var MODULE_VERSION = "gumball-tim-ban-tool-v1";
	var GAME_SLUG = "gumball-tim-ban";
	var STORAGE_KEY = "cicn-gumball-puzzle";
	var BEST_SCORE_KEY = "cicn-gumball-puzzle-gv-best";
	var SAVE_URL = "https://localhost/account/SaveHistoryGame";
	var LOAD_URL = "https://localhost/account/GetHistoryGame";
	var LOGO_URL = "https://localhost/themes/default/images/logo-2022.svg";
	var DELETE_IMG = "xoa-data-gv.png";
	var SEND_IMG = "gv-gui-diem.png";
	var SaveDebounceMs = 4000;
	var BootTimeoutMs = 8000;
	var TIME_RANK = { 3: 25, 2: 30, 1: 35 };

	var qsKill = false;
	try {
		qsKill = new URLSearchParams(global.location.search).get("gvsave") === "0";
	} catch (e0) {
		qsKill = false;
	}

	var state = {
		loadStarted: false,
		lastSaveAt: 0,
		pendingSaveTimer: 0,
		pendingSaveReason: "",
		dirty: false,
		resetting: false,
		seeding: false,
		lsPatched: false,
		uiReady: false,
		sceneHooksReady: false,
		currentScene: "",
		winScoreSubmitted: false,
		lastComputedScore: 0,
		pendingWinScore: 0
	};

	var readyResolve;
	var ready = new Promise(function (resolve) {
		readyResolve = resolve;
	});

	function finishReady(result) {
		if (readyResolve) {
			readyResolve(result);
			readyResolve = null;
		}
		return result;
	}

	function logInfo(message, detail) {
		if (global.console && console.info) {
			if (detail !== undefined) console.info("[ArcadeTool] " + message, detail);
			else console.info("[ArcadeTool] " + message);
		}
	}

	function logWarn(message, detail) {
		if (global.console && console.warn) {
			if (detail !== undefined) console.warn("[ArcadeTool] " + message, detail);
			else console.warn("[ArcadeTool] " + message);
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
		var local = readQs(global.location.search);
		var gid = local.get("gid") || "";
		var token = local.get("token") || "";

		if ((!gid || !token) && global.parent !== global) {
			try {
				var parentQs = readQs(global.parent.location.search);
				if (!gid) gid = parentQs.get("gid") || "";
				if (!token) token = parentQs.get("token") || "";
			} catch (e) { /* cross-origin */ }
		}

		if ((!gid || !token) && global.document && global.document.referrer) {
			try {
				var ref = new URL(global.document.referrer);
				var refQs = readQs(ref.search);
				if (!gid) gid = refQs.get("gid") || "";
				if (!token) token = refQs.get("token") || "";
			} catch (e2) { /* ignore */ }
		}

		return { gid: gid, token: token || "" };
	}

	function isOfflineCloudHost() {
		try {
			var host = String((global.location && global.location.hostname) || "").toLowerCase();
			if (!host || host === "localhost" || host === "127.0.0.1") return true;
			if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) return true;
			if (host === "localhost" || host === "www.localhost" || host === "e.localhost") return false;
			if (host.indexOf(".localhost") >= 0) return false;
			return false;
		} catch (e) {
			return true;
		}
	}

	function cloudEnabled() {
		return !qsKill && !isOfflineCloudHost() && !!getCredentials().gid;
	}

	function lsGet(key) {
		try {
			return global.localStorage.getItem(key);
		} catch (e) {
			return null;
		}
	}

	function lsSet(key, value) {
		try {
			global.localStorage.setItem(key, value);
			return true;
		} catch (e) {
			return false;
		}
	}

	function lsRemove(key) {
		try {
			global.localStorage.removeItem(key);
		} catch (e) { /* ignore */ }
	}

	function safeParse(raw, fallback) {
		if (raw == null || raw === "") return fallback;
		try {
			return JSON.parse(raw);
		} catch (e) {
			return fallback;
		}
	}

	/* ----------------------------- score formula ----------------------------- */

	function getTimeTakenMs() {
		var raw = lsGet(STORAGE_KEY);
		var data = safeParse(raw, null);
		if (data && data.game && data.game.state && typeof data.game.state.timeTaken === "number") {
			return data.game.state.timeTaken;
		}
		try {
			if (global.cc && cc.director) {
				var scene = cc.director.getScene();
				if (scene) {
					var comps = scene.getComponentsInChildren(cc.Component);
					for (var i = 0; i < comps.length; i++) {
						var c = comps[i];
						if (c && typeof c.getTimeTaken === "function") {
							var t = c.getTimeTaken();
							if (typeof t === "number" && t >= 0) return t;
						}
					}
				}
			}
		} catch (e) { /* ignore */ }
		return 0;
	}

	function computeStars(timeTakenMs) {
		var t = Math.ceil((timeTakenMs || 0) / 10);
		var minutes = t / 100 / 60;
		if (minutes <= TIME_RANK[3]) return 3;
		if (minutes <= TIME_RANK[2]) return 2;
		if (minutes <= TIME_RANK[1]) return 1;
		return 0;
	}

	function computeScore(timeTakenMs) {
		var stars = computeStars(timeTakenMs);
		var seconds = Math.ceil((timeTakenMs || 0) / 1000);
		return stars * 10000 + Math.max(0, 3600 - seconds);
	}

	function getBestScore() {
		var n = parseInt(lsGet(BEST_SCORE_KEY), 10);
		return isFinite(n) && n > 0 ? n : 0;
	}

	function rememberBestScore(score) {
		var n = parseInt(score, 10) || 0;
		var best = getBestScore();
		if (n > best) {
			lsSet(BEST_SCORE_KEY, String(n));
			return n;
		}
		return best;
	}

	function getScoreToSend() {
		var timeMs = getTimeTakenMs();
		var live = computeScore(timeMs);
		var best = getBestScore();
		var score = Math.max(live, best);
		state.lastComputedScore = score;
		return score;
	}

	function getRoomName() {
		var raw = lsGet(STORAGE_KEY);
		var data = safeParse(raw, null);
		if (data && data.game) {
			if (data.game.state && data.game.state.player && data.game.state.player.room) {
				return String(data.game.state.player.room);
			}
			if (data.game.room) return String(data.game.room);
		}
		return state.currentScene || "";
	}

	/* ----------------------------- cloud I/O ----------------------------- */

	function buildMetadata() {
		var timeMs = getTimeTakenMs();
		var score = computeScore(timeMs);
		var best = rememberBestScore(score);
		var room = getRoomName();
		return {
			schemaVersion: 1,
			game: GAME_SLUG,
			gameSlug: GAME_SLUG,
			CurrentLevel: room || "mainmenu",
			CurrentStage: 0,
			TotalScore: best,
			stars: computeStars(timeMs),
			timeTaken: timeMs,
			Storage: {
				key: STORAGE_KEY,
				data: lsGet(STORAGE_KEY) || "",
				bestScore: best
			},
			cleared: false,
			savedAt: new Date().toISOString()
		};
	}

	function buildClearedMetadata() {
		return {
			schemaVersion: 1,
			game: GAME_SLUG,
			gameSlug: GAME_SLUG,
			cleared: true,
			CurrentLevel: 0,
			CurrentStage: 0,
			TotalScore: 0,
			stars: 0,
			timeTaken: 0,
			Storage: { key: STORAGE_KEY, data: "", bestScore: 0 },
			savedAt: new Date().toISOString()
		};
	}

	function postForm(url, fields) {
		return fetch(url, {
			method: "POST",
			credentials: "include",
			headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
			body: new URLSearchParams(fields)
		}).then(function (res) {
			return res.json().catch(function () { return null; });
		});
	}

	function parseMeta(res) {
		if (!res || res.Status !== 1 || !res.Data) return null;
		var raw = res.Data.MetaData || res.Data.metaData || res.Data.metadata;
		if (!raw) return null;
		try {
			return typeof raw === "string" ? JSON.parse(raw) : raw;
		} catch (e) {
			return null;
		}
	}

	function applyCloudMetadata(metadata) {
		if (!metadata || typeof metadata !== "object") return false;
		if (metadata.cleared) {
			state.seeding = true;
			lsRemove(STORAGE_KEY);
			lsRemove(BEST_SCORE_KEY);
			state.seeding = false;
			return false;
		}
		var blob = null;
		if (metadata.Storage && metadata.Storage.data) blob = String(metadata.Storage.data);
		else if (typeof metadata.storageBlob === "string") blob = metadata.storageBlob;
		else if (typeof metadata.localSave === "string") blob = metadata.localSave;

		state.seeding = true;
		if (blob) lsSet(STORAGE_KEY, blob);
		var best = 0;
		if (metadata.Storage && metadata.Storage.bestScore != null) {
			best = parseInt(metadata.Storage.bestScore, 10) || 0;
		}
		if (!best && metadata.TotalScore != null) best = parseInt(metadata.TotalScore, 10) || 0;
		if (best > 0) lsSet(BEST_SCORE_KEY, String(best));
		state.seeding = false;
		return !!blob;
	}

	function sendSave(reason) {
		if (state.resetting) return Promise.resolve(false);
		if (!cloudEnabled()) {
			logInfo("Bo qua save (" + reason + "): cloud tat / thieu gid.");
			return Promise.resolve(false);
		}
		var cred = getCredentials();
		state.lastSaveAt = Date.now();
		state.dirty = false;
		var metadata = buildMetadata();
		return postForm(SAVE_URL, {
			gameId: cred.gid,
			token: cred.token,
			metadata: JSON.stringify(metadata),
			metaData: JSON.stringify(metadata),
			CurrentLevel: metadata.CurrentLevel,
			CurrentStage: metadata.CurrentStage,
			TotalScore: metadata.TotalScore
		}).then(function (res) {
			var ok = !!(res && res.Status === 1);
			if (ok) logInfo("Save OK (" + reason + ") TotalScore=" + metadata.TotalScore);
			else logWarn("Save failed (" + reason + ")", res);
			return ok;
		}).catch(function (error) {
			logWarn("Save loi (" + reason + "): " + (error && error.message ? error.message : error));
			return false;
		});
	}

	function requestSave(reason) {
		if (state.seeding || state.resetting) return;
		state.dirty = true;
		state.pendingSaveReason = reason || "dirty";
		var elapsed = Date.now() - state.lastSaveAt;
		if (elapsed >= SaveDebounceMs) {
			sendSave(state.pendingSaveReason);
			return;
		}
		if (state.pendingSaveTimer) return;
		state.pendingSaveTimer = global.setTimeout(function () {
			state.pendingSaveTimer = 0;
			sendSave(state.pendingSaveReason);
		}, Math.max(250, SaveDebounceMs - elapsed));
	}

	function flushSave() {
		if (state.pendingSaveTimer) {
			global.clearTimeout(state.pendingSaveTimer);
			state.pendingSaveTimer = 0;
		}
		if (state.dirty || Date.now() - state.lastSaveAt > 1000) {
			return sendSave("flush");
		}
		return Promise.resolve(false);
	}

	function patchLocalStorage() {
		if (state.lsPatched) return;
		try {
			var proto = Storage.prototype;
			var origSet = proto.setItem;
			var origRemove = proto.removeItem;
			proto.setItem = function (key, value) {
				var result = origSet.apply(this, arguments);
				if (!state.seeding && !state.resetting && String(key) === STORAGE_KEY) {
					requestSave("ls-set");
				}
				return result;
			};
			proto.removeItem = function (key) {
				var result = origRemove.apply(this, arguments);
				if (!state.seeding && !state.resetting && String(key) === STORAGE_KEY) {
					requestSave("ls-remove");
				}
				return result;
			};
			state.lsPatched = true;
			logInfo("Da patch localStorage cho " + STORAGE_KEY);
		} catch (e) {
			logWarn("Patch localStorage that bai", e);
		}
	}

	function loadProgress() {
		if (state.loadStarted) return ready;
		state.loadStarted = true;

		var run = function () {
			if (qsKill) {
				logInfo("gvsave=0 — bo qua cloud load.");
				return Promise.resolve(false);
			}
			if (!getCredentials().gid) {
				logInfo("Bo qua load: khong co gid.");
				return Promise.resolve(false);
			}
			if (isOfflineCloudHost()) {
				logInfo("Bo qua load: host offline.");
				return Promise.resolve(false);
			}

			var cred = getCredentials();
			return postForm(LOAD_URL, {
				gameId: cred.gid,
				token: cred.token
			}).then(function (res) {
				logInfo("GetHistoryGame Status=" + (res && res.Status));
				var metadata = parseMeta(res);
				if (!metadata) {
					logInfo("Load: chua co save cloud — choi local.");
					return false;
				}
				var seeded = applyCloudMetadata(metadata);
				if (seeded) logInfo("Load OK: da seed " + STORAGE_KEY);
				else logInfo("Load: cloud cleared hoac thieu blob.");
				return seeded;
			}).catch(function (error) {
				logWarn("Load loi (fail-open): " + (error && error.message ? error.message : error));
				return false;
			});
		};

		var timed = Promise.race([
			run(),
			new Promise(function (resolve) {
				global.setTimeout(function () {
					logWarn("Load timeout " + BootTimeoutMs + "ms — fail-open.");
					resolve(false);
				}, BootTimeoutMs);
			})
		]);

		return timed.then(function (result) {
			return finishReady(result);
		});
	}

	/* ----------------------------- score submit ----------------------------- */

	function submitScore(reason, forcedScore) {
		var n = forcedScore != null ? (parseInt(forcedScore, 10) || 0) : getScoreToSend();
		if (!isFinite(n) || n < 0) n = 0;
		rememberBestScore(n);
		state.lastComputedScore = n;
		requestSave(reason || "submit-score");
		logInfo("submitScore (" + reason + ") = " + n);
		try {
			if (typeof GV === "function") {
				new GV().saveScore(n, function () {
					flushSave();
				});
			} else {
				logWarn("GV chua san sang — bo qua saveScore.");
			}
		} catch (e) {
			logWarn("saveScore loi", e);
		}
		return n;
	}

	/* ----------------------------- scene / UI visibility ----------------------------- */

	function isBootScene(name) {
		return !name || name === "boot";
	}

	function isMainMenuScene(name) {
		return name === "mainmenu";
	}

	function isGameplayScene(name) {
		if (!name) return false;
		if (name === "gameplay" || name === "classroom" || name === "artroom" ||
			name === "nursing" || name === "rooftop" || name === "gamecomplete") return true;
		if (name.indexOf("hw") === 0) return true;
		if (name.indexOf("library") === 0) return true;
		return false;
	}

	function isWinScene(name) {
		return name === "gamecomplete";
	}

	function getCanvasHost() {
		return global.document.getElementById("Cocos2dGameContainer") ||
			global.document.getElementById("GameCanvas") ||
			global.document.body;
	}

	function ensureUI() {
		if (state.uiReady) return;
		var doc = global.document;
		if (!doc || !doc.head || !doc.body) return;

		var style = doc.createElement("style");
		style.id = "gv-tool-style";
		style.textContent =
			"#gv-action-wrap,#gv-delete-wrap,#gv-logo-wrap{position:fixed;z-index:9999;pointer-events:none;}" +
			"#gv-action-wrap,#gv-delete-wrap{display:flex;flex-direction:row;gap:10px;}" +
			"#gv-delete-wrap{transform-origin:bottom right;}" +
			"#gv-action-wrap{transform-origin:bottom right;}" +
			"#gv-delete-btn,#gv-send-score-btn{" +
			"pointer-events:auto;border:0;padding:0;background:transparent;cursor:pointer;" +
			"-webkit-tap-highlight-color:transparent;touch-action:manipulation;" +
			"user-select:none;-webkit-user-select:none;" +
			"transform:scale(0.8);opacity:0.6;" +
			"transition:transform .2s ease,opacity .2s ease;}" +
			"#gv-delete-btn:hover,#gv-delete-btn:focus-visible," +
			"#gv-send-score-btn:hover,#gv-send-score-btn:focus-visible{" +
			"transform:scale(1);opacity:1;}" +
			"#gv-delete-btn img,#gv-send-score-btn img{" +
			"display:block;width:56px;height:56px;pointer-events:none;-webkit-user-drag:none;}" +
			"#gv-logo-wrap{pointer-events:none;overflow:hidden;}" +
			"#gv-logo-wrap img{" +
			"display:block;width:100%;height:auto;pointer-events:none;" +
			"background:transparent;border:0;}" +
			"#gv-logo-wrap.gv-logo-visible{" +
			"opacity:1;animation:gv-logo-shine 5s linear;}" +
			"#gv-logo-wrap.gv-logo-hidden{opacity:0;}" +
			"@keyframes gv-logo-shine{" +
			"0%{opacity:1;-webkit-mask-image:linear-gradient(100deg,transparent 20%,#000 40%,#000 60%,transparent 80%);" +
			"mask-image:linear-gradient(100deg,transparent 20%,#000 40%,#000 60%,transparent 80%);" +
			"-webkit-mask-size:250% 100%;mask-size:250% 100%;-webkit-mask-position:120% 0;mask-position:120% 0;}" +
			"40%{-webkit-mask-position:-20% 0;mask-position:-20% 0;}" +
			"100%{opacity:1;-webkit-mask-image:none;mask-image:none;}}" +
			"#gv-reset-modal{position:fixed;inset:0;z-index:100000;display:none;align-items:center;justify-content:center;" +
			"background:rgba(0,0,0,.55);pointer-events:auto;}" +
			"#gv-reset-modal .gv-reset-box{background:#1a1a2e;color:#fff;border-radius:12px;padding:20px 22px;max-width:320px;" +
			"width:86%;box-shadow:0 8px 24px rgba(0,0,0,.4);font-family:Arial,Helvetica,sans-serif;text-align:left;}" +
			"#gv-reset-modal h3{margin:0 0 10px;font-size:18px;}" +
			"#gv-reset-modal p{margin:0 0 16px;font-size:14px;line-height:1.4;}" +
			"#gv-reset-modal .gv-reset-actions{display:flex;gap:10px;justify-content:flex-end;}" +
			"#gv-reset-modal button{border:0;border-radius:8px;padding:10px 16px;font-size:14px;font-weight:700;cursor:pointer;}" +
			"#gv-reset-confirm{background:#d32f2f;color:#fff;}" +
			"#gv-reset-cancel{background:#2e7d32;color:#fff;}";
		doc.head.appendChild(style);

		var deleteWrap = doc.createElement("div");
		deleteWrap.id = "gv-delete-wrap";
		deleteWrap.hidden = true;
		deleteWrap.innerHTML =
			'<button type="button" id="gv-delete-btn" title="Xóa dữ liệu" aria-label="Xóa dữ liệu">' +
			'<img src="' + DELETE_IMG + '" alt="" width="56" height="56" draggable="false">' +
			"</button>";
		doc.body.appendChild(deleteWrap);
		deleteWrap.querySelector("#gv-delete-btn").addEventListener("click", onDeleteClick);

		var actionWrap = doc.createElement("div");
		actionWrap.id = "gv-action-wrap";
		actionWrap.hidden = true;
		actionWrap.innerHTML =
			'<button type="button" id="gv-send-score-btn" title="Gửi điểm" aria-label="Gửi điểm">' +
			'<img src="' + SEND_IMG + '" alt="" width="56" height="56" draggable="false">' +
			"</button>";
		doc.body.appendChild(actionWrap);
		actionWrap.querySelector("#gv-send-score-btn").addEventListener("click", function (ev) {
			if (ev) {
				ev.preventDefault();
				ev.stopPropagation();
			}
			submitScore("manual-send");
		});

		var logoWrap = doc.createElement("div");
		logoWrap.id = "gv-logo-wrap";
		logoWrap.hidden = true;
		logoWrap.className = "gv-logo-hidden";
		logoWrap.innerHTML = '<img src="' + LOGO_URL + '" alt="Arcade" draggable="false">';
		doc.body.appendChild(logoWrap);
		startLogoCycle();

		var modal = doc.createElement("div");
		modal.id = "gv-reset-modal";
		modal.setAttribute("role", "dialog");
		modal.setAttribute("aria-modal", "true");
		modal.innerHTML =
			'<div class="gv-reset-box">' +
			"<h3>Xóa dữ liệu</h3>" +
			"<p>Bạn chắc chắn muốn xóa tất cả dữ liệu game và chơi lại từ đầu?</p>" +
			'<div class="gv-reset-actions">' +
			'<button type="button" id="gv-reset-cancel">Hủy</button>' +
			'<button type="button" id="gv-reset-confirm">Xác nhận</button>' +
			"</div></div>";
		doc.body.appendChild(modal);
		modal.querySelector("#gv-reset-cancel").addEventListener("click", hideResetModal);
		modal.querySelector("#gv-reset-confirm").addEventListener("click", function () {
			hideResetModal();
			wipeAndReload();
		});
		modal.addEventListener("click", function (ev) {
			if (ev.target === modal) hideResetModal();
		});

		state.uiReady = true;
		global.addEventListener("resize", layoutUI);
		global.addEventListener("orientationchange", function () {
			global.setTimeout(layoutUI, 200);
		});
		layoutUI();
	}

	function startLogoCycle() {
		var wrap = global.document.getElementById("gv-logo-wrap");
		if (!wrap || wrap._gvCycle) return;
		wrap._gvCycle = true;
		var visible = true;
		function tick() {
			wrap.classList.remove("gv-logo-visible", "gv-logo-hidden");
			if (visible) wrap.classList.add("gv-logo-visible");
			else wrap.classList.add("gv-logo-hidden");
			visible = !visible;
			global.setTimeout(tick, 5000);
		}
		tick();
	}

	function layoutUI() {
		ensureUI();
		var host = getCanvasHost();
		var rect = host.getBoundingClientRect();
		var size = Math.max(48, Math.min(64, Math.round(Math.min(rect.width, rect.height) * 0.07)));
		var margin = Math.max(10, Math.round(size * 0.2));
		var name = state.currentScene;

		var deleteWrap = global.document.getElementById("gv-delete-wrap");
		var actionWrap = global.document.getElementById("gv-action-wrap");
		var logoWrap = global.document.getElementById("gv-logo-wrap");
		var deleteBtn = global.document.getElementById("gv-delete-btn");
		var sendBtn = global.document.getElementById("gv-send-score-btn");

		var showDelete = isMainMenuScene(name);
		var showGameplayChrome = isGameplayScene(name) && !isBootScene(name);

		if (deleteWrap) {
			if (showDelete) {
				deleteWrap.hidden = false;
				deleteWrap.style.display = "flex";
				deleteWrap.style.left = Math.round(rect.left + rect.width - size - margin) + "px";
				deleteWrap.style.top = Math.round(rect.top + rect.height - size - margin) + "px";
				if (deleteBtn && deleteBtn.querySelector("img")) {
					deleteBtn.querySelector("img").style.width = size + "px";
					deleteBtn.querySelector("img").style.height = size + "px";
				}
			} else {
				deleteWrap.hidden = true;
				deleteWrap.style.display = "none";
			}
		}

		if (actionWrap) {
			if (showGameplayChrome && !isWinScene(name)) {
				actionWrap.hidden = false;
				actionWrap.style.display = "flex";
				actionWrap.style.left = Math.round(rect.left + rect.width - size - margin) + "px";
				actionWrap.style.top = Math.round(rect.top + rect.height - size - margin) + "px";
				if (sendBtn && sendBtn.querySelector("img")) {
					sendBtn.querySelector("img").style.width = size + "px";
					sendBtn.querySelector("img").style.height = size + "px";
				}
			} else {
				actionWrap.hidden = true;
				actionWrap.style.display = "none";
			}
		}

		if (logoWrap) {
			if (showGameplayChrome) {
				var logoW = Math.round(size * 1.6);
				logoWrap.hidden = false;
				logoWrap.style.display = "block";
				logoWrap.style.width = logoW + "px";
				logoWrap.style.left = Math.round(rect.left + margin) + "px";
				logoWrap.style.top = Math.round(rect.top + rect.height - Math.round(logoW * 0.45) - margin) + "px";
			} else {
				logoWrap.hidden = true;
				logoWrap.style.display = "none";
			}
		}
	}

	function onSceneChanged(sceneName) {
		state.currentScene = sceneName || "";
		logInfo("Scene: " + state.currentScene);
		layoutUI();

		if (isWinScene(state.currentScene) && !state.winScoreSubmitted) {
			state.winScoreSubmitted = true;
			/* Snapshot trước khi GameOverScreen.start() clear localStorage */
			state.pendingWinScore = getScoreToSend();
			rememberBestScore(state.pendingWinScore);
			logInfo("Win snapshot score=" + state.pendingWinScore);
			global.setTimeout(function () {
				submitScore("game-complete", state.pendingWinScore);
			}, 800);
		}
		if (isMainMenuScene(state.currentScene)) {
			state.winScoreSubmitted = false;
			state.pendingWinScore = 0;
		}
	}

	function installSceneHooks() {
		if (state.sceneHooksReady) return true;
		if (!global.cc || !cc.director) return false;

		try {
			cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
				var scene = cc.director.getScene();
				onSceneChanged(scene && scene.name ? scene.name : "");
			});

			var scene = cc.director.getScene();
			if (scene && scene.name) onSceneChanged(scene.name);

			state.sceneHooksReady = true;
			logInfo("Scene hooks san sang");
			return true;
		} catch (e) {
			logWarn("installSceneHooks loi", e);
			return false;
		}
	}

	function waitForSceneHooks() {
		var started = Date.now();
		(function tick() {
			if (installSceneHooks()) return;
			if (Date.now() - started > 30000) {
				logWarn("Timeout cho cc.director");
				return;
			}
			global.setTimeout(tick, 200);
		})();
	}

	/* ----------------------------- delete ----------------------------- */

	function onDeleteClick(ev) {
		if (ev) {
			ev.preventDefault();
			ev.stopPropagation();
		}
		showResetModal();
	}

	function showResetModal() {
		var modal = global.document.getElementById("gv-reset-modal");
		if (!modal) return;
		modal.style.display = "flex";
	}

	function hideResetModal() {
		var modal = global.document.getElementById("gv-reset-modal");
		if (!modal) return;
		modal.style.display = "none";
	}

	function reloadWithCacheBust() {
		try {
			var url = new URL(global.location.href);
			url.searchParams.set("_gv", String(Date.now()));
			global.location.replace(url.toString());
		} catch (e) {
			global.location.reload();
		}
	}

	function wipeAndReload() {
		state.resetting = true;
		if (state.pendingSaveTimer) {
			global.clearTimeout(state.pendingSaveTimer);
			state.pendingSaveTimer = 0;
		}

		var afterLocal = function () {
			state.seeding = true;
			lsRemove(STORAGE_KEY);
			lsRemove(BEST_SCORE_KEY);
			/* clear cheat slots if any */
			try {
				for (var i = 0; i < 10; i++) lsRemove(STORAGE_KEY + "-" + i);
			} catch (e) { /* ignore */ }
			state.seeding = false;
		};

		if (!cloudEnabled()) {
			afterLocal();
			logWarn("GV_RESET_LOCAL_ONLY — thieu gid/token, chi xoa local.");
			global.setTimeout(reloadWithCacheBust, 50);
			return;
		}

		var cred = getCredentials();
		var metadata = buildClearedMetadata();
		var attempt = 0;
		var maxAttempts = 3;

		function tryWipe() {
			attempt++;
			return postForm(SAVE_URL, {
				gameId: cred.gid,
				token: cred.token,
				metadata: JSON.stringify(metadata),
				metaData: JSON.stringify(metadata),
				CurrentLevel: 0,
				CurrentStage: 0,
				TotalScore: 0
			}).then(function (res) {
				if (!(res && res.Status === 1)) throw new Error("wipe save failed");
				return postForm(LOAD_URL, {
					gameId: cred.gid,
					token: cred.token
				});
			}).then(function (res) {
				var meta = parseMeta(res);
				if (meta && !meta.cleared && meta.Storage && meta.Storage.data) {
					throw new Error("wipe verify failed");
				}
				afterLocal();
				logInfo("Wipe cloud + local OK");
				reloadWithCacheBust();
			}).catch(function (err) {
				logWarn("Wipe attempt " + attempt + " loi", err);
				if (attempt < maxAttempts) return tryWipe();
				state.resetting = false;
				logWarn("Wipe that bai — khong xoa local.");
				global.alert("Không thể xóa dữ liệu trên máy chủ. Vui lòng thử lại.");
			});
		}

		tryWipe();
	}

	function installFlushListeners() {
		global.addEventListener("visibilitychange", function () {
			if (global.document.visibilityState === "hidden") flushSave();
		});
		global.addEventListener("pagehide", function () { flushSave(); });
	}

	function wrapBoot() {
		var origBoot = global.boot;
		if (typeof origBoot !== "function") {
			Object.defineProperty(global, "boot", {
				configurable: true,
				enumerable: true,
				get: function () { return origBoot; },
				set: function (fn) {
					origBoot = function () {
						var args = arguments;
						var self = this;
						ready.then(function () {
							fn.apply(self, args);
							waitForSceneHooks();
						});
					};
				}
			});
			return;
		}
		global.boot = function () {
			var args = arguments;
			var self = this;
			ready.then(function () {
				origBoot.apply(self, args);
				waitForSceneHooks();
			});
		};
	}

	function init() {
		logInfo("init " + MODULE_VERSION);
		patchLocalStorage();
		ensureUI();
		installFlushListeners();
		wrapBoot();
		waitForSceneHooks();
		return loadProgress();
	}

	var api = {
		version: MODULE_VERSION,
		ready: ready,
		init: init,
		submitScore: submitScore,
		getScoreToSend: getScoreToSend,
		computeScore: computeScore,
		flushSave: flushSave,
		requestSave: requestSave
	};

	global.ArcadeTool = api;

	if (global.document && global.document.readyState === "loading") {
		global.document.addEventListener("DOMContentLoaded", function () { init(); });
	} else {
		init();
	}
})(typeof window !== "undefined" ? window : this);
