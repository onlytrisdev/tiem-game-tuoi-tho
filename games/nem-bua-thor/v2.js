var YaGames;
(() => {
	"use strict";
	var e = [(e, t, n) => {
			t.decode = t.parse = n(1), t.encode = t.stringify = n(2)
		}, e => {
			function t(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}
			e.exports = function(e, n, r, o) {
				n = n || "&", r = r || "=";
				var a = {};
				if ("string" != typeof e || 0 === e.length) return a;
				var i = /\+/g;
				e = e.split(n);
				var s = 1e3;
				o && "number" == typeof o.maxKeys && (s = o.maxKeys);
				var d = e.length;
				s > 0 && d > s && (d = s);
				for (var c = 0; c < d; ++c) {
					var l, u, p, m, h = e[c].replace(i, "%20"),
						g = h.indexOf(r);
					g >= 0 ? (l = h.substr(0, g), u = h.substr(g + 1)) : (l = h, u = "");
					try {
						p = decodeURIComponent(l), m = decodeURIComponent(u)
					} catch (e) {
						console.warn(e);
						continue
					}
					t(a, p) ? Array.isArray(a[p]) ? a[p].push(m) : a[p] = [a[p], m] : a[p] = m
				}
				return a
			}
		}, e => {
			var t = function(e) {
				switch (typeof e) {
					case "string":
						return e;
					case "boolean":
						return e ? "true" : "false";
					case "number":
						return isFinite(e) ? e : "";
					default:
						return ""
				}
			};
			e.exports = function(e, n, r, o) {
				return n = n || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? Object.keys(e).map((function(o) {
					var a = encodeURIComponent(t(o)) + r;
					return Array.isArray(e[o]) ? e[o].map((function(e) {
						return a + encodeURIComponent(t(e))
					})).join(n) : a + encodeURIComponent(t(e[o]))
				})).filter(Boolean).join(n) : o ? encodeURIComponent(t(o)) + r + encodeURIComponent(t(e)) : ""
			}
		}, , (e, t, n) => {
			n.d(t, {
				Z: () => d
			});
			var r = n(8),
				o = n(5),
				a = n(10),
				i = n(17);
			const s = Object.create(null),
				d = {
					init() {},
					sendOnceDeprecatedUsage(e) {
						e in s || (s[e] = 1, this.params({
							borrowParams: {
								sdkDeprecatedUsage: {
									key: e,
									appId: (0, a.rh)()
								}
							},
							service: i.m_
						}))
					},
					params(e) {
						o.Z.postToParent({
							type: "metrika",
							action: "params",
							data: e
						}).catch((e => {
							(0, r.fF)(e)
						}))
					},
					reachGoal(e, t, n) {
						o.Z.postToParent({
							type: "metrika",
							action: "reachGoal",
							data: {
								data: t,
								goal: e,
								params: n
							}
						}).catch((e => {
							(0, r.fF)(e)
						}))
					}
				}
		}, (e, t, n) => {
			n.d(t, {
				Z: () => f
			});
			var r = n(8);
			class o extends Error {
				constructor({
					code: e,
					message: t
				}, n, r) {
					super(t, n, r), this.name = "AuthError", this.code = e, Object.setPrototypeOf(this, o.prototype), Error.captureStackTrace && Error.captureStackTrace(this, o)
				}
				toJSON() {
					return {
						code: this.code,
						message: this.message,
						name: this.name,
						stack: this.stack
					}
				}
			}
			const a = o;
			var i = n(6),
				s = n(7);
			const d = {
				AuthError: a,
				FetchError: i.Z,
				PaymentsError: s.Z
			};
			var c = Object.defineProperty,
				l = Object.getOwnPropertySymbols,
				u = Object.prototype.hasOwnProperty,
				p = Object.prototype.propertyIsEnumerable,
				m = (e, t, n) => t in e ? c(e, t, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n
				}) : e[t] = n,
				h = (e, t) => {
					for (var n in t || (t = {})) u.call(t, n) && m(e, n, t[n]);
					if (l)
						for (var n of l(t)) p.call(t, n) && m(e, n, t[n]);
					return e
				};
			class g {
				constructor() {
					this.suppressNoGameFrameWarning = !1, this._promises = Object.create(null), this._externalListeners = Object.create(null), this._internalListeners = Object.create(null), this._addEventListener()
				}
				get _parentTarget() {
					return window.parent !== window ? window.parent : void 0
				}
				get _gameFrame() {
					const e = function() {
						const e = window.YandexGamesSDK && window.YandexGamesSDK.FRAME_ID;
						if (e && "string" == typeof e) {
							const t = document.getElementById(e);
							if (t) return t
						}
					}();
					return e || this.suppressNoGameFrameWarning || console.warn("No game frame to post"), e
				}
				get _gameFrameAllowedOrigins() {
					var e;
					try {
						const t = null == (e = this._gameFrame) ? void 0 : e.dataset.allowedOrigins;
						if (!t) return;
						return JSON.parse(t)
					} catch (e) {
						return
					}
				}
				get _childTarget() {
					var e;
					return null == (e = this._gameFrame) ? void 0 : e.contentWindow
				}
				_addEventListener() {
					window.addEventListener("message", (e => {
						const {
							source: t
						} = e.data || {};
						"YandexGamesSDK" === t && this._handleEvent(e)
					}))
				}
				_handleEvent(e) {
					const {
						type: t,
						action: n,
						messageId: o,
						originMessageId: a,
						payload: i,
						originPayload: s,
						data: c,
						error: l,
						errorJSON: u
					} = e.data || {}, p = this._promises[a];
					p && (this.deletePromise(a), void 0 === l ? p.resolve({
						type: t,
						action: n,
						originPayload: s,
						data: c
					}) : p.reject(function({
						error: e,
						errorJSON: t
					}) {
						if (t) try {
							const e = JSON.parse(t);
							if (e && e.name in d) return new d[e.name](e)
						} catch (e) {
							(0, r.fF)(e)
						}
						return new Error(e || "")
					}({
						error: l,
						errorJSON: u
					})));
					const m = (e = {}) => {
						const r = {
							type: e.type || t,
							action: e.action || n,
							originMessageId: o,
							originPayload: i,
							data: e.data || {}
						};
						! function(e, t) {
							t.error && (e.error = String(t.error.message) || null, e.errorJSON = JSON.stringify(t.error) || null)
						}(r, e), this.postCallbackToChild(r)
					};
					const h = this._externalListeners[t] || [];
					for (const t of h) try {
						t(e, m)
					} catch (e) {
						(0, r.fF)(e)
					}
				}
				onAllMessages(e, t) {
					this.onExternalMessage(e, t), this.onInternalMessage(e, t)
				}
				offAllMessages(e, t) {
					this.offExternalMessage(e, t), this.offInternalMessage(e, t)
				}
				onExternalMessage(e, t) {
					this._onMessage(this._externalListeners, e, t)
				}
				offExternalMessage(e, t) {
					this._offMessage(this._externalListeners, e, t)
				}
				onInternalMessage(e, t) {
					this._onMessage(this._internalListeners, e, t)
				}
				offInternalMessage(e, t) {
					this._offMessage(this._internalListeners, e, t)
				}
				_onMessage(e, t, n) {
					if ("string" == typeof t && (t = [t]), !Array.isArray(t)) throw new Error('Wrong argument "types"');
					for (const r of t) r in e || (e[r] = []), e[r].push(n)
				}
				_offMessage(e, t, n) {
					if ("string" == typeof t && (t = [t]), !Array.isArray(t)) throw new Error('Wrong argument "types"');
					for (const r of t) r in e && (e[r] = e[r].filter((e => e !== n)))
				}
				externalPost(e) {
					this._handleEvent(e)
				}
				post(e) {
					return this.postEventDataToListeners(e, this._internalListeners[e.type])
				}
				postEventDataToListeners(e, t = []) {
					const {
						action: n,
						type: o
					} = e;
					return new Promise((a => {
						const i = `${Date.now()}-${Math.random()}`,
							s = (e = {}) => {
								const t = {
									action: e.action || n,
									data: e.data || {},
									errorInstance: e.error,
									originMessageId: i,
									type: e.type || o
								};
								a(t)
							};
						for (const n of t) try {
							n({
								data: h({}, e)
							}, s)
						} catch (e) {
							(0, r.fF)(e)
						}
					}))
				}
				hasParent() {
					return Boolean(this._parentTarget)
				}
				postToParent(e) {
					// const t = this._parentTarget;
					return t ? this._post(t, e) : Promise.reject(new Error("No parent to post message"))
				}
				hasChild() {
					this.suppressNoGameFrameWarning = !0;
					const e = Boolean(this._childTarget);
					return this.suppressNoGameFrameWarning = !1, e
				}
				postToChild(e) {
					const t = this._childTarget;
					return t ? this._post(t, e) : Promise.reject(new Error(`No child to post message: type = ${e.type}, action = ${e.action}`))
				}
				postCallbackToChild(e) {
					const t = this._childTarget;
					return t ? this._post(t, e) : Promise.reject(new Error(`No child to post message: type = ${e.type}, action = ${e.action}`))
				}
				clearPromiseWaitTimeout(e) {
					const t = this._promises[e];
					(null == t ? void 0 : t.timeoutId) && (window.clearTimeout(t.timeoutId), delete t.timeoutId)
				}
				deletePromise(e) {
					this.clearPromiseWaitTimeout(e), delete this._promises[e]
				}
				_post(e, t) {
					const n = Date.now(),
						o = `${n}-${Math.random()}`;
					t = Object.assign({}, t, {
						source: "YandexGamesSDK",
						messageId: o
					});
					let a = e => {},
						i = e => {};
					const s = new Promise(((e, t) => {
						a = e, i = t
					}));
					this._promises[o] = {
						promise: s,
						resolve: a,
						reject: i,
						time: n
					};
					try {
						// e.postMessage(t, "*")
					} catch (e) {
						return this.deletePromise(o), Promise.reject(e)
					}
					if ("timeout" in t) {
						const {
							timeout: e
						} = t;
						"number" == typeof e && e > 0 ? this._promises[o].timeoutId = window.setTimeout((() => {
							this.deletePromise(o), i(new Error("Message rejected by timeout"))
						}), e) : (0, r.fF)(new Error("Wrong timeout value"))
					}
					return s
				}
			}
			let _;
			if ("object" == typeof window) window.YandexGamesSDKGlobals = window.YandexGamesSDKGlobals || {}, window.YandexGamesSDKGlobals.messaging || (window.YandexGamesSDKGlobals.messaging = new g), _ = window.YandexGamesSDKGlobals.messaging;
			else {
				const e = () => {
						throw new Error("Not impl")
					},
					t = e => Promise.reject(new Error("Not impl"));
				_ = {
					externalPost: t => e,
					hasChild: () => !1,
					hasParent: () => !1,
					offAllMessages: e,
					offExternalMessage: e,
					offInternalMessage: e,
					onAllMessages: e,
					onExternalMessage: e,
					onInternalMessage: e,
					post: t,
					postToChild: t,
					postToParent: t
				}
			}
			const f = _
		}, (e, t, n) => {
			n.d(t, {
				Z: () => o
			});
			class r extends Error {
				constructor({
					code: e,
					httpStatus: t,
					message: n
				}, o, a) {
					super(n, o, a), this.name = "FetchError", this.code = e, this.httpStatus = t, Object.setPrototypeOf(this, r.prototype), Error.captureStackTrace && Error.captureStackTrace(this, r)
				}
				toJSON() {
					return {
						code: this.code,
						httpStatus: this.httpStatus,
						message: this.message,
						name: this.name,
						stack: this.stack
					}
				}
			}
			const o = r
		}, (e, t, n) => {
			n.d(t, {
				Z: () => o
			});
			class r extends Error {
				constructor({
					code: e,
					httpStatus: t,
					message: n
				}, o, a) {
					super(n, o, a), this.name = "PaymentsError", this.code = e, this.httpStatus = t, Object.setPrototypeOf(this, r.prototype), Error.captureStackTrace && Error.captureStackTrace(this, r)
				}
				toJSON() {
					return {
						code: this.code,
						httpStatus: this.httpStatus,
						message: this.message,
						name: this.name,
						stack: this.stack
					}
				}
			}
			const o = r
		}, (e, t, n) => {
			n.d(t, {
				Ts: () => _,
				X4: () => p,
				Zi: () => m,
				fF: () => g
			});
			var r = n(9),
				o = n(5),
				a = n(10),
				i = Object.defineProperty,
				s = Object.getOwnPropertySymbols,
				d = Object.prototype.hasOwnProperty,
				c = Object.prototype.propertyIsEnumerable,
				l = (e, t, n) => t in e ? i(e, t, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n
				}) : e[t] = n,
				u = (e, t) => {
					for (var n in t || (t = {})) d.call(t, n) && l(e, n, t[n]);
					if (s)
						for (var n of s(t)) c.call(t, n) && l(e, n, t[n]);
					return e
				};
			const p = "YandexSDKLogError";

			function m(e) {
				var t;
				let n;
				try {
					throw new Error
				} catch (r) {
					const o = /(\w+)@|at (.+) \(/g,
						a = e || r.stack || "";
					if (a.matchAll) {
						const e = Array.from(a.matchAll(o)) || [];
						n = null == (t = e[e.length - 1]) ? void 0 : t[2]
					}
				}
				return n
			}

			function h(e, t, n) {
				var i, s, d;
				const c = function(e, t) {
					var n, o;
					const {
						message: i,
						additional: s = {}
					} = (0, r.S)(e.message || String(e)), d = {
						columnNumber: null != (n = e.columnNumber) ? n : -1,
						fileName: e.fileName || "",
						lineNumber: null != (o = e.lineNumber) ? o : -1,
						name: e.name || "Error",
						message: i,
						stack: e.stack || ""
					}, c = {
						appId: (0, a.rh)(),
						version: parseInt("1694664385", 10) || 0
					};
					return d.additional = u(u(u(u({}, e.additional), t.additional), c), s), d
				}(t, n);
				n.message && (c.message = n.message), n.prefix && (c.message = `${n.prefix} ${c.message}`), o.Z["YaGames" in window ? "postToParent" : "post"]({
					data: {
						block: `ErrorCounter/common: ${e}`,
						error: c,
						level: null != (i = n.level) ? i : "error",
						source: e,
						sourceMethod: null != (s = n.sourceMethod) ? s : m(c.stack),
						type: null != (d = n.type) ? d : "error"
					},
					type: "error"
				}).catch(console.warn)
			}

			function g(e, t = {}) {
				h("sdk", e, t), console.warn(e)
			}

			function _(e, t = {}) {
				h("sdk-game", e, t), console.error(e, p)
			}
		}, (e, t, n) => {
			n.d(t, {
				S: () => o,
				Z: () => a
			});
			const r = [{
					regexp: new RegExp("User .+ already exists in users list!"),
					title: "User already exists in users list!"
				}, {
					regexp: new RegExp("\\(Filename:.+Line: -?[0-9]+\\)"),
					title: "Unity"
				}, {
					substr: "UnityEngine",
					title: "Unity"
				}, {
					substr: "Dimensions must match",
					title: "Unity"
				}, {
					substr: "Loading FSB failed for audio clip",
					title: "Unity"
				}, {
					substr: "UnityLoader",
					title: "Unity"
				}, {
					substr: "FS.syncfs operations in flight at once, probably just doing extra work",
					title: "Unity"
				}, {
					substr: "GLSL",
					title: "GLSL"
				}, {
					substr: "ValerypopoffJS plugin",
					title: "ValerypopoffJS plugin"
				}, {
					substr: "https://github.com/cocos-creator/engine",
					title: "cocos-creator"
				}, {
					substr: "Wicket.Ajax",
					title: "Wicket.Ajax"
				}, {
					substr: 'Error loading sound "%s"',
					title: '"loading sound"'
				}, {
					substr: "Error loading image",
					title: '"loading image"'
				}, {
					substr: "Error loading Texture",
					title: '"loading Texture"'
				}, {
					substr: "Error loading asset",
					title: '"loading asset"'
				}, {
					substr: "Error loading audio url",
					title: '"loading audio url"'
				}, {
					substr: "Error loading animation resource",
					title: '"loading animation resource"'
				}, {
					substr: "Failed to load resource:",
					title: '"loading resource"'
				}, {
					substr: "Could not load",
					title: '"loading"'
				}, {
					substr: "Failed to load",
					title: '"loading"'
				}, {
					regexp: new RegExp("[Cc]ould not allocate memory"),
					title: "working with memory"
				}, {
					substr: "Out of executable memory in function at index",
					title: "working with memory"
				}, {
					substr: "memory access out of bounds",
					title: "working with memory"
				}, {
					substr: "pre-main prep time: ",
					title: '"pre-main prep time"'
				}, {
					substr: "FAILED DIGGING: ",
					title: '"DIGGING"'
				}, {
					substr: "sth wrong with connection!",
					title: '"sth wrong with connection!"'
				}, {
					substr: "Object2D is not available",
					title: '"Object2D is not available"'
				}, {
					regexp: new RegExp("^Client : Error finish action.*?respawn$"),
					title: '"finish action respawn"'
				}, {
					substr: "[TokenStorageYandex]",
					title: "TokenStorageYandex"
				}, {
					substr: "TOO_SMALL_CONTAINER",
					title: "TOO_SMALL_CONTAINER"
				}, {
					substr: "window.cb",
					title: "window.cb"
				}, {
					regexp: /abort\([\d]*\) at Error at jsStackTrace/,
					title: "abort at Error at jsStackTrace"
				}],
				o = e => {
					for (const t of r)
						if (t.regexp && -1 !== e.search(t.regexp) || t.substr && e.includes(t.substr)) return {
							message: `[grouped] Error related to ${t.title}`,
							additional: {
								message: e
							}
						};
					return {
						message: e
					}
				},
				a = e => {
					const t = (e => e.map((e => {
							if ("object" == typeof e) try {
								return JSON.stringify(e)
							} catch (t) {
								return `${e}: ${t.message}`
							}
							return String(e)
						})).join(" "))(e),
						n = o(t),
						r = new Error(n.message);
					return n.additional && (r.additional = n.additional), r
				}
		}, (e, t, n) => {
			n.d(t, {
				$g: () => d,
				H8: () => c,
				mv: () => u,
				rh: () => l
			});
			var r = n(11),
				o = n(12),
				a = n(14),
				i = n(15);
			// const s = /^(?:https:\/\/app-([^.]+)\.games\.s3\.yandex\.net\/|https:\/\/games\.s3\.mdst\.yandex\.net\/([^/]+)\/|https:\/\/(?:.+\.)*yandex\.(?:ru|by|kz|ua|uz|com|com\.tr|az|co\.il|com\.am|com\.ge|ee|fi|fr|lt|lv|md|pl|tj|tm)\/games\/app\/([^/?&#]+))/;

			function d(e) {
				const t = {};
				u() && (t.draft = "true");
				const n = l();
				return n && (t["app-id"] = n), (0, r.Z)({
					url: e,
					params: t
				})
			}

			function c(e) {
				return "1" === (0, o.VB)("revert_unique_id") ? (0, r.Z)({
					url: e,
					params: {
						revert_unique_id: "1"
					}
				}) : e
			}

			function l() {
				var e, t;
				if ("undefined" == typeof window) return "";
				if (window.YandexGamesSDK && window.YandexGamesSDK.environment) return window.YandexGamesSDK.environment.app.id;
				if (window.YandexGamesSDKEnvironment) return window.YandexGamesSDKEnvironment.app.id;
				console.warn("Can't get app id from `window.YandexGamesSDKEnvironment`", null == window ? void 0 : window.YandexGamesSDKEnvironment), (0, a.H)({
					block: i.W.UTILS_LOCATION,
					level: null == (t = null == (e = window.Ya) ? void 0 : e.Rum) ? void 0 : t.ERROR_LEVEL.WARN
				}, new Error("Old way: get app id from location"));
				const n = String(window.location).match(s);
				return n ? n[1] || n[2] || n[3] : (0, o.VB)("app-id") || ""
			}

			function u() {
				var e;
				return (null == (e = window.YandexGamesSDK) ? void 0 : e.game) ? window.YandexGamesSDK.game.info.isDraft : "true" === (0, o.VB)("draft")
			}
		}, (e, t, n) => {
			function r(e) {
				const {
					url: t,
					params: n = {},
					hash: r = {},
					removed: a = [],
					encoded: i = !0
				} = e;
				if (!t) throw new Error("addGetParams: function has no url");
				const s = t.split("#"),
					d = s[0].split("?");
				let c = o(d, n, i, a),
					l = o(s, r, i, a);
				return c && (c = `?${c}`), l && (l = `#${l}`), `${d[0]}${c}${l}`
			}

			function o(e, t, n, r) {
				return e.length > 1 && e[1].length && e[1].split("&").forEach((e => {
					const [n, r] = e.split("=");
					if (!t[n]) try {
						t[n] = decodeURIComponent(r)
					} catch (e) {
						t[n] = r
					}
				})), Object.keys(t).filter((e => !r.includes(e))).filter((e => void 0 !== e)).map((e => `${e}=${n?encodeURIComponent(t[e]):t[e]}`)).join("&")
			}
			n.d(t, {
				Z: () => r
			})
		}, (e, t, n) => {
			n.d(t, {
				VB: () => o
			});
			n(0);
			var r = n(13);
			Object.defineProperty, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;

			function o(e) {
				var t, n;
				if ("object" == typeof window) return (null == (n = null == (t = window.appData) ? void 0 : t.location) ? void 0 : n.entryQuery[e]) || (0, r.Z)(location)[e]
			}
		}, (e, t, n) => {
			function r(e, t = !0) {
				const n = Object.create(null);
				return [e.hash.replace(/^#/, ""), e.search.replace(/^\?/, "")].join("&").split("&").filter(Boolean).forEach((e => {
					const [r, o] = e.split("=");
					try {
						n[r] = t ? decodeURIComponent(o) : o
					} catch (e) {
						console.warn(e)
					}
				})), n
			}
			n.d(t, {
				Z: () => r
			})
		}, (e, t, n) => {
			n.d(t, {
				uh: () => m,
				H: () => g
			});
			const r = [{
					regexp: new RegExp(/Monetization error \[yandex]: yandex error - Container with id .* is hidden/),
					title: "Monetization error [yandex]: yandex error - Container is hidden"
				}, {
					regexp: new RegExp(/Monetization error \[google]: yandex error - Container with id .* is hidden/),
					title: "Monetization error [google]: yandex error - Container is hidden"
				}, {
					regexp: new RegExp(/Monetization error \[yandex]: yandex error - Container with id .* is not found \(init\)/),
					title: "Monetization error [yandex]: yandex error - Container is not found (init)"
				}, {
					regexp: new RegExp(/Monetization error \[google]: yandex error - Container with id .* is not found \(init\)/),
					title: "Monetization error [google]: yandex error - Container is not found (init)"
				}, {
					substr: "[SW] Trouble with registration; Failed to register a ServiceWorker",
					title: "[SW] Trouble with registration; Failed to register a ServiceWorker"
				}, {
					substr: "window.cb",
					title: "Error related to window.cb"
				}],
				o = (e, t) => {
					var n;
					if (!e.startsWith("[SW]")) return t;
					const r = null == (n = e.split(": ").pop()) ? void 0 : n.trim();
					return r === e ? t : `${t}: ${r}`
				};
			var a = n(15),
				i = Object.defineProperty,
				s = Object.getOwnPropertySymbols,
				d = Object.prototype.hasOwnProperty,
				c = Object.prototype.propertyIsEnumerable,
				l = (e, t, n) => t in e ? i(e, t, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n
				}) : e[t] = n,
				u = (e, t) => {
					for (var n in t || (t = {})) d.call(t, n) && l(e, n, t[n]);
					if (s)
						for (var n of s(t)) c.call(t, n) && l(e, n, t[n]);
					return e
				};
			const p = () => {
					var e;
					return Boolean("undefined" != typeof window && (null == (e = null == window ? void 0 : window.Ya) ? void 0 : e.Rum))
				},
				m = () => {
					var e, t;
					return Boolean(p() && (null == (t = null == (e = window.Ya) ? void 0 : e.Rum) ? void 0 : t.logError))
				};

			function h() {
				var e, t, n;
				try {
					throw new Error
				} catch (r) {
					const o = /(\w+)@|at (.+) \(/g,
						a = r.stack || "";
					if (a.matchAll) {
						const r = Array.from(a.matchAll(o)) || [];
						return (null == (e = r[2]) ? void 0 : e[2]) || (null == (t = r[1]) ? void 0 : t[2]) || (null == (n = r[0]) ? void 0 : n[2])
					}
					return
				}
			}
			const g = function(e, t) {
				var n, i, l, p, g;
				if (!m()) return;
				let _ = e,
					{
						additional: f,
						level: w,
						message: y,
						prefix: v,
						source: b = "catalog",
						sourceMethod: E
					} = _,
					k = ((e, t) => {
						var n = {};
						for (var r in e) d.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
						if (null != e && s)
							for (var r of s(e)) t.indexOf(r) < 0 && c.call(e, r) && (n[r] = e[r]);
						return n
					})(_, ["additional", "level", "message", "prefix", "source", "sourceMethod"]);
				const {
					message: P,
					additional: S
				} = (e => {
					for (const t of r)
						if (t.regexp && -1 !== e.search(t.regexp) || t.substr && e.includes(t.substr)) return {
							message: `[grouped] ${o(e,t.title)}`,
							additional: {
								message: e
							}
						};
					return {
						message: e
					}
				})(y || (null == t ? void 0 : t.message) || String(e));
				y = P, w = w || (null == (i = null == (n = window.Ya) ? void 0 : n.Rum) ? void 0 : i.ERROR_LEVEL.ERROR) || "error", t = t || e, S && (f = u({
					additional: f
				}, S)), v && (y = `${v} ${y}`);
				const A = u({
					additional: f,
					block: null != (l = k.block) ? l : a.W.RUM_UNSPECIFIED,
					ignoreErrorMessage: !0,
					level: w,
					message: y,
					source: b,
					sourceMethod: E || h()
				}, k);
				null == (g = null == (p = window.Ya) ? void 0 : p.Rum) || g.logError(A, t)
			}
		}, (e, t, n) => {
			n.d(t, {
				W: () => r
			});
			var r = (e => (e.AD_FOX = "Adfox", e.ADV_STICKY = "AdvSticky", e.APP_COMPONENT = "App: component", e.APP_PAGE = "App: page", e.BUNDLES_PLAY = "Bundles play", e.GAME_IMAGE = "GameImage", e.GAMETOK = "Gametok", e.GOOGLE_ADS = "Google ads", e.ERROR_BOUNDARY = "Error boundary", e.ERROR_COUNTER = "Error counter", e.I18N = "i18n", e.METRIKA = "Metrika", e.MONETIZATION = "Monetization", e.PARTNER = "Embedding in partner", e.PLAY_TO_EARN = "Play2Earn", e.OFFLINE_MOD_HELPER = "Offline mod helper", e.REDUX = "Redux", e.REDUX_GAMETOK = "Redux in Gametok", e.RUM_NATIVE_ERROR = "Rum: native error in catalog", e.RUM_UNSPECIFIED = "Rum: unspecified error without block", e.SERVER_MIDDLEWARE = "Server middleware", e.SERVICE_WORKER_REGISTRATION = "ServiceWorker Registration", e.SERVICE_WORKER_UNREGISTRATION = "ServiceWorker Unregistration", e.SHORTCUTS_POPUP_MANAGER = "ShortcutsPopupManager", e.SSE = "Notify API", e.TURBO_APP = "Turbo app", e.TV = "tv", e.UTILS_LOCATION = "Utils: location", e.UTILS_UNIVERSAL = "Utils: universal", e.XSOLLA = "Xsolla", e.WAIT_TTI = "Wait TTI", e.VIDEO_LOADER = "Video loader", e))(r || {})
		}, (e, t, n) => {
			n.d(t, {
				xYt: () => _,
				NAu: () => g,
				Go0: () => A,
				p4F: () => k,
				dsH: () => S,
				x2l: () => P,
				SBp: () => b,
				U_6: () => m,
				lbi: () => f
			});
			const r = ["az", "by", "co.il", "com", "com.am", "com.ge", "com.tr", "ee", "fr", "kz", "lt", "lv", "md", "ru", "tj", "tm", "uz"],
				o = ["com"],
				a = {
					az: ["az"],
					by: ["be", "ru"],
					"co.il": ["he"],
					com: ["en", "af", "am", "ar", "az", "be", "bg", "bn", "ca", "cs", "da", "de", "el", "en", "es", "et", "eu", "fa", "fi", "fr", "gl", "he", "hi", "hr", "hu", "hy", "id", "is", "it", "ja", "ka", "kk", "km", "kn", "ko", "ky", "lo", "lt", "lv", "mk", "ml", "mn", "mr", "ms", "my", "ne", "nl", "no", "pl", "pt", "ro", "ru", "si", "sk", "sl", "sr", "sv", "sw", "ta", "te", "tg", "th", "tk", "tl", "tr", "uk", "ur", "uz", "vi", "zh", "zu"],
					"com.am": ["hy"],
					"com.ge": ["ka"],
					"com.tr": ["tr"],
					ee: ["et"],
					fr: ["fr", "en"],
					kz: ["kk", "ru"],
					lt: ["lt"],
					lv: ["lv"],
					md: ["ro"],
					ru: ["ru", "en", "be", "uk", "kk", "uz"],
					tj: ["tg"],
					tm: ["tk"],
					uz: ["uz"]
				};
			Object.keys(a).reduce(((e, t) => (e[t] = a[t][0], e)), {});
			var i = Object.defineProperty,
				s = Object.defineProperties,
				d = Object.getOwnPropertyDescriptors,
				c = Object.getOwnPropertySymbols,
				l = Object.prototype.hasOwnProperty,
				u = Object.prototype.propertyIsEnumerable,
				p = (e, t, n) => t in e ? i(e, t, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n
				}) : e[t] = n;
			var m = (e => (e.PLAYHOP = "playhop", e.YANDEX = "yandex", e.YA = "ya", e))(m || {});
			var h = (e => (e.ANDROID_OTHER = "android_other", e.ANDROID_TV = "tv_android", e.ANDROID_STANDALONE = "android_standalone", e.ANDROID_YABRO = "android_yabro", e.ANDROID_YASEARCH = "android_yasearch", e.DESKTOP_OTHER = "desktop_other", e.IOS_CHROME = "ios_chrome", e.IOS_OTHER = "ios_other", e.IOS_SAFARI = "ios_safari", e.IOS_SUPERAPP = "ios_superapp", e.MOBILE_OTHER = "mobile_other", e.IGROTOK_LITE = "igrotok_app_lite", e.IGROTOK_APP_ANDROID = "igrotok_app_android", e))(h || {});
			var g = (e => (e.YAN = "YAN", e.HOP = "HOP", e))(g || {});
			Object.freeze(Object.values(h).reduce(((e, t) => {
				return n = ((e, t) => {
					for (var n in t || (t = {})) l.call(t, n) && p(e, n, t[n]);
					if (c)
						for (var n of c(t)) u.call(t, n) && p(e, n, t[n]);
					return e
				})({}, e), s(n, d({
					[t]: t
				}));
				var n
			}), {}));
			var _ = (e => (e.L = "l", e.M = "m", e.PAGE_ICON_DESKTOP = "page_icon_desktop", e.PAGE_ICON_DESKTOP_WITH_PLAY = "page_icon_desktop_with_play", e.PAGE_ICON_MOBILE = "page_icon_mobile", e.PAGE_ICON_MOBILE_WITH_PLAY = "page_icon_mobile_with_play", e.PAGE_SCROLLED_ICON_MOBILE = "page_scrolled_icon_mobile", e.PREMIUM = "premium", e.PREMIUM_BIG = "premium_big", e.PROFILE_RECENT_GAMES = "profile_recent_games", e.PROMO_BAR = "promo_bar", e.RECOMMENDED_NEW = "recommended_new", e.ADAPTIVE_RECOMMENDED_NEW = "adaptive_recommended_new", e.S = "s", e.SIZE_22 = "size22", e.SIZE_48 = "size48", e.SIZE_36 = "size36", e.YOUR_GAMES = "your_games", e.TV = "tv", e.CATEGORIZED_NEW_L = "categorized_new_l", e))(_ || {});
			const f = {
				achievementNotifier: "achievement_notifier",
				advTypesEnabled: "adv_types_enabled",
				advShowTimeoutFullscreen: "adv_show_fullscreen_timeout",
				advShowTimeoutRewarded: "adv_show_rewarded_timeout",
				advDisableText: "adv_disable_text",
				advStickyEnabledOnStart: "adv_sticky_enabled_on_start",
				advStickyBannerManagerNew: "adv_sticky_banner_manager_new_2",
				advStickyBannerDisabled: "adv_sticky_banner_disabled",
				advStickyBannerGtp: "adv_sticky_banner_gtp",
				advStickyBannerPrebid: "adv_sticky_banner_prebid2",
				advStickyGooglePerAppBlocks: "adv_sticky_google_per_app_blocks",
				advStickyBannerNative: "adv_sticky_banner_native",
				advStickyBannerNativeBannerIds: "adv_sticky_banner_native_banner_ids",
				advStickyBannerNativeLibrary: "adv_sticky_banner_native_library",
				advHighGptStickyBlockIds: "adv_high_gpt_sticky_block_ids",
				advStickyBannerLandscapeAdditionalBlock: "adv_sticky_banner_landscape_additional_block",
				advStickyBannerMinPortraitViewportHeight: "adv_sticky_banner_min_portrait_viewport_height",
				advStickyBannerMinLandscapeViewportHeight: "adv_sticky_banner_min_landscape_viewport_height",
				advStickyBannerForcedHideAd: "adv_sticky_banner_forced_hide_ad",
				advStickyBannerGameLocations: "adv_sticky_banner_game_locations",
				advStickyBannerUpToRight: "adv_sticky_banner_up_to_right",
				advStickyBannerBottomToRight: "adv_sticky_banner_bottom_to_right",
				advStickyBannerMinHeightForHigherAd: "adv_sticky_banner_min_height_for_higher_ad",
				advStickyBannerLoadTimeout: "adv_sticky_banner_load_timeout",
				advStickyBannerRefreshInterval: "adv_sticky_banner_refresh_interval",
				advStickyBannerDesktopWidth: "adv_sticky_banner_desktop_width",
				advStickyBannerPortraitHeight: "adv_sticky_banner_portrait_height",
				advStickyBannerLandscapeHeight: "adv_sticky_banner_landscape_height",
				advStickyBannerRetries: "adv_sticky_banner_retries",
				advStickyBannerLandscapeWidth: "adv_sticky_banner_landscape_width",
				advGptStickyBannerIds: "adv_gpt_sticky_banner_ids",
				advYandexStickyBannerIds: "adv_yandex_sticky_banner_ids",
				advStickyBannerWhiteBackgroundOnDesktop: "adv_sticky_banner_white_background_on_desktop",
				adaptiveFeed: "adaptive_feed",
				adfoxVideoAdv: "adfox_video_adv",
				adsenseFullscreenPlacementType: "adsense_fullscreen_placement_type",
				adsenseAdChannel: "adsense_ad_channel",
				adScriptInitTimeout: "ad_script_init_timeout",
				adScriptAdsenseInitTimeout: "ad_script_adsense_init_timeout",
				advDelay: "adv_delay",
				azureMirror: "azure_mirror",
				asyncReact: "async_react",
				bannerCarousel: "bk",
				bannerCarouselDirect: "bk_direct",
				balancePopupWaitLoadTimeout: "balance_popup_wait_load_timeout",
				blurBackground: "blur_background",
				catalogGptAdPaths: "catalog_gpt_ad_paths",
				catalogGptAdPaths2: "catalog_gpt_ad_paths2",
				catalogGptBannerType: "catalog_gpt_banner_type",
				catalogRsyaMobileHeight: "catalog_rsya_mobile_height",
				catalogRsyaCustomBlock: "catalog_rsya_custom_block",
				catalogLogWithHoc: "catalog_log_with_hoc",
				catalogShortcutOverhand: "catalog_shortcut_overhand",
				catalogSmallerPremiumBigPic: "catalog_smaller_premium_big_pic",
				categoriesToExclude: "categories_to_exclude",
				canOpenAdBlockPopup: "can_open_add_block_popup",
				disableNewCategorizedGames: "disable_new_categorized_games",
				catalogShortcutPromptInstallWaitingPeriod: "catalog_shortcut_prompt_install_waiting_period",
				catalogShortcutPromptMaxCallCount: "catalog_shortcut_prompt_max_call_count",
				catalogShortcutPromptWaitingPeriod: "catalog_shortcut_prompt_waiting_period",
				cfMirror: "cf_mirror",
				cfMirrorGameUrl: "cf_mirror_game_url",
				cfMirrorGameUrlAppId: "cf_mirror_game_url_appid",
				cfMirrorStatic: "cf_mirror_static",
				cfMirrorStaticBuild: "cf_mirror_static_build",
				dailyWelcomeBonus: "daily_welcome_bonus",
				dailyWelcomeBonusNoPopupModality: "daily_welcome_bonus_no_popup_modality",
				dailyWelcomeBonusPopupQuietDays: "daily_welcome_bonus_popup_quiet_days",
				delayAdsOnDesktop: "delay_ads_on_desktop",
				delayAdsOnTTI: "delay_ads_on_tti",
				delayAdsLoad: "delay_ads_load",
				disableAdButtonInStickyWithAnimation: "disable_ad_button_in_sticky_with_animation",
				disableAdButtonInStickAnimationDelay: "disable_ad_button_in_sticky_animation_delay",
				disableDynamicPartnerCSP: "disable_dynamic_partner_csp",
				delayInitYandexWaterfall: "delay_init_yandex_waterfall",
				disableNativeAdv: "disable_native_adv",
				disableNativeRewardedPreload: "disable_native_rewarded_preload",
				disableYandexWaterfall: "disable_yandex_waterfall",
				disableYandexWaterfallInCatalog: "disable_yandex_waterfall_in_catalog",
				disableYandexWaterfallOnInit: "disable_yandex_waterfall_on_init",
				disableAdButton: "disable_ad_button",
				disableRotationBanner: "disable_rotation_banner",
				disableWeeklyActivityBonus: "disable_weekly_activity_bonus",
				earlyGuard: "early_guard",
				approveLeaveBeforeGameLoad: "approve_leave_before_game_load",
				fakeFullscreenLoadTimeout: "fake_fullscreen_load_timeout",
				feedbackAlwaysShow: "feedback_always_show",
				gamePageDrawerEnabled: "game_page_drawer_enabled",
				gamePageInvisible: "game_page_invisible",
				gametokPwaEnabled: "gametok_pwa_enabled",
				gametokPerformanceLevel: "gametok_performance_level",
				iceboarding: "iceboarding",
				iceboardingOnlyHome: "iceboarding_only_home",
				iceboardingFeedMode: "dj_experiment_param",
				igtotokDelayBeforeNextGameLoading: "igrotok_delay_before_next_game_loading",
				inViewContainerShowThreshold: "in_view_container_show_threshold",
				inViewContainerDebugHighlightOnShow: "in_view_container_debug_highlight_on_show",
				gametokTimeToHidePlaceholder: "gametok_time_to_hide_placeholder",
				googleGDPR: "google_gdpr",
				yandexGDPR: "yandex_gdpr",
				guardDisabledForStandalone: "guard_disabled_for_standalone",
				hideAdvStickyBannerForNewUsers: "hide_adv_sticky_banner_for_new_users",
				hideStickyWhenAdShown: "hide_sticky_when_ad_shown",
				iosHide: "ios_hide",
				isGoogleFakeFullscreenEnabled: "is_google_fake_fullscreen_enabled",
				firstChunkLoadType: "first_chunk_load_type",
				lockAdvScreenOrientation: "lock_adv_screen_orientation",
				mediation: "mediation",
				multiplePrebidTgoAuction: "multi_prebid_tgo_auction",
				multiInstallPwa: "multi_install_pwa",
				pwaSpecificStartUrl: "pwa_specific_start_url",
				nativeFullscreenBlock: "native_fullscreen_block",
				nativeRewardedBlock: "native_rewarded_block",
				nativeYandexFullscreenBlock: "native_yandex_fullscreen_block",
				nativeYandexRewardedBlock: "native_yandex_fullscreen_block",
				nativeAppodealFullscreenBlock: "native_appodeal_fullscreen_block",
				nativeAppodealRewardedBlock: "native_appodeal_rewarded_block",
				nativeApplovinFullscreenBlock: "native_applovin_fullscreen_block",
				nativeApplovinRewardedBlock: "native_applovin_rewarded_block",
				newAdvManager: "new_adv_manager",
				newAdvInterval: "new_adv_interval",
				newCSP: "new_csp",
				newLoggingPlayedFeedFC: "new_logging_played_feed_fc",
				newLoggingGameCardFC: "new_logging_gamecard_fc",
				newProfile: "new_profile",
				newTimeLogExp: "new_time_log_exp",
				noAdsCatalogPopup: "no_ads_catalog_popup",
				noAdsDuration: "no_ads_duration",
				noAdsPrice: "no_ads_price",
				noAdsPricePlus: "no_ads_price_plus",
				noAdsPopupForce: "no_ads_popup_force",
				noAdsPopupForcePopupGapTimeout: "no_ads_popup_force_popup_gap_timeout",
				noMobileGames: "no_mobile_games",
				noRecent: "no_recent",
				oauth: "oauth",
				onlyRsyaAd: "only_rsya_ad",
				originAgentCluster: "origin_agent_cluster",
				paymentsHidden: "hide_payments",
				playersBadge: "players_badge",
				prebidAdv: "prebid_adv",
				prebidCatalogAdv: "prebid_catalog_adv_2",
				prebidCustomBlock: "prebid_custom_block",
				prebidUsePrebid: "prebid_use_prebid_2",
				prebidRewardedBlock: "prebid_rewarded_block",
				prebidDisabledBids: "prebid_disabled_bids",
				prebidExtraBids: "prebid_extra_bids",
				prebidTimeout: "prebid_timeout",
				prebidAuctionTimeout: "prebid_auction_timeout",
				prebidOneAuction: "prebid_one_auction",
				prebidClearSlot: "prebid_clear_slot",
				prebidBlockPlaceholder2: "prebid_block_placeholder2",
				prebidBlockLoader2: "prebid_block_loader2",
				prebidBlockControlsDelay2: "prebid_block_controls_delay2",
				prebidPerAppBlocks: "prebid_per_app_blocks",
				preloadFullscreenAdv: "preload_fullscreen_adv4",
				preloadRewardedVideo: "preload_rewarded_video",
				preloadGame: "preload_game",
				premiumDuration: "premium_duration",
				premiumEnabled: "premium_enabled",
				premiumForced: "premium_forced",
				prettyAppUrl: "pretty_app_url",
				promoBlockWatcher: "promo_block_watcher",
				promoBar: "promo_bar",
				promoBarSpeed: "promo_bar_speed",
				promoBarAnimationDelay: "promo_bar_animation_delay",
				promoBarOptimizedAnimation: "promo_bar_optimized_animation",
				promoBarPortraitOnly: "promo_bar_portrait_only",
				promoBarDisableMobileAnimation: "promo_bar_disable_mobile_animation",
				promoBarGoToMainByBadgeClick: "promo_bar_go_to_main_by_badge_click",
				promoBannersEnabled: "promo_banners_enabled",
				promoBarBadgeOnly: "promo_bar_badge_only",
				promptPopupMobileText: "prompt_popup_mobile",
				portalCurrencyHidden: "hide_portal_currency",
				pixelTags: "pixel_tags",
				reactGuard: "react_guard",
				realRewarded: "real_rewarded",
				rpsLimiterDisabled: "rps_limiter_disabled",
				redirectFromComToRu: "redirect_from_com_to_ru",
				disableTVGuardAndScope: "disable_tv_guard_and_scope",
				rewardedVideoTimeout: "rewarded_video_timeout",
				rewardedPCodeAdv: "rewarded_pcode_adv",
				refillOnTheSite: "refill_on_the_site",
				cleanAppQuery: "clean_app_query",
				rounded3dIcon: "rounded_3d_icon",
				shortcutWaitOnGameLoadTimeout: "shortcut_wait_on_game_load_timeout",
				videoReviews: "video_reviews",
				catalogHeartbeats: "heartbeat_catalog",
				similarGames: "similar_games",
				stickyHeader: "sticky_header",
				stickyFooterDesktop: "sticky_footer_desktop",
				skipGuard: "skip_guard",
				transsionAdChannel: "transsion_ad_channel",
				transsionFullscreenPlacementType: "transsion_fullscreen_placement_type",
				tcStringDebug: "tcstring_debug",
				tcStringSend: "tcstring_send",
				transparent3dIcon: "transparent_3d_icon",
				turnOffAdv: "turn_off_adv",
				tvDraftInput: "tv_draft_input",
				tvAdEnabled: "tv_ad_enabled",
				tvAdVariableBlocksEnabled: "tv_ad_variable_blocks_enabled",
				tvVideoCardsEnabled: "tv_video_cards_enabled",
				ttiMetricaWaitingTimeout: "tti_metrica_waiting_timeout",
				unmutedPrerollAdv: "unmuted_preroll_adv",
				updateExcludedCategories: "update_excluded_categories",
				useAdsGetLibraries: "use_ads_get_libraries",
				userActivityPopup: "user_activity_popup",
				userActivityPopupForTesting: "user_activity_popup_for_testing",
				userActivityPopupShowTime: "user_activity_popup_show_time",
				userInactiveTimer: "user_inactive_timer",
				uxFeedbackBoxSolutionPlayhopEnabled: "ux_feedback_box_solution_playhop_enabled",
				uxFeedbackBoxSolutionEnabled: "ux_feedback_box_solution_enabled",
				webvisorApps: "webvisor_apps",
				webvisorChance: "webvisor_chance",
				webvisorEnabled: "webvisor_enabled",
				welcomeBonus: "welcome_bonus",
				welcomeBonusAmount: "welcome_bonus_amount",
				withNativeClose: "with_native_close",
				withNewTVCatalog: "with_new_tv_catalog",
				yandexEmptyData: "yandex_empty_data",
				xsollaDisabled: "xsolla_disabled",
				igrotokOnboardingControlSetting: "igrotok_onboarding_control_setting",
				rotateScreenButton: "rotate_screen_button",
				rotateScreenButtonAltText: "rotate_screen_button_alt_text",
				igrotokLiteDisableNonNativeFeatures: "igrotok_lite_disable_non_native_features",
				GDPRLoadAfterGame: "gdpr_load_after_game",
				delayGoogleFCmessage: "delay_google_fc_message",
				igrotokJoystickInstructionPopupDelay: "igrotok_joystick_instruction_popup_delay",
				partitialAdvInit: "partitial_adv_init",
				searchV3: "search_v3",
				igrotokOnboardingMode: "igrotok_onboarding_mode",
				igrotokOnboardingFrequencySetting: "igrotok_onboarding_frequency_setting",
				igrotokShowSelectModePopup: "igrotok_show_select_mode_popup",
				oneTabPWA: "one_tab_pwa",
				earlyShowShortcutPopup: "early_show_shortcut_popup",
				enableIgrotokDesktopPromo: "enable_igrotok_desktop_promo",
				igrotarcadesCountToReloadIOS: "igrotok_games_count_to_reload_ios",
				feedDomain: "feed2000_domain",
				feedUseRedirect: "feed2000_use_redirect",
				enableDesktopVisibilitychangeShortcut: "enable_desktop_visibilitychange_shortcut",
				countDesktopVisibilitychangeShortcut: "count_desktop_visibilitychange_shortcut",
				periodDesktopVisibilitychangeShortcut: "period_desktop_visibilitychange_shortcut",
				igrotokMode: "igrotok_mode",
				playToEarn: "play_to_earn",
				clientTechLog: "client_tech_log",
				disableWorldWide: "disable_world_wide",
				splashScreenCondition: "splash_screen_condition",
				guardUnderSplashScreen: "guard_under_splash_screen",
				splashScreenTimeLimit: "splash_screen_time_limit",
				gameHookAlert: "game_hook_alert",
				streamSSR: "stream_ssr",
				disableSpecificAdvBlocks: "disable_specific_adv_blocks"
			};
			Object.values({
				en: "com",
				kk: "kz",
				be: "by",
				ru: "ru",
				uz: "uz"
			});

			function w(e, t) {
				return t.reduce(((t, n) => {
					var r;
					return t.push(...(r = `https://${e}.${n}`, [r, r.replace("https://", "https://*.")])), t
				}), [])
			}
			w("yandex", r).concat(w("playhop", o)).concat(w("ya", ["ru"])).concat(["https://zenadservices.net"]);
			const y = `(yandex\\.(${r.map((e=>e.replace(".","\\."))).join("|")})|ya\\.ru)`,
				v = (new RegExp(y), new RegExp(`^https://(www\\.)?${y}$`), new RegExp(`^https://([^.]+\\.)*${y}\\/`), `(playhop\\.(${o.map((e=>e.replace(".","\\."))).join("|")}))`),
				b = (new RegExp(v), new RegExp(`^https://([^.]+\\.)*${v}$`)),
				E = `(igrotok|igrotok-test|igrotok\\.msup|igrotok\\.games-test|igrotok\\.games-prestable|igrotok\\.crowdtest\\.games)\\.(yandex|ya)\\.(${["com","ru"].map((e=>e.replace(".","\\."))).join("|")})`;
			new RegExp(E), new RegExp(`^https://${E}$`), new RegExp(`^(?:https://)?(?:([^.]+)\\.)?crowdtest\\.games\\.(${y})`), new RegExp(`^https://([^.]+\\.)*${y}/games/igrotok`), new RegExp(`^https?://(?:.*?\\.)*${y}/games/manifest/app/\\d+/?`), new RegExp(`^https?://(?:.*?\\.)*${y}/games/manifest/catalogue/.*`), new RegExp(`^https?://(?:.*?\\.)*${y}/games/manifest/sdk/.*`);
			const k = "from-gametok",
				P = "is-gametok",
				S = "igrotok_mode";
			var A = (e => (e.IGROTOK = "igrotok", e.IGROYAL = "igroyal", e.PLAYHOP = "playhop", e.YANDEX = "yandex", e))(A || {})
		}, (e, t, n) => {
			n.d(t, {
				Tc: () => c,
				m_: () => d
			});
			var r, o, a, i, s = n(16);
			"undefined" != typeof navigator && navigator;
			const d = "undefined" != typeof window && ((null == (o = null == (r = window.YandexGamesSDK) ? void 0 : r.environment) ? void 0 : o.serviceName) || (null == (a = window.YandexGamesSDKEnvironment) ? void 0 : a.serviceName) || (null == (i = window.clientMetadata) ? void 0 : i.serviceName)) || s.Go0.YANDEX,
				c = 5e3
		}],
		t = {};

	function n(r) {
		var o = t[r];
		if (void 0 !== o) return o.exports;
		var a = t[r] = {
			exports: {}
		};
		return e[r](a, a.exports, n), a.exports
	}
	n.d = (e, t) => {
		for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
			enumerable: !0,
			get: t[r]
		})
	}, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
		if (void 0 !== n) {
			var e = n.u,
				t = n.e,
				r = {},
				o = {};
			n.u = function(t) {
				return e(t) + (r.hasOwnProperty(t) ? "?" + r[t] : "")
			}, n.e = function(r) {
				return t(r).catch((function(t) {
					var a = o.hasOwnProperty(r) ? o[r] : 3;
					if (a < 1) {
						var i = e(r);
						throw t.message = "Loading chunk " + r + " failed after 3 retries.\n(" + i + ")", t.request = i, t
					}
					return new Promise((function(e) {
						setTimeout((function() {
							o[r] = a - 1, e(n.e(r))
						}), 0)
					}))
				}))
			}
		}
	})();
	var r = {};
	(() => {
		n.d(r, {
			default: () => Mr
		});
		var e = (e => (e.LEGACY = "legacy", e.INTERSECTION_OBSERVER = "intersection-observer", e.SMOOTH_SCROLL = "smooth-scroll", e.ABORT_CONTROLLER = "abort-controller", e))(e || {});
		const t = {
			legacy: "3.31.0",
			"intersection-observer": "0.12.2",
			"smooth-scroll": "0.4.4",
			"abort-controller": "polyfill"
		};

		function o(e, n) {
			return function(e, t) {
				return `${e}polyfill/${t}`
			}(e, `${t[n]}-${n}.js`)
		}
		var a = n(8),
			i = n(5);
		const s = () => {
			["click", "dblclick", "mouseup", "pointerup", "touchend"].forEach((e => {
				var t;
				document.addEventListener(e, (t = `${e}-on-body`, () => {
					window.top && window.top.postMessage({
						type: "document-events",
						action: t
					}, "*")
				}), !0)
			}))
		};
		var d = n(10);
		var c = n(16);

		function l(e = "") {
			return e.endsWith(`${c.U_6.YA}.ru`)
		}

		function u(e, t = "ru", n) {
			return e = e.replace("%TLD%", t), "ru" === t && l(n) && (e = e.replace(`${c.U_6.YANDEX}.ru`, `${c.U_6.YA}.ru`)), e
		}
		const p = ["ru", "uk", "be", "kk", "uz"];
		class m {
			static SetFlag(e, t) {
				return e | t
			}
			static UnsetFlag(e, t) {
				return e & ~t
			}
			static HasFlag(e, t) {
				return (e & t) === t
			}
			static ToggleFlag(e, t) {
				return e ^ t
			}
		}

		function h(e) {
			const t = this.constructor.prototype[e],
				n = function() {
					return t.apply(n, arguments)
				};
			return Object.setPrototypeOf(n, this.constructor.prototype), Object.getOwnPropertyNames(t).forEach((function(e) {
				Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
			})), n
		}
		h.prototype = Object.create(Function.prototype);
		const g = h;
		var _ = (e => (e.Unknown = "Unknown", e.Dev = "Dev", e.Adv = "Adv", e.Test = "Test", e.Popup = "Popup", e))(_ || {});
		const f = [],
			w = (() => {
				var e;
				if ("object" != typeof window) return 0;
				const t = String(window.location).match("debug-mode(=(\\d+))?");
				return t ? t[1] ? parseInt(null != (e = t[2]) ? e : "0", 10) : 1 : 0
			})(),
			y = Boolean(w),
			v = class extends g {
				constructor(e, t, n) {
					var r, o;
					super("log"), this.spoilerData = [], this.messageTag = [], this.spoiler = (...e) => (this.spoilerData.push(e), this), this.spoilerFunc = e => (this.spoilerData.push([e()]), this), this.tag = e => (this.messageTag = this.messageTag.concat(e), this), this.getLabel = () => {
						if (!this.messageTag.length) return this.initialLabel;
						const e = this.initialTag.concat(this.messageTag).join("|");
						return this.messageTag = [], e
					}, this.prefix = e, this.color = n, this.initialTag = [].concat(t), this.initialLabel = this.initialTag.join("|"), this.prefixStyle = `\n            background: ${null!=(r=null==n?void 0:n.background)?r:"peru"};\n            color: ${null!=(o=null==n?void 0:n.text)?o:"black"};\n            font-size: 8px;\n            font-weight: normal;\n            border-radius: 0 4px 4px 0;\n            padding: 2px;\n        `
				}
				static GetLogSize() {
					return y ? 1e3 : 300
				}
				static GetLogFunc() {
					return 0 === w ? "dummyLog" : m.HasFlag(w, 2) ? "extendedLog" : "simpleLog"
				}
				dummyLog(...e) {}
				simpleLog(...e) {
					console.info(`%c${this.getLabel()}%c${this.prefix}%c`, v.labelStyle, this.prefixStyle, v.dataStyle, ...e)
				}
				extendedLog(...e) {
					if (console.groupCollapsed(`%c${this.getLabel()}%c${this.prefix}%c`, v.labelStyle, this.prefixStyle, v.dataStyle, ...e), this.spoilerData.length) {
						for (const e of this.spoilerData) console.log(...e);
						this.spoilerData = []
					}
					console.trace(), console.groupEnd()
				}
				clientLog(...e) {
					const t = Math.max(0, f.length - v.LOG_SIZE + 1);
					t > 0 && f.splice(0, Math.max(t, .1 * v.LOG_SIZE));
					const n = this.initialTag.concat(this.messageTag);
					let r = P(e);
					r.reduce(((e, t) => e + t.length), 0) > 1e3 && (r = ["Error: Stringified data is too big."]), f.push({
						color: this.color,
						data: r,
						prefix: this.prefix,
						spoilerData: P(this.spoilerData),
						tag: n,
						time: Date.now()
					})
				}
				log(...e) {
					"object" == typeof window && this.clientLog(...e), this[v.LOG_FUNC](...e)
				}
			};
		let b = v;
		b.labelStyle = "\n        background: dimgrey;\n        color: darkgrey;\n        font-size: 8px;\n        font-weight: normal;\n        border-radius:4px 0 0 4px;\n        padding: 2px\n    ", b.dataStyle = "font-weight: normal;", b.LOG_SIZE = v.GetLogSize(), b.LOG_FUNC = v.GetLogFunc();
		const E = (e, t = "Unknown", n) => new b(e, t, n);
		E("DebugLog", ["Dev", "Test"]);

		function k(e, t = 1, n, r) {
			const o = new WeakMap;
			return JSON.stringify(function e(t, r) {
				if (!t || "object" != typeof t) return t;
				let a, i = Array.isArray(t),
					s = o.has(t);
				return o.set(t, !0), s ? a : (JSON.stringify(t, (function(o, s) {
					if (i || r > 0) {
						if (n && (s = n(o, s)), !o) return i = Array.isArray(s), t = s, s;
						!a && (a = i ? [] : {}), a[o] = e(s, i ? r : r - 1)
					}
				})), void 0 === a ? i ? [] : {} : a)
			}(e, t), null, r)
		}

		function P(e) {
			try {
				return e.map((e => "object" == typeof e ? `${String(e)} ${k(e,2)}` : String(e)))
			} catch (e) {
				return ["Error: Can not stringifyArrayObjects"]
			}
		}
		class S {
			constructor() {
				this.observers = {}, this.subscribe = (e, t) => {
					var n, r;
					return (null != (r = (n = this.observers)[e]) ? r : n[e] = []).push(t), this.unsubscribe.bind(this, e, t)
				}, this.unsubscribe = (e, t) => {
					const n = this.observers[e],
						r = n.indexOf(t); - 1 !== r && n.splice(r, 1)
				}, this.notifyObservers = (e, t) => e.forEach((e => {
					const n = this.observers[e];
					n && n.forEach((e => {
						try {
							e(t)
						} catch (e) {
							window.Ya.Rum.logError({}, e)
						}
					}))
				}))
			}
		}
		var A = (e, t, n) => new Promise(((r, o) => {
			var a = e => {
					try {
						s(n.next(e))
					} catch (e) {
						o(e)
					}
				},
				i = e => {
					try {
						s(n.throw(e))
					} catch (e) {
						o(e)
					}
				},
				s = e => e.done ? r(e.value) : Promise.resolve(e.value).then(a, i);
			s((n = n.apply(e, t)).next())
		}));
		const O = class {
			constructor() {
				this.observable = new S, this.unlock = e => A(this, null, (function*() {
					return this.post("unlock", {
						id: e
					})
				})), this.setProgress = (e, t) => A(this, null, (function*() {
					return this.post("setProgress", {
						id: e,
						progress: t
					})
				})), this.getProgress = e => A(this, null, (function*() {
					return this.post("getProgress", {
						id: e
					})
				})), this.getList = (...e) => A(this, [...e], (function*(e = ["allLocal"]) {
					return this.post("getList", {
						status: e
					})
				})), this.on = ({
					action: e,
					id: t = ""
				}, n) => this.observable.subscribe(this.buildId(e, t), n), this.off = ({
					action: e,
					id: t
				}, n) => this.observable.unsubscribe(this.buildId(e, t), n), this.post = (e, t) => A(this, null, (function*() {
					return O.log("post to parent", e, t), i.Z.postToParent({
						action: e,
						type: "achv-manager",
						data: t
					}).then((n => {
						O.log("receive from parent", e, n);
						const r = n.data,
							{
								result: o,
								success: a,
								error: i
							} = r;
						return a && o ? (this.notify(e, t.id, o), o) : (O.log("reject", e, "due to error"), Promise.reject(i))
					}))
				})), this.notify = (e, t, n) => {
					const r = [this.buildId(e)];
					t && r.push(this.buildId(e, t)), this.observable.notifyObservers(r, n)
				}, this.buildId = (e, t) => `${e}${t}`
			}
		};
		let x = O;
		x.log = E("Achievements | Child frame", _.Dev, {
			background: "#6c5b7b",
			text: "#ffffff"
		});
		const T = E("NoAds", [_.Adv]),
			I = "yandex-games-no-ads-style";

		function D() {
			Array.isArray(window.adfoxAsyncParams) && 0 !== window.adfoxAsyncParams.length && (window.adfoxAsyncParams = []), Array.isArray(window.yaContextCb) && 0 !== window.yaContextCb.length && (window.yaContextCb = []), Array.isArray(window.yandexContextAsyncCallbacks) && 0 !== window.yandexContextAsyncCallbacks.length && (window.yandexContextAsyncCallbacks = [])
		}
		let R = !1;

		function C() {
			R || (R = !0, T("_disableAds"), L(), function() {
				var e, t, n;
				const r = {
					destroy() {
						T("Ya.Context.AdvManager.destroy disabled")
					},
					render(e, t) {
						"function" == typeof t ? t() : "function" == typeof e.altCallback ? e.altCallback() : "function" == typeof e.onError && e.onError({
							code: "YA_GAMES_ADS_DISABLED",
							text: "",
							type: "error"
						})
					}
				};
				"function" == typeof(null == (n = null == (t = null == (e = window.Ya) ? void 0 : e.Context) ? void 0 : t.AdvManager) ? void 0 : n.render) && (window.Ya.Context.AdvManager.render = r.render), D();
				let o = window.Ya;
				Object.defineProperty(window, "Ya", {
					get() {
						var e;
						return (null == (e = null == o ? void 0 : o.Context) ? void 0 : e.AdvManager) && o.Context.AdvManager !== r && (o.Context.AdvManager = r), D(), o
					},
					set(e) {
						var t;
						(null == (t = e.Context) ? void 0 : t.AdvManager) && e.Context.AdvManager !== r && (e.Context.AdvManager = r), o = e
					},
					enumerable: !0,
					configurable: !0
				}), window.Ya = window.Ya || {}, window.Ya.Context = window.Ya.Context || {
					AdvManager: r
				}, window.Ya.Context.AdvManager = r, T("disable Ya.Context.AdvManager.render")
			}())
		}

		function L() {
			! function() {
				var e;
				if (document.getElementById(I)) return;
				const t = document.createElement("style");
				t.id = I, t.textContent = '\nbody div[id*="yandex_rtb"],\nbody div[id*="adfox"],\nbody iframe#bwiframe,\nbody iframe[src*="yabnrwall.html"],\nbody iframe[src*="yartbbnr.html"],\nbody yatag,\nbody yatag[class]\n{ display: none !important; }', null == (e = document.body) || e.appendChild(t)
			}()
		}

		function N(e) {
			return function(e, t) {
				if ("function" != typeof t) throw new Error("Argument is not a function");
				let n;
				return function(...r) {
					return --e > 0 && t && (n = t.apply(this, r)), e <= 1 && (t = void 0), n
				}
			}(2, e)
		}
		var M = n(12);

		function G() {
			return "undefined" != typeof window && -1 !== window.location.href.toLowerCase().indexOf("is_igroyal=1")
		}
		var B = n(14),
			j = n(15);
		const F = "2795",
			$ = (e, t, n) => {
				const r = /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent) ? 7500 : 15e3,
					o = null != n ? n : r,
					a = window.setTimeout((() => {
						(e => {
							(0, B.H)({
								block: j.W.WAIT_TTI,
								level: "warn",
								message: `[startWaitingTTI] Time to interactive took more than ${e/1e3}s`
							})
						})(o), i()
					}), o),
					i = N((() => {
						window.clearTimeout(a), e()
					}));
				t(i)
			};

		function Y(e) {
			var t;
			return (null == (t = e.abt) ? void 0 : t.flags) || e
		}

		function U(e, t) {
			return Y(e)[t]
		}

		function W(e, t, n) {
			return U(e, t) === n
		}

		function Z(e, t, n) {
			const r = U(e, t);
			return "array" === n ? Array.isArray(r) ? r : void 0 : "object" !== n || r ? "number" === n ? "number" != typeof r || isNaN(r) ? void 0 : r : typeof r === n ? r : void 0 : void 0
		}

		function K(e, t) {
			return Z(e, t, "number")
		}
		const H = E("PixelManager");
		const V = new class {
				constructor() {
					this.pixelStorage = {}
				}
				get pixelsToInit() {
					var e, t, n;
					if ("undefined" == typeof window) return [];
					let r = "https://yastatic.net/s3/games-static/static-data/pixels/google-tag-manager.html";
					return W(null != (n = null == (t = null == (e = window.appData) ? void 0 : e.abt) ? void 0 : t.flags) ? n : {}, c.lbi.cfMirrorStatic, !0) && (r = "https://statics.games-storage-aws.yandex.net/statics/pixels/google-tag-manager.html"), this.pixelsOrigin = new URL(r).origin, [{
						frameURL: r,
						pixelName: "google_tag_manger",
						sendPixelEventFunc: this.sendGoogleTagMangerEvent.bind(this)
					}]
				}
				init() {
					window.appData.isWorldWide && this.pixelsToInit.forEach((e => {
						const {
							frameURL: t,
							pixelName: n,
							sendPixelEventFunc: r
						} = e;
						this.createPixelIframe(t, n, r)
					}))
				}
				sendEvent(e, t) {
					"string" == typeof e ? Object.entries(this.pixelStorage).forEach((([n, r]) => {
						r.isError || (r.isLoaded ? (r.sendEventFunc(e, t), H(`Send ${n} goal ${e}`)) : r.eventsQueued.push({
							goal: e,
							params: t
						}))
					})) : H("Wrong goal", e)
				}
				sendGoogleTagMangerEvent(e, t) {
					var n;
					"string" == typeof e && (null == (n = this.pixelStorage.google_tag_manger.pixelFrame.contentWindow) || n.postMessage({
						goal: e,
						params: t
					}, this.pixelsOrigin))
				}
				sendAllEventFromQueue(e) {
					const t = this.pixelStorage[e];
					t && !t.isError && t.isLoaded && (t.eventsQueued.forEach((e => t.sendEventFunc(e.goal, e.params))), t.eventsQueued = [])
				}
				initPixelIframe(e, t, n) {
					e.src = t, e.style.display = "none", e.onload = () => {
						this.pixelStorage[n].isLoaded = !0, this.pixelStorage[n].isError = !1, this.sendAllEventFromQueue(n)
					}, e.onerror = () => {
						this.pixelStorage[n].isError = !0, this.pixelStorage[n].isLoaded = !1, this.pixelStorage[n].eventsQueued = []
					}, document.body.appendChild(e)
				}
				createPixelIframe(e, t, n) {
					var r;
					const o = document.createElement("iframe"),
						a = K((null == (r = window.appData.abt) ? void 0 : r.flags) || {}, c.lbi.ttiMetricaWaitingTimeout) || 6e4;
					this.pixelStorage[t] = {
						eventsQueued: [],
						isError: !1,
						isLoaded: !1,
						pixelFrame: o,
						sendEventFunc: n
					}, $((() => {
						this.initPixelIframe(o, e, t)
					}), (e => {
						var t, n, r, o;
						(null == (t = window.Ya) ? void 0 : t.Rum) && !(null == (n = window.Ya) ? void 0 : n.Rum.getTimeMarks()[F]) ? null == (o = null == (r = window.Ya) ? void 0 : r.Rum) || o.on(F, e): e()
					}), a)
				}
			},
			z = V;
		const q = {
				playhop: 92757394,
				yandex: 49035923
			},
			J = {
				FULLSCREEN: "R-I-320442-1",
				REWARDED_VIDEO: "R-I-328933-4",
				STICKY_MOBILE_LANDSCAPE_UPPER: "R-I-328933-35",
				STICKY_MOBILE_UPPER: "R-I-328933-34",
				STICKY_DESKTOP_RIGHT: "R-I-328933-33"
			};

		function X() {
			var e, t;
			if ("object" != typeof window) return 1;
			const n = (null == (e = null == window ? void 0 : window.appData) ? void 0 : e.networkThrottlingRatio) || 1;
			return (null == (t = null == window ? void 0 : window.appData) ? void 0 : t.isWorldWide) ? 1.5 * n : 1 * n
		}
		const Q = "undefined" != typeof window;

		function ee(e, t, n) {
			"reachGoal" === e && (window.dataLayer || (window.dataLayer = []), function(...e) {
				window.dataLayer.push(arguments)
			}("event", t, n))
		}

		function te(e, t, n = {}, r) {
			var o;
			"string" == typeof t && (ee(e, t, n), z.sendEvent(t, n), r && (null == (o = window.clickdaemonLog) || o.call(window, t, n)))
		}

		function ne(e, t, n, ...r) {
			const {
				withClickDaemon: o
			} = n;
			let a = {},
				i = {};
			r[0] && "object" == typeof r[0] ? [a] = r : r[1] && "object" == typeof r[1] && ([, a] = r, [, i] = r), a.appVersion || (a.appVersion = "build1694664385", i.appVersion = "build1694664385"), !a.service && window.clientMetadata.serviceName && (a.service = window.clientMetadata.serviceName), !a.platform_id && window.clientMetadata.platform && (a.platform_id = window.clientMetadata.platform), window.ym ? (window.ym(e, t, ...r), te(t, r[0], i, o)) : window[`yaCounter${e}`] ? (window[`yaCounter${e}`][t](...r), te(t, r[0], i, o)) : re("Cannot send metrika")
		}

		function re(e) {
			var t, n;
			const r = new Error(e);
			(0, B.uh)() ? (0, B.H)({
				block: j.W.METRIKA,
				level: null == (n = null == (t = window.Ya) ? void 0 : t.Rum) ? void 0 : n.ERROR_LEVEL.WARN
			}, r) : console.error(r)
		}

		function oe(e) {
			return e === c.U_6.PLAYHOP ? q.playhop : q.yandex
		}
		const ae = N((function() {
			re("Metrika's callbacks array is overflowed")
		}));

		function ie(e, t, ...n) {
			const {
				shouldMetrikaWork: r = !0
			} = t;
			if (Q && r) {
				const {
					metrika: {
						counterId: r
					}
				} = window.appData || window.gameTokAppData;
				if (window.ym || window[`yaCounter${r}`]) ne(r, e, t, ...n);
				else {
					Array.isArray(window.yandex_metrika_callbacks2) || (window.yandex_metrika_callbacks2 = []);
					const o = window.yandex_metrika_callbacks2;
					o.length < 500 ? o.push((() => {
						ne(r, e, t, ...n)
					})) : ae()
				}
			}
			return Promise.resolve()
		}
		ie.bind(null, "hit"), ie.bind(null, "params"), ie.bind(null, "reachGoal");
		const se = function(e, t, n = {}) {
			var r, o, a, i;
			try {
				const s = {
						borrowParams: {
							adv: {
								sdk: {
									[t]: {
										[e]: !0,
										isFirstTryOpen: "tryOpen" === e && n.isFirstTryOpen,
										appVersion: window.APP_VERSION
									}
								}
							}
						}
					},
					d = new Image,
					c = (null == (o = null == (r = window.YandexGamesSDKEnvironment) ? void 0 : r.i18n) ? void 0 : o.tld) || "ru",
					l = oe(null == (i = null == (a = window.YandexGamesSDKEnvironment) ? void 0 : a.data) ? void 0 : i.secondDomain);
				// d.src = `https://mc.yandex.${c}/watch/${l}?page-url=${encodeURIComponent(window.location.href)}&page-ref=${encodeURIComponent(document.referrer)}&charset=utf-8&site-info=${encodeURIComponent(JSON.stringify(s))}`
			} catch (e) {}
		};
		// Object.defineProperty, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
		// E("AdvStickyBanner", _.Adv), c.Go0.PLAYHOP, c.Go0.YANDEX, c.Go0.PLAYHOP, c.Go0.YANDEX, c.Go0.PLAYHOP, c.Go0.YANDEX, c.Go0.PLAYHOP, c.Go0.YANDEX, c.Go0.PLAYHOP, c.Go0.YANDEX;
		var de = (e => (e.ADV_IS_NOT_CONNECTED = "ADV_IS_NOT_CONNECTED", e.UNKNOWN = "UNKNOWN", e))(de || {});
		const ce = "1" === (0, M.VB)(c.x2l),
			le = ((0, M.VB)(c.p4F), (0, M.VB)(c.x2l));
		"undefined" != typeof window && le && (0, M.VB)(c.dsH);
		const ue = E("AdvManager", _.Adv);

		function pe(e, t) {
			return "function" == typeof e[t] ? function(e, t = "", n) {
				return (...r) => {
					try {
						return e(...r)
					} catch (e) {
						(0, a.fF)(e, {
							prefix: t
						}), n && n(e)
					}
				}
			}(e[t], `Error in callback ${t}: `) : () => {}
		}
		class me {
			constructor(e) {
				var t;
				this.isFirstTryOpenFullscreenAdv = !0, this.isFirstTryOpenRewardedAdv = !0, this.onAdvDebugManagerExternalMessage = e => {
					const {
						action: t
					} = e.data;
					switch (t) {
						case "debug-action-showFullscreenAdv":
							this.showFullscreenAdvDebug(t);
							break;
						case "debug-action-showRewardedVideo":
							this.showRewardedVideoDebug(t);
							break;
						case "debug-action-switchStickyBanners":
							this.switchStickyBannersDebug(t)
					}
				}, this.onAdvManagerExternalMessage = e => {
					var t, n, r, o, i, s, d, c, l, u, p, m, h, g, _;
					const {
						action: f,
						data: w
					} = e.data;
					switch (f) {
						case "adv-callback-open":
							null == (n = (t = this.callbacks).onOpen) || n.call(t);
							break;
						case "adv-callback-close":
							this.callOnAdvClose(w.wasShown);
							break;
						case "adv-callback-error":
							this.callOnAdvClose(!1);
							try {
								if ("string" != typeof(null == (r = null == w ? void 0 : w.error) ? void 0 : r.message)) {
									const e = new Error("Undefined error message");
									try {
										e.additional = JSON.stringify(w)
									} catch (t) {
										e.additional = "undefined"
									}(0, a.fF)(e)
								}
							} catch (e) {}
							null == (i = (o = this.callbacks).onError) || i.call(o, new Error(w.error.message, {
								cause: w.error
							}));
							break;
						case "adv-callback-offline":
							this.callOnAdvClose(!1), null == (d = (s = this.callbacks).onOffline) || d.call(s);
							break;
						case "rewarded-video-callback-open":
							null == (l = (c = this.callbacks).onOpen) || l.call(c);
							break;
						case "rewarded-video-callback-rewarded":
							null == (p = (u = this.callbacks).onRewarded) || p.call(u);
							break;
						case "rewarded-video-callback-close":
							null == (h = (m = this.callbacks).onClose) || h.call(m);
							break;
						case "rewarded-video-callback-error":
							null == (_ = (g = this.callbacks).onError) || _.call(g, new Error(w.error.message, {
								cause: w.error
							}));
							break;
						case "set-disabled-state":
							ue('On "set-disabled-state" event', e.data, w.value), this.setDisabledState(w.value)
					}
				}, this.adv = e.adv || {}, (null == (t = window.YandexGamesSDKEnvironment) ? void 0 : t.isWorldWide) ? this.setDisabledState(!0) : ce && L(), Object.defineProperty(this, "callbacks", {
					enumerable: !1,
					writable: !0
				}), Object.defineProperty(this.adv, "onAdvClose", {
					enumerable: !1,
					writable: !0
				}), i.Z.onExternalMessage("adv-manager", this.onAdvManagerExternalMessage), i.Z.onExternalMessage("adv-debug-manager", this.onAdvDebugManagerExternalMessage), this.updateDisabledState()
			}
			showFullscreenAdvDebug(e) {
				this.showFullscreenAdv({
					callbacks: {
						onClose: t => ue(`${e} onClose, wasShown = ${t}`),
						onError: t => ue(`${e} onError, error =`, t),
						onOffline: () => ue(`${e} onOffline`),
						onOpen: () => ue(`${e} onOpen`)
					}
				})
			}
			showRewardedVideoDebug(e) {
				this.showRewardedVideo({
					callbacks: {
						onClose: () => ue(`${e} onClose`),
						onError: t => ue(`${e} onError, error =`, t),
						onOpen: () => ue(`${e} onOpen`),
						onRewarded: () => ue(`${e} onRewarded`)
					}
				})
			}
			switchStickyBannersDebug(e) {
				this.getBannerAdvStatus().then((({
					stickyAdvIsShowing: t
				}) => {
					t ? this.hideBannerAdv().then((({
						stickyAdvIsShowing: t
					}) => {
						ue(`${e} hideBannerAdv, stickyAdvIsShowing = ${t}`)
					})) : this.showBannerAdv().then((({
						reason: t,
						stickyAdvIsShowing: n
					}) => {
						ue(`${e} hideBannerAdv, stickyAdvIsShowing = ${n}, reason = ${t}`)
					}))
				}))
			}
			updateDisabledState() {
				i.Z.postToParent({
					type: "adv-manager",
					action: "get-disabled-state"
				}).then((({
					data: e
				}) => {
					this.setDisabledState(e.value)
				})).catch(console.warn)
			}
			setDisabledState(e) {
				ue("setDisabledState", e), e ? C() : R && (R = !1)
			}
			showFullscreenAdv({
				callbacks: e = {}
			} = {}) {
				se("tryOpen", "fullscreen", {
					isFirstTryOpen: this.isFirstTryOpenFullscreenAdv
				}), this.isFirstTryOpenFullscreenAdv = !1, i.Z.postToParent({
					type: "adv-manager",
					action: "adv-show-fullscreen",
					timeout: 1e4
				}).then((({
					data: {
						error: t
					}
				}) => {
					if (t) {
						if ((0, d.mv)() && t.message.includes("often than once per")) throw t;
						(0, a.fF)(t), pe(e, "onClose")(!1)
					} else this.setCallbacks(e, ["onClose", "onOpen", "onError", "onOffline"])
				})).catch((t => {
					(0, a.fF)(t), pe(e, "onError")(t), pe(e, "onClose")(!1)
				}))
			}
			showRewardedVideo({
				callbacks: e = {}
			} = {}) {
				se("tryOpen", "rewarded", {
					isFirstTryOpen: this.isFirstTryOpenRewardedAdv
				}), this.isFirstTryOpenRewardedAdv = !1, i.Z.postToParent({
					type: "adv-manager",
					action: "adv-show-rewarded-video",
					timeout: 1e4
				}).then((({
					data: {
						error: t
					}
				}) => {
					if (t) throw t;
					this.setCallbacks(e, ["onOpen", "onRewarded", "onClose", "onError"])
				})).catch((t => {
					(0, a.fF)(t), pe(e, "onError")(t), pe(e, "onClose")(!1)
				}))
			}
			showBannerAdv() {
				return new Promise((e => {
					i.Z.postToParent({
						type: "adv-manager",
						action: "adv-show-sticky-banner",
						timeout: 3e3
					}).then((({
						data: t
					}) => {
						e(t)
					})).catch((t => {
						(0, a.fF)(t), e({
							reason: de.UNKNOWN,
							stickyAdvIsShowing: !1
						})
					}))
				}))
			}
			hideBannerAdv() {
				return new Promise((e => {
					i.Z.postToParent({
						type: "adv-manager",
						action: "adv-hide-sticky-banner",
						timeout: 3e3
					}).then((({
						data: t
					}) => {
						e(t)
					})).catch((t => {
						(0, a.fF)(t), e({
							stickyAdvIsShowing: !1
						})
					}))
				}))
			}
			getBannerAdvStatus() {
				return new Promise((e => {
					i.Z.postToParent({
						type: "adv-manager",
						action: "adv-status-sticky-banner",
						timeout: 3e3
					}).then((({
						data: t
					}) => {
						e(t)
					})).catch((t => {
						(0, a.fF)(t), e({
							reason: de.UNKNOWN,
							stickyAdvIsShowing: !1
						})
					}))
				}))
			}
			setCallbacks(e, t) {
				this.callbacks = {}, t.forEach((t => {
					this.callbacks[t] = pe(e, t)
				}))
			}
			callOnAdvClose(e = !1) {
				var t, n;
				if ("function" == typeof this.adv.onAdvClose) {
					try {
						this.adv.onAdvClose(e)
					} catch (e) {
						(0, a.Ts)(e)
					}
					// (0, a.Ts)(new Error('Deprecated usage "onAdvClose". Please, use `ysdk.adv.method({ callbacks })` https://yandex.ru/dev/games/doc/sdk/sdk-adv'))
				}
				null == (n = (t = this.callbacks).onClose) || n.call(t, e)
			}
		}
		const he = E("AuthManagerPrivate", _.Dev);
		const ge = new class {
			constructor() {
				this.onExternalAuthMessage = e => {
					const {
						action: t,
						data: n
					} = e.data;
					"changed" === t && this.switchAuthState(n.hasAuth)
				}, this.initMessaging(), this.getAuthState()
			}
			initMessaging() {
				i.Z.onExternalMessage("auth", this.onExternalAuthMessage)
			}
			switchAuthState(e) {
				this.hasAuthValue !== e && (he(`switch auth state to ${e}`), this.hasAuthValue = e)
			}
			getAuthState() {
				i.Z.postToParent({
					type: "auth",
					action: "has-auth"
				}).then((({
					data: {
						hasAuth: e
					}
				}) => {
					this.switchAuthState(e)
				}))
			}
			hasAuth() {
				return void 0 === this.hasAuthValue && ((0, a.fF)(new Error("AuthManagerPrivate.hasAuth() called when state is not defined")), this.hasAuthValue = !0), this.hasAuthValue
			}
		};
		const _e = new class {
			openAuthDialog() {
				return i.Z.postToParent({
					type: "auth",
					action: "auth-dialog-open",
					data: {
						initializer: "auth-manager-public"
					}
				})
			}
		};
		var fe = n(6),
			we = n(13);
		const ye = e => {
				const t = new URL(e);
				class n {
					constructor() {
						this.items = []
					}
					contains(e) {
						return this.items.includes(e)
					}
					item(e) {
						var t;
						return null != (t = this.items[e]) ? t : null
					}
					get length() {
						return this.items.length
					}*[Symbol.iterator]() {}
				}
				return {
					location: {
						ancestorOrigins: new n,
						hash: t.hash,
						host: t.host,
						hostname: t.hostname,
						href: t.href,
						origin: t.origin,
						pathname: t.pathname,
						port: t.port,
						protocol: t.protocol,
						search: t.search,
						assign: () => {},
						reload: () => {},
						replace: () => {}
					}
				}
			},
			ve = "undefined" != typeof window ? window : ye("##");
		var be, Ee;
		const ke = E("src/sdk/utils/env", _.Dev),
			Pe = "undefined" != typeof window && ((null == (be = window.appData) ? void 0 : be.env) || (null == (Ee = window.gameTokAppData) ? void 0 : Ee.env)) || void 0,
			Se = Pe ? Pe.NODE_ENV : "production",
			Ae = "production" === Se || "stress" === Se;
		ke("IS_PROD", Ae), ke("NODE_ENV", Se);
		const Oe = (0, we.Z)(ve.location),
			xe = (Ae || parseInt(Oe.test_uid, 10), Ae || Oe.test_email, Ae || Oe.test_oauth, Oe.origin || void 0),
			Te = xe || ve.location.origin,
			Ie = xe ? xe.match(c.SBp) : Boolean(ve.location.origin.match(c.SBp)),
			De = ve.location.hostname.endsWith("ya.ru");
		const Re = Ie ? c.U_6.PLAYHOP : De ? c.U_6.YA : c.U_6.YANDEX,
			Ce = (Te.match(new RegExp(`[.\\/]${Re}\\.([a-z.]+)$`)) || ["", "ru"])[1],
			Le = (Pe ? Pe.SDK_BACKEND_URL : "##") || "",
			Ne = (Pe ? Pe.PLAYHOP_SDK_BACKEND_URL : "##") || "",
			Me = Ie ? u(Ne, Ce) : u(Le, Ce, ve.location.host);
		ke("BACKEND_SDK_URL", Me);
		Pe && Pe.OAUTH_CLIENT_ID, Pe && Pe.SDK_PASSPORT_PREFIX;
		let Ge;
		Ge = n(4).Z;
		const Be = Ge;
		c.xYt.L, c.xYt.CATEGORIZED_NEW_L, c.xYt.RECOMMENDED_NEW, c.xYt.ADAPTIVE_RECOMMENDED_NEW, c.xYt.PROFILE_RECENT_GAMES, c.xYt.PREMIUM_BIG, c.xYt.TV;
		var je = (e => (e.BIG = "big", e.NORMAL = "normal", e.ISLANDS_200 = "islands-200", e.ISLANDS_MIDDLE = "islands-middle", e.ISLANDS_75 = "islands-75", e.ISLANDS_RETINA_SMALL = "islands-retina-small", e.ISLANDS_RETINA_MEDIUM = "islands-retina-medium", e))(je || {});
		const Fe = "0/0-0";
		var $e = n(0);

		function Ye(e, t, n) {
			var r, o;
			if (!e) return;
			let a = function(e, t, n) {
				let r;
				try {
					let t = new URL(e);
					r = $e.parse((n ? t.hash : t.search).slice(1))
				} catch (e) {
					return
				}
				if (void 0 === r) return;
				let o = null == r ? void 0 : r[t];
				return o ? Array.isArray(o) ? o[0] : o : void 0
			}(e, "sdk_url", t);
			if (void 0 === a) return;
			const i = void 0 !== n ? n.SDK_CUSTOM_DOMAINS : process.env.SDK_CUSTOM_DOMAINS;
			if (!i) return;
			let s;
			try {
				s = JSON.parse(i)
			} catch (e) {
				return
			}
			if (void 0 === s) return;
			return null != (o = null == (r = null == s ? void 0 : s[a]) ? void 0 : r.apiDomain) ? o : void 0
		}

		function Ue(e) {
			var t;
			let n = new URL(e);
			if (null == (t = null == window ? void 0 : window.appData) ? void 0 : t.env) {
				let e = Ye(window.location.href, !0, window.appData.env);
				if (e) return n.hostname = e, n.href
			}
			return e
		}
		const We = {
				small: je.ISLANDS_RETINA_SMALL,
				medium: je.ISLANDS_RETINA_MEDIUM,
				large: je.ISLANDS_200
			},
			Ze = {
				small: je.ISLANDS_200,
				medium: je.ISLANDS_200,
				large: je.BIG
			},
			Ke = `${Me}/player`;
		class He {
			constructor(e) {
				this._personalInfo = e
			}
			getID() {
				// return (0, a.Ts)(new Error("Player.getID() is deprecated. Please, use Player.getUniqueID().\nhttps://yandex.ru/dev/games/doc/dg/sdk/sdk-player.html#sdk-player__profile-data")), Be.sendOnceDeprecatedUsage("Player.getID"), this._personalInfo.id
			}
			getUniqueID() {
				return this._personalInfo.uniqueID
			}
			getName() {
				return this._personalInfo.publicName
			}
			getMode() {
				var e;
				return G() ? "" : null != (e = this._personalInfo.mode) ? e : ""
			}
			getPhoto(e = "medium") {
				const t = We[e];
				if (!t) throw new Error(`Unknown size value ('${e}')`);
				return this._personalInfo.avatarIdHash ? `${Ue(Ke)}/avatar/${this._personalInfo.avatarIdHash}/${t}` : `https://avatars.mds.yandex.net/get-yapic/${Fe}/${t}`
			}
			hasPremium() {
				var e;
				return null != (e = this._personalInfo.hasPremium) && e
			}
		}

		function Ve(e, t) {
			let n, r;
			return function(...o) {
				const a = o,
					i = this;
				return n || (n = !0, setTimeout((() => n = !1), t), r = e.apply(i, a)), r
			}
		}
		var ze = n(11);

		function qe(e, t = "", n = {}) {
			Object.keys(n).forEach((e => {
				void 0 === n[e] && delete n[e]
			}));
			const r = (0, ze.Z)({
				url: `${e}${t}`,
				params: n
			});
			return (0, d.$g)(r)
		}

		function Je(e) {
			const {
				api: t,
				authRequired: n,
				path: r,
				params: o,
				timeout: a
			} = e;
			return new Promise(((e, s) => {
				const d = qe(t, r, o);
				if (!d) return void s(new Error("Can not create URL"));
				i.Z.postToParent({
					type: "fetch",
					data: {
						authRequired: n,
						options: {
							credentials: "include",
							referrerPolicy: "no-referrer-when-downgrade"
						},
						timeout: a,
						url: d
					}
				}).then((({
					data: {
						result: t
					}
				}) => {
					e(t)
				})).catch(s)
			}))
		}

		function Xe(e) {
			const {
				api: t,
				authRequired: n,
				data: r,
				params: o,
				path: a,
				timeout: s
			} = e;
			return new Promise(((e, d) => {
				const c = qe(t, a, o);
				if (!c) return void d(new Error("Can not create URL"));
				const l = {
					body: JSON.stringify(r),
					credentials: "include",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json"
					},
					method: "POST",
					referrerPolicy: "no-referrer-when-downgrade"
				};
				i.Z.postToParent({
					type: "fetch",
					data: {
						authRequired: n,
						options: l,
						timeout: s,
						url: c
					}
				}).then((({
					data: {
						result: t
					}
				}) => {
					e(t)
				})).catch(d)
			}))
		}
		const Qe = `${Me}/leaderboard`,
			et = () => 1e4 * X(),
			tt = (e, t = {}, n) => Je({
				api: Ue(Qe),
				timeout: et(),
				path: e,
				params: t,
				authRequired: Boolean(null == n ? void 0 : n.authRequired)
			});
		var nt = Object.defineProperty,
			rt = Object.defineProperties,
			ot = Object.getOwnPropertyDescriptors,
			at = Object.getOwnPropertySymbols,
			it = Object.prototype.hasOwnProperty,
			st = Object.prototype.propertyIsEnumerable,
			dt = (e, t, n) => t in e ? nt(e, t, {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: n
			}) : e[t] = n;
		const ct = Ve(((e, t, n = {}) => Xe({
			api: Ue(Qe),
			timeout: et(),
			authRequired: !0,
			path: e,
			data: t,
			params: n
		})), 1e3);
		class lt {
			constructor() {
				this._appId = (0, d.rh)()
			}
			getLeaderboardDescription(e) {
				return tt("/descr", {
					"app-id": this._appId,
					name: e
				})
			}
			getLeaderboardStat(e) {
				return tt("/stat", {
					"app-id": this._appId,
					name: e
				})
			}
			transformLeaderboardEntry(e) {
				const {
					avatarIdHash: t,
					lang: n,
					publicName: r,
					scopePermissions: o,
					uniqueID: a
				} = e.player, i = `${Ke}/avatar/${t}`;
				return s = ((e, t) => {
					for (var n in t || (t = {})) it.call(t, n) && dt(e, n, t[n]);
					if (at)
						for (var n of at(t)) st.call(t, n) && dt(e, n, t[n]);
					return e
				})({}, e), rt(s, ot({
					player: {
						getAvatarSrc: (e = "medium") => (We[e] || (e = "medium"), `${i}/${We[e]}`),
						getAvatarSrcSet: (e = "medium") => (We[e] || (e = "medium"), `${i}/${We[e]} 1x, ${i}/${Ze[e]} 2x`),
						lang: n,
						publicName: r,
						scopePermissions: o,
						uniqueID: a
					}
				}));
				var s
			}
			transformLeaderboardEntries(e) {
				return e.map(this.transformLeaderboardEntry)
			}
			getLeaderboardEntries(e, t) {
				const {
					includeUser: n = !1,
					quantityAround: r = 5,
					quantityTop: o = 5
				} = t || {};
				return tt((0, d.H8)("/entries"), {
					"app-id": this._appId,
					include_user: n,
					name: e,
					quantity_around: r,
					quantity_top: o
				}, {
					authRequired: n
				}).then((e => {
					const {
						entries: t,
						leaderboard: n,
						ranges: r,
						userRank: o
					} = e;
					return {
						entries: this.transformLeaderboardEntries(t),
						leaderboard: n,
						ranges: r,
						userRank: o
					}
				}))
			}
			getLeaderboardPlayerEntry(e) {
				if (G()) throw new fe.Z({
					code: "LEADERBOARD_PLAYER_NOT_PRESENT",
					httpStatus: 204,
					message: "Player is not present in leaderboard"
				});
				return tt((0, d.H8)("/player-entry"), {
					"app-id": this._appId,
					name: e
				}, {
					authRequired: !0
				}).then((e => {
					if (!e) throw new fe.Z({
						code: "LEADERBOARD_PLAYER_NOT_PRESENT",
						httpStatus: 204,
						message: "Player is not present in leaderboard"
					});
					return this.transformLeaderboardEntry(e)
				}))
			}
			setLeaderboardScore(e, t, n) {
				if (G()) return i.Z.postToParent({
					type: "gametok-manager",
					action: "new-igroyal-score",
					data: {
						score: t
					}
				}), new Promise((e => e(!0)));
				const r = {
					"app-id": this._appId,
					name: e,
					score: t
				};
				return "viber" === (0, M.VB)("utm_source") && (r.fromViber = !0), this.lastTimeLeaderboardWasSend && !this.canSetLeaderboardScoreByTime() ? Promise.reject("The request to setLeaderboardScore can be sent no more than once per second") : (n && (r.extraData = n), this.lastTimeLeaderboardWasSend = Date.now(), ct("/score", r))
			}
			canSetLeaderboardScoreByTime() {
				return Date.now() - this.lastTimeLeaderboardWasSend > 1e3
			}
		}
		const ut = () => {
			const e = new lt;
			return Promise.resolve(e)
		};
		var pt = n(7);
		const mt = "companyName",
			ht = "serviceName",
			gt = {
				[c.U_6.PLAYHOP]: {
					[mt]: {
						ru: "Playhop",
						en: "Playhop"
					},
					[ht]: {
						ru: "Playhop",
						en: "Playhop"
					}
				},
				[c.U_6.YANDEX]: {
					[mt]: {
						ru: "Яндекс",
						en: "Yandex"
					},
					[ht]: {
						ru: "Игры",
						en: "Games"
					}
				}
			};
		gt[c.U_6.YA] = gt[c.U_6.YANDEX];
		const _t = "ru";

		function ft(e, t = _t, n = "") {
			if (e) {
				if ("string" == typeof e) return e;
				if (t in e) return e[t] || n;
				if (!(e => !e || p.includes(e))(t) && "en" in e) return e.en || n;
				if (_t in e) return e[_t] || n
			}
			return n
		}
		const wt = "//yastatic.net/s3/games-static/static-data/images/payments/sdk";
		let yt = function() {
			yt = () => {}, Be.params({
				borrowParams: {
					payments: {
						appId: (0, d.rh)(),
						productCurrencyCodeGet: !0
					}
				}
			})
		};
		class vt {
			constructor(e) {
				this._productData = e
			}
			get id() {
				return this._productData.id
			}
			get title() {
				return ft(this._productData.title)
			}
			get description() {
				return ft(this._productData.description)
			}
			get imageURI() {
				const {
					image: e
				} = this._productData;
				return e && "object" == typeof e && "url_prefix" in e ? /\.(png|jpg|svg)$/.test(String(e.url_prefix)) ? e.url_prefix : `${e.url_prefix}/default256x256` : "https://yastatic.net/s3/games-static/static-data/images/payments/default-product-image.png"
			}
			get price() {
				const {
					price: e
				} = this._productData;
				return `${e} ${this.priceCurrencyCode}`
			}
			get priceValue() {
				return String(this._productData.price)
			}
			get priceCurrencyCode() {
				var e;
				return yt(), null == (e = window.YandexGamesSDKEnvironment) ? void 0 : e.moneyCodeSymbol
			}
			getPriceCurrencyImage(e = "small") {
				if ("svg" === e) return `${wt}/currency-icon-m.svg`;
				let t = "s";
				switch (e) {
					case "medium":
					case "small":
						t = e.charAt(0);
						break;
					default:
						console.warn(`Unknown size value ('${e}')`)
				}
				const n = window.devicePixelRatio >= 2;
				return `${wt}/currency-icon-${t}${n?"@2x":""}.png`
			}
			toJSON() {
				return {
					id: this.id,
					title: this.title,
					description: this.description,
					imageURI: this.imageURI,
					price: this.price,
					priceValue: this.priceValue,
					priceCurrencyCode: this.priceCurrencyCode
				}
			}
		}
		class bt {
			constructor(e) {
				"purchaseTime" in e || (e.purchaseTime = 0), this.purchaseData = e
			}
			get productID() {
				return this.purchaseData.productID
			}
			get purchaseTime() {
				return this.purchaseData.purchaseTime
			}
			get purchaseToken() {
				return this.purchaseData.purchaseToken
			}
			get developerPayload() {
				return this.purchaseData.developerPayload
			}
			toJSON() {
				return {
					productID: this.productID,
					purchaseTime: this.purchaseTime,
					purchaseToken: this.purchaseToken,
					developerPayload: this.developerPayload
				}
			}
		}

		function Et(e) {
			return function(e) {
				for (var t, n = "", r = e.length, o = 0; o < r; o++) t = e[o], n += String.fromCharCode(t > 251 && t < 254 && o + 5 < r ? 1073741824 * (t - 252) + (e[++o] - 128 << 24) + (e[++o] - 128 << 18) + (e[++o] - 128 << 12) + (e[++o] - 128 << 6) + e[++o] - 128 : t > 247 && t < 252 && o + 4 < r ? (t - 248 << 24) + (e[++o] - 128 << 18) + (e[++o] - 128 << 12) + (e[++o] - 128 << 6) + e[++o] - 128 : t > 239 && t < 248 && o + 3 < r ? (t - 240 << 18) + (e[++o] - 128 << 12) + (e[++o] - 128 << 6) + e[++o] - 128 : t > 223 && t < 240 && o + 2 < r ? (t - 224 << 12) + (e[++o] - 128 << 6) + e[++o] - 128 : t > 191 && t < 224 && o + 1 < r ? (t - 192 << 6) + e[++o] - 128 : t);
				return n
			}(function(e, t) {
				for (var n, r, o, a = e.replace(/[^A-Za-z0-9\+\/]/g, ""), i = a.length, s = t ? Math.ceil((3 * i + 1 >>> 2) / t) * t : 3 * i + 1 >>> 2, d = new Uint8Array(s), c = 0, l = 0, u = 0; u < i; u++)
					if (r = 3 & u, c |= ((o = a.charCodeAt(u)) > 64 && o < 91 ? o - 65 : o > 96 && o < 123 ? o - 71 : o > 47 && o < 58 ? o + 4 : 43 === o ? 62 : 47 === o ? 63 : 0) << 18 - 6 * r, 3 === r || i - u == 1) {
						for (n = 0; n < 3 && l < s; n++, l++) d[l] = c >>> (16 >>> n & 24) & 255;
						c = 0
					} return d
			}(e))
		}

		function kt(e, t) {
			t && Object.defineProperty(e, "signature", {
				enumerable: !1,
				configurable: !1,
				get: () => t
			})
		}
		const Pt = E("Payment", _.Dev);
		class St {
			constructor(e = {}) {
				this._config = e, this.___test1212()
			}
			getCatalog() {
				return new Promise(((e, t) => {
					i.Z.postToParent({
						type: "payments",
						action: "get-catalog",
						data: {
							lang: this._config.lang
						}
					}).then((({
						data: t
					}) => {
						Pt("get-catalog result", t), e(t.products.map((e => new vt(e))))
					})).catch((e => {
						t(e)
					}))
				}))
			}
			purchase(e) {
				"object" != typeof e && (e = {
					id: e,
					developerPayload: ""
				});
				const {
					developerPayload: t
				} = e;
				if (t) {
					if ("string" != typeof t) return Promise.reject(new Error("developerPayload must be a string"))
				} else e.developerPayload = "";
				return new Promise(((t, n) => {
					i.Z.postToParent({
						type: "payments",
						action: "purchase-start",
						data: {
							paymentsConfig: this._config,
							purchaseConfig: e
						}
					}).then((({
						data: {
							data: e,
							signature: n
						}
					}) => {
						Pt("purchase-start then");
						const r = new bt({
							productID: e.product.id,
							purchaseToken: e.token,
							developerPayload: e.developerPayload
						});
						kt(r, n), t(r)
					})).catch((e => {
						Pt("purchase-start catch"), n(e)
					}))
				}))
			}
			getPurchases() {
				return new Promise(((e, t) => {
					i.Z.postToParent({
						type: "payments",
						action: "get-purchases",
						data: {
							paymentsConfig: this._config
						}
					}).then((({
						data: {
							data: t,
							signature: n
						}
					}) => {
						Pt("getPurchases callback", t);
						const r = t.map((e => new bt({
							productID: e.product.id,
							purchaseToken: e.token,
							developerPayload: e.developerPayload
						})));
						kt(r, n), e(r)
					})).catch((e => {
						t(e)
					}))
				}))
			}
			consumePurchase(e) {
				return new Promise(((t, n) => {
					i.Z.postToParent({
						type: "payments",
						action: "purchase-consume",
						data: {
							token: e
						}
					}).then((({
						data: e
					}) => {
						if (console.info("consumePurchase data"), console.info(e), !e || !e.token) throw new pt.Z({
							code: "CANNOT_CONSUME_PURCHASE",
							message: "Can not consume purchase."
						});
						t(!0)
					})).catch((e => {
						n(e)
					}))
				}))
			}
			___test1212() {
				var e, t, n;
				if ("96458" !== (null == (e = window.YandexGamesSDKEnvironment) ? void 0 : e.app.id)) return;
				if (!0 !== (null == (n = null == (t = window.YandexGamesSDKEnvironment) ? void 0 : t.request.experiments) ? void 0 : n.test1212Payments)) return;
				const r = "position: fixed; left: 15px; padding: 0.3em; background: #fff; border: 1px solid #000; border-radius: 5px;";
				let o = document.createElement("div");
				o.setAttribute("id", "payElement1212-noads"), o.setAttribute("style", `${r} top: 5px;`), o.textContent = 'purchase("noads")', o.onclick = () => this.___test1212Purchase("noads"), document.body.appendChild(o), o = document.createElement("div"), o.setAttribute("id", "payElement1212-3x3antiblock"), o.setAttribute("style", `${r} top: 40px;`), o.textContent = 'purchase("3x3antiblock")', o.onclick = () => this.___test1212Purchase("3x3antiblock"), document.body.appendChild(o)
			}
			___test1212Purchase(e) {
				function t(t) {
					const n = document.getElementById(`payElement1212-${e}`);
					n && (n.style.backgroundColor = t ? "#0f0" : "#f00")
				}
				this.purchase({
					id: e,
					developerPayload: ""
				}).then((() => t(!0))).catch((e => {
					t(!1), (0, a.fF)(e)
				}))
			}
		}
		const At = function(e = {}) {
				const t = new St(e);
				return new Promise(((e, n) => {
					t.getCatalog().then((() => e(t))).catch(n)
				}))
			},
			Ot = `${Me}/player`,
			xt = () => 5e3 * X(),
			Tt = (e, t, n = {}) => Xe({
				api: Ue(Ot),
				timeout: xt(),
				path: e,
				data: t,
				params: n
			}),
			It = 204800;

		function Dt(e) {
			try {
				return JSON.stringify(e)
			} catch (e) {
				return (0, a.fF)(e), `${Date.now()}.${Math.random()}`
			}
		}
		class Rt {
			constructor(e) {
				this._playerId = e, this._dataHash = null, this._timestamp = 0
			}
			isSamePlayer(e) {
				return e === this._playerId
			}
			set dataHash(e) {
				this._dataHash = e ? Dt(e) : null
			}
			validate(e) {
				const t = Dt(e);
				return function(e) {
					try {
						return (new TextEncoder).encode(e).length
					} catch (t) {
						return function(e) {
							let t = e.length;
							for (let n = e.length - 1; n >= 0; n--) {
								let r = e.charCodeAt(n);
								r > 127 && r <= 2047 ? t++ : r > 2047 && r <= 65535 && (t += 2), r >= 56320 && r <= 57343 && n--
							}
							return t
						}(e)
					}
				}(t) > It ? {
					error: new Error("The data is too large (bigger then 204800 bytes)."),
					reject: !0
				} : this._dataHash === t ? {
					error: new Error("The data does not differ from the previous ones."),
					reject: !1
				} : {}
			}
			getWaitTime() {
				let e = 200;
				const t = Math.abs(Date.now() - this._timestamp);
				return t < 3e3 && (e = Math.max(200, 3e3 - t)), e
			}
			set timestamp(e) {
				this._timestamp = e
			}
		}
		const Ct = E("Player", _.Dev);

		function Lt(e) {
			const {
				data: t,
				signature: n
			} = function(e) {
				if ("signature" in e) {
					const {
						signature: t
					} = e;
					if ("string" == typeof t) {
						const {
							data: e
						} = JSON.parse(Et(t.split(".")[1]));
						return {
							data: e,
							signature: t
						}
					}(0, a.fF)(new Error("response.signature is not a string"))
				}
				return {
					data: e
				}
			}(e);
			return kt(t, n), t
		}

		function Nt(e, t) {
			if (void 0 === t) return e;
			if (!Array.isArray(t)) throw new Error("`keys` must be an Array");
			if (-1 !== t.indexOf("signature")) throw new Error('`keys` must not contains "signature" key');
			const n = {};
			return t.forEach((t => {
				t in e && (n[t] = e[t])
			})), n
		}

		function Mt(e) {
			return !(!e || "object" != typeof e) && Object.values(e).every((e => "number" == typeof e && !isNaN(e)))
		}
		let Gt, Bt, jt, Ft;
		i.Z.onExternalMessage("auth", (e => {
			if ("changed" === e.data.action && jt) {
				Ct("Call onLogoutCallback()");
				try {
					jt()
				} catch (e) {
					console.error()
				}
				jt = void 0
			}
		}));
		class $t extends He {
			constructor(e, t) {
				super(e), this.config = t, Bt && Bt.isSamePlayer(this.getUniqueID()) || (Bt = new Rt(this.getUniqueID()))
			}
			onLogout(e) {
				Ct("Set onLogout callback"), jt = e
			}
			getIDsPerGame() {
				return this._fetchData("-ids-per-game")
			}
			getData(e) {
				return G() ? Promise.resolve({}) : (void 0 !== this.data ? this.dataPromise = Promise.resolve(this.data) : void 0 === this.dataPromise && (this.dataPromise = new Promise(((e, t) => {
					this._fetchData("/data").then((t => {
						this.data = t, e(t)
					})).catch((e => {
						this.dataPromise = void 0, t(e)
					}))
				}))), this.dataPromise.then((t => Nt(t, e))))
			}
			setData(e, t = !1) {
				if (G()) return new Promise((e => e(!0)));
				if (! function(e) {
						return !(!e || "object" != typeof e)
					}(e)) return Promise.reject(new Error("Data is not valid"));
				this.data = e;
				const n = function(e, t = !1) {
					const n = Bt.validate(e);
					return n.error ? n.reject ? Promise.reject(n.error) : ((0, a.Ts)(n.error), Promise.resolve(!0)) : new Promise(((n, r) => {
						Gt && window.clearTimeout(Gt);
						let o = t ? 200 : Math.max(200, Bt.getWaitTime());
						Bt.timestamp = Date.now(), Gt = window.setTimeout((() => {
							Tt("/data", e).then((() => {
								Bt.dataHash = e, n(!0)
							})).catch((e => {
								Bt.timestamp = 0, Bt.dataHash = null, r(e)
							}))
						}), o)
					}))
				}(e, t);
				return t ? n : Promise.resolve(!0)
			}
			getStats(e) {
				return G() ? new Promise((e => e({}))) : (void 0 === this.statsPromise && (this.statsPromise = new Promise(((e, t) => {
					this._fetchData("/stats").then(e).catch(t).finally((() => this.statsPromise = void 0))
				}))), this.statsPromise.then((t => Nt(t, e))))
			}
			setStats(e) {
				return G() ? new Promise((e => e(!0))) : Mt(e) ? Tt("/stats", e) : Promise.reject(new Error("Stats is not valid"))
			}
			incrementStats(e) {
				return G() ? new Promise((e => e(!0))) : Mt(e) ? this._postData("/stats/increment", e) : Promise.reject(new Error("Increments is not valid"))
			}
			_fetchData(e) {
				return ((e, t = {}) => Je({
					api: Ue(Ot),
					timeout: xt(),
					path: e,
					params: t
				}))((0, d.H8)(`${e}${this.config.signed?"-signed":""}`)).then(Lt)
			}
			_postData(e, t) {
				return Tt(`${e}${this.config.signed?"-signed":""}`, t).then(Lt)
			}
		}
		try {
			Ft = window.localStorage
		} catch (e) {}
		const Yt = Ft || function() {
				let e = {};
				return {
					clear() {
						e = {}
					},
					getItem: t => e[t],
					key: t => Object.keys(e)[t],
					removeItem(t) {
						delete e[t]
					},
					setItem(t, n) {
						e[t] = String(n)
					},
					get length() {
						return Object.keys(e).length
					}
				}
			}(),
			Ut = /iPad|iPhone|iPod/.test(navigator.platform),
			Wt = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
			Zt = Ut || Wt,
			Kt = /app-[^.]+\.games\.s3\.net$/.test(window.location.hostname),
			Ht = !Kt && Zt,
			Vt = N((() => {
				(0, a.fF)(new Error("localStorage is broken on iOS/MacOS - https://developer.apple.com/forums/thread/109909\nPlease use YaGames.init().then(ysdk => ysdk.getStorage()).then(storage => storage.setItem('key', 'value'))"))
			})),
			zt = class {
				static setup() {
					Ht && Object.defineProperty(window, "localStorage", {
						get: function() {
							return Vt(), Yt
						}
					}), Zt && Kt && zt.setProxy() && zt.backup()
				}
				static load() {
					if (zt.onloadPromise_) return zt.onloadPromise_;
					const e = zt.getCustomLocalStorage();
					return e ? (zt.onloadPromise_ = new Promise((t => {
						window.addEventListener("message", (({
							data: {
								type: n,
								action: r,
								data: o
							}
						}) => {
							if ("local-storage" === n && "get-all" === r) {
								for (let t in o) e.setItem(t, String(o[t]));
								t(e)
							}
						})), window.parent.postMessage({
							type: "local-storage",
							action: "get-all",
							source: "YandexGamesSDK"
						}, "*")
					})), zt.onloadPromise_) : Promise.resolve(Yt)
				}
				static getCustomLocalStorage() {
					if ("function" != typeof Proxy) return null;
					return new Proxy({
						clear() {
							Yt.clear.call(Yt), i.Z.postToParent({
								type: "local-storage",
								action: "clear"
							})
						},
						getItem: e => Yt.getItem.call(Yt, e),
						key: e => Yt.key.call(Yt, e),
						get length() {
							return Yt.length
						},
						removeItem(e) {
							Yt.removeItem.call(Yt, e), i.Z.postToParent({
								type: "local-storage",
								action: "del",
								data: {
									key: e
								}
							})
						},
						setItem(e, t) {
							Yt.setItem.call(Yt, e, String(t)), i.Z.postToParent({
								type: "local-storage",
								action: "set",
								data: {
									key: e,
									value: t
								}
							})
						}
					}, {
						get: function(e, t) {
							return t in e ? e[t] : e.getItem(String(t))
						},
						set: function(e, t, n) {
							return e.setItem(String(t), n), !0
						}
					})
				}
				static setProxy() {
					const e = zt.getCustomLocalStorage();
					return !!e && (Object.defineProperty(window, "localStorage", {
						get: function() {
							return e
						}
					}), !0)
				}
				static backup() {
					const e = Object.create(null);
					for (let t = 0; t < Yt.length; t++) {
						const n = Yt.key(t);
						n && (e[n] = Yt.getItem(n))
					}
					i.Z.postToParent({
						type: "local-storage",
						action: "backup",
						data: e
					})
				}
			};
		let qt = zt;

		function Jt() {
			return !Zt && Ft ? Promise.resolve(Ft) : qt.load()
		}

		function Xt(e) {
			const t = typeof e;
			return null != e && ("object" === t || "function" === t)
		}
		qt.onloadPromise_ = null;
		var Qt = Object.defineProperty,
			en = Object.getOwnPropertySymbols,
			tn = Object.prototype.hasOwnProperty,
			nn = Object.prototype.propertyIsEnumerable,
			rn = (e, t, n) => t in e ? Qt(e, t, {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: n
			}) : e[t] = n,
			on = (e, t) => {
				for (var n in t || (t = {})) tn.call(t, n) && rn(e, n, t[n]);
				if (en)
					for (var n of en(t)) nn.call(t, n) && rn(e, n, t[n]);
				return e
			};
		const an = E("captureAlert");

		function sn(e) {
			var t, n;
			if ("DIV" === e.tagName && e.getAttribute("style") && !e.querySelector("div") && !e.classList.length && !e.id) {
				const e = "OK" === (null == (t = document.querySelector("button")) ? void 0 : t.textContent) && (null == (n = document.querySelector("span")) ? void 0 : n.textContent);
				e && (an(`popup message = ${e}`), i.Z.postToParent({
					type: "game-call-alert",
					data: {
						message: e,
						popup: !0
					}
				}))
			}
		}

		function dn() {
			const e = "createUnityInstance" in window || "UnityLoader" in window;
			if (an("captureUnityAlert isUnity", e), !e) return;
			if (document.querySelectorAll("div[style]:not([id]):not([class])").forEach(sn), "undefined" != typeof MutationObserver) {
				const e = new MutationObserver((e => {
					e.forEach((e => {
						"childList" === e.type && setTimeout((() => {
							Array.from(e.addedNodes).forEach(sn)
						}), 0)
					}))
				}));
				e.observe(document.body, {
					childList: !0,
					subtree: !0
				}), window.addEventListener("unload", (() => {
					e.disconnect()
				}))
			}
		}
		const cn = new class {
				writeText(e) {
					try {
						e = String(e)
					} catch (e) {
						return Promise.reject(new Error("Error while stringified provided value"))
					}
					return new Promise(((t, n) => {
						i.Z.postToParent({
							type: "clipboard",
							action: "write-text",
							data: {
								text: e
							}
						}).then((() => t(void 0))).catch(n)
					}))
				}
			},
			ln = {
				android: () => !ln.windows() && hn("android"),
				androidPhone: () => ln.android() && hn("mobile"),
				androidTablet: () => ln.android() && !hn("mobile"),
				blackberry: () => hn("blackberry") || hn("bb10") || hn("rim"),
				blackberryPhone: () => ln.blackberry() && !hn("tablet"),
				blackberryTablet: () => ln.blackberry() && hn("tablet"),
				cordova: () => Boolean(window.cordova && "file:" === window.location.protocol),
				desktop: () => !ln.tablet() && !ln.mobile(),
				fxos: () => (hn("(mobile") || hn("(tablet")) && hn(" rv:"),
				fxosPhone: () => ln.fxos() && hn("mobile"),
				fxosTablet: () => ln.fxos() && hn("tablet"),
				ios: () => ln.iphone() || ln.ipod() || ln.ipad(),
				ipad: () => hn("ipad"),
				iphone: () => !ln.windows() && hn("iphone"),
				ipod: () => hn("ipod"),
				landscape: function() {
					return screen.orientation && Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? mn(screen.orientation.type, "landscape") : window.innerHeight / window.innerWidth < 1
				},
				macos: () => hn("mac"),
				meego: () => hn("meego"),
				mobile: function() {
					return ln.androidPhone() || ln.iphone() || ln.ipod() || ln.windowsPhone() || ln.blackberryPhone() || ln.fxosPhone() || ln.meego()
				},
				nodeWebkit: () => "object" == typeof window.process,
				get os() {
					return gn(["ios", "iphone", "ipad", "ipod", "android", "blackberry", "macos", "windows", "fxos", "meego", "television"])
				},
				portrait: function() {
					return screen.orientation && Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? mn(screen.orientation.type, "portrait") : window.innerHeight / window.innerWidth > 1
				},
				tablet: function() {
					return ln.ipad() || ln.androidTablet() || ln.blackberryTablet() || ln.windowsTablet() || ln.fxosTablet()
				},
				tv: () => pn.some((e => hn(e))),
				get type() {
					return gn(["tv", "mobile", "tablet", "desktop"])
				},
				windows: () => hn("windows"),
				windowsPhone: () => ln.windows() && hn("phone"),
				windowsTablet: () => ln.windows() && hn("touch") && !ln.windowsPhone()
			},
			un = "undefined" == typeof window ? "" : window.navigator.userAgent.toLowerCase(),
			pn = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "pov_tv", "hbbtv", "ce-html", "yandexmodule", "androidtv"];

		function mn(e, t) {
			return -1 !== e.indexOf(t)
		}

		function hn(e) {
			return mn(un, e)
		}

		function gn(e) {
			for (let t = 0; t < e.length; t += 1)
				if (ln[e[t]]()) return e[t];
			return "unknown"
		}
		const _n = ln,
			fn = {
				isMobile: () => _n.mobile(),
				isTablet: () => _n.tablet(),
				isDesktop: () => _n.desktop(),
				isTV: () => _n.tv(),
				type: _n.type
			},
			wn = {
				APP_VERSION: "",
				app: {
					id: ""
				},
				browser: {
					lang: "ru"
				},
				clid: void 0,
				i18n: {
					lang: "ru",
					tld: "ru"
				},
				isStickyBannerEnabled: !1,
				isWorldWide: !1,
				isYandexApp: !1,
				moneyCodeSymbol: c.NAu.HOP,
				params: {},
				request: {},
				serviceName: c.Go0.YANDEX
			};
		let yn = () => (window.YandexGamesSDKEnvironment || (0, a.fF)(new Error("SDK environment: `window.YandexGamesSDKEnvironment` is undefined")), yn = () => window.YandexGamesSDKEnvironment || wn, yn());
		const vn = {
			get app() {
				return yn().app
			},
			get browser() {
				return yn().browser
			},
			get data() {
				return yn().data || {}
			},
			get i18n() {
				return yn().i18n
			},
			get payload() {
				return yn().params.payload
			}
		};
		var bn = Object.defineProperty,
			En = Object.getOwnPropertySymbols,
			kn = Object.prototype.hasOwnProperty,
			Pn = Object.prototype.propertyIsEnumerable,
			Sn = (e, t, n) => t in e ? bn(e, t, {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: n
			}) : e[t] = n,
			An = (e, t) => {
				for (var n in t || (t = {})) kn.call(t, n) && Sn(e, n, t[n]);
				if (En)
					for (var n of En(t)) Pn.call(t, n) && Sn(e, n, t[n]);
				return e
			};
		const On = (() => {
			var e;
			const t = null == (e = window.YandexGamesSDK) ? void 0 : e.game.info;
			if (!t) return;
			const n = parseInt(t.appId, 10);
			return n ? {
				appId: n,
				developerId: t.publisher.id
			} : void 0
		})();
		var xn = n(9);

		function Tn(e, t) {
			t && (e.type = t), i.Z.postToParent({
				data: e,
				type: "error"
			}).catch((e => {
				// console.warn(e)
			}))
		}

		function In(e) {
			return {
				data: {
					additional: {
						sdkVersion: 2
					}
				},
				error: e,
				source: "game",
				sourceMethod: (0, a.Zi)(e.stack)
			}
		}
		const Dn = new class {
			constructor(e) {
				this.source = e, window.addEventListener("error", this), "Promise" in window && window.addEventListener("unhandledrejection", this)
			}
			addLogger(e) {
				this.logger = e
			}
			handleEvent(e) {
				this._handleEvent(e)
			}
			_handleEvent(e, t = "error") {
				try {
					this._unsafeHandleEvent(e, t)
				} catch (e) {
					console.warn("Couldn't handle event in ErrorCounter!", e)
				}
			}
			_unsafeHandleEvent(e, t) {
				return "unhandledrejection" === e.type ? this._unsafeHandlePromiseRejectionEvent(e) : this._unsafeHandleErrorEvent(e, t)
			}
			_unsafeHandlePromiseRejectionEvent(e) {
				var t;
				const {
					reason: n
				} = e;
				if (!n) return;
				let r;
				const o = {};
				n.stack && n.message ? r = n.message : (r = String(n), "[object Event]" === r ? r = "event.type: " + n.type : "[object Object]" === r && (o.unhandledObject = n)), (null == (t = n.target) ? void 0 : t.src) && (o.src = n.target.src), this._postError({
					additional: o,
					message: "Unhandled rejection: " + r,
					name: "UnhandledPromiseError",
					stack: n.stack || ""
				}, "unhandled")
			}
			_unsafeHandleErrorEvent(e, t) {
				var n, r, o, a, i;
				const {
					error: s
				} = e, d = {
					columnNumber: null != (r = null != (n = e.colno) ? n : null == s ? void 0 : s.columnNumber) ? r : -1,
					fileName: e.filename || (null == s ? void 0 : s.fileName) || "",
					lineNumber: null != (a = null != (o = e.lineno) ? o : null == s ? void 0 : s.lineNumber) ? a : -1,
					message: e.message || (null == s ? void 0 : s.message) || "",
					name: (null == s ? void 0 : s.name) || "Error",
					stack: null != (i = null == s ? void 0 : s.stack) ? i : ""
				};
				(On || (null == s ? void 0 : s.additional)) && (d.additional = An(An({}, null == s ? void 0 : s.additional), On)), this._postError(d, t)
			}
			_postError(e, t) {
				var n;
				let r = (0, a.Zi)(e.stack);
				"ErrorListener.handleEvent" === r && (r = "unknown"), null == (n = this.logger) || n.call(this, {
					data: {
						additional: e.additional || {}
					},
					error: e,
					source: this.source,
					sourceMethod: r
				}, t)
			}
		}("game");
		Dn.addLogger(Tn),
			function() {
				try {
					const e = console.error;
					console.error = (...t) => {
						let n = t.filter((e => e instanceof Error))[0];
						n || (n = (0, xn.Z)(t));
						try {
							"string" == typeof t[1] && t[1] === a.X4 ? t.pop() : Tn(In(n), "console.error")
						} catch (e) {}
						// e.apply(console, t)
					}
				} catch (e) {
					try {
						Tn(In(e), "error")
					} catch (e) {}
				}
			}();
		var Rn = (e => (e.LoadingAPI = "LoadingAPI", e.AudioAPI = "AudioAPI", e))(Rn || {}),
			Cn = (e => (e.GameInit = "loading_api_game_init", e.GameReady = "loading_api_game_ready", e.GameReadyForce = "loading_api_game_ready_force", e.IframeAdded = "loading_api_iframe_added", e.IframeError = "loading_api_iframe_resources_error", e.IframeLoaded = "loading_api_iframe_resources_loaded", e.ScriptInit = "loading_api_script_init", e.TTIReady = "loading_api_tti_ready", e))(Cn || {});
		const Ln = ["LoadingAPI"];
		const Nn = {
			[Rn.LoadingAPI]: class {
				constructor() {
					this.isReady = !1, this.startTimestamp = Date.now(), this.startReadyFallbackTimeout()
				}
				ready() {
					this.isReady = !0;
					const e = Date.now() - this.startTimestamp;
					this.logGameInitTime(e, Cn.GameReady), clearTimeout(this.readyFallbackTimerId)
				}
				logGameInitTime(e, t) {
					i.Z.postToParent({
						type: "game-measuring",
						action: t,
						data: {
							timeFromInit: e
						}
					})
				}
				startReadyFallbackTimeout() {
					this.readyFallbackTimerId = setTimeout((() => {
						this.isReady = !0, this.logGameInitTime(3e4, Cn.GameReadyForce)
					}), 3e4)
				}
			}
		};
		class Mn {
			constructor(e = {}) {
				for (let t in Rn) Rn[t] in e && e[Rn[t]] && (this[t] = new Nn[t]);
				for (let t of Ln) !this[t] && (t in e && e[t] || !(t in e)) && (this[t] = new Nn[t]);
				i.Z.postToParent({
					type: "game-measuring",
					action: Cn.GameInit
				})
			}
		}
		Rn.LoadingAPI;
		const Gn = new class {
			canReview() {
				return new Promise((e => {
					i.Z.postToParent({
						type: "feedback",
						action: "can-review"
					}).then((({
						data: t
					}) => {
						e(t)
					})).catch((t => {
						(0, a.fF)(t), e({
							reason: "UNKNOWN",
							value: !1
						})
					}))
				}))
			}
			requestReview() {
				return new Promise((e => {
					i.Z.postToParent({
						type: "feedback",
						action: "request-review"
					}).then((({
						data: t
					}) => {
						const {
							feedbackSent: n,
							reason: r
						} = t;
						r ? ((0, a.fF)(r), e({
							feedbackSent: null != n && n
						})) : e({
							feedbackSent: null == n || n
						})
					})).catch((t => {
						(0, a.fF)(t), e({
							feedbackSent: !1
						})
					}))
				}))
			}
		};

		function Bn() {
			! function() {
				var e;
				null == (e = window.top) || e.postMessage({
					type: "foolproof-sdk-init",
					url: location.href,
					draftDetectedInIframe: (0, d.mv)()
				}, "*")
			}()
		}

		function jn(e) {
			try {
				return "WebGLRenderingContext" in window && Boolean(e.getContext("webgl") || e.getContext("experimental-webgl") instanceof WebGLRenderingContext)
			} catch (e) {
				(0, a.fF)(e, {
					sourceMethod: "isWebGLSupported",
					level: "warn"
				})
			}
			return !1
		}

		function Fn(e) {
			try {
				return "WebGL2RenderingContext" in window && Boolean(e.getContext("webgl2") || e.getContext("experimental-webgl2") instanceof WebGL2RenderingContext)
			} catch (e) {
				(0, a.fF)(e, {
					sourceMethod: "isWebGL2Supported",
					level: "warn"
				})
			}
			return !1
		}

		function $n() {
			const e = [];
			return "createUnityInstance" in window && e.push("unity"), e
		}

		function Yn() {
			const e = [],
				t = {
					webassembly: "WebAssembly" in window,
					webgl: jn(document.createElement("canvas")),
					webgl2: Fn(document.createElement("canvas"))
				};
			return Object.keys(t).filter((e => t[e])).forEach((t => {
				e.push(t)
			})), e
		}
		const Un = {
			allow() {
				i.Z.postToParent({
					type: "notifications",
					action: "allow"
				})
			}
		};

		function Wn(...e) {
			const t = e => e && "object" == typeof e;
			return e.reduce(((e, n) => (Object.keys(n).forEach((r => {
				const o = e[r],
					a = n[r];
				Array.isArray(o) && Array.isArray(a) ? e[r] = o.concat(...a) : t(o) && t(a) ? e[r] = Wn(o, a) : e[r] = a
			})), e)), {})
		}

		function Zn(e) {
			if (!e || "object" != typeof e) return {};
			! function(e) {
				"partnerId" in e && (delete e.partnerId, console.warn("`partnerId` is deprecated in the SDKv2"))
			}(e);
			return ["adv", "screen"].reduce(((t, n) => (n in e && (t = e[n]), t)), {})
		}

		function Kn(e = {}, t = {}) {
			return Zn(t),
				function(e = {}) {
					return function(e) {
							Ae || (e.advBlocks.fullscreen = J.FULLSCREEN, e.advBlocks.fullscreen_landscape = J.FULLSCREEN)
						}(e),
						function(e) {
							"adv" in e && Be.sendOnceDeprecatedUsage("SDK init options with adv");
							e.adv = e.adv || {},
								function(e) {
									if ("onAdvClose" in e && "function" != typeof e.onAdvClose) throw new Error('"onAdvClose" must be a function')
								}(e.adv)
						}(e),
						function(e) {
							if ("screen" in e && "object" != typeof e.screen) throw new Error("Wrong screen options type");
							let t = e.screen || {};
							t = function(e) {
								"fullscreen" in e ? function(e) {
									if ("boolean" != typeof e) throw new Error("Wrong fullscreen value")
								}(e.fullscreen) : e.fullscreen = !fn.isDesktop();
								return e
							}(t), t = function(e) {
								if ("orientation" in e) {
									const {
										orientation: t
									} = e;
									"string" == typeof t && (e.orientation = {
											value: t,
											lock: !0
										}),
										function(e) {
											if ("object" != typeof e) throw new Error("Wrong orientation value");
											if (![null, "portrait", "landscape"].includes(e.value)) throw new Error(`Wrong orientation value ("${e.value}")`);
											if ("lock" in e) {
												if ("boolean" != typeof e.lock) throw new Error(`Wrong orientation lock value ("${e.lock}")`)
											} else e.lock = !0
										}(e.orientation)
								} else e.orientation = {
									value: null,
									lock: !0
								};
								return e
							}(t), e.screen = t
						}(e), e
				}(Wn(e, t))
		}

		function Hn() {
			return new Promise(((e, t) => {
				i.Z.postToParent({
					type: "options",
					action: "get"
				}).then((({
					data: t
				}) => {
					e(t)
				})).catch((e => {
					t(e)
				}))
			}))
		}
		const Vn = (e = {}) => At(e),
			zn = {
				AVATAR: "avatar",
				NAME: "public_name"
			},
			qn = "personal_info";
		Object.keys(zn).map((e => zn[e]));
		var Jn = (e => (e.ALLOW = "allow", e.FORBID = "forbid", e.NOT_SET = "not_set", e))(Jn || {});
		class Xn {
			constructor(e = {}, t) {
				this._scopePermissions = e, this._requestedScopes = this._validateRequestedScopes(t)
			}
			show() {
				return new Promise(((e, t) => {
					i.Z.postToParent({
						type: "scopes",
						action: "open-scopes-dialog"
					}).then((({
						data: t
					}) => {
						e(t.result), i.Z.postToParent({
							type: "scopes",
							action: "focus"
						})
					})).catch(t)
				}))
			}
			isNeedToAskUser() {
				return [zn.AVATAR, zn.NAME].some((e => this._requestedScopes.includes(e) && this._scopePermissions[e] === Jn.NOT_SET))
			}
			_validateRequestedScopes(e) {
				let t = [];
				t = Array.isArray(e) ? Array.from(e) : void 0 === e || !0 === e ? [qn] : [];
				const n = t.indexOf(qn);
				return -1 !== n && t.splice(n, 1, zn.AVATAR, zn.NAME), t
			}
		}
		const Qn = class {
			constructor() {
				this.promise = new Promise(((e, t) => {
					this.resolve = e, this.reject = t
				}))
			}
		};
		const er = class {
			constructor() {
				this.promiseWrappers = Object.create(null)
			}
			getKey(e) {
				return JSON.stringify(e)
			}
			getFor(e) {
				return this.promiseWrappers[this.getKey(e)]
			}
			setFor(e, t) {
				t ? this.promiseWrappers[this.getKey(e)] = t : delete this.promiseWrappers[this.getKey(e)]
			}
			clear() {
				this.promiseWrappers = Object.create(null)
			}
		};
		var tr = (e, t, n) => new Promise(((r, o) => {
			var a = e => {
					try {
						s(n.next(e))
					} catch (e) {
						o(e)
					}
				},
				i = e => {
					try {
						s(n.throw(e))
					} catch (e) {
						o(e)
					}
				},
				s = e => e.done ? r(e.value) : Promise.resolve(e.value).then(a, i);
			s((n = n.apply(e, t)).next())
		}));
		const nr = E("PlayerProxy", _.Dev),
			rr = 3e5;
		const or = new er,
			ar = new Qn;
		let ir = !1;

		function sr(e = {}, t = !0) {
			const n = or.getFor(e);
			if (n && !1 !== t) return n.promise;
			const r = new Qn;
			return !1 !== t ? (or.setFor(e, r), window.setTimeout((() => {
				or.setFor(e, void 0)
			}), rr), ir || (ir = !0, i.Z.postToParent({
				type: "guard",
				action: "get-permission-promise"
			}).then((({
				data: e
			}) => {
				const {
					result: t
				} = e;
				ar.resolve(t)
			})))) : ar.resolve(void 0), i.Z.postToParent({
				type: "player",
				action: "fetch",
				data: {
					config: e
				}
			}).then((n => tr(this, [n], (function*({
				data: n
			}) {
				const {
					data: o,
					signature: a
				} = n, i = yield ar.promise;
				i && [Jn.ALLOW, Jn.FORBID].includes(i) && ("avatar" in o.scopePermissions && (o.scopePermissions.avatar = i), "public_name" in o.scopePermissions && (o.scopePermissions.public_name = i));
				const s = function(e, t, n) {
					const r = new $t(t, e);
					return kt(r, n), r
				}(e, o, a);
				if ("lite" === s.getMode() || G()) r.resolve(s);
				else {
					const n = new Xn(o.scopePermissions, e.scopes);
					t && n.isNeedToAskUser() ? n.show().then((() => sr(e, !1))).catch((() => s)).then((e => r.resolve(e))) : r.resolve(s)
				}
			})))).catch((t => {
				r.reject(t), or.setFor(e, void 0)
			})), r.promise
		}

		function dr(e = {}) {
			return sr(e, !0)
		}

		function cr(e) {
			var t;
			e && (e.focus(), null == (t = e.contentWindow) || t.focus(), e.onload = function() {
				var t;
				null == (t = e.contentWindow) || t.focus()
			})
		}
		i.Z.onExternalMessage("auth", (e => {
			["auth-dialog-cancel", "auth-dialog-success", "changed"].includes(e.data.action) && (nr("Clear getPlayer promises."), or.clear())
		}));
		class lr {
			constructor() {
				this.onMessage = e => {
					const {
						action: t
					} = e.data;
					"fullscreenchange" === t ? (document.dispatchEvent(new Event("fullscreenchange")), this._status = e.data.data.isFullscreen ? "on" : "off") : "iframe-focus" === t && this.iframeFocus()
				}, this._status = "off", this.overrideBrowserFullscreenElement(), this.initMessaging(), this.updateStatus()
			}
			get STATUS_ON() {
				return "on"
			}
			get STATUS_OFF() {
				return "off"
			}
			get status() {
				return this._status
			}
			request() {
				return i.Z.postToParent({
					type: "screen-manager",
					action: "request-fullscreen"
				})
			}
			exit() {
				return i.Z.postToParent({
					type: "screen-manager",
					action: "exit-fullscreen"
				})
			}
			toggle() {
				return i.Z.postToParent({
					type: "screen-manager",
					action: "toggle-fullscreen"
				})
			}
			iframeFocus() {
				cr(document.querySelector("iframe"))
			}
			updateStatus() {
				i.Z.postToParent({
					type: "screen-manager",
					action: "get-state"
				}).then((e => {
					const {
						isFullscreen: t
					} = e.data;
					this._status = t ? "on" : "off"
				}))
			}
			overrideBrowserFullscreenElement() {
				try {
					Object.getOwnPropertyDescriptor(document, "fullscreenElement") || Object.defineProperty(document, "fullscreenElement", {
						enumerable: !1,
						configurable: !0,
						get: () => this.status === this.STATUS_ON ? document.documentElement : null
					})
				} catch (e) {
					(0, a.fF)(e)
				}
			}
			initMessaging() {
				i.Z.onExternalMessage("screen-manager", this.onMessage)
			}
		}
		class ur {
			constructor() {
				this.fullscreen = new lr
			}
		}
		var pr = (e => (e.EXIT = "EXIT", e.HISTORY_BACK = "HISTORY_BACK", e))(pr || {});
		const mr = {
			[pr.EXIT]: !0
		};

		function hr() {
			const e = {
				[pr.HISTORY_BACK]: []
			};

			function t(t) {
				const n = e[t];
				return n || console.warn(`Yandex SDK Event ${t} is not in supported`), n || []
			}

			function n(e) {
				i.Z.postToParent({
					type: "sdk-internal-event",
					action: "listeners-change",
					data: {
						event: e,
						count: t(e).length
					}
				})
			}
			return i.Z.onExternalMessage("sdk-event", (n => {
					const r = n.data.action;
					r in e && t(r).forEach((e => {
						try {
							e()
						} catch (e) {
							(0, a.fF)(e)
						}
					}))
				})),
				function(r, o) {
					return r in e ? (function(e, r) {
						t(e).push(r), n(e)
					}(r, o), () => {
						! function(e, r) {
							const o = t(e),
								a = o.indexOf(r); - 1 !== a && (o.splice(a, 1), n(e))
						}(r, o)
					}) : (console.warn("Yandex SDK Event", r, `is not in supported. Available events: ${Object.keys(e).join}`), () => {})
				}
		}
		const gr = ["passport.ya", "passport.yandex", "an.yandex.ru", "avatars.mds.yandex.net", "/api/"];

		function _r(e) {
			const t = Cache.prototype[e];
			Cache.prototype[e] = function(e, n) {
				return "GET" !== e.method || 0 !== e.url.indexOf("https://") || (r = e.url, gr.some((e => -1 !== r.indexOf(e)))) ? Promise.resolve() : ("ignoreSearch" in (n = n || {}) || (n.ignoreSearch = !0), t.call(this, e, n));
				var r
			}
		}
		const fr = class {
			static overrideCacheSearch() {
				// ("function" != typeof Cache ? (console.warn("Can not find `Cache` function"), 0) : "function" != typeof Cache.prototype.match ? (console.warn("Can not find `Cache.match` function"), 0) : "function" == typeof Cache.prototype.matchAll || (console.warn("Can not find `Cache.matchAll` function"), 0)) && (_r("match"), _r("matchAll"))
			}
		};
		const wr = new class {
			canShowPrompt() {
				return new Promise((e => {
					i.Z.postToParent({
						type: "shortcut-manager",
						action: "can-show-prompt"
					}).then((({
						data: t
					}) => {
						e(t)
					})).catch((e => {
						(0, a.fF)(e)
					}))
				}))
			}
			showPrompt() {
				return new Promise((e => {
					i.Z.postToParent({
						type: "shortcut-manager",
						action: "show-prompt"
					}).then((({
						data: t
					}) => {
						e(t)
					})).catch((e => {
						(0, a.fF)(e)
					}))
				}))
			}
		};

		function yr(e) {
			window.setTimeout((() => {
				var t, n, r, o;
				const a = {
						borrowParams: {
							[`tmpPlayTime${e}`]: {
								appVersion: window.APP_VERSION
							}
						}
					},
					i = new Image,
					s = (null == (n = null == (t = window.YandexGamesSDKEnvironment) ? void 0 : t.i18n) ? void 0 : n.tld) || "ru",
					d = oe(null == (o = null == (r = window.YandexGamesSDKEnvironment) ? void 0 : r.data) ? void 0 : o.secondDomain);
				// i.src = `https://mc.yandex.${s}/watch/${d}?page-url=${encodeURIComponent(window.location.href)}&page-ref=${encodeURIComponent(document.referrer)}&charset=utf-8&site-info=${encodeURIComponent(JSON.stringify(a))}`
			}), 1e3 * e)
		}
		const vr = function() {
			yr(5), yr(60), yr(900)
		};
		var br = n(17);

		function Er() {
			return new Promise((e => {
				if ("loading" === document.readyState) {
					const t = n => {
						const {
							target: r
						} = n;
						r && "loading" !== r.readyState && (r.removeEventListener("readystatechange", t), e())
					};
					document.addEventListener("readystatechange", t)
				} else e()
			}))
		}
		var kr = Object.defineProperty,
			Pr = Object.defineProperties,
			Sr = Object.getOwnPropertyDescriptors,
			Ar = Object.getOwnPropertySymbols,
			Or = Object.prototype.hasOwnProperty,
			xr = Object.prototype.propertyIsEnumerable,
			Tr = (e, t, n) => t in e ? kr(e, t, {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: n
			}) : e[t] = n;
		const Ir = (e = null) => {
			var t;
			null === e && (e = window), ["testing", "prestable", "production"].includes("production") && !y && (/iPad|iPhone|iPod/.test(window.navigator.platform) || window.navigator.userAgent.includes("Mac") && "ontouchend" in document) && (e.console = (t = ((e, t) => {
				for (var n in t || (t = {})) Or.call(t, n) && Tr(e, n, t[n]);
				if (Ar)
					for (var n of Ar(t)) xr.call(t, n) && Tr(e, n, t[n]);
				return e
			})({}, console), Pr(t, Sr({
				log: () => {},
				error: () => {},
				info: () => {},
				debug: () => {},
				warn: () => {},
				trace: () => {},
				dir: () => {},
				dirxml: () => {},
				group: () => {},
				groupEnd: () => {},
				time: () => {},
				timeEnd: () => {},
				assert: () => {},
				profile: () => {}
			}))))
		};
		const Dr = E("sdkv2", _.Dev);
		! function() {
			try {
				const t = new URLSearchParams(window.location.hash).get("experiments") || "{}";
				an("experiments", t);
				const n = Boolean(JSON.parse(t)[c.lbi.gameHookAlert]);
				an("gameHookAlertExp", n), n && !(0, d.mv)() ? (an("alert hook enabled"), "function" == typeof window.alert && (e = window.alert, window.alert = function() {
					const t = arguments[0];
					return an(`alert message = ${t}`), i.Z.postToParent({
						type: "game-call-alert",
						data: {
							message: t
						}
					}), e.apply(this, arguments)
				}), window.addEventListener("load", dn, {
					once: !0
				})) : an("alert hook disabled")
			} catch (e) {
				(0, a.fF)(e, {
					prefix: "game_hook_alert exp error: ",
					level: "warn"
				})
			}
			var e
		}(), G() && (localStorage.clear(), indexedDB.databases().then((e => {
			e.forEach((e => {
				e.name && indexedDB.deleteDatabase(e.name)
			}))
		})));
		let Rr, Cr = Promise.resolve();
		Cr = function(t) {
			if (window.loadPolyfillsPromise) return window.loadPolyfillsPromise;
			let n = [
				[e.LEGACY, Boolean(Array.prototype.at)],
				[e.INTERSECTION_OBSERVER, Boolean("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype)],
				[e.SMOOTH_SCROLL, Boolean("scrollBehavior" in document.documentElement.style)],
				[e.ABORT_CONTROLLER, "undefined" != typeof AbortController]
			].filter((([, e]) => !e));
			return window.loadPolyfillsPromise = Promise.all(n.map((([e]) => new Promise(((n, r) => {
				(e => {
					const {
						async: t,
						content: n,
						crossorigin: r,
						id: o,
						nonce: a,
						onErrCb: i,
						onLoadCb: s,
						parentElement: d,
						src: c
					} = e, l = document.createElement("script");
					if (s && (l.onload = s), i && (l.onerror = i), l.type = "text/javascript", t && (l.async = t), c && (l.src = c), a && l.setAttribute("nonce", a), r && l.setAttribute("crossorigin", r), o && l.setAttribute("id", `${o}-script`), n) {
						const e = document.createTextNode(n);
						l.appendChild(e)
					}
					d ? d.appendChild(l) : document.body.appendChild(l)
				})({
					id: e,
					src: o(t, e),
					parentElement: document.head,
					onErrCb: r,
					onLoadCb: n
				})
			}))))), window.loadPolyfillsPromise
		}("//yastatic.net/s3/games-static/stardust/games/v1694664385/build/"), Cr = Cr.then((() => {
			ce && (Ir(), window.alert = e => console.warn("Overridden alert: " + e)), (() => {
				if (window.top !== window) return;
				if (-1 === window.location.hostname.indexOf("##") && -1 === window.location.hostname.indexOf("##") && -1 === window.location.hostname.indexOf("##") && -1 === window.location.hostname.indexOf("##")) return;
				const e = (0, d.rh)();
				if (!e) return;
				const {
					search: t,
					hash: n,
					hostname: r
				} = window.location;
				let o;
				o = -1 === r.indexOf("games.s3.yandex.net") ? `/${e}${t}${n}` : `https://${l(window.location.hostname)?"ya":"yandex"}/games/app/${e}${t}${n}`, window.top.location.replace(o)
			})(), Bn()
		})), Dr("APP_VERSION", "1694664385");
		class Lr {
			constructor(e) {
				var t, n;
				e = Kn(e), this.EVENTS = {
					EXIT: pr.EXIT,
					HISTORY_BACK: pr.HISTORY_BACK
				}, this.dispatchEvent = function(e, t) {
					return new Promise(((n, r) => {
						if (!(e in mr)) {
							const t = `Yandex SDK Event ${e} is not in supported.`;
							return console.warn(t), void r(new Error(t))
						}
						const o = {
							action: e,
							type: "sdk-event"
						};
						if (void 0 !== t) try {
							o.data = {
								detail: JSON.stringify(t)
							}
						} catch (e) {
							return console.warn(e), void r(new Error('Wrong "detail" argument'))
						}
						i.Z.postToParent(o).then((() => {
							n(!0)
						})).catch((e => {
							r(e)
						}))
					}))
				}, this.onEvent = hr(), this.achievements = new x, this.adv = new me(e), this.auth = _e, this.clipboard = cn, this.deviceInfo = fn, this.environment = vn, this.feedback = Gn, this.isAvailableMethod = (n = this, e => G() && ["leaderboards.setLeaderboardScore"].includes(e) ? new Promise((e => e(!0))) : i.Z.postToParent({
					type: "auth",
					action: "has-auth"
				}).then((({
					data: t
				}) => {
					const {
						hasAuth: r
					} = t;
					if (!r && function(e) {
							return ["feedback.requestReview", "leaderboards.getLeaderboardPlayerEntry", "leaderboards.setLeaderboardScore", "player.getIDsPerGame"].includes(e)
						}(e)) return !1;
					const o = {
						leaderboards: lt,
						payments: St,
						player: $t,
						storage: qt.getCustomLocalStorage()
					};
					if (o[e]) return !1;
					const a = e.split(".");
					let i = on(on({}, o), n);
					for (let e = 0; e < a.length; e++) {
						const t = i[a[e]];
						if (!t) return !1;
						if (e === a.length - 1) return "function" == typeof t;
						if (!Xt(t)) return !1;
						i = Xt(t.prototype) ? t.prototype : t
					}
					return !1
				}))), this.shortcut = wr, this.getLeaderboards = ut, this.getPayments = Vn, this.getPlayer = dr, this.getStorage = Jt, this.notifications = Un, this.screen = new ur, this.features = new Mn(e.features), this.yandexApp = {
					enabled: Boolean(null == (t = window.YandexGamesSDKEnvironment) ? void 0 : t.isYandexApp)
				}
			}
		}
		Cr = Cr.then((() => {
			window.loadEnvironmentPromise = window.loadEnvironmentPromise || new Promise(((e, t) => {
					i.Z.postToParent({
						type: "environment",
						action: "get"
					}).then((({
						data: t
					}) => {
						e(t)
					})).catch((e => {
						t(e)
					}))
				})).then((e => {
					window.YandexGamesSDKEnvironment = e
				})),
				function(e) {
					const t = Ve(e, 2e3);
					["click", "keydown", "keyup", "mousedown", "mouseenter", "mouseleave", "mouseup", "pointerup", "touchcancel", "touchend", "touchmove", "touchstart"].forEach((e => document.addEventListener(e, t, {
						passive: !0,
						capture: !0
					})))
				}((() => i.Z.postToParent({
					type: "user-action"
				})))
		}));
		class Nr {
			constructor() {
				throw new Error("Please, use `YaGames.init` instead.")
			}
			static longtaskObserver() {
				var e;
				const t = "longtask";
				if ("undefined" != typeof PerformanceObserver && (null == (e = PerformanceObserver.supportedEntryTypes) ? void 0 : e.includes(t))) {
					let e;
					const n = () => {
							clearTimeout(e), e = setTimeout((() => {
								"complete" === document.readyState ? r.disconnect() : n()
							}), br.Tc)
						},
						r = new PerformanceObserver((e => {
							e.getEntries().forEach((() => {
								i.Z.postToParent({
									type: "longtask"
								}), n()
							}))
						}));
					r.observe({
						entryTypes: [t]
					})
				}
				"complete" === document.readyState ? i.Z.postToParent({
					type: "longtask_frame_ready"
				}) : window.addEventListener("load", (() => {
					i.Z.postToParent({
						type: "longtask_frame_ready"
					})
				}))
			}
			static init(e) {
				return t = this, n = null, r = function*() {
					return Rr ? (console.warn("YaGames was initialized"), Rr) : (this.longtaskObserver(), Dr("Start initialization"), yield Cr, Rr = new Promise(((t, n) => {
						! function() {
							const e = () => {
								i.Z.postToParent({
									type: "sdk_initialization",
									data: {
										initialized: !0
									}
								}), window.removeEventListener("load", e)
							};
							"complete" === document.readyState ? e() : window.addEventListener("load", e)
						}();
						const r = r => {
							try {
								e = Kn(r, e), Er().then((() => {
									const n = new Lr(e);
									ge.hasAuth() ? n.getPlayer({
										scopes: !1
									}).then((() => t(n))).catch((() => t(n))) : t(n)
								}))
							} catch (e) {
								(0, a.fF)(e), n(e)
							}
						};
						window.loadEnvironmentPromise.then((() => {
							Hn().then(r).catch((e => {
								console.warn(`Options load failed with error ${e}`), r()
							}))
						})).catch((e => {
							(0, a.fF)(e), Hn().then(r).catch((e => {
								console.warn(`Options load failed with error ${e}`), r()
							}))
						})), setTimeout((() => {
							var e, t;
							const n = {
								gameTech: $n()
							};
							if ((null == (t = null == (e = window.YandexGamesSDKEnvironment) ? void 0 : e.request.experiments) ? void 0 : t[c.lbi.clientTechLog]) && (Dr("checkAndSendGameInfo exp"), n.clientTech = Yn()), Dr("checkAndSendGameInfo tech data:", n), "complete" === document.readyState) i.Z.postToParent({
								type: "game-stats",
								data: n
							});
							else {
								const e = () => {
									i.Z.postToParent({
										type: "game-stats",
										data: n
									}), window.removeEventListener("load", e)
								};
								window.addEventListener("load", e)
							}
						}), 1e4)
					})), Rr.then((() => Dr("Initialized"))), Rr)
				}, new Promise(((e, o) => {
					var a = e => {
							try {
								s(r.next(e))
							} catch (e) {
								o(e)
							}
						},
						i = e => {
							try {
								s(r.throw(e))
							} catch (e) {
								o(e)
							}
						},
						s = t => t.done ? e(t.value) : Promise.resolve(t.value).then(a, i);
					s((r = r.apply(t, n)).next())
				}));
				var t, n, r
			}
		}
		if (Nr.deviceInfo = fn, window.YaGames && window.YaGamesAdded) {
			// const e = 'YaGames is already defined. Please, check double <script src="https://ya.ru/games/sdk/v2"> on the page.';
			(0, d.mv)() && window.parent.postMessage({
				source: "YandexGamesSDK",
				type: "alert",
				message: e
			}, "*"), (0, a.Ts)(new Error(e))
		} else {
			window.parent !== window && window.parent.postMessage({
				source: "YandexGamesSDK",
				type: "sdk-bundle-start",
				messageId: `${Date.now()}-${Math.random()}`,
				data: {
					time: Date.now(),
					sdkVersion: "v2",
					sdkBundle: "1694664385"
				}
			}, "*");
			try {
				qt.setup()
			} catch (e) {
				(0, a.fF)(e)
			}
			window.top !== window && Er().then(s), cr(document.querySelector("iframe")), fr.overrideCacheSearch(), vr(), "SecurityPolicyViolationEvent" in window ? window.addEventListener("securitypolicyviolation", (({
				blockedURI: e,
				columnNumber: t,
				disposition: n,
				documentURI: r,
				effectiveDirective: o,
				lineNumber: a,
				originalPolicy: s,
				referrer: d,
				sample: c,
				sourceFile: l,
				statusCode: u,
				violatedDirective: p
			}) => {
				i.Z.postToParent({
					type: "csp",
					action: "violation",
					data: {
						blockedURI: e,
						columnNumber: t,
						disposition: n,
						documentURI: r,
						effectiveDirective: o,
						lineNumber: a,
						originalPolicy: s,
						referrer: d,
						sample: c,
						sourceFile: l,
						statusCode: u,
						violatedDirective: p
					}
				})
			})) : console.warn("SecurityPolicyViolationEvent is not available for this browser")
		}
		window.YaGamesAdded = !0, window.YaGames = Nr;
		const Mr = Nr
	})(), YaGames = r.default
})();
//# sourceMappingURL=https://s3.mdst.yandex.net/games/source-maps/v1694664385/sdk/v2.js.map