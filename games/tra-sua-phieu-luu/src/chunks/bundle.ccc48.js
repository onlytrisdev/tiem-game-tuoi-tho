System.register([], function(_export, _context) {
	return {
		execute: function() {
			System.register("chunks:///_virtual/_rollupPluginModLoBabelHelpers.js", [], (function(e) {
				"use strict";
				return {
					execute: function() {
						function r(e, r, t, n, i, o, a) {
							try {
								var u = e[o](a),
									l = u.value
							} catch (e) {
								return void t(e)
							}
							u.done ? r(l) : Promise.resolve(l).then(n, i)
						}

						function t(e, r) {
							for (var t = 0; t < r.length; t++) {
								var n = r[t];
								n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
							}
						}

						function n(r, t) {
							return (n = e("setPrototypeOf", Object.setPrototypeOf || function(e, r) {
								return e.__proto__ = r, e
							}))(r, t)
						}

						function i(e, r) {
							if (e) {
								if ("string" == typeof e) return o(e, r);
								var t = Object.prototype.toString.call(e).slice(8, -1);
								return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? o(e, r) : void 0
							}
						}

						function o(e, r) {
							(null == r || r > e.length) && (r = e.length);
							for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
							return n
						}
						e({
							applyDecoratedDescriptor: function(e, r, t, n, i) {
								var o = {};
								Object.keys(n).forEach((function(e) {
									o[e] = n[e]
								})), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0);
								o = t.slice().reverse().reduce((function(t, n) {
									return n(e, r, t) || t
								}), o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, o.initializer = void 0);
								void 0 === o.initializer && (Object.defineProperty(e, r, o), o = null);
								return o
							},
							arrayLikeToArray: o,
							assertThisInitialized: function(e) {
								if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return e
							},
							asyncToGenerator: function(e) {
								return function() {
									var t = this,
										n = arguments;
									return new Promise((function(i, o) {
										var a = e.apply(t, n);

										function u(e) {
											r(a, i, o, u, l, "next", e)
										}

										function l(e) {
											r(a, i, o, u, l, "throw", e)
										}
										u(void 0)
									}))
								}
							},
							createClass: function(e, r, n) {
								r && t(e.prototype, r);
								n && t(e, n);
								return e
							},
							createForOfIteratorHelperLoose: function(e, r) {
								var t;
								if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
									if (Array.isArray(e) || (t = i(e)) || r && e && "number" == typeof e.length) {
										t && (e = t);
										var n = 0;
										return function() {
											return n >= e.length ? {
												done: !0
											} : {
												done: !1,
												value: e[n++]
											}
										}
									}
									throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
								}
								return (t = e[Symbol.iterator]()).next.bind(t)
							},
							defineProperty: function(e, r, t) {
								r in e ? Object.defineProperty(e, r, {
									value: t,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : e[r] = t;
								return e
							},
							inheritsLoose: function(e, r) {
								e.prototype = Object.create(r.prototype), e.prototype.constructor = e, n(e, r)
							},
							initializerDefineProperty: function(e, r, t, n) {
								if (!t) return;
								Object.defineProperty(e, r, {
									enumerable: t.enumerable,
									configurable: t.configurable,
									writable: t.writable,
									value: t.initializer ? t.initializer.call(n) : void 0
								})
							},
							setPrototypeOf: n,
							unsupportedIterableToArray: i
						})
					}
				}
			}));

			System.register("chunks:///_virtual/env", [], (function(e) {
				"use strict";
				return {
					execute: function() {
						e("JSB", !1)
					}
				}
			}));

			System.register("chunks:///_virtual/GameMonetizeSdk.mjs_cjs=&original=.js", ["./cjs-loader.mjs", "./GameMonetizeSdk.js"], (function(e, t) {
				"use strict";
				var a, r;
				return {
					setters: [function(e) {
						a = e.default
					}, function(t) {
						r = t.__cjsMetaURL;
						var a = {};
						a.__cjsMetaURL = t.__cjsMetaURL, a.default = t.default, e(a)
					}],
					execute: function() {
						r || a.throwInvalidWrapper("./GameMonetizeSdk.js", t.meta.url), a.require(r)
					}
				}
			}));

			System.register("chunks:///_virtual/cjs-loader.mjs", [], (function(r) {
				"use strict";
				return {
					execute: function() {
						r("default", new(function() {
							function r() {
								this._namedWrappers = {}, this._resolveCache = {}, this._moduleCache = {}
							}
							var e = r.prototype;
							return e.define = function(r, e) {
								this._namedWrappers[r] = e
							}, e.require = function(r) {
								return this._require(r)
							}, e.createRequireWithReqMap = function(r, e) {
								return function(t) {
									var n = r[t];
									if (n) return e(n);
									throw new Error("Unresolved specifier " + t)
								}
							}, e.throwInvalidWrapper = function(r, e) {
								throw new Error("Module '" + r + "' imported from '" + e + "' is expected be an ESM-wrapped CommonJS module but it doesn't.")
							}, e._require = function(r, e) {
								var t = this._moduleCache[r];
								if (t) return t.exports;
								var n = {
									id: r,
									exports: {}
								};
								return this._moduleCache[r] = n, this._tryModuleLoad(n, r), n.exports
							}, e._resolve = function(r, e) {
								return this._resolveFromInfos(r, e) || this._throwUnresolved(r, e)
							}, e._resolveFromInfos = function(r, e) {
								var t, n;
								return r in cjsInfos ? r : e && null !== (t = null === (n = cjsInfos[e]) || void 0 === n ? void 0 : n.resolveCache[r]) && void 0 !== t ? t : void 0
							}, e._tryModuleLoad = function(r, e) {
								var t = !0;
								try {
									this._load(r, e), t = !1
								} finally {
									t && delete this._moduleCache[e]
								}
							}, e._load = function(r, e) {
								var t = this._loadWrapper(e),
									n = this._createRequire(r);
								t(r.exports, n, r)
							}, e._loadWrapper = function(r) {
								return r in this._namedWrappers ? this._namedWrappers[r] : this._loadExternalWrapper(r)
							}, e._loadExternalWrapper = function(r) {
								return function(e) {
									var t;
									try {
										t = URL.fileURLToPath(r)
									} catch (e) {
										throw new Error(r + " is not a valid file URL")
									}
									var n = require(t);
									Object.assign(e, n)
								}
							}, e._createRequire = function(r) {
								var e = this;
								return function(t) {
									return e._require(t, r)
								}
							}, e._throwUnresolved = function(r, e) {
								throw new Error("Unable to resolve " + r + " from " + parent + ".")
							}, r
						}()))
					}
				}
			}));

			System.register("chunks:///_virtual/GDSdk.mjs_cjs=&original=.js", ["./cjs-loader.mjs", "./GDSdk.js"], (function(e, t) {
				"use strict";
				var r, s;
				return {
					setters: [function(e) {
						r = e.default
					}, function(t) {
						s = t.__cjsMetaURL;
						var r = {};
						r.__cjsMetaURL = t.__cjsMetaURL, r.default = t.default, e(r)
					}],
					execute: function() {
						s || r.throwInvalidWrapper("./GDSdk.js", t.meta.url), r.require(s)
					}
				}
			}));

			System.register("chunks:///_virtual/GamePixSdk.mjs_cjs=&original=.js", ["./cjs-loader.mjs", "./GamePixSdk.js"], (function(e, t) {
				"use strict";
				var a, r;
				return {
					setters: [function(e) {
						a = e.default
					}, function(t) {
						r = t.__cjsMetaURL;
						var a = {};
						a.__cjsMetaURL = t.__cjsMetaURL, a.default = t.default, e(a)
					}],
					execute: function() {
						r || a.throwInvalidWrapper("./GamePixSdk.js", t.meta.url), a.require(r)
					}
				}
			}));

		}
	};
});