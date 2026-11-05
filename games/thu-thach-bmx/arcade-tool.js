/**
 * Arcade tool — Táo và Hành: Thử thách BMX (Construct 3)
 * One-file: cloud Save/GetHistoryGame (IndexedDB c3-localstorage-40cvfknac4b),
 * GV.saveScore khi LevelComplete / game_finish, nút Xóa data bên phải nút Nhạc (menu),
 * và boot Construct (import scripts/main.js sau seed).
 * First-play fail-open: cloud empty/invalid → không seed, không crash loader.
 */
(function (global) {
	'use strict';

	var MODULE_VERSION = 'tao-va-hanh-bmx-tool-v2';
	var GAME_SLUG = 'tao-va-hanh-thu-thach-bmx';
	var IDB_NAME = 'c3-localstorage-40cvfknac4b';
	var IDB_STORE = 'keyvaluepairs';
	var IDB_VERSION = 2;
	var SAVE_URL = 'https://localhost/account/SaveHistoryGame';
	var GET_URL = 'https://localhost/account/GetHistoryGame';
	var DELETE_IMG_NAME = 'xoa-data-gv.png';
	var DESIGN_W = 1280;
	var DESIGN_H = 720;
	var SAVE_DEBOUNCE_MS = 60000;
	var BOOT_TIMEOUT_MS = 8000;
	var STORAGE_TIMEOUT_MS = 2500;
	var POLL_MS = 400;
	var FALLBACK_SHOW_AFTER_MS = 2500;

	/* Menu: but_music ~ (362, 628), spacing ~136 → delete to the right */
	var DELETE_DESIGN_X = 498;
	var DELETE_DESIGN_Y = 628;
	var DELETE_DESIGN_SIZE = 110;

	var LEVEL_KEY_RE = /^level\d+$/;
	var KNOWN_PROGRESS_KEYS = {
		money: 1,
		selectedLevel: 1,
		bike_index: 1,
		helmets_index: 1,
		wheels_index: 1,
		trail_index: 1,
		music: 1,
		sfx: 1,
		vibrate: 1
	};

	var qsKill = false;
	var qsDebug = false;
	try {
		var bootQs = new URLSearchParams(global.location.search);
		qsKill = bootQs.get('gvsave') === '0';
		qsDebug = bootQs.get('gv_debug') === '1';
	} catch (e) {
		qsKill = false;
		qsDebug = false;
	}

	var scriptBase = '';
	try {
		if (document.currentScript && document.currentScript.src) {
			scriptBase = document.currentScript.src.replace(/[^/]*$/, '');
		}
	} catch (e2) { /* ignore */ }
	if (!scriptBase) {
		try {
			scriptBase = new URL('.', global.location.href).href;
		} catch (e3) {
			scriptBase = global.location.href.replace(/[#?].*$/, '').replace(/[^/]*$/, '');
		}
	}

	function resolveAssetUrl(name) {
		try {
			return new URL(name, scriptBase || global.location.href).href;
		} catch (e) {
			return name;
		}
	}

	var DELETE_IMG = resolveAssetUrl(DELETE_IMG_NAME);

	var state = {
		dirty: false,
		resetting: false,
		seeding: false,
		scorePopupOpen: false,
		pausedForScore: false,
		expectedUpdatedAt: null,
		saveTimer: 0,
		lastSaveAt: 0,
		lastFinishKey: '',
		uiReady: false,
		watchStarted: false,
		storageHooked: false,
		hasMeaningfulProgress: false,
		canvasReadyAt: 0,
		lastDebugLayout: '',
		lastDebugShow: null
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
			if (d !== undefined) console.info('[ArcadeTool] ' + msg, d);
			else console.info('[ArcadeTool] ' + msg);
		}
	}

	function logWarn(msg, d) {
		if (global.console && console.warn) {
			if (d !== undefined) console.warn('[ArcadeTool] ' + msg, d);
			else console.warn('[ArcadeTool] ' + msg);
		}
	}

	/* ============================ credentials ============================ */

	function readQs(search) {
		try {
			return new URLSearchParams(search || '');
		} catch (e) {
			return new URLSearchParams();
		}
	}

	function getCredentials() {
		var local = readQs(global.location.search);
		var gid = local.get('gid') || '';
		var token = local.get('token') || '';

		if ((!gid || !token) && global.parent !== global) {
			try {
				var parentQs = readQs(global.parent.location.search);
				if (!gid) gid = parentQs.get('gid') || '';
				if (!token) token = parentQs.get('token') || '';
			} catch (e) { /* cross-origin */ }
		}

		if ((!gid || !token) && global.document && global.document.referrer) {
			try {
				var ref = new URL(global.document.referrer);
				var refQs = readQs(ref.search);
				if (!gid) gid = refQs.get('gid') || '';
				if (!token) token = refQs.get('token') || '';
			} catch (e2) { /* ignore */ }
		}

		return { gid: gid, token: token || '' };
	}

	function cloudEnabled() {
		if (qsKill) return false;
		return !!getCredentials().gid;
	}

	/* ============================ IndexedDB (C3 localforage shape) ============================ */

	function openIdb() {
		return new Promise(function (resolve, reject) {
			if (!global.indexedDB) {
				reject(new Error('indexedDB unavailable'));
				return;
			}
			var req = global.indexedDB.open(IDB_NAME, IDB_VERSION);
			req.onupgradeneeded = function (ev) {
				try {
					var db = ev.target.result;
					if (!db.objectStoreNames.contains(IDB_STORE)) {
						db.createObjectStore(IDB_STORE);
					}
				} catch (e) {
					logWarn('IDB upgradeneeded failed', e);
				}
			};
			req.onsuccess = function () {
				resolve(req.result);
			};
			req.onerror = function () {
				reject(req.error || new Error('IDB open failed'));
			};
		});
	}

	function idbRequest(req) {
		return new Promise(function (resolve, reject) {
			req.onsuccess = function () {
				resolve(req.result);
			};
			req.onerror = function () {
				reject(req.error || new Error('IDB request failed'));
			};
		});
	}

	function withStore(mode, fn) {
		return openIdb().then(function (db) {
			return new Promise(function (resolve, reject) {
				var settled = false;
				var resultHolder = { value: undefined };
				var timer = global.setTimeout(function () {
					finish(new Error('IDB timeout'));
				}, STORAGE_TIMEOUT_MS);

				function finish(err) {
					if (settled) return;
					settled = true;
					global.clearTimeout(timer);
					try {
						db.close();
					} catch (e) { /* ignore */ }
					if (err) reject(err);
					else resolve(resultHolder.value);
				}

				try {
					var tx = db.transaction([IDB_STORE], mode);
					var store = tx.objectStore(IDB_STORE);
					tx.oncomplete = function () {
						finish(null);
					};
					tx.onerror = function () {
						finish(tx.error || new Error('IDB tx error'));
					};
					tx.onabort = function () {
						finish(tx.error || new Error('IDB tx abort'));
					};
					Promise.resolve(fn(store, tx))
						.then(function (val) {
							resultHolder.value = val;
						})
						.catch(function (err) {
							try {
								tx.abort();
							} catch (e) { /* ignore */ }
							finish(err);
						});
				} catch (e) {
					finish(e);
				}
			});
		});
	}

	function idbGet(key) {
		return withStore('readonly', function (store) {
			return idbRequest(store.get(key)).then(function (v) {
				return typeof v === 'undefined' ? null : v;
			});
		}).catch(function () {
			return null;
		});
	}

	function idbSet(key, value) {
		return withStore('readwrite', function (store) {
			return idbRequest(store.put(value, key)).then(function () {
				return true;
			});
		}).catch(function (err) {
			logWarn('idbSet failed', err);
			return false;
		});
	}

	function idbClear() {
		return withStore('readwrite', function (store) {
			return idbRequest(store.clear()).then(function () {
				return true;
			});
		}).catch(function (err) {
			logWarn('idbClear failed', err);
			return false;
		});
	}

	function idbGetAllEntries() {
		return withStore('readonly', function (store) {
			var out = {};
			if (typeof store.getAllKeys === 'function' && typeof store.getAll === 'function') {
				return Promise.all([idbRequest(store.getAllKeys()), idbRequest(store.getAll())]).then(
					function (pair) {
						var keys = pair[0] || [];
						var values = pair[1] || [];
						for (var i = 0; i < keys.length; i++) {
							var val = values[i];
							out[String(keys[i])] =
								typeof val === 'string' || typeof val === 'number'
									? val
									: val == null
										? ''
										: String(val);
						}
						return out;
					}
				);
			}
			return new Promise(function (resolve, reject) {
				var req = store.openCursor();
				req.onsuccess = function (ev) {
					var cursor = ev.target.result;
					if (cursor) {
						var val = cursor.value;
						out[String(cursor.key)] =
							typeof val === 'string' || typeof val === 'number'
								? val
								: val == null
									? ''
									: String(val);
						cursor.continue();
					} else {
						resolve(out);
					}
				};
				req.onerror = function () {
					reject(req.error);
				};
			});
		}).catch(function (err) {
			logWarn('idbGetAllEntries failed', err);
			return {};
		});
	}

	function idbWriteEntries(entries) {
		if (!entries || typeof entries !== 'object') return Promise.resolve(false);
		var keys = Object.keys(entries);
		if (!keys.length) return Promise.resolve(false);
		return withStore('readwrite', function (store) {
			var ops = keys.map(function (key) {
				var val = entries[key];
				if (typeof val !== 'string' && typeof val !== 'number') {
					val = val == null ? '' : String(val);
				}
				return idbRequest(store.put(val, key));
			});
			return Promise.all(ops).then(function () {
				return true;
			});
		}).catch(function (err) {
			logWarn('idbWriteEntries failed', err);
			return false;
		});
	}

	/* ============================ HTTP ============================ */

	function postForm(url, fields) {
		var body = new URLSearchParams();
		Object.keys(fields).forEach(function (k) {
			if (fields[k] !== undefined && fields[k] !== null) {
				body.set(k, String(fields[k]));
			}
		});
		return fetch(url, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			},
			body: body
		}).then(function (r) {
			return r.json();
		});
	}

	function parseMeta(res) {
		if (!res) return null;
		var raw =
			(res.Data && (res.Data.MetaData || res.Data.metaData || res.Data.metadata)) ||
			res.MetaData ||
			res.metaData ||
			res.metadata ||
			res.Data ||
			res.data;
		if (!raw) return null;
		if (typeof raw === 'string') {
			try {
				raw = JSON.parse(raw);
			} catch (e) {
				return null;
			}
		}
		if (typeof raw !== 'object' || raw === null) return null;
		return raw;
	}

	function intOr(v, fallback) {
		var n = parseInt(v, 10);
		return isNaN(n) ? fallback : n;
	}

	function numOr(v, fallback) {
		var n = parseFloat(v);
		return isNaN(n) ? fallback : n;
	}

	/* ============================ metadata ============================ */

	function isValidLocalKeys(keys) {
		if (!keys || typeof keys !== 'object') return false;
		var names = Object.keys(keys);
		if (!names.length) return false;
		for (var i = 0; i < names.length; i++) {
			var k = names[i];
			if (KNOWN_PROGRESS_KEYS[k] || LEVEL_KEY_RE.test(k) || k.indexOf('aquired_') === 0) {
				return true;
			}
		}
		return false;
	}

	function hasProgressInKeys(keys) {
		if (!keys || typeof keys !== 'object') return false;
		if (numOr(keys.money, 0) > 0) return true;
		if (intOr(keys.selectedLevel, 0) > 0) return true;
		if (intOr(keys.bike_index, 0) > 0 || intOr(keys.helmets_index, 0) > 0) return true;
		if (intOr(keys.trail_index, 0) > 0 || intOr(keys.wheels_index, 0) > 0) return true;
		var names = Object.keys(keys);
		for (var i = 0; i < names.length; i++) {
			if (LEVEL_KEY_RE.test(names[i]) && String(keys[names[i]] || '') !== '') return true;
			if (names[i].indexOf('aquired_') === 0 && numOr(keys[names[i]], 0) > 0) return true;
		}
		return false;
	}

	function buildLevelProgress(keys) {
		var out = {};
		Object.keys(keys || {}).forEach(function (k) {
			if (LEVEL_KEY_RE.test(k)) out[k] = keys[k];
		});
		return out;
	}

	function buildMetadata(keys, extra) {
		keys = keys || {};
		var money = Math.max(0, Math.floor(numOr(keys.money, 0)));
		var selected = intOr(keys.selectedLevel, 0);
		var meta = {
			metaVersion: 1,
			module: MODULE_VERSION,
			game: GAME_SLUG,
			CurrentLevel: selected,
			CurrentStage: selected,
			TotalScore: money,
			Money: money,
			SelectedLevel: selected,
			SkinBike: intOr(keys.bike_index, 0),
			SkinHelmet: intOr(keys.helmets_index, 0),
			SkinTrail: intOr(keys.trail_index, 0),
			SkinWheels: intOr(keys.wheels_index, 0),
			Music: intOr(keys.music, 1),
			Sfx: intOr(keys.sfx, 1),
			Vibrate: intOr(keys.vibrate, 0),
			LevelProgress: buildLevelProgress(keys),
			LocalKeys: keys,
			savedAt: new Date().toISOString()
		};
		if (extra && typeof extra === 'object') {
			Object.keys(extra).forEach(function (k) {
				meta[k] = extra[k];
			});
		}
		return meta;
	}

	function buildClearedMetadata() {
		return {
			metaVersion: 1,
			module: MODULE_VERSION,
			game: GAME_SLUG,
			cleared: true,
			CurrentLevel: 0,
			CurrentStage: 0,
			TotalScore: 0,
			Money: 0,
			LocalKeys: {},
			LevelProgress: {},
			savedAt: new Date().toISOString()
		};
	}

	/* ============================ cloud load / save ============================ */

	function loadCloudAndApply() {
		if (qsKill) {
			logInfo('gvsave=0 — skip cloud load');
			return Promise.resolve({ skipped: true, reason: 'gvsave=0' });
		}
		var cred = getCredentials();
		if (!cred.gid) {
			logInfo('No gid/token -> local fallback (dev only)');
			return Promise.resolve({ skipped: true, reason: 'no-gid' });
		}

		return Promise.race([
			postForm(GET_URL, { gameId: cred.gid, token: cred.token || '' }),
			new Promise(function (resolve) {
				setTimeout(function () {
					resolve({ __timeout: true });
				}, BOOT_TIMEOUT_MS);
			})
		])
			.then(function (res) {
				if (res && res.__timeout) {
					logWarn('GetHistoryGame timeout — play local');
					return { skipped: true, reason: 'timeout' };
				}
				if (res && (res.updatedAt || res.NgaySua)) {
					state.expectedUpdatedAt = res.updatedAt || res.NgaySua;
				}
				var meta = parseMeta(res);
				if (!meta) {
					logInfo('GetHistoryGame empty — start fresh / local');
					return { ok: true, seeded: false };
				}
				if (meta.cleared) {
					logInfo('Load: cloud cleared — start fresh');
					return { ok: true, seeded: false, cleared: true };
				}
				var keys = meta.LocalKeys;
				if (!isValidLocalKeys(keys)) {
					/* legacy: rebuild from LevelProgress + scalar fields */
					keys = {};
					if (meta.Money != null || meta.TotalScore != null) {
						keys.money = String(intOr(meta.Money != null ? meta.Money : meta.TotalScore, 0));
					}
					if (meta.SelectedLevel != null || meta.CurrentLevel != null) {
						keys.selectedLevel = String(
							intOr(meta.SelectedLevel != null ? meta.SelectedLevel : meta.CurrentLevel, 0)
						);
					}
					if (meta.SkinBike != null) keys.bike_index = String(intOr(meta.SkinBike, 0));
					if (meta.SkinHelmet != null) keys.helmets_index = String(intOr(meta.SkinHelmet, 0));
					if (meta.SkinTrail != null) keys.trail_index = String(intOr(meta.SkinTrail, 0));
					if (meta.SkinWheels != null) keys.wheels_index = String(intOr(meta.SkinWheels, 0));
					if (meta.Music != null) keys.music = String(intOr(meta.Music, 1));
					if (meta.Sfx != null) keys.sfx = String(intOr(meta.Sfx, 1));
					if (meta.Vibrate != null) keys.vibrate = String(intOr(meta.Vibrate, 0));
					if (meta.LevelProgress && typeof meta.LevelProgress === 'object') {
						Object.keys(meta.LevelProgress).forEach(function (k) {
							keys[k] = meta.LevelProgress[k];
						});
					}
				}
				if (!isValidLocalKeys(keys)) {
					logInfo('Load: metadata invalid/empty LocalKeys — skip seed (first-play safe)');
					return { ok: true, seeded: false };
				}

				state.seeding = true;
				return idbWriteEntries(keys)
					.then(function (ok) {
						state.seeding = false;
						if (ok) {
							state.hasMeaningfulProgress = hasProgressInKeys(keys);
							logInfo('Seeded IndexedDB from cloud', {
								keys: Object.keys(keys).length,
								money: keys.money
							});
							return { ok: true, seeded: true };
						}
						logWarn('Seed write failed — play local');
						return { ok: true, seeded: false };
					})
					.catch(function (err) {
						state.seeding = false;
						logWarn('Seed error — play local', err);
						return { ok: true, seeded: false, error: true };
					});
			})
			.catch(function (err) {
				logWarn('GetHistoryGame error — chơi local', err);
				return { error: true };
			});
	}

	function flushSave(opts) {
		opts = opts || {};
		if (qsKill || state.resetting || state.seeding) {
			return Promise.resolve({ skipped: true });
		}
		if (!cloudEnabled()) {
			if (opts.force) logInfo('Save skip — no gid (dev/local ok)');
			return Promise.resolve({ skipped: true, reason: 'no-gid' });
		}
		if (!state.dirty && !opts.force) {
			return Promise.resolve({ skipped: true, reason: 'clean' });
		}

		return idbGetAllEntries().then(function (keys) {
			if (!hasProgressInKeys(keys) && !opts.force) {
				logInfo('Save skip — no meaningful progress yet (first-play)');
				return { skipped: true, reason: 'no-progress' };
			}
			state.hasMeaningfulProgress = hasProgressInKeys(keys);
			var cred = getCredentials();
			var meta = buildMetadata(keys, opts.extra);
			var body = {
				gameId: cred.gid,
				token: cred.token || '',
				metadata: JSON.stringify(meta),
				metaData: JSON.stringify(meta),
				CurrentLevel: meta.CurrentLevel,
				CurrentStage: String(meta.CurrentStage),
				TotalScore: String(meta.TotalScore)
			};
			if (state.expectedUpdatedAt) {
				body.expectedUpdatedAt = String(state.expectedUpdatedAt);
			}

			logInfo('SaveHistoryGame', { reason: opts.reason || 'flush', score: meta.TotalScore });
			state.lastSaveAt = Date.now();
			state.dirty = false;

			return postForm(SAVE_URL, body)
				.then(function (res) {
					if (res && (res.updatedAt || res.NgaySua)) {
						state.expectedUpdatedAt = res.updatedAt || res.NgaySua;
					}
					if (res && (res.Status === 409 || res.status === 409)) {
						logWarn('Save conflict 409 — refetch');
						return loadCloudAndApply().then(function () {
							state.dirty = true;
							return flushSave({ force: true, reason: 'conflict-retry' });
						});
					}
					logInfo('SaveHistoryGame ok', res && (res.Status || res.status));
					return res;
				})
				.catch(function (err) {
					state.dirty = true;
					logWarn('SaveHistoryGame error — keep local', err);
					return { error: true };
				});
		});
	}

	function requestSave(reason) {
		if (state.resetting || state.seeding || qsKill) return;
		state.dirty = true;
		if (state.saveTimer) return;
		var elapsed = Date.now() - state.lastSaveAt;
		var wait = elapsed >= SAVE_DEBOUNCE_MS ? 250 : Math.max(250, SAVE_DEBOUNCE_MS - elapsed);
		state.saveTimer = global.setTimeout(function () {
			state.saveTimer = 0;
			flushSave({ reason: reason || 'debounce' });
		}, wait);
	}

	function hookProjectStorage() {
		if (state.storageHooked) return;
		try {
			var rt = getC3Runtime();
			if (!rt || typeof rt._GetProjectStorage !== 'function') return;
			var store = rt._GetProjectStorage();
			if (!store || typeof store.setItem !== 'function' || store.__gvPatched) return;
			var original = store.setItem.bind(store);
			store.setItem = function (key, value, cb) {
				var ret = original(key, value, cb);
				try {
					if (!state.resetting && !state.seeding) {
						requestSave('storage:' + key);
					}
				} catch (e) { /* ignore */ }
				return ret;
			};
			store.__gvPatched = true;
			state.storageHooked = true;
			logInfo('Patched C3 project storage setItem');
		} catch (e) {
			logWarn('hookProjectStorage failed', e);
		}
	}

	/* ============================ C3 runtime helpers ============================ */

	function getC3Runtime() {
		try {
			var ri = global.c3_runtimeInterface;
			if (!ri) return null;
			if (typeof ri.UsesWorker === 'function' && ri.UsesWorker()) return null;
			if (typeof ri._GetLocalRuntime === 'function') {
				return ri._GetLocalRuntime() || null;
			}
		} catch (e) { /* ignore */ }
		return null;
	}

	function getIRuntime() {
		try {
			var rt = getC3Runtime();
			if (rt && typeof rt.GetIRuntime === 'function') return rt.GetIRuntime();
		} catch (e) { /* ignore */ }
		return null;
	}

	function getLayoutName() {
		/* Prefer raw runtime API — avoid IRuntime.layout getter (throws if no main layout). */
		try {
			var rt = getC3Runtime();
			if (rt && typeof rt.GetMainRunningLayout === 'function') {
				var layout = null;
				try {
					layout = rt.GetMainRunningLayout();
				} catch (e1) {
					layout = null;
				}
				if (layout && typeof layout.GetName === 'function') {
					var n = layout.GetName();
					if (n) return String(n);
				}
			}
		} catch (e2) { /* ignore */ }
		return '';
	}

	function shouldHideDeleteForLayout(name) {
		if (!name) return false;
		if (name === 'loader' || name === 'ending') return true;
		if (LEVEL_KEY_RE.test(name) || name.indexOf('level') === 0) return true;
		return false;
	}

	function shouldShowDeleteButton(name) {
		if (name === 'menu') return true;
		if (shouldHideDeleteForLayout(name)) return false;
		/* Fallback: layout name unread but canvas stable on hub screens */
		if (!name && state.canvasReadyAt && Date.now() - state.canvasReadyAt >= FALLBACK_SHOW_AFTER_MS) {
			return true;
		}
		return false;
	}

	function isGameFinishVisible() {
		try {
			var rt = getC3Runtime();
			if (!rt || typeof rt.GetMainRunningLayout !== 'function') return false;
			var layout = null;
			try {
				layout = rt.GetMainRunningLayout();
			} catch (e0) {
				return false;
			}
			if (!layout) return false;
			var rawLayer =
				(layout.GetLayerByName && layout.GetLayerByName('game_finish')) ||
				(layout.GetLayer && layout.GetLayer('game_finish'));
			if (!rawLayer) return false;
			return typeof rawLayer.IsVisible === 'function' ? !!rawLayer.IsVisible() : false;
		} catch (e) {
			return false;
		}
	}

	function getUserInstVars() {
		try {
			var irt = getIRuntime();
			if (!irt || !irt.objects || !irt.objects.User) return null;
			var userType = irt.objects.User;
			var inst =
				(typeof userType.getFirstInstance === 'function' && userType.getFirstInstance()) ||
				null;
			if (!inst && typeof userType.getAllInstances === 'function') {
				var all = userType.getAllInstances();
				if (all && all.length) inst = all[0];
			}
			if (!inst || !inst.instVars) return null;
			return inst.instVars;
		} catch (e) {
			return null;
		}
	}

	function readUserVar(name, fallback) {
		try {
			var vars = getUserInstVars();
			if (vars && vars[name] != null) return numOr(vars[name], fallback);
		} catch (e) { /* ignore */ }
		return fallback;
	}

	function getCareerMoney() {
		var fromRt = readUserVar('money', NaN);
		if (!isNaN(fromRt)) return Math.max(0, Math.floor(fromRt));
		return idbGet('money').then(function (v) {
			return Math.max(0, Math.floor(numOr(v, 0)));
		});
	}

	function getCareerMoneySyncFallback() {
		var fromRt = readUserVar('money', NaN);
		if (!isNaN(fromRt)) return Math.max(0, Math.floor(fromRt));
		return 0;
	}

	function getLastRaceScore() {
		return Math.max(0, Math.floor(readUserVar('rewarded_tricks', 0)));
	}

	function setSuspended(on) {
		try {
			if (typeof global.cr_setSuspended === 'function') {
				global.cr_setSuspended(!!on);
				return;
			}
			var ri = global.c3_runtimeInterface;
			if (ri && typeof ri.PostToRuntimeComponent === 'function') {
				ri.PostToRuntimeComponent('runtime', 'set-suspended', { isSuspended: !!on });
			}
		} catch (e) { /* ignore */ }
	}

	/* ============================ score popup ============================ */

	function tryShowScorePopup() {
		if (state.scorePopupOpen || state.resetting || qsKill) return;

		var layout = getLayoutName();
		if (!LEVEL_KEY_RE.test(layout) && layout.indexOf('level') !== 0) return;
		if (!isGameFinishVisible()) return;

		var finishKey = layout + ':' + Math.floor(Date.now() / 2000);
		/* stronger dedup: one popup per layout visit while finish visible */
		if (state.lastFinishKey === layout + ':open') return;
		state.lastFinishKey = layout + ':open';
		state.scorePopupOpen = true;

		var raceScore = getLastRaceScore();
		var moneySync = getCareerMoneySyncFallback();

		function openWithScore(score) {
			score = Math.max(0, Math.floor(numOr(score, 0)));
			var extra = {
				LastRaceScore: raceScore,
				LastRaceLayout: layout,
				winReason: 'LevelComplete'
			};
			logInfo('Level end -> saveScore=' + score, extra);

			function afterClose() {
				state.scorePopupOpen = false;
				state.pausedForScore = false;
				setSuspended(false);
				state.dirty = true;
				flushSave({ force: true, reason: 'score-onClose', extra: extra });
			}

			var cred = getCredentials();
			if (!cred.gid) {
				logInfo('GV_SAVE_SCORE_SKIP_NO_GID', score);
				state.scorePopupOpen = false;
				state.dirty = true;
				flushSave({ force: true, reason: 'win-no-gid', extra: extra });
				return;
			}

			state.pausedForScore = true;
			setSuspended(true);

			try {
				if (typeof global.GV !== 'undefined') {
					new global.GV().saveScore(score, afterClose);
					console.log('GV_SAVE_SCORE', score);
					state.dirty = true;
					flushSave({ force: true, reason: 'win-immediate', extra: extra });
					/* fallback if popup DOM never appears */
					setTimeout(function () {
						if (!document.getElementById('gv_savescore') && state.scorePopupOpen) {
							afterClose();
						}
					}, 400);
					return;
				}
				logWarn('GV chua san sang — bo qua saveScore');
				afterClose();
			} catch (e) {
				logWarn('saveScore loi', e);
				try {
					new global.GV().saveScore(score);
				} catch (e2) { /* ignore */ }
				afterClose();
			}
		}

		if (moneySync > 0 || raceScore >= 0) {
			/* prefer runtime money; if 0, still try async IDB after short delay for pdata write */
			if (moneySync > 0) {
				openWithScore(moneySync);
			} else {
				setTimeout(function () {
					Promise.resolve(getCareerMoney()).then(function (m) {
						openWithScore(Math.max(m, raceScore));
					});
				}, 150);
			}
		}
	}

	function resetFinishDedupIfNeeded() {
		if (!isGameFinishVisible()) {
			var layout = getLayoutName();
			if (state.lastFinishKey === layout + ':open') {
				/* keep until leave layout */
			}
			if (!LEVEL_KEY_RE.test(layout) && layout.indexOf('level') !== 0) {
				state.lastFinishKey = '';
			} else if (!isGameFinishVisible()) {
				state.lastFinishKey = '';
			}
		}
	}

	/* ============================ delete UI ============================ */

	function ensureDeleteStyles() {
		if (document.getElementById('gv-bmx-style')) return;
		if (!document.head) return;
		var style = document.createElement('style');
		style.id = 'gv-bmx-style';
		style.textContent =
			'#gv-delete-btn{position:fixed;z-index:99990;padding:0;border:0;background:transparent;cursor:pointer;' +
			'width:56px;height:56px;left:12px;bottom:12px;' +
			'opacity:0.6;transform:scale(0.8);transform-origin:center center;' +
			'transition:opacity 0.2s ease,transform 0.2s ease;display:none;pointer-events:auto;}' +
			'#gv-delete-btn:hover,#gv-delete-btn:focus-visible{opacity:1;transform:scale(1);outline:none;}' +
			'#gv-delete-btn img{display:block;width:100%;height:100%;pointer-events:none;object-fit:contain;}' +
			'#gv-reset-modal{position:fixed;inset:0;z-index:100000;display:none;align-items:center;justify-content:center;' +
			'background:rgba(0,0,0,0.55);}' +
			'#gv-reset-modal .gv-reset-box{background:#1a2a4a;border:2px solid #4db8ff;border-radius:12px;padding:20px 24px;' +
			'max-width:90vw;width:360px;color:#fff;font-family:Arial,sans-serif;text-align:center;box-shadow:0 8px 24px rgba(0,0,0,0.4);}' +
			'#gv-reset-modal p{margin:0 0 16px;line-height:1.45;font-size:15px;}' +
			'#gv-reset-modal .gv-reset-actions{display:flex;gap:12px;justify-content:center;}' +
			'#gv-reset-modal button{min-width:96px;padding:8px 16px;border-radius:8px;border:0;font-weight:700;cursor:pointer;font-size:14px;}' +
			'#gv-reset-ok{background:#e74c3c;color:#fff;}' +
			'#gv-reset-cancel{background:#3d5a80;color:#fff;}';
		document.head.appendChild(style);
	}

	function getCanvasRect() {
		var el =
			global.c3canvas ||
			document.querySelector('canvas') ||
			document.getElementById('c2canvas');
		if (!el) return null;
		var rect = el.getBoundingClientRect();
		if (rect && rect.width >= 10 && rect.height >= 10) {
			if (!state.canvasReadyAt) state.canvasReadyAt = Date.now();
		}
		return rect;
	}

	function ensureDeleteButton() {
		if (document.getElementById('gv-delete-btn')) return;
		if (!document.body) return;
		ensureDeleteStyles();
		var btn = document.createElement('button');
		btn.id = 'gv-delete-btn';
		btn.type = 'button';
		btn.title = 'Xóa dữ liệu';
		btn.setAttribute('aria-label', 'Xóa dữ liệu');
		var img = document.createElement('img');
		img.src = DELETE_IMG;
		img.alt = 'Xóa data';
		img.draggable = false;
		img.onerror = function () {
			/* keep button visible even if PNG 404/500 */
			try {
				if (img.parentNode) img.parentNode.removeChild(img);
			} catch (e) { /* ignore */ }
			btn.style.background = '#7dcc3a';
			btn.style.border = '2px solid #111';
			btn.style.borderRadius = '8px';
			btn.style.color = '#111';
			btn.style.fontWeight = '800';
			btn.style.fontSize = '11px';
			btn.style.lineHeight = '1.1';
			btn.textContent = 'XÓA DATA';
		};
		btn.appendChild(img);
		btn.addEventListener('click', function (e) {
			e.preventDefault();
			e.stopPropagation();
			openResetModal();
		});
		document.body.appendChild(btn);

		if (!document.getElementById('gv-reset-modal')) {
			var modal = document.createElement('div');
			modal.id = 'gv-reset-modal';
			modal.innerHTML =
				'<div class="gv-reset-box" role="dialog" aria-modal="true">' +
				'<p>Bạn chắc chắn muốn xóa tất cả dữ liệu game và chơi lại từ đầu?</p>' +
				'<div class="gv-reset-actions">' +
				'<button type="button" id="gv-reset-ok">OK</button>' +
				'<button type="button" id="gv-reset-cancel">Hủy</button>' +
				'</div></div>';
			document.body.appendChild(modal);
			document.getElementById('gv-reset-ok').addEventListener('click', function () {
				closeResetModal();
				performReset();
			});
			document.getElementById('gv-reset-cancel').addEventListener('click', closeResetModal);
			modal.addEventListener('click', function (ev) {
				if (ev.target === modal) closeResetModal();
			});
		}

		global.addEventListener('resize', positionDeleteButton);
		global.addEventListener('orientationchange', positionDeleteButton);
		state.uiReady = true;
	}

	function positionDeleteButton() {
		var btn = document.getElementById('gv-delete-btn');
		if (!btn || btn.style.display === 'none') return;
		var rect = getCanvasRect();
		if (!rect || rect.width < 10) return;
		var scale = Math.min(rect.width / DESIGN_W, rect.height / DESIGN_H);
		var offsetX = rect.left + (rect.width - DESIGN_W * scale) / 2;
		var offsetY = rect.top + (rect.height - DESIGN_H * scale) / 2;
		var size = Math.max(40, Math.min(96, DELETE_DESIGN_SIZE * scale));
		var left = offsetX + DELETE_DESIGN_X * scale - size / 2;
		var top = offsetY + DELETE_DESIGN_Y * scale - size / 2;
		btn.style.width = size + 'px';
		btn.style.height = size + 'px';
		btn.style.left = Math.round(left) + 'px';
		btn.style.top = Math.round(top) + 'px';
		btn.style.bottom = 'auto';
	}

	function updateDeleteButtonVisibility() {
		ensureDeleteButton();
		var btn = document.getElementById('gv-delete-btn');
		if (!btn) return;
		getCanvasRect();
		var name = getLayoutName();
		var show = shouldShowDeleteButton(name);
		btn.style.display = show ? 'block' : 'none';
		if (show) positionDeleteButton();
		if (qsDebug && (name !== state.lastDebugLayout || show !== state.lastDebugShow)) {
			state.lastDebugLayout = name;
			state.lastDebugShow = show;
			logInfo('delete-btn', { layout: name || '(empty)', show: show, img: DELETE_IMG });
		}
	}

	function openResetModal() {
		var modal = document.getElementById('gv-reset-modal');
		if (!modal) return;
		modal.style.display = 'flex';
		setSuspended(true);
	}

	function closeResetModal() {
		var modal = document.getElementById('gv-reset-modal');
		if (modal) modal.style.display = 'none';
		setSuspended(false);
	}

	function performReset() {
		state.resetting = true;
		var cred = getCredentials();
		var cleared = buildClearedMetadata();

		function wipeLocalAndReload() {
			return idbClear()
				.then(function () {
					try {
						/* mirror cleanup if any LS leftovers */
						for (var i = global.localStorage.length - 1; i >= 0; i--) {
							var k = global.localStorage.key(i);
							if (!k) continue;
							if (
								KNOWN_PROGRESS_KEYS[k] ||
								LEVEL_KEY_RE.test(k) ||
								k.indexOf('aquired_') === 0 ||
								k.indexOf('c3-localstorage') === 0
							) {
								global.localStorage.removeItem(k);
							}
						}
					} catch (e) { /* ignore */ }
					logInfo('Local wipe done — reload');
					var u = new URL(global.location.href);
					u.searchParams.set('_gv', String(Date.now()));
					global.location.href = u.toString();
				})
				.catch(function () {
					global.location.reload();
				});
		}

		if (cloudEnabled() && cred.gid) {
			var body = {
				gameId: cred.gid,
				token: cred.token || '',
				metadata: JSON.stringify(cleared),
				metaData: JSON.stringify(cleared),
				CurrentLevel: 0,
				CurrentStage: '0',
				TotalScore: '0'
			};
			if (state.expectedUpdatedAt) {
				body.expectedUpdatedAt = String(state.expectedUpdatedAt);
			}
			postForm(SAVE_URL, body)
				.then(function (res) {
					logInfo('Cloud wipe save ok', res && (res.Status || res.status));
					return wipeLocalAndReload();
				})
				.catch(function (err) {
					logWarn('Cloud wipe failed — still clear local', err);
					return wipeLocalAndReload();
				});
		} else {
			wipeLocalAndReload();
		}
	}

	/* ============================ watch loop ============================ */

	function startWatch() {
		if (state.watchStarted) return;
		state.watchStarted = true;
		ensureDeleteButton();
		global.setInterval(function () {
			try {
				hookProjectStorage();
				updateDeleteButtonVisibility();
				resetFinishDedupIfNeeded();
				tryShowScorePopup();
			} catch (e) {
				/* never break game loop */
			}
		}, POLL_MS);
	}

	function bindLifecycle() {
		global.addEventListener('pagehide', function () {
			if (state.dirty) flushSave({ force: true, reason: 'pagehide' });
		});
		document.addEventListener('visibilitychange', function () {
			if (document.visibilityState === 'hidden' && state.dirty) {
				flushSave({ force: true, reason: 'visibility' });
			}
		});
	}

	/* ============================ init + Construct boot ============================ */

	function importMain() {
		return import('./scripts/main.js').catch(function (err) {
			logWarn('import main.js failed', err);
			throw err;
		});
	}

	function bootConstruct() {
		return Promise.race([
			ready,
			new Promise(function (resolve) {
				setTimeout(function () {
					logWarn('Arcade ready timeout — starting Construct anyway');
					resolve({ ok: true, timeout: true });
				}, 10000);
			})
		])
			.then(function () {
				logInfo('Starting Construct runtime (scripts/main.js)');
				return importMain();
			})
			.catch(function (err) {
				logWarn('bootConstruct failed — retry import main', err);
				return importMain();
			});
	}

	function init() {
		if (qsKill) {
			logInfo('gvsave=0 — tool idle (game boots normally)');
			bindLifecycle();
			startWatch();
			return Promise.resolve(finishReady({ ok: true, disabled: true }));
		}

		bindLifecycle();

		return loadCloudAndApply()
			.then(function (result) {
				startWatch();
				finishReady(result || { ok: true });
				return result;
			})
			.catch(function (err) {
				logWarn('init failed — fail-open', err);
				startWatch();
				return finishReady({ ok: true, error: true });
			});
	}

	var api = {
		ready: ready,
		init: init,
		bootConstruct: bootConstruct,
		flushSave: flushSave,
		deleteAllData: performReset,
		getCredentials: getCredentials,
		version: MODULE_VERSION
	};

	global.ArcadeTool = api;

	/* Seed cloud first, then start Construct from this single file (no gv-boot.js). */
	init();
	bootConstruct();
})(typeof window !== 'undefined' ? window : globalThis);
