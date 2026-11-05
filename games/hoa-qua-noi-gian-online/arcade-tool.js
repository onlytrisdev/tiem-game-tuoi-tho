/**
 * Arcade tool — Hoa quả nổi giận Online (Plants vs Monsters / Cocos2d-html5)
 * Cloud save/load, điểm diệt quái + clear bonus, gửi điểm GV, Xóa data, logo no-blank, layout CSS.
 */
(function (global) {
	"use strict";

	var GAME_SLUG = "hoa-qua-noi-gian-online";
	var SAVE_URL = "https://localhost/account/SaveHistoryGame";
	var LOAD_URL = "https://localhost/account/GetHistoryGame";
	var LEVEL_BEST_KEY = "gv_pvm_levelBest";
	var PEAK_SCORE_KEY = "gv_pvm_peakScore";
	var DESIGN_W = 800;
	var DESIGN_H = 480;
	var CLEAR_BONUS = 100;
	var SAVE_DEBOUNCE_MS = 60000;
	var BOOT_WAIT_MS = 20000;

	var qsKill = false;
	try {
		qsKill = new URLSearchParams(global.location.search).get("gvsave") === "0";
	} catch (e0) {
		qsKill = false;
	}

	var state = {
		killScore: 0,
		battleActive: false,
		scoreSubmitted: false,
		seeding: false,
		resetting: false,
		dirty: false,
		lastSaveAt: 0,
		pendingSaveTimer: 0,
		hooksReady: false,
		uiReady: false,
		onMainMenu: false,
		layoutTimer: 0
	};

	function logInfo(msg, detail) {
		if (global.console && console.info) {
			if (detail !== undefined) console.info("[ArcadeTool] " + msg, detail);
			else console.info("[ArcadeTool] " + msg);
		}
	}

	function logWarn(msg, detail) {
		if (global.console && console.warn) {
			if (detail !== undefined) console.warn("[ArcadeTool] " + msg, detail);
			else console.warn("[ArcadeTool] " + msg);
		}
	}

	function safeParse(raw, fallback) {
		if (raw == null || raw === "") return fallback;
		try {
			return JSON.parse(raw);
		} catch (e) {
			return fallback;
		}
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
			global.localStorage.setItem(key, String(value));
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

	/* -------------------------------- credentials -------------------------------- */

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

	function cloudEnabled() {
		if (qsKill) return false;
		return !!getCredentials().gid;
	}

	/* -------------------------------- progress keys -------------------------------- */

	function isProgressKey(key) {
		if (!key) return false;
		var k = String(key);
		if (k === "isPassedTutorial") return true;
		if (k === LEVEL_BEST_KEY || k === PEAK_SCORE_KEY) return true;
		if (/^level\d+Unlocked$/.test(k)) return true;
		if (/^p\d+Unlocked$/.test(k)) return true;
		if (/^m\d+Unlocked$/.test(k)) return true;
		if (/^s\d+Unlocked$/.test(k)) return true;
		return false;
	}

	function listProgressKeys() {
		var keys = [];
		try {
			for (var i = 0; i < global.localStorage.length; i++) {
				var k = global.localStorage.key(i);
				if (isProgressKey(k)) keys.push(k);
			}
		} catch (e) { /* private */ }
		return keys;
	}

	function exportStorageBlob() {
		var blob = {};
		var keys = listProgressKeys();
		for (var i = 0; i < keys.length; i++) {
			blob[keys[i]] = lsGet(keys[i]);
		}
		return blob;
	}

	function applyStorageBlob(blob) {
		if (!blob || typeof blob !== "object") return false;
		var applied = 0;
		state.seeding = true;
		try {
			var keys = Object.keys(blob);
			for (var i = 0; i < keys.length; i++) {
				var k = keys[i];
				if (!isProgressKey(k)) continue;
				try {
					if (blob[k] == null) lsRemove(k);
					else lsSet(k, blob[k]);
					applied++;
				} catch (e) { /* ignore */ }
			}
		} finally {
			state.seeding = false;
		}
		return applied > 0;
	}

	function clearProgressLocal() {
		var keys = listProgressKeys();
		for (var i = 0; i < keys.length; i++) lsRemove(keys[i]);
	}

	function getMaxUnlockedLevel() {
		var max = 1;
		try {
			for (var i = 0; i < global.localStorage.length; i++) {
				var k = global.localStorage.key(i);
				var m = k && String(k).match(/^level(\d+)Unlocked$/);
				if (m && lsGet(k)) {
					var n = parseInt(m[1], 10);
					if (n > max) max = n;
				}
			}
		} catch (e) { /* ignore */ }
		return max;
	}

	/* -------------------------------- scoring -------------------------------- */

	function loadLevelBest() {
		var raw = safeParse(lsGet(LEVEL_BEST_KEY), {});
		return raw && typeof raw === "object" ? raw : {};
	}

	function saveLevelBest(map) {
		lsSet(LEVEL_BEST_KEY, JSON.stringify(map || {}));
		var total = sumBest(map);
		lsSet(PEAK_SCORE_KEY, String(total));
		return total;
	}

	function sumBest(map) {
		var total = 0;
		if (!map) return 0;
		var keys = Object.keys(map);
		for (var i = 0; i < keys.length; i++) {
			var v = parseInt(map[keys[i]], 10);
			if (isFinite(v) && v > 0) total += v;
		}
		return total;
	}

	function getTotalScore() {
		return sumBest(loadLevelBest());
	}

	function beginBattle() {
		state.killScore = 0;
		state.battleActive = true;
		state.scoreSubmitted = false;
		state.onMainMenu = false;
		hideDeleteBtn();
		logInfo("Battle start — killScore reset");
	}

	function onEnemyKilled(typeIndex) {
		if (!state.battleActive) return;
		var tier = (parseInt(typeIndex, 10) || 0) + 1;
		if (tier < 1) tier = 1;
		state.killScore += tier;
	}

	function finishBattle(won) {
		if (state.scoreSubmitted) return getTotalScore();
		state.scoreSubmitted = true;
		state.battleActive = false;

		var levelId = 0;
		try {
			if (global.levelData && global.levelData.id != null) levelId = parseInt(global.levelData.id, 10) || 0;
		} catch (e) { /* ignore */ }

		var runScore = state.killScore + (won ? CLEAR_BONUS : 0);
		var bestMap = loadLevelBest();
		var key = String(levelId || 0);
		var prev = parseInt(bestMap[key], 10) || 0;
		if (runScore > prev) bestMap[key] = runScore;
		var total = saveLevelBest(bestMap);

		logInfo("Battle end", {
			won: !!won,
			levelId: levelId,
			killScore: state.killScore,
			runScore: runScore,
			prevBest: prev,
			TotalScore: total
		});

		requestSave("battle-end");
		submitScoreToGv(total);
		return total;
	}

	function submitScoreToGv(score) {
		var n = parseInt(score, 10) || 0;
		if (n < 0) n = 0;
		if (typeof global.GV !== "function") {
			logWarn("GV SDK chưa sẵn sàng — bỏ qua saveScore");
			flushSave();
			return;
		}
		try {
			new global.GV().saveScore(n, function () {
				flushSave();
			});
			logInfo("saveScore(" + n + ")");
		} catch (e) {
			try {
				new global.GV().saveScore(n);
			} catch (e2) {
				logWarn("saveScore lỗi", e2);
			}
			flushSave();
		}
	}

	/* -------------------------------- cloud -------------------------------- */

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

	function buildMetadata() {
		var best = loadLevelBest();
		var total = sumBest(best);
		return {
			CurrentLevel: getMaxUnlockedLevel(),
			CurrentStage: getMaxUnlockedLevel(),
			TotalScore: total,
			savedAt: Date.now(),
			slug: GAME_SLUG,
			levelBest: best,
			Storage: exportStorageBlob()
		};
	}

	function sendSave(reason) {
		if (state.resetting) return Promise.resolve(false);
		if (!cloudEnabled()) {
			logInfo("Bỏ qua save (" + reason + "): thiếu gid / gvsave=0");
			return Promise.resolve(false);
		}
		var cred = getCredentials();
		var metadata = buildMetadata();
		state.lastSaveAt = Date.now();
		state.dirty = false;
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
		}).catch(function (err) {
			logWarn("Save lỗi (" + reason + ")", err && err.message ? err.message : err);
			return false;
		});
	}

	function requestSave(reason) {
		state.dirty = true;
		var elapsed = Date.now() - state.lastSaveAt;
		if (elapsed >= SAVE_DEBOUNCE_MS) {
			sendSave(reason || "dirty");
			return;
		}
		if (state.pendingSaveTimer) return;
		var wait = Math.max(250, SAVE_DEBOUNCE_MS - elapsed);
		state.pendingSaveTimer = global.setTimeout(function () {
			state.pendingSaveTimer = 0;
			sendSave(reason || "debounce");
		}, wait);
	}

	function flushSave() {
		if (state.pendingSaveTimer) {
			global.clearTimeout(state.pendingSaveTimer);
			state.pendingSaveTimer = 0;
		}
		return sendSave("flush");
	}

	function loadProgress() {
		if (!cloudEnabled()) {
			logInfo("Skip GetHistory: thiếu gid");
			return Promise.resolve(false);
		}
		var cred = getCredentials();
		return postForm(LOAD_URL, {
			gameId: cred.gid,
			token: cred.token
		}).then(function (res) {
			logInfo("GetHistoryGame Status=" + (res && res.Status));
			var metadata = parseMeta(res);
			if (!metadata) return false;
			if (metadata.cleared) {
				clearProgressLocal();
				return true;
			}
			var blob = metadata.Storage;
			if (!blob && metadata.levelBest) {
				blob = {};
			}
			if (blob) applyStorageBlob(blob);
			if (metadata.levelBest && typeof metadata.levelBest === "object") {
				state.seeding = true;
				try {
					saveLevelBest(metadata.levelBest);
				} finally {
					state.seeding = false;
				}
			} else if (metadata.TotalScore != null) {
				lsSet(PEAK_SCORE_KEY, String(metadata.TotalScore));
			}
			logInfo("Seeded progress from cloud", {
				keys: listProgressKeys().length,
				TotalScore: getTotalScore()
			});
			return true;
		}).catch(function (err) {
			logWarn("GetHistory lỗi", err && err.message ? err.message : err);
			return false;
		});
	}

	function installStorageHook() {
		try {
			var proto = Storage.prototype;
			if (proto.__gvPvmSetItem) return;
			var original = proto.setItem;
			proto.setItem = function (key, value) {
				var result = original.apply(this, arguments);
				try {
					if (this === global.localStorage && isProgressKey(key) && !state.seeding && !state.resetting) {
						requestSave("localStorage");
					}
				} catch (e) { /* ignore */ }
				return result;
			};
			proto.__gvPvmSetItem = true;
			logInfo("Hooked localStorage.setItem");
		} catch (e2) {
			logWarn("Không hook được localStorage.setItem", e2);
		}
	}

	/* -------------------------------- gameplay hooks -------------------------------- */

	function wrapFn(obj, name, wrapper) {
		if (!obj || typeof obj[name] !== "function") return false;
		if (obj[name].__gvWrapped) return true;
		var orig = obj[name];
		var wrapped = wrapper(orig);
		wrapped.__gvWrapped = true;
		obj[name] = wrapped;
		return true;
	}

	/* Patch Loading.preload ĐỒNG BỘ trước myApp — tránh hiện scene Eng */
	function makeSilentLoadingPreload() {
		return function (resources, selector, target) {
			logInfo("Skip Eng Loading — preload ngầm rồi vào MainMenu");
			try {
				var director = cc.Director.getInstance();
				var blank = cc.Scene.create();
				var layer = cc.LayerColor.create(cc.c4b ? cc.c4b(0, 0, 0, 255) : cc.c4(0, 0, 0, 255));
				if (layer) blank.addChild(layer);
				if (director.getRunningScene()) director.replaceScene(blank);
				else director.runWithScene(blank);
			} catch (e) {
				logWarn("Blank scene lỗi", e);
			}
			try {
				cc.Loader.preload(resources, selector, target);
			} catch (e2) {
				logWarn("cc.Loader.preload lỗi", e2);
			}
			return null;
		};
	}

	function trapLoadingPreload() {
		if (global.__gvLoadingTrapped) return;
		global.__gvLoadingTrapped = true;
		var stored = global.Loading;
		try {
			Object.defineProperty(global, "Loading", {
				configurable: true,
				enumerable: true,
				get: function () {
					return stored;
				},
				set: function (v) {
					stored = v;
					if (!v || (typeof v !== "function" && typeof v !== "object")) return;
					try {
						Object.defineProperty(v, "preload", {
							configurable: true,
							enumerable: true,
							set: function () {
								var silent = makeSilentLoadingPreload();
								silent.__gvWrapped = true;
								Object.defineProperty(this, "preload", {
									configurable: true,
									enumerable: true,
									writable: true,
									value: silent
								});
								logInfo("Loading.preload đã thay (skip Eng)");
							},
							get: function () {
								return undefined;
							}
						});
					} catch (e) {
						logWarn("Không trap Loading.preload", e);
					}
				}
			});
			if (stored) {
				global.Loading = stored;
			}
			logInfo("Đã cài trap Loading");
		} catch (e2) {
			logWarn("defineProperty Loading thất bại", e2);
		}
	}

	function installLoadingSkipFallback() {
		if (typeof global.Loading === "undefined" || typeof global.Loading.preload !== "function") return false;
		if (global.Loading.preload.__gvWrapped) return true;
		global.Loading.preload = makeSilentLoadingPreload();
		global.Loading.preload.__gvWrapped = true;
		logInfo("Loading.preload fallback patch");
		return true;
	}

	function installGameHooks() {
		if (state.hooksReady) return true;
		if (typeof global.Enemy === "undefined" || typeof global.SG_Hooks === "undefined") return false;

		wrapFn(global.Enemy.prototype, "die", function (orig) {
			return function () {
				var award = this && this.hp <= 0;
				var type = this && this.type;
				var ret = orig.apply(this, arguments);
				if (award && type != null) onEnemyKilled(type);
				return ret;
			};
		});

		wrapFn(global.SG_Hooks, "gameOver", function (orig) {
			return function (level, score, callback) {
				finishBattle(false);
				return orig.apply(this, arguments);
			};
		});

		wrapFn(global.SG_Hooks, "levelUp", function (orig) {
			return function (level, score, callback) {
				finishBattle(true);
				return orig.apply(this, arguments);
			};
		});

		wrapFn(global.SG_Hooks, "start", function (orig) {
			return function () {
				state.onMainMenu = false;
				hideDeleteBtn();
				return orig.apply(this, arguments);
			};
		});

		if (typeof global.GameLayer !== "undefined") {
			wrapFn(global.GameLayer, "create", function (orig) {
				return function () {
					var layer = orig.apply(this, arguments);
					beginBattle();
					return layer;
				};
			});
		}

		if (typeof global.MainMenu !== "undefined") {
			wrapFn(global.MainMenu.prototype, "init", function (orig) {
				return function () {
					var ok = orig.apply(this, arguments);
					state.onMainMenu = true;
					state.battleActive = false;
					global.setTimeout(showDeleteBtn, 1200);
					return ok;
				};
			});
		}

		if (typeof global.ChapterMenu !== "undefined") {
			wrapFn(global.ChapterMenu.prototype, "init", function (orig) {
				return function () {
					var ok = orig.apply(this, arguments);
					state.onMainMenu = false;
					hideDeleteBtn();
					return ok;
				};
			});
			/* Back về MainMenu từ Chapter */
			if (typeof global.MainMenu.create === "function") {
				wrapFn(global.MainMenu, "create", function (orig) {
					return function () {
						var menu = orig.apply(this, arguments);
						state.onMainMenu = true;
						state.battleActive = false;
						global.setTimeout(showDeleteBtn, 1200);
						return menu;
					};
				});
			}
		}

		if (typeof global.EncyclopediaMenu !== "undefined") {
			wrapFn(global.EncyclopediaMenu.prototype, "init", function (orig) {
				return function () {
					var ok = orig.apply(this, arguments);
					state.onMainMenu = false;
					hideDeleteBtn();
					return ok;
				};
			});
		}

		if (global.SG && typeof global.SG.redirectToPortal === "function") {
			global.SG.redirectToPortal = function () {
				logInfo("Chặn redirectToPortal (logo)");
			};
		}

		state.hooksReady = true;
		logInfo("Gameplay hooks sẵn sàng");
		return true;
	}

	function waitForHooks() {
		var started = Date.now();
		(function tick() {
			if (installGameHooks()) return;
			if (Date.now() - started > BOOT_WAIT_MS) {
				logWarn("Timeout chờ Enemy/SG_Hooks");
				return;
			}
			global.setTimeout(tick, 100);
		})();
	}

	/* -------------------------------- UI: Xóa data -------------------------------- */

	function getCanvas() {
		return global.document.getElementById("gameCanvas");
	}

	function mapDesignToScreen(dx, dy) {
		var canvas = getCanvas();
		if (!canvas) return { x: dx, y: dy, scale: 1 };
		var rect = canvas.getBoundingClientRect();
		var scale = Math.min(rect.width / DESIGN_W, rect.height / DESIGN_H);
		var ox = rect.left + (rect.width - DESIGN_W * scale) / 2;
		var oy = rect.top + (rect.height - DESIGN_H * scale) / 2;
		/* Cocos Y gốc đáy → CSS Y gốc đỉnh */
		return {
			x: ox + dx * scale,
			y: oy + (DESIGN_H - dy) * scale,
			scale: scale,
			rect: rect
		};
	}

	function ensureDeleteBtn() {
		var btn = global.document.getElementById("gv-btn-delete");
		if (btn) return btn;
		btn = global.document.createElement("button");
		btn.id = "gv-btn-delete";
		btn.type = "button";
		btn.className = "gv-menu-btn gv-delete-btn";
		btn.textContent = "Xóa data";
		btn.setAttribute("aria-label", "Xóa data");
		btn.style.display = "none";
		btn.addEventListener("click", function (ev) {
			ev.preventDefault();
			ev.stopPropagation();
			confirmDelete();
		});
		global.document.body.appendChild(btn);
		return btn;
	}

	function layoutDeleteBtn() {
		var btn = ensureDeleteBtn();
		if (!state.onMainMenu) {
			btn.style.display = "none";
			return;
		}
		/* Cocos Y: logo≈356, Bắt Đầu≈172, Thông số≈97 → Xóa data dưới Thông số ≈22 */
		var mapped = mapDesignToScreen(400, 22);
		var scale = mapped.scale || 1;
		var w = Math.round(220 * scale);
		var h = Math.round(52 * scale);
		btn.style.display = "block";
		btn.style.position = "fixed";
		btn.style.left = Math.round(mapped.x - w / 2) + "px";
		btn.style.top = Math.round(mapped.y - h / 2) + "px";
		btn.style.width = w + "px";
		btn.style.height = h + "px";
		btn.style.fontSize = Math.max(12, Math.round(22 * scale)) + "px";
		btn.style.zIndex = "10002";
	}

	function showDeleteBtn() {
		state.onMainMenu = true;
		layoutDeleteBtn();
	}

	function hideDeleteBtn() {
		var btn = global.document.getElementById("gv-btn-delete");
		if (btn) btn.style.display = "none";
	}

	function confirmDelete() {
		showDeleteConfirm();
	}

	function ensureConfirmOverlay() {
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

		overlay.addEventListener("click", function (ev) {
			if (ev.target === overlay) hideDeleteConfirm();
		});
		var btnCancel = overlay.querySelector("#gv-delete-cancel");
		var btnOk = overlay.querySelector("#gv-delete-ok");
		if (btnCancel) {
			btnCancel.addEventListener("click", function (ev) {
				ev.preventDefault();
				hideDeleteConfirm();
			});
		}
		if (btnOk) {
			btnOk.addEventListener("click", function (ev) {
				ev.preventDefault();
				performDeleteAndReload();
			});
		}
		return overlay;
	}

	function showDeleteConfirm() {
		var overlay = ensureConfirmOverlay();
		overlay.classList.remove("gv-hidden");
		overlay.hidden = false;
		overlay.setAttribute("aria-hidden", "false");
	}

	function hideDeleteConfirm() {
		var overlay = global.document.getElementById("gv-confirm");
		if (!overlay) return;
		overlay.classList.add("gv-hidden");
		overlay.hidden = true;
		overlay.setAttribute("aria-hidden", "true");
	}

	function performDeleteAndReload() {
		hideDeleteConfirm();
		state.resetting = true;
		try {
			clearProgressLocal();
			var cleared = {
				cleared: true,
				CurrentLevel: 1,
				CurrentStage: 1,
				TotalScore: 0,
				savedAt: Date.now(),
				slug: GAME_SLUG,
				levelBest: {},
				Storage: {}
			};
			if (cloudEnabled()) {
				var cred = getCredentials();
				postForm(SAVE_URL, {
					gameId: cred.gid,
					token: cred.token,
					metadata: JSON.stringify(cleared),
					metaData: JSON.stringify(cleared),
					CurrentLevel: 1,
					CurrentStage: 1,
					TotalScore: 0
				}).catch(function () { /* ignore */ });
			}
		} finally {
			state.resetting = false;
		}
		logInfo("Đã xóa data — reload");
		global.location.reload();
	}

	function forceCocosResize() {
		try {
			if (typeof global.cc === "undefined" || !global.cc.EGLView) return;
			var view = global.cc.EGLView.getInstance();
			if (!view) return;
			if (typeof view._resizeEvent === "function") view._resizeEvent();
			else if (typeof view.setDesignResolutionSize === "function") {
				view.setDesignResolutionSize(800, 480, global.cc.RESOLUTION_POLICY.SHOW_ALL);
			}
		} catch (e) { /* ignore */ }
	}

	function installLayoutWatch() {
		function onLayoutChange() {
			if (state.layoutTimer) global.clearTimeout(state.layoutTimer);
			state.layoutTimer = global.setTimeout(function () {
				if (state.onMainMenu) layoutDeleteBtn();
				fitCanvasCss();
				forceCocosResize();
			}, 120);
		}
		global.addEventListener("resize", onLayoutChange);
		global.addEventListener("orientationchange", function () {
			global.setTimeout(onLayoutChange, 200);
			global.setTimeout(forceCocosResize, 450);
		});
	}

	function fitCanvasCss() {
		/* Cocos SHOW_ALL handles internal; ensure no page scroll */
		try {
			global.document.documentElement.style.overflow = "hidden";
			global.document.body.style.overflow = "hidden";
		} catch (e) { /* ignore */ }
	}

	/* -------------------------------- boot -------------------------------- */

	function init() {
		trapLoadingPreload();
		installStorageHook();
		installLayoutWatch();
		fitCanvasCss();
		ensureDeleteBtn();
		ensureConfirmOverlay();

		/* Fallback nếu trap miss — poll sát trước khi myApp chạy xong event loop */
		var loadWait = Date.now();
		(function pollLoad() {
			if (installLoadingSkipFallback()) return;
			if (Date.now() - loadWait < BOOT_WAIT_MS) global.setTimeout(pollLoad, 16);
		})();

		waitForHooks();
		loadProgress();

		/* Softgames may load SG later */
		var sgWait = Date.now();
		(function waitSg() {
			if (global.SG && typeof global.SG.redirectToPortal === "function") {
				global.SG.redirectToPortal = function () {
					logInfo("Chặn redirectToPortal (logo)");
				};
			}
			if (Date.now() - sgWait < BOOT_WAIT_MS) global.setTimeout(waitSg, 200);
		})();

		global.addEventListener("beforeunload", function () {
			if (state.dirty) {
				try {
					flushSave();
				} catch (e) { /* ignore */ }
			}
		});

		logInfo("Init " + GAME_SLUG, { gid: getCredentials().gid || "(none)" });
	}

	/* Trap Loading ngay khi script load — trước softgames/cocos */
	trapLoadingPreload();

	global.ArcadeTool = {
		init: init,
		getTotalScore: getTotalScore,
		flushSave: flushSave,
		version: "pvm-tool-v1"
	};

	if (global.document.readyState === "loading") {
		global.document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}
})(window);
