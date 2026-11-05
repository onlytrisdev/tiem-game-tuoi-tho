window.__require = function e(t, n, i) {
	function a(o, c) {
		if (!n[o]) {
			if (!t[o]) {
				var r = o.split("/");
				if (r = r[r.length - 1], !t[r]) {
					var l = "function" == typeof __require && __require;
					if (!c && l) return l(r, !0);
					if (s) return s(r, !0);
					throw new Error("Cannot find module '" + o + "'")
				}
				o = r
			}
			var h = n[o] = {
				exports: {}
			};
			t[o][0].call(h.exports, function(e) {
				return a(t[o][1][e] || e)
			}, h, h.exports, e, t, n, i)
		}
		return n[o].exports
	}
	for (var s = "function" == typeof __require && __require, o = 0; o < i.length; o++) a(i[o]);
	return a
}({
	AdManager: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "503c9JR26RL/bF+ypZRXP3K", "AdManager");
		var i = e("GameManager"),
			a = null,
			s = {
				watchVideoCallBack: function() {
					console.log("watchVideoCallBack..."), a && a()
				},
				showBanner: function() {},
				hideBanner: function() {},
				showInterstitial: function(e) {
					this.showInstertial(e)
				},
				showRewardVideo: function() {
					console.log("showRewardVideo...rewardType:",e,a);
					var e = this;
					configCat.gameController ? configCat.onReward() : i.curScene.GetReward()
					/* a = function() {
						e.VideoShowHandle()
					}, cc.game.pause(), window.mWatchAdCallback = function() {
						cc.game.resume(), a && a()
					}, void 0 !== window.sdk && "undefined" !== window.sdk.showBanner && window.sdk.showBanner() */
				},
				showInstertial: function(e) {
					console.log("showInstertial..."), cc.audioEngine.pauseAll(), cc.game.pause(), window.mWatchAdCallbackInter = function() {
						cc.game.resume(), cc.audioEngine.resumeAll()
					}, void 0 !== window.sdk && "undefined" !== window.sdk.showBanner && window.sdk.showBanner()
				},
				reportLogEvent: function() {
					console.log("reportLogEvent...")
				},
				VideoShowHandle: function() {
					configCat.gameController ? configCat.onReward() : i.curScene.GetReward()
				}
			};
		window.sdk = s, t.exports = {
			AdManager: s
		}, cc._RF.pop()
	}, {
		GameManager: "GameManager"
	}],
	AdsManager: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "a3e16OjNOZEfLJ9GMMZjeWU", "AdsManager");
		var i = e("AdManager"),
			a = e("GameManager");
		e("mta_analysis");
		window.VideoCallback = function() {
			console.log("Video Call Back;"), a.curScene.GetReward()
		}, window.VideoShowCallback = function() {
			a.StopMusic()
		}, window.VideoCloseCallback = function() {
			1 == a.musicOn && a.PlayMusic()
		};
		cc.Class({
			extends: cc.Component,
			properties: {
				bannerAd: {
					default: null,
					visible: !1
				},
				videoAd: {
					default: null,
					visible: !1
				},
				screenWidth: {
					default: 0,
					visible: !1
				},
				screenHeight: {
					default: 0,
					visible: !1
				},
				isInterLoad: !1,
				isVideoLoad: !1,
				isShow: !1,
				startTime: 0,
				interLoadTime: 0,
				blockLoadTime: 0,
				interCloseTime: 0,
				interShowTimes: 0,
				isInit: !1,
				lockType: 1,
				isRealUnlock: !0,
				WXBannerId: "adunit-85aae1b8287819ae",
				WXInterId: "adunit-4c846e9d0b2306ba",
				WXVideoId: "adunit-5d9eb19f7410cba9",
				WXBlockId: "adunit-3a6498cb5eb3f18f",
				TTBannerId: "dajh2h4i62f2ankh3i",
				TTInterId: "ipdi09aq9r5druuun5",
				TTVideoId: "1mkk17kl93n9798aa3",
				QQBannerId: "0594d2622ac1f41370432f75d0b0f35a",
				QQInterId: "c5d78671a21f6ca63ef51c9fbc45f682",
				QQVideoId: "ca495da6013ec69b817b33f5c067eb90",
				QQBoxId: "f9785ff90979fe671d8f1069609381ce",
				QQBlockId: "681236b1e69f60533b9e0f7cffe3b923",
				QQHBlockId: "a2438a0c9d9c6bb49cff8a8e8769bf57",
				SWANAppId: "",
				SWANBannerId: "",
				SWANInterId: "",
				SWANVideoId: "",
				OPPOAppId: "30438911",
				OPPOBannerId: "270294",
				OPPOInterId: "",
				OPPOVideoId: "270295",
				OPPONativeBannerId: "270297",
				OPPONativeInterId: "",
				OPPONativeIconId: "270298",
				VIVOBannerId: "b3f5f5071de24d638cb7f1eed21cddd6",
				VIVOInterId: "0f410564c77b478097f7f6ca08f45870",
				VIVOVideoId: "5db4502de23e4e0398c5e8ff55617c36",
				VIVONativeBannerId: "a5e1f0df63ee4d7a868cba10eabc172b",
				VIVONativeInterId: "dd2e1dfd95434ee8a7fc32936cc7bd9d",
				VIVONativeIconId: "a64d55541e374d208a4380a733a53c02",
				testFlag: 0,
				oppoInterFlag: 0
			},
			BannerFailHandle: function(e) {
				console.log("banner\u663e\u793a\u5931\u8d25"), "oppo" == a.channel && a.isBannerFirst && (a.adsManager.ShowNativeAd(1, 2, a.curScene.nativeControl.ShowNativeBanner), -1 == e.indexOf("1060") && a.adsManager.scheduleOnce(function() {
					a.adsManager.ShowBanner()
				}, 30))
			},
			BannerShowHandle: function() {
				console.log("banner\u663e\u793a\u6210\u529f"), a.adsManager.showBannerTime = a.GetNowTime();
				try {
					"vivo" != a.channel && "oppo" != a.channel || a.curScene && a.curScene.nativeControl && a.curScene.nativeControl.BtnNativeAdClose(null, 1)
				} catch (e) {}
			},
			InterFailHandle: function(e) {
				0 == e && (a.curScene.generalRemind.active = !0, a.curScene.generalRemind.getComponent("GeneralRemind").InitPanel(0), a.ShowPanelHandle(), a.curScene.GetReward(-1))
			},
			InterShowHandle: function(e) {
				0 == e && (a.curScene.generalRemind.active = !0, a.curScene.generalRemind.getComponent("GeneralRemind").InitPanel(0), a.ShowPanelHandle(), a.curScene.GetReward(-1))
			},
			VideoFailHandle: function() {
				this.isRealUnlock ? (a.curScene.generalRemind.active = !0, a.curScene.generalRemind.getComponent("GeneralRemind").InitPanel(3), a.ShowPanelHandle()) : 1 == this.lockType ? this.ShowInterstitial(0) : (a.curScene.generalRemind.active = !0, a.curScene.generalRemind.getComponent("GeneralRemind").InitPanel(3), a.ShowPanelHandle())
			},
			VideoShowHandle: function() {
				configCat.gameController ? configCat.onReward() : a.curScene.GetReward()
			},
			VideoShow: function() {
				a.isVideoShowing = !0, cc.sys.platform != cc.sys.DESKTOP_BROWSER && "qq" == a.channel && a.GetIsPhone() ? a.audioControl && a.audioControl.pause() : a.StopMusic()
			},
			VideoClose: function() {
				a.isVideoShowing = !1, cc.sys.platform != cc.sys.DESKTOP_BROWSER && "qq" == a.channel && a.GetIsPhone() ? (a.audioControl && (a.audioControl.volume = 0), this.schedule(function() {
					a.audioOn ? a.audioControl && a.audioControl.play() : a.audioControl && a.audioControl.pause(), a.audioControl && (a.audioControl.volume = 1)
				}, .25)) : a.musicOn && a.PlayMusic()
			},
			AdInit: function() {
				if (0 == this.isInit) {
					var e = this;
					this.isInit = !0, this.startTime = a.GetNowTime(), a.isShowNative = !1, "oppo" != a.channel && "vivo" != a.channel || (this.nativeAd = [], "vivo" == a.channel ? a.systemInfo.platformVersionCode >= 1053 ? a.isShowNative = !0 : a.isShowNative = !1 : a.isShowNative = !0), "oppo" == a.channel ? (a.isSupportBanner || this.scheduleOnce(function() {
						a.isSupportBanner = !0, a.OPPOBannerCtrl && a.OPPOBannerCtrl.Init()
					}, 60), qg.getSystemInfoSync().platformVersion < 1051 ? a.isOldAd = !0 : a.isOldAd = !1, a.isOldAd ? qg.initAdService({
						appId: e.OPPOAppId,
						isDebug: !1,
						success: function(t) {
							e.InitVideo(), e.InitInterstitial()
						},
						fail: function(e) {
							console.log("fail:" + e.code + e.msg)
						}
					}) : this.InitVideo()) : (this.InitInterstitial(), this.InitVideo(), this.InitAppBox()), "tt" == a.channel || "wx" == a.channel ? (a.isShowBanner = !1, void 0 !== a.realUnlock && (this.isRealUnlock = a.realUnlock)) : cc.winSize.height / cc.winSize.width < 1.7 ? a.isShowBanner = !1 : a.isShowBanner = !0
				}
			},
			ShowBanner: function() {
				if (cc.sys.platform != cc.sys.DESKTOP_BROWSER && (!cc.sys.isNative || "apk" != a.channel && "ios" != a.channel) && 0 != a.IsCanSupportFunc(0)) {
					var e = this;
					if ("wx" == a.channel || "tt" == a.channel || "qq" == a.channel) {
						if (null != this.bannerAd && (this.bannerAd.destroy(), this.bannerAd = null), "wx" == a.channel) {
							var t = wx.getSystemInfoSync(),
								n = t.screenWidth / 2,
								i = t.screenHeight;
							this.bannerAd = wx.createBannerAd({
								adUnitId: e.WXBannerId,
								adIntervals: 30,
								style: {
									width: 300,
									top: 0,
									left: 0
								}
							}), this.bannerAd && this.bannerAd.onResize(function() {
								e.bannerAd && (e.bannerAd.style.left = n - e.bannerAd.style.realWidth / 2 + .1), e.bannerAd && (e.bannerAd.style.top = i - e.bannerAd.style.realHeight + .1)
							})
						} else if ("tt" == a.channel) {
							var s = tt.getSystemInfoSync(),
								o = s.windowWidth,
								c = s.windowHeight,
								r = 200;
							this.bannerAd = tt.createBannerAd({
								adUnitId: e.TTBannerId,
								style: {
									width: r,
									top: c - r / 16 * 9
								}
							}), this.bannerAd.style.left = (o - r) / 2, this.bannerAd.onResize(function(t) {
								r != t.width && (r = t.width, e.bannerAd.style.left = (o - t.width) / 2, e.bannerAd.style.top = c - t.height)
							})
						} else if ("qq" == a.channel) {
							var l = qq.getSystemInfoSync(),
								h = l.screenWidth,
								d = l.screenHeight;
							this.bannerAd = qq.createBannerAd({
								adUnitId: e.QQBannerId,
								style: {
									width: 320,
									top: 0,
									left: 0
								}
							}), this.bannerAd && this.bannerAd.onResize(function(t) {
								e && e.bannerAd && (e.bannerAd.style.top = d - t.height, e.bannerAd.style.left = (h - t.width) / 2)
							})
						}
						this.bannerAd && this.bannerAd.onLoad(function() {
							e.bannerAd && e.bannerAd.show(), e.BannerShowHandle()
						}), this.bannerAd && this.bannerAd.onError(function(t) {
							console.log("banner error" + t.errMsg), e.BannerFailHandle()
						})
					} else if ("swan" == a.channel) {
						if (a.GetNowTime() - this.startTime < 5e3) return;
						if (this.isShow) return;
						null != this.bannerAd && this.bannerAd.destroy();
						var g = swan.getSystemInfoSync(),
							p = g.windowWidth,
							u = g.windowHeight;
						r = 300;
						this.bannerAd = swan.createBannerAd({
							adUnitId: e.SWANBannerId,
							appSid: e.SWANAppId,
							style: {
								width: r,
								top: u - r / 3
							}
						}), this.bannerAd.style.left = (p - r) / 2, this.bannerAd.onLoad(function() {
							e.bannerAd.show(), e.isShow = !0, e.times = 0, e.scheduleOnce(function() {
								e.isShow = !1, e.ShowBanner()
							}, 30)
						}), this.bannerAd.onError(function(t) {
							console.log("banner onError" + t.errCode), e.times < 5 && e.scheduleOnce(function() {
								e.times++, e.ShowBanner()
							}, 5)
						})
					} else if ("vivo" == a.channel) {
						if (this.isShow) return;
						this.bannerAd = qg.createBannerAd({
							posId: e.VIVOBannerId,
							style: {}
						}), this.bannerAd.onClose(function() {
							e.isShow = !1
						});
						var m = this.bannerAd.show();
						m && m.then(function() {
							e.isShow = !0, e.BannerShowHandle()
						}).catch(function(t) {
							switch (t.code) {
								case 30003:
									console.log("jswrapper:\u65b0\u7528\u62377\u5929\u5185\u4e0d\u80fd\u66dd\u5149Banner\uff0c\u8bf7\u5c06\u624b\u673a\u65f6\u95f4\u8c03\u6574\u4e3a7\u5929\u540e\uff0c\u9000\u51fa\u6e38\u620f\u91cd\u65b0\u8fdb\u5165");
									break;
								case 30009:
									console.log("jswrapper:10\u79d2\u5185\u8c03\u7528\u5e7f\u544a\u6b21\u6570\u8d85\u8fc71\u6b21\uff0c10\u79d2\u540e\u518d\u8c03\u7528");
									break;
								case 30002:
									console.log("jswrapper:\u52a0\u8f7d\u5e7f\u544a\u5931\u8d25\uff0c\u91cd\u65b0\u52a0\u8f7d\u5e7f\u544a");
									break;
								default:
									console.log("jswrapper:banner\u5e7f\u544a\u5c55\u793a\u5931\u8d25"), console.log("jswrapper:" + JSON.stringify(t))
							}
							e.isShow = !1, e.BannerFailHandle()
						})
					} else if ("oppo" == a.channel) {
						if (!a.isSupportBanner) return;
						if (a.isOldAd) this.bannerAd = qg.createBannerAd({
							posId: e.OPPOBannerId
						}), this.bannerAd && this.bannerAd.show();
						else {
							if (this.isShow) return;
							if (null != this.bannerAd) return void this.bannerAd.show();
							this.bannerAd = qg.createBannerAd({
								adUnitId: e.OPPOBannerId
							}), this.bannerAd && this.bannerAd.show(), this.bannerAd && this.bannerAd.onHide(function() {
								e.isShow = !1, a.adsManager.scheduleOnce(function() {
									a.adsManager.ShowBanner()
								}, a.OPPOBannerTime)
							})
						}
						this.bannerAd && this.bannerAd.onShow(function() {
							0 == a.isOldAd && (e.isShow = !0), e.BannerShowHandle()
						}), this.bannerAd && this.bannerAd.onError(function(t) {
							console.log("oppo banner onError:" + t), e.isShow = !1, e.bannerAd = null, e.BannerFailHandle(t)
						})
					}
				}
			},
			HideBanner: function() {
				if (cc.sys.platform != cc.sys.DESKTOP_BROWSER && (!cc.sys.isNative || "apk" != a.channel && "ios" != a.channel) && 0 != a.IsCanSupportFunc(0) && null != this.bannerAd) {
					if ("oppo" == a.channel && a.isOldAd) return void this.bannerAd.hide();
					this.bannerAd.destroy(), this.bannerAd = null, this.isShow = !1
				}
			},
			InitAppBox: function() {
				if (cc.sys.platform !== cc.sys.DESKTOP_BROWSER && 0 != a.IsCanSupportFunc(12)) {
					var e = this;
					this.appbox = qq.createAppBox({
						adUnitId: e.QQBoxId
					}), this.appbox && this.appbox.load(), this.appbox.onClose(function() {
						e.appbox && e.appbox.load()
					})
				}
			},
			ShowAppBox: function() {
				if (cc.sys.platform !== cc.sys.DESKTOP_BROWSER && 0 != a.IsCanSupportFunc(12))
					if (null != this.appbox) {
						var e = this;
						this.appbox && this.appbox.show().catch(function(t) {
							e.appbox.load()
						})
					} else this.InitAppBox()
			},
			ShowBlockAd: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
				if (cc.sys.platform !== cc.sys.DESKTOP_BROWSER && 0 != a.IsCanSupportFunc(15)) {
					var t = this;
					if ("qq" == a.channel) {
						var n = a.systemInfo.screenHeight;
						a.systemInfo.screenWidth;
						this.blockAd && (this.blockAd.destroy(), this.blockAd = null);
						var i = 16,
							s = 150;
						0 == e ? (i = 32, a.GetIsPhone() && (s = (n - 229) / 2 - 50), this.blockAd = qq.createBlockAd({
							adUnitId: t.QQBlockId,
							size: 3,
							orientation: "vertical",
							style: {
								left: i,
								top: s
							}
						}), 1 == a.IsCanSupportFunc(18) && this.blockAd && this.blockAd.onResize(function(e) {
							t.blockAd.style.top = (n - e.height) / 2
						})) : (s = cc.winSize.height / cc.winSize.width >= 2 ? a.GetIsPhone() ? 120 : 180 : 60, this.blockAd = qq.createBlockAd({
							adUnitId: t.QQHBlockId,
							size: 4,
							orientation: "landscape",
							style: {
								left: 35,
								top: s
							}
						}), 1 == a.IsCanSupportFunc(18) && this.blockAd && this.blockAd.onResize(function(e) {
							t.blockAd.style.top = s
						})), this.blockAd && this.blockAd.onLoad(function() {
							t.blockAd.show(), t.interLoadTime = a.GetNowTime()
						})
					} else if ("wx" == a.channel) {
						var o = 150;
						cc.winSize.height / cc.winSize.width < 2 && (o = 80), this.blockAd = wx.createGridAd({
							adUnitId: t.WXBlockId,
							adTheme: "white",
							gridCount: 5,
							style: {
								left: 0,
								top: o,
								width: 330,
								opacity: .8
							}
						}), this.blockAd.show(), this.blockAd && this.blockAd.onError(function(e) {
							console.log("blockAd error", e.errMsg), "wx" == a.channel && a.CreateGameIcon(140)
						})
					}
				}
			},
			HideBlockAd: function() {
				this.blockAd && (this.blockAd.destroy(), this.blockAd = null)
			},
			InitInterstitial: function() {
				if ("oppo" != a.channel && cc.sys.platform != cc.sys.DESKTOP_BROWSER && (!cc.sys.isNative || "apk" != a.channel && "ios" != a.channel) && 0 != a.IsCanSupportFunc(1)) {
					var e = this;
					"wx" == a.channel ? (this.interstitialAd = null, wx.createInterstitialAd && (this.interstitialAd = wx.createInterstitialAd({
						adUnitId: e.WXInterId
					}), this.interstitialAd && this.interstitialAd.onClose(function() {
						e.isInterLoad = !1, e.interstitialAd.load()
					}), this.interstitialAd && this.interstitialAd.onError(function(t) {
						console.log(t), e.isInterLoad = !1
					}), this.interstitialAd && this.interstitialAd.onLoad(function() {
						e.isInterLoad = !0
					}))) : "tt" == a.channel ? (this.interstitialAd && (this.interstitialAd.destroy(), this.interstitialAd = null), this.interstitialAd = tt.createInterstitialAd({
						adUnitId: e.TTInterId
					}), this.interstitialAd && this.interstitialAd.onClose(function() {
						e.isInterLoad = !1, e.interCloseTime = a.GetNowTime(), e.InitInterstitial()
					}), this.interstitialAd && this.interstitialAd.onError(function(t) {
						console.log(t), e.isInterLoad = !1
					}), this.interstitialAd && this.interstitialAd.onLoad(function() {
						e.isInterLoad = !0
					})) : "qq" == a.channel ? (a.GetIsPhone() && this.interstitialAd && (this.interstitialAd.destroy(), this.interstitialAd = null), this.interstitialAd = qq.createInterstitialAd({
						adUnitId: e.QQInterId
					}), this.interstitialAd.onLoad(function() {
						e.isInterLoad = !0
					}), this.interstitialAd.onClose(function() {
						e.interCloseTime = a.GetNowTime(), e.isInterLoad = !1, e.ShowBanner()
					}), this.interstitialAd.onError(function(t) {
						console.log("error", t), e.isInterLoad = !1
					})) : "oppo" == a.channel && (a.isOldAd ? this.interstitialAd = qg.createInsertAd({
						posId: e.OPPOInterId
					}) : (this.interstitialAd = qg.createInsertAd({
						adUnitId: e.OPPOInterId
					}), this.interstitialAd && this.interstitialAd.onClose(function() {
						e.ShowBanner(), e.interCloseTime = a.GetNowTime(), e.interstitialAd && e.interstitialAd.load(), e.isInterLoad = !1
					})), this.interstitialAd && this.interstitialAd.load(), this.interstitialAd && this.interstitialAd.onError(function(t) {
						e.isInterLoad = !1, console.log("oppo InsertAd:" + t.code + " " + t.msg)
					}), this.interstitialAd && this.interstitialAd.onLoad(function() {
						e.isInterLoad = !0
					}))
				}
			},
			ShowInterstitial: function(e) {
				/* console.log("ShowInterstitial...type:", e), cc.audioEngine.pauseAll(), cc.game.pause(), window.mWatchAdCallbackInter = function() {
					cc.game.resume(), cc.audioEngine.resumeAll()
				}, void 0 !== window.sdk && "undefined" !== window.sdk.showBanner && window.sdk.showBanner() */
				console.log("2222");
			},
			InitVideo: function() {
				if (cc.sys.platform != cc.sys.DESKTOP_BROWSER && (!cc.sys.isNative || "apk" != a.channel && "ios" != a.channel) && 0 != a.IsCanSupportFunc(2)) {
					var e = this;
					"wx" == a.channel || "tt" == a.channel || "qq" == a.channel ? ("wx" == a.channel ? this.videoAd = wx.createRewardedVideoAd({
						adUnitId: e.WXVideoId
					}) : "tt" == a.channel ? this.videoAd = tt.createRewardedVideoAd({
						adUnitId: e.TTVideoId
					}) : "qq" == a.channel && (this.videoAd = qq.createRewardedVideoAd({
						adUnitId: e.QQVideoId
					}), this.videoAd && this.videoAd.load()), this.videoAd.onError(function(t) {
						e.isVideoLoad = !1
					}), this.videoAd.onLoad(function(t) {
						e.isVideoLoad = !0
					}), this.videoAd.onClose(function(t) {
						e.isVideoLoad = !1, e.VideoClose(), "tt" != a.channel && "qq" != a.channel || (e.interCloseTime = a.GetNowTime()), t && t.isEnded ? e.VideoShowHandle() : console.log("Thoát giữa chừng")
					}.bind(this))) : "swan" == a.channel ? (this.videoAd = swan.createRewardedVideoAd({
						adUnitId: e.SWANVideoId,
						appSid: e.getSWANAppId
					}), this.videoAd.onError(function(t) {
						console.log("Lỗi video khuyến khích" + t.errCode + t.errMsg), e.isVideoLoad = !1
					}), this.videoAd.onLoad(function() {
						console.log("onload"), e.isVideoLoad = !0
					}), this.videoAd.onClose(function(t) {
						e.isVideoLoad = !1, e.VideoClose(), t && t.isEnded ? e.VideoShowHandle() : console.log("Thoát giữa chừng"), e.videoAd.load()
					}.bind(this))) : "vivo" == a.channel ? (this.videoAd = qg.createRewardedVideoAd({
						posId: e.VIVOVideoId
					}), this.videoAd.onError(function(t) {
						switch (t.errCode) {
							case -3:
								console.log("jswrapper:\u6fc0\u52b1\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25---\u8c03\u7528\u592a\u9891\u7e41", JSON.stringify(t));
								break;
							case -4:
								console.log("jswrapper:\u6fc0\u52b1\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25--- \u4e00\u5206\u949f\u5185\u4e0d\u80fd\u91cd\u590d\u52a0\u8f7d", JSON.stringify(t));
								break;
							case 30008:
								break;
							default:
								console.log("jswrapper:\u6fc0\u52b1\u5e7f\u544a\u5c55\u793a\u5931\u8d25"), console.log("jswrapper:" + JSON.stringify(t))
						}
						e.isVideoLoad = !1
					}), this.videoAd.onLoad(function() {
						e.isVideoLoad = !0
					}), this.videoAd.onClose(function(t) {
						e.isVideoLoad = !1, e.VideoClose(), t && t.isEnded ? e.VideoShowHandle() : console.log("Thoát giữa chừng"), e.videoAd.load()
					})) : "oppo" == a.channel && (this.videoAd && (this.videoAd.destroy(), this.videoAd = null), a.isOldAd ? this.videoAd = qg.createRewardedVideoAd({
						posId: e.OPPOVideoId
					}) : this.videoAd = qg.createRewardedVideoAd({
						adUnitId: e.OPPOVideoId
					}), this.videoAd && this.videoAd.onError(function(t) {
						e.isVideoLoad = !1
					}), this.videoAd && this.videoAd.load(), this.videoAd && this.videoAd.onLoad(function() {
						e.isVideoLoad = !0
					}), this.videoAd && this.videoAd.onClose(function(t) {
						t.isEnded ? e.VideoShowHandle() : console.log("Thoát giữa chừng"), e.VideoClose(), e.isVideoLoad = !1, e.videoAd && e.videoAd.load()
					}))
				}
			},
			ShowVideo: function(e) {
				console.log("ShowVideo...type:", e), i.AdManager.showRewardVideo()
			},
			ShowNativeAd: function(e, t, n) {
				if (cc.sys.platform != cc.sys.DESKTOP_BROWSER && 0 != a.IsCanSupportFunc(3) && !("oppo" == a.channel && 2 == e || "oppo" == a.channel && 0 == e && !a.isSupportNativeIcon || "oppo" == a.channel && 1 == e && !a.isSupportBanner)) {
					var i = this,
						s = "";
					if (0 == e)
						if ("oppo" == a.channel) {
							if (!a.isSupportNativeIcon) return;
							s = i.OPPONativeIconId
						} else "vivo" == a.channel && (s = i.VIVONativeIconId);
					else 1 == e ? "oppo" == a.channel ? s = i.OPPONativeBannerId : "vivo" == a.channel && (s = i.VIVONativeBannerId) : 2 == e && ("oppo" == a.channel ? s = i.OPPONativeInterId : "vivo" == a.channel && (s = i.VIVONativeInterId));
					"oppo" == a.channel ? a.isOldAd ? this.nativeAd[e] = qg.createNativeAd({
						posId: s
					}) : this.nativeAd[e] = qg.createNativeAd({
						adUnitId: s
					}) : "vivo" == a.channel && (this.nativeAd[e] = qg.createNativeAd({
						adUnitId: s
					})), this.nativeAd[e] && this.nativeAd[e].onLoad(function(s) {
						if ("oppo" == a.channel && n) s.adList.length > 0 && (0 == t ? n(s.adList[0].adId, s.adList[0].icon) : 1 == t ? n(s.adList[0].adId, s.adList[0].title, s.adList[0].desc) : 2 == t && n(s.adList[0].adId, s.adList[0].title, s.adList[0].desc, s.adList[0].icon), i.nativeAd[e].reportAdShow({
							adId: s.adList[0].adId
						}), 1 == e && (a.oppoNativeBannerRes = s.adList[0], i.HideBanner()));
						else if ("vivo" == a.channel) {
							var o;
							s && s.adList && (o = s.adList.pop(), n(o.adId, o.title, o.desc, o.icon, e), 0 == t ? n(o.adId, o.icon) : 1 == t ? n(o.adId, o.title, o.desc) : 2 == t && n(o.adId, o.title, o.desc, o.icon), i.nativeAd[e].reportAdShow({
								adId: o.adId.toString()
							}))
						}
					}), this.nativeAd[e] && this.nativeAd[e].onError(function(t) {
						1 == e && ("oppo" != a.channel || a.isBannerFirst || (a.adsManager.ShowBanner(), a.adsManager.scheduleOnce(function() {
							a.adsManager.HideBanner()
						}, 29)), a.curScene.nativeControl.BtnNativeAdClose(null, 1), a.oppoNativeBannerRes = null), 2 == e && (i.ShowInterstitial(), a.curScene.nativeControl.BtnNativeAdClose(null, 2)), "oppo" == a.channel && i.nativeAd[e] && (i.nativeAd[e].destroy(), i.nativeAd[e] = null), console.log("native Onerror" + e), console.log(t.errMsg)
					}), this.nativeAd[e] && this.nativeAd[e].load()
				}
			},
			ClickNativeAd: function(e, t) {
				cc.sys.platform != cc.sys.DESKTOP_BROWSER && 0 != a.IsCanSupportFunc(3) && this.nativeAd[t] && this.nativeAd[t].reportAdClick({
					adId: e
				})
			},
			HideNativeAd: function(e) {
				cc.sys.platform != cc.sys.DESKTOP_BROWSER && 0 != a.IsCanSupportFunc(3) && "oppo" == a.channel && this.nativeAd[e] && (1 == e && (a.oppoNativeBannerRes = null), this.nativeAd[e].destroy(), this.nativeAd[e] = null)
			}
		}), cc._RF.pop()
	}, {
		AdManager: "AdManager",
		GameManager: "GameManager",
		mta_analysis: "mta_analysis"
	}],
	Airplane: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "89b35Mwp5JK0K8DwHfi7YYB", "Airplane"), cc.Class({
			extends: cc.Component,
			properties: {
				x0: 520,
				y0: 350
			},
			onLoad: function() {
				cc.winSize.height / cc.winSize.height < 1.5 && (this.x0 = 650, this.node.position = cc.v3(this.x0, this.y0))
			},
			init: function() {
				this.node.parent = configCat.gameController.dragItemParent, this.x0 = -this.x0;
				var e = this.x0 > 0 ? -1 : 1;
				this.y0 = 350, this.node.position = cc.v3(this.x0, this.y0, 0), this.node.scale = cc.v2(e, 1);
				var t = this;
				cc.Tween.stopAllByTarget(this.node), (0, cc.tween)(this.node).to(5, {
					position: cc.v3(-t.x0, t.y0 - 350, 0)
				}).call(function() {
					var e = t.x0 > 0 ? 1 : -1;
					t.node.scale = cc.v2(e, 1)
				}).to(5, {
					position: cc.v3(t.x0, t.y0 - 700, 0)
				}).start()
			},
			onClick: function() {
				cc.Tween.stopAllByTarget(this.node);
				var e = this.x0 > 0 ? -1 : 1;
				this.node.position = cc.v3(this.x0, this.y0, 0), this.node.scale = cc.v2(e, 1), configCat.gameController.showFreeCoinPanel(null, 1)
			}
		}), cc._RF.pop()
	}, {}],
	AnimEvent: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "41b40KfdJ9FnKJo4guS+LiC", "AnimEvent"), cc.Class({
			extends: cc.Component,
			properties: {},
			destroyNode: function() {
				this.node.destroy()
			}
		}), cc._RF.pop()
	}, {}],
	AudioManager: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "999b4fKsDlOZL4p8O0W7lOI", "AudioManager");
		var i = e("GameManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				audioClips: {
					type: cc.AudioClip,
					default: []
				}
			},
			onLoad: function() {
				i.audioManager = this, this.audioSources = this.node.getComponents(cc.AudioSource)
			},
			PlaySound: function(e, t, n) {
				if (0 != i.audioOn)
					if (e < 0 || t < 0) console.log("\u4f20\u5165\u53c2\u6570\u6709\u8bef");
					else {
						if (void 0 == n && (n = !1), null == this.audioSources[e] || void 0 == this.audioSources[e]) {
							var a = this.node.addComponent(cc.AudioSource);
							this.audioSources[e] = a
						}
						this.audioSources[e].clip == this.audioClips[t] && this.audioSources[e].isPlaying && n || (this.audioSources[e].stop(), this.audioSources[e].clip = null, this.audioSources[e].clip = this.audioClips[t], this.audioSources[e].loop = n, this.audioSources[e].play())
					}
			},
			StopSound: function(e, t) {
				0 != i.audioOn && (e < 0 || t < 0 ? console.log("\u4f20\u5165\u53c2\u6570\u6709\u8bef") : null != this.audioSources[e] && void 0 != this.audioSources[e] && this.audioSources[e].clip == this.audioClips[t] && (this.audioSources[e].stop(), this.audioSources[e].clip = null))
			},
			PlayClickSound: function() {
				this.PlaySound(0, 0, !1)
			},
			PlayDeleteSound: function() {
				this.PlaySound(1, 1, !1)
			},
			PlayPhotoSound: function() {
				this.PlaySound(1, 2, !1)
			},
			PlaySynthesisSound: function() {
				this.PlaySound(1, 1, !1)
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager"
	}],
	CatBox: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "c4ed8+Zuf1Alr63x4XTpj1p", "CatBox"), cc.Class({
			extends: cc.Component,
			properties: {
				level: 0,
				anim: cc.Animation,
				isCanTouch: !1
			},
			onLoad: function() {
				this.shakeCount = 0, this.node.opacity = 0
			},
			unuse: function() {
				this.shakeCount = 0, this.anim.stop(), this.node.opacity = 0, this.level = 0, this.isCanTouch = !1
			},
			reuse: function(e, t) {
				this.init(e, t)
			},
			init: function(e, t) {
				this.shakeCount = 0, this.node.opacity = 0, this.isCanTouch = !1, this.level = e, this.mat = t, this.node.parent = t.node.getChildByName("catParent"), this.anim.play()
			},
			setIsCanTouch: function() {
				this.isCanTouch = !0, this.anim.play("catBoxShake")
			},
			addShakeCount: function() {
				this.shakeCount++, 3 == this.shakeCount && this.CreatNewCat()
			},
			CreatNewCat: function() {
				this.isCanTouch && (configCat.gameController.newCat(this.level, this.mat, !0), configCat.gameController.catBoxPool ? configCat.gameController.catBoxPool.put(this.node) : this.node.destroy())
			}
		}), cc._RF.pop()
	}, {}],
	Cat: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "4bf7an9sLtIhJkHGGC/Dj47", "Cat");
		e("Mat");
		var i = e("GameManager"),
			a = e("mta_analysis");
		cc.Class({
			extends: cc.Component,
			properties: {
				anim: cc.Animation,
				priceNode: cc.Node,
				priceLabel: cc.Label,
				catSprite: cc.Sprite,
				leftCatSprite: cc.Sprite,
				rightCatSprite: cc.Sprite,
				level: {
					default: 1,
					type: cc.Integer,
					notify: function() {
						this.setCatSprite(this.level)
					}
				}
			},
			onLoad: function() {
				this.TouchEventOn()
			},
			TouchEventOn: function() {
				this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnded, this)
			},
			TouchEventOff: function() {
				this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this), this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this), this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnded, this)
			},
			unuse: function() {
				this.anim.stop(), configCat.draggingCat = null, this.unscheduleAllCallbacks(), this.priceNode.active = !1, this.priceLabel.string = "", this.catSprite.node.scale = 1, this.catSprite.spriteFrame = null, this.leftCatSprite.spriteFrame = null, this.rightCatSprite.spriteFrame = null, this.leftCatSprite.node.active = !1, this.rightCatSprite.node.active = !1, this.curCollisionCat = null, this.curCollisionMat = null, this.curCollisionTrash = null, this.startPos = this.node.position, this.startParent = this.node.parent, this.targerMat.resetMat(), this.targerMat = null, this.isInSynthesis = !1, this.isDraging = !1
			},
			reuse: function(e, t, n) {
				this.init(e, t, n)
			},
			init: function(e, t, n) {
				this.isDraging = !1, this.catSprite.node.scale = 1, this.priceNode.active = !1, this.priceLabel.string = "", this.catSprite.spriteFrame = null, this.leftCatSprite.spriteFrame = null, this.rightCatSprite.spriteFrame = null, this.leftCatSprite.node.active = !1, this.rightCatSprite.node.active = !1, this.level = e, this.curCollisionCat = null, this.curCollisionMat = null, this.curCollisionTrash = null, this.startPos = this.node.position, this.startParent = this.node.parent, this.isInSynthesis = !1, this.targerMat = t, n ? this.targerMat.addCatByBox(this) : this.targerMat.addCat(this), this.schedule(this.addFishCoin, 1.5)
			},
			addFishCoin: function() {
				if (configCat.gameController) {
					var e = 0;
					e = this.level >= 20 ? Math.round(12.5 * Math.pow(2, this.level) * 1.5 * configCat.coinMultiple * configCat.getPrivilege("income")) : Math.round(12.5 * Math.pow(2, this.level) / (6 - .25 * this.level) * 1.5 * configCat.coinMultiple * configCat.getPrivilege("income")), this.priceLabel.string = "+" + configCat.NumberSimplified(e), configCat.gameController.fishCoin += e, this.isInSynthesis || this.isDraging || this.anim.play("catIncome")
				}
			},
			onTouchBegan: function(e) {
				this.isInSynthesis || (this.isDraging = !0, null == configCat.draggingCat || configCat.draggingCat == this ? (configCat.draggingCat = this, this.node.position = this.node.parent.convertToNodeSpaceAR(e.touch.getLocation())) : console.log("\u70b9\u4e0d\u4e86"))
			},
			onTouchMoved: function(e) {
				this.isInSynthesis || (this.isDraging = !0, null == configCat.draggingCat || configCat.draggingCat == this ? (configCat.draggingCat = this, this.node.parent = configCat.gameController.dragItemParent, this.node.position = this.node.parent.convertToNodeSpaceAR(e.touch.getLocation())) : console.log("\u70b9\u4e0d\u4e86"))
			},
			onTouchEnded: function(e) {
				if (this.curCollisionTrash) {
					if (configCat.getPlayerInfo("guideNum") < 3) return this.curCollisionTrash.opacity = 150, void this.resetPos();
					this.curCollisionTrash.opacity = 150, this.recoveryCat()
				} else if (this.curCollisionCat) {
					var t = this.curCollisionCat.getComponent("Cat");
					t.level == this.level && this.level < 50 ? t.InSynthesis(this) : this.changeMat(t)
				} else if (!this.curCollisionCat && this.curCollisionMat) {
					if (configCat.getPlayerInfo("guideNum") < 3) return void this.resetPos();
					this.curCollisionMat.getComponent("Mat").isLock ? this.resetPos() : (configCat.draggingCat = null, this.curCollisionMat.getComponent("Mat").addCat(this), configCat.gameController.setCatPosHistory())
				} else this.resetPos()
			},
			resetPos: function() {
				configCat.draggingCat = null, this.isDraging = !1, this.node.position = this.startPos, this.node.parent = this.startParent, this.curCollisionCat = null, this.curCollisionMat = null, this.curCollisionTrash = null
			},
			onCollisionEnter: function(e, t) {
				"mat" == e.node.group && (this.curCollisionMat = e.node), "cat" == e.node.group && (this.curCollisionCat = e.node), "trash" == e.node.group && (this.curCollisionTrash = e.node, e.node.opacity = 255)
			},
			onCollisionStay: function(e, t) {
				"mat" == e.node.group && (this.curCollisionMat = e.node), "cat" == e.node.group && (this.curCollisionCat = e.node), "trash" == e.node.group && (this.curCollisionTrash = e.node, e.node.opacity = 255)
			},
			onCollisionExit: function(e, t) {
				this.curCollisionCat = null, this.curCollisionMat = null, "trash" == e.node.group && (this.curCollisionTrash = null, e.node.opacity = 150)
			},
			recoveryCat: function() {
				if (configCat.gameController.isLastMat(this.node)) return configCat.gameController.showPop("The cat is reluctant to leave~ Jiu Mi~"), void this.resetPos();
				configCat.gameController.showPop("Get " + configCat.NumberSimplified(Math.round(.1 * configCat.getCatPrice(this.level)) * configCat.getPrivilege("income")) + " fish"), configCat.gameController.fishCoin += Math.round(.1 * configCat.getCatPrice(this.level) * configCat.getPrivilege("income")), configCat.gameController.catPool.put(this.node), configCat.gameController.setCatPosHistory()
			},
			InSynthesis: function(e) {
				if (configCat.getPlayerInfo("guideNum") < 3) {
					var t = configCat.getPlayerInfo("guideNum");
					t++, configCat.setPlayerInfo("guideNum", t), configCat.gameController.showPop("Guide complete"), configCat.gameController.initGuide()
				}
				this.isInSynthesis ? e.resetPos() : (this.isInSynthesis = !0, this.unscheduleAllCallbacks(), this.priceNode.active = !1, this.priceLabel.string = "", this.anim.stop(), this.TouchEventOff(), configCat.gameController.catPool.put(e.node), this.anim.play("catInSynthesis"))
			},
			setParticle: function() {
				this.node.getComponentInChildren(cc.ParticleSystem).resetSystem()
			},
			setNewCat: function() {
				i.audioManager.PlaySynthesisSound(), this.level++, this.targerMat.catLevelLabel.string = this.level.toString(), configCat.gameController.playerExp++, configCat.gameController.setCatPosHistory(), this.curCollisionCat = null, this.curCollisionMat = null, this.curCollisionTrash = null, this.level > configCat.getPlayerInfo("maxCatLevel") && (cc.sys.platform != cc.sys.DESKTOP_BROWSER && ("tt" == i.channel ? a.Event.stat("ttmaxcatlevel_" + this.level.toString(), {}) : "qq" == i.channel ? a.Event.stat("qqmaxcatlevel_" + this.level.toString(), {}) : "wx" == i.channel && a.Event.stat("wxmaxcatlevel_" + this.level.toString(), {})), configCat.setPlayerInfo("maxCatLevel", this.level), configCat.gameController.showNewCatPanel(this.level), configCat.gameController.setAddCatBtn(), configCat.gameController.shopBtnLockNode.active = !(configCat.getPlayerInfo("maxCatLevel") >= 6))
			},
			InSynthesisEnd: function() {
				this.TouchEventOn(), this.isInSynthesis = !1, this.schedule(this.addFishCoin, 1.5)
			},
			setCatSprite: function(e) {
				configCat.gameController.catImg && (this.leftCatSprite.node.active = !1, this.rightCatSprite.node.active = !1, this.leftCatSprite.spriteFrame = configCat.gameController.catImg[e - 1], this.rightCatSprite.spriteFrame = configCat.gameController.catImg[e - 1], this.catSprite.spriteFrame = configCat.gameController.catImg[e - 1], this.node.position = configCat.getCatPos(this.level), this.startPos = this.node.position)
			},
			changeMat: function(e) {
				configCat.draggingCat = null;
				var t = this.targerMat;
				this.isDraging = !1, this.targerMat = e.targerMat, this.targerMat.catLevelLabel.string = this.level.toString(), this.node.parent = this.targerMat.node.getChildByName("catParent"), this.node.position = configCat.getCatPos(this.level), this.startPos = this.node.position, this.startParent = this.node.parent, e.isDraging = !1, e.targerMat = t, e.targerMat.catLevelLabel.string = e.level.toString(), e.node.parent = t.node.getChildByName("catParent"), e.node.position = configCat.getCatPos(e.level), e.startPos = e.node.position, e.startParent = e.node.parent, configCat.gameController.setCatPosHistory(), this.curCollisionCat = null, this.curCollisionMat = null
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager",
		Mat: "Mat",
		mta_analysis: "mta_analysis"
	}],
	CheckupSetPop: [function(e, t, n) {
		"use strict";

		function i(e) {
			if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
				if (Array.isArray(e) || (e = a(e))) {
					var t = 0,
						n = function() {};
					return {
						s: n,
						n: function() {
							return t >= e.length ? {
								done: !0
							} : {
								done: !1,
								value: e[t++]
							}
						},
						e: function(e) {
							throw e
						},
						f: n
					}
				}
				throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}
			var i, s, o = !0,
				c = !1;
			return {
				s: function() {
					i = e[Symbol.iterator]()
				},
				n: function() {
					var e = i.next();
					return o = e.done, e
				},
				e: function(e) {
					c = !0, s = e
				},
				f: function() {
					try {
						o || null == i.return || i.return()
					} finally {
						if (c) throw s
					}
				}
			}
		}

		function a(e, t) {
			if (e) {
				if ("string" == typeof e) return s(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
			}
		}

		function s(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
			return i
		}
		cc._RF.push(t, "ffa8f8TpL1BKYSF4ERIjQtC", "CheckupSetPop");
		var o = e("GameManager"),
			c = e("mta_analysis");
		cc.Class({
			extends: cc.Component,
			properties: {
				image: cc.Sprite,
				lockNode: cc.Node,
				unlockNode: cc.Node,
				stateNode: cc.Node,
				mask: cc.Node,
				title: cc.Sprite,
				titleSprites: [cc.SpriteFrame]
			},
			onLoad: function() {
				this.image.spriteFrame = null, this.title.spriteFrame = null, cc.winSize.height / cc.winSize.width < 1.5 ? this.node.scale = .7 : cc.winSize.height / cc.winSize.width < 1.65 ? this.node.scale = .8 : cc.winSize.height / cc.winSize.width < 1.8 && (this.node.scale = .9)
			},
			start: function() {},
			onEnable: function() {
				this.InitPanel()
			},
			onDisable: function() {
				this.image.spriteFrame = null, this.title.spriteFrame = null, this.mask.active = !1
			},
			InitPanel: function() {
				this.mask.active = !0;
				for (var e = new Array, t = 0; t < o.shopMsg.length; t++) {
					var n, a = !1,
						s = i(o.checkupMsg);
					try {
						for (s.s(); !(n = s.n()).done;) {
							var c = n.value;
							parseInt(o.shopMsg[t].name.substr(0, o.shopMsg[t].name.length - 1)) == parseInt(c.index) && 1 == o.shopMsg[t].name.substr(o.shopMsg[t].name.length - 1, 1) && (a = !0)
						}
					} catch (e) {
						s.e(e)
					} finally {
						s.f()
					}
					a && e.push(o.shopMsg[t])
				}
				var r = e.length - 1,
					l = this.titleSprites.length - 1;
				this.index = parseInt(Math.random() * (r + 1 - 0) + 0), this.index2 = parseInt(Math.random() * (l + 1 - 0) + 0), this.itemMsg = e[this.index], this.title.spriteFrame = this.titleSprites[this.index2], this.frameName = this.itemMsg.name.substr(0, this.itemMsg.name.length - 1), this.localFlag = this.itemMsg.name.substr(this.itemMsg.name.length - 1, 1), this.LoadImage(this.index);
				var h = o.GetItemLockFlag(this.itemMsg.name);
				if (h >= this.itemMsg.videoNum) this.lockNode.active = !1, this.unlockNode.active = !0, this.stateNode.active = !1;
				else {
					(isNaN(h) || h <= 0) && (h = 0), this.stateNode.active = !0;
					for (var d = this.stateNode.children, g = 0; g < d.length; g++) d[g].active = g < h;
					this.lockNode.active = !0, this.lockNode.getChildByName("num").getComponent(cc.Label).string = h + "/" + this.itemMsg.videoNum.toString(), this.unlockNode.active = !1
				}
				this.node.getChildByName("closeBtn").getComponent(cc.Button).interactable = !0
			},
			LoadImage: function(e) {
				if (0 == this.localFlag) {
					var t = "set/" + this.frameName;
					cc.loader.loadRes(t, cc.SpriteFrame, function(t, n) {
						if (e == this.index) return t ? (console.log(t), void(this.image.spriteFrame = null)) : void(this.image.spriteFrame = n)
					}.bind(this))
				} else {
					var n = o.serverPath + "set/" + this.frameName + ".png";
					cc.loader.load(n, function(t, n) {
						if (e == this.index) return t ? (console.log(t), void(this.image.spriteFrame = null)) : void(this.image.spriteFrame = new cc.SpriteFrame(n))
					}.bind(this))
				}
			},
			BtnSetUse: function() {
				if (this.lockNode.active) {
					if (o.GetNowTime() - o.lastTime < 1e3) return;
					if (o.lastTime = o.GetNowTime(), o.curUnlockItem = this, o.isHasAd ? (o.adsManager.lockType = 2, o.adsManager.ShowVideo()) : cc.sys.platform == cc.sys.DESKTOP_BROWSER && o.curScene.GetReward(), this.mask.active) return;
					if (cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel) {
						var e = "tt_face" + this.frameName + "clickvideo";
						c.Event.stat(e, {})
					}
				} else {
					if (this.mask.active) return o.curUnlockItem = this, void(o.isHasAd ? (o.adsManager.lockType = 2, o.adsManager.ShowVideo()) : cc.sys.platform == cc.sys.DESKTOP_BROWSER && o.curScene.GetReward());
					o.curScene.ApplySetMsg(this.itemMsg, this.localFlag), o.curScene.onCheckupFaceBtnEvent()
				}
			},
			UpdateItemButton: function() {
				if (this.mask.active) {
					return c.Event.stat("tt_faceCloseMask", {}), void(this.mask.active = !1)
				}
				var e = o.GetItemLockFlag(this.itemMsg.name);
				if (isNaN(e) || e <= 0 ? e = 1 : e++, e >= this.itemMsg.videoNum) {
					if (this.lockNode.active = !1, this.unlockNode.active = !0, o.curScene.UpdateThingMsg(this.itemMsg, this.localFlag), this.stateNode.active = !1, cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel) {
						var t = "tt_face" + this.frameName + "videoall";
						c.Event.stat(t, {})
					}
				} else {
					this.lockNode.getChildByName("num").getComponent(cc.Label).string = e + "/" + this.itemMsg.videoNum.toString();
					var n = this.stateNode.children;
					this.stateNode.active = !0;
					for (var i = 0; i < n.length; i++) n[i].active = i < e
				}
				if (o.SetItemLockFlag(this.itemMsg.name, e), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && 1 == e) {
					var a = "tt_face" + this.frameName + "video1";
					c.Event.stat(a, {})
				}
			},
			BtnClosePanel: function(e) {
				this.image.spriteFrame = null, this.node.active = !1
			},
			onTouchEnd: function() {
				this.BtnClosePanel()
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager",
		mta_analysis: "mta_analysis"
	}],
	ConfigCat: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "8c89ctP8JtASaDSozCB/n4D", "ConfigCat"), window.configCat = {
			coinMultiple: 1,
			gameController: null,
			draggingCat: null,
			videoType: -1,
			guide: null,
			delta: 0,
			catImg: null,
			isCatImgLoad: !1,
			onReward: function() {
				this.gameController.getRewardByVideo()
			},
			SortAyyay: function(e) {
				if (null == e) return e;
				for (var t = 0; t < e.length; t++)
					for (var n = t + 1; n < e.length; n++)
						if (parseInt(e[t].name) > parseInt(e[n].name)) {
							var i = e[t];
							e[t] = e[n], e[n] = i
						} return e
			},
			getCatPos: function(e) {
				if (this.gameController.catInfo) return cc.v3(this.gameController.catInfo[e - 1].x, this.gameController.catInfo[e - 1].y, 1);
				cc.v3(15, 60, 1)
			},
			getCatPos2: function(e) {
				if (this.gameController.catInfo) {
					var t = cc.v3((this.gameController.catInfo[e - 1].x - 5) / 1.2, (this.gameController.catInfo[e - 1].y - 30) / 1.2, 1);
					return 1 == e && (t = cc.v3(10, 30, 1)), t
				}
				return cc.v3(10, 30, 1)
			},
			getCatPos3: function(e) {
				if (this.gameController.catInfo) {
					var t = cc.v3((this.gameController.catInfo[e - 1].x - 10) / .95, (this.gameController.catInfo[e - 1].y - 170) / .95, 1);
					return 1 == e && (t = cc.v3(5, -110, 1)), t
				}
				return cc.v3(5, -110, 1)
			},
			getCatPos4: function(e) {
				if (this.gameController.catInfo) {
					var t = cc.v3((this.gameController.catInfo[e - 1].x + 5) / 2.5, (this.gameController.catInfo[e - 1].y - 80) / 2.5, 1);
					return 1 == e && (t = cc.v3(20, -20, 1)), t
				}
				return cc.v3(20, -20, 1)
			},
			getPlayerInfo: function(e) {
				var t = cc.sys.localStorage.getItem(e);
				return null !== t && void 0 !== t && "" !== t || (t = 0, "playerLevel" == e ? t = 1 : "playerExp" == e ? t = 0 : "playerMaxExp" == e ? t = 5 : "maxCatLevel" == e ? t = 1 : "offLineTime" == e ? t = (new Date).getTime() : "RewardTime" == e ? t = (new Date).getTime() : "speedupTime" == e ? t = 0 : "RewardIndex" == e && (t = -1), cc.sys.localStorage.setItem(e, parseInt(t))), parseInt(t)
			},
			setPlayerInfo: function(e, t) {
				cc.sys.localStorage.setItem(e, parseInt(t))
			},
			getPrivilege: function(e) {
				var t = cc.sys.localStorage.getItem(e);
				return null !== t && void 0 !== t && "" !== t || (t = 100, "discount" == e && (t = 0), cc.sys.localStorage.setItem(e, parseInt(t))), parseInt(t) / 100
			},
			setPrivilege: function(e, t) {
				t = Math.round(100 * t), cc.sys.localStorage.setItem(e, t)
			},
			getFishCoin: function() {
				var e = cc.sys.localStorage.getItem("fishCoin");
				return null !== e && void 0 !== e && "" !== e || (e = 2e4, cc.sys.localStorage.setItem("fishCoin", e.toString())), parseFloat(e)
			},
			setFishCoin: function(e) {
				cc.sys.localStorage.setItem("fishCoin", e.toString())
			},
			getCatPrice: function(e) {
				var t = cc.sys.localStorage.getItem("catPrice" + e.toString());
				return null !== t && void 0 !== t && "" !== t || (t = 0, 1 == e ? t = "100" : 2 == e ? t = 1500 : 3 == e ? t = 6750 : 4 == e ? t = 18e3 : 5 == e ? t = 48750 : 6 == e ? t = 127500 : 7 == e ? t = 337500 : 8 == e ? t = 9e5 : 9 == e ? t = 225e4 : 10 == e ? t = 6e6 : 11 == e ? t = 165e5 : 12 == e ? t = 4125e4 : 13 == e ? t = 105e6 : 14 == e ? t = 285e6 : 15 == e ? t = 75e7 : 16 == e ? t = 2025e6 : 17 == e ? t = 525e7 : 18 == e ? t = 1425e7 : 19 == e ? t = 375e8 : 20 == e ? t = 10125e7 : 21 == e ? t = 275e9 : 22 == e ? t = 735e9 : 23 == e ? t = 1995e9 : 24 == e ? t = 5375e9 : 25 == e ? t = 145e11 : 26 == e ? t = 39e12 : 27 == e ? t = 1e14 : 28 == e ? t = 275e12 : 29 == e ? t = 75e13 : 30 == e ? t = 2e15 : 31 == e ? t = 54e14 : 32 == e ? t = 144e14 : 33 == e ? t = 384e14 : 34 == e ? t = 1024e14 : 35 == e ? t = 273e15 : 36 == e ? t = 728e15 : 37 == e ? t = 195e16 : 38 == e ? t = 52e17 : 39 == e ? t = 139e17 : 40 == e ? t = 37066e15 : 41 == e ? t = 988e17 : 42 == e ? t = 26345e16 : 43 == e ? t = 7025e17 : 44 == e ? t = 1.87e21 : 45 == e ? t = 4.98e21 : 46 == e ? t = 1.328e22 : 47 == e ? t = 3.5e22 : 48 == e ? t = 9e22 : 49 == e ? t = 2.4e23 : 50 == e && (t = 6.4e23), cc.sys.localStorage.setItem("catPrice" + e.toString(), t.toString())), parseFloat(t)
			},
			setCatPrice: function(e, t) {
				cc.sys.localStorage.setItem("catPrice" + e.toString(), t.toString())
			},
			NumberSimplified: function(e) {
				for (var t, n, i = 6, a = !1, s = 0; s < 20; s++) {
					if (null == e || NaN == e) {
						cc.error("\u6570\u636e\u6709\u9519");
						break
					}
					if (e < Math.pow(10, i)) break;
					i += 3
				}
				switch (t = 27 == i ? e / Math.pow(10, 21) : 24 == i ? e / Math.pow(10, 18) : 21 == i ? e / Math.pow(10, 15) : 18 == i ? e / Math.pow(10, 12) : 15 == i ? e / Math.pow(10, 9) : 12 == i ? e / Math.pow(10, 6) : 9 == i ? e / Math.pow(10, 3) : e, (t = Math.floor(t)) >= Math.pow(10, 3) && (a = !0), i) {
					case 6:
						n = a ? Math.floor(t / 1e3) + "," + this.NumberFormat(t % 1e3, 3) : t.toString();
						break;
					case 9:
						n = a ? Math.floor(t / 1e3) + "," + this.NumberFormat(t % 1e3, 3) + "k" : t.toString() + "k";
						break;
					case 12:
						n = a ? Math.floor(t / 1e3) + "," + this.NumberFormat(t % 1e3, 3) + "m" : t.toString() + "m";
						break;
					case 15:
						n = a ? Math.floor(t / 1e3) + "," + this.NumberFormat(t % 1e3, 3) + "b" : t.toString() + "b";
						break;
					case 18:
						n = a ? Math.floor(t / 1e3) + "," + this.NumberFormat(t % 1e3, 3) + "t" : t.toString() + "t";
						break;
					case 21:
						n = a ? Math.floor(t / 1e3) + "," + this.NumberFormat(t % 1e3, 3) + "qt" : t.toString() + "qt";
						break;
					case 24:
						n = a ? Math.floor(t / 1e3) + "," + this.NumberFormat(t % 1e3, 3) + "qn" : t.toString() + "qn";
						break;
					case 27:
						n = a ? Math.floor(t / 1e3) + "," + this.NumberFormat(t % 1e3, 3) + "sn" : t.toString() + "sn";
						break;
					default:
						n = "\u6570\u503c\u592a\u5927\u4e86"
				}
				return n
			},
			NumberFormat: function(e, t) {
				var n = "000" + e;
				return n.substr(n.length - t)
			}
		}, cc._RF.pop()
	}, {}],
	DecorationScene: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "e275b8qKLFNnJwq0VTSpbZh", "DecorationScene");
		var i = e("GameManager"),
			a = e("mta_analysis");
		cc.Class({
			extends: cc.Component,
			properties: {
				firstScrollView: cc.ScrollView,
				secondScrollView: cc.ScrollView,
				imageNode: cc.Node,
				colorFrame: cc.SpriteFrame,
				refreshFrame: cc.SpriteFrame,
				defaultBgGame: cc.SpriteFrame,
				defaultBg: cc.SpriteFrame,
				girlFrame: cc.SpriteFrame,
				boyFrame: cc.SpriteFrame,
				deleteArea: cc.Node,
				stickers: cc.Node,
				moveNode: cc.Node,
				moveItem: cc.Prefab,
				imageScrollView: cc.ScrollView,
				addOnePersonPanel: cc.Node,
				deleteImagePanel: cc.Node,
				targetNode: cc.Node,
				camera: cc.Camera,
				saveScreenShotPanel: cc.Node,
				clearDressupPanel: cc.Node,
				toCatScenePanel: cc.Node,
				sucRemind: cc.Node,
				generalRemind: cc.Node,
				record: cc.Sprite,
				recording: cc.SpriteFrame,
				recordStop: cc.SpriteFrame,
				audioImage: cc.Sprite,
				audioOn: cc.SpriteFrame,
				audioOff: cc.SpriteFrame,
				signPanel: cc.Node,
				giftPanel: cc.Node,
				textureSprite: cc.Sprite
			},
			onLoad: function() {
				i.isFromActivityBtn = !1, i.curScene = this, i.HandleEventPerScene(), i.sceneIndex = 2, i.isHasAd && "oppo" != i.channel && i.adsManager.HideBanner()
			},
			onDestroy: function() {
				i.curScene = null
			},
			start: function() {
				if (i.fakeUnlockName = [], this.isLoadScene = !1, i.sceneType = 0, this.curInnerType = -1, this.images = new Array, this.mtId = new Array, this.isShowScrollview = !0, this.startHeight = this.imageScrollView.node.height, this.imageColor = i.CopyArrValue(i.imageColor), "tt" == i.channel ? cc.find("Canvas/bottomHolder/buttons/recordBtn").active = !0 : (cc.find("Canvas/bottomHolder/buttons/recordBtn").active = !1, "oppo" != i.channel && "vivo" != i.channel && "apk" != i.channel || (cc.find("Canvas/bottomHolder/buttons/girlBtn").x = cc.find("Canvas/bottomHolder/buttons/recordBtn").x)), "h5" == i.channel && (cc.find("Canvas/bottomHolder/buttons/photoBtn").active = !1), cc.winSize.height / cc.winSize.width > 2.05) cc.find("Canvas/topHolder").getComponent(cc.Widget).top += 50;
				else if (cc.winSize.height / cc.winSize.width < 1.5) {
					this.signPanel.scale = .75, this.signPanel.getChildByName("splash").scale = 1 / .75, cc.find("Canvas/topHolder").getComponent(cc.Widget).top -= 80;
					cc.find("Canvas/bottomHolder").getComponent(cc.Widget).bottom = -(this.startHeight - 300), this.imageScrollView.node.height = 300, this.imageScrollView.content.getComponent(cc.Widget).top = 0, this.imageScrollView.content.getComponent("ImageItemRemark").startY = 150, this.secondScrollView.node.height = 300, this.secondScrollView.content.getComponent(cc.Widget).top = 0, this.secondScrollView.content.getComponent("SecondItemRemark").startY = 150, this.saveScreenShotPanel.getChildByName("closeBtn").y -= 100, i.isHasAd && (this.giftPanel.scale = .8, this.giftPanel.getChildByName("splash").scale = 1.25), this.saveScreenShotPanel.getChildByName("closeBtn").x = -this.saveScreenShotPanel.getChildByName("closeBtn").x
				}
				if (this.itemRemark = this.secondScrollView.content.getComponent("SecondItemRemark"), this.imageItemRemark = this.imageScrollView.content.getComponent("ImageItemRemark"), this.audioImage.spriteFrame = 1 == i.audioOn ? this.audioOn : this.audioOff, i.imageMsg = i.GetImageMsg(), i.imageMsg && i.imageMsg.length > 1) {
					var e = i.GetItemLockFlag("first");
					if (null == e || "" == e) {
						for (var t = new Array, n = 0; n < i.imageMsg.length; n++) t[n] = i.imageMsg[i.imageMsg.length - 1 - n];
						i.imageMsg = t, i.SetImageMsg(), i.SetItemLockFlag("first", 1)
					}
				}
				this.LoadResources(), this.LoadBg();
				var a = this;
				if (i.RecordInitHandle(function() {
						a.UpdateRecordBtn()
					}, function() {
						0 == i.pickId ? (a.generalRemind.active = !0, a.generalRemind.getComponent("GeneralRemind").InitPanel(1), i.ShowPanelHandle()) : 1 != i.pickId && 3 != i.pickId || (a.generalRemind.active = !0, a.generalRemind.getComponent("GeneralRemind").InitPanel(2), i.ShowPanelHandle()), a.UpdateRecordBtn()
					}), i.isHasAd) {
					if (i.isShowBanner) {
						if (1 == i.isShowNative)
							if ("oppo" == i.channel) {
								if (i.curScene.nativeControl = this.node.getComponent("NativeControl"), i.isBannerRefreshByScene && !i.isBannerFirst) i.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner);
								else if (i.oppoNativeBannerRes) {
									var s = i.oppoNativeBannerRes;
									this.nativeControl.ShowNativeBanner(s.adId, s.title, s.desc)
								}
							} else "vivo" == i.channel && (i.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner), this.schedule(function() {
								try {
									0 == this.nativeControl.nativeBannerBtn.node.active && 2 == i.sceneIndex && i.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner)
								} catch (e) {}
							}.bind(this), 10));
						else "oppo" == i.channel || "vivo" == i.channel ? "oppo" == i.channel ? i.isBannerRefreshByScene && i.isBannerFirst ? i.adsManager.ShowBanner() : i.isBannerFirst && i.adsManager.showBannerTime && i.gameManager.GetNowTime() - i.adsManager.showBannerTime > 3e4 && !i.adsManager.isShow && i.adsManager.ShowBanner() : (i.adsManager.ShowBanner(), this.schedule(function() {
							i.adsManager.ShowBanner()
						}, 30)) : i.adsManager.ShowBanner();
						this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = 120, cc.winSize.height / cc.winSize.width < 2 && (this.signPanel.y += 60, this.signPanel.getChildByName("splash").y -= 60, this.signPanel.getChildByName("okBtn").y += 10), "qq" == i.channel && (cc.winSize.height / cc.winSize.width < 2 ? cc.find("Canvas/topHolder").getComponent(cc.Widget).top += 30 : (this.signPanel.y += 80, this.signPanel.getChildByName("splash").y -= 80))
					} else i.adsManager.HideBanner(), this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = -(this.startHeight - this.secondScrollView.node.height);
					"tt" != i.channel && "oppo" != i.channel && "apk" == i.channel && -1 == i.packName.indexOf("nearme") && i.adsManager.ShowInterstitial(-1), "qq" == i.channel || "wx" == i.channel ? cc.find("Canvas/bottomHolder/buttons/showBoxBtn").active = !0 : cc.find("Canvas/bottomHolder/buttons/showBoxBtn").active = !1
				} else "wx" == i.channel ? cc.find("Canvas/bottomHolder/buttons/showBoxBtn").active = !0 : cc.find("Canvas/bottomHolder/buttons/showBoxBtn").active = !1;
				i.HideMoreGame(), cc.find("Canvas/pushNode").active && i.isSupportPush && (i.pushCtl = cc.find("Canvas/pushNode").getComponent("PushNodeCtl"), "oppo" == i.channel && (this.scheduleOnce(function() {
					try {
						var e = this.firstScrollView.node.parent.convertToWorldSpaceAR(this.firstScrollView.node.position);
						e = i.pushCtl.node.getChildByName("push").convertToNodeSpaceAR(e), this.pushY = e.y + this.firstScrollView.node.height / 2 * 3 + 250, i.pushCtl.CreateOneCol(1, 10, cc.v2(300, this.pushY), .8), i.pushCtl.OneRowNodeAnimPlay(i.pushCtl.colNode)
					} catch (e) {}
				}, .1), i.pushCtl.CreateDrawerPush(200)))
			},
			SetGiftTimer: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				if (!(0 == i.isHasAd || 3 == i.showGiftNum || i.giftMsg.length <= parseInt(i.giftSets))) {
					var t = 60;
					0 == e && (t = 60 - Math.floor((i.GetNowTime() - i.giftTime) / 1e3)), t = Math.max(t, .1), this.scheduleOnce(function() {
						this.giftPanel.active = !0
					}.bind(this), t)
				}
			},
			UpdateRecordBtn: function() {
				i.recorderFlag ? this.record.spriteFrame = this.recording : this.record.spriteFrame = this.recordStop
			},
			RecordFail: function() {
				i.curScene.generalRemind.active = !0, i.curScene.generalRemind.getComponent("GeneralRemind").InitPanel(1), i.ShowPanelHandle()
			},
			BtnRecorderClick: function() {
				this.deleteArea.active = !1, i.audioManager && i.audioManager.PlayClickSound(), i.RecordHandle(this.StatisticsRecord, this.RecordFail)
			},
			StatisticsRecord: function(e) {
				0 == e ? cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == i.channel && a.Event.stat("ttthingrecordstart", {}) : 1 == e ? cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == i.channel && a.Event.stat("ttthingrecordend", {}) : 2 == e && cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == i.channel && a.Event.stat("ttthingrecordfailstart", {})
			},
			PickUpSignFreeMsg: function() {
				for (var e = 0; e <= i.setNum && e < i.signMsg.length; e++) {
					var t = i.signMsg[e].name.substr(i.signMsg[e].name.length - 1, 1),
						n = 7;
					n = e < i.setNum ? 7 : i.signDays % 7;
					for (var a = 0; a < n; a++) this.UpdateThingMsg(i.signMsg[e].gifts[a], t, !1)
				}
				for (var s = 0; s <= i.giftSets && s < i.giftMsg.length; s++) {
					var o = i.giftMsg[s].name.substr(i.giftMsg[s].name.length - 1, 1),
						c = 0;
					c = s < i.giftSets ? i.giftMsg[s].gifts.length : i.giftNum;
					for (var r = 0; r < c; r++) this.UpdateThingMsg(i.giftMsg[s].gifts[r], o, !1)
				}
				for (var l = i.shopMsg.length - 1; l >= 0; l--) {
					if (i.GetItemLockFlag(i.shopMsg[l].name) >= i.shopMsg[l].videoNum) {
						var h = i.shopMsg[l].name.substr(i.shopMsg[l].name.length - 1, 1);
						this.UpdateThingMsg(i.shopMsg[l], h, !1)
					}
				}
			},
			UpdateThingMsg: function(e, t, n) {
				void 0 == n && (n = !0);
				for (var i = 1; i < 3; i++) {
					var a = 100 + parseInt(i);
					if (e[a.toString()]) {
						var s = {
							name: e[a.toString()] + t + "2",
							type: "0" + String.fromCharCode("a".charCodeAt() + i)
						};
						this.images[i - 1].splice(0, 0, s), n && i == this.curInnerType && this.itemRemark.LoadData(this.images[i - 1], !1)
					}
				}
				if (e[100]) {
					var o = {
						name: e[100] + t + "2",
						type: "0a"
					};
					this.imageColor.splice(0, 0, o), n && 0 == this.curInnerType && this.itemRemark.LoadData(this.imageColor)
				}
			},
			BtnShowSignPanel: function() {
				this.signPanel.active = !0, i.ShowPanelHandle("sign")
			},
			BtnShowClearPanel: function() {
				this.deleteArea.active = !1, i.audioManager && i.audioManager.PlayClickSound(), this.clearDressupPanel.active = !0, i.ShowPanelHandle("clearPanel"), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == i.channel && a.Event.stat("ttthingtrash", {})
			},
			BtnClearDressUp: function(e) {
				i.audioManager && i.audioManager.PlayClickSound(), e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
					e.target.getComponent(cc.Button).interactable = !0
				}, .5), this.textureSprite.spriteFrame = null;
				for (var t = this.stickers.children, n = 0; n < t.length; n++) t[n].destroy();
				t = this.moveNode.children;
				for (var a = 0; a < t.length; a++) t[a].destroy();
				this.clearDressupPanel.active = !1, i.HidePanelHandle(this.clearDressupPanel.name), 1 == i.imageMode ? (this.node.getComponent(cc.Sprite).type = cc.Sprite.Type.SIMPLE, this.node.getComponent(cc.Sprite).spriteFrame = this.defaultBgGame, this.node.color = cc.Color.WHITE) : this.node.getComponent(cc.Sprite).spriteFrame = null, i.curScene.mtId = [], i.curScene.deleteArea.active = !1, i.curStickersNum = 0;
				for (var s = this.secondScrollView.content.getComponent("SecondItemRemark"), o = 0; o < 3; o++) 0 == o ? (this.selectName[o] = i.defaultBgName, i.curBgName = 0) : this.selectName[o] = -1;
				s.UpdateSelectState()
			},
			LoadResources: function() {
				var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
				if (i.isTest && (e = !1), "qq" == i.channel && void 0 == i.boxTimes) {
					var t = i.serverPath + "qq/" + i.configName;
					cc.loader.load(t, function(e, t) {
						e ? console.log(e) : (i.isSupportBox = t.isSupportBox, i.boxTimes = t.boxTimes)
					})
				}
				if (void 0 == i.star && cc.loader.loadRes("star", cc.Prefab, function(e, t) {
						e ? console.log(e) : i.star = t
					}), 0 == this.firstScrollView.content.childrenCount && cc.loader.loadRes("firstItem/decoration", cc.SpriteAtlas, function(e, t) {
						if (e) console.log(e);
						else {
							var n = t.getSpriteFrames();
							n = i.SortArray(n, 0), this.firstScrollView.content.getComponent("FirstItemRemark").InitScrollView(n)
						}
					}.bind(this)), 1 == e) {
					if (null == i.decorationMsg) {
						var n = i.serverPath + "decoration/decorationMsg.json";
						if ("apk" == i.channel) {
							var a = this,
								s = new XMLHttpRequest;
							s.onreadystatechange = function() {
								try {
									if (4 == s.readyState && s.status >= 200 && s.status < 400) {
										var e = s.responseText,
											t = JSON.parse(e).list;
										i.decorationMsg = t;
										for (var n = 0; n < t.length; n++) {
											var o = t[n].type[1].charCodeAt() - "b".charCodeAt();
											void 0 == a.images[o] && (a.images[o] = new Array), a.images[o].push(t[n])
										}
										a.PickUpSignFreeMsg()
									}
								} catch (e) {}
							}, s.open("GET", n, !0), s.send()
						} else cc.loader.load(n, function(e, t) {
							if (e) console.log(e);
							else {
								var n = t.list;
								i.decorationMsg = n;
								for (var a = 0; a < n.length; a++) {
									var s = n[a].type[1].charCodeAt() - "b".charCodeAt();
									void 0 == this.images[s] && (this.images[s] = new Array), this.images[s].push(n[a])
								}
								this.PickUpSignFreeMsg()
							}
						}.bind(this))
					} else {
						for (var o = 0; o < i.decorationMsg.length; o++) {
							var c = i.decorationMsg[o].type[1].charCodeAt() - "b".charCodeAt();
							void 0 == this.images[c] && (this.images[c] = new Array), this.images[c].push(i.decorationMsg[o])
						}
						this.PickUpSignFreeMsg()
					}
					if (null == i.otherGirlMsg) {
						//var r = i.serverPath + "other/girl/otherMsg.json";
						var r = "other/girl/otherMsg.json";
						if ("apk" == i.channel) {
							var l = new XMLHttpRequest,
								h = this;
							l.onreadystatechange = function() {
								try {
									if (4 == l.readyState && l.status >= 200 && l.status < 400) {
										var e = l.responseText;
										i.otherGirlMsg = JSON.parse(e), h.imageItemRemark.LoadData(0, i.imageMsg, !1)
									}
								} catch (e) {}
							}, l.open("GET", path, !0), l.send()
						} else cc.loader.load(r, function(e, t) {
							e ? console.log(e) : (i.otherGirlMsg = t, this.imageItemRemark.LoadData(0, i.imageMsg, !1))
						}.bind(this))
						console.log("3333",i,r);
					} else this.imageItemRemark.LoadData(0, i.imageMsg, !1)
				} else {
					if (null == i.decorationMsg) cc.loader.loadRes("decoration/decorationMsg", function(e, t) {
						if (e) console.log(e);
						else {
							var n = t.json.list;
							i.decorationMsg = n;
							for (var a = 0; a < n.length; a++) {
								var s = n[a].type[1].charCodeAt() - "b".charCodeAt();
								void 0 == this.images[s] && (this.images[s] = new Array), this.images[s].push(n[a])
							}
							this.PickUpSignFreeMsg()
						}
					}.bind(this));
					else {
						for (var d = 0; d < i.decorationMsg.length; d++) {
							var g = i.decorationMsg[d].type[1].charCodeAt() - "b".charCodeAt();
							void 0 == this.images[g] && (this.images[g] = new Array), this.images[g].push(i.decorationMsg[d])
						}
						this.PickUpSignFreeMsg()
					}
					null == i.otherGirlMsg ? cc.loader.loadRes("other/girl/otherMsg", function(e, t) {
						e ? console.log(e) : (i.otherGirlMsg = t.json, this.imageItemRemark.LoadData(0, i.imageMsg, !1))
					}.bind(this)) : this.imageItemRemark.LoadData(0, i.imageMsg, !1)
				}
			},
			LoadBg: function() {
				if (0 == i.curBgName) 1 == i.imageMode ? (this.node.getComponent(cc.Sprite).type = cc.Sprite.Type.SIMPLE, this.node.getComponent(cc.Sprite).spriteFrame = this.defaultBgGame, this.node.color = cc.Color.WHITE) : this.node.getComponent(cc.Sprite).spriteFrame = null;
				else {
					var e = i.curBgName.split("&");
					e[0].substr(e[0].length - 1, 1);
					if (-1 != e[0].indexOf("#")) {
						var t = cc.Color.WHITE;
						this.node.getComponent(cc.Sprite).spriteFrame = this.defaultBg, this.node.color = t.fromHEX(e[0].toString())
					} else this.node.color = cc.Color.WHITE, this.node.getComponent(cc.Sprite).spriteFrame = i.bgFrame;
					2 == e.length && 1 == e[1] || 3 == e.length && 1 == e[2] ? i.curScene.node.getComponent(cc.Sprite).type = cc.Sprite.Type.TILED : i.curScene.node.getComponent(cc.Sprite).type = cc.Sprite.Type.SIMPLE
				}
			},
			BtnImageClick: function(e) {
				(i.audioManager && i.audioManager.PlayClickSound(), 0 == this.isShowScrollview && this.BtnHideScrollView(null), -1 != this.curInnerType) && (this.imageScrollView.node.active = !0, this.firstScrollView.content.children[this.curInnerType].getComponent("FirstItem").selectNode.active = !1, this.curInnerType = -1, i.curType = -1, this.itemRemark.ClearData(), this.secondScrollView.node.active = !1, this.UpdateImageItem(), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == i.channel && a.Event.stat("ttthinggirl", {}), "qq" == i.channel && 1 == i.isSupportBox && (i.itemClikTimes++, i.itemClikTimes == i.boxTimes && (i.itemClikTimes = 0, i.adsManager.ShowAppBox())))
			},
			BtnHideScrollView: function(e) {
				e && (i.audioManager && i.audioManager.PlayClickSound(), e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
					e.target.getComponent(cc.Button).interactable = !0
				}, .1)), this.isShowScrollview ? this.ShowHidePanelHandle(1) : this.ShowHidePanelHandle(2)
			},
			ShowHidePanelHandle: function(e) {
				1 == e ? this.isShowScrollview && (this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = -400, i.isHasAd && i.isShowBanner && (this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = -280), this.isShowScrollview = !1, this.imageNode.parent.getChildByName("hideItemBtn").children[0].angle = 180) : 2 == e && (this.deleteArea.active = !1, 0 == this.isShowScrollview && (this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = -(this.startHeight - this.imageScrollView.node.height), i.isHasAd && i.isShowBanner && (this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = 120), this.isShowScrollview = !0, this.imageNode.parent.getChildByName("hideItemBtn").children[0].angle = 0))
			},
			showToCatScenePanel: function(e) {
				this.deleteArea.active = !1, i.audioManager && i.audioManager.PlayClickSound(), this.toCatScenePanel.active = !0, i.ShowPanelHandle("personPanel")
			},
			BtnToCatScene: function(e, t) {
				i.audioManager && i.audioManager.PlayClickSound(), e.target.getComponent(cc.Button).interactable = !1, i.HidePanelHandle(), i.personMsg = null, cc.sys.platform != cc.sys.DESKTOP_BROWSER && ("tt" == i.channel ? a.Event.stat("ttentercat_deco", {}) : "qq" == i.channel ? a.Event.stat("qqentercat_deco", {}) : "wx" == i.channel && a.Event.stat("wxentercat_deco", {})), cc.director.loadScene("GameSceneCat")
			},
			AddOnePerson: function(e) {
				this.deleteArea.active = !1, i.audioManager && i.audioManager.PlayClickSound(), this.addOnePersonPanel.active = !0, i.ShowPanelHandle("personPanel"), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == i.channel && (e ? a.Event.stat("ttaddpersonnew", {}) : a.Event.stat("ttthingaddperson", {}))
			},
			BtnCreateNewPerson: function(e, t) {
				i.audioManager && i.audioManager.PlayClickSound(), e.target.getComponent(cc.Button).interactable = !1, i.isCreatePerson = t, i.HidePanelHandle(), i.personMsg = null, i.personType = 1, cc.director.loadScene("GameScene")
			},
			BtnDeleteImage: function() {
				i.audioManager && i.audioManager.PlayClickSound(), this.deleteImagePanel.active = !1;
				var e = i.curItem.index - 1,
					t = i.imageMsg.length;
				i.imageMsg.splice(e, 1);
				var n = i.fakeUnlockName.indexOf(i.curItem.index); - 1 != n && i.fakeUnlockName && i.fakeUnlockName.splice(n, 1);
				for (var a = 0; a < i.fakeUnlockName.length; a++) i.fakeUnlockName[a] > i.curItem.index && (i.fakeUnlockName[a] = parseInt(i.fakeUnlockName[a]) - 1);
				i.imageMsg.length = t - 1, i.SetImageMsg(), this.imageItemRemark.LoadData(0, i.imageMsg, !1), i.HidePanelHandle()
			},
			UpdateImageItem: function() {
				for (var e = this.imageScrollView.content.children, t = 1; t < e.length; t++) {
					var n = e[t].getComponent("ImageItem");
					if (i.imageMsg[n.index - 1] && 0 == i.imageMsg[n.index - 1].lock) n.lockNode.active = !1;
					else {
						if (!i.isHasAd) continue;
						n.lockNode.active = !0
					}
				}
			},
			BtnSaveScreenShot: function(e) {
				this.deleteArea.active = !1, i.audioManager && i.audioManager.PlayPhotoSound(), e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
					e.target.getComponent(cc.Button).interactable = !0
				}, .3), i.shotImage = i.ScreenShot(this.camera, this.targetNode), this.saveScreenShotPanel.active = !0, "wx" == i.channel || "qq" == i.channel || "tt" == i.channel || "swan" == i.channel ? "tt" == i.channel ? (this.saveScreenShotPanel.getChildByName("shareBtn").active = !0, this.saveScreenShotPanel.getChildByName("shareBtn1").active = !1) : (this.saveScreenShotPanel.getChildByName("shareBtn").active = !1, this.saveScreenShotPanel.getChildByName("shareBtn1").active = !0, this.saveScreenShotPanel.getChildByName("shareBtn1").getComponent(cc.Animation).play("scale")) : this.saveScreenShotPanel.getChildByName("shareBtn").active = !1, this.saveScreenShotPanel.getChildByName("image").getComponent(cc.Sprite).spriteFrame = i.shotImage, 0 == i.isNormalShot && (this.saveScreenShotPanel.getChildByName("image").scaleY = -1), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == i.channel && a.Event.stat("ttthingcamera", {}), i.isHasAd && "tt" != i.channel && "qq" != i.channel && i.adsManager.ShowInterstitial(-1), "tt" == i.channel ? (i.recorderFlag ? i.GetNowTime() - i.startRecordTime < 3e3 ? this.saveScreenShotPanel.getChildByName("shareVideoBtn").active = !1 : (i.pickId = 2, this.saveScreenShotPanel.getChildByName("shareVideoBtn").active = !0, this.saveScreenShotPanel.getChildByName("shareVideoBtn").getComponent(cc.Animation).play("scale"), i.recorder.stop()) : null != i.videoPath ? (this.saveScreenShotPanel.getChildByName("shareVideoBtn").active = !0, this.saveScreenShotPanel.getChildByName("shareVideoBtn").getComponent(cc.Animation).play("scale")) : this.saveScreenShotPanel.getChildByName("shareVideoBtn").active = !1, cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == i.channel && "live_stream" == i.systemInfo.appName && (this.saveScreenShotPanel.getChildByName("shareBtn").active = !1)) : this.saveScreenShotPanel.getChildByName("shareVideoBtn").active = !1
			},
			BtnSaveToPhoto: function(e) {
				i.audioManager && i.audioManager.PlayClickSound(), e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
					e.target.getComponent(cc.Button).interactable = !0
				}, .3), cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os && "ios" == i.channel ? i.SaveImageToPhoto(this.SaveToPhotoSuc, this.HideScreenShotPanelBtn, this.ShowScreenShotPanelBtn) : cc.sys.os == cc.sys.OS_ANDROID && "apk" == i.channel || i.SaveImageToPhoto(this.SaveToPhotoSuc), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == i.channel && a.Event.stat("ttthingphoto", {})
			},
			SaveToPhotoSuc: function() {
				i.curScene.sucRemind.active = !0;
				var e = cc.moveBy(.5, cc.v2(0, 100)),
					t = cc.sequence(cc.callFunc(function(e) {
						i.curScene.sucRemind.setPosition(0, Math.floor(cc.winSize.height) / 5)
					}, i.curScene, 500), e, cc.callFunc(function(e) {
						i.curScene.sucRemind.active = !1
					}, i.curScene, 100));
				i.curScene.sucRemind.runAction(t)
			},
			HideScreenShotPanelBtn: function() {
				i.curScene.saveScreenShotPanel.getChildByName("saveBtn").active = !1, i.curScene.saveScreenShotPanel.getChildByName("closeBtn").active = !1
			},
			ShowScreenShotPanelBtn: function() {
				i.curScene.saveScreenShotPanel.getChildByName("saveBtn").active = !0, i.curScene.saveScreenShotPanel.getChildByName("closeBtn").active = !0
			},
			BtnShareApp: function(e) {
				this.deleteArea.active = !1, e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
					e.target.getComponent(cc.Button).interactable = !0
				}, .5), i.audioManager && i.audioManager.PlayClickSound(), i.ShareApp(), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == i.channel && a.Event.stat("ttthingshare", {})
			},
			BtnShareVideo: function(e) {
				if (null == i.videoPath) return this.generalRemind.active = !0, i.ShowPanelHandle(), void this.generalRemind.getComponent("GeneralRemind").InitPanel(4);
				e && (e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
					e.target.getComponent(cc.Button).interactable = !0
				}, 1));
				var t = this,
					n = {
						videoPath: i.videoPath
					};
				"Douyin" == i.systemInfo.appName ? (void 0 == i.topics1 && (i.topics1 = "\u68a6\u5e7b\u5c11\u5973", i.topics2 = ""), "" == i.topics2 ? (n.videoTopics = [i.topics1], n.hashtag_list = [i.topics1]) : (n.videoTopics = [i.topics1, i.topics2], n.hashtag_list = [i.topics1, i.topics2])) : "Toutiao" == i.systemInfo.appName && (n.createChallenge = !0), tt.shareAppMessage({
					channel: "video",
					extra: n,
					success: function() {
						e && (e.target.getComponent(cc.Button).interactable = !0)
					},
					fail: function(n) {
						console.log("\u5206\u4eab\u5931\u8d25:" + n.errMsg), e && (e.target.getComponent(cc.Button).interactable = !0), n.errMsg && -1 == n.errMsg.substr("cancel") && (-1 == n.errMsg.substr("file not exit") && -1 == n.errMsg.substr("get shareInnfo return null") || (i.videoPath = null), t.generalRemind.active = !0, t.generalRemind.getComponent("GeneralRemind").InitPanel(4), i.ShowPanelHandle())
					}
				}), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == i.channel && a.Event.stat("ttsharevideonew1", {})
			},
			UpdateBtnMusic: function() {
				i.audioOn ? this.audioImage.spriteFrame = this.audioOn : this.audioImage.spriteFrame = this.audioOff
			},
			BtnMusicClick: function() {
				i.audioManager && i.audioManager.PlayClickSound(), i.audioOn ? (i.audioOn = !1, i.musicOn = !1, i.SetAudioFlag(1), i.SetMusicFlag(1), i.StopMusic()) : (i.audioOn = !0, i.musicOn = !0, i.SetAudioFlag(2), i.SetMusicFlag(2), i.PlayMusic()), this.UpdateBtnMusic(), "tt" == i.channel && a.Event.stat("ttthingaudio", {})
			},
			BtnShowBoxAd: function(e) {
				this.deleteArea.active = !1, i.audioManager && i.audioManager.PlayClickSound(), "qq" == i.channel ? i.adsManager.ShowAppBox() : (i.pushCtl.CreatePushPanel(), i.adsManager.ShowBanner()), e.target.getChildByName("dot").active = !1
			},
			GetReward: function(e) {
				1 == i.adsManager.lockType ? i.curUnlockItem.UpdateItemButton(e) : 3 == i.adsManager.lockType && i.curUnlockItem.GetReward()
			},
			BtnClosePanel: function(e) {
				i.audioManager && i.audioManager.PlayClickSound(), 0 == this.saveScreenShotPanel.active ? i.HidePanelHandle(e.target.name) : (this.saveScreenShotPanel.getChildByName("shareVideoBtn").getComponent(cc.Animation).stop("scale"), this.saveScreenShotPanel.getChildByName("shareBtn1").active && this.saveScreenShotPanel.getChildByName("shareBtn1").getComponent(cc.Animation).stop("scale")), e.target.parent.active = !1
			},
			GenerateJpegData: function(e, t, n) {}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager",
		mta_analysis: "mta_analysis"
	}],
	DemoTest: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "6c134N7RSNPs63iSOEUlR6a", "DemoTest");
		var i = e("PushConfig");
		cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function() {
				i.channel = gameManager.channel
			},
			start: function() {
				cc.find("Canvas/pushNode").active && (this.pushCtl = cc.find("Canvas/pushNode").getComponent("PushNodeCtl"), cc.find("Canvas/pushNode").height = cc.winSize.height)
			},
			BtnShowOneRow: function() {
				this.pushCtl.CreateOneRow(4, 5, cc.v2(0, 80))
			},
			BtnShowOneCol: function() {
				this.pushCtl.CreateOneCol(4, 5, cc.v2(0, 0))
			},
			BtnShowTwoCol: function() {
				this.pushCtl.CreateTwoCol(4, 5, cc.v2(0, 80))
			},
			BtnShowHorScrollView: function() {
				this.pushCtl.CreateHorPanel(!1, 15, 10, 1, cc.v2(654, 150))
			},
			BtnShowPushPanel: function() {
				this.pushCtl.CreatePushPanel()
			},
			BtnHideOneRow: function() {
				this.pushCtl.HideOneRow()
			},
			BtnHideOneCol: function() {
				this.pushCtl.HideOneCol()
			},
			BtnHideTwoCol: function() {
				this.pushCtl.HideTwoCol()
			},
			BtnHideHorScrollView: function() {
				this.pushCtl.HideHorScroll()
			}
		}), cc._RF.pop()
	}, {
		PushConfig: "PushConfig"
	}],
	DropWater: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "28a35U/gJhN6YqKa10JL7rm", "DropWater");
		var i = e("GameManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				anim: cc.Animation
			},
			unuse: function() {
				this.node.getComponent(cc.Sprite).spriteFrame = null, this.anim.stop(), this.node.y = -80
			},
			reuse: function(e, t) {
				this.init(e, t)
			},
			init: function(e, t) {
				this.node.parent = e, this.node.getComponent(cc.Sprite).spriteFrame = t, this.anim.play()
			},
			addMsg: function() {
				i.curScene.addMsgNum(this.node)
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager"
	}],
	FaceDetection: [function(e, t, n) {
		"use strict";

		function i(e) {
			if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
				if (Array.isArray(e) || (e = a(e))) {
					var t = 0,
						n = function() {};
					return {
						s: n,
						n: function() {
							return t >= e.length ? {
								done: !0
							} : {
								done: !1,
								value: e[t++]
							}
						},
						e: function(e) {
							throw e
						},
						f: n
					}
				}
				throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}
			var i, s, o = !0,
				c = !1;
			return {
				s: function() {
					i = e[Symbol.iterator]()
				},
				n: function() {
					var e = i.next();
					return o = e.done, e
				},
				e: function(e) {
					c = !0, s = e
				},
				f: function() {
					try {
						o || null == i.return || i.return()
					} finally {
						if (c) throw s
					}
				}
			}
		}

		function a(e, t) {
			if (e) {
				if ("string" == typeof e) return s(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
			}
		}

		function s(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
			return i
		}
		cc._RF.push(t, "484c1JjzUJF8Y9USiAC5R+Q", "FaceDetection");
		var o = e("GameManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				videoSprite: cc.Sprite,
				isFullScreen: !1
			},
			onLoad: function() {
				this.videoTexture = new cc.Texture2D, this.camera = null, this.video = null, this.detector = null, this.frame = 0
			},
			onEnable: function() {
				this.startCamera()
			},
			onDisable: function() {
				cc.sys.platform != cc.sys.DESKTOP_BROWSER && (o.faceCamera.pause(), this.videoSprite.spriteFrame = null, this.videoTexture = new cc.Texture2D, this.camera = null, this.video = null, this.detector = null, this.frame = 0)
			},
			startCamera: function() {
				var e = this;
				cc.sys.platform != cc.sys.DESKTOP_BROWSER && (o.faceCamera ? (o.faceCamera.resume(), this.initVideo()) : (o.faceCamera = tt.createCamera(), tt.setKeepScreenOn(), o.faceCamera.start("front", !0).then(function(t) {
					o.faceVideo = t, e.initVideo()
				}).catch(function(e) {
					tt.showToast({
						title: "\u6444\u50cf\u673a\u9700\u8981\u6388\u6743"
					}), console.log(e)
				}), o.faceCamera.setBeautifyParam(1, 1, 1, 1)))
			},
			initVideo: function() {
				this.videoTexture = new cc.Texture2D, this.videoTexture.initWithElement(o.faceVideo), this.videoTexture.handleLoadedTexture(), this.videoSprite.spriteFrame = new cc.SpriteFrame(this.videoTexture), this.setVideoWidth(this.videoSprite.node.width), this.videoSprite.node.width = o.faceVideo.width, this.videoSprite.node.height = o.faceVideo.height
			},
			startDetector: function() {
				this.detector && o.faceVideo && this.detector.detectFaces(o.faceVideo).then(function(e) {
					console.log(e)
				})
			},
			handleDetectionResult: function() {
				if (cc.sys.platform != cc.sys.DESKTOP_BROWSER) {
					var e = {
						blink: "\u7728\u773c",
						blink_left: "\u5de6\u7728\u773c",
						blink_right: "\u53f3\u7728\u773c",
						mouth_ah: "\u5634\u5df4\u5927\u5f20",
						head_yaw: "\u6447\u5934",
						head_yaw_indian: "\u5370\u5ea6\u5f0f\u6447\u5934",
						head_pitch: "\u70b9\u5934",
						brow_jump: "\u7709\u6bdb\u6311\u52a8",
						mouth_pout: "\u561f\u5634"
					};
					this.detector.onActions(function(t) {
						var n, a = [],
							s = i(t.actions);
						try {
							for (s.s(); !(n = s.n()).done;) {
								var o = n.value;
								console.log("\u68c0\u6d4b\u5230 ".concat(e[o], " \u52a8\u4f5c")), a.push(e[o])
							}
						} catch (e) {
							s.e(e)
						} finally {
							s.f()
						}
						tt.showToast({
							title: a.join("\u3001"),
							duration: 2e3
						})
					})
				}
			},
			setVideoWidth: function(e) {
				o.faceVideo && (o.faceVideo.width = e, o.faceVideo.height = o.faceVideo.videoHeight / o.faceVideo.videoWidth * e, this.isFullScreen && (o.faceVideo.height = cc.winSize.height))
			},
			update: function(e) {
				cc.sys.platform != cc.sys.DESKTOP_BROWSER && this.videoTexture && o.faceVideo && this.videoTexture.update({
					image: o.faceVideo,
					flipY: !1
				})
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager"
	}],
	FirstItemRemark: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "3bd892OYQJPNpNXJT6FgoiS", "FirstItemRemark");
		var i = e("GameManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				itemW: 100,
				itemH: 100,
				spaceW: 20,
				item: cc.Prefab
			},
			start: function() {},
			InitScrollView: function(e) {
				var t = e.length / 2;
				i.curScene.selectName = new Array(t), i.curScene.freeStates = new Array(t);
				for (var n = 0, a = 0, s = 0, o = 0; o < t; o++) {
					var c = cc.instantiate(this.item);
					c.parent = this.node;
					var r = c.getComponent("FirstItem");
					r.image.spriteFrame = e[o], r.selectNode.getComponent(cc.Sprite).spriteFrame = e[t + o];
					var l = r.image.node.width;
					if (n += l, c.setContentSize(l, this.itemH), r.type = o, r.selectNode.active = !1, 0 == o ? (a = this.spaceW / 2 + l / 2, s = l / 2) : (a = a + this.spaceW + s + l / 2, s = l / 2), c.x = a, c.y = 0, 0 != i.sceneType) {
						var h = i.itemName[o];
						o == t - 1 && (h = "body");
						var d = i.personMsg[h];
						if (void 0 == d) i.curScene.selectName[o] = 0, i.curScene.freeStates[o] = !1;
						else {
							var g = d.substr(0, d.length - 2),
								p = d.substr(d.length - 1, 1);
							i.curScene.selectName[o] = g, i.curScene.freeStates[o] = 0 == p || 2 == p || p > 3
						}
						if (0 == o && (r.selectNode.active = !0), o == t - 2)
							if (0 == i.curBgName) i.curScene.selectName[o] = i.defaultBgName;
							else {
								var u = i.curBgName.split("&"),
									m = "";
								m = 3 == u.length ? u[1] : u[0].substr(0, u[0].length - 1), i.curScene.selectName[o] = m
							}
					} else if (0 == o)
						if (0 == i.curBgName) i.curScene.selectName[o] = i.defaultBgName;
						else {
							var f = i.curBgName.split("&"),
								v = "";
							v = 3 == f.length ? f[1] : f[0].substr(0, f[0].length - 1), i.curScene.selectName[o] = v
						}
					else i.curScene.selectName[o] = -1
				}
				var S = this.node.children;
				if (0 != i.sceneType) {
					var C = S[S.length - 2].position;
					S[S.length - 2].position = S[S.length - 1].position, S[S.length - 1].position = C
				}
				0 != i.sceneType && 1 != i.GetItemLockFlag("body") && (S[S.length - 1].getChildByName("new").active = !0), this.node.width = n + t * this.spaceW
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager"
	}],
	FirstItem: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "7763bAF0S1NOJviU74xjpnr", "FirstItem");
		var i = e("GameManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				image: cc.Sprite,
				selectNode: cc.Node
			},
			onLoad: function() {
				this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
			},
			start: function() {
				this.lastPosition = cc.v2(0, 0), this.moveFlag = !1
			},
			onTouchStart: function(e) {
				this.lastPosition = e.touch.getLocation(), this.moveFlag = !1
			},
			onTouchMove: function(e) {
				var t = e.touch.getLocation();
				(Math.abs(t.x - this.lastPosition.x) > 5 || Math.abs(t.y - this.lastPosition.y) > 5) && (this.moveFlag = !0)
			},
			onTouchEnd: function() {
				if (0 == this.moveFlag) {
					if (i.audioManager && i.audioManager.PlayClickSound(), i.curScene.curInnerType == this.type) return void(0 == i.curScene.isShowScrollview && i.curScene.BtnHideScrollView(null));
					i.fakeUnlockName = [], "qq" == i.channel && 1 == i.isSupportBox && (i.itemClikTimes++, i.itemClikTimes == i.boxTimes && (i.itemClikTimes = 0, i.adsManager.ShowAppBox())), 0 == i.sceneType && -1 == i.curScene.curInnerType && (i.curScene.imageScrollView.node.active = !1, i.curScene.secondScrollView.node.active = !0);
					var e = this.node.parent.children;
					if (i.curScene.curInnerType >= 0 && (e[i.curScene.curInnerType].getComponent("FirstItem").selectNode.active = !1), i.curScene.curInnerType = this.type, this.selectNode.active = !0, 0 == i.sceneType) {
						i.curType = "0" + String.fromCharCode("a".charCodeAt() + this.type), 0 == this.type ? i.curScene.itemRemark.LoadData(i.curScene.imageColor) : 3 == this.type ? i.curScene.itemRemark.LoadData(configCat.catImg, !1) : i.curScene.itemRemark.LoadData(i.curScene.images[this.type - 1], !1), e[i.curScene.curInnerType].getComponent("FirstItem").selectNode.active = !0, i.curScene.ShowHidePanelHandle(2)
					} else if (1 == i.sceneType || 2 == i.sceneType) {
						var t = "a";
						2 == i.sceneType && (t = "A"), i.curType = String.fromCharCode(t.charCodeAt() + this.type), "u" == i.curType && 1 != i.GetItemLockFlag("body") && (i.SetItemLockFlag("body", 1), this.node.getChildByName("new").active = !1), i.curScene.itemRemark1.LoadData(i.curScene.images1[this.type]), 0 == i.curScene.isShowScrollview && i.curScene.BtnHideScrollView(null)
					}
				}
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager"
	}],
	GDSdk: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "4f71dekrFRFspbBaPIFxS6D", "GDSdk"), cc._RF.pop()
	}, {}],
	GameControllerCat: [function(e, t, n) {
		"use strict";

		function i(e) {
			if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
				if (Array.isArray(e) || (e = a(e))) {
					var t = 0,
						n = function() {};
					return {
						s: n,
						n: function() {
							return t >= e.length ? {
								done: !0
							} : {
								done: !1,
								value: e[t++]
							}
						},
						e: function(e) {
							throw e
						},
						f: n
					}
				}
				throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}
			var i, s, o = !0,
				c = !1;
			return {
				s: function() {
					i = e[Symbol.iterator]()
				},
				n: function() {
					var e = i.next();
					return o = e.done, e
				},
				e: function(e) {
					c = !0, s = e
				},
				f: function() {
					try {
						o || null == i.return || i.return()
					} finally {
						if (c) throw s
					}
				}
			}
		}

		function a(e, t) {
			if (e) {
				if ("string" == typeof e) return s(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
			}
		}

		function s(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
			return i
		}
		cc._RF.push(t, "f0aa18Hi0RI9LJFgVy2TL3+", "GameControllerCat");
		var o = null,
			c = e("Mat"),
			r = e("Cat"),
			l = e("CatBox"),
			h = e("PopCat"),
			d = e("GameManager"),
			g = e("mta_analysis");
		cc.Class({
			extends: cc.Component,
			properties: {
				generalRemind: cc.Node,
				record: cc.Sprite,
				recording: cc.SpriteFrame,
				recordStop: cc.SpriteFrame,
				loading: cc.Node,
				guideNode: cc.Node,
				incomePerSecondLabel: cc.Label,
				dailyRewardNode: cc.Node,
				shopBtnLockNode: cc.Node,
				catItemPrefab: cc.Prefab,
				privilegeItemPrefab: cc.Prefab,
				shopCatScroll: cc.ScrollView,
				shopCatScrollBtnSprite: cc.Sprite,
				shopSrivilegeScroll: cc.ScrollView,
				shopSrivilegeScrollBtnSprite: cc.Sprite,
				shopBtnOnSprite: cc.SpriteFrame,
				shopBtnOffSprite: cc.SpriteFrame,
				incomeMultipleLabel: cc.Label,
				speedupLabel: cc.Label,
				speedupValueSprite: cc.Sprite,
				dailyRewardPannel: cc.Node,
				shopPanel: cc.Node,
				freeCoinPanel: cc.Node,
				newCatPanel: cc.Node,
				speedupPannel: cc.Node,
				levelupPannel: cc.Node,
				airplane: cc.Node,
				speedupAirplanePrefab: cc.Prefab,
				popPrefab: cc.Prefab,
				popParent: cc.Node,
				matsParent: cc.Node,
				dragItemParent: cc.Node,
				catPrefab: cc.Prefab,
				catBoxPrefab: cc.Prefab,
				addCatSprite: cc.Sprite,
				addCatLabel: cc.Label,
				playerExpSprite: cc.Sprite,
				playerLevelLebel: cc.Label,
				diamondLebel: cc.Label,
				fishCoinLebel: cc.Label,
				playerExp: {
					default: 0,
					visible: !1,
					type: cc.Integer,
					notify: function() {
						this.setPlayerExp(this.playerExp)
					}
				},
				playerMaxExp: {
					default: 5,
					visible: !1,
					type: cc.Integer
				},
				playerLevel: {
					default: 1,
					visible: !1,
					type: cc.Integer,
					notify: function() {
						this.setPlayLevel(this.playerLevel)
					}
				},
				diamonds: {
					default: 0,
					visible: !1,
					type: cc.Integer,
					notify: function() {
						this.setDiamonds(this.diamonds)
					}
				},
				fishCoin: {
					default: 0,
					visible: !1,
					type: cc.Float,
					notify: function() {
						this.setFishCoin(this.fishCoin)
					}
				},
				progressValueSprite: cc.Sprite,
				progressValue: {
					default: 0,
					visible: !1,
					type: cc.Integer,
					notify: function() {
						this.updateProgress(this.progressValue)
					}
				},
				loadingImgs: [cc.SpriteFrame]
			},
			onDestroy: function() {
				configCat.setFishCoin(this.fishCoin), configCat.setPlayerInfo("speedupTime", this.speedupTime), configCat.setPlayerInfo("offLineTime", (new Date).getTime()), this.isOffLinePannelShow && (this.fishCoin += this.freeCoinReward, this.freeCoinReward = 0, this.hideFreeCoinPanel()), this.setCatPosHistory(), o = null, configCat.gameController = null, d.curScene = null
			},
			onLoad: function() {
				o = this, configCat.gameController = this, d.curScene = this, "oppo" != d.channel && "vivo" != d.channel || (d.curScene.nativeControl = this.node.getComponent("NativeControl")), d.sceneIndex = 3, this.progressValue = 1, this.loading.active = !0, this.isInitFinshed = !1, this.isInSpeedUp = !1, this.speedupTime = 0, this.freeCoinReward = 0, this.isInitFinshed = !1, this.shopPanel.active = !1, this.freeCoinPanel.active = !1, this.newCatPanel.active = !1, this.speedupPannel.active = !1, this.dailyRewardPannel.active = !1, this.levelupPannel.active = !1, this.diamonds = configCat.getPlayerInfo("diamonds"), this.fishCoin = configCat.getFishCoin(), this.playerLevel = configCat.getPlayerInfo("playerLevel"), this.playerExp = configCat.getPlayerInfo("playerExp"), cc.director.getCollisionManager().enabled = !0, cc.game.on(cc.game.EVENT_HIDE, function() {
					null != configCat.gameController && (configCat.setFishCoin(this.fishCoin), configCat.setPlayerInfo("speedupTime", this.speedupTime), configCat.setPlayerInfo("offLineTime", (new Date).getTime()), this.isOffLinePannelShow && (this.fishCoin += this.freeCoinReward, this.freeCoinReward = 0, this.hideFreeCoinPanel()))
				}.bind(this)), cc.game.on(cc.game.EVENT_SHOW, function() {
					null != configCat.gameController && configCat.gameController.isInitFinshed && (o.CheckOffLine(), o.checkSpeedup())
				}.bind(this)), cc.winSize.height / cc.winSize.width < 1.7 && (cc.find("Canvas/loading/holder").y = -100), cc.winSize.height / cc.winSize.width < 1.5 ? (cc.find("Canvas/UI/Top").getComponent(cc.Widget).top = -40, cc.find("Canvas/Mats").scale = .8, cc.find("Canvas/Mats").getComponent(cc.Layout).spacingX = 20, cc.find("Canvas/Mats").getComponent(cc.Layout).spacingY = 100, cc.find("Canvas/Mats").position = cc.v3(0, 0), cc.find("Canvas/dragItemParent").scale = .8, cc.find("Canvas/levelupPannel/BG").scale = .8, cc.find("Canvas/newCatPannel/BG").scale = .8, cc.find("Canvas/fishCoinPannel/BG").scale = .8, cc.find("Canvas/speedupPannel/BG").scale = .8, cc.find("Canvas/shopPannel/BG").scale = .75, cc.find("Canvas/dailyRewardPannel/BG").scale = .75) : cc.winSize.height / cc.winSize.width <= 1.65 ? (cc.find("Canvas/UI/Top").getComponent(cc.Widget).top = -40, cc.find("Canvas/Mats").position = cc.v3(0, -30), cc.find("Canvas/shopPannel/BG").scale = .85, cc.find("Canvas/dailyRewardPannel/BG").scale = .85) : d.isHasAd && cc.winSize.height / cc.winSize.width > 1.8 && ("tt" != d.channel ? cc.find("Canvas/UI/Bottom").getComponent(cc.Widget).bottom = 100 : d.adsManager.HideBanner()), d.isHasAd && cc.winSize.height / cc.winSize.width < 1.8 && ("oppo" != this.channel && "vivo" != this.channel || !this.isShowNative || d.curScene.nativeControl.BtnNativeAdClose(null, 1), d.adsManager.HideBanner())
			},
			start: function() {
				this.shopBtnLockNode.active = !(configCat.getPlayerInfo("maxCatLevel") >= 6), this.incomeMultipleLabel.string = "Income " + parseInt(100 * configCat.getPrivilege("income")) + "%", this.checkDailyReward(), this.initCatImg(), "tt" == d.channel ? this.record.node.active = !0 : this.record.node.active = !1;
				var e = this;
				if (d.RecordInitHandle(function() {
						e.UpdateRecordBtn()
					}, function() {
						0 == d.pickId ? (e.generalRemind.active = !0, e.generalRemind.getComponent("GeneralRemind").InitPanel(1), d.ShowPanelHandle()) : 1 != d.pickId && 3 != d.pickId || (e.generalRemind.active = !0, e.generalRemind.getComponent("GeneralRemind").InitPanel(2), d.ShowPanelHandle()), e.UpdateRecordBtn()
					}), d.isHasAd && cc.winSize.height / cc.winSize.width > 1.8 && "tt" != d.channel)
					if (1 == d.isShowNative)
						if ("oppo" == d.channel) {
							if (d.isBannerRefreshByScene && !d.isBannerFirst) d.adsManager.ShowNativeAd(1, 2, d.curScene.nativeControl.ShowNativeBanner);
							else if (d.oppoNativeBannerRes) {
								var t = d.oppoNativeBannerRes;
								d.curScene.nativeControl.ShowNativeBanner(t.adId, t.title, t.desc)
							}
						} else "vivo" == d.channel && (d.adsManager.ShowNativeAd(1, 2, d.curScene.nativeControl.ShowNativeBanner), this.schedule(function() {
							try {
								0 == this.nativeControl.nativeBannerBtn.node.active && 3 == d.sceneIndex && d.adsManager.ShowNativeAd(1, 2, d.curScene.nativeControl.ShowNativeBanner)
							} catch (e) {}
						}.bind(this), 10));
				else "oppo" == d.channel || "vivo" == d.channel ? "oppo" == d.channel ? d.isBannerRefreshByScene && d.isBannerFirst ? d.adsManager.ShowBanner() : d.isBannerFirst && d.adsManager.showBannerTime && d.gameManager.GetNowTime() - d.adsManager.showBannerTime > 3e4 && !d.adsManager.isShow && d.adsManager.ShowBanner() : (d.adsManager.ShowBanner(), this.schedule(function() {
					d.adsManager.ShowBanner()
				}, 30)) : d.adsManager.ShowBanner();
				cc.find("Canvas/pushNode").active && d.isSupportPush && (d.pushCtl = cc.find("Canvas/pushNode").getComponent("PushNodeCtl"), "oppo" == d.channel && d.pushCtl.CreateDrawerPush(0)), d.isHasAd || (this.dailyRewardPannel.getChildByName("BG").getChildByName("doubleBtn").active = !1, this.dailyRewardPannel.getChildByName("BG").getChildByName("rewardBtn").y = -380, this.speedupPannel.getChildByName("BG").getChildByName("buyByADBtn").active = !1, this.speedupPannel.getChildByName("BG").getChildByName("buyByDiamondBtn").x = 0, this.newCatPanel.getChildByName("BG").getChildByName("freeDiamondBtn").active = !1, this.newCatPanel.getChildByName("BG").getChildByName("freeDiamondBtn").active = !1, cc.find("Canvas/levelupPannel/BG/kuang/btns/doubleBtn").active = !1, cc.find("Canvas/UI/Top/freeIncomeBtn").active = !1, cc.find("Canvas/levelupPannel/BG/kuang/btns/freeCoinBtn").y = -80)
			},
			UpdateRecordBtn: function() {
				d.recorderFlag ? this.record.spriteFrame = this.recording : this.record.spriteFrame = this.recordStop
			},
			RecordFail: function() {
				d.curScene.generalRemind.active = !0, d.curScene.generalRemind.getComponent("GeneralRemind").InitPanel(1), d.ShowPanelHandle()
			},
			BtnRecorderClick: function() {
				d.audioManager && d.audioManager.PlayClickSound(), d.RecordHandle(this.StatisticsRecord, this.RecordFail)
			},
			StatisticsRecord: function(e) {
				cc.sys.platform != cc.sys.DESKTOP_BROWSER && d.channel
			},
			initGuide: function() {
				var e = configCat.getPlayerInfo("guideNum");
				0 == e || 1 == e ? configCat.guide.ClickGuide(this.addCatSprite.node.parent) : 2 == e ? configCat.guide.DragGuide(this.matScripts[1].node, this.matScripts[0].node) : this.guideNode.active = !1
			},
			initCatImg: function() {
				this.catImg = configCat.catImg, cc.loader.loadRes("cat", function(e, t) {
					e ? console.log("\u521d\u59cb\u5316\u732bJson\u5931\u8d25", e) : (this.catInfo = t.json, this.initMatsAndCats(), this.setAddCatBtn(), this.freeReward(), this.CheckOffLine(), this.checkSpeedup(), this.initShop(), this.initGuide(), this.isInitFinshed = !0, this.loading.active = !1)
				}.bind(this))
			},
			initShop: function() {
				for (var e = 0; e < 50; e++) {
					cc.instantiate(this.catItemPrefab).parent = this.shopCatScroll.content
				}
				var t = 1 - parseInt((configCat.getPlayerInfo("maxCatLevel") - 7) / 3) / parseInt(50 / 3);
				this.shopCatScroll.scrollToPercentVertical(t, .1);
				for (var n = 0; n < 17; n++) {
					cc.instantiate(this.privilegeItemPrefab).parent = this.shopSrivilegeScroll.content
				}
			},
			freeReward: function() {
				this.schedule(function() {
					configCat.getPlayerInfo("guideNum") < 3 || (0 == this.getRandom(0, 3) ? o.airplaneReward() : o.boxCatReward())
				}, 15)
			},
			airplaneReward: function() {
				this.airplane.getComponent("Airplane").init()
			},
			boxCatReward: function() {
				var e = this.getMat();
				if (null != e) {
					var t = this.getRandom(configCat.getPlayerInfo("maxCatLevel") - 9, configCat.getPlayerInfo("maxCatLevel") - 7);
					t < 1 && (t = 1);
					this.newCatBox(t, e);
					this.setCatPosHistory()
				}
			},
			initMatsAndCats: function() {
				this.catPool || (this.catPool = new cc.NodePool(r)), this.matScripts = this.matsParent.getComponentsInChildren(c);
				var e = this.getCatPosHistory();
				if (null != e && void 0 != e && "" != e)
					for (var t = 0; t < this.matScripts.length; t++) this.matScripts[t].init(e[t].index, e[t].isLock, e[t].catLevel);
				else
					for (var n = 0; n < this.matScripts.length; n++) this.matScripts[n].init(n, !0, -1)
			},
			getMat: function() {
				var e, t = i(this.matScripts);
				try {
					for (t.s(); !(e = t.n()).done;) {
						var n = e.value;
						if (!(n.isLock || n.node.getChildByName("catParent").childrenCount > 0 || "" != n.node.getChildByName("levleLabel").getComponent(cc.Label).string)) return n
					}
				} catch (e) {
					t.e(e)
				} finally {
					t.f()
				}
				return null
			},
			isLastMat: function(e) {
				var t, n = 0,
					a = i(this.matScripts);
				try {
					for (a.s(); !(t = a.n()).done;) {
						t.value.node.getChildByName("catParent").childrenCount > 0 && n++
					}
				} catch (e) {
					a.e(e)
				} finally {
					a.f()
				}
				return this.dragItemParent.childrenCount > 0 && n++, n <= 1
			},
			newCat: function(e, t, n) {
				var i = null;
				return this.catPool || (this.catPool = new cc.NodePool(r)), this.catPool.size() > 0 ? i = this.catPool.get(e, t, n) : (i = cc.instantiate(this.catPrefab)).getComponent(r).init(e, t, n), i
			},
			newCatBox: function(e, t) {
				var n = null;
				return this.catBoxPool || (this.catBoxPool = new cc.NodePool(l)), this.catBoxPool.size() > 0 ? n = this.catBoxPool.get(e, t) : (n = cc.instantiate(this.catBoxPrefab)).getComponent(l).init(e, t), n
			},
			creatCat: function(e, t) {
				if (null != e && d.audioManager.PlayClickSound(), 2 != configCat.getPlayerInfo("guideNum")) {
					var n = this.getMat();
					if (null != n) {
						var i = configCat.getPlayerInfo("maxCatLevel") - 3 > 1 ? configCat.getPlayerInfo("maxCatLevel") - 3 : 1;
						if (0 != t && (i = parseInt(t)), this.fishCoin < parseFloat(Math.round(configCat.getCatPrice(i) * (1 - configCat.getPrivilege("discount"))))) this.showPop("Fish not enough");
						else {
							this.fishCoin -= parseFloat(Math.round(configCat.getCatPrice(i) * (1 - configCat.getPrivilege("discount"))));
							var a = Math.round(1.07 * configCat.getCatPrice(i));
							i > 1 && (a = Math.round(1.175 * configCat.getCatPrice(i))), configCat.setCatPrice(i, a), this.setAddCatBtn();
							this.newCat(i, n, !1);
							if (this.setCatPosHistory(), configCat.getPlayerInfo("guideNum") < 3) {
								var s = configCat.getPlayerInfo("guideNum");
								s++, configCat.setPlayerInfo("guideNum", s), this.initGuide()
							}
						}
					} else this.showPop("No grid")
				} else this.showPop("Please complete the guide first")
			},
			setCatPosHistory: function() {
				var e, t = new Array,
					n = i(this.matScripts);
				try {
					for (n.s(); !(e = n.n()).done;) {
						var a = e.value,
							s = -1;
						a.node.getChildByName("catParent").childrenCount > 0 && (s = "cat" == a.node.getChildByName("catParent").children[0].group ? a.node.getChildByName("catParent").children[0].getComponent(r).level : a.node.getChildByName("catParent").children[0].getComponent(l).level);
						var o = {
							index: a.index,
							isLock: a.isLock,
							catLevel: s
						};
						t.push(o)
					}
				} catch (e) {
					n.e(e)
				} finally {
					n.f()
				}
				configCat.setFishCoin(this.fishCoin), cc.sys.localStorage.setItem("CatInfo", JSON.stringify(t)), this.setIncomePerSecond()
			},
			getCatPosHistory: function() {
				var e = cc.sys.localStorage.getItem("CatInfo");
				return null === e || void 0 === e || "" === e ? null : e = JSON.parse(e)
			},
			setPlayLevel: function(e) {
				if (e > configCat.getPlayerInfo("playerLevel") && this.showLevelupPannel(), configCat.setPlayerInfo("playerLevel", e), this.playerLevelLebel.string = e.toString(), this.matScripts) {
					var t, n = i(this.matScripts);
					try {
						for (n.s(); !(t = n.n()).done;) {
							var a = t.value;
							if (a.isLock) {
								a.isLock = !1, this.setCatPosHistory();
								break
							}
						}
					} catch (e) {
						n.e(e)
					} finally {
						n.f()
					}
				}
			},
			setPlayerExp: function(e) {
				this.playerMaxExp = configCat.getPlayerInfo("playerMaxExp"), this.playerExp < this.playerMaxExp ? this.playerExpSprite.fillRange = this.playerExp / this.playerMaxExp : (this.playerExpSprite.fillRange = 0, this.playerExp = 0, this.playerLevel++, this.playerMaxExp = 5 * Math.pow(1.25, parseInt(this.playerLevel) - 1)), configCat.setPlayerInfo("playerExp", this.playerExp), configCat.setPlayerInfo("playerMaxExp", this.playerMaxExp)
			},
			setDiamonds: function(e) {
				configCat.setPlayerInfo("diamonds", e), this.diamondLebel.string = e.toString()
			},
			setFishCoin: function(e) {
				this.fishCoinLebel.string = configCat.NumberSimplified(e.toString())
			},
			setAddCatBtn: function() {
				var e = configCat.getPlayerInfo("maxCatLevel") - 3 > 1 ? configCat.getPlayerInfo("maxCatLevel") - 3 : 1;
				this.addCatSprite.spriteFrame = this.catImg[e - 1], this.addCatLabel.string = configCat.NumberSimplified(parseFloat(Math.round(configCat.getCatPrice(e) * (1 - configCat.getPrivilege("discount")))))
			},
			showShopPanel: function() {
				d.audioManager.PlayClickSound(), this.isInitFinshed && (configCat.getPlayerInfo("guideNum") < 3 ? this.showPop("Please complete the guide first") : configCat.getPlayerInfo("maxCatLevel") < 6 ? this.showPop("Synthetic lv6 cat on") : (d.ShowPanelHandle("shop"), this.shopPanel.active = !0, this.onShopBtnEvent(null, 0)))
			},
			hideShopPanel: function(e, t) {
				null != e && d.audioManager.PlayClickSound(), d.HidePanelHandle(), this.shopPanel.active = !1
			},
			showFreeCoinPanel: function(e, t) {
				if (null != e && d.audioManager.PlayClickSound(), configCat.getPlayerInfo("guideNum") < 3) this.showPop("Please complete the guide first");
				else {
					if (d.ShowPanelHandle(), 1 == (t = parseInt(t))) {
						this.freeCoinPanel.getChildByName("BG").getChildByName("title").getComponent(cc.Label).string = "Time-limited rewards", this.freeCoinPanel.getChildByName("BG").getChildByName("btn1").active = !0, this.freeCoinPanel.getChildByName("BG").getChildByName("btn2").active = !1, d.isHasAd || (this.freeCoinPanel.getChildByName("BG").getChildByName("btn1").getChildByName("doubleBtn").active = !1);
						var n = .01 * this.getRandom(5, 25);
						this.freeCoinReward = parseFloat(Math.round(configCat.getCatPrice(configCat.getPlayerInfo("maxCatLevel")) * n * configCat.getPrivilege("income"))), this.freeCoinReward = Math.round(this.freeCoinReward), this.freeCoinPanel.getChildByName("BG").getChildByName("coin").getChildByName("coinLabel").getComponent(cc.Label).string = configCat.NumberSimplified(this.freeCoinReward.toString())
					} else if (2 == t) {
						this.freeCoinPanel.getChildByName("BG").getChildByName("title").getComponent(cc.Label).string = "Free fish", this.freeCoinPanel.getChildByName("BG").getChildByName("btn1").active = !1, this.freeCoinPanel.getChildByName("BG").getChildByName("btn2").active = !0, this.freeCoinReward = 0;
						var a = this.getCatPosHistory();
						if (null != a && void 0 != a && "" != a) {
							var s, o = i(a);
							try {
								for (o.s(); !(s = o.n()).done;) {
									var c = s.value,
										r = parseInt(c.catLevel);
									r < 1 || (this.freeCoinReward += r >= 20 ? parseFloat(Math.round(12.5 * Math.pow(2, r) * 1800 * configCat.getPrivilege("income"))) : parseFloat(Math.round(12.5 * Math.pow(2, r) / (6 - .25 * r) * 1800 * configCat.getPrivilege("income"))))
								}
							} catch (e) {
								o.e(e)
							} finally {
								o.f()
							}
						}
						this.freeCoinPanel.getChildByName("BG").getChildByName("coin").getChildByName("coinLabel").getComponent(cc.Label).string = configCat.NumberSimplified(this.freeCoinReward.toString())
					} else 3 == t && (this.freeCoinPanel.getChildByName("BG").getChildByName("title").getComponent(cc.Label).string = "Offline Rewards", this.freeCoinPanel.getChildByName("BG").getChildByName("btn1").active = !0, this.freeCoinPanel.getChildByName("BG").getChildByName("btn2").active = !1, d.isHasAd || (this.freeCoinPanel.getChildByName("BG").getChildByName("btn1").getChildByName("doubleBtn").active = !1), this.isOffLinePannelShow = !0, this.freeCoinPanel.getChildByName("BG").getChildByName("coin").getChildByName("coinLabel").getComponent(cc.Label).string = configCat.NumberSimplified(this.freeCoinReward.toString()));
					this.freeCoinPanel.active = !0
				}
			},
			hideFreeCoinPanel: function(e, t) {
				null != e && d.audioManager.PlayClickSound(), d.HidePanelHandle(), this.isOffLinePannelShow = !1, this.freeCoinPanel.active = !1
			},
			getFreeCoin: function(e, t) {
				d.audioManager.PlayClickSound(), 0 == (t = parseInt(t)) ? (this.fishCoin += this.freeCoinReward, this.freeCoinReward > 0 && this.showPop("Get " + configCat.NumberSimplified(this.freeCoinReward) + " fish"), this.hideFreeCoinPanel()) : 1 == t ? (cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == d.channel && g.Event.stat("ttCat_freecoinrewardclick", {}), configCat.videoType = 1, d.isHasAd && d.adsManager.ShowVideo(1)) : 2 == t && (cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == d.channel && ("Offline Rewards" == this.freeCoinPanel.getChildByName("BG").getChildByName("title").getComponent(cc.Label).string ? g.Event.stat("ttCat_offlinerewardclick", {}) : g.Event.stat("ttCat_airplanerewardclick", {})), configCat.videoType = 2, d.isHasAd && d.adsManager.ShowVideo(1)), configCat.setFishCoin(this.fishCoin)
			},
			getRandom: function(e, t) {
				return Math.round(Math.random() * (t + 1 - e)) + e
			},
			getRewardByVideo: function() {
				1 == configCat.videoType ? (this.fishCoin += this.freeCoinReward, this.freeCoinReward > 0 && this.showPop("Get " + configCat.NumberSimplified(this.freeCoinReward) + " fish"), this.hideFreeCoinPanel()) : 2 == configCat.videoType ? (this.fishCoin += 2 * this.freeCoinReward, this.freeCoinReward > 0 && this.showPop("Get " + configCat.NumberSimplified(2 * this.freeCoinReward) + " fish"), this.hideFreeCoinPanel()) : 3 == configCat.videoType ? (this.hideNewCatPanel(), this.showPop("Get 13 diamonds"), this.diamonds += 13) : 4 == configCat.videoType ? this.addSpeedupTime() : 5 == configCat.videoType ? this.getDailyReward(2) : 6 == configCat.videoType && (this.fishCoin += 2 * this.freeCoinReward, this.freeCoinReward > 0 && this.showPop("Get " + configCat.NumberSimplified(2 * this.freeCoinReward) + " fish"), d.HidePanelHandle(), this.levelupPannel.active = !1)
			},
			showPop: function(e) {
				this.popPool || (this.popPool = new cc.NodePool(h)), this.popPool.size() > 0 ? this.popPool.get(this.popParent, e) : cc.instantiate(this.popPrefab).getComponent(h).init(this.popParent, e)
			},
			CheckOffLine: function() {
				var e = configCat.getPlayerInfo("offLineTime"),
					t = new Date(e),
					n = new Date,
					a = parseInt((n.getTime() - t.getTime()) / 6e4);
				if (this.freeCoinReward = 0, a > 0) {
					this.freeCoinReward = 0;
					var s = this.getCatPosHistory(),
						o = parseFloat((n.getTime() - t.getTime()) / 1e3) > 14400 ? 14400 : parseFloat((n.getTime() - t.getTime()) / 1e3);
					if (null != s && void 0 != s && "" != s) {
						var c, r = i(s);
						try {
							for (r.s(); !(c = r.n()).done;) {
								var l = c.value,
									h = parseInt(l.catLevel);
								h < 1 || (this.freeCoinReward += h >= 20 ? parseFloat(Math.round(12.5 * Math.pow(2, h) * .1 * o * configCat.getPrivilege("income"))) : parseFloat(Math.round(12.5 * Math.pow(2, h) / (6 - .25 * h) * .1 * o * configCat.getPrivilege("income"))))
							}
						} catch (e) {
							r.e(e)
						} finally {
							r.f()
						}
						configCat.setPlayerInfo("offLineTime", (new Date).getTime()), this.showFreeCoinPanel(null, 3)
					}
				}
			},
			showNewCatPanel: function(e) {
				d.ShowPanelHandle("newcat"), this.newCatPanel.getChildByName("BG").getChildByName("cat").position = configCat.getCatPos4(e), this.newCatPanel.getChildByName("BG").getChildByName("cat").getComponent(cc.Sprite).spriteFrame = this.catImg[e - 1], this.newCatPanel.getChildByName("BG").getChildByName("label").getComponent(cc.Label).string = "lv." + e + "  " + this.catInfo[e - 1].name, this.newCatPanel.active = !0
			},
			newCatPanelBtn: function(e, t) {
				d.audioManager.PlayClickSound(), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == d.channel && g.Event.stat("ttCat_newcatrewardclick", {}), configCat.videoType = 3, d.isHasAd && d.adsManager.ShowVideo(1)
			},
			hideNewCatPanel: function(e, t) {
				null != e && d.audioManager.PlayClickSound(), d.HidePanelHandle(), this.newCatPanel.active = !1
			},
			showSpeedupPannel: function() {
				d.audioManager.PlayClickSound(), configCat.getPlayerInfo("guideNum") < 3 ? this.showPop("Please complete the guide first") : (d.ShowPanelHandle(), this.speedupPannel.active = !0)
			},
			hideSpeedupPannel: function(e, t) {
				null != e && d.audioManager.PlayClickSound(), d.HidePanelHandle(), this.speedupPannel.active = !1
			},
			addSpeedupBtn: function(e, t) {
				d.audioManager.PlayClickSound(), this.speedupTime + 15e4 >= 12e5 ? this.showPop("The duration is about to exceed the upper limit and cannot be accelerated") : 1 == (t = parseInt(t)) ? this.diamonds >= 25 ? (this.diamonds -= 25, this.addSpeedupTime()) : this.showPop("Diamonds not enough") : (cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == d.channel && g.Event.stat("ttCat_speedupclick", {}), configCat.videoType = 4, d.isHasAd && d.adsManager.ShowVideo(1))
			},
			addSpeedupTime: function() {
				cc.instantiate(this.speedupAirplanePrefab).parent = this.popParent, this.speedupLabel.string = "Accelerate 200%", this.speedupTime += 15e4, configCat.setPlayerInfo("speedupTime", this.speedupTime), this.isInSpeedUp = !0, configCat.coinMultiple = 2, this.setIncomePerSecond()
			},
			checkSpeedup: function() {
				this.speedupTime = configCat.getPlayerInfo("speedupTime"), this.speedupTime > 0 ? (this.isInSpeedUp = !0, this.speedupLabel.string = "Accelerate 200%", this.speedupValueSprite.fillRange = this.speedupTime / 12e5, configCat.coinMultiple = 2, this.setIncomePerSecond()) : (this.speedupTime = 0, configCat.coinMultiple = 1, this.speedupLabel.string = "Accelerate 100%", this.speedupValueSprite.fillRange = 0, this.setIncomePerSecond())
			},
			updateProgress: function(e) {
				this.progressValueSprite.fillRange = e / 100;
				var t = this.progressValueSprite.node.parent;
				t.getChildByName("star").x = e / 100 * 460 - 230;
				var n = parseInt(e / 25);
				n > 3 && (n = 3), t.parent.getChildByName("person").getComponent(cc.Sprite).spriteFrame = this.loadingImgs[n]
			},
			update: function(e) {
				if (this.loading.active && this.progressValue < 95 && (this.progressValue += 2), this.isInSpeedUp) {
					if (this.speedupTime <= 0) this.speedupPannel.getChildByName("BG").getChildByName("timeLabel").getComponent(cc.Label).string = "00:00", this.speedupTime = 0, this.speedupValueSprite.fillRange = 0, this.speedupLabel.string = "Accelerate 100%", configCat.coinMultiple = 1, this.isInSpeedUp = !1, configCat.setPlayerInfo("speedupTime", this.speedupTime), this.setIncomePerSecond();
					else {
						configCat.coinMultiple = 2;
						var t = new Date(this.speedupTime);
						this.speedupPannel.active && (this.speedupPannel.getChildByName("BG").getChildByName("timeLabel").getComponent(cc.Label).string = this.add0(t.getMinutes()) + ":" + this.add0(t.getSeconds()), this.speedupValueSprite.fillRange = this.speedupTime / 12e5)
					}
					this.speedupTime -= 1e3 * e
				}
			},
			add0: function(e) {
				return e < 10 ? "0" + e : e
			},
			checkDailyReward: function() {
				var e = this.dailyRewardPannel.getChildByName("BG").getChildByName("btns").children,
					t = configCat.getPlayerInfo("RewardTime"),
					n = new Date(t),
					i = new Date;
				if (this.rewardIndex = configCat.getPlayerInfo("RewardIndex"), i.getTime() >= n.getTime()) {
					this.dailyRewardNode.getComponent(cc.Animation).play(), i.getTime() - n.getTime() > 864e5 && (this.rewardIndex = -1, configCat.setPlayerInfo("RewardIndex", -1)), this.rewardIndex++;
					for (var a = 0; a < 7; a++) a < this.rewardIndex ? (e[a].getChildByName("today").active = !1, e[a].getChildByName("get").active = !0) : a == this.rewardIndex ? (e[a].getChildByName("today").active = !0, e[a].getChildByName("get").active = !1) : (e[a].getChildByName("today").active = !1, e[a].getChildByName("get").active = !1)
				} else {
					this.dailyRewardNode.getComponent(cc.Animation).stop();
					for (var s = 0; s < 7; s++) s <= this.rewardIndex ? (e[s].getChildByName("today").active = !1, e[s].getChildByName("get").active = !0) : (e[s].getChildByName("today").active = !1, e[s].getChildByName("get").active = !1)
				}
			},
			showDailyRewardPannel: function() {
				d.audioManager.PlayClickSound(), configCat.getPlayerInfo("guideNum") < 3 ? this.showPop("Please complete the guide first") : (d.ShowPanelHandle("dailyRewardPannel"), this.dailyRewardPannel.active = !0)
			},
			onDailyRewardBtnEvent: function(e, t) {
				d.audioManager.PlayClickSound(), t = parseInt(t), this.rewardIndex <= configCat.getPlayerInfo("RewardIndex") ? this.showPop("No reward yet") : 0 == t ? this.getDailyReward(1) : (cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == d.channel && g.Event.stat("ttCat_DailyRewardclick", {}), configCat.videoType = 5, d.isHasAd && d.adsManager.ShowVideo(1))
			},
			getDailyReward: function(e) {
				var t = 0;
				0 == this.rewardIndex ? t = 50 : 1 == this.rewardIndex ? t = 60 : 2 == this.rewardIndex ? t = 70 : 3 == this.rewardIndex ? t = 80 : 4 == this.rewardIndex ? t = 90 : 5 == this.rewardIndex ? t = 100 : 6 == this.rewardIndex && (t = 200), this.diamonds += t * e, this.showPop("Get " + t * e + " diamonds");
				for (var n = this.dailyRewardPannel.getChildByName("BG").getChildByName("btns").children, i = 0; i < 7; i++) i <= this.rewardIndex ? (n[i].getChildByName("today").active = !1, n[i].getChildByName("get").active = !0) : (n[i].getChildByName("today").active = !1, n[i].getChildByName("get").active = !1);
				this.rewardIndex >= 6 && (this.rewardIndex = -1), configCat.setPlayerInfo("RewardIndex", this.rewardIndex);
				var a = (new Date).getTime() + 864e5 - 1e3 * (60 * (new Date).getHours() * 60 + 60 * (new Date).getMinutes() + (new Date).getSeconds());
				configCat.setPlayerInfo("RewardTime", a), this.dailyRewardNode.getComponent(cc.Animation).stop(), this.dailyRewardNode.angle = 0
			},
			hideDailyRewardPannel: function(e, t) {
				null != e && d.audioManager.PlayClickSound(), d.HidePanelHandle(), this.dailyRewardPannel.active = !1
			},
			onShopBtnEvent: function(e, t) {
				null != e && d.audioManager.PlayClickSound(), 0 == (t = parseInt(t)) ? (this.shopCatScrollBtnSprite.spriteFrame = this.shopBtnOnSprite, this.shopSrivilegeScrollBtnSprite.spriteFrame = this.shopBtnOffSprite, this.shopCatScrollBtnSprite.node.children[0].active = !0, this.shopCatScrollBtnSprite.node.children[1].active = !1, this.shopSrivilegeScrollBtnSprite.node.children[0].active = !1, this.shopSrivilegeScrollBtnSprite.node.children[1].active = !0, this.shopCatScroll.node.active = !0, this.shopSrivilegeScroll.node.active = !1) : (this.shopCatScrollBtnSprite.spriteFrame = this.shopBtnOffSprite, this.shopSrivilegeScrollBtnSprite.spriteFrame = this.shopBtnOnSprite, this.shopSrivilegeScrollBtnSprite.node.children[0].active = !0, this.shopSrivilegeScrollBtnSprite.node.children[1].active = !1, this.shopCatScrollBtnSprite.node.children[0].active = !1, this.shopCatScrollBtnSprite.node.children[1].active = !0, this.shopCatScroll.node.active = !1, this.shopSrivilegeScroll.node.active = !0, this.UpdateShopSrivilegeScroll())
			},
			showLevelupPannel: function() {
				d.ShowPanelHandle("newcat"), this.levelupPannel.getChildByName("BG").getChildByName("kuang").getChildByName("levelLabel").getComponent(cc.Label).string = this.playerLevel;
				var e = 0;
				this.playerLevel < 10 ? (this.levelupPannel.getChildByName("BG").getChildByName("kuang").getChildByName("btns").active = !1, this.levelupPannel.getChildByName("BG").getChildByName("kuang").getChildByName("bottom").getChildByName("mat").active = !0, this.levelupPannel.getChildByName("BG").getChildByName("kuang").getChildByName("bottom").getChildByName("fishCoin").active = !1, e = 0) : (e = parseFloat(Math.round(configCat.getCatPrice(configCat.getPlayerInfo("maxCatLevel") - 3))), this.levelupPannel.getChildByName("BG").getChildByName("kuang").getChildByName("btns").active = !0, this.levelupPannel.getChildByName("BG").getChildByName("kuang").getChildByName("bottom").getChildByName("fishCoin").active = !0, this.levelupPannel.getChildByName("BG").getChildByName("kuang").getChildByName("bottom").getChildByName("mat").active = !1), this.freeCoinReward = e, this.levelupPannel.getChildByName("BG").getChildByName("kuang").getChildByName("bottom").getChildByName("fishCoin").getChildByName("label").getComponent(cc.Label).string = "+" + configCat.NumberSimplified(e.toString()), this.levelupPannel.active = !0
			},
			hideLevelupPannel: function(e, t) {
				null != e && d.audioManager.PlayClickSound(), d.HidePanelHandle(), this.fishCoin += this.freeCoinReward, this.freeCoinReward > 0 && this.showPop("Get " + this.freeCoinReward + " fish"), this.levelupPannel.active = !1
			},
			getLevelupReward: function(e, t) {
				d.audioManager.PlayClickSound(), 0 == (t = parseInt(t)) ? (this.fishCoin += this.freeCoinReward, this.freeCoinReward > 0 && this.showPop("Get " + this.freeCoinReward + " fish")) : 2 == t && (cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == d.channel && g.Event.stat("ttCat_levelupRewardclick", {}), configCat.videoType = 6, d.isHasAd && d.adsManager.ShowVideo(1)), configCat.setFishCoin(this.fishCoin), d.HidePanelHandle(), this.levelupPannel.active = !1
			},
			UpdateShopSrivilegeScroll: function() {
				var e, t = i(this.shopSrivilegeScroll.content.getComponentsInChildren("ShopPrivilegeItem"));
				try {
					for (t.s(); !(e = t.n()).done;) {
						e.value.init()
					}
				} catch (e) {
					t.e(e)
				} finally {
					t.f()
				}
			},
			setIncomePerSecond: function() {
				var e, t = 0,
					n = i(this.matScripts);
				try {
					for (n.s(); !(e = n.n()).done;) {
						var a = e.value,
							s = -1;
						a.node.getChildByName("catParent").childrenCount > 0 && (s = "cat" == a.node.getChildByName("catParent").children[0].group ? a.node.getChildByName("catParent").children[0].getComponent(r).level : a.node.getChildByName("catParent").children[0].getComponent(l).level), s < 1 || (t += s >= 20 ? parseFloat(Math.round(12.5 * Math.pow(2, s) * configCat.coinMultiple * configCat.getPrivilege("income"))) : parseFloat(Math.round(12.5 * Math.pow(2, s) / (6 - .25 * s) * configCat.coinMultiple * configCat.getPrivilege("income"))))
					}
				} catch (e) {
					n.e(e)
				} finally {
					n.f()
				}
				this.incomePerSecondLabel.string = configCat.NumberSimplified(t) + "/s"
			},
			onBackBtnEvent: function() {
				d.audioManager.PlayClickSound(), this.progressValue = 0, this.loading.active = !0, cc.sys.platform != cc.sys.DESKTOP_BROWSER && ("tt" == d.channel ? g.Event.stat("ttcatback", {}) : "qq" == d.channel ? g.Event.stat("qqcatback", {}) : "wx" == d.channel && g.Event.stat("wxcatback", {})), cc.director.loadScene("MainMenu")
			}
		}), cc._RF.pop()
	}, {
		Cat: "Cat",
		CatBox: "CatBox",
		GameManager: "GameManager",
		Mat: "Mat",
		PopCat: "PopCat",
		mta_analysis: "mta_analysis"
	}],
	GameManager: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "242b0NbkoxBJpgrX6g1hr4s", "GameManager"), t.exports = {
			packName: "com/melestudio/Lovelygirlgames/nearme/gamecenter/AppActivity",
			trackEvent: function(e) {
				cc.sys.isNative && "ios" == this.channel && (cc.sys.OS_IOS, cc.sys.os)
			},
			fakeUnlockName: [],
			systemInfo: null,
			GetSystemInfo: function() {
				if (cc.sys.platform == cc.sys.DESKTOP_BROWSER) return null;
				if (!this.systemInfo) {
					var e = null;
					"wx" == this.channel ? e = wx.getSystemInfoSync() : "tt" == this.channel ? e = tt.getSystemInfoSync() : "qq" == this.channel ? e = qq.getSystemInfoSync() : "swan" == this.channel ? e = swan.getSystemInfoSync() : "oppo" == this.channel ? e = qg.getSystemInfoSync() : "vivo" == this.channel && (e = qg.getSystemInfoSync()), this.systemInfo = e, console.log(this.systemInfo)
				}
			},
			GetIsPhone: function() {
				var e = !1;
				return null == this.systemInfo && this.GetSystemInfo(), "ios" == this.systemInfo.platform.toLowerCase() && (e = !0), e
			},
			isNormalShot: !0,
			IsNormalShot: function() {
				null == this.systemInfo && this.GetSystemInfo(), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "qq" == this.channel && 0 == this.GetIsPhone() && -1 === this.compareVersion(this.systemInfo.SDKVersion, "1.16.0") && (this.isNormalShot = !1)
			},
			networkType: void 0,
			IsHasNetwork: function() {
				if (cc.sys.platform != cc.sys.DESKTOP_BROWSER) {
					var e = this;
					"wx" == this.channel ? wx.getNetworkType({
						success: function(t) {
							e.networkType = t.networkType, console.log("\u7f51\u7edc\u7c7b\u578b\uff1a" + e.networkType)
						}
					}) : "tt" == this.channel ? tt.getNetworkType({
						success: function(t) {
							e.networkType = t.networkType, console.log("\u7f51\u7edc\u7c7b\u578b\uff1a" + e.networkType)
						},
						fail: function(e) {
							console.log("getNetworkType\u8c03\u7528\u5931\u8d25")
						}
					}) : "qq" == this.channel ? qq.getNetworkType({
						success: function(t) {
							e.networkType = t.networkType
						}
					}) : "swan" == this.channel ? swan.getNetworkType({
						success: function(t) {
							t.networkType, e.networkType = t.networkType
						},
						fail: function(e) {
							swan.showToast({
								title: "\u83b7\u53d6\u7f51\u7edc\u72b6\u6001\u5931\u8d25"
							})
						}
					}) : "oppo" == this.channel ? qg.getNetworkType({
						success: function(t) {
							e.networkType = t.networkType
						},
						fail: function(e) {
							console.log(e.errMsg)
						},
						complete: function(e) {}
					}) : "vivo" == this.channel && qg.getNetworkType({
						success: function(t) {
							console.log("handling success: ".concat(t.type)), e.networkType = t.type
						}
					})
				}
			},
			OnNetworkChange: function() {
				if (cc.sys.platform != cc.sys.DESKTOP_BROWSER) {
					var e = this;
					"wx" == this.channel ? wx.onNetworkStatusChange(function(t) {
						console.log(t.isConnected), console.log("\u7f51\u7edc\u7c7b\u578b\uff1a" + t.networkType), e.networkType = t.networkType
					}) : "tt" == this.channel ? tt.onNetworkStatusChange(function(t) {
						console.log("\u7f51\u7edc\u7c7b\u578b\uff1a" + t.networkType), e.networkType = t.networkType
					}) : "qq" == this.channel ? qq.onNetworkStatusChange(function(t) {
						console.log(t.isConnected), e.networkType = t.networkType
					}) : "swan" == this.channel ? swan.onNetworkStatusChange(function(t) {
						e.networkType = t.networkType
					}) : "oppo" == this.channel ? qg.onNetworkStatusChange(function(t) {
						console.log(t.isConnected, t.netWorkType), e.networkType = t.networkType
					}) : "vivo" == this.channel && qg.subscribeNetworkStatus({
						callback: function(t) {
							console.log("handling callback\uff0c type=", t.type), e.networkType = t.type
						}
					})
				}
			},
			audioOn: !0,
			musicOn: !0,
			bgMusicChannel: void 0,
			audioManager: null,
			audioControl: null,
			musicPath: "res/raw-assets/b9/b9066431-bbc7-4c2e-bb90-655830a1d55b.mp3",
			bgMusic: null,
			audioClips: null,
			GetMusicFlag: function() {
				return cc.sys.localStorage.getItem("MusicFlag")
			},
			SetMusicFlag: function(e) {
				cc.sys.localStorage.setItem("MusicFlag", e)
			},
			GetAudioFlag: function() {
				return cc.sys.localStorage.getItem("AudioFlag")
			},
			SetAudioFlag: function(e) {
				cc.sys.localStorage.setItem("AudioFlag", e)
			},
			GetVibrationLockFlag: function() {
				return cc.sys.localStorage.getItem("Vibration")
			},
			SetVibrationFlag: function(e) {
				cc.sys.localStorage.setItem("Vibration", e)
			},
			PlayMusic: function() {
				null != this.bgMusic && (cc.sys.platform != cc.sys.DESKTOP_BROWSER && "qq" == this.channel && 1 == this.GetIsPhone() ? (null == this.audioControl && (this.audioControl = qq.createInnerAudioContext(), this.audioControl.src = this.musicPath, this.audioControl.loop = !0), this.audioControl && this.audioControl.play()) : void 0 == this.bgMusicChannel ? this.bgMusicChannel = cc.audioEngine.play(this.bgMusic, !0, .3) : cc.audioEngine.getState(this.bgMusicChannel) == cc.audioEngine.AudioState.PAUSED && cc.audioEngine.resume(this.bgMusicChannel))
			},
			StopMusic: function() {
				cc.sys.platform != cc.sys.DESKTOP_BROWSER && "qq" == this.channel && 1 == this.GetIsPhone() ? this.audioControl && this.audioControl.pause() : void 0 !== this.bgMusicChannel && cc.audioEngine.pause(this.bgMusicChannel)
			},
			channel: "apk",
			isActivityTime: !1,
			isFromActivityBtn: !1,
			isLoadSubpackage1: !1,
			isLoadSubpackage2: !1,
			isLoadSubpackage3: !1,
			LoadSubPackage: function(e, t) {
				if (!(0 == e && this.isLoadSubpackage1 || 1 == e && this.isLoadSubpackage2 || 2 == e && this.isLoadSubpackage3))
					if (cc.sys.platform === cc.sys.DESKTOP_BROWSER || "wx" != this.channel && "qq" != this.channel && "swan" != this.channel && "vivo" != this.channel && "oppo" != this.channel) this.isLoadSubpackage1 = !0, this.isLoadSubpackage2 = !0, this.isLoadSubpackage3 = !0;
					else {
						var n = this;
						if ("wx" == this.channel) wx.loadSubpackage({
							name: t,
							success: function(i) {
								0 == e ? n.isLoadSubpackage1 = !0 : 1 == e ? n.isLoadSubpackage2 = !0 : 2 == e && (n.isLoadSubpackage3 = !0), console.log("load " + t + " subpackage successfully.")
							},
							fail: function(e) {
								console.log("load " + t + " subpackage fail."), console.log(e)
							}
						});
						else if ("qq" == this.channel) qq.loadSubpackage({
							name: t,
							success: function(i) {
								0 == e ? n.isLoadSubpackage1 = !0 : 1 == e ? n.isLoadSubpackage2 = !0 : 2 == e && (n.isLoadSubpackage3 = !0), console.log("load " + t + " subpackage successfully.")
							},
							fail: function(e) {
								console.log("load " + t + " subpackage fail."), console.log(e)
							}
						});
						else if ("swan" == this.channel) swan.loadSubpackage({
							name: t,
							success: function(i) {
								console.log("load " + t + " subpackage successfully."), 0 == e ? n.isLoadSubpackage1 = !0 : 1 == e ? n.isLoadSubpackage2 = !0 : 2 == e && (n.isLoadSubpackage3 = !0)
							},
							fail: function(e) {
								console.log("load " + t + " subpackage fail."), console.log(e)
							}
						});
						else if ("vivo" == this.channel) {
							qg.getSystemInfoSync().platformVersionCode >= 1052 ? qg.loadSubpackage({
								name: t,
								success: function(i) {
									0 == e ? n.isLoadSubpackage1 = !0 : 1 == e ? n.isLoadSubpackage2 = !0 : 2 == e && (n.isLoadSubpackage3 = !0), console.log("load " + t + " subpackage successfully.")
								},
								fail: function(e) {
									console.log("load " + t + " subpackage fail."), console.log(e)
								}
							}) : (this.isLoadSubpackage1 = !0, this.isLoadSubpackage2 = !0, this.isLoadSubpackage3 = !0)
						} else "oppo" == this.channel && qg.loadSubpackage({
							name: t,
							success: function() {
								0 == e ? n.isLoadSubpackage1 = !0 : 1 == e ? n.isLoadSubpackage2 = !0 : 2 == e && (n.isLoadSubpackage3 = !0), console.log("load " + t + " subpackage successfully.")
							},
							fail: function(e) {
								console.log("load " + t + " subpackage fail."), console.log(e)
							}
						})
					}
			},
			CheckSubpackageStatus: function(e) {
				return !!(0 == e && this.isLoadSubpackage1 || 1 == e && this.isLoadSubpackage2 || 2 == e && this.isLoadSubpackage3)
			},
			IsCanSupportFunc: function(e) {
				if (cc.sys.platform == cc.sys.DESKTOP_BROWSER) return !1;
				if (cc.sys.isNative && ("ios" == this.channel || "apk" == this.channel)) return !1;
				var t = "",
					n = "",
					i = !1;
				if (null == this.systemInfo && this.GetSystemInfo(), 3 == e) return "oppo" == this.channel || "vivo" == this.channel && this.systemInfo.platformVersionCode >= 1053;
				if ("wx" == this.channel)
					if (t = this.systemInfo.SDKVersion, 0 == e) n = "2.0.4";
					else if (1 == e) n = "2.6.0";
				else if (2 == e) n = "2.0.4";
				else {
					if (10 == e) return !1;
					if (11 == e) n = "2.2.0";
					else {
						if (12 == e) return !1;
						if (13 == e) n = "2.8.3";
						else if (14 == e) n = "2.8.0";
						else if (15 == e) n = "2.9.2";
						else {
							if (16 == e) return !1;
							if (17 == e) return !1;
							if (18 == e) return !1;
							if (20 == e) return !1
						}
					}
				} else if ("tt" == this.channel) {
					if (0 == e) return !0;
					if (1 == e) {
						if (t = this.systemInfo.version, n = "7.6.6", "Toutiao" != this.systemInfo.appName || this.GetIsPhone()) return !1
					} else if (2 == e) t = this.systemInfo.SDKVersion, n = "1.3.0";
					else if (10 == e) t = this.systemInfo.SDKVersion, n = "1.23.0";
					else {
						if (11 == e) return !1;
						if (12 == e) return !1;
						if (13 == e) return !1;
						if (15 == e) return !1;
						if (16 == e) {
							if (t = this.systemInfo.version, "Toutiao" != this.systemInfo.appName && "Douyin" != this.systemInfo.appName) return !1;
							"Toutiao" == this.systemInfo.appName ? n = "7.6.9" : "Douyin" == this.systemInfo.appName && (n = "10.7.0")
						} else {
							if (17 == e) return !1;
							if (18 == e) return !1;
							20 == e && (t = this.systemInfo.SDKVersion, n = "1.41.0")
						}
					}
				} else if ("qq" == this.channel) {
					if (0 == e) return !0;
					if (1 == e) t = this.systemInfo.SDKVersion, n = "1.12.0";
					else {
						if (2 == e) return !0;
						if (10 == e) return !1;
						if (11 == e) return !1;
						if (12 == e) t = this.systemInfo.SDKVersion, n = "1.7.1";
						else {
							if (13 == e) return !1;
							if (15 == e) t = this.systemInfo.SDKVersion, n = "1.15.0";
							else {
								if (16 == e) return !1;
								if (17 == e) t = this.systemInfo.SDKVersion, n = "1.16.0";
								else if (19 == e) t = this.systemInfo.SDKVersion, n = "1.7.1";
								else if (20 == e) return !1
							}
						}
					}
				} else if ("vivo" == this.channel || "oppo" == this.channel || "mi" == this.channel || "apk" == this.channel) return e < 3;
				return "wx" != this.channel && "qq" != this.channel && "tt" != this.channel && "swan" != this.channel || (-1 === this.compareVersion(t, n) ? (console.log("\u7248\u672c\u592a\u4f4e\u4e0d\u652f\u6301\u8be5\u529f\u80fd"), i = !1) : i = !0), i
			},
			compareVersion: function(e, t) {
				e = e.split("."), t = t.split(".");
				for (var n = Math.max(e.length, t.length); e.length < n;) e.push("0");
				for (; t.length < n;) t.push("0");
				for (var i = 0; i < n; i++) {
					var a = parseInt(e[i]),
						s = parseInt(t[i]);
					if (a > s) return 1;
					if (a < s) return -1
				}
				return 0
			},
			gameIcon: null,
			CreateGameIcon: function(e) {
				0 != this.IsCanSupportFunc(13) && (this.gameIcon && (this.gameIcon.destroy(), this.gameIcon = null), e = parseInt(e) - 40, this.gameIcon = wx.createGameIcon({
					adUnitId: "PBgAAnc3FE9BeOf8",
					count: 4,
					style: [{
						left: 40,
						top: e,
						appNameHidden: !0,
						color: "#000000",
						size: 50,
						borderWidth: 1,
						border: "#FFFFFF"
					}, {
						left: 110,
						top: e,
						appNameHidden: !0,
						color: "#000000",
						size: 50,
						borderWidth: 1,
						border: "#FFFFFF"
					}, {
						left: 180,
						top: e,
						appNameHidden: !0,
						color: "#000000",
						size: 50,
						borderWidth: 1,
						border: "#FFFFFF"
					}, {
						left: 250,
						top: e,
						appNameHidden: !0,
						color: "#000000",
						size: 50,
						borderWidth: 1,
						border: "#FFFFFF"
					}]
				}, {
					left: 0,
					top: 100,
					appNameHidden: !0,
					color: "#000000",
					size: 50,
					borderWidth: 0,
					border: "#000000"
				}), this.gameIcon.onError(function(e) {
					console.log(e)
				}), this.gameIcon.show())
			},
			HideGameIcon: function() {
				this.gameIcon && (this.gameIcon.destroy(), this.gameIcon = null)
			},
			moreBtn: null,
			InitMoreGame: function() {
				if (0 != this.IsCanSupportFunc(10) && 1 != this.GetIsPhone()) {
					var e = this.systemInfo.safeArea.top,
						t = tt.createMoreGamesButton({
							type: "image",
							image: "images/more_games_btn.png",
							actionType: "box",
							style: {
								left: 5,
								top: e,
								width: 62,
								height: 60,
								lineHeight: 40,
								backgroundColor: "#000000",
								textColor: "#ff0000",
								textAlign: "center",
								fontSize: 16,
								borderRadius: 4,
								borderWidth: 0,
								borderColor: "#ffffff"
							},
							appLaunchOptions: [{
								appId: "tt9e5be8e601718daf"
							}, {
								appId: "ttb558c3e52a7257ac"
							}, {
								appId: "tt6c191aa4f3336995"
							}, {
								appId: "ttb207c4ba2d2d7896"
							}, {
								appId: "tta2efd4523dc527b7"
							}, {
								appId: "tt2bf85d45b4d2709e"
							}, {
								appId: "tt6edb1866f1f1e987"
							}, {
								appId: "tt91fbe7460ed164aa"
							}, {
								appId: "tt02df74629df58e70"
							}, {
								appId: "ttc570b3cd5a5a4062"
							}]
						});
					t.hide(), this.moreBtn = t
				} else console.log("ios\u4e0d\u652f\u6301")
			},
			InitMoreGame1: function() {
				if (0 != this.IsCanSupportFunc(10) && 1 != this.GetIsPhone()) {
					var e = cc.winSize.height / (cc.winSize.width / 720 * 1280) * 110;
					this.isHasAd && cc.winSize.height / cc.winSize.width >= 2 && (e = cc.winSize.height / (cc.winSize.width / 720 * 1280) * 140);
					var t = tt.createMoreGamesButton({
						type: "image",
						image: "images/more_games_btn.png",
						actionType: "box",
						style: {
							left: 5,
							top: e,
							width: 62,
							height: 60,
							lineHeight: 40,
							backgroundColor: "#000000",
							textColor: "#ff0000",
							textAlign: "center",
							fontSize: 16,
							borderRadius: 4,
							borderWidth: 0,
							borderColor: "#ffffff"
						},
						appLaunchOptions: [{
							appId: "tt9e5be8e601718daf"
						}, {
							appId: "ttb558c3e52a7257ac"
						}, {
							appId: "tt6c191aa4f3336995"
						}, {
							appId: "ttb207c4ba2d2d7896"
						}, {
							appId: "tta2efd4523dc527b7"
						}, {
							appId: "tt2bf85d45b4d2709e"
						}, {
							appId: "tt6edb1866f1f1e987"
						}, {
							appId: "tt91fbe7460ed164aa"
						}, {
							appId: "tt02df74629df58e70"
						}, {
							appId: "ttc570b3cd5a5a4062"
						}]
					});
					t.show(), this.mainMoreBtn = t
				} else console.log("ios\u4e0d\u652f\u6301")
			},
			ShowMoreGame: function() {
				cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == this.channel && this.moreBtn && this.moreBtn.show()
			},
			HideMoreGame: function() {
				cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == this.channel && this.moreBtn && this.moreBtn.hide()
			},
			InitMoreGameBanner: function() {
				tt.createMoreGamesBanner({
					style: {
						left: 20,
						top: 40,
						width: 150,
						height: 40
					},
					appLaunchOptions: [{
						appId: "tt9e5be8e601718daf"
					}]
				}).show()
			},
			vibration: !0,
			VibrateShort: function() {
				cc.sys.platform != cc.sys.DESKTOP_BROWSER && this.vibration && ("oppo" == this.channel ? qg.vibrateShort({
					success: function(e) {},
					fail: function(e) {},
					complete: function(e) {}
				}) : "wx" == this.channel ? wx.vibrateShort({
					success: function(e) {},
					fail: function(e) {}
				}) : "tt" == this.channel ? tt.vibrateShort({
					success: function(e) {},
					fail: function(e) {}
				}) : "qq" == this.channel ? qq.vibrateShort({
					success: function(e) {},
					fail: function(e) {}
				}) : "swan" == this.channel ? swan.vibrateShort({
					success: function(e) {},
					fail: function(e) {}
				}) : "vivo" == this.channel && qg.vibrateShort())
			},
			shareUrl: "https://fungirl-1254205301.cos.ap-guangzhou.myqcloud.com/cuteShare.png",
			shareTitle: "\u4efb\u610fDIY\u5c11\u5973\u5fc3\u88c5\u626e\uff0c\u6253\u9020\u68a6\u5e7b\u5c0f\u5c4b\uff0c\u88c5\u626e\u4ebf\u4e07\u5c11\u5973\u7684\u5fc3",
			ShareApp: function() {
				if (cc.sys.platform !== cc.sys.DESKTOP_BROWSER) {
					"wx" == this.channel ? wx.shareAppMessage({
						title: this.shareTitle,
						imageUrl: this.shareUrl
					}) : "qq" == this.channel ? qq.shareAppMessage({
						title: this.shareTitle,
						imageUrl: this.shareUrl
					}) : "tt" == this.channel ? tt.shareAppMessage({
						success: function() {},
						fail: function(e) {
							console.log("\u5206\u4eab\u89c6\u9891\u5931\u8d25")
						}
					}) : "swan" == this.channel && swan.shareAppMessage({
						title: this.shareTitle,
						imageUrl: this.shareUrl
					})
				}
			},
			GoToAppStore: function(e) {
				console.log("GoToAppStore"), !cc.sys.isNative || "apk" != this.channel && "ios" != this.channel || (cc.sys.OS_IOS == cc.sys.os ? jsb.reflection.callStaticMethod("AppController", "GoToAppStore", e) : jsb.reflection.callStaticMethod(this.packName, "GoToAppStore", "()V"))
			},
			tmpPath: null,
			imageData: null,
			width: 0,
			height: 0,
			shotImage: null,
			ScreenShot: function(e, t, n) {
				void 0 == n && (n = !1);
				var i = new cc.RenderTexture,
					a = cc.game._renderContext;
				i.initWithSize(Math.floor(cc.winSize.width), Math.floor(cc.winSize.height), a.STENCIL_INDEX8), e.targetTexture = i, e.render();
				var s = i.readPixels(),
					o = document.createElement("canvas"),
					c = o.getContext("2d"),
					r = Math.floor(t.width),
					l = Math.floor(t.height);
				o.width = r, o.height = l;
				for (var h = c.createImageData(r, l), d = Math.floor((cc.winSize.width - 1) / 2) - Math.floor((r - 1) / 2) + Math.floor(t.position.x), g = Math.floor((cc.winSize.height - 1) / 2) - Math.floor((l - 1) / 2) + Math.floor(t.position.y), p = 0; p < l; p++)
					for (var u = 0; u < r; u++) {
						var m = 0;
						m = 0 == this.isNormalShot ? 4 * (p * r + u) : 4 * ((l - 1 - p) * r + u);
						var f = 4 * ((p + g) * Math.floor(cc.winSize.width) + (u + d));
						h.data[m] = s[f], h.data[m + 1] = s[f + 1], h.data[m + 2] = s[f + 2], h.data[m + 3] = n ? Math.round(255 * Math.sqrt(s[f + 3] / 255)) : 255
					}
				if (cc.sys.platform != cc.sys.DESKTOP_BROWSER)
					if ("oppo" == this.channel) {
						this.filePath = qg.saveImageTempSync({
							data: h.data,
							width: o.width,
							height: o.height,
							fileType: "png"
						})
					} else "vivo" == this.channel ? this.curScene.GenerateJpegData(h, o.width, o.height) : "apk" == this.channel && (this._width = r, this._height = l, this.picData = h.data);
				c.putImageData(h, 0, 0);
				var v = new cc.Texture2D;
				return v.initWithElement(o), new cc.SpriteFrame(v)
			},
			SaveImageToPhoto: function(e, t, n) {
				if (cc.sys.platform != cc.sys.DESKTOP_BROWSER) {
					if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os && "ios" == this.channel) return t && t(), void this.curScene.scheduleOnce(function() {
						n && n()
					}, .05);
					if (cc.sys.os != cc.sys.OS_ANDROID || "apk" != this.channel) {
						var i = this,
							a = this.shotImage.getTexture().getHtmlElementObj();
						if ("tt" == this.channel) a.toTempFilePath({
							x: 0,
							y: 0,
							width: a.width,
							height: a.height,
							destWidth: a.width,
							destHeight: a.height,
							success: function(t) {
								i.tmpPath = t.tempFilePath, tt.saveImageToPhotosAlbum({
									filePath: i.tmpPath,
									success: function(t) {
										e()
									},
									fail: function(e) {
										"saveImageToPhotosAlbum:fail cancel" === e.errMsg ? tt.showModal({
											title: "\u4fdd\u5b58\u56fe\u7247\u5931\u8d25",
											content: "\u60a8\u5df2\u53d6\u6d88\u4fdd\u5b58\u56fe\u7247\u5230\u76f8\u518c\uff01",
											showCancel: !1
										}) : tt.showModal({
											title: "\u63d0\u793a",
											content: "\u4fdd\u5b58\u56fe\u7247\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u8bbe\u7f6e\u7684\u83b7\u53d6\u76f8\u518c\u6743\u9650\u540e\u518d\u5c1d\u8bd5\u4fdd\u5b58\uff01",
											complete: function(e) {
												console.log(e), e.confirm ? tt.openSetting({}) : tt.showModal({
													title: "\u4fdd\u5b58\u56fe\u7247\u5931\u8d25",
													content: "\u60a8\u5df2\u53d6\u6d88\u4fdd\u5b58\u56fe\u7247\u5230\u76f8\u518c\uff01",
													showCancel: !1
												})
											}
										})
									}
								})
							},
							fail: function(e) {
								console.log("\u622a\u56fe\u4fdd\u5b58\u76f8\u518c\u83b7\u53d6\u8def\u5f84\u5931\u8d25"), console.log(e)
							}
						});
						else if ("wx" == this.channel) a.toTempFilePath({
							x: 0,
							y: 0,
							width: a.width,
							height: a.height,
							destWidth: a.width,
							destHeight: a.height,
							success: function(t) {
								i.tmpPath = t.tempFilePath, wx.saveImageToPhotosAlbum({
									filePath: i.tmpPath,
									success: function(t) {
										e()
									},
									fail: function(e) {
										"saveImageToPhotosAlbum:fail cancel" === e.errMsg ? wx.showModal({
											title: "\u4fdd\u5b58\u56fe\u7247\u5931\u8d25",
											content: "\u60a8\u5df2\u53d6\u6d88\u4fdd\u5b58\u56fe\u7247\u5230\u76f8\u518c\uff01",
											showCancel: !1
										}) : wx.showModal({
											title: "\u63d0\u793a",
											content: "\u4fdd\u5b58\u56fe\u7247\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u8bbe\u7f6e\u7684\u83b7\u53d6\u76f8\u518c\u6743\u9650\u540e\u518d\u5c1d\u8bd5\u4fdd\u5b58\uff01",
											complete: function(e) {
												console.log(e), e.confirm ? wx.openSetting({}) : wx.showModal({
													title: "\u4fdd\u5b58\u56fe\u7247\u5931\u8d25",
													content: "\u60a8\u5df2\u53d6\u6d88\u4fdd\u5b58\u56fe\u7247\u5230\u76f8\u518c\uff01",
													showCancel: !1
												})
											}
										})
									}
								})
							},
							fail: function(e) {
								console.log("\u622a\u56fe\u4fdd\u5b58\u76f8\u518c\u83b7\u53d6\u8def\u5f84\u5931\u8d25"), console.log(e)
							}
						});
						else if ("qq" == this.channel) a.toTempFilePath({
							x: 0,
							y: 0,
							width: a.width,
							height: a.height,
							destWidth: a.width,
							destHeight: a.height,
							success: function(t) {
								i.tmpPath = t.tempFilePath, qq.saveImageToPhotosAlbum({
									filePath: i.tmpPath,
									success: function(t) {
										e()
									},
									fail: function(e) {
										console.log(e), "saveImageToPhotosAlbum:fail cancel" == e.errMsg ? qq.showModal({
											title: "\u4fdd\u5b58\u56fe\u7247\u5931\u8d25",
											content: "\u60a8\u5df2\u53d6\u6d88\u4fdd\u5b58\u56fe\u7247\u5230\u76f8\u518c\uff01",
											showCancel: !1
										}) : qq.showModal({
											title: "\u63d0\u793a",
											content: "\u4fdd\u5b58\u56fe\u7247\u5931\u8d25\uff0c\u60a8\u53ef\u4ee5\u70b9\u51fb\u786e\u5b9a\u8bbe\u7f6e\u83b7\u53d6\u76f8\u518c\u6743\u9650\u540e\u518d\u5c1d\u8bd5\u4fdd\u5b58\uff01",
											complete: function(e) {
												console.log(e), e.confirm ? qq.openSetting({}) : qq.showModal({
													title: "\u4fdd\u5b58\u56fe\u7247\u5931\u8d25",
													content: "\u60a8\u5df2\u53d6\u6d88\u4fdd\u5b58\u56fe\u7247\u5230\u76f8\u518c\uff01",
													showCancel: !1
												})
											}
										})
									}
								})
							},
							fail: function(e) {
								console.log("\u622a\u56fe\u4fdd\u5b58\u76f8\u518c\u83b7\u53d6\u8def\u5f84\u5931\u8d25"), console.log(e)
							}
						});
						else if ("swan" == this.channel) a.toTempFilePath({
							x: 0,
							y: 0,
							width: a.width,
							height: a.height,
							destWidth: a.width,
							destHeight: a.height,
							success: function(t) {
								i.tmpPath = t.tempFilePath, swan.saveImageToPhotosAlbum({
									filePath: i.tmpPath,
									success: function(t) {
										e()
									},
									fail: function(e) {
										console.log(e), "saveImageToPhotosAlbum:fail cancel" == e.errMsg ? swan.showModal({
											title: "\u4fdd\u5b58\u56fe\u7247\u5931\u8d25",
											content: "\u60a8\u5df2\u53d6\u6d88\u4fdd\u5b58\u56fe\u7247\u5230\u76f8\u518c\uff01",
											showCancel: !1
										}) : swan.showModal({
											title: "\u63d0\u793a",
											content: "\u4fdd\u5b58\u56fe\u7247\u5931\u8d25\uff0c\u60a8\u53ef\u4ee5\u70b9\u51fb\u786e\u5b9a\u8bbe\u7f6e\u83b7\u53d6\u76f8\u518c\u6743\u9650\u540e\u518d\u5c1d\u8bd5\u4fdd\u5b58\uff01",
											complete: function(e) {
												console.log(e), e.confirm ? swan.openSetting({}) : swan.showModal({
													title: "\u4fdd\u5b58\u56fe\u7247\u5931\u8d25",
													content: "\u60a8\u5df2\u53d6\u6d88\u4fdd\u5b58\u56fe\u7247\u5230\u76f8\u518c\uff01",
													showCancel: !1
												})
											}
										})
									}
								})
							},
							fail: function(e) {
								console.log("\u622a\u56fe\u4fdd\u5b58\u76f8\u518c\u83b7\u53d6\u8def\u5f84\u5931\u8d25"), console.log(e)
							}
						});
						else if ("oppo" == this.channel) try {
							console.log("path=" + i.filePath), qg.saveImageToPhotosAlbum({
								filePath: i.filePath,
								success: function(t) {
									e()
								},
								fail: function(e) {
									console.log("333333333" + e.errMsg), console.log(e), "saveImageToPhotosAlbum:fail cancel" == e.errMsg ? qg.showModal({
										title: "\u4fdd\u5b58\u56fe\u7247\u5931\u8d25",
										content: "\u60a8\u5df2\u53d6\u6d88\u4fdd\u5b58\u56fe\u7247\u5230\u76f8\u518c\uff01",
										showCancel: !1
									}) : qg.showModal({
										title: "\u63d0\u793a",
										content: "\u4fdd\u5b58\u56fe\u7247\u5931\u8d25\uff0c\u60a8\u53ef\u4ee5\u8bbe\u7f6e\u5b8c\u76f8\u518c\u6743\u9650\u540e\u518d\u5c1d\u8bd5\u4fdd\u5b58\uff01",
										showCancel: !1
									})
								}
							})
						} catch (e) {
							console.log("exception=" + e.message), qg.showModal({
								title: "\u63d0\u793a",
								content: "\u4fdd\u5b58\u56fe\u7247\u5931\u8d25",
								showCancel: !1
							})
						} else if ("vivo" == this.channel) {
							console.log(i.filePath), console.log(i.picData), console.log("----------------------------"), this.filePath = "internal://files/work/cute" + this.GetNowTime() + ".jpg";
							var s = qg.writeFileSync({
								uri: i.filePath,
								text: i.picData,
								encoding: "binary"
							});
							"success" === s ? qg.saveToPhotoAlbum({
								uri: i.filePath,
								success: function() {
									e()
								},
								fail: function(e, t) {
									console.log("jswrapper:saveToPhotoAlbum handling fail, code = ".concat(t))
								}
							}) : console.log("jswrapper:writeFileSync handling fail, result = ".concat(s))
						}
					}
				} else e()
			},
			isHasAd: !0,
			isShowBanner: !0,
			adsManager: null,
			curUnlockItem: null,
			startTime: 0,
			isVideoPlaying: !1,
			isSupportBanner: !1,
			isSupportNativeIcon: !1,
			isSupportPush: !1,
			isBannerFirst: !0,
			isBannerRefreshByScene: !0,
			isOPPOBannerCtrlStart: !1,
			OPPONativeBannerTime: 40,
			OPPOBannerTime: 40,
			isLoadJson: !0,
			banner: "",
			inter: "",
			video: "",
			jsonPath: "",
			GetOnlineData: function(e) {
				var t = this;
				t.isLoadJson = !1;
				var n = new XMLHttpRequest;
				n.onreadystatechange = function() {
					if (4 == n.readyState && n.status >= 200 && n.status < 400) {
						var i = n.responseText;
						"{" != i[0] && (i = i.substr(1));
						var a = JSON.parse(i);
						t.isHasAd = a.isSupportAd, t.banner = a.banner, t.inter = a.inter, t.video = a.video, t.isLoadJson = !0, console.log("banner:" + t.banner, "inter:" + t.inter, "video:" + t.video), e()
					}
				}, n.open("GET", this.jsonPath, !0), n.send()
			},
			isOldAd: !1,
			GetBannerCloseTimes: function() {
				return cc.sys.localStorage.getItem("BannerCloseTimes")
			},
			SetBannerCloseTimes: function(e) {
				cc.sys.localStorage.setItem("BannerCloseTimes", e)
			},
			GetInterShowTimes: function() {
				var e = cc.sys.localStorage.getItem("InterShowTimes");
				return null != e && "" != e || (e = 0), e
			},
			SetInterShowTimes: function(e) {
				cc.sys.localStorage.setItem("InterShowTimes", e)
			},
			GetSignInDate: function() {
				return cc.sys.localStorage.getItem("SignInDate")
			},
			SetSignInDate: function() {
				cc.sys.localStorage.setItem("SignInDate", this.GetCurrentDate())
			},
			GetSignInDays: function() {
				return cc.sys.localStorage.getItem("SignInDays")
			},
			SetSignInDays: function(e) {
				cc.sys.localStorage.setItem("SignInDays", e)
			},
			GetIsSigIn: function() {
				var e = this.GetSignInDate();
				return null != e && "" !== e && e === this.GetCurrentDate()
			},
			isInstallShortcut: !1,
			Tutorial: null,
			StopTutorial: function() {
				this.Tutorial && this.Tutorial.hand.active && this.Tutorial.StopTutorial()
			},
			clamp01: function(e) {
				return e < 0 ? 0 : e < 1 ? e : 1
			},
			Clamp: function(e, t, n) {
				return t < e ? t = e : t > n && (t = n), t
			},
			RangeRandom: function(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				if (1 != n && 0 != n && (n = !1), e = Math.floor(e), (t = Math.floor(t)) < e) {
					var i = e;
					e = t, t = i
				}
				if (e == t) return e;
				var a = t - e + (1 == n ? 1 : 0);
				return Math.floor(Math.random() * a) + e
			},
			SortArray: function(e, t) {
				if (void 0 == t && (t = 2), null == e || void 0 == e || t < 0) return console.log("\u4f20\u5165\u6570\u636e\u6709\u8bef"), null;
				for (var n = 0; n < e.length; n++)
					for (var i = n + 1; i < e.length; i++)
						if (0 == t) {
							if (parseInt(e[n].name) > parseInt(e[i].name)) {
								var a = e[n];
								e[n] = e[i], e[i] = a
							}
						} else if (parseInt(e[n].name.substr(e[n].name.length - t, t)) > parseInt(e[i].name.substr(e[i].name.length - t, t))) {
					var s = e[n];
					e[n] = e[i], e[i] = s
				}
				return e
			},
			GetNowTime: function() {
				var e = new Date;
				return e = e.getTime()
			},
			GetCurrentDate: function() {
				var e = new Date;
				return e.getFullYear().toString() + "-" + (e.getMonth() + 1).toString() + "-" + e.getDate().toString()
			},
			GetDaysBetween: function(e, t) {
				var n = e.split("-"),
					i = t.split("-"),
					a = new Date(parseInt(n[0]), parseInt(n[1]) - 1, parseInt(n[2])).getTime(),
					s = new Date(parseInt(i[0]), parseInt(i[1]) - 1, parseInt(i[2])).getTime();
				return Math.abs(a - s) / 1e3 / 60 / 60 / 24
			},
			isInit: !1,
			GetInitialData: function(e) {
				if (!this.isInit) {
					if (this.isInit = !0, this.bgMusic = e, this.bgMusic) {
						var t = this.GetMusicFlag();
						null == t || "" === t ? (this.musicOn = !0, this.PlayMusic()) : 1 == t ? this.musicOn = !1 : (this.musicOn = !0, this.PlayMusic())
					}
					var n = this.GetAudioFlag();
					if (this.audioOn = null == n || "" === n || 1 != n, this.GetSystemInfo(), "qq" == this.channel && cc.sys.platform != cc.sys.DESKTOP_BROWSER) {
						var i = this;
						qq.showShareMenu({
							showShareItems: ["qq", "qzone", "wechatFriends", "wechatMoment"]
						}), qq.onShareAppMessage(function() {
							return {
								imageUrl: i.shareUrl
							}
						}), this.IsNormalShot()
					}
				}
			},
			MusicHandle: function(e, t, n) {
				if (null == this.bgMusic) {
					t.active = !1;
					var i = this,
						a = e;
					cc.loader.load({
						url: a,
						type: "mp3"
					}, function(e, a) {
						if (e) console.log(e);
						else try {
							i.bgMusic = a;
							var s = i.GetMusicFlag();
							null == s || "" === s ? (i.musicOn = !0, i.PlayMusic()) : 0 == s ? i.audioOn = !1 : (i.audioOn = !0, i.PlayMusic()), t.active = !0, n()
						} catch (e) {}
					}.bind(this))
				} else {
					t.active = !0;
					var s = that.GetMusicFlag();
					null == s || "" === s ? (this.audioOn = !0, this.PlayMusic()) : 0 == s ? this.audioOn = !1 : (this.audioOn = !0, this.PlayMusic()), n()
				}
			},
			HideShowHandle: function(e, t) {
				cc.game.off(cc.game.EVENT_SHOW), cc.game.on(cc.game.EVENT_SHOW, function() {
					0 == this.isVideoPlaying && "qq" == this.channel && 1 == this.GetIsPhone() && (this.musicOn ? this.audioControl && this.audioControl.play() : this.audioControl && this.audioControl.pause()), e && e()
				}.bind(this)), cc.game.off(cc.game.EVENT_HIDE), cc.game.on(cc.game.EVENT_HIDE, function() {
					"qq" == this.channel && 1 == this.GetIsPhone() && this.audioControl && this.audioControl.pause(), t && t()
				}.bind(this))
			},
			ShowFavoriteGuide: function() {
				0 != this.IsCanSupportFunc(20) && tt.showFavoriteGuide({
					type: "bar",
					content: "\u4e00\u952e\u6dfb\u52a0\u5230\u300c\u6211\u7684\u5c0f\u7a0b\u5e8f\u300d",
					position: "bottom",
					success: function(e) {
						console.log("\u5f15\u5bfc\u7ec4\u4ef6\u5c55\u793a\u6210\u529f", e)
					},
					fail: function(e) {
						console.log("\u5f15\u5bfc\u7ec4\u4ef6\u5c55\u793a\u5931\u8d25", e)
					}
				})
			},
			HandleEventPerScene: function(e, t) {
				if (this.HideShowHandle(e, t), cc.sys.platform != cc.sys.DESKTOP_BROWSER) {
					var n = this;
					"wx" == this.channel && (wx.showShareMenu({
						withShareTicket: !0
					}), wx.onShareAppMessage(function() {
						return {
							title: n.shareTitle
						}
					}))
				}
			},
			recorderFlag: !1,
			pickId: 1,
			recorder: null,
			videoPath: null,
			RecordInitHandle: function(e, t) {
				var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
					i = this;
				cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == this.channel && (this.recorder = tt.getGameRecorderManager(), this.recorder.onStart(function(t) {
					this.videoPath = null, this.recorderFlag = !0, this.startRecordTime = this.GetNowTime(), e()
				}.bind(this)), this.recorder.onError(function(t) {
					console.log("record error"), console.log(t), this.recorderFlag = !1, e()
				}.bind(this)), this.recorder.onStop(function(e) {
					0 != this.pickId && (1 == this.pickId ? this.recorder.clipVideo({
						path: e.videoPath,
						timeRange: [30, 0],
						success: function(e) {
							i.videoPath = e.videoPath
						},
						fail: function(t) {
							console.error(t), i.videoPath = e.videoPath
						}
					}) : this.videoPath = e.videoPath), this.recorderFlag = !1, t(), this.pickId = 1
				}.bind(this)), n && (0 == this.recorderFlag ? this.recorder.start({
					duration: 120
				}) : e()))
			},
			StartRecord: function() {
				cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == this.channel && 0 == this.recorderFlag && (this.recorderFlag = !0, this.recorder && this.recorder.start({
					duration: 120
				}))
			},
			StopRecord: function() {
				cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == this.channel && 1 == this.recorderFlag && this.recorder && this.recorder.stop()
			},
			RecordHandle: function(e, t) {
				cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == this.channel && (0 == this.recorderFlag ? (this.pickId = 3, e(0), this.recorder.start({
					duration: 120
				})) : (e(1), this.GetNowTime() - this.startRecordTime < 3e3 ? (console.log("\u5c0f\u4e8e3\u79d2\u5f39\u7a97"), t()) : (this.pickId = 3, this.recorder.stop())))
			},
			isRemindPopup: !1,
			ShowPanelHandle: function(e) {
				this.isRemindPopup = !0, this.isHasAd && ("apk" == this.channel && this.adsManager.ShowInterstitial(-1), "vivo" == this.channel && 1 == this.isShowNative && this.curScene && this.curScene.nativeControl && this.adsManager.ShowNativeAd(2, 1, this.curScene.nativeControl.ShowNativeInter), "shop" != e && "sign" != e && ("tt" != this.channel && "oppo" != this.channel || "saveDressup" != e || this.adsManager.ShowInterstitial(-1), "tt" != this.channel && "wx" != this.channel || ("callMsgPanel" == e ? cc.winSize.height / cc.winSize.width > 1.98 && this.adsManager.ShowBanner() : (this.adsManager.ShowBanner(), this.adsManager.ShowInterstitial()))), "tt" == this.channel && "sign" == e && this.adsManager.HideBanner(), "qq" == this.channel && ("personPanel" != e && "saveDressup" != e && "shop" != e && "sign" != e && "clearPanel" != e || (1 == this.isSupportBox && this.adsManager.ShowAppBox(), this.adsManager.ShowInterstitial(-1)))), "shop" != e && "sign" != e ? (this.isSupportBox && this.pushCtl && this.pushCtl.CreateOneRow(4, 10, cc.v2(0, -270)), this.isHasAd && ("wx" == this.channel ? 0 == this.IsCanSupportFunc(15) ? this.CreateGameIcon(140) : this.adsManager.ShowBlockAd() : "qq" == this.channel ? this.adsManager.ShowBlockAd() : "oppo" != this.channel && "apk" != this.channel || !this.isSupportPush || (cc.winSize.height / cc.winSize.width < 1.5 ? "dailyRewardPannel" == e ? this.pushCtl.CreateOneCol(1, 10, cc.v2(-200, 420), .8) : "newcat" == e ? this.pushCtl.CreateOneCol(1, 10, cc.v2(0, 290), .8) : "limitedPanel" == e ? this.pushCtl.CreateOneCol(1, 10, cc.v2(0, 420), .8) : this.pushCtl.CreateOneCol(1, 10, cc.v2(0, 350), .8) : cc.winSize.height / cc.winSize.width < 1.7 ? "limitedPanel" == e || "dailyRewardPannel" == e ? this.pushCtl.CreateOneCol(1, 10, cc.v2(0, 500), .8) : this.pushCtl.CreateOneCol(1, 10, cc.v2(0, 350), .8) : "limitedPanel" == e || "dailyRewardPannel" == e ? this.pushCtl.CreateOneCol(1, 10, cc.v2(0, 600), .8) : this.pushCtl.CreateOneCol(1, 10, cc.v2(0, 350), .8), this.pushCtl.OneRowNodeAnimStop(this.pushCtl.colNode)))) : "qq" == this.channel && "sign" == e && this.isSupportBox && this.pushCtl && (cc.winSize.height / cc.winSize.width < 2 && this.adsManager.HideBanner(), this.pushCtl.CreateOneRow(4, 10, cc.v2(0, -560))), -1 == this.curScene.name.indexOf("MainMenu") && this.ShowMoreGame()
			},
			HidePanelHandle: function(e, t) {
				this.isRemindPopup = !1, this.isHasAd && ("tt" != this.channel && "wx" != this.channel || -1 != this.curScene.name.indexOf("MainMenu") ? "qq" == this.channel && 1 == this.isShowBanner && "sign" == e && this.isSupportBox && this.pushCtl && this.adsManager.ShowBanner() : this.adsManager.HideBanner()), this.pushCtl && (this.pushCtl.HideOneRow(), "wx" == this.channel && "sign" == e && -1 != this.curScene.name.indexOf("MainMenu") ? (this.pushCtl.CreateTwoCol(4, 5, cc.v2(0, 80)), this.pushCtl.CreateHorPanel(!1, 15, 10, 1, cc.v2(654, 150))) : "oppo" != this.channel && "apk" != this.channel || !this.isSupportPush || (2 == this.sceneIndex ? (this.pushCtl.CreateOneCol(1, 10, cc.v2(300, this.curScene.pushY), .65), this.pushCtl.OneRowNodeAnimPlay(this.pushCtl.colNode)) : this.pushCtl.HideOneCol())), this.isHasAd && (this.adsManager.HideBlockAd(), this.HideGameIcon()), -1 == this.curScene.name.indexOf("MainMenu") ? this.HideMoreGame() : "tt" == this.channel && "sign" == e && this.adsManager.ShowBanner()
			},
			IsSupportPush: function() {
				var e = !1;
				return "wx" != this.channel && "qq" != this.channel && "oppo" != this.channel || (e = !0), e
			},
			AddShortcut: function() {
				cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == this.channel && tt.addShortcut({
					success: function(e) {
						console.log(e)
					},
					fail: function(e) {
						console.log(e)
					}
				})
			},
			getPartScore: function(e, t) {
				var n = 1,
					i = 3;
				return t && (n = 3, i = 5), "f" != e && "g" != e && "h" != e && "i" != e && "j" != e && "q" != e && "F" != e && "G" != e && "H" != e && "I" != e && "P" != e || (n = 4, i = 6, t && (n = 6, i = 8)), 2 * Math.floor(Math.random() * (i + 1 - n) + n)
			},
			pushCtl: null,
			serverPath: "https://cutegirl.obs.cn-east-3.myhuaweicloud.com/cutegirl/",
			curScene: null,
			sceneType: 0,
			personType: 1,
			isCreatNewImageMsg: !1,
			isMateMode: !1,
			dressupScore: null,
			curType: -1,
			curEditImageIndex: -1,
			curStickersNum: 0,
			curPersonNum: 0,
			itemName: [],
			girlItemName: ["eye", "eyebrow", "mouth", "makeup", "hair", "coat", "pants", "dress", "sock", "shoes", "face", "neck", "earring", "headwear", "glasses", "glove", "handheld", "wing", "tail", "body"],
			boyItemName: ["eye", "eyebrow", "mouth", "makeup", "hair", "coat", "jacket", "pants", "dress", "sock", "shoes", "glasses", "earring", "neck", "headwear"],
			defaultDressUp: {},
			defaultGirlDressUp: {
				sex: 1,
				eye: "4500",
				eyebrow: "2500",
				mouth: "400",
				hair: "100",
				dress: "100"
			},
			defaultBoyDressUp: {
				sex: 2,
				eye: "100",
				eyebrow: "100",
				mouth: "100",
				hair: "100",
				coat: "100",
				pants: "100",
				shoes: "100"
			},
			otherMsg: null,
			otherGirlMsg: null,
			otherBoyMsg: null,
			personMsg: null,
			imageMsg: null,
			imageType: 0,
			isCreatePerson: !1,
			curItem: null,
			levels: [],
			faceCamera: null,
			faceVideo: null,
			checkupMsg: null,
			shopMsg: null,
			decorationMsg: null,
			imageColor: null,
			resourcesType: [-1, -1, -1, -1, -1],
			signMsg: null,
			setNum: 0,
			signDays: 0,
			giftMsg: null,
			giftSets: 0,
			giftNum: 0,
			isSupportBox: !1,
			giftTime: 0,
			showGiftNum: 0,
			lastTime: 0,
			itemClikTimes: 0,
			configName: "configNew.json",
			defaultBgName: 0,
			curBgName: 0,
			isTest: !1,
			limitedFlag: !1,
			imageMode: 1,
			bgFrame: null,
			RemoveItemKey: function(e) {
				e && cc.sys.localStorage.removeItem(e)
			},
			GetItemLockFlag: function(e) {
				return cc.sys.localStorage.getItem(e)
			},
			SetItemLockFlag: function(e, t) {
				cc.sys.localStorage.setItem(e, t)
			},
			GetPersonMsg: function(e) {
				var t = "";
				1 == e ? t = "GirlMsg" : 2 == e && (t = "BoyMsg");
				var n = cc.sys.localStorage.getItem(t);
				return n && "" != n ? JSON.parse(n) : null
			},
			SetPersonMsg: function(e) {
				var t = "";
				1 == e ? t = "GirlMsg" : 2 == e && (t = "BoyMsg"), this.personMsg && cc.sys.localStorage.setItem(t, JSON.stringify(this.personMsg))
			},
			GetImageMsg: function() {
				var e = cc.sys.localStorage.getItem("ImageMsg");
				return e && "" != e ? JSON.parse(e) : null
			},
			SetImageMsg: function() {
				this.imageMsg && cc.sys.localStorage.setItem("ImageMsg", JSON.stringify(this.imageMsg))
			},
			GetPathByType: function(e, t) {
				var n = "";
				return 0 == this.sceneType ? n = "decoration/" : 1 == this.sceneType ? n = "girl/" : 2 == this.sceneType && (n = "boy/"), 0 == t ? n = "decoration/" : 1 == t ? n = "girl/" : 2 == t && (n = "boy/"), 2 == e.length ? "0a" == e ? n += "bg/" : "0b" == e ? n += "tex/" : "0c" == e && (n += "animal/") : "a" == e || "A" == e ? n += "eye/" : "b" == e || "B" == e ? n += "eyebrow/" : "c" == e || "C" == e ? n += "mouth/" : "d" == e || "D" == e ? n += "makeup/" : "e" == e || "E" == e ? n += "hair/" : "f" == e || "F" == e ? n += "coat/" : "g" == e || "G" == e ? n += "pants/" : "h" == e || "H" == e ? n += "dress/" : "i" == e || "I" == e ? n += "sock/" : "j" == e || "J" == e ? n += "shoes/" : "k" == e || "K" == e ? n += "face/" : "l" == e || "L" == e ? n += "necklace/" : "m" == e || "M" == e ? n += "earring/" : "n" == e || "N" == e ? n += "headwear/" : "o" == e || "O" == e ? n += "glasses/" : "p" == e || "P" == e ? n += "glove/" : "q" == e || "Q" == e ? n += "handheld/" : "r" == e || "R" == e ? n += "wing/" : "s" == e || "S" == e ? n += "tail/" : "t" == e || "T" == e ? n = "decoration/bg/" : "u" != e && "U" != e || (n += "body/"), n
				console.log("4444",n,e,t);
			},
			SortByArray: function(e, t) {
				for (var n = new Array, i = 0; i < e.length; i++) {
					var a = this.GetNameIndex(e[i].name, t); - 1 != a && (n[a] = e[i])
				}
				return n
			},
			GetNameIndex: function(e, t) {
				var n = -1,
					i = this.itemName;
				i = 1 == t ? this.girlItemName : 2 == t ? this.boyItemName : this.itemName;
				for (var a = 0; a < i.length; a++)
					if (i[a] == e) {
						n = a;
						break
					} return n
			},
			CopyObjectValue: function(e) {
				var t = null;
				if (e)
					for (var n in t = {}, e) t[n] = e[n];
				return t
			},
			CopyArrValue: function(e) {
				var t = null;
				if (e) {
					t = new Array;
					for (var n = 0; n < e.length; n++) t[n] = e[n]
				}
				return t
			},
			AddOneImageItem: function(e) {
				if (null == this.imageMsg && (this.imageMsg = new Array), 1 == e) {
					var t = this.CopyObjectValue(this.defaultGirlDressUp);
					this.imageMsg.splice(0, 0, t)
				} else if (2 == e) {
					var n = this.CopyObjectValue(this.defaultBoyDressUp);
					this.imageMsg.splice(0, 0, n)
				}
				this.SetImageMsg()
			},
			InitPerson: function(e, t, n) {
				var i = "",
					a = "a",
					s = "a";
				2 == e.sex && (a = "A", s = "A");
				var o = null;
				o = 1 == e.sex ? this.girlItemName : this.boyItemName;
				for (var c = !0, r = !0, l = !0, h = 0; h < o.length; h++) {
					if (i = o[h], "t" == (a = String.fromCharCode(s.charCodeAt() + h)) && (a = "u"), e[i]) {
						var d = e[i],
							g = d.substr(d.length - 2, 1),
							p = d.substr(0, d.length - 2);
						this.InitPersonPart(e.sex, a, g, p, t[h], n)
					} else "u" == a ? t[h].getComponent(cc.Sprite).spriteFrame = this.curScene.girlFrame : (t[h].getComponent(cc.Sprite).spriteFrame = null, "h" == a ? n[1].getComponent(cc.Sprite).spriteFrame = null : "n" == a && (n[2].getComponent(cc.Sprite).spriteFrame = null));
					"coat" == i && e[i] ? c = !0 : "coat" == i ? c = !1 : "pants" == i && e[i] ? r = !0 : "pants" == i ? r = !1 : "dress" == i && e[i] ? l = !0 : "dress" == i && (l = !1)
				}
				t[0].parent.getChildByName("default1").active = !1, t[0].parent.getChildByName("default2").active = !1;
				"f".charCodeAt(), "a".charCodeAt();
				0 == c && 0 == l && (t[0].parent.getChildByName("default1").active = !0), 0 == r && 0 == l && (t[0].parent.getChildByName("default2").active = !0)
			},
			InitPersonPart: function(e, t, n, i, a, s) {
				var o = [],
					c = "a";
				2 == e && (c = "A");
				var r = this.GetPathByType(t);
				0 == this.sceneType && (r = 1 == e ? this.GetPathByType(t, 1) : this.GetPathByType(t, 2));
				var l = !0;
				if ("e" == t || "h" == t || "n" == t) {
					var h = !1,
						d = 0;
					"e" == t ? (c = "other/girl/hair/", o = this.otherGirlMsg.hair) : "h" == t ? (d = 1, h = !0, c = "other/girl/dress/", o = this.otherGirlMsg.dress) : "n" == t && (d = 2, h = !0, c = "other/girl/headwear/", o = this.otherGirlMsg.headwear);
					var g = this.IsHasSecondLayer(o, i);
					0 == h && g >= 0 || h && -1 == g ? s[d].getComponent(cc.Sprite).spriteFrame = null : (h && "0" == o[g].toString().substr(0, 1) && (l = !1), c += i, 0 == n ? this.LoadOneImage(!0, c, s[d]) : (c = this.serverPath + c + ".png", this.LoadOneImage(!1, c, s[d])))
				}
				l ? 0 == n ? (c = r + i, this.LoadOneImage(!0, c, a)) : (c = this.serverPath + r + i + ".png", this.LoadOneImage(!1, c, a)) : a.getComponent(cc.Sprite).spriteFrame = null
			},
			IsHasSecondLayer: function(e, t) {
				for (var n = new Array, i = 0; i < e.length; i++) n[i] = parseInt(e[i]);
				return 0 == n.length ? -1 : n.indexOf(parseInt(t))
			},
			LevelHandle: function(e, t, n) {},
			LoadOneImage: function(e, t, n) {
				e ? cc.loader.loadRes(t, cc.SpriteFrame, function(e, t) {
					e ? console.log(e) : n.getComponent(cc.Sprite).spriteFrame = t
				}) : cc.loader.load(t, function(e, t) {
					e ? console.log(e) : n.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t)
				})
			},
			InitPersonPos: function(e, t, n) {
				2 == e ? (t[0].setPosition(0, 257), t[1].setPosition(1, 260), t[2].setPosition(0, 213), t[3].setPosition(1, 255), n[0].setPosition(-1, 267), t[4].setPosition(-1, 267), t[5].setPosition(-3, 20), t[6].setPosition(3, 29), t[7].setPosition(0, -124), t[8].setPosition(2, -31), t[9].setPosition(0, -227), t[10].setPosition(0, -320), t[11].setPosition(0, 248), t[12].setPosition(0, 213), t[13].setPosition(.5, 87), t[14].setPosition(-2, 273)) : (t[1].setPosition(0, 122), t[0].setPosition(-1, 122), t[2].setPosition(0, 111), t[3].setPosition(-.5, 121.9), n[0].setPosition(-.8, -49.5), t[4].setPosition(-.8, -49.5), t[5].setPosition(-1, -63), t[6].setPosition(0, -157), n[1].setPosition(14.3, -47.7), t[7].setPosition(14.3, -47.7), t[8].setPosition(-1.5, -199), t[9].setPosition(2, -241), t[10].setPosition(-2, 120), t[11].setPosition(-1, -19.8), t[12].setPosition(-1, 49.6), n[2].setPosition(6.2, 156.7), t[13].setPosition(6.2, 156.7), t[14].setPosition(-2, 126), t[15].setPosition(-1, -68), t[16].setPosition(65.9, -51.7), t[17].setPosition(0, -66), t[18].setPosition(5, -23))
			}
		}, cc._RF.pop()
	}, {}],
	GameMonetizeSdk: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "24eeduhRJVCgqVIJiYJe/3W", "GameMonetizeSdk");
		var i = !1;
		window.SDK_OPTIONS = {
				gameId: "rydbn7xbquv8rvnzu42gwl22on2l8som",
				onEvent: function(e) {
					switch (e.name) {
						case "SDK_GAME_PAUSE":
							console.log("SDK_GAME_PAUSE==========>>>>>isPlayAd:", i), cc.game.pause();
							break;
						case "SDK_GAME_START":
							console.log("SDK_GAME_START==========1>>>>>isPlayAd:", i), cc.game.resume(), i && (window.mWatchAdCallback && window.mWatchAdCallback(), i = !1, console.log("SDK_GAME_START==========2>>>>>isPlayAd:", i)), window.mWatchAdCallbackInter && window.mWatchAdCallbackInter(), window.mWatchAdCallbackInter = null;
							break;
						case "STARTED":
							i = !0, console.log("STARTED==========>>>>>isPlayAd:", i);
							break;
						case "SDK_READY":
							console.log("SDK_READY==========>>>>>isPlayAd:", i), i = !0;
							break;
						case "SDK_ERROR":
							console.log("SDK_ERROR==========>>>>>isPlayAd:", i)
					}
				}
			},
			/* function(e, t, n) {
				var i = e.getElementsByTagName(t)[0];
				e.getElementById(n) || ((e = e.createElement(t)).id = n, e.src = "https://api.gamemonetize.com/sdk.js", i.parentNode.insertBefore(e, i))
			}(document, "script", "gamemonetize-sdk"), cc._RF.pop() */
			console.log("1111");
	}, {}],
	GameScene: [function(e, t, n) {
		"use strict";

		function i(e) {
			if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
				if (Array.isArray(e) || (e = a(e))) {
					var t = 0,
						n = function() {};
					return {
						s: n,
						n: function() {
							return t >= e.length ? {
								done: !0
							} : {
								done: !1,
								value: e[t++]
							}
						},
						e: function(e) {
							throw e
						},
						f: n
					}
				}
				throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}
			var i, s, o = !0,
				c = !1;
			return {
				s: function() {
					i = e[Symbol.iterator]()
				},
				n: function() {
					var e = i.next();
					return o = e.done, e
				},
				e: function(e) {
					c = !0, s = e
				},
				f: function() {
					try {
						o || null == i.return || i.return()
					} finally {
						if (c) throw s
					}
				}
			}
		}

		function a(e, t) {
			if (e) {
				if ("string" == typeof e) return s(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
			}
		}

		function s(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
			return i
		}
		cc._RF.push(t, "c8cfdp6wYVB6LjTynxmZe5Q", "GameScene");
		var o = e("GameManager"),
			c = e("mta_analysis");
		cc.Class({
			extends: cc.Component,
			properties: {
				callMsgPanel: cc.Node,
				winParticle: cc.Prefab,
				winKuang: cc.SpriteFrame,
				failKuang: cc.SpriteFrame,
				singleSprite: cc.SpriteFrame,
				doubleSprite: cc.SpriteFrame,
				mateAndPkPanel: cc.Node,
				trueFace: cc.Node,
				checkupFacePanel: cc.Node,
				person: cc.Node,
				refreshFrame: cc.SpriteFrame,
				defaultBgGame: cc.SpriteFrame,
				defaultBg: cc.SpriteFrame,
				colorFrame: cc.SpriteFrame,
				girlFrame: cc.SpriteFrame,
				boyFrame: cc.SpriteFrame,
				firstScrollView: cc.ScrollView,
				secondScrollView1: cc.ScrollView,
				secondScrollView2: cc.ScrollView,
				shopScrollView: cc.ScrollView,
				saveDressUpPanel: cc.Node,
				saveScreenShotPanel: cc.Node,
				targetNode: cc.Node,
				camera: cc.Camera,
				sucRemind: cc.Node,
				saveDressupRemind: cc.Node,
				clearDressupPanel: cc.Node,
				generalRemind: cc.Node,
				record: cc.Sprite,
				recording: cc.SpriteFrame,
				recordStop: cc.SpriteFrame,
				audioImage: cc.Sprite,
				audioOn: cc.SpriteFrame,
				audioOff: cc.SpriteFrame,
				signPanel: cc.Node,
				giftPanel: cc.Node,
				limitedSetPanel: cc.Node
			},
			onLoad: function() {
				(o.curScene = this, o.HandleEventPerScene(null, null), o.sceneIndex = 1, 1 == o.personType) ? (this.person = cc.find("Canvas/person1"), cc.find("Canvas/person2").active = !1, cc.find("Canvas/person1").x = 0, this.mateAndPkPanel.active = !1, cc.find("Canvas/holder/buttons/personTypeBtn").getComponent(cc.Sprite).spriteFrame = this.doubleSprite) : (this.mateAndPkPanel.active = !1, cc.find("Canvas/holder/buttons/personTypeBtn").getComponent(cc.Sprite).spriteFrame = this.singleSprite, this.isCanChangePerson = !0, cc.find("Canvas/holder/mateBtn").active = !0, this.choosePerson = 1, 3 != o.isCreatePerson && (o.sceneType = 1, o.isCreatePerson = 1), this.person = cc.find("Canvas/person1"), cc.find("Canvas/person2").active = !0, cc.find("Canvas/person1").x = -150, cc.find("Canvas/person2").x = 150, cc.find("Canvas/topHolder/left/photoBtn").active = !1, cc.find("Canvas/topHolder/left/setBtn/layout/saveBtn").active = !1);
				o.isHasAd && "oppo" != o.channel && o.adsManager.HideBanner()
			},
			onDestroy: function() {
				o.curScene = null
			},
			start: function() {
				if (0 == o.giftTime && (o.giftTime = o.GetNowTime()), o.fakeUnlockName = [], this.images1 = new Array, this.images2 = new Array, this.refreshFlag = !0, this.isShowScrollview = !0, this.curInnerType = 0, this.itemRemark1 = this.secondScrollView1.content.getComponent("SecondItemRemark"), this.itemRemark1.refreshFlag = !0, this.audioImage.spriteFrame = 1 == o.audioOn ? this.audioOn : this.audioOff, this.InitPanelMsg(), this.targetThings = new Array, this.afterParts = new Array, this.levelArr = new Array, this.selectLight = cc.find("Canvas/selectLight"), "tt" == o.channel ? (cc.find("Canvas/topHolder/left/setBtn/layout/recordBtn").active = !0, this.trueFace.active = !1, 2 == o.personType ? (cc.find("Canvas/topHolder/left/tureFaceBtn").active = !1, cc.find("Canvas/topHolder/left/checkupFaceBtn").active = !1) : (cc.find("Canvas/topHolder/left/tureFaceBtn").active = !0, cc.find("Canvas/topHolder/left/checkupFaceBtn").active = !0)) : (cc.find("Canvas/topHolder/left/setBtn/layout/recordBtn").active = !1, cc.find("Canvas/topHolder/left/tureFaceBtn").active = !1, cc.find("Canvas/topHolder/left/checkupFaceBtn").active = !1, this.trueFace.active = !1), "h5" == o.channel ? cc.find("Canvas/topHolder/left/photoBtn").active = !1 : "ios" == o.channel ? cc.find("Canvas/topHolder/left/setBtn/layout/saveBtn").active = !1 : "oppo" != o.channel && "vivo" != o.channel || (cc.find("Canvas/saveScreenShotPanel/shareBtn").active = !1), this.startHeight = this.secondScrollView1.node.height, cc.winSize.height / cc.winSize.width > 2.05) cc.find("Canvas/topHolder").getComponent(cc.Widget).top += 50, 2 == o.personType ? (cc.find("Canvas/person2").scale = this.person.scale = .9, this.selectLight.y = 415) : this.person.scale = 1;
				else if (cc.winSize.height / cc.winSize.width < 1.5) {
					cc.find("Canvas/topHolder/left").scale = .65, cc.find("Canvas/topHolder/right").scale = .65, cc.find("Canvas/holder/buttons/hideItemBtn").scale = .65, cc.find("Canvas/holder/buttons/shopBtn").scale = .6, cc.find("Canvas/holder/buttons/personTypeBtn").scale = .6, cc.find("Canvas/holder/buttons/callBtn").scale = .6, cc.find("Canvas/holder/buttons/shopBtn").y -= 37, cc.find("Canvas/holder/buttons/personTypeBtn").y -= 120, cc.find("Canvas/holder/buttons/callBtn").y -= 80, cc.find("Canvas/topHolder").getComponent(cc.Widget).top -= 80, this.signPanel.scale = .75, this.signPanel.getChildByName("splash").scale = 1 / .75;
					this.secondScrollView1.node.height = 270, cc.find("Canvas/holder").getComponent(cc.Widget).bottom = -(this.startHeight - 270), this.secondScrollView1.content.getComponent(cc.Widget).top = 0, this.secondScrollView1.content.getComponent("SecondItemRemark").startY = 135, this.person.scale = 1, this.person.y = 180, 2 == o.personType && (cc.find("Canvas/person2").scale = this.person.scale = .9, cc.find("Canvas/person2").y = this.person.y, this.selectLight.y = 345), o.isShowBanner = !1, this.saveScreenShotPanel.getChildByName("closeBtn").y -= 100, o.isHasAd && (this.giftPanel.scale = .8, this.giftPanel.getChildByName("splash").scale = 1.25), this.saveScreenShotPanel.getChildByName("closeBtn").x = -this.saveScreenShotPanel.getChildByName("closeBtn").x
				} else if (cc.winSize.height / cc.winSize.width < 1.65) {
					cc.find("Canvas/topHolder/left").scale = .85, cc.find("Canvas/topHolder/right").scale = .85, cc.find("Canvas/holder/buttons/hideItemBtn").scale = .85, cc.find("Canvas/holder/buttons/shopBtn").scale = .8, cc.find("Canvas/holder/buttons/personTypeBtn").scale = .8, cc.find("Canvas/holder/buttons/callBtn").scale = .8, cc.find("Canvas/holder/buttons/personTypeBtn").y -= 40, cc.find("Canvas/holder/buttons/callBtn").y -= 20, cc.find("Canvas/topHolder").getComponent(cc.Widget).top -= 80, this.signPanel.scale = .75, this.signPanel.getChildByName("splash").scale = 1 / .75;
					this.secondScrollView1.node.height = 270, cc.find("Canvas/holder").getComponent(cc.Widget).bottom = -(this.startHeight - 270), this.secondScrollView1.content.getComponent(cc.Widget).top = 0, this.secondScrollView1.content.getComponent("SecondItemRemark").startY = 135, this.person.scale = 1, this.person.y = 180, 2 == o.personType && (cc.find("Canvas/person2").scale = this.person.scale = .9, cc.find("Canvas/person2").y = this.person.y, this.selectLight.y = 345), o.isShowBanner = !1, this.saveScreenShotPanel.getChildByName("closeBtn").y -= 100, o.isHasAd && (this.giftPanel.scale = .8, this.giftPanel.getChildByName("splash").scale = 1.25), this.saveScreenShotPanel.getChildByName("closeBtn").x = -this.saveScreenShotPanel.getChildByName("closeBtn").x
				} else cc.winSize.height / cc.winSize.width < 1.8 ? (cc.find("Canvas/topHolder").getComponent(cc.Widget).top -= 80, cc.find("Canvas/topHolder/left").scale = .9, cc.find("Canvas/topHolder/right").scale = .9, cc.find("Canvas/holder/buttons/hideItemBtn").scale = .9, cc.find("Canvas/holder/buttons/shopBtn").scale = .85, cc.find("Canvas/holder/buttons/personTypeBtn").scale = .85, cc.find("Canvas/holder/buttons/callBtn").scale = .85, cc.find("Canvas/holder/buttons/personTypeBtn").y -= 40, cc.find("Canvas/holder/buttons/callBtn").y -= 20, 2 == o.personType ? (cc.find("Canvas/person2").scale = this.person.scale = .9, this.selectLight.y = 415) : this.person.scale = 1) : cc.winSize.height / cc.winSize.width < 2.05 && (2 == o.personType ? (cc.find("Canvas/person2").scale = this.person.scale = .9, this.selectLight.y = 415) : this.person.scale = 1);
				if (o.isHasAd) {
					var e = 0;
					cc.winSize.height / cc.winSize.width < 1.6 ? (e = 150, this.shopScrollView.node.parent.getChildByName("closeBtn").y -= e, this.shopScrollView.node.parent.getChildByName("title").y -= e, this.shopScrollView.node.y = cc.winSize.height / 2 - 180) : cc.winSize.height / cc.winSize.width < 1.7 && (e = 80, this.shopScrollView.node.parent.getChildByName("closeBtn").y -= e, this.shopScrollView.node.parent.getChildByName("title").y -= e, this.shopScrollView.node.y = cc.winSize.height / 2 - 180);
					var t = cc.winSize.height / 2 - this.shopScrollView.node.y;
					this.shopScrollView.node.height = cc.winSize.height - t, this.shopScrollView.content.getComponent(cc.Widget).top = 0, this.shopScrollView.content.getComponent("ShopItemRemark").startY = this.shopScrollView.content.y, o.adsManager.HideBlockAd()
				} else {
					var n = 0;
					cc.winSize.height / cc.winSize.width < 1.6 ? (n = 150, this.shopScrollView.node.parent.getChildByName("closeBtn").y -= n, this.shopScrollView.node.parent.getChildByName("title").y -= n, this.shopScrollView.node.y = cc.winSize.height / 2 - 180) : cc.winSize.height / cc.winSize.width < 1.7 && (n = 80, this.shopScrollView.node.parent.getChildByName("closeBtn").y -= n, this.shopScrollView.node.parent.getChildByName("title").y -= n, this.shopScrollView.node.y = cc.winSize.height / 2 - 180);
					var i = cc.winSize.height / 2 - this.shopScrollView.node.y;
					this.shopScrollView.node.height = cc.winSize.height - i, this.shopScrollView.content.getComponent(cc.Widget).top = 0, this.shopScrollView.content.getComponent("ShopItemRemark").startY = this.shopScrollView.content.y
				}
				for (var a = this.person.children, s = 0; s < a.length; s++)
					if ("body" == a[s].name) a[s].getComponent(cc.Sprite).spriteFrame = this.girlFrame, this.targetThings.push(a[s]);
					else if ("hairAfter" == a[s].name) this.afterParts[0] = a[s];
				else if ("dressAfter" == a[s].name) this.afterParts[1] = a[s];
				else if ("headwearAfter" == a[s].name) this.afterParts[2] = a[s];
				else {
					if ("TT_TrueFace" == a[s].name) continue;
					if ("level" == a[s].name)
						for (var c = a[s].children, r = 0; r < c.length; r++) this.levelArr[r] = c[r], this.targetThings.push(c[r]);
					else this.targetThings.push(a[s])
				}
				if (this.targetThings = o.SortByArray(this.targetThings, 0), this.LoadResources(), this.LoadBg(), o.LevelHandle(this.levelArr, o.personMsg.level, 0), o.InitPersonPos(o.sceneType, this.targetThings, this.afterParts), 2 == o.personType) {
					this.person.setSiblingIndex(6), this.selectLight.x = -150, this.selectLight.active = !0, this.dressupScore = new Array, this.SimplifyPersonMsg();
					for (var l = 0, h = Object.keys(o.personMsg); l < h.length; l++) {
						var d = h[l],
							g = o.girlItemName.indexOf(d);
						if (-1 != g) {
							var p = String.fromCharCode("a".charCodeAt() + g),
								u = o.getPartScore(p, !0);
							("a" == p && 4500 == parseInt(o.personMsg[d]) || "b" == p && 2500 == parseInt(o.personMsg[d]) || "c" == p && 400 == parseInt(o.personMsg[d]) || "e" == p && 100 == parseInt(o.personMsg[d]) || "h" == p && 100 == parseInt(o.personMsg[d])) && (u = o.getPartScore(d, !1));
							var m = {
								name: p,
								score: u
							};
							this.dressupScore.push(m)
						}
					}
					this.sex_p1 = o.sceneType, this.personMsg_p1 = o.personMsg, this.targetThings_p1 = this.targetThings, this.afterParts_p1 = this.afterParts, this.levelArr_p1 = this.levelArr, this.dressupScore_p1 = this.dressupScore;
					var f = o.defaultGirlDressUp;
					this.personMsg_p2 = o.CopyObjectValue(f), this.sex_p2 = o.sceneType, this.targetThings_p2 = new Array, this.afterParts_p2 = new Array, this.levelArr_p2 = new Array, this.dressupScore_p2 = new Array;
					for (var v = cc.find("Canvas/person2").children, S = 0; S < v.length; S++)
						if ("body" == v[S].name) v[S].getComponent(cc.Sprite).spriteFrame = this.girlFrame, this.targetThings_p2.push(v[S]);
						else if ("hairAfter" == v[S].name) this.afterParts_p2[0] = v[S];
					else if ("dressAfter" == v[S].name) this.afterParts_p2[1] = v[S];
					else if ("headwearAfter" == v[S].name) this.afterParts_p2[2] = v[S];
					else {
						if ("TT_TrueFace" == v[S].name) continue;
						if ("level" == v[S].name)
							for (var C = v[S].children, y = 0; y < C.length; y++) this.levelArr_p2[y] = C[y], this.targetThings_p2.push(C[y]);
						else this.targetThings_p2.push(v[S])
					}
					this.targetThings_p2 = o.SortByArray(this.targetThings_p2, 1), o.InitPerson(this.personMsg_p2, this.targetThings_p2, this.afterParts_p2), o.LevelHandle(this.levelArr_p2, this.personMsg_p2.level, 0), o.InitPersonPos(this.sex_p2, this.targetThings_p2, this.afterParts_p2);
					for (var P = 0, w = Object.keys(this.personMsg_p2); P < w.length; P++) {
						var I = w[P],
							N = o.girlItemName.indexOf(I);
						if (-1 != N) {
							var B = {
								name: String.fromCharCode("a".charCodeAt() + N),
								score: o.getPartScore(I, !1)
							};
							this.dressupScore_p2.push(B)
						}
					}
				}
				this.startPosY = this.person.y;
				var M = this;
				if (o.RecordInitHandle(function() {
						M.UpdateRecordBtn()
					}, function() {
						0 == o.pickId ? (M.generalRemind.active = !0, M.generalRemind.getComponent("GeneralRemind").InitPanel(1), o.ShowPanelHandle()) : 1 != o.pickId && 3 != o.pickId || (M.generalRemind.active = !0, M.generalRemind.getComponent("GeneralRemind").InitPanel(2), o.ShowPanelHandle()), M.UpdateRecordBtn()
					}), o.isHasAd) {
					if (o.isShowBanner) {
						if (1 == o.isShowNative)
							if ("oppo" == o.channel || "vivo" == o.channel)
								if ("oppo" == o.channel) {
									if (o.curScene.nativeControl = this.node.getComponent("NativeControl"), o.isBannerRefreshByScene && !o.isBannerFirst) console.log(this.nativeControl), o.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner);
									else if (o.oppoNativeBannerRes) {
										var T = o.oppoNativeBannerRes;
										this.nativeControl.ShowNativeBanner(T.adId, T.title, T.desc)
									}
								} else "vivo" == o.channel && (o.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner), this.schedule(function() {
									try {
										0 == this.nativeControl.nativeBannerBtn.node.active && 1 == o.sceneIndex && o.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner)
									} catch (e) {}
								}.bind(this), 10));
						else o.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner);
						else "oppo" == o.channel || "vivo" == o.channel ? "oppo" == o.channel ? o.isBannerRefreshByScene && o.isBannerFirst ? o.adsManager.ShowBanner() : o.isBannerFirst && o.adsManager.showBannerTime && o.gameManager.GetNowTime() - o.adsManager.showBannerTime > 3e4 && !o.adsManager.isShow && o.adsManager.ShowBanner() : (o.adsManager.ShowBanner(), this.schedule(function() {
							o.adsManager.ShowBanner()
						}, 30)) : o.adsManager.ShowBanner();
						this.secondScrollView1.node.height = 300, this.secondScrollView1.content.getComponent(cc.Widget).top = 150, cc.winSize.height / cc.winSize.width < 2 && (this.signPanel.y += 60, this.signPanel.getChildByName("splash").y -= 60, this.signPanel.getChildByName("okBtn").y += 10, this.shopScrollView.node.parent.y += 20, this.shopScrollView.node.parent.getChildByName("frame").y -= 20), "qq" == o.channel && (cc.winSize.height / cc.winSize.width < 2 && (cc.find("Canvas/topHolder").getComponent(cc.Widget).top += 30), cc.winSize.height / cc.winSize.width >= 2 && (this.signPanel.y += 80, this.signPanel.getChildByName("splash").y -= 80))
					} else o.adsManager.HideBanner(), this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = -(this.startHeight - this.secondScrollView1.node.height);
					"tt" != o.channel && "oppo" != o.channel && "apk" == o.channel && -1 == o.packName.indexOf("nearme") && ("vivo" == o.channel && 1 == o.isShowNative ? o.curScene && o.curScene.nativeControl && o.adsManager.ShowNativeAd(2, 1, o.curScene.nativeControl.ShowNativeInter) : o.adsManager.ShowInterstitial(-1)), "qq" == o.channel || "wx" == o.channel ? cc.find("Canvas/topHolder/left/showBoxBtn").active = !0 : cc.find("Canvas/topHolder/left/showBoxBtn").active = !1, cc.find("Canvas/holder/buttons/shopBtn").getComponent(cc.Animation).play("shake")
				} else "wx" == o.channel ? cc.find("Canvas/topHolder/left/showBoxBtn").active = !0 : cc.find("Canvas/topHolder/left/showBoxBtn").active = !1;
				o.HideMoreGame(), cc.find("Canvas/pushNode").active && o.isSupportPush && (o.pushCtl = cc.find("Canvas/pushNode").getComponent("PushNodeCtl"), "oppo" == o.channel && (cc.winSize.height / cc.winSize.width < 1.7 ? o.pushCtl.CreateDrawerPush(0, 9, .9) : o.pushCtl.CreateDrawerPush(50))), o.limitedFlag && (o.isFirst = !0, this.ShowLimitedPanel()), o.isFromActivityBtn && (o.isFromActivityBtn = !1, this.BtnShopClick())
			},
			changePerson: function(e, t) {
				if (2 == o.personType) {
					if (parseInt(t) == this.choosePerson || this.mateAndPkPanel.active || !this.isCanChangePerson) return;
					this.isCanChangePerson = !1, this.scheduleOnce(function() {
						this.isCanChangePerson = !0
					}.bind(this), .3), 1 == parseInt(t) ? (this.choosePerson = 1, this.sex_p2 = o.sceneType, this.personMsg_p2 = o.personMsg, this.targetThings_p2 = this.targetThings, this.afterParts_p2 = this.afterParts, this.levelArr_p2 = this.levelArr, this.dressupScore_p2 = this.dressupScore, this.person = cc.find("Canvas/person1"), o.sceneType = this.sex_p1, o.personMsg = this.personMsg_p1, this.targetThings = this.targetThings_p1, this.afterParts = this.afterParts_p1, this.levelArr = this.levelArr_p1, this.dressupScore = this.dressupScore_p1, this.person.setSiblingIndex(6), this.selectLight.x = -150) : (this.choosePerson = 2, this.sex_p1 = o.sceneType, this.personMsg_p1 = o.personMsg, this.targetThings_p1 = this.targetThings, this.afterParts_p1 = this.afterParts, this.levelArr_p1 = this.levelArr, this.dressupScore_p1 = this.dressupScore, this.person = cc.find("Canvas/person2"), o.sceneType = this.sex_p2, o.personMsg = this.personMsg_p2, this.targetThings = this.targetThings_p2, this.afterParts = this.afterParts_p2, this.levelArr = this.levelArr_p2, this.dressupScore = this.dressupScore_p2, this.person.setSiblingIndex(6), this.selectLight.x = 150);
					for (var n = 0; n < this.selectName.length; n++)
						if (n == o.girlItemName.length - 1) {
							var i = o.personMsg[o.girlItemName[n]];
							this.selectName[n + 1] = i ? i.substr(0, i.length - 2) : 0
						} else {
							if (n == this.selectName.length - 1) continue;
							var a = o.personMsg[o.girlItemName[n]];
							this.selectName[n] = a ? a.substr(0, a.length - 2) : 0
						}
				}
			},
			ShowMateAndPkPanel: function(e, t) {
				if (2 == o.personType) {
					cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && c.Event.stat("tt_clickPkBtn", {}), o.audioManager && o.audioManager.PlayClickSound(), e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
						e.target.getComponent(cc.Button).interactable = !0
					}, .3);
					var n = this.mateAndPkPanel.getChildByName("bg").getComponent(cc.Sprite);
					n.node.color = this.node.color, n.spriteFrame = this.node.getComponent(cc.Sprite).spriteFrame, n.type = this.node.getComponent(cc.Sprite).type, cc.find("Canvas/mateAndPkPanel/holder").active = !1, cc.find("Canvas/mateAndPkPanel/mateSprite").active = !1, cc.find("Canvas/mateAndPkPanel/light").active = !1, cc.find("Canvas/mateAndPkPanel/pingju").children[0].active = !1, cc.find("Canvas/mateAndPkPanel/pingju").children[1].active = !1, cc.find("Canvas/mateAndPkPanel/mateSprite").getComponent(cc.Sprite).spriteFrame = null, cc.find("Canvas/mateAndPkPanel/kuang1").getComponent(cc.Sprite).spriteFrame = this.failKuang, cc.find("Canvas/mateAndPkPanel/kuang2").getComponent(cc.Sprite).spriteFrame = this.failKuang, this.mateAndPkPanel.getChildByName("holder").getChildByName("shareVideoBtn").active = !1, "oppo" != o.channel && "vivo" != o.channel && "apk" != o.channel || (cc.find("Canvas/mateAndPkPanel/holder/shareBtn").active = !1);
					var a = cc.find("Canvas/person1"),
						s = cc.find("Canvas/person2");
					a.parent = this.mateAndPkPanel, a.position = cc.v3(-150, 50), s.parent = this.mateAndPkPanel, s.position = cc.v3(150, 50), a.setSiblingIndex(2), s.setSiblingIndex(3), 1 == this.choosePerson ? (this.sex_p1 = o.sceneType, this.personMsg_p1 = o.personMsg, this.targetThings_p1 = this.targetThings, this.afterParts_p1 = this.afterParts, this.levelArr1_p1 = this.levelArr1, this.levelArr2_p1 = this.levelArr2, this.dressupScore_p1 = this.dressupScore) : (this.sex_p2 = o.sceneType, this.personMsg_p2 = o.personMsg, this.targetThings_p2 = this.targetThings, this.afterParts_p2 = this.afterParts, this.levelArr1_p2 = this.levelArr1, this.levelArr2_p2 = this.levelArr2, this.dressupScore_p2 = this.dressupScore);
					var r, l = 0,
						h = i(this.dressupScore_p1);
					try {
						for (h.s(); !(r = h.n()).done;) {
							var d = r.value;
							l += d.score
						}
					} catch (e) {
						h.e(e)
					} finally {
						h.f()
					}
					var g, p = 0,
						u = i(this.dressupScore_p2);
					try {
						for (u.s(); !(g = u.n()).done;) {
							var m = g.value;
							p += m.score
						}
					} catch (e) {
						u.e(e)
					} finally {
						u.f()
					}
					l > p ? (a.setSiblingIndex(3), cc.find("Canvas/mateAndPkPanel/light").x = -150, cc.find("Canvas/mateAndPkPanel/particlesParent").x = -150) : l < p && (s.setSiblingIndex(3), cc.find("Canvas/mateAndPkPanel/light").x = 150, cc.find("Canvas/mateAndPkPanel/particlesParent").x = 150);
					var f = cc.find("Canvas/mateAndPkPanel/kuang1"),
						v = cc.find("Canvas/mateAndPkPanel/kuang2");
					if (o.isMateMode) {
						v.active = !1, f.active = !0, f.x = 0, f.y = 500, f.getComponentInChildren(cc.Label).string = 0, cc.winSize.height / cc.winSize.width < 1.5 && (f.y -= 70, cc.find("Canvas/mateAndPkPanel/mateSprite").y = 330);
						var S = Math.abs(100 - Math.abs(l - p)),
							C = 1,
							y = 0;
						(S = l < p ? l : p) < 10 ? (C = this.mateGrade0.length - 1, (y = Math.round(Math.random() * (C + 1 - 0)) + 0) > this.mateGrade0.length - 1 && (y = this.mateGrade0.length - 1), cc.find("Canvas/mateAndPkPanel/mateSprite").getComponent(cc.Sprite).spriteFrame = this.mateGrade0[y]) : S < 20 ? (C = this.mateGrade1.length - 1, (y = Math.round(Math.random() * (C + 1 - 0)) + 0) > this.mateGrade1.length - 1 && (y = this.mateGrade1.length - 1), cc.find("Canvas/mateAndPkPanel/mateSprite").getComponent(cc.Sprite).spriteFrame = this.mateGrade1[y]) : S < 30 ? (C = this.mateGrade2.length - 1, (y = Math.round(Math.random() * (C + 1 - 0)) + 0) > this.mateGrade2.length - 1 && (y = this.mateGrade2.length - 1), cc.find("Canvas/mateAndPkPanel/mateSprite").getComponent(cc.Sprite).spriteFrame = this.mateGrade2[y]) : S < 40 ? (C = this.mateGrade3.length - 1, (y = Math.round(Math.random() * (C + 1 - 0)) + 0) > this.mateGrade3.length - 1 && (y = this.mateGrade3.length - 1), cc.find("Canvas/mateAndPkPanel/mateSprite").getComponent(cc.Sprite).spriteFrame = this.mateGrade3[y]) : (C = this.mateGrade4.length - 1, (y = Math.round(Math.random() * (C + 1 - 0)) + 0) > this.mateGrade4.length - 1 && (y = this.mateGrade4.length - 1), cc.find("Canvas/mateAndPkPanel/mateSprite").getComponent(cc.Sprite).spriteFrame = this.mateGrade4[y]);
						var P = this;
						this.callBack = function() {
							var e = parseInt(f.getComponentInChildren(cc.Label).string);
							e == S ? (cc.find("Canvas/mateAndPkPanel/holder").active = !0, cc.find("Canvas/mateAndPkPanel/mateSprite").active = !0, P.unschedule(P.callBack)) : e < S && (f.getComponentInChildren(cc.Label).string = ++e)
						}, P.schedule(P.callBack, .015, cc.repeatForever, .5)
					} else {
						f.active = !0, f.x = -150, f.y = 400, f.getComponentInChildren(cc.Label).string = 0, v.active = !0, v.x = 150, v.y = 400, v.getComponentInChildren(cc.Label).string = 0, cc.winSize.height / cc.winSize.width < 1.5 && (f.y -= 50, v.y -= 50);
						var w = this;
						this.callBack = function() {
							var e = parseInt(f.getComponentInChildren(cc.Label).string),
								t = parseInt(v.getComponentInChildren(cc.Label).string);
							e == l && t == p ? (l > p ? (cc.find("Canvas/mateAndPkPanel/kuang1").getComponent(cc.Sprite).spriteFrame = w.winKuang, cc.find("Canvas/mateAndPkPanel/light").active = !0, w.scheduleOnce(function() {
								var e = cc.instantiate(w.winParticle);
								e.parent = cc.find("Canvas/mateAndPkPanel/particlesParent"), e.position = cc.v3(0, 0), cc.find("Canvas/mateAndPkPanel/holder").active = !0
							}, .2), w.scheduleOnce(function() {
								"tt" == o.channel && w.mateAndPkPanel.active ? (o.recorderFlag ? o.GetNowTime() - o.startRecordTime < 3e3 ? w.mateAndPkPanel.getChildByName("holder").getChildByName("shareVideoBtn").active = !1 : (o.pickId = 2, w.mateAndPkPanel.getChildByName("holder").getChildByName("shareVideoBtn").active = !0, w.mateAndPkPanel.getChildByName("holder").getChildByName("shareVideoBtn").getComponent(cc.Animation).play("scale"), o.recorder.stop()) : null != o.videoPath ? (w.mateAndPkPanel.getChildByName("holder").getChildByName("shareVideoBtn").active = !0, w.mateAndPkPanel.getChildByName("holder").getChildByName("shareVideoBtn").getComponent(cc.Animation).play("scale")) : w.mateAndPkPanel.getChildByName("holder").getChildByName("shareVideoBtn").active = !1, cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && "live_stream" == o.systemInfo.appName && (w.mateAndPkPanel.getChildByName("holder").getChildByName("shareBtn").active = !1)) : w.mateAndPkPanel.getChildByName("holder").getChildByName("shareVideoBtn").active = !1
							}, 1.2)) : l < p ? (cc.find("Canvas/mateAndPkPanel/kuang2").getComponent(cc.Sprite).spriteFrame = w.winKuang, cc.find("Canvas/mateAndPkPanel/light").active = !0, w.scheduleOnce(function() {
								var e = cc.instantiate(w.winParticle);
								e.parent = cc.find("Canvas/mateAndPkPanel/particlesParent"), e.position = cc.v3(0, 0), cc.find("Canvas/mateAndPkPanel/holder").active = !0
							}, .2), w.scheduleOnce(function() {
								"tt" == o.channel && w.mateAndPkPanel.active ? (o.recorderFlag ? o.GetNowTime() - o.startRecordTime < 3e3 ? w.mateAndPkPanel.getChildByName("holder").getChildByName("shareVideoBtn").active = !1 : (o.pickId = 2, w.mateAndPkPanel.getChildByName("holder").getChildByName("shareVideoBtn").active = !0, w.mateAndPkPanel.getChildByName("holder").getChildByName("shareVideoBtn").getComponent(cc.Animation).play("scale"), o.recorder.stop()) : null != o.videoPath ? (w.mateAndPkPanel.getChildByName("holder").getChildByName("shareVideoBtn").active = !0, w.mateAndPkPanel.getChildByName("holder").getChildByName("shareVideoBtn").getComponent(cc.Animation).play("scale")) : w.mateAndPkPanel.getChildByName("holder").getChildByName("shareVideoBtn").active = !1, cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && "live_stream" == o.systemInfo.appName && (w.mateAndPkPanel.getChildByName("holder").getChildByName("shareBtn").active = !1)) : w.mateAndPkPanel.getChildByName("holder").getChildByName("shareVideoBtn").active = !1
							}, 1.2)) : ("tt" == o.channel ? (o.recorderFlag ? o.GetNowTime() - o.startRecordTime < 3e3 ? w.mateAndPkPanel.getChildByName("holder").getChildByName("shareVideoBtn").active = !1 : (o.pickId = 2, w.mateAndPkPanel.getChildByName("holder").getChildByName("shareVideoBtn").active = !0, w.mateAndPkPanel.getChildByName("holder").getChildByName("shareVideoBtn").getComponent(cc.Animation).play("scale"), o.recorder.stop()) : null != o.videoPath ? (w.mateAndPkPanel.getChildByName("holder").getChildByName("shareVideoBtn").active = !0, w.mateAndPkPanel.getChildByName("holder").getChildByName("shareVideoBtn").getComponent(cc.Animation).play("scale")) : w.mateAndPkPanel.getChildByName("holder").getChildByName("shareVideoBtn").active = !1, cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && "live_stream" == o.systemInfo.appName && (w.mateAndPkPanel.getChildByName("holder").getChildByName("shareBtn").active = !1)) : w.mateAndPkPanel.getChildByName("holder").getChildByName("shareVideoBtn").active = !1, w.scheduleOnce(function() {
								cc.find("Canvas/mateAndPkPanel/pingju").getComponent(cc.Animation).play(), cc.find("Canvas/mateAndPkPanel/holder").active = !0
							}, .2)), w.unschedule(w.callBack)) : (e < l && (f.getComponentInChildren(cc.Label).string = ++e), t < p && (v.getComponentInChildren(cc.Label).string = ++t))
						}, w.schedule(w.callBack, .015, cc.repeatForever, .5)
					}
					this.mateAndPkPanel.active = !0
				}
			},
			BtnScreenShotByMate: function(e) {
				o.audioManager && o.audioManager.PlayPhotoSound(), e.target.getComponent(cc.Button).interactable = !1, cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && c.Event.stat("tt_savePkPic", {}), o.picData = null, o.shotImage = null, cc.find("Canvas/mateAndPkPanel/holder/closeBtn").getComponent(cc.Button).interactable = !1, cc.find("Canvas/mateAndPkPanel/holder/shareBtn").getComponent(cc.Button).interactable = !1, o.shotImage = o.ScreenShot(this.camera, this.targetNode);
				var t = this;
				t.schedule(function n() {
					null != o.shotImage && (e.target.getComponent(cc.Button).interactable = !0, cc.find("Canvas/mateAndPkPanel/holder/closeBtn").getComponent(cc.Button).interactable = !0, cc.find("Canvas/mateAndPkPanel/holder/shareBtn").getComponent(cc.Button).interactable = !0, cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os && "ios" == o.channel ? o.SaveImageToPhoto(this.SaveToPhotoSuc, this.HideScreenShotPanelBtn, this.ShowScreenShotPanelBtn) : o.SaveImageToPhoto(this.SaveToPhotoSuc), t.unschedule(n))
				}, .5, cc.repeatForever, .5)
			},
			ChangePersonTypeBtn: function(e) {
				o.audioManager && o.audioManager.PlayClickSound(), e.target.getComponent(cc.Button).interactable = !1, 1 == o.personType ? (this.SwitchMode(2), o.isMateMode = !1, o.personType = 2, o.isCreatePerson = 3) : (this.SwitchMode(1), o.personType = 1, o.isCreatePerson = 3, o.isCreatNewImageMsg = !0), cc.director.loadScene("GameScene")
			},
			showCallMsgPanel: function(e, t) {
				o.audioManager && o.audioManager.PlayClickSound(), e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
					e.target.getComponent(cc.Button).interactable = !0
				}, .3), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && c.Event.stat("tt_callpanelBtnClick", {}), o.ShowPanelHandle("callMsgPanel");
				var n = cc.sys.localStorage.getItem("showCallMsgTimes");
				null === n || void 0 === n || "" === n ? cc.sys.localStorage.setItem("showCallMsgTimes", 0) : parseInt(n) >= 1 && o.isHasAd && (this.callMsgPanel.getChildByName("bg").getChildByName("call").getChildByName("callBtn").children[0].active = !0), this.msgNum = 0, this.callMsgPanel.getChildByName("bg").getChildByName("show").getChildByName("btns").getChildByName("shareVideoBtn").active = !1, this.callMsgPanel.getChildByName("bg").getChildByName("show").getChildByName("light").active = !1, this.callMsgPanel.getChildByName("bg").getChildByName("call").active = !1, this.callMsgPanel.getChildByName("bg").getChildByName("show").active = !1, this.callMsgPanel.getChildByName("bg").getChildByName("call").getChildByName("person1").children[0].children[0].y = -300, this.callMsgPanel.getChildByName("bg").getChildByName("call").getChildByName("person2").children[0].children[0].y = -300;
				var i = this.callMsgPanel.getChildByName("bg").getChildByName("call").getChildByName("person1"),
					a = this.callMsgPanel.getChildByName("bg").getChildByName("call").getChildByName("person2");
				i.active = !1, a.active = !1, i.y = 0, a.y = 0, 1 == o.personType ? (i.x = 0, i.scale = 1, i.active = !0) : 2 == o.personType && (i.x = -110, a.x = 110, i.scale = .85, a.scale = .85, i.active = !0, a.active = !0), this.callMsgPanel.getChildByName("bg").getChildByName("call").active = !0, this.callMsgPanel.active = !0
			},
			InitCallMsg: function() {
				if (this.callMsg1 = {}, this.callMsg2 = {}, 1 == o.personType) {
					for (var e = Math.floor(2 * Math.random()), t = 0; t < this.images1.length; t++) {
						var n = this.images1[t];
						if ("t" != n[0].type && "u" != n[0].type)
							if (this.msgNum < 3 && ("f" == n[0].type || "g" == n[0].type || "h" == n[0].type || "i" == n[0].type || "j" == n[0].type || "k" == n[0].type || "l" == n[0].type || "m" == n[0].type || "n" == n[0].type || "o" == n[0].type || "p" == n[0].type || "q" == n[0].type || "r" == n[0].type || "s" == n[0].type)) this.callMsg1[o.girlItemName[t]] = null;
							else if (this.msgNum < 6 && ("m" == n[0].type || "n" == n[0].type || "r" == n[0].type || "s" == n[0].type || "o" == n[0].type || "p" == n[0].type || "q" == n[0].type)) this.callMsg1[o.girlItemName[t]] = null;
						else if (!(0 == e && "h" == n[0].type || 0 != e && ("f" == n[0].type || "g" == n[0].type) || 0 == Math.floor(2 * Math.random()) && "r" == n[0].type)) {
							var i = Math.floor(Math.random() * (n.length - 1));
							this.callMsg1[o.girlItemName[t]] = n[i].name
						}
					}
					this.callMsg1.sex = 1
				} else {
					for (var a = Math.floor(2 * Math.random()), s = 0; s < this.images1.length; s++) {
						var c = this.images1[s];
						if ("t" != c[0].type && "u" != c[0].type)
							if (this.msgNum < 3 && ("f" == c[0].type || "g" == c[0].type || "h" == c[0].type || "i" == c[0].type || "j" == c[0].type || "k" == c[0].type || "l" == c[0].type || "m" == c[0].type || "n" == c[0].type || "o" == c[0].type || "p" == c[0].type || "q" == c[0].type || "r" == c[0].type || "s" == c[0].type)) this.callMsg1[o.girlItemName[s]] = null;
							else if (this.msgNum < 6 && ("m" == c[0].type || "n" == c[0].type || "r" == c[0].type || "s" == c[0].type || "o" == c[0].type || "p" == c[0].type || "q" == c[0].type)) this.callMsg1[o.girlItemName[s]] = null;
						else if (!(0 == a && "h" == c[0].type || 0 != a && ("f" == c[0].type || "g" == c[0].type) || 0 == Math.floor(2 * Math.random()) && "r" == c[0].type)) {
							var r = Math.floor(Math.random() * (c.length - 1));
							this.callMsg1[o.girlItemName[s]] = c[r].name
						}
					}
					this.callMsg1.sex = 1, a = Math.floor(2 * Math.random());
					for (var l = 0; l < this.images1.length; l++) {
						var h = this.images1[l];
						if ("t" != h[0].type && "u" != h[0].type)
							if (this.msgNum < 3 && ("f" == h[0].type || "g" == h[0].type || "h" == h[0].type || "i" == h[0].type || "j" == h[0].type || "k" == h[0].type || "l" == h[0].type || "m" == h[0].type || "n" == h[0].type || "o" == h[0].type || "p" == h[0].type || "q" == h[0].type || "r" == h[0].type || "s" == h[0].type)) this.callMsg2[o.girlItemName[l]] = null;
							else if (this.msgNum < 6 && ("m" == h[0].type || "n" == h[0].type || "r" == h[0].type || "s" == h[0].type || "o" == h[0].type || "p" == h[0].type || "q" == h[0].type)) this.callMsg2[o.girlItemName[l]] = null;
						else if (!(0 == a && "h" == h[0].type || 0 != a && ("f" == h[0].type || "g" == h[0].type) || 0 == Math.floor(2 * Math.random()) && "r" == h[0].type)) {
							var d = Math.floor(Math.random() * (h.length - 1));
							this.callMsg2[o.girlItemName[l]] = h[d].name
						}
					}
					this.callMsg2.sex = 1
				}
			},
			onCallBtnEvent: function(e, t) {
				e && (o.audioManager && o.audioManager.PlayClickSound(), e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
					e.target.getComponent(cc.Button).interactable = !0
				}, .3)), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && c.Event.stat("tt_showCallMsgBtn", {});
				var n = parseInt(cc.sys.localStorage.getItem("showCallMsgTimes"));
				if (n >= 1) {
					if (!o.isHasAd) return cc.sys.localStorage.setItem("showCallMsgTimes", n), void this.onCallSuccess();
					o.adsManager.lockType = 4, o.adsManager.ShowVideo()
				} else n++, cc.sys.localStorage.setItem("showCallMsgTimes", n), this.onCallSuccess()
			},
			onCallSuccess: function() {
				cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && c.Event.stat("tt_onCallSuccess", {
					msgnum: this.msgNum.toString()
				});
				var e, t = i(this.callMsgPanel.getChildByName("bg").getChildByName("call").getChildByName("add").children);
				try {
					for (t.s(); !(e = t.n()).done;) {
						var n = e.value;
						cc.Tween.stopAllByTarget(n), n.angle = 0, n.position = n.getComponent("addBottleItem").pos0, n.getComponent(cc.Button).interactable = !0
					}
				} catch (e) {
					t.e(e)
				} finally {
					t.f()
				}
				var a, s = i(this.callMsgPanel.getChildByName("bg").getChildByName("call").getChildByName("drops").children);
				try {
					for (s.s(); !(a = s.n()).done;) {
						var r = a.value;
						this.dropPool && this.dropPool.put(r)
					}
				} catch (e) {
					s.e(e)
				} finally {
					s.f()
				}
				this.callMsgPanel.getChildByName("bg").getChildByName("call").active = !1, 2 == o.personType && (1 == this.choosePerson ? (this.sex_p1 = o.sceneType, this.personMsg_p1 = o.personMsg, this.targetThings_p1 = this.targetThings, this.afterParts_p1 = this.afterParts, this.levelArr_p1 = this.levelArr, this.dressupScore_p1 = this.dressupScore) : 2 == this.choosePerson && (this.sex_p2 = o.sceneType, this.personMsg_p2 = o.personMsg, this.targetThings_p2 = this.targetThings, this.afterParts_p2 = this.afterParts, this.levelArr_p2 = this.levelArr, this.dressupScore_p2 = this.dressupScore)), this.InitCallMsg();
				var l = this.callMsgPanel.getChildByName("bg").getChildByName("show").getChildByName("person1"),
					h = this.callMsgPanel.getChildByName("bg").getChildByName("show").getChildByName("person2");
				if (l.active = !1, h.active = !1, cc.Tween.stopAllByTarget(l), cc.Tween.stopAllByTarget(h), l.opacity = 0, h.opacity = 0, 1 == o.personType) {
					l.x = 0, l.y = 20, l.active = !0;
					for (var d = o.sceneType, g = new Array, p = new Array, u = new Array, m = l.children, f = 0; f < m.length; f++)
						if ("body" == m[f].name) m[f].getComponent(cc.Sprite).spriteFrame = this.girlFrame, g.push(m[f]);
						else if ("hairAfter" == m[f].name) p[0] = m[f];
					else if ("dressAfter" == m[f].name) p[1] = m[f];
					else if ("headwearAfter" == m[f].name) p[2] = m[f];
					else {
						if ("TT_TrueFace" == m[f].name) continue;
						if ("level" == m[f].name)
							for (var v = m[f].children, S = 0; S < v.length; S++) u[S] = v[S], g.push(v[S]);
						else g.push(m[f])
					}
					g = o.SortByArray(g, d), o.InitPerson(this.callMsg1, g, p), o.LevelHandle(u, this.callMsg1.level, 0), o.InitPersonPos(d, g, p)
				} else {
					l.x = -120, h.x = 120, l.y = 20, h.y = 20, l.active = !0, h.active = !0;
					for (var C = o.sceneType, y = new Array, P = new Array, w = new Array, I = l.children, N = 0; N < I.length; N++)
						if ("body" == I[N].name) I[N].getComponent(cc.Sprite).spriteFrame = this.girlFrame, y.push(I[N]);
						else if ("hairAfter" == I[N].name) P[0] = I[N];
					else if ("dressAfter" == I[N].name) P[1] = I[N];
					else if ("headwearAfter" == I[N].name) P[2] = I[N];
					else {
						if ("TT_TrueFace" == I[N].name) continue;
						if ("level" == I[N].name)
							for (var B = I[N].children, M = 0; M < B.length; M++) w[M] = B[M], y.push(B[M]);
						else y.push(I[N])
					}
					y = o.SortByArray(y, C), o.InitPerson(this.callMsg1, y, P), o.LevelHandle(w, this.callMsg1.level, 0), o.InitPersonPos(C, y, P);
					var T = o.sceneType,
						b = new Array,
						k = new Array,
						A = new Array;
					I = h.children;
					for (var x = 0; x < I.length; x++)
						if ("body" == I[x].name) I[x].getComponent(cc.Sprite).spriteFrame = this.girlFrame, b.push(I[x]);
						else if ("hairAfter" == I[x].name) k[0] = I[x];
					else if ("dressAfter" == I[x].name) k[1] = I[x];
					else if ("headwearAfter" == I[x].name) k[2] = I[x];
					else {
						if ("TT_TrueFace" == I[x].name) continue;
						if ("level" == I[x].name)
							for (var R = I[x].children, F = 0; F < R.length; F++) A[F] = R[F], b.push(R[F]);
						else b.push(I[x])
					}
					b = o.SortByArray(b, T), o.InitPerson(this.callMsg2, b, k), o.LevelHandle(A, this.callMsg2.level, 0), o.InitPersonPos(T, b, k)
				}
				this.callMsgPanel.getChildByName("bg").getChildByName("show").active = !0;
				var O = this;
				cc.tween(l).to(1.5, {
					opacity: 255
				}, {
					easing: "quadIn"
				}).call(function() {
					O.callMsgPanel.getChildByName("bg").getChildByName("show").getChildByName("light").active = !0
				}).start(), cc.tween(h).to(1.5, {
					opacity: 255
				}, {
					easing: "quadIn"
				}).start(), cc.tween(this.node).delay(2).call(function() {
					O.showVideoBtnByCall()
				}).start()
			},
			showVideoBtnByCall: function() {
				"tt" == o.channel && (o.recorderFlag ? o.GetNowTime() - o.startRecordTime < 3e3 ? this.callMsgPanel.getChildByName("bg").getChildByName("show").getChildByName("btns").getChildByName("shareVideoBtn").active = !1 : (o.pickId = 2, this.callMsgPanel.getChildByName("bg").getChildByName("show").getChildByName("btns").getChildByName("shareVideoBtn").active = !0, o.recorder.stop()) : null != o.videoPath ? this.callMsgPanel.getChildByName("bg").getChildByName("show").getChildByName("btns").getChildByName("shareVideoBtn").active = !0 : this.callMsgPanel.getChildByName("bg").getChildByName("show").getChildByName("btns").getChildByName("shareVideoBtn").active = !1)
			},
			onDressupBtnForCallEvent: function(e, t) {
				o.audioManager && o.audioManager.PlayClickSound(), e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
					e.target.getComponent(cc.Button).interactable = !0
				}, .3), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && c.Event.stat("tt_DressupCallMsgBtn", {}), this.DressupCallMsg()
			},
			DressupCallMsg: function() {
				if (cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && c.Event.stat("tt_DressupCallMsgSuccess", {
						msgnum: this.msgNum.toString()
					}), 1 == o.personType) o.personMsg = this.callMsg1, o.InitPerson(this.callMsg1, this.targetThings, this.afterParts), o.InitPersonPos(o.sceneType, this.targetThings, this.afterParts);
				else if (2 == o.personType) {
					this.personMsg_p1 = this.callMsg1, o.InitPerson(this.callMsg1, this.targetThings_p1, this.afterParts_p1), o.InitPersonPos(this.sex_p1, this.targetThings_p1, this.afterParts_p1), this.dressupScore_p1 = new Array;
					for (var e = 0, t = Object.keys(this.personMsg_p1); e < t.length; e++) {
						var n = t[e],
							i = o.girlItemName.indexOf(n);
						if (-1 != i) {
							var a = {
								name: String.fromCharCode("a".charCodeAt() + i),
								score: o.getPartScore(n, !0)
							};
							this.dressupScore_p1.push(a)
						}
					}
					this.personMsg_p2 = this.callMsg2, o.InitPerson(this.callMsg2, this.targetThings_p2, this.afterParts_p2), o.InitPersonPos(this.sex_p2, this.targetThings_p2, this.afterParts_p2), this.dressupScore_p2 = new Array;
					for (var s = 0, r = Object.keys(this.personMsg_p2); s < r.length; s++) {
						var l = r[s],
							h = o.girlItemName.indexOf(l);
						if (-1 != h) {
							var d = {
								name: String.fromCharCode("a".charCodeAt() + h),
								score: o.getPartScore(l, !0)
							};
							this.dressupScore_p2.push(d)
						}
					}
					1 == this.choosePerson ? (o.sceneType = this.sex_p1, o.personMsg = this.personMsg_p1, this.targetThings = this.targetThings_p1, this.afterParts = this.afterParts_p1, this.levelArr = this.levelArr_p1, this.dressupScore = this.dressupScore_p1) : 2 == this.choosePerson && (o.sceneType = this.sex_p2, o.personMsg = this.personMsg_p2, this.targetThings = this.targetThings_p2, this.afterParts = this.afterParts_p2, this.levelArr = this.levelArr_p2, this.dressupScore = this.dressupScore_p2)
				}
				for (var g = 0; g < this.selectName.length; g++)
					if (g == o.girlItemName.length - 1) {
						var p = o.personMsg[o.girlItemName[g]];
						this.selectName[g + 1] = p ? p.substr(0, p.length - 2) : 0
					} else {
						if (g == this.selectName.length - 1) continue;
						var u = o.personMsg[o.girlItemName[g]];
						this.selectName[g] = u ? u.substr(0, u.length - 2) : 0
					} cc.Tween.stopAllByTarget(this.node), o.HidePanelHandle("callMsgPanel"), this.callMsgPanel.active = !1
			},
			addMsgNum: function(e) {
				this.dropPool && this.dropPool.put(e), this.msgNum < 6 && this.msgNum++;
				var t = this.callMsgPanel.getChildByName("bg").getChildByName("call").getChildByName("person1").children[0].children[0],
					n = this.callMsgPanel.getChildByName("bg").getChildByName("call").getChildByName("person2").children[0].children[0];
				1 == o.personType ? t.y += 100 : (t.y += 100, n.y += 100)
			},
			showSetting: function() {
				cc.find("Canvas/topHolder/left/setBtn").getComponent(cc.Animation).play("settingShow")
			},
			HideSetting: function() {
				cc.find("Canvas/topHolder/left/setBtn").getComponent(cc.Animation).play("settingHide")
			},
			SwitchMode: function(e) {
				cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && (1 == e ? c.Event.stat("tt_SingleMode", {}) : c.Event.stat("tt_doubleMode", {}))
			},
			SetGiftTimer: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				if (!(0 == o.isHasAd || 3 == o.showGiftNum || o.giftMsg.length <= parseInt(o.giftSets))) {
					var t = 60;
					0 == e && (t = 60 - Math.floor((o.GetNowTime() - o.giftTime) / 1e3)), t = Math.max(t, .1), this.scheduleOnce(function() {
						this.giftPanel.active = !0
					}.bind(this), t)
				}
			},
			UpdateRecordBtn: function() {
				o.recorderFlag ? this.record.spriteFrame = this.recording : this.record.spriteFrame = this.recordStop
			},
			RecordFail: function() {
				o.curScene.generalRemind.active = !0, o.curScene.generalRemind.getComponent("GeneralRemind").InitPanel(1), o.ShowPanelHandle()
			},
			BtnRecorderClick: function() {
				o.audioManager && o.audioManager.PlayClickSound(), o.RecordHandle(this.StatisticsRecord, this.RecordFail)
			},
			StatisticsRecord: function(e) {
				0 == e ? cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && c.Event.stat("ttgirlrecordstart", {}) : cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && c.Event.stat("ttgirlrecordend", {})
			},
			InitPanelMsg: function() {
				if (o.imageMsg = o.GetImageMsg(), o.imageMsg && o.imageMsg.length > 1) {
					var e = o.GetItemLockFlag("first");
					if (null == e || "" == e) {
						for (var t = new Array, n = 0; n < o.imageMsg.length; n++) t[n] = o.imageMsg[o.imageMsg.length - 1 - n];
						o.imageMsg = t, o.SetImageMsg(), o.SetItemLockFlag("first", 1)
					}
				}
				1 == o.isCreatePerson ? o.personMsg = o.CopyObjectValue(o.defaultGirlDressUp) : 2 == o.isCreatePerson ? o.personMsg = o.CopyObjectValue(o.defaultBoyDressUp) : 0 == o.isCreatePerson ? o.personMsg = o.CopyObjectValue(o.imageMsg[o.curEditImageIndex]) : 3 == o.isCreatePerson && (o.isCreatePerson = 0), o.sceneType = o.personMsg.sex, 1 == o.sceneType ? (o.itemName = o.CopyArrValue(o.girlItemName), o.defaultDressUp = o.CopyObjectValue(o.defaultGirlDressUp)) : 2 == o.sceneType && (o.itemName = o.CopyArrValue(o.boyItemName), o.defaultDressUp = o.CopyObjectValue(o.defaultBoyDressUp))
			},
			LoadResources: function() {
				var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
				if (o.isTest && (e = !1), "qq" == o.channel && void 0 == o.boxTimes) {
					var t = o.serverPath + "qq/" + o.configName;
					cc.loader.load(t, function(e, t) {
						e ? console.log(e) : (o.isSupportBox = t.isSupportBox, o.boxTimes = t.boxTimes)
					})
				}
				if ("tt" == o.channel && void 0 == o.topics1) {
					var n = o.serverPath + "tt/config.json";
					cc.loader.load(n, function(e, t) {
						e ? console.log(e) : (o.topics1 = t.topics1, o.topics2 = t.topics2, o.limitedFlag = t.limitedFlag, o.adsManager.isRealUnlock = t.realUnlock)
					})
				}
				if (void 0 == o.star && cc.loader.loadRes("star", cc.Prefab, function(e, t) {
						e ? console.log(e) : o.star = t
					}), cc.loader.loadRes("firstItem/girl", cc.SpriteAtlas, function(e, t) {
						if (e) console.log(e);
						else {
							var n = t.getSpriteFrames();
							this.firstFrames = o.SortArray(n, 0), this.images1.length > 0 && this.images2.length > 0 && (this.firstScrollView.content.getComponent("FirstItemRemark").InitScrollView(n), this.itemRemark1.LoadData(this.images1[0]))
						}
					}.bind(this)), 1 == e) {
					var i = "girl/girl.json";
					if ("apk" == o.channel) {
						var a = this,
							s = new XMLHttpRequest;
						s.onreadystatechange = function() {
							try {
								if (4 == s.readyState && s.status >= 200 && s.status < 400) {
									var e = s.responseText,
										t = JSON.parse(e).list;
									1 == o.sceneType ? o.curType = "a" : 2 == o.sceneType && (o.curType = "A");
									for (var n = 0; n < t.length; n++) {
										var i = t[n].type.charCodeAt() - o.curType.charCodeAt();
										void 0 == a.images1[i] && (a.images1[i] = new Array), void 0 == a.images2[i] && (a.images2[i] = new Array), a.images1[i].push(t[n])
									}
									for (var c = "t".charCodeAt() - o.curType.charCodeAt(), r = 0; r < o.imageColor.length; r++) {
										void 0 == a.images1[c] && (a.images1[c] = new Array), void 0 == a.images2[c] && (a.images2[c] = new Array);
										o.imageColor[r].name.substr(o.imageColor[r].name.length - 1, 1);
										var l = o.CopyObjectValue(o.imageColor[r]);
										l.type = "t", a.images1[c].push(l)
									}
									a.PickUpShopFreeMsg(), a.firstFrames && (a.firstScrollView.content.getComponent("FirstItemRemark").InitScrollView(a.firstFrames), a.itemRemark1.LoadData(a.images1[0]))
								}
							} catch (e) {}
						}, s.open("GET", i, !0), s.send()
					} else cc.loader.load(i, function(e, t) {
						if (e) console.log(e);
						else {
							var n = t.list;
							1 == o.sceneType ? o.curType = "a" : 2 == o.sceneType && (o.curType = "A");
							for (var i = 0; i < n.length; i++) {
								var a = n[i].type.charCodeAt() - o.curType.charCodeAt();
								void 0 == this.images1[a] && (this.images1[a] = new Array), void 0 == this.images2[a] && (this.images2[a] = new Array), this.images1[a].push(n[i])
							}
							for (var s = "t".charCodeAt() - o.curType.charCodeAt(), c = 0; c < o.imageColor.length; c++) {
								void 0 == this.images1[s] && (this.images1[s] = new Array), void 0 == this.images2[s] && (this.images2[s] = new Array);
								o.imageColor[c].name.substr(o.imageColor[c].name.length - 1, 1);
								var r = o.CopyObjectValue(o.imageColor[c]);
								r.type = "t", this.images1[s].push(r)
							}
							this.PickUpShopFreeMsg(), this.firstFrames && (this.firstScrollView.content.getComponent("FirstItemRemark").InitScrollView(this.firstFrames), this.itemRemark1.LoadData(this.images1[0]))
						}
					}.bind(this));
					if (null == o.otherGirlMsg) {
						//var c = o.serverPath + "other/girl/otherMsg.json";
						var c = "other/girl/otherMsg.json";
						if ("apk" == o.channel) {
							var r = new XMLHttpRequest;
							r.onreadystatechange = function() {
								try {
									if (4 == r.readyState && r.status >= 200 && r.status < 400) {
										var e = r.responseText;
										o.otherGirlMsg = JSON.parse(e), o.otherMsg = o.CopyObjectValue(o.otherGirlMsg), o.InitPerson(o.personMsg, this.targetThings, this.afterParts)
									}
								} catch (e) {}
							}, r.open("GET", c, !0), r.send()
						} else cc.loader.load(c, function(e, t) {
							e ? console.log(e) : (o.otherGirlMsg = t, o.otherMsg = o.CopyObjectValue(o.otherGirlMsg), o.InitPerson(o.personMsg, this.targetThings, this.afterParts))
						}.bind(this))
					} else o.otherMsg = o.CopyObjectValue(o.otherGirlMsg), o.InitPerson(o.personMsg, this.targetThings, this.afterParts)
				} else cc.loader.loadRes("girl/girl", function(e, t) {
					if (e) console.log(e);
					else {
						var n = t.json.list;
						1 == o.sceneType ? o.curType = "a" : 2 == o.sceneType && (o.curType = "A");
						for (var i = 0; i < n.length; i++) {
							var a = n[i].type.charCodeAt() - o.curType.charCodeAt();
							void 0 == this.images1[a] && (this.images1[a] = new Array), void 0 == this.images2[a] && (this.images2[a] = new Array), this.images1[a].push(n[i])
						}
						for (var s = "t".charCodeAt() - o.curType.charCodeAt(), c = 0; c < o.imageColor.length; c++) {
							void 0 == this.images1[s] && (this.images1[s] = new Array), void 0 == this.images2[s] && (this.images2[s] = new Array);
							o.imageColor[c].name.substr(o.imageColor[c].name.length - 1, 1);
							var r = o.CopyObjectValue(o.imageColor[c]);
							r.type = "t", this.images1[s].push(r)
						}
						this.PickUpShopFreeMsg(), this.firstFrames && (this.firstScrollView.content.getComponent("FirstItemRemark").InitScrollView(this.firstFrames), this.itemRemark1.LoadData(this.images1[0]))
					}
				}.bind(this)), null == o.otherGirlMsg ? cc.loader.loadRes("other/girl/otherMsg", function(e, t) {
					e ? console.log(e) : (o.otherGirlMsg = t.json, o.otherMsg = o.CopyObjectValue(o.otherGirlMsg), o.InitPerson(o.personMsg, this.targetThings, this.afterParts))
				}.bind(this)) : (o.otherMsg = o.CopyObjectValue(o.otherGirlMsg), o.InitPerson(o.personMsg, this.targetThings, this.afterParts))
			},
			LoadBg: function() {
				if (0 == o.curBgName) 1 == o.imageMode ? (this.node.getComponent(cc.Sprite).type = cc.Sprite.Type.SIMPLE, this.node.getComponent(cc.Sprite).spriteFrame = this.defaultBgGame, this.node.color = cc.Color.WHITE) : this.node.getComponent(cc.Sprite).spriteFrame = null;
				else {
					var e = o.curBgName.split("&");
					e[0].substr(e[0].length - 1, 1);
					if (-1 != e[0].indexOf("#")) {
						var t = cc.Color.WHITE;
						this.node.getComponent(cc.Sprite).spriteFrame = this.defaultBg, this.node.color = t.fromHEX(e[0].toString())
					} else this.node.color = cc.Color.WHITE, this.node.getComponent(cc.Sprite).spriteFrame = o.bgFrame;
					2 == e.length && 1 == e[1] || 3 == e.length && 1 == e[2] ? o.curScene.node.getComponent(cc.Sprite).type = cc.Sprite.Type.TILED : o.curScene.node.getComponent(cc.Sprite).type = cc.Sprite.Type.SIMPLE
				}
			},
			ShowLimitedPanel: function(e) {
				o.audioManager && o.audioManager.PlayClickSound();
				var t = 0;
				if (void 0 == e && 0 == o.isAutoShow) {
					for (; t < o.setMsg.length; t++) {
						var n = o.setMsg[t],
							i = n.index;
						if (n = o.shopMsg[i], !(o.GetItemLockFlag(n.name) >= n.videoNum)) break
					}
					this.limitedSetPanel.getComponent("LimitedSetPanel").isAutoShow = !0
				} else this.limitedSetPanel.getComponent("LimitedSetPanel").isAutoShow = !1;
				t < o.setMsg.length && (this.limitedSetPanel.getComponent("LimitedSetPanel").curIndex = t, this.limitedSetPanel.active = !0, o.ShowPanelHandle("limitedPanel"), cc.sys.platform != cc.sys.DESKTOP_BROWSER && e && "tt" == o.channel && c.Event.stat("ttlimitedset", {}))
			},
			PickUpShopFreeMsg: function() {
				for (var e = o.signMsg[0].name.substr(o.signMsg[0].name.length - 1, 1), t = 0; t < 7; t++) this.UpdateThingMsg(o.signMsg[0].gifts[t], e, !1);
				for (var n = 0; n <= o.giftSets && n < o.giftMsg.length; n++) {
					var i, a = o.giftMsg[n].name.substr(o.giftMsg[n].name.length - 1, 1);
					i = o.giftMsg[n].gifts.length;
					for (var s = 0; s < i; s++) this.UpdateThingMsg(o.giftMsg[n].gifts[s], a, !1)
				}
				for (var c = o.shopMsg.length - 1; c >= 0; c--) {
					if (o.GetItemLockFlag(o.shopMsg[c].name) >= o.shopMsg[c].videoNum) {
						var r = o.shopMsg[c].name.substr(o.shopMsg[c].name.length - 1, 1);
						this.UpdateThingMsg(o.shopMsg[c], r, !1)
					}
				}
			},
			SimplifyPersonMsg: function() {
				for (var e in o.personMsg) null == o.personMsg[e] && delete o.personMsg[e]
			},
			SaveHistoryMsg: function() {
				this.SimplifyPersonMsg(), o.SetPersonMsg(o.sceneType)
			},
			SynPersonMsg: function(e, t, n, i, a) {
				for (var s = 0; s < t.length; s++)
					if (0 == s || 4 == s || 5 == s)
						for (var c = t[s].children, r = n[s].children, l = 0; l < c.length; l++) r[l].getComponent(cc.Sprite).spriteFrame = c[l].getComponent(cc.Sprite).spriteFrame, r[l].color = c[l].color;
					else if (16 == s)
					for (var h = t[s].children, d = n[s].children, g = 0; g < h.length; g++) d[g].color = h[g].color;
				else t[s].getComponent(cc.Sprite) && (n[s].getComponent(cc.Sprite).spriteFrame = t[s].getComponent(cc.Sprite).spriteFrame);
				i ? (o.imageMsg[e] = o.CopyObjectValue(o.personMsg), a.getComponent(cc.Sprite).spriteFrame = this.hand.getComponent(cc.Sprite).spriteFrame) : (o.personMsg = o.CopyObjectValue(o.imageMsg[e]), this.hand.getComponent(cc.Sprite).spriteFrame = a.getComponent(cc.Sprite).spriteFrame)
			},
			BtnImageClick: function(e) {
				0 != this.curInnerType && (o.audioManager && o.audioManager.PlayClickSound(), this.firstScrollView.content.children[this.curInnerType - 1].getComponent("FirstItem").selectNode.active = !1, this.curInnerType = 0, o.curType = 0, e.target.children[0].active = !0, this.secondScrollView1.node.active = !1, this.imageScrollView.node.active = !0)
			},
			BtnSaveToImage: function() {
				var e = this.imageItemRemark.curIndex,
					t = this.imageItemRemark.node.children[e].getComponent("ImageItem").person.getComponent("Person");
				this.SynPersonMsg(e, this.targetThings, t.targetThings, !0, t.hand)
			},
			ShowSetPanel: function() {
				this.limitedSetPanel.active = !0
			},
			BtnClosePanel: function(e) {
				if (o.audioManager && o.audioManager.PlayClickSound(), 0 == this.saveScreenShotPanel.active ? o.HidePanelHandle(e.target.parent.name) : (this.person.y = this.startPosY, 2 == o.personType && (cc.find("Canvas/person1").y = this.startPosY, cc.find("Canvas/person2").y = this.startPosY), this.saveScreenShotPanel.getChildByName("shareVideoBtn").getComponent(cc.Animation).stop("scale"), this.saveScreenShotPanel.getChildByName("shareBtn1").active && this.saveScreenShotPanel.getChildByName("shareBtn1").getComponent(cc.Animation).stop("scale")), "holder" == e.target.parent.name) {
					if (2 == o.personType && "mateAndPkPanel" == e.target.parent.parent.name) {
						cc.find("Canvas/mateAndPkPanel/particlesParent").destroyAllChildren();
						var t = cc.find("Canvas/mateAndPkPanel/person1"),
							n = cc.find("Canvas/mateAndPkPanel/person2");
						t.parent = cc.find("Canvas"), t.position = cc.v3(-150, this.startPosY), n.parent = cc.find("Canvas"), n.position = cc.v3(150, this.startPosY), t.setSiblingIndex(5), n.setSiblingIndex(6), 1 == this.choosePerson && t.setSiblingIndex(6)
					}
					e.target.parent.parent.active = !1
				} else if ("callMsgPanel" == e.target.parent.name) {
					var a, s = i(this.callMsgPanel.getChildByName("bg").getChildByName("call").getChildByName("add").children);
					try {
						for (s.s(); !(a = s.n()).done;) {
							var c = a.value;
							cc.Tween.stopAllByTarget(c), c.angle = 0, c.position = c.getComponent("addBottleItem").pos0, c.getComponent(cc.Button).interactable = !0
						}
					} catch (e) {
						s.e(e)
					} finally {
						s.f()
					}
					var r, l = i(this.callMsgPanel.getChildByName("bg").getChildByName("call").getChildByName("drops").children);
					try {
						for (l.s(); !(r = l.n()).done;) {
							var h = r.value;
							this.dropPool && this.dropPool.put(h)
						}
					} catch (e) {
						l.e(e)
					} finally {
						l.f()
					}
					cc.Tween.stopAllByTarget(this.node), e.target.parent.active = !1
				} else e.target.parent.active = !1
			},
			UpdatePersonMsg: function(e, t, n, a, s, c, r) {
				var l = !1,
					h = [],
					d = "a";
				2 == o.sceneType && (d = "A");
				var g = "",
					p = t.charCodeAt() - d.charCodeAt();
				0 == e && (l = !0);
				var u = !0;
				if ("e" == t || "h" == t || "n" == t) {
					var m = !1,
						f = 0;
					"e" == t ? (g = "other/girl/hair/", h = o.otherMsg.hair) : "h" == t ? (m = !0, f = 1, g = "other/girl/dress/", h = o.otherMsg.dress) : "n" == t && (m = !0, f = 2, g = "other/girl/headwear/", h = o.otherMsg.headwear);
					var v = o.IsHasSecondLayer(h, s);
					0 == m && v >= 0 || m && -1 == v ? this.afterParts[f].getComponent(cc.Sprite).spriteFrame = null : l ? this.afterParts[f].getComponent(cc.Sprite).spriteFrame = null : (m && "0" == h[v].toString().substr(0, 1) && (u = !1), g += s, 0 == a ? o.LoadOneImage(!0, g, this.afterParts[f]) : (g = o.serverPath + g + ".png", o.LoadOneImage(!1, g, this.afterParts[f])))
				}
				if (0 != a && (e = 3), 0 == e) o.personMsg[o.itemName[p]] = null, l = !0, this.targetThings[p].getComponent(cc.Sprite).spriteFrame = null, this.UpdateUnderwear(t, !0);
				else if (1 == e) u ? (this.targetThings[p].getComponent(cc.Sprite).spriteFrame = n, this.UpdateUnderwear(t, !1)) : (this.targetThings[p].getComponent(cc.Sprite).spriteFrame = null, this.UpdateUnderwear(t, !0));
				else if (2 == e || 3 == e)
					if (u) {
						var S = o.GetPathByType(t);
						0 == a ? (g = S + s, "u" == t && (p -= 1), o.LoadOneImage(!0, g, this.targetThings[p])) : (g = S + s + ".png", "u" == t && (p -= 1), o.LoadOneImage(!1, g, this.targetThings[p])), this.UpdateUnderwear(t, !1)
					} else this.targetThings[p].getComponent(cc.Sprite).spriteFrame = null;
				if (l) {
					var C = t.charCodeAt() - d.charCodeAt();
					if ("u" == t && (C -= 1), o.personMsg[o.itemName[C]] = null, 2 == o.personType) {
						var y, P = i(this.dressupScore);
						try {
							for (P.s(); !(y = P.n()).done;) {
								var w = y.value;
								if (w.name == t) {
									w.score = 0;
									break
								}
							}
						} catch (e) {
							P.e(e)
						} finally {
							P.f()
						}
					}
				} else {
					var I = t.charCodeAt() - d.charCodeAt();
					"u" == t && (I -= 1);
					var N = s + a + (0 == c || 2 == c ? 0 : 1);
					if (o.personMsg[o.itemName[I]] = N, 2 == o.personType && r) {
						var B, M = !1,
							T = i(this.dressupScore);
						try {
							for (T.s(); !(B = T.n()).done;) {
								var b = B.value;
								if (b.name == t) {
									b.score = r, M = !0;
									break
								}
							}
						} catch (e) {
							T.e(e)
						} finally {
							T.f()
						}
						if (!M) {
							var k = {
								name: t,
								score: r
							};
							this.dressupScore.push(k)
						}
					}
				}
			},
			UpdateUnderwear: function(e, t) {
				"f" != e && "h" != e || (this.person.getChildByName("default1").active = 1 == t), "g" != e && "h" != e || (this.person.getChildByName("default2").active = 1 == t)
			},
			BtnHomeClick: function(e) {
				if (o.audioManager && o.audioManager.PlayClickSound(), 2 == o.personType) return e.target.getComponent(cc.Button).interactable = !1, void cc.director.loadScene("DecorationScene");
				var t = !0;
				if (0 != o.isCreatePerson || o.isCreatNewImageMsg) t = !1;
				else {
					for (var n in this.SimplifyPersonMsg(), o.personMsg)
						if ("lock" != n && o.personMsg[n] != o.imageMsg[o.curEditImageIndex][n]) {
							t = !1;
							break
						} if (t)
						for (var n in o.imageMsg[o.curEditImageIndex])
							if ("lock" != n && (void 0 == o.personMsg[n] || null == o.personMsg[n])) {
								t = !1;
								break
							}
				}
				t ? (e.target.getComponent(cc.Button).interactable = !1, cc.director.loadScene("DecorationScene")) : (this.saveDressUpPanel.active = !0, o.ShowPanelHandle("saveDressup")), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && c.Event.stat("ttback", {})
			},
			BtnCatClick: function(e) {
				if (o.audioManager && o.audioManager.PlayClickSound(), 2 == o.personType) return e.target.getComponent(cc.Button).interactable = !1, void cc.director.loadScene("GameSceneCat");
				var t = !0;
				if (0 != o.isCreatePerson || o.isCreatNewImageMsg) t = !1;
				else {
					for (var n in this.SimplifyPersonMsg(), o.personMsg)
						if ("lock" != n && o.personMsg[n] != o.imageMsg[o.curEditImageIndex][n]) {
							t = !1;
							break
						} if (t)
						for (var n in o.imageMsg[o.curEditImageIndex])
							if ("lock" != n && (void 0 == o.personMsg[n] || null == o.personMsg[n])) {
								t = !1;
								break
							}
				}
				t ? (cc.sys.platform != cc.sys.DESKTOP_BROWSER && ("tt" == o.channel ? c.Event.stat("ttentercat_game", {}) : "qq" == o.channel ? c.Event.stat("qqentercat_game", {}) : "wx" == o.channel && c.Event.stat("wxentercat_game", {})), e.target.getComponent(cc.Button).interactable = !1, cc.director.loadScene("GameSceneCat")) : (this.saveDressUpPanel.getChildByName("noBtn2").active = !0, this.saveDressUpPanel.getChildByName("okBtn2").active = !0, this.saveDressUpPanel.active = !0, o.ShowPanelHandle("saveDressup"))
			},
			BtnSaveDressUpHandle: function(e, t) {
				if (o.audioManager && o.audioManager.PlayClickSound(), 0 != t && (e.target.getComponent(cc.Button).interactable = !1), 0 == t || 1 == t || 3 == t) {
					if (this.SimplifyPersonMsg(), 0 != o.isCreatePerson || o.isCreatNewImageMsg) {
						o.isCreatNewImageMsg = !1;
						var n = o.CopyObjectValue(o.personMsg);
						null == o.imageMsg && (o.imageMsg = []), o.imageMsg.length >= 2 ? n.lock = 1 : n.lock = 0, o.imageMsg.splice(0, 0, n), o.isCreatePerson = 0, o.curEditImageIndex = 0
					} else {
						var i = o.CopyObjectValue(o.personMsg);
						i.lock = o.imageMsg[o.curEditImageIndex].lock, o.imageMsg[o.curEditImageIndex] = i
					}
					o.SetImageMsg(), 0 == t && cc.find("Canvas/topHolder/left/homeBtn").getComponent(cc.Animation).play("shake1")
				}
				0 != t ? 3 == t || 4 == t ? (cc.sys.platform != cc.sys.DESKTOP_BROWSER && ("tt" == o.channel ? c.Event.stat("ttentercat_game", {}) : "qq" == o.channel ? c.Event.stat("qqentercat_game", {}) : "wx" == o.channel && c.Event.stat("wxentercat_game", {})), o.HidePanelHandle(), cc.director.loadScene("GameSceneCat")) : (o.HidePanelHandle(), cc.director.loadScene("DecorationScene")) : (this.saveDressupRemind.active = !0, this.scheduleOnce(function() {
					this.saveDressupRemind.active = !1
				}.bind(this), 2), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && c.Event.stat("ttsave", {}))
			},
			GenerateJpegData: function(e, t, n) {},
			BtnSaveScreenShot: function(e) {
				this.trueFace.active && "tt" == o.channel && c.Event.stat("tt_TrueFacePhoto", {}), o.audioManager && o.audioManager.PlayPhotoSound(), e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
					e.target.getComponent(cc.Button).interactable = !0
				}, .3), this.person.y = 0, o.shotImage = o.ScreenShot(this.camera, this.targetNode), this.saveScreenShotPanel.active = !0, "wx" == o.channel || "qq" == o.channel || "tt" == o.channel || "swan" == o.channel ? "tt" == o.channel ? (this.saveScreenShotPanel.getChildByName("shareBtn").active = !0, this.saveScreenShotPanel.getChildByName("shareBtn1").active = !1) : (this.saveScreenShotPanel.getChildByName("shareBtn").active = !1, this.saveScreenShotPanel.getChildByName("shareBtn1").active = !0, this.saveScreenShotPanel.getChildByName("shareBtn1").getComponent(cc.Animation).play("scale")) : this.saveScreenShotPanel.getChildByName("shareBtn").active = !1, this.saveScreenShotPanel.getChildByName("image").getComponent(cc.Sprite).spriteFrame = o.shotImage, 0 == o.isNormalShot && (this.saveScreenShotPanel.getChildByName("image").scaleY = -1), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && c.Event.stat("ttgirlcamera", {}), o.isHasAd && "tt" != o.channel && "qq" != o.channel && ("vivo" == o.channel && 1 == o.isShowNative ? o.curScene && o.curScene.nativeControl && o.adsManager.ShowNativeAd(2, 1, o.curScene.nativeControl.ShowNativeInter) : o.adsManager.ShowInterstitial(-1)), "tt" == o.channel ? (o.recorderFlag ? o.GetNowTime() - o.startRecordTime < 3e3 ? this.saveScreenShotPanel.getChildByName("shareVideoBtn").active = !1 : (o.pickId = 2, this.saveScreenShotPanel.getChildByName("shareVideoBtn").active = !0, this.saveScreenShotPanel.getChildByName("shareVideoBtn").getComponent(cc.Animation).play("scale"), o.recorder.stop()) : null != o.videoPath ? (this.saveScreenShotPanel.getChildByName("shareVideoBtn").active = !0, this.saveScreenShotPanel.getChildByName("shareVideoBtn").getComponent(cc.Animation).play("scale")) : this.saveScreenShotPanel.getChildByName("shareVideoBtn").active = !1, cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && "live_stream" == o.systemInfo.appName && (this.saveScreenShotPanel.getChildByName("shareBtn").active = !1)) : this.saveScreenShotPanel.getChildByName("shareVideoBtn").active = !1
			},
			BtnSaveToPhoto: function(e) {
				o.audioManager && o.audioManager.PlayClickSound(), e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
					e.target.getComponent(cc.Button).interactable = !0
				}, .3), cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os && "ios" == o.channel ? o.SaveImageToPhoto(this.SaveToPhotoSuc, this.HideScreenShotPanelBtn, this.ShowScreenShotPanelBtn) : cc.sys.os == cc.sys.OS_ANDROID && "apk" == o.channel || o.SaveImageToPhoto(this.SaveToPhotoSuc), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && c.Event.stat("ttgirlphoto", {})
			},
			SaveToPhotoSuc: function() {
				o.curScene.sucRemind.active = !0;
				var e = cc.moveBy(.5, cc.v2(0, 100)),
					t = cc.sequence(cc.callFunc(function(e) {
						o.curScene.sucRemind.setPosition(0, Math.floor(cc.winSize.height) / 4)
					}, o.curScene, 500), e, cc.callFunc(function(e) {
						o.curScene.sucRemind.active = !1
					}, o.curScene, 100));
				o.curScene.sucRemind.runAction(t)
			},
			HideScreenShotPanelBtn: function() {
				o.curScene.saveScreenShotPanel.getChildByName("saveBtn").active = !1, o.curScene.saveScreenShotPanel.getChildByName("closeBtn").active = !1
			},
			ShowScreenShotPanelBtn: function() {
				o.curScene.saveScreenShotPanel.getChildByName("saveBtn").active = !0, o.curScene.saveScreenShotPanel.getChildByName("closeBtn").active = !0
			},
			BtnShareApp: function(e) {
				e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
					e.target.getComponent(cc.Button).interactable = !0
				}, .5), o.audioManager && o.audioManager.PlayClickSound(), o.ShareApp(), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && c.Event.stat("ttgirlshare", {})
			},
			BtnShareVideo: function(e) {
				if (null == o.videoPath) return this.generalRemind.active = !0, o.ShowPanelHandle(), void this.generalRemind.getComponent("GeneralRemind").InitPanel(4);
				e && (e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
					e.target.getComponent(cc.Button).interactable = !0
				}, 1));
				var t = this,
					n = {
						videoPath: o.videoPath
					};
				"Douyin" == o.systemInfo.appName ? (void 0 == o.topics1 && (o.topics1 = "\u68a6\u5e7b\u5c11\u5973", o.topics2 = ""), "" == o.topics2 ? (n.videoTopics = [o.topics1], n.hashtag_list = [o.topics1]) : (n.videoTopics = [o.topics1, o.topics2], n.hashtag_list = [o.topics1, o.topics2])) : "Toutiao" == o.systemInfo.appName && (n.createChallenge = !0), tt.shareAppMessage({
					channel: "video",
					extra: n,
					success: function() {
						e && (e.target.getComponent(cc.Button).interactable = !0)
					},
					fail: function(n) {
						console.log("\u5206\u4eab\u5931\u8d25:" + n.errMsg), e.target.getComponent(cc.Button).interactable = !0, n.errMsg && -1 == n.errMsg.substr("cancel") && (-1 == n.errMsg.substr("file not exit") && -1 == n.errMsg.substr("get shareInnfo return null") || (o.videoPath = null), t.generalRemind.active = !0, t.generalRemind.getComponent("GeneralRemind").InitPanel(4), o.ShowPanelHandle())
					}
				}), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && c.Event.stat("ttsharevideonew2", {})
			},
			BtnShowSignPanel: function() {
				this.signPanel.active = !0, o.ShowPanelHandle("sign")
			},
			BtnShowClearPanel: function() {
				o.audioManager && o.audioManager.PlayClickSound(), this.clearDressupPanel.active = !0, o.ShowPanelHandle(this.clearDressupPanel.name), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && c.Event.stat("ttgirltrash", {})
			},
			BtnClearDressUp: function(e) {
				o.audioManager && o.audioManager.PlayClickSound(), e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
					e.target.getComponent(cc.Button).interactable = !0
				}, .5);
				var t = null;
				t = 1 == o.sceneType ? o.defaultGirlDressUp : o.defaultBoyDressUp, o.personMsg = o.CopyObjectValue(t), o.InitPerson(o.personMsg, this.targetThings, this.afterParts), this.clearDressupPanel.active = !1, o.HidePanelHandle(this.clearDressupPanel.name), 1 == o.imageMode ? (this.node.getComponent(cc.Sprite).type = cc.Sprite.Type.SIMPLE, this.node.getComponent(cc.Sprite).spriteFrame = this.defaultBgGame, this.node.color = cc.Color.WHITE) : this.node.getComponent(cc.Sprite).spriteFrame = null;
				for (var n = this.secondScrollView1.content.getComponent("SecondItemRemark"), i = 0; i < this.selectName.length; i++) i == this.selectName.length - 2 ? (this.selectName[i] = o.defaultBgName, o.curBgName = 0) : this.selectName[i] = 0;
				if (2 == o.personType) {
					this.dressupScore = new Array;
					for (var a = 0, s = Object.keys(o.personMsg); a < s.length; a++) {
						var c = s[a],
							r = o.girlItemName.indexOf(c);
						if (-1 != r) {
							var l = {
								name: String.fromCharCode("a".charCodeAt() + r),
								score: o.getPartScore(c, !1)
							};
							this.dressupScore.push(l)
						}
					}
				}
				n.UpdateSelectState()
			},
			BtnChangeSex: function() {
				o.audioManager && o.audioManager.PlayClickSound(), this.settingPanel.active = !0, this.settingPanel.getComponent("SettingPanelCtl").InitPanel(2)
			},
			BtnHideScrollView: function(e) {
				null != e && (o.audioManager && o.audioManager.PlayClickSound(), e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
					e.target.getComponent(cc.Button).interactable = !0
				}, .1)), this.isShowScrollview ? (this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = -400, o.isHasAd && o.isShowBanner && (this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = -280), this.isShowScrollview = !1, cc.find("Canvas/holder/buttons/hideItemBtn").children[0].angle = 180) : (this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = -(this.startHeight - this.secondScrollView1.node.height), o.isHasAd && o.isShowBanner && (this.firstScrollView.node.parent.getComponent(cc.Widget).bottom += 120), this.isShowScrollview = !0, cc.find("Canvas/holder/buttons/hideItemBtn").children[0].angle = 0)
			},
			BtnChangeLevel: function(e, t) {
				o.audioManager && o.audioManager.PlayClickSound();
				var n = "",
					i = o.personMsg.level.split("");
				if (1 == t) {
					var a = i[1];
					i[1] = i[2], i[2] = a;
					for (var s = 0; s < i.length; s++) n += +i[s]
				} else if (2 == t) {
					var c = i[0];
					i[0] = i[1], i[1] = c;
					for (var r = 0; r < i.length; r++) n += +i[r]
				}
				o.personMsg.level = n, o.LevelHandle(this.levelArr, n, 0)
			},
			UpdateBtnMusic: function() {
				o.audioOn ? this.audioImage.spriteFrame = this.audioOn : this.audioImage.spriteFrame = this.audioOff
			},
			BtnMusicClick: function() {
				o.audioManager && o.audioManager.PlayClickSound(), o.audioOn ? (o.audioOn = !1, o.musicOn = !1, o.SetAudioFlag(1), o.SetMusicFlag(1), o.StopMusic()) : (o.audioOn = !0, o.musicOn = !0, o.SetAudioFlag(2), o.SetMusicFlag(2), o.PlayMusic()), this.UpdateBtnMusic(), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && c.Event.stat("ttgirlaudio", {})
			},
			BtnShopClick: function() {
				this.shopScrollView.node.parent.active = !0, o.audioManager && o.audioManager.PlayClickSound(), o.ShowPanelHandle("shop"), o.ShowFavoriteGuide(), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && c.Event.stat("ttshopnew", {})
			},
			BtnCloseShop: function() {
				o.audioManager && o.audioManager.PlayClickSound(), this.shopScrollView.node.parent.active = !1, o.HidePanelHandle("shop")
			},
			UpdateThingMsg: function(e, t, n) {
				void 0 == n && (n = !0);
				for (var i = 0; i < o.itemName.length; i++)
					if (i != o.itemName.length - 1 && e[i.toString()]) {
						var a = {
							name: e[i.toString()] + t + "2",
							type: String.fromCharCode("a".charCodeAt() + i)
						};
						this.images1[i].splice(0, 0, a), n && i == this.curInnerType && this.itemRemark1.LoadData(this.images1[i])
					} if (e[100]) {
					var s = {
							name: e[100] + t + "2",
							type: "t"
						},
						c = "t".charCodeAt() - "a".charCodeAt();
					this.images1[c].splice(0, 0, s), n && "t" == o.curType && this.itemRemark1.LoadData(this.images1[c])
				}
			},
			ApplySetMsg: function(e, t) {
				for (var n = 0; n < this.targetThings.length; n++) this.targetThings[n].getComponent(cc.Sprite).spriteFrame = null;
				for (var a = 0; a < this.afterParts.length; a++) this.afterParts[a].getComponent(cc.Sprite).spriteFrame = null;
				for (var s = 0; s < o.itemName.length; s++) {
					var c = parseInt(s) + 1;
					if (s == o.itemName.length - 1 && e[c.toString()]) {
						var r = e[c.toString()],
							l = r.substr(0, r.length - 2),
							h = r.substr(r.length - 1, 1),
							d = r.substr(r.length - 2, 1);
						o.curScene.selectName[c] = l, o.curScene.freeStates[c] = 0 == d, c == this.curInnerType && this.itemRemark1.getComponent("SecondItemRemark").UpdateSelectState(), this.UpdatePersonMsg(3, "u", null, h, l, 0, o.getPartScore(l, !0))
					} else if (e[s.toString()]) {
						var g = e[s.toString()],
							p = String.fromCharCode("a".charCodeAt() + s);
						o.curScene.selectName[s] = g, o.curScene.freeStates[s] = !0, s == this.curInnerType && this.itemRemark1.getComponent("SecondItemRemark").UpdateSelectState(), this.UpdatePersonMsg(3, p, null, t, g, 0, o.getPartScore(p, !0))
					} else {
						s == o.itemName.length - 1 ? (o.personMsg.body = null, this.targetThings[this.targetThings.length - 1].getComponent(cc.Sprite).spriteFrame = this.girlFrame, o.curScene.selectName[s + 1] = "0", o.curScene.freeStates[s + 1] = !0, s + 1 == this.curInnerType && this.itemRemark1.getComponent("SecondItemRemark").UpdateSelectState()) : (o.personMsg[o.itemName[s]] = null, o.curScene.selectName[s] = "0", o.curScene.freeStates[s] = !0, s == this.curInnerType && this.itemRemark1.getComponent("SecondItemRemark").UpdateSelectState());
						var u = String.fromCharCode("a".charCodeAt() + s);
						if (2 == o.personType) {
							var m, f = i(this.dressupScore);
							try {
								for (f.s(); !(m = f.n()).done;) {
									var v = m.value;
									if (v.name == u) {
										v.score = 0;
										break
									}
								}
							} catch (e) {
								f.e(e)
							} finally {
								f.f()
							}
						}
					}
				}
			},
			BtnShowBoxAd: function(e) {
				o.audioManager && o.audioManager.PlayClickSound(), "qq" == o.channel ? o.adsManager.ShowAppBox() : (o.pushCtl.CreatePushPanel(), o.adsManager.ShowBanner()), e.target.getChildByName("dot").active = !1
			},
			GetReward: function(e) {
				3 == o.adsManager.lockType ? o.curUnlockItem.GetReward() : 4 == o.adsManager.lockType ? this.onCallSuccess() : o.curUnlockItem.UpdateItemButton(e)
			},
			onTrueFaceBtnEvent: function(e, t) {
				if (cc.sys.platform != cc.sys.DESKTOP_BROWSER) {
					var n = this.trueFace.active,
						i = this;
					n ? ("tt" == o.channel && (n ? c.Event.stat("tt_closeTrueFace", {}) : c.Event.stat("tt_openTrueFace", {})), this.trueFace.active = !n, cc.find("Canvas/holder/buttons/photoBtn").active = !n) : tt.authorize({
						scope: "scope.camera",
						success: function() {
							"tt" == o.channel && (n ? c.Event.stat("tt_closeTrueFace", {}) : c.Event.stat("tt_openTrueFace", {})), i.trueFace.active = !n, cc.find("Canvas/holder/buttons/photoBtn").active = !n
						},
						fail: function() {
							tt.showToast({
								title: "\u6444\u50cf\u673a\u9700\u8981\u6388\u6743"
							}), tt.openSetting({
								success: function(e) {
									e.authSetting["scope.camera"] ? ("tt" == o.channel && (n ? c.Event.stat("tt_closeTrueFace", {}) : c.Event.stat("tt_openTrueFace", {})), i.trueFace.active = !n, cc.find("Canvas/holder/buttons/photoBtn").active = !n) : tt.showToast({
										title: "\u6444\u50cf\u673a\u9700\u8981\u6388\u6743"
									})
								}
							})
						}
					})
				}
			},
			onCheckupPopShow: function() {
				cc.sys.platform != cc.sys.DESKTOP_BROWSER ? tt.authorize({
					scope: "scope.camera",
					success: function() {
						o.ShowPanelHandle("checkupPopShow"), cc.find("Canvas/checkupFacePop").active = !0, "tt" == o.channel && c.Event.stat("tt_checkupBtnClick", {})
					},
					fail: function() {
						tt.showToast({
							title: "\u6444\u50cf\u673a\u9700\u8981\u6388\u6743"
						}), tt.openSetting({
							success: function(e) {
								e.authSetting["scope.camera"] ? (o.ShowPanelHandle("checkupPopShow"), cc.find("Canvas/checkupFacePop").active = !0, "tt" == o.channel && c.Event.stat("tt_checkupBtnClick", {})) : tt.showToast({
									title: "\u6444\u50cf\u673a\u9700\u8981\u6388\u6743"
								})
							}
						})
					}
				}) : cc.find("Canvas/checkupFacePop").active = !0
			},
			onCheckupFaceBtnEvent: function(e, t) {
				var n = this.checkupFacePanel.active;
				if (n || o.HidePanelHandle("checkupPopShow"), this.checkupFacePanel.active = !n, n) {
					"tt" == o.channel && c.Event.stat("tt_closecheckup", {});
					this.unschedule(this.updateFillRange), this.checkupFacePanel.getChildByName("camera").active = !1, this.checkupFacePanel.getChildByName("bar").getComponent(cc.Sprite).fillRange = 0, this.checkupFacePanel.getChildByName("checkupSetPop").active = !1
				} else {
					"tt" == o.channel && c.Event.stat("tt_opencheckup", {});
					this.trueFace.active && c.Event.stat("tt_closeTrueFace", {}), this.trueFace.active = !1, cc.find("Canvas/holder/buttons/photoBtn").active = !1, cc.find("Canvas/checkupFacePop").active = !1, cc.sys.platform != cc.sys.DESKTOP_BROWSER && (this.checkupFacePanel.children[0].active = !0), this.unschedule(this.updateFillRange), this.checkupFacePanel.getChildByName("bar").getComponent(cc.Sprite).fillRange = 0, this.schedule(this.updateFillRange, .05, cc.repeatForever, 1)
				}
			},
			updateFillRange: function() {
				if (this.checkupFacePanel.getChildByName("bar").getComponent(cc.Sprite).fillRange >= 1) {
					this.checkupFacePanel.getChildByName("bar").getComponent(cc.Sprite).fillRange = 1;
					return this.unschedule(this.updateFillRange), this.checkupFacePanel.getChildByName("checkupSetPop").active = !0, void(this.checkupFacePanel.getChildByName("bar").getComponent(cc.Sprite).fillRange = 0)
				}
				this.checkupFacePanel.getChildByName("bar").getComponent(cc.Sprite).fillRange += .02
			},
			onCheckupAgainBtnEvent: function() {
				this.unschedule(this.updateFillRange), this.checkupFacePanel.getChildByName("againBtn").active = !1, this.checkupFacePanel.getChildByName("bar").getComponent(cc.Sprite).fillRange = 0, this.schedule(this.updateFillRange, .05, cc.repeatForever, 1)
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager",
		mta_analysis: "mta_analysis"
	}],
	GeneralRemind: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "21c1dKNOJhH7LNpIOQeBhqu", "GeneralRemind");
		var i = e("GameManager"),
			a = e("mta_analysis");
		cc.Class({
			extends: cc.Component,
			properties: {
				labelType: 0,
				msg: cc.Node,
				okBtn: cc.Button,
				noBtn: cc.Button,
				noBtn1: cc.Button,
				images: {
					type: cc.SpriteFrame,
					default: []
				},
				labels: {
					type: cc.String,
					default: []
				},
				btnFrames: {
					type: cc.SpriteFrame,
					default: []
				}
			},
			start: function() {},
			InitPanel: function(e) {
				if (this.type = e, 6 == e && (e = 5), 0 == this.labelType) this.msg.getComponent(cc.Sprite).spriteFrame = this.images[e];
				else {
					for (var t = this.labels[e].split(" "), n = "", i = 0; i < t.length; i++) i == t.length - 1 ? n += t[i] : n += t[i] + "\n";
					this.msg.getComponent(cc.Label).string = n
				}
				3 == e && (e = 0), 0 == e || 1 == e || 4 == e || 5 == e ? (this.okBtn.node.active = !1, this.noBtn.node.active = !0, this.noBtn1.node.active = !1, this.msg.y = 0) : 2 == e && (this.okBtn.node.active = !0, this.okBtn.interactable = !0, this.noBtn.node.active = !1, this.noBtn1.node.active = !0, this.msg.y = 40)
			},
			BtnNoClick: function() {
				i.audioManager && i.audioManager.PlayClickSound(), this.node.active = !1, i.HidePanelHandle(this.node.name), cc.sys.platform != cc.sys.DESKTOP_BROWSER && (2 == this.type ? "tt" == i.channel && (-1 != i.curScene.name.indexOf("GameScene") ? a.Event.stat("tttgirlsharevideocancel", {}) : a.Event.stat("ttthingsharevideocancel", {})) : 1 != this.type && 5 != this.type || i.StartRecord())
			},
			BtnOkClick: function(e) {
				if (null == i.videoPath) return i.curScene.generalRemind.active = !0, i.curScene.generalRemind.getComponent("GeneralRemind").InitPanel(4), void i.ShowPanelHandle();
				e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
					e.target.getComponent(cc.Button).interactable = !0
				}, 1), i.audioManager && i.audioManager.PlayClickSound();
				var t = this,
					n = {
						videoPath: i.videoPath
					};
				"Douyin" == i.systemInfo.appName ? (void 0 == i.topics1 && (i.topics1 = "\u68a6\u5e7b\u5c11\u5973", i.topics2 = ""), "" == i.topics2 ? (n.videoTopics = [i.topics1], n.hashtag_list = [i.topics1]) : (n.videoTopics = [i.topics1, i.topics2], n.hashtag_list = [i.topics1, i.topics2])) : "Toutiao" == i.systemInfo.appName && (n.createChallenge = !0), tt.shareAppMessage({
					channel: "video",
					extra: n,
					success: function() {
						t.node.active = !1, e.target.getComponent(cc.Button).interactable = !0, i.HidePanelHandle(t.node.name, !0)
					},
					fail: function(n) {
						console.log("\u5206\u4eab\u5931\u8d25:" + n.errMsg), e.target.getComponent(cc.Button).interactable = !0, n.errMsg && -1 == n.errMsg.substr("fail cancel") && (-1 != n.errMsg.substr("file not exit") && (i.videoPath = null), t.generalRemind.active = !0, t.generalRemind.getComponent("GeneralRemind").InitPanel(4), i.ShowPanelHandle())
					}
				}), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == i.channel && (-1 != i.curScene.name.indexOf("GameScene") ? a.Event.stat("tttgirlsharevideo", {}) : a.Event.stat("ttthingsharevideo", {}))
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager",
		mta_analysis: "mta_analysis"
	}],
	GetRewardAPK: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "f70d7tnncJA5IOlPU1wETVt", "GetRewardAPK");
		var i = e("GameManager");
		cc.Class({
			extends: cc.Component,
			properties: {},
			GetReward: function() {
				configCat.gameController ? configCat.onReward() : i.curScene.GetReward()
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager"
	}],
	GiftItemRemark: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "9d48cnkHMxFm6ravXoS/L01", "GiftItemRemark");
		var i = e("GameManager"),
			a = e("mta_analysis");
		cc.Class({
			extends: cc.Component,
			properties: {
				itemW: 100,
				itemH: 100,
				spaceW: 20,
				item: cc.Prefab,
				btnReward: cc.Button,
				adImage: cc.SpriteFrame,
				shareImage: cc.SpriteFrame
			},
			start: function() {
				var e = Math.min(i.giftSets, i.giftMsg.length - 1),
					t = parseInt(e) + 1;
				this.curSet = t, this.curSet <= i.giftSets ? (this.btnReward.interactable = !1, this.btnReward.node.getComponent(cc.Sprite).spriteFrame = this.adImage) : (this.btnReward.interactable = !0, this.btnReward.node.getComponent(cc.Sprite).spriteFrame = this.adImage), cc.loader.loadResDir("gift/" + t, cc.SpriteFrame, function(e, t) {
					e ? console.log(e) : (t = i.SortArray(t, 0), this.InitScrollView(t))
				}.bind(this))
			},
			InitScrollView: function(e) {
				for (var t = 0; t < e.length; t++) {
					var n = cc.instantiate(this.item);
					n.parent = this.node, this.curSet <= this.setNum ? n.children[0].active = !0 : t < i.giftNum ? n.children[0].active = !0 : n.children[0].active = !1, n.getComponent(cc.Sprite).spriteFrame = e[t], n.x = this.spaceW + this.itemW / 2 + t * (this.spaceW + this.itemW), n.y = 0
				}
				this.node.width = this.spaceW + e.length * (this.spaceW + this.itemW)
			},
			BtnGetReward: function() {
				if (!(i.GetNowTime() - i.lastTime < 1e3) && (i.lastTime = i.GetNowTime(), i.adsManager.lockType = 3, i.curUnlockItem = this, i.adsManager.ShowVideo(), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == i.channel)) {
					a.Event.stat("ttgift", {
						videonum: "\u70b9\u51fb\u770b\u89c6\u9891"
					})
				}
			},
			GetReward: function() {
				if (i.curScene && -1 != i.curScene.name.indexOf("GameScene")) {
					var e = i.giftMsg[i.giftSets].name.substr(i.giftMsg[i.giftSets].name.length - 1, 1);
					i.curScene.UpdateThingMsg(i.giftMsg[i.giftSets].gifts[i.giftNum], e, !0)
				} else if (i.curScene && -1 != i.curScene.name.indexOf("Decoration")) {
					var t = i.giftMsg[i.giftSets].name.substr(i.giftMsg[i.giftSets].name.length - 1, 1);
					i.curScene.UpdateThingMsg(i.giftMsg[i.giftSets].gifts[i.giftNum], t, !0)
				}
				this.btnReward.node.getComponent(cc.Sprite).spriteFrame = this.adImage, i.giftNum = parseInt(i.giftNum) + 1, i.SetItemLockFlag("GiftNum", i.giftNum);
				var n = this.node.childrenCount;
				i.giftNum == n && (i.giftSets = parseInt(i.giftSets) + 1, i.SetItemLockFlag("GiftSets", i.giftSets), this.btnReward.interactable = !1, i.curScene.giftPanel.active = !1);
				for (var s = this.node.children, o = 0; o < s.length; o++) this.curSet <= this.setNum ? s[o].children[0].active = !0 : o < i.giftNum ? s[o].children[0].active = !0 : s[o].children[0].active = !1;
				if (cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == i.channel) {
					var c = "\u770b\u5b8c\u7b2c" + i.giftNum + "\u4e2a\u89c6\u9891";
					a.Event.stat("ttgift", {
						videonum: c
					})
				}
			},
			BtnClosePanel: function() {
				i.showGiftNum++, i.curScene.giftPanel.active = !1, i.HidePanelHandle("gift"), i.giftTime = i.GetNowTime(), i.curScene.SetGiftTimer()
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager",
		mta_analysis: "mta_analysis"
	}],
	GuideController: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "c9f7d+JePxBGb+YVQ0FuTG2", "GuideController"), cc.Class({
			extends: cc.Component,
			properties: {
				hand: cc.Node,
				anim: cc.Animation
			},
			onLoad: function() {
				configCat.guide = this, this.hand.position = cc.v3(9999, 9999), this.hand.active = !1
			},
			ClickGuide: function(e) {
				cc.Tween.stopAllByTarget(this.hand);
				var t = e.parent.convertToWorldSpaceAR(e.position);
				t = this.hand.parent.convertToNodeSpaceAR(t), this.hand.position = t, this.hand.active = !0, this.anim.play()
			},
			DragGuide: function(e, t) {
				this.anim.stop(), cc.Tween.stopAllByTarget(this.hand);
				var n = e.parent.convertToWorldSpaceAR(e.position);
				this.startPos = this.hand.parent.convertToNodeSpaceAR(n);
				var i = t.parent.convertToWorldSpaceAR(t.position);
				this.endPos = this.hand.parent.convertToNodeSpaceAR(i), this.hand.children[0].position = cc.v3(0, 0), this.hand.children[0].scale = 1, this.hand.active = !0, this.hand.position = this.startPos;
				var a = this;
				cc.tween(this.hand).repeatForever(cc.tween().call(function() {
					a.hand.position = a.startPos
				}).delay(.3).to(.5, {
					position: a.endPos
				}).delay(.15)).start()
			},
			StopGuide: function() {
				cc.Tween.stopAllByTarget(this.hand), this.hand.position = cc.v3(9999, 9999), this.hand.active = !1
			}
		}), cc._RF.pop()
	}, {}],
	ImageItemRemark: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "507caqDm05K4Zjy5981/ZxW", "ImageItemRemark");
		var i = e("GameManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				colNum: 3,
				maxRow: 4,
				item: cc.Prefab,
				itemW: 100,
				itemH: 100,
				itemSpaceW: 20,
				itemSpaceH: 30
			},
			onLoad: function() {
				this.fontNum = 2, this.backNum = 2, this.isLoadFinish = !1, this.sideSpace = (this.node.width - (this.itemW + this.itemSpaceW) * this.colNum + this.itemSpaceW) / 2, this.startY = this.node.y
			},
			start: function() {
				this.curIndex = 0
			},
			LoadData: function(e, t, n) {
				if (i.imageType = e, this.imageType = e, null == t)
					if (1 == e) {
						for (var a in (t = new Array)[0] = {}, i.defaultDressUp) t[0][a] = i.defaultDressUp[a];
						i.imageMsg = t
					} else t = [], i.imageMsg = t;
				else i.imageMsg = t;
				this.flag = n;
				var s = t.length;
				0 == e ? s += 1 : n && (s += 1), this.isScrollChange = !1;
				var o = this.node.children;
				this.curDex = 0, this.maxDex = Math.floor((s - 1) / this.colNum) * this.colNum;
				for (var c = s; c < o.length; c++) o[c].destroy();
				for (var r = this.curDex; r < this.curDex + this.colNum * this.maxRow && r < s; r++) this.InitItemMsg(r, o[r - this.curDex]);
				s - this.curDex >= this.colNum * (this.maxRow - 1) && (s - this.curDex > this.colNum * this.maxRow && (this.isScrollChange = !0), this.bottomIndex = this.colNum * (this.maxRow - 1));
				var l = Math.ceil(s / this.colNum),
					h = (this.itemH + this.itemSpaceH) * l + this.itemSpaceH;
				this.node.height = h, this.node.y = this.startY, this.isLoadFinish = !0, this.lastIndex = this.curDex, this.topIndex = 0
			},
			InitItemMsg: function(e, t) {
				var n = i.imageMsg.length;
				if (0 == this.imageType ? n += 1 : 1 == this.imageType && this.flag && (n = i.imageMsg.length + 1), e > n - 1) null == t && void 0 == t || (t.active = !1);
				else if (!(e < 0)) {
					var a = null;
					null != t || void 0 != t ? a = t : (a = cc.instantiate(this.item)).parent = this.node, a.active = !0;
					var s = a.getComponent("ImageItem");
					s.index = e, s.num.string = e.toString();
					var o = -this.itemSpaceH - this.itemH / 2 - Math.floor(e / this.colNum) * (this.itemH + this.itemSpaceH),
						c = -this.node.width / 2 + this.sideSpace + this.itemW / 2 + e % this.colNum * (this.itemW + this.itemSpaceW);
					a.setPosition(c, o), 0 == this.imageType ? 0 == e ? (s.holder.active = !1, s.lockNode.active = !1, s.addNode.active = !0) : (s.addNode.active = !1, s.holder.active = !0, i.isHasAd ? 0 == i.imageMsg[s.index - 1].lock ? s.lockNode.active = !1 : (s.lockNode.active = !0, -1 != i.fakeUnlockName.indexOf(s.index) && (s.lockNode.active = !1)) : s.lockNode.active = !1, s.person.getComponent("Person").InitMsg(i.imageMsg[e - 1])) : this.imageType
				}
			},
			AddOneItem: function() {
				var e = i.curUnlockItem;
				e.lockNode.active = !1, e.person.active = !0;
				var t = {};
				for (var n in i.defaultDressUp) t[n] = i.defaultDressUp[n];
				e.person.getComponent("Person").InitMsg(t), i.imageMsg.push(t);
				var a = i.imageMsg.length + 1,
					s = cc.instantiate(this.item);
				s.parent = this.node;
				var o = s.getComponent("ImageItem");
				o.index = e.index + 1;
				var c = -this.itemSpaceH / 2 - this.itemH / 2 - Math.floor(o.index / this.colNum) * (this.itemH + this.itemSpaceH),
					r = -this.node.width / 2 + this.sideSpace + this.itemW / 2 + o.index % this.colNum * (this.itemW + this.itemSpaceW);
				s.setPosition(r, c), o.lockNode.active = !0, o.person.active = !1, a - this.curDex >= this.colNum * (this.maxRow - 1) && (a - this.curDex > this.colNum * this.maxRow && (this.isScrollChange = !0), this.bottomIndex = this.colNum * (this.maxRow - 1));
				var l = Math.ceil(a / this.colNum),
					h = (this.itemH + this.itemSpaceH) * l;
				this.node.height = h
			},
			UpdateTwoRowItem: function(e) {
				var t = i.imageMsg.length;
				0 == this.imageType ? t += 1 : 1 == this.imageType && this.flag && (t = i.imageMsg.length + 1);
				var n = this.node.children;
				if (0 == e) {
					var a = n[this.topIndex].getComponent("ImageItem").index + this.colNum * this.maxRow;
					if (a >= t) return;
					for (var s = this.topIndex; s < this.topIndex + this.colNum; s++, a++) this.InitItemMsg(a, n[s]);
					this.bottomIndex = this.topIndex, this.topIndex += this.colNum, this.topIndex > this.colNum * (this.maxRow - 1) && (this.topIndex = 0)
				} else if (1 == e) {
					var o = n[this.bottomIndex].getComponent("ImageItem").index - this.colNum * this.maxRow;
					if (o < 0) return;
					for (var c = this.bottomIndex; c < this.bottomIndex + this.colNum; c++, o++) this.InitItemMsg(o, n[c]);
					this.topIndex = this.bottomIndex, this.bottomIndex -= this.colNum, this.bottomIndex < 0 && (this.bottomIndex = this.colNum * (this.maxRow - 1))
				}
			},
			ClearData: function() {
				this.node.height = 0;
				for (var e = this.node.children, t = 0; t < this.node.childrenCount; t++) e[t].active = !1
			},
			OnScrollRectScrolled: function() {
				if (0 != this.isLoadFinish && 0 != this.isScrollChange && !(this.node.y < this.startY)) {
					var e = Math.floor((this.node.y - this.startY) / (this.itemH + this.itemSpaceH)) * this.colNum;
					e != this.lastIndex && this.UpdateScorllView(e)
				}
			},
			UpdateScorllView: function(e) {
				if (e < this.lastIndex) {
					if (e > this.maxDex - (this.backNum + 1) * this.colNum) return;
					this.UpdateTwoRowItem(1)
				} else if (e > this.lastIndex) {
					if (e < this.fontNum * this.colNum) return;
					this.UpdateTwoRowItem(0)
				}
				this.lastIndex = e
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager"
	}],
	ImageItem: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "fd9c0tmyAdERr8Cz9S27OTM", "ImageItem");
		var i = e("GameManager"),
			a = e("mta_analysis");
		cc.Class({
			extends: cc.Component,
			properties: {
				person: cc.Node,
				num: cc.Label,
				lockNode: cc.Node,
				holder: cc.Node,
				addNode: cc.Node
			},
			onLoad: function() {
				this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
			},
			start: function() {
				this.lastPosition = cc.v2(0, 0), this.moveFlag = !1
			},
			onTouchStart: function(e) {
				i.curScene.isLoadScene || (this.lastPosition = e.touch.getLocation(), this.moveFlag = !1)
			},
			onTouchMove: function(e) {
				if (!i.curScene.isLoadScene) {
					var t = e.touch.getLocation();
					(Math.abs(t.x - this.lastPosition.x) > 1 || Math.abs(t.y - this.lastPosition.y) > 1) && (this.moveFlag = !0)
				}
			},
			onTouchEnd: function(e) {
				if (!i.curScene.isLoadScene) {
					if (0 == this.moveFlag) {
						if (i.audioManager && i.audioManager.PlayClickSound(), 0 == i.imageType) {
							if (this.addNode.active) return void i.curScene.AddOnePerson();
							if (this.lockNode.active) {
								if (i.GetNowTime() - i.lastTime < 1e3) return;
								return i.lastTime = i.GetNowTime(), i.adsManager.lockType = 1, i.curUnlockItem = this, void i.adsManager.ShowVideo()
							}
							var t = this.person.parent.getChildByName("pen"),
								n = this.person.parent.getChildByName("deleteBtn"),
								s = e.touch.getLocation();
							s = this.person.parent.convertToNodeSpaceAR(s);
							var o = t.width > t.height ? t.width : t.height,
								c = n.width > n.height ? n.width : n.height;
							if (Math.abs(s.x - t.x) < o / 2 && Math.abs(s.y - t.y) < o / 2) i.curScene.isLoadScene = !0, i.isCreatePerson = 0, i.curEditImageIndex = this.index - 1, i.isCreatNewImageMsg = !1, cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == i.channel && a.Event.stat("ttthingeditperson", {}), "qq" == i.channel && (i.adsManager.ShowInterstitial(-1), i.isSupportBox && i.adsManager.ShowAppBox()), i.personType = 1, cc.director.loadScene("GameScene");
							else if (Math.abs(s.x - n.x) < c / 2 && Math.abs(s.y - n.y) < c / 2) i.curItem = this, i.curScene.deleteImagePanel.active = this, i.ShowPanelHandle(i.curScene.deleteImagePanel.name), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == i.channel && a.Event.stat("ttthingdeleteperson", {});
							else {
								var r = cc.instantiate(this.person);
								r.parent = i.curScene.stickers, r.addComponent("MoveItem"), r.position = cc.v2(0, 250), cc.winSize.height / cc.winSize.width < 1.5 && (r.position = cc.v2(0, 180)), r.scale = .9, i.StartRecord()
							}
						} else if (1 == i.imageType && this.lockNode.active) {
							if (i.GetNowTime() - i.lastTime < 1e3) return;
							return i.lastTime = i.GetNowTime(), i.curUnlockItem = this, void i.curScene.imageItemRemark.AddOneItem()
						}
						i.curScene.imageItemRemark.curIndex = this.index
					}
					this.moveFlag = !1
				}
			},
			UpdateItemButton: function(e) {
				void 0 == e && (e = 0), this.lockNode.active = !1, 0 == e ? (i.imageMsg[this.index - 1].lock = 0, i.SetImageMsg()) : -1 == i.fakeUnlockName.indexOf(this.index) && i.fakeUnlockName.push(this.index)
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager",
		mta_analysis: "mta_analysis"
	}],
	LanguageData: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "61de062n4dJ7ZM9/Xdumozn", "LanguageData");
		var i = e("polyglot.min"),
			a = null;

		function s(e) {
			return window.i18n.languages[e]
		}

		function o(e) {
			e && (a ? a.replace(e) : a = new i({
				phrases: e,
				allowMissing: !0
			}))
		}
		window.i18n || (window.i18n = {
			languages: {},
			curLang: ""
		}), t.exports = {
			init: function(e) {
				if (e !== window.i18n.curLang) {
					var t = s(e) || {};
					window.i18n.curLang = e, o(t), this.inst = a
				}
			},
			t: function(e, t) {
				if (a) return a.t(e, t)
			},
			inst: a,
			updateSceneRenderers: function() {
				for (var e = cc.director.getScene().children, t = [], n = 0; n < e.length; ++n) {
					var i = e[n].getComponentsInChildren("LocalizedLabel");
					Array.prototype.push.apply(t, i)
				}
				for (var a = 0; a < t.length; ++a) {
					var s = t[a];
					s.node.active && s.updateLabel()
				}
				for (var o = [], c = 0; c < e.length; ++c) {
					var r = e[c].getComponentsInChildren("LocalizedSprite");
					Array.prototype.push.apply(o, r)
				}
				for (var l = 0; l < o.length; ++l) {
					var h = o[l];
					h.node.active && h.updateSprite(window.i18n.curLang)
				}
			}
		}, cc._RF.pop()
	}, {
		"polyglot.min": "polyglot.min"
	}],
	LimitedSetPanel: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "fe59cfEWTdKALUMKFoN5t5D", "LimitedSetPanel");
		var i = e("GameManager"),
			a = e("mta_analysis");
		cc.Class({
			extends: cc.Component,
			properties: {
				image: cc.Sprite,
				lockNode: cc.Node,
				unlockNode: cc.Node,
				stateNode: cc.Node
			},
			onLoad: function() {
				this.allNum = i.setMsg.length, this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
			},
			start: function() {},
			onEnable: function() {
				this.InitPanel()
			},
			InitPanel: function() {
				var e = i.setMsg[this.curIndex];
				this.index = e.index, this.itemMsg = i.shopMsg[this.index], this.frameName = this.itemMsg.name.substr(0, this.itemMsg.name.length - 1), this.localFlag = this.itemMsg.name.substr(this.itemMsg.name.length - 1, 1), this.LoadImage(this.index);
				var t = i.GetItemLockFlag(this.itemMsg.name);
				if (t >= this.itemMsg.videoNum) this.lockNode.active = !1, this.unlockNode.active = !0, this.stateNode.active = !1;
				else {
					(isNaN(t) || t <= 0) && (t = 0), this.stateNode.active = !0;
					for (var n = this.stateNode.children, a = 0; a < n.length; a++) n[a].active = a < t;
					this.lockNode.active = !0, this.lockNode.getChildByName("num").getComponent(cc.Label).string = t + "/" + this.itemMsg.videoNum.toString(), this.unlockNode.active = !1
				}
				this.node.getChildByName("closeBtn").getComponent(cc.Button).interactable = !0
			},
			LoadImage: function(e) {
				if (0 == this.localFlag) {
					var t = "set/" + this.frameName;
					cc.loader.loadRes(t, cc.SpriteFrame, function(t, n) {
						if (e == this.index) return t ? (console.log(t), void(this.image.spriteFrame = null)) : void(this.image.spriteFrame = n)
					}.bind(this))
				} else {
					var n = i.serverPath + "set/" + this.frameName + ".png";
					cc.loader.load(n, function(t, n) {
						if (e == this.index) return t ? (console.log(t), void(this.image.spriteFrame = null)) : void(this.image.spriteFrame = new cc.SpriteFrame(n))
					}.bind(this))
				}
			},
			BtnSetUse: function() {
				if (this.lockNode.active) {
					if (i.GetNowTime() - i.lastTime < 1e3) return;
					if (i.lastTime = i.GetNowTime(), i.curUnlockItem = this, i.isHasAd ? (i.adsManager.lockType = 2, i.adsManager.ShowVideo()) : cc.sys.platform == cc.sys.DESKTOP_BROWSER && i.curScene.GetReward(), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == i.channel) {
						var e = "ttlimitedset" + this.frameName + "clickvideo";
						a.Event.stat(e, {})
					}
				} else i.curScene.ApplySetMsg(this.itemMsg, this.localFlag), i.curScene.limitedSetPanel.active = !1, this.curIndex = 0, i.HidePanelHandle("limitedSet")
			},
			UpdateItemButton: function() {
				var e = i.GetItemLockFlag(this.itemMsg.name);
				if (isNaN(e) || e <= 0 ? e = 1 : e++, e >= this.itemMsg.videoNum) {
					if (this.lockNode.active = !1, this.unlockNode.active = !0, i.curScene.UpdateThingMsg(this.itemMsg, this.localFlag), this.stateNode.active = !1, cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == i.channel) {
						var t = "ttlimitedset" + this.frameName + "videoall";
						a.Event.stat(t, {})
					}
				} else {
					this.lockNode.getChildByName("num").getComponent(cc.Label).string = e + "/" + this.itemMsg.videoNum.toString();
					var n = this.stateNode.children;
					this.stateNode.active = !0;
					for (var s = 0; s < n.length; s++) n[s].active = s < e
				}
				if (i.SetItemLockFlag(this.itemMsg.name, e), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == i.channel && 1 == e) {
					var o = "ttlimitedset" + this.frameName + "video1";
					a.Event.stat(o, {})
				}
			},
			BtnClosePanel: function(e) {
				if (e && (e.target.getComponent(cc.Button).interactable = !1), this.node.active = !1, this.curIndex++, 1 == this.isAutoShow) {
					for (var t = this.curIndex; t < i.setMsg.length; t++) {
						var n = i.setMsg[t],
							a = n.index;
						if (n = i.shopMsg[a], !(i.GetItemLockFlag(n.name) >= n.videoNum)) break
					}
					this.curIndex = t
				}
				this.image.spriteFrame = null, this.curIndex < this.allNum ? i.curScene.scheduleOnce(function() {
					i.curScene.limitedSetPanel.active = !0
				}, .01) : (this.curIndex = 0, i.HidePanelHandle("limitedSet"))
			},
			onTouchEnd: function() {
				this.BtnClosePanel()
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager",
		mta_analysis: "mta_analysis"
	}],
	Loading: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "ad5f6y0DvlOeb2O8zF+BSD7", "Loading");
		var i = e("GameManager"),
			a = e("mta_analysis");
		cc.Class({
			extends: cc.Component,
			properties: {
				progressValueSprite: cc.Sprite,
				progressValue: {
					default: 0,
					visible: !1,
					type: cc.Integer,
					notify: function() {
						this.updateProgress(this.progressValue)
					}
				},
				loadingImgs: [cc.SpriteFrame]
			},
			onLoad: function() {
				if (cc.winSize.height / cc.winSize.width < 1.7 && (cc.find("Canvas/holder").y = -100), "h5" == i.channel && (i.isHasAd = !1), "qq" == i.channel && void 0 == i.boxTimes) {
					var e = i.serverPath + "qq/" + i.configName;
					cc.loader.load(e, function(e, t) {
						e ? console.log(e) : (i.isSupportBox = t.isSupportBox, i.boxTimes = t.boxTimes, console.log("isSupport=" + i.isSupportBox, ",boxTimes=" + i.boxTimes))
					})
				} else "wx" == i.channel ? i.isSupportBox = !0 : i.isSupportBox = !1;
				if (cc.sys.platform != cc.sys.DESKTOP_BROWSER && "ios" == i.channel && i.trackEvent("start"), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "h5" != i.channel && "ios" != i.channel && "apk" != i.channel && (a.App.init({
						appID: "500722060",
						eventID: "500722061"
					}), a.Page.init(), a.Event.stat(i.channel + "_initgame_dream", {})), this.isCheckActivity = !1, "tt" == i.channel) {
					var t = this;
					cc.loader.load("https://cutegirl.obs.cn-east-3.myhuaweicloud.com/" + i.channel + "/config.json", function(e, n) {
						try {
							if (e) return void console.log(e);
							t.isCheckActivity || (t.isCheckActivity = !0, i.isActivityTime = n.isActivityTime)
						} catch (e) {}
					})
				} else if ("oppo" == i.channel || "vivo" == i.channel) {
					var n = this,
						s = new XMLHttpRequest;
					s.onreadystatechange = function() {
						if (4 == s.readyState && s.status >= 200 && s.status < 400) {
							var e = s.responseText;
							"{" != e[0] && (e = e.substr(1));
							var t = JSON.parse(e);
							n.isCheckActivity || (n.isCheckActivity = !0, i.isActivityTime = t.isActivityTime, i.limitedFlag = t.limitedFlag, "oppo" == i.channel && (i.isBannerRefreshByScene = t.isBannerRefreshByScene, i.isBannerFirst = t.isBannerFirst, i.isSupportBanner = t.isSupportBanner, i.isSupportNativeIcon = t.isSupportNativeIcon, i.isSupportPush = t.isSupportPush, i.OPPONativeBannerTime = t.NativeBannerTime, i.OPPOBannerTime = t.BannerTime))
						}
					}, s.open("GET", "https://cutegirl.obs.cn-east-3.myhuaweicloud.com/" + i.channel + "/configDream.json", !0), s.send()
				} else this.isCheckActivity = !0
			},
			start: function() {
				this.times = 0, this.allTimes = 0, this.delta = 0, i.LoadSubPackage(0, "subpackage1"), this.schedule(this.LoadNextScene, .3), this.LoadResources()
			},
			LoadResources: function() {
				if (void 0 == i.star && cc.loader.loadRes("star", cc.Prefab, function(e, t) {
						e ? console.log(e) : i.star = t
					}), "tt" == i.channel && void 0 == i.topics1) {
					var e = i.serverPath + "tt/config.json";
					cc.loader.load(e, function(e, t) {
						e ? console.log(e) : (i.topics1 = t.topics1, i.topics2 = t.topics2, void 0 == t.limitedFlag ? i.limitedFlag = !0 : i.limitedFlag = t.limitedFlag, void 0 == t.realUnlock ? i.realUnlock = !0 : i.realUnlock = t.realUnlock, void 0 == t.isAutoShow ? i.isAutoShow = !0 : i.isAutoShow = t.isAutoShow)
					})
				}
				cc.loader.loadRes("sign/signMsg", function(e, t) {
					if (e) console.log(e);
					else {
						var n = t.json;
						i.signMsg = new Array, i.giftMsg = new Array;
						for (var a = 0; a < n.length; a++) 0 == n[a].type ? i.signMsg.push(n[a]) : 1 == n[a].type && i.giftMsg.push(n[a])
					}
				}), this.initCatImg()
			},
			LoadNextScene: function() {
				if (this.times += .3, this.allTimes += .3, this.times > 2 && (this.times = 0, 0 == i.CheckSubpackageStatus(0) && i.LoadSubPackage(0, "subpackage1")), this.isCheckActivity) 0 == i.CheckSubpackageStatus(0) || null == i.signMsg || this.progressValue < 95 || configCat.isCatImgLoad && (this.progressValue = 100, cc.sys.platform != cc.sys.DESKTOP_BROWSER && i.channel, this.unschedule(this.LoadNextScene), cc.director.loadScene("MainMenu"));
				else if ("oppo" == i.channel || "vivo" == i.channel) {
					var e = this,
						t = new XMLHttpRequest;
					t.onreadystatechange = function() {
						if (4 == t.readyState && t.status >= 200 && t.status < 400) {
							var n = t.responseText;
							"{" != n[0] && (n = n.substr(1));
							var a = JSON.parse(n);
							e.isCheckActivity || (e.isCheckActivity = !0, i.isActivityTime = a.isActivityTime, i.limitedFlag = a.limitedFlag, "oppo" == i.channel && (i.isBannerRefreshByScene = a.isBannerRefreshByScene, i.isBannerFirst = a.isBannerFirst, i.isSupportBanner = a.isSupportBanner, i.isSupportNativeIcon = a.isSupportNativeIcon, i.isSupportPush = a.isSupportPush, i.OPPONativeBannerTime = a.NativeBannerTime, i.OPPOBannerTime = a.BannerTime))
						}
					}, t.open("GET", "https://cutegirl.obs.cn-east-3.myhuaweicloud.com/" + i.channel + "/configDream.json", !0), t.send()
				} else {
					var n = this;
					cc.loader.load("https://cutegirl.obs.cn-east-3.myhuaweicloud.com/" + i.channel + "/config.json", function(e, t) {
						try {
							if (e) return void console.log(e);
							n.isCheckActivity || (n.isCheckActivity = !0, i.isActivityTime = t.isActivityTime)
						} catch (e) {}
					})
				}
			},
			initCatImg: function() {
				cc.loader.loadRes("catImg/cat", cc.SpriteAtlas, function(e, t) {
					if (e) console.log("\u521d\u59cb\u5316\u732b\u56fe\u7247\u5931\u8d25", e);
					else {
						var n = configCat.SortAyyay(t.getSpriteFrames());
						configCat.catImg = n, configCat.isCatImgLoad = !0
					}
				}.bind(this))
			},
			updateProgress: function(e) {
				this.progressValueSprite.fillRange = e / 100;
				var t = this.progressValueSprite.node.parent;
				t.getChildByName("star").x = e / 100 * 460 - 230;
				var n = parseInt(e / 25);
				n > 3 && (n = 3), t.parent.getChildByName("person").getComponent(cc.Sprite).spriteFrame = this.loadingImgs[n]
			},
			update: function(e) {
				this.progressValue < 95 && (this.progressValue += 2)
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager",
		mta_analysis: "mta_analysis"
	}],
	LocalizedLabel: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "744dcs4DCdNprNhG0xwq6FK", "LocalizedLabel");
		var i = e("LanguageData");
		cc.Class({
			extends: cc.Component,
			editor: {
				executeInEditMode: !0,
				menu: "i18n/LocalizedLabel"
			},
			properties: {
				dataID: {
					get: function() {
						return this._dataID
					},
					set: function(e) {
						this._dataID !== e && (this._dataID = e, this.updateLabel())
					}
				},
				_dataID: ""
			},
			onLoad: function() {
				i.inst || i.init(), this.fetchRender()
			},
			fetchRender: function() {
				var e = this.getComponent(cc.Label);
				if (e) return this.label = e, void this.updateLabel()
			},
			updateLabel: function() {
				this.label ? i.t(this.dataID) && (this.label.string = i.t(this.dataID)) : cc.error("Failed to update localized label, label component is invalid!")
			}
		}), cc._RF.pop()
	}, {
		LanguageData: "LanguageData"
	}],
	LocalizedSprite: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "f34ac2GGiVOBbG6XlfvgYP4", "LocalizedSprite");
		var i = e("SpriteFrameSet");
		cc.Class({
			extends: cc.Component,
			editor: {
				executeInEditMode: !0,
				inspector: "packages://i18n/inspector/localized-sprite.js",
				menu: "i18n/LocalizedSprite"
			},
			properties: {
				spriteFrameSet: {
					default: [],
					type: i
				}
			},
			onLoad: function() {
				this.fetchRender()
			},
			fetchRender: function() {
				var e = this.getComponent(cc.Sprite);
				if (e) return this.sprite = e, void this.updateSprite(window.i18n.curLang)
			},
			getSpriteFrameByLang: function(e) {
				for (var t = 0; t < this.spriteFrameSet.length; ++t)
					if (this.spriteFrameSet[t].language === e) return this.spriteFrameSet[t].spriteFrame
			},
			updateSprite: function(e) {
				if (this.sprite) {
					var t = this.getSpriteFrameByLang(e);
					!t && this.spriteFrameSet[0] && (t = this.spriteFrameSet[0].spriteFrame), this.sprite.spriteFrame = t
				} else cc.error("Failed to update localized sprite, sprite component is invalid!")
			}
		}), cc._RF.pop()
	}, {
		SpriteFrameSet: "SpriteFrameSet"
	}],
	MainMenu: [function(e, t, n) {
		"use strict";

		function i(e) {
			if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
				if (Array.isArray(e) || (e = a(e))) {
					var t = 0,
						n = function() {};
					return {
						s: n,
						n: function() {
							return t >= e.length ? {
								done: !0
							} : {
								done: !1,
								value: e[t++]
							}
						},
						e: function(e) {
							throw e
						},
						f: n
					}
				}
				throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}
			var i, s, o = !0,
				c = !1;
			return {
				s: function() {
					i = e[Symbol.iterator]()
				},
				n: function() {
					var e = i.next();
					return o = e.done, e
				},
				e: function(e) {
					c = !0, s = e
				},
				f: function() {
					try {
						o || null == i.return || i.return()
					} finally {
						if (c) throw s
					}
				}
			}
		}

		function a(e, t) {
			if (e) {
				if ("string" == typeof e) return s(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
			}
		}

		function s(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
			return i
		}
		cc._RF.push(t, "f6707DRWoNNZqArSaAgp9dh", "MainMenu");
		var o = e("GameManager"),
			c = e("../push/PushConfig"),
			r = e("AdsManager"),
			l = (e("MyProgressBar"), e("mta_analysis"));
		cc.Class({
			extends: cc.Component,
			properties: {
				loading: cc.Node,
				bgm: {
					type: cc.AudioClip,
					default: null
				},
				freeBackPanel: cc.Node,
				generalRemind: cc.Node,
				audioImage: cc.Sprite,
				audioOn: cc.SpriteFrame,
				audioOff: cc.SpriteFrame,
				signPanel: cc.Node,
				activityPanel: cc.Node,
				progressValueSprite: cc.Sprite,
				progressValue: {
					default: 0,
					visible: !1,
					type: cc.Integer,
					notify: function() {
						this.updateProgress(this.progressValue)
					}
				},
				loadingImgs: [cc.SpriteFrame]
			},
			onLoad: function() {
				if (o.curScene = this, o.HandleEventPerScene(), c.channel = o.channel, o.sceneIndex = 0, "apk" == o.channel && cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.DoExit, this), cc.sys.platform != cc.sys.DESKTOP_BROWSER)
					if ("tt" == o.channel) {
						o.GetSystemInfo();
						var e = o.systemInfo.SDKVersion,
							t = -1 != o.compareVersion(e, "1.84.0");
						"Douyin" == o.systemInfo.appName && t ? cc.find("Canvas/topHolder/btnDouyin").active = !0 : cc.find("Canvas/topHolder/btnDouyin").active = !1
					} else cc.find("Canvas/topHolder/btnDouyin").active = !1
			},
			DoExit: function(e) {
				e.keyCode == cc.macro.KEY.back || (e.keyCode, cc.macro.KEY.escape)
			},
			onBtnDouyinEvent: function() {
				console.log("\u5173\u6ce8\u6296\u97f3"), "tt" == o.channel && tt.openAwemeUserProfile()
			},
			onDestroy: function() {
				o.curScene = null
			},
			start: function() {
				if (this.delta = 0, this.times = 0, this.isLoadScene = !1, o.GetInitialData(this.bgm), this.UpdateBtnMusic(), this.GetSignMsg(), this.GetGiftMsg(), o.maxLevel = configCat.getPlayerInfo("maxCatLevel"), cc.winSize.height / cc.winSize.width < 1.7 && (cc.find("Canvas/loading/holder").y = -100), o.isHasAd) {
					if (cc.sys.platform == cc.sys.DESKTOP_BROWSER ? null == o.adsManager && (o.adsManager = new r) : (null == o.adsManager && (o.adsManager = new r, o.adsManager.AdInit(), o.InitMoreGame(), o.InitMoreGame1(), o.isSupportBanner && o.OPPOBannerCtrl && o.OPPOBannerCtrl.Init()), "qq" == o.channel && o.adsManager.ShowBlockAd(0)), ("tt" == o.channel || "swan" == o.channel) && cc.winSize.height / cc.winSize.width > 1.7) o.adsManager.ShowBanner();
					else if ("wx" != o.channel)
						if (1 == o.isShowNative && cc.winSize.height / cc.winSize.width > 1.7)
							if ("oppo" == o.channel || "vivo" == o.channel)
								if ("oppo" == o.channel) {
									if (o.curScene.nativeControl = this.node.getComponent("NativeControl"), o.isBannerRefreshByScene && !o.isBannerFirst && o.isOPPOBannerCtrlStart) o.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner);
									else if (o.oppoNativeBannerRes && o.isOPPOBannerCtrlStart) {
										var e = o.oppoNativeBannerRes;
										this.nativeControl.ShowNativeBanner(e.adId, e.title, e.desc)
									}
								} else "vivo" == o.channel && (o.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner), this.schedule(function() {
									try {
										0 == this.nativeControl.nativeBannerBtn.node.active && o.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner)
									} catch (e) {}
								}.bind(this), 10));
					else o.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner);
					else cc.winSize.height / cc.winSize.width > 1.7 && ("oppo" == o.channel ? o.isBannerRefreshByScene && o.isBannerFirst && o.isOPPOBannerCtrlStart ? o.adsManager.ShowBanner() : o.isBannerFirst && o.isOPPOBannerCtrlStart && o.adsManager.showBannerTime && o.gameManager.GetNowTime() - o.adsManager.showBannerTime > 3e4 && !o.adsManager.isShow && o.adsManager.ShowBanner() : o.adsManager.ShowBanner());
					"oppo" != o.channel && "apk" != o.channel && ("vivo" == o.channel && 1 == o.isShowNative ? o.curScene && o.curScene.nativeControl && o.adsManager.ShowNativeAd(2, 1, o.curScene.nativeControl.ShowNativeInter) : o.adsManager.ShowInterstitial(-1)), this.AdaptScreen()
				}
				cc.winSize.height / cc.winSize.width < 1.5 ? (cc.find("Canvas/Holder").y -= 120, cc.find("Canvas/topHolder").y -= 120, cc.find("Canvas/Holder/startBtn").y += 50, cc.find("Canvas/Holder/catBtn").y += 50, cc.find("Canvas/Holder/decorationBtn").y += 50, this.signPanel.scale = .75, this.signPanel.getChildByName("splash").scale = 1 / .75) : cc.winSize.height / cc.winSize.width < 1.65 && (cc.find("Canvas/Holder").y -= 120, cc.find("Canvas/topHolder").y -= 120, this.signPanel.scale = .75, this.signPanel.getChildByName("splash").scale = 1 / .75), this.LoadResources(), o.LoadSubPackage(1, "subpackage2");
				var t = this;
				if (o.RecordInitHandle(function() {}, function() {
						t.generalRemind.active = !0, 0 == o.pickId ? t.generalRemind.getComponent("GeneralRemind").InitPanel(1) : 1 == o.pickId && t.generalRemind.getComponent("GeneralRemind").InitPanel(2), o.ShowPanelHandle()
					}, !1), cc.sys.platform != cc.sys.DESKTOP_BROWSER && ("tt" == o.channel ? l.Event.stat("ttentermain", {}) : "qq" == o.channel ? l.Event.stat("qqentermain", {}) : "wx" == o.channel && l.Event.stat("wxentermain", {})), "wx" == o.channel ? cc.find("Canvas/pushNode").active && (o.pushCtl = cc.find("Canvas/pushNode").getComponent("PushNodeCtl"), cc.find("Canvas/pushNode").height = cc.winSize.height, o.pushCtl.CreateTwoCol(4, 5, cc.v2(0, 80)), o.pushCtl.CreateHorPanel(!1, 15, 10, 1, cc.v2(654, 150)), cc.winSize.height / cc.winSize.width >= 2 && (this.signPanel.y += 80, this.signPanel.getChildByName("splash").y -= 80)) : "qq" == o.channel ? (cc.find("Canvas/pushNode").active && (o.pushCtl = cc.find("Canvas/pushNode").getComponent("PushNodeCtl")), cc.winSize.height / cc.winSize.width >= 2 && (this.signPanel.y += 80, this.signPanel.getChildByName("splash").y -= 80)) : "oppo" == o.channel && o.isSupportPush && cc.find("Canvas/pushNode").active && (o.pushCtl = cc.find("Canvas/pushNode").getComponent("PushNodeCtl"), cc.find("Canvas/pushNode").height = cc.winSize.height, o.pushCtl.CreateDrawerPush(0)), "oppo" != o.channel && "vivo" != o.channel || cc.sys.platform == cc.sys.DESKTOP_BROWSER ? "qq" == o.channel && o.IsCanSupportFunc(19) ? cc.find("Canvas/topHolder/addDesktop").active = !0 : cc.find("Canvas/topHolder/addDesktop").active = !1 : 0 == o.isInstallShortcut || void 0 == o.isInstallShortcut ? qg.hasShortcutInstalled({
						success: function(e) {
							try {
								o.isInstallShortcut = 0 != e, 0 == o.isInstallShortcut ? cc.find("Canvas/topHolder/addDesktop").active = !0 : cc.find("Canvas/topHolder/addDesktop").active = !1
							} catch (e) {}
						},
						fail: function(e) {},
						complete: function() {}
					}) : cc.find("Canvas/topHolder/addDesktop").active = !1, o.isActivityTime) {
					var n = this;
					cc.loader.load("https://cutegirl.obs.cn-east-3.myhuaweicloud.com/tt/ActivityPic.png", function(e, t) {
						try {
							if (e) return void console.log(e);
							n.activityPanel.getChildByName("bottom").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t), n.showActivityPanel()
						} catch (e) {
							console.log(e)
						}
					})
				}
			},
			showActivityPanel: function(e, t) {
				this.activityPanel.active = !0
			},
			hideActivityPanel: function(e, t) {
				this.activityPanel.active = !1
			},
			CreateDesktopIcon: function() {
				"oppo" == o.channel || "vivo" == o.channel ? qg.hasShortcutInstalled({
					success: function(e) {
						try {
							0 == e ? qg.installShortcut({
								success: function() {},
								fail: function(e) {
									"vivo" == o.channel && qg.showToast({
										message: "\u8bf7\u6c42\u592a\u9891\u7e41"
									})
								},
								complete: function() {}
							}) : ("vivo" == o.channel ? qg.showToast({
								message: "\u5df2\u521b\u5efa\u684c\u9762\u56fe\u6807"
							}) : qg.showToast({
								title: "\u5df2\u521b\u5efa\u684c\u9762\u56fe\u6807"
							}), o.isInstallShortcut = !0)
						} catch (e) {}
					},
					fail: function(e) {},
					complete: function() {}
				}) : "qq" == o.channel ? qq.saveAppToDesktop({
					success: function(e) {
						console.log(e)
					},
					fail: function(e) {
						console.log(e)
					}
				}) : "tt" == o.channel && tt.addShortcut({
					success: function(e) {
						console.log("success"), console.log(e)
					},
					fail: function(e) {
						console.log(e.errMsg)
					}
				})
			},
			GetSignMsg: function() {
				var e = o.GetItemLockFlag("SetNum");
				o.setNum = null == e || "" == e ? 0 : e;
				var t = o.GetSignInDays();
				o.signDays = null == t || "" == t ? 0 : t
			},
			GetGiftMsg: function() {
				var e = o.GetItemLockFlag("GiftSets");
				o.giftSets = null == e || "" == e ? 0 : e;
				var t = o.GetItemLockFlag("GiftNum");
				o.giftNum = null == t || "" == t ? 0 : t
			},
			AdaptScreen: function() {
				cc.winSize.height / cc.winSize.width >= 2 ? (cc.find("Canvas/topHolder").y += 50, o.channel) : (cc.find("Canvas/topHolder").y += 30, "wx" != o.channel && "tt" != o.channel && "swan" != o.channel && "vivo" != o.channel && "oppo" != o.channel || (cc.find("Canvas/topHolder").y += 20, cc.find("Canvas/Holder").y += 20, cc.find("Canvas/Holder/girl").y += 30, cc.find("Canvas/Holder/startBtn").y += 30, cc.find("Canvas/Holder/catBtn").y += 30, cc.find("Canvas/Holder/decorationBtn").y += 30, o.channel), cc.find("Canvas/Holder/startBtn").y += 20, cc.find("Canvas/Holder/catBtn").y += 20, cc.find("Canvas/Holder/decorationBtn").y += 20, this.signPanel.y += 60, this.signPanel.getChildByName("splash").y -= 60, this.signPanel.getChildByName("okBtn").y += 10)
			},
			LoadResources: function() {
				var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
				if (o.isTest && (e = !1), "qq" == o.channel && void 0 == o.boxTimes) {
					var t = o.serverPath + "qq/" + o.configName;
					cc.loader.load(t, function(e, t) {
						e ? console.log(e) : (o.isSupportBox = t.isSupportBox, o.boxTimes = t.boxTimes)
					})
				}
				if ("tt" == o.channel && void 0 == o.topics1) {
					var n = o.serverPath + "tt/config.json";
					cc.loader.load(n, function(e, t) {
						e ? console.log(e) : (o.topics1 = t.topics1, o.topics2 = t.topics2, o.limitedFlag = t.limitedFlag, o.adsManager.isRealUnlock = t.realUnlock)
					})
				}
				if (void 0 == o.star && cc.loader.loadRes("star", cc.Prefab, function(e, t) {
						e ? console.log(e) : o.star = t
					}), e)
					if ("apk" == o.channel) {
						if (null == o.otherGirlMsg) {
							//var a = o.serverPath + "other/girl/otherMsg.json",
							var a = "other/girl/otherMsg.json",
								s = new XMLHttpRequest;
							s.onreadystatechange = function() {
								try {
									if (4 == s.readyState && s.status >= 200 && s.status < 400) {
										var e = s.responseText;
										o.otherGirlMsg = JSON.parse(e)
									}
								} catch (e) {}
							}, s.open("GET", a, !0), s.send()
						}
						if (null == o.shopMsg) {
							var c = "shop/setMsg.json",
								r = new XMLHttpRequest;
							r.onreadystatechange = function() {
								try {
									if (4 == r.readyState && r.status >= 200 && r.status < 400) {
										var e = r.responseText;
										o.shopMsg = JSON.parse(e)
									}
								} catch (e) {
									console.log(e)
								}
							}, r.open("GET", c, !0), r.send()
						}
						if (null == o.decorationMsg) {
							var l = "decoration/decorationMsg.json",
								h = new XMLHttpRequest;
							h.onreadystatechange = function() {
								try {
									if (4 == h.readyState && h.status >= 200 && h.status < 400) {
										var e = h.responseText,
											t = JSON.parse(e);
										o.decorationMsg = t.list
									}
								} catch (e) {}
							}, h.open("GET", l, !0), h.send()
						}
						if (null == o.setMsg) {
							var d = "set/LimitedTimeSet.json",
								g = new XMLHttpRequest;
							g.onreadystatechange = function() {
								try {
									if (4 == g.readyState && g.status >= 200 && g.status < 400) {
										var e = g.responseText;
										o.setMsg = JSON.parse(e)
									}
								} catch (e) {}
							}, g.open("GET", d, !0), g.send()
						}
						if (null == o.checkupMsg) {
							var p = "set/CheckupSet.json",
								u = new XMLHttpRequest;
							u.onreadystatechange = function() {
								try {
									if (4 == u.readyState && u.status >= 200 && u.status < 400) {
										var e = u.responseText;
										o.checkupMsg = JSON.parse(e)
									}
								} catch (e) {}
							}, u.open("GET", p, !0), u.send()
						}
						if (null == o.imageColor) {
							var m = "decoration/color.json",
								f = new XMLHttpRequest;
							f.onreadystatechange = function() {
								try {
									if (4 == f.readyState && f.status >= 200 && f.status < 400) {
										var e = f.responseText;
										o.imageColor = JSON.parse(e)
									}
								} catch (e) {}
							}, f.open("GET", m, !0), f.send()
						}
					} else {
						if (null == o.otherGirlMsg) {
							var v = o.serverPath + "other/girl/otherMsg.json";
							cc.loader.load(v, function(e, t) {
								e ? console.log(e) : o.otherGirlMsg = t
							}.bind(this))
						}
						if (null == o.shopMsg) {
							var S = o.serverPath + "shop/setMsg.json";
							cc.loader.load(S, function(e, t) {
								e ? console.log(e) : o.shopMsg = t
							})
						}
						if (null == o.decorationMsg) {
							var C = o.serverPath + "decoration/decorationMsg.json";
							cc.loader.load(C, function(e, t) {
								e ? console.log(e) : o.decorationMsg = t.list
							}.bind(this))
						}
						if (null == o.setMsg) {
							var y = o.serverPath + "set/LimitedTimeSet.json";
							cc.loader.load(y, function(e, t) {
								e ? console.log(e) : o.setMsg = t
							})
						}
						if (null == o.checkupMsg) {
							var P = o.serverPath + "set/CheckupSet.json";
							cc.loader.load(P, function(e, t) {
								e ? console.log(e) : o.checkupMsg = t
							})
						}
						if (null == o.imageColor) {
							var w = o.serverPath + "decoration/color.json";
							cc.loader.load(w, function(e, t) {
								e ? console.log(e) : o.imageColor = t
							}.bind(this))
						}
					}
				else {
					if (null == o.otherGirlMsg && cc.loader.loadRes("other/girl/otherMsg", function(e, t) {
							e ? console.log(e) : o.otherGirlMsg = t.json
						}.bind(this)), null == o.shopMsg && cc.loader.loadRes("shop/setMsg", function(e, t) {
							if (e) console.log(e);
							else if (o.shopMsg = t.json, o.checkupMsg = new Array, o.shopMsg.length > 0) {
								var n, a = i(t);
								try {
									for (a.s(); !(n = a.n()).done;) {
										var s = n.value;
										if (parseInt(s.name.substr(0, s.name.length - 1)) >= 10) {
											var c = {
												index: parseInt(s.name.substr(0, s.name.length - 1))
											};
											o.checkupMsg.push(c)
										}
									}
								} catch (e) {
									a.e(e)
								} finally {
									a.f()
								}
							}
						}), null == o.decorationMsg) {
						cc.loader.loadRes("decoration/decorationMsg", function(e, t) {
							e ? console.log(e) : o.decorationMsg = t.json.list
						}.bind(this))
					}
					if (null == o.imageColor) {
						cc.loader.loadRes("decoration/color", function(e, t) {
							e ? console.log(e) : o.imageColor = t.json
						}.bind(this))
					}
					null == o.setMsg && cc.loader.loadRes("set/LimitedTimeSet", function(e, t) {
						e ? console.log(e) : o.setMsg = t.json
					})
				}
			},
			ShowLimitedSet: function() {},
			UpdateBtnMusic: function() {
				o.audioOn ? this.audioImage.spriteFrame = this.audioOn : this.audioImage.spriteFrame = this.audioOff
			},
			BtnMusicClick: function() {
				o.audioManager && o.audioManager.PlayClickSound(), o.audioOn ? (o.audioOn = !1, o.musicOn = !1, o.SetAudioFlag(1), o.SetMusicFlag(1), o.StopMusic()) : (o.audioOn = !0, o.musicOn = !0, o.SetAudioFlag(2), o.SetMusicFlag(2), o.PlayMusic()), this.UpdateBtnMusic()
			},
			BtnShareClick: function(e) {
				e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
					e.target.getComponent(cc.Button).interactable = !0
				}, .5), o.audioManager && o.audioManager.PlayClickSound(), o.ShareApp()
			},
			BtnShowBoxAd: function(e) {
				o.audioManager && o.audioManager.PlayClickSound(), "qq" == o.channel ? o.adsManager.ShowAppBox() : "wx" == o.channel ? o.pushCtl.CreatePushPanel() : "apk" == o.channel && o.packName.indexOf("nearme")
			},
			BtnShowSignPanel: function() {
				this.signPanel.active = !0, "wx" == o.channel && (o.adsManager.HideBanner(), o.pushCtl && (cc.winSize.height / cc.winSize.width < 2 && o.pushCtl.HideHorScroll(), o.pushCtl.HideTwoCol())), o.ShowPanelHandle("sign")
			},
			BtntoCatScene: function(e, t) {
				this.isLoadScene || (this.isLoadScene = !0, e.target.getComponent(cc.Button).interactable = !1, o.audioManager && o.audioManager.PlayClickSound(), this.loading.active = !0, this.schedule(this.GoNextScene2, .2))
			},
			GoNextScene2: function() {
				this.times += .3, this.times > 2 && (this.times = 0, 0 == o.CheckSubpackageStatus(1) && o.LoadSubPackage(1, "subpackage2"), null != o.otherGirlMsg && null != o.shopMsg && null != o.setMsg && null != o.imageColor && null != o.checkupMsg || this.LoadResources()), null == o.shopMsg || 0 == o.CheckSubpackageStatus(1) || null == o.otherGirlMsg || null == o.setMsg || null == o.imageColor || null == o.checkupMsg || this.progressValue < 95 || (this.progressValue = 100, this.unschedule(this.GoNextScene2), cc.sys.platform != cc.sys.DESKTOP_BROWSER && ("tt" == o.channel ? l.Event.stat("ttentercat_home", {}) : "qq" == o.channel ? l.Event.stat("qqentercat_home", {}) : "wx" == o.channel && l.Event.stat("wxentercat_home", {})), "qq" == o.channel && 1 == o.isSupportBox && o.adsManager.ShowAppBox(), o.mainMoreBtn && o.mainMoreBtn.hide(), cc.director.loadScene("GameSceneCat"))
			},
			BtnStartPlay: function(e, t) {
				o.adsManager.ShowInterstitial(-1), this.isLoadScene || (this.isLoadScene = !0, e.target.getComponent(cc.Button).interactable = !1, 1 == t && cc.sys.platform != cc.sys.DESKTOP_BROWSER && ("tt" == o.channel ? l.Event.stat("ttinvalidclick", {}) : "qq" == o.channel ? l.Event.stat("qqinvalidclick", {}) : "wx" == o.channel && l.Event.stat("wxinvalidclick", {})), o.audioManager && o.audioManager.PlayClickSound(), this.loading.active = !0, this.schedule(this.GoNextScene, .2), 2 == t && (o.isFromActivityBtn = !0), 0 != t && 2 != t || cc.sys.platform == cc.sys.DESKTOP_BROWSER || ("tt" == o.channel ? l.Event.stat("ttentergameclick", {}) : "qq" == o.channel ? l.Event.stat("qqentergameclick", {}) : "wx" == o.channel && l.Event.stat("wxentergameclick", {})))
			},
			GoNextScene: function() {
				this.times += .3, this.times > 2 && (this.times = 0, 0 == o.CheckSubpackageStatus(1) && o.LoadSubPackage(1, "subpackage2"), null != o.otherGirlMsg && null != o.shopMsg && null != o.setMsg && null != o.imageColor && null != o.checkupMsg || this.LoadResources()), null == o.shopMsg || 0 == o.CheckSubpackageStatus(1) || null == o.otherGirlMsg || null == o.setMsg || null == o.imageColor || null == o.checkupMsg || this.progressValue < 95 || (this.progressValue = 100, this.unschedule(this.GoNextScene), cc.sys.platform != cc.sys.DESKTOP_BROWSER && ("tt" == o.channel ? l.Event.stat("ttentergame", {}) : "qq" == o.channel ? l.Event.stat("qqentergame", {}) : "wx" == o.channel && l.Event.stat("wxentergame", {})), o.isCreatePerson = 1, o.personMsg = null, "qq" == o.channel && 1 == o.isSupportBox && o.adsManager.ShowAppBox(), o.mainMoreBtn && o.mainMoreBtn.hide(), cc.director.loadScene("GameScene"))
			},
			BtntoDecorationScene: function(e, t) {
				this.isLoadScene || (this.isLoadScene = !0, e.target.getComponent(cc.Button).interactable = !1, o.audioManager && o.audioManager.PlayClickSound(), this.loading.active = !0, this.schedule(this.GoNextScene3, .2))
			},
			GoNextScene3: function() {
				this.times += .3, this.times > 2 && (this.times = 0, 0 == o.CheckSubpackageStatus(1) && o.LoadSubPackage(1, "subpackage2"), null != o.otherGirlMsg && null != o.shopMsg && null != o.setMsg && null != o.imageColor && null != o.checkupMsg || this.LoadResources()), null == o.shopMsg || 0 == o.CheckSubpackageStatus(1) || null == o.otherGirlMsg || null == o.setMsg || null == o.imageColor || null == o.checkupMsg || this.progressValue < 95 || (this.progressValue = 100, this.unschedule(this.GoNextScene3), cc.sys.platform != cc.sys.DESKTOP_BROWSER && ("tt" == o.channel ? l.Event.stat("ttenterdeco", {}) : "qq" == o.channel ? l.Event.stat("qqenterdeco", {}) : "wx" == o.channel && l.Event.stat("wxenterdeco", {})), o.isCreatePerson = 1, o.personMsg = null, "qq" == o.channel && 1 == o.isSupportBox && o.adsManager.ShowAppBox(), o.mainMoreBtn && o.mainMoreBtn.hide(), cc.director.loadScene("DecorationScene"))
			},
			update: function(e) {
				this.loading.active && this.progressValue < 95 && (this.progressValue += 2)
			},
			updateProgress: function(e) {
				this.progressValueSprite.fillRange = e / 100;
				var t = this.progressValueSprite.node.parent;
				t.getChildByName("star").x = e / 100 * 460 - 230;
				var n = parseInt(e / 25);
				n > 3 && (n = 3), t.parent.getChildByName("person").getComponent(cc.Sprite).spriteFrame = this.loadingImgs[n]
			},
			showFreeBack: function() {
				this.freeBackPanel.active = !0
			},
			hideFreeBack: function() {
				this.freeBackPanel.active = !1
			},
			onPrivacyBtnEvent: function() {
				cc.sys.platform != cc.sys.DESKTOP_BROWSER ? o.channel : console.log("\u9690\u79c1\u653f\u7b56")
			}
		}), cc._RF.pop()
	}, {
		"../push/PushConfig": "PushConfig",
		AdsManager: "AdsManager",
		GameManager: "GameManager",
		MyProgressBar: "MyProgressBar",
		mta_analysis: "mta_analysis"
	}],
	Mat: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "dea1aQtOsVP5bZVZeisvkXl", "Mat");
		e("Cat");
		cc.Class({
			extends: cc.Component,
			properties: {
				index: 0,
				isLock: {
					default: !1,
					type: cc.Boolean,
					notify: function() {
						this.setMatSprite(this.isLock)
					}
				},
				matSprite: cc.Sprite,
				matSpriteFrames: [cc.SpriteFrame],
				catLevelLabel: cc.Label
			},
			init: function(e, t, n) {
				this.index = e, this.index < 4 ? this.isLock = !1 : this.isLock = t, n = parseInt(n), configCat.gameController && n > 0 && configCat.gameController.newCat(n, this, !1)
			},
			setMatSprite: function(e) {
				this.matSprite.spriteFrame = e ? this.matSpriteFrames[0] : this.matSpriteFrames[1]
			},
			addCat: function(e) {
				this.isLock || this.node.getChildByName("catParent").childrenCount > 0 ? e.resetPos() : (e.targerMat && e.targerMat.resetMat(), e.targerMat = this, e.isDraging = !1, this.catLevelLabel.string = e.level.toString(), e.node.parent = this.node.getChildByName("catParent"), e.node.position = configCat.getCatPos(e.level), e.startPos = e.node.position, e.startParent = e.node.parent)
			},
			addCatByBox: function(e) {
				e.targerMat = this, this.catLevelLabel.string = e.level.toString(), e.node.parent = this.node.getChildByName("catParent"), e.node.position = configCat.getCatPos(e.level), e.startPos = e.node.position, e.startParent = e.node.parent
			},
			resetMat: function() {
				this.catLevelLabel.string = ""
			}
		}), cc._RF.pop()
	}, {
		Cat: "Cat"
	}],
	MoveItem: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "232b77EzpJLHru7dORcwm+i", "MoveItem");
		var i = e("GameManager");
		cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function() {
				this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
			},
			start: function() {
				this.lastPosition = this.node.position
			},
			onTouchBegan: function(e) {
				if (null != e && null != e.touch) {
					0 == i.curScene.moveNode.childrenCount && (i.curScene.mtId = []), -1 == i.curScene.mtId.indexOf(e.getID()) && i.curScene.mtId.push(e.getID()), this.lastPosition = e.touch.getLocation();
					var t = this.node.position;
					this.node.parent = i.curScene.moveNode, this.node.position = t, i.curScene.deleteArea.active = !0, i.curScene.deleteArea.children[0].active = !0, i.curScene.deleteArea.children[1].active = !1, i.curScene.ShowHidePanelHandle(1)
				}
			},
			onTouchMove: function(e) {
				if (null != e && null != e.touch) {
					var t = e.touch.getLocation(),
						n = cc.v2(t.x - this.lastPosition.x, t.y - this.lastPosition.y),
						a = cc.v2(this.node.x + n.x, this.node.y + n.y),
						s = i.Clamp(-cc.winSize.width / 2, a.x, cc.winSize.width / 2),
						o = i.Clamp(-cc.winSize.height / 2, a.y, cc.winSize.height / 2);
					a = cc.v2(s, o), 0 == i.curScene.deleteArea.active && (i.curScene.deleteArea.active = !0, i.curScene.ShowHidePanelHandle(1)), this.node.position = a;
					var c = i.curScene.deleteArea.convertToWorldSpaceAR(i.curScene.deleteArea.children[2].position),
						r = this.node.parent.convertToWorldSpaceAR(this.node.position);
					r.y = r.y - this.node.height / 2, Math.abs(r.y - c.y) <= i.curScene.deleteArea.children[2].height / 2 ? (i.curScene.deleteArea.children[0].active = !1, i.curScene.deleteArea.children[1].active = !0) : (i.curScene.deleteArea.children[0].active = !0, i.curScene.deleteArea.children[1].active = !1), this.lastPosition = t
				}
			},
			onTouchEnd: function(e) {
				var t = i.curScene.mtId.indexOf(e.getID()); - 1 != t && i.curScene.mtId.splice(t, 1);
				var n = i.curScene.deleteArea.convertToWorldSpaceAR(i.curScene.deleteArea.children[2].position),
					a = this.node.parent.convertToWorldSpaceAR(this.node.position);
				if (a.y = a.y - this.node.height / 2, Math.abs(a.y - n.y) <= i.curScene.deleteArea.children[2].height / 2) return i.audioManager && i.audioManager.PlayDeleteSound(), i.curStickersNum--, this.node.destroy(), void(i.curScene.mtId.length <= 0 && (i.curScene.deleteArea.active = !1));
				var s = this.node.parent.convertToWorldSpaceAR(this.node.position),
					o = i.curScene.stickers.convertToNodeSpaceAR(s);
				this.node.parent = i.curScene.stickers, this.node.position = o, i.curScene.mtId.length <= 0 && (i.curScene.deleteArea.active = !1)
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager"
	}],
	MyProgressBar: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "c21bcV5FShNn5ou3Hx+2w5O", "MyProgressBar");
		var i = cc.Enum({
			HORIZONTAL: 0,
			VERTICAL: 1,
			FILLED: 2
		});
		cc.Class({
			extends: cc.ProgressBar,
			properties: {
				mask: {
					type: cc.Node,
					default: null
				},
				effectNode: cc.Node
			},
			clamp01: function(e) {
				return e < 0 ? 0 : e < 1 ? e : 1
			},
			_updateBarStatus: function() {
				if (this.barSprite) {
					var e = this.barSprite.node;
					if (!e) return;
					var t, n, a, s = e.getAnchorPoint(),
						o = e.getContentSize(),
						c = e.getPosition(),
						r = cc.v2(0, .5),
						l = this.clamp01(this.progress),
						h = this.totalLength * l;
					switch (this.mode) {
						case i.HORIZONTAL:
							this.reverse && (r = cc.v2(1, .5)), t = cc.size(h, o.height), n = this.totalLength, a = o.height;
							break;
						case i.VERTICAL:
							r = this.reverse ? cc.v2(.5, 1) : cc.v2(.5, 0), t = cc.size(o.width, h), n = o.width, a = this.totalLength
					}
					if (this.mode === i.FILLED) this.barSprite.type !== cc.Sprite.Type.FILLED ? cc.warn("ProgressBar FILLED mode only works when barSprite's Type is FILLED!") : (this.reverse && (h *= -1), this.barSprite.fillRange = h);
					else if (this.barSprite.type !== cc.Sprite.Type.FILLED) {
						var d = r.x - s.x,
							g = r.y - s.y,
							p = cc.v2(n * d, a * g);
						e.setPosition(c.x + p.x, c.y + p.y), e.setAnchorPoint(r), e.setContentSize(t), this.mask.setContentSize(t), 0 == this.effectNode.active && (this.effectNode.active = !0), this.effectNode.x = this.mask.x + this.mask.width
					} else cc.warn("ProgressBar non-FILLED mode only works when barSprite's Type is non-FILLED!")
				}
			}
		}), cc._RF.pop()
	}, {}],
	NativeControl: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "ae9224sOuJJ2JDaxmlY0nSO", "NativeControl");
		var i = e("GameManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				nativeIconBtn: cc.Button,
				nativeIcon: cc.Sprite,
				nativeBanner: cc.Sprite,
				nativeBannerBtn: cc.Button,
				nativeInterBtn: cc.Button,
				title: cc.Label,
				desc: cc.Label,
				title1: cc.Label,
				desc1: cc.Label
			},
			onLoad: function() {
				"oppo" != i.channel && "vivo" != i.channel || (i.curScene.nativeControl = this)
			},
			onDestroy: function() {
				i.curScene && (i.curScene.nativeControl = null)
			},
			start: function() {
				!i.isShowNative || "oppo" != i.channel && "vivo" != i.channel || (i.adsManager.ShowNativeAd(0, 0, this.ShowNativeIcon), this.schedule(function() {
					try {
						0 == i.curScene.nativeControl.nativeIconBtn.node.active && i.adsManager.ShowNativeAd(0, 0, this.ShowNativeIcon)
					} catch (e) {}
				}, 10))
			},
			ShowNativeIcon: function(e, t) {
				i.curScene.nativeControl.nativeIconBtn.node.active = !1, t && cc.loader.load(t, function(t, n) {
					try {
						if (t) return void console.log(t);
						i.curScene.nativeControl.nativeIconBtn.node.active = !0, i.curScene.nativeControl.nativeIcon.spriteFrame = new cc.SpriteFrame(n);
						var a = new cc.Component.EventHandler;
						a.target = i.curScene.nativeControl.node, a.component = "NativeControl", a.handler = "BtnNativeAdClick";
						var s = e + "&0";
						a.customEventData = s, i.curScene.nativeControl.nativeIconBtn.clickEvents = [], i.curScene.nativeControl.nativeIconBtn.clickEvents.push(a)
					} catch (e) {}
				})
			},
			ShowNativeBanner: function(e, t, n, a) {
				i.curScene.nativeControl.nativeBanner.spriteFrame = null, a && cc.loader.load(a, function(e, t) {
					try {
						if (e) return void console.log(e);
						i.curScene.nativeControl.nativeBanner.spriteFrame = new cc.SpriteFrame(t)
					} catch (e) {}
				}), i.curScene.nativeControl.nativeBannerBtn.node.active = !0, i.curScene.nativeControl.title.string = t, i.curScene.nativeControl.desc.string = n;
				var s = new cc.Component.EventHandler;
				s.target = i.curScene.nativeControl.node, s.component = "NativeControl", s.handler = "BtnNativeAdClick";
				var o = e + "&1";
				s.customEventData = o, i.curScene.nativeControl.nativeBannerBtn.clickEvents = [], i.curScene.nativeControl.nativeBannerBtn.clickEvents.push(s)
			},
			ShowNativeInter: function(e, t, n) {
				i.curScene.nativeControl.nativeInterBtn.node.active = !0, i.curScene.nativeControl.title1.string = t, i.curScene.nativeControl.desc1.string = n;
				var a = new cc.Component.EventHandler;
				a.target = i.curScene.nativeControl.node, a.component = "NativeControl", a.handler = "BtnNativeAdClick";
				var s = e + "&2";
				a.customEventData = s, i.curScene.nativeControl.nativeInterBtn.clickEvents = [], i.curScene.nativeControl.nativeInterBtn.clickEvents.push(a)
			},
			BtnNativeAdClick: function(e, t) {
				var n = t.split("&");
				i.adsManager.ClickNativeAd(n[0], n[1]), "oppo" == i.channel && (0 == n[1] ? i.adsManager.ShowNativeAd(0, 0, i.curScene.nativeControl.ShowNativeIcon) : 1 == n[1] && i.adsManager.ShowNativeAd(1, 2, i.curScene.nativeControl.ShowNativeBanner))
			},
			BtnNativeAdClose: function(e, t) {
				i.adsManager.HideNativeAd(t), 0 == t && this.nativeIconBtn ? this.nativeIconBtn.node.active = !1 : 1 == t && this.nativeBannerBtn ? this.nativeBannerBtn.node.active = !1 : 2 == t && this.nativeInterBtn && (this.nativeInterBtn.node.active = !1)
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager"
	}],
	OPPOBannerCtrl: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "31f85l1zZ9GSrvrqBegn4C6", "OPPOBannerCtrl");
		var i = e("GameManager");
		cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function() {
				"oppo" == i.channel ? cc.game.addPersistRootNode(this.node) : this.node.destroy(), i.OPPOBannerCtrl = this
			},
			Init: function() {
				if (i.isHasAd && i.adsManager && "oppo" == i.channel) {
					if (i.isBannerFirst) {
						if (0 == i.sceneIndex && cc.winSize.height / cc.winSize.width <= 1.7) return;
						if (3 == i.sceneIndex && cc.winSize.height / cc.winSize.width <= 1.8) return;
						i.adsManager.ShowBanner()
					} else if (1 == i.isShowNative) i.adsManager.ShowNativeAd(1, 2, i.curScene.nativeControl.ShowNativeBanner), "oppo" == i.channel && this.schedule(function() {
						try {
							if (0 == i.sceneIndex && cc.winSize.height / cc.winSize.width <= 1.7) return;
							if (3 == i.sceneIndex && cc.winSize.height / cc.winSize.width <= 1.8) return;
							i.curScene.nativeControl && i.adsManager.ShowNativeAd(1, 2, i.curScene.nativeControl.ShowNativeBanner)
						} catch (e) {
							console.log(e)
						}
					}.bind(this), i.OPPONativeBannerTime);
					else {
						if (0 == i.sceneIndex && cc.winSize.height / cc.winSize.width <= 1.7) return;
						if (3 == i.sceneIndex && cc.winSize.height / cc.winSize.width <= 1.8) return;
						i.adsManager.ShowBanner()
					}
					this.scheduleOnce(function() {
						i.isOPPOBannerCtrlStart = !0
					}, 1)
				}
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager"
	}],
	PanelControl: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "caceaR32IdMjK4965dFBt98", "PanelControl"), cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function() {
				this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
			},
			onTouchEnd: function() {
				this.node.active = !1
			},
			start: function() {}
		}), cc._RF.pop()
	}, {}],
	Person: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "5a9b7OiU8VPwZAuOCIEmKqt", "Person");
		var i = e("GameManager");
		cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function() {
				this.afterParts = new Array, this.targetThings = new Array;
				for (var e = this.node.children, t = 0; t < e.length; t++) "hairAfter" == e[t].name ? this.afterParts[0] = e[t] : "dressAfter" == e[t].name ? this.afterParts[1] = e[t] : "headwearAfter" == e[t].name ? this.afterParts[2] = e[t] : "body" == e[t].name ? (this.body = e[t], this.targetThings.push(e[t])) : this.targetThings.push(e[t])
			},
			start: function() {},
			InitMsg: function(e) {
				var t = new Array;
				this.targetThings = new Array;
				for (var n = this.node.children, a = 0; a < n.length; a++)
					if (-1 == n[a].name.indexOf("default"))
						if ("hairAfter" == n[a].name) n[a].getComponent(cc.Sprite).spriteFrame = null;
						else if ("dressAfter" == n[a].name) n[a].getComponent(cc.Sprite).spriteFrame = null;
				else if ("headwearAfter" == n[a].name) n[a].getComponent(cc.Sprite).spriteFrame = null;
				else if ("body" == n[a].name) n[a].getComponent(cc.Sprite).spriteFrame = null, this.targetThings.push(n[a]);
				else if (-1 != n[a].name.indexOf("level"))
					for (var s = n[a].children, o = 0; o < s.length; o++) "shoes" == s[o].name ? t[0] = s[o] : "pants" == s[o].name ? t[1] = s[o] : "coat" == s[o].name && (t[2] = s[o]), this.targetThings.push(s[o]), s[o].getComponent(cc.Sprite).spriteFrame = null;
				else this.targetThings.push(n[a]), n[a].getComponent(cc.Sprite).spriteFrame = null;
				1 == e.sex ? this.targetThings = i.SortByArray(this.targetThings, 1) : 2 == e.sex && (this.targetThings = i.SortByArray(this.targetThings, 2)), i.InitPersonPos(e.sex, this.targetThings, this.afterParts), i.InitPerson(e, this.targetThings, this.afterParts), i.LevelHandle(t, e.level, 0)
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager"
	}],
	PopCat: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "be28enQqXdFOY4ChU0OFqoh", "PopCat"), cc.Class({
			extends: cc.Component,
			properties: {
				label: cc.Label,
				anim: cc.Animation
			},
			unuse: function() {
				this.label.string = "", this.anim.setCurrentTime(0), this.anim.stop()
			},
			reuse: function(e, t) {
				this.init(e, t)
			},
			init: function(e, t) {
				this.node.parent = e, this.label.string = t, this.anim.play()
			},
			destroyPop: function() {
				configCat.gameController.popPool ? configCat.gameController.popPool.put(this.node) : this.node.destroy()
			}
		}), cc._RF.pop()
	}, {}],
	PushConfig: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "9e203VrZLlG3q9dStCHBz/i", "PushConfig"), t.exports = {
			isInit: !1,
			appId: "wx35a415f32417b56c",
			packName: "com.melestudio.Lovelygirl.nearme.gamecenter",
			apkPackName: "com.melestudio.idolGame",
			pushMsg: null,
			pushFrames: null,
			idIndex: [],
			serverPath: "https://push.obs.cn-east-3.myhuaweicloud.com/",
			randomFlag: [],
			fixedDex: [],
			channel: null,
			subChannel: null,
			colorValue1: "#674e90",
			colorValue2: "#6c78c0",
			colorValue3: "#b29acd",
			randomIndex: 0,
			randomIndex1: 0,
			pushCtl: null,
			IndexOf: function(e, t) {
				if (null == e || void 0 == e) return -1;
				for (var n = -1, i = 0; i < e.length; i++)
					if (e[i].ID == t) {
						n = i;
						break
					} return n
			},
			RangeRandom: function(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				if (1 != n && 0 != n && (n = !1), e = Math.floor(e), (t = Math.floor(t)) < e) {
					var i = e;
					e = t, t = i
				}
				if (e == t) return e;
				var a = t - e + (1 == n ? 1 : 0);
				return Math.floor(Math.random() * a) + e
			},
			SortArray: function(e, t) {
				if (void 0 == t && (t = 2), null == e || void 0 == e || t < 0) return console.log("\u4f20\u5165\u6570\u636e\u6709\u8bef"), null;
				for (var n = 0; n < e.length; n++)
					for (var i = n + 1; i < e.length; i++)
						if (0 == t) {
							if (parseInt(e[n].name) > parseInt(e[i].name)) {
								var a = e[n];
								e[n] = e[i], e[i] = a
							}
						} else if (parseInt(e[n].name.substr(e[n].name.length - t, t)) > parseInt(e[i].name.substr(e[i].name.length - t, t))) {
					var s = e[n];
					e[n] = e[i], e[i] = s
				}
				return e
			},
			isSupportPush: void 0,
			IsSupportPush: function() {
				if ("" != this.channel) {
					if (void 0 == this.isSupportPush) {
						var e = !1;
						"qq" != this.channel && "oppo" != this.channel && "wx" != this.channel && ("apk" != this.channel || "honor" != this.subChannel && "vivo" != this.subChannel) || (e = !0, cc.sys.platform != cc.sys.DESKTOP_BROWSER && "oppo" == this.channel && (this.systemInfo = qg.getSystemInfoSync(), e = this.systemInfo.platformVersion >= 1050)), this.isSupportPush = e
					}
				} else console.error("\u8bf7\u5148\u5728\u4e3b\u754c\u9762\u628a\u5f53\u524d\u6e20\u9053\u6807\u5fd7\u4f4d\u8d4b\u503c\u7ed9pushConfig\u4e2d\u7684channel")
			},
			GenerateNums: function(e, t) {
				for (var n = new Array, i = new Array(e), a = 0; a < e; a++) i[a] = a;
				for (var s = 0; s < this.idIndex.length; s++) i[this.idIndex[s]] = -1;
				for (var o = 0; o < this.randomFlag.length; o++) 0 == this.randomFlag[o] && (i[o] = -1);
				for (var c = e - 1; c >= 0; c--) - 1 == i[c] && i.splice(c, 1);
				for (var r = 0; r < t; r++)
					if (!(r < this.randomFlag.length && 0 == this.randomFlag[r]))
						for (;;) {
							var l = this.RangeRandom(0, i.length);
							if (-1 == n.indexOf(l)) {
								n[r] = l;
								break
							}
						}
				for (var h = 0; h < n.length; h++) 0 != this.randomFlag[h] ? this.idIndex[h] = i[n[h]] : this.idIndex[h] = h
			},
			systemInfo: null,
			GetSystemInfo: function() {
				if (cc.sys.platform == cc.sys.DESKTOP_BROWSER) return null;
				if (!this.systemInfo) {
					var e = null;
					"wx" == this.channel ? e = wx.getSystemInfoSync() : "tt" == this.channel ? e = tt.getSystemInfoSync() : "qq" == this.channel ? e = qq.getSystemInfoSync() : "swan" == this.channel ? e = swan.getSystemInfoSync() : "oppo" == this.channel ? e = qg.getSystemInfoSync() : "vivo" == this.channel && (e = qg.getSystemInfoSync()), this.systemInfo = e
				}
			}
		}, cc._RF.pop()
	}, {}],
	PushIcon: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "b13d3M8slhNvYnySstkYQxC", "PushIcon");
		var i = e("../Scripts/GameManager"),
			a = e("PushConfig");
		cc.Class({
			extends: cc.Component,
			properties: {
				image: cc.Sprite,
				nameLanel: cc.Label
			},
			onLoad: function() {
				this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
			},
			start: function() {
				this.moveFlag = !1, this.lastPosition = cc.v2(0, 0)
			},
			InitItem: function(e) {
				this.node.setContentSize(this.node.getChildByName("bottom").getContentSize()), this.image.node.parent.setContentSize(this.image.node.getContentSize()), "qq" == a.channel ? this.image.spriteFrame = a.pushFrames[this.index] : "oppo" == a.channel || "apk" == a.channel ? (a.pushMsg && (e < 3 ? (this.appId = a.pushMsg[a.idIndex[this.index]].ID, this.appName = a.pushMsg[a.idIndex[this.index]].name) : (this.appId = a.pushMsg[this.index].ID, this.appName = a.pushMsg[this.index].name)), this.LoadImage(this.index, e)) : (a.pushMsg && (e < 3 ? (this.appId = a.pushMsg[a.idIndex[this.index]].ID, this.appName = a.pushMsg[a.idIndex[this.index]].name) : (this.appId = a.pushMsg[this.index].ID, this.appName = a.pushMsg[this.index].name)), cc.sys.platform == cc.sys.DESKTOP_BROWSER ? this.LoadImage(this.index, e) : this.LoadImageNew(e, this.index, this.LoadLocalImage))
			},
			LoadImage: function(e, t) {
				var n = a.serverPath + "icons/" + a.pushMsg[e].icon + ".png";
				t < 3 && (n = a.serverPath + "icons/" + a.pushMsg[a.idIndex[e]].icon + ".png"), cc.loader.load(n, function(n, i) {
					try {
						if (e != this.index) return;
						if (n) return console.log(n), void(this.image.spriteFrame = null);
						t < 3 ? (this.appId = a.pushMsg[a.idIndex[e]].ID, this.appName = a.pushMsg[a.idIndex[e]].name) : (this.appId = a.pushMsg[e].ID, this.appName = a.pushMsg[e].name), this.nameLanel && (this.nameLanel.string = this.appName), this.image.spriteFrame = new cc.SpriteFrame(i)
					} catch (e) {
						console.log(e)
					}
				}.bind(this))
			},
			LoadImageNew: function(e, t, n) {
				var i = t;
				e < 3 && (i = a.idIndex[t]);
				var s = this,
					o = a.pushMsg[i].icon,
					c = a.serverPath + "icons/" + a.pushMsg[i].icon + ".png",
					r = wx.getFileSystemManager();
				r.access({
					path: wx.env.USER_DATA_PATH + "/wxPush/" + o + ".png",
					success: function(i) {
						n(wx.env.USER_DATA_PATH + "/wxPush/" + o + ".png", s, t, e)
					},
					fail: function(i) {
						wx.downloadFile({
							url: c,
							success: function(i) {
								r.access({
									path: wx.env.USER_DATA_PATH + "/wxPush/",
									success: function(a) {
										r.saveFile({
											tempFilePath: i.tempFilePath,
											filePath: wx.env.USER_DATA_PATH + "/wxPush/" + o + ".png",
											success: function(i) {
												n(wx.env.USER_DATA_PATH + "/wxPush/" + o + ".png", s, t, e)
											},
											fail: function(e) {
												n(null)
											}
										})
									},
									fail: function(a) {
										r.mkdir({
											dirPath: wx.env.USER_DATA_PATH + "/wxPush/",
											success: function(a) {
												r.saveFile({
													tempFilePath: i.tempFilePath,
													filePath: wx.env.USER_DATA_PATH + "/wxPush/" + o + ".png",
													success: function(i) {
														n(wx.env.USER_DATA_PATH + "/wxPush/" + o + ".png", s, t, e)
													},
													fail: function(e) {
														n(null)
													}
												})
											},
											fail: function(a) {
												r.saveFile({
													tempFilePath: i.tempFilePath,
													filePath: wx.env.USER_DATA_PATH + "/wxPush/" + o + ".png",
													success: function(i) {
														n(wx.env.USER_DATA_PATH + "/wxPush/" + o + ".png", s, t, e)
													},
													fail: function(e) {
														n(null)
													}
												})
											}
										})
									}
								})
							},
							fail: function(e) {
								n(null)
							}
						})
					}
				})
			},
			LoadLocalImage: function(e, t, n, i) {
				null != e ? cc.loader.load(e, function(e, s) {
					try {
						if (n != t.index) return;
						if (e) return t.node.active = !1, void console.log(e);
						i < 3 ? (t.appId = a.pushMsg[a.idIndex[n]].ID, t.appName = a.pushMsg[a.idIndex[n]].name) : (t.appId = a.pushMsg[n].ID, t.appName = a.pushMsg[n].name), t.nameLanel && (t.nameLanel.string = a.pushMsg[n].name), t.image.spriteFrame = new cc.SpriteFrame(s)
					} catch (e) {
						console.log(e)
					}
				}) : t.node.active = !1
			},
			onTouchStart: function(e) {
				this.lastPosition = e.touch.getLocation(), this.moveFlag = !1
			},
			onTouchMove: function(e) {
				var t = e.touch.getLocation();
				(Math.abs(t.x - this.lastPosition.x) > 5 || Math.abs(t.y - this.lastPosition.y) > 5) && (this.moveFlag = !0)
			},
			onTouchEnd: function() {
				if (cc.sys.platform != cc.sys.DESKTOP_BROWSER && 0 == this.moveFlag) {
					var e = this;
					"qq" == a.channel ? i.adsManager.ShowAppBox() : "wx" == a.channel ? wx.navigateToMiniProgram({
						appId: e.appId,
						success: function(e) {},
						fail: function(e) {
							console.log(e), 0 == a.pushCtl.panel.active && a.pushCtl.CreatePushPanel()
						}
					}) : "swan" == a.channel ? swan.navigateToMiniProgram({
						appKey: e.appId,
						success: function(e) {},
						fail: function(e) {
							console.log("\u8df3\u8f6c\u5931\u8d25" + e)
						}
					}) : "oppo" == a.channel ? qg.navigateToMiniGame({
						pkgName: e.appId,
						success: function() {
							var t = i.sceneIndex + e.appName;
							mta.Event.stat("oppopush", {
								game: t
							})
						},
						fail: function(e) {
							console.log(JSON.stringify(e))
						}
					}) : "apk" == a.channel && (cc.sys.os, cc.sys.OS_ANDROID)
				}
			}
		}), cc._RF.pop()
	}, {
		"../Scripts/GameManager": "GameManager",
		PushConfig: "PushConfig"
	}],
	PushItemRemark: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "f9ddeZwkI1FE6KCGmlJSyhu", "PushItemRemark");
		var i = e("PushConfig");
		cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function() {
				this.maxSize = 7, this.fontNum = 2, this.backNum = 4, this.node.parent.parent.getComponent(cc.ScrollView).vertical ? (this.startPos = this.node.y, this.diretorFlag = !0) : (this.startPos = this.node.x, this.diretorFlag = !1, this.maxSize = 8)
			},
			start: function() {},
			LoadData: function(e, t, n, a, s) {
				this.type = s, void 0 != a && (this.node.parent.parent.width = a.x, this.node.parent.parent.height = a.y), this.itemSpace = e, this.sideSpace = t, this.unitNum = n, this.isScrollChange = !1, this.curDex = 0, this.maxDex = Math.floor((i.pushMsg.length - 1) / this.unitNum) * this.unitNum;
				for (var o = this.node.children, c = this.curDex; c < this.curDex + this.unitNum * this.maxSize && c < i.pushMsg.length; c++) this.InitItemMsg(c, o[c - this.curDex], s);
				i.pushMsg.length - this.curDex >= this.unitNum * (this.maxSize - 1) && (i.pushMsg.length - this.curDex > this.unitNum * this.maxSize && (this.isScrollChange = !0), this.bottomIndex = this.unitNum * (this.maxSize - 1)), 1 == this.diretorFlag ? this.node.y = this.startPos : this.node.x = this.startPos, this.lastIndex = this.curDex, this.topIndex = 0
			},
			InitItemMsg: function(e, t) {
				if (e > i.pushMsg.length - 1) null == t && void 0 == t || (t.active = !1);
				else if (!(e < 0)) {
					var n = null;
					null != t || void 0 != t ? n = t : (n = 1 == this.diretorFlag ? cc.instantiate(i.verIconPrefab) : cc.instantiate(i.iconPrefab)).parent = this.node;
					var a = cc.Color.BLACK;
					0 == this.diretorFlag && (1 == this.type ? n.getChildByName("bottom") && (n.getChildByName("bottom").color = a.fromHEX(i.colorValue1)) : n.getChildByName("bottom") && (n.getChildByName("bottom").color = a.fromHEX(i.colorValue2))), n.active = !0;
					var s = n.getComponent("PushIcon");
					if (s.index = e, s.InitItem(5), 0 == e) {
						this.itemW = n.width, this.itemH = n.height;
						var o = Math.ceil(i.pushMsg.length / this.unitNum);
						if (1 == this.diretorFlag) {
							var c = 2 * this.sideSpace + (this.itemH + this.itemSpace) * o - this.itemSpace;
							this.node.height = c, this.node.width = 2 * this.sideSpace + (this.itemW + this.itemSpace) * this.unitNum - this.itemSpace, this.node.parent.parent.width = 2 * this.sideSpace + (this.itemW + this.itemSpace) * this.unitNum - this.itemSpace, this.node.parent.parent.height = this.node.parent.parent.width
						} else {
							var r = 2 * this.sideSpace + (this.itemW + this.itemSpace) * o - this.itemSpace;
							this.node.width = r, this.node.height = this.node.parent.parent.height
						}
					}
					if (1 == this.diretorFlag) {
						var l = -this.sideSpace - this.itemH / 2 - Math.floor(e / this.unitNum) * (this.itemH + this.itemSpace),
							h = -this.node.width / 2 + this.sideSpace + this.itemW / 2 + e % this.unitNum * (this.itemW + this.itemSpace);
						n.setPosition(h, l)
					} else {
						var d = this.sideSpace + this.itemW / 2 + Math.floor(e / this.unitNum) * (this.itemW + this.itemSpace),
							g = -this.node.height / 2 + this.sideSpace + this.itemH / 2 + e % this.unitNum * (this.itemH + this.itemSpace);
						1 == this.unitNum && (g = 0), n.setPosition(d, g)
					}
				}
			},
			UpdateTwoRowItem: function(e) {
				var t = this.node.children;
				if (0 == e) {
					var n = t[this.topIndex].getComponent("PushIcon").index + this.unitNum * this.maxSize;
					if (n >= i.pushMsg.length) return;
					for (var a = this.topIndex; a < this.topIndex + this.unitNum; a++, n++) this.InitItemMsg(n, t[a]);
					this.bottomIndex = this.topIndex, this.topIndex += this.unitNum, this.topIndex > this.unitNum * (this.maxSize - 1) && (this.topIndex = 0)
				} else if (1 == e) {
					var s = t[this.bottomIndex].getComponent("PushIcon").index - this.unitNum * this.maxSize;
					if (s < 0) return;
					for (var o = this.bottomIndex; o < this.bottomIndex + this.unitNum; o++, s++) this.InitItemMsg(s, t[o]);
					this.topIndex = this.bottomIndex, this.bottomIndex -= this.unitNum, this.bottomIndex < 0 && (this.bottomIndex = this.unitNum * (this.maxSize - 1))
				}
			},
			OnScrollRectScrolled: function() {
				if (0 != this.isScrollChange)
					if (1 == this.diretorFlag) {
						if (this.node.y < this.startPos) return;
						var e = Math.floor((this.node.y - this.startPos) / (this.itemH + this.itemSpace)) * this.unitNum;
						if (e == this.lastIndex) return;
						this.UpdateScrollView(e)
					} else {
						if (this.node.x > this.startPos) return;
						var t = Math.floor((this.startPos - this.node.x) / (this.itemW + this.itemSpace)) * this.unitNum;
						if (t == this.lastIndex) return;
						this.UpdateScrollView(t)
					}
			},
			UpdateScrollView: function(e) {
				if (e < this.lastIndex) {
					if (e > this.maxDex - (this.backNum + 1) * this.unitNum) return;
					this.UpdateTwoRowItem(1)
				} else if (e > this.lastIndex) {
					if (e < (this.fontNum + 1) * this.unitNum) return;
					this.UpdateTwoRowItem(0)
				}
				this.lastIndex = e
			}
		}), cc._RF.pop()
	}, {
		PushConfig: "PushConfig"
	}],
	PushNodeCtl: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "3feffiBl4JPRpwydpqkRQ2R", "PushNodeCtl");
		var i, a = e("PushConfig");
		cc.Class({
			extends: cc.Component,
			properties: {
				iconPrefab: cc.Prefab,
				verIconPrefab: cc.Prefab,
				horScrollView: cc.Prefab,
				verScrollView: cc.Prefab,
				panel: cc.Node,
				continuePanel: cc.Node,
				continueItem: cc.Prefab,
				timerType: -1,
				drawerPrefab: cc.Prefab,
				fixNumPrefab: cc.Prefab,
				allTimes: 4,
				domainCanvasPanel: cc.Node,
				domainCanvasAppName: null,
				domainCanvasAppId: null
			},
			onLoad: function() {
				this.timer = 0, a.pushCtl = this, i = this, this.fixedNumPanel = void 0, a.IsSupportPush(), 1 == a.isSupportPush && (a.iconPrefab = this.iconPrefab, a.verIconPrefab = this.verIconPrefab, a.continuePrefab = this.continueItem, 0 == a.isInit && (a.isInit = !0, "qq" != a.channel && (null == a.channel && console.error("\u8bf7\u5148\u5728\u4e3b\u754c\u9762\u628a\u5f53\u524d\u6e20\u9053\u6807\u5fd7\u4f4d\u8d4b\u503c\u7ed9pushConfig\u4e2d\u7684channel"), "" == a.appId && console.error("\u5fae\u4fe1\u6e20\u9053\u8bf7\u5148\u68c0\u67e5pushConfig\u4e2d\u7684appid\u662f\u5426\u5df2\u7ecf\u6539\u6210\u5f53\u524d\u6e38\u620f\u5bf9\u5e94\u7684appid\n\u5982\u679c\u662foppo\u7684\u8bdd\u68c0\u67e5packName\u662f\u5426\u662f\u5f53\u524d\u6e38\u620f\u7684\u5305\u540d\n\u9632\u6b62\u968f\u673a\u7684\u65f6\u5019\u968f\u673a\u5230\u5f53\u524d\u6e38\u620f"))), a.idIndex = [])
			},
			start: function() {},
			CheckMsgIsLoad: function(e, t, n, i, s, o, c, r, l) {
				if (0 != a.isSupportPush) {
					if ("wx" == a.channel) {
						if (null == a.pushMsg) {
							var h = a.serverPath + "pushMsg.json";
							return cc.loader.load(h, function(e, h) {
								if (e) console.log(e, h);
								else {
									a.pushMsg = h.body;
									var d = a.IndexOf(a.pushMsg, a.appId); - 1 != d && a.pushMsg.splice(d, 1), a.randomFlag = h.randomFlag, t(n, i, s, o, c, r, l)
								}
							}.bind(this)), !1
						}
					} else if ("oppo" == a.channel) {
						if (a.GetSystemInfo(), null == a.pushMsg) {
							var d = a.serverPath + "oppo/pushMsg.json";
							cc.loader.load(d, function(l, h) {
								if (l) console.log(l, h);
								else {
									a.pushMsg = h.body;
									var d = a.IndexOf(a.pushMsg, a.packName); - 1 != d && a.pushMsg.splice(d, 1), a.randomFlag = h.randomFlag, e < 3 ? t(n, i, s) : t(n, i, s, o, c, r)
								}
							}.bind(this));
							var g = a.serverPath + "oppo/pushMsg.json",
								p = new XMLHttpRequest;
							return p.onreadystatechange = function() {
								if (4 == p.readyState && p.status >= 200 && p.status < 400) {
									var l = p.responseText;
									"{" != l[0] && (l = l.substr(1)), a.pushMsg = JSON.parse(l).body;
									var h = a.IndexOf(a.pushMsg, a.packName); - 1 != h && a.pushMsg.splice(h, 1), a.randomFlag = JSON.parse(l).randomFlag, e < 3 ? t(n, i, s) : t(n, i, s, o, c, r)
								}
							}, p.open("GET", g, !0), p.send(), !1
						}
					} else if ("qq" == a.channel) {
						if (null == a.pushFrames) return cc.loader.loadResDir("push", cc.SpriteFrame, function(c, r) {
							c ? console.log(c) : (a.pushFrames = a.SortArray(r), e < 3 ? t(n, i, s) : t(n, i, s, o))
						}), !1
					} else if ("apk" == a.channel && ("honor" == a.subChannel || "vivo" == a.subChannel) && null == a.pushMsg) {
						var u = a.serverPath + "apk/pushMsg.json";
						"vivo" == a.subChannel && (u = a.serverPath + "apk/vivo/pushMsg.json");
						var m = new XMLHttpRequest;
						return m.onreadystatechange = function() {
							if (4 == m.readyState && m.status >= 200 && m.status < 400) {
								var l = m.responseText;
								"{" != l[0] && (l = l.substr(1)), a.pushMsg = JSON.parse(l).body;
								var h = a.IndexOf(a.pushMsg, a.apkPackName); - 1 != h && a.pushMsg.splice(h, 1), a.randomFlag = JSON.parse(l).randomFlag, e < 3 ? t(n, i, s) : t(n, i, s, o, c, r)
							}
						}, m.open("GET", u, !0), m.send(), !1
					}
					return !0
				}
			},
			CreateOneRow: function(e, t, n) {
				var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
				try {
					if (0 == a.isSupportPush) return;
					if (void 0 != i.rowNode) {
						i.timerType = 0, "wx" != a.channel && "oppo" != a || i.UpdatePushMsg(0), i.rowNode.active = !0, i.rowNode.position = n, i.rowNode.scale = s;
						for (var o = i.rowNode.children, c = 0; c < o.length; c++) 0 == c && (i.itemW = o[c].width, i.itemH = o[c].height, r = cc.v2((i.itemW + t) * e - t, i.itemH)), o[c].x = -r.x / 2 + i.itemW / 2 + c * (i.itemW + t), o[c].y = 0;
						return
					}
					if (0 == i.CheckMsgIsLoad(0, i.CreateOneRow, e, t, n, s)) return;
					i.timerType = 0, i.rowNode = new cc.Node, i.rowNode.parent = i.node.getChildByName("push"), i.rowNode.position = n, i.rowNode.scale = s;
					for (var r = cc.v2(0, 0), l = cc.Color.BLACK, h = 0; h < e; h++) {
						var d = cc.instantiate(i.iconPrefab);
						d.parent = i.rowNode, d.getChildByName("bottom").color = l.fromHEX(a.colorValue1);
						var g = d.getComponent("PushIcon");
						g.index = h, "qq" == a.channel && g.InitItem(), 0 == h && (i.itemW = d.width, i.itemH = d.height, r = cc.v2((i.itemW + t) * e - t, i.itemH)), d.x = -r.x / 2 + i.itemW / 2 + h * (i.itemW + t), d.y = 0
					}
					i.UpdatePushMsg(0)
				} catch (e) {}
			},
			CreateOneCol: function(e, t, n) {
				var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
				if (0 != a.isSupportPush) {
					if (void 0 != i.colNode) return i.timerType = 1, i.UpdatePushMsg(1), i.colNode.active = !0, i.colNode.position = n, void(i.colNode.scale = s);
					if (0 != i.CheckMsgIsLoad(1, i.CreateOneCol, e, t, n, s)) {
						i.timerType = 1, i.colNode = new cc.Node, i.colNode.parent = i.node.getChildByName("push"), i.colNode.position = n, i.colNode.scale = s;
						for (var o = cc.v2(0, 0), c = cc.Color.BLACK, r = 0; r < e; r++) {
							var l = cc.instantiate(i.iconPrefab);
							l.parent = i.colNode, l.getChildByName("bottom").color = c.fromHEX(a.colorValue1);
							var h = l.getComponent("PushIcon");
							h.index = r, "qq" == a.channel && h.InitItem(), 0 == r && (i.itemW = l.width, i.itemH = l.height, o = cc.v2(i.itemW, (i.itemH + t) * e - t)), l.x = 0, l.y = o.y / 2 - i.itemH / 2 - r * (i.itemH + t)
						}
						i.UpdatePushMsg(1)
					}
				}
			},
			CreateTwoCol: function(e, t, n) {
				if (0 != a.isSupportPush)
					if (void 0 == i.twoColNode) {
						if (0 != i.CheckMsgIsLoad(2, i.CreateTwoCol, e, t, n)) {
							i.timerType = 2;
							var s = cc.winSize.width - 20;
							i.twoColNode = new cc.Node, i.twoColNode.parent = i.node.getChildByName("push"), i.twoColNode.position = n;
							for (var o = cc.v2(0, 0), c = 0, r = cc.Color.BLACK, l = 0; l < 2 * e; l++) {
								var h = cc.instantiate(i.iconPrefab);
								h.parent = i.twoColNode, h.getChildByName("bottom").color = r.fromHEX(a.colorValue1);
								var d = h.getComponent("PushIcon");
								d.index = l, "qq" == a.channel && d.InitItem(), 0 == l && (i.itemW = h.width, i.itemH = h.height, o = cc.v2(i.itemW, (i.itemH + t) * e - t), c = (s - i.itemW) / 2), h.x = l < e ? -c : c, h.y = o.y / 2 - i.itemH / 2 - l % e * (i.itemH + t)
							}
							i.UpdatePushMsg(2)
						}
					} else {
						i.timerType = 2, i.UpdatePushMsg(2), i.twoColNode.active = !0, i.twoColNode.position = n;
						for (var g = i.twoColNode.children, p = 0; p < g.length; p++) 0 == p && (i.itemW = g[p].width, i.itemH = g[p].height, o = cc.v2(i.itemW, (i.itemH + t) * e - t), c = (s - i.itemW) / 2), g[p].x = p < e ? -c : c, g[p].y = o.y / 2 - i.itemH / 2 - p % e * (i.itemH + t)
					}
			},
			CreateVerPanel: function(e, t, n) {
				if (0 != a.isSupportPush && void 0 == i.verPanel) {
					i.verPanel = new cc.Node, i.verPanel.parent = i.panel.getChildByName("ver"), i.verPanel.position = cc.v2(0, 0);
					var s = cc.instantiate(i.verScrollView);
					s.parent = i.verPanel, s.getComponent(cc.ScrollView).content.getComponent("PushItemRemark").LoadData(e, t, n)
				}
			},
			CreateHorPanel: function(e, t, n, s, o) {
				var c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
				if (0 != a.isSupportPush)
					if (1 == e) {
						var r = new cc.Node;
						r.parent = i.panel.getChildByName("hor"), r.position = cc.v2(0, 0);
						var l = cc.instantiate(i.horScrollView);
						l.parent = r, l.getComponent(cc.ScrollView).content.getComponent("PushItemRemark").LoadData(t, n, 1, o, c)
					} else {
						if (console.log(i.horPanel), void 0 != i.horPanel) return void(i.node.getChildByName("horPanel").active = !0);
						if (0 == i.CheckMsgIsLoad(3, i.CreateHorPanel, e, t, n, s, o, c)) return;
						i.node.getChildByName("horPanel").active = !0, i.horPanel = new cc.Node, i.horPanel.parent = i.node.getChildByName("horPanel");
						var h = cc.Color.BLACK;
						i.node.getChildByName("horPanel").getChildByName("frame").color = 1 == c ? h.fromHEX(a.colorValue1) : h.fromHEX(a.colorValue2), i.horPanel.position = cc.v2(0, 0);
						var d = cc.instantiate(i.horScrollView);
						d.parent = i.horPanel, d.getComponent(cc.ScrollView).content.getComponent("PushItemRemark").LoadData(t, n, 1, o, c), console.log(i.horPanel)
					}
			},
			CreatePushPanel: function() {
				if (0 != a.isSupportPush) return i.verPanel ? (i.panel.active = !0, void i.OpenDomainEvent()) : void(0 != i.CheckMsgIsLoad(4, i.CreatePushPanel) && (i.panel.active = !0, i.CreateVerPanel(5, 10, 3), i.CreateHorPanel(!0, 15, 10, 1, cc.v2(654, 150), 2), i.OpenDomainEvent()))
			},
			CreateDrawerPush: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 9,
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
				try {
					if (0 == a.isSupportPush) return;
					if (void 0 != i.drawerNode) return i.drawerNode.active = !0, void(i.drawerNode.y = e);
					if (0 == i.CheckMsgIsLoad(10, i.CreateDrawerPush, e, t, n)) return;
					var s = cc.instantiate(i.drawerPrefab);
					s.parent = i.node.getChildByName("bottom"), s.x = -cc.winSize.width / 2, s.y = e, s.scale = n, s.getChildByName("pushPanel").y = -e, s.getChildByName("image").y = -e, i.drawerNode = s, i.drawerFlag = void 0;
					var o = s.getChildByName("btnPush").getComponent(cc.Button),
						c = o.node.children;
					c[0].active = !0, c[1].active = !1;
					var r = new cc.Component.EventHandler;
					r.target = i.node, r.component = "PushNodeCtl", r.handler = "BtnDrawerPush", o.clickEvents = [], o.clickEvents.push(r);
					for (var l = cc.Color.BLACK, h = i.drawerNode.getChildByName("pushPanel"), d = 10, g = 10, p = 0; p < t; p++) {
						var u = cc.instantiate(i.iconPrefab);
						u.parent = h, u.getChildByName("bottom").color = l.fromHEX(a.colorValue1);
						var m = u.getComponent("PushIcon");
						m.index = p + a.randomIndex, m.index >= a.pushMsg.length && (m.index = m.index - a.pushMsg.length), p == t - 1 && 0 != a.randomFlag[0] && (a.randomIndex = m.index + 1), m.InitItem(10), 0 == p && (i.itemW = u.width, i.itemH = u.height, d = (h.width - 3 * i.itemW) / 4, g = (h.height - 3 * i.itemH) / 4);
						var f = p % 3,
							v = Math.floor(p / 3);
						u.x = -h.width + d + i.itemW / 2 + f * (d + i.itemW), u.y = h.height / 2 - g - v * (g + i.itemH)
					}
				} catch (e) {}
			},
			UpdateDrawerMsg: function() {
				for (var e = i.drawerNode.getChildByName("pushPanel").children, t = 0; t < e.length; t++) {
					var n = e[t].getComponent("PushIcon");
					n.index = t + a.randomIndex, n.index >= a.pushMsg.length && (n.index = n.index - a.pushMsg.length), t == e.length - 1 && (a.randomIndex = n.index + 1), n.InitItem(10)
				}
			},
			BtnDrawerPush: function(e) {
				e.target.getComponent(cc.Button).interactable = !1, i.scheduleOnce(function() {
					e.target.getComponent(cc.Button).interactable = !0
				}, .5);
				var t = e.target.children;
				if (void 0 === i.drawerFlag || i.drawerFlag) {
					t[0].active = !1, t[1].active = !0;
					var n = -cc.winSize.width / 2 + i.drawerNode.children[1].width * i.drawerNode.scale;
					cc.tween(i.drawerNode).to(.5, {
						x: n
					}).start(), void 0 != i.drawerFlag && i.UpdateDrawerMsg(), i.drawerFlag = !1
				} else t[0].active = !0, t[1].active = !1, i.drawerFlag = !0, cc.tween(i.drawerNode).to(.5, {
					x: -cc.winSize.width / 2
				}).start()
			},
			UnfoldDrawer: function() {
				var e = i.drawerNode.getChildByName("btnPush").children;
				e[0].active = !1, e[1].active = !0;
				var t = -cc.winSize.width / 2 + i.drawerNode.children[1].width * i.drawerNode.scale;
				cc.tween(i.drawerNode).to(.5, {
					x: t
				}).start(), i.UpdateDrawerMsg(), i.drawerFlag = !1
			},
			CreateFixNumPush: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
					t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cc.v2(0, 0),
					s = arguments.length > 3 ? arguments[3] : void 0,
					o = arguments.length > 4 ? arguments[4] : void 0,
					c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
					r = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
				if (0 != a.isSupportPush) {
					if (void 0 != i.fixedNumPanel) return i.fixedNumPanel.position = n, i.fixedNumPanel.active = !0, void this.UpdateFixedPanelMsg();
					if (0 != i.CheckMsgIsLoad(11, i.CreateFixNumPush, e, t, n, s, o, c, r)) {
						var l = cc.instantiate(i.fixNumPrefab);
						l.parent = i.node, l.position = n, i.fixedNumPanel = l, i.fixedNumPanel.getChildByName("pushs").scale = c;
						for (var h = cc.Color.BLACK, d = l.getChildByName("pushs"), g = t * e, p = 0; p < g; p++) {
							var u = cc.instantiate(i.iconPrefab);
							u.parent = d, u.getChildByName("bottom").color = h.fromHEX(a.colorValue1);
							var m = u.getComponent("PushIcon");
							m.index = p + a.randomIndex1, m.index >= a.pushMsg.length && (m.index = m.index - a.pushMsg.length), p == g - 1 && 0 != a.randomFlag[1] && (a.randomIndex1 = m.index + 1), m.InitItem(11), 0 == p && (i.itemW = u.width, i.itemH = u.height, d.width = t * (i.itemW + s) + s, d.height = e * (i.itemH + s) - s + 2 * o);
							var f = p % t,
								v = Math.floor(p / t);
							u.x = -d.width / 2 + s + i.itemW / 2 + f * (s + i.itemW), u.y = d.height / 2 - o - v * (s + i.itemH)
						}
						var S = l.getChildByName("btnClose");
						if (r) {
							S.active = !0, S.x = d.width / 2, S.y = d.height / 2;
							var C = S.getComponent(cc.Button),
								y = new cc.Component.EventHandler;
							y.target = i.node, y.component = "PushNodeCtl", y.handler = "HideFixNumPanel", C.clickEvents = [], C.clickEvents.push(y)
						} else S.active = !1
					}
				}
			},
			UpdateFixedPanelMsg: function() {
				i.fixedNumPanel.active = !0;
				for (var e = i.fixedNumPanel.getChildByName("pushs").children, t = 0; t < e.length; t++) {
					var n = e[t].getComponent("PushIcon");
					n.index = t + a.randomIndex1, n.index >= a.pushMsg.length && (n.index = n.index - a.pushMsg.length), t == e.length - 1 && (a.randomIndex1 = n.index + 1), n.InitItem(11)
				}
			},
			UpdatePushMsg: function(e) {
				if (0 != a.isSupportPush && "qq" != a.channel) {
					var t = 0,
						n = null;
					if (0 == e && this.rowNode) t = this.rowNode.childrenCount, a.GenerateNums(a.pushMsg.length, t), n = this.rowNode.children;
					else if (1 == e && this.colNode) t = this.colNode.childrenCount, a.GenerateNums(a.pushMsg.length, t), n = this.colNode.children;
					else {
						if (2 != e || !this.twoColNode) return;
						t = this.twoColNode.childrenCount, a.GenerateNums(a.pushMsg.length, t), n = this.twoColNode.children
					}
					if (n)
						for (var i = 0; i < n.length; i++) {
							var s = n[i].getComponent("PushIcon");
							s.appId != a.pushMsg[a.idIndex[i]].ID && s.InitItem(0)
						}
				}
			},
			OneRowNodeAnimPlay: function(e) {
				if (void 0 != e)
					for (var t = e.children, n = 0; n < t.length; n++) t[n].getComponent(cc.Animation).play("PushIconAnim", 0)
			},
			OneRowNodeAnimStop: function(e) {
				if (void 0 != e)
					for (var t = e.children, n = 0; n < t.length; n++) t[n].getComponent(cc.Animation).play("pushAnimDefault")
			},
			HideOneRow: function() {
				this.timerType = -1, this.timer = 0, this.rowNode && (this.rowNode.active = !1)
			},
			HideOneCol: function() {
				this.timerType = -1, this.timer = 0, this.colNode && (this.colNode.active = !1)
			},
			HideTwoCol: function() {
				this.timerType = -1, this.timer = 0, this.twoColNode && (this.twoColNode.active = !1)
			},
			HideHorScroll: function() {
				this.node.getChildByName("horPanel").active = !1
			},
			HideDrawerNode: function() {
				this.drawerNode && (this.drawerNode.active = !1)
			},
			HideFixNumPanel: function() {
				this.fixedNumPanel && (this.fixedNumPanel.active = !1)
			},
			BtnBack: function() {
				this.panel.active = !1
			},
			BtnContinueBack: function() {
				this.continuePanel.active = !1
			},
			update: function(e) {
				-1 != i.timerType && (this.timer += e, this.timer >= this.allTimes && (i.UpdatePushMsg(i.timerType), this.timer = 0))
			},
			BtnContinueGameClick: function() {
				if (this.continuePanel.active = !0, 0 != a.isSupportPush)
					if (i.continueGamePanel) i.continuePanel.active = !0;
					else if (i.continuePanel.active = !0, void 0 == i.continueGamePanel) {
					i.continueGamePanel = new cc.Node, i.continueGamePanel.parent = i.continuePanel, i.continueGamePanel.position = cc.v2(0, 0);
					var e = cc.instantiate(i.verScrollView);
					e.parent = i.continueGamePanel;
					var t = e.getComponent(cc.ScrollView).content.getComponent("PushItemRemark");
					t.maxSize = 10, t.fontNum = 3, t.backNum = 11, t.LoadData(0, 0, 1, void 0, void 0, !0)
				}
			},
			OpenDomainEvent: function() {
				cc.sys.platform != cc.sys.DESKTOP_BROWSER && ("wx" == a.channel && (this.domainCanvasPanel.active = !0, this._loadDomainIamge(), wx.getOpenDataContext().postMessage({
					openPanel: "1"
				})))
			},
			_loadDomainIamge: function() {
				var e = Math.floor(Math.random() * a.pushMsg.length);
				i.domainCanvasAppId = a.pushMsg[e].ID, i.domainCanvasAppName = a.pushMsg[e].name;
				var t = a.serverPath + "icons/" + a.pushMsg[e].icon + ".png";
				cc.loader.load(t, function(e, t) {
					if (e) return console.log("\u5f00\u653e\u57df\u754c\u9762\u56fe\u7247\u52a0\u8f7d\u5931\u8d25"), void console.log(e);
					this.domainCanvasPanel.getChildByName("pushIcon").getChildByName("mask").getChildByName("image").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t)
				}.bind(this))
			},
			BtnDomainCancelClick: function() {
				wx.getOpenDataContext().postMessage({
					hidePanel: "1"
				}), i.domainCanvasAppId = null, i.domainCanvasAppName = null, this.domainCanvasPanel.active = !1
			},
			BtnDomainDetermineClick: function() {}
		}), cc._RF.pop()
	}, {
		PushConfig: "PushConfig"
	}],
	SecondItemRemark: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "a28b1lNsdpOwqiSYnWFUXxc", "SecondItemRemark");
		var i = e("GameManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				colNum: 6,
				maxRow: 7,
				item: cc.Prefab,
				itemW: 100,
				itemH: 100,
				itemSpace: 20
			},
			onLoad: function() {
				this.fontNum = 2, this.backNum = 4, this.isLoadFinish = !1, this.sideSpace = (this.node.width - (this.itemW + this.itemSpace) * this.colNum + this.itemSpace) / 2, void 0 == this.startY && (-1 != i.curScene.name.indexOf("GameScene") && i.isHasAd && i.isShowBanner ? this.startY = 150 : this.startY = this.node.y)
			},
			start: function() {},
			LoadData: function(e, t) {
				0 != t && (t = !0), void 0 == e && (e = []), this.refreshFlag = t, this.isLoadFinish = !1, this.msgList = e, this.isScrollChange = !1;
				for (var n = this.node.children, i = 0; i < n.length; i++) n[i].getComponent("SecondItem").image.spriteFrame = null, n[i].active = !1;
				this.curDex = 0, this.maxDex = Math.floor((e.length - 1 + (t ? 1 : 0)) / this.colNum) * this.colNum;
				for (var a = this.curDex; a < this.curDex + this.colNum * this.maxRow && a < e.length + t; a++) this.InitItemMsg(a, n[a - this.curDex]);
				e.length + (t ? 1 : 0) - this.curDex >= this.colNum * (this.maxRow - 1) && (e.length + (t ? 1 : 0) - this.curDex > this.colNum * this.maxRow && (this.isScrollChange = !0), this.bottomIndex = this.colNum * (this.maxRow - 1));
				var s = Math.ceil((e.length + (t ? 1 : 0)) / this.colNum),
					o = 2 * this.sideSpace + (this.itemH + this.itemSpace) * s - this.itemSpace;
				this.node.height = o, this.startY = this.node.parent.height / 2, this.node.y = this.startY, this.isLoadFinish = !0, this.lastIndex = this.curDex, this.topIndex = 0
			},
			InitItemMsg: function(e, t) {
				if (e > this.msgList.length - 1 + (this.refreshFlag ? 1 : 0)) null == t && void 0 == t || (t.active = !1);
				else if (!(e < 0)) {
					var n = null;
					null != t || void 0 != t ? n = t : (n = cc.instantiate(this.item)).parent = this.node, n.active = !0;
					var a = n.getComponent("SecondItem");
					a.index = e, 0 == i.sceneType && 0 == i.curScene.curInnerType || "t" == i.curType ? this.refreshFlag ? a.InitMsg(0, e, this.msgList[e - 1], this.refreshFlag) : a.InitMsg(0, e, this.msgList[e], this.refreshFlag) : 0 == i.sceneType && 3 == i.curScene.curInnerType ? this.refreshFlag ? a.InitMsg(2, e, this.msgList[e - 1], this.refreshFlag) : a.InitMsg(2, e, this.msgList[e], this.refreshFlag) : this.refreshFlag ? a.InitMsg(1, e, this.msgList[e - 1], this.refreshFlag) : a.InitMsg(1, e, this.msgList[e], this.refreshFlag);
					var s = -this.sideSpace - this.itemH / 2 - Math.floor(e / this.colNum) * (this.itemH + this.itemSpace),
						o = -this.node.width / 2 + this.sideSpace + this.itemW / 2 + e % this.colNum * (this.itemW + this.itemSpace);
					n.setPosition(o, s)
				}
			},
			UpdateTwoRowItem: function(e) {
				var t = this.node.children;
				if (0 == e) {
					var n = t[this.topIndex].getComponent("SecondItem").index + this.colNum * this.maxRow;
					if (n >= this.msgList.length + (this.refreshFlag ? 1 : 0)) return;
					for (var i = this.topIndex; i < this.topIndex + this.colNum; i++, n++) this.InitItemMsg(n, t[i]);
					this.bottomIndex = this.topIndex, this.topIndex += this.colNum, this.topIndex > this.colNum * (this.maxRow - 1) && (this.topIndex = 0)
				} else if (1 == e) {
					var a = t[this.bottomIndex].getComponent("SecondItem").index - this.colNum * this.maxRow;
					if (a < 0) return;
					for (var s = this.bottomIndex; s < this.bottomIndex + this.colNum; s++, a++) this.InitItemMsg(a, t[s]);
					this.topIndex = this.bottomIndex, this.bottomIndex -= this.colNum, this.bottomIndex < 0 && (this.bottomIndex = this.colNum * (this.maxRow - 1))
				}
			},
			ClearData: function() {
				this.node.height = 0;
				for (var e = this.node.children, t = 0; t < this.node.childrenCount; t++) e[t].active = !1
			},
			OnScrollRectScrolled: function() {
				if (0 != this.isLoadFinish && 0 != this.isScrollChange && !(this.node.y < this.startY)) {
					var e = Math.floor((this.node.y - this.startY) / (this.itemH + this.itemSpace)) * this.colNum;
					e != this.lastIndex && this.UpdateScrollView(e)
				}
			},
			UpdateScrollView: function(e) {
				if (e < this.lastIndex) {
					if (e > this.maxDex - (this.backNum + 1) * this.colNum) return;
					this.UpdateTwoRowItem(1)
				} else if (e > this.lastIndex) {
					if (e < this.fontNum * this.colNum) return;
					this.UpdateTwoRowItem(0)
				}
				this.lastIndex = e
			},
			UpdateSelectState: function(e) {
				if (0 == i.sceneType)
					for (var t = i.curScene.secondScrollView.content.children, n = 0; n < t.length; n++) {
						var a = t[n].getComponent("SecondItem");
						a.frameName == i.curScene.selectName[i.curScene.curInnerType] ? a.selectNode.active = !0 : a.selectNode.active = !1
					} else {
						void 0 != e && (this.refreshFlag = e);
						for (var s = i.curScene.secondScrollView1.content.children, o = 0; o < s.length; o++) {
							var c = s[o].getComponent("SecondItem");
							c.frameName == i.curScene.selectName[i.curScene.curInnerType] ? c.selectNode.active = !0 : c.selectNode.active = !1
						}
					}
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager"
	}],
	SecondItem: [function(e, t, n) {
		"use strict";

		function i(e) {
			if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
				if (Array.isArray(e) || (e = a(e))) {
					var t = 0,
						n = function() {};
					return {
						s: n,
						n: function() {
							return t >= e.length ? {
								done: !0
							} : {
								done: !1,
								value: e[t++]
							}
						},
						e: function(e) {
							throw e
						},
						f: n
					}
				}
				throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}
			var i, s, o = !0,
				c = !1;
			return {
				s: function() {
					i = e[Symbol.iterator]()
				},
				n: function() {
					var e = i.next();
					return o = e.done, e
				},
				e: function(e) {
					c = !0, s = e
				},
				f: function() {
					try {
						o || null == i.return || i.return()
					} finally {
						if (c) throw s
					}
				}
			}
		}

		function a(e, t) {
			if (e) {
				if ("string" == typeof e) return s(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
			}
		}

		function s(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
			return i
		}
		cc._RF.push(t, "5de661kmH5La6prku6X/njL", "SecondItem");
		var o = e("GameManager"),
			c = e("mta_analysis");
		cc.Class({
			extends: cc.Component,
			properties: {
				image: cc.Sprite,
				lockNode: cc.Node,
				lockNode2: cc.Node,
				selectNode: cc.Node,
				newNode: cc.Node,
				shareNode: cc.Node
			},
			onLoad: function() {
				this.localFlag = !0
			},
			start: function() {
				this.lastTime = 0, this.lastPosition = cc.v2(0, 0), this.moveFlag = !1, this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
			},
			InitMsg: function(e, t, n, i) {
				this.index = t, this.lockFlag = 0;
				var a = "";
				if (0 == e) {
					if (this.image.getMaterial(0).setProperty("itemColor", cc.v4(1, 1, 1, 1)), this.lockNode2.active = !1, i && 0 == this.index) {
						this.image.spriteFrame = o.curScene.refreshFrame, this.image.node.color = cc.Color.WHITE;
						var s = (this.node.width - 20) / this.image.node.width,
							c = (this.node.height - 20) / this.image.node.height;
						return s = s > c ? c : s, this.image.node.scale = s, this.lockNode.active = !1, this.newNode.active = !1, this.frameName = "0", void("0a" == o.curType && o.curScene.selectName[0] == this.frameName || "t" == o.curType && o.curScene.selectName["t".charCodeAt() - "a".charCodeAt()] == this.frameName ? this.selectNode.active = !0 : this.selectNode.active = !1)
					}
					if (this.frameName = n.name.substr(0, n.name.length - 2), void 0 == n.type && (n.type = o.curType), this.lockFlag = n.name.substr(n.name.length - 1, 1), this.localFlag = n.name.substr(n.name.length - 2, 1), n.color) {
						this.pictureType = 0, this.image.spriteFrame = o.curScene.colorFrame;
						var r = cc.Color.BLACK;
						this.image.node.color = r.fromHEX(n.color);
						var l = (this.node.width - 10) / this.image.node.width,
							h = (this.node.height - 10) / this.image.node.height;
						l = l > h ? h : l, this.image.node.scale = l
					} else void 0 == n.picType ? this.pictureType = 1 : this.pictureType = n.picType, this.image.node.color = cc.Color.WHITE, this.LoadImage(n.type, this.index);
					"0a" == o.curType && o.curScene.selectName[0] == this.frameName || "t" == o.curType && o.curScene.selectName["t".charCodeAt() - "a".charCodeAt()] == this.frameName ? this.selectNode.active = !0 : this.selectNode.active = !1, a = "t" == n.type ? "0a" + this.frameName : n.type + this.frameName, this.localName = a
				} else if (1 == e) {
					this.lockNode2.active = !1, this.image.getMaterial(0).setProperty("itemColor", cc.v4(1, 1, 1, 1));
					var d = 0;
					if (0 == o.sceneType) d = o.curType.split("")[1].charCodeAt() - "a".charCodeAt();
					else 1 == o.sceneType ? d = o.curType.charCodeAt() - "a".charCodeAt() : 2 == o.sceneType && (d = o.curType.charCodeAt() - "A".charCodeAt());
					if (i && 0 == this.index) {
						this.image.spriteFrame = o.curScene.refreshFrame, this.image.node.color = cc.Color.WHITE;
						var g = (this.node.width - 20) / this.image.node.width,
							p = (this.node.height - 20) / this.image.node.height;
						return g = g > p ? p : g, this.image.node.scale = g, this.lockNode.active = !1, this.newNode.active = !1, this.frameName = "0", void(o.curScene.selectName[d] == this.frameName ? this.selectNode.active = !0 : this.selectNode.active = !1)
					}
					this.frameName = n.name.substr(0, n.name.length - 2), this.lockFlag = n.name.substr(n.name.length - 1, 1), this.localFlag = n.name.substr(n.name.length - 2, 1);
					var u = n.type;
					this.image.node.color = cc.Color.WHITE, this.LoadImage(u, this.index), a = n.type + this.frameName, this.localName = a, o.curScene.selectName[d] == this.frameName ? this.selectNode.active = !0 : this.selectNode.active = !1
				} else if (2 == e) {
					this.frameName = t.toString(), this.localName = "cat" + t, this.image.spriteFrame = n;
					var m = (this.node.width - 10) / this.image.node.width,
						f = (this.node.height - 10) / this.image.node.height;
					m = m > f ? f : m, m = Math.min(2, m), this.image.node.scale = m, o.curScene.selectName[t] == this.frameName ? this.selectNode.active = !0 : this.selectNode.active = !1
				}
				if (o.isHasAd)
					if (2 != e) 0 == this.lockFlag ? (this.lockNode.active = !1, this.newNode.active = !1, this.shareNode.active = !1) : 1 == this.lockFlag ? (this.shareNode.active = !1, 3 == o.GetItemLockFlag(a) ? this.lockNode.active = !1 : (this.lockNode.active = !0, -1 != o.fakeUnlockName.indexOf(this.localName) && (this.lockNode.active = !1)), this.newNode.active = !1) : 2 == this.lockFlag ? (this.shareNode.active = !1, 3 == o.GetItemLockFlag(a) ? this.newNode.active = !1 : this.newNode.active = !0, this.lockNode.active = !1) : 3 == this.lockFlag ? (this.shareNode.active = !1, this.lockNode.active = !0, this.newNode.active = !0, 1 != o.GetItemLockFlag(a) && 3 != o.GetItemLockFlag(a) || (this.lockNode.active = !1), 2 != o.GetItemLockFlag(a) && 3 != o.GetItemLockFlag(a) || (this.newNode.active = !1), -1 != o.fakeUnlockName.indexOf(this.localName) && (this.lockNode.active = !1)) : 4 == this.lockFlag ? (this.lockNode.active = !1, this.shareNode.active = !0, this.newNode.active = !0, 3 == o.GetItemLockFlag(a) ? (this.shareNode.active = !1, this.newNode.active = !1) : 1 == o.GetItemLockFlag(a) && (this.shareNode.active = !1, this.newNode.active = !0)) : 5 == this.lockFlag && "ios" != o.channel ? (this.lockNode.active = !1, this.newNode.active = !1, this.shareNode.active = !0, 3 == o.GetItemLockFlag(a) && (this.shareNode.active = !1)) : 5 == this.lockFlag && "ios" == o.channel && (this.lockNode.active = !1, this.newNode.active = !1, this.shareNode.active = !1);
					else if (t < o.maxLevel) {
					this.lockNode.active = !1, this.lockNode2.active = !1, this.image.getMaterial(0).setProperty("itemColor", cc.v4(1, 1, 1, 1));
					var v = "cat" + t;
					3 == o.GetItemLockFlag(v) ? this.newNode.active = !1 : this.newNode.active = !0
				} else {
					this.lockNode2.active = !0;
					var S = cc.color("#c185a5");
					this.image.getMaterial(0).setProperty("itemColor", cc.v4(S.r / 255, S.g / 255, S.b / 255, 1)), this.lockNode.active = !1, this.newNode.active = !1
				} else this.lockNode.active = !1, this.newNode.active = !1
			},
			LoadImage: function(e, t) {
				var n = o.GetPathByType(e);
				if (0 == this.localFlag) {
					var i = n + this.frameName;
					cc.loader.loadRes(i, cc.SpriteFrame, function(n, i) {
						if (o.curType == e && t == this.index) {
							if (n) return console.log(n), void(this.image.spriteFrame = null);
							this.image.spriteFrame = i;
							var a = (this.node.width - 20) / this.image.node.width,
								s = (this.node.height - 20) / this.image.node.height;
							a = a > s ? s : a, a = Math.min(2, a), this.image.node.scale = a
						}
					}.bind(this))
				} else {
					var a = "icon/" + n + this.frameName + ".png";
					0 != o.sceneType && "t" != e || (a = ("0a" == e || "t" == e) && parseInt(this.frameName) > 100 ? n + this.frameName + ".jpg" : o.serverPath + n + this.frameName + ".png"), cc.loader.load(a, function(n, i) {
						if (o.curType == e && t == this.index) {
							if (n) return console.log(n), void(this.image.spriteFrame = null);
							this.image.spriteFrame = new cc.SpriteFrame(i);
							var a = (this.node.width - 20) / this.image.node.width,
								s = (this.node.height - 20) / this.image.node.height;
							a = a > s ? s : a, a = Math.min(2, a), this.image.node.scale = a
						}
					}.bind(this))
				}
			},
			onTouchStart: function(e) {
				this.lastPosition = e.touch.getLocation(), this.moveFlag = !1
			},
			onTouchMove: function(e) {
				var t = e.touch.getLocation();
				(Math.abs(t.x - this.lastPosition.x) > 5 || Math.abs(t.y - this.lastPosition.y) > 5) && (this.moveFlag = !0)
			},
			onTouchEnd: function() {
				if (0 == this.moveFlag) {
					o.audioManager && o.audioManager.PlayClickSound();
					var e = this.image.getMaterial(0).getProperty("itemColor");
					if (1 != e[0] && 1 != e[1] && 1 != e[2] && "0d" == o.curType) return void o.curScene.showToCatScenePanel();
					if (this.lockNode.active) {
						if (o.GetNowTime() - o.lastTime < 1e3) return;
						if (o.lastTime = o.GetNowTime(), o.adsManager.lockType = 1, o.curUnlockItem = this, o.adsManager.ShowVideo(), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel)
							if ("0a" == o.curType) c.Event.stat("ttthingbgwatch", {});
							else if ("0b" == o.curType) c.Event.stat("ttthingtexwatch", {});
						else if ("0c" == o.curType) c.Event.stat("ttthinganimalwatch", {});
						else {
							var t = "ttgirltype" + (o.curType.charCodeAt() - "a".charCodeAt()) + "watch";
							c.Event.stat(t, {})
						}
						return
					}
					if (this.shareNode.active) {
						if (o.GetNowTime() - o.lastTime < 1e3) return;
						if (o.adsManager.lockType = 1, o.lastTime = o.GetNowTime(), o.curUnlockItem = this, cc.sys.platform == cc.sys.DESKTOP_BROWSER) o.curScene.GetReward(0);
						else if ("tt" == o.channel) {
							if (null != o.videoPath ? o.curScene.BtnShareVideo(null) : 1 == o.recorderFlag ? o.GetNowTime() - o.startRecordTime < 3e3 ? (o.curScene.generalRemind.active = !0, o.curScene.generalRemind.getComponent("GeneralRemind").InitPanel(4), o.ShowPanelHandle()) : (o.StopRecord(), this.scheduleOnce(function() {
									o.curScene.BtnShareVideo(null)
								}, .5)) : (o.curScene.generalRemind.active = !0, o.curScene.generalRemind.getComponent("GeneralRemind").InitPanel(4), o.ShowPanelHandle()), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel) {
								var n = "ttgirltype" + (o.curType.charCodeAt() - "a".charCodeAt()) + "share";
								c.Event.stat(n, {})
							}
						} else o.ShareApp(), this.scheduleOnce(function() {
							o.curScene.GetReward(0)
						}, .5);
						return
					}
					this.newNode.active && (this.newNode.active = !1, -1 != o.fakeUnlockName.indexOf(this.localName) ? o.SetItemLockFlag(this.localName, 2) : o.SetItemLockFlag(this.localName, 3));
					var a = this.node.parent.getComponent("SecondItemRemark");
					if (null == this.image.spriteFrame) return;
					if ((0 == o.sceneType && ("0a" == o.curType || "0b" == o.curType) || 0 != o.sceneType) && a.refreshFlag == o.curScene.refreshFlag && o.curScene.selectName[o.curScene.curInnerType] == this.frameName) return void("0b" == o.curType && (o.curScene.textureSprite.node.active = !1, o.curScene.textureSprite.spriteFrame = null, o.curScene.selectName[o.curScene.curInnerType] = -1, a.UpdateSelectState()));
					if (o.curScene.refreshFlag = a.refreshFlag, o.curScene.selectName[o.curScene.curInnerType] = this.frameName, o.curScene.freeStates[o.curScene.curInnerType] = o.curScene.refreshFlag, a.UpdateSelectState(), "0a" == o.curType || "t" == o.curType) 0 == this.index && o.curScene.refreshFlag ? (1 == o.imageMode ? (o.curScene.node.getComponent(cc.Sprite).type = cc.Sprite.Type.SIMPLE, o.curScene.node.getComponent(cc.Sprite).spriteFrame = o.curScene.defaultBgGame, o.curScene.node.color = cc.Color.WHITE) : o.curScene.node.getComponent(cc.Sprite).spriteFrame = null, o.curBgName = 0) : 0 == this.pictureType ? (o.curScene.node.getComponent(cc.Sprite).type = cc.Sprite.Type.SIMPLE, o.curScene.node.getComponent(cc.Sprite).spriteFrame = o.curScene.defaultBg, o.curScene.node.color = this.image.node.color, o.curBgName = "#" + this.image.node.color.toHEX("#rrggbb") + "&" + this.frameName + "&0") : (1 == this.pictureType ? o.curScene.node.getComponent(cc.Sprite).type = cc.Sprite.Type.TILED : o.curScene.node.getComponent(cc.Sprite).type = cc.Sprite.Type.SIMPLE, o.curScene.node.color = cc.Color.WHITE, o.curScene.node.getComponent(cc.Sprite).spriteFrame = this.image.spriteFrame, o.curBgName = this.frameName + this.localFlag + "&" + this.pictureType, o.bgFrame = this.image.spriteFrame), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && ("0a" == o.curType ? c.Event.stat("ttthingbg", {}) : c.Event.stat("ttgirlbg", {}));
					else if (2 == o.curType.length)
						if ("0b" == o.curType) o.curScene.textureSprite.node.active = !0, o.curScene.textureSprite.spriteFrame = this.image.spriteFrame, cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && c.Event.stat("ttthingtex", {});
						else {
							var s = cc.instantiate(o.curScene.moveItem);
							s.parent = o.curScene.stickers, "0d" == o.curType && (s.scale = 1.5), s.getComponent(cc.Sprite).spriteFrame = this.image.spriteFrame, s.position = cc.v2(0, 200), cc.winSize.height / cc.winSize.width < 1.5 && (s.position = cc.v2(0, 0)), o.curStickersNum++, cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && c.Event.stat("ttthinganimal", {})
						}
					else if ("u" == o.curType) {
						if (0 == this.index && o.curScene.refreshFlag) {
							if (o.curScene.targetThings["u".charCodeAt() - "a".charCodeAt() - 1].getComponent(cc.Sprite).spriteFrame = o.curScene.girlFrame, o.personMsg.body = null, 2 == o.personType) {
								var r, l = i(o.curScene.dressupScore);
								try {
									for (l.s(); !(r = l.n()).done;) {
										var h = r.value;
										if (h.name == o.curType) {
											h.score = 0;
											break
										}
									}
								} catch (e) {
									l.e(e)
								} finally {
									l.f()
								}
							}
						} else {
							o.curScene.targetThings["u".charCodeAt() - "a".charCodeAt() - 1].getComponent(cc.Sprite).spriteFrame = this.image.spriteFrame;
							var d = this.frameName + this.localFlag + (0 == this.lockFlag || 2 == this.lockFlag ? 0 : 1);
							if (o.personMsg.body = d, 1 == this.lockFlag || 3 == this.lockFlag ? this.score = o.getPartScore(o.curType, !0) : this.score = o.getPartScore(o.curType, !1), 2 == o.personType) {
								var g, p = !1,
									u = i(o.curScene.dressupScore);
								try {
									for (u.s(); !(g = u.n()).done;) {
										var m = g.value;
										if (m.name == o.curType) {
											m.score = this.score, p = !0;
											break
										}
									}
								} catch (e) {
									u.e(e)
								} finally {
									u.f()
								}
								if (!p) {
									var f = {
										name: o.curType,
										score: this.score
									};
									o.curScene.dressupScore.push(f)
								}
							}
						}
						cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel && c.Event.stat("ttgirlbody", {})
					} else if (o.curType >= "a" || o.curType <= "z" || o.curType >= "A" || o.curType <= "Z") {
						if (0 == this.index && o.curScene.refreshFlag)
							if (o.curType >= "a" && o.curType <= "c" || "e" == o.curType || o.curType >= "A" && o.curType <= "C" || "E" == o.curType) {
								var v = o.curType.charCodeAt() - "a".charCodeAt();
								2 == o.sceneType && (v = o.curType.charCodeAt() - "A".charCodeAt());
								var S = o.defaultDressUp[o.itemName[v]],
									C = S.substr(S.length - 2, 1),
									y = S.substr(0, S.length - 2),
									P = S.substr(S.length - 1, 1);
								o.curScene.UpdatePersonMsg(2, o.curType, null, C, y, P, o.getPartScore(o.curType, !1))
							} else o.curScene.UpdatePersonMsg(0, o.curType, null, 0, this.frameName, 0);
						else {
							if (1 == o.sceneType)
								if ("f" == o.curType || "g" == o.curType) {
									var w = "h".charCodeAt() - "a".charCodeAt();
									o.curScene.targetThings[w].getComponent(cc.Sprite).spriteFrame && (o.curScene.UpdatePersonMsg(0, "h", null, 0, this.frameName, 0), o.curScene.selectName[w] = 0, o.curScene.freeStates[w] = !0)
								} else if ("h" == o.curType) {
								var I = "f".charCodeAt() - "a".charCodeAt();
								o.curScene.targetThings[I].getComponent(cc.Sprite).spriteFrame && (o.curScene.UpdatePersonMsg(0, "f", null, 0, this.frameName, 0), o.curScene.selectName[I] = 0, o.curScene.freeStates[I] = !0), I += 1, o.curScene.targetThings[I].getComponent(cc.Sprite).spriteFrame && (o.curScene.UpdatePersonMsg(0, "g", null, 0, this.frameName, 0), o.curScene.selectName[I] = 0, o.curScene.freeStates[I] = !0)
							}
							1 == this.lockFlag || 3 == this.lockFlag ? this.score = o.getPartScore(o.curType, !0) : this.score = o.getPartScore(o.curType, !1), o.curScene.UpdatePersonMsg(1, o.curType, this.image.spriteFrame, this.localFlag, this.frameName, this.lockFlag, this.score)
						}
						if (cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel) {
							var N = "ttgirltype" + (o.curType.charCodeAt() - "a".charCodeAt());
							c.Event.stat(N, {})
						}
					}
				}
				this.moveFlag = !1
			},
			UpdateItemButton: function(e) {
				if (void 0 == e && (e = 0), this.lockNode.active = !1, this.shareNode.active = !1, 0 == e) {
					if (this.newNode.active ? o.SetItemLockFlag(this.localName, 1) : o.SetItemLockFlag(this.localName, 3), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == o.channel)
						if ("0a" == o.curType) c.Event.stat("ttthingbgwatchfinish", {});
						else if ("0b" == o.curType) c.Event.stat("ttthingtexwatchfinish", {});
					else if ("0c" == o.curType) c.Event.stat("ttthinganimalwatchfinish", {});
					else {
						var t = "ttgirltype" + (o.curType.charCodeAt() - "a".charCodeAt()) + "watchfinish";
						c.Event.stat(t, {})
					}
				} else -1 == o.fakeUnlockName.indexOf(this.localName) && o.fakeUnlockName.push(this.localName)
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager",
		mta_analysis: "mta_analysis"
	}],
	SettingPanelCtl: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "ef11f2A40hBpLKIPcWdzXya", "SettingPanelCtl");
		var i = e("GameManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				musicBtn: cc.Sprite,
				audioBtn: cc.Sprite,
				musicOnFrame: cc.SpriteFrame,
				musicOffFrame: cc.SpriteFrame,
				audioOnFrame: cc.SpriteFrame,
				audioOffFrame: cc.SpriteFrame
			},
			start: function() {},
			InitPanel: function() {
				this.musicBtn.spriteFrame = 1 == i.musicOn ? this.musicOnFrame : this.musicOffFrame, this.audioBtn.spriteFrame = 1 == i.audioOn ? this.audioOnFrame : this.audioOffFrame
			},
			BtnMusicClick: function() {
				i.audioManager && i.audioManager.PlayClickSound(), i.musicOn = !i.musicOn, this.musicBtn.spriteFrame = 1 == i.musicOn ? this.musicOnFrame : this.musicOffFrame
			},
			BtnAudioClick: function() {
				i.audioManager && i.audioManager.PlayClickSound(), i.audioOn = !i.audioOn, this.audioBtn.spriteFrame = 1 == i.audioOn ? this.audioOnFrame : this.audioOffFrame
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager"
	}],
	ShopCatItem: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "cb5876YC2lJEKIsBQttAYTe", "ShopCatItem");
		var i = e("GameManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				nameLabel: cc.Label,
				catSprite: cc.Sprite,
				diamondSprite: cc.SpriteFrame,
				fishCoinSprite: cc.SpriteFrame,
				btnIcon: cc.Sprite,
				btnLabel: cc.Label,
				lockNode: cc.Node,
				isLock: !0
			},
			onLoad: function() {
				this.level = this.node.getSiblingIndex() + 1, this.nameLabel.string = "lv." + this.level + " " + configCat.gameController.catInfo[this.level - 1].name, this.catSprite.spriteFrame = configCat.gameController.catImg[this.level - 1], this.catSprite.node.position = configCat.getCatPos3(this.level), this.isLock = !(configCat.getPlayerInfo("maxCatLevel") - 3 >= this.level), this.diamonds = configCat.gameController.catInfo[this.level - 1].diamond, 1 == this.level && (this.isLock = !1)
			},
			onEnable: function() {
				this.setItemInfo()
			},
			setItemInfo: function() {
				this.isLock = !(configCat.getPlayerInfo("maxCatLevel") - 1 >= this.level), 1 == this.level && (this.isLock = !1), this.isLock ? (this.lockNode.active = !0, this.catSprite.node.color = cc.color("#000000"), this.btnIcon.spriteFrame = null, this.btnLabel.string = "") : (this.lockNode.active = !1, this.catSprite.node.color = cc.color("#ffffff"), configCat.getPlayerInfo("maxCatLevel") - this.level >= 3 ? (this.btnIcon.spriteFrame = this.fishCoinSprite, this.btnLabel.string = configCat.NumberSimplified(parseFloat(Math.round(configCat.getCatPrice(this.level) * (1 - configCat.getPrivilege("discount")))))) : (this.btnIcon.spriteFrame = this.diamondSprite, this.btnLabel.string = configCat.gameController.catInfo[this.level - 1].diamond))
			},
			addCat: function() {
				if (!this.isLock) {
					if (i.audioManager.PlayClickSound(), configCat.getPlayerInfo("maxCatLevel") - this.level >= 3) configCat.gameController.creatCat(null, this.level);
					else if (configCat.gameController.diamonds >= this.diamonds) {
						configCat.gameController.diamonds -= this.diamonds;
						var e = configCat.gameController.getMat();
						if (null == e) return void configCat.gameController.showPop("No grid");
						configCat.gameController.newCat(this.level, e, !1), configCat.gameController.setCatPosHistory()
					} else configCat.gameController.showPop("Diamonds not enough");
					this.setItemInfo()
				}
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager"
	}],
	ShopItemRemark: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "078e9nZYgtAc6mvAwsssdxv", "ShopItemRemark");
		var i = e("GameManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				maxRow: 7,
				item: cc.Prefab,
				itemW: 100,
				itemH: 100,
				itemSpace: 20,
				topSpace: 80
			},
			onLoad: function() {
				this.fontNum = 2, this.backNum = 4, this.isLoadFinish = !1, this.sideSpace = 5, this.curIndex = -1
			},
			start: function() {
				this.LoadData()
			},
			onEnable: function() {
				this.UpdateLockState()
			},
			LoadData: function() {
				this.isLoadFinish = !1, this.isScrollChange = !1;
				for (var e = this.node.children, t = 0; t < e.length; t++) e[t].active = !1;
				this.curDex = 0, this.maxDex = i.shopMsg.length - 1;
				for (var n = this.curDex; n < this.curDex + this.maxRow && n < i.shopMsg.length; n++) this.InitItemMsg(n, e[n - this.curDex]);
				i.shopMsg.length - this.curDex >= this.maxRow - 1 && (i.shopMsg.length - this.curDex > this.maxRow && (this.isScrollChange = !0), this.bottomIndex = this.maxRow - 1);
				var a = i.shopMsg.length,
					s = 2 * this.sideSpace + (this.itemH + this.itemSpace) * a + this.topSpace;
				i.isHasAd && i.isShowBanner && (s += 80), this.node.height = s, this.node.y = this.startY, this.isLoadFinish = !0, this.lastIndex = this.curDex, this.topIndex = 0
			},
			InitItemMsg: function(e, t) {
				if (e > i.shopMsg.length - 1) null == t && void 0 == t || (t.active = !1);
				else if (!(e < 0)) {
					var n = null;
					null != t || void 0 != t ? n = t : (n = cc.instantiate(this.item)).parent = this.node, n.active = !0;
					var a = n.getComponent("ShopItem");
					a.index = e, a.InitMsg(e, i.shopMsg[e]);
					var s = -this.itemH / 2 - e * (this.itemH + this.itemSpace) + this.itemH * (a.image.node.anchorY - .5) - this.topSpace,
						o = this.itemW * (a.image.node.anchorX - .5);
					n.setPosition(o, s)
				}
			},
			UpdateTwoRowItem: function(e) {
				var t = this.node.children;
				if (0 == e) {
					var n = t[this.topIndex].getComponent("ShopItem").index + this.maxRow;
					if (n >= i.shopMsg.length) return;
					for (var a = this.topIndex; a < this.topIndex + 1; a++, n++) this.InitItemMsg(n, t[a]);
					this.bottomIndex = this.topIndex, this.topIndex += 1, this.topIndex > this.maxRow - 1 && (this.topIndex = 0)
				} else if (1 == e) {
					var s = t[this.bottomIndex].getComponent("ShopItem").index - this.maxRow;
					if (s < 0) return;
					for (var o = this.bottomIndex; o < this.bottomIndex + 1; o++, s++) this.InitItemMsg(s, t[o]);
					this.topIndex = this.bottomIndex, this.bottomIndex -= 1, this.bottomIndex < 0 && (this.bottomIndex = this.maxRow - 1)
				}
			},
			ClearData: function() {
				this.node.height = 0;
				for (var e = this.node.children, t = 0; t < this.node.childrenCount; t++) e[t].active = !1
			},
			UpdateLockState: function() {
				for (var e = this.node.children, t = 0; t < this.node.childrenCount; t++) {
					e[t].getComponent("ShopItem").InitLockState()
				}
			},
			OnScrollRectScrolled: function() {
				if (0 != this.isLoadFinish && 0 != this.isScrollChange && !(this.node.y < this.startY)) {
					var e = Math.floor((this.node.y - this.startY) / (this.itemH + this.itemSpace));
					e != this.lastIndex && this.UpdateScrollView(e)
				}
			},
			UpdateScrollView: function(e) {
				if (e < this.lastIndex) {
					if (e > this.maxDex - (this.backNum + 1)) return;
					this.UpdateTwoRowItem(1)
				} else if (e > this.lastIndex) {
					if (e < this.fontNum + 1) return;
					this.UpdateTwoRowItem(0)
				}
				this.lastIndex = e
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager"
	}],
	ShopItemTest: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "d07f7FYU31G0bHD7WwD4zLv", "ShopItemTest");
		var i = e("GameManager"),
			a = e("mta_analysis");
		cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function() {
				"tt" == i.channel && (this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node._touchListener.setSwallowTouches(!1))
			},
			start: function() {
				this.lastPosition = cc.v2(0, 0), this.moveFlag = !1
			},
			onTouchStart: function(e) {
				console.log("start"), this.lastPosition = e.touch.getLocation(), this.moveFlag = !1
			},
			onTouchMove: function(e) {
				var t = e.touch.getLocation();
				(Math.abs(t.x - this.lastPosition.x) > 5 || Math.abs(t.y - this.lastPosition.y) > 5) && (this.moveFlag = !0)
			},
			onTouchEnd: function() {
				if (0 == this.moveFlag && cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == i.channel) {
					var e = this.node.parent.getComponent("ShopItem").index,
						t = "ttset" + (e = parseInt(e) + 1);
					a.Event.stat(t, {
						videonum: "\u70b9\u51fb\u6574\u4e2a"
					})
				}
				this.moveFlag = !1
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager",
		mta_analysis: "mta_analysis"
	}],
	ShopItem: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "bc89dhoKBlJ+ocPZRA4czib", "ShopItem");
		var i = e("GameManager"),
			a = e("mta_analysis");
		cc.Class({
			extends: cc.Component,
			properties: {
				image: cc.Sprite,
				lockNode: cc.Node,
				unlockNode: cc.Node,
				stateNode: cc.Node
			},
			onLoad: function() {
				this.localFlag = !1, this.isClick = !0
			},
			onEnable: function() {
				this.isClick = !0
			},
			start: function() {
				this.lastPosition = cc.v2(0, 0), this.moveFlag = !1, this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
			},
			InitMsg: function(e, t) {
				this.index = e, this.itemMsg = t, this.frameName = t.name.substr(0, t.name.length - 1), this.localFlag = t.name.substr(t.name.length - 1, 1), this.LoadImage(this.index);
				var n = i.GetItemLockFlag(this.itemMsg.name);
				if (n >= this.itemMsg.videoNum) this.lockNode.active = !1, this.unlockNode.active = !0, this.stateNode.active = !1;
				else {
					if (!i.isHasAd) return this.lockNode.active = !1, this.unlockNode.active = !0, this.unlockNode.children[0].active = !1, void(this.stateNode.active = !1);
					(isNaN(n) || n <= 0) && (n = 0), this.stateNode.active = !0;
					for (var a = this.stateNode.children, s = 0; s < a.length; s++) a[s].active = s < n;
					this.lockNode.active = !0, this.lockNode.getChildByName("num").getComponent(cc.Label).string = n + "/" + this.itemMsg.videoNum.toString(), this.unlockNode.active = !1
				}
			},
			InitLockState: function() {
				if (i.isHasAd) {
					var e = i.GetItemLockFlag(this.itemMsg.name);
					if (e >= this.itemMsg.videoNum) this.lockNode.active = !1, this.unlockNode.active = !0, this.stateNode.active = !1;
					else {
						(isNaN(e) || e <= 0) && (e = 0), this.stateNode.active = !0;
						for (var t = this.stateNode.children, n = 0; n < t.length; n++) t[n].active = n < e;
						this.lockNode.active = !0, this.lockNode.getChildByName("num").getComponent(cc.Label).string = e + "/" + this.itemMsg.videoNum.toString(), this.unlockNode.active = !1
					}
				}
			},
			LoadImage: function(e) {
				var t = "shopNewUI/";
				if (0 == this.localFlag) {
					var n = t + this.frameName;
					cc.loader.loadRes(n, cc.SpriteFrame, function(t, n) {
						if (e == this.index) return t ? (console.log(t), void(this.image.spriteFrame = null)) : void(this.image.spriteFrame = n)
					}.bind(this))
				} else {
					var a = /* i.serverPath + */ t + this.frameName + ".png";
					cc.loader.load(a, function(t, n) {
						if (e == this.index) return t ? (console.log(t), void(this.image.spriteFrame = null)) : void(this.image.spriteFrame = new cc.SpriteFrame(n))
					}.bind(this))
				}
			},
			onTouchStart: function(e) {
				0 != this.isClick && (this.lastPosition = e.touch.getLocation(), this.moveFlag = !1)
			},
			onTouchMove: function(e) {
				if (0 != this.isClick) {
					var t = e.touch.getLocation();
					(Math.abs(t.x - this.lastPosition.x) > 5 || Math.abs(t.y - this.lastPosition.y) > 5) && (this.moveFlag = !0)
				}
			},
			onTouchEnd: function(e) {
				if (0 != this.isClick) {
					if (0 == this.moveFlag) {
						i.audioManager && i.audioManager.PlayClickSound();
						var t = this.itemMsg.name.substr(0, this.itemMsg.name.length - 1);
						if (this.lockNode.active) {
							if (i.GetNowTime() - i.lastTime < 1e3) return;
							if (i.lastTime = i.GetNowTime(), i.curUnlockItem = this, i.isHasAd ? (i.adsManager.lockType = 2, i.adsManager.ShowVideo(1)) : cc.sys.platform == cc.sys.DESKTOP_BROWSER && i.curScene.GetReward(), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == i.channel) {
								var n = "ttset" + t + "clickvideo";
								a.Event.stat(n, {})
							}
							return
						}
						i.curScene.ApplySetMsg(this.itemMsg, this.localFlag), this.isClick = !1, i.curScene.shopScrollView.node.parent.active = !1, i.HidePanelHandle("shop")
					}
					this.moveFlag = !1
				}
			},
			UpdateItemButton: function() {
				var e = i.GetItemLockFlag(this.itemMsg.name);
				if (isNaN(e) || e <= 0 ? e = 1 : e++, e >= this.itemMsg.videoNum) {
					if (this.lockNode.active = !1, this.unlockNode.active = !0, i.curScene.UpdateThingMsg(this.itemMsg, this.localFlag), this.stateNode.active = !1, cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == i.channel) {
						var t = "ttset" + this.itemMsg.name.substr(0, this.itemMsg.name.length - 1) + "videoall";
						a.Event.stat(t, {})
					}
				} else {
					this.lockNode.getChildByName("num").getComponent(cc.Label).string = e + "/" + this.itemMsg.videoNum.toString();
					var n = this.stateNode.children;
					this.stateNode.active = !0;
					for (var s = 0; s < n.length; s++) n[s].active = s < e
				}
				if (i.SetItemLockFlag(this.itemMsg.name, e), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == i.channel && 1 == e) {
					var o = "ttset" + this.itemMsg.name.substr(0, this.itemMsg.name.length - 1) + "video1";
					a.Event.stat(o, {})
				}
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager",
		mta_analysis: "mta_analysis"
	}],
	ShopPrivilegeItem: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "2a2909uV0hDMqJXijwSGlmL", "ShopPrivilegeItem");
		var i = e("GameManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				type: 0,
				icon: cc.Sprite,
				Icon0: cc.SpriteFrame,
				Icon1: cc.SpriteFrame,
				titleLabel: cc.Label,
				nameLabel: cc.Label,
				priceLabel: cc.Label,
				priceBtnNode: cc.Node,
				lockBtnNode: cc.Node,
				hadBtnNode: cc.Node
			},
			onLoad: function() {
				this.type = this.node.getSiblingIndex() % 2, this.level = parseInt(this.node.getSiblingIndex() / 2) + 1, this.value = 0, this.price = 0, 0 == this.type ? (1 == this.level ? (this.value = 5, this.price = 1e4) : 2 == this.level ? (this.value = 10, this.price = 5e5) : 3 == this.level ? (this.value = 20, this.price = 55e5) : 4 == this.level ? (this.value = 40, this.price = 11e8) : 5 == this.level ? (this.value = 70, this.price = 13e10) : 6 == this.level ? (this.value = 110, this.price = 1e13) : 7 == this.level ? (this.value = 160, this.price = 18e13) : 8 == this.level ? (this.value = 225, this.price = 22e14) : 9 == this.level && (this.value = 500, this.price = 29e16), this.priceLabel.string = configCat.NumberSimplified(this.price.toString()), this.titleLabel.string = "Buff card level " + this.level, this.nameLabel.string = "All cats gain increased " + this.value + "%", this.icon.spriteFrame = this.Icon1, this.level <= configCat.getPlayerInfo("incomeLevel") ? (this.priceBtnNode.active = !1, this.lockBtnNode.active = !1, this.hadBtnNode.active = !0) : this.level == configCat.getPlayerInfo("incomeLevel") + 1 ? (this.priceBtnNode.active = !0, this.lockBtnNode.active = !1, this.hadBtnNode.active = !1) : this.level > configCat.getPlayerInfo("incomeLevel") + 1 && (this.priceBtnNode.active = !1, this.lockBtnNode.active = !0, this.hadBtnNode.active = !1)) : (1 == this.level ? (this.value = 5, this.price = 8e4) : 2 == this.level ? (this.value = 15, this.price = 5e7) : 3 == this.level ? (this.value = 25, this.price = 1e10) : 4 == this.level ? (this.value = 35, this.price = 85e10) : 5 == this.level ? (this.value = 50, this.price = 28e13) : 6 == this.level ? (this.value = 55, this.price = 452e13) : 7 == this.level ? (this.value = 60, this.price = 18e16) : 8 == this.level && (this.value = 65, this.price = 183e16), this.priceLabel.string = configCat.NumberSimplified(this.price.toString()), this.titleLabel.string = "Discount Card Level " + this.level, this.nameLabel.string = "Reduced prices for all cats" + this.value + "%", this.icon.spriteFrame = this.Icon0, this.level <= configCat.getPlayerInfo("discountLevel") ? (this.priceBtnNode.active = !1, this.lockBtnNode.active = !1, this.hadBtnNode.active = !0) : this.level == configCat.getPlayerInfo("discountLevel") + 1 ? (this.priceBtnNode.active = !0, this.lockBtnNode.active = !1, this.hadBtnNode.active = !1) : this.level > configCat.getPlayerInfo("discountLevel") + 1 && (this.priceBtnNode.active = !1, this.lockBtnNode.active = !0, this.hadBtnNode.active = !1))
			},
			init: function() {
				0 == this.type ? (1 == this.level ? (this.value = 5, this.price = 1e4) : 2 == this.level ? (this.value = 10, this.price = 5e5) : 3 == this.level ? (this.value = 20, this.price = 55e5) : 4 == this.level ? (this.value = 40, this.price = 11e8) : 5 == this.level ? (this.value = 70, this.price = 13e10) : 6 == this.level ? (this.value = 110, this.price = 1e13) : 7 == this.level ? (this.value = 160, this.price = 18e13) : 8 == this.level ? (this.value = 225, this.price = 22e14) : 9 == this.level && (this.value = 500, this.price = 29e16), this.priceLabel.string = configCat.NumberSimplified(this.price.toString()), this.titleLabel.string = "Buff card level " + this.level, this.nameLabel.string = "All cats gain increased " + this.value + "%", this.icon.spriteFrame = this.Icon1, this.level <= configCat.getPlayerInfo("incomeLevel") ? (this.priceBtnNode.active = !1, this.lockBtnNode.active = !1, this.hadBtnNode.active = !0, this.node.setSiblingIndex(this.node.parent.childrenCount - 1)) : this.level == configCat.getPlayerInfo("incomeLevel") + 1 ? (this.priceBtnNode.active = !0, this.lockBtnNode.active = !1, this.hadBtnNode.active = !1, this.node.setSiblingIndex(0)) : this.level > configCat.getPlayerInfo("incomeLevel") + 1 && (this.priceBtnNode.active = !1, this.lockBtnNode.active = !0, this.hadBtnNode.active = !1)) : (1 == this.level ? (this.value = 5, this.price = 8e4) : 2 == this.level ? (this.value = 15, this.price = 5e7) : 3 == this.level ? (this.value = 25, this.price = 1e10) : 4 == this.level ? (this.value = 35, this.price = 85e10) : 5 == this.level ? (this.value = 50, this.price = 28e13) : 6 == this.level ? (this.value = 55, this.price = 452e13) : 7 == this.level ? (this.value = 60, this.price = 18e16) : 8 == this.level && (this.value = 65, this.price = 183e16), this.priceLabel.string = configCat.NumberSimplified(this.price.toString()), this.titleLabel.string = "Discount Card Level " + this.level, this.nameLabel.string = "Reduced prices for all cats " + this.value + "%", this.icon.spriteFrame = this.Icon0, this.level <= configCat.getPlayerInfo("discountLevel") ? (this.priceBtnNode.active = !1, this.lockBtnNode.active = !1, this.hadBtnNode.active = !0, this.node.setSiblingIndex(this.node.parent.childrenCount - 1)) : this.level == configCat.getPlayerInfo("discountLevel") + 1 ? (this.priceBtnNode.active = !0, this.lockBtnNode.active = !1, this.hadBtnNode.active = !1, this.node.setSiblingIndex(0)) : this.level > configCat.getPlayerInfo("discountLevel") + 1 && (this.priceBtnNode.active = !1, this.lockBtnNode.active = !0, this.hadBtnNode.active = !1))
			},
			setValue: function() {
				if (i.audioManager.PlayClickSound(), 0 == this.type) {
					var e = this.value + 100;
					if (e <= 100 * configCat.getPrivilege("income") || this.level > configCat.getPlayerInfo("incomeLevel") + 1) return;
					if (configCat.gameController.fishCoin < this.price) return void configCat.gameController.showPop("Fish not enough");
					configCat.gameController.fishCoin -= this.price, e /= 100, configCat.setPrivilege("income", e), configCat.setPlayerInfo("incomeLevel", this.level)
				} else {
					var t = this.value;
					if (t <= 100 * configCat.getPrivilege("discount") || this.level > configCat.getPlayerInfo("discountLevel") + 1) return;
					if (configCat.gameController.fishCoin < this.price) return void configCat.gameController.showPop("Fish not enough");
					configCat.gameController.fishCoin -= this.price, t /= 100, configCat.setPrivilege("discount", t), configCat.setPlayerInfo("discountLevel", this.level)
				}
				this.priceBtnNode.active = !1, this.lockBtnNode.active = !1, this.hadBtnNode.active = !0, this.node.setSiblingIndex(this.node.parent.childrenCount - 1), configCat.gameController.showPop("Successful purchase"), configCat.gameController.setAddCatBtn(), configCat.gameController.incomeMultipleLabel.string = "Income " + parseInt(100 * configCat.getPrivilege("income")) + "%", configCat.gameController.UpdateShopSrivilegeScroll(), configCat.gameController.setIncomePerSecond()
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager"
	}],
	SignPanel: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "c96a3ZIBvZLq5RSngxlTwEk", "SignPanel");
		var i = e("GameManager"),
			a = e("mta_analysis");
		cc.Class({
			extends: cc.Component,
			properties: {
				buttonNode: cc.Node,
				selectNode: cc.Node,
				getRewardBtn: cc.Node
			},
			onLoad: function() {},
			start: function() {
				this.buttons = this.buttonNode.children;
				var e = !1;
				0 == i.GetIsSigIn() ? i.signMsg.length <= i.setNum ? (this.getRewardBtn.active = !1, this.selectNode.active = !1, e = !0) : this.getRewardBtn.active = !0 : (this.getRewardBtn.active = !1, this.selectNode.active = !1, e = !0);
				var t = Math.min(i.setNum, i.signMsg.length - 1),
					n = parseInt(t) + 1;
				cc.loader.loadResDir("sign/" + n, cc.SpriteFrame, function(t, n) {
					if (t) console.log(t);
					else {
						n = i.SortArray(n, 0);
						var a = 7;
						a = i.signMsg.length <= i.setNum ? 7 : i.signDays % 7;
						for (var s = 0; s < n.length; s++) i.signMsg.length <= i.setNum ? this.selectNode.active = !1 : 0 == e && s == a && (this.selectNode.active = !0, this.selectNode.position = this.buttons[s].position, s < 6 ? this.selectNode.setContentSize(125, 126) : this.selectNode.setContentSize(155, 155)), this.buttons[s].children[0].active = s < a, this.buttons[s].getComponent(cc.Sprite).spriteFrame = n[s]
					}
				}.bind(this))
			},
			BtnGetReward: function(e) {
				if (e.target.getComponent(cc.Button).interactable = !1, i.SetSignInDate(), i.curScene && -1 != i.curScene.name.indexOf("GameScene")) {
					var t = i.signMsg[i.setNum].name.substr(i.signMsg[i.setNum].name.length - 1, 1);
					i.curScene.UpdateThingMsg(i.signMsg[i.setNum].gifts[i.signDays], t, !0)
				} else if (i.curScene && -1 != i.curScene.name.indexOf("Decoration")) {
					var n = i.signMsg[i.setNum].name.substr(i.signMsg[i.setNum].name.length - 1, 1);
					i.curScene.UpdateThingMsg(i.signMsg[i.setNum].gifts[i.signDays], n, !0)
				}
				i.signDays = parseInt(i.signDays) + 1, i.SetSignInDays(i.signDays), i.signDays > 0 && i.signDays % 7 == 0 && (i.setNum = parseInt(i.setNum) + 1, i.SetItemLockFlag("SetNum", i.setNum)), this.selectNode.active = !1;
				for (var s = 0; s < this.buttons.length; s++) i.signDays % 7 == 0 ? this.buttons[s].children[0].active = !0 : s < i.signDays % 7 ? this.buttons[s].children[0].active = !0 : this.buttons[s].children[0].active = !1;
				if (this.getRewardBtn.active = !1, cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == i.channel) {
					var o = "\u7b2c" + i.signDays + "\u5929\u7b7e\u5230";
					a.Event.stat("ttsign", {
						days: o
					})
				}
				this.node.active = !1, i.HidePanelHandle("sign")
			},
			BtnClosePanel: function() {
				this.node.active = !1, i.HidePanelHandle("sign")
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager",
		mta_analysis: "mta_analysis"
	}],
	SpriteFrameSet: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "97019Q80jpE2Yfz4zbuCZBq", "SpriteFrameSet");
		var i = cc.Class({
			name: "SpriteFrameSet",
			properties: {
				language: "",
				spriteFrame: cc.SpriteFrame
			}
		});
		t.exports = i, cc._RF.pop()
	}, {}],
	Star: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "4fab0Q1+ElJqLsZn/IK86j9", "Star"), cc.Class({
			extends: cc.Component,
			properties: {},
			start: function() {},
			DestroySelf: function() {
				this.node.destroy()
			}
		}), cc._RF.pop()
	}, {}],
	TestNode: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "da35dAbPUhNdoC8UTs6pucq", "TestNode");
		var i = e("GameManager");
		cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function() {
				this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node._touchListener.setSwallowTouches(!1), this.moveFlag = !1, this.startPos = cc.v2(0, 0)
			},
			onTouchBegan: function(e) {
				this.startPos = e.touch.getLocation(), this.moveFlag = !1, "qq" != i.channel && "wx" != i.channel || 0 != i.isRemindPopup || (i.adsManager.blockAd && i.adsManager.blockAd.destroy(), "wx" == i.channel && i.HideGameIcon())
			},
			onTouchMove: function(e) {
				var t = e.touch.getLocation();
				(Math.abs(t.x - this.startPos.x) >= 1 || Math.abs(t.y - this.startPos.y) >= 1) && (this.moveFlag = !0)
			},
			onTouchEnd: function(e) {
				if (0 == this.moveFlag && i.star) {
					var t = e.touch.getLocation(),
						n = cc.instantiate(i.star);
					n.parent = this.node, t = this.node.convertToNodeSpaceAR(t), n.position = t, n.getComponent(cc.Animation).play("star")
				}
			},
			start: function() {}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager"
	}],
	TextureMove: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "969f90f95NL8aw6r7iwxw0Q", "TextureMove");
		var i = e("GameManager");
		cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function() {
				this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
			},
			start: function() {
				this.lastPosition = this.node.position
			},
			onTouchBegan: function(e) {
				null != e && null != e.touch && (this.lastPosition = e.touch.getLocation(), 0 == i.curScene.moveNode.childrenCount && (i.curScene.mtId = []), -1 == i.curScene.mtId.indexOf(e.getID()) && i.curScene.mtId.push(e.getID()), i.curScene.deleteArea.active = !0, i.curScene.deleteArea.children[0].active = !0, i.curScene.deleteArea.children[1].active = !1, i.curScene.ShowHidePanelHandle(1))
			},
			onTouchMove: function(e) {
				if (null != e && null != e.touch) {
					var t = e.touch.getLocation(),
						n = cc.v2(t.x - this.lastPosition.x, t.y - this.lastPosition.y),
						a = cc.v2(this.node.x + n.x, this.node.y + n.y),
						s = i.Clamp(-cc.winSize.width / 2, a.x, cc.winSize.width / 2),
						o = i.Clamp(-cc.winSize.height / 2 + 150, a.y, cc.winSize.height / 2);
					a = cc.v2(s, o), this.node.position = a, 0 == i.curScene.deleteArea.active && (i.curScene.deleteArea.active = !0, i.curScene.ShowHidePanelHandle(1));
					var c = i.curScene.deleteArea.convertToWorldSpaceAR(i.curScene.deleteArea.children[2].position),
						r = this.node.parent.convertToWorldSpaceAR(this.node.position);
					r.y = r.y - this.node.height / 2 * this.node.scale, Math.abs(r.y - c.y) <= i.curScene.deleteArea.children[2].height / 2 ? (i.curScene.deleteArea.children[0].active = !1, i.curScene.deleteArea.children[1].active = !0) : (i.curScene.deleteArea.children[0].active = !0, i.curScene.deleteArea.children[1].active = !1), this.lastPosition = t
				}
			},
			onTouchEnd: function(e) {
				var t = i.curScene.mtId.indexOf(e.getID()); - 1 != t && i.curScene.mtId.splice(t, 1);
				var n = i.curScene.deleteArea.convertToWorldSpaceAR(i.curScene.deleteArea.children[2].position),
					a = this.node.parent.convertToWorldSpaceAR(this.node.position);
				if (a.y = a.y - this.node.height / 2 * this.node.scale, Math.abs(a.y - n.y) <= i.curScene.deleteArea.children[2].height / 2) {
					if (i.audioManager && i.audioManager.PlayDeleteSound(), i.curScene.mtId.length <= 0 && (i.curScene.deleteArea.active = !1), this.node.getComponent(cc.Sprite).spriteFrame = null, this.node.position = cc.v2(0, 0), i.curScene.selectName[1] = -1, 1 == i.curScene.curInnerType) i.curScene.secondScrollView.content.getComponent("SecondItemRemark").UpdateSelectState();
					this.node.active = !1
				} else i.curScene.mtId.length <= 0 && (i.curScene.deleteArea.active = !1)
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager"
	}],
	addBottleItem: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "f57ca1HldJMfaZJ+fbJw3pn", "addBottleItem");
		var i = e("GameManager");
		e("mta_analysis");
		cc.Class({
			extends: cc.Component,
			properties: {
				drop: cc.Prefab,
				dropSprite: cc.SpriteFrame
			},
			start: function() {
				this.pos0 = this.node.position
			},
			addMsg: function(e, t) {
				i.audioManager && i.audioManager.PlayClickSound(), e.target.getComponent(cc.Button).interactable = !1;
				var n = cc.tween,
					a = 1;
				this.node.x < 0 && (a = -1);
				var s = this;
				n(this.node).to(.7, {
					position: cc.v3(50 * a, 0)
				}).to(.3, {
					angle: 70 * a
				}).delay(.1).call(function() {
					i.curScene.dropPool || (i.curScene.dropPool = new cc.NodePool("DropWater"));
					i.curScene.dropPool.size() > 0 ? i.curScene.dropPool.get(s.node.parent.parent.getChildByName("drops"), s.dropSprite) : cc.instantiate(s.drop).getComponent("DropWater").init(s.node.parent.parent.getChildByName("drops"), s.dropSprite)
				}).delay(.2).to(.3, {
					angle: 0
				}).to(.7, {
					position: s.pos0
				}).call(function() {
					e.target.getComponent(cc.Button).interactable = !0
				}).start()
			}
		}), cc._RF.pop()
	}, {
		GameManager: "GameManager",
		mta_analysis: "mta_analysis"
	}],
	mta_analysis: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "b0215y6u+BFv7/jQ8uhkbiy", "mta_analysis");
		var i = {
			app_id: "",
			event_id: "",
			api_base: "https://pingtas.qq.com/pingd",
			prefix: "_mta_",
			version: "1.3.5",
			stat_share_app: !1,
			stat_pull_down_fresh: !1,
			stat_reach_bottom: !1
		};

		function a(e) {
			cc.sys.WECHAT_GAME == cc.sys.platform ? wx.getNetworkType({
				success: function(t) {
					e(t.networkType)
				}
			}) : e("Unknown")
		}

		function s() {
			if (cc.sys.WECHAT_GAME == cc.sys.platform) {
				var e = wx.getSystemInfoSync();
				return {
					adt: encodeURIComponent(e.model),
					scl: e.pixelRatio,
					scr: e.windowWidth + "x" + e.windowHeight,
					lg: e.language,
					fl: e.version,
					jv: encodeURIComponent(e.system),
					tz: encodeURIComponent(e.platform)
				}
			}
			return {
				adt: "unknown",
				scl: "unknown",
				scr: "unknown",
				lg: "unknown",
				fl: "unknown",
				jv: "unknown",
				tz: "unknown"
			}
		}

		function o() {
			try {
				return cc.sys.localStorage.getItem(i.prefix + "auid")
			} catch (e) {}
		}

		function c() {
			try {
				var e = h();
				return cc.sys.localStorage.setItem(i.prefix + "auid", e), e
			} catch (e) {}
		}

		function r() {
			try {
				return cc.sys.localStorage.getItem(i.prefix + "ssid")
			} catch (e) {}
		}

		function l() {
			try {
				var e = "s" + h();
				return cc.sys.localStorage.setItem(i.prefix + "ssid", e), e
			} catch (e) {}
		}

		function h(e) {
			for (var t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], n = 10; 1 < n; n--) {
				var i = Math.floor(10 * Math.random()),
					a = t[i];
				t[i] = t[n - 1], t[n - 1] = a
			}
			for (n = i = 0; 5 > n; n++) i = 10 * i + t[n];
			return (e || "") + (i + "") + +new Date
		}

		function d() {
			try {
				return "/"
			} catch (e) {
				console.log("get current page path error:" + e)
			}
		}

		function g() {
			var e = {
				dm: "wechat.apps.xx",
				url: d(),
				pvi: "",
				si: "",
				ty: 0
			};
			return e.pvi = function() {
				var t = o();
				return t || (t = c(), e.ty = 1), t
			}(), e.si = function() {
				var e = r();
				return e || (e = l()), e
			}(), e
		}

		function p() {
			var e = s();
			return a(function(e) {
				try {
					cc.sys.localStorage.setItem(i.prefix + "ntdata", e)
				} catch (e) {}
			}), e.ct = cc.sys.localStorage.getItem(i.prefix + "ntdata") || "4g", e
		}

		function u() {
			var e, t = f.Data.userInfo,
				n = [];
			for (e in t) t.hasOwnProperty(e) && n.push(e + "=" + t[e]);
			return t = n.join(";"), {
				r2: i.app_id,
				r4: "wx",
				ext: "v=" + i.version + (null !== t && "" !== t ? ";ui=" + encodeURIComponent(t) : "")
			}
		}

		function m(e) {
			if (cc.sys.platform == cc.sys.WECHAT_GAME) wx.request(e);
			else {
				var t = new XMLHttpRequest;
				t.onreadystatechange = function() {
					if (4 == t.readyState && t.status >= 200 && t.status < 400) t.responseText
				}, t.open("GET", e.url, !0), t.send()
			}
		}
		var f = {
			App: {
				init: function(e) {
					"appID" in e && (i.app_id = e.appID), "eventID" in e && (i.event_id = e.eventID), "statShareApp" in e && (i.stat_share_app = e.statShareApp), "statPullDownFresh" in e && (i.stat_pull_down_fresh = e.statPullDownFresh), "statReachBottom" in e && (i.stat_reach_bottom = e.statReachBottom), l(), "lauchOpts" in e && (f.Data.lanchInfo = e.lauchOpts, f.Data.lanchInfo.landing = 1)
				}
			},
			Page: {
				init: function() {
					var e = {
						onShow: !0,
						__route__: "pages/index/index"
					};
					e.onShow && function() {
						var t = e.onShow;
						e.onShow = function() {
							f.Page.stat(), t.call(this, arguments)
						}
					}(), f.Page.stat(), i.stat_pull_down_fresh && e.onPullDownRefresh && function() {
						var t = e.onPullDownRefresh;
						e.onPullDownRefresh = function() {
							f.Event.stat(i.prefix + "pulldownfresh", {
								url: e.__route__
							}), t.call(this, arguments)
						}
					}(), i.stat_reach_bottom && e.onReachBottom && function() {
						var t = e.onReachBottom;
						e.onReachBottom = function() {
							f.Event.stat(i.prefix + "reachbottom", {
								url: e.__route__
							}), t.call(this, arguments)
						}
					}(), i.stat_share_app && e.onShareAppMessage && function() {
						var t = e.onShareAppMessage;
						e.onShareAppMessage = function() {
							return f.Event.stat(i.prefix + "shareapp", {
								url: e.__route__
							}), t.call(this, arguments)
						}
					}()
				},
				stat: function() {
					if ("" != i.app_id) {
						var e = [],
							t = u(),
							n = [g(), t, p()];
						f.Data.lanchInfo && (n.push({
							ht: f.Data.lanchInfo.scene,
							rdm: "/",
							rurl: f.Data.lanchInfo.path
						}), f.Data.lanchInfo.query && f.Data.lanchInfo.query._mta_ref_id && n.push({
							rarg: f.Data.lanchInfo.query._mta_ref_id
						}), 1 == f.Data.lanchInfo.landing && (t.ext += ";lp=1", f.Data.lanchInfo.landing = 0)), n.push({
							rand: +new Date
						}), t = 0;
						for (var a = n.length; t < a; t++)
							for (var s in n[t]) n[t].hasOwnProperty(s) && e.push(s + "=" + (void 0 === n[t][s] ? "" : n[t][s]));
						m({
							url: i.api_base + "?" + e.join("&").toLowerCase()
						})
					}
				}
			},
			Event: {
				stat: function(e, t) {
					if ("" != i.event_id) {
						var n = [],
							a = g(),
							s = u();
						a.dm = "wxapps.click", a.url = e, s.r2 = i.event_id;
						var o, c = void 0 === t ? {} : t,
							r = [];
						for (o in c) c.hasOwnProperty(o) && r.push(encodeURIComponent(o) + "=" + encodeURIComponent(c[o]));
						for (c = r.join(";"), s.r5 = c, c = 0, s = (a = [a, s, p(), {
								rand: +new Date
							}]).length; c < s; c++)
							for (var l in a[c]) a[c].hasOwnProperty(l) && n.push(l + "=" + (void 0 === a[c][l] ? "" : a[c][l]));
						m({
							url: i.api_base + "?" + n.join("&").toLowerCase()
						})
					}
				}
			},
			Data: {
				userInfo: null,
				lanchInfo: null
			}
		};
		t.exports = f, cc._RF.pop()
	}, {}],
	"polyglot.min": [function(e, t, n) {
		"use strict";

		function i(e) {
			"@babel/helpers - typeof";
			return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}
		cc._RF.push(t, "e26fd9yy65A4q3/JkpVnFYg", "polyglot.min"),
			function(e, a) {
				"function" == typeof define && define.amd ? define([], function() {
					return a(e)
				}) : "object" == (void 0 === n ? "undefined" : i(n)) ? t.exports = a(e) : e.Polyglot = a(e)
			}(void 0, function(e) {
				function t(e) {
					e = e || {}, this.phrases = {}, this.extend(e.phrases || {}), this.currentLocale = e.locale || "en", this.allowMissing = !!e.allowMissing, this.warn = e.warn || l
				}

				function n(e) {
					var t, n, i, a = {};
					for (t in e)
						if (e.hasOwnProperty(t))
							for (i in n = e[t]) a[n[i]] = t;
					return a
				}

				function a(e) {
					return e.replace(/^\s+|\s+$/g, "")
				}

				function s(e, t, n) {
					var i, s;
					return null != n && e ? i = a((s = e.split(d))[c(t, n)] || s[0]) : i = e, i
				}

				function o(e) {
					var t = n(p);
					return t[e] || t.en
				}

				function c(e, t) {
					return g[o(e)](t)
				}

				function r(e, t) {
					for (var n in t) "_" !== n && t.hasOwnProperty(n) && (e = e.replace(new RegExp("%\\{" + n + "\\}", "g"), t[n]));
					return e
				}

				function l(t) {
					e.console && e.console.warn && e.console.warn("WARNING: " + t)
				}

				function h(e) {
					var t = {};
					for (var n in e) t[n] = e[n];
					return t
				}
				t.VERSION = "0.4.3", t.prototype.locale = function(e) {
					return e && (this.currentLocale = e), this.currentLocale
				}, t.prototype.extend = function(e, t) {
					var n;
					for (var a in e) e.hasOwnProperty(a) && (n = e[a], t && (a = t + "." + a), "object" == i(n) ? this.extend(n, a) : this.phrases[a] = n)
				}, t.prototype.clear = function() {
					this.phrases = {}
				}, t.prototype.replace = function(e) {
					this.clear(), this.extend(e)
				}, t.prototype.t = function(e, t) {
					var n, i;
					return "number" == typeof(t = null == t ? {} : t) && (t = {
						smart_count: t
					}), "string" == typeof this.phrases[e] ? n = this.phrases[e] : "string" == typeof t._ ? n = t._ : this.allowMissing ? n = e : (this.warn('Missing translation for key: "' + e + '"'), i = e), "string" == typeof n && (t = h(t), i = r(i = s(n, this.currentLocale, t.smart_count), t)), i
				}, t.prototype.has = function(e) {
					return e in this.phrases
				};
				var d = "||||",
					g = {
						chinese: function(e) {
							return 0
						},
						german: function(e) {
							return 1 !== e ? 1 : 0
						},
						french: function(e) {
							return e > 1 ? 1 : 0
						},
						russian: function(e) {
							return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
						},
						czech: function(e) {
							return 1 === e ? 0 : e >= 2 && e <= 4 ? 1 : 2
						},
						polish: function(e) {
							return 1 === e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
						},
						icelandic: function(e) {
							return e % 10 != 1 || e % 100 == 11 ? 1 : 0
						}
					},
					p = {
						chinese: ["fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh"],
						german: ["da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv"],
						french: ["fr", "tl", "pt-br"],
						russian: ["hr", "ru"],
						czech: ["cs"],
						polish: ["pl"],
						icelandic: ["is"]
					};
				return t
			}), cc._RF.pop()
	}, {}],
	"use_v2.0.x_cc.Toggle_event": [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "bad061fODVDsrsPkYtUOc3B", "use_v2.0.x_cc.Toggle_event"), cc.Toggle && (cc.Toggle._triggerEventInScript_check = !0), cc._RF.pop()
	}, {}]
}, {}, ["LanguageData", "LocalizedLabel", "LocalizedSprite", "SpriteFrameSet", "polyglot.min", "AdManager", "AdsManager", "AudioManager", "CheckupSetPop", "DecorationScene", "DropWater", "FaceDetection", "FirstItem", "FirstItemRemark", "GDSdk", "GameManager", "GameMonetizeSdk", "GameScene", "GeneralRemind", "GetRewardAPK", "GiftItemRemark", "ImageItem", "ImageItemRemark", "LimitedSetPanel", "Loading", "MainMenu", "MoveItem", "MyProgressBar", "NativeControl", "OPPOBannerCtrl", "Person", "SecondItem", "SecondItemRemark", "SettingPanelCtl", "ShopItem", "ShopItemRemark", "ShopItemTest", "SignPanel", "Star", "TestNode", "TextureMove", "addBottleItem", "mta_analysis", "use_v2.0.x_cc.Toggle_event", "DemoTest", "PanelControl", "PushConfig", "PushIcon", "PushItemRemark", "PushNodeCtl", "Airplane", "AnimEvent", "Cat", "CatBox", "ConfigCat", "GameControllerCat", "GuideController", "Mat", "PopCat", "ShopCatItem", "ShopPrivilegeItem"]);