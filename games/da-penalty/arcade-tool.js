/**
 * Arcade tool — Đá Penalty (canvas HTML5)
 * Cloud Get/SaveHistoryGame (localStorage),
 * GV.saveScore(tổng GV_MATCH_WINS) khi thắng trận (+1 mỗi trận),
 * logo Arcade SVG pointer-events:none (không mở tab).
 * Fail-open: thiếu gid/token / API lỗi → vẫn chơi local.
 */
(function (global) {
	"use strict";

	var MODULE_VERSION = "da-penalty-tool-v1";
	var GAME_SLUG = "da-penalty";
	var SAVE_URL = "https://localhost/account/SaveHistoryGame";
	var GET_URL = "https://localhost/account/GetHistoryGame";
	var MATCH_WINS_KEY = "GV_MATCH_WINS";
	var PROGRESS_KEY = "footballfaceoffv3";
	var LOGO_URL = "https://localhost/themes/default/images/logo-2022.svg";
	var SAVE_DEBOUNCE_MS = 60000;
	var BOOT_TIMEOUT_MS = 8000;
	var POLL_MS = 300;

	var qsKill = false;
	var qsDebug = false;
	try {
		var bootQs = new URLSearchParams(global.location.search);
		qsKill = bootQs.get("gvsave") === "0";
		qsDebug = bootQs.get("gv_debug") === "1";
	} catch (e) {
		qsKill = false;
		qsDebug = false;
	}

	var state = {
		dirty: false,
		seeding: false,
		scorePopupOpen: false,
		expectedUpdatedAt: null,
		saveTimer: 0,
		lastSaveAt: 0,
		lastWinKey: "",
		prevGameState: "",
		uiReady: false,
		watchStarted: false,
		initStarted: false,
		hydrateDone: false
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
			} catch (e) {
				/* cross-origin */
			}
		}

		if ((!gid || !token) && global.document && global.document.referrer) {
			try {
				var ref = new URL(global.document.referrer);
				var refQs = readQs(ref.search);
				if (!gid) gid = refQs.get("gid") || "";
				if (!token) token = refQs.get("token") || "";
			} catch (e2) {
				/* ignore */
			}
		}

		return { gid: gid, token: token || "" };
	}

	function cloudEnabled() {
		return !qsKill && !!getCredentials().gid;
	}

	/* ============================ localStorage helpers ============================ */

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

	function intOr(v, fallback) {
		var n = parseInt(v, 10);
		return isFinite(n) ? n : fallback;
	}

	function numOr(v, fallback) {
		var n = Number(v);
		return isFinite(n) ? n : fallback;
	}

	function readMatchWins() {
		return Math.max(0, Math.floor(intOr(lsGet(MATCH_WINS_KEY), 0)));
	}

	function writeMatchWins(n) {
		n = Math.max(0, Math.floor(numOr(n, 0)));
		lsSet(MATCH_WINS_KEY, String(n));
		state.dirty = true;
		return n;
	}

	function readProgressBlob() {
		var raw = lsGet(PROGRESS_KEY);
		return raw != null && raw !== "" ? raw : "0,0,0,0,0";
	}

	/* ============================ HTTP ============================ */

	function postForm(url, fields) {
		return new Promise(function (resolve, reject) {
			try {
				var body = Object.keys(fields)
					.map(function (k) {
						return encodeURIComponent(k) + "=" + encodeURIComponent(fields[k] == null ? "" : fields[k]);
					})
					.join("&");
				var xhr = new XMLHttpRequest();
				xhr.open("POST", url, true);
				xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				xhr.withCredentials = true;
				xhr.timeout = BOOT_TIMEOUT_MS;
				xhr.onload = function () {
					var text = xhr.responseText || "";
					var data = null;
					try {
						data = text ? JSON.parse(text) : null;
					} catch (e) {
						data = { raw: text };
					}
					if (xhr.status >= 200 && xhr.status < 300) resolve(data);
					else reject({ status: xhr.status, data: data });
				};
				xhr.onerror = function () {
					reject({ network: true });
				};
				xhr.ontimeout = function () {
					reject({ timeout: true });
				};
				xhr.send(body);
			} catch (e) {
				reject(e);
			}
		});
	}

	function parseMeta(res) {
		if (!res || typeof res !== "object") return null;
		var raw = res.MetaData != null ? res.MetaData : res.metadata != null ? res.metadata : res.meta;
		if (raw == null || raw === "") return null;
		if (typeof raw === "object") return raw;
		try {
			return JSON.parse(raw);
		} catch (e) {
			return null;
		}
	}

	function buildMetadata(extra) {
		var wins = readMatchWins();
		var meta = {
			metaVersion: 1,
			module: MODULE_VERSION,
			game: GAME_SLUG,
			TotalScore: wins,
			MatchWins: wins,
			footballfaceoffv3: readProgressBlob(),
			savedAt: new Date().toISOString()
		};
		if (extra && typeof extra === "object") {
			Object.keys(extra).forEach(function (k) {
				meta[k] = extra[k];
			});
		}
		return meta;
	}

	/* ============================ cloud load / save ============================ */

	function loadCloudAndApply() {
		if (qsKill) {
			logInfo("gvsave=0 — skip cloud load");
			return Promise.resolve({ skipped: true, reason: "gvsave=0" });
		}
		var cred = getCredentials();
		if (!cred.gid) {
			logInfo("No gid/token -> local fallback (dev only)");
			return Promise.resolve({ skipped: true, reason: "no-gid" });
		}

		return Promise.race([
			postForm(GET_URL, { gameId: cred.gid, token: cred.token || "" }),
			new Promise(function (resolve) {
				setTimeout(function () {
					resolve({ __timeout: true });
				}, BOOT_TIMEOUT_MS);
			})
		])
			.then(function (res) {
				if (res && res.__timeout) {
					logWarn("GetHistoryGame timeout — play local");
					return { skipped: true, reason: "timeout" };
				}
				if (res && (res.updatedAt || res.NgaySua)) {
					state.expectedUpdatedAt = res.updatedAt || res.NgaySua;
				}
				var meta = parseMeta(res);
				if (!meta) {
					logInfo("GetHistoryGame empty — start fresh / local");
					return { ok: true, seeded: false };
				}
				if (meta.cleared) {
					logInfo("Load: cloud cleared — start fresh");
					writeMatchWins(0);
					return { ok: true, seeded: false, cleared: true };
				}

				state.seeding = true;
				try {
					var cloudWins = Math.max(
						0,
						Math.floor(
							intOr(
								meta.MatchWins != null ? meta.MatchWins : meta.TotalScore,
								0
							)
						)
					);
					var localWins = readMatchWins();
					var merged = Math.max(cloudWins, localWins);
					writeMatchWins(merged);

					if (
						meta.footballfaceoffv3 != null &&
						String(meta.footballfaceoffv3) !== "" &&
						!lsGet(PROGRESS_KEY)
					) {
						lsSet(PROGRESS_KEY, String(meta.footballfaceoffv3));
					}

					state.dirty = false;
					logInfo("Seeded MatchWins from cloud", {
						cloudWins: cloudWins,
						localWins: localWins,
						merged: merged
					});
					return { ok: true, seeded: true, MatchWins: merged };
				} finally {
					state.seeding = false;
				}
			})
			.catch(function (err) {
				logWarn("GetHistoryGame error — chơi local", err);
				return { error: true };
			});
	}

	function flushSave(opts) {
		opts = opts || {};
		if (qsKill || state.seeding) {
			return Promise.resolve({ skipped: true });
		}
		if (!cloudEnabled()) {
			if (opts.force) logInfo("Save skip — no gid (dev/local ok)");
			return Promise.resolve({ skipped: true, reason: "no-gid" });
		}
		if (!state.dirty && !opts.force) {
			return Promise.resolve({ skipped: true, reason: "clean" });
		}

		var cred = getCredentials();
		var meta = buildMetadata(opts.extra);
		var body = {
			gameId: cred.gid,
			token: cred.token || "",
			metadata: JSON.stringify(meta)
		};

		return postForm(SAVE_URL, body)
			.then(function (res) {
				state.dirty = false;
				state.lastSaveAt = Date.now();
				if (res && (res.updatedAt || res.NgaySua)) {
					state.expectedUpdatedAt = res.updatedAt || res.NgaySua;
				}
				logInfo("SaveHistory OK", {
					reason: opts.reason || "flush",
					score: meta.TotalScore
				});
				return { ok: true, res: res };
			})
			.catch(function (err) {
				logWarn("SaveHistory fail", err);
				return { error: true };
			});
	}

	function scheduleSave(reason) {
		state.dirty = true;
		if (state.saveTimer) return;
		state.saveTimer = global.setTimeout(function () {
			state.saveTimer = 0;
			flushSave({ force: true, reason: reason || "debounce" });
		}, SAVE_DEBOUNCE_MS);
	}

	/* ============================ score popup ============================ */

	function getGameState() {
		try {
			return String(global.gameState || "");
		} catch (e) {
			return "";
		}
	}

	function getScores() {
		var data = global.oGameData || null;
		if (!data) return { hero: 0, enemy: 0 };
		return {
			hero: Math.floor(numOr(data.heroScore, 0)),
			enemy: Math.floor(numOr(data.enemyScore, 0))
		};
	}

	function getCurProgress() {
		return Math.floor(numOr(global.curProgress, 0));
	}

	function openWithScore(score, extra) {
		score = Math.max(0, Math.floor(numOr(score, 0)));
		extra = extra || {};
		extra.MatchWins = score;
		logInfo("Match win -> saveScore=" + score, extra);

		function afterClose() {
			state.scorePopupOpen = false;
			state.dirty = true;
			flushSave({ force: true, reason: "score-onClose", extra: extra });
		}

		var cred = getCredentials();
		if (!cred.gid) {
			logInfo("GV_SAVE_SCORE_SKIP_NO_GID", score);
			state.scorePopupOpen = false;
			state.dirty = true;
			flushSave({ force: true, reason: "win-no-gid", extra: extra });
			return;
		}

		state.scorePopupOpen = true;
		try {
			if (typeof global.GV !== "undefined") {
				new global.GV().saveScore(score, afterClose);
				if (global.console && console.log) console.log("GV_SAVE_SCORE", score);
				state.dirty = true;
				flushSave({ force: true, reason: "win-immediate", extra: extra });
				setTimeout(function () {
					if (!document.getElementById("gv_savescore") && state.scorePopupOpen) {
						afterClose();
					}
				}, 400);
				return;
			}
			logWarn("GV chua san sang — bo qua saveScore");
			afterClose();
		} catch (e) {
			logWarn("saveScore loi", e);
			try {
				new global.GV().saveScore(score);
			} catch (e2) {
				/* ignore */
			}
			afterClose();
		}
	}

	function tryShowScorePopup() {
		if (state.scorePopupOpen || qsKill) return;

		var gs = getGameState();
		var prev = state.prevGameState;
		state.prevGameState = gs;

		if (gs !== "goalkeepingComplete") {
			if (prev === "goalkeepingComplete") {
				state.lastWinKey = "";
			}
			return;
		}

		/* Chỉ kích hoạt khi vừa vào màn kết thúc trận */
		if (prev === "goalkeepingComplete") return;

		var scores = getScores();
		var progress = getCurProgress();

		if (scores.hero <= scores.enemy) {
			if (qsDebug) logInfo("Match lose/draw — no score popup", scores);
			return;
		}

		var winKey = "win:" + progress + ":" + scores.hero + "-" + scores.enemy;
		if (state.lastWinKey === winKey) return;
		state.lastWinKey = winKey;

		var extra = {
			winReason: "goalkeepingComplete",
			heroScore: scores.hero,
			enemyScore: scores.enemy,
			curProgress: progress
		};

		try {
			var next = writeMatchWins(readMatchWins() + 1);
			openWithScore(next, extra);
		} catch (err) {
			logWarn("Match wins increment failed — fallback +1 local", err);
			openWithScore(1, extra);
		}
	}

	/* ============================ logo UI ============================ */

	function ensureLogoUI() {
		if (state.uiReady) return;
		var doc = global.document;
		if (!doc || !doc.head || !doc.body) return;

		var style = doc.createElement("style");
		style.id = "gv-da-penalty-style";
		style.textContent =
			"#gv-logo-wrap{position:fixed;z-index:9999;pointer-events:none;overflow:hidden;background:transparent;}" +
			"#gv-logo-wrap img{" +
			"display:block;width:100%;height:auto;pointer-events:none;" +
			"background:transparent;border:0;-webkit-user-drag:none;user-select:none;}" +
			"#gv-logo-wrap.gv-logo-visible{" +
			"opacity:1;animation:gv-logo-shine 5s linear;}" +
			"#gv-logo-wrap.gv-logo-hidden{opacity:0;}" +
			"@keyframes gv-logo-shine{" +
			"0%{opacity:1;-webkit-mask-image:linear-gradient(100deg,transparent 20%,#000 40%,#000 60%,transparent 80%);" +
			"mask-image:linear-gradient(100deg,transparent 20%,#000 40%,#000 60%,transparent 80%);" +
			"-webkit-mask-size:250% 100%;mask-size:250% 100%;-webkit-mask-position:120% 0;mask-position:120% 0;}" +
			"40%{-webkit-mask-position:-20% 0;mask-position:-20% 0;}" +
			"100%{opacity:1;-webkit-mask-image:none;mask-image:none;}}";
		doc.head.appendChild(style);

		var logoWrap = doc.createElement("div");
		logoWrap.id = "gv-logo-wrap";
		logoWrap.hidden = true;
		logoWrap.className = "gv-logo-hidden";
		logoWrap.innerHTML = '<img src="' + LOGO_URL + '" alt="Arcade" draggable="false">';
		doc.body.appendChild(logoWrap);
		startLogoCycle();

		state.uiReady = true;
		global.addEventListener("resize", layoutLogo);
		global.addEventListener("orientationchange", function () {
			global.setTimeout(layoutLogo, 200);
		});
		layoutLogo();
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

	function getCanvasRect() {
		var el =
			global.document.getElementById("canvas") ||
			(global.document.querySelector && global.document.querySelector("canvas"));
		if (!el) return null;
		var rect = el.getBoundingClientRect();
		if (!rect || rect.width < 10 || rect.height < 10) return null;
		return rect;
	}

	function layoutLogo() {
		ensureLogoUI();
		var logoWrap = global.document.getElementById("gv-logo-wrap");
		if (!logoWrap) return;

		var gs = getGameState();
		var show = gs && gs !== "loading";
		var rect = getCanvasRect();

		if (!show || !rect) {
			logoWrap.hidden = true;
			logoWrap.style.display = "none";
			return;
		}

		var size = Math.max(48, Math.min(72, Math.round(Math.min(rect.width, rect.height) * 0.09)));
		var logoW = Math.round(size * 1.7);
		var margin = Math.max(10, Math.round(size * 0.25));

		logoWrap.hidden = false;
		logoWrap.style.display = "block";
		logoWrap.style.width = logoW + "px";
		logoWrap.style.left = Math.round(rect.left + margin) + "px";
		logoWrap.style.top =
			Math.round(rect.top + rect.height - Math.round(logoW * 0.42) - margin) + "px";
	}

	/* ============================ watch / init ============================ */

	function poll() {
		try {
			tryShowScorePopup();
			layoutLogo();
		} catch (e) {
			if (qsDebug) logWarn("poll error", e);
		}
	}

	function startWatch() {
		if (state.watchStarted) return;
		state.watchStarted = true;
		global.setInterval(poll, POLL_MS);
		poll();
	}

	function init() {
		if (state.initStarted) return;
		state.initStarted = true;

		function onDomReady(fn) {
			if (global.document && global.document.body) fn();
			else if (global.document) {
				global.document.addEventListener("DOMContentLoaded", fn);
			} else {
				global.setTimeout(function () {
					onDomReady(fn);
				}, 50);
			}
		}

		onDomReady(function () {
			ensureLogoUI();
			startWatch();
		});

		loadCloudAndApply()
			.then(function (result) {
				state.hydrateDone = true;
				finishReady(result || { ok: true });
				logInfo("Boot hydrate done", result);
			})
			.catch(function (err) {
				state.hydrateDone = true;
				finishReady({ ok: true, error: true });
				logWarn("Boot hydrate fail-open", err);
			});

		global.addEventListener("beforeunload", function () {
			if (state.dirty && cloudEnabled()) {
				try {
					flushSave({ force: true, reason: "beforeunload" });
				} catch (e) {
					/* ignore */
				}
			}
		});

		/* Periodic dirty flush */
		global.setInterval(function () {
			if (state.dirty) scheduleSave("interval");
		}, SAVE_DEBOUNCE_MS);
	}

	global.ArcadeTool = {
		whenReady: function () {
			return ready;
		},
		getMatchWins: readMatchWins,
		flushSave: flushSave,
		version: MODULE_VERSION
	};

	init();
})(typeof window !== "undefined" ? window : this);
