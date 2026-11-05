function setDefaultItem(count,name){
		var value = cc.sys.localStorage.getItem(name);
		if(value == null){
			for(var i=0;i<= count;i++){
			var pos = i+1;
			cc.sys.localStorage.setItem(name+String(pos), 3);
			}		
		}		 
		
	}
window.__require = function e(t, n, i) {
	
    function o(s, r) {
        if (!n[s]) {
            if (!t[s]) {
                var c = s.split("/");
                if (c = c[c.length - 1], !t[c]) {
                    var h = "function" == typeof __require && __require;
                    if (!r && h) return h(c, !0);
                    if (a) return a(c, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
                s = c
            }
            var l = n[s] = {
                exports: {}
            };
            t[s][0].call(l.exports, function(e) {
                return o(t[s][1][e] || e)
            }, l, l.exports, e, t, n, i)
        }
        return n[s].exports
    }
    for (var a = "function" == typeof __require && __require, s = 0; s < i.length; s++) o(i[s]);
    return o
}({
    AdsManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a3e16OjNOZEfLJ9GMMZjeWU", "AdsManager");
        var i = e("GameManager");
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
                bannerCreateTimes: 0,
                isInit: !1,
                lockType: 1,
                isRealUnlock: !1,
                WXBannerId: "",
                WXInterId: "",
                WXVideoId: "",
                TTBannerId: "4u1o0lbnj1bcgd67i9",
                TTInterId: "211u4vcbfgb17lgl7n",
                TTVideoId: "egh85d1k5h2b42h208",
                QQBannerId: "e4ee20a15556d4085d66c926a1885ddc",
                QQInterId: "927eee42bad214ad076a9f537b25f0a5",
                QQVideoId: "affa7a7c4d1432f9f38dedfd7aee96ff",
                QQBoxId: "64bfb4a7c7b31b8350ede6f244e7bb72",
                QQBlockId: "e542306b570fdad42d4dc93d8c8ec387",
                QQHBlockId: "4416c4190e479743c4da22a4c4100195",
                SWANAppId: "",
                SWANBannerId: "",
                SWANInterId: "",
                SWANVideoId: "",
                OPPOAppId: "30256202",
                OPPOBannerId: "172252",
                OPPOInterId: "172253",
                OPPOVideoId: "172254",
                OPPONativeBannerId: "187740",
                OPPONativeInterId: "188178",
                OPPONativeIconId: "222210",
                OPPOGamePortalAdId: "222258",
                VIVOBannerId: "66e5ee97e3944c50bf359b5f59f2f10c",
                VIVOInterId: "bfff43934c224bdc837c3334a0c59807",
                VIVOVideoId: "622535127d1140ed840ca6b3b3116498",
                VIVONativeBannerId: "b3d72cb2f8b940eda6911acfc4a9fae9",
                VIVONativeInterId: "cd6e02d0d74342348c86149d7e1ed633",
                VIVONativeIconId: "c55e63b98e5f4e0f9dc17ebda6c30754",
                testFlag: 1,
                oppoInterFlag: 0,
                videoRemain: 10
            },
            BannerFailHandle: function() {},
            BannerShowHandle: function() {
                try {
                    "vivo" != i.channel && "oppo" != i.channel || i.curScene && -1 == i.curScene.name.indexOf("MainMenu") && i.curScene.nativeControl && i.curScene.nativeControl.BtnNativeAdClose(null, 1)
                } catch (e) {}
            },
            InterFailHandle: function(e) {
                try {
                    0 == e && (i.curScene.generalRemind.active = !0, i.curScene.generalRemind.getComponent("GeneralRemind").InitPanel(0), i.ShowPanelHandle(), i.curScene.GetReward(-1)), "vivo" == i.channel && 1 == i.isShowNative && i.curScene && i.curScene.nativeControl && i.adsManager.ShowNativeAd(2, 1, i.curScene.nativeControl.ShowNativeInter)
                } catch (e) {}
            },
            InterShowHandle: function(e) {
                try {
                    0 == e && (i.curScene.generalRemind.active = !0, i.curScene.generalRemind.getComponent("GeneralRemind").InitPanel(0), i.ShowPanelHandle(), i.curScene.GetReward(-1))
                } catch (e) {}
            },
            VideoFailHandle: function() {
                try {
                    "4399" == i.channel ? (i.curScene.generalRemind.active = !0, this.videoRemain < 1 ? i.curScene.generalRemind.getComponent("GeneralRemind").InitPanel(5) : i.curScene.generalRemind.getComponent("GeneralRemind").InitPanel(3), i.ShowPanelHandle()) : i.adsManager.isRealUnlock ? (i.curScene.generalRemind.active = !0, i.curScene.generalRemind.getComponent("GeneralRemind").InitPanel(3), i.ShowPanelHandle()) : 1 == i.adsManager.lockType ? i.adsManager.ShowInterstitial(0) : (i.curScene.generalRemind.active = !0, i.curScene.generalRemind.getComponent("GeneralRemind").InitPanel(3), i.ShowPanelHandle())
                } catch (e) {}
            },
            VideoShowHandle: function() {
                try {
                    i.curScene.GetReward()
                } catch (e) {}
            },
            VideoShow: function() {
                try {
                    i.isVideoPlaying = !0, cc.sys.platform != cc.sys.DESKTOP_BROWSER && "qq" == i.channel && i.GetIsPhone() ? i.audioControl && i.audioControl.pause() : cc.sys.platform != cc.sys.DESKTOP_BROWSER && "vivo" == i.channel && i.StopMusic()
                } catch (e) {}
            },
            VideoClose: function() {
                try {
                    i.isVideoPlaying = !1, cc.sys.platform != cc.sys.DESKTOP_BROWSER && "qq" == i.channel && i.GetIsPhone() ? (i.audioControl && (i.audioControl.volume = 0), i.adsManager.schedule(function() {
                        i.audioOn ? i.audioControl && i.audioControl.play() : i.audioControl && i.audioControl.pause(), i.audioControl && (i.audioControl.volume = 1)
                    }, .25)) : cc.sys.platform != cc.sys.DESKTOP_BROWSER && "vivo" == i.channel && i.audioOn && i.PlayMusic()
                } catch (e) {}
            },
            NaiveAdShowSuc: function(e) {
                try {
                    1 == e && (i.adsManager.HideBanner(), 0 == i.isRemindPopup && i.curScene.nativeControl.nativeBannerBtn && i.curScene.nativeControl.nativeBannerBtn.node.active && (i.curScene.nativeControl.nativeBannerBtn.node.height = 120, i.curScene.nativeControl.nativeBannerBtn.node.getComponent(cc.Widget).bottom = 0))
                } catch (e) {}
            },
            NaiveAdShowFail: function(e) {
                try {
                    1 == e && (i.adsManager.ShowBanner(), i.curScene.nativeControl.BtnNativeAdClose(null, 1))
                } catch (e) {}
            },
            AdInit: function() {
                if (0 == this.isInit) {
                    var e = this;
                    this.isInit = !0, this.startTime = i.GetNowTime(), i.isShowNative = !1, "oppo" != i.channel && "vivo" != i.channel || (this.nativeAd = [], "vivo" == i.channel ? i.systemInfo.platformVersionCode >= 1053 ? i.isShowNative = !0 : i.isShowNative = !1 : i.isShowNative = !0), "oppo" == i.channel ? (qg.getSystemInfoSync().platformVersion < 1051 ? i.isOldAd = !0 : i.isOldAd = !1, i.isOldAd ? qg.initAdService({
                        appId: e.OPPOAppId,
                        isDebug: !1,
                        success: function(t) {
                            try {
                                e.InitVideo()
                            } catch (e) {}
                        },
                        fail: function(e) {
                            console.log("fail:" + e.code + e.msg)
                        }
                    }) : this.InitVideo()) : (this.InitInterstitial(), this.InitVideo(), this.InitAppBox()), "tt" == i.channel || "wx" == i.channel || "4399" == i.channel ? i.isShowBanner = !1 : i.isShowBanner = !0
                }
            },
            ShowBanner: function() {
                if (cc.sys.platform != cc.sys.DESKTOP_BROWSER && "4399" != i.channel && 0 != i.IsCanSupportFunc(0)) {
                    var e = this;
                    if ("wx" == i.channel || "tt" == i.channel || "qq" == i.channel) {
                        if ("wx" == i.channel) {
                            null != this.bannerAd && (this.bannerAd.destroy(), this.bannerAd = null);
                            var t = wx.getSystemInfoSync(),
                                n = t.screenWidth / 2,
                                o = t.screenHeight;
                            this.bannerAd = wx.createBannerAd({
                                adUnitId: e.WXBannerId,
                                adIntervals: 30,
                                style: {
                                    width: 300,
                                    top: 0,
                                    left: 0
                                }
                            }), this.bannerAd.onResize(function() {
                                e.bannerAd.style.left = n - e.bannerAd.style.realWidth / 2 + .1, e.bannerAd.style.top = o - e.bannerAd.style.realHeight + .1
                            })
                        } else if ("tt" == i.channel) {
                            null != this.bannerAd && (this.bannerAd.destroy(), this.bannerAd = null);
                            var a = tt.getSystemInfoSync(),
                                s = a.windowWidth,
                                r = a.windowHeight,
                                c = 200;
                            i.IsCanSupportFunc(4) ? this.bannerAd = tt.createBannerAd({
                                adUnitId: e.TTBannerId,
                                style: {
                                    width: c,
                                    top: r - c / 16 * 9
                                },
                                adIntervals: 30
                            }) : this.bannerAd = tt.createBannerAd({
                                adUnitId: e.TTBannerId,
                                style: {
                                    width: c,
                                    top: r - c / 16 * 9
                                }
                            }), this.bannerAd.style.left = (s - c) / 2, this.bannerAd.onResize(function(t) {
                                c != t.width && (c = t.width, e.bannerAd.style.left = (s - t.width) / 2, e.bannerAd.style.top = r - t.height)
                            })
                        } else if ("qq" == i.channel) {
                            var h = qq.getSystemInfoSync(),
                                l = h.screenWidth,
                                d = h.screenHeight;
                            return void(null != this.bannerAd ? (this.bannerAd.destroy(), this.bannerAd = null, "ios" == h.platform.toLowerCase() ? this.scheduleOnce(function() {
                                this.InitBannerQQ(e, l, d)
                            }.bind(this), .5) : this.InitBannerQQ(e, l, d)) : this.InitBannerQQ(e, l, d))
                        }
                        this.bannerAd.onLoad(function() {
                            e.bannerAd.show(), e.BannerShowHandle()
                        }), this.bannerAd.onError(function(t) {
                            console.log("banner error" + t.errMsg), e.BannerFailHandle()
                        })
                    } else if ("swan" == i.channel) {
                        if (i.GetNowTime() - this.startTime < 5e3) return;
                        if (this.isShow) return;
                        null != this.bannerAd && this.bannerAd.destroy();
                        var u = swan.getSystemInfoSync(),
                            p = u.windowWidth,
                            g = u.windowHeight;
                        c = 300;
                        this.bannerAd = swan.createBannerAd({
                            adUnitId: e.SWANBannerId,
                            appSid: e.SWANAppId,
                            style: {
                                width: c,
                                top: g - c / 3
                            }
                        }), this.bannerAd.style.left = (p - c) / 2, this.bannerAd.onLoad(function() {
                            e.bannerAd.show(), e.isShow = !0, e.times = 0, e.scheduleOnce(function() {
                                e.isShow = !1, e.ShowBanner()
                            }, 30)
                        }), this.bannerAd.onError(function(t) {
                            console.log("banner onError" + t.errCode), e.times < 5 && e.scheduleOnce(function() {
                                e.times++, e.ShowBanner()
                            }, 5)
                        })
                    } else if ("vivo" == i.channel) {
                        if (this.isShow) return;
                        if (i.GetNowTime() - this.bannerCreateTimes < 1e4) return;
                        this.bannerAd && (this.bannerAd.destroy(), this.bannerAd = null), this.bannerAd = qg.createBannerAd({
                            posId: e.VIVOBannerId,
                            style: {}
                        }), this.bannerCreateTimes = i.GetNowTime(), this.bannerAd && this.bannerAd.onError(function(t) {
                            console.log("banner\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", +t.errMsg), e.isShow = !1
                        }), this.bannerAd && this.bannerAd.show().then(function() {
                            e.BannerShowHandle(), e.isShow = !0
                        }).catch(function(t) {
                            console.log("banner\u5e7f\u544a\u5c55\u793a\u5931\u8d25" + t.errCode, t.errMsg), e.BannerFailHandle(), e.isShow = !1
                        })
                    } else "oppo" == i.channel && (i.isOldAd ? (this.bannerAd = qg.createBannerAd({
                        posId: e.OPPOBannerId
                    }), this.bannerAd && this.bannerAd.show()) : (null != this.bannerAd && (this.bannerAd.destroy(), this.bannerAd = null), this.bannerAd = qg.createBannerAd({
                        adUnitId: e.OPPOBannerId
                    }), this.bannerAd && this.bannerAd.show(), this.bannerAd && this.bannerAd.onHide(function() {
                        e.isShow = !1
                    }), this.bannerAd && this.bannerAd.onShow(function() {
                        0 == i.isOldAd && (e.isShow = !0), e.BannerShowHandle()
                    })), this.bannerAd && this.bannerAd.onError(function(t) {
                        console.log("oppo banner onError:" + t.errMsg), e.isShow = !1, e.BannerFailHandle()
                    }))
                }
            },
            InitBannerQQ: function(e, t, n) {
                e.bannerAd = qq.createBannerAd({
                    adUnitId: e.QQBannerId,
                    style: {
                        width: 320,
                        top: 0,
                        left: 0
                    }
                }), e.bannerAd && e.bannerAd.onResize(function(i) {
                    e.bannerAd && (e.bannerAd.style.top = n - i.height, e.bannerAd.style.left = (t - i.width) / 2)
                }), e.bannerAd.onLoad(function() {
                    e.bannerAd.show(), e.BannerShowHandle()
                }), e.bannerAd.onError(function(t) {
                    console.log("banner error" + t.errMsg), e.BannerFailHandle()
                })
            },
            HideBanner: function() {
                if (cc.sys.platform != cc.sys.DESKTOP_BROWSER && "4399" != i.channel && 0 != i.IsCanSupportFunc(0) && null != this.bannerAd) {
                    if ("oppo" == i.channel && i.isOldAd) return void this.bannerAd.hide();
                    this.bannerAd.destroy(), this.bannerAd = null, this.isShow = !1
                }
            },
            InitAppBox: function() {
                if (cc.sys.platform !== cc.sys.DESKTOP_BROWSER && "4399" != i.channel && 0 != i.IsCanSupportFunc(12)) {
                    var e = this;
                    this.appbox = qq.createAppBox({
                        adUnitId: e.QQBoxId
                    }), this.appbox && this.appbox.load(), this.appbox.onClose(function() {
                        e.appbox && e.appbox.load()
                    })
                }
            },
            ShowAppBox: function() {
                if (cc.sys.platform !== cc.sys.DESKTOP_BROWSER && "4399" != i.channel && 0 != i.IsCanSupportFunc(12))
                    if (null != this.appbox) {
                        var e = this;
                        this.appbox && this.appbox.show().catch(function(t) {
                            e.appbox.load()
                        })
                    } else this.InitAppBox()
            },
            ShowBlockAd: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                if (cc.sys.platform !== cc.sys.DESKTOP_BROWSER && "4399" != i.channel && 0 != i.IsCanSupportFunc(15)) {
                    var t = this,
                        n = i.systemInfo.screenHeight;
                    i.systemInfo.screenWidth;
                    this.blockAd && (this.blockAd.destroy(), this.blockAd = null);
                    var o = 16,
                        a = 150;
                    0 == e ? (o = 32, i.GetIsPhone() && (a = (n - 229) / 2 - 50), this.blockAd = qq.createBlockAd({
                        adUnitId: t.QQBlockId,
                        size: 3,
                        orientation: "vertical",
                        style: {
                            left: o,
                            top: a
                        }
                    }), 1 == i.IsCanSupportFunc(18) && this.blockAd && this.blockAd.onResize(function(e) {
                        t.blockAd.style.top = (n - e.height) / 2
                    })) : (a = cc.winSize.height / cc.winSize.width >= 2 ? i.GetIsPhone() ? 120 : 180 : 60, this.blockAd = qq.createBlockAd({
                        adUnitId: t.QQHBlockId,
                        size: 4,
                        orientation: "landscape",
                        style: {
                            left: 35,
                            top: a
                        }
                    }), 1 == i.IsCanSupportFunc(18) && this.blockAd && this.blockAd.onResize(function(e) {
                        t.blockAd.style.top = a
                    })), this.blockAd && this.blockAd.onError(function(e) {
                        console.log("blockAd error", e)
                    }), this.blockAd && this.blockAd.onLoad(function() {
                        t.blockAd.show(), t.interLoadTime = i.GetNowTime()
                    })
                }
            },
            HideBlockAd: function() {
                this.blockAd && this.blockAd.destroy()
            },
            InitInterstitial: function() {
                if (cc.sys.platform != cc.sys.DESKTOP_BROWSER && "4399" != i.channel && 0 != i.IsCanSupportFunc(1)) {
                    var e = this;
                    "wx" == i.channel ? (this.interstitialAd = null, wx.createInterstitialAd && (this.interstitialAd = wx.createInterstitialAd({
                        adUnitId: e.WXInterId
                    }), this.interstitialAd && this.interstitialAd.onClose(function() {
                        e.isInterLoad = !1, e.interstitialAd.load()
                    }), this.interstitialAd && this.interstitialAd.onError(function(t) {
                        console.log(t), e.isInterLoad = !1
                    }), this.interstitialAd && this.interstitialAd.onLoad(function() {
                        e.isInterLoad = !0
                    }))) : "tt" == i.channel ? (this.interstitialAd && (this.interstitialAd.destroy(), this.interstitialAd = null), this.interstitialAd = tt.createInterstitialAd({
                        adUnitId: e.TTInterId
                    }), this.interstitialAd && this.interstitialAd.onClose(function() {
                        e.isInterLoad = !1, e.interCloseTime = i.GetNowTime(), e.InitInterstitial()
                    }), this.interstitialAd && this.interstitialAd.onError(function(t) {
                        console.log(t), e.isInterLoad = !1
                    }), this.interstitialAd && this.interstitialAd.onLoad(function() {
                        e.isInterLoad = !0
                    })) : "qq" == i.channel ? (i.GetIsPhone() && this.interstitialAd && (this.interstitialAd.destroy(), this.interstitialAd = null), this.interstitialAd = qq.createInterstitialAd({
                        adUnitId: e.QQInterId
                    }), this.interstitialAd.onLoad(function() {
                        e.isInterLoad = !0
                    }), this.interstitialAd.onClose(function() {
                        e.interCloseTime = i.GetNowTime(), e.isInterLoad = !1
                    }), this.interstitialAd.onError(function(t) {
                        console.log("error", t), e.isInterLoad = !1
                    })) : "oppo" == i.channel && (i.isOldAd ? this.interstitialAd = qg.createInsertAd({
                        posId: e.OPPOInterId
                    }) : (this.interstitialAd = qg.createInsertAd({
                        adUnitId: e.OPPOInterId
                    }), this.interstitialAd && this.interstitialAd.onClose(function() {
                        e.interCloseTime = i.GetNowTime(), e.interstitialAd && e.interstitialAd.load(), e.isInterLoad = !1
                    })), this.interstitialAd && this.interstitialAd.load(), this.interstitialAd && this.interstitialAd.onError(function(t) {
                        e.isInterLoad = !1, console.log("oppo InsertAd:" + t.code + " " + t.msg)
                    }), this.interstitialAd && this.interstitialAd.onLoad(function() {
                        e.isInterLoad = !0
                    }))
                }
            },
            ShowInterstitial: function(e) {
                if (void 0 == e && (e = -1), cc.sys.platform != cc.sys.DESKTOP_BROWSER && "4399" != i.channel)
                    if (0 != i.IsCanSupportFunc(1)) {
                        var t = this;
                        if ("vivo" == i.channel) {
                            if (i.GetNowTime() - t.interLoadTime < 1e4) return void t.InterFailHandle(e);
                            this.interstitialAd = qg.createInterstitialAd({
                                posId: t.VIVOInterId
                            }), this.interstitialAd && this.interstitialAd.onError(function(e) {
                                console.log("\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", e.errMsg)
                            }), this.interstitialAd && this.interstitialAd.show().then(function() {
                                t.interLoadTime = i.GetNowTime(), t.InterShowHandle(e)
                            }).catch(function(n) {
                                console.log("\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u5931\u8d25", JSON.stringify(n)), t.InterFailHandle(e)
                            })
                        } else if ("oppo" == i.channel) {
                            if (0 == this.isInterLoad) return null == this.interstitialAd ? this.InitInterstitial() : this.interstitialAd.load(), void t.InterFailHandle(e);
                            if (i.GetNowTime() - this.interCloseTime < 6e4) return void t.InterFailHandle(e);
                            if (this.interShowTimes > 8) return void t.InterFailHandle(e);
                            this.interShowTimes++, 1 == this.oppoInterFlag && i.SetInterShowTimes(this.interShowTimes), this.HideBanner(), this.isInterLoad = !1, this.interstitialAd && this.interstitialAd.show(), i.isOldAd && (this.interCloseTime = i.GetNowTime()), this.InterShowHandle(e)
                        } else if ("wx" == i.channel || "tt" == i.channel || "qq" == i.channel) {
                            if (("tt" == i.channel || "qq" == i.channel) && i.GetNowTime() - this.startTime < 3e4) return void t.InterFailHandle(e);
                            if (null == this.interstitialAd) return this.InitInterstitial(), void this.InterFailHandle(e);
                            if (0 == this.isInterLoad && "tt" != i.channel) return i.GetIsPhone() && "qq" == i.channel ? this.InitInterstitial() : "wx" == i.channel && 0 == i.IsCanSupportFunc(14) ? this.InitInterstitial() : this.interstitialAd.load(), void this.InterFailHandle(e);
                            if ("tt" == i.channel && i.GetNowTime() - this.interCloseTime < 3e4) return void this.InterFailHandle(e);
                            if ("qq" == i.channel && i.GetNowTime() - this.interCloseTime < 6e4) return void this.InterFailHandle(e);
                            this.isInterLoad = !1, this.interstitialAd.show().then(function() {
                                t.InterShowHandle(e)
                            }).catch(function(n) {
                                console.log("\u5e7f\u544a\u7ec4\u4ef6\u51fa\u73b0\u95ee\u9898", n), t.interstitialAd.load().then(function() {}), t.InterFailHandle(e)
                            })
                        }
                    } else this.InterFailHandle(e);
                else 0 == this.testFlag ? this.InterShowHandle(e) : 1 == this.testFlag && this.InterFailHandle(e)
            },
            InitVideo: function() {
                if (cc.sys.platform != cc.sys.DESKTOP_BROWSER && "4399" != i.channel && "4399" != i.channel && 0 != i.IsCanSupportFunc(2)) {
                    var e = this;
                    if ("wx" == i.channel || "tt" == i.channel || "qq" == i.channel) {
                        if ("wx" == i.channel) this.videoAd = wx.createRewardedVideoAd({
                            adUnitId: e.WXVideoId
                        });
                        else if ("tt" == i.channel) {
                            if (this.videoAd) return;
                            this.videoAd = tt.createRewardedVideoAd({
                                adUnitId: e.TTVideoId
                            })
                        } else "qq" == i.channel && (this.videoAd = qq.createRewardedVideoAd({
                            adUnitId: e.QQVideoId
                        }), this.videoAd && this.videoAd.load());
                        this.videoAd.onError(function(t) {
                            e.isVideoLoad = !1, console.log("video error=" + t.errMsg)
                        }), this.videoAd.onLoad(function() {
                            e.isVideoLoad = !0
                        }), this.videoAd.onClose(function(t) {
                            try {
                                e.isVideoLoad = !1, t && t.isEnded ? e.VideoShowHandle() : console.log("\u4e2d\u9014\u9000\u51fa"), e.VideoClose(), "tt" != i.channel && "qq" != i.channel || (e.interCloseTime = i.GetNowTime()), e.videoAd.load()
                            } catch (e) {
                                console.log(e)
                            }
                        }.bind(this))
                    } else "swan" == i.channel ? (this.videoAd = swan.createRewardedVideoAd({
                        adUnitId: e.SWANVideoId,
                        appSid: e.getSWANAppId
                    }), this.videoAd.onError(function(t) {
                        console.log("\u6fc0\u52b1\u89c6\u9891\u9519\u8bef" + t.errCode + t.errMsg), e.isVideoLoad = !1
                    }), this.videoAd.onLoad(function() {
                        e.isVideoLoad = !0
                    }), this.videoAd.onClose(function(t) {
                        e.isVideoLoad = !1, e.VideoClose(), t && t.isEnded ? e.VideoShowHandle() : console.log("\u4e2d\u9014\u9000\u51fa")
                    }.bind(this))) : "vivo" == i.channel ? (this.videoAd = qg.createRewardedVideoAd({
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
                        e.isVideoLoad = !1, e.scheduleOnce(function() {
                            e.videoAd.load()
                        }, 15)
                    }), this.videoAd.onLoad(function() {
                        e.isVideoLoad = !0
                    }), this.videoAd.onClose(function(t) {
                        e.isVideoLoad = !1, e.VideoClose(), t && t.isEnded ? e.VideoShowHandle() : console.log("\u4e2d\u9014\u9000\u51fa"), e.videoAd.load()
                    })) : "oppo" == i.channel && (this.videoAd && (this.videoAd.destroy(), this.videoAd = null), i.isOldAd ? this.videoAd = qg.createRewardedVideoAd({
                        posId: e.OPPOVideoId
                    }) : this.videoAd = qg.createRewardedVideoAd({
                        adUnitId: e.OPPOVideoId
                    }), this.videoAd && this.videoAd.onError(function(t) {
                        e.isVideoLoad = !1, console.log("video onerror:" + t.errMsg)
                    }), this.videoAd && this.videoAd.load(), this.videoAd && this.videoAd.onLoad(function() {
                        e.isVideoLoad = !0
                    }), this.videoAd && this.videoAd.onClose(function(t) {
                        t.isEnded ? e.VideoShowHandle() : console.log("\u4e2d\u9014\u9000\u51fa"), e.VideoClose(), e.isVideoLoad = !1, e.InitVideo()
                    }))
                }
            },
            ShowVideo: function() {
                var e = this;
                if ("4399" != i.channel)
                    if (cc.sys.platform != cc.sys.DESKTOP_BROWSER && "4399" != i.channel)
                        if (0 != i.IsCanSupportFunc(2)) {
                            if ("wx" == i.channel || "tt" == i.channel || "qq" == i.channel || "swan" == i.channel || "vivo" == i.channel) {
                                if (null == this.videoAd) return this.InitVideo(), void this.VideoFailHandle();
                                this.videoAd.show().then(function() {
                                    e.VideoShow()
                                }).catch(function(t) {
                                    e.videoAd.load().then(function() {
                                        console.log("\u624b\u52a8\u52a0\u8f7d\u6210\u529f")
                                    }), e.VideoFailHandle()
                                })
                            } else if ("oppo" == i.channel) {
                                if (0 == this.isVideoLoad) return this.VideoFailHandle(), void this.InitVideo();
                                if (qg.getNetworkType({
                                        success: function(e) {
                                            i.networkType = e.networkType
                                        },
                                        fail: function(e) {
                                            console.log(e.errMsg)
                                        },
                                        complete: function(e) {}
                                    }), "none" == i.networkType) return this.VideoFailHandle(), void(this.isVideoLoad = !1);
                                this.VideoShow(), this.videoAd && this.videoAd.show()
                            }
                        } else this.VideoFailHandle();
                else 0 == this.testFlag ? this.VideoShowHandle() : 1 == this.testFlag && this.VideoFailHandle();
                else window.h5api.canPlayAd(function(t) {
                    e.videoRemain = t.remain, t.canPlayAd && t.remain > 0 ? window.h5api.playAd(function(t) {
                        1e4 === t.code || (10001 === t.code ? e.VideoShowHandle() : (e.VideoFailHandle(), console.log("Ngoại lệ ads " + t.message)))
                    }) : e.VideoFailHandle()
                })
				console.log("aaa 001")
            },
            ShowNativeAd: function(e, t, n) {
                if (cc.sys.platform != cc.sys.DESKTOP_BROWSER && "4399" != i.channel && 0 != i.IsCanSupportFunc(3)) {
                    var o = this,
                        a = "";
                    0 == e ? "oppo" == i.channel ? a = o.OPPONativeIconId : "vivo" == i.channel && (a = o.VIVONativeIconId) : 1 == e ? "oppo" == i.channel ? a = o.OPPONativeBannerId : "vivo" == i.channel && (a = o.VIVONativeBannerId) : 2 == e && ("oppo" == i.channel ? a = o.OPPONativeInterId : "vivo" == i.channel && (a = o.VIVONativeInterId)), "oppo" == i.channel ? (this.nativeAd[e] && (this.nativeAd[e].destroy(), this.nativeAd[e] = null), i.isOldAd ? this.nativeAd[e] = qg.createNativeAd({
                        posId: a
                    }) : this.nativeAd[e] = qg.createNativeAd({
                        adUnitId: a
                    })) : "vivo" == i.channel && (this.nativeAd[e] = qg.createNativeAd({
                        adUnitId: a
                    })), this.nativeAd[e] && this.nativeAd[e].onLoad(function(i) {
                        var a;
                        i && i.adList && (a = i.adList.pop(), 0 == t ? n(a.adId, a.icon) : 1 == t ? n(a.adId, a.title, a.desc) : 2 == t && n(a.adId, a.title, a.desc, a.icon), o.nativeAd[e].reportAdShow({
                            adId: a.adId.toString()
                        }), o.NaiveAdShowSuc(e))
                    }), this.nativeAd[e] && this.nativeAd[e].onError(function(t) {
                        console.log("native error" + t.errMsg), o.NaiveAdShowFail(e)
                    }), this.nativeAd[e] && this.nativeAd[e].load()
                }
            },
            ClickNativeAd: function(e, t) {
                cc.sys.platform != cc.sys.DESKTOP_BROWSER && "4399" != i.channel && 0 != i.IsCanSupportFunc(3) && this.nativeAd[t] && this.nativeAd[t].reportAdClick({
                    adId: e
                })
            },
            HideNativeAd: function(e) {
                cc.sys.platform != cc.sys.DESKTOP_BROWSER && "4399" != i.channel && 0 != i.IsCanSupportFunc(3) && "oppo" == i.channel && this.nativeAd[e] && (this.nativeAd[e].destroy(), this.nativeAd[e] = null)
            },
            InitGamePortalAd: function() {
                if (cc.sys.platform != cc.sys.DESKTOP_BROWSER && "4399" != i.channel) {
                    var e = this;
                    this.gamePortalAd = qg.createGamePortalAd({
                        adUnitId: e.OPPOGamePortalAdId
                    }), this.gamePortalAd.load(), this.gamePortalAd.onLoad(function() {
                        console.log("Hộp đẩy lẫn nhau Quảng cáo Jiugongge được tải thành công"), e.isGameAdLoad = !0
                    }), this.gamePortalAd.onClose(function() {
                        e.isGameAdLoad = !1, e.gamePortalAd.load(), console.log("Hộp đẩy tương hỗ Jiugongge Quảng cáo đã đóng")
                    }), this.gamePortalAd.onError(function(t) {
                        e.isGameAdLoad = !1, console.log(t.errMsg)
                    })
                }
            },
            ShowGamePortalAd: function() {
                if (cc.sys.platform != cc.sys.DESKTOP_BROWSER && "4399" != i.channel) {
                    var e = this;
                    if (null == this.gamePortalAd) return this.InitGamePortalAd(), void qg.showToast({
                        title: "Không tải được tài nguyên",
                        duration: 1e3,
                        icon: "none"
                    });
                    this.gamePortalAd.show().then(function() {
                        console.log("show success")
                    }).catch(function(t) {
                        console.log("show fail with:" + t.errCode + "," + t.errMsg), e.gamePortalAd.load(), qg.showToast({
                            title: "Không tải được tài nguyên",
                            duration: 1e3,
                            icon: "none"
                        })
                    })
                }
            }
        }), cc._RF.pop()
    }, {
        GameManager: "GameManager"
    }],
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
                    if (e < 0 || t < 0) console.log("Tham số không chính xác");
                    else {
                        if (void 0 == n && (n = !1), null == this.audioSources[e] || void 0 == this.audioSources[e]) {
                            console.log("Thêm " + (e + 1) + " nguồn phát");
                            var o = this.node.addComponent(cc.AudioSource);
                            this.audioSources[e] = o
                        }
                        this.audioSources[e].clip == this.audioClips[t] && this.audioSources[e].isPlaying && n || (this.audioSources[e].stop(), this.audioSources[e].clip = null, this.audioSources[e].clip = this.audioClips[t], this.audioSources[e].loop = n, this.audioSources[e].play())
                    }
            },
            StopSound: function(e, t) {
                0 != i.audioOn && (e < 0 || t < 0 ? console.log("Tham số không chính xác") : null != this.audioSources[e] && void 0 != this.audioSources[e] && this.audioSources[e].clip == this.audioClips[t] && (this.audioSources[e].stop(), this.audioSources[e].clip = null))
            },
            PlayClickSound: function() {
                this.PlaySound(0, 0, !1)
            },
            PlayDeleteSound: function() {
                this.PlaySound(1, 1, !1)
            },
            PlayPhotoSound: function() {
                this.PlaySound(1, 2, !1)
            }
        }), cc._RF.pop()
    }, {
        GameManager: "GameManager"
    }],
    CheckupSetPop: [function(e, t, n) {
        "use strict";

        function i(e) {
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (e = o(e))) {
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
            var i, a, s = !0,
                r = !1;
            return {
                s: function() {
                    i = e[Symbol.iterator]()
                },
                n: function() {
                    var e = i.next();
                    return s = e.done, e
                },
                e: function(e) {
                    r = !0, a = e
                },
                f: function() {
                    try {
                        s || null == i.return || i.return()
                    } finally {
                        if (r) throw a
                    }
                }
            }
        }

        function o(e, t) {
            if (e) {
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
            }
        }

        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i
        }
        cc._RF.push(t, "49085XoaVVC2rrdTHjdr1Q5", "CheckupSetPop");
        var s = e("GameManager");
        cc.Class({
            extends: cc.Component,
            properties: {
                image: cc.Sprite,
                lockNode: cc.Node,
                unlockNode: cc.Node,
                stateNode: cc.Node,
                mask: cc.Node
            },
            onLoad: function() {
                this.isFirst = !0
            },
            onEnable: function() {
                this.InitPanel()
            },
            InitPanel: function() {
                this.mask.active = !0, this.allNum = s.curScene.setMsg.length;
                for (var e = new Array, t = 0; t < s.shopMsg.length; t++)
                    if (s.shopMsg[t].sex == s.sceneType) {
                        var n, o = !1,
                            a = i(s.checkupMsg);
                        try {
                            for (a.s(); !(n = a.n()).done;) {
                                var r = n.value;
                                parseInt(s.shopMsg[t].name.substr(0, s.shopMsg[t].name.length - 1)) == parseInt(r.index) && (o = !0)
                            }
                        } catch (e) {
                            a.e(e)
                        } finally {
                            a.f()
                        }
                        o && e.push(s.shopMsg[t])
                    } var c = e.length - 1;
                this.index = parseInt(Math.random() * (c + 1 - 0) + 0), this.itemMsg = e[this.index], this.frameName = this.itemMsg.name.substr(0, this.itemMsg.name.length - 1), this.localFlag = this.itemMsg.name.substr(this.itemMsg.name.length - 1, 1), this.LoadImage(s.sceneType, this.index);
                var h = "s" + this.itemMsg.name.substr(0, this.itemMsg.name.length - 1),
                    l = s.GetItemLockFlag(h);
                if (l >= this.itemMsg.videoNum) this.lockNode.active = !1, this.unlockNode.active = !1, this.stateNode.active = !1;
                else {
                    (isNaN(l) || l <= 0) && (l = 0), this.stateNode.active = !0;
                    for (var d = this.stateNode.children, u = 0; u < d.length; u++) d[u].active = u < l;
                    this.lockNode.active = !1, this.lockNode.getChildByName("num").getComponent(cc.Label).string = l + "/" + this.itemMsg.videoNum.toString(), this.unlockNode.active = !1
                }
                this.node.getChildByName("closeBtn").getComponent(cc.Button).interactable = !0
            },
            LoadImage: function(e, t) {
                var n = "set/";
                if (n += 1 == e ? "girl/" : "boy/", 0 == this.localFlag) {
                    var i = n + this.frameName;
                    cc.loader.loadRes(i, cc.SpriteFrame, function(e, n) {
                        try {
                            if (t != this.index) return;
                            if (e) return console.log(e), void(this.image.spriteFrame = null);
                            this.image.spriteFrame = n
                        } catch (e) {}
                    }.bind(this))
                } else {
                    var o = s.serverPath + n + this.frameName + ".png";
                    cc.loader.load(o, function(e, n) {
                        try {
                            if (t != this.index) return;
                            if (e) return console.log(e), void(this.image.spriteFrame = null);
                            this.image.spriteFrame = new cc.SpriteFrame(n)
                        } catch (e) {}
                    }.bind(this))
                }
            },
            BtnSetUse: function() {
                if (this.lockNode.active) {
                    if (s.GetNowTime() - s.lastTime < 1e3) return;
                    return s.lastTime = s.GetNowTime(), s.curUnlockItem = this, s.isHasAd ? (s.adsManager.lockType = 2, s.adsManager.ShowVideo()) : cc.sys.platform == cc.sys.DESKTOP_BROWSER && s.curScene.GetReward(), void this.mask.active
                }
                if (this.mask.active) return s.curUnlockItem = this, void(s.isHasAd ? (s.adsManager.lockType = 2, s.adsManager.ShowVideo()) : cc.sys.platform == cc.sys.DESKTOP_BROWSER && s.curScene.GetReward());
                s.curScene.ApplySetMsg(this.itemMsg, this.localFlag), s.curScene.onCheckupFaceBtnEvent()
            },
            UpdateItemButton: function() {
                if (this.mask.active) {
                    this.mask.active = !1;
                    var e = "s" + this.itemMsg.name.substr(0, this.itemMsg.name.length - 1);
                    s.GetItemLockFlag(e) >= this.itemMsg.videoNum ? (this.lockNode.active = !1, this.unlockNode.active = !0) : (this.lockNode.active = !0, this.unlockNode.active = !1)
                } else {
                    var t = "s" + this.itemMsg.name.substr(0, this.itemMsg.name.length - 1),
                        n = s.GetItemLockFlag(t);
                    if (isNaN(n) || n <= 0 ? n = 1 : n++, s.SetItemLockFlag(t, n), n >= this.itemMsg.videoNum) this.lockNode.active = !1, this.unlockNode.active = !0, s.curScene.UpdateThingMsg(this.itemMsg.sex), this.stateNode.active = !1;
                    else {
                        this.lockNode.getChildByName("num").getComponent(cc.Label).string = n + "/" + this.itemMsg.videoNum.toString();
                        var i = this.stateNode.children;
                        this.stateNode.active = !0;
                        for (var o = 0; o < i.length; o++) i[o].active = o < n
                    }
                }
            },
            BtnClosePanel: function(e) {
                e && (e.target.getComponent(cc.Button).interactable = !1), this.node.active = !1
            },
            onTouchEnd: function() {
                this.BtnClosePanel()
            }
        }), cc._RF.pop()
    }, {
        GameManager: "GameManager"
    }],
    1: [function(e, t, n) {
        "use strict";
        n.byteLength = function(e) {
            var t = h(e),
                n = t[0],
                i = t[1];
            return 3 * (n + i) / 4 - i
        }, n.toByteArray = function(e) {
            var t, n, i = h(e),
                s = i[0],
                r = i[1],
                c = new a(l(e, s, r)),
                d = 0,
                u = r > 0 ? s - 4 : s;
            for (n = 0; n < u; n += 4) t = o[e.charCodeAt(n)] << 18 | o[e.charCodeAt(n + 1)] << 12 | o[e.charCodeAt(n + 2)] << 6 | o[e.charCodeAt(n + 3)], c[d++] = t >> 16 & 255, c[d++] = t >> 8 & 255, c[d++] = 255 & t;
            2 === r && (t = o[e.charCodeAt(n)] << 2 | o[e.charCodeAt(n + 1)] >> 4, c[d++] = 255 & t);
            1 === r && (t = o[e.charCodeAt(n)] << 10 | o[e.charCodeAt(n + 1)] << 4 | o[e.charCodeAt(n + 2)] >> 2, c[d++] = t >> 8 & 255, c[d++] = 255 & t);
            return c
        }, n.fromByteArray = function(e) {
            for (var t, n = e.length, o = n % 3, a = [], s = 0, r = n - o; s < r; s += 16383) a.push(u(e, s, s + 16383 > r ? r : s + 16383));
            1 === o ? (t = e[n - 1], a.push(i[t >> 2] + i[t << 4 & 63] + "==")) : 2 === o && (t = (e[n - 2] << 8) + e[n - 1], a.push(i[t >> 10] + i[t >> 4 & 63] + i[t << 2 & 63] + "="));
            return a.join("")
        };
        for (var i = [], o = [], a = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = 0, c = s.length; r < c; ++r) i[r] = s[r], o[s.charCodeAt(r)] = r;

        function h(e) {
            var t = e.length;
            if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var n = e.indexOf("=");
            return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
        }

        function l(e, t, n) {
            return 3 * (t + n) / 4 - n
        }

        function d(e) {
            return i[e >> 18 & 63] + i[e >> 12 & 63] + i[e >> 6 & 63] + i[63 & e]
        }

        function u(e, t, n) {
            for (var i, o = [], a = t; a < n; a += 3) i = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), o.push(d(i));
            return o.join("")
        }
        o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63
    }, {}],
    2: [function(e, t, n) {
        (function(t) {
            "use strict";
            var i = e("base64-js"),
                o = e("ieee754"),
                a = e("isarray");

            function s() {
                return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function r(e, t) {
                if (s() < t) throw new RangeError("Invalid typed array length");
                return c.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = c.prototype : (null === e && (e = new c(t)), e.length = t), e
            }

            function c(e, t, n) {
                if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(e, t, n);
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                    return u(this, e)
                }
                return h(this, e, t, n)
            }

            function h(e, t, n, i) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? m(e, t, n, i) : "string" == typeof t ? p(e, t, n) : f(e, t)
            }

            function l(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative')
            }

            function d(e, t, n, i) {
                return l(t), t <= 0 ? r(e, t) : void 0 !== n ? "string" == typeof i ? r(e, t).fill(n, i) : r(e, t).fill(n) : r(e, t)
            }

            function u(e, t) {
                if (l(t), e = r(e, t < 0 ? 0 : 0 | v(t)), !c.TYPED_ARRAY_SUPPORT)
                    for (var n = 0; n < t; ++n) e[n] = 0;
                return e
            }

            function p(e, t, n) {
                if ("string" == typeof n && "" !== n || (n = "utf8"), !c.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                var i = 0 | S(t, n),
                    o = (e = r(e, i)).write(t, n);
                return o !== i && (e = e.slice(0, o)), e
            }

            function g(e, t) {
                var n = t.length < 0 ? 0 : 0 | v(t.length);
                e = r(e, n);
                for (var i = 0; i < n; i += 1) e[i] = 255 & t[i];
                return e
            }

            function m(e, t, n, i) {
                if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < n + (i || 0)) throw new RangeError("'length' is out of bounds");
                return t = void 0 === n && void 0 === i ? new Uint8Array(t) : void 0 === i ? new Uint8Array(t, n) : new Uint8Array(t, n, i), c.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = c.prototype : e = g(e, t), e
            }

            function f(e, t) {
                if (c.isBuffer(t)) {
                    var n = 0 | v(t.length);
                    return 0 === (e = r(e, n)).length ? e : (t.copy(e, 0, 0, n), e)
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || $(t.length) ? r(e, 0) : g(e, t);
                    if ("Buffer" === t.type && a(t.data)) return g(e, t.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }

            function v(e) {
                if (e >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
                return 0 | e
            }

            function S(e, t) {
                if (c.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var n = e.length;
                if (0 === n) return 0;
                for (var i = !1;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return n;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return K(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return J(e).length;
                    default:
                        if (i) return K(e).length;
                        t = ("" + t).toLowerCase(), i = !0
                }
            }

            function y(e, t, n) {
                var i = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                if ((n >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return _(this, t, n);
                    case "utf8":
                    case "utf-8":
                        return k(this, t, n);
                    case "ascii":
                        return F(this, t, n);
                    case "latin1":
                    case "binary":
                        return O(this, t, n);
                    case "base64":
                        return B(this, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return E(this, t, n);
                    default:
                        if (i) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), i = !0
                }
            }

            function w(e, t, n) {
                var i = e[t];
                e[t] = e[n], e[n] = i
            }

            function C(e, t, n, i, o) {
                if (0 === e.length) return -1;
                if ("string" == typeof n ? (i = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                    if (o) return -1;
                    n = e.length - 1
                } else if (n < 0) {
                    if (!o) return -1;
                    n = 0
                }
                if ("string" == typeof t && (t = c.from(t, i)), c.isBuffer(t)) return 0 === t.length ? -1 : I(e, t, n, i, o);
                if ("number" == typeof t) return t &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : I(e, [t], n, i, o);
                throw new TypeError("val must be string, number or Buffer")
            }

            function I(e, t, n, i, o) {
                var a, s = 1,
                    r = e.length,
                    c = t.length;
                if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    s = 2, r /= 2, c /= 2, n /= 2
                }

                function h(e, t) {
                    return 1 === s ? e[t] : e.readUInt16BE(t * s)
                }
                if (o) {
                    var l = -1;
                    for (a = n; a < r; a++)
                        if (h(e, a) === h(t, -1 === l ? 0 : a - l)) {
                            if (-1 === l && (l = a), a - l + 1 === c) return l * s
                        } else -1 !== l && (a -= a - l), l = -1
                } else
                    for (n + c > r && (n = r - c), a = n; a >= 0; a--) {
                        for (var d = !0, u = 0; u < c; u++)
                            if (h(e, a + u) !== h(t, u)) {
                                d = !1;
                                break
                            } if (d) return a
                    }
                return -1
            }

            function P(e, t, n, i) {
                n = Number(n) || 0;
                var o = e.length - n;
                i ? (i = Number(i)) > o && (i = o) : i = o;
                var a = t.length;
                if (a % 2 != 0) throw new TypeError("Invalid hex string");
                i > a / 2 && (i = a / 2);
                for (var s = 0; s < i; ++s) {
                    var r = parseInt(t.substr(2 * s, 2), 16);
                    if (isNaN(r)) return s;
                    e[n + s] = r
                }
                return s
            }

            function A(e, t, n, i) {
                return Z(K(t, e.length - n), e, n, i)
            }

            function b(e, t, n, i) {
                return Z(X(t), e, n, i)
            }

            function M(e, t, n, i) {
                return b(e, t, n, i)
            }

            function T(e, t, n, i) {
                return Z(J(t), e, n, i)
            }

            function N(e, t, n, i) {
                return Z(Q(t, e.length - n), e, n, i)
            }

            function B(e, t, n) {
                return 0 === t && n === e.length ? i.fromByteArray(e) : i.fromByteArray(e.slice(t, n))
            }

            function k(e, t, n) {
                n = Math.min(e.length, n);
                for (var i = [], o = t; o < n;) {
                    var a, s, r, c, h = e[o],
                        l = null,
                        d = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
                    if (o + d <= n) switch (d) {
                        case 1:
                            h < 128 && (l = h);
                            break;
                        case 2:
                            128 == (192 & (a = e[o + 1])) && (c = (31 & h) << 6 | 63 & a) > 127 && (l = c);
                            break;
                        case 3:
                            a = e[o + 1], s = e[o + 2], 128 == (192 & a) && 128 == (192 & s) && (c = (15 & h) << 12 | (63 & a) << 6 | 63 & s) > 2047 && (c < 55296 || c > 57343) && (l = c);
                            break;
                        case 4:
                            a = e[o + 1], s = e[o + 2], r = e[o + 3], 128 == (192 & a) && 128 == (192 & s) && 128 == (192 & r) && (c = (15 & h) << 18 | (63 & a) << 12 | (63 & s) << 6 | 63 & r) > 65535 && c < 1114112 && (l = c)
                    }
                    null === l ? (l = 65533, d = 1) : l > 65535 && (l -= 65536, i.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), i.push(l), o += d
                }
                return R(i)
            }
            n.Buffer = c, n.SlowBuffer = function(e) {
                +e != e && (e = 0);
                return c.alloc(+e)
            }, n.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }(), n.kMaxLength = s(), c.poolSize = 8192, c._augment = function(e) {
                return e.__proto__ = c.prototype, e
            }, c.from = function(e, t, n) {
                return h(null, e, t, n)
            }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
                value: null,
                configurable: !0
            })), c.alloc = function(e, t, n) {
                return d(null, e, t, n)
            }, c.allocUnsafe = function(e) {
                return u(null, e)
            }, c.allocUnsafeSlow = function(e) {
                return u(null, e)
            }, c.isBuffer = function(e) {
                return !(null == e || !e._isBuffer)
            }, c.compare = function(e, t) {
                if (!c.isBuffer(e) || !c.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (var n = e.length, i = t.length, o = 0, a = Math.min(n, i); o < a; ++o)
                    if (e[o] !== t[o]) {
                        n = e[o], i = t[o];
                        break
                    } return n < i ? -1 : i < n ? 1 : 0
            }, c.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, c.concat = function(e, t) {
                if (!a(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return c.alloc(0);
                var n;
                if (void 0 === t)
                    for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                var i = c.allocUnsafe(t),
                    o = 0;
                for (n = 0; n < e.length; ++n) {
                    var s = e[n];
                    if (!c.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                    s.copy(i, o), o += s.length
                }
                return i
            }, c.byteLength = S, c.prototype._isBuffer = !0, c.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) w(this, t, t + 1);
                return this
            }, c.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) w(this, t, t + 3), w(this, t + 1, t + 2);
                return this
            }, c.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) w(this, t, t + 7), w(this, t + 1, t + 6), w(this, t + 2, t + 5), w(this, t + 3, t + 4);
                return this
            }, c.prototype.toString = function() {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? k(this, 0, e) : y.apply(this, arguments)
            }, c.prototype.equals = function(e) {
                if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === c.compare(this, e)
            }, c.prototype.inspect = function() {
                var e = "",
                    t = n.INSPECT_MAX_BYTES;
                return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">"
            }, c.prototype.compare = function(e, t, n, i, o) {
                if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === i && (i = 0), void 0 === o && (o = this.length), t < 0 || n > e.length || i < 0 || o > this.length) throw new RangeError("out of range index");
                if (i >= o && t >= n) return 0;
                if (i >= o) return -1;
                if (t >= n) return 1;
                if (t >>>= 0, n >>>= 0, i >>>= 0, o >>>= 0, this === e) return 0;
                for (var a = o - i, s = n - t, r = Math.min(a, s), h = this.slice(i, o), l = e.slice(t, n), d = 0; d < r; ++d)
                    if (h[d] !== l[d]) {
                        a = h[d], s = l[d];
                        break
                    } return a < s ? -1 : s < a ? 1 : 0
            }, c.prototype.includes = function(e, t, n) {
                return -1 !== this.indexOf(e, t, n)
            }, c.prototype.indexOf = function(e, t, n) {
                return C(this, e, t, n, !0)
            }, c.prototype.lastIndexOf = function(e, t, n) {
                return C(this, e, t, n, !1)
            }, c.prototype.write = function(e, t, n, i) {
                if (void 0 === t) i = "utf8", n = this.length, t = 0;
                else if (void 0 === n && "string" == typeof t) i = t, n = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0, isFinite(n) ? (n |= 0, void 0 === i && (i = "utf8")) : (i = n, n = void 0)
                }
                var o = this.length - t;
                if ((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                i || (i = "utf8");
                for (var a = !1;;) switch (i) {
                    case "hex":
                        return P(this, e, t, n);
                    case "utf8":
                    case "utf-8":
                        return A(this, e, t, n);
                    case "ascii":
                        return b(this, e, t, n);
                    case "latin1":
                    case "binary":
                        return M(this, e, t, n);
                    case "base64":
                        return T(this, e, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return N(this, e, t, n);
                    default:
                        if (a) throw new TypeError("Unknown encoding: " + i);
                        i = ("" + i).toLowerCase(), a = !0
                }
            }, c.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var x = 4096;

            function R(e) {
                var t = e.length;
                if (t <= x) return String.fromCharCode.apply(String, e);
                for (var n = "", i = 0; i < t;) n += String.fromCharCode.apply(String, e.slice(i, i += x));
                return n
            }

            function F(e, t, n) {
                var i = "";
                n = Math.min(e.length, n);
                for (var o = t; o < n; ++o) i += String.fromCharCode(127 & e[o]);
                return i
            }

            function O(e, t, n) {
                var i = "";
                n = Math.min(e.length, n);
                for (var o = t; o < n; ++o) i += String.fromCharCode(e[o]);
                return i
            }

            function _(e, t, n) {
                var i = e.length;
                (!t || t < 0) && (t = 0), (!n || n < 0 || n > i) && (n = i);
                for (var o = "", a = t; a < n; ++a) o += Y(e[a]);
                return o
            }

            function E(e, t, n) {
                for (var i = e.slice(t, n), o = "", a = 0; a < i.length; a += 2) o += String.fromCharCode(i[a] + 256 * i[a + 1]);
                return o
            }

            function H(e, t, n) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
            }

            function L(e, t, n, i, o, a) {
                if (!c.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > o || t < a) throw new RangeError('"value" argument is out of bounds');
                if (n + i > e.length) throw new RangeError("Index out of range")
            }

            function G(e, t, n, i) {
                t < 0 && (t = 65535 + t + 1);
                for (var o = 0, a = Math.min(e.length - n, 2); o < a; ++o) e[n + o] = (t & 255 << 8 * (i ? o : 1 - o)) >>> 8 * (i ? o : 1 - o)
            }

            function V(e, t, n, i) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var o = 0, a = Math.min(e.length - n, 4); o < a; ++o) e[n + o] = t >>> 8 * (i ? o : 3 - o) & 255
            }

            function D(e, t, n, i, o, a) {
                if (n + i > e.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("Index out of range")
            }

            function U(e, t, n, i, a) {
                return a || D(e, 0, n, 4), o.write(e, t, n, i, 23, 4), n + 4
            }

            function q(e, t, n, i, a) {
                return a || D(e, 0, n, 8), o.write(e, t, n, i, 52, 8), n + 8
            }
            c.prototype.slice = function(e, t) {
                var n, i = this.length;
                if (e = ~~e, t = void 0 === t ? i : ~~t, e < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i), t < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i), t < e && (t = e), c.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = c.prototype;
                else {
                    var o = t - e;
                    n = new c(o, void 0);
                    for (var a = 0; a < o; ++a) n[a] = this[a + e]
                }
                return n
            }, c.prototype.readUIntLE = function(e, t, n) {
                e |= 0, t |= 0, n || H(e, t, this.length);
                for (var i = this[e], o = 1, a = 0; ++a < t && (o *= 256);) i += this[e + a] * o;
                return i
            }, c.prototype.readUIntBE = function(e, t, n) {
                e |= 0, t |= 0, n || H(e, t, this.length);
                for (var i = this[e + --t], o = 1; t > 0 && (o *= 256);) i += this[e + --t] * o;
                return i
            }, c.prototype.readUInt8 = function(e, t) {
                return t || H(e, 1, this.length), this[e]
            }, c.prototype.readUInt16LE = function(e, t) {
                return t || H(e, 2, this.length), this[e] | this[e + 1] << 8
            }, c.prototype.readUInt16BE = function(e, t) {
                return t || H(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, c.prototype.readUInt32LE = function(e, t) {
                return t || H(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, c.prototype.readUInt32BE = function(e, t) {
                return t || H(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, c.prototype.readIntLE = function(e, t, n) {
                e |= 0, t |= 0, n || H(e, t, this.length);
                for (var i = this[e], o = 1, a = 0; ++a < t && (o *= 256);) i += this[e + a] * o;
                return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i
            }, c.prototype.readIntBE = function(e, t, n) {
                e |= 0, t |= 0, n || H(e, t, this.length);
                for (var i = t, o = 1, a = this[e + --i]; i > 0 && (o *= 256);) a += this[e + --i] * o;
                return a >= (o *= 128) && (a -= Math.pow(2, 8 * t)), a
            }, c.prototype.readInt8 = function(e, t) {
                return t || H(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, c.prototype.readInt16LE = function(e, t) {
                t || H(e, 2, this.length);
                var n = this[e] | this[e + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, c.prototype.readInt16BE = function(e, t) {
                t || H(e, 2, this.length);
                var n = this[e + 1] | this[e] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, c.prototype.readInt32LE = function(e, t) {
                return t || H(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, c.prototype.readInt32BE = function(e, t) {
                return t || H(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, c.prototype.readFloatLE = function(e, t) {
                return t || H(e, 4, this.length), o.read(this, e, !0, 23, 4)
            }, c.prototype.readFloatBE = function(e, t) {
                return t || H(e, 4, this.length), o.read(this, e, !1, 23, 4)
            }, c.prototype.readDoubleLE = function(e, t) {
                return t || H(e, 8, this.length), o.read(this, e, !0, 52, 8)
            }, c.prototype.readDoubleBE = function(e, t) {
                return t || H(e, 8, this.length), o.read(this, e, !1, 52, 8)
            }, c.prototype.writeUIntLE = function(e, t, n, i) {
                (e = +e, t |= 0, n |= 0, i) || L(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var o = 1,
                    a = 0;
                for (this[t] = 255 & e; ++a < n && (o *= 256);) this[t + a] = e / o & 255;
                return t + n
            }, c.prototype.writeUIntBE = function(e, t, n, i) {
                (e = +e, t |= 0, n |= 0, i) || L(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var o = n - 1,
                    a = 1;
                for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) this[t + o] = e / a & 255;
                return t + n
            }, c.prototype.writeUInt8 = function(e, t, n) {
                return e = +e, t |= 0, n || L(this, e, t, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
            }, c.prototype.writeUInt16LE = function(e, t, n) {
                return e = +e, t |= 0, n || L(this, e, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : G(this, e, t, !0), t + 2
            }, c.prototype.writeUInt16BE = function(e, t, n) {
                return e = +e, t |= 0, n || L(this, e, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : G(this, e, t, !1), t + 2
            }, c.prototype.writeUInt32LE = function(e, t, n) {
                return e = +e, t |= 0, n || L(this, e, t, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : V(this, e, t, !0), t + 4
            }, c.prototype.writeUInt32BE = function(e, t, n) {
                return e = +e, t |= 0, n || L(this, e, t, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : V(this, e, t, !1), t + 4
            }, c.prototype.writeIntLE = function(e, t, n, i) {
                if (e = +e, t |= 0, !i) {
                    var o = Math.pow(2, 8 * n - 1);
                    L(this, e, t, n, o - 1, -o)
                }
                var a = 0,
                    s = 1,
                    r = 0;
                for (this[t] = 255 & e; ++a < n && (s *= 256);) e < 0 && 0 === r && 0 !== this[t + a - 1] && (r = 1), this[t + a] = (e / s >> 0) - r & 255;
                return t + n
            }, c.prototype.writeIntBE = function(e, t, n, i) {
                if (e = +e, t |= 0, !i) {
                    var o = Math.pow(2, 8 * n - 1);
                    L(this, e, t, n, o - 1, -o)
                }
                var a = n - 1,
                    s = 1,
                    r = 0;
                for (this[t + a] = 255 & e; --a >= 0 && (s *= 256);) e < 0 && 0 === r && 0 !== this[t + a + 1] && (r = 1), this[t + a] = (e / s >> 0) - r & 255;
                return t + n
            }, c.prototype.writeInt8 = function(e, t, n) {
                return e = +e, t |= 0, n || L(this, e, t, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, c.prototype.writeInt16LE = function(e, t, n) {
                return e = +e, t |= 0, n || L(this, e, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : G(this, e, t, !0), t + 2
            }, c.prototype.writeInt16BE = function(e, t, n) {
                return e = +e, t |= 0, n || L(this, e, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : G(this, e, t, !1), t + 2
            }, c.prototype.writeInt32LE = function(e, t, n) {
                return e = +e, t |= 0, n || L(this, e, t, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : V(this, e, t, !0), t + 4
            }, c.prototype.writeInt32BE = function(e, t, n) {
                return e = +e, t |= 0, n || L(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : V(this, e, t, !1), t + 4
            }, c.prototype.writeFloatLE = function(e, t, n) {
                return U(this, e, t, !0, n)
            }, c.prototype.writeFloatBE = function(e, t, n) {
                return U(this, e, t, !1, n)
            }, c.prototype.writeDoubleLE = function(e, t, n) {
                return q(this, e, t, !0, n)
            }, c.prototype.writeDoubleBE = function(e, t, n) {
                return q(this, e, t, !1, n)
            }, c.prototype.copy = function(e, t, n, i) {
                if (n || (n = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                if (i < 0) throw new RangeError("sourceEnd out of bounds");
                i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
                var o, a = i - n;
                if (this === e && n < t && t < i)
                    for (o = a - 1; o >= 0; --o) e[o + t] = this[o + n];
                else if (a < 1e3 || !c.TYPED_ARRAY_SUPPORT)
                    for (o = 0; o < a; ++o) e[o + t] = this[o + n];
                else Uint8Array.prototype.set.call(e, this.subarray(n, n + a), t);
                return a
            }, c.prototype.fill = function(e, t, n, i) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (i = t, t = 0, n = this.length) : "string" == typeof n && (i = n, n = this.length), 1 === e.length) {
                        var o = e.charCodeAt(0);
                        o < 256 && (e = o)
                    }
                    if (void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
                    if ("string" == typeof i && !c.isEncoding(i)) throw new TypeError("Unknown encoding: " + i)
                } else "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                if (n <= t) return this;
                var a;
                if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                    for (a = t; a < n; ++a) this[a] = e;
                else {
                    var s = c.isBuffer(e) ? e : K(new c(e, i).toString()),
                        r = s.length;
                    for (a = 0; a < n - t; ++a) this[a + t] = s[a % r]
                }
                return this
            };
            var W = /[^+\/0-9A-Za-z-_]/g;

            function z(e) {
                if ((e = j(e).replace(W, "")).length < 2) return "";
                for (; e.length % 4 != 0;) e += "=";
                return e
            }

            function j(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
            }

            function Y(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function K(e, t) {
                var n;
                t = t || 1 / 0;
                for (var i = e.length, o = null, a = [], s = 0; s < i; ++s) {
                    if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
                        if (!o) {
                            if (n > 56319) {
                                (t -= 3) > -1 && a.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === i) {
                                (t -= 3) > -1 && a.push(239, 191, 189);
                                continue
                            }
                            o = n;
                            continue
                        }
                        if (n < 56320) {
                            (t -= 3) > -1 && a.push(239, 191, 189), o = n;
                            continue
                        }
                        n = 65536 + (o - 55296 << 10 | n - 56320)
                    } else o && (t -= 3) > -1 && a.push(239, 191, 189);
                    if (o = null, n < 128) {
                        if ((t -= 1) < 0) break;
                        a.push(n)
                    } else if (n < 2048) {
                        if ((t -= 2) < 0) break;
                        a.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((t -= 3) < 0) break;
                        a.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return a
            }

            function X(e) {
                for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                return t
            }

            function Q(e, t) {
                for (var n, i, o, a = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) i = (n = e.charCodeAt(s)) >> 8, o = n % 256, a.push(o), a.push(i);
                return a
            }

            function J(e) {
                return i.toByteArray(z(e))
            }

            function Z(e, t, n, i) {
                for (var o = 0; o < i && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
                return o
            }

            function $(e) {
                return e != e
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "base64-js": 1,
        ieee754: 4,
        isarray: 3
    }],
    3: [function(e, t, n) {
        var i = {}.toString;
        t.exports = Array.isArray || function(e) {
            return "[object Array]" == i.call(e)
        }
    }, {}],
    4: [function(e, t, n) {
        n.read = function(e, t, n, i, o) {
            var a, s, r = 8 * o - i - 1,
                c = (1 << r) - 1,
                h = c >> 1,
                l = -7,
                d = n ? o - 1 : 0,
                u = n ? -1 : 1,
                p = e[t + d];
            for (d += u, a = p & (1 << -l) - 1, p >>= -l, l += r; l > 0; a = 256 * a + e[t + d], d += u, l -= 8);
            for (s = a & (1 << -l) - 1, a >>= -l, l += i; l > 0; s = 256 * s + e[t + d], d += u, l -= 8);
            if (0 === a) a = 1 - h;
            else {
                if (a === c) return s ? NaN : 1 / 0 * (p ? -1 : 1);
                s += Math.pow(2, i), a -= h
            }
            return (p ? -1 : 1) * s * Math.pow(2, a - i)
        }, n.write = function(e, t, n, i, o, a) {
            var s, r, c, h = 8 * a - o - 1,
                l = (1 << h) - 1,
                d = l >> 1,
                u = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                p = i ? 0 : a - 1,
                g = i ? 1 : -1,
                m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (r = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), (t += s + d >= 1 ? u / c : u * Math.pow(2, 1 - d)) * c >= 2 && (s++, c /= 2), s + d >= l ? (r = 0, s = l) : s + d >= 1 ? (r = (t * c - 1) * Math.pow(2, o), s += d) : (r = t * Math.pow(2, d - 1) * Math.pow(2, o), s = 0)); o >= 8; e[n + p] = 255 & r, p += g, r /= 256, o -= 8);
            for (s = s << o | r, h += o; h > 0; e[n + p] = 255 & s, p += g, s /= 256, h -= 8);
            e[n + p - g] |= 128 * m
        }
    }, {}],
    DecorationScene: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e275b8qKLFNnJwq0VTSpbZh", "DecorationScene");
        var i = e("GameManager"),
            o = e("jpeg-js"),
            a = e("AdsManager");
        cc.Class({
            extends: cc.Component,
            properties: {
                firstScrollView: cc.ScrollView,
                secondScrollView: cc.ScrollView,
                imageNode: cc.Node,
                colorFrame: cc.SpriteFrame,
                refreshFrame: cc.SpriteFrame,
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
                sucRemind: cc.Node,
                generalRemind: cc.Node
            },
            onLoad: function() {
                i.curScene = this, i.sceneIndex = 1, i.HandleEventPerScene(), i.isFromActivityBtn = !1
            },
            onDestroy: function() {
                i.curScene = null
            },
            start: function() {
                i.personType = 1, i.isVideoPlaying = !1, i.fakeUnlockName = [], this.isLoadScene = !1, i.sceneType = 0, this.curInnerType = -1, this.images = new Array, this.mtId = new Array, this.isShowScrollview = !0, this.startHeight = this.imageScrollView.node.height, cc.winSize.height / cc.winSize.width >= 2 && (this.saveScreenShotPanel.getChildByName("closeBtn").getComponent(cc.Widget).top += 60, this.saveScreenShotPanel.getChildByName("closeBtn1").getComponent(cc.Widget).top += 60), this.itemRemark = this.secondScrollView.content.getComponent("SecondItemRemark"), this.imageItemRemark = this.imageScrollView.content.getComponent("ImageItemRemark"), i.imageMsg = i.GetImageMsg(), this.LoadResources();
                if (i.isHasAd) {
                    if (null == i.adsManager && (i.adsManager = new a, i.adsManager.AdInit()), this.initBottom = 0, i.isShowBanner) {
                        if (1 == i.isShowNative)
                            if ("oppo" == i.channel && 0 == i.bannerFlag) {
                                var e = 60 - Math.floor((i.GetNowTime() - i.adsManager.startTime) / 1e3);
                                e > 1 ? this.scheduleOnce(function() {
                                    i.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner), this.schedule(function() {
                                        try {
                                            i.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner)
                                        } catch (e) {}
                                    }.bind(this), 30)
                                }.bind(this), e) : (i.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner), this.schedule(function() {
                                    try {
                                        i.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner)
                                    } catch (e) {}
                                }.bind(this), 30))
                            } else i.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner), "oppo" == i.channel ? this.schedule(function() {
                                try {
                                    i.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner)
                                } catch (e) {}
                            }.bind(this), 30) : "vivo" == i.channel && this.schedule(function() {
                                try {
                                    0 == this.nativeControl.nativeBannerBtn.node.active && i.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner)
                                } catch (e) {}
                            }.bind(this), 10);
                        else "oppo" == i.channel || "vivo" == i.channel ? (i.adsManager.ShowBanner(), this.schedule(function() {
                            i.adsManager.ShowBanner()
                        }, 30)) : i.adsManager.ShowBanner();
                        if ("oppo" == i.channel && cc.winSize.height / cc.winSize.width < 1.5) {
                            var t = this.startHeight - 100;
                            this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = 0, this.secondScrollView.node.height = t, this.imageScrollView.node.height = t, this.initBottom = 0
                        } else this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = 120, this.initBottom = 120
                    } else i.adsManager.HideBanner(), this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = 0;
                    "tt" != i.channel && "oppo" != i.channel && i.adsManager.ShowInterstitial(-1)
                }
                void 0 == i.isFirstEnter && (i.isFirstEnter = !0, this.addOnePersonPanel.active = !0, i.ShowPanelHandle("personPanel"))
            },
            PickUpSignFreeMsg: function() {},
            UpdateThingMsg: function(e, t, n) {
                try {
                    void 0 == n && (n = !0);
                    for (var i = 0; i < 3; i++) {
                        var o = 100 + parseInt(i);
                        if (e[o.toString()]) {
                            var a = {
                                name: e[o.toString()] + t + "2",
                                type: "0" + String.fromCharCode("a".charCodeAt() + i)
                            };
                            this.images[i].splice(0, 0, a), n && i == this.curInnerType && this.itemRemark.LoadData(this.images[i])
                        }
                    }
                } catch (e) {}
            },
            BtnShowClearPanel: function() {
                this.deleteArea.active = !1, i.audioManager && i.audioManager.PlayClickSound(), this.clearDressupPanel.active = !0, i.ShowPanelHandle(this.clearDressupPanel.name)
            },
            BtnClearDressUp: function(e) {
                i.audioManager && i.audioManager.PlayClickSound(), e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
                    e.target.getComponent(cc.Button).interactable = !0
                }, .5);
                for (var t = this.stickers.children, n = 0; n < t.length; n++) t[n].destroy();
                t = this.moveNode.children;
                for (var o = 0; o < t.length; o++) t[o].destroy();
                this.clearDressupPanel.active = !1, i.HidePanelHandle(this.clearDressupPanel.name), this.node.getComponent(cc.Sprite).spriteFrame = null, this.node.color = cc.Color.WHITE, i.curScene.mtId = [], i.curScene.deleteArea.active = !1, i.curStickersNum = 0;
                for (var a = this.secondScrollView.content.getComponent("SecondItemRemark"), s = 0; s < 3; s++) this.selectName[s] = 0 == s ? 0 : -1;
                a.UpdateSelectState()
            },
            LoadResources: function() {
                0 == this.firstScrollView.content.childrenCount && cc.loader.loadRes("firstItem/decoration", cc.SpriteAtlas, function(e, t) {
                    try {
                        if (e) return void console.log(e);
                        var n = t.getSpriteFrames();
                        n = i.SortArray(n, 0), this.firstScrollView.content.getComponent("FirstItemRemark").InitScrollView(n)
                    } catch (e) {}
                }.bind(this));
                var e = i.pathRootName + "/decoration";
                if (null == i.decorationMsg) cc.loader.loadRes(e, function(e, t) {
                    try {
                        if (e) return void console.log(e);
                        var n = t.json.list;
                        i.decorationMsg = n;
                        for (var o = 0; o < n.length; o++) {
                            var a = n[o].type[1].charCodeAt() - "a".charCodeAt();
                            void 0 == this.images[a] && (this.images[a] = new Array), this.images[a].push(n[o])
                        }
                        this.PickUpSignFreeMsg()
                    } catch (e) {
                        console.log(e)
                    }
                }.bind(this));
                else {
                    for (var t = 0; t < i.decorationMsg.length; t++) {
                        var n = i.decorationMsg[t].type[1].charCodeAt() - "a".charCodeAt();
                        void 0 == this.images[n] && (this.images[n] = new Array), this.images[n].push(i.decorationMsg[t])
                    }
                    this.PickUpSignFreeMsg()
                }
                i.otherGirlMsg && i.otherBoyMsg && this.imageItemRemark.LoadData(0, i.imageMsg, !1)
            },
            BtnImageClick: function(e) {
                (i.audioManager && i.audioManager.PlayClickSound(), -1 != this.curInnerType) ? (this.imageScrollView.node.active = !0, this.firstScrollView.content.children[this.curInnerType].getComponent("FirstItem").selectNode.active = !1, this.curInnerType = -1, i.curType = -1, this.itemRemark.ClearData(), this.secondScrollView.node.active = !1, this.UpdateImageItem(), 0 == this.isShowScrollview && this.BtnHideScrollView(null), i.itemClickTimes++) : 0 == this.isShowScrollview && this.BtnHideScrollView(null)
            },
            UpdateImageItem: function() {
                for (var e = this.imageScrollView.content.children, t = 1; t < e.length; t++) {
                    var n = e[t].getComponent("ImageItem");
                    i.imageMsg[n.index - 1] && 0 == i.imageMsg[n.index - 1].lock ? n.lockNode.active = !1 : n.lockNode.active = !0
                }
            },
            BtnHideScrollView: function(e) {
                i.curScene.deleteArea.active = !1, e && (i.audioManager && i.audioManager.PlayClickSound(), e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
                    e.target.getComponent(cc.Button).interactable = !0
                }, .1)), this.isShowScrollview ? this.ShowHidePanelHandle(1) : this.ShowHidePanelHandle(2)
            },
            ShowHidePanelHandle: function(e) {
                1 == e ? this.isShowScrollview && (this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = this.initBottom - this.imageScrollView.node.height, this.isShowScrollview = !1, this.imageNode.parent.getChildByName("hideItemBtn").children[0].angle = 180) : 2 == e && (this.deleteArea.active = !1, 0 == this.isShowScrollview && (this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = this.initBottom, this.isShowScrollview = !0, this.imageNode.parent.getChildByName("hideItemBtn").children[0].angle = 0))
            },
            AddOnePerson: function() {
                this.deleteArea.active = !1, i.audioManager && i.audioManager.PlayClickSound(), this.addOnePersonPanel.active = !0, i.ShowPanelHandle("personPanel")
            },
            BtnByMateOrOk: function(e, t) {
                e.target.getComponent(cc.Button).interactable = !1, i.audioManager && i.audioManager.PlayClickSound(), 1 == parseInt(t) ? i.isMateMode = !0 : i.isMateMode = !1, i.isCreatNewImageMsg = !0, i.personType = 2, cc.director.loadScene("GameScene")
            },
            BtnCreateNewPerson: function(e, t) {
                i.audioManager && i.audioManager.PlayClickSound(), e.target.getComponent(cc.Button).interactable = !1, i.isCreatePerson = t, "oppo" != i.channel && i.HidePanelHandle(), i.personMsg = null, "qq" == i.channel && i.adsManager.ShowInterstitial(-1), i.personType = 1, cc.director.loadScene("GameScene")
            },
            BtnDeleteImage: function() {
                i.audioManager && i.audioManager.PlayClickSound(), this.deleteImagePanel.active = !1;
                var e = i.curItem.index - 1,
                    t = i.imageMsg.length;
                i.imageMsg.splice(e, 1), i.imageMsg.length = t - 1;
                var n = i.fakeUnlockName.indexOf(i.curItem.index); - 1 != n && i.fakeUnlockName && i.fakeUnlockName.splice(n, 1);
                for (var o = 0; o < i.fakeUnlockName.length; o++) i.fakeUnlockName[o] > i.curItem.index && (i.fakeUnlockName[o] = parseInt(i.fakeUnlockName[o]) - 1);
                i.SetImageMsg(), this.imageItemRemark.LoadData(0, i.imageMsg, !1), i.HidePanelHandle()
            },
            BtnSaveScreenShot: function(e) {
                this.deleteArea.active = !1, i.audioManager && i.audioManager.PlayPhotoSound(), e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
                    e.target.getComponent(cc.Button).interactable = !0
                }, .3), i.shotImage = i.ScreenShot(this.camera, this.targetNode), this.saveScreenShotPanel.active = !0, "wx" == i.channel || "qq" == i.channel || "tt" == i.channel || "swan" == i.channel ? this.saveScreenShotPanel.getChildByName("shareBtn").active = !0 : (this.saveScreenShotPanel.getChildByName("shareBtn").active = !1, "vivo" == i.channel && (this.saveScreenShotPanel.getChildByName("closeBtn").active = !1, this.saveScreenShotPanel.getChildByName("closeBtn1").active = !0), "oppo" != i.channel && "vivo" != i.channel || (this.saveScreenShotPanel.getChildByName("saveBtn").x = 0, this.saveScreenShotPanel.getChildByName("saveBtn").scale = 1.5, this.saveScreenShotPanel.getChildByName("saveBtn").getComponent(cc.Widget).bottom = 180)), this.saveScreenShotPanel.getChildByName("image").getComponent(cc.Sprite).spriteFrame = i.shotImage, 0 == i.isNormalShot && (this.saveScreenShotPanel.getChildByName("image").scaleY = -1)
            },
            BtnSaveToPhoto: function(e) {
                i.audioManager && i.audioManager.PlayClickSound(), e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
                    e.target.getComponent(cc.Button).interactable = !0
                }, .3), cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os && "ios" == i.channel ? i.SaveImageToPhoto(this.SaveToPhotoSuc, this.HideScreenShotPanelBtn, this.ShowScreenShotPanelBtn) : i.SaveImageToPhoto(this.SaveToPhotoSuc)
            },
            HideScreenShotPanelBtn: function() {
                i.curScene.saveScreenShotPanel.getChildByName("saveBtn").active = !1, i.curScene.saveScreenShotPanel.getChildByName("closeBtn").active = !1
            },
            ShowScreenShotPanelBtn: function() {
                i.curScene.saveScreenShotPanel.getChildByName("saveBtn").active = !0, i.curScene.saveScreenShotPanel.getChildByName("closeBtn").active = !0
            },
            SaveToPhotoSuc: function() {
                try {
                    i.curScene.sucRemind.active = !0, cc.tween(i.curScene.sucRemind).call(function() {
                        i.curScene.sucRemind.setPosition(0, Math.floor(cc.winSize.height) / 5)
                    }).by(.5, {
                        position: cc.v2(0, 100)
                    }).call(function() {
                        i.curScene.sucRemind.active = !1
                    }).start()
                } catch (e) {
                    console.log(e)
                }
            },
            BtnShareApp: function(e) {
                this.deleteArea.active = !1, e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
                    e.target.getComponent(cc.Button).interactable = !0
                }, .5), i.audioManager && i.audioManager.PlayClickSound(), i.ShareApp()
            },
            BtnShareVideo: function(e) {
                if (null == i.videoPath) return this.generalRemind.active = !0, this.generalRemind.getComponent("GeneralRemind").InitPanel(4), void i.ShowPanelHandle();
                e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
                    e.target.getComponent(cc.Button).interactable = !0
                }, 1);
                var t = this,
                    n = {
                        videoPath: i.videoPath
                    };
                "Douyin" == i.systemInfo.appName ? (void 0 == i.topics1 && (i.topics1 = "\u88c5\u626e\u7231\u8c46", i.topics2 = "\u840c\u62fc\u5c11\u5973,\u7231\u8c46\u6210\u56e2"), n.videoTopics = [i.topics1, i.topics2], n.hashtag_list = [i.topics1, i.topics2]) : "Toutiao" == i.systemInfo.appName && (n.createChallenge = !0), tt.shareAppMessage({
                    channel: "video",
                    extra: n,
                    success: function() {
                        e.target.getComponent(cc.Button).interactable = !0
                    },
                    fail: function(n) {
                        console.log("\u5206\u4eab\u5931\u8d25:" + n.errMsg), n.errMsg && -1 == n.errMsg.substr("cancel") && (-1 == n.errMsg.substr("file not exit") && -1 == n.errMsg.substr("get shareInnfo return null") || (i.videoPath = null), t.generalRemind.active = !0, t.generalRemind.getComponent("GeneralRemind").InitPanel(4), i.ShowPanelHandle()), e.target.getComponent(cc.Button).interactable = !0
                    }
                })
            },
            GetReward: function(e) {
                3 == i.adsManager.lockType ? i.curUnlockItem.GetReward() : i.curUnlockItem.UpdateItemButton(e)
            },
            BtnClosePanel: function(e) {
                i.audioManager && i.audioManager.PlayClickSound(), 0 == this.saveScreenShotPanel.active ? i.HidePanelHandle(e.target.name) : this.saveScreenShotPanel.getChildByName("shareVideoBtn").getComponent(cc.Animation).stop("scale"), "holder" == e.target.parent.name ? e.target.parent.parent.active = !1 : e.target.parent.active = !1, "wx" == i.channel && (i.pushCtl.HideTwoCol(), i.pushCtl.HideHorScroll(), i.pushCtl.twoColNode = void 0, i.pushCtl.CreateTwoCol(3, 10, cc.v2(0, 220)), i.pushCtl.OneRowNodeAnimPlay(i.pushCtl.twoColNode))
            },
            GenerateJpegData: function(e, t, n) {
                if ("vivo" == i.channel) {
                    var a = {
                            data: e.data,
                            width: t,
                            height: n
                        },
                        s = o.encode(a, 50);
                    i.picData = s.data
                }
            }
        }), cc._RF.pop()
    }, {
        AdsManager: "AdsManager",
        GameManager: "GameManager",
        "jpeg-js": 5
    }],
    5: [function(e, t, n) {
        var i = e("./lib/encoder"),
            o = e("./lib/decoder");
        t.exports = {
            encode: i,
            decode: o
        }
    }, {
        "./lib/decoder": 6,
        "./lib/encoder": 7
    }],
    6: [function(e, t, n) {
        (function() {
            "use strict";
            var e = new Int32Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]),
                t = 4017,
                n = 799,
                i = 3406,
                o = 2276,
                a = 1567,
                s = 3784,
                r = 5793,
                c = 2896;

            function h() {}

            function l(e, t) {
                for (var n, i, o = 0, a = [], s = 16; s > 0 && !e[s - 1];) s--;
                a.push({
                    children: [],
                    index: 0
                });
                var r, c = a[0];
                for (n = 0; n < s; n++) {
                    for (i = 0; i < e[n]; i++) {
                        for ((c = a.pop()).children[c.index] = t[o]; c.index > 0;) {
                            if (0 === a.length) throw new Error("Could not recreate Huffman Table");
                            c = a.pop()
                        }
                        for (c.index++, a.push(c); a.length <= n;) a.push(r = {
                            children: [],
                            index: 0
                        }), c.children[c.index] = r.children, c = r;
                        o++
                    }
                    n + 1 < s && (a.push(r = {
                        children: [],
                        index: 0
                    }), c.children[c.index] = r.children, c = r)
                }
                return a[0].children
            }

            function d(t, n, i, o, a, s, r, c, h, l) {
                i.precision, i.samplesPerLine, i.scanLines;
                var d = i.mcusPerLine,
                    u = i.progressive,
                    p = (i.maxH, i.maxV, n),
                    g = 0,
                    m = 0;

                function f() {
                    if (m > 0) return g >> --m & 1;
                    if (255 == (g = t[n++])) {
                        var e = t[n++];
                        if (e) throw new Error("unexpected marker: " + (g << 8 | e).toString(16))
                    }
                    return m = 7, g >>> 7
                }

                function v(e) {
                    for (var t, n = e; null !== (t = f());) {
                        if ("number" == typeof(n = n[t])) return n;
                        if ("object" != typeof n) throw new Error("invalid huffman sequence")
                    }
                    return null
                }

                function S(e) {
                    for (var t = 0; e > 0;) {
                        var n = f();
                        if (null === n) return;
                        t = t << 1 | n, e--
                    }
                    return t
                }

                function y(e) {
                    var t = S(e);
                    return t >= 1 << e - 1 ? t : t + (-1 << e) + 1
                }
                var w = 0;
                var C, I = 0;

                function P(e, t, n, i, o) {
                    var a = n % d,
                        s = (n / d | 0) * e.v + i,
                        r = a * e.h + o;
                    void 0 === e.blocks[s] && l.tolerantDecoding || t(e, e.blocks[s][r])
                }

                function A(e, t, n) {
                    var i = n / e.blocksPerLine | 0,
                        o = n % e.blocksPerLine;
                    void 0 === e.blocks[i] && l.tolerantDecoding || t(e, e.blocks[i][o])
                }
                var b, M, T, N, B, k, x = o.length;
                k = u ? 0 === s ? 0 === c ? function(e, t) {
                    var n = v(e.huffmanTableDC),
                        i = 0 === n ? 0 : y(n) << h;
                    t[0] = e.pred += i
                } : function(e, t) {
                    t[0] |= f() << h
                } : 0 === c ? function(t, n) {
                    if (w > 0) w--;
                    else
                        for (var i = s, o = r; i <= o;) {
                            var a = v(t.huffmanTableAC),
                                c = 15 & a,
                                l = a >> 4;
                            if (0 !== c) n[e[i += l]] = y(c) * (1 << h), i++;
                            else {
                                if (l < 15) {
                                    w = S(l) + (1 << l) - 1;
                                    break
                                }
                                i += 16
                            }
                        }
                } : function(t, n) {
                    for (var i = s, o = r, a = 0; i <= o;) {
                        var c = e[i],
                            l = n[c] < 0 ? -1 : 1;
                        switch (I) {
                            case 0:
                                var d = v(t.huffmanTableAC),
                                    u = 15 & d;
                                if (a = d >> 4, 0 === u) a < 15 ? (w = S(a) + (1 << a), I = 4) : (a = 16, I = 1);
                                else {
                                    if (1 !== u) throw new Error("invalid ACn encoding");
                                    C = y(u), I = a ? 2 : 3
                                }
                                continue;
                            case 1:
                            case 2:
                                n[c] ? n[c] += (f() << h) * l : 0 == --a && (I = 2 == I ? 3 : 0);
                                break;
                            case 3:
                                n[c] ? n[c] += (f() << h) * l : (n[c] = C << h, I = 0);
                                break;
                            case 4:
                                n[c] && (n[c] += (f() << h) * l)
                        }
                        i++
                    }
                    4 === I && 0 == --w && (I = 0)
                } : function(t, n) {
                    var i = v(t.huffmanTableDC),
                        o = 0 === i ? 0 : y(i);
                    n[0] = t.pred += o;
                    for (var a = 1; a < 64;) {
                        var s = v(t.huffmanTableAC),
                            r = 15 & s,
                            c = s >> 4;
                        if (0 !== r) n[e[a += c]] = y(r), a++;
                        else {
                            if (c < 15) break;
                            a += 16
                        }
                    }
                };
                var R, F, O, _, E = 0;
                for (F = 1 == x ? o[0].blocksPerLine * o[0].blocksPerColumn : d * i.mcusPerColumn, a || (a = F); E < F;) {
                    for (M = 0; M < x; M++) o[M].pred = 0;
                    if (w = 0, 1 == x)
                        for (b = o[0], B = 0; B < a; B++) A(b, k, E), E++;
                    else
                        for (B = 0; B < a; B++) {
                            for (M = 0; M < x; M++)
                                for (O = (b = o[M]).h, _ = b.v, T = 0; T < _; T++)
                                    for (N = 0; N < O; N++) P(b, k, E, T, N);
                            if (++E === F) break
                        }
                    if (E === F)
                        do {
                            if (255 === t[n] && 0 !== t[n + 1]) break;
                            n += 1
                        } while (n < t.length - 2);
                    if (m = 0, (R = t[n] << 8 | t[n + 1]) < 65280) throw new Error("marker was not found");
                    if (!(R >= 65488 && R <= 65495)) break;
                    n += 2
                }
                return n - p
            }

            function u(e, h) {
                var l, d, u = [],
                    p = h.blocksPerLine,
                    g = h.blocksPerColumn,
                    m = p << 3,
                    v = new Int32Array(64),
                    S = new Uint8Array(64);

                function y(e, l, d) {
                    var u, p, g, m, f, v, S, y, w, C, I = h.quantizationTable,
                        P = d;
                    for (C = 0; C < 64; C++) P[C] = e[C] * I[C];
                    for (C = 0; C < 8; ++C) {
                        var A = 8 * C;
                        0 != P[1 + A] || 0 != P[2 + A] || 0 != P[3 + A] || 0 != P[4 + A] || 0 != P[5 + A] || 0 != P[6 + A] || 0 != P[7 + A] ? (u = r * P[0 + A] + 128 >> 8, p = r * P[4 + A] + 128 >> 8, g = P[2 + A], m = P[6 + A], f = c * (P[1 + A] - P[7 + A]) + 128 >> 8, y = c * (P[1 + A] + P[7 + A]) + 128 >> 8, v = P[3 + A] << 4, S = P[5 + A] << 4, w = u - p + 1 >> 1, u = u + p + 1 >> 1, p = w, w = g * s + m * a + 128 >> 8, g = g * a - m * s + 128 >> 8, m = w, w = f - S + 1 >> 1, f = f + S + 1 >> 1, S = w, w = y + v + 1 >> 1, v = y - v + 1 >> 1, y = w, w = u - m + 1 >> 1, u = u + m + 1 >> 1, m = w, w = p - g + 1 >> 1, p = p + g + 1 >> 1, g = w, w = f * o + y * i + 2048 >> 12, f = f * i - y * o + 2048 >> 12, y = w, w = v * n + S * t + 2048 >> 12, v = v * t - S * n + 2048 >> 12, S = w, P[0 + A] = u + y, P[7 + A] = u - y, P[1 + A] = p + S, P[6 + A] = p - S, P[2 + A] = g + v, P[5 + A] = g - v, P[3 + A] = m + f, P[4 + A] = m - f) : (w = r * P[0 + A] + 512 >> 10, P[0 + A] = w, P[1 + A] = w, P[2 + A] = w, P[3 + A] = w, P[4 + A] = w, P[5 + A] = w, P[6 + A] = w, P[7 + A] = w)
                    }
                    for (C = 0; C < 8; ++C) {
                        var b = C;
                        0 != P[8 + b] || 0 != P[16 + b] || 0 != P[24 + b] || 0 != P[32 + b] || 0 != P[40 + b] || 0 != P[48 + b] || 0 != P[56 + b] ? (u = r * P[0 + b] + 2048 >> 12, p = r * P[32 + b] + 2048 >> 12, g = P[16 + b], m = P[48 + b], f = c * (P[8 + b] - P[56 + b]) + 2048 >> 12, y = c * (P[8 + b] + P[56 + b]) + 2048 >> 12, v = P[24 + b], S = P[40 + b], w = u - p + 1 >> 1, u = u + p + 1 >> 1, p = w, w = g * s + m * a + 2048 >> 12, g = g * a - m * s + 2048 >> 12, m = w, w = f - S + 1 >> 1, f = f + S + 1 >> 1, S = w, w = y + v + 1 >> 1, v = y - v + 1 >> 1, y = w, w = u - m + 1 >> 1, u = u + m + 1 >> 1, m = w, w = p - g + 1 >> 1, p = p + g + 1 >> 1, g = w, w = f * o + y * i + 2048 >> 12, f = f * i - y * o + 2048 >> 12, y = w, w = v * n + S * t + 2048 >> 12, v = v * t - S * n + 2048 >> 12, S = w, P[0 + b] = u + y, P[56 + b] = u - y, P[8 + b] = p + S, P[48 + b] = p - S, P[16 + b] = g + v, P[40 + b] = g - v, P[24 + b] = m + f, P[32 + b] = m - f) : (w = r * d[C + 0] + 8192 >> 14, P[0 + b] = w, P[8 + b] = w, P[16 + b] = w, P[24 + b] = w, P[32 + b] = w, P[40 + b] = w, P[48 + b] = w, P[56 + b] = w)
                    }
                    for (C = 0; C < 64; ++C) {
                        var M = 128 + (P[C] + 8 >> 4);
                        l[C] = M < 0 ? 0 : M > 255 ? 255 : M
                    }
                }
                f(m * g * 8);
                for (var w = 0; w < g; w++) {
                    var C = w << 3;
                    for (l = 0; l < 8; l++) u.push(new Uint8Array(m));
                    for (var I = 0; I < p; I++) {
                        y(h.blocks[w][I], S, v);
                        var P = 0,
                            A = I << 3;
                        for (d = 0; d < 8; d++) {
                            var b = u[C + d];
                            for (l = 0; l < 8; l++) b[A + l] = S[P++]
                        }
                    }
                }
                return u
            }

            function p(e) {
                return e < 0 ? 0 : e > 255 ? 255 : e
            }
            h.prototype = {
                load: function(e) {
                    var t = new XMLHttpRequest;
                    t.open("GET", e, !0), t.responseType = "arraybuffer", t.onload = function() {
                        var e = new Uint8Array(t.response || t.mozResponseArrayBuffer);
                        this.parse(e), this.onload && this.onload()
                    }.bind(this), t.send(null)
                },
                parse: function(t) {
                    var n = 1e3 * this.opts.maxResolutionInMP * 1e3,
                        i = 0;
                    t.length;

                    function o() {
                        var e = t[i] << 8 | t[i + 1];
                        return i += 2, e
                    }

                    function a() {
                        var e = o(),
                            n = t.subarray(i, i + e - 2);
                        return i += n.length, n
                    }

                    function s(e) {
                        var t, n, i = 0,
                            o = 0;
                        for (n in e.components) e.components.hasOwnProperty(n) && (i < (t = e.components[n]).h && (i = t.h), o < t.v && (o = t.v));
                        var a = Math.ceil(e.samplesPerLine / 8 / i),
                            s = Math.ceil(e.scanLines / 8 / o);
                        for (n in e.components)
                            if (e.components.hasOwnProperty(n)) {
                                t = e.components[n];
                                var r = Math.ceil(Math.ceil(e.samplesPerLine / 8) * t.h / i),
                                    c = Math.ceil(Math.ceil(e.scanLines / 8) * t.v / o),
                                    h = a * t.h,
                                    l = s * t.v,
                                    d = [];
                                f(256 * (l * h));
                                for (var u = 0; u < l; u++) {
                                    for (var p = [], g = 0; g < h; g++) p.push(new Int32Array(64));
                                    d.push(p)
                                }
                                t.blocksPerLine = r, t.blocksPerColumn = c, t.blocks = d
                            } e.maxH = i, e.maxV = o, e.mcusPerLine = a, e.mcusPerColumn = s
                    }
                    var r, c, h = null,
                        p = null,
                        g = [],
                        m = [],
                        v = [],
                        S = [],
                        y = o();
                    if (this.comments = [], 65496 != y) throw new Error("SOI not found");
                    for (y = o(); 65497 != y;) {
                        switch (y) {
                            case 65280:
                                break;
                            case 65504:
                            case 65505:
                            case 65506:
                            case 65507:
                            case 65508:
                            case 65509:
                            case 65510:
                            case 65511:
                            case 65512:
                            case 65513:
                            case 65514:
                            case 65515:
                            case 65516:
                            case 65517:
                            case 65518:
                            case 65519:
                            case 65534:
                                var w = a();
                                if (65534 === y) {
                                    var C = String.fromCharCode.apply(null, w);
                                    this.comments.push(C)
                                }
                                65504 === y && 74 === w[0] && 70 === w[1] && 73 === w[2] && 70 === w[3] && 0 === w[4] && (h = {
                                    version: {
                                        major: w[5],
                                        minor: w[6]
                                    },
                                    densityUnits: w[7],
                                    xDensity: w[8] << 8 | w[9],
                                    yDensity: w[10] << 8 | w[11],
                                    thumbWidth: w[12],
                                    thumbHeight: w[13],
                                    thumbData: w.subarray(14, 14 + 3 * w[12] * w[13])
                                }), 65505 === y && 69 === w[0] && 120 === w[1] && 105 === w[2] && 102 === w[3] && 0 === w[4] && (this.exifBuffer = w.subarray(5, w.length)), 65518 === y && 65 === w[0] && 100 === w[1] && 111 === w[2] && 98 === w[3] && 101 === w[4] && 0 === w[5] && (p = {
                                    version: w[6],
                                    flags0: w[7] << 8 | w[8],
                                    flags1: w[9] << 8 | w[10],
                                    transformCode: w[11]
                                });
                                break;
                            case 65499:
                                for (var I = o() + i - 2; i < I;) {
                                    var P = t[i++];
                                    f(256);
                                    var A = new Int32Array(64);
                                    if (P >> 4 == 0)
                                        for (j = 0; j < 64; j++) {
                                            A[e[j]] = t[i++]
                                        } else {
                                            if (P >> 4 != 1) throw new Error("DQT: invalid table spec");
                                            for (j = 0; j < 64; j++) {
                                                A[e[j]] = o()
                                            }
                                        }
                                    g[15 & P] = A
                                }
                                break;
                            case 65472:
                            case 65473:
                            case 65474:
                                o(), (r = {}).extended = 65473 === y, r.progressive = 65474 === y, r.precision = t[i++], r.scanLines = o(), r.samplesPerLine = o(), r.components = {}, r.componentsOrder = [];
                                var b = r.scanLines * r.samplesPerLine;
                                if (b > n) {
                                    var M = Math.ceil((b - n) / 1e6);
                                    throw new Error(`maxResolutionInMP limit exceeded by ${M}MP`)
                                }
                                var T, N = t[i++];
                                for (W = 0; W < N; W++) {
                                    T = t[i];
                                    var B = t[i + 1] >> 4,
                                        k = 15 & t[i + 1],
                                        x = t[i + 2];
                                    r.componentsOrder.push(T), r.components[T] = {
                                        h: B,
                                        v: k,
                                        quantizationIdx: x
                                    }, i += 3
                                }
                                s(r), m.push(r);
                                break;
                            case 65476:
                                var R = o();
                                for (W = 2; W < R;) {
                                    var F = t[i++],
                                        O = new Uint8Array(16),
                                        _ = 0;
                                    for (j = 0; j < 16; j++, i++) _ += O[j] = t[i];
                                    f(16 + _);
                                    var E = new Uint8Array(_);
                                    for (j = 0; j < _; j++, i++) E[j] = t[i];
                                    W += 17 + _, (F >> 4 == 0 ? S : v)[15 & F] = l(O, E)
                                }
                                break;
                            case 65501:
                                o(), c = o();
                                break;
                            case 65498:
                                o();
                                var H = t[i++],
                                    L = [];
                                for (W = 0; W < H; W++) {
                                    Y = r.components[t[i++]];
                                    var G = t[i++];
                                    Y.huffmanTableDC = S[G >> 4], Y.huffmanTableAC = v[15 & G], L.push(Y)
                                }
                                var V = t[i++],
                                    D = t[i++],
                                    U = t[i++],
                                    q = d(t, i, r, L, c, V, D, U >> 4, 15 & U, this.opts);
                                i += q;
                                break;
                            case 65535:
                                255 !== t[i] && i--;
                                break;
                            default:
                                if (255 == t[i - 3] && t[i - 2] >= 192 && t[i - 2] <= 254) {
                                    i -= 3;
                                    break
                                }
                                throw new Error("unknown JPEG marker " + y.toString(16))
                        }
                        y = o()
                    }
                    if (1 != m.length) throw new Error("only single frame JPEGs supported");
                    for (var W = 0; W < m.length; W++) {
                        var z = m[W].components;
                        for (var j in z) z[j].quantizationTable = g[z[j].quantizationIdx], delete z[j].quantizationIdx
                    }
                    this.width = r.samplesPerLine, this.height = r.scanLines, this.jfif = h, this.adobe = p, this.components = [];
                    for (W = 0; W < r.componentsOrder.length; W++) {
                        var Y = r.components[r.componentsOrder[W]];
                        this.components.push({
                            lines: u(0, Y),
                            scaleX: Y.h / r.maxH,
                            scaleY: Y.v / r.maxV
                        })
                    }
                },
                getData: function(e, t) {
                    var n, i, o, a, s, r, c, h, l, d, u, g, m, v, S, y, w, C, I, P, A, b = this.width / e,
                        M = this.height / t,
                        T = 0,
                        N = e * t * this.components.length;
                    f(N);
                    var B = new Uint8Array(N);
                    switch (this.components.length) {
                        case 1:
                            for (n = this.components[0], d = 0; d < t; d++)
                                for (s = n.lines[0 | d * n.scaleY * M], l = 0; l < e; l++) u = s[0 | l * n.scaleX * b], B[T++] = u;
                            break;
                        case 2:
                            for (n = this.components[0], i = this.components[1], d = 0; d < t; d++)
                                for (s = n.lines[0 | d * n.scaleY * M], r = i.lines[0 | d * i.scaleY * M], l = 0; l < e; l++) u = s[0 | l * n.scaleX * b], B[T++] = u, u = r[0 | l * i.scaleX * b], B[T++] = u;
                            break;
                        case 3:
                            for (A = !0, this.adobe && this.adobe.transformCode ? A = !0 : void 0 !== this.opts.colorTransform && (A = !!this.opts.colorTransform), n = this.components[0], i = this.components[1], o = this.components[2], d = 0; d < t; d++)
                                for (s = n.lines[0 | d * n.scaleY * M], r = i.lines[0 | d * i.scaleY * M], c = o.lines[0 | d * o.scaleY * M], l = 0; l < e; l++) A ? (u = s[0 | l * n.scaleX * b], g = r[0 | l * i.scaleX * b], C = p(u + 1.402 * ((m = c[0 | l * o.scaleX * b]) - 128)), I = p(u - .3441363 * (g - 128) - .71413636 * (m - 128)), P = p(u + 1.772 * (g - 128))) : (C = s[0 | l * n.scaleX * b], I = r[0 | l * i.scaleX * b], P = c[0 | l * o.scaleX * b]), B[T++] = C, B[T++] = I, B[T++] = P;
                            break;
                        case 4:
                            if (!this.adobe) throw new Error("Unsupported color mode (4 components)");
                            for (A = !1, this.adobe && this.adobe.transformCode ? A = !0 : void 0 !== this.opts.colorTransform && (A = !!this.opts.colorTransform), n = this.components[0], i = this.components[1], o = this.components[2], a = this.components[3], d = 0; d < t; d++)
                                for (s = n.lines[0 | d * n.scaleY * M], r = i.lines[0 | d * i.scaleY * M], c = o.lines[0 | d * o.scaleY * M], h = a.lines[0 | d * a.scaleY * M], l = 0; l < e; l++) A ? (u = s[0 | l * n.scaleX * b], g = r[0 | l * i.scaleX * b], m = c[0 | l * o.scaleX * b], v = h[0 | l * a.scaleX * b], S = 255 - p(u + 1.402 * (m - 128)), y = 255 - p(u - .3441363 * (g - 128) - .71413636 * (m - 128)), w = 255 - p(u + 1.772 * (g - 128))) : (S = s[0 | l * n.scaleX * b], y = r[0 | l * i.scaleX * b], w = c[0 | l * o.scaleX * b], v = h[0 | l * a.scaleX * b]), B[T++] = 255 - S, B[T++] = 255 - y, B[T++] = 255 - w, B[T++] = 255 - v;
                            break;
                        default:
                            throw new Error("Unsupported color mode")
                    }
                    return B
                },
                copyToImageData: function(e, t) {
                    var n, i, o, a, s, r, c, h, l, d = e.width,
                        u = e.height,
                        g = e.data,
                        m = this.getData(d, u),
                        f = 0,
                        v = 0;
                    switch (this.components.length) {
                        case 1:
                            for (i = 0; i < u; i++)
                                for (n = 0; n < d; n++) o = m[f++], g[v++] = o, g[v++] = o, g[v++] = o, t && (g[v++] = 255);
                            break;
                        case 3:
                            for (i = 0; i < u; i++)
                                for (n = 0; n < d; n++) c = m[f++], h = m[f++], l = m[f++], g[v++] = c, g[v++] = h, g[v++] = l, t && (g[v++] = 255);
                            break;
                        case 4:
                            for (i = 0; i < u; i++)
                                for (n = 0; n < d; n++) s = m[f++], r = m[f++], o = m[f++], c = 255 - p(s * (1 - (a = m[f++]) / 255) + a), h = 255 - p(r * (1 - a / 255) + a), l = 255 - p(o * (1 - a / 255) + a), g[v++] = c, g[v++] = h, g[v++] = l, t && (g[v++] = 255);
                            break;
                        default:
                            throw new Error("Unsupported color mode")
                    }
                }
            };
            var g = 0,
                m = 0;

            function f(e = 0) {
                var t = g + e;
                if (t > m) {
                    var n = Math.ceil((t - m) / 1024 / 1024);
                    throw new Error(`maxMemoryUsageInMB limit exceeded by at least ${n}MB`)
                }
                g = t
            }
            h.resetMaxMemoryUsage = function(e) {
                g = 0, m = e
            }, h.getBytesAllocated = function() {
                return g
            }, h.requestMemoryAllocation = f
        })();

        function i(e, t = {}) {}
        void 0 !== t ? t.exports = i : "undefined" != typeof window && (window["jpeg-js"] = window["jpeg-js"] || {}, window["jpeg-js"].decode = i)
    }, {}],
    7: [function(e, t, n) {
        (function(e) {
            function n(n) {
                Math.round;
                var i, o, a, s, r, c = Math.floor,
                    h = new Array(64),
                    l = new Array(64),
                    d = new Array(64),
                    u = new Array(64),
                    p = new Array(65535),
                    g = new Array(65535),
                    m = new Array(64),
                    f = new Array(64),
                    v = [],
                    S = 0,
                    y = 7,
                    w = new Array(64),
                    C = new Array(64),
                    I = new Array(64),
                    P = new Array(256),
                    A = new Array(2048),
                    b = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63],
                    M = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                    T = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                    N = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
                    B = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250],
                    k = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                    x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                    R = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
                    F = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];

                function O(e) {
                    for (var t = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], n = 0; n < 64; n++) {
                        var i = c((t[n] * e + 50) / 100);
                        i < 1 ? i = 1 : i > 255 && (i = 255), h[b[n]] = i
                    }
                    for (var o = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], a = 0; a < 64; a++) {
                        var s = c((o[a] * e + 50) / 100);
                        s < 1 ? s = 1 : s > 255 && (s = 255), l[b[a]] = s
                    }
                    for (var r = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379], p = 0, g = 0; g < 8; g++)
                        for (var m = 0; m < 8; m++) d[p] = 1 / (h[b[p]] * r[g] * r[m] * 8), u[p] = 1 / (l[b[p]] * r[g] * r[m] * 8), p++
                }

                function _(e, t) {
                    for (var n = 0, i = 0, o = new Array, a = 1; a <= 16; a++) {
                        for (var s = 1; s <= e[a]; s++) o[t[i]] = [], o[t[i]][0] = n, o[t[i]][1] = a, i++, n++;
                        n *= 2
                    }
                    return o
                }

                function E() {
                    for (var e = 1, t = 2, n = 1; n <= 15; n++) {
                        for (var i = e; i < t; i++) g[32767 + i] = n, p[32767 + i] = [], p[32767 + i][1] = n, p[32767 + i][0] = i;
                        for (var o = -(t - 1); o <= -e; o++) g[32767 + o] = n, p[32767 + o] = [], p[32767 + o][1] = n, p[32767 + o][0] = t - 1 + o;
                        e <<= 1, t <<= 1
                    }
                }

                function H() {
                    for (var e = 0; e < 256; e++) A[e] = 19595 * e, A[e + 256 >> 0] = 38470 * e, A[e + 512 >> 0] = 7471 * e + 32768, A[e + 768 >> 0] = -11059 * e, A[e + 1024 >> 0] = -21709 * e, A[e + 1280 >> 0] = 32768 * e + 8421375, A[e + 1536 >> 0] = -27439 * e, A[e + 1792 >> 0] = -5329 * e
                }

                function L(e) {
                    for (var t = e[0], n = e[1] - 1; n >= 0;) t & 1 << n && (S |= 1 << y), n--, --y < 0 && (255 == S ? (G(255), G(0)) : G(S), y = 7, S = 0)
                }

                function G(e) {
                    v.push(e)
                }

                function V(e) {
                    G(e >> 8 & 255), G(255 & e)
                }

                function D(e, t) {
                    var n, i, o, a, s, r, c, h, l, d, u = 0;
                    for (l = 0; l < 8; ++l) {
                        n = e[u], i = e[u + 1], o = e[u + 2], a = e[u + 3], s = e[u + 4], r = e[u + 5], c = e[u + 6];
                        var p = n + (h = e[u + 7]),
                            g = n - h,
                            f = i + c,
                            v = i - c,
                            S = o + r,
                            y = o - r,
                            w = a + s,
                            C = a - s,
                            I = p + w,
                            P = p - w,
                            A = f + S,
                            b = f - S;
                        e[u] = I + A, e[u + 4] = I - A;
                        var M = .707106781 * (b + P);
                        e[u + 2] = P + M, e[u + 6] = P - M;
                        var T = .382683433 * ((I = C + y) - (b = v + g)),
                            N = .5411961 * I + T,
                            B = 1.306562965 * b + T,
                            k = .707106781 * (A = y + v),
                            x = g + k,
                            R = g - k;
                        e[u + 5] = R + N, e[u + 3] = R - N, e[u + 1] = x + B, e[u + 7] = x - B, u += 8
                    }
                    for (u = 0, l = 0; l < 8; ++l) {
                        n = e[u], i = e[u + 8], o = e[u + 16], a = e[u + 24], s = e[u + 32], r = e[u + 40], c = e[u + 48];
                        var F = n + (h = e[u + 56]),
                            O = n - h,
                            _ = i + c,
                            E = i - c,
                            H = o + r,
                            L = o - r,
                            G = a + s,
                            V = a - s,
                            D = F + G,
                            U = F - G,
                            q = _ + H,
                            W = _ - H;
                        e[u] = D + q, e[u + 32] = D - q;
                        var z = .707106781 * (W + U);
                        e[u + 16] = U + z, e[u + 48] = U - z;
                        var j = .382683433 * ((D = V + L) - (W = E + O)),
                            Y = .5411961 * D + j,
                            K = 1.306562965 * W + j,
                            X = .707106781 * (q = L + E),
                            Q = O + X,
                            J = O - X;
                        e[u + 40] = J + Y, e[u + 24] = J - Y, e[u + 8] = Q + K, e[u + 56] = Q - K, u++
                    }
                    for (l = 0; l < 64; ++l) d = e[l] * t[l], m[l] = d > 0 ? d + .5 | 0 : d - .5 | 0;
                    return m
                }

                function U(e) {
                    if (e) {
                        V(65505), 69 === e[0] && 120 === e[1] && 105 === e[2] && 102 === e[3] ? V(e.length + 2) : (V(e.length + 5 + 2), G(69), G(120), G(105), G(102), G(0));
                        for (var t = 0; t < e.length; t++) G(e[t])
                    }
                }

                function q(e, t) {
                    V(65472), V(17), G(8), V(t), V(e), G(3), G(1), G(17), G(0), G(2), G(17), G(1), G(3), G(17), G(1)
                }

                function W() {
                    V(65499), V(132), G(0);
                    for (var e = 0; e < 64; e++) G(h[e]);
                    G(1);
                    for (var t = 0; t < 64; t++) G(l[t])
                }

                function z() {
                    V(65476), V(418), G(0);
                    for (var e = 0; e < 16; e++) G(M[e + 1]);
                    for (var t = 0; t <= 11; t++) G(T[t]);
                    G(16);
                    for (var n = 0; n < 16; n++) G(N[n + 1]);
                    for (var i = 0; i <= 161; i++) G(B[i]);
                    G(1);
                    for (var o = 0; o < 16; o++) G(k[o + 1]);
                    for (var a = 0; a <= 11; a++) G(x[a]);
                    G(17);
                    for (var s = 0; s < 16; s++) G(R[s + 1]);
                    for (var r = 0; r <= 161; r++) G(F[r])
                }

                function j(e, t, n, i, o) {
                    for (var a, s = o[0], r = o[240], c = D(e, t), h = 0; h < 64; ++h) f[b[h]] = c[h];
                    var l = f[0] - n;
                    n = f[0], 0 == l ? L(i[0]) : (L(i[g[a = 32767 + l]]), L(p[a]));
                    for (var d = 63; d > 0 && 0 == f[d]; d--);
                    if (0 == d) return L(s), n;
                    for (var u, m = 1; m <= d;) {
                        for (var v = m; 0 == f[m] && m <= d; ++m);
                        var S = m - v;
                        if (S >= 16) {
                            u = S >> 4;
                            for (var y = 1; y <= u; ++y) L(r);
                            S &= 15
                        }
                        a = 32767 + f[m], L(o[(S << 4) + g[a]]), L(p[a]), m++
                    }
                    return 63 != d && L(s), n
                }

                function Y() {
                    for (var e = String.fromCharCode, t = 0; t < 256; t++) P[t] = e(t)
                }

                function K(e) {
                    if (e <= 0 && (e = 1), e > 100 && (e = 100), r != e) {
                        O(e < 50 ? Math.floor(5e3 / e) : Math.floor(200 - 2 * e)), r = e
                    }
                }
                this.encode = function(n, r) {
                        (new Date).getTime();
                        r && K(r), v = new Array, S = 0, y = 7, V(65496), V(65504), V(16), G(74), G(70), G(73), G(70), G(0), G(1), G(1), G(0), V(1), V(1), G(0), G(0), U(n.exifBuffer), W(), q(n.width, n.height), z(), V(65498), V(12), G(3), G(1), G(0), G(2), G(17), G(3), G(17), G(0), G(63), G(0);
                        var c = 0,
                            h = 0,
                            l = 0;
                        S = 0, y = 7, this.encode.displayName = "_encode_";
                        for (var p, g, m, f, P, b, M, T, N, B = n.data, k = n.width, x = n.height, R = 4 * k, F = 0; F < x;) {
                            for (p = 0; p < R;) {
                                for (b = P = R * F + p, M = -1, T = 0, N = 0; N < 64; N++) b = P + (T = N >> 3) * R + (M = 4 * (7 & N)), F + T >= x && (b -= R * (F + 1 + T - x)), p + M >= R && (b -= p + M - R + 4), g = B[b++], m = B[b++], f = B[b++], w[N] = (A[g] + A[m + 256 >> 0] + A[f + 512 >> 0] >> 16) - 128, C[N] = (A[g + 768 >> 0] + A[m + 1024 >> 0] + A[f + 1280 >> 0] >> 16) - 128, I[N] = (A[g + 1280 >> 0] + A[m + 1536 >> 0] + A[f + 1792 >> 0] >> 16) - 128;
                                c = j(w, d, c, i, a), h = j(C, u, h, o, s), l = j(I, u, l, o, s), p += 32
                            }
                            F += 8
                        }
                        if (y >= 0) {
                            var O = [];
                            O[1] = y + 1, O[0] = (1 << y + 1) - 1, L(O)
                        }
                        return V(65497), void 0 === t ? new Uint8Array(v) : new e(v)
                    },
                    function() {
                        (new Date).getTime();
                        n || (n = 50), Y(), i = _(M, T), o = _(k, x), a = _(N, B), s = _(R, F), E(), H(), K(n), (new Date).getTime()
                    }()
            }

            function i(e, t) {
                return void 0 === t && (t = 50), {
                    data: new n(t).encode(e, t),
                    width: e.width,
                    height: e.height
                }
            }
            void 0 !== t ? t.exports = i : "undefined" != typeof window && (window["jpeg-js"] = window["jpeg-js"] || {}, window["jpeg-js"].encode = i)
        }).call(this, e("buffer").Buffer)
    }, {
        buffer: 2
    }],
    FaceDetection: [function(e, t, n) {
        "use strict";

        function i(e) {
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (e = o(e))) {
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
            var i, a, s = !0,
                r = !1;
            return {
                s: function() {
                    i = e[Symbol.iterator]()
                },
                n: function() {
                    var e = i.next();
                    return s = e.done, e
                },
                e: function(e) {
                    r = !0, a = e
                },
                f: function() {
                    try {
                        s || null == i.return || i.return()
                    } finally {
                        if (r) throw a
                    }
                }
            }
        }

        function o(e, t) {
            if (e) {
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
            }
        }

        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i
        }
        cc._RF.push(t, "173b0QYnAtPr7IyVqdGOyFT", "FaceDetection");
        var s = e("GameManager");
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
                cc.sys.platform != cc.sys.DESKTOP_BROWSER && (s.faceCamera.pause(), this.videoSprite.spriteFrame = null, this.videoTexture = new cc.Texture2D, this.camera = null, this.video = null, this.detector = null, this.frame = 0)
            },
            startCamera: function() {
                var e = this;
                cc.sys.platform != cc.sys.DESKTOP_BROWSER && (s.faceCamera ? (s.faceCamera.resume(), this.initVideo()) : (s.faceCamera = tt.createCamera(), tt.setKeepScreenOn(), s.faceCamera.start("front", !0).then(function(t) {
                    s.faceVideo = t, e.initVideo()
                }).catch(function(e) {
                    tt.showToast({
                        title: "\u6444\u50cf\u673a\u9700\u8981\u6388\u6743"
                    }), console.log(e)
                }), s.faceCamera.setBeautifyParam(.5, .5, .5, .5)))
            },
            initVideo: function() {
                this.videoTexture = new cc.Texture2D, this.videoTexture.initWithElement(s.faceVideo), this.videoTexture.handleLoadedTexture(), this.videoSprite.spriteFrame = new cc.SpriteFrame(this.videoTexture), this.setVideoWidth(this.videoSprite.node.width), this.videoSprite.node.width = s.faceVideo.width, this.videoSprite.node.height = s.faceVideo.height
            },
            startDetector: function() {
                this.detector && s.faceVideo && this.detector.detectFaces(s.faceVideo).then(function(e) {
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
                        var n, o = [],
                            a = i(t.actions);
                        try {
                            for (a.s(); !(n = a.n()).done;) {
                                var s = n.value;
                                console.log("\u68c0\u6d4b\u5230 ".concat(e[s], " \u52a8\u4f5c")), o.push(e[s])
                            }
                        } catch (e) {
                            a.e(e)
                        } finally {
                            a.f()
                        }
                        tt.showToast({
                            title: o.join("\u3001"),
                            duration: 2e3
                        })
                    })
                }
            },
            setVideoWidth: function(e) {
                s.faceVideo && (s.faceVideo.width = e, s.faceVideo.height = s.faceVideo.videoHeight / s.faceVideo.videoWidth * e, this.isFullScreen && (s.faceVideo.height = cc.winSize.height))
            },
            update: function(e) {
                cc.sys.platform != cc.sys.DESKTOP_BROWSER && this.videoTexture && s.faceVideo && this.videoTexture.update({
                    image: s.faceVideo,
                    flipY: !1
                })
            }
        }), cc._RF.pop()
    }, {
        GameManager: "GameManager"
    }],
    FirstItemRemark: [function(e, t, n) {
        "use strict";

        function i(e) {
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (e = o(e))) {
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
            var i, a, s = !0,
                r = !1;
            return {
                s: function() {
                    i = e[Symbol.iterator]()
                },
                n: function() {
                    var e = i.next();
                    return s = e.done, e
                },
                e: function(e) {
                    r = !0, a = e
                },
                f: function() {
                    try {
                        s || null == i.return || i.return()
                    } finally {
                        if (r) throw a
                    }
                }
            }
        }

        function o(e, t) {
            if (e) {
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
            }
        }

        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i
        }
        cc._RF.push(t, "3bd892OYQJPNpNXJT6FgoiS", "FirstItemRemark");
        var s = e("GameManager");
        cc.Class({
            extends: cc.Component,
            properties: {
                itemW: 100,
                itemH: 100,
                spaceW: 20,
                item: cc.Prefab
            },
            start: function() {
                this.isFirstInit = !0
            },
            InitScrollView: function(e) {
                try {
                    var t = e.length;
                    s.curScene.selectName = new Array(t), s.curScene.freeStates = new Array(t);
                    var n = 0,
                        o = 0,
                        a = 0;
                    this.childs = this.node.children;
                    for (var r = 0; r < this.childs.length; r++) {
                        var c = this.childs[r].getComponent("FirstItem");
                        c.image.spriteFrame = e[r], c.selectNode.getComponent(cc.Sprite).spriteFrame = e[t + r], this.childs[r].active = !1
                    }
                    for (var h = 0; h < t; h++) {
                        var l = null;
                        null != this.childs[h] || void 0 != this.childs[h] ? l = this.childs[h] : (l = cc.instantiate(this.item)).parent = this.node, l.active = !0;
                        var d = l.getComponent("FirstItem");
                        d.image.spriteFrame = e[h], d.selectNode.getComponent(cc.Sprite).spriteFrame = e[t + h];
                        var u = d.image.node.width * l.scale;
                        if (n += u, l.setContentSize(u, this.itemH), d.type = h, d.selectNode.active = !1, 0 == h ? (o = this.spaceW / 2 + u / 2, a = u / 2) : (o = o + this.spaceW + a + u / 2, a = u / 2), l.x = o, l.y = 0, 0 != s.sceneType) {
                            var p = "";
                            p = 1 == s.sceneType ? String.fromCharCode("a".charCodeAt() + h) : String.fromCharCode("A".charCodeAt() + h);
                            var g = s.personMsg[p];
                            if (void 0 == g) s.curScene.selectName[h] = 0;
                            else {
                                var m = g.substr(0, g.length - 1);
                                s.curScene.selectName[h] = m
                            }
                            0 == h && (d.selectNode.active = !0)
                        } else s.curScene.selectName[h] = 0 == h ? 0 : -1
                    }
                    if (this.node.width = n + t * this.spaceW, void 0 == s.curScene.isFirstInit) {
                        this.node.x = this.node.x - (this.node.width - this.node.parent.width);
                        var f = this.node.width / 1e3;
                        s.curScene.firstScrollView.scrollToLeft(f, !1), s.curScene.isFirstInit = !0
                    }
                    var v, S = new Array,
                        y = i(this.node.children);
                    try {
                        for (y.s(); !(v = y.n()).done;) {
                            var w = v.value;
                            w.active && S.push(w)
                        }
                    } catch (e) {
                        y.e(e)
                    } finally {
                        y.f()
                    }
                    if (1 == s.sceneType || 2 == s.sceneType) {
                        var C = 12;
                        2 == s.sceneType && (C = 11);
                        for (var I = S[C].position, P = C; P < S.length - 1; P++) S[P].position = S[P + 1].position;
                        S[S.length - 1].position = I
                    }
                    0 != s.sceneType && 1 != s.GetItemLockFlag("body") && (S[S.length - 1].getChildByName("new").active = !0), this.isFirstInit = !1
                } catch (e) {
                    console.log(e)
                }
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
                    if (i.isVideoPlaying = !1, i.audioManager && i.audioManager.PlayClickSound(), i.curScene.curInnerType == this.type) return void(0 == i.curScene.isShowScrollview && i.curScene.BtnHideScrollView(null));
                    i.fakeUnlockName = [], i.itemClickTimes++, "qq" == i.channel && i.isSupportBox && i.itemClickTimes == parseInt(i.boxTimes) && (i.adsManager.ShowAppBox(), i.itemClickTimes = 0), 0 == i.sceneType && -1 == i.curScene.curInnerType && (i.curScene.imageScrollView.node.active = !1, i.curScene.secondScrollView.node.active = !0);
                    var e = this.node.parent.children;
                    if (i.curScene.curInnerType >= 0 && (e[i.curScene.curInnerType].getComponent("FirstItem").selectNode.active = !1), i.curScene.curInnerType = this.type, this.selectNode.active = !0, 0 == i.sceneType) {
                        i.curType = "0" + String.fromCharCode("a".charCodeAt() + this.type), 0 == this.type ? i.curScene.itemRemark.LoadData(i.curScene.images[this.type]) : i.curScene.itemRemark.LoadData(i.curScene.images[this.type], !1), e[i.curScene.curInnerType].getComponent("FirstItem").selectNode.active = !0, i.curScene.ShowHidePanelHandle(2)
                    } else if (1 == i.sceneType || 2 == i.sceneType) {
                        var t = "a";
                        2 == i.sceneType && (t = "A"), i.curType = String.fromCharCode(t.charCodeAt() + this.type), "q" != i.curType && "P" != i.curType || 1 == i.GetItemLockFlag("body") || (i.SetItemLockFlag("body", 1), this.node.getChildByName("new").active = !1), i.curScene.itemRemark.LoadData(i.curScene.images[this.type]), 0 == i.curScene.isShowScrollview && i.curScene.BtnHideScrollView(null)
                    }
                }
            }
        }), cc._RF.pop()
    }, {
        GameManager: "GameManager"
    }],
    GameManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a671fh50V9MNIqmsjVaiukD", "GameManager"), t.exports = {
            packName: "org/cocos2dx/javascript/AppActivity",
            trackEvent: function(e) {
                console.log("trackEvent"), cc.sys.isNative && "ios" == this.channel && (cc.sys.OS_IOS == cc.sys.os ? jsb.reflection.callStaticMethod("AppController", "trackEvent:", e) : jsb.reflection.callStaticMethod(this.packName, "trackEvent"))
            },
            fakeUnlockName: [],
            systemInfo: null,
            GetSystemInfo: function() {
                if (cc.sys.platform == cc.sys.DESKTOP_BROWSER) return null;
                if (!this.systemInfo) {
                    var e = null;
                    "wx" == this.channel ? e = wx.getSystemInfoSync() : "tt" == this.channel ? e = tt.getSystemInfoSync() : "qq" == this.channel ? e = qq.getSystemInfoSync() : "swan" == this.channel ? e = swan.getSystemInfoSync() : "oppo" == this.channel ? e = qg.getSystemInfoSync() : "vivo" == this.channel && (e = qg.getSystemInfoSync()), this.systemInfo = e
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
				 setDefaultItem(81,"A");
				 setDefaultItem(61,"B");
				 setDefaultItem(66,"C");
				 setDefaultItem(26,"D");
				 setDefaultItem(59,"L");
				 setDefaultItem(66,"O");
				 setDefaultItem(57,"N");
				 setDefaultItem(139,"E");
				 setDefaultItem(71,"F");
				 setDefaultItem(140,"G");
				 setDefaultItem(86,"H");
				 setDefaultItem(18,"I");
				 setDefaultItem(38,"J");
				 setDefaultItem(44,"K");
				 setDefaultItem(13,"P");
				 setDefaultItem(32,"M")
				 setDefaultItem(80,"a")
				 setDefaultItem(61,"b")
				 setDefaultItem(66,"c")
				 setDefaultItem(26,"d")
				 setDefaultItem(126,"e")
				 setDefaultItem(60,"f")
				 setDefaultItem(106,"g")
				 setDefaultItem(43,"h")
				 setDefaultItem(53,"i")
				 setDefaultItem(72,"j")
				 setDefaultItem(84,"k")
				 setDefaultItem(61,"l")
				 setDefaultItem(13,"q")
				 setDefaultItem(59,"m")
				 setDefaultItem(24,"n")
				 setDefaultItem(56,"o")
				 setDefaultItem(66,"p")
				 
				// if (("A" == e && parseInt(this.frameName) <= 81 || "B" == e && parseInt(this.frameName) <= 61 || "C" == e && parseInt(this.frameName) <= 66 || "D" == e && parseInt(this.frameName) <= 26 || "L" == e && parseInt(this.frameName) <= 59 || "O" == e && parseInt(this.frameName) <= 66 || "N" == e && parseInt(this.frameName) <= 57) && (n = n.replace("boy", "girl")), 0 == this.localFlag) {
				// for(int i=1;i<=)
				console.log("1234");
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
            channel: "4399",
            configName: "configNew.json",
            testVersion: !0,
            isLoadSubpackage1: !1,
            isLoadSubpackage2: !1,
            isLoadSubpackage3: !1,
            LoadSubPackage: function(e, t) {
                if (!(0 == e && this.isLoadSubpackage1 || 1 == e && this.isLoadSubpackage2 || 2 == e && this.isLoadSubpackage3))
                    if (cc.sys.platform === cc.sys.DESKTOP_BROWSER || "wx" != this.channel && "qq" != this.channel && "swan" != this.channel && "vivo" != this.channel) this.isLoadSubpackage1 = !0, this.isLoadSubpackage2 = !0, this.isLoadSubpackage3 = !0;
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
                            fail: function(i) {
                                console.log("load " + t + " subpackage fail."), console.log(i), n.LoadSubPackage(e, t)
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
                        }
                    }
            },
            CheckSubpackageStatus: function(e) {
                return !!(0 == e && this.isLoadSubpackage1 || 1 == e && this.isLoadSubpackage2 || 2 == e && this.isLoadSubpackage3)
            },
            IsCanSupportFunc: function(e) {
                if (cc.sys.platform == cc.sys.DESKTOP_BROWSER) return !1;
                if (cc.sys.isNative && ("ios" == this.channel || "apk" == this.channel)) return !1;
                if ("4399" == this.channel) return 2 == e;
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
                        else {
                            if (15 == e) return !1;
                            if (16 == e) return !1;
                            if (17 == e) return !1;
                            if (18 == e) return !1;
                            if (20 == e) return !1
                        }
                    }
                } else if ("tt" == this.channel) {
                    if (0 == e) return !0;
                    if (1 == e) {
                        if (t = this.systemInfo.version, n = "7.6.6", "Douyin" == this.systemInfo.appName && (t = this.systemInfo.SDKVersion, n = "1.71.0"), "Toutiao" != this.systemInfo.appName && "Douyin" != this.systemInfo.appName) return !1
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
                            20 == e ? (t = this.systemInfo.SDKVersion, n = "1.41.0") : 4 == e && (t = this.systemInfo.SDKVersion, n = "1.32.0")
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
                                else if (18 == e) t = this.systemInfo.SDKVersion, n = "1.16.0";
                                else if (19 == e) t = this.systemInfo.SDKVersion, n = "1.7.1";
                                else if (20 == e) return !1
                            }
                        }
                    }
                } else if ("vivo" == this.channel || "oppo" == this.channel || "mi" == this.channel || "apk" == this.channel) return ("oppo" != this.channel || 1 != e) && e < 3;
                return "wx" != this.channel && "qq" != this.channel && "tt" != this.channel && "swan" != this.channel || (-1 === this.compareVersion(t, n) ? (console.log("\u7248\u672c\u592a\u4f4e\u4e0d\u652f\u6301\u8be5\u529f\u80fd"), i = !1) : i = !0), i
            },
            compareVersion: function(e, t) {
                e = e.split("."), t = t.split(".");
                for (var n = Math.max(e.length, t.length); e.length < n;) e.push("0");
                for (; t.length < n;) t.push("0");
                for (var i = 0; i < n; i++) {
                    var o = parseInt(e[i]),
                        a = parseInt(t[i]);
                    if (o > a) return 1;
                    if (o < a) return -1
                }
                return 0
            },
            gameIcon: null,
            CreateGameIcon: function(e) {
                0 != this.IsCanSupportFunc(13) && (e = parseInt(e) - 40, this.gameIcon = wx.createGameIcon({
                    adUnitId: "PBgAAZCpA7lKORMs",
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
                                width: 80,
                                height: 35,
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
                    t.show(), this.moreBtn = t
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
            shareUrl: "",
            shareTitle: "Giả vờ như anh ấy là người sáng nhất trong mắt tôi!",
            ShareApp: function() {
                /* if ("4399" != this.channel) {
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
                                console.log("Không chia sẻ được video")
                            }
                        }) : "swan" == this.channel && swan.shareAppMessage({
                            title: this.shareTitle,
                            imageUrl: this.shareUrl
                        })
                    }
                } else window.h5api.share() */
            },
            GoToAppStore: function(e) {
                console.log("GoToAppStore"), !cc.sys.isNative || "apk" != this.channel && "ios" != this.channel || (cc.sys.OS_IOS == cc.sys.os ? jsb.reflection.callStaticMethod("AppController", "GoToAppStore", e) : jsb.reflection.callStaticMethod(this.packName, "GoToAppStore"))
            },
            tmpPath: null,
            imageData: null,
            width: 0,
            height: 0,
            shotImage: null,
            ScreenShot: function(e, t, n) {
                void 0 == n && (n = !1);
                var i = new cc.RenderTexture,
                    o = cc.game._renderContext;
                i.initWithSize(Math.floor(cc.winSize.width), Math.floor(cc.winSize.height), o.STENCIL_INDEX8), e.targetTexture = i, e.render();
                var a = i.readPixels(),
                    s = document.createElement("canvas"),
                    r = s.getContext("2d"),
                    c = Math.floor(t.width),
                    h = Math.floor(t.height);
                s.width = c, s.height = h;
                for (var l = r.createImageData(c, h), d = Math.floor((cc.winSize.width - 1) / 2) - Math.floor((c - 1) / 2) + Math.floor(t.position.x), u = Math.floor((cc.winSize.height - 1) / 2) - Math.floor((h - 1) / 2) + Math.floor(t.position.y), p = 0; p < h; p++)
                    for (var g = 0; g < c; g++) {
                        var m = 0;
                        m = 0 == this.isNormalShot ? 4 * (p * c + g) : 4 * ((h - 1 - p) * c + g);
                        var f = 4 * ((p + u) * Math.floor(cc.winSize.width) + (g + d));
                        l.data[m] = a[f], l.data[m + 1] = a[f + 1], l.data[m + 2] = a[f + 2], l.data[m + 3] = n ? Math.round(255 * Math.sqrt(a[f + 3] / 255)) : 255
                    }
                if (cc.sys.platform != cc.sys.DESKTOP_BROWSER)
                    if ("oppo" == this.channel) {
                        this.filePath = qg.saveImageTempSync({
                            data: l.data,
                            width: s.width,
                            height: s.height,
                            fileType: "png"
                        })
                    } else "vivo" == this.channel ? this.curScene.GenerateJpegData(l, s.width, s.height) : "apk" == this.channel && (this._width = c, this._height = h, this.picData = l.data);
                r.putImageData(l, 0, 0);
                var v = new cc.Texture2D;
                return v.initWithElement(s), new cc.SpriteFrame(v)
            },
            SaveImageToPhoto: function(e, t, n) {
                if (cc.sys.platform != cc.sys.DESKTOP_BROWSER) {
                    if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os && "ios" == this.channel) return t && t(), void this.curScene.scheduleOnce(function() {
                        jsb.reflection.callStaticMethod("AppController", "saveToAlbum:", "base64"), n && n()
                    }, .05);
                    if (cc.sys.os != cc.sys.OS_ANDROID || "apk" != this.channel) {
                        var i = this,
                            o = this.shotImage.getTexture().getHtmlElementObj();
                        if ("tt" == this.channel) o.toTempFilePath({
                            x: 0,
                            y: 0,
                            width: o.width,
                            height: o.height,
                            destWidth: o.width,
                            destHeight: o.height,
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
                        else if ("wx" == this.channel) o.toTempFilePath({
                            x: 0,
                            y: 0,
                            width: o.width,
                            height: o.height,
                            destWidth: o.width,
                            destHeight: o.height,
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
                        else if ("qq" == this.channel) o.toTempFilePath({
                            x: 0,
                            y: 0,
                            width: o.width,
                            height: o.height,
                            destWidth: o.width,
                            destHeight: o.height,
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
                        else if ("swan" == this.channel) o.toTempFilePath({
                            x: 0,
                            y: 0,
                            width: o.width,
                            height: o.height,
                            destWidth: o.width,
                            destHeight: o.height,
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
                            qg.saveImageToPhotosAlbum({
                                filePath: i.filePath,
                                success: function(t) {
                                    e()
                                },
                                fail: function(e) {
                                    console.log(e), "saveImageToPhotosAlbum:fail cancel" == e.errMsg ? qg.showModal({
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
                            console.log(e), qg.showModal({
                                title: "\u63d0\u793a",
                                content: "\u4fdd\u5b58\u56fe\u7247\u5931\u8d25",
                                showCancel: !1
                            })
                        } else if ("vivo" == this.channel) {
                            this.filePath = "internal://files/work/cute" + this.GetNowTime() + ".jpg";
                            var a = qg.writeFileSync({
                                uri: i.filePath,
                                text: i.picData,
                                encoding: "binary"
                            });
                            "success" === a ? qg.saveToPhotoAlbum({
                                uri: i.filePath,
                                success: function() {},
                                fail: function(e, t) {
                                    console.log("jswrapper:saveToPhotoAlbum handling fail, code = ".concat(t))
                                }
                            }) : console.log("jswrapper:writeFileSync handling fail, result = ".concat(a))
                        }
                    } else {
                        if (1 == jsb.reflection.callStaticMethod(this.packName, "CheckPermission", "()I"));
                        else console.log("lqr:", "\u6ca1\u6709\u6743\u9650"), jsb.reflection.callStaticMethod(this.packName, "OpenSetting", "()V")
                    }
                } else e()
            },
            isHasAd: !0,
            isShowBanner: !0,
            adsManager: null,
            curUnlockItem: null,
            startTime: 0,
            isVideoPlaying: !1,
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
                        var o = JSON.parse(i);
                        t.isHasAd = o.isSupportAd, t.banner = o.banner, t.inter = o.inter, t.video = o.video, t.isLoadJson = !0, console.log("banner:" + t.banner, "inter:" + t.inter, "video:" + t.video), e()
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
                var e = "SignInDate";
                return "oppo" == this.channel && (e = "SignDate"), cc.sys.localStorage.getItem(e)
            },
            SetSignInDate: function() {
                var e = "SignInDate";
                "oppo" == this.channel && (e = "SignDate"), cc.sys.localStorage.setItem(e, this.GetCurrentDate())
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
                var o = t - e + (1 == n ? 1 : 0);
                return Math.floor(Math.random() * o) + e
            },
            SortArray: function(e, t) {
                if (void 0 == t && (t = 2), null == e || void 0 == e || t < 0) return console.log("\u4f20\u5165\u6570\u636e\u6709\u8bef"), null;
                for (var n = 0; n < e.length; n++)
                    for (var i = n + 1; i < e.length; i++)
                        if (0 == t) {
                            if (parseInt(e[n].name) > parseInt(e[i].name)) {
                                var o = e[n];
                                e[n] = e[i], e[i] = o
                            }
                        } else if (parseInt(e[n].name.substr(e[n].name.length - t, t)) > parseInt(e[i].name.substr(e[i].name.length - t, t))) {
                    var a = e[n];
                    e[n] = e[i], e[i] = a
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
                    o = new Date(parseInt(n[0]), parseInt(n[1]) - 1, parseInt(n[2])).getTime(),
                    a = new Date(parseInt(i[0]), parseInt(i[1]) - 1, parseInt(i[2])).getTime();
                return Math.abs(o - a) / 1e3 / 60 / 60 / 24
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
                        o = e;
                    cc.loader.load({
                        url: o,
                        type: "mp3"
                    }, function(e, o) {
                        if (e) console.log(e);
                        else try {
                            i.bgMusic = o;
                            var a = i.GetMusicFlag();
                            null == a || "" === a ? (i.musicOn = !0, i.PlayMusic()) : 0 == a ? i.audioOn = !1 : (i.audioOn = !0, i.PlayMusic()), t.active = !0, n()
                        } catch (e) {}
                    }.bind(this))
                } else {
                    t.active = !0;
                    var a = that.GetMusicFlag();
                    null == a || "" === a ? (this.audioOn = !0, this.PlayMusic()) : 0 == a ? this.audioOn = !1 : (this.audioOn = !0, this.PlayMusic()), n()
                }
            },
            HideShowHandle: function(e, t) {
                cc.game.off(cc.game.EVENT_SHOW), cc.game.on(cc.game.EVENT_SHOW, function() {
                    try {
                        0 == this.isVideoPlaying && "qq" == this.channel && 1 == this.GetIsPhone() && (this.musicOn ? this.audioControl && this.audioControl.play() : this.audioControl && this.audioControl.pause()), e && e(), "oppo" == this.channel && 0 == this.isVideoPlaying && this.curScene && 0 == this.adsManager.isVideoLoad && this.adsManager.InitVideo()
                    } catch (e) {}
                }.bind(this)), cc.game.off(cc.game.EVENT_HIDE), cc.game.on(cc.game.EVENT_HIDE, function() {
                    try {
                        "qq" == this.channel && 1 == this.GetIsPhone() && this.audioControl && this.audioControl.pause(), this.isVideoPlaying && (this.adsManager.isVideoLoad = !1), t && t()
                    } catch (e) {}
                }.bind(this))
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
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == this.channel && (this.recorder = tt.getGameRecorderManager(), this.recorder.onStart(function(t) {
                    this.videoPath = null, this.pickId = 1, this.recorderFlag = !0, this.startRecordTime = this.GetNowTime(), e()
                }.bind(this)), this.recorder.onError(function(t) {
                    console.log("record error"), console.log(t), this.recorderFlag = !1, e()
                }.bind(this)), this.recorder.onStop(function(e) {
                    if (0 != this.pickId)
                        if (1 == this.pickId) {
                            var n = this;
                            this.recorder.clipVideo({
                                path: e.videoPath,
                                timeRange: [30, 0],
                                success: function(e) {
                                    n.videoPath = e.videoPath
                                },
                                fail: function(t) {
                                    console.error(t), n.videoPath = e.videoPath
                                }
                            })
                        } else this.videoPath = e.videoPath;
                    this.pickId = 1, this.recorderFlag = !1, t()
                }.bind(this)), n && 1 == this.recorderFlag && e())
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
                })) : (e(1), this.GetNowTime() - this.startRecordTime < 3e3 ? t() : (this.pickId = 3, this.recorder.stop())))
            },
            ShareVideo: function(e) {
                if (null == this.videoPath) return this.curScene.generalRemind.active = !0, this.curScene.generalRemind.getComponent("GeneralRemind").InitPanel(4), void this.ShowPanelHandle();
                e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
                    e.target.getComponent(cc.Button).interactable = !0
                }, 1);
                var t = {
                    videoPath: this.videoPath
                };
                "Douyin" == this.systemInfo.appName ? (t.videoTopics = ["\u88c5\u626e\u7231\u8c46", "\u840c\u62fc\u5c11\u5973,\u7231\u8c46\u6210\u56e2"], t.hashtag_list = ["\u88c5\u626e\u7231\u8c46", "\u840c\u62fc\u5c11\u5973,\u7231\u8c46\u6210\u56e2"]) : "Toutiao" == this.systemInfo.appName && (t.createChallenge = !0);
                tt.shareAppMessage({
                    channel: "video",
                    extra: t,
                    success: function() {
                        e.target.getComponent(cc.Button).interactable = !0
                    },
                    fail: function(t) {
                        console.log("\u5206\u4eab\u5931\u8d25:" + t.errMsg), e.target.getComponent(cc.Button).interactable = !0
                    }
                })
            },
            isRemindPopup: !1,
            ShowPanelHandle: function(e) {
                if ("4399" != this.channel) {
                    if (this.isRemindPopup = !0, this.isHasAd && ("shop" != e && ("oppo" != this.channel && "vivo" != this.channel || "saveDressup" != e || this.adsManager.ShowInterstitial(-1), "tt" == this.channel && ("sign" != e && "gift" != e && this.adsManager.ShowBanner(), this.adsManager.ShowInterstitial(-1)), "oppo" != this.channel && "vivo" != this.channel || !this.isShowNative || "sign" != e && "gift" != e && "limitedPanel" != e && this.curScene.nativeControl.nativeBannerBtn && this.curScene.nativeControl.nativeBannerBtn.node.active && (this.curScene.nativeControl.nativeBannerBtn.node.height = 350, this.curScene.nativeControl.nativeBannerBtn.node.getComponent(cc.Widget).bottom = 0)), "qq" == this.channel && ("personPanel" != e && "saveDressup" != e && "shop" != e && "limitedPanel" != e && "clearDressupPanel" != e && "addOnePersonPanel" != e && "deleteImagePanel" != e || (1 == this.isSupportBox && this.adsManager.ShowAppBox(), this.adsManager.ShowInterstitial(-1)))), "shop" != e && "sign" != e && "gift" != e) {
                        if (this.isSupportBox && this.pushCtl)
                            if ("oppo" == this.channel) cc.winSize.height / cc.winSize.width < 1.7 ? "personPanel" == e ? this.pushCtl.CreateOneCol(1, 10, cc.v2(0, 350), .8) : "limitedPanel" == e ? this.pushCtl.CreateOneCol(1, 10, cc.v2(0, 500), .6) : this.pushCtl.CreateOneCol(1, 10, cc.v2(0, 300), .8) : "personPanel" == e ? this.pushCtl.CreateOneCol(1, 10, cc.v2(0, 480), .8) : "limitedPanel" == e ? this.pushCtl.CreateOneCol(1, 10, cc.v2(0, 600), .6) : this.pushCtl.CreateOneCol(1, 10, cc.v2(0, 300), .8), this.pushCtl.OneRowNodeAnimStop(this.pushCtl.colNode);
                            else if ("qq" == this.channel) {
                            var t = 1;
                            cc.winSize.height / cc.winSize.width < 1.7 && (t = .8), "limitedPanel" == e ? cc.winSize.height / cc.winSize.width < 1.5 ? this.pushCtl.CreateOneRow(4, 10, cc.v2(0, -300), t) : cc.winSize.height / cc.winSize.width < 1.7 ? this.pushCtl.CreateOneRow(4, 10, cc.v2(0, -380), t) : this.pushCtl.CreateOneRow(4, 10, cc.v2(0, -420), t) : this.pushCtl.CreateOneRow(4, 10, cc.v2(0, -250), t)
                        } else "limitedPanel" == e ? (this.pushCtl.CreateTwoCol(3, 5, cc.v2(0, 180)), this.pushCtl.OneRowNodeAnimPlay(this.pushCtl.twoColNode)) : "personPanel" == e ? (this.pushCtl.CreateOneRow(4, 20, cc.v2(0, -300)), this.pushCtl.OneRowNodeAnimPlay(this.pushCtl.rowNode), this.pushCtl.CreateHorPanel(!1, 15, 10, 1, cc.v2(654, 150), 1, 500)) : (this.pushCtl.CreateHorPanel(!1, 15, 10, 1, cc.v2(654, 150), 1, 500), this.pushCtl.CreateOneRow(4, 20, cc.v2(0, -270)), this.pushCtl.OneRowNodeAnimPlay(this.pushCtl.rowNode));
                        this.isHasAd && "qq" == this.channel && this.adsManager.ShowBlockAd()
                    } else "qq" != this.channel || "sign" != e && "gift" != e || this.isSupportBox && this.pushCtl && (cc.winSize.height / cc.winSize.width < 1.5 ? this.pushCtl.CreateOneRow(4, 10, cc.v2(0, -300), .8) : cc.winSize.height / cc.winSize.width < 1.7 ? this.pushCtl.CreateOneRow(4, 10, cc.v2(0, -350), .9) : cc.winSize.height / cc.winSize.width < 2 ? this.pushCtl.CreateOneRow(4, 10, cc.v2(0, -400)) : this.pushCtl.CreateOneRow(4, 10, cc.v2(0, -450)));
                    "shop" == e && cc.winSize.height / cc.winSize.width < 2 ? this.HideMoreGame() : this.ShowMoreGame()
                }
            },
            HidePanelHandle: function(e, t) {
                "4399" != this.channel && (this.isRemindPopup = !1, this.isHasAd && "tt" == this.channel && (-1 == this.curScene.name.indexOf("MainMenu") && this.adsManager.HideBanner(), "shop" == e && cc.winSize.height / cc.winSize.width < 2 ? this.ShowMoreGame() : cc.winSize.height / cc.winSize.width < 2 && this.curScene.shopScrollView && this.curScene.shopScrollView.node.parent.active && this.HideMoreGame()), this.pushCtl && ("wx" == this.channel && (this.pushCtl.HideTwoCol(), this.pushCtl.HideOneCol(), this.pushCtl.HideHorScroll()), this.pushCtl.HideOneRow(), "wx" == this.channel && "sign" == e && -1 != this.curScene.name.indexOf("MainMenu") && (this.pushCtl.CreateTwoCol(4, 5, cc.v2(0, 80)), this.pushCtl.OneRowNodeAnimPlay(this.pushCtl.twoColNode), this.pushCtl.CreateHorPanel(!1, 15, 10, 1, cc.v2(654, 150))), "oppo" == this.channel && this.pushCtl ? 1 == this.sceneIndex ? (this.pushCtl.CreateOneCol(1, 10, cc.v2(300, this.curScene.pushY), .8), this.pushCtl.OneRowNodeAnimPlay(this.pushCtl.colNode)) : this.pushCtl.HideOneCol() : "qq" == this.channel && this.pushCtl.HideOneRow()), "qq" == this.channel && this.isHasAd && -1 == this.curScene.name.indexOf("MainMenu") && this.adsManager.HideBlockAd(), "oppo" != this.channel && "vivo" != this.channel || !this.isShowNative || "sign" != e && "shop" != e && this.curScene.nativeControl.nativeBannerBtn && this.curScene.nativeControl.nativeBannerBtn.node.active && (this.curScene.nativeControl.nativeBannerBtn.node.height = 120, this.curScene.nativeControl.nativeBannerBtn.node.getComponent(cc.Widget).bottom = 0))
            },
            IsSupportPush: function() {
                var e = !1;
                return "wx" != this.channel && "qq" != this.channel && "oppo" != this.channel || (e = !0), e
            },
            pushCtl: null,
            serverPath: "",
            curScene: null,
            sceneType: 0,
            personType: 1,
            isCreatNewImageMsg: !1,
            isMateMode: !0,
            dressupScore: null,
            curType: -1,
            curEditImageIndex: -1,
            curStickersNum: 0,
            curPersonNum: 0,
            itemName: [],
            girlItemName: ["eye", "eyebrow", "mouth", "makeup", "hair", "coat", "jacket", "pants", "skirt", "dress", "sock", "shoes", "glasses", "earring", "neck", "headwear", "wing"],
            boyItemName: ["eye", "eyebrow", "mouth", "makeup", "hair", "coat", "jacket", "pants", "dress", "sock", "shoes", "glasses", "earring", "neck", "headwear", "wing"],
            defaultDressUp: {},
            defaultGirlDressUp: {
                sex: 1,
                a: "10",
                b: "10",
                c: "10",
                e: "910",
                f: "720",
                h: "30",
                l: "10",
                level: "123&12"
            },
            defaultBoyDressUp: {
                sex: 2,
                A: "10",
                B: "10",
                C: "10",
                E: "10",
                F: "10",
                H: "10",
                K: "10",
                level: "123&12"
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
            setMsg: null,
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
            itemClickTimes: 0,
            pathRootName: "json",
            isSupportPush: !1,
            bannerFlag: !1,
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
            ClearOldData: function() {},
            GetImageMsg: function() {
                var e = cc.sys.localStorage.getItem("ImageMsg");
                return e && "" != e ? JSON.parse(e) : null
            },
            SetImageMsg: function() {
                this.imageMsg && cc.sys.localStorage.setItem("ImageMsg", JSON.stringify(this.imageMsg))
            },
            GetPathByType: function(e, t) {
                var n = "";
                return 0 == this.sceneType ? n = "decoration/" : 1 == this.sceneType ? n = "girl/" : 2 == this.sceneType && (n = "boy/"), 0 == t ? n = "decoration/" : 1 == t ? n = "girl/" : 2 == t && (n = "boy/"), 2 == e.length ? "0a" == e ? n += "bg/" : "0b" == e ? n += "obj/" : "0c" == e && (n += "num/") : "a" == e || "A" == e ? n += "eye/" : "b" == e || "B" == e ? n += "eyebrow/" : "c" == e || "C" == e ? n += "mouth/" : "d" == e || "D" == e ? n += "makeup/" : "e" == e || "E" == e ? n += "hair/" : "f" == e || "F" == e ? n += "coat/" : "g" == e || "G" == e ? n += "jacket/" : "h" == e || "H" == e ? n += "pants/" : "i" == e ? n += "skirt/" : "j" == e || "I" == e ? n += "dress/" : "k" == e || "J" == e ? n += "sock/" : "l" == e || "K" == e ? n += "shoes/" : "m" == e || "L" == e ? n += "glasses/" : "n" == e || "M" == e ? n += "earring/" : "o" == e || "N" == e ? n += "necklace/" : "p" == e || "O" == e ? n += "headwear/" : "q" != e && "P" != e || (n = "wing/"), n
            },
            GetOldName: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = null;
                ("0a" == e ? n = "gameBg" : "0b" == e ? n = "gameTieZhi" : "A" == e ? n = "Boy/B-yangjing/yangjing/G" : "B" == e ? n = "Boy/B-meimao/meimao/G" : "C" == e ? n = "Boy/B-zuiba/zuiba/G" : "D" == e ? n = "Boy/B-lianjia/lianjia/G" : "E" == e ? n = "Boy/B-toufa/toufa/" : "F" == e ? n = "Boy/B-shangyi/shangyi/" : "G" == e ? n = "Boy/B-waitao/waitao/" : "H" == e ? n = "Boy/B-kuzi/kuzi/" : "I" == e ? n = "Boy/B-lianyiqun/lianyiqun/" : "J" == e ? n = "Boy/B-wazi/wazi/" : "K" == e ? n = "Boy/B-xiezi/xiezi/" : "L" == e ? n = "Boy/B-yangjing2/yanjing2/" : "M" == e ? n = "Boy/B-erhuang/erhuang/" : "N" == e ? n = "Boy/B-bozi/bozi/" : "O" == e ? n = "Boy/B-toushi/toushi/" : "a" == e ? n = "Girl/G-yangjing/yangjing/G" : "b" == e ? n = "Girl/G-meimao/meimao/G" : "c" == e ? n = "Girl/G-zuiba/zuiba/G" : "d" == e ? n = "Girl/G-lianjia/lianjia/G" : "e" == e ? n = "Girl/G-toufa/toufa/" : "f" == e ? n = "Girl/G-shangyi/shangyi/" : "g" == e ? n = "Girl/G-waitao/waitao/" : "h" == e ? n = "Girl/G-kuzi/kuzi/" : "i" == e ? n = "Girl/G-qunzi/qunzi/" : "j" == e ? n = "Girl/G-lianyiqun/lianyiqun/" : "k" == e ? n = "Girl/G-wazi/wazi/" : "l" == e ? n = "Girl/G-xiezi/xiezi/" : "m" == e ? n = "Girl/G-yangjing2/yanjing2/" : "n" == e ? n = "Girl/G-erhuang/erhuang/" : "o" == e ? n = "Girl/G-bozi/bozi/" : "p" == e && (n = "Girl/G-toushi/toushi/"), n) && (0 == this.sceneType ? 0 == t && (n = "new_Tip" + n) : 0 == t && (n = (1 == this.sceneType ? 1 : 0) + "new_Tip" + n));
                return n
            },
            SortByArray: function(e, t) {
                try {
                    for (var n = new Array, i = 0; i < e.length; i++) {
                        var o = this.GetNameIndex(e[i].name, t); - 1 != o && (n[o] = e[i])
                    }
                    return n
                } catch (e) {
                    console.log(e)
                }
            },
            GetNameIndex: function(e, t) {
                try {
                    var n = -1,
                        i = this.itemName;
                    i = 1 == t ? this.girlItemName : 2 == t ? this.boyItemName : this.itemName;
                    for (var o = 0; o < i.length; o++)
                        if (i[o] == e) {
                            n = o;
                            break
                        } return n
                } catch (e) {
                    console.log(e)
                }
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
            getPartScore: function(e, t) {
                var n = 1,
                    i = 3;
                return t && (n = 3, i = 5), "f" != e && "g" != e && "h" != e && "i" != e && "j" != e && "q" != e && "F" != e && "G" != e && "H" != e && "I" != e && "P" != e || (n = 4, i = 6, t && (n = 6, i = 8)), Math.floor(Math.random() * (i + 1 - n) + n)
            },
            InitPerson: function(e, t, n) {
                try {
                    var i = "a",
                        o = "a";
                    2 == e.sex && (i = "A", o = "A");
                    var a = null;
                    a = 1 == e.sex ? this.girlItemName : this.boyItemName;
                    for (var s = 0; s < a.length; s++)
                        if (e[i = String.fromCharCode(o.charCodeAt() + s)]) {
                            var r = e[i],
                                c = r.substr(r.length - 1, 1),
                                h = r.substr(0, r.length - 1);
                            this.InitPersonPart(e.sex, i, c, h, t[s], n)
                        } else {
                            if ("q" == i || "P" == i) t[s].removeAllChildren(), t[s].getComponent(cc.Sprite).spriteFrame = null;
                            else if ("a" == i || "b" == i || "c" == i) {
                                var l = this.defaultGirlDressUp[i];
                                l = l.substr(0, l.length - 1), this.InitPersonPart(1, i, 0, l, t[s], n)
                            } else if ("A" == i || "B" == i || "C" == i) {
                                var d = this.defaultBoyDressUp[i];
                                d = d.substr(0, d.length - 1), this.InitPersonPart(2, i, 0, d, t[s], n)
                            } else t[s].getComponent(cc.Sprite).spriteFrame = null;
                            "e" == i || "E" == i ? n[0].getComponent(cc.Sprite).spriteFrame = null : "g" == i || "G" == i ? n[1].getComponent(cc.Sprite).spriteFrame = null : "O" != i && "p" != i || (n[2].getComponent(cc.Sprite).spriteFrame = null)
                        }
                } catch (e) {
                    console.log(e)
                }
            },
            InitPersonPart: function(e, t, n, i, o, a) {
                try {
                    var s = [],
                        r = "a";
                    2 == e && (r = "A");
                    var c = this.GetPathByType(t, e);
                    0 == this.sceneType && (c = 1 == e ? this.GetPathByType(t, 1) : this.GetPathByType(t, 2)), ("A" == t && parseInt(i) <= 81 || "B" == t && parseInt(i) <= 61 || "C" == t && parseInt(i) <= 66 || "D" == t && parseInt(i) <= 26 || "L" == t && parseInt(i) <= 59 || "O" == t && parseInt(i) <= 66 || "N" == t && parseInt(i) <= 57) && (c = c.replace("boy", "girl"));
                    var h = !0;
                    if ("e" == t || "E" == t || "g" == t || "G" == t || "O" == t || "p" == t || "j" == t || "I" == t) {
                        var l = 0,
                            d = "",
                            u = null;
                        "e" == t || "g" == t || "p" == t || "j" == t ? (r = "other/girl/", "e" == t ? (l = 0, d = "hair") : "g" == t ? (d = "jacket", l = 1) : "p" == t ? (d = "headwear", l = 2) : "j" == t && (d = "dress", l = 3), r += d + "/", u = this.otherGirlMsg) : "E" != t && "G" != t && "O" != t && "I" != t || (r = "other/boy/", "E" == t ? (l = 0, d = "hair") : "G" == t ? (d = "jacket", l = 1) : "O" == t ? (d = "headwear", l = 2) : "I" == t && (l = 3, d = "dress"), r += d + "/", u = this.otherBoyMsg), s = u[d];
                        var p = this.IsHasSecondLayer(s, i); - 1 == p ? a[l].getComponent(cc.Sprite).spriteFrame = null : ("0" == s[p].toString().substr(0, 1) && (h = !1), r += i, 0 == n ? this.LoadOneImage(!0, r, a[l]) : (r = this.serverPath + r + ".png", this.LoadOneImage(!1, r, a[l])))
                    }
                    h ? "q" != t && "P" != t || -1 != i.indexOf("a") ? ("q" != t && "P" != t || o.removeAllChildren(), 0 == n ? (r = c + i, this.LoadOneImage(!0, r, o)) : (r = this.serverPath + c + i + ".png", this.LoadOneImage(!1, r, o))) : 0 == n ? this.sceneType > 0 ? this.LoadDragonBones(!0, i, o, !0) : this.LoadDragonBones(!0, i, o) : this.sceneType > 0 ? this.LoadDragonBones(!1, i, o, !0) : this.LoadDragonBones(!1, i, o) : (o.getComponent(cc.Sprite).spriteFrame = null, "q" != t && "P" != t || o.removeAllChildren())
                } catch (e) {
                    console.log(e)
                }
            },
            IsHasSecondLayer: function(e, t) {
                try {
                    if (void 0 == e) return -1;
                    for (var n = new Array, i = 0; i < e.length; i++) n[i] = parseInt(e[i]);
                    return 0 == n.length ? -1 : n.indexOf(parseInt(t))
                } catch (n) {
                    console.log(e, t), console.log(n)
                }
            },
            LevelHandle: function(e, t, n, i) {
                try {
                    if (0 != i) {
                        for (var o = "", a = 0; a < e.length; a++) o += e[a].zIndex;
                        o += "&";
                        for (var s = 0; s < t.length; s++) o += t[s].zIndex;
                        return o
                    }
                    for (var r = n.split("&"), c = r[0].split(""), h = 0; h < e.length; h++) e[h].zIndex = c[h];
                    c = r[1].split("");
                    for (var l = 0; l < t.length; l++) t[l].zIndex = c[l]
                } catch (e) {
                    console.log(e)
                }
            },
            LoadOneImage: function(e, t, n) {
                e ? cc.loader.loadRes(t, cc.SpriteFrame, function(e, t) {
                    try {
                        if (e) return void console.log(e);
                        n.getComponent(cc.Sprite).spriteFrame = t
                    } catch (e) {}
                }) : cc.loader.load(t, function(e, t) {
                    try {
                        if (e) return void console.log(e);
                        n.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t)
                    } catch (e) {}
                })
            },
            LoadDragonBones: function(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    o = "wing/" + t + "_ske",
                    a = "wing/" + t + "_tex",
                    s = "wing/" + t + "_tex";
                0 == e && (o = this.serverPath + o + ".json", a = this.serverPath + a + ".json", s = this.serverPath + s + ".png");
                var r = {
                    bone_ske: o,
                    bone_tex: a,
                    bone_tex_img: s
                };
                n.removeAllChildren(), n.getComponent(cc.Sprite).spriteFrame = null, e ? cc.loader.loadResArray([r.bone_ske, r.bone_tex, r.bone_tex_img], [dragonBones.DragonBonesAsset, dragonBones.DragonBonesAtlasAsset, cc.SpriteFrame], function(e, o) {
                    try {
                        if (e) return void console.log(e);
                        if ((1 == this.sceneType || 2 == this.sceneType) && this.curScene.selectName && this.curScene.selectName[this.curScene.selectName.length - 1] != t) return;
                        var a = new cc.Node,
                            s = a.addComponent(dragonBones.ArmatureDisplay);
                        (new dragonBones.DragonBonesAtlasAsset).texture = o[2], s.dragonAsset = o[0], s.dragonAtlasAsset = o[1], s.buildArmature("Armature", a), i ? (s.timeScale = 1, s.playAnimation("newAnimation", 0)) : s.timeScale = 0, n.addChild(a), n.y > 120 ? a.y = n.y - 271 : a.y = n.y - 248
                    } catch (e) {
                        console.log(e)
                    }
                }.bind(this)) : cc.loader.load([r.bone_ske, r.bone_tex, r.bone_tex_img], function(e, o) {
                    try {
                        if (e) return void console.log(e);
                        if ((1 == this.sceneType || 2 == this.sceneType) && this.curScene.selectName && this.curScene.selectName[this.curScene.selectName.length - 1] != t) return;
                        var a = new cc.Node,
                            s = a.addComponent(dragonBones.ArmatureDisplay),
                            c = new dragonBones.DragonBonesAsset;
                        c.dragonBonesJson = JSON.stringify(o.getContent(r.bone_ske));
                        var h = new dragonBones.DragonBonesAtlasAsset;
                        h.atlasJson = JSON.stringify(o.getContent(r.bone_tex)), h.texture = o.getContent(r.bone_tex_img), s.dragonAsset = c, s.dragonAtlasAsset = h, s.buildArmature("Armature", a), i ? (s.timeScale = 1, s.playAnimation("newAnimation", 0)) : s.timeScale = 0, n.addChild(a), n.y > 120 ? a.y = n.y - 271 : a.y = n.y - 248
                    } catch (e) {
                        console.log(e)
                    }
                }.bind(this))
            },
            InitPersonPos: function(e, t, n) {
                try {
                    2 == e ? (t[0].setPosition(0, 257), t[1].setPosition(1, 260), t[2].setPosition(0, 255), t[3].setPosition(1, 255), n[0].setPosition(-1, 267), t[4].setPosition(-1, 267), t[5].setPosition(-3, 20), n[1].setPosition(3, 29), t[6].setPosition(3, 29), t[7].setPosition(0, -124), n[3].setPosition(2, -31), t[8].setPosition(2, -31), t[9].setPosition(0, -227), t[10].setPosition(0, -320), t[11].setPosition(0, 248), t[12].setPosition(0, 213), t[13].setPosition(.5, 87), n[2].setPosition(-2, 273), t[14].setPosition(-2, 273), t[15].setPosition(0, 122)) : (t[0].setPosition(.5, 234), t[1].setPosition(.5, 235), t[2].setPosition(0, 237), t[3].setPosition(0, 233), n[0].setPosition(-1, 127), t[4].setPosition(-1, 127), t[5].setPosition(3, 49), n[1].setPosition(0, -10), t[6].setPosition(0, -10), t[7].setPosition(-1, -129), t[8].setPosition(2, -128), n[3].setPosition(5.5, -25), t[9].setPosition(5.5, -25), t[10].setPosition(0, -172), t[11].setPosition(0, -283), t[12].setPosition(0, 227), t[13].setPosition(3, 200), t[14].setPosition(0, 66), n[2].setPosition(1, 241), t[15].setPosition(1, 241), t[16].setPosition(0, 109))
                } catch (e) {
                    console.log(e)
                }
            }
        }, cc._RF.pop()
    }, {}],
    GameScene: [function(e, t, n) {
        "use strict";

        function i(e) {
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (e = o(e))) {
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
            var i, a, s = !0,
                r = !1;
            return {
                s: function() {
                    i = e[Symbol.iterator]()
                },
                n: function() {
                    var e = i.next();
                    return s = e.done, e
                },
                e: function(e) {
                    r = !0, a = e
                },
                f: function() {
                    try {
                        s || null == i.return || i.return()
                    } finally {
                        if (r) throw a
                    }
                }
            }
        }

        function o(e, t) {
            if (e) {
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
            }
        }

        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i
        }
        cc._RF.push(t, "c8cfdp6wYVB6LjTynxmZe5Q", "GameScene");
        var s = e("GameManager"),
            r = e("jpeg-js"),
            c = e("AdsManager");
        cc.Class({
            extends: cc.Component,
            properties: {
                singleSprite: cc.SpriteFrame,
                doubleSprite: cc.SpriteFrame,
                zIndexBtnsAnim: cc.Animation,
                mateSprite: cc.SpriteFrame,
                pkSprite: cc.SpriteFrame,
                mateAndPkPanel: cc.Node,
                person: cc.Node,
                refreshFrame: cc.SpriteFrame,
                girlFrame: cc.SpriteFrame,
                boyFrame: cc.SpriteFrame,
                firstScrollView: cc.ScrollView,
                secondScrollView: cc.ScrollView,
                shopScrollView: cc.ScrollView,
                saveDressUpPanel: cc.Node,
                saveScreenShotPanel: cc.Node,
                targetNode: cc.Node,
                camera: cc.Camera,
                sucRemind: cc.Node,
                saveDressupRemind: cc.Node,
                clearDressupPanel: cc.Node,
                settingPanel: cc.Node,
                animaImages: {
                    type: cc.SpriteFrame,
                    default: []
                },
                musicImage: cc.Sprite,
                musicImages: {
                    type: cc.SpriteFrame,
                    default: []
                },
                shopImages: {
                    type: cc.SpriteFrame,
                    default: []
                },
                generalRemind: cc.Node,
                record: cc.Sprite,
                recording: cc.SpriteFrame,
                recordStop: cc.SpriteFrame
            },
            onLoad: function() {
                if (s.curScene = this, s.sceneIndex = 2, s.HandleEventPerScene(null, null), 1 == s.personType) this.mateAndPkPanel.active = !1, this.person = cc.find("Canvas/person1"), cc.find("Canvas/person2").active = !1, cc.find("Canvas/person1").x = 0, cc.find("Canvas/midHolder/left/personTypeBtn").getComponent(cc.Sprite).spriteFrame = this.doubleSprite;
                else {
                    cc.find("Canvas/midHolder/left/personTypeBtn").getComponent(cc.Sprite).spriteFrame = this.singleSprite, this.isCanChangePerson = !0;
                    var e = cc.find("Canvas/holder/mateBtn");
                    s.isMateMode ? e.getComponent(cc.Sprite).spriteFrame = this.mateSprite : e.getComponent(cc.Sprite).spriteFrame = this.pkSprite, e.active = !0, this.choosePerson = 1, this.mateAndPkPanel.active = !1, 3 != s.isCreatePerson && (s.sceneType = 2, s.isCreatePerson = 2, s.isFromActivityBtn && (s.sceneType = 1, s.isCreatePerson = 1)), this.person = cc.find("Canvas/person1"), cc.find("Canvas/person2").active = !0, cc.find("Canvas/person1").x = -150, cc.find("Canvas/person2").x = 150, cc.find("Canvas/topHolder/left/photoBtn").active = !1, cc.find("Canvas/topHolder/right/saveBtn").active = !1
                }
            },
            onDestroy: function() {
                s.curScene = null
            },
            start: function() {
                if (s.isVideoPlaying = !1, s.fakeUnlockName = [], this.refreshFlag = !0, this.isShowScrollview = !0, this.curInnerType = 0, this.images = new Array, this.itemRemark = this.secondScrollView.content.getComponent("SecondItemRemark"), this.itemRemark.refreshFlag = !0, this.startHeight = this.secondScrollView.node.height, console.log(this.startHeight), null == s.imageMsg && (s.imageMsg = s.GetImageMsg()), this.InitPanelMsg(), this.targetThings = new Array, this.afterParts = new Array, this.levelArr1 = new Array, this.levelArr2 = new Array, this.selectLight = cc.find("Canvas/selectLight"), "tt" == s.channel ? (cc.find("Canvas/topHolder/left/recordBtn").active = !0, 1 == s.personType ? cc.find("Canvas/midHolder/right/checkupFaceBtn").active = !0 : cc.find("Canvas/midHolder/right/checkupFaceBtn").active = !1) : (cc.find("Canvas/topHolder/left/recordBtn").active = !1, cc.find("Canvas/midHolder/right/checkupFaceBtn").active = !1), cc.winSize.height / cc.winSize.width > 2.05) cc.find("Canvas/topHolder").getComponent(cc.Widget).top += 50;
                else if (cc.winSize.height / cc.winSize.width < 1.5) {
                    cc.find("Canvas/topHolder").getComponent(cc.Widget).top -= 50;
                    for (var e = cc.find("Canvas/topHolder").children, t = 0; t < 5; t++)
                        if (t < 2) {
                            e[t].getComponent(cc.Layout).spacingY = 5;
                            for (var n = e[t].children, i = 0; i < n.length; i++) "showBoxBtn" != n[i].name ? n[i].scale = 1 : n[i].scale = .9
                        }
                } else if (cc.winSize.height / cc.winSize.width < 1.7) {
                    cc.find("Canvas/topHolder").getComponent(cc.Widget).top -= 15;
                    for (var o = cc.find("Canvas/topHolder").children, a = 0; a < 5; a++)
                        if (a < 2) {
                            o[a].getComponent(cc.Layout).spacingY = 5;
                            for (var r = o[a].children, h = 0; h < r.length; h++) "showBoxBtn" != r[h].name ? r[h].scale = 1.2 : r[h].scale = .9
                        }
                } else "apk" != s.channel && (cc.find("Canvas/topHolder").getComponent(cc.Widget).top += 20);
                s.isHasAd && null == s.adsManager && (s.adsManager = new c, s.adsManager.AdInit()), cc.winSize.height / cc.winSize.width >= 2 && (this.saveScreenShotPanel.getChildByName("closeBtn").getComponent(cc.Widget).top += 80, this.saveScreenShotPanel.getChildByName("closeBtn1").getComponent(cc.Widget).top += 80);
                for (var l = this.person.children, d = 0; d < l.length; d++)
                    if ("body" == l[d].name) 1 == s.sceneType ? l[d].getComponent(cc.Sprite).spriteFrame = this.girlFrame : l[d].getComponent(cc.Sprite).spriteFrame = this.boyFrame;
                    else if ("hairAfter" == l[d].name) this.afterParts[0] = l[d];
                else if ("jacketAfter" == l[d].name) this.afterParts[1] = l[d];
                else if ("headwearAfter" == l[d].name) this.afterParts[2] = l[d];
                else if ("dressAfter" == l[d].name) this.afterParts[3] = l[d];
                else if ("level1" == l[d].name)
                    for (var u = l[d].children, p = 0; p < u.length; p++) this.levelArr1[p] = u[p], this.targetThings.push(u[p]);
                else if ("level2" == l[d].name)
                    for (var g = l[d].children, m = 0; m < g.length; m++) this.levelArr2[m] = g[m], this.targetThings.push(g[m]);
                else this.targetThings.push(l[d]);
                if (this.targetThings = s.SortByArray(this.targetThings, 0), this.LoadResources(), s.LevelHandle(this.levelArr1, this.levelArr2, s.personMsg.level, 0), s.InitPersonPos(s.sceneType, this.targetThings, this.afterParts), 2 == s.personType) {
                    this.person.setSiblingIndex(5), this.selectLight.x = -150, this.selectLight.active = !0, this.dressupScore = new Array, this.SimplifyPersonMsg();
                    for (var f = 0, v = Object.keys(s.personMsg); f < v.length; f++) {
                        var S = v[f];
                        if (!(S.length > 1)) {
                            var y = s.getPartScore(S, !1);
                            0 == s.isCreatePerson && "a" != S && "b" != S && "c" != S && "A" != S && "B" != S && "C" != S && (y = s.getPartScore(S, !0));
                            var w = {
                                name: S,
                                score: y
                            };
                            this.dressupScore.push(w)
                        }
                    }
                    this.sex_p1 = s.sceneType, this.personMsg_p1 = s.personMsg, this.targetThings_p1 = this.targetThings, this.afterParts_p1 = this.afterParts, this.levelArr1_p1 = this.levelArr1, this.levelArr2_p1 = this.levelArr2, this.dressupScore_p1 = this.dressupScore;
                    var C = s.defaultGirlDressUp;
                    if (this.personMsg_p2 = s.CopyObjectValue(C), this.sex_p2 = 1, s.isFromActivityBtn) {
                        var I = s.defaultBoyDressUp;
                        this.personMsg_p2 = s.CopyObjectValue(I), this.sex_p2 = 2
                    }
                    this.targetThings_p2 = new Array, this.afterParts_p2 = new Array, this.levelArr1_p2 = new Array, this.levelArr2_p2 = new Array, this.dressupScore_p2 = new Array;
                    for (var P = cc.find("Canvas/person2").children, A = 0; A < P.length; A++)
                        if ("body" == P[A].name) 1 == this.sex_p2 ? P[A].getComponent(cc.Sprite).spriteFrame = this.girlFrame : P[A].getComponent(cc.Sprite).spriteFrame = this.boyFrame;
                        else if ("hairAfter" == P[A].name) this.afterParts_p2[0] = P[A];
                    else if ("jacketAfter" == P[A].name) this.afterParts_p2[1] = P[A];
                    else if ("headwearAfter" == P[A].name) this.afterParts_p2[2] = P[A];
                    else if ("dressAfter" == P[A].name) this.afterParts_p2[3] = P[A];
                    else if ("level1" == P[A].name)
                        for (var b = P[A].children, M = 0; M < b.length; M++) this.levelArr1_p2[M] = b[M], this.targetThings_p2.push(b[M]);
                    else if ("level2" == P[A].name)
                        for (var T = P[A].children, N = 0; N < T.length; N++) this.levelArr2_p2[N] = T[N], this.targetThings_p2.push(T[N]);
                    else this.targetThings_p2.push(P[A]);
                    this.targetThings_p2 = s.SortByArray(this.targetThings_p2, this.sex_p2), s.InitPerson(this.personMsg_p2, this.targetThings_p2, this.afterParts_p2), s.LevelHandle(this.levelArr1_p2, this.levelArr2_p2, this.personMsg_p2.level, 0), s.InitPersonPos(this.sex_p2, this.targetThings_p2, this.afterParts_p2);
                    for (var B = 0, k = Object.keys(this.personMsg_p2); B < k.length; B++) {
                        var x = k[B];
                        if (!(x.length > 1)) {
                            var R = {
                                name: x,
                                score: s.getPartScore(x, !1)
                            };
                            this.dressupScore_p2.push(R)
                        }
                    }
                }
                var F = cc.find("Canvas/topHolder/right/sexBtn");
                F.getComponent(cc.Sprite).spriteFrame = this.animaImages[s.sceneType - 1];
                var O = F.getComponent(cc.Button);
                O.normalSprite = this.animaImages[s.sceneType - 1], O.pressedSprite = O.hoverSprite = O.disabledSprite = this.animaImages[s.sceneType - 1 + 2], F = this.musicImage.node;
                var _ = s.musicOn ? 0 : 1;
                (O = F.getComponent(cc.Button)).normalSprite = this.musicImages[_], O.pressedSprite = O.hoverSprite = O.disabledSprite = this.musicImages[_ + 2], (F = cc.find("Canvas/midHolder/right/shopBtn/image")).getComponent(cc.Sprite).spriteFrame = this.shopImages[s.sceneType - 1];
                if (s.isHasAd) {
                    if (this.initBottom = 0, s.isShowBanner) {
                        if (1 == s.isShowNative)
                            if ("oppo" == s.channel || "vivo" == s.channel)
                                if ("oppo" == s.channel && 0 == s.bannerFlag) {
                                    var E = 60 - Math.floor((s.GetNowTime() - s.adsManager.startTime) / 1e3);
                                    E > 1 ? this.scheduleOnce(function() {
                                        s.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner), this.schedule(function() {
                                            try {
                                                s.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner)
                                            } catch (e) {}
                                        }.bind(this), 30)
                                    }.bind(this), E) : (s.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner), this.schedule(function() {
                                        try {
                                            s.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner)
                                        } catch (e) {}
                                    }.bind(this), 30))
                                } else s.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner), "oppo" == s.channel ? this.schedule(function() {
                                    try {
                                        s.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner)
                                    } catch (e) {}
                                }.bind(this), 30) : "vivo" == s.channel && this.schedule(function() {
                                    try {
                                        0 == this.nativeControl.nativeBannerBtn.node.active && s.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner)
                                    } catch (e) {}
                                }.bind(this), 10);
                        else s.adsManager.ShowNativeAd(1, 2, this.nativeControl.ShowNativeBanner);
                        else "oppo" == s.channel || "vivo" == s.channel ? (s.adsManager.ShowBanner(), this.schedule(function() {
                            s.adsManager.ShowBanner()
                        }, 30)) : s.adsManager.ShowBanner();
                        if ("qq" == s.channel || "vivo" == s.channel)
                            if (cc.winSize.height / cc.winSize.width < 1.5) {
                                var H = this.startHeight - 100;
                                this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = 0, this.secondScrollView.node.height = H, this.person.scale = .67, this.person.y -= 60, 2 == s.personType && (cc.find("Canvas/person2").scale = .67), 2 == s.personType && (cc.find("Canvas/person2").y -= 60), this.shopScrollView.node.parent.y -= 150, this.shopScrollView.node.parent.getChildByName("splash").y += 150
                            } else if (cc.winSize.height / cc.winSize.width < 1.7) {
                            var L = this.startHeight - 100;
                            this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = 0, this.secondScrollView.node.height = L, this.person.scale = .9, this.person.y -= 50, 2 == s.personType && (cc.find("Canvas/person2").scale = .9), 2 == s.personType && (cc.find("Canvas/person2").y -= 50), this.shopScrollView.node.parent.y -= 50, this.shopScrollView.node.parent.getChildByName("splash").y += 50
                        } else this.firstScrollView.node.parent.getComponent(cc.Widget).bottom += 120;
                        else if ("oppo" == s.channel && cc.winSize.height / cc.winSize.width < 1.7) {
                            var G = this.startHeight - 100;
                            this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = 0, this.secondScrollView.node.height = G, this.person.scale = .9, this.person.y -= 50, 2 == s.personType && (cc.find("Canvas/person2").scale = .9, cc.find("Canvas/person2").y -= 50), cc.winSize.height / cc.winSize.width < 1.5 && (this.person.scale = .65, 2 == s.personType && (cc.find("Canvas/person2").scale = .65)), cc.winSize.height / cc.winSize.width < 1.5 ? (this.shopScrollView.node.parent.y -= 150, this.shopScrollView.node.parent.getChildByName("splash").y += 150) : cc.winSize.height / cc.winSize.width < 1.7 && (this.shopScrollView.node.parent.y -= 50, this.shopScrollView.node.parent.getChildByName("splash").y += 50), this.initBottom = 0
                        } else this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = 120, this.initBottom = 120;
                        cc.winSize.height / cc.winSize.width < 2 && (this.shopScrollView.node.parent.y += 20, this.shopScrollView.node.parent.getChildByName("splash").y -= 20, this.person.y += 50, 2 == s.personType && (cc.find("Canvas/person2").y += 50))
                    } else if (s.adsManager.HideBanner(), cc.winSize.height / cc.winSize.width < 1.6) {
                        var V = this.startHeight - 120;
                        this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = -120, this.secondScrollView.node.height = V, this.initBottom = -120, this.person.scale = .75, this.person.y -= 60, 2 == s.personType && (cc.find("Canvas/person2").scale = .75), 2 == s.personType && (cc.find("Canvas/person2").y -= 60), this.shopScrollView.node.parent.y -= 150, this.shopScrollView.node.parent.getChildByName("splash").y += 150
                    } else cc.winSize.height / cc.winSize.width < 1.7 ? (this.shopScrollView.node.parent.y -= 50, this.shopScrollView.node.parent.getChildByName("splash").y += 50, this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = 0) : cc.winSize.height / cc.winSize.width < 2 ? (this.shopScrollView.node.parent.y += 20, this.shopScrollView.node.parent.getChildByName("splash").y -= 20, this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = 0) : this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = 0;
                    "tt" != s.channel && "oppo" != s.channel && "qq" != s.channel && s.adsManager.ShowInterstitial(-1), "qq" == s.channel || "wx" == s.channel ? cc.find("Canvas/topHolder/left/showBoxBtn").active = !0 : cc.find("Canvas/topHolder/left/showBoxBtn").active = !1, cc.find("Canvas/midHolder/right/shopBtn").getComponent(cc.Animation).play("shake")
                } else "wx" == s.channel ? cc.find("Canvas/topHolder/left/showBoxBtn").active = !0 : cc.find("Canvas/topHolder/left/showBoxBtn").active = !1;
                cc.find("Canvas/midHolder").getComponent(cc.Widget).bottom += this.firstScrollView.node.parent.getComponent(cc.Widget).bottom;
                var D = cc.find("Canvas/topHolder/left/homeBtn").scale / 1.25;
                cc.find("Canvas/midHolder/left").scale = D, cc.find("Canvas/midHolder/right").scale = D, s.isHasAd && (this.shopScrollView.node.height = cc.winSize.height - (cc.winSize.height / 2 - this.shopScrollView.node.y - this.shopScrollView.node.parent.y)), this.startPosY = this.person.y, void 0 == s.isFirst && (s.isFirst = new Array), 2 == s.personType && (1 == this.sex_p1 && (cc.find("Canvas/person1").y = this.startPosY - 20), 1 == this.sex_p2 && (cc.find("Canvas/person2").y = this.startPosY - 20)), "4399" == s.channel && (cc.find("holder/saveBtn", this.mateAndPkPanel).active = !1, cc.find("holder/shareBtn", this.mateAndPkPanel).x = 0)
            },
            resetPerson: function() {
                s.fakeUnlockName = [], this.refreshFlag = !0, this.isShowScrollview = !0, this.curInnerType = 0, this.images = new Array, this.itemRemark = this.secondScrollView.content.getComponent("SecondItemRemark"), this.itemRemark.refreshFlag = !0, this.InitPanelMsg(), this.targetThings = new Array, this.afterParts = new Array, this.levelArr1 = new Array, this.levelArr2 = new Array;
                for (var e = this.person.children, t = 0; t < e.length; t++)
                    if ("body" == e[t].name) 1 == s.sceneType ? e[t].getComponent(cc.Sprite).spriteFrame = this.girlFrame : e[t].getComponent(cc.Sprite).spriteFrame = this.boyFrame;
                    else if ("hairAfter" == e[t].name) e[t].getComponent(cc.Sprite).spriteFrame = null, this.afterParts[0] = e[t];
                else if ("jacketAfter" == e[t].name) e[t].getComponent(cc.Sprite).spriteFrame = null, this.afterParts[1] = e[t];
                else if ("headwearAfter" == e[t].name) e[t].getComponent(cc.Sprite).spriteFrame = null, this.afterParts[2] = e[t];
                else if ("dressAfter" == e[t].name) e[t].getComponent(cc.Sprite).spriteFrame = null, this.afterParts[3] = e[t];
                else if ("level1" == e[t].name)
                    for (var n = e[t].children, i = 0; i < n.length; i++) n[i].getComponent(cc.Sprite).spriteFrame && (n[i].getComponent(cc.Sprite).spriteFrame = null), this.levelArr1[i] = n[i], this.targetThings.push(n[i]);
                else if ("level2" == e[t].name)
                    for (var o = e[t].children, a = 0; a < o.length; a++) o[a].getComponent(cc.Sprite).spriteFrame && (o[a].getComponent(cc.Sprite).spriteFrame = null), this.levelArr2[a] = o[a], this.targetThings.push(o[a]);
                else e[t].getComponent(cc.Sprite).spriteFrame && (e[t].getComponent(cc.Sprite).spriteFrame = null), this.targetThings.push(e[t]);
                if (this.targetThings = s.SortByArray(this.targetThings, 0), this.LoadResources(), s.LevelHandle(this.levelArr1, this.levelArr2, s.personMsg.level, 0), s.InitPersonPos(s.sceneType, this.targetThings, this.afterParts), 2 == s.personType) {
                    this.dressupScore = new Array;
                    for (var r = 0, c = Object.keys(s.personMsg); r < c.length; r++) {
                        var h = c[r];
                        if (!(h.length > 1)) {
                            var l = {
                                name: h,
                                score: s.getPartScore(h, !1)
                            };
                            this.dressupScore.push(l)
                        }
                    }
                    1 == this.choosePerson ? (this.sex_p1 = s.sceneType, this.personMsg_p1 = s.personMsg, this.targetThings_p1 = this.targetThings, this.afterParts_p1 = this.afterParts, this.levelArr1_p1 = this.levelArr1, this.levelArr2_p1 = this.levelArr2, this.dressupScore_p1 = this.dressupScore) : (this.sex_p2 = s.sceneType, this.personMsg_p2 = s.personMsg, this.targetThings_p2 = this.targetThings, this.afterParts_p2 = this.afterParts, this.levelArr1_p2 = this.levelArr1, this.levelArr2_p2 = this.levelArr2, this.dressupScore_p2 = this.dressupScore), 1 == s.sceneType ? this.person.y = this.startPosY - 20 : this.person.y = this.startPosY
                }
                var d = cc.find("Canvas/topHolder/right/sexBtn");
                d.getComponent(cc.Sprite).spriteFrame = this.animaImages[s.sceneType - 1];
                var u = d.getComponent(cc.Button);
                u.normalSprite = this.animaImages[s.sceneType - 1], u.pressedSprite = u.hoverSprite = u.disabledSprite = this.animaImages[s.sceneType - 1 + 2], (d = cc.find("Canvas/midHolder/right/shopBtn/image")).getComponent(cc.Sprite).spriteFrame = this.shopImages[s.sceneType - 1]
            },
            changePerson: function(e, t) {
                if (2 == s.personType) {
                    if (parseInt(t) == this.choosePerson || this.mateAndPkPanel.active || !this.isCanChangePerson) return;
                    if (this.isCanChangePerson = !1, this.scheduleOnce(function() {
                            this.isCanChangePerson = !0
                        }.bind(this), .3), 1 == parseInt(t)) {
                        this.choosePerson = 1, this.sex_p2 = s.sceneType, this.personMsg_p2 = s.personMsg, this.targetThings_p2 = this.targetThings, this.afterParts_p2 = this.afterParts, this.levelArr1_p2 = this.levelArr1, this.levelArr2_p2 = this.levelArr2, this.dressupScore_p2 = this.dressupScore, this.person = cc.find("Canvas/person1"), s.sceneType = this.sex_p1, s.personMsg = this.personMsg_p1, this.targetThings = this.targetThings_p1, this.afterParts = this.afterParts_p1, this.levelArr1 = this.levelArr1_p1, this.levelArr2 = this.levelArr2_p1, this.dressupScore = this.dressupScore_p1, this.person.setSiblingIndex(5), 1 == s.sceneType ? this.person.y = this.startPosY - 20 : this.person.y = this.startPosY, 1 == s.sceneType ? (s.itemName = s.CopyArrValue(s.girlItemName), s.defaultDressUp = s.CopyObjectValue(s.defaultGirlDressUp)) : 2 == s.sceneType && (s.itemName = s.CopyArrValue(s.boyItemName), s.defaultDressUp = s.CopyObjectValue(s.defaultBoyDressUp)), s.fakeUnlockName = [], this.refreshFlag = !0, this.isShowScrollview = !0, this.curInnerType = 0, this.images = new Array, this.itemRemark = this.secondScrollView.content.getComponent("SecondItemRemark"), this.itemRemark.refreshFlag = !0, this.LoadResources();
                        var n = cc.find("Canvas/topHolder/right/sexBtn");
                        n.getComponent(cc.Sprite).spriteFrame = this.animaImages[s.sceneType - 1];
                        var i = n.getComponent(cc.Button);
                        i.normalSprite = this.animaImages[s.sceneType - 1], i.pressedSprite = i.hoverSprite = i.disabledSprite = this.animaImages[s.sceneType - 1 + 2], n = this.musicImage.node;
                        var o = s.musicOn ? 0 : 1;
                        (i = n.getComponent(cc.Button)).normalSprite = this.musicImages[o], i.pressedSprite = i.hoverSprite = i.disabledSprite = this.musicImages[o + 2], (n = cc.find("Canvas/midHolder/right/shopBtn/image")).getComponent(cc.Sprite).spriteFrame = this.shopImages[s.sceneType - 1], this.selectLight.x = -150
                    } else {
                        this.choosePerson = 2, this.sex_p1 = s.sceneType, this.personMsg_p1 = s.personMsg, this.targetThings_p1 = this.targetThings, this.afterParts_p1 = this.afterParts, this.levelArr1_p1 = this.levelArr1, this.levelArr2_p1 = this.levelArr2, this.dressupScore_p1 = this.dressupScore, this.person = cc.find("Canvas/person2"), s.sceneType = this.sex_p2, s.personMsg = this.personMsg_p2, this.targetThings = this.targetThings_p2, this.afterParts = this.afterParts_p2, this.levelArr1 = this.levelArr1_p2, this.levelArr2 = this.levelArr2_p2, this.dressupScore = this.dressupScore_p2, this.person.setSiblingIndex(5), 1 == s.sceneType ? this.person.y = this.startPosY - 20 : this.person.y = this.startPosY, 1 == s.sceneType ? (s.itemName = s.CopyArrValue(s.girlItemName), s.defaultDressUp = s.CopyObjectValue(s.defaultGirlDressUp)) : 2 == s.sceneType && (s.itemName = s.CopyArrValue(s.boyItemName), s.defaultDressUp = s.CopyObjectValue(s.defaultBoyDressUp)), s.fakeUnlockName = [], this.refreshFlag = !0, this.isShowScrollview = !0, this.curInnerType = 0, this.images = new Array, this.itemRemark = this.secondScrollView.content.getComponent("SecondItemRemark"), this.itemRemark.refreshFlag = !0, this.LoadResources();
                        var a = cc.find("Canvas/topHolder/right/sexBtn");
                        a.getComponent(cc.Sprite).spriteFrame = this.animaImages[s.sceneType - 1];
                        var r = a.getComponent(cc.Button);
                        r.normalSprite = this.animaImages[s.sceneType - 1], r.pressedSprite = r.hoverSprite = r.disabledSprite = this.animaImages[s.sceneType - 1 + 2], a = this.musicImage.node;
                        var c = s.musicOn ? 0 : 1;
                        (r = a.getComponent(cc.Button)).normalSprite = this.musicImages[c], r.pressedSprite = r.hoverSprite = r.disabledSprite = this.musicImages[c + 2], (a = cc.find("Canvas/midHolder/right/shopBtn/image")).getComponent(cc.Sprite).spriteFrame = this.shopImages[s.sceneType - 1], this.selectLight.x = 150
                    }
                }
            },
            ShowMateAndPkPanel: function(e, t) {
                if (2 == s.personType) {
                    s.audioManager && s.audioManager.PlayClickSound(), e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
                        e.target.getComponent(cc.Button).interactable = !0
                    }, .3), cc.find("Canvas/mateAndPkPanel/holder").active = !1, cc.find("Canvas/mateAndPkPanel/mateSprite").active = !1, cc.find("Canvas/mateAndPkPanel/victory/sprite").active = !1, cc.find("Canvas/mateAndPkPanel/fail/sprite").active = !1, cc.find("Canvas/mateAndPkPanel/bg/particle1").active = !1, cc.find("Canvas/mateAndPkPanel/bg/particle2").active = !1, cc.find("Canvas/mateAndPkPanel/pingju").children[0].active = !1, cc.find("Canvas/mateAndPkPanel/pingju").children[1].active = !1, cc.find("Canvas/mateAndPkPanel/mateSprite").getComponent(cc.Sprite).spriteFrame = null, "oppo" != s.channel && "vivo" != s.channel && "apk" != s.channel || (cc.find("Canvas/mateAndPkPanel/holder/shareBtn").active = !1, cc.find("Canvas/mateAndPkPanel/holder/saveBtn").x = 0);
                    var n = cc.find("Canvas/person1"),
                        o = cc.find("Canvas/person2");
                    n.parent = this.mateAndPkPanel, n.position = cc.v3(-150, 0), o.parent = this.mateAndPkPanel, o.position = cc.v3(150, 0), n.setSiblingIndex(1), o.setSiblingIndex(2), 1 == this.choosePerson ? (this.sex_p1 = s.sceneType, this.personMsg_p1 = s.personMsg, this.targetThings_p1 = this.targetThings, this.afterParts_p1 = this.afterParts, this.levelArr1_p1 = this.levelArr1, this.levelArr2_p1 = this.levelArr2, this.dressupScore_p1 = this.dressupScore) : (this.sex_p2 = s.sceneType, this.personMsg_p2 = s.personMsg, this.targetThings_p2 = this.targetThings, this.afterParts_p2 = this.afterParts, this.levelArr1_p2 = this.levelArr1, this.levelArr2_p2 = this.levelArr2, this.dressupScore_p2 = this.dressupScore), 1 == this.sex_p1 && (n.y -= 20), 1 == this.sex_p2 && (o.y -= 20);
                    var a, r = 0,
                        c = i(this.dressupScore_p1);
                    try {
                        for (c.s(); !(a = c.n()).done;) {
                            var h = a.value;
                            r += h.score
                        }
                    } catch (e) {
                        c.e(e)
                    } finally {
                        c.f()
                    }
                    var l, d = 0,
                        u = i(this.dressupScore_p2);
                    try {
                        for (u.s(); !(l = u.n()).done;) {
                            var p = l.value;
                            d += p.score
                        }
                    } catch (e) {
                        u.e(e)
                    } finally {
                        u.f()
                    }
                    r > d ? (n.setSiblingIndex(2), cc.find("Canvas/mateAndPkPanel/victory").x = -150, cc.find("Canvas/mateAndPkPanel/fail").x = 150) : r < d && (o.setSiblingIndex(2), cc.find("Canvas/mateAndPkPanel/victory").x = 150, cc.find("Canvas/mateAndPkPanel/fail").x = -150);
                    var g = cc.find("Canvas/mateAndPkPanel/kuang1"),
                        m = cc.find("Canvas/mateAndPkPanel/kuang2");
                    g.active = !0, g.x = -150, g.y = 400, g.getComponentInChildren(cc.Label).string = 0, m.active = !0, m.x = 150, m.y = 400, m.getComponentInChildren(cc.Label).string = 0, cc.winSize.height / cc.winSize.width < 1.5 && (g.y -= 70, m.y -= 70, cc.find("Canvas/mateAndPkPanel/victory").y -= 70, cc.find("Canvas/mateAndPkPanel/fail").y -= 70);
                    var f = this;
                    this.callBack = function() {
                        var e = parseInt(g.getComponentInChildren(cc.Label).string),
                            t = parseInt(m.getComponentInChildren(cc.Label).string);
                        e == r && t == d ? (cc.find("Canvas/mateAndPkPanel/holder").active = !0, r > d ? (cc.find("Canvas/mateAndPkPanel/victory").getComponent(cc.Animation).play(), cc.find("Canvas/mateAndPkPanel/fail").getComponent(cc.Animation).play(), f.scheduleOnce(function() {
                            g.getComponent(cc.Animation).play(), cc.find("Canvas/mateAndPkPanel/bg/particle1").active = !0
                        }, .35)) : r < d ? (cc.find("Canvas/mateAndPkPanel/victory").getComponent(cc.Animation).play(), cc.find("Canvas/mateAndPkPanel/fail").getComponent(cc.Animation).play(), f.scheduleOnce(function() {
                            m.getComponent(cc.Animation).play(), cc.find("Canvas/mateAndPkPanel/bg/particle2").active = !0
                        }, .35)) : f.scheduleOnce(function() {
                            cc.find("Canvas/mateAndPkPanel/pingju").getComponent(cc.Animation).play()
                        }, .2), f.unschedule(f.callBack)) : (e < r && (g.getComponentInChildren(cc.Label).string = ++e), t < d && (m.getComponentInChildren(cc.Label).string = ++t))
                    }, f.schedule(f.callBack, .015, cc.repeatForever, .5), this.mateAndPkPanel.active = !0
                }
            },
            BtnScreenShotByMate: function(e) {
                s.audioManager && s.audioManager.PlayPhotoSound(), e.target.getComponent(cc.Button).interactable = !1, s.picData = null, s.shotImage = null, cc.find("Canvas/mateAndPkPanel/holder/closeBtn").getComponent(cc.Button).interactable = !1, cc.find("Canvas/mateAndPkPanel/holder/shareBtn").getComponent(cc.Button).interactable = !1, s.shotImage = s.ScreenShot(this.camera, this.targetNode);
                var t = this;
                t.schedule(function n() {
                    null != s.shotImage && (e.target.getComponent(cc.Button).interactable = !0, cc.find("Canvas/mateAndPkPanel/holder/closeBtn").getComponent(cc.Button).interactable = !0, cc.find("Canvas/mateAndPkPanel/holder/shareBtn").getComponent(cc.Button).interactable = !0, cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os && "ios" == s.channel ? s.SaveImageToPhoto(this.SaveToPhotoSuc, this.HideScreenShotPanelBtn, this.ShowScreenShotPanelBtn) : s.SaveImageToPhoto(this.SaveToPhotoSuc), t.unschedule(n))
                }, .5, cc.repeatForever, .5)
            },
            BtnSetZIndexBtns: function(e, t) {
                s.audioManager && s.audioManager.PlayClickSound(), cc.find("Canvas/midHolder/left/zIndexBtns").getComponent(cc.Button).interactable = !1, cc.find("Canvas/midHolder/left/zIndexBtns/buttom/hide").getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
                    cc.find("Canvas/midHolder/left/zIndexBtns").getComponent(cc.Button).interactable = !0, cc.find("Canvas/midHolder/left/zIndexBtns/buttom/hide").getComponent(cc.Button).interactable = !0
                }, .4), 1 == parseInt(t) ? this.zIndexBtnsAnim.play("showZIndexBtns") : this.zIndexBtnsAnim.play("hideZIndexBtns")
            },
            ChangePersonTypeBtn: function(e) {
                e.target.getComponent(cc.Button).interactable = !1, 1 == s.personType ? (s.isMateMode = !1, s.personType = 2, s.isCreatePerson = 3) : (s.personType = 1, s.isCreatePerson = 3, s.isCreatNewImageMsg = !0), cc.director.loadScene("GameScene")
            },
            UpdateRecordBtn: function() {
                s.recorderFlag ? this.record.spriteFrame = this.recording : this.record.spriteFrame = this.recordStop
            },
            RecordFail: function() {
                s.curScene.generalRemind.active = !0, s.curScene.generalRemind.getComponent("GeneralRemind").InitPanel(1), s.ShowPanelHandle()
            },
            BtnRecorderClick: function() {
                s.audioManager && s.audioManager.PlayClickSound(), s.RecordHandle(this.StatisticsRecord, this.RecordFail)
            },
            StatisticsRecord: function(e) {},
            InitPanelMsg: function() {
                1 == s.isCreatePerson ? s.personMsg = s.CopyObjectValue(s.defaultGirlDressUp) : 2 == s.isCreatePerson ? s.personMsg = s.CopyObjectValue(s.defaultBoyDressUp) : 0 == s.isCreatePerson ? s.personMsg = s.CopyObjectValue(s.imageMsg[s.curEditImageIndex]) : 3 == s.isCreatePerson && (s.isCreatePerson = 0), s.sceneType = s.personMsg.sex, 1 == s.sceneType ? (s.itemName = s.CopyArrValue(s.girlItemName), s.defaultDressUp = s.CopyObjectValue(s.defaultGirlDressUp)) : 2 == s.sceneType && (s.itemName = s.CopyArrValue(s.boyItemName), s.defaultDressUp = s.CopyObjectValue(s.defaultBoyDressUp))
            },
            LoadResources: function() {
                cc.loader.loadRes("firstItem/firstItem", cc.SpriteAtlas, function(e, t) {
                    try {
                        if (e) return void console.log(e);
                        var n = t.getSpriteFrames();
                        n = s.SortArray(n, 0), 2 == s.sceneType && (n[9] = n[n.length - 1], n.splice(8, 1)), n.splice(n.length - 1, 1), this.firstFrames = n, this.images.length > 0 && (this.firstScrollView.content.getComponent("FirstItemRemark").InitScrollView(n), this.itemRemark.LoadData(this.images[0]))
                    } catch (e) {}
                }.bind(this));
                var e = s.pathRootName + "/girl";
                2 == s.sceneType && (e = s.pathRootName + "/boy"), cc.loader.loadRes(e, function(e, t) {
                    try {
                        if (e) return void console.log(e);
                        var n = t.json.list;
                        1 == s.sceneType ? s.curType = "a" : 2 == s.sceneType && (s.curType = "A");
                        for (var i = 0; i < n.length; i++) {
                            var o = n[i].type.charCodeAt() - s.curType.charCodeAt();
                            void 0 == this.images[o] && (this.images[o] = new Array), this.images[o].push(n[i])
                        }
                        this.firstFrames && (this.firstScrollView.content.getComponent("FirstItemRemark").InitScrollView(this.firstFrames), this.itemRemark.LoadData(this.images[0]))
                    } catch (e) {}
                }.bind(this)), s.otherGirlMsg && s.otherBoyMsg && (1 == s.sceneType ? s.otherMsg = s.CopyObjectValue(s.otherGirlMsg) : s.otherMsg = s.CopyObjectValue(s.otherBoyMsg), s.InitPerson(s.personMsg, this.targetThings, this.afterParts))
            },
            PickUpShopFreeMsg: function(e) {
                try {
                    for (var t = new Array, n = 0, i = 0; i < e.length; i++)
                        if (void 0 == e[i].flag) t[n++] = e[i];
                        else {
                            var o;
                            if (1 == (o = e[i].flag.substr(e[i].flag.length - 1, 1))) t[n++] = e[i];
                            else if (2 == o) {
                                var a = e[i].flag.substr(0, e[i].flag.length - 1),
                                    r = this.PickUpShopMsg(a),
                                    c = "s" + a.substr(0, a.length - 1),
                                    h = s.GetItemLockFlag(c);
                                r >= 0 && h >= s.shopMsg[r].videoNum && (t[n++] = e[i])
                            } else 3 == o && (t[n++] = e[i])
                        } return t
                } catch (e) {
                    console.log(e)
                }
            },
            PickUpShopMsg: function(e) {
                for (var t = -1, n = 0; n < s.shopMsg.length; n++) s.shopMsg[n].name == e && (t = n);
                return t
            },
            SimplifyPersonMsg: function() {
                for (var e in s.personMsg) null == s.personMsg[e] && delete s.personMsg[e]
            },
            SaveHistoryMsg: function() {
                this.SimplifyPersonMsg(), s.SetPersonMsg(s.sceneType)
            },
            SynPersonMsg: function(e, t, n, i, o) {
                for (var a = 0; a < t.length; a++)
                    if (0 == a || 4 == a || 5 == a)
                        for (var r = t[a].children, c = n[a].children, h = 0; h < r.length; h++) c[h].getComponent(cc.Sprite).spriteFrame = r[h].getComponent(cc.Sprite).spriteFrame, c[h].color = r[h].color;
                    else if (16 == a)
                    for (var l = t[a].children, d = n[a].children, u = 0; u < l.length; u++) d[u].color = l[u].color;
                else t[a].getComponent(cc.Sprite) && (n[a].getComponent(cc.Sprite).spriteFrame = t[a].getComponent(cc.Sprite).spriteFrame);
                i ? (s.imageMsg[e] = s.CopyObjectValue(s.personMsg), o.getComponent(cc.Sprite).spriteFrame = this.hand.getComponent(cc.Sprite).spriteFrame) : (s.personMsg = s.CopyObjectValue(s.imageMsg[e]), this.hand.getComponent(cc.Sprite).spriteFrame = o.getComponent(cc.Sprite).spriteFrame)
            },
            BtnImageClick: function(e) {
                0 != this.curInnerType && (this.firstScrollView.content.children[this.curInnerType - 1].getComponent("FirstItem").selectNode.active = !1, this.curInnerType = 0, s.curType = 0, e.target.children[0].active = !0, this.secondScrollView.node.active = !1, this.imageScrollView.node.active = !0)
            },
            BtnSaveToImage: function() {
                var e = this.imageItemRemark.curIndex,
                    t = this.imageItemRemark.node.children[e].getComponent("ImageItem").person.getComponent("Person");
                this.SynPersonMsg(e, this.targetThings, t.targetThings, !0, t.hand)
            },
            BtnClosePanel: function(e) {
                if (s.audioManager && s.audioManager.PlayClickSound(), 0 == this.saveScreenShotPanel.active ? s.HidePanelHandle(e.target.parent.name) : (this.person.y = this.startPosY, 2 == s.personType && (cc.find("Canvas/person1").y = this.startPosY, cc.find("Canvas/person2").y = this.startPosY), this.saveScreenShotPanel.getChildByName("shareVideoBtn").getComponent(cc.Animation).stop("scale"), s.isSupportPush && s.pushCtl && s.pushCtl.HideOneCol()), "holder" == e.target.parent.name) {
                    if (2 == s.personType && "mateAndPkPanel" == e.target.parent.parent.name) {
                        var t = cc.find("Canvas/mateAndPkPanel/kuang1"),
                            n = cc.find("Canvas/mateAndPkPanel/kuang2");
                        t.getComponent(cc.Animation).stop(), n.getComponent(cc.Animation).stop(), t.getChildByName("light").active = !1, n.getChildByName("light").active = !1;
                        var i = cc.find("Canvas/mateAndPkPanel/person1"),
                            o = cc.find("Canvas/mateAndPkPanel/person2");
                        i.parent = cc.find("Canvas"), i.position = cc.v3(-150, this.startPosY), o.parent = cc.find("Canvas"), o.position = cc.v3(150, this.startPosY), i.setSiblingIndex(4), o.setSiblingIndex(5), 1 == this.sex_p1 && (i.y -= 20), 1 == this.sex_p2 && (o.y -= 20), 1 == this.choosePerson && i.setSiblingIndex(5)
                    }
                    e.target.parent.parent.active = !1
                } else e.target.parent.active = !1;
                "wx" == s.channel && s.HidePanelHandle()
            },
            UpdatePersonMsg: function(e, t, n, o, a, r) {
                var c = !1,
                    h = [],
                    l = "a";
                2 == s.sceneType && (l = "A");
                var d = "",
                    u = t.charCodeAt() - l.charCodeAt();
                0 == e && (c = !0);
                var p = !0;
                if ("e" == t || "E" == t || "O" == t || "p" == t || "G" == t || "g" == t || "j" == t || "I" == t) {
                    var g = 0,
                        m = "";
                    "e" == t ? (g = 0, d = "other/girl/hair/", m = "hair") : "E" == t ? (g = 0, d = "other/boy/hair/", m = "hair") : "O" == t ? (g = 2, d = "other/boy/headwear/", m = "headwear") : "p" == t ? (g = 2, d = "other/girl/headwear/", m = "headwear") : "g" == t ? (g = 1, d = "other/girl/jacket/", m = "jacket") : "G" == t ? (g = 1, d = "other/boy/jacket/", m = "jacket") : "j" == t ? (g = 3, d = "other/girl/dress/", m = "dress") : "I" == t && (g = 3, d = "other/boy/dress/", m = "dress"), h = s.otherMsg[m];
                    var f = s.IsHasSecondLayer(h, a); - 1 == f ? this.afterParts[g].getComponent(cc.Sprite).spriteFrame = null : c ? this.afterParts[g].getComponent(cc.Sprite).spriteFrame = null : ("0" == h[f].toString().substr(0, 1) && (p = !1), d += a, 0 == o ? s.LoadOneImage(!0, d, this.afterParts[g]) : (d = s.serverPath + d + ".png", s.LoadOneImage(!1, d, this.afterParts[g])))
                }
                if (0 == o && "q" != t && "P" != t || 0 != e && (e = 3), 0 == e) s.personMsg[t] = null, c = !0, this.targetThings[u].getComponent(cc.Sprite).spriteFrame = null, "q" != t && "P" != t || this.targetThings[u].removeAllChildren();
                else if (1 == e) this.targetThings[u].getComponent(cc.Sprite).spriteFrame = p ? n : null;
                else if (2 == e || 3 == e)
                    if (p) {
                        var v = s.GetPathByType(t);
                        ("A" == t && parseInt(a) <= 81 || "B" == t && parseInt(a) <= 61 || "C" == t && parseInt(a) <= 66 || "D" == t && parseInt(a) <= 26 || "L" == t && parseInt(a) <= 59 || "O" == t && parseInt(a) <= 66 || "N" == t && parseInt(a) <= 57) && (v = v.replace("boy", "girl")), 0 == o ? "q" != t && "P" != t || -1 != a.toString().indexOf("a") ? ("q" != t && "P" != t || this.targetThings[this.targetThings.length - 1].removeAllChildren(), d = v + a, s.LoadOneImage(!0, d, this.targetThings[u])) : s.LoadDragonBones(!0, a, this.targetThings[this.targetThings.length - 1], !0) : "q" != t && "P" != t || -1 != a.toString().indexOf("a") ? ("q" != t && "P" != t || this.targetThings[this.targetThings.length - 1].removeAllChildren(), d = s.serverPath + v + a + ".png", s.LoadOneImage(!1, d, this.targetThings[u])) : s.LoadDragonBones(!1, a, this.targetThings[this.targetThings.length - 1], !0)
                    } else this.targetThings[u].getComponent(cc.Sprite).spriteFrame = null, "q" != t && "P" != t || this.targetThings[u].removeAllChildren();
                if (c) {
                    if (s.personMsg[t] = null, 2 == s.personType) {
                        var S, y = i(this.dressupScore);
                        try {
                            for (y.s(); !(S = y.n()).done;) {
                                var w = S.value;
                                if (w.name == t) {
                                    w.score = 0;
                                    break
                                }
                            }
                        } catch (e) {
                            y.e(e)
                        } finally {
                            y.f()
                        }
                    }
                } else {
                    var C = a + o;
                    if (s.personMsg[t] = C, 2 == s.personType && r) {
                        var I, P = !1,
                            A = i(this.dressupScore);
                        try {
                            for (A.s(); !(I = A.n()).done;) {
                                var b = I.value;
                                if (b.name == t) {
                                    b.score = r, P = !0;
                                    break
                                }
                            }
                        } catch (e) {
                            A.e(e)
                        } finally {
                            A.f()
                        }
                        if (!P) {
                            var M = {
                                name: t,
                                score: r
                            };
                            this.dressupScore.push(M)
                        }
                    }
                }
            },
            BtnHomeClick: function(e) {
                if (s.audioManager && s.audioManager.PlayClickSound(), 2 == s.personType) return e.target.getComponent(cc.Button).interactable = !1, void cc.director.loadScene("DecorationScene");
                var t = !0;
                if (0 != s.isCreatePerson || s.isCreatNewImageMsg) t = !1;
                else {
                    for (var n in this.SimplifyPersonMsg(), s.personMsg)
                        if ("lock" != n && s.personMsg[n] != s.imageMsg[s.curEditImageIndex][n]) {
                            t = !1;
                            break
                        } if (t)
                        for (var n in s.imageMsg[s.curEditImageIndex])
                            if ("lock" != n && (void 0 == s.personMsg[n] || null == s.personMsg[n])) {
                                t = !1;
                                break
                            }
                }
                t ? (e.target.getComponent(cc.Button).interactable = !1, cc.director.loadScene("DecorationScene")) : (this.saveDressUpPanel.active = !0, s.ShowPanelHandle("saveDressup"))
            },
            BtnSaveDressUpHandle: function(e, t) {
                if (s.audioManager && s.audioManager.PlayClickSound(), 0 != t && (e.target.getComponent(cc.Button).interactable = !1), 0 == t || 1 == t) {
                    if (this.SimplifyPersonMsg(), 0 != s.isCreatePerson || s.isCreatNewImageMsg) {
                        s.isCreatNewImageMsg = !1;
                        var n = s.CopyObjectValue(s.personMsg);
                        null == s.imageMsg && (s.imageMsg = []), s.imageMsg.length >= 2 ? n.lock = 1 : n.lock = 0, s.imageMsg.splice(0, 0, n), s.isCreatePerson = 0, s.curEditImageIndex = 0
                    } else {
                        var i = s.CopyObjectValue(s.personMsg);
                        i.lock = s.imageMsg[s.curEditImageIndex].lock, s.imageMsg[s.curEditImageIndex] = i
                    }
                    s.SetImageMsg()
                }
                0 != t ? (s.HidePanelHandle(), cc.director.loadScene("DecorationScene")) : (this.saveDressupRemind.active = !0, this.scheduleOnce(function() {
                    try {
                        this.saveDressupRemind.active = !1
                    } catch (e) {}
                }.bind(this), 2))
            },
            BtnSaveScreenShot: function(e) {
                s.audioManager && s.audioManager.PlayPhotoSound(), e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
                    e.target.getComponent(cc.Button).interactable = !0
                }, .3), this.person.y = 0, s.shotImage = s.ScreenShot(this.camera, this.targetNode), this.saveScreenShotPanel.active = !0, this.saveScreenShotPanel.getChildByName("shareVideoBtn").getComponent(cc.Animation).play("scale"), "wx" == s.channel || "qq" == s.channel || "tt" == s.channel || "swan" == s.channel ? this.saveScreenShotPanel.getChildByName("shareBtn").active = !0 : (this.saveScreenShotPanel.getChildByName("shareBtn").active = !1, "vivo" == s.channel && (this.saveScreenShotPanel.getChildByName("closeBtn").active = !1, this.saveScreenShotPanel.getChildByName("closeBtn1").active = !0), "oppo" != s.channel && "vivo" != s.channel || (this.saveScreenShotPanel.getChildByName("saveBtn").x = 0, this.saveScreenShotPanel.getChildByName("saveBtn").scale = 1.5, this.saveScreenShotPanel.getChildByName("saveBtn").getComponent(cc.Widget).bottom = 180)), this.saveScreenShotPanel.getChildByName("image").getComponent(cc.Sprite).spriteFrame = s.shotImage, 0 == s.isNormalShot && (this.saveScreenShotPanel.getChildByName("image").scaleY = -1), s.isHasAd && "tt" != s.channel && "qq" != s.channel && s.adsManager.ShowInterstitial(-1), "oppo" == s.channel && s.pushCtl && s.isSupportBox && (s.pushCtl.CreateOneCol(1, 10, cc.v2(300, 300), .8), s.pushCtl.OneRowNodeAnimStop(s.pushCtl.colNode)), "tt" == s.channel ? (s.recorderFlag ? s.GetNowTime() - s.startRecordTime < 3e3 ? this.saveScreenShotPanel.getChildByName("shareVideoBtn").active = !1 : (s.pickId = 2, this.saveScreenShotPanel.getChildByName("shareVideoBtn").active = !0, this.saveScreenShotPanel.getChildByName("shareVideoBtn").getComponent(cc.Animation).play("scale"), s.recorder.stop()) : null != s.videoPath ? (this.saveScreenShotPanel.getChildByName("shareVideoBtn").active = !0, this.saveScreenShotPanel.getChildByName("shareVideoBtn").getComponent(cc.Animation).play("scale")) : this.saveScreenShotPanel.getChildByName("shareVideoBtn").active = !1, cc.sys.platform != cc.sys.DESKTOP_BROWSER && "tt" == s.channel && "live_stream" == s.systemInfo.appName && (this.saveScreenShotPanel.getChildByName("shareBtn").active = !1)) : this.saveScreenShotPanel.getChildByName("shareVideoBtn").active = !1, this.BtnSaveDressUpHandle(null, 0)
            },
            BtnSaveToPhoto: function(e) {
                s.audioManager && s.audioManager.PlayClickSound(), e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
                    e.target.getComponent(cc.Button).interactable = !0
                }, .3), cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os && "ios" == s.channel ? s.SaveImageToPhoto(this.SaveToPhotoSuc, this.HideScreenShotPanelBtn, this.ShowScreenShotPanelBtn) : s.SaveImageToPhoto(this.SaveToPhotoSuc)
            },
            SaveToPhotoSuc: function() {
                try {
                    s.curScene.sucRemind.active = !0, cc.tween(s.curScene.sucRemind).call(function() {
                        s.curScene.sucRemind.setPosition(0, Math.floor(cc.winSize.height) / 5)
                    }).by(.5, {
                        position: cc.v2(0, 100)
                    }).call(function() {
                        s.curScene.sucRemind.active = !1
                    }).start()
                } catch (e) {
                    console.log(e)
                }
            },
            HideScreenShotPanelBtn: function() {
                s.curScene.saveScreenShotPanel.getChildByName("saveBtn").active = !1, s.curScene.saveScreenShotPanel.getChildByName("closeBtn").active = !1
            },
            ShowScreenShotPanelBtn: function() {
                s.curScene.saveScreenShotPanel.getChildByName("saveBtn").active = !0, s.curScene.saveScreenShotPanel.getChildByName("closeBtn").active = !0
            },
            BtnShareApp: function(e, t) {
                e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
                    e.target.getComponent(cc.Button).interactable = !0
                }, .5), s.audioManager && s.audioManager.PlayClickSound(), s.ShareApp()
            },
            BtnShareVideo: function(e) {
                if (null == s.videoPath) return this.generalRemind.active = !0, this.generalRemind.getComponent("GeneralRemind").InitPanel(4), void s.ShowPanelHandle();
                e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
                    e.target.getComponent(cc.Button).interactable = !0
                }, 1);
                var t = this,
                    n = {
                        videoPath: s.videoPath
                    };
                "Douyin" == s.systemInfo.appName ? (void 0 == s.topics1 && (s.topics1 = "\u88c5\u626e\u7231\u8c46", s.topics2 = "\u840c\u62fc\u5c11\u5973,\u7231\u8c46\u6210\u56e2"), n.videoTopics = [s.topics1, s.topics2], n.hashtag_list = [s.topics1, s.topics2]) : "Toutiao" == s.systemInfo.appName && (n.createChallenge = !0), tt.shareAppMessage({
                    channel: "video",
                    extra: n,
                    success: function() {
                        e.target.getComponent(cc.Button).interactable = !0
                    },
                    fail: function(n) {
                        console.log("\u5206\u4eab\u5931\u8d25:" + n.errMsg), e.target.getComponent(cc.Button).interactable = !0, n.errMsg && -1 == n.errMsg.substr("cancel") && (-1 == n.errMsg.substr("file not exit") && -1 == n.errMsg.substr("get shareInnfo return null") || (s.videoPath = null), t.generalRemind.active = !0, t.generalRemind.getComponent("GeneralRemind").InitPanel(4), s.ShowPanelHandle())
                    }
                })
            },
            BtnShowClearPanel: function() {
                s.audioManager && s.audioManager.PlayClickSound(), this.clearDressupPanel.active = !0, s.ShowPanelHandle(this.clearDressupPanel.name)
            },
            BtnClearDressUp: function(e) {
                s.audioManager && s.audioManager.PlayClickSound(), e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
                    e.target.getComponent(cc.Button).interactable = !0
                }, .5);
                var t = null,
                    n = "a";
                1 == s.sceneType ? (t = s.defaultGirlDressUp, n = "a") : (t = s.defaultBoyDressUp, n = "A"), s.personMsg = s.CopyObjectValue(t), s.InitPerson(s.personMsg, this.targetThings, this.afterParts), this.clearDressupPanel.active = !1, s.HidePanelHandle(this.clearDressupPanel.name);
                for (var i = this.secondScrollView.content.getComponent("SecondItemRemark"), o = 0; o < this.selectName.length; o++) {
                    var a = String.fromCharCode(n.charCodeAt() + o);
                    if (t[a]) {
                        var r = t[a].substr(0, t[a].length - 1);
                        this.selectName[o] = r
                    } else this.selectName[o] = 0
                }
                if (2 == s.personType) {
                    this.dressupScore = new Array;
                    for (var c = 0, h = Object.keys(s.personMsg); c < h.length; c++) {
                        var l = h[c];
                        if (!(l.length > 1)) {
                            var d = {
                                name: l,
                                score: s.getPartScore(l, !1)
                            };
                            this.dressupScore.push(d)
                        }
                    }
                }
                i.UpdateSelectState()
            },
            UpdateBtnMusic: function() {
                var e = this.musicImage.node,
                    t = s.musicOn ? 0 : 1,
                    n = e.getComponent(cc.Button);
                n.normalSprite = this.musicImages[t], n.pressedSprite = n.hoverSprite = n.disabledSprite = this.musicImages[t + 2]
            },
            BtnMusicClick: function() {
                s.audioManager && s.audioManager.PlayClickSound(), s.audioOn ? (s.audioOn = !1, s.musicOn = !1, s.SetAudioFlag(1), s.SetMusicFlag(1), s.StopMusic()) : (s.audioOn = !0, s.musicOn = !0, s.SetAudioFlag(2), s.SetMusicFlag(2), s.PlayMusic()), this.UpdateBtnMusic()
            },
            BtnChangeSex: function() {
                s.audioManager && s.audioManager.PlayClickSound(), this.settingPanel.active = !0, this.settingPanel.getComponent("SettingPanelCtl").InitPanel(2)
            },
            BtnHideScrollView: function(e) {
                null != e && (s.audioManager && s.audioManager.PlayClickSound(), e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
                    e.target.getComponent(cc.Button).interactable = !0
                }, .1)), this.isShowScrollview ? (this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = this.initBottom - this.secondScrollView.node.height, this.isShowScrollview = !1, cc.find("Canvas/holder/buttons/hideItemBtn").children[0].angle = 180) : (this.firstScrollView.node.parent.getComponent(cc.Widget).bottom = this.initBottom, this.isShowScrollview = !0, cc.find("Canvas/holder/buttons/hideItemBtn").children[0].angle = 0)
            },
            BtnChangeLevel: function(e, t) {
                try {
                    s.audioManager && s.audioManager.PlayClickSound();
                    var n, i = s.personMsg.level.split("&"),
                        o = null;
                    if (1 == t) {
                        var a = (o = i[1].split(""))[0];
                        o[0] = o[1], o[1] = a, i[1] = "";
                        for (var r = 0; r < o.length; r++) i[1] += o[r]
                    } else if (2 == t) {
                        (o = i[0].split(""))[0] > o[1] ? (o[0] = 3, o[1] > o[2] ? (o[1] = 1, o[2] = 2) : (o[1] = 2, o[2] = 1)) : (o[0] = 1, o[1] > o[2] ? (o[1] = 2, o[2] = 3) : (o[2] = 2, o[1] = 3)), i[0] = "";
                        for (var c = 0; c < o.length; c++) i[0] += o[c]
                    } else if (3 == t) {
                        (o = i[0].split(""))[2] > o[1] ? (o[2] = 3, o[1] > o[0] ? (o[1] = 1, o[0] = 2) : (o[0] = 1, o[1] = 2)) : (o[2] = 1, o[1] > o[0] ? (o[1] = 2, o[0] = 3) : (o[0] = 2, o[1] = 3)), i[0] = "";
                        for (var h = 0; h < o.length; h++) i[0] += o[h]
                    }
                    n = i[0] + "&" + i[1], s.personMsg.level = n, s.LevelHandle(this.levelArr1, this.levelArr2, n, 0)
                } catch (e) {}
            },
            BtnShopClick: function(e, t) {
                this.shopScrollView.node.parent.active = !0, s.audioManager && s.audioManager.PlayClickSound(), s.ShowPanelHandle("shop"), s.ShowFavoriteGuide()
            },
            BtnCloseShop: function() {
                s.audioManager && s.audioManager.PlayClickSound(), this.shopScrollView.node.parent.active = !1, s.HidePanelHandle("shop")
            },
            UpdateThingMsg: function(e) {
                s.sceneType == e && this.itemRemark.LoadData(this.images[this.curInnerType])
            },
            ApplySetMsg: function(e, t) {
                for (var n = 0; n < this.targetThings.length; n++) this.targetThings[n].getComponent(cc.Sprite).spriteFrame = null, s.curScene.selectName[n] = -1, n == this.targetThings.length - 1 && this.targetThings[n].removeAllChildren();
                for (var o = 0; o < this.afterParts.length; o++) this.afterParts[o].getComponent(cc.Sprite).spriteFrame = null;
                var a = "a";
                2 == s.sceneType && (a = "A");
                for (var r = 0; r < s.itemName.length; r++) {
                    var c = String.fromCharCode(a.charCodeAt() + r);
                    if (e[r.toString()]) {
                        var h = e[r.toString()];
                        s.curScene.selectName[r] = h, this.UpdatePersonMsg(3, c, null, t, h, s.getPartScore(c, !0))
                    } else if ("a" == c || "b" == c || "c" == c) {
                        var l = s.defaultGirlDressUp[c];
                        l = l.substr(0, l.length - 1), s.curScene.selectName[r] = l, this.UpdatePersonMsg(3, c, null, 0, l, s.getPartScore(c, !0))
                    } else if ("A" == c || "B" == c || "C" == c) {
                        var d = s.defaultBoyDressUp[c];
                        d = d.substr(0, d.length - 1), s.curScene.selectName[r] = d, this.UpdatePersonMsg(3, c, null, 0, d, s.getPartScore(c, !0))
                    } else if (s.personMsg[c] = null, 2 == s.personType) {
                        var u, p = i(this.dressupScore);
                        try {
                            for (p.s(); !(u = p.n()).done;) {
                                var g = u.value;
                                if (g.name == c) {
                                    g.score = 0;
                                    break
                                }
                            }
                        } catch (e) {
                            p.e(e)
                        } finally {
                            p.f()
                        }
                    }
                }
            },
            BtnShowBoxAd: function(e) {
                s.audioManager && s.audioManager.PlayClickSound(), "qq" == s.channel ? s.adsManager.ShowAppBox() : s.pushCtl.CreatePushPanel()
            },
            GetReward: function(e) {
                3 == s.adsManager.lockType ? s.curUnlockItem.GetReward() : s.curUnlockItem.UpdateItemButton(e)
            },
            GenerateJpegData: function(e, t, n) {
                if ("vivo" == s.channel) {
                    var i = {
                            data: e.data,
                            width: t,
                            height: n
                        },
                        o = r.encode(i, 50);
                    s.picData = o.data
                }
            }
        }), cc._RF.pop()
    }, {
        AdsManager: "AdsManager",
        GameManager: "GameManager",
        "jpeg-js": 5
    }],
    GeneralRemind: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "21c1dKNOJhH7LNpIOQeBhqu", "GeneralRemind");
        var i = e("GameManager");
        cc.Class({
            extends: cc.Component,
            properties: {
                labelType: 0,
                msg: cc.Node,
                okBtn: cc.Button,
                noBtn: cc.Button,
                okBtn1: cc.Button,
                images: {
                    type: cc.SpriteFrame,
                    default: []
                },
                labels: {
                    type: cc.String,
                    default: []
                }
            },
            start: function() {},
            InitPanel: function(e) {
                if (this.type = e, 0 == this.labelType) this.msg.getComponent(cc.Sprite).spriteFrame = this.images[e];
                else {
                    for (var t = this.labels[e].split(" "), n = "", i = 0; i < t.length; i++) i == t.length - 1 ? n += t[i] : n += t[i] + "\n";
                    this.msg.getComponent(cc.Label).string = n
                }
                0 == e || 1 == e || 3 == e || 4 == e || 5 == e ? (this.okBtn.node.active = !1, this.noBtn.node.active = !1, this.okBtn1.interactable = !0, this.okBtn1.node.active = !0) : 2 == e && (this.okBtn.interactable = !0, this.noBtn.interactable = !0, this.okBtn.node.active = !0, this.noBtn.node.active = !0, this.okBtn1.node.active = !1)
            },
            BtnNoClick: function() {
                i.audioManager && i.audioManager.PlayClickSound(), this.node.active = !1, i.HidePanelHandle(this.node.name)
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
                "Douyin" == i.systemInfo.appName ? (void 0 == i.topics1 && (i.topics1 = "\u88c5\u626e\u7231\u8c46", i.topics2 = "\u840c\u62fc\u5c11\u5973,\u7231\u8c46\u6210\u56e2"), n.videoTopics = [i.topics1, i.topics2], n.hashtag_list = [i.topics1, i.topics2]) : "Toutiao" == i.systemInfo.appName && (n.createChallenge = !0), tt.shareAppMessage({
                    channel: "video",
                    extra: n,
                    success: function() {
                        console.log("\u5206\u4eab\u6210\u529f\uff01"), t.node.active = !1, e.target.getComponent(cc.Button).interactable = !0, i.HidePanelHandle(t.node.name, !0)
                    },
                    fail: function(n) {
                        console.log("\u5206\u4eab\u5931\u8d25\uff01" + n.errMsg), e.target.getComponent(cc.Button).interactable = !0, n.errMsg && -1 == n.errMsg.substr("cancel") && (-1 == n.errMsg.substr("file not exit") && -1 == n.errMsg.substr("get shareInnfo return null") || (i.videoPath = null), t.generalRemind.active = !0, t.generalRemind.getComponent("GeneralRemind").InitPanel(4))
                    }
                })
            }
        }), cc._RF.pop()
    }, {
        GameManager: "GameManager"
    }],
    GiftItemRemark: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9d48cnkHMxFm6ravXoS/L01", "GiftItemRemark");
        var i = e("GameManager");
        cc.Class({
            extends: cc.Component,
            properties: {
                itemW: 100,
                itemH: 100,
                spaceW: 20,
                item: cc.Prefab,
                btnReward: cc.Button
            },
            start: function() {
                "qq" == i.channel ? (i.curScene.giftPanel.y += 140, i.curScene.giftPanel.getChildByName("splash").y -= 140) : (i.curScene.giftPanel.y += 50, i.curScene.giftPanel.getChildByName("splash").y -= 50);
                var e = Math.min(i.giftSets, i.giftMsg.length - 1),
                    t = parseInt(e) + 1;
                this.curSet = t, this.curSet <= i.giftSets ? this.btnReward.interactable = !1 : this.btnReward.interactable = !0, cc.loader.loadResDir("gift/" + t, cc.SpriteFrame, function(e, t) {
                    try {
                        if (e) return void console.log(e);
                        t = i.SortArray(t, 0), this.InitScrollView(t)
                    } catch (e) {}
                }.bind(this)), this.btnReward.node.children[0].getComponent(cc.Label).string = i.giftNum.toString() + "/5"
            },
            InitScrollView: function(e) {
                try {
                    for (var t = 0; t < e.length; t++) {
                        var n = cc.instantiate(this.item);
                        n.parent = this.node, this.curSet <= this.setNum ? n.children[0].active = !0 : t < i.giftNum ? n.children[0].active = !0 : n.children[0].active = !1, n.getComponent(cc.Sprite).spriteFrame = e[t], n.x = this.spaceW + this.itemW / 2 + t * (this.spaceW + this.itemW), n.y = 0
                    }
                    this.node.width = this.spaceW + e.length * (this.spaceW + this.itemW)
                } catch (e) {}
            },
            BtnGetReward: function(e) {
                i.GetNowTime() - i.lastTime < 1e3 || (i.lastTime = i.GetNowTime(), i.adsManager.lockType = 3, i.curUnlockItem = this, i.adsManager.ShowVideo())
            },
            GetReward: function() {
                i.curScene && -1 != i.curScene.name.indexOf("GameScene") && i.curScene.UpdateThingMsg(i.giftMsg[i.giftSets].sex), i.giftNum = parseInt(i.giftNum) + 1, i.SetItemLockFlag("GiftNum", i.giftNum);
                var e = this.node.childrenCount;
                i.giftNum == e && (i.giftSets = parseInt(i.giftSets) + 1, i.SetItemLockFlag("GiftSets", i.giftSets), this.btnReward.interactable = !1, i.curScene.giftPanel.active = !1, this.btnReward.node.children[0].color = cc.Color.WHITE.fromHEX("#7f7f7f"), i.HidePanelHandle("gift")), this.btnReward.node.children[0].getComponent(cc.Label).string = i.giftNum.toString() + "/5";
                for (var t = this.node.children, n = 0; n < t.length; n++) this.curSet <= this.setNum ? t[n].children[0].active = !0 : n < i.giftNum ? t[n].children[0].active = !0 : t[n].children[0].active = !1
            },
            BtnClosePanel: function() {
                i.curScene.giftPanel.active = !1, i.HidePanelHandle("gift")
            }
        }), cc._RF.pop()
    }, {
        GameManager: "GameManager"
    }],
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
                this.fontNum = 2, this.backNum = 2, this.isLoadFinish = !1, this.sideSpace = (this.node.width - (this.itemW + this.itemSpaceW) * this.colNum + this.itemSpaceW) / 2, this.startY = 0
            },
            start: function() {
                this.curIndex = 0
            },
            LoadData: function(e, t, n) {
                try {
                    if (i.imageType = e, this.imageType = e, null == t)
                        if (1 == e) {
                            for (var o in (t = new Array)[0] = {}, i.defaultDressUp) t[0][o] = i.defaultDressUp[o];
                            i.imageMsg = t
                        } else t = [], i.imageMsg = t;
                    else i.imageMsg = t;
                    this.flag = n;
                    var a = t.length;
                    0 == e ? a += 1 : n && (a += 1), this.isScrollChange = !1;
                    var s = this.node.children;
                    this.curDex = 0, this.maxDex = Math.floor((a - 1) / this.colNum) * this.colNum;
                    for (var r = a; r < s.length; r++) s[r].destroy();
                    for (var c = this.curDex; c < this.curDex + this.colNum * this.maxRow && c < a; c++) this.InitItemMsg(c, s[c - this.curDex]);
                    a - this.curDex >= this.colNum * (this.maxRow - 1) && (a - this.curDex > this.colNum * this.maxRow && (this.isScrollChange = !0), this.bottomIndex = this.colNum * (this.maxRow - 1));
                    var h = Math.ceil(a / this.colNum),
                        l = (this.itemH + this.itemSpaceH) * h + this.itemSpaceH;
                    this.node.height = l, this.node.y = this.startY, this.isLoadFinish = !0, this.lastIndex = this.curDex, this.topIndex = 0
                } catch (e) {
                    console.log(e)
                }
            },
            InitItemMsg: function(e, t) {
                try {
                    var n = i.imageMsg.length;
                    if (0 == this.imageType ? n += 1 : 1 == this.imageType && this.flag && (n = i.imageMsg.length + 1), e > n - 1) return void(null == t && void 0 == t || (t.active = !1));
                    if (e < 0) return;
                    var o = null;
                    null != t || void 0 != t ? o = t : (o = cc.instantiate(this.item)).parent = this.node, o.active = !0;
                    var a = o.getComponent("ImageItem");
                    a.index = e, a.num.string = e.toString();
                    var s = -this.itemSpaceH - this.itemH / 2 - Math.floor(e / this.colNum) * (this.itemH + this.itemSpaceH),
                        r = -this.node.width / 2 + this.sideSpace + this.itemW / 2 + e % this.colNum * (this.itemW + this.itemSpaceW);
                    o.setPosition(r, s), 0 == this.imageType && (0 == e ? (a.holder.active = !1, a.holder1.active = !1, a.lockNode.active = !1, a.addNode.active = !0) : (a.addNode.active = !1, a.holder.active = !0, a.holder1.active = !0, i.isHasAd ? 0 == i.imageMsg[a.index - 1].lock ? a.lockNode.active = !1 : (a.lockNode.active = !0, -1 != i.fakeUnlockName.indexOf(a.index) && (a.lockNode.active = !1)) : a.lockNode.active = !1, a.person.getComponent("Person").InitMsg(i.imageMsg[e - 1])))
                } catch (e) {}
            },
            AddOneItem: function() {
                var e = i.curUnlockItem;
                e.lockNode.active = !1, e.person.active = !0;
                var t = {};
                for (var n in i.defaultDressUp) t[n] = i.defaultDressUp[n];
                e.person.getComponent("Person").InitMsg(t), i.imageMsg.push(t);
                var o = i.imageMsg.length + 1,
                    a = cc.instantiate(this.item);
                a.parent = this.node;
                var s = a.getComponent("ImageItem");
                s.index = e.index + 1;
                var r = -this.itemSpaceH / 2 - this.itemH / 2 - Math.floor(s.index / this.colNum) * (this.itemH + this.itemSpaceH),
                    c = -this.node.width / 2 + this.sideSpace + this.itemW / 2 + s.index % this.colNum * (this.itemW + this.itemSpaceW);
                a.setPosition(c, r), s.lockNode.active = !0, s.person.active = !1, o - this.curDex >= this.colNum * (this.maxRow - 1) && (o - this.curDex > this.colNum * this.maxRow && (this.isScrollChange = !0), this.bottomIndex = this.colNum * (this.maxRow - 1));
                var h = Math.ceil(o / this.colNum),
                    l = (this.itemH + this.itemSpaceH) * h;
                this.node.height = l
            },
            UpdateTwoRowItem: function(e) {
                var t = i.imageMsg.length;
                0 == this.imageType ? t += 1 : 1 == this.imageType && this.flag && (t = i.imageMsg.length + 1);
                var n = this.node.children;
                if (0 == e) {
                    var o = n[this.topIndex].getComponent("ImageItem").index + this.colNum * this.maxRow;
                    if (o >= t) return;
                    for (var a = this.topIndex; a < this.topIndex + this.colNum; a++, o++) this.InitItemMsg(o, n[a]);
                    this.bottomIndex = this.topIndex, this.topIndex += this.colNum, this.topIndex > this.colNum * (this.maxRow - 1) && (this.topIndex = 0)
                } else if (1 == e) {
                    var s = n[this.bottomIndex].getComponent("ImageItem").index - this.colNum * this.maxRow;
                    if (s < 0) return;
                    for (var r = this.bottomIndex; r < this.bottomIndex + this.colNum; r++, s++) this.InitItemMsg(s, n[r]);
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
        var i = e("GameManager");
        cc.Class({
            extends: cc.Component,
            properties: {
                person: cc.Node,
                num: cc.Label,
                lockNode: cc.Node,
                holder: cc.Node,
                holder1: cc.Node,
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
                            var t = this.holder1.getChildByName("pen"),
                                n = this.holder1.getChildByName("deleteBtn"),
                                o = e.touch.getLocation();
                            o = this.person.parent.convertToNodeSpaceAR(o);
                            var a = t.width > t.height ? t.width : t.height,
                                s = n.width > n.height ? n.width : n.height;
                            if (Math.abs(o.x - t.x) < a / 2 && Math.abs(o.y - t.y) < a / 2) return i.curScene.isLoadScene = !0, i.isCreatePerson = 0, i.curEditImageIndex = this.index - 1, i.isCreatNewImageMsg = !1, void cc.director.loadScene("GameScene");
                            if (Math.abs(o.x - n.x) < s / 2 && Math.abs(o.y - n.y) < s / 2) return i.curItem = this, i.curScene.deleteImagePanel.active = this, void i.ShowPanelHandle(i.curScene.deleteImagePanel.name);
                            if (this.lockNode.active) {
                                if (i.GetNowTime() - i.lastTime < 1e3) return;
                                return i.lastTime = i.GetNowTime(), i.adsManager.lockType = 1, i.curUnlockItem = this, void i.adsManager.ShowVideo()
                            }
                            if (Math.abs(o.x - t.x) < a / 2 && Math.abs(o.y - t.y) < a / 2) i.curScene.isLoadScene = !0, i.isCreatePerson = 0, i.curEditImageIndex = this.index - 1, i.isCreatNewImageMsg = !1, cc.director.loadScene("GameScene");
                            else if (Math.abs(o.x - n.x) < s / 2 && Math.abs(o.y - n.y) < s / 2) i.curItem = this, i.curScene.deleteImagePanel.active = this, i.ShowPanelHandle(i.curScene.deleteImagePanel.name);
                            else {
                                var r = cc.instantiate(this.person),
                                    c = r.getChildByName("wing");
                                c.childrenCount > 0 && (c.children[0].getComponent(dragonBones.ArmatureDisplay).timeScale = 1, c.children[0].getComponent(dragonBones.ArmatureDisplay).playAnimation("newAnimation", 0)), r.parent = i.curScene.stickers, r.addComponent("MoveItem"), r.position = cc.v2(0, 250), cc.winSize.height / cc.winSize.width < 1.5 && (r.position = cc.v2(0, 180)), cc.winSize.height / cc.winSize.width < 1.7 ? r.scale = .8 : r.scale = .9, 1 == i.curScene.posFlag ? (i.curScene.posFlag = !1, r.x = -150) : (r.x = 150, i.curScene.posFlag = !0), i.StartRecord()
                            }
                        } else if (1 == i.imageType && this.lockNode.active) return i.curUnlockItem = this, void i.curScene.imageItemRemark.AddOneItem();
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
        GameManager: "GameManager"
    }],
    Loading: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ad5f6y0DvlOeb2O8zF+BSD7", "Loading"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {},
            start: function() {
                this.node.getComponent(cc.Animation).play("star"), this.scheduleOnce(function() {
                    cc.director.loadScene("MainMenu")
                }, .4)
            }
        }), cc._RF.pop()
    }, {}],
    MainMenu: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f6707DRWoNNZqArSaAgp9dh", "MainMenu");
        var i = e("GameManager"),
            o = e("AdsManager");
        cc.Class({
            extends: cc.Component,
            properties: {
                loading: cc.Node,
                bgm: {
                    type: cc.AudioClip,
                    default: null
                },
                generalRemind: cc.Node
            },
            onLoad: function() {
                i.curScene = this, i.sceneIndex = 0, i.HandleEventPerScene()
            },
            onDestroy: function() {
                i.curScene = null
            },
            start: function() {
                this.delta = 0, this.times = 0, this.isLoadScene = !1;
                var e = i.GetAudioFlag();
                null != e && "" !== e || (e = 0), i.SetMusicFlag(e), i.GetInitialData(this.bgm), i.ClearOldData(), cc.find("Canvas/topHolder/startBtn").getComponent(cc.Animation).play("scale"), this.node.getComponent(cc.Animation).play("startScene"), i.isHasAd && (null == i.adsManager && (i.adsManager = new o, i.adsManager.AdInit()), cc.winSize.height / cc.winSize.width < 1.7 ? cc.find("Canvas/topHolder/startBtn").y += 150 : cc.winSize.height / cc.winSize.width < 2 ? cc.find("Canvas/topHolder/startBtn").y += 80 : cc.find("Canvas/topHolder/startBtn").y += 30), this.LoadResources()
            },
            LoadResources: function() {
                null == i.otherGirlMsg && cc.loader.loadRes("other/girl/otherMsg", function(e, t) {
                    try {
                        if (e) return void console.log(e);
                        i.otherGirlMsg = t.json
                    } catch (e) {}
                }.bind(this)), null == i.otherBoyMsg && cc.loader.loadRes("other/boy/otherMsg", function(e, t) {
                    try {
                        if (e) return void console.log(e);
                        i.otherBoyMsg = t.json
                    } catch (e) {}
                }.bind(this))
            },
            BtnShareClick: function(e) {
                e.target.getComponent(cc.Button).interactable = !1, this.scheduleOnce(function() {
                    try {
                        e.target.getComponent(cc.Button).interactable = !0
                    } catch (e) {}
                }, .5), i.audioManager && i.audioManager.PlayClickSound(), i.ShareApp()
            },
            BtnStartPlay: function(e, t) {
                this.isLoadScene || (this.isLoadScene = !0, e.target.getComponent(cc.Button).interactable = !1, i.audioManager && i.audioManager.PlayClickSound(), this.loading.active = !0, this.loading.getComponent(cc.Animation).play("star"), this.schedule(this.GoNextScene, .4))
            },
            GoNextScene: function() {
                this.times += .4, this.times > 4 && (this.times = 0, null != i.otherGirlMsg && null != i.otherBoyMsg || this.LoadResources()), null != i.otherGirlMsg && null != i.otherBoyMsg && (this.unschedule(this.GoNextScene), i.personType = 1, cc.director.loadScene("DecorationScene"))
            }
        }), cc._RF.pop()
    }, {
        AdsManager: "AdsManager",
        GameManager: "GameManager"
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
                        o = cc.v2(this.node.x + n.x, this.node.y + n.y),
                        a = i.Clamp(-cc.winSize.width / 2, o.x, cc.winSize.width / 2),
                        s = i.Clamp(-cc.winSize.height / 2, o.y, cc.winSize.height / 2);
                    o = cc.v2(a, s), this.node.position = o;
                    var r = i.curScene.deleteArea.convertToWorldSpaceAR(i.curScene.deleteArea.children[2].position),
                        c = this.node.parent.convertToWorldSpaceAR(this.node.position);
                    c.y = c.y - this.node.height / 2, 0 == i.curScene.deleteArea.active && (i.curScene.deleteArea.active = !0, i.curScene.ShowHidePanelHandle(1)), Math.abs(c.y - r.y) <= i.curScene.deleteArea.children[2].height / 2 ? (i.curScene.deleteArea.children[0].active = !1, i.curScene.deleteArea.children[1].active = !0) : (i.curScene.deleteArea.children[0].active = !0, i.curScene.deleteArea.children[1].active = !1), this.lastPosition = t
                }
            },
            onTouchEnd: function(e) {
                var t = i.curScene.mtId.indexOf(e.getID()); - 1 != t && i.curScene.mtId.splice(t, 1);
                var n = i.curScene.deleteArea.convertToWorldSpaceAR(i.curScene.deleteArea.children[2].position),
                    o = this.node.parent.convertToWorldSpaceAR(this.node.position);
                if (o.y = o.y - this.node.height / 2, Math.abs(o.y - n.y) <= i.curScene.deleteArea.children[2].height / 2) return i.audioManager && i.audioManager.PlayDeleteSound(), i.curStickersNum--, this.node.destroy(), void(i.curScene.mtId.length <= 0 && (i.curScene.deleteArea.active = !1));
                var a = this.node.parent.convertToWorldSpaceAR(this.node.position),
                    s = i.curScene.stickers.convertToNodeSpaceAR(a);
                this.node.parent = i.curScene.stickers, this.node.position = s, i.curScene.mtId.length <= 0 && (i.curScene.deleteArea.active = !1)
            }
        }), cc._RF.pop()
    }, {
        GameManager: "GameManager"
    }],
    Person: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5a9b7OiU8VPwZAuOCIEmKqt", "Person");
        var i = e("GameManager");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.afterParts = new Array, this.targetThings = new Array;
                for (var e = this.node.children, t = 0; t < e.length; t++) "hairAfter" == e[t].name ? this.afterParts[0] = e[t] : "jacketAfter" == e[t].name ? this.afterParts[1] = e[t] : "headwearAfter" == e[t].name ? this.afterParts[2] = e[t] : "dressAfter" == e[t].name ? this.afterParts[3] = e[t] : "body" == e[t].name ? this.body = e[t] : this.targetThings.push(e[t])
            },
            start: function() {},
            InitMsg: function(e) {
                try {
                    var t = new Array,
                        n = new Array;
                    this.targetThings = new Array;
                    for (var o = this.node.children, a = 0; a < o.length; a++)
                        if ("hairAfter" == o[a].name || "jacketAfter" == o[a].name || "headwearAfter" == o[a].name || "dressAfter" == o[a].name) o[a].getComponent(cc.Sprite).spriteFrame = null;
                        else if ("body" == o[a].name) o[a].getComponent(cc.Sprite).spriteFrame = null;
                    else if (-1 != o[a].name.indexOf("level"))
                        for (var s = o[a].children, r = 0; r < s.length; r++) "shoes" == s[r].name ? t[0] = s[r] : "pants" == s[r].name ? t[1] = s[r] : "coat" == s[r].name ? t[2] = s[r] : "hair" == s[r].name ? n[0] = s[r] : "glasses" == s[r].name && (n[1] = s[r]), this.targetThings.push(s[r]), s[r].getComponent(cc.Sprite).spriteFrame = null;
                    else this.targetThings.push(o[a]), o[a].getComponent(cc.Sprite).spriteFrame = null;
                    1 == e.sex ? (this.body.getComponent(cc.Sprite).spriteFrame = i.curScene.girlFrame, this.targetThings = i.SortByArray(this.targetThings, 1)) : 2 == e.sex && (this.body.getComponent(cc.Sprite).spriteFrame = i.curScene.boyFrame, this.targetThings = i.SortByArray(this.targetThings, 2)), i.InitPersonPos(e.sex, this.targetThings, this.afterParts), i.InitPerson(e, this.targetThings, this.afterParts), i.LevelHandle(t, n, e.level, 0)
                } catch (e) {
                    console.log(e)
                }
            }
        }), cc._RF.pop()
    }, {
        GameManager: "GameManager"
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
                this.fontNum = 2, this.backNum = 4, this.isLoadFinish = !1, this.sideSpace = (this.node.width - (this.itemW + this.itemSpace) * this.colNum + this.itemSpace) / 2, this.startY = 0
            },
            start: function() {},
            LoadData: function(e, t) {
                try {
                    0 != t && (t = !0), void 0 == e && (e = []), this.refreshFlag = t, this.isLoadFinish = !1, 0 != i.sceneType ? this.msgList = i.curScene.PickUpShopFreeMsg(e) : this.msgList = e, this.isScrollChange = !1;
                    for (var n = this.node.children, o = 0; o < n.length; o++) n[o].getComponent("SecondItem").image.spriteFrame = null, n[o].active = !1;
                    this.curDex = 0, this.maxDex = Math.floor((this.msgList.length - 1 + (t ? 1 : 0)) / this.colNum) * this.colNum;
                    for (var a = this.curDex; a < this.curDex + this.colNum * this.maxRow && a < this.msgList.length + t; a++) this.InitItemMsg(a, n[a - this.curDex]);
                    this.msgList.length + (t ? 1 : 0) - this.curDex >= this.colNum * (this.maxRow - 1) && (this.msgList.length + (t ? 1 : 0) - this.curDex > this.colNum * this.maxRow && (this.isScrollChange = !0), this.bottomIndex = this.colNum * (this.maxRow - 1));
                    var s = Math.ceil((this.msgList.length + (t ? 1 : 0)) / this.colNum),
                        r = 2 * this.sideSpace + (this.itemH + this.itemSpace) * s - this.itemSpace;
                    this.node.height = r, this.node.y = this.startY, this.isLoadFinish = !0, this.lastIndex = this.curDex, this.topIndex = 0
                } catch (e) {
                    console.log(e)
                }
            },
            InitItemMsg: function(e, t) {
                try {
                    if (e > this.msgList.length - 1 + (this.refreshFlag ? 1 : 0)) return void(null == t && void 0 == t || (t.active = !1));
                    if (e < 0) return;
                    var n = null;
                    null != t || void 0 != t ? n = t : (n = cc.instantiate(this.item)).parent = this.node, n.active = !0;
                    var i = n.getComponent("SecondItem");
                    i.index = e, this.refreshFlag ? i.InitMsg(e, this.msgList[e - 1], this.refreshFlag) : i.InitMsg(e, this.msgList[e], this.refreshFlag);
                    var o = -this.sideSpace - this.itemH / 2 - Math.floor(e / this.colNum) * (this.itemH + this.itemSpace),
                        a = -this.node.width / 2 + this.sideSpace + this.itemW / 2 + e % this.colNum * (this.itemW + this.itemSpace);
                    n.setPosition(a, o)
                } catch (e) {
                    console.log(e)
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
                    var o = t[this.bottomIndex].getComponent("SecondItem").index - this.colNum * this.maxRow;
                    if (o < 0) return;
                    for (var a = this.bottomIndex; a < this.bottomIndex + this.colNum; a++, o++) this.InitItemMsg(o, t[a]);
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
            UpdateSelectState: function() {
                if (0 == i.sceneType)
                    for (var e = i.curScene.secondScrollView.content.children, t = 0; t < e.length; t++) {
                        var n = e[t].getComponent("SecondItem");
                        n.frameName == i.curScene.selectName[i.curScene.curInnerType] ? n.selectNode.active = !0 : n.selectNode.active = !1
                    } else
                        for (var o = i.curScene.secondScrollView.content.children, a = 0; a < o.length; a++) {
                            var s = o[a].getComponent("SecondItem");
                            s.frameName == i.curScene.selectName[i.curScene.curInnerType] ? s.selectNode.active = !0 : s.selectNode.active = !1
                        }
            }
        }), cc._RF.pop()
    }, {
        GameManager: "GameManager"
    }],
    SecondItem: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5de661kmH5La6prku6X/njL", "SecondItem");
        var i = e("GameManager");
        cc.Class({
            extends: cc.Component,
            properties: {
                image: cc.Sprite,
                lockNode: cc.Node,
                selectNode: cc.Node,
                newNode: cc.Node
            },
            onLoad: function() {
                this.localFlag = !0
            },
            start: function() {
                this.lastTime = 0, this.lastPosition = cc.v2(0, 0), this.moveFlag = !1, this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
            },
            InitMsg: function(e, t, n) {
                try {
                    this.index = e, this.lockFlag = 0;
                    var o, a = 0;
                    if (n && 0 == this.index) {
                        this.image.spriteFrame = i.curScene.refreshFrame, this.image.node.color = cc.Color.WHITE;
                        var s = (this.node.width - 20) / this.image.node.width,
                            r = (this.node.height - 20) / this.image.node.height;
                        return s = s > r ? r : s, this.image.node.scale = s, this.lockNode.active = !1, this.newNode.active = !1, this.node.getChildByName("gif").active = !1, this.frameName = "0", void(i.curScene.selectName[a] == this.frameName ? this.selectNode.active = !0 : this.selectNode.active = !1)
                    }
                    if (0 == i.sceneType) 0 == (a = i.curType.split("")[1].charCodeAt() - "a".charCodeAt()) && (this.pictureType = t.picType, void 0 == this.pictureType && (this.pictureType = 1));
                    else 1 == i.sceneType ? a = i.curType.charCodeAt() - "a".charCodeAt() : 2 == i.sceneType && (a = i.curType.charCodeAt() - "A".charCodeAt());
                    this.frameName = t.name.toString().substr(0, t.name.toString().length - 2), this.lockFlag = t.name.toString().substr(t.name.toString().length - 1, 1), this.localFlag = t.name.toString().substr(t.name.toString().length - 2, 1);
                    var c = t.type;
                    if (this.image.node.color = cc.Color.WHITE, this.LoadImage(c, this.index), o = t.type + this.frameName, this.localName = o, 0 == i.sceneType && i.curScene.selectName[a] == this.frameName ? this.selectNode.active = !0 : i.curScene.selectName[a] == this.frameName ? this.selectNode.active = !0 : this.selectNode.active = !1, ("q" == t.type || "P" == t.type) && -1 == this.frameName.toString().indexOf("a") ? this.node.getChildByName("gif").active = !0 : this.node.getChildByName("gif").active = !1, i.isHasAd) {
                        if (0 == this.lockFlag) this.lockNode.active = !1, this.newNode.active = !1;
                        else if (1 == this.lockFlag) {
                            var h = i.GetOldName(t.type) + this.frameName;
                            "e" != t.type && "E" != t.type || (h += "0"), h && "true" == i.GetItemLockFlag(h) ? (i.RemoveItemKey(h), i.SetItemLockFlag(o, 3), this.lockNode.active = !1) : 3 == i.GetItemLockFlag(o) ? this.lockNode.active = !1 : (this.lockNode.active = !0, -1 != i.fakeUnlockName.indexOf(this.localName) && (this.lockNode.active = !1)), this.newNode.active = !1
                        } else if (2 == this.lockFlag) {
                            var l = i.GetOldName(t.type, !1) + this.frameName;
                            "e" != t.type && "E" != t.type || (l += "0"), l && 1 == i.GetItemLockFlag(l) ? (i.RemoveItemKey(l), i.SetItemLockFlag(o, 3), this.newNode.active = !1) : 3 == i.GetItemLockFlag(o) ? this.newNode.active = !1 : this.newNode.active = !0, this.lockNode.active = !1
                        } else if (3 == this.lockFlag) {
                            this.lockNode.active = !0, this.newNode.active = !0;
                            var d = i.GetOldName(t.type) + this.frameName;
                            "e" != t.type && "E" != t.type || (d += "0"), d && "true" == i.GetItemLockFlag(d) ? (i.RemoveItemKey(d), this.lockNode.active = !1) : 1 != i.GetItemLockFlag(o) && 3 != i.GetItemLockFlag(o) || (this.lockNode.active = !1), d = i.GetOldName(t.type, !1) + this.frameName, "e" != t.type && "E" != t.type || (d += "0"), d && 1 == i.GetItemLockFlag(d) ? (i.RemoveItemKey(d), this.newNode.active = !1) : 3 != i.GetItemLockFlag(o) && 2 != i.GetItemLockFlag(o) || (this.newNode.active = !1), 0 == this.lockNode.active && 0 == this.newNode.active ? i.SetItemLockFlag(o, 3) : 0 == this.lockNode.active && 1 == this.newNode.active ? i.SetItemLockFlag(o, 1) : 1 == this.lockNode.active && 0 == this.newNode.active && i.SetItemLockFlag(o, 2), -1 != i.fakeUnlockName.indexOf(this.localName) && (this.lockNode.active = !1)
                        }
                    } else this.lockNode.active = !1, this.newNode.active = !1
                } catch (e) {
                    console.log(e)
                }
            },
            LoadImage: function(e, t) {
                var n = i.GetPathByType(e);
				
                if (("A" == e && parseInt(this.frameName) <= 81 || "B" == e && parseInt(this.frameName) <= 61 || "C" == e && parseInt(this.frameName) <= 66 || "D" == e && parseInt(this.frameName) <= 26 || "L" == e && parseInt(this.frameName) <= 59 || "O" == e && parseInt(this.frameName) <= 66 || "N" == e && parseInt(this.frameName) <= 57) && (n = n.replace("boy", "girl")), 0 == this.localFlag) {
                    var o = n + this.frameName;
                    "q" != e && "P" != e || (o = "icon/" + n + this.frameName), cc.loader.loadRes(o, cc.SpriteFrame, function(n, o) {
                        try {
                            if (i.curType != e || t != this.index) return;
                            if (n) return console.log(n), void(this.image.spriteFrame = null);
                            this.image.spriteFrame = o;
                            var a = 1,
                                s = 1;
                            0 == i.sceneType ? (a = (this.node.width - 12) / this.image.node.width, s = (this.node.width - 12) / this.image.node.height) : (a = (this.node.width - 20) / this.image.node.width, s = (this.node.height - 20) / this.image.node.height), a = a > s ? s : a, a = Math.min(1.5, a), this.image.node.scale = a
                        } catch (e) {}
                    }.bind(this))
                } else {
                    var a = "";
                    a = "0a" == e && parseInt(this.frameName) >= 100 ? i.serverPath + n + this.frameName + ".jpg" : "0a" == e || "0b" == e || "0c" == e ? i.serverPath + n + this.frameName + ".png" : i.serverPath + "icon/" + n + this.frameName + ".png", cc.loader.load(a, function(n, o) {
                        try {
                            if (i.curType != e || t != this.index) return;
                            if (n) return console.log(n), void(this.image.spriteFrame = null);
                            this.image.spriteFrame = new cc.SpriteFrame(o);
                            var a = (this.node.width - 20) / this.image.node.width,
                                s = (this.node.height - 20) / this.image.node.height;
                            a = a > s ? s : a, a = Math.min(1.5, a), this.image.node.scale = a
                        } catch (e) {}
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
                    if (i.audioManager && i.audioManager.PlayClickSound(), this.lockNode.active) {
                        /* if (i.GetNowTime() - i.lastTime < 1e3) return;
                        return i.lastTime = i.GetNowTime(), i.adsManager.lockType = 1, i.curUnlockItem = this, void i.adsManager.ShowVideo()
						i.curScene.GetReward() */
						// i.curScene.GetReward()
						// void 0 == e && (e = 0), this.lockNode.active = !1, 0 == e ? this.newNode.active ? i.SetItemLockFlag(this.localName, 1) : i.SetItemLockFlag(this.localName, 3) : -1 == i.fakeUnlockName.indexOf(this.localName) && i.fakeUnlockName.push(this.localName)
						i.SetItemLockFlag(this.localName, 3);
						i.fakeUnlockName.push(this.localName)
						console.log("003" , this.localName);
                    }
                    i.StartRecord(), this.newNode.active && (this.newNode.active = !1, -1 != i.fakeUnlockName.indexOf(this.localName) ? i.SetItemLockFlag(this.localName, 2) : i.SetItemLockFlag(this.localName, 3));
                    var e = this.node.parent.getComponent("SecondItemRemark");
                    if ((0 == i.sceneType && "0a" == i.curType || 0 != i.sceneType) && e.refreshFlag == i.curScene.refreshFlag && i.curScene.selectName[i.curScene.curInnerType] == this.frameName) return;
                    if (i.curScene.refreshFlag = e.refreshFlag, i.curScene.selectName[i.curScene.curInnerType] = this.frameName, e.UpdateSelectState(), "0a" == i.curType)
                        if (0 == this.index && i.curScene.refreshFlag) i.curScene.node.getComponent(cc.Sprite).spriteFrame = null, i.curScene.node.color = cc.Color.WHITE;
                        else if (this.pictureType.length > 0) {
                        i.curScene.node.getComponent(cc.Sprite).type = cc.Sprite.Type.SIMPLE, i.curScene.node.getComponent(cc.Sprite).spriteFrame = i.curScene.defaultBg;
                        var t = cc.Color.BLACK;
                        i.curScene.node.color = t.fromHEX("#" + this.pictureType)
                    } else 1 == this.pictureType ? i.curScene.node.getComponent(cc.Sprite).type = cc.Sprite.Type.TILED : 2 == this.pictureType && (i.curScene.node.getComponent(cc.Sprite).type = cc.Sprite.Type.SIMPLE), i.curScene.node.color = cc.Color.WHITE, i.curScene.node.getComponent(cc.Sprite).spriteFrame = this.image.spriteFrame;
                    else if (2 == i.curType.length) {
                        var n = cc.instantiate(i.curScene.moveItem);
                        n.parent = i.curScene.stickers, n.getComponent(cc.Sprite).spriteFrame = this.image.spriteFrame, n.position = cc.v2(0, 200), i.curStickersNum++, cc.winSize.height / cc.winSize.width < 1.7 ? n.scale = .8 : n.scale = .9
                    } else if (i.curType >= "a" || i.curType <= "z" || i.curType >= "A" || i.curType <= "Z")
                        if (0 == this.index && i.curScene.refreshFlag)
                            if (i.curType >= "a" && i.curType <= "c" || "e" == i.curType || i.curType >= "A" && i.curType <= "C" || "E" == i.curType) {
                                i.curType.charCodeAt(), "a".charCodeAt();
                                2 == i.sceneType && i.curType.charCodeAt() - "A".charCodeAt();
                                var o = i.defaultDressUp[i.curType],
                                    a = o.substr(o.length - 1, 1),
                                    s = o.substr(0, o.length - 1);
                                i.curScene.UpdatePersonMsg(2, i.curType, null, a, s, 3)
                            } else i.curScene.UpdatePersonMsg(0, i.curType, null, 0, this.frameName);
                    else {
                        if (1 == i.sceneType)
                            if ("i" == i.curType) {
                                var r = "j".charCodeAt() - "a".charCodeAt();
                                i.curScene.targetThings[r].getComponent(cc.Sprite).spriteFrame && (i.curScene.UpdatePersonMsg(0, "j", null, 0, this.frameName), i.curScene.selectName[r] = 0)
                            } else if ("j" == i.curType) {
                            var c = "i".charCodeAt() - "a".charCodeAt();
                            i.curScene.targetThings[c].getComponent(cc.Sprite).spriteFrame && (i.curScene.UpdatePersonMsg(0, "i", null, 0, this.frameName), i.curScene.selectName[c] = 0)
                        }
                        1 == this.lockFlag || 3 == this.lockFlag ? this.score = i.getPartScore(i.curType, !0) : this.score = i.getPartScore(i.curType, !1), i.curScene.UpdatePersonMsg(1, i.curType, this.image.spriteFrame, this.localFlag, this.frameName, this.score)
                    }
                }
                this.moveFlag = !1
            },
            UpdateItemButton: function(e) {
                void 0 == e && (e = 0), this.lockNode.active = !1, 0 == e ? this.newNode.active ? i.SetItemLockFlag(this.localName, 1) : i.SetItemLockFlag(this.localName, 3) : -1 == i.fakeUnlockName.indexOf(this.localName) && i.fakeUnlockName.push(this.localName)
            }
        }), cc._RF.pop()
    }, {
        GameManager: "GameManager"
    }],
    SettingPanelCtl: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ef11f2A40hBpLKIPcWdzXya", "SettingPanelCtl");
        var i = e("GameManager");
        cc.Class({
            extends: cc.Component,
            properties: {
                womanBtn: cc.Node,
                manBtn: cc.Node
            },
            start: function() {
                this.node.y += 150, this.node.getChildByName("splash").y -= 150
            },
            InitPanel: function(e) {
                this.sex = i.sceneType;
                var t = cc.Color.BLACK;
                1 == this.sex ? (this.womanBtn.color = cc.Color.WHITE, this.manBtn.color = t.fromHEX("#B7B7B7")) : (this.manBtn.color = cc.Color.WHITE, this.womanBtn.color = t.fromHEX("#B7B7B7")), i.ShowPanelHandle("personPanel")
            },
            BtnClosePanel: function() {
                i.audioManager && i.audioManager.PlayClickSound(), this.node.active = !1, i.HidePanelHandle(this.node.name)
            },
            BtnSexClick: function(e, t) {
                if (i.audioManager && i.audioManager.PlayClickSound(), t != this.sex) {
                    this.sex = t;
                    var n = cc.Color.BLACK;
                    1 == this.sex ? (this.womanBtn.color = cc.Color.WHITE, this.manBtn.color = n.fromHEX("#B7B7B7")) : (this.manBtn.color = cc.Color.WHITE, this.womanBtn.color = n.fromHEX("#B7B7B7"))
                }
            },
            BtnSelectSex: function(e) {
                if (i.audioManager && i.audioManager.PlayClickSound(), i.sceneType == this.sex) this.node.active = !1, i.HidePanelHandle(this.node.name);
                else {
                    e.target.getComponent(cc.Button).interactable = !1;
                    var t = null;
                    t = 1 == this.sex ? i.defaultGirlDressUp : i.defaultBoyDressUp, 0 == i.isCreatePerson ? (i.isCreatePerson = 3, i.personMsg = i.CopyObjectValue(t)) : i.isCreatePerson = this.sex, i.HidePanelHandle(this.node.name), "qq" == i.channel && (1 == this.isSupportBox && i.adsManager.ShowAppBox(), i.adsManager.ShowInterstitial(-1)), 2 == i.sceneIndex ? (i.curScene.resetPerson(), e.target.getComponent(cc.Button).interactable = !0, this.node.active = !1, i.HidePanelHandle(this.node.name)) : cc.director.loadScene("GameScene")
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
                itemSpace: 20
            },
            onLoad: function() {
                this.fontNum = 2, this.backNum = 3, this.isLoadFinish = !1, this.sideSpace = 5, this.curIndex = -1
            },
            start: function() {
                this.shopMsg = new Array;
                for (var e = 0; e < i.shopMsg.length; e++) i.shopMsg[e].sex == i.sceneType && this.shopMsg.push(i.shopMsg[e]);
                this.LoadData()
            },
            updateSceneType: function() {
                this.shopMsg = new Array;
                for (var e = 0; e < i.shopMsg.length; e++) i.shopMsg[e].sex == i.sceneType && this.shopMsg.push(i.shopMsg[e]);
                this.LoadData()
            },
            onEnable: function() {
                this.updateSceneType(), this.UpdateLockState()
            },
            UpdateLockState: function() {
                for (var e = this.node.children, t = 0; t < this.node.childrenCount; t++) {
                    e[t].getChildByName("area").getComponent("ShopItem").InitLockState()
                }
            },
            LoadData: function() {
                this.isLoadFinish = !1, this.isScrollChange = !1;
                for (var e = this.node.children, t = 0; t < e.length; t++) e[t].active = !1;
                this.curDex = 0, this.maxDex = this.shopMsg.length - 1;
                for (var n = this.curDex; n < this.curDex + this.maxRow && n < this.shopMsg.length; n++) this.InitItemMsg(n, e[n - this.curDex]);
                this.shopMsg.length - this.curDex >= this.maxRow - 1 && (this.shopMsg.length - this.curDex > this.maxRow && (this.isScrollChange = !0), this.bottomIndex = this.maxRow - 1);
                var o = this.shopMsg.length,
                    a = 2 * this.sideSpace + (this.itemH + this.itemSpace) * o;
                i.isHasAd && i.isShowBanner && (a += 80), this.node.height = a, this.startY = 0, this.node.y = this.startY, this.isLoadFinish = !0, this.lastIndex = this.curDex, this.topIndex = 0
            },
            InitItemMsg: function(e, t) {
                if (e > this.shopMsg.length - 1) null == t && void 0 == t || (t.active = !1);
                else if (!(e < 0)) {
                    var n = null;
                    null != t || void 0 != t ? n = t : (n = cc.instantiate(this.item)).parent = this.node, n.active = !0;
                    var i = n.getChildByName("area").getComponent("ShopItem");
                    i.index = e, i.InitMsg(e, this.shopMsg[e]);
                    var o = -this.itemH / 2 - e * (this.itemH + this.itemSpace) + this.itemH * (i.image.node.anchorY - .5),
                        a = this.itemW * (i.image.node.anchorX - .5);
                    n.setPosition(a, o)
                }
            },
            UpdateTwoRowItem: function(e) {
                var t = this.node.children;
                if (0 == e) {
                    var n = t[this.topIndex].getChildByName("area").getComponent("ShopItem").index + this.maxRow;
                    if (n >= this.shopMsg.length) return;
                    for (var i = this.topIndex; i < this.topIndex + 1; i++, n++) this.InitItemMsg(n, t[i]);
                    this.bottomIndex = this.topIndex, this.topIndex += 1, this.topIndex > this.maxRow - 1 && (this.topIndex = 0)
                } else if (1 == e) {
                    var o = t[this.bottomIndex].getChildByName("area").getComponent("ShopItem").index - this.maxRow;
                    if (o < 0) return;
                    for (var a = this.bottomIndex; a < this.bottomIndex + 1; a++, o++) this.InitItemMsg(o, t[a]);
                    this.topIndex = this.bottomIndex, this.bottomIndex -= 1, this.bottomIndex < 0 && (this.bottomIndex = this.maxRow - 1)
                }
            },
            ClearData: function() {
                this.node.height = 0;
                for (var e = this.node.children, t = 0; t < this.node.childrenCount; t++) e[t].active = !1
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
                    if (e < this.fontNum) return;
                    this.UpdateTwoRowItem(0)
                }
                this.lastIndex = e
            }
        }), cc._RF.pop()
    }, {
        GameManager: "GameManager"
    }],
    ShopItem: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "bc89dhoKBlJ+ocPZRA4czib", "ShopItem");
        var i = e("GameManager");
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
                var n = "s" + this.itemMsg.name.substr(0, this.itemMsg.name.length - 1),
                    o = i.GetItemLockFlag(n);
                if (o >= this.itemMsg.videoNum) this.lockNode.active = !1, this.unlockNode.active = !0, this.stateNode.active = !1;
                else {
                    (isNaN(o) || o <= 0) && (o = 0), this.stateNode.active = !0;
                    for (var a = this.stateNode.children, s = 0; s < a.length; s++) a[s].active = s < o;
                    this.lockNode.active = !0, this.lockNode.getChildByName("num").getComponent(cc.Label).string = o + "/" + this.itemMsg.videoNum.toString(), this.unlockNode.active = !1
                }
            },
            LoadImage: function(e) {
                if (0 == this.localFlag) {
                    var t = "shop/" + this.frameName;
                    cc.loader.loadRes(t, cc.SpriteFrame, function(t, n) {
                        try {
                            if (e != this.index) return;
                            if (t) return console.log(t), void(this.image.spriteFrame = null);
                            this.image.spriteFrame = n
                        } catch (e) {}
                    }.bind(this))
                } else {
                    var n = i.serverPath + "shop/" + this.frameName + ".png";
                    cc.loader.load(n, function(t, n) {
                        try {
                            if (e != this.index) return;
                            if (t) return console.log(t), void(this.image.spriteFrame = null);
                            this.image.spriteFrame = new cc.SpriteFrame(n)
                        } catch (e) {}
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
                        if (i.audioManager && i.audioManager.PlayClickSound(), this.lockNode.active) {
                            if (i.GetNowTime() - i.lastTime < 1e3) return;
                            return i.lastTime = i.GetNowTime(), i.curUnlockItem = this, void(i.isHasAd ? (i.adsManager.lockType = 2, i.adsManager.ShowVideo()) : cc.sys.platform == cc.sys.DESKTOP_BROWSER && i.curScene.GetReward())
                        }
                        i.curScene.ApplySetMsg(this.itemMsg, this.localFlag), this.isClick = !1, i.curScene.shopScrollView.node.parent.active = !1, i.HidePanelHandle("shop"), i.StartRecord()
                    }
                    this.moveFlag = !1
                }
            },
            InitLockState: function() {
                var e = "s" + this.itemMsg.name.substr(0, this.itemMsg.name.length - 1),
                    t = i.GetItemLockFlag(e);
                if (t >= this.itemMsg.videoNum) this.lockNode.active = !1, this.unlockNode.active = !0, this.stateNode.active = !1;
                else {
                    (isNaN(t) || t <= 0) && (t = 0), this.stateNode.active = !0;
                    for (var n = this.stateNode.children, o = 0; o < n.length; o++) n[o].active = o < t;
                    this.lockNode.active = !0, this.lockNode.getChildByName("num").getComponent(cc.Label).string = t + "/" + this.itemMsg.videoNum.toString(), this.unlockNode.active = !1
                }
            },
            UpdateItemButton: function() {
                var e = "s" + this.itemMsg.name.substr(0, this.itemMsg.name.length - 1),
                    t = i.GetItemLockFlag(e);
                if (isNaN(t) || t <= 0 ? t = 1 : t++, i.SetItemLockFlag(e, t), t >= this.itemMsg.videoNum) this.lockNode.active = !1, this.unlockNode.active = !0, i.curScene.UpdateThingMsg(this.itemMsg.sex), this.stateNode.active = !1;
                else {
                    this.lockNode.getChildByName("num").getComponent(cc.Label).string = t + "/" + this.itemMsg.videoNum.toString();
                    var n = this.stateNode.children;
                    this.stateNode.active = !0;
                    for (var o = 0; o < n.length; o++) n[o].active = o < t
                }
            }
        }), cc._RF.pop()
    }, {
        GameManager: "GameManager"
    }],
    ShopPanel: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "bd165HqNsJHRIAlCLWnY1fF", "ShopPanel");
        var i = e("GameManager");
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                this.curMode = -1, this.UpdateItemRemark(null, 2)
            },
            UpdateItemRemark: function(e, t) {
                if (this.curMode != t) {
                    this.curMode = t, null != e && i.audioManager.PlayClickSound();
                    for (var n = new Array, o = 0; o < i.shopMsg.length; o++) i.shopMsg[o].sex == t && n.push(i.shopMsg[o]);
                    i.curScene.shopScrollView.content.getComponent("ShopItemRemark").LoadData(n)
                }
            }
        }), cc._RF.pop()
    }, {
        GameManager: "GameManager"
    }],
    SplashCtl: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a13b4hZFZ1P3ZL9TgsM5vAE", "SplashCtl");
        var i = e("GameManager");
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this)
            },
            onTouchBegan: function() {
                this.node.parent.active = !1, i.HidePanelHandle(), "wx" == i.channel && (i.pushCtl.CreateTwoCol(3, 10, cc.v2(0, 220)), i.pushCtl.OneRowNodeAnimPlay(i.pushCtl.twoColNode))
            }
        }), cc._RF.pop()
    }, {
        GameManager: "GameManager"
    }],
    TestNode: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "da35dAbPUhNdoC8UTs6pucq", "TestNode");
        var i = e("GameManager");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                "qq" == i.channel && i.isHasAd && (this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this), this.node._touchListener.setSwallowTouches(!1))
            },
            onTouchBegan: function(e) {
                0 == i.isRemindPopup && i.adsManager.blockAd && i.adsManager.blockAd.destroy()
            },
            start: function() {}
        }), cc._RF.pop()
    }, {
        GameManager: "GameManager"
    }],
    "use_v2.0.x_cc.Toggle_event": [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "bad061fODVDsrsPkYtUOc3B", "use_v2.0.x_cc.Toggle_event"), cc.Toggle && (cc.Toggle._triggerEventInScript_check = !0), cc._RF.pop()
    }, {}]
}, {}, ["FaceDetection", "AdsManager", "AudioManager", "CheckupSetPop", "DecorationScene", "FirstItem", "FirstItemRemark", "GameManager", "GameScene", "GeneralRemind", "GiftItemRemark", "ImageItem", "ImageItemRemark", "Loading", "MainMenu", "MoveItem", "Person", "SecondItem", "SecondItemRemark", "SettingPanelCtl", "ShopItem", "ShopItemRemark", "ShopPanel", "SplashCtl", "TestNode", "use_v2.0.x_cc.Toggle_event"]);