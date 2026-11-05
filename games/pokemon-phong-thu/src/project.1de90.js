window.__require = function e(t, i, n) {
    function o(s, c) {
        if (!i[s]) {
            if (!t[s]) {
                var r = s.split("/");
                if (r = r[r.length - 1], !t[r]) {
                    var l = "function" == typeof __require && __require;
                    if (!c && l) return l(r, !0);
                    if (a) return a(r, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
            }
            var h = i[s] = {
                exports: {}
            };
            t[s][0].call(h.exports, function(e) {
                return o(t[s][1][e] || e)
            }, h, h.exports, e, t, i, n)
        }
        return i[s].exports
    }
    for (var a = "function" == typeof __require && __require, s = 0; s < n.length; s++) o(n[s]);
    return o
}({
    AchieveData: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "a8a7aKgOlVI1oOE567Pk3AI", "AchieveData");
        var n = cc.Class({
            name: "AchieveData",
            properties: {
                id: 1,
                Level: 1,
                Gain_5: 0,
                Gain_20: 0,
                Gain_50: 0,
                Gain_100: 0,
                Gain_200: 0
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    AchieveMapMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "19f1629F69CfIBGOTUhomAH", "AchieveMapMgr");
        var n = e("DB_achievementAwards"),
            o = e("AchieveData"),
            a = cc.Class({
                extends: cc.Component,
                properties: {
                    dataList: {
                        default: [],
                        type: [o]
                    }
                },
                DecodeJson: function() {
                    var e = JSON.parse(n.data);
                    for (var t in e) {
                        var i = new o;
                        i.id = e[t][0], i.Level = e[t][1], i.Gain_5 = e[t][2], i.Gain_20 = e[t][3], i.Gain_50 = e[t][4], i.Gain_100 = e[t][5], i.Gain_200 = e[t][6], this.dataList[t] = i
                    }
                },
                getDataByKey: function(e) {
                    return this.dataList[e]
                }
            });
        t.exports = a, cc._RF.pop()
    }, {
        AchieveData: "AchieveData",
        DB_achievementAwards: "DB_achievementAwards"
    }],
    AdsMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "dfd6aQMpERB+5CSRF+b4z7O", "AdsMgr");
        var n = e("AdsParam"),
            o = e("MissionType"),
            a = e("Config"),
            s = cc.Class({
                statics: {
                    openAds: !0,
                    platform: a.platform,
                    baiduAdsAppId: "c2ca4da4",
                    bannerId_baidu: "6874361",
                    bannerId_wx: "adunit-c4bdc7c254c89eb1",
                    bannerId_tt: "5i33mgedhj6hb1thjm",
                    bannerId_tt_2: "11ijn8mda2dpf2eb61",
                    bannerId_qq: "0420e7a0b35c00f34f25ee65f082d3ab",
                    bannerId_oppo: "",
                    bannerId_vivo: "",
                    insertId_wx_1: "adunit-b06de84558864b20",
                    insertId_wx_2: "adunit-0c8930d8d7844439",
                    insertId_oppo_1: "adunit-b06de84558864b20",
                    insertId_oppo_2: "adunit-0c8930d8d7844439",
                    insertId_vivo_1: "adunit-b06de84558864b20",
                    insertId_vivo_2: "adunit-0c8930d8d7844439",
                    insertId_tt: "62a5emjd6fj0det0ns",
                    bdVideoId_1: "6874362",
                    bdVideoId_2: "6874363",
                    bdVideoId_3: "6874362",
                    bdVideoId_4: "6874363",
                    bdVideoId_5: "6874362",
                    bdVideoId_6: "6874363",
                    bdVideoId_7: "6874362",
                    bdVideoId_8: "6874363",
                    bdVideoId_9: "6874362",
                    bdVideoId_10: "6874363",
                    bdVideoId_11: "6874362",
                    bdVideoId_12: "6874363",
                    wxVideoId_1: "adunit-5073e039412ab7c7",
                    wxVideoId_2: "adunit-b6f73a42278de129",
                    wxVideoId_3: "adunit-f7e7c125cf5fffd8",
                    wxVideoId_4: "adunit-7f5c220527f4cca9",
                    wxVideoId_5: "adunit-4fb8d3c0e00794dc",
                    wxVideoId_6: "adunit-207c18cab87aa839",
                    wxVideoId_7: "adunit-732a6ba7f489b85b",
                    wxVideoId_8: "adunit-f80fb5d06c1b2ea1",
                    wxVideoId_9: "adunit-da742068df240b65",
                    wxVideoId_10: "adunit-2e5abdd18ff90dce",
                    wxVideoId_11: "adunit-f6921a8b6bf239de",
                    wxVideoId_12: "adunit-4f807919e60ba6ea",
                    ttVideoId_1: "1ob469of84n01pm48f",
                    ttVideoId_2: "b95a72h4b9k98ot2yr",
                    ttVideoId_3: "hrck3uni61e9d50r20",
                    ttVideoId_4: "2b8nmeq11yp26ggc0i",
                    ttVideoId_5: "82ij5bbhi6gid1e7b5",
                    ttVideoId_6: "20cdcii17j87f1cl0o",
                    ttVideoId_7: "8d47r82d2qdksdsj5m",
                    ttVideoId_8: "5206og9pphudqsm2l7",
                    ttVideoId_9: "3v21h6dul6topb1hk2",
                    ttVideoId_10: "16i41bchfig815kr1b",
                    ttVideoId_11: "1ob469of84n01pm48f",
                    ttVideoId_12: "b95a72h4b9k98ot2yr",
                    qqVideoId_1: "698b871784a225c7df9d18716a3d1b35",
                    qqVideoId_2: "698b871784a225c7df9d18716a3d1b35",
                    qqVideoId_3: "204d754006ea0a21c0598ea604f2fc71",
                    qqVideoId_4: "204d754006ea0a21c0598ea604f2fc71",
                    qqVideoId_5: "698b871784a225c7df9d18716a3d1b35",
                    qqVideoId_6: "204d754006ea0a21c0598ea604f2fc71",
                    qqVideoId_7: "204d754006ea0a21c0598ea604f2fc71",
                    qqVideoId_8: "698b871784a225c7df9d18716a3d1b35",
                    qqVideoId_9: "204d754006ea0a21c0598ea604f2fc71",
                    qqVideoId_10: "204d754006ea0a21c0598ea604f2fc71",
                    qqVideoId_11: "698b871784a225c7df9d18716a3d1b35",
                    qqVideoId_12: "698b871784a225c7df9d18716a3d1b35",
                    oppoVideo_1: "",
                    oppoVideo_2: "",
                    oppoVideo_3: "",
                    oppoVideo_4: "",
                    oppoVideo_5: "",
                    oppoVideo_6: "",
                    vivoVideo_1: "",
                    vivoVideo_2: "",
                    vivoVideo_3: "",
                    vivoVideo_4: "",
                    vivoVideo_5: "",
                    vivoVideo_6: "",
                    allScreen: !1,
                    hasReSizeBanner: !1,
                    resizeTime: 0,
                    Init: function() {
                        this.platform = a.platform, this.allScreen = !1, this.interstitialAdTT = null
                    },
                    getBannerAdId: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        return "wx" == this.platform ? this.bannerId_wx : "baidu" == this.platform ? this.bannerId_baidu : "tt" == this.platform ? 1 == e ? this.bannerId_tt : this.bannerId_tt_2 : "qq" == this.platform ? this.bannerId_qq : "qg_oppo" == this.platform ? this.bannerId_oppo : "qg_vivo" == this.platform ? this.bannerId_vivo : null
                    },
                    getInsertAdId: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        if ("wx" == this.platform) {
                            if (1 == e) return this.insertId_wx_1;
                            if (2 == e) return this.insertId_wx_2
                        } else if ("baidu" == this.platform);
                        else if ("tt" == this.platform) return this.insertId_tt;
                        return null
                    },
                    getVideoAdId: function(e) {
                        var t = "";
                        if ("wx" == this.platform) switch (e) {
                            case n.PointA:
                                t = this.wxVideoId_1;
                                break;
                            case n.PointB:
                                t = this.wxVideoId_2;
                                break;
                            case n.PointC:
                                t = this.wxVideoId_3;
                                break;
                            case n.PointD:
                                t = this.wxVideoId_4;
                                break;
                            case n.PointE:
                                t = this.wxVideoId_5;
                                break;
                            case n.PointF:
                                t = this.wxVideoId_6;
                                break;
                            case n.PointG:
                                t = this.wxVideoId_7;
                                break;
                            case n.PointH:
                                t = this.wxVideoId_8;
                                break;
                            case n.PointI:
                                t = this.wxVideoId_9;
                                break;
                            case n.PointJ:
                                t = this.wxVideoId_10;
                                break;
                            case n.PointK:
                                t = this.wxVideoId_11;
                                break;
                            case n.PointL:
                                t = this.wxVideoId_12
                        } else if ("qq" == this.platform) switch (e) {
                            case n.PointA:
                                t = this.qqVideoId_1;
                                break;
                            case n.PointB:
                                t = this.qqVideoId_2;
                                break;
                            case n.PointC:
                                t = this.qqVideoId_3;
                                break;
                            case n.PointD:
                                t = this.qqVideoId_4;
                                break;
                            case n.PointE:
                                t = this.qqVideoId_5;
                                break;
                            case n.PointF:
                                t = this.qqVideoId_6;
                                break;
                            case n.PointG:
                                t = this.qqVideoId_7;
                                break;
                            case n.PointH:
                                t = this.qqVideoId_8;
                                break;
                            case n.PointI:
                                t = this.qqVideoId_9;
                                break;
                            case n.PointJ:
                                t = this.qqVideoId_10;
                                break;
                            case n.PointK:
                                t = this.qqVideoId_11;
                                break;
                            case n.PointL:
                                t = this.qqVideoId_12
                        } else if ("baidu" == this.platform) switch (e) {
                            case n.PointA:
                                t = this.bdVideoId_1;
                                break;
                            case n.PointB:
                                t = this.bdVideoId_2;
                                break;
                            case n.PointC:
                                t = this.bdVideoId_3;
                                break;
                            case n.PointD:
                                t = this.bdVideoId_4;
                                break;
                            case n.PointE:
                                t = this.bdVideoId_5;
                                break;
                            case n.PointF:
                                t = this.bdVideoId_6;
                                break;
                            case n.PointG:
                                t = this.bdVideoId_7;
                                break;
                            case n.PointH:
                                t = this.bdVideoId_8;
                                break;
                            case n.PointI:
                                t = this.bdVideoId_9;
                                break;
                            case n.PointJ:
                                t = this.bdVideoId_10;
                                break;
                            case n.PointK:
                                t = this.bdVideoId_11;
                                break;
                            case n.PointL:
                                t = this.bdVideoId_12
                        } else if ("tt" == this.platform) switch (e) {
                            case n.PointA:
                                t = this.ttVideoId_1;
                                break;
                            case n.PointB:
                                t = this.ttVideoId_2;
                                break;
                            case n.PointC:
                                t = this.ttVideoId_3;
                                break;
                            case n.PointD:
                                t = this.ttVideoId_4;
                                break;
                            case n.PointE:
                                t = this.ttVideoId_5;
                                break;
                            case n.PointF:
                                t = this.ttVideoId_6;
                                break;
                            case n.PointG:
                                t = this.ttVideoId_7;
                                break;
                            case n.PointH:
                                t = this.ttVideoId_8;
                                break;
                            case n.PointI:
                                t = this.ttVideoId_9;
                                break;
                            case n.PointJ:
                                t = this.ttVideoId_10;
                                break;
                            case n.PointK:
                                t = this.ttVideoId_11;
                                break;
                            case n.PointL:
                                t = this.ttVideoId_12
                        }
                        return t
                    },
                    ShowBannerAds: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        if (0 != this.openAds) {
                            var i = this;
                            if (this.resizeTime = 0, "wx" == this.platform) {
                                null != this.bannerAdCtrl && this.bannerAdCtrl.destroy();
                                var n = {};
                                n.W = wx.getSystemInfoSync().windowWidth, n.H = wx.getSystemInfoSync().windowHeight;
                                var o = 0;
                                o = this.allScreen ? n.W : 300, this.bannerAdCtrl = wx.createBannerAd({
                                    adUnitId: i.getBannerAdId(),
                                    style: {
                                        left: 0,
                                        top: 0,
                                        width: o
                                    }
                                }), this.bannerAdCtrl.onResize(function(e) {
                                    console.log("\u91cd\u7f6e\u5e7f\u544a\u5bbd\u5ea6 " + n.H + " , " + i.bannerAdCtrl.style.realHeight), i.bannerAdCtrl.style.top = n.H - i.bannerAdCtrl.style.realHeight, i.bannerAdCtrl.style.left = (n.W - i.bannerAdCtrl.style.realWidth) / 2, i.bannerAdCtrl.show()
                                }), this.bannerAdCtrl.onError(function(e) {
                                    console.log(e)
                                }), console.log("\u663e\u793a\u5e7f\u544a")
                            } else if ("qq" == this.platform) {
                                null != this.bannerAdCtrl && this.bannerAdCtrl.destroy();
                                var a = {};
                                a.W = qq.getSystemInfoSync().windowWidth, a.H = qq.getSystemInfoSync().windowHeight;
                                var s = 0;
                                s = this.allScreen ? a.W : 320, this.bannerAdCtrl = qq.createBannerAd({
                                    adUnitId: i.getBannerAdId(),
                                    style: {
                                        left: (a.W - 320) / 2,
                                        top: a.H - 77,
                                        width: s
                                    }
                                }), this.bannerAdCtrl.onResize(function(t) {
                                    console.log("\u5e73\u53f0\u9009\u62e9 " + qq.getSystemInfoSync().platform), "ios" == qq.getSystemInfoSync().platform || (e.bannerAdCtrl.style.top = a.H - t.height, e.bannerAdCtrl.style.left = (a.W - t.width) / 2), console.log("\u91cd\u7f6e\u4f4d\u7f6e =  top = " + e.bannerAdCtrl.style.top + "   left =  " + e.bannerAdCtrl.style.left), i.bannerAdCtrl.show()
                                }), this.bannerAdCtrl.onError(function(e) {
                                    console.log(e)
                                }), console.log("\u663e\u793a\u5e7f\u544a")
                            } else if ("baidu" == this.platform) {
                                null != this.bannerAdCtrl && this.bannerAdCtrl.destroy();
                                var c = {};
                                c.W = swan.getSystemInfoSync().windowWidth, c.H = swan.getSystemInfoSync().windowHeight, console.log("\u767e\u5ea6\u7684 bannerId = " + this.getBannerAdId()), this.bannerAdCtrl = swan.createBannerAd({
                                    adUnitId: i.getBannerAdId(),
                                    appSid: i.baiduAdsAppId,
                                    style: {
                                        top: c.H - 112.5 + 56.25,
                                        left: (c.W - 200) / 2,
                                        width: 200
                                    }
                                }), this.allScreen ? i.bannerAdCtrl.style.width = c.H : i.bannerAdCtrl.style.width = 200, this.bannerAdCtrl.onResize(function(t) {
                                    console.log("\u91cd\u7f6e\u5e7f\u544a\u5bbd\u5ea6 "), e.bannerAdCtrl.style.top = c.H - t.height, e.bannerAdCtrl.style.left = (c.W - t.width) / 2
                                }), this.bannerAdCtrl.onLoad(function() {
                                    console.log(" banner \u52a0\u8f7d\u5b8c\u6210"), i.bannerAdCtrl.show()
                                }), this.bannerAdCtrl.onError(function(e) {
                                    console.log(e)
                                }), console.log("\u663e\u793a\u5e7f\u544a")
                            } else if ("tt" == this.platform) {
                                null != this.bannerAdCtrl && this.bannerAdCtrl.destroy();
                                var r = {};
                                r.W = tt.getSystemInfoSync().windowWidth, r.H = tt.getSystemInfoSync().windowHeight, console.log("\u5934\u6761 bannerId = " + this.getBannerAdId()), this.bannerAdCtrl = tt.createBannerAd({
                                    adUnitId: this.getBannerAdId(t),
                                    style: {
                                        left: (r.W - 300) / 2,
                                        width: 300,
                                        top: r.H - 168.75
                                    }
                                }), this.allScreen ? i.bannerAdCtrl.style.width = r.H : i.bannerAdCtrl.style.width = 300, this.bannerAdCtrl.onResize(function(e) {
                                    console.log("\u91cd\u7f6e\u5e7f\u544a\u5bbd\u5ea6 "), i.bannerAdCtrl.style.top = r.H - e.height, i.bannerAdCtrl.style.left = (r.W - e.width) / 2
                                }), this.bannerAdCtrl.onLoad(function() {
                                    console.log(" banner \u52a0\u8f7d\u5b8c\u6210"), i.bannerAdCtrl.show()
                                }), this.bannerAdCtrl.onError(function(e) {
                                    console.log(e)
                                }), console.log("\u663e\u793a\u5e7f\u544a")
                            } else if ("uc" == this.platform) {
                                null != this.bannerAdCtrl && this.bannerAdCtrl.destroy();
                                var l = uc.getSystemInfoSync();
                                this.bannerAdCtrl = uc.createBannerAd({
                                    style: {
                                        width: 250 * l.pixelRatio,
                                        height: 0,
                                        gravity: 7
                                    }
                                }), this.bannerAdCtrl.onLoad(function() {
                                    console.log(" banner \u52a0\u8f7d\u5b8c\u6210")
                                }), this.bannerAdCtrl.show(), this.bannerAdCtrl.onError(function(e) {
                                    console.log(e)
                                })
                            } else if ("qtt" == this.platform) {
                                var h = {
                                    index: 1
                                };
                                qttGame.showBanner(h)
                            }
                        }
                    },
                    HideBannerAd: function() {
                        "qtt" == this.platform ? qttGame.hideBanner() : (null != this.bannerAdCtrl && this.bannerAdCtrl.hide(), this.DestroyBanner())
                    },
                    RecoverShowBanner: function() {
                        if ("qtt" == this.platform) this.ShowBannerAds(1);
                        else if (null != this.bannerAdCtrl) this.bannerAdCtrl.show();
                        else if ("tt" == this.platform) {
                            var e = 1;
                            Math.random() < .5 && (e = 2), this.ShowBannerAds(e)
                        } else this.ShowBannerAds()
                    },
                    DestroyBanner: function() {
                        null != this.bannerAdCtrl && this.bannerAdCtrl.destroy(), this.bannerAdCtrl = null
                    },
                    ShowInsertAds: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        if (!(cc.Mgr.game.plantMaxLv < cc.Mgr.Config.openInsertLevel) && 0 != this.openAds)
                            if ("wx" == this.platform) {
                                console.log("wx \u63d2\u5c4f");
                                var i = wx.createInterstitialAd({
                                    adUnitId: this.getInsertAdId(t)
                                });
                                i.show(), i.onLoad(function() {}), i.onError(function(e) {
                                    console.log(e)
                                }), i.onClose(function(e) {
                                    console.log("\u63d2\u5c4f \u5e7f\u544a\u5173\u95ed"), i.offLoad(), i.offError(), i.offClose()
                                })
                            } else if ("qg_oppo" == this.platform) {
                            console.log("\u63d2\u5c4f");
                            var n = qg.createInsertAd({
                                posId: this.getInsertAdId(t)
                            });
                            n.load(), n.show(), n.onLoad(function() {}), n.onShow(function() {}), n.onError(function() {
                                n.offLoad(), n.offError(), n.destroy()
                            })
                        } else if ("qg_vivo" == this.platform) {
                            if (0 == this.qgAdsOK) return;
                            console.log("\u63d2\u5c4f \u5e7f\u544a\u52a0\u8f7d\u6210\u529f");
                            var o = qg.createInterstitialAd({
                                posId: this.getInsertAdId(1)
                            }).show();
                            o && o.then(function() {
                                console.log("\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u6210\u529f")
                            }).catch(function(e) {
                                console.log("\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u5931\u8d25", e)
                            })
                        } else if ("qq" == this.platform) {
                            var a = qq.createAppBox({
                                adUnitId: this.getInsertAdId(1)
                            });
                            a.load().then(function() {
                                a.show()
                            }), a.onClose(function() {
                                console.log("\u5173\u95ed")
                            })
                        } else if ("tt" == this.platform) {
                            if (cc.Mgr.Utils.GetSysTime() - cc.Mgr.game.lastShowInsertAdsTime < cc.Mgr.Config.insertAdInterval) return void console.log("\u65f6\u95f4\u95f4\u9694\u592a\u77ed \u7b49\u5f85\u4e0b\u4e00\u8f6e");
                            if (console.log("\u5934\u6761\u63d2\u5c4f"), "Toutiao" === tt.getSystemInfoSync().appName) {
                                if (null != this.interstitialAdTT && this.interstitialAdTT.destroy(), this.interstitialAdTT = tt.createInterstitialAd({
                                        adUnitId: this.getInsertAdId(1)
                                    }), null == this.interstitialAdTT) return;
                                this.interstitialAdTT.load().then(function() {
                                    cc.Mgr.game.lastShowInsertAdsTime = cc.Mgr.Utils.GetSysTime(), e.interstitialAdTT.show()
                                }).catch(function(e) {
                                    console.log(e)
                                })
                            }
                        } else if ("qtt" == this.platform) {
                            if (cc.Mgr.Utils.GetSysTime() - cc.Mgr.game.lastShowInsertAdsTime < cc.Mgr.Config.insertAdInterval) return void console.log("\u65f6\u95f4\u95f4\u9694\u592a\u77ed \u7b49\u5f85\u4e0b\u4e00\u8f6e");
                            cc.Mgr.game.lastShowInsertAdsTime = cc.Mgr.Utils.GetSysTime();
                            var s = {
                                index: 1,
                                rewardtype: 1
                            };
                            qttGame.showHDReward(s)
                        }
                    },
                    canPlayAds: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        this.ShowVideoAds(1, e)
                    },
                    ShowVideoAds: function(e, t) {
                        var i = this;
                        if (0 != this.openAds) {
                            var n = this;
                            if (this.cb = null, this.cb = t, console.log("\u89c6\u9891\u5e7f\u544a\u4f4d \uff1a " + this.getVideoAdId(e)), "wx" == this.platform) {
                                var a = wx.createRewardedVideoAd({
                                    adUnitId: n.getVideoAdId(e)
                                });
                                a.load().then(function() {
                                    return a.show()
                                }).catch(function(e) {
                                    return console.log(e.errMsg)
                                }), a.onError(function(e) {
                                    console.log("\u5e7f\u544a\u52a0\u8f7d\u51fa\u9519 " + e.errMsg), i.cb(-1)
                                }), a.onLoad(function() {
                                    console.log("\u52a0\u8f7d\u4e8b\u4ef6\u56de\u8c03")
                                }), a.onClose(function(e) {
                                    console.log("\u662f\u5426\u89c2\u770b\u5b8c\u6574\u4e86 " + e.isEnded), e.isEnded && cc.Mgr.game.updateMissionProgressById(o.AdsShow), i.cb(e.isEnded ? 0 : 1), a.offLoad(), a.offError(), a.offClose()
                                })
                            } else if ("qq" == this.platform) {
                                var s = qq.createRewardedVideoAd({
                                    adUnitId: n.getVideoAdId(e)
                                });
                                s.load().then(function() {
                                    s.show(), cc.game.pause()
                                }).catch(function(e) {
                                    cc.game.resume(), console.log(e.errMsg)
                                }), s.onError(function(e) {
                                    console.log("\u5e7f\u544a\u52a0\u8f7d\u51fa\u9519 " + e.errMsg), cc.game.resume(), i.cb(-1)
                                }), s.onLoad(function() {
                                    console.log("\u52a0\u8f7d\u4e8b\u4ef6\u56de\u8c03")
                                }), s.onClose(function(e) {
                                    cc.game.resume(), e.isEnded && cc.Mgr.game.updateMissionProgressById(o.AdsShow), console.log("\u662f\u5426\u89c2\u770b\u5b8c\u6574\u4e86 " + e.isEnded), i.cb(e.isEnded ? 0 : 1), s.offLoad(), s.offError(), s.offClose()
                                })
                            } else if ("uc" == this.platform) {
                                var c = uc.createRewardVideoAd();
                                c.show().then().catch(function(e) {
                                    return console.log(e)
                                }), c.onLoad(function() {
                                    console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u52a0\u8f7d\u6210\u529f")
                                }), c.onClose(function(e) {
                                    console.log("\u662f\u5426\u89c2\u770b\u5b8c\u6574\u4e86 " + e.isEnded), i.cb(e.isEnded ? 0 : 1), e.isEnded && cc.Mgr.game.updateMissionProgressById(o.AdsShow), i.cb = null, c.offLoad(), c.offError(), c.offClose()
                                })
                            } else if ("baidu" == this.platform) {
                                console.log("\u767e\u5ea6\u7684\u89c6\u9891\u5e7f\u544a  " + this.getVideoAdId(e));
                                var r = swan.createRewardedVideoAd({
                                    adUnitId: n.getVideoAdId(e),
                                    appSid: n.baiduAdsAppId
                                });
                                r.load().then(function() {
                                    r.show(), cc.game.pause()
                                }).catch(function(e) {
                                    cc.game.resume(), console.log(e.errMsg)
                                }), r.onError(function(e) {
                                    console.log("\u5e7f\u544a\u52a0\u8f7d\u51fa\u9519 " + e.errMsg), i.cb(-1)
                                }), r.onLoad(function() {
                                    console.log("\u52a0\u8f7d\u4e8b\u4ef6\u56de\u8c03")
                                }), r.onClose(function(e) {
                                    cc.game.resume(), e.isEnded && cc.Mgr.game.updateMissionProgressById(o.AdsShow), console.log("\u662f\u5426\u89c2\u770b\u5b8c\u6574\u4e86 " + e.isEnded), n.cb(e.isEnded ? 0 : 1), r.offLoad(), r.offError(), r.offClose()
                                })
                            } else if ("tt" == this.platform) {
                                console.log("\u5934\u6761\u7684\u89c6\u9891\u5e7f\u544a  " + this.getVideoAdId(e));
                                var l = tt.createRewardedVideoAd({
                                    adUnitId: n.getVideoAdId(e)
                                });
                                l.load().then(function() {
                                    return l.show()
                                }).catch(function(e) {
                                    return console.log(e.errMsg)
                                }), l.onError(function(e) {
                                    console.log("\u5e7f\u544a\u52a0\u8f7d\u51fa\u9519 " + e.errMsg), cc.Mgr.UIMgr.showPrompt("Không tải được quảng cáo")
                                }), l.onLoad(function() {
                                    console.log("\u5934\u6761\u89c6\u9891\u52a0\u8f7d\u4e8b\u4ef6\u56de\u8c03")
                                }), l.onClose(function(e) {
                                    console.log("\u662f\u5426\u89c2\u770b\u5b8c\u6574\u4e86 " + e.isEnded), e.isEnded && cc.Mgr.game.updateMissionProgressById(o.AdsShow), i.cb(e.isEnded ? 0 : 1), l.offLoad(), l.offError(), l.offClose()
                                })
                            } else if ("qtt" == this.platform) {
                                cc.game.pause(), qttGame.showVideo(function(e) {
                                    cc.game.resume(), 1 == e ? i.cb(0) : cc.Mgr.UIMgr.showPrompt("Không tải được quảng cáo")
                                }, {})
                            } else if ("h5_4399" == this.platform) {
                                var h = this;
                                try {
                                    cc.game.pause()
                                } catch (gvPauseErr) {}
                                var runAd = window.ArcadeBridge && window.ArcadeBridge.runRewardAd;
                                if ("function" == typeof runAd) runAd(function() {
                                    try {
                                        cc.game.resume()
                                    } catch (gvResumeErr) {}
                                    try {
                                        cc.Mgr.game.updateMissionProgressById(o.AdsShow)
                                    } catch (gvMisErr) {}
                                    h.cb && h.cb(0)
                                }, function() {
                                    try {
                                        cc.game.resume()
                                    } catch (gvResumeErr2) {}
                                    cc.Mgr.UIMgr.showPrompt("Không tải được quảng cáo"), h.cb && h.cb(1)
                                });
                                else if ("function" == typeof GVAdBreak) GVAdBreak(function() {
                                    try {
                                        cc.game.resume()
                                    } catch (gvResumeErr3) {}
                                    try {
                                        cc.Mgr.game.updateMissionProgressById(o.AdsShow)
                                    } catch (gvMisErr2) {}
                                    h.cb && h.cb(0)
                                });
                                else {
                                    try {
                                        cc.game.resume()
                                    } catch (gvResumeErr4) {}
                                    console.warn("GV_ADBREAK_MISSING");
                                    var gvHost = window.location && window.location.hostname;
                                    var gvLocal = "localhost" === gvHost || "127.0.0.1" === gvHost || "" === gvHost;
                                    gvLocal ? h.cb && h.cb(0) : (cc.Mgr.UIMgr.showPrompt("Không tải được quảng cáo"), h.cb && h.cb(1))
                                }
                            } else this.cb(0)
                        } else cc.Mgr.PlatformController.showToast("Chưa có tính năng quảng cáo")
                    }
                }
            });
        t.exports = s, cc._RF.pop()
    }, {
        AdsParam: "AdsParam",
        Config: "Config",
        MissionType: "MissionType"
    }],
    AdsParam: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "695e9RD+bVAeoV3SQ2nie7d", "AdsParam");
        var n = cc.Enum({
            PointA: 1,
            PointB: 2,
            PointC: 3,
            PointD: 4,
            PointE: 5,
            PointF: 6,
            PointG: 7,
            PointH: 8,
            PointI: 9,
            PointJ: 10,
            PointK: 11,
            PointL: 12
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    AirDropData: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "b4232JqGKZD8ZAPp+5heYbz", "AirDropData");
        var n = cc.Class({
            extends: cc.Component,
            properties: {
                Level: 1,
                Plant1: 0,
                Plant2: 0
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    AirDropMapMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "1b99bN5SlxPNIIdcREK/DKV", "AirDropMapMgr");
        var n = e("DB_airdrop"),
            o = e("AirDropData"),
            a = cc.Class({
                extends: cc.Component,
                properties: {
                    dataList: {
                        default: [],
                        type: [o]
                    }
                },
                DecodeJson: function() {
                    var e = JSON.parse(n.data);
                    for (var t in e) {
                        var i = new o;
                        i.Level = e[t][0], i.Plant1 = e[t][1], i.Plant2 = e[t][2], this.dataList[t] = i
                    }
                },
                getDataByKey: function(e) {
                    return this.dataList[e]
                }
            });
        t.exports = a, cc._RF.pop()
    }, {
        AirDropData: "AirDropData",
        DB_airdrop: "DB_airdrop"
    }],
    AppStart: [function(e, t, i) {
        "use strict";

        function n() {
            console.log("Chúc bạn vui vẻ với thế giới trò chơi muggle"), cc.Mgr.Parse = !1, cc.Mgr.ParseProgress = 0, cc.Mgr.initData = !1, cc.Mgr.TDEvent = e("TDEventName"), cc.Mgr.Event = e("Event"), cc.Mgr.Utils = e("Utils"), cc.Mgr.Utils.init(), cc.Mgr.Config = e("Config"), cc.Mgr.Config.init(), cc.Mgr.ShareInfos = e("ShareInfos"), cc.Mgr.ShareInfos.init(), cc.Mgr.Http = e("HttpMgr"), cc.Mgr.NetMgr = e("NetMgr"), cc.Mgr.PlatformController = e("PlatformController"), cc.Mgr.PlatformController.Init(), cc.Mgr.AdsMgr = e("AdsMgr"), cc.Mgr.AdsMgr.Init();
            var t = e("AudioMgr");
            cc.Mgr.AudioMgr = new t, cc.Mgr.AudioMgr.init();
            var i = e("MapDataMgr");
            cc.Mgr.MapDataMgr = new i, cc.Mgr.MapDataMgr.initMaps();
            var n = e("game");
            cc.Mgr.game = n.getInstance();
            var o = e("UserDataMgr");
            cc.Mgr.UserDataMgr = new o, cc.Mgr.UserDataMgr.initData(), cc.Mgr.DragonMgr = e("DragonMgr");
            var a = e("AtlasMgr");
            cc.Mgr.AtlasMgr = new a, cc.Mgr.AtlasMgr.init();
            var s = e("BulletPool");
            cc.Mgr.BulletPool = new s, cc.Mgr.BulletPool.InitPool(), cc.Mgr.UIItemMgr = e("uiItemMgr"), cc.Mgr.UIItemMgr.loadItemsPre();
            var c = e("EffectMgr");
            cc.Mgr.EffectMgr = new c, cc.Mgr.EffectMgr.InitPool();
            var r = e("plantManage");
            cc.Mgr.plantMgr = r.instance;
            var l = e("flowerPotManage");
            cc.Mgr.flowerPotMgr = l.instance;
            var h = e("ZomBieMgr");
            cc.Mgr.ZombieMgr = h.instance;
            var g = e("UIMgr");
            cc.Mgr.UIMgr = g.instance
        }
        cc._RF.push(t, "294db5kmhVNM6K0TAEwEyUS", "AppStart"), cc.director.initMgr = !1, cc.Class({
            extends: cc.Component,
            properties: {
                canvas: cc.Canvas
            },
            setFitDesign: function() {
                cc.winSize.height / cc.winSize.width <= 1.6 ? (this.canvas.fitHeight = !0, this.canvas.fitWidth = !1) : (this.canvas.fitHeight = !1, this.canvas.fitWidth = !0)
            },
            onLoad: function() {
                this.setFitDesign(), cc.director.GlobalEvent.clear(), cc.Mgr = {}, cc.director.getCollisionManager().enabled = !0
            },
            start: function() {
                n(), cc.Mgr.PlatformController.ShareTopNav()
            }
        }), cc._RF.pop()
    }, {
        AdsMgr: "AdsMgr",
        AtlasMgr: "AtlasMgr",
        AudioMgr: "AudioMgr",
        BulletPool: "BulletPool",
        Config: "Config",
        DragonMgr: "DragonMgr",
        EffectMgr: "EffectMgr",
        Event: "Event",
        HttpMgr: "HttpMgr",
        MapDataMgr: "MapDataMgr",
        NetMgr: "NetMgr",
        PlatformController: "PlatformController",
        ShareInfos: "ShareInfos",
        TDEventName: "TDEventName",
        UIMgr: "UIMgr",
        UserDataMgr: "UserDataMgr",
        Utils: "Utils",
        ZomBieMgr: "ZomBieMgr",
        flowerPotManage: "flowerPotManage",
        game: "game",
        plantManage: "plantManage",
        uiItemMgr: "uiItemMgr"
    }],
    AtlasMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "5d779T4kYVAi6VYgdDU9irp", "AtlasMgr");
        var n = e("AtlasType"),
            o = cc.Class({
                extends: cc.Component,
                properties: {
                    uiAtlas: cc.SpriteAtlas,
                    mainUIAtlas: cc.SpriteAtlas,
                    plantHeadAtlas: cc.SpriteAtlas,
                    plantHeadA: cc.SpriteAtlas,
                    plantHeadB: cc.SpriteAtlas,
                    smallPlantHeadAtlas: cc.SpriteAtlas
                },
                init: function() {
                    var e = this;
                    cc.loader.loadRes("atlas/mainUI", cc.SpriteAtlas, function(t, i) {
                        t ? cc.error(t.message || t) : e.mainUIAtlas = i
                    }), cc.loader.loadRes("atlas/headNew", cc.SpriteAtlas, function(t, i) {
                        t ? cc.error(t.message || t) : e.plantHeadAtlas = i
                    })
                },
                getSpriteFrame: function(e, t) {
                    var i = "null";
                    switch (e) {
                        case n.mainUI:
                            i = this.mainUIAtlas.getSpriteFrame(t);
                            break;
                        case n.PlantHead:
                            i = this.plantHeadAtlas.getSpriteFrame(t)
                    }
                    return i
                },
                getSpriteAtlas: function(e) {
                    var t = null;
                    switch (e) {
                        case n.mainUI:
                            t = this.mainUIAtlas;
                            break;
                        case n.PlantHead:
                            t = this.plantHeadAtlas
                    }
                    return t
                }
            });
        t.exports = o, cc._RF.pop()
    }, {
        AtlasType: "AtlasType"
    }],
    AtlasType: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "d49ecQ28VdASK8ivL2OcTfA", "AtlasType");
        var n = cc.Enum({
            UI: 1,
            Game: 2,
            PlantHead: 3,
            SmallHead: 4,
            mainUI: 7
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    AudioMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "c45cbALFTRJhZChw3h3yR9+", "AudioMgr");
        var n = null;
        cc.Class({
            extends: cc.Component,
            properties: {
                bgmVolume: .5,
                sfxVolume: 1.5,
                bgmAudioID: -1,
                soundAudioID: -1,
                musicState: 1
            },
            init: function() {
                var e;
                cc.Mgr.loadSound = !1, n = this, null != (e = cc.sys.localStorage.getItem("bgmVolume")) && "" != e && (this.bgmVolume = parseFloat(e)), null != (e = cc.sys.localStorage.getItem("sfxVolume")) && "" != e && (this.sfxVolume = parseFloat(e)), cc.game.on(cc.game.EVENT_HIDE, function() {
                    console.log("cc.audioEngine.pauseAll"), cc.audioEngine.pauseAll()
                }), cc.game.on(cc.game.EVENT_SHOW, function() {
                    console.log("cc.audioEngine.resumeAll"), n.resumeAll()
                }), this.musicState = this.bgmVolume > 0 ? 1 : 0
            },
            getUrl: function(e) {
                return cc.url.raw("resources/sound/" + e + ".mp3")
            },
            playBGM: function(e) {
                if (0 != this.musicState) {
                    var t = this.getUrl(e);
                    this.bgmAudioID >= 0 && cc.audioEngine.stop(this.bgmAudioID), this.bgmAudioID = cc.audioEngine.play(t, !0, this.bgmVolume)
                }
            },
            playSFX: function(e) {
                if (0 != this.musicState) {
                    var t = this.getUrl(e);
                    cc.audioEngine.play(t, !1, this.sfxVolume)
                }
            },
            setSFXVolume: function(e) {
                this.sfxVolume != e && (cc.sys.localStorage.setItem("sfxVolume", e), this.sfxVolume = e)
            },
            setBGMVolume: function(e, t) {
                (this.bgmVolume != e || t) && (cc.sys.localStorage.setItem("bgmVolume", e), this.bgmVolume = e, cc.audioEngine.setVolume(this.bgmAudioID, e))
            },
            openAudio: function() {
                this.musicState = 1, this.setSFXVolume(1), this.setBGMVolume(1)
            },
            closeAudio: function() {
                this.musicState = 0, this.setSFXVolume(0), this.setBGMVolume(0)
            },
            pauseAll: function() {
                cc.audioEngine.pauseAll()
            },
            resumeAll: function() {
                cc.audioEngine.resumeAll()
            },
            getVoiceState: function() {
                return this.musicState
            }
        });
        cc._RF.pop()
    }, {}],
    BulletPool: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "195ffaZSQJGy4bSrv3SxKxE", "BulletPool");
        var n = cc.Class({
            extends: cc.Component,
            properties: {
                obPrefab: cc.Prefab
            },
            InitPool: function() {
                var e = this;
                this.pool = new cc.NodePool, cc.loader.loadRes("prefab/bullet/bullet", function(t, i) {
                    if (t) cc.error(t.message || t);
                    else {
                        e.obPrefab = i;
                        for (var n = 0; n < 16; n++) {
                            var o = cc.instantiate(i);
                            e.pool.put(o)
                        }
                    }
                })
            },
            clearList: function() {
                this.pool.clear()
            },
            getObFromPool: function() {
                var e = null;
                return this.pool.size() > 0 ? (e = this.pool.get()).active = !1 : e = cc.instantiate(this.obPrefab), e
            },
            ObBackToPool: function(e) {
                this.pool.put(e)
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    BulletType: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "2f246EB0nNI3Iyqom/cWfUx", "BulletType");
        var n = cc.Enum({
            Straight: 1,
            Curve: 2
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    BuyButtonData: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "919f6mNzhlAHoAXfbh8SJ2u", "BuyButtonData");
        var n = cc.Class({
            name: "BuyButtonData",
            properties: {
                Level: 1,
                button: 1
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    BuyButtonMapMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "c2dfeMauDtCppXUZNX11/4d", "BuyButtonMapMgr");
        var n = e("DB_buyButton"),
            o = e("BuyButtonData"),
            a = cc.Class({
                extends: cc.Component,
                properties: {
                    dataList: {
                        default: [],
                        type: [o]
                    }
                },
                DecodeJson: function() {
                    var e = JSON.parse(n.data);
                    for (var t in e) {
                        var i = new o;
                        i.Level = e[t][0], i.button = e[t][1], this.dataList[t] = i
                    }
                },
                getDataByKey: function(e) {
                    return this.dataList[e]
                }
            });
        t.exports = a, cc._RF.pop()
    }, {
        BuyButtonData: "BuyButtonData",
        DB_buyButton: "DB_buyButton"
    }],
    CButton: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "4206cTVEXxH3b3F37Qkbu5l", "CButton");
        var n = cc.Class({
            extends: cc.Button,
            properties: {
                btnAni: cc.Animation
            },
            start: function() {
                this.node.on(cc.Node.EventType.TOUCH_START, function() {
                    this.node.scale = 1, this.btnAni.pause()
                }, this), this.node.on(cc.Node.EventType.TOUCH_END, function() {
                    this.node.scale = 1, this.btnAni.resume()
                }, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, function() {
                    this.node.scale = 1, this.btnAni.resume()
                }, this)
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    Config: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "1c7b0w9FLxIVZ1Pxh3tlyxY", "Config");
        cc.Class({
            extends: cc.Component,
            statics: {
                giftUrl: "https://smallgameoss.oss-cn-beijing.aliyuncs.com/gift/gift.txt",
                configUrl: "https://smallgameoss.oss-cn-beijing.aliyuncs.com/config/config.txt",
                qtt_giftUrl: "http://39.100.233.215/GameConfig/zombieGame/gift.txt",
                qtt_configUrl: "http://39.100.233.215/GameConfig/zombieGame/config.txt",
                platform: "h5_4399",
                version: 1,
                isDevelop: !1,
                zOffsetY: 142,
                zBossLine: 100,
                allPlantCount: 60,
                shopAdsInterval: 30,
                insertAdRatio: 1,
                openGift: !1,
                insertAdInterval: 15,
                angryCost: 3,
                turnTableTimes: 8,
                lastWaveKey: "60_5",
                lastGameLevel: 60,
                language: "zh_CN",
                openInsertLevel: 4,
                CheckPotGrownInterval: .3,
                plantGetCheckLv: 7,
                bulletPowerCheckLv: 7,
                gameCheckLv: 7,
                onlineCoinRatio: 2,
                doubleCoinOpenLv: 4,
                angryPerTime: 30,
                doubleCoinKeepTime: 120,
                angryCostList: [3, 4, 5],
                discountLvConf: [0, 10, 10, 10],
                recycleRatio: .5,
                openDiscountState: !0,
                openLuckyMerge: !0,
                openLuckyMergeLv: 7,
                discountUseShareRatio: -1,
                openLuckyMergeRatio: .15,
                luckyMergeInterval: 60,
                buyPlantInShopUseShareRatio: -1,
                bigResultUseShare: -1,
                doubleUseShareRatio: -1,
                turnTableAssetUseDouble: .5,
                openGoldZombie: !1,
                activityGifts: ["666888", "520666", "520888"],
                giftDataList: [{
                    moneyRatio: 2,
                    gemNum: 50,
                    flowerPot: 6
                }, {
                    moneyRatio: 3,
                    gemNum: 40,
                    flowerPot: 4
                }, {
                    moneyRatio: 4,
                    gemNum: 30,
                    flowerPot: 6
                }],
                missionDataList: [{
                    id: 0,
                    checkType: 0,
                    misType: 0,
                    checkNum: 1,
                    progress: 0,
                    claimed: 0,
                    rewardType: "coin"
                }, {
                    id: 1,
                    checkType: 0,
                    misType: 1,
                    checkNum: 20,
                    progress: 0,
                    claimed: 0,
                    rewardType: "coin"
                }, {
                    id: 2,
                    checkType: 0,
                    misType: 2,
                    checkNum: 10,
                    progress: 0,
                    claimed: 0,
                    rewardType: "coin"
                }, {
                    id: 3,
                    checkType: 0,
                    misType: 3,
                    checkNum: 3,
                    progress: 0,
                    claimed: 0,
                    rewardType: "gem"
                }],
                achieveDataList: [{
                    id: 1,
                    checkType: 1,
                    level: 4,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 2,
                    checkType: 1,
                    level: 7,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 3,
                    checkType: 1,
                    level: 11,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 4,
                    checkType: 1,
                    level: 15,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 5,
                    checkType: 1,
                    level: 19,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 6,
                    checkType: 1,
                    level: 23,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 7,
                    checkType: 1,
                    level: 27,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 8,
                    checkType: 1,
                    level: 31,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 9,
                    checkType: 1,
                    level: 35,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 10,
                    checkType: 1,
                    level: 39,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 11,
                    checkType: 1,
                    level: 43,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 12,
                    checkType: 1,
                    level: 47,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 13,
                    checkType: 1,
                    level: 51,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 14,
                    checkType: 1,
                    level: 55,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }, {
                    id: 15,
                    checkType: 1,
                    level: 59,
                    checklv: 0,
                    progress: 0,
                    finished: 0
                }],
                signDataListSub: [{
                    id: 1,
                    rewardType: 1,
                    rewardNum: 5,
                    ratio: 1
                }, {
                    id: 2,
                    rewardType: 2,
                    rewardNum: 8,
                    ratio: 2
                }, {
                    id: 3,
                    rewardType: 1,
                    rewardNum: 10,
                    ratio: 1
                }, {
                    id: 4,
                    rewardType: 2,
                    rewardNum: 12,
                    ratio: 3
                }, {
                    id: 5,
                    rewardType: 1,
                    rewardNum: 15,
                    ratio: 1
                }, {
                    id: 6,
                    rewardType: 2,
                    rewardNum: 18,
                    ratio: 4
                }, {
                    id: 7,
                    rewardType: 1,
                    rewardNum: 20,
                    ratio: 1
                }],
                init: function() {
                    this.isDevelop || (console.log = function() {}, console.warn = function() {}, console.error = function() {}, cc.log = function() {}, cc.warn = function() {}, cc.error = function() {}), console.log("\u9ebb\u75f9\u7684\u9009\u62e9\u7684\u5e73\u53f0 = " + this.platform), "qtt" != this.platform && "h5_4399" != this.platform && (window.wx || window.tt || window.swan || window.qq || window.uc || (this.platform = "pc")), this.winSize = cc.view.getVisibleSize()
                },
                getGiftUrl: function() {
                    return "qtt" == this.platform || "pc" == this.platform || "uc" == this.platform ? this.qtt_giftUrl : this.giftUrl
                },
                getConfigUrl: function() {
                    return "qtt" == this.platform || "pc" == this.platform || "uc" == this.platform ? this.qtt_configUrl : this.configUrl
                }
            }
        });
        cc._RF.pop()
    }, {}],
    DB_achievementAwards: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "95773Y8lMpGOq1a/EQmRovz", "DB_achievementAwards");
        var n = cc.Class({
            name: "DB_achievementAwards",
            statics: {
                dataLen: 15,
                dataHead: '["id", "Level", "Gain_5", "Gain_20", "Gain_50", "Gain_100", "Gain_200"]',
                data: '{"1":[1,4,1,0,0,0,0],"2":[2,7,2,3,5,8,10],"3":[3,11,2,3,5,8,10],"4":[4,15,3,5,8,15,15],"5":[5,19,3,5,8,15,20],"6":[6,23,5,8,10,15,20],"7":[7,27,5,8,10,15,20],"8":[8,31,5,8,15,20,20],"9":[9,35,5,8,15,20,20],"10":[10,39,10,15,20,20,20],"11":[11,43,10,15,20,20,20],"12":[12,47,15,20,20,20,20],"13":[13,51,15,20,20,20,0],"14":[14,55,20,20,20,0,0],"15":[15,59,20,20,0,0,0]}'
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    DB_airdrop: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "11335GtX3lDrJIFsPjkNvez", "DB_airdrop");
        var n = cc.Class({
            name: "DB_airdrop",
            statics: {
                dataLen: 60,
                dataHead: '["Level", "Plant1", "Plant2"]',
                data: '{"1":[1,1,0],"2":[2,1,0],"3":[3,1,0],"4":[4,1,2],"5":[5,1,2],"6":[6,2,0],"7":[7,2,0],"8":[8,3,0],"9":[9,3,0],"10":[10,3,4],"11":[11,4,0],"12":[12,4,0],"13":[13,4,5],"14":[14,5,0],"15":[15,5,6],"16":[16,6,0],"17":[17,7,0],"18":[18,8,0],"19":[19,9,0],"20":[20,10,0],"21":[21,11,0],"22":[22,12,0],"23":[23,13,0],"24":[24,14,0],"25":[25,15,0],"26":[26,16,0],"27":[27,17,0],"28":[28,18,0],"29":[29,19,0],"30":[30,20,0],"31":[31,21,0],"32":[32,22,0],"33":[33,23,0],"34":[34,24,0],"35":[35,25,0],"36":[36,26,0],"37":[37,27,0],"38":[38,28,0],"39":[39,29,0],"40":[40,30,0],"41":[41,31,0],"42":[42,32,0],"43":[43,33,0],"44":[44,34,0],"45":[45,35,0],"46":[46,36,0],"47":[47,37,0],"48":[48,38,0],"49":[49,39,0],"50":[50,40,0],"51":[51,41,0],"52":[52,42,0],"53":[53,43,0],"54":[54,44,0],"55":[55,45,0],"56":[56,46,0],"57":[57,47,0],"58":[58,48,0],"59":[59,49,0],"60":[60,50,0]}'
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    DB_buyButton: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "ae0d2g1t7BL+4n5tljRLWgK", "DB_buyButton");
        var n = cc.Class({
            name: "DB_buyButton",
            statics: {
                dataLen: 6,
                dataHead: '["Level", "button"]',
                data: '{"1":[1,1],"2":[2,1],"3":[3,1],"4":[4,1],"5":[5,2],"6":[6,2],"7":[7,3],"8":[8,3],"9":[9,4],"10":[10,4],"11":[11,5],"12":[12,5],"13":[13,6],"14":[14,7],"15":[15,8],"16":[16,9],"17":[17,10],"18":[18,11],"19":[19,12],"20":[20,13],"21":[21,14],"22":[22,15],"23":[23,16],"24":[24,17],"25":[25,18],"26":[26,19],"27":[27,20],"28":[28,21],"29":[29,22],"30":[30,23],"31":[31,24],"32":[32,25],"33":[33,26],"34":[34,27],"35":[35,28],"36":[36,29],"37":[37,30],"38":[38,31],"39":[39,32],"40":[40,33],"41":[41,34],"42":[42,35],"43":[43,36],"44":[44,37],"45":[45,38],"46":[46,39],"47":[47,40],"48":[48,41],"49":[49,42],"50":[50,43],"51":[51,44],"52":[52,45],"53":[53,46],"54":[54,47],"55":[55,48],"56":[56,49],"57":[57,50],"58":[58,51],"59":[59,52],"60":[60,53]}'
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    DB_droneRewards: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "73eb5/lxRVKw7ls4qlUMNDW", "DB_droneRewards");
        var n = cc.Class({
            name: "DB_droneRewards",
            statics: {
                dataLen: 6,
                dataHead: '["Level", "Drone"]',
                data: '{"1":[1,1],"2":[2,1],"3":[3,1],"4":[4,2],"5":[5,3],"6":[6,3],"7":[7,3],"8":[8,4],"9":[9,4],"10":[10,4],"11":[11,5],"12":[12,5],"13":[13,6],"14":[14,6],"15":[15,7],"16":[16,7],"17":[17,8],"18":[18,9],"19":[19,10],"20":[20,11],"21":[21,12],"22":[22,13],"23":[23,14],"24":[24,15],"25":[25,16],"26":[26,16],"27":[27,17],"28":[28,18],"29":[29,19],"30":[30,20],"31":[31,21],"32":[32,22],"33":[33,23],"34":[34,24],"35":[35,25],"36":[36,26],"37":[37,27],"38":[38,28],"39":[39,29],"40":[40,30],"41":[41,31],"42":[42,32],"43":[43,33],"44":[44,34],"45":[45,35],"46":[46,36],"47":[47,37],"48":[48,38],"49":[49,39],"50":[50,40],"51":[51,41],"52":[52,42],"53":[53,43],"54":[54,44],"55":[55,45],"56":[56,46],"57":[57,47],"58":[58,48],"59":[59,49],"60":[60,50]}'
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    DB_i18n: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "9961dviWXVDPLn5xuM6Qx5W", "DB_i18n");
        var n = cc.Class({
            name: "DB_i18n",
            statics: {
                dataLen: 1e3,
                dataHead: '["Key", "en_US", "zh_CN", "zh_TW", "zh_HK", "de_DE"]',
                data: {
                    "tap-to-close": ["tap-to-close", "TAP TO CLOSE", "BẤM ĐỂ ĐÓNG", "\u9ede\u64ca\u95dc\u9589", "\u9ede\u64ca\u95dc\u9589", "ZUM SCHLIESSEN ANTIPPEN"],
                    "btn-free": ["btn-free", "FREE !", "Miễn phí!", "\u514d\u8cbb\uff01", "\u514d\u8cbb\uff01", "GRATIS!"],
                    "btn-claim": ["btn-claim", "CLAIM", "NHẬN", "\u9818\u53d6", "\u9818\u53d6", "NEHMEN"],
                    "btn-claimed": ["btn-claimed", "CLAIMED", "ĐÃ NHẬN", "\u5df2\u9818\u53d6", "\u5df2\u9818\u53d6", "ERHAlTEN"],
                    "home-rank": ["home-rank", "RANK", "XẾP HẠNG", "XẾP HẠNG", "XẾP HẠNG", "Rang"],
                    "home-quests": ["home-quests", "QUESTS", "NHIỆM VỤ", "\u4efb\u52d9", "\u4efb\u52d9", "QUESTS"],
                    "home-gems": ["home-gems", "GEMS", "KIM CƯƠNG", "\u5bf6\u77f3", "\u5bf6\u77f3", "DIAMANTEN"],
                    "home-member": ["home-member", "MEMBER", "THÀNH VIÊN", "\u6703\u54e1", "\u6703\u54e1", "MITGLIED"],
                    "angry-title": ["angry-title", "ANGRY", "GIẬN DỮ", "GIẬN DỮ", "GIẬN DỮ", "WxdcTEND"],
                    "angry-speedx2": ["angry-speedx2", "Attack Speed x2 In", "Tốc độ tấn công x2", "\u653b\u64ca\u901f\u5ea6 x2", "\u653b\u64ca\u901f\u5ea6 x2", "Angriffsgeschwindigkeit x2 In"],
                    "angry-add-another30": ["angry-add-another30", "Add Another 30 Seconds!", "Thêm 30s giận dữ", "\u589e\u52a030\u79d2\u6301\u7e8c\u6642\u9593\uff01", "\u589e\u52a030\u79d2\u6301\u7e8c\u6642\u9593\uff01", "Erhalte weiteren 30 Sekunden!"],
                    lose: ["lose", "LOSE", "THUA", "\u5931\u6557", "\u5931\u6557", "VERLIEREN"],
                    win: ["win", "WIN", "THẮNG", "\u52dd\u5229", "\u52dd\u5229", "GEWINNEN"],
                    "buy-title": ["buy-title", "CONGRATULATIONS!", "CHÚC MỪNG BẠN!", "\u606d\u559c\u7372\u5f97\uff01", "\u606d\u559c\u7372\u5f97\uff01", "GRATULIEREN"],
                    "buy-level": ["buy-level", "LEVEL", "LEVEL", "\u7b49\u7d1a", "\u7b49\u7d1a", "Lv."],
                    "love-this-game": ["love-this-game", "Love This Game?", "Yêu thích trò chơi này?", "\u559c\u6b61\u9019\u500b\u904a\u6232\u55ce\uff1f", "\u559c\u6b61\u9019\u500b\u904a\u6232\u55ce\uff1f", "Gefxe4llt dir dieses Spiel?"],
                    "please-rate-us": ["please-rate-us", "Please rate us 5 stars to", "Hãy đánh giá 5 sao", "\u7d66\u500b\u4e94\u661f\u597d\u8a55\u5427\uff01", "\u7d66\u500b\u4e94\u661f\u597d\u8a55\u5427\uff01", "Beoordeel ons 5 sterren"],
                    "make-more-updates": ["make-more-updates", "make more updates~", "EMPTY", "EMPTY", "EMPTY", "weitere Updates machen ~"],
                    "write-comment-iOS": ["write-comment-iOS", "Thank you! How about give us a rating on App Store?", "Cảm ơn! Đánh giá giúp trên App Store nhé?", "\u975e\u5e38\u611f\u8b1d\uff01\u8981\u4e0d\u8981\u5728App Store\u7559\u4e0b\u8a55\u8ad6\u5462\uff1f", "\u975e\u5e38\u611f\u8b1d\uff01\u8981\u4e0d\u8981\u5728App Store\u7559\u4e0b\u8a55\u8ad6\u5462\uff1f", "Vielen Dank! Wie wxe4re es mit einer Bewertung im App Store?"],
                    "write-comment-Andorid": ["write-comment-Andorid", "Thank you! How about give us a rating on Google Play?", "Cảm ơn! Đánh giá giúp trên Google Play nhé?", "\u975e\u5e38\u611f\u8b1d\uff01\u8981\u4e0d\u8981\u5728Google Play\u7559\u4e0b\u8a55\u8ad6\u5462\uff1f", "\u975e\u5e38\u611f\u8b1d\uff01\u8981\u4e0d\u8981\u5728Google Play\u7559\u4e0b\u8a55\u8ad6\u5462\uff1f", "Vielen Dank! Wie wxe4re es mit einer Bewertung bei Google Play?"],
                    "give-feedback": ["give-feedback", "Thank you! Could you please give us some feedback?", "Cảm ơn! Cho mình xin góp ý nhé?", "\u975e\u5e38\u611f\u8b1d\uff01\u80fd\u8acb\u60a8\u6307\u51fa\u6211\u5011\u7684\u4e0d\u8db3\u55ce\uff1f", "\u975e\u5e38\u611f\u8b1d\uff01\u80fd\u8acb\u60a8\u6307\u51fa\u6211\u5011\u7684\u4e0d\u8db3\u55ce\uff1f", "Vielen Dank! Kxf6nnten Sie uns bitte ein Feedback geben?"],
                    "tap-to-star": ["tap-to-star", "Tap to rate us", "Chạm để đánh giá", "\u9ede\u64ca\u4ee5\u8a55\u5206", "\u9ede\u64ca\u4ee5\u8a55\u5206", "Tippen Sie, um zu bewerten"],
                    "button-5rating": ["button-5rating", "5-star-rating", "5 sao", "\u4e94\u661f\u597d\u8a55", "\u4e94\u661f\u597d\u8a55", "5-Sterne-Bewertung"],
                    "button-4rating": ["button-4rating", "4-star-rating", "4 sao", "\u56db\u661f\u597d\u8a55", "\u56db\u661f\u597d\u8a55", "4-Sterne-Bewertung"],
                    "button-feedback": ["button-feedback", "Feedback", "Góp ý", "\u554f\u984c\u53cd\u994b", "\u554f\u984c\u53cd\u994b", "Feedback"],
                    "btn-rate-now": ["btn-rate-now", "RATE NOW", "Đánh giá ngay", "\u73fe\u5728\u5c31\u53bb", "\u73fe\u5728\u5c31\u53bb", "JETZT BEWERTEN"],
                    "btn-nothanks": ["btn-nothanks", "No, thanks", "Không, cảm ơn", "\u6b98\u5fcd\u62d2\u7d55", "\u6b98\u5fcd\u62d2\u7d55", "Nein Danke"],
                    "info-title": ["info-title", "INFORMATION", "THÔNG TIN", "\u500b\u4eba\u4fe1\u606f", "\u500b\u4eba\u4fe1\u606f", "INFORMATION"],
                    "info-default-name": ["info-default-name", "Gardener_Jack", "Gardener_Jack", "Gardener_Jack", "Gardener_Jack", "Gardener_Jack"],
                    "info-sound": ["info-sound", "Sound", "Hiệu ứng", "\u97f3\u6548", "\u97f3\u6548", "Sound"],
                    "info-music": ["info-music", "Music", "Nhạc", "\u97f3\u6a02", "\u97f3\u6a02", "Musik"],
                    "info-on": ["info-on", "ON", "Bật", "\u958b", "\u958b", "EMPTY"],
                    "info-off": ["info-off", "OFF", "Tắt", "\u95dc", "\u95dc", "EMPTY"],
                    "invite-title": ["invite-title", "REFER {0} FRIENDS", "Mời {0} bạn", "\u4e0d\u9700\u8981", "\u4e0d\u9700\u8981", "\u4e0d\u9700\u8981"],
                    "invite-only-new-player": ["invite-only-new-player", "Only new player", "Chỉ tính bạn mới", "\u4e0d\u9700\u8981", "\u4e0d\u9700\u8981", "\u4e0d\u9700\u8981"],
                    "invite-login-could-you": ["invite-login-could-you", "login could you get it!", "đăng nhập mới nhận thưởng!", "\u4e0d\u9700\u8981", "\u4e0d\u9700\u8981", "\u4e0d\u9700\u8981"],
                    "invite-friends-invited": ["invite-friends-invited", "Friends Invited:", "Bạn đã mời:", "\u4e0d\u9700\u8981", "\u4e0d\u9700\u8981", "\u4e0d\u9700\u8981"],
                    "mission-title-daily-quests": ["mission-title-daily-quests", "DAILY QUESTS", "NHIỆM VỤ NGÀY", "\u6bcf\u65e5\u4efb\u52d9", "\u6bcf\u65e5\u4efb\u52d9", "Txc4GL. QUESTS"],
                    "mission-title-achievements": ["mission-title-achievements", "ACHIEVEMENTS", "THÀNH TÍCH", "THÀNH TÍCH", "THÀNH TÍCH", "ERFOLGE"],
                    "newItem-title": ["newItem-title", "CONGRATULATIONS!", "CHÚC MỪNG BẠN!", "\u606d\u559c\u7372\u5f97\uff01", "\u606d\u559c\u7372\u5f97\uff01", "GRATULIEREN"],
                    "newVersion-title": ["newVersion-title", "UPDATE", "CẬP NHẬT", "CẬP NHẬT", "CẬP NHẬT", "UPDATE"],
                    "newVersion-some-updates": ["newVersion-some-updates", "There are some updates.", "Đã có bản cập nhật!", "\u904a\u6232\u66f4\u65b0\u5df2\u6e96\u5099\u597d\uff01", "\u904a\u6232\u66f4\u65b0\u5df2\u6e96\u5099\u597d\uff01", "Er zijn enkele updates."],
                    "newVersion-btn-yes": ["newVersion-btn-yes", "Yes", "OK", "\u78ba\u5b9a", "\u78ba\u5b9a", "OK"],
                    "offline-title": ["offline-title", "OFFLINE EARNINGS", "THU NHẬP OFFLINE", "\u96e2\u7dda\u6536\u76ca", "\u96e2\u7dda\u6536\u76ca", "OFFINE EINKOMMEN"],
                    "offline-you-earned": ["offline-you-earned", "You Earned", "Bạn đã kiếm", "\u5df2\u8cfa\u53d6\u6536\u76ca", "\u5df2\u8cfa\u53d6\u6536\u76ca", "Dein Einkommen War"],
                    "offline-extra20": ["offline-extra20", "+ Extra 20% Offline Earnings", "Thêm 20% vàng Offline", "\u984d\u5916\u7372\u5f9720%\u96e2\u7dda\u6536\u76ca", "\u984d\u5916\u7372\u5f9720%\u96e2\u7dda\u6536\u76ca", "+20% Offline Einkommen"],
                    "offline-getx2": ["offline-getx2", "GET x 2", "NHẬN 2", "NHẬN 2", "NHẬN 2", "Erh. x 2"],
                    "offline-getx3": ["offline-getx3", "GET x 3", "NHẬN 3", "NHẬN 3", "NHẬN 3", "Erh. x 3"],
                    "purchase-title": ["purchase-title", "GEMS SHOP", "SHOP KIM CƯƠNG", "\u5bf6\u77f3\u5546\u5e97", "\u5bf6\u77f3\u5546\u5e97", "DIAMANTENLADEN"],
                    "rank-title": ["rank-title", "RANK", "XẾP HẠNG", "XẾP HẠNG", "XẾP HẠNG", "RANG"],
                    "rank-friends": ["rank-friends", "FRIENDS", "BẠN BÈ", "\u4e0d\u9700\u8981", "\u4e0d\u9700\u8981", "\u4e0d\u9700\u8981"],
                    "rank-global": ["rank-global", "GLOBAL", "TOÀN CẦU", "\u4e0d\u9700\u8981", "\u4e0d\u9700\u8981", "\u4e0d\u9700\u8981"],
                    "rank-ntv-title": ["rank-ntv-title", "RANK", "XẾP HẠNG", "XẾP HẠNG", "XẾP HẠNG", "Rang"],
                    "remind-title": ["remind-title", "REMIND", "CHÚ Ý", "\u6ce8\u610f", "\u6ce8\u610f", "HERINNEREN"],
                    "remind-description": ["remind-description", "Sorry, the payment function is currently incompatible with your system. Please enter Merge Flowers vs. Zombies via Instant Games to complete purchase on a computer.", "Hệ thống chưa hỗ trợ thanh toán.", "\u5c0d\u4e0d\u8d77\uff0c\u60a8\u7684\u7cfb\u7d71\u4e0d\u652f\u6301\u4ed8\u8cbb\u3002", "\u5c0d\u4e0d\u8d77\uff0c\u60a8\u7684\u7cfb\u7d71\u4e0d\u652f\u6301\u4ed8\u8cbb\u3002", "Sorry, de betalingsfunctie is momenteel niet compatibel met uw systeem."],
                    "remind-btn-ok": ["remind-btn-ok", "OK", "OK", "\u78ba\u5b9a", "\u78ba\u5b9a", "OK"],
                    "rename-title": ["rename-title", "NICKNAME", "BIỆT DANH", "\u66b1\u7a31", "\u66b1\u7a31", "SPITZNAME"],
                    "rename-enter-a-new": ["rename-enter-a-new", "Enter A New Name:", "Nhập tên mới:", "\u8f38\u5165\u65b0\u7684\u540d\u5b57\uff1a", "\u8f38\u5165\u65b0\u7684\u540d\u5b57\uff1a", "Geben Sie einen neuen Namen:"],
                    PLACEHOLDER_LABEL: ["PLACEHOLDER_LABEL", "Enter text here...", "Nhập tại đây...", "\u5728\u9019\u88e1\u8f38\u5165...", "\u5728\u9019\u88e1\u8f38\u5165...", "Voeg hier tekst in..."],
                    "rename-btn-confirm": ["rename-btn-confirm", "CONFIRM", "XÁC NHẬN", "\u78ba\u8a8d", "\u78ba\u8a8d", "WEITER"],
                    "shop-title": ["shop-title", "SHOP", "CỬA HÀNG", "\u5546\u5e97", "\u5546\u5e97", "LADEN"],
                    "spin-title": ["spin-title", "LUCKY SPIN", "VÒNG QUAY MAY MẮN", "\u5e78\u904b\u8f49\u76e4", "\u5e78\u904b\u8f49\u76e4", "GLxdcCKSDREHEN"],
                    "spin-ad-cd": ["spin-ad-cd", "Next free spin in {0}", "Lượt quay Free sau {0}", "\u8ddd\u96e2\u4e0b\u6b21\u514d\u8cbb\u9084\u6709 {0}", "\u8ddd\u96e2\u4e0b\u6b21\u514d\u8cbb\u9084\u6709 {0}", "Nxe4chster Freispiel in {0}"],
                    "subscribe-description-remove-ad": ["subscribe-description-remove-ad", "<outline color=black width=1>Remove ADs<br/>In Shop !</outline>", "<outline color=black width=1>Tắt quảng cáo<br/>trong Shop!</outline>", "<outline color=black width=1>\u79fb\u9664\u63d2\u5c4f\u5ee3\u544a</outline>", "<outline color=black width=1>\u79fb\u9664\u63d2\u5c4f\u5ee3\u544a</outline>", "<outline color=black width=1>Entferne Werbung <br/>im Laden !</outline>"],
                    "subscribe-description-add-loot": ["subscribe-description-add-loot", "<outline color=black width=1>+30% Zombies<br/>Loot</outline>", "<outline color=black width=1>+30% quà<br/>quái vật</outline>", "<outline color=black width=1>+30%\u6bad\u5c4d\u6389\u843d</outline>", "<outline color=black width=1>+30%\u6bad\u5c4d\u6389\u843d</outline>", "<outline color=black width=1>+ 30% Zombies Loot</outline>"],
                    "subscribe-description-offline-earning": ["subscribe-description-offline-earning", "<outline color=black width=1>+20% Offline<br/>Earnings</outline>", "<outline color=black width=1>+20% vàng<br/>offline</outline>", "<outline color=black width=1>+20%\u96e2\u7dda\u6536\u76ca</outline>", "<outline color=black width=1>+20%\u96e2\u7dda\u6536\u76ca</outline>", "<outline color=black width=1>+20% Offline <br/>Einkommen</outline>"],
                    "subscribe-lbl-get": ["subscribe-lbl-get", "Get", "Nhận mỗi ngày", "\u6bcf\u5929\u7372\u5f97", "\u6bcf\u5929\u7372\u5f97", "Erhalten"],
                    "subscribe-lbl-x10everyday": ["subscribe-lbl-x10everyday", "x10 Everyday !", "x10", "x10", "x10", "10 Jeden Tag!"],
                    "subscribe-start-for-free": ["subscribe-start-for-free", "Start For Free", "Dùng miễn phí", "\u514d\u8cbb\u4f7f\u7528", "\u514d\u8cbb\u4f7f\u7528", "Gratis Start"],
                    "subscribe-owned": ["subscribe-owned", "OWNED", "ĐÃ CÓ", "\u5df2\u7372\u5f97", "\u5df2\u7372\u5f97", "OWNED"],
                    "subscribe-terms-of-use": ["subscribe-terms-of-use", "Term of use", "Điều khoản", "\u670d\u52d9\u5354\u8b70", "\u670d\u52d9\u5354\u8b70", "Term of use"],
                    "subscribe-privacy-policy": ["subscribe-privacy-policy", "Privacy Policy", "Bảo mật", "\u96b1\u79c1\u653f\u7b56", "\u96b1\u79c1\u653f\u7b56", "Privacy Policy"],
                    "subscribeInvalid-description": ["subscribeInvalid-description", "<outline color=black width=2>GOLD MEMBERSHIP <br/>HAS BEEN EXPIRED</outline>", "<outline color=black width=2>HỘI VIÊN VÀNG<br/>ĐÃ HẾT HẠN</outline>", "<outline color=black width=2>\u9ec3\u91d1\u6703\u54e1\u5df2\u7d93\u5931\u6548</outline>", "<outline color=black width=2>\u9ec3\u91d1\u6703\u54e1\u5df2\u7d93\u5931\u6548</outline>", "<outline color=black width=2>GOLD-MITGLIEDSCHAFT <br/>IST ABGELAUFEN</outline>"],
                    "subscribeInvalid-reactivate": ["subscribeInvalid-reactivate", "Reactivate!", "Kích hoạt lại!", "\u91cd\u65b0\u6fc0\u6d3b", "\u91cd\u65b0\u6fc0\u6d3b", "Reaktivieren!"],
                    "subscribeValid-description": ["subscribeValid-description", "<outline color=black width=2>YOU@_@VE BEEN <br/>GOLD MEMBERSHIP!</outline>", "<outline color=black width=2>BẠN ĐÃ LÀ<br/>HỘI VIÊN VÀNG!</outline>", "<outline color=black width=2>\u4f60\u6210\u70ba\u4e86\u9ec3\u91d1\u6703\u54e1\uff01</outline>", "<outline color=black width=2>\u4f60\u6210\u70ba\u4e86\u9ec3\u91d1\u6703\u54e1\uff01</outline>", "<outline color=black width=2>SIE SIND GOLD-MITGLIEDSCHAFT <br/>GEWORDEN!</outline>"],
                    "uavBonus-title": ["uavBonus-title", "UAV BONUS", "QUÀ UAV", "\u7121\u4eba\u6a5f\u79ae\u7269", "\u7121\u4eba\u6a5f\u79ae\u7269", "UAV BONUS"],
                    NoCoins: ["NoCoins", "Coins are not enough", "Thiếu vàng!", "\u91d1\u5e63\u4e0d\u8db3", "\u91d1\u5e63\u4e0d\u8db3", "Munten zijn niet genoeg"],
                    NoGems: ["NoGems", "Gems are not enough", "Thiếu kim cương", "\u5bf6\u77f3\u4e0d\u8db3", "\u5bf6\u77f3\u4e0d\u8db3", "Edelstenen zijn niet genoeg"],
                    ADNotReady: ["ADNotReady", "AD is not ready", "QC chưa sẵn sàng", "\u5ee3\u544a\u672a\u52a0\u8f09\u5b8c\u7562", "\u5ee3\u544a\u672a\u52a0\u8f09\u5b8c\u7562", "AD is niet klaar"],
                    NoSpaceForPlant: ["NoSpaceForPlant", "No more space", "Hết ô trống", "\u4f4d\u7f6e\u4e0d\u5920\u5566\uff01", "\u4f4d\u7f6e\u4e0d\u5920\u5566\uff01", "Keine Parkflxe4chen"],
                    TrashTip: ["TrashTip", "Drag here to sell", "Kéo thả vào đây để bán", "\u62d6\u52d5\u5230\u9019\u91cc\u4ee5\u8ce3\u51fa", "\u62d6\u52d5\u5230\u9019\u91cc\u4ee5\u8ce3\u51fa", "Sleep hier om te verkopen"],
                    RankLocked: ["RankLocked", "Unlock leaderboard until flower lv.7", "Cần Moe cấp 7 để mở xếp hạng", "\u7372\u5f97\u4e00\u682a7\u7d1a\u82b1\u4ee5\u89e3\u9396\u6392\u884c\u699c\u529f\u80fd", "\u7372\u5f97\u4e00\u682a7\u7d1a\u82b1\u4ee5\u89e3\u9396\u6392\u884c\u699c\u529f\u80fd", "Schalte die Bestenliste frei, bis die Blume Stufe 7 erreicht ist"],
                    InvalidName: ["InvalidName", "This name is invalid, try another one", "Tên không hợp lệ, thử tên khác", "\u7121\u6548\u7684\u904a\u6232\u540d\uff0c\u8acb\u91cd\u65b0\u8f38\u5165", "\u7121\u6548\u7684\u904a\u6232\u540d\uff0c\u8acb\u91cd\u65b0\u8f38\u5165", "Dieser Name ist ungxfcltig, versuchen Sie es mit einem anderen"],
                    "skillDescs-slowdown": ["skillDescs-slowdown", "Slow down the enemy for 1 second with $1% chance", "{0}% làm chậm địch 1 giây", "$1%\u7684\u6a5f\u7387\u6e1b\u901f\u76ee\u6a191\u79d2", "$1%\u7684\u6a5f\u7387\u6e1b\u901f\u76ee\u6a191\u79d2", "den Gegner 1 Sekunde lang mit einer Chance von $1% verlangsamen"],
                    "skillDescs-crit": ["skillDescs-crit", "Double damage with $1% chance", "{0}% gây sát thương x2", "$1%\u7684\u6a5f\u7387\u5c0d\u76ee\u6a19\u9020\u6210\u96d9\u500d\u50b7\u5bb3", "$1%\u7684\u6a5f\u7387\u5c0d\u76ee\u6a19\u9020\u6210\u96d9\u500d\u50b7\u5bb3", "Doppelter Schaden mit $1% Chance"],
                    "skillDescs-freeze": ["skillDescs-freeze", "Freeze the enemy for 1 second with $1% chance", "{0}% đóng băng địch 1 giây", "$1%\u7684\u6a5f\u7387\u51cd\u7d50\u76ee\u6a191\u79d2", "$1%\u7684\u6a5f\u7387\u51cd\u7d50\u76ee\u6a191\u79d2", "den Gegner 1 Sekunde lang mit einer Chance von $1% einfrieren"],
                    "shopItem-skill": ["shopItem-skill", "SKILL:", "KỸ NĂNG:", "\u6280\u80fd\uff1a", "\u6280\u80fd\uff1a", "Fxe4higkeit:"],
                    "rankItem-stage": ["rankItem-stage", "STAGE", "MÀN", "\u95dc\u5361", "\u95dc\u5361", "STUFE"],
                    "newPlant-title": ["newPlant-title", "UNLOCKED!", "MỞ KHÓA!", "\u65b0\u840c\u840c\uff01", "\u65b0\u840c\u840c\uff01", "ENTSPERRT!"],
                    "newPlant-next": ["newPlant-next", "Next", "Tiếp", "\u4e0b\u4e00\u7d1a", "\u4e0b\u4e00\u7d1a", "Weiter"],
                    "mission-login-game": ["mission-login-game", "Login Game", "Đăng nhập game", "\u767b\u9304\u904a\u6232", "\u767b\u9304\u904a\u6232", "Login Spiel"],
                    "mission-merge20-flowers": ["mission-merge20-flowers", "Merge 20 Flowers", "Hợp nhất 20 Moe Moe", "\u5408\u621020\u682a\u840c\u840c", "\u5408\u621020\u682a\u840c\u840c", "20-mal verschmelzen"],
                    "mission-win10-times": ["mission-win10-times", "Win 10 Times", "Chiến thắng 10 lần", "\u6210\u529f\u62b5\u79a610\u6b21\u6bad\u5c4d", "\u6210\u529f\u62b5\u79a610\u6b21\u6bad\u5c4d", "Gewinnen Sie 10 Mal"],
                    "mission-watch3-videos": ["mission-watch3-videos", "Watch 3 Videos", "Xem Video QC", "\u7d2f\u8a08\u89c0\u770b3\u6b21\u5ee3\u544a", "\u7d2f\u8a08\u89c0\u770b3\u6b21\u5ee3\u544a", "3 Werbungen ansehen"],
                    "achieveItem-description": ["achieveItem-description", "Get {0} Lv.{1}", "Nhận {0} Pokemon cấp {1}", "\u7372\u5f97{0}\u68f5{1}\u7d1a\u7684\u82b1", "\u7372\u5f97{0}\u68f5{1}\u7d1a\u7684\u82b1", "Besitze $number Lv$level Blumen"],
                    "home-icon-angry": ["home-icon-angry", "ANGRY", "GIẬN DỮ", "GIẬN DỮ", "GIẬN DỮ", "WxdcTEND"],
                    "home-icon-shop": ["home-icon-shop", "SHOP", "CỬA HÀNG", "\u5546\u5e97", "\u5546\u5e97", "LADEN"],
                    "subscribe-logo": ["subscribe-logo", "GOLD MEMBERSHIP", "HỘI VIÊN VÀNG", "\u9ec3\u91d1\u6703\u54e1", "\u9ec3\u91d1\u6703\u54e1", "GOLD-MITGLIEDSCHAFT"],
                    success: ["success", "SUCCESS", "THÀNH CÔNG", "THÀNH CÔNG", "THÀNH CÔNG", "ERFOLG"],
                    defeated: ["defeated", "DEFEATED", "BỊ ĐÁNH BẠI", "\u5931\u6557\u4e86", "\u5931\u6557\u4e86", "BESIEGT"],
                    "flag-free": ["flag-free", "FREE !", "Miễn phí!", "\u514d\u8cbb\uff01", "\u514d\u8cbb\uff01", "GRATIS!"],
                    "flag-new": ["flag-new", "NEW !", "MỚI!", "MỚI!", "MỚI!", "Neu!"],
                    "preparing-zombies": ["preparing-zombies", "Preparing zombies", "Quái vật sắp tấn công!", "\u6b63\u5728\u6e96\u5099\u6bad\u5c4d", "\u6b63\u5728\u6e96\u5099\u6bad\u5c4d", "Zombies voorbereiden"],
                    crit: ["crit", "CRIT", "CHÍ MẠNG", "\u66b4\u64ca", "\u66b4\u64ca", "CRIT"],
                    IAPConnectionFailed: ["IAPConnectionFailed", "Network Is Not Well, Please Try Later", "Mạng lỗi, thử lại sau", "\u7db2\u7d61\u9023\u63a5\u5931\u6557\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66", "\u7db2\u7d61\u9023\u63a5\u5931\u6557\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66", "Netwerk is niet goed, probeer later opnieuw"],
                    "guide-1": ["guide-1", "Click to buy a flower", "Chạm để mua 1 Moe", "\u9ede\u64ca\u9019\u88e1\u8cb7\u4e00\u6735\u82b1", "\u9ede\u64ca\u9019\u88e1\u8cb7\u4e00\u6735\u82b1", "Klicken Sie, um eine Blume zu kaufen"],
                    "guide-2": ["guide-2", "Click one more time", "Mua thêm lần nữa", "\u518d\u9ede\u4e00\u6b21", "\u518d\u9ede\u4e00\u6b21", "Klicken Sie noch einmal"],
                    "guide-3": ["guide-3", "Drag to merge a new flower", "Kéo gộp thành Moe mạnh hơn", "\u62d6\u52d5\u5230\u9019\u91cc\u5408\u6210\u4e00\u6735\u65b0\u82b1", "\u62d6\u52d5\u5230\u9019\u91cc\u5408\u6210\u4e00\u6735\u65b0\u82b1", "Ziehen, um eine neue Blume zu verschmelzen"],
                    "guide-4": ["guide-4", "Tap to claim coins", "Chạm nhận vàng gộp", "\u7372\u53d6\u4f60\u7684\u734e\u52f5", "\u7372\u53d6\u4f60\u7684\u734e\u52f5", "Tippen Sie, um Mxfcnzen zu beanspruchen"],
                    "guide-5": ["guide-5", "Move flower to defend zombies", "Đặt Moe để chặn quái", "\u79fb\u52d5\u82b1\u6735\u4f86\u62b5\u79a6\u6bad\u5c4d", "\u79fb\u52d5\u82b1\u6735\u4f86\u62b5\u79a6\u6bad\u5c4d", "Blume bewegen, um Zombies zu verteidigen"],
                    "guide-6": ["guide-6", "Plant more flowers and ...", "Mua thêm Moe và...", "\u7a2e\u66f4\u591a\u7684\u82b1\u6735\u4e26...", "\u7a2e\u66f4\u591a\u7684\u82b1\u6735\u4e26...", "Pflanzen Sie mehr Blumen und \u2026"],
                    "guide-7": ["guide-7", "Keep zombies away!", "Đừng để quái vượt qua!", "\u62b5\u79a6\u6bad\u5c4d\u4f86\u8972\uff01", "\u62b5\u79a6\u6bad\u5c4d\u4f86\u8972\uff01", "Halten Sie Zombies weg!"],
                    guideOver: ["guideOver", "Earn more coins to unlock new flowers", "Kiếm vàng để mở Moe mới", "\u8d5a\u66f4\u591a\u7684\u94b1\u6765\u83b7\u5f97\u89e3\u9501\u65b0\u7684\u82b1\u6735", "\u8d5a\u66f4\u591a\u7684\u94b1\u6765\u83b7\u5f97\u89e3\u9501\u65b0\u7684\u82b1\u6735", "Verdienen Sie mehr Mxfcnzen, um neue Blumen freizuschalten"],
                    restore: ["restore", "RESTORE PURCHASE", "KHÔI PHỤC MUA", "\u6062\u5fa9\u8cfc\u8cb7", "\u6062\u5fa9\u8cfc\u8cb7", "KAUF WIEDERHERSTELLEN"],
                    "ios-alarm-1h": ["ios-alarm-1h", "$1 coins are waiting for you, please come back soon!", "$1 vàng đang chờ, quay lại ngay!", "$1\uff01\u597d\u591a\u7684\u91d1\u5e63\uff01\u5feb\u5feb\u4f86\u9818\u53d6\u5427\u3002", "$1\uff01\u597d\u591a\u7684\u91d1\u5e63\uff01\u5feb\u5feb\u4f86\u9818\u53d6\u5427\u3002", "$1 coins are waiting for you, please come back soon!"],
                    "ios-alarm-24h": ["ios-alarm-24h", "Hi, Gardener! You have got 3 free spins, many gifts are waiting for you, please come back soon!", "Bạn còn 3 lượt quay Free, đừng bỏ lỡ!", "\u4e3b\u4eba\uff0c\u4f60\u67093\u6b21\u514d\u8cbb\u8f49\u76e4\u7684\u6a5f\u6703\u9084\u6c92\u4f7f\u7528\u54e6\uff0c\u5225\u6d6a\u8cbb\u6389\u5566\u3002", "\u4e3b\u4eba\uff0c\u4f60\u67093\u6b21\u514d\u8cbb\u8f49\u76e4\u7684\u6a5f\u6703\u9084\u6c92\u4f7f\u7528\u54e6\uff0c\u5225\u6d6a\u8cbb\u6389\u5566\u3002", "Hi, Gardener! You have got 3 free spins, many gifts are waiting for you, please come back soon!"],
                    "ios-alarm-48h": ["ios-alarm-48h", "SOS! Come and destroy these invading zombies.", "SOS! Quái đang tấn công khu vườn!", "\u6551\u547d\u554a\uff01\u5225\u8b93\u9019\u4e9b\u6bad\u5c4d\u6467\u6bc0\u6211\u5011\u7684\u82b1\u82b1\u5011\uff01", "\u6551\u547d\u554a\uff01\u5225\u8b93\u9019\u4e9b\u6bad\u5c4d\u6467\u6bc0\u6211\u5011\u7684\u82b1\u82b1\u5011\uff01", "SOS! Come and destroy these invading zombies."],
                    "ios-alarm-72h": ["ios-alarm-72h", "OMG! Your defense is about to be destroyed by zombies.", "Phòng thủ sắp sập — vào cứu ngay!", "\u6211\u7684\u5abd\u5440~\u6211\u5011\u7684\u82b1\u5712\u5df2\u7d93\u5c8c\u5c8c\u53ef\u5371\u5566\uff0c\u5feb\u4f86\u62b5\u79a6\u6bad\u5c4d\u5427\uff01", "\u6211\u7684\u5abd\u5440~\u6211\u5011\u7684\u82b1\u5712\u5df2\u7d93\u5c8c\u5c8c\u53ef\u5371\u5566\uff0c\u5feb\u4f86\u62b5\u79a6\u6bad\u5c4d\u5427\uff01", "OMG! Your defense is about to be destroyed by zombies."],
                    "wx-health-title": ["wx-health-title", "", "Thông báo chơi lành mạnh", "", "", ""],
                    "wx-health-content": ["wx-health-content", "", "Chơi có chừng, nghỉ đúng lúc.\\nGiữ sức khỏe, tận hưởng trò chơi.", "", "", ""],
                    "max-angry-time-150": ["max-angry-time-150", "", "Giận dữ đã đạt tối đa", "", "", ""],
                    "be-lock": ["be-lock", "", "Chưa mở khóa", "\u5c1a\u672a\u89e3\u9501", "", "", ""],
                    "next-ads-free": ["next-ads-fress", "", "Thời gian đến lượt Free ", "\u8ddd\u79bb\u4e0b\u6b21\u514d\u8d39\u8fd8\u6709 ", "", "", ""],
                    "congratulation-get": ["congratulation-get", "", "Chúc mừng nhận\\r", "\u606d\u559c\u83b7\u5f97\r", "", "", ""],
                    "buy-success": ["buy-success", "", "Mua thành công!", "\u8d2d\u4e70\u6210\u529f!", "", "", ""],
                    skill_des: ["skill_des", "", "Kỹ năng", "\u6280\u80fd", "", "", ""],
                    "plant-Max": ["plant-Max", "", "Moe đã max cấp, không gộp được", "", "", "", ""]
                }
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    DB_invite: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "f5f5fkAcd9HHaPfZAv8Y46f", "DB_invite");
        var n = cc.Class({
            name: "DB_invite",
            statics: {
                dataLen: 6,
                dataHead: '["id", "invitePeople", "gem"]',
                data: '{"1":[1,1,5],"2":[2,2,8],"3":[3,3,10],"4":[4,5,25],"5":[5,8,45],"6":[6,12,60]}'
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    DB_level: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "0a7e1SQCThJH7KfINZcQE3b", "DB_level");
        var n = cc.Class({
            name: "DB_level",
            statics: {
                dataLen: 60,
                dataHead: '["level", "wave", "waveCount", "zombieID1", "zombieCount1", "zombieID2", "zombieCount2"]',
                data: '{"1_1":[1,1,3,1,5,2,1],"1_2":[1,2,3,1,7,2,1],"1_3":[1,3,3,101,1,2,0],"2_1":[2,1,4,2,5,3,1],"2_2":[2,2,4,2,7,3,1],"2_3":[2,3,4,2,9,3,1],"2_4":[2,4,4,102,1,3,0],"3_1":[3,1,5,3,5,4,1],"3_2":[3,2,5,3,7,4,1],"3_3":[3,3,5,3,9,4,1],"3_4":[3,4,5,3,11,4,1],"3_5":[3,5,5,103,1,4,0],"4_1":[4,1,5,4,5,5,1],"4_2":[4,2,5,4,7,5,1],"4_3":[4,3,5,4,9,5,1],"4_4":[4,4,5,4,11,5,1],"4_5":[4,5,5,104,1,5,0],"5_1":[5,1,5,5,5,6,1],"5_2":[5,2,5,5,7,6,1],"5_3":[5,3,5,5,9,6,1],"5_4":[5,4,5,5,11,6,1],"5_5":[5,5,5,105,1,6,0],"6_1":[6,1,5,6,5,7,1],"6_2":[6,2,5,6,7,7,1],"6_3":[6,3,5,6,9,7,1],"6_4":[6,4,5,6,11,7,1],"6_5":[6,5,5,106,1,7,0],"7_1":[7,1,5,7,5,8,1],"7_2":[7,2,5,7,7,8,1],"7_3":[7,3,5,7,9,8,1],"7_4":[7,4,5,7,11,8,1],"7_5":[7,5,5,107,1,8,0],"8_1":[8,1,5,8,5,9,1],"8_2":[8,2,5,8,7,9,1],"8_3":[8,3,5,8,9,9,1],"8_4":[8,4,5,8,11,9,1],"8_5":[8,5,5,108,1,9,0],"9_1":[9,1,5,9,5,10,1],"9_2":[9,2,5,9,7,10,1],"9_3":[9,3,5,9,9,10,1],"9_4":[9,4,5,9,11,10,1],"9_5":[9,5,5,109,1,10,0],"10_1":[10,1,5,10,5,11,1],"10_2":[10,2,5,10,7,11,1],"10_3":[10,3,5,10,9,11,1],"10_4":[10,4,5,10,11,11,1],"10_5":[10,5,5,110,1,11,0],"11_1":[11,1,5,11,5,12,1],"11_2":[11,2,5,11,7,12,1],"11_3":[11,3,5,11,9,12,1],"11_4":[11,4,5,11,11,12,1],"11_5":[11,5,5,111,1,12,0],"12_1":[12,1,5,12,5,13,1],"12_2":[12,2,5,12,7,13,1],"12_3":[12,3,5,12,9,13,1],"12_4":[12,4,5,12,11,13,1],"12_5":[12,5,5,112,1,13,0],"13_1":[13,1,5,13,5,14,1],"13_2":[13,2,5,13,7,14,1],"13_3":[13,3,5,13,9,14,1],"13_4":[13,4,5,13,11,14,1],"13_5":[13,5,5,113,1,14,0],"14_1":[14,1,5,14,5,15,1],"14_2":[14,2,5,14,7,15,1],"14_3":[14,3,5,14,9,15,1],"14_4":[14,4,5,14,11,15,1],"14_5":[14,5,5,114,1,15,0],"15_1":[15,1,5,15,5,16,1],"15_2":[15,2,5,15,7,16,1],"15_3":[15,3,5,15,9,16,1],"15_4":[15,4,5,15,11,16,1],"15_5":[15,5,5,115,1,16,0],"16_1":[16,1,5,16,5,17,1],"16_2":[16,2,5,16,7,17,1],"16_3":[16,3,5,16,9,17,1],"16_4":[16,4,5,16,11,17,1],"16_5":[16,5,5,116,1,17,0],"17_1":[17,1,5,17,5,18,1],"17_2":[17,2,5,17,7,18,1],"17_3":[17,3,5,17,9,18,1],"17_4":[17,4,5,17,11,18,1],"17_5":[17,5,5,117,1,18,0],"18_1":[18,1,5,18,5,19,1],"18_2":[18,2,5,18,7,19,1],"18_3":[18,3,5,18,9,19,1],"18_4":[18,4,5,18,11,19,1],"18_5":[18,5,5,118,1,19,0],"19_1":[19,1,5,19,5,20,1],"19_2":[19,2,5,19,7,20,1],"19_3":[19,3,5,19,9,20,1],"19_4":[19,4,5,19,11,20,1],"19_5":[19,5,5,119,1,20,0],"20_1":[20,1,5,20,5,21,1],"20_2":[20,2,5,20,7,21,1],"20_3":[20,3,5,20,9,21,1],"20_4":[20,4,5,20,11,21,1],"20_5":[20,5,5,120,1,21,0],"21_1":[21,1,5,21,5,22,1],"21_2":[21,2,5,21,7,22,1],"21_3":[21,3,5,21,9,22,1],"21_4":[21,4,5,21,11,22,1],"21_5":[21,5,5,121,1,22,0],"22_1":[22,1,5,22,5,23,1],"22_2":[22,2,5,22,7,23,1],"22_3":[22,3,5,22,9,23,1],"22_4":[22,4,5,22,11,23,1],"22_5":[22,5,5,122,1,23,0],"23_1":[23,1,5,23,5,24,1],"23_2":[23,2,5,23,7,24,1],"23_3":[23,3,5,23,9,24,1],"23_4":[23,4,5,23,11,24,1],"23_5":[23,5,5,123,1,24,0],"24_1":[24,1,5,24,5,25,1],"24_2":[24,2,5,24,7,25,1],"24_3":[24,3,5,24,9,25,1],"24_4":[24,4,5,24,11,25,1],"24_5":[24,5,5,124,1,25,0],"25_1":[25,1,5,25,5,26,1],"25_2":[25,2,5,25,7,26,1],"25_3":[25,3,5,25,9,26,1],"25_4":[25,4,5,25,11,26,1],"25_5":[25,5,5,125,1,26,0],"26_1":[26,1,5,26,5,27,1],"26_2":[26,2,5,26,7,27,1],"26_3":[26,3,5,26,9,27,1],"26_4":[26,4,5,26,11,27,1],"26_5":[26,5,5,126,1,27,0],"27_1":[27,1,5,27,5,28,1],"27_2":[27,2,5,27,7,28,1],"27_3":[27,3,5,27,9,28,1],"27_4":[27,4,5,27,11,28,1],"27_5":[27,5,5,127,1,28,0],"28_1":[28,1,5,28,5,29,1],"28_2":[28,2,5,28,7,29,1],"28_3":[28,3,5,28,9,29,1],"28_4":[28,4,5,28,11,29,1],"28_5":[28,5,5,128,1,29,0],"29_1":[29,1,5,29,5,30,1],"29_2":[29,2,5,29,7,30,1],"29_3":[29,3,5,29,9,30,1],"29_4":[29,4,5,29,11,30,1],"29_5":[29,5,5,129,1,30,0],"30_1":[30,1,5,30,5,31,1],"30_2":[30,2,5,30,7,31,1],"30_3":[30,3,5,30,9,31,1],"30_4":[30,4,5,30,11,31,1],"30_5":[30,5,5,130,1,31,0],"31_1":[31,1,5,31,5,32,1],"31_2":[31,2,5,31,7,32,1],"31_3":[31,3,5,31,9,32,1],"31_4":[31,4,5,31,11,32,1],"31_5":[31,5,5,131,1,32,0],"32_1":[32,1,5,32,5,33,1],"32_2":[32,2,5,32,7,33,1],"32_3":[32,3,5,32,9,33,1],"32_4":[32,4,5,32,11,33,1],"32_5":[32,5,5,132,1,33,0],"33_1":[33,1,5,33,5,34,1],"33_2":[33,2,5,33,7,34,1],"33_3":[33,3,5,33,9,34,1],"33_4":[33,4,5,33,11,34,1],"33_5":[33,5,5,133,1,34,0],"34_1":[34,1,5,34,5,35,1],"34_2":[34,2,5,34,7,35,1],"34_3":[34,3,5,34,9,35,1],"34_4":[34,4,5,34,11,35,1],"34_5":[34,5,5,134,1,35,0],"35_1":[35,1,5,35,5,36,1],"35_2":[35,2,5,35,7,36,1],"35_3":[35,3,5,35,9,36,1],"35_4":[35,4,5,35,11,36,1],"35_5":[35,5,5,135,1,36,0],"36_1":[36,1,5,36,5,37,1],"36_2":[36,2,5,36,7,37,1],"36_3":[36,3,5,36,9,37,1],"36_4":[36,4,5,36,11,37,1],"36_5":[36,5,5,136,1,37,0],"37_1":[37,1,5,37,5,38,1],"37_2":[37,2,5,37,7,38,1],"37_3":[37,3,5,37,9,38,1],"37_4":[37,4,5,37,11,38,1],"37_5":[37,5,5,137,1,38,0],"38_1":[38,1,5,38,5,39,1],"38_2":[38,2,5,38,7,39,1],"38_3":[38,3,5,38,9,39,1],"38_4":[38,4,5,38,11,39,1],"38_5":[38,5,5,138,1,39,0],"39_1":[39,1,5,39,5,40,1],"39_2":[39,2,5,39,7,40,1],"39_3":[39,3,5,39,9,40,1],"39_4":[39,4,5,39,11,40,1],"39_5":[39,5,5,139,1,40,0],"40_1":[40,1,5,40,5,41,1],"40_2":[40,2,5,40,7,41,1],"40_3":[40,3,5,40,9,41,1],"40_4":[40,4,5,40,11,41,1],"40_5":[40,5,5,140,1,41,0],"41_1":[41,1,5,41,5,42,1],"41_2":[41,2,5,41,7,42,1],"41_3":[41,3,5,41,9,42,1],"41_4":[41,4,5,41,11,42,1],"41_5":[41,5,5,141,1,42,0],"42_1":[42,1,5,42,5,43,1],"42_2":[42,2,5,42,7,43,1],"42_3":[42,3,5,42,9,43,1],"42_4":[42,4,5,42,11,43,1],"42_5":[42,5,5,142,1,43,0],"43_1":[43,1,5,43,5,44,1],"43_2":[43,2,5,43,7,44,1],"43_3":[43,3,5,43,9,44,1],"43_4":[43,4,5,43,11,44,1],"43_5":[43,5,5,143,1,44,0],"44_1":[44,1,5,44,5,45,1],"44_2":[44,2,5,44,7,45,1],"44_3":[44,3,5,44,9,45,1],"44_4":[44,4,5,44,11,45,1],"44_5":[44,5,5,144,1,45,0],"45_1":[45,1,5,45,5,46,1],"45_2":[45,2,5,45,7,46,1],"45_3":[45,3,5,45,9,46,1],"45_4":[45,4,5,45,11,46,1],"45_5":[45,5,5,145,1,46,0],"46_1":[46,1,5,46,5,47,1],"46_2":[46,2,5,46,7,47,1],"46_3":[46,3,5,46,9,47,1],"46_4":[46,4,5,46,11,47,1],"46_5":[46,5,5,146,1,47,0],"47_1":[47,1,5,47,5,48,1],"47_2":[47,2,5,47,7,48,1],"47_3":[47,3,5,47,9,48,1],"47_4":[47,4,5,47,11,48,1],"47_5":[47,5,5,147,1,48,0],"48_1":[48,1,5,48,5,49,1],"48_2":[48,2,5,48,7,49,1],"48_3":[48,3,5,48,9,49,1],"48_4":[48,4,5,48,11,49,1],"48_5":[48,5,5,148,1,49,0],"49_1":[49,1,5,49,5,50,1],"49_2":[49,2,5,49,7,50,1],"49_3":[49,3,5,49,9,50,1],"49_4":[49,4,5,49,11,50,1],"49_5":[49,5,5,149,1,50,0],"50_1":[50,1,5,50,5,51,1],"50_2":[50,2,5,50,7,51,1],"50_3":[50,3,5,50,9,51,1],"50_4":[50,4,5,50,11,51,1],"50_5":[50,5,5,150,1,51,0],"51_1":[51,1,5,51,5,52,1],"51_2":[51,2,5,51,7,52,1],"51_3":[51,3,5,51,9,52,1],"51_4":[51,4,5,51,11,52,1],"51_5":[51,5,5,151,1,52,0],"52_1":[52,1,5,52,5,53,1],"52_2":[52,2,5,52,7,53,1],"52_3":[52,3,5,52,9,53,1],"52_4":[52,4,5,52,11,53,1],"52_5":[52,5,5,152,1,53,0],"53_1":[53,1,5,53,5,54,1],"53_2":[53,2,5,53,7,54,1],"53_3":[53,3,5,53,9,54,1],"53_4":[53,4,5,53,11,54,1],"53_5":[53,5,5,153,1,54,0],"54_1":[54,1,5,54,5,55,1],"54_2":[54,2,5,54,7,55,1],"54_3":[54,3,5,54,9,55,1],"54_4":[54,4,5,54,11,55,1],"54_5":[54,5,5,154,1,55,0],"55_1":[55,1,5,55,5,56,1],"55_2":[55,2,5,55,7,56,1],"55_3":[55,3,5,55,9,56,1],"55_4":[55,4,5,55,11,56,1],"55_5":[55,5,5,155,1,56,0],"56_1":[56,1,5,56,5,57,1],"56_2":[56,2,5,56,7,57,1],"56_3":[56,3,5,56,9,57,1],"56_4":[56,4,5,56,11,57,1],"56_5":[56,5,5,156,1,57,0],"57_1":[57,1,5,57,5,58,1],"57_2":[57,2,5,57,7,58,1],"57_3":[57,3,5,57,9,58,1],"57_4":[57,4,5,57,11,58,1],"57_5":[57,5,5,157,1,58,0],"58_1":[58,1,5,58,5,59,1],"58_2":[58,2,5,58,7,59,1],"58_3":[58,3,5,58,9,59,1],"58_4":[58,4,5,58,11,59,1],"58_5":[58,5,5,158,1,59,0],"59_1":[59,1,5,59,5,60,1],"59_2":[59,2,5,59,7,60,1],"59_3":[59,3,5,59,9,60,1],"59_4":[59,4,5,59,11,60,1],"59_5":[59,5,5,159,1,60,0],"60_1":[60,1,5,60,5,60,1],"60_2":[60,2,5,60,7,60,1],"60_3":[60,3,5,60,9,60,1],"60_4":[60,4,5,60,11,60,1],"60_5":[60,5,5,160,1,60,0]}'
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    DB_levelupGem: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "ff61bcftMZCV7C5W8v7t1d/", "DB_levelupGem");
        var n = cc.Class({
            name: "DB_levelupGem",
            statics: {
                dataLen: 60,
                dataHead: '["level", "gem"]',
                data: '{"3":[3,3],"5":[5,3],"8":[8,3],"11":[11,3],"14":[14,5],"17":[17,5],"19":[19,5],"21":[21,5],"23":[23,5],"25":[25,5],"27":[27,5],"29":[29,5],"31":[31,8],"33":[33,8],"35":[35,8],"37":[37,8],"39":[39,8],"41":[41,8],"43":[43,8],"45":[45,8],"47":[47,10],"49":[49,10],"51":[51,10],"53":[53,10],"55":[55,10],"57":[57,10],"59":[59,10]}'
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    DB_plant: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "99e9aR5Sl1LMJeZ/mf1FQay", "DB_plant");
        var n = cc.Class({
            name: "DB_plant",
            statics: {
                dataLen: 60,
                dataHead: '["level", "cd", "power", "skill", "offline", "price", "gem", "prefab", "shootPos", "steakColor", "head", "name"]',
                data: '{"1": [1, 1.0, 10, "1|10", 60, 100, 0, "H1", "-24,50", "0x2a69f4", "01",  "Cá đèn lồng"],"2": [2, 0.96, 16, "2|10", 28, 1548, 0, "H9", "-23,73", "0xb1da50", "02" , "Cá huỳnh quang"],"3": [3, 0.92, 25, "3|5", 13, 6969, 0, "H3", "-23,58", "0x97da32", "03" , "Cá Bouncer"],"4": [4, 0.88, 42, "1|11", 6, 18539, 0, "H5", "-21,45", "0x48f1a9", "04" , "Sứa sao"],"5": [5, 0.84, 75, "2|11", 3, 49314, 0, "H50", "-24,46", "0x48f1a9", "05" , "Idol Jellyfish"],"6": [6, 0.81, 140, "3|5.5", 2, 131176, 0, "H6", "-36,48", "0xf85734", "06" , "Sứa hát"],"7": [7, 0.78, 293, "1|12", 11, 348928, 0, "H4", "-15,59", "0xff9baf", "07" , "Pink Pink Sea Rabbit"],"8": [8, 0.75, 601, "2|12", 136, 928149, 0, "H2", "-24,52", "0xa65abf", "08" , "Thỏ biển điện màu tím"],"9": [9, 0.72, 1214, "3|6", 9, 2468878, 0, "H10", "-8,36", "0xfdf377", "09" , "Thỏ biển Poseidon"],"10": [10, 0.69, 2536, "1|13", 23, 6567217, 0, "H8", "-26,53", "0xb3d75d", "10" , "Little Pelican"],"11": [11, 0.67, 5307, "2|13", 76, 17468797, 6, "H13", "-54,46", "0x83d177", "11" , "Cậu bé bán báo Pelican"],"12": [12, 0.65, 11615, "3|6.5", 113, 46467000, 8, "H18", "-41,65", "0xffd935", "12" , "Express Pelican"],"13": [13, 0.63, 24392, "1|14", 10, 123602221, 10, "H11", "-23,28", "0x86d56b", "13" , "Cá Rồng Con"],"14": [14, 0.61, 51224, "2|14", 25, 328781909, 13, "H33", "-13,21", "0xfb8034", "14" , "Canh giữ cá hóa rồng"],"15": [15, 0.6, 107572, "3|7", 9, 874559877, 17, "H14", "55,47", "0x81ba2d", "15" , "Cá rồng Neptune"],"16": [16, 0.59, 225903, "1|15", 9, 2326329273, 22, "H30", "-52,66", "0xfa6645", "16" , "Hải cẩu nhỏ"],"17": [17, 0.58, 474396, "2|15", 6, 6188035867, 30, "H28", "-30,54", "0x51baa6", "17" , "Hải cẩu nhào lộn"],"18": [18, 0.57, 996232, "3|7.5", 8, 16460175406, 40, "H29", "-39,54", "0xfacd26", "18" , "Hải cẩu Hề"],"19": [19, 0.56, 2092088, "1|16", 10, 43784066580, 50, "H38", "-63,74", "0xe27f2d", "19" , "Bạch tuộc nhỏ"],"20": [20, 0.55, 4393386, "2|16", 13, 116465617103, 60, "H49", "-77,55,-61,56", "0xf9c63a", "20" , "Thủy thủ bạch tuộc"],"21": [21, 0.54, 9226110, "3|8", 16, 309798541495, 80, "H7", "-19,42", "0x41b3ea", "21" , "Thuyền trưởng bạch tuộc"],"22": [22, 0.53, 19374831, "1|17", 21, 824064120378, 100, "H31", "-38,24", "0xf76b20", "22" , "Rái cá nhỏ"],"23": [23, 0.52, 40687144, "2|17", 10, 2192010560204, 130, "H19", "-15,21", "0xf2d367", "23" , "Lính tháp pháo"],"24": [24, 0.51, 85443003, "3|8.5", 12, 5830748090144, 160, "H12", "-26,40", "0xc66fa8", "24" , "Tháp pháo hạng nặng"],"25": [25, 0.51, 179430308, "1|17.5", 16, 15509789919784, 200, "H21", "-45,32", "0xc1dde9", "25" , "Cậu bé chim cánh cụt"],"26": [26, 0.51, 376803646, "2|17.5", 20, 41256041186627, 240, "H27", "-68,39", "0xf6c216", "26" , "Queen Penguin"],"27": [27, 0.51, 791287659, "3|8.5", 25, 109741069556429, 290, "H15", "-36,48", "0xe585bc", "27" , "Vua chim cánh cụt"],"28": [28, 0.51, 1661704084, "1|18", 32, 291911245020100, 340, "H23", "-31,68", "0xfe98c1", "28" , "Little Yellow Duck"],"29": [29, 0.51, 3489578577, "2|18", 41, 776483911753466, 400, "H26", "29,56", "0x7e88ad", "29" , "Vịt còi"],"30": [30, 0.51, 7328115014, "3|9", 52, 2065447205264220, 460, "H44", "-25,36", "0xa15c54", "30" , "Vịt Trumper"],"31": [31, 0.51, 15389041529, "1|18.5", 25, 5494089566002820, 530, "H54", "5,92", "0x8e6593", "31" , "Green Cannon"],"32": [32, 0.51, 32316987211, "2|18.5", 31, 14614278245567600, 600, "H16", "3,95", "0x6e1d1e", "32" , "Stone Cannon"],"33": [33, 0.51, 67865673145, "3|9", 40, 38873980133209600, 680, "H17", "4,99", "0xe45f61", "33" , "Súng bắn ốc"],"34": [34, 0.51, 142517913605, "1|19", 51, 103404787154336992, 760, "H20", "-9,113", "0xd35764", "34" , "Sao biển màu hồng"],"35": [35, 0.51, 299287618570, "2|19", 64, 275056733830537984, 850, "H34", "-34,58,-3,52,-39,37", "0xcc2e26", "35" , "Sao biển có sừng"],"36": [36, 0.51, 628503998998, "3|9.5", 81, 731650911989229952, 940, "H36", "-23,70", "0xffd937", "36" , "Sao biển bạch kim"],"37": [37, 0.51, 1319858397895, "1|19.5", 103, 1946191425891399936, 1040, "H46", "-22,28", "0xcc2f27", "37" , "Cá nóc nhỏ"],"38": [38, 0.51, 2771702635582, "2|19.5", 131, 5176869192871100416, 1140, "H48", "-72,80", "0x3aa6ce", "38" , "Blowfish"],"39": [39, 0.51, 5820575534722, "3|9.5", 166, 13770472053037099008, 1250, "H52", "50,63,-57,43", "0x3095cb", "39" , "Vua cá heo"],"40": [40, 0.51, 12223208622916, "1|20", 210, 36629455661078601728, 1360, "H43", "-70,100", "0xfd8187", "40" , "Bông sen nhỏ"],"41": [41, 0.51, 25668738108123, "2|20", 267, 97434352058469007360, 1480, "H41", "-35,24", "0xf6e08b", "41" , "Sen xanh"],"42": [42, 0.51, 53904350027060, "3|10", 338, 259175376475526987776, 1600, "H51", "-8,30", "0x53f8ee", "42" , "Bông Sen Vàng"],"43": [43, 0.51, 113199135056826, "1|20.5", 428, 689406501424900997120, 1730, "H53", "-80,98", "0x5fb4ff", "43" , "Cua súng nhỏ"],"44": [44, 0.51, 237718183619334, "2|20.5", 542, 1833821293790229954560, 1860, "H24", "-65,37", "0x80f4ff", "44" , "Máy bắn cua"],"45": [45, 0.51, 499208185600602, "3|10", 687, 4877964641482029662208, 2000, "H25", "24,68", "0xf99fdb", "45" , "Vỏ cua bạch kim"],"46": [46, 0.51, 1048337189761260, "1|21", 871, 12975385946342199132160, 2140, "H55", "0,34", "0x54f4f6", "46" , "Koi"],"47": [47, 0.51, 2201508098498650, "2|21", 1103, 34514526617270298345472, 2290, "H45", "-27,114", "0x2fabeb", "47" , "King Koi"],"48": [48, 0.51, 4623167006847160, "3|10.5", 1397, 91808640801938899730432, 2440, "H37", "-36,53", "0xff5d2b", "48" , "Vua cá koi vàng"],"49": [49, 0.51, 9708650714379030, "1|21.5", 1770, 244210984533157014929408, 2600, "H56", "-14,112", "0xc8ee63", "49" , "Nòng nọc ma thuật"],"50": [50, 0.51, 20388166500196000, "2|21.5", 2242, 649601218858199050878976, 2760, "H39", "-43,106", "0xe19bde", "50" , "Ếch ma thuật nhỏ"],"51": [51, 0.51, 42815149650411504, "3|10.5", 2840, 1727939242162809982681088, 2930, "H58", "-63,100", "0x5fb4ff", "51" , "Ếch già"],"52": [52, 0.51, 89911814265864192, "1|22", 3598, 4596318384153069807992832, 3100, "H42", "-34,99", "0x5fb4ff", "52" , "Little Babe"],"53": [53, 0.51, 188814809958315008, "2|22", 4557, 12226206901847200714719232, 3280, "H57", "-27,25", "0xe7daa5", "53" , "Cai Beibei"],"54": [54, 0.51, 396511100912460992, "3|11", 5773, 32521710358913501416652800, 3460, "H47", "-62,44", "0xea5016", "54" , "Star Babe"],"55": [55, 0.51, 832673311916168960, "1|22.5", 7312, 86507749554709900883394560, 3650, "H60", "-73,50", "0xf0642c", "55" , "Lươn điện"],"56": [56, 0.51, 1748613955023950080, "2|22.5", 9262, 230110613815527994470432768, 3840, "H59", "-12,35", "0xd8c665", "56" , "Mei Ling Eel"],"57": [57, 0.51, 3672089305550300160, "3|11", 11729, 612094232749305026729476096, 4040, "H22", "-62,48", "0xfc4d84", "57" , "Cào Lươn"],"58": [58, 0.51, 7711387541655640064, "1|23", 14861, 1628170659113149875764592640, 4240, "H35", "-57,41", "0x9c69df", "58" , "Cá ngựa con"],"59": [59, 0.51, 16193913837476800512, "2|23", 18824, 4330933953240979741557653504, 4350, "H40", "-88,62,29,62", "0x39d5fc", "59" , "Chiến binh cá ngựa"],"60": [60, 0.51, 34007219058701398016, "3|11.5", 23844, 11520284315620999911297777664, 4460, "H32", "-54,53,11,42", "0xf6c216", "60" , "Vua cá ngựa"]}'
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    DB_shopSort: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "9a5a8nSkuJIDZKd0H4hanXD", "DB_shopSort");
        var n = cc.Class({
            name: "DB_shopSort",
            statics: {
                dataLen: 60,
                dataHead: '["level", "MAX", "MAX_1", "MAX_2", "MAX_3", "MAX_4", "MAX_5", "MAX_6", "MAX_7", "MAX_8"]',
                data: '{"1":[1,"M","","","","","","","",""],"2":[2,"U","M","","","","","","",""],"3":[3,"U","U","M","","","","","",""],"4":[4,"U","U","M","M","","","","",""],"5":[5,"U","U","M","M","M","","","",""],"6":[6,"U","U","M","M","M","M","","",""],"7":[7,"U","U","AD","M","M","M","M","",""],"8":[8,"U","U","AD","M","M","M","M","M",""],"9":[9,"U","U","AD","M","M","M","M","M","M"],"10":[10,"U","U","AD","M","M","M","M","M","M"],"11":[11,"U","U","AD","M","M","M","M","M","M"],"12":[12,"U","U","M","AD","M","M","M","M","M"],"13":[13,"U","U","G","M","AD","M","M","M","M"],"14":[14,"U","U","G","G","M","AD","M","M","M"],"15":[15,"U","U","G","G","M","AD","M","M","M"],"16":[16,"U","U","G","G","M","AD","M","M","M"],"17":[17,"U","U","G","G","M","AD","M","M","M"],"18":[18,"U","U","G","G","M","AD","M","M","M"],"19":[19,"U","U","G","G","M","AD","M","M","M"],"20":[20,"U","U","G","G","M","AD","M","M","M"],"21":[21,"U","U","G","G","M","AD","M","M","M"],"22":[22,"U","U","G","G","M","AD","M","M","M"],"23":[23,"U","U","G","G","M","M","AD","M","M"],"24":[24,"U","U","G","G","M","M","AD","M","M"],"25":[25,"U","U","G","G","M","M","AD","M","M"],"26":[26,"U","U","G","G","M","M","AD","M","M"],"27":[27,"U","U","G","G","M","M","AD","M","M"],"28":[28,"U","U","G","G","M","M","AD","M","M"],"29":[29,"U","U","G","G","M","M","AD","M","M"],"30":[30,"U","U","G","G","M","M","AD","M","M"],"31":[31,"U","U","G","G","M","M","M","AD","M"],"32":[32,"U","U","G","G","M","M","M","AD","M"],"33":[33,"U","U","G","G","M","M","M","AD","M"],"34":[34,"U","U","G","G","M","M","M","AD","M"],"35":[35,"U","U","G","G","M","M","M","AD","M"],"36":[36,"U","U","G","G","M","M","M","AD","M"],"37":[37,"U","U","G","G","M","M","M","AD","M"],"38":[38,"U","U","G","G","M","M","M","AD","M"],"39":[39,"U","U","G","G","M","M","M","AD","M"],"40":[40,"U","U","G","G","M","M","M","AD","M"],"41":[41,"U","U","G","G","M","M","M","AD","M"],"42":[42,"U","U","G","G","M","M","M","AD","M"],"43":[43,"U","U","G","G","M","M","M","AD","M"],"44":[44,"U","U","G","G","M","M","M","AD","M"],"45":[45,"U","U","G","G","M","M","M","AD","M"],"46":[46,"U","U","G","G","M","M","M","AD","M"],"47":[47,"U","U","G","G","M","M","M","AD","M"],"48":[48,"U","U","G","G","M","M","M","AD","M"],"49":[49,"U","U","G","G","M","M","M","AD","M"],"50":[50,"U","U","G","G","M","M","M","AD","M"],"51":[51,"U","U","G","G","M","M","M","AD","M"],"52":[52,"U","U","G","G","M","M","M","AD","M"],"53":[53,"U","U","G","G","M","M","M","AD","M"],"54":[54,"U","U","G","G","M","M","M","AD","M"],"55":[55,"U","U","G","G","M","M","M","AD","M"],"56":[56,"U","U","G","G","M","M","M","AD","M"],"57":[57,"U","U","G","G","M","M","M","AD","M"],"58":[58,"U","U","G","G","M","M","M","AD","M"],"59":[59,"U","U","G","G","M","M","M","AD","M"],"60":[60,"U","U","G","G","M","M","M","AD","M"]}'
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    DB_spinLevel: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "302f5cxMGlNfIdmeDXrd5KP", "DB_spinLevel");
        var n = cc.Class({
            name: "DB_spinLevel",
            statics: {
                dataLen: 60,
                dataHead: '["Level", "SpinS", "SpinA", "SpinB", "SpinC"]',
                data: '{"1":[1,1,1,1,1],"2":[2,1,1,1,1],"3":[3,1,1,1,1],"4":[4,2,2,1,1],"5":[5,3,3,2,1],"6":[6,4,3,3,2],"7":[7,5,4,3,2],"8":[8,6,5,4,3],"9":[9,6,5,4,3],"10":[10,7,6,5,4],"11":[11,7,6,5,4],"12":[12,8,7,6,5],"13":[13,9,8,7,6],"14":[14,10,9,8,7],"15":[15,11,10,9,8],"16":[16,12,11,10,9],"17":[17,13,12,11,10],"18":[18,14,13,12,11],"19":[19,15,14,13,12],"20":[20,16,15,14,13],"21":[21,17,16,15,14],"22":[22,18,17,16,15],"23":[23,19,18,17,16],"24":[24,20,19,18,17],"25":[25,21,20,19,18],"26":[26,22,21,20,19],"27":[27,23,22,21,20],"28":[28,24,23,22,21],"29":[29,25,24,23,22],"30":[30,26,25,24,23],"31":[31,27,26,25,24],"32":[32,28,27,26,25],"33":[33,29,28,27,26],"34":[34,30,29,28,27],"35":[35,31,30,29,28],"36":[36,32,31,30,29],"37":[37,33,32,31,30],"38":[38,34,33,32,31],"39":[39,35,34,33,32],"40":[40,36,35,34,33],"41":[41,37,36,35,34],"42":[42,38,37,36,35],"43":[43,39,38,37,36],"44":[44,40,39,38,37],"45":[45,41,40,39,38],"46":[46,42,41,40,39],"47":[47,43,42,41,40],"48":[48,44,43,42,41],"49":[49,45,44,43,42],"50":[50,46,45,44,43],"51":[51,47,46,45,44],"52":[52,48,47,46,45],"53":[53,49,48,47,46],"54":[54,50,49,48,47],"55":[55,51,50,49,48],"56":[56,52,51,50,49],"57":[57,53,52,51,50],"58":[58,54,53,52,51],"59":[59,55,54,53,52],"60":[60,56,55,54,53]}'
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    DB_turntable: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "64065XfzjJKvKlrh0erRkH1", "DB_turntable");
        var n = cc.Class({
            name: "DB_turntable",
            statics: {
                dataLen: 11,
                dataHead: '["id", "type", "rarity", "weight", "rewards"]',
                data: '{"1":[1,"coin","C",8,-7.0],"2":[2,"coin","B",4,-6.0],"3":[3,"coin","A",2,-5.0],"4":[4,"coin","S",1,-4.0],"5":[5,"plant","C",8,-7.0],"6":[6,"plant","B",4,-6.0],"7":[7,"plant","A",2,-5.0],"8":[8,"plant","S",1,-4.0],"9":[9,"gem","S",2,10.0],"10":[10,"speedup","A",2,60.0],"11":[11,"drone","C",8,1.0]}'
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    DataType: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "2a3879x5LpJ54fBTMS3SwQx", "DataType");
        var n = cc.Enum({
            InviteData: 1,
            AchievementData: 2,
            AirDropData: 3,
            BuyButtonData: 4,
            DroneData: 5,
            LevelGemData: 6,
            LevelData: 7,
            PlantData: 8,
            ZombieData: 9,
            TurnTableData: 10,
            ShopData: 11,
            SpinLevelData: 12,
            Translation: 13
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    DragonMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "9bb9bftkmpNaoona8Evtxim", "DragonMgr");
        e("DragonType");
        var n = cc.Class({
            extends: cc.Component,
            statics: {
                handles_: {},
                create: function(e, t) {
                    this.handles_[e] = this.handles_[e] || [], this.handles_[e].indexOf(t) > -1 || this.handles_[e].push(t)
                },
                playAnimation: function(e, t, i, n) {
                    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                        a = this.handles_[e].indexOf(t);
                    a > -1 && (this.handles_[e][a].timeScale = o, this.handles_[e][a].playAnimation(i, n ? -1 : 1))
                },
                playPlantAcelerate: function(e, t, i) {
                    var n = this.handles_[e].indexOf(t);
                    n > -1 && (this.handles_[e][n].timeScale = i)
                },
                deleteDragon: function(e, t) {
                    var i = this.handles_[e].indexOf(t);
                    i > -1 && this.handles_[e].splice(i, 1)
                }
            }
        });
        t.exports = n, cc._RF.pop()
    }, {
        DragonType: "DragonType"
    }],
    DragonType: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "91396qbrO5F5ZWqnE3aqawU", "DragonType");
        var n = cc.Enum({
            Plant: "plant",
            Zombie: "zombie"
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    DroneData: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "b67ecaEfp5L/47VzFlSQybx", "DroneData");
        var n = cc.Class({
            name: "DroneData",
            properties: {
                Level: 1,
                Drone: 1
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    DroneMapMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "61bffcDoHpFLrMFuuEK2ldR", "DroneMapMgr");
        var n = e("DroneData"),
            o = e("DB_droneRewards"),
            a = cc.Class({
                extends: cc.Component,
                properties: {
                    dataList: {
                        default: [],
                        type: [n]
                    }
                },
                DecodeJson: function() {
                    var e = JSON.parse(o.data);
                    for (var t in e) {
                        var i = new n;
                        i.Level = e[t][0], i.Drone = e[t][1], this.dataList[t] = i
                    }
                },
                getDataByKey: function(e) {
                    return this.dataList[e]
                }
            });
        t.exports = a, cc._RF.pop()
    }, {
        DB_droneRewards: "DB_droneRewards",
        DroneData: "DroneData"
    }],
    EffectMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "3a004OjyE9KIIcGLjt8QicQ", "EffectMgr");
        var n = e("EffectType"),
            o = cc.Class({
                extends: cc.Component,
                properties: {
                    obCoinPre: cc.Prefab,
                    obCrickPre: cc.Prefab,
                    obVertigoPre: cc.Prefab,
                    obDieSmokePre: cc.Prefab,
                    mergePre: cc.Prefab,
                    flowerOpenPre: cc.Prefab
                },
                InitPool: function() {
                    var e = this;
                    this.coinFlyPool = new cc.NodePool, cc.loader.loadRes("prefab/effect/coinFly", function(t, i) {
                        if (t) cc.error(t.message || t);
                        else {
                            e.obCoinPre = i;
                            for (var n = 0; n < 8; n++) {
                                var o = cc.instantiate(i);
                                e.coinFlyPool.put(o)
                            }
                        }
                    }), this.crickPool = new cc.NodePool, cc.loader.loadRes("prefab/effect/crick", function(t, i) {
                        if (t) cc.error(t.message || t);
                        else {
                            e.obCrickPre = i;
                            for (var n = 0; n < 12; n++) {
                                var o = cc.instantiate(i);
                                e.crickPool.put(o)
                            }
                        }
                    }), this.dieSmokePool = new cc.NodePool, cc.loader.loadRes("prefab/effect/dieSmoke", function(t, i) {
                        if (t) cc.error(t.message || t);
                        else {
                            e.obDieSmokePre = i;
                            for (var n = 0; n < 8; n++) {
                                var o = cc.instantiate(i);
                                e.dieSmokePool.put(o)
                            }
                        }
                    }), this.mergeEffectPool = new cc.NodePool, cc.loader.loadRes("prefab/effect/merge", function(t, i) {
                        if (t) cc.error(t.message || t);
                        else {
                            e.mergePre = i;
                            for (var n = 0; n < 3; n++) {
                                var o = cc.instantiate(i);
                                e.mergeEffectPool.put(o)
                            }
                        }
                    }), this.flowerOpenPool = new cc.NodePool, cc.loader.loadRes("prefab/effect/FlowerOpen", function(t, i) {
                        if (t) cc.error(t.message || t);
                        else {
                            e.flowerOpenPre = i;
                            for (var n = 0; n < 3; n++) {
                                var o = cc.instantiate(i);
                                e.flowerOpenPool.put(o)
                            }
                        }
                    })
                },
                clearList: function() {
                    this.coinFlyPool.clear(), this.crickPool.clear(), this.dieSmokePool.clear(), this.mergeEffectPool.clear(), this.flowerOpenPool.clear()
                },
                getObFromPool: function(e) {
                    var t = null;
                    return e == n.CoinFly ? this.coinFlyPool.size() > 0 ? (t = this.coinFlyPool.get()).active = !0 : t = cc.instantiate(this.obCoinPre) : e == n.Crick ? this.crickPool.size() > 0 ? (t = this.crickPool.get()).active = !0 : t = cc.instantiate(this.obCrickPre) : e == n.DieSmoke ? this.dieSmokePool.size() > 0 ? (t = this.dieSmokePool.get()).active = !0 : t = cc.instantiate(this.obDieSmokePre) : e == n.Merge ? this.mergeEffectPool.size() > 0 ? (t = this.mergeEffectPool.get()).active = !0 : t = cc.instantiate(this.mergePre) : e == n.flowerPotOpen && (this.flowerOpenPool.size() > 0 ? (t = this.flowerOpenPool.get()).active = !0 : t = cc.instantiate(this.flowerOpenPre)), t
                },
                ObBackToPool: function(e, t) {
                    t == n.CoinFly ? this.coinFlyPool.put(e) : t == n.Crick ? this.crickPool.put(e) : t == n.Vertigo ? cc.log("\u8f6e\u7a7a") : t == n.DieSmoke ? this.dieSmokePool.put(e) : t == n.Merge && this.mergeEffectPool.put(e)
                }
            });
        t.exports = o, cc._RF.pop()
    }, {
        EffectType: "EffectType"
    }],
    EffectType: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "4fd9dB2EGZK2Y6US5aNEfsv", "EffectType");
        var n = cc.Enum({
            CoinFly: 1,
            Crick: 2,
            Vertigo: 3,
            DieSmoke: 4,
            Merge: 5,
            flowerPotOpen: 6
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    Event: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "bf1b7bGpDxFNZxQSrgXQdYl", "Event");
        var n = cc.Class({
            extends: cc.Component,
            statics: {
                ParseFinish: "ParseFinish",
                MoneyChange: "MoneyChange",
                BuyPlantInShop: "BuyPlantInShop",
                defense: "defense",
                flowerPotOpen: "flowerPotOpen",
                BuyPlant: "BuyPlant",
                unlockGird: "unlockGird",
                checkMissionAndAchieve: "checkMissionAndAchieve",
                DiscountStateChange: "DiscountStateChange",
                singleGuideComplete: "guideComplete",
                AllGuideComplete: "AllGuideComplete"
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    GameCenterCtrl: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "0ee76vQB/lLLJdwvoDjxLfA", "GameCenterCtrl");
        var n = e("Event"),
            o = e("DataType"),
            a = e("MyEnum"),
            s = e("MissionType");
        cc.Class({
            extends: cc.Component,
            properties: {
                _type: -1,
                renyuDragon: dragonBones.ArmatureDisplay
            },
            setRenYuZIndex: function() {
                this.renyuDragon.node.zIndex = 92
            },
            playRenYuAnimation: function(e) {
                this.renyuDragon.playAnimation(e, 1)
            },
            onRenYuAnimComplete: function() {
                this.renyuDragon.playAnimation("DaiJi_renyu", 0)
            },
            start: function() {
                cc.director.GlobalEvent.on(n.defense, this.defense, this), cc.director.GlobalEvent.on(n.AllGuideComplete, this.allGuideComplete, this), this.renyuDragon.on(dragonBones.EventObject.COMPLETE, this.onRenYuAnimComplete, this), cc.game.on(cc.game.EVENT_HIDE, function() {
                    cc.game.pause()
                }), cc.game.on(cc.game.EVENT_SHOW, function() {
                    cc.game.resume()
                }), this.scheduleOnce(function() {
                    cc.Mgr.GameCenterCtrl = this, this.getNetTime(), this.init()
                }, .1)
            },
            init: function() {
                var e = this;
                cc.Mgr.game.loadProgress = .35, cc.Mgr.flowerPotMgr.init(function() {
                    cc.Mgr.PlatformController.reportDataToPlatform("login"), cc.Mgr.game.loadProgress = .65, console.log("\u82b1\u76c6\u52a0\u8f7d\u5b8c\u6210"), cc.Mgr.plantMgr.init(function() {
                        console.log("\u690d\u7269\u8d44\u6e90\u52a0\u8f7d\u5b8c\u6210"), cc.Mgr.game.loadProgress = .95, cc.Mgr.ZombieMgr.InitZombiesMgr(), cc.Mgr.PlatformController.reportDataToPlatform("ready"), cc.Mgr.AudioMgr.playBGM("bgm"), e.showGameUI()
                    })
                }), cc.Mgr.Config.openGift && (console.log("\u793c\u5305\u4fe1\u606f\u6709\u6536\u5230 = " + cc.Mgr.Config.activityGifts[0]), cc.Mgr.Http.sendRequest(cc.Mgr.Config.getGiftUrl(), function(e, t) {
                    if (e) {
                        cc.Mgr.game.hasGiftData = !0, cc.Mgr.Config.activityGifts[0] = t.giftIdA || "YSL888", cc.Mgr.Config.activityGifts[1] = t.giftIdB || "SSS666", cc.Mgr.Config.activityGifts[2] = t.giftIdC || "SSS888";
                        for (var i = 0; i < 3; i++) cc.Mgr.Config.giftDataList[i].moneyRatio = t.giftDataList[i].moneyRatio, cc.Mgr.Config.giftDataList[i].gemNum = t.giftDataList[i].gemNum, cc.Mgr.Config.giftDataList[i].flowerPot = t.giftDataList[i].flowerPot
                    } else console.log("\u793c\u5305\u4fe1\u606f\u6ca1\u6709\u6536\u5230")
                })), console.log("\u914d\u7f6e\u4fe1\u606f\u83b7\u53d6\u4e2d============="), cc.Mgr.Http.sendRequest(cc.Mgr.Config.getConfigUrl(), function(e, t) {
                    "h5_4399" != cc.Mgr.Config.platform && (e ? (console.log("\u914d\u7f6e\u4fe1\u606f\u6536\u5230 =========="), cc.Mgr.Config.luckyMergeInterval = t.luckyMergeInterval || 15, cc.Mgr.Config.discountUseShareRatio = t.discountUseShareRatio || .3, cc.Mgr.Config.buyPlantInShopUseShareRatio = t.buyPlantInShopUseShareRatio || .3, cc.Mgr.Config.doubleCoinKeepTime = t.doubleCoinKeepTime || 120, cc.Mgr.Config.openLuckyMergeRatio = t.openLuckyMergeRatio || .15, cc.Mgr.Config.bigResultUseShare = t.bigResultUseShare || .5, cc.Mgr.Config.insertAdRatio = t.insertAdRatio || 1, cc.Mgr.Config.insertAdInterval = t.insertAdInterval || 20) : console.log("\u914d\u7f6e\u4fe1\u606f\u6ca1\u6709\u6536\u5230 \u4f7f\u7528\u672c\u5730\u6570\u636e"))
                }), cc.Mgr.Utils.timeToDate(cc.Mgr.Utils.GetSysTime()) - cc.Mgr.Utils.timeToDate(cc.Mgr.UserDataMgr.lastPlayTime) >= 1 && (cc.Mgr.game.clearMissionDataToNextDay(), cc.Mgr.game.spinADTimeCount = 0, cc.Mgr.game.spinADResetTime = 0, cc.Mgr.game.discountBeActiveTimes = 0, cc.Mgr.game.discountLeftTimes = 0, cc.Mgr.game.discountLv = 0, cc.Mgr.game.hasGetGift = !1), cc.Mgr.game.lastShowInsertAdsTime = cc.Mgr.Utils.GetSysTime(), cc.Mgr.game.updateMissionProgressById(s.Login)
            },
            defense: function(e) {
                console.log("\u5c0f\u6ce2\u62b5\u5fa1\u72b6\u6001 " + e.state);
                var t = cc.Mgr.TDEvent.WaveOut + cc.Mgr.game.level + "_" + cc.Mgr.game.curBoshu;
                cc.Mgr.PlatformController.AldEventStatis(t, {
                    IsWin: e.state ? "Y" : "N"
                });
                var i = 3,
                    n = 0,
                    a = !1,
                    c = !1;
                this.clearZombiePool = !1;
                var r = cc.Mgr.game.level + "_" + cc.Mgr.game.curBoshu,
                    l = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(o.LevelData, r);
                if (e.state) {
                    if (cc.Mgr.game.updateMissionProgressById(s.DefenseSuc), this.playRenYuAnimation("Win_renyu"), cc.Mgr.game.curBoshu == l.waveCount) i = 8, a = !0, n = (h = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(o.ZombieData, l.zombieID1)).money * (.8 + .4 * Math.random()), n = Math.floor(n), cc.Mgr.game.level++, cc.Mgr.game.curBoshu = 1, cc.Mgr.game.level > cc.Mgr.Config.lastGameLevel && (cc.Mgr.game.level = cc.Mgr.Config.lastGameLevel), cc.Mgr.PlatformController.reportDataToPlatform("upgrade", {
                        lv: cc.Mgr.game.level
                    });
                    else cc.Mgr.game.curBoshu++, cc.Mgr.game.curBoshu == l.waveCount && (c = !0)
                } else {
                    var h;
                    if (cc.Mgr.PlatformController.QuakeScreen(!0), this.playRenYuAnimation("Lose_renyu"), cc.Mgr.game.curBoshu == l.waveCount) i = 8, n = (h = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(o.ZombieData, l.zombieID1)).money * (1 - e.zhp / h.hp), a = !0;
                    cc.Mgr.game.curBoshu = 1
                }
                a && e.state && (this.clearZombiePool = !0), cc.Mgr.UserDataMgr && cc.Mgr.UserDataMgr.SaveUserData(), window.ArcadeSave && window.ArcadeSave.scheduleCloudSave && window.ArcadeSave.scheduleCloudSave(), a ? cc.Mgr.UIMgr.showBigResult(e.state, n) : cc.Mgr.UIMgr.showSmallResult(e.state), window.ArcadeBridge && window.ArcadeBridge.onDefenseResult(!!e.state, !!a, l && l.waveCount ? l.waveCount : 1), c ? this.scheduleOnce(function() {
                    cc.Mgr.PlatformController.QuakeScreen(!0), cc.Mgr.UIMgr.showBossComing(), cc.Mgr.UIMgr.InGameUI.changeAngryUIState(1)
                }, 1) : cc.Mgr.UIMgr.InGameUI.changeAngryUIState(0), this.createCallback = function() {
                    this.clearZombiePool && (console.log("\u95ef\u5173\u6210\u529f \u4e0b\u4e00\u5173\u7b2c\u4e00\u6ce2\u5f00\u59cb\u524d\uff0c\u6e05\u7406\u6c60\u5b50"), cc.Mgr.ZombieMgr.clearZombiesPool()), this.createZoombie()
                }, this.scheduleOnce(this.createCallback, i)
            },
            rebornToBossLvWave: function() {
                var e = cc.Mgr.game.level + "_" + cc.Mgr.game.curBoshu,
                    t = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(o.LevelData, e);
                cc.Mgr.game.curBoshu = t.waveCount, cc.Mgr.UIMgr.InGameUI.RefreshLvData(), this.scheduleOnce(function() {
                    this.clearZombiePool && (console.log("\u95ef\u5173\u6210\u529f \u4e0b\u4e00\u5173\u7b2c\u4e00\u6ce2\u5f00\u59cb\u524d\uff0c\u6e05\u7406\u6c60\u5b50"), cc.Mgr.ZombieMgr.clearZombiesPool()), this.createZoombie()
                }, 1)
            },
            unscheduleCreateCallBack: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.unschedule(this.createCallback), 0 != e && (this.clearZombiePool && (console.log("\u95ef\u5173\u6210\u529f \u4e0b\u4e00\u5173\u7b2c\u4e00\u6ce2\u5f00\u59cb\u524d\uff0c\u6e05\u7406\u6c60\u5b50"), cc.Mgr.ZombieMgr.clearZombiesPool()), this.scheduleOnce(this.createZombiesForNextBigLv, 1))
            },
            createZombiesForNextBigLv: function() {
                this.createZoombie()
            },
            unscheduleCreateZombiesForNextBigLv: function() {
                this.unschedule(this.createCallback)
            },
            allGuideComplete: function(e) {
                console.log("AllGuideComplete"), this.createZoombie()
            },
            getNetTime: function() {
                cc.Mgr.game.enterGameTimeStamp = cc.Mgr.Utils.GetSysTime(), "pc" == cc.Mgr.Config.platform && cc.Mgr.Http.sendRequest("https://adh5.talkyun.com.cn/ad-aggregation-api/getTime", function(e, t) {
                    if (e) {
                        console.log("ret2 ret.timeStamp = " + t.timeStamp);
                        var i = Math.round(t.timeStamp / 1e3);
                        cc.Mgr.game.netTimeStamp = i
                    } else cc.Mgr.game.netTimeStamp = cc.Mgr.Utils.GetSysTime()
                })
            },
            caculateOfflineAsset: function() {
                if (0 != cc.Mgr.UserDataMgr.lastPlayTime) {
                    var e = Math.floor((cc.Mgr.Utils.GetSysTime() - cc.Mgr.UserDataMgr.lastPlayTime) / 60);
                    if (!(e < 1)) {
                        var t = Math.floor(e / 60),
                            i = Math.floor(e % 60);
                        (cc.Mgr.Utils.GetSysTime() - cc.Mgr.UserDataMgr.lastPlayTime) % 60 >= 30 && (e += .5, i += .5);
                        var n = 0,
                            s = 0,
                            c = 0;
                        t < 1 ? c = .78 : t < 2 ? c = .46 : t < 3 ? c = .33 : t < 4 ? c = .21 : t < 5 ? c = .14 : t < 6 ? c = .07 : t < 7 ? c = .04 : t < 8 ? c = .025 : (i = e - 480, e - 480 >= 60 && (i = 60), c = .0167);
                        for (var r = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(o.PlantData, cc.Mgr.game.plantMaxLv).offline, l = 0; l < cc.Mgr.game.PlantsPK.length; l++)
                            if (cc.Mgr.game.PlantsPK[l].type == a.GridState.plant) {
                                var h = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(o.PlantData, cc.Mgr.game.PlantsPK[l].level),
                                    g = Math.floor(r * Math.pow(2.1, h.level - 1));
                                n += g;
                                var d = g * c;
                                s += d * i
                            } var p = 0;
                        t <= 1 ? p = Math.floor(n * e * .78) : t < 2 ? p = Math.floor(60 * n * .78 + s) : t < 3 ? p = Math.floor(60 * n * 1.24 + s) : t < 4 ? p = Math.floor(60 * n * 1.57 + s) : t < 5 ? p = Math.floor(60 * n * 1.78 + s) : t < 6 ? p = Math.floor(60 * n * 1.92 + s) : t < 7 ? p = Math.floor(60 * n * 1.99 + s) : t < 8 ? p = Math.floor(60 * n * 2.03 + s) : (p = Math.floor(60 * n * (2.03 + .025) + s), console.log("offlineMoney = " + r + "  hours = " + t + "  money = " + n + " outMoney = " + p)), (p = cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 5 ? Math.floor((.5 * Math.random() + .6) * p) : cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 9 ? Math.floor((.2 * Math.random() + .9) * p) : cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 13 ? Math.floor((.25 * Math.random() + .9) * p) : Math.floor((.3 * Math.random() + .9) * p)) <= 0 || cc.Mgr.UIMgr.openOfflineAssetsUI(p)
                    }
                }
            },
            showGameUI: function() {
                var e = this;
                cc.Mgr.PlatformController.reportDataToPlatform("load"), cc.Mgr.UIMgr.openGameInUI(function() {
                    e.caculateOfflineAssetNow(), cc.Mgr.PlatformController.reportDataToPlatform("start"), e.schedule(function() {
                        cc.Mgr.UserDataMgr.SaveUserData()
                    }, 3, cc.macro.REPEAT_FOREVER, 10), cc.Mgr.game.loadProgress = 1, e.createPlant()
                })
            },
            caculateOfflineAssetNow: function() {
                cc.Mgr.game.needGuide || this.scheduleOnce(function() {
                    console.log("\u5148\u540e\u987a\u5e8f\u95ee\u9898 \u79bb\u7ebf"), this.caculateOfflineAsset()
                }, 15)
            },
            createPlant: function() {
                cc.Mgr.plantMgr.initPlants(), cc.Mgr.game.needGuide ? cc.Mgr.UIMgr.openGuide() : this.createZoombie()
            },
            createZoombie: function() {
                console.log("\u5f53\u524d\u5173\u5361 = " + cc.Mgr.game.level + "\uff0c\u5f53\u524d\u6ce2\u6570 = " + cc.Mgr.game.curBoshu);
                var e = cc.Mgr.TDEvent.WaveIn + cc.Mgr.game.level + "_" + cc.Mgr.game.curBoshu;
                cc.Mgr.PlatformController.AldEventStatis(e, {
                    WaveIn: "In"
                }), cc.Mgr.ZombieMgr.getOneWaveZombies(cc.Mgr.game.level, cc.Mgr.game.curBoshu)
            },
            plantEnterAngryState: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                cc.Mgr.plantMgr.changePlantAngryState(e)
            }
        }), cc._RF.pop()
    }, {
        DataType: "DataType",
        Event: "Event",
        MissionType: "MissionType",
        MyEnum: "MyEnum"
    }],
    GlobalEvent: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "b5a94AUBhhFQKkBpmCdMQ6J", "GlobalEvent"), cc.director.GlobalEvent = {
            handles_: {},
            emit: function(e, t) {
                var i = [];
                for (var n in t.eventName = e, this.handles_)
                    if (n == e)
                        for (var o = 0; o < this.handles_[n].length; o++)
                            if (this.handles_[n][o]) {
                                var a = this.handles_[n][o](t);
                                i.push(a)
                            } return i
            },
            on: function(e, t, i) {
                this.handles_[e] = this.handles_[e] || [], this.handles_[e].push(t.bind(i))
            },
            off: function(e) {
                if (this.handles_[e])
                    for (var t = 0; t < this.handles_[e].length; t++) this.handles_[e][t] = null
            },
            clear: function() {
                for (var e in this.handles_)
                    for (var t = 0; t < this.handles_[e].length; t++) this.handles_[e][t] = null
            }
        }, cc._RF.pop()
    }, {}],
    GoodMapDecoder: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "1cc1e0yXE5O8avRRE3Olzp4", "GoodMapDecoder");
        var n = e("GoodsData"),
            o = cc.Class({
                extends: cc.Component,
                properties: {
                    jsonName: "goods",
                    goodsList: {
                        default: [],
                        type: [n]
                    }
                },
                DecodeJson: function(e) {
                    var t = this;
                    t.reCb = e, cc.loader.loadRes("json/" + t.jsonName, function(e, i) {
                        if (e) t.reCb(!1);
                        else {
                            for (var o = i.json.goods, a = 0; a < o.length; a++) {
                                var s = new n;
                                s.Id = o[a].goodsId, s.icon = o[a].icon, s.name = o[a].name, s.price = o[a].price, t.goodsList[a] = s
                            }
                            cc.log("\u89e3\u6790\u5b8c\u6210"), t.reCb(!0)
                        }
                    })
                },
                getDataByName: function(e) {
                    for (var t = null, i = this.goodsList.length - 1; i >= 0; i--)
                        if (e == this.goodsList[i].name) {
                            t = this.goodsList[i];
                            break
                        } return t
                },
                getDataById: function(e) {
                    for (var t = null, i = this.goodsList.length - 1; i >= 0; i--)
                        if (e == this.goodsList[i].Id) {
                            t = this.goodsList[i];
                            break
                        } return t
                },
                getJsonLength: function() {
                    return this.goodsList.length
                },
                getDataList: function() {
                    return this.goodsList
                }
            });
        t.exports = o, cc._RF.pop()
    }, {
        GoodsData: "GoodsData"
    }],
    GoodsData: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "3181a0eu+BDhoNZrrSBRV5p", "GoodsData");
        var n = cc.Class({
            name: "GoodsData",
            properties: {
                icon: "",
                name: "",
                Id: 1,
                price: 0
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    Guides: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "bc93dAJV3hAEIAHRtOiz5mx", "Guides");
        var n = e("MyEnum"),
            o = e("Event"),
            a = e("uiConfig");
        cc.Class({
            extends: cc.Component,
            properties: {
                guideNodes: [cc.Node],
                guideLbls: [cc.Label]
            },
            start: function() {
                cc.director.GlobalEvent.on(o.singleGuideComplete, this.singleGuideComplete, this), this.guideNodes[0].active = !0, this.curStep = n.GuideType.guide1, cc.Mgr.game.curGuideStep = this.curStep, this.node.zIndex = a.guide.Layer
            },
            singleGuideComplete: function(e) {
                var t = cc.Mgr.TDEvent.TutorialStep + e.step;
                cc.Mgr.PlatformController.AldEventStatis(t, {
                    Finish: "Y"
                });
                var i = e.step;
                if (console.log("singleGuideComplete step = " + i), this.guideNodes[i].active = !1, i == this.guideNodes.length - 1) return cc.director.GlobalEvent.emit(o.AllGuideComplete, {}), cc.Mgr.game.needGuide = !1, void cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("guideOver"));
                var a = .3;
                i == n.GuideType.guide3 && (a = 1.5), this.scheduleOnce(function() {
                    this.guideNodes[i + 1].active = !0, i + 1 == n.GuideType.guide3 && cc.Mgr.plantMgr.guideStep3Run(), this.curStep += 1, cc.Mgr.game.curGuideStep = this.curStep
                }, a), cc.Mgr.game.curGuideStep = n.GuideType.none
            }
        }), cc._RF.pop()
    }, {
        Event: "Event",
        MyEnum: "MyEnum",
        uiConfig: "uiConfig"
    }],
    HttpMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "bee53aqU1VEmr1eiqruqjpR", "HttpMgr");
        var n = cc.Class({
            statics: {
                sessionId: 0,
                userId: 0,
                sendRequest: function(e, t) {},
                sendRequestPost: function(e, t, i) {}
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    InGameUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "2e531d48NJLnoC37E1mziCK", "InGameUI");
        var n = e("DataType"),
            o = e("Event"),
            a = e("AtlasType"),
            s = e("MySprite"),
            c = e("MyEnum"),
            r = e("uiConfig"),
            l = e("uav"),
            h = cc.Class({
                extends: cc.Component,
                properties: {
                    lastLvLbl: cc.Label,
                    curLvLbl: cc.Label,
                    nextLvLbl: cc.Label,
                    waveCountLbl: cc.Label,
                    coinNumLbl: cc.Label,
                    diamondNumLbl: cc.Label,
                    coinSpriteNode: cc.Node,
                    gemSpriteNode: cc.Node,
                    topNode: cc.Node,
                    buyCostLbl: cc.Label,
                    plantHead: s,
                    voiceSp: s,
                    setShareNode: cc.Node,
                    screenSp: s,
                    recordScreenNode: cc.Node,
                    setContentNode: cc.Node,
                    angryLeftTimeLbl: cc.Label,
                    angryUiDragon: dragonBones.ArmatureDisplay,
                    uav: l,
                    buyButtonScprit: cc.Button,
                    buyButtonMaskNode: cc.Node,
                    missionTip: cc.Node,
                    turntableTip: cc.Node,
                    shopTip: cc.Node,
                    signTip: cc.Node,
                    doubleCoinTipNode: cc.Node,
                    doubleLeftTimeLbl: cc.Label,
                    adsGetGemLbl: cc.Label,
                    topNodeWidget: cc.Widget,
                    topNode2Widget: cc.Widget,
                    discountBtn: cc.Node,
                    discountLeftLbl: cc.Label,
                    discountTip: cc.Node,
                    discountLbl: cc.Label,
                    goldZombieBtn: cc.Node,
                    giftNode: cc.Node,
                    doubleCoinBar: cc.ProgressBar
                },
                refreshDiscountUI: function() {
                    if (cc.Mgr.game.discountLeftTimes <= 0) this.discountTip.active = !1;
                    else {
                        console.log(cc.Mgr.game.discountBeActiveTimes + " =========  =========  " + cc.Mgr.game.discountLv), this.discountTip.active = !0;
                        var e = 10 - cc.Mgr.game.discountLv;
                        this.discountLbl.string = e + "\u6298"
                    }
                },
                useGoldZombie: function() {},
                refreshDiscountBtn: function(e) {
                    0 != cc.Mgr.Config.openDiscountState ? (this.discountBtn.active = e, cc.Mgr.game.discountBeActiveTimes >= 9 ? this.discountBtn.active = !1 : e && (cc.Mgr.game.discountLeftTimes <= 0 ? (this.discountBtn.active = !0, this.discountLeftLbl.string = "") : (this.discountBtn.active = !1, this.discountLeftLbl.string = "Siêu giảm giá còn lại: " + cc.Mgr.game.discountLeftTimes + " lần"))) : this.discountBtn.active = !1
                },
                refreshDiscountState: function(e) {
                    console.log(cc.Mgr.game.discountLv + "  \u5df2\u7ecf\u6fc0\u6d3b\u6b21\u6570 " + cc.Mgr.game.discountBeActiveTimes), this.refreshDiscountBtn(e), this.refreshDiscountUI()
                },
                start: function() {
                    cc.Mgr.UIMgr.InGameUI = this, this.uav.node.active = !1, this.missionTip.active = !1, cc.director.GlobalEvent.on(o.checkMissionAndAchieve, function(e) {
                        this.checkMissionAchieveTip()
                    }, this)
                },
                caculateShopHasAds: function() {
                    if (cc.Mgr.game.plantMaxLv <= 6) return !1;
                    for (var e = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(n.ShopData, cc.Mgr.game.plantMaxLv), t = 0; t < 9; t++) {
                        var i = "";
                        switch (t) {
                            case 0:
                                i = e.MAX;
                                break;
                            case 1:
                                i = e.MAX_1;
                                break;
                            case 2:
                                i = e.MAX_2;
                                break;
                            case 3:
                                i = e.MAX_3;
                                break;
                            case 4:
                                i = e.MAX_4;
                                break;
                            case 5:
                                i = e.MAX_5;
                                break;
                            case 6:
                                i = e.MAX_6;
                                break;
                            case 7:
                                i = e.MAX_7;
                                break;
                            case 8:
                                i = e.MAX_8
                        }
                        if (i == c.ShopItemType.Ads && cc.Mgr.Utils.GetSysTime() - cc.Mgr.game.lastAdsGetPlantTime > cc.Mgr.Config.shopAdsInterval) return !0
                    }
                    return !1
                },
                checkShopTipState: function() {
                    this.caculateShopHasAds() ? this.shopTip.active = !0 : this.shopTip.active = !1
                },
                checkTurnTableLeftTime: function() {
                    cc.Mgr.game.spinADResetTime < cc.Mgr.Config.turnTableTimes ? this.checkTurnTableTip(!0) : cc.Mgr.game.spinADTimeCount > 1 ? (cc.Mgr.game.spinADTimeCount -= 1, cc.Mgr.game.spinADTimeCount <= 0 ? this.checkTurnTableTip(!0) : this.checkTurnTableTip(!1)) : this.checkTurnTableTip(!1)
                },
                changeMissionTipState: function(e) {
                    this.missionTip.active = e
                },
                showUav: function() {
                    this.uav.node.active = !0, cc.Mgr.AudioMgr.playSFX("plane-in"), this.uav.show()
                },
                closeUav: function() {
                    1 == this.uav.node.active && this.uav.uavOutScreen()
                },
                unscheduleShowUav: function() {
                    this.unschedule(this.showUav)
                },
                showUavNextTime: function(e) {
                    cc.Mgr.game.plantMaxLv < 5 || this.scheduleOnce(this.showUav, e)
                },
                showGameTip: function() {
                    cc.Mgr.UIMgr.showPrompt("Nhắc nhở: Dữ liệu trò chơi được lưu cục bộ, vui lòng không xóa dữ liệu trò chơi do nhầm lẫn")
                },
                adsGetFiveGem: function() {
                    if (cc.Mgr.game.adsGetGemTimes >= 20) cc.Mgr.UIMgr.showPrompt("Kim cương Free hôm nay đã hết");
                    else {
                        if ("h5_4399" == cc.Mgr.Config.platform) {
                            var e = {
                                    forWhat: "getFreeGems"
                                },
                                t = 5;
                            return t = cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 5 ? 5 : cc.Mgr.game.level < cc.Mgr.Config.gameCheckLv + 13 ? 10 : 15, e.des = "Nhận " + t + " kim cương bằng cách xem video?", void cc.Mgr.UIMgr.openTipUI(e)
                        }
                        cc.Mgr.AdsMgr.ShowVideoAds(5, function(e) {
                            if (0 == e) {
                                var t = 5;
                                t = cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 5 ? 5 : cc.Mgr.game.level < cc.Mgr.Config.gameCheckLv + 13 ? 10 : 15, cc.Mgr.game.gems += t, cc.Mgr.game.adsGetGemTimes += 1, cc.Mgr.UIMgr.showGemsEffect()
                            }
                        })
                    }
                },
                refreshAdsGetGemLbl: function() {
                    cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 5 ? this.adsGetGemLbl.string = "+5" : cc.Mgr.game.level < cc.Mgr.Config.gameCheckLv + 13 ? this.adsGetGemLbl.string = "+10" : this.adsGetGemLbl.string = "+15"
                },
                init: function() {
                    var e = 0;
                    cc.Mgr.PlatformController.isAllScreen() && (e = 50), this.topNodeWidget.top = -44 + e, this.topNode2Widget.top = -44 + e, this.topNode.parent = this.node.parent, this.topNode.zIndex = r.inGameUITopNode.Layer, cc.Mgr.game.coinPos = cc.v2(-198, cc.winSize.height / 2 - 30 - e), this.changeToDoubleCoinBtnActive(!1), cc.Mgr.game.gemPos = cc.v2(-19.5, cc.winSize.height / 2 - 30 - e), console.log("---\x3e gemPos = " + cc.Mgr.game.gemPos), this.angryUiDragon.timeScale = 0, this.angryLeftTimeLbl.string = "", this.scheduleOnce(function() {
                        this.RefreshLvData(), this.checkMissionAchieveTip(), this.refreshAdsGetGemLbl(), this.checkShopTipState()
                    }, 1), cc.director.GlobalEvent.on(o.defense, function() {
                        this.RefreshLvData(), this.refreshAdsGetGemLbl()
                    }, this), this.money = cc.Mgr.game.money, this.gems = cc.Mgr.game.gems, "baidu" == cc.Mgr.Config.platform ? (this.voiceSp.node.active = !1, this.setContentNode.height = 130) : "qtt" != cc.Mgr.Config.platform && "h5_4399" != cc.Mgr.Config.platform || (this.setShareNode.active = !1, this.setContentNode.height = 130), this.recordScreenNode.active = cc.Mgr.PlatformController.IsSupportRecordScreen(), this.schedule(function() {
                        if (this.money < cc.Mgr.game.money) {
                            var e = cc.Mgr.game.money - this.money,
                                t = Math.floor(e / .2 * .1);
                            this.money = Math.floor(this.money + t), this.money >= cc.Mgr.game.money - 1 && (this.money = cc.Mgr.game.money), cc.director.GlobalEvent.emit(o.MoneyChange, {})
                        } else this.money = cc.Mgr.game.money;
                        var i = this.money,
                            n = cc.Mgr.Utils.getNumStr(i);
                        if (this.coinNumLbl.string = n, this.gems < cc.Mgr.game.gems) {
                            t = (e = cc.Mgr.game.gems - this.gems) / .4 * .1;
                            this.gems = this.gems + t, this.gems >= cc.Mgr.game.gems - .5 && (this.gems = cc.Mgr.game.gems), cc.director.GlobalEvent.emit(o.MoneyChange, {})
                        } else this.gems = cc.Mgr.game.gems;
                        var a = Math.floor(this.gems),
                            s = cc.Mgr.Utils.getNumStr(a);
                        this.diamondNumLbl.string = s;
                        var c = this.caculateBuyPlantPrice();
                        c.needRefresh && this.RefreshBuyButton(c.interactable)
                    }, .1);
                    var t = this.caculateBuyPlantPrice();
                    t.needRefresh && this.RefreshBuyButton(t.interactable), this.checkTurnTableLeftTime(), this.schedule(function() {
                        this.checkTurnTableLeftTime(), this.checkShopTipState(), 0 == cc.Mgr.game.hasGetGift && cc.Mgr.game.hasGiftData && this.showGiftNode(!0)
                    }, 1), this.showUavNextTime(30), cc.Mgr.AudioMgr.musicState > 0 ? this.voiceSp.setSprite(a.mainUI, "on") : this.voiceSp.setSprite(a.mainUI, "off"), cc.Mgr.game.level >= cc.Mgr.Config.doubleCoinOpenLv && this.changeToDoubleCoinBtnActive(!0), this.checkHasSignState(), this.refreshDiscountState(!0), cc.Mgr.PlatformController.CreateMoreGameBtn()
                },
                checkMissionAchieveTip: function() {
                    cc.Mgr.game.checkOutAchieveDataIsFinished() || cc.Mgr.game.checkOutMissionIsFinished() ? this.changeMissionTipState(!0) : this.changeMissionTipState(!1)
                },
                checkTurnTableTip: function(e) {
                    this.turntableTip.active = e
                },
                setTopNodeLayer: function(e) {},
                RefreshAssetData: function() {},
                RefreshLvData: function() {
                    this.curLvLbl.string = cc.Mgr.game.level, this.lastLvLbl.string = cc.Mgr.game.level - 1, this.nextLvLbl.string = cc.Mgr.game.level + 1;
                    var e = cc.Mgr.game.level + "_" + cc.Mgr.game.curBoshu,
                        t = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(n.LevelData, e);
                    this.waveCountLbl.string = cc.Mgr.game.curBoshu + "/" + t.waveCount, cc.Mgr.game.level >= cc.Mgr.Config.doubleCoinOpenLv && 0 == this.doubleCoinTipNode.active && this.changeToDoubleCoinBtnActive(!0)
                },
                checkUseDiscount: function(e) {
                    var t = e;
                    return cc.Mgr.Config.openDiscountState && cc.Mgr.game.discountLeftTimes > 0 && (t = Math.floor(e * (1 - .1 * cc.Mgr.game.discountLv))), t
                },
                buyButton: function() {
                    if (cc.Mgr.game.needGuide)
                        if (console.log("\u70b9\u51fb\u4e86\u8d2d\u4e70\u6309\u94ae buyButton" + cc.Mgr.game.curGuideStep), cc.Mgr.AudioMgr.playSFX(c.AudioType.click), cc.Mgr.game.curGuideStep == c.GuideType.guide1) console.log("\u70b9\u51fb\u4e86\u8d2d\u4e70\u6309\u94ae buyButton  hahhah "), cc.director.GlobalEvent.emit(o.singleGuideComplete, {
                            step: c.GuideType.guide1
                        });
                        else if (cc.Mgr.game.curGuideStep == c.GuideType.guide2) cc.director.GlobalEvent.emit(o.singleGuideComplete, {
                        step: c.GuideType.guide2
                    });
                    else if (cc.Mgr.game.needGuide && cc.Mgr.game.curGuideStep == c.GuideType.guide6) cc.director.GlobalEvent.emit(o.singleGuideComplete, {
                        step: c.GuideType.guide6
                    });
                    else {
                        if (!cc.Mgr.game.needGuide || cc.Mgr.game.curGuideStep != c.GuideType.guide7) return;
                        cc.director.GlobalEvent.emit(o.singleGuideComplete, {
                            step: c.GuideType.guide7
                        })
                    }
                    var e = cc.Mgr.game.canBuyPlantId,
                        t = cc.Mgr.game.plantBuyRecord[e],
                        i = cc.Mgr.game.caculatePlantPrice(e, t),
                        n = this.checkUseDiscount(i);
                    cc.Mgr.game.money >= n ? cc.director.GlobalEvent.emit(o.BuyPlant, {
                        money: n
                    }) : (console.log("\u91d1\u5e01\u4e0d\u8db3 price = " + n + ", money = " + cc.Mgr.game.money), this.buyButtonScprit.interactable = !1, this.buyButtonMaskNode.active = !0)
                },
                caculateCanBuyPlant: function() {
                    if (cc.Mgr.game.plantMaxLv <= 5) return cc.Mgr.game.plantMaxLv - 2 > 1 ? cc.Mgr.game.plantMaxLv - 2 : 1;
                    var e = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(n.ShopData, cc.Mgr.game.plantMaxLv),
                        t = 0;
                    for (var i in e) {
                        var o = e[i];
                        if (o == c.ShopItemType.Money || o == c.ShopItemType.Ads) return cc.Mgr.game.plantMaxLv - t + 1;
                        t += 1
                    }
                    return cc.Mgr.game.plantMaxLv - 2
                },
                pickOutCanBuyPlantData: function() {
                    var e = this.caculateCanBuyPlant(),
                        t = [];
                    if (cc.Mgr.game.plantMaxLv <= 5)
                        for (var i = 1; i <= e; i++) t.push(i);
                    else {
                        var o = 3;
                        for (i = 0; i <= 3; i++)
                            if (e - i == 1) {
                                o = i;
                                break
                            } for (i = e - o; i <= e; i++) t.push(i)
                    }
                    var a = {};
                    a.plantId = t[0];
                    var s = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(n.PlantData, t[0]);
                    a.plantData = s, a.price = cc.Mgr.game.caculatePlantPrice(t[0], cc.Mgr.game.plantBuyRecord[t[0]]), a.hasOne = !1;
                    for (i = t.length - 1; i >= 0; i--) {
                        var c = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(n.PlantData, t[i]),
                            r = cc.Mgr.game.plantBuyRecord[t[i]],
                            l = cc.Mgr.game.caculatePlantPrice(t[i], r);
                        if (1 == t[i] || 0 == i) return cc.Mgr.game.money > l ? (a.plantId = t[i], a.price = l, a.hasOne = !0, a.plantData = c, a) : (a.plantId = t[i], a.price = l, a.hasOne = !1, a.plantData = c, a);
                        if (cc.Mgr.game.money > l) return a.plantId = t[i], a.price = l, a.hasOne = !0, a.plantData = c, a
                    }
                    return a
                },
                caculateBuyPlantPrice: function() {
                    var e = this.pickOutCanBuyPlantData(),
                        t = e.plantId,
                        i = e.plantData;
                    this.plantHead.setSprite(a.PlantHead, i.head);
                    var n = cc.Mgr.game.plantBuyRecord[t],
                        o = cc.Mgr.game.caculatePlantPrice(t, n),
                        s = cc.Mgr.Utils.getNumStr(o);
                    this.buyCostLbl.string = s;
                    var c = {};
                    return c.plantData = i, cc.Mgr.game.canBuyPlantId = t, c.needRefresh = !1, c.interactable = !0, this.buyButtonScprit.interactable && !e.hasOne ? (c.needRefresh = !0, c.interactable = !1) : !this.buyButtonScprit.interactable && e.hasOne && (c.needRefresh = !0, c.interactable = !0), c
                },
                RefreshBuyButton: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.buyButtonScprit.interactable = e, this.buyButtonMaskNode.active = !e
                },
                subDoubleCoin: function() {
                    if (cc.Mgr.game.doubleCoinStateLeftTime <= 0) return cc.Mgr.game.doubleCoinState = !1, cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 6 ? this.doubleLeftTimeLbl.string = "Lợi nhuận x2" : cc.Mgr.game.level < cc.Mgr.Config.gameCheckLv + 14 ? this.doubleLeftTimeLbl.string = "Trở lại 5 lần" : this.doubleLeftTimeLbl.string = "Trở lại 8 lần", this.unschedule(this.subDoubleCoin), void(this.doubleCoinBar.progress = 0);
                    cc.Mgr.game.doubleCoinStateLeftTime -= 1, this.doubleCoinBar.progress = cc.Mgr.game.doubleCoinStateLeftTime / cc.Mgr.game.doubleCoinAllTime, this.doubleLeftTimeLbl.string = cc.Mgr.Utils.FormatNumToTime(cc.Mgr.game.doubleCoinStateLeftTime, !0), cc.Mgr.game.doubleCoinStateLeftTime <= 0 && (cc.Mgr.game.doubleCoinState = !1, this.doubleCoinBar.progress = 0, this.unschedule(this.subDoubleCoin), this.scheduleOnce(function() {
                        cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 6 ? this.doubleLeftTimeLbl.string = "Lợi nhuận x2" : cc.Mgr.game.level < cc.Mgr.Config.gameCheckLv + 14 ? this.doubleLeftTimeLbl.string = "Trở lại 5 lần" : this.doubleLeftTimeLbl.string = "Trở lại 8 lần"
                    }, .5))
                },
                changeToDoubleCoinBtnActive: function(e) {
                    this.doubleCoinTipNode.active = e, 1 == e && (cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 6 ? this.doubleLeftTimeLbl.string = "Lợi nhuận x2" : cc.Mgr.game.level < cc.Mgr.Config.gameCheckLv + 14 ? this.doubleLeftTimeLbl.string = "Trở lại 5 lần" : this.doubleLeftTimeLbl.string = "Trở lại 8 lần")
                },
                startDoubleCoinTime: function() {
                    cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 6 ? (cc.Mgr.game.doubleCoinAllTime = cc.Mgr.Config.doubleCoinKeepTime, cc.Mgr.game.doubleCoinStateLeftTime = cc.Mgr.Config.doubleCoinKeepTime) : (cc.Mgr.game.level, cc.Mgr.Config.gameCheckLv, cc.Mgr.game.doubleCoinAllTime = cc.Mgr.Config.doubleCoinKeepTime + 60, cc.Mgr.game.doubleCoinStateLeftTime = cc.Mgr.Config.doubleCoinKeepTime + 60), this.doubleCoinBar.progress = cc.Mgr.game.doubleCoinStateLeftTime / cc.Mgr.game.doubleCoinAllTime;
                    var e = cc.Mgr.game.doubleCoinStateLeftTime;
                    cc.Mgr.game.doubleCoinState = !0, this.schedule(this.subDoubleCoin, 1, e, .1)
                },
                changeToDoubleCoinState: function() {
                    if (cc.Mgr.game.doubleCoinStateLeftTime > 0) cc.Mgr.UIMgr.showPrompt("Trạng thái thu nhập nhiều vàng");
                    else if ("h5_4399" != cc.Mgr.Config.platform) {
                        var e = this;
                        cc.Mgr.AdsMgr.ShowVideoAds(6, function(t) {
                            0 == t && e.startDoubleCoinTime()
                        })
                    } else {
                        var t = {
                            forWhat: "doubleCoinState",
                            des: "Xem video, bạn sẽ nhận được nhiều vàng từ việc tiêu diệt quái vật?"
                        };
                        cc.Mgr.UIMgr.openTipUI(t)
                    }
                },
                checkHasSignState: function() {
                    cc.Mgr.Utils.timeToDate(cc.Mgr.Utils.GetSysTime()) - cc.Mgr.Utils.timeToDate(cc.Mgr.game.lastSignDate) < 1 ? this.signTip.opacity = 0 : this.signTip.opacity = 255
                },
                openDiscountUI: function() {
                    cc.Mgr.game.discountLeftTimes > 0 ? cc.Mgr.UIMgr.showPrompt("Hiện tại vẫn còn giảm giá " + cc.Mgr.game.discountLeftTimes + " lần") : cc.Mgr.UIMgr.openDiscountUI()
                },
                openMissionUI: function() {
                    cc.Mgr.UIMgr.openMissionUI()
                },
                showGiftNode: function(e) {
                    this.giftNode.active = e
                },
                openSetUI: function() {
                    var e = this;
                    0 == this.setContentNode.active ? (this.setContentNode.active = !0, this.setContentNode.scaleY = 0, cc.tween(this.setContentNode).to(.25, {
                        scaleY: 1
                    }).start()) : cc.tween(this.setContentNode).to(.25, {
                        scaleY: 0
                    }).call(function() {
                        e.setContentNode.active = !1
                    }).start()
                },
                openTurnTableUI: function() {
                    cc.Mgr.UIMgr.openTurnTableUI()
                },
                openShopUI: function() {
                    cc.Mgr.UIMgr.openShop()
                },
                openAngryUI: function() {
                    this.unschedule(this.cancelAngryCb), cc.Mgr.UIMgr.openAngryUI()
                },
                openSignUI: function() {
                    cc.Mgr.UIMgr.openSignUI()
                },
                openActivityUI: function() {
                    cc.Mgr.UIMgr.openActivityUI()
                },
                onAngryUIClose: function() {
                    this.RefreshAssetData(), cc.Mgr.game.beAngryleftTime > 0 ? (this.angryLeftTimeLbl.string = cc.Mgr.Utils.FormatNumToTime(cc.Mgr.game.beAngryleftTime), this.unschedule(this.cancelAngryCb), this.enterInAngryState()) : this.angryLeftTimeLbl.string = ""
                },
                changeAngryUIState: function(e) {
                    0 == e && cc.Mgr.game.beAngryleftTime > 0 || (this.angryUiDragon.timeScale = 1 == e ? 1 : 0)
                },
                cancelAngryCb: function() {
                    cc.Mgr.game.beAngryleftTime -= 1, cc.Mgr.game.beAngryleftTime <= 0 ? (this.angryUiDragon.timeScale = 0, cc.Mgr.GameCenterCtrl.plantEnterAngryState(!1), this.unschedule(this.cancelAngryCb), this.angryLeftTimeLbl.string = "") : this.angryLeftTimeLbl.string = cc.Mgr.Utils.FormatNumToTime(cc.Mgr.game.beAngryleftTime)
                },
                enterInAngryState: function() {
                    cc.Mgr.GameCenterCtrl.plantEnterAngryState(!0), this.angryUiDragon.timeScale = 1, this.schedule(this.cancelAngryCb, 1)
                },
                voiceSetBtn: function() {
                    1 == cc.Mgr.AudioMgr.musicState ? (cc.Mgr.AudioMgr.closeAudio(), this.voiceSp.setSprite(a.mainUI, "off")) : (cc.Mgr.AudioMgr.openAudio(), this.voiceSp.setSprite(a.mainUI, "on"))
                },
                shareGame: function() {
                    var e = Math.floor(4 * Math.random());
                    cc.Mgr.PlatformController.ShareToFriend(e)
                },
                setScreenSp: function() {
                    "" == cc.Mgr.PlatformController.videoPath ? cc.Mgr.PlatformController.IsScreenRecord ? this.screenSp.setSprite(a.mainUI, "luping2") : this.screenSp.setSprite(a.mainUI, "luping1") : this.screenSp.setSprite(a.mainUI, "luping3")
                },
                startScreenRecord: function() {
                    if (console.log("\u5f00\u59cb\u5f55\u5c4f"), "" != cc.Mgr.PlatformController.videoPath) {
                        var e = this;
                        return console.log("\u6709\u8bb0\u5f55"), void cc.Mgr.PlatformController.ShareRecordScreen(function() {
                            if (e.setScreenSp(), "tt" == cc.Mgr.PlatformController.platform) {
                                var t = 10;
                                t = cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 5 ? 10 : cc.Mgr.game.level < cc.Mgr.Config.gameCheckLv + 13 ? 12 : 15, cc.Mgr.game.gems += t;
                                var i = cc.Mgr.game.plantMaxLv - 8 >= 1 ? cc.Mgr.game.plantMaxLv - 8 : 1;
                                cc.Mgr.flowerPotMgr.addDroneFlowerFot(i, 4);
                                var n = "\u5206\u4eab\u5f55\u5236\u89c6\u9891\u6210\u529f,\u5956\u52b1\u94bb\u77f3" + t + "\u9897\u4e0e4\u4e2a" + i + "\u7ea7\u82b1\u76c6";
                                cc.Mgr.UIMgr.showPrompt(n)
                            } else cc.Mgr.game.gems += 5, cc.Mgr.UIMgr.showPrompt("Chia sẻ video OK, +5 kim cương");
                            cc.Mgr.UIMgr.showGemsEffect()
                        })
                    }
                    0 == cc.Mgr.PlatformController.IsScreenRecord ? cc.Mgr.PlatformController.StartRecordScreen() : cc.Mgr.PlatformController.StopRecordScreen()
                }
            });
        t.exports = h, cc._RF.pop()
    }, {
        AtlasType: "AtlasType",
        DataType: "DataType",
        Event: "Event",
        MyEnum: "MyEnum",
        MySprite: "MySprite",
        uav: "uav",
        uiConfig: "uiConfig"
    }],
    InviteData: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "70fb2utf5pFXYNY0RBXagKj", "InviteData");
        var n = cc.Class({
            name: "InviteData",
            properties: {
                id: 1,
                invitePeople: 0,
                gem: 0
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    InviteMapMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "d47cdT4kWBIIYTHDLKElrOS", "InviteMapMgr");
        var n = e("DB_invite"),
            o = e("InviteData"),
            a = cc.Class({
                extends: cc.Component,
                properties: {
                    dataList: {
                        default: [],
                        type: [o]
                    }
                },
                DecodeJson: function() {
                    var e = JSON.parse(n.data);
                    for (var t in e) {
                        var i = new o;
                        i.id = e[t][0], i.invitePeople = e[t][1], i.gem = e[t][2], this.dataList[t] = i
                    }
                },
                getDataByKey: function(e) {
                    return this.dataList[e]
                }
            });
        t.exports = a, cc._RF.pop()
    }, {
        DB_invite: "DB_invite",
        InviteData: "InviteData"
    }],
    LevelData: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "25d1asmftRCPKX2JxuFi504", "LevelData");
        var n = cc.Class({
            name: "LevelData",
            properties: {
                level: 1,
                wave: 0,
                waveCount: 0,
                zombieID1: 0,
                zombieCount1: 0,
                zombieID2: 0,
                zombieCount2: 0
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    LevelMapMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "4d560IPvYdOCYWNj7c9Kpad", "LevelMapMgr");
        var n = e("DB_level"),
            o = e("LevelData"),
            a = cc.Class({
                extends: cc.Component,
                properties: {
                    dataList: {
                        default: [],
                        type: [o]
                    }
                },
                DecodeJson: function() {
                    var e = JSON.parse(n.data);
                    for (var t in e)
                        if (null != e[t] && "undefined" != e[t]) {
                            var i = new o;
                            i.level = e[t][0], i.wave = e[t][1], i.waveCount = e[t][2], i.zombieID1 = e[t][3], i.zombieCount1 = e[t][4], i.zombieID2 = e[t][5], i.zombieCount2 = e[t][6], this.dataList[t] = i
                        }
                },
                getDataByKey: function(e) {
                    return this.dataList[e]
                }
            });
        t.exports = a, cc._RF.pop()
    }, {
        DB_level: "DB_level",
        LevelData: "LevelData"
    }],
    LoadingUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "91e9eK5t0dKr6/q8pu3GgS4", "LoadingUI");
        var n = ["\u4e00\u5927\u6ce2\u602a\u517d\u6b63\u5728\u88ad\u6765...", "\u4fdd\u62a4\u5bb6\u56ed,\u840c\u840c\u4eecFighting...", "\u602a\u517d\u5df2\u7ecf\u51c6\u5907,\u6b63\u5728\u524d\u6765..."],
            o = cc.Class({
                extends: cc.Component,
                properties: {
                    progressSprite: cc.Sprite,
                    desLbl: cc.Label
                },
                start: function() {
                    this.node.zIndex = 100, this.desLbl.string = n[Math.floor(3 * Math.random())], this.schedule(function() {
                        this.desLbl.string = n[Math.floor(3 * Math.random())]
                    }, 3, 20, 3)
                },
                update: function(e) {
                    var t = this.progressSprite.fillRange;
                    if (t < cc.Mgr.game.loadProgress) {
                        var i = t + .05;
                        i >= cc.Mgr.game.loadProgress && (i = cc.Mgr.game.loadProgress), this.progressSprite.fillRange = i, 1 == i && (this.unscheduleAllCallbacks(), this.node.destroy(), cc.Mgr.UIMgr.activeGameInUI())
                    }
                }
            });
        t.exports = o, cc._RF.pop()
    }, {}],
    LvUpGemData: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "571185Rw9NGRrNhUzy68oDh", "LvUpGemData");
        var n = cc.Class({
            name: "LvUpGemData",
            properties: {
                level: 1,
                gem: 1
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    LvUpGemMapMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "d1d42gSEgFOEqIDI4OwcpbC", "LvUpGemMapMgr");
        var n = e("DB_levelupGem"),
            o = e("LvUpGemData");
        cc.Class({
            extends: cc.Component,
            properties: {
                dataList: {
                    default: [],
                    type: [o]
                }
            },
            DecodeJson: function() {
                var e = JSON.parse(n.data);
                for (var t in e) {
                    var i = new o;
                    i.level = e[t][0], i.gem = e[t][1], this.dataList[t] = i
                }
            },
            getDataByKey: function(e) {
                return this.dataList[e]
            }
        });
        cc._RF.pop()
    }, {
        DB_levelupGem: "DB_levelupGem",
        LvUpGemData: "LvUpGemData"
    }],
    MapDataMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "4cf54GTOt5F3rbUgATuyqq9", "MapDataMgr");
        var n = e("DataType"),
            o = e("PlantMapMgr"),
            a = e("ZombieMapMgr"),
            s = e("LevelMapMgr"),
            c = e("AchieveMapMgr"),
            r = e("AirDropMapMgr"),
            l = e("InviteMapMgr"),
            h = e("TurnTableMapMgr"),
            g = e("ShopMapMgr"),
            d = e("SpinLvMapMgr"),
            p = e("LvUpGemMapMgr"),
            u = e("BuyButtonMapMgr"),
            f = e("DroneMapMgr"),
            m = e("TransMapMgr"),
            M = cc.Class({
                extends: cc.Component,
                properties: {
                    goodsMap: null,
                    decodeAll: 0
                },
                checkInitMapSuc: function() {
                    this.decodeAll
                },
                initMaps: function() {
                    cc.Mgr.Parse = !1, this.plantMap = new o, this.plantMap.DecodeJson(), this.zombieMap = new a, this.zombieMap.DecodeJson(), this.levelMap = new s, this.levelMap.DecodeJson(), this.achieveMap = new c, this.achieveMap.DecodeJson(), this.airdropMap = new r, this.airdropMap.DecodeJson(), this.inviteMap = new l, this.inviteMap.DecodeJson(), this.turnMap = new h, this.turnMap.DecodeJson(), this.shopMap = new g, this.shopMap.DecodeJson(), this.spinMap = new d, this.spinMap.DecodeJson(), this.lvupgemMap = new p, this.lvupgemMap.DecodeJson(), this.buttonMap = new u, this.buttonMap.DecodeJson(), this.droneMap = new f, this.droneMap.DecodeJson(), this.transMap = new m, this.transMap.DecodeJson(), cc.Mgr.Parse = !0
                },
                getDataByDataTypeAndKey: function(e, t) {
                    var i = null;
                    switch (e) {
                        case n.InviteData:
                            i = this.inviteMap.getDataByKey(t);
                            break;
                        case n.AchievementData:
                            i = this.achieveMap.getDataByKey(t);
                            break;
                        case n.AirDropData:
                            i = this.airdropMap.getDataByKey(t);
                            break;
                        case n.BuyButtonData:
                            i = this.buttonMap.getDataByKey(t);
                            break;
                        case n.DroneData:
                            i = this.droneMap.getDataByKey(t);
                            break;
                        case n.LevelGemData:
                            i = this.lvupgemMap.getDataByKey(t);
                            break;
                        case n.LevelData:
                            i = this.levelMap.getDataByKey(t);
                            break;
                        case n.PlantData:
                            i = this.plantMap.getDataByKey(t);
                            break;
                        case n.ZombieData:
                            i = this.zombieMap.getDataByKey(t);
                            break;
                        case n.TurnTableData:
                            i = this.turnMap.getDataByKey(t);
                            break;
                        case n.ShopData:
                            i = this.shopMap.getDataByKey(t);
                            break;
                        case n.SpinLevelData:
                            i = this.spinMap.getDataByKey(t);
                            break;
                        case n.Translation:
                            i = this.transMap.getDataByKey(t)
                    }
                    return i
                },
                getDataListByDataType: function(e) {
                    var t = null;
                    switch (e) {
                        case n.InviteData:
                            t = this.inviteMap.dataList;
                            break;
                        case n.AchievementData:
                            t = this.achieveMap.dataList;
                            break;
                        case n.AirDropData:
                            t = this.airdropMap.dataList;
                            break;
                        case n.BuyButtonData:
                            t = this.buttonMap.dataList;
                            break;
                        case n.DroneData:
                            t = this.droneMap.dataList;
                            break;
                        case n.LevelGemData:
                            t = this.lvupgemMap.dataList;
                            break;
                        case n.LevelData:
                            t = this.levelMap.dataList;
                            break;
                        case n.PlantData:
                            t = this.plantMap.dataList;
                            break;
                        case n.ZombieData:
                            t = this.zombieMap.dataList;
                            break;
                        case n.TurnTableData:
                            t = this.turnMap.dataList;
                            break;
                        case n.ShopData:
                            t = this.shopMap.dataList;
                            break;
                        case n.SpinLevelData:
                            t = this.spinMap.dataList;
                            break;
                        case n.Translation:
                            t = this.transMap.dataList
                    }
                    return t
                }
            });
        t.exports = M, cc._RF.pop()
    }, {
        AchieveMapMgr: "AchieveMapMgr",
        AirDropMapMgr: "AirDropMapMgr",
        BuyButtonMapMgr: "BuyButtonMapMgr",
        DataType: "DataType",
        DroneMapMgr: "DroneMapMgr",
        InviteMapMgr: "InviteMapMgr",
        LevelMapMgr: "LevelMapMgr",
        LvUpGemMapMgr: "LvUpGemMapMgr",
        PlantMapMgr: "PlantMapMgr",
        ShopMapMgr: "ShopMapMgr",
        SpinLvMapMgr: "SpinLvMapMgr",
        TransMapMgr: "TransMapMgr",
        TurnTableMapMgr: "TurnTableMapMgr",
        ZombieMapMgr: "ZombieMapMgr"
    }],
    MissionType: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "4e56cYefANMC4Hw3D/WIzMB", "MissionType");
        var n = cc.Enum({
            Login: 0,
            MergePlant: 1,
            DefenseSuc: 2,
            AdsShow: 3
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    MyButton: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "506f24afHNB0oa00xTTNG8Z", "MyButton");
        var n = e("MySprite"),
            o = cc.Class({
                extends: cc.Button,
                properties: {
                    bgSp: n,
                    icon: n,
                    desLbl: cc.Label
                },
                setDetails: function(e, t, i, n, o) {
                    this.bgSp.setSprite(e, t), this.icon.setSprite(i, n), this.desLbl.string = o
                },
                setButtonActive: function(e) {
                    this.bgSp.node.active = e, this.icon.node.active = e, this.desLbl.node.active = e, this.enabled = !!e
                },
                setBtnIconScale: function(e) {
                    this.icon.node.scale = e
                },
                setBtnLblFntSize: function(e) {
                    this.desLbl.fontSize = e
                }
            });
        t.exports = o, cc._RF.pop()
    }, {
        MySprite: "MySprite"
    }],
    MyEnum: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "997fa36ynpLP5/qt8XTSFdw", "MyEnum");
        var n = cc.Class({
            extends: cc.Component,
            statics: {
                PlantState: {
                    idle: 0,
                    cd: 1,
                    attating: 2
                },
                GridState: {
                    none: 0,
                    plant: 1,
                    flowerPot: 2,
                    lock: 3
                },
                DragonType: {
                    plant: 1,
                    zombie: 2,
                    jinggai: 3
                },
                BulletType: {
                    Straight: 1,
                    Curve: 2
                },
                GameLogicType: {
                    none: 0,
                    init: 1,
                    createPlant: 2,
                    createZoombie: 3,
                    showGameUI: 4
                },
                ColliderGp: {
                    Zombie: "zombie",
                    Bullet: "bullet"
                },
                NodeGroup: {
                    Zombie: "zombie",
                    Bullet: "bullet",
                    UI: "ui"
                },
                BulletSkillType: {
                    Null: 0,
                    Slow: 1,
                    DouKill: 2,
                    Vertigo: 3
                },
                FlowerPotType: {
                    Drop: 0,
                    Drone: 1,
                    Buy: 2,
                    Shop: 3
                },
                AudioType: {
                    bgm: "bgm",
                    click: "click",
                    coin: "coin",
                    dog: "dog",
                    fail: "fail",
                    flower_pot_land: "flower-pot-land",
                    flower_pot_tap: "flower-pot-tap",
                    gem: "gem",
                    hit: "hit",
                    merge: "merge",
                    pig: "pig",
                    plane: "plane",
                    plane_in: "plane-in",
                    plane_out: "plane-out",
                    skill_crit: "skill-crit",
                    skill_freeze: "skill-freeze",
                    skill_slow: "skill-slow",
                    spin: "spin",
                    success1: "success1",
                    success2: "success2",
                    zombie_lady: "zombie-lady",
                    zombie_man: "zombie-man",
                    lucky: "lucky"
                },
                ShopItemType: {
                    Lock: "U",
                    Gem: "G",
                    Ads: "AD",
                    Money: "M",
                    Null: ""
                },
                GuideType: {
                    none: -1,
                    guide1: 0,
                    guide2: 1,
                    guide3: 2,
                    guide4: 3,
                    guide5: 4,
                    guide6: 5,
                    guide7: 6
                }
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    MyLabel: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "ec9281+QdNK0akwHP66Qppo", "MyLabel");
        var n = cc.Class({
            extends: cc.Label,
            properties: {},
            setLabel: function(e, t) {
                this.fnt = e, this.string = t
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    MySprite: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "fb117FyR/NJxb6webpK3JtQ", "MySprite");
        e("AtlasType");
        var n = cc.Class({
            extends: cc.Sprite,
            properties: {},
            setSprite: function(e, t) {
                this.atlas = cc.Mgr.AtlasMgr.getSpriteAtlas(e), this.spriteFrame = this.atlas.getSpriteFrame(t)
            }
        });
        t.exports = n, cc._RF.pop()
    }, {
        AtlasType: "AtlasType"
    }],
    NetMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "49ab5cJP4pK3pGw9wwbvKKy", "NetMgr");
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        null == window.io && (window.io = e("socket-io"));
        var o = cc.Class({
            statics: {
                ip: "",
                sio: null,
                isPinging: !1,
                fnDisconnect: null,
                handlers: {},
                addHandler: function(e, t) {
                    if (this.handlers[e]) console.log("event:" + e + "' handler has been registered.");
                    else {
                        var i = function(i) {
                            console.log(e + "(" + (void 0 === i ? "undefined" : n(i)) + "):" + (i ? i.toString() : "null")), "disconnect" != e && "string" == typeof i && (i = JSON.parse(i)), t(i)
                        };
                        this.handlers[e] = i, this.sio && (console.log("register:function " + e), this.sio.on(e, i))
                    }
                },
                connect: function(e, t) {
                    var i = this;
                    for (var n in this.sio = window.io.connect(this.ip, {
                            reconnection: !1,
                            "force new connection": !0,
                            transports: ["websocket", "polling"]
                        }), this.sio.on("reconnect", function() {
                            console.log("reconnection")
                        }), this.sio.on("connect", function(t) {
                            i.sio.connected = !0, e(t)
                        }), this.sio.on("disconnect", function(e) {
                            console.log("disconnect"), i.sio.connected = !1, i.close()
                        }), this.sio.on("connect_failed", function() {
                            console.log("connect_failed")
                        }), this.handlers) {
                        var o = this.handlers[n];
                        "function" == typeof o && ("disconnect" == n ? this.fnDisconnect = o : (console.log("register:function " + n), this.sio.on(n, o)))
                    }
                    this.startHearbeat()
                },
                startHearbeat: function() {
                    this.sio.on("game_pong", function() {
                        console.log("game_pong"), e.lastRecieveTime = Date.now(), e.delayMS = e.lastRecieveTime - e.lastSendTime, console.log(e.delayMS)
                    }), this.lastRecieveTime = Date.now();
                    var e = this;
                    e.isPinging || (e.isPinging = !0, cc.game.on(cc.game.EVENT_HIDE, function() {
                        e.ping()
                    }), setInterval(function() {
                        e.sio && e.ping()
                    }.bind(this), 5e3), setInterval(function() {
                        e.sio && Date.now() - e.lastRecieveTime > 1e4 && e.close()
                    }.bind(this), 500))
                },
                send: function(e, t) {
                    this.sio.connected && (null != t && "object" == (void 0 === t ? "undefined" : n(t)) && (t = JSON.stringify(t)), this.sio.emit(e, t))
                },
                ping: function() {
                    this.sio && (this.lastSendTime = Date.now(), this.send("game_ping"))
                },
                close: function() {
                    this.delayMS = null, this.sio && this.sio.connected && (this.sio.connected = !1, this.sio.disconnect()), this.sio = null, this.fnDisconnect && (this.fnDisconnect(), this.fnDisconnect = null)
                }
            }
        });
        t.exports = o, cc._RF.pop()
    }, {
        "socket-io": "socket-io"
    }],
    NoticeText: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "6e728mTT3BL/ZbAzEukPxcK", "NoticeText"), cc.director.NoticeText = {
            Trans_1: "Cậu đến muộn quá? Mình đợi ở đây cả thanh xuân luôn."
        }, cc._RF.pop()
    }, {}],
    ParticleMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "f06e8LLZ2pA1oa9LK9HtksI", "ParticleMgr");
        var n = cc.Class({
            extends: cc.Component,
            statics: {
                handles_: [],
                create: function(e) {
                    this.handles_.indexOf(e) > -1 || this.handles_.push(e)
                },
                playParticle: function(e) {
                    var t = this.handles_.indexOf(e);
                    t > -1 && (this.handles_[t].active = !0, this.handles_[t].resetSystem())
                },
                stopParticle: function() {
                    var e = this.handles_.indexOf(particle);
                    e > -1 && (this.handles_[e].active = !1, this.handles_[e].stopSystem())
                },
                deleteParticle: function(e) {
                    var t = this.handles_.indexOf(e);
                    t > -1 && this.handles_.splice(t, 1)
                }
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    PlantData: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "ad2c8o+O7RKoKfbH/FLJ4Up", "PlantData");
        var n = cc.Class({
            name: "PlantData",
            properties: {
                level: 1,
                cd: 1,
                power: 0,
                skill: "",
                offline: 0,
                price: 0,
                gem: 0,
                prefab: "",
                shootPos: {
                    default: [],
                    type: [cc.v2]
                },
                steakColor: "",
                head: "",
                pName: "",
                sNeedMask: !1,
                isNeedTrail: !1,
                bulletHeight: 0,
                bulletNearLeftDis: 0
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    PlantMapMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "27a04/1jZVBJqiEkTfllLyt", "PlantMapMgr");
        var n = e("DB_plant"),
            o = e("PlantData"),
            a = cc.Class({
                extends: cc.Component,
                properties: {
                    dataList: {
                        default: [],
                        type: [o]
                    }
                },
                DecodeJson: function() {
                    var e = JSON.parse(n.data);
                    for (var t in e) {
                        var i = new o;
                        i.level = e[t][0], i.cd = e[t][1], i.power = e[t][2], i.skill = e[t][3], i.offline = e[t][4], i.price = e[t][5], i.gem = e[t][6], i.prefab = e[t][7];
                        var a = e[t][8].split(",");
                        2 == t && (console.log("posL = " + a), console.log("posL len = " + a.length)), 2 == a.length ? i.shootPos[0] = cc.v2(parseInt(a[0]), parseInt(a[1])) : 4 == a.length ? (i.shootPos[0] = cc.v2(parseInt(a[0]), parseInt(a[1])), i.shootPos[1] = cc.v2(parseInt(a[2]), parseInt(a[3]))) : 6 == a.length ? (i.shootPos[0] = cc.v2(parseInt(a[0]), parseInt(a[1])), i.shootPos[1] = cc.v2(parseInt(a[2]), parseInt(a[3])), i.shootPos[2] = cc.v2(parseInt(a[4]), parseInt(a[5]))) : 8 == a.length ? (i.shootPos[0] = cc.v2(parseInt(a[0]), parseInt(a[1])), i.shootPos[1] = cc.v2(parseInt(a[2]), parseInt(a[3])), i.shootPos[2] = cc.v2(parseInt(a[4]), parseInt(a[5])), i.shootPos[3] = cc.v2(parseInt(a[6]), parseInt(a[7]))) : 10 == a.length && (i.shootPos[0] = cc.v2(parseInt(a[0]), parseInt(a[1])), i.shootPos[1] = cc.v2(parseInt(a[2]), parseInt(a[3])), i.shootPos[2] = cc.v2(parseInt(a[4]), parseInt(a[5])), i.shootPos[3] = cc.v2(parseInt(a[6]), parseInt(a[7])), i.shootPos[3] = cc.v2(parseInt(a[8]), parseInt(a[9]))), i.steakColor = e[t][9], i.head = e[t][10], i.pName = e[t][11], i.isNeedMask = e[t][12], i.isNeedTrail = e[t][13], i.bulletHeight = e[t][14], i.bulletNearLeftDis = e[t][15], i.bulletType = e[t][16], this.dataList[t] = i
                    }
                },
                getDataByKey: function(e) {
                    return this.dataList[e]
                }
            });
        t.exports = a, cc._RF.pop()
    }, {
        DB_plant: "DB_plant",
        PlantData: "PlantData"
    }],
    PlantMergeGuide: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "cdff6UHrAFIUZmUjZQtWBGJ", "PlantMergeGuide"), cc.Class({
            extends: cc.Component,
            properties: {
                circle: cc.Sprite,
                finger: cc.Sprite
            },
            startMove: function(e, t) {
                this.move(e, t)
            },
            stopMove: function() {
                null != this.fingerTween && this.fingerTween.stop(), null != this.circleTween && this.circleTween.stop()
            },
            move: function(e, t) {
                var i = this;
                this.finger.node.position = e, this.finger.node.opacity = 255, this.circle.node.position = e, this.circle.node.opacity = 255, this.circle.node.scale = 1, this.fingerTween = cc.tween(this.finger.node).to(1, {
                    position: t
                }).to(.3, {
                    opacity: 0
                }).call(function() {
                    i.move(e, t)
                }), this.fingerTween.start(), this.circleTween = cc.tween(this.circle.node).to(.5, {
                    scale: 2,
                    opacity: 0
                }), this.circleTween.start()
            },
            start: function() {}
        }), cc._RF.pop()
    }, {}],
    PlatformController: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "12160G6IAlDbZD1iSVVgN8Q", "PlatformController");
        var n = e("Config"),
            o = cc.Class({
                statics: {
                    IsScreenRecord: !1,
                    platform: n.platform,
                    videoPath: "",
                    Init: function() {
                        this.platform = n.platform, console.log("\u5f53\u524d\u5e73\u53f0  == " + this.platform), this.CreateGameClub(), this.videoPath = ""
                    },
                    IsLoginSync: function() {
                        return "baidu" != this.platform || !!swan.isLoginSync().isLogin && (console.log("\u5df2\u7ecf\u6709\u767b\u9646\u4e86"), !0)
                    },
                    CheckTTSession: function(e) {
                        tt.checkSession({
                            success: function(t) {
                                e(!0), console.log("session\u672a\u8fc7\u671f")
                            },
                            fail: function(t) {
                                console.log("session\u5df2\u8fc7\u671f\uff0c\u9700\u8981\u91cd\u65b0\u767b\u5f55"), e(!1)
                            }
                        })
                    },
                    Login: function() {
                        var e = this;
                        "wx" == this.platform ? wx.login({
                            success: function() {},
                            fail: function() {
                                wx.showModal({
                                    title: "\u767b\u5f55\u5931\u8d25",
                                    content: "\u662f\u5426\u91cd\u65b0\u767b\u5f55\uff1f",
                                    cancelText: "\u9000\u51fa\u6e38\u620f",
                                    success: function(t) {
                                        t.confirm ? (console.log("\u70b9\u51fb\u4e86\u786e\u5b9a"), e.Login()) : t.cancel && console.log("\u70b9\u51fb\u4e86\u53d6\u6d88")
                                    }
                                })
                            }
                        }) : "baidu" == this.platform ? swan.login({
                            success: function() {
                                e.setUserCloudStorage(cc.Mgr.UserDataMgr.HistoryHighAssets)
                            },
                            fail: function() {
                                swan.showModal({
                                    title: "\u767b\u5f55\u5931\u8d25",
                                    content: "\u662f\u5426\u91cd\u65b0\u767b\u5f55\uff1f",
                                    cancelText: "\u9000\u51fa\u6e38\u620f",
                                    success: function(t) {
                                        t.confirm ? (console.log("\u70b9\u51fb\u4e86\u786e\u5b9a"), e.Login()) : t.cancel && (console.log("\u70b9\u51fb\u4e86\u53d6\u6d88"), swan.exit())
                                    }
                                })
                            }
                        }) : "tt" == this.platform && tt.login({
                            success: function() {
                                e.setUserCloudStorage(cc.Mgr.UserDataMgr.HistoryHighAssets)
                            },
                            fail: function() {
                                tt.showModal({
                                    title: "\u767b\u5f55\u5931\u8d25",
                                    content: "\u662f\u5426\u91cd\u65b0\u767b\u5f55\uff1f",
                                    cancelText: "\u9000\u51fa\u6e38\u620f",
                                    success: function(t) {
                                        t.confirm ? (console.log("\u70b9\u51fb\u4e86\u786e\u5b9a"), e.Login()) : t.cancel && (console.log("\u70b9\u51fb\u4e86\u53d6\u6d88"), tt.exitMiniProgram({}))
                                    }
                                })
                            }
                        })
                    },
                    CreateGameClub: function() {
                        if ("wx" == this.platform) {
                            var e = cc.view.getVisibleSize(),
                                t = 48 / e.width,
                                i = 200 / e.height,
                                n = wx.getSystemInfoSync();
                            this.leftPos = n.windowWidth * t, this.topPos = n.windowHeight * i, console.log(this.topPos + "  ================\u521b\u5efa\u6e38\u620f\u5708\u6309\u94ae===============" + this.leftPos);
                            this.gameClubBtn = wx.createGameClubButton({
                                icon: "green",
                                text: "\u6e38\u620f\u5708",
                                style: {
                                    left: this.leftPos - 20,
                                    top: this.topPos - 20,
                                    width: 40,
                                    height: 40
                                }
                            })
                        }
                    },
                    ShowClubButton: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if ("wx" == this.platform && null != this.gameClubBtn) 1 == e ? this.gameClubBtn.show() : this.gameClubBtn.hide();
                        else if ("qq" == this.platform) return
                    },
                    CreateMoreGameBtn: function() {
                        if ("tt" == this.platform) {
                            var e = 80;
                            this.isAllScreen() && (e = 100), this.ttMoreGameBtn = tt.createMoreGamesButton({
                                type: "image",
                                image: "images/moregamebtn.png",
                                style: {
                                    left: 40,
                                    top: e,
                                    width: 50,
                                    height: 38
                                },
                                appLaunchOptions: [{
                                    appId: "tt309a4627afb0ac9a"
                                }, {
                                    appId: "ttfbb58d08649f6aa6"
                                }, {
                                    appId: "ttdce3aa5e43c942e1"
                                }, {
                                    appId: "tt5ced2a50c3c7bbba"
                                }, {
                                    appId: "tt18ba6e078790f9a1"
                                }, {
                                    appId: "tt68a31e1ef78989bb"
                                }],
                                onNavigateToMiniGame: function(e) {
                                    console.log("\u8df3\u8f6c\u5176\u4ed6\u5c0f\u6e38\u620f", e)
                                }
                            }), this.ttMoreGameBtn.onTap(function() {
                                console.log("\u70b9\u51fb\u66f4\u591a\u6e38\u620f")
                            })
                        }
                    },
                    ShowMoreGameBtn: function(e) {
                        "tt" == this.platform && null != this.ttMoreGameBtn && (e ? this.ttMoreGameBtn.show() : this.ttMoreGameBtn.hide())
                    },
                    ShareTopNav: function() {
                        var e = Math.floor(6 * Math.random()),
                            t = cc.Mgr.ShareInfos.getShareInfos(e);
                        "wx" == this.platform ? (wx.showShareMenu({
                            withShareTicket: !0
                        }), wx.onShareAppMessage(function() {
                            return {
                                title: "\u5404\u5355\u4f4d\u6ce8\u610f,\u4e00\u5927\u6ce2\u50f5\u5c38\u6b63\u5728\u8d76\u6765",
                                imageUrl: "http://39.100.233.215/shareImg/zbshare.jpg"
                            }
                        })) : "qq" == this.platform ? (qq.showShareMenu({
                            showShareItems: ["qq", "qzone", "wechatFriends", "wechatMoment"]
                        }), qq.onShareAppMessage(function() {
                            return {
                                title: "\u5404\u5355\u4f4d\u6ce8\u610f,\u4e00\u5927\u6ce2\u50f5\u5c38\u6b63\u5728\u8d76\u6765",
                                imageUrl: "http://39.100.233.215/shareImg/zbshare.jpg"
                            }
                        })) : "tt" == this.platform ? (tt.showShareMenu(!1), tt.onShareAppMessage(function() {
                            return {
                                title: t.text,
                                imageUrl: t.url
                            }
                        })) : "baidu" == this.platform ? (swan.showShareMenu(!1), swan.onShareAppMessage(function() {
                            return {
                                title: t.text,
                                imageUrl: t.url
                            }
                        })) : this.platform
                    },
                    ShareToFriendTxt: function(e) {
                        "wx" == this.platform ? (console.log("\u70b9\u51fb\u4e86\u5206\u4eab\u554a"), wx.shareAppMessage({
                            title: e
                        })) : "qq" == this.platform ? (console.log("\u70b9\u51fb\u4e86\u5206\u4eab\u554a"), wx.shareAppMessage({
                            title: e
                        })) : "tt" == this.platform ? tt.shareAppMessage({
                            title: e
                        }) : "baidu" == this.platform && (console.log("\u70b9\u51fb\u4e86\u5206\u4eab\u554a"), swan.shareAppMessage({
                            title: e
                        }))
                    },
                    ShareToFriend: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            i = cc.Mgr.ShareInfos.getShareInfos(e);
                        "wx" == this.platform ? (console.log("\u70b9\u51fb\u4e86\u5206\u4eab\u554a"), wx.shareAppMessage({
                            title: i.text,
                            imageUrl: i.url
                        })) : "qq" == this.platform ? (console.log("\u70b9\u51fb\u4e86\u5206\u4eab\u554a"), qq.shareAppMessage({
                            title: i.text,
                            imageUrl: i.url
                        })) : "tt" == this.platform ? tt.shareAppMessage({
                            title: i.text,
                            imageUrl: i.url,
                            success: function() {
                                null != t && "function" == typeof t && t(), console.log("\u5206\u4eab\u89c6\u9891\u6210\u529f")
                            },
                            fail: function(e) {
                                console.log("\u5206\u4eab\u89c6\u9891\u5931\u8d25")
                            }
                        }) : "baidu" == this.platform ? (console.log("\u70b9\u51fb\u4e86\u5206\u4eab\u554a"), swan.shareAppMessage({
                            title: i.text,
                            imageUrl: i.url
                        })) : "uc" == this.platform ? (console.log("\u70b9\u51fb\u4e86\u5206\u4eab\u554a"), uc.shareAppMessage({
                            title: i.text,
                            imageUrl: i.url,
                            success: function(e) {
                                null != t && "function" == typeof t && t(), console.log("\u5206\u4eab\u89c6\u9891\u6210\u529f")
                            },
                            fail: function(e) {
                                console.log("\u5206\u4eab\u89c6\u9891\u5931\u8d25")
                            }
                        })) : this.platform
                    },
                    showToast: function(e) {
                        cc.log(e), "wx" == this.platform ? wx.showToast({
                            title: e,
                            icon: "none",
                            duration: 1500
                        }) : "qq" == this.platform ? qq.showToast({
                            title: e,
                            icon: "none",
                            duration: 1500
                        }) : "tt" == this.platform ? tt.showToast({
                            title: e,
                            icon: "none",
                            duration: 2e3
                        }) : "baidu" == this.platform && swan.showToast({
                            title: e,
                            icon: "none",
                            duration: 2e3
                        })
                    },
                    setUserCloudStorage: function(e) {
                        if (this.IsLoginSync())
                            if (cc.log("setUserCloudStorage socre = " + e), "wx" == this.platform)(t = {
                                wxgame: {}
                            }).wxgame.score = e, t.wxgame.update_time = (new Date).getTime(), console.log(JSON.stringify(t)), (i = new Array).push({
                                key: "\bxmbScore",
                                value: JSON.stringify(t)
                            }), wx.setUserCloudStorage({
                                KVDataList: i,
                                success: function(e) {
                                    console.log("success:" + JSON.stringify(e))
                                },
                                fail: function(e) {
                                    console.log("fail : " + e)
                                }
                            });
                            else if ("qq" == this.platform) {
                            (t = {
                                wxgame: {}
                            }).wxgame.score = e, t.wxgame.update_time = (new Date).getTime(), console.log(JSON.stringify(t)), (i = new Array).push({
                                key: "\bxmbScore",
                                value: JSON.stringify(t)
                            }), qq.setUserCloudStorage({
                                KVDataList: i,
                                success: function(e) {
                                    console.log("success:" + JSON.stringify(e))
                                },
                                fail: function(e) {
                                    console.log("fail : " + e)
                                }
                            })
                        } else if ("baidu" == this.platform) {
                            (t = {
                                wxgame: {}
                            }).wxgame.score = e, t.wxgame.update_time = (new Date).getTime(), console.log(JSON.stringify(t)), (i = new Array).push({
                                key: "\bxmbScore",
                                value: JSON.stringify(t)
                            }), swan.setUserCloudStorage({
                                KVDataList: i,
                                success: function(e) {
                                    return console.log("success " + e)
                                },
                                fail: function(e) {
                                    return console.log("fail " + e)
                                },
                                complete: function(e) {
                                    return console.log("complete " + e)
                                }
                            })
                        } else if ("tt" == this.platform) {
                            var t, i;
                            (t = {
                                wxgame: {}
                            }).wxgame.score = e, t.wxgame.update_time = (new Date).getTime(), console.log(JSON.stringify(t)), (i = new Array).push({
                                key: "\bxmbScore",
                                value: JSON.stringify(t)
                            }), tt.setUserCloudStorage({
                                KVDataList: i,
                                success: function(e) {
                                    return console.log("success " + e)
                                },
                                fail: function(e) {
                                    return console.log("fail " + e)
                                },
                                complete: function(e) {
                                    return console.log("complete " + e)
                                }
                            })
                        }
                    },
                    IsSupportRank: function() {
                        return "wx" == this.platform || "baidu" == this.platform || "qq" == this.platform
                    },
                    showSubContentView: function() {
                        if ("wx" == this.platform || "baidu" == this.platform || "qq" == this.platform) {
                            var e = {};
                            e.platform = this.platform, e.flag = !0, cc.director.GlobalEvent.emit(cc.Mgr.Event.ShowRank, e)
                        }
                    },
                    hideSubContentView: function() {
                        if ("wx" == this.platform || "baidu" == this.platform || "qq" == this.platform) {
                            var e = {
                                flag: !1
                            };
                            e.platform = this.platform, cc.director.GlobalEvent.emit(cc.Mgr.Event.ShowRank, e)
                        }
                    },
                    SendMessageToSubView: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            i = {};
                        i.code = e, i.curScore = t, "wx" == this.platform ? wx.getOpenDataContext().postMessage({
                            message: i
                        }) : "qq" == this.platform ? qq.getOpenDataContext().postMessage({
                            message: i
                        }) : "baidu" == this.platform ? swan.getOpenDataContext().postMessage({
                            message: i
                        }) : "tt" == this.platform && tt.getOpenDataContext().postMessage({
                            message: i
                        })
                    },
                    IsSupportRecordScreen: function() {
                        return "tt" == this.platform || "baidu" == this.platform && !!this.CompareSdkVesrion(swan.getSystemInfoSync().SDKVersion, "1.4.1")
                    },
                    QuakeScreen: function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        "pc" != this.platform && (1 == e ? "tt" == this.platform ? tt.vibrateLong({
                            success: function(e) {
                                console.log("" + e)
                            },
                            fail: function(e) {
                                console.log("vibrateLong\u8c03\u7528\u5931\u8d25")
                            }
                        }) : "baidu" == this.platform ? swan.vibrateLong({
                            success: function(e) {
                                console.log("" + e)
                            },
                            fail: function(e) {
                                console.log("vibrateLong\u8c03\u7528\u5931\u8d25")
                            }
                        }) : "wx" == this.platform ? wx.vibrateLong({
                            success: function(e) {
                                console.log("" + e)
                            },
                            fail: function(e) {
                                console.log("vibrateLong\u8c03\u7528\u5931\u8d25")
                            }
                        }) : "qg_oppo" != this.platform && "qg_vivo" != this.platform || qg.vibrateLong({
                            success: function(e) {
                                console.log("" + e)
                            },
                            fail: function(e) {
                                console.log("vibrateLong\u8c03\u7528\u5931\u8d25")
                            }
                        }) : "tt" == this.platform ? tt.vibrateShort({
                            success: function(e) {
                                console.log("" + e)
                            },
                            fail: function(e) {
                                console.log("vibrateShort\u8c03\u7528\u5931\u8d25")
                            }
                        }) : "baidu" == this.platform ? swan.vibrateShort({
                            success: function(e) {
                                console.log("" + e)
                            },
                            fail: function(e) {
                                console.log("vibrateShort\u8c03\u7528\u5931\u8d25")
                            }
                        }) : "wx" == this.platform ? wx.vibrateShort({
                            success: function(e) {
                                console.log("" + e)
                            },
                            fail: function(e) {
                                console.log("vibrateLong\u8c03\u7528\u5931\u8d25")
                            }
                        }) : "qg_oppo" != this.platform && "qg_vivo" != this.platform || qg.vibrateShort({
                            success: function(e) {
                                console.log("" + e)
                            },
                            fail: function(e) {
                                console.log("vibrateLong\u8c03\u7528\u5931\u8d25")
                            }
                        }))
                    },
                    CompareSdkVesrion: function(e, t) {
                        for (var i = e.split("."), n = t.split("."), o = 0; o < i.length; o++) {
                            if (parseInt(i[o]) < parseInt(n[o])) return 0;
                            if (parseInt(i[o]) > parseInt(n[o])) return 1
                        }
                        return 1
                    },
                    StartRecordScreen: function() {
                        var e = this;
                        this.videoPath = "", this.IsScreenRecord = !0, this.showToast("\u5f55\u5236\u5f00\u59cb"), "tt" == this.platform ? (console.log("\u5f55\u5236\u5f00\u59cb\u4e86: "), null == this.recorderManager && (this.recorderManager = tt.getGameRecorderManager(), this.recorderManager.onStart(function(e) {
                            cc.Mgr.UIMgr.InGameUI.setScreenSp(), cc.Mgr.game.screenStartTime = cc.Mgr.Utils.GetSysTime()
                        }), this.recorderManager.onStop(function(t) {
                            if (console.log("\u5f55\u5236\u7ed3\u675f\u4e86: " + t.videoPath), e.IsScreenRecord = !1, cc.Mgr.Utils.GetSysTime() - cc.Mgr.game.screenStartTime <= 3) return cc.Mgr.game.screenStartTime = 0, e.showToast("\u5f55\u5236\u65f6\u95f4\u5c11\u4e8e\u4e09\u79d2,\u672a\u80fd\u6210\u529f\u4fdd\u5b58\u89c6\u9891"), e.videoPath = "", void cc.Mgr.UIMgr.InGameUI.setScreenSp();
                            var i = "\u5f55\u5236\u7ed3\u675f,\u5206\u4eab\u7cbe\u5f69\u53ef\u83b7\u5f97" + (cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 5 ? 10 : cc.Mgr.game.level < cc.Mgr.Config.gameCheckLv + 13 ? 12 : 15) + "\u9897\u94bb\u77f3\u4e0e4\u4e2a\u82b1\u76c6";
                            e.showToast(i), e.videoPath = t.videoPath, cc.Mgr.UIMgr.InGameUI.setScreenSp()
                        }), this.recorderManager.onPause(function() {
                            console.log("\u5f55\u5236\u6682\u505c\u4e86")
                        }), this.recorderManager.onResume(function() {
                            console.log("\u5f55\u5236\u6062\u590d\u4e86")
                        }), this.recorderManager.onError(function(t) {
                            console.log("\u5f55\u5236\u51fa\u9519\u4e86:" + t), e.IsScreenRecord = !1
                        })), this.recorderManager.start({
                            duration: 30
                        })) : "baidu" == this.platform && (null == this.recorderManager && (this.recorderManager = swan.getVideoRecorderManager(), this.recorderManager.onStart(function(e) {
                            cc.Mgr.UIMgr.InGameUI.setScreenSp(), cc.Mgr.game.screenStartTime = cc.Mgr.Utils.GetSysTime()
                        }), this.recorderManager.onStop(function(t) {
                            if (console.log("\u5f55\u5236\u7ed3\u675f\u4e86: " + t.videoPath), e.IsScreenRecord = !1, cc.Mgr.Utils.GetSysTime() - cc.Mgr.game.screenStartTime <= 3) return cc.Mgr.game.screenStartTime = 0, e.showToast("\u5f55\u5236\u65f6\u95f4\u5c11\u4e8e\u4e09\u79d2,\u672a\u80fd\u6210\u529f\u4fdd\u5b58\u89c6\u9891"), e.videoPath = "", void cc.Mgr.UIMgr.InGameUI.setScreenSp();
                            e.showToast("\u5f55\u5236\u7ed3\u675f"), e.videoPath = t.videoPath, cc.Mgr.UIMgr.InGameUI.setScreenSp()
                        }), this.recorderManager.onPause(function() {
                            console.log("\u5f55\u5236\u6682\u505c\u4e86")
                        }), this.recorderManager.onResume(function() {
                            console.log("\u5f55\u5236\u6062\u590d\u4e86")
                        }), this.recorderManager.onError(function(t) {
                            console.log("\u5f55\u5236\u51fa\u9519\u4e86:" + t), e.IsScreenRecord = !1
                        })), this.recorderManager.start({
                            duration: 30,
                            microphoneEnabled: !0
                        }))
                    },
                    StopRecordScreen: function() {
                        if (this.IsScreenRecord = !1, "tt" == this.platform) {
                            if (null == this.recorderManager) return;
                            console.log("\u505c\u6b62\u5f55\u5236"), this.recorderManager.stop()
                        } else if ("baidu" == this.platform) {
                            if (null == this.recorderManager) return;
                            console.log("\u505c\u6b62\u5f55\u5236"), this.recorderManager.stop()
                        }
                    },
                    ShareRecordScreen: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = this;
                        if ("tt" == this.platform) {
                            if (null == this.recorderManager || "" == this.videoPath) return;
                            console.log("\u5206\u4eab\u5f55\u5236\u7684\u89c6\u9891"), tt.shareVideo({
                                videoPath: "" + this.videoPath,
                                success: function() {
                                    t.videoPath = "", console.log("\u5206\u4eab\u6210\u529f\uff01"), null != e && e()
                                },
                                fail: function(e) {
                                    console.log("\u5206\u4eab\u5931\u8d25\uff01" + e)
                                }
                            })
                        } else if ("baidu" == this.platform) {
                            if (null == this.recorderManager || null == this.videoPath) return;
                            console.log("\u5206\u4eab\u5f55\u5236\u7684\u89c6\u9891"), swan.shareVideo({
                                videoPath: "" + this.videoPath,
                                success: function() {
                                    t.videoPath = "", console.log("\u5206\u4eab\u6210\u529f\uff01"), null != e && e(), console.log("\u5206\u4eab\u6210\u529f\uff01")
                                },
                                fail: function(e) {
                                    console.log("\u5206\u4eab\u5931\u8d25\uff01" + e)
                                }
                            })
                        }
                    },
                    JumpToOtherApp: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        "wx" == this.platform ? wx.navigateToMiniProgram({
                            appId: e,
                            envVersion: "release",
                            success: function(e) {
                                console.log("\u6210\u529f\u6253\u5f00\u4e86\u5176\u4ed6\u5c0f\u7a0b\u5e8f")
                            }
                        }) : "baidu" == this.platform ? swan.navigateToMiniProgram({
                            appKey: e,
                            extraData: {},
                            success: function(e) {
                                console.log("\u767e\u5ea6\u8df3\u8f6c success", e)
                            },
                            fail: function(e) {
                                console.log("\u767e\u5ea6\u8df3\u8f6c fail", e)
                            }
                        }) : "tt" == this.platform ? tt.navigateToMiniProgram({
                            appId: e,
                            extraData: {},
                            success: function(e) {
                                console.log(" success", e)
                            },
                            fail: function(e) {
                                console.log(" fail", e)
                            }
                        }) : "qg_oppo" == this.platform && qg.navigateToMiniGame({
                            pkgName: t,
                            success: function() {},
                            fail: function(e) {
                                console.log(JSON.stringify(e))
                            }
                        })
                    },
                    AldEventStatis: function(e, t) {
                        "wx" == this.platform ? wx.aldSendEvent(e, t) : this.platform
                    },
                    AldOnShareStatis: function() {
                        "wx" == this.platform && wx.aldOnShareAppMessage(function() {
                            return {
                                imageUrl: "",
                                title: "",
                                query: ""
                            }
                        })
                    },
                    AldShareStatis: function() {
                        "wx" == this.platform && wx.aldShareAppMessage({
                            imageUrl: "",
                            title: "",
                            ald_desc: "",
                            query: ""
                        })
                    },
                    isAllScreen: function() {
                        return !(cc.winSize.height / cc.winSize.width < 1.8)
                    },
                    reportDataToPlatform: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        "qtt" == this.platform && qttGame.reportData({
                            type: e,
                            open_id: cc.Mgr.game.openId,
                            app_id: "a3SSWjA9nzUd",
                            game_name: "\u82b1\u56ed\u4fdd\u536b\u6218",
                            extend_info: t
                        })
                    }
                }
            });
        t.exports = o, cc._RF.pop()
    }, {
        Config: "Config"
    }],
    RewardType: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "05c54SoN0FKTpYCLXB/k5Rk", "RewardType");
        var n = cc.Enum({
            Gem: 1,
            Money: 2
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    ShareInfos: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "6a8b6G2stdP2or3S5D9kQSx", "ShareInfos");
        var n = cc.Class({
            extends: cc.Component,
            statics: {
                init: function() {
                    this.Infos = [{
                        text: "Chú ý! Quái vật đang kéo đến",
                        url: "http://39.100.233.215/shareImg/zbshare.jpg"
                    }, {
                        text: "Chúng ta là vệ sĩ vườn — cùng bảo vệ nào",
                        url: "http://39.100.233.215/shareImg/zbshare.jpg"
                    }, {
                        text: "Chú ý! Quái vật đang kéo đến",
                        url: "http://39.100.233.215/shareImg/zbshare.jpg"
                    }, {
                        text: "Chúng ta là vệ sĩ vườn — cùng bảo vệ nào",
                        url: "http://39.100.233.215/shareImg/zbshare.jpg"
                    }, {
                        text: "Chú ý! Quái vật đang kéo đến",
                        url: "http://39.100.233.215/shareImg/zbshare.jpg"
                    }, {
                        text: "Chúng ta là vệ sĩ vườn — cùng bảo vệ nào",
                        url: "http://39.100.233.215/shareImg/zbshare.jpg"
                    }]
                },
                getShareInfos: function(e) {
                    return this.Infos[e]
                }
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    ShopData: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "9b01bjGPhpLoKlNNRFgM+s1", "ShopData");
        var n = cc.Class({
            name: "ShopData",
            properties: {
                level: 1,
                MAX: "",
                MAX_1: "",
                MAX_2: "",
                MAX_3: "",
                MAX_4: "",
                MAX_5: "",
                MAX_6: "",
                MAX_7: "",
                MAX_8: ""
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    ShopMapMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "4bce0Hptr1HUJByRULsz4t9", "ShopMapMgr");
        var n = e("ShopData"),
            o = e("DB_shopSort"),
            a = cc.Class({
                extends: cc.Component,
                properties: {
                    dataList: {
                        default: [],
                        type: [n]
                    }
                },
                DecodeJson: function() {
                    var e = JSON.parse(o.data);
                    for (var t in e) {
                        var i = new n;
                        i.level = e[t][0], i.MAX = e[t][1], i.MAX_1 = e[t][2], i.MAX_2 = e[t][3], i.MAX_3 = e[t][4], i.MAX_4 = e[t][5], i.MAX_5 = e[t][6], i.MAX_6 = e[t][7], i.MAX_7 = e[t][8], i.MAX_8 = e[t][9], this.dataList[t] = i
                    }
                },
                getDataByKey: function(e) {
                    return this.dataList[e]
                }
            });
        t.exports = a, cc._RF.pop()
    }, {
        DB_shopSort: "DB_shopSort",
        ShopData: "ShopData"
    }],
    SpinLvData: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "c11daDNO4hF3ZGjnp4xE3Ne", "SpinLvData");
        cc.Class({
            name: "SpinLvData",
            properties: {
                Level: 1,
                SpinS: 1,
                SpinA: 2,
                SpinB: 3,
                SpinC: 4
            }
        });
        cc._RF.pop()
    }, {}],
    SpinLvMapMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "5afe8Z/96hIVKMMxRn/Ab3l", "SpinLvMapMgr");
        var n = e("DB_spinLevel"),
            o = e("SpinLvData"),
            a = cc.Class({
                extends: cc.Component,
                properties: {
                    dataList: {
                        default: [],
                        type: [o]
                    }
                },
                DecodeJson: function() {
                    var e = JSON.parse(n.data);
                    for (var t in e) {
                        var i = new o;
                        i.Level = e[t][0], i.SpinS = e[t][1], i.SpinA = e[t][2], i.SpinB = e[t][3], i.SpinC = e[t][4], this.dataList[t] = i
                    }
                },
                getDataByKey: function(e) {
                    return this.dataList[e]
                }
            });
        t.exports = a, cc._RF.pop()
    }, {
        DB_spinLevel: "DB_spinLevel",
        SpinLvData: "SpinLvData"
    }],
    TDEventName: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "a8153Ub3g9B4pnzA0ceQYSi", "TDEventName");
        var n = cc.Class({
            extends: cc.Component,
            statics: {
                Login: "Login",
                WaveIn: "WaveIn_",
                WaveOut: "WaveOut_",
                CostGem: "CostGem_",
                TutorialStep: "TutorialStep_",
                GetGem: "GetGem_"
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    TransData: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "598baAWuoNIupoBDWIiiRz6", "TransData");
        var n = cc.Class({
            name: "TransData",
            properties: {
                en_US: "",
                zh_CN: "",
                zh_TW: "",
                zh_HK: "",
                de_DE: ""
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    TransMapMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "529c73Po5RAs4wgPM965snk", "TransMapMgr");
        var n = e("TransData"),
            o = e("DB_i18n"),
            a = cc.Class({
                extends: cc.Component,
                properties: {
                    dataList: {
                        default: [],
                        type: [n]
                    }
                },
                DecodeJson: function() {
                    var e = o.data;
                    for (var t in e) {
                        var i = new n;
                        i.en_US = e[t][1], i.zh_CN = e[t][2], i.zh_TW = e[t][3], i.zh_HK = e[t][4], i.de_DE = e[t][5], this.dataList[t] = i
                    }
                },
                getDataByKey: function(e) {
                    return this.dataList[e]
                }
            });
        t.exports = a, cc._RF.pop()
    }, {
        DB_i18n: "DB_i18n",
        TransData: "TransData"
    }],
    TurnTableData: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "297c50BAC1IA7ZaQchA8S1h", "TurnTableData");
        var n = cc.Class({
            name: "TurnTableData",
            properties: {
                id: 1,
                type: 0,
                rarity: 0,
                weight: 0,
                rewards: 0
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    TurnTableGetType: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "389343LkklJs7LTf6CZOC26", "TurnTableGetType");
        var n = cc.Enum({
            coin: "coin",
            plant: "plant",
            gem: "gem",
            speedup: "speedup",
            drone: "drone"
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    TurnTableMapMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "3e58ductqhBvLFQAsyGGttW", "TurnTableMapMgr");
        var n = e("DB_turntable"),
            o = e("TurnTableData"),
            a = cc.Class({
                extends: cc.Component,
                properties: {
                    dataList: {
                        default: [],
                        type: [o]
                    }
                },
                DecodeJson: function() {
                    var e = JSON.parse(n.data);
                    for (var t in e) {
                        var i = new o;
                        i.id = e[t][0], i.type = e[t][1], i.rarity = e[t][2], i.weight = e[t][3], i.rewards = e[t][4], this.dataList[t] = i
                    }
                },
                getDataByKey: function(e) {
                    return this.dataList[e]
                }
            });
        t.exports = a, cc._RF.pop()
    }, {
        DB_turntable: "DB_turntable",
        TurnTableData: "TurnTableData"
    }],
    UIMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "17061XGCOJL+qzfTLX/yjSj", "UIMgr");
        var n = e("uiConfig"),
            o = (e("Event"), e("DataType")),
            a = e("EffectType"),
            s = cc.Class({
                extends: cc.Component,
                properties: {
                    uiRoot: cc.Node,
                    rubbishNode: cc.Node
                },
                statics: {
                    instance: null
                },
                onLoad: function() {
                    s.instance = this
                },
                start: function() {},
                openTestUI: function() {
                    var e = this;
                    if (cc.Mgr.AudioMgr.playSFX("click"), this.testUI) {
                        this.testUI.active = !0, this.testUI.opacity = 0;
                        var t = cc.fadeIn(.25);
                        this.testUI.runAction(t), this.testUI.zIndex = n.testUI.Layer
                    } else this.testUI = null, cc.loader.loadRes("prefab/uiPrefab/" + n.testUI.Name, cc.Prefab, function(t, i) {
                        if (t) cc.error(t.message || t);
                        else {
                            e.testUI = cc.instantiate(i), e.testUI.parent = e.uiRoot, e.testUI.active = !0, e.testUI.position = cc.v2(0, 0), e.testUI.opacity = 0;
                            var o = cc.fadeIn(.25);
                            e.testUI.runAction(o), e.testUI.zIndex = n.testUI.Layer
                        }
                    })
                },
                openSetting: function() {
                    var e = this;
                    if (cc.Mgr.AudioMgr.playSFX("click"), this.setUI) {
                        this.setUI.active = !0, this.setUI.opacity = 0;
                        var t = cc.fadeIn(.25);
                        this.setUI.getComponent("setPanel"), this.setUI.runAction(t), this.setUI.zIndex = n.setUI.Layer
                    } else this.setUI = null, cc.loader.loadRes("prefab/uiPrefab/" + n.setUI.Name, cc.Prefab, function(t, i) {
                        if (t) cc.error(t.message || t);
                        else {
                            e.setUI = cc.instantiate(i), e.setUI.parent = e.uiRoot, e.setUI.active = !0, e.setUI.opacity = 0;
                            var o = cc.fadeIn(.25);
                            e.setUI.getComponent("setPanel"), e.setUI.runAction(o), e.setUI.zIndex = n.setUI.Layer
                        }
                    })
                },
                openDiscountUI: function() {
                    var e = this;
                    if (cc.Mgr.AudioMgr.playSFX("click"), this.discountUI) {
                        this.discountUI.active = !0, this.discountUI.opacity = 0;
                        var t = cc.fadeIn(.25);
                        this.discountUI.getComponent("discountUI").showUI(), this.discountUI.runAction(t), this.discountUI.zIndex = n.discountUI.Layer
                    } else this.discountUI = null, cc.loader.loadRes("prefab/uiPrefab/" + n.discountUI.Name, cc.Prefab, function(t, i) {
                        if (t) cc.error(t.message || t);
                        else {
                            e.discountUI = cc.instantiate(i), e.discountUI.parent = e.uiRoot, e.discountUI.active = !0, e.discountUI.opacity = 0;
                            var o = cc.fadeIn(.25);
                            e.discountUI.getComponent("discountUI").showUI(), e.discountUI.runAction(o), e.discountUI.zIndex = n.discountUI.Layer
                        }
                    })
                },
                openShop: function() {
                    var e = this;
                    if (cc.Mgr.AudioMgr.playSFX("click"), this.shopUINode) {
                        this.shopUINode.active = !0, this.shopUINode.opacity = 0;
                        var t = cc.fadeIn(.25);
                        this.shopUINode.getComponent("shopUI").showUI(), this.shopUINode.runAction(t), this.shopUINode.zIndex = n.shopUI.Layer
                    } else this.shopUINode = null, cc.loader.loadRes("prefab/uiPrefab/" + n.shopUI.Name, cc.Prefab, function(t, i) {
                        if (t) cc.error(t.message || t);
                        else {
                            e.shopUINode = cc.instantiate(i), e.shopUINode.parent = e.uiRoot, e.shopUINode.active = !0, e.shopUINode.opacity = 0;
                            var o = cc.fadeIn(.25);
                            e.shopUINode.getComponent("shopUI").showUI(), e.shopUINode.runAction(o), e.shopUINode.zIndex = n.shopUI.Layer
                        }
                    })
                },
                openLuckyMergeUI: function(e, t) {
                    var i = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(o.PlantData, e),
                        a = this;
                    if (cc.Mgr.AudioMgr.playSFX("click"), this.luckyMergeUI) {
                        this.luckyMergeUI.active = !0, this.luckyMergeUI.opacity = 0;
                        var s = cc.fadeIn(.25);
                        this.luckyMergeUI.getComponent("luckyMergeUI").showUI(i, t), this.luckyMergeUI.runAction(s), this.luckyMergeUI.zIndex = n.luckyMergeUI.Layer
                    } else this.luckyMergeUI = null, cc.loader.loadRes("prefab/uiPrefab/" + n.luckyMergeUI.Name, cc.Prefab, function(e, o) {
                        if (e) cc.error(e.message || e);
                        else {
                            a.luckyMergeUI = cc.instantiate(o), a.luckyMergeUI.parent = a.uiRoot, a.luckyMergeUI.active = !0, a.luckyMergeUI.opacity = 0;
                            var s = cc.fadeIn(.25);
                            a.luckyMergeUI.getComponent("luckyMergeUI").showUI(i, t), a.luckyMergeUI.runAction(s), a.luckyMergeUI.zIndex = n.luckyMergeUI.Layer
                        }
                    })
                },
                closeShop: function() {
                    null != this.shopUINode && (this.shopUINode.active = !1)
                },
                openSignUI: function() {
                    var e = this;
                    if (cc.Mgr.AudioMgr.playSFX("click"), this.signUINode) {
                        this.signUINode.active = !0, this.signUINode.opacity = 0;
                        var t = cc.fadeIn(.25);
                        this.signUINode.getComponent("signUI").showUI(), this.signUINode.runAction(t), this.signUINode.zIndex = n.signUI.Layer
                    } else this.signUINode = null, cc.loader.loadRes("prefab/uiPrefab/" + n.signUI.Name, cc.Prefab, function(t, i) {
                        if (t) cc.error(t.message || t);
                        else {
                            e.signUINode = cc.instantiate(i), e.signUINode.parent = e.uiRoot, e.signUINode.active = !0, e.signUINode.opacity = 0;
                            var o = cc.fadeIn(.25);
                            e.signUINode.getComponent("signUI").showUI(), e.signUINode.runAction(o), e.signUINode.zIndex = n.signUI.Layer
                        }
                    })
                },
                openPlantGetUI: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        o = this;
                    if (cc.Mgr.AudioMgr.playSFX("click"), this.plantGetUINode) {
                        this.plantGetUINode.active = !0, this.plantGetUINode.opacity = 0;
                        var a = cc.fadeIn(.25);
                        this.plantGetUINode.getComponent("plantGetUI").showUI(e, t, i), this.plantGetUINode.runAction(a), this.plantGetUINode.zIndex = n.plantGetUI.Layer
                    } else this.plantGetUINode = null, cc.loader.loadRes("prefab/uiPrefab/" + n.plantGetUI.Name, cc.Prefab, function(a, s) {
                        if (a) cc.error(a.message || a);
                        else {
                            o.plantGetUINode = cc.instantiate(s), o.plantGetUINode.parent = o.uiRoot, o.plantGetUINode.active = !0, o.plantGetUINode.opacity = 0;
                            var c = cc.fadeIn(.25);
                            o.plantGetUINode.getComponent("plantGetUI").showUI(e, t, i), o.plantGetUINode.runAction(c), o.plantGetUINode.zIndex = n.plantGetUI.Layer
                        }
                    });
                    "unlock" == e && 5 == t && cc.Mgr.UIMgr.InGameUI.showUavNextTime(.5)
                },
                playCoinFlyForRecovery: function(e) {
                    var t = cc.Mgr.EffectMgr.getObFromPool(a.CoinFly);
                    if (null != t) {
                        t.parent = this.rubbishNode, t.active = !0, t.zIndex = 101, t.y = 60, t.x = 0;
                        var i = cc.Mgr.Utils.getNumStr(e);
                        t.getComponent("coinFly").setData(i), t.scale = 1, cc.tween(t).to(.1, {
                            position: cc.v2(0, 90),
                            scale: .8
                        }).to(.5, {
                            position: cc.v2(0, 100)
                        }).call(function() {
                            cc.Mgr.game.money += e, cc.Mgr.EffectMgr.ObBackToPool(t, a.CoinFly)
                        }).start()
                    }
                },
                clickRubbish: function() {
                    this.showPrompt("Kéo Moe vào đây để bán nửa giá")
                },
                showPromptTest: function() {
                    this.showPrompt("Fuck You")
                },
                showPrompt: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        i = this;
                    if (null == this.promptPre) cc.loader.loadRes("prefab/uiPrefab/" + n.promptUI.Name, cc.Prefab, function(o, a) {
                        if (o) cc.error(o.message || o);
                        else {
                            i.promptPre = a;
                            var s = cc.instantiate(a);
                            s.y = -s.height / 2, s.parent = i.uiRoot, s.zIndex = n.promptUI.Layer, s.getComponent("promptUI").showDes(e);
                            var c = cc.moveBy(.2 * t, 0, 150),
                                r = cc.moveBy(.8 * t, 0, 0),
                                l = cc.moveBy(.2 * t, 0, 150),
                                h = cc.fadeOut(.2 * t);
                            s.runAction(cc.sequence(c, r, cc.callFunc(function() {
                                s.runAction(cc.sequence(cc.spawn(l, h), cc.callFunc(function() {
                                    s.destroy()
                                })))
                            })))
                        }
                    });
                    else {
                        var o = cc.instantiate(this.promptPre);
                        o.y = -o.height / 2, o.parent = this.uiRoot, o.zIndex = 100, o.getComponent("promptUI").showDes(e);
                        var a = cc.moveBy(.2 * t, 0, 150),
                            s = cc.moveBy(.8 * t, 0, 0),
                            c = cc.moveBy(.2 * t, 0, 150),
                            r = cc.fadeOut(.2 * t);
                        o.runAction(cc.sequence(a, s, cc.callFunc(function() {
                            o.runAction(cc.sequence(cc.spawn(c, r), cc.callFunc(function() {
                                o.destroy()
                            })))
                        })))
                    }
                },
                showSmallResult: function(e) {
                    var t = this;
                    this.smallResultNode ? (this.smallResultNode.active = !0, this.smallResultNode.scaleY = .1, this.smallResultNode.getComponent("smallResult").show(e), this.smallResultNode.runAction(cc.scaleTo(.25, 1, 1)), this.smallResultNode.zIndex = n.smallResult.Layer) : (this.smallResultNode = null, cc.loader.loadRes("prefab/uiPrefab/" + n.smallResult.Name, cc.Prefab, function(i, o) {
                        i ? cc.error(i.message || i) : (t.smallResultNode = cc.instantiate(o), t.smallResultNode.parent = t.uiRoot, t.smallResultNode.active = !0, t.smallResultNode.scaleY = .1, t.smallResultNode.getComponent("smallResult").show(e), t.smallResultNode.runAction(cc.scaleTo(.25, 1, 1)), t.smallResultNode.zIndex = n.smallResult.Layer)
                    }))
                },
                showBigResult: function(e, t) {
                    var i = this;
                    this.bigResultNode ? (this.bigResultNode.active = !0, this.bigResultNode.getComponent("bigResult").show(e, t), this.bigResultNode.zIndex = n.bigResult.Layer) : (this.bigResultNode = null, cc.loader.loadRes("prefab/uiPrefab/" + n.bigResult.Name, cc.Prefab, function(o, a) {
                        o ? cc.error(o.message || o) : (i.bigResultNode = cc.instantiate(a), i.bigResultNode.parent = i.uiRoot, i.bigResultNode.active = !0, i.bigResultNode.getComponent("bigResult").show(e, t), i.bigResultNode.zIndex = n.bigResult.Layer)
                    }))
                },
                showBossComing: function() {
                    var e = this;
                    this.bossComingNode ? (this.bossComingNode.active = !0, this.bossComingNode.getComponent("bossComing").playAnimation(), this.bossComingNode.zIndex = n.bossComing.Layer) : (this.bossComingNode = null, cc.loader.loadRes("prefab/uiPrefab/" + n.bossComing.Name, cc.Prefab, function(t, i) {
                        t ? cc.error(t.message || t) : (e.bossComingNode = cc.instantiate(i), e.bossComingNode.parent = e.uiRoot, e.bossComingNode.active = !0, e.bossComingNode.getComponent("bossComing").playAnimation(), e.bossComingNode.zIndex = n.bossComing.Layer)
                    }))
                },
                openActivityUI: function() {
                    cc.Mgr.AudioMgr.playSFX("click");
                    var e = this;
                    this.activityUI ? (this.activityUI.active = !0, this.activityUI.getComponent("activityUI").showUI(), this.activityUI.zIndex = n.activityUI.Layer) : (this.activityUI = null, cc.loader.loadRes("prefab/uiPrefab/" + n.activityUI.Name, cc.Prefab, function(t, i) {
                        t ? cc.error(t.message || t) : (e.activityUI = cc.instantiate(i), e.activityUI.parent = e.uiRoot, e.activityUI.active = !0, e.activityUI.getComponent("activityUI").showUI(), e.activityUI.zIndex = n.activityUI.Layer)
                    }))
                },
                openAngryUI: function() {
                    cc.Mgr.AudioMgr.playSFX("click");
                    var e = this;
                    this.angryUINode ? (this.angryUINode.active = !0, this.angryUINode.getComponent("angryUI").showUI(), this.angryUINode.zIndex = n.angryUI.Layer) : (this.angryUINode = null, cc.loader.loadRes("prefab/uiPrefab/" + n.angryUI.Name, cc.Prefab, function(t, i) {
                        t ? cc.error(t.message || t) : (e.angryUINode = cc.instantiate(i), e.angryUINode.parent = e.uiRoot, e.angryUINode.active = !0, e.angryUINode.getComponent("angryUI").showUI(), e.angryUINode.zIndex = n.angryUI.Layer)
                    }))
                },
                openTurnTableUI: function() {
                    cc.Mgr.AudioMgr.playSFX("click");
                    var e = this;
                    this.turnTableUINode ? (this.turnTableUINode.active = !0, this.turnTableUINode.getComponent("turnTableUI").showUI(), this.turnTableUINode.zIndex = n.turnTableUI.Layer) : (this.turnTableUINode = null, cc.loader.loadRes("prefab/uiPrefab/" + n.turnTableUI.Name, cc.Prefab, function(t, i) {
                        t ? cc.error(t.message || t) : (e.turnTableUINode = cc.instantiate(i), e.turnTableUINode.parent = e.uiRoot, e.turnTableUINode.active = !0, e.turnTableUINode.getComponent("turnTableUI").showUI(), e.turnTableUINode.zIndex = n.turnTableUI.Layer)
                    })), cc.Mgr.UIMgr.InGameUI.setTopNodeLayer(this.turnTableUINode)
                },
                openAssetGetUI: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                        a = this;
                    this.assetGetUINode ? (this.assetGetUINode.active = !0, this.assetGetUINode.getComponent("assetGetUI").showUI(e, t, i, o), this.assetGetUINode.zIndex = n.assetGetUI.Layer) : (this.assetGetUINode = null, cc.loader.loadRes("prefab/uiPrefab/" + n.assetGetUI.Name, cc.Prefab, function(s, c) {
                        s ? cc.error(s.message || s) : (a.assetGetUINode = cc.instantiate(c), a.assetGetUINode.parent = a.uiRoot, a.assetGetUINode.active = !0, a.assetGetUINode.getComponent("assetGetUI").showUI(e, t, i, o), a.assetGetUINode.zIndex = n.assetGetUI.Layer)
                    }))
                },
                openMissionUI: function() {
                    cc.Mgr.AudioMgr.playSFX("click");
                    var e = this;
                    this.missionUINode ? (this.missionUINode.active = !0, this.missionUINode.getComponent("missionUI").showUI(), this.missionUINode.zIndex = n.missionUI.Layer) : (this.missionUINode = null, cc.loader.loadRes("prefab/uiPrefab/" + n.missionUI.Name, cc.Prefab, function(t, i) {
                        t ? cc.error(t.message || t) : (e.missionUINode = cc.instantiate(i), e.missionUINode.parent = e.uiRoot, e.missionUINode.active = !0, e.missionUINode.getComponent("missionUI").showUI(), e.missionUINode.zIndex = n.missionUI.Layer)
                    }))
                },
                openOfflineAssetsUI: function(e) {
                    var t = this;
                    this.offlineAssetUINode ? (this.offlineAssetUINode.active = !0, this.offlineAssetUINode.getComponent("offlineAssetUI").showUI(e), this.offlineAssetUINode.zIndex = n.offlineAssetUI.Layer) : (this.offlineAssetUINode = null, cc.loader.loadRes("prefab/uiPrefab/" + n.offlineAssetUI.Name, cc.Prefab, function(i, o) {
                        i ? cc.error(i.message || i) : (t.offlineAssetUINode = cc.instantiate(o), t.offlineAssetUINode.parent = t.uiRoot, t.offlineAssetUINode.active = !0, t.offlineAssetUINode.getComponent("offlineAssetUI").showUI(e), t.offlineAssetUINode.zIndex = n.offlineAssetUI.Layer)
                    }))
                },
                openGameInUI: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    this.callback = e;
                    var t = this;
                    cc.loader.loadRes("prefab/uiPrefab/" + n.gameInUI.Name, cc.Prefab, function(e, i) {
                        e ? cc.error(e.message || e) : (t.GameInUINode = cc.instantiate(i), t.GameInUINode.parent = t.uiRoot, t.GameInUINode.active = !1, t.GameInUINode.getComponent("InGameUI").init(), t.GameInUINode.zIndex = n.gameInUI.Layer, t.callback && t.callback())
                    })
                },
                activeGameInUI: function() {
                    this.GameInUINode && (this.GameInUINode.active = !0), window.ArcadeBridge && (window.ArcadeBridge.showDeleteButton && window.ArcadeBridge.showDeleteButton(), window.ArcadeBridge.applyWhiteTextOutlines && window.ArcadeBridge.applyWhiteTextOutlines(this.uiRoot || this.GameInUINode))
                },
                showJibEffect: function() {
                    var e = this;
                    cc.loader.loadRes("prefab/uiPrefab/jinbis", function(t, i) {
                        if (t) cc.error(t.message || t);
                        else {
                            var o = cc.instantiate(i);
                            o.parent = e.uiRoot, o.zIndex = n.jinbi.Layer
                        }
                    })
                },
                showGemsEffect: function() {
                    var e = this;
                    cc.loader.loadRes("prefab/uiPrefab/gems", function(t, i) {
                        if (t) cc.error(t.message || t);
                        else {
                            var o = cc.instantiate(i);
                            o.parent = e.uiRoot, o.zIndex = n.jinbi.Layer
                        }
                    })
                },
                openGuide: function() {
                    var e = this;
                    cc.loader.loadRes("prefab/uiPrefab/Guides", function(t, i) {
                        t ? cc.error(t.message || t) : cc.instantiate(i).parent = e.uiRoot
                    })
                },
                openUavUI: function() {
                    cc.Mgr.AudioMgr.playSFX("click");
                    var e = this;
                    this.uavUINode ? (this.uavUINode.active = !0, this.uavUINode.getComponent("uavUI").showUI(), this.uavUINode.zIndex = n.uavUI.Layer) : (this.uavUINode = null, cc.loader.loadRes("prefab/uiPrefab/" + n.uavUI.Name, cc.Prefab, function(t, i) {
                        t ? cc.error(t.message || t) : (e.uavUINode = cc.instantiate(i), e.uavUINode.parent = e.uiRoot, e.uavUINode.active = !0, e.uavUINode.getComponent("uavUI").showUI(), e.uavUINode.zIndex = n.uavUI.Layer)
                    }))
                },
                openTipUI: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    cc.Mgr.AudioMgr.playSFX("click");
                    var i = this;
                    this.tipUINode ? (this.tipUINode.active = !0, this.tipUINode.getComponent("tipUI").showUI(e, t), this.tipUINode.zIndex = n.tipUI.Layer) : (this.tipUINode = null, cc.loader.loadRes("prefab/uiPrefab/" + n.tipUI.Name, cc.Prefab, function(o, a) {
                        o ? cc.error(o.message || o) : (i.tipUINode = cc.instantiate(a), i.tipUINode.parent = i.uiRoot, i.tipUINode.active = !0, i.tipUINode.getComponent("tipUI").showUI(e, t), i.tipUINode.zIndex = n.tipUI.Layer)
                    }))
                }
            });
        t.exports = s, cc._RF.pop()
    }, {
        DataType: "DataType",
        EffectType: "EffectType",
        Event: "Event",
        uiConfig: "uiConfig"
    }],
    UserDataMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "d200aUEaNBB3IdNzh1nSm20", "UserDataMgr");
        var n = e("Config"),
            o = (e("MissionType"), e("MyEnum")),
            a = cc.Class({
                extends: cc.Component,
                properties: {
                    jsName: "userdataHH"
                },
                initData: function() {
                    cc.Mgr.initData = !1;
                    var e = cc.sys.localStorage.getItem(this.jsName);
                    if (null == e || "" == e) {
                        cc.log("\u8fd8\u6ca1\u6709\u4fdd\u5b58\u8fc7\u6301\u4e45\u6570\u636e"), cc.Mgr.game.needGuide = !0, (s = {
                            v: 0
                        }).openId = this.caculateOpenId(), s.level = 1, s.money = 2e3, s.gems = 0, s.spinADResetTime = 0, s.pkPoints = 0, s.pkPointsTime = 0, s.plantMaxLv = 1, s.hasGetGift = !1, s.plantBuyRecord = {};
                        for (var t = 0; t < 60; t++) s.plantBuyRecord[t + 1] = 0;
                        s.dailyMissions = new Array;
                        for (t = 0; t < n.missionDataList.length; t++) {
                            var i = n.missionDataList[t];
                            (c = {}).id = i.id, c.checkType = i.checkType, c.misType = i.misType, c.checkNum = i.checkNum, c.progress = i.progress, c.rewardType = i.rewardType, c.claimed = 0, s.dailyMissions.push(c)
                        }
                        s.achievementProgress = new Array;
                        for (t = 0; t < n.achieveDataList.length; t++) {
                            i = n.achieveDataList[t];
                            (c = {}).id = i.id, c.checkType = i.checkType, c.level = i.level, c.checklv = i.checklv, c.progress = i.progress, c.finished = 0, s.achievementProgress.push(c)
                        }
                        cc.Mgr.game.openId = s.openId, s.claimedColumn = new Array, s.dronePot = new Array, s.turntablePot = new Array, s.shopBuyPot = new Array, s.plantsOwn = new Array;
                        for (t = 0; t < cc.Mgr.Config.allPlantCount; t++) {
                            (c = {}).lv = t + 1, c.ownNum = 0, s.plantsOwn.push(c)
                        }
                        s.plantsPK = new Array, (a = {}).type = o.GridState.lock, a.level = 3069e3, a.index = 0, s.plantsPK.push(a), (a = {}).type = o.GridState.lock, a.level = 1767e3, a.index = 1, s.plantsPK.push(a), (a = {}).type = o.GridState.lock, a.level = 344163, a.index = 2, s.plantsPK.push(a), (a = {}).type = o.GridState.lock, a.level = 73785, a.index = 3, s.plantsPK.push(a), (a = {}).type = o.GridState.lock, a.level = 10560, a.index = 4, s.plantsPK.push(a), (a = {}).type = o.GridState.lock, a.level = 1500, a.index = 5, s.plantsPK.push(a), (a = {}).type = o.GridState.lock, a.level = 100, a.index = 6, s.plantsPK.push(a);
                        for (t = 7; t < 12; t++) {
                            var a;
                            (a = {}).type = o.GridState.none, s.plantsPK.push(a)
                        }
                        s.discountLeftTimes = 0, cc.Mgr.game.discountLeftTimes = 0, s.lastPlayTime = cc.Mgr.Utils.GetSysTime(), s.lastGiftPlantTime = 0, s.plantBuyTimes = {}, s.shortcutRefused = 0, s.shortcutClaimed = !1, s.invitedClaimed = 0, s.subscribedBefore = 0, s.subsPrompted = 0, s.firstPlayTime = 0, s.purchaseTimes = 0, s.adTimes = 0, s.rateRejectTime = 0, s.rateRejectCount = 0, s.lastSignDate = 0, s.hasSignDayNum = 0, cc.Mgr.game.lastSignDate = 0, cc.Mgr.game.hasSignDayNum = 0, this.v = s.v, cc.Mgr.game.level = s.level, cc.Mgr.game.money = s.money, cc.Mgr.game.gems = s.gems, cc.Mgr.game.spinADResetTime = s.spinADResetTime, this.pkPoints = s.pkPoints, this.pkPointsTime = s.pkPointsTime, cc.Mgr.game.plantMaxLv = s.plantMaxLv, cc.Mgr.game.plantBuyRecord = s.plantBuyRecord, cc.Mgr.game.plantsOwn = s.plantsOwn, cc.Mgr.game.dailyMissions = s.dailyMissions, cc.Mgr.game.achievementProgress = s.achievementProgress, this.claimedColumn = s.claimedColumn, cc.Mgr.game.dronePot = s.dronePot, cc.Mgr.game.turntablePot = s.turntablePot, cc.Mgr.game.shopBuyPot = s.shopBuyPot, cc.Mgr.game.plantsPK = s.plantsPK, this.lastPlayTime = s.lastPlayTime, this.lastGiftPlantTime = s.lastGiftPlantTime, this.plantBuyTimes = s.plantBuyTimes, this.shortcutRefused = s.shortcutRefused, this.shortcutClaimed = s.shortcutClaimed, this.invitedClaimed = s.invitedClaimed, this.subscribedBefore = s.subscribedBefore, this.subsPrompted = s.subsPrompted, this.firstPlayTime = s.firstPlayTime, this.purchaseTimes = s.purchaseTimes, this.adTimes = s.adTimes, this.rateRejectTime = s.rateRejectTime, this.rateRejectCount = s.rateRejectCount, cc.sys.localStorage.setItem(this.jsName, JSON.stringify(s)), cc.log("\u6ca1\u6709\u4fdd\u5b58\u8fc7\u6570\u636e " + JSON.stringify(s))
                    } else {
                        cc.log("\u6709\u4e4b\u524d\u4fdd\u5b58\u7684\u6301\u4e45\u6570\u636e\u5b58\u5728 " + e);
                        var s = JSON.parse(e);
                        if (this.v = s.v, null == s.openId || "" == s.openId ? cc.Mgr.game.openId = this.caculateOpenId() : cc.Mgr.game.openId = s.openId, cc.Mgr.game.level = s.level, cc.Mgr.game.needGuide = !1, cc.Mgr.game.money = s.money, cc.Mgr.game.gems = s.gems, cc.Mgr.game.spinADResetTime = s.spinADResetTime, this.pkPoints = s.pkPoints, this.pkPointsTime = s.pkPointsTime, cc.Mgr.game.plantMaxLv = s.plantMaxLv, null == s.plantBuyRecord || s.plantBuyRecord == {} ? cc.Mgr.game.resetplantBuyRecord() : cc.Mgr.game.plantBuyRecord = s.plantBuyRecord, null == s.dailyMissions || "" == s.dailyMissions || 0 == s.dailyMissions.length) {
                            for (t = 0; t < n.missionDataList.length; t++) {
                                i = n.missionDataList[t];
                                (c = {}).id = i.id, c.checkType = i.checkType, c.misType = i.misType, c.checkNum = i.checkNum, c.progress = i.progress, c.rewardType = i.rewardType, c.claimed = 0, s.dailyMissions.push(c)
                            }
                            cc.Mgr.game.dailyMissions = s.dailyMissions
                        } else cc.Mgr.game.dailyMissions = s.dailyMissions;
                        if (null == s.achievementProgress || "" == s.achievementProgress || 0 == s.achievementProgress.length) {
                            for (t = 0; t < n.achieveDataList.length; t++) {
                                i = n.achieveDataList[t];
                                (c = {}).id = i.id, c.checkType = i.checkType, c.level = i.level, c.checklv = i.checklv, c.progress = i.progress, c.finished = 0, s.achievementProgress.push(c)
                            }
                            cc.Mgr.game.achievementProgress = s.achievementProgress
                        } else cc.Mgr.game.achievementProgress = s.achievementProgress;
                        if (null == s.plantsOwn || "" == s.plantsOwn || 0 == s.plantsOwn.length) {
                            for (t = 0; t < cc.Mgr.Config.allPlantCount; t++) {
                                var c;
                                (c = {}).lv = t + 1, c.ownNum = 0, s.plantsOwn.push(c)
                            }
                            cc.Mgr.game.plantsOwn = s.plantsOwn
                        } else cc.Mgr.game.plantsOwn = s.plantsOwn;
                        null == s.discountBeActiveTimes || "" == s.discountBeActiveTimes ? cc.Mgr.game.discountBeActiveTimes = 0 : (cc.Mgr.game.discountBeActiveTimes = s.discountBeActiveTimes, cc.Mgr.game.discountLv = Math.ceil(cc.Mgr.game.discountBeActiveTimes / 3), cc.Mgr.game.discountLv >= 3 && (cc.Mgr.game.discountLv = 3)), null == s.discountLeftTimes || "" == s.discountLeftTimes ? cc.Mgr.game.discountLeftTimes = 0 : cc.Mgr.game.discountLeftTimes = s.discountLeftTimes, null == s.lastSignDate || "" == s.lastSignDate ? cc.Mgr.game.lastSignDate = 0 : cc.Mgr.game.lastSignDate = s.lastSignDate, null == s.hasSignDayNum || "" == s.hasSignDayNum ? cc.Mgr.game.hasSignDayNum = 0 : cc.Mgr.game.hasSignDayNum = s.hasSignDayNum, null == s.hasGetGift || "" == s.hasGetGift ? cc.Mgr.game.hasGetGift = !1 : cc.Mgr.game.hasGetGift = s.hasGetGift, this.claimedColumn = s.claimedColumn, cc.Mgr.game.dronePot = s.dronePot, cc.Mgr.game.turntablePot = s.turntablePot, cc.Mgr.game.shopBuyPot = s.shopBuyPot, cc.Mgr.game.plantsPK = s.plantsPK, this.lastPlayTime = s.lastPlayTime, this.lastGiftPlantTime = s.lastGiftPlantTime, this.plantBuyTimes = s.plantBuyTimes, this.shortcutRefused = s.shortcutRefused, this.shortcutClaimed = s.shortcutClaimed, this.invitedClaimed = s.invitedClaimed, this.subscribedBefore = s.subscribedBefore, this.subsPrompted = s.subsPrompted, this.firstPlayTime = s.firstPlayTime, this.purchaseTimes = s.purchaseTimes, this.adTimes = s.adTimes, this.rateRejectTime = s.rateRejectTime, this.rateRejectCount = s.rateRejectCount
                    }
                    cc.Mgr.initData = !0
                },
                SaveUserData: function() {
                    var e = {};
                    e.v = this.v, e.level = cc.Mgr.game.level, e.money = cc.Mgr.game.money, e.gems = cc.Mgr.game.gems, e.spinADResetTime = cc.Mgr.game.spinADResetTime, e.pkPoints = this.pkPoints, e.pkPointsTime = this.pkPointsTime, e.plantMaxLv = cc.Mgr.game.plantMaxLv, e.plantBuyRecord = cc.Mgr.game.plantBuyRecord, e.dailyMissions = cc.Mgr.game.dailyMissions, e.achievementProgress = cc.Mgr.game.achievementProgress, e.claimedColumn = this.claimedColumn, e.dronePot = cc.Mgr.game.getDronePot(), e.turntablePot = cc.Mgr.game.getTurntablePot(), e.shopBuyPot = cc.Mgr.game.getShopBuyPot(), e.plantsOwn = cc.Mgr.game.plantsOwn, e.plantsPK = cc.Mgr.game.getPlantsPK(), e.lastPlayTime = cc.Mgr.Utils.GetSysTime(), e.lastGiftPlantTime = this.lastGiftPlantTime, e.plantBuyTimes = this.plantBuyTimes, e.shortcutRefused = this.shortcutRefused, e.shortcutClaimed = this.shortcutClaimed, e.invitedClaimed = this.invitedClaimed, e.subscribedBefore = this.subscribedBefore, e.subsPrompted = this.subsPrompted, e.firstPlayTime = this.firstPlayTime, e.purchaseTimes = this.purchaseTimes, e.adTimes = this.adTimes, e.rateRejectTime = this.rateRejectTime, e.rateRejectCount = this.rateRejectCount, e.lastSignDate = cc.Mgr.game.lastSignDate, e.hasSignDayNum = cc.Mgr.game.hasSignDayNum, e.discountLeftTimes = cc.Mgr.game.discountLeftTimes, e.discountBeActiveTimes = cc.Mgr.game.discountBeActiveTimes, e.hasGetGift = cc.Mgr.game.hasGetGift, e.openId = cc.Mgr.game.openId, cc.sys.localStorage.setItem(this.jsName, JSON.stringify(e))
                },
                caculateOpenId: function() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                        var t = 16 * Math.random() | 0;
                        return ("x" == e ? t : 3 & t | 8).toString(16)
                    })
                }
            });
        t.exports = a, cc._RF.pop()
    }, {
        Config: "Config",
        MissionType: "MissionType",
        MyEnum: "MyEnum"
    }],
    Utils: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "8fde9BkXa9PRJVejPBOOoTq", "Utils");
        var n = e("DataType"),
            o = cc.Class({
                extends: cc.Component,
                statics: {
                    init: function() {
                        String.prototype.format || (String.prototype.format = function() {
                            var e = arguments;
                            return this.replace(/{(\d+)}/g, function(t, i) {
                                return void 0 !== e[i] ? e[i] : ""
                            })
                        })
                    },
                    FormatNumToTime: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = Math.floor(e / 3600),
                            n = Math.floor((e - 3600 * i) / 60),
                            o = Math.floor(e - 3600 * i - 60 * n),
                            a = i,
                            s = n,
                            c = o;
                        i < 10 && (a = "0" + i), n < 10 && (s = "0" + n), o < 10 && (c = "0" + o);
                        var r = a + ":" + s + ":" + c;
                        return t && (r = s + ":" + c), i < 1 && (r = s + ":" + c), r
                    },
                    GetSysTime: function() {
                        if (0 == cc.Mgr.game.netTimeStamp) var e = Math.round(new Date / 1e3);
                        else {
                            e = Math.round(new Date / 1e3);
                            e = cc.Mgr.game.netTimeStamp + e - cc.Mgr.game.enterGameTimeStamp
                        }
                        return e
                    },
                    GetSysTimeByMilliSecend: function() {
                        return 10 * this.GetSysTime()
                    },
                    timeToDate: function(e) {
                        return Math.floor(e / 3600 / 24)
                    },
                    FormatNum: function(e) {
                        for (var t = "", i = (e += "").length - 1, n = 1; i >= 0; i--, n++) t += n % 3 != 0 || 0 == i ? e[i] : e[i] + ",";
                        var o = t.split("").reverse().join("");
                        return "," == o[0] ? o.splice(0, 1) : o
                    },
                    getTranslationLocal: function(e) {
                        for (var t in cc.director.NoticeText)
                            if (t.toString() == e) return cc.director.NoticeText[t];
                        return "\u7ffb\u8bd1\u5b57\u6bb5null"
                    },
                    getTranslation: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            i = e,
                            o = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(n.Translation, e);
                        if ("" == o || null == o || null == o.zh_CN) return e;
                        switch (cc.Mgr.Config.language) {
                            case "en_US":
                                i = o.en_US;
                                break;
                            case "zh_CN":
                                i = this.decodeUnicode(o.zh_CN);
                                break;
                            case "zh_TW":
                                i = this.decodeUnicode(o.zh_TW)
                        }
                        switch (t.length) {
                            case 0:
                                i = i;
                                break;
                            case 1:
                                i = i.format(t[0]);
                                break;
                            case 2:
                                i = i.format(t[0], t[1]);
                                break;
                            case 3:
                                i = i.format(t[0], t[1], t[2]);
                                break;
                            case 4:
                                i = i.format(t[0], t[1], t[2], t[3]);
                                break;
                            case 5:
                                i = i.format(t[0], t[1], t[2], t[3], t[4])
                        }
                        return i
                    },
                    decodeUnicode: function(e) {
                        return e = e.replace(/\\/g, "%"), unescape(e)
                    },
                    hexToColor: function(e) {
                        e = e.replace(/^#?/, "0x");
                        var t = parseInt(e),
                            i = t >> 16,
                            n = (65280 & t) >> 8,
                            o = 255 & t;
                        return cc.color(i, n, o)
                    },
                    pAdd: function(e, t) {
                        return cc.v2(e.x + t.x, e.y + t.y)
                    },
                    pDistance: function(e, t) {
                        var i = this.pSub(e, t);
                        return this.pLength(i)
                    },
                    pLength: function(e) {
                        return Math.sqrt(this.pLengthSQ(e))
                    },
                    pLengthSQ: function(e) {
                        return this.pDot(e, e)
                    },
                    pDot: function(e, t) {
                        return e.x * t.x + e.y * t.y
                    },
                    pSub: function(e, t) {
                        return cc.v2(e.x - t.x, e.y - t.y)
                    },
                    calculateAngle: function(e, t) {
                        var i = t.y - e.y,
                            n = t.x - e.x,
                            o = Math.abs(i / n),
                            a = 180 * Math.atan(o) / Math.PI,
                            s = 0;
                        return i > 0 && n < 0 ? s = a - 90 : i > 0 && n > 0 ? s = 90 - a : i < 0 && n < 0 ? s = -a - 90 : i < 0 && n > 0 ? s = a + 90 : 0 == i && 0 != n ? s = n < 0 ? -90 : 90 : 0 == n && 0 != i && (s = i < 0 ? 180 : 0), s
                    },
                    scientificNotationToString: function(e) {
                        var t = String(e);
                        if (!/e/.test(t)) return t;
                        var i = !0;
                        /e-/.test(t) && (i = !1);
                        var n = Number(t.match(/\d+$/)[0]),
                            o = t.match(/^[\d\.]+/)[0].replace(/\./, "");
                        return i ? o.padEnd(n + 1, 0) : o.padStart(n + o.length, 0).replace(/^0/, "0.")
                    },
                    getNumStr: function(e) {
                        var t = this.scientificNotationToString(e),
                            i = t.length,
                            n = "",
                            o = "";
                        return i <= 6 ? n = t : i > 6 && i <= 9 ? (n = t.substring(0, i - 3), o = "K") : i > 9 && i <= 12 ? (n = t.substring(0, i - 6), o = "M") : i > 12 && i <= 15 ? (n = t.substring(0, i - 9), o = "B") : i > 15 && i <= 18 ? (n = t.substring(0, i - 12), o = "t") : i > 18 && i <= 21 ? (n = t.substring(0, i - 15), o = "q") : i > 21 && i <= 24 ? (n = t.substring(0, i - 18), o = "Q") : i > 24 && i <= 27 ? (n = t.substring(0, i - 21), o = "s") : i > 27 && i <= 30 ? (n = t.substring(0, i - 24), o = "g") : i > 30 && i <= 33 ? (n = t.substring(0, i - 27), o = "G") : i > 33 && i <= 36 ? (n = t.substring(0, i - 30), o = "r") : console.log("\u592a\u5927\u4e86\uff0c\u4e0d\u8ba4\u8bc6\u4e86\u3002" + t.length), n.length > 3 && (n = n.slice(0, n.length - 3) + "," + n.slice(n.length - 3)), n += o
                    },
                    getArrayItems: function(e, t) {
                        for (var i = new Array, n = 0; n < e.length; n++) i.push(e[n]);
                        for (var o = new Array, a = 0; a < t && i.length > 0; a++) {
                            var s = Math.floor(Math.random() * i.length);
                            o[a] = i[s], i.splice(s, 1)
                        }
                        return o
                    },
                    getArrayItemsAndChangeArr: function(e, t) {
                        for (var i = new Array, n = 0; n < t && e.length > 0; n++) {
                            var o = Math.floor(Math.random() * e.length);
                            i[n] = e[o], e.splice(o, 1)
                        }
                        return i
                    }
                }
            });
        t.exports = o, cc._RF.pop()
    }, {
        DataType: "DataType"
    }],
    ZomBieMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "b6ae1gMNYVF6K2jPlzajm7R", "ZomBieMgr");
        var n = e("DataType"),
            o = e("Event"),
            a = e("MyEnum"),
            s = e("zombie_config").zIndexList,
            c = cc.Class({
                extends: cc.Component,
                properties: {
                    zombiesParent: cc.Node,
                    waveZombieCount: 0,
                    backToPoolCount: 0,
                    shadow: cc.Prefab,
                    _zombieIsEscape: !1
                },
                statics: {
                    instance: null
                },
                onLoad: function() {
                    c.instance = this
                },
                start: function() {},
                InitZombiesMgr: function() {
                    this.zombieObjs = {}
                },
                unscheduleContinueCreateZombies: function() {
                    this.unschedule(this.scheduleSpawnZombieA), this.unschedule(this.scheduleSpawnZombieB)
                },
                clearAllZombiesInGame: function() {
                    this.unscheduleContinueCreateZombies(), console.log("\u56de\u6536\u5566BossComing     \u9577\u5ea6 = : " + this.zombiesParent.children.length), this.scheduleOnce(function() {
                        for (var e = 0; e <= 30 && (this.zombiesParent.children[0] && null != this.zombiesParent.children[0].getComponent("zombie")); e++) console.log("\u56de\u6536\u5566BossComing     Node: " + this.zombiesParent.children.length), this.backToPoolOnly(this.zombiesParent.children[0], this.zombiesParent.children[0].getComponent("zombie").id)
                    }, .9)
                },
                backToPoolOnly: function(e, t) {
                    this.zombieObjs[t.toString()].put(e)
                },
                getOneWaveZombies: function(e, t) {
                    var i = e.toString() + "_" + t;
                    60 == i && t >= 5 && (i = cc.Mgr.Config.lastWaveKey);
                    var o = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(n.LevelData, i);
                    this.backToPoolCount = 0, this.createZombieCount = 0, this.waveZombieCount = o.zombieCount1 + o.zombieCount2, console.log("\u8fd9\u4e00\u6ce2\u8981\u751f\u6210  " + this.waveZombieCount + "  \u4e2a\u50f5\u5c38");
                    var c = !0;
                    this.zombieZIndex = s[0];
                    var r = 0,
                        l = 0;
                    this.scheduleSpawnZombieA = function() {
                        if (r >= o.zombieCount1) return cc.log("\u53d6\u6d88\u8ba1\u65f6\u5668 ======== A"), void this.unschedule(this.scheduleSpawnZombieA);
                        this.createZombies(o.zombieID1), r += 1
                    };
                    var h = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(n.ZombieData, o.zombieID1),
                        g = cc.Mgr.game.zombieDistance / (cc.Mgr.game.zombieSpeedRatio * h.spd),
                        d = g * o.zombieCount1;
                    this.schedule(this.scheduleSpawnZombieA, g, o.zombieCount1, .1), c && (c = !1, "male" == h.gender ? cc.Mgr.AudioMgr.playSFX(a.AudioType.zombie_man) : cc.Mgr.AudioMgr.playSFX(a.AudioType.zombie_lady)), this.scheduleSpawnZombieB = function() {
                        if (l >= o.zombieCount2) return cc.log("\u53d6\u6d88\u8ba1\u65f6\u5668 ======== B"), void this.unschedule(this.scheduleSpawnZombieB);
                        this.createZombies(o.zombieID2), l += 1
                    };
                    var p = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(n.ZombieData, o.zombieID2),
                        u = cc.Mgr.game.zombieDistance / (cc.Mgr.game.zombieSpeedRatio * p.spd);
                    this.schedule(this.scheduleSpawnZombieB, u, o.zombieCount2, d), this._zombieIsEscape = !1
                },
                createZombies: function(e) {
                    var t = this;
                    this.createZombieCount++;
                    var i = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(n.ZombieData, e.toString());
                    this.zombieObjs[e.toString()] = this.zombieObjs[e.toString()] || new cc.NodePool;
                    var o = null;
                    if (this.zombieObjs[e.toString()].size() > 0) {
                        cc.log("\u50f5\u5c38 Id = " + e + "---\u4ece\u6c60\u5b50\u91cc\u9762\u62ff size = " + this.zombieObjs[e.toString()].size()), (o = this.zombieObjs[e.toString()].get()).parent = this.zombiesParent, o.zIndex = this.zombieZIndex, o.active = !0;
                        var a = o.getComponent("zombie");
                        i.id > cc.Mgr.Config.zBossLine || t.createZombieCount == t.waveZombieCount ? a.init(i, 1.5) : a.init(i), a.moveToNextPos(), this.zombieZIndex--
                    } else cc.log("\u50f5\u5c38---\u8981\u5b9e\u4f8b\u5316\u65b0\u7684 Id = " + e), cc.loader.loadRes("prefab/zombies/" + i.prefab, function(e, n) {
                        if (e) cc.error(e.message || e);
                        else {
                            o = cc.instantiate(n);
                            var a = cc.instantiate(t.shadow);
                            a.parent = o, a.position = cc.v2(0, 0);
                            var s = o.addComponent(cc.CircleCollider);
                            s.tag = 1, s.radius = 5, o.parent = t.zombiesParent, o.zIndex = t.zombieZIndex, o.active = !0;
                            var c = o.getComponent("zombie");
                            i.id > cc.Mgr.Config.zBossLine || t.createZombieCount == t.waveZombieCount ? c.init(i, 1.5) : c.init(i), c.moveToNextPos(), t.zombieZIndex--
                        }
                    })
                },
                zombieEscape: function() {
                    this._zombieIsEscape = !0
                },
                clearZombiesPool: function() {
                    for (var e in this.zombieObjs) console.log("---\u50f5\u5c38 key " + e), this.zombieObjs[e].clear()
                },
                backToPool: function(e, t) {
                    var i = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) || 0;
                    this.zombieObjs[t.toString()].put(e), this.backToPoolCount += 1, cc.log("\u56de\u6536\u4e00\u4e2a\u50f5\u5c38 Id = " + t + "    \u672c\u8f6e\u5df2\u7ecf\u56de\u6536 " + this.backToPoolCount), this.backToPoolCount == this.waveZombieCount && (cc.log("\u56de\u6536\u5b8c\u6bd5 ======= \u603b\u5171 " + this.backToPoolCount), this.scheduleOnce(function() {
                        cc.director.GlobalEvent.emit(o.defense, {
                            state: !this._zombieIsEscape,
                            zhp: i
                        }), this.backToPoolCount = 0
                    }, .6))
                }
            });
        t.exports = c, cc._RF.pop()
    }, {
        DataType: "DataType",
        Event: "Event",
        MyEnum: "MyEnum",
        zombie_config: "zombie_config"
    }],
    ZombieData: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "04f933F5qNLo7aVuZQFPjou", "ZombieData");
        var n = cc.Class({
            name: "ZombieData",
            properties: {
                id: 0,
                hp: 100,
                spd: 0,
                money: 0,
                prefab: "",
                gender: ""
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    ZombieMapMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "33dc4CiL0lCtYUxFPR0imk2", "ZombieMapMgr");
        var n = e("db_zombie"),
            o = e("ZombieData"),
            a = cc.Class({
                extends: cc.Component,
                properties: {
                    dataList: {
                        default: [],
                        type: [o]
                    }
                },
                DecodeJson: function() {
                    var e = JSON.parse(n.data);
                    for (var t in e) {
                        var i = new o;
                        i.id = e[t][0], i.hp = e[t][1], i.spd = e[t][2], i.money = e[t][3], i.prefab = e[t][4], i.gender = e[t][5], this.dataList[t] = i
                    }
                },
                getDataByKey: function(e) {
                    return this.dataList[e]
                }
            });
        t.exports = a, cc._RF.pop()
    }, {
        ZombieData: "ZombieData",
        db_zombie: "db_zombie"
    }],
    achieveItem: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "334e7W+zrZDHrsD+AtXWr48", "achieveItem");
        var n = e("MySprite"),
            o = e("MyButton"),
            a = e("AtlasType"),
            s = e("DataType"),
            c = [5, 20, 50, 100, 200],
            r = cc.Class({
                extends: cc.Component,
                properties: {
                    rewardIcon: n,
                    claimBtn: o,
                    proBar: cc.ProgressBar,
                    desLbl: cc.Label,
                    numLbl: cc.Label,
                    effectNode: cc.Node,
                    sliderLbl: cc.Label,
                    rewardNum: 5,
                    rewardType: "gem",
                    acId: 0
                },
                setData: function(e) {
                    this.acData = e, this.acId = e.id, this.rewardIcon.setSprite(a.mainUI, "diamondstack");
                    var t = c[e.checklv];
                    this.rewardType = "gem";
                    var i = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(s.AchievementData, e.id);
                    this.desLbl.string = cc.Mgr.Utils.getTranslation("achieveItem-description", [t, i.Level]), window.ArcadeBridge && window.ArcadeBridge.applyWhiteTextOutlines && window.ArcadeBridge.applyWhiteTextOutlines(this.node);
                    var n = cc.Mgr.game.getPlantOwnsDataByLv(i.Level);
                    cc.log("============lv=============" + n), n > t && (n = t), this.proBar.progress = n / t, n < t ? (this.effectNode.active = !1, this.claimBtn.setButtonActive(!1)) : (this.effectNode.active = !0, this.claimBtn.setButtonActive(!0)), this.sliderLbl.string = n + "/" + t, this.rewardNum = this.checkLvToGainGems(e.id, e.checklv), this.numLbl.string = "x" + this.rewardNum
                },
                checkLvToGainGems: function(e, t) {
                    var i = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(s.AchievementData, e);
                    return 0 == t ? i.Gain_5 : 1 == t ? i.Gain_20 : 2 == t ? i.Gain_50 : 3 == t ? i.Gain_100 : 4 == t ? i.Gain_200 : void 0
                },
                claim: function() {
                    cc.Mgr.AudioMgr.playSFX("click"), cc.Mgr.UIMgr.openAssetGetUI(this.rewardType, this.rewardNum, null, "achieve");
                    var e = cc.Mgr.TDEvent.GetGem + "Achieve";
                    cc.Mgr.PlatformController.AldEventStatis(e, {
                        GetGem: this.rewardNum
                    }), this.getRewardAndUpdateAchieve(), 4 == this.acData.checklv && (this.node.active = !1), cc.Mgr.UIMgr.missionUI.showUI()
                },
                getRewardAndUpdateAchieve: function() {
                    this.rewardType, cc.Mgr.UIMgr.InGameUI.RefreshAssetData(), cc.Mgr.game.claimAchieveRewardById(this.acId)
                }
            });
        t.exports = r, cc._RF.pop()
    }, {
        AtlasType: "AtlasType",
        DataType: "DataType",
        MyButton: "MyButton",
        MySprite: "MySprite"
    }],
    achieveMissonData: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "9607aun6k1Nz6/JIbzcJUtk", "achieveMissonData");
        var n = cc.Class({
            name: "achieveMissonData",
            properties: {
                id: 0,
                checkType: 0,
                misType: 0,
                achType: 0,
                level: 1,
                checkLv: 1,
                checkNum: 5,
                progress: 0
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    activityUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "28be22O7ZRJTIWuT8NNMQ7D", "activityUI");
        var n = cc.Class({
            extends: cc.Component,
            properties: {
                editBox: cc.EditBox,
                giftDes: cc.Label
            },
            showUI: function() {
                cc.Mgr.AdsMgr.ShowBannerAds(2), this.giftDes.string = cc.Mgr.Config.activityGifts[0] + "  " + cc.Mgr.Config.activityGifts[1] + "  " + cc.Mgr.Config.activityGifts[2]
            },
            clickBtn: function() {
                "" != this.editBox.string ? this.editBox.string == cc.Mgr.Config.activityGifts[0] ? (this.getReward(0), cc.Mgr.UIMgr.InGameUI.showGiftNode(!1), this.closeUI()) : this.editBox.string == cc.Mgr.Config.activityGifts[1] ? (this.getReward(1), cc.Mgr.UIMgr.InGameUI.showGiftNode(!1), this.closeUI()) : this.editBox.string == cc.Mgr.Config.activityGifts[2] ? (this.getReward(2), cc.Mgr.UIMgr.InGameUI.showGiftNode(!1), this.closeUI()) : cc.Mgr.UIMgr.showPrompt("Vui lòng nhập đúng ID gói") : cc.Mgr.UIMgr.showPrompt("Vui lòng nhập ID gói quà trước")
            },
            getReward: function(e) {
                cc.Mgr.game.hasGetGift = !0, console.log("Thông tin gói quà đã nhận" + cc.Mgr.Config.giftDataList[e].moneyRatio);
                var t = cc.Mgr.Config.giftDataList[e],
                    i = cc.Mgr.game.plantMaxLv - 6 >= 1 ? cc.Mgr.game.plantMaxLv - 6 : 1,
                    n = cc.Mgr.game.plantMaxLv - 5 >= 1 ? cc.Mgr.game.plantMaxLv - 5 : 1,
                    o = Math.ceil(cc.Mgr.game.getRewardMoney(i, 3) * t.moneyRatio);
                t.flowerPot > 0 && cc.Mgr.flowerPotMgr.addDroneFlowerFot(n, t.flowerPot), o > 0 && (cc.Mgr.game.money += o, cc.Mgr.UIMgr.showJibEffect()), t.gemNum > 0 && (cc.Mgr.game.gems = t.gemNum, cc.Mgr.UIMgr.showGemsEffect());
                var a = cc.Mgr.Utils.getNumStr(o),
                    s = "";
                o > 0 && t.gemNum > 0 && t.flowerPot > 0 ? s = "Gói quà nhận được\nVàng +" + a + "\ nKim cương +" + t.gemNum + "\n" + n + "\u7ea7\u840c\u840c+" + t.flowerPot : o > 0 && t.gemNum > 0 ? s = "Gói quà nhận được\nVàng +" + a + "\ nKim cương +" + t.gemNum : t.gemNum > 0 && t.flowerPot > 0 ? s = "\u793c\u5305\u9886\u53d6\u83b7\u5f97\n\u5b9d\u77f3+" + t.gemNum + "\n" + n + "\u7ea7\u840c\u840c+" + t.flowerPot : o > 0 && t.flowerPot > 0 && (s = "\u793c\u5305\u9886\u53d6\u83b7\u5f97\n\u91d1\u5e01+" + a + "\n" + n + "\u7ea7\u840c\u840c+" + t.flowerPot);
                var c = {};
                c.des = s, c.forWhat = "activity", cc.Mgr.UIMgr.openTipUI(c), this.closeUI()
            },
            closeUI: function() {
                cc.Mgr.AdsMgr.HideBannerAd(), this.node.active = !1
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    adsGetAssetUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "a40c2RbEVZPwICZ9yF5eRH9", "adsGetAssetUI");
        var n = e("MySprite"),
            o = e("DataType"),
            a = cc.Class({
                extends: cc.Component,
                properties: {
                    iconSp: n,
                    numLbl: cc.Label,
                    desLbl: cc.Label
                },
                showUI: function(e) {
                    this.rType = e.rType, this.rNum = e.rNum, "money" == rType ? (this.desLbl.string = "Thiếu vàng? Nhận thêm Free!", this.rNum = this.caculateMoney()) : "gem" == rType && (this.desLbl.string = "Thiếu kim cương? Nhận thêm Free!")
                },
                caculateMoney: function() {
                    var e = cc.Mgr.game.plantMaxLv - 2;
                    return cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(o.PlantData, e).price
                },
                closeUI: function() {
                    cc.Mgr.AudioMgr.playSFX("click"), this.node.active = !1
                }
            });
        t.exports = a, cc._RF.pop()
    }, {
        DataType: "DataType",
        MySprite: "MySprite"
    }],
    angryEffect: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "cb68atL+phPoKolRFrMhBzY", "angryEffect");
        var n = cc.Class({
            extends: cc.Component,
            properties: {
                angryS: cc.Node
            },
            changeAngryState: function(e) {
                this.angryS.active = !!e
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    angryUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "5f39dWdwcRL4Y3fVAf4L7Ir", "angryUI");
        var n = cc.Class({
            extends: cc.Component,
            properties: {
                angryLeftTimeLbl: cc.Label,
                timeBar: cc.ProgressBar,
                gemLbl: cc.Label,
                desLbl: cc.Label,
                dragonNode: cc.Node,
                closeNode: cc.Node
            },
            doTween: function() {
                var e = this;
                this.dragonNode.opacity = 0, this.dragonNode.scale = 0, this.closeNode.opacity = 0, this.closeNode.scale = 0, this.dragonNode.active = !0, cc.tween(this.dragonNode).to(.25, {
                    opacity: 255,
                    scale: 2
                }).call(function() {
                    cc.tween(e.closeNode).to(.15, {
                        opacity: 255,
                        scale: 1
                    }).start()
                }).start()
            },
            start: function() {
                cc.Mgr.UIMgr.angryUI = this
            },
            showUI: function() {
                cc.Mgr.PlatformController.ShowMoreGameBtn(!1), this.addNum = 0, cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv ? this.addNum = 0 : (cc.Mgr.game.level, cc.Mgr.Config.gameCheckLv, this.addNum = 1), this.desLbl.string = "Tăng thêm " + cc.Mgr.Config.angryPerTime + "s thời gian cuồng nộ!", cc.Mgr.AdsMgr.ShowBannerAds(1), this.node.width = cc.Mgr.Config.winSize.width, this.node.height = cc.Mgr.Config.winSize.height, this.refreshUI(), cc.Mgr.game.beAngryleftTime > 0 ? (this.angryLeftTimeLbl.string = cc.Mgr.Utils.FormatNumToTime(cc.Mgr.game.beAngryleftTime), this.schedule(this.cancelAngryCb, 1)) : this.angryLeftTimeLbl.string = "00:00", this.doTween(), Math.random() < cc.Mgr.Config.insertAdRatio && this.scheduleOnce(function() {
                    cc.Mgr.AdsMgr.ShowInsertAds(1)
                }, 1)
            },
            cancelAngryCb: function() {
                cc.Mgr.GameCenterCtrl.plantEnterAngryState(!0), cc.Mgr.game.beAngryleftTime -= 1, this.timeBar.progress = cc.Mgr.game.beAngryleftTime / (5 * cc.Mgr.Config.angryPerTime), cc.Mgr.game.beAngryleftTime <= 0 ? (cc.Mgr.GameCenterCtrl.plantEnterAngryState(!1), this.unschedule(this.cancelAngryCb), this.angryLeftTimeLbl.string = "00:00") : this.angryLeftTimeLbl.string = cc.Mgr.Utils.FormatNumToTime(cc.Mgr.game.beAngryleftTime)
            },
            adsGetMoreTime: function() {
                var e = this;
                cc.Mgr.AdsMgr.ShowVideoAds(1, function(t) {
                    0 == t && e.addMoreAngryTime()
                })
            },
            refreshUI: function() {
                this.gemLbl.string = cc.Mgr.Config.angryCostList[cc.Mgr.game.angryUseGemTime] + this.addNum, this.timeBar.progress = cc.Mgr.game.beAngryleftTime / (5 * cc.Mgr.Config.angryPerTime), this.angryLeftTimeLbl.string = cc.Mgr.Utils.FormatNumToTime(cc.Mgr.game.beAngryleftTime)
            },
            addMoreAngryTime: function() {
                this.unschedule(this.cancelAngryCb), cc.Mgr.game.beAngryleftTime += 30, cc.Mgr.game.beAngryleftTime > 5 * cc.Mgr.Config.angryPerTime && (cc.Mgr.game.beAngryleftTime = 5 * cc.Mgr.Config.angryPerTime), this.refreshUI(), this.schedule(this.cancelAngryCb, 1)
            },
            gemsGetMoreTime: function() {
                if (cc.Mgr.game.beAngryleftTime >= 5 * cc.Mgr.Config.angryPerTime) cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("max-angry-time-150"));
                else if (cc.Mgr.game.gems >= cc.Mgr.Config.angryCostList[cc.Mgr.game.angryUseGemTime] + this.addNum) {
                    cc.Mgr.game.gems -= cc.Mgr.Config.angryCostList[cc.Mgr.game.angryUseGemTime] + this.addNum, cc.Mgr.game.angryUseGemTime += 1, cc.Mgr.game.angryUseGemTime >= 2 && (cc.Mgr.game.angryUseGemTime = 2);
                    var e = cc.Mgr.TDEvent.CostGem + "Angry";
                    cc.Mgr.PlatformController.AldEventStatis(e, {
                        Cost: cc.Mgr.Config.angryCostList[cc.Mgr.game.angryUseGemTime]
                    }), this.addMoreAngryTime()
                } else cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoGems"))
            },
            closeUI: function() {
                cc.Mgr.PlatformController.ShowMoreGameBtn(!0), cc.Mgr.AdsMgr.HideBannerAd(), cc.Mgr.AudioMgr.playSFX("click"), this.unschedule(this.cancelAngryCb), cc.Mgr.UIMgr.InGameUI.onAngryUIClose(), this.node.active = !1
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    assetGetUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "d2458R2d01H1LjhfQcxR5Df", "assetGetUI");
        var n = e("MySprite"),
            o = e("AtlasType"),
            a = e("DataType"),
            s = e("MyEnum"),
            c = ["coins", "icon-coin", "diamondstack", "icon-gem", "egg_2", "prize-speedup"],
            r = cc.Class({
                extends: cc.Component,
                properties: {
                    titleLbl: cc.Label,
                    icon: n,
                    smallicon: n,
                    numLbl: cc.Label,
                    dragonParent: cc.Node,
                    num: 1,
                    titleNode: cc.Node,
                    btnNode: cc.Node,
                    coinNode: cc.Node,
                    effectNode: cc.Node,
                    numNode: cc.Node,
                    adsBtns: cc.Node,
                    onlyGetBtn: cc.Node,
                    shareBtns: cc.Node,
                    adsBtnLbl: cc.Label,
                    toggle: cc.Toggle,
                    closeBtnNode: cc.Node
                },
                doTween: function(e) {
                    var t = this;
                    if (this.titleNode.opacity = 0, this.titleNode.scale = 1, this.btnNode.opacity = 0, this.btnNode.scale = 1, this.dragonParent.opacity = 0, this.coinNode.opacity = 0, this.coinNode.scale = 1, this.effectNode.opacity = 0, this.effectNode.scale = .55, this.numNode.opacity = 0, "money" == e || "gem" == e) {
                        var i = 1;
                        "gem" == e && (i = 1.8), cc.tween(this.titleNode).to(.25, {
                            opacity: 255,
                            scale: 1.3
                        }).to(.1, {
                            scale: 1
                        }).call(function() {
                            cc.tween(t.coinNode).to(.25, {
                                opacity: 255,
                                scale: 1.3
                            }).to(.1, {
                                scale: i
                            }).call(function() {
                                cc.tween(t.btnNode).to(.25, {
                                    opacity: 255,
                                    scale: 1.3
                                }).to(.1, {
                                    scale: 1
                                }).call(function() {
                                    cc.tween(t.effectNode).to(.25, {
                                        opacity: 255,
                                        scale: .55
                                    }).call(function() {
                                        cc.tween(t.numNode).to(.2, {
                                            opacity: 255
                                        }).start()
                                    }).start()
                                }).start()
                            }).start()
                        }).start()
                    } else cc.tween(this.titleNode).to(.25, {
                        opacity: 255,
                        scale: 1.3
                    }).to(.1, {
                        scale: 1
                    }).call(function() {
                        cc.tween(t.dragonParent).to(.25, {
                            opacity: 255,
                            scale: 1
                        }).to(.1, {
                            scale: .75
                        }).call(function() {
                            cc.tween(t.btnNode).to(.25, {
                                opacity: 255,
                                scale: 1.3
                            }).to(.1, {
                                scale: 1
                            }).call(function() {
                                cc.tween(t.effectNode).to(.25, {
                                    opacity: 255,
                                    scale: .55
                                }).call(function() {
                                    cc.tween(t.numNode).to(.2, {
                                        opacity: 255
                                    }).start()
                                }).start()
                            }).start()
                        }).start()
                    }).start()
                },
                showUI: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                    this.num = t, this.callback = i, this.node.width = cc.Mgr.Config.winSize.width, this.node.height = cc.Mgr.Config.winSize.height, this.icon.node.active = !1, this.dragonParent.active = !1, this.numLbl.string = "x" + cc.Mgr.Utils.getNumStr(t), cc.log("+++++++++++++rtype+++++++++++++ " + e + "   " + t), this.onlyGetBtn.active = !1, this.adsBtns.active = !1, this.shareBtns.active = !1, this.titleLbl.string = cc.Mgr.Utils.getTranslation("buy-title"), this.rtype = e;
                    var r = this;
                    if (this.smallicon.node.scale = 1, "money" == e) this.icon.node.active = !0, this.icon.node.scale = 1.25, this.icon.setSprite(o.mainUI, c[0], 1), this.smallicon.setSprite(o.mainUI, c[1]), "sign" != n && "mission" != n ? ("qtt" == cc.Mgr.Config.platform || "uc" == cc.Mgr.Config.platform ? "turnTable" == n ? Math.random() < cc.Mgr.Config.turnTableAssetUseDouble - .2 ? this.adsBtns.active = !0 : this.onlyGetBtn.active = !0 : (this.adsBtns.active = !0, this.shareBtns.active = !1) : "turnTable" == n ? Math.random() < cc.Mgr.Config.turnTableAssetUseDouble - .2 ? Math.random() < cc.Mgr.Config.doubleUseShareRatio ? (this.adsBtns.active = !1, this.shareBtns.active = !0) : (this.adsBtns.active = !0, this.shareBtns.active = !1) : (this.adsBtns.active = !1, this.shareBtns.active = !1, this.onlyGetBtn.active = !0) : Math.random() < cc.Mgr.Config.turnTableAssetUseDouble ? Math.random() < cc.Mgr.Config.doubleUseShareRatio ? (this.adsBtns.active = !1, this.shareBtns.active = !0) : (this.adsBtns.active = !0, this.shareBtns.active = !1) : this.onlyGetBtn.active = !0, this.toggle.isChecked = !0, this.adsBtnLbl.string = "Nhận x2") : this.onlyGetBtn.active = !0;
                    else if ("gem" == e) this.icon.node.active = !0, this.icon.node.scale = 1.25, this.icon.setSprite(o.mainUI, c[2], 2), this.smallicon.setSprite(o.mainUI, c[3]), "sign" != n && "mission" != n ? ("qtt" == cc.Mgr.Config.platform || "uc" == cc.Mgr.Config.platform ? "turnTable" == n ? Math.random() < cc.Mgr.Config.turnTableAssetUseDouble ? this.adsBtns.active = !0 : this.onlyGetBtn.active = !0 : (this.adsBtns.active = !0, this.shareBtns.active = !1) : "turnTable" == n ? Math.random() < cc.Mgr.Config.turnTableAssetUseDouble - .1 ? Math.random() < cc.Mgr.Config.doubleUseShareRatio ? (this.adsBtns.active = !1, this.shareBtns.active = !0) : (this.adsBtns.active = !0, this.shareBtns.active = !1) : (this.adsBtns.active = !1, this.shareBtns.active = !1, this.onlyGetBtn.active = !0) : Math.random() < cc.Mgr.Config.turnTableAssetUseDouble ? Math.random() < cc.Mgr.Config.doubleUseShareRatio ? (this.adsBtns.active = !1, this.shareBtns.active = !0) : (this.adsBtns.active = !0, this.shareBtns.active = !1) : this.onlyGetBtn.active = !0, this.toggle.isChecked = !0, this.adsBtnLbl.string = "Nhận x2") : "mission" == n ? (this.adsBtns.active = !0, this.adsBtnLbl.string = "Nhận x2") : this.onlyGetBtn.active = !0;
                    else if ("plant" == e) {
                        this.onlyGetBtn.active = !0, this.numLbl.string = "x1", this.dragonParent.active = !0;
                        var l = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.PlantData, t);
                        cc.loader.loadRes("prefab/plantNew/" + l.prefab, function(e, t) {
                            e ? cc.error(e.message || e) : (r.plantNodeA = cc.instantiate(t), r.plantNodeA.parent = r.dragonParent, r.plantNodeA.group = s.NodeGroup.UI, r.plantNodeA.position = cc.v2(0, 0), r.plantNodeA.scale = 2, r.plantNodeA.getComponent(cc.CircleCollider).enabled = !1, r.plantNodeA.active = !0, r.plantNodeA.getComponent("plant").setShowDetailsInUI(2, "#ffffff", !0))
                        }), this.smallicon.setSprite(o.PlantHead, l.head), this.smallicon.node.scale = .55
                    } else "drone" == e ? (this.onlyGetBtn.active = !0, this.numLbl.string = "x4", this.dragonParent.active = !0, cc.loader.loadRes("prefab/flowerPot/HuaPen_v2", function(e, t) {
                        e ? cc.error(e.message || e) : (r.plantNodeA = cc.instantiate(t), r.plantNodeA.parent = r.dragonParent, r.plantNodeA.group = s.NodeGroup.UI, r.plantNodeA.position = cc.v2(0, -45), r.plantNodeA.getComponent(cc.BoxCollider).enabled = !1, r.plantNodeA.active = !0, r.plantNodeA.getComponent("flowerPot").setShowDetailsInUI(3, "#ffffff", !0))
                    }), this.smallicon.setSprite(o.mainUI, c[4]), this.smallicon.node.scale = .8) : "speedup" == e && (this.onlyGetBtn.active = !0, this.numLbl.string = t + "s", this.dragonParent.active = !0, cc.loader.loadRes("prefab/uiPrefab/angryAni", function(e, t) {
                        e ? cc.error(e.message || e) : (r.plantNodeA = cc.instantiate(t), r.plantNodeA.parent = r.dragonParent, r.plantNodeA.group = s.NodeGroup.UI, r.plantNodeA.position = cc.v2(0, 0), r.plantNodeA.active = !0, r.plantNodeA.scale = 2.5)
                    }), this.smallicon.setSprite(o.mainUI, c[5]));
                    this.closeBtnNode.opacity = 0, this.doTween(e), this.scheduleOnce(this.setCloseBtnIn, 1.5), cc.Mgr.AdsMgr.ShowBannerAds(1)
                },
                setCloseBtnIn: function() {
                    this.closeBtnNode.runAction(cc.fadeIn(3))
                },
                adsGetDouble: function() {
                    if (this.toggle.isChecked) {
                        var e = this;
                        cc.Mgr.AdsMgr.ShowVideoAds(2, function(t) {
                            0 == t && e.getDouble()
                        })
                    } else this.closeUI()
                },
                toggleCheck: function() {
                    this.toggle.isChecked ? this.adsBtnLbl.string = "Nhận x2" : this.adsBtnLbl.string = "Nhận luôn"
                },
                shareGet: function() {
                    var e = this;
                    cc.Mgr.PlatformController.ShareToFriend(1, function() {
                        e.getDouble()
                    })
                },
                getDouble: function() {
                    this.plantNodeA && this.plantNodeA.destroy(), "gem" == this.rtype && (cc.Mgr.game.gems += 2 * this.num, cc.Mgr.UIMgr.showGemsEffect()), "money" == this.rtype && (cc.Mgr.game.money += 2 * this.num, cc.Mgr.UIMgr.showJibEffect()), null != this.callback && "function" == typeof this.callback && this.callback(), null != cc.Mgr.UIMgr.turnTableUINode && 1 == cc.Mgr.UIMgr.turnTableUINode.active && cc.Mgr.UIMgr.turnTableUI.showBtns(), cc.Mgr.AdsMgr.HideBannerAd(), this.node.active = !1
                },
                closeUI: function() {
                    cc.Mgr.AudioMgr.playSFX("click");
                    this.plantNodeA && this.plantNodeA.destroy(), this.unschedule(this.setCloseBtnIn), "gem" == this.rtype && (cc.Mgr.game.gems += this.num, cc.Mgr.UIMgr.showGemsEffect()), "money" == this.rtype && (cc.Mgr.game.money += this.num, cc.Mgr.UIMgr.showJibEffect()), cc.Mgr.AdsMgr.HideBannerAd(), null != this.callback && "function" == typeof this.callback && this.callback(), null != cc.Mgr.UIMgr.turnTableUINode && 1 == cc.Mgr.UIMgr.turnTableUINode.active && cc.Mgr.UIMgr.turnTableUI.showBtns(), this.node.active = !1
                }
            });
        t.exports = r, cc._RF.pop()
    }, {
        AtlasType: "AtlasType",
        DataType: "DataType",
        MyEnum: "MyEnum",
        MySprite: "MySprite"
    }],
    attackEffect: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "12afeXFtapOmJg/9+UZnoXq", "attackEffect");
        e("EffectType");
        var n = cc.Class({
            extends: cc.Component,
            properties: {
                dragon: dragonBones.ArmatureDisplay
            },
            start: function() {
                this.dragon.on(dragonBones.EventObject.COMPLETE, this.onAnimComplete, this)
            },
            onAnimComplete: function() {
                this.node.active = !1
            },
            playAnimation: function() {
                this.dragon.playAnimation("newAnimation", 1)
            }
        });
        t.exports = n, cc._RF.pop()
    }, {
        EffectType: "EffectType"
    }],
    bigResult: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "628bfJlNBlIuKAY/JH/YCGx", "bigResult");
        var n = e("MyEnum"),
            o = e("AtlasType"),
            a = e("MySprite"),
            s = cc.Class({
                extends: cc.Component,
                properties: {
                    sucNode: cc.Node,
                    failNode: cc.Node,
                    sucDragon: dragonBones.ArmatureDisplay,
                    failDragon: dragonBones.ArmatureDisplay,
                    coinNode: cc.Node,
                    coinLbl: cc.Label,
                    claimNode: cc.Node,
                    adsClaimNode: cc.Node,
                    rebornNode: cc.Node,
                    timeLbl: cc.Label,
                    adsBtnLbl: cc.Label,
                    adsSp: a,
                    toggle: cc.Toggle,
                    togDesLbl: cc.Label
                },
                show: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    this.coin = t, this.sucNode.active = e, this.failNode.active = !e, this.success = e, this.getType = "byAds", this.coinNode.active = !1, this.claimNode.active = !1, this.rebornNode.active = !1, this.toggle.node.active = !1, this.adsClaimNode.active = !1, this.timeLbl.node.active = !1;
                    var i = cc.Mgr.Utils.getNumStr(t);
                    this.coinLbl.string = "+" + i, this.toggle.isChecked = !0, cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv ? (this.adsBtnLbl.string = "Nhận x2", this.togDesLbl.string = "Xem QC và nhận x2") : cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 8 ? (this.adsBtnLbl.string = "Nhận x5", this.togDesLbl.string = "Xem QC nhận x5") : (this.adsBtnLbl.string = "Nhận x8", this.togDesLbl.string = "Xem QC nhận x8"), e ? (cc.Mgr.AudioMgr.playSFX(n.AudioType.success1), this.sucDragon.playAnimation("newAnimation", 1)) : (cc.Mgr.AudioMgr.playSFX(n.AudioType.fail), this.failDragon.playAnimation("newAnimation", 1)), this.scheduleOnce(function() {
                        this.onAnimComplete()
                    }, .5)
                },
                start: function() {},
                toggleCheck: function() {
                    this.toggle.isChecked ? cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv ? this.adsBtnLbl.string = "Nhận x2" : cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 8 ? this.adsBtnLbl.string = "Nhận x5" : this.adsBtnLbl.string = "Nhận x8" : this.adsBtnLbl.string = "Nhận luôn"
                },
                onAnimComplete: function() {
                    this.count = 5, this.callback = function() {
                        0 == this.count && (this.unschedule(this.callback), this.node.active = !1, cc.Mgr.game.money += this.coin, cc.Mgr.UIMgr.showJibEffect()), this.timeLbl.string = "00:0" + this.count, this.count--
                    }, this.timeLbl.node.active = !0, this.coinNode.active = !0, this.toggle.isChecked = !0, cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv ? (this.adsBtnLbl.string = "Nhận x2", this.togDesLbl.string = "Xem QC và nhận x2") : cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 8 ? (this.adsBtnLbl.string = "Nhận x5", this.togDesLbl.string = "Xem QC nhận x5") : (this.adsBtnLbl.string = "Nhận x8", this.togDesLbl.string = "Xem QC nhận x8");
                    var e = Math.random();
                    this.adsSp.spriteFrame = cc.Mgr.AtlasMgr.getSpriteFrame(o.mainUI, "icon-ad"), "qtt" != cc.Mgr.Config.platform && "uc" != cc.Mgr.Config.platform && e < cc.Mgr.Config.bigResultUseShare && (this.adsSp.spriteFrame = cc.Mgr.AtlasMgr.getSpriteFrame(o.mainUI, "share"), this.getType = "byShare"), this.claimNode.active = !0, this.success ? this.adsClaimNode.active = !0 : cc.Mgr.game.rebornTimer % 2 == 1 ? this.rebornNode.active = !0 : this.adsClaimNode.active = !0, this.schedule(this.callback, 1)
                },
                reScheduleCallback: function() {
                    this.schedule(this.callback, 1)
                },
                rebornToBoosWave: function() {
                    this.unschedule(this.callback);
                    var e = this;
                    cc.Mgr.AdsMgr.ShowVideoAds(8, function(t) {
                        0 == t ? (cc.Mgr.GameCenterCtrl.unscheduleCreateCallBack(!1), cc.Mgr.game.beAngryleftTime += 30, cc.Mgr.game.beAngryleftTime > 150 && (cc.Mgr.game.beAngryleftTime = 150), cc.Mgr.game.rebornTimer += 1, cc.Mgr.UIMgr.showBossComing(), cc.Mgr.UIMgr.InGameUI.onAngryUIClose(), cc.Mgr.GameCenterCtrl.rebornToBossLvWave(), cc.Mgr.game.money += e.coin, cc.Mgr.UIMgr.showJibEffect(), e.closeUI()) : e.reScheduleCallback()
                    })
                },
                closeUI: function() {
                    this.unscheduleAllCallbacks(), this.node.active = !1
                },
                adsClaim: function() {
                    if (this.toggle.isChecked) {
                        var e = this;
                        "byAds" == this.getType ? cc.Mgr.AdsMgr.ShowVideoAds(3, function(t) {
                            0 == t && e.doubleGet()
                        }) : cc.Mgr.PlatformController.ShareToFriend(1, function() {
                            e.doubleGet()
                        })
                    } else this.claim()
                },
                doubleGet: function() {
                    this.unschedule(this.callback), cc.Mgr.GameCenterCtrl.unscheduleCreateCallBack();
                    var e = 2;
                    e = cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv ? 2 : cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 8 ? 5 : 8, cc.Mgr.game.money += e * this.coin, cc.Mgr.UIMgr.showJibEffect(), cc.Mgr.game.rebornTimer += 1, this.node.active = !1
                },
                claim: function() {
                    cc.Mgr.AudioMgr.playSFX("click"), this.unschedule(this.callback), cc.Mgr.GameCenterCtrl.unscheduleCreateCallBack(), cc.Mgr.game.rebornTimer += 1, cc.Mgr.game.money += this.coin, cc.Mgr.UIMgr.showJibEffect(), this.node.active = !1
                }
            });
        t.exports = s, cc._RF.pop()
    }, {
        AtlasType: "AtlasType",
        MyEnum: "MyEnum",
        MySprite: "MySprite"
    }],
    bossComing: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "d56ad/M+fdPwrBhL8ciRqVq", "bossComing");
        var n = cc.Class({
            extends: cc.Component,
            properties: {
                dragon: dragonBones.ArmatureDisplay,
                box: cc.Node
            },
            start: function() {
                this.box.width = cc.Mgr.Config.winSize.width, this.box.height = cc.Mgr.Config.winSize.height, this.dragon.on(dragonBones.EventObject.COMPLETE, this.onAnimComplete, this)
            },
            onAnimComplete: function() {
                this.node.active = !1
            },
            playAnimation: function() {
                this.box.opacity = 150, cc.tween(this.box).to(.2, {
                    opacity: 255
                }).to(.2, {
                    opacity: 150
                }).to(.2, {
                    opacity: 255
                }).to(.2, {
                    opacity: 150
                }).start(), this.dragon.playAnimation("newAnimation", 1)
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    bullet: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "000862xnGpC8JWw9nOPnrjL", "bullet");
        var n = e("MyEnum"),
            o = cc.Class({
                extends: cc.Component,
                properties: {
                    speed: .2,
                    power: 100,
                    Sp: cc.Sprite,
                    Atlas: cc.SpriteAtlas,
                    tuowei: cc.Sprite,
                    mask: cc.Node,
                    bulletSkill: 0
                },
                initData: function(e, t) {
                    this.zombieNode = t, this.speed = e.spd, this.power = e.power, this.Sp.spriteFrame = this.Atlas.getSpriteFrame(e.spName), this.tuowei.node.color = e.color, this.node.position = e.pos, this.bulletType = n.BulletType.Straight;
                    var i = e.skill.split("|");
                    this.bulletSkill = 0, Math.random() <= parseInt(i[1]) / 100 && (this.bulletSkill = parseInt(i[0])), this.isNeedMask = 1 == e.isNeedMask, this.isNeedTrail = 1 == e.isNeedTrail, this.tuowei.node.width = e.bulletHeight, this.mask.position = cc.v2(0, 0);
                    var o = this.Sp.node.width - e.bulletNearLeftDis;
                    this.mask.x -= o;
                    var a = this.node.position;
                    a.x += this.Sp.node.width / 2;
                    o = t.getComponent("zombie").attackEffect.node.position.x;
                    var s = t.getComponent("zombie").attackEffect.node.position.y,
                        c = cc.v2(t.x + o, t.y + s);
                    this.node.rotation = cc.Mgr.Utils.calculateAngle(c, a) + 90;
                    var r = cc.Mgr.Utils.calculateAngle(a, c),
                        l = Math.cos(2 * Math.PI / 360 * (90 - r)) * this.Sp.node.height,
                        h = Math.sin(2 * Math.PI / 360 * (90 - r)) * this.Sp.node.height;
                    this.node.x += l, this.node.y += h, this.bulletType == n.BulletType.Straight ? (this.schedule(function() {
                        this.shootOut(t)
                    }, .15, cc.macro.REPEAT_FOREVER, .001), this.isNeedTrail ? (this.tuowei.node.position = cc.v2(90, 0), cc.tween(this.tuowei.node).to(.3, {
                        position: cc.v2(0, 0)
                    }).start()) : this.tuowei.node.position = cc.v2(0, 0)) : (this.isNeedTrail ? (this.tuowei.node.position = cc.v2(90, 0), cc.tween(this.tuowei.node).to(.1, {
                        position: cc.v2(40, 0)
                    }).to(.1, {
                        position: cc.v2(80, 0)
                    }).to(.3, {
                        position: cc.v2(0, 0)
                    }).start()) : this.tuowei.node.position = cc.v2(0, 0), this.shootOut(t)), this.tuowei.node.active = this.isNeedTrail
                },
                shootOut: function(e) {
                    var t = this.node.position,
                        i = e.getComponent("zombie").attackEffect.node.position.x,
                        o = e.getComponent("zombie").attackEffect.node.position.y,
                        a = cc.v2(e.x + i, e.y + o);
                    this.node.active = !0, this.node.rotation = cc.Mgr.Utils.calculateAngle(a, t) + 90, this.bulletType == n.BulletType.Straight ? this.shootOutWithStraight(t, a) : this.shootOutWithBezier(t, a)
                },
                shootOutWithBezier: function(e, t) {
                    var i = this;
                    this.node.stopAllActions();
                    var n = cc.v2((e.x + t.x) / 2, (e.y + t.y) / 2),
                        o = (n = cc.v2((e.x + n.x) / 2, (e.y + n.y) / 2), cc.Mgr.Utils.calculateAngle(e, t)),
                        a = cc.Mgr.Utils.pDistance(e, t) / this.speed;
                    if (o > -90 && o < 10) this.shootOutWithStraight(e, t);
                    else {
                        if (e.x > t.x) var s = -100 * Math.cos(2 * Math.PI / 360 * (90 - o + 90)),
                            c = -100 * Math.sin(2 * Math.PI / 360 * (90 - o + 90));
                        else s = 100 * Math.cos(2 * Math.PI / 360 * (90 - o + 90)), c = 100 * Math.sin(2 * Math.PI / 360 * (90 - o + 90));
                        n.x += s, n.y += c;
                        var r = [e, n, t],
                            l = cc.bezierTo(a, r);
                        this.node.runAction(cc.sequence(l, cc.callFunc(function() {
                            i.zombieNode.activeInHierarchy && (i.zombieNode.getComponent("zombie").beAttack(i), i.ObBackToPool())
                        })));
                        var h = e,
                            g = e;
                        this.schedule(function() {
                            g = this.node.position;
                            var e = cc.Mgr.Utils.calculateAngle(g, h) + 90;
                            this.node.rotation = e, h = g
                        }, .01)
                    }
                },
                shootOutWithStraight: function(e, t) {
                    var i = this;
                    this.node.stopAllActions();
                    var n = cc.Mgr.Utils.pDistance(e, t) / this.speed,
                        o = cc.moveTo(n, t);
                    this.node.runAction(cc.sequence(o, cc.callFunc(function() {
                        i.zombieNode.activeInHierarchy && (i.zombieNode.getComponent("zombie").beAttack(i), i.ObBackToPool())
                    })))
                },
                ObBackToPool: function() {
                    this.node.stopAllActions(), this.unscheduleAllCallbacks(), cc.Mgr.BulletPool.ObBackToPool(this.node)
                },
                update: function() {
                    this.zombieNode && this.zombieNode.activeInHierarchy || this.ObBackToPool()
                }
            });
        t.exports = o, cc._RF.pop()
    }, {
        MyEnum: "MyEnum"
    }],
    coinBonus: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "87a6bYO7BhKz5NC84K0DolW", "coinBonus");
        var n = e("DataType"),
            o = cc.Class({
                extends: cc.Component,
                properties: {
                    numLbl: cc.Label,
                    proBar: cc.ProgressBar,
                    coinNum: 0,
                    durTime: 0,
                    clickTimes: 1
                },
                start: function() {
                    this.clickTimes = 1, this.init(!0)
                },
                init: function() {
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.coinNum = 0, this.numLbl.string = cc.Mgr.Utils.getNumStr(this.coinNum), this.durTime = 0, this.proBar.progress = 0, this.schedule(this.caculateNum, .1)
                },
                caculateNum: function() {
                    if (this.durTime += 1, this.durTime < 100) {
                        var e = cc.Mgr.Utils.getNumStr(this.coinNum);
                        this.numLbl.string = e, this.proBar.progress = this.durTime / 100
                    } else {
                        var t = cc.Mgr.game.level + "_1",
                            i = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(n.LevelData, t),
                            o = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(n.ZombieData, i.zombieID1).money / cc.Mgr.Config.onlineCoinRatio,
                            a = 1;
                        this.clickTimes % 3 == 0 && (a = 1.2), this.durTime % 100 == 0 && 0 != this.durTime && (this.coinNum += Math.floor(o * a)), this.durTime = 0;
                        e = cc.Mgr.Utils.getNumStr(this.coinNum);
                        this.numLbl.string = e, this.proBar.progress = 0
                    }
                },
                getCoin: function() {
                    if (!(this.coinNum <= 0)) {
                        if (cc.Mgr.game.coinBonusTime >= 3)
                            if (Math.random() <= .3 && cc.Mgr.game.doubleCoinStateLeftTime <= 0) {
                                var e = {
                                    forWhat: "doubleCoin"
                                };
                                cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 6 ? e.des = "Dùng x2 vàng diệt quái?" : cc.Mgr.game.level < cc.Mgr.Config.gameCheckLv + 14 ? e.des = "Dùng x2 vàng diệt quái?" : e.des = "Dùng x8 vàng diệt quái?", cc.Mgr.UIMgr.openTipUI(e)
                            } cc.Mgr.game.coinBonusTime += 1, this.unschedule(this.caculateNum), this.clickTimes += 1, cc.Mgr.game.money += this.coinNum, cc.Mgr.UIMgr.showJibEffect(), this.init(!1)
                    }
                }
            });
        t.exports = o, cc._RF.pop()
    }, {
        DataType: "DataType"
    }],
    coinFly: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "ed9d5mbKIFGBJ8c+nKAcyFh", "coinFly");
        var n = cc.Class({
            extends: cc.Component,
            properties: {
                numLbl: cc.Label
            },
            setData: function(e) {
                this.numLbl.string = "+" + e
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    db_zombie: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "22d9asu/gNEuoVZVF55gNfx", "db_zombie");
        var n = cc.Class({
            name: "db_zombie",
            statics: {
                dataLen: 160,
                dataHead: '["id", "hp", "spd", "money", "prefab", "gender"]',
                data: '{"1":[1,57,0.862529,137,"Z_Lan","male"],"2":[2,163,0.90565545,170,"Z_Hong","male"],"3":[3,413,0.9509382225,432,"Z_WaiMai","male"],"4":[4,705,0.998485133625,736,"Z_JiuGui","male"],"5":[5,1166,1.04840939081,1218,"Z_QuanJiShou","male"],"6":[6,1636,1.10082985969,1709,"Z_LanQiu","male"],"7":[7,2470,1.15587135329,2580,"Z_ZuQiu","male"],"8":[8,3657,1.21366492019,3820,"Z_BangQiu","male"],"9":[9,8104,1.27434816625,8467,"Z_BaoGongTou","male"],"10":[10,17947,1.33806557522,18751,"Z_BaoLinQiu","female"],"11":[11,39752,1.40496885378,41533,"Z_HuaBan","female"],"12":[12,88056,1.47521729581,92000,"Z_ChuanZhang","male"],"13":[13,195038,1.54897816091,203774,"Z_XiaoFangYuan","male"],"14":[14,419648,1.57995772459,438444,"Z_HongShu","male"],"15":[15,902906,1.61155687837,943347,"Z_TieGuo","male"],"16":[16,1942629,1.64378801629,2029640,"Z_LaoTaiTai2","female"],"17":[17,4179527,1.67666377692,4366728,"Z_XiuLiGong","male"],"18":[18,8991989,1.71019705254,9394740,"Z_ZhuGuai","male"],"19":[19,19345313,1.74440099316,20211789,"Z_ZiXingChe","male"],"20":[20,41618614,1.77928901264,43482712,"Z_GongWuYuan","male"],"21":[21,89534672,1.81487479372,93544930,"Z_ShuiShou","male"],"22":[22,192613493,1.85117228909,201240651,"Z_BoShi","male"],"23":[23,414356456,1.88819573453,432915482,"Z_Lee","male"],"24":[24,891360763,1.92595964995,931284812,"Z_Dog","dog"],"25":[25,1917454133,1.92595964995,2003336903,"Z_JingCha","male"],"26":[26,4124664141,1.92595964995,4309407848,"Z_LaoTaiTai","female"],"27":[27,8872467162,1.92595964995,9269864966,"Z_ChuShi","male"],"28":[28,19085013790,1.92595964995,19939831558,"Z_HeiYanQuan","male"],"29":[29,41051864668,1.92595964995,42890577687,"Z_Bao","male"],"30":[30,88301015025,1.92595964995,92256017488,"Z_XiaoHai","male"],"31":[31,189140774188,1.92595964995,197612389464,"Z_DaGe","male"],"32":[32,405139538313,1.92595964995,423285738234,"Z_XiFu","male"],"33":[33,867808891065,1.92595964995,906678051296,"Z_XueSheng","female"],"34":[34,1858846644666,1.92595964995,1942104385880,"Z_QueTui","male"],"35":[35,3981649512877,1.92595964995,4159987594558,"Z_LvJuRen","male"],"36":[36,8528693256581,1.92595964995,8910693427544,"Z_TuDou","male"],"37":[37,18268460955598,1.92595964995,19086705321800,"Z_NvJiangShi","female"],"38":[38,39131043366891,1.92595964995,40883722799296,"Z_YanJing2","male"],"39":[39,83818694891880,1.92595964995,87572934236092,"Z_YanJing","male"],"40":[40,179539644458409,1.92595964995,187581225133709,"Z_NvWu","female"],"41":[41,384573918429912,1.92595964995,401798984236404,"Z_PangZi","male"],"42":[42,823757333276871,1.92595964995,860653424234377,"Z_Hong","male"],"43":[43,1764488207879050,1.92595964995,1843519634710030,"Z_WaiMai","male"],"44":[44,3779533741276920,1.92595964995,3948819057548880,"Z_JiuGui","male"],"45":[45,8095761273815170,1.92595964995,8458370421269710,"Z_QuanJiShou","male"],"46":[46,17341120648512100,1.92595964995,18117829442359700,"Z_LanQiu","male"],"47":[47,37144680429112896,1.92595964995,38808390665534496,"Z_ZuQiu","male"],"48":[48,79563905479159904,1.92595964995,83127572805574896,"Z_BangQiu","male"],"49":[49,170425885536360000,1.92595964995,178059260949540992,"Z_BaoGongTou","male"],"50":[50,365052246818883968,1.92595964995,381402936953918016,"Z_BaoLinQiu","female"],"51":[51,781941912686050048,1.92595964995,816965090955292032,"Z_HuaBan","female"],"52":[52,1674919576973519872,1.92595964995,1749939224826240000,"Z_ChuanZhang","male"],"53":[53,3587677733877279744,1.92595964995,3748369819577800192,"Z_XiaoFangYuan","male"],"54":[54,7684805705965119488,1.92595964995,8029008153535639552,"Z_HongShu","male"],"55":[55,16460853822177300480,1.92595964995,17198135464873299968,"Z_TieGuo","male"],"56":[56,35259148887103799296,1.92595964995,36838406165758701568,"Z_LaoTaiTai2","female"],"57":[57,75525096916176306176,1.92595964995,78907866007055106048,"Z_XiuLiGong","male"],"58":[58,161774757594450001920,1.92595964995,169020648987112013824,"Z_ZhuGuai","male"],"59":[59,346521530767310979072,1.92595964995,362042230130394005504,"Z_ZiXingChe","male"],"60":[60,742249118903579967488,1.92595964995,775494456939304058880,"Z_GongWuYuan","male"],"101":[101,1567,0.575019333672,1637,"Z_Lan","male"],"102":[102,2351,0.6037703,2456,"Z_Hong","male"],"103":[103,4231,0.633958815,4421,"Z_WaiMai","male"],"104":[104,7680,0.66565675575,8024,"Z_JiuGui","male"],"105":[105,14576,0.698939593538,15229,"Z_QuanJiShou","male"],"106":[106,29152,0.733886573468,30458,"Z_LanQiu","male"],"107":[107,61754,0.770580902192,64520,"Z_ZuQiu","male"],"108":[108,137144,0.809109946794,143287,"Z_BangQiu","male"],"109":[109,303912,0.84956544383,317524,"Z_BaoGongTou","male"],"110":[110,673026,0.892043716478,703171,"Z_BaoLinQiu","female"],"111":[111,1490720,0.93664590286,1557490,"Z_HuaBan","female"],"112":[112,3302124,0.983478197546,3450026,"Z_ChuanZhang","male"],"113":[113,7313952,1.03265210727,7641543,"Z_XiaoFangYuan","male"],"114":[114,15736814,1.05330514905,16441666,"Z_HongShu","male"],"115":[115,33859002,1.07437125293,35375547,"Z_TieGuo","male"],"116":[116,72848617,1.09585867786,76111506,"Z_LaoTaiTai2","female"],"117":[117,156732268,1.11777585128,163752306,"Z_XiuLiGong","male"],"118":[118,337199614,1.14013136802,352302785,"Z_ZhuGuai","male"],"119":[119,725449247,1.16293399544,757942119,"Z_ZiXingChe","male"],"120":[120,1553912289,1.23411485973,1623512021,"Z_GongWuYuan","male"],"121":[121,3357550213,1.20991652847,3507934887,"Z_ShuiShou","male"],"122":[122,7223005995,1.23411485973,7546524433,"Z_BoShi","male"],"123":[123,15538367121,1.25879715703,16234330585,"Z_Lee","male"],"124":[124,33426028646,1.28397309997,34923180469,"Z_Dog","dog"],"125":[125,71904529998,1.28397309997,75125133896,"Z_JingCha","male"],"126":[126,154674905317,1.28397309997,161602794327,"Z_LaoTaiTai","female"],"127":[127,332717518589,1.28397309997,347619936247,"Z_ChuShi","male"],"128":[128,715688017161,1.28397309997,747743683449,"Z_HeiYanQuan","male"],"129":[129,1539444925073,1.28397309997,1608396663267,"Z_Bao","male"],"130":[130,3311288063449,1.28397309997,3459600655811,"Z_XiaoHai","male"],"131":[131,7092779031898,1.28397309997,7410464604736,"Z_DaGe","male"],"132":[132,15192732686449,1.28397309997,15873215183475,"Z_XiFu","male"],"133":[133,32542833414490,1.28397309997,34000426923126,"Z_XueSheng","female"],"134":[134,69706749174357,1.28397309997,72828914469877,"Z_QueTui","male"],"135":[135,149311856732109,1.28397309997,155999534795140,"Z_LvJuRen","male"],"136":[136,319825997120177,1.28397309997,334151003531189,"Z_TuDou","male"],"137":[137,685067285831420,1.28397309997,715751449563808,"Z_NvJiangShi","female"],"138":[138,1467414126250900,1.28397309997,1533139604965670,"Z_YanJing2","male"],"139":[139,3143201058429420,1.28397309997,3283985033836460,"Z_YanJing","male"],"140":[140,6732736667155810,1.28397309997,7034295942477690,"Z_NvWu","female"],"141":[141,14421521941047700,1.28397309997,15067461908787200,"Z_PangZi","male"],"142":[142,30890899997724100,1.28397309997,32274503408622100,"Z_Hong","male"],"143":[143,66168307795125000,1.28397309997,69131986301268496,"Z_WaiMai","male"],"144":[144,141732515297158000,1.28397309997,148080714657316992,"Z_JiuGui","male"],"145":[145,303591047766512000,1.28397309997,317188890795972992,"Z_QuanJiShou","male"],"146":[146,650292024315868032,1.28397309997,679418604084974976,"Z_LanQiu","male"],"147":[147,1392925516084590080,1.28397309997,1455314649950020096,"Z_ZuQiu","male"],"148":[148,2983646455453190144,1.28397309997,3117283980192929792,"Z_BangQiu","male"],"149":[149,6390970707580739584,1.28397309997,6677222285573260288,"Z_BaoGongTou","male"],"150":[150,13689459255637899264,1.28397309997,14302610135697899520,"Z_BaoLinQiu","female"],"151":[151,29322821725576499200,1.28397309997,30636190910664998912,"Z_HuaBan","female"],"152":[152,62809484136184799232,1.28397309997,65622720930644402176,"Z_ChuanZhang","male"],"153":[153,134537915019708006400,1.28397309997,140563868233440002048,"Z_XiaoFangYuan","male"],"154":[154,288180213972213989376,1.28397309997,301087805756029009920,"Z_HongShu","male"],"155":[155,617282018328482021376,1.28397309997,644930079929414057984,"Z_TieGuo","male"],"156":[156,1322218083259610038272,1.28397309997,1381440231208799961088,"Z_LaoTaiTai2","female"],"157":[157,2832191134342080102400,1.28397309997,2959044975249260019712,"Z_XiuLiGong","male"],"158":[158,6066553409760740245504,1.28397309997,6338274336983910187008,"Z_ZhuGuai","male"],"159":[159,12994557403707499085824,1.28397309997,13576583629819500036096,"Z_ZiXingChe","male"],"160":[160,27834341958741498265600,1.28397309997,29081042135073498857472,"Z_GongWuYuan","male"]}'
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    dieSmoke: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "34c08P1qOFNJZ2gubC9oYrD", "dieSmoke");
        var n = e("EffectType"),
            o = cc.Class({
                extends: cc.Component,
                properties: {
                    dragon: dragonBones.ArmatureDisplay
                },
                start: function() {
                    this.dragon.on(dragonBones.EventObject.COMPLETE, this.onAnimComplete, this)
                },
                onAnimComplete: function() {
                    null != this.callback && this.callback(), cc.Mgr.EffectMgr.ObBackToPool(this.node, n.DieSmoke)
                },
                playAnimation: function(e) {
                    this.callback = null, this.callback = e, this.dragon.playAnimation("newAnimation", 1)
                }
            });
        t.exports = o, cc._RF.pop()
    }, {
        EffectType: "EffectType"
    }],
    discountUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "d202dl0kMpAf6zjlWXbxsIi", "discountUI");
        var n = e("Event"),
            o = e("AtlasType"),
            a = e("MySprite"),
            s = cc.Class({
                extends: cc.Component,
                properties: {
                    discountNumLbl: cc.Label,
                    desLbl: cc.Label,
                    topLbl: cc.Label,
                    btnSp: a
                },
                showUI: function() {
                    Math.random() < cc.Mgr.Config.insertAdRatio && this.scheduleOnce(function() {
                        cc.Mgr.AdsMgr.ShowInsertAds(1)
                    }, .5), this.getType = "ADS", this.btnSp.spriteFrame = cc.Mgr.AtlasMgr.getSpriteFrame(o.mainUI, "icon-ad"), "tt" != cc.Mgr.PlatformController.platform && "wx" != cc.Mgr.PlatformController.platform && "qq" != cc.Mgr.PlatformController.platform && "pc" != cc.Mgr.PlatformController.platform || Math.random() < cc.Mgr.Config.discountUseShareRatio && (this.btnSp.spriteFrame = cc.Mgr.AtlasMgr.getSpriteFrame(o.mainUI, "share"), this.getType = "SHARE"), cc.Mgr.PlatformController.ShowMoreGameBtn(!1), cc.Mgr.AdsMgr.ShowBannerAds(2);
                    var e = Math.ceil((cc.Mgr.game.discountBeActiveTimes + 1) / 3);
                    e >= 3 && (e = 3), this.discountNumLbl.string = "Số lượng giảm giá có sẵn - " + cc.Mgr.Config.discountLvConf[e] + " hạng 2";
                    var t = 10 - e;
                    this.topLbl.string = "Mua Mengmeng để tận hưởng - " + t + " giảm giá";
                    var i = 3 * e - cc.Mgr.game.discountBeActiveTimes;
                    this.desLbl.string = e >= 3 ? "Đã có giảm giá cao nhất": "Kích hoạt lại " + i + " lần để được giảm giá nhiều hơn"
                },
                clickAds: function() {
                    var e = this;
                    "ADS" == this.getType ? cc.Mgr.AdsMgr.ShowVideoAds(4, function(t) {
                        0 == t && (cc.Mgr.game.discountBeActiveTimes += 1, cc.Mgr.game.discountLv = Math.ceil(cc.Mgr.game.discountBeActiveTimes / 3), cc.Mgr.game.discountLv >= 3 && (cc.Mgr.game.discountLv = 3), cc.Mgr.game.discountLeftTimes = cc.Mgr.Config.discountLvConf[cc.Mgr.game.discountLv], cc.Mgr.UIMgr.InGameUI.refreshDiscountState(!0), cc.director.GlobalEvent.emit(n.DiscountStateChange, {
                            flag: !0
                        }), e.closeUI())
                    }) : cc.Mgr.PlatformController.ShareToFriend(1, function() {
                        cc.Mgr.game.discountBeActiveTimes += 1, cc.Mgr.game.discountLv = Math.ceil(cc.Mgr.game.discountBeActiveTimes / 3), cc.Mgr.game.discountLv >= 3 && (cc.Mgr.game.discountLv = 3), cc.Mgr.game.discountLeftTimes = cc.Mgr.Config.discountLvConf[cc.Mgr.game.discountLv], cc.Mgr.UIMgr.InGameUI.refreshDiscountState(!0), cc.director.GlobalEvent.emit(n.DiscountStateChange, {
                            flag: !0
                        }), e.closeUI()
                    })
                },
                closeUI: function() {
                    cc.Mgr.PlatformController.ShowMoreGameBtn(!0), cc.Mgr.AudioMgr.playSFX("click"), cc.Mgr.AdsMgr.HideBannerAd(), this.node.active = !1
                }
            });
        t.exports = s, cc._RF.pop()
    }, {
        AtlasType: "AtlasType",
        Event: "Event",
        MySprite: "MySprite"
    }],
    flowerPotManage: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "97b38ITPMpKiIEavRt8jNVV", "flowerPotManage");
        var n = e("MyEnum"),
            o = e("DataType"),
            a = cc.Class({
                extends: cc.Component,
                properties: {
                    airDropFlowerFotPre: cc.Prefab,
                    droneFlowerFotPre: cc.Prefab,
                    turnTableAndBuyFlowerFotPre: cc.Prefab
                },
                statics: {
                    instance: null
                },
                init: function(e) {
                    console.log("\u82b1\u76c6\u9884\u8bbe\u5f00\u59cb\u52a0\u8f7d");
                    var t = this;
                    this.loadedPrefabNum = 3, cc.loader.loadRes("prefab/flowerPot/HuaPen_v1", function(i, n) {
                        i ? cc.error(i.message || i) : (cc.log("Result should be a prefab HuaPen: " + (n instanceof cc.Prefab) + ",name = " + n.name), t.loadedPrefabNum--, 0 == t.loadedPrefabNum && (console.log("\u82b1\u76c6\u9884\u8bbe\u52a0\u8f7d\u5b8c\u6210 = 1"), e()), t.airDropFlowerFotPre = n)
                    }), cc.loader.loadRes("prefab/flowerPot/HuaPen_v2", function(i, n) {
                        i ? cc.error(i.message || i) : (cc.log("Result should be a prefab HuaPen: " + (n instanceof cc.Prefab) + ",name = " + n.name), t.loadedPrefabNum--, 0 == t.loadedPrefabNum && (console.log("\u82b1\u76c6\u9884\u8bbe\u52a0\u8f7d\u5b8c\u6210 = 2"), e()), t.droneFlowerFotPre = n)
                    }), cc.loader.loadRes("prefab/flowerPot/HuaPen_v3", function(i, n) {
                        i ? cc.error(i.message || i) : (cc.log("Result should be a prefab HuaPen: " + (n instanceof cc.Prefab) + ",name = " + n.name), t.loadedPrefabNum--, 0 == t.loadedPrefabNum && (console.log("\u82b1\u76c6\u9884\u8bbe\u52a0\u8f7d\u5b8c\u6210 = 3"), e()), t.turnTableAndBuyFlowerFotPre = n)
                    }), this.droneFlowerFot = {}, this.droneFlowerFot.num = cc.Mgr.game.dronePot.length, this.droneFlowerFot.type = n.FlowerPotType.Drone, this.droneFlowerFot.plantInfos = cc.Mgr.game.dronePot, this.turnTableFlowerFot = {}, this.turnTableFlowerFot.type = n.FlowerPotType.Turntable, this.turnTableFlowerFot.num = cc.Mgr.game.turntablePot.length, this.turnTableFlowerFot.plantInfos = cc.Mgr.game.turntablePot, this.shopFlowerFot = {}, this.shopFlowerFot.type = n.FlowerPotType.Shop, this.shopFlowerFot.num = cc.Mgr.game.shopBuyPot.length, this.shopFlowerFot.plantInfos = cc.Mgr.game.shopBuyPot;
                    var i = cc.Mgr.Utils.GetSysTime() - cc.Mgr.UserDataMgr.lastPlayTime;
                    console.log("flowerPotManage timeInterVal == " + i);
                    var o = cc.Mgr.game.getSpaceGirdNum() - this.droneFlowerFot.num - this.turnTableFlowerFot.num - this.shopFlowerFot.num;
                    console.log("flowerPotManage spaceGirdNun == " + o);
                    var a = Math.floor(i / cc.Mgr.game.airDropTime),
                        s = 0;
                    s = o <= 0 ? 0 : o >= a ? a : o, console.log("flowerPotManage airDropNun == " + s), this.airDropFlowerFot = {}, this.airDropFlowerFot.num = s, this.airDropFlowerFot.type = n.FlowerPotType.Drop, this.airDropFlowerFot.plantInfo = []
                },
                noneDropFlowerFotNun: function() {
                    return this.turnTableFlowerFot.num + this.shopFlowerFot.num + this.droneFlowerFot.num + this.airDropFlowerFot.num
                },
                haveFlowerFot: function() {
                    return this.turnTableFlowerFot.num + this.shopFlowerFot.num + this.droneFlowerFot.num + this.airDropFlowerFot.num > 0
                },
                addDropFlowerFot: function(e) {
                    (0 == this.airDropFlowerFot.num && 0 == e || this.airDropFlowerFot.num < e) && this.airDropFlowerFot.num++
                },
                addDroneFlowerFot: function(e, t) {
                    for (var i = 0; i < t; i++) this.droneFlowerFot.plantInfos[this.droneFlowerFot.num] = e, this.droneFlowerFot.num++
                },
                addTurnTableFlowerFot: function(e) {
                    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, i = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], 0); i < t; i++) this.turnTableFlowerFot.plantInfos[this.turnTableFlowerFot.num] = e, this.turnTableFlowerFot.num++
                },
                addShopFlowerFot: function(e) {
                    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, i = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], 0); i < t; i++) this.shopFlowerFot.plantInfos[this.shopFlowerFot.num] = e, this.shopFlowerFot.num++
                },
                getFlowerFot: function() {
                    var e = null;
                    if (this.turnTableFlowerFot.num > 0) {
                        this.turnTableFlowerFot.num--;
                        var t = (e = cc.instantiate(this.turnTableAndBuyFlowerFotPre)).getComponent("flowerPot"),
                            i = this.turnTableFlowerFot.plantInfos[this.turnTableFlowerFot.num];
                        return t.setPlantInfo(i), this.turnTableFlowerFot.plantInfos.length--, e
                    }
                    if (this.shopFlowerFot.num > 0) {
                        this.shopFlowerFot.num--;
                        t = (e = cc.instantiate(this.turnTableAndBuyFlowerFotPre)).getComponent("flowerPot"), i = this.shopFlowerFot.plantInfos[this.shopFlowerFot.num];
                        return t.setPlantInfo(i), this.shopFlowerFot.plantInfos.length--, e
                    }
                    if (this.droneFlowerFot.num > 0) {
                        this.droneFlowerFot.num--;
                        t = (e = cc.instantiate(this.droneFlowerFotPre)).getComponent("flowerPot"), i = this.droneFlowerFot.plantInfos[this.droneFlowerFot.num];
                        return t.setPlantInfo(i), this.droneFlowerFot.plantInfos.length--, e
                    }
                    if (this.airDropFlowerFot.num > 0) {
                        this.airDropFlowerFot.num--, e = cc.instantiate(this.airDropFlowerFotPre);
                        var n = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(o.AirDropData, cc.Mgr.game.plantMaxLv);
                        i = 0;
                        if (0 == n.Plant2) i = n.Plant1;
                        else i = Math.floor(100 * Math.random()) % 2 == 0 ? n.Plant1 : n.Plant2;
                        return (t = e.getComponent("flowerPot")).setPlantInfo(i), e
                    }
                    return null
                },
                onLoad: function() {
                    a.instance = this
                },
                start: function() {}
            });
        t.exports = a, cc._RF.pop()
    }, {
        DataType: "DataType",
        MyEnum: "MyEnum"
    }],
    flowerPotOpen: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "a16c789/ntAX7ld24FiLTFs", "flowerPotOpen");
        var n = e("EffectType"),
            o = cc.Class({
                extends: cc.Component,
                properties: {
                    dragon: dragonBones.ArmatureDisplay
                },
                start: function() {
                    this.dragon.on(dragonBones.EventObject.COMPLETE, this.onAnimComplete, this)
                },
                onAnimComplete: function() {
                    cc.Mgr.EffectMgr.ObBackToPool(this.node, n.flowerPotOpen)
                },
                playAnimation: function() {
                    this.dragon.playAnimation("newAnimation", 1)
                }
            });
        t.exports = o, cc._RF.pop()
    }, {
        EffectType: "EffectType"
    }],
    flowerPot: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "9d715P7w+tAW4A78b3FtBtr", "flowerPot");
        var n = e("MyEnum"),
            o = e("Event"),
            a = (e("DataType"), e("plant_config").zIndexList),
            s = cc.Class({
                extends: cc.Component,
                properties: {
                    dragon: dragonBones.ArmatureDisplay
                },
                init: function(e, t) {
                    var i = this;
                    this.hasBeDianJi = !1, this.index = e, this.node.position = cc.v2(t.x, t.y + 200), cc.tween(this.node).to(.1, {
                        position: cc.v2(t.x, t.y)
                    }, {
                        easing: "quadIn"
                    }).call(function() {
                        i.scheduleOnce(i.playDianji, 8)
                    }).start(), this.node.zIndex = a[e] + 1, this.dragon.playAnimation("DaiJi", -1), this.dragon.on(dragonBones.EventObject.COMPLETE, this.onAnimComplete, this), this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
                        this.TouchStart(e)
                    }, this), cc.Mgr.AudioMgr.playSFX(n.AudioType.flower_pot_land)
                },
                setPlantInfo: function(e) {
                    this.level = e
                },
                setShowDetailsInUI: function(e, t) {
                    var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    this.node.getChildByName("shadow").active = !1, this.dragon.node.color = cc.Mgr.Utils.hexToColor(t), i && this.dragon.playAnimation("DaiJi", -1), this.node.scale = e
                },
                playDianji: function() {
                    this.dragon.playAnimation("DianJi", 1)
                },
                TouchStart: function(e) {
                    1 != this.hasBeDianJi && (this.hasBeDianJi = !0, this.dragon.playAnimation("DianJi", 1), this.unscheduleAllCallbacks())
                },
                onAnimComplete: function(e) {
                    if (console.log("\u54c8\u54c8\u54c8  " + e.animationState.name), "DianJi" == e.animationState.name) {
                        var t = {};
                        t.level = this.level, t.index = this.index, cc.director.GlobalEvent.emit(o.flowerPotOpen, t)
                    }
                },
                plantDestroy: function() {
                    cc.log("\u9500\u6bc1\u4e86 ==== "), this.node.destroy()
                },
                start: function() {}
            });
        t.exports = s, cc._RF.pop()
    }, {
        DataType: "DataType",
        Event: "Event",
        MyEnum: "MyEnum",
        plant_config: "plant_config"
    }],
    game: [function(e, t, i) {
        "use strict";
        var n;

        function o(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }
        cc._RF.push(t, "3d2ceceV2lFhoeGwWKzLlSQ", "game");
        var a = e("MyEnum"),
            s = e("Config"),
            c = e("Event"),
            r = e("DataType"),
            l = cc.Class({
                ctor: function() {
                    this.init()
                },
                properties: (n = {
                    openId: "",
                    level: 1,
                    curBoshu: 1,
                    curLevelMaxBoshu: 0,
                    money: 0,
                    gems: 0,
                    plantMaxLv: 1,
                    beAngryleftTime: 0,
                    plantAttackRange: 200,
                    bulletSpeed: 500,
                    zombieSpeedRatio: 53,
                    zombieDistance: 130,
                    spinADResetTime: 0,
                    spinADTimeCount: 0,
                    spinUseGemTime: 0,
                    coinBonusTime: 0,
                    coinPos: cc.Vec2,
                    gemPos: cc.Vec2,
                    loadProgress: 0,
                    needGuide: !0,
                    curGuideStep: 0,
                    plantMergeGuideTime: 30,
                    plantMergeGuideHideTime: 20,
                    airDropTime: 16,
                    maxPlantNum: 60,
                    lastBuyPlantTime: 0,
                    lastAdsGetPlantTime: 0,
                    lastShowInsertAdsTime: 0,
                    lastVideoTime: 0,
                    onVideoAds: !1,
                    angryUseGemTime: 0,
                    canBuyPlantId: 1,
                    adsGetGemTimes: 0,
                    doubleCoinState: !1,
                    doubleCoinStateLeftTime: 0,
                    enterGameTimeStamp: 0,
                    doubleCoinAllTime: 120,
                    netTimeStamp: 0,
                    hasSignDayNum: 0,
                    lastSignDate: 0,
                    uavUseTime: 0,
                    screenStartTime: 0
                }, o(n, "canBuyPlantId", 0), o(n, "discountBeActiveTimes", 0), o(n, "discountLeftTimes", 0), o(n, "discountLv", 0), o(n, "lastLuckyMergeTime", 0), o(n, "lastUseLuckyMergeTime", 0), o(n, "rebornTimer", 0), o(n, "hasGetGift", !1), o(n, "hasGiftData", !1), n),
                statics: {
                    instance: null,
                    getInstance: function() {
                        return null == l.instance && (l.instance = new l), l.instance
                    }
                },
                init: function() {
                    this.plantBuyRecord = {}, this.PlantsPK = new Array, this.achievementProgress = new Array, this.dailyMissions = new Array, this.plantsOwn = new Array, this.doubleCoinStateLeftTime = 0
                },
                resetplantBuyRecord: function() {
                    for (var e = 0; e < 60; e++) this.plantBuyRecord[e + 1] = 0
                },
                updatePlantBuyRecord: function(e) {
                    this.plantBuyRecord && this.plantBuyRecord[e] ? this.plantBuyRecord[e] += 1 : this.plantBuyRecord[e] = 0
                },
                getSpaceGirdNum: function() {
                    for (var e = 0, t = 0; t < this.plantsPK.length; t++) {
                        this.plantsPK[t].type == a.GridState.none && e++
                    }
                    return e
                },
                getPlantsPK: function() {
                    this.PlantsPK = null, this.PlantsPK = new Array;
                    for (var e = 0; e < cc.Mgr.plantMgr.grids.length; e++) {
                        var t = cc.Mgr.plantMgr.grids[e],
                            i = {};
                        i.type = t.type, i.type != a.GridState.plant && i.type != a.GridState.lock && i.type != a.GridState.flowerPot || (i.level = t.content.level, i.index = t.content.index), this.PlantsPK.push(i)
                    }
                    return this.PlantsPK
                },
                getMissionProgressById: function(e) {
                    for (var t = 0; t < this.dailyMissions.length; t++) {
                        var i = this.dailyMissions[t];
                        if (e == i.id) return i
                    }
                    return this.dailyMissions[0]
                },
                updateMissionProgressById: function(e) {
                    for (var t = 0; t < this.dailyMissions.length; t++)
                        if (e == this.dailyMissions[t].id && this.dailyMissions[t].progress < this.dailyMissions[t].checkNum) return this.dailyMissions[t].progress += 1, void cc.director.GlobalEvent.emit(c.checkMissionAndAchieve, {})
                },
                updateMissionProgressByType: function(e, t) {
                    for (var i = 0; i < this.dailyMissions.length; i++)
                        if (e == this.dailyMissions[i].id) return void(this.dailyMissions[i].progress = t)
                },
                claimMissionRewardById: function(e) {
                    for (var t = 0; t < this.dailyMissions.length; t++)
                        if (e == this.dailyMissions[t].id) return this.dailyMissions[t].claimed = 1, void(this.dailyMissions[t].progress = 0)
                },
                clearMissionDataToNextDay: function() {
                    for (var e = 0; e < s.missionDataList.length; e++) {
                        s.missionDataList[e];
                        this.dailyMissions[e].progress = 0, this.dailyMissions[e].claimed = 0
                    }
                },
                getAchieveDataById: function(e) {
                    for (var t = 0; t < this.achievementProgress.length; t++) {
                        var i = this.achievementProgress[t];
                        if (e == i.id) return i
                    }
                    return this.achievementProgress[0]
                },
                claimAchieveRewardById: function(e) {
                    for (var t = 0; t < this.achievementProgress.length; t++)
                        if (e == this.achievementProgress[t].id) return this.achievementProgress[t].checklv += 1, this.achievementProgress[t].progress = 0, void(this.achievementProgress[t].checklv > 4 && (this.achievementProgress[t].finished = 1))
                },
                updatePlantOwnsByLv: function(e) {
                    for (var t = 0; t < this.plantsOwn.length; t++)
                        if (e == this.plantsOwn[t].lv) return this.plantsOwn[t].ownNum += 1, void cc.director.GlobalEvent.emit(c.checkMissionAndAchieve, {})
                },
                getPlantOwnsDataByLv: function(e) {
                    for (var t = 0; t < this.plantsOwn.length; t++)
                        if (e == this.plantsOwn[t].lv) return this.plantsOwn[t].ownNum
                },
                updateAchievementProgressByPlant: function(e) {},
                getDronePot: function() {
                    return this.dronePot = cc.Mgr.flowerPotMgr.droneFlowerFot.plantInfos, this.dronePot
                },
                getTurntablePot: function() {
                    return this.turntablePot = cc.Mgr.flowerPotMgr.turnTableFlowerFot.plantInfos, this.turntablePot
                },
                getShopBuyPot: function() {
                    return this.shopBuyPot = cc.Mgr.flowerPotMgr.shopFlowerFot.plantInfos, this.shopBuyPot
                },
                checkOutMissionIsFinished: function() {
                    for (var e = 0; e < this.dailyMissions.length; e++) {
                        var t = this.dailyMissions[e];
                        if (t.progress >= t.checkNum && 1 != t.claimed) return !0
                    }
                    return !1
                },
                checkOutAchieveDataIsFinished: function() {
                    for (var e = [5, 20, 50, 100, 200], t = [], i = 0; i < this.achievementProgress.length; i++) {
                        var n = this.achievementProgress[i];
                        if (!n.finished && 0 != this.checkLvToGainGems(n.id, n.checklv)) {
                            if (!(t.length < 5)) break;
                            t.push(n)
                        }
                    }
                    for (i = 0; i < t.length; i++) {
                        var o = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(r.AchievementData, t[i].id);
                        if (this.getPlantOwnsDataByLv(o.Level) >= e[t[i].checklv]) return !0
                    }
                    return !1
                },
                checkLvToGainGems: function(e, t) {
                    var i = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(r.AchievementData, e);
                    return 0 == t ? i.Gain_5 : 1 == t ? i.Gain_20 : 2 == t ? i.Gain_50 : 3 == t ? i.Gain_100 : 4 == t ? i.Gain_200 : void 0
                },
                caculatePlantPrice: function(e, t) {
                    var i = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(r.PlantData, e);
                    return e >= 1 && e <= 2 ? Math.floor(i.price * Math.pow(1.13, t)) : e >= 3 && e <= 5 ? Math.floor(i.price * Math.pow(1.11, t)) : e >= 6 && e <= 9 ? Math.floor(i.price * Math.pow(1.09, t)) : e >= 10 && e <= 13 ? Math.floor(i.price * Math.pow(1.08, t)) : e >= 14 && e <= 20 ? Math.floor(i.price * Math.pow(1.07, t)) : Math.floor(i.price * Math.pow(1.17, t))
                },
                getRewardMoney: function(e, t) {
                    return this.caculatePlantPrice(e, t)
                },
                getRewardMoneyByZombie: function(e, t) {
                    var i = cc.Mgr.game.level + "_1",
                        n = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(r.LevelData, i),
                        o = cc.Mgr.game.level + "_" + n.waveCount,
                        a = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(r.LevelData, o);
                    return cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(r.ZombieData, a.zombieID1).money
                }
            });
        t.exports = l, cc._RF.pop()
    }, {
        Config: "Config",
        DataType: "DataType",
        Event: "Event",
        MyEnum: "MyEnum"
    }],
    jinbiCtrl: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "ddceegtwodP3oU90zxYMfDB", "jinbiCtrl");
        var n = e("uiConfig"),
            o = e("MyEnum");
        cc.Class({
            extends: cc.Component,
            properties: {
                type: 0,
                jinbiEffectNode: cc.Node,
                jinbis: [cc.Node]
            },
            jinbiStart: function() {
                var e, t = this,
                    i = this.jinbis[this.index].getComponent("jinbi");
                e = 0 == this.type ? cc.v2(cc.Mgr.game.coinPos.x, cc.Mgr.game.coinPos.y) : cc.Mgr.game.gemPos, i.init(this.type, e), i.complete = function() {
                    t.completeNum++, t.jinbiEffectNode.active || (t.jinbiEffectNode.position = e, t.jinbiEffectNode.active = !0), t.completeNum == t.jinbis.length && t.node.destroy()
                }, this.index++
            },
            start: function() {
                this.completeNum = 0, this.index = 0;
                var e = 0,
                    t = 0;
                0 == this.type ? (t = .03, cc.Mgr.AudioMgr.playSFX(o.AudioType.coin)) : (t = .045, cc.Mgr.AudioMgr.playSFX(o.AudioType.gem));
                for (var i = 0; i < this.jinbis.length; i++) this.scheduleOnce(function() {
                    this.jinbiStart()
                }, e), e += t;
                this.node.zIndex = n.inGameUITopNode.Layer
            }
        }), cc._RF.pop()
    }, {
        MyEnum: "MyEnum",
        uiConfig: "uiConfig"
    }],
    jinbi: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "12016hKCxdCV7ae7jferEYl", "jinbi"), cc.Class({
            extends: cc.Component,
            properties: {
                delayTime: 0
            },
            start: function() {},
            init: function(e, t) {
                var i = this;
                0 == e ? (this.node.scale = 0, cc.tween(this.node).to(.2, {
                    scale: 1
                }).by(.1, {
                    position: cc.v2(0, 20)
                }).to(.4, {
                    position: t
                }, {
                    easing: "sineInOut"
                }).call(function() {
                    i.complete()
                }).start()) : (this.node.opacity = 0, cc.tween(this.node).to(.2, {
                    opacity: 255
                }).to(.5, {
                    scale: 1,
                    position: t,
                    rotation: 0
                }, {
                    easing: "sineInOut"
                }).call(function() {
                    i.complete()
                }).start())
            }
        }), cc._RF.pop()
    }, {}],
    jinggai: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "77f88UCtKdAyJKlLwU+XQHt", "jinggai");
        e("MyEnum");
        cc.Class({
            extends: cc.Component,
            properties: {
                dragon: dragonBones.ArmatureDisplay
            },
            start: function() {},
            onCollisionEnter: function(e) {
                "zombie" == e.node.group && 1 == e.tag && this.dragon.playAnimation("touch", 1)
            },
            onCollisionExit: function(e) {
                "zombie" == e.node.group && e.tag
            }
        }), cc._RF.pop()
    }, {
        MyEnum: "MyEnum"
    }],
    lockGird: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "bae7c6iND1FHbrCShjS8zc1", "lockGird");
        e("MyEnum");
        var n = e("Event"),
            o = (e("DataType"), cc.Class({
                extends: cc.Component,
                properties: {
                    price: cc.Label
                },
                init: function(e, t, i) {
                    this.index = e, this.level = t, this.money = t;
                    var n = cc.Mgr.Utils.getNumStr(t);
                    this.price.string = n, this.node.position = i, this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
                        this.TouchStart(e)
                    }, this)
                },
                setPlantInfo: function(e) {
                    this.plantLevel = e
                },
                setShowDetailsInUI: function(e, t) {
                    var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    this.dragon.node.color = cc.Mgr.Utils.hexToColor(t), i && this.dragon.playAnimation("DaiJi", -1), this.node.scale = e
                },
                TouchStart: function(e) {
                    if (cc.Mgr.game.money >= this.money) {
                        var t = {};
                        t.index = this.index, cc.Mgr.game.money -= this.money, cc.director.GlobalEvent.emit(n.unlockGird, t)
                    } else console.log("\u7b2c\u51e0\u4e2a\u4f4d\u7f6e " + this.index), cc.Mgr.game.level >= 5 && 0 == this.index ? this.showTipUnlock() : cc.Mgr.game.level >= 4 && 1 == this.index ? this.showTipUnlock() : cc.Mgr.game.level >= 3 && (2 == this.index || 3 == this.index) ? this.showTipUnlock() : cc.Mgr.game.level >= 2 && (4 == this.index || 5 == this.index || 6 == this.index) ? this.showTipUnlock() : cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoCoins"))
                },
                showTipUnlock: function() {
                    var e = {
                        forWhat: "unlockGrid"
                    };
                    e.index = this.index, e.des = "Thiếu vàng\nXem QC để mở khóa ", cc.Mgr.UIMgr.openTipUI(e)
                },
                plantDestroy: function() {
                    this.node.destroy()
                },
                start: function() {}
            }));
        t.exports = o, cc._RF.pop()
    }, {
        DataType: "DataType",
        Event: "Event",
        MyEnum: "MyEnum"
    }],
    luckyMergeUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "a1360PrVfhME5hAtnhb05MQ", "luckyMergeUI");
        var n = e("MyEnum"),
            o = e("DataType"),
            a = cc.Class({
                extends: cc.Component,
                properties: {
                    plantUp_parent: cc.Node,
                    plantA_parent: cc.Node,
                    plantB_parent: cc.Node,
                    lvULbl: cc.Label,
                    lvALbl: cc.Label,
                    lvBLbl: cc.Label,
                    closeLblNode: cc.Node
                },
                showUI: function(e, t) {
                    this.callback = null, this.callback = t, cc.Mgr.AdsMgr.ShowBannerAds(1);
                    var i = this;
                    this.plantNodeA = null, this.plantNodeB = null, this.plantNodeU = null;
                    var a = e.level + 2;
                    a >= 60 && (a = 60), this.lvALbl.string = "Lv." + e.level + "-" + e.pName, this.lvBLbl.string = "Lv." + e.level + "-" + e.pName;
                    var s = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(o.PlantData, a);
                    this.lvULbl.string = "Lv." + a + "-" + s.pName, cc.loader.loadRes("prefab/plantNew/" + e.prefab, function(e, t) {
                        e ? cc.error(e.message || e) : (i.plantNodeA = cc.instantiate(t), i.plantNodeA.parent = i.plantA_parent, i.plantNodeA.group = n.NodeGroup.UI, i.plantNodeA.position = cc.v2(0, 0), i.plantNodeA.getComponent(cc.CircleCollider).enabled = !1, i.plantNodeA.active = !0, i.plantNodeA.getComponent("plant").setShowDetailsInUI(1, "#ffffff", !0), i.plantNodeB = cc.instantiate(t), i.plantNodeB.parent = i.plantB_parent, i.plantNodeB.group = n.NodeGroup.UI, i.plantNodeB.position = cc.v2(0, 0), i.plantNodeB.getComponent(cc.CircleCollider).enabled = !1, i.plantNodeB.active = !0, i.plantNodeB.getComponent("plant").setShowDetailsInUI(1, "#ffffff", !0))
                    }), cc.loader.loadRes("prefab/plantNew/" + s.prefab, function(e, t) {
                        e ? cc.error(e.message || e) : (i.plantNodeU = cc.instantiate(t), i.plantNodeU.parent = i.plantUp_parent, i.plantNodeU.group = n.NodeGroup.UI, i.plantNodeU.position = cc.v2(0, 0), i.plantNodeU.getComponent(cc.CircleCollider).enabled = !1, i.plantNodeU.active = !0, i.plantNodeU.getComponent("plant").setShowDetailsInUI(1, "#ffffff", !0))
                    }), this.closeLblNode.active = !1, this.scheduleOnce(this.setCloseFadeIn, 2)
                },
                setCloseFadeIn: function() {
                    this.closeLblNode.active = !0
                },
                clickLucky: function() {
                    var e = this;
                    cc.Mgr.AdsMgr.ShowVideoAds(11, function(t) {
                        0 == t && (cc.Mgr.game.lastUseLuckyMergeTime = cc.Mgr.Utils.GetSysTime(), null != e.callback && "function" == typeof e.callback && (console.log("\u5e78\u8fd0\u5408\u6210\u5347\u4e24\u7ea7"), e.callback(1), e.callback = null), e.closeUI())
                    })
                },
                justMerge: function() {
                    null != this.callback && "function" == typeof this.callback && (this.callback(0), this.callback = null), this.closeUI()
                },
                closeUI: function() {
                    cc.Mgr.AdsMgr.HideBannerAd(), this.plantNodeA && this.plantNodeA.destroy(), this.plantNodeB && this.plantNodeB.destroy(), this.plantNodeU && this.plantNodeU.destroy(), this.unschedule(this.setCloseFadeIn), this.scheduleOnce(function() {
                        this.node.active = !1
                    }, .15)
                }
            });
        t.exports = a, cc._RF.pop()
    }, {
        DataType: "DataType",
        MyEnum: "MyEnum"
    }],
    missionItem: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "3adeb2YS/9NU6FhHeQCaYTD", "missionItem");
        var n = e("MySprite"),
            o = e("MyButton"),
            a = e("AtlasType"),
            s = e("DataType"),
            c = ["mission-login-game", "mission-merge20-flowers", "mission-win10-times", "mission-watch3-videos"],
            r = ["icon3", "icon2", "icon1", "icon5"],
            l = cc.Class({
                extends: cc.Component,
                properties: {
                    missionSp: n,
                    rewardIcon: n,
                    claimBtn: o,
                    proBar: cc.ProgressBar,
                    desLbl: cc.Label,
                    numLbl: cc.Label,
                    sliderLbl: cc.Label,
                    effect: cc.Node,
                    rewardType: "money",
                    rewardNum: 5,
                    misId: 0
                },
                pickOutDataLv: function(e) {
                    for (var t = 0; t < 9; t++) switch (t) {
                        case 0:
                            if ("M" == e.MAX) return 0;
                            break;
                        case 1:
                            if ("M" == e.MAX_1) return 1;
                            break;
                        case 2:
                            if ("M" == e.MAX_2) return 2;
                            break;
                        case 3:
                            if ("M" == e.MAX_3) return 3;
                            break;
                        case 4:
                            if ("M" == e.MAX_4) return 4;
                            break;
                        case 5:
                            if ("M" == e.MAX_5) return 5;
                            break;
                        case 6:
                            if ("M" == e.MAX_6) return 6;
                            break;
                        case 7:
                            if ("M" == e.MAX_7) return 7;
                            break;
                        case 8:
                            if ("M" == e.MAX_8) return 8
                    }
                    return 0
                },
                caculateMoneyPrice: function(e, t) {
                    var i = cc.Mgr.game.plantBuyRecord[e];
                    this.price = t.price;
                    var n = Math.floor(t.price * Math.pow(1.17, i) / 2);
                    return 1 == e && (n = Math.floor(t.price * Math.pow(1.115, i) / 2)), this.price = n, n
                },
                setData: function(e) {
                    if (this.missionSp.setSprite(a.mainUI, r[e.misType]), this.misId = e.id, "coin" == e.rewardType) {
                        this.rewardType = "money";
                        var t = cc.Mgr.game.plantMaxLv - 3 > 0 ? cc.Mgr.game.plantMaxLv - 3 : 1,
                            i = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(s.PlantData, t);
                        this.rewardNum = this.caculateMoneyPrice(t, i), this.numLbl.string = "x" + cc.Mgr.Utils.getNumStr(this.rewardNum), this.rewardIcon.setSprite(a.mainUI, "coins"), this.rewardIcon.node.scale = .5
                    } else "gem" == e.rewardType && (this.rewardType = "gem", this.numLbl.string = "x5", this.rewardNum = 5, this.rewardIcon.setSprite(a.mainUI, "diamondstack"), this.rewardIcon.node.scale = 1);
                    this.sliderLbl.string = e.progress + "/" + e.checkNum, this.proBar.progress = e.progress / e.checkNum, this.desLbl.string = cc.Mgr.Utils.getTranslation(c[e.misType]), window.ArcadeBridge && window.ArcadeBridge.applyWhiteTextOutlines && window.ArcadeBridge.applyWhiteTextOutlines(this.node), e.progress < e.checkNum ? (this.effect.active = !1, this.claimBtn.setButtonActive(!1)) : (this.effect.active = !0, this.claimBtn.setButtonActive(!0))
                },
                claim: function() {
                    if (cc.Mgr.AudioMgr.playSFX("click"), this.getRewardAndUpdateMission(), cc.Mgr.UIMgr.openAssetGetUI(this.rewardType, this.rewardNum, null, "mission"), "gem" == this.rewardType) {
                        var e = cc.Mgr.TDEvent.GetGem + "Mission";
                        cc.Mgr.PlatformController.AldEventStatis(e, {
                            GetGem: this.rewardNum
                        })
                    }
                    this.node.active = !1, cc.Mgr.UIMgr.missionUI.showUI()
                },
                getRewardAndUpdateMission: function() {
                    this.rewardType, cc.Mgr.UIMgr.InGameUI.RefreshAssetData(), cc.Mgr.game.claimMissionRewardById(this.misId)
                }
            });
        t.exports = l, cc._RF.pop()
    }, {
        AtlasType: "AtlasType",
        DataType: "DataType",
        MyButton: "MyButton",
        MySprite: "MySprite"
    }],
    missionUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "64236pu20dCb46IDnvxndNR", "missionUI");
        var n = e("missionItem"),
            o = e("achieveItem"),
            a = (e("uiConfig"), e("MissionType"), e("DataType")),
            s = cc.Class({
                extends: cc.Component,
                properties: {
                    closeNode: cc.Node,
                    mItemParent: cc.Node,
                    aItemParent: cc.Node,
                    achieveTitle: cc.Node,
                    missionTitle: cc.Node,
                    misList: [n],
                    achList: [o]
                },
                doTween: function() {
                    this.closeNode.opacity = 0, this.closeNode.scale = 0, cc.tween(this.closeNode).to(.15, {
                        opacity: 255,
                        scale: 1
                    }).start()
                },
                start: function() {
                    cc.Mgr.UIMgr.missionUI = this
                },
                pickOutAchieveDataList: function() {
                    for (var e = [], t = 0; t < cc.Mgr.game.achievementProgress.length; t++) {
                        var i = cc.Mgr.game.achievementProgress[t];
                        if (!i.finished && 0 != this.checkLvToGainGems(i.id, i.checklv)) {
                            if (!(e.length < 5)) break;
                            e.push(i)
                        }
                    }
                    return e
                },
                pickOutMissionDataList: function() {
                    for (var e = [], t = 0; t < cc.Mgr.game.dailyMissions.length; t++) {
                        var i = cc.Mgr.game.dailyMissions[t],
                            n = {
                                needShow: !0
                            };
                        n.data = i, 1 == i.claimed && (n.needShow = !1), e.push(n)
                    }
                    return e
                },
                checkLvToGainGems: function(e, t) {
                    var i = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.AchievementData, e);
                    return 0 == t ? i.Gain_5 : 1 == t ? i.Gain_20 : 2 == t ? i.Gain_50 : 3 == t ? i.Gain_100 : 4 == t ? i.Gain_200 : void 0
                },
                showUI: function() {
                    cc.Mgr.PlatformController.ShowMoreGameBtn(!1), this.node.width = cc.Mgr.Config.winSize.width, this.node.height = cc.Mgr.Config.winSize.height;
                    var e = this.pickOutMissionDataList();
                    e.length > 0 ? this.loadMissionItems(e) : (this.missionTitle.active = !1, this.mItemParent.active = !1, this.loadAchieveItems()), this.doTween(), window.ArcadeBridge && window.ArcadeBridge.applyWhiteTextOutlines && window.ArcadeBridge.applyWhiteTextOutlines(this.node)
                },
                loadMissionItems: function(e) {
                    if (0 == e.length) this.missionTitle.active = !1, this.mItemParent.active = !1;
                    else {
                        for (var t = !1, i = 0; i < e.length; i++) e[i].needShow && (t = !0);
                        if (t)
                            if (this.missionTitle.active = !0, this.mItemParent.active = !0, 0 == this.misList.length) {
                                cc.log("====\u9ebb\u75f9\u7684\u5148\u5b9e\u4f8b\u5316==== ");
                                var n = 0;
                                this.initMissionItems = function() {
                                    if (n >= 4) return cc.log("\u53d6\u6d88\u8ba1\u65f6\u5668"), this.loadAchieveItems(), void this.unschedule(this.initMissionItems);
                                    var t = cc.instantiate(cc.Mgr.UIItemMgr.getMissionItemPre());
                                    t.parent = this.mItemParent;
                                    var i = t.getComponent("missionItem");
                                    1 == e[n].data.claimed ? t.active = !1 : t.active = !0;
                                    var o = e[n].data;
                                    i.setData(o), this.misList.push(i), n += 1
                                }, this.schedule(this.initMissionItems, .005, 4, .01)
                            } else {
                                for (i = 0; i < this.misList.length; i++) this.misList[i].node.active = !1;
                                for (i = 0; i < e.length; i++)
                                    if (cc.log("\u9ebb\u75f9\u7684\u6cd5\u514b = " + i + "   " + e[i].needShow + "  " + e[i].data.claimed), e[i].needShow && !e[i].data.claimed) {
                                        cc.log("\u9ebb\u75f9\u7684\u6cd5\u514b === " + i), this.misList[i].node.active = !0;
                                        var o = e[i].data;
                                        this.misList[i].setData(o)
                                    } this.loadAchieveItems()
                            }
                        else this.missionTitle.active = !1, this.mItemParent.active = !1, this.loadAchieveItems()
                    }
                },
                loadAchieveItems: function() {
                    var e = this.pickOutAchieveDataList();
                    if (0 == e.length) this.achieveTitle.active = !1, this.aItemParent.active = !1;
                    else if (this.achieveTitle.active = !0, this.aItemParent.active = !0, 0 == this.achList.length) {
                        cc.log("====\u9ebb\u75f9\u7684\u5148\u5b9e\u4f8b\u5316==== ");
                        var t = 0;
                        this.initAchieveItems = function() {
                            if (t >= e.length) return cc.log("\u53d6\u6d88\u8ba1\u65f6\u5668"), void this.unschedule(this.initAchieveItems);
                            var i = cc.instantiate(cc.Mgr.UIItemMgr.getAchieveItemPre());
                            i.parent = this.aItemParent;
                            var n = i.getComponent("achieveItem");
                            i.active = !0;
                            var o = e[t];
                            n.setData(o), this.achList.push(n), t += 1
                        }, this.schedule(this.initAchieveItems, .005, this.acshowList, .01)
                    } else {
                        for (var i = 0; i < this.achList.length; i++) this.achList[i].node.active = !1;
                        for (i = 0; i < e.length; i++) {
                            var n = e[i];
                            this.achList[i].node.active = !0, this.achList[i].setData(n)
                        }
                    }
                },
                closeUI: function() {
                    cc.Mgr.PlatformController.ShowMoreGameBtn(!0), cc.Mgr.AudioMgr.playSFX("click"), cc.Mgr.UIMgr.InGameUI.checkMissionAchieveTip(), Math.random() < cc.Mgr.Config.insertAdRatio && cc.Mgr.AdsMgr.ShowInsertAds(1), this.node.active = !1
                }
            });
        t.exports = s, cc._RF.pop()
    }, {
        DataType: "DataType",
        MissionType: "MissionType",
        achieveItem: "achieveItem",
        missionItem: "missionItem",
        uiConfig: "uiConfig"
    }],
    offlineAssetUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "bc475RBPPtLk6FhQlrA7QDP", "offlineAssetUI");
        var n = [4, 5, 6],
            o = cc.Class({
                extends: cc.Component,
                properties: {
                    numLbl: cc.Label,
                    closeNode: cc.Node,
                    btnLblA: cc.Label,
                    btnLblG: cc.Label
                },
                doTween: function() {
                    this.closeNode.opacity = 0, this.closeNode.scale = 0, cc.tween(this.closeNode).to(.15, {
                        opacity: 255,
                        scale: 1
                    }).start()
                },
                showUI: function(e) {
                    if (cc.Mgr.AdsMgr.ShowBannerAds(2), cc.Mgr.PlatformController.ShowMoreGameBtn(!1), this.node.width = cc.Mgr.Config.winSize.width, this.node.height = cc.Mgr.Config.winSize.height, cc.Mgr.game.level < cc.Mgr.Config.gameCheckLv) this.btnLblG.string = "Doanh thu x2     4", this.btnLblA.string = "Vàng x2";
                    else {
                        var t = 4;
                        t = cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 5 ? n[0] : cc.Mgr.game.level < cc.Mgr.Config.gameCheckLv + 13 ? n[1] : n[2], this.btnLblG.string = "Vàng x3     " + t, this.btnLblA.string = "Vàng x3"
                    }
                    this.num = e, this.numLbl.string = "+" + cc.Mgr.Utils.getNumStr(this.num), this.doTween()
                },
                gemThreeGet: function() {
                    cc.Mgr.AudioMgr.playSFX("click");
                    var e = 4;
                    if (e = cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 3 ? n[0] : cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 8 ? n[1] : n[2], cc.Mgr.game.gems < e) cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoGems"));
                    else {
                        var t = cc.Mgr.TDEvent.CostGem + "OffLine";
                        cc.Mgr.PlatformController.AldEventStatis(t, {
                            Cost: e
                        }), cc.Mgr.game.gems -= e;
                        var i = 2;
                        cc.Mgr.game.level >= cc.Mgr.Config.gameCheckLv && (i = 3), cc.Mgr.game.money += i * this.num, this.closeUI()
                    }
                },
                adsDouble: function() {
                    cc.Mgr.AudioMgr.playSFX("click");
                    var e = this;
                    cc.Mgr.AdsMgr.ShowVideoAds(7, function(t) {
                        if (0 == t) {
                            var i = 2;
                            cc.Mgr.game.level >= cc.Mgr.Config.gameCheckLv && (i = 3), cc.Mgr.game.money += i * e.num, e.closeUI()
                        }
                    })
                },
                closeUI: function() {
                    cc.Mgr.AdsMgr.HideBannerAd(), cc.Mgr.PlatformController.ShowMoreGameBtn(!0), cc.Mgr.AudioMgr.playSFX("click"), cc.Mgr.game.money += this.num, cc.Mgr.UIMgr.showJibEffect(), cc.Mgr.UIMgr.InGameUI.RefreshAssetData(), this.node.active = !1
                }
            });
        t.exports = o, cc._RF.pop()
    }, {}],
    plantGetUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "f1f332PHlJCAJmc1DliIYQt", "plantGetUI");
        var n = e("DataType"),
            o = e("MyEnum"),
            a = e("Event"),
            s = cc.Class({
                extends: cc.Component,
                properties: {
                    titleLbl: cc.Label,
                    lvLbl: cc.Label,
                    powerLbl: cc.Label,
                    cdLbl: cc.Label,
                    dragonParentA: cc.Node,
                    dragonParentB: cc.Node,
                    nextLvNode: cc.Node,
                    coinLbl: cc.Label,
                    gemLbl: cc.Label,
                    getBtn: cc.Node,
                    closeLblNode: cc.Node,
                    coinNode: cc.Node,
                    gemNode: cc.Node,
                    powerNode: cc.Node,
                    cdNode: cc.Node,
                    onlyGetBtn: cc.Node,
                    adsGetBtn: cc.Node,
                    sGetBtn: cc.Node,
                    titleNode: cc.Node,
                    adsBtnLbl: cc.Label,
                    toggle: cc.Toggle
                },
                doTween: function(e) {
                    var t = this;
                    this.titleNode.opacity = 0, this.titleNode.scale = 1, this.getBtn.opacity = 0, this.getBtn.scale = 1, this.dragonParentA.opacity = 0, this.dragonParentB.opacity = 0, this.coinNode.opacity = 0, this.gemNode.opacity = 0, this.lvLbl.node.opacity = 0, this.nextLvNode.opacity = 0, this.closeLblNode.opacity = 0, this.cdNode.opacity = 0, this.powerNode.opacity = 0, this.adsGetBtn.active = !1, this.onlyGetBtn.active = !1, cc.Mgr.game.needGuide ? this.onlyGetBtn.active = !0 : this.adsGetBtn.active = !0, "get" == e ? cc.tween(this.titleNode).to(.25, {
                        opacity: 255,
                        scale: 1.3
                    }).to(.1, {
                        scale: 1
                    }).call(function() {
                        cc.tween(t.closeLblNode).to(.25, {
                            opacity: 255,
                            scale: 1.3
                        }).to(.1, {
                            scale: 1
                        }).call(function() {
                            cc.tween(t.dragonParentA).to(.25, {
                                opacity: 255,
                                scale: 1
                            }).call(function() {
                                cc.tween(t.cdNode).to(.25, {
                                    opacity: 255
                                }).start(), cc.tween(t.powerNode).to(.25, {
                                    opacity: 255
                                }).call(function() {
                                    cc.tween(t.lvLbl.node).to(.25, {
                                        opacity: 255
                                    }).start()
                                }).start()
                            }).start()
                        }).start()
                    }).start() : cc.tween(this.titleNode).to(.25, {
                        opacity: 255,
                        scale: 1.3
                    }).to(.1, {
                        scale: 1
                    }).call(function() {
                        cc.tween(t.getBtn).to(.25, {
                            opacity: 255,
                            scale: 1.3
                        }).to(.1, {
                            scale: 1
                        }).call(function() {
                            cc.tween(t.dragonParentA).to(.25, {
                                opacity: 255,
                                scale: 1
                            }).start(), cc.tween(t.dragonParentB).to(.25, {
                                opacity: 255,
                                scale: 1
                            }).call(function() {
                                cc.tween(t.coinNode).to(.25, {
                                    opacity: 255
                                }).start(), cc.tween(t.gemNode).to(.25, {
                                    opacity: 255
                                }).call(function() {
                                    cc.tween(t.lvLbl.node).to(.25, {
                                        opacity: 255
                                    }).start(), cc.tween(t.nextLvNode).to(.25, {
                                        opacity: 255
                                    }).start()
                                }).start()
                            }).start()
                        }).start()
                    }).start()
                },
                start: function() {
                    cc.Mgr.UIMgr.plantGetUI = this
                },
                showUI: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    this.node.width = cc.Mgr.Config.winSize.width, this.node.height = cc.Mgr.Config.winSize.height, this.plantNodeA = null, this.plantNodeB = null, this.getCoin = 0, this.getGems = 0, this.nextLvNode.active = !1, this.powerNode.active = !1, this.cdNode.active = !1, this.coinNode.active = !1, this.gemNode.active = !1, this.sGetBtn.active = !1, this.sGetBtn.opacity = 0, this.coinNode.position = cc.v2(-95, -155), this.getBtn.active = !1, this.closeLblNode.active = !1, cc.Mgr.game.level, cc.Mgr.Config.gameCheckLv, this.adsBtnLbl.string = "Nhận x2", this.toggle.isChecked = !0;
                    var a = this,
                        s = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(n.PlantData, t);
                    if (this.lvLbl.string = "Lv." + t + "-" + s.pName, "get" == e) this.titleLbl.string = "Chúc mừng bạn nhận được", this.closeLblNode.active = !0, this.powerNode.active = !0, this.cdNode.active = !0, this.powerLbl.string = cc.Mgr.Utils.getNumStr(s.power), this.cdLbl.string = s.cd, i ? (this.powerNode.active = !1, this.cdNode.active = !1, cc.loader.loadRes("prefab/flowerPot/HuaPen_v3", function(e, t) {
                        e ? cc.error(e.message || e) : (a.plantNodeA = cc.instantiate(t), a.plantNodeA.parent = a.dragonParentA, a.plantNodeA.group = o.NodeGroup.UI, a.plantNodeA.position = cc.v2(0, 0), a.plantNodeA.getComponent(cc.BoxCollider).enabled = !1, a.plantNodeA.active = !0, a.plantNodeA.getComponent("flowerPot").setShowDetailsInUI(3, "#ffffff", !0))
                    })) : cc.loader.loadRes("prefab/plantNew/" + s.prefab, function(e, t) {
                        e ? cc.error(e.message || e) : (a.plantNodeA = cc.instantiate(t), a.plantNodeA.parent = a.dragonParentA, a.plantNodeA.group = o.NodeGroup.UI, a.plantNodeA.position = cc.v2(0, 0), a.plantNodeA.getComponent(cc.CircleCollider).enabled = !1, a.plantNodeA.active = !0, a.plantNodeA.getComponent("plant").setShowDetailsInUI(1.8, "#ffffff", !0))
                    });
                    else if ("unlock" == e) {
                        this.titleLbl.string = "Pokemon dễ thương mới!", this.getBtn.active = !0, this.nextLvNode.active = !0, this.coinNode.active = !0;
                        var c = t - 2 > 0 ? t - 2 : 1,
                            r = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(n.PlantData, c),
                            l = cc.Mgr.game.plantBuyRecord[c],
                            h = 0;
                        1 == c ? h = Math.floor(r.price * Math.pow(1.07, l)) : c >= 2 && c <= 8 ? h = Math.floor(r.price * Math.pow(1.115, l)) : c >= 9 && c <= 12 ? h = Math.floor(r.price * Math.pow(1.13, l)) : c >= 13 && c <= 16 ? h = Math.floor(r.price * Math.pow(1 + .14, l)) : c >= 17 && c <= 20 ? h = Math.floor(r.price * Math.pow(1.16, l)) : c > 20 && (h = Math.floor(r.price * Math.pow(1.17, l))), cc.Mgr.game.plantMaxLv >= cc.Mgr.Config.plantGetCheckLv ? h = h : cc.Mgr.game.plantMaxLv >= cc.Mgr.Config.plantGetCheckLv - 2 ? h = Math.floor(.9 * h) : cc.Mgr.game.plantMaxLv >= cc.Mgr.Config.plantGetCheckLv - 4 && (h = Math.floor(.95 * h)), this.coinLbl.string = "x" + cc.Mgr.Utils.getNumStr(h);
                        var g = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(n.LevelGemData, t);
                        if (null != g) {
                            var d = g.gem;
                            cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv && g.gem >= 5 && (d = g.gem - 1), this.gemLbl.string = "x" + d, this.gemNode.active = !0, this.coinNode.position = cc.v2(-95, -108), this.getGems = d
                        }
                        if (this.getCoin = h, cc.loader.loadRes("prefab/plantNew/" + s.prefab, function(e, t) {
                                e ? cc.error(e.message || e) : (a.plantNodeA = cc.instantiate(t), a.plantNodeA.parent = a.dragonParentA, a.plantNodeA.group = o.NodeGroup.UI, a.plantNodeA.position = cc.v2(0, 0), a.plantNodeA.getComponent(cc.CircleCollider).enabled = !1, a.plantNodeA.active = !0, a.plantNodeA.getComponent("plant").setShowDetailsInUI(1.8, "#ffffff", !0))
                            }), t + 1 <= cc.Mgr.game.maxPlantNum) {
                            var p = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(n.PlantData, t + 1);
                            cc.loader.loadRes("prefab/plantNew/" + p.prefab, function(e, t) {
                                e ? cc.error(e.message || e) : (a.plantNodeB = cc.instantiate(t), a.plantNodeB.parent = a.dragonParentB, a.plantNodeB.position = cc.v2(0, 0), a.plantNodeB.group = o.NodeGroup.UI, a.plantNodeB.getComponent(cc.CircleCollider).enabled = !1, a.plantNodeB.active = !0, a.plantNodeB.getComponent("plant").setShowDetailsInUI(1.5, "#000000", !1))
                            })
                        }
                    }
                    this.doTween(e), this.scheduleOnce(this.setCloseBtnIn, 1.5), cc.Mgr.AdsMgr.ShowBannerAds(1)
                },
                setCloseBtnIn: function() {
                    this.sGetBtn.active = !0, this.sGetBtn.runAction(cc.fadeIn(3))
                },
                toggleCheck: function() {
                    this.toggle.isChecked ? this.adsBtnLbl.string = "Nhận x2" : this.adsBtnLbl.string = "Nhận luôn"
                },
                adsGet: function() {
                    var e = this;
                    this.toggle.isChecked ? cc.Mgr.AdsMgr.ShowVideoAds(8, function(t) {
                        0 == t && e.getDouble()
                    }) : this.closeUI()
                },
                getDouble: function() {
                    if (cc.Mgr.game.needGuide) {
                        if (cc.Mgr.game.curGuideStep != o.GuideType.guide4) return;
                        cc.director.GlobalEvent.emit(a.singleGuideComplete, {
                            step: o.GuideType.guide4
                        })
                    }
                    this.plantNodeA && this.plantNodeA.destroy(), this.plantNodeB && this.plantNodeB.destroy();
                    var e = 2;
                    e = (cc.Mgr.game.level, cc.Mgr.Config.gameCheckLv, 2), cc.Mgr.game.money += e * this.getCoin, cc.Mgr.game.gems += e * this.getGems;
                    var t = cc.Mgr.TDEvent.GetGem + "PlantGet";
                    cc.Mgr.PlatformController.AldEventStatis(t, {
                        GetGem: this.getGems
                    }), this.getGems > 0 && cc.Mgr.UIMgr.showGemsEffect(), cc.Mgr.UIMgr.showJibEffect(), cc.Mgr.UIMgr.InGameUI.RefreshAssetData(), cc.Mgr.AdsMgr.HideBannerAd(), this.scheduleOnce(function() {
                        cc.Mgr.AdsMgr.ShowInsertAds(1)
                    }, 1), this.node.active = !1
                },
                closeUI: function() {
                    if (cc.Mgr.AudioMgr.playSFX("click"), cc.Mgr.game.needGuide) {
                        if (cc.Mgr.game.curGuideStep != o.GuideType.guide4) return;
                        cc.director.GlobalEvent.emit(a.singleGuideComplete, {
                            step: o.GuideType.guide4
                        })
                    }
                    this.unschedule(this.setCloseBtnIn), this.plantNodeA && this.plantNodeA.destroy(), this.plantNodeB && this.plantNodeB.destroy(), cc.Mgr.game.money += this.getCoin, cc.Mgr.game.gems += this.getGems;
                    var e = cc.Mgr.TDEvent.GetGem + "PlantGet";
                    cc.Mgr.PlatformController.AldEventStatis(e, {
                        GetGem: this.getGems
                    }), this.getGems > 0 && cc.Mgr.UIMgr.showGemsEffect(), this.getCoin > 0 && cc.Mgr.UIMgr.showJibEffect(), cc.Mgr.UIMgr.InGameUI.RefreshAssetData(), cc.Mgr.AdsMgr.HideBannerAd(), this.scheduleOnce(function() {
                        cc.Mgr.AdsMgr.ShowInsertAds(1)
                    }, 1), this.node.active = !1
                }
            });
        t.exports = s, cc._RF.pop()
    }, {
        DataType: "DataType",
        Event: "Event",
        MyEnum: "MyEnum"
    }],
    plantManage: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "70f16QMLk9Pl4Q62fGQkS+6", "plantManage");
        var n = e("EffectType"),
            o = e("DataType"),
            a = e("MyEnum"),
            s = e("Event"),
            c = (e("flowerPot"), e("MissionType")),
            r = e("plant_config").posList,
            l = cc.Class({
                extends: cc.Component,
                properties: {
                    rubbishNode: cc.Node
                },
                statics: {
                    instance: null
                },
                onLoad: function() {
                    l.instance = this
                },
                init: function(e) {
                    this.grids = [], this.initedPlantNum = 0, this.plantParent = cc.find("Canvas/GameNode/ObjParent"), this.plantPos = r, this.loadedPrefabNum = 0, this.prefabsObjs = [], this.loadPrefabs(e), this.landBorders = [], this.loadLandBorder(), this.plantMoveInfo = {
                        isMove: !1,
                        index: -1
                    }, this.rubbishPos = cc.v2(-262, 157 - cc.winSize.height / 2), cc.director.GlobalEvent.on(s.flowerPotOpen, this.flowerPotOpen, this), cc.director.GlobalEvent.on(s.BuyPlant, this.BuyPlant, this), cc.director.GlobalEvent.on(s.unlockGird, this.unlockGird, this), cc.director.GlobalEvent.on(s.AllGuideComplete, this.AllGuideComplete, this), cc.Mgr.game.needGuide || (this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
                        this.TouchStart(e)
                    }, this), this.scheduleOnce(this.checkMerge, cc.Mgr.game.plantMergeGuideTime))
                },
                TouchStart: function(e) {
                    this.hideMergeGuide()
                },
                loadAngryPrefab: function() {
                    var e = this;
                    cc.loader.loadRes("prefab/effect/angry", cc.Prefab, function(t, i) {
                        t ? cc.error(t.message || t) : e.angryPre = cc.instantiate(i)
                    })
                },
                loadLandBorder: function() {
                    var e = this;
                    cc.loader.loadRes("prefab/effect/landBorder", function(t, i) {
                        if (t) cc.error(t.message || t);
                        else
                            for (var n = e.plantPos.length, o = 0; o < n; o++) {
                                var a = cc.instantiate(i);
                                a.parent = e.plantParent, a.position = cc.v2(e.plantPos[o].x, e.plantPos[o].y), a.active = !1, e.landBorders.push(a)
                            }
                    })
                },
                showPickLandBorder: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
                    if (e)
                        for (var n = 0; n < this.grids.length; n++) {
                            var o = this.grids[n];
                            o.type == a.GridState.plant && i != o.content.index && o.content.level == t && this.landBorders[o.content.index] && !o.content.isCompounded && (this.landBorders[o.content.index].active = !0)
                        } else
                            for (n = this.landBorders.length - 1; n >= 0; n--) this.landBorders[n].active = !1
                },
                changePlantAngryState: function() {
                    for (var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = 0; t < this.grids.length; t++) this.grids[t].type == a.GridState.plant && this.grids[t].content.changeAngryState(e)
                },
                changeRubbishBinScale: function(e) {
                    e ? this.rubbishNode.runAction(cc.scaleTo(.1, 1.15)) : this.rubbishNode.runAction(cc.scaleTo(.1, 1))
                },
                rubbishBtn: function() {
                    cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("TrashTip"))
                },
                flowerPotOpen: function(e) {
                    cc.log("\u690d\u7269\u5f00\u82b1\u4e86");
                    var t = e.index,
                        i = e.level;
                    cc.Mgr.AudioMgr.playSFX(a.AudioType.flower_pot_tap), this.generateNewPlan(t, i);
                    var n = cc.v2(this.plantPos[t].x + this.grids[t].content._generateEffectPos.x, this.plantPos[t].y + this.grids[t].content._generateEffectPos.y);
                    this.playMergeEffect(n);
                    var o = cc.v2(this.plantPos[t].x, this.plantPos[t].y);
                    this.scheduleOnce(function() {
                        this.playOpenFlowerEffect(o)
                    }, 1)
                },
                AllGuideComplete: function(e) {
                    console.log("plant AllGuideComplete"), this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
                        this.TouchStart(e)
                    }, this), this.scheduleOnce(this.checkMerge, cc.Mgr.game.plantMergeGuideTime), this.checkSpaceGird(), this.generateDropFlowerFot()
                },
                unlockGird: function(e) {
                    cc.log("\u7a7a\u5730\u89e3\u9501\u4e86");
                    var t = e.index;
                    this.grids[t].content.plantDestroy(), this.grids[t].type = a.GridState.none, this.grids[t].content = {};
                    var i = cc.Mgr.EffectMgr.getObFromPool(n.DieSmoke);
                    i.active = !0, i.parent = this.plantParent, i.position = cc.v2(this.plantPos[t].x, this.plantPos[t].y), i.getComponent("dieSmoke").playAnimation(function() {})
                },
                checkHasAnySpaceGird: function() {
                    for (var e = 0, t = 0; t < this.grids.length; t++) this.grids[t].type == a.GridState.none && e++;
                    return e > cc.Mgr.flowerPotMgr.noneDropFlowerFotNun()
                },
                addPlantAtGridByLv: function(e) {
                    for (var t = 0; t < this.grids.length; t++) {
                        if (this.grids[t].type == a.GridState.none) return void this.generateNewPlan(t, e)
                    }
                },
                BuyPlant: function(e) {
                    for (var t = 0; t < this.grids.length; t++) {
                        if (this.grids[t].type == a.GridState.none) {
                            var i = cc.Mgr.game.canBuyPlantId;
                            return cc.Mgr.game.plantBuyRecord[i]++, this.generateNewPlan(t, i), cc.Mgr.game.money -= e.money, void(cc.Mgr.game.discountLv > 0 && cc.Mgr.game.discountLeftTimes > 0 && (cc.Mgr.game.discountLeftTimes -= 1, cc.Mgr.UIMgr.InGameUI.refreshDiscountState(!0)))
                        }
                    }
                    t == this.grids.length && cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoSpaceForPlant"))
                },
                generateNewPlan: function(e, t) {
                    cc.log("level == " + t), cc.Mgr.game.updatePlantOwnsByLv(t);
                    var i = this,
                        n = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(o.PlantData, t),
                        s = n.prefab,
                        c = cc.instantiate(i.prefabsObjs[s]);
                    c.parent = i.plantParent;
                    var r = c.getComponent("plant");
                    r.init(e, i.plantPos[e], n), r.TouchEndCb = function(e) {
                        i.TouchEndDone(e)
                    }, i.grids[e].type = a.GridState.plant, null != i.grids[e].content && null != i.grids[e].content.node && i.grids[e].content.node.isValid && i.grids[e].content.plantDestroy(), i.grids[e].content = r, i.grids[e].content.setIndex(e), i.grids[e].content.changeAngryState(cc.Mgr.game.beAngryleftTime > 0)
                },
                loadPrefabs: function(e) {
                    for (var t = this, i = 0; i < cc.Mgr.game.maxPlantNum; i++) {
                        var n = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(o.PlantData, this.loadedPrefabNum + 1);
                        t.loadedPrefabNum++, cc.loader.loadRes("prefab/plantNew/" + n.prefab, function(i, n) {
                            i ? cc.error(i.message || i) : (cc.log("Result should be a prefab: " + (n instanceof cc.Prefab) + ",name = " + n.name), t.prefabsObjs[n.name] = n, t.loadedPrefabNum--, 0 == t.loadedPrefabNum && e())
                        })
                    }
                    t.loadedPrefabNum++, cc.loader.loadRes("prefab/effect/angry", cc.Prefab, function(i, n) {
                        i ? cc.error(i.message || i) : (t.loadedPrefabNum--, t.angryPre = cc.instantiate(n), 0 == t.loadedPrefabNum && e())
                    }), t.loadedPrefabNum++, cc.loader.loadRes("prefab/plantNew/lockGird", function(i, n) {
                        i ? cc.error(i.message || i) : (cc.log("Result should be a prefab: " + (n instanceof cc.Prefab) + ",name = " + n.name), t.lockGirdPrefab = n, t.loadedPrefabNum--, 0 == t.loadedPrefabNum && e())
                    }), t.loadedPrefabNum++, cc.loader.loadRes("prefab/uiPrefab/PlantMergeGuide", function(i, n) {
                        i ? cc.error(i.message || i) : (cc.log("Result should be a prefab: " + (n instanceof cc.Prefab) + ",name = " + n.name), t.plantMergeGuidePrefab = n, t.loadedPrefabNum--, 0 == t.loadedPrefabNum && e())
                    })
                },
                initPlants: function() {
                    for (var e = this, t = 0; t < this.plantPos.length; t++) {
                        var i = {},
                            n = cc.Mgr.game.plantsPK[t];
                        if (n.type == a.GridState.plant || n.type == a.GridState.flowerPot) {
                            var s = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(o.PlantData, n.level),
                                c = s.prefab;
                            (r = cc.instantiate(e.prefabsObjs[c])).parent = e.plantParent, (l = r.getComponent("plant")).init(t, e.plantPos[t], s), l.TouchEndCb = function(t) {
                                e.TouchEndDone(t)
                            }, i.type = a.GridState.plant, i.content = l, e.grids.push(i)
                        } else if (n.type == a.GridState.lock) {
                            var r, l;
                            (r = cc.instantiate(e.lockGirdPrefab)).parent = e.plantParent, (l = r.getComponent("lockGird")).init(t, n.level, e.plantPos[t]), l.TouchEndCb = function(t) {
                                e.TouchEndDone(t)
                            }, i.type = a.GridState.lock, i.content = l, e.grids.push(i)
                        } else i.type = a.GridState.none, i.content = {}, e.grids.push(i)
                    }
                    cc.Mgr.game.needGuide || (this.checkSpaceGird(), this.generateDropFlowerFot())
                },
                guideStep3Run: function() {
                    var e = cc.v2(this.plantPos[7].x, this.plantPos[7].y),
                        t = cc.v2(this.plantPos[8].x, this.plantPos[8].y);
                    this.showMergeGuide(e, t)
                },
                showMergeGuide: function(e, t) {
                    null != this.MergeGuideNode && this.MergeGuideNode.active || (null == this.MergeGuideNode && (this.MergeGuideNode = cc.instantiate(this.plantMergeGuidePrefab), this.MergeGuideNode.parent = this.node.parent), console.log("showMergeGuide startPos = " + e + ", endPos = " + t), this.MergeGuideNode.getComponent("PlantMergeGuide").startMove(e, t), this.MergeGuideNode.active = !0)
                },
                hideMergeGuide: function() {
                    cc.Mgr.game.needGuide || (this.unschedule(this.checkMerge), this.unschedule(this.hideMergeGuide), this.scheduleOnce(this.checkMerge, cc.Mgr.game.plantMergeGuideTime)), null != this.MergeGuideNode && (this.MergeGuideNode.getComponent("PlantMergeGuide").stopMove(), this.MergeGuideNode.active = !1)
                },
                checkMerge: function() {
                    for (var e = new Array, t = 0; t < this.grids.length; t++) this.grids[t].type == a.GridState.plant && e.push(this.grids[t].content);
                    for (e.sort(function(e, t) {
                            return t.level - e.level
                        }), t = 0; t < e.length; t++)
                        if (t != e.length - 1 && e[t].level == e[t + 1].level) {
                            var i = e[t].index,
                                n = e[t + 1].index,
                                o = cc.v2(this.plantPos[i].x, this.plantPos[i].y),
                                s = cc.v2(this.plantPos[n].x, this.plantPos[n].y);
                            this.showMergeGuide(o, s);
                            break
                        } this.scheduleOnce(this.hideMergeGuide, cc.Mgr.game.plantMergeGuideHideTime)
                },
                generateDropFlowerFot: function() {
                    var e = this;
                    this.schedule(function() {
                        var t = 0;
                        for (var i in e.grids) i.type == a.GridState.none && t++;
                        cc.Mgr.flowerPotMgr.addDropFlowerFot(t)
                    }, cc.Mgr.game.airDropTime)
                },
                checkSpaceGird: function() {
                    this.schedule(function() {
                        if (cc.Mgr.flowerPotMgr.haveFlowerFot()) {
                            for (var e = new Array, t = 0; t < this.grids.length; t++) {
                                this.grids[t].type == a.GridState.none && e.push(t)
                            }
                            var i = e.length;
                            if (i > 0) {
                                var n = cc.Mgr.flowerPotMgr.getFlowerFot();
                                if (null != n) {
                                    var o = e[Math.floor(Math.random() * i)];
                                    n.parent = this.plantParent;
                                    var s = n.getComponent("flowerPot");
                                    s.init(o, this.plantPos[o]), this.grids[o].type = a.GridState.flowerPot, this.grids[o].content = s
                                }
                            }
                        }
                    }, cc.Mgr.Config.CheckPotGrownInterval)
                },
                checkIsAngryState: function(e) {
                    console.log("checkIsAngryState index=" + e), this.grids[e].content.changeAngryState(cc.Mgr.game.beAngryleftTime > 0)
                },
                compoundNewPlant: function(e, t) {
                    console.log("level = " + t), cc.Mgr.game.updatePlantOwnsByLv(t);
                    var i = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(o.PlantData, t);
                    console.log(i.prefab);
                    var n = this,
                        s = i.prefab;
                    cc.Mgr.game.updateMissionProgressById(c.MergePlant);
                    var r = cc.instantiate(n.prefabsObjs[s]);
                    r.parent = n.plantParent;
                    var l = r.getComponent("plant");
                    l.init(e, n.plantPos[e], i), l.TouchEndCb = function(e) {
                        n.TouchEndDone(e)
                    }, n.grids[e].type = a.GridState.plant, n.grids[e].content = l, n.grids[e].content.setIndex(e), console.log("compoundNewPlant index=" + e), this.checkIsAngryState(e), cc.tween(r).to(.2, {
                        scale: 1.5
                    }).to(.2, {
                        scale: 1
                    }).call(function() {}).start(), cc.Mgr.AudioMgr.playSFX(a.AudioType.merge)
                },
                luckyMergyCompound: function(e, t, i) {
                    var n = this;
                    cc.Mgr.game.needGuide && cc.Mgr.game.curGuideStep == a.GuideType.guide3 && (cc.director.GlobalEvent.emit(s.singleGuideComplete, {
                        step: a.GuideType.guide3
                    }), this.hideMergeGuide()), this.grids[e].content.compounded(), this.grids[t].content.compounded();
                    var o = this.plantPos[t];
                    cc.tween(this.grids[e].content.node).to(.3, {
                        position: cc.v2(o.x - 40, o.y)
                    }).to(.15, {
                        position: cc.v2(o.x, o.y)
                    }).start(), cc.tween(this.grids[t].content.node).to(.3, {
                        position: cc.v2(o.x + 40, o.y)
                    }).to(.15, {
                        position: cc.v2(o.x, o.y)
                    }).call(function() {
                        console.log("\u5408\u6210\u5b8c\u6210\u4e86\uff0c\u751f\u6210\u65b0\u690d\u7269 \u5e78\u8fd0\u5408\u6210"), n.grids[e].type = a.GridState.none, n.grids[e].content.plantDestroy(), n.grids[t].type = a.GridState.none, n.grids[t].content.plantDestroy(), console.log("plantMaxLv = " + cc.Mgr.game.plantMaxLv), n.compoundNewPlant(t, i + 2);
                        var s = cc.v2(o.x + n.grids[t].content._generateEffectPos.x, o.y + n.grids[t].content._generateEffectPos.y);
                        n.playMergeEffect(s)
                    }).start()
                },
                plantCompound: function(e, t, i) {
                    var n = this;
                    cc.Mgr.game.needGuide && cc.Mgr.game.curGuideStep == a.GuideType.guide3 && (cc.director.GlobalEvent.emit(s.singleGuideComplete, {
                        step: a.GuideType.guide3
                    }), this.hideMergeGuide()), this.grids[e].content.compounded(), this.grids[t].content.compounded();
                    var o = this.plantPos[t];
                    cc.tween(this.grids[e].content.node).to(.3, {
                        position: cc.v2(o.x - 40, o.y)
                    }).to(.15, {
                        position: cc.v2(o.x, o.y)
                    }).start(), cc.tween(this.grids[t].content.node).to(.3, {
                        position: cc.v2(o.x + 40, o.y)
                    }).to(.15, {
                        position: cc.v2(o.x, o.y)
                    }).call(function() {
                        console.log("\u5408\u6210\u5b8c\u6210\u4e86\uff0c\u751f\u6210\u65b0\u690d\u7269"), n.grids[e].type = a.GridState.none, n.grids[e].content.plantDestroy(), n.grids[t].type = a.GridState.none, n.grids[t].content.plantDestroy(), cc.Mgr.game.plantMaxLv < i + 1 && (cc.Mgr.game.plantMaxLv = i + 1, cc.Mgr.UIMgr.openPlantGetUI("unlock", cc.Mgr.game.plantMaxLv)), console.log("plantMaxLv = " + cc.Mgr.game.plantMaxLv), n.compoundNewPlant(t, i + 1);
                        var s = cc.v2(o.x + n.grids[t].content._generateEffectPos.x, o.y + n.grids[t].content._generateEffectPos.y);
                        n.playMergeEffect(s)
                    }).start()
                },
                plantPutRubbish: function(e) {
                    var t = cc.Mgr.EffectMgr.getObFromPool(n.DieSmoke);
                    t.active = !0, t.parent = this.rubbishNode, t.y = this.node.y, t.x = this.node.x;
                    t.getComponent("dieSmoke").playAnimation(function() {});
                    var i = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(o.PlantData, this.grids[e].content.level).price,
                        s = Math.floor(i * cc.Mgr.Config.recycleRatio);
                    cc.Mgr.UIMgr.playCoinFlyForRecovery(s), cc.tween(this.rubbishNode).to(.2, {
                        scale: 1.2
                    }).to(.2, {
                        scale: 1
                    }).start(), this.grids[e].type = a.GridState.none, this.grids[e].content.plantDestroy()
                },
                playMergeEffect: function(e) {
                    var t = cc.Mgr.EffectMgr.getObFromPool(n.Merge);
                    t.active = !0, null != t && (t.parent = this.plantParent, t.zIndex = 0, t.scale = .5, t.y = e.y, t.x = e.x, t.getComponent("plantMerge").playAnimation())
                },
                playOpenFlowerEffect: function(e) {
                    var t = cc.Mgr.EffectMgr.getObFromPool(n.flowerPotOpen);
                    t.active = !0, null != t && (t.parent = this.plantParent, t.zIndex = 13, t.scale = .7, t.y = e.y, t.x = e.x, t.getComponent("flowerPotOpen").playAnimation())
                },
                plantExchange: function(e, t) {
                    var i = this.grids[e].content;
                    this.grids[e].content = this.grids[t].content, this.grids[e].content.setPosition(this.plantPos[e]), this.grids[e].content.setIndex(e), this.grids[t].content = i, this.grids[t].content.setPosition(this.plantPos[t]), this.grids[t].content.setIndex(t)
                },
                plantChangePos: function(e, t) {
                    cc.Mgr.game.needGuide && cc.Mgr.game.curGuideStep == a.GuideType.guide5 && cc.director.GlobalEvent.emit(s.singleGuideComplete, {
                        step: a.GuideType.guide5
                    });
                    var i = this.grids[e].content;
                    this.grids[e].type = a.GridState.none, this.grids[e].content = {}, this.grids[t].content = i, this.grids[t].type = a.GridState.plant, this.grids[t].content.setPosition(this.plantPos[t]), this.grids[t].content.setIndex(t)
                },
                luckyMergy: function(e, t) {
                    cc.Mgr.UIMgr.openLuckyMergeUI(e, t)
                },
                TouchEndDone: function(e) {
                    var t;
                    for (t = 0; t < this.plantPos.length; t++) {
                        if (t != e.index) {
                            if (!cc.Mgr.game.needGuide || cc.Mgr.game.curGuideStep != a.GuideType.guide5 || 9 == t)
                                if (!cc.Mgr.game.needGuide || cc.Mgr.game.curGuideStep != a.GuideType.guide3 || 8 == t)
                                    if (e.node.position.sub(this.plantPos[t]).mag() < 75) {
                                        if (this.grids[t].type == a.GridState.plant && e.level == this.grids[t].content.level)
                                            if (e.level != cc.Mgr.game.maxPlantNum)
                                                if (console.log("\u5408\u6210\u5427"), e.level <= cc.Mgr.game.plantMaxLv - 4 && cc.Mgr.Utils.GetSysTime() - cc.Mgr.game.lastLuckyMergeTime >= 3 && cc.Mgr.Config.openLuckyMerge && cc.Mgr.game.plantMaxLv > cc.Mgr.Config.openLuckyMergeLv)
                                                    if (Math.random() < cc.Mgr.Config.openLuckyMergeRatio && cc.Mgr.Utils.GetSysTime() - cc.Mgr.game.lastUseLuckyMergeTime >= cc.Mgr.Config.luckyMergeInterval) {
                                                        cc.Mgr.AudioMgr.playSFX(a.AudioType.lucky);
                                                        var i = this;
                                                        cc.Mgr.game.lastLuckyMergeTime = cc.Mgr.Utils.GetSysTime(), cc.Mgr.UIMgr.openLuckyMergeUI(e.level, function(n) {
                                                            1 == n ? i.luckyMergyCompound(e.index, t, e.level) : i.plantCompound(e.index, t, e.level)
                                                        })
                                                    } else this.plantCompound(e.index, t, e.level);
                                        else this.plantCompound(e.index, t, e.level);
                                        else cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("plant-Max")), e.setPosition(this.plantPos[e.index]);
                                        else this.grids[t].type == a.GridState.plant && e.level != this.grids[t].content.level ? (console.log("\u4ea4\u6362\u4f4d\u7f6e"), this.plantExchange(e.index, t)) : this.grids[t].type == a.GridState.none ? (console.log("\u62d6\u5230\u4e86\u7a7a\u4f4d\u7f6e\u4e0a"), this.plantChangePos(e.index, t)) : this.grids[t].type != a.GridState.flowerPot && this.grids[t].type != a.GridState.lock || (console.log("\u653e\u56de\u539f\u5904\u5427"), e.setPosition(this.plantPos[e.index]));
                                        break
                                    }
                        } else console.log("\u5c5e\u4e8e\u81ea\u5df1\u7684\u4f4d\u7f6e\uff0c\u8df3\u8fc7  " + t)
                    }
                    t == this.plantPos.length && (e.node.position.sub(this.rubbishPos).mag() < 90 ? e.level == cc.Mgr.game.plantMaxLv ? (cc.Mgr.UIMgr.showPrompt("Đừng tái chế Moe cao cấp nhất"), e.setPosition(this.plantPos[e.index])) : (console.log("Đi đến thùng tái chế"), this.plantPutRubbish(e.index)) : (console.log("Không tìm thấy kết quả phù hợp nào, hãy đặt chúng trở lại vị trí cũ"), e.setPosition(this.plantPos[e.index])))
                },
                start: function() {}
            });
        t.exports = l, cc._RF.pop()
    }, {
        DataType: "DataType",
        EffectType: "EffectType",
        Event: "Event",
        MissionType: "MissionType",
        MyEnum: "MyEnum",
        flowerPot: "flowerPot",
        plant_config: "plant_config"
    }],
    plantMerge: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "c6a72o2O4lGHrLXJY7l5KkY", "plantMerge");
        var n = e("EffectType"),
            o = cc.Class({
                extends: cc.Component,
                properties: {
                    dragon: dragonBones.ArmatureDisplay
                },
                start: function() {
                    this.dragon.on(dragonBones.EventObject.COMPLETE, this.onAnimComplete, this)
                },
                onAnimComplete: function() {
                    cc.Mgr.EffectMgr.ObBackToPool(this.node, n.Merge)
                },
                playAnimation: function() {
                    this.dragon.playAnimation("newAnimation", 1)
                }
            });
        t.exports = o, cc._RF.pop()
    }, {
        EffectType: "EffectType"
    }],
    plant_config: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "78de0xj0+dFsKDgVYC0tWrk", "plant_config");
        var n = cc.Class({
            extends: cc.Component,
            statics: {
                posList: [cc.v2(-14, -324), cc.v2(-104, -278), cc.v2(-185, -220), cc.v2(32, -100), cc.v2(108, -145), cc.v2(180, -96), cc.v2(-169, 20), cc.v2(-12, 120), cc.v2(64, 80), cc.v2(-90, 72), cc.v2(100, 277), cc.v2(195, 225)],
                zIndexList: [123, 122, 121, 81, 83, 82, 44, 41, 42, 43, 1, 2]
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    plant: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "42c15Zz38ZM17B3iVconGSi", "plant");
        var n = e("MyEnum"),
            o = e("DataType"),
            a = e("plant_config").zIndexList,
            s = cc.Class({
                extends: cc.Component,
                properties: {
                    dragon: dragonBones.ArmatureDisplay,
                    index: 0,
                    level: 0,
                    cd: 0,
                    power: 0,
                    offline: 0,
                    price: 0,
                    gem: 0,
                    shootPos: [cc.Vec2],
                    steakColor: "",
                    killType: 0,
                    killProbability: 0,
                    pos: cc.Vec2,
                    bulletType: 1,
                    dragonTimeScale: 1,
                    _IdleAnimName: "DaiJi",
                    _AttackAnimName: "GongJi",
                    _generateEffectPos: cc.Vec2,
                    generateEffectPosNode: cc.Node,
                    isNeedMask: !0,
                    isNeedTrail: !0
                },
                onLoad: function() {},
                init: function(e, t, i) {
                    this._IdleAnimName = "DaiJi", this._AttackAnimName = "GongJi", this.dragonTimeScale = 1, this.index = e, this.level = i.level, this.cd = i.cd, this.pos = t, this.node.position = this.pos, this.node.getComponentInChildren(cc.Label).string = "Lv." + this.level, this.plantData = i, this.attackNodeList = [], this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
                        this.TouchStart(e)
                    }, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
                        this.TouchMove(e)
                    }, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {
                        this.TouchEnd(e)
                    }, this), this.node.on(cc.Node.EventType.TOUCH_UP, function(e) {
                        this.TouchEnd(e)
                    }, this), this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
                        this.TouchEnd(e)
                    }, this), this.node.zIndex = a[e], this.isCompounded = !1, this.setAngryNode(), cc.Mgr.DragonMgr.create(1, this.dragon), this.playIdleAnim(), this.state = n.PlantState.idle, this.dragon.on(dragonBones.EventObject.FRAME_EVENT, this.onFrameEvent, this), this.dragon.on(dragonBones.EventObject.COMPLETE, this.onAnimComplete, this), this._generateEffectPos.x = this.generateEffectPosNode.position.x, this._generateEffectPos.y = this.generateEffectPosNode.position.y, this.resourceDragonScale = this.dragon.node.scaleX, this.node.getComponent(cc.CircleCollider).radius = cc.Mgr.game.plantAttackRange, this.plantData.shootPos.length > 1 && console.log("\u591a\u5934\u690d\u7269 " + this.plantData.shootPos.length), this.curShootIndex = 0
                },
                setAngryNode: function() {
                    this.angryNode || (this.angryNode = cc.instantiate(cc.Mgr.plantMgr.angryPre), this.angryNode.parent = this.node, this.angryNode.position = cc.v2(0, 100), this.angryNode.active = !1)
                },
                start: function() {},
                setShowDetailsInUI: function(e, t) {
                    var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    this.node.getChildByName("Level").active = !1, this.node.getChildByName("shadow").active = !0, this.node.getChildByName("shadow").getChildByName("hold") && (this.node.getChildByName("shadow").getChildByName("hold").color = cc.Mgr.Utils.hexToColor(t)), this.dragon.node.color = cc.Mgr.Utils.hexToColor(t), this._IdleAnimName = "DaiJi", i && this.dragon.playAnimation(this._IdleAnimName, -1), this.node.scaleX = -e, this.node.scaleY = e
                },
                changeAngryState: function(e) {
                    if (null != this.angryNode) {
                        this.angryNode.active = e;
                        var t = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(o.PlantData, this.level).cd;
                        e ? (this.dragonTimeScale = 2, this.dragon.timeScale = 2, this.cd = t / 2) : (this.dragon.timeScale = 1, this.dragonTimeScale = 1, this.cd = t)
                    }
                },
                setPosition: function(e) {
                    this.node.position = e
                },
                setIndex: function(e) {
                    this.index = e, this.node.zIndex = a[e]
                },
                TouchStart: function(e) {
                    cc.Mgr.plantMgr.plantMoveInfo.isMove || cc.Mgr.game.needGuide && cc.Mgr.game.curGuideStep == n.GuideType.guide3 && 7 != this.index || (cc.Mgr.plantMgr.plantMoveInfo.isMove = !0, cc.Mgr.plantMgr.plantMoveInfo.index = this.index, this.isCompounded || (cc.Mgr.plantMgr.showPickLandBorder(!0, this.level, this.index), cc.Mgr.plantMgr.changeRubbishBinScale(!0)), this.node.getComponent(cc.CircleCollider).enabled = !1, this.unscheduleAllCallbacks(), this.attackNodeList = [], this.attackNodeList.length = 0, this.playIdleAnim(), this.node.zIndex = 150)
                },
                TouchMove: function(e) {
                    if (cc.Mgr.plantMgr.plantMoveInfo.isMove && cc.Mgr.plantMgr.plantMoveInfo.index == this.index) {
                        var t = e.touch.getDelta();
                        this.node.x += t.x, this.node.y += t.y
                    }
                },
                TouchEnd: function(e) {
                    cc.Mgr.plantMgr.changeRubbishBinScale(!1), cc.Mgr.plantMgr.plantMoveInfo.isMove = !1, cc.Mgr.plantMgr.plantMoveInfo.index = -1, cc.Mgr.plantMgr.showPickLandBorder(!1, this.level), this.isCompounded || (this.node.getComponent(cc.CircleCollider).enabled = !0), this.node.zIndex = a[this.index], this.TouchEndCb(this), cc.Mgr.plantMgr.hideMergeGuide()
                },
                playIdleAnim: function() {
                    cc.Mgr.DragonMgr.playAnimation(n.DragonType.plant, this.dragon, this._IdleAnimName, !0, this.dragonTimeScale), this.state = n.PlantState.idle
                },
                playAttackAnim: function() {
                    try {
                        if (this.getAttackNode(this.node.position), this.attackNodeList.length > 0) {
                            if (null != this.attackNode && !this.attackNode.isValid) return;
                            var e = cc.v2(this.node.x, this.node.y),
                                t = this.attackNode.position.sub(e),
                                i = new cc.Vec2(1, 0),
                                o = t.signAngle(i),
                                a = Math.floor(cc.misc.radiansToDegrees(o));
                            this.dragon.node.scaleX = a > 90 && a < 180 || a > -180 && a < -90 ? this.resourceDragonScale : -1 * this.resourceDragonScale, this.curShootIndex >= this.plantData.shootPos.length && (this.curShootIndex = 0), cc.Mgr.DragonMgr.playAnimation(n.DragonType.plant, this.dragon, this._AttackAnimName, !1, this.dragonTimeScale), this.state = n.PlantState.attating
                        }
                    } catch (e) {}
                },
                onFrameEvent: function(e) {
                    "A" == e.name && this.attackFrameDone()
                },
                onAnimComplete: function(e) {
                    this.attackCompleteDone()
                },
                compounded: function() {
                    this.isCompounded = !0, this.node.getComponent(cc.CircleCollider).enabled = !1, this.unscheduleAllCallbacks(), this.attackNodeList = [], this.playIdleAnim()
                },
                attackCompleteDone: function() {
                    var e = this;
                    cc.Mgr.DragonMgr.playAnimation(1, this.dragon, this._IdleAnimName, !0, this.dragonTimeScale), this.state = n.PlantState.cd, this.scheduleOnce(function() {
                        e.state == n.PlantState.cd && e.playAttackAnim()
                    }, .5 * this.cd)
                },
                attackFrameDone: function() {
                    var e = cc.Mgr.BulletPool.getObFromPool();
                    e.parent = this.node.parent, e.zIndex = 140;
                    var t = e.getComponent("bullet"),
                        i = {};
                    i.spd = cc.Mgr.game.bulletSpeed, i.power = this.plantData.power, i.spName = "H" + this.plantData.head, i.skill = this.plantData.skill, i.isNeedMask = this.plantData.isNeedMask, i.isNeedTrail = this.plantData.isNeedTrail, i.bulletHeight = this.plantData.bulletHeight, i.bulletNearLeftDis = this.plantData.bulletNearLeftDis, i.bulletType = this.plantData.bulletType;
                    var n = this.plantData.steakColor.replace("0x", "#"),
                        o = cc.Color.BLACK;
                    o = o.fromHEX(n), i.color = o, this.curShootIndex >= this.plantData.shootPos.length && (this.curShootIndex = 0), i.pos = cc.v2(this.node.x + this.plantData.shootPos[this.curShootIndex].x * this.dragon.node.scaleX, this.node.y + this.plantData.shootPos[this.curShootIndex].y), null != this.attackNode && t.initData(i, this.attackNode), this.curShootIndex++
                },
                startAttack: function(e) {
                    this.playAttackAnim()
                },
                addAttackList: function(e) {
                    this.attackNodeList.push(e)
                },
                getAttackNode: function(e) {
                    for (var t = 0; t < this.attackNodeList.length; t++)
                        if (null != this.attackNodeList[t]) {
                            this.attackNode = this.attackNodeList[t];
                            break
                        } t == this.attackNodeList[t].length && (this.attackNodeList = [], this.attackNodeList.length = 0)
                },
                removeAttackList: function(e) {
                    try {
                        var t = 0,
                            i = this.attackNodeList.length;
                        for (t = 0; t < i; t++)
                            if (this.attackNodeList[t] == e) {
                                this.attackNodeList[t] = null;
                                break
                            }
                    } catch (e) {}
                },
                plantDestroy: function() {
                    cc.Mgr.DragonMgr.deleteDragon(n.DragonType.plant, this.dragon), this.node.destroy()
                },
                onCollisionEnter: function(e) {
                    console.log("\u50f5\u5c38\u8fdb\u6765\u4e86  " + this.attackNodeList.length), "zombie" == e.node.group && 1 == e.tag && (console.log("---\u50f5\u5c38\u8fdb\u6765\u4e86  " + this.attackNodeList.length), this.addAttackList(e.node), this.startAttack())
                },
                onCollisionExit: function(e) {
                    "zombie" == e.node.group && 1 == e.tag && this.removeAttackList(e.node)
                }
            });
        t.exports = s, cc._RF.pop()
    }, {
        DataType: "DataType",
        MyEnum: "MyEnum",
        plant_config: "plant_config"
    }],
    promptUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "397e3f5uUFJO5P8TyQdbRDB", "promptUI");
        var n = cc.Class({
            extends: cc.Component,
            properties: {
                desLbl: cc.Label
            },
            showDes: function(e) {
                this.desLbl.string = e
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    rewardBox: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "14f9bkPpxpNjLkfnUy/Jycl", "rewardBox");
        var n = cc.Class({
            extends: cc.Component,
            properties: {
                rType: "coin",
                num: 1,
                id: 1,
                weight: 1
            },
            setData: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                this.rType = e, this.num = t, this.id = i, this.weight = n
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    setPanel: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "0fb57Mqd69M/7sd52BCIfkk", "setPanel"), cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            closeUI: function() {
                this.node.active = !1
            }
        }), cc._RF.pop()
    }, {}],
    shopItem: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "f9ebbffBnRKFrSpScNAXQRK", "shopItem");
        var n = e("MySprite"),
            o = e("MyButton"),
            a = e("DataType"),
            s = e("Event"),
            c = e("AtlasType"),
            r = e("MyEnum"),
            l = ["bg-coin", "bg-gem", "bg-ad", "bg-lock"],
            h = ["btn-bg", "btn-gem", "btn-ad"],
            g = ["icon-coin", "icon-gem", "icon-ad", "share"],
            d = cc.Class({
                extends: cc.Component,
                properties: {
                    lvLbl: cc.Label,
                    desLbl: cc.Label,
                    btnDes: cc.Node,
                    iconBgSp: n,
                    iconSp: n,
                    iconSmall: n,
                    btn: o,
                    btnTip: cc.Node,
                    powerLbl: cc.Label,
                    cdLbl: cc.Label,
                    unlockNode: cc.Node,
                    unlockLbl: cc.Label,
                    btnMask: cc.Node,
                    discountTip: cc.Node,
                    discountLbl: cc.Label,
                    btnType: "U",
                    lastCloseTime: 0
                },
                start: function() {
                    this.useShare = !1, this.scheduleOnce(function() {
                        cc.director.GlobalEvent.on(s.MoneyChange, function() {
                            this.setData(this.plantData.level, cc.Mgr.game.plantMaxLv)
                        }, this), cc.director.GlobalEvent.on(s.BuyPlantInShop, function(e) {
                            this.setData(this.plantData.level, cc.Mgr.game.plantMaxLv)
                        }, this), cc.director.GlobalEvent.on(s.DiscountStateChange, function(e) {
                            this.setData(this.plantData.level, cc.Mgr.game.plantMaxLv)
                        }, this)
                    }, 1)
                },
                countTime: function() {
                    cc.log("OMG Fuck Unbelivable == " + (cc.Mgr.Utils.GetSysTime() - cc.Mgr.game.lastAdsGetPlantTime)), cc.Mgr.Utils.GetSysTime() - cc.Mgr.game.lastAdsGetPlantTime >= cc.Mgr.Config.shopAdsInterval && (this.setData(this.plantData.level, cc.Mgr.game.plantMaxLv), this.unschedule(this.countTime))
                },
                refreshDiscountUI: function() {
                    if (cc.Mgr.Config.openDiscountState)
                        if (cc.Mgr.game.discountLeftTimes <= 0) this.discountTip.active = !1;
                        else if (this.btnType == r.ShopItemType.Money || this.btnType == r.ShopItemType.Null) {
                        this.discountTip.active = !0;
                        var e = 10 - cc.Mgr.game.discountLv;
                        this.discountLbl.string = e + "\u6298"
                    } else this.discountTip.active = !1;
                    else this.discountTip.active = !1
                },
                setData: function(e, t) {
                    !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    this.btnMask.active = !1, this.lvLbl.string = e;
                    var i = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.PlantData, e.toString());
                    if (this.plantData = null, this.plantData = i, this.powerLbl.string = cc.Mgr.Utils.getNumStr(i.power), this.cdLbl.string = i.cd, e <= 58) var n = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.PlantData, (e + 2).toString());
                    else n = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.PlantData, 60);
                    this.iconSp.setSprite(c.PlantHead, i.head), this.iconSmall.setSprite(c.PlantHead, n.head), this.iconBgSp.setSprite(c.mainUI, l[e % 3]), this.iconSmall.node.color = cc.Mgr.Utils.hexToColor("#000000"), e > t ? (this.iconSp.node.color = cc.Mgr.Utils.hexToColor("#000000"), this.powerLbl.string = "?", this.cdLbl.string = "?") : this.iconSp.node.color = cc.Mgr.Utils.hexToColor("#ffffff");
                    var o = i.skill.split("|"),
                        s = o[1] + "%",
                        h = parseInt(o[0]),
                        g = cc.Mgr.Utils.getTranslation("skill_des") + ": ";
                    switch (h) {
                        case r.BulletSkillType.Slow:
                            g += cc.Mgr.Utils.getTranslation("skillDescs-slowdown", [s]);
                            break;
                        case r.BulletSkillType.DouKill:
                            g += cc.Mgr.Utils.getTranslation("skillDescs-crit", [s]);
                            break;
                        case r.BulletSkillType.Vertigo:
                            g += cc.Mgr.Utils.getTranslation("skillDescs-freeze", [s])
                    }
                    this.desLbl.string = g;
                    var d = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.ShopData, t),
                        p = "";
                    switch (t - e) {
                        case 0:
                            p = d.MAX;
                            break;
                        case 1:
                            p = d.MAX_1;
                            break;
                        case 2:
                            p = d.MAX_2;
                            break;
                        case 3:
                            p = d.MAX_3;
                            break;
                        case 4:
                            p = d.MAX_4;
                            break;
                        case 5:
                            p = d.MAX_5;
                            break;
                        case 6:
                            p = d.MAX_6;
                            break;
                        case 7:
                            p = d.MAX_7;
                            break;
                        case 8:
                            p = d.MAX_8
                    }
                    e > t && (p = r.ShopItemType.Lock), this.btnType = p, this.refreshDiscountUI(), this.setButton(p, i, e)
                },
                caculateMoneyPrice: function(e, t) {
                    var i = cc.Mgr.game.plantBuyRecord[e];
                    this.price = t.price;
                    var n = cc.Mgr.game.caculatePlantPrice(e, i);
                    return this.price = n, n
                },
                checkUseDiscount: function(e) {
                    var t = e;
                    return cc.Mgr.Config.openDiscountState && cc.Mgr.game.discountLeftTimes > 0 && (t = Math.floor(e * (1 - .1 * cc.Mgr.game.discountLv))), t
                },
                setButton: function(e, t, i) {
                    switch (this.btnTip.active = !1, this.btn.node.active = !0, this.unlockNode.active = !1, this.btnDes.active = !0, this.unlockLbl.node.active = !1, e) {
                        case r.ShopItemType.Lock:
                            this.btn.node.active = !1, this.unlockNode.active = !0, this.unlockLbl.node.active = !0, this.unlockLbl.string = i + 2 < 60 ? (i + 2).toString() : 60, this.btnDes.active = !1;
                            break;
                        case r.ShopItemType.Gem:
                            this.btn.setDetails(c.mainUI, h[2], c.mainUI, g[1], t.gem), this.btn.setBtnIconScale(.75), this.btn.setBtnLblFntSize(23), cc.Mgr.game.gems < t.gem && (this.btnMask.active = !0);
                            break;
                        case r.ShopItemType.Ads:
                            if (cc.Mgr.Utils.GetSysTime() - cc.Mgr.game.lastAdsGetPlantTime < cc.Mgr.Config.shopAdsInterval) {
                                this.btnType = r.ShopItemType.Money;
                                var n = this.caculateMoneyPrice(i, t),
                                    o = this.checkUseDiscount(n);
                                this.btn.setDetails(c.mainUI, h[0], c.mainUI, g[0], cc.Mgr.Utils.getNumStr(n)), this.btn.setBtnIconScale(.8), this.btn.setBtnLblFntSize(23), cc.Mgr.game.money < o && (this.btnMask.active = !0)
                            } else this.btnTip.active = !0, 1 == this.useShare ? this.btn.setDetails(c.mainUI, h[1], c.mainUI, g[3], cc.Mgr.Utils.getTranslation("btn-free")) : this.btn.setDetails(c.mainUI, h[1], c.mainUI, g[2], cc.Mgr.Utils.getTranslation("btn-free")), this.btn.setBtnLblFntSize(28), this.btn.setBtnIconScale(1);
                            break;
                        case r.ShopItemType.Money:
                        case r.ShopItemType.Null:
                            n = this.caculateMoneyPrice(i, t), o = this.checkUseDiscount(n);
                            this.btn.setDetails(c.mainUI, h[0], c.mainUI, g[0], cc.Mgr.Utils.getNumStr(n)), this.btn.setBtnIconScale(.8), this.btn.setBtnLblFntSize(23), cc.Mgr.game.money < o && (this.btnMask.active = !0)
                    }
                },
                btnClick: function() {
                    switch (cc.Mgr.AudioMgr.playSFX("click"), this.btnType) {
                        case r.ShopItemType.Lock:
                            cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("be-lock"));
                            break;
                        case r.ShopItemType.Gem:
                            this.buyPlantByGem();
                            break;
                        case r.ShopItemType.Ads:
                            this.getPlantByAds();
                            break;
                        case r.ShopItemType.Money:
                        case r.ShopItemType.Null:
                            this.buyPlantByMoney()
                    }
                },
                buyPlantByGem: function() {
                    if (this.checkCanGrownPlantOrPot())
                        if (cc.Mgr.game.gems >= this.plantData.gem) {
                            cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("buy-success")), cc.Mgr.flowerPotMgr.addShopFlowerFot(this.plantData.level, 1), cc.Mgr.game.lastBuyPlantTime = cc.Mgr.Utils.GetSysTimeByMilliSecend() / 10, cc.Mgr.game.gems -= this.plantData.gem, cc.Mgr.UIMgr.InGameUI.RefreshAssetData(), this.setData(this.plantData.level, cc.Mgr.game.plantMaxLv), cc.director.GlobalEvent.emit(s.BuyPlantInShop, {});
                            var e = cc.Mgr.TDEvent.CostGem + "Shop";
                            cc.Mgr.PlatformController.AldEventStatis(e, {
                                Cost: this.plantData.gem
                            })
                        } else cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoGems"))
                },
                buyPlantByMoney: function() {
                    if (this.checkCanGrownPlantOrPot()) {
                        var e = this.checkUseDiscount(this.price);
                        cc.Mgr.game.money >= e ? (cc.Mgr.game.discountLeftTimes > 0 && (cc.Mgr.game.discountLeftTimes -= 1), cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("buy-success")), cc.Mgr.game.plantBuyRecord[this.plantData.level]++, cc.Mgr.flowerPotMgr.addShopFlowerFot(this.plantData.level, 1), cc.Mgr.game.lastBuyPlantTime = cc.Mgr.Utils.GetSysTimeByMilliSecend() / 10, cc.Mgr.game.money -= e, cc.Mgr.UIMgr.InGameUI.RefreshAssetData(), this.setData(this.plantData.level, cc.Mgr.game.plantMaxLv), cc.Mgr.UIMgr.InGameUI.refreshDiscountState(!0), cc.Mgr.UIMgr.shopUINode.getComponent("shopUI").refreshDiscountState(), cc.director.GlobalEvent.emit(s.BuyPlantInShop, {})) : cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoCoins"))
                    }
                },
                getPlantByAds: function() {
                    var e = this;
                    1 == this.useShare ? cc.Mgr.PlatformController.ShareToFriend(1, function() {
                        e.useShare = !1, cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("newItem-title")), cc.Mgr.flowerPotMgr.addShopFlowerFot(e.plantData.level, 1), cc.Mgr.game.lastAdsGetPlantTime = cc.Mgr.Utils.GetSysTime(), e.schedule(e.countTime, 1), e.setData(e.plantData.level, cc.Mgr.game.plantMaxLv), cc.Mgr.UIMgr.openPlantGetUI("get", e.plantData.level), cc.Mgr.UIMgr.closeShop()
                    }) : cc.Mgr.AdsMgr.ShowVideoAds(9, function(t) {
                        0 == t && (Math.random() < cc.Mgr.Config.buyPlantInShopUseShareRatio ? e.useShare = !0 : e.useShare = !1, cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("newItem-title")), cc.Mgr.flowerPotMgr.addShopFlowerFot(e.plantData.level, 1), cc.Mgr.game.lastAdsGetPlantTime = cc.Mgr.Utils.GetSysTime(), e.schedule(e.countTime, 1), e.setData(e.plantData.level, cc.Mgr.game.plantMaxLv), cc.Mgr.UIMgr.openPlantGetUI("get", e.plantData.level), cc.Mgr.UIMgr.closeShop())
                    })
                },
                checkCanGrownPlantOrPot: function() {
                    return !!cc.Mgr.plantMgr.checkHasAnySpaceGird() || (cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoSpaceForPlant")), !1)
                }
            });
        t.exports = d, cc._RF.pop()
    }, {
        AtlasType: "AtlasType",
        DataType: "DataType",
        Event: "Event",
        MyButton: "MyButton",
        MyEnum: "MyEnum",
        MySprite: "MySprite"
    }],
    shopUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "4df25oqcDlJKahKpPUsJnfw", "shopUI");
        var n = e("shopItem"),
            o = e("MyEnum"),
            a = e("DataType"),
            s = (e("uiConfig"), cc.Class({
                extends: cc.Component,
                properties: {
                    itemParent: cc.Node,
                    shopItemList: [n],
                    loadNode: cc.Node,
                    scrollView: cc.ScrollView,
                    closeNode: cc.Node,
                    discountLeftLbl: cc.Label
                },
                refreshDiscountState: function() {
                    cc.Mgr.game.discountLeftTimes <= 0 ? this.discountLeftLbl.string = "" : this.discountLeftLbl.string = "Siêu giảm giá còn lại: " + cc.Mgr.game.discountLeftTimes + " lần"
                },
                doTween: function() {
                    this.closeNode.opacity = 0, this.closeNode.scale = 0, cc.tween(this.closeNode).to(.15, {
                        opacity: 255,
                        scale: 1
                    }).start()
                },
                start: function() {
                    cc.Mgr.UIMgr.shopUI = this, this.caculatScrollBoundBoxSize()
                },
                caculatScrollBoundBoxSize: function() {
                    var e = this.scrollView.node.convertToWorldSpaceAR(cc.v2(this.scrollView.node.x - this.scrollView.node.anchorX * this.scrollView.node.width, this.scrollView.node.y - this.scrollView.node.anchorY * this.scrollView.node.height));
                    cc.log("scroll \u7684 \u4f4d\u7f6e = " + e.y + "\u64cd\u4ed6\u5988\u6bd4\u5783\u573etw"), this.svBBoxRect = cc.rect(0, -125, this.scrollView.node.width, this.scrollView.node.height + 400), cc.log(e.x + "  " + e.y + "scroll \u7684 \u4f4d\u7f6e = " + this.svBBoxRect.height)
                },
                scrollCallBack: function() {
                    var e = this;
                    this.scrollView.content.children.forEach(function(t) {
                        t.getBoundingBoxToWorld().intersects(e.svBBoxRect) ? 255 != t.opacity && (t.opacity = 255) : 0 != t.opacity && (t.opacity = 0)
                    })
                },
                caculateScrollPercent: function(e) {
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (e <= 6) return (s = {}).per = this.scrollView.node.height / 2, s.posIndex = 0, s;
                    for (var t = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.ShopData, e), i = 0; i < 9; i++) {
                        var n = "";
                        switch (i) {
                            case 0:
                                n = t.MAX;
                                break;
                            case 1:
                                n = t.MAX_1;
                                break;
                            case 2:
                                n = t.MAX_2;
                                break;
                            case 3:
                                n = t.MAX_3;
                                break;
                            case 4:
                                n = t.MAX_4;
                                break;
                            case 5:
                                n = t.MAX_5;
                                break;
                            case 6:
                                n = t.MAX_6;
                                break;
                            case 7:
                                n = t.MAX_7;
                                break;
                            case 8:
                                n = t.MAX_8
                        }
                        if (n == o.ShopItemType.Ads) {
                            var s = {};
                            return e >= 7 && e <= 11 ? (s.per = e - i - 1 >= 0 ? this.scrollView.node.height / 2 + 186 * (e - i - 2) : this.scrollView.node.height / 2, s.posIndex = e - i, console.log("===Percent = " + s.per + "   " + this.scrollView.node.height)) : (s.per = e - i - 1 >= 0 ? this.scrollView.node.height / 2 + 186 * (e - i - 1) : this.scrollView.node.height / 2, s.posIndex = e - i, console.log("===Percent = " + s.per + "   " + this.scrollView.node.height)), s
                        }
                    }
                    return (s = {}).per = this.scrollView.node.height / 2 + 186 * (e - 1), s.posIndex = e, console.log("===Percent = " + s.per + "   " + this.scrollView.node.height), s
                },
                onEnable: function() {
                    this.scrollView.node.on("scrolling", this.onScrollingDrawCallOpt, this)
                },
                onDisable: function() {
                    this.scrollView.node.off("scrolling", this.onScrollingDrawCallOpt, this)
                },
                onScrollingDrawCallOpt: function() {
                    0 != this.scrollView.content.children.length && this.scrollCallBack()
                },
                firstOpen: function() {
                    var e = this.caculateScrollPercent(cc.Mgr.game.plantMaxLv, !0),
                        t = e.per,
                        i = e.posIndex;
                    this.isFirstOpen = !0, this.firstPosIndex = i, this.topIndex = i - 3, i < 3 && (this.topIndex = 0), this.bottomIndex = i + 6 + 3, console.log(this.topIndex + "      ====\u9ebb\u75f9 \u5783\u573e\u73a9\u610f====" + this.bottomIndex);
                    var n = this.bottomIndex - this.topIndex;
                    this.scrollView.setContentPosition(cc.v2(0, t)), console.log("positionY = " + t);
                    var o = this.topIndex;
                    this.showItems = function() {
                        if (o >= this.bottomIndex || o >= 60) {
                            cc.log("\u53d6\u6d88\u8ba1\u65f6\u5668"), this.unschedule(this.showItems);
                            this.scheduleOnce(function() {
                                this.loadingLeftTopObjs(), this.loadingLeftBottomObjs()
                            }, .15)
                        } else {
                            this.loadNode.active = !1;
                            var e = cc.instantiate(cc.Mgr.UIItemMgr.getShopItemPre());
                            e.parent = this.itemParent, e.position = cc.v2(0, -186 * o), cc.log("\u4f4d\u7f6e Y = " + e.position.y), e.opacity = 0, this.scrollCallBack();
                            var t = e.getComponent("shopItem");
                            t.setData(1 + o, cc.Mgr.game.plantMaxLv), this.shopItemList[o] = t, o += 1
                        }
                    }, this.schedule(this.showItems, .005, n, .01)
                },
                loadingLeftTopObjs: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if (0 == this.topIndex) {
                        var t = 9;
                        this.showItemsA = function() {
                            if (t >= 60) return cc.log("\u53d6\u6d88\u8ba1\u65f6\u5668"), void this.unschedule(this.showItemsA);
                            this.loadNode.active = !1;
                            var e = cc.instantiate(cc.Mgr.UIItemMgr.getShopItemPre());
                            e.parent = this.itemParent, e.position = cc.v2(0, -186 * t), cc.log("\u4f4d\u7f6e Y = " + e.position.y), e.opacity = 0, this.scrollCallBack();
                            var i = e.getComponent("shopItem");
                            i.setData(1 + t, cc.Mgr.game.plantMaxLv), this.shopItemList[t] = i, t += 1
                        }, this.schedule(this.showItemsA, .005, 51, .01)
                    } else {
                        t = 0;
                        this.showItemsC = function() {
                            if (t >= this.topIndex) return cc.log("\u53d6\u6d88\u8ba1\u65f6\u5668"), this.unschedule(this.showItemsC), void("function" == typeof e && e());
                            this.loadNode.active = !1;
                            var i = cc.instantiate(cc.Mgr.UIItemMgr.getShopItemPre());
                            cc.log("============caonimei============"), i.parent = this.itemParent, i.position = cc.v2(0, -186 * t), cc.log("\u4f4d\u7f6e Y = " + i.position.y), i.opacity = 0, this.scrollCallBack();
                            var n = i.getComponent("shopItem");
                            n.setData(1 + t, cc.Mgr.game.plantMaxLv), this.shopItemList[t] = n, t += 1
                        }, this.schedule(this.showItemsC, .005, this.topIndex, .01)
                    }
                },
                loadingLeftBottomObjs: function() {
                    console.log("====\u9ebb\u75f9 \u5783\u573e\u73a9\u610f====" + this.bottomIndex);
                    var e = this.bottomIndex,
                        t = 60 - this.bottomIndex;
                    this.showItemsD = function() {
                        if (e >= 60) return cc.log("\u53d6\u6d88\u8ba1\u65f6\u5668"), void this.unschedule(this.showItemsD);
                        this.loadNode.active = !1;
                        var t = cc.instantiate(cc.Mgr.UIItemMgr.getShopItemPre());
                        t.parent = this.itemParent, t.position = cc.v2(0, -186 * e), cc.log("\u4f4d\u7f6e Y = " + t.position.y), t.opacity = 0, this.scrollCallBack();
                        var i = t.getComponent("shopItem");
                        i.setData(1 + e, cc.Mgr.game.plantMaxLv), this.shopItemList[e] = i, e += 1
                    }, this.schedule(this.showItemsD, .005, t, .01)
                },
                showUI: function() {
                    cc.Mgr.PlatformController.ShowMoreGameBtn(!1), this.itemParent.position = cc.v2(0, this.scrollViewSize / 2), this.node.width = cc.Mgr.Config.winSize.width, this.node.height = cc.Mgr.Config.winSize.height;
                    cc.Mgr.game.plantMaxLv;
                    this.loadNode.active = !0;
                    if (this.refreshDiscountState(), this.doTween(), 0 == this.shopItemList.length) this.scheduleOnce(function() {
                        this.firstOpen()
                    }, .1);
                    else {
                        cc.log("\u9ebb\u75f9\u7684\u5b9e\u4f8b\u5316\u4e2a\u6bdb\u7ebf"), this.loadNode.active = !1;
                        var e = this.caculateScrollPercent(cc.Mgr.game.plantMaxLv).per;
                        this.scrollView.setContentPosition(cc.v2(0, e)), this.scrollCallBack(), console.log("positionY = " + e);
                        for (var t = 0; t < this.shopItemList.length; t++) this.shopItemList[t] && this.shopItemList[t].setData(1 + t, cc.Mgr.game.plantMaxLv)
                    }
                },
                closeUI: function() {
                    if (cc.Mgr.AudioMgr.playSFX("click"), 60 == this.shopItemList.length && null != this.shopItemList[0]) {
                        for (var e = 0; e < this.shopItemList.length; e++) this.shopItemList[e].node.opacity = 0;
                        cc.Mgr.PlatformController.ShowMoreGameBtn(!0), Math.random() < cc.Mgr.Config.insertAdRatio && cc.Mgr.AdsMgr.ShowInsertAds(1), this.node.active = !1
                    }
                }
            }));
        t.exports = s, cc._RF.pop()
    }, {
        DataType: "DataType",
        MyEnum: "MyEnum",
        shopItem: "shopItem",
        uiConfig: "uiConfig"
    }],
    signItem: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "3c9f1h+BlBBR7/SXjBF04w/", "signItem");
        var n = e("RewardType"),
            o = cc.Class({
                extends: cc.Component,
                properties: {
                    rewardLbl: cc.Label,
                    maskNode: cc.Node,
                    tipNode: cc.Node
                },
                setData: function(e, t) {
                    var i = cc.Mgr.Config.signDataListSub[e - 1].rewardNum;
                    if (i = cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 5 ? cc.Mgr.Config.signDataListSub[e - 1].rewardNum : cc.Mgr.game.level < cc.Mgr.Config.gameCheckLv + 13 ? cc.Mgr.Config.signDataListSub[e - 1].rewardNum + 3 : cc.Mgr.Config.signDataListSub[e - 1].rewardNum + 5, cc.Mgr.Config.signDataListSub[e - 1].rewardType == n.Money) {
                        var o = cc.Mgr.game.plantMaxLv - 5 > 0 ? cc.Mgr.game.plantMaxLv - 5 : 1;
                        i = Math.ceil(cc.Mgr.game.getRewardMoney(o, 1) * cc.Mgr.Config.signDataListSub[e - 1].ratio)
                    }
                    this.rewardLbl.string = "x" + cc.Mgr.Utils.getNumStr(i), this.maskNode.active = !1, this.tipNode.active = !1, cc.Mgr.game.hasSignDayNum > e ? (this.maskNode.active = !0, this.rewardLbl.string = "Đã xong") : t || cc.Mgr.game.hasSignDayNum + 1 != e ? t && cc.Mgr.game.hasSignDayNum == e ? (this.maskNode.active = !0, this.rewardLbl.string = "Đã xong", this.tipNode.active = !1) : t || cc.Mgr.game.hasSignDayNum != e || (this.maskNode.active = !0, this.rewardLbl.string = "Đã xong") : this.tipNode.active = !0
                }
            });
        t.exports = o, cc._RF.pop()
    }, {
        RewardType: "RewardType"
    }],
    signUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "6829f2ww7tBf5as/J6UUHf8", "signUI");
        var n = e("signItem"),
            o = e("CButton"),
            a = e("RewardType"),
            s = cc.Class({
                extends: cc.Component,
                properties: {
                    dayList: [n],
                    adsDoubleSignBtn: o,
                    adsDoubleSignBtnMask: cc.Node,
                    signBtn: cc.Button,
                    hasSignTip: cc.Node
                },
                showUI: function() {
                    cc.Mgr.PlatformController.ShowMoreGameBtn(!1), this.node.width = cc.Mgr.Config.winSize.width, this.node.height = cc.Mgr.Config.winSize.height, this.adsDoubleSignBtn.interactable = !0, this.signBtn.interactable = !0, this.adsDoubleSignBtnMask.active = !1, this.hasSignTip.active = !1, this.signBtn.node.color = cc.Mgr.Utils.hexToColor("#ffffff"), this.todayHasSign = !1, cc.Mgr.Utils.timeToDate(cc.Mgr.Utils.GetSysTime()) - cc.Mgr.Utils.timeToDate(cc.Mgr.game.lastSignDate) < 1 ? (this.todayHasSign = !0, this.adsDoubleSignBtn.interactable = !1, this.signBtn.interactable = !1, this.adsDoubleSignBtnMask.active = !0, this.adsDoubleSignBtn.node.active = !1, this.signBtn.node.active = !1, this.hasSignTip.active = !0, this.signBtn.node.color = cc.Mgr.Utils.hexToColor("#B6B6B6")) : cc.Mgr.game.hasSignDayNum >= 7 && (cc.Mgr.game.hasSignDayNum = 0);
                    for (var e = 0; e < this.dayList.length; e++) this.dayList[e].setData(e + 1, this.todayHasSign);
                    cc.Mgr.AdsMgr.ShowBannerAds(1)
                },
                adsDoubleSign: function() {
                    var e = this;
                    cc.Mgr.AdsMgr.ShowVideoAds(8, function(t) {
                        if (0 == t) {
                            var i = "gem",
                                n = cc.Mgr.Config.signDataListSub[cc.Mgr.game.hasSignDayNum].rewardNum;
                            if (n = cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 5 ? cc.Mgr.Config.signDataListSub[cc.Mgr.game.hasSignDayNum].rewardNum : cc.Mgr.game.level < cc.Mgr.Config.gameCheckLv + 13 ? cc.Mgr.Config.signDataListSub[cc.Mgr.game.hasSignDayNum].rewardNum + 3 : cc.Mgr.Config.signDataListSub[cc.Mgr.game.hasSignDayNum].rewardNum + 5, cc.Mgr.Config.signDataListSub[cc.Mgr.game.hasSignDayNum].rewardType == a.Money) {
                                i = "money";
                                var o = cc.Mgr.game.plantMaxLv - 5 > 0 ? cc.Mgr.game.plantMaxLv - 5 : 1;
                                n = Math.ceil(cc.Mgr.game.getRewardMoney(o, 1) * cc.Mgr.Config.signDataListSub[cc.Mgr.game.hasSignDayNum].ratio)
                            }
                            e.getRewards(2 * n, i), cc.Mgr.game.hasSignDayNum += 1, cc.Mgr.game.lastSignDate = cc.Mgr.Utils.GetSysTime(), e.showUI()
                        }
                    })
                },
                getRewards: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "gem";
                    cc.Mgr.UIMgr.openAssetGetUI(t, e, null, "sign")
                },
                signClick: function() {
                    cc.Mgr.AudioMgr.playSFX("click");
                    var e = "gem",
                        t = cc.Mgr.Config.signDataListSub[cc.Mgr.game.hasSignDayNum].rewardNum;
                    if (t = cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 5 ? cc.Mgr.Config.signDataListSub[cc.Mgr.game.hasSignDayNum].rewardNum : cc.Mgr.game.level < cc.Mgr.Config.gameCheckLv + 13 ? cc.Mgr.Config.signDataListSub[cc.Mgr.game.hasSignDayNum].rewardNum + 3 : cc.Mgr.Config.signDataListSub[cc.Mgr.game.hasSignDayNum].rewardNum + 5, cc.Mgr.Config.signDataListSub[cc.Mgr.game.hasSignDayNum].rewardType == a.Money) {
                        e = "money";
                        var i = cc.Mgr.game.plantMaxLv - 4 > 0 ? cc.Mgr.game.plantMaxLv - 4 : 1;
                        t = Math.ceil(cc.Mgr.game.getRewardMoney(i, 1) * cc.Mgr.Config.signDataListSub[cc.Mgr.game.hasSignDayNum].ratio)
                    }
                    this.getRewards(t, e), cc.Mgr.game.hasSignDayNum += 1, cc.Mgr.game.lastSignDate = cc.Mgr.Utils.GetSysTime(), this.showUI()
                },
                closeUI: function() {
                    cc.Mgr.PlatformController.ShowMoreGameBtn(!0), cc.Mgr.AdsMgr.HideBannerAd(), cc.Mgr.AudioMgr.playSFX("click"), cc.Mgr.UIMgr.InGameUI.checkHasSignState(), Math.random() < cc.Mgr.Config.insertAdRatio && cc.Mgr.AdsMgr.ShowInsertAds(1), this.node.active = !1
                }
            });
        t.exports = s, cc._RF.pop()
    }, {
        CButton: "CButton",
        RewardType: "RewardType",
        signItem: "signItem"
    }],
    smallResult: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "9f145ZGhENGPJ7xjNZ2pNC0", "smallResult");
        var n = e("MyEnum"),
            o = cc.Class({
                extends: cc.Component,
                properties: {
                    dragonSuc: dragonBones.ArmatureDisplay,
                    dragonFail: dragonBones.ArmatureDisplay
                },
                start: function() {},
                show: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.dragonSuc.node.active = e, this.dragonFail.node.active = !e, e ? (cc.Mgr.AudioMgr.playSFX(n.AudioType.success2), this.dragonSuc.playAnimation("newAnimation", 1)) : (cc.Mgr.AudioMgr.playSFX(n.AudioType.fail), this.dragonFail.playAnimation("newAnimation", 1)), this.scheduleOnce(function() {
                        this.node.active = !1
                    }, 1.8)
                },
                onAnimComplete: function() {
                    this.node.active = !1
                },
                playAnimation: function() {
                    this.dragon.playAnimation("newAnimation", 1)
                }
            });
        t.exports = o, cc._RF.pop()
    }, {
        MyEnum: "MyEnum"
    }],
    "socket-io": [function(e, t, i) {
        (function(n) {
            "use strict";
            cc._RF.push(t, "393290vPc1IIYfh8FrmxcNZ", "socket-io");
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            cc.sys.isNative || function(e) {
                if ("object" === (void 0 === i ? "undefined" : o(i)) && void 0 !== t) t.exports = e();
                else if ("function" == typeof define && define.amd) define([], e);
                else {
                    ("undefined" != typeof window ? window : void 0 !== n ? n : "undefined" != typeof self ? self : this).io = e()
                }
            }(function() {
                return function t(i, n, o) {
                    function a(c, r) {
                        if (!n[c]) {
                            if (!i[c]) {
                                var l = "function" == typeof e && e;
                                if (!r && l) return l(c, !0);
                                if (s) return s(c, !0);
                                var h = new Error("Cannot find module '" + c + "'");
                                throw h.code = "MODULE_NOT_FOUND", h
                            }
                            var g = n[c] = {
                                exports: {}
                            };
                            i[c][0].call(g.exports, function(e) {
                                var t = i[c][1][e];
                                return a(t || e)
                            }, g, g.exports, t, i, n, o)
                        }
                        return n[c].exports
                    }
                    for (var s = "function" == typeof e && e, c = 0; c < o.length; c++) a(o[c]);
                    return a
                }({
                    1: [function(e, t, i) {
                        t.exports = e("./lib/")
                    }, {
                        "./lib/": 2
                    }],
                    2: [function(e, t, i) {
                        t.exports = e("./socket"), t.exports.parser = e("engine.io-parser")
                    }, {
                        "./socket": 3,
                        "engine.io-parser": 19
                    }],
                    3: [function(e, t, i) {
                        (function(i) {
                            var n = e("./transports"),
                                a = e("component-emitter"),
                                s = e("debug")("engine.io-client:socket"),
                                c = e("indexof"),
                                r = e("engine.io-parser"),
                                l = e("parseuri"),
                                h = e("parsejson"),
                                g = e("parseqs");

                            function d(e, t) {
                                if (!(this instanceof d)) return new d(e, t);
                                t = t || {}, e && "object" == (void 0 === e ? "undefined" : o(e)) && (t = e, e = null), e ? (e = l(e), t.hostname = e.host, t.secure = "https" == e.protocol || "wss" == e.protocol, t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = l(t.host).host), this.secure = null != t.secure ? t.secure : i.location && "https:" == location.protocol, t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.agent = t.agent || !1, this.hostname = t.hostname || (i.location ? location.hostname : "localhost"), this.port = t.port || (i.location && location.port ? location.port : this.secure ? 443 : 80), this.query = t.query || {}, "string" == typeof this.query && (this.query = g.decode(this.query)), this.upgrade = !1 !== t.upgrade, this.path = (t.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!t.forceJSONP, this.jsonp = !1 !== t.jsonp, this.forceBase64 = !!t.forceBase64, this.enablesXDR = !!t.enablesXDR, this.timestampParam = t.timestampParam || "t", this.timestampRequests = t.timestampRequests, this.transports = t.transports || ["polling", "websocket"], this.readyState = "", this.writeBuffer = [], this.policyPort = t.policyPort || 843, this.rememberUpgrade = t.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = t.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== t.perMessageDeflate && (t.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = t.pfx || null, this.key = t.key || null, this.passphrase = t.passphrase || null, this.cert = t.cert || null, this.ca = t.ca || null, this.ciphers = t.ciphers || null, this.rejectUnauthorized = void 0 === t.rejectUnauthorized || t.rejectUnauthorized;
                                var n = "object" == (void 0 === i ? "undefined" : o(i)) && i;
                                n.global === n && t.extraHeaders && Object.keys(t.extraHeaders).length > 0 && (this.extraHeaders = t.extraHeaders), this.open()
                            }

                            function p(e) {
                                var t = {};
                                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                                return t
                            }
                            t.exports = d, d.priorWebsocketSuccess = !1, a(d.prototype), d.protocol = r.protocol, d.Socket = d, d.Transport = e("./transport"), d.transports = e("./transports"), d.parser = e("engine.io-parser"), d.prototype.createTransport = function(e) {
                                s('creating transport "%s"', e);
                                var t = p(this.query);
                                return t.EIO = r.protocol, t.transport = e, this.id && (t.sid = this.id), new n[e]({
                                    agent: this.agent,
                                    hostname: this.hostname,
                                    port: this.port,
                                    secure: this.secure,
                                    path: this.path,
                                    query: t,
                                    forceJSONP: this.forceJSONP,
                                    jsonp: this.jsonp,
                                    forceBase64: this.forceBase64,
                                    enablesXDR: this.enablesXDR,
                                    timestampRequests: this.timestampRequests,
                                    timestampParam: this.timestampParam,
                                    policyPort: this.policyPort,
                                    socket: this,
                                    pfx: this.pfx,
                                    key: this.key,
                                    passphrase: this.passphrase,
                                    cert: this.cert,
                                    ca: this.ca,
                                    ciphers: this.ciphers,
                                    rejectUnauthorized: this.rejectUnauthorized,
                                    perMessageDeflate: this.perMessageDeflate,
                                    extraHeaders: this.extraHeaders
                                })
                            }, d.prototype.open = function() {
                                var e;
                                if (this.rememberUpgrade && d.priorWebsocketSuccess && -1 != this.transports.indexOf("websocket")) e = "websocket";
                                else {
                                    if (0 === this.transports.length) {
                                        var t = this;
                                        return void setTimeout(function() {
                                            t.emit("error", "No transports available")
                                        }, 0)
                                    }
                                    e = this.transports[0]
                                }
                                this.readyState = "opening";
                                try {
                                    e = this.createTransport(e)
                                } catch (e) {
                                    return this.transports.shift(), void this.open()
                                }
                                e.open(), this.setTransport(e)
                            }, d.prototype.setTransport = function(e) {
                                s("setting transport %s", e.name);
                                var t = this;
                                this.transport && (s("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = e, e.on("drain", function() {
                                    t.onDrain()
                                }).on("packet", function(e) {
                                    t.onPacket(e)
                                }).on("error", function(e) {
                                    t.onError(e)
                                }).on("close", function() {
                                    t.onClose("transport close")
                                })
                            }, d.prototype.probe = function(e) {
                                s('probing transport "%s"', e);
                                var t = this.createTransport(e, {
                                        probe: 1
                                    }),
                                    i = !1,
                                    n = this;

                                function o() {
                                    if (n.onlyBinaryUpgrades) {
                                        var o = !this.supportsBinary && n.transport.supportsBinary;
                                        i = i || o
                                    }
                                    i || (s('probe transport "%s" opened', e), t.send([{
                                        type: "ping",
                                        data: "probe"
                                    }]), t.once("packet", function(o) {
                                        if (!i)
                                            if ("pong" == o.type && "probe" == o.data) {
                                                if (s('probe transport "%s" pong', e), n.upgrading = !0, n.emit("upgrading", t), !t) return;
                                                d.priorWebsocketSuccess = "websocket" == t.name, s('pausing current transport "%s"', n.transport.name), n.transport.pause(function() {
                                                    i || "closed" != n.readyState && (s("changing transport and sending upgrade packet"), g(), n.setTransport(t), t.send([{
                                                        type: "upgrade"
                                                    }]), n.emit("upgrade", t), t = null, n.upgrading = !1, n.flush())
                                                })
                                            } else {
                                                s('probe transport "%s" failed', e);
                                                var a = new Error("probe error");
                                                a.transport = t.name, n.emit("upgradeError", a)
                                            }
                                    }))
                                }

                                function a() {
                                    i || (i = !0, g(), t.close(), t = null)
                                }

                                function c(i) {
                                    var o = new Error("probe error: " + i);
                                    o.transport = t.name, a(), s('probe transport "%s" failed because of error: %s', e, i), n.emit("upgradeError", o)
                                }

                                function r() {
                                    c("transport closed")
                                }

                                function l() {
                                    c("socket closed")
                                }

                                function h(e) {
                                    t && e.name != t.name && (s('"%s" works - aborting "%s"', e.name, t.name), a())
                                }

                                function g() {
                                    t.removeListener("open", o), t.removeListener("error", c), t.removeListener("close", r), n.removeListener("close", l), n.removeListener("upgrading", h)
                                }
                                d.priorWebsocketSuccess = !1, t.once("open", o), t.once("error", c), t.once("close", r), this.once("close", l), this.once("upgrading", h), t.open()
                            }, d.prototype.onOpen = function() {
                                if (s("socket open"), this.readyState = "open", d.priorWebsocketSuccess = "websocket" == this.transport.name, this.emit("open"), this.flush(), "open" == this.readyState && this.upgrade && this.transport.pause) {
                                    s("starting upgrade probes");
                                    for (var e = 0, t = this.upgrades.length; e < t; e++) this.probe(this.upgrades[e])
                                }
                            }, d.prototype.onPacket = function(e) {
                                if ("opening" == this.readyState || "open" == this.readyState) switch (s('socket receive: type "%s", data "%s"', e.type, e.data), this.emit("packet", e), this.emit("heartbeat"), e.type) {
                                    case "open":
                                        this.onHandshake(h(e.data));
                                        break;
                                    case "pong":
                                        this.setPing(), this.emit("pong");
                                        break;
                                    case "error":
                                        var t = new Error("server error");
                                        t.code = e.data, this.onError(t);
                                        break;
                                    case "message":
                                        this.emit("data", e.data), this.emit("message", e.data)
                                } else s('packet received with socket readyState "%s"', this.readyState)
                            }, d.prototype.onHandshake = function(e) {
                                this.emit("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.onOpen(), "closed" != this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
                            }, d.prototype.onHeartbeat = function(e) {
                                clearTimeout(this.pingTimeoutTimer);
                                var t = this;
                                t.pingTimeoutTimer = setTimeout(function() {
                                    "closed" != t.readyState && t.onClose("ping timeout")
                                }, e || t.pingInterval + t.pingTimeout)
                            }, d.prototype.setPing = function() {
                                var e = this;
                                clearTimeout(e.pingIntervalTimer), e.pingIntervalTimer = setTimeout(function() {
                                    s("writing ping packet - expecting pong within %sms", e.pingTimeout), e.ping(), e.onHeartbeat(e.pingTimeout)
                                }, e.pingInterval)
                            }, d.prototype.ping = function() {
                                var e = this;
                                this.sendPacket("ping", function() {
                                    e.emit("ping")
                                })
                            }, d.prototype.onDrain = function() {
                                this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
                            }, d.prototype.flush = function() {
                                "closed" != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (s("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
                            }, d.prototype.write = d.prototype.send = function(e, t, i) {
                                return this.sendPacket("message", e, t, i), this
                            }, d.prototype.sendPacket = function(e, t, i, n) {
                                if ("function" == typeof t && (n = t, t = void 0), "function" == typeof i && (n = i, i = null), "closing" != this.readyState && "closed" != this.readyState) {
                                    (i = i || {}).compress = !1 !== i.compress;
                                    var o = {
                                        type: e,
                                        data: t,
                                        options: i
                                    };
                                    this.emit("packetCreate", o), this.writeBuffer.push(o), n && this.once("flush", n), this.flush()
                                }
                            }, d.prototype.close = function() {
                                if ("opening" == this.readyState || "open" == this.readyState) {
                                    this.readyState = "closing";
                                    var e = this;
                                    this.writeBuffer.length ? this.once("drain", function() {
                                        this.upgrading ? n() : t()
                                    }) : this.upgrading ? n() : t()
                                }

                                function t() {
                                    e.onClose("forced close"), s("socket closing - telling transport to close"), e.transport.close()
                                }

                                function i() {
                                    e.removeListener("upgrade", i), e.removeListener("upgradeError", i), t()
                                }

                                function n() {
                                    e.once("upgrade", i), e.once("upgradeError", i)
                                }
                                return this
                            }, d.prototype.onError = function(e) {
                                s("socket error %j", e), d.priorWebsocketSuccess = !1, this.emit("error", e), this.onClose("transport error", e)
                            }, d.prototype.onClose = function(e, t) {
                                if ("opening" == this.readyState || "open" == this.readyState || "closing" == this.readyState) {
                                    s('socket close with reason: "%s"', e);
                                    clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", e, t), this.writeBuffer = [], this.prevBufferLen = 0
                                }
                            }, d.prototype.filterUpgrades = function(e) {
                                for (var t = [], i = 0, n = e.length; i < n; i++) ~c(this.transports, e[i]) && t.push(e[i]);
                                return t
                            }
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : {})
                    }, {
                        "./transport": 4,
                        "./transports": 5,
                        "component-emitter": 15,
                        debug: 17,
                        "engine.io-parser": 19,
                        indexof: 23,
                        parsejson: 26,
                        parseqs: 27,
                        parseuri: 28
                    }],
                    4: [function(e, t, i) {
                        var n = e("engine.io-parser"),
                            o = e("component-emitter");

                        function a(e) {
                            this.path = e.path, this.hostname = e.hostname, this.port = e.port, this.secure = e.secure, this.query = e.query, this.timestampParam = e.timestampParam, this.timestampRequests = e.timestampRequests, this.readyState = "", this.agent = e.agent || !1, this.socket = e.socket, this.enablesXDR = e.enablesXDR, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.extraHeaders = e.extraHeaders
                        }
                        t.exports = a, o(a.prototype), a.prototype.onError = function(e, t) {
                            var i = new Error(e);
                            return i.type = "TransportError", i.description = t, this.emit("error", i), this
                        }, a.prototype.open = function() {
                            return "closed" != this.readyState && "" != this.readyState || (this.readyState = "opening", this.doOpen()), this
                        }, a.prototype.close = function() {
                            return "opening" != this.readyState && "open" != this.readyState || (this.doClose(), this.onClose()), this
                        }, a.prototype.send = function(e) {
                            if ("open" != this.readyState) throw new Error("Transport not open");
                            this.write(e)
                        }, a.prototype.onOpen = function() {
                            this.readyState = "open", this.writable = !0, this.emit("open")
                        }, a.prototype.onData = function(e) {
                            var t = n.decodePacket(e, this.socket.binaryType);
                            this.onPacket(t)
                        }, a.prototype.onPacket = function(e) {
                            this.emit("packet", e)
                        }, a.prototype.onClose = function() {
                            this.readyState = "closed", this.emit("close")
                        }
                    }, {
                        "component-emitter": 15,
                        "engine.io-parser": 19
                    }],
                    5: [function(e, t, i) {
                        (function(t) {
                            var n = e("xmlhttprequest-ssl"),
                                o = e("./polling-xhr"),
                                a = e("./polling-jsonp"),
                                s = e("./websocket");
                            i.polling = function(e) {
                                var i = !1,
                                    s = !1,
                                    c = !1 !== e.jsonp;
                                if (t.location) {
                                    var r = "https:" == location.protocol,
                                        l = location.port;
                                    l || (l = r ? 443 : 80), i = e.hostname != location.hostname || l != e.port, s = e.secure != r
                                }
                                if (e.xdomain = i, e.xscheme = s, "open" in new n(e) && !e.forceJSONP) return new o(e);
                                if (!c) throw new Error("JSONP disabled");
                                return new a(e)
                            }, i.websocket = s
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : {})
                    }, {
                        "./polling-jsonp": 6,
                        "./polling-xhr": 7,
                        "./websocket": 9,
                        "xmlhttprequest-ssl": 10
                    }],
                    6: [function(e, t, i) {
                        (function(i) {
                            var n = e("./polling"),
                                o = e("component-inherit");
                            t.exports = l;
                            var a, s = /\n/g,
                                c = /\\n/g;

                            function r() {}

                            function l(e) {
                                n.call(this, e), this.query = this.query || {}, a || (i.___eio || (i.___eio = []), a = i.___eio), this.index = a.length;
                                var t = this;
                                a.push(function(e) {
                                    t.onData(e)
                                }), this.query.j = this.index, i.document && i.addEventListener && i.addEventListener("beforeunload", function() {
                                    t.script && (t.script.onerror = r)
                                }, !1)
                            }
                            o(l, n), l.prototype.supportsBinary = !1, l.prototype.doClose = function() {
                                this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), n.prototype.doClose.call(this)
                            }, l.prototype.doPoll = function() {
                                var e = this,
                                    t = document.createElement("script");
                                this.script && (this.script.parentNode.removeChild(this.script), this.script = null), t.async = !0, t.src = this.uri(), t.onerror = function(t) {
                                    e.onError("jsonp poll error", t)
                                };
                                var i = document.getElementsByTagName("script")[0];
                                i ? i.parentNode.insertBefore(t, i) : (document.head || document.body).appendChild(t), this.script = t, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function() {
                                    var e = document.createElement("iframe");
                                    document.body.appendChild(e), document.body.removeChild(e)
                                }, 100)
                            }, l.prototype.doWrite = function(e, t) {
                                var i = this;
                                if (!this.form) {
                                    var n, o = document.createElement("form"),
                                        a = document.createElement("textarea"),
                                        r = this.iframeId = "eio_iframe_" + this.index;
                                    o.className = "socketio", o.style.position = "absolute", o.style.top = "-1000px", o.style.left = "-1000px", o.target = r, o.method = "POST", o.setAttribute("accept-charset", "utf-8"), a.name = "d", o.appendChild(a), document.body.appendChild(o), this.form = o, this.area = a
                                }

                                function l() {
                                    h(), t()
                                }

                                function h() {
                                    if (i.iframe) try {
                                        i.form.removeChild(i.iframe)
                                    } catch (e) {
                                        i.onError("jsonp polling iframe removal error", e)
                                    }
                                    try {
                                        var e = '<iframe src="javascript:0" name="' + i.iframeId + '">';
                                        n = document.createElement(e)
                                    } catch (e) {
                                        (n = document.createElement("iframe")).name = i.iframeId, n.src = "javascript:0"
                                    }
                                    n.id = i.iframeId, i.form.appendChild(n), i.iframe = n
                                }
                                this.form.action = this.uri(), h(), e = e.replace(c, "\\\n"), this.area.value = e.replace(s, "\\n");
                                try {
                                    this.form.submit()
                                } catch (e) {}
                                this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                                    "complete" == i.iframe.readyState && l()
                                } : this.iframe.onload = l
                            }
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : {})
                    }, {
                        "./polling": 8,
                        "component-inherit": 16
                    }],
                    7: [function(e, t, i) {
                        (function(i) {
                            var n = e("xmlhttprequest-ssl"),
                                o = e("./polling"),
                                a = e("component-emitter"),
                                s = e("component-inherit"),
                                c = e("debug")("engine.io-client:polling-xhr");

                            function r() {}

                            function l(e) {
                                if (o.call(this, e), i.location) {
                                    var t = "https:" == location.protocol,
                                        n = location.port;
                                    n || (n = t ? 443 : 80), this.xd = e.hostname != i.location.hostname || n != e.port, this.xs = e.secure != t
                                } else this.extraHeaders = e.extraHeaders
                            }

                            function h(e) {
                                this.method = e.method || "GET", this.uri = e.uri, this.xd = !!e.xd, this.xs = !!e.xs, this.async = !1 !== e.async, this.data = void 0 != e.data ? e.data : null, this.agent = e.agent, this.isBinary = e.isBinary, this.supportsBinary = e.supportsBinary, this.enablesXDR = e.enablesXDR, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.extraHeaders = e.extraHeaders, this.create()
                            }

                            function g() {
                                for (var e in h.requests) h.requests.hasOwnProperty(e) && h.requests[e].abort()
                            }
                            t.exports = l, t.exports.Request = h, s(l, o), l.prototype.supportsBinary = !0, l.prototype.request = function(e) {
                                return (e = e || {}).uri = this.uri(), e.xd = this.xd, e.xs = this.xs, e.agent = this.agent || !1, e.supportsBinary = this.supportsBinary, e.enablesXDR = this.enablesXDR, e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized, e.extraHeaders = this.extraHeaders, new h(e)
                            }, l.prototype.doWrite = function(e, t) {
                                var i = "string" != typeof e && void 0 !== e,
                                    n = this.request({
                                        method: "POST",
                                        data: e,
                                        isBinary: i
                                    }),
                                    o = this;
                                n.on("success", t), n.on("error", function(e) {
                                    o.onError("xhr post error", e)
                                }), this.sendXhr = n
                            }, l.prototype.doPoll = function() {
                                c("xhr poll");
                                var e = this.request(),
                                    t = this;
                                e.on("data", function(e) {
                                    t.onData(e)
                                }), e.on("error", function(e) {
                                    t.onError("xhr poll error", e)
                                }), this.pollXhr = e
                            }, a(h.prototype), h.prototype.create = function() {
                                var e = {
                                    agent: this.agent,
                                    xdomain: this.xd,
                                    xscheme: this.xs,
                                    enablesXDR: this.enablesXDR
                                };
                                e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized;
                                var t = this.xhr = new n(e),
                                    o = this;
                                try {
                                    c("xhr open %s: %s", this.method, this.uri), t.open(this.method, this.uri, this.async);
                                    try {
                                        if (this.extraHeaders)
                                            for (var a in t.setDisableHeaderCheck(!0), this.extraHeaders) this.extraHeaders.hasOwnProperty(a) && t.setRequestHeader(a, this.extraHeaders[a])
                                    } catch (e) {}
                                    if (this.supportsBinary && (t.responseType = "arraybuffer"), "POST" == this.method) try {
                                        this.isBinary ? t.setRequestHeader("Content-type", "application/octet-stream") : t.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                                    } catch (e) {}
                                    "withCredentials" in t && (t.withCredentials = !0), this.hasXDR() ? (t.onload = function() {
                                        o.onLoad()
                                    }, t.onerror = function() {
                                        o.onError(t.responseText)
                                    }) : t.onreadystatechange = function() {
                                        4 == t.readyState && (200 == t.status || 1223 == t.status ? o.onLoad() : setTimeout(function() {
                                            o.onError(t.status)
                                        }, 0))
                                    }, c("xhr data %s", this.data), t.send(this.data)
                                } catch (e) {
                                    return void setTimeout(function() {
                                        o.onError(e)
                                    }, 0)
                                }
                                i.document && (this.index = h.requestsCount++, h.requests[this.index] = this)
                            }, h.prototype.onSuccess = function() {
                                this.emit("success"), this.cleanup()
                            }, h.prototype.onData = function(e) {
                                this.emit("data", e), this.onSuccess()
                            }, h.prototype.onError = function(e) {
                                this.emit("error", e), this.cleanup(!0)
                            }, h.prototype.cleanup = function(e) {
                                if (void 0 !== this.xhr && null !== this.xhr) {
                                    if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = r : this.xhr.onreadystatechange = r, e) try {
                                        this.xhr.abort()
                                    } catch (e) {}
                                    i.document && delete h.requests[this.index], this.xhr = null
                                }
                            }, h.prototype.onLoad = function() {
                                var e;
                                try {
                                    var t;
                                    try {
                                        t = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                                    } catch (e) {}
                                    if ("application/octet-stream" === t) e = this.xhr.response;
                                    else if (this.supportsBinary) try {
                                        e = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response))
                                    } catch (t) {
                                        for (var i = new Uint8Array(this.xhr.response), n = [], o = 0, a = i.length; o < a; o++) n.push(i[o]);
                                        e = String.fromCharCode.apply(null, n)
                                    } else e = this.xhr.responseText
                                } catch (e) {
                                    this.onError(e)
                                }
                                null != e && this.onData(e)
                            }, h.prototype.hasXDR = function() {
                                return void 0 !== i.XDomainRequest && !this.xs && this.enablesXDR
                            }, h.prototype.abort = function() {
                                this.cleanup()
                            }, i.document && (h.requestsCount = 0, h.requests = {}, i.attachEvent ? i.attachEvent("onunload", g) : i.addEventListener && i.addEventListener("beforeunload", g, !1))
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : {})
                    }, {
                        "./polling": 8,
                        "component-emitter": 15,
                        "component-inherit": 16,
                        debug: 17,
                        "xmlhttprequest-ssl": 10
                    }],
                    8: [function(e, t, i) {
                        var n = e("../transport"),
                            o = e("parseqs"),
                            a = e("engine.io-parser"),
                            s = e("component-inherit"),
                            c = e("yeast"),
                            r = e("debug")("engine.io-client:polling");
                        t.exports = h;
                        var l = null != new(e("xmlhttprequest-ssl"))({
                            xdomain: !1
                        }).responseType;

                        function h(e) {
                            var t = e && e.forceBase64;
                            l && !t || (this.supportsBinary = !1), n.call(this, e)
                        }
                        s(h, n), h.prototype.name = "polling", h.prototype.doOpen = function() {
                            this.poll()
                        }, h.prototype.pause = function(e) {
                            var t = this;

                            function i() {
                                r("paused"), t.readyState = "paused", e()
                            }
                            if (this.readyState = "pausing", this.polling || !this.writable) {
                                var n = 0;
                                this.polling && (r("we are currently polling - waiting to pause"), n++, this.once("pollComplete", function() {
                                    r("pre-pause polling complete"), --n || i()
                                })), this.writable || (r("we are currently writing - waiting to pause"), n++, this.once("drain", function() {
                                    r("pre-pause writing complete"), --n || i()
                                }))
                            } else i()
                        }, h.prototype.poll = function() {
                            r("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
                        }, h.prototype.onData = function(e) {
                            var t = this;
                            r("polling got data %s", e);
                            a.decodePayload(e, this.socket.binaryType, function(e, i, n) {
                                if ("opening" == t.readyState && t.onOpen(), "close" == e.type) return t.onClose(), !1;
                                t.onPacket(e)
                            }), "closed" != this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" == this.readyState ? this.poll() : r('ignoring poll - transport state "%s"', this.readyState))
                        }, h.prototype.doClose = function() {
                            var e = this;

                            function t() {
                                r("writing close packet"), e.write([{
                                    type: "close"
                                }])
                            }
                            "open" == this.readyState ? (r("transport open - closing"), t()) : (r("transport not open - deferring close"), this.once("open", t))
                        }, h.prototype.write = function(e) {
                            var t = this;
                            this.writable = !1;
                            var i = function() {
                                t.writable = !0, t.emit("drain")
                            };
                            t = this;
                            a.encodePayload(e, this.supportsBinary, function(e) {
                                t.doWrite(e, i)
                            })
                        }, h.prototype.uri = function() {
                            var e = this.query || {},
                                t = this.secure ? "https" : "http",
                                i = "";
                            return !1 !== this.timestampRequests && (e[this.timestampParam] = c()), this.supportsBinary || e.sid || (e.b64 = 1), e = o.encode(e), this.port && ("https" == t && 443 != this.port || "http" == t && 80 != this.port) && (i = ":" + this.port), e.length && (e = "?" + e), t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + i + this.path + e
                        }
                    }, {
                        "../transport": 4,
                        "component-inherit": 16,
                        debug: 17,
                        "engine.io-parser": 19,
                        parseqs: 27,
                        "xmlhttprequest-ssl": 10,
                        yeast: 30
                    }],
                    9: [function(e, t, i) {
                        (function(i) {
                            var n = e("../transport"),
                                o = e("engine.io-parser"),
                                a = e("parseqs"),
                                s = e("component-inherit"),
                                c = e("yeast"),
                                r = e("debug")("engine.io-client:websocket"),
                                l = i.WebSocket || i.MozWebSocket,
                                h = l;
                            if (!h && "undefined" == typeof window) try {
                                h = e("ws")
                            } catch (e) {}

                            function g(e) {
                                e && e.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = e.perMessageDeflate, n.call(this, e)
                            }
                            t.exports = g, s(g, n), g.prototype.name = "websocket", g.prototype.supportsBinary = !0, g.prototype.doOpen = function() {
                                if (this.check()) {
                                    var e = this.uri(),
                                        t = {
                                            agent: this.agent,
                                            perMessageDeflate: this.perMessageDeflate
                                        };
                                    t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (t.headers = this.extraHeaders), this.ws = l ? new h(e) : new h(e, void 0, t), void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "buffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
                                }
                            }, g.prototype.addEventListeners = function() {
                                var e = this;
                                this.ws.onopen = function() {
                                    e.onOpen()
                                }, this.ws.onclose = function() {
                                    e.onClose()
                                }, this.ws.onmessage = function(t) {
                                    e.onData(t.data)
                                }, this.ws.onerror = function(t) {
                                    e.onError("websocket error", t)
                                }
                            }, "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (g.prototype.onData = function(e) {
                                var t = this;
                                setTimeout(function() {
                                    n.prototype.onData.call(t, e)
                                }, 0)
                            }), g.prototype.write = function(e) {
                                var t = this;
                                this.writable = !1;
                                for (var n = e.length, a = 0, s = n; a < s; a++)(function(e) {
                                    o.encodePacket(e, t.supportsBinary, function(o) {
                                        if (!l) {
                                            var a = {};
                                            if (e.options && (a.compress = e.options.compress), t.perMessageDeflate)("string" == typeof o ? i.Buffer.byteLength(o) : o.length) < t.perMessageDeflate.threshold && (a.compress = !1)
                                        }
                                        try {
                                            l ? t.ws.send(o) : t.ws.send(o, a)
                                        } catch (e) {
                                            r("websocket closed before onclose event")
                                        }--n || c()
                                    })
                                })(e[a]);

                                function c() {
                                    t.emit("flush"), setTimeout(function() {
                                        t.writable = !0, t.emit("drain")
                                    }, 0)
                                }
                            }, g.prototype.onClose = function() {
                                n.prototype.onClose.call(this)
                            }, g.prototype.doClose = function() {
                                void 0 !== this.ws && this.ws.close()
                            }, g.prototype.uri = function() {
                                var e = this.query || {},
                                    t = this.secure ? "wss" : "ws",
                                    i = "";
                                return this.port && ("wss" == t && 443 != this.port || "ws" == t && 80 != this.port) && (i = ":" + this.port), this.timestampRequests && (e[this.timestampParam] = c()), this.supportsBinary || (e.b64 = 1), (e = a.encode(e)).length && (e = "?" + e), t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + i + this.path + e
                            }, g.prototype.check = function() {
                                return !(!h || "__initialize" in h && this.name === g.prototype.name)
                            }
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : {})
                    }, {
                        "../transport": 4,
                        "component-inherit": 16,
                        debug: 17,
                        "engine.io-parser": 19,
                        parseqs: 27,
                        ws: void 0,
                        yeast: 30
                    }],
                    10: [function(e, t, i) {
                        var n = e("has-cors");
                        t.exports = function(e) {
                            var t = e.xdomain,
                                i = e.xscheme,
                                o = e.enablesXDR;
                            try {
                                if ("undefined" != typeof XMLHttpRequest && (!t || n)) return new XMLHttpRequest
                            } catch (e) {}
                            try {
                                if ("undefined" != typeof XDomainRequest && !i && o) return new XDomainRequest
                            } catch (e) {}
                            if (!t) try {
                                return new ActiveXObject("Microsoft.XMLHTTP")
                            } catch (e) {}
                        }
                    }, {
                        "has-cors": 22
                    }],
                    11: [function(e, t, i) {
                        function n() {}
                        t.exports = function(e, t, i) {
                            var o = !1;
                            return i = i || n, a.count = e, 0 === e ? t() : a;

                            function a(e, n) {
                                if (a.count <= 0) throw new Error("after called too many times");
                                --a.count, e ? (o = !0, t(e), t = i) : 0 !== a.count || o || t(null, n)
                            }
                        }
                    }, {}],
                    12: [function(e, t, i) {
                        t.exports = function(e, t, i) {
                            var n = e.byteLength;
                            if (t = t || 0, i = i || n, e.slice) return e.slice(t, i);
                            if (t < 0 && (t += n), i < 0 && (i += n), i > n && (i = n), t >= n || t >= i || 0 === n) return new ArrayBuffer(0);
                            for (var o = new Uint8Array(e), a = new Uint8Array(i - t), s = t, c = 0; s < i; s++, c++) a[c] = o[s];
                            return a.buffer
                        }
                    }, {}],
                    13: [function(e, t, i) {
                        (function(e) {
                            i.encode = function(t) {
                                var i, n = new Uint8Array(t),
                                    o = n.length,
                                    a = "";
                                for (i = 0; i < o; i += 3) a += e[n[i] >> 2], a += e[(3 & n[i]) << 4 | n[i + 1] >> 4], a += e[(15 & n[i + 1]) << 2 | n[i + 2] >> 6], a += e[63 & n[i + 2]];
                                return o % 3 == 2 ? a = a.substring(0, a.length - 1) + "=" : o % 3 == 1 && (a = a.substring(0, a.length - 2) + "=="), a
                            }, i.decode = function(t) {
                                var i, n, o, a, s, c = .75 * t.length,
                                    r = t.length,
                                    l = 0;
                                "=" === t[t.length - 1] && (c--, "=" === t[t.length - 2] && c--);
                                var h = new ArrayBuffer(c),
                                    g = new Uint8Array(h);
                                for (i = 0; i < r; i += 4) n = e.indexOf(t[i]), o = e.indexOf(t[i + 1]), a = e.indexOf(t[i + 2]), s = e.indexOf(t[i + 3]), g[l++] = n << 2 | o >> 4, g[l++] = (15 & o) << 4 | a >> 2, g[l++] = (3 & a) << 6 | 63 & s;
                                return h
                            }
                        })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
                    }, {}],
                    14: [function(e, t, i) {
                        (function(e) {
                            var i = e.BlobBuilder || e.WebKitBlobBuilder || e.MSBlobBuilder || e.MozBlobBuilder,
                                n = function() {
                                    try {
                                        return 2 === new Blob(["hi"]).size
                                    } catch (e) {
                                        return !1
                                    }
                                }(),
                                o = n && function() {
                                    try {
                                        return 2 === new Blob([new Uint8Array([1, 2])]).size
                                    } catch (e) {
                                        return !1
                                    }
                                }(),
                                a = i && i.prototype.append && i.prototype.getBlob;

                            function s(e) {
                                for (var t = 0; t < e.length; t++) {
                                    var i = e[t];
                                    if (i.buffer instanceof ArrayBuffer) {
                                        var n = i.buffer;
                                        if (i.byteLength !== n.byteLength) {
                                            var o = new Uint8Array(i.byteLength);
                                            o.set(new Uint8Array(n, i.byteOffset, i.byteLength)), n = o.buffer
                                        }
                                        e[t] = n
                                    }
                                }
                            }

                            function c(e, t) {
                                t = t || {};
                                var n = new i;
                                s(e);
                                for (var o = 0; o < e.length; o++) n.append(e[o]);
                                return t.type ? n.getBlob(t.type) : n.getBlob()
                            }

                            function r(e, t) {
                                return s(e), new Blob(e, t || {})
                            }
                            t.exports = n ? o ? e.Blob : r : a ? c : void 0
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : {})
                    }, {}],
                    15: [function(e, t, i) {
                        function n(e) {
                            if (e) return o(e)
                        }

                        function o(e) {
                            for (var t in n.prototype) e[t] = n.prototype[t];
                            return e
                        }
                        t.exports = n, n.prototype.on = n.prototype.addEventListener = function(e, t) {
                            return this._callbacks = this._callbacks || {}, (this._callbacks[e] = this._callbacks[e] || []).push(t), this
                        }, n.prototype.once = function(e, t) {
                            var i = this;

                            function n() {
                                i.off(e, n), t.apply(this, arguments)
                            }
                            return this._callbacks = this._callbacks || {}, n.fn = t, this.on(e, n), this
                        }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(e, t) {
                            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                            var i, n = this._callbacks[e];
                            if (!n) return this;
                            if (1 == arguments.length) return delete this._callbacks[e], this;
                            for (var o = 0; o < n.length; o++)
                                if ((i = n[o]) === t || i.fn === t) {
                                    n.splice(o, 1);
                                    break
                                } return this
                        }, n.prototype.emit = function(e) {
                            this._callbacks = this._callbacks || {};
                            var t = [].slice.call(arguments, 1),
                                i = this._callbacks[e];
                            if (i)
                                for (var n = 0, o = (i = i.slice(0)).length; n < o; ++n) i[n].apply(this, t);
                            return this
                        }, n.prototype.listeners = function(e) {
                            return this._callbacks = this._callbacks || {}, this._callbacks[e] || []
                        }, n.prototype.hasListeners = function(e) {
                            return !!this.listeners(e).length
                        }
                    }, {}],
                    16: [function(e, t, i) {
                        t.exports = function(e, t) {
                            var i = function() {};
                            i.prototype = t.prototype, e.prototype = new i, e.prototype.constructor = e
                        }
                    }, {}],
                    17: [function(e, t, i) {
                        function n() {
                            var e;
                            try {
                                e = i.storage.debug
                            } catch (e) {}
                            return e
                        }(i = t.exports = e("./debug")).log = function() {
                            return "object" === ("undefined" == typeof console ? "undefined" : o(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments)
                        }, i.formatArgs = function() {
                            var e = arguments,
                                t = this.useColors;
                            if (e[0] = (t ? "%c" : "") + this.namespace + (t ? " %c" : " ") + e[0] + (t ? "%c " : " ") + "+" + i.humanize(this.diff), !t) return e;
                            var n = "color: " + this.color,
                                o = 0,
                                a = 0;
                            return (e = [e[0], n, "color: inherit"].concat(Array.prototype.slice.call(e, 1)))[0].replace(/%[a-z%]/g, function(e) {
                                "%%" !== e && "%c" === e && (a = ++o)
                            }), e.splice(a, 0, n), e
                        }, i.save = function(e) {
                            try {
                                null == e ? i.storage.removeItem("debug") : i.storage.debug = e
                            } catch (e) {}
                        }, i.load = n, i.useColors = function() {
                            return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
                        }, i.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
                            try {
                                return window.localStorage
                            } catch (e) {}
                        }(), i.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], i.formatters.j = function(e) {
                            return JSON.stringify(e)
                        }, i.enable(n())
                    }, {
                        "./debug": 18
                    }],
                    18: [function(e, t, i) {
                        (i = t.exports = function(e) {
                            function t() {}

                            function a() {
                                var e = a,
                                    t = +new Date,
                                    s = t - (n || t);
                                e.diff = s, e.prev = n, e.curr = t, n = t, null == e.useColors && (e.useColors = i.useColors()), null == e.color && e.useColors && (e.color = i.colors[o++ % i.colors.length]);
                                var c = Array.prototype.slice.call(arguments);
                                c[0] = i.coerce(c[0]), "string" != typeof c[0] && (c = ["%o"].concat(c));
                                var r = 0;
                                c[0] = c[0].replace(/%([a-z%])/g, function(t, n) {
                                    if ("%%" === t) return t;
                                    r++;
                                    var o = i.formatters[n];
                                    if ("function" == typeof o) {
                                        var a = c[r];
                                        t = o.call(e, a), c.splice(r, 1), r--
                                    }
                                    return t
                                }), "function" == typeof i.formatArgs && (c = i.formatArgs.apply(e, c));
                                var l = a.log || i.log || console.log.bind(console);
                                l.apply(e, c)
                            }
                            t.enabled = !1, a.enabled = !0;
                            var s = i.enabled(e) ? a : t;
                            return s.namespace = e, s
                        }).coerce = function(e) {
                            return e instanceof Error ? e.stack || e.message : e
                        }, i.disable = function() {
                            i.enable("")
                        }, i.enable = function(e) {
                            i.save(e);
                            for (var t = (e || "").split(/[\s,]+/), n = t.length, o = 0; o < n; o++) t[o] && ("-" === (e = t[o].replace(/\*/g, ".*?"))[0] ? i.skips.push(new RegExp("^" + e.substr(1) + "$")) : i.names.push(new RegExp("^" + e + "$")))
                        }, i.enabled = function(e) {
                            var t, n;
                            for (t = 0, n = i.skips.length; t < n; t++)
                                if (i.skips[t].test(e)) return !1;
                            for (t = 0, n = i.names.length; t < n; t++)
                                if (i.names[t].test(e)) return !0;
                            return !1
                        }, i.humanize = e("ms"), i.names = [], i.skips = [], i.formatters = {};
                        var n, o = 0
                    }, {
                        ms: 25
                    }],
                    19: [function(e, t, i) {
                        (function(t) {
                            var n = e("./keys"),
                                o = e("has-binary"),
                                a = e("arraybuffer.slice"),
                                s = e("base64-arraybuffer"),
                                c = e("after"),
                                r = e("utf8"),
                                l = navigator.userAgent.match(/Android/i),
                                h = /PhantomJS/i.test(navigator.userAgent),
                                g = l || h;
                            i.protocol = 3;
                            var d = i.packets = {
                                    open: 0,
                                    close: 1,
                                    ping: 2,
                                    pong: 3,
                                    message: 4,
                                    upgrade: 5,
                                    noop: 6
                                },
                                p = n(d),
                                u = {
                                    type: "error",
                                    data: "parser error"
                                },
                                f = e("blob");

                            function m(e, t) {
                                return t("b" + i.packets[e.type] + e.data.data)
                            }

                            function M(e, t, n) {
                                if (!t) return i.encodeBase64Packet(e, n);
                                var o = e.data,
                                    a = new Uint8Array(o),
                                    s = new Uint8Array(1 + o.byteLength);
                                s[0] = d[e.type];
                                for (var c = 0; c < a.length; c++) s[c + 1] = a[c];
                                return n(s.buffer)
                            }

                            function v(e, t, n) {
                                if (!t) return i.encodeBase64Packet(e, n);
                                var o = new FileReader;
                                return o.onload = function() {
                                    e.data = o.result, i.encodePacket(e, t, !0, n)
                                }, o.readAsArrayBuffer(e.data)
                            }

                            function y(e, t, n) {
                                if (!t) return i.encodeBase64Packet(e, n);
                                if (g) return v(e, t, n);
                                var o = new Uint8Array(1);
                                return o[0] = d[e.type], n(new f([o.buffer, e.data]))
                            }

                            function b(e, t, i) {
                                for (var n = new Array(e.length), o = c(e.length, i), a = function(e, i, o) {
                                        t(i, function(t, i) {
                                            n[e] = i, o(t, n)
                                        })
                                    }, s = 0; s < e.length; s++) a(s, e[s], o)
                            }
                            i.encodePacket = function(e, i, n, o) {
                                "function" == typeof i && (o = i, i = !1), "function" == typeof n && (o = n, n = null);
                                var a = void 0 === e.data ? void 0 : e.data.buffer || e.data;
                                if (t.ArrayBuffer && a instanceof ArrayBuffer) return M(e, i, o);
                                if (f && a instanceof t.Blob) return y(e, i, o);
                                if (a && a.base64) return m(e, o);
                                var s = d[e.type];
                                return void 0 !== e.data && (s += n ? r.encode(String(e.data)) : String(e.data)), o("" + s)
                            }, i.encodeBase64Packet = function(e, n) {
                                var o, a = "b" + i.packets[e.type];
                                if (f && e.data instanceof t.Blob) {
                                    var s = new FileReader;
                                    return s.onload = function() {
                                        var e = s.result.split(",")[1];
                                        n(a + e)
                                    }, s.readAsDataURL(e.data)
                                }
                                try {
                                    o = String.fromCharCode.apply(null, new Uint8Array(e.data))
                                } catch (t) {
                                    for (var c = new Uint8Array(e.data), r = new Array(c.length), l = 0; l < c.length; l++) r[l] = c[l];
                                    o = String.fromCharCode.apply(null, r)
                                }
                                return a += t.btoa(o), n(a)
                            }, i.decodePacket = function(e, t, n) {
                                if ("string" == typeof e || void 0 === e) {
                                    if ("b" == e.charAt(0)) return i.decodeBase64Packet(e.substr(1), t);
                                    if (n) try {
                                        e = r.decode(e)
                                    } catch (e) {
                                        return u
                                    }
                                    var o = e.charAt(0);
                                    return Number(o) == o && p[o] ? e.length > 1 ? {
                                        type: p[o],
                                        data: e.substring(1)
                                    } : {
                                        type: p[o]
                                    } : u
                                }
                                o = new Uint8Array(e)[0];
                                var s = a(e, 1);
                                return f && "blob" === t && (s = new f([s])), {
                                    type: p[o],
                                    data: s
                                }
                            }, i.decodeBase64Packet = function(e, i) {
                                var n = p[e.charAt(0)];
                                if (!t.ArrayBuffer) return {
                                    type: n,
                                    data: {
                                        base64: !0,
                                        data: e.substr(1)
                                    }
                                };
                                var o = s.decode(e.substr(1));
                                return "blob" === i && f && (o = new f([o])), {
                                    type: n,
                                    data: o
                                }
                            }, i.encodePayload = function(e, t, n) {
                                "function" == typeof t && (n = t, t = null);
                                var a = o(e);
                                if (t && a) return f && !g ? i.encodePayloadAsBlob(e, n) : i.encodePayloadAsArrayBuffer(e, n);
                                if (!e.length) return n("0:");

                                function s(e) {
                                    return e.length + ":" + e
                                }
                                b(e, function(e, n) {
                                    i.encodePacket(e, !!a && t, !0, function(e) {
                                        n(null, s(e))
                                    })
                                }, function(e, t) {
                                    return n(t.join(""))
                                })
                            }, i.decodePayload = function(e, t, n) {
                                if ("string" != typeof e) return i.decodePayloadAsBinary(e, t, n);
                                var o;
                                if ("function" == typeof t && (n = t, t = null), "" == e) return n(u, 0, 1);
                                for (var a, s, c = "", r = 0, l = e.length; r < l; r++) {
                                    var h = e.charAt(r);
                                    if (":" != h) c += h;
                                    else {
                                        if ("" == c || c != (a = Number(c))) return n(u, 0, 1);
                                        if (c != (s = e.substr(r + 1, a)).length) return n(u, 0, 1);
                                        if (s.length) {
                                            if (o = i.decodePacket(s, t, !0), u.type == o.type && u.data == o.data) return n(u, 0, 1);
                                            if (!1 === n(o, r + a, l)) return
                                        }
                                        r += a, c = ""
                                    }
                                }
                                return "" != c ? n(u, 0, 1) : void 0
                            }, i.encodePayloadAsArrayBuffer = function(e, t) {
                                if (!e.length) return t(new ArrayBuffer(0));
                                b(e, function(e, t) {
                                    i.encodePacket(e, !0, !0, function(e) {
                                        return t(null, e)
                                    })
                                }, function(e, i) {
                                    var n = i.reduce(function(e, t) {
                                            var i;
                                            return e + (i = "string" == typeof t ? t.length : t.byteLength).toString().length + i + 2
                                        }, 0),
                                        o = new Uint8Array(n),
                                        a = 0;
                                    return i.forEach(function(e) {
                                        var t = "string" == typeof e,
                                            i = e;
                                        if (t) {
                                            for (var n = new Uint8Array(e.length), s = 0; s < e.length; s++) n[s] = e.charCodeAt(s);
                                            i = n.buffer
                                        }
                                        o[a++] = t ? 0 : 1;
                                        var c = i.byteLength.toString();
                                        for (s = 0; s < c.length; s++) o[a++] = parseInt(c[s]);
                                        o[a++] = 255;
                                        for (n = new Uint8Array(i), s = 0; s < n.length; s++) o[a++] = n[s]
                                    }), t(o.buffer)
                                })
                            }, i.encodePayloadAsBlob = function(e, t) {
                                b(e, function(e, t) {
                                    i.encodePacket(e, !0, !0, function(e) {
                                        var i = new Uint8Array(1);
                                        if (i[0] = 1, "string" == typeof e) {
                                            for (var n = new Uint8Array(e.length), o = 0; o < e.length; o++) n[o] = e.charCodeAt(o);
                                            e = n.buffer, i[0] = 0
                                        }
                                        var a = (e instanceof ArrayBuffer ? e.byteLength : e.size).toString(),
                                            s = new Uint8Array(a.length + 1);
                                        for (o = 0; o < a.length; o++) s[o] = parseInt(a[o]);
                                        if (s[a.length] = 255, f) {
                                            var c = new f([i.buffer, s.buffer, e]);
                                            t(null, c)
                                        }
                                    })
                                }, function(e, i) {
                                    return t(new f(i))
                                })
                            }, i.decodePayloadAsBinary = function(e, t, n) {
                                "function" == typeof t && (n = t, t = null);
                                for (var o = e, s = [], c = !1; o.byteLength > 0;) {
                                    for (var r = new Uint8Array(o), l = 0 === r[0], h = "", g = 1; 255 != r[g]; g++) {
                                        if (h.length > 310) {
                                            c = !0;
                                            break
                                        }
                                        h += r[g]
                                    }
                                    if (c) return n(u, 0, 1);
                                    o = a(o, 2 + h.length), h = parseInt(h);
                                    var d = a(o, 0, h);
                                    if (l) try {
                                        d = String.fromCharCode.apply(null, new Uint8Array(d))
                                    } catch (e) {
                                        var p = new Uint8Array(d);
                                        d = "";
                                        for (g = 0; g < p.length; g++) d += String.fromCharCode(p[g])
                                    }
                                    s.push(d), o = a(o, h)
                                }
                                var f = s.length;
                                s.forEach(function(e, o) {
                                    n(i.decodePacket(e, t, !0), o, f)
                                })
                            }
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : {})
                    }, {
                        "./keys": 20,
                        after: 11,
                        "arraybuffer.slice": 12,
                        "base64-arraybuffer": 13,
                        blob: 14,
                        "has-binary": 21,
                        utf8: 29
                    }],
                    20: [function(e, t, i) {
                        t.exports = Object.keys || function(e) {
                            var t = [],
                                i = Object.prototype.hasOwnProperty;
                            for (var n in e) i.call(e, n) && t.push(n);
                            return t
                        }
                    }, {}],
                    21: [function(e, t, i) {
                        (function(i) {
                            var n = e("isarray");
                            t.exports = function(e) {
                                return function e(t) {
                                    if (!t) return !1;
                                    if (i.Buffer && i.Buffer.isBuffer(t) || i.ArrayBuffer && t instanceof ArrayBuffer || i.Blob && t instanceof Blob || i.File && t instanceof File) return !0;
                                    if (n(t)) {
                                        for (var a = 0; a < t.length; a++)
                                            if (e(t[a])) return !0
                                    } else if (t && "object" == (void 0 === t ? "undefined" : o(t)))
                                        for (var s in t.toJSON && (t = t.toJSON()), t)
                                            if (Object.prototype.hasOwnProperty.call(t, s) && e(t[s])) return !0;
                                    return !1
                                }(e)
                            }
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : {})
                    }, {
                        isarray: 24
                    }],
                    22: [function(e, t, i) {
                        try {
                            t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
                        } catch (e) {
                            t.exports = !1
                        }
                    }, {}],
                    23: [function(e, t, i) {
                        var n = [].indexOf;
                        t.exports = function(e, t) {
                            if (n) return e.indexOf(t);
                            for (var i = 0; i < e.length; ++i)
                                if (e[i] === t) return i;
                            return -1
                        }
                    }, {}],
                    24: [function(e, t, i) {
                        t.exports = Array.isArray || function(e) {
                            return "[object Array]" == Object.prototype.toString.call(e)
                        }
                    }, {}],
                    25: [function(e, t, i) {
                        var n = 1e3,
                            o = 60 * n,
                            a = 60 * o,
                            s = 24 * a,
                            c = 365.25 * s;

                        function r(e) {
                            if (!((e = "" + e).length > 1e4)) {
                                var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                                if (t) {
                                    var i = parseFloat(t[1]);
                                    switch ((t[2] || "ms").toLowerCase()) {
                                        case "years":
                                        case "year":
                                        case "yrs":
                                        case "yr":
                                        case "y":
                                            return i * c;
                                        case "days":
                                        case "day":
                                        case "d":
                                            return i * s;
                                        case "hours":
                                        case "hour":
                                        case "hrs":
                                        case "hr":
                                        case "h":
                                            return i * a;
                                        case "minutes":
                                        case "minute":
                                        case "mins":
                                        case "min":
                                        case "m":
                                            return i * o;
                                        case "seconds":
                                        case "second":
                                        case "secs":
                                        case "sec":
                                        case "s":
                                            return i * n;
                                        case "milliseconds":
                                        case "millisecond":
                                        case "msecs":
                                        case "msec":
                                        case "ms":
                                            return i
                                    }
                                }
                            }
                        }

                        function l(e) {
                            return e >= s ? Math.round(e / s) + "d" : e >= a ? Math.round(e / a) + "h" : e >= o ? Math.round(e / o) + "m" : e >= n ? Math.round(e / n) + "s" : e + "ms"
                        }

                        function h(e) {
                            return g(e, s, "day") || g(e, a, "hour") || g(e, o, "minute") || g(e, n, "second") || e + " ms"
                        }

                        function g(e, t, i) {
                            if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + i : Math.ceil(e / t) + " " + i + "s"
                        }
                        t.exports = function(e, t) {
                            return t = t || {}, "string" == typeof e ? r(e) : t.long ? h(e) : l(e)
                        }
                    }, {}],
                    26: [function(e, t, i) {
                        (function(e) {
                            var i = /^[\],:{}\s]*$/,
                                n = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                                o = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                                a = /(?:^|:|,)(?:\s*\[)+/g,
                                s = /^\s+/,
                                c = /\s+$/;
                            t.exports = function(t) {
                                return "string" == typeof t && t ? (t = t.replace(s, "").replace(c, ""), e.JSON && JSON.parse ? JSON.parse(t) : i.test(t.replace(n, "@").replace(o, "]").replace(a, "")) ? new Function("return " + t)() : void 0) : null
                            }
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : {})
                    }, {}],
                    27: [function(e, t, i) {
                        i.encode = function(e) {
                            var t = "";
                            for (var i in e) e.hasOwnProperty(i) && (t.length && (t += "&"), t += encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
                            return t
                        }, i.decode = function(e) {
                            for (var t = {}, i = e.split("&"), n = 0, o = i.length; n < o; n++) {
                                var a = i[n].split("=");
                                t[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
                            }
                            return t
                        }
                    }, {}],
                    28: [function(e, t, i) {
                        var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                            o = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
                        t.exports = function(e) {
                            var t = e,
                                i = e.indexOf("["),
                                a = e.indexOf("]"); - 1 != i && -1 != a && (e = e.substring(0, i) + e.substring(i, a).replace(/:/g, ";") + e.substring(a, e.length));
                            for (var s = n.exec(e || ""), c = {}, r = 14; r--;) c[o[r]] = s[r] || "";
                            return -1 != i && -1 != a && (c.source = t, c.host = c.host.substring(1, c.host.length - 1).replace(/;/g, ":"), c.authority = c.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), c.ipv6uri = !0), c
                        }
                    }, {}],
                    29: [function(e, t, i) {
                        (function(e) {
                            (function(n) {
                                var a = "object" == (void 0 === i ? "undefined" : o(i)) && i,
                                    s = "object" == (void 0 === t ? "undefined" : o(t)) && t && t.exports == a && t,
                                    c = "object" == (void 0 === e ? "undefined" : o(e)) && e;
                                c.global !== c && c.window !== c || (n = c);
                                var r, l, h, g = String.fromCharCode;

                                function d(e) {
                                    for (var t, i, n = [], o = 0, a = e.length; o < a;)(t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < a ? 56320 == (64512 & (i = e.charCodeAt(o++))) ? n.push(((1023 & t) << 10) + (1023 & i) + 65536) : (n.push(t), o--) : n.push(t);
                                    return n
                                }

                                function p(e) {
                                    for (var t, i = e.length, n = -1, o = ""; ++n < i;)(t = e[n]) > 65535 && (o += g((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), o += g(t);
                                    return o
                                }

                                function u(e) {
                                    if (e >= 55296 && e <= 57343) throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value")
                                }

                                function f(e, t) {
                                    return g(e >> t & 63 | 128)
                                }

                                function m(e) {
                                    if (0 == (4294967168 & e)) return g(e);
                                    var t = "";
                                    return 0 == (4294965248 & e) ? t = g(e >> 6 & 31 | 192) : 0 == (4294901760 & e) ? (u(e), t = g(e >> 12 & 15 | 224), t += f(e, 6)) : 0 == (4292870144 & e) && (t = g(e >> 18 & 7 | 240), t += f(e, 12), t += f(e, 6)), t += g(63 & e | 128)
                                }

                                function M() {
                                    if (h >= l) throw Error("Invalid byte index");
                                    var e = 255 & r[h];
                                    if (h++, 128 == (192 & e)) return 63 & e;
                                    throw Error("Invalid continuation byte")
                                }

                                function v() {
                                    var e, t;
                                    if (h > l) throw Error("Invalid byte index");
                                    if (h == l) return !1;
                                    if (e = 255 & r[h], h++, 0 == (128 & e)) return e;
                                    if (192 == (224 & e)) {
                                        if ((t = (31 & e) << 6 | M()) >= 128) return t;
                                        throw Error("Invalid continuation byte")
                                    }
                                    if (224 == (240 & e)) {
                                        if ((t = (15 & e) << 12 | M() << 6 | M()) >= 2048) return u(t), t;
                                        throw Error("Invalid continuation byte")
                                    }
                                    if (240 == (248 & e) && (t = (15 & e) << 18 | M() << 12 | M() << 6 | M()) >= 65536 && t <= 1114111) return t;
                                    throw Error("Invalid UTF-8 detected")
                                }
                                var y = {
                                    version: "2.0.0",
                                    encode: function(e) {
                                        for (var t = d(e), i = t.length, n = -1, o = ""; ++n < i;) o += m(t[n]);
                                        return o
                                    },
                                    decode: function(e) {
                                        r = d(e), l = r.length, h = 0;
                                        for (var t, i = []; !1 !== (t = v());) i.push(t);
                                        return p(i)
                                    }
                                };
                                if (a && !a.nodeType)
                                    if (s) s.exports = y;
                                    else {
                                        var b = {}.hasOwnProperty;
                                        for (var I in y) b.call(y, I) && (a[I] = y[I])
                                    }
                                else n.utf8 = y
                            })(this)
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : {})
                    }, {}],
                    30: [function(e, t, i) {
                        var n, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
                            a = 64,
                            s = {},
                            c = 0,
                            r = 0;

                        function l(e) {
                            var t = "";
                            do {
                                t = o[e % a] + t, e = Math.floor(e / a)
                            } while (e > 0);
                            return t
                        }

                        function h() {
                            var e = l(+new Date);
                            return e !== n ? (c = 0, n = e) : e + "." + l(c++)
                        }
                        for (; r < a; r++) s[o[r]] = r;
                        h.encode = l, h.decode = function(e) {
                            var t = 0;
                            for (r = 0; r < e.length; r++) t = t * a + s[e.charAt(r)];
                            return t
                        }, t.exports = h
                    }, {}],
                    31: [function(e, t, i) {
                        var n = e("./url"),
                            a = e("socket.io-parser"),
                            s = e("./manager"),
                            c = e("debug")("socket.io-client");
                        t.exports = i = l;
                        var r = i.managers = {};

                        function l(e, t) {
                            "object" == (void 0 === e ? "undefined" : o(e)) && (t = e, e = void 0), t = t || {};
                            var i, a = n(e),
                                l = a.source,
                                h = a.id,
                                g = a.path,
                                d = r[h] && g in r[h].nsps;
                            return t.forceNew || t["force new connection"] || !1 === t.multiplex || d ? (c("ignoring socket cache for %s", l), i = s(l, t)) : (r[h] || (c("new io instance for %s", l), r[h] = s(l, t)), i = r[h]), i.socket(a.path)
                        }
                        i.protocol = a.protocol, i.connect = l, i.Manager = e("./manager"), i.Socket = e("./socket")
                    }, {
                        "./manager": 32,
                        "./socket": 34,
                        "./url": 35,
                        debug: 39,
                        "socket.io-parser": 47
                    }],
                    32: [function(e, t, i) {
                        var n = e("engine.io-client"),
                            a = e("./socket"),
                            s = e("component-emitter"),
                            c = e("socket.io-parser"),
                            r = e("./on"),
                            l = e("component-bind"),
                            h = e("debug")("socket.io-client:manager"),
                            g = e("indexof"),
                            d = e("backo2"),
                            p = Object.prototype.hasOwnProperty;

                        function u(e, t) {
                            if (!(this instanceof u)) return new u(e, t);
                            e && "object" == (void 0 === e ? "undefined" : o(e)) && (t = e, e = void 0), (t = t || {}).path = t.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = t, this.reconnection(!1 !== t.reconnection), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor(t.randomizationFactor || .5), this.backoff = new d({
                                min: this.reconnectionDelay(),
                                max: this.reconnectionDelayMax(),
                                jitter: this.randomizationFactor()
                            }), this.timeout(null == t.timeout ? 2e4 : t.timeout), this.readyState = "closed", this.uri = e, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [], this.encoder = new c.Encoder, this.decoder = new c.Decoder, this.autoConnect = !1 !== t.autoConnect, this.autoConnect && this.open()
                        }
                        t.exports = u, u.prototype.emitAll = function() {
                            for (var e in this.emit.apply(this, arguments), this.nsps) p.call(this.nsps, e) && this.nsps[e].emit.apply(this.nsps[e], arguments)
                        }, u.prototype.updateSocketIds = function() {
                            for (var e in this.nsps) p.call(this.nsps, e) && (this.nsps[e].id = this.engine.id)
                        }, s(u.prototype), u.prototype.reconnection = function(e) {
                            return arguments.length ? (this._reconnection = !!e, this) : this._reconnection
                        }, u.prototype.reconnectionAttempts = function(e) {
                            return arguments.length ? (this._reconnectionAttempts = e, this) : this._reconnectionAttempts
                        }, u.prototype.reconnectionDelay = function(e) {
                            return arguments.length ? (this._reconnectionDelay = e, this.backoff && this.backoff.setMin(e), this) : this._reconnectionDelay
                        }, u.prototype.randomizationFactor = function(e) {
                            return arguments.length ? (this._randomizationFactor = e, this.backoff && this.backoff.setJitter(e), this) : this._randomizationFactor
                        }, u.prototype.reconnectionDelayMax = function(e) {
                            return arguments.length ? (this._reconnectionDelayMax = e, this.backoff && this.backoff.setMax(e), this) : this._reconnectionDelayMax
                        }, u.prototype.timeout = function(e) {
                            return arguments.length ? (this._timeout = e, this) : this._timeout
                        }, u.prototype.maybeReconnectOnOpen = function() {
                            !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
                        }, u.prototype.open = u.prototype.connect = function(e) {
                            if (h("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
                            h("opening %s", this.uri), this.engine = n(this.uri, this.opts);
                            var t = this.engine,
                                i = this;
                            this.readyState = "opening", this.skipReconnect = !1;
                            var o = r(t, "open", function() {
                                    i.onopen(), e && e()
                                }),
                                a = r(t, "error", function(t) {
                                    if (h("connect_error"), i.cleanup(), i.readyState = "closed", i.emitAll("connect_error", t), e) {
                                        var n = new Error("Connection error");
                                        n.data = t, e(n)
                                    } else i.maybeReconnectOnOpen()
                                });
                            if (!1 !== this._timeout) {
                                var s = this._timeout;
                                h("connect attempt will timeout after %d", s);
                                var c = setTimeout(function() {
                                    h("connect attempt timed out after %d", s), o.destroy(), t.close(), t.emit("error", "timeout"), i.emitAll("connect_timeout", s)
                                }, s);
                                this.subs.push({
                                    destroy: function() {
                                        clearTimeout(c)
                                    }
                                })
                            }
                            return this.subs.push(o), this.subs.push(a), this
                        }, u.prototype.onopen = function() {
                            h("open"), this.cleanup(), this.readyState = "open", this.emit("open");
                            var e = this.engine;
                            this.subs.push(r(e, "data", l(this, "ondata"))), this.subs.push(r(e, "ping", l(this, "onping"))), this.subs.push(r(e, "pong", l(this, "onpong"))), this.subs.push(r(e, "error", l(this, "onerror"))), this.subs.push(r(e, "close", l(this, "onclose"))), this.subs.push(r(this.decoder, "decoded", l(this, "ondecoded")))
                        }, u.prototype.onping = function() {
                            this.lastPing = new Date, this.emitAll("ping")
                        }, u.prototype.onpong = function() {
                            this.emitAll("pong", new Date - this.lastPing)
                        }, u.prototype.ondata = function(e) {
                            this.decoder.add(e)
                        }, u.prototype.ondecoded = function(e) {
                            this.emit("packet", e)
                        }, u.prototype.onerror = function(e) {
                            h("error", e), this.emitAll("error", e)
                        }, u.prototype.socket = function(e) {
                            var t = this.nsps[e];
                            if (!t) {
                                t = new a(this, e), this.nsps[e] = t;
                                var i = this;
                                t.on("connecting", n), t.on("connect", function() {
                                    t.id = i.engine.id
                                }), this.autoConnect && n()
                            }

                            function n() {
                                ~g(i.connecting, t) || i.connecting.push(t)
                            }
                            return t
                        }, u.prototype.destroy = function(e) {
                            var t = g(this.connecting, e);
                            ~t && this.connecting.splice(t, 1), this.connecting.length || this.close()
                        }, u.prototype.packet = function(e) {
                            h("writing packet %j", e);
                            var t = this;
                            t.encoding ? t.packetBuffer.push(e) : (t.encoding = !0, this.encoder.encode(e, function(i) {
                                for (var n = 0; n < i.length; n++) t.engine.write(i[n], e.options);
                                t.encoding = !1, t.processPacketQueue()
                            }))
                        }, u.prototype.processPacketQueue = function() {
                            if (this.packetBuffer.length > 0 && !this.encoding) {
                                var e = this.packetBuffer.shift();
                                this.packet(e)
                            }
                        }, u.prototype.cleanup = function() {
                            var e;
                            for (h("cleanup"); e = this.subs.shift();) e.destroy();
                            this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
                        }, u.prototype.close = u.prototype.disconnect = function() {
                            h("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" == this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
                        }, u.prototype.onclose = function(e) {
                            h("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", e), this._reconnection && !this.skipReconnect && this.reconnect()
                        }, u.prototype.reconnect = function() {
                            if (this.reconnecting || this.skipReconnect) return this;
                            var e = this;
                            if (this.backoff.attempts >= this._reconnectionAttempts) h("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
                            else {
                                var t = this.backoff.duration();
                                h("will wait %dms before reconnect attempt", t), this.reconnecting = !0;
                                var i = setTimeout(function() {
                                    e.skipReconnect || (h("attempting reconnect"), e.emitAll("reconnect_attempt", e.backoff.attempts), e.emitAll("reconnecting", e.backoff.attempts), e.skipReconnect || e.open(function(t) {
                                        t ? (h("reconnect attempt error"), e.reconnecting = !1, e.reconnect(), e.emitAll("reconnect_error", t.data)) : (h("reconnect success"), e.onreconnect())
                                    }))
                                }, t);
                                this.subs.push({
                                    destroy: function() {
                                        clearTimeout(i)
                                    }
                                })
                            }
                        }, u.prototype.onreconnect = function() {
                            var e = this.backoff.attempts;
                            this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", e)
                        }
                    }, {
                        "./on": 33,
                        "./socket": 34,
                        backo2: 36,
                        "component-bind": 37,
                        "component-emitter": 38,
                        debug: 39,
                        "engine.io-client": 1,
                        indexof: 42,
                        "socket.io-parser": 47
                    }],
                    33: [function(e, t, i) {
                        t.exports = function(e, t, i) {
                            return e.on(t, i), {
                                destroy: function() {
                                    e.removeListener(t, i)
                                }
                            }
                        }
                    }, {}],
                    34: [function(e, t, i) {
                        var n = e("socket.io-parser"),
                            o = e("component-emitter"),
                            a = e("to-array"),
                            s = e("./on"),
                            c = e("component-bind"),
                            r = e("debug")("socket.io-client:socket"),
                            l = e("has-binary");
                        t.exports = d;
                        var h = {
                                connect: 1,
                                connect_error: 1,
                                connect_timeout: 1,
                                connecting: 1,
                                disconnect: 1,
                                error: 1,
                                reconnect: 1,
                                reconnect_attempt: 1,
                                reconnect_failed: 1,
                                reconnect_error: 1,
                                reconnecting: 1,
                                ping: 1,
                                pong: 1
                            },
                            g = o.prototype.emit;

                        function d(e, t) {
                            this.io = e, this.nsp = t, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.io.autoConnect && this.open()
                        }
                        o(d.prototype), d.prototype.subEvents = function() {
                            if (!this.subs) {
                                var e = this.io;
                                this.subs = [s(e, "open", c(this, "onopen")), s(e, "packet", c(this, "onpacket")), s(e, "close", c(this, "onclose"))]
                            }
                        }, d.prototype.open = d.prototype.connect = function() {
                            return this.connected ? this : (this.subEvents(), this.io.open(), "open" == this.io.readyState && this.onopen(), this.emit("connecting"), this)
                        }, d.prototype.send = function() {
                            var e = a(arguments);
                            return e.unshift("message"), this.emit.apply(this, e), this
                        }, d.prototype.emit = function(e) {
                            if (h.hasOwnProperty(e)) return g.apply(this, arguments), this;
                            var t = a(arguments),
                                i = n.EVENT;
                            l(t) && (i = n.BINARY_EVENT);
                            var o = {
                                type: i,
                                data: t,
                                options: {}
                            };
                            return o.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof t[t.length - 1] && (r("emitting packet with ack id %d", this.ids), this.acks[this.ids] = t.pop(), o.id = this.ids++), this.connected ? this.packet(o) : this.sendBuffer.push(o), delete this.flags, this
                        }, d.prototype.packet = function(e) {
                            e.nsp = this.nsp, this.io.packet(e)
                        }, d.prototype.onopen = function() {
                            r("transport is open - connecting"), "/" != this.nsp && this.packet({
                                type: n.CONNECT
                            })
                        }, d.prototype.onclose = function(e) {
                            r("close (%s)", e), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", e)
                        }, d.prototype.onpacket = function(e) {
                            if (e.nsp == this.nsp) switch (e.type) {
                                case n.CONNECT:
                                    this.onconnect();
                                    break;
                                case n.EVENT:
                                case n.BINARY_EVENT:
                                    this.onevent(e);
                                    break;
                                case n.ACK:
                                case n.BINARY_ACK:
                                    this.onack(e);
                                    break;
                                case n.DISCONNECT:
                                    this.ondisconnect();
                                    break;
                                case n.ERROR:
                                    this.emit("error", e.data)
                            }
                        }, d.prototype.onevent = function(e) {
                            var t = e.data || [];
                            r("emitting event %j", t), null != e.id && (r("attaching ack callback to event"), t.push(this.ack(e.id))), this.connected ? g.apply(this, t) : this.receiveBuffer.push(t)
                        }, d.prototype.ack = function(e) {
                            var t = this,
                                i = !1;
                            return function() {
                                if (!i) {
                                    i = !0;
                                    var o = a(arguments);
                                    r("sending ack %j", o);
                                    var s = l(o) ? n.BINARY_ACK : n.ACK;
                                    t.packet({
                                        type: s,
                                        id: e,
                                        data: o
                                    })
                                }
                            }
                        }, d.prototype.onack = function(e) {
                            var t = this.acks[e.id];
                            "function" == typeof t ? (r("calling ack %s with %j", e.id, e.data), t.apply(this, e.data), delete this.acks[e.id]) : r("bad ack %s", e.id)
                        }, d.prototype.onconnect = function() {
                            this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
                        }, d.prototype.emitBuffered = function() {
                            var e;
                            for (e = 0; e < this.receiveBuffer.length; e++) g.apply(this, this.receiveBuffer[e]);
                            for (this.receiveBuffer = [], e = 0; e < this.sendBuffer.length; e++) this.packet(this.sendBuffer[e]);
                            this.sendBuffer = []
                        }, d.prototype.ondisconnect = function() {
                            r("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
                        }, d.prototype.destroy = function() {
                            if (this.subs) {
                                for (var e = 0; e < this.subs.length; e++) this.subs[e].destroy();
                                this.subs = null
                            }
                            this.io.destroy(this)
                        }, d.prototype.close = d.prototype.disconnect = function() {
                            return this.connected && (r("performing disconnect (%s)", this.nsp), this.packet({
                                type: n.DISCONNECT
                            })), this.destroy(), this.connected && this.onclose("io client disconnect"), this
                        }, d.prototype.compress = function(e) {
                            return this.flags = this.flags || {}, this.flags.compress = e, this
                        }
                    }, {
                        "./on": 33,
                        "component-bind": 37,
                        "component-emitter": 38,
                        debug: 39,
                        "has-binary": 41,
                        "socket.io-parser": 47,
                        "to-array": 51
                    }],
                    35: [function(e, t, i) {
                        (function(i) {
                            var n = e("parseuri"),
                                o = e("debug")("socket.io-client:url");
                            t.exports = function(e, t) {
                                var a = e,
                                    t = t || i.location;
                                null == e && (e = t.protocol + "//" + t.host);
                                "string" == typeof e && ("/" == e.charAt(0) && (e = "/" == e.charAt(1) ? t.protocol + e : t.host + e), /^(https?|wss?):\/\//.test(e) || (o("protocol-less url %s", e), e = void 0 !== t ? t.protocol + "//" + e : "https://" + e), o("parse %s", e), a = n(e));
                                a.port || (/^(http|ws)$/.test(a.protocol) ? a.port = "80" : /^(http|ws)s$/.test(a.protocol) && (a.port = "443"));
                                a.path = a.path || "/";
                                var s = -1 !== a.host.indexOf(":") ? "[" + a.host + "]" : a.host;
                                return a.id = a.protocol + "://" + s + ":" + a.port, a.href = a.protocol + "://" + s + (t && t.port == a.port ? "" : ":" + a.port), a
                            }
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : {})
                    }, {
                        debug: 39,
                        parseuri: 45
                    }],
                    36: [function(e, t, i) {
                        function n(e) {
                            e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
                        }
                        t.exports = n, n.prototype.duration = function() {
                            var e = this.ms * Math.pow(this.factor, this.attempts++);
                            if (this.jitter) {
                                var t = Math.random(),
                                    i = Math.floor(t * this.jitter * e);
                                e = 0 == (1 & Math.floor(10 * t)) ? e - i : e + i
                            }
                            return 0 | Math.min(e, this.max)
                        }, n.prototype.reset = function() {
                            this.attempts = 0
                        }, n.prototype.setMin = function(e) {
                            this.ms = e
                        }, n.prototype.setMax = function(e) {
                            this.max = e
                        }, n.prototype.setJitter = function(e) {
                            this.jitter = e
                        }
                    }, {}],
                    37: [function(e, t, i) {
                        var n = [].slice;
                        t.exports = function(e, t) {
                            if ("string" == typeof t && (t = e[t]), "function" != typeof t) throw new Error("bind() requires a function");
                            var i = n.call(arguments, 2);
                            return function() {
                                return t.apply(e, i.concat(n.call(arguments)))
                            }
                        }
                    }, {}],
                    38: [function(e, t, i) {
                        function n(e) {
                            if (e) return o(e)
                        }

                        function o(e) {
                            for (var t in n.prototype) e[t] = n.prototype[t];
                            return e
                        }
                        t.exports = n, n.prototype.on = n.prototype.addEventListener = function(e, t) {
                            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
                        }, n.prototype.once = function(e, t) {
                            function i() {
                                this.off(e, i), t.apply(this, arguments)
                            }
                            return i.fn = t, this.on(e, i), this
                        }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(e, t) {
                            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                            var i, n = this._callbacks["$" + e];
                            if (!n) return this;
                            if (1 == arguments.length) return delete this._callbacks["$" + e], this;
                            for (var o = 0; o < n.length; o++)
                                if ((i = n[o]) === t || i.fn === t) {
                                    n.splice(o, 1);
                                    break
                                } return this
                        }, n.prototype.emit = function(e) {
                            this._callbacks = this._callbacks || {};
                            var t = [].slice.call(arguments, 1),
                                i = this._callbacks["$" + e];
                            if (i)
                                for (var n = 0, o = (i = i.slice(0)).length; n < o; ++n) i[n].apply(this, t);
                            return this
                        }, n.prototype.listeners = function(e) {
                            return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
                        }, n.prototype.hasListeners = function(e) {
                            return !!this.listeners(e).length
                        }
                    }, {}],
                    39: [function(e, t, i) {
                        arguments[4][17][0].apply(i, arguments)
                    }, {
                        "./debug": 40,
                        dup: 17
                    }],
                    40: [function(e, t, i) {
                        arguments[4][18][0].apply(i, arguments)
                    }, {
                        dup: 18,
                        ms: 44
                    }],
                    41: [function(e, t, i) {
                        (function(i) {
                            var n = e("isarray");
                            t.exports = function(e) {
                                return function e(t) {
                                    if (!t) return !1;
                                    if (i.Buffer && i.Buffer.isBuffer && i.Buffer.isBuffer(t) || i.ArrayBuffer && t instanceof ArrayBuffer || i.Blob && t instanceof Blob || i.File && t instanceof File) return !0;
                                    if (n(t)) {
                                        for (var a = 0; a < t.length; a++)
                                            if (e(t[a])) return !0
                                    } else if (t && "object" == (void 0 === t ? "undefined" : o(t)))
                                        for (var s in t.toJSON && "function" == typeof t.toJSON && (t = t.toJSON()), t)
                                            if (Object.prototype.hasOwnProperty.call(t, s) && e(t[s])) return !0;
                                    return !1
                                }(e)
                            }
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : {})
                    }, {
                        isarray: 43
                    }],
                    42: [function(e, t, i) {
                        arguments[4][23][0].apply(i, arguments)
                    }, {
                        dup: 23
                    }],
                    43: [function(e, t, i) {
                        arguments[4][24][0].apply(i, arguments)
                    }, {
                        dup: 24
                    }],
                    44: [function(e, t, i) {
                        arguments[4][25][0].apply(i, arguments)
                    }, {
                        dup: 25
                    }],
                    45: [function(e, t, i) {
                        arguments[4][28][0].apply(i, arguments)
                    }, {
                        dup: 28
                    }],
                    46: [function(e, t, i) {
                        (function(t) {
                            var n = e("isarray"),
                                a = e("./is-buffer");
                            i.deconstructPacket = function(e) {
                                var t = [],
                                    i = e.data;
                                var s = e;
                                return s.data = function e(i) {
                                    if (!i) return i;
                                    if (a(i)) {
                                        var s = {
                                            _placeholder: !0,
                                            num: t.length
                                        };
                                        return t.push(i), s
                                    }
                                    if (n(i)) {
                                        for (var c = new Array(i.length), r = 0; r < i.length; r++) c[r] = e(i[r]);
                                        return c
                                    }
                                    if ("object" == (void 0 === i ? "undefined" : o(i)) && !(i instanceof Date)) {
                                        for (var l in c = {}, i) c[l] = e(i[l]);
                                        return c
                                    }
                                    return i
                                }(i), s.attachments = t.length, {
                                    packet: s,
                                    buffers: t
                                }
                            }, i.reconstructPacket = function(e, t) {
                                return e.data = function e(i) {
                                    if (i && i._placeholder) return t[i.num];
                                    if (n(i)) {
                                        for (var a = 0; a < i.length; a++) i[a] = e(i[a]);
                                        return i
                                    }
                                    if (i && "object" == (void 0 === i ? "undefined" : o(i))) {
                                        for (var s in i) i[s] = e(i[s]);
                                        return i
                                    }
                                    return i
                                }(e.data), e.attachments = void 0, e
                            }, i.removeBlobs = function(e, i) {
                                var s = 0,
                                    c = e;
                                (function e(r, l, h) {
                                    if (!r) return r;
                                    if (t.Blob && r instanceof Blob || t.File && r instanceof File) {
                                        s++;
                                        var g = new FileReader;
                                        g.onload = function() {
                                            h ? h[l] = this.result : c = this.result, --s || i(c)
                                        }, g.readAsArrayBuffer(r)
                                    } else if (n(r))
                                        for (var d = 0; d < r.length; d++) e(r[d], d, r);
                                    else if (r && "object" == (void 0 === r ? "undefined" : o(r)) && !a(r))
                                        for (var p in r) e(r[p], p, r)
                                })(c), s || i(c)
                            }
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : {})
                    }, {
                        "./is-buffer": 48,
                        isarray: 43
                    }],
                    47: [function(e, t, i) {
                        var n = e("debug")("socket.io-parser"),
                            o = e("json3"),
                            a = (e("isarray"), e("component-emitter")),
                            s = e("./binary"),
                            c = e("./is-buffer");

                        function r() {}

                        function l(e) {
                            var t = "",
                                a = !1;
                            return t += e.type, i.BINARY_EVENT != e.type && i.BINARY_ACK != e.type || (t += e.attachments, t += "-"), e.nsp && "/" != e.nsp && (a = !0, t += e.nsp), null != e.id && (a && (t += ",", a = !1), t += e.id), null != e.data && (a && (t += ","), t += o.stringify(e.data)), n("encoded %j as %s", e, t), t
                        }

                        function h(e, t) {
                            s.removeBlobs(e, function(e) {
                                var i = s.deconstructPacket(e),
                                    n = l(i.packet),
                                    o = i.buffers;
                                o.unshift(n), t(o)
                            })
                        }

                        function g() {
                            this.reconstructor = null
                        }

                        function d(e) {
                            var t = {},
                                a = 0;
                            if (t.type = Number(e.charAt(0)), null == i.types[t.type]) return u();
                            if (i.BINARY_EVENT == t.type || i.BINARY_ACK == t.type) {
                                for (var s = "";
                                    "-" != e.charAt(++a) && (s += e.charAt(a), a != e.length););
                                if (s != Number(s) || "-" != e.charAt(a)) throw new Error("Illegal attachments");
                                t.attachments = Number(s)
                            }
                            if ("/" == e.charAt(a + 1))
                                for (t.nsp = ""; ++a;) {
                                    if ("," == (r = e.charAt(a))) break;
                                    if (t.nsp += r, a == e.length) break
                                } else t.nsp = "/";
                            var c = e.charAt(a + 1);
                            if ("" !== c && Number(c) == c) {
                                for (t.id = ""; ++a;) {
                                    var r;
                                    if (null == (r = e.charAt(a)) || Number(r) != r) {
                                        --a;
                                        break
                                    }
                                    if (t.id += e.charAt(a), a == e.length) break
                                }
                                t.id = Number(t.id)
                            }
                            if (e.charAt(++a)) try {
                                t.data = o.parse(e.substr(a))
                            } catch (e) {
                                return u()
                            }
                            return n("decoded %s as %j", e, t), t
                        }

                        function p(e) {
                            this.reconPack = e, this.buffers = []
                        }

                        function u(e) {
                            return {
                                type: i.ERROR,
                                data: "parser error"
                            }
                        }
                        i.protocol = 4, i.types = ["CONNECT", "DISCONNECT", "EVENT", "BINARY_EVENT", "ACK", "BINARY_ACK", "ERROR"], i.CONNECT = 0, i.DISCONNECT = 1, i.EVENT = 2, i.ACK = 3, i.ERROR = 4, i.BINARY_EVENT = 5, i.BINARY_ACK = 6, i.Encoder = r, i.Decoder = g, r.prototype.encode = function(e, t) {
                            (n("encoding packet %j", e), i.BINARY_EVENT == e.type || i.BINARY_ACK == e.type) ? h(e, t): t([l(e)])
                        }, a(g.prototype), g.prototype.add = function(e) {
                            var t;
                            if ("string" == typeof e) t = d(e), i.BINARY_EVENT == t.type || i.BINARY_ACK == t.type ? (this.reconstructor = new p(t), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", t)) : this.emit("decoded", t);
                            else {
                                if (!c(e) && !e.base64) throw new Error("Unknown type: " + e);
                                if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                                (t = this.reconstructor.takeBinaryData(e)) && (this.reconstructor = null, this.emit("decoded", t))
                            }
                        }, g.prototype.destroy = function() {
                            this.reconstructor && this.reconstructor.finishedReconstruction()
                        }, p.prototype.takeBinaryData = function(e) {
                            if (this.buffers.push(e), this.buffers.length == this.reconPack.attachments) {
                                var t = s.reconstructPacket(this.reconPack, this.buffers);
                                return this.finishedReconstruction(), t
                            }
                            return null
                        }, p.prototype.finishedReconstruction = function() {
                            this.reconPack = null, this.buffers = []
                        }
                    }, {
                        "./binary": 46,
                        "./is-buffer": 48,
                        "component-emitter": 49,
                        debug: 39,
                        isarray: 43,
                        json3: 50
                    }],
                    48: [function(e, t, i) {
                        (function(e) {
                            t.exports = function(t) {
                                return e.Buffer && e.Buffer.isBuffer(t) || e.ArrayBuffer && t instanceof ArrayBuffer
                            }
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : {})
                    }, {}],
                    49: [function(e, t, i) {
                        arguments[4][15][0].apply(i, arguments)
                    }, {
                        dup: 15
                    }],
                    50: [function(e, t, i) {
                        (function(e) {
                            (function() {
                                var n = {
                                        function: !0,
                                        object: !0
                                    },
                                    a = n[void 0 === i ? "undefined" : o(i)] && i && !i.nodeType && i,
                                    s = n["undefined" == typeof window ? "undefined" : o(window)] && window || this,
                                    c = a && n[void 0 === t ? "undefined" : o(t)] && t && !t.nodeType && "object" == (void 0 === e ? "undefined" : o(e)) && e;

                                function r(e, t) {
                                    e || (e = s.Object()), t || (t = s.Object());
                                    var i = e.Number || s.Number,
                                        a = e.String || s.String,
                                        c = e.Object || s.Object,
                                        l = e.Date || s.Date,
                                        h = e.SyntaxError || s.SyntaxError,
                                        g = e.TypeError || s.TypeError,
                                        d = e.Math || s.Math,
                                        p = e.JSON || s.JSON;
                                    "object" == (void 0 === p ? "undefined" : o(p)) && p && (t.stringify = p.stringify, t.parse = p.parse);
                                    var u, f, m, M = c.prototype,
                                        v = M.toString,
                                        y = new l(-0xc782b5b800cec);
                                    try {
                                        y = -109252 == y.getUTCFullYear() && 0 === y.getUTCMonth() && 1 === y.getUTCDate() && 10 == y.getUTCHours() && 37 == y.getUTCMinutes() && 6 == y.getUTCSeconds() && 708 == y.getUTCMilliseconds()
                                    } catch (e) {}

                                    function b(e) {
                                        if (b[e] !== m) return b[e];
                                        var n;
                                        if ("bug-string-char-index" == e) n = "a" != "a" [0];
                                        else if ("json" == e) n = b("json-stringify") && b("json-parse");
                                        else {
                                            var o, s = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                            if ("json-stringify" == e) {
                                                var c = t.stringify,
                                                    r = "function" == typeof c && y;
                                                if (r) {
                                                    (o = function() {
                                                        return 1
                                                    }).toJSON = o;
                                                    try {
                                                        r = "0" === c(0) && "0" === c(new i) && '""' == c(new a) && c(v) === m && c(m) === m && c() === m && "1" === c(o) && "[1]" == c([o]) && "[null]" == c([m]) && "null" == c(null) && "[null,null,null]" == c([m, v, null]) && c({
                                                            a: [o, !0, !1, null, "\0\b\n\f\r\t"]
                                                        }) == s && "1" === c(null, o) && "[\n 1,\n 2\n]" == c([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == c(new l(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == c(new l(864e13)) && '"-000001-01-01T00:00:00.000Z"' == c(new l(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == c(new l(-1))
                                                    } catch (e) {
                                                        r = !1
                                                    }
                                                }
                                                n = r
                                            }
                                            if ("json-parse" == e) {
                                                var h = t.parse;
                                                if ("function" == typeof h) try {
                                                    if (0 === h("0") && !h(!1)) {
                                                        var g = 5 == (o = h(s)).a.length && 1 === o.a[0];
                                                        if (g) {
                                                            try {
                                                                g = !h('"\t"')
                                                            } catch (e) {}
                                                            if (g) try {
                                                                g = 1 !== h("01")
                                                            } catch (e) {}
                                                            if (g) try {
                                                                g = 1 !== h("1.")
                                                            } catch (e) {}
                                                        }
                                                    }
                                                } catch (e) {
                                                    g = !1
                                                }
                                                n = g
                                            }
                                        }
                                        return b[e] = !!n
                                    }
                                    if (!b("json")) {
                                        var I = b("bug-string-char-index");
                                        if (!y) var w = d.floor,
                                            T = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                                            A = function(e, t) {
                                                return T[t] + 365 * (e - 1970) + w((e - 1969 + (t = +(t > 1))) / 4) - w((e - 1901 + t) / 100) + w((e - 1601 + t) / 400)
                                            };
                                        if ((u = M.hasOwnProperty) || (u = function(e) {
                                                var t, i = {};
                                                return (i.__proto__ = null, i.__proto__ = {
                                                    toString: 1
                                                }, i).toString != v ? u = function(e) {
                                                    var t = this.__proto__,
                                                        i = e in (this.__proto__ = null, this);
                                                    return this.__proto__ = t, i
                                                } : (t = i.constructor, u = function(e) {
                                                    var i = (this.constructor || t).prototype;
                                                    return e in this && !(e in i && this[e] === i[e])
                                                }), i = null, u.call(this, e)
                                            }), f = function(e, t) {
                                                var i, a, s, c = 0;
                                                for (s in (i = function() {
                                                        this.valueOf = 0
                                                    }).prototype.valueOf = 0, a = new i) u.call(a, s) && c++;
                                                return i = a = null, c ? f = 2 == c ? function(e, t) {
                                                    var i, n = {},
                                                        o = "[object Function]" == v.call(e);
                                                    for (i in e) o && "prototype" == i || u.call(n, i) || !(n[i] = 1) || !u.call(e, i) || t(i)
                                                } : function(e, t) {
                                                    var i, n, o = "[object Function]" == v.call(e);
                                                    for (i in e) o && "prototype" == i || !u.call(e, i) || (n = "constructor" === i) || t(i);
                                                    (n || u.call(e, i = "constructor")) && t(i)
                                                } : (a = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], f = function(e, t) {
                                                    var i, s, c = "[object Function]" == v.call(e),
                                                        r = !c && "function" != typeof e.constructor && n[o(e.hasOwnProperty)] && e.hasOwnProperty || u;
                                                    for (i in e) c && "prototype" == i || !r.call(e, i) || t(i);
                                                    for (s = a.length; i = a[--s]; r.call(e, i) && t(i));
                                                }), f(e, t)
                                            }, !b("json-stringify")) {
                                            var C = {
                                                    92: "\\\\",
                                                    34: '\\"',
                                                    8: "\\b",
                                                    12: "\\f",
                                                    10: "\\n",
                                                    13: "\\r",
                                                    9: "\\t"
                                                },
                                                S = function(e, t) {
                                                    return ("000000" + (t || 0)).slice(-e)
                                                },
                                                D = function(e) {
                                                    for (var t = '"', i = 0, n = e.length, o = !I || n > 10, a = o && (I ? e.split("") : e); i < n; i++) {
                                                        var s = e.charCodeAt(i);
                                                        switch (s) {
                                                            case 8:
                                                            case 9:
                                                            case 10:
                                                            case 12:
                                                            case 13:
                                                            case 34:
                                                            case 92:
                                                                t += C[s];
                                                                break;
                                                            default:
                                                                if (s < 32) {
                                                                    t += "\\u00" + S(2, s.toString(16));
                                                                    break
                                                                }
                                                                t += o ? a[i] : e.charAt(i)
                                                        }
                                                    }
                                                    return t + '"'
                                                },
                                                U = function e(t, i, n, a, s, c, r) {
                                                    var l, h, d, p, M, y, b, I, T, C, U, _, P, L, N, k;
                                                    try {
                                                        l = i[t]
                                                    } catch (e) {}
                                                    if ("object" == (void 0 === l ? "undefined" : o(l)) && l)
                                                        if ("[object Date]" != (h = v.call(l)) || u.call(l, "toJSON")) "function" == typeof l.toJSON && ("[object Number]" != h && "[object String]" != h && "[object Array]" != h || u.call(l, "toJSON")) && (l = l.toJSON(t));
                                                        else if (l > -1 / 0 && l < 1 / 0) {
                                                        if (A) {
                                                            for (M = w(l / 864e5), d = w(M / 365.2425) + 1970 - 1; A(d + 1, 0) <= M; d++);
                                                            for (p = w((M - A(d, 0)) / 30.42); A(d, p + 1) <= M; p++);
                                                            M = 1 + M - A(d, p), b = w((y = (l % 864e5 + 864e5) % 864e5) / 36e5) % 24, I = w(y / 6e4) % 60, T = w(y / 1e3) % 60, C = y % 1e3
                                                        } else d = l.getUTCFullYear(), p = l.getUTCMonth(), M = l.getUTCDate(), b = l.getUTCHours(), I = l.getUTCMinutes(), T = l.getUTCSeconds(), C = l.getUTCMilliseconds();
                                                        l = (d <= 0 || d >= 1e4 ? (d < 0 ? "-" : "+") + S(6, d < 0 ? -d : d) : S(4, d)) + "-" + S(2, p + 1) + "-" + S(2, M) + "T" + S(2, b) + ":" + S(2, I) + ":" + S(2, T) + "." + S(3, C) + "Z"
                                                    } else l = null;
                                                    if (n && (l = n.call(i, t, l)), null === l) return "null";
                                                    if ("[object Boolean]" == (h = v.call(l))) return "" + l;
                                                    if ("[object Number]" == h) return l > -1 / 0 && l < 1 / 0 ? "" + l : "null";
                                                    if ("[object String]" == h) return D("" + l);
                                                    if ("object" == (void 0 === l ? "undefined" : o(l))) {
                                                        for (L = r.length; L--;)
                                                            if (r[L] === l) throw g();
                                                        if (r.push(l), U = [], N = c, c += s, "[object Array]" == h) {
                                                            for (P = 0, L = l.length; P < L; P++) _ = e(P, l, n, a, s, c, r), U.push(_ === m ? "null" : _);
                                                            k = U.length ? s ? "[\n" + c + U.join(",\n" + c) + "\n" + N + "]" : "[" + U.join(",") + "]" : "[]"
                                                        } else f(a || l, function(t) {
                                                            var i = e(t, l, n, a, s, c, r);
                                                            i !== m && U.push(D(t) + ":" + (s ? " " : "") + i)
                                                        }), k = U.length ? s ? "{\n" + c + U.join(",\n" + c) + "\n" + N + "}" : "{" + U.join(",") + "}" : "{}";
                                                        return r.pop(), k
                                                    }
                                                };
                                            t.stringify = function(e, t, i) {
                                                var a, s, c, r;
                                                if (n[void 0 === t ? "undefined" : o(t)] && t)
                                                    if ("[object Function]" == (r = v.call(t))) s = t;
                                                    else if ("[object Array]" == r) {
                                                    c = {};
                                                    for (var l, h = 0, g = t.length; h < g; l = t[h++], ("[object String]" == (r = v.call(l)) || "[object Number]" == r) && (c[l] = 1));
                                                }
                                                if (i)
                                                    if ("[object Number]" == (r = v.call(i))) {
                                                        if ((i -= i % 1) > 0)
                                                            for (a = "", i > 10 && (i = 10); a.length < i; a += " ");
                                                    } else "[object String]" == r && (a = i.length <= 10 ? i : i.slice(0, 10));
                                                return U("", ((l = {})[""] = e, l), s, c, a, "", [])
                                            }
                                        }
                                        if (!b("json-parse")) {
                                            var _, P, L = a.fromCharCode,
                                                N = {
                                                    92: "\\",
                                                    34: '"',
                                                    47: "/",
                                                    98: "\b",
                                                    116: "\t",
                                                    110: "\n",
                                                    102: "\f",
                                                    114: "\r"
                                                },
                                                k = function() {
                                                    throw _ = P = null, h()
                                                },
                                                B = function() {
                                                    for (var e, t, i, n, o, a = P, s = a.length; _ < s;) switch (o = a.charCodeAt(_)) {
                                                        case 9:
                                                        case 10:
                                                        case 13:
                                                        case 32:
                                                            _++;
                                                            break;
                                                        case 123:
                                                        case 125:
                                                        case 91:
                                                        case 93:
                                                        case 58:
                                                        case 44:
                                                            return e = I ? a.charAt(_) : a[_], _++, e;
                                                        case 34:
                                                            for (e = "@", _++; _ < s;)
                                                                if ((o = a.charCodeAt(_)) < 32) k();
                                                                else if (92 == o) switch (o = a.charCodeAt(++_)) {
                                                                case 92:
                                                                case 34:
                                                                case 47:
                                                                case 98:
                                                                case 116:
                                                                case 110:
                                                                case 102:
                                                                case 114:
                                                                    e += N[o], _++;
                                                                    break;
                                                                case 117:
                                                                    for (t = ++_, i = _ + 4; _ < i; _++)(o = a.charCodeAt(_)) >= 48 && o <= 57 || o >= 97 && o <= 102 || o >= 65 && o <= 70 || k();
                                                                    e += L("0x" + a.slice(t, _));
                                                                    break;
                                                                default:
                                                                    k()
                                                            } else {
                                                                if (34 == o) break;
                                                                for (o = a.charCodeAt(_), t = _; o >= 32 && 92 != o && 34 != o;) o = a.charCodeAt(++_);
                                                                e += a.slice(t, _)
                                                            }
                                                            if (34 == a.charCodeAt(_)) return _++, e;
                                                            k();
                                                        default:
                                                            if (t = _, 45 == o && (n = !0, o = a.charCodeAt(++_)), o >= 48 && o <= 57) {
                                                                for (48 == o && ((o = a.charCodeAt(_ + 1)) >= 48 && o <= 57) && k(), n = !1; _ < s && ((o = a.charCodeAt(_)) >= 48 && o <= 57); _++);
                                                                if (46 == a.charCodeAt(_)) {
                                                                    for (i = ++_; i < s && ((o = a.charCodeAt(i)) >= 48 && o <= 57); i++);
                                                                    i == _ && k(), _ = i
                                                                }
                                                                if (101 == (o = a.charCodeAt(_)) || 69 == o) {
                                                                    for (43 != (o = a.charCodeAt(++_)) && 45 != o || _++, i = _; i < s && ((o = a.charCodeAt(i)) >= 48 && o <= 57); i++);
                                                                    i == _ && k(), _ = i
                                                                }
                                                                return +a.slice(t, _)
                                                            }
                                                            if (n && k(), "true" == a.slice(_, _ + 4)) return _ += 4, !0;
                                                            if ("false" == a.slice(_, _ + 5)) return _ += 5, !1;
                                                            if ("null" == a.slice(_, _ + 4)) return _ += 4, null;
                                                            k()
                                                    }
                                                    return "$"
                                                },
                                                x = function e(t) {
                                                    var i, n;
                                                    if ("$" == t && k(), "string" == typeof t) {
                                                        if ("@" == (I ? t.charAt(0) : t[0])) return t.slice(1);
                                                        if ("[" == t) {
                                                            for (i = [];
                                                                "]" != (t = B()); n || (n = !0)) n && ("," == t ? "]" == (t = B()) && k() : k()), "," == t && k(), i.push(e(t));
                                                            return i
                                                        }
                                                        if ("{" == t) {
                                                            for (i = {};
                                                                "}" != (t = B()); n || (n = !0)) n && ("," == t ? "}" == (t = B()) && k() : k()), "," != t && "string" == typeof t && "@" == (I ? t.charAt(0) : t[0]) && ":" == B() || k(), i[t.slice(1)] = e(B());
                                                            return i
                                                        }
                                                        k()
                                                    }
                                                    return t
                                                },
                                                G = function(e, t, i) {
                                                    var n = R(e, t, i);
                                                    n === m ? delete e[t] : e[t] = n
                                                },
                                                R = function(e, t, i) {
                                                    var n, a = e[t];
                                                    if ("object" == (void 0 === a ? "undefined" : o(a)) && a)
                                                        if ("[object Array]" == v.call(a))
                                                            for (n = a.length; n--;) G(a, n, i);
                                                        else f(a, function(e) {
                                                            G(a, e, i)
                                                        });
                                                    return i.call(e, t, a)
                                                };
                                            t.parse = function(e, t) {
                                                var i, n;
                                                return _ = 0, P = "" + e, i = x(B()), "$" != B() && k(), _ = P = null, t && "[object Function]" == v.call(t) ? R(((n = {})[""] = i, n), "", t) : i
                                            }
                                        }
                                    }
                                    return t.runInContext = r, t
                                }
                                if (!c || c.global !== c && c.window !== c && c.self !== c || (s = c), a) r(s, a);
                                else {
                                    var l = s.JSON,
                                        h = s.JSON3,
                                        g = !1,
                                        d = r(s, s.JSON3 = {
                                            noConflict: function() {
                                                return g || (g = !0, s.JSON = l, s.JSON3 = h, l = h = null), d
                                            }
                                        });
                                    s.JSON = {
                                        parse: d.parse,
                                        stringify: d.stringify
                                    }
                                }
                            }).call(this)
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : {})
                    }, {}],
                    51: [function(e, t, i) {
                        t.exports = function(e, t) {
                            for (var i = [], n = (t = t || 0) || 0; n < e.length; n++) i[n - t] = e[n];
                            return i
                        }
                    }, {}]
                }, {}, [31])(31)
            }), cc._RF.pop()
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    testUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "b8d53sJaPtAsqGe3dkJe9rw", "testUI");
        var n = e("DataType"),
            o = cc.Class({
                extends: cc.Component,
                properties: {
                    unClick: !1,
                    editBoxLv: cc.EditBox,
                    editBoxplant: cc.EditBox,
                    editBoxAchieveA: cc.EditBox,
                    editBoxAchieveB: cc.EditBox
                },
                showUI: function() {},
                closeUI: function() {
                    this.node.active = !1
                },
                clickMoreCoin: function() {
                    cc.Mgr.game.money += 1e23 * 1e13, cc.Mgr.game.gems += 1e8, this.okBtn()
                },
                okBtn: function() {
                    var e = parseInt(this.editBoxLv.string);
                    "" != this.editBoxLv.string && null != e && "undefined" != e && (cc.Mgr.game.level = e > cc.Mgr.Config.lastGameLevel ? cc.Mgr.Config.lastGameLevel : e);
                    var t = parseInt(this.editBoxplant.string);
                    "" != this.editBoxplant.string && null != t && "undefined" != t && (cc.Mgr.game.plantMaxLv = t > cc.Mgr.Config.allPlantCount ? cc.Mgr.Config.allPlantCount : t);
                    var i = parseInt(this.editBoxAchieveA.string),
                        o = parseInt(this.editBoxAchieveB.string);
                    if ("" != this.editBoxAchieveA.string && null != i && "undefined" != i && "" != this.editBoxAchieveB.string && null != o && "undefined" != o) {
                        o > 4 && (o = 4), i > 20 && (i = 20);
                        var a = [5, 20, 50, 100, 200][o],
                            s = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(n.AchievementData, i),
                            c = cc.Mgr.game.getPlantOwnsDataByLv(s.Level);
                        if (c < a) {
                            console.log("\u9ebb\u75f9\u7684\u62d3\u7ef4 plantLv = " + s.Level + "   checkNum = " + a);
                            var r = a - c;
                            cc.Mgr.game.updatePlantOwnsByLv(s.Level, r)
                        }
                    }
                    cc.Mgr.UserDataMgr.SaveUserData(), this.scheduleOnce(function() {
                        this.unClick = !0, cc.game.restart()
                    }, 1.5)
                }
            });
        t.exports = o, cc._RF.pop()
    }, {
        DataType: "DataType"
    }],
    tipUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "c4f14cU/MNONr2c/zB2H/8X", "tipUI");
        var n = e("Event"),
            o = cc.Class({
                extends: cc.Component,
                properties: {
                    desLbl: cc.Label,
                    normalBtn: cc.Node,
                    adsBtn: cc.Node
                },
                showUI: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    this.func = null, this.func = t, cc.Mgr.PlatformController.ShowMoreGameBtn(!1), this.forWhat = e.forWhat, this.data = e, this.desLbl.string = e.des, this.normalBtn.active = !1, this.adsBtn.active = !1, "activity" == this.forWhat ? this.normalBtn.active = !0 : "unlockGrid" == this.forWhat ? this.adsBtn.active = !0 : "doubleCoin" != this.forWhat && "getFreeGems" != this.forWhat && "doubleCoinState" != this.forWhat || (this.adsBtn.active = !0)
                },
                clickAdsBtn: function() {
                    console.log("\u9ebb\u75f9\u7684\u89c6\u9891\u89e3\u9501\u4e0d\u9999\u5417" + this.forWhat);
                    var e = this;
                    if ("unlockGrid" == this.forWhat) cc.Mgr.AdsMgr.ShowVideoAds(9, function(t) {
                        if (0 == t) {
                            console.log("\u9ebb\u75f9\u7684\u89c6\u9891\u89e3\u9501\u4e0d\u9999\u5417" + e.data.index);
                            var i = {};
                            i.index = e.data.index, cc.director.GlobalEvent.emit(n.unlockGird, i), e.closeUI()
                        }
                    });
                    else if ("doubleCoin" == this.forWhat) cc.Mgr.AdsMgr.ShowVideoAds(9, function(t) {
                        0 == t && (cc.Mgr.UIMgr.InGameUI.startDoubleCoinTime(), e.closeUI())
                    });
                    else if ("getFreeGems" == this.forWhat) {
                        e = this;
                        cc.Mgr.AdsMgr.ShowVideoAds(5, function(e) {
                            if (0 == e) {
                                var t = 5;
                                t = cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 5 ? 5 : cc.Mgr.game.level < cc.Mgr.Config.gameCheckLv + 13 ? 10 : 15, cc.Mgr.game.gems += t, cc.Mgr.game.adsGetGemTimes += 1, cc.Mgr.UIMgr.showGemsEffect()
                            }
                        }), e.closeUI()
                    } else if ("doubleCoinState" == this.forWhat) {
                        e = this;
                        cc.Mgr.AdsMgr.ShowVideoAds(6, function(e) {
                            0 == e && cc.Mgr.UIMgr.InGameUI.startDoubleCoinTime()
                        })
                    }
                },
                clickNormal: function() {
                    this.forWhat, this.node.active = !1
                },
                closeUI: function() {
                    cc.Mgr.PlatformController.ShowMoreGameBtn(!0), Math.random() < cc.Mgr.Config.insertAdRatio && cc.Mgr.AdsMgr.ShowInsertAds(1), this.node.active = !1
                }
            });
        t.exports = o, cc._RF.pop()
    }, {
        Event: "Event"
    }],
    turnArrow: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "5052c+h+V9GfaCQaXgrRqSt", "turnArrow");
        var n = ["turn_table_arrow_in", "turn_table_arrow_dur", "turn_table_arrow_out"],
            o = cc.Class({
                extends: cc.Component,
                properties: {
                    anima: cc.Animation
                },
                playIn: function() {
                    this.anima.play(n[0])
                },
                InEnd: function() {
                    this.anima.play(n[1]), this.scheduleOnce(function() {
                        this.anima.play(n[2])
                    }, 2)
                }
            });
        t.exports = o, cc._RF.pop()
    }, {}],
    turnTableUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "f89ed89jt5HRYA9GcZTDisQ", "turnTableUI");
        var n = e("MySprite"),
            o = e("MyButton"),
            a = e("DataType"),
            s = e("TurnTableGetType"),
            c = e("AtlasType"),
            r = e("rewardBox"),
            l = e("turnArrow"),
            h = ["prize-coin", "prize-gem", "prize-speedup", "egg_2"],
            g = "idle",
            d = "xuanzhuan",
            p = "gekai",
            u = "over",
            f = [4, 5, 5],
            m = cc.Class({
                extends: cc.Component,
                properties: {
                    disc: cc.Node,
                    spList: [n],
                    freeBtn: o,
                    gemBtn: o,
                    closeBtn: cc.Node,
                    lblList: [cc.Label],
                    gemLbl: cc.Label,
                    freetimeLbl: cc.Label,
                    freetimeTipLbl: cc.Label,
                    timeDesLbl: cc.Label,
                    rotating: !1,
                    dragon: dragonBones.ArmatureDisplay,
                    turnArrow: l,
                    lastPlantMaxLv: 0
                },
                start: function() {
                    cc.Mgr.UIMgr.turnTableUI = this
                },
                showBtns: function() {
                    this.refreshBtns(), this.closeBtn.active = !0
                },
                hideBtns: function() {
                    this.freeBtn.node.active = !1, this.gemBtn.node.active = !1, this.closeBtn.active = !1
                },
                doTween: function() {
                    this.closeBtn.opacity = 0, this.closeBtn.scale = 0, cc.tween(this.closeBtn).to(.15, {
                        opacity: 255,
                        scale: 1
                    }).start()
                },
                showUI: function() {
                    cc.Mgr.PlatformController.ShowMoreGameBtn(!1), this.showBtns(), this.disc.rotation = 0, this.startTimeCount(), this.node.width = cc.Mgr.Config.winSize.width, this.node.height = cc.Mgr.Config.winSize.height, this.playIdleAnimation(), cc.Mgr.game.plantMaxLv > this.lastPlantMaxLv && this.refreshPanel(), this.doTween(), cc.Mgr.AdsMgr.ShowBannerAds(2), Math.random() < cc.Mgr.Config.insertAdRatio && this.scheduleOnce(function() {
                        cc.Mgr.AdsMgr.ShowInsertAds(1)
                    }, .75)
                },
                playIdleAnimation: function() {
                    this.dragon.timeScale = 2, this.dragon.playAnimation(g, 1)
                },
                playIntervalAnimation: function() {
                    this.scheduleOnce(function() {
                        this.dragon.timeScale = 2, this.dragon.playAnimation(p, -1), this.playOverAnimation()
                    }, .25)
                },
                playOverAnimation: function() {
                    this.scheduleOnce(function() {
                        this.dragon.timeScale = 2, this.dragon.playAnimation(u, 1), this.scheduleOnce(function() {
                            this.playIdleAnimation(), this.rotating = !1
                        }, .75)
                    }, .25)
                },
                playTurnAnimation: function() {
                    this.dragon.playAnimation(d, -1), this.count = 0, this.dragon.timeScale = 0, this.callback = function() {
                        73 == this.count && (this.playIntervalAnimation(), this.unschedule(this.callback)), this.count++, this.count < 35 ? this.dragon.timeScale = .05 * this.count / .5 : this.dragon.timeScale = (2.2 - .03 * this.count) / .5
                    }, this.schedule(this.callback, .05)
                },
                changeDrangonTimeScale: function(e) {
                    this.dragon.timeScale = e
                },
                refreshPanel: function() {
                    this.lastPlantMaxLv = cc.Mgr.game.plantMaxLv, cc.Mgr.Config.turnTableTimes - cc.Mgr.game.spinADResetTime > 0 ? (this.freetimeTipLbl.node.active = !1, this.freeBtn.node.position = cc.v2(150, -375), this.gemBtn.node.position = cc.v2(-150, -375), this.freetimeLbl.string = "(" + (cc.Mgr.Config.turnTableTimes - cc.Mgr.game.spinADResetTime) + "/8)", this.gemLbl.string = f[cc.Mgr.game.spinUseGemTime]) : (this.freetimeTipLbl.node.active = !0, this.freeBtn.node.active = !1, this.gemBtn.node.position = cc.v2(0, -375), this.gemLbl.string = f[cc.Mgr.game.spinUseGemTime]);
                    var e = cc.Mgr.MapDataMgr.getDataListByDataType(a.TurnTableData),
                        t = [];
                    this.disc.rotate = 0, this.rewardList = [];
                    for (var i = [], n = [], o = [], c = [], r = [], l = 1; l < e.length; l++) {
                        switch ((v = e[l = l.toString()]).type) {
                            case s.coin:
                                i.push(v);
                                break;
                            case s.gem:
                                o.push(v);
                                break;
                            case s.plant:
                                n.push(v);
                                break;
                            case s.speedup:
                                c.push(v);
                                break;
                            case s.drone:
                                r.push(v)
                        }
                    }
                    var h = 0,
                        g = 0,
                        d = 0,
                        p = 0,
                        u = 0,
                        m = 0;
                    for (m = 0; m < 6; m++) {
                        var M = Math.random();
                        if (M < .2 && h < 2 && i.length > 0) {
                            h += 1;
                            var v = cc.Mgr.Utils.getArrayItemsAndChangeArr(i, 1);
                            t.push(v[0])
                        } else if (M < .4 && g < 2 && o.length > 0) {
                            g += 1;
                            v = cc.Mgr.Utils.getArrayItemsAndChangeArr(o, 1);
                            t.push(v[0])
                        } else if (M < .6 && d < 2 && n.length > 0) {
                            d += 1;
                            v = cc.Mgr.Utils.getArrayItemsAndChangeArr(n, 1);
                            t.push(v[0])
                        } else if (M < .8 && p < 2 && c.length > 0) {
                            p += 1;
                            v = cc.Mgr.Utils.getArrayItemsAndChangeArr(c, 1);
                            t.push(v[0])
                        } else if (u < 2 && r.length > 0) {
                            u += 1;
                            v = cc.Mgr.Utils.getArrayItemsAndChangeArr(r, 1);
                            t.push(v[0])
                        } else {
                            if (6 == t.length) break;
                            t.length < 6 && m > 0 && m--
                        }
                    }
                    for (var y = cc.Mgr.game.plantMaxLv, b = 0; b < t.length; b++) this.setBlockInfo(b, t[b], y);
                    cc.log("this.rewardList = " + this.rewardList.length)
                },
                setBlockInfo: function(e, t, i) {
                    switch (cc.log("=======================dt.type======================" + t.type), t.type) {
                        case s.coin:
                            this.spList[e].setSprite(c.mainUI, h[0]), this.spList[e].node.scale = 1.05;
                            var n = this.pickOutSpinData(t.rarity, cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.SpinLevelData, i)),
                                o = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.PlantData, n).price;
                            this.lblList[e].string = "x" + cc.Mgr.Utils.getNumStr(o), (g = new r).setData(t.type, o, 1, t.weight), this.rewardList[e] = g;
                            break;
                        case s.gem:
                            this.spList[e].setSprite(c.mainUI, h[1]), this.spList[e].node.scale = 1.05, this.lblList[e].string = "x" + t.rewards, (g = new r).setData(t.type, t.rewards, 1, t.weight), this.rewardList[e] = g;
                            break;
                        case s.plant:
                            n = this.pickOutSpinData(t.rarity, cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.SpinLevelData, i));
                            var l = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.PlantData, n).head;
                            this.spList[e].setSprite(c.PlantHead, l), this.spList[e].node.scale = .55, this.lblList[e].string = "Lv." + n, (g = new r).setData(t.type, 1, n, t.weight), this.rewardList[e] = g;
                            break;
                        case s.speedup:
                            this.spList[e].setSprite(c.mainUI, h[2]), this.spList[e].node.scale = 1, this.lblList[e].string = t.rewards + "s", (g = new r).setData(t.type, t.rewards, 1, t.weight), this.rewardList[e] = g;
                            break;
                        case s.drone:
                            var g;
                            n = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(a.DroneData, i).Drone;
                            this.spList[e].setSprite(c.mainUI, h[3]), this.spList[e].node.scale = .7, this.lblList[e].string = "x4", (g = new r).setData(t.type, 4, n, t.weight), this.rewardList[e] = g
                    }
                },
                pickOutSpinData: function(e, t) {
                    switch (e) {
                        case "S":
                            return t.SpinS;
                        case "A":
                            return t.SpinA;
                        case "B":
                            return t.SpinB;
                        case "C":
                            return t.SpinC
                    }
                },
                startTimeCount: function() {
                    cc.Mgr.Config.turnTableTimes - cc.Mgr.game.spinADResetTime > 0 || (cc.Mgr.game.spinADTimeCount = new Date((new Date).toLocaleDateString()).getTime() / 1e3 + 86400 - cc.Mgr.Utils.GetSysTime(), cc.Mgr.game.spinADTimeCount > 0 && this.schedule(this.countTime, 1))
                },
                countTime: function() {
                    if (cc.Mgr.game.spinADTimeCount < 0) return this.unschedule(this.countTime), cc.Mgr.game.spinADResetTime = 0, this.freetimeTipLbl.node.active = !1, void this.refreshBtns();
                    var e = cc.Mgr.Utils.FormatNumToTime(cc.Mgr.game.spinADTimeCount);
                    this.freetimeTipLbl.string = cc.Mgr.Utils.getTranslation("next-ads-free"), this.timeDesLbl.string = e
                },
                refreshBtns: function() {
                    cc.Mgr.Config.turnTableTimes - cc.Mgr.game.spinADResetTime > 0 ? (this.freeBtn.node.active = !0, this.freetimeTipLbl.node.active = !1, this.freeBtn.node.position = cc.v2(150, -375), this.gemBtn.node.position = cc.v2(-150, -375), this.freetimeLbl.string = "(" + (cc.Mgr.Config.turnTableTimes - cc.Mgr.game.spinADResetTime) + "/8)", this.gemLbl.string = f[cc.Mgr.game.spinUseGemTime]) : (this.freetimeTipLbl.node.active = !0, this.freeBtn.node.active = !1, this.gemBtn.node.position = cc.v2(0, -375), this.gemLbl.string = f[cc.Mgr.game.spinUseGemTime]), this.gemBtn.node.active = !0
                },
                adsTurnTable: function() {
                    if (cc.Mgr.AudioMgr.playSFX("click"), !(this.rotating || cc.Mgr.game.spinADResetTime >= cc.Mgr.Config.turnTableTimes)) {
                        var e = this;
                        cc.Mgr.AdsMgr.ShowVideoAds(10, function(t) {
                            0 == t && (cc.Mgr.game.spinADResetTime++, cc.Mgr.Config.turnTableTimes - cc.Mgr.game.spinADResetTime <= 0 && e.startTimeCount(), e.refreshBtns(), e.startRotate(), e.playTurnAnimation())
                        })
                    }
                },
                gemTurnTable: function() {
                    if (cc.Mgr.AudioMgr.playSFX("click"), !this.rotating)
                        if (cc.Mgr.game.gems < f[cc.Mgr.game.spinUseGemTime]) cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoGems"));
                        else {
                            cc.Mgr.game.gems -= f[cc.Mgr.game.spinUseGemTime];
                            var e = cc.Mgr.TDEvent.CostGem + "TurnTable";
                            cc.Mgr.PlatformController.AldEventStatis(e, {
                                Cost: f[cc.Mgr.game.spinUseGemTime]
                            }), cc.Mgr.game.spinUseGemTime++, cc.Mgr.game.spinUseGemTime > 2 && (cc.Mgr.game.spinUseGemTime = 2), this.startRotate(), this.playTurnAnimation()
                        }
                },
                playSFXRotation: function() {
                    cc.Mgr.AudioMgr.playSFX("spin")
                },
                startRotate: function(e) {
                    var t = this;
                    this.rotating = !0;
                    for (var i = 0, n = 0, o = 0; o < this.rewardList.length; o++) n += this.rewardList[o].weight;
                    var a = parseInt(n * Math.random()) + 1;
                    i = a <= this.rewardList[0].weight ? 1 : a <= this.rewardList[1].weight + this.rewardList[0].weight ? 2 : a <= this.rewardList[2].weight + this.rewardList[1].weight + this.rewardList[0].weight ? 3 : a <= this.rewardList[3].weight + this.rewardList[2].weight + this.rewardList[1].weight + this.rewardList[0].weight ? 4 : a <= this.rewardList[4].weight + this.rewardList[3].weight + this.rewardList[2].weight + this.rewardList[1].weight + this.rewardList[0].weight ? 5 : 0, this.turnArrow.playIn();
                    var s = cc.rotateTo(3.65, 2160 + 60 * i);
                    s.easing(cc.easeInOut(2.25)), this.disc.runAction(cc.sequence(s, cc.callFunc(function() {
                        console.log("\u65cb\u8f6c\u7ed3\u675f"), "function" == typeof e && e(), t.getRewards(i), t.scheduleOnce(function() {
                            this.refreshPanel(), this.disc.rotate = 60 * i
                        }, 1.25)
                    })))
                },
                getRewards: function(e) {
                    this.hideBtns();
                    var t = this.rewardList[e];
                    switch (t.rType) {
                        case s.coin:
                            cc.Mgr.UIMgr.InGameUI.RefreshAssetData(), cc.Mgr.UIMgr.openAssetGetUI("money", t.num, null, "turnTable");
                            break;
                        case s.gem:
                            cc.Mgr.UIMgr.InGameUI.RefreshAssetData(), cc.Mgr.UIMgr.openAssetGetUI("gem", t.num, null, "turnTable");
                            var i = cc.Mgr.TDEvent.GetGem + "TurnTable";
                            cc.Mgr.PlatformController.AldEventStatis(i, {
                                GetGem: t.num
                            });
                            break;
                        case s.plant:
                            cc.Mgr.plantMgr.checkHasAnySpaceGird(), cc.Mgr.UIMgr.openAssetGetUI("plant", t.id), cc.Mgr.flowerPotMgr.addTurnTableFlowerFot(t.id, 1);
                            break;
                        case s.speedup:
                            cc.Mgr.UIMgr.openAssetGetUI("speedup", t.num), cc.Mgr.game.beAngryleftTime += t.num, cc.Mgr.game.beAngryleftTime > 5 * cc.Mgr.Config.angryPerTime && (cc.Mgr.game.beAngryleftTime = 5 * cc.Mgr.Config.angryPerTime), cc.Mgr.UIMgr.InGameUI.onAngryUIClose();
                            break;
                        case s.drone:
                            cc.Mgr.flowerPotMgr.addDroneFlowerFot(t.id, 4), cc.Mgr.UIMgr.openAssetGetUI("drone", t.id)
                    }
                },
                closeUI: function() {
                    cc.Mgr.PlatformController.ShowMoreGameBtn(!0), cc.Mgr.AudioMgr.playSFX("click"), this.rotating || (this.unschedule(this.countTime), cc.Mgr.AdsMgr.HideBannerAd(), this.node.active = !1)
                }
            });
        t.exports = m, cc._RF.pop()
    }, {
        AtlasType: "AtlasType",
        DataType: "DataType",
        MyButton: "MyButton",
        MySprite: "MySprite",
        TurnTableGetType: "TurnTableGetType",
        rewardBox: "rewardBox",
        turnArrow: "turnArrow"
    }],
    uavUI: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "8e062Uc6hlOnp8CbRFRi8QX", "uavUI");
        var n = e("DataType"),
            o = [3, 4, 5],
            a = [4, 4, 4],
            s = cc.Class({
                extends: cc.Component,
                properties: {
                    numLbl: cc.Label,
                    num: 1,
                    lv: 5,
                    costLbl: cc.Label,
                    dragonNode: cc.Node,
                    closeNode: cc.Node
                },
                doTween: function() {
                    var e = this;
                    this.dragonNode.position = cc.v2(0, 920), this.closeNode.opacity = 0, this.closeNode.scale = 0, this.dragonNode.active = !0, cc.tween(this.dragonNode).to(.25, {
                        position: cc.v2(0, 12)
                    }).call(function() {
                        cc.tween(e.closeNode).to(.15, {
                            opacity: 255,
                            scale: 1
                        }).start()
                    }).start()
                },
                showUI: function() {
                    cc.Mgr.PlatformController.ShowMoreGameBtn(!1), this.dragonNode.active = !1;
                    var e = cc.Mgr.MapDataMgr.getDataByDataTypeAndKey(n.DroneData, cc.Mgr.game.plantMaxLv),
                        t = 4;
                    t = cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 5 ? a[0] : cc.Mgr.game.level < cc.Mgr.Config.gameCheckLv + 13 ? a[1] : a[2], this.costLbl.string = o[cc.Mgr.game.uavUseTime], this.num = t, this.lv = e.Drone, this.numLbl.string = "x" + t, this.doTween(), cc.Mgr.AdsMgr.ShowBannerAds(), Math.random() < cc.Mgr.Config.insertAdRatio && this.scheduleOnce(function() {
                        cc.Mgr.AdsMgr.ShowInsertAds(1)
                    }, .75)
                },
                gemGetDrone: function() {
                    cc.Mgr.game.gems < o[cc.Mgr.game.uavUseTime] ? cc.Mgr.UIMgr.showPrompt(cc.Mgr.Utils.getTranslation("NoGems")) : (cc.Mgr.game.gems -= o[cc.Mgr.game.uavUseTime], cc.Mgr.game.uavUseTime += 1, cc.Mgr.game.level < cc.Mgr.Config.gameCheckLv - 2 && (cc.Mgr.game.uavUseTime = 0), cc.Mgr.game.uavUseTime >= 2 && (cc.Mgr.game.uavUseTime = 2), cc.Mgr.flowerPotMgr.addDroneFlowerFot(this.lv, this.num), this.closeUI())
                },
                adsGetDrone: function() {
                    var e = this;
                    cc.Mgr.AdsMgr.ShowVideoAds(11, function(t) {
                        if (0 == t) {
                            var i = e.num + 2;
                            cc.Mgr.flowerPotMgr.addDroneFlowerFot(e.lv, i), e.closeUI()
                        }
                    })
                },
                closeUI: function() {
                    cc.Mgr.PlatformController.ShowMoreGameBtn(!0), cc.Mgr.UIMgr.InGameUI.closeUav(), cc.Mgr.AdsMgr.HideBannerAd(), this.node.active = !1
                }
            });
        t.exports = s, cc._RF.pop()
    }, {
        DataType: "DataType"
    }],
    uav: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "6ffde73ZFVLn7MKUof1xOlr", "uav");
        var n = [cc.v2(200, 290), cc.v2(-200, 290), cc.v2(-600, 290), cc.v2(500, 290)],
            o = cc.Class({
                extends: cc.Component,
                properties: {
                    dragonNode: cc.Node,
                    beClicked: !1
                },
                show: function() {
                    this.beClicked = !1, this.dragonNode.active = !1, this.node.position = n[3], this.scheduleOnce(function() {
                        this.dragonNode.active = !0, this.moveLeftOrRight()
                    }, .1)
                },
                moveLeftOrRight: function() {
                    var e = this;
                    cc.log("\u9ebb\u75f9\u5f97\uff0c\u76f4\u5347\u673a\u8981\u8fdb\u6765 \u70b9\u51fb  " + cc.Mgr.Utils.GetSysTime()), cc.tween(this.node).to(.5, {
                        position: n[0]
                    }, {
                        easing: "sineOut"
                    }).call(function() {
                        cc.Mgr.AudioMgr.playSFX("plane")
                    }).to(2, {
                        position: n[0]
                    }).to(4, {
                        position: n[1]
                    }).call(function() {
                        cc.Mgr.AudioMgr.playSFX("plane")
                    }).to(2, {
                        position: n[1]
                    }).to(4, {
                        position: n[0]
                    }).call(function() {
                        cc.Mgr.AudioMgr.playSFX("plane")
                    }).to(2, {
                        position: n[0]
                    }).to(4, {
                        position: n[1]
                    }).call(function() {
                        cc.Mgr.AudioMgr.playSFX("plane")
                    }).to(2, {
                        position: n[1]
                    }).to(4, {
                        position: n[0]
                    }).call(function() {
                        cc.Mgr.AudioMgr.playSFX("plane")
                    }).to(2, {
                        position: n[0]
                    }).to(4, {
                        position: n[1]
                    }).call(function() {
                        cc.Mgr.AudioMgr.playSFX("plane")
                    }).to(1, {
                        position: n[2]
                    }, {
                        easing: "sineIn"
                    }).call(function() {
                        cc.log("\u9ebb\u75f9\u5f97\uff0c\u76f4\u5347\u673a\u8981\u51fa\u53bb \u4e3b\u52a8  " + cc.Mgr.Utils.GetSysTime()), cc.Mgr.UIMgr.InGameUI.unscheduleShowUav(), e.node.stopAllActions(), cc.Mgr.UIMgr.InGameUI.showUavNextTime(30), e.node.active = !1
                    }).start()
                },
                click: function() {
                    cc.Mgr.UIMgr.InGameUI.unscheduleShowUav(), this.node.stopAllActions(), this.beClicked = !0, cc.Mgr.UIMgr.openUavUI()
                },
                uavOutScreen: function() {
                    var e = this;
                    cc.Mgr.AudioMgr.playSFX("plane-out"), cc.tween(this.node).to(1, {
                        position: n[2]
                    }, {
                        easing: "sineIn"
                    }).call(function() {
                        e.node.stopAllActions(), cc.log("\u9ebb\u75f9\u5f97\uff0c\u76f4\u5347\u673a\u8981\u51fa\u53bb \u70b9\u51fb  " + cc.Mgr.Utils.GetSysTime()), cc.Mgr.UIMgr.InGameUI.showUavNextTime(30), e.node.active = !1
                    }).start()
                }
            });
        t.exports = o, cc._RF.pop()
    }, {}],
    uiConfig: [function(e, t, i) {
        "use strict";
        var n;

        function o(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }
        cc._RF.push(t, "9a0fepKSdpOmKUpwM/qqTCo", "uiConfig");
        var a = cc.Class({
            extends: cc.Component,
            statics: (n = {
                setUI: {
                    Name: "setUI",
                    Layer: 75
                },
                shopUI: {
                    Name: "shopUI",
                    Layer: 75
                },
                turnTableUI: {
                    Name: "turnTableUI",
                    Layer: 75
                },
                uavUI: {
                    Name: "uavUI",
                    Layer: 75
                },
                angryUI: {
                    Name: "angryUI",
                    Layer: 75
                },
                missionUI: {
                    Name: "missionUI",
                    Layer: 75
                },
                inviteUI: {
                    Name: "inviteUI",
                    Layer: 75
                },
                resultUI: {
                    Name: "resultUI",
                    Layer: 75
                },
                rewardUI: {
                    Name: "rewardUI",
                    Layer: 75
                },
                promptUI: {
                    Name: "promptUI",
                    Layer: 100
                },
                smallResult: {
                    Name: "smallResult",
                    Layer: 50
                },
                bigResult: {
                    Name: "bigResult",
                    Layer: 50
                },
                bossComing: {
                    Name: "bossComing",
                    Layer: 50
                },
                signUI: {
                    Name: "signUI",
                    Layer: 74
                },
                plantGetUI: {
                    Name: "plantGetUI",
                    Layer: 76
                },
                assetGetUI: {
                    Name: "assetGetUI",
                    Layer: 76
                }
            }, o(n, "uavUI", {
                Name: "uavUI",
                Layer: 75
            }), o(n, "offlineAssetUI", {
                Name: "offlineAssetUI",
                Layer: 85
            }), o(n, "testUI", {
                Name: "testUI",
                Layer: 80
            }), o(n, "tipUI", {
                Name: "tipUI",
                Layer: 86
            }), o(n, "discountUI", {
                Name: "discountUI",
                Layer: 85
            }), o(n, "luckyMergeUI", {
                Name: "luckyMergeUI",
                Layer: 84
            }), o(n, "activityUI", {
                Name: "activityUI",
                Layer: 85
            }), o(n, "shopItem", {
                Name: "shopItem",
                Layer: 1
            }), o(n, "missionItem", {
                Name: "missionItem",
                Layer: 1
            }), o(n, "achieveItem", {
                Name: "achieveItem",
                Layer: 1
            }), o(n, "gameInUI", {
                Name: "gameInUI",
                Layer: 0
            }), o(n, "inGameUITopNode", {
                Name: "inGameUITopNode",
                Layer: 90
            }), o(n, "guide", {
                Name: "guide",
                Layer: 91
            }), o(n, "jinbi", {
                Name: "jinbi",
                Layer: 92
            }), n)
        });
        t.exports = a, cc._RF.pop()
    }, {}],
    uiItemMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "edfd0bTU9xD94G5wtyKbH9O", "uiItemMgr");
        var n = e("uiConfig"),
            o = cc.Class({
                extends: cc.Component,
                statics: {
                    shopItemPre: cc.Prefab,
                    missionItemPre: cc.Prefab,
                    achieveItemPre: cc.Prefab,
                    loadItemsPre: function() {
                        var e = this;
                        cc.loader.loadRes("prefab/uiPrefab/" + n.shopItem.Name, function(t, i) {
                            t ? cc.error(t.message || t) : e.shopItemPre = i
                        }), cc.loader.loadRes("prefab/uiPrefab/" + n.missionItem.Name, function(t, i) {
                            t ? cc.error(t.message || t) : e.missionItemPre = i
                        }), cc.loader.loadRes("prefab/uiPrefab/" + n.achieveItem.Name, function(t, i) {
                            t ? cc.error(t.message || t) : e.achieveItemPre = i
                        })
                    },
                    getShopItemPre: function() {
                        return this.shopItemPre
                    },
                    getMissionItemPre: function() {
                        return this.missionItemPre
                    },
                    getAchieveItemPre: function() {
                        return this.achieveItemPre
                    }
                }
            });
        t.exports = o, cc._RF.pop()
    }, {
        uiConfig: "uiConfig"
    }],
    vertigo: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "2be2a0JaThNBok1imTmFb0u", "vertigo");
        e("EffectType");
        var n = cc.Class({
            extends: cc.Component,
            properties: {
                dragon: dragonBones.ArmatureDisplay
            },
            start: function() {
                this.dragon.on(dragonBones.EventObject.COMPLETE, this.onAnimComplete, this)
            },
            onAnimComplete: function() {
                this.node.active = !1
            },
            playAnimation: function() {
                this.dragon.playAnimation("newAnimation", 1)
            },
            closeEffect: function() {
                this.node.active = !1
            }
        });
        t.exports = n, cc._RF.pop()
    }, {
        EffectType: "EffectType"
    }],
    zombie_config: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "d9802TA5BpH77oRgpCe7ZQS", "zombie_config");
        var n = cc.Class({
            extends: cc.Component,
            statics: {
                posList: [cc.v2(-410, 350), cc.v2(-140, 160), cc.v2(-8, 235), cc.v2(245, 90), cc.v2(85, -25), cc.v2(10, 0), cc.v2(-150, -110), cc.v2(110, -270), cc.v2(380, -90)],
                zIndexList: [35, 35, 35, 75, 75, 75, 115, 115, 115]
            }
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    zombie_state: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "7bc8fxfFpNFvrF4zW5bUG0Q", "zombie_state");
        var n = cc.Enum({
            WALK: 0,
            SlOW: 1,
            DIE: 2
        });
        t.exports = n, cc._RF.pop()
    }, {}],
    zombie: [function(e, t, i) {
        "use strict";
        var n;

        function o(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }
        cc._RF.push(t, "59dcdBP/AFIEL6J8Hqo3kch", "zombie");
        var a = e("zombie_state"),
            s = e("zombie_config"),
            c = e("MyEnum"),
            r = (e("Event"), e("EffectType")),
            l = (e("DragonType"), e("attackEffect")),
            h = e("vertigo"),
            g = cc.Class((o(n = {
                extends: cc.Component,
                properties: {
                    id: 1,
                    hp: 100,
                    money: 100,
                    spd: .5,
                    prefab: "",
                    gender: "",
                    dragon: dragonBones.ArmatureDisplay,
                    dragonParent: cc.Node,
                    state: {
                        default: a.WALK,
                        type: a
                    },
                    posIndex: 0,
                    hpBar: cc.ProgressBar,
                    slowState: !1,
                    vertigoState: !1,
                    attackEffect: l,
                    vertigoEffect: h,
                    hasDie: !1
                },
                start: function() {},
                init: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    this.zIndexChangeA = !1, this.zIndexChangeB = !1, this.hasDie = !1, this.attackEffect.node.active = !1, this.vertigoEffect.node.active = !1, this.id = e.id, this.node.scale = t, this.totalHp = e.hp, this.hp = e.hp, this.money = e.money, this.spd = e.spd, this.prefab = e.prefab, this.posIndex = 0, this.node.position = s.posList[this.posIndex], this.hpBar.progress = 1, this.dragon.timeScale = 1, this.dragonParent.scaleX = 1, this.slowState = !1, this.vertigoState = !1, this.hexToColor("#ffffff"), this.hpBar.node.getChildByName("bar").height = 15, this.attackEffect.node.scaleX = 1, this.vertigoEffect.node.scaleX = 1, this.hpBar.node.scaleX = 1, this.spdStep_3_Ratio = 1
                }
            }, "start", function() {}), o(n, "moveToNextPos", function() {
                if (this.node.stopAllActions(), !this.hasDie && this.posIndex == s.posList.length - 1) return console.log("------\x3e\u5df2\u7ecf\u5230\u8fbe\u7ec8\u70b9 =====" + this.posIndex), cc.Mgr.ZombieMgr.zombieEscape(), this.node.stopAllActions(), this.unschedule(this.vertigoCallBack), this.unschedule(this.slowMoveCallBack), void cc.Mgr.ZombieMgr.backToPool(this.node, this.id);
                var e = 1;
                this.slowState && (e = .5), this.vertigoState && (e = .001);
                var t = cc.Mgr.Utils.pDistance(this.node.position, s.posList[this.posIndex + 1]) / (this.spd * cc.Mgr.game.zombieSpeedRatio * e * this.spdStep_3_Ratio),
                    i = cc.moveTo(t, s.posList[this.posIndex + 1]),
                    n = cc.sequence(i, cc.callFunc(function() {
                        if (this.posIndex += 1, this.posIndex < s.posList.length) {
                            if (3 == this.posIndex) {
                                this.zIndexChangeA || (this.zIndexChangeA = !0, this.node.zIndex += 40), this.node.scaleX = -1 * this.node.scaleX, this.attackEffect.node.scaleX = -1, this.vertigoEffect.node.scaleX = -1, this.hpBar.node.scaleX = -1;
                                var e = cc.Mgr.Utils.pDistance(this.node.position, s.posList[this.posIndex + 1]),
                                    t = e / (this.spd * cc.Mgr.game.zombieSpeedRatio),
                                    i = 40 / (this.spd * cc.Mgr.game.zombieSpeedRatio);
                                this.spdStep_3_Ratio = e / (t - i) / (this.spd * cc.Mgr.game.zombieSpeedRatio)
                            } else 6 == this.posIndex ? (this.zIndexChangeB || (this.zIndexChangeB = !0, this.node.zIndex += 40), this.node.scaleX = -1 * this.node.scaleX, this.attackEffect.node.scaleX = 1, this.vertigoEffect.node.scaleX = 1, this.hpBar.node.scaleX = 1) : this.spdStep_3_Ratio = 1;
                            this.moveToNextPos()
                        } else this.hasDie || (console.log("------\x3e2\u5df2\u7ecf\u5230\u8fbe\u7ec8\u70b9 =====" + this.posIndex), cc.Mgr.ZombieMgr.zombieEscape(), this.node.stopAllActions(), this.unschedule(this.vertigoCallBack), this.unschedule(this.slowMoveCallBack), cc.Mgr.ZombieMgr.backToPool(this.node, this.id))
                    }, this));
                this.node.runAction(n)
            }), o(n, "hexToColor", function(e) {
                this.dragon.node.color = cc.Mgr.Utils.hexToColor(e)
            }), o(n, "slowMoveCallBack", function() {
                this.slowState = !1, this.dragon.timeScale = 1, this.moveToNextPos(), this.hexToColor("#ffffff")
            }), o(n, "slowMove", function() {
                this.slowState || this.vertigoState || (this.unschedule(this.vertigoCallBack), this.unschedule(this.slowMoveCallBack), this.slowState = !0, this.dragon.timeScale = .5, this.moveToNextPos(), this.hexToColor("#51E755"), this.scheduleOnce(this.slowMoveCallBack, 1))
            }), o(n, "vertigoCallBack", function() {
                this.vertigoEffect.closeEffect(), this.vertigoState = !1, this.dragon.timeScale = 1, this.moveToNextPos(), this.hexToColor("#ffffff")
            }), o(n, "vertigo", function() {
                this.slowState || this.vertigoState || (this.unschedule(this.vertigoCallBack), this.unschedule(this.slowMoveCallBack), this.vertigoState = !0, this.playVertigoEffect(), this.dragon.timeScale = .001, this.moveToNextPos(), this.hexToColor("#009EEC"), this.scheduleOnce(this.vertigoCallBack, 1))
            }), o(n, "beAttack", function(e) {
                var t = e.power;
                if (cc.Mgr.game.level <= cc.Mgr.Config.bulletPowerCheckLv - 6 ? t = Math.floor(.95 * e.power) : cc.Mgr.game.level <= cc.Mgr.Config.bulletPowerCheckLv - 5 ? t = Math.floor(.92 * e.power) : cc.Mgr.game.level <= cc.Mgr.Config.bulletPowerCheckLv - 4 ? t = Math.floor(.87 * e.power) : cc.Mgr.game.level <= cc.Mgr.Config.bulletPowerCheckLv - 3 ? t = Math.floor(.82 * e.power) : cc.Mgr.game.level <= cc.Mgr.Config.bulletPowerCheckLv - 2 ? t = Math.floor(.85 * e.power) : cc.Mgr.game.level <= cc.Mgr.Config.bulletPowerCheckLv - 1 ? t = Math.floor(.88 * e.power) : cc.Mgr.game.level <= cc.Mgr.Config.bulletPowerCheckLv && (t = Math.floor(.92 * e.power)), this.hp -= t, this.playAttackExploreEffect(), cc.Mgr.AudioMgr.playSFX(c.AudioType.hit), this.hp > 0) switch (e.bulletSkill) {
                    case c.BulletSkillType.Slow:
                        cc.Mgr.AudioMgr.playSFX(c.AudioType.skill_slow), this.slowMove();
                        break;
                    case c.BulletSkillType.DouKill:
                        cc.Mgr.AudioMgr.playSFX(c.AudioType.skill_crit), this.playCrickEffect(), this.hp -= t;
                        break;
                    case c.BulletSkillType.Vertigo:
                        cc.Mgr.AudioMgr.playSFX(c.AudioType.skill_freeze), this.vertigo()
                }
                this.hasDie || (this.hp <= 0 ? (this.hasDie = !0, this.hpBar.progress = 0, this.node.stopAllActions(), this.playDieSmokeEffect(), this.unschedule(this.vertigoCallBack), this.unschedule(this.slowMoveCallBack), cc.Mgr.ZombieMgr.backToPool(this.node, this.id, this.hp)) : this.hpBar.progress = this.hp / this.totalHp)
            }), o(n, "playCoinFlyEffect", function() {
                var e = cc.Mgr.EffectMgr.getObFromPool(r.CoinFly);
                if (e.active = !0, null != e) {
                    e.parent = cc.Mgr.ZombieMgr.zombiesParent, e.zIndex = 120, e.y = this.node.y + this.node.height, e.x = this.node.x;
                    var t = Math.floor((.8 + .4 * Math.random()) * this.money);
                    if (cc.Mgr.game.level >= cc.Mgr.Config.gameCheckLv + 14 ? t = Math.floor((.9 + .4 * Math.random()) * this.money) : cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv - 4 ? t = Math.floor((.7 + .4 * Math.random()) * this.money) : cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv - 2 && (t = Math.floor((.6 + .4 * Math.random()) * this.money)), 1 == cc.Mgr.game.doubleCoinState) {
                        var i = 1;
                        i = cc.Mgr.game.level <= cc.Mgr.Config.gameCheckLv + 6 ? 1 : cc.Mgr.game.level < cc.Mgr.Config.gameCheckLv + 14 ? 4 : 7, t += i * t
                    }
                    var n = cc.Mgr.Utils.getNumStr(t);
                    e.getComponent("coinFly").setData(n), e.scale = 1, cc.tween(e).to(.1, {
                        position: cc.v2(this.node.x, this.node.y + this.node.height + 30),
                        scale: .8
                    }).to(.5, {
                        position: cc.v2(this.node.x, this.node.y + this.node.height + 30 + 10)
                    }).call(function() {
                        cc.Mgr.game.money += t, cc.Mgr.UIMgr.InGameUI.RefreshAssetData(), cc.Mgr.EffectMgr.ObBackToPool(e, r.CoinFly)
                    }).start()
                }
            }), o(n, "playCrickEffect", function() {
                var e = cc.Mgr.EffectMgr.getObFromPool(r.Crick);
                e.active = !0, null != e && (e.parent = cc.Mgr.ZombieMgr.zombiesParent, e.zIndex = 120, e.y = this.node.y + this.node.height / 2 - 10, e.x = this.node.x, e.scale = 1.2, e.opacity = 255, cc.tween(e).to(.3, {
                    position: cc.v2(this.node.x, this.node.y + this.node.height)
                }).call(function() {
                    cc.Mgr.EffectMgr.ObBackToPool(e, r.Crick)
                }).start())
            }), o(n, "playAttackExploreEffect", function() {
                this.attackEffect.node.active = !0, this.attackEffect.playAnimation()
            }), o(n, "playDieSmokeEffect", function() {
                var e = cc.Mgr.EffectMgr.getObFromPool(r.DieSmoke);
                if (e.active = !0, null != e) {
                    e.parent = cc.Mgr.ZombieMgr.zombiesParent, e.y = this.node.y + this.node.height / 2, e.x = this.node.x;
                    var t = this;
                    e.getComponent("dieSmoke").playAnimation(function() {
                        t.playCoinFlyEffect()
                    })
                }
            }), o(n, "playVertigoEffect", function() {
                this.vertigoEffect.node.active = !0, this.vertigoEffect.playAnimation()
            }), n));
        t.exports = g, cc._RF.pop()
    }, {
        DragonType: "DragonType",
        EffectType: "EffectType",
        Event: "Event",
        MyEnum: "MyEnum",
        attackEffect: "attackEffect",
        vertigo: "vertigo",
        zombie_config: "zombie_config",
        zombie_state: "zombie_state"
    }]
}, {}, ["AdsMgr", "AdsParam", "CButton", "MyButton", "MyLabel", "MySprite", "DB_achievementAwards", "DB_airdrop", "DB_buyButton", "DB_droneRewards", "DB_i18n", "DB_invite", "DB_level", "DB_levelupGem", "DB_plant", "DB_shopSort", "DB_spinLevel", "DB_turntable", "db_zombie", "socket-io", "AudioMgr", "Config", "AchieveData", "AchieveMapMgr", "AirDropData", "AirDropMapMgr", "BuyButtonData", "BuyButtonMapMgr", "DroneData", "DroneMapMgr", "GoodMapDecoder", "GoodsData", "InviteData", "InviteMapMgr", "LevelData", "LevelMapMgr", "LvUpGemData", "LvUpGemMapMgr", "MapDataMgr", "PlantData", "PlantMapMgr", "ShopData", "ShopMapMgr", "SpinLvData", "SpinLvMapMgr", "TransData", "TransMapMgr", "TurnTableData", "TurnTableMapMgr", "ZombieData", "ZombieMapMgr", "DataType", "Event", "GlobalEvent", "HttpMgr", "MissionType", "MyEnum", "NetMgr", "NoticeText", "RewardType", "TDEventName", "TurnTableGetType", "UserDataMgr", "Utils", "achieveMissonData", "AtlasMgr", "AtlasType", "DragonMgr", "DragonType", "GameCenterCtrl", "ParticleMgr", "BulletPool", "BulletType", "bullet", "EffectMgr", "EffectType", "angryEffect", "attackEffect", "coinFly", "dieSmoke", "flowerPotOpen", "plantMerge", "vertigo", "game", "jinggai", "flowerPot", "flowerPotManage", "lockGird", "plant", "plantManage", "plant_config", "ZomBieMgr", "zombie", "zombie_config", "zombie_state", "PlatformController", "ShareInfos", "AppStart", "Guides", "InGameUI", "LoadingUI", "PlantMergeGuide", "UIMgr", "achieveItem", "activityUI", "adsGetAssetUI", "angryUI", "assetGetUI", "bigResult", "bossComing", "coinBonus", "jinbi", "jinbiCtrl", "discountUI", "luckyMergeUI", "missionItem", "missionUI", "offlineAssetUI", "plantGetUI", "promptUI", "rewardBox", "setPanel", "shopItem", "shopUI", "signItem", "signUI", "smallResult", "testUI", "tipUI", "turnArrow", "turnTableUI", "uav", "uavUI", "uiConfig", "uiItemMgr"]);