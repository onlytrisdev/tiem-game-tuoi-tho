/**
 * Arcade tool — TAKEOVER / De che (OpenFL SharedObject)
 * Cloud save/load, auto saveScore sau tran, nut Xoa data (Start only).
 */
(function (global) {
	"use strict";

	var MODULE_VERSION = "de-che-takeover-tool-v7";
	var GAME_SLUG = "de-che-chien-thuat";
	var SAVE_ID = "com.iriysoft.takeover";
	var SAVE_URL = "https://localhost/account/SaveHistoryGame";
	var LOAD_URL = "https://localhost/account/GetHistoryGame";
	var DELETE_IMG = "xoa-data-gv.png";
	var SaveDebounceMs = 5000;
	var BootTimeoutMs = 8000;
	var DESIGN_W = 1920;
	var DESIGN_H = 1080;

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
		startVisible: false,
		hooksReady: false,
		uiReady: false,
		embedWrapped: false,
		startScrRef: null
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

	function getSaveKey() {
		try {
			return String(global.location.pathname || "/") + ":" + SAVE_ID;
		} catch (e) {
			return "/:" + SAVE_ID;
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

	function clearAllSaveKeys() {
		var key = getSaveKey();
		lsRemove(key);
		try {
			lsRemove(String(global.location.href || "") + ":" + SAVE_ID);
		} catch (e) { /* ignore */ }
		try {
			if (typeof openfl_net_SharedObject !== "undefined" && openfl_net_SharedObject.__sharedObjects) {
				var map = openfl_net_SharedObject.__sharedObjects;
				if (map && map.h) {
					Object.keys(map.h).forEach(function (k) {
						if (String(k).indexOf(SAVE_ID) >= 0) delete map.h[k];
					});
				}
			}
		} catch (e2) { /* ignore */ }
	}

	function getGameContext() {
		try {
			var GA = global.GameApp || (typeof GameApp !== "undefined" ? GameApp : null);
			if (!GA) return null;
			if (GA.gm_ctx_) return GA.gm_ctx_;
			if (typeof GA.gm_ctx === "function") return GA.gm_ctx();
			if (GA.instance && typeof GA.instance === "function") {
				var app = GA.instance();
				if (app && app.gm_ctx_) return app.gm_ctx_;
			}
		} catch (e) { /* ignore */ }
		return null;
	}

	function getScoreToSend() {
		try {
			var ctx = getGameContext();
			var profile = ctx && ctx.profile;
			if (!profile || !profile.m_allCompany) return 0;
			var total = 0;
			var companies = profile.m_allCompany;
			for (var i = 0; i < companies.length; i++) {
				var c = companies[i];
				if (!c) continue;
				if (typeof c.xp === "function") total += c.xp() | 0;
				else if (typeof c.m_xp === "number") total += c.m_xp | 0;
				var levels = typeof c.levels === "function" ? c.levels() : c.m_levels;
				if (!levels) continue;
				for (var j = 0; j < levels.length; j++) {
					var lv = levels[j];
					if (!lv) continue;
					total += (lv.bestScores | 0);
				}
			}
			if (total < 0) total = 0;
			if (total > Number.MAX_SAFE_INTEGER) total = Number.MAX_SAFE_INTEGER;
			return total | 0;
		} catch (e) {
			logWarn("getScoreToSend loi", e);
			return 0;
		}
	}

	function getProgressMeta() {
		var meta = { CurrentLevel: 0, CurrentStage: 0, TotalScore: 0, companyId: -1 };
		try {
			var ctx = getGameContext();
			var profile = ctx && ctx.profile;
			if (!profile) {
				meta.TotalScore = getScoreToSend();
				return meta;
			}
			var company = typeof profile.selectedCompany === "function" ? profile.selectedCompany() : null;
			if (company) {
				if (typeof company.curLevel === "function") meta.CurrentLevel = company.curLevel() | 0;
				else if (typeof company.m_curLevel === "number") meta.CurrentLevel = company.m_curLevel | 0;
				if (typeof company.info === "function") {
					var info = company.info();
					if (info) {
						if (typeof info.number === "function") meta.CurrentStage = info.number() | 0;
						if (typeof info.id === "function") meta.companyId = info.id() | 0;
					}
				}
			}
			meta.TotalScore = getScoreToSend();
		} catch (e) { /* ignore */ }
		return meta;
	}

	function buildMetadata(rawSave) {
		var progress = getProgressMeta();
		var key = getSaveKey();
		return {
			game: GAME_SLUG,
			gameSlug: GAME_SLUG,
			CurrentLevel: progress.CurrentLevel,
			CurrentStage: progress.CurrentStage,
			TotalScore: progress.TotalScore,
			companyId: progress.companyId,
			Storage: {
				sharedObjectKey: key,
				sharedObjectData: typeof rawSave === "string" ? rawSave : ""
			},
			savedAt: new Date().toISOString()
		};
	}

	function buildClearedMetadata() {
		return {
			game: GAME_SLUG,
			gameSlug: GAME_SLUG,
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
		if (storage && typeof storage === "object") {
			if (storage.sharedObjectData) return String(storage.sharedObjectData);
			if (storage[getSaveKey()]) return String(storage[getSaveKey()]);
		}
		if (metadata.sharedObjectData) return String(metadata.sharedObjectData);
		return null;
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

	function sendSave(reason) {
		if (state.resetting) return Promise.resolve(false);
		if (!cloudEnabled()) {
			logInfo("Bo qua save (" + reason + "): cloud tat / thieu gid.");
			return Promise.resolve(false);
		}
		var cred = getCredentials();
		var raw = lsGet(getSaveKey());
		state.lastSaveAt = Date.now();
		state.dirty = false;
		var metadata = buildMetadata(raw || "");
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

	function loadProgress() {
		if (state.loadStarted) return ready;
		state.loadStarted = true;

		var run = function () {
			if (qsKill) {
				logInfo("gvsave=0 — bo qua cloud load.");
				return Promise.resolve(false);
			}
			if (!getCredentials().gid) {
				logInfo("Bo qua load: khong co gid (dev local fallback).");
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
				if (metadata.cleared) {
					logInfo("Load: cloud cleared.");
					return false;
				}
				var blob = metadataToSaveBlob(metadata);
				if (!blob) {
					logInfo("Load: metadata thieu SharedObject blob.");
					return false;
				}
				lsSet(getSaveKey(), blob);
				logInfo("Load OK: da seed " + getSaveKey());
				return true;
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

	function submitScoreAfterBattle() {
		var score = getScoreToSend();
		logInfo("Battle over -> saveScore=" + score);
		requestSave("mission-over");
		try {
			if (typeof GV === "function") {
				new GV().saveScore(score, function () { flushSave(); });
			} else {
				logWarn("GV chua san sang — bo qua saveScore.");
			}
		} catch (e) {
			logWarn("saveScore loi", e);
		}
	}

	function setStartVisible(visible) {
		state.startVisible = !!visible;
		layoutDeleteButton();
	}

	function leaveStartScreen() {
		state.startScrRef = null;
		setStartVisible(false);
	}

	function isChooseVisible(scr) {
		try {
			if (!scr || !scr.choose_) return false;
			if (typeof scr.choose_.get_visible === "function") return !!scr.choose_.get_visible();
			if (scr.choose_.visible != null) return !!scr.choose_.visible;
		} catch (e) { /* ignore */ }
		return false;
	}

	function onStartScrReady(scr) {
		state.startScrRef = scr || null;
		/* show_companies_ / choose overlay — chi hien khi Start thuần (co BAT DAU) */
		if ((scr && scr.show_companies_) || isChooseVisible(scr)) {
			setStartVisible(false);
			logInfo("StartScr ready nhung dang chon phe — an nut");
			return;
		}
		setStartVisible(true);
		logInfo("StartScr ready — hien nut Xoa data");
	}

	function isLocalHost() {
		var h = (global.location && global.location.hostname) || "";
		return h === "localhost" || h === "127.0.0.1" || h === "test.game" || /\.local$/i.test(h);
	}

	function isStubGvAdBreak(fn) {
		try {
			return String(Function.prototype.toString.call(fn)).indexOf("Không hỗ trợ") >= 0;
		} catch (e) {
			return false;
		}
	}

	/** §21 — GVAdBreak rồi moi grant; localhost/stub MAY grant. */
	function runGvAdBreakThen(onRewarded, onFail) {
		var gv = global.GVAdBreak;
		if (typeof gv === "function" && !isStubGvAdBreak(gv)) {
			logInfo("GV_AD_BREAK_START");
			try {
				gv(function () {
					logInfo("GV_AD_BREAK_DONE");
					if (typeof onRewarded === "function") onRewarded();
				});
				return;
			} catch (e) {
				logWarn("GV_ADBREAK_FAIL", e);
				if (isLocalHost()) {
					if (typeof onRewarded === "function") onRewarded();
				} else if (typeof onFail === "function") {
					onFail();
				}
				return;
			}
		}
		logWarn("GV_ADBREAK_MISSING");
		if (isLocalHost() || (typeof gv === "function" && isStubGvAdBreak(gv))) {
			if (typeof onRewarded === "function") onRewarded();
		} else if (typeof onFail === "function") {
			onFail();
		}
	}

	function finishNativeRewarded(app, granted) {
		try {
			app.reward_ = !!granted;
			if (typeof app.OnAdShow === "function") {
				app.OnAdShow(-1, true);
				app.OnAdShow(-1, false);
			} else if (typeof app.on_showed_ === "function") {
				app.on_showed_(!!granted);
				app.on_showed_ = null;
				app.reward_ = false;
			}
		} catch (e) {
			logWarn("finishNativeRewarded loi", e);
		}
	}

	function installGameplayHooks() {
		if (state.hooksReady) return true;
		var GA = global.GameApp || (typeof GameApp !== "undefined" ? GameApp : null);
		var GC = global.GameContext || (typeof GameContext !== "undefined" ? GameContext : null);
		var Battle = global.ui_BattleScr || (typeof ui_BattleScr !== "undefined" ? ui_BattleScr : null);
		var StartScr = global.ui_StartScr || (typeof ui_StartScr !== "undefined" ? ui_StartScr : null);
		if (!GA || !GC || !Battle || !StartScr) return false;
		if (!GA.prototype || !GC.prototype || !Battle.prototype || !StartScr.prototype) return false;

		try {
			if (!GC.prototype.__gvSavePatched) {
				var origSave = GC.prototype.Save;
				GC.prototype.Save = function () {
					var result = origSave.apply(this, arguments);
					try {
						if (!state.resetting) requestSave("GameContext.Save");
					} catch (e) { /* ignore */ }
					return result;
				};
				GC.prototype.__gvSavePatched = true;
			}

			if (!Battle.prototype.__gvMissionPatched) {
				var origMission = Battle.prototype.onMissionOver;
				Battle.prototype.onMissionOver = function (_stat) {
					var result = origMission.apply(this, arguments);
					try { submitScoreAfterBattle(); } catch (e) { logWarn("hook onMissionOver", e); }
					return result;
				};
				Battle.prototype.__gvMissionPatched = true;
			}

			if (!StartScr.prototype.__gvStartReadyPatched) {
				var origStartInit = StartScr.prototype.initAfterLoading;
				StartScr.prototype.initAfterLoading = function () {
					var result = origStartInit.apply(this, arguments);
					try { onStartScrReady(this); } catch (e) { logWarn("StartScr ready hook", e); }
					return result;
				};

				var origShowChoose = StartScr.prototype.ShowChooseWindow;
				StartScr.prototype.ShowChooseWindow = function () {
					setStartVisible(false);
					return origShowChoose.apply(this, arguments);
				};

				var origChooseHided = StartScr.prototype.OnChooseHided;
				StartScr.prototype.OnChooseHided = function () {
					var result = origChooseHided.apply(this, arguments);
					try {
						state.startScrRef = this;
						setStartVisible(true);
						logInfo("Dong chon phe — hien lai nut Xoa data");
					} catch (e) { /* ignore */ }
					return result;
				};

				StartScr.prototype.__gvStartReadyPatched = true;
			}

			if (!GA.prototype.__gvScreenPatched) {
				var hideOn = ["CreateMapScr", "CreateBattleScr", "CreateEdictsScr", "CreateBadgesScr", "CreateMissionOverScr", "CreateCongratsScr"];
				hideOn.forEach(function (name) {
					if (typeof GA.prototype[name] !== "function") return;
					var orig = GA.prototype[name];
					GA.prototype[name] = function () {
						leaveStartScreen();
						return orig.apply(this, arguments);
					};
				});
				GA.prototype.__gvScreenPatched = true;
			}

			/* §21 rewarded: nut button_reward tren man ket thuc tran */
			if (!GA.prototype.__gvRewardPatched) {
				var origIsReady = GA.prototype.IsRewardedReady;
				GA.prototype.IsRewardedReady = function () {
					if (typeof global.GVAdBreak === "function") return true;
					return typeof origIsReady === "function" ? origIsReady.apply(this, arguments) : false;
				};

				GA.prototype.ShowRewarded = function (on_showed, _reward) {
					var self = this;
					try {
						if (typeof self.ShowWaitScr === "function") self.ShowWaitScr();
					} catch (e) { /* ignore */ }
					self.reward_ = false;
					self.on_showed_ = on_showed;
					runGvAdBreakThen(
						function () { finishNativeRewarded(self, true); },
						function () { finishNativeRewarded(self, false); }
					);
				};

				GA.prototype.__gvRewardPatched = true;
				logInfo("GV_AD_REWARD_PATCHED");
			}

			state.hooksReady = true;
			logInfo("Da hook Save + StartScr + onMissionOver + GVAdBreak rewarded");
			return true;
		} catch (e) {
			logWarn("installGameplayHooks loi", e);
			return false;
		}
	}

	function waitAndHook() {
		wrapLimeEmbed();
		if (installGameplayHooks()) return;
		var tries = 0;
		var timer = global.setInterval(function () {
			tries++;
			wrapLimeEmbed();
			if (installGameplayHooks() || tries > 300) {
				global.clearInterval(timer);
				if (!state.hooksReady) logWarn("Hook timeout — nut Xoa data chi hien khi StartScr ready.");
			}
		}, 100);
	}

	function ensureOverlay() {
		if (state.uiReady) return;
		var doc = global.document;
		if (!doc || !doc.body) return;

		var style = doc.createElement("style");
		style.textContent =
			"#gv-ui-overlay{position:fixed;inset:0;z-index:99990;pointer-events:none;}" +
			"#gv-btn-xoa{position:fixed;pointer-events:auto;border:0;padding:0;background:transparent;" +
			"cursor:pointer;-webkit-tap-highlight-color:transparent;display:none;}" +
			"#gv-btn-xoa img{display:block;width:100%;height:auto;}";
		doc.head.appendChild(style);

		var overlay = doc.createElement("div");
		overlay.id = "gv-ui-overlay";

		var btn = doc.createElement("button");
		btn.id = "gv-btn-xoa";
		btn.type = "button";
		btn.setAttribute("aria-label", "Xoa du lieu");
		btn.title = "Xóa dữ liệu";
		btn.innerHTML = '<img src="' + DELETE_IMG + '" alt="Xóa dữ liệu">';
		btn.addEventListener("click", onDeleteClick);
		overlay.appendChild(btn);
		doc.body.appendChild(overlay);

		state.uiReady = true;
		global.addEventListener("resize", layoutDeleteButton);
		global.addEventListener("orientationchange", function () {
			global.setTimeout(layoutDeleteButton, 200);
		});
		layoutDeleteButton();
	}

	/* Chi lay Y cua BAT DAU de ngang hang — KHONG lay X (bounds X hay bi lech ve tam Start) */
	function tryStartButtonCenterY(rect, size) {
		try {
			var scr = state.startScrRef;
			if (!scr || !scr.start_) return null;
			var b = scr.start_;
			var stage = null;
			if (b.stage) stage = b.stage;
			else if (typeof openfl_Lib !== "undefined" && openfl_Lib.get_current) {
				stage = openfl_Lib.get_current().stage;
			}
			if (!stage || typeof b.getBounds !== "function") return null;
			var bounds = b.getBounds(stage);
			if (!bounds) return null;
			var sw = stage.stageWidth || DESIGN_W;
			var sh = stage.stageHeight || DESIGN_H;
			var scale = Math.min(rect.width / sw, rect.height / sh);
			var oy = rect.top + (rect.height - sh * scale) / 2;
			var top = oy + (bounds.y + bounds.height * 0.5) * scale - size * 0.5;
			var relY = (top - rect.top) / Math.max(1, rect.height);
			if (relY < 0.65 || relY > 0.95) return null;
			return top;
		} catch (e) {
			return null;
		}
	}

	function layoutDeleteButton() {
		ensureOverlay();
		var btn = global.document.getElementById("gv-btn-xoa");
		if (!btn) return;
		if (!state.startVisible) {
			btn.style.display = "none";
			return;
		}

		var host = global.document.getElementById("openfl-content") || global.document.body;
		var rect = host.getBoundingClientRect();
		var size = Math.max(48, Math.min(64, Math.round(rect.height * 0.07)));
		/* X: ben phai BAT DAU + 60px; Y: ngang tam Start + 60px xuong */
		var left = rect.left + rect.width * 0.88 + 60;
		var top = tryStartButtonCenterY(rect, size);
		if (top == null) top = rect.top + rect.height * 0.78;
		top += 60;

		var maxLeft = rect.left + rect.width - size - 8;
		var maxTop = rect.top + rect.height - size - 8;
		if (left > maxLeft) left = maxLeft;
		if (left < rect.left + rect.width * 0.75) left = rect.left + rect.width * 0.75;
		if (top > maxTop) top = maxTop;
		if (top < rect.top + 8) top = rect.top + 8;

		btn.style.display = "block";
		btn.style.width = size + "px";
		btn.style.left = Math.round(left) + "px";
		btn.style.top = Math.round(top) + "px";
	}

	function wrapLimeEmbed() {
		if (state.embedWrapped) return;
		var lime = global.lime;
		if (!lime || typeof lime.embed !== "function") return;
		state.embedWrapped = true;
		var origEmbed = lime.embed;
		lime.embed = function () {
			var result = origEmbed.apply(this, arguments);
			try {
				setStartVisible(false);
				waitAndHook();
				logInfo("lime.embed xong — cho StartScr.initAfterLoading");
			} catch (e) {
				logWarn("post-embed hook loi", e);
			}
			return result;
		};
		logInfo("Da wrap lime.embed");
	}

	function onDeleteClick(ev) {
		if (ev) {
			ev.preventDefault();
			ev.stopPropagation();
		}
		var ok = global.confirm("Bạn chắc chắn muốn xóa tất cả dữ liệu game và chơi lại từ đầu?");
		if (!ok) return;
		wipeAndReload();
	}

	function wipeAndReload() {
		state.resetting = true;
		try {
			var ctx = getGameContext();
			if (ctx && ctx.save_data) {
				if (typeof ctx.save_data.eraseSave === "function") ctx.save_data.eraseSave(true);
				else if (typeof ctx.save_data.resetSave === "function") ctx.save_data.resetSave(true);
			}
			if (ctx && ctx.profile && typeof ctx.profile.reset === "function") ctx.profile.reset();
		} catch (e) {
			logWarn("eraseSave runtime", e);
		}
		clearAllSaveKeys();

		var afterCloud = function () { global.location.reload(); };

		if (cloudEnabled()) {
			var cred = getCredentials();
			var metadata = buildClearedMetadata();
			postForm(SAVE_URL, {
				gameId: cred.gid,
				token: cred.token,
				metadata: JSON.stringify(metadata),
				metaData: JSON.stringify(metadata),
				CurrentLevel: 0,
				CurrentStage: 0,
				TotalScore: 0
			}).then(afterCloud).catch(afterCloud);
		} else {
			afterCloud();
		}
	}

	function installFlushListeners() {
		global.addEventListener("visibilitychange", function () {
			if (global.document.visibilityState === "hidden") flushSave();
		});
		global.addEventListener("pagehide", function () { flushSave(); });
	}

	function init() {
		logInfo("init " + MODULE_VERSION);
		ensureOverlay();
		setStartVisible(false);
		installFlushListeners();
		wrapLimeEmbed();
		waitAndHook();
		loadProgress();
	}

	/* FEATURE Logo / BXH / nut Gui diem thu cong: khong yeu cau — giu comment */

	global.ArcadeTool = {
		ready: ready,
		init: init,
		getScoreToSend: getScoreToSend,
		flushSave: flushSave,
		version: MODULE_VERSION
	};

	if (global.document && global.document.readyState === "loading") {
		global.document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}
})(typeof window !== "undefined" ? window : this);
