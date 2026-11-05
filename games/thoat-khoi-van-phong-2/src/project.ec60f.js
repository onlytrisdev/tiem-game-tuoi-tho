window.__require = function e(t, a, o) {
	function n(c, r) {
		if (!a[c]) {
			if (!t[c]) {
				var l = c.split("/");
				if (l = l[l.length - 1], !t[l]) {
					var s = "function" == typeof __require && __require;
					if (!r && s) return s(l, !0);
					if (i) return i(l, !0);
					throw new Error("Cannot find module '" + c + "'")
				}
			}
			var u = a[c] = {
				exports: {}
			};
			t[c][0].call(u.exports, function(e) {
				return n(t[c][1][e] || e)
			}, u, u.exports, e, t, a, o)
		}
		return a[c].exports
	}
	for (var i = "function" == typeof __require && __require, c = 0; c < o.length; c++) n(o[c]);
	return n
}({
	ActionAnim: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "2f94dlYxLdNdYAXHQ/72xy8", "ActionAnim"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o, n = cc._decorator,
			i = n.ccclass,
			c = n.property,
			r = e("../../common/Utils"),
			l = e("../../common/component/XCamera"),
			s = e("./XAnim");
		(function(e) {
			e[e.None = 0] = "None", e[e.Light = 1] = "Light", e[e.Pop = 2] = "Pop", e[e.FadeIn = 3] = "FadeIn", e[e.Rotate = 4] = "Rotate", e[e.DelayFadeIn = 5] = "DelayFadeIn", e[e.Click = 6] = "Click", e[e.Rock = 7] = "Rock"
		})(o || (o = {}));
		var u = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.animType = o.None, t.delayTime = 0, t
			}
			var a;
			return __extends(t, e), a = t, t.prototype.onLoad = function() {
				switch (this.animType) {
					case o.None:
						break;
					case o.Light:
						a.lightAnim(this.node);
						break;
					case o.Pop:
						a.popUpAnim(this.node);
						break;
					case o.FadeIn:
						a.fadeIn(this.node);
						break;
					case o.Rotate:
						a.rotate(this.node);
						break;
					case o.DelayFadeIn:
						a.delayFadeIn(this.node, this.delayTime);
						break;
					case o.Click:
						a.click(this.node);
						break;
					case o.Rock:
						a.rock(this.node)
				}
			}, t.popUpAnim = function(e) {
				return __awaiter(this, void 0, void 0, function() {
					return __generator(this, function(t) {
						return [2, new Promise(function(t) {
							e.opacity = 0, e.scale = .8, e.runAction(cc.sequence(cc.spawn(cc.fadeIn(.3), cc.scaleTo(.3, 1)), cc.callFunc(function() {
								t()
							})))
						})]
					})
				})
			}, t.popDownAnim = function(e) {
				return __awaiter(this, void 0, void 0, function() {
					return __generator(this, function(t) {
						return [2, new Promise(function(t) {
							e.opacity = 255, e.runAction(cc.sequence(cc.spawn(cc.moveBy(.3, cc.v2(0, 120)), cc.fadeOut(.3)), cc.callFunc(function() {
								t()
							})))
						})]
					})
				})
			}, t.fadeIn = function(e) {
				return __awaiter(this, void 0, void 0, function() {
					return __generator(this, function(t) {
						return e.opacity = 0, [2, new Promise(function(t) {
							e.runAction(cc.sequence(cc.fadeTo(.3, 200), cc.callFunc(function() {
								t()
							})))
						})]
					})
				})
			}, t.rotate = function(e) {
				return __awaiter(this, void 0, void 0, function() {
					return __generator(this, function(t) {
						return e.runAction(cc.sequence(cc.rotateTo(2, 90), cc.rotateTo(2, 180), cc.rotateTo(2, 270), cc.rotateTo(2, 360)).repeatForever()), [2]
					})
				})
			}, t.lightAnim = function(e) {
				return __awaiter(this, void 0, void 0, function() {
					return __generator(this, function(t) {
						return e.runAction(cc.sequence(cc.callFunc(function() {
							e.opacity = 0
						}), cc.fadeIn(.8), cc.callFunc(function() {
							e.opacity = 255
						}), cc.fadeOut(.8)).repeatForever()), [2]
					})
				})
			}, t.fadeInAnim = function(e) {
				return __awaiter(this, void 0, void 0, function() {
					return __generator(this, function(t) {
						return [2, new Promise(function(t) {
							e.opacity = 0, e.runAction(cc.spawn(cc.fadeTo(.2, 155), cc.callFunc(function() {
								t()
							})))
						})]
					})
				})
			}, t.delayFadeIn = function(e, t) {
				return __awaiter(this, void 0, void 0, function() {
					return __generator(this, function(a) {
						return [2, new Promise(function(a) {
							e.opacity = 0, e.runAction(cc.sequence(cc.delayTime(t), cc.spawn(cc.fadeIn(1), cc.callFunc(function() {
								a()
							}))))
						})]
					})
				})
			}, t.fadeOutAnim = function(e) {
				return __awaiter(this, void 0, void 0, function() {
					return __generator(this, function(t) {
						return [2, new Promise(function(t) {
							e.runAction(cc.spawn(cc.fadeTo(.3, 0), cc.removeSelf(), cc.callFunc(function() {
								t()
							})))
						})]
					})
				})
			}, t.guildAnim = function(e, t, o, n, i, c) {
				return void 0 === i && (i = ""), __awaiter(this, void 0, void 0, function() {
					var l, u, d, p, f, h, m, _;
					return __generator(this, function(g) {
						switch (g.label) {
							case 0:
								return l = new cc.Node, s.default.Instance.node.addChild(l), l.position = e, l.width = 200, l.height = 200, u = new cc.Node, l.addChild(u), d = u.addComponent(cc.Label), u.color = cc.color(0, 0, 0), d.string = i, d.lineHeight = 35, d.fontSize = 30, u.position = n, a.lightAnim(u), p = new cc.Node, l.addChild(p), f = new cc.Node, p.addChild(f), [4, r.default.loadImage("texture/ui/guild2")];
							case 1:
								return h = g.sent(), f.addComponent(cc.Sprite).spriteFrame = h, f.opacity = 0, f.position = t, m = new cc.Node, p.addChild(m), [4, r.default.loadImage("texture/ui/guild1")];
							case 2:
								return _ = g.sent(), m.addComponent(cc.Sprite).spriteFrame = _, m.opacity = 0, m.position = cc.v2(f.x - 10, f.y + 50), [2, new Promise(function(e) {
									f.runAction(cc.sequence(cc.fadeIn(.4), cc.callFunc(function() {
										m.runAction(cc.sequence(cc.fadeIn(.3), cc.hide(), cc.callFunc(function() {
											p.runAction(cc.sequence(cc.moveTo(1.5, o), cc.delayTime(c), cc.callFunc(function() {
												l.runAction(cc.sequence(cc.fadeOut(.2), cc.callFunc(function() {
													l.stopAllActions(), l.removeFromParent(), e()
												})))
											})))
										})))
									})))
								})]
						}
					})
				})
			}, t.popCenter = function(e) {
				return __awaiter(this, void 0, void 0, function() {
					var t, a, o, n;
					return __generator(this, function(i) {
						switch (i.label) {
							case 0:
								return t = new cc.Node, s.default.Instance.node.addChild(t), t.width = l.default.Instance.node.width, t.height = 80, t.setScale(cc.v2(1, 0)), [4, r.default.loadImage("texture/ui/imgWhite")];
							case 1:
								return a = i.sent(), t.addComponent(cc.Sprite).spriteFrame = a, t.color = cc.color(0, 0, 0), t.width = l.default.Instance.node.width, t.height = 80, t.opacity = 188, o = new cc.Node, t.addChild(o), (n = o.addComponent(cc.Label)).string = e, n.fontSize = 40, n.lineHeight = 45, o.color = cc.color(255, 255, 255), t.runAction(cc.sequence(cc.delayTime(.2), cc.scaleTo(.2, 1), cc.delayTime(1.8), cc.scaleTo(.2, 1, 0), cc.removeSelf())), [2]
						}
					})
				})
			}, t.popTop = function(e) {
				return void 0 === e && (e = ""), __awaiter(this, void 0, void 0, function() {
					var t, a, o, n;
					return __generator(this, function(i) {
						switch (i.label) {
							case 0:
								return t = new cc.Node, l.default.Instance.node.addChild(t), t.width = l.default.Instance.node.width, t.height = 80, [4, r.default.loadImage("texture/ui/common/imgWhite")];
							case 1:
								return a = i.sent(), t.addComponent(cc.Sprite).spriteFrame = a, t.color = cc.color(0, 0, 0), t.width = l.default.Instance.node.width, t.height = 80, t.opacity = 188, t.position = cc.v2(0, 280), o = new cc.Node, t.addChild(o), (n = o.addComponent(cc.Label)).string = e, n.fontSize = 38, n.lineHeight = 40, o.color = cc.color(255, 255, 255), t.runAction(cc.sequence(cc.callFunc(function() {
									t.opacity = 0
								}), cc.delayTime(.2), cc.spawn(cc.moveBy(.4, cc.v2(0, -80)), cc.fadeTo(.4, 188)), cc.delayTime(1.8), cc.spawn(cc.moveBy(.4, cc.v2(0, 80)), cc.fadeOut(.4)), cc.removeSelf())), [2]
						}
					})
				})
			}, t.hotAnim = function(e, t) {
				return __awaiter(this, void 0, void 0, function() {
					var a, o, n = this;
					return __generator(this, function(i) {
						switch (i.label) {
							case 0:
								return a = new cc.Node, e.addChild(a), [4, r.default.loadImage("texture/ui/dian")];
							case 1:
								return o = i.sent(), a.addComponent(cc.Sprite).spriteFrame = o, a.position = t, [2, new Promise(function(e) {
									n.lightAnim(a), e(a)
								})]
						}
					})
				})
			}, t.click = function(e) {
				return __awaiter(this, void 0, void 0, function() {
					var t, a;
					return __generator(this, function(o) {
						switch (o.label) {
							case 0:
								return t = new cc.Node, [4, r.default.loadImage("texture/ui/common/click")];
							case 1:
								return a = o.sent(), t.addComponent(cc.Sprite).spriteFrame = a, e.addChild(t), t.runAction(cc.sequence(cc.callFunc(function() {
									t.anchorX = .5, t.anchorY = 1, t.opacity = 255, t.position = cc.v2(-100, -50)
								}), cc.moveTo(1, cc.v2(20, 0)), cc.scaleTo(1, .7), cc.scaleTo(.5, 1), cc.fadeOut(1), cc.delayTime(5)).repeatForever()), [2]
						}
					})
				})
			}, t.rock = function(e) {
				return __awaiter(this, void 0, void 0, function() {
					return __generator(this, function(t) {
						return e.runAction(cc.sequence(cc.rotateBy(2, -20), cc.rotateBy(4, 40), cc.rotateBy(2, -20)).repeatForever()), [2]
					})
				})
			}, t.Instance = null, __decorate([c({
				type: cc.Enum(o),
				displayName: "\u52a8\u753b\u7c7b\u578b"
			})], t.prototype, "animType", void 0), __decorate([c({
				type: cc.Integer,
				displayName: "\u5ef6\u8fdf\u65f6\u95f4"
			})], t.prototype, "delayTime", void 0), t = a = __decorate([i], t)
		}(cc.Component);
		a.default = u, cc._RF.pop()
	}, {
		"../../common/Utils": "Utils",
		"../../common/component/XCamera": "XCamera",
		"./XAnim": "XAnim"
	}],
	Audio: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "5b4c4rLWqdEr5nUpEGv2d+q", "Audio"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			i = (o.property, e("./kernels/Props")),
			c = e("./Log"),
			r = e("./Caches"),
			l = e("./Utils"),
			s = function(e) {
				function t() {
					var t = e.call(this) || this;
					return a.xSet("bgmVolume", r.default.getFloat("bgmVolume", 1)), a.xSet("sfxVolume", r.default.getFloat("sfxVolume", 1)), c.default.info("\u521d\u59cb\u5316\u58f0\u97f3\u7ba1\u7406\u6210\u529f!"), t
				}
				var a;
				return __extends(t, e), a = t, t.playBGM = function(e, t) {
					if (void 0 === t && (t = 1), e && 0 != e.length) {
						a.stopBGM();
						var o = a.xGet("bgmVolume");
						o *= t, "string" == typeof e ? o > .01 && cc.loader.loadRes(e, cc.AudioClip, function(e, t) {
							a.bgmHandle = cc.audioEngine.play(t, !0, o)
						}) : a.bgmHandle = cc.audioEngine.play(e, !0, o)
					}
				}, t.stopBGM = function() {
					-1 != a.bgmHandle && (cc.audioEngine.stop(a.bgmHandle), a.bgmHandle = -1)
				}, t.stopSFX = function(e) {
					cc.audioEngine.stop(e)
				}, t.recoverBGM = function() {
					a.setBGMVolume(1)
				}, t.slientBgm = function() {
					a.setBGMVolume(.01)
				}, t.playSFX = function(e, t) {
					return void 0 === t && (t = !1), __awaiter(this, void 0, void 0, function() {
						var o, n, i;
						return __generator(this, function(r) {
							switch (r.label) {
								case 0:
									return e && 0 != e.length ? (c.default.info("\u64ad\u653e\u97f3\u6548:", e), "string" != typeof e ? (o = a.xGet("sfxVolume")) > 0 ? [2, new Promise(function(a) {
										a(cc.audioEngine.play(e, t, o))
									})] : [2] : (n = a.xGet("sfxVolume")) > 0 ? [4, l.default.loadAudioClip(e)] : [3, 2]) : [2];
								case 1:
									return i = r.sent(), [2, new Promise(function(e) {
										e(cc.audioEngine.play(i, t, n))
									})];
								case 2:
									return [2]
							}
						})
					})
				}, t.slientSFX = function() {
					a.setSFXVolume(0)
				}, t.recoverSFX = function() {
					a.setSFXVolume(1)
				}, t.setBGMVolume = function(e) {
					r.default.set("bgmVolume", e), a.xSet("bgmVolume", e), -1 != a.bgmHandle && cc.audioEngine.setVolume(a.bgmHandle, e)
				}, t.setSFXVolume = function(e) {
					r.default.set("sfxVolume", e), a.xSet("sfxVolume", e)
				}, t.pauseAll = function() {
					c.default.info("\u58f0\u97f3\u6682\u505c"), cc.audioEngine.pauseAll()
				}, t.resumeAll = function() {
					c.default.info("\u58f0\u97f3\u6062\u590d"), cc.audioEngine.resumeAll()
				}, t.stopAll = function() {
					c.default.info("\u58f0\u97f3\u5173\u95ed"), cc.audioEngine.stopAll()
				}, t.stopAllEffects = function() {
					c.default.info("\u97f3\u6548\u5173\u95ed"), cc.audioEngine.stopAllEffects()
				}, t.bgmHandle = -1, t = a = __decorate([n], t)
			}(i.default);
		a.default = s, cc._RF.pop()
	}, {
		"./Caches": "Caches",
		"./Log": "Log",
		"./Utils": "Utils",
		"./kernels/Props": "Props"
	}],
	Caches: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "f1544SMU/NO26quJweu+WAK", "Caches"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Log"),
			n = function() {
				function e() {
					var t = new Date;
					o.default.info("\u542f\u52a8\u65e5\u671f:%s", t.toGMTString()), e.set("date_launch", t.getTime()), null == e.get("bgmusic") && e.set("bgmusic", !0), null == e.get("sounds") && e.set("sounds", !0), o.default.info("\u521d\u59cb\u5316\u7f13\u5b58\u7ba1\u7406\u6210\u529f!")
				}
				return e.prototype.destroy = function() {
					var t = new Date;
					e.storage.setItem("date_exit", t.getTime()), o.default.info("\u5173\u95ed\u65e5\u671f:%s", t.toGMTString())
				}, e.get = function(e, t) {
					void 0 === t && (t = "");
					var a = this.storage.getItem(e);
					return a = null == a || "" == a ? t : JSON.parse(a)
				}, e.getInt = function(t, a) {
					void 0 === a && (a = 0);
					var o = e.storage.getItem(t);
					return o = null == o || "" == o ? a : parseInt(o)
				}, e.getFloat = function(t, a) {
					void 0 === a && (a = 0);
					var o = e.storage.getItem(t);
					return "string" != typeof o || "" == o ? a : parseFloat(o)
				}, e.set = function(t, a) {
					return "object" == typeof a && (a = JSON.stringify(a)), e.storage.setItem(t, a), o.default.info("\u7f13\u5b58\u66f4\u65b0:%s -> %s", t, a), !0
				}, e.del = function(t) {
					return e.storage.removeItem(t), o.default.info("\u7f13\u5b58\u5220\u9664:%s", t), !0
				}, e.storage = cc.sys.localStorage, e
			}();
		a.default = n, cc._RF.pop()
	}, {
		"./Log": "Log"
	}],
	GamSys: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "e6373RTIahNZZ778SCv9D6/", "GamSys"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Game"),
			n = cc._decorator,
			i = n.ccclass,
			c = (n.property, function() {
				function e() {}
				var t;
				return t = e, e.init = function() {
					var e = this;
					t.gameState = 1, t.game = new o.default;
					return __awaiter(e, void 0, void 0, function() {
							return __generator(this, function(e) {
								return a.remain && (t.videoTime = a.remain), [2]
							})
						})
					/* window.h5api.canPlayAd(function(a) {
						return __awaiter(e, void 0, void 0, function() {
							return __generator(this, function(e) {
								return a.remain && (t.videoTime = a.remain), [2]
							})
						})
					}) */
				}, e.reduceVideoTime = function() {
					t.videoTime--, t.videoTime <= 0 && o.default.xSet("changeVideoProps", !1)
				}, e.gameState = 0, e.videoTime = 0, e.nowStage = 0, e.game = null, e = t = __decorate([i], e)
			}());
		a.default = c, cc._RF.pop()
	}, {
		"./Game": "Game"
	}],
	GameController: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "6d98fp2cF9FUYLs0soSrCqw", "GameController"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../common/Caches"),
			n = e("../common/Audio"),
			i = e("../common/Utils"),
			c = e("./config"),
			r = e("../common/component/XCamera"),
			l = e("./HallData"),
			s = e("../common/Log"),
			u = cc._decorator,
			d = u.ccclass,
			p = u.property,
			f = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.scene = null, t.ui = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					return __awaiter(this, void 0, void 0, function() {
						var e, t;
						return __generator(this, function(a) {
							switch (a.label) {
								case 0:
									return new o.default, new n.default, new l.default, cc.director.getCollisionManager().enabled = !0, [4, i.default.loadPrefab(c.default.panel[c.default.panelEnum.logoPanel])];
								case 1:
									return e = a.sent(), t = cc.instantiate(e), this.scene.addChild(t), [2]
							}
						})
					})
				}, t.prototype.onEnable = function() {
					l.default.xBind("loadScene", this.loadScene.bind(this), "zcbgs2_gameController"), l.default.xBind("loadStage", this.loadStage.bind(this), "zcbgs2_gameController"), l.default.xBind("loadStageAnim", this.loadStageAnim.bind(this), "zcbgs2_gameController")
				}, t.prototype.loadScene = function(e) {
					return __awaiter(this, void 0, void 0, function() {
						var t, a, o, n;
						return __generator(this, function(s) {
							switch (s.label) {
								case 0:
									return [4, i.default.loadPrefab(c.default.panel[c.default.panelEnum.loadingPanel])];
								case 1:
									return t = s.sent(), a = cc.instantiate(t), r.default.Instance.node.addChild(a), this.ui.destroyAllChildren(), this.scene.destroyAllChildren(), [4, i.default.loadPrefab(c.default.panel[e])];
								case 2:
									return o = s.sent(), n = cc.instantiate(o), this.scene.addChild(n), l.default.xSet("delLoadingPanel"), [2]
							}
						})
					})
				}, t.prototype.loadStage = function(e) {
					return __awaiter(this, void 0, void 0, function() {
						var t, a, o, n;
						return __generator(this, function(u) {
							switch (u.label) {
								case 0:
									return s.default.info("\u52a0\u8f7d\u7b2c" + e + "\u5173"), l.default.xSet("curStage", e), this.ui.destroyAllChildren(), [4, i.default.loadPrefab(c.default.panel[c.default.panelEnum.loadingPanel])];
								case 1:
									return t = u.sent(), a = cc.instantiate(t), r.default.Instance.node.addChild(a), this.scene.destroyAllChildren(), [4, i.default.loadPrefab("prefab/stage/stage" + e)];
								case 2:
									return o = u.sent(), n = cc.instantiate(o), this.scene.addChild(n), l.default.xSet("delLoadingPanel"), [2]
							}
						})
					})
				}, t.prototype.loadStageAnim = function(e) {
					return __awaiter(this, void 0, void 0, function() {
						var t, a;
						return __generator(this, function(o) {
							switch (o.label) {
								case 0:
									return this.ui.destroyAllChildren(), this.scene.destroyAllChildren(), [4, i.default.loadPrefab("prefab/stage/animStage/anim" + e)];
								case 1:
									return t = o.sent(), a = cc.instantiate(t), this.scene.addChild(a), [2]
							}
						})
					})
				}, t.Boss = null, __decorate([p({
					type: cc.Node,
					displayName: "\u573a\u666f\u8282\u70b9"
				})], t.prototype, "scene", void 0), __decorate([p({
					type: cc.Node,
					displayName: "ui\u8282\u70b9"
				})], t.prototype, "ui", void 0), t = __decorate([d], t)
			}(cc.Component);
		a.default = f, cc._RF.pop()
	}, {
		"../common/Audio": "Audio",
		"../common/Caches": "Caches",
		"../common/Log": "Log",
		"../common/Utils": "Utils",
		"../common/component/XCamera": "XCamera",
		"./HallData": "HallData",
		"./config": "config"
	}],
	GameData: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "2f990hCjzhIkpc+7KQ8xuB3", "GameData"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../common/kernels/Props"),
			n = cc._decorator,
			i = n.ccclass,
			c = (n.property, function(e) {
				function t() {
					var t = e.call(this) || this;
					return a.xSet("addProp", null, !1), a.xSet("delProp", null, !1), a.xSet("addCompProp", null, !1), a.xSet("delCanCom", null, !1), t
				}
				var a;
				return __extends(t, e), a = t, t = a = __decorate([i], t)
			}(o.default));
		a.default = c, cc._RF.pop()
	}, {
		"../../common/kernels/Props": "Props"
	}],
	Game: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "9e10al4+KlPy5cSmPZdZDpy", "Game"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../common/kernels/Props"),
			n = cc._decorator,
			i = n.ccclass,
			c = (n.property, function(e) {
				function t() {
					var t = e.call(this) || this;
					return a.xSet("changeVideoProps", null, !1), t
				}
				var a;
				return __extends(t, e), a = t, t = a = __decorate([i], t)
			}(o.default));
		a.default = c, cc._RF.pop()
	}, {
		"../common/kernels/Props": "Props"
	}],
	HallData: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "53b04/tVZRABZyEPwiQ1qSA", "HallData"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../common/kernels/Props"),
			n = e("../common/Log"),
			i = e("../common/Caches"),
			c = e("./config"),
			r = e("../common/Utils"),
			l = cc._decorator,
			s = l.ccclass,
			u = (l.property, "zcbgs2_hallData"),
			d = function(e) {
				function t() {
					var t = e.call(this) || this;
					a.xSet("curStage", 0, !1), a.xSet("loadScene", null, !1), a.xSet("loadStage", null, !1), a.xSet("loadingPanel", null, !1), a.xSet("maskPanel", null, !1), a.xSet("delMask", null, !1), a.xSet("propPanel", null, !1), a.xSet("menuBtn", null, !1), a.xSet("menuPanel", null, !1), a.xSet("workOverTimePanel", null, !1), a.xSet("gameOverPanel", null, !1), a.xSet("gamePassPanel", null, !1), a.xSet("propGetPanel", null, !1), a.xSet("itemLibraryDescPanel", null, !1), a.xSet("stageStateChange", null, !1), a.xSet("itemStateChange", null, !1), a.xSet("howToPanel", null, !1), a.xSet("delLoadingPanel", null, !1), a.xSet("loadStageAnim", null, !1), a.xSet("hintBtn", null, !1), a.xSet("hintPanel", null, !1), a.xSet("hintStateChange", null, !1), a.xSet("destoryHintPanel", null, !1), a.xSet("reTryFourChange", null, !1), a.xSet("screenRec", null, !1), a.xSet("moreGame", null, !1);
					var o = i.default.get("bannerNum");
					"" == o && (o = "0", i.default.set("bannerNum", 0)), a.xSet("bannerNum", parseInt(o), !1), a.xBind("bannerNum", t.onBannerNum.bind(t), u);
					var l = i.default.get("reTryFour");
					n.default.info("\u5173\u5361\u91cd\u6765\u70b9\u51fb\uff1a", l);
					for (var s = new Array(30), d = 0; d < s.length; d++) s[d] = 0;
					l = r.default.clone(s), a.xSet("reTryFour", l), i.default.set("reTryFour", l), a.xBind("reTryFourChange", t.onReTryFourChange.bind(t), u);
					var p = i.default.get("nextClick");
					"" == p && (p = "0", i.default.set("nextClick", 0)), a.xSet("nextClick", parseInt(p), !1), a.xBind("nextClick", t.onNextClick.bind(t), u);
					var f = i.default.get("videoChange");
					"" == f && (f = "1", i.default.set("videoChange", 1)), a.xSet("videoChange", parseInt(f), !1), a.xBind("videoChange", t.onVideoChange.bind(t), u);
					var h = i.default.get("stageState");
					if ("" == h) {
						var m = new Array(c.default.stageNum);
						for (d = 0; d < m.length; d++) m[d] = 0;
						m[0] = 1, h = r.default.clone(m), i.default.set("stageState", h)
					}
					a.xSet("stageState", h), a.xBind("stageStateChange", t.stageStateChange.bind(t), u);
					var _ = i.default.get("hintState");
					if ("" == _) {
						var g = {};
						for (var y in c.default.hint.dictionary) {
							for (var x = c.default.hint.dictionary[y], b = new Array, v = 0; v < x.length; v++) b[v] = 0;
							g[y] = b
						}
						_ = r.default.clone(g), i.default.set("hintState", _)
					}
					a.xSet("hintState", _), console.log("hintState:", _), a.xBind("hintStateChange", t.hintStateChange.bind(t), u);
					var S = i.default.get("itemState");
					if (!S) {
						var C = [];
						for (var d in c.default.props) "" != c.default.props[d].desc && C.push({
							state: 0,
							name: c.default.props[d].name,
							desc: c.default.props[d].desc,
							address: c.default.props[d].address,
							index: d
						});
						S = C, i.default.set("itemState", S)
					}
					return a.xSet("itemState", S), a.xBind("itemStateChange", t.itemStateChange.bind(t), u), n.default.info("hallData\u521d\u59cb\u5316\u6210\u529f"), t
				}
				var a;
				return __extends(t, e), a = t, t.prototype.stageStateChange = function(e) {
					var t = a.xGet("stageState");
					t[e.index] = e.state, i.default.set("stageState", t)
				}, t.prototype.itemStateChange = function(e) {
					for (var t = a.xGet("itemState"), o = 0; o < t.length; o++)
						if (t[o].index == e.index) {
							t[o].state = e.state;
							break
						} a.xSet("itemState", t), i.default.set("itemState", t)
				}, t.prototype.hintStateChange = function(e) {
					var t = e.stage,
						o = e.index,
						n = e.state;
					if (void 0 != t && void 0 != o && void 0 != n) {
						var c = a.xGet("hintState");
						console.log("hintState:", c), c[t][o] = n, a.xSet("hintState", c), i.default.set("hintState", c)
					}
				}, t.prototype.onVideoChange = function(e) {
					i.default.set("videoChange", e)
				}, t.prototype.onReTryFourChange = function(e) {
					var t = a.xGet("reTryFour");
					t[e.index] = e.state, i.default.set("reTryFour", t)
				}, t.prototype.onNextClick = function(e) {
					i.default.set("nextClick", e)
				}, t.prototype.onBannerNum = function(e) {
					i.default.set("bannerNum", e)
				}, t = a = __decorate([s], t)
			}(o.default);
		a.default = d, cc._RF.pop()
	}, {
		"../common/Caches": "Caches",
		"../common/Log": "Log",
		"../common/Utils": "Utils",
		"../common/kernels/Props": "Props",
		"./config": "config"
	}],
	HowToManager: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "cfd074w2PRMWq43tKYMT3j7", "HowToManager"), cc.Class({
			extends: cc.Component,
			properties: {
				howToPanel: cc.Node,
				howToPic: cc.Node,
				howToPic2: cc.Node,
				nxtBtn: cc.Node,
				endBtn: cc.Node,
				imgKey: cc.Node,
				imgFinger: cc.Node,
				imgKeyDest: cc.Node,
				imgFingerDest: cc.Node,
				nxtPhase: cc.Integer,
				canTouch: cc.Boolean,
				tipLabel: cc.Label
			},
			onLoad: function() {
				this.nxtPhase = 0, this.canTouch = !0
			},
			onTapNxt: function() {
				if (this.canTouch) {
					if (0 == this.nxtPhase) {
						this.canTouch = !1;
						var e = cc.sequence(cc.rotateTo(.5, -30), cc.callFunc(function() {
							this.imgKey.active = !1, this.imgKeyDest.active = !0, this.canTouch = !0, this.nxtPhase++
						}, this));
						this.imgFinger.runAction(e)
					}
					if (1 == this.nxtPhase) {
						this.tipLabel.string = "Chạm vật phẩm để sử dụng nó", this.canTouch = !1, this.imgFinger.active = !1, this.imgFingerDest.active = !0;
						e = cc.sequence(cc.moveTo(1, cc.v2(-30, 150)), cc.callFunc(function() {
							this.nxtPhase++, this.nxtBtn.active = !1, this.endBtn.active = !0, this.howToPic.active = !1, this.howToPic2.active = !0, this.canTouch = !0, this.imgKeyDest.active = !1
						}, this));
						this.imgKeyDest.runAction(e)
					}
				}
			},
			onTapExit: function() {
				this.canTouch && (this.howToPanel.active = !1, cc.sys.localStorage.setItem("freshover", 1), cc.isFreshOver = cc.sys.localStorage.getItem("freshover"))
			}
		}), cc._RF.pop()
	}, {}],
	Http: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "eeb8b97CeRC5pzxRep7aY0i", "Http"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			i = (o.property, e("../kernels/Props")),
			c = e("../Log"),
			r = e("./eCode"),
			l = e("./netConfig"),
			s = function(e) {
				function t() {
					return e.call(this) || this
				}
				return __extends(t, e), t.isonline = function() {
					return __awaiter(this, void 0, void 0, function() {
						var e = this;
						return __generator(this, function(t) {
							return [2, new Promise(function(t, a) {
								e._request("GET", "https://www.baidu.com", {}, function(e, a) {
									c.default.info("\u7f51\u7edc\u8fde\u63a5:%s", e ? "\u6b63\u5e38" : "\u4e0d\u901a"), t(e)
								}, function(e) {
									a(e)
								})
							})]
						})
					})
				}, t.get = function(e, t) {
					var a = this;
					return new Promise(function(o, n) {
						if (e.indexOf("http") >= 0) return c.default.error("\u53c2\u6570\u6709\u8bef \u53ea\u80fd\u5199\u8bbf\u95ee\u8def\u5f84\u4e0d\u80fd\u5199\u5b8c\u6574\u7684\u8bbf\u95ee\u5730\u5740"), void n(r.default.Error);
						var i = "";
						for (var s in t) "" == i ? i = "?" : i += "&", Array.isArray(t[s]) || "object" == typeof t[s] ? i += s + "=" + JSON.stringify(t[s]) : i += s + "=" + t[s];
						var u = l.default.onLine + e + i;
						a._request("GET", u, {}, function(e) {
							o(e)
						}, function(e) {
							n(e)
						})
					})
				}, t.post = function(e, t) {
					var a = this;
					return new Promise(function(o, n) {
						if (e.indexOf("http") >= 0) n(r.default.Error);
						else {
							var i = l.default.onLine + e;
							a._request("POST", i, t, function(e) {
								o(e)
							}, function(e) {
								n(e)
							})
						}
					})
				}, t._request = function(e, t, a, o, n) {
					var i = function(e) {
							c.default.error("error" + e), n(e)
						},
						l = cc.loader.getXMLHttpRequest();
					return l.mId = ++this.mId, l.onerror = function() {
						c.default.warn("%s:\u9519\u8bef[%d]", e, l.mId), l.abort(), i(r.default.Error)
					}, l.ontimeout = function() {
						c.default.warn("%s:\u8d85\u65f6[%d]", e, l.mId), l.abort(), i(r.default.TimeOut)
					}, l.onreadystatechange = function() {
						if (4 == l.readyState && 0 != l.status)
							if (l.status >= 200 && l.status < 300) {
								c.default.info("\u5b8c\u6210\u5904\u7406--");
								var t = void 0;
								c.default.info("%s:\u6536\u5230[%d]:%s", e, l.mId, l.responseText);
								try {
									t = JSON.parse(l.responseText)
								} catch (t) {
									return c.default.error("\u89e3\u6790json\u51fa\u9519%s: %s", e, t), void i(r.default.BadJson)
								}
								"object" != typeof t || "number" != typeof t.code || "object" != typeof t.data ? o(t) : t.code == r.default.Ok ? o(t.data) : i(t.code)
							} else c.default.info("%s:\u6536\u5230[%d]:%d", e, l.mId, l.status), 404 == l.status && i(r.default.NotFound)
					}, l.open(e, t, !0), l.setRequestHeader("Access-Control-Allow-Origin", "*"), l.setRequestHeader("Authorization", null), l.setRequestHeader("App-Version", this.appVersion), l.setRequestHeader("Repeated-Submission", (new Date).getTime() + ""), cc.sys.isNative && l.setRequestHeader("Accept-Encoding", "gzip,deflate"), l.timeout = this.timeOut, "POST" == e ? (l.setRequestHeader("Content-Type", "application/json"), l.send(a)) : l.send(), c.default.info("%s[%d]:%s", e, l.mId, t), l
				}, t.mId = 0, t.timeOut = 5e3, t.appVersion = "1.0.0", t = __decorate([n], t)
			}(i.default);
		a.default = s, cc._RF.pop()
	}, {
		"../Log": "Log",
		"../kernels/Props": "Props",
		"./eCode": "eCode",
		"./netConfig": "netConfig"
	}],
	Item: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "8bdfd2iUmhOTJP2SVsiSZ7E", "Item"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			i = o.property,
			c = e("../../../common/Log"),
			r = e("../../config"),
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.anim1 = null, t.anim2 = null, t
				}
				return __extends(t, e), t.prototype.stateChange = function(e, t) {
					return __awaiter(this, void 0, void 0, function() {
						var t;
						return __generator(this, function(a) {
							for (c.default.info("\u8fdb\u5165\u72b6\u6001\u6539\u53d8", e), t = 0; t < this.node.children.length; t++) this.node.children[t].active = !1;
							return e >= 0 && e < this.node.children.length ? (this.node.children[e].active = !0, [2, this.node.children[e]]) : [2]
						})
					})
				}, t.prototype.onCollisionEnter = function(e, t) {
					var a = e.tag;
					return c.default.info("_item \u78b0\u649e:", r.default.propsEnum[a]), a
				}, __decorate([i({
					type: cc.Animation,
					displayName: "anim1"
				})], t.prototype, "anim1", void 0), __decorate([i({
					type: cc.Animation,
					displayName: "anim2"
				})], t.prototype, "anim2", void 0), t = __decorate([n], t)
			}(cc.Component);
		a.default = l, cc._RF.pop()
	}, {
		"../../../common/Log": "Log",
		"../../config": "config"
	}],
	Log: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "1533cA1bR9Gn7BRY4O3xKxA", "Log"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = 0,
			n = 1,
			i = 2,
			c = 3,
			r = function() {
				function e() {}
				return e.setLevel = function(t) {
					e.level = t
				}, e.debug = function() {
					for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
					e.level == o && e._output(1, e.formatS(t))
				}, e.info = function() {
					for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
					e.level > n || e._output(1, e.formatS(t))
				}, e.warn = function() {
					for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
					e.level > i || e._output(2, e.formatS(t))
				}, e.error = function() {
					for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
					e.level > c || e._output(3, e.formatS(t))
				}, e.getTime = function() {
					var e = new Date;
					return cc.js.formatStr("[%d.%d %d:%d:%d:%d]", e.getMonth() + 1, e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds())
				}, e._output = function(t, a) {
					var o = cc.js.formatStr("%s-> %s", e.getTime(), a);
					switch (t) {
						case 2:
							console.warn(o);
							break;
						case 3:
							console.error(o);
							break;
						default:
							console.log(o)
					}
					this.caches.push(o), this.caches.length > this.limit && this.caches.splice(0, 100)
				}, e.formatS = function() {
					for (var e, t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
					var o = t[0][0];
					return t[0].shift(), (e = cc.js).formatStr.apply(e, [o].concat(t[0]))
				}, e.caches = [], e.level = o, e.limit = 1e3, e
			}();
		a.default = r, cc._RF.pop()
	}, {}],
	Props: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "8613dbDRV1ItIVnlWXzUOVV", "Props"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../Log"),
			n = e("../Utils"),
			i = e("../Log"),
			c = function() {
				function e() {}
				return e.destroy = function() {
					this.Xclear()
				}, e.xflag = function(e) {
					this.flag = e
				}, e.xSet = function(e, t, a) {
					if (void 0 === t && (t = null), void 0 === a && (a = !0), "" == e) return o.default.error("\u5c5e\u6027\u67e5\u8be2\u5931\u8d25,\u65e0\u6548\u7684\u5c5e\u6027\u540d!"), !1;
					var i = this.props[e];
					return null != i ? i.v = t : this.props[e] = {
						v: t,
						v2: t,
						t: []
					}, a && this._notify(this.props[e]), t && (this.props[e].v2 = n.default.clone(t)), !0
				}, e.xGet = function(e, t) {
					void 0 === t && (t = null);
					var a = this._query(e);
					return a ? a.v : t
				}, e.xBind = function(e, t, a) {
					if (void 0 === a && (a = ""), "" == a) return o.default.error("\u76d1\u542c\u5931\u8d25,\u6807\u8bb0\u5fc5\u987b\u662f\u6709\u6548\u5b57\u7b26\u4e32"), !1;
					var n = this._query(e);
					if (null == n) return o.default.warn("\u5c5e\u6027\u76d1\u542c\u5931\u8d25,\u53c2\u6570\u4e0d\u5339\u914d!"), !1;
					for (var i = 0; i < n.t.length; i++) {
						if (n.t[i] == t) return o.default.warn("\u91cd\u590d\u76d1\u542c:" + e), !1
					}
					return n.t.push({
						cb: t,
						tag: a
					}), !0
				}, e.xUnbind = function(e) {
					if (i.default.info("\u8fdb\u5165\u89e3\u7ed1"), "" == e) return i.default.error("\u76d1\u542c\u89e3\u9664\u5931\u8d25,\u6807\u8bb0\u5fc5\u987b\u662f\u6709\u6548\u5b57\u7b26\u4e32"), !1;
					var t = 0;
					for (var a in this.props)
						for (var o = this.props[a], n = o.t.length - 1; n >= 0; n--) {
							var c = o.t[n];
							c && c.tag == e && (o.t.splice(n, 1), t++)
						}
					return i.default.info("\u4e3a[%s]\u89e3\u9664\u76d1\u542c[%d]\u4e2a.", e, t), !0
				}, e._query = function(e) {
					if ("" == e) return o.default.warn("\u5c5e\u6027\u67e5\u8be2\u5931\u8d25,\u65e0\u6548\u7684\u5c5e\u6027\u540d!"), null;
					var t = this.props[e];
					return void 0 === t ? (o.default.warn("\u5c5e\u6027\u67e5\u8be2\u5931\u8d25,\u4e0d\u5b58\u5728\u5c5e\u6027:" + e), null) : t
				}, e._notify = function(e) {
					for (var t in e.t) {
						var a = e.t[t];
						a && "function" == typeof a.cb && a.cb(e.v, e.v2)
					}
				}, e.Xclear = function() {
					this.props = {}
				}, e.flag = "", e.props = {}, e
			}();
		a.default = c, cc._RF.pop()
	}, {
		"../Log": "Log",
		"../Utils": "Utils"
	}],
	Prop: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "82c53M0S9BBGIJkFZG+Ux8d", "Prop"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../../common/Log"),
			n = e("../../../common/component/XButton"),
			i = e("../../config"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.name = "Prop", t.spr = null, t.box = null, t.click = null, t.index = 0, t.upH = 100, t.initPos = null, t.isPut = !1, t
				}
				return __extends(t, e), t.prototype.start = function() {
					console.log("\u7ed1\u5b9a\u70b9\u51fb"), this.click = this.node.parent.addComponent(n.default), this.click.addTouchStartEvent(this.node, this.name, "touchStart"), this.click.addTouchEvent(this.node, this.name, "touchEnd"), this.click.addTouchCancelEvent(this.node, this.name, "touchCancel"), this.node.parent.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove.bind(this))
				}, t.prototype.touchStart = function(e) {
					console.log("\u70b9\u51fb\u5f00\u59cb", this.node.group), this.initPos = this.spr.position
				}, t.prototype.touchMove = function(e) {
					console.log("\u70b9\u51fb\u79fb\u52a8");
					var t = e.touch.getDelta();
					this.spr.x += t.x, this.spr.y += t.y, this.box && (this.box.offset.x += t.x, this.box.offset.y += t.y)
				}, t.prototype.touchEnd = function(e) {
					console.log("\u70b9\u51fb\u7ed3\u675f"), this.spr.position = this.initPos, this.box && (this.box.offset = cc.v2(0, 0))
				}, t.prototype.touchCancel = function(e) {
					console.log("\u70b9\u51fb\u653e\u5f03"), this.spr.position = this.initPos, this.box && (this.box.offset = cc.v2(0, 0))
				}, t.prototype.onCollisionEnter = function(e, t) {
					var a = e.tag;
					return o.default.info("\u78b0\u649e:", i.default.propsEnum[a]), a
				}, t = __decorate([r], t)
			}(cc.Component));
		a.default = l, cc._RF.pop()
	}, {
		"../../../common/Log": "Log",
		"../../../common/component/XButton": "XButton",
		"../../config": "config"
	}],
	QTTApi: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "b89e68UCSVEAYR+yzTZJDWg", "QTTApi"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../Log"),
			n = e("./SDK"),
			i = e("../Audio"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, "sdk_qttapi"),
			s = function() {
				function e() {
					this.isShowBanner = !1, this.onLoad(), n.default.xBind("createBanner", this.createBanner.bind(this), l), n.default.xBind("hideBanner", this.hideBanner.bind(this), l)
				}
				return e.prototype.onLoad = function() {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(e) {
							return o.default.info("\u8da3\u5934\u6761\u5e7f\u544a\u521d\u59cb\u5316"), [2]
						})
					})
				}, e.prototype.createBanner = function() {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(e) {
							return qttGame.showBanner(), [2]
						})
					})
				}, e.prototype.hideBanner = function() {
					qttGame.hideBanner()
				}, e.createRewardedVideoAd = function(e, t) {
					var a = this;
					i.default.xGet("bgmVolume") >= .1 ? this.isVoice = !0 : this.isVoice = !1, i.default.slientBgm(), i.default.slientSFX(), i.default.stopAll();
					var o = {
						gametype: 1,
						rewardtype: 1,
						data: {}
					};
					o.data.title = "\u5237\u65b0\u9053\u5177", o.data.url = "//newidea4-gamecenter-frontend.1sapp.com/game/prod/fkxxl_img/1.png", qttGame.showVideo(function(e) {
						a.isVoice && (i.default.recoverSFX(), i.default.recoverBGM(), i.default.playBGM("audios/bgm/BGM_take2_192bit")), t(1 == e)
					}, o)
				}, e.v1VideoAdunitId = null, e.videoFun = null, e.isVoice = !1, e = __decorate([r], e)
			}();
		a.default = s, cc._RF.pop()
	}, {
		"../Audio": "Audio",
		"../Log": "Log",
		"./SDK": "SDK"
	}],
	SDK: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "47580OoSNlGQ6agxC4OlQcI", "SDK"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			i = (o.property, e("../kernels/Props")),
			c = e("../Log"),
			r = e("./QTTApi"),
			l = function(e) {
				function t() {
					var t = e.call(this) || this;
					return a.xSet("bannerAd", null, !1), a.xSet("createBanner", {}, !1), a.xSet("hideBanner", null, !1), a.xSet("destroyBanner", null, !1), a.xSet("rewardedVideoAd", null, !1), a.xSet("interstitialAd", null, !1), a.xSet("showInterstitialAd", null, !1), a.xSet("moreGames", null, !1), new r.default, a.sdkInstance = r.default, c.default.info("\u521d\u59cb\u5316sdk\u670d\u52a1\u6210\u529f"), t
				}
				var a;
				return __extends(t, e), a = t, t.watchVideo = function(e) {
					return void 0 === e && (e = ""), __awaiter(this, void 0, void 0, function() {
						var t = this;
						return __generator(this, function(a) {
							return [2, new Promise(function(a) {
								t.sdkInstance ? t.sdkInstance.createRewardedVideoAd(e, function(e) {
									a(!!e)
								}) : a(!0)
							})]
						})
					})
				}, t.shareApp = function() {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(e) {
							return this.sdkInstance.shareAppMessage(), [2]
						})
					})
				}, t.createImage = function(e) {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(t) {
							switch (t.label) {
								case 0:
									return [4, this.sdkInstance.createImage(e)];
								case 1:
									return [2, t.sent()]
							}
						})
					})
				}, t.sdkInstance = null, t = a = __decorate([n], t)
			}(i.default);
		a.default = l, cc._RF.pop()
	}, {
		"../Log": "Log",
		"../kernels/Props": "Props",
		"./QTTApi": "QTTApi"
	}],
	Stage10: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "77c8b2YFm5Pm4E1qtDnihrX", "Stage10"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("../config"),
			i = e("./GameData"),
			c = e("../HallData"),
			r = cc._decorator,
			l = r.ccclass,
			s = r.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.nata = null, t.kaguya = null, t.key = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), i.default.xSet("windowChange", 0, !1), i.default.xSet("lockerChange1", 0, !1), i.default.xSet("nata", !1, !1), i.default.xSet("bambooChange1", 0, !1), i.default.xSet("bambooChange2", 0, !1), i.default.xSet("bambooChange3", 0, !1), i.default.xSet("kaguya", !1, !1), i.default.xSet("doorChange", !1, !1), i.default.xSet("doorHandle", 0, !1)
				}, t.prototype.onEnable = function() {
					i.default.xBind("lockerChange1", this.lockerChange.bind(this), "zcbgs2_stage10"), i.default.xBind("bambooChange2", this.bambooChange2.bind(this), "zcbgs2_stage10"), i.default.xBind("bambooChange3", this.bambooChange3.bind(this), "zcbgs2_stage10"), i.default.xBind("windowChange", this.windowChange.bind(this), "zcbgs2_stage10"), i.default.xBind("doorHandle", this.doorHandle.bind(this), "zcbgs2_stage10")
				}, t.prototype.lockerChange = function(e) {
					this.nata.active = !1, 0 == e || i.default.xGet("nata") || (this.nata.active = !0)
				}, t.prototype.onTouchNata = function() {
					i.default.xSet("nata", !0), this.nata.active = !1, c.default.xSet("propGetPanel", n.default.propsEnum.nata)
				}, t.prototype.bambooChange2 = function(e) {
					2 == e && (this.forbidControl(), this.scheduleOnce(function() {
						c.default.xSet("gameOverPanel", 1)
					}, .5))
				}, t.prototype.bambooChange3 = function(e) {
					3 == e && (this.kaguya.active = !0)
				}, t.prototype.onTouchKaguya = function() {
					i.default.xSet("kaguya", !0), this.kaguya.active = !1, c.default.xSet("propGetPanel", n.default.propsEnum.kaguya)
				}, t.prototype.windowChange = function(e) {
					var t = this;
					2 == e && (this.forbidControl(), this.key.active = !0, this.scheduleOnce(function() {
						i.default.xSet("windowChange", 1), t.recoverControl()
					}, 2))
				}, t.prototype.onTouchKey = function() {
					this.key.active = !1, c.default.xSet("propGetPanel", n.default.propsEnum.key)
				}, t.prototype.doorHandle = function(e) {
					2 == e && i.default.xSet("doorChange", 3), 3 == e && c.default.xSet("gamePassPanel", 4)
				}, __decorate([s({
					type: cc.Node,
					displayName: "\u5200"
				})], t.prototype, "nata", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u5929\u795e"
				})], t.prototype, "kaguya", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u94a5\u5319"
				})], t.prototype, "key", void 0), t = __decorate([l], t)
			}(o.default);
		a.default = u, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"../config": "config",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage11: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "52ceb1kC0lIoJZfr6Yu6acf", "Stage11"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("./GameData"),
			i = e("../config"),
			c = e("../../common/Log"),
			r = e("../HallData"),
			l = cc._decorator,
			s = l.ccclass,
			u = l.property,
			d = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.hideBoss = null, t.tea = null, t.chabuNode = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), n.default.xSet("lockerChange1", 0, !1), n.default.xSet("femaleBossChange", 0, !1), n.default.xSet("grandmaChange", 0, !1), n.default.xSet("chabuChange", 0, !1), n.default.xSet("doorChange", 0, !1), n.default.xSet("doorHandle", 0, !1), n.default.xSet("chabu", 0)
				}, t.prototype.onEnable = function() {
					n.default.xBind("lockerChange1", this.lockerChange.bind(this), "zcbgs2_stage11"), n.default.xBind("doorHandle", this.doorHandle.bind(this), "zcbgs2_stage11"), n.default.xBind("chabu", this.chabu.bind(this), "zcbgs2_stage11"), n.default.xBind("chabuChange", this.chabuChange.bind(this), "zcbgs2_stage11")
				}, t.prototype.lockerChange = function(e) {
					0 == e && (this.hideBoss.active = !1), 1 == e && (this.forbidControl(), this.hideBoss.active = !0, this.scheduleOnce(function() {
						r.default.xSet("gameOverPanel", 1)
					}, .5))
				}, t.prototype.onTouchTea = function() {
					this.tea.active = !1, r.default.xSet("propGetPanel", i.default.propsEnum.tea)
				}, t.prototype.onTouchChabu = function() {
					n.default.xSet("chabuChange", 3)
				}, t.prototype.doorHandle = function(e) {
					0 == e && 999 == n.default.xGet("femaleBossChange") ? n.default.xSet("doorChange", 1) : 1 == e && r.default.xSet("gamePassPanel", 1)
				}, t.prototype.shiftPage = function() {
					c.default.info("\u5207\u6362\u9875\u7801"), 1 == n.default.xGet("chabuChange") && (n.default.xSet("chabuChange", 1), n.default.xSet("femaleBossChange", 999))
				}, t.prototype.chabu = function(e) {
					this.chabuNode.active = 0 != e
				}, t.prototype.chabuChange = function(e) {
					3 == e && (this.forbidControl(), this.scheduleOnce(function() {
						n.default.xSet("femaleBossChange", 1)
					}, .3))
				}, __decorate([u({
					type: cc.Node,
					displayName: "\u85cf\u7740\u7684boss"
				})], t.prototype, "hideBoss", void 0), __decorate([u({
					type: cc.Node,
					displayName: "\u8336\u6c34"
				})], t.prototype, "tea", void 0), __decorate([u({
					type: cc.Node,
					displayName: "\u8336\u51e0"
				})], t.prototype, "chabuNode", void 0), t = __decorate([s], t)
			}(o.default);
		a.default = d, cc._RF.pop()
	}, {
		"../../common/Log": "Log",
		"../HallData": "HallData",
		"../config": "config",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage12: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "94504B2eIBNWbwQYqXGUw6z", "Stage12"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("./GameData"),
			i = e("../config"),
			c = e("../HallData"),
			r = cc._decorator,
			l = r.ccclass,
			s = r.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.beer = null, t.book = null, t.water = null, t.key = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), n.default.xSet("beer", 0, !1), n.default.xSet("sitBossChange", 0, !1), n.default.xSet("flowerChange", 0, !1), n.default.xSet("sinkChange", 0, !1), n.default.xSet("freezer1Change", 0, !1), n.default.xSet("freezer2Change", 0, !1), n.default.xSet("doorChange", !1, !1), n.default.xSet("doorHandle", 0, !1)
				}, t.prototype.onEnable = function() {
					n.default.xBind("freezer2Change", this.freezer2Change.bind(this), "zcbgs2_stage12"), n.default.xBind("flowerChange", this.flowerChange.bind(this), "zcbgs2_stage12"), n.default.xBind("doorHandle", this.doorHandle.bind(this), "zcbgs2_stage12")
				}, t.prototype.onTouchBeer = function() {
					n.default.xSet("beer", !0), this.beer.active = !1, c.default.xSet("propGetPanel", i.default.propsEnum.beer)
				}, t.prototype.onTouchBook = function() {
					this.book.active = !1, c.default.xSet("propGetPanel", i.default.propsEnum.book)
				}, t.prototype.onTouchWater = function() {
					0 != n.default.xGet("sitBossChange") ? (this.water.active = !1, c.default.xSet("propGetPanel", i.default.propsEnum.water)) : n.default.xSet("sitBossChange", 1)
				}, t.prototype.onTouchKey = function() {
					this.key.active = !1, c.default.xSet("propGetPanel", i.default.propsEnum.key)
				}, t.prototype.freezer2Change = function(e) {
					this.beer.active = !1, 1 == e && (n.default.xGet("beer") || (this.beer.active = !0))
				}, t.prototype.flowerChange = function(e) {
					2 == e && (this.key.active = !0)
				}, t.prototype.doorHandle = function(e) {
					2 == e && n.default.xSet("doorChange", 3), 3 == e && c.default.xSet("gamePassPanel", 5)
				}, __decorate([s({
					type: cc.Node,
					displayName: "\u5564\u9152"
				})], t.prototype, "beer", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u9ec4\u4e66"
				})], t.prototype, "book", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u77ff\u6cc9\u6c34\u74f6"
				})], t.prototype, "water", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u94a5\u5319"
				})], t.prototype, "key", void 0), t = __decorate([l], t)
			}(o.default);
		a.default = u, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"../config": "config",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage13: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "ba052Q8RdtPwLf5q/Ixuols", "Stage13"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("../config"),
			i = e("../../common/Utils"),
			c = e("./GameData"),
			r = e("../HallData"),
			l = cc._decorator,
			s = l.ccclass,
			u = l.property,
			d = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.hideBoss = null, t.yankee = null, t.mohawk = null, t.bikeAnim = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), c.default.xSet("bikeChange", 0, !1), c.default.xSet("yankeeChange", 0, !1), c.default.xSet("lockerChange1", 0, !1), c.default.xSet("lockerChange2", 0, !1), c.default.xSet("doorChange", 0, !1)
				}, t.prototype.onEnable = function() {
					c.default.xBind("lockerChange2", this.lockerChange2.bind(this), "zcbgs2_stage13"), c.default.xBind("yankeeChange", this.yankeeChange.bind(this), "zcbgs2_stage13"), c.default.xBind("bikeChange", this.bikeChange.bind(this), "zcbgs2_stage13")
				}, t.prototype.lockerChange2 = function(e) {
					0 == e && (this.hideBoss.active = !1), 1 == e && (this.forbidControl(), this.hideBoss.active = !0, this.scheduleOnce(function() {
						r.default.xSet("gameOverPanel", 1)
					}, .5))
				}, t.prototype.yankeeChange = function(e) {
					var t = this;
					this.forbidControl(), 1 == e && this.scheduleOnce(function() {
						c.default.xSet("yankeeChange", 999), t.yankee.active = !0, t.scheduleOnce(function() {
							t.yankee.active = !1, t.recoverControl()
						}, .5)
					}, .5)
				}, t.prototype.onTouchMohawk = function() {
					this.mohawk.active = !1, r.default.xSet("propGetPanel", n.default.propsEnum.mohawk)
				}, t.prototype.madRunAnim = function() {
					return __awaiter(this, void 0, void 0, function() {
						var e, t;
						return __generator(this, function(a) {
							switch (a.label) {
								case 0:
									return this.forbidControl(), e = new cc.Node, t = e.addComponent(cc.Sprite), [4, i.default.loadImage("texture/charactor/c25_otsu3")];
								case 1:
									return t.spriteFrame = a.sent(), this.node.addChild(e), e.position = cc.v2(-500, -100), e.runAction(cc.sequence(cc.moveBy(.8, cc.v2(250, -100)), cc.callFunc(function() {
										r.default.xSet("gameOverPanel", 5)
									}))), [2]
							}
						})
					})
				}, t.prototype.bikeChange = function(e) {
					1 == e && this.madRunAnim()
				}, t.prototype.shiftPage = function() {
					var e = this;
					999 == c.default.xGet("yankeeChange") && 0 == c.default.xGet("doorChange") && (this.forbidControl(), c.default.xSet("bikeChange", 2), this.bikeAnim.play("bike"), this.bikeAnim.on("finished", function() {
						c.default.xSet("doorChange", 4), e.recoverControl()
					}))
				}, __decorate([u({
					type: cc.Node,
					displayName: "\u85cf\u7740\u7684boss"
				})], t.prototype, "hideBoss", void 0), __decorate([u({
					type: cc.Node,
					displayName: "\u7f8e\u56fd\u4f6c"
				})], t.prototype, "yankee", void 0), __decorate([u({
					type: cc.Node,
					displayName: "\u83ab\u897f\u5e72"
				})], t.prototype, "mohawk", void 0), __decorate([u({
					type: cc.Animation,
					displayName: "\u8f66\u8f86\u98de\u9a70\u52a8\u753b"
				})], t.prototype, "bikeAnim", void 0), t = __decorate([s], t)
			}(o.default);
		a.default = d, cc._RF.pop()
	}, {
		"../../common/Utils": "Utils",
		"../HallData": "HallData",
		"../config": "config",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage14: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "0e5e9wrCKBEH4JgwbCwTPYU", "Stage14"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("./GameData"),
			i = e("../config"),
			c = e("../HallData"),
			r = cc._decorator,
			l = r.ccclass,
			s = r.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.cloth = null, t.lamp1 = null, t.lamp1Anim = null, t.lamp2 = null, t.lamp2Anim = null, t.lamp3 = null, t.lamp3Anim = null, t.key = null, t.carpetAnim = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), n.default.xSet("carpetFlyAnim", 0, !1), n.default.xSet("lockerChange1", 0, !1), n.default.xSet("cloth", !1, !1), n.default.xSet("doorChange", 0, !1), n.default.xSet("doorHandle", 3, !1), n.default.xSet("lampChange", 0, !1)
				}, t.prototype.onEnable = function() {
					n.default.xBind("carpetFlyAnim", this.carpetFlyAnim.bind(this), "zcbgs2_stage14"), n.default.xBind("lockerChange1", this.lockerChange1.bind(this), "zcbgs2_stage14"), n.default.xBind("lampChange", this.lampChange.bind(this), "zcbgs2_stage14"), n.default.xBind("doorHandle", this.doorHandle.bind(this), "zcbgs2_stage14")
				}, t.prototype.lockerChange1 = function(e) {
					1 == e ? n.default.xGet("cloth") || (this.cloth.active = !0) : this.cloth.active = !1
				}, t.prototype.onTouchCloth = function() {
					this.cloth.active = !1, n.default.xSet("cloth", !0), c.default.xSet("propGetPanel", i.default.propsEnum.cloth)
				}, t.prototype.onTouchKey = function() {
					this.key.active = !1, c.default.xSet("propGetPanel", i.default.propsEnum.key)
				}, t.prototype.onTouchMajin = function() {
					this.lamp2.active = !1, c.default.xSet("propGetPanel", i.default.propsEnum.majin)
				}, t.prototype.lampChange = function(e, t) {
					var a = this;
					0 == t && (this.forbidControl(), 1 == e ? (this.lamp1Anim.play("clean_lamp1"), this.lamp1Anim.on("finished", function() {
						a.lamp1.active = !0, a.scheduleOnce(function() {
							c.default.xSet("gameOverPanel", 1)
						}, .5)
					})) : 2 == e ? (this.lamp2Anim.play("clean_lamp2"), this.lamp2Anim.on("finished", function() {
						a.lamp2.active = !0, a.recoverControl()
					})) : 3 == e && (this.lamp3Anim.play("clean_lamp3"), this.lamp3Anim.on("finished", function() {
						a.lamp3.active = !0, a.recoverControl()
					})))
				}, t.prototype.doorHandle = function(e) {
					this.forbidControl(), 2 == e && (n.default.xSet("doorChange", 5), this.scheduleOnce(function() {
						c.default.xSet("gameOverPanel", 2)
					}, .5))
				}, t.prototype.carpetFlyAnim = function() {
					this.carpetAnim.play("carpet_fly"), this.carpetAnim.on("finished", function() {
						c.default.xSet("gamePassPanel", 7)
					})
				}, __decorate([s({
					type: cc.Node,
					displayName: "\u624b\u5e15"
				})], t.prototype, "cloth", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u8001\u677f\u795e"
				})], t.prototype, "lamp1", void 0), __decorate([s({
					type: cc.Animation,
					displayName: "\u64e6\u676f1"
				})], t.prototype, "lamp1Anim", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u963f\u62c9\u4e01"
				})], t.prototype, "lamp2", void 0), __decorate([s({
					type: cc.Animation,
					displayName: "\u64e6\u676f2"
				})], t.prototype, "lamp2Anim", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u7f8e\u56fd\u4f6c"
				})], t.prototype, "lamp3", void 0), __decorate([s({
					type: cc.Animation,
					displayName: "\u64e6\u676f3"
				})], t.prototype, "lamp3Anim", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u94a5\u5319"
				})], t.prototype, "key", void 0), __decorate([s({
					type: cc.Animation,
					displayName: "\u98de\u6bef\u52a8\u753b"
				})], t.prototype, "carpetAnim", void 0), t = __decorate([l], t)
			}(o.default);
		a.default = u, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"../config": "config",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage15: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "60799nPgrdIQbtRhf8oseNt", "Stage15"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("./GameData"),
			i = e("../config"),
			c = e("../../common/Log"),
			r = e("../HallData"),
			l = cc._decorator,
			s = l.ccclass,
			u = l.property,
			d = "zcbgs2_stage15",
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.boss = null, t.net = null, t.spider = null, t.setp = null, t.down = null, t.netAnim = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), n.default.xSet("lockerChange1", 0, !1), n.default.xSet("lockerChange2", 0, !1), n.default.xSet("femaleBossChange", 0, !1), n.default.xSet("net", !1, !1), n.default.xSet("spider", !1, !1), n.default.xSet("downAnim", !1, !1), n.default.xSet("spiderMove", !1, !1), n.default.xSet("playerMove", !1, !1)
				}, t.prototype.onEnable = function() {
					n.default.xBind("femaleBossChange", this.femaleBossChange.bind(this), d), n.default.xBind("lockerChange1", this.lockerChange1.bind(this), d), n.default.xBind("lockerChange2", this.lockerChange2.bind(this), d), n.default.xBind("spider", this.onSpider.bind(this), d), n.default.xBind("downAnim", this.downAnim.bind(this), d), n.default.xBind("spiderMove", this.spiderMove.bind(this), d), n.default.xBind("playerMove", this.playerMove.bind(this), d)
				}, t.prototype.femaleBossChange = function(e) {
					this.forbidControl(), 1 == e && this.scheduleOnce(function() {
						r.default.xSet("gameOverPanel", 2)
					}, .5)
				}, t.prototype.lockerChange1 = function(e) {
					0 == e ? this.net.active = !1 : 1 == e && (n.default.xGet("net") || (this.net.active = !0))
				}, t.prototype.lockerChange2 = function(e) {
					0 == e ? this.boss.active = !1 : 1 == e && (this.boss.active = !0)
				}, t.prototype.onTouchNet = function() {
					this.net.active = !1, n.default.xSet("net", !0), r.default.xSet("propGetPanel", i.default.propsEnum.net)
				}, t.prototype.onTouchStep = function() {
					this.setp.active = !1, r.default.xSet("propGetPanel", i.default.propsEnum.step)
				}, t.prototype.onSpider = function(e) {
					this.spider.active = !e
				}, t.prototype.onTouchThread = function() {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(e) {
							switch (e.label) {
								case 0:
									return [4, this.playerMove()];
								case 1:
									return e.sent(), r.default.xSet("gamePassPanel", 18), [2]
							}
						})
					})
				}, t.prototype.spiderMove = function() {
					var e = this;
					return c.default.info("run"), this.forbidControl(), this.netAnim.play("spider_move"), new Promise(function(t) {
						e.netAnim.on("finished", function() {
							e.recoverControl(), t()
						})
					})
				}, t.prototype.playerMove = function() {
					var e = this;
					return this.forbidControl(), this.netAnim.play("net_playerMove"), new Promise(function(t) {
						e.netAnim.on("finished", function() {
							e.recoverControl(), t()
						})
					})
				}, t.prototype.downAnim = function() {
					var e = this;
					this.forbidControl(), this.down.play("step_down"), this.down.on("finished", function() {
						e.scheduleOnce(function() {
							r.default.xSet("gameOverPanel", 4)
						}, .5)
					})
				}, __decorate([u({
					type: cc.Node,
					displayName: "\u745f\u745f\u53d1\u6296\u7684\u8001\u677f"
				})], t.prototype, "boss", void 0), __decorate([u({
					type: cc.Node,
					displayName: "\u6355\u866b\u7f51"
				})], t.prototype, "net", void 0), __decorate([u({
					type: cc.Node,
					displayName: "\u8718\u86db"
				})], t.prototype, "spider", void 0), __decorate([u({
					type: cc.Node,
					displayName: "\u51f3\u5b50"
				})], t.prototype, "setp", void 0), __decorate([u({
					type: cc.Animation,
					displayName: "\u8dcc\u843d\u52a8\u753b"
				})], t.prototype, "down", void 0), __decorate([u({
					type: cc.Animation,
					displayName: "\u7f51\u52a8\u753b"
				})], t.prototype, "netAnim", void 0), t = __decorate([s], t)
			}(o.default);
		a.default = p, cc._RF.pop()
	}, {
		"../../common/Log": "Log",
		"../HallData": "HallData",
		"../config": "config",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage16: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "64af0NfagdC+5wiRa+7oH7x", "Stage16"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("./GameData"),
			i = e("../config"),
			c = e("../HallData"),
			r = cc._decorator,
			l = r.ccclass,
			s = r.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.remocon = null, t.orange = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), n.default.xSet("doorChange", 0, !1), n.default.xSet("doorHandle", 0, !1), n.default.xSet("drawerChange", 0, !1), n.default.xSet("remocon", !1, !1), n.default.xSet("twoBossChange", 0, !1), n.default.xSet("tvChange", !1, !1), n.default.xSet("kotatsuChange", !1, !1)
				}, t.prototype.onEnable = function() {
					n.default.xBind("drawerChange", this.drawerChange.bind(this), "zcbgs2_stage16"), n.default.xBind("remocon", this.remoconChange.bind(this), "zcbgs2_stage16"), n.default.xBind("twoBossChange", this.twoBossChange.bind(this), "zcbgs2_stage16"), n.default.xBind("doorHandle", this.doorHandle.bind(this), "zcbgs2_stage16")
				}, t.prototype.drawerChange = function(e) {
					this.remocon.active = !1, 2 == e && (n.default.xGet("remocon") || (this.remocon.active = !0))
				}, t.prototype.remoconChange = function(e) {
					this.remocon.active = !e
				}, t.prototype.onTouchRemocon2 = function() {
					n.default.xSet("remocon", !0), c.default.xSet("propGetPanel", i.default.propsEnum.remocon2)
				}, t.prototype.onTouchOrange = function() {
					this.orange.active = !1, c.default.xSet("propGetPanel", i.default.propsEnum.orange)
				}, t.prototype.twoBossChange = function(e) {
					1 == e && c.default.xSet("gameOverPanel", 5)
				}, t.prototype.shiftPage = function() {
					1 == n.default.xGet("kotatsuChange") && 1 == n.default.xGet("tvChange") && (n.default.xSet("twoBossChange", 999), n.default.xSet("kotatsuChange", 2))
				}, t.prototype.doorHandle = function(e) {
					0 == e ? 999 == n.default.xGet("twoBossChange") && n.default.xSet("doorChange", 1) : 1 == e && c.default.xSet("gamePassPanel", 1)
				}, __decorate([s({
					type: cc.Node,
					displayName: "\u9065\u63a7\u5668"
				})], t.prototype, "remocon", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u6a58\u5b50"
				})], t.prototype, "orange", void 0), t = __decorate([l], t)
			}(o.default);
		a.default = u, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"../config": "config",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage17: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "e4a11tu0dFK/onswR0i7Bpl", "Stage17"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("./GameData"),
			i = e("../config"),
			c = e("../HallData"),
			r = cc._decorator,
			l = r.ccclass,
			s = r.property,
			u = "zcbgs2_stage17",
			d = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.hideBoss = null, t.spoon = null, t.glasses = null, t.superMan = null, t.play = null, t.key = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), n.default.xSet("doorChange", 0, !1), n.default.xSet("doorHandle", 0, !1), n.default.xSet("lockerChange1", !1, !1), n.default.xSet("lockerChange2", !1, !1), n.default.xSet("supermanChange", 0, !1), n.default.xSet("TNTChange", 0, !1), n.default.xSet("a08", !1, !1)
				}, t.prototype.onEnable = function() {
					n.default.xBind("lockerChange1", this.lockerChange1.bind(this), u), n.default.xBind("lockerChange2", this.lockerChange2.bind(this), u), n.default.xBind("doorHandle", this.doorHandle.bind(this), u), n.default.xBind("supermanChange", this.supermanChange.bind(this), u), n.default.xBind("TNTChange", this.TNTChange.bind(this), u), n.default.xBind("a08", this.a08.bind(this), u)
				}, t.prototype.lockerChange1 = function(e) {
					1 == e && (this.forbidControl(), this.hideBoss.active = !0, this.scheduleOnce(function() {
						c.default.xSet("gameOverPanel", 1)
					}, .5))
				}, t.prototype.lockerChange2 = function(e) {
					0 == n.default.xGet("supermanChange") && (this.superMan.active = 1 == e)
				}, t.prototype.onTouchSpoon = function() {
					this.spoon.active = !1, c.default.xSet("propGetPanel", i.default.propsEnum.spoon)
				}, t.prototype.supermanChange = function(e) {
					2 == e && c.default.xSet("gameOverPanel", 6)
				}, t.prototype.onTouchGlasses = function() {
					this.glasses.active = !1, c.default.xSet("propGetPanel", i.default.propsEnum.glasses)
				}, t.prototype.onTouchHero = function() {
					this.superMan.active = !1, c.default.xSet("propGetPanel", i.default.propsEnum.hero)
				}, t.prototype.TNTChange = function() {
					return __awaiter(this, void 0, void 0, function() {
						var e = this;
						return __generator(this, function(t) {
							return this.forbidControl(), n.default.xSet("supermanChange", 4), this.superMan.position = cc.v2(0, 0), [2, new Promise(function(t) {
								e.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
									n.default.xSet("supermanChange", 5)
								}), cc.delayTime(.4), cc.callFunc(function() {
									n.default.xSet("supermanChange", 4)
								}), cc.delayTime(.3), cc.callFunc(function() {
									n.default.xSet("supermanChange", 5)
								}), cc.delayTime(.2), cc.callFunc(function() {
									n.default.xSet("supermanChange", 4)
								}), cc.delayTime(.1), cc.callFunc(function() {
									n.default.xSet("supermanChange", 5), e.recoverControl(), t()
								})))
							})]
						})
					})
				}, t.prototype.a08 = function() {
					var e = this;
					this.play.play("a08"), this.play.on("finished", function() {
						e.key.active = !0
					})
				}, t.prototype.onTouchKey = function() {
					this.key.active = !1, c.default.xSet("propGetPanel", i.default.propsEnum.key)
				}, t.prototype.doorHandle = function(e) {
					2 == e && n.default.xSet("doorChange", 3), 3 == e && c.default.xSet("gamePassPanel", 8)
				}, t.prototype.onTouchkaijyu = function() {
					c.default.xSet("gameOverPanel", 7)
				}, __decorate([s({
					type: cc.Node,
					displayName: "\u85cf\u8d77\u6765\u7684\u8001\u677f"
				})], t.prototype, "hideBoss", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u6c64\u5319"
				})], t.prototype, "spoon", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u773c\u955c"
				})], t.prototype, "glasses", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u8fea\u8fe6"
				})], t.prototype, "superMan", void 0), __decorate([s({
					type: cc.Animation,
					displayName: "\u8fea\u8fe6"
				})], t.prototype, "play", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u94a5\u5319"
				})], t.prototype, "key", void 0), t = __decorate([l], t)
			}(o.default);
		a.default = d, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"../config": "config",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage18: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "cba604o3jtK2pERoCC1bGGB", "Stage18"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("./GameData"),
			i = e("../config"),
			c = e("../HallData"),
			r = e("../../common/Log"),
			l = cc._decorator,
			s = l.ccclass,
			u = l.property,
			d = "zcbgs2_stage18",
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.boss = null, t.lens1 = null, t.lens2 = null, t.frame = null, t.drink = null, t.anim = null, t.key = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), n.default.xSet("compFin", null, !1), n.default.xSet("lockerChange1", 0, !1), n.default.xSet("lens1", !1, !1), n.default.xSet("lens2", !1, !1), n.default.xSet("frame", !1, !1), n.default.xSet("box1Change", 0, !1), n.default.xSet("box2Change", 0, !1), n.default.xSet("drawerChange", 0, !1), n.default.xSet("checkComp", !1, !1), n.default.xSet("chair1Change", 0, !1), n.default.xSet("doorChange", 0, !1), n.default.xSet("doorHandle", 0, !1)
				}, t.prototype.onEnable = function() {
					n.default.xBind("lockerChange1", this.lockerChange1.bind(this), d), n.default.xBind("drawerChange", this.drawerChange.bind(this), d), n.default.xBind("box2Change", this.box2Change.bind(this), d), n.default.xBind("checkComp", this.checkComp.bind(this), d), n.default.xBind("compFin", this.compFin.bind(this), d), n.default.xBind("chair1Change", this.chair1Change.bind(this), d), n.default.xBind("doorHandle", this.doorHandle.bind(this), d)
				}, t.prototype.lockerChange1 = function(e) {
					1 == e ? n.default.xGet("lens2") || (this.lens2.active = !0) : this.lens2.active = !1
				}, t.prototype.drawerChange = function(e) {
					this.lens1.active = !1, this.frame.active = !1, 1 == e ? n.default.xGet("lens1") || (this.lens1.active = !0) : 2 == e && (n.default.xGet("frame") || (this.frame.active = !0))
				}, t.prototype.box2Change = function(e) {
					this.drink.active = !1, 0 == e ? this.drink.active = !1 : 1 == e && (this.drink.active = !0)
				}, t.prototype.onTouchDrink = function() {
					this.drink.active = !1, c.default.xSet("propGetPanel", i.default.propsEnum.drink)
				}, t.prototype.onTouchLens1 = function() {
					n.default.xSet("lens1", !0), this.lens1.active = !1, c.default.xSet("propGetPanel", i.default.propsEnum.lens1)
				}, t.prototype.onTouchLens2 = function() {
					n.default.xSet("lens2", !0), this.lens2.active = !1, c.default.xSet("propGetPanel", i.default.propsEnum.lens2)
				}, t.prototype.onTouchGlasses = function() {
					n.default.xSet("frame", !0), this.frame.active = !1, c.default.xSet("propGetPanel", i.default.propsEnum.frame)
				}, t.prototype.checkComp = function() {
					n.default.xGet("lens1") && n.default.xGet("lens2") && n.default.xGet("frame") && n.default.xSet("delCanCom")
				}, t.prototype.compFin = function() {
					r.default.info("\u5408\u6210\u7ed3\u675f"), c.default.xSet("propGetPanel", i.default.propsEnum.glasses3d)
				}, t.prototype.onTouchBoss = function() {
					this.boss.active = !1, c.default.xSet("propGetPanel", i.default.propsEnum.boss18)
				}, t.prototype.chair1Change = function(e) {
					var t = this;
					2 == e && (this.anim.play("a09"), this.anim.on("finished", function() {
						t.key.active = !0
					}))
				}, t.prototype.onTouchKey = function() {
					this.key.active = !1, c.default.xSet("propGetPanel", i.default.propsEnum.key)
				}, t.prototype.doorHandle = function(e) {
					2 == e ? n.default.xSet("doorChange", 3) : 3 == e && c.default.xSet("gamePassPanel", 1)
				}, __decorate([u({
					type: cc.Node,
					displayName: "\u8001\u677f"
				})], t.prototype, "boss", void 0), __decorate([u({
					type: cc.Node,
					displayName: "\u955c\u72471"
				})], t.prototype, "lens1", void 0), __decorate([u({
					type: cc.Node,
					displayName: "\u955c\u72472"
				})], t.prototype, "lens2", void 0), __decorate([u({
					type: cc.Node,
					displayName: "3d\u955c\u6846"
				})], t.prototype, "frame", void 0), __decorate([u({
					type: cc.Node,
					displayName: "\u52a0\u73ed\u996e\u6599"
				})], t.prototype, "drink", void 0), __decorate([u({
					type: cc.Animation,
					displayName: "\u5413\u660f\u52a8\u753b"
				})], t.prototype, "anim", void 0), __decorate([u({
					type: cc.Node,
					displayName: "\u94a5\u5319"
				})], t.prototype, "key", void 0), t = __decorate([s], t)
			}(o.default);
		a.default = p, cc._RF.pop()
	}, {
		"../../common/Log": "Log",
		"../HallData": "HallData",
		"../config": "config",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage19: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "5b9f7+PA+lCW5UD4VfYgT09", "Stage19"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("./GameData"),
			i = e("../config"),
			c = e("../HallData"),
			r = cc._decorator,
			l = r.ccclass,
			s = r.property,
			u = "zcbgs2_stage19",
			d = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.fishing = null, t.pump = null, t.snapp = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), n.default.xSet("sitBossChange", 0, !1), n.default.xSet("fishing", !1, !1), n.default.xSet("pump", !1, !1), n.default.xSet("lockerChange1", 0, !1), n.default.xSet("lockerChange2", 0, !1), n.default.xSet("tankChange", 0, !1), n.default.xSet("pondChange", 0, !1), n.default.xSet("snapp", !1, !1), n.default.xSet("doorHandle", 0, !1), n.default.xSet("doorChange", 0, !1), n.default.xSet("keeperChange", 0, !1)
				}, t.prototype.onEnable = function() {
					n.default.xBind("fishing", this.onFishing.bind(this), u), n.default.xBind("pump", this.onPump.bind(this), u), n.default.xBind("snapp", this.onSnapp.bind(this), u), n.default.xBind("lockerChange1", this.lockerChange1.bind(this), u), n.default.xBind("lockerChange2", this.lockerChange2.bind(this), u), n.default.xBind("doorHandle", this.doorHandle.bind(this), u)
				}, t.prototype.onTouchFishing = function() {
					n.default.xSet("fishing", !0), c.default.xSet("propGetPanel", i.default.propsEnum.fishing)
				}, t.prototype.onTouchPump = function() {
					n.default.xSet("pump", !0), c.default.xSet("propGetPanel", i.default.propsEnum.pump)
				}, t.prototype.onTouchSnapp = function() {
					c.default.xSet("gameOverPanel", 8)
				}, t.prototype.onFishing = function(e) {
					this.fishing.active = !e
				}, t.prototype.onPump = function(e) {
					this.pump.active = !e
				}, t.prototype.onSnapp = function(e) {
					this.snapp.active = e
				}, t.prototype.lockerChange1 = function(e) {
					1 == e ? n.default.xGet("fishing") || (this.fishing.active = !0) : this.fishing.active = !1
				}, t.prototype.lockerChange2 = function(e) {
					1 == e ? n.default.xGet("pump") || (this.pump.active = !0) : this.pump.active = !1
				}, t.prototype.doorHandle = function(e) {
					0 == e ? 0 != n.default.xGet("keeperChange") && n.default.xSet("doorChange", 1) : 1 == e && c.default.xSet("gamePassPanel", 9)
				}, __decorate([s({
					type: cc.Node,
					displayName: "\u9c7c\u7aff"
				})], t.prototype, "fishing", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u5438\u6c34\u673a"
				})], t.prototype, "pump", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u4e4c\u9f9f"
				})], t.prototype, "snapp", void 0), t = __decorate([l], t)
			}(o.default);
		a.default = d, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"../config": "config",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage1: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "82ef1sgNyVJFZfVETkEpPL4", "Stage1"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			i = o.property,
			c = e("./Stage"),
			r = e("../config"),
			l = e("./GameData"),
			s = e("../HallData"),
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.key = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), l.default.xSet("sitBossChange", 0, !1), l.default.xSet("drawerChange", 0, !1), l.default.xSet("key", !1, !1), l.default.xSet("doorHandle", 0, !1), l.default.xSet("doorChange", 0, !1)
				}, t.prototype.onEnable = function() {
					l.default.xBind("key", this.onKey.bind(this), "zcbgs2_stage1"), l.default.xBind("drawerChange", this.drawerChange.bind(this), "zcbgs2_stage1"), l.default.xBind("doorHandle", this.doorHandle.bind(this), "zcbgs2_stage1"), s.default.xSet("howToPanel")
				}, t.prototype.onTouchKey = function() {
					l.default.xSet("key", !0), s.default.xSet("propGetPanel", r.default.propsEnum.key)
				}, t.prototype.onKey = function(e) {
					this.key.active = !e
				}, t.prototype.drawerChange = function(e) {
					this.key.active = !1, 2 == e && (l.default.xGet("key") || (this.key.active = !0))
				}, t.prototype.doorHandle = function(e) {
					2 == e && l.default.xSet("doorChange", 3), 3 == e && s.default.xSet("gamePassPanel", 1)
				}, __decorate([i({
					type: cc.Node,
					displayName: "\u94a5\u5319"
				})], t.prototype, "key", void 0), t = __decorate([n], t)
			}(c.default);
		a.default = u, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"../config": "config",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage20: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "b5b03yshVlNqIir5t+9IyAY", "Stage20"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("./GameData"),
			i = e("../config"),
			c = e("../HallData"),
			r = cc._decorator,
			l = r.ccclass,
			s = r.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.bone = null, t.bait = null, t.rod = null, t.key = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), n.default.xSet("bait", !1, !1), n.default.xSet("lockerChange1", 0, !1), n.default.xSet("lockerChange2", 0, !1), n.default.xSet("whaleChange", 0, !1), n.default.xSet("tankChange", 0, !1), n.default.xSet("doorChange", 0, !1), n.default.xSet("doorHandle", 0, !1)
				}, t.prototype.onEnable = function() {
					n.default.xBind("bait", this.onBait.bind(this), "zcbgs2_stage20"), n.default.xBind("lockerChange1", this.lockerChange1.bind(this), "zcbgs2_stage20"), n.default.xBind("lockerChange2", this.lockerChange2.bind(this), "zcbgs2_stage20"), n.default.xBind("doorHandle", this.doorHandle.bind(this), "zcbgs2_stage20")
				}, t.prototype.onTouchBait = function() {
					n.default.xSet("bait", !0), c.default.xSet("propGetPanel", i.default.propsEnum.bait)
				}, t.prototype.onTouchRod = function() {
					this.rod.active = !1, c.default.xSet("propGetPanel", i.default.propsEnum.rod)
				}, t.prototype.onTouchKey = function() {
					this.key.active = !1, c.default.xSet("propGetPanel", i.default.propsEnum.key)
				}, t.prototype.onBait = function(e) {
					this.bait.active = !e
				}, t.prototype.lockerChange1 = function(e) {
					1 == e && this.bone ? this.bone.active = !0 : this.bone.active = !1
				}, t.prototype.lockerChange2 = function(e) {
					1 == e ? n.default.xGet("bait") || (this.bait.active = !0) : this.bait.active = !1
				}, t.prototype.doorHandle = function(e) {
					2 == e ? n.default.xSet("doorChange", 3) : 3 == e && c.default.xSet("gamePassPanel", 10)
				}, t.prototype.shiftPage = function() {
					0 != n.default.xGet("whaleChange") && n.default.xSet("whaleChange", 0)
				}, __decorate([s({
					type: cc.Node,
					displayName: "\u9c7c\u9aa8\u5934"
				})], t.prototype, "bone", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u9c7c\u7f50\u5934"
				})], t.prototype, "bait", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u9c7c\u7aff"
				})], t.prototype, "rod", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u94a5\u5319"
				})], t.prototype, "key", void 0), t = __decorate([l], t)
			}(o.default);
		a.default = u, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"../config": "config",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage21: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "a99a9XjXx9OD4To+DAUPd9y", "Stage21"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("./GameData"),
			i = e("../config"),
			c = e("../HallData"),
			r = cc._decorator,
			l = r.ccclass,
			s = r.property,
			u = "zcbgs2_stage21",
			d = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.record1 = null, t.record2 = null, t.record3 = null, t.key = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), n.default.xSet("record1", !1, !1), n.default.xSet("record2", !1, !1), n.default.xSet("record3", !1, !1), n.default.xSet("lockerChange1", 0, !1), n.default.xSet("lockerChange2", 0, !1), n.default.xSet("sitBossChange", 0, !1), n.default.xSet("chair1Change", 0, !1), n.default.xSet("clock1Change", 0, !1), n.default.xSet("doorHandle", 0, !1), n.default.xSet("doorChange", 0, !1), n.default.xSet("turntable1Change", 0, !1), n.default.xSet("turntable2Change", 0, !1), n.default.xSet("djstandChange", 0, !1), n.default.xSet("a11Fin", null, !1)
				}, t.prototype.onEnable = function() {
					n.default.xBind("record1", this.onRecord1.bind(this), u), n.default.xBind("record2", this.onRecord2.bind(this), u), n.default.xBind("record3", this.onRecord3.bind(this), u), n.default.xBind("lockerChange1", this.lockerChange1.bind(this), u), n.default.xBind("lockerChange2", this.lockerChange2.bind(this), u), n.default.xBind("chair1Change", this.chair1Change.bind(this), u), n.default.xBind("doorHandle", this.doorHandle.bind(this), u), n.default.xBind("turntable1Change", this.turntableChange.bind(this), u), n.default.xBind("turntable2Change", this.turntableChange.bind(this), u), n.default.xBind("a11Fin", this.a11Fin.bind(this), u)
				}, t.prototype.a11Fin = function() {
					this.key.active = !0
				}, t.prototype.onTouchKey = function() {
					this.key.active = !1, c.default.xSet("propGetPanel", i.default.propsEnum.key)
				}, t.prototype.turntableChange = function() {
					var e = n.default.xGet("turntable1Change"),
						t = n.default.xGet("turntable2Change");
					0 != e && 0 != t && (2 == e && 4 == t ? n.default.xSet("djstandChange", 2) : n.default.xSet("djstandChange", 1))
				}, t.prototype.onTouchRecord1 = function() {
					n.default.xSet("record1", !0), c.default.xSet("propGetPanel", i.default.propsEnum.record1)
				}, t.prototype.onRecord1 = function(e) {
					this.record1.active = !e
				}, t.prototype.onTouchRecord2 = function() {
					n.default.xSet("record2", !0), c.default.xSet("propGetPanel", i.default.propsEnum.record2)
				}, t.prototype.onRecord2 = function(e) {
					this.record2.active = !e
				}, t.prototype.onTouchRecord3 = function() {
					n.default.xSet("record3", !0), c.default.xSet("propGetPanel", i.default.propsEnum.record3)
				}, t.prototype.onTouchRecord4 = function() {
					n.default.xSet("clock1Change", 999), c.default.xSet("propGetPanel", i.default.propsEnum.record4)
				}, t.prototype.onRecord3 = function(e) {
					this.record3.active = !e
				}, t.prototype.lockerChange1 = function(e) {
					1 == e ? n.default.xGet("record1") || (this.record1.active = !0) : this.record1.active = !1
				}, t.prototype.lockerChange2 = function(e) {
					1 == e ? n.default.xGet("record2") || (this.record2.active = !0) : this.record2.active = !1
				}, t.prototype.chair1Change = function(e) {
					1 == e ? n.default.xGet("record3") || (this.record3.active = !0) : this.record3.active = !1
				}, t.prototype.doorHandle = function(e) {
					2 == e ? n.default.xSet("doorChange", 3) : 3 == e && c.default.xSet("gamePassPanel", 11)
				}, __decorate([s({
					type: cc.Node,
					displayName: "cd1"
				})], t.prototype, "record1", void 0), __decorate([s({
					type: cc.Node,
					displayName: "cd2"
				})], t.prototype, "record2", void 0), __decorate([s({
					type: cc.Node,
					displayName: "cd3"
				})], t.prototype, "record3", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u94a5\u5319"
				})], t.prototype, "key", void 0), t = __decorate([l], t)
			}(o.default);
		a.default = d, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"../config": "config",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage22: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "9cedbcemKlBrKtr0vq1HCvv", "Stage22"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("./GameData"),
			i = e("../HallData"),
			c = cc._decorator,
			r = c.ccclass,
			l = c.property,
			s = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.rod = null, t.hairpiece = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), n.default.xSet("lockerChange1", 0, !1), n.default.xSet("lockerChange2", 0, !1), n.default.xSet("lockerChange3", 0, !1), n.default.xSet("sitBossChange", 0, !1), n.default.xSet("doorHandle", 0, !1), n.default.xSet("doorChange", 0, !1), n.default.xSet("yankeesChange", 0, !1), n.default.xSet("hairpiece", !1, !1)
				}, t.prototype.onEnable = function() {
					n.default.xBind("lockerChange2", this.lockerChange2.bind(this), "zcbgs2_stage22"), n.default.xBind("doorHandle", this.doorHandle.bind(this), "zcbgs2_stage22"), n.default.xBind("hairpiece", this.onHairpiece.bind(this), "zcbgs2_stage22")
				}, t.prototype.lockerChange2 = function(e) {
					this.rod && (this.rod.active = 0 != e)
				}, t.prototype.onHairpiece = function(e) {
					this.hairpiece.active = e
				}, t.prototype.doorHandle = function(e) {
					if (0 == e) {
						if (0 == n.default.xGet("yankeesChange")) return;
						n.default.xSet("doorChange", 1)
					} else 1 == e && i.default.xSet("gamePassPanel", 12)
				}, __decorate([l({
					type: cc.Node,
					displayName: "\u9c7c\u7aff"
				})], t.prototype, "rod", void 0), __decorate([l({
					type: cc.Node,
					displayName: "\u5047\u53d1"
				})], t.prototype, "hairpiece", void 0), t = __decorate([r], t)
			}(o.default);
		a.default = s, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage23: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "9a03bT+DRVK7Yn86yuUhJ+/", "Stage23"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("./GameData"),
			i = e("../config"),
			c = e("../HallData"),
			r = e("../../common/Log"),
			l = cc._decorator,
			s = l.ccclass,
			u = l.property,
			d = "zcbgs2_stage23",
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.yen50 = null, t.yen10_1 = null, t.yen10_2 = null, t.yen100 = null, t.yBook = null, t.key = null, t.femaleBoss = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), n.default.xSet("lockerChange1", 0, !1), n.default.xSet("sitBossChange", 0, !1), n.default.xSet("doorHandle", 0, !1), n.default.xSet("doorChange", 0, !1), n.default.xSet("drawerChange", 0, !1), n.default.xSet("femaleBossChange", 0, !1), n.default.xSet("countYen", 0, !1), n.default.xSet("chabuChange", 0), n.default.xSet("drinkHotTea", null, !1), n.default.xSet("doorHandle", 0, !1), n.default.xSet("doorChange", 0, !1), n.default.xSet("key", !1, !1), n.default.xSet("millionChange", 0, !1)
				}, t.prototype.onEnable = function() {
					n.default.xBind("lockerChange1", this.lockerChange1.bind(this), d), n.default.xBind("doorHandle", this.doorHandle.bind(this), d), n.default.xBind("drawerChange", this.drawerChange.bind(this), d), n.default.xBind("countYen", this.countYen.bind(this), d), n.default.xBind("drinkHotTea", this.drinkHotTea.bind(this), d), n.default.xBind("key", this.onKey.bind(this), d)
				}, t.prototype.lockerChange1 = function(e) {
					this.yen50 && (this.yen50.active = 0 != e)
				}, t.prototype.onKey = function(e) {
					this.key.active = e
				}, t.prototype.doorHandle = function(e) {
					2 == e ? n.default.xSet("doorChange", 3) : 3 == e && c.default.xSet("gamePassPanel", 13)
				}, t.prototype.drawerChange = function(e) {
					this.yen10_1.active = !1, this.yen10_2.active = !1, this.yBook.active = !1, 1 == e && this.yen10_1 ? this.yen10_1.active = !0 : 2 == e && this.yen10_2 ? this.yen10_2.active = !0 : 3 == e && this.yBook && (this.yBook.active = !0)
				}, t.prototype.countYen = function(e) {
					r.default.info("money", e), 80 == e && (n.default.xSet("countYen", 0), c.default.xSet("propGetPanel", i.default.propsEnum.juice1)), 100 == e && (n.default.xSet("countYen", 0), c.default.xSet("propGetPanel", i.default.propsEnum.juice2))
				}, t.prototype.drinkHotTea = function() {
					var e = this;
					this.forbidControl(), this.femaleBoss.runAction(cc.sequence(cc.moveBy(1, cc.v2(50, -280)), cc.callFunc(function() {
						n.default.xSet("femaleBossChange", 999), n.default.xSet("chabuChange", 2), e.scheduleOnce(function() {
							e.yen100.active = !0
						}, .2), e.recoverControl()
					})))
				}, __decorate([u({
					type: cc.Node,
					displayName: "50\u5143"
				})], t.prototype, "yen50", void 0), __decorate([u({
					type: cc.Node,
					displayName: "10\u5143"
				})], t.prototype, "yen10_1", void 0), __decorate([u({
					type: cc.Node,
					displayName: "10\u5143"
				})], t.prototype, "yen10_2", void 0), __decorate([u({
					type: cc.Node,
					displayName: "100\u5143"
				})], t.prototype, "yen100", void 0), __decorate([u({
					type: cc.Node,
					displayName: "\u9ec4\u4e66"
				})], t.prototype, "yBook", void 0), __decorate([u({
					type: cc.Node,
					displayName: "\u94a5\u5319"
				})], t.prototype, "key", void 0), __decorate([u({
					type: cc.Node,
					displayName: "\u5973\u8001\u677f"
				})], t.prototype, "femaleBoss", void 0), t = __decorate([s], t)
			}(o.default);
		a.default = p, cc._RF.pop()
	}, {
		"../../common/Log": "Log",
		"../HallData": "HallData",
		"../config": "config",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage24: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "a0b4e8JWD5KlrJk49L5IJaM", "Stage24"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("./GameData"),
			i = e("../HallData"),
			c = cc._decorator,
			r = c.ccclass,
			l = c.property,
			s = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.drink = null, t.scissors = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), n.default.xSet("windowChange", 0, !1), n.default.xSet("drawerChange", 0, !1), n.default.xSet("sitBossChange", 0, !1), n.default.xSet("doorHandle", 0, !1), n.default.xSet("doorChange", 0, !1), n.default.xSet("ropeChange", 0, !1), n.default.xSet("bellChange", 0, !1), n.default.xSet("dogChange", 0, !1)
				}, t.prototype.onEnable = function() {
					n.default.xBind("drawerChange", this.drawerChange.bind(this), "zcbgs2_stage24"), n.default.xBind("doorHandle", this.doorHandle.bind(this), "zcbgs2_stage24")
				}, t.prototype.drawerChange = function(e) {
					this.drink.active = !1, this.scissors.active = !1, 1 == e && this.drink ? this.drink.active = !0 : 3 == e && this.scissors && (this.scissors.active = !0)
				}, t.prototype.doorHandle = function(e) {
					0 == e && (n.default.xSet("doorChange", 5), this.forbidControl(), this.scheduleOnce(function() {
						i.default.xSet("gameOverPanel", 2)
					}, .5))
				}, t.prototype.onTouchWin0 = function() {
					n.default.xSet("windowChange", 3)
				}, __decorate([l({
					type: cc.Node,
					displayName: "\u52a0\u73ed\u996e\u6599"
				})], t.prototype, "drink", void 0), __decorate([l({
					type: cc.Node,
					displayName: "\u526a\u5200"
				})], t.prototype, "scissors", void 0), t = __decorate([r], t)
			}(o.default);
		a.default = s, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage25: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "8ba61/nQQ1F3ondqeJD0S6g", "Stage25"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("./GameData"),
			i = e("../HallData"),
			c = cc._decorator,
			r = c.ccclass,
			l = c.property,
			s = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.bucket = null, t.santan = null, t.key = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), n.default.xSet("sitBossChange", 0, !1), n.default.xSet("doorHandle", 0, !1), n.default.xSet("doorChange", 0, !1), n.default.xSet("fireplaceChange", 0, !1), n.default.xSet("bucket", !1, !1), n.default.xSet("tubeChange", 0, !1), n.default.xSet("santan", !1, !1)
				}, t.prototype.onEnable = function() {
					n.default.xBind("doorHandle", this.doorHandle.bind(this), "zcbgs2_stage25"), n.default.xBind("bucket", this.onBucket.bind(this), "zcbgs2_stage25"), n.default.xBind("santan", this.onSantan.bind(this), "zcbgs2_stage25")
				}, t.prototype.onBucket = function(e) {
					this.bucket.active = e
				}, t.prototype.doorHandle = function(e) {
					2 == e ? n.default.xSet("doorChange", 3) : 3 == e && i.default.xSet("gamePassPanel", 15)
				}, t.prototype.onSantan = function(e) {
					this.santan.active = e
				}, t.prototype.shiftPage = function() {
					n.default.xGet("santan") && (n.default.xSet("santan", !1), this.key.active = !0)
				}, __decorate([l({
					type: cc.Node,
					displayName: "\u6876"
				})], t.prototype, "bucket", void 0), __decorate([l({
					type: cc.Node,
					displayName: "\u5723\u8bde\u8001\u4eba"
				})], t.prototype, "santan", void 0), __decorate([l({
					type: cc.Node,
					displayName: "\u94a5\u5319"
				})], t.prototype, "key", void 0), t = __decorate([r], t)
			}(o.default);
		a.default = s, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage26: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "ef122lgdABLvKVCorSMxs9K", "Stage26"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("./GameData"),
			i = e("../HallData"),
			c = cc._decorator,
			r = c.ccclass,
			l = c.property,
			s = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.tabaco = null, t.hummer = null, t.standBoss2 = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), n.default.xSet("standBossChange", 0, !1), n.default.xSet("femaleBossChange", 0, !1), n.default.xSet("drawerChange", 0, !1), n.default.xSet("standBoss", !1, !1), n.default.xSet("statueChange", 0, !1), n.default.xSet("cardboardChange", 0, !1)
				}, t.prototype.onEnable = function() {
					n.default.xBind("drawerChange", this.drawerChange.bind(this), "zcbgs2_stage25"), n.default.xBind("standBoss", this.onStandBoss.bind(this), "zcbgs2_stage25")
				}, t.prototype.drawerChange = function(e) {
					this.tabaco.active = !1, this.hummer.active = !1, 2 == e && this.tabaco ? this.tabaco.active = !0 : 3 == e && this.hummer && (this.hummer.active = !0)
				}, t.prototype.onStandBoss = function(e) {
					this.standBoss2.active = e
				}, t.prototype.onTouchHole = function() {
					i.default.xSet("gamePassPanel", 16)
				}, __decorate([l({
					type: cc.Node,
					displayName: "\u9999\u70df"
				})], t.prototype, "tabaco", void 0), __decorate([l({
					type: cc.Node,
					displayName: "\u9524\u5b50"
				})], t.prototype, "hummer", void 0), __decorate([l({
					type: cc.Node,
					displayName: "\u7b2c\u4e09\u9875\u7684\u8001\u677f"
				})], t.prototype, "standBoss2", void 0), t = __decorate([r], t)
			}(o.default);
		a.default = s, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage27: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "2ebd2FKdKNGk6CZ3vzeZZeD", "Stage27"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("./GameData"),
			i = e("../config"),
			c = e("../HallData"),
			r = cc._decorator,
			l = r.ccclass,
			s = r.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.drink = null, t.manbook = null, t.banana = null, t.hira = null, t.sit = null, t.zabu = [], t.key = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), n.default.xSet("drawerChange", 0, !1), n.default.xSet("hiraChange", 0, !1), n.default.xSet("doorHandle", 0, !1), n.default.xSet("doorChange", 0, !1), n.default.xSet("yankeeChange", 0, !1), n.default.xSet("sitzabuChange", 0, !1), n.default.xSet("key", !1, !1)
				}, t.prototype.onEnable = function() {
					n.default.xBind("doorHandle", this.doorHandle.bind(this), "zcbgs2_stage27"), n.default.xBind("drawerChange", this.drawerChange.bind(this), "zcbgs2_stage27"), n.default.xBind("hiraChange", this.hiraChange.bind(this), "zcbgs2_stage27"), n.default.xBind("key", this.onKey.bind(this), "zcbgs2_stage27")
				}, t.prototype.onKey = function(e) {
					this.key.active = e
				}, t.prototype.doorHandle = function(e) {
					2 == e ? n.default.xSet("doorChange", 3) : 3 == e && c.default.xSet("gamePassPanel", 1)
				}, t.prototype.drawerChange = function(e) {
					this.drink.active = !1, this.manbook.active = !1, 2 == e && this.drink ? this.drink.active = !0 : 3 == e && this.manbook && (this.manbook.active = !0)
				}, t.prototype.hiraChange = function(e) {
					1 == e ? this.sit.active = !0 : 999 == e && (this.hira.active = !0)
				}, t.prototype.onTouchZabu = function(e) {
					3 == n.default.xGet("yankeeChange") && (this.zabu[e].removeFromParent(), c.default.xSet("propGetPanel", i.default.propsEnum.zabu))
				}, __decorate([s({
					type: cc.Node,
					displayName: "\u52a0\u73ed\u996e\u6599"
				})], t.prototype, "drink", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u53ef\u8bfb\u6210\u4eba\u4e66\u7c4d"
				})], t.prototype, "manbook", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u9999\u8549"
				})], t.prototype, "banana", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u60f3\u62c9\u5c4e\u7684\u4eba"
				})], t.prototype, "hira", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u5750\u57ab"
				})], t.prototype, "sit", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u5750\u57abs"
				})], t.prototype, "zabu", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u94a5\u5319"
				})], t.prototype, "key", void 0), t = __decorate([l], t)
			}(o.default);
		a.default = u, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"../config": "config",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage28: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "53f64qFiidJi5U931fEyqW6", "Stage28"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("./GameData"),
			i = e("../HallData"),
			c = cc._decorator,
			r = c.ccclass,
			l = c.property,
			s = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.boss = null, t.key = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), n.default.xSet("doorChange", 0, !1), n.default.xSet("doorHandle", 0, !1), n.default.xSet("patrollamp1Change", 0, !1), n.default.xSet("patrollamp2Change", 0, !1), n.default.xSet("patrollamp3Change", 0, !1), n.default.xSet("button1Change", 0, !1), n.default.xSet("lockerChange1", 0, !1)
				}, t.prototype.onEnable = function() {
					n.default.xBind("doorHandle", this.doorHandle.bind(this), "zcbgs2_stage28"), n.default.xBind("lockerChange1", this.lockerChange1.bind(this), "zcbgs2_stage28")
				}, t.prototype.doorHandle = function(e) {
					2 == e ? n.default.xSet("doorChange", 3) : 3 == e && i.default.xSet("gamePassPanel", 1)
				}, t.prototype.lockerChange1 = function(e) {
					this.forbidControl(), 1 == e && (0 == n.default.xGet("patrollamp1Change") && 1 == n.default.xGet("patrollamp2Change") && 2 == n.default.xGet("patrollamp3Change") ? (this.key.active = !0, this.recoverControl()) : (this.boss.active = !0, this.scheduleOnce(function() {
						i.default.xSet("gameOverPanel", 1)
					}, .5)))
				}, __decorate([l({
					type: cc.Node,
					displayName: "\u8001\u677f"
				})], t.prototype, "boss", void 0), __decorate([l({
					type: cc.Node,
					displayName: "\u94a5\u5319"
				})], t.prototype, "key", void 0), t = __decorate([r], t)
			}(o.default);
		a.default = s, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage29: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "b7dacfGizFEQb3On3b4qc+j", "Stage29"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("./GameData"),
			i = e("../HallData"),
			c = cc._decorator,
			r = c.ccclass,
			l = c.property,
			s = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.fishing = null, t.flower = null, t.vase = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), n.default.xSet("lockerChange1", 0, !1), n.default.xSet("doorHandle", 0, !1), n.default.xSet("doorChange", 0, !1), n.default.xSet("standBossChange", 0, !1), n.default.xSet("drawerChange", 0, !1), n.default.xSet("treeChange", 0, !1), n.default.xSet("standChange", 0, !1)
				}, t.prototype.onEnable = function() {
					n.default.xBind("lockerChange1", this.lockerChange1.bind(this), "zcbgs2_stage25"), n.default.xBind("doorHandle", this.doorHandle.bind(this), "zcbgs2_stage25"), n.default.xBind("drawerChange", this.drawerChange.bind(this), "zcbgs2_stage25")
				}, t.prototype.lockerChange1 = function(e) {
					this.fishing && (this.fishing.active = 0 != e)
				}, t.prototype.drawerChange = function(e) {
					this.flower.active = !1, this.vase.active = !1, 2 == e && this.flower ? this.flower.active = !0 : 3 == e && this.vase && (this.vase.active = !0)
				}, t.prototype.doorHandle = function(e) {
					if (0 == e) {
						if (999 != n.default.xGet("standBossChange")) return;
						3 != n.default.xGet("standChange") ? n.default.xSet("standChange", 4) : n.default.xSet("doorChange", 1)
					} else 1 == e && i.default.xSet("gamePassPanel", 1)
				}, __decorate([l({
					type: cc.Node,
					displayName: "\u7f51"
				})], t.prototype, "fishing", void 0), __decorate([l({
					type: cc.Node,
					displayName: "\u82b1"
				})], t.prototype, "flower", void 0), __decorate([l({
					type: cc.Node,
					displayName: "\u82b1\u74f6"
				})], t.prototype, "vase", void 0), t = __decorate([r], t)
			}(o.default);
		a.default = s, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage2: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "d6e11XvhmpCI5z6xwXaJ5zr", "Stage2"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			i = o.property,
			c = e("./Stage"),
			r = e("./GameData"),
			l = e("../HallData"),
			s = e("../config"),
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.key = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), r.default.xSet("switchChange", 0, !1), r.default.xSet("paper1Change", 0, !1), r.default.xSet("paper2Change", 0, !1), r.default.xSet("paper3Change", 0, !1), r.default.xSet("paper4Change", 0, !1), r.default.xSet("paper5Change", 0, !1), r.default.xSet("doorChange", 0, !1), r.default.xSet("doorHandle", 0, !1), r.default.xSet("bookRaceChange", 0, !1)
				}, t.prototype.onEnable = function() {
					r.default.xBind("doorHandle", this.doorHandle.bind(this), "zcbgs2_stage1"), r.default.xBind("doorChange", this.doorChange.bind(this), "zcbgs2_stage1"), r.default.xBind("switchChange", this.switchChange.bind(this), "zcbgs2_stage1")
				}, t.prototype.doorHandle = function(e) {
					2 == e && r.default.xSet("doorChange", 6)
				}, t.prototype.doorChange = function(e) {
					this.forbidControl(), 6 == e && this.scheduleOnce(function() {
						l.default.xSet("gameOverPanel", 1)
					}, .5)
				}, t.prototype.switchChange = function(e) {
					1 == e && r.default.xSet("bookRaceChange", 1)
				}, t.prototype.onTouchKey = function() {
					this.key.active = !1, l.default.xSet("propGetPanel", s.default.propsEnum.key)
				}, t.prototype.onTouchHole = function() {
					l.default.xSet("gamePassPanel", 1)
				}, __decorate([i({
					type: cc.Node,
					displayName: "\u94a5\u5319"
				})], t.prototype, "key", void 0), t = __decorate([n], t)
			}(c.default);
		a.default = u, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"../config": "config",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage30: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "639f5FxqaRP07UTgk3Kc8hc", "Stage30"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("./GameData"),
			i = e("../HallData"),
			c = e("../config"),
			r = e("../../common/Log"),
			l = cc._decorator,
			s = l.ccclass,
			u = l.property,
			d = "zcbgs2_stage30",
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.rocket = [], t.jump = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), n.default.xSet("lockerChange1", 0, !1), n.default.xSet("doorHandle", 0, !1), n.default.xSet("doorChange", 0, !1), n.default.xSet("windowChange", 0, !1), n.default.xSet("box1Change", 0, !1), n.default.xSet("box2Change", 0, !1), n.default.xSet("box3Change", 0, !1), n.default.xSet("rocket1", !1, !1), n.default.xSet("rocket2", !1, !1), n.default.xSet("rocket3", !1, !1), n.default.xSet("rocket4", !1, !1), n.default.xSet("checkComp", null, !1), n.default.xSet("compFin", null, !1), n.default.xSet("rocketstageChange", 0, !1)
				}, t.prototype.onEnable = function() {
					n.default.xBind("lockerChange1", this.lockerChange1.bind(this), d), n.default.xBind("windowChange", this.windowChange.bind(this), d), n.default.xBind("box1Change", this.box1Change.bind(this), d), n.default.xBind("box2Change", this.box2Change.bind(this), d), n.default.xBind("box3Change", this.box3Change.bind(this), d), n.default.xBind("checkComp", this.checkComp.bind(this), d), n.default.xBind("compFin", this.compFin.bind(this), d), n.default.xBind("doorHandle", this.doorHandle.bind(this), d)
				}, t.prototype.lockerChange1 = function(e) {
					n.default.xGet("rocket1") || (this.rocket[0].active = 0 != e)
				}, t.prototype.windowChange = function(e) {
					5 == e && (this.forbidControl(), this.scheduleOnce(function() {
						i.default.xSet("gameOverPanel", 15)
					}, .5))
				}, t.prototype.box1Change = function(e) {
					n.default.xGet("rocket3") || (this.rocket[2].active = 0 != e)
				}, t.prototype.box2Change = function(e) {
					1 == e && (this.forbidControl(), this.jump.node.active = !0, this.jump.play("30_bossjump"), this.jump.on("finished", function() {
						i.default.xSet("gameOverPanel", 1)
					}))
				}, t.prototype.box3Change = function(e) {
					n.default.xGet("rocket4") || (this.rocket[3].active = 0 != e)
				}, t.prototype.onTouchRocket = function(e) {
					var t = parseInt(e);
					this.rocket[t - 1].active = !1, n.default.xSet("rocket" + e, !0), i.default.xSet("propGetPanel", c.default.propsEnum["rocket" + e])
				}, t.prototype.checkComp = function() {
					n.default.xGet("rocket1") && n.default.xGet("rocket2") && n.default.xGet("rocket3") && n.default.xGet("rocket4") && n.default.xSet("delCanCom")
				}, t.prototype.compFin = function() {
					r.default.info("\u5408\u6210\u7ed3\u675f"), i.default.xSet("propGetPanel", c.default.propsEnum.rocket)
				}, t.prototype.doorHandle = function(e) {
					0 == e && (n.default.xSet("doorChange", 6), this.forbidControl(), this.scheduleOnce(function() {
						i.default.xSet("gameOverPanel", 2)
					}, .5))
				}, __decorate([u({
					type: cc.Node,
					displayName: "\u706b\u7bad\u7ec4\u4ef6"
				})], t.prototype, "rocket", void 0), __decorate([u({
					type: cc.Animation,
					displayName: "\u8df3\u8dc3"
				})], t.prototype, "jump", void 0), t = __decorate([s], t)
			}(o.default);
		a.default = p, cc._RF.pop()
	}, {
		"../../common/Log": "Log",
		"../HallData": "HallData",
		"../config": "config",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage31: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "01f2d5dkztNz5pncp0zmIf8", "Stage31"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("./GameData"),
			i = e("../HallData"),
			c = cc._decorator,
			r = c.ccclass,
			l = c.property,
			s = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.key = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), n.default.xSet("maskEnd", null, !1), n.default.xSet("lockerChange1", 0, !1), n.default.xSet("lockerChange2", 0, !1), n.default.xSet("doorHandle", 0, !1), n.default.xSet("doorChange", 0, !1), n.default.xSet("windowChange", 0, !1)
				}, t.prototype.onEnable = function() {
					n.default.xBind("lockerChange2", this.lockerChange2.bind(this), "zcbgs2_stage31"), n.default.xBind("doorHandle", this.doorHandle.bind(this), "zcbgs2_stage31"), n.default.xBind("maskEnd", this.maskEnd.bind(this), "zcbgs2_stage31")
				}, t.prototype.lockerChange2 = function(e) {
					this.key && (this.key.active = 0 != e)
				}, t.prototype.doorHandle = function(e) {
					2 == e && n.default.xSet("doorChange", 7)
				}, t.prototype.maskEnd = function() {
					n.default.xUnbind("zcbgs2_stage31"), i.default.xSet("loadStageAnim", 1)
				}, __decorate([l({
					type: cc.Node,
					displayName: "\u94a5\u5319"
				})], t.prototype, "key", void 0), t = __decorate([r], t)
			}(o.default);
		a.default = s, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage32: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "4a681RFP0dB9Z7kshVQ7Uos", "Stage32"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("./GameData"),
			i = e("../HallData"),
			c = cc._decorator,
			r = c.ccclass,
			l = c.property,
			s = "zcbgs2_stage32",
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.hairpiece = null, t.manbook = null, t.driver = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), i.default.xSet("delMask"), n.default.xSet("maskEnd", null, !1), n.default.xSet("drawerChange", 0, !1), n.default.xSet("lockerChange1", 0, !1), n.default.xSet("lockerChange3", 0, !1), n.default.xSet("doorHandle", 0, !1), n.default.xSet("doorChange", 0, !1), n.default.xSet("windowChange", 0, !1), n.default.xSet("driverChange", 0, !1), n.default.xSet("breakerChange", 0, !1)
				}, t.prototype.onEnable = function() {
					n.default.xBind("lockerChange1", this.lockerChange1.bind(this), s), n.default.xBind("doorHandle", this.doorHandle.bind(this), s), n.default.xBind("drawerChange", this.drawerChange.bind(this), s), n.default.xBind("breakerChange", this.breakerChange.bind(this), s), n.default.xBind("maskEnd", this.maskEnd.bind(this), s)
				}, t.prototype.lockerChange1 = function(e) {
					this.hairpiece && (this.hairpiece.active = 0 != e), this.manbook && (this.manbook.active = 0 != e)
				}, t.prototype.breakerChange = function(e) {
					2 == e && (n.default.xSet("forbidControl"), i.default.xSet("maskPanel"))
				}, t.prototype.drawerChange = function(e) {
					this.driver.active = !1, 2 == e && this.driver && (this.driver.active = !0)
				}, t.prototype.doorHandle = function(e) {
					0 == e ? n.default.xSet("doorChange", 1) : 1 == e && n.default.xSet("doorChange", 0)
				}, t.prototype.maskEnd = function() {
					n.default.xUnbind(s), i.default.xSet("loadStageAnim", 6)
				}, __decorate([l({
					type: cc.Node,
					displayName: "\u5047\u53d1"
				})], t.prototype, "hairpiece", void 0), __decorate([l({
					type: cc.Node,
					displayName: "\u9ec4\u4e66"
				})], t.prototype, "manbook", void 0), __decorate([l({
					type: cc.Node,
					displayName: "\u8d77\u5b50"
				})], t.prototype, "driver", void 0), t = __decorate([r], t)
			}(o.default);
		a.default = u, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage3: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "4039evwCKlJP5mcG9DuCIXx", "Stage3"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../config"),
			n = e("./GameData"),
			i = e("./Stage"),
			c = e("../HallData"),
			r = cc._decorator,
			l = r.ccclass,
			s = r.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.playBaseBallBoss = null, t.umbrella = null, t.baseBallBet = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), n.default.xSet("standBossChange", 0, !1), n.default.xSet("doorChange", 0, !1), n.default.xSet("doorHandle", 0, !1), n.default.xSet("lockerChange1", 0, !1), n.default.xSet("lockerChange2", 0, !1), n.default.xSet("lockerChange3", 0, !1), n.default.xSet("umbrella", !1, !1), n.default.xSet("baseBallBet", !1, !1)
				}, t.prototype.onEnable = function() {
					n.default.xBind("doorHandle", this.doorHandle.bind(this), "zcbgs2_stage3"), n.default.xBind("lockerChange1", this.lockerChange1.bind(this), "zcbgs2_stage3"), n.default.xBind("lockerChange2", this.lockerChange2.bind(this), "zcbgs2_stage3"), n.default.xBind("standBossChange", this.standBossChange.bind(this), "zcbgs2_stage3"), n.default.xBind("umbrella", this.onUmbrella.bind(this), "zcbgs2_stage3"), n.default.xBind("baseBallBet", this.onBaseBallBet.bind(this), "zcbgs2_stage3")
				}, t.prototype.onTouchUmbrella = function() {
					n.default.xSet("umbrella", !0), c.default.xSet("propGetPanel", o.default.propsEnum.umbrella)
				}, t.prototype.onTouchBaseBall = function() {
					n.default.xSet("baseBallBet", !0), c.default.xSet("propGetPanel", o.default.propsEnum.baseBallBet)
				}, t.prototype.onUmbrella = function(e) {
					this.umbrella.active = !e
				}, t.prototype.onBaseBallBet = function(e) {
					this.baseBallBet.active = !e
				}, t.prototype.lockerChange1 = function(e) {
					1 == e ? n.default.xGet("umbrella") || (this.umbrella.active = !0) : this.umbrella.active = !1
				}, t.prototype.doorHandle = function(e) {
					0 == e && 999 == n.default.xGet("standBossChange") && n.default.xSet("doorChange", 1), 1 == e && c.default.xSet("gamePassPanel", 1)
				}, t.prototype.lockerChange2 = function(e) {
					1 == e ? n.default.xGet("baseBallBet") || (this.baseBallBet.active = !0) : this.baseBallBet.active = !1
				}, t.prototype.shiftPage = function() {
					8 == n.default.xGet("standBossChange") && (this.playBaseBallBoss.active = !0, n.default.xSet("standBossChange", 999))
				}, t.prototype.standBossChange = function(e) {
					1 == e ? this.forbidControl() : 7 == e && this.forbidControl()
				}, __decorate([s({
					type: cc.Node,
					displayName: "\u6253\u7403\u7684\u8001\u677f"
				})], t.prototype, "playBaseBallBoss", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u96e8\u4f1e"
				})], t.prototype, "umbrella", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u68d2\u7403\u68cd"
				})], t.prototype, "baseBallBet", void 0), t = __decorate([l], t)
			}(i.default);
		a.default = u, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"../config": "config",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage4: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "d41aa6HyTdPaZ/EB5W5c6eB", "Stage4"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../config"),
			n = e("../../common/Log"),
			i = e("./Stage"),
			c = e("./GameData"),
			r = e("../HallData"),
			l = cc._decorator,
			s = l.ccclass,
			u = l.property,
			d = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.key = null, t.remocon = null, t.hera = null, t.people = [], t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), c.default.xSet("a01Fin", null, !1), c.default.xSet("remocon", !1, !1), c.default.xSet("hera", !1, !1), c.default.xSet("drawerChange", null, !1), c.default.xSet("fanChange", 0, !1), c.default.xSet("standBossChange", 0, !1), c.default.xSet("sitBossChange", 0, !1), c.default.xSet("storeChange", 0, !1), c.default.xSet("doorChange", 0, !1), c.default.xSet("doorHandle", 0, !1), c.default.xSet("femaleBossChange", 0, !1)
				}, t.prototype.onEnable = function() {
					c.default.xBind("a01Fin", this.a01Fin.bind(this), "zcbgs2_stage4"), c.default.xBind("remocon", this.onRemocon.bind(this), "zcbgs2_stage4"), c.default.xBind("hera", this.onHera.bind(this), "zcbgs2_stage4"), c.default.xBind("drawerChange", this.drawerChange.bind(this), "zcbgs2_stage4"), c.default.xBind("fanChange", this.fanChange.bind(this), "zcbgs2_stage4"), c.default.xBind("storeChange", this.onStoreChange.bind(this), "zcbgs2_stage4"), c.default.xBind("doorHandle", this.doorHandle.bind(this), "zcbgs2_stage4")
				}, t.prototype.doorHandle = function(e) {
					2 == e && c.default.xSet("doorChange", 3), 3 == e && r.default.xSet("gamePassPanel", 2)
				}, t.prototype.onTouchKeyShelf = function() {
					0 != c.default.xGet("sitBossChange") ? (this.key.active = !1, r.default.xSet("propGetPanel", o.default.propsEnum.key)) : c.default.xSet("sitBossChange", 2)
				}, t.prototype.onRemocon = function(e) {
					this.remocon.active = !e
				}, t.prototype.onHera = function(e) {
					this.hera.active = !e
				}, t.prototype.drawerChange = function(e) {
					this.remocon.active = !1, this.hera.active = !1, 1 == e ? c.default.xGet("remocon") || (this.remocon.active = !0) : 3 == e && (c.default.xGet("hera") || (this.hera.active = !0))
				}, t.prototype.onTouchRemocon = function() {
					c.default.xSet("remocon", !0), r.default.xSet("propGetPanel", o.default.propsEnum.remocon)
				}, t.prototype.onTouchHera = function() {
					c.default.xSet("hera", !0), r.default.xSet("propGetPanel", o.default.propsEnum.hera)
				}, t.prototype.onStoreChange = function(e) {
					1 == c.default.xGet("fanChange") && 1 == e && (this.forbidControl(), c.default.xSet("storeChange", 2), c.default.xSet("sitBossChange", 999))
				}, t.prototype.fanChange = function(e) {
					1 == c.default.xGet("storeChange") && 1 == e && (this.forbidControl(), c.default.xSet("storeChange", 2), c.default.xSet("sitBossChange", 999))
				}, t.prototype.a01Fin = function() {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(e) {
							switch (e.label) {
								case 0:
									return [4, this.peopleAim()];
								case 1:
									return e.sent(), this.recoverControl(), [2]
							}
						})
					})
				}, t.prototype.peopleAim = function() {
					return __awaiter(this, void 0, void 0, function() {
						function e(e) {
							var t = this;
							this.scheduleOnce(function() {
								n.default.info("\u8fdb\u5165", e), t.people[e].active = !0, t.people[e].position = cc.v2(t.people[e].x - 50, t.people[e].y), t.people[e].runAction(cc.moveBy(.5, cc.v2(50, 0)))
							}, .5)
						}
						var t, a = this;
						return __generator(this, function(o) {
							for (t = 0; t < this.people.length; t++) e.bind(this)(t);
							return [2, new Promise(function(e) {
								a.scheduleOnce(function() {
									e()
								}, 2)
							})]
						})
					})
				}, __decorate([u({
					type: cc.Node,
					displayName: "\u94a5\u5319"
				})], t.prototype, "key", void 0), __decorate([u({
					type: cc.Node,
					displayName: "\u9065\u63a7\u5668"
				})], t.prototype, "remocon", void 0), __decorate([u({
					type: cc.Node,
					displayName: "\u94f2\u5b50"
				})], t.prototype, "hera", void 0), __decorate([u({
					type: cc.Node,
					displayName: "\u4eba\u7fa4"
				})], t.prototype, "people", void 0), t = __decorate([s], t)
			}(i.default);
		a.default = d, cc._RF.pop()
	}, {
		"../../common/Log": "Log",
		"../HallData": "HallData",
		"../config": "config",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage5: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "3a1b3wEVqlJxqhvFjVtr8wj", "Stage5"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../config"),
			n = e("./Stage"),
			i = e("./GameData"),
			c = e("../HallData"),
			r = cc._decorator,
			l = r.ccclass,
			s = r.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.remocon = null, t.drink = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), i.default.xSet("remocon", !1, !1), i.default.xSet("drawerChange", 0, !1), i.default.xSet("fanChange", 0, !1), i.default.xSet("standBossChange", 0, !1), i.default.xSet("treeChange", 0, !1), i.default.xSet("doorChange", 0, !1), i.default.xSet("doorHandle", 0, !1)
				}, t.prototype.onEnable = function() {
					i.default.xBind("remocon", this.onRemocon.bind(this), "zcbgs2_stage5"), i.default.xBind("drawerChange", this.drawerChange.bind(this), "zcbgs2_stage5"), i.default.xBind("fanChange", this.fanChange.bind(this), "zcbgs2_stage5"), i.default.xBind("doorHandle", this.doorHandle.bind(this), "zcbgs2_stage5")
				}, t.prototype.drawerChange = function(e) {
					this.remocon.active = !1, this.drink.active = !1, 2 == e ? i.default.xGet("remocon") || (this.remocon.active = !0) : 3 == e && (this.drink.active = !0)
				}, t.prototype.fanChange = function(e) {
					1 == e ? (i.default.xSet("treeChange", 1), i.default.xSet("standBossChange", 999)) : (i.default.xSet("treeChange", 0), i.default.xSet("standBossChange", 0))
				}, t.prototype.onRemocon = function(e) {
					this.remocon.active = !e
				}, t.prototype.onTouchRemocon = function() {
					i.default.xSet("remocon", !0), c.default.xSet("propGetPanel", o.default.propsEnum.remocon)
				}, t.prototype.onTouchDrink = function() {
					c.default.xSet("propGetPanel", o.default.propsEnum.drink)
				}, t.prototype.doorHandle = function(e) {
					0 == e && 999 == i.default.xGet("standBossChange") && i.default.xSet("doorChange", 1), 1 == e && c.default.xSet("gamePassPanel", 1)
				}, __decorate([s({
					type: cc.Node,
					displayName: "\u9065\u63a7\u5668"
				})], t.prototype, "remocon", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u52a0\u73ed\u996e\u6599"
				})], t.prototype, "drink", void 0), t = __decorate([l], t)
			}(n.default);
		a.default = u, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"../config": "config",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage6: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "063e9c4EXFJYqeE1AWWLHYn", "Stage6"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			i = o.property,
			c = e("./Stage"),
			r = e("./GameData"),
			l = e("../config"),
			s = e("../../common/Utils"),
			u = e("../../common/Log"),
			d = e("../HallData"),
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.paper1 = null, t.paper2 = null, t.toShredder = null, t.toShredderP = null, t.findBoss = null, t.goatEatPaperAnim = null, t.poo1 = null, t.poo2 = null, t.key = null, t.eatTime = 0, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), r.default.xSet("madRun", null, !1), r.default.xSet("goatEatPaper", null, !1), r.default.xSet("sitBossChange", 0, !1), r.default.xSet("goOut", null, !1), r.default.xSet("doorChange", 0, !1), r.default.xSet("doorHandle", 0, !1)
				}, t.prototype.onEnable = function() {
					r.default.xBind("madRun", this.madRunAnim.bind(this), "zcbgs2_stage6"), r.default.xBind("goatEatPaper", this.goatEatPaper.bind(this), "zcbgs2_stage6"), r.default.xBind("doorHandle", this.doorHandle.bind(this), "zcbgs2_stage6")
				}, t.prototype.onTouchPaper1 = function() {
					this.paper1.active = !1, d.default.xSet("propGetPanel", l.default.propsEnum.paper11)
				}, t.prototype.onTouchPaper2 = function() {
					this.paper2.active = !1, d.default.xSet("propGetPanel", l.default.propsEnum.paper22)
				}, t.prototype.madRunAnim = function() {
					return __awaiter(this, void 0, void 0, function() {
						var e, t, a, o, n = this;
						return __generator(this, function(i) {
							switch (i.label) {
								case 0:
									return this.forbidControl(), e = new cc.Node, t = e.addComponent(cc.Sprite), [4, s.default.loadImage("texture/charactor/c10_boss10")];
								case 1:
									return t.spriteFrame = i.sent(), this.node.addChild(e), e.position = cc.v2(-650, 100), a = new cc.Node, o = a.addComponent(cc.Sprite), [4, s.default.loadImage("texture/charactor/c25_otsu3")];
								case 2:
									return o.spriteFrame = i.sent(), this.node.addChild(a), a.position = cc.v2(-500, 0), this.toShredder.active = !0, this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
										n.toShredderP.active = !1, n.findBoss.active = !0
									}), cc.delayTime(.1), cc.spawn(cc.callFunc(function() {
										e.runAction(cc.moveBy(.8, cc.v2(450, 0)))
									}), cc.callFunc(function() {
										a.runAction(cc.sequence(cc.moveBy(.8, cc.v2(250, 0)), cc.callFunc(function() {
											d.default.xSet("gameOverPanel", 5)
										})))
									})))), [2]
							}
						})
					})
				}, t.prototype.goatEatPaper = function() {
					var e = this;
					this.forbidControl(), this.goatEatPaperAnim.play("goat_eat").speed = .8, this.goatEatPaperAnim.on("finished", function() {
						u.default.info("\u64ad\u653e\u5b8c\u6bd5"), e.eatTime++, 1 == e.eatTime ? e.poo1.active = !0 : 2 == e.eatTime && (e.poo2.active = !0, e.key.active = !0), e.recoverControl()
					})
				}, t.prototype.onTouchKey = function() {
					this.key.active = !1, d.default.xSet("propGetPanel", l.default.propsEnum.key)
				}, t.prototype.doorHandle = function(e) {
					2 == e && r.default.xSet("doorChange", 3), 3 == e && d.default.xSet("gamePassPanel", 3)
				}, __decorate([i({
					type: cc.Node,
					displayName: "\u7eb8\u58061"
				})], t.prototype, "paper1", void 0), __decorate([i({
					type: cc.Node,
					displayName: "\u7eb8\u58062"
				})], t.prototype, "paper2", void 0), __decorate([i({
					type: cc.Node,
					displayName: "\u7ad9\u7740\u788e\u7eb8"
				})], t.prototype, "toShredder", void 0), __decorate([i({
					type: cc.Node,
					displayName: "\u7ad9\u7740\u788e\u7eb8"
				})], t.prototype, "toShredderP", void 0), __decorate([i({
					type: cc.Node,
					displayName: "\u7ad9\u7740\u788e\u7eb8"
				})], t.prototype, "findBoss", void 0), __decorate([i({
					type: cc.Animation,
					displayName: "\u5403\u7eb8\u52a8\u753b"
				})], t.prototype, "goatEatPaperAnim", void 0), __decorate([i({
					type: cc.Node,
					displayName: "\u5c4e1"
				})], t.prototype, "poo1", void 0), __decorate([i({
					type: cc.Node,
					displayName: "\u5c4e2"
				})], t.prototype, "poo2", void 0), __decorate([i({
					type: cc.Node,
					displayName: "\u94a5\u5319"
				})], t.prototype, "key", void 0), t = __decorate([n], t)
			}(c.default);
		a.default = p, cc._RF.pop()
	}, {
		"../../common/Log": "Log",
		"../../common/Utils": "Utils",
		"../HallData": "HallData",
		"../config": "config",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage7: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "a68faOFHAJGd555Khg/t3DD", "Stage7"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("./GameData"),
			i = e("../config"),
			c = e("../../common/Utils"),
			r = e("../HallData"),
			l = cc._decorator,
			s = l.ccclass,
			u = l.property,
			d = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.yen100 = null, t.shootMan = null, t.key = null, t.bearDownAnim = null, t.PigBreakAnim = null, t.hiraDownAnim = null, t.isShoot = !1, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), n.default.xSet("sitBossChange", 0, !1), n.default.xSet("lockerChange1", 0, !1), n.default.xSet("readyToShoot", 0, !1), n.default.xSet("100yen", !1, !1), n.default.xSet("doorChange", 0, !1), n.default.xSet("doorHandle", 0, !1)
				}, t.prototype.onEnable = function() {
					n.default.xBind("lockerChange1", this.lockerChange1.bind(this), "zcbgs2_stage7"), n.default.xBind("readyToShoot", this.readyToShoot.bind(this), "zcbgs2_stage7"), n.default.xBind("100yen", this.onYen100.bind(this), "zcbgs2_stage7"), n.default.xBind("doorHandle", this.doorHandle.bind(this), "zcbgs2_stage7")
				}, t.prototype.onYen100 = function(e) {
					this.yen100.active = !e
				}, t.prototype.lockerChange1 = function(e) {
					this.yen100.active = !1, 1 == e && (n.default.xGet("100yen") || (this.yen100.active = !0))
				}, t.prototype.onTouchCoin = function() {
					n.default.xSet("100yen", !0), r.default.xSet("propGetPanel", i.default.propsEnum.yen100)
				}, t.prototype.readyToShoot = function(e) {
					var t = this;
					1 == e ? this.shootMan.active = !0 : 2 == e && this.scheduleOnce(function() {
						t.shootMan.active = !1
					}, 1)
				}, t.prototype.onTouchBear = function() {
					var e = this;
					this.isShoot || 1 == n.default.xGet("readyToShoot") && (this.isShoot = !0, n.default.xSet("readyToShoot", 3), this.forbidControl(), this.bearDownAnim.play("bear_down"), this.bearDownAnim.on("finished", function() {
						e.bossMadRun().then(function() {
							r.default.xSet("gameOverPanel", 1)
						})
					}))
				}, t.prototype.bossMadRun = function() {
					return __awaiter(this, void 0, void 0, function() {
						var e, t;
						return __generator(this, function(a) {
							switch (a.label) {
								case 0:
									return e = new cc.Node, t = e.addComponent(cc.Sprite), [4, c.default.loadImage("texture/charactor/c10_boss10")];
								case 1:
									return t.spriteFrame = a.sent(), this.node.addChild(e), e.position = cc.v2(-650, -100), [2, new Promise(function(t) {
										e.runAction(cc.sequence(cc.moveBy(.8, cc.v2(450, 0)), cc.callFunc(function() {
											t()
										})))
									})]
							}
						})
					})
				}, t.prototype.onTouchPig = function() {
					var e = this;
					this.isShoot || 1 == n.default.xGet("readyToShoot") && (this.isShoot = !0, n.default.xSet("readyToShoot", 3), this.forbidControl(), this.PigBreakAnim.play("pig_break"), this.PigBreakAnim.on("finished", function() {
						e.bossMadRun().then(function() {
							r.default.xSet("gameOverPanel", 1)
						})
					}))
				}, t.prototype.onTouchHira = function() {
					var e = this;
					this.isShoot || 1 == n.default.xGet("readyToShoot") && (this.isShoot = !0, n.default.xSet("readyToShoot", 2), this.forbidControl(), this.hiraDownAnim.play("hira3_down"), this.hiraDownAnim.on("finished", function() {
						e.key.active = !0, e.recoverControl()
					}))
				}, t.prototype.onTouchKey = function() {
					this.key.active = !1, r.default.xSet("propGetPanel", i.default.propsEnum.key)
				}, t.prototype.doorHandle = function(e) {
					2 == e && n.default.xSet("doorChange", 3), 3 == e && r.default.xSet("gamePassPanel", 1)
				}, __decorate([u({
					type: cc.Node,
					displayName: "\u786c\u5e01"
				})], t.prototype, "yen100", void 0), __decorate([u({
					type: cc.Node,
					displayName: "\u5c04\u51fb\u7537\u5b50"
				})], t.prototype, "shootMan", void 0), __decorate([u({
					type: cc.Node,
					displayName: "\u94a5\u5319"
				})], t.prototype, "key", void 0), __decorate([u({
					type: cc.Animation,
					displayName: "\u718a\u5012\u52a8\u753b"
				})], t.prototype, "bearDownAnim", void 0), __decorate([u({
					type: cc.Animation,
					displayName: "\u732a\u788e\u52a8\u753b"
				})], t.prototype, "PigBreakAnim", void 0), __decorate([u({
					type: cc.Animation,
					displayName: "\u804c\u5458\u5012\u5730\u52a8\u753b"
				})], t.prototype, "hiraDownAnim", void 0), t = __decorate([s], t)
			}(o.default);
		a.default = d, cc._RF.pop()
	}, {
		"../../common/Utils": "Utils",
		"../HallData": "HallData",
		"../config": "config",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage8: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "05fcc0tbSZLe6NZBkSuxClm", "Stage8"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("./GameData"),
			i = e("../config"),
			c = e("../../common/Log"),
			r = e("../HallData"),
			l = cc._decorator,
			s = l.ccclass,
			u = l.property,
			d = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.feed = null, t.neko = null, t.onion = null, t.cat = null, t.boss = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), n.default.xSet("doorChange", 0, !1), n.default.xSet("doorHandle", 0, !1), n.default.xSet("standBossChange", 0, !1), n.default.xSet("sinkChange", 0, !1), n.default.xSet("freezer1Change", 0, !1), n.default.xSet("freezer2Change", 0, !1), n.default.xSet("bowlChange", 0, !1), n.default.xSet("feed", !1, !1), n.default.xSet("neko", !1, !1), n.default.xSet("onion", !1, !1)
				}, t.prototype.onEnable = function() {
					n.default.xBind("sinkChange", this.sinkChange.bind(this), "zcbgs2_stage8"), n.default.xBind("freezer2Change", this.freezer2Change.bind(this), "zcbgs2_stage8"), n.default.xBind("bowlChange", this.bowlChange.bind(this), "zcbgs2_stage8"), n.default.xBind("doorHandle", this.doorHandle.bind(this), "zcbgs2_stage8")
				}, t.prototype.sinkChange = function(e) {
					this.feed.active = !1, this.neko.active = !1, 0 == e ? (this.feed.active = !1, this.neko.active = !1) : (n.default.xGet("feed") || (this.feed.active = !0), n.default.xGet("neko") || (this.neko.active = !0))
				}, t.prototype.freezer2Change = function(e) {
					this.onion.active = !1, 0 == e || n.default.xGet("onion") || (this.onion.active = !0)
				}, t.prototype.onTouchFeed = function() {
					n.default.xSet("feed", !0), this.feed.active = !1, r.default.xSet("propGetPanel", i.default.propsEnum.feed)
				}, t.prototype.onTouchNeko = function() {
					n.default.xSet("neko", !0), this.neko.active = !1, r.default.xSet("propGetPanel", i.default.propsEnum.neko)
				}, t.prototype.onTouchOnion = function() {
					n.default.xSet("onion", !0), this.onion.active = !1, r.default.xSet("propGetPanel", i.default.propsEnum.onion)
				}, t.prototype.doorHandle = function(e) {
					c.default.info("doorHandle", e), 0 != n.default.xGet("standBossChange") && (0 == e && n.default.xSet("doorChange", 1), 1 == e && r.default.xSet("gamePassPanel", 1))
				}, t.prototype.bowlChange = function(e) {
					2 == e && (this.cat.active = !1), 1 == e && (this.cat.active = !1)
				}, t.prototype.shiftPage = function() {
					2 == n.default.xGet("bowlChange") && n.default.xSet("bowlChange", 3), 1 == n.default.xGet("bowlChange") && n.default.xSet("bowlChange", 4), c.default.info(n.default.xGet("standBossChange"), n.default.xGet("bowlChange")), 5 == n.default.xGet("standBossChange") && 3 == n.default.xGet("bowlChange") && (n.default.xSet("standBossChange", 6), this.boss.position = cc.v2(-293, -162)), 4 == n.default.xGet("bowlChange") && 1 == this.pageView.getCurrentPageIndex() && n.default.xSet("standBossChange", 11)
				}, __decorate([u({
					type: cc.Node,
					displayName: "\u732b\u9972\u6599"
				})], t.prototype, "feed", void 0), __decorate([u({
					type: cc.Node,
					displayName: "\u9017\u732b\u68d2"
				})], t.prototype, "neko", void 0), __decorate([u({
					type: cc.Node,
					displayName: "\u6d0b\u8471"
				})], t.prototype, "onion", void 0), __decorate([u({
					type: cc.Node,
					displayName: "\u732b\u7fa4"
				})], t.prototype, "cat", void 0), __decorate([u({
					type: cc.Node,
					displayName: "\u8001\u677f"
				})], t.prototype, "boss", void 0), t = __decorate([s], t)
			}(o.default);
		a.default = d, cc._RF.pop()
	}, {
		"../../common/Log": "Log",
		"../HallData": "HallData",
		"../config": "config",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage9: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "2664e0ny3pHQ7dWgh1AjSwr", "Stage9"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Stage"),
			n = e("../config"),
			i = e("./GameData"),
			c = e("../HallData"),
			r = cc._decorator,
			l = r.ccclass,
			s = r.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.hairPiece = null, t.drink = null, t.key = null, t.a03 = null, t.a04 = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), i.default.xSet("sitBossChange", 0, !1), i.default.xSet("doorChange", 0, !1), i.default.xSet("mannequinChange", 0, !1), i.default.xSet("sinkChange", 0, !1), i.default.xSet("freezer1Change", 0, !1), i.default.xSet("freezer2Change", 0, !1), i.default.xSet("hairPiece", !1, !1), i.default.xSet("drink", !1, !1), i.default.xSet("doorHandle", 0, !1)
				}, t.prototype.onEnable = function() {
					i.default.xBind("freezer1Change", this.freezer1Change.bind(this), "zcbgs2_stage9"), i.default.xBind("freezer2Change", this.freezer2Change.bind(this), "zcbgs2_stage9"), i.default.xBind("mannequinChange", this.mannequinChange.bind(this), "zcbgs2_stage9"), i.default.xBind("doorHandle", this.doorHandle.bind(this), "zcbgs2_stage9")
				}, t.prototype.freezer1Change = function(e) {
					this.hairPiece.active = !1, 0 == e || i.default.xGet("hairPiece") || (this.hairPiece.active = !0)
				}, t.prototype.freezer2Change = function(e) {
					this.drink.active = !1, 0 == e || i.default.xGet("drink") || (this.drink.active = !0)
				}, t.prototype.onTouchHairPiece = function() {
					i.default.xSet("hairPiece", !0), this.hairPiece.active = !1, c.default.xSet("propGetPanel", n.default.propsEnum.hairPiece)
				}, t.prototype.onTouchDrink = function() {
					i.default.xSet("drink", !0), this.drink.active = !1, c.default.xSet("propGetPanel", n.default.propsEnum.drink)
				}, t.prototype.onTouhKey = function() {
					this.key.active = !1, c.default.xSet("propGetPanel", n.default.propsEnum.key)
				}, t.prototype.mannequinChange = function(e) {
					var t = this;
					1 == e && (this.forbidControl(), this.a03.play("a03"), this.a03.on("finished", function() {
						t.key.active = !0, t.recoverControl()
					}))
				}, t.prototype.onTouchflower = function() {
					var e = this;
					this.forbidControl(), this.a04.play("a04"), this.a04.on("finished", function() {
						c.default.xSet("gameOverPanel", 4), e.recoverControl()
					})
				}, t.prototype.doorHandle = function(e) {
					2 == e && i.default.xSet("doorChange", 3), 3 == e && c.default.xSet("gamePassPanel", 1)
				}, __decorate([s({
					type: cc.Node,
					displayName: "\u5047\u53d1"
				})], t.prototype, "hairPiece", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u52a0\u73ed\u996e\u6599"
				})], t.prototype, "drink", void 0), __decorate([s({
					type: cc.Node,
					displayName: "\u94a5\u5319"
				})], t.prototype, "key", void 0), __decorate([s({
					type: cc.Animation,
					displayName: "\u8001\u677f\u6b7b\u4ea1\u52a8\u753b"
				})], t.prototype, "a03", void 0), __decorate([s({
					type: cc.Animation,
					displayName: "\u804c\u5458\u6b7b\u4ea1\u52a8\u753b"
				})], t.prototype, "a04", void 0), t = __decorate([l], t)
			}(o.default);
		a.default = u, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"../config": "config",
		"./GameData": "GameData",
		"./Stage": "Stage"
	}],
	Stage: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "8e13cxaEmVMA6Io/n/w0FTP", "Stage"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./GameData"),
			n = e("../HallData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.content = null, t.pageView = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					o.default.Xclear(), new o.default, this.pageView = this.node.getComponentInChildren(cc.PageView), this.content = this.pageView.content, this.pageView.node.on("page-turning", this.shiftPage.bind(this)), n.default.xSet("propPanel"), n.default.xSet("menuBtn"), n.default.xSet("hintBtn"), n.default.xSet("moreGame"), o.default.xSet("forbidControl", null, !1), o.default.xBind("forbidControl", this.forbidControl.bind(this), "zcbgs2_stage"), o.default.xSet("recoverControl", null, !1), o.default.xBind("recoverControl", this.recoverControl.bind(this), "zcbgs2_stage")
				}, t.prototype.forbidControl = function() {
					this.pageView.horizontal = !1
				}, t.prototype.recoverControl = function() {
					this.pageView.horizontal = !0
				}, t.prototype.shiftPage = function() {}, t = __decorate([c], t)
			}(cc.Component));
		a.default = r, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"./GameData": "GameData"
	}],
	UIManager: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "98688F3vgNFJ4Jjk6PWBncX", "UIManager"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./HallData"),
			n = e("./config"),
			i = e("../common/Utils"),
			c = e("./prefabs/settle/gameOverPanel"),
			r = e("./prefabs/settle/gameClearPanel"),
			l = e("./prefabs/props/propGetPanel"),
			s = e("../common/component/XCamera"),
			u = e("./prefabs/itemLibrary/itemLibraryDescPanel"),
			d = e("../common/Log"),
			p = e("./prefabs/hint/hintPanel"),
			f = cc._decorator,
			h = f.ccclass,
			m = (f.property, "zcbgs2_uiManager"),
			_ = function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					o.default.xBind("loadingPanel", this.onLoadingPanel.bind(this), m), o.default.xBind("menuBtn", this.onMenuBtn.bind(this), m), o.default.xBind("menuPanel", this.onMenuPanel.bind(this), m), o.default.xBind("workOverTimePanel", this.onWorkTimePanel.bind(this), m), o.default.xBind("gameOverPanel", this.onGameOverPanel.bind(this), m), o.default.xBind("gamePassPanel", this.onGamePassPanel.bind(this), m), o.default.xBind("propPanel", this.onPropPanel.bind(this), m), o.default.xBind("propGetPanel", this.onPropGetPanel.bind(this), m), o.default.xBind("itemLibraryDescPanel", this.onItemLibraryDescPanel.bind(this), m), o.default.xBind("howToPanel", this.onHowToPanel.bind(this), m), o.default.xBind("maskPanel", this.onMaskPanel.bind(this), m), o.default.xBind("loadScene", this.loadScene.bind(this), m), o.default.xBind("hintBtn", this.onHintBtn.bind(this), m), o.default.xBind("hintPanel", this.onHintPanel.bind(this), m), o.default.xBind("moreGame", this.onMoreGame.bind(this), m)
				}, t.prototype.onMoreGame = function() {
					return __awaiter(this, void 0, void 0, function() {
						var e, t;
						return __generator(this, function(a) {
							switch (a.label) {
								case 0:
									return [4, i.default.loadPrefab("prefab/moreGame/moreGame")];
								case 1:
									return e = a.sent(), (t = cc.instantiate(e)).position = cc.v2(this.node.width / 2 - t.width / 2 - 20, 180), this.node.addChild(t), [2]
							}
						})
					})
				}, t.prototype.onRecommendMain = function(e) {
					return __awaiter(this, void 0, void 0, function() {
						var t, a, o;
						return __generator(this, function(n) {
							switch (n.label) {
								case 0:
									return e ? (t = e.y || -120, d.default.info("\u8fdb\u5165\u521b\u5efa\u4e3b\u63a8"), [4, i.default.loadPrefab("prefab/recommend/recommendMain")]) : [2];
								case 1:
									return a = n.sent(), (o = cc.instantiate(a)).position = cc.v2(-this.node.width / 2, t), this.node.addChild(o), [2]
							}
						})
					})
				}, t.prototype.loadScene = function() {
					this.node.destroyAllChildren()
				}, t.prototype.onRecommend = function() {
					return __awaiter(this, void 0, void 0, function() {
						var e, t;
						return __generator(this, function(a) {
							switch (a.label) {
								case 0:
									return d.default.info("\u8fdb\u5165\u521b\u5efa\u4e92\u63a8\u62bd\u5c49"), [4, i.default.loadPrefab("prefab/recommend/recommendDrawer")];
								case 1:
									return e = a.sent(), (t = cc.instantiate(e)).position = cc.v2(-this.node.width / 2, 380), this.node.addChild(t), [2]
							}
						})
					})
				}, t.prototype.onScreenRec = function() {
					return __awaiter(this, void 0, void 0, function() {
						var e, t;
						return __generator(this, function(a) {
							switch (a.label) {
								case 0:
									return [4, i.default.loadPrefab(n.default.panel[n.default.panelEnum.screenRec])];
								case 1:
									return e = a.sent(), (t = cc.instantiate(e)).position = cc.v2(this.node.width / 2 - t.width / 2 - 20, 160), this.node.addChild(t), [2]
							}
						})
					})
				}, t.prototype.onMenuBtn = function() {
					return __awaiter(this, void 0, void 0, function() {
						var e, t;
						return __generator(this, function(a) {
							switch (a.label) {
								case 0:
									return [4, i.default.loadPrefab(n.default.panel[n.default.panelEnum.menuBtn])];
								case 1:
									return e = a.sent(), (t = cc.instantiate(e)).position = cc.v2(this.node.width / 2 - t.width / 2 - 20, 380), this.node.addChild(t), [2]
							}
						})
					})
				}, t.prototype.onLoadingPanel = function() {
					return __awaiter(this, void 0, void 0, function() {
						var e, t;
						return __generator(this, function(a) {
							switch (a.label) {
								case 0:
									return [4, i.default.loadPrefab(n.default.panel[n.default.panelEnum.loadingPanel])];
								case 1:
									return e = a.sent(), (t = cc.instantiate(e)).position = cc.v2(0, 0), t.width = this.node.width, s.default.Instance.node.addChild(t), [2]
							}
						})
					})
				}, t.prototype.onPropPanel = function() {
					return __awaiter(this, void 0, void 0, function() {
						var e, t;
						return __generator(this, function(a) {
							switch (a.label) {
								case 0:
									return [4, i.default.loadPrefab(n.default.panel[n.default.panelEnum.propsPanel])];
								case 1:
									return e = a.sent(), (t = cc.instantiate(e)).position = cc.v2(0, 0), t.width = this.node.width, this.node.addChild(t), [2]
							}
						})
					})
				}, t.prototype.onMenuPanel = function() {
					return __awaiter(this, void 0, void 0, function() {
						var e, t;
						return __generator(this, function(a) {
							switch (a.label) {
								case 0:
									return [4, i.default.loadPrefab(n.default.panel[n.default.panelEnum.menuPanel])];
								case 1:
									return e = a.sent(), (t = cc.instantiate(e)).position = cc.v2(0, 0), this.node.addChild(t), [2]
							}
						})
					})
				}, t.prototype.onWorkTimePanel = function() {
					return __awaiter(this, void 0, void 0, function() {
						var e, t;
						return __generator(this, function(a) {
							switch (a.label) {
								case 0:
									return [4, i.default.loadPrefab(n.default.panel[n.default.panelEnum.workOverTimePanel])];
								case 1:
									return e = a.sent(), t = cc.instantiate(e), this.node.addChild(t), [2]
							}
						})
					})
				}, t.prototype.onGameOverPanel = function(e) {
					return __awaiter(this, void 0, void 0, function() {
						var t, a;
						return __generator(this, function(o) {
							switch (o.label) {
								case 0:
									return [4, i.default.loadPrefab(n.default.panel[n.default.panelEnum.gameOverPanel])];
								case 1:
									return t = o.sent(), (a = cc.instantiate(t)).getComponent(c.default).init(e), this.node.addChild(a), [2]
							}
						})
					})
				}, t.prototype.onGamePassPanel = function(e) {
					return __awaiter(this, void 0, void 0, function() {
						var t, a;
						return __generator(this, function(o) {
							switch (o.label) {
								case 0:
									return [4, i.default.loadPrefab(n.default.panel[n.default.panelEnum.gamePassPanel])];
								case 1:
									return t = o.sent(), (a = cc.instantiate(t)).getComponent(r.default).init(e), this.node.addChild(a), [2]
							}
						})
					})
				}, t.prototype.onPropGetPanel = function(e) {
					return __awaiter(this, void 0, void 0, function() {
						var t, a;
						return __generator(this, function(o) {
							switch (o.label) {
								case 0:
									return [4, i.default.loadPrefab(n.default.panel[n.default.panelEnum.propGetPanel])];
								case 1:
									return t = o.sent(), (a = cc.instantiate(t)).getComponent(l.default).init(e), this.node.addChild(a), [2]
							}
						})
					})
				}, t.prototype.onItemLibraryDescPanel = function(e) {
					return __awaiter(this, void 0, void 0, function() {
						var t, a, c;
						return __generator(this, function(r) {
							switch (r.label) {
								case 0:
									return [4, i.default.loadPrefab(n.default.panel[n.default.panelEnum.itemLibraryDescPanel])];
								case 1:
									return t = r.sent(), a = cc.instantiate(t), c = o.default.xGet("itemState"), a.getComponent(u.default).init(c[e]), this.node.addChild(a), [2]
							}
						})
					})
				}, t.prototype.onHowToPanel = function(e) {
					return __awaiter(this, void 0, void 0, function() {
						var e, t;
						return __generator(this, function(a) {
							switch (a.label) {
								case 0:
									return [4, i.default.loadPrefab(n.default.panel[n.default.panelEnum.howToPanel])];
								case 1:
									return e = a.sent(), t = cc.instantiate(e), this.node.addChild(t), [2]
							}
						})
					})
				}, t.prototype.onMaskPanel = function(e) {
					return __awaiter(this, void 0, void 0, function() {
						var e, t;
						return __generator(this, function(a) {
							switch (a.label) {
								case 0:
									return d.default.info("\u8fdb\u5165\u521b\u5efa\u8499\u677f"), [4, i.default.loadPrefab(n.default.panel[n.default.panelEnum.maskPanel])];
								case 1:
									return e = a.sent(), t = cc.instantiate(e), s.default.Instance.node.addChild(t), [2]
							}
						})
					})
				}, t.prototype.onHintBtn = function() {
					return __awaiter(this, void 0, void 0, function() {
						var e, t;
						return __generator(this, function(a) {
							switch (a.label) {
								case 0:
									return [4, i.default.loadPrefab(n.default.panel[n.default.panelEnum.hintBtn])];
								case 1:
									return e = a.sent(), (t = cc.instantiate(e)).position = cc.v2(this.node.width / 2 - t.width / 2 - 20, 280), this.node.addChild(t), [2]
							}
						})
					})
				}, t.prototype.onHintPanel = function() {
					return __awaiter(this, void 0, void 0, function() {
						var e, t;
						return __generator(this, function(a) {
							switch (a.label) {
								case 0:
									return [4, i.default.loadPrefab(n.default.panel[n.default.panelEnum.hintPanel])];
								case 1:
									return e = a.sent(), (t = cc.instantiate(e)).getComponent(p.default).init(o.default.xGet("curStage")), this.node.addChild(t), [2]
							}
						})
					})
				}, t.prototype.onDestroy = function() {}, t = __decorate([h], t)
			}(cc.Component);
		a.default = _, cc._RF.pop()
	}, {
		"../common/Log": "Log",
		"../common/Utils": "Utils",
		"../common/component/XCamera": "XCamera",
		"./HallData": "HallData",
		"./config": "config",
		"./prefabs/hint/hintPanel": "hintPanel",
		"./prefabs/itemLibrary/itemLibraryDescPanel": "itemLibraryDescPanel",
		"./prefabs/props/propGetPanel": "propGetPanel",
		"./prefabs/settle/gameClearPanel": "gameClearPanel",
		"./prefabs/settle/gameOverPanel": "gameOverPanel"
	}],
	Utils: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "c37bezAQJVASZAoSBU8n9yJ", "Utils"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Log"),
			n = function() {
				function e() {}
				return e.clone = function(e) {
					if (!e || "object" != typeof e) return e;
					var t = e.constructor === Array ? [] : {},
						a = function(e, t) {
							for (var o in e) e[o] && "object" == typeof e[o] ? (e[o].constructor === Array ? t[o] = [] : t[o] = {}, a(e[o], t[o])) : t[o] = e[o];
							return t
						};
					return a(e, t)
				}, e.loadJson = function(e) {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(t) {
							return [2, new Promise(function(t) {
								cc.loader.loadRes(e, cc.JsonAsset, function(e, a) {
									e ? (o.default.error(e), t({})) : t(a.json)
								})
							})]
						})
					})
				}, e.loadAudioClip = function(e) {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(t) {
							return [2, new Promise(function(t) {
								cc.loader.loadRes(e, cc.AudioClip, function(e, a) {
									e ? (o.default.error(e), t(null)) : t(a)
								})
							})]
						})
					})
				}, e.loadPrefab = function(e) {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(t) {
							return [2, new Promise(function(t) {
								cc.loader.loadRes(e, cc.Prefab, function(e, a) {
									e ? (o.default.error(e), t(null)) : t(a)
								})
							})]
						})
					})
				}, e.loadImage = function(e) {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(t) {
							return [2, new Promise(function(t) {
								cc.loader.loadRes(e, cc.SpriteFrame, function(e, a) {
									e ? (o.default.error(e), t(null)) : t(a)
								})
							})]
						})
					})
				}, e
			}();
		a.default = n, cc._RF.pop()
	}, {
		"./Log": "Log"
	}],
	XAnim: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "bc4c88ub/tFX6XTSzSrQbyO", "XAnim"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			i = (o.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				var a;
				return __extends(t, e), a = t, t.prototype.onLoad = function() {
					a.Instance = this
				}, t.Instance = null, t = a = __decorate([n], t)
			}(cc.Component));
		a.default = i, cc._RF.pop()
	}, {}],
	XBGM: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "f61bbvF1QpIG7IHSJOwmFuy", "XBGM"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			i = o.property,
			c = e("../Audio"),
			r = e("../Log"),
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.bgmAudio = null, t.slientPlay = !1, t.volumeRate = .8, t
				}
				return __extends(t, e), t.prototype.start = function() {
					var e = this;
					if (!this.bgmAudio) return r.default.error("\u6ca1\u6709\u6dfb\u52a0\u80cc\u666f\u97f3\u4e50"), void c.default.stopBGM();
					c.default.xGet("bgmVolume") <= .001 && !this.slientPlay ? r.default.info("\u97f3\u91cf\u592a\u5c0f\u6216\u6ca1\u6709\u5141\u8bb8\u64ad\u653e") : this.scheduleOnce(function() {
						r.default.info("\u5f00\u59cb\u64ad\u653e\u97f3\u4e50", e.bgmAudio), c.default.playBGM(e.bgmAudio, e.volumeRate)
					}, .05)
				}, __decorate([i({
					type: cc.AudioClip,
					displayName: "\u80cc\u666f\u97f3\u4e50"
				})], t.prototype, "bgmAudio", void 0), __decorate([i({
					type: Boolean,
					displayName: "\u9759\u9ed8\u64ad\u653e"
				})], t.prototype, "slientPlay", void 0), __decorate([i({
					type: cc.Float,
					displayName: "\u97f3\u91cf\u6bd4"
				})], t.prototype, "volumeRate", void 0), t = __decorate([n], t)
			}(cc.Component);
		a.default = l, cc._RF.pop()
	}, {
		"../Audio": "Audio",
		"../Log": "Log"
	}],
	XButton: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "6bd789T9ShP6pN1TQ3jyNAX", "XButton"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			i = o.property,
			c = e("../Audio"),
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.touchAudio = null, t.clickInterval = .4, t.touchEvents = [], t.touchStartEvents = [], t.touchCancelEvents = [], t.isDown = !1, t.rawScale = 0, t.clickTime = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					this.rawScale = this.node.scale, this.node.on("touchstart", this.touchStart.bind(this), this.node), this.node.on("touchend", this.touchEnd.bind(this), this.node), this.node.on("touchcancel", this.touchCancel.bind(this), this.node)
				}, t.prototype.touchStart = function(e) {
					0 != this.enabled && (this.isDown = !0, this.touchAudio && c.default.playSFX(this.touchAudio), this.touchStartEvents.length > 0 && cc.Component.EventHandler.emitEvents(this.touchStartEvents))
				}, t.prototype.touchEnd = function(e) {
					if (this.isDown = !1, 0 != this.enabled) {
						var t = new Date,
							a = 1e3 * this.clickInterval;
						t.getTime() - this.clickTime < a || (this.clickTime = t.getTime(), this.touchEvents.length > 0 && cc.Component.EventHandler.emitEvents(this.touchEvents))
					}
				}, t.prototype.touchCancel = function(e) {
					this.isDown = !1, 0 != this.enabled && this.touchCancelEvents.length > 0 && cc.Component.EventHandler.emitEvents(this.touchCancelEvents)
				}, t.prototype.addTouchStartEvent = function(e, t, a, o) {
					void 0 === o && (o = "");
					var n = new cc.Component.EventHandler;
					n.target = e, n.component = t, n.customEventData = o + "", n.handler = a, this.touchStartEvents.push(n)
				}, t.prototype.addTouchEvent = function(e, t, a, o) {
					void 0 === o && (o = "");
					var n = new cc.Component.EventHandler;
					n.target = e, n.component = t, n.customEventData = o + "", n.handler = a, this.touchEvents.push(n)
				}, t.prototype.addTouchCancelEvent = function(e, t, a, o) {
					void 0 === o && (o = "");
					var n = new cc.Component.EventHandler;
					n.target = e, n.component = t, n.customEventData = o + "", n.handler = a, this.touchCancelEvents.push(n)
				}, __decorate([i({
					type: cc.AudioClip,
					displayName: "\u89e6\u6478\u97f3"
				})], t.prototype, "touchAudio", void 0), __decorate([i({
					type: cc.Float,
					displayName: "\u70b9\u51fb\u95f4\u9694"
				})], t.prototype, "clickInterval", void 0), __decorate([i({
					type: cc.Component.EventHandler,
					displayName: "\u89e6\u6478\u56de\u8c03"
				})], t.prototype, "touchEvents", void 0), t = __decorate([n], t)
			}(cc.Component);
		a.default = r, cc._RF.pop()
	}, {
		"../Audio": "Audio"
	}],
	XCamera: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "a85d8rtRs1MWL8c7scwqTbe", "XCamera"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			i = (o.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				var a;
				return __extends(t, e), a = t, t.prototype.onLoad = function() {
					a.Instance = this
				}, t.Instance = null, t = a = __decorate([n], t)
			}(cc.Component));
		a.default = i, cc._RF.pop()
	}, {}],
	XToggleGroup: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "cfc05+FMCZERJn7RnzBzY/B", "XToggleGroup"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			i = (o.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.allowSwitchOff = !1, t.toggleItems = [], t
				}
				return __extends(t, e), t.prototype.updateToggles = function(e) {
					this.enabledInHierarchy && this.toggleItems.forEach(function(t) {
						e.isChecked && t !== e && t.isChecked && t.enabled && t._hideCheckMark()
					})
				}, t.prototype.addToggle = function(e) {
					-1 === this.toggleItems.indexOf(e) && (e.toggleGroup = this, this.toggleItems.push(e))
				}, t.prototype.removeToggle = function(e) {
					var t = this.toggleItems.indexOf(e);
					t > -1 && this.toggleItems.splice(t, 1)
				}, t.prototype._hideAllToggle = function() {
					this.toggleItems.forEach(function(e) {
						e._hideCheckMark()
					})
				}, t.prototype.start = function() {}, t = __decorate([n], t)
			}(cc.Component));
		a.default = i, cc._RF.pop()
	}, {}],
	XToggle: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "5664b6BoSdLJpXvgYK5/N90", "XToggle"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			i = o.property,
			c = e("./XToggleGroup"),
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.isChecked = !1, t.toggleGroup = null, t.checkMark = null, t.checkEvents = [], t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					this._registerToggleEvent(), this._updateCheckMark(), this.toggleGroup && this.toggleGroup.addToggle(this)
				}, t.prototype.onDisable = function() {
					this._unregisterToggleEvent(), this.toggleGroup && this.toggleGroup.removeToggle(this)
				}, t.prototype._hideCheckMark = function() {
					this.isChecked = !1, this._updateCheckMark()
				}, t.prototype.toggle = function(e) {
					this.toggleGroup && this.toggleGroup._hideAllToggle(), this.isChecked = !this.isChecked, this._updateCheckMark(), this._emitToggleEvents()
				}, t.prototype.check = function() {
					this.isChecked = !0, this._updateCheckMark()
				}, t.prototype.uncheck = function() {
					this.isChecked = !1, this._updateCheckMark()
				}, t.prototype._updateCheckMark = function() {
					this.checkMark.node.active = !!this.isChecked
				}, t.prototype._registerToggleEvent = function() {
					this.node.on("touchend", this.toggle, this)
				}, t.prototype._unregisterToggleEvent = function() {
					this.node.off("touchend", this.toggle, this)
				}, t.prototype._emitToggleEvents = function() {
					this.node.emit("toggle", this), this.checkEvents && cc.Component.EventHandler.emitEvents(this.checkEvents, this)
				}, __decorate([i({
					type: cc.Boolean,
					displayName: "\u9ed8\u8ba4\u662f\u5426\u9009\u4e2d"
				})], t.prototype, "isChecked", void 0), __decorate([i({
					type: c.default,
					displayName: "\u6240\u5c5e\u7684\u6309\u94ae\u7ec4"
				})], t.prototype, "toggleGroup", void 0), __decorate([i({
					type: cc.Sprite,
					displayName: "\u9009\u4e2d\u663e\u793a\u7684\u56fe\u7247"
				})], t.prototype, "checkMark", void 0), __decorate([i({
					type: cc.Component.EventHandler,
					displayName: "\u70b9\u51fb\u4e8b\u4ef6"
				})], t.prototype, "checkEvents", void 0), t = __decorate([n], t)
			}(cc.Component);
		a.default = r, cc._RF.pop()
	}, {
		"./XToggleGroup": "XToggleGroup"
	}],
	anim1: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "0299akY5g9PL6+Q8tPtNmYT", "anim1"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../HallData"),
			n = e("../GameData"),
			i = e("../../../common/Log"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					o.default.xSet("delMask"), n.default.xBind("maskEnd", this.maskEnd.bind(this), "zcbgs2_anim1"), this.scheduleOnce(function() {
						i.default.info("go 2"), o.default.xSet("maskPanel")
					}, 8)
				}, t.prototype.maskEnd = function() {
					n.default.xUnbind("zcbgs2_anim1"), o.default.xSet("loadStageAnim", 2)
				}, t = __decorate([r], t)
			}(cc.Component));
		a.default = l, cc._RF.pop()
	}, {
		"../../../common/Log": "Log",
		"../../HallData": "HallData",
		"../GameData": "GameData"
	}],
	anim2: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "590d3QCvFRPoLdsFGd4uDH3", "anim2"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../HallData"),
			n = e("../GameData"),
			i = e("../../../common/Log"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					o.default.xSet("delMask"), n.default.xBind("maskEnd", this.maskEnd.bind(this), "zcbgs2_anim2"), this.scheduleOnce(function() {
						i.default.info("go 3"), o.default.xSet("maskPanel")
					}, 4)
				}, t.prototype.maskEnd = function() {
					n.default.xUnbind("zcbgs2_anim2"), o.default.xSet("loadStageAnim", 3)
				}, t = __decorate([r], t)
			}(cc.Component));
		a.default = l, cc._RF.pop()
	}, {
		"../../../common/Log": "Log",
		"../../HallData": "HallData",
		"../GameData": "GameData"
	}],
	anim3: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "e5a1ds2S11C+rxsfwiJSMWw", "anim3"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../HallData"),
			n = e("../GameData"),
			i = e("../../../common/Log"),
			c = cc._decorator,
			r = c.ccclass,
			l = c.property,
			s = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.anim = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					o.default.xSet("delMask"), n.default.xBind("maskEnd", this.maskEnd.bind(this), "zcbgs2_anim3"), this.anim.play("31_anim3"), this.anim.on("finished", function() {
						i.default.info("go 4"), o.default.xSet("maskPanel")
					})
				}, t.prototype.maskEnd = function() {
					n.default.xUnbind("zcbgs2_anim3"), o.default.xSet("loadStageAnim", 4)
				}, __decorate([l({
					type: cc.Animation,
					displayName: "\u52a8\u753b"
				})], t.prototype, "anim", void 0), t = __decorate([r], t)
			}(cc.Component);
		a.default = s, cc._RF.pop()
	}, {
		"../../../common/Log": "Log",
		"../../HallData": "HallData",
		"../GameData": "GameData"
	}],
	anim4: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "74a7bTuOStB75IsERKOwW1e", "anim4"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../HallData"),
			n = e("../GameData"),
			i = e("../../../common/Log"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					o.default.xSet("delMask"), n.default.xBind("maskEnd", this.maskEnd.bind(this), "zcbgs2_anim4"), this.scheduleOnce(function() {
						i.default.info("go anim5"), o.default.xSet("maskPanel")
					}, 4)
				}, t.prototype.maskEnd = function() {
					n.default.xUnbind("zcbgs2_anim4"), o.default.xSet("loadStageAnim", 5)
				}, t = __decorate([r], t)
			}(cc.Component));
		a.default = l, cc._RF.pop()
	}, {
		"../../../common/Log": "Log",
		"../../HallData": "HallData",
		"../GameData": "GameData"
	}],
	anim5: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "8ca73Fx3CtAH55HYBWBts5r", "anim5"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../HallData"),
			n = e("../GameData"),
			i = e("../../../common/Log"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					o.default.xSet("delMask"), n.default.xBind("maskEnd", this.maskEnd.bind(this), "zcbgs2_anim5"), this.scheduleOnce(function() {
						o.default.xSet("maskPanel")
					}, 4)
				}, t.prototype.maskEnd = function() {
					n.default.xUnbind("zcbgs2_anim5"), i.default.info("\u8fdb\u5165\u52a0\u8f7d32\u5173"), o.default.xSet("loadStage", 32)
				}, t = __decorate([r], t)
			}(cc.Component));
		a.default = l, cc._RF.pop()
	}, {
		"../../../common/Log": "Log",
		"../../HallData": "HallData",
		"../GameData": "GameData"
	}],
	anim6: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "a4e72K7NlhPJI/TmABLH29A", "anim6"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../HallData"),
			n = e("../GameData"),
			i = e("../../../common/Log"),
			c = cc._decorator,
			r = c.ccclass,
			l = c.property,
			s = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.anim = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					o.default.xSet("delMask"), n.default.xBind("maskEnd", this.maskEnd.bind(this), "zcbgs2_anim6"), this.anim.play("32_fin"), this.anim.on("finished", function() {
						i.default.info("go 7"), o.default.xSet("maskPanel")
					})
				}, t.prototype.maskEnd = function() {
					n.default.xUnbind("zcbgs2_anim6"), o.default.xSet("loadStageAnim", 7)
				}, __decorate([l({
					type: cc.Animation,
					displayName: "\u52a8\u753b"
				})], t.prototype, "anim", void 0), t = __decorate([r], t)
			}(cc.Component);
		a.default = s, cc._RF.pop()
	}, {
		"../../../common/Log": "Log",
		"../../HallData": "HallData",
		"../GameData": "GameData"
	}],
	anim7: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "355109BnClKea2vvk/Ud4Dc", "anim7"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../HallData"),
			n = e("../GameData"),
			i = e("../../../common/Log"),
			c = cc._decorator,
			r = c.ccclass,
			l = c.property,
			s = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.anim = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					o.default.xSet("delMask"), n.default.xBind("maskEnd", this.maskEnd.bind(this), "zcbgs2_anim5"), this.anim.play("anim7"), this.anim.on("finished", function() {
						i.default.info("go 8"), o.default.xSet("maskPanel")
					})
				}, t.prototype.maskEnd = function() {
					n.default.xUnbind("zcbgs2_anim5"), o.default.xSet("loadStageAnim", 8)
				}, __decorate([l({
					type: cc.Animation,
					displayName: "\u52a8\u753b"
				})], t.prototype, "anim", void 0), t = __decorate([r], t)
			}(cc.Component);
		a.default = s, cc._RF.pop()
	}, {
		"../../../common/Log": "Log",
		"../../HallData": "HallData",
		"../GameData": "GameData"
	}],
	anim8: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "b7091xXSoREAYnfsDnyUFaW", "anim8"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../HallData"),
			n = cc._decorator,
			i = n.ccclass,
			c = n.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.anim = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					o.default.xSet("delMask"), this.anim.play("anim8"), this.anim.on("finished", function() {
						o.default.xSet("menuBtn")
					})
				}, __decorate([c({
					type: cc.Animation,
					displayName: "\u52a8\u753b"
				})], t.prototype, "anim", void 0), t = __decorate([i], t)
			}(cc.Component);
		a.default = r, cc._RF.pop()
	}, {
		"../../HallData": "HallData"
	}],
	bait: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "9e22dwMBspOnLg9tvrgXeIn", "bait"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.whale:
							i.default.xSet("delProp", this.index), i.default.xSet("whaleChange", 2)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	bamboo1: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "005abMzlnJJIaK4RyccXkAr", "bamboo1"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../../common/Log"),
			i = e("../../config"),
			c = e("../../stage/GameData"),
			r = cc._decorator,
			l = r.ccclass,
			s = (r.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					c.default.xBind("bambooChange1", this.stateChange.bind(this), "zcbgs2_bamboo1")
				}, t.prototype.onCollisionEnter = function(e, t) {
					var a = e.tag;
					switch (n.default.info("\u78b0\u649e:", i.default.propsEnum[a]), a) {
						case i.default.propsEnum.nata:
							0 == c.default.xGet("bambooChange1") && c.default.xSet("bambooChange1", 1)
					}
				}, t = __decorate([l], t)
			}(o.default));
		a.default = s, cc._RF.pop()
	}, {
		"../../../common/Log": "Log",
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	bamboo2: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "0a61fv81K5ObriuDE1rABD2", "bamboo2"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = e("../../../common/Log"),
			c = e("../../config"),
			r = cc._decorator,
			l = r.ccclass,
			s = (r.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("bambooChange2", this.stateChange.bind(this), "zcbgs2_bamboo2")
				}, t.prototype.onCollisionEnter = function(e, t) {
					var a = e.tag;
					switch (i.default.info("\u78b0\u649e:", c.default.propsEnum[a]), a) {
						case c.default.propsEnum.nata:
							0 == n.default.xGet("bambooChange2") && n.default.xSet("bambooChange2", 2)
					}
				}, t = __decorate([l], t)
			}(o.default));
		a.default = s, cc._RF.pop()
	}, {
		"../../../common/Log": "Log",
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	bamboo3: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "2bc94FVAf1KbKCU4eM3jLEO", "bamboo3"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = e("../../../common/Log"),
			c = e("../../config"),
			r = cc._decorator,
			l = r.ccclass,
			s = (r.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("bambooChange3", this.stateChange.bind(this), "zcbgs2_bamboo3")
				}, t.prototype.onCollisionEnter = function(e, t) {
					var a = e.tag;
					switch (i.default.info("\u78b0\u649e:", c.default.propsEnum[a]), a) {
						case c.default.propsEnum.nata:
							0 == n.default.xGet("bambooChange3") && n.default.xSet("bambooChange3", 3)
					}
				}, t = __decorate([l], t)
			}(o.default));
		a.default = s, cc._RF.pop()
	}, {
		"../../../common/Log": "Log",
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	banner: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "b76364YDkdPuKANmXoNybVP", "banner"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.hira:
							i.default.xSet("delProp", this.index), i.default.xSet("forbidControl"), i.default.xSet("hiraChange", 1), this.scheduleOnce(function() {
								i.default.xSet("hiraChange", 999), i.default.xSet("recoverControl")
							}, .5)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	baseBallBet: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "703f2eUWbRNYJD8zYv5PZic", "baseBallBet"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(e, t) {
					switch (console.log("\u8fdb\u5165\u78b0\u649e"), e.tag) {
						case n.default.propsEnum.standBoss:
							i.default.xSet("delProp", this.index), i.default.xSet("standBossChange", 8)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	beer: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "07a66/f1e5INajNlon+PPCF", "beer"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../../common/Log"),
			i = e("../../config"),
			c = e("../../stage/GameData"),
			r = cc._decorator,
			l = r.ccclass,
			s = (r.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(e, t) {
					var a = e.tag;
					switch (n.default.info("\u78b0\u649e:", i.default.propsEnum[a]), a) {
						case i.default.propsEnum.sitBoss:
							c.default.xSet("delProp", this.index), c.default.xSet("sitBossChange", 4)
					}
				}, t = __decorate([l], t)
			}(o.default));
		a.default = s, cc._RF.pop()
	}, {
		"../../../common/Log": "Log",
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	bee: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "780d4kG5CBGErnsBpF8zD0B", "bee"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = cc._decorator,
			i = n.ccclass,
			c = (n.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t = __decorate([i], t)
			}(o.default));
		a.default = c, cc._RF.pop()
	}, {
		"./Prop": "Prop"
	}],
	bell: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "83ea12fLd1Bxp2iDcvyYcUk", "bell"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("bellChange", this.stateChange.bind(this), "zcbgs2_bell")
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("bellChange", 1)
				}, t.prototype.stateChange = function(t, a) {
					var o = this;
					return e.prototype.stateChange.call(this, t, a), 1 == t && this.anim1 && (this.anim1.play("24_run"), n.default.xSet("forbidControl"), this.anim1.on("finished", function() {
						n.default.xSet("doorChange", 1), o.scheduleOnce(function() {
							n.default.xSet("doorChange", 0), n.default.xSet("sitBossChange", 999)
						}, .2), n.default.xSet("recoverControl")
					})), null
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	bike: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "de44eiME+VAuKPVZon+x+vE", "bike"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("bikeChange", this.stateChange.bind(this), "zcbgs2_bike")
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("bikeChange", 1)
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	bone: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "7d365oZvsBJt7Ueb5kAl5Bp", "bone"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.whale:
							i.default.xSet("delProp", this.index), i.default.xSet("whaleChange", 3)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	bookRace: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "996c7EI2WFOR7ZcA3KXOExl", "bookRace"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("bookRaceChange", this.stateChange.bind(this), "zcbgs2_bookRace")
				}, t.prototype.stateChange = function(t, a) {
					return __awaiter(this, void 0, void 0, function() {
						var o;
						return __generator(this, function(n) {
							switch (n.label) {
								case 0:
									return [4, e.prototype.stateChange.call(this, t, a)];
								case 1:
									return o = n.sent(), 1 == t && o.runAction(cc.moveBy(1, cc.v2(-300, 0))), [2, o]
							}
						})
					})
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	boss18: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "b21b8NejRFLrp3x6Ryyn/Ew", "boss18"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.chair1:
							i.default.xSet("delProp", this.index), i.default.xSet("chair1Change", 1)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	bowl: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "be033g4NRZNQYafxnRDjxeb", "bowl"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("bowlChange", this.stateChange.bind(this), "zcbgs2_bowl")
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	box1: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "2ae4ax1c6lJv6QQsPSWTpw1", "box1"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("box1Change", this.stateChange.bind(this), "zcbgs2_box1")
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("box1Change", 1)
				}, t.prototype.onTouch1 = function() {
					n.default.xSet("box1Change", 0)
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	box2: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "330d1N78GZEbL7/RV/ry/Ch", "box2"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("box2Change", this.stateChange.bind(this), "zcbgs2_box2")
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("box2Change", 1)
				}, t.prototype.onTouch1 = function() {
					n.default.xSet("box2Change", 0)
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	box3: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "d5a11ac5N9LFK4SIYxTNP+F", "box3"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("box3Change", this.stateChange.bind(this), "zcbgs2_box3")
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("box3Change", 1)
				}, t.prototype.onTouch1 = function() {
					n.default.xSet("box3Change", 0)
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	breaker: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "93ba3zs3vtCdI+7cU5lP+01", "breaker"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("breakerChange", this.stateChange.bind(this), "zcbgs2_breaker")
				}, t.prototype.onTouch1 = function() {
					n.default.xSet("breakerChange", 2)
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	bucket1: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "a1883U4fgxJ46ATE0D3YeZ+", "bucket1"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.tube:
							i.default.xSet("delProp", this.index), i.default.xSet("tubeChange", 2)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	bucket2: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "a23d1x4k5xPKKYCTn5EBSvK", "bucket2"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.fireplace:
							i.default.xSet("delProp", this.index), i.default.xSet("fireplaceChange", 2)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	button1: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "6482e24CmROtasc020xQ7wN", "button1"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../stage/GameData"),
			n = e("./Item"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					o.default.xBind("button1Change", this.stateChange.bind(this), "zcbgs2_button1")
				}, t.prototype.onTouch0 = function() {
					o.default.xSet("button1Change", 1), o.default.xSet("lockerChange1", 1)
				}, t = __decorate([c], t)
			}(n.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	cardboard: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "05247XQEf5PbKLSc4ltKezX", "cardboard"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("cardboardChange", this.stateChange.bind(this), "zcbgs2_cardboard")
				}, t.prototype.onTouch0 = function() {
					n.default.xGet("standBoss") && (n.default.xSet("cardboardChange", 1), this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
						n.default.xSet("cardboardChange", 2)
					}), cc.delayTime(.5), cc.callFunc(function() {
						n.default.xSet("cardboardChange", 3), n.default.xSet("standBossChange", 999), n.default.xSet("statueChange", 2)
					}))))
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	chabu: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "93dcfTOF9FAc4btV8RrkDu+", "chabu"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("chabuChange", this.stateChange.bind(this), "zcbgs2_chabu")
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	chair1: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "e16397ATopPPalP/xUMGnk2", "chair1"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("chair1Change", this.stateChange.bind(this), "zcbgs2_chair1")
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("chair1Change", 1)
				}, t.prototype.onTouch1 = function() {
					n.default.xSet("chair1Change", 0)
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	clock1: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "5d6bdl+FE5GtqSOnKxi/TEr", "clock1"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../stage/GameData"),
			n = e("./Item"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					o.default.xBind("clock1Change", this.stateChange.bind(this), "zcbgs2_clock1")
				}, t.prototype.onTouch0 = function() {
					o.default.xSet("clock1Change", 1)
				}, t.prototype.onTouch1 = function() {
					o.default.xSet("clock1Change", 2)
				}, t = __decorate([c], t)
			}(n.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	cloth: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "6ae2f/B9tFDKYx6PMVmcSie", "cloth"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.lamp1:
							i.default.xSet("delProp", this.index), i.default.xSet("lampChange", 1);
							break;
						case n.default.propsEnum.lamp2:
							i.default.xSet("delProp", this.index), i.default.xSet("lampChange", 2);
							break;
						case n.default.propsEnum.lamp3:
							i.default.xSet("delProp", this.index), i.default.xSet("lampChange", 3)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	config: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "cf60c6Aei9NXKIcxbGDFu0G", "config"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = function() {
			function e() {}
			return e.isOpenCollision = !0, e.isOpenCollisionDebug = !0, e.isShowDebug = !0, e.gameFrameRate = 60, e.stageNum = 30, e.propsNum = 40, e.propsEnum = cc.Enum({
				default: 0,
				key: 1,
				door: 2,
				standBoss: 3,
				umbrella: 4,
				baseBallBet: 5,
				remocon: 6,
				hera: 7,
				fan: 8,
				store: 9,
				drink: 10,
				shredder: 11,
				goat: 12,
				paper11: 13,
				paper22: 14,
				yen100: 15,
				yen100Box: 16,
				feed: 17,
				neko: 18,
				onion: 19,
				bowl: 20,
				hairPiece: 21,
				mannequin: 22,
				nata: 23,
				bamboo: 24,
				kaguya: 25,
				window: 26,
				grandma: 27,
				tea: 28,
				dango: 29,
				chabu: 30,
				beer: 31,
				sitBoss: 32,
				book: 33,
				water: 34,
				flower: 35,
				mohawk: 36,
				yankee: 37,
				cloth: 38,
				lamp1: 39,
				lamp2: 40,
				lamp3: 41,
				carpet: 42,
				majin: 43,
				net: 44,
				spider: 45,
				nest: 46,
				step: 47,
				remocon2: 48,
				orange: 49,
				tv: 50,
				kotatsu: 51,
				spoon: 52,
				superman: 53,
				glasses: 54,
				hero: 55,
				kaijyu: 56,
				lens1: 57,
				lens2: 58,
				frame: 59,
				glasses3d: 60,
				boss18: 61,
				chair1: 62,
				fishing: 63,
				pump: 64,
				pond: 65,
				snapp: 66,
				tank: 67,
				bone: 68,
				bait: 69,
				rod: 70,
				fish: 71,
				whale: 72,
				record1: 73,
				record2: 74,
				record3: 75,
				record4: 76,
				turntable1: 77,
				turntable2: 78,
				yen50: 80,
				yen10: 81,
				jihanki: 82,
				juice1: 83,
				juice2: 84,
				millionaire: 85,
				femaleBoss: 86,
				yBook: 87,
				scissors: 88,
				rope1: 89,
				rope2: 90,
				Prop: 999,
				snowman: 91,
				bucket1: 92,
				bucket2: 93,
				tube: 94,
				fireplace: 95,
				tabaco: 96,
				hummer: 97,
				statue: 98,
				zabu: 99,
				sitzabu: 100,
				manbook: 101,
				banner: 102,
				hira: 103,
				stand: 104,
				flower1: 105,
				vase: 106,
				tree: 107,
				bee: 108,
				rocket1: 109,
				rocket2: 110,
				rocket3: 111,
				rocket4: 112,
				rocket: 113,
				spacesuit: 114,
				rocketstage: 115,
				driver: 116,
				breaker: 117
			}), e.props = {
				1: {
					address: "texture/item/m05_key_pop",
					desc: ""
				},
				4: {
					name: "\u5851\u6599\u4f1e",
					address: "texture/item/m13_umbrella_pop",
					desc: "\u7b49\u6ce8\u610f\u5230\u65f6\u5df2\u7ecf\u7d2f\u79ef\u4e86\u4e0d\u5c11\u4e86\u5462\u3002"
				},
				5: {
					name: "\u9ad8\u5c14\u592b\u7403\u6746",
					address: "texture/item/m14_club_pop",
					desc: "\u662f\u4e0a\u53f8\u5077\u5077\u85cf\u6709\u7684\u7403\u6746\u3002\u636e\u8bf4\u4ed6\u4f1a\u5728\u4eba\u8d70\u5b8c\u540e\u7684\u804c\u573a\u91cc\u5077\u5077\u7ec3\u4e60\u54e6\u3002"
				},
				6: {
					address: "texture/item/m20_remocon_pop",
					desc: ""
				},
				7: {
					name: "\u522e\u5200",
					address: "texture/item/m19_hera_pop",
					desc: "\u4e4d\u4e00\u770b\u5c31\u50cf\u6b66\u5668\u4e00\u6837\u5462\u3002"
				},
				10: {
					name: "\u8425\u517b\u996e\u54c1",
					address: "texture/item/m15_drink_pop",
					desc: "\u5c31\u7b97\u662f\u56f0\u96be\u7684\u5de5\u4f5c\u4e5f\u8981\u559d\u4e0b\u8fd9\u4e2a\u633a\u8fc7\u53bb\uff01"
				},
				13: {
					address: "texture/item/m10_paper3_pop",
					desc: ""
				},
				14: {
					address: "texture/item/m10_paper2_pop",
					desc: ""
				},
				15: {
					address: "texture/item/m36_100yen_pop",
					desc: ""
				},
				17: {
					name: "\u732b\u7f50\u5934",
					address: "texture/item/m46_feed_pop",
					desc: "\u5c31\u7b97\u770b\u8d77\u6765\u5f88\u5feb\u597d\u5403\uff0c\u4eba\u4e5f\u4e0d\u53ef\u4ee5\u53bb\u5403\u54e6\uff01"
				},
				18: {
					name: "\u9017\u732b\u8349",
					address: "texture/item/m38_neko_pop",
					desc: "\u6b63\u5f0f\u7684\u540d\u79f0\u636e\u8bf4\u662f\u79be\u672c\u79d1\u72d7\u5c3e\u8349\u5c5e\u72d7\u5c3e\u8349\u54e6\u3002"
				},
				19: {
					name: "\u6d0b\u8471",
					address: "texture/item/m45_onion_pop",
					desc: "\u5bf9\u732b\u72d7\u662f\u6709\u6bd2\u7684\uff0c\u53ef\u7edd\u5bf9\u4e0d\u80fd\u7ed9\u5b83\u4eec\u5403\u3002"
				},
				21: {
					name: "\u5047\u53d1",
					address: "texture/item/m28_hairpiece_pop",
					desc: "\u6240\u8c13\u7537\u4eba\u7684\u624d\u5e72\u53ef\u4e0d\u662f\u9760\u6bdb\u53d1\u7684\u91cf\u6765\u51b3\u5b9a\u7684\u3002"
				},
				23: {
					name: "\u67f4\u5200",
					address: "texture/item/m58_nata_pop",
					useEffect: "audios/s_set",
					desc: "\u5973\u5b69\u5b50\u8981\u662f\u62ff\u7740\u8fd9\u4e2a\u7684\u8bdd\u53ef\u662f\u5f88\u5413\u4eba\u7684\u54e6\u3002"
				},
				25: {
					name: "\u516c\u4e3b",
					address: "texture/item/m63_kaguya_pop",
					desc: "\u8bf4\u8d77\u4f4f\u5728\u6708\u4eae\u4e0a\u7684\u516c\u4e3b\uff0c\u867d\u7136\u542c\u8d77\u6765\u5f88\u597d\uff0c\u4f46\u90a3\u4e0d\u662f\u5b87\u5b99\u4eba\u4e86\u5417\u2026\u2026\uff1f"
				},
				28: {
					name: "\u7eff\u8336",
					address: "texture/item/m66_tea_pop",
					desc: "\u5f53\u77e5\u9053\u7eff\u8336\u3001\u4e4c\u9f99\u8336\u548c\u7ea2\u8336\u7528\u7684\u90fd\u662f\u4e00\u6837\u7684\u8336\u53f6\u65f6\u5927\u5bb6\u90fd\u4f1a\u5f88\u5403\u60ca\u5427\u3002"
				},
				29: {
					name: "\u56e2\u5b50",
					address: "texture/item/m67_dango_pop",
					desc: "\u770b\u8d77\u6765\u5f88\u597d\u5403\u7684\u56e2\u5b50\u3002\u5403\u7740\u4e0a\u9762\u4ec0\u4e48\u4e5f\u6ca1\u6492\u7684\u56e2\u5b50\u53ef\u4ee5\u8f7b\u677e\u54c1\u5473\u8d64\u8d2b\u7684\u751f\u6d3b\u54e6\u3002"
				},
				31: {
					name: "\u5564\u9152",
					address: "texture/item/m71_beer_pop",
					desc: "\u6211\u89c9\u5f97\u5728\u5f00\u7f50\u65f6\u90a3\u58f0\u201c\u5657\u55e4\uff01\u201d\u58f0\u4e5f\u662f\u5305\u542b\u5728\u5176\u7f8e\u5473\u5f53\u4e2d\u7684\uff01"
				},
				33: {
					address: "texture/item/m177_book_pop",
					desc: ""
				},
				34: {
					name: "\u6c34",
					address: "texture/item/m70_water_pop",
					desc: "\u54c1\u5c1d\u9152\u65f6\u53ef\u4ee5\u5728\u95f4\u9699\u559d\u6c34\u91cd\u7f6e\u53e3\u5185\u5473\u89c9\uff0c\u4f46\u5728\u54c1\u5c1d\u6c34\u65f6\u8be5\u600e\u4e48\u529e\u5462\uff1f"
				},
				36: {
					name: "\u83ab\u897f\u5e72\u5934",
					address: "texture/item/m73_mohawk_pop",
					desc: "\u5982\u679c\u6234\u4e0a\u8fd9\u4e2a\u518d\u7a7f\u4e0a\u519b\u670d\u7684\u8bdd\u4f1a\u88ab\u8ba4\u5b9a\u4e3a\u5371\u9669\u4eba\u7269\uff0c\u5373\u4fbf\u4e0d\u662f\u90a3\u6837\u7684\u4e5f\u4e0d\u8981\u53bb\u53c2\u52a0\u9009\u4e3e\u6f14\u8bf4\u54e6\uff01"
				},
				38: {
					address: "texture/item/m79_cloth_pop",
					desc: ""
				},
				43: {
					address: "texture/item/c44_majin1_pop",
					desc: ""
				},
				44: {
					name: "\u6349\u866b\u7f51",
					address: "texture/item/m80_net_pop",
					desc: "\u62ff\u8fd9\u4e2a\u53bb\u6293\u9752\u9cc9\u9c7c\u6216\u8005\u662f\u5c0f\u9f99\u867e\u7684\u8bdd\uff0c\u5e94\u8be5\u5f88\u5feb\u5c31\u4f1a\u88ab\u5f04\u7834\u7684\u5427\u2026\u2026\u3002"
				},
				45: {
					address: "texture/item/m81_spider1_pop",
					desc: ""
				},
				47: {
					name: "\u811a\u51f3",
					address: "texture/item/m213_step_pop",
					desc: "\u662f\u4e2a\u53ef\u4ee5\u8f7b\u6613\u4f53\u9a8c\u5230\u5fc3\u8df3\u52a0\u901f\u5feb\u611f\u7684\u73a9\u5177\u3002"
				},
				48: {
					address: "texture/item/m96_remocon2_pop",
					desc: ""
				},
				49: {
					name: "\u6a58\u5b50",
					address: "texture/item/m93_orange_pop",
					desc: "\u62ff\u4f19\u98df\u91cc\u914d\u7ed9\u7684\u6a58\u5b50\u76ae\u6324\u6c34\u7684\u52a0\u85e4\u541b\u4e0d\u77e5\u9053\u73b0\u5728\u8fc7\u5f97\u53ef\u597d\uff1f"
				},
				52: {
					name: "\u6c64\u5319",
					address: "texture/item/m97_spoon_pop",
					desc: "\u90a3\u4eba\u5c31\u50cf\u9b54\u672f\u5e08\u4e00\u6837\u8981\u62fc\u547d\u628a\u5b83\u5f04\u5f2f\u5427\u3002"
				},
				54: {
					name: "\u7ea2\u8272\u773c\u955c",
					address: "texture/item/m98_glasses_pop",
					desc: "\u6234\u4e0a\u540e\u6709\u79cd\u53ef\u4ee5\u6210\u4e3a\u82f1\u96c4\u7684\u611f\u89c9\u54e6\uff01"
				},
				55: {
					address: "texture/item/c50_hero_pop",
					desc: ""
				},
				57: {
					address: "texture/item/m103_lens1_pop",
					desc: ""
				},
				58: {
					address: "texture/item/m104_lens2_pop",
					desc: ""
				},
				59: {
					address: "texture/item/m102_frame_pop",
					desc: ""
				},
				60: {
					name: "3D\u773c\u955c",
					address: "texture/item/m105_3dglasses_pop",
					desc: "\u201cVR \u9003\u79bb\u516c\u53f8\u201d\u8fd9\u4e2a\u600e\u4e48\u6837\u5462\uff1f\uff1f"
				},
				61: {
					address: "texture/item/c55_boss18_pop",
					desc: ""
				},
				63: {
					name: "\u6355\u9c7c\u7f51",
					address: "texture/item/m111_fishing_pop",
					desc: "\u5982\u679c\u60f3\u8981\u6293\u5230\u9752\u9cc9\u9c7c\u6216\u8005\u5c0f\u9f99\u867e\u7684\u8bdd\u5c31\u4ece\u4e00\u5f00\u59cb\u4f7f\u7528\u8fd9\u4e2a\u5427\uff01"
				},
				64: {
					name: "\u6c34\u6cf5",
					address: "texture/item/m116_pump_pop",
					desc: "\u7528\u6765\u62bd\u6c34\u7684\u6cf5\u3002Made in Germany\u3002"
				},
				66: {
					address: "texture/item/m122_snapping_pop",
					desc: ""
				},
				68: {
					name: "\u9c7c\u9aa8\u5934",
					address: "texture/item/m_bone_pop",
					desc: "\u636e\u8bf4\u5982\u679c\u5589\u5499\u88ab\u5c0f\u9aa8\u5934\u5361\u4f4f\u65f6\u541e\u4e0b\u4e00\u5768\u996d\u5c31\u597d\u4e86\u54e6\u3002"
				},
				69: {
					name: "\u9972\u6599",
					address: "texture/item/m123_bait_pop",
					desc: "\u5269\u4e0b\u7684\u5c31\u7531\u5458\u5de5\u4eec\u6765\u6d25\u6d25\u6709\u5473\u5730\u6d88\u53d7\u4e86\u3002"
				},
				70: {
					name: "\u9493\u7aff",
					address: "texture/item/m88_rod1_pop",
					desc: "\u5373\u4fbf\u662f\u5728\u81ea\u7531\u5e94\u7528\u5e02\u573a\u51fa\u54c1\u4e5f\u8c8c\u4f3c\u5356\u4e0d\u4e86\u592a\u597d\u7684\u4ef7\u94b1\u3002"
				},
				71: {
					name: "\u9c7c",
					address: "texture/item/m125_fish_pop",
					desc: "\u5728\u6c34\u65cf\u9986\u91cc\u6e38\u6765\u6e38\u53bb\u7684\u9c7c\u3002\u88ab\u76db\u653e\u5728\u9910\u684c\u4e0a\u7684\u9c7c\u3002\u4e24\u4e2a\u90fd\u662f\u4e00\u6837\u7684\u3002"
				},
				73: {
					name: "\u5531\u7247",
					address: "texture/item/m128_record1_pop",
					desc: "A\u9762B\u9762\u8fd9\u5df2\u7ecf\u662f\u6b7b\u8bed\u4e86\u5427\u3002"
				},
				74: {
					address: "texture/item/m129_record2_pop",
					desc: ""
				},
				75: {
					address: "texture/item/m130_record3_pop",
					desc: ""
				},
				76: {
					address: "texture/item/m131_record4_pop",
					desc: ""
				},
				80: {
					address: "texture/item/m143_50yen_pop",
					desc: ""
				},
				81: {
					address: "texture/item/m144_10yen_pop",
					desc: ""
				},
				83: {
					name: "\u6e29\u6696\u7684\u679c\u6c41",
					address: "texture/item/m147_juice1_pop",
					desc: "\u80fd\u591f\u6ecb\u6da6\u5bd2\u51b7\u7684\u8eab\u4f53\u5427\u3002"
				},
				84: {
					name: "\u51b0\u9547\u679c\u6c41",
					address: "texture/item/m148_juice2_pop",
					desc: "\u5728\u590f\u5929\u6ee1\u8eab\u662f\u6c57\u65f6\u5495\u549a\u5495\u549a\u5730\u559d\u4e0b\u53bb\u5c31\u4f1a\u6709\u91cd\u65b0\u6d3b\u8fc7\u6765\u7684\u611f\u89c9\u5427\u3002"
				},
				87: {
					address: "texture/item/m177_book_pop",
					desc: ""
				},
				88: {
					name: "\u526a\u5200",
					address: "texture/item/m155_scissors_pop",
					desc: "\u975e\u5e38\u950b\u5229\u7684\u526a\u5200\u3002\u4f7f\u7528\u65f6\u8981\u6ce8\u610f\u3002"
				},
				90: {
					name: "\u72d7\u7ef3",
					address: "texture/item/m154_rope2_pop",
					desc: "\u7ef3\u5b50\u6709\u5404\u79cd\u5404\u6837\u6253\u7ed3\u7684\u65b9\u5f0f\uff0c\u662f\u4e2a\u5f88\u6df1\u5965\u7684\u4e16\u754c\u5462\u3002"
				},
				91: {
					name: "\u96ea\u4eba",
					address: "texture/item/m161_snowman1_pop",
					desc: "\u90fd\u5e02\u7684\u5b69\u5b50\u5411\u5f80\u7684\u4e1c\u897f\u3002"
				},
				92: {
					name: "\u6c34\u6876",
					address: "texture/item/m164_bucket1_pop",
					desc: "\u5851\u6599\u5236\u3002\u628a\u5b83\u5012\u8fc7\u6765\u7528\u68d2\u5b50\u6572\u51fb\u5e95\u90e8\uff0c\u4f1a\u53d1\u51fa\u50cf\u94dc\u9523\u4e00\u6837\u7684\u58f0\u97f3\u54e6\u3002"
				},
				93: {
					address: "texture/item/m165_bucket2_pop",
					desc: ""
				},
				96: {
					address: "texture/item/m169_tabaco_pop",
					desc: ""
				},
				97: {
					name: "\u9524\u5b50",
					address: "texture/item/m215_hummer_pop",
					desc: "\u91cd\u8981\u7684\u662f\u6839\u636e\u6572\u51fb\u5bf9\u8c61\u7269\u4f53\u7684\u4e0d\u540c\uff0c\u4f7f\u7528\u7684\u5934\u90e8\u6750\u6599\u53ef\u5206\u4e3a\u5851\u6599\u3001\u5c3c\u9f99\u3001\u6a61\u80f6\u7b49\u3002"
				},
				99: {
					name: "\u57ab\u5b50",
					address: "texture/item/m176_cushion_pop",
					desc: "\u53ef\u4ee5\u4f5c\u4e3a\u57ab\u5b50\uff0c\u53ef\u4ee5\u6298\u53e0\u8d77\u6765\u5f53\u4f5c\u6795\u5934\uff0c\u633a\u6709\u7528\u7684\u5462\u3002"
				},
				101: {
					name: "\u4ee4\u4eba\u75f4\u7b11\u7684\u672c\u5b50",
					address: "texture/item/m177_book_pop",
					desc: "\u6bd4\u5982\u5728\u4fbf\u5229\u5e97\u91cc\u8981\u4e0a\u5395\u6240\u4e4b\u7c7b\u7684\u65f6\u5019\uff0c\u4f1a\u4e0b\u610f\u8bc6\u5730\u7784\u4e0a\u4e00\u773c\u5427\u3002"
				},
				102: {
					name: "\u9999\u8549",
					address: "texture/item/m178_banana_pop",
					desc: "\u5df2\u7ecf\u719f\u900f\u63a5\u8fd1\u8981\u5f00\u59cb\u8150\u70c2\u7684\u9999\u8549\u3002"
				},
				105: {
					address: "texture/item/m189_flower3_pop",
					desc: ""
				},
				106: {
					address: "texture/item/m186_vase1_pop",
					desc: ""
				},
				108: {
					address: "texture/charactor/m216_bee",
					desc: ""
				},
				109: {
					address: "texture/item/m193_rocket3_pop",
					desc: ""
				},
				110: {
					address: "texture/item/m192_rocket2_pop",
					desc: ""
				},
				111: {
					address: "texture/item/m194_rocket4_pop",
					desc: ""
				},
				112: {
					address: "texture/item/m195_rocket5_pop",
					desc: ""
				},
				113: {
					name: "\u706b\u7bad",
					address: "texture/item/m191_rocket1_pop",
					desc: "\u5728\u53d8\u6210\u592a\u7a7a\u5783\u573e\u524d\u7684\u6a21\u6837\u3002"
				},
				114: {
					address: "texture/item/m196_spacesuit_pop",
					desc: ""
				},
				116: {
					address: "texture/item/m203_driver_pop"
				}
			}, e.panelEnum = cc.Enum({
				propGetPanel: 1,
				propsPanel: 2,
				gamePassPanel: 3,
				gameOverPanel: 4,
				workOverTimePanel: 5,
				menuPanel: 6,
				loadingPanel: 7,
				menuBtn: 8,
				hintBtn: 9,
				hintPanel: 10,
				screenRec: 11,
				mainPanel: 100,
				logoPanel: 101,
				selectPanel: 102,
				itemLibraryPanel: 103,
				itemLibraryDescPanel: 104,
				howToPanel: 105,
				maskPanel: 106
			}), e.panel = {
				1: "prefab/props/propGetPanel",
				2: "prefab/props/propsPanel",
				3: "prefab/settle/gameClearPanel",
				4: "prefab/settle/gameOverPanel",
				5: "prefab/settle/workOverTimePanel",
				6: "prefab/menu/menuPanel",
				7: "prefab/loadPanel",
				8: "prefab/menu/menuBtn",
				9: "prefab/hint/hintBtn",
				10: "prefab/hint/hintPanel",
				11: "prefab/screenRec/screenRec",
				100: "prefab/main",
				101: "prefab/loading",
				102: "prefab/select/select",
				103: "prefab/itemLibrary/library",
				104: "prefab/itemLibrary/libraryItemDescPanel",
				105: "prefab/howTo/howToPanel",
				106: "prefab/maskPanel"
			}, e.sdk = {
				wx: {
					adUnitId: "adunit-d1ee04ec34a55164",
					videoAdunitId: "adunit-fb73727f993fbdee",
					interstitialAdId: "adunit-bbf81f714c0fbde8",
					shareAppId: ["wx7ed14af479ae73ca", "wx5e2827c5f70d86da", "wx91c1654e285a59c5", "wxc1b5d81e4dad1efe"],
					share: {
						titles: ["\u52a0\u73ed\u52a0\u51fa\u5e7b\u89c9\uff0c\u70b9\u51fb\u6551\u6211\uff01"],
						imageUrl: ["https://wecres.oss-cn-hangzhou.aliyuncs.com/102/share.jpg"]
					}
				},
				tt: {
					banner: {
						posIds: ["bel5398kl3cb15bb31", "103df8k841jb22ja52"]
					},
					videoAd: {
						posIds: ["d6lpr172427747i9m1", "5cjnj0p8u1h7ggc456", "e8gekmifr4r44g1ki3"]
					},
					share: {
						titles: ["\u52a0\u73ed\u52a0\u51fa\u5e7b\u89c9\uff0c\u70b9\u51fb\u6551\u6211\uff01"],
						imageUrl: ["http://a2.qpic.cn/psb?/V11joS021bU9fs/tGqcVhg8vsIS57blJPwv4gmewRXnWMiKAhy3dYnVHEk!/b/dMUAAAAAAAAA&ek=1&kp=1&pt=0&bo=9AGaAfQBmgERADc!&tl=3&vuin=2062501749&tm=1565586000&sce=60-2-2&rf=viewer_311"]
					}
				}
			}, e.hint = {
				dictionary: {
					1: ["Hãy tìm chìa khóa bị giấu!", "Có thể mở được tủ ở cửa", "Hãy thử mở cửa bằng chìa khóa được giấu trong ngăn kéo!"],
					2: ["Hãy cố gắng dọn dẹp các tập tin.", "Sẽ có điều bất ngờ sau khi dọn dẹp tất cả các tập tin", "Sau khi dọn dẹp tất cả các tập tin, một công tắc sẽ xuất hiện, hãy nhấp vào đó và thử!"],
					3: ["Có đạo cụ nhiệm vụ trong tủ", "Có vẻ như ông chủ thích chơi gôn ....", "Đặt câu lạc bộ golf bên cạnh ông chủ, di chuyển một lần và trốn thoát!"],
					4: ["Muốn lấy chìa khóa, xin sếp khỏi bàn", "Đưa cái cạp cho nhân viên!", "Bật công tắc quạt điện lấy chìa khóa"],
					5: ["Quạt điện này dường như có thể di chuyển.", "Điều khiển từ xa là một điều tốt", "Sau khi sử dụng điều khiển từ xa để khởi động quạt điện, hãy trốn thoát trong khi ông chủ rời đi!"],
					6: ["Có vẻ như tài liệu đã bị lấy đi", "Hãy thử đưa tài liệu cho con dê xem.", "Hãy để nó ăn 2 tài liệu rồi di chuyển, chìa khóa sẽ bị lẫn trong phân và bài tiết."],
					7: ["100 nhân dân tệ trong tủ dường như có thể làm được điều gì đó", "Trả 100 yên và bạn có thể chơi trò chơi bắn súng, hãy thử bắn nhiều thứ khác nhau!", "Nhân viên bình thường bên phải cũng có thể bắn!"],
					8: ["Thức ăn cho mèo là thứ tốt, bàn chải cũng là thứ tốt", "Thử cho mồi vào bát xem", "Thoát khỏi!"],
					9: ["Bộ tóc giả nhìn như dùng được vào việc gì đó...", "Đắp bộ tóc giả lên hình nộm xem nào!", "Đội vào chờ chút, sếp có thể bị choáng và đánh rơi chìa khóa"],
					10: ["Hãy thử chặt tre bằng rìu.","Có thể lấy ra vật phẩm từ cây tre thứ ba",  "Sau khi gửi Taketori Hime trở lại mặt trăng qua cửa sổ, chúng ta hãy quay lại chỗ tre và nhìn xem!"],
					11: ["Tách trà của bà đã cạn", "Hãy cố gắng cho bà thêm trà.", "Đặt bánh bao làm quà cảm ơn lên bàn ăn và di chuyển xung quanh"],
					12: ["Thật muốn tìm cách tưới hoa...", "Cho lão đại uống bia, sau này có thể lấy nước!", "Tưới hoa lấy nước lấy chìa khóa"],
					13: ["Móc mohawk ngầu quá, hợp với ai?", "Móc mohawk này có vẻ rất hợp với dân chơi chữ.", "Thử để mohawk cho dân chơi chữ đi!"],
					14: ["Lấy khăn lau đèn dầu xem nào!", "Lau đèn đặc biệt để có điều bất ngờ đặc biệt", "Lau đèn dầu ở giữa sẽ có yêu tinh chui ra, để nó lấy chăn mà xem !"],
					15: ["Lưới chống côn trùng có thể bắt được một số côn trùng", "Có một con nhện bị lật ở góc phòng", "Hãy giúp con nhện trở về hang ổ của nó."],
					16: ["Hai người đó đã đứng rất lâu và họ nên muốn nghỉ ngơi", "Quả cam và điều khiển từ xa nên được đặt đúng chỗ", "Đưa cho họ một quả cam và TV, sau đó tận dụng thời gian nghỉ ngơi của họ Thoát qua khoảng trống!"],
					17: ["Hãy nghĩ cách để thoát khỏi con quái vật đó...", "Cặp kính dường như là công cụ biến hình của ai đó", "Đưa kính cho người đang trốn, và để anh ta chiến đấu với quái vật!"],
					18: ["Sếp đang ngủ....Click để xem!", "Nếu để sếp ngồi trên ghế đúng phòng thì chuyện gì sẽ xảy ra...!", "Lắp kính thử cho sếp xem"],
					19: ["Hình như có thứ gì đó trong hồ bơi.......", "Máy bơm nước có thể hút cạn nước trong hồ bơi", "Sau khi bắt rùa bằng lưới, hãy đặt nó vào bồn rửa!"],
					20: ["Hãy thử cho cá voi nhiều thứ khác nhau.", "Hãy thử cho cá voi một khúc xương cá", "Hãy thử câu cá trong bể bằng cần câu, rồi đưa nó cho cá voi."],
					21: ["Đặt bản ghi thu được lên bàn xoay và xem.", "Có tổng cộng bốn bản ghi để thu thập", "Hãy ghép màu của D và J và đặt bản ghi."],
					22: ["Bọn tiểu tử trước cửa, ngươi có thể nghĩ biện pháp để bọn chúng rút lui...", "Đưa cần câu cho ai thì tốt hơn?", "Đưa cần câu cho tiểu tử, còn cái gì nữa? sẽ xảy ra!"],
					23: ["Nhân viên nữ trông lạnh lùng và muốn uống nước nóng", "Người đàn ông giàu có trông muốn uống nước đá!", "Đưa đồ uống ấm cho nhân viên của sếp nữ, và họ sẽ giảm 100 yên!"],
					24: ["Hãy thử bấm chuông để bảo các ông chủ rời khỏi phòng", "Thử cắt dây trói chó bằng kéo", "Dùng dây để thoát khỏi cửa sổ!"],
					25: ["Đặt người tuyết trước bếp để lấy một cái xô, bạn có thể dùng nó để lấy nước!", "Tắt lửa bếp và ông già Noel sẽ xuất hiện", "Ông già Noel sẽ bỏ quà vào tất giường ôi!"],
					26: ["Trông ông chủ muốn hút thuốc.", "Đưa điếu thuốc cho ông chủ, và ông chủ sẽ hút thuốc.", "Chỉ cần trốn trong hộp các tông mở và xem chương trình"],
					27: ["Bạn cần đặt 5 chiếc đệm dưới quyền của ông chủ", "Đưa truyện tranh cho xã hội đen để lấy hai chiếc đệm", "Đưa chuối cho nhân viên bình thường và bạn có thể nhận được những chiếc đệm ẩn!"],
					28: ["Sau khi đổi màu đèn, hãy nhấn nút để phản hồi tương ứng.", "Màu của cà vạt liên quan đến màu của đèn", "Hãy để màu của cà vạt tương ứng với màu của đèn dầu! Màu xanh và màu vàng từ bên trái, màu đỏ!"],
					29: ["Hãy dẫn đàn ong đến chỗ ông chủ và để ông ấy đi chỗ khác!", "Đặt bình hoa và hoa trên cột ở cửa để thu hút đàn ong", "Sau khi ông chủ rời đi, hãy dùng lưới bắt bọ và trốn thoát!"],
					30: ["Thu thập các bộ phận và lắp ráp tên lửa!", "Đặt tên lửa đã hoàn thành lên bệ phóng", "Sử dụng bộ đồ phi hành gia để trốn thoát"],
					31: ["Cảm giác như có một chiếc chìa khóa được giấu ở đâu đó vậy.", "Đáy chậu hoa hơi lạ!"],
					32: ["Hãy tìm cách khiến các thành viên trẻ và có năng lực phải từ chức.", "Dùng tuốc nơ vít để mở tổng đài và kéo công tắc xuống!"]
				}
			}, e
		}();
		a.default = o, cc._RF.pop()
	}, {}],
	dango: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "fc983/qRdBK1bMIPC7MOWpj", "dango"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../../common/Log"),
			i = e("../../config"),
			c = e("../../stage/GameData"),
			r = cc._decorator,
			l = r.ccclass,
			s = (r.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(e, t) {
					var a = e.tag;
					switch (n.default.info("\u78b0\u649e:", i.default.propsEnum[a]), a) {
						case i.default.propsEnum.chabu:
							c.default.xSet("delProp", this.index), c.default.xSet("chabu", 1), c.default.xSet("chabuChange", 1, !1)
					}
				}, t = __decorate([l], t)
			}(o.default));
		a.default = s, cc._RF.pop()
	}, {
		"../../../common/Log": "Log",
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	djstand: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "40b719JqkFNm6ZuQ39gDYrD", "djstand"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../stage/GameData"),
			n = e("./Item"),
			i = e("../../HallData"),
			c = cc._decorator,
			r = c.ccclass,
			l = c.property,
			s = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.a1 = null, t.a2 = null, t
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					o.default.xBind("djstandChange", this.stateChange.bind(this), "zcbgs2_djstand")
				}, t.prototype.stateChange = function(t, a) {
					return e.prototype.stateChange.call(this, t, a), 1 == t ? (o.default.xSet("forbidControl"), this.a1.play("21_a12"), this.a1.on("finished", function() {
						i.default.xSet("gameOverPanel", 1), o.default.xSet("recoverControl")
					})) : 2 == t && (o.default.xSet("forbidControl"), this.a2.play("21_a11"), this.a2.on("finished", function() {
						o.default.xSet("a11Fin"), o.default.xSet("recoverControl")
					})), null
				}, __decorate([l({
					type: cc.Animation,
					displayName: "a1"
				})], t.prototype, "a1", void 0), __decorate([l({
					type: cc.Animation,
					displayName: "a2"
				})], t.prototype, "a2", void 0), t = __decorate([r], t)
			}(n.default);
		a.default = s, cc._RF.pop()
	}, {
		"../../HallData": "HallData",
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	dog: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "072dbTzULRGpKScmnxNlcPX", "dog"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = e("../../HallData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("dogChange", this.stateChange.bind(this), "zcbgs2_dog")
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("dogChange", 1)
				}, t.prototype.stateChange = function(t, a) {
					var o = this;
					return e.prototype.stateChange.call(this, t, a), 1 == t && this.anim1 && (this.anim1.play("24_dog"), n.default.xSet("forbidControl"), this.anim1.on("finished", function() {
						o.scheduleOnce(function() {
							i.default.xSet("gameOverPanel", 4)
						}, 1)
					})), null
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../HallData": "HallData",
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	door: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "0b70bd2xjJAeZpp7Q6eDVaZ", "door"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../stage/GameData"),
			n = e("./Item"),
			i = e("../../HallData"),
			c = e("../../../common/Log"),
			r = cc._decorator,
			l = r.ccclass,
			s = r.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.anim7 = null, t
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					o.default.xBind("doorChange", this.stateChange.bind(this), "zcbgs_door")
				}, t.prototype.onTouch0 = function() {
					o.default.xSet("doorHandle", 0)
				}, t.prototype.onTouch1 = function() {
					o.default.xSet("doorHandle", 1)
				}, t.prototype.onTouch3 = function() {
					o.default.xSet("doorHandle", 3)
				}, t.prototype.onTouch4 = function() {
					i.default.xSet("gamePassPanel", 6)
				}, t.prototype.stateChange = function(t, a) {
					return e.prototype.stateChange.call(this, t, a), 7 == t && (o.default.xSet("forbidControl"), this.anim7.play("31_door7"), this.anim7.on("finished", function() {
						c.default.info("go 1"), i.default.xSet("maskPanel")
					})), null
				}, __decorate([s({
					type: cc.Animation,
					displayName: "anim7"
				})], t.prototype, "anim7", void 0), t = __decorate([l], t)
			}(n.default);
		a.default = u, cc._RF.pop()
	}, {
		"../../../common/Log": "Log",
		"../../HallData": "HallData",
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	drawer: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "4393ahyhXFLBJe/mwH8LxNT", "drawer"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../stage/GameData"),
			n = e("./Item"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					o.default.xBind("drawerChange", this.stateChange.bind(this), "zcbgs2_drawer")
				}, t.prototype.onTouch00 = function() {
					o.default.xSet("drawerChange", 1)
				}, t.prototype.onTouch01 = function() {
					o.default.xSet("drawerChange", 2)
				}, t.prototype.onTouch02 = function() {
					o.default.xSet("drawerChange", 3)
				}, t.prototype.onTouch1 = function() {
					o.default.xSet("drawerChange", 0)
				}, t.prototype.onTouch2 = function() {
					o.default.xSet("drawerChange", 0)
				}, t.prototype.onTouch3 = function() {
					o.default.xSet("drawerChange", 0)
				}, t = __decorate([c], t)
			}(n.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	driver: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "23bc6aH3L1C8qKztZdD/7f8", "driver"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.breaker:
							i.default.xSet("delProp", this.index), i.default.xSet("breakerChange", 1)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	eCode: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "2e193cb4c1J2oFPyVCiJQMe", "eCode"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = function() {
			function e() {}
			return e.Ok = 200, e.Error = 400, e.NotFound = 404, e.BadJson = 405, e.TimeOut = 1e4, e
		}();
		a.default = o, cc._RF.pop()
	}, {}],
	fan: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "823dac/StNF/5iNFmU71S0+", "fan"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../stage/GameData"),
			n = e("./Item"),
			i = e("../../../common/Audio"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.voiceID = -1, t
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					o.default.xBind("fanChange", this.stateChange.bind(this), "zcbgs2_fan")
				}, t.prototype.stateChange = function(t, a) {
					return __awaiter(this, void 0, void 0, function() {
						var o;
						return __generator(this, function(n) {
							switch (n.label) {
								case 0:
									return 1 != t ? [3, 2] : (o = this, [4, i.default.playSFX("audios/stage/s_bigfan", !0)]);
								case 1:
									return o.voiceID = n.sent(), [3, 3];
								case 2:
									i.default.stopSFX(this.voiceID), n.label = 3;
								case 3:
									return e.prototype.stateChange.call(this, t, a), [2, null]
							}
						})
					})
				}, t.prototype.onDisable = function() {
					-1 != this.voiceID && i.default.stopSFX(this.voiceID)
				}, t = __decorate([r], t)
			}(n.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../../common/Audio": "Audio",
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	feed: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "e4b7egrSI9CzLff8xMgDSEI", "feed"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../../common/Log"),
			i = e("../../config"),
			c = e("../../stage/GameData"),
			r = cc._decorator,
			l = r.ccclass,
			s = (r.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(e, t) {
					var a = e.tag;
					switch (n.default.info("\u78b0\u649e:", i.default.propsEnum[a]), a) {
						case i.default.propsEnum.bowl:
							c.default.xSet("delProp", this.index), c.default.xSet("bowlChange", 2)
					}
				}, t = __decorate([l], t)
			}(o.default));
		a.default = s, cc._RF.pop()
	}, {
		"../../../common/Log": "Log",
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	femaleBoss: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "c69bdhrsAJElpQdS0Qj6ElI", "femaleBoss"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = e("../../HallData"),
			c = e("../../../common/Audio"),
			r = cc._decorator,
			l = r.ccclass,
			s = (r.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("femaleBossChange", this.stateChange.bind(this), "zcbgs2_femaleBoss")
				}, t.prototype.stateChange = function(t, a) {
					return e.prototype.stateChange.call(this, t, a), 1 == t && (c.default.playSFX("audios/s_exclam"), this.scheduleOnce(function() {
						i.default.xSet("gameOverPanel", 2)
					}, .5)), null
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("femaleBossChange", 1)
				}, t.prototype.onTouch2 = function() {
					n.default.xSet("femaleBossChange", 1)
				}, t = __decorate([l], t)
			}(o.default));
		a.default = s, cc._RF.pop()
	}, {
		"../../../common/Audio": "Audio",
		"../../HallData": "HallData",
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	fireplace: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "fa643E9q9tErLzjHnR42X/+", "fireplace"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = e("../../HallData"),
			c = cc._decorator,
			r = c.ccclass,
			l = c.property,
			s = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.anim3 = null, t
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("fireplaceChange", this.stateChange.bind(this), "zcbgs2_fireplace")
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("fireplaceChange", 3)
				}, t.prototype.stateChange = function(t, a) {
					return e.prototype.stateChange.call(this, t, a), n.default.xSet("forbidControl"), 1 == t ? this.anim1 && (this.anim1.play("25_snowmanD"), this.anim1.on("finished", function() {
						n.default.xSet("bucket", !0), n.default.xSet("recoverControl")
					})) : 2 == t ? (this.anim2.play("25_santaOn"), this.anim2.on("finished", function() {
						n.default.xSet("santan", !0), n.default.xSet("recoverControl")
					})) : 3 == t && (this.anim3.play("25_fireplace3"), this.anim3.on("finished", function() {
						i.default.xSet("gameOverPanel", 14)
					})), null
				}, __decorate([l({
					type: cc.Animation,
					displayName: "anim3"
				})], t.prototype, "anim3", void 0), t = __decorate([r], t)
			}(o.default);
		a.default = s, cc._RF.pop()
	}, {
		"../../HallData": "HallData",
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	fishing: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "3ef5e9kw+5MKY5kdb7Dw4mF", "fishing"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../HallData"),
			c = e("../../stage/GameData"),
			r = cc._decorator,
			l = r.ccclass,
			s = (r.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.snapp:
							c.default.xSet("delProp", this.index), c.default.xSet("snapp", !1), i.default.xSet("propGetPanel", n.default.propsEnum.snapp);
							break;
						case n.default.propsEnum.tree:
							c.default.xSet("delProp", this.index), c.default.xSet("treeChange", 3);
							break;
						case n.default.propsEnum.bee:
							c.default.xSet("delProp", this.index), c.default.xSet("standChange", 3)
					}
				}, t = __decorate([l], t)
			}(o.default));
		a.default = s, cc._RF.pop()
	}, {
		"../../HallData": "HallData",
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	fish: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "be0778+UrdDya8rLEPi/1wD", "fish"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../props/Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.whale:
							i.default.xSet("delProp", this.index), i.default.xSet("whaleChange", 4)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"../props/Prop": "Prop"
	}],
	flower1: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "758960/Uo5Nk7BH1cjd8Ekg", "flower1"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.stand:
							if (1 != i.default.xGet("standChange")) return;
							i.default.xSet("delProp", this.index), i.default.xSet("standChange", 2)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	flower: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "3d286D8NsVBbJtJwaX5Y5CS", "flower"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("flowerChange", this.stateChange.bind(this), "zcbgs2_flower")
				}, t.prototype.stateChange = function(t, a) {
					return e.prototype.stateChange.call(this, t, a), 1 == t && this.scheduleOnce(function() {
						n.default.xSet("flowerChange", 2)
					}, .5), null
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	freezer1: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "058c39qg8RIcI1U8tezAnIq", "freezer1"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("freezer1Change", this.stateChange.bind(this), "zcbgs2_freezer1")
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("freezer1Change", 1)
				}, t.prototype.onTouch1 = function() {
					n.default.xSet("freezer1Change", 0)
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	freezer2: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "369a6RpwiRDGa5oFLfoz6Sd", "freezer2"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("freezer2Change", this.stateChange.bind(this), "zcbgs2_freezer2")
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("freezer2Change", 1)
				}, t.prototype.onTouch1 = function() {
					n.default.xSet("freezer2Change", 0)
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	gameClearPanel: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "959f8L+A2BGBqMwNBwLP3Us", "gameClearPanel"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../../common/Utils"),
			n = e("../../../common/component/XToggle"),
			i = e("../../../common/Audio"),
			c = e("../../HallData"),
			r = e("../../config"),
			l = cc._decorator,
			s = l.ccclass,
			u = l.property,
			d = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.clearPic = null, t.loadPanel = null, t.btnLabel = null, t.btnSpr = null, t.btnSprArr = [], t.btn = null, t.hintPanel = null, t.next = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					var e = this;
					this.scheduleOnce(function() {
						e.next.active = !0
					}, 2), c.default.xSet("stageStateChange", {
						index: c.default.xGet("curStage") - 1,
						state: 2
					}), 2 != c.default.xGet("stageState")[c.default.xGet("curStage")] && c.default.xSet("stageStateChange", {
						index: c.default.xGet("curStage"),
						state: 1
					}), this.btn.isChecked = !1, this.toToggleClick(), this._gvScoreHandled || (this._gvScoreHandled = !0, window.ArcadeTool && window.ArcadeTool.onLevelComplete(c.default.xGet("curStage")))
				}, t.prototype.onDestroy = function() {}, t.prototype.toToggleClick = function() {
					this.btn.isChecked ? (this.btnLabel.string = "Chạm vật phẩm để sử dụng", this.btnSpr.spriteFrame = this.btnSprArr[0]) : (this.btnLabel.string = "Chia sẻ", this.btnSpr.spriteFrame = this.btnSprArr[1])
				}, t.prototype.toMain = function() {
					this.node.destroy(), c.default.xSet("loadScene", r.default.panelEnum.mainPanel)
				}, t.prototype.init = function(e) {
					return __awaiter(this, void 0, void 0, function() {
						var t;
						return __generator(this, function(a) {
							switch (a.label) {
								case 0:
									return [4, o.default.loadImage("texture/clear/CL" + e)];
								case 1:
									return (t = a.sent()) && (this.clearPic.getComponent(cc.Sprite).spriteFrame = t), i.default.playSFX("audios/stage/s_cl_" + e), [2]
							}
						})
					})
				}, t.prototype.onNextClick = function() {
					this.node.destroy(), c.default.xGet("curStage") + 1 >= 33 ? c.default.xSet("loadScene", r.default.panelEnum.mainPanel) : c.default.xSet("loadStage", c.default.xGet("curStage") + 1)
				}, t.prototype.onBtnClick = function() {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(e) {
							//return window.h5api.share(), [2]
							console.log("2222",e);
						})
					})
				}, __decorate([u({
					type: cc.Sprite,
					displayName: "\u6210\u529f\u56fe\u7247"
				})], t.prototype, "clearPic", void 0), __decorate([u({
					type: cc.Prefab,
					displayName: "\u8fc7\u573a\u52a8\u753b"
				})], t.prototype, "loadPanel", void 0), __decorate([u({
					type: cc.Label,
					displayName: "\u6309\u94ae\u6587\u5b57"
				})], t.prototype, "btnLabel", void 0), __decorate([u({
					type: cc.Sprite,
					displayName: "\u6309\u94ae\u56fe\u7247"
				})], t.prototype, "btnSpr", void 0), __decorate([u({
					type: cc.SpriteFrame,
					displayName: "\u56fe\u7247\u96c6"
				})], t.prototype, "btnSprArr", void 0), __decorate([u({
					type: n.default,
					displayName: "\u52fe\u9009\u6846"
				})], t.prototype, "btn", void 0), __decorate([u({
					type: cc.Prefab,
					displayName: "\u63d0\u793a\u9762\u677f"
				})], t.prototype, "hintPanel", void 0), __decorate([u({
					type: cc.Node,
					displayName: "\u4e0b\u4e00\u5173"
				})], t.prototype, "next", void 0), t = __decorate([s], t)
			}(cc.Component);
		a.default = d, cc._RF.pop()
	}, {
		"../../../common/Audio": "Audio",
		"../../../common/Utils": "Utils",
		"../../../common/component/XToggle": "XToggle",
		"../../HallData": "HallData",
		"../../config": "config"
	}],
	gameOverPanel: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "78b06S6b3NK/6lVXeriUcyl", "gameOverPanel"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../../common/Utils"),
			n = e("../../../common/Audio"),
			i = e("../../HallData"),
			c = e("../../config"),
			r = e("../../../common/component/XToggle"),
			l = (e("../../../common/sdk/SDK"), e("../../component/ActionAnim")),
			s = e("../../../common/Log"),
			u = e("../../GamSys"),
			d = e("../../Game"),
			p = cc._decorator,
			f = p.ccclass,
			h = p.property,
			m = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.overPic = null, t.btnLabel = null, t.btnSpr = null, t.btnSprArr = [], t.btn = null, t.hintPanel = null, t.reTry = null, t.tipNode = null, t.curPicId = 1, t.clickRetry = 0, t.isVoice = !1, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					var e = this;
					this.scheduleOnce(function() {
						e.reTry.active = !0
					}, 2), this.btn.isChecked = !0, this.toToggleClick(), u.default.videoTime <= 0 && (this.tipNode.active = !1)
				}, t.prototype.onEnable = function() {
					d.default.xBind("changeVideoProps", this.onChange.bind(this), "zcbgs2_gameOverPanel")
				}, t.prototype.onDestroy = function() {
					d.default.xUnbind("zcbgs2_gameOverPanel")
				}, t.prototype.onChange = function(e) {
					this.tipNode.active = e
				}, t.prototype.toToggleClick = function() {
					this.btn.isChecked ? (this.btnLabel.string = "Chạm vật phẩm để sử dụng", this.btnSpr.spriteFrame = this.btnSprArr[0]) : (this.btnLabel.string = "Hỏi bạn bè", this.btnSpr.spriteFrame = this.btnSprArr[1])
				}, t.prototype.onTouchBtn = function() {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(e) {
							return i.default.xSet("hintPanel"), [2]
						})
					})
				}, t.prototype.toStart = function() {
					this.node.destroy(), i.default.xSet("loadScene", c.default.panelEnum.mainPanel)
				}, t.prototype.init = function(e) {
					return __awaiter(this, void 0, void 0, function() {
						var t;
						return __generator(this, function(a) {
							switch (a.label) {
								case 0:
									return [4, o.default.loadImage("texture/clear/GO" + e)];
								case 1:
									return (t = a.sent()) && (this.overPic.getComponent(cc.Sprite).spriteFrame = t), 2 == e ? (n.default.playSFX("audios/stage/s_go_1"), [2]) : (n.default.playSFX("audios/stage/s_go_" + e), [2])
							}
						})
					})
				}, t.prototype.onRetryClick = function() {
					return __awaiter(this, void 0, void 0, function() {
						var e, t, a, o, c = this;
						return __generator(this, function(r) {
							for (e = i.default.xGet("hintState"), t = 1, a = 0; a < e[i.default.xGet("curStage")].length - 1 && 1 == e[i.default.xGet("curStage")][a]; a++) t++;
							return o = i.default.xGet("reTryFour")[i.default.xGet("curStage")], o++, s.default.info("Bấm " + o + " lần để thử lại"), 5 == o ? (i.default.xSet("reTryFourChange", {
								index: i.default.xGet("curStage"),
								state: 0
							}), u.default.reduceVideoTime(), window.h5api.playAd(function(a) {
								1e4 === a.code ? (n.default.xGet("bgmVolume") >= .1 ? c.isVoice = !0 : c.isVoice = !1, n.default.slientBgm(), n.default.slientSFX(), n.default.stopAll()) : 10001 === a.code ? (c.isVoice && (n.default.recoverSFX(), n.default.recoverBGM(), n.default.playBGM("audios/bgm/BGM_take2_192bit")), t != e[i.default.xGet("curStage")].length ? (i.default.xSet("hintStateChange", {
									stage: i.default.xGet("curStage"),
									index: t - 1,
									state: 1
								}), i.default.xSet("destoryHintPanel"), c.scheduleOnce(function() {
									i.default.xSet("hintPanel")
								}, .2), l.default.popTop("Mở khóa gợi ý mới~")) : (i.default.xSet("hintStateChange", {
									stage: i.default.xGet("curStage"),
									index: t - 1,
									state: 1
								}), i.default.xSet("destoryHintPanel"), c.scheduleOnce(function() {
									i.default.xSet("hintPanel")
								}, .2), l.default.popTop("Tất cả các gợi ý cho cấp độ này đã được mở khóa~"))) : c.isVoice && (n.default.recoverSFX(), n.default.recoverBGM(), n.default.playBGM("audios/bgm/BGM_take2_192bit"))
								
							})) : (i.default.xSet("reTryFourChange", {
								index: i.default.xGet("curStage"),
								state: o
							}), this.node.destroy(), i.default.xSet("loadStage", i.default.xGet("curStage"))), [2]
							console.log("1111",a.code);
						})
						console.log("2222",a.code);
					})
				}, __decorate([h({
					type: cc.Node,
					displayName: "\u5931\u8d25\u56fe\u7247"
				})], t.prototype, "overPic", void 0), __decorate([h({
					type: cc.Label,
					displayName: "\u6309\u94ae\u6587\u5b57"
				})], t.prototype, "btnLabel", void 0), __decorate([h({
					type: cc.Sprite,
					displayName: "\u6309\u94ae\u56fe\u7247"
				})], t.prototype, "btnSpr", void 0), __decorate([h({
					type: cc.SpriteFrame,
					displayName: "\u56fe\u7247\u96c6"
				})], t.prototype, "btnSprArr", void 0), __decorate([h({
					type: r.default,
					displayName: "\u52fe\u9009\u6846"
				})], t.prototype, "btn", void 0), __decorate([h({
					type: cc.Prefab,
					displayName: "\u63d0\u793a\u9762\u677f"
				})], t.prototype, "hintPanel", void 0), __decorate([h({
					type: cc.Node,
					displayName: "\u91cd\u6765\u6309\u94ae"
				})], t.prototype, "reTry", void 0), __decorate([h({
					type: cc.Node,
					displayName: "Chạm vật phẩm để sử dụng"
				})], t.prototype, "tipNode", void 0), t = __decorate([f], t)
			}(cc.Component);
		a.default = m, cc._RF.pop()
	}, {
		"../../../common/Audio": "Audio",
		"../../../common/Log": "Log",
		"../../../common/Utils": "Utils",
		"../../../common/component/XToggle": "XToggle",
		"../../../common/sdk/SDK": "SDK",
		"../../GamSys": "GamSys",
		"../../Game": "Game",
		"../../HallData": "HallData",
		"../../component/ActionAnim": "ActionAnim",
		"../../config": "config"
	}],
	glasses3d: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "f7ff9nE9vFA8L6uqznTHQ8N", "glasses3d"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.chair1:
							1 == i.default.xGet("chair1Change") && (i.default.xSet("delProp", this.index), i.default.xSet("chair1Change", 2))
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	glasses: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "77880D9VpVKZqtLCaHGc5YX", "glasses"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.superman:
							i.default.xSet("delProp", this.index), i.default.xSet("TNTChange")
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	grandma: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "2ba31qywwBIV68aOT4qBMIn", "grandma"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = e("../../../common/Log"),
			c = e("../../config"),
			r = e("../../HallData"),
			l = cc._decorator,
			s = l.ccclass,
			u = (l.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.teaTime = 0, t.isDrink = !1, t
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("grandmaChange", this.stateChange.bind(this), "zcbgs2_grandma")
				}, t.prototype.stateChange = function(t, a) {
					var o = this;
					return 3 == t && (this.teaTime++, this.scheduleOnce(function() {
						1 == o.teaTime ? n.default.xSet("grandmaChange", 1) : (n.default.xSet("grandmaChange", 2), r.default.xSet("propGetPanel", c.default.propsEnum.dango))
					}, 1)), e.prototype.stateChange.call(this, t, a), null
				}, t.prototype.onCollisionEnter = function(e, t) {
					var a = e.tag;
					switch (i.default.info("\u78b0\u649e:", c.default.propsEnum[a]), a) {
						case c.default.propsEnum.tea:
							0 != n.default.xGet("grandmaChange") && 1 != n.default.xGet("grandmaChange") || n.default.xSet("grandmaChange", 3)
					}
				}, t = __decorate([s], t)
			}(o.default));
		a.default = u, cc._RF.pop()
	}, {
		"../../../common/Log": "Log",
		"../../HallData": "HallData",
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	hairPiece: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "5de8fHRqFxOZbNxnWitI1Sw", "hairPiece"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(e, t) {
					switch (console.log("\u8fdb\u5165\u78b0\u649e"), e.tag) {
						case n.default.propsEnum.mannequin:
							i.default.xSet("delProp", this.index), i.default.xSet("mannequinChange", 1)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	hera: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "0893dT/VGhBH401eY10LqR1", "hera"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = e("../../../common/Audio"),
			r = cc._decorator,
			l = r.ccclass,
			s = (r.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.store:
							c.default.playSFX("audios/s_set"), i.default.xSet("delProp", this.index), i.default.xSet("storeChange", 1)
					}
				}, t = __decorate([l], t)
			}(o.default));
		a.default = s, cc._RF.pop()
	}, {
		"../../../common/Audio": "Audio",
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	hero: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "a2170gtheNPuqDwG15vb5tl", "hero"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.kaijyu:
							i.default.xSet("delProp", this.index), i.default.xSet("a08")
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	hintBtn: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "06cf0jpjclOa4Ex4l07PUXd", "hintBtn"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../HallData"),
			n = (e("../../component/ActionAnim"), e("../../Game")),
			i = e("../../GamSys"),
			c = (e("../../../common/Audio"), cc._decorator),
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.isVoice = !1, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					o.default.xGet("curStage"), i.default.videoTime <= 0 && (this.node.active = !1)
				}, t.prototype.onEnable = function() {
					n.default.xBind("changeVideoProps", this.onChange.bind(this), "zcbgs2_hintBtn")
				}, t.prototype.onDestroy = function() {
					n.default.xUnbind("zcbgs2_hintBtn")
				}, t.prototype.onChange = function(e) {
					this.node.active = e
				}, t.prototype.onTouchHint = function() {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(e) {
							return o.default.xSet("hintPanel"), [2]
						})
					})
				}, t = __decorate([r], t)
			}(cc.Component));
		a.default = l, cc._RF.pop()
	}, {
		"../../../common/Audio": "Audio",
		"../../GamSys": "GamSys",
		"../../Game": "Game",
		"../../HallData": "HallData",
		"../../component/ActionAnim": "ActionAnim"
	}],
	hintLine: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "0dc0bplqIhI2YRNiPCPC0/u", "hintLine"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../HallData"),
			n = e("../../config"),
			i = e("../items/Item"),
			c = e("../../Game"),
			r = e("../../GamSys"),
			l = e("../../../common/Audio"),
			s = cc._decorator,
			u = s.ccclass,
			d = s.property,
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.btnPic = null, t.label = null, t.hintPanel = null, t.isLock = !0, t.hintPanelInstance = null, t.stage = 0, t.index = 0, t.isVoice = !1, t
				}
				return __extends(t, e), t.prototype.init = function(e, t) {
					this.stage = e, this.index = t;
					var a = o.default.xGet("hintState");
					console.log("hintState", a, e, t), a[e][t] ? this.stateChange(1, 0) : this.stateChange(0, 1)
				}, t.prototype.onLoad = function() {
					r.default.videoTime <= 0 && (this.node.active = !1)
				}, t.prototype.onEnable = function() {
					c.default.xBind("changeVideoProps", this.onChange.bind(this), "zcbgs2_hintLine")
				}, t.prototype.onChange = function(e) {
					this.node.active = e
				}, t.prototype.onDestroy = function() {
					c.default.xUnbind("zcbgs2_hintLine")
				}, t.prototype.stateChange = function(t, a) {
					return e.prototype.stateChange.call(this, t, a), this.label.string = 1 == t ? n.default.hint.dictionary[this.stage][this.index] : "", null
				}, t.prototype.onTouchTip = function() {
					return __awaiter(this, void 0, void 0, function() {
						var e = this;
						return __generator(this, function(t) {
							return r.default.reduceVideoTime(), window.h5api.playAd(function(t) {
								1e4 === t.code ? (l.default.xGet("bgmVolume") >= .1 ? e.isVoice = !0 : e.isVoice = !1, l.default.slientBgm(), l.default.slientSFX(), l.default.stopAll()) : 10001 === t.code ? (e.isVoice && (l.default.recoverSFX(), l.default.recoverBGM(), l.default.playBGM("audios/bgm/BGM_take2_192bit")), o.default.xSet("hintStateChange", {
									stage: e.stage,
									index: e.index,
									state: 1
								}), o.default.xSet("destoryHintPanel"), e.scheduleOnce(function() {
									o.default.xSet("hintPanel")
								}, .2)) : e.isVoice && (l.default.recoverSFX(), l.default.recoverBGM(), l.default.playBGM("audios/bgm/BGM_take2_192bit"))
							}), [2]
						})
					})
				}, __decorate([d({
					type: cc.Node,
					displayName: "\u6309\u94ae\u56fe\u7247"
				})], t.prototype, "btnPic", void 0), __decorate([d({
					type: cc.Label,
					displayName: "\u63d0\u793a\u6587\u5b57"
				})], t.prototype, "label", void 0), __decorate([d({
					type: cc.Prefab,
					displayName: "\u63d0\u793a\u9762\u677f"
				})], t.prototype, "hintPanel", void 0), t = __decorate([u], t)
			}(i.default);
		a.default = p, cc._RF.pop()
	}, {
		"../../../common/Audio": "Audio",
		"../../GamSys": "GamSys",
		"../../Game": "Game",
		"../../HallData": "HallData",
		"../../config": "config",
		"../items/Item": "Item"
	}],
	hintPanel: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "c1b0418DEZFCbTKyEr7U12y", "hintPanel"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../component/ActionAnim"),
			n = e("../../HallData"),
			i = cc._decorator,
			c = i.ccclass,
			r = i.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.bg = null, t.hint = null, t.content = null, t.hintPre = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {}, t.prototype.onEnable = function() {
					n.default.xBind("destoryHintPanel", this.onCloseClick.bind(this), "zcbgs2_hintPanel")
				}, t.prototype.onDestroy = function() {}, t.prototype.init = function(e) {
					console.log("\u5f53\u524d\u4e3a\u7b2c" + e + "\u5173");
					for (var t = n.default.xGet("hintState"), a = 1, o = 0; o < t[e].length - 1 && 1 == t[e][o]; o++) a++;
					for (o = 0; o < a; o++) {
						var i = cc.instantiate(this.hintPre);
						this.content.addChild(i), i.getComponent("hintLine").init(e, o)
					}
				}, t.prototype.onCloseClick = function() {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(e) {
							switch (e.label) {
								case 0:
									return n.default.xUnbind("zcbgs2_hintPanel"), o.default.fadeOutAnim(this.bg), [4, o.default.popDownAnim(this.hint)];
								case 1:
									return e.sent(), this.node.destroy(), [2]
							}
						})
					})
				}, __decorate([r({
					type: cc.Node,
					displayName: "\u80cc\u666f"
				})], t.prototype, "bg", void 0), __decorate([r({
					type: cc.Node,
					displayName: "\u63d0\u793a\u6846"
				})], t.prototype, "hint", void 0), __decorate([r({
					type: cc.Node,
					displayName: "\u5185\u5bb9\u533a\u57df"
				})], t.prototype, "content", void 0), __decorate([r({
					type: cc.Prefab,
					displayName: "\u63d0\u793a\u9884\u5236"
				})], t.prototype, "hintPre", void 0), t = __decorate([c], t)
			}(cc.Component);
		a.default = l, cc._RF.pop()
	}, {
		"../../HallData": "HallData",
		"../../component/ActionAnim": "ActionAnim"
	}],
	hiraAnim: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "a540fxHOW9Hi6uTBPLxxdcb", "hiraAnim"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../common/Audio"),
			n = cc._decorator,
			i = n.ccclass,
			c = (n.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.shot = function() {
					o.default.playSFX("audios/stage/s_punch")
				}, t.prototype.down = function() {
					o.default.playSFX("audios/stage/s_dead")
				}, t = __decorate([i], t)
			}(cc.Component));
		a.default = c, cc._RF.pop()
	}, {
		"../../common/Audio": "Audio"
	}],
	hira: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "e604cKS/TpCmLDJTtCT/VLY", "hira"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("hiraChange", this.stateChange.bind(this), "zcbgs2_hira")
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	hummer: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "b6c012k6aNM6pQDbGbm7jm7", "hummer"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.statue:
							i.default.xSet("delProp", this.index), i.default.xSet("statueChange", 1)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	itemLibraryDescPanel: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "56944tZThtA0Jih2VnW4Npn", "itemLibraryDescPanel"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../../common/Utils"),
			n = cc._decorator,
			i = n.ccclass,
			c = n.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.nameL = null, t.pic = null, t.desc = null, t
				}
				return __extends(t, e), t.prototype.init = function(e) {
					return __awaiter(this, void 0, void 0, function() {
						var t;
						return __generator(this, function(a) {
							switch (a.label) {
								case 0:
									return this.nameL.string = e.name, t = this.pic, [4, o.default.loadImage(e.address)];
								case 1:
									return t.spriteFrame = a.sent(), this.desc.string = e.desc, [2]
							}
						})
					})
				}, t.prototype.onClose = function() {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(e) {
							return this.node.removeFromParent(), [2]
						})
					})
				}, __decorate([c({
					type: cc.Label,
					displayName: "\u540d\u79f0"
				})], t.prototype, "nameL", void 0), __decorate([c({
					type: cc.Sprite,
					displayName: "\u56fe\u7247"
				})], t.prototype, "pic", void 0), __decorate([c({
					type: cc.Label,
					displayName: "\u63cf\u8ff0"
				})], t.prototype, "desc", void 0), t = __decorate([i], t)
			}(cc.Component);
		a.default = r, cc._RF.pop()
	}, {
		"../../../common/Utils": "Utils"
	}],
	itemLibraryPage: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "43299yZEztHjLuOnXepw0kC", "itemLibraryPage"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../../common/Caches"),
			n = e("../../HallData"),
			i = e("../../config"),
			c = e("./libraryItem"),
			r = cc._decorator,
			l = r.ccclass,
			s = r.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.libraryItem = null, t.layout = null, t
				}
				return __extends(t, e), t.prototype.init = function(e) {
					for (var t = o.default.get("itemState"), a = 0; a < 10; a++) {
						var n = cc.instantiate(this.libraryItem);
						n.getComponent(c.default).init(a, e, t[10 * e + a]), this.layout.addChild(n)
					}
				}, t.prototype.onTouchHome = function() {
					n.default.xSet("loadScene", i.default.panelEnum.mainPanel)
				}, __decorate([s({
					type: cc.Prefab,
					displayName: "\u5355\u4e2aitem"
				})], t.prototype, "libraryItem", void 0), __decorate([s({
					type: cc.Node,
					displayName: "layout"
				})], t.prototype, "layout", void 0), t = __decorate([l], t)
			}(cc.Component);
		a.default = u, cc._RF.pop()
	}, {
		"../../../common/Caches": "Caches",
		"../../HallData": "HallData",
		"../../config": "config",
		"./libraryItem": "libraryItem"
	}],
	juice1: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "c9e91sZID5L2J9ndfxB6b1q", "juice1"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = e("../../HallData"),
			r = cc._decorator,
			l = r.ccclass,
			s = (r.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.femaleBoss:
							i.default.xSet("delProp", this.index), i.default.xSet("drinkHotTea");
							break;
						case n.default.propsEnum.millionaire:
							i.default.xSet("delProp", this.index), c.default.xSet("gameOverPanel", 13)
					}
				}, t = __decorate([l], t)
			}(o.default));
		a.default = s, cc._RF.pop()
	}, {
		"../../HallData": "HallData",
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	juice2: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "2a4e6Vm+zpJtZIqW7fFTGEy", "juice2"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.kaijyu:
							i.default.xSet("delProp", this.index);
							break;
						case n.default.propsEnum.millionaire:
							i.default.xSet("delProp", this.index), i.default.xSet("millionChange", 1)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	kaguya: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "2a778A0coRIvKlf2l/aWSmG", "kaguya"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../../common/Log"),
			i = e("../../config"),
			c = e("../../stage/GameData"),
			r = cc._decorator,
			l = r.ccclass,
			s = (r.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(e, t) {
					var a = e.tag;
					switch (n.default.info("\u78b0\u649e:", i.default.propsEnum[a]), a) {
						case i.default.propsEnum.window:
							c.default.xSet("delProp", this.index), c.default.xSet("windowChange", 2)
					}
				}, t = __decorate([l], t)
			}(o.default));
		a.default = s, cc._RF.pop()
	}, {
		"../../../common/Log": "Log",
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	kepper: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "238feykCfdBQKybJPhIenZM", "kepper"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("keeperChange", this.stateChange.bind(this), "zcbgs2_kepper"), n.default.xBind("tankChange", this.tankChange.bind(this), "zcbgs2_kepper")
				}, t.prototype.stateChange = function(t, a) {
					return e.prototype.stateChange.call(this, t, a), 1 == t && this.anim1 && this.anim1.play("19_kepper_move"), null
				}, t.prototype.tankChange = function(e) {
					n.default.xSet("keeperChange", 1)
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	key: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "42e94M9TQdI3qLcgzvtdYQ/", "key"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../config"),
			n = e("../../stage/GameData"),
			i = e("./Prop"),
			c = e("../../../common/Audio"),
			r = cc._decorator,
			l = r.ccclass,
			s = (r.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case o.default.propsEnum.door:
							c.default.playSFX("audios/s_door_open"), n.default.xSet("delProp", this.index), n.default.xSet("doorHandle", 2)
					}
				}, t = __decorate([l], t)
			}(i.default));
		a.default = s, cc._RF.pop()
	}, {
		"../../../common/Audio": "Audio",
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	kotatsu: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "44cf0+WwsRMr5mH1xO4sCLO", "kotatsu"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("kotatsuChange", this.stateChange.bind(this), "zcbgs2_kotatsu")
				}, t.prototype.onTouch2 = function() {
					n.default.xSet("totatsuChange", 3), n.default.xSet("gameOverPanel", 1)
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	libraryItem: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "0e397y4letBTJIfutrX1Fm+", "libraryItem"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../items/Item"),
			n = e("../../../common/Utils"),
			i = e("../../HallData"),
			c = cc._decorator,
			r = c.ccclass,
			l = c.property,
			s = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.pop = null, t.index = 0, t
				}
				return __extends(t, e), t.prototype.init = function(e, t, a) {
					this.index = 10 * t + e, 39 != this.index && this.stateChange(a, {
						state: 1
					})
				}, t.prototype.stateChange = function(t, a) {
					return __awaiter(this, void 0, void 0, function() {
						var o;
						return __generator(this, function(i) {
							switch (i.label) {
								case 0:
									return e.prototype.stateChange.call(this, t.state, a.state), 1 != t.state ? [3, 2] : (o = this.pop, [4, n.default.loadImage(t.address)]);
								case 1:
									o.spriteFrame = i.sent(), i.label = 2;
								case 2:
									return [2, null]
							}
						})
					})
				}, t.prototype.onTouch1 = function() {
					i.default.xSet("itemLibraryDescPanel", this.index)
				}, __decorate([l({
					type: cc.Sprite,
					displayName: "\u9053\u5177\u56fe"
				})], t.prototype, "pop", void 0), t = __decorate([r], t)
			}(o.default);
		a.default = s, cc._RF.pop()
	}, {
		"../../../common/Utils": "Utils",
		"../../HallData": "HallData",
		"../items/Item": "Item"
	}],
	library: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "75049mBuxxEy4voywuAlolM", "library"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../config"),
			n = e("./itemLibraryPage"),
			i = cc._decorator,
			c = i.ccclass,
			r = i.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.pageview = null, t.page = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					for (var e = Math.ceil(o.default.propsNum / 10), t = 0; t < e; t++) {
						var a = cc.instantiate(this.page);
						a.position = cc.v2(720 * t, 0), this.pageview.insertPage(a, t), a.getComponent(n.default).init(t)
					}
				}, t.prototype.onDestroy = function() {}, __decorate([r({
					type: cc.PageView,
					displayName: "\u5185\u5bb9`"
				})], t.prototype, "pageview", void 0), __decorate([r({
					type: cc.Prefab,
					displayName: "\u9875"
				})], t.prototype, "page", void 0), t = __decorate([c], t)
			}(cc.Component);
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"./itemLibraryPage": "itemLibraryPage"
	}],
	loadingPanel: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "20687/OXCFK25NqVNF7re4H", "loadingPanel"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../HallData"),
			n = e("../../common/Log"),
			i = cc._decorator,
			c = i.ccclass,
			r = i.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.d1 = null, t.d2 = null, t.d3 = null, t.loadingTime = 1.5, t.onLoadTime = 0, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					var e = this;
					this.onLoadTime = (new Date).getTime(), this.node.runAction(cc.sequence(cc.callFunc(function() {
						e.d1.runAction(cc.sequence(cc.moveBy(.5, cc.v2(0, 50)), cc.moveBy(.5, cc.v2(0, -50))))
					}), cc.delayTime(.25), cc.callFunc(function() {
						e.d2.runAction(cc.sequence(cc.moveBy(.5, cc.v2(0, 50)), cc.moveBy(.5, cc.v2(0, -50))))
					}), cc.delayTime(.25), cc.callFunc(function() {
						e.d3.runAction(cc.sequence(cc.moveBy(.5, cc.v2(0, 50)), cc.moveBy(.5, cc.v2(0, -50))))
					}), cc.delayTime(2)).repeatForever())
				}, t.prototype.onEnable = function() {
					o.default.xBind("delLoadingPanel", this.delLoadingPanel.bind(this), "zcbgs2_loadingPanel")
				}, t.prototype.onDestroy = function() {
					o.default.xUnbind("zcbgs2_loadingPanel")
				}, t.prototype.delLoadingPanel = function() {
					var e = this,
						t = (new Date).getTime() - this.onLoadTime;
					if (n.default.info("ms", t), t > 1e3 * this.loadingTime) this.node.destroy();
					else {
						var a = this.loadingTime - t / 1e3;
						this.scheduleOnce(function() {
							e.node.destroy()
						}, a)
					}
				}, __decorate([r({
					type: cc.Node,
					displayName: "\u70b91"
				})], t.prototype, "d1", void 0), __decorate([r({
					type: cc.Node,
					displayName: "\u70b92"
				})], t.prototype, "d2", void 0), __decorate([r({
					type: cc.Node,
					displayName: "\u70b93"
				})], t.prototype, "d3", void 0), t = __decorate([c], t)
			}(cc.Component);
		a.default = l, cc._RF.pop()
	}, {
		"../../common/Log": "Log",
		"../HallData": "HallData"
	}],
	loading: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "9e06aey35xHvJwiriD7gIx8", "loading"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../config"),
			n = e("../HallData"),
			i = e("../GamSys"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					return __awaiter(this, void 0, void 0, function() {
						var e = this;
						return __generator(this, function(t) {
							return this.node.runAction(cc.sequence(cc.delayTime(2), cc.fadeOut(.5), cc.callFunc(function() {
								return __awaiter(e, void 0, void 0, function() {
									return __generator(this, function(e) {
										return i.default.init(), n.default.xSet("loadScene", o.default.panelEnum.mainPanel), [2]
									})
								})
							}), cc.removeSelf())), [2]
						})
					})
				}, t = __decorate([r], t)
			}(cc.Component));
		a.default = l, cc._RF.pop()
	}, {
		"../GamSys": "GamSys",
		"../HallData": "HallData",
		"../config": "config"
	}],
	locker1: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "0da2bCCV6ZPNK5U8R5hiuk7", "locker1"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../stage/GameData"),
			n = e("./Item"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					o.default.xBind("lockerChange1", this.stateChange.bind(this), "zcbgs2_locker1")
				}, t.prototype.onTouch0 = function() {
					o.default.xSet("lockerChange1", 1)
				}, t.prototype.onTouch1 = function() {
					o.default.xSet("lockerChange1", 0)
				}, t = __decorate([c], t)
			}(n.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	locker2: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "9ff39By8H5H/r7BjwUMrvR7", "locker2"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../stage/GameData"),
			n = e("./Item"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					o.default.xBind("lockerChange2", this.stateChange.bind(this), "zcbgs2_locker2")
				}, t.prototype.onTouch0 = function() {
					o.default.xSet("lockerChange2", 1)
				}, t.prototype.onTouch1 = function() {
					o.default.xSet("lockerChange2", 0)
				}, t = __decorate([c], t)
			}(n.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	locker3: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "9e3248vZJpMcLdiXcD3WiXs", "locker3"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../stage/GameData"),
			n = e("./Item"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					o.default.xBind("lockerChange3", this.stateChange.bind(this), "zcbgs2_locker3")
				}, t.prototype.onTouch0 = function() {
					o.default.xSet("lockerChange3", 1)
				}, t.prototype.onTouch1 = function() {
					o.default.xSet("lockerChange3", 0)
				}, t = __decorate([c], t)
			}(n.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	main: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "1c3630wZvJHD7TV4q9XQAlc", "main"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../config"),
			n = e("../HallData"),
			i = cc._decorator,
			c = i.ccclass,
			r = i.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.select = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {}, t.prototype.onDestroy = function() {}, t.prototype.onTouchStartGame = function() {
					n.default.xSet("loadScene", o.default.panelEnum.selectPanel)
				}, t.prototype.onTouchItems = function() {
					n.default.xSet("loadScene", o.default.panelEnum.itemLibraryPanel)
				}, __decorate([r({
					type: cc.Prefab,
					displayName: "\u9009\u5173\u754c\u9762"
				})], t.prototype, "select", void 0), t = __decorate([c], t)
			}(cc.Component);
		a.default = l, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"../config": "config"
	}],
	majin: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "79785zYITJKwqcxeNyAqUW9", "majin"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.carpet:
							i.default.xSet("delProp", this.index), i.default.xSet("carpetFlyAnim", 1)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	manbook: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "087d4BI8yRHaYzXHIb551Ha", "manbook"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.yankee:
							i.default.xSet("delProp", this.index), i.default.xSet("yankeeChange", 3)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	mannequin: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "9d575U/wQBMR70zEb7k/bTs", "mannequin"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("mannequinChange", this.stateChange.bind(this), "zcbgs2_mannequin")
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	maskPanel: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "f3663pd3OVBiKRoDzCAE1H2", "maskPanel"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../HallData"),
			n = e("../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					this.node.runAction(cc.sequence(cc.fadeIn(4), cc.callFunc(function() {
						n.default.xSet("maskEnd")
					})))
				}, t.prototype.onEnable = function() {
					o.default.xBind("delMask", this.delMask.bind(this), "zcbgs2_maskPanel")
				}, t.prototype.delMask = function() {
					this.node.runAction(cc.sequence(cc.fadeOut(1), cc.removeSelf()))
				}, t = __decorate([c], t)
			}(cc.Component));
		a.default = r, cc._RF.pop()
	}, {
		"../HallData": "HallData",
		"../stage/GameData": "GameData"
	}],
	menuBtn: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "9ca88hfzVxO/6O4ZOtDPLsn", "menuBtn"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			i = o.property,
			c = e("../../HallData"),
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.menuPanel = null, t
				}
				return __extends(t, e), t.prototype.onTouchMenu = function() {
					c.default.xSet("menuPanel")
				}, __decorate([i({
					type: cc.Prefab,
					displayName: "\u83dc\u5355\u9762\u677f"
				})], t.prototype, "menuPanel", void 0), t = __decorate([n], t)
			}(cc.Component);
		a.default = r, cc._RF.pop()
	}, {
		"../../HallData": "HallData"
	}],
	menuPanel: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "c5105e5HJ9GLZfPvehfmK1W", "menuPanel"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../component/ActionAnim"),
			n = e("../../HallData"),
			i = e("../../config"),
			c = e("../../GamSys"),
			r = e("../../Game"),
			l = e("../../../common/Audio"),
			s = cc._decorator,
			u = s.ccclass,
			d = s.property,
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.panel = null, t.bg = null, t.soundButton = null, t.tipNode = null, t.isVoice = !1, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					c.default.videoTime <= 0 && (this.tipNode.active = !1), window.ArcadeTool && window.ArcadeTool.addResetButton(this.panel)
				}, t.prototype.onEnable = function() {
					r.default.xBind("changeVideoProps", this.onChange.bind(this), "zcbgs2_menuPanel")
				}, t.prototype.onChange = function(e) {
					this.tipNode.active = e
				}, t.prototype.onDestroy = function() {
					r.default.xUnbind("zcbgs2_menuPanel")
				}, t.prototype.onMenuClose = function() {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(e) {
							switch (e.label) {
								case 0:
									return o.default.fadeOutAnim(this.bg), [4, o.default.popDownAnim(this.panel)];
								case 1:
									return e.sent(), this.node.destroy(), [2]
							}
						})
					})
				}, t.prototype.onRetryClick = function() {
					this.node.destroy(), n.default.xSet("loadStage", n.default.xGet("curStage"))
				}, t.prototype.onOtherClick = function() {
					this.node.destroy(), n.default.xSet("loadScene", i.default.panelEnum.selectPanel)
				}, t.prototype.onTouchTip = function() {
					return __awaiter(this, void 0, void 0, function() {
						var e, t, a, i = this;
						return __generator(this, function(r) {
							for (e = n.default.xGet("hintState"), t = 1, a = 0; a < e[n.default.xGet("curStage")].length - 1 && 1 == e[n.default.xGet("curStage")][a]; a++) t++;
							return c.default.reduceVideoTime(), window.h5api.playAd(function(a) {
								1e4 === a.code ? (l.default.xGet("bgmVolume") >= .1 ? i.isVoice = !0 : i.isVoice = !1, l.default.slientBgm(), l.default.slientSFX(), l.default.stopAll()) : 10001 === a.code ? (i.isVoice && (l.default.recoverSFX(), l.default.recoverBGM(), l.default.playBGM("audios/bgm/BGM_take2_192bit")), t != e[n.default.xGet("curStage")].length ? (n.default.xSet("hintStateChange", {
									stage: n.default.xGet("curStage"),
									index: t - 1,
									state: 1
								}), n.default.xSet("destoryHintPanel"), i.scheduleOnce(function() {
									n.default.xSet("hintPanel")
								}, .2), o.default.popTop("Mở khóa gợi ý mới~")) : (n.default.xSet("hintStateChange", {
									stage: n.default.xGet("curStage"),
									index: t - 1,
									state: 1
								}), n.default.xSet("destoryHintPanel"), i.scheduleOnce(function() {
									n.default.xSet("hintPanel")
								}, .2), o.default.popTop("Tất cả các gợi ý cho cấp độ này đã được mở khóa~"))) : i.isVoice && (l.default.recoverSFX(), l.default.recoverBGM(), l.default.playBGM("audios/bgm/BGM_take2_192bit"))
							}), [2]
						})
					})
				}, __decorate([d({
					type: cc.Node,
					displayName: "\u5f39\u6846"
				})], t.prototype, "panel", void 0), __decorate([d({
					type: cc.Node,
					displayName: "\u80cc\u666f"
				})], t.prototype, "bg", void 0), __decorate([d({
					type: cc.Node,
					displayName: "\u97f3\u4e50\u6309\u94ae"
				})], t.prototype, "soundButton", void 0), __decorate([d({
					type: cc.Node,
					displayName: "\u63d0\u793a\u6309\u94ae"
				})], t.prototype, "tipNode", void 0), t = __decorate([u], t)
			}(cc.Component);
		a.default = p, cc._RF.pop()
	}, {
		"../../../common/Audio": "Audio",
		"../../GamSys": "GamSys",
		"../../Game": "Game",
		"../../HallData": "HallData",
		"../../component/ActionAnim": "ActionAnim",
		"../../config": "config"
	}],
	menuSoundBtn: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "7242fqPYMFKGJv/e3IsCQww", "menuSoundBtn"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../items/Item"),
			n = e("../../../common/Audio"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("bgmVolume", this.stateChange.bind(this), "zcbgs2_soundBtn"), n.default.xSet("bgmVolume", n.default.xGet("bgmVolume"))
				}, t.prototype.onDestroy = function() {
					n.default.xUnbind("zcbgs2_soundBtn")
				}, t.prototype.stateChange = function(t, a) {
					return console.log("\u5f53\u524d\u97f3\u91cf\u4e3a:", t), 0 == t ? e.prototype.stateChange.call(this, 1, 0) : 1 == t && e.prototype.stateChange.call(this, 0, 1), null
				}, t.prototype.onTouch0 = function() {
					this.stateChange(0, 1), n.default.slientBgm(), n.default.slientSFX(), n.default.stopAll()
				}, t.prototype.onTouch1 = function() {
					this.stateChange(1, 0), n.default.recoverSFX(), n.default.recoverBGM(), n.default.playBGM("audios/bgm/BGM_take2_192bit")
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../../common/Audio": "Audio",
		"../items/Item": "Item"
	}],
	millionaire: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "dbe99n/m/JFArJNDY7xlZMn", "millionaire"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../stage/GameData"),
			n = e("./Item"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					o.default.xBind("millionChange", this.stateChange.bind(this), "zcbgs2_millionaire")
				}, t.prototype.stateChange = function(t, a) {
					return e.prototype.stateChange.call(this, t, a), 1 == t && this.anim1 && (this.anim1.play("23_millionDrink"), o.default.xSet("forbidControl"), this.anim1.on("finished", function() {
						o.default.xSet("key", !0), o.default.xSet("recoverControl")
					})), null
				}, t = __decorate([c], t)
			}(n.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	mohawk: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "27b4e60sz9JMp3sNnccEQzi", "mohawk"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../stage/GameData"),
			i = e("../../config"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case i.default.propsEnum.yankee:
							n.default.xSet("delProp", this.index), n.default.xSet("yankeeChange", 1)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	moreGame: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "4fb7280REtOj7zU2WSx72V2", "moreGame"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			i = (o.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onTouch = function() {
					//window.h5api.showRecommend()
				}, t = __decorate([n], t)
			}(cc.Component));
		a.default = i, cc._RF.pop()
	}, {}],
	nata: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "28b7cmtTiJKQ67bp528sgpd", "nata"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../../common/Log"),
			i = e("../../config"),
			c = e("../../../common/Audio"),
			r = cc._decorator,
			l = r.ccclass,
			s = (r.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(e, t) {
					var a = e.tag;
					switch (n.default.info("\u78b0\u649e:", i.default.propsEnum[a]), a) {
						case i.default.propsEnum.bamboo:
							c.default.playSFX(i.default.props[i.default.propsEnum.nata].useEffect)
					}
				}, t = __decorate([l], t)
			}(o.default));
		a.default = s, cc._RF.pop()
	}, {
		"../../../common/Audio": "Audio",
		"../../../common/Log": "Log",
		"../../config": "config",
		"./Prop": "Prop"
	}],
	neko: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "f1d7cQEwHVBZYkL+n1ZCSr3", "neko"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../../common/Log"),
			i = e("../../config"),
			c = e("../../stage/GameData"),
			r = cc._decorator,
			l = r.ccclass,
			s = (r.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(e, t) {
					var a = e.tag;
					switch (n.default.info("\u78b0\u649e:", i.default.propsEnum[a]), a) {
						case i.default.propsEnum.standBoss:
							c.default.xSet("delProp", this.index), c.default.xSet("standBossChange", 5)
					}
				}, t = __decorate([l], t)
			}(o.default));
		a.default = s, cc._RF.pop()
	}, {
		"../../../common/Log": "Log",
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	netConfig: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "4fc21rVUDBNsrzbC9pmVMaZ", "netConfig"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = function() {
			function e() {}
			return e.onLine = "https://littlegame.tomato123.cn", e
		}();
		a.default = o, cc._RF.pop()
	}, {}],
	net: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "2ee02mA7KBG1IiULKtMi2Eu", "net"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = e("../../HallData"),
			r = cc._decorator,
			l = r.ccclass,
			s = (r.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.spider:
							i.default.xSet("delProp", this.index), i.default.xSet("spider", !0), c.default.xSet("propGetPanel", n.default.propsEnum.spider)
					}
				}, t = __decorate([l], t)
			}(o.default));
		a.default = s, cc._RF.pop()
	}, {
		"../../HallData": "HallData",
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	onion: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "25744JwvvxEuYERKBWC+40M", "onion"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../../common/Log"),
			i = e("../../config"),
			c = e("../../stage/GameData"),
			r = cc._decorator,
			l = r.ccclass,
			s = (r.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(e, t) {
					var a = e.tag;
					switch (n.default.info("\u78b0\u649e:", i.default.propsEnum[a]), a) {
						case i.default.propsEnum.bowl:
							c.default.xSet("delProp", this.index), c.default.xSet("bowlChange", 1)
					}
				}, t = __decorate([l], t)
			}(o.default));
		a.default = s, cc._RF.pop()
	}, {
		"../../../common/Log": "Log",
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	orange: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "8d607dxNo1MZa2hLt5y1sBH", "orange"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.kotatsu:
							i.default.xSet("delProp", this.index), i.default.xSet("kotatsuChange", 1)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	paper11: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "4227dX5ocNNbohBmwtU07fh", "paper11"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(e, t) {
					switch (e.tag) {
						case n.default.propsEnum.shredder:
							i.default.xSet("delProp", this.index), i.default.xSet("madRun");
							break;
						case n.default.propsEnum.goat:
							i.default.xSet("delProp", this.index), i.default.xSet("goatEatPaper")
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	paper1: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "063a4YwrxxPPanpnujB7KTw", "paper1"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("paper1Change", this.stateChange.bind(this), "zcbgs2_paper1")
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("paper1Change", 1)
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	paper22: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "045eaqciFFFoZjuokzZBni+", "paper22"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(e, t) {
					switch (console.log("\u8fdb\u5165\u78b0\u649e"), e.tag) {
						case n.default.propsEnum.shredder:
							i.default.xSet("delProp", this.index), i.default.xSet("madRun");
							break;
						case n.default.propsEnum.goat:
							i.default.xSet("delProp", this.index), i.default.xSet("goatEatPaper")
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	paper2: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "be0c9UAUmdFTLM88dPL+4s9", "paper2"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("paper2Change", this.stateChange.bind(this), "zcbgs2_paper2")
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("paper2Change", 1)
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	paper3: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "652d0/SmmdP8YI6qdvz95YM", "paper3"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("paper3Change", this.stateChange.bind(this), "zcbgs2_paper3")
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("paper3Change", 1)
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	paper4: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "78c58GzjTdGN6quFEzcYrbS", "paper4"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("paper4Change", this.stateChange.bind(this), "zcbgs2_paper4")
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("paper4Change", 1)
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	paper5: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "d986c8uOShN34xlYSDAklFP", "paper5"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("paper5Change", this.stateChange.bind(this), "zcbgs2_paper5")
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("paper5Change", 1)
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	patrollamp1: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "21ad8/QajxMvqXQQBdxRRLD", "patrollamp1"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("patrollamp1Change", this.stateChange.bind(this), "zcbgs2_patrollamp1")
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("patrollamp1Change", 1)
				}, t.prototype.onTouch1 = function() {
					n.default.xSet("patrollamp1Change", 2)
				}, t.prototype.onTouch2 = function() {
					n.default.xSet("patrollamp1Change", 0)
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	patrollamp2: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "0d570iXbwtKILl905//srZM", "patrollamp2"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("patrollamp2Change", this.stateChange.bind(this), "zcbgs2_patrollamp2")
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("patrollamp2Change", 1)
				}, t.prototype.onTouch1 = function() {
					n.default.xSet("patrollamp2Change", 2)
				}, t.prototype.onTouch2 = function() {
					n.default.xSet("patrollamp2Change", 0)
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	patrollamp3: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "7e195yW9YhIjbW3yzSU1H9s", "patrollamp3"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("patrollamp3Change", this.stateChange.bind(this), "zcbgs2_patrollamp3")
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("patrollamp3Change", 1)
				}, t.prototype.onTouch1 = function() {
					n.default.xSet("patrollamp3Change", 2)
				}, t.prototype.onTouch2 = function() {
					n.default.xSet("patrollamp3Change", 0)
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	pondAnim: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "2562dwYyUpEB7IoJPktSbok", "pondAnim"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../stage/GameData"),
			n = cc._decorator,
			i = n.ccclass,
			c = (n.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onFinish = function() {
					o.default.xSet("snapp", !0)
				}, t = __decorate([i], t)
			}(cc.Component));
		a.default = c, cc._RF.pop()
	}, {
		"../stage/GameData": "GameData"
	}],
	pond: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "96278i+Y61DsIrh0TY+p9r/", "pond"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = e("../../HallData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("pondChange", this.stateChange.bind(this), "zcbgs2_pond")
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("pondChange", 2)
				}, t.prototype.stateChange = function(t, a) {
					return e.prototype.stateChange.call(this, t, a), 1 == t ? this.anim1.play("19_pond_fin") : 2 == t && (n.default.xSet("forbidControl"), this.anim2.play("19_pond2"), this.anim2.on("finished", function() {
						i.default.xSet("gameOverPanel", 17)
					})), null
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../HallData": "HallData",
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	propGetPanel: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "3a93aVlCEZMSrPKO/1DNiu2", "propGetPanel"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../component/ActionAnim"),
			n = e("../../stage/GameData"),
			i = e("../../../common/Log"),
			c = e("../../../common/Utils"),
			r = e("../../config"),
			l = e("../../HallData"),
			s = cc._decorator,
			u = s.ccclass,
			d = s.property,
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.mask = null, t.panel = null, t.prop = 0, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {}, t.prototype.onDestroy = function() {}, t.prototype.init = function(e) {
					return __awaiter(this, void 0, void 0, function() {
						var t, a;
						return __generator(this, function(o) {
							switch (o.label) {
								case 0:
									return i.default.info("\u83b7\u5f97:", r.default.propsEnum[e]), this.prop = e, t = new cc.Node, [4, c.default.loadImage(r.default.props[e].address)];
								case 1:
									return a = o.sent(), t.addComponent(cc.Sprite).spriteFrame = a, this.node.addChild(t), l.default.xSet("itemStateChange", {
										index: e,
										state: 1
									}), [2]
							}
						})
					})
				}, t.prototype.closeAnim = function() {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(e) {
							switch (e.label) {
								case 0:
									return i.default.info("\u70b9\u51fb\u5173\u95ed"), "drink" != r.default.propsEnum[this.prop] ? [3, 1] : (this.node.destroy(), l.default.xSet("workOverTimePanel"), [2]);
								case 1:
									return "book" != r.default.propsEnum[this.prop] ? [3, 2] : (this.node.destroy(), l.default.xSet("gameOverPanel", 1), [2]);
								case 2:
									return this.prop >= 57 && this.prop <= 59 || this.prop >= 109 && this.prop <= 112 ? (o.default.popDownAnim(this.panel), [4, o.default.fadeOutAnim(this.mask)]) : [3, 4];
								case 3:
									return e.sent(), this.node.destroy(), n.default.xSet("addCompProp", this.prop), [2];
								case 4:
									if ("yBook" == r.default.propsEnum[this.prop]) return this.node.destroy(), l.default.xSet("gameOverPanel", 18), [2];
									e.label = 5;
								case 5:
									return o.default.popDownAnim(this.panel), [4, o.default.fadeOutAnim(this.mask)];
								case 6:
									return e.sent(), this.node.destroy(), n.default.xSet("addProp", this.prop), [2]
							}
						})
					})
				}, __decorate([d({
					type: cc.Node,
					displayName: "\u906e\u7f69"
				})], t.prototype, "mask", void 0), __decorate([d({
					type: cc.Node,
					displayName: "\u9762\u677f"
				})], t.prototype, "panel", void 0), t = __decorate([u], t)
			}(cc.Component);
		a.default = p, cc._RF.pop()
	}, {
		"../../../common/Log": "Log",
		"../../../common/Utils": "Utils",
		"../../HallData": "HallData",
		"../../component/ActionAnim": "ActionAnim",
		"../../config": "config",
		"../../stage/GameData": "GameData"
	}],
	propGet: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "a539abuBKZPrKnRUYdk2Ejc", "propGet"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o, n = e("../../HallData"),
			i = e("../../../common/component/XButton"),
			c = e("../../../common/Utils");
		(function(e) {
			e[e.none = 0] = "none", e[e.key = 1] = "key", e[e.drink = 10] = "drink", e[e.yen100 = 15] = "yen100", e[e.hairPiece = 21] = "hairPiece", e[e.finishing = 63] = "finishing", e[e.bone = 68] = "bone", e[e.rod = 70] = "rod", e[e.yen50 = 80] = "yen50", e[e.yen10 = 81] = "yen10", e[e.yBook = 87] = "yBook", e[e.scissors = 88] = "scissors", e[e.rope2 = 90] = "rope2", e[e.snowman = 91] = "snowman", e[e.bucket1 = 92] = "bucket1", e[e.tabaco = 96] = "tabaco", e[e.hummer = 97] = "hummer", e[e.zabu = 99] = "zabu", e[e.manbook = 101] = "manbook", e[e.banner = 102] = "banner", e[e.flower1 = 105] = "flower1", e[e.vase = 106] = "vase", e[e.spacesuit = 114] = "spacesuit", e[e.driver = 116] = "driver"
		})(o || (o = {}));
		var r = cc._decorator,
			l = r.ccclass,
			s = r.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.propName = o.none, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					return __awaiter(this, void 0, void 0, function() {
						var e, t;
						return __generator(this, function(a) {
							switch (a.label) {
								case 0:
									return e = this.node.addComponent(i.default), t = e, [4, c.default.loadAudioClip("audios/s_get")];
								case 1:
									return t.touchAudio = a.sent(), e.addTouchStartEvent(this.node, "propGet", "onTouchProp"), [2]
							}
						})
					})
				}, t.prototype.onTouchProp = function(e) {
					this.node.removeFromParent(), n.default.xSet("propGetPanel", this.propName)
				}, __decorate([s({
					type: cc.Enum(o),
					displayName: "\u9053\u5177\u540d"
				})], t.prototype, "propName", void 0), t = __decorate([l], t)
			}(cc.Component);
		a.default = u, cc._RF.pop()
	}, {
		"../../../common/Utils": "Utils",
		"../../../common/component/XButton": "XButton",
		"../../HallData": "HallData"
	}],
	propsPanel: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "e59d8z0T7tKQo9yJGKlT+pX", "propsPanel"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../config"),
			n = e("../../../common/Utils"),
			i = e("../../stage/GameData"),
			c = e("../../../common/Log"),
			r = cc._decorator,
			l = r.ccclass,
			s = r.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.content = null, t.initPos = cc.v2(100, 0), t.spacingX = 150, t.index = -1, t.scriptName = [], t
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					i.default.xBind("addProp", this.addProp.bind(this), "zcbgs2_itemsPanel"), i.default.xBind("delProp", this.delProp.bind(this), "zcbgs2_itemsPanel"), i.default.xBind("addCompProp", this.addCompProp.bind(this), "zcbgs2_itemsPanel"), i.default.xBind("delCanCom", this.delCanCom.bind(this), "zcbgs2_itemsPanel")
				}, t.prototype.addProp = function(e) {
					return __awaiter(this, void 0, void 0, function() {
						var t, a, i, r, l, s, u, d;
						return __generator(this, function(p) {
							switch (p.label) {
								case 0:
									return this.index++, c.default.info("\u589e\u52a0\u9053\u5177:", o.default.propsEnum[e], this.index), t = new cc.Node, this.content.addChild(t), t.position = cc.v2(this.initPos.x + this.index * this.spacingX, this.initPos.y), a = new cc.Node, c.default.info("\u9053\u5177\u56fe\u7247\u5730\u5740:", o.default.props[e].address), [4, n.default.loadImage(o.default.props[e].address)];
								case 1:
									return i = p.sent(), r = i.getOriginalSize(), a.addComponent(cc.Sprite).spriteFrame = i, a.setScale(.5), t.addChild(a), t.width = r.width / 2, t.height = r.height / 2, l = new cc.Node, t.addChild(l), (s = l.addComponent(cc.BoxCollider)).size = cc.size(r.width / 2, r.height / 2), s.tag = e, l.group = o.default.propsEnum[e], this.content.width = t.position.x + 100, u = o.default.propsEnum[e], this.scriptName.push(u), (d = l.addComponent(u)).spr = a, d.box = s, d.index = this.index, [2]
							}
						})
					})
				}, t.prototype.addCompProp = function(e) {
					return __awaiter(this, void 0, void 0, function() {
						var t, a, r, l, s, u, d;
						return __generator(this, function(p) {
							switch (p.label) {
								case 0:
									return this.index++, c.default.info("\u589e\u52a0\u5408\u6210\u9053\u5177:", o.default.propsEnum[e], this.index), t = new cc.Node, this.content.addChild(t), a = new cc.Node, t.addChild(a), [4, n.default.loadImage(o.default.props[e].address)];
								case 1:
									return r = p.sent(), l = r.getOriginalSize(), a.addComponent(cc.Sprite).spriteFrame = r, a.setScale(.5), t.width = l.width / 2, t.height = l.height / 2, s = new cc.Node, t.addChild(s), t.position = cc.v2(this.initPos.x + this.index * this.spacingX, this.initPos.y), this.content.width = t.position.x + 100, u = o.default.propsEnum[999], this.scriptName.push(u), (d = s.addComponent(u)).spr = a, d.index = this.index, i.default.xSet("checkComp"), [2]
							}
						})
					})
				}, t.prototype.delProp = function(e) {
					this.content.children[e].removeFromParent(), this.scriptName.splice(e, 1), this.index = -1;
					for (var t = 0; t < this.content.children.length; t++) {
						this.index++;
						var a = this.content.children[t];
						a.position = cc.v2(this.initPos.x + t * this.spacingX, this.initPos.y), this.content.width = a.position.x + 100, a.getComponentInChildren(this.scriptName[t]).index = t
					}
				}, t.prototype.delCanCom = function() {
					for (var e = [], t = 0; t < this.scriptName.length; t++) this.scriptName[t] == o.default.propsEnum[999] && e.push(t);
					var a = [];
					for (t = 0; t < e.length; t++) this.scriptName.splice(e[t], 1), a.push(this.content.children[e[t]]);
					for (t = 0; t < a.length; t++) a[t].removeFromParent();
					this.index = -1;
					for (t = 0; t < this.content.children.length; t++) {
						this.index++;
						var n = this.content.children[t];
						n.position = cc.v2(this.initPos.x + t * this.spacingX, this.initPos.y), this.content.width = n.position.x + 100, n.getComponentInChildren(this.scriptName[t]).index = t
					}
					i.default.xSet("compFin")
				}, __decorate([s({
					type: cc.Node,
					displayName: "\u5185\u5bb9\u533a\u57df"
				})], t.prototype, "content", void 0), t = __decorate([l], t)
			}(cc.Component);
		a.default = u, cc._RF.pop()
	}, {
		"../../../common/Log": "Log",
		"../../../common/Utils": "Utils",
		"../../config": "config",
		"../../stage/GameData": "GameData"
	}],
	pump: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "aa74728IThIq45abj5lMXRJ", "pump"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.pond:
							i.default.xSet("delProp", this.index), i.default.xSet("pondChange", 1)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	record1: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "33f3cPfSQ1AsLW29t6NEOdr", "record1"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.turntable1:
							i.default.xSet("delProp", this.index), i.default.xSet("turntable1Change", 1);
							break;
						case n.default.propsEnum.turntable2:
							i.default.xSet("delProp", this.index), i.default.xSet("turntable2Change", 1)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	record2: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "37fd6mBMppFH60av14YdHTe", "record2"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.turntable1:
							i.default.xSet("delProp", this.index), i.default.xSet("turntable1Change", 2);
							break;
						case n.default.propsEnum.turntable2:
							i.default.xSet("delProp", this.index), i.default.xSet("turntable2Change", 2)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	record3: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "70feadkVkhEMqpPFfPMf+IL", "record3"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.turntable1:
							i.default.xSet("delProp", this.index), i.default.xSet("turntable1Change", 3);
							break;
						case n.default.propsEnum.turntable2:
							i.default.xSet("delProp", this.index), i.default.xSet("turntable2Change", 3)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	record4: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "ad7c2FobYdGwLu8EnOGEiVi", "record4"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.turntable1:
							i.default.xSet("delProp", this.index), i.default.xSet("turntable1Change", 4);
							break;
						case n.default.propsEnum.turntable2:
							i.default.xSet("delProp", this.index), i.default.xSet("turntable2Change", 4)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	remocon2: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "e8c2dz/aZ1EU594Dk0jWn4L", "remocon2"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.tv:
							0 == i.default.xGet("tvChange") ? i.default.xSet("tvChange", 1) : i.default.xSet("tvChange", 0)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	remocon: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "92bfbNUHnBM47HSp/vKKEUv", "remocon"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.state = 0, t
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.fan:
							0 == this.state ? this.state = 1 : this.state = 0, i.default.xSet("fanChange", this.state)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	rocketstage: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "dc61fDu83BLPIghWKTyQ/B0", "rocketstage"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = e("../../HallData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("rocketstageChange", this.stateChange.bind(this), "zcbgs2_rocketstage")
				}, t.prototype.stateChange = function(t, a) {
					return e.prototype.stateChange.call(this, t, a), 2 == t && (this.anim2.play("30_rocketstage2"), this.anim2.on("finished", function() {
						i.default.xSet("gamePassPanel", 17)
					})), null
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../HallData": "HallData",
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	rocket: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "5cfbaPyqW1GVb9/Qi8LWc9T", "rocket"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.rocketstage:
							i.default.xSet("delProp", this.index), i.default.xSet("rocketstageChange", 1)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	rod: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "8cf56i+X1lOWKM/jMN/asy4", "rod"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = e("../../../common/Audio"),
			r = cc._decorator,
			l = r.ccclass,
			s = (r.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.tank:
							i.default.xSet("delProp", this.index), c.default.playSFX("audios/stage/s_rod"), i.default.xSet("tankChange", 2);
							break;
						case n.default.propsEnum.yankee:
							i.default.xSet("delProp", this.index), i.default.xSet("yankeesChange", 1)
					}
				}, t = __decorate([l], t)
			}(o.default));
		a.default = s, cc._RF.pop()
	}, {
		"../../../common/Audio": "Audio",
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	rope2: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "d6051g7JpBPtZ6dFRvKNaE8", "rope2"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = e("../../HallData"),
			r = cc._decorator,
			l = r.ccclass,
			s = (r.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.window:
							i.default.xSet("delProp", this.index), 0 == i.default.xGet("sitBossChange") ? i.default.xSet("sitBossChange", 2) : c.default.xSet("gamePassPanel", 14)
					}
				}, t = __decorate([l], t)
			}(o.default));
		a.default = s, cc._RF.pop()
	}, {
		"../../HallData": "HallData",
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	rope: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "8637aMM/cBIBIFRLb5x6FUz", "rope"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("ropeChange", this.stateChange.bind(this), "zcbgs2_rope")
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	scissors: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "1b2b9ijTE5LhoJSazQqJGdr", "scissors"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.rope1:
							i.default.xSet("delProp", this.index), i.default.xSet("ropeChange", 1)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	sdkConfig: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "856c05C5RNNfJixiOGxUSLk", "sdkConfig"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			n = o.ccclass,
			i = (o.property, function() {
				function e() {}
				return e.channel = cc.Enum({
					wx: 0,
					qq: 1,
					vivo: 2,
					tt: 3,
					oppo: 4,
					baidu: 5,
					mgc: 6,
					toutiao: 7
				}), e.config = {}, e = __decorate([n], e)
			}());
		a.default = i, cc._RF.pop()
	}, {}],
	selectItem: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "14651NUBF1JR48ct12LTZmb", "selectItem"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../items/Item"),
			n = e("../../HallData"),
			i = cc._decorator,
			c = i.ccclass,
			r = i.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.num = [], t.index = 0, t
				}
				return __extends(t, e), t.prototype.init = function(e, t, a) {
					this.index = 10 * t + e, console.log(this.index, n.default.xGet("stageState"));
					for (var o = 0; o < this.num.length; o++) this.num[o].string = this.index + 1 + "";
					this.stateChange(this.index, a)
				}, t.prototype.stateChange = function(t, a) {
					return t == this.index && (console.log("emmmm", a), e.prototype.stateChange.call(this, a, 0)), null
				}, t.prototype.onLoad = function() {}, t.prototype.onTouch1 = function() {
					n.default.xSet("loadStage", this.index + 1)
				}, __decorate([r({
					type: cc.Label,
					displayName: "\u6570\u5b57"
				})], t.prototype, "num", void 0), t = __decorate([c], t)
			}(o.default);
		a.default = l, cc._RF.pop()
	}, {
		"../../HallData": "HallData",
		"../items/Item": "Item"
	}],
	selectPage: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "c9bd521KK9Plp8lSXCQSUpo", "selectPage"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./selectItem"),
			n = e("../../HallData"),
			i = e("../../config"),
			c = e("../../stage/GameData"),
			r = cc._decorator,
			l = r.ccclass,
			s = r.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.selectItem = null, t.layout = null, t.no31 = null, t
				}
				return __extends(t, e), t.prototype.init = function(e) {
					for (var t = n.default.xGet("stageState"), a = 0; a < 10; a++) {
						var i = cc.instantiate(this.selectItem);
						i.getComponent(o.default).init(a, e, t[10 * e + a]), this.layout.addChild(i)
					}
					2 == e && (this.no31.active = !0)
				}, t.prototype.onTouchHome = function() {
					this.node.removeFromParent(), n.default.xSet("loadScene", i.default.panelEnum.mainPanel)
				}, t.prototype.onTouch31 = function() {
					var e = c.default.xGet("stageState");
					1 == e[e.length - 1] && n.default.xSet("loadStage", 31)
				}, __decorate([s({
					type: cc.Prefab,
					displayName: "\u5355\u4e2a\u5173\u5361"
				})], t.prototype, "selectItem", void 0), __decorate([s({
					type: cc.Node,
					displayName: "layout"
				})], t.prototype, "layout", void 0), __decorate([s({
					type: cc.Node,
					displayName: "31\u5173"
				})], t.prototype, "no31", void 0), t = __decorate([l], t)
			}(cc.Component);
		a.default = u, cc._RF.pop()
	}, {
		"../../HallData": "HallData",
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./selectItem": "selectItem"
	}],
	select: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "c2932sSLOVEt7gLHTbLXsRD", "select"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../config"),
			n = e("./selectPage"),
			i = cc._decorator,
			c = i.ccclass,
			r = i.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.pageview = null, t.page = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					for (var e = Math.ceil(o.default.stageNum / 10), t = 0; t < e; t++) {
						var a = cc.instantiate(this.page);
						a.position = cc.v2(720 * t, 0), this.pageview.insertPage(a, t), a.getComponent(n.default).init(t)
					}
				}, t.prototype.onDestroy = function() {}, __decorate([r({
					type: cc.PageView,
					displayName: "\u5185\u5bb9`"
				})], t.prototype, "pageview", void 0), __decorate([r({
					type: cc.Prefab,
					displayName: "\u9875"
				})], t.prototype, "page", void 0), t = __decorate([c], t)
			}(cc.Component);
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"./selectPage": "selectPage"
	}],
	sink: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "6e271ITrIxGV7f7BaXrqtqj", "sink"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("sinkChange", this.stateChange.bind(this), "zcbgs2_sink")
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("sinkChange", 1)
				}, t.prototype.onTouch1 = function() {
					n.default.xSet("sinkChange", 0)
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	sitBoss: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "d17c8fnC0lHs5ikr6Tm2exR", "sitBoss"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../../common/Audio"),
			n = e("./Item"),
			i = e("../../stage/GameData"),
			c = e("../../HallData"),
			r = cc._decorator,
			l = r.ccclass,
			s = (r.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					i.default.xBind("sitBossChange", this.stateChange.bind(this), "zcbgs2_sitBoss")
				}, t.prototype.stateChange = function(t, a) {
					return 1 == t ? this.scheduleOnce(function() {
						c.default.xSet("gameOverPanel", 1)
					}, .3) : 2 == t ? (o.default.playSFX("audios/s_exclam"), this.scheduleOnce(function() {
						c.default.xSet("gameOverPanel", 1)
					}, .3)) : 4 == t && this.scheduleOnce(function() {
						i.default.xSet("sitBossChange", 3)
					}, 1), e.prototype.stateChange.call(this, t, a)
				}, t.prototype.onTouch0 = function() {
					i.default.xSet("sitBossChange", 1)
				}, t.prototype.onTouch5 = function() {
					i.default.xSet("sitBossChange", 1)
				}, t = __decorate([l], t)
			}(n.default));
		a.default = s, cc._RF.pop()
	}, {
		"../../../common/Audio": "Audio",
		"../../HallData": "HallData",
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	sitzabu: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "fd34a/5H0lONobWAQ/y3p09", "sitzabu"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = e("../../config"),
			c = cc._decorator,
			r = c.ccclass,
			l = c.property,
			s = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.anim3 = null, t
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("sitzabuChange", this.stateChange.bind(this), "zcbgs2_sitzabu")
				}, t.prototype.stateChange = function(t, a) {
					return e.prototype.stateChange.call(this, t, a), 3 == t && (this.anim3.play("27_boss3"), this.anim3.on("finished", function() {
						n.default.xSet("key", !0)
					})), null
				}, t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case i.default.propsEnum.zabu:
							var o = n.default.xGet("sitzabuChange");
							0 == o ? n.default.xSet("sitzabuChange", 1) : 1 == o ? n.default.xSet("sitzabuChange", 2) : 2 == o && n.default.xSet("sitzabuChange", 3)
					}
				}, __decorate([l({
					type: cc.Animation,
					displayName: "anim3"
				})], t.prototype, "anim3", void 0), t = __decorate([r], t)
			}(o.default);
		a.default = s, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	snapp: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "31bdbiew9dLU4HOsL2GV5XW", "snapp"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.tank:
							i.default.xSet("delProp", this.index), i.default.xSet("tankChange", 1)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	snowman: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "a7e30oOEuVGXq0OMbEQSu94", "snowman"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.fireplace:
							i.default.xSet("delProp", this.index), i.default.xSet("fireplaceChange", 1)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	spacesuit: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "1485ekC2iVBYYoe/OTvq29v", "spacesuit"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.rocketstage:
							1 == i.default.xGet("rocketstageChange") && (i.default.xSet("delProp", this.index), i.default.xSet("rocketstageChange", 2))
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	spider: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "7b2225JHsdJ24cZxlFwovO2", "spider"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.nest:
							i.default.xSet("delProp", this.index), i.default.xSet("spiderMove")
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	spoon: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "e2b46QBythG+pjypHatIBF6", "spoon"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.superman:
							i.default.xSet("delProp", this.index), i.default.xSet("supermanChange", 1), this.scheduleOnce(function() {
								i.default.xSet("supermanChange", 2)
							}, .5)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	standAnim: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "9ca06pSLMlLQ7y9FW5pbRYO", "standAnim"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../stage/GameData"),
			n = cc._decorator,
			i = n.ccclass,
			c = (n.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.end = function() {
					o.default.xSet("doorChange", 0)
				}, t = __decorate([i], t)
			}(cc.Component));
		a.default = c, cc._RF.pop()
	}, {
		"../stage/GameData": "GameData"
	}],
	standBoss: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "74b50X4rW1NIInnM37GvWjy", "standBoss"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = e("../../HallData"),
			c = e("../../../common/Log"),
			r = cc._decorator,
			l = r.ccclass,
			s = r.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.an10 = null, t
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("standBossChange", this.stateChange.bind(this), "zcbgs2_standBoss")
				}, t.prototype.stateChange = function(t, a) {
					var o = this;
					return c.default.info("\u8fdb\u5165standboss", t), e.prototype.stateChange.call(this, t, a), 1 == t ? this.scheduleOnce(function() {
						i.default.xSet("gameOverPanel", 1)
					}, .5) : 7 == t ? this.scheduleOnce(function() {
						i.default.xSet("gameOverPanel", 1)
					}, .5) : 10 == t ? this.an10 && (n.default.xSet("forbidControl"), this.an10.play("26_boss10"), this.an10.on("finished", function() {
						n.default.xUnbind("zcbgs2_standBoss"), n.default.xSet("standBoss", !0), o.node.active = !1, n.default.xSet("recoverControl")
					})) : 11 == t && this.scheduleOnce(function() {
						i.default.xSet("gameOverPanel", 3)
					}, .5), null
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("standBossChange", 1)
				}, t.prototype.onDisable = function() {}, __decorate([s({
					type: cc.Animation,
					displayName: "an10"
				})], t.prototype, "an10", void 0), t = __decorate([l], t)
			}(o.default);
		a.default = u, cc._RF.pop()
	}, {
		"../../../common/Log": "Log",
		"../../HallData": "HallData",
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	stand: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "7648cUcK6JDIY8EcvIHxNCc", "stand"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = e("../../HallData"),
			c = cc._decorator,
			r = c.ccclass,
			l = c.property,
			s = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.anim4 = null, t
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("standChange", this.stateChange.bind(this), "zcbgs2_stand")
				}, t.prototype.stateChange = function(t, a) {
					return e.prototype.stateChange.call(this, t, a), 2 == t ? (n.default.xSet("forbidControl"), n.default.xSet("standBossChange", 999), this.anim2.play("29_stand2"), n.default.xSet("doorChange", 999), this.anim2.on("finished", function() {
						n.default.xSet("recoverControl")
					})) : 4 == t && (n.default.xSet("forbidControl"), this.anim4.play("29_stand4"), this.anim4.on("finished", function() {
						i.default.xSet("gameOverPanel", 4)
					})), null
				}, __decorate([l({
					type: cc.Animation,
					displayName: "anim4"
				})], t.prototype, "anim4", void 0), t = __decorate([r], t)
			}(o.default);
		a.default = s, cc._RF.pop()
	}, {
		"../../HallData": "HallData",
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	statue: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "9684971x6tJ7YM/TolfYn6Q", "statue"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = e("../../HallData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("statueChange", this.stateChange.bind(this), "zcbgs2_statue")
				}, t.prototype.stateChange = function(t, a) {
					return e.prototype.stateChange.call(this, t, a), n.default.xSet("forbidControl"), 1 == t ? this.anim1 && (this.anim1.play("26_statue1"), this.anim1.on("finished", function() {
						i.default.xSet("gameOverPanel", 2)
					})) : 2 == t && this.anim1 && (this.anim2.play("26_statue2"), this.anim2.on("finished", function() {
						n.default.xSet("recoverControl")
					})), null
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../HallData": "HallData",
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	step: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "24e5diDMC9M4I/HleYOTY6D", "step"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.default:
							i.default.xSet("delProp", this.index), i.default.xSet("downAnim")
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	store: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "ebd41VOUcJE2YAINxTPGUHY", "store"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("storeChange", this.stateChange.bind(this), "zcbgs2_store")
				}, t.prototype.stateChange = function(t, a) {
					return e.prototype.stateChange.call(this, t, a), 2 == t && (this.anim2.play("a01"), this.anim2.on("finished", function() {
						n.default.xSet("a01Fin")
					})), null
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	superman: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "9ba05CPkupGAL15yreqL0F0", "superman"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("supermanChange", this.stateChange.bind(this), "zcbgs2_superman")
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	switch: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "d8899aBewVAAZX/gGz45A+D", "switch"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("switchChange", this.stateChange.bind(this), "zcbgs2_switch")
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("switchChange", 1)
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	tabaco: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "7a783blzvNIqpVzgdkk3OJ5", "tabaco"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.standBoss:
							i.default.xSet("delProp", this.index), i.default.xSet("standBossChange", 10)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	tank: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "9537d3aq5pIQKQHLvz+mFSA", "tank"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = e("../../HallData"),
			c = e("../../config"),
			r = cc._decorator,
			l = r.ccclass,
			s = (r.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("tankChange", this.stateChange.bind(this), "zcbgs2_tank")
				}, t.prototype.stateChange = function(t, a) {
					var o = this;
					return e.prototype.stateChange.call(this, t, a), 2 == t && this.scheduleOnce(function() {
						o.stateChange(0, 1), i.default.xSet("propGetPanel", c.default.propsEnum.fish)
					}, .5), null
				}, t = __decorate([l], t)
			}(o.default));
		a.default = s, cc._RF.pop()
	}, {
		"../../HallData": "HallData",
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	tea: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "f3b3c5EucNCgKUylqu6l9hw", "tea"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = cc._decorator,
			i = n.ccclass,
			c = (n.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t = __decorate([i], t)
			}(o.default));
		a.default = c, cc._RF.pop()
	}, {
		"./Prop": "Prop"
	}],
	tree: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "5d332AjCUpAXYQ2C52TtBct", "tree"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = e("../../HallData"),
			c = cc._decorator,
			r = c.ccclass,
			l = c.property,
			s = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.anim3 = null, t
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("treeChange", this.stateChange.bind(this), "zcbgs2_tree")
				}, t.prototype.stateChange = function(t, a) {
					return e.prototype.stateChange.call(this, t, a), 3 == t && this.anim3 && (n.default.xSet("forbidControl"), this.anim3.play("29_tree3"), this.anim3.on("finished", function() {
						i.default.xSet("gameOverPanel", 4)
					})), null
				}, __decorate([l({
					type: cc.Animation,
					displayName: "anim3"
				})], t.prototype, "anim3", void 0), t = __decorate([r], t)
			}(o.default);
		a.default = s, cc._RF.pop()
	}, {
		"../../HallData": "HallData",
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	tube: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "237d4BYxnZOK5W2n06gM29h", "tube"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = e("../../HallData"),
			c = e("../../config"),
			r = cc._decorator,
			l = r.ccclass,
			s = (r.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("tubeChange", this.stateChange.bind(this), "zcbgs2_tube")
				}, t.prototype.stateChange = function(t, a) {
					return e.prototype.stateChange.call(this, t, a), 1 == t ? this.anim1 && (this.anim1.play("25_tube1"), this.anim1.on("finished", function() {
						i.default.xSet("gameOverPanel", 1)
					})) : 2 == t && (this.anim2.play("25_tube2"), this.anim2.on("finished", function() {
						n.default.xSet("tubeChange", 0), i.default.xSet("propGetPanel", c.default.propsEnum.bucket2)
					})), null
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("tubeChange", 1)
				}, t = __decorate([l], t)
			}(o.default));
		a.default = s, cc._RF.pop()
	}, {
		"../../HallData": "HallData",
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	turntable1: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "fddaeUy4r9CaaInPTi2TAM9", "turntable1"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../stage/GameData"),
			n = e("./Item"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					o.default.xBind("turntable1Change", this.stateChange.bind(this), "zcbgs2_turntable1")
				}, t = __decorate([c], t)
			}(n.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	turntable2: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "1104672JntD8oQGGfWNywTE", "turntable2"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../stage/GameData"),
			n = e("./Item"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					o.default.xBind("turntable2Change", this.stateChange.bind(this), "zcbgs2_turntable2")
				}, t = __decorate([c], t)
			}(n.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	tv: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "f40a1O9Ka1D5LRh03R1ZgCl", "tv"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("tvChange", this.stateChange.bind(this), "zcbgs2_tv")
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	twoBoss: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "8e394Kf4OJJerhXrZ6aumaN", "twoBoss"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("twoBossChange", this.stateChange.bind(this), "zcbgs2_twoBoss")
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("twoBossChange", 1)
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	umbrella: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "118603eCxVIVZ3LAoo3nIph", "umbrella"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(e, t) {
					switch (console.log("\u8fdb\u5165\u78b0\u649e"), e.tag) {
						case n.default.propsEnum.standBoss:
							i.default.xSet("delProp", this.index), i.default.xSet("standBossChange", 7)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	vase: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "8dffcksKttI6Z94sK7Pjemt", "vase"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.stand:
							i.default.xSet("delProp", this.index), i.default.xSet("standChange", 1)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	water: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "3e36e1V4rlHZKNlYfHt9iK+", "water"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.flower:
							i.default.xSet("delProp", this.index), i.default.xSet("flowerChange", 1)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	whaleAnim: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "c73b3+q5BNKqKo99sgdwBRV", "whaleAnim"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../common/Audio"),
			n = cc._decorator,
			i = n.ccclass,
			c = (n.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.on = function() {
					o.default.playSFX("audios/stage/s_squirting")
				}, t = __decorate([i], t)
			}(cc.Component));
		a.default = c, cc._RF.pop()
	}, {
		"../../common/Audio": "Audio"
	}],
	whale: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "ccb36LIRTFPGZWq48p/+i2s", "whale"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = e("../../HallData"),
			c = e("../../../common/Audio"),
			r = cc._decorator,
			l = r.ccclass,
			s = r.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.anim3 = null, t.anim4 = null, t
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("whaleChange", this.stateChange.bind(this), "zcbgs2_whale")
				}, t.prototype.stateChange = function(t, a) {
					return __awaiter(this, void 0, void 0, function() {
						return __generator(this, function(o) {
							return 1 == t && (i.default.xSet("gameOverPanel", 9), this.stateChange(0, 0)), e.prototype.stateChange.call(this, t, a), 2 == t && (c.default.playSFX("audios/stage/s_whale"), this.anim2.play("a10_2"), this.anim2.on("finished", function() {
								i.default.xSet("gameOverPanel", 10)
							})), 3 == t && (c.default.playSFX("audios/stage/s_whale"), this.anim3.play("a10_3")), 4 == t && (c.default.playSFX("audios/stage/s_whale"), this.anim4.play("a10_4")), [2, null]
						})
					})
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("whaleChange", 1)
				}, __decorate([s({
					type: cc.Animation,
					displayName: "\u52a8\u753b3"
				})], t.prototype, "anim3", void 0), __decorate([s({
					type: cc.Animation,
					displayName: "\u52a8\u753b4"
				})], t.prototype, "anim4", void 0), t = __decorate([l], t)
			}(o.default);
		a.default = u, cc._RF.pop()
	}, {
		"../../../common/Audio": "Audio",
		"../../HallData": "HallData",
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	window: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "63da1TNabZB4bVcI+QXvCDx", "window"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Item"),
			n = e("../../stage/GameData"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					n.default.xBind("windowChange", this.stateChange.bind(this), "zcbgs2_window")
				}, t.prototype.onTouch0 = function() {
					n.default.xSet("windowChange", 1)
				}, t.prototype.onTouch1 = function() {
					n.default.xSet("windowChange", 0)
				}, t.prototype.onTouch3 = function() {
					n.default.xSet("windowChange", 0)
				}, t.prototype.onTouch4 = function() {
					n.default.xSet("windowChange", 5)
				}, t = __decorate([c], t)
			}(o.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	workOverTimePanel: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "8be7dx5ZKBFX5VbgrLPfzxA", "workOverTimePanel"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../HallData"),
			n = cc._decorator,
			i = n.ccclass,
			c = n.property,
			r = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.sprs = [], t.spr = null, t
				}
				return __extends(t, e), t.prototype.onLoad = function() {
					var e = this;
					this.node.runAction(cc.sequence(cc.callFunc(function() {
						e.spr.spriteFrame = e.sprs[0]
					}), cc.delayTime(1.5), cc.callFunc(function() {
						e.spr.spriteFrame = e.sprs[1]
					}), cc.delayTime(1.5), cc.callFunc(function() {
						e.spr.spriteFrame = e.sprs[2]
					}), cc.delayTime(1.5), cc.callFunc(function() {
						e.node.removeFromParent(), o.default.xSet("gameOverPanel", 16)
					})))
				}, __decorate([c({
					type: cc.SpriteFrame,
					displayName: "\u52a0\u73ed\u56fe\u7247"
				})], t.prototype, "sprs", void 0), __decorate([c({
					type: cc.Sprite,
					displayName: "\u52a0\u73ed\u56fe"
				})], t.prototype, "spr", void 0), t = __decorate([i], t)
			}(cc.Component);
		a.default = r, cc._RF.pop()
	}, {
		"../../HallData": "HallData"
	}],
	yankees: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "5bfbbRLSFVBZKI+Ty48mTt1", "yankees"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../stage/GameData"),
			n = e("./Item"),
			i = e("../../HallData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					o.default.xBind("yankeesChange", this.stateChange.bind(this), "zcbgs2_yankees")
				}, t.prototype.stateChange = function(t, a) {
					return e.prototype.stateChange.call(this, t, a), 1 == t && this.anim1 && (this.anim1.play("22_bossRun"), o.default.xSet("forbidControl"), this.anim1.on("finished", function() {
						o.default.xSet("sitBossChange", 999), o.default.xSet("hairpiece", !1), o.default.xSet("recoverControl")
					})), null
				}, t.prototype.onTouch0 = function() {
					i.default.xSet("gameOverPanel", 12)
				}, t = __decorate([r], t)
			}(n.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../HallData": "HallData",
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	yankee: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "101abN5YCBHf5C6N+j7fSpO", "yankee"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("../../stage/GameData"),
			n = e("./Item"),
			i = cc._decorator,
			c = i.ccclass,
			r = (i.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onEnable = function() {
					o.default.xBind("yankeeChange", this.stateChange.bind(this), "zcbgs2_yankee")
				}, t = __decorate([c], t)
			}(n.default));
		a.default = r, cc._RF.pop()
	}, {
		"../../stage/GameData": "GameData",
		"./Item": "Item"
	}],
	yen100: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "e70097XHeVMTJQfIoX1yQgi", "yen100"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../../common/Log"),
			i = e("../../config"),
			c = e("../../stage/GameData"),
			r = cc._decorator,
			l = r.ccclass,
			s = (r.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(e, t) {
					var a = e.tag;
					switch (n.default.info("\u78b0\u649e:", i.default.propsEnum[a]), a) {
						case i.default.propsEnum.yen100Box:
							c.default.xSet("delProp", this.index), c.default.xSet("readyToShoot", 1);
							break;
						case i.default.propsEnum.jihanki:
							c.default.xSet("delProp", this.index), c.default.xSet("countYen", c.default.xGet("countYen") + 100)
					}
				}, t = __decorate([l], t)
			}(o.default));
		a.default = s, cc._RF.pop()
	}, {
		"../../../common/Log": "Log",
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	yen10: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "8a139O2EzZEUJbfv7szzw/l", "yen10"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.jihanki:
							i.default.xSet("delProp", this.index), i.default.xSet("countYen", i.default.xGet("countYen") + 10)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	yen50: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "15e30d0l9dL+7bXIysPMBv0", "yen50"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.jihanki:
							i.default.xSet("delProp", this.index), i.default.xSet("countYen", i.default.xGet("countYen") + 50)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}],
	zabu: [function(e, t, a) {
		"use strict";
		cc._RF.push(t, "31461qkJmdMs4xgm/fM5itu", "zabu"), Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var o = e("./Prop"),
			n = e("../../config"),
			i = e("../../stage/GameData"),
			c = cc._decorator,
			r = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.onCollisionEnter = function(t, a) {
					switch (e.prototype.onCollisionEnter.call(this, t, a)) {
						case n.default.propsEnum.sitzabu:
							i.default.xSet("delProp", this.index)
					}
				}, t = __decorate([r], t)
			}(o.default));
		a.default = l, cc._RF.pop()
	}, {
		"../../config": "config",
		"../../stage/GameData": "GameData",
		"./Prop": "Prop"
	}]
}, {}, ["Audio", "Caches", "Log", "Utils", "XBGM", "XButton", "XCamera", "XToggle", "XToggleGroup", "Props", "Http", "eCode", "netConfig", "QTTApi", "SDK", "sdkConfig", "GamSys", "Game", "GameController", "HallData", "UIManager", "hiraAnim", "pondAnim", "standAnim", "whaleAnim", "ActionAnim", "XAnim", "config", "HowToManager", "hintBtn", "hintLine", "hintPanel", "itemLibraryDescPanel", "itemLibraryPage", "library", "libraryItem", "Item", "bamboo1", "bamboo2", "bamboo3", "bell", "bike", "bookRace", "bowl", "box1", "box2", "box3", "breaker", "button1", "cardboard", "chabu", "chair1", "clock1", "djstand", "dog", "door", "drawer", "fan", "femaleBoss", "fireplace", "fish", "flower", "freezer1", "freezer2", "grandma", "hira", "kepper", "kotatsu", "locker1", "locker2", "locker3", "mannequin", "millionaire", "paper1", "paper2", "paper3", "paper4", "paper5", "patrollamp1", "patrollamp2", "patrollamp3", "pond", "rocketstage", "rope", "sink", "sitBoss", "sitzabu", "stand", "standBoss", "statue", "store", "superman", "switch", "tank", "tree", "tube", "turntable1", "turntable2", "tv", "twoBoss", "whale", "window", "yankee", "yankees", "loading", "loadingPanel", "main", "maskPanel", "menuBtn", "menuPanel", "menuSoundBtn", "moreGame", "Prop", "bait", "banner", "baseBallBet", "bee", "beer", "bone", "boss18", "bucket1", "bucket2", "cloth", "dango", "driver", "feed", "fishing", "flower1", "glasses", "glasses3d", "hairPiece", "hera", "hero", "hummer", "juice1", "juice2", "kaguya", "key", "majin", "manbook", "mohawk", "nata", "neko", "net", "onion", "orange", "paper11", "paper22", "propGet", "propGetPanel", "propsPanel", "pump", "record1", "record2", "record3", "record4", "remocon", "remocon2", "rocket", "rod", "rope2", "scissors", "snapp", "snowman", "spacesuit", "spider", "spoon", "step", "tabaco", "tea", "umbrella", "vase", "water", "yen10", "yen100", "yen50", "zabu", "select", "selectItem", "selectPage", "gameClearPanel", "gameOverPanel", "workOverTimePanel", "GameData", "Stage", "Stage1", "Stage10", "Stage11", "Stage12", "Stage13", "Stage14", "Stage15", "Stage16", "Stage17", "Stage18", "Stage19", "Stage2", "Stage20", "Stage21", "Stage22", "Stage23", "Stage24", "Stage25", "Stage26", "Stage27", "Stage28", "Stage29", "Stage3", "Stage30", "Stage31", "Stage32", "Stage4", "Stage5", "Stage6", "Stage7", "Stage8", "Stage9", "anim1", "anim2", "anim3", "anim4", "anim5", "anim6", "anim7", "anim8"]);