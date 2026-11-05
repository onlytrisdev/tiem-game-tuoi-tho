! function() {
    "use strict";
    var e, a = Laya.ClassUtils.regClass;
    ! function(e) {
        class i extends Laya.Scene {
            constructor() {
                super()
            }
            createChildren() {
                super.createChildren(), this.loadScene("MenuView")
            }
        }
        e.MenuViewUI = i, a("ui.MenuViewUI", i)
    }(e || (e = {}));
    class i {
        constructor() {
            i.Instance = this, this.resArr = ["res/digWood/digWood.lh", "res/digWood/Assets/woodRoll.jpg", "res/digWood/Assets/goldRoll.jpg", "res/digWood/Assets/endPoint.jpg"], this.curIndex = 0, this.resCount = this.resArr.length
        }
        gameInit() {
            this.preload()
        }
        preload() {
            for (var e = 0; e < this.resArr.length; e++) {
                var a = this.resArr[e];
                Laya.loader.create(a, new Laya.Handler(this, this.complate))
            }
        }
        complate() {
            this.curIndex++, this.curIndex == this.resCount && L.Instance.gameLoadInit()
        }
    }
    const t = {
            BGM: "res/sounds/bgm.mp3",
            CLICK: "res/sounds/click.mp3",
            WIN: "res/sounds/win.mp3",
            LOSE: "res/sounds/lose.mp3",
            COIN: "res/sounds/coin.mp3",
            COLLIDE: "res/sounds/collide.mp3",
            HINT: "res/sounds/hint.mp3",
            EMPTY: "res/sounds/empty.mp3"
        },
        n = {
            READY: 0,
            PLAYING: 1,
            LOSE: 2,
            WIN: 3,
            RELIVE: 4
        },
        o = [new Laya.Vector3(246 / 255, 199 / 255, 176 / 255), new Laya.Vector3(191 / 255, 235 / 255, 184 / 255), new Laya.Vector3(243 / 255, 176 / 255, 203 / 255), new Laya.Vector3(251 / 255, 234 / 255, 180 / 255), new Laya.Vector3(180 / 255, 210 / 255, 251 / 255), new Laya.Vector3(198 / 255, 174 / 255, 249 / 255), new Laya.Vector3(188 / 255, 240 / 255, 253 / 255)];
    class s {
        constructor() {
            s.Instance = this, this.__scene = new Laya.Scene3D, Laya.stage.addChild(this.__scene), this.__scene.enableFog = !0, this.__scene.fogStart = 100, this.__scene.fogRange = 200, this.__scene.fogColor = o[0], this.__dirLight = this.__scene.addChild(new Laya.DirectionLight), this.__dirLight.color = new Laya.Vector3(1, 1, 1), this.__dirLight.intensity = 1, this.__dirLight.transform.localRotationEuler = new Laya.Vector3(-130, 30, 0)
        }
        gameInit() {}
        addToScene(e) {
            this.__scene.addChild(e)
        }
        changeSceneColor(e) {
            Laya.Tween.clearAll(this.__scene);
            let a = o[e];
            Laya.Tween.to(this.__scene.fogColor, {
                x: a.x,
                y: a.y,
                z: a.z
            }, 1e3)
        }
    }
    class r extends Laya.Script3D {
        constructor() {
            super(), this.__lose = !1, this.__minLeft = -12, this.__maxLeft = -.7, this.__moveSpeed = .02, this.__reach = !1
        }
        onUpdate() {
            L.Instance.__curState != n.RELIVE || this.__lose || (this.__lose = !0, this.clearTween())
        }
        setDir(e) {
            e ? (this.__minLeft = -10, this.__maxLeft = -.5) : (this.__minLeft = .5, this.__maxLeft = 10), this.owner.transform.localPositionX = this.__minLeft, this.doTween()
        }
        doTween() {
            let e = this,
                a = this.owner;
            Laya.Tween.to(a.transform, {
                localPositionX: e.__maxLeft
            }, 1e3, null, new Laya.Handler(e, () => {
                Laya.Tween.to(a.transform, {
                    localPositionX: e.__minLeft
                }, 1e3, null, new Laya.Handler(e, () => {
                    e.doTween()
                }))
            }))
        }
        onDestroy() {
            this.clearTween()
        }
        clearTween() {
            let e = this.owner;
            Laya.Tween.clearAll(e.transform)
        }
        broken() {
            this.clearTween();
            let e = this.owner;
            e.getComponent(Laya.PhysicsCollider).enabled = !1, e.active = !1
        }
    }
    class l {
        constructor() {
            this.musicState = !1, this.shakeState = !1, this.passLevel = 0, this.coin = 0, this.curKnife = 0, this.curSkin = 0, this.curChargeLevel = 0, this.skinLock = [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1], this.ResetData()
        }
        ResetData() {
            this.musicState = !0, this.shakeState = !0, this.passLevel = 0, this.coin = 0, this.curKnife = 0, this.curSkin = 0, this.curChargeLevel = 0, this.skinLock = [!0, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1]
        }
    }
    class d {
        constructor() {
            this._gameData_ = new l, d.Instance = this
        }
        ReadData() {
            let e = null;
            "" != (e = Laya.LocalStorage.getItem("xmtvivogameData")) && null != e && (this._gameData_ = JSON.parse(e)), this.SaveData()
        }
        SaveData() {
            Laya.LocalStorage.setItem("xmtvivogameData", JSON.stringify(this._gameData_))
        }
    }
    class h extends Laya.Script {
        constructor() {
            super(...arguments), this.shareName = "削木头贼6", this.shareIcon = "https://000kqyres-1257034461.cos.ap-guangzhou.myqcloud.com/QQShareImg/xiaomutou.png", this.valueCompanyArr = [" ", "k", "m", "g", "t", "p", "e", "z", "y", "b", "n", "d"], this.bannerTaoluUrl = "", this.ctrlTiaozhuanUrl = "", this.oppoInitId = "30249425", this.baiduAdUnitId = "b30f4ea0", this.wxbannerid = ["adunit-bf8fee07af3bc1a4", "adunit-c510f8b79ff2a5af", "adunit-2473dcd1b9ab3a31"], this.toutiaoBannerId = "a6d98ep02d32rrr889", this.baiduBannerId = "6813585", this.oppoBannerId = "163182", this.vivoBannerId = "c929cdc1f3644bd2920c8d4359139cb0", this.qqBannerId = "6fb3835c50a6dfefb3641d4c956645bb", this.bannerCount = 0, this.WxBanner01 = null, this.WxBanner02 = null, this.WxBanner03 = null, this.wxVideoId = "adunit-016ca4944670a2a3", this.toutiaoVideoId = "pef20idlkof8eie219", this.baiduVideoId = "6813586", this.oppoVideoId = "163183", this.vivoVideoId = "b35c119103df44a48813435e0802c968", this.qqVideoId = "be1210dd38cd10825c337021a0c0ba95", this.vivoNativeId = "5e3ad16446514e2e8169561b981e7ef8", this.vivoNativeDefaultId = "a94fe0afda3c41d988a98535b35ae04a", this.oppoNativeId = "163186", this.oppoNativeDefaultId = "163187", this.oppoBannerLock = !1, this.oppoCloseBannerCount = 0, this.oppoInsertShowCount = 0, this.ttInsertAdId = "", this.oppoInsertAdId = "163185", this.vivoInsertAdId = "96083b8689284f37b51f0b8a5573ce2e", this.qqInsertAdId = "3eb3349cee52c7383092dd5c63f6c5c7", this.qqBoxAd = null, this.qqBoxAdId = "c2e6b3e5ddc01e07503f88ec3cffbcc6", this.bannerAd = null, this.insertAd = null, this.showBanner = !1, this.nativeAd = null, this.nativeCurrentAdList = null, this.xiaomiAppId = "2882303761518134108", this.xiaomiKey = "LfAUPhsmdD435D7HpygI6Q==", this.xiaomiUid = "", this.xiaomiSession = "", this.MyPlayer = {}, this.showAlert = function(e, a = "提示", i = null) {
                "h5" != window.miniGameName ? "weixin" == window.miniGameName || "toutiao" == window.miniGameName || "qq" == window.miniGameName || "swan" == window.miniGameName ? window.miniGame.showToast({
                    title: e,
                    icon: "none"
                }) : "vivo" == window.miniGameName && window.miniGame.showToast({
                    message: e
                }) : alert && alert(e)
            }, this.wxBanner = function() {}, this.changemoney = function(e, a, i = 0) {
                var t = this.valTrans(a);
                e(t.value + this.valueCompanyArr[t.index])
            }, this.valTrans = function(e, a = 0) {
                if (e > 1e3 || 1e3 == e) {
                    e /= 1e3, a++;
                    var i = this.valTrans(e, a);
                    i && (e = parseFloat(i.value), a = i.index)
                }
                return {
                    value: e = e.toFixed(1),
                    index: a
                }
            }, this.RecommendationButton = function(e) {
                var a = this;
                if ("swan" == window.miniGameName && window.swan.createRecommendationButton) {
                    var i = window.miniGame.getSystemInfoSync(),
                        t = i.screenWidth - 60;
                    a.recommendationButton || (a.recommendationButton = window.swan.createRecommendationButton({
                        type: "carousel",
                        style: {
                            left: t,
                            top: i.screenHeight / 2 - 150
                        }
                    }), a.recommendationButton.onError(e => {
                        console.error(e)
                    }), a.recommendationButton.onLoad(() => {
                        a.recommendationButton.show(), a.recommendationButton.offLoad(() => {}), a.recommendationButton.style.left = t, a.recommendationButton.style.top = i.screenHeight / 2 - 150
                    }), a.recommendationButton.load())
                }
            }
        }
        createAuthBtn(e) {}
        onAwake() {
            window.SDK = this
        }
        static viewBanner(e) {
            var a = this.instance;
            if (window.platformBanner)
                if ("weixin" == window.miniGameName);
                else if ("toutiao" == window.miniGameName) {
                if (window.tt.createBannerAd)
                    if (e)
                        if (a.bannerAd) a.bannerAd.show();
                        else {
                            const {
                                windowWidth: e,
                                windowHeight: t
                            } = window.tt.getSystemInfoSync();
                            var i = 200;
                            a.bannerAd = window.tt.createBannerAd({
                                adUnitId: a.toutiaoBannerId,
                                style: {
                                    width: i,
                                    top: t - i / 16 * 9
                                }
                            }), a.bannerAd.style.left = (e - i) / 2, a.bannerAd.onResize(n => {
                                i = n.width, a.bannerAd.style.top = t - n.height, a.bannerAd.style.left = (e - n.width) / 2
                            }), a.bannerAd.onLoad(function() {
                                a.bannerAd.show()
                            })
                        }
                else a.bannerAd && (a.bannerAd.destroy(), a.bannerAd = null)
            } else if ("swan" == window.miniGameName)
                if (a.bannerAd) e ? a.bannerAd.show() : a.bannerAd.hide();
                else {
                    let e = {
                        adUnitId: a.baiduAdUnitId,
                        appSid: a.baiduBannerId,
                        style: {
                            top: 1e3,
                            left: 100,
                            width: 300
                        }
                    };
                    var t = window.swan.getSystemInfoSync(),
                        n = t.screenWidth,
                        o = t.screenHeight,
                        s = 0;
                    a.bannerAd = window.swan.createBannerAd(e), a.bannerAd.onResize(e => {
                        a.bannerAd.style.left = (n - e.width) / 2, s = o - a.bannerAd.style.realHeight, a.bannerAd.style.top = s
                    }), a.bannerAd.style.left = (n - 300) / 2, a.bannerAd.style.top = 800, a.bannerAd.onLoad(() => {
                        a.bannerAd.show().then().catch(e => console.log(e))
                    })
                }
            else if ("qq" == window.miniGameName) {
                let i = window.miniGame.getSystemInfoSync();
                if (a.bannerAd) e ? a.showBanner || (a.showBanner = !0, a.bannerAd.show().catch(function(e) {
                    a.bannerAd = null
                })) : (a.showBanner = !1, a.bannerAd.hide());
                else {
                    let t = 80,
                        n = 300;
                    var r = a.qqBannerId;
                    a.bannerAd = window.miniGame.createBannerAd({
                        adUnitId: r,
                        style: {
                            left: (i.windowWidth - n) / 2,
                            top: i.windowHeight - t,
                            width: n
                        }
                    }), a.bannerAd.onError(e => {}), t = a.bannerAd.style.realHeight, a.bannerAd.onResize(e => {
                        a.bannerAd.style.top = i.windowHeight - t
                    }), e ? a.showBanner || (a.showBanner = !0, a.bannerAd.show()) : (a.showBanner = !1, a.bannerAd.hide())
                }
            } else "uc" == window.miniGameName && (e ? (a.bannerAd = window.miniGame.createBannerAd({
                style: {
                    width: 250,
                    height: 0,
                    gravity: 7
                }
            }), a.bannerAd.onLoad(() => {
                a.bannerAd.show()
            })) : a.bannerAd && a.bannerAd.hide())
        }
        viewOppoBanner() {
            if (window.platformBanner) {
                var e = this;
                "oppo" == window.miniGameName && (e.bannerAd ? e.oppoCloseBannerCount <= 5 && window.bannerShow ? e.bannerAd.show() : e.bannerAd.hide() : (e.bannerAd = window.qg.createBannerAd({
                    posId: e.oppoBannerId
                }), e.bannerAd.onLoad(() => {
                    e.oppoCloseBannerCount <= 5 && window.bannerShow && e.bannerAd.show()
                }), e.bannerAd.onHide(function(e) {
                    window.bannerShow = !1
                })))
            }
        }
        viewVivoBanner() {
            if (window.platformBanner) {
                if ("vivo" == window.miniGameName) {
                    window.qg.createBannerAd({
                        posId: this.vivoBannerId,
                        style: {}
                    }).show()
                }
            }
        }
        static viewInsertAd() {
            var e = this.instance;
            if (window.platformChaping) {
                if ("oppo" == window.miniGameName) return !!(window.insertShow && e.oppoInsertShowCount <= 8) && (e.insertAd = window.qg.createInsertAd({
                    posId: e.oppoInsertAdId
                }), e.insertAd.onLoad(function() {
                    window.bannerShow = !1, e.viewOppoBanner(), e.insertAd.show(), e.oppoInsertShowCount++
                }), e.insertAd.onClose(() => {
                    window.insertShow = !1, window.bannerShow = !0, e.viewOppoBanner();
                    let a = e.oppoInsertShowCount < 6 ? 60 : 30;
                    Laya.timer.once(1e3 * a, e, () => {
                        window.insertShow = !0
                    })
                }), e.insertAd.onError(function(a) {
                    window.bannerShow = !0, e.viewOppoBanner()
                }), e.insertAd.load(), !0);
                if ("vivo" == window.miniGameName) {
                    if (window.insertShow) {
                        e.insertAd = window.qg.createInterstitialAd({
                            posId: e.vivoInsertAdId
                        }), e.insertAd.load();
                        let a = e.insertAd.show();
                        return a && a.then(() => {}).catch(() => {
                            window.MainView.showNativeBox()
                        }), e.insertAd.onClose(() => {
                            window.insertShow = !1, Laya.timer.once(3e4, e, () => {
                                window.insertShow = !0
                            })
                        }), !0
                    }
                    return !1
                }
                "qq" == window.miniGameName && (e.insertAd = window.miniGame.createInterstitialAd({
                    adUnitId: e.qqInsertAdId
                }), e.insertAd.load(), e.insertAd.onLoad(() => {
                    window.insertShow && (e.insertAd.show(), window.insertShow = !1)
                }), e.insertAd.onClose(() => {
                    Laya.timer.once(6e4, e, () => {
                        window.insertShow = !0
                    })
                }))
            }
            return !0
        }
        static showNativeInBox(e, a = !1) {
            if (window.platformNative && !(e.numChildren > 0)) {
                var i = this.instance;
                if (window.miniGame.createNativeAd) {
                    i.nativeAd && (i.nativeAd = null);
                    let t = "";
                    "vivo" == window.miniGameName ? t = a ? i.vivoNativeDefaultId : i.vivoNativeId : "oppo" == window.miniGameName && (t = a ? i.oppoNativeDefaultId : i.oppoNativeId), "vivo" == window.miniGameName ? i.nativeAd = window.miniGame.createNativeAd({
                        posId: t
                    }) : "oppo" == window.miniGameName && (i.nativeAd = window.qg.createNativeAd({
                        adUnitId: t
                    })), window.bannerShow = !1, i.viewOppoBanner(), i.nativeAd.load(), i.nativeAd.onLoad(function(a) {
                        if (a && a.adList) {
                            i.nativeCurrentAdList = a.adList.pop(), i.nativeAd.reportAdShow({
                                adId: i.nativeCurrentAdList.adId.toString()
                            });
                            let t = i.nativeCurrentAdList.adId,
                                n = (i.nativeCurrentAdList.icon, i.nativeCurrentAdList.imgUrlList.pop()),
                                o = new Laya.Sprite,
                                s = new Laya.Sprite;
                            if (e.addChild(o), s.loadImage("ui/nativeClose.png", new Laya.Handler(i, () => {
                                    s.on(Laya.Event.CLICK, i, () => {
                                        o.destroy(), e.removeChildren(), window.bannerShow = !0, i.viewOppoBanner()
                                    }), s.mouseThrough = !1, s.visible = !1
                                })), o.addChild(s), !n) return void h.showNativeInBox(e, !0);
                            o.loadImage(n, Laya.Handler.create(this, () => {
                                o.name = "nativeAd_image";
                                let a = o.getBounds();
                                o.height = e.height, o.width = e.height * a.width / a.height, o.pivot(o.width / 2, o.height / 2);
                                let n = e.width / 2,
                                    r = e.height / 2;
                                o.pos(n, r), o.on(Laya.Event.MOUSE_UP, o, () => {
                                    i.nativeAd.reportAdClick({
                                        adId: t.toString()
                                    }), o.destroy(), e.removeChildren()
                                }), s.pos(o.width - 30 - 20, 20), s.width = s.height = 30, s.visible = !0, e.visible = !0
                            }))
                        } else h.showNativeInBox(e, !0)
                    }), i.nativeAd.onError(function(e) {
                        window.bannerShow = !0, i.viewOppoBanner()
                    })
                }
            }
        }
        static showNativeWindow(e, a, i = !1) {
            if (window.platformNative) {
                var t = this.instance;
                if (window.miniGame.createNativeAd) {
                    t.nativeAd && (t.nativeAd = null);
                    let n = "";
                    "vivo" == window.miniGameName ? n = i ? t.vivoNativeDefaultId : t.vivoNativeId : "oppo" == window.miniGameName && (n = i ? t.oppoNativeDefaultId : t.oppoNativeId), "vivo" == window.miniGameName ? t.nativeAd = window.miniGame.createNativeAd({
                        posId: n
                    }) : "oppo" == window.miniGameName && (t.nativeAd = window.qg.createNativeAd({
                        adUnitId: n
                    })), window.bannerShow = !1, t.viewOppoBanner(), t.nativeAd.load(), t.nativeAd.onLoad(function(i) {
                        if (i && i.adList) {
                            t.nativeCurrentAdList = i.adList.pop(), t.nativeAd.reportAdShow({
                                adId: t.nativeCurrentAdList.adId.toString()
                            });
                            let n = t.nativeCurrentAdList.adId,
                                o = t.nativeCurrentAdList.imgUrlList.pop(),
                                s = t.nativeCurrentAdList.title,
                                r = t.nativeCurrentAdList.desc,
                                l = t.nativeCurrentAdList.clickBtnTxt,
                                d = new Laya.Sprite,
                                c = a.getChildAt(0);
                            c && c.changeText("" + s);
                            let _ = a.getChildAt(1);
                            _.addChild(d);
                            a.getChildAt(2);
                            let m = a.getChildAt(3),
                                w = m.getChildAt(0);
                            "" != l && null != l || (l = "点击查看"), w && w.changeText("" + l);
                            let g = a.getChildAt(4);
                            if (g && g.changeText("" + r), !o) return void h.showNativeWindow(e, a, !0);
                            d.loadImage(o, Laya.Handler.create(this, () => {
                                d.name = "nativeAd_image";
                                let a = d.getBounds();
                                d.height = _.height, d.width = _.height * a.width / a.height, d.pivot(d.width / 2, d.height / 2);
                                let i = _.width / 2,
                                    o = _.height / 2;
                                d.pos(i, o), d.on(Laya.Event.MOUSE_UP, d, () => {
                                    t.nativeAd.reportAdClick({
                                        adId: n.toString()
                                    })
                                }), m.on(Laya.Event.CLICK, m, () => {
                                    t.nativeAd.reportAdClick({
                                        adId: n.toString()
                                    })
                                }), e.visible = !0
                            }))
                        } else h.showNativeWindow(e, a, !0)
                    }), t.nativeAd.onError(function(n) {
                        i ? (window.bannerShow = !0, t.viewOppoBanner()) : h.showNativeWindow(e, a, !0)
                    })
                }
            }
        }
        static showNativeBanner() {
            var e = this.instance;
            if (window.miniGame.createNativeAd) {
                let a = Laya.stage.width,
                    i = 200;
                e.nativeAd = window.miniGame.createNativeAd({
                    posId: e.vivoNativeId
                }), e.nativeAd.onLoad(function(t) {
                    if (t && t.adList) {
                        e.nativeCurrentAdList = t.adList.pop(), e.nativeAd.reportAdShow({
                            adId: e.nativeCurrentAdList.adId.toString()
                        });
                        let n = e.nativeCurrentAdList.adId,
                            o = e.nativeCurrentAdList.imgUrlList.pop(),
                            s = new Laya.Sprite,
                            r = new Laya.Sprite;
                        r.loadImage("ui/close.png", new Laya.Handler(e, () => {
                            r.on(Laya.Event.CLICK, e, () => {
                                s.destroy()
                            })
                        })), Laya.stage.addChild(s), s.addChild(r), o && s.loadImage(o, Laya.Handler.create(this, () => {
                            s.name = "nativeAd_image", s.width = a, s.height = i, r.pos(a - 70, 20), s.pivot(a / 2, i / 2), s.pos(a / 2, i / 2), s.on(Laya.Event.MOUSE_DOWN, s, () => {
                                e.nativeAd.reportAdClick({
                                    adId: n.toString()
                                })
                            })
                        }))
                    }
                })
            }
        }
        static xiaomiLogin() {
            var e = this.instance;
            window.qg.login({
                success: function(a) {
                    console.log("Login success ", a), e.xiaomiUid = a.data.appAccountId, e.xiaomiSession = a.data.session, e.xiaomiPostHttp()
                },
                fail: function(e) {
                    console.log("Login fail ", e)
                }
            })
        }
        xiaomiPostHttp() {
            var e = new XMLHttpRequest;
            e.onreadystatechange = function() {
                if (4 == e.readyState && e.status >= 200 && e.status < 400) {
                    var a = e.responseText;
                    console.log("http data返回:", a)
                }
            }, e.open("POST", "http://ipbegin.com/index.php", !0), e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), e.send("appid=" + this.xiaomiAppId + "&session=" + this.xiaomiSession + "&uid=" + this.xiaomiUid + "&appsecret=" + this.xiaomiKey)
        }
        navigateToMiniProgram(e, a, i) {
            "weixin" == window.miniGameName && window.wx.navigateToMiniProgram({
                appId: e,
                path: a,
                success: function(e) {
                    window.wx.aldSendEvent("点击跳转" + i)
                },
                fail: function(e) {}
            })
        }
        updateRank() {}
        static createLupingBtn() {
            var e = this,
                a = new Laya.Sprite;
            a.loadImage("ui/recBtn.png", Laya.Handler.create(Laya.stage, () => {
                Laya.stage.addChild(a), a.zOrder = 1002, a.pivot(a.width / 2, a.height / 2), a.pos(Laya.stage.width - 60, 400);
                var i = new Laya.Sprite;
                i.loadImage("ui/rec.png", Laya.Handler.create(Laya.stage, () => {
                    a.addChild(i), i.x = 4 * i.width, i.y = i.height, i.visible = !1
                })), a.on(Laya.Event.MOUSE_UP, Laya.stage, () => {
                    e.ShareVideo(i)
                }), a.scale(.7, .7)
            }))
        }
        static createMoreGameBtn() {
            if (!window.tt.createMoreGamesButton) return;
            let e = window.miniGame.getSystemInfoSync();
            window.tt.createMoreGamesButton({
                type: "image",
                image: "moregame/moregame.png",
                style: {
                    left: 20,
                    top: e.screenHeight - 250,
                    width: 50,
                    height: 65.5,
                    lineHeight: 0,
                    backgroundColor: "#ff0000",
                    textColor: "#ffffff",
                    textAlign: "center",
                    fontSize: 16,
                    borderRadius: 4,
                    borderWidth: 0,
                    borderColor: "#ff0000"
                },
                appLaunchOptions: [{
                    appId: "ttXXXXXX",
                    query: "foo=bar&baz=qux",
                    extraData: {}
                }],
                onNavigateToMiniGame(e) {
                    console.log("跳转其他小游戏", e)
                }
            }).onTap(() => {
                console.log("点击更多游戏")
            })
        }
        static initQQBox() {
            var e = this.instance;
            e.qqBoxAd = window.qq.createAppBox({
                adUnitId: e.qqBoxAdId
            }), e.createQQMoreGameBtn()
        }
        createQQMoreGameBtn() {
            console.log("createQQMoreGameBtn");
            var e = this;
            let a = new Laya.Image("moregame/moregame.png");
            Laya.stage.addChild(a), a.zOrder = 1001, a.bottom = 250, a.left = 25, a.width = 100, a.height = 130, a.on(Laya.Event.CLICK, this, () => {
                e.qqBoxAd.load().then(() => {
                    e.qqBoxAd.show()
                })
            })
        }
        static shakeScreen() {
            d.Instance._gameData_.shakeState && "h5" != window.miniGameName && "uc" != window.miniGameName && window.miniGame.vibrateShort({
                success: function(e) {},
                fail: function(e) {},
                complete: function(e) {}
            })
        }
    }
    h.instance = new h, h.showVideoAd = function(e) {
        var a = this.instance;
        if (window.platformVideo) {
            if ("weixin" == window.miniGameName) var i = a.wxVideoId;
            else if ("toutiao" == window.miniGameName) i = a.toutiaoVideoId;
            else if ("swan" == window.miniGameName) i = a.baiduVideoId;
            else if ("oppo" == window.miniGameName) i = a.oppoVideoId;
            else if ("qq" == window.miniGameName) i = a.qqVideoId;
            else if ("vivo" == window.miniGameName) i = a.vivoVideoId;
            window.miniGame.createRewardedVideoAd && (a.videoAd || ("swan" == window.miniGameName ? a.videoAd = window.miniGame.createRewardedVideoAd({
                adUnitId: i,
                appSid: a.baiduAdUnitId
            }) : "oppo" == window.miniGameName ? a.videoAd = window.qg.createRewardedVideoAd({
                adUnitId: i
            }) : "vivo" == window.miniGameName ? a.videoAd = window.miniGame.createRewardedVideoAd({
                posId: i
            }) : "uc" == window.miniGameName ? a.videoAd = window.miniGame.createRewardedVideoAd() : a.videoAd = window.miniGame.createRewardedVideoAd({
                adUnitId: i
            })), "oppo" == window.miniGameName || "vivo" == window.miniGameName ? (a.videoAd.load(), a.videoAd.offClose(e => {}), a.videoAd.onLoad(function() {
                window.MainView.pauseMusic(), Laya.timer.scale = 0, a.videoAd.show()
            })) : a.videoAd.load().then(() => {
                window.MainView.pauseMusic(), Laya.timer.scale = 0, a.videoAd.show()
            }).catch(i => {
                a.showAlert("没有广告可播放啦"), e(!1), window.MainView.resumeMusic(), Laya.timer.scale = 1
            }), a.videoAd.onError(i => {
                a.showAlert("没有广告可播放啦"), e(!1), window.MainView.resumeMusic(), Laya.timer.scale = 1
            }), a.videoAd.onClose(i => {
                window.MainView.resumeMusic(), Laya.timer.scale = 1, null == i || null == i.isEnded || 1 == i.isEnded ? e(!0) : (a.showAlert("与奖励擦肩而过啦！"), e(!1)), e = (() => {
                    console.log("empty func")
                })
            }))
        }
    }, h.oppoNavigateToMiniGame = function(e) {
        console.log("Open Other Game"), window.isOppoMoreGame && window.qg.navigateToMiniGame({
            pkgName: e,
            success: function() {},
            fail: function(e) {}
        })
    }, h.isBannerTaoLu = function() {}, h.wxTiaoZhuan = function() {}, h.showLoading = function(e) {}, h.hideLoading = function() {}, h.wxOpenShare = function() {
        var e = this.instance;
        "swan" == window.miniGameName || "toutiao" == window.miniGameName ? window.miniGame.shareAppMessage({
            title: e.shareName,
            imageUrl: e.shareIcon,
            query: "shareName=" + e.shareName
        }) : "weixin" == window.miniGameName && window.wx.aldShareAppMessage({
            imageUrl: e.shareIcon,
            title: e.shareName,
            query: "shareName=" + e.shareName
        })
    }, h.onShare = function() {
        var e = this.instance;
        "weixin" == window.miniGameName ? (window.miniGame.showShareMenu({
            withShareTicket: !0
        }), window.wx.aldOnShareAppMessage(function() {
            return {
                imageUrl: e.shareIcon,
                title: e.shareName,
                query: "shareName=" + e.shareName
            }
        })) : "qq" == window.miniGameName ? window.miniGame.onShareAppMessage(() => ({
            title: e.shareName,
            imageUrl: e.shareIcon
        })) : "toutiao" == window.miniGameName && window.miniGame.onShareAppMessage(function(a) {
            return {
                title: e.shareName,
                imageUrl: e.shareIcon,
                query: "shareName=" + e.shareName,
                success() {
                    console.log("分享成功")
                },
                fail(e) {
                    console.log("分享失败", e)
                }
            }
        })
    }, h.ShareVideo = function(e) {
        var a = this.instance;
        "toutiao" == window.miniGameName && (a.recorder = window.tt.getGameRecorderManager(), window.isRecord ? (window.isRecord = !1, e && (e.visible = !1), window.recordDone ? (Laya.timer.clearAll(this), a.recorder.onStop(e => {
            window.miniGame.shareAppMessage({
                channel: "video",
                extra: {
                    videoPath: e.videoPath
                },
                success() {
                    window.miniGame.showToast({
                        title: "发布成功"
                    })
                },
                fail() {}
            })
        }), a.recorder.stop()) : (Laya.timer.clearAll(this), a.recorder.stop(), window.tt.showToast({
            title: "需要录制3秒以上",
            icon: "none"
        }))) : (window.isRecord = !0, window.recordDone = !1, a.recorder.onStart(i => {
            e && (e.visible = !0), a.showAlert("开始录制...")
        }), a.recorder.start({
            duration: 300
        }), Laya.timer.once(3e3, this, () => {
            window.recordDone = !0
        }), Laya.timer.once(299e3, this, () => {
            a.recorder.pause(), a.showAlert("    录制已达最大时长\n再次点击录屏按钮即可分享"), e && (e.visible = !1)
        })))
    }, h.GotoShareVideo = function() {};
    class c extends Laya.Script3D {
        constructor() {
            super(), this.rotate = new Laya.Vector3(0, 1, 0)
        }
        onUpdate() {
            this.owner.transform.rotate(this.rotate, !0, !1)
        }
        hide() {
            h.shakeScreen();
            let e = this.owner;
            e.getComponent(Laya.PhysicsCollider).enabled = !1;
            let a = new Laya.Vector3(-20, 50, e.transform.localPositionZ + 200);
            Laya.Tween.to(e.transform, {
                localPositionX: a.x,
                localPositionY: a.y,
                localPositionZ: a.z
            }, 1e3, null, new Laya.Handler(this, () => {
                e.active = !1
            }))
        }
    }
    class _ extends Laya.Script3D {
        constructor() {
            super(), this.award = !1, this.coinCount = 0
        }
        onCollisionEnter(e) {
            switch (e.other.owner.name) {
                case "roll":
                    if (f.Instance.__change) {
                        if (L.Instance.__getReward) return;
                        L.Instance.__getReward = !0;
                        let e = this.owner;
                        w.Instance.showAwardEffect(!0, e.transform.position)
                    }
                    this.award || (this.award = !0, this.doAction()), f.Instance.__isPlaying || y.Instance.gameWin()
            }
        }
        doAction() {
            h.shakeScreen();
            let e = this,
                a = this.owner;
            Laya.Tween.to(a.transform, {
                localPositionY: "4.5"
            }, 100, null, new Laya.Handler(e, () => {
                e.createCoin()
            })), Laya.timer.once(2e3, e, () => {
                Laya.Tween.to(a.transform, {
                    localPositionY: "0"
                }, 500)
            })
        }
        setCoinNum(e) {
            e = parseInt(e), this.coinCount = e, 0 == e && (this.award = !0)
        }
        createCoin() {
            let e = this.owner;
            w.Instance.createAwardCoin(this.coinCount, e.transform.position)
        }
    }
    class m extends Laya.Script3D {
        constructor() {
            super(), this.__change = !1
        }
        init() {
            this.__change = !1, this.initChild()
        }
        onUpdate() {
            let e = this.owner;
            for (let a = 0; a < e.numChildren; a++) {
                let i = e.getChildAt(a);
                "brick" == i.name && !i.destroyed && i.transform.localPositionY <= -60 && i.destroy()
            }
        }
        change() {
            if (this.__change) return;
            this.__change = !0;
            let e = this.owner;
            for (let a = 0; a < e.numChildren; a++) {
                let i = e.getChildAt(a).getComponent(Laya.Rigidbody3D);
                i && (i.canCollideWith = 3)
            }
        }
        initChild() {
            let e = this.owner;
            for (let a = 0; a < e.numChildren; a++) {
                let i = e.getChildAt(a);
                switch (i.name) {
                    case "brick":
                        let e = i.addComponent(Laya.Rigidbody3D);
                        e.canCollideWith = 1, e.collisionGroup = 3;
                        let a = new Laya.BoxColliderShape(4, 1.5, 1.5);
                        e.colliderShape = a;
                        break;
                    case "coin":
                        i.addComponent(c)
                }
            }
        }
    }
    class w {
        constructor() {
            this.__dis = 0, this.__obj = null, this.__sawPrefab = null, this.__coinPrefab = null, this.__awardEffect = null, this.__coinEffect = null, this.__left = !0, this.__final = !1, this.__woodLevel = !1, this.__zero = new Laya.Vector3(0, 0, 0), this.__modeArr = [], this.__modePrefab = [], this.__barPrefab = [], this.__wallPrefab = [], this.__awardPrefab = [], w.Instance = this
        }
        gameInit() {
            this.__obj = new Laya.Sprite3D("obs"), s.Instance.addToScene(this.__obj);
            let e = Laya.loader.getRes("res/digWood/digWood.lh");
            this.__sawPrefab = e.getChildByName("saw"), this.__coinPrefab = e.getChildByName("coin"), this.__modePrefab.push(e.getChildByName("wood0")), this.__modePrefab.push(e.getChildByName("wood1")), this.__modePrefab.push(e.getChildByName("gold")), this.__modePrefab.push(e.getChildByName("endMode")), this.__barPrefab.push(e.getChildByName("bar")), this.__barPrefab.push(e.getChildByName("goldBar")), this.__barPrefab.push(e.getChildByName("endBar")), this.__wallPrefab.push(e.getChildByName("wall0")), this.__wallPrefab.push(e.getChildByName("wall1")), this.__wallPrefab.push(e.getChildByName("wall2")), this.__wallPrefab.push(e.getChildByName("wall3")), this.__awardPrefab.push(e.getChildByName("award0")), this.__awardPrefab.push(e.getChildByName("award1")), this.__awardPrefab.push(e.getChildByName("award2")), this.__awardPrefab.push(e.getChildByName("award3")), this.__awardPrefab.push(e.getChildByName("award4")), this.__awardPrefab.push(e.getChildByName("award5")), this.__awardPrefab.push(e.getChildByName("award6")), this.__awardEffect = e.getChildByName("AwardEffect"), s.Instance.addToScene(this.__awardEffect), this.showAwardEffect(!1), this.__coinEffect = e.getChildByName("coinEffect"), s.Instance.addToScene(this.__coinEffect), this.__woodLevel = L.Instance.__curLevel % 5 != 0
        }
        gameUpdate(e) {
            if (!this.__final) {
                f.Instance.__knife.transform.localPositionZ >= this.__dis - 300 && this.createGameModel(this.__woodLevel)
            }
            this.recycle()
        }
        recycle() {
            let e = f.Instance.__knife.transform.localPositionZ;
            for (let a = 0; a < this.__modeArr.length; a++) {
                let i = this.__modeArr[a];
                !i.destroyed && i.transform.localPositionZ < e - 300 && i.destroy()
            }
        }
        levelReset() {
            for (; this.__modeArr.pop(););
            for (; this.__obj.getChildAt(0);) this.__obj.getChildAt(0).destroy();
            this.showAwardEffect(!1), this.showCoinEffect(!1), this.__woodLevel = L.Instance.__curLevel % 5 != 0, this.__final = !1, this.__dis = 0
        }
        levelRelive() {
            let e = f.Instance.__knife.transform.localPositionZ;
            for (let a = 0; a < this.__modeArr.length; a++) {
                let i = this.__modeArr[a];
                !i.destroyed && i.transform.localPositionZ < e && i.destroy()
            }
        }
        addSaw(e, a) {
            if (L.Instance.__curLevel % 3 == 0) {
                let a = e.getComponent(Laya.PhysicsCollider).colliderShape.sizeZ,
                    i = this.__sawPrefab.clone();
                e.addChild(i), i.transform.localPosition = new Laya.Vector3(0, 1.9, Math.random() * a), i.transform.localRotationEulerY = this.__left ? 180 : 0, i.addComponent(r).setDir(this.__left), this.__left = !this.__left
            } else {
                let i = Math.floor(5.99 * Math.random());
                this.createAwardMode(e, a, i)
            }
        }
        createFinal() {
            if (!this.__final) {
                this.__final = !0;
                let e = 2,
                    a = new Laya.Sprite3D("mode"),
                    i = a.addChild(new Laya.Sprite3D("end"));
                for (let a = 0; a < e; a++) {
                    let e = this.__modePrefab[3].clone();
                    i.addChild(e), e.transform.localPositionX = e.transform.localPositionY = 0, e.transform.localPositionZ = 60 * a + 30, a > 0 && (e.getChildAt(0).destroy(), e.removeChildAt(0))
                }
                let t = a.addChild(new Laya.Sprite3D("bar0")).addChild(this.__barPrefab[2].clone());
                t.transform.localPosition = new Laya.Vector3(0, 0, 30 * e), t.transform.localScaleZ = e;
                let n = a.addChild(new Laya.Sprite3D("bar1"));
                n.transform.localPositionZ = 60 * e;
                let o = n.addChild(this.__barPrefab[2].clone());
                o.transform.localPosition = new Laya.Vector3(0, 0, 30 * -e), o.transform.localScaleZ = e;
                let s = new Laya.BoxColliderShape(4, 5, 60 * e);
                s.localOffset = new Laya.Vector3(0, -2.5, 30 * e), a.addComponent(Laya.PhysicsCollider).colliderShape = s, a.transform.localPositionY = 0, a.transform.localPositionZ = this.__dis, this.__dis += 60 * e, this.__obj.addChild(a), this.createAwardMode(a, 60 * e, 6)
            }
        }
        createAwardCoin(e, a) {
            let i = this,
                n = 1,
                o = () => {
                    if (n > e) return void Laya.timer.clear(i, o);
                    let s = i.__coinPrefab.clone();
                    s.transform.localPosition = a;
                    let r = s.addComponent(c);
                    i.__obj.addChild(s), r.hide(), Laya.SoundManager.playSound(t.COIN), y.Instance.addCoin(), n++
                };
            Laya.timer.loop(100, i, o)
        }
        showAwardEffect(e, a = this.__zero) {
            this.__awardEffect.transform.localPosition = a;
            let i = this.__awardEffect.getChildAt(0),
                t = i.getChildAt(0);
            i.particleSystem.stop(), t.particleSystem.stop(), e && (i.particleSystem.play(), t.particleSystem.play())
        }
        showCoinEffect(e, a = this.__zero) {
            this.__coinEffect.transform.localPosition = a;
            let i = this.__coinEffect;
            i.particleSystem.stop(), e && i.particleSystem.play()
        }
        createGameModel(e) {
            let a = 5 + Math.floor(5 * Math.random()),
                i = new Laya.Sprite3D("mode"),
                t = 0;
            if (e) {
                let e = i.addChild(new Laya.Sprite3D("wood"));
                for (let i = 0; i < a; i++) {
                    let a = Math.floor(1.99 * Math.random()),
                        t = this.__modePrefab[a].clone();
                    t.transform.localPositionX = t.transform.localPositionY = 0, t.transform.localPositionZ = 20 * i + 10, e.addChild(t), i > 0 && t.removeChildAt(0)
                }
            } else {
                let e = i.addChild(new Laya.Sprite3D("gold"));
                for (let i = 0; i < a; i++) {
                    let a = this.__modePrefab[2].clone();
                    a.transform.localPositionX = a.transform.localPositionY = 0, a.transform.localPositionZ = 20 * i + 10, e.addChild(a), i > 0 && a.removeChildAt(0)
                }
                t = 1
            }
            let n = i.addChild(new Laya.Sprite3D("bar0")).addChild(this.__barPrefab[t].clone());
            n.transform.localPosition = new Laya.Vector3(0, 0, 10 * a), n.transform.localScaleZ = a;
            let o = i.addChild(new Laya.Sprite3D("bar1"));
            o.transform.localPositionZ = 20 * a;
            let s = o.addChild(this.__barPrefab[t].clone());
            s.transform.localPosition = new Laya.Vector3(0, 0, 10 * -a), s.transform.localScaleZ = a;
            let r = new Laya.BoxColliderShape(3.2, .5, 20 * a);
            r.localOffset = new Laya.Vector3(0, -.25, 10 * a), i.addComponent(Laya.PhysicsCollider).colliderShape = r, i.transform.localPositionY = 0, i.transform.localPositionZ = this.__dis, this.__dis += 20 * a, this.__obj.addChild(i), this.__modeArr.push(i);
            let l = Math.random();
            if (l > .75) {
                let e = Math.floor(5.99 * Math.random());
                this.createAwardMode(i, 20 * a, e)
            } else l > .5 ? this.createWallMode(i, 20 * a) : l > .25 ? (this.addSaw(i, 20 * a), this.__dis += 100) : this.__dis += 100
        }
        createAwardMode(e, a, i) {
            let t = this.__awardPrefab[i].clone();
            switch (e.addChild(t), t.transform.localPositionX = t.transform.localPositionY = 0, i) {
                case 1:
                    t.transform.localPositionZ = a + 20, this.__dis += 120;
                    break;
                case 0:
                case 2:
                case 3:
                    t.transform.localPositionZ = a, this.__dis += 100;
                    break;
                case 4:
                case 5:
                    t.transform.localPositionZ = a + 40, this.__dis += 140;
                    break;
                case 6:
                    t.transform.localPositionZ = a, this.__dis += 100
            }
            for (let e = 0; e < t.numChildren; e++) {
                let a = t.getChildAt(e);
                switch (a.name) {
                    case "coin":
                        a.addComponent(c);
                        break;
                    case "0":
                    case "2":
                    case "5":
                    case "10":
                    case "20":
                    case "50":
                        a.addComponent(_).setCoinNum(parseInt(a.name))
                }
            }
        }
        createWallMode(e, a) {
            let i = Math.floor(Math.random() * (this.__wallPrefab.length - .1));
            if (0 == i) {
                let t = 1;
                for (let n = 0; n < t; n++) {
                    let t = this.__wallPrefab[i].clone();
                    e.addChild(t), t.transform.localPositionX = t.transform.localPositionY = 0, t.transform.localPositionZ = a - 10 * (n + 1), t.addComponent(m).init()
                }
                this.__dis += 100
            } else if (1 == i) {
                let t = 1;
                for (let n = 0; n < t; n++) {
                    let t = this.__wallPrefab[i].clone();
                    e.addChild(t), t.transform.localPositionX = t.transform.localPositionY = 0, t.transform.localPositionZ = a + 30 + 5 * n, t.addComponent(m).init()
                }
                this.__dis += 130 + 5 * t
            } else {
                let t = this.__wallPrefab[i].clone();
                e.addChild(t), t.transform.localPositionX = t.transform.localPositionY = 0, t.transform.localPositionZ = a + 20, t.addComponent(m).init(), this.__dis += 140
            }
        }
    }
    class g extends Laya.Script3D {
        constructor() {
            super(), this.changeWood = null, this.obj = this.owner, this.lastPosZ = 0, this.barLength = 0
        }
        onUpdate() {
            let e = Laya.timer.delta / 1e3;
            switch (L.Instance.__curState) {
                case n.READY:
                case n.PLAYING:
                    f.Instance.gameUpdate(e), w.Instance.gameUpdate(e), p.Instance.gameUpdate(2 * e)
            }
        }
        onTriggerEnter(e) {
            if (f.Instance.__isPlaying) switch (e.owner.name) {
                case "winBox":
                    y.Instance.gameWin();
                    break;
                case "wall":
                    f.Instance.changeRollSkin(2);
                    break;
                case "mode":
                case "wood":
                case "endModel":
                    f.Instance.createRoll(), this.changeWood != e.owner && (this.changeWood = e.owner, this.lastPosZ = 0), this.obj = this.owner;
                    let a = this.obj.transform.localPositionZ + 2 - this.changeWood.transform.localPositionZ,
                        i = this.changeWood.getChildByName("bar0");
                    if (this.barLength = this.changeWood.getComponent(Laya.PhysicsCollider).colliderShape.sizeZ, 1 == i.transform.localScaleZ) i.transform.localScaleZ = a / this.barLength, this.changeWood.getChildByName("bar1").transform.localScaleZ = (this.barLength - a) / this.barLength;
                    else {
                        let e = i.clone();
                        e.transform.localPositionZ = this.lastPosZ, e.transform.localScaleZ = (a - this.lastPosZ) / this.barLength, this.changeWood.addChild(e)
                    }
                    break;
                case "brick":
                    e.owner.parent.getComponent(m).__change || f.Instance.die();
                    break;
                case "saw":
                    f.Instance.die();
                    break;
                case "coin":
                    e.owner.getComponent(c).hide(), Laya.SoundManager.playSound(t.COIN), y.Instance.addCoin()
            }
        }
        onTriggerStay(e) {
            if (f.Instance.__isPlaying) switch (e.owner.name) {
                case "wall":
                    f.Instance.changeRollSkin(2);
                    break;
                case "mode":
                case "wood":
                case "endModel":
                    this.obj = this.owner;
                    let a = this.obj.transform.localPositionZ + 2 - this.changeWood.transform.localPositionZ;
                    this.barLength - a > .1 ? this.changeWood.getChildByName("bar1").transform.localScaleZ = (this.barLength - a) / this.barLength : this.changeWood.getChildByName("bar1").active = !1
            }
        }
        onTriggerExit(e) {
            if (f.Instance.__isPlaying) switch (e.owner.name) {
                case "wall":
                    f.Instance.changeRollSkin(2);
                    break;
                case "mode":
                case "wood":
                case "endModel":
                    this.obj = this.owner;
                    let a = this.obj.transform.localPositionZ + 2 - this.changeWood.transform.localPositionZ;
                    this.barLength - a > .1 ? this.changeWood.getChildByName("bar1").transform.localScaleZ = (this.barLength - a) / this.barLength : this.changeWood.getChildByName("bar1").active = !1, this.lastPosZ = a, f.Instance.releaseRoll()
            }
        }
    }
    class u extends Laya.Script3D {
        constructor() {
            super()
        }
        onCollisionEnter(e) {
            switch (e.other.owner.name) {
                case "saw":
                    e.other.owner.getComponent(r).broken();
                    break;
                case "brick":
                    e.other.owner.parent.getComponent(m).change()
            }
        }
        onTriggerEnter(e) {
            switch (e.owner.name) {
                case "coin":
                    e.owner.getComponent(c).hide(), Laya.SoundManager.playSound(t.COIN), y.Instance.addCoin();
                    break;
                case "winBox":
                    y.Instance.gameWin()
            }
        }
    }
    class f {
        constructor() {
            this.__angleRate = 174.65 / 180, f.Instance = this, this.__press = !1, this.__isCreate = !1, this.__canAdd = !1, this.__isPlaying = !1, this.__move = !0, this.__knife = null, this.__roll = new Laya.Sprite3D, this.__rollNode = null, this.__knifeRigid = null, this.__rollPrefab = null, this.__moveSpeed = 40, this.__createTime = 0, this.__showIndex = 0, this.__addCount = 0, this.__colliderR = 0, this.__rollLength = 456, this.__knifeAngle = 5, this.__shakeCount = 0, this.__reliveCount = 0, this.__offset = new Laya.Vector3(0, 0, 0), this.__centerArr = [], this.__disArr = [], this.__angleArr = [], this.__rollArr = []
        }
        gameInit() {
            let e = Laya.loader.getRes("res/digWood/digWood.lh");
            this.__knife = e.getChildByName("knife").clone(), this.__knifeRigid = this.__knife.addComponent(Laya.Rigidbody3D);
            let a = new Laya.BoxColliderShape(3.2, 1, 7);
            a.localOffset = new Laya.Vector3(0, 0, -2.2), this.__knifeRigid.colliderShape = a, this.__knifeRigid.collisionGroup = 1, this.__knifeRigid.isTrigger = !0, this.__knifeRigid.isKinematic = !0, this.__knife.addComponent(g), this.__knife.transform.localPosition = new Laya.Vector3(0, 5, -100), s.Instance.addToScene(this.__knife), p.Instance.changeTarget(this.__knife), this.__rollNode = new Laya.Sprite3D("rollNode"), s.Instance.addToScene(this.__rollNode), this.__rollPrefab = e.getChildByName("roll");
            for (let e = 0; e < this.__rollPrefab.numChildren; e++) {
                let a = this.__rollPrefab.getChildAt(e).meshRenderer.bounds.getCenter();
                a.x = 0, this.__centerArr[e] = a, this.__disArr[e] = Math.sqrt(Math.pow(a.z, 2) + Math.pow(a.y, 2)), this.__angleArr[e] = Math.atan(a.y / a.z) * (180 / Math.PI)
            }
            this.changeKnife(d.Instance._gameData_.curKnife), this.changeRollSkin(L.Instance.__curLevel % 5 == 0 ? 1 : 0), this.showWoodBitsEffect(!1), this.__reliveCount = 1
        }
        gameUpdate(e) {
            this.move(e), this.__press ? (this.__knife.transform.localRotationEulerX = Laya.MathUtil.lerp(this.__knife.transform.localRotationEulerX, this.__knifeAngle, 2 * e), this.__knife.transform.localPositionY = Laya.MathUtil.lerp(this.__knife.transform.localPositionY, 0, 4 * e), this.showRollItem()) : (this.__knife.transform.localRotationEulerX = Laya.MathUtil.lerp(this.__knife.transform.localRotationEulerX, 5, 2 * e), this.__knife.transform.localPositionY = Laya.MathUtil.lerp(this.__knife.transform.localPositionY, 5, 4 * e));
            for (let e = 0; e < this.__rollArr.length; e++) {
                let a = this.__rollArr[e];
                if (a && !a.destroyed && a.transform.localPositionY <= -60) {
                    a.destroy();
                    break
                }
            }
        }
        move(e) {
            this.__move && (this.__knife.transform.translate(new Laya.Vector3(0, 0, this.__moveSpeed * e), !1), w.Instance.__final && this.__knife.transform.localPositionZ >= w.Instance.__dis && (this.__move = !1, y.Instance.gameWin()))
        }
        showRollItem() {
            if (this.__isCreate && this.__showIndex < this.__rollLength) {
                this.__shakeCount++, this.__shakeCount >= 30 && (this.__shakeCount = 0, h.shakeScreen()), y.Instance.setLeveBar(1);
                this.__centerArr[this.__showIndex];
                let e = this.__disArr[this.__showIndex],
                    a = this.__angleArr[this.__showIndex];
                (a += 90) / 180 >= this.__angleRate && (this.__canAdd = !0), a += 180 * this.__addCount, this.__canAdd && (this.__addCount++, this.__canAdd = !1), this.__offset.y = e, this.__offset.z = this.__knife.transform.localPositionZ + 2, this.__roll.transform.localPosition = new Laya.Vector3(0, this.__offset.y, this.__offset.z), this.__roll.transform.localRotationEulerX = a;
                let i = this.__rollPrefab.getChildAt(this.__showIndex).clone();
                this.__roll.addChild(i), this.__showIndex++, this.__colliderR = e
            }
        }
        createRoll() {
            this.__isCreate || (this.__isCreate = !0, this.__roll = new Laya.Sprite3D("roll"), this.__rollNode.addChild(this.__roll), this.__showIndex = 0, this.__canAdd = !1, this.__addCount = 0, this.showWoodBitsEffect(!0), this.__knifeAngle = 10)
        }
        releaseRoll() {
            if (this.__isCreate = !1, this.__roll) {
                let e = this.__roll,
                    a = e.addComponent(Laya.Rigidbody3D);
                a.collisionGroup = 1;
                let i = new Laya.SphereColliderShape(this.__colliderR);
                a.colliderShape = i, a.overrideGravity = !0, a.mass = 10, a.gravity = new Laya.Vector3(0, -100, 0);
                let t = new Laya.Vector3(0, 50 * this.__colliderR, 150 * this.__colliderR);
                a.applyImpulse(t), e.addComponent(u), this.__rollArr.push(e), L.Instance.__curLevel % 5 == 0 && w.Instance.showCoinEffect(!0, new Laya.Vector3(0, 0, this.__knife.transform.localPositionZ)), this.__change && (p.Instance.changeTarget(e), this.__press = !1, this.removeCtrl(), this.__isPlaying = !1, this.__move = !1)
            }
            this.__knifeAngle = 30, this.__canAdd = !1, this.__addCount = 0, this.__roll = null, this.__showIndex = 0, this.__colliderR = 0, this.__offset = new Laya.Vector3(0, 0, 0), this.showWoodBitsEffect(!1)
        }
        showWoodBitsEffect(e) {
            let a = this.__knife.getChildAt(this.__knife.numChildren - 1),
                i = a.getChildAt(0);
            a.particleSystem.stop(), i.particleSystem.stop(), L.Instance.__curLevel % 5 != 0 && e && (a.particleSystem.play(), i.particleSystem.play())
        }
        addCtrl() {
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onTouchDown), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onTouchUp)
        }
        removeCtrl() {
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onTouchDown), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onTouchUp)
        }
        onTouchDown(e) {
            this.__press = !0, this.__knifeAngle = 30, y.Instance.showGameTip(!1)
        }
        onTouchUp(e) {
            this.__press = !1, this.__knifeAngle = 5, y.Instance.showGameTip(!0)
        }
        playerReady() {
            this.__press = !1, this.addCtrl(), this.__isPlaying = !0
        }
        playerReset() {
            for (this.__press = !1, Laya.Tween.clearAll(this.__knife.transform), this.removeCtrl(), this.__isPlaying = !1, this.__move = !0, this.__change = !1, this.__roll = null, this.__reliveCount = 1, this.__knife.transform.localPosition = new Laya.Vector3(0, 5, -100), this.__knife.transform.localRotationEulerX = 5, this.changeRollSkin(L.Instance.__curLevel % 5 == 0 ? 1 : 0), this.showWoodBitsEffect(!1); this.__rollArr.pop(););
            for (; this.__rollNode.getChildAt(0);) this.__rollNode.getChildAt(0).destroy()
        }
        changeSkin(e) {
            let a = this.__knife.getChildAt(0);
            for (let i = 0; i < a.numChildren; i++) {
                a.getChildAt(i).active = i == e
            }
        }
        changeKnife(e) {
            let a = this.__knife.getChildAt(1);
            for (let i = 0; i < a.numChildren; i++) a.getChildAt(i).active = e == i
        }
        changeRollSkin(e) {
            let a = "",
                i = 1;
            switch (e) {
                case 0:
                    a = "res/digWood/Assets/woodRoll.jpg";
                    break;
                case 1:
                    a = "res/digWood/Assets/goldRoll.jpg";
                    break;
                case 2:
                    a = "res/digWood/Assets/endPoint.jpg", i = 3.3, this.__change = !0
            }
            let t = L.Instance.getPBRStandardMaterial(a);
            for (let e = 0; e < this.__rollPrefab.numChildren; e++) {
                let a = this.__rollPrefab.getChildAt(e);
                a.transform.localScaleX = i, a.meshRenderer.materials = [t]
            }
        }
        die() {
            Laya.SoundManager.playSound(t.COLLIDE), this.__move = !1, this.__isCreate = !1, this.removeCtrl(), this.__reliveCount >= 1 ? y.Instance.showReliveUI() : y.Instance.gameLose()
        }
        relive() {
            for (this.__roll = null; this.__rollArr.pop(););
            for (; this.__rollNode.getChildAt(0);) this.__rollNode.getChildAt(0).destroy();
            this.__reliveCount--, this.__knife.transform.localRotationEulerX = 5, this.__knife.transform.localPosition = new Laya.Vector3(0, 5, this.__knife.transform.localPositionZ - 100), this.showWoodBitsEffect(!1), this.__move = !0, this.addCtrl()
        }
    }
    class p {
        constructor() {
            p.Instance = this, this.__camera = new Laya.Camera(9 / 16, .1, 500), this.__camera.clearFlag = Laya.Camera.CLEARFLAG_SOLIDCOLOR, this.__camera.clearColor = new Laya.Vector4(o[0].x, o[0].y, o[0].z, 1), s.Instance.addToScene(this.__camera), this.__offset = new Laya.Vector3(-10, 20, -30), this.__rotate = new Laya.Vector3(-20, 190, 0), this.__cameraPos = this.__offset.clone(), this.__target = null
        }
        gameInit() {
            this.__camera.transform.localPosition = this.__offset, this.__camera.transform.rotationEuler = this.__rotate
        }
        gameUpdate(e) {
            this.updatePos(e)
        }
        updatePos(e) {
            this.__target && !this.__target.destroyed && (this.__camera.transform.localPositionX = Laya.MathUtil.lerp(this.__camera.transform.localPositionX, this.__target.transform.localPositionX + this.__offset.x, e), this.__camera.transform.localPositionY = Laya.MathUtil.lerp(this.__camera.transform.localPositionY, this.__target.transform.localPositionY + this.__offset.y, e), this.__camera.transform.localPositionZ = Laya.MathUtil.lerp(this.__camera.transform.localPositionZ, this.__target.transform.localPositionZ + this.__offset.z, e))
        }
        gameReset() {
            this.__camera.transform.localPosition = this.__offset, this.__camera.transform.rotationEuler = this.__rotate, this.__target = f.Instance.__knife
        }
        changeTarget(e) {
            this.__target = e
        }
        changeGameColor() {
            let e = Math.floor(Math.random() * (o.length - .1));
            Laya.Tween.clearAll(this.__camera.clearColor);
            let a = o[e];
            Laya.Tween.to(this.__camera.clearColor, {
                x: a.x,
                y: a.y,
                z: a.z
            }, 1e3), s.Instance.changeSceneColor(e)
        }
    }
    class L {
        constructor() {
            L.Instance = this, this.__ResourceMgr = new i, this.__GameData = new d, this.__GameData.ReadData(), this.__curState = n.READY, this.__SceneManager = new s, this.__CameraManager = new p, this.__PlayerController = new f, this.__LevelManager = new w, this.__curLevel = this.__GameData._gameData_.passLevel + 1, this.__getReward = !1
        }
        gameInit() {
            this.__ResourceMgr.gameInit()
        }
        gameLoadInit() {
            this.__SceneManager.gameInit(), this.__CameraManager.gameInit(), this.__PlayerController.gameInit(), this.__LevelManager.gameInit(), Laya.stage.getChildByName("loadingBg").visible = !1, y.Instance.openUI("menu"), y.Instance.selectSkin(d.Instance._gameData_.curSkin), y.Instance.updateChargeBox()
        }
        gameWin() {
            this.__curLevel++, this.__GameData._gameData_.passLevel++, d.Instance.SaveData()
        }
        getPBRStandardMaterial(e) {
            let a = new Laya.PBRStandardMaterial;
            return a.albedoColor = new Laya.Vector4(1, 1, 1, 1), a.albedoTexture = Laya.loader.getRes(e), a.smoothnessSource = 1, a.smoothnessTextureScale = 0, a.metallic = 1, a.enableEmission = !0, a.emissionColor = new Laya.Vector4(200 / 255, 200 / 255, 200 / 255, 1), a.emissionTexture = Laya.loader.getRes(e), "res/digWood/Assets/endPoint.jpg" == e && (a.tilingOffset = new Laya.Vector4(1, 3, 0, 0)), a
        }
    }
    class y extends e.MenuViewUI {
        constructor() {
            super(), this.__win = !1, this.__randUnLock = !1, this.showVideo = function(e) {
                console.log("4399游戏显示视频");
                let a = this;
                Laya.Browser.window.h5api.canPlayAd(i => {
                    console.log("广告次数data.remain", i.remain), i.remain > 0 ? (a.isShowAllAdBtn(!0), a.isCloseVideo = !0, 1 == a.isVideoPlay && Laya.Browser.window.h5api.playAd(i => {
                        1e4 === i.code ? (console.log("开始播放"), a.pauseMusic()) : 10001 === i.code ? (console.log("播放结束"), 0 == a.soundMask.visible ? (a.resumeMusic(), a.isVideoPlay = !1) : a.pauseMusic(), e(!0)) : console.log("广告异常"), console.log(e)
                    })) : (a.isVideoPlay = !1, a.isCloseVideo = !1, a.isShowAllAdBtn(!1))
                })
            }, y.Instance = this, this.levelLength = 1e3, this.curLevelLength = 0, this.__showCount = 0, this.__curLevelCoin = 0, this.__curPage = 0, this.__gameLockIndex = -1, this.__boxPosX = [320, -280, -880], this.__checked = !1, this.isVideoPlay = !1, this.isCloseVideo = !1
        }
        onEnable() {
            window.MainView = this, this.btn_shake.visible = !1, this.openUI("menu", !1), this.initSkinUI(), this.bindButtons(), this.levelBar.width = 0, this.changCoinTxt("" + d.Instance._gameData_.coin), this.changeLevelTxt("" + L.Instance.__curLevel), this.soundMask.visible = !d.Instance._gameData_.musicState, this.shakeMask.visible = !d.Instance._gameData_.shakeState, this.checkUnLockInfo(), this.push_checkBox.getChildAt(0).visible = this.__checked, "vivo" != window.miniGameName && Laya.SoundManager.playMusic(t.BGM, 0), this.resumeMusic(), "oppo" == window.miniGameName ? (this.initNativeBox(), Laya.timer.loop(1e4, this, () => {
                h.instance.viewOppoBanner(), h.instance.viewVivoBanner()
            })) : "vivo" == window.miniGameName ? (this.initNativeBox(), Laya.timer.loop(15e3, this, () => {
                h.instance.viewVivoBanner()
            })) : h.viewBanner(!0), console.log("skin_buy.visible", this.skin_buy.visible)
        }
        bindButtons() {
            let e = this;
            this.btn_start.on(Laya.Event.CLICK, this, () => {
                "vivo" != window.miniGameName && Laya.SoundManager.playMusic(t.BGM, 0), Laya.SoundManager.playSound(t.CLICK), e.openUI("menu", !1), e.openUI("game"), e.showPushBox(), 0 == e.isCloseVideo && e.gameStart(), console.log("relive_ad.visible", e.relive_ad.visible), console.log("charge_ad.visible", e.charge_ad.visible)
            }), this.btn_skin.on(Laya.Event.CLICK, this, () => {
                Laya.SoundManager.playSound(t.CLICK), e.openUI("skin")
            }), this.btn_charge.on(Laya.Event.CLICK, this, () => {
                Laya.SoundManager.playSound(t.CLICK), e.charge_box.visible = !0
            }), this.btn_sound.on(Laya.Event.CLICK, this, () => {
                Laya.SoundManager.playSound(t.CLICK), e.changeSoundState()
            }), this.btn_shake.on(Laya.Event.CLICK, this, () => {
                Laya.SoundManager.playSound(t.CLICK), e.changeShakeState()
            }), this.charge_finish.on(Laya.Event.CLICK, this, () => {
                Laya.SoundManager.playSound(t.CLICK), e.showLabel("Đã nâng cấp lên vàng!")
            }), this.charge_ad.on(Laya.Event.CLICK, this, () => {
                Laya.SoundManager.playSound(t.CLICK);
                let a = !0;
                e.isVideoPlay = !0, e.showVideo(i => {
                    i && a && e.upperChargeLevel(), a = !1
                })
            }), this.charge_buy.on(Laya.Event.CLICK, this, () => {
                Laya.SoundManager.playSound(t.CLICK);
                let a = parseInt(e.charge_coin.value);
                d.Instance._gameData_.coin >= a ? (d.Instance._gameData_.coin -= a, d.Instance.SaveData(), e.changCoinTxt("" + d.Instance._gameData_.coin), e.upperChargeLevel()) : e.showLabel("Chưa đủ xu!")
            }), this.charge_close.on(Laya.Event.CLICK, this, () => {
                Laya.SoundManager.playSound(t.CLICK), e.charge_box.visible = !1
            }), this.skin_front.on(Laya.Event.CLICK, this, () => {
                e.__randUnLock || (Laya.SoundManager.playSound(t.CLICK), e.__curPage = e.__curPage - 1 < 0 ? 0 : this.__curPage - 1, e.updateSkinPage())
            }), this.skin_next.on(Laya.Event.CLICK, this, () => {
                e.__randUnLock || (Laya.SoundManager.playSound(t.CLICK), e.__curPage = e.__curPage + 1 > 2 ? 2 : this.__curPage + 1, e.updateSkinPage())
            }), this.skin_ad.on(Laya.Event.CLICK, this, () => {
                if (!e.__randUnLock) {
                    Laya.SoundManager.playSound(t.CLICK);
                    let a = !0;
                    e.isVideoPlay = !0, e.showVideo(i => {
                        i && a && e.randomUnLock(), a = !1
                    })
                }
            }), this.skin_buy.on(Laya.Event.CLICK, this, () => {
                e.__randUnLock || (Laya.SoundManager.playSound(t.CLICK), e.useCoin())
            }), this.skin_close.on(Laya.Event.CLICK, this, () => {
                e.__randUnLock || (Laya.SoundManager.playSound(t.CLICK), e.openUI("skin", !1))
            }), this.win_ad.on(Laya.Event.CLICK, this, () => {
                Laya.SoundManager.playSound(t.CLICK);
                let a = !0;
                e.isVideoPlay = !0, e.showVideo(i => {
                    i && a && (e.__curLevelCoin *= 5, e.getWinCoin(), e.showLabel("Nhận x5 phần thưởng!"), e.gameReset(), e.openUI("win", !1), e.openUI("menu"), p.Instance.changeGameColor()), a = !1
                })
            }), this.win_next.on(Laya.Event.CLICK, this, () => {
                Laya.SoundManager.playSound(t.CLICK), e.getWinCoin(), e.gameReset(), e.openUI("win", !1), e.openUI("menu"), p.Instance.changeGameColor()
            }), this.relive_ad.on(Laya.Event.CLICK, this, () => {
                Laya.SoundManager.playSound(t.CLICK);
                let a = !0;
                e.isVideoPlay = !0, e.showVideo(i => {
                    i && a && (e.gameRelive(), e.showLabel("Hồi sinh thành công!")), a = !1
                })
            }), this.relive_skip.on(Laya.Event.CLICK, this, () => {
                Laya.SoundManager.playSound(t.CLICK), e.openUI("relive", !1), e.gameLose()
            }), this.lose_again.on(Laya.Event.CLICK, this, () => {
                Laya.SoundManager.playSound(t.CLICK), e.getWinCoin(), e.gameReset(), e.openUI("lose", !1), e.openUI("menu"), p.Instance.changeGameColor()
            }), this.push_ad.on(Laya.Event.CLICK, this, () => {
                Laya.SoundManager.playSound(t.CLICK);
                let a = !0;
                e.isVideoPlay = !0, e.showVideo(i => {
                    if (i && a && -1 != e.__gameLockIndex) {
                        let a = Math.floor(e.__gameLockIndex / 4);
                        e.skin_box.getChildAt(a).getChildAt(e.__gameLockIndex % 4).getChildAt(1).visible = !1, d.Instance._gameData_.skinLock[e.__gameLockIndex] = !0, e.selectSkin(e.__gameLockIndex), e.pushBox.visible = !1, e.gameStart()
                    }
                    a = !1
                })
            }), this.push_close.on(Laya.Event.CLICK, this, () => {
                Laya.SoundManager.playSound(t.CLICK), e.pushBox.visible = !1, e.gameStart()
            }), this.push_checkBox.on(Laya.Event.CLICK, this, () => {
                Laya.SoundManager.playSound(t.CLICK), e.__checked = !e.__checked, e.push_checkBox.getChildAt(0).visible = e.__checked
            })
        }
        openUI(e, a = !0) {
            switch (e) {
                case "menu":
                    h.viewBanner(!0), this.ui_menu.visible = a;
                    break;
                case "game":
                    h.viewBanner(!1), this.ui_game.visible = a;
                    break;
                case "win":
                    h.viewBanner(!0), this.ui_win.visible = a;
                    break;
                case "relive":
                    h.viewBanner(!0), this.ui_relive.visible = a, h.showNativeInBox(this.relive_native);
                    break;
                case "lose":
                    h.viewBanner(!0), this.ui_lose.visible = a;
                    break;
                case "skin":
                    h.viewBanner(!0), this.ui_skin.visible = a
            }
        }
        showPushBox() {
            if (this.__checked) this.gameStart();
            else {
                let e = [],
                    a = 0;
                for (let i = 0; i < d.Instance._gameData_.skinLock.length; i++) d.Instance._gameData_.skinLock[i] || (e[a] = i, a++);
                if (e.length > 0) {
                    let a = e[Math.floor(Math.random() * (e.length - .01))],
                        i = d.Instance._gameData_.curChargeLevel >= 5 ? "D" : "C";
                    this.push_item.getChildAt(0).skin = "ui/" + i + a + ".png", this.__gameLockIndex = a, 1 == this.isCloseVideo && (this.pushBox.visible = !0)
                } else this.pushBox.visible = !1, this.__gameLockIndex = -1, this.gameStart()
            }
        }
        setLeveBar(e) {
            Laya.Tween.clearAll(this.levelBar), this.curLevelLength += e;
            let a = this.curLevelLength / this.levelLength * 276;
            a >= 276 && (a = 276, w.Instance.createFinal()), Laya.Tween.to(this.levelBar, {
                width: a
            }, 500)
        }
        gameStart() {
            f.Instance.playerReady(), L.Instance.__curState = n.PLAYING
        }
        gameWin() {
            if (this.__win) return;
            this.__win = !0, Laya.SoundManager.playSound(t.WIN), L.Instance.__curState = n.WIN, p.Instance.changeTarget(null), Laya.timer.clearAll(this), L.Instance.gameWin(), this.changeLevelTxt("" + L.Instance.__curLevel), this.showWinCoin();
            let e = this;
            Laya.timer.once(1e3, this, () => {
                e.openUI("game", !1), e.openUI("win"), h.viewInsertAd() || e.showNativeBox()
            })
        }
        gameLose() {
            Laya.SoundManager.playSound(t.LOSE), L.Instance.__curState = n.LOSE, Laya.timer.clearAll(this);
            let e = this;
            Laya.timer.once(1e3, this, () => {
                e.openUI("game", !1), e.openUI("lose"), h.viewInsertAd() || e.showNativeBox()
            })
        }
        showReliveUI() {
            L.Instance.__curState = n.RELIVE, Laya.timer.clearAll(this);
            let e = this;
            Laya.timer.once(1e3, this, () => {
                e.openUI("game", !1), e.openUI("relive")
            })
        }
        gameRelive() {
            w.Instance.levelRelive(), f.Instance.relive(), h.viewBanner(!1), this.openUI("relive", !1), this.openUI("game"), L.Instance.__curState = n.PLAYING
        }
        gameReset() {
            L.Instance.__curState = n.READY, f.Instance.playerReset(), p.Instance.gameReset(), w.Instance.levelReset(), this.levelBar.width = 0, this.curLevelLength = 0, this.levelLength = 1e3 * Math.random() + 1e3, this.__showCount = 0, this.game_tip.visible = !0, this.__win = !1, this.__curLevelCoin = 0, L.Instance.__getReward = !1
        }
        addCoin(e = 1) {
            this.__curLevelCoin += e, this.changCoinTxt("" + (d.Instance._gameData_.coin + this.__curLevelCoin))
        }
        getWinCoin() {
            d.Instance._gameData_.coin += this.__curLevelCoin, d.Instance.SaveData(), this.changCoinTxt("" + d.Instance._gameData_.coin)
        }
        changeLevelTxt(e) {
            this.levelText && this.levelText.changeText(e)
        }
        changCoinTxt(e) {
            this.coin.value = e, this.skin_coin.value = e, this.game_coin.value = e
        }
        showWinCoin() {
            this.win_coin.value = "" + this.__curLevelCoin
        }
        checkUnLockInfo() {
            let e = this,
                a = 4 * this.__curPage,
                i = this.__curPage < 2 ? a + 4 : a + 3,
                t = !1,
                n = !1;
            for (let e = a; e < i; e++)
                if (!d.Instance._gameData_.skinLock[e]) {
                    n = !0;
                    break
                } for (let n = a; n < i; n++)
                if (!d.Instance._gameData_.skinLock[n] && 1 == e.isCloseVideo) {
                    t = !0;
                    break
                } this.skin_ad.visible = t, this.skin_buy.visible = n
        }
        showGameTip(e) {
            this.__showCount >= 5 ? this.game_tip.visible = !1 : (e && this.__showCount++, this.game_tip.visible = e)
        }
        updateChargeBox() {
            let e = this,
                a = d.Instance._gameData_.curChargeLevel;
            this.charge_coin.value = "" + 200 * (a + 1), this.charge_txt && this.charge_txt.changeText(20 * a + " %"), this.chargeBar.width = 276 * a * .2;
            let i = a >= 5;
            if (this.charge_buy.visible = !i, 1 == e.isCloseVideo && (e.charge_ad.visible = !i), this.charge_finish.visible = i, i) {
                for (let e = 0; e < this.skin_box.numChildren; e++) {
                    let a = this.skin_box.getChildAt(e);
                    for (let i = 0; i < a.numChildren; i++) {
                        let t = a.getChildAt(i);
                        t.getChildAt(0).skin = "ui/D" + (4 * e + i) + ".png", t.getChildAt(1).visible = !d.Instance._gameData_.skinLock[4 * e + i]
                    }
                }
                d.Instance._gameData_.curKnife = 1, d.Instance.SaveData(), f.Instance.changeKnife(d.Instance._gameData_.curKnife)
            }
        }
        upperChargeLevel() {
            d.Instance._gameData_.curChargeLevel++, d.Instance.SaveData(), this.updateChargeBox(), this.showLabel("Tăng tốc!")
        }
        initSkinUI() {
            let e = this,
                a = d.Instance._gameData_.curChargeLevel >= 5 ? "D" : "C";
            this.ui_skin.visible = !1;
            for (let i = 0; i < this.skin_box.numChildren; i++) {
                let n = this.skin_box.getChildAt(i);
                for (let o = 0; o < n.numChildren; o++) {
                    let s = n.getChildAt(o);
                    s.on(Laya.Event.CLICK, e, () => {
                        e.__randUnLock || d.Instance._gameData_.skinLock[4 * i + o] && (Laya.SoundManager.playSound(t.CLICK), e.selectSkin(4 * i + o))
                    }), s.getChildAt(0).skin = "ui/" + a + (4 * i + o) + ".png", s.getChildAt(1).visible = !d.Instance._gameData_.skinLock[4 * i + o]
                }
            }
            this.updateSkinPage();
            let i = 0;
            for (let e = 0; e < d.Instance._gameData_.skinLock.length; e++) d.Instance._gameData_.skinLock[e] && i++;
            this.buy_coin.value = "" + 200 * i
        }
        updateSkinPage() {
            this.skin_front.visible = this.__curPage > 0, this.skin_next.visible = this.__curPage < 2, this.checkUnLockInfo(), Laya.Tween.clearAll(this.skin_box), Laya.Tween.to(this.skin_box, {
                x: this.__boxPosX[this.__curPage]
            }, 200)
        }
        selectSkin(e) {
            for (let a = 0; a < this.skin_box.numChildren; a++) {
                let i = this.skin_box.getChildAt(a);
                for (let t = 0; t < i.numChildren; t++) {
                    i.getChildAt(t).skin = 4 * a + t == e ? "ui/box1.png" : "ui/box0.png"
                }
            }
            f.Instance.changeSkin(e), d.Instance._gameData_.curSkin = e, d.Instance.SaveData()
        }
        useCoin() {
            let e = this,
                a = this.skin_buy.getChildAt(0).getChildAt(0);
            d.Instance._gameData_.coin >= parseInt(a.value) ? (d.Instance._gameData_.coin -= parseInt(a.value), d.Instance.SaveData(), this.changCoinTxt("" + d.Instance._gameData_.coin), this.randomUnLock(), a.value = "" + (parseInt(a.value) + 200), this.checkUnLockInfo()) : e.showLabel("Không đủ xu!")
        }
        checked(e, a) {
            let i = this.skin_box.getChildAt(this.__curPage);
            for (let a = 0; a < e.length; a++) {
                let t = i.getChildAt(e[a] % 4).getChildAt(1);
                t.scaleX = t.scaleY = 1
            }
            let t = i.getChildAt(e[a] % 4).getChildAt(1);
            t.scaleX = t.scaleY = 1.2
        }
        finish(e, a) {
            let i = this.skin_box.getChildAt(this.__curPage).getChildAt(e[a] % 4).getChildAt(1);
            i.scaleX = i.scaleY = 1, i.visible = !1, Laya.SoundManager.playSound(t.HINT), d.Instance._gameData_.skinLock[e[a]] = !0, d.Instance.SaveData(), this.__randUnLock = !1, this.checkUnLockInfo()
        }
        randomUnLock() {
            this.__randUnLock = !0;
            let e = [],
                a = 0,
                i = 4 * this.__curPage,
                t = this.__curPage < 2 ? i + 4 : i + 3;
            for (let n = i; n < t; n++) d.Instance._gameData_.skinLock[n] || (e[a] = n, a++);
            let n = 0,
                o = 0,
                s = this,
                r = () => {
                    let a = Laya.timer.delta / 1e3;
                    if ((n += a) >= o) {
                        n = 0, o += a;
                        let i = Math.floor(Math.random() * (e.length - .01));
                        s.checked(e, i), o >= .3 && (Laya.timer.clear(s, r), Laya.timer.once(500, s, s.finish, [e, i]))
                    }
                };
            Laya.timer.frameLoop(1, s, r)
        }
        changeSoundState() {
            d.Instance._gameData_.musicState = !d.Instance._gameData_.musicState, d.Instance.SaveData(), this.soundMask.visible = !d.Instance._gameData_.musicState, this.resumeMusic()
        }
        resumeMusic() {
            Laya.SoundManager.setMusicVolume(d.Instance._gameData_.musicState ? 1 : 0), Laya.SoundManager.setSoundVolume(d.Instance._gameData_.musicState ? 1 : 0), Laya.SoundManager.playMusic(d.Instance._gameData_.musicState ? t.BGM : t.EMPTY, 0)
        }
        pauseMusic() {
            Laya.SoundManager.setMusicVolume(0), Laya.SoundManager.setSoundVolume(0), Laya.SoundManager.playMusic(t.EMPTY, 0)
        }
        changeShakeState() {
            d.Instance._gameData_.shakeState = !d.Instance._gameData_.shakeState, d.Instance.SaveData(), this.shakeMask.visible = !d.Instance._gameData_.shakeState
        }
        showNoVideoAd() {
            let e = this,
                a = () => {
                    e.noVideoAd.visible = !1
                };
            Laya.timer.clear(e, a), e.noVideoAd.visible = !0, Laya.timer.once(1e3, e, a)
        }
        initNativeBox() {
            this.nativeBox.visible = !1;
            let e = this;
            this.native_close.on(Laya.Event.CLICK, this, () => {
                e.nativeBox.visible = !1, "oppo" == window.miniGameName && (window.bannerShow = !0, h.instance.viewOppoBanner())
            })
        }
        showNativeBox() {
            "oppo" != window.miniGameName && "vivo" != window.miniGameName || h.showNativeWindow(this.nativeBox, this.nativeBox.getChildAt(1))
        }
        showLabel(e) {
            this.tips && (this.tips.changeText(e), this.tips.visible = !0);
            let a = this;
            Laya.timer.once(1e3, this, function() {
                a.tips.visible = !1
            })
        }
        isShowAllAdBtn(e) {
            this.charge_ad.visible = e, this.push_ad.visible = e, this.skin_ad.visible = e, this.win_ad.visible = e, this.relive_ad.visible = e
        }
    }
    class v {
        constructor() {}
        static init() {
            (0, Laya.ClassUtils.regClass)("running/MenuView.ts", y)
        }
    }
    v.width = 640, v.height = 1136, v.scaleMode = "showall", v.screenMode = "vertical", v.alignV = "middle", v.alignH = "center", v.startScene = "MenuView.scene", v.sceneRoot = "", v.debug = !1, v.stat = !1, v.physicsDebug = !1, v.exportSceneToJson = !0, v.init();
    class C extends Laya.Script {
        constructor() {
            super(), window.platform = this;
            if (window.isDebugModel = !0, window.platformShare = !1, window.platformVideo = !1, window.platformNative = !1, window.platformBanner = !1, window.platformBannerAction = !1, window.platformChaping = !1, window.platformLuping = !1, window.platformMoreGame = !1, window.OppoAdInit = !1, window.isGaming = !1, window.isLargeScreen = !1, window.isOppoMoreGame = !1, window.miniGameName = !1, window.insertShow = !0, window.bannerShow = !0, window.tt) window.tt && (console.log("tt"), window.miniGame = window.tt, window.miniGameName = "toutiao", h.createLupingBtn(), h.createMoreGameBtn());
            else if (window.qq) console.log("qq"), window.miniGame = window.qq, window.miniGameName = "qq", window.qq.showShareMenu({
                showShareItems: ["qq", "qzone"]
            }), this.loadOnLineRes(), h.onShare(), h.initQQBox();
            else if (window.swan) console.log("baidu"), window.miniGame = window.swan, window.miniGameName = "swan";
            else if (window.qg) {
                window.miniGame = window.qg;
                var e = window.qg.getProvider().toLowerCase();
                console.log("version:", e), e && "vivo" == e ? (console.log("vivo"), window.miniGameName = "vivo") : e && "oppo" == e ? (console.log("oppo"), window.miniGameName = "oppo", this.oppoSDK()) : e && "xiaomi" == e && (console.log("xiaomi"), window.miniGameName = "xiaomi", h.xiaomiLogin())
            } else window.wx ? (console.log("weixin"), window.miniGame = window.wx, window.miniGameName = "weixin", this.loadOnLineRes()) : window.uc ? (console.log("uc"), window.miniGame = window.uc, window.miniGameName = "uc") : (console.log("h5"), window.miniGameName = "h5");
            this.initSDK()
        }
        initSDK() {
            window.isDebugModel || ("h5" != window.miniGameName && (window.platformVideo = !0), "vivo" != window.miniGameName && "oppo" != window.miniGameName && "qq" != window.miniGameName || (window.platformChaping = !0), "h5" != window.miniGameName && (window.platformBanner = !0), "vivo" != window.miniGameName && "oppo" != window.miniGameName || (window.platformNative = !0)), "weixin" != window.miniGameName && "toutiao" != window.miniGameName && "swan" != window.miniGameName && "qq" != window.miniGameName || (window.platformShare = !0), "swan" != window.miniGameName && "toutiao" != window.miniGameName || (window.platformLuping = !0), "weixin" == window.miniGameName && (window.platformMoreGame = !0)
        }
        onAwake() {
            var e = new Laya.Image;
            e.name = "loadingBg", e.top = -100, e.left = -100, e.right = -100, e.bottom = -100, e.loadImage("ui/loadingImg.jpg", Laya.Handler.create(this, () => {
                Laya.stage.addChild(e), e.zOrder = 1e4
            })), e.mouseThrough = !0, "qq" == window.miniGameName && Laya.timer.once(3e4, this, () => {
                window.insertShow = !0
            })
        }
        oppoSDK() {
            qg.initAdService({
                appId: "30249425",
                success: function(e) {
                    window.OppoAdInit = !0
                },
                fail: function(e) {},
                complete: function(e) {}
            })
        }
        isLargeScreen() {}
        loadOnLineRes() {
            "weixin" == window.miniGameName ? Laya.URL.basePath = "000kqyres-1257034461.cos.ap-guangzhou.myqcloud.com/01dulunche01/" : "qq" == window.miniGameName && (Laya.URL.basePath = "https://000kqyres-1257034461.cos.ap-guangzhou.myqcloud.com/09DigWoodQQ/DigWood01/"), window.miniGameName
        }
    }
    new class {
        constructor() {
            window.Laya3D ? Laya3D.init(v.width, v.height) : Laya.init(v.width, v.height, Laya.WebGL), Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), Laya.stage.scaleMode = v.scaleMode;
            let e = v.screenMode;
            Laya.Browser.onPC && (e = "horizontal"), console.log(Laya.Browser.onPC), Laya.stage.screenMode = e, Laya.stage.alignV = v.alignV, Laya.stage.alignH = v.alignH, Laya.URL.exportSceneToJson = v.exportSceneToJson, Laya.stage.addComponent(C), (v.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), v.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), v.stat && Laya.Stat.show(), Laya.alertGlobalError = !0, Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION)
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded))
        }
        onConfigLoaded() {
            var e = new L;
            Laya.Scene.open(v.startScene, !0, Laya.Handler.create(this, () => {
                e.gameInit()
            }))
        }
    }
}();