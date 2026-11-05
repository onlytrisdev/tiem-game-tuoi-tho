window.__require = function o(e, n, t) {
	function i(s, c) {
		if (!n[s]) {
			if (!e[s]) {
				var l = s.split("/");
				if (l = l[l.length - 1], !e[l]) {
					var r = "function" == typeof __require && __require;
					if (!c && r) return r(l, !0);
					if (a) return a(l, !0);
					throw new Error("Cannot find module '" + s + "'")
				}
				s = l
			}
			var u = n[s] = {
				exports: {}
			};
			e[s][0].call(u.exports, function(o) {
				return i(e[s][1][o] || o)
			}, u, u.exports, o, e, n, t)
		}
		return n[s].exports
	}
	for (var a = "function" == typeof __require && __require, s = 0; s < t.length; s++) i(t[s]);
	return i
}({
	ADManager: [function(o, e) {
		"use strict";
		cc._RF.push(e, "f76d5wei39MTI2VeiOrj9Zh", "ADManager");
		var n = o("./NativeBridge");
		window.ADTYPE = {
			FULL: "fullVideo",
			NATIVE: "native",
			NORMAL: "normal"
		};
		var t = "ADManager===>>>",
			i = cc.Class({
				initAD: function() {
					console.info('999');
					if (console.log(t, "initAD"), this.loadSubpackage(), !isDebugSDK) switch (GameChannel) {
						case CHANNEL.toutiao:
							TouTiaoTools.initial();
							break;
						case CHANNEL.qq:
							this.qqSDK = o("qqUtil"), this.qqSDK.initial();
							break;
						case CHANNEL.uc:
							this.ucSDK = o("ucUtil"), this.ucSDK.initial();
							break;
						case CHANNEL.vivo:
							this.vivoSDK = o("vivoUtil"), this.vivoSDK.initial(), this.initPrefab();
							break;
						case CHANNEL.oppo:
							this.oppoSDK = o("oppoUtil"), this.oppoSDK.initial(), this.initPrefab();
							break;
						case CHANNEL.ks:
							this.ksSDK = o("ksUtil"), this.ksSDK.initial()
					}
				},
				loadSubpackage: function() {
					cc.assetManager.loadBundle("Game", function(o, e) {
						o ? console.log(o) : (console.log("load subpackage successfully."), GameData.GameBundle = e)
					})
				},
				initPrefab: function() {
					null == GameData.Native_interstitial && cc.resources.load("games/native_interstitial", function(o, e) {
						o ? console.log("\u8f7d\u5165\u9884\u5236\u8d44\u6e90\u5931\u8d25, \u539f\u56e0:" + o) : e instanceof cc.Prefab ? GameData.Native_interstitial = e : console.log("\u4f60\u8f7d\u5165\u7684\u4e0d\u662f\u9884\u5236\u8d44\u6e90!")
					})
				},
				showBanner: function() {
					console.info('999');
					if (console.log(t, "showBanner"), !isDebugSDK) switch (GameChannel) {
						case CHANNEL.toutiao:
							TouTiaoTools.showBanner();
							break;
						case CHANNEL.uc:
							this.ucSDK.showBanner();
							break;
						case CHANNEL.vivo:
							this.vivoSDK.showBanner();
							break;
						case CHANNEL.oppo:
							this.oppoSDK.showBanner();
							break;
						case CHANNEL.qq:
							this.qqSDK.showBanner()
					}
				},
				closeBanner: function() {
					console.info('888');
					if (console.log(t, "closeBanner"), !isDebugSDK) switch (GameChannel) {
						case CHANNEL.toutiao:
							TouTiaoTools.hideBanner();
							break;
						case CHANNEL.uc:
							this.ucSDK.closeBanner();
							break;
						case CHANNEL.vivo:
							this.vivoSDK.closeBanner();
							break;
						case CHANNEL.oppo:
							this.oppoSDK.closeBanner();
							break;
						case CHANNEL.qq:
							this.qqSDK.closeBanner()
					}
				},
				showBoxBanner: function(o) {
					console.info('777');
					if (console.log(t, "showBoxBanner", o), !isDebugSDK) switch (GameChannel) {
						case CHANNEL.vivo:
							this.vivoSDK.showBoxBanner();
							break;
						case CHANNEL.qq:
							this.qqSDK.showBlock();
							break;
						case CHANNEL.oppo:
							this.oppoSDK.showBoxBanner()
					}
				},
				closeBoxBanner: function(o) {
					console.info('666');
					if (console.log(t, "closeBoxBanner", o), !isDebugSDK) switch (GameChannel) {
						case CHANNEL.vivo:
							this.vivoSDK.closeBoxBanner(), this.vivoSDK.closeBoxPortalAd();
							break;
						case CHANNEL.qq:
							this.qqSDK.closeBlock();
							break;
						case CHANNEL.oppo:
							this.oppoSDK.closeBoxBanner()
					}
				},
				moreGame: function() {
					console.info('555');
					if (!isDebugSDK) switch (GameChannel) {
						case CHANNEL.qq:
							this.qqSDK.showBox();
							break;
						case CHANNEL.vivo:
							this.vivoSDK.showBoxPortalAd();
							break;
						case CHANNEL.oppo:
							this.oppoSDK.showBoxPortal()
					}
				},
				showInterstitial: function(o) {
					console.info('444',o);
					if (void 0 === o && (o = ADTYPE.NORMAL), console.log(t, "showInterstitial", o), !isDebugSDK) switch (GameChannel) {
						case CHANNEL.toutiao:
							TouTiaoTools.showChaPing();
							break;
						case CHANNEL.uc:
							this.ucSDK.showInterstitial();
							break;
						case CHANNEL.vivo:
							this.vivoSDK.showInterstitial(o);
							break;
						case CHANNEL.oppo:
							this.oppoSDK.showInterstitial();
							break;
						case CHANNEL.qq:
							this.qqSDK.showInterstitial();
							break;
						case CHANNEL.ks:
							this.ksSDK.showInterstitial()
					}
				},
				showvideoAD: function(o) {
					console.info('111',o);
					GVAdBreak(function(){
						o && o();
					})					
				},
				Share: function(o) {
					console.info('222',o);
					switch (GameChannel) {
						case CHANNEL.toutiao:
							TouTiaoTools.fenxiangVideo(o)
					}
				},
				exitGame: function() {
					console.info('333');
					if (console.log(t, "exitGame"), !isDebugSDK) switch (GameChannel) {
						case CHANNEL.oppo:
							this.oppoSDK.exitGame();
							break;
						case CHANNEL.vivo:
							this.vivoSDK.exitGame();
							break;
						case CHANNEL.qq:
							this.qqSDK.exitGame();
							break;
						case CHANNEL.topon:
						case CHANNEL.android233:
							n.getInstance().exitGame()
					}
				}
			});
		e.exports = new i, cc._RF.pop()
	}, {
		"./NativeBridge": "NativeBridge",
		ksUtil: "ksUtil",
		oppoUtil: "oppoUtil",
		qqUtil: "qqUtil",
		ucUtil: void 0,
		vivoUtil: "vivoUtil"
	}],
	AudioManager: [function(o, e) {
		"use strict";
		cc._RF.push(e, "b761aOlfmpCS6DLgMMIKxtR", "AudioManager");
		var n = cc.Class({
			extends: cc.Component,
			playClickSound: function() {
				this.getUrl("Audio/click")
			},
			playOtherSound: function(o, e) {
				this.getUrl("Audio/" + o, e)
			},
			playAniSound: function(o) {
				this.getUrl("Audio/" + o)
			},
			playBgMusic: function() {
				cc.resources.load("Audio/bgm_menu", cc.AudioClip, function(o, e) {
					o ? console.error("load error => " + o) : cc.audioEngine.playMusic(e, !0)
				}.bind(this))
			},
			pauseMusic: function() {
				cc.audioEngine.pauseMusic()
			},
			stopMusic: function() {
				cc.audioEngine.stopMusic()
			},
			resumeMusic: function() {
				cc.audioEngine.resumeMusic()
			},
			stopAllEffect: function() {
				cc.audioEngine.stopAllEffects()
			},
			getUrl: function(o, e) {
				void 0 === e && (e = !1), cc.resources.load(o, cc.AudioClip, function(o, n) {
					o ? console.log("load error => " + o) : this.audioID = cc.audioEngine.playEffect(n, e)
				}.bind(this))
			}
		});
		e.exports = new n, cc._RF.pop()
	}, {}],
	ComicScene: [function(o, e) {
		"use strict";
		cc._RF.push(e, "dfffasCs5FGb6xZYqbTP5Er", "ComicScene");
		var n = o("../SDK/EventManager"),
			t = o("../Tools/AudioManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				longguAnim: dragonBones.ArmatureDisplay,
				btnSkip: cc.Node,
				privacyPolicy: cc.Node
			},
			onLoad: function() {
				Tools.isIpad(), n.EventLoading(), GameData.loadData(), this.kaichang()
			},
			start: function() {
				console.info('123');				
				var o = this;
				this.btnSkip.active = !1, this.longguAnim.timeScale = GameData.timeScale, this.node.on(cc.Node.EventType.TOUCH_END, function() {
					return o.btnSkip.active = !0
				}, this), this.isShowPrivacyPolicy = cc.sys.localStorage.getItem("privacyPolicy"), 1 != this.isShowPrivacyPolicy ? this.privacyPolicy.active = !0 : this.privacyPolicy.active = !1
			},
			onClickIAgree: function() {
				console.info('234');
				t.playClickSound(), cc.sys.localStorage.setItem("privacyPolicy", 1), this.privacyPolicy.active = !1
			},
			onClickINoAgree: function() {
				console.info('345');
				t.playClickSound(), n.exitGame()
			},
			kaichang: function() {
				console.info('456');
				var o = this;
				this.longguAnim.addEventListener(dragonBones.EventObject.COMPLETE, function() {
					o.toMenu()
				}, this), this.longguAnim.addEventListener(dragonBones.EventObject.SOUND_EVENT, function(o) {
					null != o.name && "" != o.name && t.playAniSound(o.name, !1)
				}, this)
			},
			onClickSkip: function() {
				t.playClickSound(), this.toMenu()
			},
			toMenu: function() {
				t.stopAllEffect(), cc.director.loadScene("MenuScene")
			}
		}), cc._RF.pop()
	}, {
		"../SDK/EventManager": "EventManager",
		"../Tools/AudioManager": "AudioManager"
	}],
	EventManager: [function(o, e) {
		"use strict";
		cc._RF.push(e, "1f5a00fwP5Gw4TvZ/4S4nHg", "EventManager");
		var n = o("./ADManager"),
			t = cc.Class({
				EventLoading: function() {
					n.initAD()
				},
				EventMenu_start: function() {
					switch (GameChannel) {
						case CHANNEL.vivo:
							this.EventMoreGame();
							break;
						case CHANNEL.qq:
							this.showBoxBanner()
					}
				},
				EventGame_onLoad: function() {
					switch (GameChannel) {
						case CHANNEL.toutiao:
							this.tt_RecordingStart();
							break;
						case CHANNEL.qq:
						case CHANNEL.uc:
						case CHANNEL.vivo:
						case CHANNEL.oppo:
							this.showBanner()
					}
				},
				EventClickOption: function() {
					switch (GameChannel) {
						case CHANNEL.vivo:
						case CHANNEL.oppo:
							0 == mainSwitch && this.showInterstitial(ADTYPE.NATIVE)
					}
				},
				EventShowOption: function() {
					var o = this;
					switch (GameChannel) {
						case CHANNEL.vivo:
						case CHANNEL.oppo:
							1 == mainSwitch && setTimeout(function() {
								return o.showInterstitial(ADTYPE.NATIVE)
							}, 500);
							break;
						case CHANNEL.qq:
						case CHANNEL.ks:
							setTimeout(function() {
								return o.showInterstitial(ADTYPE.NATIVE)
							}, 500)
					}
				},
				EventPause_start: function() {
					switch (GameChannel) {
						case CHANNEL.toutiao:
							this.showBanner(), this.showInterstitial();
							break;
						case CHANNEL.vivo:
							this.closeBoxBanner(), this.closeBanner(), this.showBoxBanner();
							break;
						case CHANNEL.oppo:
							this.closeBanner(), this.showBoxBanner();
							break;
						case CHANNEL.qq:
						case CHANNEL.uc:
						case CHANNEL.ks:
							this.showInterstitial()
					}
				},
				EventPause_resume: function() {
					switch (GameChannel) {
						case CHANNEL.oppo:
							this.showBanner(), this.closeBoxBanner()
					}
				},
				EventPause_clean: function() {
					switch (GameChannel) {
						case CHANNEL.toutiao:
							this.closeBanner();
							break;
						case CHANNEL.vivo:
							this.closeBoxBanner(), this.EventMoreGame();
							break;
						case CHANNEL.oppo:
							this.closeBoxBanner()
					}
				},
				EventSelect_start: function() {
					switch (GameChannel) {
						case CHANNEL.oppo:
						case CHANNEL.vivo:
						case CHANNEL.qq:
						case CHANNEL.ks:
							this.showInterstitial()
					}
				},
				EventSelect_clean: function() {
					switch (GameChannel) {
						case CHANNEL.oppo:
							this.closeBoxBanner()
					}
				},
				EventAchv_start: function() {
					switch (GameChannel) {
						case CHANNEL.oppo:
						case CHANNEL.vivo:
						case CHANNEL.qq:
						case CHANNEL.ks:
							this.showInterstitial()
					}
				},
				EventAchv_clean: function() {},
				EventGameWin_start: function() {
					switch (GameChannel) {
						case CHANNEL.toutiao:
							this.showBanner(), this.showInterstitial(), this.tt_RecordingEnd();
							break;
						case CHANNEL.vivo:
						case CHANNEL.oppo:
							this.closeBanner(), this.showInterstitial();
							break;
						case CHANNEL.qq:
						case CHANNEL.uc:
						case CHANNEL.ks:
							this.showInterstitial()
					}
				},
				EventGameWin_clean: function() {
					switch (GameChannel) {
						case CHANNEL.toutiao:
							this.closeBanner()
					}
				},
				EventGameLost_start: function() {
					switch (GameChannel) {
						case CHANNEL.toutiao:
							this.showBanner(), this.showInterstitial(), this.tt_RecordingEnd();
							break;
						case CHANNEL.vivo:
						case CHANNEL.oppo:
							this.closeBanner(), this.showInterstitial();
							break;
						case CHANNEL.qq:
						case CHANNEL.uc:
						case CHANNEL.ks:
							this.showInterstitial()
					}
				},
				EventGameLost_clean: function() {
					switch (GameChannel) {
						case CHANNEL.toutiao:
							this.closeBanner()
					}
				},
				EventMoreGame: function() {
					switch (GameChannel) {
						case CHANNEL.qq:
						case CHANNEL.vivo:
						case CHANNEL.oppo:
							n.moreGame()
					}
				},
				showBanner: function() {
					n.showBanner()
				},
				closeBanner: function() {
					n.closeBanner()
				},
				showBoxBanner: function(o) {
					n.showBoxBanner(o)
				},
				closeBoxBanner: function(o) {
					n.closeBoxBanner(o)
				},
				showInterstitial: function(o) {
					n.showInterstitial(o)
				},
				showVideo: function(o) {
					n.showvideoAD(o)
				},
				tt_RecordingStart: function() {
					GameChannel == CHANNEL.toutiao && TouTiaoTools.luzhiKaishi()
				},
				tt_RecordingEnd: function() {
					GameChannel == CHANNEL.toutiao && TouTiaoTools.luzhijieshu()
				},
				share: function(o) {
					n.Share(o)
				},
				exitGame: function() {
					n.exitGame()
				}
			});
		e.exports = new t, cc._RF.pop()
	}, {
		"./ADManager": "ADManager"
	}],
	GameData: [function(o, e) {
		"use strict";
		cc._RF.push(e, "348aalpDRtNgLlNc5egiGq7", "GameData"), window.CHANNEL = {
			wx: "wx",
			ios: "ios",
			toutiao: "TT",
			oppo: "Oppo",
			biadu: "BaiDu",
			qq: "qq",
			android233: "android233",
			test: "test",
			vivo: "vivo",
			web4399: "web4399",
			ks: "ks"
		}, window.GameChannel = CHANNEL.web4399, window.isDebugSDK = !1, window.GameData = {
			timeScale: 1,
			GAME_TAG: "StickManData",
			CONFIG: null,
			GAME_LEVEL: 1,
			GAME_MAXLEVEL: 8,
			PlayerData: {
				p_Level: 1,
				p_Achievement: {}
			},
			loadData: function() {
				var o = cc.sys.localStorage.getItem(GameData.GAME_TAG);
				"" != o && null != o ? GameData.PlayerData = JSON.parse(o) : GameData.saveData()
			},
			saveData: function() {
				cc.sys.localStorage.setItem(GameData.GAME_TAG, JSON.stringify(GameData.PlayerData))
			}
		}, cc._RF.pop()
	}, {}],
	GameScene: [function(o, e) {
		"use strict";
		cc._RF.push(e, "901bdDS0ShG4YdVEh+qWxEq", "GameScene");
		var n = o("../SDK/EventManager"),
			t = o("../Tools/AudioManager"),
			i = o("../Tools/LayerManager"),
			a = "GameDataBind===>>>";
		cc.Class({
			extends: cc.Component,
			properties: {
				mainAniStory: dragonBones.ArmatureDisplay,
				mainAniResult: dragonBones.ArmatureDisplay,
				optionLayer: cc.Node
			},
			onLoad: function() {
				var o = this;
				GameData.gameDataBind = this, Tools.isIpad(), n.EventGame_onLoad(), i.addGameUI(function() {
					return o.GamePause()
				}, function() {
					return o.GameResume()
				}), this.gameConfig = GameData.CONFIG[GameData.GAME_LEVEL], cc.audioEngine.stopAll(), this.showOption(!1), this.selectOption = null
			},
			start: function() {
				var o = this;
				this.mainAniStory.timeScale = GameData.timeScale, this.mainAniResult.timeScale = GameData.timeScale, this.mainAniStory.playAnimation(this.gameConfig.ani, 1), this.mainAniResult.node.active = !1, this.mainAniStory.addEventListener(dragonBones.EventObject.COMPLETE, function(e) {
					e.type === dragonBones.EventObject.COMPLETE && (console.log(a, "\u5267\u60c5\u52a8\u753b\u64ad\u653e\u5b8c\u6210\u4e86"), o.showOption(!0))
				}, this), this.mainAniResult.addEventListener(dragonBones.EventObject.COMPLETE, function(e) {
					if (e.type === dragonBones.EventObject.COMPLETE) {
						var n = o.mainAniResult.animationName;
						console.log(a, "\u52a8\u753b\u64ad\u653e\u5b8c\u6210\u4e86", n), "win" == o.selectOption ? o.GameWin() : "lost" == o.selectOption && o.GameLost()
					}
				}, this), this.mainAniStory.addEventListener(dragonBones.EventObject.SOUND_EVENT, this.sound_event, this), this.mainAniResult.addEventListener(dragonBones.EventObject.SOUND_EVENT, this.sound_event, this)
			},
			sound_event: function(o) {
				null != o.name && "" != o.name && t.playAniSound(o.name)
			},
			onClickOption: function(o, e) {
				console.log(a, "onClickOption", e), this.mainAniStory.node.active = !1;
				var n = this.gameConfig["result" + e];
				if (this.selectOption = n, GameData.CONFIG.Achievement[GameData.GAME_LEVEL])
					for (var t = GameData.CONFIG.Achievement[GameData.GAME_LEVEL].option, i = 0; i < t.length; i++) e == t[i] && (GameData.PlayerData.p_Achievement[GameData.GAME_LEVEL] || (GameData.PlayerData.p_Achievement[GameData.GAME_LEVEL] = {}), GameData.PlayerData.p_Achievement[GameData.GAME_LEVEL][i] = this.gameConfig["Option" + e], GameData.saveData());
				console.log("===>>>>", GameData.PlayerData.p_Achievement), "win" == n ? 0 == this.gameConfig.winNext ? this.GameWin() : this.showResultAni(this.gameConfig["Option" + e]) : "lost" == n && this.showResultAni(this.gameConfig["Option" + e]), this.showOption(!1)
			},
			showOption: function(o) {
				this.optionLayer.active = o, n.EventShowOption()
			},
			showResultAni: function(o) {
				this.mainAniResult.node.active = !0, this.mainAniResult.playAnimation(o, 1)
			},
			GameWin: function() {
				if (GameData.GAME_LEVEL += 1, GameData.GAME_LEVEL > GameData.GAME_MAXLEVEL) GameData.GAME_LEVEL = GameData.GAME_MAXLEVEL, GameData.PlayerData.p_Level = GameData.GAME_LEVEL, i.showGameWin(), GameData.saveData();
				else {
					GameData.GAME_LEVEL > GameData.PlayerData.p_Level && (GameData.PlayerData.p_Level = GameData.GAME_LEVEL), GameData.saveData();
					var o = Tools.getSceneName(GameData.GAME_LEVEL);
					cc.director.loadScene(o)
				}
			},
			GameLost: function() {
				i.showGameLost()
			},
			GamePause: function() {
				this.mainAniStory.timeScale = 0, this.mainAniResult.timeScale = 0
			},
			GameResume: function() {
				this.mainAniStory.timeScale = GameData.timeScale, this.mainAniResult.timeScale = GameData.timeScale
			}
		}), cc._RF.pop()
	}, {
		"../SDK/EventManager": "EventManager",
		"../Tools/AudioManager": "AudioManager",
		"../Tools/LayerManager": "LayerManager"
	}],
	LayerManager: [function(o, e) {
		"use strict";
		cc._RF.push(e, "f7172MUQm9DFYAQh4uPIsZ4", "LayerManager");
		var n = "prefabs/",
			t = cc.Class({
				extends: cc.Component,
				addGameUI: function(o, e) {
					Tools.loadPrefab(n + "uiNode", function(n) {
						if (n) {
							var t = cc.instantiate(n);
							cc.find("Canvas").addChild(t), t.getComponent("gameUI").initial(o, e)
						}
					})
				},
				showPauseLayer: function(o) {
					Tools.loadPrefab(n + "pauseLayer", function(e) {
						if (e) {
							var n = cc.instantiate(e);
							cc.find("Canvas").addChild(n), n.getComponent("pauseLayer").initial(o)
						}
					})
				},
				showSelectLevel: function() {
					Tools.loadPrefab(n + "levelLayer", function(o) {
						if (o) {
							var e = cc.instantiate(o);
							cc.find("Canvas").addChild(e)
						}
					})
				},
				showAchievement: function() {
					Tools.loadPrefab(n + "achievementLayer", function(o) {
						if (o) {
							var e = cc.instantiate(o);
							cc.find("Canvas").addChild(e)
						}
					})
				},
				showGameWin: function() {
					Tools.loadPrefab(n + "gameWin", function(o) {
						if (o) {
							var e = cc.instantiate(o);
							cc.find("Canvas").addChild(e)
						}
					})
				},
				showGameLost: function() {
					Tools.loadPrefab(n + "gameLost", function(o) {
						if (o) {
							var e = cc.instantiate(o);
							cc.find("Canvas").addChild(e)
						}
					})
				},
				showGameShare: function() {
					Tools.loadPrefab(n + "gameShare", function(o) {
						if (o) {
							var e = cc.instantiate(o);
							cc.find("Canvas").addChild(e)
						}
					})
				}
			});
		e.exports = new t, cc._RF.pop()
	}, {}],
	MenuScene: [function(o, e) {
		"use strict";
		cc._RF.push(e, "764decUeWxKLKnCrorUPknp", "MenuScene");
		var n = o("../SDK/EventManager"),
			t = o("../Tools/AudioManager"),
			i = o("../Tools/LayerManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				longguAnim: dragonBones.ArmatureDisplay,
				config: cc.JsonAsset,
				privacyPolicy: cc.Node
			},
			onLoad: function() {
				n.EventLoading(), t.playBgMusic(), GameData.CONFIG = this.config.json, Tools.isIpad(), this.isClickStart = !1
			},
			start: function() {
				n.EventMenu_start(), this.isShowPrivacyPolicy = cc.sys.localStorage.getItem("privacyPolicy"), 1 != this.isShowPrivacyPolicy ? this.privacyPolicy.active = !0 : this.privacyPolicy.active = !1, this.longguAnim.addEventListener(dragonBones.EventObject.SOUND_EVENT, this.sound_event, this)
			},
			sound_event: function(o) {
				null != o.name && "" != o.name && t.playAniSound(o.name)
			},
			kaichangcallBack: function(o) {
				o.type === dragonBones.EventObject.COMPLETE && ("newAnimation_1" == this.longguAnim.animationName && this.toGame(), console.log("\u52a8\u753b\u64ad\u653e\u5b8c\u6210\u4e86--------------------kaichangcallBack"))
			},
			jixumaoxianCB: function() {
				t.playClickSound(), GameData.PlayerData.p_Level >= 10 ? (GameData.PlayerData.p_Level = 1, GameData.GAME_LEVEL = GameData.PlayerData.p_Level, GameData.saveData()) : GameData.GAME_LEVEL = GameData.PlayerData.p_Level, this.toGame()
			},
			playAni: function() {
				this.kaichang("newAnimation_1")
			},
			toGame: function() {
				var o = Tools.getSceneName(GameData.GAME_LEVEL);
				cc.director.loadScene(o)
			},
			onClickAchievement: function() {
				t.playClickSound(), i.showAchievement()
			},
			onClickSelectLevel: function() {
				t.playClickSound(), i.showSelectLevel()
			},
			onClickPrivacyPolicy: function() {
				this.privacyPolicy.active = !0, this.privacyPolicy.getChildByName("btn_noAgree").active = !1
			},
			onClickMoreGame: function() {
				t.playClickSound(), n.EventMoreGame()
			},
			onClickIAgree: function() {
				t.playClickSound(), cc.sys.localStorage.setItem("privacyPolicy", 1), this.privacyPolicy.active = !1
			},
			onClickINoAgree: function() {
				t.playClickSound(), n.exitGame()
			}
		}), cc._RF.pop()
	}, {
		"../SDK/EventManager": "EventManager",
		"../Tools/AudioManager": "AudioManager",
		"../Tools/LayerManager": "LayerManager"
	}],
	NativeBridge: [function(o, e) {
		"use strict";
		cc._RF.push(e, "d84790V6zBNObKV/wPIRIZ2", "NativeBridge");
		var n = "NativeBridge===>>>",
			t = cc.Class({
				extends: cc.Component,
				properties: {
					isNativeAndroid: !0,
					isNativeIOS: !1,
					isIOSH5: !1,
					isAndroidH5: !1,
					_androidClassName: "org/cocos2dx/javascript/AppActivity",
					_iosClassName: "ADManager",
					isShowVideo: !1,
					AdReady: !1,
					gameCount: 0,
					fullInterstitialInterval: 0
				},
				statics: {
					instance: null
				},
				initPlatform: function() {
					switch (console.log(n, "\u5e73\u53f0\u5224\u65ad platform" + GameChannel), GameChannel) {
						case CHANNEL.android233:
							console.log(n, "platform \u5b89\u5353"), this.isNativeAndroid = !0, this.isNativeIOS = !1, this._androidClassName = "org/cocos2dx/javascript/AppActivity", window.android && (this.AdReady = !0);
							break;
						case CHANNEL.ios:
							console.log(n, "platform IOS"), this.isNativeIOS = !0, this.isNativeAndroid = !1, this._iosClassName = "ADManager"
					}
					1 == this.isNativeAndroid && !this.AdReady && console.log("\u5e7f\u544a\u6ca1\u6709\u51c6\u5907\u597d \u8bf7\u68c0\u67e5initPlatform", window.android)
				},
				showBanner: function() {
					console.log(n, "showBanner"), this.AdReady && (this.isNativeAndroid ? window.android.showBanner() : this.isNativeIOS && jsb.reflection.callStaticMethod(this._iosClassName, "jsToOc:", "0"))
				},
				closeBanner: function() {
					console.log(n, "closeBanner"), this.AdReady && (this.isNativeAndroid ? window.android.closeBanner() : this.isNativeIOS && jsb.reflection.callStaticMethod(this._iosClassName, "jsToOc:", "8"))
				},
				showVideo: function(o) {
					var e = this;
					this.AdReady && (this.isShowVideo ? console.log(n, "showVideo...\u8bf7\u52ff\u91cd\u590d\u70b9\u51fb") : (this.isShowVideo = !0, console.log(n, "showVideo..." + this.isNativeAndroid + "....." + this.isNativeIOS), window.nativeBridge.videoSuccess = function() {
						console.log(n, "\u64ad\u653e\u89c6\u9891\u5b8c\u6210"), e.isShowVideo = !1, cc.director.resume(), o && o(), GameData.LastVideoTime = (new Date).getTime()
					}, window.nativeBridge.videoFailed = function() {
						console.log(n, "\u64ad\u653e\u89c6\u9891\u5931\u8d25"), e.isShowVideo = !1, cc.director.resume()
					}, window.doRewardCallback = function(o) {
						switch (o = parseInt(o), console.log("watchAd doRewardCallback. type: " + o), o) {
							case 0:
							case 1:
								window.nativeBridge.videoFailed && window.nativeBridge.videoFailed();
								break;
							case 2:
								window.nativeBridge.videoSuccess && window.nativeBridge.videoSuccess()
						}
					}, cc.director.pause(), this.isNativeAndroid ? (window.android.videoRewardCb = window.nativeBridge.videoSuccess, window.android.videoFailCb = window.nativeBridge.videoFailed, window.android.videoAD(0)) : this.isNativeIOS && jsb.reflection.callStaticMethod(this._iosClassName, "jsToOc:", "2")))
				},
				showInterstitial: function(o) {
					if (console.log(n, "showInterstatitial", o), this.AdReady)
						if (this.isNativeAndroid) switch (o) {
							case ADTYPE.FULL:
								window.android.showFullVideoAD();
								break;
							case ADTYPE.NATIVE:
								window.android.showNativeAD();
								break;
							case ADTYPE.NOTMAL:
								window.android.showAD(0)
						} else this.isNativeIOS && (window.nativeBridge.ChaPingComplete = function() {
							cc.director.resume(), console.log(n, "\u63d2\u5c4f\u5b8c\u6210\u5b8c\u6210")
						}, cc.director.pause(), jsb.reflection.callStaticMethod(this._iosClassName, "jsToOc:", "1"))
				}
			});
		window.nativeBridge = {}, t.getInstance = function() {
			return null == t.instance && (t.instance = new t), t.instance
		}, e.exports = t, cc._RF.pop()
	}, {}],
	NativeInterstitial: [function(o, e) {
		"use strict";
		cc._RF.push(e, "1f9e0UxCj1NYb/3ST6LZ1rH", "NativeInterstitial"), cc.Class({
			extends: cc.Component,
			properties: {
				bj: cc.Sprite,
				icon: cc.Sprite,
				tile: cc.Label,
				desc: cc.Label,
				closeNode: cc.Node
			},
			InitData: function(o, e, n, t, i, a) {
				var s = this;
				switch (o ? (cc.loader.load(o, function(o, e) {
						s.bj.spriteFrame = new cc.SpriteFrame(e)
					}), this.tile.string = n, this.desc.string = t, console.log("show chaping ui1")) : (cc.loader.load(e, function(o, e) {
						s.icon.spriteFrame = new cc.SpriteFrame(e)
					}), this.tile.string = n, this.desc.string = t, console.log("show chaping ui2")), this.adCallBackquit = i, this.adCallBacktouch = a, console.log("show chaping  end"), GameChannel) {
					case CHANNEL.oppo:
						this.closeNode.scale = Number(window.closeBtnScale)
				}
			},
			touchGGBtn: function() {
				console.log("touchGGBtn"), this.adCallBacktouch(this.node)
			},
			quitBtn: function() {
				console.log("touchGGBtn  quitBtn"), this.adCallBackquit(this.node)
			}
		}), cc._RF.pop()
	}, {}],
	TTGameConfig: [function(o, e) {
		"use strict";
		cc._RF.push(e, "2e2c98KNW1H4LxfnSe7UA2n", "TTGameConfig"), window.mainSwitch = 0, window.interstitial90RealTime = 0, window.closeBtnScale = 1, window.openIBn = !1, window.openRandVideo = 0, window.operating = !1, window.openRandShare = 0, window.bannerWudian = !1, window.shareVideo = 0, window.shareVideoURL = [], window.showModal = !1, window.locationList = "", window.nativeVideoURL = "", window.keng = !1, window.wx_bannerID = "", window.wx_videoID = "", window.wx_chapingID = "", cc._RF.pop()
	}, {}],
	Tools: [function(o, e) {
		"use strict";
		cc._RF.push(e, "54576kqXYJDuLyU1HAMW/cn", "Tools"), window.Tools = {
			getSceneName: function(o) {
				var e = cc.js.formatStr("Bundle/Game/Scene/gameScene%d", o);
				return console.log("\u8fdb\u5165\u5173\u5361", e), e
			},
			timeDifc: function(o, e) {
				var n = new Date(o),
					t = new Date(e);
				return n.getTime() > t.getTime() ? 0 : parseInt((t.getTime() - n.getTime()) / 1e3)
			},
			PrefixInteger: function(o, e) {
				return ("0000000000000000" + o).substr(-e)
			},
			getDateTimes: function() {
				return Date.now() - 1541e9
			},
			setBool: function(o, e) {
				cc.sys.localStorage.setItem(o, e.toString())
			},
			getBool: function(o) {
				return null != cc.sys.localStorage.getItem(o) && "false" != cc.sys.localStorage.getItem(o)
			},
			setInt: function(o, e) {
				cc.sys.localStorage.setItem(o, e.toString())
			},
			getInt: function(o) {
				return Number(cc.sys.localStorage.getItem(o))
			},
			setString: function(o, e) {
				cc.sys.localStorage.setItem(o, e)
			},
			getString: function(o) {
				return cc.sys.localStorage.getItem(o)
			},
			RandomBCFCount: function(o) {
				for (var e = o, n = new Array, t = 0; t < e; t++) n[t] = t + 1;
				for (n.sort(function() {
						return .5 - Math.random()
					}), t = 0; t < e; t++) console.log(n[t] + " , ");
				return n
			},
			RandomInt: function(o, e) {
				return (e += 1) == o && (e = o, mid = 0), o + Math.floor(Math.random() * (e - o))
			},
			GaiLv: function(o) {
				return 1 + Math.floor(100 * Math.random()) <= o
			},
			GaiLv_Qian: function(o) {
				return 1 + Math.floor(1e3 * Math.random()) <= o
			},
			MyccpCountAngle: function(o, e) {
				var n = e,
					t = o;
				return cc.pAngle(cc.v2(-1, 0), cc.pSub(n, t)) < Math.PI / 2 ? 180 * cc.pAngle(cc.v2(0, -1), cc.pSub(n, t)) / Math.PI : 180 - 180 * cc.pAngle(cc.v2(0, -1), cc.pSub(n, t)) / Math.PI + 180
			},
			LoadPreFtabData: function(o) {
				cc.loader.loadRes(o, function(o, e) {
					if (!o && e instanceof cc.Prefab) {
						var n = cc.instantiate(e);
						cc.find("Canvas").addChild(n), n.zIndex = cc.macro.MAX_ZINDEX - 100
					}
				})
			},
			LoadPreFtabData2: function(o) {
				cc.loader.loadRes(o, function(o, e) {
					if (!o && e instanceof cc.Prefab) {
						var n = cc.instantiate(e);
						n.parent = cc.director.getScene(), n.zIndex = 8990
					}
				})
			},
			loadPrefab: function(o, e) {
				cc.resources.load(o, function(o, n) {
					o ? console.log("loadPrefab  ERROR...", o) : e && e(n)
				})
			},
			getNowFormatDate: function() {
				var o = new Date,
					e = o.getFullYear(),
					n = o.getMonth() + 1,
					t = o.getDate();
				return n >= 1 && n <= 9 && (n = "0" + n), t >= 0 && t <= 9 && (t = "0" + t), e + "/" + n + "/" + t
			},
			isIpad: function() {
				var o = cc.winSize.width / cc.winSize.height > .6;
				console.log("isNotFit", cc.winSize, o);
				var e = cc.find("Canvas").getComponent(cc.Canvas);
				o && (e.fitHeight = !0, e.fitWidth = !1, Tools.padBlackMask ? Tools.addPadMask(Tools.padBlackMask) : cc.resources.load("prefabs/ipad", function(o, e) {
					o || e instanceof cc.Prefab && (Tools.padBlackMask = e, Tools.addPadMask(Tools.padBlackMask))
				}))
			},
			addPadMask: function(o) {
				var e = cc.instantiate(o);
				cc.find("Canvas").addChild(e), e.zIndex = cc.macro.MAX_ZINDEX
			},
			getJsonCount: function(o) {
				return Object.keys(o).length
			}
		}, cc._RF.pop()
	}, {}],
	TouTiaoTools: [function(o, e) {
		"use strict";

		function n(o, e, n, t, i, a, s) {
			try {
				var c = o[a](s),
					l = c.value
			} catch (r) {
				return void n(r)
			}
			c.done ? e(l) : Promise.resolve(l).then(t, i)
		}

		function t(o) {
			return function() {
				var e = this,
					t = arguments;
				return new Promise(function(i, a) {
					var s = o.apply(e, t);

					function c(o) {
						n(s, i, a, c, l, "next", o)
					}

					function l(o) {
						n(s, i, a, c, l, "throw", o)
					}
					c(void 0)
				})
			}
		}
		cc._RF.push(e, "ca286Jd7h5BFojHrbV5ipZC", "TouTiaoTools"), window.TouTiaoTools = {
			TAG: "toutiao===>>>",
			TTID: {
				desc: "\u4ec0\u561b\u662f\u5feb\u4e50\u661f\u7403_\u5934\u6761",
				appid: "tt41a2371fde9a202102",
				share: "299765abemhb35sm2b",
				banner: "2aur786or6c2thhble",
				video: "2hv1mod1j4b2i8i355",
				interstitial: "1c11o4853dgbdg387b"
			},
			recorder: null,
			videoAD: null,
			bannerAD: null,
			interstitialAd: null,
			lastVideoTime: null,
			videoCallbackSuccess: null,
			videoCallbackFaile: null,
			RecorderStartTime: null,
			RecorderEndTime: null,
			resVideoPathTouTiao: null,
			labelDesc: {
				openIBn: 1,
				openScreenVideo: 0,
				openRandShare: 1,
				openIntervalBanner: 999,
				openIntervalInterstitial: 999,
				interstitial90RealTime: 60,
				openSceneValues: ["023001", "023002", "013002", "013003", "013011", "011014", "023023", "0"]
			},
			labelBanner: function() {
				setTimeout(function() {
					0 != parseInt(window.openIntervalBanner) && (console.log(TouTiaoTools.TAG, "60s\u663e\u793aBanner"), TouTiaoTools.showBanner(), TouTiaoTools.labelBanner())
				}, 6e4)
			},
			labelInterstitial: function() {
				0 != parseInt(window.openIntervalInterstitial) && setTimeout(function() {
					console.log(TouTiaoTools.TAG, "60s\u663e\u793a\u63d2\u5c4f"), TouTiaoTools.showChaPing(), TouTiaoTools.labelInterstitial()
				}, 6e4)
			},
			getVideoTime: function() {
				var o = (new Date).getTime() - TouTiaoTools.lastVideoTime;
				return console.log(TouTiaoTools.TAG, "===>>>\u4e0a\u6b21\u770b\u89c6\u9891\u65f6\u95f4", TouTiaoTools.lastVideoTime, "\u5dee\u503c", o, "\u95f4\u9694", 1e3 * window.interstitial90RealTime), 0 == window.interstitial90RealTime || o < 1e3 * window.interstitial90RealTime
			},
			initial: function() {
				if (console.log(TouTiaoTools.TAG, "initial"), window.tt) {
					TouTiaoTools.lastVideoTime = (new Date).getTime(), TouTiaoTools.labelBanner(), TouTiaoTools.labelInterstitial(), TouTiaoTools.showShare();
					var o = tt.getSystemInfoSync().windowWidth,
						e = tt.getSystemInfoSync().windowHeight;
					TouTiaoTools.recorder = tt.getGameRecorderManager(), TouTiaoTools.bannerAD = tt.createBannerAd({
						adUnitId: TouTiaoTools.TTID.banner,
						adIntervals: 30,
						style: {
							left: (o - 200) / 2,
							top: e - 200,
							width: 200
						}
					}), TouTiaoTools.bannerAD.onResize(function(n) {
						console.log(TouTiaoTools.TAG, "toutiao banner onResize= ", n.width, n.height), 0 != n.width && 0 != n.height && (TouTiaoTools.bannerAD.style.top = e - n.height, TouTiaoTools.bannerAD.style.left = (o - n.width) / 2)
					}), TouTiaoTools.bannerAD.onError(function(o) {
						console.log(TouTiaoTools.TAG, "toutiao banner onError= " + JSON.stringify(o))
					}), tt.createRewardedVideoAd && (TouTiaoTools.videoAd = tt.createRewardedVideoAd({
						adUnitId: TouTiaoTools.TTID.video
					}), TouTiaoTools.videoAd.load(), TouTiaoTools.videoAd.onLoad(t(regeneratorRuntime.mark(function o() {
						return regeneratorRuntime.wrap(function(o) {
							for (;;) switch (o.prev = o.next) {
								case 0:
									console.log(TouTiaoTools.TAG, "\u89c6\u9891\u5e7f\u544a\u7ec4\u4ef6\u52a0\u8f7d\u6210\u529f");
								case 1:
								case "end":
									return o.stop()
							}
						}, o)
					}))), TouTiaoTools.videoAd.onClose(function(o) {
						console.log(TouTiaoTools.TAG, "\u89c6\u9891\u5173\u95ed", o), 1 == o.isEnded && (TouTiaoTools.lastVideoTime = (new Date).getTime(), TouTiaoTools.AdSuccess())
					}), TouTiaoTools.videoAd.onError(function(o) {
						console.log(TouTiaoTools.TAG, "\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u51fa\u9519", o)
					})), tt.showFavoriteGuide({
						type: "bar",
						content: "\u4e00\u952e\u6dfb\u52a0\u5230\u6211\u7684\u5c0f\u7a0b\u5e8f",
						position: "bottom",
						success: function() {
							console.log(TouTiaoTools.TAG, "\u5f15\u5bfc\u7ec4\u4ef6\u5c55\u793a\u6210\u529f")
						},
						fail: function() {
							console.log(TouTiaoTools.TAG, "\u5f15\u5bfc\u7ec4\u4ef6\u5c55\u793a\u5931\u8d25")
						}
					})
				}
			},
			getVideoAd: function(o) {
				console.log(TouTiaoTools.TAG, "getVideoAd"), TouTiaoTools.videoCallbackSuccess = o, window.tt ? TouTiaoTools.videoAd.show().then(function() {
					console.log(TouTiaoTools.TAG, "\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a")
				}).catch(function() {
					TouTiaoTools.videoAd.load().then(function() {
						TouTiaoTools.videoAd.show()
					}).catch(function() {
						console.log(TouTiaoTools.TAG, "\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a\u5931\u8d25"), TouTiaoTools.showToast("\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25,\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01")
					})
				}) : o && o()
			},
			AdSuccess: function() {
				null != TouTiaoTools.videoCallbackSuccess && (TouTiaoTools.videoCallbackSuccess(), TouTiaoTools.videoCallbackSuccess = null)
			},
			AdFaile: function() {
				TouTiaoTools.showToast("\u672a\u89c2\u770b\u5b8c\u6574\u89c6\u9891\uff01"), null != TouTiaoTools.videoCallbackFaile && (TouTiaoTools.videoCallbackFaile(), TouTiaoTools.videoCallbackFaile = null)
			},
			showBanner: function() {
				console.log(TouTiaoTools.TAG, "show banner", openIBn), openIBn && window.tt && TouTiaoTools.bannerAD.show()
			},
			hideBanner: function() {
				console.log(TouTiaoTools.TAG, "hideBanner", openIBn), openIBn && window.tt && TouTiaoTools.bannerAD.hide()
			},
			showChaPing: function() {
				console.log(TouTiaoTools.TAG, "showChaPing"), window.tt && (TouTiaoTools.interstitialAd && (TouTiaoTools.interstitialAd = null), TouTiaoTools.interstitialAd = tt.createInterstitialAd({
					adUnitId: TouTiaoTools.TTID.interstitial
				}), TouTiaoTools.interstitialAd.load().then(function() {
					TouTiaoTools.interstitialAd.show().then(function() {
						console.log(TouTiaoTools.TAG, "\u5c55\u793a\u63d2\u5c4f\u5e7f\u544a\u6210\u529f\uff01")
					}).catch(function(o) {
						console.log(TouTiaoTools.TAG, "\u5c55\u793a\u63d2\u5c4f\u5e7f\u544a\u5931\u8d25\uff01", o)
					})
				}).catch(function(o) {
					console.log(TouTiaoTools.TAG, "\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", o)
				}), TouTiaoTools.interstitialAd.onLoad(function() {
					console.log(TouTiaoTools.TAG, "\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u6210\u529f")
				}), TouTiaoTools.interstitialAd.onClose(function() {
					console.log(TouTiaoTools.TAG, "\u63d2\u5c4f\u5e7f\u544a\u5173\u95ed"), TouTiaoTools.interstitialAd = null
				}))
			},
			luzhiKaishi: function() {
				window.tt && (console.log(TouTiaoTools.TAG, "\u5934\u6761\u5f55\u5c4f\u5f00\u59cb"), tt.onShow(function() {
					TouTiaoTools.recorder.resume()
				}), tt.onHide(function() {
					TouTiaoTools.recorder.pause()
				}), TouTiaoTools.recorder.stop(), TouTiaoTools.recorder.onStart(function() {
					console.log(TouTiaoTools.TAG, "\u5f55\u5c4f\u5f00\u59cb"), TouTiaoTools.RecorderStartTime = (new Date).getTime()
				}), TouTiaoTools.recorder.start({
					duration: 300
				}), TouTiaoTools.recorder.onError(function(o) {
					console.log(TouTiaoTools.TAG, "\u5f55\u5c4f\u5931\u8d25", JSON.stringify(o))
				}))
			},
			luzhijieshu: function() {
				window.tt && (tt.offShow(function() {}), tt.offHide(function() {}), TouTiaoTools.recorder.stop(), TouTiaoTools.recorder.onStop(function(o) {
					console.log(TouTiaoTools.TAG, "\u5934\u6761\u5f55\u5c4f\u7ed3\u675f\u8d44\u6e90" + JSON.stringify(o)), TouTiaoTools.RecorderEndTime = (new Date).getTime(), TouTiaoTools.resVideoPathTouTiao = o.videoPath, console.log(TouTiaoTools.TAG, "\u5934\u6761\u5f55\u5c4f\u7ed3\u675f\u5730\u5740" + TouTiaoTools.resVideoPathTouTiao)
				}))
			},
			fenxiangVideo: function(o, e) {
				var n = TouTiaoTools.RecorderEndTime - TouTiaoTools.RecorderStartTime;
				if (console.log(TouTiaoTools.TAG, "\u5f55\u5c4f\u65f6\u95f4", n / 1e3, "\u79d2"), n <= 4e3) return e && e(), e = null, void TouTiaoTools.showToast("\u5f55\u5c4f\u65f6\u95f4\u8fc7\u77ed\u4e0d\u80fd\u5206\u4eab\u54e6~");
				tt.shareAppMessage({
					channel: "video",
					title: "\u6c99\u96d5\u7ae5\u5e74\uff0c\u82b1\u5f0f\u6574\u6d3b\uff0c\u5feb\u6765\u4e00\u8d77\u6c99\u96d5\u5427",
					extra: {
						videoPath: TouTiaoTools.resVideoPathTouTiao,
						videoTopics: ["\u79cb\u5929\u7684\u7b2c\u4e00\u6b3e\u6c99\u96d5\u6e38\u620f\uff0c\u8981\u5206\u4eab\u7ed9\u6700\u597d\u7684\u5c0f\u4f19\u4f34\uff01\u4e00\u8d77\u91cd\u6e29\u7ae5\u5e74\uff0c\u6c99\u96d5\u6b22\u4e50\u65f6\u5149~", "\u4ec0\u561b\u662f\u5feb\u4e50\u661f\u7403", "\u6296\u97f3\u5c0f\u6e38\u620f"]
					},
					success: function() {
						console.log(TouTiaoTools.TAG, "\u5206\u4eab\u6210\u529f"), TouTiaoTools.showToast("\u5206\u4eab\u6210\u529f"), o && o(), o = null
					},
					fail: function(o) {
						console.log(TouTiaoTools.TAG, "\u5206\u4eab\u5931\u8d25", JSON.stringify(o)), TouTiaoTools.showToast("\u5206\u4eab\u5931\u8d25"), e && e(), e = null
					}
				}), console.log(TouTiaoTools.TAG, "\u5934\u6761\u5206\u4eab\u7ed3\u675f", TouTiaoTools.resVideoPathTouTiao)
			},
			showToast: function(o) {
				window.tt && tt.showToast({
					title: o,
					icon: "none",
					duration: 1e3,
					success: function() {},
					fail: function(o) {
						console.log(TouTiaoTools.TAG, "showToast\u8c03\u7528\u5931\u8d25", o)
					}
				})
			},
			showShare: function() {
				wx.onShareAppMessage(function() {
					return {
						templateId: TouTiaoTools.TTID.share,
						desc: "\u56de\u5473\u7ae5\u5e74\u8da3\u4e8b\uff0c\u540d\u6897\u82b1\u5f0f\u6574\u6d3b\uff0c\u4f53\u9a8c\u4e0d\u4e00\u6837\u7684\u6c99\u96d5\u7ae5\u5e74~",
						success: function() {
							console.log("onShareAppMessage\u6210\u529f\u8f6c\u53d1")
						},
						fail: function(o) {
							console.log("onShareAppMessage \u8c03\u7528\u5931\u8d25", o.errMsg)
						},
						complete: function() {
							console.log("onShareAppMessage \u8c03\u7528\u5b8c\u6210")
						}
					}
				}), tt.showShareMenu({
					success: function() {
						console.log("\u5df2\u6210\u529f\u663e\u793a\u8f6c\u53d1\u6309\u94ae")
					},
					fail: function(o) {
						console.log("showShareMenu \u8c03\u7528\u5931\u8d25", o.errMsg)
					},
					complete: function() {
						console.log("showShareMenu \u8c03\u7528\u5b8c\u6210")
					}
				})
			}
		}, cc._RF.pop()
	}, {}],
	achievementLayer: [function(o, e) {
		"use strict";
		cc._RF.push(e, "f4ee7XIcxhN0oTg9mc3jagy", "achievementLayer");
		var n = o("../SDK/EventManager"),
			t = o("../Tools/AudioManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				lb_jindu: cc.Label,
				jindu: cc.ProgressBar,
				achvContent: cc.Node,
				achvItem: cc.Prefab,
				aniLayer: cc.Prefab
			},
			onLoad: function() {
				var o = 0,
					e = 0;
				for (var n in console.log("ACHV===>>>", GameData.CONFIG.Achievement), GameData.CONFIG.Achievement)
					for (var t = GameData.CONFIG.Achievement[n].option, i = 0; i < t.length; i++) this.createItem(n, i), o++, GameData.PlayerData.p_Achievement[n] && null != GameData.PlayerData.p_Achievement[n][i] && e++;
				this.jindu.progress = e / o, this.lb_jindu.string = "Mở khóa " + e + "/" + o
			},
			start: function() {
				n.EventAchv_start()
			},
			createItem: function(o, e) {
				var n = this,
					t = cc.instantiate(this.achvItem);
				this.achvContent.addChild(t), t.getComponent("item_Achv").initial(o, e, function(o, e) {
					return n.showAnimation(o, e)
				})
			},
			onClickClose: function() {
				t.playClickSound(), this.clean()
			},
			showAnimation: function(o, e) {
				var n = cc.instantiate(this.aniLayer);
				cc.find("Canvas").addChild(n), n.getComponent("aniLayer").initial(o, e)
			},
			clean: function() {
				n.EventAchv_clean(), this.node.destroy()
			}
		}), cc._RF.pop()
	}, {
		"../SDK/EventManager": "EventManager",
		"../Tools/AudioManager": "AudioManager"
	}],
	aniLayer: [function(o, e) {
		"use strict";
		cc._RF.push(e, "34fd6D5laVDEaOEaLh44O7f", "aniLayer");
		var n = o("../Tools/AudioManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				mainAni: dragonBones.ArmatureDisplay
			},
			initial: function(o, e) {
				var n = new cc.Node;
				n.name = "animNode", n.parent = cc.find("Canvas");
				var t = "Ani/level" + o;
				this.loadDragonBones(this.mainAni, t, "Armature", e)
			},
			loadDragonBones: function(o, e, n, t, i) {
				void 0 === i && (i = 1), GameData.GameBundle.loadDir(e, function(e, a) {
					e || a.length <= 0 || (a.forEach(function(e) {
						e instanceof dragonBones.DragonBonesAsset && (o.dragonAsset = e), e instanceof dragonBones.DragonBonesAtlasAsset && (o.dragonAtlasAsset = e)
					}), o.armatureName = n, o.playAnimation(t, i))
				})
			},
			onLoad: function() {
				var o = this;
				this.mainAni.addEventListener(dragonBones.EventObject.COMPLETE, function() {
					return o.clean()
				}, this), this.mainAni.addEventListener(dragonBones.EventObject.SOUND_EVENT, this.sound_event, this), n.pauseMusic()
			},
			sound_event: function(o) {
				null != o.name && "" != o.name && n.playAniSound(o.name)
			},
			onClickSkip: function() {
				this.clean()
			},
			clean: function() {
				n.stopAllEffect(), n.resumeMusic(), this.node.destroy()
			}
		}), cc._RF.pop()
	}, {
		"../Tools/AudioManager": "AudioManager"
	}],
	gameLost: [function(o, e) {
		"use strict";
		cc._RF.push(e, "c4bca3BoFBIprIZzlkW6uVX", "gameLost");
		var n = o("../SDK/EventManager"),
			t = o("../Tools/AudioManager"),
			i = o("../Tools/LayerManager");
		cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function() {
				t.playOtherSound("lost")
			},
			start: function() {
				n.EventGameLost_start(), GameChannel == CHANNEL.toutiao && i.showGameShare()
			},
			onClickFuhuo: function() {
				var o = this;
				t.playClickSound(), n.showVideo(function() {
					console.log("video\u5931\u8d25\u590d\u6d3b"), o.clean()
				})
			},
			onClickAchievement: function() {
				t.playClickSound(), i.showAchievement()
			},
			onClickSelectLevel: function() {
				t.playClickSound(), i.showSelectLevel()
			},
			clean: function() {
				n.EventGameLost_clean();
				var o = Tools.getSceneName(GameData.GAME_LEVEL);
				cc.director.loadScene(o), this.node.destroy()
			}
		}), cc._RF.pop()
	}, {
		"../SDK/EventManager": "EventManager",
		"../Tools/AudioManager": "AudioManager",
		"../Tools/LayerManager": "LayerManager"
	}],
	gameShare: [function(o, e) {
		"use strict";
		cc._RF.push(e, "0ab93+IjCdK44yQp6dffiRj", "gameShare");
		var n = o("../SDK/EventManager");
		cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function() {},
			start: function() {},
			onClickShare: function() {
				var o = this;
				n.share(function() {
					console.log("gameShare", "share Success"), o.clean()
				})
			},
			onClickClose: function() {
				this.clean()
			},
			clean: function() {
				n.EventGameLost_clean(), this.node.destroy()
			}
		}), cc._RF.pop()
	}, {
		"../SDK/EventManager": "EventManager"
	}],
	gameUI: [function(o, e) {
		"use strict";
		cc._RF.push(e, "2fec3OPTYZC6L24ruCkUR4M", "gameUI");
		var n = o("../Tools/AudioManager"),
			t = o("../Tools/LayerManager");
		cc.Class({
			extends: cc.Component,
			properties: {},
			initial: function(o, e) {
				this.callback1 = o, this.callback2 = e
			},
			onClickPause: function() {
				var o = this;
				n.playClickSound(), this.callback1 && this.callback1(), t.showPauseLayer(function() {
					return o.callback2 && o.callback2()
				})
			}
		}), cc._RF.pop()
	}, {
		"../Tools/AudioManager": "AudioManager",
		"../Tools/LayerManager": "LayerManager"
	}],
	gameWin: [function(o, e) {
		"use strict";
		cc._RF.push(e, "6f2c60QeKhIzqWfGY04RzFD", "gameWin");
		var n = o("../SDK/EventManager"),
			t = o("../Tools/AudioManager"),
			i = o("../Tools/LayerManager");
		cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function() {
				t.playOtherSound("win")
			},
			start: function() {
				n.EventGameWin_start(), GameChannel == CHANNEL.toutiao && i.showGameShare()
			},
			chongxinxuanzeCB: function() {
				t.playClickSound(), GameData.GAME_LEVEL = 1;
				var o = Tools.getSceneName(GameData.GAME_LEVEL);
				this.clean(o)
			},
			backmenuCB: function() {
				this.clean("MenuScene"), t.playClickSound()
			},
			clean: function(o) {
				n.EventGameWin_clean(), cc.director.loadScene(o), this.node.destroy()
			},
			onClickAchievement: function() {
				t.playClickSound(), i.showAchievement()
			},
			onClickSelectLevel: function() {
				t.playClickSound(), i.showSelectLevel()
			}
		}), cc._RF.pop()
	}, {
		"../SDK/EventManager": "EventManager",
		"../Tools/AudioManager": "AudioManager",
		"../Tools/LayerManager": "LayerManager"
	}],
	item_Achv: [function(o, e) {
		"use strict";
		cc._RF.push(e, "d2f61j8vddIPpcrLoVP5fPj", "item_Achv");
		var n = o("../Tools/AudioManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				button: cc.Button,
				lockNode: cc.Node,
				finishNode: cc.Node,
				image: cc.Sprite
			},
			initial: function(o, e, n) {
				var t = this;
				this.lock = !1, GameData.PlayerData.p_Achievement[o] && (this.lock = GameData.PlayerData.p_Achievement[o][e]), console.log("AchvItem===>>>", o, e, this.lock), this.index = e, this.level = o, this.callback = n, this.button.enabled = this.lock, this.lockNode.active = !this.lock, this.finishNode.active = this.lock, cc.resources.load("image/achievement/" + o + e, cc.SpriteFrame, function(o, e) {
					o ? console.log("===>>>loadImage", o) : t.image.spriteFrame = e
				})
			},
			start: function() {},
			onClickSelf: function() {
				n.playClickSound(), this.callback && this.callback(this.level, this.lock)
			}
		}), cc._RF.pop()
	}, {
		"../Tools/AudioManager": "AudioManager"
	}],
	ksUtil: [function(o, e) {
		"use strict";
		cc._RF.push(e, "6a5c3nOfmlOwo/G4pjJbwTy", "ksUtil");
		var n = {
				desc: "\u8352\u5c9b\u6c42\u751f\u7b14\u8bb0",
				appID: "ks655555221090562205",
				video: "2300002274_01",
				interstitial: "2300002274_02"
			},
			t = null,
			i = null;

		function a() {
			console.log("===>>>ksUtil", "loadInterstitial"), i && (i.destroy(), i = null), (i = ks.createInterstitialAd({
				adUnitId: n.interstitial
			})).onError(function(o) {
				console.log("===>>>ksUtil", "\u63d2\u5c4f \u5e7f\u544a\u52a0\u8f7d\u5931\u8d25" + o), i = null
			})
		}

		function s() {
			console.log("===>>>ksUtil", "loadVideo"), t && t.destroy(), t = null, (t = ks.createRewardedVideoAd({
				adUnitId: n.video
			})).onLoad(function() {
				console.log("===>>>ksUtil", "sdk videoAd start ........"), cc.director.resume()
			}), t.onError(function() {
				cc.director.resume(), t = null
			})
		}
		e.exports = {
			initial: function() {
				s(), a()
			},
			showVideo: function(o) {
				if (console.log("===>>>ksUtil", "showVideo", t), !t) return console.log("===>>>ksUtil", "\u6ca1\u6709\u89c6\u9891--\u5148\u53bb\u52a0\u8f7d"), void s();
				t.show().then(function() {
					console.log("===>>>ksUtil", "\u6fc0\u52b1\u89c6\u9891\u663e\u793a\u6210\u529f")
				}).catch(function(o) {
					console.log("===>>>ksUtil", "\u6fc0\u52b1\u89c6\u9891\u663e\u793a\u5931\u8d25", o), s(), t.offLoad(), t.offClose()
				}), cc.director.pause(), t.onClose(function(e) {
					s(), cc.director.resume(), 1 == e.isEnded && o && o(), t.offLoad(), t.offClose()
				})
			},
			showInterstitial: function() {
				console.log("===>>>ksUtil", "showInterstitial"), i ? (i.onClose(function(o) {
					console.log("===>>>ksUtil", "\u63d2\u5c4f \u5e7f\u544a\u5173\u95ed", o), i.offClose(), i.offError(), a()
				}), i.show().catch(function(o) {
					a(), console.error("===>>>ksUtil", "\u63d2\u5c4f\u663e\u793a\u5931\u8d25", o)
				})) : a()
			},
			showToast: function(o) {
				ks.showToast({
					title: o,
					icon: "none",
					duration: 2e3
				})
			},
			exitGame: function() {
				ks.exitMiniProgram({
					success: function() {},
					fail: function() {},
					completet: function() {}
				})
			}
		}, cc._RF.pop()
	}, {}],
	oppoUtil: [function(o, e) {
		"use strict";
		cc._RF.push(e, "2e6a4t+MlNOxqvHUl2G2wZF", "oppoUtil");
		var n = "oppoUtils===>>>",
			t = {
				desc: "\u706b\u67f4\u4eba\u63a2\u9669\u8bb0",
				packName: "com.bwyxa.hcrtxj.nearme.gamecenter",
				appid: "30734567",
				appkey: "bQ9f9ouZd7Kko8C0s44S48wo0",
				appsecret: "56CB251d5D26B3DC49214e0A7e9e56c7",
				video: "465480",
				banner: "465476",
				native: "465478",
				hutui: "465482",
				hutui9: "465481"
			},
			i = !1,
			a = null,
			s = null,
			c = 0,
			l = null,
			r = null,
			u = null,
			d = null,
			h = null,
			f = null;

		function g() {
			0 != mainSwitch && 0 != window.interstitial90RealTime && setTimeout(function() {
				var o = (new Date).getTime() - c;
				console.log(n, "\u4e0a\u6b21\u770b\u89c6\u9891\u65f6\u95f4=" + c, "\u5dee\u503c=" + o, "\u95f4\u9694=" + 1e3 * window.interstitial90RealTime), o > 1e3 * window.interstitial90RealTime && p(), g()
			}, 1e3 * interstitial90RealTime)
		}

		function p() {
			console.log("===>>>oppoUtil", "showInterstitial"), 0 != mainSwitch && ((d = qg.createNativeAd({
				posId: t.native
			})).onLoad(function(e) {
				console.log("===>>>\u539f\u751f\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d", JSON.stringify(e.adList));
				var n = (u = e.adList[0]).adId,
					t = u.imgUrlList,
					i = u.iconUrlList,
					a = u.title,
					s = u.desc,
					c = cc.instantiate(GameData.Native_interstitial);
				c.parent = cc.find("Canvas"), c.zIndex = cc.macro.MAX_ZINDEX, c.name = "nchaping", d.reportAdShow({
					adId: n
				}), c.getComponent(o("NativeInterstitial")).InitData(t[0], i[0], a, s, function(o) {
					o && o.destroy(), d.destroy(), d = null
				}, function(o, e) {
					void 0 === e && (e = !1), o && o.destroy(), d.reportAdClick({
						adId: n
					}), e || (d.destroy(), d = null)
				})
			}), d.onError(function(o) {
				console.log("===>>>\u539f\u751f\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u9519\u8bef", JSON.stringify(o)), d.destroy()
			}), d.load())
		}

		function v() {
			console.log("===>>>oppoSDK", "loadBoxPortal"), qg.getSystemInfoSync().platformVersionCode >= 1076 ? ((l = qg.createGamePortalAd({
				adUnitId: t.hutui9
			})).onLoad(function() {
				console.log("\u4e92\u63a8\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a\u52a0\u8f7d\u6210\u529f")
			}), l.onClose(function() {
				console.log("\u4e92\u63a8\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a\u5173\u95ed"), l.destroy(), l = null, v()
			}), l.onError(function(o) {
				console.log("\u4e92\u63a8\u76d2\u5b50\u4e5d\u5bab\u683c" + o)
			})) : console.log("\u5feb\u5e94\u7528\u5e73\u53f0\u7248\u672c\u53f7\u4f4e\u4e8e1076\uff0c\u6682\u4e0d\u652f\u6301\u4e92\u63a8\u76d2\u5b50\u76f8\u5173 API")
		}

		function T(o) {
			console.log("===>>>oppoUtil---isDeskTop"), qg.hasShortcutInstalled({
				success: function(e) {
					console.log("\u684c\u9762\u56fe\u6807\u72b6\u6001\uff1f\uff1f" + e), o && o(e)
				},
				fail: function(e) {
					console.log("\u5931\u8d25------" + e), o && o(!1)
				},
				complete: function() {}
			})
		}

		function m(o) {
			qg.showToast({
				title: o,
				icon: "none",
				duration: 2e3
			})
		}
		e.exports = {
			loadBoxPortal: v,
			showBoxPortal: function() {
				console.log("===>>>oppoSDK", "showBoxPortal", l, JSON.stringify(l)), l && l.show().then(function() {
					console.log("show success")
				}).catch(function(o) {
					console.log("show fail with:" + o.errCode + "," + o.errMsg)
				})
			},
			initial: function() {
				c = (new Date).getTime(), h = qg.getSystemInfoSync().screenWidth, f = qg.getSystemInfoSync().screenHeight, qg.getSystemInfoSync().platformVersionCode >= 1051 ? i = !0 : qg.initAdService({
					appId: t.appid,
					isDebug: !1,
					success: function(o) {
						console.log("===>>>success:" + o.code + o.msg), i = 0 == o.code
					},
					fail: function(o) {
						i = !1, console.log("===>>>fail:" + o.code + o.msg)
					},
					complete: function() {}
				}), v(), g()
			},
			showBanner: function() {
				console.log("===>>>oppoUtil", "showNormalBanner", i), null != a && (a.hide(), a.destroy(), a = null, console.log("bannerAd \u4e0d\u662f\u7a7a\u7684")), console.log("\u5c4f\u5e55\u7684\u5bbd\u662f\u591a\u5c11  " + h), (a = qg.createBannerAd({
					adUnitId: t.banner,
					style: {
						top: f - .38 * h * (88 / 208),
						left: 0,
						width: h,
						height: 500
					}
				})).onLoad(function() {
					console.log("Banner\u5e7f\u544a\u52a0\u8f7d\u6210\u529f")
				}), a.onResize(function(o) {
					console.log("\u6539\u53d8size " + JSON.stringify(o)), a.show()
				}), a.onError(function(o) {
					console.log("====>>>" + o), console.log("====>>>oppo \u666e\u901abanner\u62a5\u9519 " + JSON.stringify(o)), a.offError(), a.offLoad(), a.destroy(), a = null
				}), a.onHide(function() {
					a.offError(), a.offLoad(), a.destroy(), a = null, console.log("====>>>banner \u5e7f\u544a\u9690\u85cf")
				})
			},
			closeBanner: function() {
				console.log("===>>>oppoUtil", "closeBanner"), i ? null != a && (a.hide(), a.destroy(), a = null) : console.log("===>>>\u5e7f\u544a\u63d2\u4ef6\u521d\u59cb\u5316\u5931\u8d25,\u8bf7\u7a0d\u540e\u91cd\u8bd522222")
			},
			closeInterstitial: function() {
				console.log("===>>>oppoUtil", "closeInterstitial"), d && (d.destroy(), d = null);
				var o = cc.find("Canvas/nchaping");
				o ? (console.log("===>>>\u5f53\u524d\u6709\u63d2\u5c4f\u5e7f\u544a"), o.active = !1, o.destroy()) : console.log("===>>>\u6ca1\u6709\u63d2\u5c4f\u5e7f\u544a")
			},
			showInterstitial: p,
			showBoxBanner: function() {
				console.log("===>>>oppoSDK", "showBoxBanner", qg.getSystemInfoSync().platformVersionCode), 0 != mainSwitch && (qg.getSystemInfoSync().platformVersionCode >= 1076 ? ((r = qg.createGameBannerAd({
					adUnitId: t.hutui
				})).hide().then(function() {
					console.log("hide success")
				}).catch(function(o) {
					console.log("hide fail with:" + o.errCode + "," + o.errMsg)
				}), r.onShow(function() {
					console.log("banner \u5e7f\u544a\u663e\u793a")
				}), r.show().then(function() {
					console.log("show success")
				}).catch(function(o) {
					console.log("show fail with:" + o.errCode + "," + o.errMsg)
				}), r.onLoad(function() {
					console.log("\u4e92\u63a8\u6a2a\u5e45\u5e7f\u544a\u52a0\u8f7d\u6210\u529f")
				}), r.onError(function(o) {
					console.log("\u4e92\u63a8\u6a2a\u5e45" + o)
				})) : console.log("\u5feb\u5e94\u7528\u5e73\u53f0\u7248\u672c\u53f7\u4f4e\u4e8e1076\uff0c\u6682\u4e0d\u652f\u6301\u4e92\u63a8\u6a2a\u5e45\u76f8\u5173 API"))
			},
			closeBoxBanner: function() {
				null != r && (console.log("\u4e92\u63a8\u6a2a\u5e45\u5e7f\u544a\u5173\u95ed"), r.destroy(), r = null)
			},
			showVideo: function(o) {
				c = (new Date).getTime(), (s = qg.createRewardedVideoAd({
					posId: t.video
				})).onLoad(function() {
					console.log("===>>>\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u6210\u529f"), s.show()
				}), s.load(), s.onError(function(o) {
					console.log("oppo \u89c6\u9891\u62a5\u9519 " + JSON.stringify(o)), m("\u89c6\u9891\u6b63\u5728\u52a0\u8f7d\u4e2d......"), s.offLoad(), s.offClose()
				}), s.onClose(function(e) {
					console.log("===>>>onclose", e), 1 == e.isEnded && o(), s.offLoad(), s.offClose()
				})
			},
			addDeskTop: function(o) {
				console.log("===>>>oppoUtil---addDeskTop"), T(function(e) {
					e ? (console.log("\u684c\u9762\u5df2\u521b\u5efa\u56fe\u6807\u4e0d\u80fd\u91cd\u590d\u521b\u5efa"), m("\u684c\u9762\u5df2\u521b\u5efa\u56fe\u6807\u4e0d\u80fd\u91cd\u590d\u521b\u5efa"), o && o(!0)) : qg.installShortcut({
						success: function() {
							qg.showLoading({
								title: "\u521b\u5efa\u4e2d"
							}), setTimeout(function() {
								T(function(e) {
									qg.hideLoading(), e ? (console.log("\u521b\u5efa\u684c\u9762\u56fe\u6807\u6210\u529f"), m("\u521b\u5efa\u684c\u9762\u56fe\u6807\u6210\u529f\uff01"), o && o(!0)) : (console.log("\u6dfb\u52a0\u5931\u8d25"), m("\u6dfb\u52a0\u5931\u8d25!"), o && o(!1))
								})
							}, 500)
						},
						fail: function(e) {
							console.log("\u6dfb\u52a0\u5931\u8d25" + JSON.stringify(e)), m("\u6dfb\u52a0\u5931\u8d25!\u8bf7\u7a0d\u540e\u91cd\u8bd5!"), o && o(!1)
						},
						complete: function() {
							console.log("\u5b8c\u6210")
						}
					})
				})
			},
			isDeskTop: T,
			showToast: m,
			exitGame: function() {
				console.log(n, "exitGame"), qg.exitApplication({
					data: "",
					success: function() {
						m("\u9000\u51fa\u6e38\u620f")
					},
					fail: function() {
						m("\u9000\u51fa\u6e38\u620f")
					},
					complete: function() {
						m("\u9000\u51fa\u6e38\u620f")
					}
				})
			}
		}, cc._RF.pop()
	}, {
		NativeInterstitial: "NativeInterstitial"
	}],
	option: [function(o, e) {
		"use strict";
		cc._RF.push(e, "3ff1bfEBoNE46E+EP1Nz2Gl", "option");
		var n = o("../SDK/EventManager");
		cc.Class({
			extends: cc.Component,
			properties: {},
			onClickSelf: function(o, e) {
				n.EventClickOption(), GameData.gameDataBind.onClickOption(o, e)
			}
		}), cc._RF.pop()
	}, {
		"../SDK/EventManager": "EventManager"
	}],
	pauseLayer: [function(o, e) {
		"use strict";
		cc._RF.push(e, "73ef35P1utB5qh9O9x/yzi8", "pauseLayer");
		var n = o("../SDK/EventManager"),
			t = o("../Tools/AudioManager"),
			i = o("../Tools/LayerManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				privacyPolicy: cc.Node
			},
			initial: function(o) {
				this.callback = o
			},
			start: function() {
				n.EventPause_start()
			},
			onClickResume: function() {
				t.playClickSound(), this.clean(), this.callback && this.callback()
			},
			onClickBackMenu: function() {
				t.playClickSound(), n.EventPause_resume(), this.clean(), cc.director.loadScene("MenuScene")
			},
			onClickPrivacyPolicy: function() {
				t.playClickSound(), this.privacyPolicy.active = !0
			},
			onClickClosePrivacyPolicy: function() {
				t.playClickSound(), this.privacyPolicy.active = !1
			},
			onClickSelectLevel: function() {
				t.playClickSound(), i.showSelectLevel()
			},
			onClickAchievement: function() {
				t.playClickSound(), i.showAchievement()
			},
			clean: function() {
				n.EventPause_clean(), this.node.destroy()
			}
		}), cc._RF.pop()
	}, {
		"../SDK/EventManager": "EventManager",
		"../Tools/AudioManager": "AudioManager",
		"../Tools/LayerManager": "LayerManager"
	}],
	qqUtil: [function(o, e) {
		"use strict";
		cc._RF.push(e, "5025feP4DxLlrrPqNBOJF34", "qqUtil");
		var n = {
				desc: "\u706b\u67f4\u4eba\u63a2\u9669\u8bb0",
				appID: "1112095105",
				appSecert: "",
				banner: "bf56fadd969be7866e361388281f8588",
				video: "a609bce39929b408eff237f553760922",
				box: "0b48f70c15dceed5edbb91a005645292",
				interstitial: "1200ff5d81b54e30cb24c01b1e7699ae",
				block: "85d33e1fe391e109ed45f743a3c356e5"
			},
			t = null,
			i = null,
			a = null,
			s = null,
			c = null,
			l = 0,
			r = 0;

		function u() {
			console.log("===>>>qqUtil", "loadVideo"), i = null, (i = qq.createRewardedVideoAd({
				adUnitId: n.video
			})).onLoad(function() {
				console.log("===>>>qqUtil", "sdk videoAd start ........"), cc.director.resume()
			}), i.onError(function() {
				cc.director.resume(), i = null
			})
		}

		function d() {
			console.log("===>>>qqUtil", "loadBox", a), a = qq.createAppBox({
				adUnitId: n.box
			})
		}

		function h() {
			console.log("===>>>qqUtil", "loadBlock", s, l, r), s = null, (s = qq.createBlockAd({
				adUnitId: n.block,
				size: 3,
				orientation: "vertical",
				style: {
					left: 16,
					top: 16
				}
			})).onLoad(function() {
				console.log("===>>>qqUtil", "\u79ef\u6728\u5e7f\u544a\u52a0\u8f7d\u6210\u529f")
			}), s.onError(function(o) {
				console.log("===>>>qqUtil", "\u79ef\u6728\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", o), s = null
			}), s.onResize(function(o) {
				console.log("===>>>qqUtil", "\u79ef\u6728\u5e7f\u544a\u5927\u5c0f\u53d8\u5316", o), s.style.left = l - 1.5 * o.width, s.style.top = .5 * r - .5 * o.height
			})
		}

		function f(o) {
			console.log("===>>>qqUtil", "isAddColorSign");
			var e = qq.isColorSignExistSync();
			console.log("===>>>qqUtil", "\u662f\u5426\u5b58\u5728\u5f69\u7b7e", e), o && o(e)
		}

		function g(o) {
			qq.showToast({
				title: o,
				icon: "none",
				duration: 2e3
			})
		}
		e.exports = {
			initial: function() {
				l = qq.getSystemInfoSync().screenWidth, r = qq.getSystemInfoSync().screenHeight, d(), h(), u()
			},
			showBanner: function() {
				console.log("===>>>qqUtil", "showBanner"), t && (t.destroy(), t = null), (t = qq.createBannerAd({
					adUnitId: n.banner,
					adIntervals: 30,
					style: {
						left: .2 * l,
						top: .8 * r,
						width: 300,
						height: .15 * r
					}
				})).onLoad(function() {
					console.log("===>>>qqUtil", "Banner\u5e7f\u544a\u52a0\u8f7d\u6210\u529f"), t.show().then(function() {
						console.log("===>>>qqUtil", "Banner\u663e\u793a\u6210\u529f")
					}).catch(function(o) {
						console.log("===>>>qqUtil", "Banner\u663e\u793a\u5931\u8d25", o)
					})
				}), t.onError(function(o) {
					console.log("===>>>qqUtil", "Banner\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", o), t = null
				}), t.onResize(function(o) {
					console.log("Resize\u540e\u6b63\u5f0f\u5bbd\u9ad8:", o.width, o.height), t.style.left = (l - o.width) / 2, t.style.top = r - o.height
				})
			},
			closeBanner: function() {
				console.log("===>>>qqUtil", "closeBanner"), t && (t.hide(), t.destroy(), t = null, console.log("===>>>qqUtil", "Banner \u6e05\u7406\u6210\u529f"))
			},
			showInterstitial: function() {
				console.log("===>>>qqUtil", "showInterstitial"), (c = qq.createInterstitialAd({
					adUnitId: n.interstitial
				})).onLoad(function() {
					console.log("===>>>qqUtil", "\u63d2\u5c4f \u5e7f\u544a\u52a0\u8f7d\u6210\u529f")
				}), c.onError(function(o) {
					console.log("===>>>qqUtil", "\u63d2\u5c4f \u5e7f\u544a\u52a0\u8f7d\u5931\u8d25" + o), c = null
				}), c.onClose(function(o) {
					console.log("===>>>qqUtil", "\u63d2\u5c4f \u5e7f\u544a\u5173\u95ed", o), c.offClose(), c.offLoad(), c.offError()
				}), c.show().catch(function(o) {
					console.error("===>>>qqUtil", "\u63d2\u5c4f\u663e\u793a\u5931\u8d25", o)
				})
			},
			showVideo: function(o) {
				if (console.log("===>>>qqUtil", "showVideo", i), !i) return console.log("===>>>qqUtil", "\u6ca1\u6709\u89c6\u9891--\u5148\u53bb\u52a0\u8f7d"), void u();
				i.show().then(function() {
					console.log("===>>>qqUtil", "\u6fc0\u52b1\u89c6\u9891\u663e\u793a\u6210\u529f")
				}).catch(function(o) {
					console.log("===>>>qqUtil", "\u6fc0\u52b1\u89c6\u9891\u663e\u793a\u5931\u8d25", o), u(), i.offLoad(), i.offClose()
				}), cc.director.pause(), i.onClose(function(e) {
					u(), cc.director.resume(), 1 == e.isEnded && o && o(), i.offLoad(), i.offClose()
				})
			},
			showBox: function() {
				console.log("===>>>qqUtil", "showBox", a), a ? (a.load().then(function() {
					a.show(), console.log("===>>>qqUtil", "\u76d2\u5b50\u5e7f\u544a\u663e\u793a\u6210\u529f")
				}), a.onClose(function() {
					console.log("===>>>qqUtil", "\u76d2\u5b50\u5e7f\u544a\u5173\u95ed"), a = null, d()
				})) : d()
			},
			showBlock: function() {
				console.log("===>>>qqUtil", "showBlock", s), s ? s.show().then(function() {
					console.log("===>>>qqUtil", "\u79ef\u6728\u5e7f\u544a\u663e\u793a\u6210\u529f")
				}).catch(function(o) {
					console.log("===>>>qqUtil", "\u79ef\u6728\u5e7f\u544a\u663e\u793a\u5931\u8d25", o), h()
				}) : h()
			},
			closeBlock: function() {
				console.log("===>>>qqUtil", "closeBlock", s), s ? (s.hide(), s.destroy(), s = null, h(), console.log("===>>>qqUtil", "\u79ef\u6728\u5e7f\u544a\u6e05\u7406\u6210\u529f", s)) : h()
			},
			share: function(o, e) {
				console.log("===>>>qqUtil", "share"), qq.shareAppMessage({
					title: "\u54b1\u4eec\u5728\u5b66\u6821\u4e5f\u603b\u8fd9\u4e48\u5e72\uff0c\u4f60\u8fd8\u8bb0\u5f97\u54b1\u4eec\u662f\u600e\u4e48\u73a9\u7684\u5417\uff1f\u5feb\u6765\u770b\u770b\u5427",
					success: function() {
						console.log("===>>>qqUtil", "\u5206\u4eab\u6210\u529f"), g("\u5206\u4eab\u6210\u529f"), o && o(), o = null
					},
					fail: function() {
						console.log("===>>>qqUtil", "\u5206\u4eab\u5931\u8d25"), g("\u5206\u4eab\u5931\u8d25"), e && e(), e = null
					},
					completet: function() {}
				})
			},
			showToast: g,
			isAddColorSign: f,
			addColorSign: function() {
				console.log("===>>>qqUtil", "addColorSign"), f(function(o) {
					o ? g("\u5df2\u6dfb\u52a0\u81f3\u5f69\u7b7e") : qq.addColorSign({
						success: function() {},
						fail: function() {},
						completet: function() {}
					})
				})
			},
			exitGame: function() {
				qq.exitMiniProgram({
					success: function() {},
					fail: function() {},
					completet: function() {}
				})
			}
		}, cc._RF.pop()
	}, {}],
	selectLevel: [function(o, e) {
		"use strict";
		cc._RF.push(e, "180d0B5da9K04tFHvMQsuhQ", "selectLevel");
		var n = o("../SDK/EventManager"),
			t = o("../Tools/AudioManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				levelPage: cc.PageView,
				face: cc.Animation,
				levelNode: [cc.Node],
				btnLeft: cc.Node,
				btnRight: cc.Node
			},
			onLoad: function() {
				this.btnLeft.active = !1;
				for (var o = 0; o < this.levelNode.length; o++) this.levelNode[o].getComponent(cc.Button).interactable = o < GameData.PlayerData.p_Level, this.levelNode[o].getChildByName("lock").active = GameData.PlayerData.p_Level - 1 < o
			},
			start: function() {
				n.EventSelect_start(), this.faceDir = !0, this.faceMove()
			},
			onClickLevel: function(o, e) {
				var i = this;
				t.playClickSound(), n.showVideo(function() {
					console.log("video\u9009\u62e9\u5173\u5361"), i.toGame(e)
				})
			},
			toGame: function(o) {
				this.clean(), t.stopMusic(), GameData.GAME_LEVEL = Number(o);
				var e = Tools.getSceneName(GameData.GAME_LEVEL);
				cc.director.loadScene(e)
			},
			onClickClose: function() {
				t.playClickSound(), this.node.destroy()
			},
			onClickLeft: function() {
				var o = this.levelPage.getCurrentPageIndex();
				this.levelPage.scrollToPage(o - 1, .5), this.btnLeft.active = !1, this.btnRight.active = !0
			},
			onClickRight: function() {
				var o = this.levelPage.getCurrentPageIndex();
				this.levelPage.scrollToPage(o + 1, .5), this.btnLeft.active = !0, this.btnRight.active = !1
			},
			faceMove: function() {
				var o = this;
				this.scheduleOnce(function() {
					1 == o.faceDir ? o.face.play("face_right") : o.face.play("face_left"), o.faceDir = !o.faceDir, o.faceMove()
				}, 5)
			},
			onMovePage: function() {
				t.playClickSound(), 0 == this.levelPage.getCurrentPageIndex() ? (this.btnLeft.active = !1, this.btnRight.active = !0) : (this.btnLeft.active = !0, this.btnRight.active = !1)
			},
			clean: function() {
				n.EventSelect_clean(), this.node.destroy()
			}
		}), cc._RF.pop()
	}, {
		"../SDK/EventManager": "EventManager",
		"../Tools/AudioManager": "AudioManager"
	}],
	shareUtil: [function(o, e) {
		"use strict";
		cc._RF.push(e, "2eb5971xG1P9ZjTOgdb6a4k", "shareUtil"), window.shareUtil = {
			share_successF: null,
			share_failF: null,
			GAME_SHARE_NOW: !1,
			share_startTime: 0,
			share_MaxTime: 0,
			initQQShow: function() {
				window.wx && (wx.onShow(function(o) {
					if (console.log("\u663e\u793a:" + JSON.stringify(o)), shareUtil.GAME_SHARE_NOW) {
						shareUtil.GAME_SHARE_NOW = !1;
						var e = (new Date).valueOf() - shareUtil.share_startTime;
						console.log(e + "...\u82b1\u8d39\u65f6\u95f4"), e > 1e3 * shareUtil.share_MaxTime ? (shareUtil.shareCount++, console.log("\u5206\u4eab\u6210\u529f"), null != shareUtil.share_successF && (shareUtil.share_successF(), shareUtil.share_successF = null)) : (console.log("\u5206\u4eab\u5931\u8d251"), null != shareUtil.share_failF && (shareUtil.share_failF(), shareUtil.share_failF = null))
					}
				}), wx.onHide(function() {
					shareUtil.GAME_SHARE_NOW
				}))
			},
			shareTo: function(o, e) {
				if (window.wx) {
					var n = wxUtil.getShareData();
					shareUtil.share_successF = null, shareUtil.share_failF = null, shareUtil.GAME_SHARE_NOW = !0, shareUtil.share_successF = o, shareUtil.share_failF = e, window.wx ? (shareUtil.share_MaxTime = shareUtil.getShareTime(), shareUtil.share_startTime = (new Date).valueOf(), wx.shareAppMessage(n)) : o && o()
				}
			},
			shareCount: 0,
			getShareTime: function() {
				if (window.wx) return shareUtil.shareCount <= 0 ? 3 : shareUtil.shareCount >= 1 && shareUtil.shareCount <= 2 ? 3.5 : shareUtil.shareCount >= 3 && shareUtil.shareCount <= 4 ? 4 : shareUtil.shareCount >= 5 && shareUtil.shareCount <= 6 ? 4.5 : shareUtil.shareCount >= 7 && shareUtil.shareCount <= 8 ? 5 : shareUtil.shareCount >= 9 && shareUtil.shareCount <= 10 ? 5.5 : 6
			}
		}, shareUtil.initQQShow(), cc._RF.pop()
	}, {}],
	uiSDK: [function(o, e) {
		"use strict";
		cc._RF.push(e, "cb0b3h4VZtH5aJrPSWNSTUr", "uiSDK"), cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function() {
				if ("btn_MoreGame" == this.node.name) switch (GameChannel) {
					case CHANNEL.qq:
					case CHANNEL.oppo:
						this.node.active = !0;
						break;
					default:
						this.node.active = !1
				}
				if ("4399sy" == this.node.name && (this.node.active = GameChannel == CHANNEL.web4399), "pause_achv" == this.node.name) switch (GameChannel) {
					case CHANNEL.vivo:
						this.node.y = -200
				}
				if ("pause_select" == this.node.name) switch (GameChannel) {
					case CHANNEL.vivo:
						this.node.y = -200
				}
				"logo" == this.node.name && (this.node.active = GameChannel != CHANNEL.qq), "logo_qq" == this.node.name && (this.node.active = GameChannel == CHANNEL.qq), "btn_privacyPolicy_menu" == this.node.name && (this.node.active = GameChannel == CHANNEL.qq)
			}
		}), cc._RF.pop()
	}, {}],
	vivoUtil: [function(o, e) {
		"use strict";
		cc._RF.push(e, "d57d3QyYyJCma48ATtUlZ48", "vivoUtil");
		var n = {
				desc: "\u706b\u67f4\u4eba\u63a2\u9669\u8bb0",
				packName: "com.bwyxa.hcrghj.vivominigame",
				cpid: "526de1d439139aeb6c0e",
				appid: "105534489",
				appkey: "11f792642fd6bdaa644b97fca8f2a38c",
				appsecret: "",
				mediaid: "",
				hutui: "763111cafbe546cc815b61d762b36c4a",
				hutui9: "f59c3e9df4474fda8b1f74147c345727",
				video: "be2c067fce034a8ebf310cd98e95f2f5",
				banner: "82cd310b11bd4a73b0ef79340dfcddb1",
				native: "56e189ed172f4fa689ddd355f2eec7a3",
				interstitial: "8d26ef1fbff048b58ab7f5bd9dc2ed5e"
			},
			t = "vivoUtil===>>>",
			i = null,
			a = !0,
			s = null,
			c = null,
			l = null,
			r = null,
			u = 0;

		function d() {
			0 != mainSwitch && 0 != window.interstitial90RealTime && setTimeout(function() {
				var o = (new Date).getTime() - u;
				console.log(t, "\u4e0a\u6b21\u770b\u89c6\u9891\u65f6\u95f4=" + u, "\u5dee\u503c=" + o, "\u95f4\u9694=" + 1e3 * window.interstitial90RealTime), o > 1e3 * window.interstitial90RealTime && f(ADTYPE.NORMAL), d()
			}, 1e3 * interstitial90RealTime)
		}

		function h() {
			console.log(t, "vivoUtil---closeBanner"), s && (s.hide(), s.destroy())
		}

		function f(o) {
			if (console.log(t, "showInterstitial", o), 0 != mainSwitch) switch (c && (c.hide(), c.destroy(), c = null), o) {
				case ADTYPE.NATIVE:
					p();
					break;
				case ADTYPE.NORMAL:
					g()
			}
		}

		function g() {
			console.log(t, "vivoUtil---showNormalInterstitial\u5f00\u59cb\u51c6\u5907 \u666e\u901a\u63d2\u5c4f");
			var o = qg.createInterstitialAd({
				posId: n.interstitial
			});
			o.show().then(function() {
				console.log(t, "vivo \u975e\u539f\u751f\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u6210\u529f")
			}), o.onError(function(o) {
				console.log(t, "\u63d2\u5c4f\u62a5\u9519" + JSON.stringify(o))
			})
		}

		function p() {
			if (qg.createCustomAd) {
				var o = qg.getSystemInfo().screenHeight;
				(c = qg.createCustomAd({
					posId: n.native,
					style: {
						top: o / 4,
						left: 0
					}
				})).onError(function(o) {
					console.log(t, "\u539f\u751f\u6a21\u677f\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", o)
				}), c.show().then(function() {
					console.log(t, "\u539f\u751f\u6a21\u677f\u5e7f\u544a\u5c55\u793a\u5b8c\u6210")
				}).catch(function(o) {
					console.log(t, "\u539f\u751f\u6a21\u677f\u5e7f\u544a\u5c55\u793a\u5931\u8d25", JSON.stringify(o))
				})
			}
		}

		function v(o) {
			console.log(t, "vivoUtil---isDeskTop"), qg.hasShortcutInstalled({
				success: function(e) {
					console.log(t, "\u684c\u9762\u56fe\u6807\u72b6\u6001\uff1f\uff1f" + e), o && o(e)
				},
				fail: function(e) {
					console.log(t, "\u5931\u8d25------" + e), o && o(!1)
				},
				complete: function() {}
			})
		}

		function T(o) {
			qg.showToast({
				message: o
			})
		}
		e.exports = {
			initial: function() {
				console.log(t, "initial"), u = (new Date).getTime(), d()
			},
			showBoxBanner: function() {
				0 != mainSwitch && (qg.createBoxBannerAd ? ((l = qg.createBoxBannerAd({
					posId: n.hutui
				})).onError(function(o) {
					console.log(t, "\u76d2\u5b50\u6a2a\u5e45\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", JSON.stringify(o))
				}), l.show().then(function() {
					console.log(t, "show success")
				})) : console.log(t, "\u6682\u4e0d\u652f\u6301\u4e92\u63a8\u76d2\u5b50\u76f8\u5173 API"))
			},
			closeBoxBanner: function() {
				console.log(t, "closeBoxBanner"), null != l && l.destroy()
			},
			showBoxPortalAd: function() {
				qg.createBoxPortalAd ? ((r = qg.createBoxPortalAd({
					posId: n.hutui9
				})).onError(function(o) {
					console.log(t, "\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", JSON.stringify(o))
				}), r.onClose(function() {
					console.log(t, "close"), r.isDestroyed || r.show()
				}), r.show().then(function() {
					console.log(t, "show success")
				})) : console.log(t, "\u6682\u4e0d\u652f\u6301\u4e92\u63a8\u76d2\u5b50\u76f8\u5173 API")
			},
			closeBoxPortalAd: function() {
				console.log(t, "closeBoxPortalAd"), null != r && (r.isDestroyed = !0, r.destroy())
			},
			showVideo: function(o) {
				console.log(t, "vivoUtil---getVideoAd"), u = (new Date).getTime(), a && (a = !1, (i = qg.createRewardedVideoAd({
					posId: n.video
				})).onLoad(function() {
					i.show().then(function() {
						console.log(t, "\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u6210\u529f")
					}).catch(function(o) {
						console.log(t, "\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u5931\u8d25", JSON.stringify(o)), T("\u6682\u65e0\u89c6\u9891\u5e7f\u544a......"), a = !0
					})
				}), i.onError(function(o) {
					a = !0, console.log(t, " \u89c6\u9891\u52a0\u8f7d\u9519\u8bef", JSON.stringify(o)), T("\u6682\u65e0\u5e7f\u544a......")
				}), i.onClose(function(e) {
					a = !0, e && e.isEnded ? (console.log(t, " \u89c6\u9891 play success"), o && o(), i.offLoad(), i.offError(), i.offClose()) : console.log(t, "\u89c6\u9891 play cancel")
				}), i.load())
			},
			showBanner: function(o) {
				void 0 === o && (o = "normal"), console.log(t, "showbanner", o), console.log(t, "vivoUtil---showNormalBanner"), null != s && h(), (s = qg.createBannerAd({
					posId: n.banner,
					style: {}
				})).onError(function(o) {
					console.log(t, "banner\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", o)
				}), s.onLoad(function() {
					console.log(t, "vivo Banner\u5e7f\u544a\u52a0\u8f7d\u6210\u529f"), s.show()
				}), s.show().then(function() {
					console.log(t, "banner\u5e7f\u544a\u5c55\u793a\u5b8c\u6210")
				}).catch(function(o) {
					console.log(t, "banner\u5e7f\u544a\u5c55\u793a\u5931\u8d25", JSON.stringify(o))
				})
			},
			closeBanner: h,
			showInterstitial: f,
			showToast: T,
			addDeskTop: function(o) {
				console.log(t, "vivoUtil---addDeskTop"), v(function(e) {
					e ? (console.log(t, "\u684c\u9762\u5df2\u521b\u5efa\u56fe\u6807\u4e0d\u80fd\u91cd\u590d\u521b\u5efa"), T("\u684c\u9762\u5df2\u521b\u5efa\u56fe\u6807\u4e0d\u80fd\u91cd\u590d\u521b\u5efa!"), o && o(!0)) : qg.installShortcut({
						success: function() {
							console.log(t, "\u521b\u5efa\u684c\u9762\u56fe\u6807\u6210\u529f"), T("\u521b\u5efa\u684c\u9762\u56fe\u6807\u6210\u529f\uff01"), o && o(!0)
						},
						fail: function(e) {
							console.log(t, "\u6dfb\u52a0\u5931\u8d25" + e), T("\u6dfb\u52a0\u5931\u8d25\uff01\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01"), o && o(!1)
						},
						complete: function() {
							console.log(t, "\u5b8c\u6210")
						}
					})
				})
			},
			isDeskTop: v,
			exitGame: function() {
				console.log(t, "exitGame"), qg.exitApplication({
					data: "",
					success: function() {
						T("\u9000\u51fa\u6e38\u620f")
					},
					fail: function() {
						T("\u9000\u51fa\u6e38\u620f")
					},
					complete: function() {
						T("\u9000\u51fa\u6e38\u620f")
					}
				})
			}
		}, cc._RF.pop()
	}, {}],
	wxUtil: [function(o, e) {
		"use strict";
		cc._RF.push(e, "4bf8cZq5hRAEYfLxNailATI", "wxUtil"), o("shareUtil"), window.wxUtil = {
			ADInit: function() {}
		}, wxUtil.ADInit(), cc._RF.pop()
	}, {
		shareUtil: "shareUtil"
	}]
}, {}, ["ADManager", "EventManager", "NativeBridge", "NativeInterstitial", "TTGameConfig", "TouTiaoTools", "ksUtil", "oppoUtil", "qqUtil", "shareUtil", "uiSDK", "vivoUtil", "wxUtil", "AudioManager", "GameData", "LayerManager", "Tools", "ComicScene", "GameScene", "MenuScene", "achievementLayer", "aniLayer", "gameLost", "gameShare", "gameUI", "gameWin", "item_Achv", "option", "pauseLayer", "selectLevel"]);