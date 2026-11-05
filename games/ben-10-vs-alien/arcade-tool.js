/**
 * Arcade tool — Ben 10 VS Alien (Construct 3)
 * Cloud Save/GetHistoryGame (IndexedDB c3-localstorage-91uz14vkkmz),
 * GV.saveScore(tổng GV_MATCH_WINS) khi thắng trận (+1 mỗi trận),
 * nút Xóa data góc trên phải MAIN MENU,
 * boot Construct (import scripts/main.js sau seed).
 * First-play fail-open: cloud empty/invalid → không seed, không crash loader.
 */
(function (global) {
	'use strict';

	var MODULE_VERSION = 'ben-10-vs-alien-tool-v1';
	var GAME_SLUG = 'ben-10-vs-alien';
	var IDB_NAME = 'c3-localstorage-91uz14vkkmz';
	var IDB_STORE = 'keyvaluepairs';
	var IDB_VERSION = 2;
	var SAVE_URL = 'https://localhost/account/SaveHistoryGame';
	var GET_URL = 'https://localhost/account/GetHistoryGame';
	var DESIGN_W = 768;
	var DESIGN_H = 432;
	var SAVE_DEBOUNCE_MS = 60000;
	var BOOT_TIMEOUT_MS = 8000;
	var STORAGE_TIMEOUT_MS = 2500;
	var POLL_MS = 400;
	var FALLBACK_SHOW_AFTER_MS = 2500;

	/* MAIN MENU top-right — design coords (canvas 768x432) */
	var DELETE_DESIGN_X = 730;
	var DELETE_DESIGN_Y = 40;
	var DELETE_DESIGN_SIZE = 56;
	var DELETE_IMG_NAME = 'xoa-data-gv.png';

	var scriptBase = '';
	try {
		if (document.currentScript && document.currentScript.src) {
			scriptBase = document.currentScript.src.replace(/[^/]*$/, '');
		}
	} catch (e0) { /* ignore */ }
	if (!scriptBase) {
		try {
			scriptBase = new URL('.', global.location.href).href;
		} catch (e1) {
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

	var MATCH_WINS_KEY = 'GV_MATCH_WINS';

	var KNOWN_PROGRESS_KEYS = {
		UnlockedAliens: 1,
		TUTS_LEVELS_COMPLETE: 1,
		TUT_LEVEL: 1,
		TUTS_SPECIAL_DONE: 1,
		'MUTATIONS COUNT': 1,
		'SURVIVAL COUNT': 1,
		TUTS_PLAYED: 1
	};
	KNOWN_PROGRESS_KEYS[MATCH_WINS_KEY] = 1;

	var LEVEL_LAYOUT_RE = /^LEVEL\s*[1-4]$/i;

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

	var state = {
		dirty: false,
		resetting: false,
		seeding: false,
		scorePopupOpen: false,
		pausedForScore: false,
		expectedUpdatedAt: null,
		saveTimer: 0,
		lastSaveAt: 0,
		lastWinKey: '',
		prevRoundP1: 0,
		prevRoundP2: 0,
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

	function readMatchWins() {
		return idbGet(MATCH_WINS_KEY).then(function (v) {
			return Math.max(0, Math.floor(intOr(v, 0)));
		});
	}

	function writeMatchWins(n) {
		n = Math.max(0, Math.floor(numOr(n, 0)));
		return idbSet(MATCH_WINS_KEY, String(n)).then(function () {
			return n;
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

	function isProgressKey(k) {
		return !!(KNOWN_PROGRESS_KEYS[k]);
	}

	function isValidLocalKeys(keys) {
		if (!keys || typeof keys !== 'object') return false;
		var names = Object.keys(keys);
		if (!names.length) return false;
		for (var i = 0; i < names.length; i++) {
			if (isProgressKey(names[i])) return true;
		}
		return false;
	}

	function hasProgressInKeys(keys) {
		if (!keys || typeof keys !== 'object') return false;
		if (intOr(keys[MATCH_WINS_KEY], 0) > 0) return true;
		if (intOr(keys['SURVIVAL COUNT'], 0) > 0) return true;
		if (intOr(keys['MUTATIONS COUNT'], 0) > 0) return true;
		if (intOr(keys.TUT_LEVEL, 0) > 0) return true;
		if (intOr(keys.TUTS_LEVELS_COMPLETE, 0) > 0) return true;
		if (intOr(keys.TUTS_SPECIAL_DONE, 0) > 0) return true;
		if (intOr(keys.TUTS_PLAYED, 0) > 0) return true;
		var unlocked = keys.UnlockedAliens;
		if (unlocked != null && String(unlocked).length > 2 && String(unlocked) !== '[]' && String(unlocked) !== '{}') {
			return true;
		}
		return false;
	}

	function buildMetadata(keys, extra) {
		keys = keys || {};
		var survival = Math.max(0, Math.floor(intOr(keys['SURVIVAL COUNT'], 0)));
		var mutations = Math.max(0, Math.floor(intOr(keys['MUTATIONS COUNT'], 0)));
		var matchWins = Math.max(0, Math.floor(intOr(keys[MATCH_WINS_KEY], 0)));
		var totalScore = matchWins;
		var meta = {
			metaVersion: 1,
			module: MODULE_VERSION,
			game: GAME_SLUG,
			CurrentLevel: intOr(keys.TUT_LEVEL, 0),
			CurrentStage: String(intOr(keys.TUT_LEVEL, 0)),
			TotalScore: totalScore,
			MatchWins: matchWins,
			SurvivalCount: survival,
			MutationsCount: mutations,
			TutsLevelsComplete: intOr(keys.TUTS_LEVELS_COMPLETE, 0),
			TutLevel: intOr(keys.TUT_LEVEL, 0),
			TutsSpecialDone: intOr(keys.TUTS_SPECIAL_DONE, 0),
			UnlockedAliens: keys.UnlockedAliens != null ? String(keys.UnlockedAliens) : '',
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
			CurrentStage: '0',
			TotalScore: 0,
			MatchWins: 0,
			SurvivalCount: 0,
			MutationsCount: 0,
			LocalKeys: {},
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
					/* rebuild scalar fields if LocalKeys missing */
					keys = {};
					if (meta.SurvivalCount != null) keys['SURVIVAL COUNT'] = String(intOr(meta.SurvivalCount, 0));
					if (meta.MutationsCount != null) keys['MUTATIONS COUNT'] = String(intOr(meta.MutationsCount, 0));
					if (meta.TutLevel != null || meta.CurrentLevel != null) {
						keys.TUT_LEVEL = String(
							intOr(meta.TutLevel != null ? meta.TutLevel : meta.CurrentLevel, 0)
						);
					}
					if (meta.TutsLevelsComplete != null) {
						keys.TUTS_LEVELS_COMPLETE = String(intOr(meta.TutsLevelsComplete, 0));
					}
					if (meta.TutsSpecialDone != null) {
						keys.TUTS_SPECIAL_DONE = String(intOr(meta.TutsSpecialDone, 0));
					}
					if (meta.UnlockedAliens != null && meta.UnlockedAliens !== '') {
						keys.UnlockedAliens = String(meta.UnlockedAliens);
					}
					if (meta.MatchWins != null || meta.TotalScore != null) {
						keys[MATCH_WINS_KEY] = String(
							intOr(meta.MatchWins != null ? meta.MatchWins : meta.TotalScore, 0)
						);
					}
				} else if (
					(keys[MATCH_WINS_KEY] == null || keys[MATCH_WINS_KEY] === '') &&
					(meta.MatchWins != null || meta.TotalScore != null)
				) {
					keys[MATCH_WINS_KEY] = String(
						intOr(meta.MatchWins != null ? meta.MatchWins : meta.TotalScore, 0)
					);
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
								keys: Object.keys(keys).length
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

	function readGlobal(name, fallback) {
		try {
			var irt = getIRuntime();
			if (irt && irt.globalVars && irt.globalVars[name] != null) {
				return irt.globalVars[name];
			}
		} catch (e) { /* ignore */ }
		return fallback;
	}

	function isLevelLayout(name) {
		return LEVEL_LAYOUT_RE.test(name || '');
	}

	function shouldShowDeleteButton(name) {
		if (name === 'MAIN MENU') return true;
		if (!name && state.canvasReadyAt && Date.now() - state.canvasReadyAt >= FALLBACK_SHOW_AFTER_MS) {
			return true;
		}
		return false;
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
		var roundP1 = Math.floor(numOr(readGlobal('roundP1', 0), 0));
		var roundP2 = Math.floor(numOr(readGlobal('roundP2', 0), 0));

		/* reset dedup when a new match starts */
		if (roundP1 === 0 && roundP2 === 0) {
			state.lastWinKey = '';
		}

		var prevP1 = state.prevRoundP1;
		state.prevRoundP1 = roundP1;
		state.prevRoundP2 = roundP2;

		/* lose: no points */
		if (roundP2 >= 2 && prevP1 < 2) {
			if (qsDebug) logInfo('Match lose — no score popup');
			return;
		}

		/* win edge: roundP1 crosses 1→2 (best-of-3); ignore cold-start bootstrap */
		var justWon = prevP1 >= 1 && prevP1 < 2 && roundP1 >= 2;
		if (!justWon) return;

		var winKey = 'win:' + roundP1 + ':' + roundP2;
		if (state.lastWinKey === winKey) return;
		state.lastWinKey = winKey;
		state.scorePopupOpen = true;

		var extra = {
			winReason: 'CheckWhoWonRound',
			roundP1: roundP1,
			roundP2: roundP2,
			layout: layout,
			MODE: String(readGlobal('MODE', '') || '')
		};

		function openWithScore(score) {
			score = Math.max(0, Math.floor(numOr(score, 0)));
			extra.MatchWins = score;
			logInfo('Match win -> saveScore=' + score, extra);

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

		/* +1 vào tổng trận thắng (career), popup gửi điểm tích lũy */
		readMatchWins()
			.then(function (cur) {
				var next = cur + 1;
				return writeMatchWins(next).then(function () {
					return next;
				});
			})
			.then(function (total) {
				openWithScore(total);
			})
			.catch(function (err) {
				logWarn('Match wins increment failed — fallback +1 local', err);
				openWithScore(1);
			});
	}

	/* ============================ delete UI ============================ */

	function ensureDeleteStyles() {
		if (document.getElementById('gv-ben10-style')) return;
		if (!document.head) return;
		var style = document.createElement('style');
		style.id = 'gv-ben10-style';
		style.textContent =
			'#gv-delete-btn{position:fixed;z-index:99990;padding:0;border:0;background:transparent;cursor:pointer;' +
			'width:56px;height:56px;left:12px;top:12px;display:none;pointer-events:auto;' +
			'opacity:0.6;transform:scale(0.8);transform-origin:center center;' +
			'transition:opacity 0.2s ease,transform 0.2s ease;' +
			'-webkit-tap-highlight-color:transparent;user-select:none;-webkit-user-select:none;}' +
			'#gv-delete-btn:hover,#gv-delete-btn:focus-visible{opacity:1;transform:scale(1);outline:none;}' +
			'#gv-delete-btn img{display:block;width:100%;height:100%;object-fit:contain;pointer-events:none;' +
			'-webkit-user-drag:none;user-select:none;}' +
			'#gv-reset-modal{position:fixed;inset:0;z-index:100000;display:none;align-items:center;justify-content:center;' +
			'background:rgba(0,0,0,0.55);}' +
			'#gv-reset-modal .gv-reset-box{background:#0a2a4a;border:2px solid #4db8ff;border-radius:12px;padding:20px 24px;' +
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
		img.alt = '';
		img.width = 56;
		img.height = 56;
		img.draggable = false;
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
		var size = Math.max(36, Math.min(72, DELETE_DESIGN_SIZE * scale));
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
			logInfo('delete-btn', { layout: name || '(empty)', show: show });
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
						for (var i = global.localStorage.length - 1; i >= 0; i--) {
							var k = global.localStorage.key(i);
							if (!k) continue;
							if (isProgressKey(k) || k.indexOf('c3-localstorage') === 0) {
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

	function waitForSupportCheck() {
		return new Promise(function (resolve) {
			if (global.C3_IsSupported) {
				resolve();
				return;
			}
			var n = 0;
			var t = global.setInterval(function () {
				if (global.C3_IsSupported || ++n > 120) {
					global.clearInterval(t);
					resolve();
				}
			}, 50);
		});
	}

	function importMain() {
		if (global.c3_runtimeInterface) {
			logInfo('Construct runtime already present');
			return Promise.resolve();
		}
		return import('./scripts/main.js').catch(function (err) {
			logWarn('import main.js failed — fallback script tag', err);
			return new Promise(function (resolve, reject) {
				var s = document.createElement('script');
				s.src = 'scripts/main.js';
				s.async = false;
				s.onload = function () {
					resolve();
				};
				s.onerror = function (e) {
					reject(e || new Error('main.js load failed'));
				};
				document.body.appendChild(s);
			});
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
				return waitForSupportCheck();
			})
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

	init();
	bootConstruct();
})(typeof window !== 'undefined' ? window : globalThis);
