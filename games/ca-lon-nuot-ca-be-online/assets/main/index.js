window.__require = function e(t, i, n) {
	function o(a, c) {
		if (!i[a]) {
			if (!t[a]) {
				var r = a.split("/");
				if (r = r[r.length - 1], !t[r]) {
					var l = "function" == typeof __require && __require;
					if (!c && l) return l(r, !0);
					if (s) return s(r, !0);
					throw new Error("Cannot find module '" + a + "'")
				}
				a = r
			}
			var h = i[a] = {
				exports: {}
			};
			t[a][0].call(h.exports, function(e) {
				return o(t[a][1][e] || e)
			}, h, h.exports, e, t, i, n)
		}
		return i[a].exports
	}
	for (var s = "function" == typeof __require && __require, a = 0; a < n.length; a++) o(n[a]);
	return o
}({
	BaseFish: [function(e, t) {
		"use strict";
		cc._RF.push(t, "576f9EFIyZOnYRK9+W2QsHY", "BaseFish");
		var i = e("Game");
		cc.Class({
			extends: cc.Component,
			properties: {
				fishType: {
					get: function() {
						return this._fishType
					},
					set: function(e) {
						this._fishType = e, this._fishType > 11 && (this._fishType = 11), this.chagenDragon()
					}
				},
				dragonBones: dragonBones.ArmatureDisplay,
				atlasAsset: [dragonBones.DragonBonesAtlasAsset],
				bonesAsset: [dragonBones.DragonBonesAsset],
				typeLabl: cc.Label
			},
			onLoad: function() {
				this.isAttack = !1
			},
			chagenDragon: function() {
				if (this.atlasAsset.length > 0 && this.bonesAsset.length > 0) {
					var e = this.fishType - 1;
					this.dragonBones.dragonAtlasAsset = this.atlasAsset[e], this.dragonBones.dragonAsset = this.bonesAsset[e], this.dragonBones.armatureName = "Armature", this.node.width = i.instance.poolMng.fishInfo.nodeSzie[e].x, this.node.height = i.instance.poolMng.fishInfo.nodeSzie[e].y, this.node.getComponent(cc.BoxCollider).size = i.instance.poolMng.fishInfo.box[e], this.node.getComponent(cc.BoxCollider).offset = i.instance.poolMng.fishInfo.offSet[e], this.node.getChildByName("dbNode").getChildByName("db").position = i.instance.poolMng.fishInfo.dbPosition[e], this.node.getChildByName("Image_game_21").scale = i.instance.poolMng.fishInfo.laScale[e], this.node.getChildByName("Image_game_21").y = i.instance.poolMng.fishInfo.showLabePos[e].y, this.node.getChildByName("Image_game_21").x = i.instance.poolMng.fishInfo.showLabePos[e].x, this.node.getChildByName("effect2").getComponent(cc.Animation).play("effect2"), this.isAttack = !1, this.fishType >= 6 && this.changeCamera()
				}
			},
			playerAnimaction: function(e, t) {
				if (void 0 === t && (t = 1), !this.isAttack) switch (e) {
					case "attack":
						this.isAttack = !0, this.dragonBones.removeEventListener(dragonBones.EventObject.COMPLETE, this.attackCallBack, this), this.dragonBones.addEventListener(dragonBones.EventObject.COMPLETE, this.attackCallBack, this), this.dragonBones.playAnimation("gongji", t);
						break;
					case "move":
						this.dragonBones.playAnimation("yidong", t);
						break;
					case "stop":
						this.dragonBones.playAnimation("daiji", 0)
				}
			},
			attackCallBack: function() {
				this.isAttack = !1, this.playerAnimaction("stop", "0")
			},
			update: function(e) {
				Global.gameState != GAME_OVER && Global.gameState != GAME_PAUSE && this.updateGame(e)
			}
		}), cc._RF.pop()
	}, {
		Game: "Game"
	}],
	Box: [function(e, t) {
		"use strict";
		cc._RF.push(t, "51573FFs2VMuL8b968cyak8", "Box");
		var i = e("clientEvent");
		cc.Class({
			extends: cc.Component,
			properties: {
				minGold: 25,
				maxGold: 150,
				chestLayout: cc.Node,
				btnOpenNode: cc.Node
			},
			onLoad: function() {
				this.node.getChildByName("root").scale = 0, this.node.getChildByName("root").runAction(cc.sequence(cc.scaleTo(.8, 1, 1), cc.callFunc(function() {
					for (var e = 0; e < this.chestLayout.children.length; e++) this.chestLayout.children[e].getChildByName("spbox").getChildByName("Button_baoxiang_01").runAction(cc.repeatForever(cc.sequence(cc.rotateBy(.5, 10), cc.rotateBy(.5, -10))))
				}.bind(this)))), this.openBoxNum = _.random(1, 3)
			},
			setCallback: function(e) {
				this.callBackEnd = e
			},
			flushBox: function() {
				var e = !0;
				if (this.openBoxNum <= 0)
					for (var t = 0; t < this.chestLayout.children.length; t++) {
						var i = this.chestLayout.children[t].getChildByName("spbox");
						i.active ? (i.getChildByName("videoSP").active = !0, e = !1) : i.active, this.btnOpenNode.active = !0
					} else {
						for (var n = 0; n < this.chestLayout.children.length; n++) {
							var o = this.chestLayout.children[n].getChildByName("spbox");
							o.active ? (o.getChildByName("videoSP").active = !1, e = !1) : o.active
						}
						this.btnOpenNode.active = !1
					}
				e && this.btnClose()
			},
			getBox: function(e) {
				var t;
				e.getComponent(cc.Button).interactable = !1, e.active = !1;
				var n = e.parent;
				t = _.random(this.minGold, this.maxGold), n.getChildByName("jbBox").getChildByName("labPiece").getComponent(cc.Label).string = t, n.getChildByName("jbBox").active = !0, i.dispatchEvent("UpdateGold", t), this.openBoxNum--, this.openBoxNum = this.openBoxNum <= 0 ? 0 : this.openBoxNum, this.flushBox()
			},
			btnClick: function(e) {
				var t = e.target;
				t.getChildByName("videoSP").active ? SdkUtil.ShowVideo(function(e) {
					1 == e && this.getBox(t)
				}.bind(this)) : this.getBox(t)
			},
			btnClose: function() {
				this.node.destroy(), this.callBackEnd && this.callBackEnd()
			},
			btnOpenThree: function() {
				SdkUtil.ShowVideo(function(e) {
					1 == e && (this.openBoxNum += 3, this.flushBox())
				}.bind(this))
			}
		}), cc._RF.pop()
	}, {
		clientEvent: "clientEvent"
	}],
	Conents: [function(e, t) {
		"use strict";
		cc._RF.push(t, "3a66a964MtOFrmpjfvU0kVy", "Conents"), window.GAME_PAUSE = -1, window.GAME_OVER = 1, window.GAME_RUNING = 2, window.MAX_BLOOD = 3, window.ITERFACE_SACLE = .4, window.levelFish = {
			INITFISH: [1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8],
			TARGET: [5, 6, 0, 7, 8, 0, 9, 10, 0, 11, 11],
			EXP: [0, 5, 7, 9, 14, 24, 36, 56, 76, 98, 123, 156],
			TOTALEXP: [35, 54, 0, 83, 130, 0, 192, 266, 0, 353, 453]
		}, window.Global = {
			Tag: "game156801",
			currentLevel: 0,
			gameState: GAME_PAUSE,
			isCheckSign: !1,
			gold: 0,
			startFishBonus: 0,
			data: {
				skinIndex: 0,
				ownIndex: [0]
			},
			nextLevel: function() {
				Global.currentLevel++, Global.currentLevel > 10 && (Global.currentLevel = 0)
			},
			save: function() {
				Global.setInt(Global.Tag + "gameGodCount", Global.gold), Global.setInt(Global.Tag + "currentLevel", Global.currentLevel), Global.setObject(Global.Tag + "gameData", Global.data)
			},
			getData: function() {
				null != Global.getInt(Global.Tag + "gameGodCount") && "" != Global.getInt(Global.Tag + "gameGodCount") && (Global.gold = Global.getInt(Global.Tag + "gameGodCount")), null != Global.getInt(Global.Tag + "currentLevel") && "" != Global.getInt(Global.Tag + "currentLevel") && (Global.currentLevel = Global.getInt(Global.Tag + "currentLevel")), null != Global.getObject(Global.Tag + "gameData") && "" != Global.getObject(Global.Tag + "gameData") && (Global.data = Global.getObject(Global.Tag + "gameData"))
			},
			setBool: function(e, t) {
				cc.sys.localStorage.setItem(e, t.toString())
			},
			getBool: function(e) {
				return null != cc.sys.localStorage.getItem(e) && "false" != cc.sys.localStorage.getItem(e)
			},
			setInt: function(e, t) {
				cc.sys.localStorage.setItem(e, t.toString())
			},
			getInt: function(e) {
				return Number(cc.sys.localStorage.getItem(e))
			},
			setString: function(e, t) {
				cc.sys.localStorage.setItem(e, t)
			},
			getString: function(e) {
				return cc.sys.localStorage.getItem(e)
			},
			setObject: function(e, t) {
				cc.sys.localStorage.setItem(e, JSON.stringify(t))
			},
			getObject: function(e) {
				return null == cc.sys.localStorage.getItem(e) || null == cc.sys.localStorage.getItem(e) || "" == cc.sys.localStorage.getItem(e) ? null : JSON.parse(cc.sys.localStorage.getItem(e))
			}
		}, cc._RF.pop()
	}, {}],
	Fail: [function(e, t) {
		"use strict";
		cc._RF.push(t, "df966rVo/pKYqVJCW+QoD70", "Fail"), e("Game"), e("resourceUtil"), cc.Class({
			extends: cc.Component,
			properties: {
				ske: dragonBones.ArmatureDisplay
			},
			onLoad: function() {
				SdkUtil.LevelFail(Global.currentLevel), this.node.getChildByName("root").scale = 0, this.node.getChildByName("root").runAction(cc.scaleTo(ITERFACE_SACLE, 1, 1)), this.ske.removeEventListener(dragonBones.EventObject.COMPLETE, this.loseCallBack, this), this.ske.addEventListener(dragonBones.EventObject.COMPLETE, this.loseCallBack, this), this.ske.playAnimation("fail_01", 1), this.relabelReviveButton()
			},
			loseCallBack: function() {
				this.ske.removeEventListener(dragonBones.EventObject.COMPLETE, this.loseCallBack, this), this.ske.playAnimation("fail_02", 0)
			},
			start: function() {
				SMG.playEffect("lose")
			},
			relabelReviveButton: function() {
				var e = function(t) {
					if (!t) return;
					var i = t.getComponent(cc.Label);
					if (i && i.string) {
						var n = String(i.string);
						(n.indexOf("Bỏ qua") >= 0 || n.indexOf("Bo qua") >= 0 || n.indexOf("跳过") >= 0 || n.indexOf("Chơi tiếp") >= 0 || n.toLowerCase().indexOf("skip") >= 0) && (i.string = "Hồi sinh")
					}
					for (var o = 0; o < (t.children || []).length; o++) e(t.children[o])
				};
				e(this.node)
			},
			btnRestart: function() {
				SMG.playEffect("btnSound");
				try {
					if (window.ArcadeSave && typeof window.ArcadeSave.noteBestLevel === "function") {
						window.ArcadeSave.noteBestLevel();
					}
					if (window.ArcadeSave && typeof window.ArcadeSave.sendScore === "function") {
						window.ArcadeSave.sendScore();
					} else if (typeof GV !== "undefined") {
						var gvScore = Global && Global.currentLevel != null ? Global.currentLevel : 0;
						new GV().saveScore(gvScore);
					}
				} catch (gvErr) {}
				Global.currentLevel = 0;
				try {
					Global.save();
				} catch (saveErr) {}
				this.replaceScene()
			},
			btnJump: function() {
				SMG.playEffect("btnSound"), SdkUtil.ShowVideo(function(e) {
					1 == e && this.reviveAndContinue()
				}.bind(this))
			},
			reviveAndContinue: function() {
				var e = null;
				try {
					var t = cc.js.getClassByName("Game");
					e = t && t.instance ? t.instance : null
				} catch (n) {}
				if (!e) return this.replaceScene();
				var i = e.player || (e.playerNode && e.playerNode.getComponent("Player"));
				if (!i) return this.replaceScene();
				i.isAlive = !0, i.blood = typeof MAX_BLOOD !== "undefined" ? MAX_BLOOD : 3, i.Invincible = !0, i.node.opacity = 255, Global.gameState = GAME_RUNING;
				try {
					i.uiNode && i.uiNode.getChildByName("topProgress") && (i.uiNode.getChildByName("topProgress").active = !0), typeof i.playerAnimaction === "function" && i.playerAnimaction("stop", 0)
				} catch (o) {}
				cc.tween(i.node).to(.2, {
					opacity: 0
				}).to(.2, {
					opacity: 255
				}).to(.2, {
					opacity: 0
				}).to(.2, {
					opacity: 255
				}).to(.2, {
					opacity: 0
				}).to(.2, {
					opacity: 255
				}).call(function() {
					i.Invincible = !1
				}).start(), typeof e.startSpwan === "function" && e.startSpwan(), this.node.destroy()
			},
			replaceScene: function() {
				this.node.getChildByName("mask").active = !1, this.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(.5, 0, 0), cc.rotateTo(.5, 1080)), cc.callFunc(function() {
					Global.isCheckSign = !0, cc.director.loadScene("main")
				})))
			}
		}), cc._RF.pop()
	}, {
		Game: "Game",
		resourceUtil: "resourceUtil"
	}],
	First: [function(e, t) {
		"use strict";
		cc._RF.push(t, "bfcc5pPhLFNvLh8flw1bjhL", "First"), cc.Class({
			extends: cc.Component,
			properties: {
				progress: cc.ProgressBar
			},
			onLoad: function() {},
			onEnable: function() {
				SdkUtil.ShowGamePanel(this.node)
			},
			onDisable: function() {
				SdkUtil.CloseGamePanel(this.node.name)
			},
			start: function() {
				SdkUtil.ADInit(), SdkUtil.LoadSubpackage(function() {
					cc.director.loadScene("loading"), SdkUtil.ReportMonitor(0)
				}.bind(this))
			},
			update: function(e) {
				this.progress.progress += .5 * e, this.progress.progress > 1 && (this.progress.progress = 0)
			}
		}), cc._RF.pop()
	}, {}],
	Fish: [function(e, t) {
		"use strict";
		cc._RF.push(t, "5ab3b45Y55B2YaBGPf8leaN", "Fish");
		var i = e("Game"),
			n = e("clientEvent");
		cc.Class({
			extends: e("BaseFish"),
			properties: {},
			onLoad: function() {
				n.on("GameOver", this.gameHandle, this)
			},
			onDestroy: function() {
				n.off("GameOver", this.gameHandle, this)
			},
			init: function(e) {
				this.isAlive = !0, this.move = this.getComponent("Move"), this.fishType = e, this.typeLabl.string = this.fishType, this.playerAnimaction("move", 0), this.screenWidth = cc.view.getVisibleSize().width + this.node.width, this.playerNode = i.instance.playerNode, this.player = this.playerNode.getComponent("Player"), this.lastChange = null
			},
			dead: function() {
				0 != this.isAlive && (this.isAlive = !1, i.instance.poolMng.returnFoe(this.fishType, this.node))
			},
			changeColor: function(e) {
				this.lastChange !== e && (e ? (this.node.getChildByName("Image_game_21").color = new cc.Color(255, 0, 0), this.node.getChildByName("Image_game_21").getChildByName("labTyp").color = new cc.Color(255, 0, 0)) : (this.node.getChildByName("Image_game_21").color = new cc.Color(255, 255, 255), this.node.getChildByName("Image_game_21").getChildByName("labTyp").color = new cc.Color(255, 255, 255)), this.lastChange = e)
			},
			gameHandle: function() {
				this.dead()
			},
			updateGame: function() {
				this.isAlive && (Math.abs(this.playerNode.position.x - this.node.x) > this.screenWidth && this.dead(), this.fishType > this.player.fishType ? this.changeColor(!0) : this.changeColor(!1))
			}
		}), cc._RF.pop()
	}, {
		BaseFish: "BaseFish",
		Game: "Game",
		clientEvent: "clientEvent"
	}],
	Game: [function(e, t) {
		"use strict";
		cc._RF.push(t, "d03679FnOpOhpVBflx6Yefn", "Game"), e("resourceUtil");
		var i = e("PoolManager"),
			n = e("clientEvent"),
			o = cc.Class({
				extends: cc.Component,
				properties: {
					gameRun: cc.Node,
					playerNode: cc.Node,
					mapNode: cc.Node,
					clockNode: cc.Node,
					spwanInterva: 1,
					levelRewardTime: 15,
					labGold: cc.Label
				},
				statics: {
					instance: null
				},
				onEnable: function() {
					SdkUtil.ShowGamePanel(this.gameRun)
				},
				onDisable: function() {
					SdkUtil.CloseGamePanel(this.gameRun.name)
				},
				onLoad: function() {
					SdkUtil.ChangeGamePanel(this.gameRun.name), cc.director.getCollisionManager().enabled = !0, o.instance = this, this.fishInfo = {
						nodeSzie: [],
						box: [],
						offSet: [],
						dbPosition: [],
						showLabePos: [],
						laScale: []
					}, this.poolMng = i.instance, this.area = cc.v2(this.mapNode.width / 2, this.mapNode.height / 2 - 400), this.fishGruop = [], this.lastFishType = -1, this.isReward = !1, SMG.playGameMusic(0), Global.data.ownIndex.length < 6 ? UIManager.ShowUIPanel("Push") : this.inGame(), this.labGold.string = Global.gold
				},
				inGame: function() {
					0 == levelFish.TARGET[Global.currentLevel] && (this.isReward = !0, this.curRewardTime = this.levelRewardTime, this.ProgressUI = this.clockNode.getChildByName("ProgressBar").getComponent("ProgressUI"), this.clockNode.active = !0), this.playerNode.active = !0, this.player = this.playerNode.getComponent("Player"), this.player.init(), SdkUtil.LevelStart(Global.currentLevel)
				},
				fhsiTide: function() {
					this.schedule(function() {
						this.spwanFish()
					}, this.spwanInterva / 2, 20, 0)
				},
				stopAllSpwan: function() {
					this.unscheduleAllCallbacks()
				},
				startSpwan: function() {
					this.isReward ? this.schedule(this.spawnItem, .2) : this.schedule(this.spwanFish, this.spwanInterva)
				},
				spawnItem: function() {
					var e = null;
					if (e = _.gaiLv(90) ? this.poolMng.requestItem(_.random(1, 3)) : this.poolMng.requestItem(4)) {
						e.parent = this.mapNode;
						var t, i = 0;
						t = _.random(-this.area.y, this.area.y), _.gaiLv(50) ? (i = this.player.node.x + _.random(450, 900), e.getComponent("item").init(1)) : (i = this.player.node.x - _.random(450, 900), e.getComponent("item").init(-1)), e.position = cc.v2(i, t)
					}
				},
				spwanFish: function() {
					this.fishGruop.length > 0 && this.lastFishType == this.player.fishType ? this.swpanOneFish() : (this.lastFishType = this.player.fishType, this.fishRule(this.lastFishType), this.swpanOneFish())
				},
				fishRule: function(e) {
					switch (e) {
						case 1:
							this.fishGruop = [1, 1, 1, 1, 1, 1, _.random(2, 3), _.random(2, 3)];
							break;
						case 2:
						case 3:
						case 4:
						case 5:
						case 6:
							this.fishGruop = [e, e, _.random(e + 1, e + 2), _.random(e + 1, e + 2), _.random(1, e), _.random(1, e), _.random(1, e), _.random(1, e)];
							break;
						case 7:
						case 8:
						case 9:
						case 10:
							this.fishGruop = [e, e, e, _.random(e + 1, e + 2), _.random(e + 1, e + 2), _.random(1, e + 2), _.random(1, e + 2), _.random(1, e + 2)];
							break;
						case 11:
							this.fishGruop = [e, e, e, 12, 12, _.random(1, 12), _.random(1, 12), _.random(1, 12)];
						case 12:
							this.fishGruop = [e, e, e, e, e, e, e, e]
					}
					this.fishGruop.sort(function() {
						return .5 - Math.random()
					})
				},
				swpanOneFish: function() {
					var e = this.fishGruop.pop();
					e > 11 && (e = 11);
					var t = this.poolMng.requestFoe(e);
					if (t) {
						t.getComponent("Fish").init(e), t.parent = this.mapNode;
						var i, n = 0;
						i = _.random(-this.area.y, this.area.y), _.gaiLv(50) ? (n = this.player.node.x + 600, t.emit("update-dir", {
							dir: cc.v2(-1, 0)
						})) : (n = this.player.node.x - 600, t.emit("update-dir", {
							dir: cc.v2(1, 0)
						})), t.position = cc.v2(n, i)
					}
				},
				update: function(e) {
					Global.gameState != GAME_OVER && Global.gameState != GAME_PAUSE && this.isReward && (this.curRewardTime -= e, this.curRewardTime <= 0 && (Global.gameState = GAME_OVER, this.stopAllSpwan(), n.dispatchEvent("GameOver"), UIManager.ShowUIPanel("Win")), this.ProgressUI.flushProgress(this.curRewardTime, this.levelRewardTime))
				}
			});
		cc._RF.pop()
	}, {
		PoolManager: "PoolManager",
		clientEvent: "clientEvent",
		resourceUtil: "resourceUtil"
	}],
	JoystickEnum: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "e609echZgRM+Ixnrfu0VFz7", "JoystickEnum"), i.__esModule = !0, i.default = void 0;
		var n = {
			JoystickType: cc.Enum({
				FIXED: 0,
				FOLLOW: 1
			}),
			DirectionType: cc.Enum({
				FOUR: 4,
				EIGHT: 8,
				ALL: 0
			}),
			SpeedType: cc.Enum({
				STOP: 0,
				NORMAL: 1,
				FAST: 2
			}),
			JoystickEventType: cc.Enum({
				TOUCH_START: "touchStart",
				TOUCH_MOVE: "touchMove",
				TOUCH_END: "touchEnd",
				CHANGE_JOYSTICK_TYPE: "changeJoystickType"
			})
		};
		i.default = n, t.exports = i.default, cc._RF.pop()
	}, {}],
	JoystickEvent: [function(e, t, i) {
		"use strict";
		cc._RF.push(t, "5ac93tnpItCw7q3geQAtU9n", "JoystickEvent"), i.__esModule = !0, i.default = void 0;
		var n = cc.Class({
				properties: {
					_event: null
				},
				ctor: function() {
					this._event = new cc.EventTarget
				},
				on: function(e, t, i) {
					this._event.on(e, t, i)
				},
				off: function(e, t, i) {
					this._event.off(e, t, i)
				},
				emit: function(e) {
					for (var t, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
					(t = this._event).emit.apply(t, [e].concat(n))
				}
			}),
			o = null;
		n.getInstance = function() {
			return !o && (o = new n), o
		};
		var s = n;
		i.default = s, t.exports = i.default, cc._RF.pop()
	}, {}],
	Joystick: [function(e, t) {
		"use strict";
		cc._RF.push(t, "c20540FupBMD79lofYDmIMM", "Joystick");
		var i = o(e("JoystickEnum")),
			n = o(e("JoystickEvent"));

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		cc.Class({
			extends: cc.Component,
			properties: {
				dot: {
					default: null,
					type: cc.Node,
					displayName: "Dot",
					tooltip: "\u6447\u6746\u64cd\u7eb5\u70b9"
				},
				ring: {
					default: null,
					type: cc.Node,
					displayName: "Ring",
					tooltip: "\u6447\u6746\u80cc\u666f\u8282\u70b9"
				},
				joystickType: {
					default: i.default.JoystickType.FIXED,
					type: i.default.JoystickType,
					displayName: "Touch Type",
					tooltip: "\u89e6\u6478\u7c7b\u578b"
				},
				directionType: {
					default: i.default.DirectionType.EIGHT,
					type: i.default.DirectionType,
					displayName: "Direction Type",
					tooltip: "\u65b9\u5411\u7c7b\u578b"
				},
				_stickPos: {
					default: null,
					type: cc.Node,
					tooltip: "\u6447\u6746\u6240\u5728\u4f4d\u7f6e"
				},
				_touchLocation: {
					default: null,
					type: cc.Node,
					tooltip: "\u89e6\u6478\u4f4d\u7f6e"
				}
			},
			onLoad: function() {
				this._radius = this.ring.width / 2, this._initTouchEvent(), this.joystickType === i.default.JoystickType.FOLLOW && (this.node.opacity = 0)
			},
			onEnable: function() {
				n.default.getInstance().on(i.default.JoystickEventType.CHANGE_JOYSTICK_TYPE, this._onChangeJoystickType, this)
			},
			onDisable: function() {
				n.default.getInstance().off(i.default.JoystickEventType.CHANGE_JOYSTICK_TYPE, this._onChangeJoystickType, this)
			},
			_onChangeJoystickType: function(e) {
				this.joystickType = e, this.node.opacity = e === i.default.JoystickType.FIXED ? 255 : 0
			},
			_initTouchEvent: function() {
				this.node.on(cc.Node.EventType.TOUCH_START, this._touchStartEvent, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this._touchMoveEvent, this), this.node.on(cc.Node.EventType.TOUCH_END, this._touchEndEvent, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touchEndEvent, this)
			},
			_touchStartEvent: function(e) {
				n.default.getInstance().emit(i.default.JoystickEventType.TOUCH_START, "joystick touch start", 10);
				var t = this.node.convertToNodeSpaceAR(e.getLocation());
				if (this.joystickType === i.default.JoystickType.FIXED) {
					this._stickPos = this.ring.getPosition();
					var o = t.sub(this.ring.getPosition()).mag();
					this._radius > o && this.dot.setPosition(t)
				} else this.joystickType === i.default.JoystickType.FOLLOW && (this._stickPos = t, this.node.opacity = 255, this._touchLocation = e.getLocation(), this.ring.setPosition(t), this.dot.setPosition(t))
			},
			_touchMoveEvent: function(e) {
				if (this.joystickType === i.default.JoystickType.FOLLOW && this._touchLocation === e.getLocation()) return !1;
				var t, o = this.ring.convertToNodeSpaceAR(e.getLocation()),
					s = o.mag(),
					a = this._stickPos.x + o.x,
					c = this._stickPos.y + o.y,
					r = cc.v2(a, c).sub(this.ring.getPosition()).normalize();
				if (this._radius > s) this.dot.setPosition(cc.v2(a, c)), t = i.default.SpeedType.NORMAL;
				else {
					var l = this._stickPos.x + r.x * this._radius,
						h = this._stickPos.y + r.y * this._radius;
					this.dot.setPosition(cc.v2(l, h)), t = i.default.SpeedType.FAST
				}
				n.default.getInstance().emit(i.default.JoystickEventType.TOUCH_MOVE, e, {
					speedType: t,
					moveDistance: r
				})
			},
			_touchEndEvent: function(e) {
				this.dot.setPosition(this.ring.getPosition()), this.joystickType === i.default.JoystickType.FOLLOW && (this.node.opacity = 0), n.default.getInstance().emit(i.default.JoystickEventType.TOUCH_END, e, {
					speedType: i.default.SpeedType.STOP
				})
			}
		}), cc._RF.pop()
	}, {
		JoystickEnum: "JoystickEnum",
		JoystickEvent: "JoystickEvent"
	}],
	Loading: [function(e, t) {
		"use strict";
		cc._RF.push(t, "d961dZwaiFCIbCNX+aJ0HGM", "Loading");
		var i = e("PoolManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				progress: cc.ProgressBar
			},
			onLoad: function() {
				Global.getData()
			},
			start: function() {
				this.poolManager = i.instance, this.poolManager.init(), cc.director.preloadScene("scene/main", this.onProgress.bind(this), function() {
					cc.director.preloadScene("scene/game", this.onProgress.bind(this), function() {
						cc.director.loadScene("scene/main")
					})
				}.bind(this))
			},
			onProgress: function(e, t) {
				this.progress.progress = e / t
			},
			update: function() {}
		}), cc._RF.pop()
	}, {
		PoolManager: "PoolManager"
	}],
	Main: [function(e, t) {
		"use strict";
		cc._RF.push(t, "0e06eK1l49FEoi5jHmfH3a1", "Main");
		var i = e("clientEvent");
		e("resourceUtil"), cc.Class({
			extends: cc.Component,
			properties: {
				fishMove: cc.Node,
				bingNode: cc.Node,
				gameMain: cc.Node
			},
			onLoad: function() {
				SdkUtil.ChangeGamePanel(this.gameMain.name), this.bingNode.on(cc.Node.EventType.TOUCH_START, function() {
					cc.director.loadScene("game")
				}, this)
			},
			start: function() {
				this.fishMove.runAction(cc.moveBy(30, cc.v2(6155, 0))), i.dispatchEvent("UpdateGold")
			},
			onEnable: function() {
				SdkUtil.ShowGamePanel(this.gameMain)
			},
			onDisable: function() {
				SdkUtil.CloseGamePanel(this.gameMain.name)
			},
			btnShop: function() {
				UIManager.ShowUIPanel("Shop")
			},
			btnGold: function() {
				SdkUtil.ShowVideo(function(e) {
					1 == e && i.dispatchEvent("UpdateGold", 2e3)
				}.bind(this))
			}
		}), cc._RF.pop()
	}, {
		clientEvent: "clientEvent",
		resourceUtil: "resourceUtil"
	}],
	Move: [function(e, t) {
		"use strict";
		cc._RF.push(t, "228e6irQhxIR6ubXVku3BuE", "Move");
		var i = cc.Enum({
			None: -1,
			Stand: -1,
			Up: -1,
			Right: -1,
			Down: -1,
			Left: -1
		});
		cc.Class({
			extends: cc.Component,
			properties: {
				moveSpeed: 0,
				anim: {
					default: null,
					type: cc.Animation
				}
			},
			statics: {
				MoveState: i
			},
			onLoad: function() {
				this.moveState = i.Stand, this.node.on("stand", this.stand, this), this.node.on("freeze", this.stop, this), this.node.on("update-dir", this.updateDir, this), this.validWidth = (this.node.parent.width - this.node.width) / 2, this.validHeight = (this.node.parent.height - this.node.height) / 2
			},
			stand: function() {
				this.moveState !== i.Stand && (this.moveState = i.Stand)
			},
			stop: function() {
				this.moveState = i.None, this.moveDir = null
			},
			moveUp: function() {
				this.moveState !== i.Up && (this.moveState = i.Up)
			},
			moveDown: function() {
				this.moveState !== i.Down && (this.moveState = i.Down)
			},
			moveRight: function() {
				this.moveState !== i.Right && (this.node.getChildByName("db") && (this.node.getChildByName("db").scaleX = 1), this.moveState = i.Right)
			},
			moveLeft: function() {
				this.moveState !== i.Left && (this.node.getChildByName("db") && (this.node.getChildByName("db").scaleX = -1), this.moveState = i.Left)
			},
			updateDir: function(e) {
				this.moveDir = e.dir
			},
			setMoveSpeed: function(e) {
				this.moveSpeed += e
			},
			update: function(e) {
				if (Global.gameState != GAME_OVER && Global.gameState != GAME_PAUSE && (!this.node.getComponent("Fish") || 0 != this.node.getComponent("Fish").isAlive))
					if (this.moveDir) {
						this.node.x += this.moveSpeed * this.moveDir.x * e, this.node.y += this.moveSpeed * this.moveDir.y * e;
						var t = cc.misc.radiansToDegrees(Math.atan2(this.moveDir.y, this.moveDir.x));
						t >= 45 && t < 135 ? this.moveUp() : t >= 135 || t < -135 ? this.moveLeft() : t >= -45 && t < 45 ? this.moveRight() : this.moveDown()
					} else this.moveState !== i.None && this.stand()
			}
		}), cc._RF.pop()
	}, {}],
	NodePool: [function(e, t) {
		"use strict";
		cc._RF.push(t, "3c52b4r5KFITr0YklW1HfHy", "NodePool");
		var i = cc.Class({
			name: "NodePool",
			properties: {
				prefab: cc.Prefab,
				size: 0
			},
			ctor: function() {
				this.idx = 0, this.initList = [], this.list = []
			},
			init: function() {
				for (var e = 0; e < this.size; ++e) {
					var t = cc.instantiate(this.prefab);
					this.initList[e] = t, this.list[e] = t
				}
				this.idx = this.size - 1
			},
			initFish: function() {
				for (var e = null, t = 0; t < this.size; ++t) e = cc.instantiate(this.prefab), this.initList[t] = e, this.list[t] = e;
				return this.idx = this.size - 1, e
			},
			reSet: function() {
				for (var e = 0; e < this.size; ++e) {
					var t = this.initList[e];
					this.list[e] = t, t.active && (t.active = !1), t.parent && t.removeFromParent()
				}
				this.idx = this.size - 1
			},
			request: function() {
				if (this.idx < 0) return cc.log("Error: the pool do not have enough free item."), null;
				var e = this.list[this.idx];
				return e && (e.active = !0), --this.idx, e
			},
			return: function(e) {
				++this.idx, e.active = !1, e.parent && e.removeFromParent(), this.list[this.idx] = e
			}
		});
		t.exports = i, cc._RF.pop()
	}, {}],
	Player: [function(e, t) {
		"use strict";
		cc._RF.push(t, "ef7caVAN+pNspt7+CFgaiPV", "Player");
		var i = o(e("../joystick/JoystickEnum")),
			n = o(e("../joystick/JoystickEvent"));

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var s = e("clientEvent"),
			a = e("resourceUtil"),
			c = e("Game");
		cc.Class({
			extends: e("BaseFish"),
			properties: {
				camera: cc.Camera,
				joystickNode: cc.Node,
				mapNode: cc.Node,
				pb: cc.ProgressBar,
				uiNode: cc.Node,
				comboNode: cc.Node,
				goldNode: cc.Node,
				flyGold: cc.Prefab,
				goldNum: cc.Prefab,
				tailmotion: cc.MotionStreak,
				tailTexture: [cc.Texture2D],
				blood: {
					get: function() {
						return this._blood
					},
					set: function(e) {
						this._blood = e, this._blood < 0 ? this._blood = 0 : this._blood > MAX_BLOOD && (this._blood = MAX_BLOOD), this.pb.progress = this._blood / MAX_BLOOD
					}
				},
				moveDir: {
					default: cc.v2(0, 1),
					displayName: "Move Dir",
					tooltip: "\u79fb\u52a8\u65b9\u5411"
				},
				_speedType: {
					default: i.default.SpeedType.STOP,
					displayName: "Speed Type",
					type: i.default.SpeedType,
					tooltip: "\u901f\u5ea6\u7ea7\u522b"
				},
				_moveSpeed: {
					default: 0,
					displayName: "Move Speed",
					tooltip: "\u79fb\u52a8\u901f\u5ea6"
				},
				stopSpeed: {
					default: 0,
					type: cc.Integer,
					tooltip: "\u505c\u6b62\u65f6\u901f\u5ea6"
				},
				normalSpeed: {
					default: 200,
					type: cc.Integer,
					tooltip: "\u6b63\u5e38\u901f\u5ea6"
				},
				fastSpeed: {
					default: 200,
					type: cc.Integer,
					tooltip: "\u6700\u5feb\u901f\u5ea6"
				}
			},
			btnTestShengji: function() {
				this.fishType++
			},
			init: function() {
				this.camera.zoomRatio = 1, this.tileMap = this.mapNode, this.validWidth = (this.tileMap.width - this.node.width) / 2, this.validHeight = (this.tileMap.height - this.node.height) / 2, n.default.getInstance().on(i.default.JoystickEventType.TOUCH_START, this.onTouchStart, this), n.default.getInstance().on(i.default.JoystickEventType.TOUCH_MOVE, this.onTouchMove, this), n.default.getInstance().on(i.default.JoystickEventType.TOUCH_END, this.onTouchEnd, this);
				var e = this.camera.node.parent.convertToNodeSpaceAR(this.tileMap.convertToWorldSpaceAR(cc.v2(-this.tileMap.width / 2, -this.tileMap.height / 2))),
					t = this.camera.node.parent.convertToNodeSpaceAR(this.tileMap.convertToWorldSpaceAR(cc.v2(this.tileMap.width / 2, this.tileMap.height / 2))),
					o = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2);
				this.cameraRangeBox = cc.rect(e.x + o.x, e.y + o.y, t.x - o.x, t.y - o.y), this.combo = this.comboNode.getComponent("combo"), this.isCameraInMap = !0, s.on("ExpAddEvent", this.expAddEvent, this), this.reSet(), this.tailmotion.texture = this.tailTexture[Global.data.skinIndex]
			},
			onDestroy: function() {
				s.off("ExpAddEvent", this.expAddEvent, this)
			},
			reSet: function() {
				this.lastRotation = 0, this.isAlive = !0, this.Invincible = !1;
				var e = levelFish.INITFISH[Global.currentLevel] || 1,
					t = Global.startFishBonus || 0;
				this.fishType = Math.min(11, e + t), Global.startFishBonus = 0, this.targetExp = 0, this.totalExp = 0, this.blood = 3, this.comboTimes = 0, this.typeLabl.string = this.fishType, this.doubleTimes = 1, this.fishTide = 0, c.instance.isReward ? this.uiNode.active = !1 : (this.uiNode.active = !0, this.flushTopProgress(), this.flushTopTarget()), a.createUI("game/tip", function(e, t) {
					t.getComponent("tip").init(levelFish.TARGET[Global.currentLevel], function() {
						Global.gameState = GAME_RUNING, c.instance.startSpwan()
					})
				}, cc.find("Canvas")), this.playerAnimaction("stop")
			},
			expAddEvent: function(e) {
				this.doubleTimes = e
			},
			_updateCameraPosition: function() {
				var e = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
				e = this.camera.node.parent.convertToNodeSpaceAR(e), this.isCameraInMap && (e.x < this.cameraRangeBox.x ? e.x = this.cameraRangeBox.x : e.x > this.cameraRangeBox.width && (e.x = this.cameraRangeBox.width), e.y < this.cameraRangeBox.y ? e.y = this.cameraRangeBox.y : e.y > this.cameraRangeBox.height && (e.y = this.cameraRangeBox.height)), this.camera.node.position = e
			},
			onTouchStart: function() {},
			onTouchMove: function(e, t) {
				this._speedType = t.speedType, this.moveDir = t.moveDistance, this.playerAnimaction("move")
			},
			onTouchEnd: function(e, t) {
				this._speedType = t.speedType, this.playerAnimaction("stop", 0)
			},
			getCalculaAngle: function(e) {
				var t = 90 * e.x + 90,
					i = 90 * e.y + 90;
				if (i < 90) {
					if (t < 90) return 270 + i;
					if (t > 90) return 90 - i + 180
				}
				return t
			},
			move: function(e) {
				var t = this._moveSpeed;
				this.node.x += t * this.moveDir.x * e, this.node.y += t * this.moveDir.y * e;
				var i = Math.atan2(this.moveDir.y, this.moveDir.x),
					n = cc.misc.radiansToDegrees(i),
					o = -n;
				this.node.getChildByName("dbNode").scaleY = n >= 120 || n < -120 ? -1 : 1, this.node.getChildByName("dbNode").angle = .95 * -o, this._updateCameraPosition()
			},
			onCollisionEnter: function(e) {
				if (Global.gameState != GAME_OVER && Global.gameState != GAME_PAUSE)
					if ("foe" == e.node.group) {
						var t = e.node.getComponent("Fish");
						t.fishType <= this.fishType ? (this.eatFish(t), this.playerAnimaction("attack")) : this.Invincible || (SMG.playEffect("hurt"), this.subBlood(t.fishType - this.fishType), e.node.getComponent("Fish").playerAnimaction("attack"))
					} else if ("item" == e.node.group) {
					var i = e.node.getComponent("item").rewardGold;
					SMG.playEffect("eatGold"), e.node.getComponent("item").disappear();
					var n = cc.instantiate(this.flyGold),
						o = this.goldNode.getChildByName("labGold").getPosition();
					n.parent = this.goldNode;
					var c = this.mapNode.convertToWorldSpaceAR(e.node.getPosition()),
						r = this.goldNode.convertToNodeSpaceAR(c).sub(this.camera.node.position);
					n.position = r, n.runAction(cc.sequence(cc.moveTo(.5, o), cc.callFunc(function() {
						s.dispatchEvent("UpdateGold", i), n.destroy()
					})));
					var l = cc.instantiate(this.goldNum);
					l.getComponent(cc.Label).string = "+" + i, l.parent = this.goldNode, l.position = r, l.runAction(cc.sequence(cc.moveBy(.5, cc.v2(0, 150)), cc.callFunc(function() {
						l.destroy()
					})))
				} else "drop" == e.node.group && ("drop1" == e.node._name ? (this.blood++, this.node.getChildByName("effect5").getComponent(cc.Animation).play("effect5"), e.node.destroy()) : "drop2" == e.node._name ? (1 != this.doubleTimes ? s.dispatchEvent("AddExpTime") : a.createUI("game/expAdd", null, cc.find("Canvas")), e.node.destroy()) : "drop3" == e.node._name && this.subBlood(1))
			},
			onCollisionExit: function() {},
			returnAllFish: function() {
				c.instance.stopAllSpwan(), s.dispatchEvent("GameOver"), this.uiNode.getChildByName("topProgress").active = !1
			},
			gameWin: function() {
				this.uiNode.getChildByName("done_ske").active = !0;
				var e = this.uiNode.getChildByName("done_ske").getComponent(dragonBones.ArmatureDisplay);
				e.playAnimation("done", 1), e.addEventListener(dragonBones.EventObject.COMPLETE, function() {
					e.playAnimation("done2", 0)
				}, this), setTimeout(function() {
					UIManager.ShowUIPanel("Box").getComponent("Box").setCallback(function() {
						UIManager.ShowUIPanel("Win")
					})
				}, 2e3)
			},
			fishChange: function() {
				SMG.playEffect("shengji"), this.fishTide++, 2 == this.fishTide && (SMG.playEffect("fishTide"), c.instance.fhsiTide(), a.createUI("game/tip", function(e, t) {
					t.getComponent("tip").init(1e3)
				}, cc.find("Canvas"))), this.targetExp = 0, this.typeLabl.string = this.fishType, this.fishType >= levelFish.TARGET[Global.currentLevel] && (Global.gameState = GAME_OVER, this.returnAllFish(), this.gameWin())
			},
			eatFish: function(e) {
				var t = e.node.getPosition();
				if (e.dead(), this.targetExp += e.fishType * this.doubleTimes, this.totalExp += e.fishType * this.doubleTimes, this.comboTimes++, this.targetExp >= levelFish.EXP[this.fishType] && (this.fishType++, this.fishChange()), SMG.playEffect("eatFish"), a.createUI("effect/effect1", function(e, i) {
						i.setPosition(t)
					}, this.mapNode), this.flushTopTarget(), this.flushTopProgress(), this.combo.playCombo(this.comboTimes), _.gaiLv(10)) {
					var i = "game/drop/drop" + _.random(1, 3);
					a.createUI(i, function(e, i) {
						i.setPosition(t)
					}, this.mapNode)
				}
			},
			flushTopProgress: function() {
				var e = cc.find("topProgress/Image_game_1/sp", this.uiNode).getComponent(cc.Sprite),
					t = cc.find("topProgress/Image_game_2/sp", this.uiNode).getComponent(cc.Sprite),
					i = cc.find("topProgress/Image_game_1/labStr", this.uiNode).getComponent(cc.Label),
					n = cc.find("topProgress/Image_game_2/labStr", this.uiNode).getComponent(cc.Label),
					o = cc.find("topProgress/pb", this.uiNode).getComponent(cc.ProgressBar);
				a.setSpriteFrame("game/fishType/" + this.fishType, e);
				var s = this.fishType + 1 > 11 ? 11 : this.fishType + 1;
				a.setSpriteFrame("game/fishType/" + s, t), i.string = this.fishType, n.string = this.fishType + 1, o.progress = this.targetExp / levelFish.EXP[this.fishType]
			},
			flushTopTarget: function() {
				var e = cc.find("topTarget/Image_game_18/labStr", this.uiNode).getComponent(cc.Label),
					t = cc.find("topTarget/Image_game_18/labProgress", this.uiNode).getComponent(cc.Label),
					i = cc.find("topTarget/Image_game_18/spdi", this.uiNode).getComponent(cc.Sprite),
					n = cc.find("topTarget/Image_game_18/sp", this.uiNode).getComponent(cc.Sprite);
				a.setSpriteFrame("game/targetDi/" + levelFish.TARGET[Global.currentLevel], i), a.setSpriteFrame("game/target/" + levelFish.TARGET[Global.currentLevel], n), e.string = levelFish.TARGET[Global.currentLevel], n.fillStart = this.totalExp / levelFish.TOTALEXP[Global.currentLevel], t.string = Math.floor(100 * n.fillStart) + "%"
			},
			subBlood: function(e) {
				var t = this;
				this.blood -= e, this.blood <= 0 ? (this.isAlive = !1, Global.gameState = GAME_OVER, this.returnAllFish(), UIManager.ShowUIPanel("Fail")) : (this.Invincible = !0, cc.tween(this.node).to(.25, {
					opacity: 0
				}).to(.25, {
					opacity: 255
				}).to(.25, {
					opacity: 0
				}).to(.25, {
					opacity: 255
				}).to(.25, {
					opacity: 0
				}).to(.25, {
					opacity: 255
				}).to(.25, {
					opacity: 0
				}).to(.25, {
					opacity: 255
				}).call(function() {
					t.Invincible = !1, t.node.getComponent(cc.BoxCollider).enabled = !1, t.scheduleOnce(function() {
						this.node.getComponent(cc.BoxCollider).enabled = !0
					}, .05)
				}).start())
			},
			updateGame: function(e) {
				if (!1 !== this.isAlive) {
					switch (this.node.x >= this.validWidth ? this.node.x = this.validWidth : this.node.x <= -this.validWidth && (this.node.x = -this.validWidth), this.node.y >= this.validHeight - 150 ? this.node.y = this.validHeight - 150 : this.node.y <= -this.validHeight && (this.node.y = -this.validHeight), this._speedType) {
						case i.default.SpeedType.STOP:
							this._moveSpeed = this.stopSpeed;
							break;
						case i.default.SpeedType.NORMAL:
							this._moveSpeed = this.normalSpeed;
							break;
						case i.default.SpeedType.FAST:
							this._moveSpeed = this.fastSpeed
					}
					this.move(e)
				}
			},
			changeCamera: function() {
				this.camera.zoomRatio = .7;
				var e = this.camera.node.parent.convertToNodeSpaceAR(this.tileMap.convertToWorldSpaceAR(cc.v2(-this.tileMap.width / 2, -this.tileMap.height / 2))),
					t = this.camera.node.parent.convertToNodeSpaceAR(this.tileMap.convertToWorldSpaceAR(cc.v2(this.tileMap.width / 2, this.tileMap.height / 2))),
					i = cc.winSize.width / 2 * .45 + cc.winSize.width / 2,
					n = cc.winSize.height / 2 * .45 + cc.winSize.height / 2,
					o = cc.v2(i, n);
				this.cameraRangeBox = cc.rect(e.x + o.x, e.y + o.y, t.x - o.x, t.y - o.y), this.normalSpeed = 650, this.fastSpeed = 650
			}
		}), cc._RF.pop()
	}, {
		"../joystick/JoystickEnum": "JoystickEnum",
		"../joystick/JoystickEvent": "JoystickEvent",
		BaseFish: "BaseFish",
		Game: "Game",
		clientEvent: "clientEvent",
		resourceUtil: "resourceUtil"
	}],
	PoolManager: [function(e, t) {
		"use strict";
		cc._RF.push(t, "fe919MEULFChrI3FRsuQz0J", "PoolManager");
		var i = e("NodePool"),
			n = cc.Class({
				extends: cc.Component,
				properties: {
					foePools: {
						default: [],
						type: i
					},
					itemPools: {
						default: [],
						type: i
					}
				},
				statics: {
					instance: null
				},
				onLoad: function() {
					cc.game.addPersistRootNode(this.node), n.instance = this, this.count = 0, this.discount = 0, this.itemcount = 0, this.disItemcount = 0
				},
				init: function() {
					this.fishInfo = {
						nodeSzie: [],
						box: [],
						offSet: [],
						dbPosition: [],
						showLabePos: [],
						laScale: []
					};
					for (var e = 0; e < this.foePools.length; e++) {
						var t = this.foePools[e].initFish();
						this.fishInfo.nodeSzie.push(cc.v2(t.width, t.height)), this.fishInfo.box.push(t.getComponent(cc.BoxCollider).size), this.fishInfo.offSet.push(t.getComponent(cc.BoxCollider).offset), this.fishInfo.dbPosition.push(t.getChildByName("db").position), this.fishInfo.showLabePos.push(t.getChildByName("Image_game_21").position), this.fishInfo.laScale.push(t.getChildByName("Image_game_21").scale)
					}
					for (var i = 0; i < this.itemPools.length; i++) this.itemPools[i].init()
				},
				requestItem: function(e) {
					var t = this.itemPools[e - 1];
					return t.idx >= 0 ? t.request() : null
				},
				returnItem: function(e, t) {
					var i = this.itemPools[e - 1];
					i.idx < i.size ? i.return(t) : cc.log("Return item to a full pool, something has gone wrong")
				},
				requestFoe: function(e) {
					var t = this.foePools[e - 1];
					return t.idx >= 0 ? t.request() : null
				},
				returnFoe: function(e, t) {
					var i = this.foePools[e - 1];
					i.idx < i.size ? i.return(t) : cc.log("Return foe to a full pool, something has gone wrong")
				}
			});
		cc._RF.pop()
	}, {
		NodePool: "NodePool"
	}],
	ProgressUI: [function(e, t) {
		"use strict";
		cc._RF.push(t, "3c0963ir/BJ5IbVJmYgw0Rt", "ProgressUI"), cc.Class({
			extends: cc.Component,
			properties: {
				progressBar: cc.ProgressBar
			},
			onLoad: function() {},
			start: function() {},
			flushProgress: function(e, t) {
				this.progressBar.progress = e / t
			}
		}), cc._RF.pop()
	}, {}],
	Push: [function(e, t) {
		"use strict";
		cc._RF.push(t, "b274bkNZjtDJLdlhieyqni5", "Push");
		var i = e("Game");
		cc.Class({
			extends: cc.Component,
			properties: {
				ske: dragonBones.ArmatureDisplay,
				sp: cc.Sprite,
				sfArray: [cc.SpriteFrame],
				fishNode: cc.Node
			},
			onEnable: function() {
				this.node.getChildByName("root").scale = 0, this.node.getChildByName("root").runAction(cc.scaleTo(ITERFACE_SACLE, 1, 1)), this.ske.playAnimation("tuisong", 1), this.curSkinIndex = 0;
				for (var e = 0; e < 6; e++)
					if (-1 == Global.data.ownIndex.indexOf(e)) {
						this.curSkinIndex = e;
						break
					} this.sp.spriteFrame = this.sfArray[this.curSkinIndex], this.ensureBonusLabel(), this.fishMove()
			},
			ensureBonusLabel: function() {
				var e = this.node.getChildByName("root");
				if (!e) return;
				this.fishNode && this.fishNode.getChildByName("GVBonusLevelLabel") && this.fishNode.getChildByName("GVBonusLevelLabel").destroy();
				var t = e.getChildByName("GVBonusLevelLabel");
				if (!t) {
					t = new cc.Node("GVBonusLevelLabel");
					t.parent = e;
					t.setAnchorPoint(.5, .5);
					t.setPosition(0, 340);
					t.zIndex = 100;
					var i = t.addComponent(cc.Label);
					i.string = "+2 Cấp độ";
					i.fontSize = 90;
					i.lineHeight = 100;
					i.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
					i.verticalAlign = cc.Label.VerticalAlign.CENTER;
					i.overflow = cc.Label.Overflow.NONE;
					i.useSystemFont = !0;
					i.fontFamily = "Arial";
					t.color = cc.color(255, 255, 255, 255);
					var n = t.addComponent(cc.LabelOutline);
					n.color = cc.color(20, 40, 70, 230);
					n.width = 4
				} else {
					var o = t.getComponent(cc.Label);
					o.string = "+2 Cấp độ", o.fontSize = 90, o.lineHeight = 100, t.setPosition(0, 340)
				}
			},
			fishMove: function() {
				var e = this;
				this.fishNode.stopAllActions(), this.fishNode.scaleX = 1, this.fishNode.setPosition(-86, 100), this.fishNode.runAction(cc.repeatForever(cc.sequence(cc.moveBy(2.3, cc.v2(172, 0)), cc.delayTime(.3), cc.callFunc(function() {
					e.fishNode.scaleX = -1
				}), cc.delayTime(.2), cc.moveBy(2.3, cc.v2(-172, 0)), cc.delayTime(.3), cc.callFunc(function() {
					e.fishNode.scaleX = 1
				}), cc.delayTime(.2))))
			},
			onDisable: function() {},
			btnClose: function() {
				Global.startFishBonus = 0, this.node.active = !1, i.instance.inGame()
			},
			btnFree: function() {
				SdkUtil.ShowVideo(function(e) {
					1 == e && (Global.startFishBonus = 2, this.node.active = !1, -1 == Global.data.ownIndex.indexOf(this.curSkinIndex) && Global.data.ownIndex.push(this.curSkinIndex), Global.data.skinIndex = this.curSkinIndex, Global.save(), i.instance.inGame())
				}.bind(this))
			}
		}), cc._RF.pop()
	}, {
		Game: "Game"
	}],
	Shop: [function(e, t) {
		"use strict";
		cc._RF.push(t, "a642dgp3w1DaL2aG+Hk1lv7", "Shop");
		var i = e("clientEvent"),
			n = e("resourceUtil");
		cc.Class({
			extends: cc.Component,
			properties: {
				buyGold: [cc.Integer],
				showLayout: cc.Node,
				sp: cc.Sprite,
				sfArray: [cc.SpriteFrame],
				fishNode: cc.Node
			},
			onLoad: function() {
				this.node.getChildByName("root").scale = 0, this.node.getChildByName("root").runAction(cc.scaleTo(ITERFACE_SACLE, 1, 1));
				for (var e = 0; e < this.buyGold.length; e++) this.showLayout.children[e].getChildByName("Button_shop_02").children[1].getComponent(cc.Label).string = this.buyGold[e];
				this.showLayout.getChildByName(Global.data.skinIndex + "").children[2].active = !0, this.showLayout.getChildByName(Global.data.skinIndex + "").children[1].active = !1, this.showLayout.getChildByName(Global.data.skinIndex + "").children[0].active = !1;
				for (var t = 0; t < Global.data.ownIndex.length; t++) Global.data.skinIndex != Global.data.ownIndex[t] && (this.showLayout.getChildByName(Global.data.ownIndex[t] + "").children[1].active = !0, this.showLayout.getChildByName(Global.data.ownIndex[t] + "").children[0].active = !1, this.showLayout.getChildByName(Global.data.ownIndex[t] + "").children[2].active = !1);
				this.fishMove()
			},
			fishMove: function() {
				var e = this;
				this.fishNode.runAction(cc.repeatForever(cc.sequence(cc.moveBy(2.3, cc.v2(180, 0)), cc.delayTime(.3), cc.callFunc(function() {
					e.fishNode.scaleX = -1
				}), cc.delayTime(.2), cc.moveBy(2.3, cc.v2(-180, 0)), cc.delayTime(.3), cc.callFunc(function() {
					e.fishNode.scaleX = 1
				}), cc.delayTime(.2))))
			},
			btnBuyClick: function(e, t) {
				var o = parseInt(t);
				Global.gold >= this.buyGold[o] ? (i.dispatchEvent("UpdateGold", -this.buyGold[o]), this.showLayout.getChildByName(o + "").children[1].active = !0, this.showLayout.getChildByName(o + "").children[0].active = !1, this.showLayout.getChildByName(o + "").children[2].active = !1, Global.data.ownIndex.push(o), Global.save()) : n.createUI("ui/noGold")
			},
			btnUseClick: function(e, t) {
				parseInt(t), Global.data.skinIndex = t, Global.save(), this.sp.spriteFrame = this.sfArray[t], this.showLayout.getChildByName(Global.data.skinIndex + "").children[2].active = !0, this.showLayout.getChildByName(Global.data.skinIndex + "").children[1].active = !1, this.showLayout.getChildByName(Global.data.skinIndex + "").children[0].active = !1;
				for (var i = 0; i < Global.data.ownIndex.length; i++) Global.data.skinIndex != Global.data.ownIndex[i] && (this.showLayout.getChildByName(Global.data.ownIndex[i] + "").children[1].active = !0, this.showLayout.getChildByName(Global.data.ownIndex[i] + "").children[0].active = !1, this.showLayout.getChildByName(Global.data.ownIndex[i] + "").children[2].active = !1)
			},
			btnClose: function() {
				this.node.destroy()
			}
		}), cc._RF.pop()
	}, {
		clientEvent: "clientEvent",
		resourceUtil: "resourceUtil"
	}],
	Sign: [function(e, t) {
		"use strict";
		cc._RF.push(t, "bd0f7ZKhIZA2Jyu4dHH+cYm", "Sign");
		var i = e("clientEvent");
		cc.Class({
			extends: cc.Component,
			properties: {
				signLayout: cc.Node,
				btnNode: cc.Node,
				rewardArray: [cc.Integer]
			},
			onLoad: function() {
				this.node.getChildByName("root").scale = 0, this.node.getChildByName("root").runAction(cc.scaleTo(ITERFACE_SACLE, 1, 1));
				for (var e = 0; e < this.rewardArray.length; e++) this.signLayout.getChildByName("box" + e).getChildByName("num").getComponent(cc.Label).string = this.rewardArray[e]
			},
			init: function(e, t) {
				this.signData = e, this.dayIndex = t;
				for (var i = 0; i < this.signData.length && (this.signLayout.getChildByName("box" + i).getChildByName("spSign").active = this.signData[i], this.signData[i]); i++);
			},
			onClick: function(e) {
				var t = parseInt(e);
				this.signLayout.getChildByName("box" + t).getChildByName("spSign").active = !0, this.reward = this.rewardArray[t], this.signData[t] = !0, Global.setObject("gameSignData" + Global.Tag, this.signData)
			},
			btnTake: function() {
				this.onClick(this.dayIndex), i.dispatchEvent("UpdateGold", this.reward), this.node.destroy()
			},
			btnTakeDouble: function() {
				SdkUtil.ShowVideo(function(e) {
					1 == e && (this.onClick(this.dayIndex), i.dispatchEvent("UpdateGold", 2 * this.reward), this.node.destroy())
				}.bind(this))
			}
		}), cc._RF.pop()
	}, {
		clientEvent: "clientEvent"
	}],
	Type: [function(e, t) {
		"use strict";
		cc._RF.push(t, "30214M1+g5GbKNaTCQjUU61", "Type");
		var i = cc.Enum({
				fish1: 1,
				fish2: 2,
				fish3: 3
			}),
			n = cc.Enum({
				smailGold: 1,
				middleGold: 2,
				bigGold: 3,
				largeGold: 4
			});
		t.exports = {
			FishType: i,
			ItemType: n
		}, cc._RF.pop()
	}, {}],
	UIManager: [function(e, t) {
		"use strict";
		cc._RF.push(t, "04ab7CWXWxI86fAogsFvG63", "UIManager"), cc.Class({
			extends: cc.Component,
			properties: {
				uiPanelPrefab: {
					default: [],
					type: cc.Prefab
				}
			},
			onLoad: function() {
				cc.game.addPersistRootNode(this.node), this.uiPanel = {};
				for (var e = 0; e < this.uiPanelPrefab.length; e++) this.uiPanel[this.uiPanelPrefab[e].name] = this.uiPanelPrefab[e];
				window.UIManager = this
			},
			ShowUIPanel: function(e) {
				var t = SdkUtil.ChangeGamePanel(e);
				null == this.uiPanel[t] && (t = e);
				var i = cc.instantiate(this.uiPanel[t]);
				return i.addComponent("UIPanel"), i.parent = cc.find("Canvas"), i.setPosition(cc.v2(0, 0)), i
			}
		}), cc._RF.pop()
	}, {}],
	UIPanel: [function(e, t) {
		"use strict";
		cc._RF.push(t, "ab69d4BB7FKD4Pan6iwPt70", "UIPanel"), cc.Class({
			extends: cc.Component,
			properties: {},
			onEnable: function() {
				SdkUtil.ShowGamePanel(this.node)
			},
			onDisable: function() {
				SdkUtil.CloseGamePanel(this.node.name)
			}
		}), cc._RF.pop()
	}, {}],
	Win: [function(e, t) {
		"use strict";
		cc._RF.push(t, "16d7ewynzlAr66P4IN9OQXo", "Win"), e("Game");
		var i = e("clientEvent");
		e("resourceUtil"), cc.Class({
			extends: cc.Component,
			properties: {
				rewardGold: 200,
				labGold: cc.Label,
				ske: dragonBones.ArmatureDisplay
			},
			onLoad: function() {
				SdkUtil.LevelWin(Global.currentLevel), this.node.getChildByName("root").scale = 0, this.node.getChildByName("root").runAction(cc.scaleTo(ITERFACE_SACLE, 1, 1)), this.labGold.string = this.rewardGold, this.ske.removeEventListener(dragonBones.EventObject.COMPLETE, this.winCallBack, this), this.ske.addEventListener(dragonBones.EventObject.COMPLETE, this.winCallBack, this), this.ske.playAnimation("win_01", 1)
			},
			winCallBack: function() {
				this.ske.removeEventListener(dragonBones.EventObject.COMPLETE, this.winCallBack, this), this.ske.playAnimation("win_02", 0)
			},
			start: function() {
				SMG.playEffect("win")
			},
			btnClose: function() {
				i.dispatchEvent("UpdateGold", this.rewardGold), SMG.playEffect("btnSound"), Global.nextLevel(), this.replaceScene()
			},
			btnDoubldGold: function() {
				SdkUtil.ShowVideo(function(e) {
					1 == e && (i.dispatchEvent("UpdateGold", 2 * this.rewardGold), SMG.playEffect("btnSound"), Global.nextLevel(), this.replaceScene())
				}.bind(this))
			},
			replaceScene: function() {
				Global.save(), this.node.getChildByName("mask").active = !1, this.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(.5, 0, 0), cc.rotateTo(.5, 1080)), cc.callFunc(function() {
					Global.isCheckSign = !0, cc.director.loadScene("main")
				})))
			}
		}), cc._RF.pop()
	}, {
		Game: "Game",
		clientEvent: "clientEvent",
		resourceUtil: "resourceUtil"
	}],
	boom: [function(e, t) {
		"use strict";
		cc._RF.push(t, "e35bbGeTcdJJJUD+pEdFGhp", "boom"), cc.Class({
			extends: cc.Component,
			properties: {
				countTime: 3,
				labTime: cc.Label
			},
			onLoad: function() {
				this.isBoom = !1
			},
			start: function() {},
			update: function(e) {
				this.isBoom || Global.gameState == GAME_OVER || Global.gameState == GAME_PAUSE || (this.countTime -= e, this.labTime.string = "00:0" + Math.floor(this.countTime + 1), this.countTime <= 0 && (this.isBoom = !0, this.node.getComponent(cc.Sprite).spriteFrame = null, this.labTime.string = "", this.node.getComponent(cc.Animation).play("boom"), this.node.getComponent(cc.BoxCollider).enabled = !0, this.node.getComponent(cc.Animation).on("finished", function() {
					this.node.destroy()
				}, this), SMG.playEffect("boom")))
			}
		}), cc._RF.pop()
	}, {}],
	clientEvent: [function(e, t) {
		"use strict";
		cc._RF.push(t, "70aa2njwrxLTrC5fuvkMdBn", "clientEvent");
		var i = e("eventListener").getBaseClass("multi"),
			n = new(cc.Class({
				extends: i,
				properties: {},
				onLoad: function() {
					this._EVENT_TYPE = ["testEvent", "ExpAddEvent", "AddExpTime", "UpdateGold", "GameOver"], this.setSupportEventList(this._EVENT_TYPE)
				}
			}));
		n.onLoad(), t.exports = n, cc._RF.pop()
	}, {
		eventListener: "eventListener"
	}],
	combo: [function(e, t) {
		"use strict";
		cc._RF.push(t, "5d3e5hiZi9GjYzelIEl2ioH", "combo"), cc.Class({
			extends: cc.Component,
			properties: {
				countTimes: 3,
				_countTimes: 0,
				comboLab: cc.Node
			},
			playCombo: function(e) {
				this.comboLab.getComponent(cc.Label).string = e, this.node.active = !0, this._countTimes = this.countTimes, this.comboLab.stopAllActions(), this.comboLab.scale = 1, cc.tween(this.comboLab).set({
					scale: 10
				}).to(.2, {
					scale: 1
				}).start()
			},
			update: function(e) {
				this.node.active && (this._countTimes -= e, this._countTimes <= 0 && (this.node.active = !1))
			}
		}), cc._RF.pop()
	}, {}],
	drop: [function(e, t) {
		"use strict";
		cc._RF.push(t, "a8395oftCFBGJH/45sRgmvS", "drop"), cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function() {
				this.validWidth = (2880 - this.node.width) / 2, this.isDestroy = !1, _.gaiLv(50) ? this.node.emit("update-dir", {
					dir: cc.v2(-1, 0)
				}) : this.node.emit("update-dir", {
					dir: cc.v2(1, 0)
				}), this.scheduleOnce(function() {
					this.node.getComponent(cc.CircleCollider).enabled = !0
				}, 1)
			},
			start: function() {},
			update: function() {
				this.isDestroy || (this.node.x >= this.validWidth || this.node.x <= -this.validWidth) && (this.isDestroy = !0, this.node.destroy())
			}
		}), cc._RF.pop()
	}, {}],
	effect1: [function(e, t) {
		"use strict";
		cc._RF.push(t, "61ddf9x32JOiq2d4IGl281r", "effect1"), cc.Class({
			extends: cc.Component,
			properties: {
				effectAnimation: cc.Animation
			},
			onLoad: function() {
				this.effectAnimation.on("finished", function() {
					this.node.destroy()
				}, this)
			},
			start: function() {}
		}), cc._RF.pop()
	}, {}],
	eventListener: [function(e, t) {
		"use strict";
		cc._RF.push(t, "5d13bM6tOVFWapUE+VPVbD6", "eventListener");
		var i = cc.Class({
				ctor: function() {
					this.supportEvent = null
				},
				on: function(e, t, i) {
					this[e] = {
						handler: t,
						target: i
					}
				},
				off: function(e, t) {
					var i = this[e];
					i && i.handler && i.handler === t && (this[e] = null)
				},
				dispatchEvent: function(e) {
					if (null === this.supportEvent || this.supportEvent.hasOwnProperty(e)) {
						for (var t = this[e], i = [], n = 1; n < arguments.length; n++) i.push(arguments[n]);
						t.handler ? t.handler.apply(t.target, i) : cc.log("not register " + e + "    callback func")
					} else cc.error("please add the event into clientEvent.js")
				},
				setSupportEventList: function(e) {
					if (!(e instanceof Array)) return cc.error("supportEvent was not array"), !1;
					for (var t in this.supportEvent = {}, e) {
						var i = e[t];
						this.supportEvent[i] = t
					}
					return !0
				}
			}),
			n = cc.Class({
				ctor: function() {
					this.handlers = {}, this.supportEvent = null
				},
				on: function(e, t, i) {
					var n = {
							handler: t,
							target: i
						},
						o = this.handlers[e];
					o || (o = [], this.handlers[e] = o);
					for (var s = 0; s < o.length; s++)
						if (!o[s]) return o[s] = n, s;
					return o.push(n), o.length
				},
				off: function(e, t, i) {
					var n = this.handlers[e];
					if (n)
						for (var o = 0; o < n.length; o++) {
							var s = n[o];
							if (s.handler === t && (!i || i === s.target)) {
								n.splice(o, 1);
								break
							}
						}
				},
				dispatchEvent: function(e) {
					if (null === this.supportEvent || this.supportEvent.hasOwnProperty(e)) {
						var t, i = this.handlers[e],
							n = [];
						for (t = 1; t < arguments.length; t++) n.push(arguments[t]);
						if (i)
							for (t = 0; t < i.length; t++) {
								var o = i[t];
								o.handler && o.handler.apply(o.target, n)
							}
					} else cc.error("please add the event into clientEvent.js")
				},
				setSupportEventList: function(e) {
					if (!(e instanceof Array)) return cc.error("supportEvent was not array"), !1;
					for (var t in this.supportEvent = {}, e) {
						var i = e[t];
						this.supportEvent[i] = t
					}
					return !0
				}
			}),
			o = {
				getBaseClass: function(e) {
					return "multi" === e ? n : i
				}
			};
		t.exports = o, cc._RF.pop()
	}, {}],
	expAdd: [function(e, t) {
		"use strict";
		cc._RF.push(t, "afbc5cQ6A1Pdbye3RE4KeDx", "expAdd");
		var i = e("clientEvent");
		cc.Class({
			extends: cc.Component,
			properties: {
				addTime: 15,
				_addTime: 0,
				double: 1.5,
				labNum: cc.Label
			},
			onLoad: function() {
				this._addTime = this.addTime, this.isDestroy = !1, i.dispatchEvent("ExpAddEvent", this.double), i.on("AddExpTime", this.addExpTime, this), SMG.playEffect("clock")
			},
			onDestroy: function() {
				i.off("AddExpTime", this.addExpTime, this)
			},
			addExpTime: function() {
				this._addTime = this.addTime
			},
			update: function(e) {
				this.isDestroy || Global.gameState == GAME_OVER || Global.gameState == GAME_PAUSE || (this._addTime -= e, this.labNum.string = Math.floor(this._addTime + 1), this._addTime <= 0 && (this.isDestroy = !0, i.dispatchEvent("ExpAddEvent", 1), this.node.destroy()))
			}
		}), cc._RF.pop()
	}, {
		clientEvent: "clientEvent"
	}],
	gold: [function(e, t) {
		"use strict";
		cc._RF.push(t, "6e3edQip0FLdJshlHH8NAwL", "gold");
		var i = e("clientEvent");
		cc.Class({
			extends: cc.Component,
			properties: {
				labGold: cc.Label
			},
			onLoad: function() {
				i.on("UpdateGold", this.updateGold, this)
			},
			onDestroy: function() {
				i.off("UpdateGold", this.updateGold, this)
			},
			updateGold: function(e) {
				e && (Global.gold += e), this.labGold.string = Global.gold, Global.setInt(Global.Tag + "gameGodCount", Global.gold)
			}
		}), cc._RF.pop()
	}, {
		clientEvent: "clientEvent"
	}],
	item: [function(e, t) {
		"use strict";
		cc._RF.push(t, "3f8dcAAcMhJ7LbxDV4W1DTK", "item");
		var i = e("Type").ItemType,
			n = e("clientEvent"),
			o = e("Game");
		cc.Class({
			extends: cc.Component,
			properties: {
				itemType: {
					type: i,
					default: i.smailGold
				},
				rewardGold: 100
			},
			onLoad: function() {
				n.on("GameOver", this.gameHandle, this)
			},
			onDestroy: function() {
				n.off("GameOver", this.gameHandle, this)
			},
			init: function(e) {
				this.isAlive = !0, this.dir = e, this.screenWidth = cc.view.getVisibleSize().width + this.node.width, this.playerNode = o.instance.playerNode, this.dir > 0 && (this.node.scaleX = -1)
			},
			disappear: function() {
				0 != this.isAlive && (this.node.scaleX = 1, this.isAlive = !1, o.instance.poolMng.returnItem(this.itemType, this.node))
			},
			gameHandle: function() {
				this.disappear()
			},
			update: function(e) {
				this.isAlive && Global.gameState != GAME_OVER && Global.gameState != GAME_PAUSE && (this.dir > 0 ? this.node.x -= 200 * e : this.dir < 0 && (this.node.x += 200 * e), Math.abs(this.playerNode.position.x - this.node.x) > this.screenWidth && this.disappear())
			}
		}), cc._RF.pop()
	}, {
		Game: "Game",
		Type: "Type",
		clientEvent: "clientEvent"
	}],
	lodash: [function(e, t) {
		"use strict";
		cc._RF.push(t, "d52b2pIHLVDwItPeAZUxI0D", "lodash"),
			function() {
				function e(e, i) {
					Array.isArray(e) ? e.forEach(i) : t(e).forEach(function(t) {
						var n = t.key,
							o = t.value;
						i(o, n, e)
					})
				}

				function t(e) {
					var t = [];
					for (var i in e) e.hasOwnProperty(i) && t.push({
						key: i,
						value: e[i]
					});
					return t
				}

				function i(e) {
					var t = [];
					for (var i in e) e.hasOwnProperty(i) && t.push(e[i]);
					return t
				}

				function n(e, t) {
					for (var i, n = e ? t.length : 0, o = n - 1; n--;) {
						var s = t[n];
						n !== o && s === i || (i = s, Array.prototype.splice.call(e, s, 1))
					}
					return e
				}

				function o(e) {
					return "number" == typeof e
				}

				function s(e) {
					return e ? (e = Number(e)) === 1 / 0 || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
				}

				function a(e, t, i, n) {
					for (var o = -1, s = (0, Math.max)((0, Math.ceil)((t - e) / (i || 1)), 0), a = Array(s); s--;) a[n ? s : ++o] = e, e += i;
					return a
				}

				function c(e) {
					var t = typeof e;
					return null !== e && ("object" === t || "function" === t)
				}
				var r = 9007199254740991;

				function l(e) {
					return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r
				}

				function h(e) {
					return null !== e && l(e.length)
				}

				function d(e, t) {
					return e === t || e != e && t != t
				}

				function u(e, t) {
					var i = typeof e;
					return !!(t = null === t ? r : t) && ("number" === i || "symbol" !== i && /^(?:0|[1-9]\d*)$/.test(e)) && e > -1 && e % 1 == 0 && e < t
				}

				function p(e, t, i) {
					if (!c(i)) return !1;
					var n = typeof t;
					return !!("number" === n ? h(i) && u(t, i.length) : "string" === n && t in i) && d(i[t], e)
				}
				var f = {
					find: function(e, t) {
						var n;
						if (Array.isArray(e) || (e = i(e)), (n = e.filter(t)).length) return n[0]
					},
					filter: function(e, t) {
						return Array.isArray(e) || (e = i(e)), e.filter(t)
					}
				};
				f.forEach = e, f.each = e, f.cloneDeep = function e(t) {
					if (null === t || "object" != typeof t) return t;
					var i = {};
					for (var n in t.constructor === Array && (i = []), t) t.hasOwnProperty(n) && (i[n] = e(t[n]));
					return i
				}, f.map = function(e, t) {
					Array.isArray(e) || (e = i(e));
					var n = [];
					return e.forEach(function(e, i, o) {
						n.push(t(e, i, o))
					}), n
				}, f.random = function(e, t) {
					var i = Math.random() * (t - e + 1) + e;
					return Math.floor(i)
				}, f.gaiLv = function(e) {
					return 1 + Math.floor(100 * Math.random()) <= e
				}, f.toArray = i, f.pullAllWith = function(e, t, i) {
					return t.forEach(function(t) {
						e.filter(function(e) {
							return i(e, t)
						}).forEach(function(t) {
							var i = e.indexOf(t); - 1 !== e.indexOf(t) && e.splice(i, 1)
						})
					}), e
				}, f.isEqual = function e(t, i) {
					var n = t instanceof Object,
						o = i instanceof Object;
					if (!n || !o) return t === i;
					if (Object.keys(t).length !== Object.keys(i).length) return !1;
					for (var s in t) {
						var a = t[s] instanceof Object,
							c = i[s] instanceof Object;
						if (a && c) return e(t[s], i[s]);
						if (t[s] !== i[s]) return !1
					}
					return !0
				}, f.now = function() {
					return Date.now()
				}, f.pullAll = function(e, t) {
					return t.forEach(function(t) {
						var i = e.indexOf(t); - 1 !== e.indexOf(t) && e.splice(i, 1)
					}), e
				}, f.forEachRight = function(e, t) {
					Array.isArray(e) || (e = i(e));
					for (var n = e.length - 1; n >= 0 && t(e[n]); n--);
				}, f.startsWith = function(e, t, i) {
					return (e = e.substr(i)).startsWith(t)
				}, f.endsWith = function(e, t, i) {
					return (e = e.substr(i)).endsWith(t)
				}, f.remove = function(e, t) {
					var i = [],
						o = [];
					return e.forEach(function(e, n) {
						t(e) && (i.push(e), o.push(n))
					}), n(e, o), i
				}, f.findIndex = function(e, t, i) {
					var n;
					if (e = e.slice(i), "function" == typeof t) {
						for (n = 0; n < e.length; n++)
							if (t(e[n])) return n
					} else if (Array.isArray(t))
						for (n = 0; n < e.length; n++) {
							var o = t[0],
								s = !0;
							if (t.length > 1 && (s = t[1]), e[n][o] === s) return n
						} else
							for (n = 0; n < e.length; n++)
								if (e[n] === t) return n;
					return -1
				}, f.concat = function() {
					var e = arguments.length;
					if (!e) return [];
					for (var t = arguments[0], i = 1; i < e;) t = t.concat(arguments[i]), i++;
					return t
				}, f.isNumber = o, f.indexOf = function(e, t, i) {
					return (e = e.slice(i)).indexOf(t)
				}, f.join = function(e, t) {
					if (null === e) return "";
					var i = "";
					return e.forEach(function(e) {
						i += e + t
					}), i.substr(0, i.length - 1)
				}, f.split = function(e, t, i) {
					return e.split(t, i)
				}, f.max = function(e) {
					if (e && e.length) {
						for (var t, i = 0; i < e.length; i++) 0 === i ? t = e[0] : t < e[i] && (t = e[i]);
						return t
					}
				}, f.drop = function(e, t) {
					return null !== e && e.length ? e.slice(t) : []
				}, f.flattenDeep = function e(t) {
					return t.reduce(function(t, i) {
						return t.concat(Array.isArray(i) ? e(i) : i)
					}, [])
				}, f.uniq = function(e) {
					var t = [];
					return e.forEach(function(e) {
						-1 === t.indexOf(e) && t.push(e)
					}), t
				}, f.isNaN = function(e) {
					return o(e) && e !== +e
				}, f.chunk = function(e, t) {
					if (null === e || !e.length || t < 1) return [];
					for (var i = []; e.length > t;) i.push(e.slice(0, t)), e = e.slice(t);
					return i.push(e), i
				}, f.maxBy = function(e, t) {
					if (e && e.length) {
						for (var i, n, o = 0; o < e.length; o++) 0 === o ? (i = t(e[0]), n = e[0]) : i < e[o] && (i = e[o], n = e[o]);
						return n
					}
				}, f.minBy = function(e, t) {
					if (e && e.length) {
						for (var i, n, o = 0; o < e.length; o++) 0 === o ? (i = t(e[0]), n = e[0]) : i > e[o] && (i = t(e[o]), n = e[o]);
						return n
					}
				}, f.range = function(e, t, i) {
					return i && "number" != typeof i && p(e, t, i) && (t = i = void 0), e = s(e), void 0 === t ? (t = e, e = 0) : t = s(t), a(e, t, i = void 0 === i ? e < t ? 1 : -1 : s(i), void 0)
				}, f.sumBy = function(e, t) {
					var i = 0;
					for (var n in e) i += t(e[n]);
					return i
				}, f.countBy = function(e) {
					var t = {};
					for (var i in e) {
						var n = e[i];
						t.hasOwnProperty(n) ? t[n] += 1 : t[n] = 1
					}
					return t
				}, f.removeArray = function(e, t) {
					for (var i = e.length, n = 0; n < i; n++)
						if (e[n] == t) return 0 == n ? (e.shift(), e) : n == i - 1 ? (e.pop(), e) : (e.splice(n, 1), e)
				}, window._ = f
			}(), cc._RF.pop()
	}, {}],
	noGold: [function(e, t) {
		"use strict";
		cc._RF.push(t, "6a250I24M9GNbrgqP9uXNQW", "noGold");
		var i = e("clientEvent");
		cc.Class({
			extends: cc.Component,
			properties: {
				rewardGold: 2e3
			},
			onLoad: function() {},
			start: function() {},
			btnGiveUp: function() {
				this.node.destroy()
			},
			btnFreeGold: function() {
				SdkUtil.ShowVideo(function(e) {
					1 == e && (i.dispatchEvent("UpdateGold", this.rewardGold), this.node.destroy())
				}.bind(this))
			}
		}), cc._RF.pop()
	}, {
		clientEvent: "clientEvent"
	}],
	readyChest: [function(e, t) {
		"use strict";
		cc._RF.push(t, "d002fiD3g9PIplnTlmj6DrU", "readyChest"), cc.Class({
			extends: cc.Component,
			properties: {},
			start: function() {}
		}), cc._RF.pop()
	}, {}],
	resourceUtil: [function(e, t) {
		"use strict";
		cc._RF.push(t, "c552ckuArhFTKpkfS85R5TB", "resourceUtil");
		var i = new(cc.Class({
			onLoad: function() {},
			loadRes: function(e, t, i) {
				cc.loader.loadRes(e, t, function(e, t) {
					if (e) return cc.error(e.message || e), void i(e, t);
					i(e, t)
				})
			},
			getUIPrefabRes: function(e, t) {
				this.loadRes("prefabs/" + e, cc.Prefab, t)
			},
			createUI: function(e, t, i) {
				this.getUIPrefabRes(e, function(e, n) {
					if (!e) {
						var o = cc.instantiate(n);
						o.setPosition(cc.v2(0, 0)), i || (i = cc.find("Canvas")), i.addChild(o), t && t(null, o)
					}
				})
			},
			createEffect: function(e, t, i) {
				this.loadRes("/gamePackages/effects/" + e, cc.Prefab, function(e, n) {
					if (e) t("err", null);
					else {
						var o = cc.instantiate(n);
						i || (i = cc.find("Canvas")), i.addChild(o), t(null, o)
					}
				})
			},
			getEffectPrefab: function(e, t) {
				this.loadRes("gamePackages/effects/" + e, cc.Prefab, t)
			},
			getData: function(e, t) {
				cc.loader.loadRes("datas/" + e, function(e, i) {
					if (e) cc.error(e.message || e);
					else {
						var n = i.text;
						n ? t(e, n) : cc.loader.load(i.nativeUrl, function(e, i) {
							t(e, n = i)
						})
					}
				})
			},
			getJsonData: function(e, t) {
				cc.loader.loadRes("datas/" + e, function(e, i) {
					e ? cc.error(e.message || e) : i.json ? t(e, i.json) : t("failed!!!")
				})
			},
			setSpriteFrame: function(e, t, i) {
				this.loadRes(e, cc.SpriteFrame, function(n, o) {
					if (n) return console.error("set sprite frame failed! err:", e, n), void i(n);
					t && cc.isValid(t) && (t.spriteFrame = o, i && i(null))
				})
			},
			getCakeIcon: function(e, t) {
				this.loadRes("gamePackages/textures/icons/cakes/" + e, cc.SpriteFrame, function(e, i) {
					if (e) return console.error("get cake icon failed! err:", path, e), void t(e);
					t(null, i)
				})
			},
			setCakeIcon: function(e, t, i) {
				this.setSpriteFrame("gamePackages/textures/icons/cakes/" + e, t, i)
			},
			setPropIcon: function(e, t, i) {
				this.setSpriteFrame("gamePackages/textures/icons/props/" + e, t, i)
			},
			setGameIcon: function(e, t, i) {
				e.startsWith("http") ? this.setAvatar(e, t, i) : this.setSpriteFrame("gamePackages/textures/icons/games/" + e, t, i)
			},
			formatName: function(e) {
				var t = "";
				if (e.length)
					if (e.length > 6) {
						for (var i = 0; i < 6; i++) {
							var n = e[i] + e[i + 1];
							null !== emojione.regUnicode.exec(n) ? (t += n, i++) : t += e[i]
						}
						t += "..."
					} else t = e;
				return t
			},
			setAvatar: function(e, t, i) {
				e && e.startsWith("http") && cc.loader.load({
					url: e,
					type: "png"
				}, function(n, o) {
					if (n) return console.error("set avatar failed! err:", e, n), void i(n);
					var s = new cc.SpriteFrame(o, cc.Rect(0, 0, o.width, o.height));
					t && cc.isValid(t) && (t.spriteFrame = s, i(null))
				})
			},
			convertMovieClip2Animation: function(e, t, i) {
				var n = e.res,
					o = {};
				for (var s in n) {
					var a = n[s],
						c = new cc.SpriteFrame(t, cc.rect(a.x, a.y, a.w, a.h));
					o[s] = c
				}
				var r = e.mc,
					l = [];
				for (var h in r) {
					var d = {},
						u = r[h];
					d.sample = u.frameRate, d.frames = [];
					for (var p = 0; p < u.frames.length; p++)
						for (var f = u.frames[p], m = 0; m < f.duration; m++) d.frames.push(o[f.res]);
					var g = cc.AnimationClip.createWithSpriteFrames(d.frames, d.sample);
					g.name = h, l.push(g)
				}
				i(null, l)
			},
			loadMoveClip: function(e, t, i) {
				var n = this,
					o = null,
					s = null;
				cc.loader.load({
					url: e,
					type: "json"
				}, function(e, t) {
					e || null !== (o = t) && null !== s && n.convertMovieClip2Animation(o, s, i)
				}), cc.loader.load({
					url: t,
					type: "png"
				}, function(e, t) {
					e || (s = t, null !== o && null !== s && n.convertMovieClip2Animation(o, s, i))
				})
			},
			setGray: function(e, t) {
				for (var i = e.getComponentsInChildren(cc.Sprite), n = 0; n < i.length; ++n) {
					var o = i[n];
					t ? o.setState(cc.Sprite.State.GRAY) : o.setState(cc.Sprite.State.NORMAL)
				}
			}
		}));
		i.onLoad(), t.exports = i, cc._RF.pop()
	}, {}],
	signCheck: [function(e, t) {
		"use strict";
		cc._RF.push(t, "4e149QR4UpHQZ2SOA3Lcts1", "signCheck"), e("resourceUtil"), cc.Class({
			extends: cc.Component,
			properties: {},
			timeStamp: function(e) {
				var t = (new Date).getTime();
				return t -= e, t /= 1e3, t /= 60, t /= 60, (t /= 24) < 1 ? t = 1 : t >= 1 && t < 2 ? t = 2 : t >= 2 && t < 3 ? t = 3 : t >= 3 && t < 4 ? t = 4 : t >= 4 && t < 5 ? t = 5 : t >= 5 && t < 6 ? t = 6 : t >= 6 && t < 7 ? t = 7 : t > 7 && (t = 1, this.retSign()), t
			},
			onLoad: function() {
				var e = Global.getInt("firstInGameTime" + Global.Tag);
				null !== e && "" != e || (e = (new Date).getTime(), Global.setInt("firstInGameTime" + Global.Tag, e));
				var t = Global.getObject("gameSignData" + Global.Tag);
				if (null !== t && "" != t || (t = [!1, !1, !1, !1, !1, !1, !1], Global.setObject("gameSignData" + Global.Tag, t)), Global.isCheckSign) {
					var i = this.timeStamp(e);
					!1 === t[i - 1] && UIManager.ShowUIPanel("Sign").getComponent("Sign").init(t, i - 1)
				}
			},
			retSign: function() {
				var e = (new Date).getTime();
				Global.setInt("firstInGameTime" + Global.Tag, e), Global.setObject("gameSignData" + Global.Tag, [!1, !1, !1, !1, !1, !1, !1])
			},
			start: function() {}
		}), cc._RF.pop()
	}, {
		resourceUtil: "resourceUtil"
	}],
	soundManager: [function(e, t) {
		"use strict";
		cc._RF.push(t, "eab3bjuhBtCDL2Agu1aoCBK", "soundManager"), cc.Class({
			extends: cc.Component,
			properties: {
				gamemusic: {
					default: [],
					type: cc.AudioClip
				},
				gamesound: {
					default: [],
					type: cc.AudioClip
				}
			},
			onLoad: function() {
				window.SMG = this, cc.game.addPersistRootNode(this.node), this.musicId = -33, this.soundId = []
			},
			playSound: function(e) {
				this.soundId[e] = cc.audioEngine.playEffect(this.gamesound[e], !1, 1)
			},
			stopSound: function(e) {
				cc.audioEngine.stopEffect(this.soundId[e])
			},
			playGameMusic: function(e) {
				this.musicId == e && cc.audioEngine.isMusicPlaying() || (cc.audioEngine.stopMusic(), cc.audioEngine.playMusic(this.gamemusic[e], !0, 1), this.musicId = e)
			},
			stopMusci: function() {
				cc.audioEngine.stopMusic()
			},
			paushMusic: function() {
				cc.audioEngine.pauseMusic(), cc.audioEngine.pauseAllEffects()
			},
			resumeMusic: function() {
				cc.audioEngine.resumeMusic(), cc.audioEngine.resumeAllEffects()
			},
			playEffect: function(e) {
				var t = cc.js.formatStr("sounds/%s", e);
				cc.loader.loadRes(t, cc.AudioClip, function(e, t) {
					e ? console.log("playEffect err = " + e) : cc.audioEngine.playEffect(t, !1, 1)
				})
			}
		}), cc._RF.pop()
	}, {}],
	tip: [function(e, t) {
		"use strict";
		cc._RF.push(t, "d80b30z5XJDaZkQzwZOIUq1", "tip");
		var i = e("resourceUtil");
		cc.Class({
			extends: cc.Component,
			properties: {
				sp: cc.Node
			},
			init: function(e, t) {
				this.node.position = cc.v2(0, 0);
				var n = this;
				i.setSpriteFrame("tip/" + e, this.sp.getComponent(cc.Sprite), function() {
					cc.tween(n.sp).to(.75, {
						position: cc.v2(0, 0)
					}).delay(1).to(.5, {
						position: cc.v2(-500, 0)
					}).call(function() {
						t && t(), n.node.destroy()
					}).start()
				})
			}
		}), cc._RF.pop()
	}, {
		resourceUtil: "resourceUtil"
	}]
}, {}, ["UIManager", "UIPanel", "Game", "Loading", "Main", "BaseFish", "Fish", "Move", "Player", "item", "boom", "combo", "drop", "effect1", "expAdd", "gold", "tip", "Joystick", "JoystickEnum", "JoystickEvent", "clientEvent", "eventListener", "lodash", "resourceUtil", "Conents", "ProgressUI", "Type", "NodePool", "PoolManager", "soundManager", "Box", "Fail", "First", "Push", "Shop", "Sign", "Win", "noGold", "readyChest", "signCheck"]);