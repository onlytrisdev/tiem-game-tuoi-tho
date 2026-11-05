window.__require = function e(t, n, o) {
	function i(a, s) {
		if (!n[a]) {
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
			var u = n[a] = {
				exports: {}
			};
			t[a][0].call(u.exports, function(e) {
				return i(t[a][1][e] || e)
			}, u, u.exports, e, t, n, o)
		}
		return n[a].exports
	}
	for (var r = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
	return i
}({
	AccelerometerMgr: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "c2c71BhPrdKTb24dMTeJvWH", "AccelerometerMgr");
		var o = this && this.__decorate || function(e, t, n, o) {
			var i, r = arguments.length,
				a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
			else
				for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
			return r > 3 && a && Object.defineProperty(t, n, a), a
		};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var i = e("../scenes/hall"),
			r = cc._decorator,
			a = r.ccclass,
			s = (r.property, function() {
				function e() {}
				return e.StartAccelerometer = function(e) {
					var t = this;
					switch (console.log("调用了"), cc.sys.platform) {
						case cc.sys.WECHAT_GAME_SUB:
						case cc.sys.WECHAT_GAME:
							this.VivoAccFunes.push(e), window.wx.startAccelerometer({
								interval: "game",
								success: function() {
									console.log("调用加速度计成功！")
								},
								fail: function() {
									console.log("加速度计调用失败！")
								},
								complete: function() {
									console.log("尝试调用加速度计！")
								}
							}), window.wx.onAccelerometerChange(function(e) {
								for (var n = t.VivoAccFunes, o = null, r = 0; r < n.length; r++) {
									var a = n[r];
									"ios" == i.default.PlatFrom ? ((o = e).x *= -1, o.y *= -1, o.z *= -1) : o = e.result, a && a(o)
								}
							});
							break;
						case cc.sys.BYTEDANCE_GAME:
						case cc.sys.BYTEDANCE_GAME_SUB:
							window.tt.startAccelerometer({
								success: function(e) {
									console.log(e.errMsg, "加速度计调用成功！")
								},
								fail: function(e) {
									console.log(e.errMsg, "加速度计调用失败！")
								},
								complete: function() {
									console.log("尝试调用加速度计！")
								}
							}), window.tt.onAccelerometerChange(function(t) {
								e && e({
									x: 10 * -t.x,
									y: 10 * -t.y,
									z: 10 * -t.z
								})
							});
							break;
						case cc.sys.VIVO_GAME:
							window.qg.subscribeCompass({
								callback: function(t) {
									e && e(t)
								}
							});
							break;
						case cc.sys.OPPO_GAME:
							window.qg.startAccelerometer({
								success: function(e) {
									console.log(e.errMsg, "加速度计调用成功！")
								},
								fail: function(e) {
									console.log(e.errMsg, "加速度计调用失败！")
								},
								complete: function() {
									console.log("尝试调用加速度计！")
								}
							}), window.qg.onAccelerometerChange(function(t) {
								e && e(t)
							});
							break;
						default:
							cc.sys.isNative || (3 == cc.sys.platform || 4 == cc.sys.platform ? (window.kwaigame.startDeviceMotionListening({
								interval: "game",
								success: function(e) {
									console.log(e.errMsg, "加速度计调用成功！")
								},
								fail: function(e) {
									console.log(e.errMsg, "加速度计调用失败！")
								},
								complete: function() {
									console.log("尝试调用加速度计！")
								}
							}), window.kwaigame.onDeviceMotionChange(function(t) {
								var n = {};
								n.x = t.alpha, n.y = t.beta, n.z = t.gamma, e && e(n)
							})) : (this.AccelerFun = function(t) {
								var n = t.accelerationIncludingGravity;
								e(n)
							}, window.addEventListener("devicemotion", this.AccelerFun, !1)))
					}
				}, e.StopAccelerometerFun = function() {}, e.StopAccelerometer = function() {
					switch (cc.sys.platform) {
						case cc.sys.WECHAT_GAME_SUB:
						case cc.sys.WECHAT_GAME:
							window.wx.stopAccelerometer({
								success: function() {
									console.log("停用加速度计成功！")
								},
								fail: function() {
									console.log("停用加速度计失败！")
								},
								complete: function() {
									console.log("尝试停用加速度计")
								}
							}), this.VivoAccFunes = [];
							break;
						case cc.sys.BYTEDANCE_GAME:
						case cc.sys.BYTEDANCE_GAME_SUB:
							window.tt.stopAccelerometer({
								success: function() {
									console.log("停用加速度计成功！")
								},
								fail: function() {
									console.log("停用加速度计失败！")
								},
								complete: function() {
									console.log("尝试停用加速度计")
								}
							});
							break;
						case cc.sys.VIVO_GAME:
							window.qg.subscribeCompass({
								callback: function() {
									console.log("停用加速度计")
								}
							});
							break;
						case cc.sys.OPPO_GAME:
							window.qg.stopAccelerometer({
								success: function() {
									console.log("停用加速度计成功！")
								},
								fail: function() {
									console.log("停用加速度计失败！")
								},
								complete: function() {
									console.log("尝试停用加速度计")
								}
							});
							break;
						default:
							cc.sys.isNative || (3 == cc.sys.platform || 4 == cc.sys.platform ? window.kwaigame.stopDeviceMotionListening() : window.removeEventListener("devicemotion", this.AccelerFun, !1))
					}
				}, e.AccelerFun = null, e.VivoAccFunes = [], o([a], e)
			}());
		n.default = s, cc._RF.pop()
	}, {
		"../scenes/hall": "hall"
	}],
	AddDestokPage: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "03e42oEN+VKha6DWdIwBq9D", "AddDestokPage");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/configs/gameConfig"),
			s = e("../../engines/gameEngine"),
			c = e("../../engines/services/userContent/userInterface"),
			l = e("../MainRoot"),
			u = cc._decorator,
			d = u.ccclass,
			p = u.property,
			f = u.menu,
			h = u.disallowMultiple,
			m = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.FirstKey = "get-First-Add", t.rewardNum = null, t.tt = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					this.rewardNum.string = a.default.ADD_ONCE_POWER.toString(), this.tt = window.tt, l.default.isShortcutOpen() || this.node.destroy()
				}, t.prototype.OnAddBtn = function() {
					s.managers().soundMgr.playSound("anNiu"), console.info("添加快捷方式 onBtnMe");
					var e = this;
					this.tt ? (console.info("添加快捷方式AddDestokPage"), this.tt.addShortcut({
						success: function() {
							var t = s.default.getServices().localStorageSrv.getStorage(e.FirstKey);
							t && 1 == Number(t) ? console.info("已经添加过快捷方式") : (console.info("添加快捷方式成功"), e.addRewarded(), s.default.getServices().localStorageSrv.setStorage(e.FirstKey, 1), s.default.getServices().miniGameSrv.getAppApiInstance().reportAnalytics("addDestok", {
								addDestok: "添加桌面界面成功"
							}))
						},
						fail: function(e) {
							console.info("添加快捷方式失败", e), s.default.getServices().miniGameSrv.getAppApiInstance().reportAnalytics("addDestok", {
								addDestok: "添加桌面界面失败"
							}), s.default.getModules().uiControlModule.showMessageBox("添加失败")
						}
					})) : (this.addRewarded(), s.default.getServices().localStorageSrv.setStorage(e.FirstKey, 1)), this.node.destroy()
				}, t.prototype.addRewarded = function() {
					s.services().userSrv.addPowerOfVideo(), s.modules().uiControlModule.showGetRewarded(c.REWARD_TYPE.POWER, a.default.ADD_ONCE_POWER, "恭喜")
				}, t.prototype.onClose = function() {
					s.default.getServices().miniGameSrv.getAppApiInstance().reportAnalytics("addDestok", {
						addDestok: "添加桌面界面取消"
					}), this.node.destroy()
				}, r([p({
					type: cc.Label,
					displayName: "奖励数"
				})], t.prototype, "rewardNum", void 0), r([d, h, f("游戏页面/添加桌面快捷")], t)
			}(cc.Component);
		n.default = m, cc._RF.pop()
	}, {
		"../../engines/configs/gameConfig": "gameConfig",
		"../../engines/gameEngine": "gameEngine",
		"../../engines/services/userContent/userInterface": "userInterface",
		"../MainRoot": "MainRoot"
	}],
	AgiSkeeter: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "f951a7ksfJKRY6DvxCtwqoo", "AgiSkeeter");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/gameEngine"),
			s = e("../../Game/Enum"),
			c = e("../../Game/MainRoot"),
			l = e("../GameObj/ObjBase"),
			u = e("./Role"),
			d = e("./Skeeter"),
			p = cc._decorator,
			f = p.menu,
			h = p.ccclass,
			m = p.property,
			y = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.windWire = null, t
				}
				return i(t, e), t.prototype.beAttack = function(e, t, n, o, i) {
					if (!e) {
						if (this.windWire) switch (t) {
							case s.NODE_TOWARDS.LEFT:
								this.windWire.x = 30, this.windWire.y = 20, this.windWire.angle = 0;
								break;
							case s.NODE_TOWARDS.RIGHT:
								this.windWire.x = -15, this.windWire.y = 20, this.windWire.angle = 0;
								break;
							case s.NODE_TOWARDS.UP:
								this.windWire.x = 0, this.windWire.y = 0, this.windWire.angle = -90;
								break;
							case s.NODE_TOWARDS.DOWN:
								this.windWire.x = 0, this.windWire.y = 45, this.windWire.angle = 90
						}
						var r = this.getMePosInArr(i),
							a = -1;
						if (r > -1 && (a = r + 1), a > -1) {
							var c = !1;
							a >= i.length - 1 && (c = !0), this.moveToPoints(i[a], c) || (n && n instanceof u.default && n.setDeathSkeeter(t, o, this.objSk.skeletonData), this.Cell.removeOneNode(this.node, function() {}))
						} else n && n instanceof u.default && n.setDeathSkeeter(t, o, this.objSk.skeletonData), this.Cell.removeOneNode(this.node, function() {})
					}
				}, t.prototype.moveToPoints = function(e, t) {
					var n = this;
					if (this.Cell.getPointSpecificFlagObjs(e, s.NODE_FLAG.OBSTACLE)) return !1;
					var o = c.default.LevelSystem.getPosByFrogPoint(e),
						i = this.Cell.checkCanChangeNodeToPoint(e);
					return i ? (this.Cell.changeNodeToPoint(this.node, e), this.windWire.active = !0, cc.Tween.stopAllByTarget(this.node), cc.tween(this.node).to(.1, {
						position: o
					}).call(function() {
						t && (n.windWire.active = !1, a.default.getManagers().soundMgr.playSound("agiLaugh"), n.objSk.playAnimation("Avoid2").onComplete(1, function() {
							n.changeOnePointAgiAni(n.Pos)
						}).start(!1))
					}).start()) : this.windWire.active = !1, i
				}, t.prototype.changeOnePointAgiAni = function(e) {
					for (var t = this.Cell.getNodeByFrogPoint(e), n = function(e) {
							var n = t[e];
							if (!n) return "continue";
							var i = n.getComponent(l.default);
							i.Type == s.NODE_TYPE.AGISKEETER && o.scheduleOnce(function() {
								i.objSk.playAnimation("Idle").start(!0)
							}, .4 * e)
						}, o = this, i = 0; i < t.length; i++) n(i)
				}, t.prototype.getMePosInArr = function(e) {
					for (var t = 0; t < e.length; t++) {
						var n = e[t],
							o = this.Pos;
						if (n.row == o.row && n.col == o.col) return t
					}
					return -1
				}, t.prototype.playAnimation = function() {}, t.prototype.rederType = function(e) {
					var t = 255,
						n = new cc.Vec2(0, 0),
						o = .4;
					switch (e) {
						case s.NODE_TOWARDS.LEFT:
							t = 200, n = cc.v2(-50, 0), o = .6;
							break;
						case s.NODE_TOWARDS.RIGHT:
							t = 200, n = cc.v2(50, 0), o = .6;
							break;
						case s.NODE_TOWARDS.UP:
							t = 200, n = cc.v2(0, 50), o = .6;
							break;
						case s.NODE_TOWARDS.DOWN:
							t = 200, n = cc.v2(0, -50), o = .6;
							break;
						case s.NODE_TOWARDS.NONE:
							t = 200, n = cc.v2(0, 0), o = .6;
							break;
						default:
							n = cc.v2(0, 0), o = .4
					}
					cc.tween(this.objSk.node).to(.2, {
						opacity: t,
						x: n.x,
						y: n.y,
						scale: o
					}).start()
				}, t.prototype.initReder = function() {
					var e = this.Pos,
						t = this.Cell.getPointSpecificFlagObjs(e, s.NODE_FLAG.ROLE),
						n = this.Cell.getPointSpecificFlagObjs(e, s.NODE_FLAG.OBSTACLE);
					if (n || t) {
						var o = n ? n.getComponent(l.default) : t.getComponent(l.default);
						this.rederType(o.Tworads)
					} else this.rederType(null)
				}, r([m({
					type: cc.Node,
					displayName: "风速线"
				})], t.prototype, "windWire", void 0), r([h, f("游戏单位/身法蚊子")], t)
			}(d.default);
		n.default = y, cc._RF.pop()
	}, {
		"../../Game/Enum": "Enum",
		"../../Game/MainRoot": "MainRoot",
		"../../engines/gameEngine": "gameEngine",
		"../GameObj/ObjBase": "ObjBase",
		"./Role": "Role",
		"./Skeeter": "Skeeter"
	}],
	Bezier: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "fe6cb4R8otFK7d6Aqscj248", "Bezier");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
			s = a.ccclass,
			c = a.executeInEditMode,
			l = a.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.p1Tracker = null, t.p2Tracker = null, t.random = !1, t.debug = !1, t.p1 = null, t.c1 = null, t.c2 = null, t.p2 = null, t.g = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					this.g = this.getComponent(cc.Graphics), this.p1 = this.node.getChildByName("p1"), this.c1 = this.node.getChildByName("c1"), this.c2 = this.node.getChildByName("c2"), this.p2 = this.node.getChildByName("p2"), this.p1.active = !1, this.c1.active = !1, this.c2.active = !1, this.p2.active = !1
				}, t.prototype.startMove = function(e, t, n, o) {
					if (void 0 === n && (n = null), void 0 === o && (o = null), e) {
						var i = this.getBezierPoints(e);
						e.setPosition(i[0]), cc.tween(e).bezierTo(t, i[1], i[2], i[3]).call(function() {
							n && n.call(o, e)
						}).start()
					}
				}, t.prototype.getBezierPoints = function(e) {
					var t = this.convertToNodeSpace(e, this.p1),
						n = this.convertToNodeSpace(e, this.c1),
						o = this.convertToNodeSpace(e, this.c2),
						i = this.convertToNodeSpace(e, this.p2);
					if (this.random) {
						var r = this.calcMirrorD(t, i, n);
						n = this.getRandomP(n, r);
						var a = this.calcMirrorD(t, i, o);
						o = this.getRandomP(o, a)
					}
					return [cc.v2(t.x, t.y), cc.v2(n.x, n.y), cc.v2(o.x, o.y), cc.v2(i.x, i.y)]
				}, t.prototype.updateTracker = function() {
					if (this.p1Tracker) {
						var e = this.convertToNodeSpace(this.p1, this.p1Tracker);
						this.p1.setPosition(e)
					}
					this.p2Tracker && (e = this.convertToNodeSpace(this.p2, this.p2Tracker), this.p2.setPosition(e))
				}, t.prototype.update = function() {
					this.debug && this.draw()
				}, t.prototype.draw = function() {
					if (this.debug)
						if (this.p1 && this.c1 && this.c2 && this.p2) {
							var e = this.p1.position,
								t = this.c1.position,
								n = this.c2.position,
								o = this.p2.position;
							this.g.clear(), this.g.moveTo(e.x, e.y), this.g.bezierCurveTo(t.x, t.y, n.x, n.y, o.x, o.y), this.g.stroke()
						} else this.g.clear()
				}, t.prototype.convertToNodeSpace = function(e, t) {
					return e.parent.convertToNodeSpaceAR(t.parent.convertToWorldSpaceAR(t.position))
				}, t.prototype.calcMirrorD = function(e, t, n) {
					var o = t.sub(e),
						i = n.sub(e),
						r = o.normalize(),
						a = i.normalize(),
						s = r.dot(a),
						c = i.len() * s,
						l = o.normalize().mul(c),
						u = e.add(l).sub(n).mul(2);
					return n.add(u)
				}, t.prototype.getRandomP = function(e, t) {
					var n = t.sub(e).mul(Math.random());
					return e.add(n)
				}, r([l({
					type: cc.Node,
					tooltip: "起始点追踪器"
				})], t.prototype, "p1Tracker", void 0), r([l({
					type: cc.Node,
					tooltip: "终止点追踪器"
				})], t.prototype, "p2Tracker", void 0), r([l({
					tooltip: "是否随机"
				})], t.prototype, "random", void 0), r([l({
					tooltip: "运行时显示Bezier曲线"
				})], t.prototype, "debug", void 0), r([s, c], t)
			}(cc.Component);
		n.default = u, cc._RF.pop()
	}, {}],
	BtnAddShort: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "08661Pq0tJCKavNJJXpnneB", "BtnAddShort");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../engines/gameEngine"),
			s = cc._decorator,
			c = s.ccclass,
			l = (s.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return i(t, e), t.prototype.OnBtnAddShort = function() {
					a.default.getManagers().soundMgr.playSound("anNiu");
					var e = window.qg;
					e && e.hasShortcutInstalled({
						success: function(t) {
							0 == t ? e.installShortcut({
								success: function() {
									console.log("桌面图标创建成功！！！")
								},
								fail: function() {}
							}) : a.modules().uiControlModule.showMessageBox("已有桌面图标")
						}
					})
				}, r([c], t)
			}(cc.Component));
		n.default = l, cc._RF.pop()
	}, {
		"../engines/gameEngine": "gameEngine"
	}],
	CellCtrl: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "67f4biQBFFJZYFZeDerJigF", "CellCtrl"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = e("../../engines/gameEngine"),
			i = e("../../Game/Enum"),
			r = e("../../Game/MainRoot"),
			a = e("../GameObj/ObjBase"),
			s = function() {
				function e(e) {
					this.m_mapCell = [], this.m_nodeGroups = [], this.m_cellSize = null, this.m_level = null, this.m_cellSize = e, this.initCell()
				}
				return Object.defineProperty(e.prototype, "LevelCtrl", {
					get: function() {
						return this.m_level
					},
					set: function(e) {
						this.m_level = e
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.initCell = function() {
					for (var e = this.m_cellSize, t = this.m_mapCell, n = e.row, o = e.col, i = 0; i < n; i++) {
						t[i] = [];
						for (var r = 0; r < o; r++) t[i][r] = [].concat()
					}
					this.m_nodeGroups = []
				}, e.prototype.getNodeByFrogPoint = function(e, t) {
					if (void 0 === t && (t = null), !(t = t || this.m_mapCell) || t.length < 1) return [];
					var n = e.row,
						o = e.col;
					return n >= this.m_cellSize.row || o >= this.m_cellSize.col || n < 0 || o < 0 ? [] : t[e.row][e.col]
				}, e.prototype.getNodeByPointIndex = function(e, t) {
					for (var n = this.m_mapCell[t.row][t.col], o = 0; o < n.length; o++) {
						var i = n[o];
						if (i && i.uuid == e.uuid) return o
					}
					return -1
				}, e.prototype.getOneNodeIsInGroup = function(e) {
					for (var t = 0; t < this.m_nodeGroups.length; t++) {
						var n = this.m_nodeGroups[t];
						if (n)
							for (var o = 0; o < n.length; o++) {
								var i = n[o];
								if (i && i.uuid == e.uuid) return n
							}
					}
					return [e]
				}, e.prototype.getFrogPointByNode = function(e) {
					for (var t = this.m_mapCell, n = null, o = 0; o < t.length; o++)
						for (var i = 0; i < t.length; i++)
							for (var r = t[o][i], a = 0; a < r.length; a++) {
								var s = r[a];
								if (s && s.uuid == e.uuid) {
									n = {
										row: o,
										col: i
									};
									break
								}
							}
					return n
				}, e.prototype.addOneNode = function(e, t) {
					var n = e.row,
						o = e.col;
					this.m_mapCell[n][o].unshift(t)
				}, e.prototype.addOneNodeGroups = function(e, t) {
					if (null != e) {
						var n = this.m_nodeGroups[e];
						n || (n = this.m_nodeGroups[e] = []);
						for (var o = 0; o < n.length; o++) {
							var i = n[o];
							if (i && i.uuid == t.uuid) return
						}
						this.m_nodeGroups[e].push(t)
					}
				}, e.prototype.getOneNodeInGroupIndex = function(e, t) {
					if (!e) return -1;
					for (var n = 0; n < t.length; n++) {
						var o = t[n];
						if (o && o.uuid == e.uuid) return n
					}
					return -1
				}, e.prototype.changeNodeToPoint = function(e, t) {
					if (t.row > this.m_cellSize.row - 1 || t.row < 0 || t.col > this.m_cellSize.col - 1 || t.col < 0) return !1;
					var n = this.m_mapCell,
						o = e.getComponent(a.default),
						i = o.Pos,
						r = n[i.row][i.col],
						s = this.getNodeByPointIndex(e, i);
					s > -1 && r.splice(s, 1);
					var c = n[t.row][t.col];
					return o.Pos = t, c.unshift(e), !0
				}, e.prototype.checkCanChangeNodeToPoint = function(e) {
					return !(e.row > this.m_cellSize.row - 1 || e.row < 0 || e.col > this.m_cellSize.col - 1 || e.col < 0)
				}, e.prototype.removeOneNode = function(e, t, n) {
					if (void 0 === n && (n = !0), e) {
						var o = e.getComponent(a.default);
						if (o) {
							var i = o.Pos,
								s = this.getNodeByFrogPoint(i),
								c = this.getNodeByPointIndex(e, i);
							c > -1 && s.splice(c, 1), n && r.default.GameObjSystem.putOneNode(o.Type, e), t && t()
						} else console.error("#CellCtrl error: 移除了一个不合法的节点")
					} else console.error("CellCtrl error: 移除了空节点")
				}, e.prototype.moveOneNodeByDir = function(e, t, n, s, c) {
					var l, u = this;
					void 0 === n && (n = 1);
					var d = this.LevelCtrl.getRoleNode().getComponent(a.default).AtkDistance - 1;
					if (n > d) return console.log("移动深度已达到可以进行callBack操作"), s && s(e), n;
					for (var p = e.concat(), f = [], h = 0; h < p.length; h++)
						if ((P = (m = p[h]).getComponent(a.default)).Flags.includes(i.NODE_FLAG.NOTMOVEOBJ)) return s && s(p), n;
					for (h = 0; h < p.length; h++) {
						var m = p[h];
						f.push(m.uuid)
					}
					var y = [],
						g = [],
						_ = function(e) {
							var n = e.getComponent(a.default),
								o = n.Pos,
								r = u.dirConvertToVec(t),
								s = {
									row: o.row + r.x,
									col: o.col + r.y
								},
								c = u.getNodeByFrogPoint(s);
							if (c.length > 0)
								for (var l = 0; l < c.length; l++) {
									var d = c[l],
										h = d.getComponent(a.default);
									if (!h.Flags.includes(i.NODE_FLAG.PIERCEOBJ))
										if (h.Flags.includes(i.NODE_FLAG.OBSTACLE_NOTMOVE_OBJ)) !g.includes(d.uuid) && n.Flags.includes(i.NODE_FLAG.OBSTACLE) && (y.push(d), g.push(d.uuid));
										else {
											for (var m = u.getOneNodeIsInGroup(d), v = 0; v < m.length; v++) {
												var b = m[v];
												f.includes(b.uuid) || (p.push(b), f.push(b.uuid))
											}
											_(d)
										}
								}
						};
					for (h = 0; h < p.length; h++) m = p[h], _(m);
					p.sort(function(e, n) {
						switch (t) {
							case i.NODE_TOWARDS.LEFT:
								return e.getComponent(a.default).Pos.row - n.getComponent(a.default).Pos.row;
							case i.NODE_TOWARDS.RIGHT:
								return n.getComponent(a.default).Pos.row - e.getComponent(a.default).Pos.row;
							case i.NODE_TOWARDS.DOWN:
								return e.getComponent(a.default).Pos.col - n.getComponent(a.default).Pos.col;
							case i.NODE_TOWARDS.UP:
								return n.getComponent(a.default).Pos.col - e.getComponent(a.default).Pos.col
						}
					});
					for (var v = this.dirConvertToVec(t), b = !0, O = 0, w = p; O < w.length; O++) {
						var P, S = (P = (x = w[O]).getComponent(a.default)).Pos,
							C = this.getNodeByFrogPoint({
								row: S.row,
								col: S.col
							});
						if (P.Flags, P.Flags.includes(i.NODE_FLAG.NOTMOVEOBJ) && (b = !1), C.length > 0)
							for (h = 0; h < C.length; h++) C[h].getComponent(a.default).Flags.includes(i.NODE_FLAG.NOTMOVEOBJ) && (b = !1)
					}
					if (b) {
						console.log(n, "deep"), n = n += 1;
						for (var E = function(e) {
								var i = e.getComponent(a.default),
									l = {
										row: i.Pos.row + v.x,
										col: i.Pos.col + v.y
									},
									d = r.default.LevelSystem.getPosByFrogPoint(l);
								N.changeNodeToPoint(e, l), o.default.getManagers().soundMgr.playSound("move"), cc.tween(e).to(.1, {
									x: d.x,
									y: d.y
								}).call(function() {
									e.uuid == p[p.length - 1].uuid && u.moveOneNodeByDir(p, t, n, s, c)
								}).start()
							}, N = this, A = 0, M = p; A < M.length; A++) E(x = M[A]);
						for (var R = function(e, t) {
								var n = e.getComponent(a.default).Pos,
									o = [{
										row: n.row,
										col: n.col + t
									}, {
										row: n.row,
										col: n.col - t
									}, {
										row: n.row - t,
										col: n.col
									}, {
										row: n.row + t,
										col: n.col
									}, {
										row: n.row - t,
										col: n.col + t
									}, {
										row: n.row + t,
										col: n.col + t
									}, {
										row: n.row - t,
										col: n.col - t
									}, {
										row: n.row + t,
										col: n.col - t
									}];
								if (1 == t) {
									var r = {
										row: n.row + v.x,
										col: n.col + v.y
									};
									if (u.getPointSpecificFlagObjs(r, i.NODE_FLAG.OBSTACLE)) {
										for (var s = 0; s < o.length; s++) {
											var c = o[s];
											if (!u.getPointSpecificFlagObjs(c, i.NODE_FLAG.OBSTACLE)) return c
										}
										return R(e, ++t)
									}
									return r
								}
								for (r = null, s = 0; s < o.length; s++)
									if (c = o[s], !u.getPointSpecificFlagObjs(c, i.NODE_FLAG.OBSTACLE)) return c;
								return R(e, ++t)
							}, L = 0, T = y; L < T.length; L++) {
							var x = T[L],
								k = R(x, 1),
								I = r.default.LevelSystem.getPosByFrogPoint(k);
							this.changeNodeToPoint(x, k), cc.tween(x).to(.1, {
								x: I.x,
								y: I.y
							}).start()
						}(null === (l = this.LevelCtrl.getRoleNode()) || void 0 === l ? void 0 : l.getComponent(a.default)) && c && c()
					} else console.log("不能移动了,进行callBack行为"), s && s(e);
					return n
				}, e.prototype.dirConvertToVec = function(e) {
					switch (e) {
						case i.NODE_TOWARDS.LEFT:
							return cc.v2(-1, 0);
						case i.NODE_TOWARDS.RIGHT:
							return cc.v2(1, 0);
						case i.NODE_TOWARDS.UP:
							return cc.v2(0, 1);
						case i.NODE_TOWARDS.DOWN:
							return cc.v2(0, -1)
					}
				}, e.prototype.atkOnePointObjs = function(e, t, n, o, r) {
					for (var s = this.getNodeByFrogPoint(e), c = !1, l = s.length - 1; l >= 0; l--)(u = s[l]) && u.getComponent(a.default).Flags.includes(i.NODE_FLAG.OBSTACLE) && (c = !0);
					for (l = s.length - 1; l >= 0; l--) {
						var u;
						(u = s[l]) && u.getComponent(a.default).beAttack(c, t, n, o, r)
					}
				}, e.prototype.getPointSpecificFlagObjs = function(e, t) {
					for (var n = this.getNodeByFrogPoint(e), o = 0; o < n.length; o++) {
						var i = n[o];
						if (i && i.getComponent(a.default).Flags.includes(t)) return i
					}
					return null
				}, e.prototype.getCellAllTypeObjs = function(e) {
					for (var t = [], n = 0; n < this.m_mapCell.length; n++)
						for (var o = this.m_mapCell[n], i = 0; i < o.length; i++)
							for (var r = o[i], s = 0; s < r.length; s++) {
								var c = r[s];
								c.getComponent(a.default).Type == e && t.push(c)
							}
					return t
				}, e.prototype.getCellAllFlagObjs = function(e) {
					for (var t = [], n = 0; n < this.m_mapCell.length; n++)
						for (var o = this.m_mapCell[n], i = 0; i < o.length; i++)
							for (var r = o[i], s = 0; s < r.length; s++) {
								var c = r[s];
								c.getComponent(a.default).Flags.includes(e) && t.push(c)
							}
					return t
				}, e.prototype.getPointAllTypeObjs = function(e, t) {
					for (var n = [], o = this.getNodeByFrogPoint(e), i = 0; i < o.length; i++) {
						var r = o[i];
						r.getComponent(a.default).Type == t && n.push(r)
					}
					return n
				}, e.prototype.initCellObjs = function() {
					for (var e = 0; e < this.m_mapCell.length; e++)
						for (var t = this.m_mapCell[e], n = 0; n < t.length; n++)
							for (var o = t[n], i = 0; i < o.length; i++) {
								var r = o[i];
								r && r.getComponent(a.default).init()
							}
				}, e.prototype.objsStepEnd = function() {
					for (var e = 0; e < this.m_mapCell.length; e++)
						for (var t = this.m_mapCell[e], n = 0; n < t.length; n++)
							for (var o = t[n], i = 0; i < o.length; i++) {
								var r = o[i];
								r && r.getComponent(a.default).stepEnd()
							}
				}, e.prototype.onePointBeTread = function(e) {
					for (var t = this.getNodeByFrogPoint(e), n = 0; n < t.length; n++) {
						var o = t[n];
						o && o.getComponent(a.default).beTread()
					}
				}, e
			}();
		n.default = s, cc._RF.pop()
	}, {
		"../../Game/Enum": "Enum",
		"../../Game/MainRoot": "MainRoot",
		"../../engines/gameEngine": "gameEngine",
		"../GameObj/ObjBase": "ObjBase"
	}],
	ChangeImgUtil: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "c397bMGjMJN+rsM7DvJxo1e", "ChangeImgUtil");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
			s = a.ccclass,
			c = a.property,
			l = a.menu,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.sfs = [], t.loop = !1, t.sprite = null, t.nowIdx = 0, t.tiem = 0, t.tiem2 = 0, t.time = 0, t
				}
				return i(t, e), t.prototype.changeImgById = function(e) {
					this.sprite || (this.sprite = this.node.getComponent(cc.Sprite)), this.sprite ? (this.sprite.spriteFrame = this.sfs[e], this.nowIdx = e) : cc.warn("current node can not find cc.Sprite!")
				}, t.prototype.next = function() {
					this.nowIdx >= this.sfs.length - 1 ? this.loop ? this.nowIdx = 0 : cc.warn("it's last one") : this.nowIdx++, this.changeImgById(this.nowIdx)
				}, t.prototype.last = function() {
					this.nowIdx <= 0 ? this.loop ? this.nowIdx = this.sfs.length - 1 : cc.warn("it's first one") : this.nowIdx--, this.changeImgById(this.nowIdx)
				}, t.prototype.onPlay = function(e, t) {
					this.onStop(), this.tiem = 0, this.tiem2 = e, this.time = t, this.schedule(this.onTime, .033 * e)
				}, t.prototype.onTime = function() {
					this.tiem = this.tiem + .033 * this.tiem2, this.nowIdx >= this.sfs.length - 2 && (this.nowIdx = 0), this.tiem >= this.time ? (this.tiem = 0, this.nowIdx = 0, this.next()) : this.next()
				}, t.prototype.onStop = function() {
					this.unschedule(this.onTime)
				}, r([c([cc.SpriteFrame])], t.prototype, "sfs", void 0), r([c({
					displayName: "是否循环"
				})], t.prototype, "loop", void 0), r([s, l("自定义组件/ChangeImgUtil")], t)
			}(cc.Component);
		n.default = u, cc._RF.pop()
	}, {}],
	ClickBase: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "96293gM6rZEcIjGTqSuNop0", "ClickBase");
		var o, i = this && this.__extends || (o = function(e, t) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
				})(e, t)
		}, function(e, t) {
			function n() {
				this.constructor = e
			}
			o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
		});
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.canClick = !0, t.down = !1, t
			}
			return i(t, e), t.prototype.OnDown = function() {
				this.down = !0
			}, t.prototype.OnUp = function() {
				this.down = !1
			}, t.prototype.onLoad = function() {
				this.node.on(cc.Node.EventType.TOUCH_START, this.ClickDown, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.ClickUp, this), this.node.on(cc.Node.EventType.TOUCH_END, this.ClickUp, this), this.node.on(cc.Node.EventType.TOUCH_START, this.OnDown, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.OnUp, this), this.node.on(cc.Node.EventType.TOUCH_END, this.OnUp, this)
			}, t.prototype.lateUpdate = function(e) {
				this.down && this.OnDowning(e)
			}, t
		}(cc.Component);
		n.default = r, cc._RF.pop()
	}, {}],
	Cloud: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "f55e0RGdJxKz5haVQ5YkVRU", "Cloud");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
			s = a.ccclass,
			c = a.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.cloudSpeed = 20, t
				}
				return i(t, e), t.prototype.cloudRun = function() {
					var e = 1750 / this.cloudSpeed;
					this.node.children.forEach(function(t) {
						var n = cc.tween(t).by(e, {
							x: 1750
						}).call(function() {
							t.x >= 1750 && (t.x = -1750)
						});
						cc.tween(t).repeatForever(n).start()
					})
				}, t.prototype.start = function() {
					this.cloudRun()
				}, r([c({
					displayName: "云的移动速度"
				})], t.prototype, "cloudSpeed", void 0), r([s], t)
			}(cc.Component);
		n.default = l, cc._RF.pop()
	}, {}],
	ConfigService: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "0308d7WAyJDxq8vvELQmUAN", "ConfigService");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			a = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = e("../../engines/configs/gameConfig"),
			c = e("../../engines/managers/gameContent/gameMode_json"),
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.serviceName = "===配置表服务", t.names = "lzl   liangzhelai????????????", t.m_sourceList = null, t.m_normalLevelList = [], t.m_doubleLevelList = [], t.m_paintedLevelList = [], t.m_levelSoureList = null, t.m_normalGuideList = null, t.m_gameObjMap = null, t.m_modeImgMap = {}, t.m_skinMap = {}, t.m_appleSnakeMap = {}, t
				}
				return i(t, e), Object.defineProperty(t.prototype, "NormalLevelList", {
					get: function() {
						return this.m_normalLevelList
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "DoubleLevelList", {
					get: function() {
						return this.m_doubleLevelList
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "PaintedLevelList", {
					get: function() {
						return this.m_paintedLevelList
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "LevelSourceList", {
					get: function() {
						return this.m_levelSoureList
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "NormalGuideList", {
					get: function() {
						return this.m_normalGuideList
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "GameObjMap", {
					get: function() {
						return this.m_gameObjMap
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "ModeImgMap", {
					get: function() {
						return this.m_modeImgMap
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "SkinMap", {
					get: function() {
						return this.m_skinMap
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.GetSkin = function(e) {
					return this.m_skinMap[e]
				}, Object.defineProperty(t.prototype, "AppleSnakeMap", {
					get: function() {
						return this.m_appleSnakeMap
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.GetAppleSnakeLevel = function(e) {
					return this.m_appleSnakeMap[e]
				}, t.prototype.ServiceInit = function() {
					return r(this, void 0, Promise, function() {
						var t, n, o;
						return a(this, function(i) {
							switch (i.label) {
								case 0:
									e.prototype.ServiceInit.call(this), this.m_sourceList = [{
										path: "Json/NormalLevelConfig",
										responName: "m_normalLevelList"
									}, {
										path: "Json/GameObjConfig",
										responName: "m_gameObjMap"
									}, {
										path: "Json/DoubleLevelConfig",
										responName: "m_doubleLevelList"
									}, {
										path: "Json/PaintedLevelConfig",
										responName: "m_paintedLevelList"
									}], this.m_levelSoureList = [{
										mode: c.GAME_MODE.NORMAL,
										responName: "NormalLevelList"
									}, {
										mode: c.GAME_MODE.DOUBLE,
										responName: "DoubleLevelList"
									}, {
										mode: c.GAME_MODE.PAINTED_1,
										responName: "PaintedLevelList"
									}], t = this.m_sourceList, n = 0, i.label = 1;
								case 1:
									return n < t.length ? (o = t[n], [4, this.LoadFun(o.path, o.responName)]) : [3, 4];
								case 2:
									i.sent(), i.label = 3;
								case 3:
									return n++, [3, 1];
								case 4:
									return this.m_skinMap = s.default.SKIN_CONFIG, [2]
							}
						})
					})
				}, t.prototype.LoadFun = function(e, t) {
					return r(this, void 0, void 0, function() {
						var n = this;
						return a(this, function(o) {
							switch (o.label) {
								case 0:
									return [4, new Promise(function(o, i) {
										cc.resources.load(e, function(r, a) {
											if (r) return i(r), void console.error("加载配置" + e + "失败", r);
											n[t] = a.json, o()
										})
									})];
								case 1:
									return o.sent(), [2]
							}
						})
					})
				}, t
			}(e("../Base/ServicesBase").default);
		n.default = l, cc._RF.pop()
	}, {
		"../../engines/configs/gameConfig": "gameConfig",
		"../../engines/managers/gameContent/gameMode_json": "gameMode_json",
		"../Base/ServicesBase": "ServicesBase"
	}],
	Const: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "db95edyQ3RJbJ+k4R15vjrG", "Const"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.Copy = n.dirList = n.HALF_HEIGHT = n.HALF_WIDTH = n.MODE_NAME_MAP = n.ANGLE_TO_RADIAN = n.RADIAN_TO_ANGLE = void 0, n.RADIAN_TO_ANGLE = 57.29577951308232, n.ANGLE_TO_RADIAN = .017453292519943295, n.MODE_NAME_MAP = {
			0: "普通模式",
			1: "自制模式",
			2: "测试模式",
			3: "双舌模式"
		}, n.HALF_WIDTH = function() {
			return .5 * cc.winSize.width
		}, n.HALF_HEIGHT = function() {
			return .5 * cc.winSize.height
		}, n.dirList = [{
			x: 0,
			y: -1
		}, {
			x: 1,
			y: 0
		}, {
			x: -1,
			y: 0
		}, {
			x: 0,
			y: 1
		}], n.Copy = function(e, t) {
			if (void 0 === t && (t = {}), Object.prototype !== Object.getPrototypeOf(e)) return new Error("传入参数***_object***类型错误");
			for (var o in e) e[o] && Object.prototype === Object.getPrototypeOf(e[o]) ? t[o] = n.Copy(e[o]) : t[o] = e[o];
			return t
		}, cc._RF.pop()
	}, {}],
	CoutomObj: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "32de2SbRLdJdZjbF/hOaROL", "CoutomObj");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
			s = a.ccclass,
			c = (a.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.frogObj = null, t.bindNode = null, t.clickFun = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					this.node.on("touchstart", this.onNodeStart, this), this.node.on("touchmove", this.ontouchMove, this), this.node.on("touchend", this.onTouchEnd, this), this.node.on("touchcancel", this.onTouchEnd, this)
				}, t.prototype.onNodeStart = function(e) {
					this.clickFun && this.clickFun(e, this.frogObj)
				}, t.prototype.setData = function(e, t) {
					this.frogObj = e, this.clickFun = t
				}, t.prototype.ontouchMove = function(e) {
					if (this.bindNode) {
						var t = e.getDelta(),
							n = t.x,
							o = t.y;
						this.bindNode.x += n, this.bindNode.y += o
					}
				}, t.prototype.onTouchEnd = function() {
					this.bindNode = null
				}, t.prototype.setBindNode = function(e) {
					this.bindNode = e
				}, r([s], t)
			}(cc.Component));
		n.default = c, cc._RF.pop()
	}, {}],
	CoutomPage: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "1d439UAcHNPELCKs9mL9NhJ", "CoutomPage");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../../engines/gameEngine"),
			s = e("../../../Game/MainRoot"),
			c = e("../../Ctrl/CellCtrl"),
			l = e("../CustomObj/CoutomObj"),
			u = cc._decorator,
			d = u.ccclass,
			p = u.property,
			f = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.coutomItem = null, t.itemContent = null, t.cell = null, t
				}
				return i(t, e), t.prototype.start = function() {
					this.initPage()
				}, t.prototype.initPage = function() {
					var e = s.default.ConfigSerive.GameObjMap;
					for (var t in e) {
						var n = e[t];
						if (n) {
							var o = cc.instantiate(this.coutomItem);
							o.x = 0, this.itemContent.addChild(o), o.getComponent(l.default).setData(n, this.onItemClick.bind(this))
						}
					}
					s.default.LevelSystem.MapSize = {
						row: 18,
						col: 11
					}, this.cell = new c.default(s.default.LevelSystem.MapSize)
				}, t.prototype.onItemClick = function(e, t) {
					var n = t.type,
						o = s.default.GameObjSystem.getOneNode(n);
					e.target.getComponent(l.default).setBindNode(o);
					var i = e.getLocation();
					console.log(i, "vec>>>>"), this.node.addChild(o), o.setPosition(i.x - a.default.Canvas().width / 2, i.y - a.default.Canvas().height / 2), o.on("touchmove", this.moveFun.bind(this, o), this), o.on("touchend", this.endFun.bind(this, o), this), o.on("touchcancel", this.endFun.bind(this, o), this)
				}, t.prototype.moveFun = function(e, t) {
					console.log(e, t);
					var n = t.getDelta(),
						o = n.x,
						i = n.y;
					e.x += o, e.y += i
				}, t.prototype.endFun = function(e) {
					e.getPosition()
				}, r([p({
					type: cc.Node,
					displayName: "自定义预制体"
				})], t.prototype, "coutomItem", void 0), r([p({
					type: cc.Node,
					displayName: "itemContent"
				})], t.prototype, "itemContent", void 0), r([d], t)
			}(cc.Component);
		n.default = f, cc._RF.pop()
	}, {
		"../../../Game/MainRoot": "MainRoot",
		"../../../engines/gameEngine": "gameEngine",
		"../../Ctrl/CellCtrl": "CellCtrl",
		"../CustomObj/CoutomObj": "CoutomObj"
	}],
	DragBase: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "daaf9JP2ipLF6+MfHR8pVGV", "DragBase");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/libs/data_control"),
			s = cc._decorator,
			c = s.ccclass,
			l = (s.property, s.menu),
			u = (s.disallowMultiple, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.checkTime = 1, t.origin = null, t.nodePos = null, t.oldPos = null, t.newPos = null, t.limit = {
						minX: 0,
						maxX: 0,
						minY: 0,
						maxY: 0
					}, t.ctrlNode = null, t.canMove = !0, t
				}
				return i(t, e), Object.defineProperty(t.prototype, "Limit", {
					get: function() {
						return this.limit
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "NodePos", {
					set: function(e) {
						this.nodePos.x = e.x, this.nodePos.y = e.y
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.CanMove = function(e) {
					this.canMove = e
				}, t.prototype.start = function() {
					var e = this;
					null == this.ctrlNode && (this.ctrlNode = this.node), this.ctrlNode && this.scheduleOnce(this.SetPos), this.scheduleOnce(function() {
						var t = a.default.GetWorldPos(e.ctrlNode.parent);
						e.limit.maxX = .5 * cc.winSize.width / e.ctrlNode.parent.scaleX - t.x, e.limit.minX = .5 * -cc.winSize.width / e.ctrlNode.parent.scaleX - t.x, e.limit.maxY = .5 * cc.winSize.height / e.ctrlNode.parent.scaleY - t.y, e.limit.minY = .5 * -cc.winSize.height / e.ctrlNode.parent.scaleY - t.y
					}, .1), this.ctrlNode && this.RegistEvent()
				}, t.prototype.SetPos = function() {
					this.origin = this.ctrlNode.getPosition(), this.nodePos = this.ctrlNode.getPosition()
				}, t.prototype.RegistEvent = function() {
					this.ctrlNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.ctrlNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.ctrlNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.ctrlNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
				}, t.prototype.onDestroy = function() {}, t.prototype.onTouchStart = function() {}, t.prototype.onTouchMove = function(e) {
					if (this.canMove) {
						var t = e.getTouches();
						this.oldPos = this.ctrlNode.parent.convertToNodeSpaceAR(t[0].getStartLocation()), this.newPos = this.ctrlNode.parent.convertToNodeSpaceAR(t[0].getLocation());
						var n = this.oldPos.sub(this.newPos);
						this.ctrlNode.x = this.nodePos.x - n.x, this.ctrlNode.y = this.nodePos.y - n.y;
						var o = this.ctrlNode.getPosition();
						o.x < this.limit.minX && (o.x = this.limit.minX), o.x > this.limit.maxX && (o.x = this.limit.maxX), o.y < this.limit.minY && (o.y = this.limit.minY), o.y > this.limit.maxY && (o.y = this.limit.maxY), this.ctrlNode.setPosition(o)
					}
				}, t.prototype.onTouchEnd = function() {
					this.canMove && this.ctrlNode.getPosition(this.nodePos)
				}, r([c, l("工具组件/可拖动物")], t)
			}(cc.Component));
		n.default = u, cc._RF.pop()
	}, {
		"../../engines/libs/data_control": "data_control"
	}],
	Enum: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "50bcfTyXyxE1rpWqC2+tnx9", "Enum"), Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.OPERATION_TYPE = n.INPUT_TYPE = n.BTNTYPE = n.NODE_FLAG = n.SKIN_TYPE = n.NODE_STATE = n.PROW_STATE = n.NODE_TOWARDS = n.NODE_TYPE = n.GAME_EVENT = n.SWITCH_TYPE = n.TOUCH_TYPE = n.PAGE = void 0,
			function(e) {
				e.INGAMEPAGE = "InGamePage", e.WINPAGE = "WinPage", e.LOSEPAGE = "LosePage", e.LEVELMENU = "LevelMenu", e.PAUSEPAGE = "PausePage", e.TIPSPAGE = "TipsShowPage", e.MODEMENU = "ModeMenu", e.LEVELSKINMENU = "LevelSkinMenu", e.APPLESNAKE = "AppleSnakePage", e.SKINPAGE = "SkinPage", e.SKINREWARDPAGE = "SkinRewardPage", e.MODEUNLOCKPAGE = "ModeUnlockPage"
			}(n.PAGE || (n.PAGE = {})),
			function(e) {
				e[e.SINGLE = 0] = "SINGLE", e[e.DOUBLE_SLIDER = 1] = "DOUBLE_SLIDER", e[e.DOUBLE_ZOOM = 2] = "DOUBLE_ZOOM", e[e.DOUBLE_ROT = 3] = "DOUBLE_ROT"
			}(n.TOUCH_TYPE || (n.TOUCH_TYPE = {})),
			function(e) {
				e.SOUND = "SoundSwitch", e.VIBRATE = "VirSwitch"
			}(n.SWITCH_TYPE || (n.SWITCH_TYPE = {})),
			function(e) {
				e.SELECTED_PUZZLE = "selected_puzzle", e.CHECK_PUZZLE = "check_puzzle", e.REFRESH_PUZZLE = "refresh_puzzle", e.DRAWLINE_GAME_RUN = "drawLine_Game_Run", e.DRAWLINE_GAME_OVER = "drawLine_Game_Over", e.DRAWLINE_LOSE = "drawLine_Lose", e.DRAWLINE_WIN = "drawLine_Win", e.DRAWLINE_BTN = "drawLine_Btn", e.DONOTMOVE_LOSE = "donotMoveLose", e.ON_BTN_TIPS = "onBtnTips", e.ON_BTN_ANSWER = "onBtnAnswer", e.ON_TIPS_GOT = "onTipsGot", e.ON_ANSWER_GOT = "onAnswerGot", e.GAME_RESUME = "gameResume", e.GAME_PAUSE = "gamePause", e.ON_STEP_RUN = "onStepRun", e.ON_NODE_DEATH = "onNodeDeath", e.ON_ALL_NODE_DEATH = "onAllNodeDeath", e.ON_GROW_COUNT_ADD = "onGrowCountAdd", e.ON_BODY_ENTER = "onBodyEnter", e.ON_SKINBTN_CLICK = "onskinBtn", e.ON_TIPS_OPEN = "onTipsOpen", e.ON_EXPLODE_END = "onExplodeEnd", e.ON_HIDE_INGAME = "onHideIngame", e.ON_GAME_END = "onGameOver", e.FINDMODE_CAN_TIPS = "findWordModeTips", e.STOP_ATT = "STOP_ATT", e.SHOW_COUNT = "SHOW_COUNT", e.ROLEMOVE_DOWN = "ROLE_MOVE_DOWN", e.ROLEMOVE_UP = "ROLE_MOVE_UP", e.ROLEATTACKDOWN = "ROLE_ATTACK_DOWN", e.ROLEATTACKUP = "ROLE_ATTACK_UP", e.OPERATE_BLOCK = "OPERATE_BLOCK", e.PROW_LENGTH_CHANGE = "PROW_LENGTH_CHANGE", e.HINTATTACKUP = "HINT_ATTACK_UP", e.CHANGEDOUBLE = "CHANGE_DOUBLE_PROW"
			}(n.GAME_EVENT || (n.GAME_EVENT = {})),
			function(e) {
				e[e.ROLE = 0] = "ROLE", e[e.SKEETER = 1] = "SKEETER", e[e.PLOT = 2] = "PLOT", e[e.STONE = 3] = "STONE", e[e.LOTUS = 4] = "LOTUS", e[e.SWAN = 5] = "SWAN", e[e.AGISKEETER = 6] = "AGISKEETER", e[e.KUNKUNCHICKEN = 7] = "KUNKUNCHICKEN", e[e.PAINTED_1 = 8] = "PAINTED_1"
			}(n.NODE_TYPE || (n.NODE_TYPE = {})),
			function(e) {
				e[e.NONE = 0] = "NONE", e[e.LEFT = 1] = "LEFT", e[e.RIGHT = 2] = "RIGHT", e[e.UP = 3] = "UP", e[e.DOWN = 4] = "DOWN"
			}(n.NODE_TOWARDS || (n.NODE_TOWARDS = {})),
			function(e) {
				e[e.PROW_NORMAL = 0] = "PROW_NORMAL", e[e.PROW_STRETCH = 1] = "PROW_STRETCH", e[e.PROW_ING = 2] = "PROW_ING", e[e.PROW_BACK = 3] = "PROW_BACK"
			}(n.PROW_STATE || (n.PROW_STATE = {})),
			function(e) {
				e[e.NORMAL = 0] = "NORMAL", e[e.DOUBLE = 1] = "DOUBLE"
			}(n.NODE_STATE || (n.NODE_STATE = {})),
			function(e) {
				e[e.SKIN = 0] = "SKIN"
			}(n.SKIN_TYPE || (n.SKIN_TYPE = {})),
			function(e) {
				e[e.OBSTACLE = 0] = "OBSTACLE", e[e.DESTRUCTIBLE = 1] = "DESTRUCTIBLE", e[e.MOVEOBJ = 2] = "MOVEOBJ", e[e.NOTMOVEOBJ = 3] = "NOTMOVEOBJ", e[e.ROLEMOVEOBJ = 4] = "ROLEMOVEOBJ", e[e.ROLE = 5] = "ROLE", e[e.PIERCEOBJ = 6] = "PIERCEOBJ", e[e.PASS_LEVEL_OBJ = 7] = "PASS_LEVEL_OBJ", e[e.OBSTACLE_NOTMOVE_OBJ = 8] = "OBSTACLE_NOTMOVE_OBJ", e[e.IMPENETRABLE_OBJ = 9] = "IMPENETRABLE_OBJ"
			}(n.NODE_FLAG || (n.NODE_FLAG = {})),
			function(e) {
				e.UP = "UpBtn", e.DOWN = "DownBtn", e.LEFT = "LeftBtn", e.RIGHT = "RightBtn", e.RESTART = "RestartBtn"
			}(n.BTNTYPE || (n.BTNTYPE = {})),
			function(e) {
				e[e.RIGHT = 0] = "RIGHT", e[e.LEFT = 1] = "LEFT"
			}(n.INPUT_TYPE || (n.INPUT_TYPE = {})),
			function(e) {
				e[e.LEFT = 0] = "LEFT", e[e.RIGHT = 1] = "RIGHT", e[e.UP = 2] = "UP", e[e.DOWN = 3] = "DOWN", e[e.ATTACK = 4] = "ATTACK", e[e.STRETCH = 5] = "STRETCH", e[e.SHORTEN = 6] = "SHORTEN"
			}(n.OPERATION_TYPE || (n.OPERATION_TYPE = {})), cc._RF.pop()
	}, {}],
	Flotage: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "cc25eUbSSxKw5WoJhTJDqiT", "Flotage");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
			s = a.menu,
			c = a.ccclass,
			l = a.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.randTime = 2, t
				}
				return i(t, e), t.prototype.start = function() {
					var e = cc.tween(this.node).by(this.randTime, {
						y: -20
					}, {
						easing: cc.easing.smooth
					}).by(this.randTime, {
						y: 20
					}, {
						easing: cc.easing.smooth
					});
					cc.tween(this.node).repeatForever(e).start()
				}, r([l()], t.prototype, "randTime", void 0), r([c, s("hall物体/漂浮物")], t)
			}(cc.Component);
		n.default = u, cc._RF.pop()
	}, {}],
	Follow: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "92105w09rBJAI4tYSZgteAS", "Follow");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
			s = a.ccclass,
			c = a.property,
			l = a.menu,
			u = (a.disallowMultiple, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.target = null, t.old = !0, t.offset = null, t
				}
				return i(t, e), Object.defineProperty(t.prototype, "Target", {
					set: function(e) {
						this.target = e, this.offset = this.target.getPosition().sub(this.node.getPosition())
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.onLoad = function() {
					this.target && (this.offset = this.target.getPosition().sub(this.node.getPosition()))
				}, t.prototype.update = function() {
					this.target && (this.old ? this.node.setPosition(this.target.getPosition().add(this.offset)) : this.node.setPosition(this.target.getPosition().sub(this.offset)))
				}, r([c({
					type: cc.Node,
					displayName: "跟随者"
				})], t.prototype, "target", void 0), r([c({
					displayName: "是否老版"
				})], t.prototype, "old", void 0), r([s, l("工具组件/跟随")], t)
			}(cc.Component));
		n.default = u, cc._RF.pop()
	}, {}],
	GameObjSystem: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "731e9xONLVLfq6d+rj2mAyb", "GameObjSystem");
		var o, i = this && this.__extends || (o = function(e, t) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
				})(e, t)
		}, function(e, t) {
			function n() {
				this.constructor = e
			}
			o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
		});
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r = e("../../engines/gameEngine"),
			a = e("../Base/SystemBase"),
			s = e("../Enum"),
			c = e("../MainRoot"),
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.systemName = "游戏元素系统", t.plotNodePool = new cc.NodePool, t.stoneNodePool = new cc.NodePool, t.lotusNodePool = new cc.NodePool, t.skeeterNodePool = new cc.NodePool, t.roleNodePool = new cc.NodePool, t.swanNodePool = new cc.NodePool, t.tortoiseNodePool = new cc.NodePool, t.agiSkeeterNodePool = new cc.NodePool, t.kunKunChickenNodePool = new cc.NodePool, t.role_KunkunNodePool = new cc.NodePool, t.painted_1_NodePool = new cc.NodePool, t.sprayNodePool = new cc.NodePool, t.plotPrefab = null, t.stonePrefab = null, t.lotusPrefab = null, t.skeeterPrefab = null, t.rolePrefab = null, t.swanPrefab = null, t.tortoisePrefab = null, t.agiSkeeterPrefab = null, t.kunKunChickenPrefab = null, t.role_KunkunChickPrefab = null, t.painted_1_Prefab = null, t.sprayPrefab = null, t.prefabNames = ["GameObj/Role", "GameObj/Skeeter", "GameObj/Plot", "GameObj/Stone", "GameObj/Lotus", "GameObj/Swan", "GameObj/Tortoise", "GameObj/AgiSkeeter", "GameObj/KunkunChicken", "GameObj/Role_Kunkun", "GameObj/Painted_1", "GameObj/Spray"], t
				}
				return i(t, e), t.prototype.loadPrefabs = function() {
					var e = this;
					c.default.frameBundle.load(this.prefabNames, cc.Prefab, function(t, n) {
						t ? console.log("游戏预制体加载失败", JSON.stringify(t)) : (e.rolePrefab = n[0], e.skeeterPrefab = n[1], e.plotPrefab = n[2], e.stonePrefab = n[3], e.lotusPrefab = n[4], e.swanPrefab = n[5], e.tortoisePrefab = n[6], e.agiSkeeterPrefab = n[7], e.kunKunChickenPrefab = n[8], e.role_KunkunChickPrefab = n[9], e.painted_1_Prefab = n[10], e.sprayPrefab = n[11])
					})
				}, t.prototype.SystemInit = function() {
					e.prototype.SystemInit.call(this)
				}, t.prototype.getOneNode = function(e) {
					var t = null,
						n = null;
					switch (e) {
						case s.NODE_TYPE.ROLE:
							"Tortoise" == r.services().userSrv.GetUseSkin() ? (t = this.tortoiseNodePool, n = this.tortoisePrefab) : "KunKunChicken" == r.services().userSrv.GetUseSkin() ? (t = this.role_KunkunNodePool, n = this.role_KunkunChickPrefab) : (t = this.roleNodePool, n = this.rolePrefab);
							break;
						case s.NODE_TYPE.SKEETER:
							t = this.skeeterNodePool, n = this.skeeterPrefab;
							break;
						case s.NODE_TYPE.PLOT:
							t = this.plotNodePool, n = this.plotPrefab;
							break;
						case s.NODE_TYPE.STONE:
							t = this.stoneNodePool, n = this.stonePrefab;
							break;
						case s.NODE_TYPE.LOTUS:
							t = this.lotusNodePool, n = this.lotusPrefab;
							break;
						case s.NODE_TYPE.SWAN:
							t = this.swanNodePool, n = this.swanPrefab;
							break;
						case s.NODE_TYPE.AGISKEETER:
							t = this.agiSkeeterNodePool, n = this.agiSkeeterPrefab;
							break;
						case s.NODE_TYPE.KUNKUNCHICKEN:
							t = this.kunKunChickenNodePool, n = this.kunKunChickenPrefab;
							break;
						case s.NODE_TYPE.PAINTED_1:
							t = this.painted_1_NodePool, n = this.painted_1_Prefab;
							break;
						default:
							t = this.sprayNodePool, n = this.sprayPrefab
					}
					return t && t.size() > 0 ? t.get() : cc.instantiate(n)
				}, t.prototype.putOneNode = function(e, t) {
					switch (e) {
						case s.NODE_TYPE.ROLE:
							"Tortoise" == r.services().userSrv.GetUseSkin() ? this.tortoiseNodePool : "KunkunChicken" == r.services().userSrv.GetUseSkin() ? this.role_KunkunNodePool : this.roleNodePool;
							break;
						case s.NODE_TYPE.SKEETER:
							this.skeeterNodePool;
							break;
						case s.NODE_TYPE.PLOT:
							this.plotNodePool;
							break;
						case s.NODE_TYPE.STONE:
							this.stoneNodePool;
							break;
						case s.NODE_TYPE.LOTUS:
							this.lotusNodePool;
							break;
						case s.NODE_TYPE.SWAN:
							this.swanNodePool;
							break;
						case s.NODE_TYPE.AGISKEETER:
							this.agiSkeeterNodePool;
							break;
						case s.NODE_TYPE.KUNKUNCHICKEN:
							this.kunKunChickenNodePool;
							break;
						case s.NODE_TYPE.PAINTED_1:
							this.painted_1_NodePool;
							break;
						default:
							this.sprayNodePool
					}
					t.destroy(), t.removeFromParent()
				}, t.prototype.getOneFrogObjByType = function(e) {
					return c.default.ConfigSerive.GameObjMap[e]
				}, t.prototype.getOneFrogObjRederLevelByType = function(e) {
					return c.default.ConfigSerive.GameObjMap[e].rederLevel || 0
				}, t.prototype.getOneFrogObjLogicLevelByType = function(e) {
					return c.default.ConfigSerive.GameObjMap[e].logicLevel || 0
				}, t.prototype.getAnyFrogObjMAxLogicLevel = function(e) {
					for (var t = [], n = 0; n < e.length; n++) {
						var o = e[n].logicLevel;
						t.push(o)
					}
					return Math.max.apply(Math, t)
				}, t
			}(a.default);
		n.default = l, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine",
		"../Base/SystemBase": "SystemBase",
		"../Enum": "Enum",
		"../MainRoot": "MainRoot"
	}],
	GyroscopeMgr: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "1bc20ctx7ZHxY2esMDrK6cg", "GyroscopeMgr");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
			s = a.ccclass,
			c = (a.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return i(t, e), t.startGyroscope = function(e) {
					switch (cc.sys.platform) {
						case cc.sys.WECHAT_GAME_SUB:
						case cc.sys.WECHAT_GAME:
							window.wx.startGyroscope({
								interval: "game",
								success: function() {
									console.log("调用陀螺仪成功！")
								},
								fail: function() {
									console.log("调用陀螺仪失败！")
								},
								complete: function() {
									console.log("尝试调用陀螺仪！")
								}
							}), window.wx.onGyroscopeChange(function(t) {
								e && e(t)
							});
							break;
						case cc.sys.BYTEDANCE_GAME:
						case cc.sys.BYTEDANCE_GAME_SUB:
							window.tt.startGyroscope({
								interval: 20,
								success: function() {
									console.log("调用陀螺仪成功!")
								},
								fail: function(e) {
									console.log(e.errMsg, "调用陀螺仪失败！")
								},
								complete: function() {
									console.log("尝试调用陀螺仪！")
								}
							}), window.tt.onGyroscopeChange(function(t) {
								e && e(t)
							});
							break;
						case cc.sys.VIVO_GAME:
							break;
						case cc.sys.OPPO_GAME:
							window.qg.startGyroscope({
								interval: "game",
								success: function(e) {
									console.log(e)
								},
								fail: function(e) {
									console.log(e)
								},
								complete: function() {}
							});
							break;
						default:
							cc.sys.isNative || 3 == cc.sys.platform || 4 == cc.sys.platform || (this.GyoscopeFun = function(t) {
								var n = {};
								n.x = t.alpha, n.y = t.beta, n.z = t.gamma, e && e(n)
							}, window.addEventListener("deviceorientation", this.GyoscopeFun, !1))
					}
				}, t.stopGyroscope = function() {
					switch (cc.sys.platform) {
						case cc.sys.WECHAT_GAME_SUB:
						case cc.sys.WECHAT_GAME:
							window.wx.stopGyroscope({
								success: function() {
									console.log("停用陀螺仪成功！")
								},
								fail: function() {
									console.log("停用陀螺仪失败！")
								},
								complete: function() {
									console.log("尝试停用陀螺仪！")
								}
							}), window.wx.offGyroscopeChange();
							break;
						case cc.sys.BYTEDANCE_GAME:
						case cc.sys.BYTEDANCE_GAME_SUB:
							window.tt.stopGyroscope({
								success: function() {
									console.log("停用陀螺仪成功！")
								},
								fail: function() {
									console.log("停用陀螺仪失败！")
								},
								complete: function() {
									console.log("尝试停用陀螺仪！")
								}
							}), window.tt.offGyroscopeChange();
							break;
						case cc.sys.VIVO_GAME:
							break;
						case cc.sys.OPPO_GAME:
							window.qg.stopGyroscope({
								success: function(e) {
									console.log("陀螺仪停用成功", e)
								},
								fail: function(e) {
									console.log("陀螺仪停用失败", e)
								},
								complete: function() {
									console.log("尝试停用陀螺仪！")
								}
							}), window.qg.offGyroscopeChange();
							break;
						default:
							cc.sys.isNative || 3 == cc.sys.platform || 4 == cc.sys.platform || window.removeEventListener("deviceorientation", this.GyoscopeFun, !1)
					}
				}, t.GyoscopeFun = null, r([s], t)
			}(cc.Component));
		n.default = c, cc._RF.pop()
	}, {}],
	HallModeBtn: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "b733eiMujZIH4nGZgWBKRCc", "HallModeBtn");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/configs/gameConfig"),
			s = e("../../engines/gameEngine"),
			c = e("../../engines/managers/gameContent/gameMode_json"),
			l = e("../../Game/Enum"),
			u = e("../../Game/MainRoot"),
			d = cc._decorator,
			p = d.ccclass,
			f = d.property,
			h = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.modeType = c.GAME_MODE.NORMAL, t
				}
				return i(t, e), t.prototype.checkModeIsUnlock = function() {
					return s.default.getServices().userSrv.getModeUnlocked(this.modeType)
				}, t.prototype.onBtnMe = function() {
					if (this.checkModeIsUnlock()) {
						var e = {
							mode: this.modeType
						};
						u.default.UISystem.OpenPage(l.PAGE.LEVELMENU, e)
					} else {
						var t = {
							modeUnlock: a.default.MODE_LEVEL_COUNT[this.modeType],
							mode: this.modeType
						};
						u.default.UISystem.OpenPage(l.PAGE.MODEUNLOCKPAGE, t)
					}
				}, r([f({
					type: cc.Enum(c.GAME_MODE),
					displayName: "模式"
				})], t.prototype, "modeType", void 0), r([p], t)
			}(cc.Component);
		n.default = h, cc._RF.pop()
	}, {
		"../../Game/Enum": "Enum",
		"../../Game/MainRoot": "MainRoot",
		"../../engines/configs/gameConfig": "gameConfig",
		"../../engines/gameEngine": "gameEngine",
		"../../engines/managers/gameContent/gameMode_json": "gameMode_json"
	}],
	HintNode: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "6b3c58DDAhDMqF4xb6UK05K", "HintNode");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/gameEngine"),
			s = e("../../Game/Enum"),
			c = e("../../Game/MainRoot"),
			l = cc._decorator,
			u = l.ccclass,
			d = l.property,
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.ArrowNode = null, t.stretchNode = null, t.attackNode = null, t.attackArrowNode = null, t.attackStretchNode = null, t.role = null, t.tipsInfo = [], t.step = 0, t.nowOperation = null, t.isFail = !1, t.moveSteps = [], t.hintLbs = ["Nếu bạn không nghe những gì con ếch nói, bạn sẽ gặp bất lợi!", "Hãy nhìn tín hiệu! Hãy nhìn tín hiệu!", "Có lẽ bạn có ý tưởng hay hơn?", "Đừng di chuyển xung quanh, này!", "Bạn nghĩ rằng bạn có thể làm điều đó một lần nữa!", "Đó là thời kỳ nổi loạn ???", "Vậy thì bạn không thể tin tưởng tôi", "À, vâng, vâng, bạn đang ở trên đi đúng hướng", "Nếu không có tai nạn thì bây giờ phải là tai nạn rồi", "Tới&!! Ý tôi là ĐI&!!!"], t.stretchLbs = ["Nhấn lâu! Nhấn lâu! Tôi sẽ cho bạn nhấn lâu và thè lưỡi!", "Lưỡi của bạn cần được nhấn và kéo dài theo hướng.", "Nhấn lâu và thè lưỡi rồi nhấn hướng! "], t
				}
				return i(t, e), t.prototype.bindDate = function(e, t) {
					this.role = e, this.tipsInfo = t, this.showGuidance(), a.default.on(s.GAME_EVENT.HINTATTACKUP, this.onAttackUp.bind(this), this)
				}, t.prototype.showGuidance = function() {
					if (this.step >= this.tipsInfo.length) this.node.active = !1;
					else {
						this.nowOperation = this.tipsInfo[this.step], this.ArrowNode.active = !1, this.stretchNode.active = !1, this.attackNode.active = !1;
						var e = c.default.LevelSystem.ItemSize,
							t = (this.role.Pos, 0),
							n = 0,
							o = this.role.Tworads;
						switch (this.nowOperation) {
							case s.OPERATION_TYPE.LEFT:
								this.ArrowNode.active = !0, this.ArrowNode.angle = 0, t = -1;
								break;
							case s.OPERATION_TYPE.RIGHT:
								this.ArrowNode.active = !0, this.ArrowNode.angle = 180, t = 1;
								break;
							case s.OPERATION_TYPE.UP:
								this.ArrowNode.active = !0, this.ArrowNode.angle = -90, n = 1;
								break;
							case s.OPERATION_TYPE.DOWN:
								this.ArrowNode.active = !0, this.ArrowNode.angle = 90, n = -1;
								break;
							case s.OPERATION_TYPE.ATTACK:
								switch (this.attackNode.active = !0, o) {
									case s.NODE_TOWARDS.LEFT:
									case s.NODE_TOWARDS.RIGHT:
										t = 1;
										break;
									case s.NODE_TOWARDS.UP:
										n = 1;
										break;
									case s.NODE_TOWARDS.DOWN:
										n = -1
								}
								break;
							case s.OPERATION_TYPE.STRETCH:
								switch (this.stretchNode.active = !0, o) {
									case s.NODE_TOWARDS.LEFT:
										t = 1, this.attackArrowNode.angle = 180;
										break;
									case s.NODE_TOWARDS.RIGHT:
										this.attackArrowNode.angle = 0, t = -1;
										break;
									case s.NODE_TOWARDS.UP:
										n = 1, this.attackArrowNode.angle = 90;
										break;
									case s.NODE_TOWARDS.DOWN:
										n = -1, this.attackArrowNode.angle = -90
								}
								break;
							case s.OPERATION_TYPE.SHORTEN:
								switch (this.stretchNode.active = !0, o) {
									case s.NODE_TOWARDS.LEFT:
										t = -1, this.attackArrowNode.angle = 0;
										break;
									case s.NODE_TOWARDS.RIGHT:
										t = 1, this.attackArrowNode.angle = 180;
										break;
									case s.NODE_TOWARDS.UP:
										n = 1, this.attackArrowNode.angle = -90;
										break;
									case s.NODE_TOWARDS.DOWN:
										n = -1, this.attackArrowNode.angle = 90
								}
						}
						var i = cc.v2(e * t, e * n);
						this.stretchNode.active && (this.tipsInfo[this.step - 1] == s.OPERATION_TYPE.STRETCH ? (this.attackStretchNode.active = !1, this.attackArrowNode.active = !0) : (this.attackStretchNode.active = !0, this.attackArrowNode.active = !1)), this.node.setPosition(i.x, i.y)
					}
				}, t.prototype.setGuidance = function(e) {
					if (this.node.active && !this.isFail && c.default.GotTips)
						if (this.nowOperation == s.OPERATION_TYPE.ATTACK || this.nowOperation == s.OPERATION_TYPE.STRETCH) e != s.OPERATION_TYPE.ATTACK && e != s.OPERATION_TYPE.STRETCH ? (this.isFail = !0, a.default.getModules().uiControlModule.showMessageBox(this.stretchLbs[Math.floor(Math.random() * this.stretchLbs.length)]), this.node.active = !1) : (this.nowOperation == s.OPERATION_TYPE.STRETCH && e == s.OPERATION_TYPE.ATTACK && (this.attackStretchNode.active = !1, this.attackArrowNode.active = !0), e == this.nowOperation && (this.step++, this.showGuidance()));
						else if (e == this.nowOperation) this.step++, this.showGuidance();
					else {
						this.isFail = !0, this.node.active = !1;
						var t = this.hintLbs[Math.floor(Math.random() * this.hintLbs.length)];
						switch (e) {
							case s.OPERATION_TYPE.LEFT:
								t = (t = t.replace("&", "左")).replace("&", "左");
								break;
							case s.OPERATION_TYPE.RIGHT:
								t = (t = t.replace("&", "右")).replace("&", "右");
								break;
							case s.OPERATION_TYPE.UP:
								t = (t = t.replace("&", "上")).replace("&", "上");
								break;
							case s.OPERATION_TYPE.DOWN:
								t = (t = t.replace("&", "下")).replace("&", "下")
						}
						a.default.getModules().uiControlModule.showMessageBox(t)
					}
				}, t.prototype.onAttackUp = function() {
					this.nowOperation == s.OPERATION_TYPE.STRETCH && (this.attackStretchNode.active = !0, this.attackArrowNode.active = !1)
				}, r([d({
					type: cc.Node,
					displayName: "箭头图片"
				})], t.prototype, "ArrowNode", void 0), r([d({
					type: cc.Node,
					displayName: "拉伸图片"
				})], t.prototype, "stretchNode", void 0), r([d({
					type: cc.Node,
					displayName: "攻击图片"
				})], t.prototype, "attackNode", void 0), r([d({
					type: cc.Node,
					displayName: "拉长的箭头节点"
				})], t.prototype, "attackArrowNode", void 0), r([d({
					type: cc.Node,
					displayName: "拉伸攻击图片"
				})], t.prototype, "attackStretchNode", void 0), r([u], t)
			}(cc.Component);
		n.default = p, cc._RF.pop()
	}, {
		"../../Game/Enum": "Enum",
		"../../Game/MainRoot": "MainRoot",
		"../../engines/gameEngine": "gameEngine"
	}],
	InGamePage: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "145fdzx9XVI2J5NPrBUEpwb", "InGamePage");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			},
			a = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			s = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var c = e("../../engines/configs/gameConfig"),
			l = e("../../engines/gameEngine"),
			u = e("../../engines/services/userContent/userInterface"),
			d = e("../Base/PageBase"),
			p = e("../Enum"),
			f = e("../MainRoot"),
			h = cc._decorator,
			m = h.ccclass,
			y = h.property,
			g = h.menu,
			_ = h.disallowMultiple,
			v = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.tipsShow = null, t.levelShow = null, t.adIcon = null, t.titleKuang = null, t.gudianceNode = null, t.levelInfo = null, t.prowChangeNode = null, t
				}
				return i(t, e), t.prototype.OnPageOpen = function(t) {
					return a(this, void 0, void 0, function() {
						var n, o;
						return s(this, function() {
							return e.prototype.OnPageOpen.call(this, t), this.m_mode = t.mode, this.OnTipsGot(), n = f.default.LevelSystem.GetCurrLevel(t.mode), this.tipsShow.string = "Level " + n /* + "关" */, this.levelShow.string = f.default.LevelSystem.GetCurrLevel(this.m_mode).toString(), this.levelInfo = t.levelInfo, null != (o = this.levelInfo.guidanceType) && (this.gudianceNode.children[o].active = !0), [2]
						})
					})
				}, t.prototype.onLoad = function() {
					l.default.on(p.GAME_EVENT.ON_TIPS_GOT, this.onGetTip.bind(this)), l.default.on(p.GAME_EVENT.PROW_LENGTH_CHANGE, this.onProwLengthChange.bind(this), this), l.default.on(p.GAME_EVENT.CHANGEDOUBLE, this.changeDouble.bind(this), this)
				}, t.prototype.onProwLengthChange = function(e) {
					var t = this.prowChangeNode.getChildByName("prowNormal").getChildByName("prowCount").getComponent(cc.Label),
						n = this.prowChangeNode.getChildByName("prowDouble").getChildByName("prowCount_1").getComponent(cc.Label),
						o = this.prowChangeNode.getChildByName("prowDouble").getChildByName("prowCount_2").getComponent(cc.Label);
					t.string = (e + 1).toString(), n.string = (e + 1).toString(), o.string = (e + 1).toString(), this.prowChangeAni()
				}, t.prototype.prowChangeAni = function() {
					cc.tween(this.prowChangeNode).to(.2, {
						scale: 1.3
					}, {
						easing: cc.easing.backOut
					}).to(.2, {
						scale: 1
					}).start()
				}, t.prototype.changeDouble = function() {
					var e = this.prowChangeNode.getChildByName("prowNormal"),
						t = this.prowChangeNode.getChildByName("prowDouble");
					e.active = !1, t.active = !0
				}, t.prototype.start = function() {
					this.titleKuangOpen()
				}, t.prototype.onGetTip = function() {
					f.default.GotTips = !0
				}, t.prototype.titleKuangOpen = function() {
					var e = this.tipsShow.string.length * this.tipsShow.fontSize;
					cc.tween(this.titleKuang).to(.5, {
						width: e + 30
					}).start()
				}, t.prototype.OnRestartBtn = function() {
					l.default.getManagers().soundMgr.playSound("anNiu").then(), l.default.getServices().userSrv.getPower() - c.default.MODE_POWER[0] < 0 ? f.default.UIModel.showUserPropGet(u.REWARD_TYPE.POWER, c.default.ADD_ONCE_POWER) : (f.default.LevelSystem.LoadLevel(f.default.LevelSystem.GetSignleLevelInfo(this.m_mode).bundleName, this.m_mode), f.default.UISystem.CloseAllPage(), l.services().userSrv.setPower(-c.default.MODE_POWER[this.m_mode], !0, !0))
				}, t.prototype.OnOpenPauseBtn = function() {
					l.default.getManagers().soundMgr.playSound("anNiu").then(), f.default.UISystem.OpenPage(p.PAGE.PAUSEPAGE)
				}, t.prototype.OnTipsBtn = function() {
					return a(this, void 0, void 0, function() {
						var e = this;
						return s(this, function() {
							return l.default.getManagers().soundMgr.playSound("anNiu").then(), f.default.GotTips || l.services().miniGameSrv.getAppApiInstance().loadAndShowVideoAd(function() {
								return a(e, void 0, void 0, function() {
									var e, t;
									return s(this, function() {
										return l.default.emit(p.GAME_EVENT.ON_BTN_TIPS), this.ClosePage(), e = this.m_mode, t = f.default.LevelSystem.GetSignleLevelInfo(e).bundleName, f.default.LevelSystem.LoadLevel(t, e), f.default.GotTips = !0, [2]
									})
								})
							}, function() {}, null, "观看视频获得提示"), [2]
						})
					})
				}, t.prototype.OnTipsGot = function() {
					this.adIcon.active = !f.default.GotTips
				}, t.prototype.OnNextLevelBtn = function() {
					var e = this;
					l.default.getManagers().soundMgr.playSound("anNiu").then(), cc.director.pause(), l.services().miniGameSrv.getAppApiInstance().loadAndShowVideoAd(function() {
						return a(e, void 0, void 0, function() {
							return s(this, function(e) {
								switch (e.label) {
									case 0:
										return f.default.GotTips = !1, f.default.LevelSystem.AddLevel(this.m_mode), this.ClosePage(), [4, f.default.LevelSystem.LoadLevel(f.default.LevelSystem.GetSignleLevelInfo(this.m_mode).bundleName, this.m_mode)];
									case 1:
										return e.sent(), cc.director.resume(), f.default.UISystem.ClosePage(p.PAGE.WINPAGE), [2]
								}
							})
						})
					}, function() {
						cc.director.resume()
					}, function() {
						cc.director.resume()
					}, "看视频跳关")
				}, r([y({
					type: cc.Label,
					displayName: "提示显示"
				})], t.prototype, "tipsShow", void 0), r([y({
					type: cc.Label,
					displayName: "关卡数显示"
				})], t.prototype, "levelShow", void 0), r([y({
					type: cc.Node,
					displayName: "广告标识"
				})], t.prototype, "adIcon", void 0), r([y({
					type: cc.Node,
					displayName: "标题外框"
				})], t.prototype, "titleKuang", void 0), r([y({
					type: cc.Node,
					displayName: "引导节点"
				})], t.prototype, "gudianceNode", void 0), r([y({
					type: cc.Node,
					displayName: "舌头长度节点"
				})], t.prototype, "prowChangeNode", void 0), r([m, _, g("游戏页面/游戏中页面")], t)
			}(d.default);
		n.default = v, cc._RF.pop()
	}, {
		"../../engines/configs/gameConfig": "gameConfig",
		"../../engines/gameEngine": "gameEngine",
		"../../engines/services/userContent/userInterface": "userInterface",
		"../Base/PageBase": "PageBase",
		"../Enum": "Enum",
		"../MainRoot": "MainRoot"
	}],
	InputSystem: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "cc8bfw3SvNHEoa/PmJH8FbE", "InputSystem");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			a = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = e("../../engines/gameEngine"),
			c = e("../Base/SystemBase"),
			l = e("../Enum"),
			u = e("../MainRoot"),
			d = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.systemName = "输入系统", t.m_inputSwitch = !0, t.inputTypeSave = "input_inputTypeSave", t.m_inputType = l.INPUT_TYPE.RIGHT, t
				}
				return i(t, e), Object.defineProperty(t.prototype, "enableInput", {
					get: function() {
						return this.m_inputSwitch
					},
					set: function(e) {
						this.m_inputSwitch = e
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "InputType", {
					get: function() {
						return this.m_inputType
					},
					set: function(e) {
						this.m_inputType = e, this.Log("设置为", e), s.services().localStorageSrv.setStorage(this.inputTypeSave, this.m_inputType)
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.SystemInit = function() {
					e.prototype.SystemInit.call(this);
					var t = s.services().localStorageSrv.getStorage(this.inputTypeSave);
					t && (this.m_inputType = Number(t)), this.Log("初始化完成")
				}, t.prototype.OnLevelChange = function() {
					this.enableInput = !0
				}, t.prototype.OnOnceDown = function(e) {
					return r(this, void 0, void 0, function() {
						return a(this, function() {
							return u.default.gameEnd ? [2] : this.enableInput ? e.mag() < .01 ? [2] : (e.x + "_" + e.y, [2]) : [2]
						})
					})
				}, t.prototype.OnDirLongDown = function() {
					return r(this, void 0, void 0, function() {
						return a(this, function() {
							return [2]
						})
					})
				}, t
			}(c.default);
		n.default = d, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine",
		"../Base/SystemBase": "SystemBase",
		"../Enum": "Enum",
		"../MainRoot": "MainRoot"
	}],
	Interface: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "99871KIxUtBA5EaeIlq90Ji", "Interface"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), cc._RF.pop()
	}, {}],
	Ipha_SimpleAni_icon: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "7718eZi1ndFT62S91GZqVkQ", "Ipha_SimpleAni_icon");
		var o, i, r = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			a = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
				value: !0
			}),
			function(e) {
				e[e.NULL = 0] = "NULL", e[e.SLIGHT_WAGGLE = 1] = "SLIGHT_WAGGLE", e[e.SCALE = 2] = "SCALE"
			}(i || (i = {}));
		var s = cc._decorator,
			c = s.ccclass,
			l = s.property,
			u = s.menu,
			d = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.aniType = i.NULL, t.isAutoStart = !0, t.isLoop = !0, t._scaleDelay = 1, t._scaleSpeed = .3, t._xScaleMax = .1, t._xScaleMin = .1, t._yScaleMax = .1, t._yScaleMin = .1, t.repeatCnt = 0, t.tag = 1001, t
				}
				return r(t, e), t.prototype.start = function() {
					this.isAutoStart && this.playAni()
				}, t.prototype.playAni = function() {
					this.aniType != i.NULL && this.aniList()[this.aniType]()
				}, t.prototype.aniList = function() {
					return [null, this.slightWaggle.bind(this), this.scale.bind(this)]
				}, t.prototype.slightWaggle = function() {
					this.isLoop ? cc.tween(this.node).tag(this.tag).sequence(cc.tween().to(.1, {
						angle: 5
					}).to(.1, {
						angle: -5
					}), cc.tween().to(.1, {
						angle: 5
					}).to(.1, {
						angle: -5
					})).repeatForever().start() : (this.repeatCnt = this.repeatCnt ? this.repeatCnt : 1, cc.tween(this.node).tag(this.tag).sequence(cc.tween().to(.1, {
						angle: 5
					}).to(.1, {
						angle: -5
					}), cc.tween().to(.1, {
						angle: 5
					}).to(.1, {
						angle: -5
					})).repeat(this.repeatCnt).start())
				}, t.prototype.scale = function() {
					var e = this.node.scaleX,
						t = this.node.scaleY;
					this.isLoop ? cc.tween(this.node).sequence(cc.tween().to(this._scaleSpeed, {
						scaleX: e + this._xScaleMax,
						scaleY: t + this._yScaleMax
					}), cc.tween().to(this._scaleSpeed, {
						scaleX: e - this._xScaleMin,
						scaleY: t - this._yScaleMin
					}).delay(this._scaleDelay)).repeatForever().start() : cc.tween(this.node).sequence(cc.tween().to(this._scaleSpeed, {
						scaleX: e + this._xScaleMax,
						scaleY: t + this._yScaleMax
					}), cc.tween().to(this._scaleSpeed, {
						scaleX: e - this._xScaleMin,
						scaleY: t - this._yScaleMin
					})).repeat(this.repeatCnt).start()
				}, t.prototype.stopAni = function() {
					this.node.stopActionByTag(this.tag)
				}, a([l({
					type: cc.Enum(i),
					displayName: "动画类型",
					tooltip: "空\n        轻微左右晃动\n        呼吸缩放"
				})], t.prototype, "aniType", void 0), a([l({
					displayName: "自动开始"
				})], t.prototype, "isAutoStart", void 0), a([l({
					displayName: "是否循环播放",
					visible: function() {
						return this.aniType == i.SLIGHT_WAGGLE || this.aniType == i.SCALE
					}
				})], t.prototype, "isLoop", void 0), a([l({
					displayName: "呼吸缩放 延迟",
					visible: function() {
						return this.aniType == i.SCALE
					}
				})], t.prototype, "_scaleDelay", void 0), a([l({
					displayName: "呼吸缩放 速度",
					visible: function() {
						return this.aniType == i.SCALE
					}
				})], t.prototype, "_scaleSpeed", void 0), a([l({
					displayName: "横轴缩放MAX",
					visible: function() {
						return this.aniType == i.SCALE
					}
				})], t.prototype, "_xScaleMax", void 0), a([l({
					displayName: "横轴缩放MIN",
					visible: function() {
						return this.aniType == i.SCALE
					}
				})], t.prototype, "_xScaleMin", void 0), a([l({
					displayName: "竖轴缩放MAX",
					visible: function() {
						return this.aniType == i.SCALE
					}
				})], t.prototype, "_yScaleMax", void 0), a([l({
					displayName: "竖轴缩放MIN",
					visible: function() {
						return this.aniType == i.SCALE
					}
				})], t.prototype, "_yScaleMin", void 0), a([l({
					displayName: "循环次数",
					visible: function() {
						return !this.isLoop
					}
				})], t.prototype, "repeatCnt", void 0), a([c, u("ipha/slimpleAni_icon")], t)
			}(cc.Component);
		n.default = d, cc._RF.pop()
	}, {}],
	KunkunChicken: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "7ac33qt9qZFy4sKckN0/VXn", "KunkunChicken");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/components/comSpSkeleton"),
			s = e("../../Game/Enum"),
			c = e("../../Game/MainRoot"),
			l = e("../GameObj/ObjBase"),
			u = e("./AgiSkeeter"),
			d = e("./Role"),
			p = cc._decorator,
			f = p.menu,
			h = p.ccclass,
			m = p.property,
			y = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.SprayAni = null, t.isDrop = !1, t
				}
				return i(t, e), t.prototype.beAttack = function(e, t, n, o, i) {
					if (!e) {
						if (this.windWire) switch (t) {
							case s.NODE_TOWARDS.LEFT:
								this.windWire.x = 30, this.windWire.y = 20, this.windWire.angle = 0;
								break;
							case s.NODE_TOWARDS.RIGHT:
								this.windWire.x = -15, this.windWire.y = 20, this.windWire.angle = 0;
								break;
							case s.NODE_TOWARDS.UP:
								this.windWire.x = 0, this.windWire.y = 0, this.windWire.angle = -90;
								break;
							case s.NODE_TOWARDS.DOWN:
								this.windWire.x = 0, this.windWire.y = 45, this.windWire.angle = 90
						}
						var r = this.getMePosInArr(i),
							a = -1;
						if (r > -1 && (a = r + 1), a > -1) {
							var c = !1;
							a >= i.length - 1 && (c = !0), this.moveToPoints(i[a], c) || (n && n instanceof d.default && n.setDeathSkeeter(t, o, this.objSk.skeletonData), this.Cell.removeOneNode(this.node, function() {}))
						} else n && n instanceof d.default && n.setDeathSkeeter(t, o, this.objSk.skeletonData), this.Cell.removeOneNode(this.node, function() {})
					}
				}, t.prototype.moveToPoints = function(e, t) {
					var n = this;
					if (this.Cell.getPointSpecificFlagObjs(e, s.NODE_FLAG.OBSTACLE)) return !1;
					if (this.isDrop) return !0;
					var o = c.default.LevelSystem.getPosByFrogPoint(e),
						i = this.Cell.checkCanChangeNodeToPoint(e);
					if (i) {
						this.Cell.changeNodeToPoint(this.node, e);
						for (var r = this.Cell.getNodeByFrogPoint(this.Pos), a = !0, u = 0; u < r.length; u++) {
							var d = r[u].getComponent(l.default);
							d.Type != s.NODE_TYPE.LOTUS && d.Type != s.NODE_TYPE.PLOT || (a = !1)
						}
						a && (this.isDrop = !0, this.Cell.removeOneNode(this.node, function() {}, !1), this.Cell.LevelCtrl.Lose(2)), this.windWire.active = !0, cc.Tween.stopAllByTarget(this.node), cc.tween(this.node).to(.1, {
							position: o
						}).call(function() {
							t && (n.windWire.active = !1), n.isDrop && (n.windWire.active = !1, cc.tween(n.objSk.node).to(.1, {
								y: 25
							}, {
								easing: cc.easing.backOut
							}).to(.3, {
								y: -50
							}, {
								easing: cc.easing.backIn
							}).call(function() {
								n.objSk.node.active = !1
							}).start(), n.scheduleOnce(function() {
								n.Cell.LevelCtrl.addOneSpray(n.node)
							}, .3))
						}).start()
					} else this.windWire.active = !1;
					return i
				}, r([m({
					type: a.default,
					displayName: "水花动画"
				})], t.prototype, "SprayAni", void 0), r([h, f("游戏单位/坤坤鸡")], t)
			}(u.default);
		n.default = y, cc._RF.pop()
	}, {
		"../../Game/Enum": "Enum",
		"../../Game/MainRoot": "MainRoot",
		"../../engines/components/comSpSkeleton": "comSpSkeleton",
		"../GameObj/ObjBase": "ObjBase",
		"./AgiSkeeter": "AgiSkeeter",
		"./Role": "Role"
	}],
	LevelBase: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "7d4eegx+ZRMBJhrh9HYejy4", "LevelBase");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			},
			a = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			s = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var c = e("../../engines/components/comSpSkeleton"),
			l = e("../../engines/gameEngine"),
			u = e("../../engines/managers/gameContent/gameMode_json"),
			d = e("../../MyGameScript/Ctrl/CellCtrl"),
			p = e("../../MyGameScript/GameObj/ObjBase"),
			f = e("../Enum"),
			h = e("../MainRoot"),
			m = cc._decorator,
			y = m.menu,
			g = m.ccclass,
			_ = m.property,
			v = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.levelInfo = null, t.title = null, t.tips = [], t.hadEnd = !1, t.m_mode = u.GAME_MODE.NORMAL, t.roleNode = null, t.mainCamera = null, t.hintCamera = null, t.outLineCamera = null, t.outLineCamera1 = null, t.outLineCamera2 = null, t.outLineTex = null, t.outLineTex1 = null, t.outLineTex2 = null, t.waterShockP = null, t.m_map = null, t.dyPrefab = null, t.shaowNode = null, t.addAni = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					var e, t;
					l.default.on(f.GAME_EVENT.ROLEMOVE_DOWN, this.onRoleMove.bind(this), this), l.default.on(f.GAME_EVENT.ROLEATTACKDOWN, this.onRoleAttackDown.bind(this), this), l.default.on(f.GAME_EVENT.ROLEATTACKUP, this.onRoleAttackUp.bind(this), this), this.outLineTex && ((e = new cc.RenderTexture).initWithSize(cc.winSize.width, cc.winSize.height), (t = new cc.SpriteFrame).setTexture(e), this.outLineTex.spriteFrame = t, this.outLineCamera.targetTexture = e), this.outLineTex1 && ((e = new cc.RenderTexture).initWithSize(cc.winSize.width, cc.winSize.height), (t = new cc.SpriteFrame).setTexture(e), this.outLineTex1.spriteFrame = t, this.outLineCamera1.targetTexture = e), this.outLineTex2 && ((e = new cc.RenderTexture).initWithSize(cc.winSize.width, cc.winSize.height), (t = new cc.SpriteFrame).setTexture(e), this.outLineTex2.spriteFrame = t, this.outLineCamera2.targetTexture = e)
				}, t.prototype.Init = function(e) {
					return a(this, void 0, void 0, function() {
						var t;
						return s(this, function(n) {
							switch (n.label) {
								case 0:
									return this.levelInfo = e, this.m_mode = e.mode, this.tips = e.tipsInfo, console.warn("关卡初始化", this.levelInfo), t = {
										mode: this.m_mode,
										title: "",
										levelInfo: e,
										tipsInfo: e.tipsInfo
									}, [4, this.loadLevel()];
								case 1:
									return n.sent(), [4, h.default.UISystem.OpenPage(f.PAGE.INGAMEPAGE, t, this)];
								case 2:
									return n.sent(), [2]
							}
						})
					})
				}, t.prototype.start = function() {
					var e = this.node.getChildByName("GuangGuang");
					cc.tween(e).to(2.5, {
						opacity: 0
					}).call(function() {
						e.active = !1
					}).start()
				}, t.prototype.OnTips = function() {
					this.roleNode.getComponent(p.default).startHint()
				}, t.prototype.OffTouchMove = function(e, t) {
					switch (t) {
						case cc.Node.EventType.TOUCH_MOVE:
							e.off(cc.Node.EventType.TOUCH_MOVE);
							break;
						case cc.Node.EventType.TOUCH_END:
						case cc.Node.EventType.TOUCH_CANCEL:
							e.off(cc.Node.EventType.TOUCH_END), e.off(cc.Node.EventType.TOUCH_CANCEL);
							break;
						default:
							e.off(cc.Node.EventType.TOUCH_MOVE), e.off(cc.Node.EventType.TOUCH_END), e.off(cc.Node.EventType.TOUCH_CANCEL)
					}
				}, t.prototype.RegisterTouchMove = function(e, t, n) {
					var o = cc.v2(),
						i = cc.v2(),
						r = 1,
						a = function(e) {
							r = 1, n && n(e)
						};
					e.on(cc.Node.EventType.TOUCH_MOVE, function(n) {
						var a = null,
							s = n.getTouches();
						if (o = s[0].getLocation().sub(s[0].getStartLocation()), s.length < 2) t(f.TOUCH_TYPE.SINGLE, o, s[0].getDelta(), e, n);
						else {
							i = s[1].getLocation().sub(s[1].getStartLocation());
							var c = o.dot(i) / (o.mag() * i.mag());
							if (c > .5 && c <= 1) t(f.TOUCH_TYPE.DOUBLE_SLIDER, i, s[0].getDelta().scale(cc.v2(.8, .8)), e, n);
							else {
								a = s[0].getStartLocation().sub(s[1].getStartLocation());
								var l = s[0].getLocation().sub(s[1].getLocation()).mag() / a.mag();
								t(f.TOUCH_TYPE.DOUBLE_ZOOM, cc.v2(l, l), cc.v2(l - r, l - r), e, n), r = l
							}
						}
					}, this), e.on(cc.Node.EventType.TOUCH_END, a, this), e.on(cc.Node.EventType.TOUCH_CANCEL, a, this)
				}, t.prototype.loadLevel = function() {
					return a(this, void 0, void 0, function() {
						var e, t, n, o, i, r, a, c, u, d, m, y, g, _, v, b, O, w, P, S, C, E, N, A, M, R, L, T, x, k, I, D, B, j = this;
						return s(this, function(z) {
							switch (z.label) {
								case 0:
									for (this.createMap(), e = this.levelInfo.mapInfo, t = this.levelInfo.roleTwoard, n = e.length, o = h.default.LevelSystem.MapSize, i = [], r = new Array(o.row).fill(0), a = new Array(o.col).fill(0), B = 0; B < n; B++)
										for (c = e[B], u = c.split("&"), d = 0; d < u.length; d++) m = u[d], y = m.split("-"), g = Number(y[0]), _ = Number(y[1]), "" == m || isNaN(g) || (v = Math.floor(B % o.row), b = Math.floor(B / o.row), O = b, r[v]++, a[O]++, w = h.default.GameObjSystem.getOneFrogObjByType(g), isNaN(_) && (_ = null), P = {
											row: v,
											col: O,
											frogObj: w,
											group: _
										}, i.push(P));
									for (S = 0, C = 0, E = r.length, B = 0; B < E && (r[B] > 0 && 0 == S && (S = B), r[E - (B + 1)] > 0 && 0 == C && (C = E - (B + 1)), 0 == S || 0 == C); B++);
									for (N = C - S, A = 0, M = 0, R = a.length, B = 0; B < R && (a[B] > 0 && 0 == A && (A = B), a[R - (B + 1)] > 0 && 0 == M && (M = R - (B + 1)), 0 == A || 0 == M); B++);
									N <= (L = M - A) ? o.col : o.row, T = h.default.LevelSystem.ItemSize, x = (l.default.Canvas().width - 120) / (T * (N + 1)), k = (l.default.Canvas().height - 120) / (T * (L + 1)), I = x < k ? x : k, I = Math.max(1, I), I = Math.min(I, 1.35), this.mainCamera.zoomRatio = I, this.hintCamera.zoomRatio = I, i.sort(function(e, t) {
										return h.default.GameObjSystem.getOneFrogObjRederLevelByType(e.frogObj.type) - h.default.GameObjSystem.getOneFrogObjRederLevelByType(t.frogObj.type)
									}), D = function(e) {
										return s(this, function(n) {
											switch (n.label) {
												case 0:
													return [4, new Promise(function(n) {
														var o = i[e],
															r = o.frogObj,
															a = o.row,
															s = o.col,
															c = o.group,
															l = h.default.GameObjSystem.getOneNode(r.type),
															u = h.default.LevelSystem.getPosByFrogPoint({
																row: a,
																col: s
															});
														j.node.addChild(l), l.setPosition(u), l.zIndex = 1e3 * r.zindexLevel + 999 - e;
														var d = {
															row: a,
															col: s
														};
														j.Map.addOneNode(d, l), j.Map.addOneNodeGroups(c, l);
														var m = l.getComponent(p.default);
														if (r.type == f.NODE_TYPE.PLOT) {
															var y = cc.instantiate(j.dyPrefab);
															j.shaowNode.addChild(y), y.setPosition(u)
														}
														if (m.Pos = d, m.bindInitData(r), m.Cell = j.Map, e == i.length - 1) {
															j.roleNode = l;
															var g = l.getComponent(p.default);
															g.Tworads = t, g.EndTworad = t
														}
														j.scheduleOnce(n)
													})];
												case 1:
													return n.sent(), [2]
											}
										})
									}, B = 0, z.label = 1;
								case 1:
									return B < i.length ? [5, D(B)] : [3, 4];
								case 2:
									z.sent(), z.label = 3;
								case 3:
									return B++, [3, 1];
								case 4:
									return h.default.GotTips && this.OnTips(), this.Map.initCellObjs(), [2]
							}
						})
					})
				}, t.prototype.Win = function(e) {
					var t = this;
					if (!this.hadEnd) {
						this.hadEnd = !0, h.default.UISystem.ClosePage(f.PAGE.TIPSPAGE);
						var n = 3.5;
						e && (n = e), this.scheduleOnce(function() {
							return a(t, void 0, void 0, function() {
								var e;
								return s(this, function(t) {
									switch (t.label) {
										case 0:
											return l.managers().soundMgr.playSound("win"), e = {
												mode: this.m_mode,
												winText: "",
												index: this.levelInfo.level
											}, this.m_mode == u.GAME_MODE.PAINTED_1 && this.levelInfo.level >= h.default.LevelSystem.GetMaxLevel(this.m_mode) && !l.default.getServices().userSrv.getSkinUnlocked("KunKunChicken") ? [3, 3] : [3, 1];
										case 1:
											return [4, h.default.UISystem.OpenPage(f.PAGE.WINPAGE, e)];
										case 2:
											t.sent(), t.label = 3;
										case 3:
											return h.default.LevelSystem.AddLevel(this.m_mode), l.services().userSrv.unlockLevelSkin(this.levelInfo.level), l.services().userSrv.initUnlockMode(this.levelInfo.level), h.default.GotTips = !1, [2]
									}
								})
							})
						}, n)
					}
				}, t.prototype.Lose = function(e) {
					var t = this;
					if (!this.hadEnd) {
						this.hadEnd = !0;
						var n = 2;
						e && (n = e), this.scheduleOnce(function() {
							var e = {
								mode: t.m_mode,
								index: t.levelInfo.level,
								loseText: "",
								tipsInfo: []
							};
							h.default.UISystem.OpenPage(f.PAGE.LOSEPAGE, e)
						}, n)
					}
				}, t.prototype.getHasEndGame = function() {
					return this.hadEnd
				}, t.prototype.ShowObj = function(e, t) {
					var n = this;
					return new Promise(function(o) {
						h.default.frameBundle.load("Obj/" + e, function(e, i) {
							return a(n, void 0, void 0, function() {
								var n;
								return s(this, function(r) {
									switch (r.label) {
										case 0:
											return e ? (console.error(e), [2]) : ((n = cc.instantiate(i)) && (this.node && this.node.addChild(n), n.scale = .1, cc.tween(n).to(.3, {
												scale: 1
											}, {
												easing: "backOut"
											}).start()), t ? [4, t(n)] : [3, 2]);
										case 1:
											r.sent(), r.label = 2;
										case 2:
											return o(n), [2]
									}
								})
							})
						})
					})
				}, t.prototype.createMap = function() {
					this.m_map = new d.default(h.default.LevelSystem.MapSize), this.m_map.LevelCtrl = this
				}, Object.defineProperty(t.prototype, "Map", {
					get: function() {
						return this.m_map
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.getRoleNode = function() {
					return this.roleNode
				}, t.prototype.onRoleMove = function(e) {
					this.roleNode || console.log("没有可以控制的角色"), this.getRoleNode().getComponent(p.default).roleMove(e)
				}, t.prototype.onRoleAttackDown = function() {
					this.roleNode || console.log("没有可以控制的角色");
					var e = this.getRoleNode().getComponent(p.default);
					e.isPressAtk = !0, e.prowState == f.PROW_STATE.PROW_NORMAL && e.attack()
				}, t.prototype.onRoleAttackUp = function() {
					this.roleNode || console.log("没有可以控制的角色");
					var e = this.getRoleNode().getComponent(p.default);
					e.isPressAtk = !1, e.prowState != f.PROW_STATE.PROW_ING || e.isMovetoPoint || (e.NodeState == f.NODE_STATE.NORMAL ? e.prowBack() : (e.prowBack(e.leftProw, !0, e.leftNeck), e.prowBack(e.rightProw, !0, e.rightNeck)))
				}, t.prototype.stepEnd = function() {
					this.Map.objsStepEnd(), this.Map.getCellAllFlagObjs(f.NODE_FLAG.PASS_LEVEL_OBJ).length < 1 && (l.default.emit(f.GAME_EVENT.OPERATE_BLOCK), this.roleNode.getComponent(p.default).winAni(), this.Win(1))
				}, t.prototype.addOneWaterShock = function(e) {
					var t = h.default.LevelSystem.getPosByFrogPoint(e),
						n = cc.instantiate(this.waterShockP);
					this.node.addChild(n), n.setPosition(t), n.zIndex = -1, cc.tween(n).to(1, {
						scale: 2.5,
						opacity: 0
					}).call(function() {
						n.destroy(), n.removeFromParent()
					}).start()
				}, t.prototype.addOneprowAddAni = function(e) {
					var t = e.Tworads,
						n = cc.v2(0, 0);
					switch (t) {
						case f.NODE_TOWARDS.LEFT:
						case f.NODE_TOWARDS.RIGHT:
							n = cc.v2(0, .5);
							break;
						case f.NODE_TOWARDS.UP:
						case f.NODE_TOWARDS.DOWN:
							n = cc.v2(.5, 0)
					}
					var o = cc.instantiate(this.addAni),
						i = h.default.LevelSystem.ItemSize,
						r = e.node.getPosition(),
						a = cc.v2(r.x + i * n.x, r.y + i * n.y),
						s = o.getComponent(c.default);
					this.node.addChild(o), o.setPosition(a), s.playAnimation("animation").onComplete(1, function() {
						o.destroy(), o.removeFromParent()
					}).start(!1), o.zIndex = 1e5
				}, t.prototype.addOneSpray = function(e) {
					var t = e.getPosition().clone(),
						n = h.default.GameObjSystem.getOneNode(null);
					this.shaowNode.addChild(n), n.setPosition(cc.v2(t.x, t.y - 10)), n.getComponent(c.default).playAnimation("animation").onComplete(1, function() {
						var t = e.getComponent(p.default);
						h.default.GameObjSystem.putOneNode(t.Type, e)
					}).start(!1)
				}, r([_({
					type: cc.Camera,
					displayName: "主摄像机"
				})], t.prototype, "mainCamera", void 0), r([_({
					type: cc.Camera,
					displayName: "提示摄像机"
				})], t.prototype, "hintCamera", void 0), r([_({
					type: cc.Camera,
					displayName: "水纹摄像机"
				})], t.prototype, "outLineCamera", void 0), r([_({
					type: cc.Camera,
					displayName: "底板摄像机"
				})], t.prototype, "outLineCamera1", void 0), r([_({
					type: cc.Camera,
					displayName: "墙摄像机"
				})], t.prototype, "outLineCamera2", void 0), r([_({
					type: cc.Sprite,
					displayName: "水纹渲染贴图"
				})], t.prototype, "outLineTex", void 0), r([_({
					type: cc.Sprite,
					displayName: "底板渲染贴图"
				})], t.prototype, "outLineTex1", void 0), r([_({
					type: cc.Sprite,
					displayName: "墙渲染贴图"
				})], t.prototype, "outLineTex2", void 0), r([_({
					type: cc.Prefab,
					displayName: "水纹预制体"
				})], t.prototype, "waterShockP", void 0), r([_({
					type: cc.Prefab,
					displayName: "倒影节点"
				})], t.prototype, "dyPrefab", void 0), r([_({
					type: cc.Node,
					displayName: "shaow节点"
				})], t.prototype, "shaowNode", void 0), r([_({
					type: cc.Prefab,
					displayName: "加长动画预制体"
				})], t.prototype, "addAni", void 0), r([g, y("关卡")], t)
			}(cc.Component);
		n.default = v, cc._RF.pop()
	}, {
		"../../MyGameScript/Ctrl/CellCtrl": "CellCtrl",
		"../../MyGameScript/GameObj/ObjBase": "ObjBase",
		"../../engines/components/comSpSkeleton": "comSpSkeleton",
		"../../engines/gameEngine": "gameEngine",
		"../../engines/managers/gameContent/gameMode_json": "gameMode_json",
		"../Enum": "Enum",
		"../MainRoot": "MainRoot"
	}],
	LevelBtn: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "b48e3F1HZFDlLlDB11eczyr", "LevelBtn");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			},
			a = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			s = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var c = e("../../engines/configs/gameConfig"),
			l = e("../../engines/gameEngine"),
			u = e("../../engines/managers/gameContent/gameMode_json"),
			d = e("../../engines/services/userContent/userInterface"),
			p = e("../Base/ClickBase"),
			f = e("../Enum"),
			h = e("../MainRoot"),
			m = cc._decorator,
			y = m.ccclass,
			g = (m.property, m.menu),
			_ = (m.disallowMultiple, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.m_levelNum = 1, t.lockBg = null, t.m_numLabel = null, t.m_numLabel2 = null, t.m_mode = u.GAME_MODE.NORMAL, t.lastBtn = null, t
				}
				return i(t, e), Object.defineProperty(t.prototype, "locked", {
					get: function() {
						return h.default.LevelSystem.GetUnlockLevel(this.m_mode).indexOf(this.m_levelNum) < 0
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.onLoad = function() {
					this.node.on(cc.Node.EventType.TOUCH_START, this.ClickDown, this), this.node.on(cc.Node.EventType.TOUCH_END, this.ClickUp, this), this.node.on(cc.Node.EventType.TOUCH_START, this.OnDown, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.OnUp, this), this.node.on(cc.Node.EventType.TOUCH_END, this.OnUp, this)
				}, t.prototype.Init = function(e, t) {
					return a(this, void 0, void 0, function() {
						return s(this, function() {
							return this.m_mode = t, this.m_levelNum = e, this.m_numLabel = this.node.getChildByName("LevelNum").getComponent(cc.Label), this.m_numLabel2 = this.node.getChildByName("LevelStr").getComponent(cc.Label), this.m_numLabel.string = e.toString(), this.lockBg = this.node.getChildByName("lockBg"), this.locked && (this.m_numLabel2.node.active = !0, this.lockBg.active = !0), [2]
						})
					})
				}, t.prototype.Refresh = function() {
					var e = h.default.LevelSystem.GetUnlockLevel(this.m_mode).indexOf(this.m_levelNum) >= 0;
					this.m_levelNum == h.default.LevelSystem.GetFarLevel(this.m_mode) || h.default.LevelSystem.GetUnlockLevel(this.m_mode).indexOf(this.m_levelNum + 1) < 0 && this.locked, console.log(this.m_levelNum, h.default.LevelSystem.GetFarLevel(this.m_mode)), this.m_numLabel.node.active = e, e && (this.m_numLabel2.node.active = !1, this.lockBg.active = !1)
				}, t.prototype.ClickDown = function() {}, t.prototype.ClickUp = function() {
					l.default.getManagers().soundMgr.playSound("anNiu").then(), h.default.LevelSystem.GetUnlockLevel(this.m_mode).indexOf(this.m_levelNum) < 0 ? l.modules().uiControlModule.showMessageBox("请先通过之前的关卡") : l.services().userSrv.getPower() - c.default.MODE_POWER[this.m_mode] < 0 ? l.modules().uiControlModule.showUserPropGet(d.REWARD_TYPE.POWER, c.default.ADD_ONCE_POWER) : (l.services().userSrv.setPower(-c.default.MODE_POWER[this.m_mode], !0, !0), h.default.GotTips = !1, l.managers().soundMgr.stopMusic(), h.default.LevelSystem.LoadLevel(h.default.LevelSystem.GetSignleLevelInfo(this.m_mode, this.m_levelNum).bundleName, this.m_mode, this.m_levelNum), h.default.UISystem.ClosePage(f.PAGE.LEVELMENU), h.default.UISystem.ClosePage(f.PAGE.MODEMENU))
				}, t.prototype.OnDowning = function() {}, r([y, g("工具组件/选关按钮")], t)
			}(p.default));
		n.default = _, cc._RF.pop()
	}, {
		"../../engines/configs/gameConfig": "gameConfig",
		"../../engines/gameEngine": "gameEngine",
		"../../engines/managers/gameContent/gameMode_json": "gameMode_json",
		"../../engines/services/userContent/userInterface": "userInterface",
		"../Base/ClickBase": "ClickBase",
		"../Enum": "Enum",
		"../MainRoot": "MainRoot"
	}],
	LevelMeun: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "458130T0AxA6I/r0SY2/GFE", "LevelMeun");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			},
			a = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			s = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var c = e("../../engines/configs/gameConfig"),
			l = e("../../engines/gameEngine"),
			u = e("../../OppoScripts/NativeSys/NativeSys"),
			d = e("../Base/PageBase"),
			p = e("../MainRoot"),
			f = e("../Obj/LevelBtn"),
			h = cc._decorator,
			m = h.ccclass,
			y = h.property,
			g = h.menu,
			_ = h.disallowMultiple,
			v = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.pagePrefab = null, t.btnPrefab = null, t.pageNode = null, t.level_Save_Content = "level_Save_Content", t.pages = [], t.curPageIndex = 0, t.pageAddNum = 0, t
				}
				return i(t, e), t.prototype.OnPageOpen = function(t) {
					return a(this, void 0, void 0, function() {
						var n, o, i, r, a, d, f, h, m, y;
						return s(this, function(s) {
							switch (s.label) {
								case 0:
									for (i in e.prototype.OnPageOpen.call(this, t), n = p.default.LevelSystem.GetModeLevelInfo(this.m_mode), o = 0, n) o += 1;
									for (r = Math.ceil(o / 10), a = 0; a < r; a++) d = cc.instantiate(this.pagePrefab), this.pageNode.getComponent(cc.PageView).addPage(d), this.pages.push(d);
									return this.pageNode.getComponent(cc.PageView).scrollToLeft(0), f = 0, (h = l.default.getServices().localStorageSrv.getStorage(this.level_Save_Content)) && (m = JSON.parse(h), f = m[this.m_mode].farLevel), [4, this.Init(n)];
								case 1:
									return s.sent(), y = Math.ceil(f / 10), this.pageNode.getComponent(cc.PageView).setCurrentPageIndex(y - 1), u.default.ShowNative(c.default.SECOND_NATIVE), [2]
							}
						})
					})
				}, t.prototype.Init = function(e) {
					return a(this, void 0, void 0, function() {
						var t = this;
						return s(this, function() {
							return [2, new Promise(function(n) {
								return a(t, void 0, void 0, function() {
									var t, o, i, r;
									return s(this, function() {
										for (o in t = null, e) i = cc.instantiate(this.btnPrefab), this.pages[this.curPageIndex].addChild(i), this.pageAddNum += 1, this.pageAddNum >= 10 && (this.curPageIndex += 1, this.pageAddNum = 0), (r = i.getComponent(f.default)).Init(Number(o), this.m_mode, e[o]), r.lastBtn = t, t = r;
										return this.scheduleOnce(n, .1), [2]
									})
								})
							})]
						})
					})
				}, r([y({
					type: cc.Prefab,
					displayName: "选关页面预制体"
				})], t.prototype, "pagePrefab", void 0), r([y({
					type: cc.Prefab,
					displayName: "选关按钮预制体"
				})], t.prototype, "btnPrefab", void 0), r([y({
					type: cc.Node,
					displayName: "翻页插件"
				})], t.prototype, "pageNode", void 0), r([m, _, g("游戏页面/选关页")], t)
			}(d.default);
		n.default = v, cc._RF.pop()
	}, {
		"../../OppoScripts/NativeSys/NativeSys": "NativeSys",
		"../../engines/configs/gameConfig": "gameConfig",
		"../../engines/gameEngine": "gameEngine",
		"../Base/PageBase": "PageBase",
		"../MainRoot": "MainRoot",
		"../Obj/LevelBtn": "LevelBtn"
	}],
	LevelPage: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "811beMkf01BAJeeJca4O4oe", "LevelPage");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
			s = a.ccclass,
			c = (a.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return i(t, e), t.prototype.onLoad = function() {}, t.prototype.start = function() {}, t.prototype.touchScene = function() {}, r([s], t)
			}(cc.Component));
		n.default = c, cc._RF.pop()
	}, {}],
	LevelSystem: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "cf007CDQr5GdICU84vetx1N", "LevelSystem");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			a = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = e("../../engines/gameEngine"),
			c = e("../../engines/managers/gameContent/gameMode_json"),
			l = e("../Base/LevelBase"),
			u = e("../Base/SystemBase"),
			d = e("../Const"),
			p = e("../MainRoot"),
			f = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.systemName = "===主模式关卡系统", t.level_Save_Content = "level_Save_Content", t.m_levelContent = null, t.m_normalLevelMap = {}, t.m_doubleLevelMap = {}, t.m_paintedLevelMap = {}, t.needUnlock = !1, t.stroage = null, t.mapSize = null, t.itemSize = 64, t.customItemSize = 60, t
				}
				return i(t, e), Object.defineProperty(t.prototype, "GameBundle", {
					get: function() {
						return cc.assetManager.getBundle("gameBundle")
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.GetSignleLevelInfo = function(e, t) {
					switch (t || (t = this.GetCurrLevel(e)), e) {
						case c.GAME_MODE.NORMAL:
							return this.m_normalLevelMap[this.realNum(t, e)];
						case c.GAME_MODE.DOUBLE:
							return this.m_doubleLevelMap[this.realNum(t, e)];
						case c.GAME_MODE.PAINTED_1:
							return this.m_paintedLevelMap[this.realNum(t, e)]
					}
				}, t.prototype.GetModeLevelInfo = function(e) {
					switch (e) {
						case c.GAME_MODE.NORMAL:
							return this.m_normalLevelMap;
						case c.GAME_MODE.DOUBLE:
							return this.m_doubleLevelMap;
						case c.GAME_MODE.PAINTED_1:
							return this.m_paintedLevelMap
					}
				}, t.prototype.realNum = function(e, t) {
					var n = e % this.m_levelContent[t].maxLevel;
					return n || (n = this.m_levelContent[t].maxLevel), console.warn(this.m_levelContent[t].maxLevel, n), n
				}, t.prototype.GetFarLevel = function(e) {
					return this.m_levelContent[e].farLevel || 1
				}, t.prototype.GetCurrLevel = function(e) {
					return this.m_levelContent[e].currLevel || 1
				}, t.prototype.GetMaxLevel = function(e) {
					return this.m_levelContent[e].maxLevel || 1
				}, t.prototype.GetUnlockLevel = function(e) {
					return this.m_levelContent[e].unlockLevleList || [1]
				}, t.prototype.SystemInit = function() {
					for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
					e.prototype.SystemInit.call(this), this.stroage = s.default.getServices().localStorageSrv, this.m_levelContent = {
						0: {
							currLevel: 1,
							farLevel: 1,
							unlockLevleList: [1]
						},
						1: {
							currLevel: 1,
							farLevel: 1,
							unlockLevleList: [1]
						},
						2: {
							currLevel: 1,
							farLevel: 1,
							unlockLevleList: [1]
						},
						3: {
							currLevel: 1,
							farLevel: 1,
							unlockLevleList: [1]
						},
						4: {
							currLevel: 1,
							farLevel: 1,
							unlockLevleList: [1]
						}
					};
					var o = function(e, t) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							t[o.id] = o.content
						}
					};
					o(p.default.ConfigSerive.NormalLevelList, this.m_normalLevelMap), o(p.default.ConfigSerive.DoubleLevelList, this.m_doubleLevelMap), o(p.default.ConfigSerive.PaintedLevelList, this.m_paintedLevelMap);
					var i = this.stroage.getStorage(this.level_Save_Content);
					if (i) {
						var r = JSON.parse(i);
						for (var a in r)
							if (Object.prototype.hasOwnProperty.call(r, a)) {
								var c = r[a];
								this.m_levelContent[a] = c
							}
					}
					for (var l = p.default.ConfigSerive.LevelSourceList, u = 0; u < l.length; u++) {
						c = l[u];
						var d = p.default.ConfigSerive[c.responName];
						if (this.m_levelContent[c.mode].maxLevel = d.length, this.m_levelContent[c.mode].farLevel = Math.min(d.length, this.m_levelContent[c.mode].farLevel), this.m_levelContent[c.mode].currLevel = Math.min(d.length, this.m_levelContent[c.mode].currLevel), this.m_levelContent[c.mode].unlockLevleList = this.m_levelContent[c.mode].unlockLevleList, null == this.m_levelContent[c.mode].unlockLevleList || null == this.m_levelContent[c.mode].unlockLevleList) {
							this.m_levelContent[c.mode].unlockLevleList = [];
							for (var f = 1; f <= this.m_levelContent[c.mode].farLevel; f++) this.m_levelContent[c.mode].unlockLevleList.push(f);
							this.OnLevelChange()
						}
					}
					this.Log(this.m_levelContent)
				}, t.prototype.ChangeLevel = function(e, t) {
					this.m_levelContent[t].currLevel = e, this.m_levelContent[t].farLevel = Math.max(e, this.m_levelContent[t].farLevel), this.m_levelContent[t].farLevel = Math.min(this.m_levelContent[t].maxLevel, this.m_levelContent[t].farLevel), this.m_levelContent[t].unlockLevleList.indexOf(e) < 0 && this.m_levelContent[t].unlockLevleList.push(e), this.m_levelContent[t].unlockLevleList.sort(function(e, t) {
						return e - t
					}), this.OnLevelChange()
				}, t.prototype.OnLevelChange = function() {
					return this.stroage.setStorage(this.level_Save_Content, JSON.stringify(this.m_levelContent)), !0
				}, t.prototype.AddLevel = function(e, t) {
					void 0 === t && (t = 1), console.warn("模式加一", e), this.ChangeLevel(this.m_levelContent[e].currLevel + t, e)
				}, t.prototype.LoadLevel = function(e, t, n) {
					return r(this, void 0, void 0, function() {
						var o, i, r, c, u = this;
						return a(this, function(a) {
							switch (a.label) {
								case 0:
									return n || (n = this.GetCurrLevel(t)), p.default.UISystem.CloseAllPage(), s.services().miniGameSrv.getAppApiInstance().gameRecordStart({
										duration: 180
									}), console.warn("输入", n, "包名", e), o = this.realNum(n, t), this.ChangeLevel(o, t), console.warn("加载", o), i = this.GetSignleLevelInfo(t, o), r = t, void 0 !== i.mode && null !== i.mode && (r = i.mode, console.log("?????", r)), this.MapSize = i.mapSize, c = {
										bundleName: i.bundleName,
										mode: t,
										mapInfo: i.mapInfo,
										tipsInfo: i.tipsInfo,
										level: i.level,
										mapSize: i.mapSize,
										roleTwoard: i.roleTwoard,
										guidanceType: i.guidanceType
									}, console.warn(t, r, c), [4, s.default.getManagers().gameMgr.selectMode(r).then(function() {
										u.Log("real", o), s.services().miniGameSrv.getAppApiInstance().reportAnalytics("Level", {
											loadLevel: d.MODE_NAME_MAP[t] + ":" + o
										});
										var e = s.default.Canvas().getChildByName("GamePlayLayer").getComponent(l.default);
										e && e.Init(c)
									})];
								case 1:
									return a.sent(), [2]
							}
						})
					})
				}, Object.defineProperty(t.prototype, "MapSize", {
					get: function() {
						return this.mapSize
					},
					set: function(e) {
						this.mapSize = e
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "ItemSize", {
					get: function() {
						return this.itemSize
					},
					set: function(e) {
						this.itemSize = e
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.getPosByFrogPoint = function(e) {
					var t = this.mapSize,
						n = t.row / 2,
						o = t.col / 2,
						i = n - e.row,
						r = o - e.col,
						a = new cc.Vec2;
					return a.y = -r * this.itemSize, a.x = -i * this.itemSize, a
				}, Object.defineProperty(t.prototype, "customSize", {
					get: function() {
						return this.customItemSize
					},
					set: function(e) {
						this.customItemSize = e
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.getCustomPosByFrogPoint = function(e) {
					var t = this.mapSize,
						n = t.row / 2,
						o = t.col / 2,
						i = n - e.row,
						r = o - e.col,
						a = new cc.Vec2;
					return a.y = -r * this.customItemSize, a.x = -i * this.customItemSize, a
				}, t.prototype.getCustomFrogPointByPos = function() {
					this.mapSize
				}, t
			}(u.default);
		n.default = f, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine",
		"../../engines/managers/gameContent/gameMode_json": "gameMode_json",
		"../Base/LevelBase": "LevelBase",
		"../Base/SystemBase": "SystemBase",
		"../Const": "Const",
		"../MainRoot": "MainRoot"
	}],
	LosePage: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "3389ajeeN9IzoDh0+FAKrCC", "LosePage");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			},
			a = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			s = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var c = e("../../engines/configs/gameConfig"),
			l = e("../../engines/gameEngine"),
			u = e("../../OppoScripts/NativeSys/NativeSys"),
			d = e("../Base/PageBase"),
			p = e("../Enum"),
			f = e("../MainRoot"),
			h = cc._decorator,
			m = h.ccclass,
			y = h.property,
			g = h.menu,
			_ = h.disallowMultiple,
			v = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.winLabel = null, t.showImg = null, t.shareBtn = null, t.adIcon = null, t.tipsContent = [], t
				}
				return i(t, e), t.prototype.OnPageOpen = function(t) {
					return a(this, void 0, void 0, function() {
						return s(this, function() {
							return t.index, e.prototype.OnPageOpen.call(this, t), "novelapp" == f.default.platName && (this.shareBtn.node.active = !1), l.services().miniGameSrv.getAppApiInstance().gameRecordStop(), l.default.on(p.GAME_EVENT.ON_TIPS_GOT, this.OnTipsGot.bind(this)), u.default.ShowNative(c.default.SECOND_NATIVE), [2]
						})
					})
				}, t.prototype.OnRestartBtn = function() {
					return a(this, void 0, void 0, function() {
						return s(this, function(e) {
							switch (e.label) {
								case 0:
									return l.managers().soundMgr.playSound("anNiu"), [4, f.default.LevelSystem.LoadLevel(f.default.LevelSystem.GetSignleLevelInfo(this.m_mode).bundleName, this.m_mode)];
								case 1:
									return e.sent(), this.ClosePage(), [2]
							}
						})
					})
				}, t.prototype.OnTipsGot = function() {}, t.prototype.OnTipsBtn = function() {
					l.default.getManagers().soundMgr.playSound("anNiu").then(), f.default.GotTips ? l.default.emit(p.GAME_EVENT.ON_BTN_TIPS) : (cc.director.pause(), l.services().miniGameSrv.getAppApiInstance().loadAndShowVideoAd(function() {
						l.default.emit(p.GAME_EVENT.ON_BTN_TIPS), cc.director.resume()
					}, function() {
						cc.director.resume()
					}, function() {
						cc.director.resume()
					}, "看视频获取提示"))
				}, t.prototype.OnShareBtn = function() {
					l.managers().soundMgr.playSound("anNiu"), "novelapp" != f.default.platName && ("ks" == l.services().ossSrv.getPlatform() && (this.shareBtn.node.active = !1), l.services().miniGameSrv.getAppApiInstance().shareGameRecordVideo(function() {}))
				}, r([y({
					type: cc.Label,
					displayName: "过关文字显示"
				})], t.prototype, "winLabel", void 0), r([y({
					type: cc.Sprite,
					displayName: "过关显示图片"
				})], t.prototype, "showImg", void 0), r([y({
					type: cc.Button,
					displayName: "分享按钮"
				})], t.prototype, "shareBtn", void 0), r([y({
					type: cc.Node,
					displayName: "广告标识"
				})], t.prototype, "adIcon", void 0), r([m, _, g("游戏页面/失败结算页")], t)
			}(d.default);
		n.default = v, cc._RF.pop()
	}, {
		"../../OppoScripts/NativeSys/NativeSys": "NativeSys",
		"../../engines/configs/gameConfig": "gameConfig",
		"../../engines/gameEngine": "gameEngine",
		"../Base/PageBase": "PageBase",
		"../Enum": "Enum",
		"../MainRoot": "MainRoot"
	}],
	Lotus: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "66766wqKO1JkolydB2mBAOG", "Lotus");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/gameEngine"),
			s = e("../GameObj/ObjBase"),
			c = cc._decorator,
			l = c.menu,
			u = c.ccclass,
			d = c.property,
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.lousLeaf = null, t
				}
				return i(t, e), t.prototype.beAttack = function() {}, t.prototype.init = function() {
					this.initReder()
				}, t.prototype.initReder = function() {
					for (var e = this.Pos, t = [{
							row: e.row - 1,
							col: e.col
						}, {
							row: e.row + 1,
							col: e.col
						}, {
							row: e.row,
							col: e.col + 1
						}, {
							row: e.row,
							col: e.col - 1
						}], n = 0; n < t.length; n++) {
						var o = t[n],
							i = this.Cell.getPointAllTypeObjs(o, this.Type);
						if (i.length > 0) {
							for (var r = this.Cell.getOneNodeIsInGroup(this.node), a = [], s = 0; s < r.length; s++)(c = r[s]) && a.push(c.uuid);
							for (s = 0; s < i.length; s++) {
								var c;
								(c = i[s]) && a.includes(c.uuid) && (this.lousLeaf.children[n].active = !0)
							}
						}
					}
				}, t.prototype.treadAni = function() {
					cc.tween(this.objSp).to(.1, {
						scale: 1.1
					}, {
						easing: cc.easing.backOut
					}).to(.1, {
						scale: 1
					}).start()
				}, t.prototype.beTread = function() {
					a.default.getManagers().soundMgr.playSound("tread"), this.Cell.LevelCtrl.addOneWaterShock(this.Pos), this.treadAni()
				}, r([d({
					type: cc.Node,
					displayName: "荷花叶子节点"
				})], t.prototype, "lousLeaf", void 0), r([u, l("游戏单位/荷花")], t)
			}(s.default);
		n.default = p, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine",
		"../GameObj/ObjBase": "ObjBase"
	}],
	MainRoot: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "112c6MMhp5NzIk74/dfawwI", "MainRoot");
		var o = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			i = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r = e("../engines/gameEngine"),
			a = e("../engines/libs/data_control"),
			s = e("./Enum"),
			c = e("./Services/ConfigService"),
			l = e("./System/GameObjSystem"),
			u = e("./System/InputSystem"),
			d = e("./System/LevelSystem"),
			p = e("./System/UISystem"),
			f = function() {
				function e() {
					this.uiRoot = null, this.systemes = null, this.services = null, this.configTable = null, this.levelSystem = null, this.uiSystem = null, this.inputSystem = null, this.gameObjSystem = null, this.gameBundleName = "gameBundle", this.frameBundleName = "GameFrameBundle", this.gotTips = !1, this.gameEnd = !1, this.curLoadBundleName = null, this.platName = "novelapp"
				}
				return Object.defineProperty(e.prototype, "GotTips", {
					get: function() {
						return this.gotTips
					},
					set: function(e) {
						this.gotTips = e
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "UIRoot", {
					get: function() {
						return this.uiRoot
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "Data_Cont", {
					get: function() {
						return a.default
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "UIModel", {
					get: function() {
						return r.default.getModules().uiControlModule
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.GetBundle = function(e) {
					return console.info("GetBundle", e), this.curLoadBundleName = e, cc.assetManager.getBundle(e)
				}, Object.defineProperty(e.prototype, "frameBundle", {
					get: function() {
						return cc.assetManager.getBundle(this.frameBundleName)
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "gameBundle", {
					get: function() {
						return cc.assetManager.getBundle(this.gameBundleName)
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "ConfigSerive", {
					get: function() {
						return this.configTable
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "LevelSystem", {
					get: function() {
						return this.levelSystem
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "UISystem", {
					get: function() {
						return this.uiSystem
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "InputSystem", {
					get: function() {
						return this.inputSystem
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(e.prototype, "GameObjSystem", {
					get: function() {
						return this.gameObjSystem
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.GameInit = function() {
					return o(this, void 0, void 0, function() {
						var e, t, n = this;
						return i(this, function(o) {
							switch (o.label) {
								case 0:
									return e = Date.now(), console.log("---<<<<<<游戏逻辑框架初始化>>>>>>---"), [4, new Promise(function(e, t) {
										cc.assetManager.loadBundle(n.frameBundleName, function(n) {
											if (n) return console.error("逻辑框架分包加载错误", n), void t();
											console.log("---<<<<<<游戏逻辑框架分包加载完毕>>>>>>---"), e()
										})
									})];
								case 1:
									return o.sent(), cc.assetManager.loadBundle("normalMode", function(e) {
										e && console.error("normal游戏包加载错误")
									}), [4, this.ServiceInit()];
								case 2:
									return o.sent(), this.SystemInit(), (t = window.tt) && t.getSystemInfo({
										complete: function(e) {
											e && (n.platName = e.appName, console.warn("app名称", n.platName))
										}
									}), console.log("---\x3e>>>>>>>>>游戏逻辑框架初始化完毕,耗时:", Date.now() - e, "ms"), [2, Promise.resolve()]
							}
						})
					})
				}, e.prototype.isShortcutOpen = function() {
					return "Toutiao" != this.platName && "XiGua" != this.platName && "news_article_lite" != this.platName
				}, e.prototype.ServiceInit = function() {
					return o(this, void 0, void 0, function() {
						var e, t;
						return i(this, function(n) {
							switch (n.label) {
								case 0:
									this.configTable = new c.default, this.services = [this.configTable], e = this.services, t = 0, n.label = 1;
								case 1:
									return t < e.length ? [4, e[t].ServiceInit()] : [3, 4];
								case 2:
									n.sent(), n.label = 3;
								case 3:
									return t++, [3, 1];
								case 4:
									return [2]
							}
						})
					})
				}, e.prototype.SystemInit = function() {
					this.levelSystem = new d.default, this.uiSystem = new p.default, this.inputSystem = new u.default, this.gameObjSystem = new l.default, this.systemes = [this.levelSystem, this.uiSystem, this.inputSystem, this.gameObjSystem];
					for (var e = this.systemes, t = 0; t < e.length; t++) e[t].SystemInit()
				}, e.prototype.SetUIRoot = function(e) {
					this.uiRoot = e
				}, e.prototype.GameEnd = function(e) {
					return o(this, void 0, void 0, function() {
						return i(this, function() {
							return this.gameEnd ? [2] : (this.gameEnd = !0, r.default.emit(s.GAME_EVENT.ON_GAME_END, e), h.InputSystem.enableInput = !1, this.uiSystem.ClosePage(s.PAGE.INGAMEPAGE), [2])
						})
					})
				}, e
			}(),
			h = function() {
				try {
					return window.mainRoot = new f, window.mainRoot
				} catch (e) {
					console.error(e, "主模式引擎创建失败")
				}
			}();
		n.default = h, cc._RF.pop()
	}, {
		"../engines/gameEngine": "gameEngine",
		"../engines/libs/data_control": "data_control",
		"./Enum": "Enum",
		"./Services/ConfigService": "ConfigService",
		"./System/GameObjSystem": "GameObjSystem",
		"./System/InputSystem": "InputSystem",
		"./System/LevelSystem": "LevelSystem",
		"./System/UISystem": "UISystem"
	}],
	Mass: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "b7ff1HrJAxFk6Ti9Epxw4mg", "Mass");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/libs/data_control"),
			s = cc._decorator,
			c = s.ccclass,
			l = (s.property, s.menu),
			u = (s.disallowMultiple, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.iMass = 1, t.position = new cc.Vec2, t.velocity = new cc.Vec2, t.allForce = [], t.airRatio = 0, t.setTime = !1, t.force = null, t.onTouched = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					this.position = this.node.getPosition()
				}, t.prototype.update = function(e) {
					var t = a.default.AllArraySum(this.allForce),
						n = this.velocity.normalize().mul(-1),
						o = this.velocity.mag() * Math.pow(this.airRatio, 2);
					n.scaleSelf(cc.v2(o, o)), t.addSelf(n), this.velocity = this.velocity.add(t.scale(cc.v2(this.iMass, this.iMass)).mul(e)), this.position.addSelf(this.velocity.mul(e)), this.node.setPosition(this.position)
				}, t.prototype.lateUpdate = function() {
					this.allForce = []
				}, t.prototype.AddForce = function(e) {
					this.allForce.push(e)
				}, t.prototype.SetVelocity = function(e) {
					this.velocity = e
				}, t.prototype.SetPosition = function(e) {
					this.position = e, this.node.setPosition(e)
				}, r([c, l("工具组件/质点")], t)
			}(cc.Component));
		n.default = u, cc._RF.pop()
	}, {
		"../../engines/libs/data_control": "data_control"
	}],
	ModeBtn: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "b323bkuEUxGJZnlnRmZg9jj", "ModeBtn");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			},
			a = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			s = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var c = e("../../engines/configs/gameConfig"),
			l = e("../../engines/gameEngine"),
			u = e("../../engines/libs/node_component"),
			d = e("../../engines/managers/gameContent/gameMode_json"),
			p = e("../../engines/services/userContent/userInterface"),
			f = e("../Const"),
			h = e("../Enum"),
			m = e("../MainRoot"),
			y = cc.Enum(d.GAME_MODE),
			g = cc._decorator,
			_ = g.ccclass,
			v = g.property,
			b = g.menu,
			O = (g.disallowMultiple, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.isOutBtn = !1, t.m_mode = y.NORMAL, t.contentImg = null, t.titleImg = null, t.AdProgress = null, t.AdIcon = null, t.levelProgress = null, t.autoWidge = !1, t
				}
				return i(t, e), t.prototype.BtnInit = function(e) {
					this.m_mode = e
				}, t.prototype.onLoad = function() {
					return a(this, void 0, void 0, function() {
						var e, t = this;
						return s(this, function() {
							e = m.default.ConfigSerive.ModeImgMap[this.m_mode];
							try {
								u.default.loadResourcesPicture("Img/Mode/" + e.titleImg + (this.isOutBtn ? "O" : ""), this.titleImg), u.default.loadResourcesPicture("Img/Mode/" + e.contentImg + (this.isOutBtn ? "O" : ""), this.contentImg).then(function(e) {
									t.autoWidge && (t.contentImg.node.y = .5 * (e.getOriginalSize().height - t.node.height))
								})
							} catch (n) {}
							return this.RefreshInfo(), [2]
						})
					})
				}, t.prototype.OnEnterBtn = function(e, t) {
					var n = this;
					l.managers().soundMgr.playSound("anNiu");
					var o = Number(t),
						i = this.m_mode,
						r = o ? function() {
							return a(n, void 0, void 0, function() {
								var e;
								return s(this, function(t) {
									switch (t.label) {
										case 0:
											return console.info("bundleName", i), m.default.GotTips = !1, e = m.default.LevelSystem.GetSignleLevelInfo(i).bundleName, [4, m.default.LevelSystem.LoadLevel(e, i)];
										case 1:
											return t.sent(), m.default.UISystem.ClosePage(h.PAGE.MODEMENU), [2]
									}
								})
							})
						} : function() {
							var e = {
								mode: i
							};
							m.default.UISystem.OpenPage(h.PAGE.LEVELMENU, e)
						};
					l.services().userSrv.getModeUnlocked(this.m_mode) ? l.services().userSrv.getPower() - c.default.MODE_POWER[i] < 0 ? l.modules().uiControlModule.showUserPropGet(p.REWARD_TYPE.POWER, c.default.ADD_ONCE_POWER) : (l.services().userSrv.setPower(-c.default.MODE_POWER[i], !0, !0), r()) : l.services().miniGameSrv.getAppApiInstance().loadAndShowVideoAd(function() {
						l.services().userSrv.addModeAdCount(n.m_mode)
					}, function(e) {
						console.error(e)
					}, function() {
						l.services().userSrv.getModeAdCount(n.m_mode) >= c.default.MODE_VIDEO_COUNT[n.m_mode] && (l.services().userSrv.UnlockMode(n.m_mode), r()), n.RefreshInfo()
					}, "看广告解锁" + f.MODE_NAME_MAP[this.m_mode])
				}, t.prototype.RefreshInfo = function() {
					this.AdProgress.node.active = !l.services().userSrv.getModeUnlocked(this.m_mode), this.AdProgress.string = l.services().userSrv.getModeAdCount(this.m_mode) + ":" + c.default.MODE_VIDEO_COUNT[this.m_mode], this.AdIcon.active = !l.services().userSrv.getModeUnlocked(this.m_mode), this.levelProgress && (this.levelProgress.string = m.default.LevelSystem.GetFarLevel(this.m_mode) + ":" + m.default.LevelSystem.GetMaxLevel(this.m_mode))
				}, r([v({
					displayName: "是否为在外面展示的按钮"
				})], t.prototype, "isOutBtn", void 0), r([v({
					type: y,
					displayName: "对应的模式"
				})], t.prototype, "m_mode", void 0), r([v({
					type: cc.Sprite,
					displayName: "模式内容展示的图标"
				})], t.prototype, "contentImg", void 0), r([v({
					type: cc.Sprite,
					displayName: "模式标题的图标"
				})], t.prototype, "titleImg", void 0), r([v({
					type: cc.Label,
					displayName: "广告进度"
				})], t.prototype, "AdProgress", void 0), r([v({
					type: cc.Node,
					displayName: "广告图标"
				})], t.prototype, "AdIcon", void 0), r([v({
					type: cc.Label,
					displayName: "关卡进度"
				})], t.prototype, "levelProgress", void 0), r([v({
					displayName: "是否自动对齐内容图标"
				})], t.prototype, "autoWidge", void 0), r([_, b("工具组件/模式按钮")], t)
			}(cc.Component));
		n.default = O, cc._RF.pop()
	}, {
		"../../engines/configs/gameConfig": "gameConfig",
		"../../engines/gameEngine": "gameEngine",
		"../../engines/libs/node_component": "node_component",
		"../../engines/managers/gameContent/gameMode_json": "gameMode_json",
		"../../engines/services/userContent/userInterface": "userInterface",
		"../Const": "Const",
		"../Enum": "Enum",
		"../MainRoot": "MainRoot"
	}],
	ModeMenu: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "b598cl1M8FMYqK4IIG+1iwG", "ModeMenu");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			},
			a = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			s = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var c = e("../../engines/configs/gameConfig"),
			l = e("../../engines/managers/gameContent/gameMode_json"),
			u = e("../Base/PageBase"),
			d = e("../Obj/ModeBtn"),
			p = cc._decorator,
			f = p.ccclass,
			h = p.property,
			m = p.menu,
			y = p.disallowMultiple,
			g = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.m_mainView = null, t.m_modeBtnPrfab = null, t
				}
				return i(t, e), t.prototype.OnPageOpen = function(t) {
					return a(this, void 0, void 0, function() {
						var n, o, i, r;
						return s(this, function() {
							for (e.prototype.OnPageOpen.call(this, t), n = c.default.MENU_SHOW_MODE, o = 0; o < n.length; o++) i = n[o], Object.values(l.GAME_MODE).includes(i) && (console.debug("more mode", i), (r = cc.instantiate(this.m_modeBtnPrfab)).getComponent(d.default).BtnInit(i), this.m_mainView.content.addChild(r));
							return [2]
						})
					})
				}, r([h({
					type: cc.ScrollView,
					displayName: "按钮卷动页"
				})], t.prototype, "m_mainView", void 0), r([h({
					type: cc.Prefab,
					displayName: "模式选择按钮的预制体"
				})], t.prototype, "m_modeBtnPrfab", void 0), r([f, y, m("游戏页面/模式选择页")], t)
			}(u.default);
		n.default = g, cc._RF.pop()
	}, {
		"../../engines/configs/gameConfig": "gameConfig",
		"../../engines/managers/gameContent/gameMode_json": "gameMode_json",
		"../Base/PageBase": "PageBase",
		"../Obj/ModeBtn": "ModeBtn"
	}],
	ModeUnlockPage: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "b1e880FwzhBA42vU1suv4iL", "ModeUnlockPage");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			},
			a = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			s = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var c = e("../../engines/configs/gameConfig"),
			l = e("../../engines/gameEngine"),
			u = e("../../engines/managers/gameContent/gameMode_json"),
			d = e("../Base/PageBase"),
			p = e("../Enum"),
			f = e("../MainRoot"),
			h = cc._decorator,
			m = h.ccclass,
			y = h.property,
			g = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.modeUnlockParm = null, t.lbNode = null, t.btnLayoutOne = null, t.btnLayoutTwo = null, t.videoLb = null, t
				}
				return i(t, e), t.prototype.OnPageOpen = function(t) {
					return a(this, void 0, Promise, function() {
						return s(this, function() {
							return e.prototype.OnPageOpen.call(this, t), this.modeUnlockParm = t.modeUnlock, this.initPage(), [2]
						})
					})
				}, t.prototype.initPage = function() {
					var e = this.modeUnlockParm,
						t = e.mode,
						n = e.level,
						o = !1;
					if (0 != n ? o = !1 : o = !0, this.btnLayoutOne.active = !1, this.btnLayoutTwo.active = !1, o) {
						var i = c.default.MODE_VIDEO_COUNT[this.m_mode];
						i > 0 && (this.lbNode.getComponent(cc.Label).string = "đồng hồ" + i + "Bạn có thể tham gia sau video này" + u.default()[this.m_mode].explain, this.updateVideoLb(), this.btnLayoutTwo.active = !0)
					} else this.lbNode.getComponent(cc.Label).string = "Cần phải vượt qua" + u.default()[t].explain + "Đầu tiên" + n + "Đóng cửa để vào" + u.default()[this.m_mode].explain + "Oh (Những người đã vượt qua một lần cần phải vượt qua một lần nữa)", this.btnLayoutOne.active = !0
				}, t.prototype.onBtnVideo = function() {
					var e = this;
					l.default.getServices().miniGameSrv.getAppApiInstance().loadAndShowVideoAd(function() {
						var t = l.default.getServices().userSrv.getModeAdCount(e.m_mode);
						t++, l.default.getServices().userSrv.addModeAdCount(e.m_mode);
						var n = c.default.MODE_VIDEO_COUNT[e.m_mode];
						if (e.updateVideoLb(), t >= n) {
							l.default.getServices().userSrv.UnlockMode(e.m_mode), l.default.getServices().userSrv.setUnlockModeDay(), l.default.getServices().userSrv.setModeAdCount(e.m_mode, 0);
							var o = {
								mode: e.m_mode
							};
							f.default.UISystem.OpenPage(p.PAGE.LEVELMENU, o), e.OnCloseBtn()
						}
					}, function() {}, null, "观看视频解锁模式")
				}, t.prototype.updateVideoLb = function() {
					var e = c.default.MODE_VIDEO_COUNT[this.m_mode];
					this.videoLb.string = l.default.getServices().userSrv.getModeAdCount(this.m_mode) + "/" + e
				}, t.prototype.onBtnNo = function() {
					this.OnCloseBtn()
				}, t.prototype.onBtnKnow = function() {
					this.OnCloseBtn()
				}, r([y({
					type: cc.Label,
					displayName: "文本节点"
				})], t.prototype, "lbNode", void 0), r([y({
					type: cc.Node,
					displayName: "知道了按钮layout"
				})], t.prototype, "btnLayoutOne", void 0), r([y({
					type: cc.Node,
					displayName: "看视频按钮layout"
				})], t.prototype, "btnLayoutTwo", void 0), r([y({
					type: cc.Label,
					displayName: "视频文本"
				})], t.prototype, "videoLb", void 0), r([m], t)
			}(d.default);
		n.default = g, cc._RF.pop()
	}, {
		"../../engines/configs/gameConfig": "gameConfig",
		"../../engines/gameEngine": "gameEngine",
		"../../engines/managers/gameContent/gameMode_json": "gameMode_json",
		"../Base/PageBase": "PageBase",
		"../Enum": "Enum",
		"../MainRoot": "MainRoot"
	}],
	MoreBtn: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "9d36dTiHYxOVqNl6oj/krGB", "MoreBtn");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../engines/gameEngine"),
			s = cc._decorator,
			c = s.ccclass,
			l = (s.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return i(t, e), t.prototype.OnBtnMore = function() {}, r([c], t)
			}(cc.Component));
		n.default = l, cc._RF.pop()
	}, {
		"../engines/gameEngine": "gameEngine"
	}],
	NativeAdView: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "29e36NolZdOApOWlQi6s4Tq", "NativeAdView");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/configs/gameConfig"),
			s = e("../../engines/gameEngine"),
			c = e("./NativeSys"),
			l = cc._decorator,
			u = l.ccclass,
			d = l.property,
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.GoNextText = null, t.CLoseBtn = null, t.Img = null, t.CloseCall = null, t.JumpProb = 0, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					this.init()
				}, t.prototype.init = function() {
					var e = this;
					this.JumpProb = Math.random(), this.Img && (console.log("?????搞什么", a.default.IMG_CANCLICK), 1 == a.default.IMG_CANCLICK && this.Img.on(cc.Node.EventType.TOUCH_START, function() {
						e.ShowNative()
					})), 1 != c.default.IPBLOCK && this.JumpProb > a.default.NATIVE_JUMP_PROB ? this.GoNextText.string = "查看详情" : this.GoNextText.string = "点击关闭", this.CLoseBtn && (this.CLoseBtn.width = a.default.NATIVE_CLOSE_SIZE, this.CLoseBtn.height = a.default.NATIVE_CLOSE_SIZE)
				}, t.prototype.OnBtnNext = function() {
					1 != c.default.IPBLOCK && this.JumpProb > a.default.NATIVE_JUMP_PROB && this.ShowNative(), this.CloseView()
				}, t.prototype.OnBtnX = function() {
					1 != c.default.IPBLOCK && Math.random() > a.default.NATIVE_CLOSE_PROB && this.ShowNative(), this.CloseView()
				}, t.prototype.ShowNative = function() {
					s.default.Canvas().getComponent(c.default).ClickReport()
				}, t.prototype.CloseView = function() {
					var e = this;
					cc.tween(this.node).to(.3, {
						scale: .1
					}, {
						easing: "backIn"
					}).call(function() {
						e.node && e.node.isValid && (e.node.removeFromParent(), e.node.destroy()), e.CloseCall && e.CloseCall(), s.default.Canvas().getComponent(c.default).ClearNative()
					}).start()
				}, t.prototype.onDestroy = function() {}, r([d({
					type: cc.Label,
					displayName: "按钮文本"
				})], t.prototype, "GoNextText", void 0), r([d({
					type: cc.Node,
					displayName: "关闭按钮"
				})], t.prototype, "CLoseBtn", void 0), r([d({
					type: cc.Node,
					displayName: "图片img"
				})], t.prototype, "Img", void 0), r([u], t)
			}(cc.Component);
		n.default = p, cc._RF.pop()
	}, {
		"../../engines/configs/gameConfig": "gameConfig",
		"../../engines/gameEngine": "gameEngine",
		"./NativeSys": "NativeSys"
	}],
	NativeIcon: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "d8054wABENCK417agcW/bqu", "NativeIcon");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../engines/configs/gameConfig"),
			s = e("../engines/gameEngine"),
			c = e("./NativeSys/NativeSys"),
			l = cc._decorator,
			u = l.ccclass,
			d = l.property,
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.Img = null, t.ClickCall = null, t.destroyCall = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					var e = this;
					this.node.opacity = 0, 1 == a.default.NATIVE_ICONSHOW ? (this.loadAndShowNativeIcon(), this.Img.node.on(cc.Node.EventType.TOUCH_END, function() {
						e.ClickCall && e.ClickCall && e.ClickCall()
					})) : this.node.active = !1
				}, t.prototype.OnBtnClose = function() {
					this.node.active = !1
				}, t.prototype.loadAndShowNativeIcon = function() {
					var e = this;
					s.default.Canvas().getComponent(c.default).showNativeIconToImg(this, this.Img, function() {
						e.node.active = !1
					}, function() {
						e.node.opacity = 255
					})
				}, t.prototype.onDestroy = function() {
					this.destroyCall && this.destroyCall()
				}, r([d({
					type: cc.Sprite,
					displayName: "图片"
				})], t.prototype, "Img", void 0), r([u], t)
			}(cc.Component);
		n.default = p, cc._RF.pop()
	}, {
		"../engines/configs/gameConfig": "gameConfig",
		"../engines/gameEngine": "gameEngine",
		"./NativeSys/NativeSys": "NativeSys"
	}],
	NativeSys: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "2e2a5qZvkNGdqOaCKZsb9N0", "NativeSys");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/configs/gameConfig"),
			s = e("../../engines/gameEngine"),
			c = e("../../Game/MainRoot"),
			l = e("./NativeAdView"),
			u = cc._decorator,
			d = u.ccclass,
			p = u.property,
			f = window.qg,
			h = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.NativeAdId = ["652093", "652095", "652096"], t.NativeIconId = ["652097"], t.NativeShowView = null, t.NativeInterval = 2, t.m_NativePage = null, t
				}
				var n;
				return i(t, e), n = t, t.prototype.onLoad = function() {
					var e = this;
					f && this.schedule(function() {
						e.LoadNativeAd(n.AdPos)
					}, this.NativeInterval)
				}, t.prototype.LoadNativeAd = function(e, t) {
					var o = this;
					console.log("搞nim漏了"), null == n.m_currNativeAd && (n.AdPos++, n.AdPos >= this.NativeAdId.length && (n.AdPos = 0), n.m_currNativeAd = f.createNativeAd({
						adUnitId: this.NativeAdId[e]
					}), n.m_currNativeAd.load(), n.m_currNativeAd.onLoad(function(i) {
						console.log("原生广告加载成功：", i.adList, "所用id", o.NativeAdId[e]), n.m_currAdInfo = i.adList[Math.floor(Math.random() * i.adList.length)], t && t()
					}), n.m_currNativeAd.onError(function(t) {
						console.log("原生广告加载失败：", "所用id", o.NativeAdId[e], JSON.stringify(t)), o.ClearNative()
					}))
				}, t.prototype.ShowNativeViewPrefab = function(e, t, o) {}, t.prototype.showNativeIconToImg = function(e, t, o, i) {
					var r = this;
					n.m_CurrIconNative = f.createNativeAd({
						adUnitId: this.NativeIconId[0]
					}), n.m_CurrIconNative.load(), n.m_CurrIconNative.onLoad(function(a) {
						console.log("原生Icon加载成功：", a.adList, "所用id", r.NativeIconId[0]);
						var s = a.adList[Math.floor(Math.random() * a.adList.length)],
							c = s.imgUrlList[0];
						cc.loader.load({
							url: c,
							type: "png"
						}, function(r, a) {
							if (r) return console.log("图片加载失败", JSON.stringify(r)), void(o && o());
							var c = new cc.SpriteFrame(a);
							t.spriteFrame = c, n.m_CurrIconNative.reportAdShow({
								adId: s.adId
							}), e.ClickCall = function() {
								n.m_CurrIconNative.reportAdClick({
									adId: s.adId
								})
							}, e.destroyCall = function() {
								null != n.m_CurrIconNative && (n.m_CurrIconNative = null)
							}, i && i()
						})
					}), n.m_CurrIconNative.onError(function(e) {
						console.log("原生Icon加载失败：", "所用id", r.NativeIconId[0], JSON.stringify(e)), o && o(), r.ClearIconNative()
					})
				}, t.prototype.ClearIconNative = function() {
					null != n.m_CurrIconNative && (n.m_CurrIconNative = null)
				}, t.prototype.ClearNative = function() {
					null != n.m_currNativeAd && (n.m_currNativeAd = null, n.m_currAdInfo = null)
				}, t.prototype.ShowReport = function() {
					null != n.m_currNativeAd && n.m_currNativeAd.reportAdShow({
						adId: n.m_currAdInfo.adId
					})
				}, t.prototype.ClickReport = function() {
					null != n.m_currNativeAd && n.m_currNativeAd.reportAdClick({
						adId: n.m_currAdInfo.adId
					})
				}, t.ShowNative = function(e, t, o) {
					void 0 === t && (t = null), void 0 === o && (o = null);
					var i = s.default.Canvas().getComponent(n);
					i && i.ShowNativeViewPrefab(e, t, o)
				}, t.IPBLOCK = 0, t.m_currNativeAd = null, t.m_currAdInfo = null, t.AdPos = 0, t.m_CurrIconNative = null, r([p({
					type: cc.Prefab,
					displayName: "原生广告界面预制体"
				})], t.prototype, "NativeShowView", void 0), n = r([d], t)
			}(cc.Component);
		n.default = h, cc._RF.pop()
	}, {
		"../../Game/MainRoot": "MainRoot",
		"../../engines/configs/gameConfig": "gameConfig",
		"../../engines/gameEngine": "gameEngine",
		"./NativeAdView": "NativeAdView"
	}],
	ObjBase: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "54619jV8uRB1LsSAwiBzPg5", "ObjBase");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/components/comSpSkeleton"),
			s = e("../../Game/Enum"),
			c = cc._decorator,
			l = c.menu,
			u = c.ccclass,
			d = c.property,
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.objSp = null, t.objSk = null, t.beAttackEffect = null, t.attackAniArr = ["01", "02", "04"], t.type = null, t.m_pos = null, t.flags = [], t.m_moveTarget = null, t.m_cellCtrl = null, t.m_nodeTworads = s.NODE_TOWARDS.NONE, t.m_nodeState = s.NODE_STATE.NORMAL, t.hp = 0, t.atkDistance = 1, t.operation = !0, t.endPoint = null, t.endTworad = s.NODE_TOWARDS.NONE, t.deathObj = null, t.beAttackCallBack = null, t
				}
				var n;
				return i(t, e), n = t, t.prototype.onLoad = function() {
					this.beAttackEffect && (this.beAttackEffect.node.active = !1)
				}, t.prototype.bindInitData = function(e) {
					for (var t in e) e[t] instanceof Array ? this[t] = e[t].concat() : this[t] = e[t];
					this.EndPoint = this.Pos
				}, Object.defineProperty(t.prototype, "Type", {
					get: function() {
						return this.type
					},
					set: function(e) {
						this.type = e
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "Pos", {
					get: function() {
						return this.m_pos
					},
					set: function(e) {
						this.m_pos = e
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "Flags", {
					get: function() {
						return this.flags
					},
					set: function(e) {
						this.flags = e
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.addFlag = function(e) {
					this.flags.push(e)
				}, Object.defineProperty(t.prototype, "MoveTarget", {
					get: function() {
						return this.m_moveTarget
					},
					set: function(e) {
						this.m_moveTarget = e
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "Cell", {
					get: function() {
						return this.m_cellCtrl
					},
					set: function(e) {
						this.m_cellCtrl = e
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "Tworads", {
					get: function() {
						return this.m_nodeTworads
					},
					set: function(e) {
						this.m_nodeTworads = e, this.updateTworads()
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "NodeState", {
					get: function() {
						return this.m_nodeState
					},
					set: function(e) {
						this.m_nodeState = e
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "Hp", {
					get: function() {
						return this.hp
					},
					set: function(e) {
						this.hp = e
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "AtkDistance", {
					get: function() {
						return this.atkDistance
					},
					set: function(e) {
						this.atkDistance = e
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "Operation", {
					get: function() {
						return this.operation
					},
					set: function(e) {
						this.operation = e
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "EndPoint", {
					get: function() {
						return this.endPoint
					},
					set: function(e) {
						this.endPoint = e
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "DeathObj", {
					get: function() {
						return this.deathObj
					},
					set: function(e) {
						this.deathObj = e
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "EndTworad", {
					get: function() {
						return this.endTworad
					},
					set: function(e) {
						this.endTworad = e
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.setAtkDistance = function(e, t) {
					void 0 === t && (t = !1);
					var n = this.AtkDistance;
					t ? n += e : n = e, this.AtkDistance = n
				}, t.prototype.setHp = function(e, t) {
					void 0 === t && (t = !1), this.Hp, this.Hp = e
				}, t.prototype.checkCanMove = function() {
					for (var e = this.Cell.getNodeByFrogPoint(this.Pos), t = !0, o = 0; o < e.length; o++) {
						var i = e[o];
						i.uuid != this.node.uuid && i.getComponent(n).Flags.includes(s.NODE_FLAG.NOTMOVEOBJ) && (t = !1)
					}
					return t
				}, t.prototype.updateTworads = function() {}, t.prototype.attack = function() {}, t.prototype.beAttack = function() {}, t.prototype.stepEnd = function() {}, t.prototype.init = function() {}, t.prototype.initReder = function() {}, t.prototype.playAttackEffect = function() {}, t.prototype.beTread = function() {}, t.prototype.roleMove = function() {}, r([d({
					type: cc.Node,
					displayName: "单位图片"
				})], t.prototype, "objSp", void 0), r([d({
					type: a.default,
					displayName: "单位动画"
				})], t.prototype, "objSk", void 0), r([d({
					type: a.default,
					displayName: "被攻击的特效"
				})], t.prototype, "beAttackEffect", void 0), n = r([u, l("游戏单位/游戏单位基类")], t)
			}(cc.Component);
		n.default = p, cc._RF.pop()
	}, {
		"../../Game/Enum": "Enum",
		"../../engines/components/comSpSkeleton": "comSpSkeleton"
	}],
	OperateCtrl: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "d992bJP0ElKmYsjiT/92d/L", "OperateCtrl");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/gameEngine"),
			s = e("../../Game/Enum"),
			c = cc._decorator,
			l = c.menu,
			u = c.ccclass,
			d = (c.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.leftBtn = null, t.rightBtn = null, t.upBtn = null, t.downBtn = null, t.attackBtn = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					this.leftBtn = this.node.getChildByName("left"), this.rightBtn = this.node.getChildByName("right"), this.upBtn = this.node.getChildByName("up"), this.downBtn = this.node.getChildByName("down"), this.attackBtn = this.node.getChildByName("attack"), a.default.on(s.GAME_EVENT.OPERATE_BLOCK, this.removeEvent, this)
				}, t.prototype.start = function() {
					this.addEvent()
				}, t.prototype.showAni = function() {}, t.prototype.hideAni = function() {}, t.prototype.addEvent = function() {
					this.leftBtn.on("touchstart", this.onRotationTouchStart.bind(this, "left"), this), this.leftBtn.on("touchend", this.onRotationTouchEnd.bind(this, "left"), this), this.leftBtn.on("touchcancel", this.onRotationTouchEnd.bind(this, "left"), this), this.rightBtn.on("touchstart", this.onRotationTouchStart.bind(this, "right"), this), this.rightBtn.on("touchend", this.onRotationTouchEnd.bind(this, "right"), this), this.rightBtn.on("touchcancel", this.onRotationTouchEnd.bind(this, "right"), this), this.upBtn.on("touchstart", this.onRotationTouchStart.bind(this, "up"), this), this.upBtn.on("touchend", this.onRotationTouchEnd.bind(this, "up"), this), this.upBtn.on("touchcancel", this.onRotationTouchEnd.bind(this, "up"), this), this.downBtn.on("touchstart", this.onRotationTouchStart.bind(this, "down"), this), this.downBtn.on("touchend", this.onRotationTouchEnd.bind(this, "down"), this), this.downBtn.on("touchcancel", this.onRotationTouchEnd.bind(this, "down"), this), this.attackBtn.on("touchstart", this.onAttackTouchStart.bind(this, "attack"), this), this.attackBtn.on("touchend", this.onAttackTouchEnd.bind(this, "attack"), this), this.attackBtn.on("touchcancel", this.onAttackTouchEnd.bind(this, "attack"), this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
				}, t.prototype.removeEvent = function() {
					this.leftBtn.targetOff(this), this.rightBtn.targetOff(this), this.upBtn.targetOff(this), this.downBtn.targetOff(this), this.attackBtn.targetOff(this), cc.systemEvent.targetOff(this)
				}, t.prototype.onRotationTouchStart = function(e, t) {
					var n = s.NODE_TOWARDS.NONE,
						o = null == t ? void 0 : t.target;
					switch (o && (o.getChildByName("sp").scale = 1.2), e) {
						case "left":
							n = s.NODE_TOWARDS.LEFT;
							break;
						case "right":
							n = s.NODE_TOWARDS.RIGHT;
							break;
						case "up":
							n = s.NODE_TOWARDS.UP;
							break;
						case "down":
							n = s.NODE_TOWARDS.DOWN
					}
					a.default.emit(s.GAME_EVENT.ROLEMOVE_DOWN, n)
				}, t.prototype.onRotationTouchEnd = function(e, t) {
					var n = null == t ? void 0 : t.target;
					n && (n.getChildByName("sp").scale = 1)
				}, t.prototype.onAttackTouchStart = function() {
					this.attackBtn.scale = 1.2, a.default.emit(s.GAME_EVENT.ROLEATTACKDOWN)
				}, t.prototype.onAttackTouchEnd = function() {
					this.attackBtn.scale = 1, a.default.emit(s.GAME_EVENT.ROLEATTACKUP)
				}, t.prototype.onKeyDown = function(e) {
					switch (e.keyCode) {
						case cc.macro.KEY.a:
						case cc.macro.KEY.left:
							this.onRotationTouchStart("left", null);
							break;
						case cc.macro.KEY.d:
						case cc.macro.KEY.right:
							this.onRotationTouchStart("right", null);
							break;
						case cc.macro.KEY.up:
						case cc.macro.KEY.w:
							this.onRotationTouchStart("up", null);
							break;
						case cc.macro.KEY.down:
						case cc.macro.KEY.s:
							this.onRotationTouchStart("down", null);
							break;
						case cc.macro.KEY.space:
							this.onAttackTouchStart()
					}
				}, t.prototype.onKeyUp = function(e) {
					switch (e.keyCode) {
						case cc.macro.KEY.a:
						case cc.macro.KEY.left:
							break;
						case cc.macro.KEY.d:
						case cc.macro.KEY.right:
							break;
						case cc.macro.KEY.up:
						case cc.macro.KEY.w:
							break;
						case cc.macro.KEY.down:
						case cc.macro.KEY.s:
							break;
						case cc.macro.KEY.space:
							this.onAttackTouchEnd()
					}
				}, r([u, l("游戏组件/移动Ctrl")], t)
			}(cc.Component));
		n.default = d, cc._RF.pop()
	}, {
		"../../Game/Enum": "Enum",
		"../../engines/gameEngine": "gameEngine"
	}],
	PageBase: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "7ab0ddVHThF5qj8BsF0MV6B", "PageBase");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			a = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			},
			s = this && this.__spreadArrays || function() {
				for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
				var o = Array(e),
					i = 0;
				for (t = 0; t < n; t++)
					for (var r = arguments[t], a = 0, s = r.length; a < s; a++, i++) o[i] = r[a];
				return o
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var c = e("../../engines/gameEngine"),
			l = e("../../engines/managers/gameContent/gameMode_json"),
			u = e("../Enum"),
			d = e("../MainRoot"),
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.m_mode = l.GAME_MODE.NORMAL, t.registed = !1, t.content = null, t.btnRoot = null, t.onClose = null, t.onReward = null, t
				}
				return i(t, e), t.prototype.OnPageOpen = function(e) {
					return r(this, void 0, void 0, function() {
						var t, n, o, i = this;
						return a(this, function(r) {
							switch (r.label) {
								case 0:
									return e && (this.m_mode = e.mode), e && (this.onReward = e.onReward), e && (this.onClose = e.onClose), this.node.opacity = 0, this.registed || this.AddEvent(), this.content = this.node.getChildByName("Content"), this.btnRoot = this.node.getChildByName("ButtonRoot"), this.btnRoot && this.btnRoot.children.forEach(function(e) {
										e.opacity = 0
									}), this.content && (this.content.scale = 0), cc.tween(this.node).to(.25, {
										opacity: 255
									}).start(), this.Log("打开"), this.content ? [4, new Promise(function(e) {
										cc.tween(i.content).delay(.2).call(function() {}).to(.3, {
											scale: 1
										}, {
											easing: "backOut"
										}).call(e).start()
									})] : [3, 2];
								case 1:
									r.sent(), r.label = 2;
								case 2:
									if (!this.btnRoot) return [3, 6];
									t = function(e) {
										var t;
										return a(this, function(o) {
											switch (o.label) {
												case 0:
													return t = n.btnRoot.children[e], [4, new Promise(function(e) {
														cc.tween(t).to(.2, {
															opacity: 255
														}).call(e).start()
													})];
												case 1:
													return o.sent(), [2]
											}
										})
									}, n = this, o = 0, r.label = 3;
								case 3:
									return o < this.btnRoot.children.length ? [5, t(o)] : [3, 6];
								case 4:
									r.sent(), r.label = 5;
								case 5:
									return o++, [3, 3];
								case 6:
									return [2]
							}
						})
					})
				}, t.prototype.HidePage = function() {
					this.node.active = !1, this.OnPageClose()
				}, t.prototype.ClosePage = function() {
					d.default.UISystem.ClosePage(this.pageName)
				}, t.prototype.OnPageClose = function() {
					var e = this;
					this.RemoveEvent(), this.Log("关闭页面"), this.onClose && this.onClose(), this.onClose = null, this.onReward = null, this.node.isValid && cc.tween(this.node).to(.1, {
						opacity: 0
					}).call(function() {
						e.node.destroy()
					}).start()
				}, t.prototype.BackMain = function() {
					return r(this, void 0, void 0, function() {
						return a(this, function(e) {
							switch (e.label) {
								case 0:
									return [4, c.default.getManagers().gameMgr.returnMainScene()];
								case 1:
									return e.sent(), d.default.UISystem.CloseAllPage(), [2]
							}
						})
					})
				}, t.prototype.OnMainBtn = function() {
					return r(this, void 0, void 0, function() {
						return a(this, function(e) {
							switch (e.label) {
								case 0:
									return c.managers().soundMgr.playSound("anNiu"), [4, this.BackMain()];
								case 1:
									return e.sent(), d.default.UISystem.OpenPage(u.PAGE.LEVELMENU, {
										mode: this.m_mode
									}), [2]
							}
						})
					})
				}, t.prototype.OnCloseBtn = function() {
					c.managers().soundMgr.playSound("anNiu"), this.ClosePage()
				}, t.prototype.AddEvent = function() {
					this.registed = !0, this.Log("注册事件")
				}, t.prototype.RemoveEvent = function() {
					this.Log("注销事件"), this.registed = !1
				}, t.prototype.Log = function() {
					for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
					console.log.apply(console, s([this.pageName + ":---\x3e>[\n"], e, ["\n]"]))
				}, t.prototype.Warn = function() {
					for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
					console.warn.apply(console, s([this.pageName + ":---[\n"], e, ["\n]"]))
				}, t.prototype.onDestroy = function() {}, t
			}(cc.Component);
		n.default = p, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine",
		"../../engines/managers/gameContent/gameMode_json": "gameMode_json",
		"../Enum": "Enum",
		"../MainRoot": "MainRoot"
	}],
	PaintedDouble: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "035b0nL4SdOc7DDaZfBgitG", "PaintedDouble");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/components/comSpSkeleton"),
			s = e("../../engines/configs/gameConfig"),
			c = e("../../engines/managers/gameContent/gameMode_json"),
			l = e("../../Game/Enum"),
			u = e("../../Game/MainRoot"),
			d = e("./HallModeBtn"),
			p = cc._decorator,
			f = p.ccclass,
			h = p.property,
			m = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.HamaAni = null, t.effectAni = null, t.centerProw = null, t.leftProw = null, t.rightProw = null, t.leftSkeeter = null, t.rightSkeeter = null, t.pantiedState = 0, t.isClickMenu = !1, t
				}
				return i(t, e), t.prototype.start = function() {
					this.runAni()
				}, t.prototype.runAni = function() {
					0 == this.pantiedState ? this.singleAni() : 1 == this.pantiedState && this.doubleAni()
				}, t.prototype.singleAni = function() {
					var e = this;
					this.HamaAni.playAnimation("Pull_1").onComplete(1, function() {
						e.HamaAni.playAnimation("Pull_2").start(!0), e.centerProw.active = !0, cc.tween(e.centerProw).to(.12, {
							height: 120
						}).call(function() {
							e.singleBack()
						}).start()
					}).start(!1)
				}, t.prototype.singleBack = function() {
					var e = this;
					cc.tween(this.centerProw).to(.12, {
						height: 0
					}).call(function() {
						e.centerProw.active = !1, e.HamaAni.playAnimation("Pull_3").onComplete(1, function() {
							e.HamaAni.playAnimation("Idle").start(!0), e.scheduleOnce(function() {
								e.runAni()
							}, 1)
						}).start(!1)
					}).start()
				}, t.prototype.doubleAni = function() {
					var e = this;
					this.HamaAni.playAnimation("Pull_1").onComplete(1, function() {
						e.HamaAni.playAnimation("Pull_2").start(!0), e.leftProw.active = !0, cc.tween(e.leftProw).to(.12, {
							height: 140
						}).call(function() {}).start(), e.rightProw.active = !0, cc.tween(e.rightProw).to(.12, {
							height: 140
						}).call(function() {
							e.doubleBack()
						}).start()
					}).start(!1)
				}, t.prototype.doubleBack = function() {
					var e = this;
					cc.tween(this.leftSkeeter).to(.12, {
						x: 0,
						y: 20
					}).call(function() {
						e.leftSkeeter.active = !1, e.effectAni.node.active = !0, e.effectAni.playAnimation("03").onComplete(1, function() {
							e.effectAni.node.active = !1
						}).start(!1)
					}).start(), cc.tween(this.leftProw).to(.12, {
						height: 0
					}).call(function() {
						e.leftProw.active = !1
					}).start(), cc.tween(this.rightSkeeter).to(.12, {
						x: 0,
						y: 20
					}).call(function() {
						e.rightSkeeter.active = !1
					}).start(), cc.tween(this.rightProw).to(.12, {
						height: 0
					}).call(function() {
						e.rightProw.active = !1, e.HamaAni.playAnimation("Pull_3").onComplete(2, function() {
							e.HamaAni.playAnimation("Win").onComplete(3, function() {
								e.HamaAni.playAnimation("Idle").start(!0), e.pantiedState = 2, e.showLevelMenu(), e.isClickMenu = !0, e.scheduleOnce(function() {
									e.isClickMenu = !1
								}, .2)
							}).start(!1)
						}).start(!1)
					}).start()
				}, t.prototype.onBtnMe = function() {
					var e = this;
					if (0 == this.pantiedState) this.pantiedState = 1, cc.Tween.stopAllByTarget(this.centerProw), this.centerProw.active = !1, this.unscheduleAllCallbacks(), this.doubleAni();
					else if (2 == this.pantiedState) {
						if (this.isClickMenu) return;
						this.isClickMenu = !0, this.scheduleOnce(function() {
							e.isClickMenu = !1
						}, .2), this.showLevelMenu()
					}
				}, t.prototype.showLevelMenu = function() {
					if (this.node.getComponent(d.default).checkModeIsUnlock()) {
						var e = {
							mode: c.GAME_MODE.DOUBLE
						};
						u.default.UISystem.OpenPage(l.PAGE.LEVELMENU, e)
					} else {
						var t = {
							modeUnlock: s.default.MODE_LEVEL_COUNT[c.GAME_MODE.DOUBLE],
							mode: c.GAME_MODE.DOUBLE
						};
						u.default.UISystem.OpenPage(l.PAGE.MODEUNLOCKPAGE, t)
					}
				}, r([h({
					type: a.default,
					displayName: "蛤蟆节点"
				})], t.prototype, "HamaAni", void 0), r([h({
					type: a.default,
					displayName: "特效节点"
				})], t.prototype, "effectAni", void 0), r([h({
					type: cc.Node,
					displayName: "中间舌头"
				})], t.prototype, "centerProw", void 0), r([h({
					type: cc.Node,
					displayName: "左边舌头"
				})], t.prototype, "leftProw", void 0), r([h({
					type: cc.Node,
					displayName: "右边舌头"
				})], t.prototype, "rightProw", void 0), r([h({
					type: cc.Node,
					displayName: "左边蚊子"
				})], t.prototype, "leftSkeeter", void 0), r([h({
					type: cc.Node,
					displayName: "右边蚊子"
				})], t.prototype, "rightSkeeter", void 0), r([f], t)
			}(cc.Component);
		n.default = m, cc._RF.pop()
	}, {
		"../../Game/Enum": "Enum",
		"../../Game/MainRoot": "MainRoot",
		"../../engines/components/comSpSkeleton": "comSpSkeleton",
		"../../engines/configs/gameConfig": "gameConfig",
		"../../engines/managers/gameContent/gameMode_json": "gameMode_json",
		"./HallModeBtn": "HallModeBtn"
	}],
	Painted_1: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "73fe3cDG/RHA7iZYEbWelCW", "Painted_1");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/managers/gameContent/gameMode_json"),
			s = e("../../Game/MainRoot"),
			c = e("../GameObj/ObjBase"),
			l = cc._decorator,
			u = l.menu,
			d = l.ccclass,
			p = (l.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.isTrigger = !1, t.beAttackCount = 3, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), this.objSk.node.active = !1
				}, t.prototype.beAttack = function() {
					this.isTrigger || (this.beAttackCount <= 0 ? (this.isTrigger = !0, this.objSk.playAnimation("02").onComplete(1, function() {}).start(!1), this.scheduleOnce(function() {
						s.default.LevelSystem.LoadLevel(s.default.LevelSystem.GetSignleLevelInfo(a.GAME_MODE.PAINTED_1).bundleName, a.GAME_MODE.PAINTED_1)
					}, 1)) : (this.beAttackCount--, this.beAttackCount <= 0 && (this.objSk.node.active = !0, this.objSk.playAnimation("01").start(!1))))
				}, r([d, u("游戏单位/彩蛋1")], t)
			}(c.default));
		n.default = p, cc._RF.pop()
	}, {
		"../../Game/MainRoot": "MainRoot",
		"../../engines/managers/gameContent/gameMode_json": "gameMode_json",
		"../GameObj/ObjBase": "ObjBase"
	}],
	PausePage: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "bbc90JIvkdIL5p5lpKjPG1U", "PausePage");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			},
			a = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			s = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var c = e("../../engines/gameEngine"),
			l = e("../../engines/libs/node_component"),
			u = e("../Base/PageBase"),
			d = e("../Enum"),
			p = e("../MainRoot"),
			f = cc._decorator,
			h = f.ccclass,
			m = (f.property, f.menu),
			y = f.disallowMultiple,
			g = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.switchRoot = null, t
				}
				return i(t, e), t.prototype.OnPageOpen = function(t) {
					return a(this, void 0, void 0, function() {
						var n;
						return s(this, function() {
							for (e.prototype.OnPageOpen.call(this, t), this.switchRoot = this.content.getChildByName("SwitchRoot"), n = 0; n < this.switchRoot.children.length; n++) this.switchRoot.children[n].addComponent(_);
							return [2]
						})
					})
				}, t.prototype.OnRestartBtn = function() {
					c.managers().soundMgr.playSound("anNiu"), this.ClosePage(), p.default.LevelSystem.LoadLevel(p.default.LevelSystem.GetSignleLevelInfo(this.m_mode).bundleName, this.m_mode)
				}, r([h, y, m("游戏页面/暂停页面")], t)
			}(u.default);
		n.default = g;
		var _ = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.noImg = null, t
			}
			return i(t, e), Object.defineProperty(t.prototype, "open", {
				get: function() {
					switch (this.node.name) {
						case d.SWITCH_TYPE.SOUND:
							return c.managers().soundMgr.isSoundEnabled();
						case d.SWITCH_TYPE.VIBRATE:
							return c.managers().soundMgr.isVibrateEnabled()
					}
				},
				set: function(e) {
					switch (this.node.name) {
						case d.SWITCH_TYPE.SOUND:
							c.managers().soundMgr.setSoundEnabled(e);
							break;
						case d.SWITCH_TYPE.VIBRATE:
							c.managers().soundMgr.setVibrateEnabled(e)
					}
				},
				enumerable: !1,
				configurable: !0
			}), t.prototype.onLoad = function() {
				return a(this, void 0, void 0, function() {
					return s(this, function(e) {
						switch (e.label) {
							case 0:
								return this.node.on(cc.Node.EventType.TOUCH_START, this.DownFun, this), this.noImg ? [3, 2] : (this.noImg = new cc.Node, [4, l.default.loadResourcesPicture("Img/Disable", this.noImg)]);
							case 1:
								e.sent(), this.node.addChild(this.noImg), e.label = 2;
							case 2:
								return this.noImg.active = !this.open, [2]
						}
					})
				})
			}, t.prototype.DownFun = function() {
				return a(this, void 0, void 0, function() {
					return s(this, function() {
						switch (c.managers().soundMgr.playSound("anNiu"), this.open = !this.open, this.noImg.active = !this.open, this.node.color = this.open ? cc.color(255, 255, 255) : cc.color(150, 150, 150), this.node.name) {
							case d.SWITCH_TYPE.SOUND:
								c.managers().soundMgr.setSoundEnabled(this.open);
								break;
							case d.SWITCH_TYPE.VIBRATE:
								c.managers().soundMgr.setVibrateEnabled(this.open)
						}
						return [2]
					})
				})
			}, t
		}(cc.Component);
		cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine",
		"../../engines/libs/node_component": "node_component",
		"../Base/PageBase": "PageBase",
		"../Enum": "Enum",
		"../MainRoot": "MainRoot"
	}],
	PersonalInfo: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "5d86eS1MOBMgK01jUMsO8Un", "PersonalInfo");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
			s = a.ccclass,
			c = a.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.PersonalPage = null, t
				}
				return i(t, e), t.prototype.SetComplete = function(e) {
					this.CloseCall = e
				}, t.prototype.OnBtnCommit = function() {
					this.node.active = !1, this.CloseCall && this.CloseCall()
				}, t.prototype.OnBtnRefuse = function() {}, t.prototype.OnBtnLook = function() {
					this.PersonalPage.active = !0
				}, t.prototype.OnBtnConfirm = function() {
					this.PersonalPage.active = !1
				}, r([c({
					type: cc.Node,
					displayName: "隐私界面"
				})], t.prototype, "PersonalPage", void 0), r([s], t)
			}(cc.Component);
		n.default = l, cc._RF.pop()
	}, {}],
	Plot: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "627417MtApDyL7uYwQiEy6l", "Plot");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/components/comSpSkeleton"),
			s = e("../../Game/MainRoot"),
			c = e("../GameObj/ObjBase"),
			l = cc._decorator,
			u = l.menu,
			d = l.ccclass,
			p = l.property,
			f = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.grassNode = null, t.grassP = null, t
				}
				return i(t, e), t.prototype.beAttack = function() {}, t.prototype.init = function() {
					if (this.initReder(), Math.random() < .4)
						for (var e = 2 * Math.random() + 1, t = 0; t < e; t++) {
							var n = cc.instantiate(this.grassP);
							this.grassNode.addChild(n), n.getChildByName("Cao").getComponent(a.default).playAnimation("0" + Math.floor(3 * Math.random() + 1)).start(!0), n.scale = .5 + .5 * Math.random(), n.y = 25;
							var o = 25 * Math.random();
							n.x = Math.random() < .5 ? o : -o
						}
				}, t.prototype.initReder = function() {
					for (var e = this, t = this.Pos, n = [{
							row: t.row,
							col: t.col + 1
						}, {
							row: t.row,
							col: t.col - 1
						}, {
							row: t.row - 1,
							col: t.col
						}, {
							row: t.row + 1,
							col: t.col
						}], o = "", i = 0; i < n.length; i++) {
						var r = n[i];
						this.Cell.getPointAllTypeObjs(r, this.Type).length > 0 ? o += "1" : o += "0"
					}
					s.default.frameBundle.load("GameAssets/Plot/" + o, cc.SpriteFrame, function(t, n) {
						t ? console.log("加载地块失败>>>>>", JSON.stringify(t)) : e.objSp.getComponent(cc.Sprite).spriteFrame = n
					})
				}, r([p({
					type: cc.Node,
					displayName: "草节点"
				})], t.prototype, "grassNode", void 0), r([p({
					type: cc.Prefab,
					displayName: "草预制体"
				})], t.prototype, "grassP", void 0), r([d, u("游戏单位/地块")], t)
			}(c.default);
		n.default = f, cc._RF.pop()
	}, {
		"../../Game/MainRoot": "MainRoot",
		"../../engines/components/comSpSkeleton": "comSpSkeleton",
		"../GameObj/ObjBase": "ObjBase"
	}],
	RewardView: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "30de07vUj1Ckqt6CK40Y8xf", "RewardView");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
			s = a.ccclass,
			c = a.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.BgLight = null, t.lbTitle = null, t.lbCount = null, t.spfPower = null, t.spfCoin = null, t.spfDiamond = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					this.lbTitle.string = "恭喜", this.OnIn()
				}, t.prototype.OnShowReward = function(e, t, n) {
					void 0 === n && (n = "恭喜"), this.lbTitle.string = n, this.lbCount.string = "+" + Math.floor(t)
				}, t.prototype.OnRewardBg = function() {
					cc.tween(this.BgLight).by(1, {
						angle: 120
					}).repeatForever().start()
				}, t.prototype.OnBtnKnow = function() {
					this.OnOut()
				}, t.prototype.OnIn = function() {
					this.node.scale = .1, this.OnRewardBg(), cc.tween(this.node).to(.3, {
						scale: 1
					}, {
						easing: "backOut"
					}).call(function() {}).start()
				}, t.prototype.OnOut = function() {
					var e = this;
					cc.tween(this.node).to(.3, {
						scale: .1
					}, {
						easing: "backIn"
					}).call(function() {
						e.node.removeFromParent(), e.node.destroy()
					}).start()
				}, r([c(cc.Node)], t.prototype, "BgLight", void 0), r([c(cc.Label)], t.prototype, "lbTitle", void 0), r([c(cc.Label)], t.prototype, "lbCount", void 0), r([c(cc.SpriteFrame)], t.prototype, "spfPower", void 0), r([c(cc.SpriteFrame)], t.prototype, "spfCoin", void 0), r([c(cc.SpriteFrame)], t.prototype, "spfDiamond", void 0), r([s], t)
			}(cc.Component);
		n.default = l, cc._RF.pop()
	}, {}],
	Role: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "a0587WMh5RJ94MUqSAh8vsd", "Role");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			},
			a = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			s = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var c = e("../../engines/components/comSpSkeleton"),
			l = e("../../engines/gameEngine"),
			u = e("../../engines/libs/data_control"),
			d = e("../../Game/Enum"),
			p = e("../../Game/MainRoot"),
			f = e("../GameObj/ObjBase"),
			h = e("../Hint/HintNode"),
			m = cc._decorator,
			y = m.menu,
			g = m.ccclass,
			_ = m.property,
			v = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.prowNode = null, t.prowSp = null, t.leftProw = null, t.leftProwSp = null, t.rightProw = null, t.rightProwSp = null, t.centerNeck = null, t.leftNeck = null, t.rightNeck = null, t.leftHeadAni = null, t.rightHeadAni = null, t.centerHeadAni = null, t.skeeterDeathEffect = null, t.prowHasObstarce = !1, t.prowPoints = [], t.leftProwPoints = [], t.rightProwPoints = [], t.prowState = d.PROW_STATE.PROW_NORMAL, t.reviseComplete = !0, t.isPressAtk = !1, t.isMovetoPoint = !1, t.prowTime = .06, t.moveTime = .16, t.centerProwObstracle = null, t.leftProwObstracle = null, t.rightProwObstracle = null, t.centerAgiPoints = [], t.leftAgiPoints = [], t.rightAgiPoints = [], t.hintNode = null, t.eatSwan = !1, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					e.prototype.onLoad.call(this), this.loadSkin()
				}, t.prototype.loadSkin = function() {
					var e = this,
						t = l.services().userSrv.GetUseSkin(),
						n = "GameAssets/" + p.default.ConfigSerive.GetSkin(t).path;
					p.default.frameBundle.load(n, sp.SkeletonData, function(t, n) {
						t ? console.log("加载皮肤资源失败") : (e.objSk.skeletonData = n, e.playAnimation("Idle", !0))
					})
				}, t.prototype.roleMove = function(e) {
					return a(this, void 0, Promise, function() {
						var t = this;
						return s(this, function() {
							return (this.Operation || this.prowState == d.PROW_STATE.PROW_ING && this.reviseComplete) && !this.isMovetoPoint ? (this.Operation = !1, [2, new Promise(function(n) {
								var o = t.Pos,
									i = [],
									r = d.NODE_TOWARDS.NONE,
									a = t.prowState == d.PROW_STATE.PROW_ING ? 1 : 2,
									s = null;
								r = e;
								for (var c = 1; c <= a; c++) switch (e) {
									case d.NODE_TOWARDS.LEFT:
										s = d.OPERATION_TYPE.LEFT, i.push({
											row: o.row - c,
											col: o.col
										});
										break;
									case d.NODE_TOWARDS.RIGHT:
										s = d.OPERATION_TYPE.RIGHT, i.push({
											row: o.row + c,
											col: o.col
										});
										break;
									case d.NODE_TOWARDS.UP:
										r = d.NODE_TOWARDS.UP, s = d.OPERATION_TYPE.UP, i.push({
											row: o.row,
											col: o.col + c
										});
										break;
									case d.NODE_TOWARDS.DOWN:
										s = d.OPERATION_TYPE.DOWN, i.push({
											row: o.row,
											col: o.col - c
										})
								}
								if (t.prowState != d.PROW_STATE.PROW_ING) t.EndTworad = t.Tworads, t.Tworads = r, t.updateTworads();
								else switch (t.Tworads) {
									case d.NODE_TOWARDS.LEFT:
									case d.NODE_TOWARDS.RIGHT:
										if (e != d.NODE_TOWARDS.LEFT && e != d.NODE_TOWARDS.RIGHT) return;
										break;
									case d.NODE_TOWARDS.UP:
									case d.NODE_TOWARDS.DOWN:
										if (e != d.NODE_TOWARDS.UP && e != d.NODE_TOWARDS.DOWN) return
								}
								var u = 0,
									h = null,
									m = p.default.LevelSystem.MapSize;
								for (c = 0; c < i.length; c++) {
									var y = i[c],
										g = y.row,
										_ = y.col;
									if (g >= m.row || _ >= m.col || g < 0 || _ < 0) return t.prowState != d.PROW_STATE.PROW_ING && (t.Operation = !0), void n();
									for (var v = t.Cell.getNodeByFrogPoint(y), b = void 0, O = 0; O < v.length; O++) {
										var w = v[O];
										if (w) {
											var P = w.getComponent(f.default),
												S = P.Flags;
											if (console.log(P.Flags, ">?????????????"), S.includes(d.NODE_FLAG.OBSTACLE) || S.includes(d.NODE_FLAG.IMPENETRABLE_OBJ)) {
												b = !1;
												break
											}
											S.includes(d.NODE_FLAG.ROLEMOVEOBJ) && t.checkPointCanMove(y) && (b = !0, u = c)
										}
									}
									if (b) {
										h = y;
										break
									}
								}
								var C = t.moveTime;
								if (h) {
									var E = p.default.LevelSystem.getPosByFrogPoint(h);
									if (t.Pos, t.Cell.changeNodeToPoint(t.node, h), t.prowState != d.PROW_STATE.PROW_ING && t.hintNode.setGuidance(s), t.prowState == d.PROW_STATE.PROW_ING && t.prowHasObstarce) {
										var N = t.prowPoints[t.prowPoints.length - 1],
											A = Math.abs(h.row - N.row),
											M = Math.abs(h.col - N.col),
											R = A > M ? A : M,
											L = "Pull_03";
										R > t.AtkDistance && t.NodeState != d.NODE_STATE.DOUBLE ? (t.Cell.LevelCtrl.addOneprowAddAni(t), l.default.emit(d.GAME_EVENT.PROW_LENGTH_CHANGE, t.AtkDistance), C = .3, l.default.getManagers().soundMgr.playSound("prowStroth"), t.setAtkDistance(R)) : (L = "Pull_22", C = .16), t.playAnimation(L, !1, function() {
											t.playAnimation("Pull_2", !0)
										}), t.reviseProw(C)
									} else {
										switch (L = "Idle", u) {
											case 0:
												L = "Jump_01";
												break;
											case 1:
												L = "Jump_02"
										}
										t.playAnimation(L, !1, function() {
											t.playAnimation("Idle", !0)
										})
									}
									l.default.getManagers().soundMgr.playSound("jump"), cc.tween(t.node).to(C, {
										position: E
									}).call(function() {
										t.Cell.onePointBeTread(h), t.Cell.LevelCtrl.stepEnd(), t.EndPoint = h, t.prowState != d.PROW_STATE.PROW_ING && (t.Operation = !0), n()
									}).start()
								} else t.prowState != d.PROW_STATE.PROW_ING && t.hintNode.setGuidance(s), t.EndTworad == t.Tworads && (l.default.getManagers().soundMgr.playSound("Warn"), l.default.getManagers().soundMgr.playVibrate()), t.prowState != d.PROW_STATE.PROW_ING && (t.Operation = !0), n()
							})]) : [2, Promise.resolve()]
						})
					})
				}, t.prototype.checkPointCanMove = function(e) {
					var t, n, o, i, r, a, s, c;
					if (this.NodeState != d.NODE_STATE.DOUBLE || this.prowState != d.PROW_STATE.PROW_ING) return !0;
					switch (this.Tworads) {
						case d.NODE_TOWARDS.LEFT:
							if (e.row < (null === (t = this.leftProwObstracle) || void 0 === t ? void 0 : t.Pos.row)) return !1;
							if (e.row < (null === (n = this.rightProwObstracle) || void 0 === n ? void 0 : n.Pos.row)) return !1;
							break;
						case d.NODE_TOWARDS.RIGHT:
							if (e.row > (null === (o = this.leftProwObstracle) || void 0 === o ? void 0 : o.Pos.row)) return !1;
							if (e.row > (null === (i = this.rightProwObstracle) || void 0 === i ? void 0 : i.Pos.row)) return !1;
							break;
						case d.NODE_TOWARDS.UP:
							if (e.col > (null === (r = this.leftProwObstracle) || void 0 === r ? void 0 : r.Pos.col)) return !1;
							if (e.col > (null === (a = this.rightProwObstracle) || void 0 === a ? void 0 : a.Pos.col)) return !1;
							break;
						case d.NODE_TOWARDS.DOWN:
							if (e.col < (null === (s = this.leftProwObstracle) || void 0 === s ? void 0 : s.Pos.col)) return !1;
							if (e.col < (null === (c = this.rightProwObstracle) || void 0 === c ? void 0 : c.Pos.col)) return !1
					}
					return !0
				}, t.prototype.updateTworads = function() {
					switch (this.Tworads) {
						case d.NODE_TOWARDS.LEFT:
							this.objSp.angle = 90, this.prowNode.angle = 90, this.objSk.node.angle = 90, this.leftProw.angle = 135, this.rightProw.angle = 45, this.centerNeck && (this.centerNeck.angle = 90), this.leftNeck && (this.leftNeck.angle = 135), this.rightNeck && (this.rightNeck.angle = 45);
							break;
						case d.NODE_TOWARDS.RIGHT:
							this.objSp.angle = -90, this.prowNode.angle = -90, this.objSk.node.angle = -90, this.leftProw.angle = -45, this.rightProw.angle = -135, this.centerNeck && (this.centerNeck.angle = -90), this.leftNeck && (this.leftNeck.angle = -45), this.rightNeck && (this.rightNeck.angle = -135);
							break;
						case d.NODE_TOWARDS.UP:
							this.objSp.angle = 0, this.prowNode.angle = 0, this.objSk.node.angle = 0, this.leftProw.angle = 45, this.rightProw.angle = -45, this.centerNeck && (this.centerNeck.angle = 0), this.leftNeck && (this.leftNeck.angle = 45), this.rightNeck && (this.rightNeck.angle = -45);
							break;
						case d.NODE_TOWARDS.DOWN:
							this.objSp.angle = 180, this.prowNode.angle = 180, this.objSk.node.angle = 180, this.leftProw.angle = 225, this.rightProw.angle = 135, this.centerNeck && (this.centerNeck.angle = 180), this.leftNeck && (this.leftNeck.angle = 225), this.rightNeck && (this.rightNeck.angle = 135)
					}
				}, t.prototype.prowToPoint = function(e, t, n, o, i) {
					return void 0 === n && (n = !1), a(this, void 0, void 0, function() {
						return s(this, function() {
							return console.log("舌头伸出>>>>>>>>>>>"), this.NodeState == d.NODE_STATE.NORMAL ? [2, this.normalProwToPoint(e, t, n, o)] : [2, this.doubleProwToPoint(e, t, n, o, i)]
						})
					})
				}, t.prototype.normalProwToPoint = function(e, t, n, o) {
					return void 0 === n && (n = !1), a(this, void 0, void 0, function() {
						var i = this;
						return s(this, function() {
							return [2, new Promise(function(r) {
								i.hideSkeeterAi(e), i.playAnimation("Pull_1", !1, function() {
									l.default.getManagers().soundMgr.playSound("prowTo"), i.playAnimation("Pull_2", !0), i.setProwNodeActive(i.prowNode, !0);
									for (var a = i.Pos, s = Math.abs(t.row - a.row), c = Math.abs(t.col - a.col), u = s > c ? s : c, f = i.prowTime, h = (u - 1) * f / 2 + f, m = p.default.LevelSystem.ItemSize, y = m * u - (n ? m / 2 : 0), g = i.prowPoints, _ = function(t) {
											var n = g[t];
											i.scheduleOnce(function() {
												i.Cell.atkOnePointObjs(n, i.Tworads, i, e, i.centerAgiPoints)
											}, i.prowTime / 2 * t)
										}, v = 0; v < g.length; v++) _(v);
									if (o) {
										var b = o.getChildByName("1");
										cc.tween(b).to(h, {
											height: y
										}).start()
									}
									cc.tween(i.prowSp).to(h, {
										height: y
									}).call(function() {
										i.isPressAtk && (i.prowState = d.PROW_STATE.PROW_ING), n && i.oneHeadAnimation(i.centerHeadAni, "Attack2", !1), r()
									}).start()
								})
							})]
						})
					})
				}, t.prototype.doubleProwToPoint = function(e, t, n, o, i) {
					return a(this, void 0, void 0, function() {
						var r = this;
						return s(this, function() {
							return [2, new Promise(function(a) {
								var s = r.Pos,
									c = e;
								r.hideSkeeterAi(c), c.active = !0;
								var l = Math.abs(t.row - s.row),
									u = Math.abs(t.col - s.col),
									f = l > u ? l : u,
									h = r.prowTime,
									m = (f - 1) * h / 2 + h,
									y = p.default.LevelSystem.ItemSize,
									g = n ? y / 2 : 0,
									_ = cc.v2(s.row, s.col),
									v = cc.v2(t.row, t.col),
									b = _.sub(v).mag() * y - g,
									O = [],
									w = [];
								"left" == i || "Left" == i ? (O = r.leftProwPoints, w = r.leftAgiPoints) : (O = r.rightProwPoints, w = r.rightAgiPoints);
								for (var P = function(e) {
										var t = O[e];
										r.scheduleOnce(function() {
											r.Cell.atkOnePointObjs(t, r.Tworads, r, c, w)
										}, r.prowTime / 2 * e)
									}, S = 0; S < O.length; S++) P(S);
								var C = c.getChildByName("1");
								if (C.active = !0, o) {
									var E = o.getChildByName("1");
									cc.tween(E).to(m, {
										height: b
									}).start()
								}
								c.uuid == r.leftProw.uuid ? r.leftHeadAni : r.rightHeadAni, cc.tween(C).to(m, {
									height: b
								}).call(function() {
									r.prowState = d.PROW_STATE.PROW_ING, a()
								}).start()
							})]
						})
					})
				}, t.prototype.playDoubleProwAni = function() {
					return a(this, void 0, void 0, function() {
						var e = this;
						return s(this, function() {
							return [2, new Promise(function(t) {
								e.playAnimation("Pull_1", !1, function() {
									l.default.getManagers().soundMgr.playSound("prowTo"), e.playAnimation("Pull_2", !0), t()
								})
							})]
						})
					})
				}, t.prototype.prowBack = function(e, t, n) {
					return void 0 === e && (e = this.prowNode), void 0 === t && (t = !0), void 0 === n && (n = this.centerNeck), a(this, void 0, void 0, function() {
						return s(this, function() {
							return console.log("舌头缩回>>>>>>>>>>>"), this.NodeState == d.NODE_STATE.NORMAL ? this.normalProwBack(e, t, n) : this.doubleProwBack(e, t, n), [2]
						})
					})
				}, t.prototype.normalProwBack = function(e, t, n) {
					var o = this;
					return void 0 === e && (e = this.prowNode), void 0 === t && (t = !0), void 0 === n && (n = this.centerNeck), new Promise(function(i) {
						var r = e,
							a = r.getChildByName("1");
						o.prowState = d.PROW_STATE.PROW_BACK, l.default.emit(d.GAME_EVENT.HINTATTACKUP), o.Operation = !1;
						var s = o.prowTime,
							c = p.default.LevelSystem.ItemSize,
							u = (a.height / c - 1) * s / 2 + s;
						if (o.skeeterDeathAni(r), n) {
							var f = n.getChildByName("1");
							cc.tween(f).to(u, {
								height: 0
							}).start()
						}
						o.scheduleOnce(function() {
							o.skeeterBackEffect(r), o.hideSkeeterAi(r), o.prowState = d.PROW_STATE.PROW_NORMAL, o.playAnimation("Pull_3", !1, function() {
								o.playAnimation("Idle", !0), o.hideSkeeterAi(r)
							}), t && (o.Operation = !0), o.eatSwan && o.NodeState == d.NODE_STATE.NORMAL && (o.NodeState = d.NODE_STATE.DOUBLE, l.default.emit(d.GAME_EVENT.CHANGEDOUBLE), o.TortoiseChangeTwoProw()), o.Cell.LevelCtrl.stepEnd(), i()
						}, u), cc.tween(a).to(u, {
							height: 0
						}).call(function() {
							o.setProwNodeActive(r, !1)
						}).start()
					})
				}, t.prototype.doubleProwBack = function(e, t, n) {
					var o = this;
					return void 0 === e && (e = this.prowNode), void 0 === t && (t = !0), void 0 === n && (n = this.centerNeck), new Promise(function(t) {
						var i = e,
							r = i.getChildByName("1");
						o.prowState = d.PROW_STATE.PROW_BACK, o.Operation = !1;
						var a = o.prowTime,
							s = p.default.LevelSystem.ItemSize,
							c = (r.height / s - 1) * a / 2 + a;
						if (o.skeeterDeathAni(i), n) {
							var u = n.getChildByName("1");
							cc.tween(u).to(c, {
								height: 0
							}).start()
						}
						o.scheduleOnce(function() {
							o.skeeterBackEffect(i), o.hideSkeeterAi(i);
							var e = o.leftProw.getChildByName("1"),
								n = o.rightProw.getChildByName("1");
							e.height <= 0 && n.height <= 0 ? (o.prowState = d.PROW_STATE.PROW_NORMAL, o.playAnimation("Pull_3", !1, function() {
								o.playAnimation("Idle", !0), o.hideSkeeterAi(i)
							}), o.Operation = !0, o.Cell.LevelCtrl.stepEnd(), l.default.emit(d.GAME_EVENT.HINTATTACKUP), o.updateTworads()) : o.prowState = d.PROW_STATE.PROW_ING, t()
						}, c), cc.tween(r).to(c, {
							height: 0
						}).call(function() {
							o.setProwNodeActive(i, !1)
						}).start()
					})
				}, t.prototype.reviseProw = function(e) {
					return a(this, void 0, void 0, function() {
						return s(this, function() {
							return this.NodeState == d.NODE_STATE.NORMAL ? this.normalReviseProw(e) : this.doubleReviseProw(e), [2]
						})
					})
				}, t.prototype.normalReviseProw = function(e) {
					var t = this;
					this.reviseComplete = !1;
					var n = this.Pos,
						o = this.centerProwObstracle;
					if (o && o.node.isValid) {
						var i = this.centerProwObstracle.Pos,
							r = cc.v2(n.row, n.col),
							a = cc.v2(i.row, i.col),
							s = p.default.LevelSystem.ItemSize,
							c = r.sub(a).mag() * s - s / 2;
						if (c > this.prowSp.height && this.hintNode.setGuidance(d.OPERATION_TYPE.STRETCH), this.centerNeck) {
							var l = this.centerNeck.getChildByName("1");
							cc.tween(l).to(e, {
								height: c
							}).start()
						}
						cc.tween(this.prowSp).to(e, {
							height: c
						}).call(function() {
							t.reviseComplete = !0, t.Cell.LevelCtrl.stepEnd()
						}).start()
					}
				}, t.prototype.doubleReviseProw = function(e) {
					var t = this;
					this.reviseComplete = !1;
					var n = this.Pos,
						o = p.default.LevelSystem.ItemSize,
						i = this.leftProwObstracle,
						r = this.rightProwObstracle;
					if (i && i.node.isValid) {
						var a = this.leftProwObstracle.Pos,
							s = cc.v2(n.row, n.col),
							c = cc.v2(a.row, a.col),
							l = s.sub(c).mag() * o - o / 2,
							d = this.leftProw.getChildByName("1"),
							f = u.default.getV2Angle(s, c);
						if (this.leftNeck) {
							var h = this.leftNeck.getChildByName("1");
							cc.tween(h).to(e, {
								height: l
							}).start()
						}
						cc.tween(this.leftProw).to(e, {
							angle: f + 90
						}).start(), this.leftNeck && cc.tween(this.leftNeck).to(e, {
							angle: f + 90
						}).start(), cc.tween(d).to(e, {
							height: l
						}).call(function() {
							t.reviseComplete = !0
						}).start()
					}
					if (r && r.node.isValid) {
						var m = this.rightProwObstracle.Pos,
							y = cc.v2(n.row, n.col),
							g = cc.v2(m.row, m.col),
							_ = y.sub(g).mag() * o - o / 2;
						d = this.rightProw.getChildByName("1"), f = u.default.getV2Angle(y, g), this.rightNeck && (h = this.rightNeck.getChildByName("1"), cc.tween(h).to(e, {
							height: _
						}).start()), cc.tween(this.rightProw).to(e, {
							angle: f + 90
						}).start(), this.rightNeck && cc.tween(this.rightNeck).to(e, {
							angle: f + 90
						}).start(), cc.tween(d).to(e, {
							height: _
						}).call(function() {
							t.reviseComplete = !0
						}).start()
					}
				}, t.prototype.attack = function() {
					return a(this, void 0, Promise, function() {
						return s(this, function() {
							if (!this.Operation) return [2, Promise.resolve()];
							switch (this.Operation = !1, this.NodeState) {
								case d.NODE_STATE.NORMAL:
									return [2, this.normalAttack()];
								case d.NODE_STATE.DOUBLE:
									return [2, this.doubleAttack()]
							}
							return [2]
						})
					})
				}, t.prototype.normalAttack = function() {
					var e = this;
					return this.prowPoints = [], this.centerAgiPoints = [], new Promise(function(t) {
						return a(e, void 0, void 0, function() {
							var e, n, o, i, r, c, l, u, p, h, m, y, g, _, v, b, O, w, P, S, C = this;
							return s(this, function(E) {
								switch (E.label) {
									case 0:
										for (e = this.AtkDistance, n = this.Tworads, o = this.Pos, i = [], r = this.Cell, h = 1; h <= e + 1; h++) {
											switch (c = null, n) {
												case d.NODE_TOWARDS.LEFT:
													c = {
														row: o.row - h,
														col: o.col
													};
													break;
												case d.NODE_TOWARDS.RIGHT:
													c = {
														row: o.row + h,
														col: o.col
													};
													break;
												case d.NODE_TOWARDS.UP:
													c = {
														row: o.row,
														col: o.col + h
													};
													break;
												case d.NODE_TOWARDS.DOWN:
													c = {
														row: o.row,
														col: o.col - h
													}
											}
											h <= e && i.push(c), this.centerAgiPoints.push(c)
										}
										for (l = null, u = !1, p = null, h = 0; h < i.length; h++) {
											for (m = i[h], y = r.getNodeByFrogPoint(m), this.prowPoints.push(m), g = 0; g < y.length; g++)
												if ((_ = y[g]) && (v = _.getComponent(f.default)).Flags.includes(d.NODE_FLAG.OBSTACLE)) {
													u = !0, l = m, p = v;
													break
												} if (l) break
										}
										return this.prowHasObstarce = u, l || (l = i[i.length - 1]), this.centerProwObstracle = p, b = this.centerNeck, [4, this.prowToPoint(this.prowNode, l, u, b)];
									case 1:
										return E.sent(), this.hintNode.setGuidance(d.OPERATION_TYPE.ATTACK), u ? [3, 3] : [4, this.prowBack(this.prowNode)];
									case 2:
										return E.sent(), t(), [3, 7];
									case 3:
										if (!(O = this.Cell.getPointSpecificFlagObjs(l, d.NODE_FLAG.OBSTACLE))) return [3, 4];
										switch (this.Pos, this.Flags.push(d.NODE_FLAG.NOTMOVEOBJ), w = this.Tworads, P = cc.v2(0, 0), this.Tworads) {
											case d.NODE_TOWARDS.LEFT:
												w = d.NODE_TOWARDS.RIGHT, P = cc.v2(-1, 0);
												break;
											case d.NODE_TOWARDS.RIGHT:
												w = d.NODE_TOWARDS.LEFT, P = cc.v2(1, 0);
												break;
											case d.NODE_TOWARDS.UP:
												w = d.NODE_TOWARDS.DOWN, P = cc.v2(0, 1);
												break;
											case d.NODE_TOWARDS.DOWN:
												w = d.NODE_TOWARDS.UP, P = cc.v2(0, -1)
										}
										return S = this.Cell.getOneNodeIsInGroup(O), this.isMovetoPoint = !0, this.Cell.moveOneNodeByDir(S, w, 0, function(e) {
											return a(C, void 0, void 0, function() {
												var t, n, o, i, r, a, c, l, u, p, h, m, y, g = this;
												return s(this, function() {
													for ((t = this.Flags.indexOf(d.NODE_FLAG.NOTMOVEOBJ)) > -1 && this.Flags.splice(t, 1), n = [], u = 0; u < e.length; u++)(o = e[u]) && (i = o.getComponent(f.default), (r = i.Flags).includes(d.NODE_FLAG.NOTMOVEOBJ) || i.Flags.includes(d.NODE_FLAG.PIERCEOBJ) || (r.push(d.NODE_FLAG.NOTMOVEOBJ), n.push(o)));
													for (a = this.Cell.getNodeByFrogPoint(this.Pos), c = [], l = [], u = 0; u < a.length; u++)
														if (p = a[u])
															for (h = this.Cell.getOneNodeIsInGroup(p), m = 0; m < h.length; m++) !(y = h[m]) || c.includes(y.uuid) || y.getComponent(f.default).Flags.includes(d.NODE_FLAG.PIERCEOBJ) || y.getComponent(f.default).Flags.includes(d.NODE_FLAG.OBSTACLE_NOTMOVE_OBJ) || (l.push(y), c.push(y.uuid));
													return this.Cell.moveOneNodeByDir(l, this.Tworads, 0, function() {
														for (var e = 0; e < n.length; e++) {
															var t = n[e];
															if (t) {
																var o = t.getComponent(f.default),
																	i = o.Flags.indexOf(d.NODE_FLAG.NOTMOVEOBJ);
																i > -1 && o.Flags.splice(i, 1)
															}
														}
														g.isMovetoPoint = !1, g.isPressAtk || g.prowBack(g.prowNode), g.prowState != d.PROW_STATE.PROW_ING && (g.Operation = !0)
													}, function() {
														var e = g.Pos;
														e.row, P.x, e.col, P.y, g.reviseProw(.1)
													}), [2]
												})
											})
										}, function() {
											var e = O.getComponent(f.default).Pos;
											e.row, P.x, e.col, P.y, C.reviseProw(.1)
										}), [3, 6];
									case 4:
										return this.isPressAtk ? [3, 6] : [4, this.prowBack(this.prowNode)];
									case 5:
										E.sent(), E.label = 6;
									case 6:
										t(), E.label = 7;
									case 7:
										return [2]
								}
							})
						})
					})
				}, t.prototype.doubleAttack = function() {
					return a(this, void 0, void 0, function() {
						var e, t, n, o, i, r, c = this;
						return s(this, function() {
							return this.leftProwPoints = [], this.rightProwPoints = [], this.leftAgiPoints = [], this.rightAgiPoints = [], e = this.AtkDistance, t = this.Tworads, n = this.Pos, o = [], i = [], r = this.Cell, [2, new Promise(function(l) {
								return a(c, void 0, void 0, function() {
									var a, c, u, p, h, m, y, g, _, v, b, O, w, P, S, C, E = this;
									return s(this, function(s) {
										switch (s.label) {
											case 0:
												for (b = 1; b <= e + 1; b++) {
													switch (a = null, c = null, t) {
														case d.NODE_TOWARDS.LEFT:
															a = {
																row: n.row - b,
																col: n.col - b
															}, c = {
																row: n.row - b,
																col: n.col + b
															};
															break;
														case d.NODE_TOWARDS.RIGHT:
															a = {
																row: n.row + b,
																col: n.col + b
															}, c = {
																row: n.row + b,
																col: n.col - b
															};
															break;
														case d.NODE_TOWARDS.UP:
															a = {
																row: n.row - b,
																col: n.col + b
															}, c = {
																row: n.row + b,
																col: n.col + b
															};
															break;
														case d.NODE_TOWARDS.DOWN:
															a = {
																row: n.row + b,
																col: n.col - b
															}, c = {
																row: n.row - b,
																col: n.col - b
															}
													}
													b <= e && (o.push(a), i.push(c)), this.leftAgiPoints.push(a), this.rightAgiPoints.push(c)
												}
												for (u = null, p = null, h = !1, m = !1, y = null, g = null, b = 0; b < o.length; b++) {
													for (_ = o[b], w = r.getNodeByFrogPoint(_), this.leftProwPoints.push(_), v = 0; v < w.length; v++)
														if ((S = w[v]) && (C = S.getComponent(f.default)).Flags.includes(d.NODE_FLAG.OBSTACLE)) {
															h = !0, u = _, y = C;
															break
														} if (u) break
												}
												for (u || (u = o[i.length - 1]), b = 0; b < i.length; b++) {
													for (O = i[b], w = r.getNodeByFrogPoint(O), this.rightProwPoints.push(O), P = 0; P < w.length; P++)
														if ((S = w[P]) && (C = S.getComponent(f.default)).Flags.includes(d.NODE_FLAG.OBSTACLE)) {
															m = !0, p = O, g = C;
															break
														} if (p) break
												}
												return p || (p = i[i.length - 1]), this.leftProwObstracle = y, this.rightProwObstracle = g, (this.leftProwObstracle || this.rightProwObstracle) && (this.prowHasObstarce = !0), [4, this.playDoubleProwAni()];
											case 1:
												return s.sent(), this.prowToPoint(this.leftProw, u, h, this.leftNeck, "left").then(function() {
													E.leftProwObstracle && E.isPressAtk || E.prowBack(E.leftProw, !1, E.leftNeck)
												}), this.prowToPoint(this.rightProw, p, m, this.rightNeck, "right").then(function() {
													E.rightProwObstracle && E.isPressAtk || E.prowBack(E.rightProw, !1, E.rightNeck)
												}), this.hintNode.setGuidance(d.OPERATION_TYPE.ATTACK), l(), [2]
										}
									})
								})
							})]
						})
					})
				}, t.prototype.playAnimation = function(e, t, n, o) {
					this.objSk.playAnimation(e).onComplete(1, n).onEvent(1, o).start(t)
				}, t.prototype.setDeathSkeeter = function(e, t, n) {
					var o = t.getChildByName("1").getChildByName("2").getChildByName("skeeter");
					if (o) switch (e) {
						case d.NODE_TOWARDS.LEFT:
							o.angle = -90, this.skeeterDeathEffect.node.angle = 180;
							break;
						case d.NODE_TOWARDS.RIGHT:
							o.angle = 90, this.skeeterDeathEffect.node.angle = 180;
							break;
						case d.NODE_TOWARDS.UP:
							o.angle = 0, this.skeeterDeathEffect.node.angle = 180;
							break;
						case d.NODE_TOWARDS.DOWN:
							o.angle = 180, this.skeeterDeathEffect.node.angle = 180
					}
					o.active = !0, o.getComponent(c.default).skeletonData = n
				}, t.prototype.skeeterDeathAni = function(e) {
					var t = "Die_Left",
						n = e.getChildByName("1").getChildByName("2").getChildByName("skeeter");
					if (n.active) {
						if (this) switch (this.Tworads) {
							case d.NODE_TOWARDS.LEFT:
								t = "Die_Left";
								break;
							case d.NODE_TOWARDS.RIGHT:
								t = "Die_Right";
								break;
							case d.NODE_TOWARDS.UP:
								t = "Die_Up";
								break;
							case d.NODE_TOWARDS.DOWN:
								t = "Die_Down"
						}
						l.default.getManagers().soundMgr.playSound("eat");
						var o = n.getComponent(c.default);
						o.playAnimation(t).onComplete(1, function() {
							o.playAnimation("Idle").start(!0)
						}).start(!1)
					}
				}, t.prototype.skeeterBackEffect = function(e) {
					var t = this,
						n = e.getChildByName("1").getChildByName("2").getChildByName("skeeter");
					this.skeeterDeathEffect.node.active = n.active, this.skeeterDeathEffect.playAnimation("03").onComplete(1, function() {
						t.skeeterDeathEffect.node.active = !1
					}).start(!1)
				}, t.prototype.hideSkeeterAi = function(e) {
					e.getChildByName("1").getChildByName("2").getChildByName("skeeter").active = !1
				}, t.prototype.winAni = function() {
					this.playAnimation("Win", !1), this.scheduleOnce(function() {
						l.default.getManagers().soundMgr.playSound("dage")
					}, .1)
				}, t.prototype.startHint = function() {
					this.hintNode.node.active = !0, this.hintNode.bindDate(this, this.Cell.LevelCtrl.tips)
				}, t.prototype.setProwNodeActive = function(e, t) {
					e.active = t
				}, t.prototype.changeRoleDouble = function() {
					this.eatSwan = !0
				}, t.prototype.TortoiseChangeTwoProw = function() {}, t.prototype.oneHeadAnimation = function(e, t, n) {
					e && e.playAnimation(t).start(n)
				}, r([_({
					type: cc.Node,
					displayName: "舌头节点"
				})], t.prototype, "prowNode", void 0), r([_({
					type: cc.Node,
					displayName: "舌头图片"
				})], t.prototype, "prowSp", void 0), r([_({
					type: cc.Node,
					displayName: "左边舌头"
				})], t.prototype, "leftProw", void 0), r([_({
					type: cc.Node,
					displayName: "左边舌头图片"
				})], t.prototype, "leftProwSp", void 0), r([_({
					type: cc.Node,
					displayName: "右边舌头"
				})], t.prototype, "rightProw", void 0), r([_({
					type: cc.Node,
					displayName: "右边舌头图片"
				})], t.prototype, "rightProwSp", void 0), r([_({
					type: cc.Node,
					displayName: "中间脖子"
				})], t.prototype, "centerNeck", void 0), r([_({
					type: cc.Node,
					displayName: "左边脖子"
				})], t.prototype, "leftNeck", void 0), r([_({
					type: cc.Node,
					displayName: "右边脖子"
				})], t.prototype, "rightNeck", void 0), r([_({
					type: c.default,
					displayName: "左边的头的动画"
				})], t.prototype, "leftHeadAni", void 0), r([_({
					type: c.default,
					displayName: "右边的头的动画"
				})], t.prototype, "rightHeadAni", void 0), r([_({
					type: c.default,
					displayName: "中间的头的动画"
				})], t.prototype, "centerHeadAni", void 0), r([_({
					type: c.default,
					displayName: "蚊子的死亡特效动画"
				})], t.prototype, "skeeterDeathEffect", void 0), r([_({
					type: h.default,
					displayName: "提示节点"
				})], t.prototype, "hintNode", void 0), r([g, y("游戏单位/玩家角色")], t)
			}(f.default);
		n.default = v, cc._RF.pop()
	}, {
		"../../Game/Enum": "Enum",
		"../../Game/MainRoot": "MainRoot",
		"../../engines/components/comSpSkeleton": "comSpSkeleton",
		"../../engines/gameEngine": "gameEngine",
		"../../engines/libs/data_control": "data_control",
		"../GameObj/ObjBase": "ObjBase",
		"../Hint/HintNode": "HintNode"
	}],
	ServicesBase: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "324efUWgpdEh5SD2sHd0qFk", "ServicesBase");
		var o = this && this.__spreadArrays || function() {
			for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
			var o = Array(e),
				i = 0;
			for (t = 0; t < n; t++)
				for (var r = arguments[t], a = 0, s = r.length; a < s; a++, i++) o[i] = r[a];
			return o
		};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var i = function() {
			function e() {}
			return e.prototype.ServiceInit = function() {
				this.Log("----服务初始化", this.serviceName)
			}, e.prototype.Log = function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				console.log.apply(console, o([this.serviceName + ":---{\n"], e, ["\n}"]))
			}, e
		}();
		n.default = i, cc._RF.pop()
	}, {}],
	Skeeter: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "31292DXZihHAbOJanjsk7di", "Skeeter");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../Game/Enum"),
			s = e("../GameObj/ObjBase"),
			c = e("./Role"),
			l = cc._decorator,
			u = l.menu,
			d = l.ccclass,
			p = (l.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.attackAniArr = ["3"], t.blockNextStep = !1, t
				}
				return i(t, e), t.prototype.beAttack = function(e, t, n, o) {
					var i = this,
						r = this.Cell.getPointSpecificFlagObjs(this.Pos, a.NODE_FLAG.OBSTACLE_NOTMOVE_OBJ);
					e || r ? r && (this.blockNextStep = !0, this.initReder(), this.scheduleOnce(function() {
						i.blockNextStep = !1, i.initReder()
					}, .8)) : (n && n instanceof c.default && n.setDeathSkeeter(t, o, this.objSk.skeletonData), this.Cell.removeOneNode(this.node, function() {}))
				}, t.prototype.playAttackEffect = function(e) {
					var t = this,
						n = this.attackAniArr;
					if (this.beAttackEffect) {
						switch (e) {
							case a.NODE_TOWARDS.LEFT:
								this.beAttackEffect.node.angle = 90;
								break;
							case a.NODE_TOWARDS.RIGHT:
								this.beAttackEffect.node.angle = -90;
								break;
							case a.NODE_TOWARDS.UP:
								this.beAttackEffect.node.angle = 180;
								break;
							case a.NODE_TOWARDS.DOWN:
								this.beAttackEffect.node.angle = 0
						}
						this.beAttackEffect.node.active = !0, this.beAttackEffect.playAnimation(n[Math.floor(Math.random() * n.length)]).onComplete(1, function() {
							t.beAttackEffect.node.active = !1
						}).start(!1)
					}
				}, t.prototype.init = function() {
					this.initReder()
				}, t.prototype.initReder = function() {
					var e = this.Pos,
						t = this.Cell.getPointSpecificFlagObjs(e, a.NODE_FLAG.ROLE),
						n = this.Cell.getPointSpecificFlagObjs(e, a.NODE_FLAG.OBSTACLE),
						o = this.Cell.getPointSpecificFlagObjs(e, a.NODE_FLAG.OBSTACLE_NOTMOVE_OBJ);
					if (n || t || o) {
						var i;
						(i = n ? n.getComponent(s.default) : t ? t.getComponent(s.default) : o.getComponent(s.default)) && this.rederType(i.Tworads)
					} else this.rederType(null)
				}, t.prototype.rederType = function(e) {
					var t = 255,
						n = new cc.Vec2(0, 0),
						o = .5;
					switch (e) {
						case a.NODE_TOWARDS.LEFT:
							t = 200, n = cc.v2(-50, 0), o = .7;
							break;
						case a.NODE_TOWARDS.RIGHT:
							t = 200, n = cc.v2(50, 0), o = .7;
							break;
						case a.NODE_TOWARDS.UP:
							t = 200, n = cc.v2(0, 50), o = .7;
							break;
						case a.NODE_TOWARDS.DOWN:
							t = 200, n = cc.v2(0, -50), o = .7;
							break;
						case a.NODE_TOWARDS.NONE:
							t = 200, n = cc.v2(0, 0), o = .7;
							break;
						default:
							n = cc.v2(0, 0), o = .5
					}
					cc.tween(this.objSk.node).to(.2, {
						opacity: t,
						x: n.x,
						y: n.y,
						scale: o
					}).start()
				}, t.prototype.deathAni = function() {
					var e = this.DeathObj,
						t = "Die_Left";
					if (e) switch (e.Tworads) {
						case a.NODE_TOWARDS.LEFT:
							t = "Die_Left";
							break;
						case a.NODE_TOWARDS.RIGHT:
							t = "Die_Right";
							break;
						case a.NODE_TOWARDS.UP:
							t = "Die_Up";
							break;
						case a.NODE_TOWARDS.DOWN:
							t = "Die_Down"
					}
					this.objSk.playAnimation(t).start(!1)
				}, t.prototype.stepEnd = function() {
					this.blockNextStep || this.initReder()
				}, t.prototype.moveToPoints = function() {}, r([d, u("游戏单位/蚊子")], t)
			}(s.default));
		n.default = p, cc._RF.pop()
	}, {
		"../../Game/Enum": "Enum",
		"../GameObj/ObjBase": "ObjBase",
		"./Role": "Role"
	}],
	SkinBtn: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "e3321Hx4VBPkLf4/3Nog6Cp", "SkinBtn");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			},
			a = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			s = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var c = e("../../engines/components/comSpSkeleton"),
			l = e("../../engines/gameEngine"),
			u = e("../../engines/managers/gameContent/gameMode_json"),
			d = e("../Const"),
			p = e("../Enum"),
			f = e("../MainRoot"),
			h = cc._decorator,
			m = h.ccclass,
			y = h.property,
			g = h.menu,
			_ = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.bgSprite = null, t.skinSprite = null, t.adMask = null, t.selectedFrame = null, t.adIcon = null, t.getLabel = null, t.sk = null, t.needReSize = !0, t.m_prams = {}, t.userSrv = null, t
				}
				return i(t, e), t.prototype.Init = function(e) {
					d.Copy(e, this.m_prams), this.userSrv = l.services().userSrv, this.RefreshBtnInfo(e.type), this.m_prams.noAdUnlock && (this.adIcon.active = !1, this.getLabel.string = "Mở khóa"), l.default.on(p.GAME_EVENT.ON_SKINBTN_CLICK, this.RefreshBtnInfo, this)
				}, t.prototype.RefreshBtnInfo = function(e) {
					var t = this;
					if (this.m_prams.type == e) {
						if (f.default.frameBundle, f.default.frameBundle.load("GameAssets/" + this.m_prams.shopPath, sp.SkeletonData, function(e, n) {
								e ? console.log("加载皮肤资源失败", "GameAssets/" + t.m_prams.shopPath, e) : t.sk.skeletonData = n
							}), this.userSrv.getSkinUnlocked(this.m_prams.id) && (this.adMask.active = !1), !this.m_prams.noAdUnlock && !this.userSrv.getSkinUnlocked(this.m_prams.id)) {
							var n = this.getVideoCount(),
								o = this.m_prams.adCount;
							this.getLabel.string = n + "/" + o
						}
						var i = this.m_prams.id == this.userSrv.GetUseSkin();
						this.selectedFrame.active = i
					}
				}, t.prototype.OnClickBtn = function() {
					return a(this, void 0, void 0, function() {
						var e, t, n = this;
						return s(this, function(o) {
							switch (o.label) {
								case 0:
									return e = !1, this.userSrv.getSkinUnlocked(this.m_prams.id) ? [3, 2] : this.m_prams.unlockTips ? (f.default.UIModel.showMessageBox(this.m_prams.unlockTips), [2]) : [4, new Promise(function(t) {
										l.services().miniGameSrv.getAppApiInstance().loadAndShowVideoAd(function() {
											var o = n.getVideoCount(),
												i = n.m_prams.adCount;
											o++, l.default.getServices().localStorageSrv.setStorage(n.m_prams.adKey, o), o >= i && (e = !0, l.default.getServices().localStorageSrv.setStorage(n.m_prams.adKey, 0), f.default.UIModel.showMessageBox("Đã mở khóa " + n.m_prams.name)), t()
										}, function() {}, function() {}, "看视频解锁皮肤")
									})];
								case 1:
									return o.sent(), [3, 3];
								case 2:
									e = !0, o.label = 3;
								case 3:
									if (e) switch (t = {
											skinId: this.m_prams.id,
											mode: u.GAME_MODE.NORMAL
										}, this.userSrv.getSkinUnlocked(this.m_prams.id) || (this.userSrv.UnlockSkin(this.m_prams.id), f.default.UISystem.OpenPage(p.PAGE.SKINREWARDPAGE, t)), this.m_prams.type) {
										case p.SKIN_TYPE.SKIN:
											this.userSrv.SetUseSkin(this.m_prams.id)
									}
									return l.default.emit(p.GAME_EVENT.ON_SKINBTN_CLICK, this.m_prams.type), [2]
							}
						})
					})
				}, t.prototype.getVideoCount = function() {
					var e = l.default.getServices().localStorageSrv.getStorage(this.m_prams.adKey),
						t = Number(e);
					return isNaN(t) && (t = 0), console.log(t, ">>>>>>>>>>>>>>"), t
				}, r([y({
					type: cc.Sprite,
					displayName: "背景图"
				})], t.prototype, "bgSprite", void 0), r([y({
					type: cc.Sprite,
					displayName: "皮肤展示精灵"
				})], t.prototype, "skinSprite", void 0), r([y({
					type: cc.Node,
					displayName: "未解锁遮罩"
				})], t.prototype, "adMask", void 0), r([y({
					type: cc.Node,
					displayName: "选中框"
				})], t.prototype, "selectedFrame", void 0), r([y({
					type: cc.Node,
					displayName: "广告图标"
				})], t.prototype, "adIcon", void 0), r([y({
					type: cc.Label,
					displayName: "获取文字"
				})], t.prototype, "getLabel", void 0), r([y({
					type: c.default,
					displayName: "动画节点"
				})], t.prototype, "sk", void 0), r([m, g("工具组件/皮肤按钮")], t)
			}(cc.Component);
		n.default = _, cc._RF.pop()
	}, {
		"../../engines/components/comSpSkeleton": "comSpSkeleton",
		"../../engines/gameEngine": "gameEngine",
		"../../engines/managers/gameContent/gameMode_json": "gameMode_json",
		"../Const": "Const",
		"../Enum": "Enum",
		"../MainRoot": "MainRoot"
	}],
	SkinPage: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "3befbSCAeVIB53PZWISRDdA", "SkinPage");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			},
			a = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			s = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var c = e("../../engines/configs/gameConfig"),
			l = e("../../engines/gameEngine"),
			u = e("../../OppoScripts/NativeSys/NativeSys"),
			d = e("../Base/PageBase"),
			p = e("../Enum"),
			f = e("../MainRoot"),
			h = e("../Obj/SkinBtn"),
			m = cc._decorator,
			y = m.ccclass,
			g = m.property,
			_ = m.menu,
			v = m.disallowMultiple,
			b = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.mainView = null, t.sceneView = null, t.pagePrefab = null, t.pageElementCount = 8, t
				}
				return i(t, e), t.prototype.OnPageOpen = function(t) {
					return a(this, void 0, void 0, function() {
						return s(this, function() {
							return e.prototype.OnPageOpen.call(this, t), this.Init(), u.default.ShowNative(c.default.SECOND_NATIVE), [2]
						})
					})
				}, t.prototype.Init = function() {
					return a(this, void 0, void 0, function() {
						var e, t, n = this;
						return s(this, function(o) {
							switch (o.label) {
								case 0:
									return e = f.default.ConfigSerive.SkinMap, t = function(e, t, o) {
										return a(n, void 0, void 0, function() {
											var n, i, r, c, u = this;
											return s(this, function() {
												for (n = Object.keys(t).length, i = 1 / this.pageElementCount, r = Math.ceil(n * i); e.getPages().length < r;) c = cc.instantiate(this.pagePrefab), e.addPage(c);
												return l.default.emit(p.GAME_EVENT.ON_SKINBTN_CLICK), [2, new Promise(function(n, r) {
													return a(u, void 0, void 0, function() {
														var a, c, l, u;
														return s(this, function() {
															for (u in c = 0, l = function(t) {
																	if (Object.prototype.hasOwnProperty.call(a, t)) {
																		var n = a[t],
																			s = Math.floor(i * c);
																		c++, f.default.frameBundle.load("Obj/SkinBtn", function(t, i) {
																			if (t) return console.error(t), void r();
																			var a = cc.instantiate(i);
																			e.getPages()[s].addChild(a);
																			var c = a.getComponent(h.default);
																			c.needReSize = o, null == c || c.Init(n)
																		})
																	}
																}, a = t) l(u);
															return this.scheduleOnce(n, .1), [2]
														})
													})
												})]
											})
										})
									}, this.sceneView.node.active = !1, [4, t(this.mainView, e, !0)];
								case 1:
									return o.sent(), [2]
							}
						})
					})
				}, t.prototype.OnScrollBtn = function(e, t) {
					this.mainView.scrollToPage(this.mainView.getCurrentPageIndex() + ("last" == t ? -1 : 1), .4)
				}, t.prototype.OnPageScroll = function() {
					l.managers().soundMgr.playSound("open_2").then()
				}, t.prototype.OnCheck = function() {
					l.managers().soundMgr.playSound("anNiu").then(), this.mainView.node.active = !1, this.sceneView.node.active = !1
				}, t.prototype.OnCheck1 = function() {
					this.mainView.node.active = !0
				}, t.prototype.OnCheck2 = function() {
					this.sceneView.node.active = !0
				}, r([g({
					type: cc.PageView,
					displayName: "人物皮肤页"
				})], t.prototype, "mainView", void 0), r([g({
					type: cc.PageView,
					displayName: "场景皮肤页"
				})], t.prototype, "sceneView", void 0), r([g({
					type: cc.Prefab,
					displayName: "页面预制体"
				})], t.prototype, "pagePrefab", void 0), r([y, v, _("游戏页面/皮肤商城")], t)
			}(d.default);
		n.default = b, cc._RF.pop()
	}, {
		"../../OppoScripts/NativeSys/NativeSys": "NativeSys",
		"../../engines/configs/gameConfig": "gameConfig",
		"../../engines/gameEngine": "gameEngine",
		"../Base/PageBase": "PageBase",
		"../Enum": "Enum",
		"../MainRoot": "MainRoot",
		"../Obj/SkinBtn": "SkinBtn"
	}],
	SkinRewardPage: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "7ff6fNNidZMIYMuI2zAZGCv", "SkinRewardPage");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/components/comSpSkeleton"),
			s = e("../../engines/managers/gameContent/gameMode_json"),
			c = e("../Base/PageBase"),
			l = e("../MainRoot"),
			u = cc._decorator,
			d = u.ccclass,
			p = u.property,
			f = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.sk = null, t
				}
				return i(t, e), t.prototype.OnPageOpen = function(t) {
					return e.prototype.OnPageOpen.call(this, t), this.initPage(t.skinId), Promise.resolve()
				}, t.prototype.initPage = function(e) {
					var t = this;
					console.log(e, "skinid");
					var n = "GameAssets/" + l.default.ConfigSerive.GetSkin(e).shopPath;
					l.default.frameBundle.load(n, sp.SkeletonData, function(n, o) {
						n ? console.log("加载皮肤资源失败") : (t.sk.skeletonData = o, "Tortoise" == e || t.sk.playAnimation("Idle").start(!0))
					})
				}, t.prototype.OnCloseBtn = function() {
					e.prototype.OnCloseBtn.call(this), this.m_mode == s.GAME_MODE.PAINTED_1 && this.BackMain()
				}, r([p({
					type: a.default,
					displayName: "皮肤节点"
				})], t.prototype, "sk", void 0), r([d], t)
			}(c.default);
		n.default = f, cc._RF.pop()
	}, {
		"../../engines/components/comSpSkeleton": "comSpSkeleton",
		"../../engines/managers/gameContent/gameMode_json": "gameMode_json",
		"../Base/PageBase": "PageBase",
		"../MainRoot": "MainRoot"
	}],
	Stone: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "04c2a0WmzJK5ZgjNs/HCx65", "Stone");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/components/comSpSkeleton"),
			s = e("../../Game/Enum"),
			c = e("../GameObj/ObjBase"),
			l = cc._decorator,
			u = l.menu,
			d = l.ccclass,
			p = l.property,
			f = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.stoneSp = [], t.attackAniArr = ["01", "02", "04"], t.grassP = null, t.grassNode = null, t
				}
				return i(t, e), t.prototype.beAttack = function(e, t) {
					this.playAttackEffect(t)
				}, t.prototype.playAttackEffect = function(e) {
					var t = this,
						n = this.attackAniArr;
					if (this.beAttackEffect) {
						switch (e) {
							case s.NODE_TOWARDS.LEFT:
							case s.NODE_TOWARDS.RIGHT:
								this.beAttackEffect.node.angle = 0;
								break;
							case s.NODE_TOWARDS.UP:
							case s.NODE_TOWARDS.DOWN:
								this.beAttackEffect.node.angle = 90
						}
						this.beAttackEffect.node.active = !0, this.beAttackEffect.playAnimation(n[Math.floor(Math.random() * n.length)]).onComplete(1, function() {
							t.beAttackEffect.node.active = !1
						}).start(!1)
					}
				}, t.prototype.init = function() {
					for (var e = this.Pos, t = this.Cell.getNodeByFrogPoint(e), n = !0, o = 0; o < t.length; o++) {
						var i = (u = t[o]).getComponent(c.default).Flags;
						if (u.uuid != this.node.uuid && i.includes(s.NODE_FLAG.NOTMOVEOBJ)) {
							n = !1;
							break
						}
					}
					if (n) {
						var r = this.Flags.indexOf(s.NODE_FLAG.NOTMOVEOBJ);
						r > -1 && (this.Flags.splice(r, 1), this.Flags.push(s.NODE_FLAG.MOVEOBJ))
					} else {
						var l = 2 * Math.random() + 1;
						for (o = 0; o < l; o++) {
							var u = cc.instantiate(this.grassP);
							this.grassNode.addChild(u), u.getChildByName("Cao").getComponent(a.default).playAnimation("0" + Math.floor(3 * Math.random() + 1)).start(!0), u.scale = .5 + .5 * Math.random(), u.y = -25;
							var d = 25 * Math.random();
							u.x = Math.random() < .5 ? d : -d
						}
					}
					this.initSpframe(), this.initReder()
				}, t.prototype.initSpframe = function() {
					this.objSp.getComponent(cc.Sprite).spriteFrame = this.stoneSp[Math.floor(Math.random() * this.stoneSp.length)]
				}, t.prototype.initReder = function() {
					this.Flags.includes(s.NODE_FLAG.MOVEOBJ) ? (this.objSp.width = 55, this.objSp.height = 55) : (this.objSp.width = 74, this.objSp.height = 74)
				}, r([p({
					type: cc.SpriteFrame,
					displayName: "石头图片"
				})], t.prototype, "stoneSp", void 0), r([p({
					type: cc.Prefab,
					displayName: "草预制体"
				})], t.prototype, "grassP", void 0), r([p({
					type: cc.Node,
					displayName: "草节点"
				})], t.prototype, "grassNode", void 0), r([d, u("游戏单位/石头")], t)
			}(c.default);
		n.default = f, cc._RF.pop()
	}, {
		"../../Game/Enum": "Enum",
		"../../engines/components/comSpSkeleton": "comSpSkeleton",
		"../GameObj/ObjBase": "ObjBase"
	}],
	Swan: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "23a4fPfybFDjaWqIX3NFsZW", "Swan");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("./Role"),
			s = e("./Skeeter"),
			c = cc._decorator,
			l = c.menu,
			u = c.ccclass,
			d = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return i(t, e), t.prototype.beAttack = function(e, t, n, o) {
					e || (n && n instanceof a.default && (n.setDeathSkeeter(t, o, this.objSk.skeletonData), n.changeRoleDouble()), this.Cell.removeOneNode(this.node, function() {}))
				}, r([u, l("游戏单位/天鹅")], t)
			}(s.default));
		n.default = d, cc._RF.pop()
	}, {
		"./Role": "Role",
		"./Skeeter": "Skeeter"
	}],
	SystemBase: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "3b12dF89btISrCJ3LpnRn0r", "SystemBase");
		var o = this && this.__spreadArrays || function() {
			for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
			var o = Array(e),
				i = 0;
			for (t = 0; t < n; t++)
				for (var r = arguments[t], a = 0, s = r.length; a < s; a++, i++) o[i] = r[a];
			return o
		};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var i = function() {
			function e() {}
			return e.prototype.SystemInit = function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				this.Log("----系统初始化", this.systemName)
			}, e.prototype.Log = function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				console.log.apply(console, o([this.systemName + ":---{\n"], e, ["\n}"]))
			}, e.prototype.Warn = function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				console.warn.apply(console, o([this.systemName + ":---{\n"], e, ["\n}"]))
			}, e
		}();
		n.default = i, cc._RF.pop()
	}, {}],
	Tortoise: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "53775ugfSRLH4yt+gayS7FX", "Tortoise");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/components/comSpSkeleton"),
			s = e("../../Game/Enum"),
			c = e("./Role"),
			l = cc._decorator,
			u = l.menu,
			d = l.ccclass,
			p = l.property,
			f = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.doubelEffect = null, t.once = !0, t
				}
				return i(t, e), t.prototype.loadSkin = function() {}, t.prototype.playAnimation = function(e, t, n, o) {
					this.objSk.playAnimation(e).onComplete(1, n).onEvent(1, o).start(t), this.playHeadAnimation(e, t)
				}, t.prototype.playHeadAnimation = function(e, t) {
					this.prowState != s.PROW_STATE.PROW_ING && (this.leftHeadAni.playAnimation(e).start(t), this.rightHeadAni.playAnimation(e).start(t), this.centerHeadAni.playAnimation(e).start(t))
				}, t.prototype.setProwNodeActive = function(e) {
					e.active = !0
				}, t.prototype.TortoiseChangeTwoProw = function() {
					var e = this;
					this.once && (console.log("changge>>>>>>>>>>>>>>>>>>>>>"), this.once = !1, this.doubelEffect.node.active = !0, this.scheduleOnce(function() {
						e.prowNode.active = !1, e.leftProw.active = !0, e.rightProw.active = !0, e.leftNeck.active = !0, e.rightNeck.active = !0, e.centerNeck.active = !1
					}, .1))
				}, r([p({
					type: a.default,
					displayName: "变双头的特效"
				})], t.prototype, "doubelEffect", void 0), r([d, u("游戏单位/乌龟角色")], t)
			}(c.default);
		n.default = f, cc._RF.pop()
	}, {
		"../../Game/Enum": "Enum",
		"../../engines/components/comSpSkeleton": "comSpSkeleton",
		"./Role": "Role"
	}],
	TweenAnim: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "8643bqziE9E5pwwD3C6UvTi", "TweenAnim");
		var o, i, r = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			a = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
				value: !0
			}),
			function(e) {
				e[e.rotate = 0] = "rotate", e[e.shake = 1] = "shake", e[e.scale = 2] = "scale", e[e.alpha = 3] = "alpha"
			}(i || (i = {}));
		var s = cc._decorator,
			c = s.ccclass,
			l = s.property,
			u = s.menu,
			d = (s.disallowMultiple, s.executionOrder, s.requireComponent, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.actionType = i.rotate, t.isAutoStart = !0, t.maxTime = .5, t.minTime = .5, t.maxScale = 1.1, t.minScale = .9, t.maxAlpha = 255, t.minAlpha = 0, t.inverse = !1, t.startPosX = 0, t.startPosY = 0, t.startAngle = 0, t.isRun = !1, t
				}
				return r(t, e), t.prototype.onLoad = function() {
					this.startPosX = this.node.x, this.startPosY = this.node.y, this.startAngle = this.node.angle, this.isAutoStart && this.runAction()
				}, t.prototype.start = function() {
					this.isAutoStart && this.runAction()
				}, t.prototype.onStart = function() {
					this.runAction()
				}, t.prototype.runAction = function() {
					if (!this.isRun) {
						this.isRun = !0, this.node.stopAllActions();
						var e = cc.tween(this.node);
						if (this.actionType == i.rotate) this.node.runAction(cc.repeatForever(cc.rotateBy(.1, this.inverse ? 10 : -10)));
						else if (this.actionType == i.shake) {
							var t = cc.rotateBy(.1, 10),
								n = cc.rotateBy(.1, -20),
								o = cc.rotateBy(.1, 20),
								r = cc.rotateBy(.1, -20),
								a = cc.rotateBy(.1, 20),
								s = cc.rotateBy(.1, -10),
								c = cc.delayTime(.5),
								l = cc.repeatForever(cc.sequence(t, n, o, r, a, s, c));
							this.node.runAction(l)
						} else this.actionType == i.scale ? e.repeatForever(e.sequence(e.to(this.maxTime, {
							scale: this.maxScale
						}, {
							easing: "sineInOut"
						}), e.to(this.minTime, {
							scale: this.minScale
						}, {
							easing: "sineInOut"
						}))).start() : this.actionType == i.alpha && e.repeatForever(e.sequence(e.to(this.maxTime, {
							opacity: this.maxAlpha
						}, {
							easing: "sineInOut"
						}), e.to(this.minTime, {
							opacity: this.minAlpha
						}, {
							easing: "sineInOut"
						}))).start()
					}
				}, t.prototype.onStop = function() {
					this.isRun = !1, this.node.stopAllActions(), this.node.x = this.startPosX, this.node.y = this.startPosY, this.node.angle = this.startAngle, this.node.scale = 1, this.node.opacity = 255
				}, a([l({
					type: cc.Enum(i),
					displayName: "动作类型"
				})], t.prototype, "actionType", void 0), a([l({
					displayName: "是否立即开始"
				})], t.prototype, "isAutoStart", void 0), a([l({
					type: cc.Float,
					displayName: "前往最大值的时间",
					visible: function() {
						return this.actionType !== i.shake
					}
				})], t.prototype, "maxTime", void 0), a([l({
					type: cc.Float,
					displayName: "前往最小值的时间",
					visible: function() {
						return this.actionType !== i.shake
					}
				})], t.prototype, "minTime", void 0), a([l({
					type: cc.Float,
					displayName: "最大值",
					visible: function() {
						return this.actionType == i.scale
					}
				})], t.prototype, "maxScale", void 0), a([l({
					type: cc.Float,
					displayName: "最小值",
					visible: function() {
						return this.actionType == i.scale
					}
				})], t.prototype, "minScale", void 0), a([l({
					type: cc.Integer,
					displayName: "透明度最大值",
					visible: function() {
						return this.actionType == i.alpha
					}
				})], t.prototype, "maxAlpha", void 0), a([l({
					type: cc.Integer,
					displayName: "透明度最小值",
					visible: function() {
						return this.actionType == i.alpha
					}
				})], t.prototype, "minAlpha", void 0), a([l({
					displayName: "反向",
					visible: function() {
						return this.actionType == i.rotate
					}
				})], t.prototype, "inverse", void 0), a([c, u("工具组件/TweenAnim")], t)
			}(cc.Component));
		n.default = d, cc._RF.pop()
	}, {}],
	UISystem: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "3098c6TKDtJqbW0xn3jRFaN", "UISystem");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			a = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = e("../Base/PageBase"),
			c = e("../Base/SystemBase"),
			l = e("../MainRoot"),
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.m_BundleName = "gameBundle", t.m_loadingPage = [], t.systemName = "页面系统", t.pageMap = {}, t
				}
				return i(t, e), Object.defineProperty(t.prototype, "Bundle", {
					get: function() {
						return cc.assetManager.getBundle(this.m_BundleName)
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.SystemInit = function() {
					e.prototype.SystemInit.call(this)
				}, t.prototype.OpenPage = function(e, t) {
					for (var n = [], o = 2; o < arguments.length; o++) n[o - 2] = arguments[o];
					return r(this, void 0, void 0, function() {
						var n = this;
						return a(this, function() {
							return this.Log("尝试打开", e), this.pageMap[e] ? (this.Log("从隐藏打开", e), this.pageMap[e].node.active = !0, this.pageMap[e].OnPageOpen(t), [2]) : (this.m_loadingPage.push(e), [2, new Promise(function(o, i) {
								l.default.frameBundle.load("Page/" + e, function(c, u) {
									return r(n, void 0, void 0, function() {
										var n, r, d;
										return a(this, function(a) {
											switch (a.label) {
												case 0:
													return c ? (i(c), console.error("页面加载错误", c), [2]) : (n = cc.instantiate(u), (r = n.getComponent(s.default)) || this.Warn("页面没有挂载脚本!!!", e), this.pageMap[e] = r, r.pageName = e, l.default.UIRoot.addChild(n), [4, r.OnPageOpen(t)]);
												case 1:
													return a.sent(), (d = this.m_loadingPage.indexOf(e)) > -1 && this.m_loadingPage.splice(d), o(), [2]
											}
										})
									})
								})
							})])
						})
					})
				}, t.prototype.HidePage = function(e) {
					this.pageMap[e] && (this.pageMap[e].HidePage(), this.pageMap[e].OnPageClose())
				}, t.prototype.ClosePage = function(e) {
					this.pageMap[e] && (this.pageMap[e].OnPageClose(), this.pageMap[e] = null)
				}, t.prototype.CloseAllPage = function() {
					for (var e in this.pageMap)
						if (Object.prototype.hasOwnProperty.call(this.pageMap, e)) {
							var t = this.pageMap[e];
							t && t.OnPageClose()
						} this.pageMap = {}
				}, t
			}(c.default);
		n.default = u, cc._RF.pop()
	}, {
		"../Base/PageBase": "PageBase",
		"../Base/SystemBase": "SystemBase",
		"../MainRoot": "MainRoot"
	}],
	WinPage: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "2fb66VjpotJY7nsB+Fh/zCY", "WinPage");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			},
			a = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			s = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var c = e("../../engines/configs/gameConfig"),
			l = e("../../engines/gameEngine"),
			u = e("../../engines/services/userContent/userInterface"),
			d = e("../../OppoScripts/NativeSys/NativeSys"),
			p = e("../Base/PageBase"),
			f = e("../MainRoot"),
			h = cc._decorator,
			m = h.ccclass,
			y = h.property,
			g = h.menu,
			_ = h.disallowMultiple,
			v = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.winLabel = null, t.showImg = null, t.shareBtn = null, t.geNode = null, t
				}
				return i(t, e), t.prototype.OnPageOpen = function(t) {
					return a(this, void 0, void 0, function() {
						var n, o, i = this;
						return s(this, function() {
							return e.prototype.OnPageOpen.call(this, t), n = t.index, (o = this.node.getChildByName("Content").getChildByName("Label" + n)) && (o.active = !0), "novelapp" == f.default.platName && (this.shareBtn.node.active = !1), l.services().miniGameSrv.getAppApiInstance().gameRecordStop(), this.scheduleOnce(function() {
								cc.tween(i.geNode).to(.15, {
									scale: 1
								}).start()
							}, .5), d.default.ShowNative(c.default.SECOND_NATIVE), [2]
						})
					})
				}, t.prototype.OnRestartBtn = function() {
					return a(this, void 0, void 0, function() {
						return s(this, function(e) {
							switch (e.label) {
								case 0:
									return l.managers().soundMgr.playSound("anNiu"), f.default.LevelSystem.AddLevel(this.m_mode, -1), [4, f.default.LevelSystem.LoadLevel(f.default.LevelSystem.GetSignleLevelInfo(this.m_mode).bundleName, this.m_mode)];
								case 1:
									return e.sent(), l.services().userSrv.setPower(-c.default.MODE_POWER[this.m_mode], !0, !0), this.ClosePage(), [2]
							}
						})
					})
				}, t.prototype.OnNextBtn = function() {
					return a(this, void 0, void 0, function() {
						return s(this, function(e) {
							switch (e.label) {
								case 0:
									return l.managers().soundMgr.playSound("anNiu"), l.services().userSrv.getPower() - c.default.MODE_POWER[this.m_mode] < 0 ? (l.modules().uiControlModule.showUserPropGet(u.REWARD_TYPE.POWER, c.default.ADD_ONCE_POWER), [2]) : [4, f.default.LevelSystem.LoadLevel(f.default.LevelSystem.GetSignleLevelInfo(this.m_mode).bundleName, this.m_mode)];
								case 1:
									return e.sent(), l.services().userSrv.setPower(-c.default.MODE_POWER[this.m_mode], !0, !0), f.default.GotTips = !1, this.ClosePage(), [2]
							}
						})
					})
				}, t.prototype.OnShareBtn = function() {
					l.managers().soundMgr.playSound("anNiu"), "novelapp" != f.default.platName && l.services().miniGameSrv.getAppApiInstance().shareGameRecordVideo(function() {})
				}, r([y({
					type: cc.Label,
					displayName: "过关文字显示"
				})], t.prototype, "winLabel", void 0), r([y({
					type: cc.Sprite,
					displayName: "过关显示图片"
				})], t.prototype, "showImg", void 0), r([y({
					type: cc.Button,
					displayName: "分享按钮"
				})], t.prototype, "shareBtn", void 0), r([y({
					type: cc.Node,
					displayName: "打嗝文本节点"
				})], t.prototype, "geNode", void 0), r([m, _, g("游戏页面/胜利结算页")], t)
			}(p.default);
		n.default = v, cc._RF.pop()
	}, {
		"../../OppoScripts/NativeSys/NativeSys": "NativeSys",
		"../../engines/configs/gameConfig": "gameConfig",
		"../../engines/gameEngine": "gameEngine",
		"../../engines/services/userContent/userInterface": "userInterface",
		"../Base/PageBase": "PageBase",
		"../MainRoot": "MainRoot"
	}],
	WordConfig: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "227c4a++g1FkJBqE1n5cxfP", "WordConfig"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = [{
			id: "a",
			frameSize: 2
		}, {
			id: "b",
			frameSize: 2
		}, {
			id: "c",
			frameSize: 2
		}, {
			id: "d",
			frameSize: 2
		}, {
			id: "e",
			frameSize: 2
		}, {
			id: "f",
			frameSize: 1
		}, {
			id: "g",
			frameSize: 2
		}, {
			id: "h",
			frameSize: 2
		}, {
			id: "i",
			frameSize: 1
		}, {
			id: "j",
			frameSize: 1
		}, {
			id: "k",
			frameSize: 2
		}, {
			id: "l",
			frameSize: 1
		}, {
			id: "m",
			frameSize: 3
		}, {
			id: "n",
			frameSize: 2
		}, {
			id: "o",
			frameSize: 2
		}, {
			id: "p",
			frameSize: 2
		}, {
			id: "q",
			frameSize: 2
		}, {
			id: "r",
			frameSize: 2
		}, {
			id: "s",
			frameSize: 2
		}, {
			id: "t",
			frameSize: 1
		}, {
			id: "u",
			frameSize: 2
		}, {
			id: "v",
			frameSize: 2
		}, {
			id: "w",
			frameSize: 3
		}, {
			id: "x",
			frameSize: 2
		}, {
			id: "y",
			frameSize: 2
		}, {
			id: "z",
			frameSize: 2
		}];
		n.default = function() {
			return o
		}, cc._RF.pop()
	}, {}],
	addDestok: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "d8293B5ciNMf61djWZgvP0z", "addDestok");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../Game/MainRoot"),
			s = e("../configs/gameConfig"),
			c = e("../gameEngine"),
			l = e("../services/userContent/userInterface"),
			u = cc._decorator,
			d = u.ccclass,
			p = u.property,
			f = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.ShortcutBtn = null, t.FirstKey = "get-First-Add", t.TimeDay = "get-End-timeDay", t.tt = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					this.tt = window.tt, this.ShortcutBtn.on(cc.Node.EventType.TOUCH_END, this.onBtnMe, this);
					var e = this;
					if (console.info("添加快捷方式 onBtnMe", this.tt), this.tt) {
						if (!a.default.isShortcutOpen()) return void(this.node.active = !1);
						this.tt.onShow(function(e) {
							console.log("启动参数如下：", e), console.log("启动参数如下：", e.query), console.log("来源信息如下：", e.refererInfo)
						}), this.check(), this.tt.checkShortcut({
							success: function(t) {
								console.info("success快捷方式", t), t.status.exist ? (e.node.active = !1, console.info("success快捷方式存在")) : console.info("success快捷方式不存在")
							},
							fail: function(e) {
								console.info("fail快捷方式检查onLoad", e.errMsg)
							}
						})
					} else this.node.active = !1
				}, t.prototype.onBtnMe = function() {
					console.info("添加快捷方式 onBtnMe");
					var e = this;
					this.tt ? (console.info("添加快捷方式"), c.default.getServices().miniGameSrv.getAppApiInstance().reportAnalytics("addDestok", {
						addDestok: "主界面点击添加桌面"
					}), this.tt.addShortcut({
						success: function() {
							e.node.active = !1;
							var t = c.default.getServices().localStorageSrv.getStorage(e.FirstKey);
							t && 1 == Number(t) ? console.info("已经添加过快捷方式") : (console.info("添加快捷方式成功"), e.addRewarded(), c.default.getServices().localStorageSrv.setStorage(e.FirstKey, 1), c.default.getServices().miniGameSrv.getAppApiInstance().reportAnalytics("addDestok", {
								addDestok: "主界面点击添加桌面成功"
							}))
						},
						fail: function(e) {
							console.info("添加快捷方式失败", e), c.default.getServices().miniGameSrv.getAppApiInstance().reportAnalytics("addDestok", {
								addDestok: "主界面点击添加桌面失败"
							}), c.default.getModules().uiControlModule.showMessageBox("添加失败")
						}
					})) : (this.addRewarded(), c.default.getServices().localStorageSrv.setStorage(e.FirstKey, 1))
				}, t.prototype.start = function() {}, t.prototype.check = function() {
					var e = this.tt.getLaunchOptionsSync();
					if (console.info("checkoptions", e), "021020" == e.scene) {
						console.info("check"), c.default.getServices().miniGameSrv.getAppApiInstance().reportAnalytics("addDestok", {
							addDestok: "抖音桌面进入"
						});
						var t = (new Date).getDate();
						console.info("checkcurTime", t);
						var n = c.default.getServices().localStorageSrv.getStorage(this.TimeDay);
						n ? Number(n) == t ? console.info("checkcurTime 不给奖励", t) : (console.info("checkcurTime 给奖励", t), this.addRewarded(), c.default.getServices().localStorageSrv.setStorage(this.TimeDay, t)) : (console.info("checkcurTime  第一次进给奖励", t), this.addRewarded(), c.default.getServices().localStorageSrv.setStorage(this.TimeDay, t))
					}
				}, t.prototype.addRewarded = function() {
					c.services().userSrv.addPowerOfVideo(), c.modules().uiControlModule.showGetRewarded(l.REWARD_TYPE.POWER, s.default.ADD_ONCE_POWER, "恭喜")
				}, r([p({
					type: cc.Node,
					displayName: "快捷方式按钮"
				})], t.prototype, "ShortcutBtn", void 0), r([d], t)
			}(cc.Component);
		n.default = f, cc._RF.pop()
	}, {
		"../../Game/MainRoot": "MainRoot",
		"../configs/gameConfig": "gameConfig",
		"../gameEngine": "gameEngine",
		"../services/userContent/userInterface": "userInterface"
	}],
	addUserProp: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "8e0cctcEbZO37/60kD776BI", "addUserProp");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/gameEngine"),
			s = e("../../engines/services/userContent/userInterface"),
			c = e("../../engines/libs/data_control"),
			l = e("../../engines/configs/gameConfig"),
			u = e("../../OppoScripts/NativeSys/NativeSys"),
			d = cc._decorator,
			p = d.ccclass,
			f = d.property,
			h = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.detail = null, t.title = null, t.showNum = null, t.spIcon = null, t.spfIcons = [], t.titleImg = null, t.messageImg = null, t.m_propType = null, t.m_propCount = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					u.default.ShowNative(l.default.SECOND_NATIVE)
				}, t.prototype.start = function() {
					this.initView()
				}, t.prototype.setData = function(e, t) {
					this.m_propType = e, this.m_propCount = t
				}, t.prototype.initView = function() {
					a.modules().uiControlModule.showHideDialogAnimation(this.detail, !0), this.showNum.string = "+" + c.default.getNumberFormat(this.m_propCount)
				}, t.prototype.onBtnClose = function() {
					var e = this;
					a.managers().soundMgr.playSound("anNiu").then(), a.modules().uiControlModule.showHideDialogAnimation(this.detail, !1, function() {
						e.node.destroy()
					})
				}, t.prototype.onBtnGet = function() {
					var e, t, n = this;
					a.managers().soundMgr.playSound("anNiu").then(), e = function() {
						a.services().userSrv.addPowerOfVideo()
					}, t = s.REWARD_TYPE.POWER, cc.director.pause(), a.services().miniGameSrv.getAppApiInstance().loadAndShowVideoAd(function() {
						e(), a.modules().uiControlModule.showGetRewarded(t, n.m_propCount), cc.director.resume()
					}, function() {
						cc.director.resume()
					}, function() {
						cc.director.resume()
					}, "获取体力")
				}, r([f(cc.Node)], t.prototype, "detail", void 0), r([f(cc.Label)], t.prototype, "title", void 0), r([f(cc.Label)], t.prototype, "showNum", void 0), r([f(cc.Sprite)], t.prototype, "spIcon", void 0), r([f([cc.SpriteFrame])], t.prototype, "spfIcons", void 0), r([f({
					type: cc.Sprite,
					displayName: "标题图片"
				})], t.prototype, "titleImg", void 0), r([f({
					type: cc.Sprite,
					displayName: "内容图片"
				})], t.prototype, "messageImg", void 0), r([p], t)
			}(cc.Component);
		n.default = h, cc._RF.pop()
	}, {
		"../../OppoScripts/NativeSys/NativeSys": "NativeSys",
		"../../engines/configs/gameConfig": "gameConfig",
		"../../engines/gameEngine": "gameEngine",
		"../../engines/libs/data_control": "data_control",
		"../../engines/services/userContent/userInterface": "userInterface"
	}],
	attention: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "77650wOFTxKIoo8+mVTrBgv", "attention");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/configs/gameConfig"),
			s = e("../../engines/gameEngine"),
			c = cc._decorator,
			l = c.ccclass,
			u = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return i(t, e), t.prototype.onEnable = function() {
					if (window.tt && 1 == a.default.DOUYIN_YUMAI) {
						var e = this;
						window.tt.getSystemInfo({
							success: function(t) {
								"Douyin" != t.appName && (e.node.active = !1)
							},
							fail: function() {
								console.log("getSystemInfo 调用失败"), e.node.active = !1
							}
						})
					} else this.node.active = !1
				}, t.prototype.OnClickAttention = function() {
					s.default.getManagers().soundMgr.playSound("anNiu").then(), window.tt && window.tt.openAwemeUserProfile()
				}, r([l], t)
			}(cc.Component));
		n.default = u, cc._RF.pop()
	}, {
		"../../engines/configs/gameConfig": "gameConfig",
		"../../engines/gameEngine": "gameEngine"
	}],
	btButton: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "bdc91QO3ddAt5nQfZr9K2G3", "btButton");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.BT_BODY_COLOR = n.BT_LINE_COLOR = void 0;
		var a, s, c = cc._decorator.executeInEditMode,
			l = cc._decorator.playOnFocus,
			u = e("../../engines/gameEngine"),
			d = cc._decorator,
			p = d.ccclass,
			f = d.property,
			h = d.requireComponent;
		(function(e) {
			e[e.WHITE = 0] = "WHITE", e[e.BLACK = 1] = "BLACK"
		})(a = n.BT_LINE_COLOR || (n.BT_LINE_COLOR = {})),
		function(e) {
			e[e.NORMAL = 0] = "NORMAL", e[e.OUTSTANDING = 1] = "OUTSTANDING", e[e.OBVIOUS = 2] = "OBVIOUS"
		}(s = n.BT_BODY_COLOR || (n.BT_BODY_COLOR = {}));
		var m = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.lineColor = a.WHITE, t.bodyColor = s.NORMAL, t.textColor = a.WHITE, t.strButton = "按钮事件", t
			}
			return i(t, e), t.prototype.onLoad = function() {
				this.OnUpdateLineColor(), this.OnUpdateBodyColor(), this.OnUpdateTextColor(), this.node.on("click", function() {
					u.managers().soundMgr.playSound("anNiu").then(), u.managers().soundMgr.playVibrate()
				})
			}, t.prototype.start = function() {}, t.prototype.getButtonText = function() {
				return this.strButton
			}, t.prototype.setButtonText = function(e) {
				this.strButton = e;
				var t = this.node.getChildByName("Background");
				if (t) {
					var n = t.getChildByName("Label");
					n && (n.getComponent(cc.Label).string = this.strButton)
				}
			}, t.prototype.OnUpdateLineColor = function() {
				switch (this.lineColor) {
					case a.WHITE:
						this.node.color = cc.Color.WHITE;
						break;
					case a.BLACK:
						this.node.color = cc.Color.BLACK
				}
			}, t.prototype.OnUpdateBodyColor = function() {
				var e = this.node.getChildByName("Background");
				if (e) {
					switch (this.bodyColor) {
						case s.NORMAL:
							e.color = cc.color(140, 208, 255);
							break;
						case s.OUTSTANDING:
							e.color = cc.color(255, 211, 48);
							break;
						case s.OBVIOUS:
							e.color = cc.color(230, 100, 76)
					}
					var t = e.getChildByName("Label");
					t && (t.getComponent(cc.Label).string = this.strButton)
				} else console.error("#57错误 不存在的背景节点")
			}, t.prototype.OnUpdateTextColor = function() {
				var e = cc.find("Background/Label", this.node);
				switch (this.textColor) {
					case a.WHITE:
						e.color = cc.Color.WHITE;
						break;
					case a.BLACK:
						e.color = cc.Color.BLACK
				}
			}, t.prototype.update = function() {}, r([f({
				type: cc.Enum(a),
				displayName: "按钮描边色",
				tooltip: "固定黑白"
			})], t.prototype, "lineColor", void 0), r([f({
				type: cc.Enum(s),
				displayName: "按钮颜色",
				tooltip: "NORMAL(普通按钮)\nOUTSTANDING(突出按钮)\nOBVIOUS(更突出、明显按钮)"
			})], t.prototype, "bodyColor", void 0), r([f({
				type: cc.Enum(a),
				displayName: "按钮文本颜色",
				tooltip: "固定黑白"
			})], t.prototype, "textColor", void 0), r([f({
				displayName: "按钮文本",
				multiline: !0
			})], t.prototype, "strButton", void 0), r([p, h(cc.Button), c(), l()], t)
		}(cc.Component);
		n.default = m, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine"
	}],
	cellLayerMiniGameJump: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "a3cabW5JqRBn7PAwWbJRknU", "cellLayerMiniGameJump");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/configs/gameConfig"),
			s = e("../public/cellMiniGameJump"),
			c = cc._decorator,
			l = c.ccclass,
			u = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return i(t, e), t.prototype.start = function() {
					this.onShowMiniJumpCellList()
				}, t.prototype.setPosition = function() {
					for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
					for (var n = 0; n < e.length && n < this.node.childrenCount; n++) this.node.children[n].setPosition(e[n])
				}, t.prototype.onShowMiniJumpCellList = function() {
					for (var e = a.default.MINI_GAME_JUMP_CELL_LIST, t = 0; t < this.node.childrenCount; t++) null != e[t] ? (this.node.children[t].active = !0, this.showCellData(this.node.children[t], e[t])) : this.node.children[t].active = !1
				}, t.prototype.showCellData = function(e, t) {
					e.getComponent(s.default).setData(t)
				}, r([l], t)
			}(cc.Component));
		n.default = u, cc._RF.pop()
	}, {
		"../../engines/configs/gameConfig": "gameConfig",
		"../public/cellMiniGameJump": "cellMiniGameJump"
	}],
	cellMiniGameJump: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "e71d5xGI5FO/49dqAk3rDDp", "cellMiniGameJump");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/gameEngine"),
			s = cc._decorator,
			c = s.ccclass,
			l = (s.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.m_data = null, t
				}
				return i(t, e), t.prototype.start = function() {
					this.initView()
				}, t.prototype.setData = function(e) {
					this.m_data = e
				}, t.prototype.initView = function() {
					var e = this.m_data;
					this.node.getChildByName("name").getComponent(cc.Label).string = e.name;
					var t = this.node.getChildByName("icon").getComponent(cc.Sprite);
					a.default.getServices().ossSrv.showOssPathMiniGameJumpIcon(e.iconId, t), this.node.on("click", function() {
						a.default.getServices().miniGameSrv.getAppApiInstance().navigateToMiniGame(e.appId)
					})
				}, r([c], t)
			}(cc.Component));
		n.default = l, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine"
	}],
	codeHead: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "a78d0lS7ehOh7Ti3UXwxvUz", "codeHead"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.$RealCode = void 0, (n.$RealCode || (n.$RealCode = {})).PRE_SIX = {
			11e4: 1,
			110100: 1,
			110101: 1,
			110102: 1,
			110103: 1,
			110104: 1,
			110105: 1,
			110106: 1,
			110107: 1,
			110108: 1,
			110109: 1,
			110111: 1,
			110112: 1,
			110113: 1,
			110200: 1,
			110221: 1,
			110224: 1,
			110226: 1,
			110227: 1,
			110228: 1,
			110229: 1,
			12e4: 1,
			120100: 1,
			120101: 1,
			120102: 1,
			120103: 1,
			120104: 1,
			120105: 1,
			120106: 1,
			120107: 1,
			120108: 1,
			120109: 1,
			120110: 1,
			120111: 1,
			120112: 1,
			120113: 1,
			120200: 1,
			120221: 1,
			120222: 1,
			120223: 1,
			120224: 1,
			120225: 1,
			13e4: 1,
			130100: 1,
			130101: 1,
			130102: 1,
			130103: 1,
			130104: 1,
			130105: 1,
			130106: 1,
			130107: 1,
			130121: 1,
			130123: 1,
			130124: 1,
			130125: 1,
			130126: 1,
			130127: 1,
			130128: 1,
			130129: 1,
			130130: 1,
			130131: 1,
			130132: 1,
			130133: 1,
			130181: 1,
			130182: 1,
			130183: 1,
			130184: 1,
			130185: 1,
			130200: 1,
			130201: 1,
			130202: 1,
			130203: 1,
			130204: 1,
			130205: 1,
			130206: 1,
			130221: 1,
			130223: 1,
			130224: 1,
			130225: 1,
			130227: 1,
			130229: 1,
			130230: 1,
			130281: 1,
			130282: 1,
			130283: 1,
			130300: 1,
			130301: 1,
			130302: 1,
			130303: 1,
			130304: 1,
			130321: 1,
			130322: 1,
			130323: 1,
			130324: 1,
			130400: 1,
			130401: 1,
			130402: 1,
			130403: 1,
			130404: 1,
			130406: 1,
			130421: 1,
			130423: 1,
			130424: 1,
			130425: 1,
			130426: 1,
			130427: 1,
			130428: 1,
			130429: 1,
			130430: 1,
			130431: 1,
			130432: 1,
			130433: 1,
			130434: 1,
			130435: 1,
			130481: 1,
			130500: 1,
			130501: 1,
			130502: 1,
			130503: 1,
			130521: 1,
			130522: 1,
			130523: 1,
			130524: 1,
			130525: 1,
			130526: 1,
			130527: 1,
			130528: 1,
			130529: 1,
			130530: 1,
			130531: 1,
			130532: 1,
			130533: 1,
			130534: 1,
			130535: 1,
			130581: 1,
			130582: 1,
			130600: 1,
			130601: 1,
			130602: 1,
			130603: 1,
			130604: 1,
			130621: 1,
			130622: 1,
			130623: 1,
			130624: 1,
			130625: 1,
			130626: 1,
			130627: 1,
			130628: 1,
			130629: 1,
			130630: 1,
			130631: 1,
			130632: 1,
			130633: 1,
			130634: 1,
			130635: 1,
			130636: 1,
			130637: 1,
			130638: 1,
			130681: 1,
			130682: 1,
			130683: 1,
			130684: 1,
			130700: 1,
			130701: 1,
			130702: 1,
			130703: 1,
			130705: 1,
			130706: 1,
			130721: 1,
			130722: 1,
			130723: 1,
			130724: 1,
			130725: 1,
			130726: 1,
			130727: 1,
			130728: 1,
			130729: 1,
			130730: 1,
			130731: 1,
			130732: 1,
			130733: 1,
			130800: 1,
			130801: 1,
			130802: 1,
			130803: 1,
			130804: 1,
			130821: 1,
			130822: 1,
			130823: 1,
			130824: 1,
			130825: 1,
			130826: 1,
			130827: 1,
			130828: 1,
			130900: 1,
			130901: 1,
			130902: 1,
			130903: 1,
			130921: 1,
			130922: 1,
			130923: 1,
			130924: 1,
			130925: 1,
			130926: 1,
			130927: 1,
			130928: 1,
			130929: 1,
			130930: 1,
			130981: 1,
			130982: 1,
			130983: 1,
			130984: 1,
			131e3: 1,
			131001: 1,
			131002: 1,
			131022: 1,
			131023: 1,
			131024: 1,
			131025: 1,
			131026: 1,
			131028: 1,
			131081: 1,
			131082: 1,
			131100: 1,
			131101: 1,
			131102: 1,
			131121: 1,
			131122: 1,
			131123: 1,
			131124: 1,
			131125: 1,
			131126: 1,
			131127: 1,
			131128: 1,
			131181: 1,
			131182: 1,
			14e4: 1,
			140100: 1,
			140101: 1,
			140105: 1,
			140106: 1,
			140107: 1,
			140108: 1,
			140109: 1,
			140110: 1,
			140121: 1,
			140122: 1,
			140123: 1,
			140181: 1,
			140200: 1,
			140201: 1,
			140202: 1,
			140203: 1,
			140211: 1,
			140212: 1,
			140221: 1,
			140222: 1,
			140223: 1,
			140224: 1,
			140225: 1,
			140226: 1,
			140227: 1,
			140300: 1,
			140301: 1,
			140302: 1,
			140303: 1,
			140311: 1,
			140321: 1,
			140322: 1,
			140400: 1,
			140401: 1,
			140402: 1,
			140411: 1,
			140421: 1,
			140423: 1,
			140424: 1,
			140425: 1,
			140426: 1,
			140427: 1,
			140428: 1,
			140429: 1,
			140430: 1,
			140431: 1,
			140481: 1,
			140500: 1,
			140501: 1,
			140502: 1,
			140521: 1,
			140522: 1,
			140524: 1,
			140525: 1,
			140581: 1,
			140600: 1,
			140601: 1,
			140602: 1,
			140603: 1,
			140621: 1,
			140622: 1,
			140623: 1,
			140624: 1,
			142200: 1,
			142201: 1,
			142202: 1,
			142222: 1,
			142223: 1,
			142225: 1,
			142226: 1,
			142227: 1,
			142228: 1,
			142229: 1,
			142230: 1,
			142231: 1,
			142232: 1,
			142233: 1,
			142234: 1,
			142300: 1,
			142301: 1,
			142302: 1,
			142303: 1,
			142322: 1,
			142323: 1,
			142325: 1,
			142326: 1,
			142327: 1,
			142328: 1,
			142329: 1,
			142330: 1,
			142332: 1,
			142333: 1,
			142400: 1,
			142401: 1,
			142402: 1,
			142421: 1,
			142422: 1,
			142423: 1,
			142424: 1,
			142427: 1,
			142429: 1,
			142430: 1,
			142431: 1,
			142433: 1,
			142600: 1,
			142601: 1,
			142602: 1,
			142603: 1,
			142621: 1,
			142622: 1,
			142623: 1,
			142625: 1,
			142627: 1,
			142628: 1,
			142629: 1,
			142630: 1,
			142631: 1,
			142632: 1,
			142633: 1,
			142634: 1,
			142635: 1,
			142636: 1,
			142700: 1,
			142701: 1,
			142702: 1,
			142703: 1,
			142723: 1,
			142724: 1,
			142725: 1,
			142726: 1,
			142727: 1,
			142729: 1,
			142730: 1,
			142731: 1,
			142732: 1,
			142733: 1,
			15e4: 1,
			150100: 1,
			150101: 1,
			150102: 1,
			150103: 1,
			150104: 1,
			150105: 1,
			150121: 1,
			150122: 1,
			150123: 1,
			150124: 1,
			150125: 1,
			150200: 1,
			150201: 1,
			150202: 1,
			150203: 1,
			150204: 1,
			150205: 1,
			150206: 1,
			150207: 1,
			150221: 1,
			150222: 1,
			150223: 1,
			150300: 1,
			150301: 1,
			150302: 1,
			150303: 1,
			150304: 1,
			150400: 1,
			150401: 1,
			150402: 1,
			150403: 1,
			150404: 1,
			150421: 1,
			150422: 1,
			150423: 1,
			150424: 1,
			150425: 1,
			150426: 1,
			150428: 1,
			150429: 1,
			150430: 1,
			152100: 1,
			152101: 1,
			152102: 1,
			152103: 1,
			152104: 1,
			152105: 1,
			152106: 1,
			152122: 1,
			152123: 1,
			152127: 1,
			152128: 1,
			152129: 1,
			152130: 1,
			152131: 1,
			152200: 1,
			152201: 1,
			152202: 1,
			152221: 1,
			152222: 1,
			152223: 1,
			152224: 1,
			152300: 1,
			152301: 1,
			152302: 1,
			152322: 1,
			152323: 1,
			152324: 1,
			152325: 1,
			152326: 1,
			152327: 1,
			152500: 1,
			152501: 1,
			152502: 1,
			152522: 1,
			152523: 1,
			152524: 1,
			152525: 1,
			152526: 1,
			152527: 1,
			152528: 1,
			152529: 1,
			152530: 1,
			152531: 1,
			152600: 1,
			152601: 1,
			152602: 1,
			152624: 1,
			152625: 1,
			152626: 1,
			152627: 1,
			152629: 1,
			152630: 1,
			152631: 1,
			152632: 1,
			152634: 1,
			152700: 1,
			152701: 1,
			152722: 1,
			152723: 1,
			152724: 1,
			152725: 1,
			152726: 1,
			152727: 1,
			152728: 1,
			152800: 1,
			152801: 1,
			152822: 1,
			152823: 1,
			152824: 1,
			152825: 1,
			152826: 1,
			152827: 1,
			152900: 1,
			152921: 1,
			152922: 1,
			152923: 1,
			21e4: 1,
			210100: 1,
			210101: 1,
			210102: 1,
			210103: 1,
			210104: 1,
			210105: 1,
			210106: 1,
			210111: 1,
			210112: 1,
			210113: 1,
			210114: 1,
			210122: 1,
			210123: 1,
			210124: 1,
			210181: 1,
			210200: 1,
			210201: 1,
			210202: 1,
			210203: 1,
			210204: 1,
			210211: 1,
			210212: 1,
			210213: 1,
			210224: 1,
			210281: 1,
			210282: 1,
			210283: 1,
			210300: 1,
			210301: 1,
			210302: 1,
			210303: 1,
			210304: 1,
			210311: 1,
			210321: 1,
			210323: 1,
			210381: 1,
			210400: 1,
			210401: 1,
			210402: 1,
			210403: 1,
			210404: 1,
			210411: 1,
			210421: 1,
			210422: 1,
			210423: 1,
			210500: 1,
			210501: 1,
			210502: 1,
			210503: 1,
			210504: 1,
			210505: 1,
			210521: 1,
			210522: 1,
			210600: 1,
			210601: 1,
			210602: 1,
			210603: 1,
			210604: 1,
			210624: 1,
			210681: 1,
			210682: 1,
			210700: 1,
			210701: 1,
			210702: 1,
			210703: 1,
			210711: 1,
			210726: 1,
			210727: 1,
			210781: 1,
			210782: 1,
			210800: 1,
			210801: 1,
			210802: 1,
			210803: 1,
			210804: 1,
			210811: 1,
			210881: 1,
			210882: 1,
			210900: 1,
			210901: 1,
			210902: 1,
			210903: 1,
			210904: 1,
			210905: 1,
			210911: 1,
			210921: 1,
			210922: 1,
			211e3: 1,
			211001: 1,
			211002: 1,
			211003: 1,
			211004: 1,
			211005: 1,
			211011: 1,
			211021: 1,
			211081: 1,
			211100: 1,
			211101: 1,
			211102: 1,
			211103: 1,
			211121: 1,
			211122: 1,
			211200: 1,
			211201: 1,
			211202: 1,
			211204: 1,
			211221: 1,
			211223: 1,
			211224: 1,
			211281: 1,
			211282: 1,
			211300: 1,
			211301: 1,
			211302: 1,
			211303: 1,
			211321: 1,
			211322: 1,
			211324: 1,
			211381: 1,
			211382: 1,
			211400: 1,
			211401: 1,
			211402: 1,
			211403: 1,
			211404: 1,
			211421: 1,
			211422: 1,
			211481: 1,
			22e4: 1,
			220100: 1,
			220101: 1,
			220102: 1,
			220103: 1,
			220104: 1,
			220105: 1,
			220106: 1,
			220112: 1,
			220122: 1,
			220181: 1,
			220182: 1,
			220183: 1,
			220200: 1,
			220201: 1,
			220202: 1,
			220203: 1,
			220204: 1,
			220211: 1,
			220221: 1,
			220281: 1,
			220282: 1,
			220283: 1,
			220284: 1,
			220300: 1,
			220301: 1,
			220302: 1,
			220303: 1,
			220322: 1,
			220323: 1,
			220381: 1,
			220382: 1,
			220400: 1,
			220401: 1,
			220402: 1,
			220403: 1,
			220421: 1,
			220422: 1,
			220500: 1,
			220501: 1,
			220502: 1,
			220503: 1,
			220521: 1,
			220523: 1,
			220524: 1,
			220581: 1,
			220582: 1,
			220600: 1,
			220601: 1,
			220602: 1,
			220621: 1,
			220622: 1,
			220623: 1,
			220625: 1,
			220681: 1,
			220700: 1,
			220701: 1,
			220702: 1,
			220721: 1,
			220722: 1,
			220723: 1,
			220724: 1,
			220800: 1,
			220801: 1,
			220802: 1,
			220821: 1,
			220822: 1,
			220881: 1,
			220882: 1,
			222400: 1,
			222401: 1,
			222402: 1,
			222403: 1,
			222404: 1,
			222405: 1,
			222406: 1,
			222424: 1,
			222426: 1,
			23e4: 1,
			230100: 1,
			230101: 1,
			230102: 1,
			230103: 1,
			230104: 1,
			230105: 1,
			230106: 1,
			230107: 1,
			230108: 1,
			230121: 1,
			230123: 1,
			230124: 1,
			230125: 1,
			230126: 1,
			230127: 1,
			230128: 1,
			230129: 1,
			230181: 1,
			230182: 1,
			230183: 1,
			230184: 1,
			230200: 1,
			230201: 1,
			230202: 1,
			230203: 1,
			230204: 1,
			230205: 1,
			230206: 1,
			230207: 1,
			230208: 1,
			230221: 1,
			230223: 1,
			230224: 1,
			230225: 1,
			230227: 1,
			230229: 1,
			230230: 1,
			230231: 1,
			230281: 1,
			230300: 1,
			230301: 1,
			230302: 1,
			230303: 1,
			230304: 1,
			230305: 1,
			230306: 1,
			230307: 1,
			230321: 1,
			230381: 1,
			230382: 1,
			230400: 1,
			230401: 1,
			230402: 1,
			230403: 1,
			230404: 1,
			230405: 1,
			230406: 1,
			230407: 1,
			230421: 1,
			230422: 1,
			230500: 1,
			230501: 1,
			230502: 1,
			230503: 1,
			230505: 1,
			230506: 1,
			230521: 1,
			230522: 1,
			230523: 1,
			230524: 1,
			230600: 1,
			230601: 1,
			230602: 1,
			230603: 1,
			230604: 1,
			230605: 1,
			230606: 1,
			230621: 1,
			230622: 1,
			230623: 1,
			230624: 1,
			230700: 1,
			230701: 1,
			230702: 1,
			230703: 1,
			230704: 1,
			230705: 1,
			230706: 1,
			230707: 1,
			230708: 1,
			230709: 1,
			230710: 1,
			230711: 1,
			230712: 1,
			230713: 1,
			230714: 1,
			230715: 1,
			230716: 1,
			230722: 1,
			230781: 1,
			230800: 1,
			230801: 1,
			230802: 1,
			230803: 1,
			230804: 1,
			230805: 1,
			230811: 1,
			230822: 1,
			230826: 1,
			230828: 1,
			230833: 1,
			230881: 1,
			230882: 1,
			230900: 1,
			230901: 1,
			230902: 1,
			230903: 1,
			230904: 1,
			230921: 1,
			231e3: 1,
			231001: 1,
			231002: 1,
			231003: 1,
			231004: 1,
			231005: 1,
			231024: 1,
			231025: 1,
			231081: 1,
			231083: 1,
			231084: 1,
			231085: 1,
			231100: 1,
			231101: 1,
			231102: 1,
			231121: 1,
			231123: 1,
			231124: 1,
			231181: 1,
			231182: 1,
			232300: 1,
			232301: 1,
			232302: 1,
			232303: 1,
			232304: 1,
			232324: 1,
			232325: 1,
			232326: 1,
			232330: 1,
			232331: 1,
			232332: 1,
			232700: 1,
			232721: 1,
			232722: 1,
			232723: 1,
			31e4: 1,
			310100: 1,
			310101: 1,
			310102: 1,
			310103: 1,
			310104: 1,
			310105: 1,
			310106: 1,
			310107: 1,
			310108: 1,
			310109: 1,
			310110: 1,
			310112: 1,
			310113: 1,
			310114: 1,
			310115: 1,
			310116: 1,
			310117: 1,
			310200: 1,
			310225: 1,
			310226: 1,
			310229: 1,
			310230: 1,
			32e4: 1,
			320100: 1,
			320101: 1,
			320102: 1,
			320103: 1,
			320104: 1,
			320105: 1,
			320106: 1,
			320107: 1,
			320111: 1,
			320112: 1,
			320113: 1,
			320114: 1,
			320121: 1,
			320122: 1,
			320123: 1,
			320124: 1,
			320125: 1,
			320200: 1,
			320201: 1,
			320202: 1,
			320203: 1,
			320204: 1,
			320211: 1,
			320281: 1,
			320282: 1,
			320283: 1,
			320300: 1,
			320301: 1,
			320302: 1,
			320303: 1,
			320304: 1,
			320305: 1,
			320311: 1,
			320321: 1,
			320322: 1,
			320323: 1,
			320324: 1,
			320381: 1,
			320382: 1,
			320400: 1,
			320401: 1,
			320402: 1,
			320404: 1,
			320405: 1,
			320411: 1,
			320481: 1,
			320482: 1,
			320483: 1,
			320500: 1,
			320501: 1,
			320502: 1,
			320503: 1,
			320504: 1,
			320511: 1,
			320581: 1,
			320582: 1,
			320583: 1,
			320584: 1,
			320585: 1,
			320586: 1,
			320600: 1,
			320601: 1,
			320602: 1,
			320611: 1,
			320621: 1,
			320623: 1,
			320681: 1,
			320682: 1,
			320683: 1,
			320684: 1,
			320700: 1,
			320701: 1,
			320703: 1,
			320704: 1,
			320705: 1,
			320706: 1,
			320721: 1,
			320722: 1,
			320723: 1,
			320724: 1,
			320800: 1,
			320801: 1,
			320802: 1,
			320811: 1,
			320821: 1,
			320826: 1,
			320829: 1,
			320830: 1,
			320831: 1,
			320882: 1,
			320900: 1,
			320901: 1,
			320902: 1,
			320921: 1,
			320922: 1,
			320923: 1,
			320924: 1,
			320925: 1,
			320928: 1,
			320981: 1,
			320982: 1,
			321e3: 1,
			321001: 1,
			321002: 1,
			321011: 1,
			321023: 1,
			321027: 1,
			321081: 1,
			321084: 1,
			321088: 1,
			321100: 1,
			321101: 1,
			321102: 1,
			321111: 1,
			321121: 1,
			321181: 1,
			321182: 1,
			321183: 1,
			321200: 1,
			321201: 1,
			321202: 1,
			321203: 1,
			321281: 1,
			321282: 1,
			321283: 1,
			321284: 1,
			321300: 1,
			321301: 1,
			321302: 1,
			321321: 1,
			321322: 1,
			321323: 1,
			321324: 1,
			33e4: 1,
			330100: 1,
			330101: 1,
			330102: 1,
			330103: 1,
			330104: 1,
			330105: 1,
			330106: 1,
			330108: 1,
			330122: 1,
			330127: 1,
			330181: 1,
			330182: 1,
			330183: 1,
			330184: 1,
			330185: 1,
			330200: 1,
			330201: 1,
			330203: 1,
			330204: 1,
			330205: 1,
			330206: 1,
			330211: 1,
			330225: 1,
			330226: 1,
			330227: 1,
			330281: 1,
			330282: 1,
			330283: 1,
			330300: 1,
			330301: 1,
			330302: 1,
			330303: 1,
			330304: 1,
			330322: 1,
			330324: 1,
			330326: 1,
			330327: 1,
			330328: 1,
			330329: 1,
			330381: 1,
			330382: 1,
			330400: 1,
			330401: 1,
			330402: 1,
			330411: 1,
			330421: 1,
			330424: 1,
			330481: 1,
			330482: 1,
			330483: 1,
			330500: 1,
			330501: 1,
			330521: 1,
			330522: 1,
			330523: 1,
			330600: 1,
			330601: 1,
			330602: 1,
			330621: 1,
			330624: 1,
			330681: 1,
			330682: 1,
			330683: 1,
			330700: 1,
			330701: 1,
			330702: 1,
			330721: 1,
			330723: 1,
			330726: 1,
			330727: 1,
			330781: 1,
			330782: 1,
			330783: 1,
			330784: 1,
			330800: 1,
			330801: 1,
			330802: 1,
			330821: 1,
			330822: 1,
			330824: 1,
			330825: 1,
			330881: 1,
			330900: 1,
			330901: 1,
			330902: 1,
			330903: 1,
			330921: 1,
			330922: 1,
			331e3: 1,
			331001: 1,
			331002: 1,
			331003: 1,
			331004: 1,
			331021: 1,
			331022: 1,
			331023: 1,
			331024: 1,
			331081: 1,
			331082: 1,
			332500: 1,
			332501: 1,
			332502: 1,
			332522: 1,
			332523: 1,
			332525: 1,
			332526: 1,
			332527: 1,
			332528: 1,
			332529: 1,
			34e4: 1,
			340100: 1,
			340101: 1,
			340102: 1,
			340103: 1,
			340104: 1,
			340111: 1,
			340121: 1,
			340122: 1,
			340123: 1,
			340200: 1,
			340201: 1,
			340202: 1,
			340203: 1,
			340204: 1,
			340207: 1,
			340221: 1,
			340222: 1,
			340223: 1,
			340300: 1,
			340301: 1,
			340302: 1,
			340303: 1,
			340304: 1,
			340311: 1,
			340321: 1,
			340322: 1,
			340323: 1,
			340400: 1,
			340401: 1,
			340402: 1,
			340403: 1,
			340404: 1,
			340405: 1,
			340406: 1,
			340421: 1,
			340500: 1,
			340501: 1,
			340502: 1,
			340503: 1,
			340504: 1,
			340505: 1,
			340521: 1,
			340600: 1,
			340601: 1,
			340602: 1,
			340603: 1,
			340604: 1,
			340621: 1,
			340700: 1,
			340701: 1,
			340702: 1,
			340703: 1,
			340711: 1,
			340721: 1,
			340800: 1,
			340801: 1,
			340802: 1,
			340803: 1,
			340811: 1,
			340822: 1,
			340823: 1,
			340824: 1,
			340825: 1,
			340826: 1,
			340827: 1,
			340828: 1,
			340881: 1,
			341e3: 1,
			341001: 1,
			341002: 1,
			341003: 1,
			341004: 1,
			341021: 1,
			341022: 1,
			341023: 1,
			341024: 1,
			341100: 1,
			341101: 1,
			341102: 1,
			341103: 1,
			341122: 1,
			341124: 1,
			341125: 1,
			341126: 1,
			341181: 1,
			341182: 1,
			341200: 1,
			341201: 1,
			341202: 1,
			341203: 1,
			341204: 1,
			341221: 1,
			341222: 1,
			341223: 1,
			341224: 1,
			341225: 1,
			341226: 1,
			341227: 1,
			341281: 1,
			341282: 1,
			341300: 1,
			341301: 1,
			341302: 1,
			341321: 1,
			341322: 1,
			341323: 1,
			341324: 1,
			342400: 1,
			342401: 1,
			342422: 1,
			342423: 1,
			342425: 1,
			342426: 1,
			342427: 1,
			342500: 1,
			342501: 1,
			342502: 1,
			342522: 1,
			342523: 1,
			342529: 1,
			342530: 1,
			342531: 1,
			342600: 1,
			342601: 1,
			342622: 1,
			342623: 1,
			342625: 1,
			342626: 1,
			342900: 1,
			342901: 1,
			342921: 1,
			342922: 1,
			342923: 1,
			35e4: 1,
			350100: 1,
			350101: 1,
			350102: 1,
			350103: 1,
			350104: 1,
			350105: 1,
			350111: 1,
			350121: 1,
			350122: 1,
			350123: 1,
			350124: 1,
			350125: 1,
			350128: 1,
			350181: 1,
			350182: 1,
			350200: 1,
			350201: 1,
			350202: 1,
			350203: 1,
			350204: 1,
			350205: 1,
			350206: 1,
			350211: 1,
			350212: 1,
			350300: 1,
			350301: 1,
			350302: 1,
			350303: 1,
			350321: 1,
			350322: 1,
			350400: 1,
			350401: 1,
			350402: 1,
			350403: 1,
			350421: 1,
			350423: 1,
			350424: 1,
			350425: 1,
			350426: 1,
			350427: 1,
			350428: 1,
			350429: 1,
			350430: 1,
			350481: 1,
			350500: 1,
			350501: 1,
			350502: 1,
			350503: 1,
			350504: 1,
			350521: 1,
			350524: 1,
			350525: 1,
			350526: 1,
			350527: 1,
			350581: 1,
			350582: 1,
			350583: 1,
			350600: 1,
			350601: 1,
			350602: 1,
			350603: 1,
			350622: 1,
			350623: 1,
			350624: 1,
			350625: 1,
			350626: 1,
			350627: 1,
			350628: 1,
			350629: 1,
			350681: 1,
			350700: 1,
			350701: 1,
			350702: 1,
			350721: 1,
			350722: 1,
			350723: 1,
			350724: 1,
			350725: 1,
			350781: 1,
			350782: 1,
			350783: 1,
			350784: 1,
			350800: 1,
			350801: 1,
			350802: 1,
			350821: 1,
			350822: 1,
			350823: 1,
			350824: 1,
			350825: 1,
			350881: 1,
			352200: 1,
			352201: 1,
			352202: 1,
			352203: 1,
			352225: 1,
			352227: 1,
			352228: 1,
			352229: 1,
			352230: 1,
			352231: 1,
			36e4: 1,
			360100: 1,
			360101: 1,
			360102: 1,
			360103: 1,
			360104: 1,
			360105: 1,
			360111: 1,
			360121: 1,
			360122: 1,
			360123: 1,
			360124: 1,
			360200: 1,
			360201: 1,
			360202: 1,
			360203: 1,
			360222: 1,
			360281: 1,
			360300: 1,
			360301: 1,
			360302: 1,
			360313: 1,
			360321: 1,
			360322: 1,
			360323: 1,
			360400: 1,
			360401: 1,
			360402: 1,
			360403: 1,
			360421: 1,
			360423: 1,
			360424: 1,
			360425: 1,
			360426: 1,
			360427: 1,
			360428: 1,
			360429: 1,
			360430: 1,
			360481: 1,
			360500: 1,
			360501: 1,
			360502: 1,
			360521: 1,
			360600: 1,
			360601: 1,
			360602: 1,
			360622: 1,
			360681: 1,
			360700: 1,
			360701: 1,
			360702: 1,
			360721: 1,
			360722: 1,
			360723: 1,
			360724: 1,
			360725: 1,
			360726: 1,
			360727: 1,
			360728: 1,
			360729: 1,
			360730: 1,
			360731: 1,
			360732: 1,
			360733: 1,
			360734: 1,
			360735: 1,
			360781: 1,
			360782: 1,
			362200: 1,
			362201: 1,
			362202: 1,
			362203: 1,
			362204: 1,
			362226: 1,
			362227: 1,
			362228: 1,
			362229: 1,
			362232: 1,
			362233: 1,
			362300: 1,
			362301: 1,
			362302: 1,
			362321: 1,
			362322: 1,
			362323: 1,
			362324: 1,
			362325: 1,
			362326: 1,
			362329: 1,
			362330: 1,
			362331: 1,
			362334: 1,
			362400: 1,
			362401: 1,
			362402: 1,
			362421: 1,
			362422: 1,
			362423: 1,
			362424: 1,
			362425: 1,
			362426: 1,
			362427: 1,
			362428: 1,
			362429: 1,
			362430: 1,
			362432: 1,
			362500: 1,
			362502: 1,
			362522: 1,
			362523: 1,
			362524: 1,
			362525: 1,
			362526: 1,
			362527: 1,
			362528: 1,
			362529: 1,
			362531: 1,
			362532: 1,
			37e4: 1,
			370100: 1,
			370101: 1,
			370102: 1,
			370103: 1,
			370104: 1,
			370105: 1,
			370112: 1,
			370123: 1,
			370124: 1,
			370125: 1,
			370126: 1,
			370181: 1,
			370200: 1,
			370201: 1,
			370202: 1,
			370203: 1,
			370205: 1,
			370211: 1,
			370212: 1,
			370213: 1,
			370214: 1,
			370281: 1,
			370282: 1,
			370283: 1,
			370284: 1,
			370285: 1,
			370300: 1,
			370301: 1,
			370302: 1,
			370303: 1,
			370304: 1,
			370305: 1,
			370306: 1,
			370321: 1,
			370322: 1,
			370323: 1,
			370400: 1,
			370401: 1,
			370402: 1,
			370403: 1,
			370404: 1,
			370405: 1,
			370406: 1,
			370481: 1,
			370500: 1,
			370501: 1,
			370502: 1,
			370503: 1,
			370521: 1,
			370522: 1,
			370523: 1,
			370600: 1,
			370601: 1,
			370602: 1,
			370611: 1,
			370612: 1,
			370613: 1,
			370634: 1,
			370681: 1,
			370682: 1,
			370683: 1,
			370684: 1,
			370685: 1,
			370686: 1,
			370687: 1,
			370700: 1,
			370701: 1,
			370702: 1,
			370703: 1,
			370704: 1,
			370705: 1,
			370724: 1,
			370725: 1,
			370781: 1,
			370782: 1,
			370783: 1,
			370784: 1,
			370785: 1,
			370786: 1,
			370800: 1,
			370801: 1,
			370802: 1,
			370811: 1,
			370826: 1,
			370827: 1,
			370828: 1,
			370829: 1,
			370830: 1,
			370831: 1,
			370832: 1,
			370881: 1,
			370882: 1,
			370883: 1,
			370900: 1,
			370901: 1,
			370902: 1,
			370911: 1,
			370921: 1,
			370923: 1,
			370982: 1,
			370983: 1,
			371e3: 1,
			371001: 1,
			371002: 1,
			371081: 1,
			371082: 1,
			371083: 1,
			371100: 1,
			371101: 1,
			371102: 1,
			371121: 1,
			371122: 1,
			371200: 1,
			371201: 1,
			371202: 1,
			371203: 1,
			371300: 1,
			371301: 1,
			371302: 1,
			371311: 1,
			371312: 1,
			371321: 1,
			371322: 1,
			371323: 1,
			371324: 1,
			371325: 1,
			371326: 1,
			371327: 1,
			371328: 1,
			371329: 1,
			371400: 1,
			371401: 1,
			371402: 1,
			371421: 1,
			371422: 1,
			371423: 1,
			371424: 1,
			371425: 1,
			371426: 1,
			371427: 1,
			371428: 1,
			371481: 1,
			371482: 1,
			371500: 1,
			371501: 1,
			371502: 1,
			371521: 1,
			371522: 1,
			371523: 1,
			371524: 1,
			371525: 1,
			371526: 1,
			371581: 1,
			372300: 1,
			372301: 1,
			372321: 1,
			372323: 1,
			372324: 1,
			372325: 1,
			372328: 1,
			372330: 1,
			372900: 1,
			372901: 1,
			372922: 1,
			372923: 1,
			372924: 1,
			372925: 1,
			372926: 1,
			372928: 1,
			372929: 1,
			372930: 1,
			41e4: 1,
			410100: 1,
			410101: 1,
			410102: 1,
			410103: 1,
			410104: 1,
			410105: 1,
			410106: 1,
			410108: 1,
			410122: 1,
			410181: 1,
			410182: 1,
			410183: 1,
			410184: 1,
			410185: 1,
			410200: 1,
			410201: 1,
			410202: 1,
			410203: 1,
			410204: 1,
			410205: 1,
			410211: 1,
			410221: 1,
			410222: 1,
			410223: 1,
			410224: 1,
			410225: 1,
			410300: 1,
			410301: 1,
			410302: 1,
			410303: 1,
			410304: 1,
			410305: 1,
			410306: 1,
			410311: 1,
			410322: 1,
			410323: 1,
			410324: 1,
			410325: 1,
			410326: 1,
			410327: 1,
			410328: 1,
			410329: 1,
			410381: 1,
			410400: 1,
			410401: 1,
			410402: 1,
			410403: 1,
			410404: 1,
			410411: 1,
			410421: 1,
			410422: 1,
			410423: 1,
			410425: 1,
			410481: 1,
			410482: 1,
			410500: 1,
			410501: 1,
			410502: 1,
			410503: 1,
			410504: 1,
			410511: 1,
			410522: 1,
			410523: 1,
			410526: 1,
			410527: 1,
			410581: 1,
			410600: 1,
			410601: 1,
			410602: 1,
			410603: 1,
			410611: 1,
			410621: 1,
			410622: 1,
			410700: 1,
			410701: 1,
			410702: 1,
			410703: 1,
			410704: 1,
			410711: 1,
			410721: 1,
			410724: 1,
			410725: 1,
			410726: 1,
			410727: 1,
			410728: 1,
			410781: 1,
			410782: 1,
			410800: 1,
			410801: 1,
			410802: 1,
			410803: 1,
			410804: 1,
			410811: 1,
			410821: 1,
			410822: 1,
			410823: 1,
			410825: 1,
			410881: 1,
			410882: 1,
			410883: 1,
			410900: 1,
			410901: 1,
			410902: 1,
			410922: 1,
			410923: 1,
			410926: 1,
			410927: 1,
			410928: 1,
			411e3: 1,
			411001: 1,
			411002: 1,
			411023: 1,
			411024: 1,
			411025: 1,
			411081: 1,
			411082: 1,
			411100: 1,
			411101: 1,
			411102: 1,
			411121: 1,
			411122: 1,
			411123: 1,
			411200: 1,
			411201: 1,
			411202: 1,
			411221: 1,
			411222: 1,
			411224: 1,
			411281: 1,
			411282: 1,
			411300: 1,
			411301: 1,
			411302: 1,
			411303: 1,
			411321: 1,
			411322: 1,
			411323: 1,
			411324: 1,
			411325: 1,
			411326: 1,
			411327: 1,
			411328: 1,
			411329: 1,
			411330: 1,
			411381: 1,
			411400: 1,
			411401: 1,
			411402: 1,
			411403: 1,
			411421: 1,
			411422: 1,
			411423: 1,
			411424: 1,
			411425: 1,
			411426: 1,
			411481: 1,
			411500: 1,
			411501: 1,
			411502: 1,
			411503: 1,
			411521: 1,
			411522: 1,
			411523: 1,
			411524: 1,
			411525: 1,
			411526: 1,
			411527: 1,
			411528: 1,
			412700: 1,
			412701: 1,
			412702: 1,
			412721: 1,
			412722: 1,
			412723: 1,
			412724: 1,
			412725: 1,
			412726: 1,
			412727: 1,
			412728: 1,
			412800: 1,
			412801: 1,
			412821: 1,
			412822: 1,
			412823: 1,
			412824: 1,
			412825: 1,
			412826: 1,
			412827: 1,
			412828: 1,
			412829: 1,
			42e4: 1,
			420100: 1,
			420101: 1,
			420102: 1,
			420103: 1,
			420104: 1,
			420105: 1,
			420106: 1,
			420107: 1,
			420111: 1,
			420112: 1,
			420113: 1,
			420114: 1,
			420115: 1,
			420116: 1,
			420117: 1,
			420200: 1,
			420201: 1,
			420202: 1,
			420203: 1,
			420204: 1,
			420205: 1,
			420222: 1,
			420281: 1,
			420300: 1,
			420301: 1,
			420302: 1,
			420303: 1,
			420321: 1,
			420322: 1,
			420323: 1,
			420324: 1,
			420325: 1,
			420381: 1,
			420500: 1,
			420501: 1,
			420502: 1,
			420503: 1,
			420504: 1,
			420505: 1,
			420521: 1,
			420525: 1,
			420526: 1,
			420527: 1,
			420528: 1,
			420529: 1,
			420581: 1,
			420582: 1,
			420583: 1,
			420600: 1,
			420601: 1,
			420602: 1,
			420606: 1,
			420621: 1,
			420624: 1,
			420625: 1,
			420626: 1,
			420682: 1,
			420683: 1,
			420684: 1,
			420700: 1,
			420701: 1,
			420702: 1,
			420703: 1,
			420704: 1,
			420800: 1,
			420801: 1,
			420802: 1,
			420821: 1,
			420822: 1,
			420881: 1,
			420900: 1,
			420901: 1,
			420902: 1,
			420921: 1,
			420922: 1,
			420923: 1,
			420981: 1,
			420982: 1,
			420983: 1,
			420984: 1,
			421e3: 1,
			421001: 1,
			421002: 1,
			421003: 1,
			421022: 1,
			421023: 1,
			421024: 1,
			421081: 1,
			421083: 1,
			421087: 1,
			421100: 1,
			421101: 1,
			421102: 1,
			421121: 1,
			421122: 1,
			421123: 1,
			421124: 1,
			421125: 1,
			421126: 1,
			421127: 1,
			421181: 1,
			421182: 1,
			421200: 1,
			421201: 1,
			421202: 1,
			421221: 1,
			421222: 1,
			421223: 1,
			421224: 1,
			422800: 1,
			422801: 1,
			422802: 1,
			422822: 1,
			422823: 1,
			422825: 1,
			422826: 1,
			422827: 1,
			422828: 1,
			429e3: 1,
			429001: 1,
			429004: 1,
			429005: 1,
			429006: 1,
			429021: 1,
			43e4: 1,
			430100: 1,
			430101: 1,
			430102: 1,
			430103: 1,
			430104: 1,
			430105: 1,
			430111: 1,
			430121: 1,
			430122: 1,
			430124: 1,
			430181: 1,
			430200: 1,
			430201: 1,
			430202: 1,
			430203: 1,
			430204: 1,
			430211: 1,
			430221: 1,
			430223: 1,
			430224: 1,
			430225: 1,
			430281: 1,
			430300: 1,
			430301: 1,
			430302: 1,
			430304: 1,
			430321: 1,
			430381: 1,
			430382: 1,
			430400: 1,
			430401: 1,
			430402: 1,
			430403: 1,
			430404: 1,
			430411: 1,
			430412: 1,
			430421: 1,
			430422: 1,
			430423: 1,
			430424: 1,
			430426: 1,
			430481: 1,
			430482: 1,
			430500: 1,
			430501: 1,
			430502: 1,
			430503: 1,
			430511: 1,
			430521: 1,
			430522: 1,
			430523: 1,
			430524: 1,
			430525: 1,
			430527: 1,
			430528: 1,
			430529: 1,
			430581: 1,
			430600: 1,
			430601: 1,
			430602: 1,
			430603: 1,
			430611: 1,
			430621: 1,
			430623: 1,
			430624: 1,
			430626: 1,
			430681: 1,
			430682: 1,
			430700: 1,
			430701: 1,
			430702: 1,
			430703: 1,
			430721: 1,
			430722: 1,
			430723: 1,
			430724: 1,
			430725: 1,
			430726: 1,
			430781: 1,
			430800: 1,
			430801: 1,
			430802: 1,
			430811: 1,
			430821: 1,
			430822: 1,
			430900: 1,
			430901: 1,
			430902: 1,
			430903: 1,
			430921: 1,
			430922: 1,
			430923: 1,
			430981: 1,
			431e3: 1,
			431001: 1,
			431002: 1,
			431003: 1,
			431021: 1,
			431022: 1,
			431023: 1,
			431024: 1,
			431025: 1,
			431026: 1,
			431027: 1,
			431028: 1,
			431081: 1,
			431100: 1,
			431101: 1,
			431102: 1,
			431103: 1,
			431121: 1,
			431122: 1,
			431123: 1,
			431124: 1,
			431125: 1,
			431126: 1,
			431127: 1,
			431128: 1,
			431129: 1,
			431200: 1,
			431201: 1,
			431202: 1,
			431221: 1,
			431222: 1,
			431223: 1,
			431224: 1,
			431225: 1,
			431226: 1,
			431227: 1,
			431228: 1,
			431229: 1,
			431230: 1,
			431281: 1,
			432500: 1,
			432501: 1,
			432502: 1,
			432503: 1,
			432522: 1,
			432524: 1,
			433e3: 1,
			433001: 1,
			433100: 1,
			433101: 1,
			433122: 1,
			433123: 1,
			433124: 1,
			433125: 1,
			433126: 1,
			433127: 1,
			433130: 1,
			44e4: 1,
			440100: 1,
			440101: 1,
			440102: 1,
			440103: 1,
			440104: 1,
			440105: 1,
			440106: 1,
			440107: 1,
			440111: 1,
			440112: 1,
			440181: 1,
			440182: 1,
			440183: 1,
			440184: 1,
			440200: 1,
			440201: 1,
			440202: 1,
			440203: 1,
			440204: 1,
			440221: 1,
			440222: 1,
			440224: 1,
			440229: 1,
			440232: 1,
			440233: 1,
			440281: 1,
			440282: 1,
			440300: 1,
			440301: 1,
			440303: 1,
			440304: 1,
			440305: 1,
			440306: 1,
			440307: 1,
			440308: 1,
			440400: 1,
			440401: 1,
			440402: 1,
			440421: 1,
			440500: 1,
			440501: 1,
			440506: 1,
			440507: 1,
			440508: 1,
			440509: 1,
			440510: 1,
			440523: 1,
			440582: 1,
			440583: 1,
			440600: 1,
			440601: 1,
			440602: 1,
			440603: 1,
			440681: 1,
			440682: 1,
			440683: 1,
			440684: 1,
			440700: 1,
			440701: 1,
			440703: 1,
			440704: 1,
			440781: 1,
			440782: 1,
			440783: 1,
			440784: 1,
			440785: 1,
			440800: 1,
			440801: 1,
			440802: 1,
			440803: 1,
			440804: 1,
			440811: 1,
			440823: 1,
			440825: 1,
			440881: 1,
			440882: 1,
			440883: 1,
			440900: 1,
			440901: 1,
			440902: 1,
			440923: 1,
			440981: 1,
			440982: 1,
			440983: 1,
			441200: 1,
			441201: 1,
			441202: 1,
			441203: 1,
			441223: 1,
			441224: 1,
			441225: 1,
			441226: 1,
			441283: 1,
			441284: 1,
			441300: 1,
			441301: 1,
			441302: 1,
			441322: 1,
			441323: 1,
			441324: 1,
			441381: 1,
			441400: 1,
			441401: 1,
			441402: 1,
			441421: 1,
			441422: 1,
			441423: 1,
			441424: 1,
			441426: 1,
			441427: 1,
			441481: 1,
			441500: 1,
			441501: 1,
			441502: 1,
			441521: 1,
			441523: 1,
			441581: 1,
			441600: 1,
			441601: 1,
			441602: 1,
			441621: 1,
			441622: 1,
			441623: 1,
			441624: 1,
			441625: 1,
			441700: 1,
			441701: 1,
			441702: 1,
			441721: 1,
			441723: 1,
			441781: 1,
			441800: 1,
			441801: 1,
			441802: 1,
			441821: 1,
			441823: 1,
			441825: 1,
			441826: 1,
			441827: 1,
			441881: 1,
			441882: 1,
			441900: 1,
			441901: 1,
			442e3: 1,
			442001: 1,
			445100: 1,
			445101: 1,
			445102: 1,
			445121: 1,
			445122: 1,
			445200: 1,
			445201: 1,
			445202: 1,
			445221: 1,
			445222: 1,
			445224: 1,
			445281: 1,
			445300: 1,
			445301: 1,
			445302: 1,
			445321: 1,
			445322: 1,
			445323: 1,
			445381: 1,
			45e4: 1,
			450100: 1,
			450101: 1,
			450102: 1,
			450103: 1,
			450104: 1,
			450105: 1,
			450106: 1,
			450111: 1,
			450121: 1,
			450122: 1,
			450200: 1,
			450201: 1,
			450202: 1,
			450203: 1,
			450204: 1,
			450205: 1,
			450211: 1,
			450221: 1,
			450222: 1,
			450300: 1,
			450301: 1,
			450302: 1,
			450303: 1,
			450304: 1,
			450305: 1,
			450311: 1,
			450321: 1,
			450322: 1,
			450323: 1,
			450324: 1,
			450325: 1,
			450326: 1,
			450327: 1,
			450328: 1,
			450329: 1,
			450330: 1,
			450331: 1,
			450332: 1,
			450400: 1,
			450401: 1,
			450403: 1,
			450404: 1,
			450411: 1,
			450421: 1,
			450422: 1,
			450423: 1,
			450481: 1,
			450500: 1,
			450501: 1,
			450502: 1,
			450503: 1,
			450512: 1,
			450521: 1,
			450600: 1,
			450601: 1,
			450602: 1,
			450603: 1,
			450621: 1,
			450681: 1,
			450700: 1,
			450701: 1,
			450702: 1,
			450703: 1,
			450721: 1,
			450722: 1,
			450800: 1,
			450801: 1,
			450802: 1,
			450803: 1,
			450821: 1,
			450881: 1,
			450900: 1,
			450901: 1,
			450902: 1,
			450921: 1,
			450922: 1,
			450923: 1,
			450924: 1,
			450981: 1,
			452100: 1,
			452101: 1,
			452122: 1,
			452123: 1,
			452124: 1,
			452126: 1,
			452127: 1,
			452128: 1,
			452129: 1,
			452130: 1,
			452131: 1,
			452132: 1,
			452133: 1,
			452200: 1,
			452201: 1,
			452223: 1,
			452224: 1,
			452225: 1,
			452226: 1,
			452227: 1,
			452228: 1,
			452229: 1,
			452230: 1,
			452231: 1,
			452400: 1,
			452402: 1,
			452424: 1,
			452427: 1,
			452428: 1,
			452600: 1,
			452601: 1,
			452622: 1,
			452623: 1,
			452624: 1,
			452625: 1,
			452626: 1,
			452627: 1,
			452628: 1,
			452629: 1,
			452630: 1,
			452631: 1,
			452632: 1,
			452700: 1,
			452701: 1,
			452702: 1,
			452723: 1,
			452724: 1,
			452725: 1,
			452726: 1,
			452727: 1,
			452728: 1,
			452729: 1,
			452730: 1,
			452731: 1,
			46e4: 1,
			460001: 1,
			460002: 1,
			460003: 1,
			460004: 1,
			460005: 1,
			460006: 1,
			460007: 1,
			460025: 1,
			460026: 1,
			460027: 1,
			460028: 1,
			460030: 1,
			460031: 1,
			460033: 1,
			460034: 1,
			460035: 1,
			460036: 1,
			460037: 1,
			460038: 1,
			460039: 1,
			460100: 1,
			460101: 1,
			460102: 1,
			460103: 1,
			460104: 1,
			460200: 1,
			460201: 1,
			5e5: 1,
			500100: 1,
			500101: 1,
			500102: 1,
			500103: 1,
			500104: 1,
			500105: 1,
			500106: 1,
			500107: 1,
			500108: 1,
			500109: 1,
			500110: 1,
			500111: 1,
			500112: 1,
			500113: 1,
			500200: 1,
			500221: 1,
			500222: 1,
			500223: 1,
			500224: 1,
			500225: 1,
			500226: 1,
			500227: 1,
			500228: 1,
			500229: 1,
			500230: 1,
			500231: 1,
			500232: 1,
			500233: 1,
			500234: 1,
			500235: 1,
			500236: 1,
			500237: 1,
			500238: 1,
			500239: 1,
			500240: 1,
			500241: 1,
			500242: 1,
			500243: 1,
			500300: 1,
			500381: 1,
			500382: 1,
			500383: 1,
			500384: 1,
			51e4: 1,
			510100: 1,
			510101: 1,
			510104: 1,
			510105: 1,
			510106: 1,
			510107: 1,
			510108: 1,
			510112: 1,
			510113: 1,
			510121: 1,
			510122: 1,
			510123: 1,
			510124: 1,
			510125: 1,
			510129: 1,
			510131: 1,
			510132: 1,
			510181: 1,
			510182: 1,
			510183: 1,
			510184: 1,
			510300: 1,
			510301: 1,
			510302: 1,
			510303: 1,
			510304: 1,
			510311: 1,
			510321: 1,
			510322: 1,
			510400: 1,
			510401: 1,
			510402: 1,
			510403: 1,
			510411: 1,
			510421: 1,
			510422: 1,
			510500: 1,
			510501: 1,
			510502: 1,
			510503: 1,
			510504: 1,
			510521: 1,
			510522: 1,
			510524: 1,
			510525: 1,
			510600: 1,
			510601: 1,
			510603: 1,
			510623: 1,
			510626: 1,
			510681: 1,
			510682: 1,
			510683: 1,
			510700: 1,
			510701: 1,
			510703: 1,
			510704: 1,
			510722: 1,
			510723: 1,
			510724: 1,
			510725: 1,
			510726: 1,
			510727: 1,
			510781: 1,
			510800: 1,
			510801: 1,
			510802: 1,
			510811: 1,
			510812: 1,
			510821: 1,
			510822: 1,
			510823: 1,
			510824: 1,
			510900: 1,
			510901: 1,
			510902: 1,
			510921: 1,
			510922: 1,
			510923: 1,
			511e3: 1,
			511001: 1,
			511002: 1,
			511011: 1,
			511024: 1,
			511025: 1,
			511028: 1,
			511100: 1,
			511101: 1,
			511102: 1,
			511111: 1,
			511112: 1,
			511113: 1,
			511123: 1,
			511124: 1,
			511126: 1,
			511129: 1,
			511132: 1,
			511133: 1,
			511181: 1,
			511300: 1,
			511301: 1,
			511302: 1,
			511303: 1,
			511304: 1,
			511321: 1,
			511322: 1,
			511323: 1,
			511324: 1,
			511325: 1,
			511381: 1,
			511500: 1,
			511501: 1,
			511502: 1,
			511521: 1,
			511522: 1,
			511523: 1,
			511524: 1,
			511525: 1,
			511526: 1,
			511527: 1,
			511528: 1,
			511529: 1,
			511600: 1,
			511601: 1,
			511602: 1,
			511621: 1,
			511622: 1,
			511623: 1,
			511681: 1,
			513e3: 1,
			513001: 1,
			513002: 1,
			513021: 1,
			513022: 1,
			513023: 1,
			513029: 1,
			513030: 1,
			513100: 1,
			513101: 1,
			513122: 1,
			513123: 1,
			513124: 1,
			513125: 1,
			513126: 1,
			513127: 1,
			513128: 1,
			513200: 1,
			513221: 1,
			513222: 1,
			513223: 1,
			513224: 1,
			513225: 1,
			513226: 1,
			513227: 1,
			513228: 1,
			513229: 1,
			513230: 1,
			513231: 1,
			513232: 1,
			513233: 1,
			513300: 1,
			513321: 1,
			513322: 1,
			513323: 1,
			513324: 1,
			513325: 1,
			513326: 1,
			513327: 1,
			513328: 1,
			513329: 1,
			513330: 1,
			513331: 1,
			513332: 1,
			513333: 1,
			513334: 1,
			513335: 1,
			513336: 1,
			513337: 1,
			513338: 1,
			513400: 1,
			513401: 1,
			513422: 1,
			513423: 1,
			513424: 1,
			513425: 1,
			513426: 1,
			513427: 1,
			513428: 1,
			513429: 1,
			513430: 1,
			513431: 1,
			513432: 1,
			513433: 1,
			513434: 1,
			513435: 1,
			513436: 1,
			513437: 1,
			513700: 1,
			513701: 1,
			513721: 1,
			513722: 1,
			513723: 1,
			513800: 1,
			513821: 1,
			513822: 1,
			513823: 1,
			513824: 1,
			513825: 1,
			513826: 1,
			513900: 1,
			513901: 1,
			513902: 1,
			513921: 1,
			513922: 1,
			52e4: 1,
			520100: 1,
			520101: 1,
			520102: 1,
			520103: 1,
			520111: 1,
			520112: 1,
			520113: 1,
			520121: 1,
			520122: 1,
			520123: 1,
			520181: 1,
			520200: 1,
			520201: 1,
			520202: 1,
			520203: 1,
			520221: 1,
			520300: 1,
			520301: 1,
			520302: 1,
			520321: 1,
			520322: 1,
			520323: 1,
			520324: 1,
			520325: 1,
			520326: 1,
			520327: 1,
			520328: 1,
			520329: 1,
			520330: 1,
			520381: 1,
			520382: 1,
			522200: 1,
			522201: 1,
			522222: 1,
			522223: 1,
			522224: 1,
			522225: 1,
			522226: 1,
			522227: 1,
			522228: 1,
			522229: 1,
			522230: 1,
			522300: 1,
			522301: 1,
			522322: 1,
			522323: 1,
			522324: 1,
			522325: 1,
			522326: 1,
			522327: 1,
			522328: 1,
			522400: 1,
			522401: 1,
			522422: 1,
			522423: 1,
			522424: 1,
			522425: 1,
			522426: 1,
			522427: 1,
			522428: 1,
			522500: 1,
			522501: 1,
			522526: 1,
			522527: 1,
			522528: 1,
			522529: 1,
			522530: 1,
			522600: 1,
			522601: 1,
			522622: 1,
			522623: 1,
			522624: 1,
			522625: 1,
			522626: 1,
			522627: 1,
			522628: 1,
			522629: 1,
			522630: 1,
			522631: 1,
			522632: 1,
			522633: 1,
			522634: 1,
			522635: 1,
			522636: 1,
			522700: 1,
			522701: 1,
			522702: 1,
			522722: 1,
			522723: 1,
			522725: 1,
			522726: 1,
			522727: 1,
			522728: 1,
			522729: 1,
			522730: 1,
			522731: 1,
			522732: 1,
			53e4: 1,
			530100: 1,
			530101: 1,
			530102: 1,
			530103: 1,
			530111: 1,
			530112: 1,
			530113: 1,
			530121: 1,
			530122: 1,
			530124: 1,
			530125: 1,
			530126: 1,
			530127: 1,
			530128: 1,
			530129: 1,
			530181: 1,
			530300: 1,
			530301: 1,
			530302: 1,
			530321: 1,
			530322: 1,
			530323: 1,
			530324: 1,
			530325: 1,
			530326: 1,
			530328: 1,
			530381: 1,
			530400: 1,
			530401: 1,
			530402: 1,
			530421: 1,
			530422: 1,
			530423: 1,
			530424: 1,
			530425: 1,
			530426: 1,
			530427: 1,
			530428: 1,
			532100: 1,
			532101: 1,
			532122: 1,
			532123: 1,
			532124: 1,
			532125: 1,
			532126: 1,
			532127: 1,
			532128: 1,
			532129: 1,
			532130: 1,
			532131: 1,
			532300: 1,
			532301: 1,
			532322: 1,
			532323: 1,
			532324: 1,
			532325: 1,
			532326: 1,
			532327: 1,
			532328: 1,
			532329: 1,
			532331: 1,
			532500: 1,
			532501: 1,
			532502: 1,
			532522: 1,
			532523: 1,
			532524: 1,
			532525: 1,
			532526: 1,
			532527: 1,
			532528: 1,
			532529: 1,
			532530: 1,
			532531: 1,
			532532: 1,
			532600: 1,
			532621: 1,
			532622: 1,
			532623: 1,
			532624: 1,
			532625: 1,
			532626: 1,
			532627: 1,
			532628: 1,
			532700: 1,
			532701: 1,
			532722: 1,
			532723: 1,
			532724: 1,
			532725: 1,
			532726: 1,
			532727: 1,
			532728: 1,
			532729: 1,
			532730: 1,
			532800: 1,
			532801: 1,
			532822: 1,
			532823: 1,
			532900: 1,
			532901: 1,
			532922: 1,
			532923: 1,
			532924: 1,
			532925: 1,
			532926: 1,
			532927: 1,
			532928: 1,
			532929: 1,
			532930: 1,
			532931: 1,
			532932: 1,
			533e3: 1,
			533001: 1,
			533022: 1,
			533023: 1,
			533024: 1,
			533025: 1,
			533100: 1,
			533101: 1,
			533102: 1,
			533103: 1,
			533122: 1,
			533123: 1,
			533124: 1,
			533200: 1,
			533221: 1,
			533222: 1,
			533223: 1,
			533224: 1,
			533300: 1,
			533321: 1,
			533323: 1,
			533324: 1,
			533325: 1,
			533400: 1,
			533421: 1,
			533422: 1,
			533423: 1,
			533500: 1,
			533521: 1,
			533522: 1,
			533523: 1,
			533524: 1,
			533525: 1,
			533526: 1,
			533527: 1,
			533528: 1,
			54e4: 1,
			540100: 1,
			540101: 1,
			540102: 1,
			540121: 1,
			540122: 1,
			540123: 1,
			540124: 1,
			540125: 1,
			540126: 1,
			540127: 1,
			542100: 1,
			542121: 1,
			542122: 1,
			542123: 1,
			542124: 1,
			542125: 1,
			542126: 1,
			542127: 1,
			542128: 1,
			542129: 1,
			542132: 1,
			542133: 1,
			542134: 1,
			542135: 1,
			542136: 1,
			542137: 1,
			542200: 1,
			542221: 1,
			542222: 1,
			542223: 1,
			542224: 1,
			542225: 1,
			542226: 1,
			542227: 1,
			542228: 1,
			542229: 1,
			542231: 1,
			542232: 1,
			542233: 1,
			542300: 1,
			542301: 1,
			542322: 1,
			542323: 1,
			542324: 1,
			542325: 1,
			542326: 1,
			542327: 1,
			542328: 1,
			542329: 1,
			542330: 1,
			542331: 1,
			542332: 1,
			542333: 1,
			542334: 1,
			542335: 1,
			542336: 1,
			542337: 1,
			542338: 1,
			542400: 1,
			542421: 1,
			542422: 1,
			542423: 1,
			542424: 1,
			542425: 1,
			542426: 1,
			542427: 1,
			542428: 1,
			542429: 1,
			542430: 1,
			542500: 1,
			542521: 1,
			542522: 1,
			542523: 1,
			542524: 1,
			542525: 1,
			542526: 1,
			542527: 1,
			542528: 1,
			542600: 1,
			542621: 1,
			542622: 1,
			542623: 1,
			542624: 1,
			542625: 1,
			542626: 1,
			542627: 1,
			61e4: 1,
			610100: 1,
			610101: 1,
			610102: 1,
			610103: 1,
			610104: 1,
			610111: 1,
			610112: 1,
			610113: 1,
			610114: 1,
			610115: 1,
			610121: 1,
			610122: 1,
			610124: 1,
			610125: 1,
			610126: 1,
			610200: 1,
			610201: 1,
			610202: 1,
			610203: 1,
			610221: 1,
			610222: 1,
			610300: 1,
			610301: 1,
			610302: 1,
			610303: 1,
			610321: 1,
			610322: 1,
			610323: 1,
			610324: 1,
			610326: 1,
			610327: 1,
			610328: 1,
			610329: 1,
			610330: 1,
			610331: 1,
			610400: 1,
			610401: 1,
			610402: 1,
			610403: 1,
			610404: 1,
			610422: 1,
			610423: 1,
			610424: 1,
			610425: 1,
			610426: 1,
			610427: 1,
			610428: 1,
			610429: 1,
			610430: 1,
			610431: 1,
			610481: 1,
			610500: 1,
			610501: 1,
			610502: 1,
			610521: 1,
			610522: 1,
			610523: 1,
			610524: 1,
			610525: 1,
			610526: 1,
			610527: 1,
			610528: 1,
			610581: 1,
			610582: 1,
			610600: 1,
			610601: 1,
			610602: 1,
			610621: 1,
			610622: 1,
			610623: 1,
			610624: 1,
			610625: 1,
			610626: 1,
			610627: 1,
			610628: 1,
			610629: 1,
			610630: 1,
			610631: 1,
			610632: 1,
			610700: 1,
			610701: 1,
			610702: 1,
			610721: 1,
			610722: 1,
			610723: 1,
			610724: 1,
			610725: 1,
			610726: 1,
			610727: 1,
			610728: 1,
			610729: 1,
			610730: 1,
			612400: 1,
			612401: 1,
			612422: 1,
			612423: 1,
			612424: 1,
			612425: 1,
			612426: 1,
			612427: 1,
			612428: 1,
			612429: 1,
			612430: 1,
			612500: 1,
			612501: 1,
			612522: 1,
			612523: 1,
			612524: 1,
			612525: 1,
			612526: 1,
			612527: 1,
			612700: 1,
			612701: 1,
			612722: 1,
			612723: 1,
			612724: 1,
			612725: 1,
			612726: 1,
			612727: 1,
			612728: 1,
			612729: 1,
			612730: 1,
			612731: 1,
			612732: 1,
			62e4: 1,
			620100: 1,
			620101: 1,
			620102: 1,
			620103: 1,
			620104: 1,
			620105: 1,
			620111: 1,
			620121: 1,
			620122: 1,
			620123: 1,
			620200: 1,
			620201: 1,
			620300: 1,
			620301: 1,
			620302: 1,
			620321: 1,
			620400: 1,
			620401: 1,
			620402: 1,
			620403: 1,
			620421: 1,
			620422: 1,
			620423: 1,
			620500: 1,
			620501: 1,
			620502: 1,
			620503: 1,
			620521: 1,
			620522: 1,
			620523: 1,
			620524: 1,
			620525: 1,
			622100: 1,
			622101: 1,
			622102: 1,
			622103: 1,
			622123: 1,
			622124: 1,
			622125: 1,
			622126: 1,
			622200: 1,
			622201: 1,
			622222: 1,
			622223: 1,
			622224: 1,
			622225: 1,
			622226: 1,
			622300: 1,
			622301: 1,
			622322: 1,
			622323: 1,
			622326: 1,
			622400: 1,
			622421: 1,
			622424: 1,
			622425: 1,
			622426: 1,
			622427: 1,
			622428: 1,
			622429: 1,
			622600: 1,
			622621: 1,
			622623: 1,
			622624: 1,
			622625: 1,
			622626: 1,
			622627: 1,
			622628: 1,
			622629: 1,
			622630: 1,
			622700: 1,
			622701: 1,
			622722: 1,
			622723: 1,
			622724: 1,
			622725: 1,
			622726: 1,
			622727: 1,
			622800: 1,
			622801: 1,
			622821: 1,
			622822: 1,
			622823: 1,
			622824: 1,
			622825: 1,
			622826: 1,
			622827: 1,
			622900: 1,
			622901: 1,
			622921: 1,
			622922: 1,
			622923: 1,
			622924: 1,
			622925: 1,
			622926: 1,
			622927: 1,
			623e3: 1,
			623001: 1,
			623021: 1,
			623022: 1,
			623023: 1,
			623024: 1,
			623025: 1,
			623026: 1,
			623027: 1,
			63e4: 1,
			630100: 1,
			630101: 1,
			630102: 1,
			630103: 1,
			630104: 1,
			630105: 1,
			630121: 1,
			632100: 1,
			632121: 1,
			632122: 1,
			632123: 1,
			632124: 1,
			632125: 1,
			632126: 1,
			632127: 1,
			632128: 1,
			632200: 1,
			632221: 1,
			632222: 1,
			632223: 1,
			632224: 1,
			632300: 1,
			632321: 1,
			632322: 1,
			632323: 1,
			632324: 1,
			632500: 1,
			632521: 1,
			632522: 1,
			632523: 1,
			632524: 1,
			632525: 1,
			632600: 1,
			632621: 1,
			632622: 1,
			632623: 1,
			632624: 1,
			632625: 1,
			632626: 1,
			632700: 1,
			632721: 1,
			632722: 1,
			632723: 1,
			632724: 1,
			632725: 1,
			632726: 1,
			632800: 1,
			632801: 1,
			632802: 1,
			632821: 1,
			632822: 1,
			632823: 1,
			64e4: 1,
			640100: 1,
			640101: 1,
			640102: 1,
			640103: 1,
			640111: 1,
			640121: 1,
			640122: 1,
			640200: 1,
			640201: 1,
			640202: 1,
			640203: 1,
			640204: 1,
			640221: 1,
			640222: 1,
			640223: 1,
			640300: 1,
			640301: 1,
			640302: 1,
			640321: 1,
			640322: 1,
			640323: 1,
			640324: 1,
			640381: 1,
			640382: 1,
			642200: 1,
			642221: 1,
			642222: 1,
			642223: 1,
			642224: 1,
			642225: 1,
			642226: 1,
			65e4: 1,
			650100: 1,
			650101: 1,
			650102: 1,
			650103: 1,
			650104: 1,
			650105: 1,
			650106: 1,
			650107: 1,
			650108: 1,
			650121: 1,
			650200: 1,
			650201: 1,
			650202: 1,
			650203: 1,
			650204: 1,
			650205: 1,
			652100: 1,
			652101: 1,
			652122: 1,
			652123: 1,
			652200: 1,
			652201: 1,
			652222: 1,
			652223: 1,
			652300: 1,
			652301: 1,
			652302: 1,
			652303: 1,
			652323: 1,
			652324: 1,
			652325: 1,
			652327: 1,
			652328: 1,
			652700: 1,
			652701: 1,
			652722: 1,
			652723: 1,
			652800: 1,
			652801: 1,
			652822: 1,
			652823: 1,
			652824: 1,
			652825: 1,
			652826: 1,
			652827: 1,
			652828: 1,
			652829: 1,
			652900: 1,
			652901: 1,
			652922: 1,
			652923: 1,
			652924: 1,
			652925: 1,
			652926: 1,
			652927: 1,
			652928: 1,
			652929: 1,
			653e3: 1,
			653001: 1,
			653022: 1,
			653023: 1,
			653024: 1,
			653100: 1,
			653101: 1,
			653121: 1,
			653122: 1,
			653123: 1,
			653124: 1,
			653125: 1,
			653126: 1,
			653127: 1,
			653128: 1,
			653129: 1,
			653130: 1,
			653131: 1,
			653200: 1,
			653201: 1,
			653221: 1,
			653222: 1,
			653223: 1,
			653224: 1,
			653225: 1,
			653226: 1,
			653227: 1,
			654e3: 1,
			654001: 1,
			654100: 1,
			654101: 1,
			654121: 1,
			654122: 1,
			654123: 1,
			654124: 1,
			654125: 1,
			654126: 1,
			654127: 1,
			654128: 1,
			654200: 1,
			654201: 1,
			654202: 1,
			654221: 1,
			654223: 1,
			654224: 1,
			654225: 1,
			654226: 1,
			654300: 1,
			654301: 1,
			654321: 1,
			654322: 1,
			654323: 1,
			654324: 1,
			654325: 1,
			654326: 1,
			659e3: 1,
			659001: 1
		}, cc._RF.pop()
	}, {}],
	coin: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "64797XHawpGpo704ir/km/v", "coin");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/gameEngine"),
			s = e("../../engines/services/userContent/userInterface"),
			c = e("../../engines/libs/data_control"),
			l = e("../../engines/configs/gameConfig"),
			u = cc._decorator,
			d = u.ccclass,
			p = u.property,
			f = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.lbCoin = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {}, t.prototype.start = function() {}, t.prototype.OnBtnAddCoins = function() {
					a.modules().uiControlModule.showUserPropGet(s.REWARD_TYPE.COIN, l.default.ADD_ONCE_COINS)
				}, t.prototype.update = function() {
					this.lbCoin.string = c.default.getNumberFormat(a.default.getServices().userSrv.getCoins(), 0)
				}, r([p(cc.Label)], t.prototype, "lbCoin", void 0), r([d], t)
			}(cc.Component);
		n.default = f, cc._RF.pop()
	}, {
		"../../engines/configs/gameConfig": "gameConfig",
		"../../engines/gameEngine": "gameEngine",
		"../../engines/libs/data_control": "data_control",
		"../../engines/services/userContent/userInterface": "userInterface"
	}],
	comFirstPlayerProtect: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "9ec58dZOABO4o3tqqqnk87p", "comFirstPlayerProtect");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../gameEngine"),
			s = cc._decorator,
			c = s.ccclass,
			l = s.property,
			u = s.menu,
			d = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.nodes = [], t
				}
				return i(t, e), t.prototype.onLoad = function() {
					a.default.on("addFirstPlayerNode", this.addFirstPlayerNode.bind(this)), this.schedule(this.updateShowNodes.bind(this), 1), this.updateShowNodes()
				}, t.prototype.addFirstPlayerNode = function(e) {
					this.nodes.push(e)
				}, t.prototype.updateShowNodes = function() {
					for (var e = !a.default.getServices().userSrv.isFirstPlayerTimeIn(), t = 0, n = this.nodes; t < n.length; t++) {
						var o = n[t];
						o && o.isValid && (o.active = e)
					}
				}, r([l({
					type: [cc.Node],
					tooltip: "需要动态隐藏显示的节点拖拽至此，动态加入的节点可通过事件<addFirstPlayerNode>来添加"
				})], t.prototype, "nodes", void 0), r([c, u("框架组件/新手保护")], t)
			}(cc.Component);
		n.default = d, cc._RF.pop()
	}, {
		"../gameEngine": "gameEngine"
	}],
	comSpSkeleton: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "97b4cTo/t5GWZP8dO+4HhIG", "comSpSkeleton");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
			s = a.menu,
			c = a.ccclass,
			l = function(e) {
				function t() {
					var t = e.call(this) || this;
					return t.m_completeCount = 0, t.m_completeCallback = null, t.m_trackEntryEventCallback = null, t.m_trackEventCount = 0, t.m_currSkinName = null, t
				}
				return i(t, e), t.prototype.start = function() {
					this.m_currSkinName = this.defaultSkin
				}, t.prototype.playAnimation = function(e) {
					var t = this;
					this.m_completeCount = 0, this.m_completeCallback = null, this.m_trackEventCount = 0, this.m_trackEntryEventCallback = null;
					var n = {
						onComplete: function(e, o) {
							return t.m_completeCount = e, t.m_completeCallback = o, n
						},
						onEvent: function(e, o) {
							return t.m_trackEventCount = e, t.m_trackEntryEventCallback = o, n
						},
						start: function(o) {
							return t.setCompleteListener(t.onPlayAnimationOver.bind(t)), t.setAnimation(0, e, o), t.setEventListener(t.onPlayEvent.bind(t)), n
						}
					};
					return n
				}, t.prototype.getCurrAnimation = function() {
					return this.getCurrent(0).animation
				}, t.prototype.getCurrAnimationEndTime = function() {
					if (this.getCurrAnimation()) return this.getCurrAnimation().duration
				}, t.prototype.getCurrAnimationName = function() {
					if (this.getCurrAnimation()) return this.getCurrAnimation().name
				}, t.prototype.getCurrAnimationPlayTime = function() {
					return this.getCurrent(0).trackTime
				}, t.prototype.setCurrAnimationPlayTime = function(e) {
					this.getCurrent(0).trackTime = e
				}, t.prototype.replaceTheSlot = function(e, t, n, o) {
					if (n || o) {
						var i = n || this,
							r = this.findSlot(t),
							a = i.getCurrSkinName();
						o && i.setSkin(o);
						var s = i.findSlot(e).getAttachment();
						i.setSkin(a), r.setAttachment(s)
					} else console.error("#1171033 参数3、4不能同时为空")
				}, t.prototype.setSkin = function(t) {
					e.prototype.setSkin.call(this, t), this.m_currSkinName = t
				}, t.prototype.getCurrSkinName = function() {
					return this.m_currSkinName
				}, t.prototype.onPlayAnimationOver = function() {
					this.m_completeCallback && 0 != this.m_completeCount && (this.m_completeCallback(), this.m_completeCount--), this.m_trackEntryEventCallback && 0 != this.m_trackEventCount && this.m_trackEventCount--
				}, t.prototype.onPlayEvent = function(e, t) {
					this.m_trackEntryEventCallback && 0 != this.m_trackEventCount && this.m_trackEntryEventCallback(e, t)
				}, r([c, s("框架组件/骨骼动画")], t)
			}(sp.Skeleton);
		n.default = l, cc._RF.pop()
	}, {}],
	copy: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "39a38oGTlZDZ6iPz8FG2DFP", "copy"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.CODE_VERSION = n.COMPANY_NAME = n.FRAME_TIME = n.COMPANY_COPY = void 0, n.COMPANY_COPY = "\n   ___    __   _    _   _____  \n  / _ \\  /_ | | |  | | |  __ \\ \n | | | |  | | | |__| | | |  | |\n | | | |  | | |  __  | | |  | |\n | |_| |  | | | |  | | | |__| |\n  \\___/   |_| |_|  |_| |_____/", n.FRAME_TIME = "2021年4月28日", n.COMPANY_NAME = "长沙零一互动", n.CODE_VERSION = "2.0.0", cc._RF.pop()
	}, {}],
	dataField: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "51c4cIS8PlJaocQGe8RykYE", "dataField"), Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.dataField = void 0,
			function(e) {
				(e.RANK_GROUP || (e.RANK_GROUP = {})).TT_USER = "ttUser",
					function(e) {
						e[e.COMMIT_SCORE = 0] = "COMMIT_SCORE", e[e.SHOW_SCORE = 1] = "SHOW_SCORE"
					}(e.OPERA_TYPE || (e.OPERA_TYPE = {})),
					function(e) {
						e.TRIPLE_JUMP = "triple", e.JAVELIN = "javelin"
					}(e.RANK_ID || (e.RANK_ID = {}))
			}(n.dataField || (n.dataField = {})), cc._RF.pop()
	}, {}],
	data_control: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "f11acgVgU1AQqD2zO7INjrB", "data_control"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.AStarPot = void 0;
		var o = [{
				numValue: 1e3,
				text: "K"
			}, {
				numValue: 1e6,
				text: "M"
			}, {
				numValue: 1e9,
				text: "G"
			}, {
				numValue: 1e12,
				text: "T"
			}, {
				numValue: 1e15,
				text: "P"
			}, {
				numValue: 1e18,
				text: "E"
			}, {
				numValue: 1e21,
				text: "Z"
			}, {
				numValue: 1e24,
				text: "Y"
			}, {
				numValue: 1e27,
				text: "B"
			}, {
				numValue: 1e30,
				text: "N"
			}, {
				numValue: 1e33,
				text: "D"
			}, {
				numValue: 1e36,
				text: "aa"
			}, {
				numValue: 1e39,
				text: "bb"
			}, {
				numValue: 1e42,
				text: "cc"
			}, {
				numValue: 1e45,
				text: "dd"
			}, {
				numValue: 1e48,
				text: "ee"
			}, {
				numValue: 1e51,
				text: "ff"
			}, {
				numValue: 1e54,
				text: "gg"
			}, {
				numValue: 1e57,
				text: "hh"
			}, {
				numValue: 1e60,
				text: "ii"
			}, {
				numValue: 1e63,
				text: "jj"
			}, {
				numValue: 1e66,
				text: "kk"
			}, {
				numValue: 1e69,
				text: "ll"
			}, {
				numValue: 1e72,
				text: "mm"
			}, {
				numValue: 1e75,
				text: "nn"
			}, {
				numValue: 1e78,
				text: "oo"
			}, {
				numValue: 1e81,
				text: "pp"
			}, {
				numValue: 1e84,
				text: "qq"
			}, {
				numValue: 1e87,
				text: "rr"
			}, {
				numValue: 1e90,
				text: "ss"
			}, {
				numValue: 1e93,
				text: "tt"
			}, {
				numValue: 1e96,
				text: "uu"
			}, {
				numValue: 1e99,
				text: "vv"
			}],
			i = function() {
				function e() {}
				return e.getRandId = function(e) {
					void 0 === e && (e = 16);
					for (var t = "", n = 0; n < e; n++) {
						var o = Math.floor(Math.random() * this.IDs.length);
						t += this.IDs[o]
					}
					return t
				}, e.getValueOfAreaMinMax = function(e, t, n) {
					return e < t ? t : e > n ? n : e
				}, e.getNumLoopOfAreaMinMax = function(e, t, n) {
					return e < t ? n : e > n ? t : e
				}, e.sum = function(e) {
					for (var t = 0, n = 0, o = e; n < o.length; n++) t += o[n];
					return t
				}, e.getRandItemOfArray = function(e) {
					return e[Math.floor(Math.random() * e.length)]
				}, e.getRandNumberOfArrayTwo = function(e) {
					return 2 != e.length || e[0] > e[1] ? (console.error("#40 data_control 错误的区间", e), NaN) : e[0] + Math.random() * (e[1] - e[0])
				}, e.getRandIPosByWeights = function(e) {
					for (var t = this.sum(e), n = Math.random() * t, o = 0; o < e.length; o++)
						if ((n -= e[o]) <= 0) return o;
					return console.error("#114 data_control 不可能的错误", e), NaN
				}, e.randomSortArray = function(e) {
					return e.sort(function() {
						return Math.random() - .5
					}), e
				}, e.getNumberFormat = function(e, t) {
					void 0 === t && (t = 2);
					for (var n = o, i = n.length - 1; i >= 0; i--) {
						var r = n[i],
							a = r.numValue,
							s = r.text;
						if (e >= 10 * a) return "" + Number((e / a).toFixed(t)) + s
					}
					return "" + Number(Number(e).toFixed(t))
				}, e.getNumberSplitCharString = function(e, t) {
					void 0 === t && (t = ",");
					var n = String(Math.floor(e));
					return n.replace(/(?=(?!\b)(?:\d{3})+(?!\d))/g, t)
				}, e.keepDecimals = function(e, t, n) {
					void 0 === t && (t = 2), void 0 === n && (n = !1);
					var o = String(e).split("."),
						i = o[0],
						r = o[1] || "";
					if (r.length > t && (r = r.substring(0, t)), n) {
						if (0 == Number(r)) return i
					} else r = r.padEnd(t, "0");
					return i + "." + r
				}, e.getChineseNum = function(e) {
					if (e = String(e), !/^([1-9]\d*)/.test(e)) return "非法数据";
					var t = "千百十亿千百十万千百十个";
					if (e.length > t.length) return "数据过长";
					var n = "",
						o = e.length;
					t = t.substr(t.length - o);
					for (var i = 0; i < o; i++) n += "零一二三四五六七八九".charAt(Number(e[i])) + t.charAt(i);
					return console.log(n), n = n.substr(0, n.length - 1), console.log(n), n.replace(/零(千|百|十)/g, "零").replace(/(零)+/g, "零").replace(/零(亿|万)/g, "$1")
				}, e.getTimeFormatClock = function(e) {
					var t = "",
						n = Math.floor(e / 3600);
					n > 0 && (t += String(n).padStart(2, "0") + ":");
					var o = Math.floor(e % 3600 / 60);
					return (t += String(o).padStart(2, "0") + ":") + String(e % 60).padStart(2, "0")
				}, e.getCurrDateDayString = function() {
					var e = new Date;
					return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate()
				}, e.MinusToHours = function(e) {
					return (Math.floor(e / 60) ? Math.floor(e / 60) + "小时" : "") + (e % 60 ? e % 60 + "分钟" : "")
				}, e.GetAngle = function(e, t) {
					void 0 === t && (t = cc.v2(0, 1));
					var n = e.normalize(),
						o = t.normalize(),
						i = n.dot(o),
						r = n.cross(o),
						a = Math.acos(i);
					return 0 == r && (r = i < 0 ? 1 : 0), a *= Math.sign(r), a *= 180 / Math.PI, isNaN(a) && (a = i < 0 ? 180 : 0), a
				}, e.getV2Angle = function(e, t) {
					return 180 * Math.atan2(e.y - t.y, e.x - t.x) / Math.PI
				}, e.GetWorldPos = function(e) {
					var t = e.parent.convertToWorldSpaceAR(e.getPosition());
					return t.addSelf(cc.v2(-.5 * cc.winSize.width, -.5 * cc.winSize.height)), t
				}, e.AllArraySum = function(e) {
					for (var t = cc.v2(), n = 0; n < e.length; n++) t.x += e[n].x, t.y += e[n].y;
					return t
				}, e.GetLineCrossLine = function(e, t, n, o, i, r, a, s) {
					return Math.min(e, n) <= Math.max(i, a) && Math.min(r, s) <= Math.max(t, o) && Math.min(i, a) <= Math.max(e, n) && Math.min(t, o) <= Math.max(r, s) && ((i - e) * (o - t) - (n - e) * (r - t)) * ((a - e) * (o - t) - (n - e) * (s - t)) <= 1e-8 && ((e - i) * (s - r) - (a - i) * (t - r)) * ((n - i) * (s - r) - (a - i) * (o - r)) <= 1e-8
				}, e.numberInTheArea = function(e, t, n) {
					return e >= t && e <= n
				}, e.GetDirEqual = function(e, t) {
					return null != t && null != e && e.x == t.x && t.y == e.y
				}, e.aStarPathFind = function(e, t, n, o, i, a, s, c) {
					if (o.length > 0) {
						for (var l = 0, u = null, d = 0; d < o.length; d++) {
							var p = o[d],
								f = Math.sqrt(Math.pow(Math.abs(p.i - t.i), 2) + Math.pow(Math.abs(p.j - t.j), 2)) + Math.sqrt(Math.pow(Math.abs(p.i - n.i), 2) + Math.pow(Math.abs(p.j - n.j), 2));
							(null == u || f < u) && (l = d, u = f)
						}
						var h = o[l];
						if (h.i == n.i && h.j == n.j) {
							c.length = 0;
							for (var m = h; m;) c.push(m), m = m.parent;
							c.reverse()
						} else {
							i[h.i + "-" + h.j] = !0, o.splice(l, 1);
							for (var y = 0, g = a; y < g.length; y++) {
								var _ = g[y],
									v = new r(h.i + _.i, h.j + _.j, h);
								v.i >= e.length || v.i < 0 || v.j >= e[0].length || v.j < 0 || s(e[h.i][h.j], e[v.i][v.j]) && (i[v.i + "-" + v.j] || v.inList(o) || o.push(v))
							}
							o.length > 0 && this.aStarPathFind(e, t, n, o, i, a, s, c)
						}
					} else console.log("没有到达目标终点");
					return c
				}, e.IDs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890", e
			}();
		n.default = i;
		var r = function() {
			function e(e, t, n) {
				this.i = e, this.j = t, this.parent = n, this.parentCount = 0, n && (this.parentCount = n.parentCount + 1)
			}
			return e.prototype.equals = function(e) {
				return e.i == this.i && e.j == this.j
			}, e.prototype.inList = function(e) {
				for (var t = 0, n = e; t < n.length; t++) {
					var o = n[t];
					if (this.equals(o)) return !0
				}
				return !1
			}, e
		}();
		n.AStarPot = r, cc._RF.pop()
	}, {}],
	dialogMiniGameJump: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "22eb72VEyRGSbqucDSQFP2U", "dialogMiniGameJump");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/configs/gameConfig"),
			s = e("../public/cellMiniGameJump"),
			c = cc._decorator,
			l = c.ccclass,
			u = c.property,
			d = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.pbThreeItem = null, t.ndListContent = null, t
				}
				return i(t, e), t.prototype.start = function() {
					this.showAllDialogMiniGameJumpList()
				}, t.prototype.showAllDialogMiniGameJumpList = function() {
					var e = this,
						t = a.default.MINI_GAME_JUMP_SIDE_LIST;
					cc.Tween.stopAllByTarget(this.ndListContent);
					for (var n = 0; n < t.length; n += 4) {
						var o = t[n],
							i = t[n + 1],
							r = t[n + 2],
							s = t[n + 3],
							c = cc.instantiate(this.pbThreeItem);
						this.ndListContent.addChild(c), this.controlCellOne(c.children[0], o), this.controlCellOne(c.children[1], i), this.controlCellOne(c.children[2], r), this.controlCellOne(c.children[3], s)
					}
					this.scheduleOnce(function() {
						if (!(e.ndListContent.height <= e.ndListContent.parent.height)) {
							var t = e.ndListContent.height - e.ndListContent.parent.height;
							cc.tween(e.ndListContent).then(cc.tween(e.ndListContent).to(0, {
								y: 205
							}).to(e.ndListContent.height / e.ndListContent.parent.height * 6, {
								y: 205 + t
							})).repeatForever().start()
						}
					})
				}, t.prototype.controlCellOne = function(e, t) {
					null != t ? e.getComponent(s.default).setData(t) : e.active = !1
				}, t.prototype.onBtnClose = function() {
					this.node.destroy()
				}, r([u(cc.Prefab)], t.prototype, "pbThreeItem", void 0), r([u(cc.Node)], t.prototype, "ndListContent", void 0), r([l], t)
			}(cc.Component);
		n.default = d, cc._RF.pop()
	}, {
		"../../engines/configs/gameConfig": "gameConfig",
		"../public/cellMiniGameJump": "cellMiniGameJump"
	}],
	disFindItem: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "560591/yMlBKqm6mEhVeARI", "disFindItem");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("./disPlayConfig"),
			s = e("../../engines/gameEngine"),
			c = cc._decorator,
			l = c.ccclass,
			u = c.property,
			d = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.lbId = null, t.lbName = null, t.spIcon = null, t.m_data = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {}, t.prototype.start = function() {
					this.initView()
				}, t.prototype.setId = function(e) {
					this.m_data = a.Desk.getDisPlayItemList(e)
				}, t.prototype.initView = function() {
					var e = this,
						t = this.m_data,
						n = t.id,
						o = t.name,
						i = t.icon;
					this.lbId.string = "[" + n + "]", this.lbName.string = o, i && s.modules().uiControlModule.getFrameBundle().load("preload/hallIcon/" + i, cc.SpriteFrame, function(t, n) {
						t ? console.error("#405511 错误的icon", i) : e.spIcon.spriteFrame = n
					})
				}, t.prototype.onBtnClick = function() {
					this.m_data.onClickEvent()
				}, r([u(cc.Label)], t.prototype, "lbId", void 0), r([u(cc.Label)], t.prototype, "lbName", void 0), r([u(cc.Sprite)], t.prototype, "spIcon", void 0), r([l], t)
			}(cc.Component);
		n.default = d, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine",
		"./disPlayConfig": "disPlayConfig"
	}],
	disItem: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "f5967bjIxlK2KjjXKeP/xe3", "disItem");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("./disPlayConfig"),
			s = e("../../engines/gameEngine"),
			c = cc._decorator,
			l = c.ccclass,
			u = c.property,
			d = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.lbName = null, t.spIcon = null, t.m_data = null, t.m_parentCallback = null, t
				}
				var n;
				return i(t, e), n = t, t.prototype.onLoad = function() {}, t.prototype.start = function() {
					this.initView()
				}, t.prototype.setId = function(e) {
					this.m_data = a.Desk.getDisPlayItemList(e)
				}, t.prototype.initView = function() {
					var e = this;
					null != this.m_data ? (this.m_data && this.m_data.icon && s.modules().uiControlModule.getFrameBundle().load("preload/hallIcon/" + this.m_data.icon, cc.SpriteFrame, function(t, n) {
						t ? console.error("#405511 错误的icon", e.m_data.icon) : e.spIcon.spriteFrame = n
					}), this.lbName.string = this.m_data.name) : console.error("#29152544 未初始化数据", n)
				}, t.prototype.addParentClick = function(e) {
					this.m_parentCallback = e
				}, t.prototype.onBtnClick = function(e, t) {
					this.m_parentCallback && this.m_parentCallback(), this.m_data.onClickEvent && this.m_data.onClickEvent(e, t)
				}, r([u(cc.Label)], t.prototype, "lbName", void 0), r([u(cc.Sprite)], t.prototype, "spIcon", void 0), n = r([l], t)
			}(cc.Component);
		n.default = d, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine",
		"./disPlayConfig": "disPlayConfig"
	}],
	disPlayConfig: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "2bb85YeDU1OlbE7/luAs9wt", "disPlayConfig"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.Desk = void 0;
		var o = e("../../engines/gameEngine"),
			i = e("../../engines/managers/gameContent/gameMode_json"),
			r = e("../../engines/services/miniGameContent/miniApp"),
			a = e("../test/filterWord"),
			s = e("../../engines/services/miniGameContent/dataField");
		(function(e) {
			var t = s.dataField.RANK_ID;
			e.searchIdsOfName = function(e) {
				var t = [];
				return n.forEach(function(n) {
					(n.name.includes(e) || n.id.includes(e)) && t.push(n.id)
				}), t
			}, e.getDisPlayItemList = function(e) {
				if (!e) return n;
				for (var t = 0, o = n; t < o.length; t++) {
					var i = o[t];
					if (i.id == e) return i
				}
				return null
			}, e.getDeskDisplayListInfo = function() {
				return [{
					id: "display001",
					name: "UI操作",
					disItemIdList: ["item001", "item002", "item003", "item004", "item005", "item013", "item020", "item021", "item022", "item028"]
				}, {
					id: "display002",
					name: "平台相关",
					disItemIdList: ["item005", "item006", "item007", "item008", "item005", "item011", "item014", "item015", "item016", "item017", "item018", "item019", "item023", "item025", "item026", "item029", "item030", "item031", "item032", "item033", "item034", "item035", "item036", "item037", "item038"]
				}, {
					id: "display003",
					name: "框架内容",
					disItemIdList: ["item039"]
				}, {
					id: "display004",
					name: "内置模式",
					disItemIdList: ["item012", "item024", "item027"]
				}]
			};
			var n = [{
				id: "item001",
				name: "确认框",
				onClickEvent: function() {
					o.modules().uiControlModule.showDialogBox("温馨提示", "告诉你一个消息", !1, null, null, "我知道了")
				}
			}, {
				id: "item002",
				name: "确定取消框",
				onClickEvent: function() {
					o.default.getModules().uiControlModule.showDialogBox("温馨提示", "你需要选择一个选项", !0, function(e) {
						o.default.getModules().uiControlModule.showMessageBox(e ? "确认了" : "取消了")
					}, null, "A、确认", "B、取消")
				}
			}, {
				id: "item003",
				name: "看一次视频",
				onClickEvent: function() {
					o.default.getModules().uiControlModule.showDialogBox("温馨提示", "你需要观看一个视频来得到一个东西", !0, function(e) {
						o.default.getModules().uiControlModule.showMessageBox(e ? "看完" : "没看完")
					}, null, "看吧", "忍痛不看", 1)
				}
			}, {
				id: "item004",
				name: "看多次视频",
				onClickEvent: function() {
					o.default.getModules().uiControlModule.showDialogBox("温馨提示", "你需要观看多个视频来得到一个东西", !0, function(e) {
						o.default.getModules().uiControlModule.showMessageBox(e ? "看完" : "没看完")
					}, null, "看吧", "忍痛不看", 2 + Math.floor(3 * Math.random()))
				}
			}, {
				id: "item005",
				name: "3秒加载完",
				onClickEvent: function() {
					o.default.getModules().uiControlModule.showLoading(), o.default.Component().scheduleOnce(function() {
						o.default.getModules().uiControlModule.hideLoading()
					}, 3)
				}
			}, {
				id: "item006",
				name: "开始直播",
				onClickEvent: function() {
					o.default.getServices().miniGameSrv.getAppApiInstance().operateGameLive()
				}
			}, {
				id: "item007",
				name: "banner广告",
				onClickEvent: function() {
					o.default.getModules().uiControlModule.showDialogBox_Banner_MC("疯狂砸金蛋", function() {
						o.default.getModules().uiControlModule.showMessageBox("点完")
					}, null)
				}
			}, {
				id: "item008",
				name: "native广告",
				onClickEvent: function() {
					o.default.getModules().uiControlModule.showDialogBox_Banner_MC("疯狂砸金蛋", function() {
						o.default.getModules().uiControlModule.showMessageBox("点完")
					}, null)
				}
			}, {
				id: "item011",
				name: "添加桌面",
				onClickEvent: function() {
					o.default.getServices().miniGameSrv.getAppApiInstance().addShortcut().then()
				}
			}, {
				id: "item012",
				name: "迷宫",
				onClickEvent: function() {
					o.default.getManagers().gameMgr.selectMode(i.GAME_MODE.DFS)
				}
			}, {
				id: "item013",
				name: "画板预制",
				onClickEvent: function() {
					o.modules().uiControlModule.showFramePrefab("preload/control/o1DrawBoard", null)
				}
			}, {
				id: "item014",
				name: "视频列表",
				onClickEvent: function() {
					o.modules().uiControlModule.showFramePrefab("preload/control/shareVideoRank", null)
				}
			}, {
				id: "item015",
				name: "订阅消息",
				onClickEvent: function() {
					o.default.getServices().miniGameSrv.getAppApiInstance().subscribeMessage()
				}
			}, {
				id: "item016",
				name: "添加到收藏",
				onClickEvent: function() {
					o.default.getServices().miniGameSrv.getAppApiInstance().showAddFavoriteGuide()
				}
			}, {
				id: "item017",
				name: "互跳1",
				onClickEvent: function() {
					window.tt && window.tt.setMoreGamesInfo({
						appLaunchOptions: [{
							appId: "tt3a5c4ce1a56771f4",
							query: "foo=bar&baz=qux",
							extraData: {}
						}, {
							appId: "tt1fed695080d61c40",
							query: "foo=bar&baz=qux",
							extraData: {}
						}]
					})
				}
			}, {
				id: "item018",
				name: "互跳2",
				onClickEvent: function() {
					if (null != window.tt) {
						var e = window.tt.createMoreGamesBanner({
							style: {
								left: 20,
								top: 40,
								width: 150,
								height: 40
							},
							appLaunchOptions: [{
								appId: "tt3a5c4ce1a56771f4",
								query: "foo=bar&baz=qux",
								extraData: {}
							}, {
								appId: "tt1fed695080d61c40",
								query: "foo=bar&baz=qux",
								extraData: {}
							}]
						});
						e.show(), e.onTap(function() {
							console.log("点击跳转游戏盒子")
						})
					}
				}
			}, {
				id: "item019",
				name: "互跳3",
				onClickEvent: function() {
					null != window.tt && window.tt.createMoreGamesButton({
						type: "image",
						image: "images/more_games_btn.png",
						actionType: "box",
						style: {
							left: 20,
							top: 40,
							width: 150,
							height: 40,
							lineHeight: 40,
							backgroundColor: "#ff0000",
							textColor: "#ffffff",
							textAlign: "center",
							fontSize: 16,
							borderRadius: 4,
							borderWidth: 1,
							borderColor: "#ff0000"
						},
						appLaunchOptions: [{
							appId: "tt3a5c4ce1a56771f4",
							query: "foo=bar&baz=qux",
							extraData: {}
						}, {
							appId: "tt1fed695080d61c40",
							query: "foo=bar&baz=qux",
							extraData: {}
						}],
						onNavigateToMiniGame: function(e) {
							console.log("跳转其他小游戏", e)
						}
					}).onTap(function() {
						console.log("点击更多游戏")
					})
				}
			}, {
				id: "item020",
				name: "新手手势",
				onClickEvent: function() {
					o.default.getModules().uiControlModule.showFramePrefab("public/prefab/GuideFinger")
				}
			}, {
				id: "item021",
				name: "星星粒子",
				onClickEvent: function() {
					o.default.getModules().uiControlModule.showFramePrefab("public/prefab/ef_Star")
				}
			}, {
				id: "item022",
				name: "彩带粒子",
				onClickEvent: function() {
					o.default.getModules().uiControlModule.showFramePrefab("public/prefab/ef_Confetti")
				}
			}, {
				id: "item023",
				name: "录音变声",
				onClickEvent: function() {
					o.default.getModules().uiControlModule.showFramePrefab("preload/control/recordVoiceChange")
				}
			}, {
				id: "item024",
				name: "炫彩粒子",
				onClickEvent: function() {
					o.default.getManagers().gameMgr.selectMode(i.GAME_MODE.NORMAL)
				}
			}, {
				id: "item025",
				name: "短振动",
				onClickEvent: function() {
					o.default.getServices().miniGameSrv.getAppApiInstance().vibrate(r.VIBRATE_TYPE.SHORT)
				}
			}, {
				id: "item026",
				name: "长振动",
				onClickEvent: function() {
					o.default.getServices().miniGameSrv.getAppApiInstance().vibrate(r.VIBRATE_TYPE.LONG)
				}
			}, {
				id: "item027",
				name: "内网聊天",
				onClickEvent: function() {
					o.default.getManagers().gameMgr.selectMode(i.GAME_MODE.TALK_ROOM)
				}
			}, {
				id: "item028",
				name: "版本公告",
				icon: "1",
				onClickEvent: function() {
					o.default.getManagers().gameMgr.showVersionNotice()
				}
			}, {
				id: "item029",
				name: "敏感词汇",
				onClickEvent: function() {
					var e = Date.now();
					console.log(a.textFilter("我说逢九必乱，电击枪")), console.log(Date.now() - e)
				}
			}, {
				id: "item030",
				name: "开始录屏",
				onClickEvent: function() {
					o.default.getServices().miniGameSrv.getAppApiInstance().gameRecordStart({
						duration: 60
					})
				}
			}, {
				id: "item031",
				name: "停止录屏",
				onClickEvent: function() {
					o.default.getServices().miniGameSrv.getAppApiInstance().gameRecordStop() || o.default.getModules().uiControlModule.showMessageBox("停止失败 录屏时间过短")
				}
			}, {
				id: "item032",
				name: "分享录屏",
				onClickEvent: function() {
					o.default.getServices().miniGameSrv.getAppApiInstance().shareGameRecordVideo()
				}
			}, {
				id: "item033",
				name: "提交排行榜",
				onClickEvent: function() {
					console.log("发送数据域"), o.services().miniGameSrv.getAppApiInstance().commitRank(t.TRIPLE_JUMP, 100).then(function(e) {
						e || o.modules().uiControlModule.showMessageBox("提交分数到排行榜失败")
					})
				}
			}, {
				id: "item034",
				name: "展示排行榜",
				onClickEvent: function() {
					console.log("展示数据域"), o.default.emit("hall.onRankShow"), o.services().miniGameSrv.getAppApiInstance().showRank(t.TRIPLE_JUMP).then(function(e) {
						e || o.modules().uiControlModule.showMessageBox("获取排行榜数据失败")
					})
				}
			}, {
				id: "item035",
				name: "发送埋点",
				onClickEvent: function() {
					console.log("发送埋点"), o.default.getServices().miniGameSrv.getAppApiInstance().reportAnalytics("0", 1)
				}
			}, {
				id: "item036",
				name: "格子跳转",
				onClickEvent: function() {
					o.modules().uiControlModule.showFramePrefab("preload/cellLayerMiniGameJump", null, !1, function() {})
				}
			}, {
				id: "item037",
				name: "轮播弹窗跳转",
				onClickEvent: function() {
					o.modules().uiControlModule.showFramePrefab("preload/scrollMiniGameJump")
				}
			}, {
				id: "item038",
				name: "侧拉栏跳转",
				icon: "2",
				onClickEvent: function() {
					o.modules().uiControlModule.showFramePrefab("preload/dialogMiniGameJump")
				}
			}, {
				id: "item039",
				icon: "Option",
				name: "游戏设置",
				onClickEvent: function() {
					o.modules().uiControlModule.showFramePrefab("preload/control/gameSetting")
				}
			}]
		})(n.Desk || (n.Desk = {})), cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine",
		"../../engines/managers/gameContent/gameMode_json": "gameMode_json",
		"../../engines/services/miniGameContent/dataField": "dataField",
		"../../engines/services/miniGameContent/miniApp": "miniApp",
		"../test/filterWord": "filterWord"
	}],
	disPlayItem: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "eebafRPVjJFGL49OSzGmbjT", "disPlayItem");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("./disItem"),
			s = cc._decorator,
			c = s.ccclass,
			l = s.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.lbName = null, t.lbNameBottom = null, t.ndContentList = null, t.pbDisItem = null, t.minMask = null, t.minMask2 = null, t.svList = null, t.showTime = .4, t.m_data = null, t.m_minPos = null, t.m_maxPos = null, t.m_minSize = null, t.m_isMin = null, t.isAction = null, t.m_click = !1, t.m_isScroll = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {}, t.prototype.start = function() {
					this.initView(), this.svList.node.on("touchstart", this.onTouStart, this), this.svList.node.on("touchmove", this.onTouMove, this), this.svList.node.on("touchend", this.onTouEnd, this), this.svList.node.on("touchcancel", this.onTouEnd, this)
				}, t.prototype.initView = function() {
					var e = this;
					if (null != this.m_data) {
						for (var t = 0, n = this.m_data.disItemIdList; t < n.length; t++) {
							var o = n[t];
							this.lbNameBottom.string = this.lbName.string = this.m_data.name;
							var i = cc.instantiate(this.pbDisItem);
							this.ndContentList.addChild(i);
							var r = i.getComponent(a.default);
							r.setId(o), r.addParentClick(function() {
								e.m_isScroll = !0
							})
						}
						this.onMin(!0)
					} else console.error("#27 请先初始化数据")
				}, t.prototype.onTouStart = function() {
					this.m_click = !0
				}, t.prototype.onTouMove = function() {
					this.m_click = !1
				}, t.prototype.onTouEnd = function() {
					this.m_click && this.onBtnThis()
				}, t.prototype.onBtnThis = function() {
					this.m_isMin ? this.onMax() : this.onMin()
				}, t.prototype.onScrollView = function() {
					var e = this;
					if (this.m_isMin) {
						var t = function() {
							var t = e.svList.isScrolling();
							e.m_isScroll || t ? e.m_isScroll = t : e.onBtnThis()
						};
						this.svList.isScrolling() ? t() : this.scheduleOnce(t)
					}
				}, t.prototype.onMin = function(e) {
					var t = this;
					if (!this.isAction) {
						this.node.zIndex = 0, this.isAction = !0, this.minMask2.active = this.minMask.enabled = !0, this.m_isMin = !0, this.lbName.node.active = !1, this.lbNameBottom.node.active = !1, this.svList.vertical = !1;
						var n = this.ndContentList.getComponent(cc.Layout);
						if (e) return this.scheduleOnce(function() {
							t.svList.node.scaleY = 16 / 9
						}), this.lbNameBottom.node.active = !0, this.node.scaleX = this.m_minSize.width, this.node.scaleY = this.m_minSize.height, this.node.setPosition(this.m_minPos), this.isAction = !1, void(n.paddingTop = 240.8);
						cc.Tween.stopAllByTarget(this.svList.node), cc.Tween.stopAllByTarget(this.node), cc.tween(this.node).parallel(cc.tween(this.node).to(.5 * this.showTime, {
							y: this.m_minPos.y + 300
						}, {
							easing: "quadOut"
						}).to(.5 * this.showTime, {
							y: this.m_minPos.y
						}, {
							easing: "quadIn"
						}), cc.tween(this.node).to(this.showTime, {
							x: this.m_minPos.x
						}), cc.tween().to(this.showTime, {
							scaleX: this.m_minSize.width,
							scaleY: this.m_minSize.height
						})).call(function() {
							t.lbNameBottom.node.active = !0, t.ndContentList.y = 517, t.isAction = !1
						}).start(), cc.tween(this.svList.node).to(this.showTime, {
							scaleY: 16 / 9
						}).start(), cc.tween(n).to(this.showTime, {
							paddingTop: 240.8
						}).start()
					}
				}, t.prototype.onMax = function() {
					var e = this;
					if (!this.isAction) {
						this.isAction = !0, this.m_isMin = !1, this.lbName.node.active = !1, this.lbNameBottom.node.active = !1, this.svList.vertical = !0, this.node.zIndex = 1;
						var t = this.ndContentList.getComponent(cc.Layout);
						cc.Tween.stopAllByTarget(this.node), cc.Tween.stopAllByTarget(this.svList.node), cc.tween(this.node).parallel(cc.tween(this.node).to(.5 * this.showTime, {
							y: this.m_maxPos.y + 375
						}, {
							easing: "quadOut"
						}).to(.5 * this.showTime, {
							y: this.m_maxPos.y
						}, {
							easing: "quadIn"
						}), cc.tween(this.node).to(this.showTime, {
							x: this.m_maxPos.x
						}), cc.tween().to(this.showTime, {
							scale: 1
						})).call(function() {
							e.lbName.node.active = !0, e.minMask2.active = e.minMask.enabled = !1, e.isAction = !1
						}).start(), cc.tween(this.svList.node).to(this.showTime, {
							scaleY: 1
						}).start(), cc.tween(t).to(this.showTime, {
							paddingTop: 86.8
						}).start()
					}
				}, t.prototype.setMaxMinParam = function(e, t, n) {
					this.m_minPos = e.clone(), this.m_maxPos = t.clone(), this.m_minSize = n.clone()
				}, t.prototype.bindData = function(e) {
					this.m_data = e
				}, r([l(cc.Label)], t.prototype, "lbName", void 0), r([l(cc.Label)], t.prototype, "lbNameBottom", void 0), r([l(cc.Node)], t.prototype, "ndContentList", void 0), r([l(cc.Prefab)], t.prototype, "pbDisItem", void 0), r([l(cc.Mask)], t.prototype, "minMask", void 0), r([l(cc.Node)], t.prototype, "minMask2", void 0), r([l(cc.ScrollView)], t.prototype, "svList", void 0), r([l()], t.prototype, "showTime", void 0), r([c], t)
			}(cc.Component);
		n.default = u, cc._RF.pop()
	}, {
		"./disItem": "disItem"
	}],
	disPlayLayer: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "08c3bhOykROg4lQbZ/9wtIJ", "disPlayLayer");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("./disPlayConfig"),
			s = e("./disPlayItem"),
			c = e("./disFindItem"),
			l = cc._decorator,
			u = l.ccclass,
			d = l.property,
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.ndContextList = null, t.pbDisplayList = null, t.pbFindDisItem = null, t.ndPos = null, t.szContent = null, t.editFind = null, t.ndFindResult = null, t.ndFindListContent = null, t.lbSearchTitle = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					this.initDesk()
				}, t.prototype.start = function() {
					this.ndFindResult.active = !1
				}, t.prototype.initDesk = function() {
					for (var e = a.Desk.getDeskDisplayListInfo(), t = 0; t < e.length; t++) {
						var n = e[t],
							o = cc.instantiate(this.pbDisplayList);
						this.ndContextList.addChild(o);
						var i = o.getComponent(s.default);
						i.bindData(n);
						var r = this.ndPos.getPosition(),
							c = r.x,
							l = r.y,
							u = t % 3,
							d = Math.floor(t / 3);
						i.setMaxMinParam(cc.v2(c + 140 + u * (this.szContent.width + 50), l - 100 - d * (this.szContent.height + 80)), cc.v2(0, 0), cc.size(this.szContent.width / 750, this.szContent.height / 1334))
					}
				}, t.prototype.onEditInputOver = function() {
					if (this.editFind.string) {
						this.ndFindResult.active = !0;
						var e = a.Desk.searchIdsOfName(this.editFind.string);
						this.lbSearchTitle.string = '"' + this.editFind.string + '" ' + e.length + "个查找结果";
						for (var t = 0, n = e; t < n.length; t++) {
							var o = n[t],
								i = cc.instantiate(this.pbFindDisItem);
							this.ndFindListContent.addChild(i), i.getComponent(c.default).setId(o)
						}
					}
				}, t.prototype.onTouchCloseFindResult = function() {
					this.ndFindListContent.destroyAllChildren(), this.ndFindResult.active = !1
				}, r([d(cc.Node)], t.prototype, "ndContextList", void 0), r([d(cc.Prefab)], t.prototype, "pbDisplayList", void 0), r([d(cc.Prefab)], t.prototype, "pbFindDisItem", void 0), r([d(cc.Node)], t.prototype, "ndPos", void 0), r([d(cc.Size)], t.prototype, "szContent", void 0), r([d(cc.EditBox)], t.prototype, "editFind", void 0), r([d(cc.Node)], t.prototype, "ndFindResult", void 0), r([d(cc.Node)], t.prototype, "ndFindListContent", void 0), r([d(cc.Label)], t.prototype, "lbSearchTitle", void 0), r([u], t)
			}(cc.Component);
		n.default = p, cc._RF.pop()
	}, {
		"./disFindItem": "disFindItem",
		"./disPlayConfig": "disPlayConfig",
		"./disPlayItem": "disPlayItem"
	}],
	drawDetail: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "d4fe4r1Zi5N5rJoMT9UZcHc", "drawDetail");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../../engines/gameEngine"),
			s = cc._decorator,
			c = s.ccclass,
			l = s.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.gdi = null, t.lbTitleName = null, t.m_drawInfo = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {}, t.prototype.start = function() {}, t.prototype.setInfo = function(e) {
					this.m_drawInfo = e, this.lbTitleName.string = this.m_drawInfo.name, this.OnShowGdi()
				}, t.prototype.OnShowGdi = function() {
					for (var e = 0, t = this.m_drawInfo.drawList; e < t.length; e++) {
						var n = t[e],
							o = n.isStart,
							i = n.color,
							r = n.lineWidth,
							a = n.x,
							s = n.y,
							c = i.r,
							l = i.g,
							u = i.b;
						this.gdi.lineWidth = r, this.gdi.strokeColor = cc.color(c, l, u), o ? (this.gdi.moveTo(a - 1, s - 1), this.gdi.lineTo(a, s), this.gdi.stroke()) : (this.gdi.lineTo(a, s), this.gdi.stroke(), this.gdi.moveTo(a, s))
					}
				}, t.prototype.OnBtnDelete = function() {
					a.default.emit("drawRecord.OnDeleteDraw", this.m_drawInfo.name)
				}, t.prototype.OnBtnEdit = function() {
					a.default.emit("drawRecord.OnEditDraw", this.m_drawInfo.name)
				}, r([l(cc.Graphics)], t.prototype, "gdi", void 0), r([l(cc.Label)], t.prototype, "lbTitleName", void 0), r([c], t)
			}(cc.Component);
		n.default = u, cc._RF.pop()
	}, {
		"../../../engines/gameEngine": "gameEngine"
	}],
	drawRecord: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "01570fie7FEJLC04rT+Tj2v", "drawRecord");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../../engines/gameEngine"),
			s = e("./drawDetail"),
			c = cc._decorator,
			l = c.ccclass,
			u = c.property,
			d = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.drawDetail = null, t.svContentList = null, t.m_drawClass = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					a.default.off("drawRecord.OnEditDraw"), a.default.off("drawRecord.OnDeleteDraw"), a.default.on("drawRecord.OnEditDraw", this.OnEditDraw.bind(this)), a.default.on("drawRecord.OnDeleteDraw", this.OnDeleteDraw.bind(this))
				}, t.prototype.start = function() {}, t.prototype.bindDrawInterface = function(e) {
					this.m_drawClass = e, this.OnLoadDrawList()
				}, t.prototype.OnEditDraw = function(e) {
					a.default.emit("o1DrawBoard.OnEditDraw", e), this.OnBtnExit()
				}, t.prototype.OnDeleteDraw = function(e) {
					var t = this;
					a.default.getModules().uiControlModule.showDialogBox("删除文件", "删除后不可恢复,是否删除<" + e + ">?", !0, function(n) {
						n && (a.default.emit("o1DrawBoard.OnDeleteDraw", e), t.svContentList.destroyAllChildren(), t.scheduleOnce(t.OnLoadDrawList.bind(t)))
					}, this.node, "删除", "取消")
				}, t.prototype.OnLoadDrawList = function() {
					a.default.getModules().uiControlModule.showLoading(this.node, "正在加载画册");
					var e = this.m_drawClass.getAllData();
					for (var t in e) {
						var n = e[t],
							o = cc.instantiate(this.drawDetail);
						this.svContentList.addChild(o), o.getComponent(s.default).setInfo(n)
					}
					a.default.getModules().uiControlModule.hideLoading()
				}, t.prototype.OnBtnExit = function() {
					this.svContentList.destroyAllChildren(), this.node.destroy()
				}, r([u(cc.Prefab)], t.prototype, "drawDetail", void 0), r([u(cc.Node)], t.prototype, "svContentList", void 0), r([l], t)
			}(cc.Component);
		n.default = d, cc._RF.pop()
	}, {
		"../../../engines/gameEngine": "gameEngine",
		"./drawDetail": "drawDetail"
	}],
	engineConfig: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "ea828nD7IhHr4TMvb12NFRK", "engineConfig"), Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.GameEvent = void 0,
			function(e) {
				e.CHANGE_SCENE_BEFORE = "GameEvent.CHANGE_SCENE_BEFORE", e.CHANGE_SCENE_AFTER = "GameEvent.CHANGE_SCENE_AFTER"
			}(n.GameEvent || (n.GameEvent = {})), cc._RF.pop()
	}, {}],
	filterWord: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "8c620dgSJdGuKZOid9hJS3x", "filterWord"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.textFilter = n.getAryText = void 0;
		var o = "福音会#中国教徒#统一教#观音法门#清海无上师#盘古#李洪志#志洪李#李宏志#轮功#法轮#轮法功#三去车仑#氵去车仑#发论工#法x功#法o功#法0功#法一轮一功#轮子功#车仑工力#法lun#fa轮#法lg#flg#fl功#falungong#大法弟子#大纪元#dajiyuan#明慧网#明慧周报#正见网#新唐人#伪火#退党#tuidang#退dang#超越红墙#自fen#真善忍#九评#9评#9ping#九ping#jiuping#藏字石#集体自杀#自sha#zi杀#suicide#titor#逢8必灾#逢八必灾#逢9必乱#逢九必乱#朱瑟里诺#根达亚文明#诺查丹玛斯#人类灭亡进程表#按照马雅历法#推背图#推bei图#济世灵文#诸世纪#电狗#电话定位器#电话拦截器#电话窃听#电话监#电话交友#电话追杀系统#电击枪#电鸡#电警棒#枪出售#枪的制#枪货到#枪决女犯#枪模#枪手#枪销售#枪械制#枪子弹#售步枪#售纯度#售单管#售弹簧刀#售防身#售狗子#售虎头#售火药#售假币#售健卫#售军用#售猎枪#售氯胺#售麻醉#售枪支#售热武#售三棱#售手枪#售五四#售一元硬#售子弹#售左轮#亚砷（酸）酐#亚砷酸钾#亚砷酸钠#亚硒酸#亚硒酸二钠#亚硒酸镁#亚硒酸钠#亚硒酸氢钠#亚硝酸乙酯#亚硝酰乙氧#氧化二丁基锡#氧化汞#氧化铊#氧化亚铊#氧氯化磷#原装弹#原子弹方法#原子弹清单#安眠酮#代血浆#普萘洛尔#呋塞米#西布曲明#testosterone#胰岛素样生长因子#促红细胞生成素#地西泮#尼可刹米#甲睾酮#adrenaline#erythropoietin#地奈德#莫达非尼#氯噻嗪#苯巴比妥#促性腺激素#泼尼松#麻黄草#雄烯二醇#地塞米松#tamoxifen#strychnine#androst#新型毒品#杜冷丁#兴奋剂#mdma#海洛因#海luo因#heroin#diamorphine#diacetylmorphine#鸦片#阿芙蓉#咖啡因#cocain#三唑仑#美沙酮#麻古#k粉#凯他敏#ketamine#冰毒#苯丙胺#cannabis#大麻#爱他死#氯胺酮#benzodiazepines#甲基安非他明#安非他命#吗啡#腐败中国#三个呆婊#你办事我放心#社会主义灭亡#打倒中国#打倒共产党#打倒共产主义#打倒胡锦涛#打倒江泽民#打倒江主席#打倒李鹏#打倒罗干#打倒温家宝#打倒中共#打倒朱镕#抵制共产党#抵制共产主义#抵制胡锦涛#抵制江泽民#抵制江主席#抵制李鹏#抵制罗干#抵制温家宝#抵制中共#抵制朱镕基#灭亡中国#亡党亡国#粉碎四人帮#激流中国#特供#特贡#特共#zf大楼#殃视#贪污腐败#强制拆除#形式主义#政治风波#太子党#上海帮#北京帮#清华帮#红色贵族#权贵集团#河蟹社会#喝血社会#九风#9风#十七大#十7大#17da#九学#9学#四风#4风#双规#南街村#最淫官员#警匪#官匪#独夫民贼#官商勾结#城管暴力执法#强制捐款#毒豺#一党执政#一党专制#一党专政#专制政权#宪法法院#胡平#苏晓康#贺卫方#谭作人#焦国标#万润南#张志新#辛灝年#高勤荣#王炳章#高智晟#司马璐#刘晓竹#刘宾雁#魏京生#寻找林昭的灵魂#别梦成灰#谁是新中国#讨伐中宣部#异议人士#民运人士#启蒙派#选国家主席#民一主#min主#民竹#民珠#民猪#chinesedemocracy#大赦国际#国际特赦#da选#投公#公头#宪政#平反#党章#维权#昝爱宗#宪章#08宪#08xz#抿主#敏主#人拳#人木又#人quan#renquan#中国人权#中国新民党#群体事件#群体性事件#上中央#去中央#讨说法#请愿#请命#公开信#联名上书#万人大签名#万人骚动#截访#上访#shangfang#信访#访民#集合#集会#组织集体#静坐#静zuo#jing坐#示威#示wei#游行#you行#油行#游xing#youxing#官逼民反#反party#反共#抗议#亢议#抵制#低制#底制#di制#抵zhi#dizhi#boycott#血书#焚烧中国国旗#baoluan#流血冲突#出现暴动#发生暴动#引起暴动#baodong#灭共#杀毙#罢工#霸工#罢考#罢餐#霸餐#罢参#罢饭#罢吃#罢食#罢课#罢ke#霸课#ba课#罢教#罢学#罢运#网特#网评员#网络评论员#五毛党#五毛们#5毛党#戒严#jieyan#jie严#戒yan#8的平方事件#知道64#八九年#贰拾年#2o年#20和谐年#贰拾周年#六四#六河蟹四#六百度四#六和谐四#陆四#陆肆#198964#5月35#89年春夏之交#64惨案#64时期#64运动#4事件#四事件#北京风波#学潮#学chao#xuechao#学百度潮#门安天#天按门#坦克压大学生#民主女神#历史的伤口#高自联#北高联#血洗京城#四二六社论#王丹#柴玲#沈彤#封从德#王超华#王维林#吾尔开希#吾尔开西#侯德健#阎明复#方励之#蒋捷连#丁子霖#辛灏年#蒋彦永#严家其#陈一咨#中华局域网#党的喉舌#互联网审查#当局严密封锁#新闻封锁#封锁消息#爱国者同盟#关闭所有论坛#网络封锁#金盾工程#gfw#无界浏览#无界网络#自由门#何清涟#中国的陷阱#汪兆钧#记者无疆界#境外媒体#维基百科#纽约时报#bbc中文网#华盛顿邮报#世界日报#东森新闻网#东森电视#星岛日报#wikipedia#youtube#googleblogger#美国广播公司#英国金融时报#自由亚洲#自由时报#中国时报#反分裂#威胁论#左翼联盟#钓鱼岛#保钓组织#主权#弓单#火乍#木仓#石肖#核蛋#步qiang#bao炸#爆zha#baozha#zha药#zha弹#炸dan#炸yao#zhadan#zhayao#hmtd#三硝基甲苯#六氟化铀#炸药配方#弹药配方#炸弹配方#皮箱炸弹#火药配方#人体炸弹#人肉炸弹#解放军#兵力部署#军转#军事社#8341部队#第21集团军#七大军区#7大军区#北京军区#沈阳军区#济南军区#成都军区#广州军区#南京军区#兰州军区#颜色革命#规模冲突#塔利班#基地组织#恐怖分子#恐怖份子#三股势力#印尼屠华#印尼事件#蒋公纪念歌#马英九#mayingjiu#李天羽#苏贞昌#林文漪#陈水扁#陈s扁#陈随便#阿扁#a扁#告全国同胞书#台百度湾#台完#台wan#taiwan#台弯#湾台#台湾国#台湾共和国#台军#台独#台毒#台du#taidu#twdl#一中一台#打台湾#两岸战争#攻占台湾#支持台湾#进攻台湾#占领台湾#统一台湾#收复台湾#登陆台湾#解放台湾#解放tw#解决台湾#光复民国#台湾独立#台湾问题#台海问题#台海危机#台海统一#台海大战#台海战争#台海局势#入联#入耳关#中华联邦#国民党#x民党#民进党#青天白日#闹独立#duli#fenlie#日本万岁#小泽一郎#劣等民族#汉人#汉维#维汉#维吾#吾尔#热比娅#伊力哈木#疆独#东突厥斯坦解放组织#东突解放组织#蒙古分裂分子#列确#阿旺晋美#藏人#臧人#zang人#藏民#藏m#达赖#赖达#dalai#哒赖#dl喇嘛#丹增嘉措#打砸抢#西独#藏独#葬独#臧独#藏毒#藏du#zangdu#支持zd#藏暴乱#藏青会#雪山狮子旗#拉萨#啦萨#啦沙#啦撒#拉sa#lasa#la萨#西藏#藏西#藏春阁#藏獨#藏独#藏独立#藏妇会#藏青会#藏字石#xizang#xi藏#x藏#西z#tibet#希葬#希藏#硒藏#稀藏#西脏#西奘#西葬#西臧#援藏#bjork#王千源#安拉#回教#回族#回回#回民#穆斯林#穆罕穆德#穆罕默德#默罕默德#伊斯兰#圣战组织#清真#清zhen#qingzhen#真主#阿拉伯#高丽棒子#韩国狗#满洲第三帝国#满狗#鞑子#江丑闻#江嫡系#江毒#江独裁#江蛤蟆#江核心#江黑心#江胡内斗#江祸心#江家帮#江绵恒#江派和胡派#江派人马#江泉集团#江人马#江三条腿#江氏集团#江氏家族#江氏政治局#江氏政治委员#江梳头#江太上#江戏子#江系人#江系人马#江宰民#江贼#江贼民#江主席#麻果丸#麻将透#麻醉弹#麻醉狗#麻醉枪#麻醉槍#麻醉药#麻醉藥#台独#台湾版假币#台湾独立#台湾国#台湾应该独立#台湾有权独立#天灭中共#中共帮凶#中共保命#中共裁#中共党文化#中共腐败#中共的血旗#中共的罪恶#中共帝国#中共独裁#中共封锁#中共封网#中共腐败#中共黑#中共黑帮#中共解体#中共近期权力斗争#中共恐惧#中共权力斗争#中共任用#中共退党#中共洗脑#中共邪教#中共邪毒素#中共政治游戏#打人#打人#拆迁#拆迁#纠纷#纠纷#盗窃#盗窃#安眠酮#代药物毒品类：血浆#普萘洛尔#呋塞米#西布曲明#testosterone#胰岛素样生长因子#促红细胞生成素#地西泮#尼可刹米#甲睾酮#adrenaline#erythropoietin#地奈德#莫达非尼#氯噻嗪#苯巴比妥#促性腺激素#泼尼松#麻黄草#雄烯二醇#地塞米松#tamoxifen#strychnine#androst#新型毒品#杜冷丁#兴奋剂#mdma#海洛因#海luo因#heroin#diamorphine#diacetylmorphine#鸦片#阿芙蓉#咖啡因#cocain#三唑仑#美沙酮#麻古#k粉#凯他敏#ketamine#冰毒#苯丙胺#cannabis#大麻#爱他死#氯胺酮#benzodiazepines#甲基安非他明#安非他命#吗啡#morphine#摇头丸#迷药#乖乖粉#narcotic#麻醉药#精神药品#专业代理#帮忙点一下#帮忙点下#请点击进入#详情请进入#私人侦探#私家侦探#针孔摄象#调查婚外情#信用卡提现#无抵押贷款#广告代理#原音铃声#借腹生子#找个妈妈#找个爸爸#代孕妈妈#代生孩子#代开发票#腾讯客服电话#销售热线#免费订购热线#低价出售#款到发货#回复可见#连锁加盟#加盟连锁#免费二级域名#免费使用#免费索取#蚁力神#婴儿汤#售肾#刻章办#买小车#套牌车#玛雅网#电脑传讯#视频来源#下载速度#高清在线#全集在线#在线播放#txt下载#六位qq#6位qq#位的qq#个qb#送qb#用刀横向切腹#完全自杀手册#四海帮#足球投注#地下钱庄#中国复兴党#阿波罗网#曾道人#六合彩#改卷内幕#替考试#隐形耳机#出售答案#考中答案#答an#da案#资金周转#救市#股市圈钱#崩盘#资金短缺#证监会#质押贷款#小额贷款#周小川#刘明康#尚福林#孔丹#汉芯造假#杨树宽#中印边界谈判结果#喂奶门#摸nai门#酒瓶门#脱裤门#75事件#乌鲁木齐#新疆骚乱#针刺#打针#食堂涨价#饭菜涨价#h1n1#瘟疫爆发#yangjia#y佳#yang佳#杨佳#杨j#袭警#杀警#武侯祠#川b26931#贺立旗#周正毅#px项目#骂四川#家l福#家le福#加了服#麦当劳被砸#豆腐渣#这不是天灾#龙小霞#震其国土#yuce#提前预测#地震预测#隐瞒地震#李四光预测#蟾蜍迁徙#地震来得更猛烈#八级地震毫无预报#踩踏事故#聂树斌#万里大造林#陈相贵#张丹红#尹方明#李树菲#王奉友#零八奥运艰#惨奥#奥晕#凹晕#懊运#懊孕#奥孕#奥你妈的运#反奥#628事件#weng安#wengan#翁安#瓮安事件#化工厂爆炸#讨回工资#代办发票#代办各#代办文#代办学#代办制#代辦#代表烦#代开发票#代開#代考#代理发票#代理票据#代您考#代讨债#代写毕#代写论文#代孕#代追债#考后付款#考机构#考考邓#考联盟#考前答案#考前付#考前密卷#考前预测#考试,答案#考试,作弊器#考试包过#考试保#考试答案#考试机构#考试联盟#考试枪#考试作弊#考试作弊器#考研考中#考中答案#透视功能#透视镜#透视扑#透视器#透视眼睛#透视眼镜#透视药#透视仪#打死经过#打死人#打砸办公#打砸抢#安眠酮#代血浆#普萘洛尔#呋塞米#西布曲明#testosterone#胰岛素样生长因子#促红细胞生成素#地西泮#尼可刹米#甲睾酮#adrenaline#erythropoietin#地奈德#莫达非尼#氯噻嗪#苯巴比妥#促性腺激素#泼尼松#麻黄草#雄烯二醇#地塞米松#tamoxifen#strychnine#androst#新型毒品#杜冷丁#兴奋剂#mdma#海洛因#海luo因#heroin#diamorphine#diacetylmorphine#鸦片#阿芙蓉#咖啡因#cocain#三唑仑#美沙酮#麻古#k粉#凯他敏#ketamine#冰毒#苯丙胺#cannabis#大麻#爱他死#氯胺酮#benzodiazepines#甲基安非他明#安非他命#吗啡#KC短信#KC嘉年华#短信广告#短信群发#短信群发器#小6灵通#短信商务广告#段录定#无界浏览#无界浏览器#无界#无网界#无网界浏览#无帮国#KC提示#KC网站#UP8新势力#白皮书#UP新势力#移民#易达网络卡#安魂网#罢工#罢课#纽崔莱七折#手机复制#手机铃声#网关#神通加持法#全1球通#如6意通#清仓#灵动卡#答案卫星接收机#高薪养廉#考后付款#佳静安定片#航空母舰#航空售票#号码百事通#考前发放#成本价#诚信通手机商城#高利贷#联4通#黑庄#黑手党#黑车#联通贵宾卡#联总#联总这声传单#联总之声传单#高息贷款#高干子弟#恭喜你的号码#恭喜您的号码#高干子女#各个银行全称#各种发票#高官#高官互调#高官子女#喝一送一#卡号#复制#监听王#传单#旦科#钓鱼岛#钓鱼台#当官靠后台#党校安插亲信#传九促三#客户端非法字符#刻章#大麻树脂#大麻油#大法#大法弟子#dpp大法#fa lun#falu#发抡#发抡功#洗脑#下法轮#发轮#发伦#发伦功#发仑#发沦#发纶#发论#发论功#发论公#发正念#发囵#发愣#发瞟#罚抡#罚伦#罚仑#罚沦#罚纶#罚囵#筏抡#筏轮#筏伦#筏仑#筏沦#筏纶#筏论#筏囵#伐抡#伐轮#伐伦#伐仑#伐沦#伐论#伐囵#乏抡#乏轮#乏伦#乏仑#乏沦#乏纶#乏论#乏囵#阀抡#阀伦#阀仑#阀沦#阀纶#阀论#阀囵#法 轮 功#法*功#法.轮.功#法L功#法lun功#法功#法会#法抡#法抡功#法轮#法轮大法#法轮佛法#法轮功#法伦#法仑#法沦#法纶#法论#法十轮十功#法西斯#法院#法正#法谪#法谪功#法輪#法囵#法愣#珐.輪功#珐抡#珐轮#珐伦#珐仑#珐沦#五不#五不争鸣论坛#五出三进#五套功法#邝锦文#垡抡#垡轮#垡伦#垡仑#垡沦#垡纶#垡论#垡囵#茳澤民#荭志#闳志#闵维方#氵去#氵去车仑工力#转法轮#砝抡#砝轮#砝伦#砝仑#砝沦#砝纶#真、善、忍#真理教#真善美#真善忍#砝论#砝囵#泓志#屙民#珐纶#珐论#珐囵#falun#Falundafa#fa轮#Flg#弟子#地下教会#炼功#梦网洪志#轮大#抡功#轮功#伦功#摩门教#三水法轮#三唑仑#天皇#天怒#天葬#车臣#达赖#功法#讲法#基督#基督教#护法#回教#教徒#功友#大师#达赖喇嘛#虹志#鸿志#洪传#贯通两极法#光祖#洪吟#洪哲胜#洪志#宏法#观世音#宏志#弘志#古兰经#红志#车库#车仑#经文#爱女人#爱液#按摩棒#拔出来#爆草#包二奶#暴干#暴奸#暴乳#爆乳#暴淫#屄#被操#被插#被干#逼奸#仓井空#插暴#操逼#操黑#操烂#肏你#肏死#操死#操我#厕奴#插比#插b#插逼#插进#插你#插我#插阴#潮吹#潮喷#成人dv#成人电影#成人论坛#成人小说#成人电#成人电影#成人卡通#成人聊#成人片#成人视#成人图#成人文#成人小#成人电影#成人论坛#成人色情#成人网站#成人文学#成人小说#艳情小说#成人游戏#吃精#赤裸#抽插#扌由插#抽一插#春药#大波#大力抽送#大乳#荡妇#荡女#盗撮#多人轮#发浪#放尿#肥逼#粉穴#封面女郎#风月大陆#干死你#干穴#肛交#肛门#龟头#裹本#国产av#好嫩#豪乳#黑逼#后庭#后穴#虎骑#花花公子#换妻俱乐部#黄片#几吧#鸡吧#鸡巴#鸡奸#寂寞男#寂寞女#妓女#激情#集体淫#奸情#叫床#脚交#金鳞岂是池中物#金麟岂是池中物#精液#就去日#巨屌#菊花洞#菊门#巨奶#巨乳#菊穴#开苞#口爆#口活#口交#口射#口淫#裤袜#狂操#狂插#浪逼#浪妇#浪叫#浪女#狼友#聊性#流淫#铃木麻#凌辱#漏乳#露b#乱交#乱伦#轮暴#轮操#轮奸#裸陪#买春#美逼#美少妇#美乳#美腿#美穴#美幼#秘唇#迷奸#密穴#蜜穴#蜜液#摸奶#摸胸#母奸#奈美#奶子#男奴#内射#嫩逼#嫩女#嫩穴#捏弄#女优#炮友#砲友#喷精#屁眼#品香堂#前凸后翘#强jian#强暴#强奸处女#情趣用品#情色#拳交#全裸#群交#惹火身材#人妻#人兽#日逼#日烂#肉棒#肉逼#肉唇#肉洞#肉缝#肉棍#肉茎#肉具#揉乳#肉穴#肉欲#乳爆#乳房#乳沟#乳交#乳头#三级片#骚逼#骚比#骚女#骚水#骚穴#色逼#色界#色猫#色盟#色情网站#色区#色色#色诱#色欲#色b#少年阿宾#少修正#射爽#射颜#食精#释欲#兽奸#兽交#手淫#兽欲#熟妇#熟母#熟女#爽片#爽死我了#双臀#死逼#丝袜#丝诱#松岛枫#酥痒#汤加丽#套弄#体奸#体位#舔脚#舔阴#调教#偷欢#偷拍#推油#脱内裤#文做#我就色#无码#舞女#无修正#吸精#夏川纯#相奸#小逼#校鸡#小穴#小xue#写真#性感妖娆#性感诱惑#性虎#性饥渴#性技巧#性交#性奴#性虐#性息#性欲#胸推#穴口#学生妹#穴图#亚情#颜射#阳具#杨思敏#要射了#夜勤病栋#一本道#一夜欢#一夜情#一ye情#阴部#淫虫#阴唇#淫荡#阴道#淫电影#阴阜#淫妇#淫河#阴核#阴户#淫贱#淫叫#淫教师#阴茎#阴精#淫浪#淫媚#淫糜#淫魔#淫母#淫女#淫虐#淫妻#淫情#淫色#淫声浪语#淫兽学园#淫书#淫术炼金士#淫水#淫娃#淫威#淫亵#淫样#淫液#淫照#阴b#应召#幼交#幼男#幼女#欲火#欲女#玉女心经#玉蒲团#玉乳#欲仙欲死#玉穴#援交#原味内衣#援助交际#张筱雨#招鸡#招妓#中年美妇#抓胸#自拍#自慰#作爱#18禁#99bb#a4u#a4y#adult#amateur#anal#a片#fuck#gay片#g点#g片#hardcore#h动画#h动漫#incest#porn#secom#sexinsex#sm女王#xiao77#xing伴侣#tokyohot#yin荡#贱人#装b#大sb#傻逼#傻b#煞逼#煞笔#刹笔#傻比#沙比#欠干#婊子养的#我日你#我操#我草#卧艹#卧槽#爆你菊#艹你#cao你#你他妈#真他妈#别他吗#草你吗#草你丫#操你妈#擦你妈#操你娘#操他妈#日你妈#干你妈#干你娘#娘西皮#狗操#狗草#狗杂种#狗日的#操你祖宗#操你全家#操你大爷#妈逼#你麻痹#麻痹的#妈了个逼#马勒#狗娘养#贱比#贱b#下贱#死全家#全家死光#全家不得好死#全家死绝#白痴#无耻#sb#杀b#你吗b#你妈的#婊子#贱货#人渣#混蛋#媚外#和弦#兼职#限量#铃声#性伴侣#男公关#火辣#精子#射精#诱奸#强奸#做爱#性爱#发生关系#按摩#快感#处男#猛男#少妇#屌#屁股#下体#a片#内裤#浑圆#咪咪#发情#刺激#白嫩#粉嫩#兽性#风骚#呻吟#sm#阉割#高潮#裸露#不穿#一丝不挂#脱光#干你#干死#我干#裙中性运动#乱奸#乱伦#乱伦类#乱伦小#伦理大#伦理电影#伦理毛#伦理片#裸聊#裸聊网#裸体写真#裸舞视#裸照#美女裸体#美女写真#美女上门#美艳少妇#妹按摩#妹上门#迷幻药#迷幻藥#迷昏口#迷昏药#迷昏藥#迷魂香#迷魂药#迷魂藥#迷奸粉#迷奸药#迷情粉#迷情水#迷情药#迷药#迷藥#谜奸药#骚妇#骚货#骚浪#骚女#骚嘴#色电影#色妹妹#色情表演#色情电影#色情服务#色情图片#色情小说#色情影片#色情表演#色情电影#色情服务#色情片#色视频#色小说#性伴侣#性服务#性福情#性感少#性伙伴#性交#性交视频#性交图片#性奴#性奴集中营#性虐#阴唇#阴道#阴蒂#阴户#阴间来电#阴茎#阴茎增大#阴茎助勃#阴毛#陰唇#陰道#陰戶#淫荡#淫荡美女#淫荡视频#淫荡照片#淫乱#淫靡#淫魔#淫魔舞#淫女#淫情女#淫肉#淫騷妹#淫兽#淫兽学#淫水#淫穴#morphine#摇头丸#迷药#乖乖粉#narcotic#麻醉药#精神药品#爱女人#爱液#按摩棒#拔出来#爆草#包二奶#暴干#暴奸#暴乳#爆乳#暴淫#屄#被操#被插#被干#逼奸#仓井空#插暴#操逼#操黑#操烂#肏你#肏死#操死#操我#厕奴#插比#插b#插逼#插进#插你#插我#插阴#潮吹#潮喷#成人电影#成人论坛#成人色情#成人网站#成人文学#成人小说#艳情小说#成人游戏#吃精#赤裸#抽插#扌由插#抽一插#春药#大波#大力抽送#大乳#荡妇#荡女#盗撮#多人轮#发浪#放尿#肥逼#粉穴#封面女郎#风月大陆#干死你#干穴#肛交#肛门#龟头#裹本#国产av#好嫩#豪乳#黑逼#后庭#后穴#虎骑#花花公子#换妻俱乐部#黄片#几吧#鸡吧#鸡巴#鸡奸#寂寞男#寂寞女#妓女#激情#集体淫#奸情#叫床#脚交#金鳞岂是池中物#金麟岂是池中物#精液#就去日#巨屌#菊花洞#菊门#巨奶#巨乳#菊穴#开苞#口爆#口活#口交#口射#口淫#裤袜#狂操#狂插#浪逼#浪妇#浪叫#浪女#狼友#聊性#流淫#铃木麻#凌辱#漏乳#露b#乱交#乱伦#轮暴#轮操#轮奸#裸陪#买春#美逼#美少妇#美乳#美腿#美穴#美幼#秘唇#迷奸#密穴#蜜穴#蜜液#摸奶#摸胸#母奸#奈美#奶子#男奴#内射#嫩逼#嫩女#嫩穴#捏弄#女优#炮友#砲友#喷精#屁眼#品香堂#前凸后翘#强jian#强暴#强奸处女#情趣用品#情色#拳交#全裸#群交#惹火身材#人妻#人兽#日逼#日烂#肉棒#肉逼#肉唇#肉洞#肉缝#肉棍#肉茎#肉具#揉乳#肉穴#肉欲#乳爆#乳房#乳沟#乳交#乳头#三级片#骚逼#骚比#骚女#骚水#骚穴#色逼#色界#色猫#色盟#色情网站#色区#色色#色诱#色欲#色b#少年阿宾#少修正#射爽#射颜#食精#释欲#兽奸#兽交#手淫#兽欲#熟妇#熟母#熟女#爽片#爽死我了#双臀#死逼#丝袜#丝诱#松岛枫#酥痒#汤加丽#套弄#体奸#体位#舔脚#舔阴#调教#偷欢#偷拍#推油#脱内裤#文做#我就色#无码#舞女#无修正#吸精#夏川纯#相奸#小逼#校鸡#小穴#小xue#写真#性感妖娆#性感诱惑#性虎#性饥渴#性技巧#性交#性奴#性虐#性息#性欲#胸推#穴口#学生妹#穴图#亚情#颜射#阳具#杨思敏#要射了#夜勤病栋#一本道#一夜欢#一夜情#一ye情#阴部#淫虫#阴唇#淫荡#阴道#淫电影#阴阜#淫妇#淫河#阴核#阴户#淫贱#淫叫#淫教师#阴茎#阴精#淫浪#淫媚#淫糜#淫魔#淫母#淫女#淫虐#淫妻#淫情#淫色#淫声浪语#淫兽学园#淫书#淫术炼金士#淫水#淫娃#淫威#淫亵#淫样#淫液#淫照#阴b#应召#幼交#幼男#幼女#欲火#欲女#玉女心经#玉蒲团#玉乳#欲仙欲死#玉穴#援交#原味内衣#援助交际#张筱雨#招鸡#招妓#中年美妇#抓胸#自拍#自慰#作爱#18禁#99bb#a4u#a4y#adult#amateur#anal#a片#fuck#gay片#g点#g片#hardcore#h动画#h动漫#incest#porn#secom#sexinsex#sm女王#xiao77#xing伴侣#tokyohot#yin荡#腐败#贪污#gcd#共贪党#gongchandang#阿共#共一产一党#产党共#公产党#工产党#共c党#共x党#共铲#供产#共惨#供铲党#供铲谠#供铲裆#共残党#共残主义#共产主义的幽灵#拱铲#老共#中珙#中gong#gc党#贡挡#gong党#g产#狗产蛋#共残裆#恶党#邪党#共产专制#共产王朝#裆中央#土共#土g#共狗#g匪#共匪#仇共#共产党腐败#共产党专制#共产党的报应#共产党的末日#共产党专制#communistparty#症腐#政腐#政付#正府#政俯#政f#zhengfu#政zhi#挡中央#档中央#中国zf#中央zf#国wu院#中华帝国#gong和#大陆官方#北京政权#刘志军#张曙#刘志军#买别墅#玩女人#贪20亿#许宗衡#贪财物#李启红#贪腐财富#落马#高官名单#陈希同#贪污#玩忽职守#有期徒刑#陈良宇#受贿罪#滥用职权#有期徒刑#没收个人财产#成克杰#死刑#程维高#严重违纪#开除党籍#撤销职务#刘方仁#无期徒刑#倪献策#徇私舞弊#梁湘#以权谋私#撤职。#李嘉廷#死刑缓期#张国光#韩桂芝#宋平顺#自杀#黄瑶#双规#陈绍基#判处死刑#剥夺政治权利终身#没收个人全部财产#石兆彬#侯伍杰#王昭耀#剥夺政治权利#杜世成#沈图#叛逃美国#罗云光#起诉#张辛泰#李效时#边少斌#徐鹏航#违纪#收受股票#王乐毅#李纪周#郑光迪#田凤山。#邱晓华#郑筱萸#孙鹤龄#蓝田造假案#于幼军#留党察看#何洪达#朱志刚#杨汇泉#官僚主义#徐炳松#托乎提沙比尔#王宝森#经济犯罪#畏罪自杀。#陈水文#孟庆平#胡长清#朱川#许运鸿#丘广钟#刘知炳#丛福奎#王怀忠#巨额财产#来源不明罪#李达昌#刘长贵#王钟麓#阿曼哈吉#付晓光#自动辞#刘克田#吕德彬#刘维明#双开#刘志华#孙瑜#李堂堂#韩福才 青海#欧阳德 广东#韦泽芳 海南#铁英 北京#辛业江 海南#于飞 广东#姜殿武 河北#秦昌典 重庆#范广举 黑龙江#张凯广东#王厚宏海南#陈维席安徽#王有杰河南#王武龙江苏#米凤君吉林#宋勇辽宁#张家盟浙江#马烈孙宁夏#黄纪诚北京#常征贵州#王式惠重庆#周文吉#王庆录广西#潘广田山东#朱作勇甘肃#孙善武河南#宋晨光江西#梁春禄广西政协#鲁家善 中国交通#金德琴 中信#李大强 神华#吴文英 纺织#查克明 华能#朱小华光大#高严 国家电力#王雪冰#林孔兴#刘金宝#张恩照#陈同海#康日新#王益#张春江#洪清源#平义杰#李恩潮#孙小虹#陈忠#慕绥新#田凤岐#麦崇楷#柴王群#吴振汉#张秋阳#徐衍东#徐发 黑龙江#张宗海#丁鑫发#徐国健#李宝金#单平#段义和#荆福生#陈少勇#黄松有#皮黔生#王华元#王守业#刘连昆#孙晋美#邵松高#肖怀枢#刘广智 空军#姬胜德 总参#廖伯年 北京#穴海#协警#纳米比亚#专业调查#有华龙#jq的来#电信路#第一夫人#党鞭#黄巨#荡尽天下#家元自称玉皇大帝#主席李世民#何祚庥#刘刚#不要沉默#后勤集团#食堂涨价#发国难财#浪漫邂逅#红满堂#张小洋#炸学校#子宫#叫晶晶的女孩#回派#社会黑暗#国之母#国母#国姆#东方微点#震惊全球#nowto#chengdu#徐明#六月飞雪#暴力虐待#暴力袭击#天府广场#粮荒#洗脑班#李愚蠢#中国猪#台湾猪#进化不完全的生命体#震死他们##10010#10086#10159#13423205670#13725516608#13875448369#15112886328#189#6-4tianwang#64#68170802#6a6.net#7.31#7.310#89-64cdjp#8945212#23条#259o#381929279#3P#4-Jun#AV#BJ#CBD#CCTV#CDMA#DICK#Dick#FLG#FOCUSC#FUCK#Fuck#GAMEMASTER#GCD#GameMaster#IP17908#KEY_TEXT#NMD#QQb#SM#Soccer01.com#TMD#UltraSurf#bignews#Bitch#boxun#Chinaliberal#chinamz#Chinesenewsnet#cnd#Creaders#dafa#Dajiyuan#df'd#Dfdz#die#dpp#Freechina#freedom#Freenet#fuck#fuck your mother#hongzhi#hrichina#huanet#hypermart.net#incest#jiangdongriji#l2590803027#lihongzhi#ma#making#minghui#minghuinews#nacb#na?ve#nmis#paper64#peacehall#piao#playboy#renminbao#renmingbao#rfa#safeweb#sex#shit#simple#svdc#taip#tibetalk#triangle#triangleboy#txwq.net#unixbox#ustibet#voa#voachinese#wangce#wstaiji#www#xinsheng#yuming#yy通讯录#zhengjian#zhengjianwang#zhenshanren#zhuanfalu#zhuanfalun#八九#八老#",
			i = null;

		function r() {
			return i && 0 != i.length || (i = o.split("#")), i
		}
		n.getAryText = r, n.textFilter = function(e) {
			for (var t = 0, n = r(); t < n.length; t++) {
				var o = n[t];
				if (o && e.includes(o)) {
					var i = new RegExp(o, "g"),
						a = "".padEnd(o.length, "*");
					e = e.replace(i, a)
				}
			}
			return e
		}, cc._RF.pop()
	}, {}],
	gameConfig: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "eaa55ffAZVFk4HlvvX1BWfi", "gameConfig"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = function() {
			function e() {}
			return e.COPY = "@长沙零一互动", e.GAME_NAME = "功夫蛙", e.MINI_GAME_JUMP_CELL_LIST = [{
				name: "-老乡你要啥",
				iconId: "lxnys",
				appId: "wxc7d2241fc9e870aa"
			}, {
				name: "-我是医生",
				iconId: "wsys",
				appId: "wx75542a90a4f3b540"
			}], e.MINI_GAME_JUMP_SCROLL_LIST = [{
				name: "-老乡你要啥",
				iconId: "lxnys",
				appId: "wxc7d2241fc9e870aa"
			}, {
				name: "-我是医生1",
				iconId: "wsys",
				appId: "wx75542a90a4f3b540"
			}], e.MINI_GAME_JUMP_SIDE_LIST = [{
				name: "-老乡你要啥",
				iconId: "lxnys",
				appId: "wxc7d2241fc9e870aa"
			}, {
				name: "-我是医生1",
				iconId: "wsys",
				appId: "wx75542a90a4f3b540"
			}, {
				name: "-老乡你要啥",
				iconId: "lxnys",
				appId: "wxc7d2241fc9e870aa"
			}, {
				name: "-我是医生2",
				iconId: "wsys",
				appId: "wx75542a90a4f3b540"
			}, {
				name: "-老乡你要啥",
				iconId: "lxnys",
				appId: "wxc7d2241fc9e870aa"
			}, {
				name: "-我是医生3",
				iconId: "wsys",
				appId: "wx75542a90a4f3b540"
			}, {
				name: "-老乡你要啥",
				iconId: "lxnys",
				appId: "wxc7d2241fc9e870aa"
			}, {
				name: "-我是医生4",
				iconId: "wsys",
				appId: "wx75542a90a4f3b540"
			}, {
				name: "-老乡你要啥",
				iconId: "lxnys",
				appId: "wxc7d2241fc9e870aa"
			}, {
				name: "-我是医生5",
				iconId: "wsys",
				appId: "wx75542a90a4f3b540"
			}, {
				name: "-老乡你要啥",
				iconId: "lxnys",
				appId: "wxc7d2241fc9e870aa"
			}, {
				name: "-我是医生6",
				iconId: "wsys",
				appId: "wx75542a90a4f3b540"
			}, {
				name: "-老乡你要啥",
				iconId: "lxnys",
				appId: "wxc7d2241fc9e870aa"
			}, {
				name: "-我是医生7",
				iconId: "wsys",
				appId: "wx75542a90a4f3b540"
			}, {
				name: "-老乡你要啥",
				iconId: "lxnys",
				appId: "wxc7d2241fc9e870aa"
			}, {
				name: "-我是医生8",
				iconId: "wsys",
				appId: "wx75542a90a4f3b540"
			}], e.GAME_VIDEO_SHARE_DESC = "功夫蛙", e.GAME_VIDEO_SHARE_TITLE = "功夫蛙", e.VERSION_NOTICE = "", e.MAX_POWER = 10, e.NORMAL_POWER = 15, e.NORMAL_COINS = 5, e.ADD_ONCE_POWER = 5, e.ADD_ONCE_COINS = 100, e.REST_POWER_TIME = 60, e.REST_POWER_VALUE = 1, e.FIRST_PLAY_INFINITY_PROBABILITY = 1, e.INFINTY_VIDEO_TIME = 3, e.INFINITY_POWER_VIDEO_HAND_TIME = 30, e.CLICK_POWER_INFINITY_PROBABILITY = 1, e.LOG_SERVICE_OPEN = !1, e.SCREEN_LOG_SWITCH = !1, e.CONSOLE_LOG_LEVEL = 0, e.FIRST_VIDEO_TIME = 0, e.IP_BLOCK_CITY = [], e.DOUYIN_YUMAI = 0, e.MODE_POWER = {
				0: 1,
				1: 1,
				2: 0,
				3: 1,
				4: 1
			}, e.MODE_VIDEO_COUNT = {
				0: 0,
				1: 0,
				2: 0,
				3: 2,
				4: 1
			}, e.MODE_LEVEL_COUNT = {
				0: {
					mode: 0,
					level: 0
				},
				1: {
					mode: 0,
					level: 0
				},
				2: {
					mode: 0,
					level: 0
				},
				3: {
					mode: 0,
					level: 2
				},
				4: {
					mode: 0,
					level: 0
				}
			}, e.MODE_UNLOCK_TYPE = [0, 0, 0, 0, 0], e.SKIN_CONFIG = {
				Frog: {
					id: "Frog",
					path: "Frog/Frog",
					shopPath: "Frog/Frog",
					name: "Ếch nhỏ",
					type: 0,
					adCount: 0,
					adKey: "frog-video-key-xqw",
					unlockLevel: {
						mode: 0,
						level: 0
					}
				},
				HaMa: {
					id: "HaMa",
					path: "HaMa/HaMa",
					shopPath: "HaMa/HaMa",
					name: "Ếch nhỏ",
					type: 0,
					unlockTips: "Mở khóa qua Lv năm của chế độ lưỡi đôi",
					noAdUnlock: !0,
					adCount: 0,
					adKey: "frog-video-key-xhm",
					unlockLevel: {
						mode: 3,
						level: 5
					}
				},
				Tortoise: {
					id: "Tortoise",
					path: "Tortoise/WuGui_Body",
					shopPath: "Tortoise/WuGui_Body",
					name: "Rùa nhỏ",
					type: 0,
					noAdUnlock: !1,
					adCount: 2,
					adKey: "frog-video-key",
					unlockLevel: {
						mode: 0,
						level: 0
					}
				},
				KunKunChicken: {
					id: "KunKunChicken",
					path: "KunkunChicken/Chick_Body",
					shopPath: "KunkunChicken/Chick",
					name: "Gà Kun Kun",
					type: 0,
					unlockTips: "65 Easter Egg để mở khóa",
					noAdUnlock: !0,
					adCount: 0,
					adKey: "frog-video-key-kkj",
					unlockLevel: {
						mode: 4,
						level: 2
					}
				}
			}, e.MENU_SHOW_MODE = [], e.VIDIOCONTR = 1, e.IMG_CANCLICK = 1, e.NATIVE_JUMP_PROB = 1, e.NATIVE_CLOSE_SIZE = 38, e.NATIVE_CLOSE_PROB = 1, e.SECOND_NATIVE = .8, e.NATIVE_MAIN_SWICH = 1, e.INTERVAL_NATIVE_TIME = 30, e.NATIVE_INTERVAL_PROB = 1, e.END_NATIVE = .8, e.NATIVE_ICONSHOW = 1, e.BUCHANG_TIME = 1, e
		}();
		n.default = o, cc._RF.pop()
	}, {}],
	gameEngine: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "1b48cGCTZdCZZCQRqG55qLY", "gameEngine");
		var o = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			i = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			},
			r = this && this.__spreadArrays || function() {
				for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
				var o = Array(e),
					i = 0;
				for (t = 0; t < n; t++)
					for (var r = arguments[t], a = 0, s = r.length; a < s; a++, i++) o[i] = r[a];
				return o
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.modules = n.managers = n.services = void 0;
		var a = e("./services/localStorageService"),
			s = e("./managers/soundManager"),
			c = e("./services/ossService"),
			l = e("./services/miniGameService"),
			u = e("./services/userService"),
			d = e("./managers/gameManager"),
			p = e("./modules/uiModule"),
			f = e("./modules/gameHttpModule"),
			h = e("./configs/logConfig"),
			m = e("./configs/copy"),
			y = e("./modules/gameWebSocketModule"),
			g = e("./services/logService"),
			_ = e("./configs/engineConfig"),
			v = e("../Game/MainRoot"),
			b = e("./managers/ziManager");
		n.services = function() {
			return w.getServices()
		}, n.managers = function() {
			return w.getManagers()
		}, n.modules = function() {
			return w.getModules()
		};
		var O = function() {
				function e() {
					this.m_modules = {
						uiControlModule: new p.default,
						gameHttpModule: new f.default,
						gameWebsocketModule: new y.default
					}, this.services = {
						localStorageSrv: new a.default,
						ossSrv: new c.default,
						miniGameSrv: new l.default,
						userSrv: new u.default,
						logSrv: new g.default
					}, this.managers = {
						soundMgr: new s.default,
						gameMgr: new d.default,
						ziMgr: new b.default
					}, console.log("<游戏主框架>"), this.reDefinedApi()
				}
				return e.prototype.getModules = function() {
					return this.m_modules
				}, e.prototype.getManagers = function() {
					return this.managers
				}, e.prototype.getServices = function() {
					return this.services
				}, e.prototype.loadAll = function() {
					return o(this, void 0, Promise, function() {
						var e, t;
						return i(this, function(n) {
							switch (n.label) {
								case 0:
									return console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■"), console.log(m.COMPANY_COPY), console.log("@version", m.CODE_VERSION), console.log("@time", m.FRAME_TIME), console.log("@copy", m.COMPANY_NAME), console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■"), e = Date.now(), t = e, console.log("★★★★★框架载入★★★★★"), console.log(h.LINE_SPLIT_START_LEFT + "加载所有模块" + h.LINE_SPLIT_START_RIGHT), [4, w.loadAllModules()];
								case 1:
									return n.sent(), console.log(h.LINE_SPLIT_END_LEFT + "所有模块已载" + h.LINE_SPLIT_END_RIGHT, Date.now() - t, "ms"), t = Date.now(), console.log(h.LINE_SPLIT_START_LEFT + "加载OSS服务" + h.LINE_SPLIT_START_RIGHT), [4, this.getServices().ossSrv.loadService()];
								case 2:
									return n.sent(), console.log(h.LINE_SPLIT_END_LEFT + "OSS服务已载" + h.LINE_SPLIT_END_RIGHT, Date.now() - t, "ms"), [4, this.getServices().ossSrv.onLoadedService()];
								case 3:
									return n.sent(), t = Date.now(), console.log(h.LINE_SPLIT_START_LEFT + "加载所有服务" + h.LINE_SPLIT_START_RIGHT), [4, this.loadServices()];
								case 4:
									return n.sent(), console.log(h.LINE_SPLIT_END_LEFT + "所有服务已载" + h.LINE_SPLIT_END_RIGHT, Date.now() - t, "ms"), t = Date.now(), console.log(h.LINE_SPLIT_START_LEFT + "加载所有管理" + h.LINE_SPLIT_START_RIGHT), [4, this.loadManagers()];
								case 5:
									return n.sent(), console.log(h.LINE_SPLIT_END_LEFT + "所有管理已载" + h.LINE_SPLIT_END_RIGHT, Date.now() - t, "ms"), t = Date.now(), console.log("★★★★★框架完毕★★★★★", Date.now() - e, "ms (总耗时)"), [4, v.default.GameInit()];
								case 6:
									return n.sent(), [2, Promise.resolve()]
							}
						})
					})
				}, e.prototype.emit = function(e) {
					for (var t, n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
					(t = this.Canvas()).emit.apply(t, r([e], n))
				}, e.prototype.on = function(e, t, n) {
					this.Canvas().on(e, t, n)
				}, e.prototype.off = function(e, t, n) {
					this.Canvas().off(e, t, n)
				}, e.prototype.once = function(e, t) {
					for (var n, o = [], i = 2; i < arguments.length; i++) o[i - 2] = arguments[i];
					(n = this.Canvas()).once.apply(n, r([e, t], o))
				}, e.prototype.Component = function() {
					return this.Canvas().getComponent(cc.Component)
				}, e.prototype.Canvas = function() {
					return cc.find("Canvas")
				}, e.prototype.releaseUnusedAssets = function() {
					try {
						cc.resources.releaseUnusedAssets()
					} catch (e) {
						console.warn("#498 警告 res unused release", e)
					}
				}, e.prototype.changeScene = function(e, t) {
					this.loadScene(e, t)
				}, e.prototype.loadScene = function(e, t) {
					w.emit(_.GameEvent.CHANGE_SCENE_BEFORE), cc.director.loadScene(e, function() {
						w.emit(_.GameEvent.CHANGE_SCENE_AFTER), t && t()
					})
				}, e.prototype.loadAllModules = function() {
					return o(this, void 0, void 0, function() {
						var e, t, n, o, r, a, s;
						return i(this, function(i) {
							switch (i.label) {
								case 0:
									for (t in e = [], this.m_modules) e.push(t);
									n = 0, i.label = 1;
								case 1:
									return n < e.length ? (s = e[n], [4, this.m_modules[s].preLoadModules()]) : [3, 4];
								case 2:
									i.sent(), i.label = 3;
								case 3:
									return n++, [3, 1];
								case 4:
									for (r in o = [], this.m_modules) o.push(r);
									a = 0, i.label = 5;
								case 5:
									return a < o.length ? (s = o[a], [4, this.m_modules[s].loadModule()]) : [3, 9];
								case 6:
									return i.sent(), [4, this.m_modules[s].onLoadedModule()];
								case 7:
									i.sent(), i.label = 8;
								case 8:
									return a++, [3, 5];
								case 9:
									return [2, Promise.resolve()]
							}
						})
					})
				}, e.prototype.reDefinedApi = function() {}, e.prototype.loadManagers = function() {
					return o(this, void 0, void 0, function() {
						var e, t, n, o, r;
						return i(this, function(i) {
							switch (i.label) {
								case 0:
									for (t in e = [], this.managers) e.push(t);
									n = 0, i.label = 1;
								case 1:
									return n < e.length ? (o = e[n], [4, (r = this.managers[o]).loadManager()]) : [3, 5];
								case 2:
									return i.sent(), [4, r.onLoadedManager()];
								case 3:
									i.sent(), i.label = 4;
								case 4:
									return n++, [3, 1];
								case 5:
									return [2]
							}
						})
					})
				}, e.prototype.loadServices = function() {
					return o(this, void 0, void 0, function() {
						var e, t, n, o, r;
						return i(this, function(i) {
							switch (i.label) {
								case 0:
									for (t in e = [], this.services) e.push(t);
									n = 0, i.label = 1;
								case 1:
									return n < e.length ? (o = e[n], (r = this.services[o]).isLoaded() ? [3, 4] : [4, r.loadService()]) : [3, 5];
								case 2:
									return i.sent(), [4, r.onLoadedService()];
								case 3:
									i.sent(), i.label = 4;
								case 4:
									return n++, [3, 1];
								case 5:
									return [2]
							}
						})
					})
				}, e
			}(),
			w = function() {
				try {
					return window.O1HD = new O, window.O1HD
				} catch (e) {
					console.error("主引擎创建失败", e)
				}
			}();
		n.default = w, cc._RF.pop()
	}, {
		"../Game/MainRoot": "MainRoot",
		"./configs/copy": "copy",
		"./configs/engineConfig": "engineConfig",
		"./configs/logConfig": "logConfig",
		"./managers/gameManager": "gameManager",
		"./managers/soundManager": "soundManager",
		"./managers/ziManager": "ziManager",
		"./modules/gameHttpModule": "gameHttpModule",
		"./modules/gameWebSocketModule": "gameWebSocketModule",
		"./modules/uiModule": "uiModule",
		"./services/localStorageService": "localStorageService",
		"./services/logService": "logService",
		"./services/miniGameService": "miniGameService",
		"./services/ossService": "ossService",
		"./services/userService": "userService"
	}],
	gameHttpContent: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "2f1411L24hNgravCFgKRVf9", "gameHttpContent"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), cc._RF.pop()
	}, {}],
	gameHttpModule: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "3957cmNSF5CaohvsIYsfrks", "gameHttpModule");
		var o, i = this && this.__extends || (o = function(e, t) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
				})(e, t)
		}, function(e, t) {
			function n() {
				this.constructor = e
			}
			o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
		});
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.m_className = "网络http模块", t.GAME_SERVER_URL = "", t
			}
			return i(t, e), t.prototype.PingPong = function() {}, t.prototype.getUserWebInfo = function() {}, t.prototype.getLocalPropertyInfo = function(e, t) {
				this.sendHttp("/dataCenter/api/ip/getClientInfo", "get", null, {}, e, function(e) {
					console.error("#38 http错误", e), t && t(e)
				})
			}, t.prototype.sendHttp = function(e, t, n, o, i, r, a) {
				var s = this;
				void 0 === a && (a = !0);
				var c = this.GAME_SERVER_URL + e,
					l = null;
				if (n)
					for (var u in n) {
						var d = n[u];
						null == l ? l = u + "=" + d : l += "&" + u + "=" + d
					}
				var p = new XMLHttpRequest;
				p.timeout = 1e4, p.onreadystatechange = function() {
					if (p.readyState == XMLHttpRequest.DONE)
						if (p.status >= 200 && p.status < 300) {
							var e = p.responseText;
							try {
								s.onHttpDone(JSON.parse(e), function(e) {
									switch (typeof e) {
										case "object":
											i(e);
											break;
										case "string":
											i(JSON.parse(e))
									}
								}, r, p)
							} catch (t) {
								console.error("运行后端回执引发的异常", e, t)
							}
						} else r && r(null)
				}, p.ontimeout = function() {
					console.error("请求超时", c), r && r({
						code: -1,
						msg: "请求超时",
						data: null
					})
				}, "GET" == t.toUpperCase() && l && (c += "?" + l), p.open(t, c, a), p.setRequestHeader("Content-type", "application/json"), "POST" == t.toUpperCase() ? p.send(JSON.stringify(n)) : p.send()
			}, t.prototype.onHttpDone = function(e, t, n) {
				var o = e.code,
					i = (e.msg, e.data);
				if (null != o && 0 != o) return n && n(e), void console.error("错误的回执", e);
				t(i || e)
			}, t
		}(e("./superModule").default);
		n.default = r, cc._RF.pop()
	}, {
		"./superModule": "superModule"
	}],
	gameManager: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "c63c5oIiCRPLaC81YD0U0on", "gameManager");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			a = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = e("./superManager"),
			c = e("./gameContent/gameMode_json"),
			l = e("../gameEngine"),
			u = e("../libs/data_control"),
			d = e("../configs/gameConfig"),
			p = e("../../O1ModuleRes/frame/versionNotice"),
			f = function(e) {
				function t() {
					var t = e.call(this) || this;
					return t.className = "游戏管理", t.m_currGameMode = null, t.m_versionNotice = null, t.m_VERSION_NOTICE_KEY = "game-version-notice", t
				}
				return i(t, e), t.prototype.loadManager = function() {
					return r(this, void 0, Promise, function() {
						return a(this, function(t) {
							switch (t.label) {
								case 0:
									return [4, e.prototype.loadManager.call(this)];
								case 1:
									return t.sent(), this.m_versionNotice = l.default.getServices().localStorageSrv.getStorage(this.m_VERSION_NOTICE_KEY), [2, Promise.resolve()]
							}
						})
					})
				}, t.prototype.onGameRun = function() {
					var e = d.default.VERSION_NOTICE;
					this.m_versionNotice != e && (this.m_versionNotice = e, l.default.getServices().localStorageSrv.setStorage(this.m_VERSION_NOTICE_KEY, this.m_versionNotice), this.showVersionNotice());
					var t = window.tt;
					if (t) {
						var n = t.getLaunchOptionsSync();
						console.log(n.showFrom), console.log("启动参数", n, JSON.stringify(n))
					}
				}, t.prototype.showVersionNotice = function() {
					var e = this;
					this.m_versionNotice && l.modules().uiControlModule.showFramePrefab("preload/frame/versionNotice", null, !1, function(t) {
						t.getComponent(p.default).setNotice(e.m_versionNotice)
					})
				}, t.prototype.getVersionNotice = function() {
					return this.m_versionNotice
				}, t.prototype.loadModeOver = function() {
					return r(this, void 0, void 0, function() {
						var e = this;
						return a(this, function(t) {
							switch (t.label) {
								case 0:
									switch (console.log("加载子游戏场景", this.m_currGameMode.sceneName), l.default.getModules().uiControlModule.showLoading(), this.m_currGameMode.sceneMode) {
										case c.SCENE_MODE.FIRE:
											return [3, 1];
										case c.SCENE_MODE.PREFAB:
											return [3, 3]
									}
									return [3, 4];
								case 1:
									return [4, new Promise(function(t) {
										l.default.loadScene(e.m_currGameMode.sceneName, function() {
											t(), l.default.getModules().uiControlModule.hideLoading()
										})
									})];
								case 2:
									return t.sent(), [3, 5];
								case 3:
									return this.m_currGameMode.bundle.load(this.m_currGameMode.sceneName, cc.Prefab, function(t, n) {
										t ? console.error("#55 模式对应预制体不存在或异常", e.m_currGameMode) : (e.m_currGameMode.currScenePrefabNode = cc.instantiate(n), l.default.Canvas().addChild(e.m_currGameMode.currScenePrefabNode), l.default.getModules().uiControlModule.hideLoading())
									}), [3, 5];
								case 4:
									return l.default.getModules().uiControlModule.hideLoading(), console.error("#56 请指示加载模式的类型"), [3, 5];
								case 5:
									return [2]
							}
						})
					})
				}, t.prototype.getMainSceneNameAndLoadBundle = function() {
					return "hall"
				}, t.prototype.setMainModeLoaded = function(e) {
					this.m_currGameMode = e
				}, t.prototype.selectMode = function(e) {
					return r(this, void 0, void 0, function() {
						var t, n, o = this;
						return a(this, function(i) {
							switch (i.label) {
								case 0:
									return t = null, null == (t = c.default()[e]) ? (l.default.getModules().uiControlModule.showMessageBox("敬请期待" + e), [2]) : (this.m_currGameMode = t, null == t.bundle && (console.debug("子包是否已加载", t.name, null != cc.assetManager.bundles.get(t.name)), (n = cc.assetManager.bundles.get(t.name)) && (t.bundle = n)), null != t.bundle ? [3, 2] : (console.log("显示进度"), console.log("进度显示完", t, e), [4, new Promise(function(n) {
										cc.assetManager.loadBundle(t.name, function(i, s) {
											return r(o, void 0, void 0, function() {
												return a(this, function(o) {
													switch (o.label) {
														case 0:
															return i ? (console.error("游戏子包不存在", e), [2]) : (t.bundle = s, [4, this.loadModeOver()]);
														case 1:
															return o.sent(), n(), [2]
													}
												})
											})
										})
									})]));
								case 1:
									return i.sent(), [3, 4];
								case 2:
									return [4, this.loadModeOver()];
								case 3:
									i.sent(), i.label = 4;
								case 4:
									return [2]
							}
						})
					})
				}, t.prototype.getCurrMode = function() {
					return this.m_currGameMode
				}, t.prototype.getCurrModeNeedPower = function() {
					var e = this.m_currGameMode.type;
					return this.getModeNeedPower(e)
				}, t.prototype.getModeNeedPower = function() {
					return 0
				}, t.prototype.getModeInfo = function(e) {
					var t = c.default()[e];
					return t && t.lookVideCount > 0 && (t.currLookedVideoCount = Number(l.default.getServices().localStorageSrv.getStorage("mode-looked-" + t.type) || ""), t.lookVideoUnlockDate = l.default.getServices().localStorageSrv.getStorage("mode-looked-date-" + t.type) || ""), t
				}, t.prototype.addModeLookCount = function(e) {
					var t = c.default()[e];
					t.lookVideCount > 0 && (t.currLookedVideoCount++, l.default.getServices().localStorageSrv.setStorage("mode-looked-" + t.type, t.currLookedVideoCount), l.default.getServices().localStorageSrv.setStorage("mode-looked-date-" + t.type, u.default.getCurrDateDayString()))
				}, t.prototype.returnMainScene = function() {
					return r(this, void 0, void 0, function() {
						return a(this, function(e) {
							switch (e.label) {
								case 0:
									switch (l.default.getModules().uiControlModule.showLoading(), this.m_currGameMode.sceneMode) {
										case c.SCENE_MODE.PREFAB:
											return [3, 1];
										case c.SCENE_MODE.FIRE:
											return [3, 2]
									}
									return [3, 4];
								case 1:
									return this.m_currGameMode.currScenePrefabNode && this.m_currGameMode.currScenePrefabNode.isValid && this.m_currGameMode.currScenePrefabNode.destroy(), this.m_currGameMode.currScenePrefabNode = null, l.default.getModules().uiControlModule.hideLoading(), [3, 4];
								case 2:
									return [4, new Promise(function(e) {
										l.default.loadScene("hall", e)
									})];
								case 3:
									return e.sent(), l.default.getModules().uiControlModule.hideLoading(), [3, 4];
								case 4:
									return [2]
							}
						})
					})
				}, t
			}(s.default);
		n.default = f, cc._RF.pop()
	}, {
		"../../O1ModuleRes/frame/versionNotice": "versionNotice",
		"../configs/gameConfig": "gameConfig",
		"../gameEngine": "gameEngine",
		"../libs/data_control": "data_control",
		"./gameContent/gameMode_json": "gameMode_json",
		"./superManager": "superManager"
	}],
	gameMode_json: [function(e, t, n) {
		"use strict";
		var o, i;
		cc._RF.push(t, "82b55TxVEtEYbSZfd6tVnMG", "gameMode_json"), Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.SCENE_MODE = n.GAME_MODE = void 0,
			function(e) {
				e[e.NORMAL = 0] = "NORMAL", e[e.CUSTOM = 1] = "CUSTOM", e[e.TEST = 2] = "TEST", e[e.DOUBLE = 3] = "DOUBLE", e[e.PAINTED_1 = 4] = "PAINTED_1"
			}(o = n.GAME_MODE || (n.GAME_MODE = {})),
			function(e) {
				e[e.NORMAL = 0] = "NORMAL", e[e.FIRE = 0] = "FIRE", e[e.PREFAB = 1] = "PREFAB"
			}(i = n.SCENE_MODE || (n.SCENE_MODE = {}));
		var r = [{
				type: o.NORMAL,
				name: "normalMode",
				sceneName: "normalMode",
				sceneMode: i.FIRE,
				explain: "闯关模式",
				lookVideCount: 0
			}, {
				type: o.CUSTOM,
				name: "customMode",
				sceneName: "customMode",
				sceneMode: i.FIRE,
				explain: "关卡编辑器",
				lookVideCount: 0
			}, {
				type: o.TEST,
				name: "testMode",
				sceneName: "testMode",
				sceneMode: i.FIRE,
				explain: "测试模式",
				lookVideCount: 0
			}, {
				type: o.DOUBLE,
				name: "doubleMode",
				sceneName: "doubleMode",
				sceneMode: i.FIRE,
				explain: "双舌头模式",
				lookVideCount: 0
			}, {
				type: o.PAINTED_1,
				name: "paintedMode_1",
				sceneName: "paintedMode_1",
				sceneMode: i.FIRE,
				explain: "彩蛋1",
				lookVideCount: 0
			}],
			a = {};
		(function() {
			for (var e = 0; e < r.length; e++) {
				var t = r[e];
				a[t.type] = t
			}
		})(), n.default = function() {
			return a
		}, cc._RF.pop()
	}, {}],
	gameSetting: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "dca3bvwZTZDu6NsE7YdwpM+", "gameSetting");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/gameEngine"),
			s = cc._decorator,
			c = s.ccclass,
			l = s.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.spfArySound = [], t.spfAryVibrate = [], t.spSound = null, t.spVibrate = null, t.Pravacy = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {}, t.prototype.start = function() {
					a.modules().uiControlModule.showHideDialogAnimation(this.node.getChildByName("center"), !0)
				}, t.prototype.onBtnClose = function() {
					var e = this;
					a.managers().soundMgr.playSound("anNiu").then(), a.managers().soundMgr.playVibrate(), a.modules().uiControlModule.showHideDialogAnimation(this.node.getChildByName("center"), !1, function() {
						e.node.destroy()
					})
				}, t.prototype.onBtnSwitchSet = function(e, t) {
					switch (t) {
						case "sound":
							a.managers().soundMgr.setSoundEnabled(!a.managers().soundMgr.isSoundEnabled());
							break;
						case "vibrate":
							a.managers().soundMgr.setVibrateEnabled(!a.managers().soundMgr.isVibrateEnabled())
					}
					a.managers().soundMgr.playSound("anNiu").then(), a.managers().soundMgr.playVibrate()
				}, t.prototype.update = function() {
					this.spSound.spriteFrame = this.spfArySound[Number(a.managers().soundMgr.isSoundEnabled())], this.spVibrate.spriteFrame = this.spfAryVibrate[Number(a.managers().soundMgr.isVibrateEnabled())]
				}, t.prototype.onBtnPrivacy = function() {
					this.Pravacy.active = !0
				}, r([l({
					type: [cc.SpriteFrame],
					displayName: "音效开关精灵帧"
				})], t.prototype, "spfArySound", void 0), r([l({
					type: [cc.SpriteFrame],
					displayName: "振动开关精灵帧"
				})], t.prototype, "spfAryVibrate", void 0), r([l(cc.Sprite)], t.prototype, "spSound", void 0), r([l(cc.Sprite)], t.prototype, "spVibrate", void 0), r([l({
					type: cc.Node,
					displayName: "个人隐私"
				})], t.prototype, "Pravacy", void 0), r([c], t)
			}(cc.Component);
		n.default = u, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine"
	}],
	gameWebSocketModule: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "2d0fcx7v2lFrJeGz9OMwl6q", "gameWebSocketModule");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			a = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.HandleMessage = void 0;
		var s = e("./gameWebSocketContent/messageConfig"),
			c = e("./superModule"),
			l = function() {};
		n.HandleMessage = l;
		var u = function(e) {
			function t() {
				var t = e.call(this) || this;
				return t.m_className = "webSocket网络模块", t.m_socketUrl = "", t.m_ws = null, t.m_message = new l, t
			}
			return i(t, e), t.prototype.preLoadModules = function() {
				return r(this, void 0, Promise, function() {
					return a(this, function(t) {
						switch (t.label) {
							case 0:
								return [4, e.prototype.preLoadModules.call(this)];
							case 1:
								return t.sent(), [2]
						}
					})
				})
			}, t.prototype.loadModule = function() {
				return r(this, void 0, Promise, function() {
					return a(this, function(t) {
						switch (t.label) {
							case 0:
								return [4, e.prototype.loadModule.call(this)];
							case 1:
								return t.sent(), [2]
						}
					})
				})
			}, t.prototype.connectServer = function() {
				return r(this, void 0, Promise, function() {
					var e = this;
					return a(this, function() {
						return [2, new Promise(function(t) {
							e.m_ws = new WebSocket(e.m_socketUrl), e.m_ws.onclose = e.onWebsocketClose.bind(e), e.m_ws.onmessage = e.onWebsocketMessage.bind(e), e.m_ws.onerror = e.onWebsocketError.bind(e), e.m_ws.onopen = function(n) {
								e.onWebsocketOpen(n), t(!0)
							}
						})]
					})
				})
			}, t.prototype.addMessageOnEvent = function(e, t) {
				null == this.m_message[e] && (this.m_message[e] = []), this.m_message[e].push(t)
			}, t.prototype.removeMessageEvent = function(e, t) {
				if (void 0 === t && (t = null), null != this.m_message[e])
					if (null == t) this.m_message[e].length = 0;
					else {
						var n = this.m_message[e].indexOf(t);
						n >= 0 && this.m_message[e].splice(n, 1)
					}
			}, t.prototype.disconnectServer = function() {
				this.m_ws && this.m_ws.readyState != this.m_ws.CLOSED && this.m_ws.readyState != this.m_ws.CLOSING && this.m_ws.close()
			}, t.prototype.sendMessage = function(e) {
				return null == this.m_ws ? (console.error("#48 未创建Websocket"), !1) : this.m_ws.readyState != this.m_ws.OPEN ? (console.warn("#52 与服务器的连接已断开"), !1) : (console.log("发送数据", e), this.m_ws.send(e), !0)
			}, t.prototype.onWebsocketOpen = function(e) {
				console.log("连接成功", e)
			}, t.prototype.onWebsocketClose = function(e) {
				console.log("服务器关闭", e)
			}, t.prototype.onWebsocketError = function(e) {
				console.log("服务器错误", e)
			}, t.prototype.onWebsocketMessage = function(e) {
				console.log("服务器数据来临", e.data);
				var t = s.messageConf.unPackageMessage(e.data),
					n = t.head,
					o = t.body,
					i = this.m_message[n];
				i && i.length > 0 && i.forEach(function(t) {
					try {
						t(o)
					} catch (e) {
						console.error("#112 错误的回调处理")
					}
				})
			}, t
		}(c.default);
		n.default = u, cc._RF.pop()
	}, {
		"./gameWebSocketContent/messageConfig": "messageConfig",
		"./superModule": "superModule"
	}],
	h5Api: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "8c5b6fpATBMXbIq7jHbcOsG", "h5Api");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			a = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.m_appId = "", t.m_secret = "", t.m_adUnitId = "", t
			}
			return i(t, e), t.prototype.commitRank = function() {
				return r(this, void 0, Promise, function() {
					return a(this, function() {
						return [2, Promise.resolve(!1)]
					})
				})
			}, t.prototype.showRank = function() {
				return r(this, void 0, Promise, function() {
					return a(this, function() {
						return [2, Promise.resolve(!1)]
					})
				})
			}, t.prototype.LocalInBlockCityList = function() {
				return !1
			}, t.prototype.vibrate = function() {
				console.log("h5 振动")
			}, t.getRandNameAndUrl = function() {
				return {
					nickName: "零一侠",
					avatarUrl: null,
					language: "ch",
					gender: 0,
					country: "中国",
					province: "",
					city: ""
				}
			}, t.prototype.validAppId = function() {}, t.prototype.getUserInfo = function(e) {
				e.success && e.success({
					userInfo: t.getRandNameAndUrl()
				})
			}, t.prototype.showToast = function() {}, t.prototype.showLoading = function(e) {
				console.log("h5 显示进度", e)
			}, t.prototype.hideLoading = function() {
				console.log("h5 隐藏进度")
			}, t.prototype.preCreateUnits = function() {}, t.prototype.loadAndShowVideoAd = function(e, t, n, o) {
				console.log('1111',e, t, n, o);
				GVAdBreak(function(){
					e && e(), n && n();
				});
			}, t.prototype.authorize = function(e) {
				e.success && e.success()
			}, t.prototype.login = function(e) {
				e.success && e.success({
					code: null
				})
			}, t.prototype.gameRecordStart = function(e, t) {
				console.log("h5 录屏start"), t && t(null)
			}, t.prototype.gameRecordStop = function() {
				return console.log("h5 录屏stop"), !0
			}, t.prototype.shareGameRecordVideo = function(e) {
				console.log("h5 分享录屏"), e && e()
			}, t.prototype.isProduction = function() {
				return t.isProduction()
			}, t.prototype.isHaveShareVideo = function() {
				return !0
			}, t.prototype.reportAnalytics = function() {
				console.log("h5 发送埋点")
			}, t.prototype.clearMemory = function() {}, t.prototype.shareAppMessage = function() {}, t.prototype.operateGameLive = function() {}, t.isProduction = function() {
				return !0
			}, t.prototype.createMoreGameBtn = function() {}, t.prototype.hideBanner = function() {}, t.prototype.showBannerAD = function() {}, t.prototype.showInterstitialAd = function() {}, t.prototype.showNativeAd = function() {}, t.prototype.reportAdClickNativeAd = function() {}, t.prototype.addShortcut = function() {
				return console.log("h5 添加桌面"), Promise.resolve(!0)
			}, t.prototype.drawUrlImage = function(e, t) {
				cc.assetManager.loadRemote(e, function(e, n) {
					if (e) return console.error("#1553937 图片出错", e), void t(null);
					t(new cc.SpriteFrame(n))
				})
			}, t.prototype.showVideo = function() {}, t.prototype.getShareVideoRank = function(e, t) {}, t.prototype.subscribeMessage = function() {}, t.prototype.showAddFavoriteGuide = function() {}, t.prototype.PlayLastRecordSound = function(e, t) {
				setTimeout(function() {
					t && t()
				}, 1e3)
			}, t.prototype.StartRecordSound = function() {}, t.prototype.StopRecordSound = function(e) {
				setTimeout(function() {
					e && e()
				}, 1e3)
			}, t.prototype.showModal = function(e) {
				console.log("h5 对话框", e)
			}, t.prototype.navigateToMiniGame = function(e, t) {
				console.log("h5 跳转到其他小游戏", e), t && t()
			}, t.prototype.WidgetfullScreen = function() {
				cc.director.getScene().getChildByName("Canvas").getComponent(cc.Canvas).fitHeight = !0
			}, t
		}(e("../miniApp").default);
		n.default = s, cc._RF.pop()
	}, {
		"../miniApp": "miniApp"
	}],
	hall: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "3479d0y2TtLFom7ScGAqe3j", "hall");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../engines/configs/gameConfig"),
			s = e("../engines/gameEngine"),
			c = e("../engines/managers/gameContent/gameMode_json"),
			l = e("../engines/services/userContent/userInterface"),
			u = e("../Game/Enum"),
			d = e("../Game/MainRoot"),
			p = cc._decorator,
			f = p.ccclass,
			h = (p.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.isClickMenu = !1, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					d.default.GameObjSystem.loadPrefabs(), console.log("<hall> 场景", cc.sys.platform), s.managers().soundMgr.Volume = 0, cc.tween(s.managers().soundMgr).to(1.5, {
						Volume: 1
					}).start(), s.managers().soundMgr.playMusic("bgm"), s.services().miniGameSrv.getAppApiInstance().gameRecordStop(), cc.systemEvent.on("keydown", this.onKeyDown, this)
				}, t.prototype.onKeyDown = function(e) {
					console.info(e.keyCode), e.keyCode == cc.macro.KEY.left ? cc.log("向左一步") : e.keyCode == cc.macro.KEY.right && cc.log("向you一步")
				}, t.prototype.onBtnStart = function(e, t) {
					var n = Number(t);
					if (s.services().userSrv.getPower() - a.default.MODE_POWER[n] < 0) s.modules().uiControlModule.showUserPropGet(l.REWARD_TYPE.POWER, a.default.ADD_ONCE_POWER);
					else {
						d.default.GotTips = !1;
						var o = d.default.LevelSystem.GetSignleLevelInfo(n).bundleName;
						s.services().userSrv.setPower(-a.default.MODE_POWER[n], !0, !0), d.default.LevelSystem.LoadLevel(o, n)
					}
				}, t.prototype.OnBtnLevelMenu = function(e, t) {
					var n = this;
					if (!this.isClickMenu) {
						this.isClickMenu = !0, this.scheduleOnce(function() {
							n.isClickMenu = !1
						}, .2);
						var o = {
							mode: Number(t)
						};
						d.default.UISystem.OpenPage(u.PAGE.LEVELMENU, o)
					}
				}, t.prototype.OnBtnInfinity = function() {
					s.managers().soundMgr.playSound("anNiu"), s.modules().uiControlModule.showInfinityPower(1, null)
				}, t.prototype.onBtnSeting = function() {
					s.default.getManagers().soundMgr.playSound("anNiu").then(), s.default.getModules().uiControlModule.showFramePrefab("preload/control/gameSetting", null, !1, function() {})
				}, t.prototype.onDestroy = function() {
					cc.tween(s.managers().soundMgr).to(.8, {
						Volume: 0
					}).call(function() {
						cc.tween(s.managers().soundMgr).to(.8, {
							Volume: 1
						}).start()
					}).start()
				}, t.prototype.onBtnCustom = function() {
					s.default.getManagers().gameMgr.selectMode(c.GAME_MODE.CUSTOM)
				}, t.prototype.OnBtnSkinMenu = function() {
					s.default.getManagers().soundMgr.playSound("anNiu").then();
					var e = {
						mode: c.GAME_MODE.NORMAL
					};
					d.default.UISystem.OpenPage(u.PAGE.SKINPAGE, e)
				}, t.PlatFrom = "", t.FirstIn = !1, r([f], t)
			}(cc.Component));
		n.default = h, cc._RF.pop()
	}, {
		"../Game/Enum": "Enum",
		"../Game/MainRoot": "MainRoot",
		"../engines/configs/gameConfig": "gameConfig",
		"../engines/gameEngine": "gameEngine",
		"../engines/managers/gameContent/gameMode_json": "gameMode_json",
		"../engines/services/userContent/userInterface": "userInterface"
	}],
	infinitypower: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "a27447LHA5Kz6caGFilUah5", "infinitypower");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../engines/gameEngine"),
			s = e("../engines/services/userContent/userInterface"),
			c = e("../engines/configs/gameConfig"),
			l = e("../engines/libs/data_control"),
			u = e("../OppoScripts/NativeSys/NativeSys"),
			d = cc._decorator,
			p = d.ccclass,
			f = d.property,
			h = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.detail = null, t.looktimeLabel = null, t.lbMessageExplain = null, t.showInfoLabel = null, t.RewardView = null, t.Reward = null, t.InfinityModel = "user-is-infinity", t
				}
				var n;
				return i(t, e), n = t, t.prototype.onLoad = function() {
					this.UpdateLookLabel(), u.default.ShowNative(c.default.SECOND_NATIVE)
				}, t.prototype.start = function() {
					a.modules().uiControlModule.showHideDialogAnimation(this.detail, !0), this.showInfoLabel.string = "欣赏" + c.default.INFINTY_VIDEO_TIME + "次视频获取" + l.default.MinusToHours(c.default.INFINITY_POWER_VIDEO_HAND_TIME) + "无限体力"
				}, t.prototype.OnNoLookBtn = function() {
					a.default.getManagers().soundMgr.playSound("anNiu").then(), this.onClose()
				}, t.prototype.OnLookBtn = function() {
					console.log('2222');
					var e = this;
					a.default.getManagers().soundMgr.playSound("anNiu").then(), n.lookedTimes < c.default.INFINTY_VIDEO_TIME && a.default.getServices().miniGameSrv.getAppApiInstance().loadAndShowVideoAd(function() {
						n.lookedTimes++, e.UpdateLookLabel(), n.lookedTimes == c.default.INFINTY_VIDEO_TIME && (a.default.getServices().userSrv.setPower(999, !0, !0), a.default.getServices().localStorageSrv.setStorage(e.InfinityModel, 1), a.default.getModules().uiControlModule.showGetRewarded(s.REWARD_TYPE.POWER, 999, "获得体力"), e.onClose())
					}, function() {}, null, "解锁无限体力")
				}, t.prototype.onClose = function() {
					var e = this;
					a.modules().uiControlModule.showHideDialogAnimation(this.detail, !1, function() {
						e.node.destroy()
					})
				}, t.prototype.UpdateLookLabel = function() {
					this.looktimeLabel && (this.looktimeLabel.string = "(" + n.lookedTimes.toString() + "/" + c.default.INFINTY_VIDEO_TIME + ")")
				}, t.lookedTimes = 0, r([f(cc.Node)], t.prototype, "detail", void 0), r([f(cc.Label)], t.prototype, "looktimeLabel", void 0), r([f(cc.Label)], t.prototype, "lbMessageExplain", void 0), r([f({
					type: cc.Label,
					displayName: "获取信息展示"
				})], t.prototype, "showInfoLabel", void 0), r([f(cc.Prefab)], t.prototype, "RewardView", void 0), r([f(cc.Node)], t.prototype, "Reward", void 0), n = r([p], t)
			}(cc.Component);
		n.default = h, cc._RF.pop()
	}, {
		"../OppoScripts/NativeSys/NativeSys": "NativeSys",
		"../engines/configs/gameConfig": "gameConfig",
		"../engines/gameEngine": "gameEngine",
		"../engines/libs/data_control": "data_control",
		"../engines/services/userContent/userInterface": "userInterface"
	}],
	inteface: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "e05ecmP57pP3ZouGIblNLY2", "inteface"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), cc._RF.pop()
	}, {}],
	loadConfig_json: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "68e93Sp6xJCw5i9EczguDOA", "loadConfig_json"), Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.RESOURCES_TYPE = void 0,
			function(e) {
				e[e.BUNDLE = 0] = "BUNDLE", e[e.ASSETS = 1] = "ASSETS", e[e.SCENE = 2] = "SCENE"
			}(n.RESOURCES_TYPE || (n.RESOURCES_TYPE = {})), cc._RF.pop()
	}, {}],
	loading: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "603a3rAJkNDyosE9QpKwHRN", "loading");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			},
			a = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			s = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var c = e("../engines/gameEngine"),
			l = e("./loading/loadConfig_json"),
			u = e("../engines/configs/gameConfig"),
			d = e("../O1ModuleRes/frame/logScreen"),
			p = e("../OppoScripts/person/PersonalInfo"),
			f = cc._decorator,
			h = f.ccclass,
			m = f.property,
			y = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.pmPreLoadScenes = !0, t.pmLoadBar = null, t.pmSonLoadBar = null, t.isShowSonBar = !0, t.sonLoadCount = 100, t.pmLoadLabel = null, t.ndRealNameAtt = null, t.Personal = null, t.m_allPreloadResources = [], t
				}
				return i(t, e), t.prototype.start = function() {
					this.ndRealNameAtt && (this.ndRealNameAtt.active = !1)
				}, t.prototype.onLoad = function() {
					console.log("<loading> 场景"), this.pmLoadBar.progress = 0, this.pmLoadLabel.string = "正在初始化", this.pmSonLoadBar.progress = 0, this.pmSonLoadBar.node.active = this.isShowSonBar, this.loadPackages()
				}, t.prototype.loadPackages = function() {
					var e = this;
					this.loadSubpackages().then(function() {
						var t = c.managers().gameMgr.getMainSceneNameAndLoadBundle();
						"string" == typeof t ? e.preLoadSceneOver(t) : e.preLoadSceneOver(t.sceneName)
					})
				}, t.prototype.onAddLogServiceNode = function() {
					return a(this, void 0, Promise, function() {
						return s(this, function() {
							return [2, new Promise(function(e) {
								u.default.LOG_SERVICE_OPEN && u.default.SCREEN_LOG_SWITCH ? c.modules().uiControlModule.showFramePrefab("preload/frame/logScreen", c.default.Canvas().parent, !1, function(t) {
									c.services().logSrv.addScreenPrint(t.getComponent(d.default)), e()
								}) : e()
							})]
						})
					})
				}, t.prototype.loadSubpackages = function() {
					return a(this, void 0, void 0, function() {
						return s(this, function(e) {
							switch (e.label) {
								case 0:
									return [4, c.default.loadAll()];
								case 1:
									return e.sent(), [4, this.loadAllPreloadResources()];
								case 2:
									return e.sent(), [4, this.onAddLogServiceNode()];
								case 3:
									return e.sent(), [2, Promise.resolve()]
							}
						})
					})
				}, t.prototype.initPreloadResources = function() {
					this.m_allPreloadResources = [], this.m_allPreloadResources.push({
						resourcesType: l.RESOURCES_TYPE.BUNDLE,
						resPathOrName: c.modules().uiControlModule.getFrameBundlePath(),
						loadText: "加载框架包",
						onBundleLoaded: function(e) {
							c.modules().uiControlModule.setFrameBundle(e)
						}
					}), this.m_allPreloadResources.push({
						resourcesType: l.RESOURCES_TYPE.ASSETS,
						resPathOrName: c.modules().uiControlModule.getFrameBundlePreloadResPath(),
						loadText: "加载框架资源",
						bundle: function() {
							return c.modules().uiControlModule.getFrameBundle()
						}
					}), this.m_allPreloadResources.push({
						resourcesType: l.RESOURCES_TYPE.BUNDLE,
						resPathOrName: c.modules().uiControlModule.getGameBundlePath(),
						loadText: "加载游戏公共包",
						onBundleLoaded: function(e) {
							c.modules().uiControlModule.setGameBundle(e)
						}
					}), this.m_allPreloadResources.push({
						resourcesType: l.RESOURCES_TYPE.ASSETS,
						resPathOrName: c.modules().uiControlModule.getGameBundlePreloadResPath(),
						loadText: "加载游戏资源",
						bundle: function() {
							return c.modules().uiControlModule.getGameBundle()
						}
					}), this.m_allPreloadResources.push({
						resourcesType: l.RESOURCES_TYPE.BUNDLE,
						resPathOrName: "hall",
						loadText: "加载总场景包"
					});
					var e = c.managers().gameMgr.getMainSceneNameAndLoadBundle();
					if (null == e && console.error("#69 主场景配置错误"), "hall" === e) this.m_allPreloadResources.push({
						resourcesType: l.RESOURCES_TYPE.SCENE,
						resPathOrName: e,
						loadText: "加载主场景"
					});
					else {
						var t = e;
						this.m_allPreloadResources.push({
							resourcesType: l.RESOURCES_TYPE.BUNDLE,
							resPathOrName: t.name,
							loadText: "加载主场景包",
							onBundleLoaded: function(e) {
								t.bundle = e, c.managers().gameMgr.setMainModeLoaded(t)
							}
						}), this.m_allPreloadResources.push({
							resourcesType: l.RESOURCES_TYPE.SCENE,
							resPathOrName: t.sceneName,
							loadText: "加载主场景资源"
						})
					}
				}, t.prototype.loadAllPreloadResources = function() {
					return a(this, void 0, Promise, function() {
						return s(this, function(e) {
							switch (e.label) {
								case 0:
									return this.initPreloadResources(), [4, this.startPreloadResources()];
								case 1:
									return e.sent(), [2, Promise.resolve()]
							}
						})
					})
				}, t.prototype.startPreloadResources = function() {
					return a(this, void 0, Promise, function() {
						var e, t, n, o;
						return s(this, function(i) {
							switch (i.label) {
								case 0:
									e = this.m_allPreloadResources.length, t = 0, i.label = 1;
								case 1:
									return t < e ? (n = this.m_allPreloadResources[t], o = t / e, this.setLoadProgress(o, n.loadText), [4, this.preloadOneResources(n, o)]) : [3, 4];
								case 2:
									i.sent(), i.label = 3;
								case 3:
									return t++, [3, 1];
								case 4:
									return [2, Promise.resolve()]
							}
						})
					})
				}, t.prototype.preloadOneResources = function(e, t) {
					return a(this, void 0, Promise, function() {
						var n = this;
						return s(this, function() {
							return [2, new Promise(function(o) {
								var i = e.resourcesType,
									r = e.resPathOrName,
									a = e.bundle,
									s = e.onBundleLoaded,
									c = e.onComplete;
								switch (i) {
									case l.RESOURCES_TYPE.BUNDLE:
										console.warn("预备加载分包", e.resPathOrName), cc.assetManager.loadBundle(r, function(t, n) {
											t ? console.error("分包加载错误", t) : (console.warn("加载分包完成", e.resPathOrName), s && s(n), o())
										});
										break;
									case l.RESOURCES_TYPE.ASSETS:
										a().loadDir(r, function(e, o) {
											n.setSonLoadProgress(e / o, t)
										}, function(e, t) {
											c && c(e, t), o()
										});
										break;
									case l.RESOURCES_TYPE.SCENE:
										cc.director.preloadScene(r, function(e, o) {
											n.setSonLoadProgress(e / o, t)
										}, function() {
											o()
										})
								}
							})]
						})
					})
				}, t.prototype.preLoadSceneOver = function(e) {
					this.Personal.node.active = !1;
					c.default.loadScene(e, function() {
						c.default.getManagers().gameMgr.onGameRun()
					})
				}, t.prototype.setSonLoadProgress = function(e, t) {
					this.pmSonLoadBar.progress = e;
					var n = this.m_allPreloadResources.length;
					this.setLoadProgress(t + e / n)
				}, t.prototype.setLoadProgress = function(e, t) {
					this.pmLoadBar.progress = e, t && (this.pmLoadLabel.string = t + "(" + (99.99 * e).toFixed(2) + "%)")
				}, r([m({
					displayName: "预加载场景",
					tooltip: "是否预先加载大厅和游戏场景"
				})], t.prototype, "pmPreLoadScenes", void 0), r([m({
					type: cc.ProgressBar,
					displayName: "进度条"
				})], t.prototype, "pmLoadBar", void 0), r([m({
					type: cc.ProgressBar,
					displayName: "子进度条"
				})], t.prototype, "pmSonLoadBar", void 0), r([m({
					displayName: "是否显示子进度条"
				})], t.prototype, "isShowSonBar", void 0), r([m({
					displayName: "子进度条加载条数"
				})], t.prototype, "sonLoadCount", void 0), r([m({
					type: cc.Label,
					displayName: "进度文字"
				})], t.prototype, "pmLoadLabel", void 0), r([m({
					type: cc.Node,
					displayName: "实名认证节点"
				})], t.prototype, "ndRealNameAtt", void 0), r([m({
					type: p.default,
					displayName: "个人"
				})], t.prototype, "Personal", void 0), r([h], t)
			}(cc.Component);
		n.default = y, cc._RF.pop()
	}, {
		"../O1ModuleRes/frame/logScreen": "logScreen",
		"../OppoScripts/person/PersonalInfo": "PersonalInfo",
		"../engines/configs/gameConfig": "gameConfig",
		"../engines/gameEngine": "gameEngine",
		"./loading/loadConfig_json": "loadConfig_json"
	}],
	localStorageService: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "9ba941av6lGZ6N6Qm4R8rVa", "localStorageService");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			a = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.LOCAL_STORAGE_VERSION = void 0;
		var s = e("./superService");
		n.LOCAL_STORAGE_VERSION = "1.0.0.01261542";
		var c = function(e) {
			function t() {
				var t = e.call(this) || this;
				return t.className = "本地缓存服务", t
			}
			return i(t, e), t.prototype.loadService = function() {
				return r(this, void 0, Promise, function() {
					return a(this, function(t) {
						switch (t.label) {
							case 0:
								return [4, e.prototype.loadService.call(this)];
							case 1:
								return t.sent(), this.newVersionCheck(), [2, Promise.resolve()]
						}
					})
				})
			}, t.prototype.setStorage = function(e, t, n) {
				void 0 === n && (n = !0);
				var o = this.getKey(e, n),
					i = t;
				cc.sys.localStorage.setItem(o, i)
			}, t.prototype.getStorage = function(e, t) {
				void 0 === t && (t = !0);
				var n = this.getKey(e, t);
				return cc.sys.localStorage.getItem(n)
			}, t.prototype.newVersionCheck = function() {
				this.isVersionAlso() || (this.clearAllStorage(), this.setLocalVersion(n.LOCAL_STORAGE_VERSION))
			}, t.prototype.getLocalVersion = function() {
				return cc.sys.localStorage.getItem("localVersion")
			}, t.prototype.setLocalVersion = function(e) {
				cc.sys.localStorage.setItem("localVersion", e)
			}, t.prototype.isVersionAlso = function() {
				return this.getLocalVersion() == n.LOCAL_STORAGE_VERSION
			}, t.prototype.clearAllStorage = function() {
				cc.sys.localStorage.clear()
			}, t.prototype.getKey = function(e, t) {
				return t ? n.LOCAL_STORAGE_VERSION + "-" + e : e
			}, t
		}(s.default);
		n.default = c, cc._RF.pop()
	}, {
		"./superService": "superService"
	}],
	logConfig: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "1a1c0APdr9EKpaXyrPKFSnf", "logConfig"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.DEEP_NEXT_SPLIT = n.LINE_SPLIT_END_RIGHT = n.LINE_SPLIT_END_LEFT = n.LINE_SPLIT_START_RIGHT = n.LINE_SPLIT_START_LEFT = void 0, n.LINE_SPLIT_START_LEFT = "┏━━━━━━━━━", n.LINE_SPLIT_START_RIGHT = "━━━━━━━━━┓", n.LINE_SPLIT_END_LEFT = "┗━━━━━━━━━", n.LINE_SPLIT_END_RIGHT = "━━━━━━━━━┛", n.DEEP_NEXT_SPLIT = "┣", cc._RF.pop()
	}, {}],
	logScreen: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "69cdetEISRLoYxGWYk51AP6", "logScreen");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../control/btButton"),
			s = cc._decorator,
			c = s.ccclass,
			l = s.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.ndUiLayer = null, t.btShowHide = null, t.ndList = null, t.ndText = null, t.sOpacity = null, t.maxCount = 1e3, t.m_newFps = !1, t
				}
				return i(t, e), t.prototype.addLog = function(e, t) {
					var n = this,
						o = e,
						i = cc.instantiate(this.ndText);
					if (this.ndList.addChild(i), i.color = t, i.getComponent(cc.Label).string = o, this.ndList.childrenCount > this.maxCount)
						for (var r = 0; r < this.maxCount / 2; r++) this.ndList.children[r].destroy();
					this.m_newFps = !0, this.unscheduleAllCallbacks(), this.scheduleOnce(function() {
						n.onScrollDown()
					})
				}, t.prototype.onLoad = function() {}, t.prototype.start = function() {
					cc.game.addPersistRootNode(this.node)
				}, t.prototype.onScrollUp = function(e) {
					if (!(this.ndList.height < this.node.height)) {
						var t = this.node.height / 2;
						e && (t = Math.max(t, this.ndList.y - .15 * this.node.height)), cc.tween(this.ndList).to(.5, {
							y: t
						}, {
							easing: "cubicOut"
						}).start()
					}
				}, t.prototype.onScrollDown = function(e) {
					if (!(this.ndList.height < this.node.height)) {
						var t = this.node.height / 2 + (this.ndList.height - this.node.height);
						e && (t = Math.min(t, this.ndList.y + .15 * this.node.height)), cc.tween(this.ndList).to(.5, {
							y: t
						}, {
							easing: "cubicOut"
						}).start()
					}
				}, t.prototype.onBtnUp = function() {
					this.ndList.height < this.node.height || this.onScrollUp(!0)
				}, t.prototype.onBtnDown = function() {
					this.ndList.height < this.node.height || this.onScrollDown(!0)
				}, t.prototype.onBtnShowHide = function() {
					this.ndList.active = !this.ndList.active, this.ndUiLayer.active = !this.ndUiLayer.active, this.btShowHide.setButtonText(this.ndList.active ? "隐" : "显"), this.ndList.active && this.onScrollDown()
				}, t.prototype.onBtnClear = function() {
					this.ndList.destroyAllChildren()
				}, t.prototype.onSetOpacity = function() {
					this.ndList.opacity = 20 + 235 * this.sOpacity.progress
				}, t.prototype.update = function() {
					this.m_newFps && this.onScrollDown(), this.m_newFps = !1
				}, r([l(cc.Node)], t.prototype, "ndUiLayer", void 0), r([l(a.default)], t.prototype, "btShowHide", void 0), r([l(cc.Node)], t.prototype, "ndList", void 0), r([l(cc.Node)], t.prototype, "ndText", void 0), r([l(cc.Slider)], t.prototype, "sOpacity", void 0), r([l()], t.prototype, "maxCount", void 0), r([c], t)
			}(cc.Component);
		n.default = u, cc._RF.pop()
	}, {
		"../control/btButton": "btButton"
	}],
	logService: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "29d69mJwcND34xgZpSpnvrH", "logService");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			a = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			},
			s = this && this.__spreadArrays || function() {
				for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
				var o = Array(e),
					i = 0;
				for (t = 0; t < n; t++)
					for (var r = arguments[t], a = 0, s = r.length; a < s; a++, i++) o[i] = r[a];
				return o
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.LOG_LEVEL = void 0;
		var c, l = e("./superService"),
			u = e("../configs/gameConfig");
		(function(e) {
			e[e.debug = 0] = "debug", e[e.log = 1] = "log", e[e.info = 2] = "info", e[e.warn = 3] = "warn", e[e.error = 4] = "error", e[e.empty = 5] = "empty"
		})(c = n.LOG_LEVEL || (n.LOG_LEVEL = {}));
		var d = function(e) {
			function t() {
				var t = e.call(this) || this;
				return t.className = "日志服务", t.m_logLevel = c.debug, t.m_screenLog = null, t.m_needPrintText = [], t
			}
			return i(t, e), t.prototype.loadService = function() {
				return r(this, void 0, Promise, function() {
					return a(this, function(t) {
						switch (t.label) {
							case 0:
								return [4, e.prototype.loadService.call(this)];
							case 1:
								return t.sent(), u.default.LOG_SERVICE_OPEN ? (this.m_logLevel = u.default.CONSOLE_LOG_LEVEL, this.registerConsoleAgent(), [2]) : [2, Promise.resolve()]
						}
					})
				})
			}, t.prototype.registerConsoleAgent = function() {
				this.m_debug = console.debug, this.m_log = console.log, this.m_info = console.info, this.m_warn = console.warn, this.m_error = console.error, console.error = this.onScreenPrint.bind(this, c.error), console.warn = this.onScreenPrint.bind(this, c.warn), console.info = this.onScreenPrint.bind(this, c.info), console.log = this.onScreenPrint.bind(this, c.log), console.debug = this.onScreenPrint.bind(this, c.debug)
			}, t.prototype.onScreenPrint = function(e) {
				for (var t = this, n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
				var i = cc.Color.WHITE,
					r = "",
					a = new Date,
					l = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds() + "." + a.getTime() % 1e3;
				switch (e) {
					case c.empty:
						break;
					case c.error:
						this.m_error.apply(this, s([r], n)), r = "[ERROR]", r += l + ":", i = cc.color(238, 0, 0);
						break;
					case c.warn:
						r = "[WARN]", r += l + ":", this.m_warn.apply(this, s([r], n)), i = cc.color(238, 238, 0);
						break;
					case c.info:
						r = "[INFO]", r += l + ":", this.m_info.apply(this, s([r], n)), i = cc.color(0, 238, 0);
						break;
					case c.log:
						r = "[LOG]", r += l + ":", this.m_log.apply(this, s([r], n)), i = cc.color(255, 255, 255);
						break;
					case c.debug:
						r = "[DEBUG]", r += l + ":", this.m_debug.apply(this, s([r], n)), i = cc.color(204, 204, 204)
				}
				n.forEach(function(e) {
					if ("object" == typeof e) try {
						r += JSON.stringify(e)
					} catch (t) {
						r += e.toString()
					} else r += e
				}), this.m_screenLog ? (this.m_needPrintText.length > 0 && (this.m_needPrintText.forEach(function(e) {
					t.m_screenLog.addLog(e.text, e.color)
				}), this.m_needPrintText.length = 0), this.m_screenLog.addLog(r, i)) : this.m_needPrintText.push({
					text: r,
					color: i
				})
			}, t.prototype.addScreenPrint = function(e) {
				this.m_screenLog = e
			}, t
		}(l.default);
		n.default = d, cc._RF.pop()
	}, {
		"../configs/gameConfig": "gameConfig",
		"./superService": "superService"
	}],
	messageConfig: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "9849bfhgCFAhpGc5oJpPAIP", "messageConfig"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.messageConf = void 0, n.messageConf = {
			MESSAGE_SPLIT: ".",
			MESSAGE_HEAD: {
				COME: "come",
				OUT: "out",
				TALK: "talk",
				PEOPLE: "people"
			},
			packageMessage: function(e, t) {
				return "" + e + this.MESSAGE_SPLIT + t
			},
			unPackageMessage: function(e) {
				var t = e.split(this.MESSAGE_SPLIT);
				return {
					head: t[0],
					body: t[1]
				}
			},
			talkObject: {
				name: "",
				time: "",
				messageText: ""
			}
		}, cc._RF.pop()
	}, {}],
	miniApp: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "daa809nnc5KgKqhMK4RMJkC", "miniApp");
		var o, i = this && this.__extends || (o = function(e, t) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
				})(e, t)
		}, function(e, t) {
			function n() {
				this.constructor = e
			}
			o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
		});
		Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.VIBRATE_TYPE = n.analyticsLookVideo = n.analyticsBase = n.SHARE_VIDEO_SORT_TYPE = void 0,
			function(e) {
				e[e.HOT = 0] = "HOT", e[e.TIME = 1] = "TIME"
			}(n.SHARE_VIDEO_SORT_TYPE || (n.SHARE_VIDEO_SORT_TYPE = {}));
		var r = function() {
			function e(e) {
				this.key = e
			}
			return e.prototype.getKey = function() {
				return this.key
			}, e.prototype.getObj = function() {
				return this.obj
			}, e.prototype.setObj = function(e) {
				this.obj = JSON.parse(JSON.stringify(e))
			}, e
		}();
		n.analyticsBase = r;
		var a = function(e) {
			function t(t) {
				var n = e.call(this, "lookVideo") || this;
				return n.obj = {
					src: t
				}, n
			}
			return i(t, e), t
		}(r);
		n.analyticsLookVideo = a,
			function(e) {
				e[e.LONG = 0] = "LONG", e[e.SHORT = 1] = "SHORT"
			}(n.VIBRATE_TYPE || (n.VIBRATE_TYPE = {}));
		var s = function() {
			function e() {}
			return e.isProduction = function() {
				return !0
			}, e
		}();
		n.default = s, cc._RF.pop()
	}, {}],
	miniGameService: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "2e194elcZdNKLonXGnWTekM", "miniGameService");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			a = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = e("./superService"),
			c = e("./miniGameContent/h5/h5Api"),
			u = e("./miniGameContent/native/native"),
			h = function(e) {
				function t() {
					var n = e.call(this) || this;
					n.className = "游戏平台服务", n.m_miniApp = null;
					t.m_MiniAppClass = c.default;
					return n
				}
				return i(t, e), t.prototype.loadService = function() {
					return r(this, void 0, Promise, function() {
						return a(this, function(n) {
							switch (n.label) {
								case 0:
									return [4, e.prototype.loadService.call(this)];
								case 1:
									return n.sent(), this.m_miniApp = new t.m_MiniAppClass, this.m_miniApp.validAppId(), this.m_miniApp.preCreateUnits(), [2, Promise.resolve()]
							}
						})
					})
				}, t.prototype.getAppApiInstance = function() {
					return this.m_miniApp
				}, t.getMiniGameAppStatic = function() {
					return t.m_MiniAppClass
				}, t.m_MiniAppClass = null, t
			}(s.default);
		n.default = h, cc._RF.pop()
	}, {
		"./miniGameContent/h5/h5Api": "h5Api",
		"./miniGameContent/native/native": "native",
		"./superService": "superService"
	}],
	miniParam: [function(e, t, n) {
		"use strict";

		function o(e, t) {
			var n = [];
			n = "string" == typeof t ? [t] : [].concat(t);
			var o = {};
			for (var i in o.key = e.key, o.obj = {}, e.data) {
				var r = e.data[i];
				o.obj[r] = n.shift()
			}
			return o
		}
		cc._RF.push(t, "610cbP2IV5IpLCGWct8fXSG", "miniParam"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.getVideoFailLoadOrShow = n.getAddShortcutReportData = n.getLookVideoFailShareReportData = n.getShareGameRecordReportData = n.getLookVideoReportData = n.getBeforeCloseVideoReportData = n.getShowVideoReportData = n.getLoadVideoReportData = n.ADD_SHORTCUT = n.VIDEO_FAIL_LOAD_OR_SHOW = n.LOOK_VIDEO_FAIL_TO_SHARE = n.SHARE_GAME_RECORD = n.LOOK_VIDEO = n.BEFORE_CLOSE_VIDEO = n.SHOW_VIDEO = n.LOAD_VIDEO = void 0, n.LOAD_VIDEO = {
			key: "loadVideo",
			data: ["source"]
		}, n.SHOW_VIDEO = {
			key: "showVideo",
			data: ["source"]
		}, n.BEFORE_CLOSE_VIDEO = {
			key: "beforeCloseVideo",
			data: ["source"]
		}, n.LOOK_VIDEO = {
			key: "lookVideo",
			data: ["source"]
		}, n.SHARE_GAME_RECORD = {
			key: "shareGameRecord",
			data: ["explain"]
		}, n.LOOK_VIDEO_FAIL_TO_SHARE = {
			key: "lookVideoFailToShare",
			data: ["explain"]
		}, n.VIDEO_FAIL_LOAD_OR_SHOW = {
			key: "videoFailLoadOrShow",
			data: ["code", "msg"]
		}, n.ADD_SHORTCUT = {
			key: "addShortcut",
			data: ["explain"]
		}, n.getLoadVideoReportData = function(e) {
			return o(n.LOAD_VIDEO, e)
		}, n.getShowVideoReportData = function(e) {
			return o(n.SHOW_VIDEO, e)
		}, n.getBeforeCloseVideoReportData = function(e) {
			return o(n.BEFORE_CLOSE_VIDEO, e)
		}, n.getLookVideoReportData = function(e) {
			return o(n.LOOK_VIDEO, e)
		}, n.getShareGameRecordReportData = function(e) {
			return o(n.SHARE_GAME_RECORD, e)
		}, n.getLookVideoFailShareReportData = function(e) {
			return o(n.LOOK_VIDEO_FAIL_TO_SHARE, e)
		}, n.getAddShortcutReportData = function(e) {
			return o(n.ADD_SHORTCUT, e)
		}, n.getVideoFailLoadOrShow = function(e) {
			return o(n.VIDEO_FAIL_LOAD_OR_SHOW, e)
		}, cc._RF.pop()
	}, {}],
	native: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "8bc0erOHapBNL45QQzX39t9", "native");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			a = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.m_appId = "205615", t.m_secret = "", t.m_adUnitId = "945669906", t
			}
			return i(t, e), t.prototype.WidgetfullScreen = function() {}, t.prototype.navigateToMiniGame = function() {
				console.error("#23102559 未实现跳转")
			}, t.prototype.drawHead = function() {
				return Promise.resolve(void 0)
			}, t.prototype.fullScreenVideo = function() {
				return r(this, void 0, Promise, function() {
					return a(this, function() {
						switch (cc.sys.os) {
							case cc.sys.OS_ANDROID:
								return [2, Promise.resolve()];
							case cc.sys.OS_IOS:
								return console.log("cocos SDK 调用苹果 全屏视频"), [2, new Promise(function(e) {
									jsb.reflection.callStaticMethod("RootViewController", "loadFullScreenVideo"), e()
								})];
							default:
								return [2, Promise.resolve()]
						}
						return [2]
					})
				})
			}, t.prototype.commitRank = function() {
				return r(this, void 0, Promise, function() {
					return a(this, function() {
						return [2, Promise.resolve(!1)]
					})
				})
			}, t.prototype.showRank = function() {
				return r(this, void 0, Promise, function() {
					return a(this, function() {
						return [2, Promise.resolve(!1)]
					})
				})
			}, t.prototype.LocalInBlockCityList = function() {
				return !1
			}, t.prototype.vibrate = function() {}, t.prototype.showBannerAD = function() {
				throw new Error("Method not implemented.")
			}, t.prototype.hideBanner = function() {
				throw new Error("Method not implemented.")
			}, t.prototype.showInterstitialAd = function() {
				throw new Error("Method not implemented.")
			}, t.prototype.showNativeAd = function() {
				throw new Error("Method not implemented.")
			}, t.prototype.reportAdClickNativeAd = function() {
				throw new Error("Method not implemented.")
			}, t.prototype.createMoreGameBtn = function() {
				throw new Error("Method not implemented.")
			}, t.prototype.addShortcut = function() {
				throw new Error("Method not implemented.")
			}, t.prototype.operateGameLive = function() {
				throw new Error("Method not implemented.")
			}, t.prototype.getShareVideoRank = function() {
				throw new Error("Method not implemented.")
			}, t.prototype.drawUrlImage = function() {
				throw new Error("Method not implemented.")
			}, t.prototype.showVideo = function() {
				throw new Error("Method not implemented.")
			}, t.prototype.subscribeMessage = function() {
				throw new Error("Method not implemented.")
			}, t.prototype.showAddFavoriteGuide = function() {
				throw new Error("Method not implemented.")
			}, t.prototype.StartRecordSound = function() {
				throw new Error("Method not implemented.")
			}, t.prototype.StopRecordSound = function() {
				throw new Error("Method not implemented.")
			}, t.prototype.PlayLastRecordSound = function() {
				throw new Error("Method not implemented.")
			}, t.getRandNameAndUrl = function() {
				return {
					nickName: "零一侠",
					avatarUrl: null,
					language: "ch",
					gender: 0,
					country: "中国",
					province: "",
					city: ""
				}
			}, t.prototype.validAppId = function() {}, t.prototype.getUserInfo = function(e) {
				e.success && e.success({
					userInfo: t.getRandNameAndUrl()
				})
			}, t.prototype.showToast = function() {}, t.prototype.showLoading = function(e) {
				console.log("h5 显示进度", e)
			}, t.prototype.hideLoading = function() {
				console.log("h5 隐藏进度")
			}, t.prototype.preCreateUnits = function() {}, t.prototype.loadAndShowVideoAd = function(e, t, n) {
				switch (cc.sys.os) {
					case cc.sys.OS_ANDROID:
						jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "loadRewardingAd", "(Ljava/lang/String;)V", "native.androidCallVideoOver()");
						var o = setInterval(function() {
							var t = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getAdWatchFlag", "(Ljava/lang/String;)I", "test");
							console.log("cocos SDK 广告结果", t), 1 == t && (clearInterval(o), e && e(), n && n())
						}, 100);
						break;
					case cc.sys.OS_IOS:
						console.log("cocos SDK 调用苹果激励视频", this.m_adUnitId), jsb.reflection.callStaticMethod("RootViewController", "loadRewardVideo:", this.m_adUnitId);
						var i = setInterval(function() {
							var t = jsb.reflection.callStaticMethod("RootViewController", "getRewardLookOver");
							console.log("cocos SDK 广告结果", t), t && (clearInterval(i), e && e(), n && n())
						}, 100);
						break;
					default:
						e && e(), n && n()
				}
			}, t.prototype.authorize = function(e) {
				e.success && e.success()
			}, t.prototype.login = function(e) {
				e.success && e.success({
					code: null
				})
			}, t.prototype.gameRecordStart = function(e, t) {
				console.log("h5 录屏start"), t && t(null)
			}, t.prototype.gameRecordStop = function() {
				return console.log("h5 录屏stop"), !0
			}, t.prototype.shareGameRecordVideo = function() {
				console.log("h5 分享录屏")
			}, t.prototype.isProduction = function() {
				return !!cc.sys.isMobile
			}, t.prototype.isHaveShareVideo = function() {
				return !1
			}, t.prototype.reportAnalytics = function() {
				switch (cc.sys.os) {
					case cc.sys.OS_ANDROID:
					case cc.sys.OS_IOS:
				}
			}, t.prototype.clearMemory = function() {}, t.prototype.shareAppMessage = function() {}, t.prototype.showModal = function() {}, t
		}(e("../miniApp").default);
		n.default = s, cc._RF.pop()
	}, {
		"../miniApp": "miniApp"
	}],
	nineSpace: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "0caeaaqodVKDqEnEe7ohNog", "nineSpace");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../engines/gameEngine"),
			s = e("./shouShi_database"),
			c = cc._decorator,
			l = c.ccclass,
			u = c.property,
			d = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.gdiShadow = null, t.gdi = null, t.lbTopic = null, t.lbDesc = null, t.lbAnswer = null, t.lbAnswerPy = null, t.m_maxWidth = 50, t.m_minWidth = null, t.lastPos = null, t.allPos = [], t.waitSkillId = null, t.m_writeCallBack = null, t.m_touchIngWidth = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					this.node.on("touchstart", this.onTouchStart.bind(this)), this.node.on("touchmove", this.onTouchMove.bind(this)), this.node.on("touchend", this.onTouchEnd.bind(this)), this.node.on("touchcancel", this.onTouchCancel.bind(this))
				}, t.prototype.start = function() {
					this.m_minWidth = this.gdi.lineWidth
				}, t.prototype.setTopic = function(e) {
					this.m_ziId = e, this.m_ziInfo = a.default.getManagers().ziMgr.getZiDiInfo(e), this.gdi.clear(), this.gdiShadow.clear(), this.m_ziInfo ? (this.lbTopic.string = this.m_ziInfo.name, this.lbTopic.node.opacity = 255, this.lbAnswer.string = "", this.lbAnswer.node.opacity = 0, this.lbAnswerPy.string = "", this.gdi.node.opacity = 255, this.gdiShadow.node.opacity = 255) : console.error("#48未知错误 字不存在", e)
				}, t.prototype.setAnswer = function(e) {
					var t = a.default.getManagers().ziMgr.getZiDiInfo(e);
					this.lbAnswer.string = "" + t.name, this.lbAnswerPy.string = "[ " + t.py + " ]"
				}, t.prototype.showOver = function(e, t) {
					var n = this,
						o = a.default.getManagers().ziMgr.getZiDiInfo(e);
					this.lbAnswer.string = o.name, this.lbAnswer.node.opacity = 0, cc.tween(this.gdiShadow.node).to(.75, {
						opacity: 0
					}).start(), cc.tween(this.gdi.node).to(.75, {
						opacity: 0
					}).start(), cc.tween(this.lbTopic.node).to(1.5, {
						opacity: 0
					}).start(), cc.tween(this.lbAnswer.node).to(1.5, {
						opacity: 255
					}).call(function() {
						n.lbAnswerPy.string = "[ " + o.py + " ]", t()
					}).start()
				}, t.prototype.clearGdi = function() {
					this.gdi.clear(), this.gdiShadow.clear()
				}, t.prototype.setWriteOverFunction = function(e) {
					this.m_writeCallBack = e
				}, t.prototype.onTouchStart = function(e) {
					console.log("onTouchstart"), this.allPos = [], this.gdi.clear(), this.gdiShadow.clear(), this.lastPos = e.touch.getLocation(), this.allPos.push(this.lastPos);
					var t = this.touchPosToScenePos(this.lastPos),
						n = t.x,
						o = t.y;
					this.gdi.moveTo(n, o), this.gdiShadow.moveTo(n, o), this.onTouchStarted()
				}, t.prototype.onTouchMove = function(e) {
					this.lastPos = e.touch.getLocation(), this.allPos.push(this.lastPos);
					var t = this.touchPosToScenePos(this.lastPos),
						n = t.x,
						o = t.y,
						i = this.touchPosToScenePos(e.getPreviousLocation());
					this.gdi.moveTo(i.x, i.y), this.gdi.lineTo(n, o), this.gdi.stroke(), this.gdiShadow.moveTo(i.x, i.y), this.gdiShadow.lineTo(n, o), this.gdiShadow.stroke(), this.onTouchMoved()
				}, t.prototype.onTouchEnd = function() {
					console.log("touchEndDDDDD"), this.onTouchOver()
				}, t.prototype.onTouchCancel = function() {
					console.log("touchCancel"), this.onTouchOver()
				}, t.prototype.onTouchStarted = function() {}, t.prototype.onTouchMoved = function() {}, t.prototype.onTouchOver = function() {
					console.log("笔画画完");
					var e = s.default.getCalcSkillIdOfMap(this.allPos);
					console.log(e, "skillId");
					var t = a.default.getManagers().ziMgr.getZiBiInfo(e);
					console.debug("笔划信息", t);
					var n = this.getPosStartEndInfo(),
						o = a.default.getManagers().ziMgr.getMakeZi(this.m_ziId, t.id, n);
					console.debug("合成的字", o), this.lbDesc.string = null == o ? "完全不对" : "have" == o ? "笔划对了" : "你写的是:" + a.default.getManagers().ziMgr.getZiDiInfo(o).name, this.m_writeCallBack && this.m_writeCallBack(o)
				}, t.prototype.getPosStartEndInfo = function() {
					var e = this.touchPosToScenePos(this.allPos[0]),
						t = a.default.getManagers().ziMgr.getMakePosOfVec2(e, this.node.getContentSize());
					console.debug("开始信息", e, t);
					var n = this.touchPosToScenePos(this.allPos[this.allPos.length - 1]),
						o = a.default.getManagers().ziMgr.getMakePosOfVec2(n, this.node.getContentSize());
					return console.debug("结束信息", n, o), {
						start: t,
						end: o
					}
				}, t.prototype.touchPosToScenePos = function(e) {
					return cc.v2(e.x - this.node.parent.width / 2 - this.node.x, e.y - this.node.parent.height / 2 - this.node.y)
				}, t.prototype.getStartEndPos = function() {}, r([u(cc.Graphics)], t.prototype, "gdiShadow", void 0), r([u(cc.Graphics)], t.prototype, "gdi", void 0), r([u(cc.Label)], t.prototype, "lbTopic", void 0), r([u(cc.Label)], t.prototype, "lbDesc", void 0), r([u(cc.Label)], t.prototype, "lbAnswer", void 0), r([u({
					type: cc.Label
				})], t.prototype, "lbAnswerPy", void 0), r([l], t)
			}(cc.Component);
		n.default = d, cc._RF.pop()
	}, {
		"../engines/gameEngine": "gameEngine",
		"./shouShi_database": "shouShi_database"
	}],
	node_component: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "e6dbf+TDB1GV5h01wKup7rx", "node_component");
		var o = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			i = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r = function(e) {
				this.totalCount = 0, this.completed = 0, this.name = e
			},
			a = function() {},
			s = function() {
				function e() {
					this.map = new a, this.m_overEd = !1
				}
				return e.prototype.initStart = function() {}, e.prototype.initIng = function() {
					for (var e in this.map)
						if (0 == this.map[e].totalCount) return !0;
					return !1
				}, e.prototype.push = function(e, t) {
					this.map[e] = t
				}, e.prototype.getAllTotalCount = function() {
					var e = 0;
					for (var t in this.map) e += this.map[t].totalCount;
					return e
				}, e.prototype.getAllCompletedCount = function() {
					var e = 0;
					for (var t in this.map) e += this.map[t].completed;
					return e
				}, e.prototype.setCompleted = function(e, t) {
					this.map[e].completed = t
				}, e.prototype.setTotalCount = function(e, t) {
					this.map[e].totalCount = t
				}, e.prototype.setLoaded = function(e) {
					this.map[e].completed = this.map[e].totalCount
				}, e.prototype.isLoadOver = function() {
					return !this.m_overEd && (this.m_overEd = this.getAllTotalCount() == this.getAllCompletedCount(), this.m_overEd)
				}, e
			}(),
			c = function() {
				function e() {}
				return e.nextTickRun = function(e, t) {
					e.scheduleOnce(t, 0)
				}, e.numFpsAfterRun = function(e, t, n) {
					var o = this,
						i = n,
						r = function() {
							o.nextTickRun(e, function() {
								--i <= 0 ? t() : r()
							})
						};
					r()
				}, e.mergePreLoadScenes = function(e, t, n) {
					var o = new s;
					o.initStart();
					for (var i = function(e) {
							o.push(e, new r(e)), cc.director.preloadScene(e, function(n, i, r) {
								o.setCompleted(e, n), o.setTotalCount(e, i), o.initIng() || t && t(o.getAllCompletedCount(), o.getAllTotalCount(), r)
							}, function() {
								o.setLoaded(e), o.initIng() || o.isLoadOver() && n && n()
							})
						}, a = 0, c = e; a < c.length; a++) i(c[a])
				}, e.loadResourcesPicture = function(e, t, n) {
					return void 0 === n && (n = cc.resources), o(this, void 0, Promise, function() {
						return i(this, function() {
							return [2, new Promise(function(o, i) {
								n.load(e, cc.SpriteFrame, function(n, r) {
									if (n) return console.error("图片不存在", e), void i();
									if (t instanceof cc.Node)(t.getComponent(cc.Sprite) || t.addComponent(cc.Sprite)).spriteFrame = r;
									else {
										if (!(t instanceof cc.Sprite)) throw "加载非图片不能使用此方法";
										t.spriteFrame = r
									}
									o(r)
								})
							})]
						})
					})
				}, e.loadSpriteFrame = function(e, t) {
					return void 0 === t && (t = cc.resources), o(this, void 0, Promise, function() {
						return i(this, function() {
							return [2, new Promise(function(n) {
								t.load(e, cc.SpriteFrame, function(t, o) {
									if (t) return console.error("图片不存在", e), void console.error(t);
									n(o)
								})
							})]
						})
					})
				}, e.getPosOfParentNode = function(e, t) {
					for (var n = e, o = cc.v2(0, 0); n != t;) o = o.add(n.getPosition()), n = n.parent;
					return o
				}, e.getTimeOfFps = function(e) {
					return 1 / 60 * e
				}, e
			}();
		n.default = c, cc._RF.pop()
	}, {}],
	o1DialogBox: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "e74172bE7xNIar42zhPq36E", "o1DialogBox");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../gameEngine"),
			s = cc._decorator,
			c = s.ccclass,
			l = s.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.showNode = null, t.ndBg = null, t.lbTitle = null, t.lbMessage = null, t.lbOk = null, t.lbCancel = null, t.lbVideoCount = null, t.lookVideoNode = null, t.btCancel = null, t.m_videoCountInfo = null, t.m_callBack = null, t.m_lookVideoSource = null, t.m_thisClickTween = null, t.m_runIng = !1, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					window.O1HD.getModules().uiControlModule.setGaussianMode(this.ndBg)
				}, t.prototype.start = function() {}, t.prototype.showAction = function() {
					a.modules().uiControlModule.showHideDialogAnimation(this.showNode, !0)
				}, t.prototype.hideAction = function() {
					var e = this;
					a.modules().uiControlModule.showHideDialogAnimation(this.showNode, !1, function() {
						e.node.destroy()
					})
				}, t.prototype.showDialogBox = function(e, t, n, o, i, r, a, s) {
					void 0 === i && (i = "确定"), void 0 === r && (r = "取消"), void 0 === a && (a = 0), this.m_lookVideoSource = s || "未传递目的", this.lbTitle.string = e, this.lbMessage.string = t, this.m_callBack = o, this.m_videoCountInfo = a > 0 ? {
						currLookCount: 0,
						setLookCount: a
					} : null, this.onUpdateLookVideoCount(), this.showAction()
				}, t.prototype.onBtnOkCancel = function(e, t) {
					var n = this;
					if (this.m_videoCountInfo)
						if ("ok" == t) {
							var o = window.O1HD;
							if (null == o) return void console.error("#95错误 框架引擎未初始化 || 未添加到全局变量", o);
							cc.game.pause(), o.getServices().miniGameSrv.getAppApiInstance().loadAndShowVideoAd(function() {
								cc.game.resume(), n.m_videoCountInfo.currLookCount++
							}, function() {
								cc.game.resume(), o.getModules().uiControlModule.showMessageBox("视频观看失败")
							}, function() {
								cc.game.resume(), n.onUpdateLookVideoCount(), n.m_videoCountInfo.currLookCount >= n.m_videoCountInfo.setLookCount && (n.m_callBack && n.m_callBack(!0), n.hideAction())
							}, this.m_lookVideoSource)
						} else this.m_callBack && this.m_callBack(!1), this.hideAction();
					else this.m_callBack && this.m_callBack("ok" == t), this.hideAction()
				}, t.prototype.onBtnThis = function() {
					var e = this;
					if (null == this.m_thisClickTween) {
						var t = cc.tween(this.showNode).call(function() {
							e.m_runIng = !0
						}).by(.02, {
							x: 8,
							y: 8
						}).by(.02, {
							x: 0,
							y: -8
						}).by(.02, {
							x: -8,
							y: -8
						}).by(.02, {
							x: -8,
							y: 0
						}).by(.02, {
							x: 0,
							y: 8
						}).by(.02, {
							x: 8,
							y: 0
						});
						this.m_thisClickTween = cc.tween(this.showNode).then(t).repeat(3).call(function() {
							e.m_runIng = !1
						})
					}
					this.m_runIng || this.m_thisClickTween.start()
				}, t.prototype.onUpdateLookVideoCount = function() {
					if (this.m_videoCountInfo) {
						var e = this.m_videoCountInfo,
							t = e.setLookCount,
							n = e.currLookCount;
						this.lbVideoCount.string = t > 1 ? "(" + n + "/" + t + ")" : ""
					} else this.lbVideoCount.string = ""
				}, r([l(cc.Node)], t.prototype, "showNode", void 0), r([l(cc.Node)], t.prototype, "ndBg", void 0), r([l(cc.Label)], t.prototype, "lbTitle", void 0), r([l(cc.Label)], t.prototype, "lbMessage", void 0), r([l(cc.Label)], t.prototype, "lbOk", void 0), r([l(cc.Label)], t.prototype, "lbCancel", void 0), r([l(cc.Label)], t.prototype, "lbVideoCount", void 0), r([l(cc.Node)], t.prototype, "lookVideoNode", void 0), r([l(cc.Node)], t.prototype, "btCancel", void 0), r([c], t)
			}(cc.Component);
		n.default = u, cc._RF.pop()
	}, {
		"../../gameEngine": "gameEngine"
	}],
	o1DrawBoard: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "3a51dGM/YFDlIO3XIm9Z+Gl", "o1DrawBoard");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("./o1DrawBoard/o1DrawInterface"),
			s = e("../../engines/gameEngine"),
			c = e("./o1DrawBoard/drawRecord"),
			l = cc._decorator,
			u = l.ccclass,
			d = l.property,
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.drawBoard = null, t.ndLayerSetColor = null, t.ndEmptyNode = null, t.sdSetWidth = null, t.drawSetBoard = null, t.minLineWidth = 2, t.maxLineWidth = 50, t.editDrawName = null, t.pbRecordList = null, t.m_setColors = [cc.color(0, 0, 0), cc.color(255, 0, 0), cc.color(255, 128, 0), cc.color(255, 255, 0), cc.color(0, 255, 0), cc.color(0, 255, 255), cc.color(0, 0, 255), cc.color(128, 0, 255), cc.color(64, 64, 0), cc.color(0, 64, 64), cc.color(64, 0, 64), cc.color(128, 128, 0), cc.color(0, 128, 128), cc.color(128, 0, 128), cc.color(255, 0, 128), cc.color(255, 128, 128), cc.color(255, 128, 255), cc.color(128, 255, 0), cc.color(128, 255, 128), cc.color(128, 255, 255), cc.color(128, 128, 255)], t.m_currColor = null, t.m_currLineWidth = null, t.m_drawData = null, t.m_o1DrawClass = null, t.m_moveCount = 0, t.m_updateCount = 0, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					this.drawBoard.node.on("touchstart", this.onTouchStart.bind(this)), this.drawBoard.node.on("touchmove", this.onTouchMove.bind(this)), this.drawBoard.node.on("touchend", this.onTouchEnd.bind(this)), this.drawBoard.node.on("touchcancel", this.onTouchCancel.bind(this)), s.default.off("o1DrawBoard.OnEditDraw"), s.default.off("o1DrawBoard.OnDeleteDraw"), s.default.on("o1DrawBoard.OnEditDraw", this.OnEditDraw.bind(this)), s.default.on("o1DrawBoard.OnDeleteDraw", this.OnDeleteDraw.bind(this)), this.onInitSetColor(), this.onInitSetWidth(), this.onDrawInit()
				}, t.prototype.start = function() {
					this.m_o1DrawClass = new a.default, this.m_o1DrawClass.OnLoadData()
				}, t.prototype.onBtnSelectColor = function(e) {
					console.log("选择色", e.node.name);
					var t = e.node.name;
					this.drawBoard.strokeColor = this.drawBoard.fillColor = this.m_setColors[t], this.drawBoard.lineWidth = this.minLineWidth + this.sdSetWidth.progress * (this.maxLineWidth - this.minLineWidth), this.ndEmptyNode.active = !1, this.onSetPen()
				}, t.prototype.onBtnSetWidth = function() {
					this.drawBoard.lineWidth = this.minLineWidth + this.sdSetWidth.progress * (this.maxLineWidth - this.minLineWidth), this.drawBoard.strokeColor = this.drawBoard.fillColor = this.m_currColor, this.ndEmptyNode.active = !1, this.onSetPen()
				}, t.prototype.onBtnSelectPen = function() {
					this.ndEmptyNode.active = !1, this.drawBoard.lineWidth = this.m_currLineWidth, this.drawBoard.strokeColor = this.drawBoard.fillColor = this.m_currColor
				}, t.prototype.OnBtnSaveData = function() {
					var e = this.editDrawName.string;
					e ? (this.SaveDrawInfo(e), s.default.getModules().uiControlModule.showMessageBox("已保存")) : s.default.getModules().uiControlModule.showMessageBox("未输入名字")
				}, t.prototype.OnBtnLoadData = function() {
					var e = cc.instantiate(this.pbRecordList);
					this.node.addChild(e), e.getComponent(c.default).bindDrawInterface(this.m_o1DrawClass)
				}, t.prototype.onBtnClear = function() {
					this.editDrawName.string = "未命名", this.drawBoard.clear(), this.OnClearDrawData()
				}, t.prototype.onBtnEmpty = function() {
					this.ndEmptyNode.active ? this.onGetPen() : (this.drawBoard.lineWidth = 2 * this.maxLineWidth, this.drawBoard.strokeColor = this.drawBoard.fillColor = this.drawBoard.node.parent.color, this.ndEmptyNode.setPosition(this.drawBoard.node.width / 2, this.drawBoard.node.height / 2)), this.ndEmptyNode.active = !this.ndEmptyNode.active
				}, t.prototype.onTouchStart = function(e) {
					var t = this.drawBoard.node.convertToNodeSpaceAR(e.touch.getLocation());
					t = this.isOutWeb(t), this.OnStartDraw(t), this.ndEmptyNode.setPosition(t), this.m_moveCount = 0
				}, t.prototype.onTouchMove = function(e) {
					this.m_moveCount++;
					var t = this.drawBoard.node.convertToNodeSpaceAR(e.touch.getLocation());
					t = this.isOutWeb(t), this.OnIngDraw(t), this.ndEmptyNode.setPosition(t)
				}, t.prototype.onTouchEnd = function(e) {
					var t = this.drawBoard.node.convertToNodeSpaceAR(e.touch.getLocation());
					t = this.isOutWeb(t)
				}, t.prototype.onTouchCancel = function(e) {
					var t = this.drawBoard.node.convertToNodeSpaceAR(e.touch.getLocation());
					t = this.isOutWeb(t)
				}, t.prototype.OnBtnExit = function() {
					this.node.destroy()
				}, t.prototype.OnDeleteDraw = function(e) {
					this.m_o1DrawClass.DeleteData(e)
				}, t.prototype.OnEditDraw = function(e) {
					this.OnClearDrawData(), this.drawBoard.clear();
					var t = this.m_o1DrawClass.getData(e);
					if (t) {
						this.editDrawName.string = e;
						for (var n = 0; n < t.drawList.length; n++) {
							var o = t.drawList[n],
								i = o.lineWidth,
								r = o.color,
								a = o.x,
								c = o.y,
								l = o.isStart,
								u = r.r,
								d = r.g,
								p = r.b;
							this.drawBoard.lineWidth = i, this.drawBoard.strokeColor = cc.color(u, d, p), l ? this.OnStartDraw(cc.v2(a, c)) : this.OnIngDraw(cc.v2(a, c))
						}
					} else s.default.getModules().uiControlModule.showMessageBox("没有找到该画作<" + e + ">")
				}, t.prototype.OnIngDraw = function(e) {
					var t = e.x,
						n = e.y;
					this.drawBoard.lineTo(t, n), this.drawBoard.stroke(), this.drawBoard.moveTo(t, n);
					var o = this.drawBoard.strokeColor,
						i = o.r,
						r = o.g,
						a = o.b;
					this.OnAddDrawList({
						x: t,
						y: n,
						color: {
							r: i,
							g: r,
							b: a
						},
						lineWidth: this.drawBoard.lineWidth,
						isStart: !1
					})
				}, t.prototype.OnStartDraw = function(e) {
					var t = e.x,
						n = e.y;
					this.drawBoard.moveTo(t - 1, n - 1), this.drawBoard.lineTo(t, n), this.drawBoard.stroke();
					var o = this.drawBoard.strokeColor,
						i = o.r,
						r = o.g,
						a = o.b;
					this.OnAddDrawList({
						x: t,
						y: n,
						color: {
							r: i,
							g: r,
							b: a
						},
						lineWidth: this.drawBoard.lineWidth,
						isStart: !0
					})
				}, t.prototype.OnClearDrawData = function() {
					this.m_drawData = null
				}, t.prototype.OnAddDrawList = function(e) {
					null == this.m_drawData && (this.m_drawData = {
						name: null,
						drawList: []
					}), this.m_drawData.drawList.push(e)
				}, t.prototype.SaveDrawInfo = function(e) {
					var t = this;
					this.m_drawData.name = e, this.m_o1DrawClass.getData(e) ? s.default.getModules().uiControlModule.showDialogBox("保存", "保存会覆盖之前画作,是否保存<" + e + ">", !0, function(e) {
						e && t.m_o1DrawClass.AddAndWriteDrawData(t.m_drawData)
					}, null, "保存", "取消") : this.m_o1DrawClass.AddAndWriteDrawData(this.m_drawData)
				}, t.prototype.update = function() {
					this.m_updateCount++, this.m_updateCount
				}, t.prototype.onSetPen = function() {
					this.m_currColor = this.drawBoard.strokeColor, this.m_currLineWidth = this.drawBoard.lineWidth, this.onUpdateDrawSetGdi()
				}, t.prototype.onGetPen = function() {
					this.drawBoard.strokeColor = this.drawBoard.fillColor = this.m_currColor, this.drawBoard.lineWidth = this.m_currLineWidth, this.onUpdateDrawSetGdi()
				}, t.prototype.onUpdateDrawSetGdi = function() {
					this.drawSetBoard.strokeColor = this.drawBoard.strokeColor, this.drawSetBoard.lineWidth = this.drawBoard.lineWidth, this.drawSetBoard.clear(), this.drawSetBoard.moveTo(20, 0), this.drawSetBoard.bezierCurveTo(0, 40, 35, 100, 20, 150), this.drawSetBoard.stroke()
				}, t.prototype.isOutWeb = function(e) {
					var t = e.clone();
					return e.x > this.drawBoard.node.width - this.drawBoard.lineWidth / 2 && (t.x = this.drawBoard.node.width - this.drawBoard.lineWidth / 2), e.x < this.drawBoard.lineWidth / 2 && (t.x = this.drawBoard.lineWidth / 2), e.y > this.drawBoard.node.height - this.drawBoard.lineWidth / 2 && (t.y = this.drawBoard.node.height - this.drawBoard.lineWidth / 2), e.y < this.drawBoard.lineWidth / 2 && (t.y = this.drawBoard.lineWidth / 2), t
				}, t.prototype.onDrawInit = function() {
					this.drawBoard.strokeColor = this.drawBoard.fillColor = this.m_setColors[0], this.drawBoard.lineWidth = this.minLineWidth, this.ndEmptyNode.active = !1, this.onSetPen()
				}, t.prototype.onInitSetWidth = function() {
					this.sdSetWidth.progress = 0
				}, t.prototype.onInitSetColor = function() {
					for (var e = 0; e < this.m_setColors.length; e++) {
						var t = this.m_setColors[e],
							n = this.ndLayerSetColor.children[0];
						e > 0 && (n = cc.instantiate(this.ndLayerSetColor.children[0]), this.ndLayerSetColor.addChild(n)), n.name = String(e), n.getChildByName("Background").color = t
					}
				}, r([d(cc.Graphics)], t.prototype, "drawBoard", void 0), r([d(cc.Node)], t.prototype, "ndLayerSetColor", void 0), r([d({
					type: cc.Node,
					displayName: "橡皮擦"
				})], t.prototype, "ndEmptyNode", void 0), r([d(cc.Slider)], t.prototype, "sdSetWidth", void 0), r([d(cc.Graphics)], t.prototype, "drawSetBoard", void 0), r([d({
					tooltip: "画笔最小宽度"
				})], t.prototype, "minLineWidth", void 0), r([d({
					tooltip: "画笔最大宽度"
				})], t.prototype, "maxLineWidth", void 0), r([d(cc.EditBox)], t.prototype, "editDrawName", void 0), r([d(cc.Prefab)], t.prototype, "pbRecordList", void 0), r([u], t)
			}(cc.Component);
		n.default = p, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine",
		"./o1DrawBoard/drawRecord": "drawRecord",
		"./o1DrawBoard/o1DrawInterface": "o1DrawInterface"
	}],
	o1DrawInterface: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "57e5ackELJD4IFRj10dteKl", "o1DrawInterface"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.DrawBase = void 0;
		var o = e("../../../engines/gameEngine"),
			i = function() {};
		n.DrawBase = i;
		var r = function() {
			function e() {
				this.m_BASE_DATA_KEY = "o1-draw-data", this.m_baseInfo = null
			}
			return e.prototype.getData = function(e) {
				return this.m_baseInfo[e]
			}, e.prototype.OnLoadData = function() {
				this.m_baseInfo = new i;
				var e = o.default.getServices().localStorageSrv.getStorage(this.m_BASE_DATA_KEY);
				if (e)
					for (var t = 0, n = JSON.parse(e); t < n.length; t++) {
						var r = n[t];
						this.m_baseInfo[r.name] = r
					}
			}, e.prototype.AddAndWriteDrawData = function(e) {
				this.m_baseInfo[e.name] = e, this.WriteData()
			}, e.prototype.DeleteData = function(e) {
				this.m_baseInfo[e] && delete this.m_baseInfo[e], this.WriteData()
			}, e.prototype.getAllData = function() {
				return this.m_baseInfo
			}, e.prototype.WriteData = function() {
				var e = [];
				for (var t in this.m_baseInfo) {
					var n = this.m_baseInfo[t];
					e.push(n)
				}
				o.default.getServices().localStorageSrv.setStorage(this.m_BASE_DATA_KEY, JSON.stringify(e))
			}, e
		}();
		n.default = r, cc._RF.pop()
	}, {
		"../../../engines/gameEngine": "gameEngine"
	}],
	o1Loading: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "8a0aczl3B1MVa09X9ZRXdn/", "o1Loading");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../gameEngine"),
			s = cc._decorator,
			c = s.ccclass,
			l = s.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.lbLoadText = null, t.ndIcon = null, t.ndBg = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					a.modules().uiControlModule.setGaussianMode(this.ndBg)
				}, t.prototype.start = function() {
					var e = this.ndIcon.getChildByName("mask");
					e.height = 0, cc.tween(e).then(cc.tween().to(1, {
						height: 256
					}).to(0, {
						height: 0
					})).repeatForever().start()
				}, t.prototype.showLoading = function(e) {
					this.lbLoadText.string = e
				}, r([l(cc.Label)], t.prototype, "lbLoadText", void 0), r([l(cc.Node)], t.prototype, "ndIcon", void 0), r([l(cc.Node)], t.prototype, "ndBg", void 0), r([c], t)
			}(cc.Component);
		n.default = u, cc._RF.pop()
	}, {
		"../../gameEngine": "gameEngine"
	}],
	o1MessageBox: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "8bfc2eplPxAMrkDAj/dZbA1", "o1MessageBox");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = cc._decorator,
			s = a.ccclass,
			c = a.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.lbMessage = null, t.activeNode = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {}, t.prototype.start = function() {}, t.prototype.showMessageBox = function(e, t) {
					var n = this;
					this.lbMessage.string = e, this.activeNode.y -= 75, this.activeNode.scale = 0, cc.tween(this.activeNode).parallel(cc.tween().by(.2, {
						y: 75
					}), cc.tween().to(.2, {
						scale: 1
					})).delay(t).to(.2, {
						scale: .1
					}).call(function() {
						n.node.destroy()
					}).start()
				}, t.prototype.update = function() {}, r([c(cc.Label)], t.prototype, "lbMessage", void 0), r([c(cc.Node)], t.prototype, "activeNode", void 0), r([s], t)
			}(cc.Component);
		n.default = l, cc._RF.pop()
	}, {}],
	ossService: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "276fa4+CkNFwqIQs4fAazmI", "ossService");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			a = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = e("./superService"),
			c = e("../configs/gameConfig"),
			l = e("./miniGameService"),
			u = e("../configs/logConfig"),
			d = e("../gameEngine"),
			p = function(e) {
				function t() {
					var t = e.call(this) || this;
					return t.className = "oss服务", t.m_httpUrl = "", t.m_ossVersion = "1.0.0", t.m_platform = "wx", t
				}
				return i(t, e), t.prototype.getVersion = function() {
					return this.m_ossVersion
				}, t.prototype.getPlatform = function() {
					return this.m_platform
				}, t.prototype.showOssPathMiniGameJumpIcon = function(e, t) {
					var n = this.getPlatformJumpUrl(e);
					d.default.getServices().miniGameSrv.getAppApiInstance().drawUrlImage(n, function(e) {
						t.spriteFrame = e
					})
				}, t.prototype.getPlatformJumpUrl = function(e) {
					var t = this.m_httpUrl.replace(".json", "/");
					return t = t.replace("#", this.m_platform), t += e + ".jpg", console.log("跳转小游戏图标 最终路径", t), t
				}, t.prototype.loadService = function() {
					return r(this, void 0, Promise, function() {
						return a(this, function(t) {
							switch (t.label) {
								case 0:
									return [4, e.prototype.loadService.call(this)];
								case 1:
									return t.sent(), this.onSetPlatform(), [2, this.loadConfig()]
							}
						})
					})
				}, t.prototype.getPlatformUrl = function() {
					var e = this.m_platform + "-" + this.m_ossVersion,
						t = "?time=" + Math.floor(Date.now() / 3e5);
					return l.default.getMiniGameAppStatic().isProduction() ? this.m_httpUrl.replace(/#/g, e) + t : this.m_httpUrl.replace(/#/g, e + "-test") + t
				}, t.prototype.onSetPlatform = function() {
					switch (cc.sys.platform) {
						case cc.sys.WECHAT_GAME:
						case cc.sys.WECHAT_GAME_SUB:
							this.m_platform = "ks";
							break;
						case cc.sys.BYTEDANCE_GAME:
						case cc.sys.BYTEDANCE_GAME_SUB:
							this.m_platform = "tt";
							break;
						case cc.sys.HUAWEI_GAME:
							console.log("华为快游戏"), this.m_platform = "huawei";
							break;
						case cc.sys.VIVO_GAME:
							console.log("vivo快游戏"), this.m_platform = "vivo";
							break;
						case cc.sys.OPPO_GAME:
							console.log("oppo快游戏"), this.m_platform = "oppo";
							break;
						default:
							cc.sys.isNative ? cc.sys.os == cc.sys.OS_ANDROID ? (console.log("Android 游戏"), this.m_platform = "app/Android-mmy") : cc.sys.os == cc.sys.OS_IOS ? (console.log("iOS 游戏"), this.m_platform = "app/iOS") : this.m_platform = "tt" : 3 == cc.sys.platform || 4 == cc.sys.platform ? (console.log("快手小游戏"), this.m_platform = "ks") : (console.log("h5小游戏"), this.m_platform = "h5")
					}
				}, t.prototype.loadConfig = function() {
					return r(this, void 0, Promise, function() {
						var e = this;
						return a(this, function() {
							return [2, new Promise(function(t) {
								var n = e.getPlatformUrl();
								cc.assetManager.loadRemote(n, function(e, n) {
									if (e) return console.error(u.DEEP_NEXT_SPLIT, "#20错误的加载", e), void setTimeout(function() {
										cc.game.restart()
									}, 1500);
									var o = n.json;
									console.log(u.DEEP_NEXT_SPLIT, "oss 加载到的数值", o);
									var i = Object.keys(c.default);
									for (var r in o) i.includes(r) && (c.default[r] = o[r]);
									t()
								})
							})]
						})
					})
				}, t
			}(s.default);
		n.default = p, cc._RF.pop()
	}, {
		"../configs/gameConfig": "gameConfig",
		"../configs/logConfig": "logConfig",
		"../gameEngine": "gameEngine",
		"./miniGameService": "miniGameService",
		"./superService": "superService"
	}],
	physics_tool: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "37215Xd7E9LzqOQY7ank8R7", "physics_tool"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = e("./node_component"),
			i = function() {
				function e() {}
				return e.openPhysics = function(e) {
					void 0 === e && (e = !1), cc.director.getPhysicsManager().enabled = !0, e && (cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager.DrawBits.e_shapeBit)
				}, e.openCollision = function(e) {
					void 0 === e && (e = !1);
					var t = cc.director.getCollisionManager();
					t.enabled = !0, t.enabledDebugDraw = e
				}, e.closePhysics = function() {
					cc.director.getPhysicsManager().enabled = !1
				}, e.setRigidBodyLinearVelocity = function(e, t, n) {
					void 0 === t && (t = cc.v2()), void 0 === n && (n = !1);
					var o = e;
					return n && (t.x += o.linearVelocity.x, t.y += o.linearVelocity.y), o.linearVelocity = t, o
				}, e.showParabola = function(e, t, n, o, i) {
					e.clear();
					var r = .05,
						a = Math.max(t.x, t.y);
					a > 2e3 ? r = .02 : a > 1e3 && (r = .03);
					for (var s = !1, c = 0; c < 150; c++) {
						var l = r * c,
							u = t.x * l,
							d = t.y * l + .5 * o * l * l,
							p = n.x + u,
							f = n.y + d;
						i ? s ? (e.lineTo(p, f), s = !1) : (e.moveTo(p, f), s = !0) : 0 == c ? e.moveTo(p, f) : e.lineTo(p, f)
					}
					e.stroke()
				}, e.calcBombLinearV = function(e, t, n, o, i) {
					void 0 === o && (o = null), void 0 === i && (i = cc.v2(1, 1));
					var r = this.calcTowPointDistance(e, t);
					if (r >= o) return cc.v2(0, 0);
					var a = 1 - r / o,
						s = t.x - e.x,
						c = t.y - e.y,
						l = i.x * s * a,
						u = i.y * c * a;
					return l /= Math.sqrt(n), u /= Math.sqrt(n), cc.v2(l, u)
				}, e.calcTowPointDistance = function(e, t) {
					var n = Math.abs(t.x - e.x),
						o = Math.abs(t.y - e.y);
					return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2))
				}, e.radianToAngle = function(e) {
					return 180 * e / Math.PI
				}, e.angleTorDian = function(e) {
					return e * Math.PI / 180
				}, e.cheatColliderPos = function(e, t, n) {
					var i = cc.director.getPhysicsManager();
					i.enabled ? (i.enabled = !1, o.default.nextTickRun(e, function() {
						t.setPosition(n), i.enabled = !0
					})) : console.warn("#151 警告 非物理引擎激活状态下不建议此方法")
				}, e
			}();
		n.default = i, cc._RF.pop()
	}, {
		"./node_component": "node_component"
	}],
	power: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "bcdfb/B9UdMhofbCPqxUKQ7", "power");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/gameEngine"),
			s = e("../../engines/configs/gameConfig"),
			c = e("../../engines/services/userContent/userInterface"),
			l = e("../../engines/libs/data_control"),
			u = e("../../Game/MainRoot"),
			d = cc._decorator,
			p = d.ccclass,
			f = d.property,
			h = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.lbPower = null, t.lbResetPower = null, t.InfinityPower = null, t.InfinityPower_Key = "user-logintime", t.InfinityModel = "user-is-infinity", t.m_MemberTimeKey = "user-membertime", t
				}
				return i(t, e), t.prototype.start = function() {
					this.onUpdateTimer(), this.schedule(this.onUpdateTimer.bind(this), 1)
				}, t.prototype.onUpdateTimer = function() {
					var e = a.default.getServices().userSrv.getPower(),
						t = a.default.getServices().userSrv.getMaxPower(),
						n = a.services().userSrv.getPowerResetTimer();
					n = Math.max(0, n), e >= t ? (this.lbPower.string = "" + e, this.lbResetPower.string = "00:00") : (this.lbPower.string = e + "/" + t, this.lbResetPower.string = l.default.getTimeFormatClock(n), a.services().userSrv.onPowerTimerReset());
					var o = Date.now(),
						i = a.default.getServices().localStorageSrv.getStorage(this.InfinityPower_Key);
					i ? o - Number(i) >= 6e4 * s.default.INFINITY_POWER_VIDEO_HAND_TIME && (0 != Number(a.default.getServices().localStorageSrv.getStorage(this.InfinityModel)) && a.default.getServices().userSrv.setPower(s.default.MAX_POWER, !1, !0), a.default.getServices().localStorageSrv.setStorage(this.InfinityModel, 0), a.default.getServices().localStorageSrv.setStorage(this.InfinityPower_Key, o), a.default.getModules().uiControlModule.showInfinityPower(s.default.FIRST_PLAY_INFINITY_PROBABILITY, u.default.UIRoot)) : (a.default.getServices().localStorageSrv.setStorage(this.InfinityModel, 0), a.default.getServices().localStorageSrv.setStorage(this.InfinityPower_Key, o), a.default.getModules().uiControlModule.showInfinityPower(s.default.FIRST_PLAY_INFINITY_PROBABILITY, u.default.UIRoot))
				}, t.prototype.onBtnAddPower = function() {
					a.default.getManagers().soundMgr.playSound("anNiu").then(), a.modules().uiControlModule.showUserPropGet(c.REWARD_TYPE.POWER, s.default.ADD_ONCE_POWER, null, function() {
						a.default.getModules().uiControlModule.showInfinityPower(s.default.CLICK_POWER_INFINITY_PROBABILITY, u.default.UIRoot)
					})
				}, t.prototype.update = function() {}, r([f(cc.Label)], t.prototype, "lbPower", void 0), r([f(cc.Label)], t.prototype, "lbResetPower", void 0), r([f(cc.Prefab)], t.prototype, "InfinityPower", void 0), r([p], t)
			}(cc.Component);
		n.default = h, cc._RF.pop()
	}, {
		"../../Game/MainRoot": "MainRoot",
		"../../engines/configs/gameConfig": "gameConfig",
		"../../engines/gameEngine": "gameEngine",
		"../../engines/libs/data_control": "data_control",
		"../../engines/services/userContent/userInterface": "userInterface"
	}],
	realNameATT: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "788a2KVfN9OL6lWWj671mPM", "realNameATT");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			},
			a = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			s = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var c = e("../../engines/gameEngine"),
			l = e("./codeHead"),
			u = cc._decorator,
			d = u.ccclass,
			p = u.property,
			f = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.editCode = null, t.editName = null, t.JSON_KEY = "real-name-code", t.m_commitSuccess = null, t
				}
				return i(t, e), t.prototype.onRealName = function() {
					return a(this, void 0, void 0, function() {
						var e = this;
						return s(this, function() {
							return this.isRealNameEd() ? (this.node.active = !1, [2, Promise.resolve()]) : [2, new Promise(function(t) {
								e.node.active = !0, e.m_commitSuccess = function() {
									t()
								}
							})]
						})
					})
				}, t.prototype.start = function() {}, t.prototype.isRealNameEd = function() {
					var e = c.services().localStorageSrv.getStorage(this.JSON_KEY, !1);
					return Boolean(e)
				}, t.prototype.signed = function(e) {
					var t = e.substring(0, 6);
					if (null == l.$RealCode.PRE_SIX[t]) return console.warn("不存在的城市码", t), !1;
					for (var n = 0, o = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], i = 0; i < 17; i++) n += Number(e[i]) * o[i];
					return "10X98765432" [n % 11] == e[17]
				}, t.prototype.onBtnCommit = function() {
					var e, t = this,
						n = this.editName.string,
						o = this.editCode.string;
					/^(?:[一-龥\xb7]{2,16})$/.test(n) ? o.length < 18 ? c.modules().uiControlModule.showMessageBox("请输入正确的身份证号码") : (e = /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0\d|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(o) && this.signed(o) ? function() {
						c.modules().uiControlModule.hideLoading(), c.services().localStorageSrv.setStorage(t.JSON_KEY, JSON.stringify({
							code: o,
							name: n
						}), !1), t.node.active = !1, c.modules().uiControlModule.showMessageBox("实名认证成功."), setTimeout(function() {
							t.m_commitSuccess()
						}, 1500)
					} : function() {
						c.modules().uiControlModule.hideLoading(), c.modules().uiControlModule.showMessageBox("实名认证失败，请检查你的输入")
					}, c.modules().uiControlModule.showLoading(null, "正在认证…").then(function() {
						t.scheduleOnce(function() {
							e()
						}, .3 + 1 * Math.random())
					})) : c.modules().uiControlModule.showMessageBox("请输入正确的姓名")
				}, r([p(cc.EditBox)], t.prototype, "editCode", void 0), r([p(cc.EditBox)], t.prototype, "editName", void 0), r([d], t)
			}(cc.Component);
		n.default = f, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine",
		"./codeHead": "codeHead"
	}],
	recordVoiceChange: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "bee6alUiDRD7aZoPUL7YQOU", "recordVoiceChange");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.RECORD_VOICE_STATE = void 0;
		var a, s = e("./btButton"),
			c = e("../../engines/gameEngine");
		(function(e) {
			e[e.NULL = 0] = "NULL", e[e.READY = 1] = "READY", e[e.RECORD = 2] = "RECORD", e[e.OVER = 3] = "OVER", e[e.PLAY = 4] = "PLAY"
		})(a = n.RECORD_VOICE_STATE || (n.RECORD_VOICE_STATE = {}));
		var l = cc._decorator,
			u = l.ccclass,
			d = l.property,
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.btList = null, t.effectBtNode = null, t.lbState = null, t.editInput = null, t.m_currState = a.READY, t.m_recordTime = 0, t.m_effectList = [{
						name: "调皮猴",
						numScale: .55
					}, {
						name: "机灵兔",
						numScale: .75
					}, {
						name: "复读机",
						numScale: 1
					}, {
						name: "憨憨象",
						numScale: 1.25
					}, {
						name: "老怪物",
						numScale: 1.5
					}], t.m_timeBind = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					this.OnLoadSetBts()
				}, t.prototype.start = function() {
					this.m_currState = a.READY
				}, t.prototype.getTimeFunction = function() {
					return null == this.m_timeBind && (this.m_timeBind = this.OnTimer.bind(this)), this.m_timeBind
				}, t.prototype.OnTimer = function() {
					this.m_recordTime++
				}, t.prototype.OnBtnStartRecordVoice = function() {
					this.m_currState == a.NULL || this.m_currState == a.READY || this.m_currState == a.OVER ? (c.default.getServices().miniGameSrv.getAppApiInstance().StartRecordSound(), this.m_currState = a.RECORD, this.m_recordTime = 0, this.schedule(this.getTimeFunction(), 1)) : c.default.getModules().uiControlModule.showMessageBox("还不能开始录音")
				}, t.prototype.OnBtnStopRecordVoice = function() {
					var e = this;
					this.m_currState == a.RECORD ? (this.unschedule(this.getTimeFunction()), c.default.getServices().miniGameSrv.getAppApiInstance().StopRecordSound(function() {
						e.m_currState = a.OVER
					})) : c.default.getModules().uiControlModule.showMessageBox("还没有开始录音")
				}, t.prototype.OnBtnExit = function() {
					this.node.destroy()
				}, t.prototype.OnBtnPlaySetNum = function() {
					this.OnBtnListEffect({
						name: "手动调",
						numScale: Number(this.editInput.string)
					})
				}, t.prototype.OnBtnListEffect = function(e) {
					var t = this;
					this.m_currState == a.OVER ? (this.m_currState = a.PLAY, c.default.getServices().miniGameSrv.getAppApiInstance().PlayLastRecordSound(e.numScale, function() {
						t.m_currState = a.OVER
					}, function() {
						t.m_currState = a.OVER
					})) : this.m_currState == a.PLAY ? c.default.getModules().uiControlModule.showMessageBox("正在播放中") : c.default.getModules().uiControlModule.showMessageBox("没有录音操作")
				}, t.prototype.OnLoadSetBts = function() {
					for (var e = this, t = function(t) {
							var o = n.m_effectList[t],
								i = n.effectBtNode;
							t > 0 && (i = cc.instantiate(i), n.btList.addChild(i)), i.getComponent(s.default).setButtonText(o.name), i.off("click"), i.on("click", function() {
								e.OnBtnListEffect(o)
							})
						}, n = this, o = 0; o < this.m_effectList.length; o++) t(o)
				}, t.prototype.OnUpdateState = function() {
					switch (this.m_currState) {
						case a.NULL:
							this.lbState.string = "等待录音";
						case a.READY:
							this.lbState.string = "播放完毕";
							break;
						case a.RECORD:
							this.lbState.string = "录音中:[" + this.m_recordTime + "s]";
							break;
						case a.OVER:
							this.lbState.string = "录音完毕";
							break;
						case a.PLAY:
							this.lbState.string = "正在播放"
					}
				}, t.prototype.update = function() {
					this.OnUpdateState()
				}, r([d(cc.Node)], t.prototype, "btList", void 0), r([d(cc.Node)], t.prototype, "effectBtNode", void 0), r([d(cc.Label)], t.prototype, "lbState", void 0), r([d(cc.EditBox)], t.prototype, "editInput", void 0), r([u], t)
			}(cc.Component);
		n.default = p, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine",
		"./btButton": "btButton"
	}],
	scrollMiniGameJump: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "4b44eCIqpRNZrQ9xEjkX8Xu", "scrollMiniGameJump");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/configs/gameConfig"),
			s = e("../public/cellMiniGameJump"),
			c = cc._decorator,
			l = c.ccclass,
			u = c.property,
			d = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.pbTwoItem = null, t.ndListContent = null, t
				}
				return i(t, e), t.prototype.start = function() {
					this.showAllMiniGameJumpList()
				}, t.prototype.showAllMiniGameJumpList = function() {
					var e = this,
						t = a.default.MINI_GAME_JUMP_SCROLL_LIST;
					cc.Tween.stopAllByTarget(this.ndListContent);
					for (var n = 0; n < t.length; n += 2) {
						var o = t[n],
							i = t[n + 1],
							r = cc.instantiate(this.pbTwoItem);
						this.ndListContent.addChild(r), this.controlCellOne(r.getChildByName("cellUp"), o), this.controlCellOne(r.getChildByName("cellDown"), i)
					}
					this.scheduleOnce(function() {
						if (!(e.ndListContent.width <= e.node.width)) {
							var t = e.ndListContent.width - e.node.width;
							cc.tween(e.ndListContent).then(cc.tween(e.ndListContent).to(0, {
								x: -375
							}).to(e.ndListContent.width / e.node.width * 5, {
								x: -375 - t
							})).repeatForever().start()
						}
					})
				}, t.prototype.controlCellOne = function(e, t) {
					null != t ? e.getComponent(s.default).setData(t) : e.active = !1
				}, t.prototype.onBtnClose = function() {
					this.ndListContent.destroyAllChildren(), this.node.destroy()
				}, r([u(cc.Prefab)], t.prototype, "pbTwoItem", void 0), r([u(cc.Node)], t.prototype, "ndListContent", void 0), r([l], t)
			}(cc.Component);
		n.default = d, cc._RF.pop()
	}, {
		"../../engines/configs/gameConfig": "gameConfig",
		"../public/cellMiniGameJump": "cellMiniGameJump"
	}],
	shareVideoItem: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "990921Co5FJAp16rUTFQWNu", "shareVideoItem");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../../engines/gameEngine"),
			s = cc._decorator,
			c = s.ccclass,
			l = s.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.lbNumber = null, t.lbDiggCount = null, t.spTitleImage = null, t.m_videoObject = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {}, t.prototype.start = function() {}, t.prototype.OnBtnPlay = function() {
					a.default.getServices().miniGameSrv.getAppApiInstance().showVideo(this.m_videoObject.video_id)
				}, t.prototype.BindVideoData = function(e) {
					var t = this;
					console.log("数据", e), this.m_videoObject = e, this.lbNumber.string = "第 " + this.m_videoObject.rank + " 名", this.lbDiggCount.string = this.m_videoObject.digg_count + " 赞", console.log("请求图片", this.spTitleImage), this.scheduleOnce(function() {
						a.default.getServices().miniGameSrv.getAppApiInstance().drawUrlImage(t.m_videoObject.cover_url, function(e) {
							console.log("图片结果", e, t.spTitleImage), t.spTitleImage.spriteFrame = e
						})
					})
				}, r([l(cc.Label)], t.prototype, "lbNumber", void 0), r([l(cc.Label)], t.prototype, "lbDiggCount", void 0), r([l(cc.Sprite)], t.prototype, "spTitleImage", void 0), r([c], t)
			}(cc.Component);
		n.default = u, cc._RF.pop()
	}, {
		"../../../engines/gameEngine": "gameEngine"
	}],
	shareVideoRank: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "3ef272VfUFAGpGqY9FZkIFx", "shareVideoRank");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/services/miniGameContent/miniApp"),
			s = e("../../engines/gameEngine"),
			c = e("./shareVideoRank/shareVideoItem"),
			l = cc._decorator,
			u = l.ccclass,
			d = l.property,
			p = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.pbItem = null, t.tcType = null, t.ndListContent = null, t
				}
				return i(t, e), t.prototype.onLoad = function() {
					this.OnSelectType(a.SHARE_VIDEO_SORT_TYPE.HOT)
				}, t.prototype.start = function() {}, t.prototype.OnBtnSwitch = function(e) {
					var t = Number(e.node.name);
					this.OnSelectType(t)
				}, t.prototype.OnBtnExit = function() {
					this.ndListContent.destroyAllChildren(), this.node.destroy()
				}, t.prototype.OnSelectType = function(e) {
					var t = this;
					s.default.getModules().uiControlModule.showLoading(), s.default.getServices().miniGameSrv.getAppApiInstance().getShareVideoRank(e, function(e) {
						t.OnShowList(e), s.default.getModules().uiControlModule.hideLoading()
					})
				}, t.prototype.OnShowList = function(e) {
					var t = this;
					this.ndListContent.destroyAllChildren(), this.scheduleOnce(function() {
						for (var n = 0, o = e; n < o.length; n++) {
							var i = o[n],
								r = cc.instantiate(t.pbItem);
							t.ndListContent.addChild(r), r.getComponent(c.default).BindVideoData(i)
						}
					})
				}, r([d(cc.Prefab)], t.prototype, "pbItem", void 0), r([d(cc.ToggleContainer)], t.prototype, "tcType", void 0), r([d(cc.Node)], t.prototype, "ndListContent", void 0), r([u], t)
			}(cc.Component);
		n.default = p, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine",
		"../../engines/services/miniGameContent/miniApp": "miniApp",
		"./shareVideoRank/shareVideoItem": "shareVideoItem"
	}],
	shouShi_database: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "3067fH2FPhLBocVX+5UDOdn", "shouShi_database"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.CLICK_MIN_PIXEL = void 0;
		var o = e("./skill_map_pos_json");
		n.CLICK_MIN_PIXEL = 20;
		var i = function() {
			function e() {}
			return e.getCalcSkillIdOfMap = function(e) {
				console.log(this.getAllMap(), "this.getAllMap()");
				for (var t = [], n = 0, o = this.getAllMap(); n < o.length; n++) {
					var i = o[n],
						r = this.analysisMapAndPossMatch(i, e);
					t.push({
						id: i.id,
						match: r
					})
				}
				return t.sort(function(e, t) {
					return t.match - e.match
				}), console.log("排序后", t), t[0].id
			}, e.getAllMap = function() {
				return (null == this.allMap || this.allMap.length <= 0) && this.initMap(), this.allMap
			}, e.getMapOfId = function(e) {
				for (var t = 0, n = this.getAllMap(); t < n.length; t++) {
					var o = n[t];
					if (o.id == e) return o
				}
				return null
			}, e.initMap = function() {
				var e = 0;
				for (var t in this.allMap = [], o.default) this.allMap.push({
					id: t,
					i: e++,
					name: "",
					pos: o.default[t]
				})
			}, e.alignmentPointSet = function(e, t) {
				var n = [],
					o = t - e.length,
					i = o / e.length;
				if (o > 0)
					for (var r = 0, a = 0; a < e.length - 1; a++) {
						var s = e[a],
							c = e[a + 1];
						if (n.push({
								x: s.x,
								y: s.y
							}), (r += i) > 1) {
							for (var l = Math.floor(r), u = {
									x: c.x - s.x,
									y: c.y - s.y
								}, d = 1 / (l + 1), p = {
									x: u.x * d,
									y: u.y * d
								}, f = 0; f < l; f++) {
								var h = p.x + p.x * f,
									m = p.y + p.y * f;
								n.push({
									x: s.x + h,
									y: s.y + m
								})
							}
							r -= l
						}
					} else if (o < 0) {
						var y = 0,
							g = -o / t;
						for (a = 0; a < e.length - g; a++) {
							var _ = e[a];
							for (y += g, n.push({
									x: _.x,
									y: _.y
								}); y > 1;) a++, y--
						}
						var v = e[e.length - 1];
						n.push({
							x: v.x,
							y: v.y
						})
					} else
						for (var b = 0, O = e; b < O.length; b++) {
							var w = O[b];
							n.push({
								x: w.x,
								y: w.y
							})
						}
				return n
			}, e.isClick = function(e) {
				for (var t = 0, o = e[0], i = 0, r = e; i < r.length; i++) {
					var a = r[i].sub(o).mag();
					t = Math.max(a, t)
				}
				return t <= n.CLICK_MIN_PIXEL
			}, e.analysisMapAndPossMatch = function(e, t) {
				for (var n = this.alignmentPointSet(t, e.pos.length), o = 0, i = 0, r = 0; r < n.length - 1 && r < e.pos.length - 1; r++) {
					var a = e.pos[r],
						s = n[r],
						c = e.pos[r + 1],
						l = n[r + 1],
						u = this.getTwoPointRelations(a, c),
						d = this.getTwoPointRelations(s, l);
					i += this.getRelationsMatchNumber(u, d), o++
				}
				return i / o
			}, e.getRelationsMatchNumber = function(e, t) {
				var n = Math.abs(t - e);
				return n > 180 && (n = 360 - n), (180 - n) / 180
			}, e.getTwoPointRelations = function(e, t) {
				var n = cc.v2(e.x, e.y),
					o = cc.v2(t.x, t.y).sub(n);
				o = this.clearZero(o);
				var i = cc.v2(Math.abs(o.x), 1e-5).signAngle(o);
				return this.radianToAngle(i)
			}, e.clearZero = function(e) {
				return 0 == e.x && (e.x = .001), 0 == e.y && (e.y = .001), e
			}, e.radianToAngle = function(e) {
				return 180 * e / Math.PI
			}, e.angleTorDian = function(e) {
				return e * Math.PI / 180
			}, e.allMap = [], e
		}();
		n.default = i, cc._RF.pop()
	}, {
		"./skill_map_pos_json": "skill_map_pos_json"
	}],
	skill_map_pos_json: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "a120690WCRAOauzESHcUi9v", "skill_map_pos_json"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.default = {
			"丶": [{
				x: 1155.2,
				y: 449.4
			}, {
				x: 1164.2,
				y: 446.4
			}, {
				x: 1180.2,
				y: 440.4
			}, {
				x: 1200.2,
				y: 437.4
			}, {
				x: 1216.2,
				y: 429.4
			}, {
				x: 1234.2,
				y: 423.4
			}, {
				x: 1251.2,
				y: 420.4
			}, {
				x: 1264.2,
				y: 413.4
			}, {
				x: 1273.2,
				y: 411.4
			}, {
				x: 1281.2,
				y: 407.4
			}, {
				x: 1287.2,
				y: 405.4
			}, {
				x: 1290.2,
				y: 404.4
			}, {
				x: 1291.2,
				y: 402.4
			}, {
				x: 1293.2,
				y: 401.4
			}, {
				x: 1153.2,
				y: 449.4
			}],
			"一": [{
				x: 889.5,
				y: 517.5
			}, {
				x: 890.5,
				y: 517.5
			}, {
				x: 892.5,
				y: 517.5
			}, {
				x: 893.5,
				y: 517.5
			}, {
				x: 896.5,
				y: 517.5
			}, {
				x: 900.5,
				y: 517.5
			}, {
				x: 905.5,
				y: 517.5
			}, {
				x: 913.5,
				y: 517.5
			}, {
				x: 924.5,
				y: 517.5
			}, {
				x: 936.5,
				y: 517.5
			}, {
				x: 956.5,
				y: 517.5
			}, {
				x: 978.5,
				y: 517.5
			}, {
				x: 1008.5,
				y: 517.5
			}, {
				x: 1035.5,
				y: 517.5
			}, {
				x: 1062.5,
				y: 517.5
			}, {
				x: 1090.5,
				y: 517.5
			}, {
				x: 1109.5,
				y: 517.5
			}, {
				x: 1125.5,
				y: 517.5
			}, {
				x: 1140.5,
				y: 517.5
			}, {
				x: 1150.5,
				y: 517.5
			}, {
				x: 1164.5,
				y: 517.5
			}, {
				x: 1173.5,
				y: 517.5
			}],
			"丨": [{
				x: 1083,
				y: 450
			}, {
				x: 1083,
				y: 423
			}, {
				x: 1083,
				y: 396
			}, {
				x: 1083,
				y: 374
			}, {
				x: 1083,
				y: 349
			}, {
				x: 1083,
				y: 333
			}, {
				x: 1083,
				y: 317
			}, {
				x: 1083,
				y: 303
			}, {
				x: 1083,
				y: 290
			}, {
				x: 1083,
				y: 280
			}, {
				x: 1083,
				y: 270
			}, {
				x: 1083,
				y: 262
			}, {
				x: 1083,
				y: 257
			}, {
				x: 1083,
				y: 253
			}],
			"丿": [{
				x: 1212.5,
				y: 498.4
			}, {
				x: 1212.5,
				y: 497.4
			}, {
				x: 1212.5,
				y: 491.4
			}, {
				x: 1211.5,
				y: 483.4
			}, {
				x: 1209.5,
				y: 473.4
			}, {
				x: 1205.5,
				y: 459.4
			}, {
				x: 1202.5,
				y: 447.4
			}, {
				x: 1197.5,
				y: 434.4
			}, {
				x: 1191.5,
				y: 417.4
			}, {
				x: 1179.5,
				y: 395.4
			}, {
				x: 1169.5,
				y: 375.4
			}, {
				x: 1149.5,
				y: 350.4
			}, {
				x: 1134.5,
				y: 329.4
			}, {
				x: 1106.5,
				y: 302.4
			}, {
				x: 1088.5,
				y: 285.4
			}, {
				x: 1062.5,
				y: 266.4
			}, {
				x: 1038.5,
				y: 249.4
			}, {
				x: 1011.5,
				y: 234.4
			}, {
				x: 992.5,
				y: 227.4
			}, {
				x: 974.5,
				y: 221.4
			}, {
				x: 956.5,
				y: 215.4
			}, {
				x: 939.5,
				y: 213.4
			}, {
				x: 927.5,
				y: 212.4
			}, {
				x: 912.5,
				y: 211.4
			}],
			"㇏": [{
				x: 1097.5,
				y: 503.7
			}, {
				x: 1098.5,
				y: 499.7
			}, {
				x: 1101.5,
				y: 493.7
			}, {
				x: 1104.5,
				y: 487.7
			}, {
				x: 1106.5,
				y: 481.7
			}, {
				x: 1110.5,
				y: 475.7
			}, {
				x: 1116.5,
				y: 464.7
			}, {
				x: 1121.5,
				y: 452.7
			}, {
				x: 1130.5,
				y: 440.7
			}, {
				x: 1140.5,
				y: 425.7
			}, {
				x: 1151.5,
				y: 413.7
			}, {
				x: 1158.5,
				y: 404.7
			}, {
				x: 1164.5,
				y: 394.7
			}, {
				x: 1173.5,
				y: 385.7
			}, {
				x: 1181.5,
				y: 379.7
			}, {
				x: 1190.5,
				y: 370.7
			}, {
				x: 1202.5,
				y: 361.7
			}, {
				x: 1211.5,
				y: 353.7
			}, {
				x: 1221.5,
				y: 346.7
			}, {
				x: 1235.5,
				y: 338.7
			}, {
				x: 1245.5,
				y: 332.7
			}, {
				x: 1250.5,
				y: 331.7
			}, {
				x: 1253.5,
				y: 328.7
			}],
			"㇀": [{
				x: 1169.5,
				y: 352
			}, {
				x: 1172.5,
				y: 354
			}, {
				x: 1175.5,
				y: 355
			}, {
				x: 1180.5,
				y: 357
			}, {
				x: 1188.5,
				y: 360
			}, {
				x: 1195.5,
				y: 364
			}, {
				x: 1204.5,
				y: 369
			}, {
				x: 1212.5,
				y: 373
			}, {
				x: 1218.5,
				y: 378
			}, {
				x: 1226.5,
				y: 383
			}, {
				x: 1232.5,
				y: 387
			}, {
				x: 1235.5,
				y: 391
			}, {
				x: 1243.5,
				y: 397
			}, {
				x: 1245.5,
				y: 401
			}, {
				x: 1251.5,
				y: 407
			}, {
				x: 1252.5,
				y: 412
			}, {
				x: 1258.5,
				y: 419
			}, {
				x: 1259.5,
				y: 422
			}, {
				x: 1263.5,
				y: 430
			}, {
				x: 1264.5,
				y: 432
			}, {
				x: 1265.5,
				y: 434
			}, {
				x: 1267.5,
				y: 436
			}, {
				x: 1267.5,
				y: 437
			}, {
				x: 1267.5,
				y: 438
			}, {
				x: 1268.5,
				y: 439
			}, {
				x: 1269.5,
				y: 441
			}, {
				x: 1269.5,
				y: 442
			}, {
				x: 1270.5,
				y: 443
			}, {
				x: 1270.5,
				y: 444
			}],
			"𠃍": [{
				x: 1094.5,
				y: 402
			}, {
				x: 1094.5,
				y: 403
			}, {
				x: 1095.5,
				y: 403
			}, {
				x: 1102.5,
				y: 403
			}, {
				x: 1109.5,
				y: 403
			}, {
				x: 1117.5,
				y: 403
			}, {
				x: 1128.5,
				y: 403
			}, {
				x: 1138.5,
				y: 403
			}, {
				x: 1149.5,
				y: 403
			}, {
				x: 1160.5,
				y: 403
			}, {
				x: 1170.5,
				y: 403
			}, {
				x: 1181.5,
				y: 403
			}, {
				x: 1186.5,
				y: 403
			}, {
				x: 1190.5,
				y: 403
			}, {
				x: 1191.5,
				y: 403
			}, {
				x: 1192.5,
				y: 403
			}, {
				x: 1192.5,
				y: 399
			}, {
				x: 1192.5,
				y: 393
			}, {
				x: 1192.5,
				y: 385
			}, {
				x: 1192.5,
				y: 374
			}, {
				x: 1192.5,
				y: 365
			}, {
				x: 1192.5,
				y: 355
			}, {
				x: 1192.5,
				y: 349
			}, {
				x: 1192.5,
				y: 342
			}, {
				x: 1192.5,
				y: 338
			}, {
				x: 1192.5,
				y: 336
			}, {
				x: 1192.5,
				y: 333
			}, {
				x: 1192.5,
				y: 330
			}, {
				x: 1192.5,
				y: 329
			}],
			"乚": [{
				x: 1062.2,
				y: 457.7
			}, {
				x: 1062.2,
				y: 451.7
			}, {
				x: 1062.2,
				y: 442.7
			}, {
				x: 1062.2,
				y: 434.7
			}, {
				x: 1059.2,
				y: 422.7
			}, {
				x: 1059.2,
				y: 395.7
			}, {
				x: 1059.2,
				y: 380.7
			}, {
				x: 1057.2,
				y: 362.7
			}, {
				x: 1056.2,
				y: 344.7
			}, {
				x: 1054.2,
				y: 323.7
			}, {
				x: 1050.2,
				y: 305.7
			}, {
				x: 1048.2,
				y: 287.7
			}, {
				x: 1045.2,
				y: 274.7
			}, {
				x: 1045.2,
				y: 259.7
			}, {
				x: 1042.2,
				y: 245.7
			}, {
				x: 1042.2,
				y: 235.7
			}, {
				x: 1041.2,
				y: 226.7
			}, {
				x: 1041.2,
				y: 217.7
			}, {
				x: 1041.2,
				y: 211.7
			}, {
				x: 1041.2,
				y: 206.7
			}, {
				x: 1041.2,
				y: 200.7
			}, {
				x: 1041.2,
				y: 196.7
			}, {
				x: 1041.2,
				y: 191.7
			}, {
				x: 1041.2,
				y: 190.7
			}, {
				x: 1042.2,
				y: 185.7
			}, {
				x: 1044.2,
				y: 181.7
			}, {
				x: 1047.2,
				y: 176.7
			}, {
				x: 1050.2,
				y: 173.7
			}, {
				x: 1060.2,
				y: 166.7
			}, {
				x: 1069.2,
				y: 164.7
			}, {
				x: 1084.2,
				y: 160.7
			}, {
				x: 1101.2,
				y: 157.7
			}, {
				x: 1120.2,
				y: 151.7
			}, {
				x: 1143.2,
				y: 149.7
			}, {
				x: 1158.2,
				y: 148.7
			}, {
				x: 1065.2,
				y: 460.7
			}, {
				x: 1174.2,
				y: 148.7
			}, {
				x: 1186.2,
				y: 148.7
			}, {
				x: 1197.2,
				y: 148.7
			}, {
				x: 1201.2,
				y: 148.7
			}, {
				x: 1204.2,
				y: 148.7
			}, {
				x: 1207.2,
				y: 151.7
			}, {
				x: 1209.2,
				y: 152.7
			}, {
				x: 1210.2,
				y: 158.7
			}, {
				x: 1210.2,
				y: 169.7
			}, {
				x: 1210.2,
				y: 179.7
			}, {
				x: 1207.2,
				y: 194.7
			}],
			"𠃊": [{
				x: 1135.2,
				y: 433.7
			}, {
				x: 1135.2,
				y: 422.7
			}, {
				x: 1134.2,
				y: 413.7
			}, {
				x: 1132.2,
				y: 398.7
			}, {
				x: 1128.2,
				y: 383.7
			}, {
				x: 1128.2,
				y: 371.7
			}, {
				x: 1125.2,
				y: 356.7
			}, {
				x: 1123.2,
				y: 340.7
			}, {
				x: 1123.2,
				y: 326.7
			}, {
				x: 1123.2,
				y: 311.7
			}, {
				x: 1123.2,
				y: 304.7
			}, {
				x: 1123.2,
				y: 299.7
			}, {
				x: 1123.2,
				y: 295.7
			}, {
				x: 1123.2,
				y: 293.7
			}, {
				x: 1122.2,
				y: 292.7
			}, {
				x: 1122.2,
				y: 290.7
			}, {
				x: 1126.2,
				y: 290.7
			}, {
				x: 1141.2,
				y: 290.7
			}, {
				x: 1156.2,
				y: 290.7
			}, {
				x: 1200.2,
				y: 290.7
			}, {
				x: 1224.2,
				y: 290.7
			}, {
				x: 1249.2,
				y: 290.7
			}, {
				x: 1267.2,
				y: 290.7
			}, {
				x: 1279.2,
				y: 290.7
			}, {
				x: 1285.2,
				y: 290.7
			}],
			"亅": [{
				x: 1230.2,
				y: 470.7
			}, {
				x: 1230.2,
				y: 467.7
			}, {
				x: 1230.2,
				y: 460.7
			}, {
				x: 1230.2,
				y: 449.7
			}, {
				x: 1231.2,
				y: 439.7
			}, {
				x: 1231.2,
				y: 425.7
			}, {
				x: 1231.2,
				y: 407.7
			}, {
				x: 1231.2,
				y: 391.7
			}, {
				x: 1231.2,
				y: 376.7
			}, {
				x: 1231.2,
				y: 359.7
			}, {
				x: 1231.2,
				y: 346.7
			}, {
				x: 1231.2,
				y: 335.7
			}, {
				x: 1231.2,
				y: 325.7
			}, {
				x: 1231.2,
				y: 317.7
			}, {
				x: 1228.2,
				y: 310.7
			}, {
				x: 1227.2,
				y: 305.7
			}, {
				x: 1225.2,
				y: 304.7
			}, {
				x: 1225.2,
				y: 302.7
			}, {
				x: 1225.2,
				y: 301.7
			}, {
				x: 1224.2,
				y: 301.7
			}, {
				x: 1224.2,
				y: 305.7
			}, {
				x: 1219.2,
				y: 313.7
			}, {
				x: 1213.2,
				y: 322.7
			}, {
				x: 1203.2,
				y: 332.7
			}, {
				x: 1195.2,
				y: 340.7
			}, {
				x: 1185.2,
				y: 350.7
			}],
			"㇉": [{
				x: 1106.5,
				y: 524.4
			}, {
				x: 1106.5,
				y: 521.4
			}, {
				x: 1106.5,
				y: 518.4
			}, {
				x: 1104.5,
				y: 512.4
			}, {
				x: 1101.5,
				y: 503.4
			}, {
				x: 1098.5,
				y: 494.4
			}, {
				x: 1094.5,
				y: 483.4
			}, {
				x: 1089.5,
				y: 474.4
			}, {
				x: 1086.5,
				y: 462.4
			}, {
				x: 1080.5,
				y: 452.4
			}, {
				x: 1073.5,
				y: 437.4
			}, {
				x: 1068.5,
				y: 426.4
			}, {
				x: 1064.5,
				y: 413.4
			}, {
				x: 1059.5,
				y: 401.4
			}, {
				x: 1055.5,
				y: 390.4
			}, {
				x: 1052.5,
				y: 381.4
			}, {
				x: 1049.5,
				y: 375.4
			}, {
				x: 1044.5,
				y: 368.4
			}, {
				x: 1044.5,
				y: 365.4
			}, {
				x: 1043.5,
				y: 360.4
			}, {
				x: 1041.5,
				y: 357.4
			}, {
				x: 1040.5,
				y: 356.4
			}, {
				x: 1040.5,
				y: 354.4
			}, {
				x: 1043.5,
				y: 354.4
			}, {
				x: 1047.5,
				y: 354.4
			}, {
				x: 1053.5,
				y: 354.4
			}, {
				x: 1062.5,
				y: 354.4
			}, {
				x: 1071.5,
				y: 354.4
			}, {
				x: 1082.5,
				y: 356.4
			}, {
				x: 1100.5,
				y: 357.4
			}, {
				x: 1121.5,
				y: 357.4
			}, {
				x: 1142.5,
				y: 357.4
			}, {
				x: 1160.5,
				y: 357.4
			}, {
				x: 1178.5,
				y: 357.4
			}, {
				x: 1194.5,
				y: 357.4
			}, {
				x: 1206.5,
				y: 357.4
			}, {
				x: 1215.5,
				y: 357.4
			}, {
				x: 1221.5,
				y: 357.4
			}, {
				x: 1226.5,
				y: 357.4
			}, {
				x: 1230.5,
				y: 357.4
			}, {
				x: 1233.5,
				y: 357.4
			}, {
				x: 1235.5,
				y: 357.4
			}, {
				x: 1236.5,
				y: 357.4
			}, {
				x: 1238.5,
				y: 357.4
			}, {
				x: 1238.5,
				y: 356.4
			}, {
				x: 1238.5,
				y: 354.4
			}, {
				x: 1238.5,
				y: 351.4
			}, {
				x: 1238.5,
				y: 350.4
			}, {
				x: 1238.5,
				y: 345.4
			}, {
				x: 1236.5,
				y: 339.4
			}, {
				x: 1236.5,
				y: 333.4
			}, {
				x: 1235.5,
				y: 326.4
			}, {
				x: 1232.5,
				y: 315.4
			}, {
				x: 1229.5,
				y: 306.4
			}, {
				x: 1226.5,
				y: 299.4
			}, {
				x: 1224.5,
				y: 288.4
			}, {
				x: 1220.5,
				y: 275.4
			}, {
				x: 1217.5,
				y: 267.4
			}, {
				x: 1214.5,
				y: 258.4
			}, {
				x: 1211.5,
				y: 248.4
			}, {
				x: 1206.5,
				y: 237.4
			}, {
				x: 1203.5,
				y: 230.4
			}, {
				x: 1197.5,
				y: 221.4
			}, {
				x: 1197.5,
				y: 216.4
			}, {
				x: 1193.5,
				y: 209.4
			}, {
				x: 1190.5,
				y: 206.4
			}, {
				x: 1188.5,
				y: 203.4
			}, {
				x: 1187.5,
				y: 204.4
			}, {
				x: 1184.5,
				y: 206.4
			}, {
				x: 1181.5,
				y: 209.4
			}, {
				x: 1176.5,
				y: 216.4
			}, {
				x: 1167.5,
				y: 225.4
			}, {
				x: 1160.5,
				y: 234.4
			}, {
				x: 1154.5,
				y: 242.4
			}]
		}, cc._RF.pop()
	}, {}],
	soundManager: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "410d4OUWf5Dt6IVtna7cXDB", "soundManager");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			a = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.SOUND_LOCAL_KEY = void 0;
		var s = e("./superManager"),
			c = e("../gameEngine"),
			l = e("../services/miniGameContent/miniApp");
		n.SOUND_LOCAL_KEY = "sound-manager-key";
		var u = function(e) {
			function t() {
				var t = e.call(this) || this;
				return t.className = "声音管理", t.soundResPath = "preload/sounds/", t.m_soundEnabled = !0, t.m_vibrateEnabled = !0, t
			}
			return i(t, e), t.prototype.loadManager = function() {
				return r(this, void 0, Promise, function() {
					return a(this, function(t) {
						switch (t.label) {
							case 0:
								return [4, e.prototype.loadManager.call(this)];
							case 1:
								return t.sent(), this.onReadSetting(), [2, Promise.resolve()]
						}
					})
				})
			}, Object.defineProperty(t.prototype, "Volume", {
				get: function() {
					return cc.audioEngine.getMusicVolume()
				},
				set: function(e) {
					this.isSoundEnabled() && cc.audioEngine.setMusicVolume(e)
				},
				enumerable: !1,
				configurable: !0
			}), t.prototype.isSoundEnabled = function() {
				return this.m_soundEnabled
			}, t.prototype.isVibrateEnabled = function() {
				return this.m_vibrateEnabled
			}, t.prototype.setVibrateEnabled = function(e) {
				this.m_vibrateEnabled = e, this.onSetWriteSetting()
			}, t.prototype.setSoundEnabled = function(e) {
				this.m_soundEnabled = e, this.isSoundEnabled() || this.stopMusic(), this.onSetWriteSetting()
			}, t.prototype.onSetWriteSetting = function() {
				var e = {
					sound: this.m_soundEnabled,
					vibrate: this.m_vibrateEnabled
				};
				c.services().localStorageSrv.setStorage(n.SOUND_LOCAL_KEY, JSON.stringify(e))
			}, t.prototype.onReadSetting = function() {
				var e = c.services().localStorageSrv.getStorage(n.SOUND_LOCAL_KEY);
				if (e) {
					var t = JSON.parse(e);
					this.m_soundEnabled = t.sound, this.m_vibrateEnabled = t.vibrate
				}
			}, t.prototype.playVibrate = function() {
				this.isVibrateEnabled() && c.services().miniGameSrv.getAppApiInstance().vibrate(l.VIBRATE_TYPE.SHORT)
			}, t.prototype.playMusic = function(e) {
				if (this.isSoundEnabled()) {
					var t = this.getSoundUrl(e);
					c.modules().uiControlModule.getGameBundle().load(t, cc.AudioClip, function(e, t) {
						e ? cc.error(e) : cc.audioEngine.playMusic(t, !0)
					})
				}
			}, t.prototype.stopMusic = function() {
				cc.audioEngine.stopMusic()
			}, t.prototype.playSound = function(e) {
				return r(this, void 0, Promise, function() {
					var t = this;
					return a(this, function() {
						return [2, new Promise(function(n) {
							if (!t.isSoundEnabled()) return n(null);
							var o = t.getSoundUrl(e);
							c.modules().uiControlModule.getGameBundle().load(o, cc.AudioClip, function(t, i) {
								t && c.default.getModules().uiControlModule.getGameBundle().load("sounds/" + e, cc.AudioClip, function(e, t) {
									if (e) return console.info("存在音频问题"), cc.error(e), n(null);
									try {
										if (t) {
											var i = cc.audioEngine.play(t, !1, 1);
											n(i)
										}
									} catch (r) {
										return console.warn("#89警告 存在音频问题", o), cc.error(e), n(null)
									}
								});
								try {
									if (i) {
										var r = cc.audioEngine.play(i, !1, 1);
										n(r)
									}
								} catch (a) {
									console.warn("#89警告 存在音频问题", o)
								}
							})
						})]
					})
				})
			}, t.prototype.stopSound = function(e) {
				cc.audioEngine.stop(e)
			}, t.prototype.pauseSound = function(e) {
				cc.audioEngine.pause(e)
			}, t.prototype.resumeSound = function(e) {
				cc.audioEngine.resume(e)
			}, t.prototype.getSoundUrl = function(e) {
				return this.soundResPath + e
			}, t
		}(s.default);
		n.default = u, cc._RF.pop()
	}, {
		"../gameEngine": "gameEngine",
		"../services/miniGameContent/miniApp": "miniApp",
		"./superManager": "superManager"
	}],
	start: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "427a0D9ekFMu57VSv5uEPAA", "start");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			},
			a = this && this.__spreadArrays || function() {
				for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
				var o = Array(e),
					i = 0;
				for (t = 0; t < n; t++)
					for (var r = arguments[t], a = 0, s = r.length; a < s; a++, i++) o[i] = r[a];
				return o
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = e("../engines/gameEngine"),
			c = e("../engines/configs/gameConfig"),
			l = e("../Game/MainRoot"),
			u = e("../engines/libs/physics_tool"),
			d = cc._decorator,
			p = d.ccclass;
		d.property, cc.macro.ENABLE_WEBGL_ANTIALIAS = !0, cc.macro.ENABLE_MULTI_TOUCH = !0, console.log("引擎配置初始化");
		var f = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return i(t, e), t.prototype.onLoad = function() {
				var e = this.node.parent.getChildByName("UIRoot");
				cc.game.addPersistRootNode(e), l.default.SetUIRoot(e)
			}, t.prototype.start = function() {
				var e = this;
				c.default.LOG_SERVICE_OPEN ? (console.log("加载>>>>>>>"), s.default.getServices().logSrv.loadService().then(function() {
					s.default.getServices().logSrv.onLoadedService().then(function() {
						e.onReady()
					})
				})) : (console.log("onready????"), this.onReady())
			}, t.prototype.onReady = function() {
				console.log("<start> 场景"), cc.sys.isNative ? console.log("cocos 2d-x") : console.log("cocos webgl"), this.initEngineConfig(), this.printEngineConfig(), this.goLoading()
			}, t.prototype.initEngineConfig = function() {
				cc.debug.setDisplayStats(!1), u.default.openCollision(!1), u.default.openPhysics(!1);
				var e = cc.director.getCollisionManager();
				e.enabled = !0, e.enabledDebugDraw = !1, cc.director.getPhysicsManager().enabledAccumulator = !0, cc.PhysicsManager.FIXED_TIME_STEP = 1 / 60, cc.macro.ENABLE_WEBGL_ANTIALIAS = !1
			}, t.prototype.printEngineConfig = function() {
				console.group("cocos引擎配置"), console.log("是否开启抗锯齿", cc.view.isAntiAliasEnabled(), cc.macro.ENABLE_WEBGL_ANTIALIAS), console.log("是否开启多点触摸", cc.macro.ENABLE_MULTI_TOUCH), console.log("是否显示左下角调试信息", cc.debug.isDisplayStats()), console.log("是否开启瓦片地图的自动裁减功能", cc.macro.ENABLE_TILEDMAP_CULLING), console.log("单次批处理渲染的顶点数量", cc.macro.BATCH_VERTEX_COUNT), console.log("Canvas背景是否支持 alpha 通道", cc.macro.ENABLE_TRANSPARENT_CANVAS), console.log.apply(console, a(["引擎支持的图片格式"], cc.macro.SUPPORT_TEXTURE_FORMATS)), console.groupEnd()
			}, t.prototype.goLoading = function() {
				s.default.loadScene("loading")
			}, r([p], t)
		}(cc.Component);
		n.default = f, cc._RF.pop()
	}, {
		"../Game/MainRoot": "MainRoot",
		"../engines/configs/gameConfig": "gameConfig",
		"../engines/gameEngine": "gameEngine",
		"../engines/libs/physics_tool": "physics_tool"
	}],
	superInterface: [function(e, t) {
		"use strict";
		cc._RF.push(t, "21d46Ab/AtJG6FHN9Vaq+5w", "superInterface"), cc._RF.pop()
	}, {}],
	superManager: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "74f25s+3ElOUZoffdG4BjnB", "superManager");
		var o = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			i = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r = function() {
			function e() {
				this.className = "父管理"
			}
			return e.prototype.loadManager = function() {
				return o(this, void 0, Promise, function() {
					return i(this, function() {
						return console.log("加载管理", this.className), [2, Promise.resolve()]
					})
				})
			}, e.prototype.onLoadedManager = function() {
				return o(this, void 0, Promise, function() {
					return i(this, function() {
						return console.log("加载完毕", this.className), [2, Promise.resolve()]
					})
				})
			}, e
		}();
		n.default = r, cc._RF.pop()
	}, {}],
	superModule: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "a3724VWghBCP7N/IQWcJrHu", "superModule");
		var o = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			i = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r = function() {
			function e() {
				this.m_className = "模块超类"
			}
			return e.prototype.preLoadModules = function() {
				return o(this, void 0, Promise, function() {
					return i(this, function() {
						return console.log("预先加载模块", this.m_className), [2, Promise.resolve()]
					})
				})
			}, e.prototype.loadModule = function() {
				return o(this, void 0, Promise, function() {
					return i(this, function() {
						return console.log("加载模块", this.m_className), [2, Promise.resolve()]
					})
				})
			}, e.prototype.onLoadedModule = function() {
				return o(this, void 0, Promise, function() {
					return i(this, function() {
						return console.log("加载完毕", this.m_className), e.m_instance = this, [2, Promise.resolve()]
					})
				})
			}, e.m_instance = null, e
		}();
		n.default = r, cc._RF.pop()
	}, {}],
	superService: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "db930bIkzRAb5mFEAItOQNi", "superService");
		var o = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			i = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r = function() {
			function e() {
				this.className = "父服务", this.m_loaded = !1
			}
			return e.prototype.loadService = function() {
				return o(this, void 0, Promise, function() {
					return i(this, function() {
						return console.log("加载服务", this.className), [2, Promise.resolve()]
					})
				})
			}, e.prototype.onLoadedService = function() {
				return o(this, void 0, Promise, function() {
					return i(this, function() {
						return console.log("加载完毕", this.className), this.m_loaded = !0, [2, Promise.resolve()]
					})
				})
			}, e.prototype.isLoaded = function() {
				return this.m_loaded
			}, e
		}();
		n.default = r, cc._RF.pop()
	}, {}],
	uiModule: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "d2172RdtbhJ47cUFRF/Qx6I", "uiModule");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			a = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.UI_Z_INDEX = void 0;
		var s, c = e("./superModule"),
			l = e("./uiModule/o1MessageBox"),
			u = e("./uiModule/o1DialogBox"),
			d = e("./uiModule/o1Loading"),
			p = e("../gameEngine"),
			f = e("../../O1ModuleRes/control/RewardView"),
			h = e("../../O1ModuleRes/control/addUserProp"),
			m = e("../../Game/MainRoot");
		(function(e) {
			e[e.NORMAL = 0] = "NORMAL", e[e.DIALOG = 10] = "DIALOG", e[e.MESSAGE = 11] = "MESSAGE", e[e.LOADING = 12] = "LOADING"
		})(s = n.UI_Z_INDEX || (n.UI_Z_INDEX = {}));
		var y = function(e) {
			function t() {
				var t = e.call(this) || this;
				return t.m_className = "UI模块", t.m_pathFrameBundle = "o1ModuleRes", t.m_pathGameBundle = "gameBundle", t.m_pathPreloadFrame = "preload/frame", t.m_pathPreloadGame = "preload", t.InfinityModel = "user-is-infinity", t.InfinityPower_Key = "user-logintime", t.m_frameBundle = null, t.m_gameBundle = null, t.m_uiBgTexture = null, t.m_uiBgSpriteFrame = null, t.isOKRightOrUnderlie = !0, t.dlgBoxName_VD = ["o1DialogBox_VD_CP", "o1DialogBox_VD_DS", "o1DialogBox_VD_CC"], t.m_loadingNode = null, t.m_loadingOver = !1, t
			}
			return i(t, e), t.prototype.setGaussianMode = function() {}, t.prototype.getFrameBundlePreloadResPath = function() {
				return this.m_pathPreloadFrame
			}, t.prototype.getGameBundlePreloadResPath = function() {
				return this.m_pathPreloadGame
			}, t.prototype.preLoadModules = function() {
				return r(this, void 0, Promise, function() {
					return a(this, function() {
						return [2, e.prototype.preLoadModules.call(this)]
					})
				})
			}, t.prototype.loadModule = function() {
				return r(this, void 0, Promise, function() {
					return a(this, function() {
						return [2, e.prototype.loadModule.call(this)]
					})
				})
			}, t.prototype.showMessageBox = function(e, t, n) {
				void 0 === t && (t = null), void 0 === n && (n = 2), t = t || m.default.UIRoot, this.m_frameBundle.load(this.m_pathPreloadFrame + "/o1MessageBox", cc.Prefab, function(o, i) {
					if (o) console.error("#40错误 错误消息框预制体", o);
					else {
						var r = cc.instantiate(i);
						r.getComponent(l.default).showMessageBox(e, n), t.addChild(r, s.MESSAGE)
					}
				})
			}, t.prototype.addShortcutBox = function(e) {
				void 0 === e && (e = null), m.default.isShortcutOpen() && (e = e || m.default.UIRoot, this.m_frameBundle.load(this.m_pathPreloadFrame + "/addDestokPage", cc.Prefab, function(t, n) {
					if (t) console.error("#40错误 错误消息框预制体", t);
					else {
						var o = cc.instantiate(n);
						e.addChild(o, s.MESSAGE)
					}
				}))
			}, t.prototype.showDialogBox = function(e, t, n, o, i, r, a, c, l, d) {
				void 0 === n && (n = !1), void 0 === i && (i = null), void 0 === l && (l = null), i = i || m.default.UIRoot, this.m_frameBundle.load(this.m_pathPreloadFrame + "/o1DialogBox", cc.Prefab, function(l, p) {
					if (l) console.error("#40错误 错误对话框预制体", l);
					else {
						var f = cc.instantiate(p);
						f.getComponent(u.default).showDialogBox(e, t, n, o, r, a, c, d), i.addChild(f, s.DIALOG)
					}
				})
			}, t.prototype.showLoading = function(e, t) {
				return void 0 === e && (e = null), void 0 === t && (t = "Đang tải"), r(this, void 0, void 0, function() {
					var n = this;
					return a(this, function() {
						return [2, new Promise(function(o) {
							n.m_loadingOver = !1, e = e || m.default.UIRoot, n.m_frameBundle.load(n.m_pathPreloadFrame + "/o1Loading", cc.Prefab, function(i, r) {
								if (i) return console.error("#40错误 错误对话框加载", i), o();
								n.m_loadingNode && (n.m_loadingNode.isValid ? n.m_loadingNode.removeFromParent(!1) : (n.m_loadingNode.destroy(), n.m_loadingNode = null)), n.m_loadingNode || (n.m_loadingNode = cc.instantiate(r)), n.m_loadingNode.getComponent(d.default).showLoading(t), e.addChild(n.m_loadingNode, s.LOADING), n.m_loadingNode.setPosition(0, 0), console.log("重新加载loading也", n.m_loadingNode.x, n.m_loadingNode.y), o()
							})
						})]
					})
				})
			}, t.prototype.showInfinityPower = function(e, t) {
				if (p.default.getServices().localStorageSrv.getStorage(this.InfinityPower_Key)) {
					var n = Math.random();
					0 == Number(p.default.getServices().localStorageSrv.getStorage(this.InfinityModel)) ? n < e && this.createAndShowInfinityPower(t) : this.showMessageBox("Đã nhận thể lực không giới hạn!")
				} else p.default.getServices().localStorageSrv.setStorage(this.InfinityPower_Key, Date.now()), this.createAndShowInfinityPower(t)
			}, t.prototype.showUserPropGet = function(e, t, n, o) {
				var i = this;
				console.log(12344555);
				this.showFramePrefab("preload/control/addUserProp", n, !0, function(n) {
					n.getComponent(h.default).setData(e, t), o && o()
				})
			}, t.prototype.showGetRewarded = function(e, t, n, o, i) {
				i = i || m.default.UIRoot, this.showFramePrefab("preload/control/RewardView", i, !0, function(i) {
					i.getComponent(f.default).OnShowReward(e, t, n, o)
				})
			}, t.prototype.createAndShowInfinityPower = function(e) {
				e = e || m.default.UIRoot, this.showFramePrefab("preload/infinitypower", e, !1, function() {})
			}, t.prototype.hideLoading = function() {
				this.m_loadingNode && this.m_loadingNode.isValid && this.m_loadingNode.destroy(), this.m_loadingNode = null, this.m_loadingOver = !0
			}, t.prototype.getFrameBundlePath = function() {
				return this.m_pathFrameBundle
			}, t.prototype.getGameBundlePath = function() {
				return this.m_pathGameBundle
			}, t.prototype.setFrameBundle = function(e) {
				this.m_frameBundle = e
			}, t.prototype.setGameBundle = function(e) {
				this.m_gameBundle = e
			}, t.prototype.getFrameBundle = function() {
				return this.m_frameBundle
			}, t.prototype.getGameBundle = function() {
				return this.m_gameBundle
			}, t.prototype.showFramePrefab = function(e, t, n, o) {
				var i = this;
				t = t || m.default.UIRoot, n && this.showLoading(), this.m_frameBundle.load(e, cc.Prefab, function(r, a) {
					if (n && i.hideLoading(), r) console.error("#446 错误 ui加载预制体", e);
					else if (t && t.isValid) {
						var s = cc.instantiate(a);
						t.addChild(s), o && o(s)
					} else console.error("#453 错误 ui 父节点已失效", e, Date.now())
				})
			}, t.prototype.showHideDialogAnimation = function(e, t, n) {
				e && e.isValid && (t ? (e.scale = 0, cc.tween(e).parallel(cc.tween(e).to(.26, {
					scale: 1
				}), cc.tween(e).by(.117, {
					y: 250
				}, {
					easing: "cubicOut"
				}).by(.26 * .55, {
					y: -250
				}, {
					easing: "cubicIn"
				})).call(n).start()) : cc.tween(e).parallel(cc.tween(e).to(.26, {
					scale: 0
				}), cc.tween(e).by(.26 * .55, {
					y: 250
				}, {
					easing: "cubicOut"
				}).by(.117, {
					y: -250
				}, {
					easing: "cubicIn"
				})).call(n).start())
			}, t
		}(c.default);
		n.default = y, cc._RF.pop()
	}, {
		"../../Game/MainRoot": "MainRoot",
		"../../O1ModuleRes/control/RewardView": "RewardView",
		"../../O1ModuleRes/control/addUserProp": "addUserProp",
		"../gameEngine": "gameEngine",
		"./superModule": "superModule",
		"./uiModule/o1DialogBox": "o1DialogBox",
		"./uiModule/o1Loading": "o1Loading",
		"./uiModule/o1MessageBox": "o1MessageBox"
	}],
	umaConfig: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "1ca43B+7SlBma+3TCoL+ZsN", "umaConfig"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.UMA_SDK = void 0, (n.UMA_SDK || (n.UMA_SDK = {})).APP_KEY = "60e2a4818a102159db886a82", cc._RF.pop()
	}, {}],
	userInterface: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "38f56a0EIxEFpb4OmcNPRI9", "userInterface"), Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.REWARD_TYPE = void 0,
			function(e) {
				e[e.COIN = 0] = "COIN", e[e.POWER = 1] = "POWER", e[e.DIAMOND = 2] = "DIAMOND", e[e.CUSTOM = 3] = "CUSTOM"
			}(n.REWARD_TYPE || (n.REWARD_TYPE = {})), cc._RF.pop()
	}, {}],
	userService: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "3eca8N5/3pDhaqdtgN0KWt5", "userService");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, r) {
					function a(e) {
						try {
							c(o.next(e))
						} catch (t) {
							r(t)
						}
					}

					function s(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							r(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
							e(t)
						})).then(a, s)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			a = this && this.__generator || function(e, t) {
				var n, o, i, r, a = {
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
					if (n) throw new TypeError("Generator is already executing.");
					for (; a;) try {
						if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
						switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
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
								a.label++, o = r[1], r = [0];
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
						r = [6, s], o = 0
					} finally {
						n = i = 0
					}
					if (5 & r[0]) throw r[1];
					return {
						value: r[0] ? r[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.BARDGEANITYPE = n.MEMBERTYPE = void 0;
		var s = e("./superService"),
			c = e("../gameEngine"),
			l = e("../configs/gameConfig"),
			u = e("../libs/data_control"),
			d = e("../managers/gameContent/gameMode_json"),
			p = e("../../Game/MainRoot"),
			f = e("../../Game/Enum");
		(function(e) {
			e[e.DIAMOND = 0] = "DIAMOND", e[e.KING = 1] = "KING"
		})(n.MEMBERTYPE || (n.MEMBERTYPE = {})),
		function(e) {
			e.DIAMONDSTAND = "DiamondStand", e.DIAMONDOPEN = "DiamondArise", e.KINGSTAND = "KingStand", e.KINGOPEN = "Switch"
		}(n.BARDGEANITYPE || (n.BARDGEANITYPE = {}));
		var h = function(e) {
			function t() {
				var t = e.call(this) || this;
				return t.className = "用户服务", t.m_unlockModes = [], t.m_modeAdCount = {}, t.COINS_KEY = "user-coins", t.POWER_KEY = "user-power", t.UNLOCK_KEY = "user-unlock", t.POWER_TIME_KEY = "user-power-time", t.FIRST_PLAY_KEY = "user-first-play", t.UNLOCK_MODE = "user-unlock-mode", t.MODE_ADCOUNT_KEY = "user-mode-adCount", t.UNLOCK_MODE_DAY_KEY = "user-unlock-mode-day-key", t.m_currLoginCode = null, t.m_UniqueId = null, t.m_curWebUserInfo = null, t.m_unlockSkins = ["Frog"], t.m_useSkin = "Frog", t.UNLOCK_SKIN_KEY = "user-unlock-skin", t.USE_SKIN_KEY = "user-use-skin", t
			}
			return i(t, e), t.prototype.loadService = function() {
				return r(this, void 0, Promise, function() {
					return a(this, function(t) {
						switch (t.label) {
							case 0:
								return [4, e.prototype.loadService.call(this)];
							case 1:
								return t.sent(), this.onInitNormalData(l.default.MAX_POWER, l.default.NORMAL_POWER, l.default.NORMAL_COINS, l.default.ADD_ONCE_POWER, l.default.REST_POWER_TIME, l.default.REST_POWER_VALUE, l.default.ADD_ONCE_COINS), [2, Promise.resolve()]
						}
					})
				})
			}, t.prototype.isFirstPlayerTimeIn = function() {
				return Date.now() - this.m_firstPlayerTime < 1e3 * l.default.FIRST_VIDEO_TIME
			}, t.prototype.onInitNormalData = function(e, t, n, o, i, r, a) {
				this.m_powerMax = e, this.m_normalPower = t, this.m_normalCoins = n, this.m_constAddOncePower = o, this.m_constResetPowerTime = i, this.m_constResetPowerValue = r, this.m_constAddOnceCoins = a, this.loadUserData()
			}, t.prototype.getResetPowerTime = function() {
				return this.m_constResetPowerTime
			}, t.prototype.getResetPowerValue = function() {
				return this.m_constResetPowerValue
			}, t.prototype.setCoins = function(e, t) {
				t && (e = this.m_coins + e), this.m_coins = u.default.getValueOfAreaMinMax(e, 0, Number.MAX_VALUE), this.writeCoins()
			}, t.prototype.getCoins = function() {
				return this.m_coins
			}, t.prototype.setPower = function(e, t, n, o) {
				void 0 === o && (o = !1), t && (e = this.m_power + e), this.m_powerMax == this.m_power && e == this.m_power - 1 && (o = !0), this.m_power = n ? u.default.getValueOfAreaMinMax(e, 0, 9999) : u.default.getValueOfAreaMinMax(e, 0, this.m_powerMax), this.writePower(o)
			}, t.prototype.getMaxPower = function() {
				return this.m_powerMax
			}, t.prototype.getNormalPower = function() {
				return this.m_normalPower
			}, t.prototype.getPower = function() {
				return isNaN(Number(this.m_power)) && (console.info("获取体力异常归零", this.m_power), c.default.getServices().localStorageSrv.setStorage(this.POWER_KEY, 0), this.m_power = 0), this.m_power
			}, t.prototype.getMemberStatus = function() {
				var e = c.default.getServices().localStorageSrv.getStorage("private-member-type") || "0";
				return Number(e)
			}, t.prototype.setMemberStatus = function(e) {
				void 0 === e && (e = 0), c.default.getServices().localStorageSrv.setStorage("private-member-type", e), c.default.getServices().localStorageSrv.setStorage("user-membertime", Date.now())
			}, t.prototype.addPowerOfVideo = function() {
				this.setPower(this.m_constAddOncePower, !0, !0)
			}, t.prototype.getConstAddOncePower = function() {
				return this.m_constAddOncePower
			}, t.prototype.setUnlockLevel = function(e, t) {
				t && (e = this.m_unlockLevel + e), this.m_unlockLevel = e, this.writeUnLockLevel()
			}, t.prototype.getUnlockLevel = function() {
				return this.m_unlockLevel
			}, t.prototype.getPowerResetTimer = function() {
				var e = Date.now(),
					t = c.default.getServices().localStorageSrv.getStorage(this.POWER_TIME_KEY) || e;
				return this.m_constResetPowerTime - Math.floor((e - Number(t)) / 1e3)
			}, t.prototype.onPowerTimerReset = function() {
				var e = Date.now(),
					t = c.default.getServices().localStorageSrv.getStorage(this.POWER_TIME_KEY) || e;
				t = Number(t);
				var n = Math.floor((e - t) / (1e3 * this.m_constResetPowerTime)) * this.m_constResetPowerValue;
				return !!(n && this.getPower() < this.m_powerMax) && (this.setPower(n, !0, !1, !0), !0)
			}, t.prototype.UnlockMode = function(e) {
				this.getModeUnlocked(e) || (this.m_unlockModes.push(e), this.writeUnlockMode())
			}, t.prototype.getModeUnlocked = function(e) {
				return this.m_unlockModes.includes(e)
			}, t.prototype.addModeAdCount = function(e) {
				this.m_modeAdCount[e]++, this.writeModeAdCount()
			}, t.prototype.setModeAdCount = function(e, t) {
				this.m_modeAdCount[e] = t, this.writeModeAdCount()
			}, t.prototype.getModeAdCount = function(e) {
				return this.m_modeAdCount[e]
			}, t.prototype.loadUser = function() {
				this.loadNameAndHead()
			}, t.prototype.loadFirstPlayerTime = function() {
				this.m_firstPlayerTime = Number(c.default.getServices().localStorageSrv.getStorage(this.FIRST_PLAY_KEY) || "0"), 0 == this.m_firstPlayerTime && (this.m_firstPlayerTime = Date.now(), this.writeFirstPlayerTime())
			}, t.prototype.writeFirstPlayerTime = function() {
				c.default.getServices().localStorageSrv.setStorage(this.FIRST_PLAY_KEY, this.m_firstPlayerTime)
			}, t.prototype.loadUserData = function() {
				this.loadCoins(), this.loadPower(), this.loadUnlockLevel(), this.loadFirstPlayerTime(), this.loadUnlockMode(), this.loadModeAdCount(), this.loadUnlockSkin(), this.loadUseSkin(), this.loadNameAndHead()
			}, t.prototype.loadModeAdCount = function() {
				if (this.m_modeAdCount = {
						0: 0,
						1: 0,
						2: 0,
						3: 0,
						4: 0
					}, c.default.getServices().localStorageSrv.getStorage(this.MODE_ADCOUNT_KEY)) {
					var e = JSON.parse(c.default.getServices().localStorageSrv.getStorage(this.MODE_ADCOUNT_KEY));
					for (var t in e)
						if (Object.prototype.hasOwnProperty.call(e, t)) {
							var n = e[t];
							this.m_modeAdCount[t] = n
						}
				}
			}, t.prototype.writeModeAdCount = function() {
				c.services().localStorageSrv.setStorage(this.MODE_ADCOUNT_KEY, JSON.stringify(this.m_modeAdCount))
			}, t.prototype.initUnlockMode = function(e) {
				for (var t = c.default.getManagers().gameMgr.getCurrMode().type, n = 0; n < this.m_unlockModes.length; n++) {
					var o = this.m_unlockModes[n],
						i = l.default.MODE_UNLOCK_TYPE[o],
						r = u.default.getCurrDateDayString(),
						a = this.getUnlockModeDay(),
						s = (y = l.default.MODE_LEVEL_COUNT[o]).mode,
						p = !1;
					if (p = 0 != (g = y.level) && e == g && t == o, 1 == i && a != r && !p) {
						var f = this.m_unlockModes.indexOf(o);
						f > -1 && this.m_unlockModes.splice(f, 1)
					}
				}
				var h = d.default();
				for (var m in h) {
					o = h[m].type, i = l.default.MODE_UNLOCK_TYPE[o], s = (y = l.default.MODE_LEVEL_COUNT[o]).mode;
					var y, g = y.level;
					0 == i && (p = e == g && t == s) && (this.m_unlockModes.includes(o) || this.m_unlockModes.push(o))
				}
				this.writeUnlockMode()
			}, t.prototype.loadUnlockMode = function() {
				var e = c.default.getServices().localStorageSrv.getStorage(this.UNLOCK_MODE);
				e && (this.m_unlockModes = JSON.parse(e))
			}, t.prototype.getUnlockModeDay = function() {
				return c.default.getServices().localStorageSrv.getStorage(this.UNLOCK_MODE_DAY_KEY)
			}, t.prototype.setUnlockModeDay = function() {
				var e = u.default.getCurrDateDayString();
				c.default.getServices().localStorageSrv.setStorage(this.UNLOCK_MODE_DAY_KEY, e)
			}, t.prototype.checkUnlockModeIsVaild = function() {
				return this.getUnlockModeDay() == u.default.getCurrDateDayString()
			}, t.prototype.writeUnlockMode = function() {
				c.services().localStorageSrv.setStorage(this.UNLOCK_MODE, JSON.stringify(this.m_unlockModes))
			}, t.prototype.loadUnlockLevel = function() {
				this.m_unlockLevel = Number(c.default.getServices().localStorageSrv.getStorage(this.UNLOCK_KEY) || 0)
			}, t.prototype.writeUnLockLevel = function() {
				c.default.getServices().localStorageSrv.setStorage(this.UNLOCK_KEY, this.m_unlockLevel)
			}, t.prototype.loadCoins = function() {
				this.m_coins = Number(c.default.getServices().localStorageSrv.getStorage(this.COINS_KEY) || 0) || this.m_normalCoins
			}, t.prototype.loadPower = function() {
				var e = c.default.getServices().localStorageSrv.getStorage(this.POWER_KEY);
				isNaN(Number(e)) && (console.info("初始异常归零", e), c.default.getServices().localStorageSrv.setStorage(this.POWER_KEY, 0), e = "0"), this.m_power = "" === e || null === e ? this.m_normalPower : Number(e), this.onPowerTimerReset()
			}, t.prototype.writeCoins = function() {
				c.default.getServices().localStorageSrv.setStorage(this.COINS_KEY, this.m_coins)
			}, t.prototype.writePower = function(e) {
				c.default.getServices().localStorageSrv.setStorage(this.POWER_KEY, this.m_power);
				var t = c.services().localStorageSrv.getStorage(this.POWER_TIME_KEY);
				if (e || !t) {
					var n = Date.now();
					c.default.getServices().localStorageSrv.setStorage(this.POWER_TIME_KEY, n)
				}
			}, t.prototype.loadNameAndHead = function() {
				var e = c.default.getServices().miniGameSrv.getAppApiInstance(),
					t = function() {
						e.showToast({
							title: "登录失败"
						})
					};
				e.login({
					force: !1,
					success: function() {
						e.authorize({
							success: function() {
								e.getUserInfo({
									success: function() {},
									fail: t
								})
							},
							fail: t
						})
					},
					fail: t
				})
			}, t.prototype.onWebInfoUpdate = function() {
				var e = this;
				setInterval(function() {
					if (null != e.m_UniqueId && null != e.m_curWebUserInfo) {
						for (var t in e.m_curWebUserInfo) e.m_curWebUserInfo[t] = e[t];
						console.log("更新数据", e.m_UniqueId, e.m_curWebUserInfo)
					}
				}, 3e3)
			}, t.prototype.onWebInfoGetOnce = function() {
				if (null != this.m_UniqueId && null != this.m_curWebUserInfo && this.m_coins == this.m_normalCoins)
					for (var e in console.log("获取数据", this.m_curWebUserInfo), this.m_curWebUserInfo) this[e] = this.m_curWebUserInfo[e]
			}, t.prototype.writeUnlockSkin = function() {
				c.services().localStorageSrv.setStorage(this.UNLOCK_SKIN_KEY, JSON.stringify(this.m_unlockSkins))
			}, t.prototype.UnlockSkin = function(e) {
				this.getSkinUnlocked(e) || (this.m_unlockSkins.push(e), this.writeUnlockSkin())
			}, t.prototype.getSkinUnlocked = function(e) {
				return this.m_unlockSkins.includes(e)
			}, t.prototype.SetUseSkin = function(e) {
				this.m_useSkin = e, this.writeUseSkin()
			}, t.prototype.GetUseSkin = function() {
				return this.m_useSkin
			}, t.prototype.loadUnlockSkin = function() {
				var e = c.default.getServices().localStorageSrv.getStorage(this.UNLOCK_SKIN_KEY);
				e && (this.m_unlockSkins = JSON.parse(e), this.m_unlockSkins.includes("Frog") || this.m_unlockSkins.push("Frog"))
			}, t.prototype.writeUseSkin = function() {
				c.default.getServices().localStorageSrv.setStorage(this.USE_SKIN_KEY, this.m_useSkin)
			}, t.prototype.loadUseSkin = function() {
				this.m_useSkin = c.default.getServices().localStorageSrv.getStorage(this.USE_SKIN_KEY) || "Frog"
			}, t.prototype.unlockLevelSkin = function(e) {
				var t, n = l.default.SKIN_CONFIG,
					o = [];
				for (var i in n)(null === (t = null == (a = n[i]) ? void 0 : a.unlockLevel) || void 0 === t ? void 0 : t.level) > 0 && !this.getSkinUnlocked(a.id) && o.push(a);
				for (var r = 0; r < o.length; r++) {
					var a, s = (a = o[r]).unlockLevel.level,
						u = c.default.getManagers().gameMgr.getCurrMode().type,
						d = a.unlockLevel.mode;
					if (e == s && d == u) {
						var h = {
							skinId: a.id,
							mode: u
						};
						this.UnlockSkin(a.id), p.default.UISystem.OpenPage(f.PAGE.SKINREWARDPAGE, h)
					}
				}
			}, t
		}(s.default);
		n.default = h, cc._RF.pop()
	}, {
		"../../Game/Enum": "Enum",
		"../../Game/MainRoot": "MainRoot",
		"../configs/gameConfig": "gameConfig",
		"../gameEngine": "gameEngine",
		"../libs/data_control": "data_control",
		"../managers/gameContent/gameMode_json": "gameMode_json",
		"./superService": "superService"
	}],
	versionNotice: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "7409eBY3Z5CYrUytfWiFBM4", "versionNotice");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			r = this && this.__decorate || function(e, t, n, o) {
				var i, r = arguments.length,
					a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
				else
					for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
				return r > 3 && a && Object.defineProperty(t, n, a), a
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../../engines/gameEngine"),
			s = cc._decorator,
			c = s.ccclass,
			l = s.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.lbNotice = null, t.detail = null, t.m_scaleTime = .3, t
				}
				return i(t, e), t.prototype.start = function() {
					this.onShow()
				}, t.prototype.onShow = function() {
					a.modules().uiControlModule.showHideDialogAnimation(this.detail, !0)
				}, t.prototype.onHide = function(e) {
					a.modules().uiControlModule.showHideDialogAnimation(this.detail, !1, e)
				}, t.prototype.setNotice = function(e) {
					this.lbNotice.string = e
				}, t.prototype.onBtnClose = function() {
					var e = this;
					this.onHide(function() {
						e.node.destroy()
					})
				}, r([l(cc.Label)], t.prototype, "lbNotice", void 0), r([l(cc.Node)], t.prototype, "detail", void 0), r([c], t)
			}(cc.Component);
		n.default = u, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine"
	}],
	ziBi_json: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "abbf7SwwEVGu4qEizRA74gI", "ziBi_json"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.ziBi_json = void 0;
		var o = [{
			id: "丶",
			name: "点",
			explain: ""
		}, {
			id: "一",
			name: "横",
			explain: "横"
		}, {
			id: "丨",
			name: "竖",
			explain: ""
		}, {
			id: "丿",
			name: "撇",
			explain: ""
		}, {
			id: "㇏",
			name: "捺",
			explain: ""
		}, {
			id: "㇀",
			name: "提",
			explain: ""
		}, {
			id: "𠃍",
			name: "横折",
			explain: ""
		}, {
			id: "乚",
			name: "竖弯钩",
			explain: ""
		}, {
			id: "𠃊",
			name: "竖折",
			explain: ""
		}, {
			id: "亅",
			name: "竖钩",
			explain: ""
		}, {
			id: "㇉",
			name: "竖折折钩",
			explain: ""
		}];
		n.ziBi_json = function() {
			return o
		}, cc._RF.pop()
	}, {}],
	ziManager: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "c8cc2IitoJBTb4uc8CWiD5w", "ziManager");
		var o, i = this && this.__extends || (o = function(e, t) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
				})(e, t)
		}, function(e, t) {
			function n() {
				this.constructor = e
			}
			o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
		});
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.ziDiMap = n.ziBiMap = void 0;
		var r = e("../configs/ziBi_json"),
			a = e("../configs/zi_json"),
			s = e("../configs/zi_jsonTwo"),
			c = e("./superManager"),
			l = function() {};
		n.ziBiMap = l;
		var u = function() {};
		n.ziDiMap = u;
		var d = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.className = "字管理", t.m_ziBiList = [], t.m_ziBiMap = new l, t.m_ziDiList = [], t.m_ziDiHuaList = [], t.m_ziDiHuaMap = [], t.m_ziDiMap = new u, t.m_ziDiListOfWT = [], t.m_ziDiHuaListOfWT = [], t.m_ziDiHuaMapOfWT = [], t.m_ziDiMapOfWT = new u, t
			}
			return i(t, e), t.prototype.loadManager = function() {
				var t = this;
				return new Promise(function(n) {
					e.prototype.loadManager.call(t), t.m_ziBiList = r.ziBi_json();
					for (var o = 0, i = t.m_ziBiList; o < i.length; o++) {
						var c = i[o];
						t.m_ziBiMap[c.id] = c
					}
					t.m_ziDiList = a.ziDi_json();
					for (var l = 0, d = t.m_ziDiList; l < d.length; l++) {
						var p = (m = d[l]).biCount;
						null == t.m_ziDiHuaList[p] && (t.m_ziDiHuaList[p] = []), t.m_ziDiHuaList[p].push(m), null == t.m_ziDiHuaMap[p] && (t.m_ziDiHuaMap[p] = new u), t.m_ziDiHuaMap[p][m.id] = m, t.m_ziDiMap[m.id] = m
					}
					t.m_ziDiListOfWT = s.ziDi_jsonWT();
					for (var f = 0, h = t.m_ziDiListOfWT; f < h.length; f++) {
						var m;
						p = (m = h[f]).biCount, null == t.m_ziDiHuaListOfWT[p] && (t.m_ziDiHuaListOfWT[p] = []), t.m_ziDiHuaListOfWT[p].push(m), null == t.m_ziDiHuaMapOfWT[p] && (t.m_ziDiHuaMapOfWT[p] = new u), t.m_ziDiHuaMapOfWT[p][m.id] = m, t.m_ziDiMapOfWT[m.id] = m
					}
					n()
				})
			}, t.prototype.getZiDiInfo = function(e) {
				return this.m_ziDiMap[e]
			}, t.prototype.getZiDiInfoOfWT = function(e) {
				return this.m_ziDiMapOfWT[e]
			}, t.prototype.getZiDiMapOfBiCount = function(e) {
				return this.m_ziDiHuaMap[e]
			}, t.prototype.getZiDiMapOfBiCountOfWT = function(e) {
				return this.m_ziDiHuaMapOfWT[e]
			}, t.prototype.getZiBiInfo = function(e) {
				return this.m_ziBiMap[e]
			}, t.prototype.getMakeZi = function(e, t, n) {
				var o = this.getZiDiInfo(e).biCount + 1,
					i = this.getZiDiMapOfBiCount(o),
					r = !1;
				for (var a in i) {
					var s = i[a];
					if (s.makeList)
						for (var c = 0, l = s.makeList; c < l.length; c++) {
							var u = l[c];
							if (u.z == e && u.b == t) {
								r = !0;
								for (var d = 0, p = u.zbPoss; d < p.length; d++) {
									var f = p[d];
									if (n.start == f.start && n.end == f.end) return a
								}
							}
						}
				}
				return r ? "have" : null
			}, t.prototype.getMakeZiEx = function(e, t, n) {
				var o = this.getZiDiInfoOfWT(e).biCount + 2,
					i = this.getZiDiMapOfBiCountOfWT(o),
					r = !1;
				for (var a in i) {
					var s = i[a];
					if (s.makeList)
						for (var c = 0, l = s.makeList; c < l.length; c++) {
							var u = l[c],
								d = u.b.split(" ", 2);
							if (u.z == e) {
								var p = this.splitZbPosArray(e, d, u.zbPoss);
								if (u.z == e && (r = !0, this.isLocation(n, p, t))) return a
							}
						}
				}
				return r ? "have" : null
			}, t.prototype.isLocation = function(e, t, n) {
				for (var o = !1, i = !1, r = 0, a = n; r < a.length; r++)
					for (var s = a[r], c = function(n) {
							if (n.b == s.id) {
								for (var r = 0, a = n.zbPoss; r < a.length; r++) {
									var c = a[r];
									if (!i && e[0].start == c.start && e[0].end == c.end) {
										i = !0;
										break
									}
									if (i && e[1].start == c.start && e[1].end == c.end) {
										o = !0;
										break
									}
								}
								return t = t.filter(function(e) {
									return e != n
								}), "break"
							}
						}, l = 0, u = t; l < u.length && "break" !== c(u[l]); l++);
				return o
			}, t.prototype.splitZbPosArray = function(e, t, n) {
				for (var o = [], i = !1, r = [], a = [], s = 0, c = n; s < c.length; s++) {
					var l = c[s];
					if (0 != l.start || 0 != l.end) {
						if (i) {
							a.push(l);
							continue
						}
						r.push(l)
					}
					0 != l.start || 0 != l.end || (i = !0)
				}
				for (var u = 0; u < t.length; u++) {
					var d = void 0;
					0 == u && (d = {
						z: e,
						b: t[u],
						zbPoss: r
					}), 1 == u && (d = {
						z: e,
						b: t[u],
						zbPoss: a
					}), o.push(d)
				}
				return o
			}, t.prototype.getMakePosOfVec2 = function(e, t) {
				var n = t.width / 3 / 2,
					o = 1;
				e.x > -n && e.x < n ? o = 2 : e.x > n && (o = 3);
				var i = 0;
				return e.y < n && e.y > -n ? i = 1 : e.y < -n && (i = 2), 3 * i + o
			}, t.prototype.getCanMakeDoZiIds = function(e) {
				var t = this.getZiDiInfo(e),
					n = this.getZiDiMapOfBiCount(t.biCount + 1),
					o = [];
				for (var i in n) {
					var r = n[i];
					if (r.makeList)
						for (var a = 0, s = r.makeList; a < s.length; a++) s[a].z == e && o.push(r.id)
				}
				return o
			}, t.prototype.getCanMakeDoZiIdsEx = function(e) {
				var t = this.getZiDiInfoOfWT(e),
					n = this.getZiDiMapOfBiCountOfWT(t.biCount + 2),
					o = [];
				for (var i in n) {
					var r = n[i];
					if (r.makeList)
						for (var a = 0, s = r.makeList; a < s.length; a++) s[a].z == e && o.push(r.id)
				}
				return o
			}, t.prototype.findCanMakZiIds = function(e) {
				var t = e.length,
					n = this.getZiDiMapOfBiCount(t),
					o = [];
				for (var i in n) {
					var r = n[i];
					this.isCalcSuccessZiIdOfBiIds(r, e) && o.push(r.id)
				}
				return o
			}, t.prototype.findCanMakZiIdsOfWT = function(e) {
				var t = e.length,
					n = this.getZiDiMapOfBiCountOfWT(t),
					o = [];
				for (var i in n) {
					var r = n[i];
					this.isCalcSuccessZiIdOfBiIds(r, e) && o.push(r.id)
				}
				return o
			}, t.prototype.isCalcSuccessZiIdOfBiIds = function(e, t) {
				var n = e.orderBiList;
				if (!n) return !1;
				if (t.length != n.length) return !1;
				var o = n.length,
					i = 0;
				i = o >= 20 ? 2 : o >= 10 ? 1 : 0;
				for (var r = 0; r < t.length; r++)
					if (t[r] != n[r] && ("丶" == n[r] && "㇏" == t[r] || i--, i < 0)) return !1;
				return !0
			}, t
		}(c.default);
		n.default = d, cc._RF.pop()
	}, {
		"../configs/ziBi_json": "ziBi_json",
		"../configs/zi_json": "zi_json",
		"../configs/zi_jsonTwo": "zi_jsonTwo",
		"./superManager": "superManager"
	}],
	zi_jsonTwo: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "07e7f+K5UVNLb1D8KzSidQD", "zi_jsonTwo"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.ziDi_jsonWT = void 0;
		var o = [{
			id: "本",
			name: "本",
			py: "běn",
			explain: "书本、本来、本领",
			biCount: 5
		}, {
			id: "与",
			name: "与",
			py: "yǔ",
			explain: "与其、参与、与会",
			biCount: 3
		}, {
			id: "东",
			name: "东",
			py: "dōng",
			explain: "东方",
			biCount: 5
		}, {
			id: "字",
			name: "字",
			py: "z\xec",
			explain: "汉字",
			biCount: 6
		}, {
			id: "欠",
			name: "欠",
			py: "qi\xe0n",
			explain: "拖欠",
			biCount: 4
		}, {
			id: "门",
			name: "门",
			py: "m\xe9n",
			explain: "门口",
			biCount: 3
		}, {
			id: "云",
			name: "云",
			py: "y\xfan",
			explain: "云彩、云朵、风云",
			biCount: 4
		}, {
			id: "杏",
			name: "杏",
			py: "x\xecng",
			explain: "杏树、杏花、杏仁",
			biCount: 7
		}, {
			id: "儿",
			name: "儿",
			py: "\xe9r",
			explain: "儿孙",
			biCount: 2
		}, {
			id: "中",
			name: "中",
			py: "zhōng",
			explain: "中国、中央、集中",
			biCount: 4
		}, {
			id: "火",
			name: "火",
			py: "huǒ",
			explain: "火苗、火山、火光",
			biCount: 4
		}, {
			id: "力",
			name: "力",
			py: "l\xec",
			explain: "力气、力量",
			biCount: 2
		}, {
			id: "六",
			name: "六",
			py: "li\xf9",
			explain: "六月",
			biCount: 4
		}, {
			id: "贝",
			name: "贝",
			py: "b\xe8i",
			explain: "宝贝、贝壳、分贝",
			biCount: 4
		}, {
			id: "上",
			name: "上",
			py: "sh\xe0ng",
			explain: "上方、早上、跟上",
			biCount: 3
		}, {
			id: "体",
			name: "体",
			py: "tǐ",
			explain: "身体、体育、体操",
			biCount: 7,
			makeList: [{
				z: "本",
				b: "丿 丨",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 0,
					end: 0
				}, {
					start: 1,
					end: 7
				}, {
					start: 1,
					end: 4
				}, {
					start: 4,
					end: 7
				}]
			}]
		}, {
			id: "写",
			name: "写",
			py: "xiě",
			explain: "写字、写信、书写",
			biCount: 5,
			makeList: [{
				z: "与",
				b: "丨 𠃍",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 0,
					end: 0
				}, {
					start: 1,
					end: 3
				}, {
					start: 1,
					end: 6
				}]
			}]
		}, {
			id: "冻",
			name: "冻",
			py: "d\xf2ng",
			explain: "冰冻、冷冻、冻伤",
			biCount: 7,
			makeList: [{
				z: "东",
				b: "丶 ㇀",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 4,
					end: 4
				}, {
					start: 0,
					end: 0
				}, {
					start: 7,
					end: 4
				}, {
					start: 4,
					end: 4
				}]
			}, {
				z: "东",
				b: "㇏ ㇀",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 4,
					end: 4
				}, {
					start: 0,
					end: 0
				}, {
					start: 7,
					end: 4
				}, {
					start: 4,
					end: 4
				}]
			}]
		}, {
			id: "学",
			name: "学",
			py: "xu\xe9",
			explain: "上学、学习、自学",
			biCount: 8,
			makeList: [{
				z: "字",
				b: "丶 丿",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 2
				}, {
					start: 2,
					end: 2
				}, {
					start: 0,
					end: 0
				}, {
					start: 3,
					end: 3
				}, {
					start: 3,
					end: 2
				}, {
					start: 2,
					end: 2
				}]
			}, {
				z: "字",
				b: "㇏ 丿",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 2
				}, {
					start: 2,
					end: 2
				}, {
					start: 0,
					end: 0
				}, {
					start: 3,
					end: 3
				}, {
					start: 3,
					end: 2
				}, {
					start: 2,
					end: 2
				}]
			}]
		}, {
			id: "欢",
			name: "欢",
			py: "huān",
			explain: "欢乐、喜欢、欢快",
			biCount: 6,
			makeList: [{
				z: "欠",
				b: "𠃍 丶",
				zbPoss: [{
					start: 1,
					end: 4
				}, {
					start: 1,
					end: 7
				}, {
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 7
				}, {
					start: 0,
					end: 0
				}, {
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 5
				}, {
					start: 4,
					end: 7
				}]
			}, {
				z: "欠",
				b: "𠃍 ㇏",
				zbPoss: [{
					start: 1,
					end: 4
				}, {
					start: 1,
					end: 7
				}, {
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 7
				}, {
					start: 0,
					end: 0
				}, {
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 5
				}, {
					start: 4,
					end: 7
				}]
			}]
		}, {
			id: "次",
			name: "次",
			py: "c\xec",
			explain: "名次、次级、每次",
			biCount: 6,
			makeList: [{
				z: "欠",
				b: "丶 ㇀",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 4,
					end: 4
				}, {
					start: 0,
					end: 0
				}, {
					start: 7,
					end: 4
				}, {
					start: 7,
					end: 5
				}, {
					start: 4,
					end: 4
				}]
			}, {
				z: "欠",
				b: "㇏ ㇀",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 4,
					end: 4
				}, {
					start: 0,
					end: 0
				}, {
					start: 7,
					end: 4
				}, {
					start: 7,
					end: 5
				}, {
					start: 4,
					end: 4
				}]
			}]
		}, {
			id: "们",
			name: "们",
			py: "men",
			explain: "咱们、我们、你们",
			biCount: 5,
			makeList: [{
				z: "门",
				b: "丿 丨",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 0,
					end: 0
				}, {
					start: 1,
					end: 7
				}, {
					start: 1,
					end: 4
				}, {
					start: 4,
					end: 7
				}]
			}]
		}, {
			id: "闪",
			name: "闪",
			py: "shǎn",
			explain: "闪光、闪开、闪烁",
			biCount: 5,
			makeList: [{
				z: "门",
				b: "丿 丶",
				zbPoss: [{
					start: 5,
					end: 4
				}, {
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 8
				}, {
					start: 0,
					end: 0
				}, {
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 6
				}, {
					start: 5,
					end: 8
				}]
			}, {
				z: "门",
				b: "丿 ㇏",
				zbPoss: [{
					start: 5,
					end: 4
				}, {
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 8
				}, {
					start: 0,
					end: 0
				}, {
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 6
				}, {
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "会",
			name: "会",
			py: "hu\xec",
			explain: "开会、会议",
			biCount: 6,
			makeList: [{
				z: "云",
				b: "丿 丶",
				zbPoss: [{
					start: 2,
					end: 1
				}, {
					start: 2,
					end: 4
				}, {
					start: 0,
					end: 0
				}, {
					start: 2,
					end: 3
				}, {
					start: 2,
					end: 6
				}]
			}, {
				z: "云",
				b: "丿 ㇏",
				zbPoss: [{
					start: 2,
					end: 1
				}, {
					start: 2,
					end: 4
				}, {
					start: 0,
					end: 0
				}, {
					start: 2,
					end: 3
				}, {
					start: 2,
					end: 6
				}]
			}]
		}, {
			id: "丢",
			name: "丢",
			py: "diū",
			explain: "丢弃、丢掉",
			biCount: 6,
			makeList: [{
				z: "云",
				b: "丿 丨",
				zbPoss: [{
					start: 2,
					end: 1
				}, {
					start: 3,
					end: 1
				}, {
					start: 3,
					end: 2
				}, {
					start: 2,
					end: 2
				}, {
					start: 0,
					end: 0
				}, {
					start: 2,
					end: 5
				}]
			}]
		}, {
			id: "香",
			name: "香",
			py: "xiāng",
			explain: "香味",
			biCount: 9,
			makeList: [{
				z: "杏",
				b: "丿 一",
				zbPoss: [{
					start: 2,
					end: 1
				}, {
					start: 3,
					end: 1
				}, {
					start: 3,
					end: 2
				}, {
					start: 2,
					end: 2
				}, {
					start: 0,
					end: 0
				}, {
					start: 8,
					end: 8
				}, {
					start: 8,
					end: 5
				}]
			}]
		}, {
			id: "查",
			name: "查",
			py: "ch\xe1",
			explain: "检查",
			biCount: 9,
			makeList: [{
				z: "杏",
				b: "一 一",
				zbPoss: [{
					start: 7,
					end: 8
				}, {
					start: 7,
					end: 9
				}, {
					start: 8,
					end: 9
				}, {
					start: 0,
					end: 0
				}, {
					start: 8,
					end: 8
				}, {
					start: 8,
					end: 5
				}]
			}, {
				z: "杏",
				b: "一 一",
				zbPoss: [{
					start: 8,
					end: 8
				}, {
					start: 8,
					end: 5
				}, {
					start: 0,
					end: 0
				}, {
					start: 7,
					end: 8
				}, {
					start: 7,
					end: 9
				}, {
					start: 8,
					end: 9
				}]
			}]
		}, {
			id: "元",
			name: "元",
			py: "yu\xe1n",
			explain: "元老、单元",
			biCount: 4,
			makeList: [{
				z: "儿",
				b: "一 一",
				zbPoss: [{
					start: 1,
					end: 2
				}, {
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 3
				}, {
					start: 1,
					end: 3
				}, {
					start: 0,
					end: 0
				}, {
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 3
				}]
			}, {
				z: "儿",
				b: "一 一",
				zbPoss: [{
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 3
				}, {
					start: 0,
					end: 0
				}, {
					start: 1,
					end: 2
				}, {
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 3
				}, {
					start: 1,
					end: 3
				}]
			}]
		}, {
			id: "允",
			name: "允",
			py: "yǔn",
			explain: "允许、允诺",
			biCount: 4,
			makeList: [{
				z: "儿",
				b: "𠃊 丶",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 3
				}, {
					start: 0,
					end: 0
				}, {
					start: 2,
					end: 3
				}, {
					start: 3,
					end: 3
				}, {
					start: 3,
					end: 6
				}, {
					start: 2,
					end: 6
				}]
			}, {
				z: "儿",
				b: "𠃊 ㇏",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 3
				}, {
					start: 0,
					end: 0
				}, {
					start: 2,
					end: 3
				}, {
					start: 3,
					end: 3
				}, {
					start: 3,
					end: 6
				}, {
					start: 2,
					end: 6
				}]
			}]
		}, {
			id: "匹",
			name: "匹",
			py: "pǐ",
			explain: "匹敌、匹配",
			biCount: 4,
			makeList: [{
				z: "儿",
				b: "一 𠃊",
				zbPoss: [{
					start: 1,
					end: 3
				}, {
					start: 1,
					end: 2
				}, {
					start: 0,
					end: 0
				}, {
					start: 1,
					end: 8
				}, {
					start: 1,
					end: 9
				}]
			}]
		}, {
			id: "凡",
			name: "凡",
			py: "f\xe1n",
			explain: "凡是、平凡",
			biCount: 4,
			makeList: [{
				z: "儿",
				b: "一 丶",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 0,
					end: 0
				}, {
					start: 5,
					end: 5
				}]
			}, {
				z: "儿",
				b: "一 ㇏",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 0,
					end: 0
				}, {
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "虫",
			name: "虫",
			py: "ch\xf3ng",
			explain: "昆虫、虫子",
			biCount: 6,
			makeList: [{
				z: "中",
				b: "一 丶",
				zbPoss: [{
					start: 7,
					end: 8
				}, {
					start: 7,
					end: 9
				}, {
					start: 8,
					end: 9
				}, {
					start: 0,
					end: 0
				}, {
					start: 6,
					end: 9
				}, {
					start: 8,
					end: 9
				}, {
					start: 9,
					end: 9
				}]
			}, {
				z: "中",
				b: "一 ㇏",
				zbPoss: [{
					start: 7,
					end: 8
				}, {
					start: 7,
					end: 9
				}, {
					start: 8,
					end: 9
				}, {
					start: 0,
					end: 0
				}, {
					start: 6,
					end: 9
				}, {
					start: 8,
					end: 9
				}, {
					start: 9,
					end: 9
				}]
			}, {
				z: "中",
				b: "一 丨",
				zbPoss: [{
					start: 7,
					end: 8
				}, {
					start: 7,
					end: 9
				}, {
					start: 8,
					end: 9
				}, {
					start: 0,
					end: 0
				}, {
					start: 6,
					end: 9
				}, {
					start: 8,
					end: 9
				}, {
					start: 9,
					end: 9
				}]
			}]
		}, {
			id: "仲",
			name: "仲",
			py: "zh\xf2ng",
			explain: "仲裁、伯仲",
			biCount: 6,
			makeList: [{
				z: "中",
				b: "丿 丨",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 0,
					end: 0
				}, {
					start: 1,
					end: 7
				}, {
					start: 1,
					end: 4
				}, {
					start: 4,
					end: 7
				}]
			}]
		}, {
			id: "冲",
			name: "冲",
			py: "chōng",
			explain: "冲锋、冲刺",
			biCount: 6,
			makeList: [{
				z: "中",
				b: "丶 ㇀",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 4,
					end: 4
				}, {
					start: 0,
					end: 0
				}, {
					start: 7,
					end: 4
				}, {
					start: 4,
					end: 4
				}]
			}, {
				z: "中",
				b: "㇏ ㇀",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 4,
					end: 4
				}, {
					start: 0,
					end: 0
				}, {
					start: 7,
					end: 4
				}, {
					start: 4,
					end: 4
				}]
			}]
		}, {
			id: "灯",
			name: "灯",
			py: "dēng",
			explain: "灯光、电灯",
			biCount: 6,
			makeList: [{
				z: "火",
				b: "一 亅",
				zbPoss: [{
					start: 2,
					end: 3
				}, {
					start: 3,
					end: 3
				}, {
					start: 0,
					end: 0
				}, {
					start: 3,
					end: 5
				}, {
					start: 3,
					end: 6
				}, {
					start: 3,
					end: 9
				}]
			}]
		}, {
			id: "夹",
			name: "夹",
			py: "ji\xe1",
			explain: "夹击、夹子",
			biCount: 6,
			makeList: [{
				z: "火",
				b: "一 一",
				zbPoss: [{
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 3
				}, {
					start: 4,
					end: 2
				}, {
					start: 4,
					end: 3
				}, {
					start: 0,
					end: 0
				}, {
					start: 4,
					end: 6
				}]
			}, {
				z: "火",
				b: "一 一",
				zbPoss: [{
					start: 4,
					end: 6
				}, {
					start: 0,
					end: 0
				}, {
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 3
				}, {
					start: 4,
					end: 2
				}, {
					start: 4,
					end: 3
				}]
			}]
		}, {
			id: "伙",
			name: "伙",
			py: "huǒ",
			explain: "同伙、伙伴",
			biCount: 6,
			makeList: [{
				z: "火",
				b: "丿 丨",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 0,
					end: 0
				}, {
					start: 1,
					end: 7
				}, {
					start: 1,
					end: 4
				}, {
					start: 4,
					end: 7
				}]
			}]
		}, {
			id: "灰",
			name: "灰",
			py: "huī",
			explain: "灰暗、灰尘",
			biCount: 6,
			makeList: [{
				z: "火",
				b: "一 丿",
				zbPoss: [{
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 3
				}, {
					start: 0,
					end: 0
				}, {
					start: 1,
					end: 4
				}, {
					start: 1,
					end: 7
				}]
			}, {
				z: "火",
				b: "一 丨",
				zbPoss: [{
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 3
				}, {
					start: 0,
					end: 0
				}, {
					start: 1,
					end: 4
				}, {
					start: 1,
					end: 7
				}]
			}]
		}, {
			id: "历",
			name: "历",
			py: "l\xec",
			explain: "历史、日历",
			biCount: 4,
			makeList: [{
				z: "力",
				b: "一 丿",
				zbPoss: [{
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 3
				}, {
					start: 0,
					end: 0
				}, {
					start: 1,
					end: 4
				}, {
					start: 1,
					end: 7
				}]
			}, {
				z: "力",
				b: "一 丨",
				zbPoss: [{
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 3
				}, {
					start: 0,
					end: 0
				}, {
					start: 1,
					end: 4
				}, {
					start: 1,
					end: 7
				}]
			}]
		}, {
			id: "劝",
			name: "劝",
			py: "qu\xe0n",
			explain: "劝说、劝解",
			biCount: 4,
			makeList: [{
				z: "力",
				b: "𠃍 丶",
				zbPoss: [{
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 7
				}, {
					start: 0,
					end: 0
				}, {
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 5
				}, {
					start: 4,
					end: 7
				}]
			}, {
				z: "力",
				b: "𠃍 ㇏",
				zbPoss: [{
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 7
				}, {
					start: 0,
					end: 0
				}, {
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 5
				}, {
					start: 4,
					end: 7
				}]
			}]
		}, {
			id: "为",
			name: "为",
			py: "w\xe9i",
			explain: "为何、因为",
			biCount: 4,
			makeList: [{
				z: "力",
				b: "丶 丶",
				zbPoss: [{
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 5
				}, {
					start: 2,
					end: 5
				}, {
					start: 0,
					end: 0
				}, {
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 8
				}]
			}, {
				z: "力",
				b: "丶 丶",
				zbPoss: [{
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 8
				}, {
					start: 0,
					end: 0
				}, {
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 5
				}, {
					start: 2,
					end: 5
				}]
			}, {
				z: "力",
				b: "㇏ ㇏",
				zbPoss: [{
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 5
				}, {
					start: 2,
					end: 5
				}, {
					start: 0,
					end: 0
				}, {
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 8
				}]
			}, {
				z: "力",
				b: "㇏ ㇏",
				zbPoss: [{
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 8
				}, {
					start: 0,
					end: 0
				}, {
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 5
				}, {
					start: 2,
					end: 5
				}]
			}, {
				z: "力",
				b: "㇏ 丶",
				zbPoss: [{
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 5
				}, {
					start: 2,
					end: 5
				}, {
					start: 0,
					end: 0
				}, {
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 8
				}]
			}, {
				z: "力",
				b: "丶 ㇏",
				zbPoss: [{
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 8
				}, {
					start: 0,
					end: 0
				}, {
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 5
				}, {
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "办",
			name: "办",
			py: "b\xe0n",
			explain: "办事、办法",
			biCount: 4,
			makeList: [{
				z: "力",
				b: "丿 丶",
				zbPoss: [{
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 7
				}, {
					start: 5,
					end: 4
				}, {
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 7
				}, {
					start: 0,
					end: 0
				}, {
					start: 6,
					end: 6
				}, {
					start: 6,
					end: 9
				}]
			}, {
				z: "力",
				b: "丿 ㇏",
				zbPoss: [{
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 7
				}, {
					start: 5,
					end: 4
				}, {
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 7
				}, {
					start: 0,
					end: 0
				}, {
					start: 6,
					end: 6
				}, {
					start: 6,
					end: 9
				}]
			}]
		}, {
			id: "交",
			name: "交",
			py: "jiāo",
			explain: "交叉、交通",
			biCount: 6,
			makeList: [{
				z: "六",
				b: "丿 丶",
				zbPoss: [{
					start: 5,
					end: 7
				}, {
					start: 5,
					end: 8
				}, {
					start: 8,
					end: 7
				}, {
					start: 8,
					end: 8
				}, {
					start: 0,
					end: 0
				}, {
					start: 5,
					end: 8
				}, {
					start: 5,
					end: 9
				}, {
					start: 7,
					end: 9
				}, {
					start: 8,
					end: 8
				}, {
					start: 8,
					end: 9
				}]
			}, {
				z: "六",
				b: "丿 ㇏",
				zbPoss: [{
					start: 5,
					end: 7
				}, {
					start: 5,
					end: 8
				}, {
					start: 8,
					end: 7
				}, {
					start: 8,
					end: 8
				}, {
					start: 0,
					end: 0
				}, {
					start: 5,
					end: 8
				}, {
					start: 5,
					end: 9
				}, {
					start: 7,
					end: 9
				}, {
					start: 8,
					end: 8
				}, {
					start: 8,
					end: 9
				}]
			}]
		}, {
			id: "兴",
			name: "兴",
			py: "x\xecng",
			explain: "高兴、兴趣",
			biCount: 6,
			makeList: [{
				z: "六",
				b: "丶 丿",
				zbPoss: [{
					start: 1,
					end: 5
				}, {
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 4
				}, {
					start: 2,
					end: 5
				}, {
					start: 0,
					end: 0
				}, {
					start: 2,
					end: 5
				}, {
					start: 3,
					end: 5
				}, {
					start: 3,
					end: 6
				}, {
					start: 3,
					end: 2
				}, {
					start: 2,
					end: 2
				}]
			}, {
				z: "六",
				b: "㇏ 丿",
				zbPoss: [{
					start: 1,
					end: 5
				}, {
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 4
				}, {
					start: 2,
					end: 5
				}, {
					start: 0,
					end: 0
				}, {
					start: 2,
					end: 5
				}, {
					start: 3,
					end: 5
				}, {
					start: 3,
					end: 6
				}]
			}]
		}, {
			id: "亦",
			name: "亦",
			py: "y\xec",
			explain: "亦然",
			biCount: 6,
			makeList: [{
				z: "六",
				b: "丿 亅",
				zbPoss: [{
					start: 5,
					end: 7
				}, {
					start: 5,
					end: 8
				}, {
					start: 0,
					end: 0
				}, {
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "穴",
			name: "穴",
			py: "xu\xe9",
			explain: "穴道、穴居",
			biCount: 6,
			makeList: [{
				z: "六",
				b: "丨 丨",
				zbPoss: [{
					start: 4,
					end: 4
				}, {
					start: 0,
					end: 0
				}, {
					start: 6,
					end: 6
				}]
			}, {
				z: "六",
				b: "丨 丨",
				zbPoss: [{
					start: 6,
					end: 6
				}, {
					start: 0,
					end: 0
				}, {
					start: 4,
					end: 4
				}]
			}]
		}, {
			id: "负",
			name: "负",
			py: "f\xf9",
			explain: "负责、负数",
			biCount: 6,
			makeList: [{
				z: "贝",
				b: "丿 𠃍",
				zbPoss: [{
					start: 2,
					end: 1
				}, {
					start: 2,
					end: 2
				}, {
					start: 0,
					end: 0
				}, {
					start: 2,
					end: 2
				}]
			}]
		}, {
			id: "贞",
			name: "贞",
			py: "zhēn",
			explain: "贞洁、忠贞",
			biCount: 6,
			makeList: [{
				z: "贝",
				b: "丨 一",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 0,
					end: 0
				}, {
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 3
				}]
			}]
		}, {
			id: "则",
			name: "则",
			py: "z\xe9",
			explain: "否则、法则",
			biCount: 6,
			makeList: [{
				z: "贝",
				b: "丨 亅",
				zbPoss: [{
					start: 3,
					end: 6
				}, {
					start: 6,
					end: 6
				}, {
					start: 0,
					end: 0
				}, {
					start: 3,
					end: 6
				}, {
					start: 3,
					end: 9
				}]
			}]
		}, {
			id: "页",
			name: "页",
			py: "y\xe8",
			explain: "书页、页面",
			biCount: 6,
			makeList: [{
				z: "贝",
				b: "一 丿",
				zbPoss: [{
					start: 1,
					end: 2
				}, {
					start: 2,
					end: 2
				}, {
					start: 1,
					end: 3
				}, {
					start: 2,
					end: 3
				}, {
					start: 0,
					end: 0
				}, {
					start: 2,
					end: 2
				}]
			}]
		}, {
			id: "卡",
			name: "卡",
			py: "kǎ",
			explain: "卡车、卡片",
			biCount: 5,
			makeList: [{
				z: "上",
				b: "丨 丶",
				zbPoss: [{
					start: 8,
					end: 8
				}, {
					start: 0,
					end: 0
				}, {
					start: 8,
					end: 8
				}, {
					start: 8,
					end: 9
				}]
			}, {
				z: "上",
				b: "丨 ㇏",
				zbPoss: [{
					start: 8,
					end: 8
				}, {
					start: 0,
					end: 0
				}, {
					start: 8,
					end: 8
				}, {
					start: 8,
					end: 9
				}]
			}, {
				z: "上",
				b: "丨 一",
				zbPoss: [{
					start: 8,
					end: 8
				}, {
					start: 0,
					end: 0
				}, {
					start: 8,
					end: 8
				}, {
					start: 8,
					end: 9
				}]
			}]
		}, {
			id: "正",
			name: "正",
			py: "kǎ",
			explain: "正面、正确",
			biCount: 5,
			makeList: [{
				z: "上",
				b: "一 丨",
				zbPoss: [{
					start: 1,
					end: 3
				}, {
					start: 2,
					end: 3
				}, {
					start: 0,
					end: 0
				}, {
					start: 4,
					end: 7
				}, {
					start: 4,
					end: 8
				}, {
					start: 5,
					end: 7
				}, {
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "丘",
			name: "丘",
			py: "qiū",
			explain: "山丘、丘陵",
			biCount: 5,
			makeList: [{
				z: "上",
				b: "丿 丨",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 3,
					end: 2
				}, {
					start: 0,
					end: 0
				}, {
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "让",
			name: "让",
			py: "r\xe0ng",
			explain: "礼让、谦让",
			biCount: 5,
			makeList: [{
				z: "上",
				b: "丶 𠃍",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 0,
					end: 0
				}, {
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 5
				}, {
					start: 4,
					end: 7
				}]
			}, {
				z: "上",
				b: "丶 𠃊",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 0,
					end: 0
				}, {
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 5
				}, {
					start: 4,
					end: 7
				}]
			}, {
				z: "上",
				b: "丶 亅",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 0,
					end: 0
				}, {
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 5
				}, {
					start: 4,
					end: 7
				}]
			}, {
				z: "上",
				b: "丶 乚",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 0,
					end: 0
				}, {
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 5
				}, {
					start: 4,
					end: 7
				}]
			}, {
				z: "上",
				b: "丶 丨",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 0,
					end: 0
				}, {
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 5
				}, {
					start: 4,
					end: 7
				}]
			}, {
				z: "上",
				b: "㇏ 𠃍",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 0,
					end: 0
				}, {
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 5
				}, {
					start: 4,
					end: 7
				}]
			}, {
				z: "上",
				b: "㇏ 𠃊",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 0,
					end: 0
				}, {
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 5
				}, {
					start: 4,
					end: 7
				}]
			}, {
				z: "上",
				b: "㇏ 亅",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 0,
					end: 0
				}, {
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 5
				}, {
					start: 4,
					end: 7
				}]
			}, {
				z: "上",
				b: "㇏ 乚",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 0,
					end: 0
				}, {
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 5
				}, {
					start: 4,
					end: 7
				}]
			}, {
				z: "上",
				b: "㇏ 丨",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 0,
					end: 0
				}, {
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 5
				}, {
					start: 4,
					end: 7
				}]
			}]
		}, {
			id: "且",
			name: "且",
			py: "qiě",
			explain: "而且、并且",
			biCount: 5,
			makeList: [{
				z: "上",
				b: "𠃍 一",
				zbPoss: [{
					start: 2,
					end: 6
				}, {
					start: 2,
					end: 8
				}, {
					start: 2,
					end: 9
				}, {
					start: 0,
					end: 0
				}, {
					start: 2,
					end: 3
				}, {
					start: 5,
					end: 2
				}, {
					start: 5,
					end: 3
				}, {
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 6
				}]
			}]
		}];
		n.ziDi_jsonWT = function() {
			return o
		}, cc._RF.pop()
	}, {}],
	zi_json: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "20491lBRxZNqr94q5Y3BB5U", "zi_json"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.ziDi_json = void 0;
		var o = [{
			id: "尤",
			name: "尤",
			py: "y\xf3u",
			explain: "尤其",
			biCount: 4
		}, {
			id: "云",
			name: "云",
			py: "y\xfan",
			explain: "云彩、云朵、风云",
			biCount: 4
		}, {
			id: "玉",
			name: "玉",
			py: "y\xf9",
			explain: "玉佩、玉石、玉米",
			biCount: 5,
			makeList: [{
				z: "王",
				b: "丶",
				zbPoss: [{
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 6
				}]
			}, {
				z: "王",
				b: "㇏",
				zbPoss: [{
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 6
				}]
			}]
		}, {
			id: "上",
			name: "上",
			py: "sh\xe0ng",
			explain: "上方、早上、跟上",
			biCount: 3,
			makeList: [{
				z: "二",
				b: "丨",
				zbPoss: [{
					start: 1,
					end: 4
				}, {
					start: 1,
					end: 5
				}, {
					start: 2,
					end: 4
				}]
			}, {
				z: "一",
				b: "丨 一",
				zbPoss: [{
					start: 1,
					end: 4
				}, {
					start: 1,
					end: 5
				}, {
					start: 2,
					end: 4
				}, {
					start: 4,
					end: 7
				}, {
					start: 1,
					end: 7
				}, {
					start: 0,
					end: 0
				}, {
					start: 4,
					end: 2
				}, {
					start: 4,
					end: 3
				}, {
					start: 4,
					end: 5
				}, {
					start: 5,
					end: 5
				}, {
					start: 4,
					end: 6
				}, {
					start: 7,
					end: 8
				}, {
					start: 7,
					end: 9
				}]
			}]
		}, {
			id: "立",
			name: "立",
			py: "l\xec",
			explain: "立正、站立、立即",
			biCount: 5
		}, {
			id: "头",
			name: "头",
			py: "t\xf3u",
			explain: "头发、头领、点头",
			biCount: 5
		}, {
			id: "内",
			name: "内",
			py: "n\xe8i",
			explain: "内容、内部、内外",
			biCount: 4
		}, {
			id: "小",
			name: "小",
			py: "xiǎo",
			explain: "小学、小心、小说",
			biCount: 3
		}, {
			id: "汗",
			name: "汗",
			py: "h\xe0n",
			explain: "汗水、流汗、出汗",
			biCount: 6
		}, {
			id: "江",
			name: "江",
			py: "jiāng",
			explain: "湘江、江河、江东",
			biCount: 6
		}, {
			id: "囚",
			name: "囚",
			py: "qi\xfa",
			explain: "囚车、囚犯、囚禁",
			biCount: 5
		}, {
			id: "史",
			name: "史",
			py: "shǐ",
			explain: "史诗、历史、史前",
			biCount: 5
		}, {
			id: "庆",
			name: "庆",
			py: "q\xecng",
			explain: "庆祝、欢庆、喜庆",
			biCount: 6
		}, {
			id: "厌",
			name: "厌",
			py: "y\xe0n",
			explain: "讨厌、厌恶、厌弃",
			biCount: 6
		}, {
			id: "万",
			name: "万",
			py: "w\xe0n",
			explain: "万一、万幸、万众",
			biCount: 3
		}, {
			id: "么",
			name: "么",
			py: "me",
			explain: "什么、多么、那么",
			biCount: 3
		}, {
			id: "勿",
			name: "勿",
			py: "w\xf9",
			explain: "勿用、请勿、勿念",
			biCount: 4
		}, {
			id: "非",
			name: "非",
			py: "fēi",
			explain: "是非、非常、非议",
			biCount: 8
		}, {
			id: "兰",
			name: "兰",
			py: "l\xe1n",
			explain: "兰花、楼兰、吊兰",
			biCount: 5
		}, {
			id: "了",
			name: "了",
			py: "le",
			explain: "为了、罢了、完了",
			biCount: 2
		}, {
			id: "皿",
			name: "皿",
			py: "mǐn",
			explain: "器皿、皿金",
			biCount: 5
		}, {
			id: "问",
			name: "问",
			py: "w\xe8n",
			explain: "问题、问号、疑问",
			biCount: 6
		}, {
			id: "乃",
			name: "乃",
			py: "nǎi",
			explain: "乃翁、何乃、乃若",
			biCount: 2
		}, {
			id: "今",
			name: "今",
			py: "jīn",
			explain: "今天、如今、今年",
			biCount: 4
		}, {
			id: "休",
			name: "休",
			py: "xiū",
			explain: "休息、休学、休假",
			biCount: 6
		}, {
			id: "业",
			name: "业",
			py: "y\xe8",
			explain: "作业、业绩、物业",
			biCount: 5
		}, {
			id: "火",
			name: "火",
			py: "huǒ",
			explain: "火苗、火山、火光",
			biCount: 4
		}, {
			id: "卜",
			name: "卜",
			py: "bǔ",
			explain: "卜卦、占卜、萝卜",
			biCount: 2
		}, {
			id: "心",
			name: "心",
			py: "xīn",
			explain: "心中、放心、诚心",
			biCount: 4
		}, {
			id: "弓",
			name: "弓",
			py: "gōng",
			explain: "弓箭、弹弓、挽弓",
			biCount: 3
		}, {
			id: "丈",
			name: "丈",
			py: "zh\xe0ng",
			explain: "丈量、丈夫、丈人",
			biCount: 3
		}, {
			id: "长",
			name: "长",
			py: "ch\xe1ng",
			explain: "长度、长年、长沙",
			biCount: 4
		}, {
			id: "井",
			name: "井",
			py: "jǐng",
			explain: "打井、井水、深井",
			biCount: 4
		}, {
			id: "己",
			name: "己",
			py: "jǐ",
			explain: "自己、己方、知己",
			biCount: 3
		}, {
			id: "已",
			name: "已",
			py: "yǐ",
			explain: "已经、已然、久已",
			biCount: 3
		}, {
			id: "石",
			name: "石",
			py: "sh\xed",
			explain: "石头、沙石、石像",
			biCount: 5
		}, {
			id: "右",
			name: "右",
			py: "y\xf2u",
			explain: "右边、右侧、右方",
			biCount: 5
		}, {
			id: "牛",
			name: "牛",
			py: "ni\xfa",
			explain: "牛奶、蜗牛、牛皮",
			biCount: 5,
			makeList: [{
				z: "午",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 5
				}, {
					start: 2,
					end: 8
				}]
			}]
		}, {
			id: "九",
			name: "九",
			py: "jiǔ",
			explain: "九州、九鼎、九霄",
			biCount: 2
		}, {
			id: "从",
			name: "从",
			py: "c\xf3ng",
			explain: "从前、跟从、从此",
			biCount: 4
		}, {
			id: "竞",
			name: "竞",
			py: "j\xecng",
			explain: "竞赛、竞争、竞技",
			biCount: 10
		}, {
			id: "斤",
			name: "斤",
			py: "jīn",
			explain: "公斤、千斤、斤两",
			biCount: 4
		}, {
			id: "几",
			name: "几",
			py: "jǐ",
			explain: "几何、茶几、几个",
			biCount: 3,
			makeList: [{
				z: "厂",
				b: "乚",
				zbPoss: [{
					start: 3,
					end: 6
				}, {
					start: 3,
					end: 9
				}]
			}, {
				z: "厂",
				b: "㇏",
				zbPoss: [{
					start: 3,
					end: 6
				}, {
					start: 3,
					end: 9
				}]
			}, {
				z: "厂",
				b: "𠃊",
				zbPoss: [{
					start: 3,
					end: 6
				}, {
					start: 3,
					end: 9
				}]
			}]
		}, {
			id: "主",
			name: "主",
			py: "zhǔ",
			explain: "主人、主角、主要",
			biCount: 5,
			makeList: [{
				z: "王",
				b: "丶",
				zbPoss: [{
					start: 2,
					end: 2
				}]
			}, {
				z: "王",
				b: "㇏",
				zbPoss: [{
					start: 2,
					end: 2
				}]
			}, {
				z: "王",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 2
				}]
			}]
		}, {
			id: "和",
			name: "和",
			py: "h\xe9",
			explain: "和气、和好、暖和",
			biCount: 8
		}, {
			id: "刀",
			name: "刀",
			py: "dāo",
			explain: "刀剑、开刀、飞刀",
			biCount: 2
		}, {
			id: "乌",
			name: "乌",
			py: "wū",
			explain: "乌黑、乌鸦、乌龟",
			biCount: 4
		}, {
			id: "米",
			name: "米",
			py: "mǐ",
			explain: "米饭、大米、米酒",
			biCount: 6,
			makeList: [{
				z: "术",
				b: "丶",
				zbPoss: [{
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 5
				}, {
					start: 2,
					end: 5
				}]
			}, {
				z: "术",
				b: "㇏",
				zbPoss: [{
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 5
				}, {
					start: 2,
					end: 5
				}]
			}, {
				z: "术",
				b: "一",
				zbPoss: [{
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 5
				}, {
					start: 2,
					end: 5
				}]
			}]
		}, {
			id: "夕",
			name: "夕",
			py: "xī",
			explain: "夕阳、朝夕、除夕",
			biCount: 3
		}, {
			id: "予",
			name: "予",
			py: "yǔ",
			explain: "给予、赠予、赋予",
			biCount: 4
		}, {
			id: "帅",
			name: "帅",
			py: "shu\xe0i",
			explain: "帅气、元帅、将帅",
			biCount: 5
		}, {
			id: "代",
			name: "代",
			py: "d\xe0i",
			explain: "代替、代表、年代",
			biCount: 5
		}, {
			id: "司",
			name: "司",
			py: "sī",
			explain: "司机、司仪、公司",
			biCount: 5
		}, {
			id: "免",
			name: "免",
			py: "miǎn",
			explain: "免费、免除、避免",
			biCount: 7
		}, {
			id: "龙",
			name: "龙",
			py: "l\xf3ng",
			explain: "龙舟、龙虾、龙骨",
			biCount: 5,
			makeList: [{
				z: "尤",
				b: "丿",
				zbPoss: [{
					start: 6,
					end: 8
				}, {
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "申",
			name: "申",
			py: "shēn",
			explain: "申请、申报、重申",
			biCount: 5,
			makeList: [{
				z: "中",
				b: "一",
				zbPoss: [{
					start: 5,
					end: 5
				}, {
					start: 4,
					end: 5
				}]
			}, {
				z: "日",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 8
				}]
			}]
		}, {
			id: "去",
			name: "去",
			py: "q\xf9",
			explain: "过去、失去、去向",
			biCount: 5,
			makeList: [{
				z: "云",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 5
				}]
			}]
		}, {
			id: "丢",
			name: "丢",
			py: "diū",
			explain: "丢弃、丢失、丢脸",
			biCount: 6,
			makeList: [{
				z: "去",
				b: "丿",
				zbPoss: [{
					start: 2,
					end: 1
				}, {
					start: 2,
					end: 2
				}, {
					start: 3,
					end: 1
				}, {
					start: 3,
					end: 2
				}]
			}]
		}, {
			id: "压",
			name: "压",
			py: "yā",
			explain: "压力、压迫、压轴",
			biCount: 6,
			makeList: [{
				z: "玉",
				b: "丿",
				zbPoss: [{
					start: 4,
					end: 7
				}, {
					start: 1,
					end: 7
				}]
			}]
		}, {
			id: "止",
			name: "止",
			py: "zhǐ",
			explain: "停止、止步、阻止",
			biCount: 4,
			makeList: [{
				z: "上",
				b: "丨",
				zbPoss: [{
					start: 4,
					end: 7
				}, {
					start: 5,
					end: 8
				}, {
					start: 4,
					end: 8
				}, {
					start: 5,
					end: 7
				}]
			}]
		}, {
			id: "产",
			name: "产",
			py: "chǎn",
			explain: "生产、产出、产量",
			biCount: 6,
			makeList: [{
				z: "立",
				b: "丿",
				zbPoss: [{
					start: 4,
					end: 7
				}, {
					start: 7,
					end: 7
				}]
			}]
		}, {
			id: "自",
			name: "自",
			py: "z\xec",
			explain: "自己、自然、独自",
			biCount: 6,
			makeList: [{
				z: "目",
				b: "丿",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 1
				}, {
					start: 2,
					end: 5
				}]
			}, {
				z: "白",
				b: "一",
				zbPoss: [{
					start: 4,
					end: 6
				}, {
					start: 4,
					end: 5
				}, {
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 6
				}]
			}]
		}, {
			id: "买",
			name: "买",
			py: "mǎi",
			explain: "购买、收买、买醉",
			biCount: 6,
			makeList: [{
				z: "头",
				b: "𠃍",
				zbPoss: [{
					start: 1,
					end: 3
				}, {
					start: 1,
					end: 5
				}, {
					start: 1,
					end: 6
				}]
			}]
		}, {
			id: "丙",
			name: "丙",
			py: "bǐng",
			explain: "丙丁、付丙",
			biCount: 5,
			makeList: [{
				z: "内",
				b: "一",
				zbPoss: [{
					start: 1,
					end: 3
				}, {
					start: 1,
					end: 2
				}, {
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 3
				}]
			}]
		}, {
			id: "少",
			name: "少",
			py: "shǎo",
			explain: "少量、少年、多少",
			biCount: 4,
			makeList: [{
				z: "小",
				b: "丿",
				zbPoss: [{
					start: 5,
					end: 7
				}, {
					start: 6,
					end: 7
				}]
			}]
		}, {
			id: "汪",
			name: "汪",
			py: "wāng",
			explain: "汪洋、汪然",
			biCount: 7,
			makeList: [{
				z: "江",
				b: "一",
				zbPoss: [{
					start: 5,
					end: 6
				}, {
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "因",
			name: "因",
			py: "yīn",
			explain: "因为、原因、因果",
			biCount: 6,
			makeList: [{
				z: "囚",
				b: "一",
				zbPoss: [{
					start: 4,
					end: 5
				}, {
					start: 5,
					end: 5
				}, {
					start: 4,
					end: 6
				}, {
					start: 5,
					end: 6
				}]
			}]
		}, {
			id: "吏",
			name: "吏",
			py: "l\xec",
			explain: "官吏、吏治、外吏",
			biCount: 6,
			makeList: [{
				z: "史",
				b: "一",
				zbPoss: [{
					start: 1,
					end: 3
				}, {
					start: 1,
					end: 2
				}, {
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 3
				}]
			}]
		}, {
			id: "床",
			name: "床",
			py: "chu\xe1ng",
			explain: "床头、起床、病床",
			biCount: 7,
			makeList: [{
				z: "庆",
				b: "丨",
				zbPoss: [{
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "方",
			name: "方",
			py: "fāng",
			explain: "方向、方圆、双方",
			biCount: 4,
			makeList: [{
				z: "万",
				b: "丶",
				zbPoss: [{
					start: 2,
					end: 2
				}]
			}, {
				z: "万",
				b: "㇏",
				zbPoss: [{
					start: 2,
					end: 2
				}]
			}, {
				z: "万",
				b: "一",
				zbPoss: [{
					start: 2,
					end: 2
				}]
			}]
		}, {
			id: "四",
			name: "四",
			py: "s\xec",
			explain: "四季、四方、四周",
			biCount: 5,
			makeList: [{
				z: "匹",
				b: "丨",
				zbPoss: [{
					start: 3,
					end: 9
				}, {
					start: 3,
					end: 6
				}]
			}]
		}, {
			id: "公",
			name: "公",
			py: "gōng",
			explain: "公平、公布、公开",
			biCount: 4,
			makeList: [{
				z: "么",
				b: "㇏",
				zbPoss: [{
					start: 3,
					end: 6
				}, {
					start: 2,
					end: 6
				}]
			}, {
				z: "么",
				b: "丶",
				zbPoss: [{
					start: 3,
					end: 6
				}, {
					start: 2,
					end: 6
				}]
			}]
		}, {
			id: "匆",
			name: "匆",
			py: "cōng",
			explain: "匆匆、匆促",
			biCount: 5,
			makeList: [{
				z: "勿",
				b: "丶",
				zbPoss: [{
					start: 4,
					end: 5
				}, {
					start: 5,
					end: 5
				}, {
					start: 4,
					end: 8
				}]
			}, {
				z: "勿",
				b: "㇏",
				zbPoss: [{
					start: 4,
					end: 5
				}, {
					start: 5,
					end: 5
				}, {
					start: 4,
					end: 8
				}]
			}, {
				z: "勿",
				b: "一",
				zbPoss: [{
					start: 4,
					end: 5
				}, {
					start: 5,
					end: 5
				}, {
					start: 4,
					end: 8
				}]
			}]
		}, {
			id: "韭",
			name: "韭",
			py: "jiǔ",
			explain: "韭菜、韭黄、韭白",
			biCount: 9,
			makeList: [{
				z: "非",
				b: "一",
				zbPoss: [{
					start: 7,
					end: 9
				}]
			}]
		}, {
			id: "羊",
			name: "羊",
			py: "y\xe1ng",
			explain: "山羊、绵羊、羊毛",
			biCount: 6,
			makeList: [{
				z: "兰",
				b: "丨",
				zbPoss: [{
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "子",
			name: "子",
			py: "zǐ",
			explain: "桌子、笛子、杯子",
			biCount: 3,
			makeList: [{
				z: "了",
				b: "一",
				zbPoss: [{
					start: 4,
					end: 6
				}, {
					start: 4,
					end: 5
				}, {
					start: 5,
					end: 6
				}]
			}]
		}, {
			id: "血",
			name: "血",
			py: "xu\xe8",
			explain: "血液、血迹、流血",
			biCount: 6,
			makeList: [{
				z: "皿",
				b: "丿",
				zbPoss: [{
					start: 2,
					end: 4
				}, {
					start: 2,
					end: 5
				}]
			}]
		}, {
			id: "间",
			name: "间",
			py: "jiān",
			explain: "空间、房间、间隔",
			biCount: 7,
			makeList: [{
				z: "问",
				b: "一",
				zbPoss: [{
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "及",
			name: "及",
			py: "j\xed",
			explain: "及格、及时、涉及",
			biCount: 3,
			makeList: [{
				z: "乃",
				b: "㇏",
				zbPoss: [{
					start: 4,
					end: 9
				}, {
					start: 5,
					end: 9
				}]
			}, {
				z: "乃",
				b: "丶",
				zbPoss: [{
					start: 4,
					end: 9
				}, {
					start: 5,
					end: 9
				}]
			}, {
				z: "乃",
				b: "一",
				zbPoss: [{
					start: 4,
					end: 9
				}, {
					start: 5,
					end: 9
				}]
			}]
		}, {
			id: "令",
			name: "令",
			py: "l\xecng",
			explain: "命令、指令、口令",
			biCount: 5,
			makeList: [{
				z: "今",
				b: "丶",
				zbPoss: [{
					start: 8,
					end: 8
				}]
			}, {
				z: "今",
				b: "㇏",
				zbPoss: [{
					start: 8,
					end: 8
				}]
			}, {
				z: "今",
				b: "一",
				zbPoss: [{
					start: 8,
					end: 8
				}]
			}]
		}, {
			id: "体",
			name: "体",
			py: "tǐ",
			explain: "身体、体积、体贴",
			biCount: 7,
			makeList: [{
				z: "休",
				b: "一",
				zbPoss: [{
					start: 8,
					end: 8
				}, {
					start: 8,
					end: 9
				}, {
					start: 8,
					end: 5
				}, {
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 8
				}, {
					start: 5,
					end: 6
				}, {
					start: 5,
					end: 9
				}]
			}]
		}, {
			id: "亚",
			name: "亚",
			py: "y\xe0",
			explain: "亚军、亚洲、亚麻",
			biCount: 6,
			makeList: [{
				z: "业",
				b: "一",
				zbPoss: [{
					start: 1,
					end: 3
				}, {
					start: 1,
					end: 2
				}, {
					start: 2,
					end: 3
				}]
			}]
		}, {
			id: "灭",
			name: "灭",
			py: "mi\xe8",
			explain: "消灭、灭火、熄灭",
			biCount: 5,
			makeList: [{
				z: "火",
				b: "一",
				zbPoss: [{
					start: 1,
					end: 3
				}, {
					start: 1,
					end: 2
				}, {
					start: 2,
					end: 3
				}]
			}]
		}, {
			id: "下",
			name: "下",
			py: "xi\xe0",
			explain: "下方、下去、下面",
			biCount: 3,
			makeList: [{
				z: "卜",
				b: "一",
				zbPoss: [{
					start: 1,
					end: 3
				}]
			}]
		}, {
			id: "卞",
			name: "卞",
			py: "bi\xe0n",
			explain: "卞姓",
			biCount: 4,
			makeList: [{
				z: "下",
				b: "丶",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 5
				}]
			}, {
				z: "下",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 5
				}]
			}, {
				z: "下",
				b: "㇏",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 5
				}]
			}]
		}, {
			id: "不",
			name: "不",
			py: "b\xf9",
			explain: "不可、不行、不怕",
			biCount: 4,
			makeList: [{
				z: "下",
				b: "丿",
				zbPoss: [{
					start: 2,
					end: 4
				}, {
					start: 5,
					end: 4
				}, {
					start: 2,
					end: 5
				}, {
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "丕",
			name: "丕",
			py: "pī",
			explain: "丕平、丕显、丕大",
			biCount: 5,
			makeList: [{
				z: "不",
				b: "一",
				zbPoss: [{
					start: 7,
					end: 9
				}, {
					start: 7,
					end: 8
				}, {
					start: 8,
					end: 8
				}, {
					start: 8,
					end: 9
				}]
			}]
		}, {
			id: "必",
			name: "必",
			py: "b\xec",
			explain: "必须、必然、必定",
			biCount: 5,
			makeList: [{
				z: "心",
				b: "丿",
				zbPoss: [{
					start: 5,
					end: 7
				}, {
					start: 3,
					end: 7
				}, {
					start: 2,
					end: 7
				}]
			}]
		}, {
			id: "引",
			name: "引",
			py: "yǐn",
			explain: "引起、引进、吸引",
			biCount: 4,
			makeList: [{
				z: "弓",
				b: "丨",
				zbPoss: [{
					start: 3,
					end: 9
				}]
			}]
		}, {
			id: "生",
			name: "生",
			py: "shēng",
			explain: "生活、生气、生病",
			biCount: 6,
			makeList: [{
				z: "牛",
				b: "一",
				zbPoss: [{
					start: 7,
					end: 9
				}, {
					start: 8,
					end: 9
				}, {
					start: 7,
					end: 8
				}]
			}]
		}, {
			id: "丸",
			name: "丸",
			py: "w\xe1n",
			explain: "药丸、丸子、弹丸",
			biCount: 3,
			makeList: [{
				z: "九",
				b: "丶",
				zbPoss: [{
					start: 4,
					end: 5
				}, {
					start: 4,
					end: 8
				}]
			}, {
				z: "九",
				b: "㇏",
				zbPoss: [{
					start: 4,
					end: 5
				}, {
					start: 4,
					end: 8
				}]
			}, {
				z: "九",
				b: "一",
				zbPoss: [{
					start: 4,
					end: 5
				}, {
					start: 4,
					end: 8
				}]
			}]
		}, {
			id: "丛",
			name: "丛",
			py: "c\xf3ng",
			explain: "草丛、花丛、树丛",
			biCount: 5,
			makeList: [{
				z: "从",
				b: "一",
				zbPoss: [{
					start: 7,
					end: 9
				}]
			}]
		}, {
			id: "竟",
			name: "竟",
			py: "j\xecng",
			explain: "竟然、毕竟、竟敢",
			biCount: 11,
			makeList: [{
				z: "竞",
				b: "一",
				zbPoss: [{
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "斥",
			name: "斥",
			py: "ch\xec",
			explain: "呵斥、排斥、斥责",
			biCount: 5,
			makeList: [{
				z: "斤",
				b: "丶",
				zbPoss: [{
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 6
				}, {
					start: 5,
					end: 8
				}, {
					start: 5,
					end: 9
				}]
			}, {
				z: "斤",
				b: "㇏",
				zbPoss: [{
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 6
				}, {
					start: 5,
					end: 8
				}, {
					start: 5,
					end: 9
				}]
			}, {
				z: "斤",
				b: "一",
				zbPoss: [{
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 6
				}, {
					start: 5,
					end: 8
				}, {
					start: 5,
					end: 9
				}]
			}]
		}, {
			id: "凡",
			name: "凡",
			py: "f\xe1n",
			explain: "凡人、平凡、凡事",
			biCount: 4,
			makeList: [{
				z: "几",
				b: "丶",
				zbPoss: [{
					start: 5,
					end: 5
				}]
			}, {
				z: "几",
				b: "㇏",
				zbPoss: [{
					start: 5,
					end: 5
				}]
			}, {
				z: "几",
				b: "一",
				zbPoss: [{
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "风",
			name: "风",
			py: "fēng",
			explain: "风雨、风波、狂风",
			biCount: 5,
			makeList: [{
				z: "凡",
				b: "丿",
				zbPoss: [{
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "凤",
			name: "凤",
			py: "f\xe8ng",
			explain: "龙凤、凤凰、凤冠",
			biCount: 6,
			makeList: [{
				z: "风",
				b: "一",
				zbPoss: [{
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "正",
			name: "正",
			py: "zh\xe8ng",
			explain: "正确、正面、正常",
			biCount: 5,
			makeList: [{
				z: "止",
				b: "一",
				zbPoss: [{
					start: 1,
					end: 3
				}, {
					start: 1,
					end: 2
				}, {
					start: 2,
					end: 3
				}]
			}]
		}, {
			id: "庄",
			name: "庄",
			py: "zhuāng",
			explain: "村庄、庄稼、庄园",
			biCount: 6,
			makeList: [{
				z: "主",
				b: "丿",
				zbPoss: [{
					start: 4,
					end: 7
				}, {
					start: 5,
					end: 7
				}]
			}]
		}, {
			id: "种",
			name: "种",
			py: "zh\xf2ng",
			explain: "种树、播种、种地",
			biCount: 9,
			makeList: [{
				z: "和",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 8
				}, {
					start: 2,
					end: 9
				}, {
					start: 3,
					end: 8
				}, {
					start: 3,
					end: 9
				}]
			}]
		}, {
			id: "刃",
			name: "刃",
			py: "r\xe8n",
			explain: "刀刃、利刃、兵刃",
			biCount: 3,
			makeList: [{
				z: "刀",
				b: "丿",
				zbPoss: [{
					start: 4,
					end: 4
				}, {
					start: 5,
					end: 4
				}]
			}, {
				z: "刀",
				b: "㇀",
				zbPoss: [{
					start: 4,
					end: 4
				}, {
					start: 5,
					end: 4
				}]
			}, {
				z: "刀",
				b: "丨",
				zbPoss: [{
					start: 4,
					end: 4
				}, {
					start: 5,
					end: 4
				}]
			}]
		}, {
			id: "灰",
			name: "灰",
			py: "huī",
			explain: "灰尘、灰心、烟灰",
			biCount: 6,
			makeList: [{
				z: "灭",
				b: "丿",
				zbPoss: [{
					start: 2,
					end: 7
				}]
			}, {
				z: "灭",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 7
				}]
			}]
		}, {
			id: "鸟",
			name: "鸟",
			py: "niǎo",
			explain: "飞鸟、鸟类、鸟巢",
			biCount: 5,
			makeList: [{
				z: "乌",
				b: "丶",
				zbPoss: [{
					start: 5,
					end: 5
				}]
			}, {
				z: "乌",
				b: "㇏",
				zbPoss: [{
					start: 5,
					end: 5
				}]
			}, {
				z: "乌",
				b: "一",
				zbPoss: [{
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "来",
			name: "来",
			py: "l\xe1i",
			explain: "过来、往来、后来",
			biCount: 7,
			makeList: [{
				z: "米",
				b: "一",
				zbPoss: [{
					start: 1,
					end: 3
				}, {
					start: 1,
					end: 2
				}, {
					start: 2,
					end: 3
				}, {
					start: 4,
					end: 3
				}, {
					start: 4,
					end: 2
				}]
			}]
		}, {
			id: "歹",
			name: "歹",
			py: "dǎi",
			explain: "歹念、歹徒、好歹",
			biCount: 4,
			makeList: [{
				z: "夕",
				b: "一",
				zbPoss: [{
					start: 1,
					end: 3
				}, {
					start: 1,
					end: 2
				}, {
					start: 2,
					end: 3
				}]
			}]
		}, {
			id: "矛",
			name: "矛",
			py: "m\xe1o",
			explain: "矛盾、矛头、长矛",
			biCount: 5,
			makeList: [{
				z: "予",
				b: "丿",
				zbPoss: [{
					start: 5,
					end: 4
				}, {
					start: 5,
					end: 7
				}]
			}]
		}, {
			id: "师",
			name: "师",
			py: "shī",
			explain: "老师、师长、师傅",
			biCount: 6,
			makeList: [{
				z: "帅",
				b: "一",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 3
				}]
			}]
		}, {
			id: "伐",
			name: "伐",
			py: "f\xe1",
			explain: "砍伐、伐木、步伐",
			biCount: 6,
			makeList: [{
				z: "代",
				b: "丿",
				zbPoss: [{
					start: 5,
					end: 5
				}, {
					start: 6,
					end: 5
				}, {
					start: 5,
					end: 8
				}, {
					start: 6,
					end: 8
				}]
			}]
		}, {
			id: "同",
			name: "同",
			py: "t\xf3ng",
			explain: "同情、同意、同时",
			biCount: 6,
			makeList: [{
				z: "司",
				b: "丨",
				zbPoss: [{
					start: 1,
					end: 7
				}]
			}]
		}, {
			id: "兔",
			name: "兔",
			py: "t\xf9",
			explain: "兔子、白兔、兔唇",
			biCount: 8,
			makeList: [{
				z: "免",
				b: "丶",
				zbPoss: [{
					start: 5,
					end: 6
				}, {
					start: 5,
					end: 8
				}, {
					start: 5,
					end: 9
				}, {
					start: 6,
					end: 6
				}, {
					start: 6,
					end: 9
				}]
			}, {
				z: "免",
				b: "㇏",
				zbPoss: [{
					start: 5,
					end: 8
				}, {
					start: 5,
					end: 9
				}, {
					start: 6,
					end: 6
				}, {
					start: 6,
					end: 9
				}]
			}, {
				z: "免",
				b: "一",
				zbPoss: [{
					start: 5,
					end: 8
				}, {
					start: 5,
					end: 9
				}, {
					start: 6,
					end: 6
				}, {
					start: 6,
					end: 9
				}]
			}]
		}, {
			id: "木",
			name: "木",
			py: "m\xf9",
			explain: "木材、木头、木屋",
			biCount: 4,
			makeList: [{
				z: "大",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 8
				}, {
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "未",
			name: "未",
			py: "w\xe8i",
			explain: "未来、未必、未知",
			biCount: 5,
			makeList: [{
				z: "木",
				b: "一",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 1,
					end: 2
				}, {
					start: 2,
					end: 3
				}, {
					start: 4,
					end: 2
				}, {
					start: 5,
					end: 2
				}]
			}, {
				z: "夫",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 8
				}, {
					start: 5,
					end: 8
				}]
			}, {
				z: "天",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 8
				}]
			}]
		}, {
			id: "末",
			name: "末",
			py: "m\xf2",
			explain: "期末、末尾、末日",
			biCount: 5,
			makeList: [{
				z: "木",
				b: "一",
				zbPoss: [{
					start: 1,
					end: 3
				}, {
					start: 4,
					end: 3
				}]
			}]
		}, {
			id: "禾",
			name: "禾",
			py: "h\xe9",
			explain: "禾苗、锄禾、禾草",
			biCount: 5,
			makeList: [{
				z: "木",
				b: "丿",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 1
				}, {
					start: 3,
					end: 1
				}, {
					start: 3,
					end: 2
				}]
			}, {
				z: "夭",
				b: "丨",
				zbPoss: [{
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "术",
			name: "术",
			py: "sh\xf9",
			explain: "技术、手术、艺术",
			biCount: 5,
			makeList: [{
				z: "木",
				b: "㇏",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 3
				}, {
					start: 2,
					end: 5
				}, {
					start: 2,
					end: 6
				}]
			}, {
				z: "木",
				b: "丶",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 3
				}, {
					start: 2,
					end: 5
				}, {
					start: 2,
					end: 6
				}]
			}, {
				z: "木",
				b: "一",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 5
				}, {
					start: 2,
					end: 6
				}]
			}, {
				z: "犬",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 8
				}, {
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "本",
			name: "本",
			py: "běn",
			explain: "书本、本来、本领",
			biCount: 5,
			makeList: [{
				z: "木",
				b: "一",
				zbPoss: [{
					start: 5,
					end: 5
				}, {
					start: 4,
					end: 5
				}, {
					start: 7,
					end: 5
				}, {
					start: 4,
					end: 8
				}, {
					start: 5,
					end: 8
				}, {
					start: 7,
					end: 8
				}, {
					start: 8,
					end: 5
				}, {
					start: 8,
					end: 8
				}, {
					start: 4,
					end: 6
				}, {
					start: 5,
					end: 6
				}, {
					start: 7,
					end: 6
				}, {
					start: 8,
					end: 6
				}]
			}]
		}, {
			id: "札",
			name: "札",
			py: "zh\xe1",
			explain: "札记、手札、信札",
			biCount: 5,
			makeList: [{
				z: "木",
				b: "乚",
				zbPoss: [{
					start: 3,
					end: 6
				}, {
					start: 3,
					end: 9
				}]
			}]
		}, {
			id: "朱",
			name: "朱",
			py: "zhū",
			explain: "朱红、丹朱、朱笔",
			biCount: 6,
			makeList: [{
				z: "未",
				b: "丿",
				zbPoss: [{
					start: 2,
					end: 4
				}, {
					start: 2,
					end: 5
				}, {
					start: 5,
					end: 4
				}]
			}, {
				z: "矢",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 8
				}, {
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "耒",
			name: "耒",
			py: "lěi",
			explain: "耒阳",
			biCount: 6,
			makeList: [{
				z: "未",
				b: "一",
				zbPoss: [{
					start: 1,
					end: 3
				}, {
					start: 1,
					end: 2
				}, {
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 3
				}, {
					start: 5,
					end: 5
				}]
			}, {
				z: "末",
				b: "一",
				zbPoss: [{
					start: 1,
					end: 3
				}, {
					start: 1,
					end: 2
				}, {
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 3
				}, {
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "口",
			name: "口",
			py: "kǒu",
			explain: "口才、开口、门口",
			biCount: 3
		}, {
			id: "回",
			name: "回",
			py: "hu\xed",
			explain: "回收、回家、回答",
			biCount: 6
		}, {
			id: "吕",
			name: "吕",
			py: "lǚ",
			explain: "吕姓、大吕、吕宋",
			biCount: 6
		}, {
			id: "品",
			name: "品",
			py: "pǐn",
			explain: "用品、作品、样品",
			biCount: 9
		}, {
			id: "昌",
			name: "昌",
			py: "chāng",
			explain: "昌盛、昌隆",
			biCount: 8
		}, {
			id: "吾",
			name: "吾",
			py: "w\xfa",
			explain: "吾辈、支吾",
			biCount: 7
		}, {
			id: "唱",
			name: "唱",
			py: "ch\xe0ng",
			explain: "唱歌、说唱、唱片",
			biCount: 11
		}, {
			id: "唔",
			name: "唔",
			py: "w\xfa",
			explain: "咀唔、咿唔",
			biCount: 10
		}, {
			id: "晶",
			name: "晶",
			py: "jīng",
			explain: "水晶、结晶、冰晶",
			biCount: 12
		}, {
			id: "叱",
			name: "叱",
			py: "ch\xec",
			explain: "叱责、怒叱、叱咤",
			biCount: 5
		}, {
			id: "只",
			name: "只",
			py: "zhǐ",
			explain: "只是、只要、只好",
			biCount: 5
		}, {
			id: "叭",
			name: "叭",
			py: "bā",
			explain: "喇叭",
			biCount: 5
		}, {
			id: "味",
			name: "味",
			py: "w\xe8i",
			explain: "味道、味觉、口味",
			biCount: 8
		}, {
			id: "呮",
			name: "呮",
			py: "q\xec",
			explain: "呮查",
			biCount: 8
		}, {
			id: "叴",
			name: "叴",
			py: "qi\xfa",
			explain: "叴叴",
			biCount: 5
		}, {
			id: "古",
			name: "古",
			py: "gǔ",
			explain: "古装、古代、远古",
			biCount: 5
		}, {
			id: "叶",
			name: "叶",
			py: "y\xe8",
			explain: "树叶、叶子、落叶",
			biCount: 5
		}, {
			id: "吉",
			name: "吉",
			py: "j\xed",
			explain: "吉祥、大吉大利",
			biCount: 6
		}, {
			id: "吐",
			name: "吐",
			py: "tǔ",
			explain: "吐出、谈吐、吐字",
			biCount: 6
		}, {
			id: "呈",
			name: "呈",
			py: "ch\xe9ng",
			explain: "呈现、呈文、辞呈",
			biCount: 7
		}, {
			id: "杏",
			name: "杏",
			py: "x\xecng",
			explain: "杏树、杏花、杏仁",
			biCount: 7
		}, {
			id: "呆",
			name: "呆",
			py: "dāi",
			explain: "呆住、发呆、呆子",
			biCount: 7
		}, {
			id: "困",
			name: "困",
			py: "k\xf9n",
			explain: "围困、困苦、困难",
			biCount: 7
		}, {
			id: "枳",
			name: "枳",
			py: "zhǐ",
			explain: "枳落、枳花",
			biCount: 7
		}, {
			id: "咟",
			name: "咟",
			py: "hu\xf2",
			explain: "语气词，意思是叫呼",
			biCount: 9
		}, {
			id: "舌",
			name: "舌",
			py: "sh\xe9",
			explain: "舌头、口舌、饶舌",
			biCount: 6
		}, {
			id: "吀",
			name: "吀",
			py: "miē",
			explain: "古同“咩”",
			biCount: 6
		}, {
			id: "哆",
			name: "哆",
			py: "duō",
			explain: "哆嗦",
			biCount: 9
		}, {
			id: "叽",
			name: "叽",
			py: "jī",
			explain: "叽叽喳喳",
			biCount: 5
		}, {
			id: "吵",
			name: "吵",
			py: "chǎo",
			explain: "吵闹、争吵",
			biCount: 9
		}, {
			id: "中",
			name: "中",
			py: "zhōng",
			explain: "中国、中央、集中",
			biCount: 4,
			makeList: [{
				z: "口",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 8
				}]
			}]
		}, {
			id: "日",
			name: "日",
			py: "r\xec",
			explain: "昨日、日月、日常",
			biCount: 4,
			makeList: [{
				z: "口",
				b: "一",
				zbPoss: [{
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "尸",
			name: "尸",
			py: "shī",
			explain: "尸体、验尸",
			biCount: 4,
			makeList: [{
				z: "口",
				b: "丿",
				zbPoss: [{
					start: 4,
					end: 7
				}, {
					start: 5,
					end: 7
				}]
			}, {
				z: "口",
				b: "丨",
				zbPoss: [{
					start: 4,
					end: 7
				}, {
					start: 5,
					end: 7
				}]
			}]
		}, {
			id: "巳",
			name: "巳",
			py: "s\xec",
			explain: "巳时",
			biCount: 4,
			makeList: [{
				z: "口",
				b: "乚",
				zbPoss: [{
					start: 4,
					end: 6
				}, {
					start: 4,
					end: 9
				}, {
					start: 5,
					end: 6
				}, {
					start: 5,
					end: 9
				}]
			}]
		}, {
			id: "户",
			name: "户",
			py: "h\xf9",
			explain: "窗户、户口、户外",
			biCount: 5,
			makeList: [{
				z: "尸",
				b: "㇏",
				zbPoss: [{
					start: 2,
					end: 2
				}]
			}, {
				z: "尸",
				b: "丶",
				zbPoss: [{
					start: 2,
					end: 2
				}]
			}, {
				z: "尸",
				b: "一",
				zbPoss: [{
					start: 2,
					end: 2
				}]
			}]
		}, {
			id: "尺",
			name: "尺",
			py: "h\xf9",
			explain: "尺子、卷尺、量尺",
			biCount: 5,
			makeList: [{
				z: "尸",
				b: "㇏",
				zbPoss: [{
					start: 5,
					end: 8
				}, {
					start: 5,
					end: 9
				}]
			}, {
				z: "尸",
				b: "丶",
				zbPoss: [{
					start: 5,
					end: 8
				}, {
					start: 5,
					end: 9
				}]
			}, {
				z: "尸",
				b: "一",
				zbPoss: [{
					start: 5,
					end: 8
				}, {
					start: 5,
					end: 9
				}]
			}]
		}, {
			id: "人",
			name: "人",
			py: "r\xe9n",
			explain: "人民、人类、好人",
			biCount: 2
		}, {
			id: "个",
			name: "个",
			py: "g\xe8",
			explain: "个别、个体、这个",
			biCount: 3,
			makeList: [{
				z: "人",
				b: "丨",
				zbPoss: [{
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "大",
			name: "大",
			py: "d\xe0",
			explain: "大象、大树、大量",
			biCount: 3,
			makeList: [{
				z: "人",
				b: "一",
				zbPoss: [{
					start: 4,
					end: 5
				}, {
					start: 4,
					end: 6
				}, {
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 6
				}]
			}]
		}, {
			id: "天",
			name: "天",
			py: "tiān",
			explain: "天空、天气、明天",
			biCount: 4,
			makeList: [{
				z: "大",
				b: "一",
				zbPoss: [{
					start: 1,
					end: 2
				}, {
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 3
				}, {
					start: 1,
					end: 3
				}]
			}]
		}, {
			id: "矢",
			name: "矢",
			py: "shǐ",
			explain: "矢量、箭矢、矢志",
			biCount: 5,
			makeList: [{
				z: "天",
				b: "丿",
				zbPoss: [{
					start: 2,
					end: 1
				}, {
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 4
				}, {
					start: 1,
					end: 4
				}]
			}]
		}, {
			id: "夫",
			name: "夫",
			py: "fū",
			explain: "夫人、功夫、大夫",
			biCount: 4,
			makeList: [{
				z: "大",
				b: "一",
				zbPoss: [{
					start: 4,
					end: 5
				}, {
					start: 5,
					end: 5
				}, {
					start: 4,
					end: 2
				}, {
					start: 5,
					end: 2
				}, {
					start: 4,
					end: 6
				}]
			}]
		}, {
			id: "犬",
			name: "犬",
			py: "quǎn",
			explain: "犬吠、狼犬、军犬",
			biCount: 4,
			makeList: [{
				z: "大",
				b: "㇏",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 3
				}, {
					start: 2,
					end: 5
				}, {
					start: 2,
					end: 6
				}]
			}, {
				z: "大",
				b: "丶",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 3
				}, {
					start: 2,
					end: 5
				}, {
					start: 2,
					end: 6
				}]
			}, {
				z: "大",
				b: "一",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 5
				}, {
					start: 2,
					end: 6
				}]
			}]
		}, {
			id: "太",
			name: "太",
			py: "t\xe0i",
			explain: "太阳、太空、太极",
			biCount: 4,
			makeList: [{
				z: "大",
				b: "㇏",
				zbPoss: [{
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 8
				}, {
					start: 8,
					end: 8
				}]
			}, {
				z: "大",
				b: "丶",
				zbPoss: [{
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 8
				}, {
					start: 8,
					end: 8
				}]
			}, {
				z: "大",
				b: "一",
				zbPoss: [{
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 8
				}, {
					start: 8,
					end: 8
				}]
			}]
		}, {
			id: "夬",
			name: "夬",
			py: "gu\xe0i",
			explain: "夬卦",
			biCount: 4,
			makeList: [{
				z: "大",
				b: "𠃍",
				zbPoss: [{
					start: 1,
					end: 5
				}, {
					start: 2,
					end: 5
				}, {
					start: 4,
					end: 5
				}, {
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "夭",
			name: "夭",
			py: "yāo",
			explain: "桃之夭夭",
			biCount: 4,
			makeList: [{
				z: "大",
				b: "丿",
				zbPoss: [{
					start: 2,
					end: 1
				}, {
					start: 2,
					end: 2
				}]
			}]
		}, {
			id: "由",
			name: "由",
			py: "y\xf3u",
			explain: "自由、由于、缘由",
			biCount: 5,
			makeList: [{
				z: "日",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 5
				}]
			}]
		}, {
			id: "甲",
			name: "甲",
			py: "jiǎ",
			explain: "盔甲、甲方、甲乙",
			biCount: 5,
			makeList: [{
				z: "日",
				b: "丨",
				zbPoss: [{
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "田",
			name: "田",
			py: "ti\xe1n",
			explain: "田野、农田、稻田",
			biCount: 5,
			makeList: [{
				z: "日",
				b: "丨",
				zbPoss: [{
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "旧",
			name: "旧",
			py: "ji\xf9",
			explain: "破旧、怀旧、守旧",
			biCount: 5,
			makeList: [{
				z: "日",
				b: "丨",
				zbPoss: [{
					start: 4,
					end: 4
				}, {
					start: 1,
					end: 4
				}, {
					start: 4,
					end: 7
				}, {
					start: 1,
					end: 7
				}]
			}]
		}, {
			id: "电",
			name: "电",
			py: "di\xe0n",
			explain: "电线、水电、电工",
			biCount: 5,
			makeList: [{
				z: "日",
				b: "乚",
				zbPoss: [{
					start: 2,
					end: 6
				}, {
					start: 2,
					end: 9
				}, {
					start: 2,
					end: 8
				}]
			}]
		}, {
			id: "目",
			name: "目",
			py: "m\xf9",
			explain: "眉目、目光、题目",
			biCount: 5,
			makeList: [{
				z: "日",
				b: "一",
				zbPoss: [{
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "旦",
			name: "旦",
			py: "d\xe0n",
			explain: "元旦、旦夕、旦角",
			biCount: 5,
			makeList: [{
				z: "日",
				b: "一",
				zbPoss: [{
					start: 7,
					end: 8
				}, {
					start: 7,
					end: 9
				}, {
					start: 8,
					end: 8
				}, {
					start: 8,
					end: 9
				}]
			}]
		}, {
			id: "白",
			name: "白",
			py: "b\xe1i",
			explain: "白色、明白、雪白",
			biCount: 5,
			makeList: [{
				z: "日",
				b: "丿",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 1
				}, {
					start: 2,
					end: 5
				}]
			}]
		}, {
			id: "百",
			name: "百",
			py: "bǎi",
			explain: "百万、一百、百姓",
			biCount: 6,
			makeList: [{
				z: "白",
				b: "一",
				zbPoss: [{
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 3
				}, {
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 3
				}]
			}]
		}, {
			id: "癿",
			name: "癿",
			py: "bi\xe9",
			explain: "癿姓",
			biCount: 6,
			makeList: [{
				z: "白",
				b: "乚",
				zbPoss: [{
					start: 3,
					end: 6
				}, {
					start: 3,
					end: 9
				}]
			}]
		}, {
			id: "一",
			name: "一",
			py: "yī",
			explain: "一字千金",
			biCount: 1
		}, {
			id: "二",
			name: "二",
			py: "\xe8r",
			explain: "二月、二手、二线",
			biCount: 2,
			makeList: [{
				z: "一",
				b: "一",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 3
				}, {
					start: 2,
					end: 3
				}, {
					start: 4,
					end: 2
				}, {
					start: 4,
					end: 3
				}, {
					start: 4,
					end: 5
				}, {
					start: 5,
					end: 5
				}, {
					start: 4,
					end: 6
				}, {
					start: 7,
					end: 6
				}, {
					start: 7,
					end: 9
				}]
			}]
		}, {
			id: "十",
			name: "十",
			py: "sh\xed",
			explain: "十月、十分、十足",
			biCount: 2,
			makeList: [{
				z: "一",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 8
				}, {
					start: 2,
					end: 5
				}, {
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "厂",
			name: "厂",
			py: "chǎng",
			explain: "工厂、厂商、厂长",
			biCount: 2,
			makeList: [{
				z: "一",
				b: "丿",
				zbPoss: [{
					start: 4,
					end: 7
				}]
			}]
		}, {
			id: "匕",
			name: "匕",
			py: "bǐ",
			explain: "匕首、短匕、匕刃",
			biCount: 2
		}, {
			id: "七",
			name: "七",
			py: "qī",
			explain: "七上八下",
			biCount: 2,
			makeList: [{
				z: "一",
				b: "乚",
				zbPoss: [{
					start: 2,
					end: 6
				}, {
					start: 2,
					end: 5
				}, {
					start: 2,
					end: 8
				}, {
					start: 2,
					end: 9
				}, {
					start: 5,
					end: 8
				}, {
					start: 5,
					end: 9
				}]
			}]
		}, {
			id: "丁",
			name: "丁",
			py: "dīng",
			explain: "白丁、园丁、补丁",
			biCount: 2,
			makeList: [{
				z: "一",
				b: "亅",
				zbPoss: [{
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "于",
			name: "于",
			py: "y\xfa",
			explain: "于是、对于、终于",
			biCount: 3,
			makeList: [{
				z: "丁",
				b: "一",
				zbPoss: [{
					start: 4,
					end: 6
				}, {
					start: 5,
					end: 6
				}]
			}, {
				z: "二",
				b: "亅",
				zbPoss: [{
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "手",
			name: "手",
			py: "shǒu",
			explain: "高手、对手、平手",
			biCount: 4,
			makeList: [{
				z: "于",
				b: "一",
				zbPoss: [{
					start: 4,
					end: 3
				}, {
					start: 4,
					end: 5
				}, {
					start: 4,
					end: 6
				}, {
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 6
				}]
			}]
		}, {
			id: "乙",
			name: "乙",
			py: "yǐ",
			explain: "乙方、乙烷",
			biCount: 2,
			makeList: [{
				z: "一",
				b: "乚",
				zbPoss: [{
					start: 6,
					end: 9
				}]
			}]
		}, {
			id: "午",
			name: "午",
			py: "wǔ",
			explain: "上午、午餐、午间",
			biCount: 4,
			makeList: [{
				z: "干",
				b: "丿",
				zbPoss: [{
					start: 1,
					end: 4
				}, {
					start: 2,
					end: 4
				}]
			}]
		}, {
			id: "开",
			name: "开",
			py: "kāi",
			explain: "开心、开会、放开",
			biCount: 4,
			makeList: [{
				z: "干",
				b: "丿",
				zbPoss: [{
					start: 1,
					end: 7
				}, {
					start: 2,
					end: 7
				}, {
					start: 5,
					end: 7
				}]
			}, {
				z: "干",
				b: "丨",
				zbPoss: [{
					start: 1,
					end: 7
				}, {
					start: 2,
					end: 7
				}, {
					start: 5,
					end: 7
				}]
			}]
		}, {
			id: "王",
			name: "王",
			py: "w\xe1ng",
			explain: "王者、君王、国王",
			biCount: 4,
			makeList: [{
				z: "干",
				b: "一",
				zbPoss: [{
					start: 7,
					end: 9
				}]
			}, {
				z: "三",
				b: "丨",
				zbPoss: [{
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 8
				}]
			}, {
				z: "土",
				b: "一",
				zbPoss: [{
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 3
				}, {
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 3
				}]
			}, {
				z: "工",
				b: "一",
				zbPoss: [{
					start: 5,
					end: 5
				}, {
					start: 4,
					end: 5
				}, {
					start: 4,
					end: 6
				}, {
					start: 5,
					end: 6
				}]
			}]
		}, {
			id: "丰",
			name: "丰",
			py: "fēng",
			explain: "丰收、丰富、丰碑",
			biCount: 4,
			makeList: [{
				z: "三",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 8
				}]
			}]
		}, {
			id: "汨",
			name: "汨",
			py: "m\xec",
			explain: "汨罗",
			biCount: 7
		}, {
			id: "油",
			name: "油",
			py: "y\xf3u",
			explain: "油条、加油、奶油",
			biCount: 8,
			makeList: [{
				z: "汨",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 8
				}, {
					start: 2,
					end: 9
				}]
			}]
		}, {
			id: "泪",
			name: "泪",
			py: "l\xe8i",
			explain: "眼泪、泪光、含泪",
			biCount: 8,
			makeList: [{
				z: "汨",
				b: "一",
				zbPoss: [{
					start: 5,
					end: 6
				}, {
					start: 8,
					end: 9
				}]
			}]
		}, {
			id: "泊",
			name: "泊",
			py: "b\xf3",
			explain: "湖泊、淡泊、泊车",
			biCount: 8,
			makeList: [{
				z: "汨",
				b: "丿",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 5
				}, {
					start: 3,
					end: 5
				}]
			}]
		}, {
			id: "月",
			name: "月",
			py: "yu\xe8",
			explain: "月份、岁月、月光",
			biCount: 4
		}, {
			id: "用",
			name: "用",
			py: "y\xf2ng",
			explain: "用途、作用、用品",
			biCount: 5,
			makeList: [{
				z: "月",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 8
				}, {
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "甩",
			name: "甩",
			py: "shuǎi",
			explain: "甩开、甩手、甩卖",
			biCount: 5,
			makeList: [{
				z: "月",
				b: "乚",
				zbPoss: [{
					start: 2,
					end: 9
				}, {
					start: 5,
					end: 9
				}, {
					start: 2,
					end: 6
				}, {
					start: 5,
					end: 6
				}]
			}]
		}, {
			id: "杳",
			name: "杳",
			py: "yǎo",
			explain: "杳无音讯",
			biCount: 8,
			makeList: [{
				z: "杏",
				b: "一",
				zbPoss: [{
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 8
				}, {
					start: 8,
					end: 5
				}, {
					start: 8,
					end: 8
				}]
			}]
		}, {
			id: "香",
			name: "香",
			py: "xiāng",
			explain: "香气、香味、熏香",
			biCount: 9,
			makeList: [{
				z: "杳",
				b: "丿",
				zbPoss: [{
					start: 2,
					end: 1
				}, {
					start: 2,
					end: 2
				}, {
					start: 3,
					end: 1
				}, {
					start: 3,
					end: 2
				}]
			}]
		}, {
			id: "查",
			name: "查",
			py: "ch\xe1",
			explain: "查看、查找、检查",
			biCount: 9,
			makeList: [{
				z: "杳",
				b: "一",
				zbPoss: [{
					start: 7,
					end: 9
				}, {
					start: 7,
					end: 8
				}, {
					start: 8,
					end: 9
				}]
			}]
		}, {
			id: "兀",
			name: "兀",
			py: "wu",
			explain: "兀自、突兀",
			biCount: 3
		}, {
			id: "元",
			name: "元",
			py: "yu\xe1n",
			explain: "元旦，元音、公元",
			biCount: 4,
			makeList: [{
				z: "兀",
				b: "一",
				zbPoss: [{
					start: 1,
					end: 2
				}, {
					start: 2,
					end: 2
				}, {
					start: 1,
					end: 3
				}, {
					start: 2,
					end: 3
				}]
			}]
		}, {
			id: "匹",
			name: "匹",
			py: "pǐ",
			explain: "匹配、马匹、匹敌",
			biCount: 4,
			makeList: [{
				z: "兀",
				b: "𠃊",
				zbPoss: [{
					start: 1,
					end: 9
				}, {
					start: 4,
					end: 9
				}]
			}]
		}, {
			id: "三",
			name: "三",
			py: "sān",
			explain: "三楼、三山、三星",
			biCount: 3,
			makeList: [{
				z: "二",
				b: "一",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 3
				}, {
					start: 2,
					end: 3
				}, {
					start: 5,
					end: 5
				}, {
					start: 4,
					end: 5
				}, {
					start: 5,
					end: 6
				}, {
					start: 4,
					end: 6
				}]
			}, {
				z: "一",
				b: "一 一",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 3
				}, {
					start: 2,
					end: 3
				}, {
					start: 5,
					end: 5
				}, {
					start: 4,
					end: 5
				}, {
					start: 5,
					end: 6
				}, {
					start: 4,
					end: 6
				}, {
					start: 0,
					end: 0
				}, {
					start: 5,
					end: 5
				}, {
					start: 4,
					end: 5
				}, {
					start: 5,
					end: 6
				}, {
					start: 4,
					end: 6
				}, {
					start: 8,
					end: 8
				}, {
					start: 7,
					end: 8
				}, {
					start: 8,
					end: 9
				}, {
					start: 7,
					end: 9
				}]
			}]
		}, {
			id: "丘",
			name: "丘",
			py: "sān",
			explain: "丘陵、山丘、土丘",
			biCount: 5
		}, {
			id: "乒",
			name: "乒",
			py: "pīng",
			explain: "乒乓球",
			biCount: 6,
			makeList: [{
				z: "丘",
				b: "丿",
				zbPoss: [{
					start: 7,
					end: 7
				}, {
					start: 8,
					end: 7
				}, {
					start: 8,
					end: 8
				}]
			}]
		}, {
			id: "乓",
			name: "乓",
			py: "pāng",
			explain: "乒乓球",
			biCount: 6,
			makeList: [{
				z: "丘",
				b: "㇏",
				zbPoss: [{
					start: 8,
					end: 8
				}, {
					start: 8,
					end: 9
				}]
			}, {
				z: "丘",
				b: "丶",
				zbPoss: [{
					start: 8,
					end: 8
				}, {
					start: 8,
					end: 9
				}]
			}, {
				z: "丘",
				b: "一",
				zbPoss: [{
					start: 8,
					end: 8
				}, {
					start: 8,
					end: 9
				}]
			}]
		}, {
			id: "失",
			name: "失",
			py: "shī",
			explain: "丢失、失去、遗失",
			biCount: 5,
			makeList: [{
				z: "夫",
				b: "丿",
				zbPoss: [{
					start: 1,
					end: 4
				}, {
					start: 2,
					end: 4
				}, {
					start: 5,
					end: 4
				}, {
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "杠",
			name: "杠",
			py: "g\xe0ng",
			explain: "单杠、杠杆、抬杠",
			biCount: 7
		}, {
			id: "杆",
			name: "杆",
			py: "yǎo",
			explain: "栏杆、拉杆、旗杆",
			biCount: 7
		}, {
			id: "枉",
			name: "枉",
			py: "wǎng",
			explain: "枉费、冤枉、枉法",
			biCount: 8,
			makeList: [{
				z: "杆",
				b: "一",
				zbPoss: [{
					start: 8,
					end: 8
				}, {
					start: 8,
					end: 9
				}]
			}, {
				z: "杠",
				b: "一",
				zbPoss: [{
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 6
				}]
			}]
		}, {
			id: "柱",
			name: "柱",
			py: "zh\xf9",
			explain: "柱子、立柱、支柱",
			biCount: 9,
			makeList: [{
				z: "枉",
				b: "丶",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 5
				}]
			}, {
				z: "枉",
				b: "㇏",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 5
				}]
			}, {
				z: "枉",
				b: "一",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 5
				}]
			}]
		}, {
			id: "秆",
			name: "秆",
			py: "gǎn",
			explain: "麦秆、秸秆、麻秆",
			biCount: 8,
			makeList: [{
				z: "杆",
				b: "丿",
				zbPoss: [{
					start: 2,
					end: 1
				}]
			}]
		}, {
			id: "杵",
			name: "杵",
			py: "chǔ",
			explain: "杵药、舂杵、杵头",
			biCount: 8,
			makeList: [{
				z: "杆",
				b: "丿",
				zbPoss: [{
					start: 2,
					end: 5
				}]
			}, {
				z: "杆",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 5
				}]
			}]
		}, {
			id: "土",
			name: "土",
			py: "tǔ",
			explain: "泥土、土地、土坡",
			biCount: 3,
			makeList: [{
				z: "二",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 5
				}]
			}, {
				z: "一",
				b: "丨 一",
				zbPoss: [{
					start: 2,
					end: 5
				}, {
					start: 2,
					end: 7
				}, {
					start: 2,
					end: 8
				}, {
					start: 0,
					end: 0
				}, {
					start: 7,
					end: 9
				}, {
					start: 7,
					end: 8
				}]
			}]
		}, {
			id: "干",
			name: "干",
			py: "g\xe0n",
			explain: "干净、干活、能干",
			biCount: 3,
			makeList: [{
				z: "二",
				b: "丨",
				zbPoss: [{
					start: 5,
					end: 8
				}]
			}, {
				z: "一",
				b: "一 丨",
				zbPoss: [{
					start: 4,
					end: 5
				}, {
					start: 4,
					end: 6
				}, {
					start: 5,
					end: 6
				}, {
					start: 5,
					end: 5
				}, {
					start: 7,
					end: 8
				}, {
					start: 8,
					end: 9
				}, {
					start: 8,
					end: 8
				}, {
					start: 7,
					end: 9
				}, {
					start: 0,
					end: 0
				}, {
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "工",
			name: "工",
			py: "gōng",
			explain: "工匠、工作、分工",
			biCount: 3,
			makeList: [{
				z: "二",
				b: "丨",
				zbPoss: [{
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "亏",
			name: "亏",
			py: "kuī",
			explain: "亏本、吃亏、亏欠",
			biCount: 3,
			makeList: [{
				z: "二",
				b: "㇉",
				zbPoss: [{
					start: 5,
					end: 8
				}, {
					start: 8,
					end: 8
				}]
			}]
		}, {
			id: "与",
			name: "与",
			py: "yǔ",
			explain: "与其、参与、与会",
			biCount: 3,
			makeList: [{
				z: "二",
				b: "㇉",
				zbPoss: [{
					start: 1,
					end: 8
				}, {
					start: 1,
					end: 9
				}, {
					start: 2,
					end: 8
				}, {
					start: 2,
					end: 9
				}]
			}]
		}, {
			id: "早",
			name: "早",
			py: "zǎo",
			explain: "早晨、早上、早餐",
			biCount: 6,
			makeList: [{
				z: "旦",
				b: "丨",
				zbPoss: [{
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "亘",
			name: "亘",
			py: "g\xe8n",
			explain: "亘古、连亘、横亘",
			biCount: 6,
			makeList: [{
				z: "旦",
				b: "一",
				zbPoss: [{
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 3
				}, {
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 3
				}]
			}]
		}, {
			id: "戈",
			name: "戈",
			py: "gē",
			explain: "干戈、隔壁、探戈",
			biCount: 4
		}, {
			id: "戊",
			name: "戊",
			py: "w\xf9",
			explain: "戊戌变法、戊姓",
			biCount: 5,
			makeList: [{
				z: "戈",
				b: "丿",
				zbPoss: [{
					start: 4,
					end: 7
				}]
			}]
		}, {
			id: "戋",
			name: "戋",
			py: "jiān",
			explain: "戋帛、戋余",
			biCount: 5,
			makeList: [{
				z: "戈",
				b: "一",
				zbPoss: [{
					start: 4,
					end: 2
				}, {
					start: 4,
					end: 5
				}, {
					start: 1,
					end: 2
				}]
			}]
		}, {
			id: "坏",
			name: "坏",
			py: "hu\xe0i",
			explain: "破坏、坏事、坏处",
			biCount: 7
		}, {
			id: "环",
			name: "环",
			py: "hu\xe1n",
			explain: "环绕、环形、环保",
			biCount: 8,
			makeList: [{
				z: "坏",
				b: "一",
				zbPoss: [{
					start: 1,
					end: 2
				}]
			}]
		}, {
			id: "坯",
			name: "坯",
			py: "pī",
			explain: "毛坯、土坯、坯料",
			biCount: 8,
			makeList: [{
				z: "坏",
				b: "一",
				zbPoss: [{
					start: 8,
					end: 8
				}, {
					start: 8,
					end: 9
				}]
			}]
		}, {
			id: "五",
			name: "五",
			py: "wǔ",
			explain: "五常、五谷、五官",
			biCount: 5,
			makeList: [{
				z: "王",
				b: "丨",
				zbPoss: [{
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "丑",
			name: "丑",
			py: "chǒu",
			explain: "丑陋、丑态、小丑",
			biCount: 5,
			makeList: [{
				z: "王",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 5
				}, {
					start: 2,
					end: 8
				}]
			}]
		}, {
			id: "玍",
			name: "玍",
			py: "gǎ",
			explain: "方言，意思是调皮、怪癖",
			biCount: 5,
			makeList: [{
				z: "王",
				b: "丿",
				zbPoss: [{
					start: 1,
					end: 4
				}, {
					start: 2,
					end: 4
				}]
			}]
		}, {
			id: "玌",
			name: "玌",
			py: "qi\xfa",
			explain: "一种玉的名字",
			biCount: 5,
			makeList: [{
				z: "王",
				b: "乚",
				zbPoss: [{
					start: 3,
					end: 6
				}, {
					start: 3,
					end: 9
				}]
			}]
		}, {
			id: "毛",
			name: "毛",
			py: "m\xe1o",
			explain: "羊毛、羽毛、毛发",
			biCount: 4,
			makeList: [{
				z: "三",
				b: "乚",
				zbPoss: [{
					start: 5,
					end: 6
				}, {
					start: 5,
					end: 9
				}]
			}]
		}, {
			id: "曲",
			name: "曲",
			py: "qǔ",
			explain: "弯曲、曲折、歌曲",
			biCount: 6,
			makeList: [{
				z: "由",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 5
				}, {
					start: 2,
					end: 8
				}, {
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "又",
			name: "又",
			py: "y\xf2u",
			explain: "又及、又名、复又",
			biCount: 2
		}, {
			id: "叉",
			name: "叉",
			py: "chā",
			explain: "餐叉、叉车、叉子",
			biCount: 3,
			makeList: [{
				z: "又",
				b: "丶",
				zbPoss: [{
					start: 5,
					end: 5
				}]
			}, {
				z: "又",
				b: "㇏",
				zbPoss: [{
					start: 5,
					end: 5
				}]
			}, {
				z: "又",
				b: "一",
				zbPoss: [{
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "刁",
			name: "刁",
			py: "diāo",
			explain: "刁滑、刁难、刁悍",
			biCount: 2
		}, {
			id: "习",
			name: "习",
			py: "x\xed",
			explain: "学习、复习、练习",
			biCount: 3,
			makeList: [{
				z: "刁",
				b: "丶",
				zbPoss: [{
					start: 4,
					end: 5
				}, {
					start: 5,
					end: 5
				}]
			}, {
				z: "刁",
				b: "㇏",
				zbPoss: [{
					start: 4,
					end: 5
				}, {
					start: 5,
					end: 5
				}]
			}, {
				z: "刁",
				b: "一",
				zbPoss: [{
					start: 4,
					end: 5
				}, {
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "之",
			name: "之",
			py: "zhī",
			explain: "之前、总之、反之",
			biCount: 3
		}, {
			id: "乏",
			name: "乏",
			py: "f\xe1",
			explain: "困乏、乏力、缺乏",
			biCount: 4,
			makeList: [{
				z: "之",
				b: "丿",
				zbPoss: [{
					start: 2,
					end: 1
				}, {
					start: 2,
					end: 2
				}, {
					start: 3,
					end: 1
				}, {
					start: 3,
					end: 2
				}, {
					start: 2,
					end: 4
				}]
			}]
		}, {
			id: "兵",
			name: "兵",
			py: "bīng",
			explain: "士兵、官兵、兵器",
			biCount: 7,
			makeList: [{
				z: "乒",
				b: "㇏",
				zbPoss: [{
					start: 5,
					end: 8
				}, {
					start: 5,
					end: 9
				}, {
					start: 8,
					end: 8
				}, {
					start: 8,
					end: 9
				}]
			}, {
				z: "乒",
				b: "丶",
				zbPoss: [{
					start: 5,
					end: 8
				}, {
					start: 5,
					end: 9
				}, {
					start: 8,
					end: 8
				}, {
					start: 8,
					end: 9
				}]
			}, {
				z: "乒",
				b: "一",
				zbPoss: [{
					start: 5,
					end: 8
				}, {
					start: 5,
					end: 9
				}, {
					start: 8,
					end: 8
				}, {
					start: 8,
					end: 9
				}]
			}]
		}, {
			id: "串",
			name: "串",
			py: "chu\xe0n",
			explain: "串联、串通、串门",
			biCount: 7,
			makeList: [{
				z: "吕",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 8
				}]
			}]
		}, {
			id: "句",
			name: "句",
			py: "j\xf9",
			explain: "句号、句子、造句",
			biCount: 5
		}, {
			id: "旬",
			name: "旬",
			py: "x\xfan",
			explain: "上旬、下旬、一旬",
			biCount: 6,
			makeList: [{
				z: "句",
				b: "一",
				zbPoss: [{
					start: 4,
					end: 5
				}, {
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "甸",
			name: "甸",
			py: "di\xe0n",
			explain: "缅甸、沉甸甸",
			biCount: 7,
			makeList: [{
				z: "旬",
				b: "丨",
				zbPoss: [{
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "故",
			name: "故",
			py: "g\xf9",
			explain: "故事、故乡、故意",
			biCount: 9
		}, {
			id: "敌",
			name: "敌",
			py: "d\xed",
			explain: "敌人、强敌、敌军",
			biCount: 10,
			makeList: [{
				z: "故",
				b: "丿",
				zbPoss: [{
					start: 2,
					end: 1
				}]
			}]
		}, {
			id: "冶",
			name: "冶",
			py: "yě",
			explain: "冶炼、陶冶",
			biCount: 7
		}, {
			id: "治",
			name: "治",
			py: "zh\xec",
			explain: "治疗、治病、医治",
			biCount: 8,
			makeList: [{
				z: "冶",
				b: "丶",
				zbPoss: [{
					start: 1,
					end: 2
				}, {
					start: 2,
					end: 2
				}, {
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 5
				}, {
					start: 1,
					end: 5
				}, {
					start: 2,
					end: 5
				}]
			}, {
				z: "冶",
				b: "㇏",
				zbPoss: [{
					start: 1,
					end: 2
				}, {
					start: 2,
					end: 2
				}, {
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 5
				}, {
					start: 1,
					end: 5
				}, {
					start: 2,
					end: 5
				}]
			}, {
				z: "冶",
				b: "一",
				zbPoss: [{
					start: 1,
					end: 2
				}, {
					start: 2,
					end: 2
				}, {
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 5
				}, {
					start: 1,
					end: 5
				}, {
					start: 2,
					end: 5
				}]
			}]
		}, {
			id: "戎",
			name: "戎",
			py: "r\xf3ng",
			explain: "戎装、戎马、从戎",
			biCount: 6
		}, {
			id: "戒",
			name: "戒",
			py: "ji\xe8",
			explain: "戒心、警戒、戒尺",
			biCount: 7,
			makeList: [{
				z: "戎",
				b: "丨",
				zbPoss: [{
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "车",
			name: "车",
			py: "chē",
			explain: "戎装、戎马、从戎",
			biCount: 4
		}, {
			id: "轧",
			name: "轧",
			py: "zh\xe1",
			explain: "倾轧、轧机、挤轧",
			biCount: 5,
			makeList: [{
				z: "车",
				b: "乚",
				zbPoss: [{
					start: 3,
					end: 6
				}, {
					start: 3,
					end: 9
				}]
			}]
		}, {
			id: "西",
			name: "西",
			py: "xī",
			explain: "广西、西瓜、巴西",
			biCount: 6
		}, {
			id: "酉",
			name: "酉",
			py: "yǒu",
			explain: "酉时、辛酉",
			biCount: 7,
			makeList: [{
				z: "西",
				b: "一",
				zbPoss: [{
					start: 4,
					end: 5
				}, {
					start: 4,
					end: 6
				}, {
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 6
				}]
			}]
		}, {
			id: "刊",
			name: "刊",
			py: "kān",
			explain: "书刊、报刊、刊物",
			biCount: 5
		}, {
			id: "刑",
			name: "刑",
			py: "x\xedng",
			explain: "入刑、刑法、判刑",
			biCount: 6,
			makeList: [{
				z: "刊",
				b: "丿",
				zbPoss: [{
					start: 1,
					end: 4
				}, {
					start: 1,
					end: 7
				}, {
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 7
				}]
			}, {
				z: "刊",
				b: "丨",
				zbPoss: [{
					start: 1,
					end: 4
				}, {
					start: 1,
					end: 7
				}, {
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 7
				}, {
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "折",
			name: "折",
			py: "zh\xe9",
			explain: "、折磨、折叠、折服",
			biCount: 7
		}, {
			id: "拆",
			name: "拆",
			py: "chāi",
			explain: "拆除、拆散、拆卸",
			biCount: 8,
			makeList: [{
				z: "折",
				b: "丶",
				zbPoss: [{
					start: 5,
					end: 6
				}, {
					start: 5,
					end: 9
				}]
			}, {
				z: "折",
				b: "㇏",
				zbPoss: [{
					start: 5,
					end: 6
				}, {
					start: 5,
					end: 9
				}]
			}, {
				z: "折",
				b: "一",
				zbPoss: [{
					start: 5,
					end: 6
				}, {
					start: 5,
					end: 9
				}]
			}]
		}, {
			id: "伯",
			name: "伯",
			py: "b\xf3",
			explain: "伯仲、老伯、伯父",
			biCount: 7
		}, {
			id: "佰",
			name: "佰",
			py: "bǎi",
			explain: "仟佰",
			biCount: 8,
			makeList: [{
				z: "伯",
				b: "一",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 3
				}]
			}]
		}, {
			id: "李",
			name: "李",
			py: "lǐ",
			explain: "李树、李子、李姓",
			biCount: 7
		}, {
			id: "季",
			name: "季",
			py: "j\xec",
			explain: "四季、季节、旺季",
			biCount: 8,
			makeList: [{
				z: "李",
				b: "丿",
				zbPoss: [{
					start: 2,
					end: 1
				}, {
					start: 2,
					end: 2
				}]
			}]
		}, {
			id: "闸",
			name: "闸",
			py: "zh\xe1",
			explain: "闸门、跳闸、水闸",
			biCount: 8,
			makeList: [{
				z: "间",
				b: "丨",
				zbPoss: [{
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "注",
			name: "注",
			py: "zh\xf9",
			explain: "注意、注目、注释",
			biCount: 8,
			makeList: [{
				z: "汪",
				b: "丶",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 5
				}]
			}, {
				z: "汪",
				b: "㇏",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 5
				}]
			}, {
				z: "汪",
				b: "一",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 5
				}]
			}]
		}, {
			id: "攻",
			name: "攻",
			py: "gōng",
			explain: "进攻、攻防、攻击",
			biCount: 7
		}, {
			id: "玫",
			name: "玫",
			py: "m\xe9i",
			explain: "玫瑰",
			biCount: 8,
			makeList: [{
				z: "攻",
				b: "一",
				zbPoss: [{
					start: 4,
					end: 5
				}]
			}]
		}, {
			id: "仿",
			name: "仿",
			py: "jiān",
			explain: "仿造、仿佛、模仿",
			biCount: 6
		}, {
			id: "彷",
			name: "彷",
			py: "p\xe1ng",
			explain: "彷徨",
			biCount: 7,
			makeList: [{
				z: "仿",
				b: "丿",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 2,
					end: 1
				}, {
					start: 2,
					end: 4
				}]
			}]
		}, {
			id: "呢",
			name: "呢",
			py: "ne",
			explain: "句子的末尾，语气词",
			biCount: 8
		}, {
			id: "昵",
			name: "昵",
			py: "n\xec",
			explain: "昵称、亲昵、昵语",
			biCount: 9,
			makeList: [{
				z: "呢",
				b: "一",
				zbPoss: [{
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 5
				}]
			}]
		}, {
			id: "拔",
			name: "拔",
			py: "b\xe1",
			explain: "拔草、拔牙、挺拔",
			biCount: 8
		}, {
			id: "拨",
			name: "拨",
			py: "bō",
			explain: "拨开、拨弄、挑拨",
			biCount: 9,
			makeList: [{
				z: "拔",
				b: "丿",
				zbPoss: [{
					start: 2,
					end: 5
				}, {
					start: 5,
					end: 5
				}]
			}, {
				z: "拔",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 5
				}, {
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "冼",
			name: "冼",
			py: "xiǎn",
			explain: "冼姓",
			biCount: 8
		}, {
			id: "洗",
			name: "洗",
			py: "xǐ ",
			explain: "洗澡、洗衣、干洗",
			biCount: 9,
			makeList: [{
				z: "冼",
				b: "丶",
				zbPoss: [{
					start: 4,
					end: 4
				}, {
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 4
				}, {
					start: 1,
					end: 5
				}]
			}, {
				z: "冼",
				b: "㇏",
				zbPoss: [{
					start: 4,
					end: 4
				}, {
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 4
				}, {
					start: 1,
					end: 5
				}]
			}, {
				z: "冼",
				b: "一",
				zbPoss: [{
					start: 4,
					end: 4
				}, {
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 4
				}, {
					start: 1,
					end: 5
				}]
			}]
		}, {
			id: "咋",
			name: "咋",
			py: "zǎ",
			explain: "咋了、咋舌、咋呼",
			biCount: 8
		}, {
			id: "昨",
			name: "昨",
			py: "zu\xf3",
			explain: "昨日、昨天、昨晚",
			biCount: 9,
			makeList: [{
				z: "咋",
				b: "一",
				zbPoss: [{
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 5
				}]
			}]
		}, {
			id: "侍",
			name: "侍",
			py: "sh\xec",
			explain: "侍卫、侍候、侍从",
			biCount: 8
		}, {
			id: "待",
			name: "待",
			py: "d\xe0i",
			explain: "等待、待人、对待",
			biCount: 9,
			makeList: [{
				z: "侍",
				b: "丿",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 2,
					end: 1
				}, {
					start: 2,
					end: 4
				}]
			}]
		}, {
			id: "沽",
			name: "沽",
			py: "gū",
			explain: "沽名、沽清、沽酒",
			biCount: 8
		}, {
			id: "活",
			name: "活",
			py: "hu\xf3",
			explain: "生活、活动、活口",
			biCount: 9,
			makeList: [{
				z: "沽",
				b: "丿",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 3,
					end: 2
				}]
			}]
		}, {
			id: "银",
			name: "银",
			py: "y\xedn",
			explain: "银子、金银、银钱",
			biCount: 11
		}, {
			id: "锒",
			name: "锒",
			py: "l\xe1ng",
			explain: "锒铛",
			biCount: 12,
			makeList: [{
				z: "银",
				b: "丶",
				zbPoss: [{
					start: 2,
					end: 2
				}]
			}, {
				z: "银",
				b: "㇏",
				zbPoss: [{
					start: 2,
					end: 2
				}]
			}, {
				z: "银",
				b: "一",
				zbPoss: [{
					start: 2,
					end: 2
				}]
			}]
		}, {
			id: "佯",
			name: "佯",
			py: "y\xe1ng",
			explain: "佯装、佯攻、佯言",
			biCount: 8
		}, {
			id: "徉",
			name: "徉",
			py: "y\xe1ng",
			explain: "徜徉",
			biCount: 9,
			makeList: [{
				z: "佯",
				b: "丿",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 2,
					end: 1
				}, {
					start: 2,
					end: 4
				}]
			}]
		}, {
			id: "坡",
			name: "坡",
			py: "pō",
			explain: "山坡、坡度、陡坡",
			biCount: 8
		}, {
			id: "玻",
			name: "玻",
			py: "bō",
			explain: "玻璃",
			biCount: 9,
			makeList: [{
				z: "坡",
				b: "一",
				zbPoss: [{
					start: 1,
					end: 2
				}]
			}]
		}, {
			id: "平",
			name: "平",
			py: "p\xedng",
			explain: "平地、平坦、平手",
			biCount: 5
		}, {
			id: "半",
			name: "半",
			py: "b\xe0n",
			explain: "半路、一半、半边",
			biCount: 5
		}, {
			id: "仕",
			name: "仕",
			py: "sh\xec",
			explain: "仕途、出仕、仕官",
			biCount: 5
		}, {
			id: "任",
			name: "任",
			py: "r\xe8n",
			explain: "任性、任何、任意",
			biCount: 6,
			makeList: [{
				z: "仕",
				b: "丿",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 3,
					end: 2
				}]
			}]
		}, {
			id: "耍",
			name: "耍",
			py: "shuǎ",
			explain: "玩耍、耍弄、杂耍",
			biCount: 9
		}, {
			id: "要",
			name: "要",
			py: "y\xe0o",
			explain: "要紧、主要、不要",
			biCount: 10,
			makeList: [{
				z: "耍",
				b: "一",
				zbPoss: [{
					start: 4,
					end: 5
				}, {
					start: 4,
					end: 6
				}, {
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 6
				}]
			}]
		}, {
			id: "准",
			name: "准",
			py: "zhǔn",
			explain: "瞄准、准备、标准",
			biCount: 10
		}, {
			id: "淮",
			name: "淮",
			py: "hu\xe1i",
			explain: "淮河、淮海、淮北",
			biCount: 11,
			makeList: [{
				z: "准",
				b: "丶",
				zbPoss: [{
					start: 4,
					end: 4
				}, {
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 4
				}, {
					start: 1,
					end: 5
				}]
			}, {
				z: "准",
				b: "㇏",
				zbPoss: [{
					start: 4,
					end: 4
				}, {
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 4
				}, {
					start: 1,
					end: 5
				}]
			}, {
				z: "准",
				b: "一",
				zbPoss: [{
					start: 4,
					end: 4
				}, {
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 2
				}, {
					start: 1,
					end: 4
				}, {
					start: 1,
					end: 5
				}]
			}]
		}, {
			id: "埋",
			name: "埋",
			py: "m\xe1i",
			explain: "填埋、掩埋、埋没",
			biCount: 10
		}, {
			id: "理",
			name: "理",
			py: "lǐ",
			explain: "理由、道理、天理",
			biCount: 11,
			makeList: [{
				z: "埋",
				b: "一",
				zbPoss: [{
					start: 1,
					end: 2
				}]
			}]
		}, {
			id: "侯",
			name: "侯",
			py: "h\xf3u",
			explain: "侯门、诸侯、王侯",
			biCount: 9
		}, {
			id: "候",
			name: "候",
			py: "h\xf2u",
			explain: "等候、时候、问候",
			biCount: 10,
			makeList: [{
				z: "侯",
				b: "丨",
				zbPoss: [{
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "苟",
			name: "苟",
			py: "gǒu",
			explain: "苟活、苟且、苟全",
			biCount: 8
		}, {
			id: "荀",
			name: "荀",
			py: "x\xfan",
			explain: "荀草、荀子、孟荀",
			biCount: 9,
			makeList: [{
				z: "苟",
				b: "一",
				zbPoss: [{
					start: 4,
					end: 5
				}, {
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "烂",
			name: "烂",
			py: "l\xe0n",
			explain: "破烂、灿烂、腐烂",
			biCount: 8
		}, {
			id: "烊",
			name: "烊",
			py: "y\xe0ng",
			explain: "打烊",
			biCount: 9,
			makeList: [{
				z: "烂",
				b: "丨",
				zbPoss: [{
					start: 5,
					end: 8
				}]
			}]
		}, {
			id: "沁",
			name: "沁",
			py: "q\xecn",
			explain: "欢沁、沁人心脾",
			biCount: 7
		}, {
			id: "泌",
			name: "泌",
			py: "m\xec",
			explain: "分泌、泌渗、幽泌",
			biCount: 8,
			makeList: [{
				z: "沁",
				b: "丿",
				zbPoss: [{
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 7
				}, {
					start: 5,
					end: 8
				}, {
					start: 6,
					end: 5
				}, {
					start: 6,
					end: 7
				}, {
					start: 6,
					end: 8
				}, {
					start: 3,
					end: 5
				}, {
					start: 3,
					end: 7
				}, {
					start: 3,
					end: 8
				}]
			}]
		}, {
			id: "吴",
			name: "吴",
			py: "w\xfa",
			explain: "东吴、吴国、吴语",
			biCount: 7
		}, {
			id: "昊",
			name: "昊",
			py: "h\xe0o",
			explain: "昊天、太昊",
			biCount: 8,
			makeList: [{
				z: "吴",
				b: "一",
				zbPoss: [{
					start: 2,
					end: 2
				}, {
					start: 2,
					end: 5
				}, {
					start: 5,
					end: 2
				}]
			}]
		}, {
			id: "棵",
			name: "棵",
			py: "kē",
			explain: "一棵树",
			biCount: 12
		}, {
			id: "稞",
			name: "稞",
			py: "kē",
			explain: "青稞、稞麦",
			biCount: 13,
			makeList: [{
				z: "棵",
				b: "丿",
				zbPoss: [{
					start: 2,
					end: 1
				}]
			}]
		}, {
			id: "洒",
			name: "洒",
			py: "sǎ",
			explain: "洒水、泼洒、洒脱",
			biCount: 9
		}, {
			id: "酒",
			name: "酒",
			py: "jiǔ",
			explain: "啤酒、酒精、白酒",
			biCount: 10,
			makeList: [{
				z: "洒",
				b: "一",
				zbPoss: [{
					start: 5,
					end: 5
				}, {
					start: 5,
					end: 6
				}]
			}]
		}, {
			id: "呜",
			name: "呜",
			py: "wū",
			explain: "呜呼",
			biCount: 7
		}, {
			id: "鸣",
			name: "鸣",
			py: "m\xedng",
			explain: "打鸣、鸣叫、轰鸣",
			biCount: 8,
			makeList: [{
				z: "呜",
				b: "丶",
				zbPoss: [{
					start: 5,
					end: 5
				}]
			}, {
				z: "呜",
				b: "㇏",
				zbPoss: [{
					start: 5,
					end: 5
				}]
			}, {
				z: "呜",
				b: "一",
				zbPoss: [{
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "动",
			name: "动",
			py: "d\xf2ng",
			explain: "运动、动力、活动",
			biCount: 6
		}, {
			id: "劫",
			name: "劫",
			py: "ji\xe9",
			explain: "洗劫、抢劫、劫持",
			biCount: 7,
			makeList: [{
				z: "动",
				b: "丨",
				zbPoss: [{
					start: 2,
					end: 4
				}, {
					start: 2,
					end: 5
				}]
			}]
		}, {
			id: "响",
			name: "响",
			py: "xiǎng",
			explain: "影响、响声、音响",
			biCount: 9
		}, {
			id: "晌",
			name: "晌",
			py: "shǎng",
			explain: "晌午、半晌",
			biCount: 10,
			makeList: [{
				z: "响",
				b: "一",
				zbPoss: [{
					start: 4,
					end: 4
				}, {
					start: 4,
					end: 5
				}]
			}]
		}, {
			id: "倘",
			name: "倘",
			py: "tǎng",
			explain: "倘若、倘使、倘如",
			biCount: 10
		}, {
			id: "徜",
			name: "徜",
			py: "ch\xe1ng",
			explain: "徜徉",
			biCount: 11,
			makeList: [{
				z: "倘",
				b: "丿",
				zbPoss: [{
					start: 1,
					end: 1
				}, {
					start: 1,
					end: 4
				}, {
					start: 2,
					end: 1
				}, {
					start: 2,
					end: 4
				}]
			}]
		}, {
			id: "坤",
			name: "坤",
			py: "kūn",
			explain: "乾坤、坤角、坤伶",
			biCount: 8
		}, {
			id: "珅",
			name: "珅",
			py: "shēn",
			explain: "和珅（人名）",
			biCount: 9,
			makeList: [{
				z: "坤",
				b: "一",
				zbPoss: [{
					start: 1,
					end: 2
				}]
			}]
		}, {
			id: "茶",
			name: "茶",
			py: "kūn",
			explain: "茶叶、红茶、茶壶",
			biCount: 9
		}, {
			id: "荼",
			name: "荼",
			py: "t\xfa",
			explain: "荼毒、荼炭",
			biCount: 10,
			makeList: [{
				z: "茶",
				b: "一",
				zbPoss: [{
					start: 5,
					end: 5
				}]
			}]
		}, {
			id: "千",
			name: "千",
			py: "qiān",
			explain: "千万、上千",
			biCount: 3
		}, {
			id: "住",
			name: "住",
			py: "zh\xf9",
			explain: "住宅、住房、居住",
			biCount: 7
		}, {
			id: "往",
			name: "往",
			py: "wǎng",
			explain: "往来、往返、向往",
			biCount: 7
		}, {
			id: "见",
			name: "见",
			py: "ji\xe0n",
			explain: "看见、见识、见面",
			biCount: 4
		}, {
			id: "贝",
			name: "贝",
			py: "b\xe8i",
			explain: "宝贝、贝壳、分贝",
			biCount: 4
		}, {
			id: "幸",
			name: "幸",
			py: "x\xecng",
			explain: "幸运、有幸、荣幸",
			biCount: 8
		}, {
			id: "辛",
			name: "辛",
			py: "xīn",
			explain: "辛苦、艰辛、辛劳",
			biCount: 7
		}, {
			id: "闺",
			name: "闺",
			py: "guī",
			explain: "闺蜜、闺房、闺女",
			biCount: 9
		}, {
			id: "闰",
			name: "闰",
			py: "r\xf9n",
			explain: "闰年、闰月",
			biCount: 7
		}, {
			id: "晴",
			name: "晴",
			py: "q\xedng",
			explain: "晴天、晴朗、放晴",
			biCount: 12
		}, {
			id: "睛",
			name: "睛",
			py: "jīng",
			explain: "眼睛、点睛、定睛",
			biCount: 13
		}, {
			id: "春",
			name: "春",
			py: "chūn",
			explain: "春天、春风、春季",
			biCount: 9
		}, {
			id: "舂",
			name: "舂",
			py: "chōng",
			explain: "舂杵、宿舂、舂击",
			biCount: 11
		}, {
			id: "驰",
			name: "驰",
			py: "ch\xed",
			explain: "奔驰、飞驰、驰骋",
			biCount: 6
		}, {
			id: "弛",
			name: "弛",
			py: "ch\xed",
			explain: "松弛、废弛、弛缓",
			biCount: 6
		}, {
			id: "戌",
			name: "戌",
			py: "xū",
			explain: "戊戌、戌时",
			biCount: 6
		}, {
			id: "戍",
			name: "戍",
			py: "sh\xf9",
			explain: "戍边、戍卫、戍守",
			biCount: 6
		}, {
			id: "菌",
			name: "菌",
			py: "jūn",
			explain: "细菌、杀菌、霉菌",
			biCount: 11
		}, {
			id: "茵",
			name: "茵",
			py: "yīn",
			explain: "绿茵、如茵",
			biCount: 9
		}, {
			id: "羸",
			name: "羸",
			py: "l\xe9i",
			explain: "羸弱、孤羸、羸色",
			biCount: 19
		}, {
			id: "嬴",
			name: "嬴",
			py: "y\xedng",
			explain: "嬴政（人名）",
			biCount: 16
		}, {
			id: "赢",
			name: "赢",
			py: "y\xedng",
			explain: "输赢、赢利、赢得",
			biCount: 17
		}, {
			id: "国",
			name: "国",
			py: "gu\xf3",
			explain: "中国、国家、国旗",
			biCount: 8
		}, {
			id: "圆",
			name: "圆",
			py: "yu\xe1n",
			explain: "圆形、圆润、圆环",
			biCount: 10
		}, {
			id: "彩",
			name: "彩",
			py: "cǎi",
			explain: "彩色、云彩、彩虹",
			biCount: 11
		}, {
			id: "烟",
			name: "烟",
			py: "yān",
			explain: "烟尘、烟灰、烟雾",
			biCount: 10
		}, {
			id: "帜",
			name: "帜",
			py: "zh\xec",
			explain: "旗帜、易帜",
			biCount: 8
		}, {
			id: "娟",
			name: "娟",
			py: "juān",
			explain: "娟秀、婵娟",
			biCount: 10
		}, {
			id: "芙",
			name: "芙",
			py: "f\xfa",
			explain: "芙蓉、芙蕖",
			biCount: 7
		}, {
			id: "委",
			name: "委",
			py: "wěi",
			explain: "委员、委托、委屈",
			biCount: 7
		}, {
			id: "着",
			name: "着",
			py: "zhe",
			explain: "看着、着急、沉着",
			biCount: 11
		}, {
			id: "歧",
			name: "歧",
			py: "q\xed",
			explain: "分歧、歧途、歧视",
			biCount: 8
		}, {
			id: "屡",
			name: "屡",
			py: "lǚ",
			explain: "屡屡、屡次",
			biCount: 12
		}, {
			id: "击",
			name: "击",
			py: "jī",
			explain: "攻击、击打、击败",
			biCount: 5
		}, {
			id: "存",
			name: "存",
			py: "c\xfan",
			explain: "保存、存储、生存",
			biCount: 6
		}, {
			id: "诠",
			name: "诠",
			py: "qu\xe1n",
			explain: "诠释、诠注、诠旨",
			biCount: 8
		}, {
			id: "禹",
			name: "禹",
			py: "yǔ",
			explain: "舜禹、禹鼎、大禹",
			biCount: 9
		}, {
			id: "韩",
			name: "韩",
			py: "h\xe1n",
			explain: "韩风、识韩、韩姓",
			biCount: 12
		}, {
			id: "姜",
			name: "姜",
			py: "jiāng",
			explain: "生姜、姜汤、姜黄",
			biCount: 9
		}, {
			id: "鼓",
			name: "鼓",
			py: "gǔ",
			explain: "鼓舞、鼓励、打鼓",
			biCount: 13
		}, {
			id: "姨",
			name: "姨",
			py: "y\xed",
			explain: "阿姨、姨妈、姨丈",
			biCount: 9
		}, {
			id: "明",
			name: "明",
			py: "m\xedng",
			explain: "明天、明亮、明白",
			biCount: 8
		}, {
			id: "强",
			name: "强",
			py: "qi\xe1ng",
			explain: "强大、强壮、坚强",
			biCount: 12
		}, {
			id: "欢",
			name: "欢",
			py: "huān",
			explain: "欢乐、欢迎、欢庆",
			biCount: 6
		}, {
			id: "花",
			name: "花",
			py: "huā",
			explain: "花草、花朵、花瓣",
			biCount: 7
		}, {
			id: "把",
			name: "把",
			py: "bǎ",
			explain: "扫把、握把、把手",
			biCount: 7
		}, {
			id: "楚",
			name: "楚",
			py: "chǔ",
			explain: "楚国、楚辞、苦楚",
			biCount: 13
		}, {
			id: "船",
			name: "船",
			py: "chu\xe1n",
			explain: "船舱、乘船、上船",
			biCount: 11
		}, {
			id: "给",
			name: "给",
			py: "gěi",
			explain: "送给、交给、分给",
			biCount: 9
		}, {
			id: "参",
			name: "参",
			py: "cān",
			explain: "参加、参与、参观",
			biCount: 8
		}, {
			id: "厚",
			name: "厚",
			py: "h\xf2u",
			explain: "丰厚、厚度、厚道",
			biCount: 8
		}, {
			id: "单",
			name: "单",
			py: "dān",
			explain: "落单、孤单、单独",
			biCount: 8
		}, {
			id: "垚",
			name: "垚",
			py: "y\xe1o",
			explain: "形容山高，多用于人名",
			biCount: 9
		}, {
			id: "壵",
			name: "壵",
			py: "zhu\xe0ng",
			explain: "「壮」的繁体字",
			biCount: 9
		}, {
			id: "姫",
			name: "姫",
			py: "zhěn",
			explain: "谨慎的意思，右边是「臣」字",
			biCount: 9
		}, {
			id: "姬",
			name: "姬",
			py: "jī",
			explain: "多用于姓氏",
			biCount: 10
		}, {
			id: "釆",
			name: "釆",
			py: "bi\xe0n",
			explain: "「辨」的古字",
			biCount: 7
		}, {
			id: "采",
			name: "采",
			py: "cǎi",
			explain: "摘取的意思",
			biCount: 8
		}, {
			id: "壶",
			name: "壶",
			py: "h\xfa",
			explain: "茶壶、酒壶",
			biCount: 10
		}, {
			id: "壸",
			name: "壸",
			py: "kǔn",
			explain: "指古代宫中的道路",
			biCount: 11
		}, {
			id: "入",
			name: "入",
			py: "r\xf9",
			explain: "进入、入门、量入为出",
			biCount: 2
		}, {
			id: "凉",
			name: "凉",
			py: "li\xe1ng",
			explain: "凉水、冰凉",
			biCount: 10
		}, {
			id: "谅",
			name: "谅",
			py: "li\xe0ng",
			explain: "谅解、原谅",
			biCount: 10
		}, {
			id: "士",
			name: "士",
			py: "sh\xec",
			explain: "士兵、壮士、身先士卒",
			biCount: 3
		}, {
			id: "孑",
			name: "孑",
			py: "ji\xe9",
			explain: "孑孓",
			biCount: 3
		}, {
			id: "孓",
			name: "孓",
			py: "ju\xe9",
			explain: "孑孓",
			biCount: 3
		}, {
			id: "币",
			name: "币",
			py: "b\xec",
			explain: "货币，币种",
			biCount: 4
		}, {
			id: "帀",
			name: "帀",
			py: "zā",
			explain: "同匝，指环绕一周",
			biCount: 4
		}, {
			id: "汆",
			name: "汆",
			py: "cuān",
			explain: "一种烹饪方法",
			biCount: 4
		}, {
			id: "氽",
			name: "氽",
			py: "tǔn",
			explain: "意思是漂浮",
			biCount: 4
		}, {
			id: "胄",
			name: "胄",
			py: "zh\xf2u",
			explain: "意思是后裔",
			biCount: 9
		}, {
			id: "冑",
			name: "冑",
			py: "zh\xf2u",
			explain: "意思是头盔.",
			biCount: 9
		}, {
			id: "妹",
			name: "妹",
			py: "m\xe8i",
			explain: "妹妹、表妹",
			biCount: 8
		}, {
			id: "妺",
			name: "妺",
			py: "m\xf2",
			explain: "用于人名。",
			biCount: 8
		}, {
			id: "你",
			name: "你",
			py: "nǐ",
			explain: "你好、迷你、你们",
			biCount: 7
		}, {
			id: "他",
			name: "他",
			py: "nǐ",
			explain: "其他、他乡、他人",
			biCount: 5
		}, {
			id: "林",
			name: "林",
			py: "l\xedn",
			explain: "林地、树林、丛林",
			biCount: 8
		}, {
			id: "证",
			name: "证",
			py: "zh\xe8ng",
			explain: "证据、证明、铁证",
			biCount: 7
		}, {
			id: "秋",
			name: "秋",
			py: "qiū",
			explain: "秋天、金秋、秋风",
			biCount: 9
		}, {
			id: "陈",
			name: "陈",
			py: "ch\xe9n",
			explain: "陈旧、陈年、陈列",
			biCount: 7
		}, {
			id: "晒",
			name: "晒",
			py: "sh\xe0i",
			explain: "晒干、晾晒、暴晒",
			biCount: 10
		}, {
			id: "摇",
			name: "摇",
			py: "y\xe1o",
			explain: "摇摆、飘摇、摇篮",
			biCount: 13
		}, {
			id: "遥",
			name: "遥",
			py: "y\xe1o",
			explain: "遥远、路遥、遥望",
			biCount: 13
		}, {
			id: "笛",
			name: "笛",
			py: "d\xed",
			explain: "汽笛、鸣笛、笛子",
			biCount: 11
		}, {
			id: "越",
			name: "越",
			py: "yu\xe8",
			explain: "越过、越野、跨越",
			biCount: 12
		}, {
			id: "秒",
			name: "秒",
			py: "miǎo",
			explain: "分秒、秒表、读秒",
			biCount: 9
		}, {
			id: "拉",
			name: "拉",
			py: "lā",
			explain: "拉扯、拉面、拖拉",
			biCount: 8
		}, {
			id: "琼",
			name: "琼",
			py: "qi\xf3ng",
			explain: "琼海、琼浆",
			biCount: 12
		}, {
			id: "语",
			name: "语",
			py: "yǔ",
			explain: "语言、语气、语文",
			biCount: 9
		}, {
			id: "奕",
			name: "奕",
			py: "y\xec",
			explain: "神采奕奕",
			biCount: 9
		}, {
			id: "刮",
			name: "刮",
			py: "guā",
			explain: "刮风、刮目、搜刮",
			biCount: 9
		}, {
			id: "悄",
			name: "悄",
			py: "qiāo",
			explain: "悄悄、悄声、悄然",
			biCount: 10
		}, {
			id: "样",
			name: "样",
			py: "y\xe0ng",
			explain: "样子、模样、照样",
			biCount: 10
		}, {
			id: "惜",
			name: "惜",
			py: "xī",
			explain: "可惜、珍惜、惜别",
			biCount: 11
		}, {
			id: "持",
			name: "持",
			py: "ch\xed",
			explain: "保持、维持、持有",
			biCount: 9
		}, {
			id: "鹅",
			name: "鹅",
			py: "\xe9",
			explain: "鹅毛、天鹅、企鹅",
			biCount: 12
		}, {
			id: "幕",
			name: "幕",
			py: "m\xf9",
			explain: "帷幕、幕布、幕后",
			biCount: 13
		}, {
			id: "投",
			name: "投",
			py: "t\xf3u",
			explain: "投掷、投降、投入",
			biCount: 7
		}, {
			id: "醉",
			name: "醉",
			py: "zu\xec",
			explain: "醉酒、喝醉、陶醉",
			biCount: 15
		}, {
			id: "论",
			name: "论",
			py: "l\xf9n",
			explain: "讨论、谈论、无论",
			biCount: 6
		}, {
			id: "谦",
			name: "谦",
			py: "qiān",
			explain: "谦虚、谦让、谦逊",
			biCount: 12
		}, {
			id: "破",
			name: "破",
			py: "p\xf2",
			explain: "打破、破烂、破坏",
			biCount: 10
		}, {
			id: "辩",
			name: "辩",
			py: "bi\xe0n",
			explain: "辩论、争辩、辩解",
			biCount: 16
		}, {
			id: "捡",
			name: "捡",
			py: "jiǎn",
			explain: "捡漏、捡起、捡货",
			biCount: 10
		}, {
			id: "卷",
			name: "卷",
			py: "juǎn",
			explain: "卷尺、席卷、卷烟",
			biCount: 8
		}, {
			id: "署",
			name: "署",
			py: "shǔ",
			explain: "部署、签署、署名",
			biCount: 13
		}, {
			id: "烧",
			name: "烧",
			py: "shāo",
			explain: "烧水、燃烧、烧毁",
			biCount: 10
		}, {
			id: "椅",
			name: "椅",
			py: "yǐ",
			explain: "桌椅、椅子、木椅",
			biCount: 12
		}, {
			id: "雾",
			name: "雾",
			py: "w\xf9",
			explain: "烟雾、雾气、雾霭",
			biCount: 13
		}, {
			id: "盲",
			name: "盲",
			py: "m\xe1ng",
			explain: "盲人、眼盲、脸盲",
			biCount: 8
		}];
		n.ziDi_json = function() {
			return o
		}, cc._RF.pop()
	}, {}]
}, {}, ["AccelerometerMgr", "ClickBase", "DragBase", "LevelBase", "PageBase", "ServicesBase", "SystemBase", "Const", "Enum", "GyroscopeMgr", "Interface", "MainRoot", "Follow", "LevelBtn", "Mass", "ModeBtn", "SkinBtn", "TweenAnim", "AddDestokPage", "InGamePage", "LevelMeun", "LevelPage", "LosePage", "ModeMenu", "ModeUnlockPage", "PausePage", "SkinPage", "SkinRewardPage", "WinPage", "ConfigService", "GameObjSystem", "InputSystem", "LevelSystem", "UISystem", "CellCtrl", "OperateCtrl", "CoutomObj", "CoutomPage", "Cloud", "ObjBase", "Flotage", "HallModeBtn", "PaintedDouble", "HintNode", "AgiSkeeter", "KunkunChicken", "Lotus", "Painted_1", "Plot", "Role", "Skeeter", "Stone", "Swan", "Tortoise", "Ipha_SimpleAni_icon", "RewardView", "addUserProp", "attention", "btButton", "coin", "gameSetting", "o1DrawBoard", "drawDetail", "drawRecord", "o1DrawInterface", "power", "recordVoiceChange", "shareVideoRank", "shareVideoItem", "logScreen", "versionNotice", "cellLayerMiniGameJump", "dialogMiniGameJump", "scrollMiniGameJump", "cellMiniGameJump", "BtnAddShort", "MoreBtn", "NativeIcon", "NativeAdView", "NativeSys", "PersonalInfo", "inteface", "WordConfig", "ChangeImgUtil", "addDestok", "comFirstPlayerProtect", "comSpSkeleton", "copy", "engineConfig", "gameConfig", "logConfig", "ziBi_json", "zi_json", "zi_jsonTwo", "gameEngine", "data_control", "node_component", "physics_tool", "gameMode_json", "gameManager", "soundManager", "superManager", "ziManager", "gameHttpModule", "messageConfig", "gameWebSocketModule", "gameHttpContent", "superModule", "uiModule", "o1DialogBox", "o1Loading", "o1MessageBox", "localStorageService", "logService", "dataField", "h5Api", "miniApp", "miniParam", "native", "miniGameService", "ossService", "superService", "userInterface", "userService", "superInterface", "Bezier", "infinitypower", "nineSpace", "shouShi_database", "skill_map_pos_json", "hall", "disFindItem", "disItem", "disPlayConfig", "disPlayItem", "disPlayLayer", "loading", "loadConfig_json", "start", "codeHead", "realNameATT", "filterWord", "umaConfig"]);