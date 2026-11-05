window.__require = function e(t, n, o) {
	function r(i, s) {
		if (!n[i]) {
			if (!t[i]) {
				var c = i.split("/");
				if (c = c[c.length - 1], !t[c]) {
					var l = "function" == typeof __require && __require;
					if (!s && l) return l(c, !0);
					if (a) return a(c, !0);
					throw new Error("Cannot find module '" + i + "'")
				}
			}
			var d = n[i] = {
				exports: {}
			};
			t[i][0].call(d.exports, function(e) {
				return r(t[i][1][e] || e)
			}, d, d.exports, e, t, n, o)
		}
		return n[i].exports
	}
	for (var a = "function" == typeof __require && __require, i = 0; i < o.length; i++) r(o[i]);
	return r
}({
	ArmyGroupController: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "345c2692y5AqYYOT+iXw0yE", "ArmyGroupController"), window.ArmyGroupController = {
			Instance: null
		};
		var o = e("LevelManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				TargetAvatarControllerType: {
					type: cc.Enum(o.AvatarControllerType),
					default: o.AvatarControllerType.BlackKiller
				},
				TargetAvatarNode: cc.Node,
				TargetControllerDistanceMinLimit: 2,
				TargetControllerObjects: {
					type: [cc.Node],
					default: []
				},
				ArmyControllerAnimation: cc.Animation,
				UpdateFlag: 0,
				ComeBackDistanceLimit: 20,
				ComeBackStartPosition: {
					type: cc.v2,
					default: cc.v2(0, 0)
				}
			},
			onLoad: function() {
				ArmyGroupController.Instance = this
			},
			start: function() {
				cc.audioEngine.playEffect(AssetManager.Instance.AudioClips[3])
			},
			update: function(e) {
				switch (this.UpdateFlag) {
					case 0:
						this.node.position.sub(this.TargetAvatarNode.position).mag() > this.TargetControllerDistanceMinLimit ? this.node.x += LevelManager.Instance.AvatarControllerFastMoveSpeed * e : (this.UpdateFlag = 1, this.onArmyGetJailed(this.TargetAvatarControllerType == o.AvatarControllerType.BlackKiller));
						break;
					case 1:
						this.node.position.sub(this.ComeBackStartPosition).mag() > this.ComeBackDistanceLimit ? (this.UpdateFlag = 2, JailSceneContent.Instance.Show(this.TargetAvatarControllerType), this.node.destroy()) : this.node.x -= LevelManager.Instance.AvatarControllerFastMoveSpeed * e
				}
			},
			onArmyGetJailed: function(e) {
				try {
					e ? (window.ArcadeAdapter && window.ArcadeAdapter.onAssassinJailedRetry && window.ArcadeAdapter.onAssassinJailedRetry()) : (window.ArcadeAdapter && window.ArcadeAdapter.onKingCaughtAssassin && window.ArcadeAdapter.onKingCaughtAssassin())
				} catch (gvErr) {}
				this.ComeBackStartPosition = this.node.position, this.ArmyControllerAnimation.play("WalkDrag"), this.ArmyControllerAnimation.node.scaleX = -this.ArmyControllerAnimation.node.scaleX;
				var t = this.TargetAvatarNode.position;
				this.TargetAvatarNode.destroy(), null != this.TargetControllerObjects[this.TargetAvatarControllerType] && (this.TargetControllerObjects[this.TargetAvatarControllerType].active = !0), this.CheckTargetCallback = this.schedule(function() {
					if (null == this.TargetAvatarNode.parent) {
						if (e) {
							var n = cc.instantiate(AssetManager.Instance.ControllerPrefabs[2]);
							n.parent = LevelManager.Instance.SceneContentNode, n.position = cc.v2(t.x - 700, t.y)
						} else LevelManager.Instance.CreateRandomNPCKiller();
						this.unscheduleAllCallbacks()
					}
				}, 0, cc.macro.REPEAT_FOREVER, 0)
			}
		}), cc._RF.pop()
	}, {
		LevelManager: "LevelManager"
	}],
	AssetManager: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "84506PLDdJCSKLDCfqyGeTA", "AssetManager"), window.AssetManager = {
			Instance: null
		}, cc.Class({
			extends: cc.Component,
			properties: {
				AudioClips: {
					type: [cc.AudioClip],
					default: []
				},
				ControllerPrefabs: {
					type: [cc.Prefab],
					default: []
				},
				KingControllerPrefabs: {
					type: [cc.Prefab],
					default: []
				}
			},
			onLoad: function() {
				AssetManager.Instance = this
			}
		}), cc._RF.pop()
	}, {}],
	AwakeContent: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "5e0c3QKKspHHYXjJOh5ZlSS", "AwakeContent");
		var o = e("./SDK/SDkMgr"),
			r = c(o),
			a = c(e("./SDK/MtaSdk")),
			i = c(e("./ToastMgr")),
			s = c(e("./RecorderMgr"));

		function c(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		cc.Class({
			extends: cc.Component,
			properties: {
				GameContent: cc.Node,
				Shiwan: cc.Node,
				setIntervalId: -1,
				iconBtn: cc.Node
			},
			onEnable: function() {
				var t = this;
				this.Shiwan && (this.Shiwan.stopAllActions(), this.Shiwan.opacity = 0, this.Shiwan.active = !1);
				setTimeout(function() {
					r.default.Inst.curChannel == o.Channel.oppo && (console.log("SDkMgr.Inst.hasIcon()", r.default.Inst.hasIcon()), t.showIcon(!r.default.Inst.hasIcon()))
				}, 500)
			},
			showIcon: function(e) {
				this.iconBtn.active = e
			},
			IconClick: function() {
				var e = this;
				r.default.Inst.createIcon(function(t) {
					t == o.AdsCode.finish && (e.iconBtn.active = !1)
				})
			},
			onDisable: function() {
				-1 != this.setIntervalId && clearInterval(this.setIntervalId), this.Shiwan.stopAllActions(), this.Shiwan.opacity = 0, this.Shiwan.active = !1
			},
			closeShiwan: function() {
				var e = this,
					t = cc.fadeOut(.5),
					n = cc.callFunc(function() {
						e.Shiwan.active = !1
					}, this);
				this.Shiwan.runAction(cc.sequence(t, n))
			},
			start: function() {},
			onStartGameButtonDown: function() {
				cc.audioEngine.playEffect(AssetManager.Instance.AudioClips[0]), this.node.active = !1, this.GameContent.active = !0, r.default.Inst.curChannel == o.Channel.tt && s.default.Instance.startRecord();
				try {
					window.ArcadeAdapter && window.ArcadeAdapter.onGameStart && window.ArcadeAdapter.onGameStart()
				} catch (gvErr) {}
			},
			ShiWanAd: function() {
				var e = this;
				r.default.Inst.showVideo(function(t) {
					t == o.AdsCode.finish ? (a.default.Inst.event("FishSkinADSuccess"), null != KillerController.Instance && (KillerController.Instance.ChangeToFish(), e.onStartGameButtonDown(), i.default.Instance.showToast("Nhận Skin cá muối"))) : t == o.AdsCode.cancel ? i.default.Instance.showToast("Video vẫn chưa kết thúc") : i.default.Instance.showToast("Phát lại video không thành công")
				})
			}
		}), cc._RF.pop()
	}, {
		"./RecorderMgr": "RecorderMgr",
		"./SDK/MtaSdk": "MtaSdk",
		"./SDK/SDkMgr": "SDkMgr",
		"./ToastMgr": "ToastMgr"
	}],
	CameraManager: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "6062bMAB2RNS6vgbB+eHKmu", "CameraManager"), window.CameraManager = {
			Instance: null
		}, cc.Class({
			extends: cc.Component,
			properties: {
				CameraTarget: cc.Node,
				IsSyncTargetHeight: {
					type: Boolean,
					default: !1
				},
				HeightOffset: 0,
				FollowOffset: {
					type: cc.v3,
					default: cc.v3(0, 0, 0)
				}
			},
			onLoad: function() {
				CameraManager.Instance = this
			},
			lateUpdate: function(e) {
				var t;
				this.CameraTarget.parent && (LevelManager.Instance.AllowAvatarControllerMove && (this.IsSyncTargetHeight ? this.node.position = this.CameraTarget.position.add(this.FollowOffset) : (t = cc.v3(this.CameraTarget.x, this.HeightOffset, this.CameraTarget.z), this.node.position = t.add(this.FollowOffset))))
			}
		}), cc._RF.pop()
	}, {}],
	ColourBackground: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "93710ZUxuBJZp7ciHqtrJwL", "ColourBackground");
		(function(e) {
			e && e.__esModule
		})(e("./SDK/SDkMgr"));
		window.ColourBackground = {
			Instance: null
		}, cc.Class({
			extends: cc.Component,
			properties: {
				UpdateFadeSpeed: 100,
				DeathAudioClips: {
					type: [cc.AudioClip],
					default: []
				},
				UpdateFlag: 0
			},
			onLoad: function() {
				ColourBackground.Instance = this, this.node.active = !1
			},
			update: function(e) {
				if (0 != this.UpdateFlag) switch (this.UpdateFlag) {
					case 1:
						this.node.opacity >= 255 ? (this.UpdateFlag = 2, this.scheduleOnce(function() {
							this.UpdateFlag = 3
						}, 1.2)) : this.node.opacity += this.UpdateFadeSpeed * e;
						break;
					case 3:
						this.node.opacity -= this.UpdateFadeSpeed * e, this.node.opacity <= 0 && (this.UpdateFlag = 0, this.node.active = !1)
				}
			},
			Show: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cc.color(0, 0, 0);
				this.unscheduleAllCallbacks(this), e.equals(cc.color(0, 0, 0)) && cc.audioEngine.playEffect(this.DeathAudioClips[Math.round(Math.random() * this.DeathAudioClips.length - 1)]), this.node.opacity = 0, this.node.active = !0, this.node.color = e, this.UpdateFlag = 1
			}
		}), cc._RF.pop()
	}, {
		"./SDK/SDkMgr": "SDkMgr"
	}],
	ControllerJailPrefab: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "47d61kedZZMH7EdxRes6gor", "ControllerJailPrefab"), cc.Class({
			extends: cc.Component,
			properties: {
				TargetControllerSprite: cc.Sprite,
				TargetControllerSpriteFrames: {
					type: [cc.SpriteFrame],
					default: []
				}
			},
			ChangeSpriteFrame: function(e) {
				this.TargetControllerSprite.spriteFrame = this.TargetControllerSpriteFrames[e]
			}
		}), cc._RF.pop()
	}, {}],
	DeathController: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "6ec5eC8PftA6ZHlZM4qq0wV", "DeathController"), cc.Class({
			extends: cc.Component,
			properties: {
				DeathClothesObject: cc.Node,
				DeathWeaponObjects: [cc.Node],
				DeathYearObjects: [cc.Node]
			},
			DeathFunction: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
				if (this.DeathWeaponObjects[e] && (this.DeathWeaponObjects[e].active = !0), t && (this.DeathClothesObject.active = !0), n >= 0) {
					for (var o = 0; o < this.DeathYearObjects.length; o++) null != this.DeathYearObjects[o] && (this.DeathYearObjects[o].active = !1);
					this.DeathYearObjects[n].active = !0
				}
				var r = this.node.parent.convertToWorldSpaceAR(this.node.position),
					a = LevelManager.Instance.SceneContentNode.convertToNodeSpaceAR(r);
				this.node.parent = LevelManager.Instance.SceneContentNode, this.node.position = a, this.node.setSiblingIndex(0), this.node.active = !0
			}
		}), cc._RF.pop()
	}, {}],
	GiftBoxMgr: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "0b4492A2GVCRq0wq3EJCT0z", "GiftBoxMgr"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = e("./SDK/SDkMgr"),
			r = e("./SDK/MtaSdk"),
			a = e("./ToastMgr"),
			i = cc._decorator,
			s = i.ccclass,
			c = i.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.giftNodeParent = null, t.giftNodes = [], t.hasGetGift = !1, t.targetTime = 0, t.restTime = 0, t.openGiftPanel = null, t.timerLabel = null, t
				}
				var n;
				return __extends(t, e), n = t, t.prototype.onLoad = function() {
					n.Instance = this, cc.sys.localStorage.getItem("HasGetGift") || cc.sys.localStorage.setItem("HasGetGift", "false"), cc.sys.localStorage.getItem("HasUseAddSpeed") || cc.sys.localStorage.setItem("HasUseAddSpeed", "false"), cc.sys.localStorage.getItem("GiftTime") || cc.sys.localStorage.setItem("GiftTime", 0), this.hasGetGift = "true" == cc.sys.localStorage.getItem("HasGetGift")
				}, t.prototype.start = function() {
					this.hasGetGift || this.schedule(this.FreshBox, 1)
				}, t.prototype.update = function(e) {
					this.giftNodes[1].active && (this.timerLabel.string = this.formatTimeFull(this.restTime))
				}, t.prototype.getCurTimeSecends = function() {
					var e = new Date;
					return Math.floor(e.getTime() / 1e3)
				}, t.prototype.formatTimeFull = function(e) {
					var t = Math.floor(e / 3600),
						n = Math.floor((e - 3600 * t) / 60),
						o = e - 3600 * t - 60 * n;
					return t.toString() + ":" + ("0" + n).substr(-2) + ":" + ("0" + o).substr(-2)
				}, t.prototype.FreshBox = function() {
					if (!this.hasGetGift) {
						this.targetTime = parseInt(cc.sys.localStorage.getItem("GiftTime"));
						var e = this.getCurTimeSecends();
						0 == this.targetTime ? (this.giftNodes[0].active = !0, this.giftNodes[1].active = !1, this.giftNodes[2].active = !1) : this.targetTime > e ? (this.giftNodes[0].active = !1, this.giftNodes[1].active = !0, this.giftNodes[2].active = !1, this.restTime = this.targetTime - e) : (this.giftNodes[0].active = !1, this.giftNodes[1].active = !1, this.giftNodes[2].active = !0)
					}
				}, t.prototype.ShowBox = function() {
					this.hasGetGift || o.default.Inst.curChannel != o.Channel.tt && (this.giftNodeParent.active = !0)
				}, t.prototype.HideBox = function() {
					this.giftNodeParent.active = !1
				}, t.prototype.getGiftClick = function() {
					console.log("getGiftClick"), cc.sys.localStorage.setItem("GiftTime", this.getCurTimeSecends() + 7200), this.targetTime = parseInt(cc.sys.localStorage.getItem("GiftTime")), this.FreshBox()
				}, t.prototype.addSpeedClick = function() {
					var e = this;
					o.default.Inst.showVideo(function(t) {
						t == o.AdsCode.finish ? (r.default.Inst.event("AddSpeedSuccess"), e.targetTime = parseInt(cc.sys.localStorage.getItem("GiftTime")), e.targetTime -= 1800, cc.sys.localStorage.setItem("GiftTime", e.targetTime), e.FreshBox(), cc.sys.localStorage.setItem("HasUseAddSpeed", "true"), a.default.Instance.showToast("Tăng tốc thành công!")) : t == o.AdsCode.cancel ? a.default.Instance.showToast("Video vẫn chưa kết thúc") : a.default.Instance.showToast("Phát lại video không thành công")
					})
				}, t.prototype.openGiftClick = function() {
					this.openGiftPanel.active = !0, "true" == cc.sys.localStorage.getItem("HasUseAddSpeed") ? (this.openGiftPanel.getChildByName("Panel").getChildByName("GetBtn1").active = !0, this.openGiftPanel.getChildByName("Panel").getChildByName("GetBtn2").active = !1) : (this.openGiftPanel.getChildByName("Panel").getChildByName("GetBtn1").active = !1, this.openGiftPanel.getChildByName("Panel").getChildByName("GetBtn2").active = !0)
				}, t.prototype.getSkinBtnClick = function() {
					this.openGiftPanel.active = !1, cc.sys.localStorage.setItem("HasGetGift", "true"), this.hasGetGift = !0, this.unscheduleAllCallbacks(), this.HideBox(), r.default.Inst.event("MicSkinSuccess"), null != KillerController.Instance && (KillerController.Instance.ChangeToMic(), a.default.Instance.showToast("Nhận skin Microphone!"))
				}, t.prototype.getSkinBtnAdClick = function() {
					var e = this;
					o.default.Inst.showVideo(function(t) {
						t == o.AdsCode.finish ? e.getSkinBtnClick() : (e.openGiftPanel.active = !1, t == o.AdsCode.cancel ? a.default.Instance.showToast("Video vẫn chưa kết thúc") : a.default.Instance.showToast("Phát lại video không thành công"))
					})
				}, t.prototype.closeSkinPanel = function() {
					this.openGiftPanel.active = !1
				}, t.Instance = null, __decorate([c(cc.Node)], t.prototype, "giftNodeParent", void 0), __decorate([c([cc.Node])], t.prototype, "giftNodes", void 0), __decorate([c(cc.Node)], t.prototype, "openGiftPanel", void 0), __decorate([c(cc.Label)], t.prototype, "timerLabel", void 0), t = n = __decorate([s], t)
			}(cc.Component);
		n.default = l, cc._RF.pop()
	}, {
		"./SDK/MtaSdk": "MtaSdk",
		"./SDK/SDkMgr": "SDkMgr",
		"./ToastMgr": "ToastMgr"
	}],
	JailSceneContent: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "31ff4zUobBCR44mfJS74Yic", "JailSceneContent");
		var o = e("../SDK/SDkMgr"),
			r = i(o),
			a = i(e("../RecorderMgr"));

		function i(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		window.JailSceneContent = {
			Instance: null
		};
		var s = e("LevelManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				CameraTargetNode: cc.Node,
				ControllerJailPrefabs: {
					type: cc.Node,
					default: []
				},
				SkeletonObjects: {
					type: [cc.Node],
					default: []
				}
			},
			onLoad: function() {
				JailSceneContent.Instance = this
			},
			Show: function(e) {
				LevelManager.Instance.AllowAvatarControllerMove = !1, cc.audioEngine.playEffect(AssetManager.Instance.AudioClips[5]);
				for (var t = 0; t < this.SkeletonObjects.length; t++) this.SkeletonObjects[t].active = !1;
				var n = Math.round(Math.random() * (this.SkeletonObjects.length - 1));
				this.SkeletonObjects[n] && (this.SkeletonObjects[n].active = !0);
				for (t = 0; t < this.ControllerJailPrefabs.length; t++) null != this.ControllerJailPrefabs[t] && (this.ControllerJailPrefabs[t].active = !1);
				this.unscheduleAllCallbacks(), this.ControllerJailPrefabs[e].active = !0, this.scheduleOnce(function() {
					null != this.ControllerJailPrefabs[e] && this.ControllerJailPrefabs[e].getComponent(cc.Animation).play("ControllerJailPrefab")
				}, .3), this.node.position = cc.v2(LevelManager.Instance.SceneMainCameraNode.x, this.node.y);
				var i = LevelManager.Instance.SceneMainCameraNode.position,
					c = cc.moveTo(.8, cc.v2(this.node.x, this.CameraTargetNode.y)),
					l = cc.delayTime(3),
					d = cc.moveTo(.8, i),
					h = cc.callFunc(function() {
						LevelManager.Instance.GameCurrentOperationScene = s.GameSceneBlockType.Lobby, LevelManager.Instance.AttackProgressBar.progress = 0, LevelManager.Instance.AllowAvatarControllerMove = !0, LevelManager.Instance.GameAllowOperation = !0, null != NPCKingController.Instance ? NPCKingController.Instance.onJailSceneFinish() : null != KingController.Instance && KingController.Instance.onJailSceneFinish(), r.default.Inst.curChannel == o.Channel.tt && (a.default.Instance.stopRecord(), a.default.Instance.showSharePanel())
					}.bind(this)),
					u = cc.sequence([c, l, d, h]);
				CameraManager.Instance.node.runAction(u)
			}
		}), cc._RF.pop()
	}, {
		"../RecorderMgr": "RecorderMgr",
		"../SDK/SDkMgr": "SDkMgr",
		LevelManager: "LevelManager"
	}],
	KillerController: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "683dexze81J4rV58WnMrf/B", "KillerController");
		var o = e("./SDK/SDkMgr"),
			r = s(o),
			a = s(e("./YaoshuiMgr")),
			i = s(e("./RecorderMgr"));

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		window.KillerController = {
			Instance: null
		};
		var c = e("LevelManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				ControllerType: {
					type: cc.Enum(c.AvatarControllerType),
					default: c.AvatarControllerType.BlackKiller
				},
				ControllerAnimation: cc.Animation,
				ControllerHeadSprite: cc.Sprite,
				ControllerHandSprite: cc.Sprite,
				fishHandSprite: cc.SpriteFrame,
				micHandSprite: cc.SpriteFrame,
				ControllerMHandRoot: cc.Node,
				DefaultMHandAngle: 0,
				HeadLevelSpriteFrames: [cc.SpriteFrame]
			},
			statics: {
				isShiWanYu: !1
			},
			onLoad: function() {
				KillerController.Instance = this, "true" == cc.sys.localStorage.getItem("HasGetGift") && this.ChangeToMic(), KillerController.isShiWanYu && this.ChangeToFish()
			},
			start: function() {
				LevelManager.Instance.GameCurrentOperationMode = c.GameOperationMode.Attack, this.DefaultMHandAngle = this.ControllerMHandRoot.angle, LevelManager.Instance.HealthProgressBar.progress = 0
			},
			ChangeToFish: function() {
				KillerController.isShiWanYu = !0, this.ControllerHandSprite.spriteFrame = this.fishHandSprite
			},
			ChangeToMic: function() {
				KillerController.isShiWanYu = !1, this.ControllerHandSprite.spriteFrame = this.micHandSprite
			},
			onDestroy: function() {
				KillerController.Instance = null
			},
			update: function(e) {
				if (LevelManager.Instance.GameAllowOperation) {
					var t = LevelManager.Instance.AttackProgressBar.progress;
					t >= 0 && t < .35 ? this.ControllerHeadSprite.spriteFrame = this.HeadLevelSpriteFrames[0] : t >= .35 && t < .65 ? this.ControllerHeadSprite.spriteFrame = this.HeadLevelSpriteFrames[1] : t >= .65 && t <= 1 && (this.ControllerHeadSprite.spriteFrame = this.HeadLevelSpriteFrames[2])
				}
				LevelManager.Instance.AllowAvatarControllerMove && (this.node.position.sub(NPCKingController.Instance.node.position).mag() >= LevelManager.Instance.AvatarControllerDistanceMinLimit ? this.node.x += LevelManager.Instance.AvatarControllerFastMoveSpeed * e : this.node.x += LevelManager.Instance.AvatarControllerMoveSpeed * e);
				if (t <= 0) this.ControllerMHandRoot.angle = this.DefaultMHandAngle;
				else {
					if (!LevelManager.Instance.GameAllowOperation) return;
					t < 1 && (this.ControllerMHandRoot.angle += LevelManager.Instance.KillerAttackHandMoveSpeed, 0 == t.toFixed(2) && cc.audioEngine.playEffect(AssetManager.Instance.AudioClips[1]))
				}
			},
			AFUNC_KillColourBackground: function() {
				try {
					window.ArcadeAdapter && window.ArcadeAdapter.onAssassinKilledKing && window.ArcadeAdapter.onAssassinKilledKing()
				} catch (gvErr) {}
				ColourBackground.Instance.Show(), this.scheduleOnce(function() {
					r.default.Inst.showInsert()
				}, 1), this.scheduleOnce(function() {
					var e = cc.instantiate(AssetManager.Instance.ControllerPrefabs[1]);
					e.parent = LevelManager.Instance.SceneContentNode, e.position = NPCKingController.Instance.node.position, NPCKingController.Instance.Death(this.ControllerType), LevelManager.Instance.CreateRandomNPCKiller(), a.default.Instance.ShowYaoshui(), this.node.destroy(), r.default.Inst.curChannel == o.Channel.tt && (i.default.Instance.stopRecord(), i.default.Instance.showSharePanel())
				}, 1)
			},
			onNonSafeKingDiscoverFunction: function() {
				this.scheduleOnce(function() {
					r.default.Inst.showInsert()
				}, 1), LevelManager.Instance.GameCurrentOperationScene = c.GameSceneBlockType.Jail, LevelManager.Instance.AllowAvatarControllerMove = !1, LevelManager.Instance.GameAllowOperation = !1, LevelManager.Instance.CreateArmyController(this.node, this.ControllerType), cc.audioEngine.playEffect(AssetManager.Instance.AudioClips[4]), this.ControllerAnimation.play("DiscoverJail")
			},
			onSafeKingDiscoverFunction: function() {
				LevelManager.Instance.AttackProgressBar.progress = 0, this.ControllerAnimation.play("Stay"), cc.audioEngine.playEffect(AssetManager.Instance.AudioClips[6])
			},
			onSafeKingDiscoverFunctionOver: function() {
				this.ControllerAnimation.play("Walk")
			}
		}), cc._RF.pop()
	}, {
		"./RecorderMgr": "RecorderMgr",
		"./SDK/SDkMgr": "SDkMgr",
		"./YaoshuiMgr": "YaoshuiMgr",
		LevelManager: "LevelManager"
	}],
	KingController: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "ce8b97sAJtD86GzWt4CKlwk", "KingController");
		var o = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(e("./SDK/SDkMgr"));
		window.KingController = {
			Instance: null
		};
		var r = e("LevelManager"),
			a = e("DeathController"),
			i = null;
		cc.Class({
			extends: cc.Component,
			properties: {
				AllowKingAgeChange: {
					type: Boolean,
					default: !0
				},
				DeathController: a,
				ControllerAnimation: cc.Animation,
				ControllerDrinkHand: cc.Node,
				ControllerHeadAgeSprite: {
					type: cc.Sprite,
					default: null
				},
				ControllerHeadAgeSpriteFrames: {
					type: [cc.SpriteFrame],
					default: []
				}
			},
			onLoad: function() {
				KingController.Instance = this
			},
			start: function() {
				CameraManager.Instance.CameraTarget = this.node, LevelManager.Instance.GameCurrentOperationMode = r.GameOperationMode.Defense, LevelManager.Instance.GameAllowOperation = !0
			},
			onDestroy: function() {
				KingController.Instance = null
			},
			update: function(e) {
				LevelManager.Instance.AllowAvatarControllerMove && (this.node.x += LevelManager.Instance.AvatarControllerMoveSpeed * e)
			},
			lateUpdate: function(e) {
				if (this.AllowKingAgeChange) {
					var t = LevelManager.Instance.HealthProgressBar.progress;
					t > .92 && t <= 1 ? this.ControllerHeadAgeSprite.spriteFrame = this.ControllerHeadAgeSpriteFrames[0] : t > .85 && t <= .92 ? this.ControllerHeadAgeSprite.spriteFrame = this.ControllerHeadAgeSpriteFrames[1] : t > .78 && t <= .85 ? this.ControllerHeadAgeSprite.spriteFrame = this.ControllerHeadAgeSpriteFrames[2] : t > .72 && t <= .78 ? this.ControllerHeadAgeSprite.spriteFrame = this.ControllerHeadAgeSpriteFrames[3] : t > .68 && t <= .72 ? this.ControllerHeadAgeSprite.spriteFrame = this.ControllerHeadAgeSpriteFrames[4] : t > .63 && t <= .68 ? this.ControllerHeadAgeSprite.spriteFrame = this.ControllerHeadAgeSpriteFrames[5] : t > .58 && t <= .63 ? this.ControllerHeadAgeSprite.spriteFrame = this.ControllerHeadAgeSpriteFrames[6] : t > .55 && t <= .58 ? this.ControllerHeadAgeSprite.spriteFrame = this.ControllerHeadAgeSpriteFrames[7] : t > .52 && t <= .55 ? this.ControllerHeadAgeSprite.spriteFrame = this.ControllerHeadAgeSpriteFrames[8] : t > .48 && t <= .52 ? this.ControllerHeadAgeSprite.spriteFrame = this.ControllerHeadAgeSpriteFrames[9] : t > .45 && t <= .48 ? this.ControllerHeadAgeSprite.spriteFrame = this.ControllerHeadAgeSpriteFrames[10] : t > .4 && t <= .45 ? this.ControllerHeadAgeSprite.spriteFrame = this.ControllerHeadAgeSpriteFrames[11] : t > .34 && t <= .4 ? this.ControllerHeadAgeSprite.spriteFrame = this.ControllerHeadAgeSpriteFrames[12] : t > .28 && t <= .34 ? this.ControllerHeadAgeSprite.spriteFrame = this.ControllerHeadAgeSpriteFrames[13] : t > .22 && t <= .28 ? this.ControllerHeadAgeSprite.spriteFrame = this.ControllerHeadAgeSpriteFrames[14] : t > .16 && t <= .22 ? this.ControllerHeadAgeSprite.spriteFrame = this.ControllerHeadAgeSpriteFrames[15] : t > .1 && t <= .16 ? this.ControllerHeadAgeSprite.spriteFrame = this.ControllerHeadAgeSpriteFrames[16] : t > 0 && t <= .1 && (this.ControllerHeadAgeSprite.spriteFrame = this.ControllerHeadAgeSpriteFrames[17])
				}
			},
			LeftLookDiscover: function() {
				this.node.position.sub(NPCKillerController.Instance.node.position).mag() >= LevelManager.Instance.AvatarControllerDistanceMinLimit || (LevelManager.Instance.AllowAvatarControllerMove = !1, this.ControllerAnimation.play("LeftLook"), this.unschedule(i), i = function() {
					this.LeftLookDiscoverOver()
				}, this.scheduleOnce(i, LevelManager.Instance.AllowKingLeftLookTime), NPCKillerController.Instance.onKingDiscoverFunction())
			},
			LeftLookDiscoverOver: function() {
				LevelManager.Instance.GameCurrentOperationScene != r.GameSceneBlockType.Jail && (this.unschedule(i), LevelManager.Instance.AllowAvatarControllerMove = !0, LevelManager.Instance.PointerIsDown = !1, this.ControllerAnimation.play("Walk"), NPCKillerController.Instance.onKingDiscoverFunctionOver())
			},
			Death: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = 0,
					o = LevelManager.Instance.HealthProgressBar.progress;
				o > .7 && o <= 1 ? n = 0 : o > .5 && o <= .7 ? n = 1 : o > .2 && o <= .5 ? n = 2 : o > 0 && o <= .2 && (n = 3), this.DeathController.DeathFunction(e, t, n), this.node.destroy()
			},
			OldDeath: function() {
				this.scheduleOnce(function() {
					o.default.Inst.showInsert()
				}, 1), ColourBackground.Instance.Show(), this.scheduleOnce(function() {
					var e = 0,
						t = LevelManager.Instance.HealthProgressBar.progress;
					switch (t > .7 && t <= 1 ? e = 0 : t > .5 && t <= .7 ? e = 1 : t > .2 && t <= .5 ? e = 2 : t > 0 && t <= .2 && (e = 3), this.DeathController.DeathFunction(killer, !1, e), NPCKillerController.Instance.ControllerType) {
						case r.AvatarControllerType.YellowKiller:
							(n = cc.instantiate(AssetManager.Instance.KingControllerPrefabs[3])).parent = LevelManager.Instance.SceneContentNode, n.position = this.node.position;
							break;
						case r.AvatarControllerType.GreenDrinkSteward:
							var n;
							(n = cc.instantiate(AssetManager.Instance.KingControllerPrefabs[5])).parent = LevelManager.Instance.SceneContentNode, n.position = this.node.position
					}
					var o = cc.instantiate(AssetManager.Instance.ControllerPrefabs[2]);
					o.parent = LevelManager.Instance.SceneContentNode, o.position = cc.v2(this.node.x - 700, this.node.y), NPCKillerController.Instance.node.destroy(), LevelManager.Instance.GameAllowOperation = !0, LevelManager.Instance.AllowAvatarControllerMove = !0, this.node.destroy()
				}, 1)
			},
			DrinkRedWine: function() {
				LevelManager.Instance.GameAllowOperation = !1, LevelManager.Instance.AllowAvatarControllerMove = !1, this.ControllerAnimation.play("Drink"), this.scheduleOnce(function() {
					ColourBackground.Instance.Show(cc.color(255, 255, 128)), this.scheduleOnce(function() {
						this.ControllerAnimation.play("Walk"), LevelManager.Instance.HealthProgressBar.node.active = !1, this.ControllerHeadAgeSprite.spriteFrame = this.ControllerHeadAgeSpriteFrames[0], NPCKillerController.Instance.AllowCurrentControllerMove = !1, NPCKillerController.Instance.ControllerMHandRoot.angle = NPCKillerController.Instance.DefaultMHandAngle, NPCKillerController.Instance.ControllerHeadSprite.spriteFrame = NPCKillerController.Instance.HeadLevelSpriteFrames[0], NPCKillerController.Instance.ControllerAnimation.play("Walk"), LevelManager.Instance.AllowAvatarControllerMove = !0, this.ControllerDrinkHand.active = !1, this.scheduleOnce(function() {
							NPCKillerController.Instance.destroy()
						}, 4.5), this.scheduleOnce(function() {
							LevelManager.Instance.CreateRandomNPCKiller(), LevelManager.Instance.GameAllowOperation = !0
						}, 5)
					}, 1)
				}, 3.2)
			},
			DrinkGreenWine: function() {
				LevelManager.Instance.GameAllowOperation = !1, LevelManager.Instance.AllowAvatarControllerMove = !1, this.ControllerAnimation.play("Drink"), this.scheduleOnce(function() {
					ColourBackground.Instance.Show(), this.scheduleOnce(function() {
						this.Death(r.AvatarControllerType.GreenDrinkSteward);
						var e = cc.instantiate(AssetManager.Instance.KingControllerPrefabs[r.AvatarControllerType.GreenDrinkSteward]);
						e.parent = LevelManager.Instance.SceneContentNode, e.position = KingController.Instance.node.position;
						var t = cc.instantiate(AssetManager.Instance.ControllerPrefabs[2]);
						t.parent = LevelManager.Instance.SceneContentNode, t.position = cc.v2(this.node.x - 700, this.node.y), NPCKillerController.Instance.node.destroy(), LevelManager.Instance.GameAllowOperation = !0, LevelManager.Instance.AllowAvatarControllerMove = !0
					}, 1)
				}, 3.2)
			},
			onJailSceneFinish: function() {
				this.LeftLookDiscoverOver()
			}
		}), cc._RF.pop()
	}, {
		"./SDK/SDkMgr": "SDkMgr",
		DeathController: "DeathController",
		LevelManager: "LevelManager"
	}],
	KingStoryLobbySceneBlockCheckPoint: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "f77e0cfBEdGwZok6DIX19ip", "KingStoryLobbySceneBlockCheckPoint");
		var o = e("LevelManager"),
			r = e("KingController");
		cc.Class({
			extends: cc.Component,
			properties: {},
			onBeginContact: function(e, t, n) {
				null != n.getComponent(r) && LevelManager.Instance.GameCurrentOperationMode == o.GameOperationMode.Attack && (LevelManager.Instance.onKingEnterKingStoryLobbyDoor(), this.node.destroy())
			}
		}), cc._RF.pop()
	}, {
		KingController: "KingController",
		LevelManager: "LevelManager"
	}],
	LevelManager: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "3d5e4nZjG5BP55eqz4dWeWE", "LevelManager");
		var o = i(e("../SDK/SDkMgr")),
			r = i(e("../GiftBoxMgr")),
			a = i(e("../YaoshuiMgr"));
		i(e("../SDK/TTSdk")), i(e("../RecorderMgr"));

		function i(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		window.LevelManager = {
			Instance: null
		};
		var s = e("LevelSceneManager"),
			c = cc.Enum({
				Lobby: 0,
				Jail: 1,
				Story: 2
			}),
			l = cc.Enum({
				Attack: 0,
				Defense: 1
			}),
			d = cc.Enum({
				OldKing: 0,
				BlackKing: 1,
				BlackKiller: 2,
				YellowKiller: 3,
				RedDrinkSteward: 4,
				GreenDrinkSteward: 5,
				Clown: 6,
				Woman: 7,
				Army: 8
			});
		cc.Enum({
			TooYoung: 0,
			Young: 1,
			Old: 2,
			TooOld: 3
		});
		t.exports = {
			GameSceneBlockType: c,
			GameOperationMode: l,
			AvatarControllerType: d
		}, cc.Class({
			extends: cc.Component,
			properties: {
				SceneMainAudioSource: cc.AudioSource,
				SceneMainCameraNode: cc.Node,
				SceneCanvasContentNode: cc.Node,
				SceneBlockContentNode: cc.Node,
				SceneContentNode: cc.Node,
				AllowAvatarControllerMove: {
					type: Boolean,
					default: !0
				},
				GameAllowOperation: {
					type: Boolean,
					default: !0
				},
				PointerIsDown: {
					type: Boolean,
					default: !1
				},
				GameCurrentOperationScene: {
					type: c,
					default: c.Lobby
				},
				_GameCurrentOperationMode: {
					type: l,
					default: l.Attack
				},
				GameCurrentOperationMode: {
					get: function() {
						return this._GameCurrentOperationMode
					},
					set: function(e) {
						this._GameCurrentOperationMode = e, this.onGameCurrentOperationModeChange()
					}
				},
				RestartGameContent: cc.Node,
				BackgroundRaycast: cc.Node,
				AttackProgressBar: cc.ProgressBar,
				HealthProgressBar: cc.ProgressBar,
				AttackProgressBarMoveSpeed: 0,
				HealthProgressBarMoveSpeed: 0,
				AvatarControllerMoveSpeed: 0,
				AvatarControllerFastMoveSpeed: 0,
				KillerAttackHandMoveSpeed: 0,
				AllowKingLeftLookTime: 2,
				AvatarControllerDistanceMinLimit: 500,
				GameCreateNPCKillerIndex: 0
			},
			onLoad: function() {
				cc.director.getPhysicsManager().enabled = !0, LevelManager.Instance = this, o.default.Inst.init(), this.scheduleOnce(function() {
					o.default.Inst.showBanner()
				}, 3), this.schedule(function() {
					o.default.Inst.showBanner()
				}, 30)
			},
			start: function() {
				cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function(e) {
					switch (e.keyCode) {
						case cc.macro.KEY.c:
							NPCKingController.Instance.ControllerAnimation.play("FastLeftLook")
					}
				}, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function(e) {
					switch (e.keyCode) {
						case cc.macro.KEY.c:
					}
				}, this)
			},
			update: function(e) {
				if (this.GameAllowOperation) switch (this.GameCurrentOperationMode) {
					case l.Attack:
						if (this.PointerIsDown) {
							if (KillerController.Instance.node.position.sub(NPCKingController.Instance.node.position).mag() >= this.AvatarControllerDistanceMinLimit) return;
							if (this.AttackProgressBar.progress < 1) {
								if (NPCKingController.Instance.CurrentIsDiscover) return;
								this.AttackProgressBar.progress += this.AttackProgressBarMoveSpeed * e
							} else this.AttackProgressBar.progress = 1, this.GameAllowOperation = !1, KillerController.Instance.ControllerAnimation.play("Attack")
						}
						break;
					case l.Defense:
						if (!this.AllowAvatarControllerMove) return;
						this.HealthProgressBar.progress -= this.HealthProgressBarMoveSpeed * e
				}
			},
			onRaycastTouchDown: function(e) {
				if (this.PointerIsDown = !0, this.GameAllowOperation) switch (this.GameCurrentOperationMode) {
					case l.Attack:
						if (KillerController.Instance.node.position.sub(NPCKingController.Instance.node.position).mag() >= this.AvatarControllerDistanceMinLimit) return;
						break;
					case l.Defense:
						KingController.Instance.LeftLookDiscover()
				}
			},
			onRaycastTouchUp: function(e) {
				if (this.PointerIsDown) switch (this.PointerIsDown = !1, this.GameCurrentOperationMode) {
					case l.Attack:
						this.GameAllowOperation && this.AttackProgressBar.progress < 1 && (this.AttackProgressBar.progress = 0);
						break;
					case l.Defense:
						KingController.Instance.LeftLookDiscoverOver()
				}
			},
			onKingEnterKingStoryLobbyDoor: function() {
				this.HealthProgressBar.node.active && this.HealthProgressBar.progress <= 0 ? (this.AllowAvatarControllerMove = !1, this.GameAllowOperation = !1, KingController.Instance.ControllerAnimation.play("OldDeath")) : (ColourBackground.Instance.Show(cc.color(255, 255, 255)), this.scheduleOnce(function() {
					this.GameAllowOperation = !1, LevelSceneManager.Instance.StartStoryScene(s.GameStorySceneType.King), KingController.Instance.node.active = !1, NPCKillerController.Instance.node.active = !1
				}, 1))
			},
			onGameOver: function() {
				try {
					window.ArcadeAdapter && window.ArcadeAdapter.onGameOver && window.ArcadeAdapter.onGameOver(this)
				} catch (gvErr) {}
				this.scheduleOnce(function() {
					o.default.Inst.showInsert()
				}, 1), this.RestartGameContent.active = !0, KingController.Instance && KingController.Instance.node.destroy(), NPCKillerController.Instance && NPCKillerController.Instance.node.destroy(), this.AttackProgressBar.node.active = !1, r.default.Instance.HideBox(), this.HealthProgressBar.node.active = !1, this.enabled = !1
			},
			CreateArmyController: function(e, t) {
				var n = cc.instantiate(AssetManager.Instance.ControllerPrefabs[8]);
				n.parent = this.SceneContentNode, n.position = cc.v2(e.x - 800, e.y);
				var o = n.getComponent("ArmyGroupController");
				o.TargetAvatarNode = e, o.TargetAvatarControllerType = t
			},
			CreateRandomNPCKiller: function() {
				if (null == NPCKillerController.Instance) {
					var e = cc.instantiate(AssetManager.Instance.ControllerPrefabs[3]);
					if (this.HealthProgressBar.progress >= .2) {
						switch (this.GameCreateNPCKillerIndex) {
							case 0:
								e = cc.instantiate(AssetManager.Instance.ControllerPrefabs[3]);
								break;
							case 1:
								e = cc.instantiate(AssetManager.Instance.ControllerPrefabs[6]);
								break;
							case 2:
								e = cc.instantiate(AssetManager.Instance.ControllerPrefabs[5]);
								break;
							case 3:
								e = this.HealthProgressBar.node.active ? cc.instantiate(AssetManager.Instance.ControllerPrefabs[4]) : cc.instantiate(AssetManager.Instance.ControllerPrefabs[3]);
								break;
							case 4:
								e = cc.instantiate(AssetManager.Instance.ControllerPrefabs[7])
						}
						this.GameCreateNPCKillerIndex++, this.GameCreateNPCKillerIndex >= 5 && (this.GameCreateNPCKillerIndex = 0)
					} else {
						switch (this.GameCreateNPCKillerIndex) {
							case 0:
								e = cc.instantiate(AssetManager.Instance.ControllerPrefabs[3]);
								break;
							case 1:
								e = cc.instantiate(AssetManager.Instance.ControllerPrefabs[5])
						}
						this.GameCreateNPCKillerIndex++, this.GameCreateNPCKillerIndex >= 2 && (this.GameCreateNPCKillerIndex = 0)
					}
					e.parent = this.SceneContentNode;
					var t = KingController.Instance.node.position;
					t.x -= 1300, e.position = t
				}
			},
			onGameCurrentOperationModeChange: function() {
				switch (this.AttackProgressBar.progress = 0, this.HealthProgressBar.progress = 1, this.GameCurrentOperationMode) {
					case l.Attack:
						this.AttackProgressBar.node.active = !0, r.default.Instance.ShowBox(), this.HealthProgressBar.node.active = !1, a.default.Instance.Hide();
						break;
					case l.Defense:
						this.AttackProgressBar.node.active = !1, r.default.Instance.HideBox(), this.HealthProgressBar.node.active = !0
				}
			}
		}), cc._RF.pop()
	}, {
		"../GiftBoxMgr": "GiftBoxMgr",
		"../RecorderMgr": "RecorderMgr",
		"../SDK/SDkMgr": "SDkMgr",
		"../SDK/TTSdk": "TTSdk",
		"../YaoshuiMgr": "YaoshuiMgr",
		LevelSceneManager: "LevelSceneManager"
	}],
	LevelSceneManager: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "35f870/oKVDEK4PwGpiGAYq", "LevelSceneManager"), window.LevelSceneManager = {
			Instance: null
		};
		var o = cc.Enum({
				Lobby: 0,
				KingStoryLobby: 1
			}),
			r = cc.Enum({
				King: 0,
				WC: 1,
				Love: 2
			});
		t.exports = {
			GameSceneBlockPrefabType: o,
			GameStorySceneType: r
		}, cc.Class({
			extends: cc.Component,
			properties: {
				CreatSceneBlockInterval: 5300,
				ScenesObjectParent: cc.Node,
				GameSceneBlockPrefabs: {
					type: [cc.Prefab],
					default: []
				},
				GameCurrentSceneObjects: {
					type: [cc.Node],
					default: []
				},
				GameStorySceneObjects: {
					type: [cc.Node],
					default: []
				}
			},
			onLoad: function() {
				LevelSceneManager.Instance = this
			},
			CreateNextScene: function(e) {
				var t;
				t = null != this.GameCurrentSceneObjects[1] ? this.GameCurrentSceneObjects[1].position : this.GameCurrentSceneObjects[0].position;
				var n = cc.instantiate(this.GameSceneBlockPrefabs[e]);
				n.parent = this.ScenesObjectParent, n.x += t.x + this.CreatSceneBlockInterval, null != this.GameCurrentSceneObjects[0] && null != this.GameCurrentSceneObjects[1] ? (this.GameCurrentSceneObjects[0].destroy(), this.GameCurrentSceneObjects[0] = this.GameCurrentSceneObjects[1], this.GameCurrentSceneObjects[1] = n) : this.GameCurrentSceneObjects[1] = n
			},
			StartStoryScene: function(e) {
				LevelManager.Instance.onGameOver(), this.GameStorySceneObjects[e].active = !0
			}
		}), cc._RF.pop()
	}, {}],
	LobbySceneBlockCheckPoint: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "58e14iGRztFuIrFqHEjwj/v", "LobbySceneBlockCheckPoint");
		var o = e("LevelManager"),
			r = e("LevelSceneManager");
		cc.Class({
			extends: cc.Component,
			properties: {},
			onBeginContact: function(e, t, n) {
				this.node.destroy(), LevelManager.Instance.GameCurrentOperationMode == o.GameOperationMode.Defense && LevelManager.Instance.HealthProgressBar.progress <= .5 ? LevelSceneManager.Instance.CreateNextScene(r.GameSceneBlockPrefabType.KingStoryLobby) : LevelManager.Instance.GameCurrentOperationMode != o.GameOperationMode.Defense || LevelManager.Instance.HealthProgressBar.node.active || LevelManager.Instance.AttackProgressBar.node.active ? LevelSceneManager.Instance.CreateNextScene(r.GameSceneBlockPrefabType.Lobby) : LevelSceneManager.Instance.CreateNextScene(r.GameSceneBlockPrefabType.KingStoryLobby)
			}
		}), cc._RF.pop()
	}, {
		LevelManager: "LevelManager",
		LevelSceneManager: "LevelSceneManager"
	}],
	M4399Sdk: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "da6e1/kABZBHYm+w1V2p5HA", "M4399Sdk"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = e("./SDkMgr"),
			r = function() {
				function e() {
					this.hasInit = !1, this.isVideoReady = !1
				}
				return Object.defineProperty(e, "Inst", {
					get: function() {
						return null == e._INST && (e._INST = new e), e._INST
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.init = function() {
					var t = this;
					if (!this.hasInit) {
						/* this.hasInit = !0, console.log("init 4399");
						var n = document.createElement("script");
						n.setAttribute("type", "text/javascript"), n.src = e.sdk_script_url, document.body.appendChild(n), document.title = e.app_name, setTimeout(function() {
							t.loadVideo()
						}, 500) */
						console.log("2222",t);
					}
				}, e.prototype.isLogin = function() {
					return window.h5api.isLogin()
				}, e.prototype.login = function() {
					window.h5api.login(function(e) {
						console.log("login:", JSON.stringify(e))
					})
				}, e.prototype.loadVideo = function() {
					var e = this,
						t = setInterval(function() {
							window.h5api && (clearInterval(t), window.h5api.canPlayAd(function(t) {
								console.log("canPlayAd", JSON.stringify(t)), e.isVideoReady = t.canPlayAd, e.isVideoReady ? o.default.Inst.noAds = !1 : o.default.Inst.noAds = !0, console.log("SDkMgr.Inst.noAds", o.default.Inst.noAds)
							}))
						}, 100)
				}, e.prototype.canShowVideo = function() {
					return console.log("canShowVideo:" + this.isVideoReady), this.canShowVideo || this.loadVideo(), this.isVideoReady
				}, e.prototype.showVideo = function(e) {
					var t = this;
					window.h5api.playAd(function(n) {
						console.log("showVideo data:" + JSON.stringify(n)), 1e4 === n.code ? (console.log("start video"), cc.game.pause()) : 10001 === n.code ? (console.log("end video"), cc.game.resume(), t.loadVideo(), e && e(o.AdsCode.finish)) : (t.loadVideo(), console.log("error video"), e && e(o.AdsCode.error))
					})
				}, e.prototype.share = function() {
					window.h5api.share()
				}, e.prototype.submitRanking = function(e) {
					window.h5api.submitRanking(e, function(e) {
						console.log("submitRanking:", JSON.stringify(e))
					})
				}, e.prototype.showRanking = function() {
					window.h5api.showRanking()
				}, e.app_name = "Bảo vệ nhà vua 2", e.app_id = "100059719", /* e.sdk_script_url = "http://h.api.4399.com/h5mini-2.0/h5api-interface.php", */ e
				console.log("1111",e);
			}();
		n.default = r, cc._RF.pop()
	}, {
		"./SDkMgr": "SDkMgr"
	}],
	MTADemo: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "e0fddHBi3tDcb5wdyer7z8j", "MTADemo"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			r = o.ccclass,
			a = (o.property, e("./MtaSdk")),
			i = function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.login = function() {
					a.default.Inst.init(), console.log("login")
				}, t.prototype.event1 = function() {
					a.default.Inst.event("event3"), console.log("event3")
				}, t.prototype.event2 = function() {
					a.default.Inst.event("event4", {
						query: "\u7279\u65af\u62c9"
					}), console.log("event4")
				}, t = __decorate([r], t)
			}(cc.Component);
		n.default = i, cc._RF.pop()
	}, {
		"./MtaSdk": "MtaSdk"
	}],
	MtaSdk: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "24864bdWpFHHbfiKne3O5u6", "MtaSdk"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			r = o.ccclass,
			a = (o.property, e("mta-h5-analysis-2.0.15")),
			i = function() {
				function e() {}
				var t;
				return t = e, Object.defineProperty(e, "Inst", {
					get: function() {
						return null == t._INST && (t._INST = new t), t._INST
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.init = function(e, t) {
				}, e.prototype.event = function(e, t) {
				}, e.mta_sid = "500698613", e.mta_cid = "500698614", e = t = __decorate([r], e)
			}();
		n.default = i, cc._RF.pop()
	}, {
		"mta-h5-analysis-2.0.15": "mta-h5-analysis-2.0.15"
	}],
	NPCKillerController: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "48792WNRgRKcry5/N52Ucu+", "NPCKillerController");
		var o = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(e("./SDK/SDkMgr"));
		window.NPCKillerController = {
			Instance: null
		};
		var r = e("LevelManager"),
			a = e("LevelSceneManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				ControllerType: {
					type: cc.Enum(r.AvatarControllerType),
					default: r.AvatarControllerType.BlackKiller
				},
				DefaultMHandAngle: 0,
				StayGameObject: cc.Node,
				ControllerAttackProgress: 0,
				ControllerAnimation: cc.Animation,
				ControllerMHandRoot: cc.Node,
				AllowCurrentControllerMove: {
					type: Boolean,
					default: !0
				},
				_ControllerAttackOperation: {
					type: Boolean,
					default: !1
				},
				ControllerAttackOperation: {
					get: function() {
						return this._ControllerAttackOperation
					},
					set: function(e) {
						this._ControllerAttackOperation = e
					}
				},
				ControllerIsAttacked: {
					type: Boolean,
					default: !1
				},
				ControllerHeadSprite: cc.Sprite,
				HeadLevelSpriteFrames: [cc.SpriteFrame]
			},
			onLoad: function() {
				NPCKillerController.Instance = this
			},
			start: function() {
				this.DefaultMHandAngle = this.ControllerMHandRoot.angle, this.scheduleOnce(this.RandomKillerAnims, 2)
			},
			onDestroy: function() {
				NPCKillerController.Instance = null
			},
			update: function(e) {
				var t;
				if (KingController.Instance && (t = this.node.position.sub(KingController.Instance.node.position).mag()), this.ControllerAttackOperation) {
					if (!KingController.Instance) return;
					t < LevelManager.Instance.AvatarControllerDistanceMinLimit && (this.ControllerAttackProgress += LevelManager.Instance.AttackProgressBarMoveSpeed * e)
				}
				var n = this.ControllerAttackProgress;
				if (LevelManager.Instance.GameAllowOperation && null != this.HeadLevelSpriteFrames[0] && (n >= 0 && n < .35 ? this.ControllerHeadSprite.spriteFrame = this.HeadLevelSpriteFrames[0] : n >= .35 && n < .65 ? this.ControllerHeadSprite.spriteFrame = this.HeadLevelSpriteFrames[1] : n >= .65 && n <= 1 && (this.ControllerHeadSprite.spriteFrame = this.HeadLevelSpriteFrames[2])), LevelManager.Instance.AllowAvatarControllerMove && this.AllowCurrentControllerMove) {
					if (!KingController.Instance) return;
					t >= LevelManager.Instance.AvatarControllerDistanceMinLimit ? this.node.x += LevelManager.Instance.AvatarControllerFastMoveSpeed * e : this.node.x += LevelManager.Instance.AvatarControllerMoveSpeed * e
				}
				if (n <= 0) this.ControllerMHandRoot.angle = this.DefaultMHandAngle;
				else {
					if (!LevelManager.Instance.GameAllowOperation) return;
					n < 1 && (this.ControllerMHandRoot.angle += LevelManager.Instance.KillerAttackHandMoveSpeed)
				}
				if (n >= 1) {
					if (n = 1, this.ControllerIsAttacked) return;
					this.ControllerIsAttacked = !0, this.ControllerAnimation.play("Attack")
				}
			},
			RandomKillerAnims: function() {
				this.unschedule(this.RandomKillerAnimsCallback), this.RandomKillerAnimsCallback = this.scheduleOnce(function() {
					this.RandomKillerAnims()
				}, Math.round(Math.round(3 * Math.random() + 2))), this.ControllerAttackOperation = !0
			},
			onKingDiscoverFunction: function() {
				switch (this.ControllerType) {
					case r.AvatarControllerType.RedDrinkSteward:
					case r.AvatarControllerType.GreenDrinkSteward:
					case r.AvatarControllerType.Clown:
					case r.AvatarControllerType.Woman:
						return void this.DiscoverJail()
				}
				var e = Math.round(10 * Math.random());
				this.ControllerAttackOperation = !1, this.ControllerMHandRoot.angle >= 25 && e >= 7 ? this.DiscoverJail() : this.DiscoverStay()
			},
			onKingDiscoverFunctionOver: function() {
				LevelManager.Instance.GameCurrentOperationScene != r.GameSceneBlockType.Jail && this.ControllerAnimation.play("Walk")
			},
			DiscoverJail: function() {
				this.scheduleOnce(function() {
					o.default.Inst.showInsert()
				}, 1), LevelManager.Instance.GameCurrentOperationScene = r.GameSceneBlockType.Jail, LevelManager.Instance.AllowAvatarControllerMove = !1, LevelManager.Instance.GameAllowOperation = !1, LevelManager.Instance.CreateArmyController(this.node, this.ControllerType), cc.audioEngine.playEffect(AssetManager.Instance.AudioClips[4]), this.ControllerAnimation.play("DiscoverJail"), this.ControllerAttackProgress = 0
			},
			DiscoverStay: function() {
				if (LevelManager.Instance.GameCurrentOperationScene != r.GameSceneBlockType.Jail) {
					switch (this.ControllerType) {
						case r.AvatarControllerType.YellowKiller:
							cc.audioEngine.playEffect(AssetManager.Instance.AudioClips[6])
					}
					this.ControllerMHandRoot.angle = this.DefaultMHandAngle, this.ControllerAnimation.play("Stay"), this.ControllerAttackOperation = !1, this.ControllerAttackProgress = 0
				}
			},
			AFUNC_KillColourBackground: function() {
				switch (this.ControllerType) {
					case r.AvatarControllerType.Clown:
					case r.AvatarControllerType.Woman:
					case r.AvatarControllerType.RedDrinkSteward:
					case r.AvatarControllerType.GreenDrinkSteward:
						ColourBackground.Instance.Show(cc.color(255, 255, 255));
						break;
					default:
						ColourBackground.Instance.Show()
				}
				this.scheduleOnce(function() {
					switch (this.ControllerType) {
						case r.AvatarControllerType.Clown:
							KingController.Instance.Death(this.ControllerType, !0), this.ControllerAnimation.play("GetCrown"), this.scheduleOnce(function() {
								ColourBackground.Instance.Show(cc.color(255, 255, 255))
							}, 1.8), this.scheduleOnce(function() {
								this.node.active = !1, LevelSceneManager.Instance.StartStoryScene(a.GameStorySceneType.WC)
							}, 2.3);
							break;
						case r.AvatarControllerType.Woman:
							this.node.active = !1, LevelSceneManager.Instance.StartStoryScene(a.GameStorySceneType.Love);
							break;
						case r.AvatarControllerType.RedDrinkSteward:
							KingController.Instance.DrinkRedWine(), this.StayGameObject && (this.StayGameObject.active = !1);
							break;
						case r.AvatarControllerType.GreenDrinkSteward:
							KingController.Instance.DrinkGreenWine(), this.StayGameObject && (this.StayGameObject.active = !1);
							break;
						default:
							KingController.Instance.Death(this.ControllerType);
							var e = cc.instantiate(AssetManager.Instance.KingControllerPrefabs[this.ControllerType]);
							e.parent = LevelManager.Instance.SceneContentNode, e.position = KingController.Instance.node.position;
							var t = cc.instantiate(AssetManager.Instance.ControllerPrefabs[2]);
							t.parent = LevelManager.Instance.SceneContentNode, t.position = cc.v2(this.node.x - 700, this.node.y), this.node.destroy()
					}
				}, 1)
			}
		}), cc._RF.pop()
	}, {
		"./SDK/SDkMgr": "SDkMgr",
		LevelManager: "LevelManager",
		LevelSceneManager: "LevelSceneManager"
	}],
	NPCKingController: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "75e9dkU4rhERab5E2YqTFnp", "NPCKingController"), window.NPCKingController = {
			Instance: null
		};
		var o = e("LevelManager"),
			r = e("DeathController");
		cc.Class({
			extends: cc.Component,
			properties: {
				DeathController: r,
				ControllerAnimation: cc.Animation,
				_CurrentIsDiscover: !1,
				CurrentIsDiscover: {
					get: function() {
						return this._CurrentIsDiscover
					},
					set: function(e) {
						this._CurrentIsDiscover = e, this.onControllerDiscoverStatusChange()
					}
				}
			},
			onLoad: function() {
				NPCKingController.Instance = this
			},
			start: function() {
				CameraManager.Instance.CameraTarget = this.node, this.scheduleOnce(this.RandomKingAnims, 2)
			},
			onDestroy: function() {
				NPCKingController.Instance = null
			},
			update: function(e) {
				LevelManager.Instance.AllowAvatarControllerMove && (this.node.x += LevelManager.Instance.AvatarControllerMoveSpeed * e)
			},
			Death: function(e) {
				this.DeathController.DeathFunction(e), this.node.destroy()
			},
			RandomKingAnims: function() {
				if (this.unschedule(this.RandomKingAnimsCallback), this.RandomKingAnimsCallback = this.scheduleOnce(function() {
						this.RandomKingAnims()
					}, Math.round(Math.round(5 * Math.random() + 3))), !(KillerController.Instance.node.position.sub(this.node.position).mag() >= LevelManager.Instance.AvatarControllerDistanceMinLimit || LevelManager.Instance.AttackProgressBar.progress >= .9 || this.CurrentIsDiscover)) {
					this.ControllerAnimation.play("Walk");
					var e = Math.round(Math.round(14 * Math.random()));
					e >= 0 && e <= 2 ? this.ControllerAnimation.play("Walk") : e >= 3 && e <= 5 ? this.ControllerAnimation.play("FastLeftLook") : e >= 6 && e <= 7 ? this.ControllerAnimation.play("UpLook") : e >= 8 && e <= 9 ? this.ControllerAnimation.play("Cough") : e >= 10 && e <= 13 && this.ControllerAnimation.play("LeftLook")
				}
			},
			AFUNC_LeftLook: function() {
				LevelManager.Instance.AttackProgressBar.progress >= .9 || (LevelManager.Instance.AllowAvatarControllerMove = !1, LevelManager.Instance.GameAllowOperation = !1, this.CurrentIsDiscover = !0, this.unschedule(this.AFUNC_LeftLookOverCallback), this.AFUNC_LeftLookOverCallback = this.scheduleOnce(this.AFUNC_LeftLookOver, Math.round(Math.round(2 * Math.random() + 2))))
			},
			AFUNC_LeftLookOver: function() {
				LevelManager.Instance.AttackProgressBar.progress >= .9 || LevelManager.Instance.GameCurrentOperationScene != o.GameSceneBlockType.Jail && (LevelManager.Instance.AllowAvatarControllerMove = !0, LevelManager.Instance.GameAllowOperation = !0, this.ControllerAnimation.play("Walk"), this.CurrentIsDiscover = !1)
			},
			AFUNC_Cough: function() {
				cc.audioEngine.playEffect(AssetManager.Instance.AudioClips[2])
			},
			onControllerDiscoverStatusChange: function() {
				this.CurrentIsDiscover ? LevelManager.Instance.AttackProgressBar.progress > 0 ? KillerController.Instance.onNonSafeKingDiscoverFunction() : KillerController.Instance.onSafeKingDiscoverFunction() : KillerController.Instance.onSafeKingDiscoverFunctionOver()
			},
			onJailSceneFinish: function() {
				this.AFUNC_LeftLookOver()
			}
		}), cc._RF.pop()
	}, {
		DeathController: "DeathController",
		LevelManager: "LevelManager"
	}],
	"NewScript - 001": [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "dc8e97/HMpO2okiw/YJe+38", "NewScript - 001"), cc.Class({
			extends: cc.Component,
			properties: {
				speed: 1,
				progressBarView: {
					type: cc.ProgressBar,
					default: null
				}
			},
			onLoad: function() {
				this._ping = !0, this.progressBarView.progress = 0
			},
			update: function(e) {
				this._updateProgressBar(this.progressBarView, e)
			},
			_updateProgressBar: function(e, t) {
				var n = e.progress;
				n < 1 && this._ping ? n += t * this.speed : (n -= t * this.speed, this._ping = n <= 0), e.progress = n
			}
		}), cc._RF.pop()
	}, {}],
	"NewScript - 002": [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "eee69I9jy1DZJQi05gpyh7h", "NewScript - 002"), cc.Class({
			extends: cc.Component,
			properties: {
				num: 1
			},
			start: function() {
				this.num = 3
			},
			update: function(e) {
				cc.log(this.num), this.num++
			}
		}), cc._RF.pop()
	}, {}],
	"NewScript - 003": [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "212f2UCsRhIvaqVf2HjJaMM", "NewScript - 003"), cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function() {
				cc.log(this.node.name)
			}
		}), cc._RF.pop()
	}, {}],
	"NewScript - 004": [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "7bb23y4eDJOxZhVLS6Vh7WH", "NewScript - 004"), cc.Class({
			extends: cc.Component,
			properties: {
				pfa: cc.Prefab
			},
			start: function() {
				var e;
				(e = cc.instantiate(this.pfa)).parent = this.node, e.destroy(), (e = cc.instantiate(this.pfa)).parent = this.node, e.destroy(), (e = cc.instantiate(this.pfa)).parent = this.node, e.destroy(), (e = cc.instantiate(this.pfa)).parent = this.node, e.destroy(), (e = cc.instantiate(this.pfa)).parent = this.node
			}
		}), cc._RF.pop()
	}, {}],
	NewScript: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "101e6+Hkq9BL5NEAvOwrBGN", "NewScript");
		var o = e("LevelManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				fftypa: {
					type: cc.Sprite,
					default: null
				},
				typa: {
					type: cc.Enum(o.GameSceneBlockType),
					default: o.GameSceneBlockType.Lobby
				}
			},
			onLoad: function() {
				this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
					console.log("gsfgfs")
				}, this)
			},
			start: function() {
				console.log(LevelManager.Instance.g_CreatSceneBlockLength)
			}
		}), cc._RF.pop()
	}, {
		LevelManager: "LevelManager"
	}],
	NodeZIndexController: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "1302fkISTFKLJIS08BOFBRP", "NodeZIndexController"), cc.Class({
			extends: cc.Component,
			properties: {
				noa: cc.Node
			},
			start: function() {
				cc.log(this.noa.zIndex), this.noa.zIndex = 1e4, cc.log(this.noa.zIndex)
			}
		}), cc._RF.pop()
	}, {}],
	OppoInsertAd: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "e24fdzjvtRKoJX/22j4Grrq", "OppoInsertAd"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = e("./OppoSdk"),
			r = cc._decorator,
			a = r.ccclass,
			i = r.property,
			s = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.insertNode = null, t.insertImage = null, t.insertTitle = null, t.insertDesc = null, t.insertAdData = void 0, t
				}
				var n;
				return __extends(t, e), n = t, Object.defineProperty(t, "Inst", {
					get: function() {
						return n._INST
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.onLoad = function() {
					n._INST = this
				}, t.prototype.start = function() {}, t.prototype.ShowInsert = function(e) {
					console.log("native ShowInsert"), this.insertNode.active = !0, this.insertAdData = e, this.LoadOnlineImage(this.insertImage, this.insertAdData.icon), this.insertTitle.string = this.insertAdData.title, this.insertDesc.string = this.insertAdData.desc
				}, t.prototype.CloseInsert = function() {
					this.insertNode.active = !1
				}, t.prototype.InsertAdBtnClick = function() {
					console.log("InsertAdBtnClick"), o.default.Inst.clickNativeInsert()
				}, t.prototype.CloseInsertBtnClick = function() {
					o.default.Inst.closeNativeInsert()
				}, t.prototype.LoadOnlineImage = function(e, t) {
					e.spriteFrame = void 0, cc.loader.load(t, function(t, n) {
						var o = new cc.SpriteFrame(n);
						e.spriteFrame = o
					})
				}, __decorate([i(cc.Node)], t.prototype, "insertNode", void 0), __decorate([i(cc.Sprite)], t.prototype, "insertImage", void 0), __decorate([i(cc.Label)], t.prototype, "insertTitle", void 0), __decorate([i(cc.Label)], t.prototype, "insertDesc", void 0), t = n = __decorate([a], t)
			}(cc.Component);
		n.default = s, cc._RF.pop()
	}, {
		"./OppoSdk": "OppoSdk"
	}],
	OppoSdk: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "7cba0Y0NiNHDJVY82hhOewf", "OppoSdk"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = e("./SDkMgr"),
			r = e("./OppoInsertAd"),
			a = function() {
				function e() {
					this.hasInit = !1, this.hasGetSDK = !1, this.bannerAd = null, this.insertAd = null, this.videoAd = null, this.nativeInsertAd = null, this.insertCallBack = null, this.videoCallBack = null, this.nativeInsertCallBack = null, this.isInsertLoaded = !1, this.isVideoLoaded = !1, this.isNativeInsertLoaded = !1, this.nativeInsertAdData = void 0
				}
				return Object.defineProperty(e, "Inst", {
					get: function() {
						return null == e._INST && (e._INST = new e), e._INST
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.init = function() {
					var e = this;
					this.hasInit || (this.hasInit = !0, cc.sys.localStorage.getItem("HasIcon") || cc.sys.localStorage.setItem("HasIcon", "false"), qg.hasShortcutInstalled({
						success: function(e) {
							0 == e ? (cc.sys.localStorage.setItem("HasIcon", "false"), console.log("\u521d\u59cb\u5316 \u6ca1\u6709\u56fe\u6807")) : (cc.sys.localStorage.setItem("HasIcon", "true"), console.log("\u521d\u59cb\u5316 \u5df2\u521b\u5efa\u56fe\u6807"))
						},
						fail: function(e) {},
						complete: function() {}
					}), setTimeout(function() {
						e.login()
					}, 500))
				}, e.prototype.login = function() {
					console.log("login"), cc.sys.platform == cc.sys.OPPO_GAME && (qg.login({
						success: function(e) {
							console.log("login success: ", JSON.stringify(e))
						},
						fail: function(e) {
							console.log("login fail: ", JSON.stringify(e))
						}
					}), this.initAds())
				}, e.prototype.hasIcon = function() {
					return "true" == cc.sys.localStorage.getItem("HasIcon")
				}, e.prototype.createIcon = function(e) {
					var t = this;
					qg.hasShortcutInstalled({
						success: function(n) {
							0 == n ? qg.installShortcut({
								success: function() {
									setTimeout(function() {
										t.checkHasIcon(e)
									}, 100)
								},
								fail: function(t) {
									e(o.AdsCode.cancel)
								},
								complete: function() {}
							}) : e(o.AdsCode.finish)
						},
						fail: function(e) {},
						complete: function() {}
					})
				}, e.prototype.checkHasIcon = function(e) {
					qg.hasShortcutInstalled({
						success: function(t) {
							0 == t ? (e(o.AdsCode.cancel), cc.sys.localStorage.setItem("HasIcon", "false"), console.log("\u6ca1\u6709\u56fe\u6807")) : (e(o.AdsCode.finish), cc.sys.localStorage.setItem("HasIcon", "true"), console.log("\u5df2\u521b\u5efa\u56fe\u6807"))
						},
						fail: function(e) {},
						complete: function() {}
					})
				}, e.prototype.initAds = function() {
					var t = this;
					if (console.log("initAds"), cc.sys.platform == cc.sys.OPPO_GAME) {
						var n = this;
						qg.initAdService({
							appId: e.ad_mediaId,
							isDebug: !1,
							success: function(e) {
								console.log("initAdService success"), n.hasGetSDK = !0, n.initNativeInsert()
							},
							fail: function(e) {
								console.log("initAdService fail", JSON.stringify(e))
							},
							complete: function(e) {
								console.log("initAdService complete", JSON.stringify(e))
							}
						}), qg.onShow(function() {
							console.log("onShow"), t.insertAd && (t.insertAd.offLoad(), t.insertAd.offShow(), t.insertAd.offError(), t.insertAd.destroy(), t.insertAd = null)
						}), qg.onHide(function() {
							console.log("onHide")
						})
					}
				}, e.prototype.initBanner = function() {
					var t = this;
					console.log("initBanner"), cc.sys.platform == cc.sys.OPPO_GAME && (this.bannerAd = qg.createBannerAd({
						posId: e.ad_banner_posId
					}), setTimeout(function() {
						t.bannerAd.show()
					}, 1e3), this.bannerAd.onShow(function() {
						console.log("banner onShow")
					}), this.bannerAd.onHide(function() {
						console.log("banner onHide")
					}), this.bannerAd.onError(function(e) {
						e ? console.log("banner onError", JSON.stringify(e)) : console.log("err null")
					}), this.bannerAd.offShow(), this.bannerAd.offHide(), this.bannerAd.offError())
				}, e.prototype.showBanner = function() {
					this.hasGetSDK && (console.log("showBanner"), cc.sys.platform == cc.sys.OPPO_GAME && this.initBanner())
				}, e.prototype.closeBanner = function() {
					this.hasGetSDK && (console.log("closeBanner"), cc.sys.platform == cc.sys.OPPO_GAME && (this.bannerAd ? this.bannerAd.destroy() : console.log("banner null")))
				}, e.prototype.initInsert = function() {
					var t = this;
					if (console.log("initInsert"), cc.sys.platform == cc.sys.OPPO_GAME) {
						this.insertAd && (this.insertAd.destroy(), this.insertAd.offLoad(), this.insertAd.offShow(), this.insertAd.offError(), this.insertAd = null), this.insertAd = qg.createInsertAd({
							posId: e.ad_insert_posId
						}), setTimeout(function() {
							t.insertAd.load()
						}, 500);
						var n = this;
						this.insertAd.onLoad(function() {
							console.log("insertAd onLoad"), n.isInsertLoaded = !0, n.insertAd.show()
						}), this.insertAd.onShow(function() {
							console.log("insertAd onShow"), n.isInsertLoaded = !1, n.insertAd.load(), n.insertCallBack && (n.insertCallBack(o.AdsCode.finish), n.insertCallBack = null)
						}), this.insertAd.onError(function(e) {
							e ? console.log("insertAd onError", JSON.stringify(e)) : console.log("insertAd onError null")
						})
					}
				}, e.prototype.canShowInsert = function() {
					return cc.sys.platform == cc.sys.OPPO_GAME || (console.log("Insert:" + !0), !0)
				}, e.prototype.showInsert = function(t) {
					this.hasGetSDK && (console.log("showInsert"), cc.sys.platform == cc.sys.OPPO_GAME ? (this.insertCallBack = t, this.canShowNativeInsert() ? this.showNativeInsert() : (e.ad_native_posIdIndex++, e.ad_native_posIdIndex >= e.ad_native_posIds.length && (e.ad_native_posIdIndex = 0), this.initNativeInsert(), this.initInsert())) : t && t(o.AdsCode.error))
				}, e.prototype.initVideo = function() {
					var t = this;
					if (console.log("initVideo"), cc.sys.platform == cc.sys.OPPO_GAME) {
						this.videoAd && this.videoAd.destroy(), this.videoAd = qg.createRewardedVideoAd({
							posId: e.ad_video_posId
						}), setTimeout(function() {
							t.videoAd.load()
						}, 200);
						var n = this;
						this.videoAd.onLoad(function() {
							console.log("videoAd onLoad"), n.isVideoLoaded = !0, n.videoAd.show(), n.videoAd.offLoad(function() {})
						}), this.videoAd.onVideoStart(function() {
							n.videoAd.offVideoStart(function() {})
						}), this.videoAd.onClose(function(e) {
							n.isVideoLoaded = !1, n.videoCallBack && (e.isEnded ? n.videoCallBack(o.AdsCode.finish) : n.videoCallBack(o.AdsCode.cancel), n.videoCallBack = null), e.isEnded ? console.log("videoAd onClose isEnded") : console.log("videoAd onClose cancel"), n.videoAd.offClose(function(e) {})
						}), this.videoAd.onError(function(e) {
							e ? console.log("videoAd onError\uff1a", JSON.stringify(e)) : console.log("videoAd err null"), n.videoCallBack && n.videoCallBack(o.AdsCode.error), n.videoAd.offError(function(e) {})
						})
					}
				}, e.prototype.canShowVideo = function() {
					return cc.sys.platform != cc.sys.OPPO_GAME || (console.log("Video:" + this.isVideoLoaded), !0)
				}, e.prototype.showVideo = function(e) {
					this.hasGetSDK && (console.log("showVideo"), cc.sys.platform == cc.sys.OPPO_GAME ? (this.videoCallBack = e, this.initVideo()) : e && e(o.AdsCode.error))
				}, e.prototype.initNativeInsert = function() {
					var t = this;
					if (console.log("initNativeInsert", e.ad_native_posIds[e.ad_native_posIdIndex]), cc.sys.platform == cc.sys.OPPO_GAME) {
						this.nativeInsertAd = qg.createNativeAd({
							posId: e.ad_native_posIds[e.ad_native_posIdIndex]
						}), setTimeout(function() {
							t.nativeInsertAd.load()
						}, 500);
						var n = this;
						this.nativeInsertAd.onLoad(function(e) {
							console.log("nativeInsertAd onLoad"), n.isNativeInsertLoaded = !0, console.log("nativeInsertAd : ", JSON.stringify(e.adList)), n.nativeInsertAdData = e.adList[0]
						}), this.nativeInsertAd.onError(function(e) {
							e ? console.log("nativeInsertAd onError", JSON.stringify(e)) : console.log("err null")
						})
					}
				}, e.prototype.canShowNativeInsert = function() {
					return cc.sys.platform != cc.sys.OPPO_GAME ? (console.log("canShowNativeInsert:" + !1), !1) : (console.log("canShowNativeInsert:" + this.isNativeInsertLoaded), !this.isNativeInsertLoaded && this.nativeInsertAd && this.nativeInsertAd.load(), this.isNativeInsertLoaded)
				}, e.prototype.showNativeInsert = function(e) {
					if (this.hasGetSDK)
						if (console.log("showNativeInsert"), cc.sys.platform == cc.sys.OPPO_GAME)
							if (this.nativeInsertCallBack = e, this.nativeInsertAd)
								if (console.log("has nativeInsertAd"), this.isNativeInsertLoaded) {
									console.log("isNativeInsertLoaded"), r.default.Inst.ShowInsert(this.nativeInsertAdData);
									this.nativeInsertAd.reportAdShow({
										adId: this.nativeInsertAdData.adId
									})
								} else this.nativeInsertAd.load(), this.nativeInsertCallBack && (this.nativeInsertCallBack(o.AdsCode.error), this.nativeInsertCallBack = null);
					else this.initNativeInsert(), this.nativeInsertCallBack && (this.nativeInsertCallBack(o.AdsCode.error), this.nativeInsertCallBack = null);
					else e && e(o.AdsCode.error)
				}, e.prototype.clickNativeInsert = function() {
					if (this.hasGetSDK && (console.log("clickNativeInsert"), cc.sys.platform == cc.sys.OPPO_GAME && this.nativeInsertAd && this.nativeInsertAdData)) {
						this.nativeInsertAd.reportAdClick({
							adId: this.nativeInsertAdData.adId
						})
					}
				}, e.prototype.closeNativeInsert = function() {
					this.hasGetSDK && (console.log("closeNativeInsert"), cc.sys.platform == cc.sys.OPPO_GAME && (this.isNativeInsertLoaded = !1, this.nativeInsertAd && this.nativeInsertAd.load(), r.default.Inst.CloseInsert()))
				}, e.ad_mediaId = "30195065", e.ad_banner_posId = "124667", e.ad_insert_posId = "124668", e.ad_video_posId = "124674", e.ad_native_posIds = ["126970", "126971", "126287"], e.ad_native_posIdIndex = 0, e
			}();
		n.default = a, cc._RF.pop()
	}, {
		"./OppoInsertAd": "OppoInsertAd",
		"./SDkMgr": "SDkMgr"
	}],
	QQAds: [function(e, t, n) {
		"use strict";
		var o;
		cc._RF.push(t, "63eacGPcLZDbop1srrtOh+g", "QQAds"), Object.defineProperty(n, "__esModule", {
				value: !0
			}),
			function(e) {
				e[e.success = 0] = "success", e[e.fail = -1] = "fail", e[e.cancel = -2] = "cancel", e[e.error = -3] = "error"
			}(o = n.QQCode || (n.QQCode = {}));
		var r = function() {
			function e() {
				this.hasInit = !1, this.ad_banner_posId = "8c58a791e51938230db359c547c686a9", this.mBannerAD = void 0, this.ad_video_posId = "d6158ff4f43f5d37117cbd5196317889", this.mVideoAd = void 0, this.mVideoCallback = void 0, this.isVideoLoaded = !1, this.init()
			}
			return e.prototype.init = function() {
				this.hasInit || (this.hasInit = !0, this.initBanner(), this.initVideo())
			}, e.prototype.initBanner = function() {
				if (cc.sys.platform == cc.sys.WECHAT_GAME && "function" == typeof qq.createBannerAd) {
					this.mBannerAD && this.mBannerAD.destroy();
					var e = qq.getSystemInfoSync(),
						t = Math.floor(e.windowWidth),
						n = Math.floor(e.windowHeight),
						o = Math.floor((e.windowWidth - t) / 2),
						r = n - Math.floor(t / 3.4);
					this.mBannerAD = qq.createBannerAd({
						adUnitId: this.ad_banner_posId,
						style: {
							left: o,
							width: t,
							top: r
						}
					}), this.mBannerAD.onLoad(function() {
						console.log("banner \u5e7f\u544a\u52a0\u8f7d\u6210\u529f")
					}), this.mBannerAD.onError(function(e) {
						console.log("banner \u5e7f\u544a\u52a0\u8f7d\u9519\u8bef\uff1a", JSON.stringify(e))
					})
				}
			}, e.prototype.showBanner = function() {
				this.mBannerAD ? (console.log("\u663e\u793abanner "), this.mBannerAD.show().then(function() {
					console.log("\u5e7f\u544a\u663e\u793a\u6210\u529f")
				}).catch(function(e) {
					console.log("\u5e7f\u544a\u7ec4\u4ef6\u51fa\u73b0\u95ee\u9898", JSON.stringify(e))
				})) : this.initBanner()
			}, e.prototype.closeBanner = function() {
				this.mBannerAD && (console.log("\u9690\u85cfbanner "), this.mBannerAD.hide())
			}, e.prototype.initVideo = function() {
				if (cc.sys.platform == cc.sys.WECHAT_GAME && "function" == typeof qq.createRewardedVideoAd) {
					var e = this;
					this.mVideoAd = qq.createRewardedVideoAd({
						adUnitId: this.ad_video_posId
					}), this.mVideoAd.onLoad(function() {
						console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u52a0\u8f7d\u6210\u529f")
					}), this.mVideoAd.onError(function(e) {
						console.log("\u6682\u65e0\u89c6\u9891\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5", JSON.stringify(e))
					}), this.mVideoAd.onClose(function(t) {
						t && t.isEnded || void 0 === t ? e.mVideoCallback(o.success) : e.mVideoCallback(o.cancel), e.mVideoCallback = void 0
					})
				}
			}, e.prototype.canShowVideo = function() {
				return console.log("\u89c6\u9891\u662f\u5426\u53ef\u7528:" + this.isVideoLoaded), !this.isVideoLoaded && this.mVideoAd && this.mVideoAd.load(), this.isVideoLoaded
			}, e.prototype.showVideo = function(e) {
				console.log("########## \u5c55\u793a\u89c6\u9891 ##########"), this.mVideoCallback = e, this.mVideoAd ? this.mVideoAd.show() : (this.initVideo(), this.mVideoCallback && (this.mVideoCallback(o.fail), this.mVideoCallback = null))
			}, e
		}();
		n.default = r, cc._RF.pop()
	}, {}],
	QQDemoTs: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "ead03aK5yFG7ppL60qSaFNq", "QQDemoTs"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			r = o.ccclass,
			a = (o.property, e("./QQSdk")),
			i = e("./QQAds"),
			s = function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.start = function() {}, t.prototype.init = function() {
					a.default.Inst.init()
				}, t.prototype.showBanner = function() {
					a.default.Inst.ads.showBanner()
				}, t.prototype.closeBanner = function() {
					a.default.Inst.ads.closeBanner()
				}, t.prototype.showVideo = function() {
					a.default.Inst.ads.showVideo(function(e) {
						e == i.QQCode.success ? console.log("\u89c6\u9891\u64ad\u653e\u6210\u529f") : e == i.QQCode.cancel ? console.log("\u89c6\u9891\u4e2d\u9014\u5173\u95ed\uff0c\u64ad\u653e\u672a\u5b8c\u6210") : console.log("Phát lại video không thành công")
					})
				}, t.prototype.share = function() {
					a.default.Inst.share.share(function(e) {
						e == i.QQCode.success ? console.log("Chia sẻ thành công") : e == i.QQCode.cancel ? console.log("Chia sẻ bị hủy") : console.log("Chia sẻ không thành công")
					})
				}, t = __decorate([r], t)
			}(cc.Component);
		n.default = s, cc._RF.pop()
	}, {
		"./QQAds": "QQAds",
		"./QQSdk": "QQSdk"
	}],
	QQSdk: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "0f82eR+olFDLo9MoB7VxBPA", "QQSdk"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = e("./QQShare"),
			r = e("./QQAds"),
			a = function() {
				function e() {
					this.hasInit = !1, this.hasLogin = !1, this.loginCode = "", this.share = void 0, this.ads = void 0
				}
				return Object.defineProperty(e, "Inst", {
					get: function() {
						return null == e._INST && (e._INST = new e, e._INST.init()), e._INST
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.init = function() {
					this.hasInit || (this.hasInit = !0, this.checkUpdate(), this.login(), void 0 == this.share && (this.share = new o.default), void 0 == this.ads && (this.ads = new r.default))
				}, e.prototype.checkUpdate = function() {
					if ("function" == typeof qq.getUpdateManager) {
						console.log("checkUpdate");
						var e = qq.getUpdateManager();
						e.onCheckForUpdate(function(e) {
							console.log("onCheckForUpdate: ", e.hasUpdate)
						}), e.onUpdateReady(function() {
							console.log("onUpdateReady"), e.applyUpdate()
						}), e.onUpdateFailed(function() {
							console.error("onUpdateFailed")
						})
					}
				}, e.prototype.login = function() {
					console.log("login");
					var e = this;
					qq.login({
						success: function(t) {
							console.log("login success " + t.code), e.loginCode = t.code, e.hasLogin = !0
						},
						fail: function(t) {
							console.log("login fail :", t), e.hasLogin = !1
						}
					})
				}, e
			}();
		n.default = a, cc._RF.pop()
	}, {
		"./QQAds": "QQAds",
		"./QQShare": "QQShare"
	}],
	QQShare: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "71d5dax9dZFE5IjKJhjtcNT", "QQShare"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = e("./QQAds"),
			r = function() {
				function e() {
					this.hasInit = !1, this.mShareContent = {
						title: "Khó quá!",
						imageUrl: "http://image.tomatojoy.cn/hlsjxshare1.jpg"
					}, this.init()
				}
				return e.prototype.init = function() {
					if (!this.hasInit && (this.hasInit = !0, cc.sys.platform == cc.sys.WECHAT_GAME)) {
						qq.showShareMenu({
							showShareItems: ["qq", "qzone"],
							withShareTicket: !0
						});
						var e = this;
						qq.onShareAppMessage(function() {
							return {
								title: e.mShareContent.title,
								imageUrl: e.mShareContent.imageUrl
							}
						}), qq.onShow(function(e) {
							console.log("\u8fd4\u56de\u524d\u53f0\uff1a", JSON.stringify(e))
						}), qq.onHide(function() {
							console.log("\u9690\u85cf\u5230\u540e\u53f0")
						})
					}
				}, e.prototype.share = function(e) {
					qq.shareAppMessage({
						title: this.mShareContent.title,
						imageUrl: this.mShareContent.imageUrl,
						success: function() {
							console.log("\u5206\u4eab\u6210\u529f\uff01"), e && e(o.QQCode.success)
						},
						fail: function(t) {
							console.log("\u5206\u4eab\u5931\u8d25:", JSON.stringify(t)), e && e(o.QQCode.fail)
						}
					})
				}, e
			}();
		n.default = r, cc._RF.pop()
	}, {
		"./QQAds": "QQAds"
	}],
	QTTSdk: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "c9468nnyQtA658B1iwPJCaV", "QTTSdk"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = e("./SDkMgr"),
			r = function() {
				function e() {
					this.hasInit = !1
				}
				return Object.defineProperty(e, "Inst", {
					get: function() {
						return null == e._INST && (e._INST = new e), e._INST
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.init = function() {
					this.hasInit || (this.hasInit = !0, this.login())
				}, e.prototype.login = function() {
					var t = document.createElement("script");
					t.setAttribute("type", "text/javascript"), t.src = e.sdk_script_url, document.body.appendChild(t);
					var n = document.createElement("meta");
					n.name = "app_id", n.content = e.app_id, document.getElementsByTagName("head")[0].appendChild(n), document.title = e.app_name
				}, e.prototype.showBanner = function() {
					console.log("banner show"), qttGame ? qttGame.showBanner() : console.log("banner null")
				}, e.prototype.closeBanner = function() {
					console.log("banner close"), qttGame ? qttGame.hideBanner() : console.log("banner null")
				}, e.prototype.canShowInsert = function() {
					return console.log("insert is :" + qttGame), qttGame
				}, e.prototype.showInsert = function(e) {
					console.log("insert show");
					var t = {};
					t.gametype = Math.floor(3 * Math.random()) + 1, t.rewardtype = 1, t.data = {}, t.data.title = "Thưởng", t.callback = function(t) {
						1 == t ? e && e(o.AdsCode.finish) : 0 == t ? e && e(o.AdsCode.error) : 2 == t && e && e(o.AdsCode.cancel)
					}, qttGame.showHDAD(t)
				}, e.prototype.canShowVideo = function() {
					return console.log("video is " + qttGame), qttGame
				}, e.prototype.showVideo = function(e) {
					if (console.log("video show"), !qttGame) return console.log("\u89c6\u9891\u4e0d\u53ef\u7528"), void(e && e(o.AdsCode.error));
					var t = {};
					t.gametype = Math.floor(3 * Math.random()) + 1, t.rewardtype = 1, t.data = {}, t.data.title = "Thưởng", qttGame.showVideo(function(t) {
						1 == t ? e && e(o.AdsCode.finish) : 0 == t ? e && e(o.AdsCode.error) : 2 == t && e && e(o.AdsCode.cancel)
					}, t)
				}, e.app_name = "Bảo vệ nhà vua 2", e.app_id = "a3HAyB2xzhpj", e.app_key = "xAGTrVNlnAJEASUFOBZbABLEPNNVxrLrBZSSSBaZSgyALBkCLCArSrIwSYgNVsNJ", e.sdk_script_url = "//newidea4-gamecenter-frontend.1sapp.com/sdk/prod/h5.v1.0.0.js?spread=required", e
			}();
		n.default = r, cc._RF.pop()
	}, {
		"./SDkMgr": "SDkMgr"
	}],
	RandomActiveOnce: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "2912ay2Cu9MapS2GvBwjUuq", "RandomActiveOnce"), cc.Class({
			extends: cc.Component,
			properties: {
				ActiveGroups: {
					type: cc.Node,
					default: []
				}
			},
			start: function() {
				for (var e; e <= this.ActiveGroups.Length; e++) this.ActiveGroups[e].active = !1;
				var t = Math.round(Math.random() * (this.ActiveGroups.length - 1));
				this.ActiveGroups[t] && (this.ActiveGroups[t].active = !0)
			}
		}), cc._RF.pop()
	}, {}],
	RaycastController: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "330b0hJGpNHcaYgvFq2/4vv", "RaycastController"), cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function() {
				this.node.on(cc.Node.EventType.TOUCH_START, LevelManager.Instance.onRaycastTouchDown, LevelManager.Instance), this.node.on(cc.Node.EventType.TOUCH_END, LevelManager.Instance.onRaycastTouchUp, LevelManager.Instance), this.node.on(cc.Node.EventType.TOUCH_CANCEL, LevelManager.Instance.onRaycastTouchUp, LevelManager.Instance)
			}
		}), cc._RF.pop()
	}, {}],
	RecorderMgr: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "548b3VUMUVHJKHRxhaYr8+T", "RecorderMgr"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = e("./SDK/TTSdk"),
			r = e("./SDK/TTAds"),
			a = e("./ToastMgr"),
			i = cc._decorator,
			s = i.ccclass,
			c = i.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.shareNodes = [], t.sharePanelNode = null, t
				}
				var n;
				return __extends(t, e), n = t, t.prototype.onLoad = function() {
					n.Instance = this
				}, t.prototype.start = function() {}, t.prototype.startRecord = function() {
					o.default.Inst.record.startRecord(30)
				}, t.prototype.stopRecord = function() {
					o.default.Inst.record.stopRecord()
				}, t.prototype.showSharePanel = function() {
					this.sharePanelNode.active = !0;
					for (var e = Math.floor(Math.random() * this.shareNodes.length), t = 0; t < this.shareNodes.length; t++) this.shareNodes[t].active = t == e
				}, t.prototype.closeSharePanel = function() {
					this.sharePanelNode.active = !1, this.startRecord()
				}, t.prototype.share = function() {
					var e = this;
					o.default.Inst.record.shareVideo(function(t) {
						t == r.TTCode.success ? a.default.Instance.showToast("Chia sẻ thành công") : t == r.TTCode.cancel ? a.default.Instance.showToast("Chia sẻ bị hủy") : t == r.TTCode.fail && a.default.Instance.showToast("Chia sẻ không thành công"), e.closeSharePanel()
					})
				}, t.Instance = null, __decorate([c([cc.Node])], t.prototype, "shareNodes", void 0), __decorate([c(cc.Node)], t.prototype, "sharePanelNode", void 0), t = n = __decorate([s], t)
			}(cc.Component);
		n.default = l, cc._RF.pop()
	}, {
		"./SDK/TTAds": "TTAds",
		"./SDK/TTSdk": "TTSdk",
		"./ToastMgr": "ToastMgr"
	}],
	RestartContent: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "2398aVe9B5G9alh4lPVJBBx", "RestartContent"), cc.Class({
			extends: cc.Component,
			properties: {},
			onRestartGameButtonDown: function() {
				cc.audioEngine.playEffect(AssetManager.Instance.AudioClips[0]), cc.director.loadScene(cc.director.getScene().name)
			}
		}), cc._RF.pop()
	}, {}],
	SDkMgr: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "28095n41QBNFYY3bl9YQBRn", "SDkMgr"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o, r, a = e("./MtaSdk"),
			i = e("./OppoSdk"),
			s = e("./VivoSdk"),
			c = e("./TTSdk"),
			l = e("./QTTSdk"),
			d = e("./QQSdk"),
			h = e("./M4399Sdk"),
			u = e("./WXSdk"),
			p = e("../ToastMgr");
		(function(e) {
			e[e.finish = 0] = "finish", e[e.cancel = -1] = "cancel", e[e.error = -2] = "error"
		})(o = n.AdsCode || (n.AdsCode = {})),
		function(e) {
			e[e.test = -1] = "test", e[e.view = 0] = "view", e[e.oppo = 1] = "oppo", e[e.vivo = 2] = "vivo", e[e.tt = 3] = "tt", e[e.qtt = 4] = "qtt", e[e.qq = 5] = "qq", e[e.wx = 6] = "wx", e[e.m4399 = 7] = "m4399", e[e.uc = 8] = "uc"
		}(r = n.Channel || (n.Channel = {}));
		var f = function() {
			function e() {
				this.hasInit = !1, this.curChannel = r.m4399, this.noAds = !1
			}
			return Object.defineProperty(e, "Inst", {
				get: function() {
					return null == e._INST && (e._INST = new e), e._INST
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.init = function() {
				this.hasInit || (this.hasInit = !0, (typeof GVAdBreak == "function" || /arcade\.vn$/i.test((location.hostname || "")) || (location.search || "").indexOf("gid=") >= 0) && (this.curChannel = r.view, this.noAds = !1), cc.sys.platform == cc.sys.OPPO_GAME ? this.curChannel = r.oppo : cc.sys.platform == cc.sys.VIVO_GAME && (this.curChannel = r.vivo), this.curChannel == r.qtt ? l.default.Inst.init() : this.curChannel == r.oppo ? i.default.Inst.init() : this.curChannel == r.vivo ? s.default.Inst.init() : this.curChannel == r.tt ? c.default.Inst.init() : this.curChannel == r.qq ? d.default.Inst.init() : this.curChannel == r.m4399 ? (this.noAds = !0, h.default.Inst.init()) : this.curChannel == r.wx && (this.noAds = !0, u.default.Inst.init()))
			}, e.prototype.hasIcon = function() {
				return this.curChannel != r.oppo || i.default.Inst.hasIcon()
			}, e.prototype.createIcon = function(e) {
				this.curChannel == r.oppo && i.default.Inst.createIcon(e)
			}, e.prototype.showBanner = function() {
				this.noAds || (this.curChannel == r.view ? console.log("showBanner") : this.curChannel == r.qtt ? l.default.Inst.showBanner() : this.curChannel == r.oppo ? i.default.Inst.showBanner() : this.curChannel == r.vivo ? s.default.Inst.showBanner() : this.curChannel == r.tt ? c.default.Inst.ads.showBanner() : this.curChannel == r.qq ? d.default.Inst.ads.showBanner() : this.curChannel == r.wx && u.default.Inst.ads.showBanner())
			}, e.prototype.closeBanner = function() {
				this.curChannel == r.view ? console.log("closeBanner") : this.curChannel == r.qtt ? l.default.Inst.closeBanner() : this.curChannel == r.oppo ? i.default.Inst.closeBanner() : this.curChannel == r.vivo ? s.default.Inst.closeBanner() : this.curChannel == r.tt ? c.default.Inst.ads.closeBanner() : this.curChannel == r.qq ? d.default.Inst.ads.closeBanner() : this.curChannel == r.wx && u.default.Inst.ads.closeBanner()
			}, e.prototype.canShowInsert = function() {
				return this.curChannel == r.view || (this.curChannel == r.qtt ? l.default.Inst.canShowInsert() : this.curChannel == r.oppo ? i.default.Inst.canShowInsert() : this.curChannel == r.vivo || this.curChannel != r.tt && (this.curChannel, r.qq, !1))
			}, e.prototype.showInsert = function(e) {
				this.noAds || (this.curChannel == r.view ? (console.log("showInsert"), e && e(o.finish)) : this.curChannel == r.qtt ? l.default.Inst.showInsert(e) : this.curChannel == r.oppo ? i.default.Inst.showInsert(e) : this.curChannel == r.vivo ? s.default.Inst.showInsert(e) : this.curChannel == r.tt || (this.curChannel, r.qq))
			}, e.prototype.canShowVideo = function() {
				return this.curChannel == r.view || (this.curChannel == r.qtt ? l.default.Inst.canShowVideo() : this.curChannel == r.oppo ? i.default.Inst.canShowVideo() : this.curChannel == r.vivo || (this.curChannel == r.tt ? c.default.Inst.ads.canShowVideo() : this.curChannel == r.qq ? d.default.Inst.ads.canShowVideo() : this.curChannel == r.wx && u.default.Inst.ads.canShowVideo()))
			}, e.prototype.showVideo = function(e) {
				if (window.ArcadeAds && typeof window.ArcadeAds.showRewardAd == "function") {
					window.ArcadeAds.showRewardAd(function() {
						e && e(o.finish)
					}, function() {
						e && e(o.cancel)
					});
					return
				}
				this.noAds ? this.curChannel == r.m4399 && p.default.Instance.showToast("Ko còn QC nữa!") : this.curChannel == r.view ? (console.log("showVideo"), e && e(o.finish)) : this.curChannel == r.qtt ? l.default.Inst.showVideo(e) : this.curChannel == r.oppo ? i.default.Inst.showVideo(e) : this.curChannel == r.vivo ? s.default.Inst.showVideo(e) : this.curChannel == r.tt ? c.default.Inst.ads.showVideo(e) : this.curChannel == r.qq ? d.default.Inst.ads.showVideo(e) : this.curChannel == r.wx ? u.default.Inst.ads.showVideo(e) : this.curChannel == r.m4399 && h.default.Inst.showVideo(e)
			}, e
		}();
		n.default = f, cc._RF.pop()
	}, {
		"../ToastMgr": "ToastMgr",
		"./M4399Sdk": "M4399Sdk",
		"./MtaSdk": "MtaSdk",
		"./OppoSdk": "OppoSdk",
		"./QQSdk": "QQSdk",
		"./QTTSdk": "QTTSdk",
		"./TTSdk": "TTSdk",
		"./VivoSdk": "VivoSdk",
		"./WXSdk": "WXSdk"
	}],
	StoryKingScene: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "ba223VRC85LkLWOc0OK54jS", "StoryKingScene");
		var o = i(e("../RecorderMgr")),
			r = e("../SDK/SDkMgr"),
			a = i(r);

		function i(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		cc.Class({
			extends: cc.Component,
			properties: {
				CameraTargetNode: cc.Node,
				MoveControllerNode: cc.Node,
				SitControllerNode: cc.Node
			},
			start: function() {
				CameraManager.Instance.CameraTarget = this.CameraTargetNode, CameraManager.Instance.IsSyncTargetHeight = !0, LevelManager.Instance.SceneMainAudioSource.stop(), CameraManager.Instance.FollowOffset = cc.v3(0, 360, 0)
			},
			AFUNC_SitAction: function() {
				ColourBackground.Instance.Show(cc.color(255, 255, 255)), this.scheduleOnce(function() {
					this.MoveControllerNode.active = !1, this.SitControllerNode.active = !0, a.default.Inst.curChannel == r.Channel.tt && (o.default.Instance.stopRecord(), o.default.Instance.showSharePanel())
				}, 1)
			}
		}), cc._RF.pop()
	}, {
		"../RecorderMgr": "RecorderMgr",
		"../SDK/SDkMgr": "SDkMgr"
	}],
	StroyLoveScene: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "c107636AM9PAonsDRVRRdpg", "StroyLoveScene");
		var o = e("../SDK/SDkMgr"),
			r = i(o),
			a = i(e("../RecorderMgr"));

		function i(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		cc.Class({
			extends: cc.Component,
			properties: {
				CameraTargetNode: cc.Node
			},
			start: function() {
				CameraManager.Instance.CameraTarget = this.CameraTargetNode, CameraManager.Instance.IsSyncTargetHeight = !0, LevelManager.Instance.SceneMainAudioSource.stop(), CameraManager.Instance.FollowOffset = cc.v3(0, 0, 0), this.scheduleOnce(function() {
					r.default.Inst.curChannel == o.Channel.tt && (a.default.Instance.stopRecord(), a.default.Instance.showSharePanel())
				}, 3)
			}
		}), cc._RF.pop()
	}, {
		"../RecorderMgr": "RecorderMgr",
		"../SDK/SDkMgr": "SDkMgr"
	}],
	StroyWCScene: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "c1633yX3QlHvYRb/+LXDOYG", "StroyWCScene");
		var o = i(e("../RecorderMgr")),
			r = e("../SDK/SDkMgr"),
			a = i(r);

		function i(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		cc.Class({
			extends: cc.Component,
			properties: {
				CameraTargetNode: cc.Node
			},
			start: function() {
				CameraManager.Instance.CameraTarget = this.CameraTargetNode, CameraManager.Instance.IsSyncTargetHeight = !0, LevelManager.Instance.SceneMainAudioSource.stop(), this.scheduleOnce(function() {
					a.default.Inst.curChannel == r.Channel.tt && (o.default.Instance.stopRecord(), o.default.Instance.showSharePanel())
				}, 3)
			}
		}), cc._RF.pop()
	}, {
		"../RecorderMgr": "RecorderMgr",
		"../SDK/SDkMgr": "SDkMgr"
	}],
	SyncNodeAngle: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "b903fHa8a9AAZfg6TyciPvA", "SyncNodeAngle"), cc.Class({
			extends: cc.Component,
			properties: {
				SyncTarget: cc.Node
			},
			lateUpdate: function() {
				this.node.angle = this.SyncTarget.angle
			}
		}), cc._RF.pop()
	}, {}],
	SyncSpriteFrame: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "46181peHhVGHbWO8wP795wV", "SyncSpriteFrame"), cc.Class({
			extends: cc.Component,
			properties: {
				SourceSprite: cc.Sprite,
				BeSyncSprite: cc.Sprite
			},
			start: function() {
				null != this.SourceSprite && null != this.BeSyncSprite || this.node.destroy()
			},
			update: function() {
				this.BeSyncSprite.spriteFrame = this.SourceSprite.spriteFrame
			}
		}), cc._RF.pop()
	}, {}],
	TTAds: [function(e, t, n) {
		"use strict";
		var o;
		cc._RF.push(t, "850feVnwLJOaZdMgiCvELdH", "TTAds"), Object.defineProperty(n, "__esModule", {
				value: !0
			}),
			function(e) {
				e[e.success = 0] = "success", e[e.fail = -1] = "fail", e[e.cancel = -2] = "cancel", e[e.error = -3] = "error"
			}(o = n.TTCode || (n.TTCode = {}));
		var r = function() {
			function e() {
				this.hasInit = !1, this.ad_banner_posId = "25lm6cgb6i3p2a63h9", this.mBannerAD = void 0, this.ad_video_posId = "13pd05i13d9q1j68uj", this.mVideoAd = void 0, this.mVideoCallback = void 0, this.isVideoLoaded = !1, this.init()
			}
			return e.prototype.init = function() {
				this.hasInit || (this.hasInit = !0, this.initBanner(), this.initVideo())
			}, e.prototype.initBanner = function() {
				if (cc.sys.platform == cc.sys.WECHAT_GAME && "function" == typeof tt.createBannerAd) {
					this.mBannerAD && this.mBannerAD.destroy();
					var e = tt.getSystemInfoSync(),
						t = Math.floor(e.windowWidth),
						n = Math.floor(e.windowHeight);
					this.mBannerAD = tt.createBannerAd({
						adUnitId: this.ad_banner_posId,
						style: {
							width: 200,
							top: n - 112.5
						}
					}), console.log("windowWidth", t), console.log("targetBannerAdWidth", 200);
					var o = (t - 200) / 4;
					console.log("left", o), this.mBannerAD.style.left = o, this.mBannerAD.onLoad(function() {
						console.log("banner onLoad")
					}), this.mBannerAD.onError(function(e) {
						console.log("banner onError", JSON.stringify(e))
					})
				}
			}, e.prototype.showBanner = function() {
				this.mBannerAD ? (console.log("showBanner "), this.mBannerAD.show().then(function() {
					console.log("showBanner success")
				}).catch(function(e) {
					console.log("showBanner error", JSON.stringify(e))
				})) : this.initBanner()
			}, e.prototype.closeBanner = function() {
				this.mBannerAD && (console.log("closeBanner "), this.mBannerAD.hide())
			}, e.prototype.initVideo = function() {
				if (cc.sys.platform == cc.sys.WECHAT_GAME && "function" == typeof tt.createRewardedVideoAd) {
					var e = this;
					this.mVideoAd = tt.createRewardedVideoAd({
						adUnitId: this.ad_video_posId
					}), this.mVideoAd.onLoad(function() {
						console.log("Video onLoad")
					}), this.mVideoAd.onError(function(e) {
						cc.game.resume(), console.log("Video onError", JSON.stringify(e))
					}), this.mVideoAd.onClose(function(t) {
						cc.game.resume(), t && t.isEnded || void 0 === t ? e.mVideoCallback(o.success) : e.mVideoCallback(o.cancel), e.mVideoCallback = void 0
					})
				}
			}, e.prototype.canShowVideo = function() {
				return console.log("canShowVideo:" + this.isVideoLoaded), !this.isVideoLoaded && this.mVideoAd && this.mVideoAd.load(), this.isVideoLoaded
			}, e.prototype.showVideo = function(e) {
				console.log("showVideo"), this.mVideoCallback = e, this.mVideoAd ? (this.mVideoAd.show(), cc.game.pause()) : (this.initVideo(), this.mVideoCallback && (this.mVideoCallback(o.fail), this.mVideoCallback = null))
			}, e
		}();
		n.default = r, cc._RF.pop()
	}, {}],
	TTDemoTs: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "58ed4m1gWNEObpA5H7kPquk", "TTDemoTs"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			r = o.ccclass,
			a = (o.property, e("./TTSdk")),
			i = e("./TTAds"),
			s = function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return __extends(t, e), t.prototype.start = function() {
					a.default.Inst.init()
				}, t.prototype.showBanner = function() {
					a.default.Inst.ads.showBanner()
				}, t.prototype.closeBanner = function() {
					a.default.Inst.ads.closeBanner()
				}, t.prototype.showVideo = function() {
					a.default.Inst.ads.showVideo(function(e) {
						e == i.TTCode.success ? console.log("\u89c6\u9891\u64ad\u653e\u6210\u529f") : e == i.TTCode.cancel ? console.log("\u89c6\u9891\u4e2d\u9014\u5173\u95ed\uff0c\u64ad\u653e\u672a\u5b8c\u6210") : console.log("Phát lại video không thành công")
					})
				}, t.prototype.share = function() {
					a.default.Inst.share.share(function(e) {
						e == i.TTCode.success ? console.log("Chia sẻ thành công") : e == i.TTCode.cancel ? console.log("Chia sẻ bị hủy") : console.log("Chia sẻ không thành công")
					})
				}, t.prototype.startRecord = function() {
					a.default.Inst.record.startRecord(60)
				}, t.prototype.clipRecord = function() {
					a.default.Inst.record.recordClip(2, 3)
				}, t.prototype.stopRecord = function() {
					a.default.Inst.record.stopRecord(!0)
				}, t.prototype.shareRecord = function() {
					a.default.Inst.record.shareVideo(function(e) {
						e == i.TTCode.success ? console.log("Chia sẻ thành công") : e == i.TTCode.cancel ? console.log("Chia sẻ bị hủy") : console.log("Chia sẻ không thành công")
					})
				}, t = __decorate([r], t)
			}(cc.Component);
		n.default = s, cc._RF.pop()
	}, {
		"./TTAds": "TTAds",
		"./TTSdk": "TTSdk"
	}],
	TTRecord: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "1afaeZTLT1D3KfgA2mjUutZ", "TTRecord"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = e("./TTAds"),
			r = e("../ToastMgr"),
			a = function() {
				function e() {
					this.hasInit = !1, this.recordPath = void 0, this.recorder = null, this.surpportRecord = !1, this.isClipRecord = !1, this.init()
				}
				return e.prototype.init = function() {
					if (!this.hasInit)
						if (this.hasInit = !0, "function" == typeof tt.getGameRecorderManager) {
							this.surpportRecord = !0, this.recorder = tt.getGameRecorderManager();
							var e = this;
							this.recorder.onStart(function(e) {
								console.log("recorder onStart")
							}), this.recorder.onStop(function(t) {
								console.log("recorder onStop"), e.isClipRecord ? e.recorder.clipVideo({
									path: t.videoPath,
									success: function(t) {
										e.recordPath = t.videoPath, console.log("recordPath:", e.recordPath)
									}
								}) : (e.recordPath = t.videoPath, console.log("recordPath:", e.recordPath))
							}), this.recorder.onError(function(t) {
								console.log("recorder onError", t), e.recordPath = void 0
							})
						} else this.surpportRecord = !1
				}, e.prototype.startRecord = function(e) {
					void 0 === e && (e = -1), this.surpportRecord && ((e < 0 || e < 120) && (e = 120), this.recorder.start({
						duration: e
					}))
				}, e.prototype.recordClip = function(e, t) {
					void 0 === e && (e = 3), void 0 === t && (t = 3), this.recorder.recordClip({
						timeRange: [e, t]
					})
				}, e.prototype.stopRecord = function(e) {
					void 0 === e && (e = !1), this.surpportRecord && (console.log("stopRecord"), this.recorder.stop())
				}, e.prototype.shareVideo = function(e) {
					if (console.log("shareVideo"), !this.surpportRecord) return console.log("not surpportRecord"), void(e && e(o.TTCode.error));
					void 0 != this.recordPath ? (console.log("recordPath:", this.recordPath), "Douyin" == tt.getSystemInfoSync().appName && setTimeout(function() {
						console.log("shareVideo success"), e && e(o.TTCode.success)
					}, 3e3), tt.shareVideo({
						videoPath: this.recordPath,
						success: function() {
							console.log("shareVideo success"), e && e(o.TTCode.success)
						},
						fail: function(t) {
							console.log("shareVideo fail", t), t.errMsg.includes("shareVideo:fail cancel") && e && e(o.TTCode.cancel), t.errMsg.includes("shareVideo:fail video file is too short") && (e && e(o.TTCode.fail), r.default.Instance.showToast("Video được chia sẻ quá ngắn!"))
						}
					})) : (console.log("recordPath is null"), e && e(o.TTCode.error))
				}, e
			}();
		n.default = a, cc._RF.pop()
	}, {
		"../ToastMgr": "ToastMgr",
		"./TTAds": "TTAds"
	}],
	TTSdk: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "14150l6JANKBon7tXV2jGYa", "TTSdk"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = e("./TTShare"),
			r = e("./TTRecord"),
			a = e("./TTAds"),
			i = function() {
				function e() {
					this.hasInit = !1, this.hasLogin = !1, this.loginCode = "", this.loginAnonymousCode = "", this.share = void 0, this.record = void 0, this.ads = void 0
				}
				return Object.defineProperty(e, "Inst", {
					get: function() {
						return null == e._INST && (e._INST = new e), e._INST
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.init = function() {
					this.hasInit || (this.hasInit = !0, this.checkUpdate(), this.login(), void 0 == this.share && (this.share = new o.default), void 0 == this.record && (this.record = new r.default), void 0 == this.ads && (this.ads = new a.default))
				}, e.prototype.checkUpdate = function() {
					if ("function" == typeof tt.getUpdateManager) {
						console.log("checkUpdate");
						var e = tt.getUpdateManager();
						e.onCheckForUpdate(function(e) {
							console.log("onCheckForUpdate: " + e.hasUpdate)
						}), e.onUpdateReady(function() {
							console.log("onUpdateReady"), e.applyUpdate()
						}), e.onUpdateFailed(function() {
							console.error("onUpdateFailed")
						})
					}
				}, e.prototype.login = function() {
					console.log("login");
					var e = this;
					tt.login({
						success: function(t) {
							console.log("login success " + t.code + " " + t.anonymousCode), e.loginCode = t.code, e.loginAnonymousCode = t.anonymousCode, e.hasLogin = !0
						},
						fail: function(t) {
							console.log("login fail :", t), e.hasLogin = !1
						}
					})
				}, e
			}();
		n.default = i, cc._RF.pop()
	}, {
		"./TTAds": "TTAds",
		"./TTRecord": "TTRecord",
		"./TTShare": "TTShare"
	}],
	TTShare: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "1c2fecZLBlK8I8ZPEHbEi8D", "TTShare"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = e("./TTAds"),
			r = function() {
				function e() {
					this.hasInit = !1, this.mShareContent = {
						title: "Game vua hài hước",
						imageUrl: "http://h5.yuanhenggame.com/game/res/img/king/share1.png"
					}, this.init()
				}
				return e.prototype.init = function() {
					var e = this;
					this.hasInit || (this.hasInit = !0, cc.sys.platform == cc.sys.WECHAT_GAME && (tt.showShareMenu(), tt.onShareAppMessage(function() {
						return {
							title: e.mShareContent.title,
							imageUrl: e.mShareContent.imageUrl
						}
					}), tt.onShow(function(e) {
						console.log("onShow ", JSON.stringify(e))
					}), tt.onHide(function() {
						console.log("onHide")
					})))
				}, e.prototype.share = function(e) {
					tt.shareAppMessage({
						title: this.mShareContent.title,
						imageUrl: this.mShareContent.imageUrl,
						success: function() {
							console.log("share success"), e && e(o.TTCode.success)
						},
						fail: function(t) {
							console.log("share fail:", JSON.stringify(t)), e && e(o.TTCode.fail)
						}
					})
				}, e
			}();
		n.default = r, cc._RF.pop()
	}, {
		"./TTAds": "TTAds"
	}],
	TimeDestroyObject: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "fd0513DqcxMIa9QMqn1Cqyv", "TimeDestroyObject"), cc.Class({
			extends: cc.Component,
			properties: {
				ObjectLifeTime: 10
			},
			start: function() {
				this.scheduleOnce(function() {
					this.node.destroy()
				}, this.ObjectLifeTime)
			}
		}), cc._RF.pop()
	}, {}],
	ToastMgr: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "cf17eGym5BKcqH0GlOmcASe", "ToastMgr"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = cc._decorator,
			r = o.ccclass,
			a = o.property,
			i = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.toastNode = null, t.toastLabel = null, t
				}
				var n;
				return __extends(t, e), n = t, t.prototype.onLoad = function() {
					n.Instance = this
				}, t.prototype.showToast = function(e) {
					var t = this;
					this.toastLabel.string = e, this.toastNode.opacity = 0, this.toastNode.active = !0;
					var n = cc.fadeIn(.5),
						o = cc.delayTime(2),
						r = cc.fadeOut(.3),
						a = cc.callFunc(function() {
							t.toastNode.active = !1
						});
					this.toastNode.runAction(cc.sequence(n, o, r, a))
				}, t.Instance = null, __decorate([a(cc.Node)], t.prototype, "toastNode", void 0), __decorate([a(cc.Label)], t.prototype, "toastLabel", void 0), t = n = __decorate([r], t)
			}(cc.Component);
		n.default = i, cc._RF.pop()
	}, {}],
	VivoSdk: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "de4d0p/AuZIl6WASRX6/wZZ", "VivoSdk"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = e("./SDkMgr"),
			r = function() {
				function e() {
					this.bannerAd = null, this.insertAd = null, this.videoAd = null, this.videoCallBack = null, this.hasInit = !1
				}
				return Object.defineProperty(e, "Inst", {
					get: function() {
						return null == e._INST && (e._INST = new e), e._INST
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.init = function() {
					var e = this;
					this.hasInit || (this.hasInit = !0, setTimeout(function() {
						e.login()
					}, 500))
				}, e.prototype.login = function() {
					qg.authorize({
						type: "token",
						success: function(e) {
							console.log("handling success, code: ", JSON.stringify(e))
						},
						fail: function(e, t) {
							console.log("handling fail, fail code: ", JSON.stringify(e), JSON.stringify(t))
						}
					})
				}, e.prototype.showBanner = function() {
					console.log("\u5c55\u793abanner"), this.bannerAd = qg.createBannerAd({
						posId: e.ad_banner_posId,
						style: {}
					});
					var t = this.bannerAd && this.bannerAd.show();
					t && t.then(function() {
						console.log("\u5c55\u793abanner")
					}).catch(function(e) {
						console.log("\u5c55\u793abanner\u5f02\u5e38", JSON.stringify(e))
					}), this.bannerAd.onLoad(function() {
						console.log("banner\u52a0\u8f7d")
					}), this.bannerAd.onClose(function() {
						console.log("banner\u5173\u95ed")
					}), this.bannerAd.onError(function() {
						console.log("banner\u9519\u8bef")
					})
				}, e.prototype.closeBanner = function() {
					console.log("\u5173\u95edbanner");
					var e = this.bannerAd.hide();
					e && e.then(function() {
						console.log("banner\u5e7f\u544a\u9690\u85cf\u6210\u529f")
					}).catch(function(e) {
						console.log("banner\u5e7f\u544a\u9690\u85cf\u5f02\u5e38", JSON.stringify(e))
					})
				}, e.prototype.destoryBanner = function() {
					console.log("\u9500\u6bc1banner");
					var e = this.bannerAd.destroy();
					e && e.then(function() {
						console.log("banner\u5e7f\u544a\u9500\u6bc1\u6210\u529f")
					}).catch(function(e) {
						console.log("banner\u5e7f\u544a\u9500\u6bc1\u5931\u8d25", JSON.stringify(e))
					})
				}, e.prototype.showInsert = function(t) {
					console.log("\u5c55\u793a\u63d2\u5c4f"), this.insertAd = qg.createInterstitialAd({
						posId: e.ad_insert_posId
					});
					var n = this.insertAd && this.insertAd.show();
					n && n.then(function() {
						console.log("\u5c55\u793a\u63d2\u5c4f")
					}).catch(function(e) {
						console.log("\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u5f02\u5e38", JSON.stringify(e))
					}), this.insertAd.onLoad(function() {
						console.log("\u5c55\u793a\u52a0\u8f7d")
					}), this.insertAd.onClose(function() {
						console.log("\u63d2\u5c4f\u5173\u95ed")
					}), this.insertAd.onError(function() {
						console.log("\u63d2\u5c4f\u9519\u8bef")
					})
				}, e.prototype.showVideo = function(t) {
					var n = this;
					console.log("\u5c55\u793a\u6fc0\u52b1"), this.videoCallBack = t, this.videoAd = qg.createRewardedVideoAd({
						posId: e.ad_video_posId,
						style: {}
					});
					var r = this.videoAd.load();
					r && r.then(function() {
						console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u6210\u529f"), setTimeout(function() {
							var e = n.videoAd && n.videoAd.show();
							e && e.then(function() {
								console.log("\u5c55\u793a\u6fc0\u52b1")
							}).catch(function(e) {
								console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u5f02\u5e38", JSON.stringify(e))
							})
						}, 600)
					}).catch(function(e) {
						console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", e)
					}), this.videoAd.onLoad(function() {
						console.log("\u6fc0\u52b1\u89c6\u9891\u5df2\u52a0\u8f7d"), e.videoAdIsReady = !0
					}), this.videoAd.onError(function(e) {
						console.log("\u6fc0\u52b1\u89c6\u9891\u5f02\u5e38", JSON.stringify(e)), n.videoCallBack && n.videoCallBack(o.AdsCode.error)
					}), this.videoAd.onClose(function(t) {
						e.videoAdIsReady = !1, n.videoCallBack && (t && t.isEnded ? (console.log("\u7ed3\u675f\u5173\u95ed"), n.videoCallBack(o.AdsCode.finish)) : (console.log("\u6ca1\u7ed3\u675f\u5173\u95ed"), n.videoCallBack(o.AdsCode.cancel)), console.log("\u6e05\u9664\u56de\u8c03"), n.videoCallBack = null)
					})
				}, e.videoAdIsReady = !1, e.adLastUpdateTime = 0, e.showBannerIntervalBool = !1, e.ad_mediaId = "4d81c433b531433daafd459c0bc2f921", e.ad_banner_posId = "9ab6219c64f7410682e8417042a6880f", e.ad_insert_posId = "6ba86ed738a94a75988ee66f2844a43b", e.ad_video_posId = "4c48939ea484455da870a8658487db31", e
			}();
		n.default = r, cc._RF.pop()
	}, {
		"./SDkMgr": "SDkMgr"
	}],
	WXAds: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "3fc51cDBrZB4bYO71or11tg", "WXAds"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = e("./TTAds"),
			r = function() {
				function e() {
					this.hasInit = !1, this.ad_banner_posId = "", this.mBannerAD = void 0, this.ad_video_posId = "", this.mVideoAd = void 0, this.mVideoCallback = void 0, this.isVideoLoaded = !1, this.init()
				}
				return e.prototype.init = function() {
					this.hasInit || (this.hasInit = !0, this.initBanner(), this.initVideo())
				}, e.prototype.initBanner = function() {
					if (cc.sys.platform == cc.sys.WECHAT_GAME) {
						this.mBannerAD && this.mBannerAD.destroy();
						var e = wx.getSystemInfoSync(),
							t = Math.floor(e.windowWidth),
							n = Math.floor(e.windowHeight);
						this.mBannerAD = wx.createBannerAd({
							adUnitId: this.ad_banner_posId,
							style: {
								width: 200,
								top: n - 112.5
							}
						});
						var o = (t - 200) / 4;
						this.mBannerAD.style.left = o, this.mBannerAD.onLoad(function() {
							console.log("banner onLoad")
						}), this.mBannerAD.onError(function(e) {
							console.log("banner onError", JSON.stringify(e))
						})
					}
				}, e.prototype.showBanner = function() {
					this.mBannerAD ? (console.log("showBanner "), this.mBannerAD.show().then(function() {
						console.log("showBanner success")
					}).catch(function(e) {
						console.log("showBanner error", JSON.stringify(e))
					})) : this.initBanner()
				}, e.prototype.closeBanner = function() {
					this.mBannerAD && (console.log("closeBanner "), this.mBannerAD.hide())
				}, e.prototype.initVideo = function() {
					if (cc.sys.platform == cc.sys.WECHAT_GAME) {
						var e = this;
						this.mVideoAd = wx.createRewardedVideoAd({
							adUnitId: this.ad_video_posId
						}), this.mVideoAd.onLoad(function() {
							console.log("Video onLoad")
						}), this.mVideoAd.onError(function(e) {
							cc.game.resume(), console.log("Video onError", JSON.stringify(e))
						}), this.mVideoAd.onClose(function(t) {
							cc.game.resume(), t && t.isEnded || void 0 === t ? e.mVideoCallback(o.TTCode.success) : e.mVideoCallback(o.TTCode.cancel), e.mVideoCallback = void 0
						})
					}
				}, e.prototype.canShowVideo = function() {
					return console.log("canShowVideo:" + this.isVideoLoaded), !this.isVideoLoaded && this.mVideoAd && this.mVideoAd.load(), this.isVideoLoaded
				}, e.prototype.showVideo = function(e) {
					console.log("showVideo"), this.mVideoCallback = e, this.mVideoAd ? (this.mVideoAd.show(), cc.game.pause()) : (this.initVideo(), this.mVideoCallback && (this.mVideoCallback(o.TTCode.fail), this.mVideoCallback = null))
				}, e
			}();
		n.default = r, cc._RF.pop()
	}, {
		"./TTAds": "TTAds"
	}],
	WXSdk: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "73b12O6M+lLy7huAl623/9+", "WXSdk"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = e("./WXShare"),
			r = e("./WXAds"),
			a = function() {
				function e() {
					this.hasInit = !1, this.hasLogin = !1, this.loginCode = "", this.loginAnonymousCode = "", this.share = void 0, this.ads = void 0
				}
				return Object.defineProperty(e, "Inst", {
					get: function() {
						return null == e._INST && (e._INST = new e), e._INST
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.init = function() {
					this.hasInit || (this.hasInit = !0, this.checkUpdate(), this.login(), void 0 == this.share && (this.share = new o.default), void 0 == this.ads && (this.ads = new r.default))
				}, e.prototype.checkUpdate = function() {
					if ("function" == typeof wx.getUpdateManager) {
						console.log("checkUpdate");
						var e = wx.getUpdateManager();
						e.onCheckForUpdate(function(e) {
							console.log("onCheckForUpdate: " + e.hasUpdate)
						}), e.onUpdateReady(function() {
							console.log("onUpdateReady"), e.applyUpdate()
						}), e.onUpdateFailed(function() {
							console.error("onUpdateFailed")
						})
					}
				}, e.prototype.login = function() {
					console.log("login");
					var e = this;
					wx.login({
						success: function(t) {
							console.log("login success " + t.code + " " + t.anonymousCode), e.loginCode = t.code, e.loginAnonymousCode = t.anonymousCode, e.hasLogin = !0
						},
						fail: function(t) {
							console.log("login fail :", t), e.hasLogin = !1
						}
					})
				}, e
			}();
		n.default = a, cc._RF.pop()
	}, {
		"./WXAds": "WXAds",
		"./WXShare": "WXShare"
	}],
	WXShare: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "f7f57eM+kJB4aR/z7ri6qEv", "WXShare"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = e("./TTAds"),
			r = function() {
				function e() {
					this.hasInit = !1, this.mShareContent = {
						title: "Game vua hài hước",
						imageUrl: "http://h5.yuanhenggame.com/game/res/img/king/share1.png"
					}, this.init()
				}
				return e.prototype.init = function() {
					var e = this;
					this.hasInit || (this.hasInit = !0, cc.sys.platform == cc.sys.WECHAT_GAME && (wx.showShareMenu(), wx.onShareAppMessage(function() {
						return {
							title: e.mShareContent.title,
							imageUrl: e.mShareContent.imageUrl
						}
					}), wx.onShow(function(e) {
						console.log("onShow ", JSON.stringify(e))
					}), wx.onHide(function() {
						console.log("onHide")
					})))
				}, e.prototype.share = function(e) {
					wx.shareAppMessage({
						title: this.mShareContent.title,
						imageUrl: this.mShareContent.imageUrl,
						success: function() {
							console.log("share success"), e && e(o.TTCode.success)
						},
						fail: function(t) {
							console.log("share fail:", JSON.stringify(t)), e && e(o.TTCode.fail)
						}
					})
				}, e
			}();
		n.default = r, cc._RF.pop()
	}, {
		"./TTAds": "TTAds"
	}],
	YaoshuiMgr: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "a2fcdSbdnxH66vFmGOBFenN", "YaoshuiMgr"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = e("./SDK/SDkMgr"),
			r = e("./SDK/MtaSdk"),
			a = e("./ToastMgr"),
			i = cc._decorator,
			s = i.ccclass,
			c = i.property,
			l = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.redYaoshui = null, t.greenYaoshui = null, t.redTimer = null, t.greenTimer = null, t
				}
				var n;
				return __extends(t, e), n = t, 				t.prototype.onLoad = function() {
					n.Instance = this, cc.sys.localStorage.getItem("RedYao") || cc.sys.localStorage.setItem("RedYao", "false"), cc.sys.localStorage.getItem("GreenYao") || cc.sys.localStorage.setItem("GreenYao", "false"), n.RedYao = "true" == cc.sys.localStorage.getItem("RedYao"), n.GreenYao = "true" == cc.sys.localStorage.getItem("GreenYao")
				}, t.prototype.start = function() {}, t.prototype.ShowYaoshui = function() {
					o.default.Inst.noAds || (0 == n.RedYao ? (this.redTimer = function() {
						this.redYaoshui.active = !0, this.redYaoshui.stopAllActions();
						var e = cc.scaleTo(.1, 1.2).easing(cc.easeSineInOut()),
							t = cc.scaleTo(.1, 1).easing(cc.easeSineInOut()),
							n = cc.delayTime(.15),
							o = cc.scaleTo(.1, 1.2).easing(cc.easeSineInOut()),
							a = cc.scaleTo(.1, 1).easing(cc.easeSineInOut()),
							i = cc.delayTime(.8),
							s = cc.repeatForever(cc.sequence(e, t, n, o, a, i));
						this.redYaoshui.runAction(s), r.default.Inst.event("ShowRedDrink")
					}, this.scheduleOnce(this.redTimer, 7 * Math.random() + 3)) : 0 == n.GreenYao && (this.greenTimer = function() {
						this.greenYaoshui.active = !0, this.greenYaoshui.stopAllActions();
						var e = cc.scaleTo(.1, 1.2).easing(cc.easeSineInOut()),
							t = cc.scaleTo(.1, 1).easing(cc.easeSineInOut()),
							n = cc.delayTime(.15),
							o = cc.scaleTo(.1, 1.2).easing(cc.easeSineInOut()),
							a = cc.scaleTo(.1, 1).easing(cc.easeSineInOut()),
							i = cc.delayTime(.8),
							s = cc.repeatForever(cc.sequence(e, t, n, o, a, i));
						this.greenYaoshui.runAction(s), r.default.Inst.event("ShowGreenDrink")
					}, this.scheduleOnce(this.greenTimer, 7 * Math.random() + 3)))
				}, t.prototype.RedYaoClick = function() {
					this.Hide(), r.default.Inst.event("RedDrinkClick"), o.default.Inst.showVideo(function(e) {
						e == o.AdsCode.finish ? null != KingController.Instance && (KingController.Instance.DrinkRedWine(), n.RedYao = !0, cc.sys.localStorage.setItem("RedYao", "true"), r.default.Inst.event("RedDrinkADSuccess"), a.default.Instance.showToast("Nhận thuốc trường sinh")) : e == o.AdsCode.cancel ? a.default.Instance.showToast("Video vẫn chưa kết thúc") : a.default.Instance.showToast("Phát lại video không thành công")
					})
				}, t.prototype.GreenYaoClick = function() {
					this.Hide(), r.default.Inst.event("GreenDrinkClick"), o.default.Inst.showVideo(function(e) {
						e == o.AdsCode.finish ? null != KingController.Instance && (KingController.Instance.DrinkGreenWine(), n.GreenYao = !0, cc.sys.localStorage.setItem("GreenYao", "true"), r.default.Inst.event("GreenDrinkADSuccess")) : e == o.AdsCode.cancel ? a.default.Instance.showToast("Video vẫn chưa kết thúc") : a.default.Instance.showToast("Phát lại video không thành công")
					})
				}, t.prototype.Hide = function() {
					this.unschedule(this.redTimer), this.unschedule(this.greenTimer), this.redYaoshui.stopAllActions(), this.greenYaoshui.stopAllActions(), this.redYaoshui.active = !1, this.greenYaoshui.active = !1
				}, t.RedYao = !1, t.GreenYao = !1, t.Instance = null, __decorate([c(cc.Node)], t.prototype, "redYaoshui", void 0), __decorate([c(cc.Node)], t.prototype, "greenYaoshui", void 0), t = n = __decorate([s], t)
			}(cc.Component);
		n.default = l, cc._RF.pop()
	}, {
		"./SDK/MtaSdk": "MtaSdk",
		"./SDK/SDkMgr": "SDkMgr",
		"./ToastMgr": "ToastMgr"
	}],
	"mta-h5-analysis-2.0.15": [function(e, t, n) {
		"use strict";

		function o(e) {
			return e = window.localStorage ? localStorage.getItem(e) : (e = document.cookie.match(new RegExp("(?:^|;\\s)" + e + "=(.*?)(?:;\\s|$)"))) ? e[1] : ""
		}

		function r(e, t, n) {
			if (window.localStorage) try {
				localStorage.setItem(e, t)
			} catch (e) {} else document.cookie = e + "=" + t + ";path=/;domain=" + a() + (n ? ";expires=" + n : "")
		}

		function a() {
			var e = window.location.host,
				t = e.split(".");
			return 2 < t.length && (e = ({
				"com.cn": 1,
				"js.cn": 1,
				"net.cn": 1,
				"gov.cn": 1,
				"com.hk": 1,
				"co.nz": 1
			} [t.slice(-2).join(".")] ? t.slice(-3) : t.slice(-2)).join(".")), e
		}

		function i(e, t) {
			var n = {};
			if (void 0 === t) {
				var o = window.location,
					r = o.host,
					a = o.pathname,
					i = "";
				o.search && (i = o.search.substr(1));
				var s = o.hash
			} else r = (o = t.match(/\w+:\/\/((?:[\w-]+\.)+\w+)(?::\d+)?(\/[^\?\\"'\|:<>]*)?(?:\?([^'"\\<>#]*))?(?:#(\w+))?/i) || [])[1], a = o[2], i = o[3], s = o[4];
			return void 0 !== s && (s = s.replace(/"|'|<|>/gi, "M")), i && function() {
				for (var e = i.split("&"), t = 0, o = e.length; t < o; t++)
					if (-1 != e[t].indexOf("=")) {
						var r = e[t].indexOf("="),
							a = e[t].slice(0, r);
						r = e[t].slice(r + 1), n[a] = r
					}
			}(), i = function() {
				if (void 0 === i) return i;
				for (var t = i.split("&"), n = [], o = 0, r = t.length; o < r; o++)
					if (-1 != t[o].indexOf("=")) {
						var a = t[o].indexOf("="),
							s = t[o].slice(0, a);
						a = t[o].slice(a + 1), e.ignoreParams && -1 != e.ignoreParams.indexOf(s) || n.push(s + "=" + a)
					} return n.join("&")
			}(), s && function() {
				for (var e = 0 == s.indexOf("#") ? s.substr(1).split("&") : s.split("&"), t = 0, n = e.length; t < n; t++)
					if (-1 != e[t].indexOf("=")) {
						var o = e[t].indexOf("="),
							r = e[t].slice(0, o);
						if (o = e[t].slice(o + 1), "adtag" === r.toLowerCase()) {
							o;
							break
						}
					}
			}(), {
				host: r,
				path: a,
				search: i,
				hash: s,
				param: n,
				adtag: window.adTag
			}
		}

		function s(e) {
			var t = i(e),
				n = {
					dm: t.host,
					pvi: "",
					si: "",
					url: t.path,
					arg: encodeURIComponent(t.search || "").substr(0, 512),
					ty: 0
				};
			return n.pvi = function() {
				if (e.userReport) {
					var t = o("pgv_uid");
					t && t == e.user.user_id || (n.ty = 1, r("pgv_uid", e.user.user_id, "Sun, 18 Jan 2038 00:00:00 GMT;")), t = e.user.user_id
				} else(t = o("pgv_pvi")) || (n.ty = 1, r("pgv_pvi", t = c(), "Sun, 18 Jan 2038 00:00:00 GMT;"));
				return t
			}(), n.si = function() {
				var e = o("pgv_si");
				return e || r("pgv_si", e = c("s")), e
			}(), n.url = function() {
				var n = t.path;
				return e.senseQuery && (n += t.search ? "?" + encodeURIComponent(t.search || "").substr(0, 512) : ""), e.senseHash && (n += t.hash ? encodeURIComponent(t.hash) : ""), n
			}(), n
		}

		function c(e) {
			for (var t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], n = 10; 1 < n; n--) {
				var o = Math.floor(10 * Math.random()),
					r = t[o];
				t[o] = t[n - 1], t[n - 1] = r
			}
			for (n = o = 0; 5 > n; n++) o = 10 * o + t[n];
			return (e || "") + (o + "") + +new Date
		}

		function l(e) {
			return {
				r2: e.sid
			}
		}

		function d(e) {
			var t = {};
			if (e) {
				var n, o = [];
				for (n in e) e.hasOwnProperty(n) && o.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
				e = o.join(";"), t.ext = e
			}
			return t
		}

		function h(e) {
			window.adTag = e, console.log("Tag:", window.adTag)
		}

		function u(e) {
			var t = i(e, document.referrer);
			return e = i(e), {
				rdm: t.host,
				rurl: t.path,
				rarg: encodeURIComponent(t.search || "").substr(0, 512),
				adt: window.adTag
			}
		}

		function p() {
			try {
				var e = navigator,
					t = screen || {
						width: "",
						height: "",
						colorDepth: ""
					},
					n = {
						scr: t.width + "x" + t.height,
						scl: t.colorDepth + "-bit",
						lg: (e.language || e.userLanguage).toLowerCase(),
						tz: (new Date).getTimezoneOffset() / 60
					}
			} catch (e) {
				return {}
			}
			return n
		}

		function f() {
			if (window.performance) {
				var e = window.performance.timing,
					t = {
						value: e.domainLookupEnd - e.domainLookupStart
					},
					n = {
						value: e.connectEnd - e.connectStart
					},
					o = {
						value: e.responseStart - (e.requestStart || e.responseStart + 1)
					},
					r = e.responseEnd - e.responseStart;
				e.domContentLoadedEventStart ? 0 > r && (r = 0) : r = -1, e = {
					domainLookupTime: t,
					connectTime: n,
					requestTime: o,
					resourcesLoadedTime: {
						value: r
					},
					domParsingTime: {
						value: e.domContentLoadedEventStart ? e.domInteractive - e.domLoading : -1
					},
					domContentLoadedTime: {
						value: e.domContentLoadedEventStart ? e.domContentLoadedEventStart - e.fetchStart : -1
					}
				}
			} else e = "";
			return e
		}
		cc._RF.push(t, "6d4c2RLSRVHrrTJei2uQGIJ", "mta-h5-analysis-2.0.15"), t.exports = {
			conf: {},
			version: "2.0.15",
			init: function(e) {
				var t = {
					sid: 0,
					cid: 0,
					autoReport: 0,
					senseHash: 0,
					senseQuery: 0,
					userReport: 0,
					performanceMonitor: 0,
					ignoreParams: []
				};
				if (e) {
					for (var n in e) e.hasOwnProperty(n) && t.hasOwnProperty(n) && (t[n] = e[n]);
					e.hasOwnProperty("adTag") && h(e.adTag)
				}
				this.conf = t, this.conf.autoReport && this.pgv()
			},
			pgv: function() {
				var e = this.conf,
					t = [],
					n = this.version;
				if (e.sid)
					if (!e.userReport || e.user && e.user.user_id && !parseInt(e.user.user_id, 10) !== conf.user.user_id) {
						for (var o = 0, r = [s(e), u(e), l(e), p(), d({
								version: n
							}), {
								random: +new Date
							}], a = r.length; o < a; o++)
							for (var i in r[o]) r[o].hasOwnProperty(i) && t.push(i + "=" + (void 0 === r[o][i] ? "" : r[o][i]));
						var c = function(e) {
							e = ("https:" == document.location.protocol ? "https://pingtas.qq.com/webview" : "http://pingtcss.qq.com") + "/pingd?" + e.join("&").toLowerCase();
							var t = new Image;
							t.onload = t.onerror = t.onabort = function() {
								t = t.onload = t.onerror = t.onabort = null
							}//, t.src = e
							console.log("3333",e,t);
						};
						c(t), e.performanceMonitor && (t = function() {
							for (var t = f(), o = [], r = [], a = 0, i = [s(e), {
									r2: e.cid
								}, p(), {
									random: +new Date
								}], l = i.length; a < l; a++)
								for (var h in i[a]) i[a].hasOwnProperty(h) && r.push(h + "=" + (void 0 === i[a][h] ? "" : i[a][h]));
							for (h in t) t.hasOwnProperty(h) && ("domContentLoadedTime" == h ? r.push("r3=" + t[h].value) : o.push(t[h].value));
							t = d({
								pfm: o.join("_"),
								version: n
							}), r.push("ext=" + t.ext), c(r)
						}, void 0 !== window.performance && void 0 !== window.performance.timing && 0 != window.performance.timing.loadEventEnd ? t() : window.attachEvent ? window.attachEvent("onload", t) : window.addEventListener && window.addEventListener("load", t, !1))
					} else console.log("MTA H5\u5206\u6790\u9519\u8bef\u63d0\u793a\uff1a\u60a8\u9009\u62e9\u4e86\u7528\u6237\u7edf\u8ba1uv\uff0c\u8bf7\u8bbe\u7f6e\u4e1a\u52a1\u7684user_id\uff0c\u9700\u4e3aint\u7c7b\u578b");
				else console.log("MTA H5\u5206\u6790\u9519\u8bef\u63d0\u793a\uff1a\u60a8\u6ca1\u6709\u8bbe\u7f6esid")
			},
			clickStat: function(e, t) {
				var n = this.conf,
					o = [],
					r = s(n),
					a = l(n);
				if (n.cid) {
					r.dm = "taclick", r.url = e, a.r2 = n.cid, a.r5 = function(e) {
						e = void 0 === e ? {} : e;
						var t, n = [];
						for (t in e) e.hasOwnProperty(t) && n.push(t + "=" + encodeURIComponent(e[t]));
						return n.join(";")
					}(t);
					var i = 0;
					for (r = (n = [r, u(n), a, p(), d({
							version: this.version
						}), {
							random: +new Date
						}]).length; i < r; i++)
						for (var c in n[i]) n[i].hasOwnProperty(c) && o.push(c + "=" + (void 0 === n[i][c] ? "" : n[i][c]));
					o = ("https:" == document.location.protocol ? "https://pingtas.qq.com/webview" : "http://pingtcss.qq.com") + "/pingd?" + o.join("&");
					var h = new Image;
					h.onload = h.onerror = h.onabort = function() {
						h = h.onload = h.onerror = h.onabort = null
					}
				} else console.log("MTA H5\u5206\u6790\u9519\u8bef\u63d0\u793a\uff1a\u60a8\u6ca1\u6709\u8bbe\u7f6ecid,\u8bf7\u5230\u7ba1\u7406\u53f0\u5f00\u901a\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u5e76\u66f4\u65b0\u7edf\u8ba1\u4ee3\u7801")
			},
			clickShare: function(e) {
				var t = this.conf,
					n = i(t),
					o = void 0 === (n = n.param.CKTAG || n.param.ckatg) ? [] : n.split(".");
				if (t.cid) {
					n = [];
					var r = s(t),
						a = l(t);
					for (r.dm = "taclick_share", r.url = "mtah5-share-" + e, a.r2 = t.cid, a.r5 = function(e, t) {
							var n = [];
							return 2 === e.length && "mtah5_share" == e[0] && n.push(e[0] + "=" + e[1]), n.join(";")
						}(o), e = 0, r = (t = [r, u(t), a, p(), d({
							version: this.version
						}), {
							random: +new Date
						}]).length; e < r; e++)
						for (var c in t[e]) t[e].hasOwnProperty(c) && n.push(c + "=" + (void 0 === t[e][c] ? "" : t[e][c]));
					c = ("https:" == document.location.protocol ? "https://pingtas.qq.com/webview" : "http://pingtcss.qq.com") + "/pingd?" + n.join("&");
					var h = new Image;
					h.onload = h.onerror = h.onabort = function() {
						h = h.onload = h.onerror = h.onabort = null
					}
				} else console.log("MTA H5\u5206\u6790\u9519\u8bef\u63d0\u793a\uff1a\u60a8\u6ca1\u6709\u8bbe\u7f6ecid,\u8bf7\u5230\u7ba1\u7406\u53f0\u5f00\u901a\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u5e76\u66f4\u65b0\u7edf\u8ba1\u4ee3\u7801")
			}
		}, cc._RF.pop()
	}, {}]
}, {}, ["ArmyGroupController", "AwakeContent", "ColourBackground", "DeathController", "ControllerJailPrefab", "NodeZIndexController", "RandomActiveOnce", "SyncNodeAngle", "SyncSpriteFrame", "GiftBoxMgr", "KillerController", "KingController", "KingStoryLobbySceneBlockCheckPoint", "LobbySceneBlockCheckPoint", "AssetManager", "CameraManager", "JailSceneContent", "LevelManager", "LevelSceneManager", "NPCKillerController", "NPCKingController", "NewScript - 001", "NewScript - 002", "NewScript - 003", "NewScript - 004", "NewScript", "RaycastController", "RecorderMgr", "RestartContent", "M4399Sdk", "MTADemo", "MtaSdk", "OppoInsertAd", "OppoSdk", "QQAds", "QQDemoTs", "QQSdk", "QQShare", "QTTSdk", "SDkMgr", "TTAds", "TTDemoTs", "TTRecord", "TTSdk", "TTShare", "VivoSdk", "WXAds", "WXSdk", "WXShare", "mta-h5-analysis-2.0.15", "StoryKingScene", "StroyLoveScene", "StroyWCScene", "TimeDestroyObject", "ToastMgr", "YaoshuiMgr"]);