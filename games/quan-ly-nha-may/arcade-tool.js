/**
 * Arcade tool — Quản lý nhà máy (Construct 2 / idleFactoryGameSave)
 * §2 one-file: cloud save/load, gửi điểm, xóa data.
 * Logo / BXH / ads: không yêu cầu → khối comment.
 */
(function (global) {
	"use strict";

	var MODULE_VERSION = "quan-ly-nha-may-tool-v1";
	var GAME_SLUG = "quan-ly-nha-may";
	var SAVE_KEY = "idleFactoryGameSave";
	var SAVE_URL = "https://localhost/account/SaveHistoryGame";
	var LOAD_URL = "https://localhost/account/GetHistoryGame";

	var DESIGN_W = 720;
	var DESIGN_H = 1280;
	/* Game autosave mỗi 20s — debounce ngắn để bám nhịp, không setInterval 60s */
	var SaveDebounceMs = 2000;
	var StorageTimeoutMs = 2000;
	var LocalforageWaitMs = 8000;
	var ReloadGuardKey = "gv_quan_ly_nha_may_reloaded";
	var DirtyHookKey = "__gvIdleFactoryDirtyHook";

	/* Gửi điểm: giữa thanh HUD trên; Xóa dữ liệu: góc phải dưới nav */
	var BTN_SIZE = 52;
	var BTN_SCORE_X = 360;
	var BTN_SCORE_Y = 48;
	var BTN_DELETE_X = 660;
	var BTN_DELETE_Y = 158;

	var qsKill = false;
	try {
		qsKill = new URLSearchParams(global.location.search).get("gvsave") === "0";
	} catch (e) {
		qsKill = false;
	}

	var state = {
		loadStarted: false,
		lastSaveAt: 0,
		pendingSaveTimer: 0,
		pendingSaveReason: "",
		dirty: false,
		resetting: false,
		uiReady: false,
		layoutName: "",
		gvPaused: false
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

	/* -------------------------------- credentials -------------------------------- */

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

	function isLoggedIn() {
		return !!getCredentials().gid;
	}

	function isOfflineCloudHost() {
		try {
			var host = String((global.location && global.location.hostname) || "").toLowerCase();
			if (!host || host === "localhost" || host === "127.0.0.1") return true;
			if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) return true;
			if (host === "localhost" || host === "www.localhost" || host === "e.localhost") return false;
			if (host.indexOf(".localhost") >= 0) return false;
			/* test.game / staging: still attempt cloud when gid present (fail-open) */
			return false;
		} catch (e) {
			return true;
		}
	}

	function cloudEnabled() {
		return !qsKill && !isOfflineCloudHost() && !!getCredentials().gid;
	}

	/* -------------------------------- Construct helpers -------------------------------- */

	function getRuntime() {
		return typeof global.cr_getC2Runtime === "function" ? global.cr_getC2Runtime() : null;
	}

	function getLayoutName() {
		var rt = getRuntime();
		if (rt && rt.running_layout && rt.running_layout.name) {
			return String(rt.running_layout.name);
		}
		return state.layoutName || "";
	}

	function getCanvas() {
		return global.document.getElementById("c2canvas");
	}

	function mapDesignToScreen(dx, dy) {
		var canvas = getCanvas();
		if (!canvas) {
			return { x: dx, y: dy, scale: 1 };
		}
		var rect = canvas.getBoundingClientRect();
		var scale = Math.min(rect.width / DESIGN_W, rect.height / DESIGN_H);
		var ox = rect.left + (rect.width - DESIGN_W * scale) / 2;
		var oy = rect.top + (rect.height - DESIGN_H * scale) / 2;
		return {
			x: ox + dx * scale,
			y: oy + dy * scale,
			scale: scale,
			rect: rect
		};
	}

	/* -------------------------------- localforage / LS -------------------------------- */

	function getLocalforage() {
		return global.localforage && typeof global.localforage.getItem === "function"
			? global.localforage
			: null;
	}

	function waitForLocalforage() {
		return new Promise(function (resolve) {
			if (getLocalforage()) {
				resolve(true);
				return;
			}
			var started = Date.now();
			var timer = global.setInterval(function () {
				if (getLocalforage()) {
					global.clearInterval(timer);
					resolve(true);
					return;
				}
				if (Date.now() - started >= LocalforageWaitMs) {
					global.clearInterval(timer);
					logWarn("localforage chưa sẵn sàng — dùng localStorage fallback.");
					resolve(false);
				}
			}, 50);
		});
	}

	function lsGet(key) {
		try {
			var v = global.localStorage.getItem(key);
			if (v != null) return v;
			return global.localStorage.getItem("localforage/" + key);
		} catch (e) {
			return null;
		}
	}

	function lsSet(key, value) {
		try {
			global.localStorage.setItem(key, value);
		} catch (e) { /* ignore */ }
	}

	function lsRemove(key) {
		try {
			global.localStorage.removeItem(key);
			global.localStorage.removeItem("localforage/" + key);
		} catch (e) { /* ignore */ }
	}

	function readKey(key) {
		return new Promise(function (resolve) {
			var store = getLocalforage();
			if (!store) {
				resolve(lsGet(key));
				return;
			}
			var settled = false;
			var finish = function (value) {
				if (settled) return;
				settled = true;
				resolve(value);
			};
			try {
				store.getItem(key, function (error, value) {
					if (error || value === null || value === undefined) {
						finish(lsGet(key));
						return;
					}
					finish(typeof value === "string" ? value : String(value));
				});
			} catch (e) {
				finish(lsGet(key));
			}
			setTimeout(function () {
				finish(lsGet(key));
			}, StorageTimeoutMs);
		});
	}

	function writeKey(key, value) {
		return new Promise(function (resolve) {
			lsSet(key, value);
			var store = getLocalforage();
			if (!store) {
				resolve();
				return;
			}
			var settled = false;
			var finish = function () {
				if (settled) return;
				settled = true;
				resolve();
			};
			try {
				store.setItem(key, value, finish);
			} catch (e) {
				finish();
			}
			setTimeout(finish, StorageTimeoutMs);
		});
	}

	function removeKey(key) {
		return new Promise(function (resolve) {
			lsRemove(key);
			var store = getLocalforage();
			if (!store) {
				resolve();
				return;
			}
			var settled = false;
			var finish = function () {
				if (settled) return;
				settled = true;
				resolve();
			};
			try {
				store.removeItem(key, finish);
			} catch (e) {
				finish();
			}
			setTimeout(finish, StorageTimeoutMs);
		});
	}

	/* -------------------------------- metadata / score -------------------------------- */

	function parseMaybeJson(raw) {
		if (raw === null || raw === undefined || raw === "") return null;
		if (typeof raw !== "string") return raw;
		try {
			return JSON.parse(raw);
		} catch (e) {
			return raw;
		}
	}

	function toNumber(raw, fallback) {
		var parsed = parseFloat(raw);
		return isNaN(parsed) ? fallback : parsed;
	}

	function getDictData(raw) {
		var obj = parseMaybeJson(raw);
		if (!obj || typeof obj !== "object") return null;
		return obj.data || obj.Data || null;
	}

	function progressFromSave(raw) {
		var data = getDictData(raw) || {};
		var money = Math.floor(toNumber(data["0"], 0) + toNumber(data["1"], 0));
		var unlocked = 0;
		var sumLevels = 0;
		var i;
		var lv;
		for (i = 1; i <= 27; i++) {
			lv = toNumber(data["-" + i], 0);
			if (lv > 0) {
				unlocked += 1;
				sumLevels += lv;
			}
		}
		var speed = Math.floor(toNumber(data["-28"], 0));
		var factory2 = toNumber(data.factory2, 0) > 0 ? 1 : 0;
		var factory3 = toNumber(data.factory3, 0) > 0 ? 1 : 0;
		/* softMoney: log10 scale — idle money không làm BXH phình tỷ/triệu */
		var softMoney = Math.floor(Math.log10(Math.max(0, money) + 1) * 4000);
		var totalScore = softMoney
			+ unlocked * 500
			+ sumLevels * 50
			+ speed * 500
			+ (factory2 ? 5000 : 0)
			+ (factory3 ? 10000 : 0);
		return {
			money: money,
			softMoney: softMoney,
			unlocked: unlocked,
			sumLevels: sumLevels,
			speed: speed,
			factory2: factory2,
			factory3: factory3,
			TotalScore: Math.max(0, Math.floor(totalScore))
		};
	}

	function buildMetadata(rawSave) {
		var p = progressFromSave(rawSave);
		return {
			game: GAME_SLUG,
			CurrentLevel: p.unlocked,
			CurrentStage: p.speed,
			TotalScore: p.TotalScore,
			Money: p.money,
			UnlockedWorkers: p.unlocked,
			SumWorkerLevels: p.sumLevels,
			WorkSpeed: p.speed,
			Factory2: p.factory2,
			Factory3: p.factory3,
			Storage: {
				idleFactoryGameSave: typeof rawSave === "string" ? rawSave : JSON.stringify(rawSave || "")
			},
			savedAt: new Date().toISOString()
		};
	}

	function buildClearedMetadata() {
		return {
			game: GAME_SLUG,
			cleared: true,
			CurrentLevel: 0,
			CurrentStage: 0,
			TotalScore: 0,
			savedAt: new Date().toISOString()
		};
	}

	function metadataToSaveBlob(metadata) {
		if (!metadata || typeof metadata !== "object" || metadata.cleared) return null;
		var storage = metadata.Storage;
		if (storage && typeof storage === "object" && storage.idleFactoryGameSave) {
			return typeof storage.idleFactoryGameSave === "string"
				? storage.idleFactoryGameSave
				: JSON.stringify(storage.idleFactoryGameSave);
		}
		if (metadata.c2dictionary && metadata.data) {
			return JSON.stringify(metadata);
		}
		return null;
	}

	function postForm(url, fields) {
		return fetch(url, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
			},
			body: new URLSearchParams(fields)
		}).then(function (res) {
			return res.json().catch(function () {
				return null;
			});
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

	/* -------------------------------- save / load -------------------------------- */

	function sendSave(reason) {
		if (state.resetting) return Promise.resolve(false);
		if (!cloudEnabled()) {
			logInfo("Bỏ qua save (" + reason + "): cloud tắt / thiếu gid.");
			return Promise.resolve(false);
		}
		var cred = getCredentials();
		state.lastSaveAt = Date.now();
		state.dirty = false;

		return readKey(SAVE_KEY).then(function (raw) {
			if (!raw) {
				logInfo("Bỏ qua save (" + reason + "): chưa có " + SAVE_KEY + ".");
				return false;
			}
			var metadata = buildMetadata(raw);
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
			});
		}).catch(function (error) {
			logWarn("Save lỗi (" + reason + "): " + (error && error.message ? error.message : error));
			return false;
		});
	}

	function requestSave(reason) {
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

	function installDirtyHook() {
		if (global[DirtyHookKey]) return;
		waitForLocalforage().then(function (ok) {
			var store = getLocalforage();
			if (!ok || !store || typeof store.setItem !== "function") return;
			if (store.__gvPatchedSetItem) return;
			var original = store.setItem.bind(store);
			store.setItem = function (key, value, callback) {
				var result = original(key, value, callback);
				try {
					if (String(key) === SAVE_KEY && !state.resetting) {
						requestSave("localforage");
					}
				} catch (e) { /* ignore */ }
				return result;
			};
			store.__gvPatchedSetItem = true;
			global[DirtyHookKey] = true;
			logInfo("Đã hook localforage.setItem cho " + SAVE_KEY);
		});
	}

	function loadProgress() {
		if (state.loadStarted) return ready;
		state.loadStarted = true;

		var run = function () {
			if (qsKill) {
				logInfo("gvsave=0 — bỏ qua cloud load.");
				return Promise.resolve(false);
			}
			if (!getCredentials().gid) {
				logInfo("Bỏ qua load: không có gid.");
				return Promise.resolve(false);
			}
			if (isOfflineCloudHost()) {
				logInfo("Bỏ qua load: host offline.");
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
					logInfo("Load: chưa có save cloud — chơi local.");
					return false;
				}
				if (metadata.cleared) {
					logInfo("Load: cloud cleared.");
					return false;
				}
				var blob = metadataToSaveBlob(metadata);
				if (!blob) {
					logInfo("Load: metadata thiếu idleFactoryGameSave.");
					return false;
				}
				return waitForLocalforage().then(function () {
					return writeKey(SAVE_KEY, blob);
				}).then(function () {
					logInfo("Load OK: đã seed " + SAVE_KEY);
					return true;
				});
			}).catch(function (error) {
				logWarn("Load lỗi: " + (error && error.message ? error.message : error));
				return false;
			});
		};

		run().then(finishReady, function () {
			finishReady(false);
		});
		return ready;
	}

	function deleteAll() {
		state.resetting = true;
		return removeKey(SAVE_KEY).then(function () {
			try {
				global.sessionStorage.removeItem(ReloadGuardKey);
			} catch (e) { /* ignore */ }

			if (!cloudEnabled()) {
				return false;
			}
			var cred = getCredentials();
			var cleared = buildClearedMetadata();
			return postForm(SAVE_URL, {
				gameId: cred.gid,
				token: cred.token,
				metadata: JSON.stringify(cleared),
				metaData: JSON.stringify(cleared),
				CurrentLevel: 0,
				CurrentStage: 0,
				TotalScore: 0
			}).then(function (res) {
				return !!(res && res.Status === 1);
			}).catch(function () {
				return false;
			});
		}).then(function () {
			logInfo("Đã xóa data — reload.");
			var url = global.location.href.split("#")[0];
			var sep = url.indexOf("?") >= 0 ? "&" : "?";
			global.location.href = url + sep + "_gv=" + Date.now();
			return true;
		});
	}

	function pauseGame() {
		if (state.gvPaused) return;
		try {
			if (typeof global.cr_setSuspended === "function") {
				global.cr_setSuspended(true);
			}
		} catch (e) { /* ignore */ }
		state.gvPaused = true;
	}

	function resumeGame() {
		if (!state.gvPaused) return;
		state.gvPaused = false;
		try {
			if (typeof global.cr_setSuspended === "function") {
				global.cr_setSuspended(false);
			}
		} catch (e) { /* ignore */ }
	}

	function getTotalScore() {
		return readKey(SAVE_KEY).then(function (raw) {
			return progressFromSave(raw).TotalScore;
		});
	}

	function submitScore() {
		pauseGame();
		return getTotalScore().then(function (n) {
			var score = Math.max(0, Math.floor(toNumber(n, 0)));
			if (typeof global.GV !== "function") {
				showToast("Chưa sẵn sàng gửi điểm.");
				resumeGame();
				return false;
			}
			try {
				new global.GV().saveScore(score, function () {
					flushSave();
					resumeGame();
				});
				logInfo("saveScore(" + score + ")");
				return true;
			} catch (e) {
				try {
					new global.GV().saveScore(score);
					flushSave();
					resumeGame();
					return true;
				} catch (e2) {
					logWarn("saveScore lỗi", e2);
					showToast("Không gửi được điểm.");
					resumeGame();
					return false;
				}
			}
		}).catch(function () {
			resumeGame();
			return false;
		});
	}

	/* -------------------------------- laggedDataSave stub (silence SetItem errors) -------------------------------- */

	function installLaggedStub() {
		if (global.laggedDataSave) return;
		global.laggedDataSave = {
			init: function () { /* no-op */ },
			login: function () { /* no-op */ },
			save: function (value, mode, cb) {
				try {
					if (!state.resetting && value != null && value !== "") {
						requestSave("laggedDataSave");
					}
				} catch (e) { /* ignore */ }
				if (typeof cb === "function") {
					try { cb({ ok: true }); } catch (e2) { /* ignore */ }
				}
			},
			showMessageonInit: false
		};
		logInfo("Đã stub laggedDataSave");
	}

	/* -------------------------------- UI: buttons / confirm -------------------------------- */

	function showToast(message) {
		var el = global.document.getElementById("gv-toast");
		if (!el) {
			el = global.document.createElement("div");
			el.id = "gv-toast";
			global.document.body.appendChild(el);
		}
		el.textContent = message;
		el.classList.add("gv-toast-show");
		global.clearTimeout(showToast._t);
		showToast._t = global.setTimeout(function () {
			el.classList.remove("gv-toast-show");
		}, 2200);
	}

	function ensureButton(id, src, label) {
		var btn = global.document.getElementById(id);
		if (btn) return btn;
		btn = global.document.createElement("button");
		btn.type = "button";
		btn.id = id;
		btn.className = "gv-canvas-overlay gv-hidden";
		btn.setAttribute("aria-label", label);
		btn.title = label;
		var img = global.document.createElement("img");
		img.src = src;
		img.alt = "";
		img.draggable = false;
		btn.appendChild(img);
		global.document.body.appendChild(btn);
		return btn;
	}

	function ensureConfirm() {
		var overlay = global.document.getElementById("gv-confirm");
		if (overlay) return overlay;
		overlay = global.document.createElement("div");
		overlay.id = "gv-confirm";
		overlay.className = "gv-hidden";
		overlay.setAttribute("aria-hidden", "true");
		overlay.innerHTML =
			'<div class="gv-confirm-box" role="dialog" aria-modal="true">' +
			'<p class="gv-confirm-text">Bạn chắc chắn muốn xóa tất cả dữ liệu game và chơi lại từ đầu?</p>' +
			'<div class="gv-confirm-actions">' +
			'<button type="button" class="gv-confirm-cancel" id="gv-delete-cancel">Hủy</button>' +
			'<button type="button" class="gv-confirm-ok" id="gv-delete-ok">OK</button>' +
			"</div></div>";
		global.document.body.appendChild(overlay);
		return overlay;
	}

	function setVisible(el, show) {
		if (!el) return;
		if (show) {
			el.classList.remove("gv-hidden");
			el.classList.remove("gv-not-ready");
			el.hidden = false;
			el.setAttribute("aria-hidden", "false");
		} else {
			el.classList.add("gv-hidden");
			el.hidden = true;
			el.setAttribute("aria-hidden", "true");
		}
	}

	function placeFixed(el, designX, designY, sizePx) {
		if (!el) return;
		var mapped = mapDesignToScreen(designX, designY);
		var size = Math.max(36, Math.round((sizePx || 48) * mapped.scale));
		el.style.position = "fixed";
		el.style.width = size + "px";
		el.style.height = size + "px";
		el.style.left = Math.round(mapped.x - size / 2) + "px";
		el.style.top = Math.round(mapped.y - size / 2) + "px";
		el.style.zIndex = "10001";
	}

	function syncUiLayout() {
		var layout = getLayoutName();
		state.layoutName = layout;
		var scoreBtn = ensureButton("gv-btn-score", "gv-gui-diem.png", "Gửi điểm");
		var deleteBtn = ensureButton("gv-btn-delete", "xoa-data-gv.png", "Xóa dữ liệu");
		var hasGid = !!getCredentials().gid;

		if (!state.uiReady || !layout || layout === "Loader") {
			setVisible(scoreBtn, false);
			setVisible(deleteBtn, false);
			return;
		}

		if (layout === "Game") {
			placeFixed(scoreBtn, BTN_SCORE_X, BTN_SCORE_Y, BTN_SIZE);
			placeFixed(deleteBtn, BTN_DELETE_X, BTN_DELETE_Y, BTN_SIZE);
			setVisible(scoreBtn, hasGid);
			setVisible(deleteBtn, hasGid);
			return;
		}

		setVisible(scoreBtn, false);
		setVisible(deleteBtn, false);
	}

	function hideDeleteConfirm() {
		var overlay = ensureConfirm();
		overlay.classList.add("gv-hidden");
		overlay.setAttribute("aria-hidden", "true");
		resumeGame();
	}

	function bindUi() {
		ensureConfirm();
		var scoreBtn = ensureButton("gv-btn-score", "gv-gui-diem.png", "Gửi điểm");
		var deleteBtn = ensureButton("gv-btn-delete", "xoa-data-gv.png", "Xóa dữ liệu");

		if (!scoreBtn.__gvBound) {
			scoreBtn.__gvBound = true;
			scoreBtn.addEventListener("click", function (ev) {
				ev.preventDefault();
				submitScore();
			});
		}
		if (!deleteBtn.__gvBound) {
			deleteBtn.__gvBound = true;
			deleteBtn.addEventListener("click", function (ev) {
				ev.preventDefault();
				pauseGame();
				var overlay = ensureConfirm();
				overlay.classList.remove("gv-hidden");
				overlay.setAttribute("aria-hidden", "false");
			});
		}

		var cancel = global.document.getElementById("gv-delete-cancel");
		var ok = global.document.getElementById("gv-delete-ok");
		var overlay = ensureConfirm();

		if (cancel && !cancel.__gvBound) {
			cancel.__gvBound = true;
			cancel.addEventListener("click", function () {
				hideDeleteConfirm();
			});
		}
		if (ok && !ok.__gvBound) {
			ok.__gvBound = true;
			ok.addEventListener("click", function () {
				ok.disabled = true;
				deleteAll();
			});
		}
		if (overlay && !overlay.__gvBound) {
			overlay.__gvBound = true;
			overlay.addEventListener("click", function (ev) {
				if (ev.target === overlay) {
					hideDeleteConfirm();
				}
			});
		}

		global.addEventListener("resize", syncUiLayout);
		global.addEventListener("orientationchange", syncUiLayout);
		if (global.visualViewport) {
			global.visualViewport.addEventListener("resize", syncUiLayout);
		}
	}

	/*
	 * FEATURE Logo mới / BXH / Ads — không nằm trong yêu cầu task
	 *
	 * function ensureLogo() { ... LOGO_SRC ... }
	 * function placeLogo() { ... }
	 * history-leaderboard.js + data-history-leaderboard
	 * GVAdBreak(function () { ... })
	 */

	/* -------------------------------- hide old GV logo + block blank click -------------------------------- */

	function suppressOldLogos() {
		var rt = getRuntime();
		if (!rt || !rt.types_by_index) return;
		var types = rt.types_by_index;
		for (var i = 0; i < types.length; i++) {
			var t = types[i];
			if (!t || !t.instances || !t.instances.length) continue;
			var tex = "";
			try {
				if (t.texture_file) tex = String(t.texture_file);
				else if (t.animations && t.animations[0] && t.animations[0].frames && t.animations[0].frames[0]) {
					tex = String(t.animations[0].frames[0].texture_file || "");
				}
			} catch (e) { /* ignore */ }
			if (tex.indexOf("sprite-sheet0.png") < 0) continue;
			for (var j = 0; j < t.instances.length; j++) {
				var inst = t.instances[j];
				if (!inst) continue;
				inst.visible = false;
				inst.width = 0;
				inst.height = 0;
				try {
					if (typeof inst.set_bbox_changed === "function") inst.set_bbox_changed();
				} catch (e2) { /* ignore */ }
			}
		}
	}

	function patchBrowserGoto() {
		try {
			if (!global.cr || !cr.plugins_ || !cr.plugins_.Browser) return;
			var acts = cr.plugins_.Browser.prototype.acts;
			if (!acts || acts.__gvPatched) return;
			var wrap = function (fn) {
				return function (url, target) {
					var u = String(url || "");
					if (u.indexOf("localhost") >= 0 || u.indexOf("localhost") >= 0) {
						logInfo("Chặn GoToURL logo cũ: " + u);
						return;
					}
					return fn.apply(this, arguments);
				};
			};
			if (typeof acts.GoToURL === "function") {
				acts.GoToURL = wrap(acts.GoToURL);
			}
			if (typeof acts.GoToURLWindow === "function") {
				acts.GoToURLWindow = wrap(acts.GoToURLWindow);
			}
			acts.__gvPatched = true;
		} catch (e) {
			logWarn("Không patch Browser GoToURL", e);
		}
	}

	/* -------------------------------- runtime tick -------------------------------- */

	function onRuntimeTick() {
		var rt = getRuntime();
		if (!rt) return;
		if (rt.isloading === false && rt.running_layout) {
			if (!state.uiReady) {
				state.uiReady = true;
				patchBrowserGoto();
				installDirtyHook();
			}
			suppressOldLogos();
			syncUiLayout();
		}
	}

	function startUiLoop() {
		bindUi();
		global.setInterval(onRuntimeTick, 400);
		global.document.addEventListener("visibilitychange", function () {
			if (global.document.hidden) flushSave();
		});
		global.addEventListener("pagehide", function () {
			flushSave();
		});
	}

	/* -------------------------------- public API -------------------------------- */

	global.ArcadeTool = {
		version: MODULE_VERSION,
		ready: ready,
		saveProgress: sendSave,
		loadProgress: loadProgress,
		deleteAll: deleteAll,
		submitScore: submitScore,
		getTotalScore: getTotalScore,
		isLoggedIn: isLoggedIn,
		getCredentials: getCredentials,
		flushSave: flushSave
	};

	global.ArcadeSave = global.ArcadeTool;

	installLaggedStub();
	logInfo("Module loaded: " + MODULE_VERSION);
	loadProgress();

	if (global.document.readyState === "loading") {
		global.document.addEventListener("DOMContentLoaded", startUiLoop);
	} else {
		startUiLoop();
	}
})(typeof window !== "undefined" ? window : this);
