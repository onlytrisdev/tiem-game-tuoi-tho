window.__require = function e(t, a, o) {
    function c(l, n) {
        if (!a[l]) {
            if (!t[l]) {
                var s = l.split("/");
                if (s = s[s.length - 1], !t[s]) {
                    var r = "function" == typeof __require && __require;
                    if (!n && r) return r(s, !0);
                    if (i) return i(s, !0);
                    throw new Error("Cannot find module '" + l + "'")
                }
                l = s
            }
            var d = a[l] = {
                exports: {}
            };
            t[l][0].call(d.exports, function(e) {
                return c(t[l][1][e] || e)
            }, d, d.exports, e, t, a, o)
        }
        return a[l].exports
    }
    for (var i = "function" == typeof __require && __require, l = 0; l < o.length; l++) c(o[l]);
    return c
}({
    DaiJinItem: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "c2758bTReBJp72yFGN4vxKg", "DaiJinItem"), cc.Class({
            extends: cc.Component,
            properties: {
                icon_sprite: cc.Sprite,
                btn_try: cc.Node,
                btn_start: cc.Node,
                label_name: cc.Label,
                label_description: cc.Label
            },
            datas: null,
            obj: null,
            setinfo: function(e, t) {
                this.obj = t, this.datas = e, this.loadAvatarImage(e.icon, this.icon_sprite), e.isUseGame ? (e.title = e.title.substr(0, 6) + "(\u5df2\u9886\u53d6)", this.label_name.string = e.title, this.label_description.string = e.description.substr(0, 14), this.btn_start.active = !0, this.btn_try.active = !1) : (this.label_name.string = e.title.substr(0, 10), this.label_description.string = e.description.substr(0, 14), this.btn_start.active = !1, this.btn_try.active = !0)
            },
            loadAvatarImage: function(e, t) {
                if (cc.sys.platform == cc.sys.WECHAT_GAME) {
                    if (!e) return;
                    cc.loader.load({
                        url: e,
                        type: "jpg"
                    }, function(e, a) {
                        t.spriteFrame = new cc.SpriteFrame(a)
                    })
                }
            },
            clickStart: function() {
                cc.sys.platform == cc.sys.WECHAT_GAME && (cc.Global.DaijinPage.isTurn = !1, mpsdk.Ad.click(this.datas))
            },
            clickTty: function() {
                cc.sys.platform === cc.sys.WECHAT_GAME && (cc.Global.DaijinPage.isTurn = !0, cc.Global.DaijinPage.saveId = this.datas.adid, cc.Global.DaijinPage.lastTime = (new Date).getTime(), mpsdk.Ad.click(this.datas), mpsdk.Report.reportEvent(8, this.datas.adid))
            }
        }), cc._RF.pop()
    }, {}],
    DaiJinPage: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "9d9f0FrR+hFvLQdXvUbLcN3", "DaiJinPage"), cc.Class({
            extends: cc.Component,
            properties: {
                daijinItem: cc.Prefab,
                scroller: cc.ScrollView,
                content: cc.Node,
                _allList: []
            },
            isTurn: !1,
            lastTime: 0,
            saveId: "",
            onLoad: function() {},
            start: function() {},
            initDaiJinPage: function() {
                var e = this;
                cc.Global.DaijinPage = this, this.isTurn = !1, this.node.active = !1, this._allList = [], cc.Global.getlocalStorage("DaiJinPlay", function(t) {
                    t ? cc.Global.getlocalStorage("DaiJinPlayResetDay", function(a) {
                        cc.Global.getNowFormatDate() != a ? (cc.Global.setlocalStorage("DaiJinPlayResetDay", cc.Global.getNowFormatDate()), cc.Global.setlocalStorage("DaiJinPlay", JSON.stringify([]))) : e._allList = JSON.parse(t)
                    }) : (cc.Global.setlocalStorage("DaiJinPlayResetDay", cc.Global.getNowFormatDate()), cc.Global.setlocalStorage("DaiJinPlay", JSON.stringify([])))
                })
            },
            onDisable: function() {
                this.isTurn = !1, this.lastTime = 0
            },
            checkShow: function() {
                cc.Global.DaijinPage.isTurn && (cc.Global.DaijinPage.lastTime && (((new Date).getTime() - cc.Global.DaijinPage.lastTime) / 1e3 >= 30 ? (cc.Global.showGetGemEff(cc.v2(0, 120), this.node, function() {}), cc.Global.userData.gemCoins += 50, cc.Global.app.updateMyContext(), cc.Global.homeLayer.updateGoldLabel(), cc.Global.DaijinPage._allList.push(cc.Global.DaijinPage.saveId), cc.Global.setlocalStorage("DaiJinPlay", JSON.stringify(cc.Global.DaijinPage._allList)), cc.Global.setlocalStorage("DaiJinPlayResetDay", cc.Global.getNowFormatDate()), cc.Global.DaijinPage.loadList(), cc.Global.DaijinPage.isTurn = !1, cc.Global.DaijinPage.lastTime = 0) : (cc.Global.DaijinPage.isTurn = !1, cc.Global.DaijinPage.lastTime = 0, cc.Global.showTip("Chơi trong 30 giây ~~"))))
            },
            showDaiJinPage: function() {
                return
            },
            closePage: function(e) {
                var t = this;
                this.node.getChildByName("frame").getNumberOfRunningActions() > 0 || (cc.Global.hideBannerOrSuggest(), this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("frame").runAction(cc.sequence(cc.scaleTo(.5, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
                    t.node.active = !1, e && "function" == typeof e && e()
                }))))
            },
            loadList: function() {
                var e = this,
                    t = this;
                cc.sys.platform == cc.sys.WECHAT_GAME && mpsdk.Ad.getSuggestList(!1, 16, cc.Global.userMaxOverLevel).then(function(a) {
                    if (e.node.active) {
                        console.log("\u5e7f\u544a\u5217\u8868", a), cc.Global.SuggestList = a, e.content.removeAllChildren();
                        for (var o = [], c = [], i = 0; i < cc.Global.SuggestList.length; i++) a[i].adid && a[i].appid && (t.isSame(a[i].adid) ? (a[i].isUseGame = !0, c.push(a[i])) : (a[i].isUseGame = !1, o.push(a[i])));
                        for (var l = o.concat(c), n = 0; n < l.length; n++) {
                            var s = cc.instantiate(t.daijinItem);
                            s.parent = t.content, s.getComponent("DaiJinItem").setinfo(l[n])
                        }
                    }
                })
            },
            isSame: function(e) {
                for (var t = 0; t < this._allList.length; t++)
                    if (e == this._allList[t]) return !0;
                return !1
            }
        }), cc._RF.pop()
    }, {}],
    Global: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "68090BwHw9JsYlotuLPsxU1", "Global");
        var o = e("SoundManager");
        cc.Global = {
            api: null,
            app: null,
            gameControl: null,
            SoundModel: new o,
            codeVersion: "0.2.2",
            bisVolume: !0,
            bisVolumeBg: !0,
            gameConfig: [],
            nowRoadNode: null,
            shareEnable: !0,
            allVideo: !1,
            planB: !1,
            planC: !1,
            bCanUserAd: !1,
            videoAd: null,
            bannerAd: null,
            IsNoBanner: !0,
            _gvAdShowing: !1,
            shareCB: null,
            videoCB: null,
            userData: {},
            isStrongShare: !0,
            timeOutId: null,
            gunImgArry: [],
            gunBigImgArry: [],
            isGuide: !1,
            addProfitMaxTime: 5,
            appIdList: [],
            isVideoOnClose: !1,
            intervalLvAD: 1,
            minLvAD: 1,
            planD: !0,
            isSignIn: !1,
            lightpoint: null,
            objIsEmpty: function(e) {
                return "{}" === JSON.stringify(e)
            },
            initUserData: function(e) {
                var t = e || {};
                t.goldCoins = e.goldCoins || 12e4, t.totalGoldCoins = e.totalGoldCoins || 12e4, t.gemCoins = e.gemCoins || 0;
                var a = /^[0-9]+.?[0-9]*$/;
                return t.maxLevel = a.test(e.maxLevel) ? e.maxLevel : 0, t.gameLevel = a.test(e.gameLevel) ? e.gameLevel : 0, t.shootLevel = a.test(e.shootLevel) ? e.shootLevel : 0, t.powerTime = e.powerTime || 0, t.resetDay = e.resetDay || "", t.lookVideoADCount = e.lookVideoADCount || 0, t.shareCount = e.shareCount || 0, t.shareLimitCount = e.shareLimitCount || 0, t.addGoldResetCount = e.addGoldResetCount || "", t.video12Gold = e.video12Gold || !1, t.share4Gold = e.share4Gold || !1, t.share2Gold = e.share2Gold || !1, t.ifisGunGift = e.ifisGunGift || !1, t.airdropCount = e.airdropCount || 0, t.notEnoughGoldCount = e.notEnoughGoldCount || 0, t.shareTimeArr = e.shareTimeArr || [], t.model = e.model || "", t.signinIndex = e.signinIndex || 0, t.signinDay = e.signinDay || "", t.signinFirst = e.signinFirst || !1, t.gameTipHaveAry = e.gameTipHaveAry || [], t.blockData = e.blockData || [0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0], t.carShopBuyCount = e.carShopBuyCount || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t.gunBuyCount = e.gunBuyCount || 0, t.airGunLv = e.airGunLv || 1, t.goldAddition = e.goldAddition || 0, t
            },
            randombt: function(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e
            },
            formatTime: function(e) {
                var t = Math.floor(e / 3600),
                    a = Math.floor(e % 3600 / 60),
                    o = Math.floor(e % 3600 % 60),
                    c = null;
                return c = t < 10 ? "0" + t + ":" : t + ":", c += a < 10 ? "0" + a + ":" : a + ":", c += o < 10 ? "0" + o : o
            },
            _getDistance: function(e, t) {
                return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
            },
            showTip: function(e, t) {
                cc.sys.platform === cc.sys.WECHAT_GAME ? wx.showToast({
                    title: e,
                    icon: "none",
                    duration: t || 2e3
                }) : cc.log(e)
            },
            showModal: function(e, t, a, o, c) {
                cc.sys.platform === cc.sys.WECHAT_GAME ? wx.showModal({
                    title: e,
                    content: t,
                    confirmText: a,
                    cancelText: o,
                    success: function(e) {
                        e.confirm ? c() : e.cancel
                    }
                }) : (cc.log(t), c())
            },
            getlocalStorage: function(e, t) {
                if (cc.sys.platform === cc.sys.WECHAT_GAME) wx.getStorage({
                    key: e,
                    success: function(e) {
                        "function" == typeof t && t && t(e.data)
                    },
                    fail: function(e) {
                        "function" == typeof t && t && t(null)
                    }
                });
                else {
                    var a = cc.sys.localStorage.getItem(e);
                    "function" == typeof t && t && t(a)
                }
            },
            setlocalStorage: function(e, t) {
                cc.sys.platform === cc.sys.WECHAT_GAME ? wx.setStorage({
                    key: e,
                    data: t,
                    success: function(e) {},
                    fail: function(e) {}
                }) : cc.sys.localStorage.setItem(e, t)
            },
            getNowFormatDate: function() {
                var e = new Date,
                    t = e.getFullYear(),
                    a = e.getMonth() + 1,
                    o = e.getDate();
                return a >= 1 && a <= 9 && (a = "0" + a), o >= 0 && o <= 9 && (o = "0" + o), t + "-" + a + "-" + o
            },
            gett: function() {
                return (new Date).getTime()
            },
            variance: function(e) {
                for (var t, a = 0, o = 0; o < e.length; o++) a += e[o];
                t = a / e.length, a = 0;
                for (o = 0; o < e.length; o++) a += Math.abs(e[o] - t);
                return a / e.length
            },
            showVideoAD: function(e) {
                if (cc.Global._gvAdShowing) return;
                cc.Global._gvAdShowing = !0, cc.Global.videoCB = e;
                var t = function(a) {
                    cc.Global._gvAdShowing = !1, e && "function" == typeof e && e(!!a)
                };
                if ("function" == typeof window.GVAdBreak) {
                    try {
                        cc.audioEngine.pauseAll()
                    } catch (a) {}
                    window.GVAdBreak(function() {
                        try {
                            cc.audioEngine.resumeAll()
                        } catch (a) {}
                        t(!0)
                    })
                } else t(!0)
            },
            shareClick: function(e) {
                if (e && "function" == typeof e && (cc.Global.shareCB = e), window.h5api) window.h5api.share(), "function" == typeof e && e && e(!0);
                else if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                    cc.Global.shareUpTime = cc.Global.gett(), cc.Global.isShareTime = !0;
                    var t = mpsdk.Share.commonShare({
                        serial: 0,
                        title: "\u5e2e\u6211\u70b9\u4e00\u4e0b,\u6211\u80fd\u55e8\u4e00\u5929",
                        image: "/share.jpg",
                        scoreValue: 0
                    }, function(t) {
                        console.log("shareClick shareAppMessage success", t), wx.getSystemInfoSync().SDKVersion <= "2.3.0" && "function" == typeof e && e && e(!0)
                    }, function(t) {
                        console.log("shareClick shareAppMessage fail", t), wx.getSystemInfoSync().SDKVersion <= "2.3.0" && "function" == typeof e && e && e(!1), "function" == typeof e && e && e(!1), "shareAppMessage:fail cancel" == t.errMsg || "shareAppMessage:fail" == t.errMsg || t.errMsg.indexOf("jsapi has no permission") > -1 && console.log("\u5206\u4eab\u88ab\u7981\u7528!")
                    }, this);
                    wx.shareAppMessage(t)
                } else cc.Global.showVideoAD(e)
            },
            showInterstitialAd: function() {
                cc.sys.platform === cc.sys.WECHAT_GAME && wx.getSystemInfo({
                    success: function(e) {
                        var t = e.SDKVersion;
                        if (t = t.replace(/\./g, ""), console.log("version", t), parseInt(t) >= 260) {
                            var a = null;
                            wx.createInterstitialAd && (a = wx.createInterstitialAd({
                                adUnitId: "adunit-59f2b27672a0b1f4"
                            })), a && a.show().catch(function(e) {
                                console.error(e)
                            })
                        }
                    }
                })
            },
            showBannerAD: function(e) {
				console.info('555',e);
                /* console.log("showBannerAD", cc.Global.bannerAd);
                cc.sys.platform === cc.sys.WECHAT_GAME && wx.getSystemInfo({
                    success: function(e) {
                        var t = e.SDKVersion;
                        if (t = t.replace(/\./g, ""), console.log(t), parseInt(t) >= 204) {
                            cc.Global.bannerAd && cc.Global.bannerAd.destroy();
                            var a = ["adunit-20ae60c6f0ad7004", "adunit-b020cc22d2d6550c", "adunit-012c68fb1bea00c7"],
                                o = -1 !== wx.getSystemInfoSync().model.indexOf("iPhone X"),
                                c = !1,
                                i = (cc.winSize.height - 234) * wx.getSystemInfoSync().screenHeight / cc.winSize.height;
                            o && (i -= 40);
                            var l = wx.createBannerAd({
                                adUnitId: a[cc.Global.randombt(0, a.length - 1)],
                                style: {
                                    left: .055 * wx.getSystemInfoSync().screenWidth,
                                    top: i,
                                    width: .89 * wx.getSystemInfoSync().screenWidth
                                }
                            });
                            cc.Global.bannerAd = l, l.onResize(function(t) {
                                var a = l,
                                    n = wx.getSystemInfoSync().screenWidth;
                                t.height > 120 ? (n *= .88, c = !0, a.style.width = n, wx.getSystemInfoSync().screenWidth < 300 ? a.style.left = 0 : a.style.left = (wx.getSystemInfoSync().screenWidth - n) / 2) : c ? c = !1 : (a.style.width = n, wx.getSystemInfoSync().screenWidth < 300 ? a.style.left = 0 : a.style.left = (wx.getSystemInfoSync().screenWidth - n) / 2), console.log("dayinde top   ", i), o ? t.height > 110 ? a.style.top = e.screenHeight - t.height - 40 : a.style.top = i - 40 : a.style.top = i
                            }), l.onError(function(e) {
                                if (e) try {
                                    console.log("banner error = ", e.errCode, e.errMsg), console.log("\u65e0\u5e7f\u544a\u5219\u9500\u6bc1\u521a\u521a\u521b\u5efa\u7684\u5e7f\u544a,\u53ef\u89e6\u53d1\u5176\u4ed6\u903b\u8f91\uff0c\u5982\u63a8\u8350\u6e38\u620f"), cc.Global.IsNoBanner = !0, cc.Global.app.showSuggestList()
                                } catch (e) {
                                    console.error("banner onError  = ", e)
                                }
                            }), l.show().then(function() {
                                cc.Global.IsNoBanner && (cc.Global.IsNoBanner = !1)
                            })
                        }
                    }
                }) */
            },
            hideBannerOrSuggest: function() {
				console.info('444');
                //console.log("hideBannerOrSuggest"), cc.sys.platform === cc.sys.WECHAT_GAME && (cc.Global.bannerAd && cc.Global.bannerAd.hide(), cc.Global.suggestNode.active && (cc.Global.suggestNode.active = !1))
            },
            loadAvatarImage: function(e, t) {
                if (cc.sys.platform === cc.sys.WECHAT_GAME) try {
                    var a = wx.createImage();
                    a.onload = function() {
                        try {
                            var e = new cc.Texture2D;
                            e.initWithElement(a), e.handleLoadedTexture(), t.spriteFrame = new cc.SpriteFrame(e)
                        } catch (e) {
                            cc.log(e)
                        }
                    }, a.src = e
                } catch (e) {
                    cc.log(e)
                } else cc.loader.load({
                    url: e,
                    type: "jpg"
                }, function(e, a) {
                    t.spriteFrame = new cc.SpriteFrame(a)
                })
            },
            moneyToChange: function(e) {
                var t = ["k", "m", "d", "t", "aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh", "ii", "jj", "kk", "ll", "mm", "nn", "oo", "pp", "qq", "rr", "ss", "tt", "uu", "vv", "ww", "xx", "yy", "zz"],
                    a = (e = new Number(e)) + ""; - 1 != a.indexOf(".") && -1 == a.indexOf("e+") && (a = a.split(".")[0], e = new Number(a));
                var o = a.length;
                if (-1 != a.indexOf("e+")) {
                    var c = a.split("e+");
                    o = 1 * c[1] + 1;
                    var i = Math.pow(10, c[1] % 3);
                    if (c[0] = c[0] * i + "", c[0].length > 5) {
                        var l = 3;
                        10 === i ? l = 4 : 100 === i && (l = 4), c[0] = c[0].substr(0, l)
                    }
                    var n = Math.floor((o - 1) / 3) - 1;
                    return n = n > t.length - 1 ? t.length - 1 : n, c[0] + t[n]
                }
                if (o < 4) return e.valueOf();
                var s = Math.floor((o - 1) / 3),
                    r = Math.floor(e.valueOf() / Math.pow(10, 3 * s)),
                    d = new Number(e.valueOf() - r * Math.pow(10, 3 * s));
                return r + "." + Math.floor(d.valueOf() / (100 * Math.pow(10, 3 * (s - 1)))) + t[s - 1 > t.length - 1 ? t.length - 1 : s - 1]
            },
            getObstacleData: function(e) {
                for (var t = 0; t < cc.Global.obstacleConfig.length; t++)
                    if (cc.Global.obstacleConfig[t].uid == e) return cc.Global.obstacleConfig[t];
                return null
            },
            showGetGoldEff: function(e, t, a) {
                var o = cc.instantiate(cc.Global.goldEffPrefab);
                o.x = e ? e.x : 0, o.y = e ? e.y : 110, t.addChild(o), cc.Global.SoundModel.playEffect("getGoldorGem"), a && "function" == typeof a && cc.director.getScheduler().schedule(a, t, 0, 0, 2, !1)
            },
            showGetGemEff: function(e, t, a) {
                var o = cc.instantiate(cc.Global.gemEffPrefab);
                o.x = e ? e.x : 0, o.y = e ? e.y : 110, t.addChild(o), cc.Global.SoundModel.playEffect("getGem"), a && "function" == typeof a && cc.director.getScheduler().schedule(a, t, 0, 0, 2, !1)
            },
            _getRadian: function(e) {
                return this._radian = Math.PI / 180 * this._getAngle(e), this._radian
            },
            _getAngle: function(e) {
                var t = cc.v2(0, -343);
                return this._angle = Math.atan2(e.y - t.y, e.x - t.x) * (180 / Math.PI), this._angle
            },
            _showNode: function(e, t) {
                !cc.Global.IsNoBanner && cc.Global.bannerAd ? cc.Global.bannerAd.show() : cc.Global.showBannerAD(), e.active = !0, e.getChildByName("frame").setScale(0), e.getChildByName("frame").stopAllActions(), e.getChildByName("frame").runAction(cc.sequence(cc.scaleTo(.5, 1).easing(cc.easeBackOut()), cc.callFunc(function() {
                    t && "function" == typeof t && t()
                })))
            },
            _hideNode: function(e, t) {
                e.getNumberOfRunningActions() > 0 || (cc.Global.hideBannerOrSuggest(), e.getChildByName("frame").stopAllActions(), e.getChildByName("frame").runAction(cc.sequence(cc.scaleTo(.5, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
                    e.active = !1, t && "function" == typeof t && t()
                }))))
            },
            canPlayAdInFTNN: function(e) {
                e && "function" == typeof e && e(!0)
            }
        }, cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {}
        }), cc._RF.pop()
    }, {
        SoundManager: "SoundManager"
    }],
    HelloWorld: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "280c3rsZJJKnZ9RqbALVwtK", "HelloWorld"), cc.Class({
            extends: cc.Component,
            properties: {
                goldEffPrefab: cc.Prefab,
                gemEffPrefab: cc.Prefab,
                _sharePlanAry: null,
                _shareCurrentNum: 0
            },
            onLoad: function() {
                cc.Global.goldEffPrefab = this.goldEffPrefab, cc.Global.gemEffPrefab = this.gemEffPrefab, cc.Global.app = this, cc.Global.rankLayer = this.node.getChildByName("rankLayer").getComponent("rankLayer"), cc.Global.settingLayer = this.node.getChildByName("settingLayer").getComponent("settingLayer"), cc.Global.homeLayer = this.node.getChildByName("homeLayer").getComponent("home"), cc.Global.gameLogic = this.node.getChildByName("gameLayer").getComponent("gameLogic"), cc.Global.gameLayer = this.node.getChildByName("gameLayer").getComponent("gameLayer"), cc.Global.notEnoughGoldLayer = this.node.getChildByName("notEnoughGoldLayer").getComponent("notEnoughGoldLayer"), cc.Global.unLockNewCarLayer = this.node.getChildByName("unLockNewCarLayer").getComponent("unLockNewCarLayer"), cc.Global.gunShopLayer = this.node.getChildByName("gunShopLayer").getComponent("gunShopLayer"), cc.Global.offlineRevenueLayer = this.node.getChildByName("offlineRevenueLayer").getComponent("offlineRevenueLayer"), cc.Global.buffLayer = this.node.getChildByName("buffLayer").getComponent("buffLayer"), cc.Global.gameOverLayer = this.node.getChildByName("gameOverLayer").getComponent("gameOverLayer"), cc.Global.airdropLayer = this.node.getChildByName("airdropLayer").getComponent("airdropLayer"), cc.Global.libaoLayer = this.node.getChildByName("libaoLayer").getComponent("libaoLayer"), cc.Global.levelLayer = this.node.getChildByName("levelLayer").getComponent("levelLayer"), cc.Global.guideLayer = this.node.getChildByName("guideLayer").getComponent("guideLayer"), cc.Global.gunGiftLayer = this.node.getChildByName("gunGiftLayer").getComponent("gunGiftLayer"), cc.Global.revivalNode = this.node.getChildByName("revivalNode").getComponent("revivalNode"), cc.Global.suggestNode = this.node.getChildByName("suggestNode"), cc.Global.shootOverLayer = this.node.getChildByName("shootOverLayer").getComponent("shootOverLayer"), cc.Global.signInLayer = this.node.getChildByName("signInLayer").getComponent("signInLayer"), cc.Global.DaijinPage = this.node.getChildByName("DaijinLayer").getComponent("DaiJinPage"), cc.Global.hotLayer = this.node.getChildByName("hotLayer").getComponent("hotLayer"), cc.Global.videoTipLayer = this.node.getChildByName("videoTipLayer").getComponent("videoTipLayer"), cc.sys.platform == cc.sys.WECHAT_GAME && (cc.Global.mpsdk = mpsdk, mpsdk.init(5540, "qsxly", wx.getLaunchOptionsSync()).then(function(e) {
                    console.log("mpsdk.init \u83b7\u5f97openid", e), mpsdk.Env.showLog = !0
                }))
            },
            start: function() {
                var e = this;
                cc.Global.rankLayer.node.active = !1, cc.Global.settingLayer.node.active = !1, cc.Global.gameLayer.node.active = !1, cc.Global.homeLayer.node.active = !0, cc.Global.notEnoughGoldLayer.node.active = !1, cc.Global.gunShopLayer.node.active = !1, cc.Global.offlineRevenueLayer.node.active = !1, cc.Global.buffLayer.node.active = !1, cc.Global.gameOverLayer.node.active = !1, cc.Global.airdropLayer.node.active = !1, cc.Global.libaoLayer.node.active = !1, cc.Global.unLockNewCarLayer.node.active = !1, cc.Global.levelLayer.node.active = !1, cc.Global.guideLayer.node.active = !1, cc.Global.gunGiftLayer.node.active = !1, cc.Global.revivalNode.node.active = !1, cc.Global.suggestNode.active = !1, cc.Global.shootOverLayer.node.active = !1, cc.Global.signInLayer.node.active = !1, cc.Global.DaijinPage.node.active = !1, cc.Global.videoTipLayer.node.active = !1;
                var t = this;
                var bootUser = function() {
                    t.getUserContext(function() {
                        cc.Global.homeLayer.updateGoldLabel(), cc.Global.homeLayer.createCar(), cc.Global.isGuide = 0 === cc.Global.userData.maxLevel, cc.sys.platform == cc.sys.WECHAT_GAME && (cc.Global.isStrongShare = mpsdk.Hack.isStrongFission() && cc.Global.userData.maxLevel > 3, mpsdk.Report.reportLogin(cc.Global.userData.goldCoins, cc.Global.userData.maxLevel)), cc.Global.isGuide && (cc.Global.gameLayer.enterGame(cc.Global.gunConfig[22]), cc.Global.guideLayer.node.active = !0, cc.Global.guideLayer.updateStep(6), cc.Global.app.reportEvent(1, 1)), t.getCCKFlag()
                    }), cc.Global.getlocalStorage("isSoundEffect", function(e) {
                        "true" == e ? cc.Global.settingLayer.openSoundButtonClick() : e && "false" == e ? cc.Global.settingLayer.closeSoundButtonClick() : cc.Global.settingLayer.openSoundButtonClick()
                    }), cc.Global.getlocalStorage("isVibrate", function(e) {
                        "true" == e ? cc.Global.settingLayer.openVibrateClick() : e && "false" == e ? cc.Global.settingLayer.closeVibrateClick() : cc.Global.settingLayer.openVibrateClick()
                    })
                };
                window.ArcadeSave && window.ArcadeSave.ready ? window.ArcadeSave.ready.then(bootUser).catch(bootUser) : bootUser();
                var a = cc.find("Canvas").getChildByName("sidePullButton");
                a && (a.active = !1);
                var o = cc.find("Canvas").getChildByName("sidePullNode");
                o && (o.active = !1);
                if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                    wx.setKeepScreenOn({
                        keepScreenOn: !0
                    }), wx.onShow(function(t) {
                        console.log("onShow:", t), cc.Global.DaijinPage.checkShow(), cc.game.resume(), cc.Global.isShareTime && (cc.Global.isShareTime = !1, e.randShareSuc())
                    }), wx.onHide(function(e) {
                        console.log("onHide:", e), cc.game.pause(), localStorage.setItem("leaveGameTime", cc.Global.gett()), cc.sys.platform == cc.sys.WECHAT_GAME && wx.postMessage({
                            messageType: 3,
                            MAIN_MENU_NUM: "score",
                            score: cc.Global.userData.totalGoldCoins
                        })
                    }), wx.showShareMenu({}), wx.onShareAppMessage(function() {
                        return mpsdk.Share.commonShare({
                            serial: 8
                        }, function(e) {}, function(e) {}, this)
                    });
                    var c = wx.getUpdateManager();
                    c.onCheckForUpdate(function(e) {
                        console.log(e.hasUpdate)
                    }), c.onUpdateReady(function() {
                        c.applyUpdate()
                    }), c.onUpdateFailed(function() {})
                }
            },
            showBannerOrSuggest: function() {},
            randShareSuc: function() {
                cc.Global.userData.shareLimitCount++, cc.Global.app.reportEvent(15, 1);
                var e = cc.Global.gett() - cc.Global.shareUpTime;
                cc.Global.userData.shareTimeArr.push(e), cc.Global.userData.shareTimeArr.length > 10 && cc.Global.userData.shareTimeArr.shift(), cc.Global.app.updateMyContext(), (cc.Global.userData.shareLimitCount + 1) % 5 == 0 || e < 2e3 ? cc.Global.isStrongShare ? (cc.Global.shareCB(!1), cc.Global.showModal("\u5206\u4eab\u5931\u8d25", "\u597d\u4e1c\u897f\u8981\u548c\u670b\u53cb\u4e00\u8d77\u5206\u4eab", "\u786e\u5b9a", "\u77e5\u9053\u4e86", function() {
                    cc.Global.shareClick()
                })) : (cc.Global.shareCB(!1), cc.Global.showTip("Chia sẻ thất bại, hãy thử lại.")) : cc.Global.shareCB(!0)
            },
            update: function(e) {},
            getUserContext: function(e) {
                var t = this;
                cc.Global.getlocalStorage("userContext", function(a) {
                    a && "" !== a ? (cc.Global.userData = cc.Global.initUserData(JSON.parse(a)), cc.sys.platform == cc.sys.WECHAT_GAME && wx.postMessage({
                        messageType: 3,
                        MAIN_MENU_NUM: "score",
                        score: cc.Global.userData.totalGoldCoins
                    })) : (cc.Global.userData = cc.Global.initUserData({}), t.isFirstInGame = !0, cc.sys.platform == cc.sys.WECHAT_GAME && wx.postMessage({
                        messageType: 3,
                        MAIN_MENU_NUM: "score",
                        score: 2e3
                    }));
                    var o = cc.Global.getNowFormatDate();
                    cc.Global.userData.resetDay != o && (cc.Global.userData.lookVideoADCount = 5, cc.Global.userData.shareCount = 5, cc.Global.userData.shareLimitCount = 0, cc.Global.userData.resetDay = o, cc.Global.userData.video12Gold = !0, cc.Global.userData.share2Gold = !0, cc.Global.userData.share4Gold = !0, cc.Global.userData.airdropCount = 0, cc.Global.userData.notEnoughGoldCount = 0, cc.Global.app.updateMyContext()), cc.Global.userData.addGoldResetDay != o && (cc.Global.userData.addGoldResetCount = 1, cc.Global.userData.addGoldResetDay = o, cc.Global.app.updateMyContext()), cc.Global.userData.signinDay != o && (cc.Global.isSignIn = !0), "function" == typeof e && e && e()
                })
            },
            updateMyContext: function(e) {
                e = e || cc.Global.userData, cc.Global.setlocalStorage("userContext", JSON.stringify(e));
                try {
                    window.ArcadeSave && "function" == typeof window.ArcadeSave.scheduleSave && window.ArcadeSave.scheduleSave("updateMyContext")
                } catch (t) {}
            },
            getCCKFlag: function() {
                var e = this;
                cc.sys.platform == cc.sys.WECHAT_GAME ? mpsdk.Hack.getOpenLevel(cc.Global.codeVersion, 5540).then(function(t) {
                    if (console.log("mpsdk.Hack.getOpenLevel:", t), t.codeVer == cc.Global.codeVersion ? cc.Global.shareEnable = "1" == t.status : (cc.Global.shareEnable = !0, t.enableCheating), cc.Global.planB = "1" == t.planB, cc.Global.planC = "1" == t.planC, cc.Global.allVideo = "1" == t.allVideo, t.intervalLvAD && (cc.Global.intervalLvAD = t.intervalLvAD), t.lightpoint ? cc.Global.lightpoint = parseInt(t.lightpoint) : cc.Global.lightpoint = 40, t.minLvAD && (cc.Global.minLvAD = t.minLvAD), t.planD && (cc.Global.planD = !1), t.sharepoint) {
                        var a = [],
                            o = [];
                        t.sharepoint.split(",").forEach(function(e, t) {
                            var c = e.split(":");
                            a.push(parseInt(c[1])), o.push(c[0].split("|"))
                        });
                        var c = 0,
                            i = cc.Global.randombt(0, 99),
                            l = 0;
                        if (a.length > 1)
                            for (var n = 0; n < a.length; n++)
                                if (i < (c += a[n])) {
                                    l = n;
                                    break
                                } var s = [];
                        if (o[l])
                            for (var r = 0; r < o[l].length; r++)
                                for (var d = o[l][r].substr(0, 2), h = parseInt(o[l][r].substr(2)), g = 0; g < h; g++) s.push(parseInt(d));
                        e._sharePlanAry = s, console.log("\u5206\u4eab\u7b56\u7565", e._sharePlanAry)
                    }
                    cc.Global.homeLayer.showHome()
                }) : cc.Global.homeLayer.showHome()
            },
            getMySuggestList: function(e) {
                "function" == typeof e && e && e()
            },
            showSuggestList: function() {},
            showSidePullNode: function() {},
            hideSidePullNode: function() {
                var e = cc.find("Canvas").getChildByName("sidePullButton"),
                    t = cc.find("Canvas").getChildByName("sidePullNode");
                t && (t.active = !1), e && (e.active = !1)
            },
            sidePullIconClick: function(e, t) {
                cc.sys.platform == cc.sys.WECHAT_GAME && mpsdk.Ad.click(cc.Global.appIdList[t - 1])
            },
            crawerIconClick: function(e, t) {
                console.log("crawerIconClick:" + t), cc.sys.platform == cc.sys.WECHAT_GAME && (console.log("crawerIconClick data:", cc.Global.appIdList[t - 1]), cc.Global.gameTipNowAppId = cc.Global.appIdList[t - 1].appid, cc.Global.gameLeftTime = cc.Global.gett(), console.log("crawerIconClick cc.Global.gameTipNowAppId:", cc.Global.gameTipNowAppId), mpsdk.Ad.clickSync(cc.Global.appIdList[t - 1], 1, function(e, t) {
                    console.log("\u597d\u73a9\u8fd4\u56de\u7684\u8bd5\u73a9\u56de\u8c03\u7ed3\u679c\uff1a", e, t)
                }))
            },
            reportEvent: function(e, t, a) {
                cc.sys.platform == cc.sys.WECHAT_GAME && mpsdk.Report.reportEvent(e, t, a)
            },
            videoOrShare: function(e) {
                if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                    if (console.log("\u5206\u4eab\u6b21\u6570", this._shareCurrentNum), !cc.GameData.shareEnable) return console.log("\u76f4\u63a5\u7ed9\u4e0e\u5956\u52b1"), void e(!0, !0);
                    if (console.log("\u88c2\u53d8" + mpsdk.Hack.isStrongFission()), cc.GameData.shareCB = e, !mpsdk.Hack.isStrongFission()) return void cc.Global.showVideoAD(e);
                    var t = !0;
                    this._sharePlanAry && ((this._shareCurrentNum < 0 || this._shareCurrentNum >= this._sharePlanAry.length) && (this._shareCurrentNum = 0), this._sharePlanAry[this._shareCurrentNum] && (t = 10 === this._sharePlanAry[this._shareCurrentNum])), t ? cc.Global.shareClick() : cc.Global.showVideoAD()
                } else cc.Global.showVideoAD(e)
            }
        }), cc._RF.pop()
    }, {}],
    SoundManager: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "3c703d5MTBL9rSi+NArgFWV", "SoundManager"), cc.Class({
            extends: cc.Component,
            properties: {
                IsPlayEffect: !0,
                IsPlayMusic: !0,
                soundList: [],
                mBgMusic: -1,
                playStartTime: null,
                playTime: null,
                soundId: null
            },
            playEffect: function(e) {
                var t = this,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                this.IsPlayEffect && (this.soundList[e] ? cc.audioEngine.play(this.soundList[e], !1, a) : cc.loader.load(cc.url.raw("resources/audio/" + e + ".mp3"), function(o, c) {
                    o && console.log("playEffect load Err:", o), t.soundList[e] = c, cc.audioEngine.play(c, !1, a)
                }))
            },
            playGunEffect: function(e) {
                var t = this;
                cc.Global.gett() - this.playStartTime < 1e3 * this.playTime || this.IsPlayEffect && (this.soundList[e] ? this.soundId = cc.audioEngine.play(this.soundList[e], !1, 1) : cc.loader.load(cc.url.raw("resources/audio/" + e + ".mp3"), function(a, o) {
                    a && console.log("playEffect load Err:", a), t.soundList[e] = o, t.soundId = cc.audioEngine.play(o, !1, 1)
                }), this.playStartTime = cc.Global.gett(), this.playTime = cc.audioEngine.getDuration(this.soundId))
            },
            stopGunEffect: function() {
                cc.audioEngine.stop(this.soundId), cc.log("id:", this.soundId)
            },
            playBgm: function(e) {
                var t = this,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1; - 1 != !this.mBgMusic && cc.audioEngine.stop(this.mBgMusic), this.IsPlayEffect && (this.soundList[e] ? (cc.audioEngine.stopAll(), this.mBgMusic = cc.audioEngine.play(this.soundList[e], !0, a)) : cc.loader.load(cc.url.raw("resources/audio/" + e + ".mp3"), function(o, c) {
                    o && console.log("playBgm load Err:", o), t.soundList[e] = c, t.mBgMusic = cc.audioEngine.play(c, !0, a)
                }))
            },
            closeMusic: function() {
                this.stopAll(), this.IsPlayMusic = !1, this.mBgMusic = null
            },
            closeEffect: function() {
                this.IsPlayEffect = !1, this.stopAll(), this.mBgMusic = null
            },
            openMusic: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                this.IsPlayMusic = !0, this.playBgm(e, t)
            },
            openEffect: function() {
                this.IsPlayEffect = !0
            },
            stopAll: function() {
                cc.audioEngine.stopAll()
            },
            pauseMusic: function() {
                this.mBgMusic && this.IsPlayMusic && cc.audioEngine.pause(this.mBgMusic)
            },
            resumeMusic: function() {
                this.mBgMusic && this.IsPlayMusic && cc.audioEngine.resume(this.mBgMusic)
            }
        }), cc._RF.pop()
    }, {}],
    airdropLayer: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "96720AjMDdK64WODsVNbL2/", "airdropLayer"), cc.Class({
            extends: cc.Component,
            properties: {
                _rewardGold: 0
            },
            start: function() {},
            showAirdropLayer: function() {
                var e = this;
                cc.Global.shareEnable && (this.node.active = !0, this.node.getChildByName("frame").getChildByName("freeget").getChildByName("icon").active = !cc.Global.allVideo, this.node.getChildByName("frame").getChildByName("freeget").getChildByName("videoIcon").active = cc.Global.allVideo, this.node.getChildByName("frame").setScale(0), this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("frame").runAction(cc.scaleTo(.5, 1).easing(cc.easeBackOut())), cc.Global.app.reportEvent(3, 2), cc.Global.app.showBannerOrSuggest(), cc.Global.canPlayAdInFTNN(function(t) {
                    t ? (e.node.getChildByName("frame").getChildByName("freeget").getChildByName("icon").active = !cc.Global.allVideo, e.node.getChildByName("frame").getChildByName("freeget").getChildByName("videoIcon").active = cc.Global.allVideo) : (e.node.getChildByName("frame").getChildByName("freeget").getChildByName("icon").active = !1, e.node.getChildByName("frame").getChildByName("freeget").getChildByName("videoIcon").active = !1)
                }))
            },
            hideAirdropLayer: function() {
                var e = this;
                this.node.getChildByName("frame").getNumberOfRunningActions() > 0 || (this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("frame").runAction(cc.sequence(cc.scaleTo(.5, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
                    e.node.active = !1
                }))), cc.Global.hideBannerOrSuggest())
            },
            closeClick: function() {
                cc.Global.SoundModel.playEffect("click"), this.hideAirdropLayer(), cc.Global.app.reportEvent(3, 3)
            },
            getButtonClick: function() {
                cc.Global.SoundModel.playEffect("click");
                var e = this;
                cc.Global.app.videoOrShare(function(t) {
                    t && (cc.Global.homeLayer.airdropIconStarCD(), cc.Global.homeLayer.showAirdropNode(), e.hideAirdropLayer(), cc.Global.homeLayer._isShowAir = !0, cc.Global.userData.airdropCount++, cc.Global.app.updateMyContext())
                })
            }
        }), cc._RF.pop()
    }, {}],
    baseGunNode: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "adad1YLLhhFoJyDILwZt95t", "baseGunNode"), cc.Class({
            extends: cc.Component,
            properties: {
                _profitLabelBaseY: 0,
                _gunType: -1,
                _profit: 0,
                _price: 0,
                _bIsUpperRightCorner: !1,
                _addProfitTime: 0,
                _gunScale: 1.2
            },
            start: function() {
                this._profitLabelBaseY = this.node.getChildByName("profitLabel").y, this.node.getChildByName("profitLabel").opacity = 0, this._addProfitTime = 5 * Math.random(), this._gunScale = 1.2
            },
            update: function(e) {
                -1 !== this._gunType && (this._addProfitTime += e, this._addProfitTime >= cc.Global.addProfitMaxTime && (this.addProfit(), this._addProfitTime = 0))
            },
            initBaseGunNode: function(e, t, a) {
                var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                this._bIsUpperRightCorner = o, this.node.getChildByName("swichEffD").active = !1, this._gunType = e;
                var c = cc.Global.userData.carShopBuyCount[e],
                    i = 1;
                if (i = c > 3 ? Math.pow(1.175, c) : Math.pow(1.07, c), this._price = a || cc.Global.gameConfig.carPrice_gold[e] * i, this.node.stopAllActions(), -1 !== e) {
                    this.node.getChildByName("gunIcon").active = !0, this.node.getChildByName("bnt_11").active = !0, this.node.getChildByName("gunIcon").getComponent(cc.Sprite).spriteFrame = t, this.node.getChildByName("bnt_11").getChildByName("Label").getComponent(cc.Label).string = e + 1, this._addProfitTime = 0;
                    var l = e + 1;
                    this._profit = parseInt(25 * Math.pow(2, l - 1) + Math.pow(l, 2.18 + .15 * l) - 1), this.node.getChildByName("profitLabel").active = !0
                } else this.node.getChildByName("gunIcon").active = !1, this.node.getChildByName("bnt_11").active = !1, this.node.getChildByName("profitLabel").active = !1;
                this.node.getChildByName("levelUpEffNode").active = !1, this.setLevelType(o)
            },
            addProfit: function() {
                var e = this.node.getChildByName("profitLabel"),
                    t = cc.Global.buffLayer.getIsOpenBuff(),
                    a = this.getProfit();
                cc.Global.userData.goldCoins += a, cc.Global.userData.totalGoldCoins += a, e.getComponent(cc.Label).string = "+" + cc.Global.moneyToChange(a), cc.Global.app.updateMyContext(), cc.Global.homeLayer.updateGoldLabel(), e.y = this._profitLabelBaseY, e.opacity = 0, e.stopAllActions(), e.runAction(cc.sequence(cc.fadeIn(.5), cc.delayTime(.1), cc.spawn(cc.moveTo(t ? .1 : .5, 0, this._profitLabelBaseY + 50), cc.fadeOut(t ? .1 : .5))))
            },
            getProfit: function() {
                return this._profit * (0 === cc.Global.userData.goldAddition ? 1 : cc.Global.userData.goldAddition)
            },
            getEarningsPerSecond: function() {
                return this._profit * (this._bIsUpperRightCorner ? 2 : 1) / 5
            },
            getType: function() {
                return this._gunType
            },
            selected: function() {
                this.node.getChildByName("gunIcon").opacity = 127
            },
            uncheck: function() {
                this.node.getChildByName("gunIcon").opacity = 255
            },
            similarEff: function() {
                this._bIsUpperRightCorner || (this.node.getChildByName("gunIcon").scale = this._gunScale, this.node.getChildByName("gunIcon").stopAllActions(), this.node.getChildByName("gunIcon").runAction(cc.sequence(cc.scaleTo(.5, 1.1), cc.scaleTo(.5, 1)).repeatForever()))
            },
            cancelsimilarEff: function() {
                this._bIsUpperRightCorner || (this.node.getChildByName("gunIcon").scale = this._gunScale, this.node.getChildByName("gunIcon").stopAllActions())
            },
            levelUp: function(e) {
                cc.log("levelUp");
                this.node.getChildByName("gunIcon").active = !1, this.initBaseGunNode(this._gunType + 1, e, !1, this._bIsUpperRightCorner), this.node.getChildByName("levelUpEffNode").active = !1, this.node.getChildByName("levelUpEffNode").active = !0;
                var t = this.node.getChildByName("levelUpEffNode");
                t.active = !0, t.opacity = 255;
                var a = t.getComponent(dragonBones.ArmatureDisplay);
                a && a.playAnimation("play", 1)
            },
            setLevelType: function(e) {
                if (e) {
                    this.node.getChildByName("bnt_11").active = !1, this.node.getChildByName("profitLabel").scale = 2, this.node.getChildByName("gunIcon").scale = .5, this.node.getChildByName("gunIcon").rotation = -30, this.node.getChildByName("swichEffD").active = !0;
                    var t = this.node.getChildByName("swichEffD").getComponent(dragonBones.ArmatureDisplay);
                    t && t.playAnimation("play", 1), this.node.getChildByName("gunIcon").runAction(cc.sequence(cc.spawn(cc.scaleTo(.5, 1).easing(cc.easeBackOut()), cc.rotateTo(.1, 0)), cc.delayTime(.1), cc.callFunc(function(e) {})))
                } else this.node.getChildByName("gunIcon").scale = this._gunScale, this.node.getChildByName("profitLabel").scale = this._gunScale
            }
        }), cc._RF.pop()
    }, {}],
    buffLayer: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "fe7e3mRwBlII64GaFa7JBCB", "buffLayer"), cc.Class({
            extends: cc.Component,
            properties: {
                _isOpenBuff: !1,
                _buffType: 0,
                _buffTime: null,
                _timeId: null
            },
            start: function() {},
            showBuffLayer: function() {
                var e = this;
                this.node.active = !0, this.node.getChildByName("frame").getChildByName("zi_4").getChildByName("icon").active = !1, this.node.getChildByName("frame").getChildByName("zi_4").getChildByName("videoIcon").active = !0, this.node.getChildByName("frame").setScale(0), this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("frame").runAction(cc.scaleTo(.5, 1).easing(cc.easeBackOut())), cc.Global.app.showBannerOrSuggest(), this.getIsOpenBuff() ? (this._buffTime = localStorage.getItem("buffEndTime") - cc.Global.gett(), this.schedule(this.doCountdownTime, 1), this.node.getChildByName("frame").getChildByName("descLabelLabel").getComponent(cc.Label).string = "Tăng tốc " + cc.Global.formatTime(Math.floor(this._buffTime / 1e3))) : this.node.getChildByName("frame").getChildByName("descLabelLabel").getComponent(cc.Label).string = "5 lần tăng tốc thu nhập trong 10 phút", cc.Global.canPlayAdInFTNN(function(t) {
                    t ? (e.node.getChildByName("frame").getChildByName("zi_4").getChildByName("icon").active = !cc.Global.allVideo, e.node.getChildByName("frame").getChildByName("zi_4").getChildByName("videoIcon").active = cc.Global.allVideo) : (e.node.getChildByName("frame").getChildByName("zi_4").getChildByName("icon").active = !1, e.node.getChildByName("frame").getChildByName("zi_4").getChildByName("videoIcon").active = !1)
                })
            },
            doCountdownTime: function() {
                this._buffTime -= 1e3;
                var e = cc.Global.formatTime(Math.floor(this._buffTime / 1e3));
                this.node.getChildByName("frame").getChildByName("descLabelLabel").getComponent(cc.Label).string = "Tăng tốc " + e
            },
            hideBuffLayer: function(e) {
                var t = this;
                this.node.getChildByName("frame").getNumberOfRunningActions() > 0 || (cc.Global.hideBannerOrSuggest(), this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("frame").runAction(cc.sequence(cc.scaleTo(.5, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
                    t.node.active = !1, e && "function" == typeof e && e()
                }))))
            },
            closeClick: function() {
                cc.Global.SoundModel.playEffect("click"), this.hideBuffLayer()
            },
            getIsOpenBuff: function() {
                return this._isOpenBuff
            },
            getBuffType: function() {
                return this._buffType
            },
            openBuff: function(e) {
                if (this._isOpenBuff) {
                    var t = 1 * localStorage.getItem("buffEndTime") + 6e5;
                    localStorage.setItem("buffEndTime", t), cc.Global.timeOutId && clearTimeout(cc.Global.timeOutId)
                } else localStorage.setItem("buffEndTime", cc.Global.gett() + 6e5), localStorage.setItem("isBuff", e);
                var a = localStorage.getItem("buffEndTime") - cc.Global.gett();
                cc.log("endTime", localStorage.getItem("buffEndTime"), cc.Global.gett()), cc.Global.homeLayer.node.getChildByName("mainScene").getChildByName("14_im_an").getChildByName("fireParticle").active = !0, cc.Global.homeLayer.node.getChildByName("mainScene").getChildByName("goldNode").getChildByName("goldParticle").active = !0, this._isOpenBuff = !0, cc.Global.addProfitMaxTime = 1;
                var o = this;
                cc.Global.timeOutId = setTimeout(function() {
                    o._isOpenBuff = !1, cc.Global.addProfitMaxTime = 5, cc.Global.homeLayer.node.getChildByName("mainScene").getChildByName("14_im_an").getChildByName("fireParticle").active = !1, cc.Global.homeLayer.node.getChildByName("mainScene").getChildByName("goldNode").getChildByName("goldParticle").active = !1
                }, a), this.hideBuffLayer()
            },
            fiveMinutesClick: function() {
                cc.Global.SoundModel.playEffect("click");
                var e = this;
                cc.Global.app.videoOrShare(function(t) {
                    t && e.openBuff(!0)
                })
            }
        }), cc._RF.pop()
    }, {}],
    concentric: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "56412YcmUVEJ5chFszPE9OJ", "concentric"), cc.Class({
            extends: cc.Component,
            properties: {
                _diamondCount: 0,
                _score: 0
            },
            start: function() {
                this._diamondCount = 0
            },
            onCollisionEnter: function(e, t) {
                if (99 === e.tag && e.node.parent.opacity > 0) {
                    var a = e.node.parent._uid;
                    cc.Global.gameLogic._nowObstacleIndex = a
                } else if (101 === e.tag && e.node.parent.opacity > 0) {
                    a = e.node.parent._uid;
                    cc.Global.gameLogic._nowObstacleIndex = a
                }
            },
            onCollisionStay: function(e, t) {},
            onCollisionExit: function(e, t) {
                99 !== e.tag && 101 !== e.tag || (cc.Global.gameLogic._nowObstacleIndex = -1)
            }
        }), cc._RF.pop()
    }, {}],
    gameLayer: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "831f63zcxFASIQLNTzOyx0E", "gameLayer"), cc.Class({
            extends: cc.Component,
            properties: {
                _gameTime: 0,
                _gameIng: !1,
                _revivalCount: 0,
                _isShootRange: !1,
                _shootCombo: 0,
                _shootComboTime: 0,
                _shootComboTimeMax: 0,
                _gunData: null
            },
            onLoad: function() {},
            start: function() {
                cc.winSize.width, cc.winSize.height
            },
            update: function(e) {
                !this._gameIng || cc.Global.settingLayer.node.activeInHierarchy || cc.Global.revivalNode.activeInHierarchy || (this._gameTime -= e, this._gameTime <= 0 && (this._gameTime = 0, this._gameIng = !1, this._revivalCount < 2 && !this._isShootRange ? (cc.Global.revivalNode.showRevivaNode(), this._revivalCount++) : this._isShootRange ? this._isShootRange && (cc.Global.shootOverLayer.showShootOverLayer(cc.Global.gameLogic._shootScore >= cc.Global.gameLogic._targetScore), cc.Global.gameLogic.node.getChildByName("obstacle").stopAllActions()) : cc.Global.gameOverLayer.showGameOverLayer(2)), this._gameTime <= 6 && !cc.Global.isGuide && (this.node.getChildByName("countdownLabel").active = !0, this.node.getChildByName("countdownLabel").getComponent(cc.Label).string = parseInt(this._gameTime)), this.node.getChildByName("TimeLabel").getComponent(cc.Label).string = "00:" + (parseInt(this._gameTime) < 10 ? "0" + parseInt(this._gameTime) : parseInt(this._gameTime)))
            },
            enterGame: function(e, t) {
                this._gunData = e, this._isShootRange = t || !1, cc.Global.isGuide ? (cc.Global.guideLayer.node.active = !0, cc.Global.guideLayer.updateStep(6), this.node.getChildByName("08_bnt_sz").getComponent(cc.Button).interactable = !1) : this.node.getChildByName("08_bnt_sz").getComponent(cc.Button).interactable = !0, window.h5api && (this.node.getChildByName("08_bnt_sz").active = !1), this.initGameData(), this._revivalCount = 0, this.node.active = !0, cc.Global.gameLogic.startGame(e, this._isShootRange), this._gameIng = !0, this._gameTime = 31, this.node.getChildByName("TimeLabel").getComponent(cc.Label).string = "00:" + this._gameTime, this.node.getChildByName("countdownLabel").active = !1, cc.Global.app.showBannerOrSuggest()
            },
            replayGame: function() {
                this.node.active = !0, this.enterGame(this._gunData, this._isShootRange)
            },
            reviveGame: function() {
                cc.Global.gameLogic.continueGame()
            },
            initGameData: function() {
                cc.sys.platform, cc.sys.WECHAT_GAME
            },
            nextLevel: function() {
                this.enterGame()
            },
            previousLevel: function() {
                this.enterGame()
            },
            settingClick: function() {
                cc.Global.SoundModel.playEffect("click"), cc.Global.settingLayer.settingShow(), cc.Global.gameLogic.obstacleLayer.pauseAllActions()
            },
            showRingLabelNun: function(e, t, a) {
                var o = cc.Global.randombt(-100, 100),
                    c = cc.v2(t.x + o, t.y + o);
                a = a || this.node;
                var i = cc.instantiate(this.node.getChildByName("ringLabel"));
                if (i.active = !0, i.getComponent(cc.Label).string = e + " hit", i.position = c || cc.v2(0, 0), a.addChild(i), i.scale = 0, i.opacity = 255, i.runAction(cc.sequence(cc.scaleTo(.2, 1.2, 1.2), cc.scaleTo(.2, 1, 1), cc.delayTime(.2), cc.spawn(cc.fadeOut(.5), cc.moveBy(.5, 0, 60)), cc.callFunc(function(e) {
                        e.destroy()
                    }))), 10 === e) {
                    this._shootCombo++, this._shootComboTime = 3;
                    var l = this.node.getChildByName("shootRangeGameNode").getChildByName("comboNode");
                    this._shootCombo >= 1 && (l.activeInHierarchy || (l.active = !0, l.getChildByName("qh-01").stopAllActions(), l.getChildByName("qh-01").scale = 1, l.getChildByName("qh-01").runAction(cc.sequence(cc.scaleTo(.3, 1.5), cc.scaleTo(.3, 1)))), l.getChildByName("num").stopAllActions(), l.getChildByName("num").scale = 1, l.getChildByName("num").runAction(cc.sequence(cc.scaleTo(.3, 1.2), cc.scaleTo(.3, 1))), l.getChildByName("num").getChildByName("Label").getComponent(cc.Label).string = this._shootCombo)
                }
            }
        }), cc._RF.pop()
    }, {}],
    gameLogic: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "c24dfTd6zxE35WsqdWEm/9H", "gameLogic"), cc.Class({
            extends: cc.Component,
            properties: {
                concentricPic: {
                    default: [],
                    type: cc.SpriteFrame
                },
                concentric: cc.Node,
                _nowConcentricIndex: 0,
                obstacle: cc.Node,
                obstacleLayer: cc.Node,
                _obstacleArry: [],
                _nowObstacleIndex: -1,
                _concentricXMove: !0,
                _obstacleRealWidth: [],
                _nowLevel: -1,
                _obstacleNum: 0,
                _gunMaxBulletCapacity: 0,
                _gunBulletCapacity: 0,
                _bIsAutomaticMode: !1,
                _bIsStarShoot: !1,
                _shootInterval: .5,
                _gunData: null,
                _concentricX: 0,
                _concentricY: 200,
                _concentricNowX: 0,
                _concentricNowY: 200,
                _isGameVibrate: !1,
                _endConcentricPos: null,
                _isShootingRange: !1,
                _shootScore: 0,
                _targetScore: 0,
                _shootGold: 0
            },
            onLoad: function() {
                var e = this,
                    t = this;
                this._concentricX = 0, this._concentricY = 200, this.node.getChildByName("concentric").position = cc.v2(this._concentricX, this._concentricY), this._carImgArry = cc.Global.gunBigImgArry;
                var a = this.node.getChildByName("touchNode");
                a.on(cc.Node.EventType.TOUCH_START, function(t) {
                    e._touchBeginPos = a.convertToNodeSpaceAR(t.getLocation()), e.concentric.stopAllActions(), e._endConcentricPos = e.concentric.position
                }), a.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
                    var o = a.convertToNodeSpaceAR(t.getLocation()),
                        c = e._endConcentricPos.add(o.sub(e._touchBeginPos));
                    c.x = c.x > 370 ? 370 : c.x, c.x = c.x < -370 ? -370 : c.x, c.y = c.y < 0 ? 0 : c.y, c.y = c.y > 600 ? 600 : c.y, e.concentric.position = c
                }), a.on(cc.Node.EventType.TOUCH_END, function(t) {
                    e.reset()
                }), a.on(cc.Node.EventType.TOUCH_CANCEL, function(t) {
                    e.reset()
                });
                var o = this.node.getChildByName("05_zd_dk"),
                    c = cc.v2(0, -343);
                o.on(cc.Node.EventType.TOUCH_START, function(o) {
                    e._touchBeginPos = a.convertToNodeSpaceAR(o.getLocation()), e._touchBeginPos2 = a.convertToNodeSpaceAR(o.getLocation()), t._bIsStarShoot = !0, t.shot()
                }), o.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
                    var i = a.convertToNodeSpaceAR(t.getLocation()),
                        l = e.concentric.position.add(i.sub(e._touchBeginPos));
                    if (l.x = l.x > 370 ? 370 : l.x, l.x = l.x < -370 ? -370 : l.x, l.y = l.y < 0 ? 0 : l.y, l.y = l.y > 600 ? 600 : l.y, e._touchBeginPos = i, e.concentric.position = l, cc.Global._getDistance(i, c) < 182) o.position = c.add(i.sub(e._touchBeginPos2));
                    else {
                        var n = 182 * Math.cos(cc.Global._getRadian(i)),
                            s = c.y + 182 * Math.sin(cc.Global._getRadian(i));
                        o.setPosition(cc.v2(n, s))
                    }
                }), o.on(cc.Node.EventType.TOUCH_END, function(i) {
                    a.convertToNodeSpaceAR(i.getLocation());
                    o.setPosition(c), t._endConcentricPos = e.concentric.position, t._bIsStarShoot = !1
                }), o.on(cc.Node.EventType.TOUCH_CANCEL, function(i) {
                    a.convertToNodeSpaceAR(i.getLocation());
                    o.setPosition(c), t._endConcentricPos = e.concentric.position, t._bIsStarShoot = !1
                }), this._obstacleRealWidth[0] = 179, this._obstacleRealWidth[1] = 204, this._obstacleRealWidth[2] = 112, this._obstacleRealWidth[3] = 235, this._obstacleRealWidth[4] = 86, this._obstacleRealWidth[5] = 82, this._obstacleRealWidth[6] = 85, this._obstacleRealWidth[7] = 198, this._obstacleRealWidth[8] = 198, this._obstacleRealWidth[9] = 300, this._nowLevel = 0, this._bIsAutomaticMode = !0, this._shootInterval = .1, this.node.getChildByName("flareNode").active = !1, this._endConcentricPos = cc.v2(0, 200), this._spaceHeld = !1, cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this._onKeyDown, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this._onKeyUp, this)
            },
            onDestroy: function() {
                cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this._onKeyDown, this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this._onKeyUp, this)
            },
            _canUseKeyboard: function() {
                return !(!this.node.activeInHierarchy || cc.Global.settingLayer && cc.Global.settingLayer.node.activeInHierarchy || cc.Global.gameLayer && !cc.Global.gameLayer._gameIng)
            },
            _onKeyDown: function(e) {
                if (!this._canUseKeyboard()) return;
                var t = e.keyCode;
                if (t === cc.macro.KEY.r || 82 === t) this.changeClipClick();
                else if ((t === cc.macro.KEY.space || 32 === t) && !this._spaceHeld) this._spaceHeld = !0, this._bIsStarShoot = !0, this.shot()
            },
            _onKeyUp: function(e) {
                var t = e.keyCode;
                (t === cc.macro.KEY.space || 32 === t) && (this._spaceHeld = !1, this._bIsStarShoot = !1)
            },
            start: function() {},
            update: function(e) {},
            touchStart: function(e) {},
            touchMove: function(e) {},
            touchEnd: function(e) {},
            shot: function() {
                var e = this;
                if (this._gunBulletCapacity <= 0 || cc.Global.settingLayer.node.activeInHierarchy || !this._bIsStarShoot) this._bIsStarShoot = !1;
                else {
                    if (2 === this._gunData.type ? cc.Global.SoundModel.playGunEffect(this._gunData.audioName) : cc.Global.SoundModel.playEffect(this._gunData.audioName), cc.sys.platform == cc.sys.WECHAT_GAME && this._isGameVibrate && wx.vibrateShort(), -1 !== this._nowObstacleIndex) {
                        this._obstacleArry[this._nowObstacleIndex].getComponent("obstacle").hit(this.node.convertToWorldSpaceAR(this.concentric.position), this._gunData.gunBulletPower, 3 == this._gunData.type), this._touchIndex = -1;
                        var t = this.checkSurviveObstacle();
                        this.node.getChildByName("levelGameNode").getChildByName("TargetNode").getChildByName("TargetLabel").getComponent(cc.Label).string = "Cần: " + (this._obstacleNum - t) + "/" + this._obstacleNum /* + "phá hủy" */, 0 === t && (cc.log("\u901a\u5173!"), cc.Global.gameLayer._gameIng = !1, setTimeout(function() {
                            cc.Global.gameOverLayer.showGameOverLayer()
                        }, 1e3))
                    } else if (3 !== this._gunData.type) {
                        var a = this.node.convertToWorldSpaceAR(this.concentric.position);
                        a = this.node.getChildByName("bg").convertToNodeSpaceAR(a), (c = cc.instantiate(this.node.getChildByName("obstacle").getChildByName("bulletHole"))).active = !0, c.position = a, this.node.getChildByName("bg").addChild(c), c.runAction(cc.sequence(cc.fadeOut(3), cc.callFunc(function() {
                            c.destroy()
                        })))
                    } else
                        for (var o = 0; o < 5; o++) {
                            var c;
                            a = this.node.convertToWorldSpaceAR(this.concentric.position);
                            a = this.node.getChildByName("bg").convertToNodeSpaceAR(a), (c = cc.instantiate(this.node.getChildByName("obstacle").getChildByName("bulletHole"))).active = !0, c.position = a.add(cc.v2(cc.Global.randombt(-30, 30), cc.Global.randombt(-30, 30))), this.node.getChildByName("bg").addChild(c), c.runAction(cc.sequence(cc.fadeOut(3), cc.callFunc(function() {
                                c.destroy()
                            })))
                        }
                    this._gunBulletCapacity--, this.updateBulletCapacity(), this._gunBulletCapacity <= 0 && this.changeClip();
                    var i = this;
                    this.node.getChildByName("flareNode").active = !1, this.node.getChildByName("flareNode").active = !0, this.node.getChildByName("flareNode").stopAllActions();
                    var l = this._shootInterval / 2;
                    l = l > .05 ? .05 : l, this.node.getChildByName("flareNode").runAction(cc.sequence(cc.delayTime(l), cc.callFunc(function() {
                        i.node.getChildByName("flareNode").active = !1
                    })));
                    var n = cc.instantiate(this.node.getChildByName("cartridge"));
                    n.active = !0, this.node.getChildByName("cartridgeLayer").addChild(n), n.y = -667, n.x = 100, n.scale = .2, n.getChildByName("1").active = !0, n.getChildByName("2").active = !1, n.runAction(cc.sequence(cc.spawn(cc.scaleTo(.6, .5), cc.rotateTo(1, 1080), cc.bezierTo(1, [cc.v2(100, -667), cc.v2(100, -300), cc.v2(400, -300)])), cc.callFunc(function() {
                        n.destroy()
                    }))), this.recoil(), (this._bIsAutomaticMode || this._spaceHeld) && cc.Global.gameLayer._gameIng && this.scheduleOnce(function() {
                        e.shot()
                    }, this._shootInterval)
                }
            },
            reset: function() {
                this._bIsStarShoot || (this.concentric.stopAllActions(), this.concentric.runAction(cc.sequence(cc.delayTime(2), cc.moveTo(cc.Global._getDistance(this.concentric.position, cc.v2(0, 200)) / 200, cc.v2(0, 200)))))
            },
            recoil: function() {
                var e = this.concentric,
                    t = this,
                    a = cc.v2(cc.Global.randombt(-10, 10) + e.x, this.concentric.y + 5 * this._gunData.gunRecoil);
                cc.Global.isGuide && (a = cc.v2(cc.Global.randombt(-10, 10) + e.x, this.concentric.y + 5)), this.concentric.stopAllActions(), this.concentric.runAction(cc.sequence(cc.spawn(cc.scaleTo(.1, 1.2), cc.moveTo(.1, a).easing(cc.easeBackOut())), cc.spawn(cc.scaleTo(.1, 1), cc.moveTo(.2, e)), cc.callFunc(function() {
                    t.reset()
                })))
            },
            gunDown: function() {
                var e = this.concentric.y - 10 * this._gunData.gunRecoil,
                    t = cc.v2(0, e < -50 ? -50 : e);
                this.concentric.stopAllActions(), this.concentric.runAction(cc.moveTo(this._shootInterval, t))
            },
            recoilReset: function() {
                if (this.concentric.stopAllActions(), this.concentric.y >= -20) {
                    var e = this.concentric.y + 20 * this._gunData.gunRecoil,
                        t = e > 250 ? 250 : e;
                    this.concentric.runAction(cc.sequence(cc.moveTo(.2, cc.v2(0, t)), cc.moveTo(.2, cc.v2(0, 0)).easing(cc.easeSineIn())))
                } else this.concentric.runAction(cc.moveTo(.5, cc.v2(0, 0)))
            },
            checkObstacleMove: function() {
                for (var e = this, t = 0, a = 0, o = 0; o < this._obstacleArry.length; o++) {
                    var c = this._obstacleArry[o];
                    this._isShootingRange && c.getChildByName("bulletHoleLayer").removeAllChildren(!0), c.getComponent("obstacle")._isSurvive && (a = this._isShootingRange ? -575 : -265 * t - 500, c.x = a, c.y = 268, t++)
                }
                if (0 !== t) {
                    var i = Math.abs(a) + 600;
                    this.obstacleLayer.x = 0, this.obstacleLayer.stopAllActions(), this._isShootingRange ? this.obstacleLayer.runAction(cc.sequence(cc.moveTo(3, cc.v2(555, 0)).easing(cc.easeQuarticActionOut()), cc.delayTime(1), cc.moveTo(2, cc.v2(1140, 0)).easing(cc.easeQuarticActionIn()), cc.delayTime(.5), cc.callFunc(function() {
                        e.checkObstacleMove()
                    }))) : this.obstacleLayer.runAction(cc.sequence(cc.moveTo(i / 300, i, 0), cc.callFunc(function() {
                        e.checkObstacleMove()
                    })))
                }
            },
            startGame: function(e, t) {
                var a = this;
                this._isShootingRange = t, this.node.getChildByName("levelGameNode").active = !t, this.node.getChildByName("shootRangeGameNode").active = t, cc.Global.getlocalStorage("isVibrate", function(e) {
                    a._isGameVibrate = "true" == e
                }), cc.director.getCollisionManager().enabled = !0, this.obstacle.active = !1, this.setGunConfig(e), this.setObstacle(), this.checkObstacleMove(this), this.updateBulletCapacity(), t ? (this._targetScore = 200 * cc.Global.userData.shootLevel + 200, this._shootGold = 0, this.node.getChildByName("shootRangeGameNode").getChildByName("targetScore").getComponent(cc.Label).string = this._targetScore, this.node.getChildByName("shootRangeGameNode").getChildByName("goldNode").getChildByName("goldNumLabel").getComponent(cc.Label).string = this._shootGold, this._shootScore = 0, this.node.getChildByName("shootRangeGameNode").getChildByName("scoreNode").getChildByName("scoreLabel").getComponent(cc.Label).string = this._shootScore) : (this.node.getChildByName("levelGameNode").getChildByName("LevelLabel").getComponent(cc.Label).string = this._nowLevel, this.node.getChildByName("levelGameNode").getChildByName("TargetNode").getChildByName("TargetLabel").getComponent(cc.Label).string = "Cần: 0/" + this._obstacleNum /* + "phá hủy" */), this.node.getChildByName("09_tim").active = !cc.Global.isGuide, this.node.getChildByName("TimeLabel").active = !cc.Global.isGuide, this.node.getChildByName("countdownLabel").active = !cc.Global.isGuide
            },
            setObstacle: function() {
                var e = [];
                if (this._isShootingRange) e = [12];
                else {
                    this._nowLevel = cc.Global.userData.gameLevel + 1;
                    var t = this._nowLevel * this._nowLevel * .1 + 5 * this._nowLevel;
                    this._obstacleNum = cc.Global.randombt(5, 10), cc.Global.isGuide && (this._obstacleNum = 7, t = 250), e = this.test(t, this._obstacleNum)
                }
                this._obstacleArry = [], this.obstacleLayer.removeAllChildren(!0);
                for (var a = 0; a < e.length; a++) {
                    var o = cc.Global.getObstacleData(e[a]);
                    if (o) {
                        var c = cc.instantiate(this.obstacle),
                            i = o.type;
                        c.getComponent("obstacle").initObstacle(i, o.lifeValue), c.active = !0, c._uid = a, this.obstacleLayer.addChild(c), this._obstacleArry.push(c)
                    } else cc.log("%c \u4e0d\u5b58\u5728\u7684\u969c\u788duid:", "color:#f00;", a, e[a])
                }
            },
            setGunConfig: function(e) {
                this._gunData ? e && (this._gunData = e) : this._gunData = e || {
                    level: 0,
                    name: "Súng lục Mauser C96",
                    type: 1,
                    rateOfFire: 0,
                    gunPower: 2,
                    gunBulletPower: 2.7,
                    bulletCapacity: 3,
                    changeClipTime: .2,
                    isCombo: 0,
                    shootSpeed: 0,
                    gunRecoil: 2,
                    gunAimRatio: 1,
                    audioName: "shot11"
                }, this._shootInterval = 0 == this._gunData.shootSpeed ? .2 : 1 / this._gunData.shootSpeed, this._bIsAutomaticMode = 2 == this._gunData.type, this.switchConcentric(this._gunData.type), this._gunMaxBulletCapacity = this._gunData.bulletCapacity, cc.log("this._gunData.bulletCapacity", this._gunData.bulletCapacity), this._gunBulletCapacity = this._gunData.bulletCapacity, this.node.getChildByName("gunIcon").getComponent(cc.Sprite).spriteFrame = cc.Global.gunBigImgArry[this._gunData.level], this.node.getChildByName("gunIcon").scale = 5, this.node.getChildByName("gunIcon").runAction(cc.scaleTo(.5, .5))
            },
            initGame: function() {
                this._nowObstacleIndex = -1, this.concentric.x = 0, this.concentric.y = 200, this.node.getChildByName("bg").removeAllChildren(!0), cc.Global.app.showBannerOrSuggest()
            },
            endGame: function() {
                cc.director.getCollisionManager().enabled = !0
            },
            continueGame: function() {},
            switchConcentric: function(e) {
                e >= 0 && e <= 4 ? this._nowConcentricIndex = e : (this._nowConcentricIndex++, this._nowConcentricIndex > 3 && (this._nowConcentricIndex = 0)), this.concentric.getComponent(cc.Sprite).spriteFrame = this.concentricPic[this._nowConcentricIndex]
            },
            checkSurviveObstacle: function() {
                for (var e = 0, t = 0; t < this._obstacleArry.length; t++) {
                    this._obstacleArry[t].getComponent("obstacle")._isSurvive && e++
                }
                return e
            },
            updateBulletCapacity: function() {
                this.node.getChildByName("clipLabel").getComponent(cc.RichText).string = "<color=#ff0000>" + this._gunBulletCapacity + "</c>/<color=#ffffff>" + this._gunMaxBulletCapacity + "</color>"
            },
            changeClip: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || this.touchEnd(), this.node.getChildByName("touchNode").pauseSystemEvents(!0), cc.Global.SoundModel.playEffect("changeClip");
                var e = this.node.getChildByName("changeClipLayer");
                if (!e.activeInHierarchy) {
                    e.active = !0;
                    var t = e.getChildByName("progressBar").getComponent(cc.ProgressBar);
                    t.progress = 0, cc.director.getScheduler().schedule(function() {
                        t.progress += .05, t.progress > 1 && (t.progress = 1)
                    }, this, this._gunData.changeClipTime / 25, 19, 0, !1);
                    var a = this;
                    e.runAction(cc.sequence(cc.delayTime(this._gunData.changeClipTime + .1), cc.callFunc(function() {
                        a._gunBulletCapacity = a._gunMaxBulletCapacity, a.updateBulletCapacity(), e.active = !1
                    })))
                }
                this.node.getChildByName("touchNode").resumeSystemEvents(!0)
            },
            changeClipClick: function() {
                cc.Global.SoundModel.playEffect("click"), this.changeClip(!0)
            },
            test: function(e, t) {
                for (var a = [1, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3], o = a.length - 1, c = e / t, i = 0; i < a.length; i++)
                    if (a[i] - c >= 0) {
                        o = i;
                        break
                    } for (var l = null, n = o, s = [], r = 0; r < t; r++) l += a[n], s.push(n), l > c * (r + 1) && n > 0 ? n-- : l < c * (r + 1) && n < a.length - 1 && n++;
                return s.sort(function() {
                    return Math.random() - .5
                }), s
            }
        }), cc._RF.pop()
    }, {}],
    gameOverLayer: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "7b257DAG3tCOJSgi8B6tE3G", "gameOverLayer"), cc.Class({
            extends: cc.Component,
            properties: {
                _rewardGem: 0,
                _rewardGold: 0,
                _stageClearNum: 1,
                _moreRewardArr: []
            },
            start: function() {},
            showGameOverLayer: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                this.node.active = !0, cc.Global.isGuide && (cc.Global.guideLayer.node.active = !0, cc.Global.guideLayer.updateStep(7), cc.Global.app.reportEvent(1, 2)), cc.Global.userData.gameLevel >= cc.Global.minLvAD && (this._stageClearNum % (parseInt(cc.Global.intervalLvAD) + 1) == 0 && cc.Global.showInterstitialAd(), this._stageClearNum++), cc.Global.app.showBannerOrSuggest(), this.node.getChildByName("frame").setScale(0), console.log('this.node.getChildByName("frame")', this.node.getChildByName("frame")), this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("frame").runAction(cc.scaleTo(.5, 1).easing(cc.easeBackOut())), this.node.getChildByName("frame").getChildByName("victory").active = 1 === e, this.node.getChildByName("frame").getChildByName("fail").active = 2 === e;
                var t = cc.Global.gameLogic._nowLevel,
                    a = this.node.getChildByName("frame").getChildByName("victory"),
                    o = this.node.getChildByName("frame").getChildByName("fail");
                if (1 === e) {
                    t > cc.Global.userData.gameLevel && (cc.Global.userData.gameLevel = t, cc.Global.app.updateMyContext()), a.getChildByName("level").getComponent(cc.Label).string = t, this._rewardGold = 10 * Math.pow(t, 3) + 5e3, cc.Global.userData.goldCoins += this._rewardGold, cc.Global.userData.totalGoldCoins += this._rewardGold, cc.Global.app.updateMyContext(), a.getChildByName("rewardLabel").getComponent(cc.Label).string = "+" + cc.Global.moneyToChange(this._rewardGold), cc.Global.app.reportEvent(14, t), a.getChildByName("moreReward").getChildByName("closeRichText").active = !1, setTimeout(function() {
                        a.getChildByName("moreReward").getChildByName("closeRichText").active = !0
                    }, 3e3), this._moreRewardArr = [0, 1, 2, 3, 4, 5], this._moreRewardArr.sort(function() {
                        return Math.random() - .5
                    });
                    for (var c = 0; c < 3; c++) {
                        cc.Global.randombt(1, 100) < cc.Global.lightpoint ? (a.getChildByName("moreReward").getChildByName("reward" + c).getChildByName("videoButton").active = !1, a.getChildByName("moreReward").getChildByName("reward" + c).getChildByName("shareButton").active = !0) : (a.getChildByName("moreReward").getChildByName("reward" + c).getChildByName("videoButton").active = !0, a.getChildByName("moreReward").getChildByName("reward" + c).getChildByName("shareButton").active = !1);
                        for (var i = 0; i < 6; i++) a.getChildByName("moreReward").getChildByName("reward" + c).getChildByName("type" + i).active = i === this._moreRewardArr[c]
                    }
                } else this.showFriendPlay(), o.getChildByName("level").getComponent(cc.Label).string = cc.Global.userData.maxLevel
            },
            hideGameOverLayer: function(e) {
                var t = this;
                this.node.getChildByName("frame").getNumberOfRunningActions() > 0 || (cc.Global.hideBannerOrSuggest(), this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("frame").runAction(cc.sequence(cc.scaleTo(.5, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
                    t.node.active = !1, t.returnHome(), e && "function" == typeof e && e()
                }))))
            },
            getMoreReward1: function(e, t) {
                var a = this;
                cc.Global.SoundModel.playEffect("click");
                var o = this;
                if (cc.Global.isGuide || !cc.Global.shareEnable) {
                    switch (this._moreRewardArr[parseInt(t)]) {
                        case 0:
                            cc.Global.userData.goldCoins += 10 * this._rewardGold, cc.Global.userData.totalGoldCoins += 10 * this._rewardGold;
                            break;
                        case 1:
                            cc.Global.userData.gemCoins += 50;
                            break;
                        case 2:
                            cc.Global.userData.goldCoins += 5 * this._rewardGold, cc.Global.userData.totalGoldCoins += 5 * this._rewardGold;
                            break;
                        case 3:
                            cc.Global.userData.gemCoins += 20;
                            break;
                        case 4:
                            var c = cc.Global.randombt(cc.Global.userData.maxLevel - 8, cc.Global.userData.maxLevel - 5);
                            c = c < 0 ? 0 : c, cc.Global.homeLayer.addCar(c);
                            break;
                        default:
                            cc.Global.userData.gemCoins += cc.Global.randombt(20, 50)
                    }
                    return cc.Global.isGuide && (cc.Global.guideLayer.updateStep(1), cc.Global.app.reportEvent(1, 3)), void o.hideGameOverLayer()
                }
                cc.Global.shareClick(function(e) {
                    if (e) switch (a._moreRewardArr[parseInt(t)]) {
                        case 0:
                            cc.Global.userData.goldCoins += 10 * a._rewardGold, cc.Global.userData.totalGoldCoins += 10 * a._rewardGold;
                            break;
                        case 1:
                            cc.Global.userData.gemCoins += 50;
                            break;
                        case 2:
                            cc.Global.userData.goldCoins += 5 * a._rewardGold, cc.Global.userData.totalGoldCoins += 5 * a._rewardGold;
                            break;
                        case 3:
                            cc.Global.userData.gemCoins += 20;
                            break;
                        case 4:
                            var c = cc.Global.randombt(cc.Global.userData.maxLevel - 8, cc.Global.userData.maxLevel - 5);
                            c = c < 0 ? 0 : c, cc.Global.homeLayer.addCar(c);
                            break;
                        default:
                            cc.Global.userData.gemCoins += cc.Global.randombt(20, 50)
                    }
                    cc.Global.app.updateMyContext(), o.hideGameOverLayer()
                })
            },
            getMoreReward: function(e, t) {
                var a = this;
                cc.Global.SoundModel.playEffect("click");
                var o = this;
                if (cc.Global.isGuide || !cc.Global.shareEnable) {
                    switch (this._moreRewardArr[parseInt(t)]) {
                        case 0:
                            cc.Global.userData.goldCoins += 10 * this._rewardGold, cc.Global.userData.totalGoldCoins += 10 * this._rewardGold;
                            break;
                        case 1:
                            cc.Global.userData.gemCoins += 50;
                            break;
                        case 2:
                            cc.Global.userData.goldCoins += 5 * this._rewardGold, cc.Global.userData.totalGoldCoins += 5 * this._rewardGold;
                            break;
                        case 3:
                            cc.Global.userData.gemCoins += 20;
                            break;
                        case 4:
                            var c = cc.Global.randombt(cc.Global.userData.maxLevel - 8, cc.Global.userData.maxLevel - 5);
                            c = c < 0 ? 0 : c, cc.Global.homeLayer.addCar(c);
                            break;
                        default:
                            cc.Global.userData.gemCoins += cc.Global.randombt(20, 50)
                    }
                    return cc.Global.isGuide && (cc.Global.guideLayer.updateStep(1), cc.Global.app.reportEvent(1, 3)), void o.hideGameOverLayer()
                }
                cc.Global.showVideoAD(function(e) {
                    if (e) switch (a._moreRewardArr[parseInt(t)]) {
                        case 0:
                            cc.Global.userData.goldCoins += 10 * a._rewardGold, cc.Global.userData.totalGoldCoins += 10 * a._rewardGold;
                            break;
                        case 1:
                            cc.Global.userData.gemCoins += 50;
                            break;
                        case 2:
                            cc.Global.userData.goldCoins += 5 * a._rewardGold, cc.Global.userData.totalGoldCoins += 5 * a._rewardGold;
                            break;
                        case 3:
                            cc.Global.userData.gemCoins += 20;
                            break;
                        case 4:
                            var c = cc.Global.randombt(cc.Global.userData.maxLevel - 8, cc.Global.userData.maxLevel - 5);
                            c = c < 0 ? 0 : c, cc.Global.homeLayer.addCar(c);
                            break;
                        default:
                            cc.Global.userData.gemCoins += cc.Global.randombt(20, 50)
                    }
                    cc.Global.app.updateMyContext(), o.hideGameOverLayer()
                })
            },
            getReward: function() {
                cc.Global.SoundModel.playEffect("getGoldorGem"), cc.Global.userData.gemCoins += 20, cc.Global.app.updateMyContext(), this.node.getChildByName("frame").getChildByName("victory").getChildByName("gemRewardButton").getComponent(cc.Button).interactable = !1, this.node.getChildByName("frame").getChildByName("victory").getChildByName("gemRewardButton").getComponent(cc.Animation).stop(), cc.Global.homeLayer.updateGoldLabel();
                cc.Global.showGetGemEff(cc.v2(0, 120), this.node, function() {})
            },
            getGemClick: function() {
                cc.Global.SoundModel.playEffect("click");
                var e = this;
                cc.Global.app.videoOrShare(function(t) {
                    t && (e.getReward(), e.node.getChildByName("frame").getChildByName("victory").getChildByName("13_tzcg_bnt").active = !0, e.node.getChildByName("frame").getChildByName("victory").getChildByName("gemRewardButton").active = !1, e.node.getChildByName("frame").getChildByName("victory").getChildByName("nextRichText").active = !1)
                })
            },
            nextLevelClick: function() {
                cc.Global.SoundModel.playEffect("click"), this.hideGameOverLayer(function() {
                    cc.Global.gameLayer.enterGame()
                })
            },
            rePlayClick: function() {
                cc.Global.SoundModel.playEffect("click"), this.hideGameOverLayer(function() {
                    cc.Global.gameLayer.replayGame()
                })
            },
            closeClick: function() {
                cc.Global.SoundModel.playEffect("click"), this.node.active = !0, this.hideGameOverLayer(function() {
                    cc.Global.gameLayer.node.active = !1, cc.Global.buffLayer.getIsOpenBuff() || !cc.Global.shareEnable || cc.Global.isGuide || cc.Global.buffLayer.showBuffLayer()
                })
            },
            showFriendPlay: function() {
                var e = this.node.getChildByName("frame").getChildByName("fail").getChildByName("friend");
                e && (e.active = !1)
            },
            friendPlayClick: function(e, t) {},
            returnHome: function() {
                cc.Global.hideBannerOrSuggest(), cc.Global.homeLayer.node.active = !0, cc.Global.gameLayer.node.active = !1, cc.Global.homeLayer.updateGoldLabel(), cc.Global.shareEnable && cc.Global.isSignIn && !cc.Global.isGuide ? cc.Global.signInLayer.showSignInLayer() : cc.Global.buffLayer.getIsOpenBuff() || !cc.Global.shareEnable || cc.Global.isGuide || cc.Global.buffLayer.showBuffLayer()
            }
        }), cc._RF.pop()
    }, {}],
    guideLayer: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "41f07Z3jA9LgLurt26Y4ZdH", "guideLayer"), cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            updateStep: function(e) {
                for (var t = this, a = null, o = 1; o < 8; o++) this.node.getChildByName("setp" + o).active = o === e, o === e && (a = o), this.scheduleOnce(function() {
                    a && (t.node.getChildByName("setp" + a).active = !1)
                }, 15)
            }
        }), cc._RF.pop()
    }, {}],
    gunGiftLayer: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "4ef98P+kqtAMqazqEpPwNxW", "gunGiftLayer"), cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            gunGiftShow: function() {
                var e = this;
                this.node.active = !0;
                var t = this.node.getChildByName("frame");
                t.setScale(0), t.stopAllActions(), t.runAction(cc.scaleTo(.5, 1).easing(cc.easeBackOut())), cc.Global.app.showBannerOrSuggest(), cc.Global.canPlayAdInFTNN(function(t) {
                    e.node.getChildByName("frame").getChildByName("shareButton").getChildByName("videoIcon").active = !!t
                })
            },
            gunGiftHide: function(e) {
                var t = this,
                    a = this.node.getChildByName("frame");
                a.stopAllActions(), a.runAction(cc.sequence(cc.scaleTo(.5, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
                    t.node.active = !1, e && "function" == typeof e && e()
                }))), cc.Global.hideBannerOrSuggest()
            },
            closeClick: function() {
                cc.Global.SoundModel.playEffect("click"), cc.Global.hideBannerOrSuggest(), this.gunGiftHide()
            },
            getReward: function() {
                var e = this;
                cc.Global.app.reportEvent(17, 1), cc.Global.showVideoAD(function(t) {
                    t ? (cc.Global.app.updateMyContext(), cc.Global.homeLayer.node.getChildByName("mainScene").getChildByName("gunGift").active = !1, e.gunGiftHide(), cc.Global.homeLayer.addCar(6) && (cc.Global.userData.ifisGunGift = !0, cc.Global.homeLayer.updateMoreGameNode()), cc.Global.app.reportEvent(17, 2)) : cc.Global.app.reportEvent(17, 3)
                })
            }
        }), cc._RF.pop()
    }, {}],
    gunShopLayer: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "c5190TRbbVPnq0ih2VCSFQq", "gunShopLayer"), cc.Class({
            extends: cc.Component,
            properties: {
                content: cc.Node,
                _itemList: []
            },
            start: function() {},
            showGunShopLayer: function() {
                var e = this;
                this.node.active = !0, this.content.getChildByName("airLv").getChildByName("bnt_1").getChildByName("goldNode").getChildByName("goldNumLabel").getComponent(cc.Label).string = 50 * cc.Global.userData.airGunLv + 50 + "\u5347\u7ea7", this.content.getChildByName("goldDouble").getChildByName("bnt_1").getChildByName("goldNode").getChildByName("goldNumLabel").getComponent(cc.Label).string = 25 * cc.Global.userData.goldAddition + 300 + "\u8d2d\u4e70", cc.Global.isStrongShare && !cc.Global.allVideo ? (this.content.getChildByName("gold4").getChildByName("shareButton").active = cc.Global.userData.share4Gold, this.content.getChildByName("gold4").getChildByName("bnt_2").active = !cc.Global.userData.share4Gold, this.content.getChildByName("gold2").getChildByName("shareButton").active = cc.Global.userData.share2Gold, this.content.getChildByName("gold2").getChildByName("bnt_2").active = !cc.Global.userData.share2Gold) : (this.content.getChildByName("gold4").getChildByName("shareButton").active = !1, this.content.getChildByName("gold4").getChildByName("bnt_2").active = !0, this.content.getChildByName("gold2").getChildByName("shareButton").active = !1, this.content.getChildByName("gold2").getChildByName("bnt_2").active = !0), this.content.getChildByName("gold12").getChildByName("bnt_1").active = cc.Global.userData.video12Gold, this.content.getChildByName("gold12").getChildByName("bnt_2").active = !cc.Global.userData.video12Gold, cc.Global.userData.airGunLv >= cc.Global.userData.maxLevel ? this.content.getChildByName("airLv").getChildByName("bnt_1").getComponent(cc.Button).interactable = !1 : this.content.getChildByName("airLv").getChildByName("bnt_1").getComponent(cc.Button).interactable = !0, this.node.getChildByName("frame").setScale(0), this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("frame").runAction(cc.scaleTo(.5, 1).easing(cc.easeBackOut())), cc.Global.app.showBannerOrSuggest(), cc.Global.canPlayAdInFTNN(function(t) {
                    t ? (e.content.getChildByName("gold12").getChildByName("bnt_1").active = !0, e.content.getChildByName("gold12").getChildByName("bnt_2").active = !1) : (e.content.getChildByName("gold12").getChildByName("bnt_1").active = !1, e.content.getChildByName("gold12").getChildByName("bnt_2").active = !0)
                })
            },
            hideGunShopLayer: function(e) {
                var t = this;
                this.node.getChildByName("frame").getNumberOfRunningActions() > 0 || (cc.Global.hideBannerOrSuggest(), this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("frame").runAction(cc.sequence(cc.scaleTo(.5, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
                    t.node.active = !1, e && "function" == typeof e && e()
                }))))
            },
            closrClick: function() {
                cc.Global.SoundModel.playEffect("click"), cc.Global.homeLayer.freeTip(), this.hideGunShopLayer()
            },
            buy12Hour: function() {
                cc.Global.userData.gemCoins >= 250 ? (cc.Global.userData.gemCoins -= 250, cc.Global.userData.goldCoins += cc.Global.homeLayer.getAllCarProfit() * (0 === cc.Global.userData.goldAddition ? 1 : cc.Global.userData.goldAddition) * 12 * 60 * 60, cc.log(cc.Global.homeLayer.getAllCarProfit() * (cc.Global.buffLayer.getIsOpenBuff() ? 5 : 1) * (0 === cc.Global.userData.goldAddition ? 1 : cc.Global.userData.goldAddition) * 12 * 60 * 60), cc.Global.app.updateMyContext(), cc.Global.homeLayer.updateGoldLabel(), this.content.getChildByName("gold12").getChildByName("bnt_1").active = !1, this.content.getChildByName("gold12").getChildByName("bnt_2").active = !0, cc.Global.showTip("Mua thành công!")) : cc.Global.showTip("Thiếu kim cương!")
            },
            video12Hour: function() {
                var e = this;
                cc.Global.app.reportEvent(6, 1), cc.Global.showVideoAD(function(t) {
                    t ? (cc.Global.userData.video12Gold = !1, cc.Global.userData.goldCoins += cc.Global.homeLayer.getAllCarProfit() * (0 === cc.Global.userData.goldAddition ? 1 : cc.Global.userData.goldAddition) * 12 * 60 * 60, cc.Global.app.updateMyContext(), cc.Global.homeLayer.updateGoldLabel(), cc.Global.showTip("Mua thành công!"), e.content.getChildByName("gold12").getChildByName("bnt_1").active = !1, e.content.getChildByName("gold12").getChildByName("bnt_2").active = !0, cc.Global.homeLayer.freeTip(), cc.Global.app.reportEvent(6, 2)) : cc.Global.app.reportEvent(6, 3)
                })
            },
            bugGoldAddition: function() {
                cc.Global.userData.gemCoins >= 25 * cc.Global.userData.goldAddition + 300 ? (cc.Global.userData.gemCoins -= 25 * cc.Global.userData.goldAddition + 300, cc.Global.userData.goldAddition += 2, cc.Global.app.updateMyContext(), cc.Global.homeLayer.updateGoldLabel(), cc.Global.showTip("Mua thành công!")) : cc.Global.showTip("Thiếu kim cương!")
            },
            buy4Hour: function() {
                cc.Global.userData.gemCoins >= 100 ? (cc.Global.userData.gemCoins -= 100, cc.Global.userData.goldCoins += cc.Global.homeLayer.getAllCarProfit() * (0 === cc.Global.userData.goldAddition ? 1 : cc.Global.userData.goldAddition) * 4 * 60 * 60, cc.log(cc.Global.homeLayer.getAllCarProfit() * (cc.Global.buffLayer.getIsOpenBuff() ? 5 : 1) * (0 === cc.Global.userData.goldAddition ? 1 : cc.Global.userData.goldAddition) * 4 * 60 * 60), cc.Global.app.updateMyContext(), cc.Global.homeLayer.updateGoldLabel(), cc.Global.showTip("Mua thành công!")) : cc.Global.showTip("Thiếu kim cương!")
            },
            share4Hour: function() {
                var e = this;
                cc.Global.shareClick(function(t) {
                    cc.Global.app.reportEvent(7, 1), t && (cc.Global.userData.goldCoins += cc.Global.homeLayer.getAllCarProfit() * (0 === cc.Global.userData.goldAddition ? 1 : cc.Global.userData.goldAddition) * 4 * 60 * 60, cc.log(cc.Global.homeLayer.getAllCarProfit() * (cc.Global.buffLayer.getIsOpenBuff() ? 5 : 1) * (0 === cc.Global.userData.goldAddition ? 1 : cc.Global.userData.goldAddition) * 4 * 60 * 60), cc.Global.userData.share4Gold = !1, cc.Global.app.updateMyContext(), cc.Global.homeLayer.updateGoldLabel(), e.content.getChildByName("gold4").getChildByName("shareButton").active = !1, e.content.getChildByName("gold4").getChildByName("bnt_2").active = !0, cc.Global.showTip("Mua thành công!"), cc.Global.homeLayer.freeTip())
                })
            },
            buy2Hour: function() {
                cc.Global.userData.gemCoins >= 50 ? (cc.Global.userData.gemCoins -= 50, cc.Global.userData.goldCoins += cc.Global.homeLayer.getAllCarProfit() * (0 === cc.Global.userData.goldAddition ? 1 : cc.Global.userData.goldAddition) * 2 * 60 * 60, cc.Global.app.updateMyContext(), cc.Global.homeLayer.updateGoldLabel(), cc.Global.showTip("Mua thành công!")) : cc.Global.showTip("Thiếu kim cương!")
            },
            share2Hour: function() {
                var e = this;
                cc.Global.shareClick(function(t) {
                    cc.Global.app.reportEvent(8, 1), t && (cc.Global.userData.goldCoins += cc.Global.homeLayer.getAllCarProfit() * (0 === cc.Global.userData.goldAddition ? 1 : cc.Global.userData.goldAddition) * 4 * 60 * 60, cc.Global.userData.share2Gold = !1, cc.Global.app.updateMyContext(), cc.Global.homeLayer.updateGoldLabel(), e.content.getChildByName("gold2").getChildByName("shareButton").active = !1, e.content.getChildByName("gold2").getChildByName("bnt_2").active = !0, cc.Global.showTip("Mua thành công!"), cc.Global.homeLayer.freeTip())
                })
            },
            upAirGun: function() {
                cc.Global.userData.gemCoins >= 50 * cc.Global.userData.airGunLv + 50 ? (cc.Global.userData.gemCoins -= 50 * cc.Global.userData.airGunLv + 50, cc.Global.userData.airGunLv++, this.content.getChildByName("airLv").getChildByName("bnt_1").getChildByName("goldNode").getChildByName("goldNumLabel").getComponent(cc.Label).string = 50 * cc.Global.userData.airGunLv + 50 + "nâng cấp", cc.Global.app.updateMyContext(), cc.Global.homeLayer.updateGoldLabel(), cc.Global.showTip("Cập nhật thành công!"), cc.Global.userData.airGunLv >= cc.Global.userData.maxLevel && (this.content.getChildByName("airLv").getChildByName("bnt_1").getComponent(cc.Button).interactable = !1)) : cc.Global.showTip("Thiếu kim cương!")
            }
        }), cc._RF.pop()
    }, {}],
    home: [function(e, t, a) {
        "use strict";
        var o;

        function c(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        }
        cc._RF.push(t, "2c611wfqBdNKYahpdOH7PlC", "home"), cc.Class((c(o = {
            extends: cc.Component,
            properties: {
                touchShowCar: cc.Node,
                _blockPosList: [],
                _blockRectList: [],
                _blockList: [],
                _touchIndex: -1,
                _touchType: -1,
                _carImgArry: [],
                _bIsCareteCar: !1,
                _isAotuMerge: !1,
                _nowBuyCarType: -1,
                _nowBuyCarGold: 0,
                _autoMergeTime: 180,
                _canTouch: !0,
                _isShowAir: !1,
                _buyCarCount: 0,
                _autoMergeIndex: []
            },
            onLoad: function() {
                localStorage.getItem("buffEndTime") && "" !== localStorage.getItem("buffEndTime") && cc.Global.gett() < localStorage.getItem("buffEndTime") ? (cc.Global.addProfitMaxTime = 1, cc.Global.homeLayer.node.getChildByName("mainScene").getChildByName("14_im_an").getChildByName("fireParticle").active = !0, cc.Global.homeLayer.node.getChildByName("mainScene").getChildByName("goldNode").getChildByName("goldParticle").active = !0, cc.Global.buffLayer._isOpenBuff = !0, cc.Global.timeOutId = setTimeout(function() {
                    cc.Global.buffLayer._isOpenBuff = !1, cc.Global.addProfitMaxTime = 5, cc.Global.homeLayer.node.getChildByName("mainScene").getChildByName("14_im_an").getChildByName("fireParticle").active = !1, cc.Global.homeLayer.node.getChildByName("mainScene").getChildByName("goldNode").getChildByName("goldParticle").active = !1
                }, localStorage.getItem("buffEndTime") - cc.Global.gett())) : (cc.Global.buffLayer._isOpenBuff = !1, cc.Global.homeLayer.node.getChildByName("mainScene").getChildByName("14_im_an").getChildByName("fireParticle").active = !1, cc.Global.homeLayer.node.getChildByName("mainScene").getChildByName("goldNode").getChildByName("goldParticle").active = !1, localStorage.setItem("buffEndTime", "")), this._carImgArry = cc.Global.gunImgArry, this._carImgArry1 = cc.Global.gunBigImgArry, this._blockPosList[0] = cc.v2(-276, 88), this._blockPosList[1] = cc.v2(-92, 88), this._blockPosList[2] = cc.v2(92, 88), this._blockPosList[3] = cc.v2(276, 88), this._blockPosList[4] = cc.v2(-276, -106), this._blockPosList[5] = cc.v2(-92, -106), this._blockPosList[6] = cc.v2(92, -106), this._blockPosList[7] = cc.v2(276, -106), this._blockPosList[8] = cc.v2(-276, -300), this._blockPosList[9] = cc.v2(-92, -300), this._blockPosList[10] = cc.v2(92, -300), this._blockPosList[11] = cc.v2(276, -300), this._blockPosList[12] = cc.v2(0, 300);
                for (var e = 130, t = 130, a = 0; a < 12; a++) this._blockRectList.push(cc.rect(this._blockPosList[a].x - .5 * e, this._blockPosList[a].y - .5 * t, e, t));
                e = 680, t = 200, this._blockRectList.push(cc.rect(this._blockPosList[12].x - .5 * e, this._blockPosList[12].y - .5 * t, e, t)), this.node.getChildByName("mainScene").getChildByName("bottomNode").getChildByName("delete").active = !0
            },
            start: function() {
                this.node.getChildByName("mainScene").getChildByName("bottomNode").getChildByName("autoMerge").getChildByName("timeLabel").active = !1, this.node.getChildByName("mainScene").getChildByName("bottomNode").getChildByName("autoMerge").getChildByName("titleSprite").active = !0, this._isAotuMerge = !1;
                var e = this.node.getChildByName("mainScene").getChildByName("blockBGNode").getChildByName("bnt_13");
                e.position = this._blockPosList[0];
                for (var t = 1; t < 12; t++) {
                    var a = cc.instantiate(e);
                    this.node.getChildByName("mainScene").getChildByName("blockBGNode").addChild(a), a.position = this._blockPosList[t]
                }
                var o = this,
                    c = this.node.getChildByName("mainScene").getChildByName("touchNode");
                c.on(cc.Node.EventType.TOUCH_START, function(e) {
                    var t = c.convertToNodeSpaceAR(e.getLocation());
                    o.touchStart(t)
                }), c.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
                    var t = c.convertToNodeSpaceAR(e.getLocation());
                    o.touchMove(t)
                }), c.on(cc.Node.EventType.TOUCH_END, function(e) {
                    var t = c.convertToNodeSpaceAR(e.getLocation());
                    o.touchEnd(t)
                }), c.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {
                    var t = c.convertToNodeSpaceAR(e.getLocation());
                    o.touchEnd(t)
                }), this.touchShowCar.active = !1, this.node.getChildByName("mainScene").getChildByName("bottomNode").getChildByName("deleteShowGun").active = !1
            },
            freeTip: function() {
                var e = this.node.getChildByName("mainScene").getChildByName("bottomNode").getChildByName("bnt_14").getChildByName("redFrame");
                !cc.Global.isStrongShare && cc.Global.userData.video12Gold ? (e.active = !0, e.stopAllActions(), e.runAction(cc.sequence(cc.rotateTo(.1, 30), cc.rotateTo(.2, -30), cc.rotateTo(.2, 30), cc.rotateTo(.2, -30), cc.rotateTo(.1, 0), cc.delayTime(3))).repeatForever()) : cc.Global.isStrongShare && (cc.Global.userData.video12Gold || cc.Global.userData.share4Gold || cc.Global.userData.share2Gold) ? (e.active = !0, e.stopAllActions(), e.runAction(cc.sequence(cc.rotateTo(.1, 30), cc.rotateTo(.2, -30), cc.rotateTo(.2, 30), cc.rotateTo(.2, -30), cc.rotateTo(.1, 0), cc.delayTime(3))).repeatForever()) : e.active = !1
            },
            libaoTip: function() {
                var e, t = this.node.getChildByName("mainScene").getChildByName("bottomNode").getChildByName("bnt_12").getChildByName("redPoint");
                (e = cc.Global.userData.lookVideoADCount) > 0 ? (t.active = !0, t.getChildByName("gemNum").getComponent(cc.Label).string = e, t.stopAllActions(), t.runAction(cc.sequence(cc.scaleTo(.2, 1.2), cc.scaleTo(.2, 1), cc.scaleTo(.2, 1.2), cc.scaleTo(.2, 1), cc.scaleTo(.2, 1.2), cc.scaleTo(.2, 1), cc.delayTime(5))).repeatForever()) : t.active = !1
            },
            onEnable: function() {
                var e = this;
                cc.Global.canPlayAdInFTNN(function(t) {
                    e.node.getChildByName("mainScene").getChildByName("bottomNode").getChildByName("autoMerge").getChildByName("greenVideo").active = !!t
                }), this.node.getChildByName("mainScene").getChildByName("playTest").active = !1
            },
            touchStart: function(e) {
                if (this._canTouch) {
                    for (var t = 0; t < 13; t++)
                        if (this._blockList[t] && this._blockList[t].getBoundingBox().contains(e)) {
                            -1 === this._blockList[t].getComponent("baseGunNode").getType() || this._autoMergeIndex.length && (t === this._autoMergeIndex[0] || t === this._autoMergeIndex[1]) || (this._touchIndex = t, this._touchType = this._blockList[t].getComponent("baseGunNode").getType());
                            break
                        } if (-1 !== this._touchIndex) {
                        this.node.getChildByName("mainScene").getChildByName("airdropNode").active = !1, cc.log("\u70b9\u5230:", this._touchIndex), this.touchShowCar.active = !0, this.touchShowCar.position = e, this.touchShowCar.getComponent(cc.Sprite).spriteFrame = this._carImgArry[this._touchType], this._blockList[this._touchIndex].getComponent("baseGunNode").selected();
                        for (t = 0; t < 13; t++) this._touchIndex !== t && this._blockList[t] && this._touchType === this._blockList[t].getComponent("baseGunNode").getType() && this._blockList[t].getComponent("baseGunNode").similarEff()
                    }
                }
            },
            touchMove: function(e) {
                this._canTouch && -1 !== this._touchIndex && (this.touchShowCar.position = e)
            },
            touchEnd: function(e) {
                var t = this;
                if (this._canTouch) {
                    if (-1 !== this._touchIndex) {
                        for (var a = 0; a < 13; a++) this._touchIndex !== a && this._blockList[a] && (!this._autoMergeIndex.length || a !== this._autoMergeIndex[0] && a !== this._autoMergeIndex[1]) && this._touchType === this._blockList[a].getComponent("baseGunNode").getType() && this._blockList[a].getComponent("baseGunNode").cancelsimilarEff();
                        this._blockList[this._touchIndex].getComponent("baseGunNode").uncheck();
                        for (a = 0; a < 13; a++)
                            if (this._touchIndex !== a && this._blockRectList[a].contains(e) && (!this._autoMergeIndex.length || a !== this._autoMergeIndex[0] && a !== this._autoMergeIndex[1])) {
                                if (this._blockList[a]) {
                                    var o = this._blockList[a].getComponent("baseGunNode").getType();
                                    if (-1 !== o)
                                        if (this._touchType === o) {
                                            this._canTouch = !1;
                                            var c = o + 1;
                                            if (c < this._carImgArry.length) {
                                                if (c <= 50 && (this._blockList[this._touchIndex].getComponent("baseGunNode").initBaseGunNode(-1), 12 == a ? this._blockList[a].getComponent("baseGunNode").levelUp(this._carImgArry1[c]) : this._blockList[a].getComponent("baseGunNode").levelUp(this._carImgArry[c]), this._canTouch = !0, cc.Global.SoundModel.playEffect("levelUp"), cc.Global.userData.blockData[this._touchIndex] = -1, cc.Global.userData.blockData[a] = c, c > cc.Global.userData.maxLevel)) {
                                                    if (cc.Global.userData.maxLevel = c, void 0 !== cc.Global.userData.nowSelectedCarID && (cc.Global.userData.nowSelectedCarID = c), 12 !== a)
                                                        if (-1 !== cc.Global.userData.blockData[12]) {
                                                            var i = this._blockList[12].getComponent("baseGunNode")._price,
                                                                l = this._blockList[12].getComponent("baseGunNode").getType(),
                                                                n = this._blockList[a].getComponent("baseGunNode")._price;
                                                            this._blockList[12].getComponent("baseGunNode").initBaseGunNode(c, this._carImgArry1[c], i, !0), this._blockList[a].getComponent("baseGunNode").initBaseGunNode(l, this._carImgArry[l], n, !1), cc.Global.userData.blockData[12] = c, cc.Global.userData.blockData[a] = l
                                                        } else {
                                                            var s = this._blockList[a].getComponent("baseGunNode")._price;
                                                            this._blockList[a].getComponent("baseGunNode").initBaseGunNode(-1), this._blockList[12].getComponent("baseGunNode").initBaseGunNode(c, this._carImgArry1[c], s, !0), cc.Global.userData.blockData[a] = -1, cc.Global.userData.blockData[12] = c
                                                        } cc.Global.app.updateMyContext(), (cc.Global.userData.maxLevel < 2 || cc.Global.shareEnable) && cc.Global.unLockNewCarLayer.showUnLockCarLayer(c)
                                                }
                                            } else this._canTouch = !0
                                        } else {
                                            i = this._blockList[this._touchIndex].getComponent("baseGunNode")._price, n = this._blockList[a].getComponent("baseGunNode")._price;
                                            12 == this._touchIndex ? this._blockList[this._touchIndex].getComponent("baseGunNode").initBaseGunNode(o, this._carImgArry1[o], n, 12 === this._touchIndex) : this._blockList[this._touchIndex].getComponent("baseGunNode").initBaseGunNode(o, this._carImgArry[o], n, 12 === this._touchIndex), 12 == a ? this._blockList[a].getComponent("baseGunNode").initBaseGunNode(this._touchType, this._carImgArry1[this._touchType], i, 12 === a) : this._blockList[a].getComponent("baseGunNode").initBaseGunNode(this._touchType, this._carImgArry[this._touchType], i, 12 === a), cc.Global.userData.blockData[this._touchIndex] = o, cc.Global.userData.blockData[a] = this._touchType
                                        }
                                    else {
                                        i = this._blockList[this._touchIndex].getComponent("baseGunNode")._price;
                                        this._blockList[this._touchIndex].getComponent("baseGunNode").initBaseGunNode(-1), 12 == a ? this._blockList[a].getComponent("baseGunNode").initBaseGunNode(this._touchType, this._carImgArry1[this._touchType], i, 12 === a) : this._blockList[a].getComponent("baseGunNode").initBaseGunNode(this._touchType, this._carImgArry[this._touchType], i, 12 === a), cc.Global.userData.blockData[this._touchIndex] = -1, cc.Global.userData.blockData[a] = this._touchType
                                    }
                                    cc.Global.app.updateMyContext()
                                }
                                break
                            } if (this.node.getChildByName("mainScene").getChildByName("bottomNode").getChildByName("delete").getBoundingBox().contains(e.sub(this.node.getChildByName("mainScene").getChildByName("bottomNode").position))) {
                            i = this._blockList[this._touchIndex].getComponent("baseGunNode")._price;
                            this._blockList[this._touchIndex].getComponent("baseGunNode").initBaseGunNode(-1), cc.Global.userData.goldCoins += .8 * i, cc.Global.userData.totalGoldCoins += .8 * i, cc.Global.userData.blockData[this._touchIndex] = -1, cc.Global.app.updateMyContext(), this.updateGoldLabel();
                            var r = this.node.getChildByName("mainScene").getChildByName("bottomNode").getChildByName("deleteShowGun");
                            r.active = !0, r.scale = 1, r.stopAllActions(), r.position = this.node.getChildByName("mainScene").getChildByName("bottomNode").getChildByName("delete").position, r.getComponent(cc.Sprite).spriteFrame = this._carImgArry[this._touchType], r.runAction(cc.sequence(cc.scaleTo(.3, 0), cc.delayTime(.5), cc.callFunc(function() {
                                t.node.getChildByName("mainScene").getChildByName("airdropNode").active = t._isShowAir, cc.log("cc.Global.airdropLayer._isShow", t._isShowAir)
                            })))
                        } else this.node.getChildByName("mainScene").getChildByName("airdropNode").active = this._isShowAir;
                        this.touchShowCar.active = !1, this._touchIndex = -1, this._touchType = -1
                    }
                }
            },
            createCar: function() {
                cc.log("createCar"), this._bIsCareteCar = !0;
                cc.Global.userData.maxLevel;
                this.randBuyCarData();
                var e = this.node.getChildByName("mainScene").getChildByName("blockListNode").getChildByName("baseGunNode"),
                    t = e.parent;
                e.position = this._blockPosList[0];
                var a = cc.Global.userData.blockData[0];
                e.getComponent("baseGunNode").initBaseGunNode(a, this._carImgArry[a]), this._blockList[0] = e;
                for (var o = 1; o < 13; o++) {
                    var c = cc.instantiate(e);
                    a = cc.Global.userData.blockData[o], 12 == o ? c.getComponent("baseGunNode").initBaseGunNode(a, this._carImgArry1[a], !1, 12 === o) : c.getComponent("baseGunNode").initBaseGunNode(a, this._carImgArry[a], !1, 12 === o), c.position = this._blockPosList[o], t.addChild(c), this._blockList.push(c)
                }
            },
            showHome: function() {
                if (this.freeTip(), this.libaoTip(), this.node.getChildByName("mainScene").getChildByName("bottomNode").getChildByName("bnt_12").active = cc.Global.shareEnable, this.node.getChildByName("mainScene").getChildByName("bottomNode").getChildByName("bnt_15").active = cc.Global.shareEnable, this.node.getChildByName("mainScene").getChildByName("bottomNode").getChildByName("bnt_14").active = cc.Global.shareEnable, cc.Global.userData.maxLevel > 8 && !cc.Global.userData.ifisGunGift && (cc.Global.userData.ifisGunGift = !0, cc.Global.app.updateMyContext()), this.node.getChildByName("mainScene").getChildByName("gunGift").active = !cc.Global.userData.ifisGunGift, cc.Global.shareEnable) {
                    var e = localStorage.getItem("leaveGameTime");
                    if (void 0 != e && "" != e) {
                        var t = cc.Global.gett() - e;
                        if (t > 12e4) {
                            var a = t - 12e4;
                            a > 144e5 && (a = 144e5);
                            var o = a / 1e3 * this.getAllCarProfit();
                            cc.Global.offlineRevenueLayer.showOfflineRevenueLayer(o)
                        }
                        localStorage.removeItem("leaveGameTime")
                    }
                }
                this.updateGoldLabel(), cc.Global.shareEnable && cc.Global.isSignIn && !cc.Global.isGuide && cc.Global.signInLayer.showSignInLayer(), cc.sys.platform, cc.sys.WECHAT_GAME, this.node.getChildByName("mainScene").getChildByName("bottomNode").getChildByName("autoMerge").active = cc.Global.shareEnable, this.node.getChildByName("mainScene").getChildByName("turnTable").active = cc.Global.shareEnable, this.node.getChildByName("mainScene").getChildByName("airdropIcon").active = cc.Global.shareEnable, this.node.getChildByName("mainScene").getChildByName("bottomNode").getChildByName("bnt_15").active = cc.Global.shareEnable, this.node.getChildByName("mainScene").getChildByName("airdropNode").active = !1, this.node.getChildByName("mainScene").getChildByName("playTest").active = !1, this.updateMoreGameNode()
            },
            updateMoreGameNode: function() {
                var e = this.node.getChildByName("moreGameNode"),
                    t = this.node.getChildByName("mainScene").getChildByName("leave");
                e && (e.active = !1, e.stopAllActions()), t && (t.active = !1)
            },
            loadMoreGameInfo: function(e) {},
            moreGameClick: function() {},
            rankButtonClick: function() {
                cc.Global.SoundModel.playEffect("click"), cc.sys.platform == cc.sys.WECHAT_GAME && (wx.postMessage({
                    messageType: 3,
                    MAIN_MENU_NUM: "score",
                    score: cc.Global.userData.totalGoldCoins
                }), wx.postMessage({
                    messageType: 3,
                    MAIN_MENU_NUM: "car",
                    score: cc.Global.userData.maxLevel
                })), cc.Global.rankLayer.rankShow()
            },
            openSoundButtonClick: function() {
                cc.Global.SoundModel.openEffect(), cc.Global.setlocalStorage("isSoundEffect", "true"), cc.Global.SoundModel.playEffect("click"), this.node.getChildByName("mainScene").getChildByName("yinxiao").active = !0, this.node.getChildByName("mainScene").getChildByName("yinxiao1").active = !1
            },
            closeSoundButtonClick: function() {
                cc.Global.SoundModel.closeEffect(), cc.Global.SoundModel.closeMusic(), cc.Global.SoundModel.playEffect("click"), cc.Global.setlocalStorage("isSoundEffect", "false"), this.node.getChildByName("mainScene").getChildByName("yinxiao").active = !1, this.node.getChildByName("mainScene").getChildByName("yinxiao1").active = !0
            },
            updateGoldLabel: function() {
                this.node.getChildByName("mainScene").getChildByName("goldNode").getChildByName("goldNumLabel").getComponent(cc.Label).string = cc.Global.moneyToChange(cc.Global.userData.goldCoins), this.node.getChildByName("mainScene").getChildByName("goldNode").getChildByName("goldAddLabel").getComponent(cc.Label).string = "+" + cc.Global.moneyToChange(this.getAllCarProfit() * ((cc.Global.buffLayer.getIsOpenBuff() ? 5 : 1) + cc.Global.userData.goldAddition)) + "/s", this.node.getChildByName("mainScene").getChildByName("14_im_an").getChildByName("Label").getComponent(cc.Label).string = 100 * cc.Global.moneyToChange((cc.Global.buffLayer.getIsOpenBuff() ? 5 : 1) * (0 === cc.Global.userData.goldAddition ? 1 : cc.Global.userData.goldAddition)) + "%", this.node.getChildByName("mainScene").getChildByName("gemNode").getChildByName("goldNumLabel").getComponent(cc.Label).string = cc.Global.moneyToChange(cc.Global.userData.gemCoins)
            },
            startButtonClick: function() {
                cc.Global.SoundModel.playEffect("click");
                var e = cc.Global.userData.blockData[12];
                if (-1 != e) {
                    var t = e;
                    cc.Global.levelLayer.showLevelLayer(t)
                } else cc.Global.showTip("Khu triển lãm nhất định phải có súng!")
            },
            shootingRangeButtonClick: function() {
                cc.Global.SoundModel.playEffect("click");
                var e = cc.Global.userData.blockData[12];
                if (-1 != e) {
                    var t = e;
                    cc.Global.gameLayer.enterGame(cc.Global.gunConfig[t], !0)
                } else cc.Global.showTip("Khu triển lãm nhất định phải có súng!")
            },
            settingClick: function() {
                cc.Global.SoundModel.playEffect("click"), cc.Global.settingLayer.settingShow(!0)
            },
            gunGiftClick: function() {
                cc.Global.SoundModel.playEffect("click"), cc.Global.gunGiftLayer.gunGiftShow()
            },
            randBuyCarData: function() {
                var e = cc.Global.userData.maxLevel,
                    t = 0;
                e >= 25 ? t = e - 6 : e >= 5 && (t = e - 5);
                var a = cc.Global.userData.carShopBuyCount[t],
                    o = 1;
                o = t > 3 ? Math.pow(1.175, a) : Math.pow(1.07, a);
                var c = cc.Global.gameConfig.carPrice_gold[t] * o,
                    i = "lv." + (t + 1) + " " + cc.Global.moneyToChange(c);
                this.node.getChildByName("mainScene").getChildByName("bottomNode").getChildByName("bnt_16").getChildByName("Label").getComponent(cc.Label).string = i, this._nowBuyCarType = t, this._nowBuyCarGold = c
            },
            checkEmpty: function() {
                for (var e = 0; e < 12; e++) {
                    if (this._blockList[e])
                        if (-1 === this._blockList[e].getComponent("baseGunNode").getType()) return e
                }
                return -1
            },
            addCar: function(e, t) {
                var a = cc.Global.userData.carShopBuyCount[this._touchType],
                    o = 1;
                o = e > 2 ? Math.pow(1.175, a) : Math.pow(1.07, a), t = t || cc.Global.gameConfig.carPrice_gold[this._touchType] * o;
                for (var c = 0; c < 13; c++) {
                    if (this._blockList[c])
                        if (-1 === this._blockList[c].getComponent("baseGunNode").getType()) return 12 === c ? this._blockList[c].getComponent("baseGunNode").initBaseGunNode(e, this._carImgArry1[e], t, 12 === c) : this._blockList[c].getComponent("baseGunNode").initBaseGunNode(e, this._carImgArry[e], t, 12 === c), cc.Global.userData.blockData[c] = e, cc.Global.app.updateMyContext(), !0
                }
                return cc.Global.showTip("Ba lô đã đầy! Vui lòng kết hợp hoặc tái chế súng"), !1
            },
            buyCarButtomClick: function(e) {
                cc.Global.SoundModel.playEffect("click"), cc.Global.isGuide && (cc.Global.guideLayer.node.active = !0, cc.Global.guideLayer.updateStep(2), cc.Global.app.reportEvent(1, 4)), this._nowBuyCarGold > cc.Global.userData.goldCoins ? cc.Global.userData.notEnoughGoldCount < 5 ? cc.Global.notEnoughGoldLayer.showNotEnoughGoldLayer() : cc.Global.showTip("Thiếu vàng") : this.addCar(this._nowBuyCarType, this._nowBuyCarGold) && (cc.Global.SoundModel.playEffect("buyCar"), cc.Global.userData.goldCoins -= this._nowBuyCarGold, cc.Global.userData.carShopBuyCount[this._nowBuyCarType]++, cc.Global.app.updateMyContext(), this.updateGoldLabel(), cc.Global.userData.maxLevel > 1 && cc.Global.shareEnable && (this._buyCarCount++, this._buyCarCount >= 10 && -1 !== this.checkEmpty() && (this._buyCarCount = 0))), this.randBuyCarData()
            },
            getAllCarProfit: function() {
                for (var e = 0, t = 0; t < 13; t++) this._blockList[t] && -1 !== this._blockList[t].getComponent("baseGunNode").getType() && (e += this._blockList[t].getComponent("baseGunNode").getEarningsPerSecond());
                return e
            },
            carShopClick: function() {
                cc.Global.SoundModel.playEffect("click"), cc.Global.gunShopLayer.showGunShopLayer()
            },
            changeCarClick: function() {
                cc.Global.SoundModel.playEffect("click")
            },
            setNowSelectedCar: function(e) {},
            buffClick: function() {
                cc.Global.SoundModel.playEffect("click"), cc.Global.buffLayer.showBuffLayer()
            },
            airdropIconClick: function() {
                0 !== this.node.getChildByName("mainScene").getChildByName("airdropIcon").opacity && (cc.Global.SoundModel.playEffect("click"), cc.Global.airdropLayer.showAirdropLayer())
            },
            airdropIconStarCD: function() {
                var e = this;
                this.node.getChildByName("mainScene").getChildByName("airdropIcon").opacity = 0, this.node.getChildByName("mainScene").getChildByName("airdropIcon").runAction(cc.sequence(cc.delayTime(60), cc.callFunc(function() {
                    cc.Global.userData.airdropCount > 10 || (e.node.getChildByName("mainScene").getChildByName("airdropNode").activeInHierarchy ? e.airdropIconStarCD() : (e.node.getChildByName("mainScene").getChildByName("airdropIcon").opacity = 255, cc.Global.SoundModel.playEffect("showairdrop")))
                })))
            },
            addGold: function() {
                cc.Global.userData.goldCoins *= 100, cc.Global.app.updateMyContext(), this.updateGoldLabel()
            },
            addDiamond: function() {
                cc.Global.userData.gemCoins += 100, cc.Global.userData.gemCoins *= 100, cc.Global.app.updateMyContext(), this.updateGoldLabel()
            },
            checlInClick: function() {
                cc.Global.SoundModel.playEffect("click"), cc.Global.checkInLayer.showCheckInLayer()
            },
            libaoClick: function() {
                cc.Global.SoundModel.playEffect("click"), cc.Global.libaoLayer.showLibaoLayer()
            },
            showAirdropNode: function() {
                this.node.getChildByName("mainScene").getChildByName("airdropNode").active = !0, this.node.getChildByName("mainScene").getChildByName("airdropNode").getChildByName("icon").getChildByName("Label").getComponent(cc.Label).string = cc.Global.randombt(10, 15)
            },
            airdropNodeClick: function(e) {
                var t = e.target,
                    a = 1 * t.getChildByName("icon").getChildByName("Label").getComponent(cc.Label).string,
                    o = cc.Global.userData.airGunLv - 1;
                o < cc.Global.userData.maxLevel - 6 && (o = cc.Global.userData.maxLevel - 6), o < 0 && (o = 0), this.addCar(o) && a--, t.getChildByName("icon").getChildByName("Label").getComponent(cc.Label).string = a, a <= 0 && (this.node.getChildByName("mainScene").getChildByName("airdropNode").active = !1, this._isShowAir = !1)
            }
        }, "settingClick", function() {
            cc.Global.settingLayer.settingShow(!0)
        }), c(o, "openAutoMergeClick", function() {
            var e = this;
            if (cc.Global.SoundModel.playEffect("click"), window.h5api) cc.Global.videoTipLayer.showVideoTipLayer(function() {
                cc.Global.app.videoOrShare(function(t) {
                    if (t) {
                        e.openAutoMerge(180)
                    }
                })
            });
            else if (this._isAotuMerge) cc.Global.showTip("Bật chế độ Tổng hợp tự động");
            else if (cc.Global.isGuide) {
                this.openAutoMerge(60)
            } else cc.Global.app.videoOrShare(function(t) {
                if (t) {
                    e.openAutoMerge(180)
                }
            })
        }), c(o, "updateAutoMergeTime", function() {
            this._autoMergeTime--;
            var e = Math.floor(this._autoMergeTime / 60);
            e < 10 && (e = "0" + e);
            var t = this._autoMergeTime % 60;
            t < 10 && (t = "0" + t), this.node.getChildByName("mainScene").getChildByName("bottomNode").getChildByName("autoMerge").getChildByName("timeLabel").getComponent(cc.Label).string = e + ":" + t
        }), c(o, "openAutoMerge", function(e) {
            var t = this;
            this._autoMergeTime = e, this.schedule(this.autoMerge, 2), this.schedule(this.updateAutoMergeTime, 1), this._isAotuMerge = !0, this.node.getChildByName("mainScene").getChildByName("bottomNode").getChildByName("autoMerge").getChildByName("timeLabel").active = !0, this.updateAutoMergeTime(), this.node.getChildByName("mainScene").getChildByName("bottomNode").getChildByName("autoMerge").getChildByName("titleSprite").active = !1, setTimeout(function() {
                t.node.getChildByName("mainScene").getChildByName("bottomNode").getChildByName("autoMerge").getChildByName("timeLabel").active = !1, t.node.getChildByName("mainScene").getChildByName("bottomNode").getChildByName("autoMerge").getChildByName("titleSprite").active = !0, t.unschedule(t.autoMerge), t.unschedule(t.updateAutoMergeTime), t._isAotuMerge = !1
            }, 1e3 * e)
        }), c(o, "autoMerge", function() {
            var e = this;
            if (!cc.Global.unLockNewCarLayer.node.activeInHierarchy) {
                var t = this.node.getChildByName("mainScene").getChildByName("aotuMergeShowGun"),
                    a = 12;
                if (-1 !== (i = this._blockList[a].getComponent("baseGunNode").getType()) && this._touchIndex !== a)
                    for (var o = 0; o < 12; o++)
                        if (i === this._blockList[o].getComponent("baseGunNode").getType() && this._touchIndex !== o) {
                            var c = cc.Global._getDistance(this._blockPosList[a], this._blockPosList[o]) / 800;
                            return t.active = !0, t.position = this._blockPosList[o], t.getComponent(cc.Sprite).spriteFrame = this._carImgArry[this._blockList[o].getComponent("baseGunNode").getType()], this._blockList[o].getComponent("baseGunNode").selected(), this._autoMergeIndex = [a, o], void t.runAction(cc.sequence(cc.moveTo(c, this._blockPosList[a]), cc.callFunc(function() {
                                t.active = !1, e._autoMergeIndex = [], e._blockList[o].getComponent("baseGunNode").uncheck();
                                var c = i + 1;
                                e._blockList[a].getComponent("baseGunNode").levelUp(e._carImgArry[c]), e._blockList[o].getComponent("baseGunNode").initBaseGunNode(-1), cc.Global.SoundModel.playEffect("levelUp"), cc.Global.userData.blockData[o] = -1, cc.Global.userData.blockData[a] = c, e._blockList[o].position = e._blockPosList[o], c > cc.Global.userData.maxLevel && (cc.Global.userData.maxLevel = c, void 0 !== cc.Global.userData.nowSelectedCarID && (cc.Global.userData.nowSelectedCarID = c), cc.Global.app.updateMyContext(), (cc.Global.userData.maxLevel < 2 || cc.Global.shareEnable) && cc.Global.unLockNewCarLayer.showUnLockCarLayer(c))
                            })))
                        } for (a = 0; a < 12; a++) {
                    var i;
                    if (-1 !== (i = this._blockList[a].getComponent("baseGunNode").getType()) && this._touchIndex !== a)
                        for (o = a + 1; o < 13; o++)
                            if (i === this._blockList[o].getComponent("baseGunNode").getType() && this._touchIndex !== o) {
                                c = cc.Global._getDistance(this._blockPosList[a], this._blockPosList[o]) / 800;
                                return t.active = !0, t.position = this._blockPosList[o], t.getComponent(cc.Sprite).spriteFrame = this._carImgArry[this._blockList[o].getComponent("baseGunNode").getType()], this._blockList[o].getComponent("baseGunNode").selected(), this._autoMergeIndex = [a, o], void t.runAction(cc.sequence(cc.moveTo(c, this._blockPosList[a]), cc.callFunc(function() {
                                    t.active = !1, e._autoMergeIndex = [], e._blockList[o].getComponent("baseGunNode").uncheck();
                                    var c = i + 1;
                                    e._blockList[a].getComponent("baseGunNode").levelUp(e._carImgArry[c]), e._blockList[o].getComponent("baseGunNode").initBaseGunNode(-1), cc.Global.SoundModel.playEffect("levelUp"), cc.Global.userData.blockData[o] = -1, cc.Global.userData.blockData[a] = c, e._blockList[o].position = e._blockPosList[o], c > cc.Global.userData.maxLevel && (cc.Global.userData.maxLevel = c, void 0 !== cc.Global.userData.nowSelectedCarID && (cc.Global.userData.nowSelectedCarID = c), cc.Global.app.updateMyContext(), (cc.Global.userData.maxLevel < 2 || cc.Global.shareEnable) && cc.Global.unLockNewCarLayer.showUnLockCarLayer(c))
                                })))
                            }
                }
            }
        }), o)), cc._RF.pop()
    }, {}],
    hotLayer: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "7dd46lFhfBCaZpeFyD8goYv", "hotLayer"), cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            showHotLayer: function() {
                this.node.active = !1
            },
            hideHotLayer: function(e) {
                this.node.active = !1
            },
            closeClick: function() {
                this.hideHotLayer()
            }
        }), cc._RF.pop()
    }, {}],
    levelLayer: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "25f73DY3jBD4J9nQJtgtDSD", "levelLayer"), cc.Class({
            extends: cc.Component,
            properties: {
                _gunType: null
            },
            start: function() {},
            showLevelLayer: function(e) {
                this.node.active = !0, this._gunType = e, cc.Global.isGuide && (cc.Global.guideLayer.node.active = !0, cc.Global.guideLayer.updateStep(5), cc.Global.app.reportEvent(1, 8)), cc.Global.isGuide || cc.Global.app.showBannerOrSuggest(), this.node.getChildByName("frame").setScale(0), this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("frame").runAction(cc.scaleTo(.5, 1).easing(cc.easeBackOut()));
                var t = e;
                t >= cc.Global.gunConfig.length && (t = cc.Global.gunConfig.length - 1), this._gunData = cc.Global.gunConfig[t];
                var a = cc.Global.userData.gameLevel;
                this.node.getChildByName("frame").getChildByName("nowLevelLabel").getComponent(cc.Label).string = a + 1, this.node.getChildByName("frame").getChildByName("shangLevelLabel").getComponent(cc.Label).string = a, this.node.getChildByName("frame").getChildByName("xiaLevelLabel").getComponent(cc.Label).string = a + 2, this.node.getChildByName("frame").getChildByName("gunIcon").getComponent(cc.Sprite).spriteFrame = cc.Global.gunBigImgArry[this._gunData.level], this.node.getChildByName("frame").getChildByName("gunNameLabel").getComponent(cc.Label).string = cc.Global.gunConfig[this._gunData.level].name;
                var o = this.node.getChildByName("frame").getChildByName("zhuanEffD").getComponent(dragonBones.ArmatureDisplay);
                o && o.playAnimation("play", 0), this.node.getChildByName("frame").getChildByName("desLabel1").getComponent(cc.Label).string = this._gunData.gunPower, this.node.getChildByName("frame").getChildByName("desLabel2").getComponent(cc.Label).string = this._gunData.bulletCapacity, this.node.getChildByName("frame").getChildByName("desLabel3").getComponent(cc.Label).string = this._gunData.gunRecoil, this.node.getChildByName("frame").getChildByName("16_tzcg_bnt1").width = (this._gunData.gunPower + 20) / 70 * 278 > 278 ? 278 : (this._gunData.gunPower + 20) / 70 * 278, this.node.getChildByName("frame").getChildByName("16_tzcg_bnt2").width = this._gunData.bulletCapacity / 200 * 278, this.node.getChildByName("frame").getChildByName("16_tzcg_bnt3").width = this._gunData.gunRecoil / 20 * 278
            },
            hideLevelLayer: function(e) {
                var t = this;
                this.node.getChildByName("frame").getNumberOfRunningActions() > 0 || (cc.Global.hideBannerOrSuggest(), this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("frame").runAction(cc.sequence(cc.scaleTo(.5, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
                    t.node.active = !1, e && "function" == typeof e && e()
                }))))
            },
            closeClick: function() {
                cc.Global.SoundModel.playEffect("click"), this.hideLevelLayer()
            },
            lastGun: function() {
                this._gunType > 0 && (this._gunType--, cc.Global.hideBannerOrSuggest(), this.showLevelLayer(this._gunType))
            },
            nextGun: function() {
                this._gunType < cc.Global.userData.maxLevel && (this._gunType++, cc.Global.hideBannerOrSuggest(), this.showLevelLayer(this._gunType))
            },
            starClick: function() {
                cc.Global.hideBannerOrSuggest(), cc.Global.SoundModel.playEffect("click"), this.node.active = !1, cc.Global.isGuide && (cc.Global.isGuide = !1, cc.Global.guideLayer.node.active = !1, cc.Global.app.reportEvent(1, 7)), cc.Global.gameLayer.enterGame(this._gunData, !1)
            }
        }), cc._RF.pop()
    }, {}],
    libaoLayer: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "fb622riNiVIzayAISdkhB9f", "libaoLayer"), cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            showLibaoLayer: function() {
                var e = this;
                this.node.active = !0;
                var t = this.node.getChildByName("frame").getChildByName("videoReward").getChildByName("zi_4").getComponent(cc.Button),
                    a = this.node.getChildByName("frame").getChildByName("videoReward").getChildByName("countLabel").getComponent(cc.Label);
                cc.Global.userData.lookVideoADCount <= 0 && (t.interactable = !1), t.interactable = !0, this.node.getChildByName("frame").setScale(0), this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("frame").runAction(cc.scaleTo(.5, 1).easing(cc.easeBackOut())), a.string = "Số lần còn lại: " + cc.Global.userData.lookVideoADCount, cc.Global.app.showBannerOrSuggest(), cc.Global.canPlayAdInFTNN(function(t) {
                    e.node.getChildByName("frame").getChildByName("videoReward").getChildByName("zi_4").getChildByName("videoIcon").active = !!t
                })
            },
            hideLibaoLayer: function() {
                var e = this;
                this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("frame").runAction(cc.sequence(cc.scaleTo(.5, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
                    e.node.active = !1
                }))), cc.Global.hideBannerOrSuggest(), cc.Global.homeLayer.libaoTip()
            },
            closeClick: function() {
                cc.Global.SoundModel.playEffect("click"), cc.Global.homeLayer.freeTip(), this.hideLibaoLayer()
            },
            getClick: function() {
                var e = this;
                if (cc.Global.SoundModel.playEffect("click"), cc.Global.userData.lookVideoADCount <= 0) cc.Global.showTip("Lượt hôm nay đã hết!");
                else {
                    var t = this;
                    cc.Global.app.reportEvent(9, 1), cc.Global.app.videoOrShare(function(a) {
                        a && (cc.Global.app.reportEvent(9, 2), cc.Global.showTip("Kim cương+100"), cc.Global.userData.lookVideoADCount--, e.node.getChildByName("frame").getChildByName("videoReward").getChildByName("countLabel").getComponent(cc.Label).string = "Số lần còn lại: " + cc.Global.userData.lookVideoADCount, cc.Global.userData.gemCoins += 100, cc.Global.app.updateMyContext(), cc.Global.homeLayer.updateGoldLabel(), cc.Global.showGetGemEff(cc.v2(0, 120), t.node, function() {
                            0 === cc.Global.userData.lookVideoADCount && (e.node.getChildByName("frame").getChildByName("videoReward").getChildByName("zi_4").getComponent(cc.Button).interactable = !1)
                        }))
                    })
                }
            },
            shareClick: function() {
                var e = this;
                if (cc.Global.SoundModel.playEffect("click"), cc.Global.userData.shareCount <= 0) cc.Global.showTip("Lượt hôm nay đã hết!");
                else {
                    var t = this;
                    cc.Global.shareClick(function(a) {
                        cc.Global.app.reportEvent(10, 1), a && (cc.Global.showTip("Kim cương+50"), cc.Global.userData.shareCount--, e.node.getChildByName("frame").getChildByName("shareReward").getChildByName("countLabel").getComponent(cc.Label).string = "Số lần còn lại: " + cc.Global.userData.shareCount, cc.Global.userData.gemCoins += 50, cc.Global.app.updateMyContext(), cc.Global.homeLayer.updateGoldLabel(), cc.Global.showGetGemEff(cc.v2(0, 120), t.node, function() {
                            0 === cc.Global.userData.shareCount && (e.node.getChildByName("frame").getChildByName("shareReward").getChildByName("zi_4").getComponent(cc.Button).interactable = !1)
                        }))
                    })
                }
            }
        }), cc._RF.pop()
    }, {}],
    loading: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "f14f1c92ltI6qlj/eCe1yNd", "loading"), cc.Class({
            extends: cc.Component,
            properties: {
                perent_lable: cc.Label,
                _time: null
            },
            onLoad: function() {
                this._fakePerent = 0, this.schedule(this.fakePerentFunc, .2), this.perent_lable.string = "loading.", cc.audioEngine.play(cc.url.raw("resources/audio/shot43.mp3"), !1, 1)
            },
            fakePerentFunc: function() {
                0 === this._fakePerent ? (this.perent_lable.string = "Đang tải.", this._fakePerent++) : 1 === this._fakePerent ? (this.perent_lable.string = "Đang tải..", this._fakePerent++) : 2 === this._fakePerent && (this.perent_lable.string = "Đang tải...", this._fakePerent = 0)
            },
            start: function() {
                for (var e = ["click.mp3", "buyCar.mp3", "getGoldorGem.mp3", "getReward.mp3", "levelUp.mp3", "countdown.mp3", "drift.mp3", "death.mp3", "brokenGlass.mp3", "brokenWood.mp3", "changeClip.mp3", "getGem.mp3", "shot.mp3", "shotGlass.mp3", "shotWood.mp3", "showairdrop.mp3", "shot11.mp3", "shot12.mp3", "shot13.mp3", "shot14.mp3", "shot15.mp3", "shot16.mp3", "shot21.mp3", "shot22.mp3", "shot23.mp3", "shot24.mp3", "shot25.mp3", "shot26.mp3", "shot27.mp3", "shot28.mp3", "shot29.mp3", "shot31.mp3", "shot41.mp3", "shot42.mp3", "shot43.mp3"], t = 0; t < e.length; t++) cc.audioEngine.play(cc.url.raw("resources/audio/" + e[t]), !1, 0);
                for (var a = 0; a < 50; a++) cc.Global.gunImgArry.push(null), cc.Global.gunBigImgArry.push(null), cc.loader.loadRes("gun/" + (a + 1), cc.SpriteFrame, function(e, t) {
                    if (e) console.log("load car img Err", e);
                    else {
                        var a = parseInt(t._name) - 1;
                        cc.Global.gunImgArry[a] = t
                    }
                }), cc.loader.loadRes("gunBig/" + (a + 1), cc.SpriteFrame, function(e, t) {
                    if (e) console.log("load car img Err", e);
                    else {
                        var a = parseInt(t._name) - 1;
                        cc.Global.gunBigImgArry[a] = t
                    }
                });
                cc.loader.loadRes("config/tsconfig", cc.RawAsset, function(e, t) {
                    e ? (cc.log("loader gameConfig err", e), cc.log("loader gameConfig res", t)) : (cc.Global.gameConfig = t.json, cc.log("cc.Global.gameConfig", cc.Global.gameConfig))
                }), cc.loader.loadRes("config/gunConfig", cc.RawAsset, function(e, t) {
                    e ? (cc.log("loader gunConfig err", e), cc.log("loader gunConfig res", t)) : (cc.Global.gunConfig = t.json.data, cc.log("cc.Global.gunConfig", cc.Global.gunConfig))
                }), cc.loader.loadRes("config/obstacleConfig", cc.RawAsset, function(e, t) {
                    e ? (cc.log("loader obstacleConfig err", e), cc.log("loader obstacleConfig res", t)) : (cc.Global.obstacleConfig = t.json.data, cc.log("cc.Global.obstacleConfig", cc.Global.obstacleConfig))
                });
                cc.director.preloadScene("helloworld", function() {
                    cc.director.loadScene("helloworld")
                })
            },
            onDestroy: function() {
                this.unschedule(this.fakePerentFunc)
            }
        }), cc._RF.pop()
    }, {}],
    moreGameLayer: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "b8145+zWOhO06A0ySt3U/E9", "moreGameLayer"), cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {}
        }), cc._RF.pop()
    }, {}],
    notEnoughGoldLayer: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "c6804EX8pNFjrEvwAFn3qB2", "notEnoughGoldLayer"), cc.Class({
            extends: cc.Component,
            properties: {
                _rewardGold: 0
            },
            start: function() {},
            showNotEnoughGoldLayer: function() {
                var e = this;
                cc.Global.shareEnable && (this.node.active = !0, this.node.getChildByName("frame").getChildByName("Button").getChildByName("icon").active = !cc.Global.allVideo, this.node.getChildByName("frame").getChildByName("Button").getChildByName("videoIcon").active = cc.Global.allVideo, this._rewardGold = cc.Global.homeLayer.getAllCarProfit() * (cc.Global.buffLayer.getIsOpenBuff() ? 5 : 1) * (0 === cc.Global.userData.goldAddition ? 1 : cc.Global.userData.goldAddition) * 600, this.node.getChildByName("frame").getChildByName("numLabel").getComponent(cc.Label).string = cc.Global.moneyToChange(this._rewardGold), this.node.getChildByName("frame").setScale(0), this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("frame").runAction(cc.scaleTo(.5, 1).easing(cc.easeBackOut())), !cc.Global.IsNoBanner && cc.Global.bannerAd && cc.Global.isStrongShare && cc.Global.userData.maxLevel > 19 ? cc.Global.bannerAd.show() : cc.Global.isStrongShare && cc.Global.userData.maxLevel > 19 && cc.Global.showBannerAD(), cc.Global.canPlayAdInFTNN(function(t) {
                    t ? (e.node.getChildByName("frame").getChildByName("Button").getChildByName("icon").active = !cc.Global.allVideo, e.node.getChildByName("frame").getChildByName("Button").getChildByName("videoIcon").active = cc.Global.allVideo) : (e.node.getChildByName("frame").getChildByName("Button").getChildByName("icon").active = !1, e.node.getChildByName("frame").getChildByName("Button").getChildByName("videoIcon").active = !1)
                }))
            },
            hideNotEnoughGoldLayer: function(e) {
                var t = this;
                this.node.getChildByName("frame").getNumberOfRunningActions() > 0 || (this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("frame").runAction(cc.sequence(cc.scaleTo(.5, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
                    t.node.active = !1, e && "function" == typeof e && e()
                }))), cc.Global.hideBannerOrSuggest())
            },
            update: function() {},
            getButtonClick: function() {
                var e = this;
                cc.Global.SoundModel.playEffect("click");
                var t = this;
                cc.Global.app.videoOrShare(function(a) {
                    a && (cc.Global.userData.notEnoughGoldCount++, cc.Global.userData.goldCoins += e._rewardGold, cc.Global.userData.totalGoldCoins += e._rewardGold, cc.Global.app.updateMyContext(), cc.Global.homeLayer.updateGoldLabel(), cc.Global.showGetGoldEff(cc.v2(0, 120), t.node, function() {
                        t.hideNotEnoughGoldLayer()
                    }))
                })
            },
            closeButtonClick: function() {
                cc.Global.SoundModel.playEffect("click"), this.hideNotEnoughGoldLayer()
            }
        }), cc._RF.pop()
    }, {}],
    obstacle: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "2fc93ZtpetPmKbwdIOxMwFf", "obstacle"), cc.Class({
            extends: cc.Component,
            properties: {
                _maxHP: 0,
                _nowHP: 0,
                _type: 0,
                _isSurvive: !0,
                _finishNode: cc.Node
            },
            start: function() {},
            initObstacle: function(e, t) {
                this._maxHP = t, this._nowHP = t, this._type = e;
                for (var a = 0; a < 10; a++) this.node.getChildByName("icon" + a).active = a === e;
                this.node.getChildByName("bulletHole").active = !1, this.node.getChildByName("bulletHoleLayer").removeAllChildren(!0), this._isSurvive = !0, this.node.getChildByName("hpBar").active = !1, this.node.getChildByName("hpBarBg").active = !1, cc.Global.gameLogic._isShootingRange && (this._finishNode = cc.Global.gameLogic.node.getChildByName("shootRangeGameNode").getChildByName("finish"), this._finishNode.active = !1)
            },
            hit: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    a = arguments.length > 2 ? arguments[2] : void 0;
                if (this._nowHP -= t, this._nowHP <= 0) {
                    this.node.getChildByName("icon" + this._type).active = !1, this._isSurvive = !1, this.node.getChildByName("hpBar").active = !1, this.node.getChildByName("hpBarBg").active = !1, this.node.getChildByName("bulletHoleLayer").removeAllChildren(!0);
                    var o = this.node.getChildByName("icon" + this._type + "Dnode");
                    if (o) {
                        o.active = !0;
                        var c = o.getComponent(dragonBones.ArmatureDisplay);
                        c && (c.playAnimation("play", 1), 3 == this._type || 4 == this._type || 6 == this._type ? cc.Global.SoundModel.playEffect("brokenGlass") : 1 == this._type && cc.Global.SoundModel.playEffect("brokenWood"))
                    }
                } else {
                    this.node.getChildByName("hpBar").active = !0, this.node.getChildByName("hpBarBg").active = !0, this.node.getChildByName("hpBar").width = this._nowHP / this._maxHP * 198;
                    var i = this.node.convertToNodeSpaceAR(e);
                    if (cc.Global.gameLogic._isShootingRange) {
                        var l, n = 0;
                        n = Math.ceil(cc.Global.gameLogic._gunData.gunBulletPower * cc.Global.gameLogic._gunData.gunBulletPower) * (cc.Global.userData.shootLevel + 1) * 10, l = 20 * Math.ceil(cc.Global.gameLogic._gunData.gunBulletPower / 10), this.node.getChildByName("hpBar").active = !1, this.node.getChildByName("hpBarBg").active = !1;
                        var s = cc.Global._getDistance(i, cc.v2(21, -53));
                        cc.log("len:", s, e);
                        var r = cc.Global.gameLayer.node.convertToNodeSpaceAR(e).add(cc.v2(0, 90));
                        if (s <= 32 ? (cc.log("10\u73af"), n *= 10, cc.Global.gameLogic._shootScore += l, cc.Global.gameLayer.showRingLabelNun(10, r)) : s < 64 ? (cc.Global.gameLogic._shootScore += Math.ceil(.9 * l), n *= 9, cc.Global.gameLayer.showRingLabelNun(9, r)) : s < 96 ? (n *= 8, cc.Global.gameLogic._shootScore += Math.ceil(.8 * l), cc.Global.gameLayer.showRingLabelNun(8, r)) : s < 128 ? (n *= 7, cc.Global.gameLogic._shootScore += Math.ceil(.7 * l), cc.Global.gameLayer.showRingLabelNun(7, r)) : s < 160 ? (n *= 6, cc.Global.gameLogic._shootScore += Math.ceil(.6 * l), cc.Global.gameLayer.showRingLabelNun(6, r)) : s < 192 && (n *= 5, cc.Global.gameLogic._shootScore += Math.ceil(.5 * l), cc.Global.gameLayer.showRingLabelNun(5, r)), cc.Global.gameLogic._isShootingRange) {
                            s = cc.Global._getDistance(i, cc.v2(21, -53));
                            cc.log("len:", s), s <= 32 ? cc.log("10\u73af") : s < 64 ? cc.log("9\u73af") : s < 96 ? cc.log("8\u73af") : s < 128 ? cc.log("7\u73af") : s < 160 ? cc.log("8\u73af") : s < 192 && cc.log("5\u73af"), cc.Global.gameLogic._shootScore >= cc.Global.gameLogic._targetScore && !this._finishNode.active && (this._finishNode.scale = 2, this._finishNode.active = !0, this._finishNode.runAction(cc.scaleTo(.5, .8))), cc.Global.gameLogic.node.getChildByName("shootRangeGameNode").getChildByName("scoreNode").getChildByName("scoreLabel").getComponent(cc.Label).string = cc.Global.gameLogic._shootScore, cc.Global.gameLogic._shootGold += n, cc.Global.gameLogic.node.getChildByName("shootRangeGameNode").getChildByName("goldNode").getChildByName("goldNumLabel").getComponent(cc.Label).string = cc.Global.moneyToChange(cc.Global.gameLogic._shootGold)
                        }
                        if (a)
                            for (var d = 0; d < 5; d++) {
                                var h;
                                (h = cc.instantiate(this.node.getChildByName("bulletHole"))).active = !0, h.position = i.add(cc.v2(cc.Global.randombt(-30, 30), cc.Global.randombt(-30, 30))), this.node.getChildByName("bulletHoleLayer").addChild(h)
                            } else(h = cc.instantiate(this.node.getChildByName("bulletHole"))).active = !0, h.position = i, this.node.getChildByName("bulletHoleLayer").addChild(h);
                        3 == this._type || 4 == this._type || 6 == this._type || 0 == this._type || 7 == this._type || 8 == this._type ? cc.Global.SoundModel.playEffect("shotGlass") : 1 == this._type && cc.Global.SoundModel.playEffect("shotWood")
                    }
                }
            }
        }), cc._RF.pop()
    }, {}],
    offlineRevenueLayer: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "cfd30iKcHNFZpGHbOw0g9rN", "offlineRevenueLayer"), cc.Class({
            extends: cc.Component,
            properties: {
                _leaveProfit: 0
            },
            start: function() {},
            showOfflineRevenueLayer: function(e) {
                var t = this;
                cc.Global.shareEnable && (cc.Global.isGuide || (this.node.active = !0, this.node.getChildByName("frame").getChildByName("shareButton").getChildByName("goldIcon").active = !cc.Global.allVideo, this.node.getChildByName("frame").getChildByName("shareButton").getChildByName("videoIcon").active = cc.Global.allVideo, this.node.getChildByName("frame").getChildByName("shareButton").runAction(cc.sequence(cc.scaleTo(.5, 1.5), cc.scaleTo(.5, 1.3))).repeatForever(), this.node.getChildByName("frame").setScale(0), this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("frame").runAction(cc.scaleTo(.5, 1).easing(cc.easeBackOut())), this._leaveProfit = new Number(e), this.node.getChildByName("frame").getChildByName("goldLabel").getComponent(cc.Label).string = cc.Global.moneyToChange(this._leaveProfit), this.node.getChildByName("frame").getChildByName("freeButton").getComponent(cc.Button).interactable = !0, this.node.getChildByName("frame").getChildByName("shareButton").getComponent(cc.Button).interactable = !0, cc.Global.app.showBannerOrSuggest(), cc.Global.canPlayAdInFTNN(function(e) {
                    e ? (t.node.getChildByName("frame").getChildByName("shareButton").getChildByName("goldIcon").active = !cc.Global.allVideo, t.node.getChildByName("frame").getChildByName("shareButton").getChildByName("videoIcon").active = cc.Global.allVideo) : (t.node.getChildByName("frame").getChildByName("shareButton").getChildByName("goldIcon").active = !1, t.node.getChildByName("frame").getChildByName("shareButton").getChildByName("videoIcon").active = !1)
                })))
            },
            hideOfflineRevenueLayer: function(e) {
                var t = this;
                this.node.getChildByName("frame").getNumberOfRunningActions() > 0 || (cc.Global.hideBannerOrSuggest(), this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("frame").runAction(cc.sequence(cc.scaleTo(.5, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
                    t.node.active = !1, e && "function" == typeof e && e()
                }))))
            },
            getLeaveProfit: function(e) {
                var t = this;
                cc.Global.userData.goldCoins += e ? 2 * this._leaveProfit.valueOf() : this._leaveProfit, cc.Global.userData.totalGoldCoins += e ? 2 * this._leaveProfit.valueOf() : this._leaveProfit, cc.Global.app.updateMyContext(), cc.Global.homeLayer.updateGoldLabel(), e ? cc.Global.showGetGoldEff(cc.v2(0, 120), t.node, function() {
                    t.hideOfflineRevenueLayer()
                }) : (t.hideOfflineRevenueLayer(), cc.Global.hotLayer.showHotLayer())
            },
            getClick: function(e) {
                cc.Global.SoundModel.playEffect("click"), e.target.getComponent(cc.Button).interactable = !1, this.node.getChildByName("frame").getChildByName("shareButton").getComponent(cc.Button).interactable = !1, this.node.getChildByName("frame").getChildByName("freeButton").getComponent(cc.Button).interactable = !1, this.getLeaveProfit(!1)
            },
            doubleGetClick: function(e) {
                var t = this;
                cc.Global.SoundModel.playEffect("click"), e.target.getComponent(cc.Button).interactable = !1, this.node.getChildByName("frame").getChildByName("freeButton").getComponent(cc.Button).interactable = !1;
                var a = this;
                cc.Global.app.videoOrShare(function(o) {
                    o ? a.getLeaveProfit(!0) : (e.target.getComponent(cc.Button).interactable = !0, t.node.getChildByName("frame").getChildByName("freeButton").getComponent(cc.Button).interactable = !0)
                })
            }
        }), cc._RF.pop()
    }, {}],
    playTestLayer: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "61165J4KlhGUqoCfpUmV1HC", "playTestLayer"), cc.Class({
            extends: cc.Component,
            properties: {
                content: cc.Node,
                daijinItem: cc.Prefab,
                scroller: cc.ScrollView,
                _allList: []
            },
            start: function() {},
            showPlayerTestLayer: function() {
                this.node.active = !1
            }
        }), cc._RF.pop()
    }, {}],
    rankLayer: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "5c46f+eVv9BsJpURrntPqgW", "rankLayer"), cc.Class({
            extends: cc.Component,
            properties: {},
            rankShow: function() {
                this.node.active = !0, this.node.getChildByName("frame").setScale(0), this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("wxSubContextView").active = !0, this.node.getChildByName("frame").runAction(cc.sequence(cc.scaleTo(.5, 1).easing(cc.easeBackOut()), cc.callFunc(function() {}))), this.node.getChildByName("frame").getChildByName("bnt_5").active = !1, this.node.getChildByName("frame").getChildByName("bnt_4").active = !0, cc.sys.platform === cc.sys.WECHAT_GAME && (this.node.getChildByName("wxSubContextView").active = !0, wx.postMessage({
                    messageType: 1,
                    MAIN_MENU_NUM: "score"
                })), cc.Global.app.showBannerOrSuggest()
            },
            rankHide: function() {
                cc.Global.SoundModel.playEffect("click");
                var e = this;
                this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("wxSubContextView").active = !1, cc.Global.hideBannerOrSuggest(), this.node.getChildByName("frame").runAction(cc.sequence(cc.scaleTo(.5, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
                    e.node.active = !1
                })))
            },
            start: function() {},
            goldRankClick: function() {
                cc.Global.SoundModel.playEffect("click"), this.node.getChildByName("frame").getChildByName("bnt_5").activeInHierarchy && (cc.sys.platform === cc.sys.WECHAT_GAME && wx.postMessage({
                    messageType: 1,
                    MAIN_MENU_NUM: "score"
                }), this.node.getChildByName("frame").getChildByName("bnt_5").active = !1, this.node.getChildByName("frame").getChildByName("bnt_4").active = !0)
            },
            carRankClick: function() {
                cc.Global.SoundModel.playEffect("click"), this.node.getChildByName("frame").getChildByName("bnt_4").activeInHierarchy && (cc.sys.platform === cc.sys.WECHAT_GAME && wx.postMessage({
                    messageType: 1,
                    MAIN_MENU_NUM: "car"
                }), this.node.getChildByName("frame").getChildByName("bnt_4").active = !1, this.node.getChildByName("frame").getChildByName("bnt_5").active = !0)
            }
        }), cc._RF.pop()
    }, {}],
    revivalNode: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "f5f23CwgcND+rHz+rRB8toM", "revivalNode"), cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            showRevivaNode: function() {
                cc.Global.shareEnable && (cc.Global.isGuide || (cc.Global.gameLogic.obstacleLayer.pauseAllActions(), cc.Global._showNode(this.node), cc.Global.app.showBannerOrSuggest()))
            },
            hideRevivaNode: function() {
                cc.Global._hideNode(this.node), cc.Global.hideBannerOrSuggest()
            },
            getRewardClick: function() {
                cc.Global.SoundModel.playEffect("click");
                var e = this;
                cc.Global.shareClick(function(t) {
                    t && (e.hideRevivaNode(), cc.Global.gameLayer._gameTime = 16, cc.Global.gameLayer._gameIng = !0, cc.Global.gameLayer.node.getChildByName("countdownLabel").active = !1, cc.Global.gameLogic.obstacleLayer.resumeAllActions())
                })
            },
            closeClick: function() {
                cc.Global.SoundModel.playEffect("click"), this.node.active = !1, cc.Global.hideBannerOrSuggest(), cc.Global.gameOverLayer.showGameOverLayer(2)
            }
        }), cc._RF.pop()
    }, {}],
    settingLayer: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "475b52/5G5ANJQ+E9enPalQ", "settingLayer"), cc.Class({
            extends: cc.Component,
            properties: {
                _appIdList: null
            },
            onLoad: function() {},
            settingShow: function(e) {
                cc.Global.hideBannerOrSuggest(), this.node.active = !0;
                var t = this.node.getChildByName("frame");
                t.active = !0, t.getChildByName("closeButton").active = !e, t.getChildByName("returnButton").active = !e, t.getChildByName("replayButton").active = !e, t.getChildByName("returnHomeButton").active = e, t.setScale(0), t.stopAllActions(), t.runAction(cc.scaleTo(.5, 1).easing(cc.easeBackOut())), t.getChildByName("versionLabel").getComponent(cc.Label).string = "Số phiên bản: v" + cc.Global.codeVersion, cc.Global.app.showBannerOrSuggest();
                var a = t.getChildByName("zhuanchu");
                a && (a.active = !1), t.getChildByName("zhengdong1").active = !0, t.getChildByName("zhengdong2").active = !0
            },
            settingHide: function(e) {
                var t = this;
                this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("frame").runAction(cc.sequence(cc.scaleTo(.5, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
                    t.node.active = !1, e && "function" == typeof e && e()
                }))), cc.Global.hideBannerOrSuggest()
            },
            returnHome: function() {
                cc.Global.SoundModel.playEffect("click"), cc.Global.hideBannerOrSuggest(), cc.Global.homeLayer.node.active = !0, cc.Global.gameLayer.node.active = !1, this.node.active = !1, cc.Global.homeLayer.updateGoldLabel(), cc.Global.gameLayer._isHavePropBall && (1 === cc.Global.gameLayer._isHavePropBall ? cc.Global.userData.bombPropNum-- : 2 === cc.Global.gameLayer._isHavePropBall ? cc.Global.userData.allColorPropNum-- : 3 === cc.Global.gameLayer._isHavePropBall ? cc.Global.userData.transverseLaserPropNum-- : cc.Global.userData.verticalLaserPropNum--, cc.Global.gameLayer._isHavePropBall = null, cc.Global.app.updateMyContext()), cc.Global.shareEnable && cc.Global.isSignIn ? cc.Global.signInLayer.showSignInLayer() : cc.Global.buffLayer.getIsOpenBuff() || !cc.Global.shareEnable || cc.Global.isGuide || cc.Global.buffLayer.showBuffLayer()
            },
            openSoundButtonClick: function() {
                cc.Global.SoundModel.openEffect(), cc.Global.setlocalStorage("isSoundEffect", "true"), cc.Global.SoundModel.playEffect("click"), this.node.getChildByName("frame").getChildByName("yinxiao1").active = !0, this.node.getChildByName("frame").getChildByName("yinxiao2").active = !1
            },
            closeSoundButtonClick: function() {
                cc.Global.SoundModel.closeEffect(), cc.Global.SoundModel.closeMusic(), cc.Global.SoundModel.playEffect("click"), cc.Global.setlocalStorage("isSoundEffect", "false"), this.node.getChildByName("frame").getChildByName("yinxiao1").active = !1, this.node.getChildByName("frame").getChildByName("yinxiao2").active = !0
            },
            openVibrateClick: function() {
                cc.Global.SoundModel.playEffect("click"), cc.Global.setlocalStorage("isVibrate", "true"), cc.Global.gameLogic._isGameVibrate = !0, this.node.getChildByName("frame").getChildByName("zhengdong1").active = !0, this.node.getChildByName("frame").getChildByName("zhengdong2").active = !1
            },
            closeVibrateClick: function() {
                cc.Global.SoundModel.playEffect("click"), cc.Global.setlocalStorage("isVibrate", "false"), cc.Global.gameLogic._isGameVibrate = !1, this.node.getChildByName("frame").getChildByName("zhengdong1").active = !1, this.node.getChildByName("frame").getChildByName("zhengdong2").active = !0
            },
            start: function() {},
            rePlayClick: function() {
                cc.Global.SoundModel.playEffect("click"), cc.Global.hideBannerOrSuggest(), this.node.active = !1, cc.Global.gameLayer.replayGame()
            },
            closeClick: function() {
                cc.Global.SoundModel.playEffect("click"), this.settingHide(function() {
                    cc.Global.gameLogic.obstacleLayer.resumeAllActions(), cc.Global.app.showBannerOrSuggest()
                })
            },
            showFriendPlay: function() {
                var e = this.node.getChildByName("frame").getChildByName("zhuanchu");
                e && (e.active = !1)
            },
            friendPlayClick: function(e, t) {},
        }), cc._RF.pop()
    }, {}],
    shootOverLayer: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "3ba0bqXpllEFaMuiHsFdppq", "shootOverLayer"), cc.Class({
            extends: cc.Component,
            properties: {
                _shootGem: null,
                _tgcg: !1,
                _stageClearNum: null
            },
            showShootOverLayer: function(e) {
                var t = this;
                e && window.ArcadeScore && "function" == typeof window.ArcadeScore.onShootRangeWin && window.ArcadeScore.onShootRangeWin(cc.Global.gameLogic._shootScore, cc.Global.gameLogic._gunData && cc.Global.gameLogic._gunData.level), cc.Global.userData.gameLevel >= cc.Global.minLvAD && (this._stageClearNum % (parseInt(cc.Global.intervalLvAD) + 1) == 0 && cc.Global.showInterstitialAd(), this._stageClearNum++), this._tgcg = e, e ? (this.node.getChildByName("frame").getChildByName("top1").active = !0, this.node.getChildByName("frame").getChildByName("top2").active = !1, this.node.getChildByName("frame").getChildByName("gemNode").active = !0, this.node.getChildByName("frame").getChildByName("goldNode").position = cc.v2(0, 217), this._shootGem = 20 + 5 * cc.Global.userData.shootLevel, this.node.getChildByName("frame").getChildByName("gemNode").getChildByName("gemLabel").getComponent(cc.Label).string = this._shootGem, cc.Global.userData.shootLevel++, cc.Global.app.updateMyContext()) : (this.node.getChildByName("frame").getChildByName("top1").active = !1, this.node.getChildByName("frame").getChildByName("top2").active = !0, this.node.getChildByName("frame").getChildByName("gemNode").active = !1, this.node.getChildByName("frame").getChildByName("goldNode").position = cc.v2(0, 150)), this.node.active = !0, this.node.getChildByName("frame").setScale(0), this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("frame").runAction(cc.scaleTo(.5, 1).easing(cc.easeBackOut())), this.node.getChildByName("frame").getChildByName("goldNode").getChildByName("goldLabel").getComponent(cc.Label).string = cc.Global.moneyToChange(cc.Global.gameLogic._shootGold + 100), this.node.getChildByName("frame").getChildByName("shareButton").getComponent(cc.Button).interactable = !0, this.node.getChildByName("frame").getChildByName("freeButton").getComponent(cc.Button).interactable = !0, cc.Global.canPlayAdInFTNN(function(e) {
                    e ? (t.node.getChildByName("frame").getChildByName("shareButton").getChildByName("goldIcon").active = !cc.Global.allVideo, t.node.getChildByName("frame").getChildByName("shareButton").getChildByName("videoIcon").active = cc.Global.allVideo) : (t.node.getChildByName("frame").getChildByName("shareButton").getChildByName("goldIcon").active = !1, t.node.getChildByName("frame").getChildByName("shareButton").getChildByName("videoIcon").active = !1)
                })
            },
            hideShootOverLayer: function() {
                var e = this;
                this.node.getChildByName("frame").getNumberOfRunningActions() > 0 || (cc.Global.hideBannerOrSuggest(), this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("frame").runAction(cc.sequence(cc.scaleTo(.5, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
                    e.node.active = !1, cc.Global.homeLayer.node.active = !0, cc.Global.hotLayer.showHotLayer(), cc.Global.gameLayer.node.active = !1
                }))))
            },
            close: function() {
                cc.Global.SoundModel.playEffect("click"), this.hideShootOverLayer()
            },
            double: function() {
                var e = this;
                cc.Global.SoundModel.playEffect("click"), this.node.getChildByName("frame").getChildByName("shareButton").getComponent(cc.Button).interactable = !1;
                var t = this;
                cc.Global.app.videoOrShare(function(a) {
                    a ? t.getReward(!0) : e.node.getChildByName("frame").getChildByName("shareButton").getComponent(cc.Button).interactable = !0
                })
            },
            zhijie: function() {
                cc.Global.SoundModel.playEffect("click"), this.node.getChildByName("frame").getChildByName("freeButton").getComponent(cc.Button).interactable = !1, this.getReward(!1)
            },
            getReward: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                cc.Global.userData.goldCoins += e ? 2 * cc.Global.gameLogic._shootGold : cc.Global.gameLogic._shootGold;
                var t = this;
                this._tgcg && (cc.Global.userData.gemCoins += e ? 2 * this._shootGem : this._shootGem), cc.Global.app.updateMyContext(), cc.Global.homeLayer.updateGoldLabel(), cc.Global.showGetGoldEff(cc.v2(0, 120), t.node, function() {
                    t.hideShootOverLayer()
                })
            },
            start: function() {}
        }), cc._RF.pop()
    }, {}],
    signInLayer: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "fc0a7AbRZJBq7A7mNJgwfU3", "signInLayer"), cc.Class({
            extends: cc.Component,
            properties: {
                moreRewardNode: cc.Node,
                _moreRewardType: null
            },
            start: function() {},
            showSignInLayer: function() {
                var e = this;
                if (cc.Global.userData.signinDay != cc.Global.getNowFormatDate()) {
                    cc.Global.app.showBannerOrSuggest(), cc.Global.userData.signinIndex > 6 && (cc.Global.userData.signinIndex = 0);
                    var t = this.node.getChildByName("firstRewardLayer").getChildByName("frame");
                    this.node.active = !0, this.node.getChildByName("firstRewardLayer").active = !0, this.moreRewardNode.active = !1, t.stopAllActions(), t.setScale(0), t.runAction(cc.scaleTo(.5, 1).easing(cc.easeBackOut())), t.getChildByName("day2").getChildByName("rewardIcon1").active = !cc.Global.userData.signinFirst, t.getChildByName("day2").getChildByName("rewardCount1").active = !cc.Global.userData.signinFirst, t.getChildByName("day2").getChildByName("rewardIcon").active = cc.Global.userData.signinFirst, t.getChildByName("day2").getChildByName("rewardCount").active = cc.Global.userData.signinFirst, t.getChildByName("day7").getChildByName("rewardIcon1").active = !cc.Global.userData.signinFirst, t.getChildByName("day7").getChildByName("rewardCount1").active = !cc.Global.userData.signinFirst, t.getChildByName("day7").getChildByName("rewardIcon").active = cc.Global.userData.signinFirst, t.getChildByName("day7").getChildByName("rewardCount").active = cc.Global.userData.signinFirst;
                    for (var a = 1; a < 8; a++) this.node.getChildByName("firstRewardLayer").getChildByName("frame").getChildByName("day" + a).getChildByName("target").active = a <= cc.Global.userData.signinIndex;
                    cc.Global.canPlayAdInFTNN(function(t) {
                        t ? (e.node.getChildByName("firstRewardLayer").getChildByName("frame").getChildByName("getRewardButton").getChildByName("video").active = !0, e.moreRewardNode.getChildByName("frame").getChildByName("getRewardButton").getChildByName("video").active = !0) : (e.node.getChildByName("firstRewardLayer").getChildByName("frame").getChildByName("getRewardButton").getChildByName("video").active = !1, e.moreRewardNode.getChildByName("frame").getChildByName("getRewardButton").getChildByName("video").active = !1)
                    })
                }
            },
            hideSignInLayer: function(e) {
                if (e) this.node.getChildByName("firstRewardLayer").active = !1, this.showMoreReward();
                else {
                    cc.Global.hideBannerOrSuggest();
                    var t = this;
                    this.node.getChildByName("firstRewardLayer").getChildByName("frame").stopAllActions(), this.node.getChildByName("firstRewardLayer").getChildByName("frame").runAction(cc.sequence(cc.scaleTo(.5, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
                        t.node.active = !1
                    })))
                }
            },
            closeClick: function() {
                cc.Global.SoundModel.playEffect("click"), this.hideSignInLayer(!1)
            },
            getReward: function() {
                var e = this;
                if (cc.Global.isSignIn = !1, cc.Global.userData.signinDay = cc.Global.getNowFormatDate(), cc.Global.userData.signinFirst || 1 != cc.Global.userData.signinIndex)
                    if (cc.Global.userData.signinFirst || 6 != cc.Global.userData.signinIndex) {
                        var t = [50, 80, 120, 150, 200, 250, 300];
                        cc.Global.userData.gemCoins += t[cc.Global.userData.signinIndex], this._moreRewardType = t[cc.Global.userData.signinIndex], cc.Global.userData.signinIndex++, this.node.getChildByName("firstRewardLayer").getChildByName("frame").getChildByName("day" + cc.Global.userData.signinIndex).getChildByName("target").active = !0, cc.Global.app.updateMyContext(), cc.Global.homeLayer.updateGoldLabel(), cc.Global.showGetGemEff(cc.v2(0, 120), e.node, function() {
                            e.hideSignInLayer(!0)
                        })
                    } else {
                        var a;
                        if (cc.Global.homeLayer.addCar(15)) this._moreRewardType = 2, cc.Global.userData.signinIndex++, this.node.getChildByName("firstRewardLayer").getChildByName("frame").getChildByName("day" + cc.Global.userData.signinIndex).getChildByName("target").active = !0, cc.Global.userData.signinFirst = !0, cc.Global.app.updateMyContext(), (a = cc.instantiate(this.node.getChildByName("firstRewardLayer").getChildByName("frame").getChildByName("day7").getChildByName("rewardIcon1"))).parent = this.node.getChildByName("firstRewardLayer").getChildByName("frame").getChildByName("day7"), a.setScale(2), a.runAction(cc.sequence(cc.spawn(cc.moveTo(1, cc.v2(-303, 781)), cc.scaleTo(1, 0)), cc.callFunc(function() {
                            a.destroy(!0), e.hideSignInLayer(!0)
                        })))
                    }
                else cc.Global.homeLayer.addCar(15) && (this._moreRewardType = 1, cc.Global.userData.signinIndex++, this.node.getChildByName("firstRewardLayer").getChildByName("frame").getChildByName("day" + cc.Global.userData.signinIndex).getChildByName("target").active = !0, cc.Global.app.updateMyContext(), (a = cc.instantiate(this.node.getChildByName("firstRewardLayer").getChildByName("frame").getChildByName("day2").getChildByName("rewardIcon1"))).parent = this.node.getChildByName("firstRewardLayer").getChildByName("frame").getChildByName("day2"), a.setScale(2), a.runAction(cc.sequence(cc.spawn(cc.moveTo(1, cc.v2(-310, 239)), cc.scaleTo(1, 0)), cc.callFunc(function() {
                    a.destroy(!0), e.hideSignInLayer(!0)
                }))))
            },
            getRewardClick: function() {
                cc.Global.SoundModel.playEffect("click");
                var e = this;
                cc.Global.app.videoOrShare(function(t) {
                    t && e.getReward()
                })
            },
            showMoreReward: function() {
                this.moreRewardNode.active = !0, this.moreRewardNode.getChildByName("frame").stopAllActions(), this.moreRewardNode.getChildByName("frame").setScale(0), this.moreRewardNode.getChildByName("frame").runAction(cc.scaleTo(.5, 1).easing(cc.easeBackOut())), 1 === this._moreRewardType ? (this.moreRewardNode.getChildByName("frame").getChildByName("day2Icon").active = !0, this.moreRewardNode.getChildByName("frame").getChildByName("day7Icon").active = !1, this.moreRewardNode.getChildByName("frame").getChildByName("gemIcon").active = !1, this.moreRewardNode.getChildByName("frame").getChildByName("rewardCountLabel").active = !1) : 2 === this._moreRewardType ? (this.moreRewardNode.getChildByName("frame").getChildByName("day2Icon").active = !1, this.moreRewardNode.getChildByName("frame").getChildByName("day7Icon").active = !0, this.moreRewardNode.getChildByName("frame").getChildByName("gemIcon").active = !1, this.moreRewardNode.getChildByName("frame").getChildByName("rewardCountLabel").active = !1) : this._moreRewardType && (this.moreRewardNode.getChildByName("frame").getChildByName("day2Icon").active = !1, this.moreRewardNode.getChildByName("frame").getChildByName("day7Icon").active = !1, this.moreRewardNode.getChildByName("frame").getChildByName("gemIcon").active = !0, this.moreRewardNode.getChildByName("frame").getChildByName("rewardCountLabel").active = !0, this.moreRewardNode.getChildByName("frame").getChildByName("rewardCountLabel").getComponent(cc.Label).string = "x" + this._moreRewardType)
            },
            hideMoreReward: function() {
                cc.Global.hideBannerOrSuggest();
                var e = this;
                this.moreRewardNode.getChildByName("frame").stopAllActions(), this.moreRewardNode.getChildByName("frame").runAction(cc.sequence(cc.scaleTo(.5, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
                    e.node.active = !1
                })))
            },
            closeMoreRewardClick: function() {
                cc.Global.SoundModel.playEffect("click"), this.hideMoreReward()
            },
            getMoreRewardClick: function() {
                cc.Global.SoundModel.playEffect("click");
                var e = this;
                cc.Global.app.videoOrShare(function(t) {
                    t && e.getMoreReward()
                })
            },
            getMoreReward: function() {
                var e = this;
                if (1 === this._moreRewardType) cc.Global.homeLayer.addCar(15) && ((t = cc.instantiate(this.moreRewardNode.getChildByName("frame").getChildByName("day2Icon"))).parent = this.moreRewardNode.getChildByName("frame"), t.runAction(cc.sequence(cc.spawn(cc.moveTo(1, cc.v2(-242, 566)), cc.scaleTo(1, 0)), cc.callFunc(function() {
                    t.destroy(!0), e.hideMoreReward()
                }))));
                else if (2 === this._moreRewardType) {
                    var t;
                    if (cc.Global.homeLayer.addCar(30))(t = cc.instantiate(this.moreRewardNode.getChildByName("frame").getChildByName("day7Icon"))).parent = this.moreRewardNode.getChildByName("frame"), t.runAction(cc.sequence(cc.spawn(cc.moveTo(1, cc.v2(-242, 566)), cc.scaleTo(1, 0)), cc.callFunc(function() {
                        t.destroy(!0), e.hideMoreReward()
                    })))
                } else this._moreRewardType && (cc.Global.userData.gemCoins += this._moreRewardType, cc.Global.app.updateMyContext(), cc.Global.homeLayer.updateGoldLabel(), cc.Global.showGetGemEff(cc.v2(0, 120), e.node, function() {
                    e.hideMoreReward()
                }))
            }
        }), cc._RF.pop()
    }, {}],
    tipLayer: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "0f0c92l+CxL2aHKiKcE9peL", "tipLayer"), cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            update: function() {
                1 != this.node.getChildByName("frame").getChildByName("getButton").scaleX && (this.node.getChildByName("frame").getChildByName("getButton").scaleX = 1, this.node.getChildByName("frame").getChildByName("getButton").scaleY = 1, console.log("getButton", this.node.getChildByName("frame").getChildByName("getButton")))
            }
        }), cc._RF.pop()
    }, {}],
    unLockNewCarLayer: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "2541c1CctpIy5bIYeOgqyTQ", "unLockNewCarLayer"), cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            update: function(e) {},
            onEnable: function() {},
            onDisable: function() {},
            showUnLockCarLayer: function(e) {
                var t = this;
                this.node.active = !0, cc.Global.guideLayer.node.active = !1;
                var a = cc.Global.gunBigImgArry[e];
                this.node.getChildByName("frame").getChildByName("carIcon").getComponent(cc.Sprite).spriteFrame = a, this.node.getChildByName("frame").getChildByName("gunNameLabel").getComponent(cc.Label).string = cc.Global.gunConfig[e].name, this.node.getChildByName("frame").setScale(0), this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("frame").runAction(cc.sequence(cc.scaleTo(.5, 1).easing(cc.easeBackOut()), cc.callFunc(function() {
                    cc.Global.isGuide && (cc.Global.guideLayer.node.active = !0, cc.Global.guideLayer.updateStep(3), cc.Global.app.reportEvent(1, 5))
                }))), this.node.getChildByName("frame").getChildByName("freeButton").getChildByName("videoIcon").active = cc.Global.allVideo, this.node.getChildByName("frame").getChildByName("freeButton").getChildByName("icon").active = !cc.Global.allVideo;
                var o = this.node.getChildByName("frame").getChildByName("zhuanEffD").getComponent(dragonBones.ArmatureDisplay);
                o && o.playAnimation("play", 0), cc.sys.platform == cc.sys.WECHAT_GAME && wx.postMessage({
                    messageType: 3,
                    MAIN_MENU_NUM: "car",
                    score: e + 1
                }), cc.Global.app.reportEvent(13, e + 1), this.node.getChildByName("close").getComponent(cc.Button).interactable = !0, this.node.getChildByName("frame").getChildByName("freeButton").getComponent(cc.Button).interactable = !0;
                var c = e;
                c >= cc.Global.gunConfig.length && (c = cc.Global.gunConfig.length - 1);
                var i = cc.Global.gunConfig[c];
                this.node.getChildByName("frame").getChildByName("desLabel1").getComponent(cc.Label).string = i.gunPower, this.node.getChildByName("frame").getChildByName("desLabel2").getComponent(cc.Label).string = i.bulletCapacity, this.node.getChildByName("frame").getChildByName("desLabel3").getComponent(cc.Label).string = i.gunRecoil, this.node.getChildByName("frame").getChildByName("16_tzcg_bnt1").width = (i.gunPower + 20) / 70 * 278 > 278 ? 278 : (i.gunPower + 20) / 70 * 325, this.node.getChildByName("frame").getChildByName("16_tzcg_bnt2").width = i.bulletCapacity / 200 * 278, this.node.getChildByName("frame").getChildByName("16_tzcg_bnt3").width = i.gunRecoil / 20 * 278, cc.Global.app.showBannerOrSuggest(), cc.sys.platform == cc.sys.WECHAT_GAME && (cc.Global.isStrongShare = mpsdk.Hack.isStrongFission() && cc.Global.userData.maxLevel > 3, console.log("isStrongShare,isStrongFission", cc.Global.isStrongShare, mpsdk.Hack.isStrongFission())), cc.Global.homeLayer.randBuyCarData(), cc.Global.canPlayAdInFTNN(function(e) {
                    e ? (t.node.getChildByName("frame").getChildByName("freeButton").getChildByName("videoIcon").active = !0, t.node.getChildByName("frame").getChildByName("freeButton").getChildByName("icon").active = !0) : (t.node.getChildByName("frame").getChildByName("freeButton").getChildByName("videoIcon").active = !1, t.node.getChildByName("frame").getChildByName("freeButton").getChildByName("icon").active = !1)
                })
            },
            hideUnLockCarLayer: function(e) {
                var t = this;
                this.node.getChildByName("frame").getNumberOfRunningActions() > 0 || (cc.Global.hideBannerOrSuggest(), this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("frame").runAction(cc.sequence(cc.scaleTo(.5, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
                    t.node.active = !1, cc.Global.isGuide && (cc.Global.guideLayer.node.active = !0, cc.Global.guideLayer.updateStep(4), cc.Global.app.reportEvent(1, 6)), e && "function" == typeof e && e()
                }))))
            },
            shareGetClick: function() {
                var e = this;
                cc.Global.SoundModel.playEffect("click");
                var t = this;
                this.node.getChildByName("close").getComponent(cc.Button).interactable = !1, this.node.getChildByName("frame").getChildByName("freeButton").getComponent(cc.Button).interactable = !1, cc.Global.isGuide && (cc.Global.guideLayer.node.active = !1), cc.Global.shareClick(function(a) {
                    cc.Global.app.reportEvent(12, 1), a ? (e.node.getChildByName("close").getComponent(cc.Button).interactable = !1, e.node.getChildByName("frame").getChildByName("freeButton").getComponent(cc.Button).interactable = !1, cc.Global.userData.gemCoins += 20, cc.Global.app.updateMyContext(), cc.Global.homeLayer.updateGoldLabel(), cc.Global.SoundModel.playEffect("getGoldorGem"), cc.Global.showGetGemEff(cc.v2(0, 120), t.node, function() {
                        t.hideUnLockCarLayer()
                    })) : (e.node.getChildByName("close").getComponent(cc.Button).interactable = !0, e.node.getChildByName("frame").getChildByName("freeButton").getComponent(cc.Button).interactable = !0)
                })
            },
            videoGetClick: function() {
                var e = this;
                cc.Global.SoundModel.playEffect("click");
                var t = this;
                this.node.getChildByName("close").getComponent(cc.Button).interactable = !1, this.node.getChildByName("frame").getChildByName("freeButton").getComponent(cc.Button).interactable = !1, cc.Global.isGuide && (cc.Global.guideLayer.node.active = !1), cc.Global.showVideoAD(function(a) {
                    cc.Global.app.reportEvent(12, 1), a ? (e.node.getChildByName("close").getComponent(cc.Button).interactable = !1, e.node.getChildByName("frame").getChildByName("freeButton").getComponent(cc.Button).interactable = !1, cc.Global.userData.gemCoins += 20, cc.Global.app.updateMyContext(), cc.Global.homeLayer.updateGoldLabel(), cc.Global.SoundModel.playEffect("getGoldorGem"), cc.Global.showGetGemEff(cc.v2(0, 120), t.node, function() {
                        t.hideUnLockCarLayer()
                    })) : (e.node.getChildByName("close").getComponent(cc.Button).interactable = !0, e.node.getChildByName("frame").getChildByName("freeButton").getComponent(cc.Button).interactable = !0)
                })
            },
            freeGetClick: function() {
                cc.Global.SoundModel.playEffect("click"), cc.Global.isGuide && (cc.Global.guideLayer.node.active = !1);
                var e = this;
                this.node.getChildByName("close").getComponent(cc.Button).interactable = !1, this.node.getChildByName("frame").getChildByName("freeButton").getComponent(cc.Button).interactable = !1, cc.Global.userData.gemCoins += 20, cc.Global.app.updateMyContext(), cc.Global.homeLayer.updateGoldLabel(), cc.Global.SoundModel.playEffect("getGoldorGem"), cc.Global.showGetGemEff(cc.v2(0, 120), e.node, function() {
                    e.hideUnLockCarLayer()
                })
            },
            switchGetType: function() {
                window.h5api ? this.videoGetClick() : cc.Global.userData.maxLevel > 3 ? cc.Global.allVideo || !cc.Global.isStrongShare ? this.videoGetClick() : this.shareGetClick() : this.freeGetClick()
            }
        }), cc._RF.pop()
    }, {}],
    "use_v2.0.x_cc.Toggle_event": [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "8f3982C5ylAQIP1evGMIh7T", "use_v2.0.x_cc.Toggle_event"), cc.Toggle && (cc.Toggle._triggerEventInScript_check = !0), cc._RF.pop()
    }, {}],
    videoTipLayer: [function(e, t, a) {
        "use strict";
        cc._RF.push(t, "5b578DEOclISr/TdSfz1P71", "videoTipLayer"), cc.Class({
            extends: cc.Component,
            properties: {
                _buffTime: null
            },
            showVideoTipLayer: function(e, t) {
                console.log("BuffLayer:", e), this.node.active = !0, this.node.getChildByName("frame").setScale(0), this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("frame").runAction(cc.scaleTo(.5, 1).easing(cc.easeBackOut())), this._cb = e, t && (this.node.getChildByName("frame").getChildByName("descLabel").getComponent(cc.Label).string = str)
            },
            hideVideoTipLayer: function(e) {
                var t = this;
                this.node.getChildByName("frame").getNumberOfRunningActions() > 0 || (cc.Global.hideBannerOrSuggest(), this.node.getChildByName("frame").stopAllActions(), this.node.getChildByName("frame").runAction(cc.sequence(cc.scaleTo(.5, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
                    t.node.active = !1, e && "function" == typeof e && e()
                }))))
            },
            closeClick: function() {
                cc.Global.SoundModel.playEffect("click"), this.hideVideoTipLayer()
            },
            yesBtnClick: function() {
                cc.Global.SoundModel.playEffect("click"), this.hideVideoTipLayer(this._cb)
            }
        }), cc._RF.pop()
    }, {}]
}, {}, ["DaiJinItem", "DaiJinPage", "Global", "HelloWorld", "SoundManager", "airdropLayer", "baseGunNode", "buffLayer", "concentric", "gameLayer", "gameLogic", "gameOverLayer", "guideLayer", "gunGiftLayer", "gunShopLayer", "home", "hotLayer", "levelLayer", "libaoLayer", "loading", "moreGameLayer", "notEnoughGoldLayer", "obstacle", "offlineRevenueLayer", "playTestLayer", "rankLayer", "revivalNode", "settingLayer", "shootOverLayer", "signInLayer", "tipLayer", "unLockNewCarLayer", "videoTipLayer", "use_v2.0.x_cc.Toggle_event"]);