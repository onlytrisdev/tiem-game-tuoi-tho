window.__require = function e(t, o, n) {
	function i(a, s) {
		if (!o[a]) {
			if (!t[a]) {
				var c = a.split("/");
				if (c = c[c.length - 1], !t[c]) {
					var l = "function" == typeof __require && __require;
					if (!s && l) return l(c, !0);
					if (r) return r(c, !0);
					throw new Error("Cannot find module '" + a + "'")
				}
				a = c
			}
			var p = o[a] = {
				exports: {}
			};
			t[a][0].call(p.exports, function(e) {
				return i(t[a][1][e] || e)
			}, p, p.exports, e, t, o, n)
		}
		return o[a].exports
	}
	for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
	return i
}({
	AppFacade: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "80035ljuvZFrbC48mtttcbB", "AppFacade");
		var n, i = this && this.__extends || (n = function(e, t) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
				})(e, t)
		}, function(e, t) {
			function o() {
				this.constructor = e
			}
			n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
		});
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var r = e("./base/commands/StartupCommand"),
			a = e("./base/commands/LoadResCommand"),
			s = e("./base/commands/LoadBundlesCommand"),
			c = e("../module/public/model/LoginProxy"),
			l = function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return i(t, e), Object.defineProperty(t, "instance", {
					get: function() {
						return t._instance || (t._instance = new t), t._instance
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.initializeController = function() {
					e.prototype.initializeController.call(this), this.registerCommand(t.APP_STARTUP, r.default), this.registerCommand(t.LOAD_BUNDLES, s.default), this.registerCommand(t.LOAD_RES, a.default)
				}, t.prototype.initializeView = function() {
					e.prototype.initializeView.call(this), this.registerProxy(new c.default)
				}, t.prototype.startup = function() {
					this.sendNotification(t.APP_STARTUP)
				}, t._instance = null, t.APP_STARTUP = "APP_STARTUP", t.LOAD_BUNDLES = "LOAD_BUNDLES", t.LOAD_RES = "LOAD_RES", t.LOGIN_COMMAND = "LOGIN_COMMAND", t.ADD_COIN_COMMAND = "ADD_COIN_COMMAND", t
			}(puremvc.Facade);
		o.default = l, cc._RF.pop()
	}, {
		"../module/public/model/LoginProxy": "LoginProxy",
		"./base/commands/LoadBundlesCommand": "LoadBundlesCommand",
		"./base/commands/LoadResCommand": "LoadResCommand",
		"./base/commands/StartupCommand": "StartupCommand"
	}],
	AppLog: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "f5997fBSKhJXaFstbsNrDHB", "AppLog");
		var n, i = this && this.__spreadArrays || function() {
			for (var e = 0, t = 0, o = arguments.length; t < o; t++) e += arguments[t].length;
			var n = Array(e),
				i = 0;
			for (t = 0; t < o; t++)
				for (var r = arguments[t], a = 0, s = r.length; a < s; a++, i++) n[i] = r[a];
			return n
		};
		Object.defineProperty(o, "__esModule", {
				value: !0
			}), o.error = o.warn = o.log = o.debug = o.info = void 0,
			function(e) {
				e[e.Verbose = 0] = "Verbose", e[e.Info = 1] = "Info", e[e.Log = 2] = "Log", e[e.Debug = 3] = "Debug", e[e.Warn = 4] = "Warn", e[e.Error = 5] = "Error"
			}(n || (n = {}));
		var r = n.Verbose;
		o.info = function(e) {
			for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
			(r === n.Verbose || n.Info >= r) && console.info.apply(console, i([e], t))
		}, o.debug = function(e) {
			for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
			(r === n.Verbose || n.Debug >= r) && console.debug.apply(console, i([e], t))
		}, o.log = function(e) {
			for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
			(r === n.Verbose || n.Log >= r) && console.log.apply(console, i([e], t))
		}, o.warn = function(e) {
			for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
			(r === n.Verbose || n.Warn >= r) && console.warn.apply(console, i([e], t))
		}, o.error = function(e) {
			for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
			(r === n.Verbose || n.Error >= r) && console.error.apply(console, i([e], t))
		}, cc._RF.pop()
	}, {}],
	App: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "af8fe0jPJxAZKOrnXSKawCD", "App"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = e("../framework/assetsModule/AssetsManager"),
			i = e("../framework/uiModule/UIManager"),
			r = e("./AudioManager"),
			a = e("./uiModule/BaseComponent"),
			s = e("./AppLog"),
			c = e("./EngineEventType"),
			l = e("./AppFacade"),
			p = e("./Error"),
			u = e("./uiModule/BaseModuleView"),
			d = e("./uiModule/BasePopView"),
			f = e("./assetsModule/BundleManager"),
			h = e("./uiModule/PopupManager");
		window.game = {}, window.game.BaseComponent = a.default, window.game.BundleManager = f.default, window.game.AssetsManager = n.default, window.game.UIManager = i.default, window.game.PopupManager = h.default, window.game.BaseModuleView = u.default, window.game.BasePopView = d.default, window.game.AudioManager = r.default, window.game.info = s.info, window.game.log = s.log, window.game.debug = s.debug, window.game.warn = s.warn, window.game.error = s.error, window.game.EngineEventType = c.EngineEventType, window.game.LoadingAssetsErrorCode = p.LoadingAssetsErrorCode, window.game.appFacade = l.default.instance, cc._RF.pop()
	}, {
		"../framework/assetsModule/AssetsManager": "AssetsManager",
		"../framework/uiModule/UIManager": "UIManager",
		"./AppFacade": "AppFacade",
		"./AppLog": "AppLog",
		"./AudioManager": "AudioManager",
		"./EngineEventType": "EngineEventType",
		"./Error": "Error",
		"./assetsModule/BundleManager": "BundleManager",
		"./uiModule/BaseComponent": "BaseComponent",
		"./uiModule/BaseModuleView": "BaseModuleView",
		"./uiModule/BasePopView": "BasePopView",
		"./uiModule/PopupManager": "PopupManager"
	}],
	AssetDeficiencyPopView: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "048acg0XrRGyaj4rOrak6Lj", "AssetDeficiencyPopView");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../../public/model/LoginProxy"),
			s = e("../../public/SSJJRewardedVideo"),
			c = cc._decorator,
			l = c.ccclass,
			p = c.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.numLabels = null, t.gainBtn = null, t.btnContinueTouTiao = null, t.titles = [], t.bodyTips = [], t.icons = [], t.gainGold = 300, t.tili = 10, t
				}
				return i(t, e), t.prototype.onResetView = function() {
					e.prototype.onResetView.call(this), this.continueRender(), 1 === this.param.type ? this.numLabels.getComponent(cc.Label).string = "+" + this.gainGold : this.numLabels.getComponent(cc.Label).string = "+" + this.tili;
					for (var t = 0; t < 2; t++) this.titles[t].active = this.param.type === t + 1, this.bodyTips[t].active = this.param.type === t + 1, this.icons[t].active = this.param.type === t + 1
				}, t.prototype.continueRender = function() {
					this.btnContinueTouTiao.active = !1, this.node_btn_close.active = !0
				}, t.prototype.onRemoveToScene = function() {
					e.prototype.onRemoveToScene.call(this)
				}, t.prototype.addEvent = function() {
					e.prototype.addEvent.call(this), this.gainBtn.on(game.EngineEventType.NodeEvent.click, this.clickGain, this), this.btnContinueTouTiao.on(game.EngineEventType.NodeEvent.click, this.clickContinue, this)
				}, t.prototype.removeEvent = function() {
					e.prototype.removeEvent.call(this), this.gainBtn.off(game.EngineEventType.NodeEvent.click, this.clickGain, this), this.btnContinueTouTiao.off(game.EngineEventType.NodeEvent.click, this.clickContinue, this)
				}, t.prototype.clickGain = function() {
					var e = this;
					s.default.showRewardedVideo(null, null, function() {
						e.gain()
					})
				}, t.prototype.gain = function() {
					var t = game.appFacade.retrieveProxy(a.default.NAME);
					1 === this.param.type ? t.opearCoin(this.gainGold) : t.opearTili(this.tili), e.prototype.closeView.call(this, !0)
				}, t.prototype.closeView = function(t) {
					void 0 === t && (t = !1), e.prototype.closeView.call(this, t)
				}, t.prototype.clickContinue = function() {
					this.closeView(!0)
				}, r([p(cc.Label)], t.prototype, "numLabels", void 0), r([p(cc.Node)], t.prototype, "gainBtn", void 0), r([p(cc.Node)], t.prototype, "btnContinueTouTiao", void 0), r([p([cc.Node])], t.prototype, "titles", void 0), r([p([cc.Node])], t.prototype, "bodyTips", void 0), r([p([cc.Node])], t.prototype, "icons", void 0), r([l], t)
			}(game.BasePopView);
		o.default = u, cc._RF.pop()
	}, {
		"../../public/SSJJRewardedVideo": "SSJJRewardedVideo",
		"../../public/model/LoginProxy": "LoginProxy"
	}],
	AssetsManager: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "d750fwd/6dMCaQ+nvPeebrG", "AssetsManager");
		var n = this && this.__awaiter || function(e, t, o, n) {
				return new(o || (o = Promise))(function(i, r) {
					function a(e) {
						try {
							c(n.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(n.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
							e(t)
						})).then(a, s)
					}
					c((n = n.apply(e, t || [])).next())
				})
			},
			i = this && this.__generator || function(e, t) {
				var o, n, i, r, a = {
					label: 0,
					sent: function() {
						if (1 & i[0]) throw i[1];
						return i[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(e) {
					return function(t) {
						return c([e, t])
					}
				}

				function c(r) {
					if (o) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
						switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
							case 0:
							case 1:
								i = r;
								break;
							case 4:
								return a.label++, {
									value: r[1],
									done: !1
								};
							case 5:
								a.label++, n = r[1], r = [0];
								continue;
							case 7:
								r = a.ops.pop(), a.trys.pop();
								continue;
							default:
								if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
									a = 0;
									continue
								}
								if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
									a.label = r[1];
									break
								}
								if (6 === r[0] && a.label < i[1]) {
									a.label = i[1], i = r;
									break
								}
								if (i && a.label < i[2]) {
									a.label = i[2], a.ops.push(r);
									break
								}
								i[2] && a.ops.pop(), a.trys.pop();
								continue
						}
						r = t.call(e, a)
					} catch (s) {
						r = [6, s], n = 0
					} finally {
						o = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var r = e("./AssetsMap"),
			a = e("./BundleManager"),
			s = function() {
				function e() {
					this._loadedBundleAssetss = []
				}
				return Object.defineProperty(e, "instance", {
					get: function() {
						return e._instance || (e._instance = new e), e._instance
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.loadResArray = function(e, t, o, r, a) {
					return n(this, void 0, Promise, function() {
						return i(this, function() {
							return [2, new Promise(function(n, i) {
								(r ? e.preload.bind(e) : e.load.bind(e))(t, o, function(e, t) {
									a && a(e, t)
								}, function(e, t) {
									e ? i(e) : n(t)
								})
							})]
						})
					})
				}, e.prototype.reloadBubdleAssets = function(e, t) {
					return n(this, void 0, Promise, function() {
						var o = this;
						return i(this, function() {
							return [2, new Promise(function(s, c) {
								return n(o, void 0, void 0, function() {
									var o, n, l, p, u, d, f, h, y, g, m;
									return i(this, function(_) {
										switch (_.label) {
											case 0:
												if (!(o = a.default.instance.getBundle(e))) return c("bundle not load"), [2];
												if (null == (n = r.default.bundleAssetsMap[e])) return [3, 8];
												l = this.getBundleAssetsCount(e), p = 0, _.label = 1;
											case 1:
												for (h in _.trys.push([1, 6, , 7]), u = function(e) {
														var r, a, s, c;
														return i(this, function(i) {
															switch (i.label) {
																case 0:
																	for (s in r = n[e], a = [], r.assetsList) a.push(r.assetsList[s]);
																	return a.length > 0 ? (c = function(e, o) {
																		t && t(p + e / o * a.length, l)
																	}, [4, d.loadResArray(o, a, r.assetsType, !1, c)]) : [3, 2];
																case 1:
																	i.sent(), p += a.length, i.label = 2;
																case 2:
																	return [2]
															}
														})
													}, d = this, f = [], n) f.push(h);
												y = 0, _.label = 2;
											case 2:
												return y < f.length ? (g = f[y], [5, u(g)]) : [3, 5];
											case 3:
												_.sent(), _.label = 4;
											case 4:
												return y++, [3, 2];
											case 5:
												return this._loadedBundleAssetss.push(e), s(p), [3, 7];
											case 6:
												return m = _.sent(), game.error("loading module assets error", m), c(m), [3, 7];
											case 7:
												return [3, 9];
											case 8:
												c(e + " \u8d44\u6e90\u5217\u8868\u4e3a\u7a7a"), _.label = 9;
											case 9:
												return [2]
										}
									})
								})
							})]
						})
					})
				}, e.prototype.reloadBundleAssetss = function(e, t, o, r) {
					return void 0 === t && (t = null), void 0 === o && (o = null), void 0 === r && (r = null), n(this, void 0, void 0, function() {
						var n, a, s, c, l, p, u;
						return i(this, function(i) {
							switch (i.label) {
								case 0:
									for (n = 0, a = 0, s = -1, l = 0; l < e.length; l++) a += this.getBundleAssetsCount(e[l]);
									c = function(e) {
										var t = (n + e) / a;
										t > s && (r && r(t), s = t)
									}, i.label = 1;
								case 1:
									i.trys.push([1, 6, , 7]), l = 0, i.label = 2;
								case 2:
									return l < e.length ? [4, this.reloadBubdleAssets(e[l], c)] : [3, 5];
								case 3:
									p = i.sent(), n += p, i.label = 4;
								case 4:
									return l++, [3, 2];
								case 5:
									return t && t(), [3, 7];
								case 6:
									return u = i.sent(), game.error("loading module assets error", u), o && o(u), [3, 7];
								case 7:
									return [2]
							}
						})
					})
				}, e.prototype.getBundleAssetsCount = function(e) {
					var t = r.default.bundleAssetsMap[e],
						o = 0;
					if (t) {
						for (var n in t) {
							var i = t[n].assetsList;
							o += Object.keys(i).length
						}
						return o
					}
					return 0
				}, e.prototype.getNeedLoadAssetsBundleNames = function(e) {
					for (var t = [], o = 0; o < e.length; o++) - 1 == this._loadedBundleAssetss.indexOf(e[o]) && t.push(e[o]);
					return t
				}, e._instance = null, e
			}();
		o.default = s, cc._RF.pop()
	}, {
		"./AssetsMap": "AssetsMap",
		"./BundleManager": "BundleManager"
	}],
	AssetsMap: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "f354fhrSlNIe4yYYOM8YbrO", "AssetsMap"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n, i = e("../BundleNames");
		(function(e) {
			e.ResourceBundle = {
				prefabs: {
					assetsType: cc.Prefab,
					assetsList: {
						Toast: "/prefabs/toast",
						Wait: "/prefabs/wait",
						Loading: "/prefabs/loading",
						InitModuleView: "/prefabs/InitModuleView",
						DialogView: "/prefabs/DialogView",
						PopMaskView: "/prefabs/PopMaskView",
						LoadingView: "/prefabs/LoadingView"
					}
				}
			}, e.PublicBundle = {
				prefabs: {
					assetsType: cc.Prefab,
					assetsList: {
						Guide_1: "/prefabs/Guide_1",
						Guide_2: "/prefabs/Guide_2",
						Guide_3: "/prefabs/Guide_3",
						Guide_4: "/prefabs/Guide_4",
						Guide_5: "/prefabs/Guide_5"
					}
				},
				sounds: {
					assetsType: cc.AudioClip,
					assetsList: {
						index_bgm: "/sounds/index_bgm",
						skip_ice: "/sounds/skip_ice",
						skip_fire: "/sounds/skip_fire",
						change: "/sounds/change",
						door: "/sounds/door",
						spring: "/sounds/spring",
						gain_diamond: "/sounds/gain_diamond",
						stron_move: "/sounds/stron_move",
						cheer: "/sounds/cheer",
						die: "/sounds/die",
						game_bgm: "/sounds/game_bgm",
						gold: "/sounds/gold",
						success: "/sounds/success",
						failure: "/sounds/failure",
						click: "/sounds/click"
					}
				},
				dragonAssets: {
					assetsType: dragonBones.DragonBonesAsset,
					assetsList: {
						br_pf1: "/dragonBones/br1/br_pf1_ske",
						hr_pf1: "/dragonBones/hr1/hr_pf1_ske",
						br_pf2: "/dragonBones/br2/br_pf2_ske",
						hr_pf2: "/dragonBones/hr2/hr_pf2_ske",
						br_pf3: "/dragonBones/br3/br_pf3_ske",
						hr_pf3: "/dragonBones/hr3/hr_pf3_ske",
						br_pf4: "/dragonBones/br4/br_pf4_ske",
						hr_pf4: "/dragonBones/hr4/hr_pf4_ske",
						br_pf5: "/dragonBones/br5/br_pf5_ske",
						hr_pf5: "/dragonBones/hr5/hr_pf5_ske",
						br_pf6: "/dragonBones/br6/br_pf6_ske",
						hr_pf6: "/dragonBones/hr6/hr_pf6_ske"
					}
				},
				dragonAtlasAssets: {
					assetsType: dragonBones.DragonBonesAtlasAsset,
					assetsList: {
						br_pf1: "/dragonBones/br1/br_pf1_tex",
						hr_pf1: "/dragonBones/hr1/hr_pf1_tex",
						br_pf2: "/dragonBones/br2/br_pf2_tex",
						hr_pf2: "/dragonBones/hr2/hr_pf2_tex",
						br_pf3: "/dragonBones/br3/br_pf3_tex",
						hr_pf3: "/dragonBones/hr3/hr_pf3_tex",
						br_pf4: "/dragonBones/br4/br_pf4_tex",
						hr_pf4: "/dragonBones/hr4/hr_pf4_tex",
						br_pf5: "/dragonBones/br5/br_pf5_tex",
						hr_pf5: "/dragonBones/hr5/hr_pf5_tex",
						br_pf6: "/dragonBones/br6/br_pf6_tex",
						hr_pf6: "/dragonBones/hr6/hr_pf6_tex"
					}
				}
			}, e.StartBundle = {
				prefabs: {
					assetsType: cc.Prefab,
					assetsList: {
						MainModuleView: "/prefabs/MainModuleView",
						PrivacyTreatyView: "/prefabs/PrivacyTreatyView"
					}
				}
			}, e.GameBundle = {
				prefabs: {
					assetsType: cc.Prefab,
					assetsList: {
						GameModuleView: "/prefabs/GameModuleView",
						GamePreMoudleView: "/prefabs/GamePreMoudleView",
						ChangeEffect: "/prefabs/effects/ChangeEffect",
						RunEffect: "/prefabs/effects/RunEffect",
						FloorEffect: "/prefabs/effects/FloorEffect",
						DieEffect: "/prefabs/effects/DieEffect",
						Gold: "/prefabs/prop/Gold",
						PlayerPoint: "/prefabs/prop/PlayerPoint"
					}
				},
				textures: {
					assetsType: cc.SpriteFrame,
					assetsList: {
						change_0: "/textures/opear/change_0",
						change_1: "/textures/opear/change_1"
					}
				},
				jsons: {
					assetsType: cc.JsonAsset,
					assetsList: {}
				}
			}, e.bundleAssetsMap = {}, e.bundleAssetsMap[i.default.Resources] = e.ResourceBundle, e.bundleAssetsMap[i.default.Public] = e.PublicBundle, e.bundleAssetsMap[i.default.Start] = e.StartBundle, e.bundleAssetsMap[i.default.Game] = e.GameBundle, e.PopupMap = {
				ReLifePopView: {
					name: "ReLifePopView",
					assetsPath: "/prefabs/ReLifePopView"
				},
				SettlePopView: {
					name: "SettlePopView",
					assetsPath: "/prefabs/SettlePopView"
				},
				PausePopView: {
					name: "PausePopView",
					assetsPath: "/prefabs/PausePopView"
				},
				ChooseLevelPopView: {
					name: "ChooseLevelPopView",
					assetsPath: "/prefabs/ChooseLevelPopView"
				},
				ShopPopView: {
					name: "ShopPopView",
					assetsPath: "/prefabs/ShopPopView",
					preAssets: {
						textures: {
							assetsType: cc.SpriteFrame,
							assetsList: {
								buyed_btn: "/textures/shop/buyed_btn",
								use_btn: "/textures/shop/use_btn",
								choose_border: "/textures/shop/choose_border",
								unchoose_border: "/textures/shop/unchoose_border"
							}
						}
					}
				},
				AssetDeficiencyPopView: {
					name: "AssetDeficiencyPopView",
					assetsPath: "/prefabs/AssetDeficiencyPopView"
				},
				SignPopView: {
					name: "SignPopView",
					assetsPath: "/prefabs/SignPopView"
				},
				GainPopView: {
					name: "GainPopView",
					assetsPath: "/prefabs/GainPopView"
				},
				TryPlayerDefaultPopView: {
					name: "TryPlayerDefaultPopView",
					assetsPath: "/prefabs/TryPlayerDefaultPopView"
				},
				SettlePopViewOppo: {
					name: "SettlePopViewOppo",
					assetsPath: "/prefabs/SettlePopViewOppo"
				},
				PausePopViewOppo: {
					name: "PausePopViewOppo",
					assetsPath: "/prefabs/PausePopViewOppo"
				}
			}
		})(n || (n = {})), o.default = n, cc._RF.pop()
	}, {
		"../BundleNames": "BundleNames"
	}],
	AudioManager: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "f65feF8sLBHvouhFDqpBaGq", "AudioManager");
		var n = this && this.__decorate || function(e, t, o, n) {
			var i, r = arguments.length,
				a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
			else
				for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
			return r > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var i = cc._decorator,
			r = i.ccclass,
			a = (i.property, function() {
				function e() {}
				var t;
				return t = e, e.playEffect = function(e, t) {
					void 0 === t && (t = !1), null != e && cc.audioEngine.playEffect(e, !1)
				}, e.playBGM = function(e, o) {
					void 0 === o && (o = !1), null != e && (this.stopBGM(), t._bgmAudioID = cc.audioEngine.playMusic(e, o))
				}, e.stopBGM = function() {
					t._bgmAudioID >= 0 && (cc.audioEngine.stopMusic(), t._bgmAudioID = -1)
				}, e.setVolumeSwitch = function(e) {
					e ? (cc.audioEngine.setMusicVolume(1), cc.audioEngine.setEffectsVolume(1)) : (cc.audioEngine.setMusicVolume(0), cc.audioEngine.setEffectsVolume(0))
				}, e.pauseAll = function() {
					cc.audioEngine.pauseAll()
				}, e.resumeAll = function() {
					cc.audioEngine.resumeAll()
				}, e._bgmAudioID = -1, t = n([r], e)
			}());
		o.default = a, cc._RF.pop()
	}, {}],
	BaseComponent: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "02b936sIVpHuJMbwNFDrT50", "BaseComponent");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
			s = a.ccclass,
			c = (a.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.param = null, t.isCache = !0, t
				}
				return i(t, e), t.prototype.onAddToScene = function() {
					this.onResetView(), this.registerMediator(), this.addEvent()
				}, t.prototype.onRemoveToScene = function() {
					this.removeMediator(), this.removeEvent()
				}, t.prototype.start = function() {
					this.onInitView()
				}, t.prototype.onEnable = function() {}, t.prototype.onDisable = function() {}, t.prototype.onInitView = function() {}, t.prototype.onResetView = function() {}, t.prototype.addEvent = function() {}, t.prototype.removeEvent = function() {}, t.prototype.registerMediator = function() {}, t.prototype.removeMediator = function() {}, r([s], t)
			}(cc.Component));
		o.default = c, cc._RF.pop()
	}, {}],
	BaseGuide: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "282b8YuoRZDXrRE4PeAnvj2", "BaseGuide");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../../framework/GlobalParam"),
			s = e("./obj/GameEventManage"),
			c = cc._decorator,
			l = c.ccclass,
			p = c.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.guide_index = -1, t.node_btn_continue = null, t
				}
				return i(t, e), t.prototype.start = function() {
					a.default.guideIndex = this.guide_index, this.startGuide(), this.node_btn_continue && this.node_btn_continue.on(game.EngineEventType.NodeEvent.click, this.onClickContinue, this)
				}, t.prototype.toNextGuide = function() {
					this.node.destroy(), game.appFacade.sendNotification(s.default.SHOWGUIDE, {
						index: this.guide_index + 1
					})
				}, t.prototype.onClickContinue = function() {
					this.node.destroy()
				}, t.ON_CONTINUE_GUIDE = "ON_CONTINUE_GUIDE", r([p(cc.Integer)], t.prototype, "guide_index", void 0), r([p(cc.Node)], t.prototype, "node_btn_continue", void 0), r([l], t)
			}(cc.Component);
		o.default = u, cc._RF.pop()
	}, {
		"../../framework/GlobalParam": "GlobalParam",
		"./obj/GameEventManage": "GameEventManage"
	}],
	BaseModuleView: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "9eb33nulU5PIIzPqNOLC5xo", "BaseModuleView");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("./BaseComponent"),
			s = cc._decorator,
			c = s.ccclass,
			l = (s.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return i(t, e), t.prototype.start = function() {
					e.prototype.start.call(this)
				}, r([c], t)
			}(a.default));
		o.default = l, cc._RF.pop()
	}, {
		"./BaseComponent": "BaseComponent"
	}],
	BasePopView: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "ba35ee3PSxFBJA4bHU1a14q", "BasePopView");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("./BaseComponent"),
			s = cc._decorator,
			c = s.ccclass,
			l = s.property,
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.node_mask = null, t.node_btn_close = null, t
				}
				return i(t, e), t.prototype.addEvent = function() {
					e.prototype.addEvent.call(this), null != this.node_mask && this.node_mask.on(game.EngineEventType.NodeEvent.click, this.onClickMask, this), null != this.node_btn_close && this.node_btn_close.on(game.EngineEventType.NodeEvent.click, this.onClickClose, this)
				}, t.prototype.onClickMask = function() {
					this.closeView(!0)
				}, t.prototype.onClickClose = function() {
					this.closeView(!0)
				}, t.prototype.closeView = function(e) {
					void 0 === e && (e = !1), game.PopupManager.instance.removePopupView(this.node, e)
				}, t.prototype.removeEvent = function() {
					e.prototype.removeEvent.call(this), null != this.node_mask && this.node_mask.off(game.EngineEventType.NodeEvent.click, this.onClickMask, this), null != this.node_btn_close && this.node_btn_close.off(game.EngineEventType.NodeEvent.click, this.onClickClose, this)
				}, r([l(cc.Node)], t.prototype, "node_mask", void 0), r([l(cc.Node)], t.prototype, "node_btn_close", void 0), r([c], t)
			}(a.default);
		o.default = p, cc._RF.pop()
	}, {
		"./BaseComponent": "BaseComponent"
	}],
	BaseProp: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "5c2d0eui01PiL96OqpyPSh7", "BaseProp");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.PropColor = void 0;
		var a = cc._decorator,
			s = a.ccclass;
		a.property,
			function(e) {
				e[e.YELLOW = 0] = "YELLOW", e[e.BLUE = 1] = "BLUE", e[e.RED = 2] = "RED", e[e.PURPLE = 3] = "PURPLE", e[e.GREEN = 4] = "GREEN", e[e.ORANGE = 5] = "ORANGE"
			}(o.PropColor || (o.PropColor = {}));
		var c = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.colors = ["#ffcc33", "#0090e0", "#e00000", "#8600df", "#00e01f", "#ff7c21"], t
			}
			return i(t, e), t.prototype.openApi = function() {}, t.prototype.closeApi = function() {}, t.prototype.checkPropStatus = function() {
				return !1
			}, r([s], t)
		}(cc.Component);
		o.default = c, cc._RF.pop()
	}, {}],
	BundleManager: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "d3ae51+sHpDbo0sbLGBpwIY", "BundleManager"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = e("../BundleNames"),
			i = function() {
				function e() {
					this._bundles = {}, this._bundles[n.default.Resources] = cc.resources
				}
				return Object.defineProperty(e, "instance", {
					get: function() {
						return e._instance || (e._instance = new e), e._instance
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.loadBundle = function(e, t, o, n) {
					var i = this;
					this._bundles[e] ? o && o(this._bundles[e]) : cc.assetManager.loadBundle(e, {
						onFileProgress: function(e) {
							var o = e.progress;
							t && t(o / 100)
						}
					}, function(t, r) {
						t ? n && n(t) : (i._bundles[e] = r, o && o())
					})
				}, e.prototype.getBundle = function(e) {
					return this._bundles[e]
				}, e._instance = null, e
			}();
		o.default = i, cc._RF.pop()
	}, {
		"../BundleNames": "BundleNames"
	}],
	BundleNames: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "8c886uJA3lIpaPgdFNXFeCY", "BundleNames"), Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.default = {
			Resources: "resources",
			Popup: "popup",
			Public: "public",
			Start: "start",
			Game: "game"
		}, cc._RF.pop()
	}, {}],
	ChooseLevelPopView: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "87163onFGNArKHnzUmpEW+j", "ChooseLevelPopView");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../../../framework/assetsModule/AssetsMap"),
			s = e("../../../framework/BundleNames"),
			c = e("../../../framework/GlobalParam"),
			l = e("../../../framework/LocalItemName"),
			p = e("../../../framework/utils/Util"),
			u = e("../../public/model/GameAudioContext"),
			d = e("../../public/model/LoginProxy"),
			f = cc._decorator,
			h = f.ccclass,
			y = f.property,
			g = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.pageItem = null, t.pageView = null, t.levelItem = null, t.preBtn = null, t.nextBtn = null, t.levelItemNodepool = new cc.NodePool, t.levelItemNode = [], t
				}
				return i(t, e), t.prototype.onResetView = function() {
					var t = this;
					e.prototype.onResetView.call(this), this.pageView.node.opacity = 0, this.levelItemNode = [];
					for (var o = null, n = 0; n < c.default.maxLevel; n++) {
						o || (o = cc.instantiate(this.pageItem), this.pageView.addPage(o), o.getComponent(cc.Layout).enabled = !0);
						var i = this.getLevelItem();
						i.active = !0, o.addChild(i), this.levelItemNode.push(i);
						var r = game.appFacade.retrieveProxy(d.default.NAME);
						this.renderLevelItem(n, i, r), (n + 1) % 10 == 0 && (o.getComponent(cc.Layout).updateLayout(), o.getComponent(cc.Layout).enabled = !1, o = null)
					}
					this.scheduleOnce(function() {
						t.pageView._unregisterEvent()
					}, .05), this.renderChooseBtn(), cc.tween(this.pageView.node).to(.8, {
						opacity: 255
					}).start()
				}, t.prototype.onRemoveToScene = function() {
					e.prototype.onRemoveToScene.call(this);
					for (var t = 0; t < this.levelItemNode.length; t++) this.levelItemNodepool.put(this.levelItemNode[t]);
					this.pageView.removeAllPages(), cc.Tween.stopAllByTarget(this.pageView.node)
				}, t.prototype.renderLevelItem = function(e, t, o) {
					var n = t.getChildByName("stars").children,
						i = t.getChildByName("lock"),
						r = t.getChildByName("unlock"),
						a = t.getChildByName("level");
					n.forEach(function(e) {
						return e.active = !1
					}), i.active = !1, r.active = !1;
					var s = o.getUserProperty(l.default.CURRENT_LEVEL);
					if (a.getComponent(cc.Label).string = "" + (e + 1), s < e + 1) r.active = !0;
					else {
						i.active = !0;
						for (var c = o.getUserProperty(l.default.LEVEL_RECORD)[e], p = 0; p < c; p++) n[p].active = !0
					}
				}, t.prototype.getLevelItem = function() {
					return this.levelItemNodepool.size() > 0 ? this.levelItemNodepool.get() : cc.instantiate(this.levelItem)
				}, t.prototype.addEvent = function() {
					var t = this;
					e.prototype.addEvent.call(this), this.levelItemNode.forEach(function(e) {
						e.on(game.EngineEventType.NodeEvent.click, t.clickItem, e)
					}), this.preBtn.on(game.EngineEventType.NodeEvent.click, this.clickPreBtn, this), this.nextBtn.on(game.EngineEventType.NodeEvent.click, this.clickNextBtn, this)
				}, t.prototype.removeEvent = function() {
					var t = this;
					e.prototype.removeEvent.call(this), this.levelItemNode.forEach(function(e) {
						e.off(game.EngineEventType.NodeEvent.click, t.clickItem, e)
					}), this.preBtn.off(game.EngineEventType.NodeEvent.click, this.clickPreBtn, this), this.nextBtn.off(game.EngineEventType.NodeEvent.click, this.clickNextBtn, this)
				}, t.prototype.clickItem = function(e) {
					u.default.click();
					var t = parseInt(e.node.getChildByName("level").getComponent(cc.Label).string),
						o = game.appFacade.retrieveProxy(d.default.NAME);
					o.getUserProperty(l.default.CURRENT_LEVEL) < t ? p.default.showToast("Cấp độ chưa được mở khóa!") : o.checkTili() && game.UIManager.instance.showLoadResView([s.default.Game], [s.default.Game], function() {
						game.UIManager.instance.replaceModuleView(s.default.Game, a.default.GameBundle.prefabs.assetsList.GamePreMoudleView, {
							level: t
						})
					})
				}, t.prototype.clickPreBtn = function() {
					var e = this.pageView.getCurrentPageIndex();
					this.pageView.scrollToPage(e - 1, .8), this.renderChooseBtn()
				}, t.prototype.clickNextBtn = function() {
					var e = this.pageView.getCurrentPageIndex();
					this.pageView.scrollToPage(e + 1, .8), this.renderChooseBtn()
				}, t.prototype.renderChooseBtn = function() {
					var e = this.pageView.getCurrentPageIndex();
					this.preBtn.active = e > 0;
					var t = this.pageView.getPages().length;
					this.nextBtn.active = e + 1 < t
				}, t.prototype.closeView = function(t) {
					void 0 === t && (t = !1), e.prototype.closeView.call(this, t)
				}, r([y(cc.Node)], t.prototype, "pageItem", void 0), r([y(cc.PageView)], t.prototype, "pageView", void 0), r([y(cc.Node)], t.prototype, "levelItem", void 0), r([y(cc.Node)], t.prototype, "preBtn", void 0), r([y(cc.Node)], t.prototype, "nextBtn", void 0), r([h], t)
			}(game.BasePopView);
		o.default = g, cc._RF.pop()
	}, {
		"../../../framework/BundleNames": "BundleNames",
		"../../../framework/GlobalParam": "GlobalParam",
		"../../../framework/LocalItemName": "LocalItemName",
		"../../../framework/assetsModule/AssetsMap": "AssetsMap",
		"../../../framework/utils/Util": "Util",
		"../../public/model/GameAudioContext": "GameAudioContext",
		"../../public/model/LoginProxy": "LoginProxy"
	}],
	DialogView: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "0bc0dItxKxL0Z6Rg2h02Pwf", "DialogView");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
			s = a.ccclass,
			c = a.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.node_content = null, t.lab_content = null, t.node_btn_confirm = null, t.node_btn_cancel = null, t.text = "", t.showCancel = !1, t
				}
				return i(t, e), t.prototype.start = function() {
					this.addEvent(), this.node_content.getComponent(cc.Animation).play("anim_dialog_show")
				}, t.prototype.addEvent = function() {
					this.node_btn_confirm.on(game.EngineEventType.NodeEvent.click, this.onClickConfirm, this), this.node_btn_cancel.on(game.EngineEventType.NodeEvent.click, this.onClickCancel, this)
				}, t.prototype.removeEvent = function() {
					this.node_btn_confirm.off(game.EngineEventType.NodeEvent.click, this.onClickConfirm, this), this.node_btn_cancel.off(game.EngineEventType.NodeEvent.click, this.onClickCancel, this)
				}, t.prototype.onClickConfirm = function() {
					this.closeDialog(), this.confirmCallback && this.confirmCallback()
				}, t.prototype.onClickCancel = function() {
					this.closeDialog(), this.cancelCallback && this.cancelCallback()
				}, t.prototype.closeDialog = function() {
					var e = this,
						t = this.node_content.getComponent(cc.Animation);
					t.play("anim_dialog_close"), t.once(game.EngineEventType.AnimationEvent.finished, function() {
						e.node.destroy()
					})
				}, t.prototype.onDestroy = function() {
					this.removeEvent()
				}, r([c(cc.Node)], t.prototype, "node_content", void 0), r([c(cc.Label)], t.prototype, "lab_content", void 0), r([c(cc.Node)], t.prototype, "node_btn_confirm", void 0), r([c(cc.Node)], t.prototype, "node_btn_cancel", void 0), r([s], t)
			}(cc.Component);
		o.default = l, cc._RF.pop()
	}, {}],
	Diamond: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "2f5d44qpvxM14Flnu9YHL0S", "Diamond");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.DiamondType = void 0;
		var a, s = e("../../public/model/GameAudioContext"),
			c = e("../../public/obj/GameEventManage"),
			l = cc._decorator,
			p = l.ccclass,
			u = l.property;
		(function(e) {
			e[e.RED = 0] = "RED", e[e.BLUE = 1] = "BLUE"
		})(a = o.DiamondType || (o.DiamondType = {}));
		var d = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.diamondType = a.RED, t.isContact = !1, t
			}
			return i(t, e), t.prototype.onCollisionEnter = function(e) {
				this.diamondType === a.RED && "IceFemale" === e.node.name || this.diamondType === a.BLUE && "FireMale" === e.node.name || this.isContact || (this.isContact = !0, s.default.gainDiamond(), game.appFacade.sendNotification(c.default.CONTACT_DIAMOND, {
					diamondNode: this.node,
					diamondType: this.diamondType
				}))
			}, r([u({
				type: cc.Enum(a)
			})], t.prototype, "diamondType", void 0), r([p], t)
		}(cc.Component);
		o.default = d, cc._RF.pop()
	}, {
		"../../public/model/GameAudioContext": "GameAudioContext",
		"../../public/obj/GameEventManage": "GameEventManage"
	}],
	Door: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "07445oTl8dCh7K3MeTAus3U", "Door");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.DoorType = void 0;
		var a, s = e("../../public/model/GameAudioContext"),
			c = e("../../public/obj/GameEventManage"),
			l = e("../model/PropManage"),
			p = e("./BaseProp"),
			u = cc._decorator,
			d = u.ccclass,
			f = u.property;
		(function(e) {
			e[e.RED = 0] = "RED", e[e.BLUE = 1] = "BLUE"
		})(a = o.DoorType || (o.DoorType = {}));
		var h = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.doorNode = null, t.doorType = a.RED, t.point1 = cc.v3(.8, 2), t.point2 = cc.v3(.8, 67), t.closeLock = !1, t.contactCount = 0, t
			}
			return i(t, e), t.prototype.onCollisionEnter = function(e) {
				var t = e.node.name;
				t !== l.PlayerNodeName.FirePlayer && t !== l.PlayerNodeName.IcePlayer || this.doorType === a.RED && e.node.name === l.PlayerNodeName.IcePlayer || this.doorType === a.BLUE && e.node.name === l.PlayerNodeName.FirePlayer || (0 === this.contactCount && game.appFacade.sendNotification(c.default.OPEN_THE_DOOR, {
					doorNode: this.node,
					type: this.doorType,
					status: !0
				}), this.contactCount++)
			}, t.prototype.onCollisionExit = function(e) {
				var t = e.node.name;
				t !== l.PlayerNodeName.FirePlayer && t !== l.PlayerNodeName.IcePlayer || this.doorType === a.RED && e.node.name === l.PlayerNodeName.IcePlayer || this.doorType === a.BLUE && e.node.name === l.PlayerNodeName.FirePlayer || (--this.contactCount, 0 === this.contactCount && (game.appFacade.sendNotification(c.default.OPEN_THE_DOOR, {
					doorNode: this.node,
					type: this.doorType,
					status: !1
				}), this.closeApi()))
			}, t.prototype.openApi = function() {
				cc.Tween.stopAllByTarget(this.doorNode), s.default.door(), cc.tween(this.doorNode).to(.4, {
					position: this.point2
				}).call(function() {
					game.appFacade.sendNotification(c.default.SUCCESS_RES)
				}).start()
			}, t.prototype.closeApi = function() {
				this.closeLock || (cc.Tween.stopAllByTarget(this.doorNode), s.default.door(), cc.tween(this.doorNode).to(.4, {
					position: this.point1
				}).start())
			}, r([f(cc.Node)], t.prototype, "doorNode", void 0), r([f({
				type: cc.Enum(a)
			})], t.prototype, "doorType", void 0), r([d], t)
		}(p.default);
		o.default = h, cc._RF.pop()
	}, {
		"../../public/model/GameAudioContext": "GameAudioContext",
		"../../public/obj/GameEventManage": "GameEventManage",
		"../model/PropManage": "PropManage",
		"./BaseProp": "BaseProp"
	}],
	EngineEventType: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "4aeadZTLthIJJe/bZl8y932", "EngineEventType"), Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.EngineEventType = void 0, o.EngineEventType = {
			NodeEvent: {
				click: "click",
				toggle: "toggle",
				page_turning: "page-turning"
			},
			AnimationEvent: {
				play: "play",
				stop: "stop",
				lastframe: "lastframe",
				finished: "finished",
				pause: "pause",
				resume: "resume"
			}
		}, cc._RF.pop()
	}, {}],
	Error: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "4754d6YjrhBD6e+WfeVx7q4", "Error"), Object.defineProperty(o, "__esModule", {
				value: !0
			}), o.LoadingAssetsErrorCode = void 0,
			function(e) {
				e[e.CheckHotUpdateError = 0] = "CheckHotUpdateError", e[e.HotUpdateError = 1] = "HotUpdateError", e[e.LoadingResourceError = 2] = "LoadingResourceError"
			}(o.LoadingAssetsErrorCode || (o.LoadingAssetsErrorCode = {})), cc._RF.pop()
	}, {}],
	Foot: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "406a2MhNeJDrZktIXK6hszT", "Foot");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../model/PropManage"),
			s = cc._decorator,
			c = s.ccclass,
			l = (s.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t._contactWallCount = 0, t.noSkips = [a.PropTypes.RedDiamond, a.PropTypes.BlueDiamond, a.PropTypes.RedDoor, a.PropTypes.BlueDoor, a.PropTypes.Water], t
				}
				var o;
				return i(t, e), o = t, t.prototype.update = function() {
					this.node.setPosition(cc.Vec3.ZERO)
				}, t.prototype.onBeginContact = function(e, t, n) {
					if (!(this.noSkips.indexOf(n.node.name) > -1)) {
						if (0 === this._contactWallCount) {
							var i = new cc.Event.EventCustom(o.ON_CONTACT_WALL, !0);
							i.setUserData(n), this.node.dispatchEvent(i)
						}
						this._contactWallCount++
					}
				}, t.prototype.onEndContact = function(e, t, n) {
					if (!(this.noSkips.indexOf(n.node.name) > -1) && (this._contactWallCount--, 0 === this._contactWallCount)) {
						var i = new cc.Event.EventCustom(o.ON_LEAVE_WALL, !0);
						i.setUserData(n), this.node.dispatchEvent(i)
					}
				}, t.ON_CONTACT_WALL = "ON_CONTACT_WALL", t.ON_LEAVE_WALL = "ON_LEAVE_WALL", o = r([c], t)
			}(cc.Component));
		o.default = l, cc._RF.pop()
	}, {
		"../model/PropManage": "PropManage"
	}],
	GainPopView: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "f249b3cAVFJBbb/YM0fmc0b", "GainPopView");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../../../framework/LocalItemName"),
			s = e("../../public/model/GameAudioContext"),
			c = e("../../public/model/LoginProxy"),
			l = e("../../public/utils/PlayerUtils"),
			p = cc._decorator,
			u = p.ccclass,
			d = p.property,
			f = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.playerNode = null, t.gianBtn = null, t
				}
				return i(t, e), t.prototype.onResetView = function() {
					e.prototype.onResetView.call(this), l.default.changeSkin(this.playerNode, this.param.playerId)
				}, t.prototype.addEvent = function() {
					e.prototype.addEvent.call(this), this.gianBtn.on(game.EngineEventType.NodeEvent.click, this.gianPlayer, this)
				}, t.prototype.removeEvent = function() {
					e.prototype.removeEvent.call(this), this.gianBtn.off(game.EngineEventType.NodeEvent.click, this.gianPlayer, this)
				}, t.prototype.gianPlayer = function() {
					s.default.click();
					var t = game.appFacade.retrieveProxy(c.default.NAME),
						o = t.getUserProperty(a.default.MY_PLAYER);
					o.push(this.param.playerId), t.setUserProperty(a.default.MY_PLAYER, o), e.prototype.closeView.call(this, !0)
				}, r([d(cc.Node)], t.prototype, "playerNode", void 0), r([d(cc.Node)], t.prototype, "gianBtn", void 0), r([u], t)
			}(game.BasePopView);
		o.default = f, cc._RF.pop()
	}, {
		"../../../framework/LocalItemName": "LocalItemName",
		"../../public/model/GameAudioContext": "GameAudioContext",
		"../../public/model/LoginProxy": "LoginProxy",
		"../../public/utils/PlayerUtils": "PlayerUtils"
	}],
	GameAudioContext: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "462c23YA51B+7qSAHcnY/Bp", "GameAudioContext"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = e("../../../framework/assetsModule/AssetsMap"),
			i = e("../../../framework/BundleNames"),
			r = function() {
				function e() {}
				return e.switchMusic = function(e) {
					this.isCloseMusic = e, e ? this.stopBgm() : this.playIndexBgm()
				}, e.playIndexBgm = function() {
					this.isCloseMusic || game.AudioManager.playBGM(game.BundleManager.instance.getBundle(i.default.Public).get(n.default.PublicBundle.sounds.assetsList.index_bgm, cc.AudioClip), !0)
				}, e.playGameBgm = function() {
					this.isCloseMusic || game.AudioManager.playBGM(game.BundleManager.instance.getBundle(i.default.Public).get(n.default.PublicBundle.sounds.assetsList.game_bgm, cc.AudioClip), !0)
				}, e.stopBgm = function() {
					game.AudioManager.stopBGM()
				}, e.iceJump = function() {
					this.isCloseMusic || game.AudioManager.playEffect(game.BundleManager.instance.getBundle(i.default.Public).get(n.default.PublicBundle.sounds.assetsList.skip_ice, cc.AudioClip), !1)
				}, e.fireJump = function() {
					this.isCloseMusic || game.AudioManager.playEffect(game.BundleManager.instance.getBundle(i.default.Public).get(n.default.PublicBundle.sounds.assetsList.skip_fire, cc.AudioClip), !1)
				}, e.change = function() {
					this.isCloseMusic || game.AudioManager.playEffect(game.BundleManager.instance.getBundle(i.default.Public).get(n.default.PublicBundle.sounds.assetsList.change, cc.AudioClip), !1)
				}, e.door = function() {
					this.isCloseMusic || game.AudioManager.playEffect(game.BundleManager.instance.getBundle(i.default.Public).get(n.default.PublicBundle.sounds.assetsList.door, cc.AudioClip), !1)
				}, e.spring = function() {
					this.isCloseMusic || game.AudioManager.playEffect(game.BundleManager.instance.getBundle(i.default.Public).get(n.default.PublicBundle.sounds.assetsList.spring, cc.AudioClip), !1)
				}, e.gainDiamond = function() {
					this.isCloseMusic || game.AudioManager.playEffect(game.BundleManager.instance.getBundle(i.default.Public).get(n.default.PublicBundle.sounds.assetsList.gain_diamond, cc.AudioClip), !1)
				}, e.stronMoveStart = function() {
					this.isCloseMusic || -1 !== this.stronMoveId || (this.stronMoveId = cc.audioEngine.playEffect(game.BundleManager.instance.getBundle(i.default.Public).get(n.default.PublicBundle.sounds.assetsList.stron_move, cc.AudioClip), !0))
				}, e.stronMoveStop = function() {
					this.isCloseMusic || -1 === this.stronMoveId || (cc.audioEngine.stop(this.stronMoveId), this.stronMoveId = -1)
				}, e.cheer = function() {
					this.isCloseMusic || game.AudioManager.playEffect(game.BundleManager.instance.getBundle(i.default.Public).get(n.default.PublicBundle.sounds.assetsList.cheer, cc.AudioClip), !1)
				}, e.die = function() {
					this.isCloseMusic || game.AudioManager.playEffect(game.BundleManager.instance.getBundle(i.default.Public).get(n.default.PublicBundle.sounds.assetsList.die, cc.AudioClip), !1)
				}, e.gold = function() {
					this.isCloseMusic || game.AudioManager.playEffect(game.BundleManager.instance.getBundle(i.default.Public).get(n.default.PublicBundle.sounds.assetsList.gold, cc.AudioClip), !1)
				}, e.success = function() {
					this.isCloseMusic || game.AudioManager.playEffect(game.BundleManager.instance.getBundle(i.default.Public).get(n.default.PublicBundle.sounds.assetsList.success, cc.AudioClip), !1)
				}, e.failure = function() {
					this.isCloseMusic || game.AudioManager.playEffect(game.BundleManager.instance.getBundle(i.default.Public).get(n.default.PublicBundle.sounds.assetsList.failure, cc.AudioClip), !1)
				}, e.click = function() {
					this.isCloseMusic || game.AudioManager.playEffect(game.BundleManager.instance.getBundle(i.default.Public).get(n.default.PublicBundle.sounds.assetsList.click, cc.AudioClip), !1)
				}, e.isCloseMusic = !1, e.stronMoveId = -1, e
			}();
		o.default = r, cc._RF.pop()
	}, {
		"../../../framework/BundleNames": "BundleNames",
		"../../../framework/assetsModule/AssetsMap": "AssetsMap"
	}],
	GameConfigVo: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "3982bca8l9PcpGYjVTVbzk0", "GameConfigVo"), Object.defineProperty(o, "__esModule", {
			value: !0
		}), cc._RF.pop()
	}, {}],
	GameConfigsVo: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "20909/W3y5KeYZn70X6BkBu", "GameConfigsVo"), Object.defineProperty(o, "__esModule", {
			value: !0
		}), cc._RF.pop()
	}, {}],
	GameEventManage: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "e8a13Xq9ONFvo30X3YMIgGl", "GameEventManage"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = function() {
			function e() {}
			return e.CONTACT_DIAMOND = "CONTACT_DIAMOND", e.DIE_PLAYER = "DIE_PLAYER", e.CONTACT_GOLD = "CONTACT_GOLD", e.OPEN_THE_DOOR = "OPEN_THE_DOOR", e.SUCCESS_RES = "SUCCESS_RES", e.FAILURE_RES = "FAILURE_RES", e.RELIFE = "RELIFE", e.CONTINUE_GAME = "CONTINUE_GAME", e.COIN_CHANGE = "COIN_CHANGE", e.CHANGE_SKINE = "CHANGE_SKINE", e.SHOWGUIDE = "SHOWGUIDE", e.ON_CONTINUE_GUIDE = "ON_CONTINUE_GUIDE", e.TRY_SKIN = "TRY_SKIN", e
		}();
		o.default = n, cc._RF.pop()
	}, {}],
	GameInitCommand: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "61b830WZKZMg6kGi9jKquZC", "GameInitCommand");
		var n, i = this && this.__extends || (n = function(e, t) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
				})(e, t)
		}, function(e, t) {
			function o() {
				this.constructor = e
			}
			n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
		});
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var r = e("../../../module/public/model/LoginProxy"),
			a = e("../../assetsModule/AssetsMap"),
			s = e("../../BundleNames"),
			c = e("../../uiModule/PopupManager"),
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t._init_load_bundles = [s.default.Public, s.default.Start], t._base_bundle_assets = [s.default.Resources, s.default.Public, s.default.Start], t
				}
				return i(t, e), t.prototype.execute = function() {
					var e = this;
					game.UIManager.instance.showLoadResView(this._init_load_bundles, this._base_bundle_assets, function() {
						c.default.instance.init(), e.onAssetsLoadSuccess()
					})
				}, t.prototype.onAssetsLoadSuccess = function() {
					game.appFacade.retrieveProxy(r.default.NAME).initUserInfo(), game.UIManager.instance.replaceModuleView(s.default.Start, a.default.StartBundle.prefabs.assetsList.MainModuleView)
				}, t
			}(puremvc.SimpleCommand);
		o.default = l, cc._RF.pop()
	}, {
		"../../../module/public/model/LoginProxy": "LoginProxy",
		"../../BundleNames": "BundleNames",
		"../../assetsModule/AssetsMap": "AssetsMap",
		"../../uiModule/PopupManager": "PopupManager"
	}],
	GameModuleViewMediator: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "5ea8b2ywflMDpv0qaQ1TCQd", "GameModuleViewMediator");
		var n, i = this && this.__extends || (n = function(e, t) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
				})(e, t)
		}, function(e, t) {
			function o() {
				this.constructor = e
			}
			n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
		});
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var r = e("../../../framework/assetsModule/AssetsMap"),
			a = e("../../../framework/BundleNames"),
			s = e("../../../framework/LocalItemName"),
			c = e("../../../framework/utils/Util"),
			l = e("../../public/guide/Guide_4"),
			p = e("../../public/model/GameAudioContext"),
			u = e("../../public/model/LoginProxy"),
			d = e("../../public/obj/GameEventManage"),
			f = e("../model/GameNodeManage"),
			h = e("../model/GameNodePool"),
			y = e("../model/PropManage"),
			g = e("../prop/BaseProp"),
			m = e("../prop/Diamond"),
			_ = e("../prop/Door"),
			v = e("../sub_views/Player"),
			P = function(e) {
				function t(o) {
					var n = e.call(this, t.NAME, o) || this;
					return n.gold = 0, n.deaths = 0, n.redDiamond = !1, n.blueDiamond = !1, n.redDoorNode = null, n.buleDoorNode = null, n.diePlayers = [], n.isWin = !1, n
				}
				return i(t, e), t.prototype.onRegister = function() {
					var t = this;
					e.prototype.onRegister.call(this), this.clearData(), this.view.leftBtn.on(cc.Node.EventType.TOUCH_START, this.clickLeftBtn, this), this.view.rightBtn.on(cc.Node.EventType.TOUCH_START, this.clickRightBtn, this), this.view.jumpBtn.on(cc.Node.EventType.TOUCH_START, this.clickJump, this), this.view.changeBtn.on(cc.Node.EventType.TOUCH_START, this.clickChange, this), setTimeout(function() {
						cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, t.onKeyDown, t), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, t.onKeyUp, t)
					}, 100), this.view.leftBtn.on(cc.Node.EventType.TOUCH_END, this.playerStop, this), this.view.rightBtn.on(cc.Node.EventType.TOUCH_END, this.playerStop, this), this.view.jumpBtn.on(cc.Node.EventType.TOUCH_END, this.playerStopJump, this), this.view.leftBtn.on(cc.Node.EventType.TOUCH_CANCEL, this.playerStop, this), this.view.rightBtn.on(cc.Node.EventType.TOUCH_CANCEL, this.playerStop, this), this.view.jumpBtn.on(cc.Node.EventType.TOUCH_CANCEL, this.playerStopJump, this), this.view.pauseBtn.on(game.EngineEventType.NodeEvent.click, this.clickPause, this), game.appFacade.retrieveProxy(u.default.NAME).getUserProperty(s.default.GUIDED) || this.guide()
				}, t.prototype.onRemove = function() {
					e.prototype.onRemove.call(this), this.view.leftBtn.off(cc.Node.EventType.TOUCH_START, this.clickLeftBtn, this), this.view.leftBtn.off(cc.Node.EventType.TOUCH_END, this.playerStop, this), this.view.rightBtn.off(cc.Node.EventType.TOUCH_START, this.clickRightBtn, this), this.view.rightBtn.off(cc.Node.EventType.TOUCH_END, this.playerStop, this), this.view.jumpBtn.off(cc.Node.EventType.TOUCH_START, this.clickJump, this), this.view.changeBtn.off(cc.Node.EventType.TOUCH_START, this.clickChange, this), this.view.leftBtn.off(cc.Node.EventType.TOUCH_CANCEL, this.playerStop, this), this.view.rightBtn.off(cc.Node.EventType.TOUCH_CANCEL, this.playerStop, this), this.view.pauseBtn.off(game.EngineEventType.NodeEvent.click, this.clickPause, this), this.view.jumpBtn.off(cc.Node.EventType.TOUCH_END, this.playerStopJump, this), this.view.jumpBtn.off(cc.Node.EventType.TOUCH_CANCEL, this.playerStopJump, this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this)
				}, t.prototype.clearData = function() {
					this.gold = 0, this.deaths = 0, this.redDiamond = !1, this.blueDiamond = !1, this.redDoorNode = null, this.buleDoorNode = null
				}, t.prototype.listNotificationInterests = function() {
					return [d.default.CONTACT_DIAMOND, d.default.DIE_PLAYER, d.default.CONTACT_GOLD, d.default.OPEN_THE_DOOR, d.default.SUCCESS_RES, d.default.FAILURE_RES, d.default.RELIFE, d.default.CONTINUE_GAME, d.default.SHOWGUIDE, d.default.TRY_SKIN]
				}, t.prototype.handleNotification = function(e) {
					switch (e.getName()) {
						case d.default.CONTACT_DIAMOND:
							this.contactDiamond(e);
							break;
						case d.default.DIE_PLAYER:
							this.diePlayer(e);
							break;
						case d.default.CONTACT_GOLD:
							this.contactGold(e);
							break;
						case d.default.OPEN_THE_DOOR:
							this.openTheDoor(e);
							break;
						case d.default.SUCCESS_RES:
							this.successRes(e);
							break;
						case d.default.RELIFE:
							this.relife();
							break;
						case d.default.FAILURE_RES:
							this.failureRes();
							break;
						case d.default.CONTINUE_GAME:
							this.continueGame();
							break;
						case d.default.SHOWGUIDE:
							this.nextGuide(e);
							break;
						case d.default.TRY_SKIN:
							this.tryPlayerSkin(e)
					}
				}, t.prototype.onKeyDown = function(e) {
					switch (e.keyCode) {
						case cc.macro.KEY.left:
							this.clickLeftBtn();
							break;
						case cc.macro.KEY.right:
							this.clickRightBtn();
							break;
						case cc.macro.KEY.up:
							this.clickJump();
							break;
						case cc.macro.KEY.tab:
							this.clickChange();
							break;
						case cc.macro.KEY.q:
							this.view.clickZoom()
					}
				}, t.prototype.onKeyUp = function(e) {
					switch (e.keyCode) {
						case cc.macro.KEY.left:
						case cc.macro.KEY.right:
							this.playerStop();
							break;
						case cc.macro.KEY.up:
							this.playerStopJump();
							break;
						case cc.macro.KEY.q:
							this.view.unClickZoom()
					}
				}, t.prototype.guide = function() {
					var e = game.UIManager.instance.createNodeByPreloading(a.default.Public, r.default.PublicBundle.prefabs.assetsList.Guide_1);
					this.view.node.addChild(e)
				}, t.prototype.nextGuide = function(e) {
					if (e.getBody().index <= 5) {
						var t = game.UIManager.instance.createNodeByPreloading(a.default.Public, r.default.PublicBundle.prefabs.assetsList["Guide_" + e.getBody().index]);
						this.view.node.addChild(t)
					} else game.appFacade.retrieveProxy(u.default.NAME).setUserProperty(s.default.GUIDED, !0)
				}, t.prototype.tryPlayerSkin = function(e) {
					var t = e.getBody().id;
					f.default.instance.firePlayer.getComponent(v.default).changeSkinApi(t), f.default.instance.icePlayer.getComponent(v.default).changeSkinApi(t), this.view.playerId = t
				}, t.prototype.diePlayer = function(e) {
                    this.deaths += 1;
					this.view.stopCountTime(), p.default.die();
					var t = e.getBody().playerNode,
						o = h.default.instance.getDieEffect();
					t.parent.addChild(o), o.position = t.position.clone();
					var n = o.getComponent(dragonBones.ArmatureDisplay);
					t.name === y.PlayerNodeName.IcePlayer ? n.playAnimation("bingren", 1) : n.playAnimation("huoren", 1), n.once(dragonBones.EventObject.COMPLETE, function() {
						h.default.instance.putDieEffect(o), game.PopupManager.instance.showPopView(r.default.PopupMap.ReLifePopView, null, !0, !0)
					}), this.diePlayers.push(t), t.active = !1
				}, t.prototype.contactDiamond = function(e) {
					var t = e.getBody();
					t.diamondType === m.DiamondType.RED ? this.redDiamond = !0 : this.blueDiamond = !0;
					var o = t.diamondType === m.DiamondType.RED ? this.view.redDiamond : this.view.blueDiamond,
						n = cc.instantiate(o);
					n.color = cc.Color.WHITE, n.opacity = 255;
					var i = t.diamondNode.convertToWorldSpaceAR(cc.Vec3.ZERO);
					i = this.view.mainCamera.getWorldToScreenPoint(i), n.scale = t.diamondNode.scale, o.parent.addChild(n);
					var r = n.parent.convertToNodeSpaceAR(i);
					n.position = r, t.diamondNode.destroy();
					var a = c.default.toDecimal(i.sub(n.position).mag() / 1800);
					cc.tween(n).parallel(cc.tween().to(a, {
						position: o.position.clone()
					}), cc.tween().to(a, {
						scale: 1
					})).call(function() {
						o.color = cc.Color.WHITE, o.opacity = 255, n.destroy()
					}).start()
				}, t.prototype.contactGold = function(e) {
					var t = this,
						o = e.getBody().goldNode,
						n = o.convertToWorldSpaceAR(cc.Vec3.ZERO);
					n = this.view.mainCamera.getWorldToScreenPoint(n);
					var i = h.default.instance.getGold();
					this.view.goldLabel.node.parent.addChild(i);
					var r = this.view.goldLabel.node.parent.convertToNodeSpaceAR(n);
					i.position = r, o.destroy();
                    // Count picked coins immediately, even if the level ends during the flight tween.
                    this.gold += 10;
					var a = c.default.toDecimal(r.sub(this.view.goldLabel.node.position).mag() / 1800);
					cc.tween(i).to(a, {
						position: this.view.goldLabel.node.position
					}).call(function() {
						h.default.instance.putGold(i), t.view.goldLabel.string = t.gold.toString()
					}).start()
				}, t.prototype.openTheDoor = function(e) {
					var t = e.getBody();
					t.status ? (t.type === _.DoorType.RED && this.redDiamond || t.type === _.DoorType.BLUE && this.blueDiamond) && (t.doorNode.getComponent(g.default).openApi(), t.type === _.DoorType.RED ? (this.redDoorNode = t.doorNode, f.default.instance.getPlayer(v.PlayerType.FIRE).getComponent(v.default).startWaveApi()) : (this.buleDoorNode = t.doorNode, f.default.instance.getPlayer(v.PlayerType.ICE).getComponent(v.default).startWaveApi())) : t.type === _.DoorType.RED ? (this.redDoorNode = null, f.default.instance.getPlayer(v.PlayerType.FIRE).getComponent(v.default).soptWaveApi()) : (this.buleDoorNode = null, f.default.instance.getPlayer(v.PlayerType.ICE).getComponent(v.default).soptWaveApi())
				}, t.prototype.successRes = function() {
					var e = this;
					this.redDiamond && this.blueDiamond && this.redDoorNode && this.buleDoorNode && (this.view.stopCountTime(), this.view.playerPoint.active = !1, f.default.instance.getPlayer().getComponent(v.default).stopApi(), f.default.instance.getPlayer(v.PlayerType.FIRE).getComponent(v.default).winApi(this.redDoorNode), f.default.instance.getPlayer(v.PlayerType.ICE).getComponent(v.default).winApi(this.buleDoorNode, function() {
						e.isWin || (e.isWin = !0, e.popSettle(!0))
					}))
				}, t.prototype.failureRes = function() {
					this.popSettle(!1)
				}, t.prototype.popSettle = function(e) {
					var t = {
						isSuccess: e,
						time: this.view.useTime,
						gold: this.gold,
                        deaths: this.deaths,
                        redDiamond: this.redDiamond,
                        blueDiamond: this.blueDiamond,
						currentLevel: this.view.param.level,
						playerId: this.view.playerId,
						isLoad: !1
					};
					game.PopupManager.instance.showPopView(r.default.PopupMap.SettlePopView, t, !0, !0)
				}, t.prototype.clickLeftBtn = function() {
					f.default.instance.getPlayer().getComponent(v.default).runApi(v.PlayerDir.LEFT)
				}, t.prototype.clickRightBtn = function() {
					f.default.instance.getPlayer().getComponent(v.default).runApi(v.PlayerDir.RIGHT)
				}, t.prototype.playerStop = function() {
					f.default.instance.getPlayer().getComponent(v.default).stopApi()
				}, t.prototype.playerStopJump = function() {
					f.default.instance.getPlayer().getComponent(v.default).stopJumpApi()
				}, t.prototype.clickJump = function() {
					f.default.instance.getPlayer().getComponent(v.default).jumpApi()
				}, t.prototype.clickPause = function() {
					p.default.click(), this.view.stopCountTime();
					var e = {
						currentLevel: this.view.param.level,
						playerId: this.view.playerId,
						isLoad: !1
					};
					game.PopupManager.instance.showPopView(r.default.PopupMap.PausePopView, e, !0, !0)
				}, t.prototype.clickChange = function() {
					p.default.click(), this.playerStop(), this.playerStopJump(), game.appFacade.sendNotification(l.default.OK);
					var e = f.default.instance.getPlayer(),
						t = h.default.instance.getChangeEffect();
					e.parent.addChild(t), t.position = e.position.clone(), p.default.change();
					var o = t.getComponent(dragonBones.ArmatureDisplay);
					o.playAnimation("newAnimation", 1), o.once(dragonBones.EventObject.COMPLETE, function() {
						h.default.instance.putChangeEffect(t)
					});
					var n = f.default.instance.changePlayer(),
						i = n === v.PlayerType.ICE ? (new cc.Color).fromHEX("#2af2ff") : (new cc.Color).fromHEX("#fc6d5d");
					this.view.leftBtn.color = i, this.view.rightBtn.color = i, this.view.jumpBtn.color = i, this.view.changeBtn.color = i, this.view.zoomBtn.color = i;
					var s = n === v.PlayerType.ICE ? r.default.GameBundle.textures.assetsList.change_0 : r.default.GameBundle.textures.assetsList.change_1;
					this.view.changeBtn.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = c.default.getSpriteFrame(a.default.Game, s);
					var u = this.view.playerPoint.getChildByName("content").getChildByName("ice"),
						d = this.view.playerPoint.getChildByName("content").getChildByName("fire");
					u.active = n === v.PlayerType.ICE, d.active = n === v.PlayerType.FIRE
				}, t.prototype.continueGame = function() {
					this.view.starCountTime()
				}, t.prototype.relife = function() {
					for (; this.diePlayers.length > 0;) {
						var e = this.diePlayers.shift();
						e.name === y.PlayerNodeName.IcePlayer ? e.position = this.view.icePlayerInitPos : e.position = this.view.firePlayerInitPos, e.active = !0
					}
					this.view.starCountTime()
				}, Object.defineProperty(t.prototype, "view", {
					get: function() {
						return this.viewComponent
					},
					enumerable: !1,
					configurable: !0
				}), t.NAME = "GameModuleMediator", t
			}(puremvc.Mediator);
		o.default = P, cc._RF.pop()
	}, {
		"../../../framework/BundleNames": "BundleNames",
		"../../../framework/LocalItemName": "LocalItemName",
		"../../../framework/assetsModule/AssetsMap": "AssetsMap",
		"../../../framework/utils/Util": "Util",
		"../../public/guide/Guide_4": "Guide_4",
		"../../public/model/GameAudioContext": "GameAudioContext",
		"../../public/model/LoginProxy": "LoginProxy",
		"../../public/obj/GameEventManage": "GameEventManage",
		"../model/GameNodeManage": "GameNodeManage",
		"../model/GameNodePool": "GameNodePool",
		"../model/PropManage": "PropManage",
		"../prop/BaseProp": "BaseProp",
		"../prop/Diamond": "Diamond",
		"../prop/Door": "Door",
		"../sub_views/Player": "Player"
	}],
	GameModuleView: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "643b35ZVd5NyZntgJzYKS4x", "GameModuleView");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../../../framework/assetsModule/AssetsMap"),
			s = e("../../../framework/BundleNames"),
			c = e("../../../framework/GlobalParam"),
			l = e("../../../framework/LocalItemName"),
			p = e("../../../framework/utils/Util"),
			u = e("../../public/guide/Guide_5"),
			d = e("../../public/model/GameAudioContext"),
			f = e("../../public/model/LoginProxy"),
			h = e("../mediators/GameModuleViewMediator"),
			y = e("../model/GameNodeManage"),
			g = e("../sub_views/Player"),
			m = cc._decorator,
			_ = m.ccclass,
			v = m.property,
			P = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.mapLayer = null, t.leftBtn = null, t.rightBtn = null, t.jumpBtn = null, t.changeBtn = null, t.zoomBtn = null, t.pauseBtn = null, t.countTimeLabel = null, t.levelNode = null, t.redDiamond = null, t.blueDiamond = null, t.goldLabel = null, t.mapNode = null, t.mainCamera = null, t.zoomRatio = 1.3, t.touchStartPosition = cc.Vec2.ZERO, t.touchStartCameraPosition = cc.Vec2.ZERO, t.isOpen = !0, t.isOpenEnd = !1, t.isTouch = !1, t.playerPoint = null, t.useTime = 0, t.playerId = 1, t.icePlayerInitPos = null, t.firePlayerInitPos = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					this.isCache = !1, cc.director.getPhysicsManager().enabled = !0, cc.director.getCollisionManager().enabled = !0
				}, t.prototype.registerMediator = function() {
					e.prototype.registerMediator.call(this), game.appFacade.registerMediator(new h.default(this))
				}, t.prototype.removeMediator = function() {
					e.prototype.removeMediator.call(this), game.appFacade.removeMediator(h.default.NAME)
				}, t.prototype.onAddToScene = function() {
					e.prototype.onAddToScene.call(this), d.default.playGameBgm()
				}, t.prototype.onRemoveToScene = function() {
					e.prototype.onRemoveToScene.call(this), d.default.stopBgm()
				}, t.prototype.addEvent = function() {
					e.prototype.addEvent.call(this), this.zoomBtn.on(cc.Node.EventType.TOUCH_START, this.clickZoom, this), this.zoomBtn.on(cc.Node.EventType.TOUCH_END, this.unClickZoom, this), this.zoomBtn.on(cc.Node.EventType.TOUCH_CANCEL, this.unClickZoom, this)
				}, t.prototype.removeEvent = function() {
					e.prototype.removeEvent.call(this), this.zoomBtn.off(cc.Node.EventType.TOUCH_START, this.clickZoom, this), this.zoomBtn.off(cc.Node.EventType.TOUCH_END, this.unClickZoom, this), this.zoomBtn.off(cc.Node.EventType.TOUCH_CANCEL, this.unClickZoom, this)
				}, t.prototype.onResetView = function() {
					var t = this;
					e.prototype.onResetView.call(this), window.ArcadeH5 && window.ArcadeH5.showMenu(false), this.onInitData();
					var o = game.UIManager.instance.createNodeByPreloading(s.default.Game, c.default.dynamicLoadLevels[this.param.level - 1]);
					this.mapNode = o, this.scheduleOnce(function() {
						t.addWall(), t.mapLayer.addChild(o), t.getPlayerInfo(), t.showOpenCamera()
					}), this.showLevel()
				}, t.prototype.showLevel = function() {
					var e = this;
					this.levelNode.getComponent(cc.Label).string = "Level " + this.param.level /* + "\u5173" */, this.scheduleOnce(function() {
						var t = e.levelNode.position.clone();
						t.y += 200, cc.tween(e.levelNode).parallel(cc.tween().to(.8, {
							position: t
						}), cc.tween().to(.8, {
							opacity: 0
						})).start()
					}, 1)
				}, t.prototype.getPlayerInfo = function() {
					var e = this,
						t = this.mapNode.getChildByName("players");
					y.default.instance.firePlayer = t.getChildByName("FireMale"), y.default.instance.icePlayer = t.getChildByName("IceFemale"), y.default.instance.currentPlayerType = g.PlayerType.FIRE, this.icePlayerInitPos = y.default.instance.icePlayer.position, this.firePlayerInitPos = y.default.instance.firePlayer.position, this.playerPoint = game.UIManager.instance.createNodeByPreloading(s.default.Game, a.default.GameBundle.prefabs.assetsList.PlayerPoint), this.mapNode.addChild(this.playerPoint), this.scheduleOnce(function() {
						var t = game.appFacade.retrieveProxy(f.default.NAME);
						e.playerId = t.getUserProperty(l.default.GOOUT_ID), y.default.instance.firePlayer.getComponent(g.default).changeSkinApi(e.playerId), y.default.instance.icePlayer.getComponent(g.default).changeSkinApi(e.playerId)
					}), this.param.level % 4 == 0 && (game.appFacade.retrieveProxy(f.default.NAME).getUnLockSkin().length <= 0 || game.PopupManager.instance.showPopView(a.default.PopupMap.TryPlayerDefaultPopView, null, !0, !0))
				}, t.prototype.onInitData = function() {
					this.mainCamera = cc.director.getScene().getChildByName("Canvas").getChildByName("MainCamera").getComponent(cc.Camera), cc.Tween.stopAllByTarget(this.mainCamera), this.mainCamera.zoomRatio = 1, this.mainCamera.node.position = cc.Vec3.ZERO, this.touchStartPosition = cc.Vec2.ZERO, this.touchStartCameraPosition = cc.Vec2.ZERO, this.isOpen = !0, this.isTouch = !1
				}, t.prototype.showOpenCamera = function() {
					var e = this,
						t = this.mapNode.getChildByName("map").getContentSize(),
						o = cc.winSize.height / t.height;
					o = Math.min(o, cc.winSize.width / t.width), this.mainCamera.zoomRatio = o, this.scheduleOnce(function() {
						e.isOpen = !1, e.schedule(e.countTime, 1), cc.tween(e.mainCamera).to(1, {
							zoomRatio: e.zoomRatio
						}).call(function() {
							e.isOpenEnd = !0
						}).start()
					}, 1)
				}, t.prototype.cameraBorderSetRight = function(e) {
					var t = e.clone(),
						o = this.mapNode.getChildByName("map").getContentSize(),
						n = this.mapNode.convertToWorldSpaceAR(cc.Vec3.ZERO),
						i = cc.winSize.width / this.zoomRatio / 2,
						r = o.width / 2;
					return i > r ? (t.x = this.mainCamera.node.convertToWorldSpaceAR(cc.Vec3.ZERO).clone().x, t) : (t.x - i < n.x - r ? t.x = n.x - r + i : t.x + i > n.x + r && (t.x = n.x + r - i), t)
				}, t.prototype.moveCamera = function() {
					if (!this.isOpen && !this.isTouch) {
						var e = this.mainCamera.node.convertToWorldSpaceAR(cc.Vec3.ZERO).clone(),
							t = y.default.instance.getPlayer().convertToWorldSpaceAR(cc.Vec3.ZERO).clone(),
							o = this.cameraBorderSetRight(t),
							n = e.x - t.x,
							i = e.y - t.y,
							r = e.x - o.x,
							a = e.y - o.y,
							s = e;
						if (Math.abs(n) > 50) {
							var c = this.caculateMoveStep(r);
							s = cc.v3(s.x - c, s.y)
						}
						Math.abs(i) > 50 && (c = this.caculateMoveStep(a), s = cc.v3(s.x, s.y - c));
						var l = this.mainCamera.node.parent.convertToNodeSpaceAR(this.cameraBorderSetRight(s));
						this.mainCamera.node.position = l
					}
				}, t.prototype.caculateMoveStep = function(e) {
					if (0 === e) return .01;
					var t = e / Math.abs(e);
					return .5 * t + Math.pow(Math.abs(e) / 50, 2) * t * .4
				}, t.prototype.clickZoom = function() {
					if (d.default.click(), this.isOpenEnd) {
						this.isTouch = !0, game.appFacade.sendNotification(u.default.OK), cc.Tween.stopAllByTarget(this.mainCamera);
						var e = this.mapNode.getChildByName("map").getContentSize(),
							t = cc.winSize.height / e.height;
						t = Math.min(t, cc.winSize.width / e.width), cc.tween(this.mainCamera).to(.5, {
							zoomRatio: t
						}).start(), cc.tween(this.mainCamera.node).to(.5, {
							position: cc.Vec3.ZERO
						}).start()
					}
				}, t.prototype.unClickZoom = function() {
					this.isOpenEnd && (cc.Tween.stopAllByTarget(this.mainCamera), cc.Tween.stopAllByTarget(this.mainCamera.node), cc.tween(this.mainCamera).to(1, {
						zoomRatio: this.zoomRatio
					}).start(), this.isTouch = !1)
				}, t.prototype.playerPointMove = function() {
					var e = y.default.instance.getPlayer();
					if (cc.isValid(e)) {
						var t = e.convertToWorldSpaceAR(cc.Vec3.ZERO).clone();
						t.y += 135, this.playerPoint.position = this.playerPoint.parent.convertToNodeSpaceAR(t)
					}
				}, t.prototype.countTime = function() {
					this.useTime++;
					var e = Math.floor(this.useTime / 60),
						t = this.useTime % 60,
						o = e < 10 ? "0" + e : e.toString(),
						n = t < 10 ? "0" + t : t.toString();
					this.countTimeLabel.string = o + ":" + n
				}, t.prototype.starCountTime = function() {
					this.unschedule(this.countTime), this.schedule(this.countTime, 1)
				}, t.prototype.stopCountTime = function() {
					this.unschedule(this.countTime)
				}, t.prototype.update = function() {
					this.moveCamera(), this.playerPointMove()
				}, t.prototype.addWall = function() {
					for (var e = p.default.getJson(s.default.Game, c.default.dynamicConfigs[this.param.level - 1]).json, t = this.mapNode.getChildByName("map"), o = e.wallData, n = 0, i = 0, r = 0; r < o.length; r++) {
						for (var a = t.addComponent(cc.PhysicsPolygonCollider), l = o[r].polygon, u = [], d = 0; d < l.length; d++) u.push(cc.v2(l[d].x, l[d].y));
						a.points = u, 0 === r ? (n = -o[r].x, i = -o[r].y) : a.offset = cc.v2(o[r].x + n, o[r].y + i)
					}
				}, r([v(cc.Node)], t.prototype, "mapLayer", void 0), r([v(cc.Node)], t.prototype, "leftBtn", void 0), r([v(cc.Node)], t.prototype, "rightBtn", void 0), r([v(cc.Node)], t.prototype, "jumpBtn", void 0), r([v(cc.Node)], t.prototype, "changeBtn", void 0), r([v(cc.Node)], t.prototype, "zoomBtn", void 0), r([v(cc.Node)], t.prototype, "pauseBtn", void 0), r([v(cc.Label)], t.prototype, "countTimeLabel", void 0), r([v(cc.Node)], t.prototype, "levelNode", void 0), r([v(cc.Node)], t.prototype, "redDiamond", void 0), r([v(cc.Node)], t.prototype, "blueDiamond", void 0), r([v(cc.Label)], t.prototype, "goldLabel", void 0), r([_], t)
			}(game.BaseModuleView);
		o.default = P, cc._RF.pop()
	}, {
		"../../../framework/BundleNames": "BundleNames",
		"../../../framework/GlobalParam": "GlobalParam",
		"../../../framework/LocalItemName": "LocalItemName",
		"../../../framework/assetsModule/AssetsMap": "AssetsMap",
		"../../../framework/utils/Util": "Util",
		"../../public/guide/Guide_5": "Guide_5",
		"../../public/model/GameAudioContext": "GameAudioContext",
		"../../public/model/LoginProxy": "LoginProxy",
		"../mediators/GameModuleViewMediator": "GameModuleViewMediator",
		"../model/GameNodeManage": "GameNodeManage",
		"../sub_views/Player": "Player"
	}],
	GameNodeManage: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "7d233qmKLxFir0lRmzmhxWv", "GameNodeManage"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = e("../sub_views/Player"),
			i = function() {
				function e() {
					this.firePlayer = null, this.icePlayer = null, this.currentPlayerType = null
				}
				return Object.defineProperty(e, "instance", {
					get: function() {
						return this._instance
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.getPlayer = function(e) {
					return void 0 === e && (e = null), null === e && (e = this.currentPlayerType), n.PlayerType.ICE === e ? this.icePlayer : this.firePlayer
				}, e.prototype.changePlayer = function() {
					return this.currentPlayerType === n.PlayerType.ICE ? (this.currentPlayerType = n.PlayerType.FIRE, this.currentPlayerType) : (this.currentPlayerType = n.PlayerType.ICE, this.currentPlayerType)
				}, e._instance = new e, e
			}();
		o.default = i, cc._RF.pop()
	}, {
		"../sub_views/Player": "Player"
	}],
	GameNodePool: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "2936bk846ZHq6veel7r+3Cv", "GameNodePool"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = e("../../../framework/assetsModule/AssetsMap"),
			i = e("../../../framework/BundleNames"),
			r = function() {
				function e() {
					this.goldNodePool = new cc.NodePool, this.changeEffectNodePool = new cc.NodePool, this.runEffectNodePool = new cc.NodePool, this.floorEffect = new cc.NodePool, this.dieEffect = new cc.NodePool
				}
				return Object.defineProperty(e, "instance", {
					get: function() {
						return this._instance
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.getGold = function() {
					return this.goldNodePool.size() > 0 ? this.goldNodePool.get() : game.UIManager.instance.createNodeByPreloading(i.default.Game, n.default.GameBundle.prefabs.assetsList.Gold)
				}, e.prototype.putGold = function(e) {
					cc.Tween.stopAllByTarget(e), this.goldNodePool.put(e)
				}, e.prototype.getChangeEffect = function() {
					return this.changeEffectNodePool.size() > 0 ? this.changeEffectNodePool.get() : game.UIManager.instance.createNodeByPreloading(i.default.Game, n.default.GameBundle.prefabs.assetsList.ChangeEffect)
				}, e.prototype.putChangeEffect = function(e) {
					this.changeEffectNodePool.put(e)
				}, e.prototype.getRunEffect = function() {
					return this.runEffectNodePool.size() > 0 ? this.runEffectNodePool.get() : game.UIManager.instance.createNodeByPreloading(i.default.Game, n.default.GameBundle.prefabs.assetsList.RunEffect)
				}, e.prototype.putRunEffect = function(e) {
					this.runEffectNodePool.put(e)
				}, e.prototype.getFloorEffect = function() {
					return this.floorEffect.size() > 0 ? this.floorEffect.get() : game.UIManager.instance.createNodeByPreloading(i.default.Game, n.default.GameBundle.prefabs.assetsList.FloorEffect)
				}, e.prototype.putFloorEffect = function(e) {
					this.floorEffect.put(e)
				}, e.prototype.getDieEffect = function() {
					return this.dieEffect.size() > 0 ? this.dieEffect.get() : game.UIManager.instance.createNodeByPreloading(i.default.Game, n.default.GameBundle.prefabs.assetsList.DieEffect)
				}, e.prototype.putDieEffect = function(e) {
					this.dieEffect.put(e)
				}, e._instance = new e, e
			}();
		o.default = r, cc._RF.pop()
	}, {
		"../../../framework/BundleNames": "BundleNames",
		"../../../framework/assetsModule/AssetsMap": "AssetsMap"
	}],
	GamePreModuleViewMediator: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "7a012MsfUtK1JkMe3fyed8x", "GamePreModuleViewMediator");
		var n, i = this && this.__extends || (n = function(e, t) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
				})(e, t)
		}, function(e, t) {
			function o() {
				this.constructor = e
			}
			n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
		});
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var r = e("../../../framework/assetsModule/AssetsManager"),
			a = e("../../../framework/assetsModule/AssetsMap"),
			s = e("../../../framework/assetsModule/BundleManager"),
			c = e("../../../framework/BundleNames"),
			l = e("../../../framework/GlobalParam"),
			p = e("../../../framework/LocalItemName"),
			u = e("../../public/model/LoginProxy"),
			d = function(e) {
				function t(o) {
					var n = e.call(this, t.NAME, o) || this;
					return n._loading_fictitious_prog = 0, n._loading_fictitious_prog_speed = .03, n._loading_actual_prog = 0, n.is_loading_success = !1, n.is_loding_configured = !1, n._timer = -1, n
				}
				return i(t, e), t.prototype.onRegister = function() {
					e.prototype.onRegister.call(this), this.startLoadRes()
				}, t.prototype.onRemove = function() {
					e.prototype.onRemove.call(this)
				}, t.prototype.resetParam = function() {
					this._loading_fictitious_prog = 0, this._loading_actual_prog = 0, this.is_loading_success = !1, this.is_loding_configured = !1
				}, t.prototype.startLoadRes = function() {
					var e = this;
					this.resetParam(), this.clearTimer();
					var t = this.view.param;
					if (!t || !t.level) {
						var o = game.appFacade.retrieveProxy(u.default.NAME);
						(t = {}).level = o.getUserProperty(p.default.CURRENT_LEVEL)
					}
					r.default.instance.loadResArray(s.default.instance.getBundle(c.default.Game), [l.default.dynamicLoadLevels[t.level - 1]], cc.Prefab, !1, this.loadResProgressCallback.bind(this)).then(function() {
						e.is_loading_success = !0
					}), r.default.instance.loadResArray(s.default.instance.getBundle(c.default.Game), [l.default.dynamicConfigs[t.level - 1]], cc.JsonAsset, !1, null).then(function() {
						e.is_loding_configured = !0
					}), this._timer = setInterval(this.checkLoadingProgress.bind(this), 10)
				}, t.prototype.clearTimer = function() {
					this._timer && (clearInterval(this._timer), this._timer = -1)
				}, t.prototype.loadResProgressCallback = function(e, t) {
					this._loading_actual_prog = e / t
				}, t.prototype.checkLoadingProgress = function() {
					var e = this._loading_fictitious_prog;
					e + this._loading_fictitious_prog_speed <= this._loading_actual_prog ? e += this._loading_fictitious_prog_speed : 1 - this._loading_actual_prog <= this._loading_fictitious_prog_speed && (e = 1), e != this._loading_fictitious_prog && (this._loading_fictitious_prog = e, this.view.progressBar.progress = this._loading_fictitious_prog), this._loading_fictitious_prog >= 1 && this.is_loading_success && this.is_loding_configured && this.onLoadingResourceSuccess()
				}, t.prototype.onLoadingResourceSuccess = function() {
					this.clearTimer();
					var e = this.view.param;
					if (!e || !e.level) {
						var t = game.appFacade.retrieveProxy(u.default.NAME);
						(e = {}).level = t.getUserProperty(p.default.CURRENT_LEVEL)
					}
					var o = {
						level: e.level
					};
					game.UIManager.instance.replaceModuleView(c.default.Game, a.default.GameBundle.prefabs.assetsList.GameModuleView, o)
				}, Object.defineProperty(t.prototype, "view", {
					get: function() {
						return this.viewComponent
					},
					enumerable: !1,
					configurable: !0
				}), t.NAME = "GamePrepModuleViewMediator", t
			}(puremvc.Mediator);
		o.default = d, cc._RF.pop()
	}, {
		"../../../framework/BundleNames": "BundleNames",
		"../../../framework/GlobalParam": "GlobalParam",
		"../../../framework/LocalItemName": "LocalItemName",
		"../../../framework/assetsModule/AssetsManager": "AssetsManager",
		"../../../framework/assetsModule/AssetsMap": "AssetsMap",
		"../../../framework/assetsModule/BundleManager": "BundleManager",
		"../../public/model/LoginProxy": "LoginProxy"
	}],
	GamePreModuleView: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "26f446Pa+ZKqJ0M4HA5j24t", "GamePreModuleView");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../mediators/GamePreModuleViewMediator"),
			s = cc._decorator,
			c = s.ccclass,
			l = s.property,
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.lab_tips = null, t.progressBar = null, t.touTiaoTitle = null, t.otherTitle = null, t
				}
				return i(t, e), t.prototype.start = function() {
					e.prototype.start.call(this), this.touTiaoTitle.active = !1, this.otherTitle.active = !0
				}, t.prototype.registerMediator = function() {
					e.prototype.registerMediator.call(this), game.appFacade.registerMediator(new a.default(this))
				}, t.prototype.removeMediator = function() {
					e.prototype.removeMediator.call(this), game.appFacade.removeMediator(a.default.NAME)
				}, r([l(cc.Label)], t.prototype, "lab_tips", void 0), r([l(cc.ProgressBar)], t.prototype, "progressBar", void 0), r([l(cc.Node)], t.prototype, "touTiaoTitle", void 0), r([l(cc.Node)], t.prototype, "otherTitle", void 0), r([c], t)
			}(game.BaseModuleView);
		o.default = p, cc._RF.pop()
	}, {
		"../mediators/GamePreModuleViewMediator": "GamePreModuleViewMediator"
	}],
	GameSceneMediator: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "36bb9MbhGVMDIYwNBwnXmUr", "GameSceneMediator");
		var n, i = this && this.__extends || (n = function(e, t) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
				})(e, t)
		}, function(e, t) {
			function o() {
				this.constructor = e
			}
			n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
		});
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var r = function(e) {
			function t(o) {
				return e.call(this, t.NAME, o) || this
			}
			return i(t, e), t.prototype.replaceModuleView = function(e, t, o) {
				this.gameSceneComp.replaceModuleView(e, t, o)
			}, t.prototype.pushPopupView = function(e, t, o, n) {
				this.gameSceneComp.pushPopupView(e, t, o, n)
			}, t.prototype.pushCustomerPopupView = function(e, t, o, n, i) {
				void 0 === o && (o = null), void 0 === n && (n = !1), void 0 === i && (i = !1), this.gameSceneComp.pushCustomerPopupView(e, t, o, n, i)
			}, t.prototype.removePopupView = function(e, t) {
				this.gameSceneComp.removePopupView(e, t)
			}, Object.defineProperty(t.prototype, "gameSceneComp", {
				get: function() {
					return this.viewComponent
				},
				enumerable: !1,
				configurable: !0
			}), t.NAME = "GameSceneMediator", t
		}(puremvc.Mediator);
		o.default = r, cc._RF.pop()
	}, {}],
	GameScene: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "132a7EoGjVAk7h9brCwCLB0", "GameScene");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../assetsModule/AssetsMap"),
			s = e("../BundleNames"),
			c = e("./mediators/GameSceneMediator"),
			l = cc._decorator,
			p = l.ccclass,
			u = l.property,
			d = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.preload_prefabs = [], t._moduleViewLayer = null, t._popupViewLayer = null, t._popMaskView = null, t._moduleViewZIndex = 0, t._popupViewZIndex = 1, t._currModuleView = null, t._catchModuleViews = [], t._currDisplayPopupViews = [], t._cachePopupViews = [], t
				}
				return i(t, e), t.prototype.onLoad = function() {
					this._moduleViewLayer = new cc.Node, this._moduleViewLayer.setContentSize(cc.size(cc.winSize.width, cc.winSize.height)), this._moduleViewLayer.zIndex = this._moduleViewZIndex, this._popupViewLayer = new cc.Node, this._popupViewLayer.setContentSize(cc.size(cc.winSize.width, cc.winSize.height)), this._popupViewLayer.zIndex = this._popupViewZIndex, this._popMaskView = game.UIManager.instance.createNodeByPreloading(s.default.Resources, a.default.ResourceBundle.prefabs.assetsList.PopMaskView), this._popMaskView.active = !1, this._popupViewLayer.addChild(this._popMaskView), this.node.addChild(this._moduleViewLayer), this.node.addChild(this._popupViewLayer), game.appFacade.registerMediator(new c.default(this))
				}, t.prototype.start = function() {
					game.appFacade.startup()
				}, t.prototype.replaceModuleView = function(e, t, o) {
					if (void 0 === o && (o = null), this._currModuleView && this._currModuleView.viewPath === t) game.warn("replaceModuleView final,curr moduleView repeat");
					else {
						if (this._currModuleView) {
							for (; this._currDisplayPopupViews.length > 0;) {
								var n = this._currDisplayPopupViews[this._currDisplayPopupViews.length - 1];
								this.removePopupView(n.view, !1)
							}
							var i = this._currModuleView.view.getComponent(game.BaseComponent);
							i && i.onRemoveToScene(), this._currModuleView.view.getComponent(game.BaseComponent).isCache ? (this._currModuleView.view.active = !1, this._currModuleView.view.parent = null, this._catchModuleViews.push({
								viewPath: this._currModuleView.viewPath,
								view: this._currModuleView.view
							})) : this._currModuleView.view.destroy()
						}
						for (var r = null, a = 0; a < this._catchModuleViews.length; a++)(n = this._catchModuleViews[a]).viewPath === t && ((r = n.view).active = !0, this._catchModuleViews.splice(a, 1));
						if (r || (r = game.UIManager.instance.createNodeByPreloading(e, t.toString())), r) {
							var s = r.getComponent(game.BaseComponent);
							null !== s ? s.param = o : game.warn("replaceModuleView,the new view no extends BaseComponent"), this._currModuleView = {
								viewPath: t,
								view: r
							}, this._moduleViewLayer.addChild(r);
							var c = r.getComponent(game.BaseComponent);
							c && c.onAddToScene()
						} else game.error("replaceModuleView final,the new view is null")
					}
				}, t.prototype.pushPopupView = function(e, t, o, n) {
					void 0 === t && (t = null), void 0 === o && (o = !1), void 0 === n && (n = !1);
					for (var i = null, r = 0; r < this._cachePopupViews.length; r++) {
						var a = this._cachePopupViews[r];
						a.name === e.name && ((i = a.view).active = !0, this._cachePopupViews.splice(r, 1))
					}
					if (i || (i = game.UIManager.instance.createNodeByPreloading(s.default.Popup, e.assetsPath)), i) {
						var c = i.getComponent(game.BaseComponent);
						null !== c ? c.param = t : game.warn("pushPopupView, new view no extends BaseComponent"), this._popupViewLayer.addChild(i);
						var l = i.getComponent(game.BaseComponent);
						l && l.onAddToScene(), this._currDisplayPopupViews.push({
							name: e.name,
							view: i,
							showMask: n
						}), n && (this._popMaskView.active = !0, cc.Tween.stopAllByTarget(this._popMaskView), cc.tween(this._popMaskView).to(.1, {
							opacity: 255
						}).start()), i.opacity = 255, i.scale = 1, o && (i.opacity = 0, this.scheduleOnce(function() {
							i.scale = 1.05, i.active = !0, i.opacity = 150, cc.Tween.stopAllByTarget(i), cc.tween(i).to(.1, {
								scale: 1,
								opacity: 255
							}).start()
						}))
					} else game.error("pushPopupView final,the new view is null")
				}, t.prototype.pushCustomerPopupView = function(e, t, o, n, i) {
					void 0 === o && (o = null), void 0 === n && (n = !1), void 0 === i && (i = !1);
					var r = null;
					if (r = game.UIManager.instance.createNodeByPreloading(e, t)) {
						var a = r.getComponent(game.BaseComponent);
						null !== a ? a.param = o : game.warn("pushPopupView, new view no extends BaseComponent"), this._popupViewLayer.addChild(r);
						var s = r.getComponent(game.BaseComponent);
						s && s.onAddToScene(), this._currDisplayPopupViews.push({
							name: r.name,
							view: r,
							showMask: i
						}), i && (this._popMaskView.active = !0, cc.Tween.stopAllByTarget(this._popMaskView), cc.tween(this._popMaskView).to(.1, {
							opacity: 255
						}).start()), r.opacity = 255, r.scale = 1, n && (r.opacity = 0, this.scheduleOnce(function() {
							r.scale = 1.05, r.active = !0, r.opacity = 150, cc.Tween.stopAllByTarget(r), cc.tween(r).to(.1, {
								scale: 1,
								opacity: 255
							}).start()
						}))
					} else game.error("pushPopupView final,the new view is null")
				}, t.prototype.removePopupView = function(e, t) {
					var o = this;
					void 0 === t && (t = !1);
					for (var n = function(n) {
							var r = i._currDisplayPopupViews[n];
							if (r.view === e) {
								i._currDisplayPopupViews.splice(n, 1);
								var a = r.view.getComponent(game.BaseComponent),
									s = !1;
								if (a && a.isCache && (s = a.isCache), t) cc.Tween.stopAllByTarget(r.view), cc.tween(r.view).to(.2, {
									scale: .9,
									opacity: 0
								}).call(function() {
									var e = r.view.getComponent(game.BaseComponent);
									e && e.onRemoveToScene(), s ? (r.view.active = !1, r.view.parent = null) : r.view.destroy()
								}).start(), i.checkAllShowMask() || (cc.Tween.stopAllByTarget(i._popMaskView), cc.tween(i._popMaskView).to(.1, {
									opacity: 0
								}).call(function() {
									o._popMaskView.active = !1
								}).start());
								else {
									var c = r.view.getComponent(game.BaseComponent);
									c && c.onRemoveToScene(), s ? (r.view.active = !1, r.view.parent = null) : r.view.destroy(), i._popMaskView.active && !i.checkAllShowMask() && (i._popMaskView.opacity = 0, i._popMaskView.active = !1)
								}
								return s && i._cachePopupViews.push({
									name: r.name,
									view: r.view
								}), "break"
							}
						}, i = this, r = 0; r < this._currDisplayPopupViews.length && "break" !== n(r); r++);
					this.scheduleOnce(function() {
						o._currDisplayPopupViews.length <= 0 && o._popMaskView.active && (cc.Tween.stopAllByTarget(o._popMaskView), cc.tween(o._popMaskView).to(.1, {
							opacity: 0
						}).call(function() {
							o._popMaskView.active = !1
						}).start())
					})
				}, t.prototype.checkAllShowMask = function() {
					for (var e = 0; e < this._currDisplayPopupViews.length; e++)
						if (this._currDisplayPopupViews[e].showMask) return !0;
					return !1
				}, r([u([cc.Prefab])], t.prototype, "preload_prefabs", void 0), r([p], t)
			}(cc.Component);
		o.default = d, cc._RF.pop()
	}, {
		"../BundleNames": "BundleNames",
		"../assetsModule/AssetsMap": "AssetsMap",
		"./mediators/GameSceneMediator": "GameSceneMediator"
	}],
	GlobalParam: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "3c754riXHpNHKw8+ajZOBtz", "GlobalParam"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = function() {
			function e() {}
			return e.maxLevel = 30, e.needTili = 2, e.maxTili = 20, e.guideIndex = 1, e.dynamicLoadLevels = ["/prefabs/map/Map_1", "/prefabs/map/Map_2", "/prefabs/map/Map_3", "/prefabs/map/Map_4", "/prefabs/map/Map_5", "/prefabs/map/Map_6", "/prefabs/map/Map_7", "/prefabs/map/Map_8", "/prefabs/map/Map_9", "/prefabs/map/Map_10", "/prefabs/map/Map_11", "/prefabs/map/Map_12", "/prefabs/map/Map_13", "/prefabs/map/Map_14", "/prefabs/map/Map_15", "/prefabs/map/Map_16", "/prefabs/map/Map_17", "/prefabs/map/Map_18", "/prefabs/map/Map_19", "/prefabs/map/Map_20", "/prefabs/map/Map_21", "/prefabs/map/Map_22", "/prefabs/map/Map_23", "/prefabs/map/Map_24", "/prefabs/map/Map_25", "/prefabs/map/Map_26", "/prefabs/map/Map_27", "/prefabs/map/Map_28", "/prefabs/map/Map_29", "/prefabs/map/Map_30"], e.dynamicConfigs = ["/configs/map_1", "/configs/map_2", "/configs/map_3", "/configs/map_4", "/configs/map_5", "/configs/map_6", "/configs/map_7", "/configs/map_8", "/configs/map_9", "/configs/map_10", "/configs/map_11", "/configs/map_12", "/configs/map_13", "/configs/map_14", "/configs/map_15", "/configs/map_16", "/configs/map_17", "/configs/map_18", "/configs/map_19", "/configs/map_20", "/configs/map_21", "/configs/map_22", "/configs/map_23", "/configs/map_24", "/configs/map_25", "/configs/map_26", "/configs/map_27", "/configs/map_28", "/configs/map_29", "/configs/map_30"], e
		}();
		o.default = n, cc._RF.pop()
	}, {}],
	Gold: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "83761SMJkxBfamk/dgQd/Vr", "Gold");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../../public/model/GameAudioContext"),
			s = e("../../public/obj/GameEventManage"),
			c = e("../model/PropManage"),
			l = cc._decorator,
			p = l.ccclass,
			u = (l.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.isContact = !1, t
				}
				return i(t, e), t.prototype.start = function() {
					var e = cc.tween().to(.2, {
						scale: .9
					}).to(.1, {
						scale: .7
					}).to(.1, {
						angle: 15
					}).to(.1, {
						angle: 0
					}).to(.2, {
						scale: .9
					}).to(.1, {
						scale: .7
					}).to(.1, {
						angle: -15
					}).to(.1, {
						angle: 0
					});
					cc.tween(this.node).repeatForever(e).start()
				}, t.prototype.onCollisionEnter = function(e) {
					e.node.name !== c.PlayerNodeName.IcePlayer && e.node.name !== c.PlayerNodeName.FirePlayer || this.isContact || (this.isContact = !0, a.default.gold(), game.appFacade.sendNotification(s.default.CONTACT_GOLD, {
						goldNode: this.node
					}))
				}, r([p], t)
			}(cc.Component));
		o.default = u, cc._RF.pop()
	}, {
		"../../public/model/GameAudioContext": "GameAudioContext",
		"../../public/obj/GameEventManage": "GameEventManage",
		"../model/PropManage": "PropManage"
	}],
	Guide_1: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "28420khiodMOJep3I8SfwOu", "Guide_1");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../../game/mediators/GameModuleViewMediator"),
			s = e("../BaseGuide"),
			c = cc._decorator,
			l = c.ccclass,
			p = (c.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t._oldParent = null, t._node_left_touch_region = null, t
				}
				var o;
				return i(t, e), o = t, t.prototype.startGuide = function() {
					var e = this;
					this.node.getChildByName("shouzhi_ske").zIndex = cc.macro.MAX_ZINDEX;
					var t = game.appFacade.retrieveMediator(a.default.NAME).view.leftBtn;
					this.scheduleOnce(function() {
						e._node_left_touch_region = t, e._oldParent = e._node_left_touch_region.parent;
						var o = e._oldParent.convertToWorldSpaceAR(e._node_left_touch_region.position);
						e._node_left_touch_region.parent = e.node, e.scheduleOnce(function() {
							e._node_left_touch_region.position = e.node.convertToNodeSpaceAR(o)
						})
					}), game.appFacade.view.registerObserver(o.OK, new puremvc.Observer(this.onControlEnd, this))
				}, t.prototype.onControlEnd = function() {
					game.appFacade.view.removeObserver(o.OK, this), this.toNextGuide()
				}, t.prototype.toNextGuide = function() {
					var t = this._oldParent.convertToWorldSpaceAR(this._node_left_touch_region.position);
					this._node_left_touch_region.parent = this._oldParent, this._node_left_touch_region.position = this._oldParent.convertToNodeSpaceAR(t), e.prototype.toNextGuide.call(this)
				}, t.prototype.onClickContinue = function() {
					var e = this._oldParent.convertToWorldSpaceAR(this._node_left_touch_region.position);
					this._node_left_touch_region.parent = this._oldParent, this._node_left_touch_region.position = this._oldParent.convertToNodeSpaceAR(e), this.node.destroy(), game.appFacade.sendNotification(s.default.ON_CONTINUE_GUIDE)
				}, t.OK = "Guide_1_OK", o = r([l], t)
			}(s.default));
		o.default = p, cc._RF.pop()
	}, {
		"../../game/mediators/GameModuleViewMediator": "GameModuleViewMediator",
		"../BaseGuide": "BaseGuide"
	}],
	Guide_2: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "ad931ZR2OZCho+x0NzlL9Ap", "Guide_2");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../../game/mediators/GameModuleViewMediator"),
			s = e("../BaseGuide"),
			c = cc._decorator,
			l = c.ccclass,
			p = (c.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t._oldParent = null, t._node_left_touch_region = null, t
				}
				var o;
				return i(t, e), o = t, t.prototype.startGuide = function() {
					var e = this;
					this.node.getChildByName("shouzhi_ske").zIndex = cc.macro.MAX_ZINDEX;
					var t = game.appFacade.retrieveMediator(a.default.NAME).view.rightBtn;
					this.scheduleOnce(function() {
						e._node_left_touch_region = t, e._oldParent = e._node_left_touch_region.parent;
						var o = e._oldParent.convertToWorldSpaceAR(e._node_left_touch_region.position);
						e._node_left_touch_region.parent = e.node, e.scheduleOnce(function() {
							e._node_left_touch_region.position = e.node.convertToNodeSpaceAR(o)
						})
					}), game.appFacade.view.registerObserver(o.OK, new puremvc.Observer(this.onControlEnd, this))
				}, t.prototype.onControlEnd = function() {
					game.appFacade.view.removeObserver(o.OK, this), this.toNextGuide()
				}, t.prototype.toNextGuide = function() {
					var t = this._oldParent.convertToWorldSpaceAR(this._node_left_touch_region.position);
					this._node_left_touch_region.parent = this._oldParent, this._node_left_touch_region.position = this._oldParent.convertToNodeSpaceAR(t), e.prototype.toNextGuide.call(this)
				}, t.prototype.onClickContinue = function() {
					var e = this._oldParent.convertToWorldSpaceAR(this._node_left_touch_region.position);
					this._node_left_touch_region.parent = this._oldParent, this._node_left_touch_region.position = this._oldParent.convertToNodeSpaceAR(e), this.node.destroy(), game.appFacade.sendNotification(s.default.ON_CONTINUE_GUIDE)
				}, t.OK = "Guide_2_OK", o = r([l], t)
			}(s.default));
		o.default = p, cc._RF.pop()
	}, {
		"../../game/mediators/GameModuleViewMediator": "GameModuleViewMediator",
		"../BaseGuide": "BaseGuide"
	}],
	Guide_3: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "b10dcH1Dd5J0YZMFPV91td1", "Guide_3");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../../game/mediators/GameModuleViewMediator"),
			s = e("../BaseGuide"),
			c = cc._decorator,
			l = c.ccclass,
			p = (c.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t._oldParent = null, t._node_left_touch_region = null, t
				}
				var o;
				return i(t, e), o = t, t.prototype.startGuide = function() {
					var e = this;
					this.node.getChildByName("shouzhi_ske").zIndex = cc.macro.MAX_ZINDEX;
					var t = game.appFacade.retrieveMediator(a.default.NAME).view.jumpBtn;
					this.scheduleOnce(function() {
						e._node_left_touch_region = t, e._oldParent = e._node_left_touch_region.parent;
						var o = e._oldParent.convertToWorldSpaceAR(e._node_left_touch_region.position);
						e._node_left_touch_region.parent = e.node, e.scheduleOnce(function() {
							e._node_left_touch_region.position = e.node.convertToNodeSpaceAR(o)
						})
					}), game.appFacade.view.registerObserver(o.OK, new puremvc.Observer(this.onControlEnd, this))
				}, t.prototype.onControlEnd = function() {
					game.appFacade.view.removeObserver(o.OK, this), this.toNextGuide()
				}, t.prototype.toNextGuide = function() {
					var t = this._oldParent.convertToWorldSpaceAR(this._node_left_touch_region.position);
					this._node_left_touch_region.parent = this._oldParent, this._node_left_touch_region.position = this._oldParent.convertToNodeSpaceAR(t), e.prototype.toNextGuide.call(this)
				}, t.prototype.onClickContinue = function() {
					var e = this._oldParent.convertToWorldSpaceAR(this._node_left_touch_region.position);
					this._node_left_touch_region.parent = this._oldParent, this._node_left_touch_region.position = this._oldParent.convertToNodeSpaceAR(e), this.node.destroy(), game.appFacade.sendNotification(s.default.ON_CONTINUE_GUIDE)
				}, t.OK = "Guide_3_OK", o = r([l], t)
			}(s.default));
		o.default = p, cc._RF.pop()
	}, {
		"../../game/mediators/GameModuleViewMediator": "GameModuleViewMediator",
		"../BaseGuide": "BaseGuide"
	}],
	Guide_4: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "d7213D92L5F8JNsH+AKA9XN", "Guide_4");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../../game/mediators/GameModuleViewMediator"),
			s = e("../BaseGuide"),
			c = cc._decorator,
			l = c.ccclass,
			p = (c.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t._oldParent = null, t._node_left_touch_region = null, t
				}
				var o;
				return i(t, e), o = t, t.prototype.startGuide = function() {
					var e = this;
					this.node.getChildByName("shouzhi_ske").zIndex = cc.macro.MAX_ZINDEX;
					var t = game.appFacade.retrieveMediator(a.default.NAME).view.changeBtn;
					this.scheduleOnce(function() {
						e._node_left_touch_region = t, e._oldParent = e._node_left_touch_region.parent;
						var o = e._oldParent.convertToWorldSpaceAR(e._node_left_touch_region.position);
						e._node_left_touch_region.parent = e.node, e.scheduleOnce(function() {
							e._node_left_touch_region.position = e.node.convertToNodeSpaceAR(o)
						})
					}), game.appFacade.view.registerObserver(o.OK, new puremvc.Observer(this.onControlEnd, this))
				}, t.prototype.onControlEnd = function() {
					game.appFacade.view.removeObserver(o.OK, this), this.toNextGuide()
				}, t.prototype.toNextGuide = function() {
					var t = this._oldParent.convertToWorldSpaceAR(this._node_left_touch_region.position);
					this._node_left_touch_region.parent = this._oldParent, this._node_left_touch_region.position = this._oldParent.convertToNodeSpaceAR(t), e.prototype.toNextGuide.call(this)
				}, t.prototype.onClickContinue = function() {
					var e = this._oldParent.convertToWorldSpaceAR(this._node_left_touch_region.position);
					this._node_left_touch_region.parent = this._oldParent, this._node_left_touch_region.position = this._oldParent.convertToNodeSpaceAR(e), this.node.destroy(), game.appFacade.sendNotification(s.default.ON_CONTINUE_GUIDE)
				}, t.OK = "Guide_4_OK", o = r([l], t)
			}(s.default));
		o.default = p, cc._RF.pop()
	}, {
		"../../game/mediators/GameModuleViewMediator": "GameModuleViewMediator",
		"../BaseGuide": "BaseGuide"
	}],
	Guide_5: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "12711LxdO5Dc4Mpv1a1+UPO", "Guide_5");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../../game/mediators/GameModuleViewMediator"),
			s = e("../BaseGuide"),
			c = cc._decorator,
			l = c.ccclass,
			p = (c.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t._oldParent = null, t._node_left_touch_region = null, t
				}
				var o;
				return i(t, e), o = t, t.prototype.startGuide = function() {
					var e = this;
					this.node.getChildByName("shouzhi_ske").zIndex = cc.macro.MAX_ZINDEX;
					var t = game.appFacade.retrieveMediator(a.default.NAME).view.zoomBtn;
					this.scheduleOnce(function() {
						e._node_left_touch_region = t, e._oldParent = e._node_left_touch_region.parent;
						var o = e._oldParent.convertToWorldSpaceAR(e._node_left_touch_region.position);
						e._node_left_touch_region.parent = e.node, e.scheduleOnce(function() {
							e._node_left_touch_region.position = e.node.convertToNodeSpaceAR(o)
						})
					}), game.appFacade.view.registerObserver(o.OK, new puremvc.Observer(this.onControlEnd, this))
				}, t.prototype.onControlEnd = function() {
					game.appFacade.view.removeObserver(o.OK, this), this.toNextGuide()
				}, t.prototype.toNextGuide = function() {
					var t = this._oldParent.convertToWorldSpaceAR(this._node_left_touch_region.position);
					this._node_left_touch_region.parent = this._oldParent, this._node_left_touch_region.position = this._oldParent.convertToNodeSpaceAR(t), e.prototype.toNextGuide.call(this)
				}, t.prototype.onClickContinue = function() {
					var e = this._oldParent.convertToWorldSpaceAR(this._node_left_touch_region.position);
					this._node_left_touch_region.parent = this._oldParent, this._node_left_touch_region.position = this._oldParent.convertToNodeSpaceAR(e), this.node.destroy(), game.appFacade.sendNotification(s.default.ON_CONTINUE_GUIDE)
				}, t.OK = "Guide_5_OK", o = r([l], t)
			}(s.default));
		o.default = p, cc._RF.pop()
	}, {
		"../../game/mediators/GameModuleViewMediator": "GameModuleViewMediator",
		"../BaseGuide": "BaseGuide"
	}],
	InitModuleViewMediator: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "28923h5huRHO6Pb4xe3zQEu", "InitModuleViewMediator");
		var n, i = this && this.__extends || (n = function(e, t) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
				})(e, t)
		}, function(e, t) {
			function o() {
				this.constructor = e
			}
			n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
		});
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var r = function(e) {
			function t(o) {
				return e.call(this, t.NAME, o) || this
			}
			return i(t, e), t.prototype.listNotificationInterests = function() {
				return []
			}, t.prototype.handleNotification = function() {}, Object.defineProperty(t.prototype, "initModuleViewComp", {
				get: function() {
					return this.viewComponent
				},
				enumerable: !1,
				configurable: !0
			}), t.NAME = "InitModuleViewMediator", t
		}(puremvc.Mediator);
		o.default = r, cc._RF.pop()
	}, {}],
	InitModuleView: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "889a1FWcJ1OurUWD5F01T9I", "InitModuleView");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../mediators/InitModuleViewMediator"),
			s = cc._decorator,
			c = s.ccclass,
			l = s.property,
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.lab_tips = null, t.touTiaoTitle = null, t.otherTitle = null, t
				}
				return i(t, e), t.prototype.start = function() {
					e.prototype.start.call(this), this.touTiaoTitle.active = !1, this.otherTitle.active = !0
				}, t.prototype.registerMediator = function() {
					game.appFacade.registerMediator(new a.default(this))
				}, t.prototype.removeMediator = function() {
					game.appFacade.removeMediator(a.default.NAME)
				}, r([l(cc.Label)], t.prototype, "lab_tips", void 0), r([l(cc.Node)], t.prototype, "touTiaoTitle", void 0), r([l(cc.Node)], t.prototype, "otherTitle", void 0), r([c], t)
			}(game.BaseModuleView);
		o.default = p, cc._RF.pop()
	}, {
		"../mediators/InitModuleViewMediator": "InitModuleViewMediator"
	}],
	InitUICommand: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "4865fG/OKhIe6wVm85caHKg", "InitUICommand");
		var n, i = this && this.__extends || (n = function(e, t) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
				})(e, t)
		}, function(e, t) {
			function o() {
				this.constructor = e
			}
			n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
		});
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var r = e("../../assetsModule/AssetsMap"),
			a = e("../../BundleNames"),
			s = function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return i(t, e), t.prototype.execute = function() {
					game.UIManager.instance.replaceModuleView(a.default.Resources, r.default.ResourceBundle.prefabs.assetsList.InitModuleView)
				}, t
			}(puremvc.SimpleCommand);
		o.default = s, cc._RF.pop()
	}, {
		"../../BundleNames": "BundleNames",
		"../../assetsModule/AssetsMap": "AssetsMap"
	}],
	LightSource: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "5752aGSUYtH676wAWhx5Zn1", "LightSource");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("./BaseProp"),
			s = e("./LineGraphics"),
			c = cc._decorator,
			l = c.ccclass,
			p = c.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.node_image = null, t.lineGraphics = null, t.targetNode = null, t.propColor = a.PropColor.RED, t.lightWidth = 0, t._colliderGroups = ["player", "wallandprop", "baseprop"], t._lastColliderNodes = [], t._currColliderNodes = [], t
				}
				return i(t, e), t.prototype.start = function() {
					this.lineGraphics.setDrawWidth(this.lightWidth);
					var e = cc.Color.WHITE;
					e = cc.Color.fromHEX(e, this.colors[this.propColor]), this.lineGraphics.setDrawColor(cc.color(e.getR(), e.getG(), e.getB(), 150)), this.node.getChildByName("jiguanw").color = e
				}, t.prototype.update = function() {
					this.lineGraphics.clear(), this._lastColliderNodes = this._currColliderNodes, this._currColliderNodes = [];
					var e = this.degreesToVectors(0 - this.node_image.angle),
						t = this.node.parent.convertToWorldSpaceAR(this.node.position);
					this.launchLight(cc.v2(t), e);
					for (var o = 0; o < this._lastColliderNodes.length; o++) - 1 == this._currColliderNodes.indexOf(this._lastColliderNodes[o]) && "wallandprop" == this._lastColliderNodes[o].group && "LigntSwitch" === this._lastColliderNodes[o].name && this.targetNode.getComponent(a.default).closeApi();
					for (o = 0; o < this._currColliderNodes.length; o++) - 1 == this._lastColliderNodes.indexOf(this._currColliderNodes[o]) && "wallandprop" == this._currColliderNodes[o].group && "LigntSwitch" === this._currColliderNodes[o].name && this.targetNode.getComponent(a.default).openApi()
				}, t.prototype.launchLight = function(e, t) {
					var o = e.add(t.mul(1400)),
						n = cc.director.getPhysicsManager().rayCast(e, o, cc.RayCastType.All);
					if (n.length > 0) {
						n.sort(function(t, o) {
							return e.sub(t.point).mag() - e.sub(o.point).mag()
						});
						for (var i = null, r = 0; r < n.length; r++)
							if (-1 != this._colliderGroups.indexOf(n[r].collider.node.group)) {
								i = n[r];
								break
							} if (i && -1 == this._currColliderNodes.indexOf(i.collider.node)) {
							this._currColliderNodes.push(i.collider.node);
							var a = i.point;
							if (this.lineGraphics.drawLine(this.lineGraphics.node.parent.convertToNodeSpaceAR(e), this.lineGraphics.node.parent.convertToNodeSpaceAR(a)), "reflector" == i.collider.node.group) {
								var s = i.point,
									c = i.normal,
									l = t,
									p = l.sub(c.mul(2 * l.dot(c)));
								Math.atan2(e.y - s.y, e.x - s.x), Math.PI, this.launchLight(s, p)
							}
						}
					}
				}, t.prototype.degreesToVectors = function(e) {
					var t = cc.misc.degreesToRadians(e);
					return cc.v2(0, 1).rotate(-t)
				}, r([p(cc.Node)], t.prototype, "node_image", void 0), r([p(s.default)], t.prototype, "lineGraphics", void 0), r([p(cc.Node)], t.prototype, "targetNode", void 0), r([p({
					type: cc.Enum(a.PropColor)
				})], t.prototype, "propColor", void 0), r([p(cc.Integer)], t.prototype, "lightWidth", void 0), r([l], t)
			}(a.default);
		o.default = u, cc._RF.pop()
	}, {
		"./BaseProp": "BaseProp",
		"./LineGraphics": "LineGraphics"
	}],
	LineGraphics: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "62b8c7iweRBSaqsN3uAUQpV", "LineGraphics");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
			s = a.ccclass,
			c = (a.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t._graphics = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					this._graphics = this.getComponent(cc.Graphics)
				}, t.prototype.start = function() {}, t.prototype.setDrawColor = function(e) {
					this._graphics.strokeColor = e
				}, t.prototype.setDrawWidth = function(e) {
					this._graphics.lineWidth = e
				}, t.prototype.clear = function() {
					this._graphics.clear()
				}, t.prototype.drawLine = function(e, t) {
					this._graphics.moveTo(e.x, e.y), this._graphics.lineTo(t.x, t.y), this._graphics.stroke(), this._graphics.fill()
				}, r([s], t)
			}(cc.Component));
		o.default = c, cc._RF.pop()
	}, {}],
	LoadBundlesCommand: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "2687dcURY9Ir5tyKh3JuXbX", "LoadBundlesCommand");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__awaiter || function(e, t, o, n) {
				return new(o || (o = Promise))(function(i, r) {
					function a(e) {
						try {
							c(n.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(n.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
							e(t)
						})).then(a, s)
					}
					c((n = n.apply(e, t || [])).next())
				})
			},
			a = this && this.__generator || function(e, t) {
				var o, n, i, r, a = {
					label: 0,
					sent: function() {
						if (1 & i[0]) throw i[1];
						return i[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(e) {
					return function(t) {
						return c([e, t])
					}
				}

				function c(r) {
					if (o) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
						switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
							case 0:
							case 1:
								i = r;
								break;
							case 4:
								return a.label++, {
									value: r[1],
									done: !1
								};
							case 5:
								a.label++, n = r[1], r = [0];
								continue;
							case 7:
								r = a.ops.pop(), a.trys.pop();
								continue;
							default:
								if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
									a = 0;
									continue
								}
								if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
									a.label = r[1];
									break
								}
								if (6 === r[0] && a.label < i[1]) {
									a.label = i[1], i = r;
									break
								}
								if (i && a.label < i[2]) {
									a.label = i[2], a.ops.push(r);
									break
								}
								i[2] && a.ops.pop(), a.trys.pop();
								continue
						}
						r = t.call(e, a)
					} catch (s) {
						r = [6, s], n = 0
					} finally {
						o = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var s = e("../../assetsModule/BundleManager"),
			c = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t._bundleNames = [], t._currLoadIndex = 0, t._successCallBack = null, t._failCallBack = null, t
				}
				return i(t, e), t.prototype.execute = function(e) {
					var t = e.getBody();
					t && (t.failCallBack && (this._failCallBack = t.failCallBack), t.finishCallBack && (this._successCallBack = t.finishCallBack), t.bundleNames && (this._bundleNames = t.bundleNames)), this.startLoadBundles()
				}, t.prototype.startLoadBundles = function() {
					game.log("LoadBundlesCommand", "startLoadBundles  " + JSON.stringify(this._bundleNames)), this._bundleNames && this._bundleNames.length > 0 ? this.toNextLoad() : this.onLoadBundlesSuccess()
				}, t.prototype.toNextLoad = function() {
					var e = this;
					this._currLoadIndex < this._bundleNames.length ? this.loadBundle(this._bundleNames[this._currLoadIndex]).then(function() {
						e._currLoadIndex++, e.toNextLoad()
					}).catch(function(t) {
						e.onLoadBundlesFail(t)
					}) : this.onLoadBundlesSuccess()
				}, t.prototype.loadBundle = function(e) {
					return r(this, void 0, Promise, function() {
						var t = this;
						return a(this, function() {
							return [2, new Promise(function(o, n) {
								s.default.instance.loadBundle(e, function(e) {
									t.onLoadBundlesProgress(e)
								}, function() {
									o(null)
								}, function(e) {
									n(e)
								})
							})]
						})
					})
				}, t.prototype.onLoadBundlesProgress = function(e) {
					this.sendNotification(t.LOAD_BUNDLES_PROGRESS, {
						progress: e,
						totalBundleCount: this._bundleNames.length,
						currBundleIndex: this._currLoadIndex + 1
					})
				}, t.prototype.onLoadBundlesSuccess = function() {
					this._successCallBack && this._successCallBack()
				}, t.prototype.onLoadBundlesFail = function(e) {
					game.error("LoadResCommand", "loadBundes error" + e), this._failCallBack && this._failCallBack({
						error_code: game.LoadingAssetsErrorCode.LoadingResourceError,
						error_msg: "\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25"
					})
				}, t.LOAD_BUNDLES_PROGRESS = "LOAD_BUNDLES_PROGRESS", t
			}(puremvc.SimpleCommand);
		o.default = c, cc._RF.pop()
	}, {
		"../../assetsModule/BundleManager": "BundleManager"
	}],
	LoadResCommand: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "d1926OT9z5H64jiHOGSqz2a", "LoadResCommand");
		var n, i = this && this.__extends || (n = function(e, t) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
				})(e, t)
		}, function(e, t) {
			function o() {
				this.constructor = e
			}
			n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
		});
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var r = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t._loading_fictitious_prog = 0, t._loading_fictitious_prog_speed = .03, t._loading_actual_prog = 0, t._is_loading_success = !1, t._assetsModules = [], t._successCallBack = null, t._failCallBack = null, t._timer = -1, t
			}
			return i(t, e), t.prototype.execute = function(e) {
				var t = e.getBody();
				t && (t.failCallBack && (this._failCallBack = t.failCallBack), t.finishCallBack && (this._successCallBack = t.finishCallBack), t.assetsModules && (this._assetsModules = t.assetsModules)), this.startLoadRes()
			}, t.prototype.resetParam = function() {
				this._loading_fictitious_prog = 0, this._loading_actual_prog = 0, this._is_loading_success = !1
			}, t.prototype.startLoadRes = function() {
				var e = this;
				if (game.log("LoadResCommand", "startLoadingRes  " + JSON.stringify(this._assetsModules)), this.resetParam(), this.clearTimer(), this._assetsModules) {
					var t = this._assetsModules,
						o = game.AssetsManager.instance.getNeedLoadAssetsBundleNames(t);
					o.length > 0 ? (this._timer = setInterval(this.checkLoadingProgress.bind(this), 10), game.AssetsManager.instance.reloadBundleAssetss(o, function() {
						e._is_loading_success = !0, e._loading_actual_prog = 1
					}, this.onLoadingResourceFail.bind(this), this.onLoadingResourceProgress.bind(this))) : this.onLoadingResourceSuccess()
				}
			}, t.prototype.clearTimer = function() {
				this._timer && (clearInterval(this._timer), this._timer = -1)
			}, t.prototype.checkLoadingProgress = function() {
				var e = this._loading_fictitious_prog;
				e + this._loading_fictitious_prog_speed <= this._loading_actual_prog ? e += this._loading_fictitious_prog_speed : 1 - this._loading_actual_prog <= this._loading_fictitious_prog_speed && (e = 1), e != this._loading_fictitious_prog && (this._loading_fictitious_prog = e, this.refreshLoadingProgress(this._loading_fictitious_prog)), this._loading_fictitious_prog >= 1 && this._is_loading_success && this.onLoadingResourceSuccess()
			}, t.prototype.refreshLoadingProgress = function(e) {
				this.sendNotification(t.LOAD_RES_PROGRESS, {
					progress: e
				})
			}, t.prototype.onLoadingResourceProgress = function(e) {
				this._loading_actual_prog = e
			}, t.prototype.onLoadingResourceSuccess = function() {
				this.clearTimer(), this._successCallBack && this._successCallBack()
			}, t.prototype.onLoadingResourceFail = function(e) {
				game.error("LoadResCommand", "loadingAssets error" + e), this.clearTimer(), this._failCallBack && this._failCallBack({
					error_code: game.LoadingAssetsErrorCode.LoadingResourceError,
					error_msg: "\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25"
				})
			}, t.LOAD_RES_PROGRESS = "LOAD_RES_PROGRESS", t
		}(puremvc.SimpleCommand);
		o.default = r, cc._RF.pop()
	}, {}],
	LoadingView: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "82c65jXnRNEF4VSxgI4VINk", "LoadingView");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			},
			a = this && this.__awaiter || function(e, t, o, n) {
				return new(o || (o = Promise))(function(i, r) {
					function a(e) {
						try {
							c(n.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(n.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
							e(t)
						})).then(a, s)
					}
					c((n = n.apply(e, t || [])).next())
				})
			},
			s = this && this.__generator || function(e, t) {
				var o, n, i, r, a = {
					label: 0,
					sent: function() {
						if (1 & i[0]) throw i[1];
						return i[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(e) {
					return function(t) {
						return c([e, t])
					}
				}

				function c(r) {
					if (o) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
						switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
							case 0:
							case 1:
								i = r;
								break;
							case 4:
								return a.label++, {
									value: r[1],
									done: !1
								};
							case 5:
								a.label++, n = r[1], r = [0];
								continue;
							case 7:
								r = a.ops.pop(), a.trys.pop();
								continue;
							default:
								if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
									a = 0;
									continue
								}
								if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
									a.label = r[1];
									break
								}
								if (6 === r[0] && a.label < i[1]) {
									a.label = i[1], i = r;
									break
								}
								if (i && a.label < i[2]) {
									a.label = i[2], a.ops.push(r);
									break
								}
								i[2] && a.ops.pop(), a.trys.pop();
								continue
						}
						r = t.call(e, a)
					} catch (s) {
						r = [6, s], n = 0
					} finally {
						o = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var c = e("../AppFacade"),
			l = e("../base/commands/LoadBundlesCommand"),
			p = e("../base/commands/LoadResCommand"),
			u = cc._decorator,
			d = u.ccclass,
			f = u.property,
			h = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.node_content = null, t.lab_tips = null, t.progressBar = null, t.touTiaoTitle = null, t.otherTitle = null, t.bundleNames = [], t.assetsModules = [], t
				}
				return i(t, e), t.prototype.onLoad = function() {
					this.node_content.active = !1
				}, t.prototype.start = function() {
					var e = this;
					this.addEvent(), this.touTiaoTitle.active = !1, this.otherTitle.active = !0, this.lab_tips.string = "Đang tải tài nguyên, vui lòng đợi", this.progressBar.progress = 0, (this.needLoadBundles(this.bundleNames) || this.needLoadRes(this.assetsModules)) && (this.node_content.active = !0), this.loadBundles(this.bundleNames).then(function() {
						return e.loadRes(e.assetsModules)
					}).then(function() {
						e.node.destroy(), e.successCallback && e.successCallback()
					})
				}, t.prototype.addEvent = function() {
					game.appFacade.view.registerObserver(l.default.LOAD_BUNDLES_PROGRESS, new puremvc.Observer(this.onLoadBundleProgress, this)), game.appFacade.view.registerObserver(p.default.LOAD_RES_PROGRESS, new puremvc.Observer(this.onLoadResProgress, this))
				}, t.prototype.removeEvent = function() {
					game.appFacade.view.removeObserver(l.default.LOAD_BUNDLES_PROGRESS, this), game.appFacade.view.removeObserver(p.default.LOAD_RES_PROGRESS, this)
				}, t.prototype.onDestroy = function() {
					this.removeEvent()
				}, t.prototype.needLoadBundles = function(e) {
					for (var t = 0; t < e.length; t++)
						if (!game.BundleManager.instance.getBundle(e[t])) return !0;
					return !1
				}, t.prototype.needLoadRes = function(e) {
					return game.AssetsManager.instance.getNeedLoadAssetsBundleNames(e).length > 0
				}, t.prototype.onLoadBundleProgress = function(e) {
					var t = e.getBody().progress,
						o = e.getBody().totalBundleCount,
						n = e.getBody().currBundleIndex;
					this.progressBar.progress = t, this.lab_tips.string = "Đang tải tài nguyên trò chơi, vui lòng đợi (" + n + "/" + o + ")"
				}, t.prototype.onLoadResProgress = function(e) {
					var t = e.getBody().progress;
					this.progressBar.progress = t
				}, t.prototype.loadBundles = function(e) {
					var t = this;
					return new Promise(function(o) {
						return a(t, void 0, void 0, function() {
							var t = this;
							return s(this, function() {
								return this.needLoadBundles(e) ? (this.lab_tips.string = "Đang tải tài nguyên trò chơi, vui lòng đợi", game.appFacade.sendNotification(c.default.LOAD_BUNDLES, {
									bundleNames: e,
									finishCallBack: function() {
										o(!0)
									},
									failCallBack: function() {
										game.UIManager.instance.showDialog("Tải xuống tài nguyên không thành công, thử lại?", !0, function() {
											t.loadBundles(e).then(function() {
												o(!0)
											})
										}, function() {
											cc.game.end()
										})
									}
								})) : o(!0), [2]
							})
						})
					})
				}, t.prototype.loadRes = function(e) {
					var t = this;
					return new Promise(function(o) {
						return a(t, void 0, void 0, function() {
							var t = this;
							return s(this, function() {
								return this.needLoadRes(e) ? (this.lab_tips.string = "Đang tải tài nguyên trò chơi, vui lòng đợi", game.appFacade.sendNotification(c.default.LOAD_RES, {
									assetsModules: e,
									finishCallBack: function() {
										o(!0)
									},
									failCallBack: function() {
										game.UIManager.instance.showDialog("Tải tài nguyên không thành công, thử lại?", !0, function() {
											t.loadRes(e).then(function() {
												o(!0)
											})
										}, function() {
											cc.game.end()
										})
									}
								})) : o(!0), [2]
							})
						})
					})
				}, r([f(cc.Node)], t.prototype, "node_content", void 0), r([f(cc.Label)], t.prototype, "lab_tips", void 0), r([f(cc.ProgressBar)], t.prototype, "progressBar", void 0), r([f(cc.Node)], t.prototype, "touTiaoTitle", void 0), r([f(cc.Node)], t.prototype, "otherTitle", void 0), r([d], t)
			}(cc.Component);
		o.default = h, cc._RF.pop()
	}, {
		"../AppFacade": "AppFacade",
		"../base/commands/LoadBundlesCommand": "LoadBundlesCommand",
		"../base/commands/LoadResCommand": "LoadResCommand"
	}],
	Loading: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "16005Co8nJOCbkAOnVrI5rO", "Loading");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("./BaseComponent"),
			s = cc._decorator,
			c = s.ccclass,
			l = s.property,
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.node_loading_sprite = null, t
				}
				var o;
				return i(t, e), o = t, t.prototype.start = function() {
					var e = this;
					o.oldLoadingView && (o.oldLoadingView.destroy(), o.oldLoadingView = null), o.oldLoadingView = this.node, this.scheduleOnce(function() {
						e.param.timeOutCallFunc && e.param.timeOutCallFunc(), o.oldLoadingView.destroy(), o.oldLoadingView = null
					}, this.param.outTime), cc.tween(this.node_loading_sprite).by(2, {
						angle: -360
					}).repeatForever().start()
				}, t.oldLoadingView = null, r([l(cc.Node)], t.prototype, "node_loading_sprite", void 0), o = r([c], t)
			}(a.default);
		o.default = p, cc._RF.pop()
	}, {
		"./BaseComponent": "BaseComponent"
	}],
	LocalItemName: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "154bfx9Z+tOKJdv9txAtPPX", "LocalItemName"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = function() {
			function e() {}
			return e.CURRENT_LEVEL = "currentLevel", e.LEVEL_RECORD = "levelRecord", e.GOLD = "gold", e.MY_PLAYER = "myPlayer", e.GOOUT_ID = "myGoOutId", e.SIGN_INFO = "signInfo", e.TILI = "tili", e.TILITIME = "TILITIME", e.GUIDED = "GUIDED", e.IS_AGREE_PRIVACY_TREATY = "IS_AGREE_PRIVACY_TREATY", e
		}();
		o.default = n, cc._RF.pop()
	}, {}],
	LoginProxy: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "84018/avbpNVK+bnggmH+nY", "LoginProxy");
		var n, i = this && this.__extends || (n = function(e, t) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
				})(e, t)
		}, function(e, t) {
			function o() {
				this.constructor = e
			}
			n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
		});
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var r = e("../../../framework/assetsModule/AssetsMap"),
			a = e("../../../framework/GlobalParam"),
			s = e("../../../framework/LocalItemName"),
			c = e("../../../framework/utils/Util"),
			l = e("../obj/GameEventManage"),
			p = e("../obj/LoginVO"),
			u = function(e) {
				function t() {
					return e.call(this, t.NAME, new p.default) || this
				}
				return i(t, e), t.prototype.initUserInfo = function() {
					this.loginVO.currentLevel = parseInt(c.default.getItem(s.default.CURRENT_LEVEL, "1")), this.loginVO.signInfo = JSON.parse(c.default.getItem(s.default.SIGN_INFO, JSON.stringify({
						dayNum: 0,
						signTimestamp: -1
					}))), this.loginVO.gold = parseInt(c.default.getItem(s.default.GOLD, "0")), this.loginVO.isGuided = JSON.parse(c.default.getItem(s.default.GUIDED, "false"));
					for (var e = [], t = 0; t < a.default.maxLevel; t++) e.push(0);
					if (this.loginVO.levelRecord = JSON.parse(c.default.getItem(s.default.LEVEL_RECORD, JSON.stringify(e))), this.loginVO.levelRecord.length != a.default.maxLevel) {
						var o = a.default.maxLevel - this.loginVO.levelRecord.length;
						for (t = 0; t < o; t++) this.loginVO.levelRecord.push(0)
					}
					this.loginVO.myPlayers = JSON.parse(c.default.getItem(s.default.MY_PLAYER, JSON.stringify([1]))), this.loginVO.currentGoOutPlayer = JSON.parse(c.default.getItem(s.default.GOOUT_ID, "1")), this.loginVO.tili = parseInt(c.default.getItem(s.default.TILI, a.default.maxTili.toString())), this.loginVO.tiliTime = parseInt(c.default.getItem(s.default.TILITIME, (new Date).getTime().toString())), this.initTili()
				}, t.prototype.initTili = function() {
					var e = this,
						t = Math.floor(((new Date).getTime() - this.loginVO.tiliTime) / 12e4);
					if (this.loginVO.tili < a.default.maxTili) {
						var o = this.loginVO.tili + 2 * t;
						o = Math.min(a.default.maxTili, o), this.setUserProperty(s.default.TILI, o)
					}
					setInterval(function() {
						if (!(e.getUserProperty(s.default.TILI) >= a.default.maxTili)) {
							var t = e.getUserProperty(s.default.TILITIME);
							Math.floor(t / 1e3 + 120 - (new Date).getTime() / 1e3) <= 0 && (e.opearTili(2), e.setUserProperty(s.default.TILITIME, (new Date).getTime()))
						}
					}, 1e3)
				}, t.prototype.getUserProperty = function(e) {
					switch (e) {
						case s.default.CURRENT_LEVEL:
							return this.loginVO.currentLevel;
						case s.default.SIGN_INFO:
							return this.loginVO.signInfo;
						case s.default.LEVEL_RECORD:
							return this.loginVO.levelRecord;
						case s.default.GOLD:
							return this.loginVO.gold;
						case s.default.MY_PLAYER:
							return this.loginVO.myPlayers;
						case s.default.GOOUT_ID:
							return this.loginVO.currentGoOutPlayer;
						case s.default.TILI:
							return this.loginVO.tili;
						case s.default.TILITIME:
							return this.loginVO.tiliTime;
						case s.default.GUIDED:
							return this.loginVO.isGuided
					}
				}, t.prototype.setUserProperty = function(e, t) {
					if (t || 0 == t) switch (c.default.setItem(e, JSON.stringify(t)), e) {
						case s.default.CURRENT_LEVEL:
							this.loginVO.currentLevel = t;
							break;
						case s.default.LEVEL_RECORD:
							this.loginVO.levelRecord = t;
							break;
						case s.default.GOLD:
							this.loginVO.gold = t;
							break;
						case s.default.MY_PLAYER:
							this.loginVO.myPlayers = t;
							break;
						case s.default.GOOUT_ID:
							this.loginVO.currentGoOutPlayer = t;
							break;
						case s.default.SIGN_INFO:
							this.loginVO.signInfo = t;
							break;
						case s.default.TILI:
							this.loginVO.tili = t;
							break;
						case s.default.TILITIME:
							this.loginVO.tiliTime = t;
							break;
						case s.default.GUIDED:
							this.loginVO.isGuided = t
					}
				}, t.prototype.opearCoin = function(e) {
					this.loginVO.gold += e, this.setUserProperty(s.default.GOLD, this.loginVO.gold), game.appFacade.sendNotification(l.default.COIN_CHANGE, {
						cmd: 1
					})
				}, t.prototype.opearTili = function(e) {
					this.loginVO.tili += e, this.setUserProperty(s.default.TILI, this.loginVO.tili), game.appFacade.sendNotification(l.default.COIN_CHANGE, {
						cmd: 3
					})
				}, t.prototype.getUnLockSkin = function() {
					var e = [],
						t = this.loginVO.myPlayers;
					if (t.length >= 6) return e;
					for (var o = 1; o <= 6; o++) t.indexOf(o) > -1 || e.push(o);
					return e
				}, t.prototype.checkTili = function() {
					return this.loginVO.tili < a.default.needTili ? (game.PopupManager.instance.showPopView(r.default.PopupMap.AssetDeficiencyPopView, {
						type: 2
					}, !0, !0), !1) : (this.opearTili(-a.default.needTili), !0)
				}, Object.defineProperty(t.prototype, "loginVO", {
					get: function() {
						return this.data
					},
					enumerable: !1,
					configurable: !0
				}), t.NAME = "LoginProxy", t.ON_LOGIN_SUCCESS = "ON_LOGIN_SUCCESS", t.ON_COIN_CHANGE = "ON_COIN_CHANGE", t
			}(puremvc.Proxy);
		o.default = u, cc._RF.pop()
	}, {
		"../../../framework/GlobalParam": "GlobalParam",
		"../../../framework/LocalItemName": "LocalItemName",
		"../../../framework/assetsModule/AssetsMap": "AssetsMap",
		"../../../framework/utils/Util": "Util",
		"../obj/GameEventManage": "GameEventManage",
		"../obj/LoginVO": "LoginVO"
	}],
	LoginVO: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "0fbf8nFNstAEIF2bDckLTPv", "LoginVO"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		o.default = function() {
			this.token = "", this.openID = "", this.timestamp = -1, this.coin = 0, this.currentLevel = 1, this.levelRecord = [], this.gold = 0, this.myPlayers = [], this.currentGoOutPlayer = null, this.signInfo = null, this.tili = 0, this.tiliTime = 0, this.isGuided = !1
		}, cc._RF.pop()
	}, {}],
	MainModuleViewMediator: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "89a28y0MEdAtIQuUdIISiBc", "MainModuleViewMediator");
		var n, i = this && this.__extends || (n = function(e, t) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
				})(e, t)
		}, function(e, t) {
			function o() {
				this.constructor = e
			}
			n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
		});
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var r = e("../../../framework/assetsModule/AssetsMap"),
			a = e("../../../framework/LocalItemName"),
			s = e("../../public/model/GameAudioContext"),
			c = e("../../public/model/LoginProxy"),
			l = e("../../public/obj/GameEventManage"),
			p = function(e) {
				function t(o) {
					return e.call(this, t.NAME, o) || this
				}
				return i(t, e), t.prototype.onRegister = function() {
					e.prototype.onRegister.call(this), this.view.startBtnNode.on(game.EngineEventType.NodeEvent.click, this.clickStarBtn, this), this.view.musicBtnNode.on(game.EngineEventType.NodeEvent.click, this.clickMusic, this), this.view.prePlayerBtn.on(game.EngineEventType.NodeEvent.click, this.clickPrePlayerBtn, this), this.view.nextPlayerBtn.on(game.EngineEventType.NodeEvent.click, this.clickNextPlayerBtn, this), this.view.shopBtn.on(game.EngineEventType.NodeEvent.click, this.clickShopBtn, this), this.view.signBtn.on(game.EngineEventType.NodeEvent.click, this.clickSignBtn, this), this.view.goldAddBtn.on(game.EngineEventType.NodeEvent.click, this.clickAddGold, this), this.view.tiliAddBtn.on(game.EngineEventType.NodeEvent.click, this.clickAddTili, this)
				}, t.prototype.onRemove = function() {
					e.prototype.onRemove.call(this), this.view.startBtnNode.off(game.EngineEventType.NodeEvent.click, this.clickStarBtn, this), this.view.musicBtnNode.off(game.EngineEventType.NodeEvent.click, this.clickMusic, this), this.view.prePlayerBtn.off(game.EngineEventType.NodeEvent.click, this.clickPrePlayerBtn, this), this.view.nextPlayerBtn.off(game.EngineEventType.NodeEvent.click, this.clickNextPlayerBtn, this), this.view.shopBtn.off(game.EngineEventType.NodeEvent.click, this.clickShopBtn, this), this.view.signBtn.off(game.EngineEventType.NodeEvent.click, this.clickSignBtn, this), this.view.goldAddBtn.off(game.EngineEventType.NodeEvent.click, this.clickAddGold, this), this.view.tiliAddBtn.off(game.EngineEventType.NodeEvent.click, this.clickAddTili, this)
				}, t.prototype.listNotificationInterests = function() {
					return [l.default.COIN_CHANGE, l.default.CHANGE_SKINE]
				}, t.prototype.handleNotification = function(e) {
					switch (e.getName()) {
						case l.default.COIN_CHANGE:
							this.coinChange(e);
							break;
						case l.default.CHANGE_SKINE:
							this.view.renderPlayers()
					}
				}, t.prototype.clickAddGold = function() {
					s.default.click(), game.PopupManager.instance.showPopView(r.default.PopupMap.AssetDeficiencyPopView, {
						type: 1
					}, !0, !0)
				}, t.prototype.clickAddTili = function() {
					s.default.click(), game.PopupManager.instance.showPopView(r.default.PopupMap.AssetDeficiencyPopView, {
						type: 2
					}, !0, !0)
				}, t.prototype.clickSignBtn = function() {
					s.default.click(), game.PopupManager.instance.showPopView(r.default.PopupMap.SignPopView, null, !0, !0)
				}, t.prototype.clickStarBtn = function() {
					s.default.click(), game.PopupManager.instance.showPopView(r.default.PopupMap.ChooseLevelPopView, null, !0, !0)
				}, t.prototype.clickShopBtn = function() {
					s.default.click(), game.PopupManager.instance.showPopView(r.default.PopupMap.ShopPopView, null, !0, !0)
				}, t.prototype.clickMusic = function() {
					s.default.isCloseMusic ? (s.default.switchMusic(!1), s.default.click(), this.view.musicBtnNode.getChildByName("dis_music").active = !1) : (this.view.musicBtnNode.getChildByName("dis_music").active = !0, s.default.switchMusic(!0))
				}, t.prototype.clickNextPlayerBtn = function() {
					s.default.click();
					var e = game.appFacade.retrieveProxy(c.default.NAME),
						t = e.getUserProperty(a.default.MY_PLAYER),
						o = t.findIndex(function(t) {
							return t === e.getUserProperty(a.default.GOOUT_ID)
						});
					o >= t.length - 1 && (o = -1), ++o, e.setUserProperty(a.default.GOOUT_ID, t[o]), this.view.renderPlayers(t[o])
				}, t.prototype.clickPrePlayerBtn = function() {
					s.default.click();
					var e = game.appFacade.retrieveProxy(c.default.NAME),
						t = e.getUserProperty(a.default.MY_PLAYER),
						o = t.findIndex(function(t) {
							return t === e.getUserProperty(a.default.GOOUT_ID)
						});
					o && -1 !== o || (o = 0), o <= 0 && (o = t.length), --o, e.setUserProperty(a.default.GOOUT_ID, t[o]), this.view.renderPlayers(t[o])
				}, t.prototype.coinChange = function(e) {
					var t = e.getBody();
					if (1 === t.cmd) {
						var o = game.appFacade.retrieveProxy(c.default.NAME);
						this.view.gold.string = o.getUserProperty(a.default.GOLD).toString()
					} else 3 === t.cmd && (o = game.appFacade.retrieveProxy(c.default.NAME), this.view.tiliLabel.string = o.getUserProperty(a.default.TILI).toString())
				}, Object.defineProperty(t.prototype, "view", {
					get: function() {
						return this.viewComponent
					},
					enumerable: !1,
					configurable: !0
				}), t.NAME = "MainModuleViewMediator", t
			}(puremvc.Mediator);
		o.default = p, cc._RF.pop()
	}, {
		"../../../framework/LocalItemName": "LocalItemName",
		"../../../framework/assetsModule/AssetsMap": "AssetsMap",
		"../../public/model/GameAudioContext": "GameAudioContext",
		"../../public/model/LoginProxy": "LoginProxy",
		"../../public/obj/GameEventManage": "GameEventManage"
	}],
	MainModuleView: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "554daG+XhlHVYQf/gdEt1+A", "MainModuleView");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../../../framework/GlobalParam"),
			s = e("../../../framework/LocalItemName"),
			c = e("../../public/model/GameAudioContext"),
			l = e("../../public/model/LoginProxy"),
			p = e("../../public/utils/PlayerUtils"),
			u = e("../mediators/MainModuleViewMediator"),
			d = cc._decorator,
			f = d.ccclass,
			h = d.property,
			y = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.gold = null, t.goldAddBtn = null, t.levelLabel = null, t.musicBtnNode = null, t.startBtnNode = null, t.playerLayerNode = null, t.prePlayerBtn = null, t.nextPlayerBtn = null, t.shopBtn = null, t.signBtn = null, t.tiliLabel = null, t.tiliAddBtn = null, t.tiliCountdownLabel = null, t
				}
				return i(t, e), t.prototype.registerMediator = function() {
					e.prototype.registerMediator.call(this), game.appFacade.registerMediator(new u.default(this))
				}, t.prototype.removeMediator = function() {
					e.prototype.removeMediator.call(this), game.appFacade.removeMediator(u.default.NAME)
				}, t.prototype.onResetView = function() {
					e.prototype.onResetView.call(this);
                    window.ArcadeH5 && window.ArcadeH5.showMenu(true);
					var t = game.appFacade.retrieveProxy(l.default.NAME);
					this.gold.string = t.getUserProperty(s.default.GOLD).toString(), this.tiliLabel.string = t.getUserProperty(s.default.TILI).toString();
					var o = t.getUserProperty(s.default.CURRENT_LEVEL);
					this.levelLabel.string = o < 10 ? "0" + o.toString() : "" + o.toString(), this.musicBtnNode.getChildByName("dis_music").active = c.default.isCloseMusic, t.getUserProperty(s.default.TILI) >= 10 && (this.tiliCountdownLabel.node.active = !1);
					var n = t.getUserProperty(s.default.GOOUT_ID);
					this.renderPlayers(n), this.schedule(this.tiliCountdown, 1)
				}, t.prototype.onAddToScene = function() {
					e.prototype.onAddToScene.call(this), c.default.playIndexBgm()
				}, t.prototype.onRemoveToScene = function() {
					e.prototype.onRemoveToScene.call(this), window.ArcadeH5 && window.ArcadeH5.showMenu(false), c.default.stopBgm(), this.unschedule(this.tiliCountdown)
				}, t.prototype.renderPlayers = function(e) {
					void 0 === e && (e = -1), -1 === e && (e = game.appFacade.retrieveProxy(l.default.NAME).getUserProperty(s.default.GOOUT_ID)), p.default.changeSkin(this.playerLayerNode, e)
				}, t.prototype.tiliCountdown = function() {
					var e = game.appFacade.retrieveProxy(l.default.NAME);
					if (e.getUserProperty(s.default.TILI) >= a.default.maxTili) this.tiliCountdownLabel.node.active = !1;
					else {
						var t = e.getUserProperty(s.default.TILITIME),
							o = Math.floor(t / 1e3 + 120 - (new Date).getTime() / 1e3);
						if (o <= 0) this.tiliCountdownLabel.node.active = !1;
						else {
							this.tiliCountdownLabel.node.active = !0;
							var n = Math.floor(o / 60),
								i = o % 60,
								r = n < 10 ? "0" + n : n.toString(),
								c = i < 10 ? "0" + i : i.toString();
							this.tiliCountdownLabel.string = r + ":" + c
						}
					}
				}, r([h(cc.Label)], t.prototype, "gold", void 0), r([h(cc.Node)], t.prototype, "goldAddBtn", void 0), r([h(cc.Label)], t.prototype, "levelLabel", void 0), r([h(cc.Node)], t.prototype, "musicBtnNode", void 0), r([h(cc.Node)], t.prototype, "startBtnNode", void 0), r([h(cc.Node)], t.prototype, "playerLayerNode", void 0), r([h(cc.Node)], t.prototype, "prePlayerBtn", void 0), r([h(cc.Node)], t.prototype, "nextPlayerBtn", void 0), r([h(cc.Node)], t.prototype, "shopBtn", void 0), r([h(cc.Node)], t.prototype, "signBtn", void 0), r([h(cc.Label)], t.prototype, "tiliLabel", void 0), r([h(cc.Node)], t.prototype, "tiliAddBtn", void 0), r([h(cc.Label)], t.prototype, "tiliCountdownLabel", void 0), r([f], t)
			}(game.BaseModuleView);
		o.default = y, cc._RF.pop()
	}, {
		"../../../framework/GlobalParam": "GlobalParam",
		"../../../framework/LocalItemName": "LocalItemName",
		"../../public/model/GameAudioContext": "GameAudioContext",
		"../../public/model/LoginProxy": "LoginProxy",
		"../../public/utils/PlayerUtils": "PlayerUtils",
		"../mediators/MainModuleViewMediator": "MainModuleViewMediator"
	}],
	MoveBoard: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "ba08bCkVR1MzYO4Md4FySjJ", "MoveBoard");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../../../framework/utils/Util"),
			s = e("./BaseProp"),
			c = cc._decorator,
			l = c.ccclass,
			p = c.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.point1 = null, t.point2 = null, t.speedNum = 150, t.propColor = s.PropColor.RED, t.lastPosition = null, t.boardOnNode = [], t.moveNodeNames = ["FireMale", "IceFemale"], t
				}
				return i(t, e), t.prototype.start = function() {
					this.lastPosition = this.node.position;
					var e = this.node.getChildByName("shenjiantaiz"),
						t = cc.Color.WHITE;
					t = cc.Color.fromHEX(t, this.colors[this.propColor]), e && (e.color = t)
				}, t.prototype.openApi = function() {
					cc.Tween.stopAllByTarget(this.node);
					var e = this.node.position.sub(this.point2).mag(),
						t = a.default.toDecimal(e / this.speedNum);
					cc.tween(this.node).to(t, {
						position: this.point2
					}).start()
				}, t.prototype.closeApi = function() {
					cc.Tween.stopAllByTarget(this.node);
					var e = this.node.position.sub(this.point1).mag(),
						t = a.default.toDecimal(e / this.speedNum);
					cc.tween(this.node).to(t, {
						position: this.point1
					}).start()
				}, t.prototype.onBeginContact = function(e, t, o) {
					var n = o.node;
					this.checkMove(n.name) && -1 == this.boardOnNode.indexOf(n) && this.boardOnNode.push(n)
				}, t.prototype.onEndContact = function(e, t, o) {
					var n = o.node;
					if (this.checkMove(n.name)) {
						var i = this.boardOnNode.indexOf(n); - 1 != i && this.boardOnNode.splice(i, 1)
					}
				}, t.prototype.checkMove = function(e) {
					for (var t = 0; t < this.moveNodeNames.length; t++)
						if (e.indexOf(this.moveNodeNames[t]) > -1) return !0;
					return !1
				}, t.prototype.update = function() {
					for (var e = this.node.position.x - this.lastPosition.x, t = this.node.position.y - this.lastPosition.y, o = 0; o < this.boardOnNode.length; o++) {
						var n = this.boardOnNode[o],
							i = n.position;
						n.setPosition(cc.v2(i.x + e, i.y + t - 3))
					}
					this.lastPosition = this.node.position
				}, r([p(cc.Vec3)], t.prototype, "point1", void 0), r([p(cc.Vec3)], t.prototype, "point2", void 0), r([p], t.prototype, "speedNum", void 0), r([p({
					type: cc.Enum(s.PropColor)
				})], t.prototype, "propColor", void 0), r([l], t)
			}(s.default);
		o.default = u, cc._RF.pop()
	}, {
		"../../../framework/utils/Util": "Util",
		"./BaseProp": "BaseProp"
	}],
	MoveCar: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "7b786UtO4hAaZZZ7RL5F8j8", "MoveCar");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
			s = a.ccclass,
			c = a.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.point1 = null, t.point2 = null, t.speedNum = 1, t.lastPosition = null, t.boardOnNode = [], t.moveNodeNames = ["FireMale", "IceFemale"], t
				}
				return i(t, e), t.prototype.start = function() {
					this.lastPosition = this.node.position;
					var e = cc.tween().to(this.speedNum, {
							position: this.point2
						}),
						t = cc.tween().to(this.speedNum, {
							position: this.point1
						}),
						o = cc.tween().sequence(e, t);
					cc.tween(this.node).repeatForever(o).start()
				}, t.prototype.onBeginContact = function(e, t, o) {
					var n = o.node;
					this.checkMove(n.name) && -1 == this.boardOnNode.indexOf(n) && this.boardOnNode.push(n)
				}, t.prototype.onEndContact = function(e, t, o) {
					var n = o.node;
					if (this.checkMove(n.name)) {
						var i = this.boardOnNode.indexOf(n); - 1 != i && this.boardOnNode.splice(i, 1)
					}
				}, t.prototype.checkMove = function(e) {
					for (var t = 0; t < this.moveNodeNames.length; t++)
						if (e.indexOf(this.moveNodeNames[t]) > -1) return !0;
					return !1
				}, t.prototype.update = function() {
					for (var e = this.node.position.x - this.lastPosition.x, t = this.node.position.y - this.lastPosition.y, o = 0; o < this.boardOnNode.length; o++) {
						var n = this.boardOnNode[o],
							i = n.position;
						n.setPosition(cc.v2(i.x + e, i.y + t - 3))
					}
					this.lastPosition = this.node.position
				}, r([c(cc.Vec3)], t.prototype, "point1", void 0), r([c(cc.Vec3)], t.prototype, "point2", void 0), r([c], t.prototype, "speedNum", void 0), r([s], t)
			}(cc.Component);
		o.default = l, cc._RF.pop()
	}, {}],
	PausePopView: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "1a148HmYINLpZfThsE9scu9", "PausePopView");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../../../framework/assetsModule/AssetsMap"),
			s = e("../../../framework/BundleNames"),
			c = e("../../public/model/GameAudioContext"),
			l = e("../../public/obj/GameEventManage"),
			p = e("../../public/utils/PlayerUtils"),
			u = cc._decorator,
			d = u.ccclass,
			f = u.property,
			h = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.homeBtnNode = null, t.continueBtnNode = null, t.playerNodes = null, t
				}
				return i(t, e), t.prototype.onResetView = function() {
					e.prototype.onResetView.call(this), p.default.changeSkin(this.playerNodes, this.param.playerId)
				}, t.prototype.onRemoveToScene = function() {
					e.prototype.onRemoveToScene.call(this)
				}, t.prototype.addEvent = function() {
					e.prototype.addEvent.call(this), this.homeBtnNode.on(game.EngineEventType.NodeEvent.click, this.clickHome, this), this.continueBtnNode.on(game.EngineEventType.NodeEvent.click, this.clickContinue, this)
				}, t.prototype.removeEvent = function() {
					e.prototype.removeEvent.call(this), this.homeBtnNode.off(game.EngineEventType.NodeEvent.click, this.clickHome, this), this.continueBtnNode.off(game.EngineEventType.NodeEvent.click, this.clickContinue, this)
				}, t.prototype.clickHome = function() {
					c.default.click(), game.UIManager.instance.replaceModuleView(s.default.Start, a.default.StartBundle.prefabs.assetsList.MainModuleView)
				}, t.prototype.clickContinue = function() {
					c.default.click(), game.appFacade.sendNotification(l.default.CONTINUE_GAME), this.closeView(!0)
				}, t.prototype.closeView = function(t) {
					void 0 === t && (t = !1), e.prototype.closeView.call(this, t)
				}, r([f(cc.Node)], t.prototype, "homeBtnNode", void 0), r([f(cc.Node)], t.prototype, "continueBtnNode", void 0), r([f(cc.Node)], t.prototype, "playerNodes", void 0), r([d], t)
			}(game.BasePopView);
		o.default = h, cc._RF.pop()
	}, {
		"../../../framework/BundleNames": "BundleNames",
		"../../../framework/assetsModule/AssetsMap": "AssetsMap",
		"../../public/model/GameAudioContext": "GameAudioContext",
		"../../public/obj/GameEventManage": "GameEventManage",
		"../../public/utils/PlayerUtils": "PlayerUtils"
	}],
	PlayerUtils: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "d420bUGMU9M46VoTtyAGQRT", "PlayerUtils"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = e("../../../framework/assetsModule/AssetsMap"),
			i = e("../../../framework/BundleNames"),
			r = function() {
				function e() {}
				return e.changeSkin = function(e, t) {
					var o = e.getChildByName("player1"),
						r = "br_pf" + t;
					game.BundleManager.instance.getBundle(i.default.Public).get(n.default.PublicBundle.dragonAssets.assetsList[r]), o.getComponent(dragonBones.ArmatureDisplay).dragonAsset = game.BundleManager.instance.getBundle(i.default.Public).get(n.default.PublicBundle.dragonAssets.assetsList[r], dragonBones.DragonBonesAsset), o.getComponent(dragonBones.ArmatureDisplay).dragonAtlasAsset = game.BundleManager.instance.getBundle(i.default.Public).get(n.default.PublicBundle.dragonAtlasAssets.assetsList[r], dragonBones.DragonBonesAtlasAsset), o.getComponent(dragonBones.ArmatureDisplay).armatureName = "Armature";
					var a = e.getChildByName("player2"),
						s = "hr_pf" + t;
					a.getComponent(dragonBones.ArmatureDisplay).dragonAsset = game.BundleManager.instance.getBundle(i.default.Public).get(n.default.PublicBundle.dragonAssets.assetsList[s], dragonBones.DragonBonesAsset), a.getComponent(dragonBones.ArmatureDisplay).dragonAtlasAsset = game.BundleManager.instance.getBundle(i.default.Public).get(n.default.PublicBundle.dragonAtlasAssets.assetsList[s], dragonBones.DragonBonesAtlasAsset), a.getComponent(dragonBones.ArmatureDisplay).armatureName = "Armature"
				}, e
			}();
		o.default = r, cc._RF.pop()
	}, {
		"../../../framework/BundleNames": "BundleNames",
		"../../../framework/assetsModule/AssetsMap": "AssetsMap"
	}],
	Player: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "79992N/AyFJ+aGG8q3HRB83", "Player");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.PlayerDir = o.PlayerType = void 0;
		var a, s = e("../../../framework/assetsModule/AssetsMap"),
			c = e("../../../framework/BundleNames"),
			l = e("../../public/guide/Guide_1"),
			p = e("../../public/guide/Guide_2"),
			u = e("../../public/guide/Guide_3"),
			d = e("../../public/model/GameAudioContext"),
			f = e("../../public/obj/GameEventManage"),
			h = e("../model/GameNodePool"),
			y = e("../model/PropManage"),
			g = e("../prop/Door"),
			m = e("./Foot"),
			_ = cc._decorator,
			v = _.ccclass;
		_.property,
			function(e) {
				e[e.ICE = 0] = "ICE", e[e.FIRE = 1] = "FIRE"
			}(o.PlayerType || (o.PlayerType = {})),
			function(e) {
				e[e.STANT = 0] = "STANT", e[e.LEFT = 1] = "LEFT", e[e.RIGHT = 2] = "RIGHT"
			}(a = o.PlayerDir || (o.PlayerDir = {}));
		var P = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.footNode = null, t.isJump = !1, t.playerDir = a.STANT, t.jumpHeight = 550, t.moveSpeed = 250, t.jumpMoveSpeed = 300, t.bodyDragonDisplayed = null, t.rigibody = null, t.footEmpty = !0, t.isPushing = !1, t.isDooring = !1, t.isClickJump = !1, t.isFootPushing = !1, t.isPushTime = -1, t.isBodyWall = !1, t.isFootBox = !1, t.footBoxNode = null, t.isWin = !1, t.runEffectTime = -1, t.speedCutFoc = 25, t
			}
			return i(t, e), t.prototype.start = function() {
				this.footNode = this.node.getChildByName("foot"), this.isJump = !0, this.isPushing = !1, this.bodyDragonDisplayed = this.node.getComponent(dragonBones.ArmatureDisplay), this.rigibody = this.node.getComponent(cc.RigidBody), this.bodyDragonDisplayed.playAnimation("stand", 0), this.addEvent()
			}, t.prototype.addEvent = function() {
				this.node.on(m.default.ON_CONTACT_WALL, this.onFootBeginContact, this), this.node.on(m.default.ON_LEAVE_WALL, this.onFootEndContact, this)
			}, t.prototype.removeEvent = function() {
				this.node.off(m.default.ON_CONTACT_WALL, this.onFootBeginContact, this), this.node.off(m.default.ON_LEAVE_WALL, this.onFootEndContact, this)
			}, t.prototype.onBeginContact = function(e, t, o) {
				1 === t.tag && (o.node.name === y.PropTypes.Box ? this.isPushing = !0 : "map" === o.node.name && (this.isBodyWall = !0))
			}, t.prototype.onEndContact = function(e, t, o) {
				1 === t.tag && (o.node.name === y.PropTypes.Box ? this.isPushing = !1 : "map" === o.node.name && (this.isBodyWall = !1))
			}, t.prototype.onFootBeginContact = function(e) {
				if (this.footEmpty = !1, this.isJump = !0, this.bodyDragonDisplayed.animationName && "jump" !== this.bodyDragonDisplayed.animationName || this.bodyDragonDisplayed.playAnimation("stand", 0), e.getUserData().node.name === y.PropTypes.Box && (this.isFootBox = !0, this.footBoxNode = e.getUserData().node), "map" === e.getUserData().node.name) {
					var t = h.default.instance.getFloorEffect();
					this.node.parent.addChild(t), t.position = this.node.position;
					var o = t.getComponent(dragonBones.ArmatureDisplay);
					o.playAnimation("newAnimation", 1), o.once(dragonBones.EventObject.COMPLETE, function() {
						h.default.instance.putFloorEffect(t)
					})
				}
			}, t.prototype.onFootEndContact = function(e) {
				this.isJump = !1, e.getUserData().node.name === y.PropTypes.Box && (this.isFootBox = !1, this.footBoxNode = null)
			}, t.prototype.onCollisionEnter = function(e) {
				"spine" === e.node.name && game.appFacade.sendNotification(f.default.DIE_PLAYER, {
					playerNode: this.node
				})
			}, t.prototype.runApi = function(e) {
				this.isWin || this.playerDir !== e && (d.default.click(), this.playerDir = e, e === a.LEFT ? this.node.scaleX = -Math.abs(this.node.scaleX) : this.node.scaleX = Math.abs(this.node.scaleX))
			}, t.prototype.stopApi = function() {
				this.isWin || (this.playerDir === a.LEFT ? game.appFacade.sendNotification(l.default.OK) : game.appFacade.sendNotification(p.default.OK), this.playerDir = a.STANT, this.rigibody.linearVelocity.x = 0, this.isJump && this.bodyDragonDisplayed.playAnimation("stand", 0))
			}, t.prototype.stopJumpApi = function() {
				this.isClickJump = !1, game.appFacade.sendNotification(u.default.OK)
			}, t.prototype.jumpApi = function() {
				this.isWin || (this.isClickJump || d.default.click(), this.isClickJump = !0)
			}, t.prototype.startWaveApi = function() {
				this.isDooring = !0
			}, t.prototype.soptWaveApi = function() {
				this.isDooring = !1
			}, t.prototype.changeSkinApi = function(e) {
				var t = (this.node.name === y.PlayerNodeName.IcePlayer ? "br" : "hr") + "_pf" + e;
				this.bodyDragonDisplayed.dragonAsset = game.BundleManager.instance.getBundle(c.default.Public).get(s.default.PublicBundle.dragonAssets.assetsList[t], dragonBones.DragonBonesAsset), this.bodyDragonDisplayed.dragonAtlasAsset = game.BundleManager.instance.getBundle(c.default.Public).get(s.default.PublicBundle.dragonAtlasAssets.assetsList[t], dragonBones.DragonBonesAtlasAsset), this.bodyDragonDisplayed.getComponent(dragonBones.ArmatureDisplay).armatureName = "Armature"
			}, t.prototype.winApi = function(e, t) {
				var o = this;
				void 0 === t && (t = null), this.rigibody.active = !1, e.getComponent(g.default).closeLock = !0, this.isWin = !0;
				var n = e.convertToWorldSpaceAR(cc.Vec3.ZERO),
					i = this.node.convertToWorldSpaceAR(cc.Vec3.ZERO),
					r = Math.abs(n.x - i.x),
					a = n.x < i.x ? -1 : 1;
				r > 10 && (this.bodyDragonDisplayed.playAnimation("run", 1), this.node.setPosition(this.node.position.x + r * a, this.node.position.y));
				var s = this.node.parent.convertToNodeSpaceAR(n);
				s.y += 10, this.scheduleOnce(function() {
					o.bodyDragonDisplayed.playAnimation("win", 1), d.default.cheer(), o.bodyDragonDisplayed.once(dragonBones.EventObject.COMPLETE, function() {
						o.bodyDragonDisplayed.playAnimation("run", 0), o.node.scale = Math.abs(o.node.scale), cc.tween(o.node).parallel(cc.tween().to(2, {
							position: s
						}), cc.tween().to(2, {
							scale: 0
						})).call(function() {
							t && t()
						}).start()
					})
				}, .2)
			}, t.prototype.update = function() {
				this.isWin || (this.footNode.setPosition(cc.Vec3.ZERO), this.footPushBox(), this.runAction(), this.isClickJump && this.jumpOpearAction(), this.playerDir !== a.STANT && this.isJump || (this.runEffectTime = -1), this.isJump || this.playerDir !== a.STANT || this.jumpAction(), this.isDooring && this.playerDir === a.STANT && (this.bodyDragonDisplayed.animationName && "wave" == this.bodyDragonDisplayed.animationName || this.bodyDragonDisplayed.playAnimation("wave", 0)), this.playerDir === a.STANT && this.stopSlidActive())
			}, t.prototype.runAction = function() {
				if (this.playerDir === a.LEFT || this.playerDir === a.RIGHT) {
					var e = this.isJump ? this.moveSpeed : this.jumpMoveSpeed,
						t = this.playerDir === a.LEFT ? -e : e;
					this.rigibody.linearVelocity = cc.v2(t, this.rigibody.linearVelocity.y), this.isPushing || this.isFootPushing ? this.bodyDragonDisplayed.animationName && "push" == this.bodyDragonDisplayed.animationName || this.bodyDragonDisplayed.playAnimation("push", 0) : this.isJump ? this.isJump && (this.bodyDragonDisplayed.animationName && "run" == this.bodyDragonDisplayed.animationName || this.bodyDragonDisplayed.playAnimation("run", 0), this.runEffect()) : this.jumpAction()
				}
			}, t.prototype.runEffect = function() {
				var e = (new Date).getTime();
				if (-1 !== this.runEffectTime) {
					if (!(e - this.runEffectTime < 500)) {
						this.runEffectTime = -1;
						var t = h.default.instance.getRunEffect(),
							o = this.playerDir === a.LEFT ? 1 : -1;
						t.scaleX = o, this.node.parent.addChild(t), t.position = this.node.position;
						var n = t.getComponent(dragonBones.ArmatureDisplay);
						n.playAnimation("hcdh", 1), n.once(dragonBones.EventObject.COMPLETE, function() {
							h.default.instance.putRunEffect(t)
						})
					}
				} else this.runEffectTime = e
			}, t.prototype.jumpOpearAction = function() {
				if (this.isJump) {
					this.isJump = !1, this.node.name === y.PlayerNodeName.IcePlayer ? d.default.iceJump() : d.default.fireJump();
					var e = this.rigibody.linearVelocity;
					this.rigibody.linearVelocity = cc.v2(e.x, this.jumpHeight)
				}
			}, t.prototype.footPushBox = function() {
				if (this.isFootBox && this.isBodyWall && cc.isValid(this.footBoxNode)) {
					var e = (new Date).getTime();
					if (-1 === this.isPushTime) return void(this.isPushTime = e);
					if (e - this.isPushTime < 100) return;
					this.isFootPushing = !0;
					var t = this.footBoxNode.getComponent(cc.RigidBody);
					this.playerDir === a.LEFT ? t.linearVelocity = cc.v2(.6 * this.moveSpeed, 0) : this.playerDir === a.RIGHT && (t.linearVelocity = cc.v2(.6 * -this.moveSpeed, 0))
				} else this.isPushTime = -1, this.isFootPushing = !1
			}, t.prototype.jumpAction = function() {
				this.bodyDragonDisplayed.animationName && "jump" == this.bodyDragonDisplayed.animationName || this.bodyDragonDisplayed.playAnimation("jump", 0)
			}, t.prototype.stopSlidActive = function() {
				var e = this.rigibody.linearVelocity;
				if (0 !== e.x) {
					var t = this.speedCutFoc * (e.x < 0 ? 1 : -1),
						o = e.x + t;
					o = t < 0 ? Math.max(0, o) : Math.min(0, o), e.x = o, this.rigibody.linearVelocity = e
				}
			}, t.prototype.onDestroy = function() {
				this.removeEvent()
			}, r([v], t)
		}(cc.Component);
		o.default = P, cc._RF.pop()
	}, {
		"../../../framework/BundleNames": "BundleNames",
		"../../../framework/assetsModule/AssetsMap": "AssetsMap",
		"../../public/guide/Guide_1": "Guide_1",
		"../../public/guide/Guide_2": "Guide_2",
		"../../public/guide/Guide_3": "Guide_3",
		"../../public/model/GameAudioContext": "GameAudioContext",
		"../../public/obj/GameEventManage": "GameEventManage",
		"../model/GameNodePool": "GameNodePool",
		"../model/PropManage": "PropManage",
		"../prop/Door": "Door",
		"./Foot": "Foot"
	}],
	PopupManager: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "cfe60ngcg5MaIC4lwRuzhXp", "PopupManager");
		var n = this && this.__awaiter || function(e, t, o, n) {
				return new(o || (o = Promise))(function(i, r) {
					function a(e) {
						try {
							c(n.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(n.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
							e(t)
						})).then(a, s)
					}
					c((n = n.apply(e, t || [])).next())
				})
			},
			i = this && this.__generator || function(e, t) {
				var o, n, i, r, a = {
					label: 0,
					sent: function() {
						if (1 & i[0]) throw i[1];
						return i[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(e) {
					return function(t) {
						return c([e, t])
					}
				}

				function c(r) {
					if (o) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
						switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
							case 0:
							case 1:
								i = r;
								break;
							case 4:
								return a.label++, {
									value: r[1],
									done: !1
								};
							case 5:
								a.label++, n = r[1], r = [0];
								continue;
							case 7:
								r = a.ops.pop(), a.trys.pop();
								continue;
							default:
								if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
									a = 0;
									continue
								}
								if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
									a.label = r[1];
									break
								}
								if (6 === r[0] && a.label < i[1]) {
									a.label = i[1], i = r;
									break
								}
								if (i && a.label < i[2]) {
									a.label = i[2], a.ops.push(r);
									break
								}
								i[2] && a.ops.pop(), a.trys.pop();
								continue
						}
						r = t.call(e, a)
					} catch (s) {
						r = [6, s], n = 0
					} finally {
						o = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var r = e("../assetsModule/AssetsManager"),
			a = e("../assetsModule/AssetsMap"),
			s = e("../assetsModule/BundleManager"),
			c = e("../base/mediators/GameSceneMediator"),
			l = e("../BundleNames"),
			p = function() {
				function e() {
					this._bundle = null, this._alreadyPopupList = []
				}
				return Object.defineProperty(e, "instance", {
					get: function() {
						return e._instance || (e._instance = new e), e._instance
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.init = function() {
					var e = this;
					this.loadBundle().then(function() {
						return e.bundleLoadSuccess(), e.loadAssets()
					}).then(function() {
						e.assetsLoadSuccess()
					})
				}, e.prototype.loadBundle = function() {
					var e = this;
					return new Promise(function(t, o) {
						return n(e, void 0, void 0, function() {
							return i(this, function() {
								return s.default.instance.loadBundle(l.default.Popup, null, function(e) {
									t(e)
								}, function(e) {
									o(e)
								}), [2]
							})
						})
					})
				}, e.prototype.loadAssets = function() {
					var e = this;
					return new Promise(function(t, o) {
						return n(e, void 0, void 0, function() {
							var e, n, r, s, c, l;
							return i(this, function(i) {
								switch (i.label) {
									case 0:
										for (n in i.trys.push([0, 5, , 6]), e = [], a.default.PopupMap) e.push(n);
										r = 0, i.label = 1;
									case 1:
										return r < e.length ? (s = e[r], c = a.default.PopupMap[s], [4, this.loadPopupAssets(c, !0)]) : [3, 4];
									case 2:
										i.sent(), i.label = 3;
									case 3:
										return r++, [3, 1];
									case 4:
										return t(null), [3, 6];
									case 5:
										return l = i.sent(), o(l), [3, 6];
									case 6:
										return [2]
								}
							})
						})
					})
				}, e.prototype.loadPopupAssets = function(e, t) {
					var o = this;
					if (!e.name) throw new Error("\u5f39\u7a97\u672a\u914d\u7f6ename\u5c5e\u6027\uff0c\u8bf7\u68c0\u67e5\u540e\u518d\u8bd5");
					return new Promise(function(a, s) {
						return n(o, void 0, void 0, function() {
							var o, n, c, l, p, u, d, f, h, y, g, m, _, v, P;
							return i(this, function(i) {
								switch (i.label) {
									case 0:
										if (-1 !== this._alreadyPopupList.indexOf(e.name)) return a(null), [2];
										if (o = {}, (n = {
												assetsType: cc.Prefab,
												assetsList: []
											}).assetsList.push(e.assetsPath), o.prefabs = n, c = e.preAssets)
											for (l in c) {
												for (d in p = c[l], u = o[l] || {
														assetsType: p.assetsType,
														assetsList: []
													}, p.assetsList) u.assetsList.push(p.assetsList[d]);
												o[l] = u
											}
										i.label = 1;
									case 1:
										for (h in i.trys.push([1, 6, , 7]), f = [], o) f.push(h);
										y = 0, i.label = 2;
									case 2:
										return y < f.length ? (g = f[y], m = o[g], _ = m.assetsType, v = m.assetsList, [4, r.default.instance.loadResArray(this._bundle, v, _, t)]) : [3, 5];
									case 3:
										i.sent(), i.label = 4;
									case 4:
										return y++, [3, 2];
									case 5:
										return t ? this.loadPopupAssets(e, !1).then(function() {
											a(null)
										}).catch(function(e) {
											s(e)
										}) : (a(null), this._alreadyPopupList.push(e.name)), [3, 7];
									case 6:
										return P = i.sent(), s(P), [3, 7];
									case 7:
										return [2]
								}
							})
						})
					})
				}, e.prototype.bundleLoadSuccess = function() {
					this._bundle = s.default.instance.getBundle(l.default.Popup), this._bundleLoadCallback && this._bundleLoadCallback(), this._bundleLoadCallback = null
				}, e.prototype.assetsLoadSuccess = function() {
					game.log("assetsLoadSuccess")
				}, e.prototype.showPopView = function(e, t, o, n) {
					var i = this;
					return this._bundle ? -1 === this._alreadyPopupList.indexOf(e.name) ? (game.UIManager.instance.showLoading(99999), void this.loadPopupAssets(e, !0).then(function() {
						game.UIManager.instance.hideLoading(), i.showPopView(e, t, o || !1, n || !1)
					})) : void game.appFacade.retrieveMediator(c.default.NAME).pushPopupView(e, t, o, n) : (game.UIManager.instance.showLoading(10, function() {
						i._bundleLoadCallback = null
					}), void(this._bundleLoadCallback = function() {
						game.UIManager.instance.hideLoading(), i.showPopView(e, t, o, n)
					}))
				}, e.prototype.removePopupView = function(e, t) {
					game.appFacade.retrieveMediator(c.default.NAME).removePopupView(e, t || !1)
				}, e._instance = null, e
			}();
		o.default = p, cc._RF.pop()
	}, {
		"../BundleNames": "BundleNames",
		"../assetsModule/AssetsManager": "AssetsManager",
		"../assetsModule/AssetsMap": "AssetsMap",
		"../assetsModule/BundleManager": "BundleManager",
		"../base/mediators/GameSceneMediator": "GameSceneMediator"
	}],
	PrivacyTreatyView: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "4f03cnJssRC+IMe/ycMqoQt", "PrivacyTreatyView");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../../../framework/LocalItemName"),
			s = e("../../../framework/utils/Util"),
			c = cc._decorator,
			l = c.ccclass,
			p = c.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.node_btn_agree = null, t.node_btn_not_agree = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					this.isCache = !1
				}, t.prototype.addEvent = function() {
					e.prototype.addEvent.call(this), this.node_btn_agree.on(game.EngineEventType.NodeEvent.click, this.onClickAgree, this), this.node_btn_not_agree.on(game.EngineEventType.NodeEvent.click, this.onClickNotAgree, this)
				}, t.prototype.removeEvent = function() {
					e.prototype.removeEvent.call(this), this.node_btn_agree.off(game.EngineEventType.NodeEvent.click, this.onClickAgree, this), this.node_btn_not_agree.off(game.EngineEventType.NodeEvent.click, this.onClickNotAgree, this)
				}, t.prototype.onClickAgree = function() {
					this.closeView(!0), s.default.setItem(a.default.IS_AGREE_PRIVACY_TREATY, "true")
				}, t.prototype.onClickNotAgree = function() {
					cc.game.end()
				}, r([p(cc.Node)], t.prototype, "node_btn_agree", void 0), r([p(cc.Node)], t.prototype, "node_btn_not_agree", void 0), r([l], t)
			}(game.BasePopView);
		o.default = u, cc._RF.pop()
	}, {
		"../../../framework/LocalItemName": "LocalItemName",
		"../../../framework/utils/Util": "Util"
	}],
	PropManage: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "c203615PCNMnYaPX92tHzV/", "PropManage"), Object.defineProperty(o, "__esModule", {
				value: !0
			}), o.PlayerNodeName = o.PropTypes = void 0,
			function(e) {
				e.Box = "Box", e.RedDiamond = "RedDiamond", e.BlueDiamond = "BlueDiamond", e.RedDoor = "RedDoor", e.BlueDoor = "BlueDoor", e.Water = "Water", e.Gold = "Gold"
			}(o.PropTypes || (o.PropTypes = {})),
			function(e) {
				e.IcePlayer = "IceFemale", e.FirePlayer = "FireMale"
			}(o.PlayerNodeName || (o.PlayerNodeName = {})), cc._RF.pop()
	}, {}],
	ReLifePopView: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "61c1beYReNPLZH1TpRyGwX/", "ReLifePopView");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../../public/model/GameAudioContext"),
			s = e("../../public/obj/GameEventManage"),
			c = e("../../public/SSJJRewardedVideo"),
			l = cc._decorator,
			p = l.ccclass,
			u = l.property,
			d = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.relifeBtn = null, t.skipBtn = null, t.btnContinueTouTiao = null, t
				}
				return i(t, e), t.prototype.addEvent = function() {
					e.prototype.addEvent.call(this), this.continueRender(), this.relifeBtn.on(game.EngineEventType.NodeEvent.click, this.clickRelife, this), this.skipBtn.on(game.EngineEventType.NodeEvent.click, this.clickSkip, this), this.btnContinueTouTiao.on(game.EngineEventType.NodeEvent.click, this.clickSkip, this)
				}, t.prototype.removeEvent = function() {
					e.prototype.removeEvent.call(this), this.relifeBtn.off(game.EngineEventType.NodeEvent.click, this.clickRelife, this), this.skipBtn.off(game.EngineEventType.NodeEvent.click, this.clickSkip, this), this.btnContinueTouTiao.off(game.EngineEventType.NodeEvent.click, this.clickSkip, this)
				}, t.prototype.continueRender = function() {
					this.btnContinueTouTiao.active = !0, this.skipBtn.active = !1
				}, t.prototype.clickRelife = function() {
					var t = this;
					a.default.click(), c.default.showRewardedVideo(null, null, function() {
						game.appFacade.sendNotification(s.default.RELIFE), e.prototype.closeView.call(t, !0)
					})
				}, t.prototype.clickSkip = function() {
					a.default.click(), e.prototype.closeView.call(this, !0), game.appFacade.sendNotification(s.default.FAILURE_RES)
				}, r([u(cc.Node)], t.prototype, "relifeBtn", void 0), r([u(cc.Node)], t.prototype, "skipBtn", void 0), r([u(cc.Node)], t.prototype, "btnContinueTouTiao", void 0), r([p], t)
			}(game.BasePopView);
		o.default = d, cc._RF.pop()
	}, {
		"../../public/SSJJRewardedVideo": "SSJJRewardedVideo",
		"../../public/model/GameAudioContext": "GameAudioContext",
		"../../public/obj/GameEventManage": "GameEventManage"
	}],
	RockerSwitch: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "6d42dVOW/hB250gNGL6YSFt", "RockerSwitch");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("./BaseProp"),
			s = cc._decorator,
			c = s.ccclass,
			l = s.property,
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.isOpen = !1, t.rokerNode = null, t.targetNode = null, t.propColor = a.PropColor.RED, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					this.isOpen ? this.rokerNode.angle = 30 : this.rokerNode.angle = -30, this.rokerNode.getComponent(cc.RigidBody).onBeginContact = this.onBeginRokerContact.bind(this), this.rokerNode.getComponent(cc.RigidBody).onEndContact = this.onEndRokerContact.bind(this);
					var e = this.node.getChildByName("swutch_bg"),
						t = cc.Color.WHITE;
					t = cc.Color.fromHEX(t, this.colors[this.propColor]), this.rokerNode.color = t, e.color = t
				}, t.prototype.onBeginRokerContact = function(e, t, o) {
					"bolt" === o.node.name && this.targetNode.getComponent(a.default).openApi()
				}, t.prototype.onEndRokerContact = function(e, t, o) {
					"bolt" === o.node.name && this.targetNode.getComponent(a.default).closeApi()
				}, r([l], t.prototype, "isOpen", void 0), r([l(cc.Node)], t.prototype, "rokerNode", void 0), r([l(cc.Node)], t.prototype, "targetNode", void 0), r([l({
					type: cc.Enum(a.PropColor)
				})], t.prototype, "propColor", void 0), r([c], t)
			}(a.default);
		o.default = p, cc._RF.pop()
	}, {
		"./BaseProp": "BaseProp"
	}],
	SSJJRewardedVideo: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "44b2efvDSVIXLO0NLSI8WPM", "SSJJRewardedVideo"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = function() {
			function e() {}
			return e.showRewardedVideo = function(e, t, o) {
                if (window.ArcadeH5 && window.ArcadeH5.rewardedAd)
                    window.ArcadeH5.rewardedAd(e, t, o);
                else { console.warn("[Arcade Ads] Bridge unavailable: reward blocked"); t && t(); }
            }, e
		}();
		o.default = n, cc._RF.pop()
	}, {}],
	SettlePopView: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "0c244/FDiNB0IKaPwrS1Pw5", "SettlePopView");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../../../framework/assetsModule/AssetsMap"),
			s = e("../../../framework/BundleNames"),
			c = e("../../../framework/GlobalParam"),
			l = e("../../../framework/LocalItemName"),
			p = e("../../../framework/utils/Util"),
			u = e("../../public/model/GameAudioContext"),
			d = e("../../public/model/LoginProxy"),
			f = e("../../public/utils/PlayerUtils"),
			h = cc._decorator,
			y = h.ccclass,
			g = h.property,
			m = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.successTitleNode = null, t.failureTitleNode = null, t.stars = [], t.goldLabel = null, t.timeLabel = null, t.residueLabel = null, t.restartBtn = null, t.homeBnt = null, t.nextBtn = null, t.playerNodes = null, t.btnShare = null, t.goldAward = 0, t._gvActive = !1, t._gvScoreResult = null, t._gvScoreQueued = !1, t._gvScoreShown = !1, t._gvScoreClosed = !0, t._gvStarsDone = !1, t._gvGoldDone = !1, t._gvNextAction = null, t
				}
				return i(t, e), t.prototype.onResetView = function() {
					var t = this;
					e.prototype.onResetView.call(this), this.btnShare.active = !1;
                    this._gvActive = !0, this._gvScoreResult = null, this._gvScoreQueued = !1,
                    this._gvScoreShown = !1, this._gvScoreClosed = !0, this._gvStarsDone = !1,
                    this._gvGoldDone = !1, this._gvNextAction = null;
					for (var o = 0; o < this.stars.length; o++) this.stars[o].active = !1, cc.Tween.stopAllByTarget(this.stars[o]);
					var n = this.param;
					f.default.changeSkin(this.playerNodes, n.playerId), n.isSuccess ? u.default.success() : u.default.failure(), this.showAndHideNode(n.isSuccess), this.goldAward = this.param.gold, this.goldAward += this.param.isSuccess ? 100 : 50, this.goldLabel.string = this.goldAward.toString(), this.timeLabel.string = this.showTime(n.time);
					var i = game.appFacade.retrieveProxy(d.default.NAME),
						r = i.getUserProperty(l.default.GOLD);
					if (this.residueLabel.string = r.toString(), n.currentLevel >= i.getUserProperty(l.default.CURRENT_LEVEL) && n.isSuccess && n.currentLevel < c.default.maxLevel && i.setUserProperty(l.default.CURRENT_LEVEL, n.currentLevel + 1), n.isSuccess) {
						o = this.showStar(n.time, function() {
                            t.stopRecorder();
                            t._gvStarsDone = !0;
                            t.tryArcadeScore()
						});
						var a = i.getUserProperty(l.default.LEVEL_RECORD);
						o > a[n.currentLevel - 1] && (a[n.currentLevel - 1] = o, i.setUserProperty(l.default.LEVEL_RECORD, a))
					} else this.stopRecorder();
                    // Save the victory and highest per-level score immediately, but
                    // DO NOT open Arcade yet: stars and flying coins are still animating.
                    if(n.isSuccess&&window.ArcadeH5&&window.ArcadeH5.completeLevel){
                        this._gvScoreResult = window.ArcadeH5.completeLevel({
                            isSuccess:true,level:n.currentLevel,time:n.time,gold:n.gold,
                            redDiamond:n.redDiamond,blueDiamond:n.blueDiamond,
                            deaths:n.deaths,playerId:n.playerId
                        },{deferPopup:true});
                        this._gvScoreClosed = !this._gvScoreResult;
                    }
                    this.flyGold();
				}, t.prototype.stopRecorder = function() {}, t.prototype.tryArcadeScore = function() {
                    var t=this;
                    if(!this._gvActive||!this._gvScoreResult||!this._gvStarsDone||
                       !this._gvGoldDone||this._gvScoreShown||this._gvScoreQueued)return;
                    this._gvScoreQueued=!0;
                    // Give the fully rendered results a moment on screen before the overlay.
                    this.scheduleOnce(function(){
                        t._gvScoreQueued=!1;
                        if(!t._gvActive||!t.node||!t.node.activeInHierarchy||t._gvScoreShown)return;
                        t._gvScoreShown=!0;
                        var finished=function(){
                            if(t._gvScoreClosed)return;
                            t._gvScoreClosed=!0;
                            var action=t._gvNextAction;
                            t._gvNextAction=null;
                            if(action&&t._gvActive)action();
                        };
                        if(window.ArcadeH5&&window.ArcadeH5.showScorePopup)
                            window.ArcadeH5.showScorePopup(t._gvScoreResult.totalScore,finished);
                        else finished();
                    },1);
                }, t.prototype.afterArcadeScore = function(action){
                    if(this._gvScoreResult&&!this._gvScoreClosed){
                        this._gvNextAction=action;
                        return;
                    }
                    action();
                }, t.prototype.onRemoveToScene = function() {
                    this._gvActive=!1, this._gvNextAction=null, this._gvScoreResult=null;
					e.prototype.onRemoveToScene.call(this)
				}, t.prototype.addEvent = function() {
					e.prototype.addEvent.call(this), this.restartBtn.on(game.EngineEventType.NodeEvent.click, this.clickReStartBtn, this), this.nextBtn.on(game.EngineEventType.NodeEvent.click, this.clickNext, this), this.homeBnt.on(game.EngineEventType.NodeEvent.click, this.clickHome, this), this.btnShare.on(game.EngineEventType.NodeEvent.click, this.clickShard, this)
				}, t.prototype.removeEvent = function() {
					e.prototype.removeEvent.call(this);
					for (var t = 0; t < this.stars.length; t++) cc.Tween.stopAllByTarget(this.stars[t]);
					this.restartBtn.off(game.EngineEventType.NodeEvent.click, this.clickReStartBtn, this), this.nextBtn.off(game.EngineEventType.NodeEvent.click, this.clickNext, this), this.homeBnt.off(game.EngineEventType.NodeEvent.click, this.clickHome, this), this.btnShare.off(game.EngineEventType.NodeEvent.click, this.clickShard, this)
				}, t.prototype.clickShard = function() {}, t.prototype.clickNext = function() {
                    var t=this;
                    this.afterArcadeScore(function(){
                        if (u.default.click(), game.appFacade.retrieveProxy(d.default.NAME).checkTili()) {
                            var e = t.param.currentLevel >= c.default.maxLevel ? 1 : t.param.currentLevel + 1;
                            game.UIManager.instance.replaceModuleView(s.default.Game, a.default.GameBundle.prefabs.assetsList.GamePreMoudleView, {
                                level: e
                            })
                        }
                    })
				}, t.prototype.clickReStartBtn = function() {
					u.default.click(), game.UIManager.instance.replaceModuleView(s.default.Game, a.default.GameBundle.prefabs.assetsList.GamePreMoudleView, {
						level: this.param.currentLevel
					})
				}, t.prototype.clickHome = function() {
                    this.afterArcadeScore(function(){
					    u.default.click(), game.UIManager.instance.replaceModuleView(s.default.Start, a.default.StartBundle.prefabs.assetsList.MainModuleView)
                    })
				}, t.prototype.showAndHideNode = function(e) {
					this.successTitleNode.active = e, this.failureTitleNode.active = !e, this.nextBtn.active = e, this.restartBtn.active = !e
				}, t.prototype.showStar = function(e, t) {
					var o = this,
						n = 1;
					e <= 50 ? n = 3 : e <= 110 && (n = 2);
					for (var i = function(e) {
							r.scheduleOnce(function() {
								o.stars[e].active = !0, cc.tween(o.stars[e]).to(.2, {
									scale: 1.2
								}).to(.3, {
									scale: 1
								}).call(function() {
									e === n - 1 && t && t()
								}).start()
							}, .5 * e)
						}, r = this, a = 0; a < n; a++) i(a);
					return n
				}, t.prototype.showTime = function(e) {
					var t = Math.floor(e / 60),
						o = e % 60;
					return (t < 10 ? "0" + t : t.toString()) + ":" + (o < 10 ? "0" + o : o.toString())
				}, t.prototype.flyGold = function() {
                    var e=this;
                    if(this.goldAward<=0){
                        this._gvGoldDone=!0;
                        this.tryArcadeScore();
                        return;
                    }
                    p.default.flyGold(this.goldLabel.node,this.residueLabel.node,function(){
                        var t=game.appFacade.retrieveProxy(d.default.NAME);
                        t.opearCoin(e.goldAward);
                        e.residueLabel.string=t.getUserProperty(l.default.GOLD).toString();
                        e._gvGoldDone=!0;
                        e.tryArcadeScore()
                    })
				}, r([g(cc.Node)], t.prototype, "successTitleNode", void 0), r([g(cc.Node)], t.prototype, "failureTitleNode", void 0), r([g([cc.Node])], t.prototype, "stars", void 0), r([g(cc.Label)], t.prototype, "goldLabel", void 0), r([g(cc.Label)], t.prototype, "timeLabel", void 0), r([g(cc.Label)], t.prototype, "residueLabel", void 0), r([g(cc.Node)], t.prototype, "restartBtn", void 0), r([g(cc.Node)], t.prototype, "homeBnt", void 0), r([g(cc.Node)], t.prototype, "nextBtn", void 0), r([g(cc.Node)], t.prototype, "playerNodes", void 0), r([g(cc.Node)], t.prototype, "btnShare", void 0), r([y], t)
			}(game.BasePopView);
		o.default = m, cc._RF.pop()
	}, {
		"../../../framework/BundleNames": "BundleNames",
		"../../../framework/GlobalParam": "GlobalParam",
		"../../../framework/LocalItemName": "LocalItemName",
		"../../../framework/assetsModule/AssetsMap": "AssetsMap",
		"../../../framework/utils/Util": "Util",
		"../../public/model/GameAudioContext": "GameAudioContext",
		"../../public/model/LoginProxy": "LoginProxy",
		"../../public/utils/PlayerUtils": "PlayerUtils"
	}],
	ShopPopView: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "c1a82EGnYBFEoZxUV0BPk2e", "ShopPopView");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../../../framework/assetsModule/AssetsMap"),
			s = e("../../../framework/BundleNames"),
			c = e("../../../framework/LocalItemName"),
			l = e("../../../framework/utils/Util"),
			p = e("../../public/model/LoginProxy"),
			u = e("../../public/obj/GameEventManage"),
			d = e("../../public/utils/PlayerUtils"),
			f = cc._decorator,
			h = f.ccclass,
			y = f.property,
			g = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.itemNodes = [], t.showItemPlayer = null, t.goldNum = null, t.addGoldBtn = null, t.playerGold = 3e3, t.itemBtns = [], t.itemBoxs = [], t.clickItemBoxEvents = [], t.clickItemBtnEvents = [], t
				}
				return i(t, e), t.prototype.onResetView = function() {
					e.prototype.onResetView.call(this), this.itemBtns = [], this.itemBoxs = [], this.rederAll(), this.rederGold()
				}, t.prototype.rederAll = function() {
					var e = this;
					this.itemNodes.forEach(function(t, o) {
						e.itemBtns.push(t.getChildByName("gold_btn")), e.itemBoxs.push(t.getChildByName("box")), e.renderItem(t, o)
					})
				}, t.prototype.renderItem = function(e, t) {
					var o = game.appFacade.retrieveProxy(p.default.NAME),
						n = e.getChildByName("gold_btn"),
						i = n.getChildByName("gold").getComponent(cc.Label),
						r = e.getChildByName("choose_box"),
						u = o.getUserProperty(c.default.MY_PLAYER);
					if (u.indexOf(t + 1) <= -1) i.string = this.playerGold.toString();
					else {
						var f = o.getUserProperty(c.default.GOOUT_ID);
						i.string = "", t + 1 === f ? (d.default.changeSkin(this.showItemPlayer, f), n.getComponent(cc.Sprite).spriteFrame = l.default.getSpriteFrame(s.default.Popup, a.default.PopupMap.ShopPopView.preAssets.textures.assetsList.use_btn), r.getComponent(cc.Sprite).spriteFrame = l.default.getSpriteFrame(s.default.Popup, a.default.PopupMap.ShopPopView.preAssets.textures.assetsList.choose_border)) : u.indexOf(t + 1) > -1 && (n.getComponent(cc.Sprite).spriteFrame = l.default.getSpriteFrame(s.default.Popup, a.default.PopupMap.ShopPopView.preAssets.textures.assetsList.buyed_btn), r.getComponent(cc.Sprite).spriteFrame = l.default.getSpriteFrame(s.default.Popup, a.default.PopupMap.ShopPopView.preAssets.textures.assetsList.unchoose_border))
					}
				}, t.prototype.addEvent = function() {
					var t = this;
					e.prototype.addEvent.call(this);
					for (var o = function(e) {
							var o = e + 1;
							n.clickItemBoxEvents[e] = function() {
								return t.clickBox(o)
							}, n.itemBoxs[e].on(cc.Node.EventType.TOUCH_START, n.clickItemBoxEvents[e], n), n.clickItemBtnEvents[e] = function() {
								return t.clickPlayerBtn(o)
							}, n.itemBtns[e].on(game.EngineEventType.NodeEvent.click, n.clickItemBtnEvents[e], n)
						}, n = this, i = 0; i < this.itemBoxs.length; i++) o(i);
					this.addGoldBtn.on(game.EngineEventType.NodeEvent.click, this.clickAddGoldBtn, this), game.appFacade.view.registerObserver(u.default.COIN_CHANGE, new puremvc.Observer(this.rederGold, this))
				}, t.prototype.removeEvent = function() {
					e.prototype.removeEvent.call(this);
					for (var t = 0; t < this.itemBoxs.length; t++) this.itemBoxs[t].off(cc.Node.EventType.TOUCH_START, this.clickItemBoxEvents[t], this), this.itemBtns[t].off(game.EngineEventType.NodeEvent.click, this.clickItemBoxEvents[t], this);
					this.addGoldBtn.off(game.EngineEventType.NodeEvent.click, this.clickAddGoldBtn, this), game.appFacade.view.removeObserver(u.default.COIN_CHANGE, this)
				}, t.prototype.clickAddGoldBtn = function() {
					game.PopupManager.instance.showPopView(a.default.PopupMap.AssetDeficiencyPopView, {
						type: 1
					}, !0, !0)
				}, t.prototype.rederGold = function() {
					var e = game.appFacade.retrieveProxy(p.default.NAME);
					this.goldNum.string = e.getUserProperty(c.default.GOLD).toString()
				}, t.prototype.clickBox = function(e) {
					var t = game.appFacade.retrieveProxy(p.default.NAME),
						o = t.getUserProperty(c.default.MY_PLAYER);
					if (o.indexOf(e) <= -1 && t.getUserProperty(c.default.GOLD) < this.playerGold) this.clickAddGoldBtn();
					else {
						if (t.getUserProperty(c.default.GOOUT_ID) !== e && o.indexOf(e) > -1) return t.setUserProperty(c.default.GOOUT_ID, e), game.appFacade.sendNotification(u.default.CHANGE_SKINE), void this.rederAll();
						d.default.changeSkin(this.showItemPlayer, e)
					}
				}, t.prototype.clickPlayerBtn = function(e) {
					var t = game.appFacade.retrieveProxy(p.default.NAME),
						o = t.getUserProperty(c.default.MY_PLAYER);
					if (!(o.indexOf(e) > -1 || o.indexOf(e) <= -1 && t.getUserProperty(c.default.GOLD) < this.playerGold)) {
						if (t.getUserProperty(c.default.GOOUT_ID) !== e && o.indexOf(e) > -1) return t.setUserProperty(c.default.GOOUT_ID, e), game.appFacade.sendNotification(u.default.CHANGE_SKINE), void this.rederAll();
						t.opearCoin(-this.playerGold), o.push(e), t.setUserProperty(c.default.MY_PLAYER, o), this.renderItem(this.itemNodes[e - 1], e - 1)
					}
				}, t.prototype.closeView = function(t) {
					void 0 === t && (t = !1), e.prototype.closeView.call(this, t)
				}, r([y([cc.Node])], t.prototype, "itemNodes", void 0), r([y(cc.Node)], t.prototype, "showItemPlayer", void 0), r([y(cc.Label)], t.prototype, "goldNum", void 0), r([y(cc.Node)], t.prototype, "addGoldBtn", void 0), r([h], t)
			}(game.BasePopView);
		o.default = g, cc._RF.pop()
	}, {
		"../../../framework/BundleNames": "BundleNames",
		"../../../framework/LocalItemName": "LocalItemName",
		"../../../framework/assetsModule/AssetsMap": "AssetsMap",
		"../../../framework/utils/Util": "Util",
		"../../public/model/LoginProxy": "LoginProxy",
		"../../public/obj/GameEventManage": "GameEventManage",
		"../../public/utils/PlayerUtils": "PlayerUtils"
	}],
	SignPopView: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "3acbdEXPw5PwJmtOWkElSXC", "SignPopView");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../../../framework/assetsModule/AssetsMap"),
			s = e("../../../framework/LocalItemName"),
			c = e("../../../framework/utils/Util"),
			l = e("../../public/model/GameAudioContext"),
			p = e("../../public/model/LoginProxy"),
			u = e("../../public/SSJJRewardedVideo"),
			d = cc._decorator,
			f = d.ccclass,
			h = d.property,
			y = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.signItems = [], t.directBtn = null, t.adBtn = null, t.signInfo = null, t.awards = [200, 400, 600, 800, 1e3, 1200, 1600], t
				}
				return i(t, e), t.prototype.onResetView = function() {
					e.prototype.onResetView.call(this), this.renderItem()
				}, t.prototype.addEvent = function() {
					e.prototype.addEvent.call(this), this.directBtn.on(game.EngineEventType.NodeEvent.click, this.clickDirectSign, this), this.adBtn.on(game.EngineEventType.NodeEvent.click, this.clickAdBtn, this)
				}, t.prototype.removeEvent = function() {
					e.prototype.removeEvent.call(this), this.directBtn.off(game.EngineEventType.NodeEvent.click, this.clickDirectSign, this), this.adBtn.off(game.EngineEventType.NodeEvent.click, this.clickAdBtn, this)
				}, t.prototype.renderItem = function() {
					this.signInfo = this.getSignDay(), 7 === this.signInfo.daySign && (this.adBtn.active = !1);
					for (var e = 1; e <= 7; e++)
						if (e > this.signInfo.daySign || e === this.signInfo.daySign && !this.signInfo.ifSign) {
							if (e >= 7) continue;
							this.waitSignRender(e)
						} else this.signedRender(e)
				}, t.prototype.clickDirectSign = function() {
					l.default.click(), this.signInfo.ifSign ? c.default.showToast("Đã đăng nhập hôm nay!") : (this.gainAward(!1), this.renderItem())
				}, t.prototype.clickAdBtn = function() {
					var e = this;
					l.default.click(), this.signInfo.ifSign ? c.default.showToast("Đã đăng nhập hôm nay!") : u.default.showRewardedVideo(null, null, function() {
						e.adSign()
					})
				}, t.prototype.adSign = function() {
					this.gainAward(!0), this.renderItem()
				}, t.prototype.gainAward = function(e) {
					if (!this.signInfo.ifSign) {
						var t = game.appFacade.retrieveProxy(p.default.NAME);
						if (7 === this.signInfo.daySign) {
							var o = t.getUnLockSkin();
							if (o.length > 0) {
								var n = o[c.default.randomFrom(0, o.length - 1)];
								return game.PopupManager.instance.showPopView(a.default.PopupMap.GainPopView, {
									playerId: n
								}, !0, !0), void this.save(t)
							}
						}
						var i = this.awards[this.signInfo.daySign - 1],
							r = e ? 2 * i : i;
						t.opearCoin(r), c.default.showToast("Nhận xu x" + r), this.save(t)
					}
				}, t.prototype.save = function(e) {
					var t = e.getUserProperty(s.default.SIGN_INFO);
					t.dayNum = this.signInfo.daySign, t.signTimestamp = (new Date).getTime(), e.setUserProperty(s.default.SIGN_INFO, t)
				}, t.prototype.waitSignRender = function(e) {
					this.signItems[e - 1].getChildByName("box2").active = !1, this.signItems[e - 1].getChildByName("box1").active = !0, this.signItems[e - 1].getChildByName("num").getComponent(cc.Label).string = "X" + this.awards[e - 1]
				}, t.prototype.signedRender = function(e) {
					this.signItems[e - 1].getChildByName("box2").active = !0, this.signItems[e - 1].getChildByName("box1").active = !1, this.signItems[e - 1].getChildByName("ok").active = !0, 7 !== e && (this.signItems[e - 1].getChildByName("num").getComponent(cc.Label).string = "X" + this.awards[e - 1])
				}, t.prototype.getSignDay = function() {
					var e = game.appFacade.retrieveProxy(p.default.NAME).getUserProperty(s.default.SIGN_INFO),
						t = c.default.startDayTimestamp() < e.signTimestamp,
						o = e.dayNum < 7 ? e.dayNum + 1 : 1;
					return t && (o = e.dayNum), {
						daySign: o,
						ifSign: t
					}
				}, t.prototype.closeView = function(t) {
					void 0 === t && (t = !1), e.prototype.closeView.call(this, t)
				}, r([h([cc.Node])], t.prototype, "signItems", void 0), r([h(cc.Node)], t.prototype, "directBtn", void 0), r([h(cc.Node)], t.prototype, "adBtn", void 0), r([f], t)
			}(game.BasePopView);
		o.default = y, cc._RF.pop()
	}, {
		"../../../framework/LocalItemName": "LocalItemName",
		"../../../framework/assetsModule/AssetsMap": "AssetsMap",
		"../../../framework/utils/Util": "Util",
		"../../public/SSJJRewardedVideo": "SSJJRewardedVideo",
		"../../public/model/GameAudioContext": "GameAudioContext",
		"../../public/model/LoginProxy": "LoginProxy"
	}],
	Spine: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "b8300UXXIVNRbinEFP3ILCJ", "Spine");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../../../framework/utils/Util"),
			s = e("../model/PropManage"),
			c = e("./BaseProp"),
			l = cc._decorator,
			p = l.ccclass,
			u = l.property,
			d = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.endPoint = null, t.speedNum = 150, t.targetNode = null, t.isOpen = !1, t
				}
				return i(t, e), t.prototype.onCollisionEnter = function(e) {
					e.node.name !== s.PlayerNodeName.IcePlayer && e.node.name !== s.PlayerNodeName.FirePlayer || this.isOpen || (this.isOpen = !0, this.openApi())
				}, t.prototype.openApi = function() {
					var e = this,
						t = this.targetNode.position.sub(this.endPoint).mag(),
						o = a.default.toDecimal(t / this.speedNum);
					cc.tween(this.targetNode).to(o, {
						position: this.endPoint
					}).call(function() {
						e.node.parent.destroy()
					}).start()
				}, r([u(cc.Vec3)], t.prototype, "endPoint", void 0), r([u], t.prototype, "speedNum", void 0), r([u(cc.Node)], t.prototype, "targetNode", void 0), r([p], t)
			}(c.default);
		o.default = d, cc._RF.pop()
	}, {
		"../../../framework/utils/Util": "Util",
		"../model/PropManage": "PropManage",
		"./BaseProp": "BaseProp"
	}],
	SpringBorad: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "69418zqLNZJJLWqwq8H8BoO", "SpringBorad");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../../public/model/GameAudioContext"),
			s = cc._decorator,
			c = s.ccclass,
			l = s.property,
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.elasticity = 1e3, t
				}
				return i(t, e), t.prototype.onBeginContact = function(e, t, o) {
					this.node.getComponent(cc.Animation).play("spring_anim"), a.default.spring(), o.body.linearVelocity = cc.v2(o.body.linearVelocity.x, this.elasticity)
				}, r([l], t.prototype, "elasticity", void 0), r([c], t)
			}(cc.Component);
		o.default = p, cc._RF.pop()
	}, {
		"../../public/model/GameAudioContext": "GameAudioContext"
	}],
	StartupCommand: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "656d2pq30BA06b4RSo/Rqvf", "StartupCommand");
		var n, i = this && this.__extends || (n = function(e, t) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
				})(e, t)
		}, function(e, t) {
			function o() {
				this.constructor = e
			}
			n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
		});
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var r = e("./InitUICommand"),
			a = e("./GameInitCommand"),
			s = function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return i(t, e), t.prototype.initializeMacroCommand = function() {
					e.prototype.initializeMacroCommand.call(this), this.addSubCommand(r.default), this.addSubCommand(a.default)
				}, t.prototype.execute = function(t) {
					e.prototype.execute.call(this, t)
				}, t
			}(puremvc.MacroCommand);
		o.default = s, cc._RF.pop()
	}, {
		"./GameInitCommand": "GameInitCommand",
		"./InitUICommand": "InitUICommand"
	}],
	ToastView: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "153bf/6yWhCdaAVqjNqyhyV", "ToastView");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("./BaseComponent"),
			s = cc._decorator,
			c = s.ccclass,
			l = s.property,
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.lab_content = null, t
				}
				var o;
				return i(t, e), o = t, t.prototype.start = function() {
					var e = this;
					if (o._oldToast) {
						var t = o._oldToast;
						o._oldToast = null, cc.Tween.stopAllByTarget(t), cc.tween(t).to(.1, {
							opacity: 0
						}).call(function() {
							t.destroy()
						}).start()
					}
					o._oldToast = this.node, this.lab_content.string = this.param.text || "", cc.tween(this.node).to(.25, {
						opacity: 255
					}).delay(this.param.duration).to(.25, {
						opacity: 0
					}).call(function() {
						e.node.destroy(), o._oldToast = null
					}).start()
				}, t._oldToast = null, r([l(cc.Label)], t.prototype, "lab_content", void 0), o = r([c], t)
			}(a.default);
		o.default = p, cc._RF.pop()
	}, {
		"./BaseComponent": "BaseComponent"
	}],
	TransferDoor: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "15ebbD55PJBTJgXnuMxDxeE", "TransferDoor");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
			s = a.ccclass,
			c = a.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.targetNode = null, t.director = null, t.distance = 70, t
				}
				var o;
				return i(t, e), o = t, t.prototype.directApi = function() {
					return this.director
				}, t.prototype.onCollisionEnter = function(e) {
					var t = this,
						n = e.node;
					if (cc.isValid(n)) {
						var i = this.targetNode.convertToWorldSpaceAR(cc.Vec3.ZERO),
							r = n.parent.convertToNodeSpaceAR(i).clone();
						this.scheduleOnce(function() {
							if (cc.isValid(n)) {
								var e = t.targetNode.getComponent(o).directApi();
								r.x += t.distance * e.x, n.setPosition(r)
							}
						})
					}
				}, r([c(cc.Node)], t.prototype, "targetNode", void 0), r([c(cc.Vec3)], t.prototype, "director", void 0), r([c], t.prototype, "distance", void 0), o = r([s], t)
			}(cc.Component);
		o.default = l, cc._RF.pop()
	}, {}],
	TreadSwitch: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "3b727L8vbJBO6Jrd9wSj9Sz", "TreadSwitch");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("./BaseProp"),
			s = cc._decorator,
			c = s.ccclass,
			l = s.property,
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.isOpen = !1, t.content = null, t.targetNode = null, t.linkageNode = null, t.propColor = a.PropColor.RED, t.point1 = cc.Vec3.ZERO, t.point2 = cc.v3(0, -15), t.conctacts = new Set, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					var e = this.content.getChildByName("point"),
						t = cc.Color.WHITE;
					t = cc.Color.fromHEX(t, this.colors[this.propColor]), e.color = t, this.isOpen ? this.content.position = this.point2 : this.content.position = this.point1
				}, t.prototype.onCollisionEnter = function(e) {
					this.conctacts.add(e.node.name), this.isOpen || (cc.Tween.stopAllByTarget(this.targetNode), this.targetNode.getComponent(a.default).openApi(), this.linkageNode && this.linkageNode.getComponent(a.default).openApi(), this.openApi())
				}, t.prototype.onCollisionExit = function(e) {
					if (this.conctacts.delete(e.node.name), this.isOpen && this.conctacts.size <= 0) {
						if (this.linkageNode && !this.linkageNode.getComponent(a.default).checkPropStatus()) return;
						cc.Tween.stopAllByTarget(this.targetNode), this.linkageNode && this.linkageNode.getComponent(a.default).closeApi(), this.closeApi(), this.targetNode.getComponent(a.default).closeApi()
					}
				}, t.prototype.openApi = function() {
					this.isOpen = !0, cc.tween(this.content).to(.2, {
						position: this.point2
					}).start()
				}, t.prototype.closeApi = function() {
					this.isOpen = !1, cc.tween(this.content).to(.2, {
						position: this.point1
					}).start()
				}, t.prototype.checkPropStatus = function() {
					return this.conctacts.size <= 0
				}, r([l], t.prototype, "isOpen", void 0), r([l(cc.Node)], t.prototype, "content", void 0), r([l(cc.Node)], t.prototype, "targetNode", void 0), r([l(cc.Node)], t.prototype, "linkageNode", void 0), r([l({
					type: cc.Enum(a.PropColor)
				})], t.prototype, "propColor", void 0), r([c], t)
			}(a.default);
		o.default = p, cc._RF.pop()
	}, {
		"./BaseProp": "BaseProp"
	}],
	TryPlayerView: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "7131eFazP5DspxxiGfwi/k4", "TryPlayerView");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../../public/model/GameAudioContext"),
			s = e("../../public/model/LoginProxy"),
			c = e("../../public/obj/GameEventManage"),
			l = e("../../public/SSJJRewardedVideo"),
			p = e("../../public/utils/PlayerUtils"),
			u = cc._decorator,
			d = u.ccclass,
			f = u.property,
			h = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.preDirBtn = null, t.nextDirBtn = null, t.tryPlayerBtn = null, t.playersNode = null, t.continueBtn = null, t.currentIndex = 0, t.unLuckPlayerIds = [], t
				}
				return i(t, e), t.prototype.onResetView = function() {
					e.prototype.onResetView.call(this), this.currentIndex = 0;
					var t = game.appFacade.retrieveProxy(s.default.NAME);
					this.unLuckPlayerIds = t.getUnLockSkin(), this.renderPlayers()
				}, t.prototype.renderPlayers = function() {
					var e = this.unLuckPlayerIds[this.currentIndex];
					p.default.changeSkin(this.playersNode, e), this.preDirBtn.active = !0, this.nextDirBtn.active = !0, this.currentIndex <= 0 && (this.preDirBtn.active = !1), this.currentIndex >= this.unLuckPlayerIds.length - 1 && (this.nextDirBtn.active = !1)
				}, t.prototype.addEvent = function() {
					e.prototype.addEvent.call(this), this.tryPlayerBtn.on(game.EngineEventType.NodeEvent.click, this.clickTry, this), this.continueBtn.on(game.EngineEventType.NodeEvent.click, this.clickContinue, this), this.preDirBtn.on(game.EngineEventType.NodeEvent.click, this.clickPreBtn, this), this.nextDirBtn.on(game.EngineEventType.NodeEvent.click, this.clickNextBtn, this)
				}, t.prototype.removeEvent = function() {
					e.prototype.removeEvent.call(this), this.tryPlayerBtn.off(game.EngineEventType.NodeEvent.click, this.clickTry, this), this.continueBtn.off(game.EngineEventType.NodeEvent.click, this.clickContinue, this), this.preDirBtn.off(game.EngineEventType.NodeEvent.click, this.clickPreBtn, this), this.nextDirBtn.off(game.EngineEventType.NodeEvent.click, this.clickNextBtn, this)
				}, t.prototype.clickPreBtn = function() {
					this.currentIndex--, this.renderPlayers()
				}, t.prototype.clickNextBtn = function() {
					this.currentIndex++, this.renderPlayers()
				}, t.prototype.clickTry = function() {
					var t = this;
					a.default.click(), l.default.showRewardedVideo(null, null, function() {
						game.appFacade.sendNotification(c.default.TRY_SKIN, {
							id: t.unLuckPlayerIds[t.currentIndex]
						}), e.prototype.closeView.call(t, !0)
					})
				}, t.prototype.clickContinue = function() {
					e.prototype.closeView.call(this, !0)
				}, r([f(cc.Node)], t.prototype, "preDirBtn", void 0), r([f(cc.Node)], t.prototype, "nextDirBtn", void 0), r([f(cc.Node)], t.prototype, "tryPlayerBtn", void 0), r([f(cc.Node)], t.prototype, "playersNode", void 0), r([f(cc.Node)], t.prototype, "continueBtn", void 0), r([d], t)
			}(game.BasePopView);
		o.default = h, cc._RF.pop()
	}, {
		"../../public/SSJJRewardedVideo": "SSJJRewardedVideo",
		"../../public/model/GameAudioContext": "GameAudioContext",
		"../../public/model/LoginProxy": "LoginProxy",
		"../../public/obj/GameEventManage": "GameEventManage",
		"../../public/utils/PlayerUtils": "PlayerUtils"
	}],
	UIManager: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "3e030daNJVARKZMoPg2X9mj", "UIManager"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = e("../assetsModule/AssetsMap"),
			i = e("../assetsModule/BundleManager"),
			r = e("../base/mediators/GameSceneMediator"),
			a = e("../base/sub_views/DialogView"),
			s = e("../BundleNames"),
			c = e("./Loading"),
			l = e("./LoadingView"),
			p = function() {
				function e() {}
				return Object.defineProperty(e, "instance", {
					get: function() {
						return e._instance || (e._instance = new e), e._instance
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.createNodeByPreloading = function(e, t) {
					var o = i.default.instance.getBundle(e);
					if (!o) return game.error("UIManager", "createNodeByPreloading error,bundle:" + e + "  unloaded"), null;
					var n = o.get(t, cc.Prefab);
					if (!n || null == n) return game.error("UIManager", "createNodeByPreloading error,url: " + t + "  unloaded"), null;
					if (!(n instanceof cc.Prefab)) return game.error("UIManager", "createNodeByPreloading error,url: " + t + "  not prefab"), null;
					var r = cc.instantiate(n);
					return r && null != r ? r : (game.error("UIManager", "createNodeByPreloading fail,url: " + t + "  create node is null"), null)
				}, e.prototype.replaceModuleView = function(e, t, o) {
					game.appFacade.retrieveMediator(r.default.NAME).replaceModuleView(e, t, o || null)
				}, e.prototype.showDialog = function(e, t, o, i) {
					var r = this.createNodeByPreloading(s.default.Resources, n.default.ResourceBundle.prefabs.assetsList.DialogView);
					r.zIndex = cc.macro.MAX_ZINDEX;
					var c = r.getComponent(a.default);
					c.text = e, c.showCancel = t, c.cancelCallback = o, c.confirmCallback = i, cc.director.getScene().getChildByName("Canvas").addChild(r)
				}, e.prototype.showLoadResView = function(e, t, o) {
					var i = this.createNodeByPreloading(s.default.Resources, n.default.ResourceBundle.prefabs.assetsList.LoadingView);
					i.zIndex = cc.macro.MAX_ZINDEX;
					var r = i.getComponent(l.default);
					r.bundleNames = e, r.assetsModules = t, r.successCallback = o, cc.director.getScene().getChildByName("Canvas").addChild(i)
				}, e.prototype.showToast = function(e, t) {
					void 0 === t && (t = 1);
					var o = game.UIManager.instance.createNodeByPreloading(s.default.Resources, n.default.ResourceBundle.prefabs.assetsList.Toast);
					o.zIndex = cc.macro.MAX_ZINDEX, o.getComponent(game.BaseComponent).param = {
						text: e,
						duration: t
					}, cc.director.getScene().getChildByName("Canvas").addChild(o)
				}, e.prototype.showLoading = function(e, t) {
					void 0 === e && (e = 5), void 0 === t && (t = null);
					var o = game.UIManager.instance.createNodeByPreloading(s.default.Resources, n.default.ResourceBundle.prefabs.assetsList.Loading);
					o.zIndex = cc.macro.MAX_ZINDEX, o.getComponent(game.BaseComponent).param = {
						outTime: e,
						timeOutCallFunc: t
					}, cc.director.getScene().getChildByName("Canvas").addChild(o)
				}, e.prototype.hideLoading = function() {
					c.default.oldLoadingView && (c.default.oldLoadingView.destroy(), c.default.oldLoadingView = null)
				}, e._instance = null, e
			}();
		o.default = p, cc._RF.pop()
	}, {
		"../BundleNames": "BundleNames",
		"../assetsModule/AssetsMap": "AssetsMap",
		"../assetsModule/BundleManager": "BundleManager",
		"../base/mediators/GameSceneMediator": "GameSceneMediator",
		"../base/sub_views/DialogView": "DialogView",
		"./Loading": "Loading",
		"./LoadingView": "LoadingView"
	}],
	Util: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "cf8a8c0QcdGVItsp7lfKFdi", "Util"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var n = e("../../module/game/model/GameNodePool"),
			i = function() {
				function e() {}
				return e.isJSON = function(e) {
					if ("string" == typeof e) try {
						var t = JSON.parse(e);
						return !("object" != typeof t || !t)
					} catch (o) {
						return !1
					}
				}, e.isValidUrl = function(e) {
					return !!e && !!/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~\/])+$/.test(e)
				}, e.deepCopy = function(t) {
					if ("object" != typeof t) return t;
					var o = t.constructor == Array ? [] : {};
					if (o instanceof Array)
						for (var n = 0, i = Object.keys(t); n < i.length; n++) {
							var r = i[n];
							o[r] = e.deepCopy(t[r])
						} else
							for (var a in t) o[a] = e.deepCopy(t[a]);
					return o
				}, e.randomFrom = function(e, t) {
					return Math.floor(Math.random() * (t - e + 1) + e)
				}, e.toDecimal = function(e, t) {
					return void 0 === t && (t = 2), parseFloat(e.toFixed(t))
				}, e.getItem = function(e, t) {
					var o = window.ArcadeH5 ? window.ArcadeH5.readNative(e) : cc.sys.localStorage.getItem(e);
					return o || (o = null), null === o && t && (o = t), o
				}, e.setItem = function(e, t) {
					window.ArcadeH5 ? window.ArcadeH5.writeNative(e, t) : cc.sys.localStorage.setItem(e, t)
				}, e.getTodayStr = function() {
					var e = new Date;
					return e.setTime(e.getTime()), e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate()
				}, e.objKeySort = function(e) {
					for (var t = Object.keys(e).sort(), o = {}, n = 0; n < t.length; n++) o[t[n]] = e[t[n]];
					return o
				}, e.md5 = function(e) {
					return window.md5(e)
				}, e.getSpriteFrame = function(e, t) {
					return game.BundleManager.instance.getBundle(e).get(t, cc.SpriteFrame)
				}, e.getJson = function(e, t) {
					return game.BundleManager.instance.getBundle(e).get(t, cc.JsonAsset)
				}, e.showToast = function(e, t) {
					void 0 === t && (t = 1), game.UIManager.instance.showToast(e, t)
				}, e.flyGold = function(t, o, i) {
					for (var r = t.convertToWorldSpaceAR(cc.Vec3.ZERO), a = o.parent.convertToNodeSpaceAR(r), s = 0, c = function() {
							var t = n.default.instance.getGold();
							o.parent.addChild(t), t.active = !0, t.setPosition(a), t.scale = 1;
							var r = cc.v3(a.x + e.randomFrom(-60, 60), a.y + e.randomFrom(-60, 60));
							cc.tween(t).to(.2, {
								position: r
							}).then(cc.tween().to(.2, {
								scale: 1
							})).repeat(2).to(.5, {
								position: o.position.clone()
							}).call(function() {
								n.default.instance.putGold(t), ++s >= 5 && i && i()
							}).start()
						}, l = 0; l < 5; l++) c()
				}, e.startDayTimestamp = function() {
					return new Date(new Date((new Date).toLocaleDateString()).getTime()).getTime()
				}, e.updateMaterialState = function(t, o) {
					var n = t.getComponent(cc.RenderComponent);
					n && e.switchGrayMaterial(o, n);
					for (var i = 0; i < t.children.length; i++) e.updateMaterialState(t.children[i], o)
				}, e.switchGrayMaterial = function(e, t) {
					var o = null;
					e ? (o = cc.Material.getBuiltinMaterial("2d-gray-sprite"), o = cc.MaterialVariant.create(o, t)) : (o = cc.Material.getBuiltinMaterial("2d-sprite"), o = cc.MaterialVariant.create(o, t)), t.setMaterial(0, o)
				}, e.remoteImg = function(e, t) {
					cc.assetManager.loadRemote(e, {
						ext: ".png"
					}, function(e, o) {
						var n = new cc.SpriteFrame(o);
						t && t(n)
					})
				}, e
			}();
		o.default = i, cc._RF.pop()
	}, {
		"../../module/game/model/GameNodePool": "GameNodePool"
	}],
	Water: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "ab66ceIDyVCtZPWhPEBsMNX", "Water");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.WaterType = void 0;
		var a, s = e("../../public/obj/GameEventManage"),
			c = e("../model/PropManage"),
			l = cc._decorator,
			p = l.ccclass,
			u = l.property;
		(function(e) {
			e[e.RED = 0] = "RED", e[e.BLUE = 1] = "BLUE", e[e.BLACK = 2] = "BLACK"
		})(a = o.WaterType || (o.WaterType = {}));
		var d = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.waterType = a.RED, t
			}
			return i(t, e), t.prototype.onBeginContact = function(e, t, o) {
				o.node.name != c.PlayerNodeName.IcePlayer && o.node.name != c.PlayerNodeName.FirePlayer || a.BLACK !== this.waterType && (o.node.name !== c.PlayerNodeName.FirePlayer || this.waterType !== a.BLUE) && (o.node.name !== c.PlayerNodeName.IcePlayer || this.waterType !== a.RED) || game.appFacade.sendNotification(s.default.DIE_PLAYER, {
					playerNode: o.node
				})
			}, r([u({
				type: cc.Enum(a)
			})], t.prototype, "waterType", void 0), r([p], t)
		}(cc.Component);
		o.default = d, cc._RF.pop()
	}, {
		"../../public/obj/GameEventManage": "GameEventManage",
		"../model/PropManage": "PropManage"
	}],
	WindBox: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "cba940Dq8ZDwY3+Qemtm3OM", "WindBox");
		var n, i = this && this.__extends || (n = function(e, t) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(e, t)
			}, function(e, t) {
				function o() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
			}),
			r = this && this.__decorate || function(e, t, o, n) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
				return r > 3 && a && Object.defineProperty(t, o, a), a
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		var a = e("../model/PropManage"),
			s = e("./BaseProp"),
			c = cc._decorator,
			l = c.ccclass,
			p = c.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.switchNode = null, t.isOpen = !1, t.windPower = 700, t.bodys = new Set, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					this.isOpen && (this.switchNode.active = !0)
				}, t.prototype.onCollisionEnter = function(e) {
					e.node.name !== a.PlayerNodeName.IcePlayer && e.node.name !== a.PlayerNodeName.FirePlayer || this.bodys.add(e.node)
				}, t.prototype.onCollisionExit = function(e) {
					e.node.name !== a.PlayerNodeName.IcePlayer && e.node.name !== a.PlayerNodeName.FirePlayer || this.bodys.delete(e.node)
				}, t.prototype.update = function() {
					var e = this;
					this.isOpen && this.bodys.forEach(function(t) {
						var o = t.getComponent(cc.RigidBody);
						o.linearVelocity = cc.v2(o.linearVelocity.x, e.windPower)
					})
				}, r([p(cc.Node)], t.prototype, "switchNode", void 0), r([p], t.prototype, "isOpen", void 0), r([l], t)
			}(s.default);
		o.default = u, cc._RF.pop()
	}, {
		"../model/PropManage": "PropManage",
		"./BaseProp": "BaseProp"
	}],
	"use_v2.1-2.2.1_cc.Toggle_event": [function(e, t) {
		"use strict";
		cc._RF.push(t, "2506eL7uvlMlJCnGs5rni5E", "use_v2.1-2.2.1_cc.Toggle_event"), cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = !0), cc._RF.pop()
	}, {}],
	"use_v2.1.x_cc.Action": [function(e, t) {
		"use strict";
		cc._RF.push(t, "6fe6abBUpVBC5LBEIRKxj0H", "use_v2.1.x_cc.Action"), cc.macro.ROTATE_ACTION_CCW = !0, cc._RF.pop()
	}, {}]
}, {}, ["use_v2.1-2.2.1_cc.Toggle_event", "use_v2.1.x_cc.Action", "App", "AppFacade", "AppLog", "AudioManager", "BundleNames", "EngineEventType", "Error", "GlobalParam", "LocalItemName", "AssetsManager", "AssetsMap", "BundleManager", "GameScene", "GameInitCommand", "InitUICommand", "LoadBundlesCommand", "LoadResCommand", "StartupCommand", "GameSceneMediator", "InitModuleViewMediator", "InitModuleView", "DialogView", "BaseComponent", "BaseModuleView", "BasePopView", "Loading", "LoadingView", "PopupManager", "ToastView", "UIManager", "Util", "GameModuleViewMediator", "GamePreModuleViewMediator", "GameConfigsVo", "GameNodeManage", "GameNodePool", "PropManage", "GameModuleView", "GamePreModuleView", "BaseProp", "Diamond", "Door", "Gold", "LightSource", "LineGraphics", "MoveBoard", "MoveCar", "RockerSwitch", "Spine", "SpringBorad", "TransferDoor", "TreadSwitch", "Water", "WindBox", "Foot", "Player", "AssetDeficiencyPopView", "ChooseLevelPopView", "GainPopView", "PausePopView", "ReLifePopView", "SettlePopView", "ShopPopView", "SignPopView", "TryPlayerView", "BaseGuide", "SSJJRewardedVideo", "Guide_1", "Guide_2", "Guide_3", "Guide_4", "Guide_5", "GameAudioContext", "LoginProxy", "GameConfigVo", "GameEventManage", "LoginVO", "PlayerUtils", "MainModuleViewMediator", "MainModuleView", "PrivacyTreatyView"]);