/**
 * Arcade tool — Đầm lầy chết chóc (Construct 2 / SA0220*)
 * - Cloud Get/SaveHistoryGame (toàn bộ key SA0220*)
 * - GV.saveScore = tổng best theo từng Stage (SA0220levelBests)
 * - Font: SpriteFontPlus + Text → gamefont.ttf
 * - Tắt Blood tint + HitFx khi bắn (mọi quái)
 * - Chặn GoToURL / GoToURLWindow (click blank)
 *
 * Feature không yêu cầu (logo / xóa data / BXH) giữ trong khối comment.
 */
(function (global) {
	"use strict";

	var MODULE_VERSION = "dam-lay-chet-choc-tool-v2";
	var GAME_SLUG = "dam-lay-chet-choc";
	var SAVE_URL = "https://localhost/account/SaveHistoryGame";
	var LOAD_URL = "https://localhost/account/GetHistoryGame";
	var KODE = "SA0220";
	var FONT_FAMILY = "GameFont";
	var FONT_URL = "gamefont.ttf";
	var SAVE_DEBOUNCE_MS = 60000;
	var BOOT_TIMEOUT_MS = 8000;
	var STORAGE_TIMEOUT_MS = 2000;
	var LEVEL_BESTS_SUFFIX = "levelBests";

	var SAVE_SUFFIXES = [
		"UnlockLvl",
		"gold",
		"highscore",
		LEVEL_BESTS_SUFFIX,
		"totPlay",
		"totGoldCollect",
		"totKillEnemy",
		"removeAds",
		"UpHp",
		"UpSGAmmo",
		"UpSGDamage",
		"UpMP4Clip",
		"UpMP4Damage",
		"UpFTClip",
		"UpFTDamage",
		"UpDynamite",
		"UpFridge",
		"UpPaperPlane",
		"UpAcidRain",
		"UpSplitShoot"
	];

	var qsKill = false;
	var qsDebug = false;
	try {
		var bootQs = new URLSearchParams(global.location.search);
		qsKill = bootQs.get("gvsave") === "0";
		qsDebug = bootQs.get("gv_debug") === "1";
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
		uiReady: false,
		layoutName: "",
		scorePopupLayout: "",
		effectsPatched: false,
		hitGroupDisabled: false,
		spawnHitFxPatched: false,
		fontPatched: false,
		browserPatched: false,
		lsPatched: false,
		applyingCareerScore: false,
		expectedUpdatedAt: null
	};

	var readyResolve;
	var ready = new Promise(function (resolve) {
		readyResolve = resolve;
	});

	function finishReady(result) {
		if (readyResolve) {
			readyResolve(result || { ok: true });
			readyResolve = null;
		}
		return result;
	}

	function logInfo(msg, d) {
		if (global.console && console.info) {
			if (d !== undefined) console.info("[ArcadeTool] " + msg, d);
			else console.info("[ArcadeTool] " + msg);
		}
	}

	function logWarn(msg, d) {
		if (global.console && console.warn) {
			if (d !== undefined) console.warn("[ArcadeTool] " + msg, d);
			else console.warn("[ArcadeTool] " + msg);
		}
	}

	function logDbg(msg, d) {
		if (!qsDebug) return;
		logInfo(msg, d);
	}

	/* ============================ credentials ============================ */

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

	/* ============================ Construct helpers ============================ */

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

	function getGlobalVar(name) {
		var rt = getRuntime();
		if (!rt) return null;
		var list = rt.all_global_vars || rt.global_vars || null;
		if (!list || !list.length) return null;
		for (var i = 0; i < list.length; i++) {
			var v = list[i];
			if (v && v.name === name) return v;
		}
		return null;
	}

	function readGlobalNumber(name, fallback) {
		var v = getGlobalVar(name);
		if (!v) return fallback;
		var n = parseFloat(v.data);
		return isNaN(n) ? fallback : n;
	}

	function setGlobalNumber(name, value) {
		var v = getGlobalVar(name);
		if (!v) return;
		v.data = value;
	}

	/* ============================ storage ============================ */

	function storageKey(suffix) {
		return KODE + suffix;
	}

	function isGameSaveKey(key) {
		var k = String(key || "");
		if (k.indexOf(KODE) === 0) return true;
		for (var i = 0; i < SAVE_SUFFIXES.length; i++) {
			if (k === storageKey(SAVE_SUFFIXES[i])) return true;
		}
		return false;
	}

	function getLocalforage() {
		return global.localforage && typeof global.localforage.getItem === "function"
			? global.localforage
			: null;
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
		} catch (e) { /* ignore */ }
	}

	function lsRemove(key) {
		try {
			global.localStorage.removeItem(key);
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
				resolve(value == null ? lsGet(key) : String(value));
			};
			try {
				store.getItem(key, function (error, value) {
					if (error || value === null || value === undefined) finish(null);
					else finish(value);
				});
			} catch (e) {
				finish(null);
			}
			setTimeout(function () {
				finish(null);
			}, STORAGE_TIMEOUT_MS);
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
			setTimeout(finish, STORAGE_TIMEOUT_MS);
		});
	}

	function toNumber(raw, fallback) {
		var parsed = parseFloat(raw);
		return isNaN(parsed) ? fallback : parsed;
	}

	/* ============================ level bests / career score ============================ */

	function parseLevelBests(raw) {
		if (raw == null || raw === "") return {};
		var obj = raw;
		if (typeof raw === "string") {
			try {
				obj = JSON.parse(raw);
			} catch (e) {
				return {};
			}
		}
		if (!obj || typeof obj !== "object" || Array.isArray(obj)) return {};
		var out = {};
		for (var k in obj) {
			if (!Object.prototype.hasOwnProperty.call(obj, k)) continue;
			var n = Math.max(0, Math.floor(toNumber(obj[k], 0)));
			if (n > 0) out[String(k)] = n;
		}
		return out;
	}

	function sumLevelBests(bests) {
		var sum = 0;
		if (!bests) return 0;
		for (var k in bests) {
			if (!Object.prototype.hasOwnProperty.call(bests, k)) continue;
			sum += Math.max(0, Math.floor(toNumber(bests[k], 0)));
		}
		return sum;
	}

	function readLevelBestsSync() {
		return parseLevelBests(lsGet(storageKey(LEVEL_BESTS_SUFFIX)));
	}

	function writeCareerFromBests(bests) {
		var career = sumLevelBests(bests);
		state.applyingCareerScore = true;
		try {
			lsSet(storageKey(LEVEL_BESTS_SUFFIX), JSON.stringify(bests || {}));
			lsSet(storageKey("highscore"), String(career));
			setGlobalNumber("highscore", career);
		} finally {
			state.applyingCareerScore = false;
		}
		return career;
	}

	/**
	 * Cập nhật best của Stage hiện tại rồi trả career = tổng best các level.
	 * Chơi lại cùng level chỉ giữ max(score session, best cũ).
	 */
	function applySessionScoreToLevelBests() {
		var stage = Math.max(1, Math.floor(readGlobalNumber("Stage", 1)));
		var sessionScore = Math.max(0, Math.floor(readGlobalNumber("score", 0)));
		var bests = readLevelBestsSync();
		var prev = toNumber(bests[String(stage)], 0);
		bests[String(stage)] = Math.max(prev, sessionScore);
		var career = writeCareerFromBests(bests);
		logInfo(
			"Level best Stage=" + stage +
			" session=" + sessionScore +
			" best=" + bests[String(stage)] +
			" career=" + career
		);
		return career;
	}

	function careerScoreFromStorage() {
		var bests = readLevelBestsSync();
		if (Object.keys(bests).length) return sumLevelBests(bests);
		/* Migrate: chưa có levelBests → giữ highscore cũ đến trận có tool ghi best */
		return Math.max(0, Math.floor(toNumber(lsGet(storageKey("highscore")), 0)));
	}

	function coerceHighscoreWrite(incoming) {
		var bests = readLevelBestsSync();
		if (Object.keys(bests).length) {
			/* Đã có best theo level — không nhận highscore += score của game */
			return String(sumLevelBests(bests));
		}
		return String(Math.max(0, Math.floor(toNumber(incoming, 0))));
	}

	/* ============================ metadata ============================ */

	function buildMetadataFromKeys(map) {
		var bests = parseLevelBests(map[LEVEL_BESTS_SUFFIX]);
		var career = Object.keys(bests).length
			? sumLevelBests(bests)
			: toNumber(map.highscore, 0);
		var unlock = toNumber(map.UnlockLvl, 0);
		map.highscore = String(career);
		map[LEVEL_BESTS_SUFFIX] = JSON.stringify(bests);
		return {
			game: GAME_SLUG,
			CurrentLevel: unlock,
			CurrentStage: unlock,
			TotalScore: career,
			HighScore: career,
			LevelBests: bests,
			Gold: toNumber(map.gold, 0),
			TotPlay: toNumber(map.totPlay, 0),
			TotGoldCollect: toNumber(map.totGoldCollect, 0),
			TotKillEnemy: toNumber(map.totKillEnemy, 0),
			RemoveAds: toNumber(map.removeAds, 0),
			Upgrades: {
				UpHp: toNumber(map.UpHp, 0),
				UpSGAmmo: toNumber(map.UpSGAmmo, 0),
				UpSGDamage: toNumber(map.UpSGDamage, 0),
				UpMP4Clip: toNumber(map.UpMP4Clip, 0),
				UpMP4Damage: toNumber(map.UpMP4Damage, 0),
				UpFTClip: toNumber(map.UpFTClip, 0),
				UpFTDamage: toNumber(map.UpFTDamage, 0),
				UpDynamite: toNumber(map.UpDynamite, 0),
				UpFridge: toNumber(map.UpFridge, 0),
				UpPaperPlane: toNumber(map.UpPaperPlane, 0),
				UpAcidRain: toNumber(map.UpAcidRain, 0),
				UpSplitShoot: toNumber(map.UpSplitShoot, 0)
			},
			Storage: map,
			savedAt: new Date().toISOString()
		};
	}

	function collectLocalMap() {
		var tasks = SAVE_SUFFIXES.map(function (suffix) {
			var key = storageKey(suffix);
			return readKey(key).then(function (val) {
				return { suffix: suffix, value: val };
			});
		});
		return Promise.all(tasks).then(function (rows) {
			var map = {};
			for (var i = 0; i < rows.length; i++) {
				if (rows[i].value !== null && rows[i].value !== undefined && rows[i].value !== "") {
					map[rows[i].suffix] = String(rows[i].value);
				}
			}
			return map;
		});
	}

	function applyStorageMap(map) {
		if (!map || typeof map !== "object") return Promise.resolve(false);
		var writes = [];
		var bests = parseLevelBests(map[LEVEL_BESTS_SUFFIX]);
		if (Object.keys(bests).length) {
			map[LEVEL_BESTS_SUFFIX] = JSON.stringify(bests);
			map.highscore = String(sumLevelBests(bests));
		}
		/* Seed cloud: ghi đè nguyên bản để restore đúng tiến trình account. */
		state.seeding = true;
		for (var i = 0; i < SAVE_SUFFIXES.length; i++) {
			var suffix = SAVE_SUFFIXES[i];
			if (!Object.prototype.hasOwnProperty.call(map, suffix)) continue;
			var val = map[suffix];
			if (val === null || val === undefined) continue;
			if (typeof val === "object") val = JSON.stringify(val);
			writes.push(writeKey(storageKey(suffix), String(val)));
		}
		return Promise.all(writes).then(function () {
			state.seeding = false;
			return writes.length > 0;
		}).catch(function (err) {
			state.seeding = false;
			throw err;
		});
	}

	function metadataToStorageMap(metadata) {
		if (!metadata || typeof metadata !== "object" || metadata.cleared) return null;
		var map = {};
		if (metadata.Storage && typeof metadata.Storage === "object") {
			map = {};
			for (var sk in metadata.Storage) {
				if (Object.prototype.hasOwnProperty.call(metadata.Storage, sk)) {
					map[sk] = metadata.Storage[sk];
				}
			}
		}
		if (metadata.LevelBests && typeof metadata.LevelBests === "object") {
			map[LEVEL_BESTS_SUFFIX] = JSON.stringify(parseLevelBests(metadata.LevelBests));
		} else if (map[LEVEL_BESTS_SUFFIX] && typeof map[LEVEL_BESTS_SUFFIX] === "object") {
			map[LEVEL_BESTS_SUFFIX] = JSON.stringify(parseLevelBests(map[LEVEL_BESTS_SUFFIX]));
		}
		var bests = parseLevelBests(map[LEVEL_BESTS_SUFFIX]);
		if (Object.keys(bests).length) {
			map.highscore = String(sumLevelBests(bests));
			map[LEVEL_BESTS_SUFFIX] = JSON.stringify(bests);
		} else {
			if (metadata.HighScore != null) map.highscore = metadata.HighScore;
			else if (metadata.TotalScore != null) map.highscore = metadata.TotalScore;
		}
		if (metadata.Gold != null) map.gold = metadata.Gold;
		if (metadata.CurrentLevel != null) map.UnlockLvl = metadata.CurrentLevel;
		else if (metadata.CurrentStage != null) map.UnlockLvl = metadata.CurrentStage;
		if (metadata.TotPlay != null) map.totPlay = metadata.TotPlay;
		if (metadata.TotGoldCollect != null) map.totGoldCollect = metadata.TotGoldCollect;
		if (metadata.TotKillEnemy != null) map.totKillEnemy = metadata.TotKillEnemy;
		if (metadata.RemoveAds != null) map.removeAds = metadata.RemoveAds;
		if (metadata.Upgrades && typeof metadata.Upgrades === "object") {
			var u = metadata.Upgrades;
			for (var k in u) {
				if (Object.prototype.hasOwnProperty.call(u, k)) map[k] = u[k];
			}
		}
		return Object.keys(map).length ? map : null;
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
		if (res.Data.UpdatedAt != null) state.expectedUpdatedAt = res.Data.UpdatedAt;
		var raw = res.Data.MetaData || res.Data.metaData || res.Data.metadata;
		if (!raw) return null;
		try {
			return typeof raw === "string" ? JSON.parse(raw) : raw;
		} catch (e) {
			return null;
		}
	}

	/* ============================ save / load ============================ */

	function sendSave(reason) {
		if (state.resetting) return Promise.resolve(false);
		if (!cloudEnabled()) {
			logInfo("Bỏ qua save (" + reason + "): cloud tắt / thiếu gid.");
			return Promise.resolve(false);
		}
		var cred = getCredentials();
		state.lastSaveAt = Date.now();
		state.dirty = false;

		return collectLocalMap().then(function (map) {
			if (!Object.keys(map).length) {
				logInfo("Bỏ qua save (" + reason + "): chưa có data local.");
				return false;
			}
			var metadata = buildMetadataFromKeys(map);
			var fields = {
				gameId: cred.gid,
				token: cred.token,
				metadata: JSON.stringify(metadata),
				metaData: JSON.stringify(metadata),
				CurrentLevel: metadata.CurrentLevel,
				CurrentStage: metadata.CurrentStage,
				TotalScore: metadata.TotalScore
			};
			if (state.expectedUpdatedAt != null) {
				fields.expectedUpdatedAt = String(state.expectedUpdatedAt);
			}
			return postForm(SAVE_URL, fields).then(function (res) {
				if (res && res.Status === 1) {
					if (res.Data && res.Data.UpdatedAt != null) {
						state.expectedUpdatedAt = res.Data.UpdatedAt;
					}
					logInfo("Save OK (" + reason + ") HighScore=" + metadata.HighScore);
					return true;
				}
				if (res && res.Status === 409) {
					logWarn("Save 409 — refetch rồi retry", res);
					return loadProgress(true).then(function () {
						return sendSave(reason + "-retry409");
					});
				}
				logWarn("Save failed (" + reason + ")", res);
				return false;
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
		if (elapsed >= SAVE_DEBOUNCE_MS) {
			sendSave(state.pendingSaveReason);
			return;
		}
		if (state.pendingSaveTimer) return;
		state.pendingSaveTimer = global.setTimeout(function () {
			state.pendingSaveTimer = 0;
			sendSave(state.pendingSaveReason);
		}, Math.max(250, SAVE_DEBOUNCE_MS - elapsed));
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

	function installDirtyHooks() {
		if (state.lsPatched) return;
		state.lsPatched = true;

		try {
			var origSet = global.localStorage.setItem.bind(global.localStorage);
			global.localStorage.setItem = function (key, value) {
				var k = String(key);
				var v = value;
				if (
					!state.resetting &&
					!state.seeding &&
					!state.applyingCareerScore &&
					k === storageKey("highscore")
				) {
					v = coerceHighscoreWrite(v);
				}
				var result = origSet(k, v);
				if (!state.resetting && !state.seeding && isGameSaveKey(k)) {
					requestSave("localStorage");
				}
				return result;
			};
		} catch (e) {
			logWarn("Không patch localStorage.setItem", e);
		}

		var tryPatchLocalforage = function () {
			var store = getLocalforage();
			if (!store || store.__gvPatchedSetItem) return !!store;
			var original = store.setItem.bind(store);
			store.setItem = function (key, value, callback) {
				var k = String(key);
				var v = value;
				if (
					!state.resetting &&
					!state.seeding &&
					!state.applyingCareerScore &&
					k === storageKey("highscore")
				) {
					v = coerceHighscoreWrite(v);
				}
				var result = original(k, v, callback);
				if (!state.resetting && !state.seeding && isGameSaveKey(k)) {
					requestSave("localforage");
				}
				return result;
			};
			store.__gvPatchedSetItem = true;
			logInfo("Đã hook localforage.setItem");
			return true;
		};

		if (!tryPatchLocalforage()) {
			var started = Date.now();
			var timer = global.setInterval(function () {
				if (tryPatchLocalforage() || Date.now() - started > 10000) {
					global.clearInterval(timer);
				}
			}, 100);
		}
	}

	function loadProgress(isRetry) {
		if (state.loadStarted && !isRetry) return ready;
		if (!isRetry) state.loadStarted = true;

		var run = function () {
			installDirtyHooks();
			injectFontFace();

			if (qsKill) {
				logInfo("gvsave=0 — bỏ qua cloud load.");
				return Promise.resolve({ ok: true, skipped: true });
			}
			if (!getCredentials().gid) {
				logInfo("Bỏ qua load: không có gid.");
				return Promise.resolve({ ok: true, skipped: true });
			}
			if (isOfflineCloudHost()) {
				logInfo("Bỏ qua load: host offline.");
				return Promise.resolve({ ok: true, skipped: true });
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
					return { ok: true, empty: true };
				}
				if (metadata.cleared) {
					logInfo("Load: cloud cleared.");
					return { ok: true, cleared: true };
				}
				var map = metadataToStorageMap(metadata);
				if (!map) {
					logInfo("Load: metadata thiếu Storage.");
					return { ok: true, empty: true };
				}
				return applyStorageMap(map).then(function (applied) {
					logInfo("Load OK: seed SA0220* keys (career=" + careerScoreFromStorage() + ")");
					return { ok: true, applied: applied };
				});
			}).catch(function (error) {
				logWarn("Load lỗi: " + (error && error.message ? error.message : error));
				return { ok: false, error: true };
			});
		};

		if (isRetry) return run();

		var timed = new Promise(function (resolve) {
			setTimeout(function () {
				resolve({ ok: true, timeout: true });
			}, BOOT_TIMEOUT_MS);
		});

		Promise.race([run(), timed]).then(finishReady, function () {
			finishReady({ ok: false });
		});
		return ready;
	}

	/* ============================ score popup ============================ */

	function readHighscoreSync() {
		return careerScoreFromStorage();
	}

	function submitScore(n) {
		var score = Math.max(0, Math.floor(toNumber(n, readHighscoreSync())));
		if (typeof global.GV !== "function") {
			logWarn("GV chưa sẵn sàng — bỏ qua saveScore.");
			return false;
		}
		try {
			new global.GV().saveScore(score, function () {
				flushSave();
			});
			logInfo("saveScore(" + score + ") career=sum(levelBests)");
			return true;
		} catch (e) {
			try {
				new global.GV().saveScore(score);
				logInfo("saveScore(" + score + ") no-callback");
				return true;
			} catch (e2) {
				logWarn("saveScore lỗi", e2);
				return false;
			}
		}
	}

	function maybePopupScoreOnResult() {
		var layout = getLayoutName();
		state.layoutName = layout;
		if (layout !== "L_Result") {
			if (state.scorePopupLayout === "L_Result") state.scorePopupLayout = "";
			return;
		}
		if (state.scorePopupLayout === "L_Result") return;
		state.scorePopupLayout = "L_Result";

		/* Đợi Result Init set score/Stage, rồi ghi best theo level + career */
		global.setTimeout(function () {
			var career = applySessionScoreToLevelBests();
			submitScore(career);
			requestSave("result");
		}, 450);
	}

	/* ============================ blood FX ============================ */

	function typeHasHitFxTexture(typeObj) {
		if (!typeObj || !typeObj.animations) return false;
		try {
			for (var a = 0; a < typeObj.animations.length; a++) {
				var frames = typeObj.animations[a].frames || [];
				for (var f = 0; f < frames.length; f++) {
					var tex = String((frames[f] && frames[f].texture_file) || "");
					if (tex.toLowerCase().indexOf("hitfx") >= 0) return true;
				}
			}
		} catch (e) { /* ignore */ }
		return false;
	}

	function rebindCachedFuncs(origList, replacement) {
		var rebound = 0;
		var list = origList || [];
		var rt = getRuntime();
		var tables = [];
		if (rt && rt.objectRefTable) tables.push(rt.objectRefTable);
		try {
			if (typeof cr.getObjectRefTable === "function") {
				tables.push(cr.getObjectRefTable());
			}
		} catch (e0) { /* ignore */ }

		for (var t = 0; t < tables.length; t++) {
			var table = tables[t];
			if (!table || !table.length) continue;
			for (var i = 0; i < table.length; i++) {
				for (var o = 0; o < list.length; o++) {
					if (list[o] && table[i] === list[o]) {
						table[i] = replacement;
						rebound++;
						break;
					}
				}
			}
		}

		if (rt) {
			var sheets = rt.eventsheets_by_index || [];
			for (var s = 0; s < sheets.length; s++) {
				var sheet = sheets[s];
				if (!sheet) continue;
				if (sheet.events && sheet.events.length) {
					for (var e = 0; e < sheet.events.length; e++) {
						rebound += rebindActionFunc(sheet.events[e], list[0], list[1] || list[0], replacement);
					}
				}
				rebound += walkTriggerMap(sheet.triggers, list[0], list[1] || list[0], replacement);
				rebound += walkTriggerMap(sheet.fasttriggers, list[0], list[1] || list[0], replacement);
			}
		}
		return rebound;
	}

	function disableHitEventGroup() {
		var rt = getRuntime();
		if (!rt || !rt.groups_by_name) return false;
		var g = rt.groups_by_name["hit"];
		if (!g || typeof g.setGroupActive !== "function") return false;
		if (g.group_active) {
			g.setGroupActive(false);
			logInfo("Đã tắt event group Hit (HitFx spawn)");
		}
		state.hitGroupDisabled = true;
		return true;
	}

	function patchBloodEffects() {
		try {
			if (!global.cr || !cr.plugins_ || !cr.plugins_.Sprite) return;
			var acts = cr.plugins_.Sprite.prototype.acts;
			if (!acts || typeof acts.SetEffectEnabled !== "function") return;

			if (!acts.__gvOrigSetEffectEnabled) {
				acts.__gvOrigSetEffectEnabled = acts.SetEffectEnabled;
			}
			var orig = acts.__gvOrigSetEffectEnabled;
			if (typeof orig !== "function") return;

			if (!acts.__gvBloodWrapped) {
				acts.__gvBloodWrapped = function (enable_, effectname_) {
					var name = String(effectname_ || "");
					if (name.toLowerCase() === "blood") {
						return orig.call(this, 0, effectname_);
					}
					return orig.apply(this, arguments);
				};
			}
			acts.SetEffectEnabled = acts.__gvBloodWrapped;
			acts.__gvBloodPatched = true;

			var rebound = rebindCachedFuncs([orig], acts.__gvBloodWrapped);
			if (rebound > 0 && !state.effectsPatched) {
				logInfo("Blood tint disabled (rebind " + rebound + ")");
			}
			state.effectsPatched = true;
		} catch (e) {
			logWarn("Không patch Blood effect", e);
		}
	}

	function patchSpawnHitFx() {
		try {
			if (!global.cr || !cr.plugins_ || !cr.plugins_.Sprite) return;
			var acts = cr.plugins_.Sprite.prototype.acts;
			if (!acts || typeof acts.Spawn !== "function") return;

			if (!acts.__gvOrigSpawn) {
				acts.__gvOrigSpawn = acts.Spawn;
			}
			var origSpawn = acts.__gvOrigSpawn;
			if (typeof origSpawn !== "function") return;

			if (!acts.__gvSpawnHitFxWrapped) {
				acts.__gvSpawnHitFxWrapped = function (obj, layer, imgpt) {
					if (typeHasHitFxTexture(obj)) {
						logDbg("Chặn Spawn HitFx");
						return;
					}
					return origSpawn.apply(this, arguments);
				};
			}
			acts.Spawn = acts.__gvSpawnHitFxWrapped;
			acts.__gvSpawnHitFxPatched = true;

			var rebound = rebindCachedFuncs([origSpawn], acts.__gvSpawnHitFxWrapped);
			if (rebound > 0 && !state.spawnHitFxPatched) {
				logInfo("HitFx Spawn blocked (rebind " + rebound + ")");
			}
			state.spawnHitFxPatched = true;
		} catch (e) {
			logWarn("Không patch Spawn HitFx", e);
		}
	}

	function destroyHitFxInstances() {
		var rt = getRuntime();
		if (!rt || !rt.types_by_index) return;
		for (var i = 0; i < rt.types_by_index.length; i++) {
			var t = rt.types_by_index[i];
			if (!t || !t.instances || !t.instances.length) continue;
			if (!typeHasHitFxTexture(t)) continue;
			var insts = t.instances.slice(0);
			for (var j = 0; j < insts.length; j++) {
				var inst = insts[j];
				if (!inst) continue;
				try {
					rt.DestroyInstance(inst);
				} catch (e2) {
					try {
						inst.visible = false;
						inst.width = 0;
						inst.height = 0;
					} catch (e3) { /* ignore */ }
				}
			}
		}
	}

	function forceDisableBloodOnEnemies() {
		var rt = getRuntime();
		if (!rt || !rt.types_by_index) return;
		for (var i = 0; i < rt.types_by_index.length; i++) {
			var t = rt.types_by_index[i];
			if (!t || !t.effect_types || !t.instances) continue;
			var bloodIndex = -1;
			for (var e = 0; e < t.effect_types.length; e++) {
				if (t.effect_types[e] && String(t.effect_types[e].name).toLowerCase() === "blood") {
					bloodIndex = e;
					break;
				}
			}
			if (bloodIndex < 0) continue;
			for (var j = 0; j < t.instances.length; j++) {
				var inst = t.instances[j];
				if (!inst || !inst.active_effect_flags) continue;
				if (inst.active_effect_flags[bloodIndex]) {
					inst.active_effect_flags[bloodIndex] = false;
					try {
						inst.updateActiveEffects();
					} catch (err) { /* ignore */ }
					rt.redraw = true;
				}
			}
		}
	}

	function suppressBloodAndHitFx() {
		disableHitEventGroup();
		patchBloodEffects();
		patchSpawnHitFx();
		destroyHitFxInstances();
		forceDisableBloodOnEnemies();
	}

	/* ============================ blank clicks ============================ */

	function rebindActionFunc(node, origGoto, origWindow, noop) {
		var n = 0;
		if (!node) return 0;
		if (typeof node.func === "function" &&
			(node.func === origGoto || node.func === origWindow)) {
			node.func = noop;
			n++;
		}
		if (node.actions && node.actions.length) {
			for (var a = 0; a < node.actions.length; a++) {
				n += rebindActionFunc(node.actions[a], origGoto, origWindow, noop);
			}
		}
		if (node.subevents && node.subevents.length) {
			for (var s = 0; s < node.subevents.length; s++) {
				n += rebindActionFunc(node.subevents[s], origGoto, origWindow, noop);
			}
		}
		return n;
	}

	function walkTriggerMap(map, origGoto, origWindow, noop) {
		var n = 0;
		if (!map) return 0;
		for (var typeName in map) {
			if (!Object.prototype.hasOwnProperty.call(map, typeName)) continue;
			var entries = map[typeName];
			if (!entries || !entries.length) continue;
			for (var i = 0; i < entries.length; i++) {
				var entry = entries[i];
				if (!entry) continue;
				var evs = entry.evs;
				if (!evs) continue;
				if (Array.isArray(evs)) {
					for (var j = 0; j < evs.length; j++) {
						var pair = evs[j];
						var trig = pair && pair[0];
						n += rebindActionFunc(trig, origGoto, origWindow, noop);
					}
				} else {
					/* fasttriggers: { literal: [[trig, idx], ...] } */
					for (var key in evs) {
						if (!Object.prototype.hasOwnProperty.call(evs, key)) continue;
						var list = evs[key];
						if (!list || !list.length) continue;
						for (var k = 0; k < list.length; k++) {
							n += rebindActionFunc(list[k] && list[k][0], origGoto, origWindow, noop);
						}
					}
				}
			}
		}
		return n;
	}

	function patchWindowOpenNewWindow() {
		if (global.__gvWindowOpenPatched) return;
		var origOpen = global.open;
		if (typeof origOpen !== "function") return;
		global.open = function (url, name, specs) {
			var tag = name == null ? "" : String(name);
			if (tag === "NewWindow") {
				logDbg("Chặn window.open NewWindow: " + url);
				return null;
			}
			return origOpen.apply(global, arguments);
		};
		global.__gvWindowOpenPatched = true;
		logInfo("Đã chặn window.open(tag=NewWindow)");
	}

	function patchBrowserGoto() {
		try {
			patchWindowOpenNewWindow();

			if (!global.cr || !cr.plugins_ || !cr.plugins_.Browser) return;
			var acts = cr.plugins_.Browser.prototype.acts;
			if (!acts) return;

			var noop = function () {
				logDbg("Chặn GoToURL/Window");
			};

			if (!acts.__gvOrigGoToURL && typeof acts.GoToURL === "function" && !acts.__gvBlankPatched) {
				acts.__gvOrigGoToURL = acts.GoToURL;
			}
			if (!acts.__gvOrigGoToURLWindow && typeof acts.GoToURLWindow === "function" && !acts.__gvBlankPatched) {
				acts.__gvOrigGoToURLWindow = acts.GoToURLWindow;
			}

			var origGoto = acts.__gvOrigGoToURL;
			var origWindow = acts.__gvOrigGoToURLWindow;
			acts.GoToURL = noop;
			acts.GoToURLWindow = noop;
			acts.__gvBlankPatched = true;

			var rebound = 0;
			var rt = getRuntime();
			var tables = [];
			if (rt && rt.objectRefTable) tables.push(rt.objectRefTable);
			try {
				if (typeof cr.getObjectRefTable === "function") {
					tables.push(cr.getObjectRefTable());
				}
			} catch (e0) { /* ignore */ }

			for (var t = 0; t < tables.length; t++) {
				var table = tables[t];
				if (!table || !table.length) continue;
				for (var i = 0; i < table.length; i++) {
					if ((origGoto && table[i] === origGoto) || (origWindow && table[i] === origWindow)) {
						table[i] = noop;
						rebound++;
					}
				}
			}

			if (rt) {
				var sheets = rt.eventsheets_by_index || [];
				for (var s = 0; s < sheets.length; s++) {
					var sheet = sheets[s];
					if (!sheet) continue;
					if (sheet.events && sheet.events.length) {
						for (var e = 0; e < sheet.events.length; e++) {
							rebound += rebindActionFunc(sheet.events[e], origGoto, origWindow, noop);
						}
					}
					rebound += walkTriggerMap(sheet.triggers, origGoto, origWindow, noop);
					rebound += walkTriggerMap(sheet.fasttriggers, origGoto, origWindow, noop);
				}
			}

			if (rebound > 0) {
				state.browserPatched = true;
				logInfo("Đã chặn blank click (rebind " + rebound + ")");
			} else if (global.__gvWindowOpenPatched) {
				state.browserPatched = true;
			}
		} catch (e) {
			logWarn("Không patch Browser GoToURL", e);
		}
	}

	/* ============================ font ============================ */

	function injectFontFace() {
		if (global.document.getElementById("gv-gamefont-style")) return;
		var style = global.document.createElement("style");
		style.id = "gv-gamefont-style";
		style.textContent =
			"@font-face{font-family:'" + FONT_FAMILY + "';" +
			"src:url('" + FONT_URL + "') format('truetype');font-display:swap;}" +
			"html,body{font-family:'" + FONT_FAMILY + "',sans-serif;}";
		(global.document.head || global.document.documentElement).appendChild(style);

		try {
			if (global.document.fonts && global.document.fonts.load) {
				global.document.fonts.load("16px '" + FONT_FAMILY + "'");
			}
		} catch (e) { /* ignore */ }
	}

	function measureGameFont(text, fontPx, bold) {
		var c = measureGameFont._c || (measureGameFont._c = global.document.createElement("canvas"));
		var ctx = c.getContext("2d");
		ctx.font = (bold ? "bold " : "") + fontPx + "px '" + FONT_FAMILY + "', sans-serif";
		return ctx.measureText(text).width;
	}

	function spriteFontFillColor() {
		/* Shop parchment: black; other screens keep white */
		return getLayoutName() === "L_Upgrade" ? "#000000" : "#ffffff";
	}

	function patchSpriteFontPlus() {
		try {
			if (!global.cr || !cr.plugins_ || !cr.plugins_.SpriteFontPlus) return;
			var proto = cr.plugins_.SpriteFontPlus.prototype.Instance.prototype;
			if (proto.__gvFontPatched) return;

			var origDraw = proto.draw;
			var origDrawGL = proto.drawGL;
			var origRebuild = proto.rebuildText;

			proto.rebuildText = function () {
				var scale = this.characterScale || 1;
				var fontPx = Math.max(10, (this.characterHeight || 24) * scale);
				this.textWidth = measureGameFont(this.text || "", fontPx, true);
				this.textHeight = fontPx * 1.25;
				this.lines = [{ text: this.text || "", width: this.textWidth }];
				this.text_changed = false;
				this.lastwrapwidth = this.width;
			};

			proto.draw = function (ctx) {
				if (!this.text) return;
				this.rebuildText();
				ctx.globalAlpha = this.opacity;
				var myx = this.x;
				var myy = this.y;
				if (this.runtime.pixel_rounding) {
					myx = (myx + 0.5) | 0;
					myy = (myy + 0.5) | 0;
				}
				ctx.save();
				ctx.translate(myx, myy);
				ctx.rotate(this.angle);
				var scale = this.characterScale || 1;
				var fontPx = Math.max(10, (this.characterHeight || 24) * scale);
				ctx.font = "bold " + fontPx + "px '" + FONT_FAMILY + "', sans-serif";
				ctx.fillStyle = spriteFontFillColor();
				ctx.textBaseline = "top";
				ctx.textAlign = "left";
				var offx = -(this.hotspotX * this.width);
				var offy = -(this.hotspotY * this.height);
				var ha = this.halign || 0;
				var drawX = offx + ha * Math.max(0, this.width - this.textWidth);
				var drawY = offy;
				ctx.fillText(this.text, Math.round(drawX), Math.round(drawY));
				ctx.restore();
			};

			proto.drawGL = function (glw) {
				if (!this.text) return;
				this.rebuildText();
				var scale = this.characterScale || 1;
				var fontPx = Math.max(10, Math.round((this.characterHeight || 24) * scale));
				var pad = 4;
				var tw = Math.ceil(this.textWidth + pad * 2);
				var th = Math.ceil(fontPx * 1.35 + pad * 2);
				if (tw < 2 || th < 2) return;

				var fill = spriteFontFillColor();
				if (!this.__gvFontCanvas) {
					this.__gvFontCanvas = global.document.createElement("canvas");
				}
				var cvs = this.__gvFontCanvas;
				var rt = this.runtime;
				if (
					cvs.width !== tw ||
					cvs.height !== th ||
					this.__gvFontText !== this.text ||
					this.__gvFontFill !== fill
				) {
					cvs.width = tw;
					cvs.height = th;
					var ctx2 = cvs.getContext("2d");
					ctx2.clearRect(0, 0, tw, th);
					ctx2.font = "bold " + fontPx + "px '" + FONT_FAMILY + "', sans-serif";
					ctx2.fillStyle = fill;
					ctx2.textBaseline = "top";
					ctx2.fillText(this.text, pad, pad);
					this.__gvFontText = this.text;
					this.__gvFontFill = fill;
					this.__gvFontDirty = true;
				}

				if (this.__gvFontDirty) {
					try {
						var gl = glw.gl;
						if (!this.__gvFontTex || this.__gvFontTw !== tw || this.__gvFontTh !== th) {
							this.__gvFontTex = glw.createEmptyTexture(tw, th, true);
							this.__gvFontTw = tw;
							this.__gvFontTh = th;
						}
						glw.endBatch();
						gl.bindTexture(gl.TEXTURE_2D, this.__gvFontTex);
						gl.pixelStorei(gl["UNPACK_PREMULTIPLY_ALPHA_WEBGL"], true);
						gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, cvs);
						gl.bindTexture(gl.TEXTURE_2D, null);
						glw.lastTexture0 = null;
						this.__gvFontTex.c2width = tw;
						this.__gvFontTex.c2height = th;
						this.__gvFontDirty = false;
					} catch (e) {
						return origDrawGL ? origDrawGL.apply(this, arguments) : undefined;
					}
				}

				this.update_bbox();
				var q = this.bquad;
				var ox = 0;
				var oy = 0;
				if (rt.pixel_rounding) {
					ox = ((this.x + 0.5) | 0) - this.x;
					oy = ((this.y + 0.5) | 0) - this.y;
				}
				var ha = this.halign || 0;
				var drawW = Math.min(this.width, tw);
				var drawH = Math.min(this.height, th);
				var hx = ha * Math.max(0, this.width - this.textWidth);
				var x0 = q.tlx + ox + hx;
				var y0 = q.tly + oy;
				glw.setTexture(this.__gvFontTex);
				glw.setOpacity(this.opacity);
				glw.quad(x0, y0, x0 + drawW, y0, x0 + drawW, y0 + drawH, x0, y0 + drawH);
			};

			/* giữ tham chiếu tránh unused lint */
			proto.__gvOrigDraw = origDraw;
			proto.__gvOrigRebuild = origRebuild;
			proto.__gvFontPatched = true;
			state.fontPatched = true;
			logInfo("SpriteFontPlus → GameFont patch OK");
		} catch (e) {
			logWarn("SpriteFontPlus patch lỗi", e);
		}
	}

	function patchTextPlugin() {
		try {
			if (!global.cr || !cr.plugins_ || !cr.plugins_.Text) return;
			var proto = cr.plugins_.Text.prototype.Instance.prototype;
			if (proto.__gvFontPatched) return;

			var origOnCreate = proto.onCreate;
			proto.onCreate = function () {
				if (origOnCreate) origOnCreate.apply(this, arguments);
				try {
					if (this.facename) {
						this.facename = FONT_FAMILY;
						this.font = (this.fontstyle ? this.fontstyle + " " : "") +
							(this.ptSize || 12) + "pt " + FONT_FAMILY;
					}
				} catch (e) { /* ignore */ }
			};

			var tickPatch = function (inst) {
				if (!inst) return;
				if (inst.facename && inst.facename !== FONT_FAMILY) {
					inst.facename = FONT_FAMILY;
					inst.font = (inst.fontstyle ? inst.fontstyle + " " : "") +
						(inst.ptSize || 12) + "pt " + FONT_FAMILY;
					inst.text_changed = true;
				}
			};

			proto.__gvFontTick = tickPatch;
			proto.__gvFontPatched = true;
			logInfo("Text plugin → GameFont patch OK");
		} catch (e) {
			logWarn("Text plugin patch lỗi", e);
		}
	}

	var VN_TEXT_FIX = {
		"GAME SAN BAN": "GAME SĂN BẮN",
		"DUNG CHOI": "DỪNG CHƠI",
		"THU LAi": "THỬ LẠI",
		"THU LAI": "THỬ LẠI",
		"DIEM": "ĐIỂM",
		"TONG": "TỔNG",
		"CHOI": "CHƠI",
		"TIEP": "TIẾP",
		"NEM": "NÉM",
		"SUNG & RAO": "SÚNG & RÀO",
		"Thuoc no": "Thuốc nổ",
		"Tu lanh": "Tủ lạnh",
		"Nang cap": "Nâng cấp",
		"Nang cap nha": "Nâng cấp nhà",
		"Mo khoa ngay!": "Mở khóa ngay!",
		"May bay giay": "Máy bay giấy",
		"Sung phun lua": "Súng phun lửa",
		"Bang dan lon hon": "Băng đạn lớn hơn",
		"Sung ngan": "Súng ngắn",
		"Sung may": "Súng máy",
		"Mua axit": "Mua axít"
	};

	function fixVietnameseText(raw) {
		if (raw == null) return raw;
		var s = String(raw);
		if (Object.prototype.hasOwnProperty.call(VN_TEXT_FIX, s)) return VN_TEXT_FIX[s];
		return s;
	}

	function refreshTextFonts() {
		var rt = getRuntime();
		if (!rt || !rt.types_by_index) return;
		for (var i = 0; i < rt.types_by_index.length; i++) {
			var t = rt.types_by_index[i];
			if (!t || !t.instances) continue;
			for (var j = 0; j < t.instances.length; j++) {
				var inst = t.instances[j];
				if (!inst) continue;
				if (typeof inst.text === "string") {
					var fixed = fixVietnameseText(inst.text);
					if (fixed !== inst.text) {
						inst.text = fixed;
						inst.text_changed = true;
					}
				}
				if (typeof inst.facename === "string" && inst.facename !== FONT_FAMILY) {
					inst.facename = FONT_FAMILY;
					inst.font = (inst.fontstyle ? inst.fontstyle + " " : "") +
						(inst.ptSize || 12) + "pt " + FONT_FAMILY;
					inst.text_changed = true;
				}
			}
		}
	}

	/* ============================ tick ============================ */

	function onRuntimeTick() {
		var rt = getRuntime();
		if (!rt) return;
		if (rt.isloading === false && rt.running_layout) {
			if (!state.uiReady) {
				state.uiReady = true;
				patchBrowserGoto();
				suppressBloodAndHitFx();
				patchSpriteFontPlus();
				patchTextPlugin();
				installDirtyHooks();
			}
			patchBrowserGoto();
			suppressBloodAndHitFx();
			refreshTextFonts();
			maybePopupScoreOnResult();
		}
	}

	function startUiLoop() {
		global.setInterval(onRuntimeTick, 200);
		global.document.addEventListener("visibilitychange", function () {
			if (global.document.hidden) flushSave();
		});
		global.addEventListener("pagehide", function () {
			flushSave();
		});
	}

	/* ============================ public API ============================ */

	global.ArcadeTool = {
		version: MODULE_VERSION,
		ready: ready,
		saveProgress: sendSave,
		loadProgress: loadProgress,
		submitScore: submitScore,
		getHighscore: readHighscoreSync,
		flushSave: flushSave,
		getCredentials: getCredentials,
		isLoggedIn: function () {
			return !!getCredentials().gid;
		},
		listLocalSaveKeys: function () {
			return SAVE_SUFFIXES.map(function (s) {
				return { key: storageKey(s), suffix: s, value: lsGet(storageKey(s)) };
			});
		}
	};
	global.ArcadeSave = global.ArcadeTool;

	/*
	 * FEATURE tắt (không nằm trong yêu cầu task):
	 * - Logo Arcade overlay
	 * - Nút Xóa data (xoa-data-gv.png)
	 * - Nút Gửi điểm thủ công (gv-gui-diem.png) — đã có popup tự động ở L_Result
	 * - history-leaderboard.js / BXH
	 */

	logInfo("Module loaded: " + MODULE_VERSION);
	patchWindowOpenNewWindow();
	loadProgress();

	if (global.document.readyState === "loading") {
		global.document.addEventListener("DOMContentLoaded", startUiLoop);
	} else {
		startUiLoop();
	}
})(typeof window !== "undefined" ? window : this);
