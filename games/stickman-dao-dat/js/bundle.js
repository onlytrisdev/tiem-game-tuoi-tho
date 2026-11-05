
(function () {
    var e = arequire("../@babel/runtime/helpers/interopRequireDefault"),
        t = arequire("../@babel/runtime/helpers/toConsumableArray"),
        a = e(arequire("../@babel/runtime/regenerator")),
        i = arequire("../@babel/runtime/helpers/get"),
        n = arequire("../@babel/runtime/helpers/getPrototypeOf"),
        o = arequire("../@babel/runtime/helpers/typeof"),
        r = arequire("../@babel/runtime/helpers/createForOfIteratorHelper"),
        s = arequire("../@babel/runtime/helpers/slicedToArray"),
        l = arequire("../@babel/runtime/helpers/assertThisInitialized"),
        h = arequire("../@babel/runtime/helpers/inherits"),
        c = arequire("../@babel/runtime/helpers/createSuper"),
        u = arequire("../@babel/runtime/helpers/classCallCheck"),
        d = arequire("../@babel/runtime/helpers/createClass");

    !function () {
        var e, y, m = {
            name: "debug",
            conf: {
                wx: {
                    bannerAd: {
                        enable: !1,
                        ids: []
                    },
                    rewardedVideoAd: {
                        enable: !1,
                        ids: []
                    },
                    interstitialAd: {
                        enable: !1,
                        ids: []
                    },
                    subpackage: {
                        enable: !0,
                        retryNum: 3
                    },
                    share: {
                        enable: !0,
                        asset: [{
                            title: "您好"
                        }]
                    }
                },
                qq: {
                    bannerAd: {
                        enable: !1,
                        ids: ["a810f3900087faa972037064a9c20b42"]
                    },
                    rewardedVideoAd: {
                        enable: !1,
                        ids: ["36cc98b5c343ceb37d4fe7b1fad7bc5b"]
                    },
                    interstitialAd: {
                        enable: !1,
                        ids: ["fa99a16f567c5e2563329d77d8a91c81"]
                    },
                    subpackage: {
                        enable: !0,
                        retryNum: 3
                    },
                    share: {
                        enable: !0,
                        asset: [{
                            title: "来啊，打架啊！",
                            imageUrl: "https://mmocgame.qpic.cn/wechatgame/rjlenU61SibFX0oSd2bjPl0mUibibicKXNib0YNZprglE6mGBic5e1bsm1qVOBkJJVVcHE/0"
                        }]
                    }
                },
                tt: {
                    bannerAd: {
                        enable: !0,
                        ids: ["1l2oig652meh1a82if"]
                    },
                    rewardedVideoAd: {
                        enable: !0,
                        ids: ["qrcf18klj81xwwu8e5"]
                    },
                    interstitialAd: {
                        enable: !0,
                        ids: ["1wpm5phsgdv60jhd46"]
                    },
                    subpackage: {
                        enable: !1,
                        retryNum: 3
                    },
                    share: {
                        enable: !0,
                        asset: [{
                            templateId: "22e17d66ijgh3ge668",
                            topics: ["抖音小游戏", "3D射击小游戏"],
                            desc: "#抖音小游戏 #3D射击小游戏 团结兄弟们，冲鸭！"
                        }]
                    },
                    recorder: {
                        enable: !0,
                        duration: 20
                    }
                },
                oppo: {
                    bannerAd: {
                        enable: !0,
                        ids: ["298901"]
                    },
                    rewardedVideoAd: {
                        enable: !0,
                        ids: ["298885"]
                    },
                    interstitialAd: {
                        enable: !1,
                        ids: []
                    },
                    nativeAd: {
                        enable: !0,
                        ids: ["298897"]
                    },
                    gameBannerAd: {
                        enable: !0,
                        ids: ["298905"]
                    },
                    gamePortalAd: {
                        enable: !0,
                        ids: ["298904"]
                    },
                    subpackage: {
                        enable: !1,
                        retryNum: 3
                    },
                    platformVersionCode: 1060
                },
                android: {},
                debug: {}
            }
        }, f = {
            state: {
                gameStatus: !0,
                coin: 1e4,
                diamond: 0,
                playerLv: 1,
                playerUpgradeComplete: 0,
                island: 0,
                usePet: [0, 0, 0],
                hasPet: [],
                isLoad3D: !1,
                load3DProgress: 0
            }
        }, w = "d3/Conventional/", g = w + "Assets/Art/Material/", L = new Laya.Vector3(0, 1, 0), v = new Laya.Vector3(0, -1, 0), p = new Laya.Vector3(0, 0, 0), V = new Laya.Vector3(1, 1, 1), k = new Laya.Vector3(0, 180, 0);
        !function (e) {
            e.free = "free", e.coin = "coin", e.diamond = "diamond", e.ad = "ad";
        }(e || (e = {})), function (e) {
            e.coin = "coin", e.diamond = "diamond";
        }(y || (y = {}));
        var C, S = new Laya.Vector3(0, -9999, 0), _ = new Laya.Vector3(0, -20, -10);
        !function (e) {
            e.bgm = "sounds/bgm.mp3", e.click = "sounds/click.mp3", e.recover = "sounds/recover.mp3",
                e.unlock_pet = "sounds/unlock_pet.mp3", e.upgrade = "sounds/upgrade.mp3";
        }(C || (C = {}));
        var b = function () {
            function e() {
                u(this, e), this.list = [], this.singleSkin = "", this.singleWidth = 50, this.singleHeight = 50,
                    this.panelIdList = [], this.panelObj = {}, this.init();
            }
            return d(e, [{
                key: "toX",
                get: function () {
                    return this.panelIdList.length ? this.panelObj[this.panelIdList[this.panelIdList.length - 1]].x : 0;
                }
            }, {
                key: "toY",
                get: function () {
                    return this.panelIdList.length ? this.panelObj[this.panelIdList[this.panelIdList.length - 1]].y : 0;
                }
            }, {
                key: "init",
                value: function () {
                    e.root || (e.root = Laya.stage.addChild(new Laya.Sprite()), e.root.zOrder = I.zOrder);
                }
            }, {
                key: "num",
                get: function () {
                    return 0;
                },
                set: function (e) { }
            }, {
                key: "setInc",
                value: function () { }
            }, {
                key: "setDec",
                value: function () { }
            }, {
                key: "sync",
                value: function () { }
            }, {
                key: "playAni",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (console.log(JSON.stringify(t)), t.x = t.x || Laya.stage.width / 2, t.y = t.y || Laya.stage.height / 2,
                        t.toX = t.toX || this.toX, t.toY = t.toY || this.toY, t.count = t.count || I.maxCount,
                        t.singleScale = t.singleScale || 1, t.singleScaleX = t.singleScaleX || t.singleScale,
                        t.singleScaleY = t.singleScaleY || t.singleScale, t.singleSkin = t.singleSkin || this.singleSkin,
                        t.singleWidth = t.singleWidth || this.singleWidth, t.singleHeight = t.singleHeight || this.singleHeight,
                        void 0 === t.count && (t.count = 15), t.count < 1 ? t.count = 1 : t.count > I.maxCount && (t.count = I.maxCount),
                        t.ani = t.ani || 1, t.clear = t.clear || !1, console.log("------------------------------------------------", t),
                        t.clear && this.list.forEach(function (e) {
                            e && e.removeSelf();
                        }), this.list = [], 1 === t.ani) for (var a = 2 * Math.PI / t.count, i = 10, n = 0; n < t.count; n++) {
                            var o = Laya.Pool.getItemByCreateFun("earn_single", this.createEarnSingle), r = o.getComponent(B);
                            o.skin = t.singleSkin, o.width = t.singleWidth * t.singleScaleX, o.height = t.singleHeight * t.singleScaleY,
                                o.pos(t.x, t.y), e.root.addChild(o), r.toX = t.toX, r.toY = t.toY, r.sx = Math.sin(a * n) * I.ani1Rudis / i * (.5 + Math.random()),
                                r.sy = Math.cos(a * n) * I.ani1Rudis / i * (.5 + Math.random()), r.ani = t.ani,
                                r.t1 = 10, this.list[n] = o;
                        }
                }
            }, {
                key: "createEarnSingle",
                value: function () {
                    var e = new Laya.Image();
                    return e.addComponent(B), e;
                }
            }, {
                key: "addPanel",
                value: function (e) {
                    if (e.Icon && e._earnutil_panel_id) {
                        var t = e.owner.localToGlobal(new Laya.Point(e.Icon.x, e.Icon.y), !1);
                        this.panelObj[e._earnutil_panel_id] = {
                            sc: e,
                            x: t.x,
                            y: t.y
                        }, this.panelIdList.push(e._earnutil_panel_id);
                    }
                }
            }, {
                key: "removePanel",
                value: function (e) {
                    e._earnutil_panel_id && -1 !== this.panelIdList.indexOf(e._earnutil_panel_id) && (this.panelIdList.splice(this.panelIdList.indexOf(e._earnutil_panel_id), 1),
                        delete this.panelObj[e._earnutil_panel_id]);
                }
            }]), e;
        }(), I = {
            zOrder: 1002,
            maxCount: 10,
            ani1Rudis: 200
        }, B = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                var e;
                return u(this, a), (e = t.call(this)).toX = 0, e.toY = 0, e.ax = 0, e.ay = 0, e.sx = 0,
                    e.sy = 0, e.ani = 1, e.t = 0, e.t1 = 10, e.t2 = 20, e.t3 = 30, e;
            }
            return d(a, [{
                key: "onAwake",
                value: function () {
                    this.owner.anchorX = this.owner.anchorY = .5;
                }
            }, {
                key: "onEnable",
                value: function () {
                    this.t = 0;
                }
            }, {
                key: "onUpdate",
                value: function () {
                    if (this.t++, 1 === this.ani) if (this.t < this.t1) this.owner.x += this.sx, this.owner.y += this.sy; else if (this.t === this.t1) {
                        var e = 20 + Math.ceil(20 * Math.random());
                        this.ax = 2 * (this.toX - this.owner.x - this.sx * e) / Math.pow(e, 2), this.ay = 2 * (this.toY - this.owner.y - this.sy * e) / Math.pow(e, 2);
                    } else this.sx += this.ax, this.sy += this.ay, this.owner.x += this.sx, this.owner.y += this.sy,
                        (this.ax < 0 && this.owner.x < this.toX || this.ax > 0 && this.owner.x > this.toX) && (this.ay < 0 && this.owner.y < this.toY || this.ay > 0 && this.owner.y > this.toY) && this.owner.removeSelf();
                }
            }, {
                key: "onDisable",
                value: function () {
                    Laya.Pool.recover("earn_single" + this.owner.skin, this.owner);
                }
            }]), a;
        }(Laya.Script), P = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                var e;
                return u(this, a), (e = t.call(this)).singleSkin = "resources/basic/img_coin.png",
                    e.singleWidth = 67, e.singleHeight = 62, e.tipsCoinPrefab = null, window.coinComponent = l(e),
                    e;
            }
            return d(a, [{
                key: "num",
                get: function () {
                    return Fw.state.coin;
                },
                set: function (e) {
                    Fw.state.coin = e;
                }
            }, {
                key: "setInc",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    console.log(">>>>>setInc", e), Fw.state.coin += e;
                }
            }, {
                key: "setDec",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    Fw.state.coin -= e;
                }
            }, {
                key: "sync",
                value: function () { }
            }, {
                key: "tipsCoinAni",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Laya.stage.width / 2, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Laya.stage.height / 2;
                    if (Fw.Sound.playSound(C.click), null !== this.tipsCoinPrefab) {
                        var i = this.tipsCoinPrefab.create();
                        i.getChildByName("Txt").text = "+" + e, i.x = t, i.y = a, b.root.addChild(i), Laya.Tween.to(i, {
                            y: a - 80
                        }, 1e3, Laya.Ease.circOut, Laya.Handler.create(this, function () {
                            i.removeSelf();
                        }));
                    }
                }
            }], [{
                key: "I",
                get: function () {
                    return this._I || (this._I = new this()), this._I;
                }
            }]), a;
        }(b), M = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                var e;
                return u(this, a), (e = t.call(this)).singleSkin = "resources/basic/img_diamond.png",
                    e.singleWidth = 59, e.singleHeight = 63, e.tipsDiamondPrefab = null, window.diamondComponent = l(e),
                    e;
            }
            return d(a, [{
                key: "num",
                get: function () {
                    return Fw.state.diamond;
                },
                set: function (e) {
                    Fw.state.diamond = e;
                }
            }, {
                key: "setInc",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    Fw.state.diamond += e;
                }
            }, {
                key: "setDec",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    Fw.state.diamond -= e;
                }
            }, {
                key: "sync",
                value: function () { }
            }, {
                key: "tipsDiamondAni",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Laya.stage.width / 2, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Laya.stage.height / 2;
                    if (Fw.Sound.playSound(C.click), null !== this.tipsDiamondPrefab) {
                        var i = this.tipsDiamondPrefab.create();
                        i.getChildByName("Txt").text = "+" + e, i.x = t, i.y = a, b.root.addChild(i), Laya.Tween.to(i, {
                            y: a - 80
                        }, 1e3, Laya.Ease.circOut, Laya.Handler.create(this, function () {
                            i.removeSelf();
                        }));
                    }
                }
            }], [{
                key: "I",
                get: function () {
                    return this._I || (this._I = new this()), this._I;
                }
            }]), a;
        }(b);
        function D(e, t, a, i) {
            return new (a || (a = Promise))(function (n, o) {
                function r(e) {
                    try {
                        l(i.next(e));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        o(e);
                    }
                }
                function s(e) {
                    try {
                        l(i.throw(e));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        o(e);
                    }
                }
                function l(e) {
                    e.done ? n(e.value) : new a(function (t) {
                        t(e.value);
                    }).then(r, s);
                }
                l((i = i.apply(e, t || [])).next());
            });
        }
        function x(e) {
            var t = (e = e.split("")).splice(e.length - 1), a = s(t, 1)[0].charCodeAt() - "a".charCodeAt();
            e.splice(0, a);
            for (var i = "", n = 0; n < e.length; n++) {
                var o = e[n].charCodeAt() - a;
                o < "A".charCodeAt() && (o = "z".charCodeAt() + 1 - ("A".charCodeAt() - o)), i += String.fromCharCode(o);
            }
            return i;
        }
        var E, T = function () {
            var e = function () {
                function e(t, a) {
                    u(this, e), this.runtime = a, this.data = {
                        sid: t.slotId
                    }, this.ad = t.createAd(t.params), this.ad.onError(function (e) { });
                }
                return d(e, [{
                    key: "load",
                    value: function () {
                        return this.ad.load();
                    }
                }, {
                    key: "show",
                    value: function () {
                        var e = this;
                        return this.ad.show().then(function () {
                            e.runtime.event("ad", "imp", {
                                lbl: e.data.stype,
                                val: 0,
                                sub5: e.data.sid
                            });
                        }, function (e) {
                            throw e;
                        });
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        this.ad.destroy();
                    }
                }, {
                    key: "onClose",
                    value: function (e) {
                        this.ad.onClose(e);
                    }
                }, {
                    key: "offClose",
                    value: function (e) {
                        this.ad.offClose(e);
                    }
                }, {
                    key: "onLoad",
                    value: function (e) {
                        this.ad.onLoad(e);
                    }
                }, {
                    key: "offLoad",
                    value: function (e) {
                        this.ad.offLoad(e);
                    }
                }, {
                    key: "onError",
                    value: function (e) {
                        this.ad.onError(e);
                    }
                }, {
                    key: "offError",
                    value: function (e) {
                        this.ad.offError(e);
                    }
                }]), e;
            }(), t = function (e) {
                h(a, e);
                var t = c(a);
                function a(e, i) {
                    var n;
                    return u(this, a), (n = t.call(this, e, i)).data.stype = "banner", n.showed = !1,
                        n;
                }
                return d(a, [{
                    key: "show",
                    value: function () {
                        var e = this;
                        return this.ad.show().then(function () {
                            e.showed || (e.showed = !0, e.runtime.event("ad", "imp", {
                                lbl: e.data.stype,
                                val: 0,
                                sub5: e.data.sid
                            }));
                        }, function (e) {
                            throw e;
                        });
                    }
                }, {
                    key: "hide",
                    value: function () {
                        this.ad.hide();
                    }
                }, {
                    key: "offResize",
                    value: function (e) {
                        this.ad.offResize(e);
                    }
                }, {
                    key: "onResize",
                    value: function (e) {
                        this.ad.onResize(e);
                    }
                }]), a;
            }(e), a = function (e) {
                h(a, e);
                var t = c(a);
                function a(e, i) {
                    var n;
                    return u(this, a), (n = t.call(this, e, i)).data.stype = "interstitial", n;
                }
                return d(a);
            }(e), i = function (e) {
                h(a, e);
                var t = c(a);
                function a(e, i) {
                    var n;
                    return u(this, a), (n = t.call(this, e, i)).data.stype = "video", n.adUnitId = e.adUnitId,
                        n.onCloseCallbacks = [], n.onLoadCallbacks = [], n.onErrorCallbacks = [], n;
                }
                return d(a, [{
                    key: "load",
                    value: function () {
                        var e = this;
                        return this.ad.offError(), this.ad.onError(function (t) {
                            var a, i = r(e.onErrorCallbacks);
                            try {
                                for (i.s(); !(a = i.n()).done;) {
                                    (0, a.value)(t);
                                }
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                i.e(e);
                            } finally {
                                i.f();
                            }
                        }), this.ad.offLoad(), this.ad.onLoad(function () {
                            var t, a = r(e.onLoadCallbacks);
                            try {
                                for (a.s(); !(t = a.n()).done;) {
                                    (0, t.value)();
                                }
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                a.e(e);
                            } finally {
                                a.f();
                            }
                        }), this.ad.load();
                    }
                }, {
                    key: "show",
                    value: function () {
                        var e = this;
                        return this.ad.offClose(), this.ad.onClose(function (t) {
                            (t && t.isEnded || void 0 === t) && e.runtime.event("ad", "imp", {
                                lbl: e.data.stype,
                                val: 0,
                                sub5: e.data.sid
                            });
                            var a, i = r(e.onCloseCallbacks);
                            try {
                                for (i.s(); !(a = i.n()).done;) {
                                    (0, a.value)(t);
                                }
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                i.e(e);
                            } finally {
                                i.f();
                            }
                        }), this.ad.show();
                    }
                }, {
                    key: "onClose",
                    value: function (e) {
                        this.onCloseCallbacks.push(e);
                    }
                }, {
                    key: "onLoad",
                    value: function (e) {
                        this.onLoadCallbacks.push(e), this.ad.offLoad(), this.ad.onLoad(e);
                    }
                }, {
                    key: "onError",
                    value: function (e) {
                        this.onErrorCallbacks.push(e), this.ad.offError(), this.ad.onError(function (t) {
                            e(t);
                        });
                    }
                }]), a;
            }(e), n = function (e) {
                h(a, e);
                var t = c(a);
                function a(e, i) {
                    var n;
                    return u(this, a), (n = t.call(this, e, i)).data.stype = "native", n;
                }
                return d(a);
            }(e), o = function (e) {
                h(a, e);
                var t = c(a);
                function a(e, i) {
                    var n;
                    return u(this, a), (n = t.call(this, e, i)).data.stype = "grid", n;
                }
                return d(a);
            }(e);
            function l(e, t) {
                if (!e) {
                    var a = (e = window.location.search).indexOf("?");
                    -1 != a && (e = e.substr(a + 1));
                }
                for (var i = {}, n = e.split(t || "&"), o = 0; o < n.length; o++) if (n[o]) {
                    var r = n[o].split("=");
                    i[r[0].trim()] = decodeURIComponent(r[1].trim());
                }
                return i;
            }
            function y(e, t) {
                var a = [];
                for (var i in e) e[i] && a.push(i + "=" + encodeURIComponent(e[i]));
                return a.join(t || "&");
            }
            function m(e) {
                for (var t = "", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = 0; i < e; i++) t += a.charAt(Math.floor(Math.random() * a.length));
                return t;
            }
            function f(e, t) {
                for (var a in e) "__proto__" != a && e[a] && (t[a] = e[a]);
            }
            function w(e, t, a, i) {
                return new Promise(function (n, o) {
                    var r;
                    r = {
                        url: t,
                        method: e,
                        header: a,
                        data: i,
                        success: function (e) {
                            200 == e.statusCode ? n(e.data) : o(Error(e.statusCode));
                        },
                        fail: function (e) {
                            o(e);
                        }
                    }, window[x("idyzc")].request(r);
                });
            }
            var g = new (function () {
                function e() {
                    u(this, e);
                }
                return d(e, [{
                    key: "get",
                    value: function (e, t) {
                        return w("GET", e, t).catch(function (a) {
                            if ("request:fail timeout" == a.errMsg) return w("GET", e, t);
                            throw a;
                        });
                    }
                }, {
                    key: "post",
                    value: function (e, t, a) {
                        return w("POST", e, t, a).catch(function (i) {
                            if ("request:fail timeout" == i.errMsg) return w("POST", e, t, a);
                            throw i;
                        });
                    }
                }]), e;
            }())();
            function L(e) {
                window[x("egyzc")].login(e);
            }
            function v(e) {
                window[x("igbhibCDg")].getStorage(e);
            }
            function p(e) {
                window[x("idkgjbgidgGHk")].setStorage(e);
            }
            function V(e) {
                window[x("gkbbjeghEFi")].onShareAppMessage(e);
            }
            function k(e) {
                window[x("gbhebigDEh")].shareAppMessage(e);
            }
            var C = function (e) {
                h(a, e);
                var t = c(a);
                function a(e, i) {
                    var n;
                    return u(this, a), e.createAd = window[x("bebikdCDg")][x("hhetgcvgDcppgtCfc")],
                        e.params = {
                            adUnitId: e.adUnitId,
                            adIntervals: e.adIntervals,
                            style: e.style
                        }, (n = t.call(this, e, i)).style = n.ad.style, n;
                }
                return d(a);
            }(t), S = function (e) {
                h(a, e);
                var t = c(a);
                function a(e, i) {
                    return u(this, a), e.createAd = window[x("jxyb")][x("jdsfbufJoufstujujbmBeb")],
                        e.params = {
                            adUnitId: e.adUnitId
                        }, t.call(this, e, i);
                }
                return d(a);
            }(a), _ = function (e) {
                h(a, e);
                var t = c(a);
                function a(e, i) {
                    return u(this, a), e.createAd = window[x("exyb")][x("fietgcvgTgyctfgfXkfgqCfc")],
                        e.params = {
                            adUnitId: e.adUnitId,
                            multiton: e.multiton
                        }, t.call(this, e, i);
                }
                return d(a);
            }(i), b = function (e) {
                h(a, e);
                var t = c(a);
                function a(e, i) {
                    return u(this, a), e.createAd = window[x("ggdecdbDEh")][x("hgehbebhkzmiBmKCABwuIli")],
                        e.params = {
                            adUnitId: e.adUnitId,
                            adIntervals: e.adIntervals,
                            style: e.style
                        }, t.call(this, e, i);
                }
                return d(a);
            }(n), I = function (e) {
                h(a, e);
                var t = c(a);
                function a(e, i) {
                    return u(this, a), e.createAd = window[x("hdgeehCDg")][x("cdsfbufHsjeBeb")], e.params = {
                        adUnitId: e.adUnitId,
                        adIntervals: e.adIntervals,
                        style: e.style,
                        adTheme: e.adTheme,
                        gridCount: e.gridCount
                    }, t.call(this, e, i);
                }
                return d(a);
            }(o), B = function () {
                function e(t, a) {
                    u(this, e), this.data = {}, f(t, this.data), this.runtime = a, this.showed = !1;
                }
                return d(e, [{
                    key: "show",
                    value: function (e) {
                        if (!this.showed) {
                            var t = this.data.impurl, a = {}, i = this.data.impurl.indexOf("?");
                            -1 != i && (t = this.data.impurl.substr(0, i), a = l(this.data.impurl.substr(i + 1))),
                                e && (a.em = e, a.ec = -1), t = t + "?" + y(a), g.get(t), this.showed = !0;
                        }
                    }
                }, {
                    key: "click",
                    value: function (e) {
                        e = e || {}, function (e, t) {
                            window[x("ecdhhfjbbdGHk")].navigateToMiniProgram({
                                appId: e.appid,
                                path: e.path,
                                extraData: t.extraData,
                                envVersion: t.envVersion,
                                success: t.success,
                                fail: t.fail,
                                complete: function (a) {
                                    var i = e.clkurl, n = {}, o = e.clkurl.indexOf("?");
                                    -1 != o && (i = e.clkurl.substr(0, o), n = l(e.clkurl.substr(o + 1))), "navigateToMiniProgram:ok" != a.errMsg && (n.em = a.errMsg,
                                        n.ec = -1), i = i + "?" + y(n), g.get(i), t.complete && t.complete(a);
                                }
                            });
                        }(this.data, e);
                    }
                }, {
                    key: "dot",
                    value: function () {
                        return this.data.dot;
                    }
                }]), e;
            }();
            return new (function (e, t, a, i) {
                function n() {
                    u(this, n);
                }
                return d(n, [{
                    key: "init",
                    value: function (e) {
                        if (this.getSystemInfoPromise = null, this.getSettingPromise = null, this.authPromise = null,
                            this.initPromise = null, this.configPromise = null, this.loginPromise = null, !e.gameId) throw Error("obj.gameId is required by init(obj)");
                        var t = window[x("jhcbjdgijFGj")].getLaunchOptionsSync();
                        this.data = {
                            sdkv: "0.0.15",
                            gid: parseInt(e.gameId),
                            uid: e.uid,
                            uinfo: e.userInfo || {},
                            cid: parseInt(t.query.cid || 0),
                            utmsrc: t.query.utmsrc || "",
                            suid: t.query.suid || "",
                            ssid: t.query.ssid || "",
                            smid: parseInt(t.query.smid || 0)
                        };
                        var a, i = this;
                        this.getSystemInfoPromise = new Promise(function (e, t) {
                            new Promise(function (e, t) {
                                window[x("ibiigBCf")].getSystemInfo({
                                    success: function (t) {
                                        var a = t.system.split(" "), i = s(a, 2), n = i[0], o = i[1], r = {
                                            lang: t.language,
                                            os: n,
                                            osv: o,
                                            make: t.brand,
                                            model: t.model,
                                            width: t.screenWidth,
                                            height: t.screenHeight,
                                            pv: t.version,
                                            plv: t.SDKVersion
                                        };
                                        t.windowWidth > t.windowHeight ? r.o = "landscape" : r.o = "portrait", e(r);
                                    },
                                    fail: t
                                });
                            }).then(function (t) {
                                f(t, i.data), e(t);
                            }, t);
                        }), this.getSettingPromise = new Promise(function (e, t) {
                            !function (e) {
                                window[x("cbyzc")].getSetting(e);
                            }({
                                withSubscriptions: !0,
                                success: function (t) {
                                    var a = (t.subscriptionsSetting || {}).itemSettings || {}, n = [];
                                    for (var o in a) "accept" == a[o] && n.push(o);
                                    i.data.tids = n, e(t);
                                },
                                fail: t
                            });
                        }), this.authPromise = new Promise(function (t, a) {
                            e.userId ? (i.setUserId(e.userId), t({
                                openid: e.userId
                            })) : i.login().then(function (e) {
                                i.setUserId(e.openid), t(e);
                            }, a);
                        }), this.initPromise = Promise.all([this.getSystemInfoPromise, this.getSettingPromise, this.authPromise]).catch(function (e) {
                            i.data.err = e.message;
                        }).then(function () {
                            return g.post("https://gw.api.umgame.cn/api/v1/init", {}, i.data).then(function (e) {
                                if (0 !== e.c) throw Error(e.m);
                                return i.data.inited = 1, i.data.cid = e.d.cid, i.data.utmsrc = e.d.utmsrc, i.data.its = e.d.its,
                                    i.bald = e.d.bald, i.config = e.d.params || {}, i.shareMaterial = e.d.share_material || {},
                                    i.shareStats = {
                                        new: e.d.share_new,
                                        exists: e.d.share_old
                                    }, i.loc = {
                                        province: e.d.province,
                                        city: e.d.city
                                    }, !0;
                            });
                        }).catch(function (e) {
                            return i.data.inited = 0, !1;
                        }), this.configPromise = this.initPromise.then(function () {
                            return i.config;
                        }), this.startTime = Date.now(), a = function (e) {
                            i.isShareDialogVisible ? i.isShareDialogVisible = !1 : i.startTime = Date.now();
                        }, window[x("ijbhkeigjFGj")].onShow(a), window[x("cfyzc")].onHide(function (e) {
                            if (!i.isShareDialogVisible) {
                                var t = Date.now(), a = parseInt((t - i.startTime) / 1e3);
                                i.event("sdk", "exit", {
                                    val: a
                                });
                            }
                        });
                    }
                }, {
                    key: "login",
                    value: function () {
                        var e = this;
                        return this.loginPromise = new Promise(function (t, a) {
                            var i = "umsdk:auth:" + e.data.gid, n = {
                                success: function (n) {
                                    if (n.code) {
                                        var o = "https://gw.api.umgame.cn/api/v1/auth?" + y({
                                            gid: e.data.gid,
                                            code: n.code
                                        }, "&");
                                        g.get(o).then(function (e) {
                                            0 === e.c ? p({
                                                key: i,
                                                data: JSON.stringify(e.d),
                                                complete: function (a) {
                                                    t(e.d);
                                                }
                                            }) : a(Error(e.m));
                                        }).catch(a);
                                    } else a(n);
                                },
                                fail: function (t) {
                                    a(t), e.loginPromise = null;
                                }
                            };
                            v({
                                key: i,
                                success: function (e) {
                                    var a, i = JSON.parse(e.data);
                                    a = {
                                        success: function () {
                                            t(i);
                                        },
                                        fail: function () {
                                            L(n);
                                        }
                                    }, window[x("iiihhibcdcGHk")].checkSession(a);
                                },
                                fail: function (e) {
                                    L(n);
                                }
                            });
                        }), this.loginPromise;
                    }
                }, {
                    key: "getUserInfo",
                    value: function () {
                        var e = this;
                        return new Promise(function (t, a) {
                            var i = "umsdk:userinfo:" + e.data.gid;
                            v({
                                key: i,
                                success: function (e) {
                                    var a = JSON.parse(e.data);
                                    t(a);
                                },
                                fail: function (n) {
                                    (e.loginPromise || e.login()).then(function (e) {
                                        var n;
                                        n = {
                                            success: function (e) {
                                                p({
                                                    key: i,
                                                    data: JSON.stringify(e.userInfo),
                                                    complete: function (a) {
                                                        t(e.userInfo);
                                                    }
                                                });
                                            },
                                            fail: a
                                        }, window[x("kcdhefceidGHk")].getUserInfo(n);
                                    });
                                }
                            });
                        });
                    }
                }, {
                    key: "setUserId",
                    value: function (e) {
                        this.data.uid = e;
                    }
                }, {
                    key: "getUserId",
                    value: function () {
                        return this.data.uid;
                    }
                }, {
                    key: "getSetting",
                    value: function () {
                        return this.getSettingPromise;
                    }
                }, {
                    key: "loadAttrLib",
                    value: function (e, t) {
                        if (!e) throw Error("function fn is required by loadAttrLib(fn)");
                        var a = this;
                        this.initPromise.then(function (i) {
                            i && (a.bald && !t || e());
                        });
                    }
                }, {
                    key: "fetchConfig",
                    value: function () {
                        return this.configPromise;
                    }
                }, {
                    key: "fetchLocation",
                    value: function () {
                        var e = this;
                        return this.initPromise.then(function () {
                            return e.loc;
                        });
                    }
                }, {
                    key: "fetchShareData",
                    value: function () {
                        var e = this;
                        return this.initPromise.then(function () {
                            return e.shareStats;
                        });
                    }
                }, {
                    key: "fetchLaunchOptions",
                    value: function () {
                        var e = this;
                        return this.initPromise.then(function () {
                            return {
                                cid: e.data.cid,
                                src: e.data.utmsrc,
                                its: e.data.its
                            };
                        });
                    }
                }, {
                    key: "fetchShareQuery",
                    value: function () {
                        var e = this;
                        return this.initPromise.then(function () {
                            return y({
                                utmsrc: "share",
                                cid: e.data.cid,
                                suid: e.data.uid,
                                smid: e.shareMaterial.smid
                            });
                        });
                    }
                }, {
                    key: "subscribe",
                    value: function (e) {
                        var t = this;
                        this.wait4init().then(function () {
                            var a = {};
                            f(t.data, a), "subscribeAppMsg:ok" == e.errMsg && (a.tall = 1), e.ids && (a.tids = e.ids),
                                g.post("https://gw.api.umgame.cn/api/v1/sub", {}, a);
                        });
                    }
                }, {
                    key: "wait4init",
                    value: function () {
                        return this.initPromise;
                    }
                }, {
                    key: "event",
                    value: function (e, t, a) {
                        if (!e || !t) throw Error("cat and act is required by event(cat, act, params)");
                        var i = this;
                        return this.wait4init().then(function () {
                            var n = {
                                app: "minigame",
                                cat: e,
                                act: t,
                                rid: m(16),
                                lang: i.data.lang,
                                os: i.data.os,
                                osv: i.data.osv,
                                make: i.data.make,
                                model: i.data.model,
                                w: i.data.width,
                                h: i.data.height,
                                did: i.data.uid,
                                sub1: i.data.sdkv,
                                sub2: i.data.pv,
                                sub3: i.data.plv,
                                sub4: i.data.utmsrc,
                                subi1: i.data.gid,
                                subi2: i.data.cid,
                                subi3: i.data.its,
                                subi7: i.data.inited
                            };
                            a && f(a, n);
                            var o = "https://event.api.umgame.cn/api/v1/event?" + y(n, "&");
                            return g.get(o);
                        });
                    }
                }, {
                    key: "onShareAppMessage",
                    value: function (e, t) {
                        var a = this;
                        this.fetchShareQuery().then(function (i) {
                            V(function () {
                                var n = t();
                                return a.shareMaterial.title && (n.title = a.shareMaterial.title), a.shareMaterial.image && (n.imageUrl = a.shareMaterial.image),
                                    n.query ? n.query = n.query + "&" + i : n.query = i, n.query = n.query + "&ssid=" + e,
                                    a.isShareDialogVisible = !0, n;
                            });
                        }, function (e) {
                            a.isShareDialogVisible = !0, V(t);
                        });
                    }
                }, {
                    key: "shareAppMessage",
                    value: function (e) {
                        if (!e.slotId || !e.data) throw Error("`obj.slotId` and `obj.data` are required by shareAppMessage");
                        var t = this;
                        this.fetchShareQuery().then(function (a) {
                            if (t.shareMaterial.title && (e.data.title = t.shareMaterial.title), t.shareMaterial.image && (e.data.imageUrl = t.shareMaterial.image),
                                e.data.query ? e.data.query = e.data.query + "&" + a : e.data.query = a, e.data.query = e.data.query + "&ssid=" + e.slotId,
                                t.isShareDialogVisible = !0, e.data.success) {
                                var i = e.data.success;
                                e.data.success = function () {
                                    i();
                                }, k(e.data);
                            } else k(e.data);
                        }, function (a) {
                            t.isShareDialogVisible = !0, k(e.data);
                        });
                    }
                }, {
                    key: "createIconAd",
                    value: function (e) {
                        if (!e.slotId) throw Error("obj.slotId is required by createIconAd(obj)");
                        return new (function () {
                            function e(t, a) {
                                u(this, e), this.runtime = a, this.data = {
                                    stype: "icon",
                                    sid: t.slotId,
                                    limit: t.limit || 10,
                                    min_size: t.min_size || 0,
                                    max_size: t.max_size || 0,
                                    cdn: t.cdn || "icon.cdn.umgame.cn"
                                }, this.data.limit <= 0 && (this.data.limit = 1);
                            }
                            return d(e, [{
                                key: "load",
                                value: function () {
                                    var e = this;
                                    return e.runtime.wait4init().then(function () {
                                        var t = {};
                                        return f(e.data, t), f(e.runtime.data, t), g.post("https://gw.api.umgame.cn/api/v1/slot", {}, t).then(function (t) {
                                            if (0 !== t.c) throw Error(t.m);
                                            for (var a = t.d, i = [], n = 0; n < a.length; n++) {
                                                a[n].sid = e.data.sid;
                                                var o = new B(a[n], e.runtime);
                                                i.push(o);
                                            }
                                            return e.onLoadCallback && e.onLoadCallback(i), i;
                                        }).catch(function (t) {
                                            return e.onErrorCallback && e.onErrorCallback(t), t;
                                        });
                                    });
                                }
                            }, {
                                key: "onLoad",
                                value: function (e) {
                                    this.onLoadCallback = e;
                                }
                            }, {
                                key: "onError",
                                value: function (e) {
                                    this.onErrorCallback = e;
                                }
                            }]), e;
                        }())(e, this);
                    }
                }, {
                    key: e,
                    value: function (e) {
                        if (!e.adUnitId) throw Error("obj.adUnitId is required by [decode('dceighwjfyjGfssjwFif')](obj)");
                        if (!e.slotId) throw Error("obj.slotId is required by [decode('fdfehefikzmiBmJivvmzIli')](obj)");
                        return new C(e, this);
                    }
                }, {
                    key: t,
                    value: function (e) {
                        if (!e.adUnitId) throw Error("obj.adUnitId is required by [decode('cgbcahwjfyjNsyjwxynynfqFif')](obj)");
                        if (!e.slotId) throw Error("obj.slotId is required by [decode('gccjfefjylhAlPuAlyzApAphsHkh')](obj)");
                        return new S(e, this);
                    }
                }, {
                    key: a,
                    value: function (e) {
                        if (!e.adUnitId) throw Error("obj.adUnitId is required by [decode('jbifuhdwhUhzdughgYlghrDgd')](obj);");
                        if (!e.slotId) throw Error("obj.slotId is required by [decode('jcetgcvgTgyctfgfXkfgqCfc')](obj)");
                        return new _(e, this);
                    }
                }, {
                    key: "createNativeAd",
                    value: function (e) {
                        if (!e.adUnitId) throw Error("obj.adUnitId is required by createNativeAd(obj)");
                        if (!e.slotId) throw Error("obj.slotId is required by createNativeAd(obj)");
                        return new b(e, this);
                    }
                }, {
                    key: i,
                    value: function (e) {
                        if (!e.adUnitId) throw Error("obj.adUnitId is required by [decode('ifkdfhwjfyjLwniFif')](obj)");
                        if (!e.slotId) throw Error("obj.slotId is required by [decode('fketgcvgItkfCfc')](obj)");
                        return new I(e, this);
                    }
                }]), n;
            }(x("ejfgejkjylhAlIhuulyHkh"), x("ddsfbufJoufstujujbmBeb"), x("kfdabbbjylhAlYlDhyklk]pklvHkh"), x("hfecccejkzmiBmOzqlIli")))();
        }(), R = function () {
            function e(t) {
                var a = this;
                u(this, e), this._firstTime = !0, this._already = !1, this._beginLoad = !1, this._errorTimer = 0,
                    console.warn("视频id", t.UMConfig.VideoId), this._sdk = t, this._videoAd = this._sdk.umsdk[x("ehafuhdwhUhzdughgYlghrDgd")]({
                        adUnitId: t.UMConfig.VideoId,
                        slotId: t.UMConfig.VideoSlotId
                    }), t.Log("视频VideoId(".concat(t.UMConfig.VideoId, ")")), this._videoAd.onError(function (e) {
                        setTimeout(function () {
                            a._errorTimer++, a._errorTimer > 5 || (t.Log("视频错误" + JSON.stringify(e)), a._Load());
                        }, 2e3);
                    }), this._videoAd.onClose(function (e) {
                        t.Log("视频关闭" + JSON.stringify(e)), e.isEnded ? a._success && (a._success(), a._success = null) : a._fail && (a._fail(),
                            a._fail = null), a._Load();
                    }), this._Load();
            }
            return d(e, [{
                key: "Show",
                value: function (e) {
                    var t = this, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    this._already = !1, this._success = e, this._fail = a, this._sdk.Log("视频开始播放"),
                        this._videoAd.show().then(function () {
                            t._sdk.Log("视频播放成功");
                        }).catch(function (e) {
                            i && i(), t._errorTimer++, t._errorTimer > 5 || (t._sdk.Log("视频播放失败" + JSON.stringify(e)),
                                setTimeout(function () {
                                    t._Load();
                                }, 2e3));
                        });
                }
            }, {
                key: "_Load",
                value: function () {
                    var e = this;
                    this._already || this._beginLoad || (this._beginLoad = !0, this._sdk.Log("视频开始加载"),
                        this._videoAd.load().then(function () {
                            if (e._sdk.Log("视频加载成功"), e._sdk.Log("bigenvideo", e._sdk.GetValue(7)), e._sdk.GetValue(7) && e._firstTime) {
                                e._firstTime = !1;
                                var t = function () {
                                    e._sdk.RunVideoCallBack();
                                };
                                e.Show(t, t, t);
                            } else e._already = !0;
                            e._beginLoad = !1;
                        }).catch(function (t) {
                            e._beginLoad = !1, setTimeout(function () {
                                e._errorTimer++, e._errorTimer > 5 || (e._sdk.Log("视频加载失败" + JSON.stringify(t)),
                                    setTimeout(function () {
                                        e._Load();
                                    }, 2e3));
                            }, 1e3);
                        }));
                }
            }]), e;
        }(), F = function () {
            function e(t) {
                var a = this;
                u(this, e), this._errorTime = 0, this._sdk = t, this._interstitial = this._sdk.umsdk[x("icchfhwjfyjNsyjwxynynfqFif")]({
                    adUnitId: this._sdk.UMConfig.InsertId,
                    slotId: t.UMConfig.InsertSlotId
                }), this._interstitial.onError(function (e) {
                    setTimeout(function () {
                        a._errorTime++, a._errorTime > 5 || (a._sdk.Log("插屏广告加载失败 : " + e.errMsg + e.errCode),
                            a._interstitial.load());
                    }, 2e3);
                }), this._interstitial.onClose(function () {
                    a.closeCallback && a.closeCallback(), a.closeCallback = null, a._sdk.Log("插屏广告关闭"),
                        a._interstitial.load();
                }), this._interstitial.onLoad(function () {
                    a._sdk.Log("插屏广告加载成功");
                });
            }
            return d(e, [{
                key: "Show",
                value: function () {
                    var e = this;
                    this._interstitial.show().then(function (t) {
                        e._sdk.Log("插屏广告展示成功");
                    }).catch(function (t) {
                        e._errorTime++, e._errorTime > 5 || (e._sdk.Log("插屏广告展示失败" + JSON.stringify(t)),
                            setTimeout(function () {
                                e._interstitial.load();
                            }, 2e3));
                    });
                }
            }]), e;
        }(), A = function () {
            function e(t) {
                u(this, e), this.customAdList = [], this.sdk_version = 2e3, this.customId = [],
                    this.customAdStatus = [], this.customCloseCB = [];
                var a = window[x("hhcjjfikEFi")].getSystemInfoSync().SDKVersion;
                this.sdk_version = parseInt(a.replace(/\./g, "")), this._sdk = t;
                var i = this._sdk.UMConfig.CustomId;
                this.customId = i, this.initCustomAd(this.customId);
            }
            return d(e, [{
                key: "showCustomAdByStyle",
                value: function (e, t) {
                    var a = this, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    this.customAdList[e] && (this.customAdList[e].destroy(), this.customAdList[e] = null),
                        this.customAdStatus[e] = !1, this.customCloseCB[e] = i, this.sdk_version >= 2111 ? setTimeout(function () {
                            var n = window[x("ehehdjeDEh")][x("gjccbbhjylhAlJBzAvtHkh")]({
                                adUnitId: a.customId[e],
                                adIntervals: 30,
                                style: t
                            });
                            a.customAdList[e] = n, n.onLoad(function () {
                                a.customAdStatus[e] = !0, n.show();
                            }), n.onError(function (t) {
                                console.log("initCustomAd 错误", t, a.customId[e]), i && i(), a.customCloseCB[e] = null;
                            }), n.onClose(function () {
                                console.warn("onClose 关闭custom" + e), a.createCustom(e);
                            }), n.onHide(function () {
                                a._sdk.Log("关闭custom" + e), a.customCloseCB[e] && (a._sdk.Log("关闭custom Call" + e),
                                    a.customCloseCB[e]()), a.customCloseCB[e] = null;
                            });
                        }, 20) : (console.warn("用户端sdk版本不支持原生广告"), i && i(), this.customCloseCB[e] = null);
                }
            }, {
                key: "initCustomAd",
                value: function (e) {
                    if (this.customAdList = [], this.sdk_version >= 2111) for (var t = 0; t < e.length; t++) this.createCustom(t); else console.warn("用户端sdk版本不支持原生广告");
                }
            }, {
                key: "GetStatus",
                value: function (e) {
                    return !!this.customAdStatus[e] && this.customAdStatus[e];
                }
            }, {
                key: "SetCustomCloseCB",
                value: function (e, t) {
                    this.customCloseCB[e] = t;
                }
            }, {
                key: "createCustom",
                value: function (e) {
                    var t = this, a = window.wx[x("dhkebhwjfyjHzxytrFif")]({
                        adUnitId: this.customId[e],
                        adIntervals: 30,
                        style: this._sdk.UMConfig.GetCustomAdStyle(e)
                    });
                    a.onError(function (a) {
                        console.log("initCustomAd 错误", a, t.customId[e]), t.customAdStatus[e] = !1;
                    }), this.customAdStatus[e] = !1, a.onLoad(function () {
                        t.customAdStatus[e] = !0;
                    }), a.onClose(function () {
                        console.warn("onClose 关闭custom,index:" + e), setTimeout(function () {
                            t.createCustom(e);
                        }, 1e3);
                    }), a.onHide(function () {
                        t._sdk.Log("关闭custom index:" + e), t.customCloseCB[e] && (t._sdk.Log("关闭custom Call index:" + e),
                            t.customCloseCB[e]()), t.customCloseCB[e] = null;
                    }), this.customAdList[e] = a;
                }
            }]), e;
        }(), N = function () {
            function e(t, a) {
                u(this, e), this._errorTimer = 0, this._adUnitIdList = [], this._bannerMap = [],
                    this.BoolShow = !1, this._showBannerIndex = 0, this._sdk = t, this._index = a;
                var i = [this._sdk.UMConfig.BannerId[this._index]], n = this._sdk.GetValue(6);
                1 == this._index && (n = this._sdk.GetValue(11)), n.length > 0 && (i = n.split(",")),
                    this._sdk.Log("AllBanner", i), this._adUnitIdList = i;
                for (var o = 0; o < i.length; o++) {
                    var r = i[o];
                    this._banner(r, o);
                }
                this._showBannerIndex = 0;
            }
            return d(e, [{
                key: "_getRandom",
                value: function (e, t) {
                    return Math.floor(Math.random() * (t - e + 1) + e);
                }
            }, {
                key: "bannerIsShow",
                set: function (e) {
                    this.BoolShow = e, e ? this._bannerAutoRefresh() : this._closeRefreshBanner();
                }
            }, {
                key: "Show",
                value: function () {
                    var e = this;
                    this._bannerMap.length <= 0 ? this._sdk.Log("BannerMap id len <0") : (this._sdk.Log("show banner"),
                        this.bannerIsShow = !0, this._currentBanner = this._bannerMap[0], null != this._currentBanner && (this._currentBanner.isShow = !0,
                            this._currentBanner.banner.show().then(function () { }).catch(function () {
                                e._refreshBanner();
                            })));
                }
            }, {
                key: "Hide",
                value: function () {
                    this._bannerMap.length <= 0 || (this._sdk.Log("hide banner"), this._bannerMap.forEach(function (e) {
                        e.banner.hide(), e.isShow = !1;
                    }), this.bannerIsShow = !1);
                }
            }, {
                key: "_bannerAutoRefresh",
                value: function () {
                    var e = this;
                    null == this._timerStep && (this._timerStep = this._sdk.GetValue(5)), this._closeRefreshBanner(),
                        this._refreshBannerTimer = setInterval(function () {
                            e.BoolShow && (e._timerStep -= 1, e._timerStep <= 0 && (e._timerStep = e._sdk.GetValue(5),
                                e._sdk.Log("refresh banner"), e._refreshBanner()));
                        }, 1e3);
                }
            }, {
                key: "_closeRefreshBanner",
                value: function () {
                    clearInterval(this._refreshBannerTimer);
                }
            }, {
                key: "_refreshBanner",
                value: function () {
                    var e = this;
                    if (!(this._bannerMap.length <= 0 && this._currentBanner || this._bannerMap.length <= 1)) {
                        this._showBannerIndex++;
                        var t = this._sdk.GetValue(15), a = Math.floor(this._showBannerIndex / this._bannerMap.length) % t;
                        this._sdk.Log("destroyRefresh:".concat(t, ",curr:").concat(a));
                        var i = this._currentBanner;
                        i && (i.banner.hide(), i.isShow = !1);
                        var n = this._bannerMap.shift();
                        if (t && a + 1 == t) {
                            if (n) {
                                n.banner.destroy();
                                var o = n.id_index;
                                this._banner(this._adUnitIdList[o], o), n = null;
                            }
                        } else this._bannerMap.push(n);
                        this._currentBanner = this._bannerMap[0], null != this._currentBanner && (this._currentBanner.banner.show().then(function () { }).catch(function () {
                            e._refreshBanner();
                        }), this._currentBanner.isShow = !0);
                    }
                }
            }, {
                key: "_banner",
                value: function (e, t) {
                    var a = this;
                    this._sdk.Log("CreateBanner:(".concat(e, ")"));
                    var i = this._sdk.umsdk[x("icjbgviexiFerrivEhe")]({
                        adUnitId: e,
                        adIntervals: 30,
                        style: this._sdk.UMConfig.GetBannerAdStyle(this._index),
                        slotId: this._sdk.UMConfig.BannerSlotId
                    });
                    i.onError(function (n) {
                        a._sdk.Log("banner 广告加载失败", JSON.stringify(n), e), a._errorTimer++, a._errorTimer > 5 || setTimeout(function () {
                            for (var n = -1, o = 0; o < a._bannerMap.length; o++) a._bannerMap[o].banner == i && (n = o);
                            -1 != n && a._bannerMap.splice(n), a._banner(e, t);
                        }, 2e3);
                    }), i.onLoad(function () {
                        a._sdk.Log("---1000---banner 广告加载成功");
                        for (var e = 0; e < a._bannerMap.length; e++) if (a._bannerMap[e].banner === i) return;
                        a._bannerMap.push({
                            banner: i,
                            isShow: !1,
                            id_index: t
                        }), a._sdk.Log("----2000----banner 广告加载成功", a._bannerMap.length);
                    }), i.onResize(function (e) {
                        a._sdk.UMConfig.SetBannerSize(a._index, i, e);
                    });
                }
            }]), e;
        }(), U = function () {
            function e() {
                u(this, e), this.sdkVersion = "2.1.2", this._onLineValue = null, this._bannerList = [],
                    this._checkYears = 0, this._controlGameTime = 300, this._gameTimeControlOnLineValue = "",
                    this.default_umvalue = null, this.default_umconfigValue = null, this.after_umvalue = null,
                    this.after_umconfigValue = null, this._enterGameFirst = !1, this._umValue = {
                        BannerDestroyRefresh: 0,
                        ButtonDelayStatus: 0,
                        RecommendedAd: 0,
                        CustomStatus: 0,
                        ExportStatus: 0,
                        BannerStatus: 0,
                        BannerExcludeCity: "",
                        gameVersion: "",
                        MysticBoxStatus: 0,
                        AutoRefreshBanner: 39,
                        BannerIdMap: "",
                        bigenvideo: 0,
                        VideoIconStatus: 0,
                        OldUserExportStatus: 0,
                        LuckBoxStatus: 0,
                        BannerIdMap2: "",
                        LogOn: 0
                    }, this._unShowScene = "1005,1006,1007,1008,1011,1012,1013,1014,1017,1020,1023,1024,1025,1027,1030,1031,1032,1036,1042,1044,1047,1048,1049,1053,1102,1104,1106,1129",
                    this._halfShowScene = "", this._registerInfo = void 0;
            }
            return d(e, [{
                key: "onLineValue",
                get: function () {
                    return this._onLineValue || {};
                }
            }, {
                key: "_getRegisterInfo",
                value: function () {
                    var e = null, t = "UmsdkRegisterInfo", a = window[x("dgyzc")].getStorageSync(t);
                    if (null == a || "" === a) {
                        var i = new Date().toLocaleDateString();
                        this._enterGameFirst || (i = "2019/1/1"), e = {
                            date: i,
                            gameTime: 0
                        }, window[x("kdbdgcbbEFi")].setStorageSync(t, JSON.stringify(e));
                    } else e = "string" == typeof a ? JSON.parse(a) : JSON.parse(JSON.stringify(a));
                    return e;
                }
            }, {
                key: "_setRegisterInfo",
                value: function () {
                    this._registerInfo && window[x("djeibcakhFGj")].setStorageSync("UmsdkRegisterInfo", JSON.stringify(this._registerInfo));
                }
            }, {
                key: "Init",
                value: function () {
                    var e = this;
                    return new Promise(function (t, a) {
                        e._onInit && a("已经Init过了"), e.Log("开始InitUMSDK 版本:", e.sdkVersion), e._onInit = !0,
                            e.umsdk = T, e.umsdk.init({
                                gameId: e.UMConfig.GameId,
                                userId: e._getUserId()
                            }), e._registerInfo = e._getRegisterInfo(), e.default_umvalue = JSON.parse(JSON.stringify(e._umValue)),
                            e.default_umconfigValue = JSON.parse(JSON.stringify(e.UMConfig.Value)), new Date().toLocaleDateString() == e._registerInfo.date && e._registerInfo.gameTime < e._controlGameTime && setInterval(function () {
                                e._registerInfo.gameTime++, e._registerInfo.gameTime === e._controlGameTime && e._afterFiveMinute(),
                                    e._registerInfo.gameTime > e._controlGameTime || e._setRegisterInfo();
                            }, 1e3);
                        var i = function () {
                            e.UMConfig.NoAd || (null != e.GetValue(6) && "" != e.GetValue(6) ? e._bannerList[0] = new N(e, 0) : e.Log("BannerId 0为空"),
                                null != e.GetValue(11) && "" != e.GetValue(11) ? e._bannerList[1] = new N(e, 1) : e.Log("BannerId 1为空"),
                                "" != e.UMConfig.VideoId ? e._video = new R(e) : e.Log("VideoId为空"), "" != e.UMConfig.InsertId ? e._interstitial = new F(e) : e.Log("InsertId为空"),
                                e.UMConfig.CustomId.length > 0 ? e._custom = new A(e) : e.Log("CustomId为空")), t();
                        };
                        e._fetchConfig().then(function () {
                            var t = 0;
                            for (var a in e._umValue) Object.prototype.hasOwnProperty.call(e._umValue, a) && t++;
                            for (var n = [], o = 0; o < t; o++) n.push(e.GetValue(o));
                            e.Log("参数" + JSON.stringify(n)), e.Log("在线参数", e.UMConfig.Value), e.after_umvalue = JSON.parse(JSON.stringify(e._umValue)),
                                e.after_umconfigValue = JSON.parse(JSON.stringify(e.UMConfig.Value)), e._beforeFiveMinute(),
                                e._checkFromAd(), i();
                        }).catch(function (t) {
                            e.Log("在线参数读取失败" + JSON.stringify(t));
                            var a = 0;
                            for (var n in e._umValue) Object.prototype.hasOwnProperty.call(e._umValue, n) && a++;
                            for (var o = [], r = 0; r < a; r++) o.push(e.GetValue(r));
                            e.Log("参数" + JSON.stringify(o)), e.Log("在线参数", e.UMConfig.Value), e.after_umvalue = JSON.parse(JSON.stringify(e._umValue)),
                                e.after_umconfigValue = JSON.parse(JSON.stringify(e.UMConfig.Value)), e._beforeFiveMinute(),
                                e._checkFromAd(), i();
                        });
                    });
                }
            }, {
                key: "_getUserId",
                value: function () {
                    var e = "", t = "UmsdkUserId";
                    if (null == (e = window[x("cbehjbcjiFGj")].getStorageSync(t)) || e.length < 10) {
                        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789", i = a.length;
                        e = "";
                        for (var n = 0; n < 32; n++) e += a.charAt(Math.floor(Math.random() * i));
                        this._enterGameFirst = !0;
                    } else this._enterGameFirst = !1;
                    return window[x("bdcebhbjcdGHk")].setStorageSync(t, e), e;
                }
            }, {
                key: "_beforeFiveMinute",
                value: function () {
                    if (this._registerInfo && this._registerInfo.date && new Date().toLocaleDateString() === this._registerInfo.date && this._registerInfo.gameTime < this._controlGameTime) {
                        var e = this._gameTimeControlOnLineValue.split(",");
                        for (var t in this._umValue) {
                            var a = t;
                            -1 != e.indexOf(a) && (this._umValue[t] = this.default_umvalue[a]);
                        }
                        for (var i in this.UMConfig.Value) {
                            var n = i;
                            -1 != e.indexOf(n) && (this.UMConfig.Value[i] = this.default_umconfigValue[n]);
                        }
                        console.warn(this._umValue, this.UMConfig.Value);
                    }
                }
            }, {
                key: "_afterFiveMinute",
                value: function () {
                    this._umValue = this.after_umvalue || this._umValue, this.UMConfig.Value = this.after_umconfigValue || this.UMConfig.Value,
                        console.warn(this._umValue, this.UMConfig.Value);
                }
            }, {
                key: "_checkFromAd",
                value: function () {
                    var e = this, t = window[x("fgceABe")].getLaunchOptionsSync().scene, a = "";
                    if (this._enterGameFirst) a = t.toString(), window[x("ibcdfhCDg")].setStorageSync("UMUserFrom", a); else if (!(a = window[x("ggijbidffFGj")].getStorageSync("UMUserFrom")) || "" === a) return void this.Log("old user no storage");
                    this._onLineValue.gameVersion !== this.UMConfig.gameVersion ? this.umsdk.fetchLocation().then(function (t) {
                        var i = !1;
                        t && (t.province && e._onLineValue.BannerExcludeCity && -1 !== e._onLineValue.BannerExcludeCity.indexOf(t.province) && (i = !0),
                            t.city && e._onLineValue.BannerExcludeCity && -1 !== e._onLineValue.BannerExcludeCity.indexOf(t.city) && (i = !0));
                        var n = -1 != ["1034", "1037", "1038", "1045", "1046", "1084", "1095", "1097", "1106", "1100", "1144", "1152", "1176", "1189", "1197", "1191", "1198", "1206", "1216", "1058", "1091", "1005", "1006", "1027", "1042", "1054", "1067", "1068", "1035"].indexOf(a);
                        n || e.Log("not in inAdScene ".concat(a)), i && e.Log("not in Location ", t);
                        var o = n && !i;
                        e.Log("inAdScene ".concat(a));
                        var r = (e._onLineValue.FromAdKeys || "").split(",");
                        for (var s in e._umValue) {
                            var l = s;
                            if (-1 != r.indexOf(l)) {
                                var h = o ? e.onLineValue[l] : e.default_umvalue[l];
                                "string" == typeof e._umValue[s] ? e._umValue[s] = h : e._umValue[s] = Number(h);
                            }
                        }
                        for (var c in e.UMConfig.Value) {
                            var u = c;
                            if (-1 != r.indexOf(u)) {
                                var d = o ? e.onLineValue[u] : e.default_umconfigValue[u];
                                "string" == typeof e.UMConfig.Value[c] ? e.UMConfig.Value[c] = d : e.UMConfig.Value[c] = Number(d);
                            }
                        }
                    }).catch(function (t) {
                        e.Log("CheckFromAd,Location读取失败");
                    }) : this.Log("checkFrom 游戏Id=" + this.UMConfig.GameId + "当前版本与线上版本一致");
                }
            }, {
                key: "_fetchConfig",
                value: function () {
                    var e = this;
                    return new Promise(function (t, a) {
                        var i = e._unShowScene.split(","), n = e._halfShowScene.split(","), r = window[x("kbajhjbefjGHk")].getLaunchOptionsSync().scene;
                        e.Log("当前场景值" + r);
                        var s = function (e, t, a) {
                            if (null != a) {
                                var i = o(e[t]);
                                if ("string" == i || "number" == i) {
                                    var n = a[t];
                                    if (null == n) return;
                                    if ("number" == i) {
                                        if (null == (n = Number(n)) || isNaN(n)) return;
                                        e[t] = n;
                                    } else e[t] = n;
                                }
                            }
                        };
                        e.umsdk.fetchConfig().then(function (o) {
                            e._onLineValue = JSON.parse(JSON.stringify(o)), s(e._umValue, "LogOn", o), s(e._umValue, "ExportStatus", o),
                                s(e._umValue, "gameVersion", o), s(e._umValue, "BannerIdMap", o), s(e._umValue, "BannerIdMap2", o),
                                e._gameTimeControlOnLineValue = o.GameTimeControlOnLineValue || "", e._checkYears = o.CheckYears || 0;
                            var l = o.DayOpen ? o.DayOpen.split(",") : [0], h = o.VideoAdID || "";
                            "string" == typeof h && h.length > 0 && (console.warn("获得VideoAdID", h), e.UMConfig.VideoId = h);
                            for (var c = 0; c < l.length; c++) l[c] = Number(l[c]);
                            if (e.UMConfig.Config) for (var u in e.UMConfig.Config) Object.prototype.hasOwnProperty.call(e.UMConfig.Config, u) && s(e.UMConfig.Config, u, o);
                            if (null == o) a("游戏Id=" + e.UMConfig.GameId + "无在线配置"); else if (o.gameVersion === e.UMConfig.gameVersion) a("游戏Id=" + e.UMConfig.GameId + "当前版本与线上版本一致"); else if (-1 != i.indexOf(r.toString())) e.Log("当前场景值" + r + " 匹配"),
                                t(); else {
                                var d = function (a) {
                                    var i = !1;
                                    if (a && (a.province && o.BannerExcludeCity && -1 !== o.BannerExcludeCity.indexOf(a.province) && (i = !0),
                                        a.city && o.BannerExcludeCity && -1 !== o.BannerExcludeCity.indexOf(a.city) && (i = !0)),
                                        e.Log("当前区域为" + JSON.stringify(a) + " 是否屏蔽:" + i), !i) if (-1 != n.indexOf(r.toString())) for (var h in e.Log("当前半场景值" + r + " 匹配"),
                                            e._umValue) Object.prototype.hasOwnProperty.call(e._umValue, h) && ("ExportStatus" != h && "LuckBoxStatus" != h && "OldUserExportStatus" != h && "VideoIconStatus" != h || s(e._umValue, h, o)); else {
                                            for (var c in e._umValue) Object.prototype.hasOwnProperty.call(e._umValue, c) && s(e._umValue, c, o);
                                            for (var u in e.UMConfig.Value) Object.prototype.hasOwnProperty.call(e.UMConfig.Value, u) && s(e.UMConfig.Value, u, o);
                                            var d = o.TimeControlValue ? o.TimeControlValue.split(",") : ["CustomStatus", "ButtonDelayStatus", "VideoIconStatus", "LuckBoxStatus=1"];
                                            if (d.length) {
                                                for (var y = (o.TimeControl || "").split("-"), m = [], f = !1, w = 0; w < y.length; w++) {
                                                    var g = y[w].split("/");
                                                    2 == g.length && (m.push(Number(g[0])), m.push(Number(g[1])));
                                                }
                                                if (m.length > 0 && m.length % 2 == 0) {
                                                    var L = Number(new Date().getHours());
                                                    L = 0 === L ? 24 : L;
                                                    for (var v = 0; v < m.length; v += 2) {
                                                        var p = m[v], V = m[v + 1];
                                                        if (L >= p && L <= V) {
                                                            f = !0;
                                                            break;
                                                        }
                                                    }
                                                }
                                                var k = new Date().getDay() + 1;
                                                if (f || -1 != l.indexOf(k)) {
                                                    e.Log("[umsdk um_timeControl auto]:".concat(d));
                                                    for (var C = 0; C < d.length; C++) {
                                                        var S = d[C].split("="), _ = S[0], b = 2 == S.length ? S[1] : 1;
                                                        isNaN(Number(_)) ? (null == e._umValue[_] ? e.Log("um_timeControl,没有".concat(_)) : (e._umValue[_] = b,
                                                            e.Log("um_timeControl auto reset:".concat(e._umValue[_]))), null == e.UMConfig.Value[_] ? e.Log("this.UMConfig.Value,没有".concat(_)) : (e.UMConfig.Value[_] = b,
                                                                e.Log("um_timeControl auto reset  this.UMConfig.Value:".concat(e.UMConfig.Value[_])))) : e.Log("um_timeControl:".concat(_, ",数字类型无效"));
                                                    }
                                                }
                                            }
                                        }
                                    t();
                                };
                                e.umsdk.fetchLocation().then(function (e) {
                                    d(e);
                                }).catch(function (t) {
                                    e.Log("Location读取失败"), d(t);
                                });
                            }
                        }).catch(function (e) {
                            a(e);
                        });
                    });
                }
            }, {
                key: "ShowVideo",
                value: function (e, t, a) {
                    this._video ? this._video.Show(e, t, a) : a();
                }
            }, {
                key: "OpenPage",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if ("LuckBoxPage" == e) {
                        this.Log("LuckBoxPage:".concat(this._umValue.MysticBoxStatus));
                        var a = Math.round(100 * Math.random()) < Math.round(100 * this._umValue.MysticBoxStatus);
                        if (0 == this._umValue.MysticBoxStatus && (a = !1), !a) return t && t(), !1;
                    } else if ("CustomPage" == e || "CustomPage1" == e) {
                        if (this.Log("CustomPage:".concat(this._umValue.CustomStatus)), !this._umValue.CustomStatus) return t && t(),
                            !1;
                    } else {
                        if ("RecommendedAdPage" != e) return t && t(), !1;
                        if (!this._umValue.RecommendedAd) return t && t(), !1;
                    }
                    return this.Log("".concat(e, "可以打开")), !0;
                }
            }, {
                key: "ShowBanner",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this._bannerList[e] && this._bannerList[e].Show();
                }
            }, {
                key: "HideBanner",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this._bannerList[e] && this._bannerList[e].Hide();
                }
            }, {
                key: "GetBannerStatus",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return !!this._bannerList[e] && this._bannerList[e].BoolShow;
                }
            }, {
                key: "ShowInterstitial",
                value: function (e) {
                    this._interstitial && (this._interstitial.closeCallback = e, this._interstitial.Show());
                }
            }, {
                key: "SetAutoVideoCallBack",
                value: function (e) {
                    this._autoVideoCB = e;
                }
            }, {
                key: "RunVideoCallBack",
                value: function () {
                    this._autoVideoCB && this._autoVideoCB();
                }
            }, {
                key: "ShowCustomByStyle",
                value: function (e, t) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    this._custom ? (console.log("展示自定义样式原生"), this._custom.showCustomAdByStyle(e, t, a)) : a && a();
                }
            }, {
                key: "ShowCustom",
                value: function (e) {
                    if (this._custom && this._custom.customAdList.length) {
                        console.log("展示原生");
                        for (var t = 0; t < this._custom.customAdList.length; t++) -1 != e.indexOf(t) && this._custom.customAdList[t] && this._custom.customAdList[t].show();
                    }
                }
            }, {
                key: "HideCustom",
                value: function (e) {
                    if (this._custom && this._custom.customAdList.length) for (var t = 0; t < this._custom.customAdList.length; t++) -1 != e.indexOf(t) && this._custom.customAdList[t] && this._custom.customAdList[t].hide();
                }
            }, {
                key: "GetValue",
                value: function (e) {
                    return 0 == e ? this._umValue.ExportStatus : 1 == e ? this._umValue.BannerStatus : 2 == e ? this._umValue.BannerExcludeCity : 3 == e ? this._umValue.gameVersion : 4 == e ? this._umValue.MysticBoxStatus : 5 == e ? this._umValue.AutoRefreshBanner : 6 == e ? this._umValue.BannerIdMap : 7 == e ? this._umValue.bigenvideo : 8 == e ? this._umValue.VideoIconStatus : 9 == e ? this._umValue.OldUserExportStatus : 10 == e ? this._umValue.LuckBoxStatus : 11 == e ? this._umValue.BannerIdMap2 : 12 == e ? this._umValue.CustomStatus : 13 == e ? this._umValue.ButtonDelayStatus : 14 == e ? this._umValue.RecommendedAd : 15 == e ? this._umValue.BannerDestroyRefresh : void 0;
                }
            }, {
                key: "Log",
                value: function () {
                    for (var e, t = arguments.length, a = new Array(t), i = 0; i < t; i++) a[i] = arguments[i];
                    (e = console).log.apply(e, ["[UMSDK]"].concat(a));
                }
            }, {
                key: "GetCustomStatus",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return !!this._custom && this._custom.GetStatus(e);
                }
            }, {
                key: "SetCustomCloseCB",
                value: function (e, t) {
                    this.Log("SetCustomCloseCB", null != this._custom), this._custom && this._custom.SetCustomCloseCB(e, t);
                }
            }, {
                key: "customIsShow",
                value: function (e) {
                    return !!this._custom && !!this._custom.customAdList[e] && this._custom.customAdList[e].isShow();
                }
            }]), e;
        }(), O = function () {
            function e() {
                u(this, e), this.NoAd = !1, this.LogOn = !0, this.GameId = 10306, this.gameVersion = "0.6.0",
                    this.BannerId = ["adunit-63b73bac1ee686cb"], this.BannerSlotId = "c950ae91bc1e8198",
                    this.VideoId = "adunit-b3ca689fef372227", this.VideoSlotId = "750a1e3dc46fd817",
                    this.InsertId = "adunit-44bd53ae677d0b90", this.InsertSlotId = "cf8f44581e05166b",
                    this.CustomId = ["adunit-9a39ad7810ec0a5e", "adunit-f1d5501239e1396c", "adunit-c68558ff854ee6e1", "adunit-fe9aefd69052a24d"],
                    this.Custom_LeftVer_Index = 4, this.Custom_RightVer_Index = 5, this.Custom_TopHor_Index = 6,
                    this.Custom_Page_Top_Index = 3, this.Custom_Page_Bottom_Index = 3, this.Custom_LeftSingle_Index = 0,
                    this.Custom_RightSingle_Index = 1, this.Custom_Row1_Index = 2, this.Custom_Page5X5_Index = 3,
                    this.Value = {
                        CloseDialogRecommendedAd: 0,
                        SingleGridChance: 0,
                        HorizontalGridChance: 0,
                        GameBanner: 0,
                        GiftStatus: 0,
                        InterstitialAdStatus: 0,
                        Moregame: 0,
                        GameViewCustom: 999999,
                        SceneCustom: 0,
                        ForceGridAd: 0,
                        CuttingStatus: 0
                    };
            }
            return d(e, [{
                key: "GetBannerAdStyle",
                value: function (e) {
                    return {
                        left: 0,
                        top: 0,
                        height: 80,
                        width: 320
                    };
                }
            }, {
                key: "SetBannerSize",
                value: function (e, t, a) {
                    var i = wx.getSystemInfoSync(), n = i.windowWidth, o = i.windowHeight;
                    t.style.top = o - a.height, t.style.left = (n - a.width) / 2;
                }
            }, {
                key: "GetCustomAdStyle",
                value: function (e) {
                    var t = wx.getSystemInfoSync(), a = t.windowWidth, i = t.windowHeight, n = t.statusBarHeight;
                    switch (e) {
                        case this.Custom_Row1_Index:
                            return {
                                width: 360,
                                top: 0,
                                left: 0
                            };

                        case this.Custom_LeftSingle_Index:
                            return {
                                width: 68,
                                top: i / 2 - 53,
                                left: 0
                            };

                        case this.Custom_RightSingle_Index:
                            return {
                                width: 68,
                                top: i / 2 - 53,
                                left: a - 68
                            };

                        case this.Custom_Page_Top_Index:
                        case this.Custom_Page5X5_Index:
                            return {
                                width: 375,
                                top: n + 150,
                                left: 0
                            };
                    }
                }
            }]), e;
        }();
        !function (e) {
            e.LuckBoxPage = "LuckBoxPage", e.CustomPage = "CustomPage", e.RecommendedAdPage = "RecommendedAdPage";
        }(E || (E = {}));
        var H = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                var e;
                return u(this, a), (e = t.call(this)).Progress = null, e.MysticBoxBtn = null, e.nodeBoxClose = null,
                    e.nodeBoxOpen = null, e.nodeLight = null, e.barMax = 563, e._alreadyClick = !1,
                    e._clickRate = .14, e._autoRate = .006, e;
            }
            return d(a, [{
                key: "onAwake",
                value: function () {
                    this.owner.height = Laya.stage.height;
                }
            }, {
                key: "onEnable",
                value: function () {
                    var e = this;
                    this.Progress.width = 0, this._fillRange = 0, this.MysticBoxBtn.visible = !0, this.nodeBoxClose.visible = !0,
                        this.nodeBoxOpen.visible = !1, this.nodeLight.visible = !1, this._alreadyClick = !1,
                        this._bannerStatus = G.GetBannerStatus(), this._bannerStatus && G.HideBanner(),
                        this.owner.onOpened = function (t) {
                            e._onClose = t.onClose;
                        }, this.random = .4 * Math.random() + .3;
                }
            }, {
                key: "ShowFinish",
                value: function () {
                    var e = this;
                    this.MysticBoxBtn.visible = !1, this.nodeBoxClose.visible = !1, this.nodeBoxOpen.visible = !0,
                        this.nodeLight.visible = !0, Laya.timer.clearAll(this), Laya.timer.once(500, this, function () {
                            e.Hide();
                        });
                }
            }, {
                key: "Hide",
                value: function () {
                    G.HideBanner(), this._bannerStatus && (G.ShowBanner(), this._bannerStatus = !1),
                        Laya.timer.clearAll(this.MysticBoxBtn), this.owner.close(), this._onClose && this._onClose();
                }
            }, {
                key: "onUpdate",
                value: function () {
                    this._fillRange -= this._autoRate, this._fillRange <= 0 && (this._fillRange = 0),
                        this.Progress.width = this.barMax * this._fillRange, this.nodeLight.rotation += 2;
                }
            }, {
                key: "onClick",
                value: function (e) {
                    var t = this;
                    switch (e.target.name) {
                        case "BtnClick":
                            this._fillRange += this._clickRate, this.Progress.width = this.barMax * this._fillRange,
                                this._fillRange >= this.random && G.GetValue(4) && !this._alreadyClick && (this._alreadyClick = !0,
                                    G.ShowBanner(), Laya.timer.once(1e3, this.MysticBoxBtn, function () {
                                        G.HideBanner();
                                        (function e(a) {
                                            Laya.timer.once(1500, t.MysticBoxBtn, function () {
                                                G.ShowBanner(), a(e);
                                            });
                                        })(function e(a) {
                                            Laya.timer.once(1e3, t.MysticBoxBtn, function () {
                                                G.HideBanner(), a(e);
                                            });
                                        }), Laya.timer.once(300, t.MysticBoxBtn, function () {
                                            t.ShowFinish();
                                        });
                                    })), this._fillRange >= 1 && this.MysticBoxBtn.visible && (this._fillRange = 1,
                                        this.ShowFinish());
                    }
                }
            }]), a;
        }(Laya.Script), G = new (function (e) {
            h(o, e);
            var t = c(o);
            function o() {
                var e;
                return u(this, o), (e = t.apply(this, arguments)).UMConfig = new O(), e.IsShowBanner = !1,
                    e._openErrorPageTotal = 0, e;
            }
            return d(o, [{
                key: "Init",
                value: function () {
                    var e = this, t = Object.create(null, {
                        Init: {
                            get: function () {
                                return i(n(o.prototype), "Init", e);
                            }
                        }
                    });
                    return D(this, void 0, void 0, a.default.mark(function e() {
                        var i = this;
                        return a.default.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", ((0, Laya.ClassUtils.regClass)("umsdk/export/laya/UMMultipleClicksPage.ts", H),
                                        window.umsdk = G, Laya.timer.loop(1e3, this, this.CheckBannner), new Promise(function (e, n) {
                                            return D(i, void 0, void 0, a.default.mark(function i() {
                                                var n = this;
                                                return a.default.wrap(function (a) {
                                                    for (; ;) switch (a.prev = a.next) {
                                                        case 0:
                                                            Laya.Browser.onWeiXin ? t.Init.call(this).then(function () {
                                                                n.Log("UMSDK Init Already"), e();
                                                            }).catch(function (t) {
                                                                n.Log("UMSDK Init Fail" + t), e(t);
                                                            }) : (G.Log("非微信环境"), e());

                                                        case 1:
                                                        case "end":
                                                            return a.stop();
                                                    }
                                                }, i, this);
                                            }));
                                        })));

                                case 1:
                                case "end":
                                    return e.stop();
                            }
                        }, e, this);
                    }));
                }
            }, {
                key: "ShowVideo",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    Laya.Browser.onMiniGame ? (Laya.timer.scale = 0, i(n(o.prototype), "ShowVideo", this).call(this, function () {
                        Laya.timer.scale = 1, e && e();
                    }, function () {
                        Laya.timer.scale = 1, t ? t() : wx.showToast({
                            title: "观看完整视频才有奖励哦",
                            icon: "none"
                        });
                    }, function () {
                        Laya.timer.scale = 1, a ? a() : wx.showToast({
                            title: "视频加载中，请稍后",
                            icon: "none"
                        });
                    })) : e();
                }
            }, {
                key: "OpenPage",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (i(n(o.prototype), "OpenPage", this).call(this, e, t)) {
                        var a = Laya.Browser.height > Laya.Browser.width ? "umExportV" : "umExportH";
                        return Laya.Dialog.open("".concat(a, "/").concat(e, ".scene"), !1, {
                            onClose: t,
                            page: e,
                            errType: ""
                        }, new Laya.Handler(this, function (e) {
                            e.width = Laya.stage.width, e.height = Laya.stage.height;
                        })), !0;
                    }
                    return !1;
                }
            }, {
                key: "GetPageIcon",
                value: function (e) {
                    return i(n(o.prototype), "GetPageIcon", this).call(this, e);
                }
            }, {
                key: "CheckBannner",
                value: function () {
                    this.IsShowBanner && !this.GetBannerStatus() ? this.ShowBanner() : !this.IsShowBanner && this.GetBannerStatus() && this.HideBanner();
                }
            }, {
                key: "ShowBanner",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    e || (this.IsShowBanner = !0), i(n(o.prototype), "ShowBanner", this).call(this, e);
                }
            }, {
                key: "HideBanner",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    e || (this.IsShowBanner = !1), i(n(o.prototype), "HideBanner", this).call(this, e);
                }
            }, {
                key: "GetBannerStatus",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return i(n(o.prototype), "GetBannerStatus", this).call(this, e);
                }
            }, {
                key: "ShowInterstitial",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>展示插屏"), i(n(o.prototype), "ShowInterstitial", this).call(this, e);
                }
            }, {
                key: "Log",
                value: function () {
                    for (var e, t = arguments.length, a = new Array(t), r = 0; r < t; r++) a[r] = arguments[r];
                    this.UMConfig.LogOn && (e = i(n(o.prototype), "Log", this)).call.apply(e, [this].concat(a));
                }
            }, {
                key: "Event",
                value: function (e, t) {
                    i(n(o.prototype), "Event", this).call(this, e, t);
                }
            }, {
                key: "SetAutoVideoCallBack",
                value: function (e) {
                    i(n(o.prototype), "SetAutoVideoCallBack", this).call(this, e);
                }
            }, {
                key: "ShowCustom",
                value: function (e) {
                    this.IsCustomStatus && i(n(o.prototype), "ShowCustom", this).call(this, e);
                }
            }, {
                key: "HideCustom",
                value: function (e) {
                    i(n(o.prototype), "HideCustom", this).call(this, e);
                }
            }, {
                key: "ShowPageBanner",
                value: function (e, t) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    i(n(o.prototype), "ShowPageBanner", this).call(this, e, t, a);
                }
            }, {
                key: "GetValue",
                value: function (e) {
                    return i(n(o.prototype), "GetValue", this).call(this, e);
                }
            }, {
                key: "GetCustomStatus",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return this.IsCustomStatus && i(n(o.prototype), "GetCustomStatus", this).call(this, e);
                }
            }, {
                key: "CustomIsShow",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return i(n(o.prototype), "customIsShow", this).call(this, e);
                }
            }, {
                key: "SetCustomCloseCB",
                value: function (e, t) {
                    i(n(o.prototype), "SetCustomCloseCB", this).call(this, e, t);
                }
            }, {
                key: "IsShowVideoIcon",
                get: function () {
                    return 0 === this.GetValue(8);
                }
            }, {
                key: "IsBannerError",
                get: function () {
                    return 1 === this.GetValue(1);
                }
            }, {
                key: "IsButtonDelayStatus",
                get: function () {
                    return 1 === this.GetValue(13);
                }
            }, {
                key: "IsErrorPageStatus",
                get: function () {
                    this._openErrorPageTotal++;
                    var e = this.GetValue(10);
                    return 0 != e && this._openErrorPageTotal >= e;
                }
            }, {
                key: "IsCustomStatus",
                get: function () {
                    return 1 == this.GetValue(12);
                }
            }, {
                key: "checkYears",
                get: function () {
                    return 1 == this._checkYears;
                }
            }, {
                key: "OpenRecommendedAdPage",
                value: function () {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if (!this.GetCustomStatus(this.UMConfig.Custom_Page5X5_Index)) return t && t();
                    Laya.Scene.root.alpha = 0;
                    var a = this.CustomIsShow(this.UMConfig.Custom_LeftSingle_Index), i = this.CustomIsShow(this.UMConfig.Custom_RightSingle_Index), n = this.CustomIsShow(this.UMConfig.Custom_Row1_Index);
                    this.HideCustom([this.UMConfig.Custom_LeftSingle_Index, this.UMConfig.Custom_RightSingle_Index, this.UMConfig.Custom_Row1_Index]);
                    var o = this.IsShowBanner;
                    this.HideBanner(), this.OpenPage(E.RecommendedAdPage, function () {
                        Laya.Scene.root.alpha = 1, a && e.ShowCustom([e.UMConfig.Custom_LeftSingle_Index]),
                            i && e.ShowCustom([e.UMConfig.Custom_RightSingle_Index]), n && e.ShowCustom([e.UMConfig.Custom_Row1_Index]),
                            o && e.ShowBanner(), t && t();
                    });
                }
            }, {
                key: "OpenCustomPage",
                value: function () {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if (!this.GetCustomStatus(this.UMConfig.Custom_Page5X5_Index)) return t && t();
                    Laya.Scene.root.alpha = 0;
                    var a = this.CustomIsShow(this.UMConfig.Custom_LeftSingle_Index), i = this.CustomIsShow(this.UMConfig.Custom_RightSingle_Index), n = this.CustomIsShow(this.UMConfig.Custom_Row1_Index);
                    this.HideCustom([this.UMConfig.Custom_LeftSingle_Index, this.UMConfig.Custom_RightSingle_Index, this.UMConfig.Custom_Row1_Index]);
                    var o = this.IsShowBanner;
                    this.HideBanner(), this.OpenPage(E.CustomPage, function () {
                        Laya.Scene.root.alpha = 1, a && e.ShowCustom([e.UMConfig.Custom_LeftSingle_Index]),
                            i && e.ShowCustom([e.UMConfig.Custom_RightSingle_Index]), n && e.ShowCustom([e.UMConfig.Custom_Row1_Index]),
                            o && e.ShowBanner(), t && t();
                    });
                }
            }]), o;
        }(U))();
        function W() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date();
            return e.getTime() / 1e3;
        }
        function j(e, t) {
            return e.filter(function (e) {
                return t.every(function (t) {
                    return e !== t;
                });
            });
        }
        function Y(e) {
            return e[Math.floor(Math.random() * e.length)];
        }
        function z(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
            if (t = (t = Math.floor(t)) > 2 ? 2 : t < 0 ? 0 : t, e < 1e3 && t > 0) return Math.round(e * Math.pow(10, t)) / Math.pow(10, t) + "";
            var a = ["", "K", "M", "G", "T", "P", "E", "B"], i = (e = parseInt(e) + "").length, n = Math.floor(i / 3), o = i % 3;
            if (0 === n || 1 === n && 0 === o) return e;
            if (0 === o) {
                if (0 === t) return e.substr(0, 3) + a[n - 1];
                var r = e.substr(0, 3), s = e.substr(3, t);
                return "00" === s || ("0" === s.substring(1) ? r += "." + s.substr(0, 1) : r += "." + s),
                    r + a[n - 1];
            }
            if (0 === t) return e.substr(0, o) + a[n];
            var l = e.substr(0, o), h = e.substr(o, t);
            return "00" === h || ("0" === h.substring(1) ? l += "." + h.substr(0, 1) : l += "." + h),
                l + a[n];
        }
        function X(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, a = Math.pow(10, t);
            return Math.round(100 * e * a) / a + "%";
        }
        function q(e, t) {
            return Math.floor(Math.random() * (t - e) + e);
        }
        var J = function () {
            function t() {
                u(this, t),
                    this.skill = {
                        motorcycle: new ie(45),
                        speed: new ie(45),
                        magnet: new ie(45),
                        diamond: new ie(45)
                    }, this.offlineTime = 0, this.offlineDuration = 0, this.offlineEarn = [{
                        type: y.coin,
                        id: 0,
                        val: 0
                    }, {
                        type: y.diamond,
                        id: 0,
                        val: 0
                    }], this.hasOffline = !1, this.cur = 0, this.nextUpdateDataTime = this.cur + 10;
            }
            return d(t, [{
                key: "init",
                value: function () {
                    this.cur = W(), this.downloadData(), this.initOffline(), Laya.timer.loop(300, this, this.onUpdate, [.3]);
                }
            }, {
                key: "onUpdate",
                value: function (e) {
                    this.cur = W(), this.cur > this.nextUpdateDataTime && this.updateData();
                }
            }, {
                key: "initOffline",
                value: function () {
                    this.offlineDuration = (this.cur - this.offlineTime) / 3600, this.offlineDuration = 2,
                        this.offlineDuration > 1 / 6 && (this.offlineDuration > 2 && (this.offlineDuration = 2),
                            this.offlineEarn[0].val = 200 * this.offlineDuration, this.offlineEarn[1].val = 20 * this.offlineDuration,
                            this.hasOffline = !0);
                }
            }, {
                key: "receive",
                value: function () {
                    for (var e, t = 0, a = 1, i = 1, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                    switch ("string" == typeof o[0] ? (e = o[0], 2 === o.length ? a = o[1] : 3 === o.length ? (a = o[1],
                        i = o[2]) : 4 === o.length && (t = o[1], a = o[2], i = o[3])) : o[0] && (void 0 !== o[0].type && (e = o[0].type),
                            void 0 !== o[0].id && (t = o[0].id), void 0 !== o[0].val && (a = o[0].val), void 0 !== o[1] && (i = o[1])),
                    console.log("ssss", e, t, a, i), e) {
                        case y.coin:
                            P.I.setInc(a * i);
                            break;

                        case y.diamond:
                            M.I.setInc(a * i);
                    }
                }
            }, {
                key: "unlock",
                value: function (t) {
                    for (var a, i = this, n = 1, o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++) r[s - 1] = arguments[s];
                    switch ("string" == typeof r[0] ? (a = r[0], "number" == typeof r[1] && ("number" == typeof r[2] ? (r[1],
                        n = r[2]) : n = r[1])) : (void 0 !== r[0].type && (a = r[0].type), void 0 !== r[0].id && r[0].id,
                            void 0 !== r[0].val && (n = r[0].val)), a) {
                        case e.coin:
                            return P.I.num < n ? t(!1) : (P.I.setDec(n), t(!0));

                        case e.diamond:
                            return M.I.num < n ? t(!1) : (M.I.setDec(n), t(!0));

                        case e.ad:
                            YYGGames.showReward(() => {

                                G.ShowVideo(function () {
                                    i.cur = W(), t(!0);
                                }, function () {
                                    i.cur = W(), t(!1);
                                }, function () {
                                    i.cur = W(), t(!1);
                                });
                            })
                    }
                }
            }, {
                key: "updateData",
                value: function () {
                    this.nextUpdateDataTime = this.cur + 10, Fw.Platform.setStorageItem("updateDataTime", this.cur + ""),
                        Fw.Platform.setStorageItem("coin", Fw.state.coin + ""), Fw.Platform.setStorageItem("diamond", Fw.state.diamond + ""),
                        Fw.Platform.setStorageItem("playerLv", Fw.state.playerLv), Fw.Platform.setStorageItem("playerUpgradeComplete", Fw.state.playerUpgradeComplete),
                        Fw.Platform.setStorageItem("offlineTime", this.cur + ""), Fw.Platform.setStorageItem("usePet", Fw.state.usePet.join(",")),
                        Fw.Platform.setStorageItem("hasPet", Fw.state.hasPet.join(","));
                }
            }, {
                key: "downloadData",
                value: function () {
                    Fw.state.coin = parseInt(Fw.Platform.getStorageItem("coin", "100")), Fw.state.diamond = parseInt(Fw.Platform.getStorageItem("diamond", "0")),
                        Fw.state.playerLv = parseInt(Fw.Platform.getStorageItem("playerLv", "1")), Fw.state.playerUpgradeComplete = parseInt(Fw.Platform.getStorageItem("playerUpgradeComplete", "0")),
                        this.offlineTime = parseInt(Fw.Platform.getStorageItem("offlineTime", this.cur + "")),
                        Fw.state.usePet = Fw.Platform.getStorageItem("usePet", "-1,-2,-2").split(",").map(function (e) {
                            return parseInt(e);
                        });
                    var e = Fw.Platform.getStorageItem("hasPet", "");
                    e && (Fw.state.hasPet = e.split(",").map(function (e) {
                        return parseInt(e);
                    }));
                }
            }], [{
                key: "I",
                get: function () {
                    return this._I || (this._I = new this()), this._I;
                }
            }]), t;
        }();
        J._I = null;
        var K, Z, Q, $, ee, te, ae,
            ie = function () {
                function e(t) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    u(this, e), this.duration = 15, this.endTime = 0, this.duration = t, this.endTime = a;
                }
                return d(e, [{
                    key: "cd",
                    get: function () {
                        return this.endTime < J.I.cur ? 0 : (this.endTime - J.I.cur) / this.duration;
                    }
                }, {
                    key: "isUsed",
                    get: function () {
                        return J.I.cur < this.endTime;
                    }
                }, {
                    key: "use",
                    value: function () {
                        this.endTime = J.I.cur + this.duration;
                    }
                }]), e;
            }(), ne = function (e) {
                h(a, e);
                var t = c(a);
                function a() {
                    var e;
                    return u(this, a), (e = t.call(this)).preShowBannerStatus = !1, e.isShowBanner = !0,
                        e.isShowInterstitialOnOpen = !1, e.isShowInterstitialOnClose = !1, e.isShowCustomLeftSingle = !0,
                        e.isShowCustomRightSingle = !0, e.preShowCustomLeftSingleStatus = !1, e.preShowCustomRightSingleStatus = !1,
                        e.isShowCustomRow1 = !0, e.preShowCustomRow1Status = !1, e.isPause = !0, e.preGameStatus = null,
                        e.btnClose = null, e.isBtnCloseDelay = !0, e.buttonDelay = 1500, e.isShowRecommendedAdPageOnClose = !1,
                        e.res = !1, e;
                }
                return d(a, [{
                    key: "onCreated",
                    value: function (e) {
                        e && (this.closeCallback = e.close);
                    }
                }, {
                    key: "onEnable",
                    value: function () {
                        var e = this;
                        this.check(), this.preGameStatus = Fw.state.gameStatus,
                            this.isPause && (Fw.state.gameStatus = !1),
                            this.preShowBannerStatus = G.IsShowBanner, G.HideBanner(),
                            this.isShowBanner && G.ShowBanner(),
                            this.isShowInterstitialOnOpen && G.ShowInterstitial(), this.preShowCustomLeftSingleStatus = G.CustomIsShow(G.UMConfig.Custom_LeftSingle_Index),
                            !this.preShowCustomLeftSingleStatus && this.isShowCustomLeftSingle ? G.ShowCustom([G.UMConfig.Custom_LeftSingle_Index]) : this.preShowCustomLeftSingleStatus && !this.isShowCustomLeftSingle && G.HideCustom([G.UMConfig.Custom_LeftSingle_Index]),
                            this.preShowCustomRightSingleStatus = G.CustomIsShow(G.UMConfig.Custom_RightSingle_Index),
                            !this.preShowCustomRightSingleStatus && this.isShowCustomRightSingle ? G.ShowCustom([G.UMConfig.Custom_RightSingle_Index]) : this.preShowCustomRightSingleStatus && !this.isShowCustomRightSingle && G.HideCustom([G.UMConfig.Custom_RightSingle_Index]),
                            this.isBtnCloseDelay && (this.btnClose = this.owner.getChildByName("close"),
                                this.btnClose || (this.btnClose = this.owner.getChildByName("BtnClose")),
                                this.btnClose && (this.btnClose.visible = !1,
                                    Laya.timer.once(this.buttonDelay, this, function () {
                                        e.btnClose.visible = !0;
                                    }))), this.preShowCustomRow1Status = G.CustomIsShow(G.UMConfig.Custom_Row1_Index),
                            !this.preShowCustomRow1Status && this.isShowCustomRow1 ? G.ShowCustom([G.UMConfig.Custom_Row1_Index]) :
                                this.preShowCustomRow1Status && !this.isShowCustomRow1 && G.HideCustom([G.UMConfig.Custom_Row1_Index]);
                        if (this.txtLv) {

                            this.txtLv.text = "Level ".concat(Fw.state.playerLv) + " ",
                                this.txtPower0.text = ye.getPower(Fw.state.playerLv - 1) + " ",
                                this.txtPower1.text = ye.getPower(Fw.state.playerLv) + " ";
                            console.log("打开升级界面：")
                        }
                    }
                }, {
                    key: "check",
                    value: function () {
                        this.isShowCustomLeftSingle && (this.isShowCustomLeftSingle = !!G.UMConfig.Value.SingleGridChance),
                            this.isShowCustomRightSingle && (this.isShowCustomRightSingle = !!G.UMConfig.Value.SingleGridChance),
                            this.isShowCustomRow1 && (this.isShowCustomRow1 = !!G.UMConfig.Value.HorizontalGridChance),
                            this.isBtnCloseDelay && (this.isBtnCloseDelay = G.IsButtonDelayStatus), this.isShowInterstitialOnOpen && (this.isShowInterstitialOnOpen = !!G.UMConfig.Value.InterstitialAdStatus),
                            this.isShowInterstitialOnClose && (this.isShowInterstitialOnClose = !!G.UMConfig.Value.InterstitialAdStatus),
                            this.isShowRecommendedAdPageOnClose && (this.isShowRecommendedAdPageOnClose = !!G.UMConfig.Value.CloseDialogRecommendedAd);
                    }
                }, {
                    key: "onDisable",
                    value: function () {
                        var e = this;
                        this.isShowRecommendedAdPageOnClose ? G.OpenCustomPage(function () {
                            e.onAfterDisable();
                        }) : this.onAfterDisable();
                    }
                }, {
                    key: "onAfterDisable",
                    value: function () {
                        this.isPause && (Fw.state.gameStatus = this.preGameStatus), G.HideBanner(), this.preShowBannerStatus && G.ShowBanner(),
                            this.isShowInterstitialOnClose && G.ShowInterstitial(), this.preShowCustomLeftSingleStatus ? this.preShowCustomLeftSingleStatus && !this.isShowCustomLeftSingle && G.ShowCustom([G.UMConfig.Custom_LeftSingle_Index]) : G.HideCustom([G.UMConfig.Custom_LeftSingle_Index]),
                            this.preShowCustomRightSingleStatus ? this.preShowCustomRightSingleStatus && !this.isShowCustomRightSingle && G.ShowCustom([G.UMConfig.Custom_RightSingle_Index]) : G.HideCustom([G.UMConfig.Custom_RightSingle_Index]),
                            this.preShowCustomRow1Status ? this.preShowCustomRow1Status && !this.isShowCustomRow1 && G.ShowCustom([G.UMConfig.Custom_Row1_Index]) : G.HideCustom([G.UMConfig.Custom_Row1_Index]),
                            this.closeCallback && this.closeCallback.runWith(this.res);
                    }
                }]), a;
            }(Laya.Script),
            oe = function (e) {
                h(a, e);
                var t = c(a);
                function a() {
                    var e;
                    return u(this, a), (e = t.call(this)).clickAni = new Laya.TimeLine(), e.isShowBanner = !1,
                        e.isShowCustomLeftSingle = !1, e.isShowCustomRightSingle = !1, e.isShowCustomRow1 = !1,
                        e.fillRange = 0, e.alreadyClick = !1, e.clickRate = .14, e.autoRate = .006, e.random = .7,
                        e.isEarn = !0, e;
                }
                return d(a, [{
                    key: "onEnable",
                    value: function () {
                        i(n(a.prototype), "onEnable", this).call(this), this.owner.height = Laya.stage.height,
                            this.clickAni.to(this.icon, {
                                rotation: 10
                            }, 50).to(this.icon, {
                                rotation: -10
                            }, 100).to(this.icon, {
                                rotation: 10
                            }, 100).to(this.icon, {
                                rotation: -10
                            }, 100).to(this.icon, {
                                rotation: 0
                            }, 50), this.fillRange = 0, this.random = .4 * Math.random() + .3;
                    }
                }, {
                    key: "onClick",
                    value: function (e) {
                        var t = this;
                        switch (e.target.name) {
                            case "BtnClick":
                                if (this.fillRange += this.clickRate, this.fillRange >= this.random && G.GetValue(4) && !this.alreadyClick && (this.alreadyClick = !0,
                                    G.ShowBanner(), Laya.timer.once(1e3, this, function () {
                                        G.HideBanner(), Laya.timer.once(300, t, function () {
                                            t.ShowFinish();
                                        });
                                    })), this.fillRange >= 1 && this.btnClick.visible && (this.fillRange = 1, this.ShowFinish()),
                                    this.clickAni.play(0, !1), Math.random() < .3) {
                                    M.I.setInc(1), M.I.tipsDiamondAni(1, Laya.stage.width * (.6 * Math.random() + .2), Laya.stage.height * (.2 * Math.random() + .2));
                                }
                        }
                    }
                }, {
                    key: "onUpdate",
                    value: function () {
                        this.fillRange -= this.autoRate, this.fillRange <= 0 && (this.fillRange = 0);
                    }
                }, {
                    key: "ShowFinish",
                    value: function () {
                        var e = this;
                        if (this.isEarn) {
                            this.isEarn = !1;
                            var t = 5 * (Fw.state.island + 1);
                            J.I.receive(y.diamond, t), M.I.playAni({
                                count: t
                            }), M.I.tipsDiamondAni(t);
                        }
                        Laya.timer.clearAll(this), Laya.timer.once(500, this, function () {
                            e.owner.close();
                        });
                    }
                }]), a;
            }(ne);
        !function (e) {
            e.CheckFirstBlock = "CheckFirstBlock", e.CheckBlock = "CheckBlock", e.UploadIslandData = "UploadIslandData",
                e.FxPlay = "FxPlay", e.FxPlayBlock = "FxPlayBlock", e.FxStop = "FxStop", e.RefreshPetDialog = "RefreshPetDialog",
                e.RefreshPet = "RefreshPet", e.RefreshBuildComplete = "RefreshBuildComplete", e.CreateWorker = "CreateWorker",
                e.FallOre = "FallOre";
        }(K || (K = {}));
        var re = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                u(this, e), this.island = 0, this.index = 0, this._lv = 0, this.isBuild = !1, this.island = t,
                    this.index = a, this.lv = i, Laya.timer.loop(1e3, this, this.onUpdate, [1]);
            }
            return d(e, [{
                key: "lv",
                get: function () {
                    return this._lv;
                },
                set: function (e) {
                    var t = this._lv;
                    this._lv = e, 0 === t && 1 === e && Fw.emit(K.CreateWorker, [this.island, this.index]);
                }
            }, {
                key: "info",
                get: function () {
                    return ce.getWorkerInfo(this.island, this.index);
                }
            }, {
                key: "speed",
                get: function () {
                    return ce.getWorkerSpeed(this.lv);
                }
            }, {
                key: "speedMult",
                get: function () {
                    return ce.getWorkerSpeedMult(this.lv);
                }
            }, {
                key: "power",
                get: function () {
                    return ce.getWorkerPower(this.lv);
                }
            }, {
                key: "price",
                get: function () {
                    return ce.getUpgradeWorkerPrice(this.island, this.lv);
                }
            }, {
                key: "onUpdate",
                value: function (e) {
                    this.lv < 1 || Fw.state.island !== this.island && (Fw.state.coin += this.speed * e * he.getOrePrice(this.island));
                }
            }]), e;
        }(), se = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                u(this, e), this.index = -1, this.isAreaMain = !1, this.unlockMainShort = 300, this.heloTotal = 120,
                    this.heloBlockList = [], this.isAreaWorker = !1, this.unlockWorkerShort = 25, this.workerList = [],
                    this.isAreaBuild = !1, this.unlockBuildShort = 250, this._buildComplete = 100, this.mult = 1,
                    this.isAreaPet = !1, this.unlockPetShort = 100, this.index = t, this.heloBlockList.length = 0;
                for (var a = 0; a < 25; a++) this.heloBlockList.push(1);
                this.workerList.length = 0;
                for (var i = 0; i < ce.workerTotal; i++) this.workerList.push(new re(this.index, i, 0));
                this.setData(JSON.parse(Fw.Platform.getStorageItem("Island".concat(this.index), JSON.stringify({
                    isAreaMain: 0 === this.index
                })))), console.log(this.index, this), Laya.timer.loop(1e3, this, this.onUpdate, [1]);
            }
            return d(e, [{
                key: "buildComplete",
                get: function () {
                    return this._buildComplete;
                },
                set: function (e) {
                    if (this.buildComplete >= ue.total) {
                        var t, a = r(this.workerList);
                        try {
                            for (a.s(); !(t = a.n()).done;) {
                                t.value.isBuild = !1;
                            }
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            a.e(e);
                        } finally {
                            a.f();
                        }
                    }
                    this._buildComplete = e;
                }
            }, {
                key: "buildProgress",
                get: function () {
                    return Math.min(1, this.buildComplete / ue.total);
                }
            }, {
                key: "onUpdate",
                value: function (e) { }
            }, {
                key: "getData",
                value: function () {
                    var e, t = [], a = r(this.workerList);
                    try {
                        for (a.s(); !(e = a.n()).done;) {
                            var i = e.value;
                            t.push(i.lv);
                        }
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a.e(e);
                    } finally {
                        a.f();
                    }
                    return {
                        index: this.index,
                        isAreaMain: this.isAreaMain,
                        unlockMainShort: this.unlockMainShort,
                        heloTotal: this.heloTotal,
                        heloBlockList: this.heloBlockList,
                        isAreaWorker: this.isAreaWorker,
                        unlockWorkerShort: this.unlockWorkerShort,
                        worker: t,
                        isAreaBuild: this.isAreaBuild,
                        unlockBuildShort: this.unlockBuildShort,
                        buildComplete: this.buildComplete,
                        isAreaPet: this.isAreaPet,
                        unlockPetShort: this.unlockPetShort
                    };
                }
            }, {
                key: "setData",
                value: function (e) {
                    this.isAreaMain = e.isAreaMain || !1, this.unlockMainShort = void 0 !== e.unlockMainShort ? e.unlockMainShort : he.getUnlockAreaPrice(this.index),
                        this.heloTotal = e.heloTotal || 0, e.heloBlockList && (this.heloBlockList = e.heloBlockList),
                        this.isAreaWorker = e.isAreaWorker || !1, this.unlockWorkerShort = this.isAreaWorker ? 0 : void 0 !== e.unlockWorkerShort ? e.unlockWorkerShort : ce.getUnlockAreaPrice(this.index);
                    for (var t = e.worker || [0, 0, 0, 0], a = 0; a < 4; a++) this.workerList[a].lv = t[a];
                    this.isAreaBuild = e.isAreaBuild || !1, this.unlockBuildShort = this.isAreaBuild ? 0 : void 0 !== e.unlockBuildShort ? e.unlockBuildShort : ue.getUnlockAreaPrice(this.index),
                        this.buildComplete = e.buildComplete || 0, this.isAreaPet = e.isAreaPet || !1, this.unlockPetShort = this.isAreaPet ? 0 : void 0 !== e.unlockPetShort ? e.unlockPetShort : de.getUnlockAreaPrice(this.index);
                }
            }]), e;
        }(), le = function () {
            function e() {
                u(this, e), this.islandList = [], this.defData = [{
                    index: 0,
                    isAreaMain: !0
                }], this.download(), Laya.timer.loop(1e3, this, this.onUpdate, [1]);
            }
            return d(e, [{
                key: "onUpdate",
                value: function (e) {
                    this.upload();
                }
            }, {
                key: "getIsland",
                value: function (e) {
                    return this.islandList[e] || (this.islandList[e] = new se(e)), this.islandList[e];
                }
            }, {
                key: "upload",
                value: function () {
                    var e = Math.floor(Laya.timer.currTimer / 1e3) % this.islandList.length;
                    Fw.Platform.setStorageItem("island_".concat(e), JSON.stringify(this.islandList[e].getData())),
                        Fw.Platform.setStorageItem("islandMax", this.islandList.length + "");
                }
            }, {
                key: "download",
                value: function () {
                    this.islandList.length = 0;
                    for (var e = parseInt(Fw.Platform.getStorageItem("islandMax", "1")), t = 0; t < e; t++) {
                        var a = JSON.parse(Fw.Platform.getStorageItem("island_".concat(t), JSON.stringify(this.defData[t] || {
                            index: t
                        }))), i = new se(t);
                        i.setData(a), this.islandList[t] = i;
                    }
                }
            }], [{
                key: "I",
                get: function () {
                    return this._I || (this._I = new e()), this._I;
                }
            }]), e;
        }();
        le._I = null;
        var he = function () {
            function e() {
                u(this, e);
            }
            return d(e, null, [{
                key: "getUnlockAreaPrice",
                value: function (e) {
                    return e++, void 0 !== this.areaConf[e] ? this.areaConf[e] : 1500 * Math.pow(2, e - 3);
                }
            }, {
                key: "getStyle",
                value: function (e) {
                    return this.styleList[e % this.styleList.length];
                }
            }, {
                key: "getOrePrice",
                value: function (e) {
                    return ++e;
                }
            }]), e;
        }();
        he.total = 10, he.width = 27.86, he.areaConf = {
            1: 250,
            2: 800,
            3: 1500
        }, he.styleList = [{
            lh: {
                egg: "egg_1.lh",
                tree: "shu_1.lh"
            },
            lmat: {
                grassland: "LV1/caodi.lmat",
                land: ["LV1/tudi_bianse.lmat", "LV1/tudi.lmat"],
                kuangmian: "LV1/kuangmian.lmat",
                dixiakuangmian: "LV1/dixiakuangmian.lmat",
                road: "LV1/tulu.lmat",
                board_ban: "LV1/biaoshipai_bianse.lmat",
                board_ore: "LV1/jinbi_bianse.lmat",
                ore: "LV1/yingbi.lmat"
            }
        }, {
            lh: {
                egg: "egg_2.lh",
                tree: "shu_2.lh"
            },
            lmat: {
                grassland: "LV2/caodi.lmat",
                land: ["LV2/tudi_bianse.lmat", "LV2/tudi.lmat"],
                kuangmian: "LV2/kuangmian.lmat",
                dixiakuangmian: "LV2/dixiakuangmian.lmat",
                road: "LV2/tulu.lmat",
                board_ban: "LV2/biaoshipai_bianse.lmat",
                board_ore: "LV2/jinbi_bianse.lmat",
                ore: "LV2/yingbi.lmat"
            }
        }, {
            lh: {
                egg: "egg_3.lh",
                tree: "shu_3.lh"
            },
            lmat: {
                grassland: "LV3/caodi.lmat",
                land: ["LV3/tudi_bianse.lmat", "LV3/tudi.lmat"],
                kuangmian: "LV3/kuangmian.lmat",
                dixiakuangmian: "LV3/dixiakuangmian.lmat",
                road: "LV3/tulu.lmat",
                board_ban: "LV3/biaoshipai_bianse.lmat",
                board_ore: "LV3/jinbi_bianse.lmat",
                ore: "LV3/yingbi.lmat"
            }
        }, {
            lh: {
                egg: "egg_4.lh",
                tree: "shu_4.lh"
            },
            lmat: {
                grassland: "LV4/caodi.lmat",
                land: ["LV4/tudi_bianse.lmat", "LV4/tudi.lmat"],
                kuangmian: "LV4/kuangmian.lmat",
                dixiakuangmian: "LV4/dixiakuangmian.lmat",
                road: "LV4/tulu.lmat",
                board_ban: "LV4/biaoshipai_bianse.lmat",
                board_ore: "LV4/jinbi_bianse.lmat",
                ore: "LV4/yingbi.lmat"
            }
        }, {
            lh: {
                egg: "egg_5.lh",
                tree: "shu_5.lh"
            },
            lmat: {
                grassland: "LV5/caodi.lmat",
                land: ["LV5/tudi_bianse.lmat", "LV5/tudi.lmat"],
                kuangmian: "LV5/kuangmian.lmat",
                dixiakuangmian: "LV5/dixiakuangmian.lmat",
                road: "LV5/tulu.lmat",
                board_ban: "LV5/biaoshipai_bianse.lmat",
                board_ore: "LV5/jinbi_bianse.lmat",
                ore: "LV5/yingbi.lmat"
            }
        }, {
            lh: {
                egg: "egg_6.lh",
                tree: "shu_6.lh"
            },
            lmat: {
                grassland: "LV6/caodi.lmat",
                land: ["LV6/tudi_bianse.lmat", "LV6/tudi.lmat"],
                kuangmian: "LV6/kuangmian.lmat",
                dixiakuangmian: "LV6/dixiakuangmian.lmat",
                road: "LV6/tulu.lmat",
                board_ban: "LV6/biaoshipai_bianse.lmat",
                board_ore: "LV6/jinbi_bianse.lmat",
                ore: "LV6/yingbi.lmat"
            }
        }, {
            lh: {
                egg: "egg_7.lh",
                tree: "shan_7.lh"
            },
            lmat: {
                grassland: "LV7/caodi.lmat",
                land: ["LV7/tudi_bianse.lmat", "LV7/tudi.lmat"],
                kuangmian: "LV7/kuangmian.lmat",
                dixiakuangmian: "LV7/dixiakuangmian.lmat",
                road: "LV7/tulu.lmat",
                board_ban: "LV7/biaoshipai_bianse.lmat",
                board_ore: "LV7/jinbi_bianse.lmat",
                ore: "LV7/yingbi.lmat"
            }
        }, {
            lh: {
                egg: "egg_8.lh",
                tree: "shi_8.lh"
            },
            lmat: {
                grassland: "LV8/caodi.lmat",
                land: ["LV8/tudi_bianse.lmat", "LV8/tudi.lmat"],
                kuangmian: "LV8/kuangmian.lmat",
                dixiakuangmian: "LV8/dixiakuangmian.lmat",
                road: "LV8/tulu.lmat",
                board_ban: "LV8/biaoshipai_bianse.lmat",
                board_ore: "LV8/jinbi_bianse.lmat",
                ore: "LV8/yingbi.lmat"
            }
        }, {
            lh: {
                egg: "egg_1.lh",
                tree: "shu_9.lh"
            },
            lmat: {
                grassland: "LV9/caodi.lmat",
                land: ["LV9/tudi_bianse.lmat", "LV9/tudi.lmat"],
                kuangmian: "LV9/kuangmian.lmat",
                dixiakuangmian: "LV9/dixiakuangmian.lmat",
                road: "LV9/tulu.lmat",
                board_ban: "LV9/biaoshipai_bianse.lmat",
                board_ore: "LV9/jinbi_bianse.lmat",
                ore: "LV9/yingbi.lmat"
            }
        }, {
            lh: {
                egg: "egg_2.lh",
                tree: "zhu_10.lh"
            },
            lmat: {
                grassland: "LV10/caodi.lmat",
                land: ["LV10/tudi_bianse.lmat", "LV10/tudi.lmat"],
                kuangmian: "LV10/kuangmian.lmat",
                dixiakuangmian: "LV10/dixiakuangmian.lmat",
                road: "LV10/tulu.lmat",
                board_ban: "LV10/biaoshipai_bianse.lmat",
                board_ore: "LV10/jinbi_bianse.lmat",
                ore: "LV10/yingbi.lmat"
            }
        }];
        var ce = function () {
            function e() {
                u(this, e);
            }
            return d(e, null, [{
                key: "getUnlockAreaPrice",
                value: function (e) {
                    return e++, void 0 !== this.areaConf[e] ? this.areaConf[e] : 200 + 100 * Math.pow(2, e - 3);
                }
            }, {
                key: "getUpgradeWorkerPrice",
                value: function (e, t) {
                    e++;
                    var a = 100 * Math.pow(2, e - 1);
                    return Math.round(a * Math.pow(1.1, t));
                }
            }, {
                key: "getWorkerSpeed",
                value: function (e) {
                    return 2 * (1 + this.getWorkerSpeedMult(e));
                }
            }, {
                key: "getWorkerSpeedMult",
                value: function (e) {
                    return .02 * (e - 1);
                }
            }, {
                key: "getWorkerPower",
                value: function (e) {
                    return 19 + e;
                }
            }, {
                key: "getWorkerInfo",
                value: function (e, t) {
                    return this.workerList[(e * this.workerTotal + t) % this.workerList.length];
                }
            }]), e;
        }();
        ce.areaConf = {
            1: 25,
            2: 100,
            3: 200
        },
            ce.workerList = [{
                name: "Florence",
                desc: "Luôn cảm thấy may mắn"
            }, {
                name: "Núi Tư Tuyền",
                desc: "Mục tiêu là đào tới tâm trái đất"
            }, {
                name: "Frances",
                desc: "Tôi thích mùi của đất"
            }, {
                name: "Janet",
                desc: "Chỉ để cho cô ấy mọi thứ cô ấy muốn!"
            }, {
                name: "Tang Hao",
                desc: "Can't wait to find diamonds!"
            }, {
                name: "Katherine",
                desc: "Không ai có thể thách thức khả năng đào của anh ta"
            }, {
                name: "Janice",
                desc: "Khai thác quên ngủ"
            }, {
                name: "Nancy",
                desc: "Hy vọng sẽ vượt qua cấp độ thông qua khai thác"
            }, {
                name: "Pamela",
                desc: "Khai thác mỏ là niềm vui đối với anh ta"
            }, {
                name: "Patricia",
                desc: "Không bao giờ quên cảm giác hồi hộp trong lần khai thác đầu tiên của mình"
            }, {
                name: "Roberta",
                desc: "The shepherd became a digger."
            }, {
                name: "Irving",
                desc: "Luôn hy vọng làm giàu bằng cách đào kho báu"
            }, {
                name: "James",
                desc: "Mất chìa khóa và thề sẽ đào nó lên"
            }, {
                name: "Lawrence",
                desc: "Khai thác mỏ nên được dạy trong trường học"
            }, {
                name: "Nathan",
                desc: "Đàn ông đích thực muốn khai thác!"
            }, {
                name: "Nicholas",
                desc: "Khai thác là cách tốt nhất để xây dựng cơ thể của bạn"
            }],
            ce.workerTotal = 4;
        var ue = function () {
            function e() {
                u(this, e);
            }
            return d(e, null, [{
                key: "getUnlockAreaPrice",
                value: function (e) {
                    return e++, void 0 !== this.areaConf[e] ? this.areaConf[e] : 600 + 100 * Math.pow(2, e - 3);
                }
            }, {
                key: "getMult",
                value: function (e) {
                    return 10 * ++e;
                }
            }]), e;
        }();
        ue.areaConf = {
            1: 200,
            2: 350,
            3: 500
        }, ue.total = 1e3;
        var de = function () {
            function e() {
                u(this, e);
            }
            return d(e, null, [{
                key: "getUnlockAreaPrice",
                value: function (e) {
                    return e++, void 0 !== this.areaConf[e] ? this.areaConf[e] : 175 * Math.pow(2, e - 3);
                }
            }, {
                key: "getPetName",
                value: function (e) {
                    return this.petList[Math.floor(e % this.petList.length)];
                }
            }, {
                key: "getPetMult",
                value: function (e) {
                    var t = Math.floor(e / 6) + 1, a = 1 + .1 * t;
                    switch (e - 6 * (t - 1)) {
                        case 3:
                        case 4:
                            return a + .1;

                        case 5:
                            return a + .2;

                        default:
                            return a;
                    }
                }
            }, {
                key: "getPetList",
                value: function (e) {
                    var t = 6 * (++e - 1), a = 1 + .1 * e;
                    return [{
                        index: t,
                        rate: .25,
                        mult: a,
                        bg: 0
                    }, {
                        index: t + 1,
                        rate: .25,
                        mult: a,
                        bg: 0
                    }, {
                        index: t + 2,
                        rate: .25,
                        mult: a,
                        bg: 0
                    }, {
                        index: t + 3,
                        rate: .1,
                        mult: a + .1,
                        bg: 1
                    }, {
                        index: t + 4,
                        rate: .1,
                        mult: a + .1,
                        bg: 1
                    }, {
                        index: t + 5,
                        rate: .05,
                        mult: a + .2,
                        bg: 2
                    }];
                }
            }, {
                key: "getUnlockPrice",
                value: function (e) {
                    return e++, void 0 !== this.petConf[e] ? this.petConf[e] : 50 + 25 * (e - 3);
                }
            }]), e;
        }();
        de.areaConf = {
            1: 100,
            2: 150,
            3: 200
        }, de.petList = ["Antelope", "Beluga", "Bull", "Chameleon", "Giraffe", "Hamster", "Husky", "Lion", "Monkey", "Narwhal", "Python", "Skunk"],
            de.petConf = {
                1: 10,
                2: 25,
                3: 50
            };
        var ye = function () {
            function e() {
                u(this, e);
            }
            return d(e, null, [{
                key: "getPower",
                value: function (e) {

                    return 30 + 3 * (e - 1);
                }
            }, {
                key: "getUpgrade",
                value: function (e) {
                    return 50 + 6 * (e - 1);
                }
            }]), e;
        }(), me = function () {
            function e() {
                u(this, e);
            }
            return d(e, null, [{
                key: "getDiamondRate",
                value: function (e) {
                    for (var t = 0; t < this.diamondRate.length - 1; t++) if (e < this.diamondRate[t].max) return this.diamondRate[t].cRate;
                    return this.diamondRate[this.diamondRate.length - 1].cRate;
                }
            }, {
                key: "getDiamondTotal",
                value: function (e) {
                    return J.I.skill.diamond.isUsed || Math.random() < this.getDiamondRate(e) ? 1 : 0;
                }
            }, {
                key: "getOreTotal",
                value: function () {
                    var e, t = Math.random(), a = 0, i = r(this.oreRate);
                    try {
                        for (i.s(); !(e = i.n()).done;) {
                            var n = e.value;
                            if (t < (a += n.rate)) return n.total;
                        }
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        i.e(e);
                    } finally {
                        i.f();
                    }
                    return 1;
                }
            }, {
                key: "info",
                value: function () {
                    var e, t = le.I.getIsland(Fw.state.island).heloTotal;
                    return e = t <= 10 ? 10 : t <= 100 ? 100 : 1e3, {
                        active: t <= 1e3,
                        island: Fw.state.island + 1,
                        complete: t,
                        total: e
                    };
                }
            }]), e;
        }();
        me.blockHeight = .2, me.blockWidth = 1.5, me.showElevatorLv = 100, me.showPortalLv = 1e3,
            me.diamondRate = [{
                max: 10,
                rate: 0,
                cRate: 0
            }, {
                max: 100,
                rate: .1,
                cRate: .004
            }, {
                max: 1e3,
                rate: .15,
                cRate: .006
            }, {
                max: 1e4,
                rate: .2,
                cRate: .008
            }], me.oreRate = [{
                rate: .85,
                total: 1
            }, {
                rate: .1,
                total: 2
            }, {
                rate: .05,
                total: 3
            }], function (e) {
                e[e.Default = 0] = "Default", e[e.Dialog = 1] = "Dialog";
            }(Z || (Z = {})), function (e) {
                e.LoadView = "loadui/LoadView.scene", e.GameView = "gameui/view/GameView.scene",
                    e.SetDialog = "gameui/dialog/SetDialog.scene", e.OfflineDialog = "gameui/dialog/OfflineDialog.scene",
                    e.WorkerDialog = "gameui/dialog/WorkerDialog.scene", e.PetDialog = "gameui/dialog/PetDialog.scene",
                    e.EggDialog = "gameui/dialog/EggDialog.scene", e.UnlockPetDialog = "gameui/dialog/UnlockPetDialog.scene",
                    e.MyPetDialog = "gameui/dialog/MyPetDialog.scene", e.UpgradeDialog = "gameui/dialog/UpgradeDialog.scene",
                    e.UnlockDialog = "gameui/dialog/UnlockDialog.scene", e.CoinDialog = "gameui/dialog/CoinDialog.scene",
                    e.DiamondDialog = "gameui/dialog/DiamondDialog.scene", e.MotorcycleDialog = "gameui/dialog/MotorcycleDialog.scene",
                    e.UnlockBuildDialog = "gameui/dialog/UnlockBuildDialog.scene", e.UnlockDiamondDialog = "gameui/dialog/UnlockDiamondDialog.scene",
                    e.UnlockElevatorDialog = "gameui/dialog/UnlockElevatorDialog.scene", e.UnlockPortalDialog = "gameui/dialog/UnlockPortalDialog.scene",
                    e.GiftDialog = "gameui/dialog/GiftDialog.scene";
            }(Q || (Q = {}));
        var fe = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                var e;
                return u(this, a), (e = t.call(this)).orthographicPos = new Laya.Vector3(0, 0, 0),
                    e;
            }
            return d(a, [{
                key: "onEnable",
                value: function () {
                    var e = this;
                    i(n(a.prototype), "onEnable", this).call(this);
                    var t = [{
                        lh: w + he.getStyle(Fw.state.island).lh.egg,
                        sp: this.egg,
                        index: Z.Dialog,
                        scale: 1,
                        angle: 0
                    }];
                    this.initSet(), Laya.timer.frameOnce(2, this, function () {
                        var a, i = r(t);
                        try {
                            for (i.s(); !(a = i.n()).done;) {
                                var n = a.value;
                                e.sp3ToTexture(n.lh, n.sp, n.index, n.scale, n.angle);
                            }
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            i.e(e);
                        } finally {
                            i.f();
                        }
                    }), Laya.timer.once(1500, this, function () {
                        e.owner.close(), Fw.Dialog.open(Q.UnlockPetDialog);
                    });
                }
            }, {
                key: "onDisable",
                value: function () {
                    i(n(a.prototype), "onDisable", this).call(this), this._3DScene.destroy(!0);
                }
            }, {
                key: "initSet",
                value: function () {
                    this._3DScene = new Laya.Scene3D(), Laya.stage.addChild(this._3DScene), this._3DScene.addChild(new Laya.DirectionLight());
                }
            }, {
                key: "sp3ToTexture",
                value: function (e, t, a) {
                    var i = this, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                    Laya.Sprite3D.load(e, Laya.Handler.create(this, function (e) {
                        i._3DScene.addChild(e), Laya.TimeLine.to(e.transform, {
                            localRotationEulerZ: -15
                        }, 100).to(e.transform, {
                            localRotationEulerZ: 15
                        }, 200).to(e.transform, {
                            localRotationEulerZ: -15
                        }, 200).to(e.transform, {
                            localRotationEulerZ: 15
                        }, 200).to(e.transform, {
                            localRotationEulerZ: 0
                        }, 100).to(e.transform, {
                            localScaleX: 0,
                            localScaleY: 0,
                            localScaleZ: 0
                        }, 200).play();
                        var r = new Laya.Camera(0, .1, 1e3);
                        i._3DScene.addChild(r), r.transform.rotate(new Laya.Vector3(0, 0, 0), !1, !1), r.enableHDR = !1,
                            r.transform.position = new Laya.Vector3(500, 0, 0), r.orthographic = !0, r.orthographicVerticalSize = 2,
                            r.clearColor = new Laya.Vector4(0, 0, 0, 0), e.transform.position = new Laya.Vector3(500, 0, -500),
                            e.transform.localScale = new Laya.Vector3(n, n, n), e.transform.localRotationEulerY = o,
                            r.removeAllLayers(), r.addLayer(a), setLayer(e, a), r.renderTarget = new Laya.RenderTexture(1024, 1024, Laya.RenderTextureFormat.R8G8B8A8, Laya.RenderTextureDepthFormat.DEPTHSTENCIL_24_8),
                            t.texture = new Laya.Texture(r.renderTarget);
                    }));
                }
            }]), a;
        }(ne), we = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                return u(this, a), t.call(this);
            }
            return d(a, [{
                key: "onEnable",
                value: function () {
                    this.owner.visible = G.IsShowVideoIcon;
                }
            }]), a;
        }(Laya.Script), ge = function (t) {
            h(i, t);
            var a = c(i);
            function i() {
                var e;
                return u(this, i), (e = a.call(this)).status = !0, e;
            }
            return d(i, [{
                key: "onClick",
                value: function (t) {
                    var a = this;
                    if (this.status) switch (t.target.name) {
                        case "BtnGet":
                            this.status = !1, this.playOpenChestAni(function () {
                                var e = 100 * Math.pow(2, Fw.state.island);
                                console.log("--------------------------------", e), J.I.receive(y.coin, e), P.I.playAni({
                                    count: e
                                }), P.I.tipsCoinAni(e), Laya.timer.once(300, a, function () {
                                    a.owner.close();
                                });
                            });
                            break;

                        case "BtnGetAd":
                            this.status = !1, J.I.unlock(function (e) {
                                e ? a.playOpenChestAni(function () {
                                    var e = 5 * (Fw.state.island + 1);
                                    J.I.receive(y.diamond, e), M.I.playAni({
                                        count: e
                                    }), M.I.tipsDiamondAni(e), Laya.timer.once(300, a, function () {
                                        a.owner.close();
                                    });
                                }) : a.status = !0;
                            }, e.ad);
                    }
                }
            }, {
                key: "playOpenChestAni",
                value: function (e) {
                    this.chestOpen.scaleX = this.chestOpen.scaleY = 0, this.chestOpen.visible = !0;
                    var t = new Laya.TimeLine();
                    t.to(this.chestClose, {
                        rotation: 10
                    }, 100).to(this.chestClose, {
                        rotation: -10
                    }, 200).to(this.chestClose, {
                        rotation: 10
                    }, 200).to(this.chestClose, {
                        rotation: -10
                    }, 200).to(this.chestClose, {
                        rotation: 0,
                        scaleX: 0,
                        scaleY: 0
                    }, 100).to(this.chestOpen, {
                        scaleX: 1,
                        scaleY: 1
                    }, 100), t.play(), Laya.timer.once(1e3, this, function () {
                        e && e();
                    });
                }
            }]), i;
        }(ne), Le = function (t) {
            h(o, t);
            var a = c(o);
            function o() {
                var e;
                return u(this, o), (e = a.call(this)).orthographicPos = new Laya.Vector3(0, 0, 0),
                    e;
            }
            return d(o, [{
                key: "onEnable",
                value: function () {
                    var e = this;
                    i(n(o.prototype), "onEnable", this).call(this), o.OpenTime = Laya.timer.currTimer;
                    var t = [{
                        lh: w + "Motorcycle.lh",
                        sp: this.motorcycleSp,
                        index: Z.Dialog,
                        offset: new Laya.Vector3(-.1, 0, 0),
                        scale: .4,
                        angle: 60
                    }];
                    this.initSet(), Laya.timer.frameOnce(2, this, function () {
                        var a, i = r(t);
                        try {
                            for (i.s(); !(a = i.n()).done;) {
                                var n = a.value;
                                e.sp3ToTexture(n.lh, n.sp, n.index, n.offset, n.scale, n.angle);
                            }
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            i.e(e);
                        } finally {
                            i.f();
                        }
                    });
                }
            }, {
                key: "onDisable",
                value: function () {
                    i(n(o.prototype), "onDisable", this).call(this), o.OpenTime = Laya.timer.currTimer,
                        this._3DScene.destroy(!0);
                }
            }, {
                key: "onClick",
                value: function (t) {
                    var a = this;
                    switch (t.target.name) {
                        case "BtnGetAd":
                            J.I.unlock(function (e) {
                                e && (J.I.skill.motorcycle.use(), a.owner.close());
                            }, e.ad);
                    }
                }
            }, {
                key: "initSet",
                value: function () {
                    this._3DScene = new Laya.Scene3D(), Laya.stage.addChild(this._3DScene), this._3DScene.addChild(new Laya.DirectionLight());
                }
            }, {
                key: "sp3ToTexture",
                value: function (e, t, a) {
                    var i = this, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : p, o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                    Laya.Sprite3D.load(e, Laya.Handler.create(this, function (e) {
                        i._3DScene.addChild(e);
                        var s = new Laya.Camera(0, .1, 1e3);
                        i._3DScene.addChild(s), s.transform.rotate(new Laya.Vector3(0, 0, 0), !1, !1), s.enableHDR = !1,
                            s.transform.position = new Laya.Vector3(500, 0, 0), s.orthographic = !0, s.orthographicVerticalSize = 2,
                            s.clearColor = new Laya.Vector4(0, 0, 0, 0);
                        var l = new Laya.Vector3();
                        Laya.Vector3.add(new Laya.Vector3(500, 0, -500), n, l), e.transform.position = l,
                            e.transform.localScale = new Laya.Vector3(o, o, o), e.transform.localRotationEulerY = r,
                            s.removeAllLayers(), s.addLayer(a), setLayer(e, a), s.renderTarget = new Laya.RenderTexture(1024, 1024, Laya.RenderTextureFormat.R8G8B8A8, Laya.RenderTextureDepthFormat.DEPTHSTENCIL_24_8),
                            t.texture = new Laya.Texture(s.renderTarget);
                    }));
                }
            }]), o;
        }(ne);
        Le.OpenTime = 0;
        var ve = function (t) {
            h(o, t);
            var a = c(o);
            function o() {
                var e;
                return u(this, o), (e = a.call(this)).isShowInterstitialOnClose = !0, e.page = 0,
                    e.pageTotal = 1, e.pageSize = 9, e.orthographicPos = new Laya.Vector3(0, 0, 0),
                    e;
            }
            return d(o, [{
                key: "onEnable",
                value: function () {
                    var e = this;
                    i(n(o.prototype), "onEnable", this).call(this), this.useList.renderHandler = new Laya.Handler(this, this.updateUseItem),
                        this.hasList.renderHandler = new Laya.Handler(this, this.updateHasItem), Laya.timer.frameOnce(2, this, function () {
                            e.refresh();
                        });
                }
            }, {
                key: "onDisable",
                value: function () {

                    Fw.state.gameStatus = !0
                    console.log("RefreshPet1")
                    //刷新宠物
                    i(n(o.prototype), "onDisable", this).call(this),
                        this._3DScene.destroy(!0),
                        Fw.emit(K.RefreshPet);
                    //
                }
            }, {
                key: "onClick",
                value: function (e) {
                    switch (e.target.name) {
                        case "BtnBest":
                            var t = Fw.state.hasList.slice();
                            t.sort(function (e, t) {
                                return t - e;
                            }), t.slice(0, Math.min(3, t.length)), this.refresh();
                            break;

                        case "BtnPre":
                            this.page = (this.page - 1) % this.pageTotal, this.page < 0 && (this.page = this.pageTotal - 1),
                                this.refresh();
                            break;

                        case "BtnNext":
                            this.page = (this.page + 1) % this.pageTotal, this.refresh();
                    }
                }
            }, {
                key: "refresh",
                value: function () {

                    // console.error("Fw.state.hasPet", Fw.state.hasPet.length)
                    var e = Fw.state.usePet.slice();
                    if (e.length < 3) for (var t = e.length; t < 3; t++) e.push(-2);
                    this.useList.array = e;
                    var a = [], i = Fw.state.hasPet.slice();
                    this.pageTotal = Math.ceil(i.length / this.pageSize), this.pageTotal <= 0 && (this.pageTotal = 1),
                        this.page = this.page % this.pageTotal;
                    for (var n = this.page * this.pageSize, o = (this.page + 1) * this.pageSize; n < o; n++) a.push(n < i.length ? i[n] : -1);
                    this.hasList.array = a, this.txtPage.text = "".concat(this.page + 1, "/").concat(this.pageTotal),
                        this._3DScene && this._3DScene.destroy(!0), this.initSet();
                    for (var r = 0, s = 0, l = this.useList.length; s < l; s++) {
                        var h = this.useList.getItem(s);
                        if (!(h < 0)) {
                            r++;
                            var c = this.useList.getCell(s);
                            this.sp3ToTexture(w + de.getPetName(h) + ".lh", c.getChildByName("Icon"), Z.Dialog + r, 80, 60);
                        }
                    }
                    for (var u = 0, d = this.hasList.length; u < d; u++) {
                        var y = this.hasList.getItem(u);
                        if (!(y < 0)) {
                            r++;
                            var m = this.hasList.getCell(u);
                            this.sp3ToTexture(w + de.getPetName(y) + ".lh", m.getChildByName("Icon"), Z.Dialog + r, 80, 60);
                        }
                    }
                }
            }, {
                key: "updateUseItem",
                value: function (t, a) {
                    var i = this, n = t.dataSource, o = t.getChildByName("Bg"), r = t.getChildByName("Icon"), s = t.getChildByName("Lock"), l = t.getChildByName("Ad"), h = t.getChildByName("TxtWenhao"), c = t.getChildByName("TxtLock"), u = t.getChildByName("TxtCoin"), d = t.getChildByName("Coin");
                    t.offAll(Laya.Event.CLICK), -2 === n ? (o.gray = !0, h.visible = u.visible = d.visible = !1,
                        l.visible = c.visible = !0, t.on(Laya.Event.CLICK, this, function () {
                            J.I.unlock(function (e) {
                                e && (Fw.state.usePet[a] = -1, i.refresh());
                            }, e.ad);
                        })) : -1 === n ? (o.gray = !1, h.visible = !0, l.visible = c.visible = s.visible = r.visible = u.visible = d.visible = !1) : (o.gray = !1,
                            h.visible = l.visible = c.visible = s.visible = !1, r.visible = u.visible = d.visible = !0,
                            u.text = Math.round(100 * de.getPetMult(n)) / 100 + "x", t.on(Laya.Event.CLICK, this, function () {
                                Fw.state.usePet[a] = -1, i.refresh();
                            }));
                }
            }, {
                key: "updateHasItem",
                value: function (e, t) {
                    var a = this, i = e.dataSource, n = e.getChildByName("Bg"), o = e.getChildByName("Icon"), r = e.getChildByName("Lock"), s = e.getChildByName("TxtLock"), l = e.getChildByName("TxtCoin"), h = e.getChildByName("Coin");
                    e.offAll(Laya.Event.CLICK), i < 0 ? (n.gray = !0, s.visible = r.visible = !0, o.visible = l.visible = h.visible = !1) : (n.gray = -1 !== Fw.state.usePet.indexOf(i),
                        s.visible = r.visible = !1, o.visible = l.visible = h.visible = !0, l.text = Math.round(100 * de.getPetMult(i)) / 100 + "x",
                        n.gray || e.on(Laya.Event.CLICK, this, function () {
                            for (var e = 3, t = 0; t < 3; t++) if (-1 === Fw.state.usePet[t]) {
                                e = t;
                                break;
                            }
                            e < 3 && (Fw.state.usePet[e] = i, a.refresh());
                        }));
                }
            }, {
                key: "initSet",
                value: function () {
                    this._3DScene = new Laya.Scene3D(), Laya.stage.addChild(this._3DScene), this._3DScene.addChild(new Laya.DirectionLight());
                }
            }, {
                key: "sp3ToTexture",
                value: function (e, t, a) {
                    var i = this, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                    Fw.D3.loadSprite3D(e, Laya.Handler.create(this, function (e) {
                        i._3DScene.addChild(e);
                        var r = new Laya.Camera(0, .1, 1e3);
                        i._3DScene.addChild(r), r.transform.rotate(new Laya.Vector3(0, 0, 0), !1, !1), r.enableHDR = !1,
                            r.transform.position = new Laya.Vector3(500, 0, 0), r.orthographic = !0, r.orthographicVerticalSize = 2,
                            r.clearColor = new Laya.Vector4(0, 0, 0, 0), e.transform.position = new Laya.Vector3(500, 0, -500),
                            e.transform.localScale = new Laya.Vector3(n, n, n), e.transform.localRotationEulerY = o,
                            r.removeAllLayers(), r.addLayer(a), setLayer(e, a), r.renderTarget = new Laya.RenderTexture(512, 512, Laya.RenderTextureFormat.R8G8B8A8, Laya.RenderTextureDepthFormat.DEPTHSTENCIL_24_8),
                            t.texture = new Laya.Texture(r.renderTarget);
                    }));
                }
            }]), o;
        }(ne), pe = function (t) {
            h(o, t);
            var a = c(o);
            function o() {
                return u(this, o), a.call(this);
            }
            return d(o, [{
                key: "onEnable",
                value: function () {
                    i(n(o.prototype), "onEnable", this).call(this), this.refreshUI();
                }
            }, {
                key: "refreshUI",
                value: function () {
                    var e, t = r(J.I.offlineEarn);
                    try {
                        for (t.s(); !(e = t.n()).done;) {
                            var a = e.value;
                            a.type === y.coin ? this.txtCoin.text = z(a.val) : a.type === y.diamond && (this.txtDiamond.text = z(a.val));
                        }
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        t.e(e);
                    } finally {
                        t.f();
                    }
                }
            }, {
                key: "onClick",
                value: function (t) {
                    var a = this;
                    switch (t.target.name) {
                        case "BtnGet":
                            J.I.unlock(function (e) {
                                var t, i = r(J.I.offlineEarn);
                                try {
                                    for (i.s(); !(t = i.n()).done;) {
                                        var n = t.value;
                                        J.I.receive(n);
                                    }
                                } catch (e) {
                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    i.e(e);
                                } finally {
                                    i.f();
                                }
                                a.owner.close();
                            }, e.ad);
                    }
                }
            }]), o;
        }(ne),
            Ve = function (t) {
                h(o, t);
                var a = c(o);
                function o() {
                    var e;
                    return u(this, o), (e = a.call(this)).isShowInterstitialOnClose = !0, e.orthographicPos = new Laya.Vector3(0, 0, 0),
                        e;
                }
                return d(o, [{
                    key: "onEnable",
                    value: function () {
                        //购买宠物
                        var e = this;
                        i(n(o.prototype), "onEnable", this).call(this), o.OpenTime = Laya.timer.currTimer,
                            this.txtDiamond.text = z(de.getUnlockPrice(Fw.state.island)), this.list.renderHandler = new Laya.Handler(this, this.updateItem),
                            this.list.array = de.getPetList(Fw.state.island), o.idList.length = 0;
                        for (var t = 0; t < this.list.length; t++)
                            o.idList.push(this.list.getItem(t).index);
                        for (var a = [{
                            lh: w + he.getStyle(Fw.state.island).lh.egg,
                            sp: this.egg,
                            index: Z.Dialog,
                            scale: 1,
                            angle: 0
                        }], s = 0; s < this.list.length; s++) {
                            var l = this.list.getCell(s), h = this.list.getItem(s);
                            a.push({
                                lh: w + de.getPetName(h.index) + ".lh",
                                sp: l.getChildByName("Icon"),
                                index: Z.Dialog + s + 1,
                                scale: 75,
                                angle: 60
                            });
                        }
                        this.initSet(), Laya.timer.frameOnce(2, this, function () {
                            var t, i = r(a);
                            try {
                                for (i.s(); !(t = i.n()).done;) {
                                    var n = t.value;
                                    e.sp3ToTexture(n.lh, n.sp, n.index, n.scale, n.angle);
                                }
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                i.e(e);
                            } finally {
                                i.f();
                            }
                        });

                        var ee = j(o.idList, Fw.state.hasPet.slice());
                        if (ee.length <= 0) {
                            this.owner.BtnGet.visible = !1
                            this.owner.BtnGetAd.visible = !1
                        } else {
                            this.owner.BtnGet.visible = !0
                            this.owner.BtnGetAd.visible = !0
                        }
                        console.log("oooooo:",)
                    }
                }, {
                    key: "onDisable",
                    value: function () {
                        i(n(o.prototype), "onDisable", this).call(this), o.OpenTime = Laya.timer.currTimer,
                            this._3DScene.destroy(!0);
                    }
                }, {
                    key: "onClick",
                    value: function (t) {
                        var a = this;




                        switch (t.target.name) {
                            case "BtnGetAd":
                                this.isShowInterstitialOnClose = !1, J.I.unlock(function (e) {
                                    e && (o.receive(), a.owner.close());
                                }, e.ad);
                                break;

                            case "BtnGet":
                                this.isShowInterstitialOnClose = !1, J.I.unlock(function (e) {
                                    e && (o.receive(), a.owner.close());
                                }, e.diamond, de.getUnlockPrice(Fw.state.island));
                        }


                    }
                }, {
                    key: "updateItem",
                    value: function (e, t) {
                        var a = e.dataSource;
                        e.getChildByName("Bg").skin = this["bg".concat(a.bg)], e.getChildByName("TxtCoin").text = Math.round(100 * a.mult) / 100 + "x",
                            e.getChildByName("TxtRate").text = X(a.rate);
                    }
                }, {
                    key: "initSet",
                    value: function () {
                        this._3DScene = new Laya.Scene3D(), Laya.stage.addChild(this._3DScene), this._3DScene.addChild(new Laya.DirectionLight());
                    }
                }, {
                    key: "sp3ToTexture",
                    value: function (e, t, a) {
                        var i = this, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                        Laya.Sprite3D.load(e, Laya.Handler.create(this, function (e) {
                            i._3DScene.addChild(e);
                            var r = new Laya.Camera(0, .1, 1e3);
                            i._3DScene.addChild(r), r.transform.rotate(new Laya.Vector3(0, 0, 0), !1, !1), r.enableHDR = !1,
                                r.transform.position = new Laya.Vector3(500, 0, 0), r.orthographic = !0, r.orthographicVerticalSize = 2,
                                r.clearColor = new Laya.Vector4(0, 0, 0, 0), e.transform.position = new Laya.Vector3(500, 0, -500),
                                e.transform.localScale = new Laya.Vector3(n, n, n), e.transform.localRotationEulerY = o,
                                r.removeAllLayers(), r.addLayer(a), setLayer(e, a), r.renderTarget = new Laya.RenderTexture(512, 512, Laya.RenderTextureFormat.R8G8B8A8, Laya.RenderTextureDepthFormat.DEPTHSTENCIL_24_8),
                                t.texture = new Laya.Texture(r.renderTarget);
                        }));
                    }
                }], [{
                    key: "receive",
                    value: function () {
                        o.receiveId = -1;
                        var e = j(o.idList, Fw.state.hasPet.slice());

                        // if(e.length<=1){
                        //     this.owner.BtnGet.visible = !1
                        //     this.BtnGetAd.visible = !1
                        // }else{
                        //     this.BtnGet.visible = !0
                        //     this.BtnGetAd.visible = !0
                        // }

                        e.length && (o.receiveId = Y(e), Fw.state.hasPet.push(o.receiveId), Fw.Dialog.open(Q.EggDialog));
                    }
                }]), o;
            }(ne);
        Ve.OpenTime = 0, Ve.idList = [], Ve.receiveId = -1;
        var ke = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                var e;
                return u(this, a), (e = t.call(this)).isBtnCloseDelay = !1, e;
            }
            return d(a, [{
                key: "onEnable",
                value: function () {
                    i(n(a.prototype), "onEnable", this).call(this), this.txtVersion.text = "版本号：".concat(G.UMConfig.gameVersion),
                        this.refreshUI();
                }
            }, {
                key: "refreshUI",
                value: function () {
                    this.btnSound.selected = !Fw.Sound.muted, this.btnVibrate.selected = Fw.Platform.vibrateEnableStatus;
                }
            }, {
                key: "onClick",
                value: function (e) {
                    switch (e.target.name) {
                        case "BtnSound":
                            Fw.Sound.muted = !Fw.Sound.muted, this.refreshUI();
                            break;

                        case "BtnVibrate":
                            Fw.Platform.vibrateEnableStatus = !Fw.Platform.vibrateEnableStatus, this.refreshUI();
                    }
                }
            }]), a;
        }(ne), Ce = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                return u(this, a), t.call(this);
            }
            return d(a, [{
                key: "onEnable",
                value: function () {
                    i(n(a.prototype), "onEnable", this).call(this);
                }
            }]), a;
        }(ne), Se = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                return u(this, a), t.call(this);
            }
            return d(a, [{
                key: "onEnable",
                value: function () {
                    i(n(a.prototype), "onEnable", this).call(this);
                }
            }]), a;
        }(ne), _e = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                return u(this, a), t.call(this);
            }
            return d(a, [{
                key: "onEnable",
                value: function () {
                    i(n(a.prototype), "onEnable", this).call(this);
                }
            }]), a;
        }(ne), be = function (t) {
            h(o, t);
            var a = c(o);
            function o() {
                var e;
                return u(this, o), (e = a.call(this)).isShowInterstitialOnClose = !0, e.orthographicPos = new Laya.Vector3(0, 0, 0),
                    e;
            }
            return d(o, [{
                key: "onEnable",
                value: function () {
                    var e = this;
                    i(n(o.prototype), "onEnable", this).call(this), Fw.Sound.playSound(C.unlock_pet),
                        this.txtDiamond.text = z(de.getUnlockPrice(Fw.state.island)), this.use();
                    var t = [{
                        lh: w + de.getPetName(Ve.receiveId) + ".lh",
                        sp: this.petSp,
                        index: Z.Dialog,
                        scale: 80,
                        angle: 60
                    }];
                    this.initSet(), Laya.timer.frameOnce(2, this, function () {
                        var a, i = r(t);
                        try {
                            for (i.s(); !(a = i.n()).done;) {
                                var n = a.value;
                                e.sp3ToTexture(n.lh, n.sp, n.index, n.scale, n.angle);
                            }
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            i.e(e);
                        } finally {
                            i.f();
                        }
                    }), this.txtCoin.text = Math.round(100 * de.getPetMult(Ve.receiveId)) / 100 + "x";
                    var a = j(Ve.idList, Fw.state.hasPet.slice());
                    //here
                    // console.log("aaaa", a.length)
                    // window.aaaa = a.length
                    this.boxAgain.visible = !!a.length;
                }
            }, {
                key: "use",
                value: function () {
                    for (var e = 0, t = Fw.state.usePet.length; e < t; e++) if (Fw.state.usePet[e] === Ve.receiveId) return;
                    for (var a = 0, i = Fw.state.usePet.length; a < i; a++) if (-1 === Fw.state.usePet[a]) return void (Fw.state.usePet[a] = Ve.receiveId);
                    for (var n = Fw.state.usePet.length - 1; n >= 0; --n) if (Fw.state.usePet[n] > -2) return void (Fw.state.usePet[n] = Ve.receiveId);
                }
            }, {
                key: "onDisable",
                value: function () {
                    console.log("RefreshPet2")
                    i(n(o.prototype), "onDisable", this).call(this), this._3DScene.destroy(!0), Fw.emit(K.RefreshPet);
                }
            }, {
                key: "onClick",
                value: function (t) {
                    var a = this;
                    switch (t.target.name) {
                        case "BtnGetAd":
                            J.I.unlock(function (e) {
                                e && (Ve.receive(), a.owner.close());
                            }, e.ad);
                            break;

                        case "BtnGet":
                            J.I.unlock(function (e) {
                                e && (Ve.receive(), a.owner.close());
                            }, e.diamond, de.getUnlockPrice(Fw.state.island));
                    }
                }
            }, {
                key: "initSet",
                value: function () {
                    this._3DScene = new Laya.Scene3D(), Laya.stage.addChild(this._3DScene), this._3DScene.addChild(new Laya.DirectionLight());
                }
            }, {
                key: "sp3ToTexture",
                value: function (e, t, a) {
                    var i = this, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                    Laya.Sprite3D.load(e, Laya.Handler.create(this, function (e) {
                        i._3DScene.addChild(e);
                        var r = new Laya.Camera(0, .1, 1e3);
                        i._3DScene.addChild(r), r.transform.rotate(new Laya.Vector3(0, 0, 0), !1, !1), r.enableHDR = !1,
                            r.transform.position = new Laya.Vector3(500, 0, 0), r.orthographic = !0, r.orthographicVerticalSize = 2,
                            r.clearColor = new Laya.Vector4(0, 0, 0, 0), e.transform.position = new Laya.Vector3(500, 0, -500),
                            e.transform.localScale = new Laya.Vector3(n, n, n), e.transform.localRotationEulerY = o,
                            r.removeAllLayers(), r.addLayer(a), setLayer(e, a), r.renderTarget = new Laya.RenderTexture(1024, 1024, Laya.RenderTextureFormat.R8G8B8A8, Laya.RenderTextureDepthFormat.DEPTHSTENCIL_24_8),
                            t.texture = new Laya.Texture(r.renderTarget);
                    }));
                }
            }]), o;
        }(ne), Ie = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                return u(this, a), t.call(this);
            }
            return d(a, [{
                key: "onEnable",
                value: function () {
                    i(n(a.prototype), "onEnable", this).call(this);
                }
            }]), a;
        }(ne),


            Be = function (e) {
                h(a, e);
                var t = c(a);
                function a() {
                    return u(this, a), t.call(this);
                }
                return d(a, [{
                    key: "onEnable",
                    value: function () {
                        i(n(a.prototype), "onEnable", this).call(this),
                            Fw.Sound.playSound(C.upgrade),

                            this.txtLv.text = "Level ".concat(Fw.state.playerLv),
                            this.txtPower0.text = ye.getPower(Fw.state.playerLv - 1),
                            this.txtPower1.text = ye.getPower(Fw.state.playerLv);

                        // if (ye.getPower(Fw.state.playerLv - 1) == ye.getPower(Fw.state.playerLv)) {
                        //     this.txtPower0.text = ""
                        //     this.txtPower1.text = "Max"
                        // }
                    },
                    key: "onDisable",
                    value: function () {

                        i(n(a.prototype), "onDisable", this).call(this),

                            YYGGames.showInterstitial(() => {

                                console.log("关闭1111")
                            })
                    }
                }]), a;
            }(ne),



            Pe = function (t) {
                h(o, t);
                var a = c(o);
                function o() {
                    var e;
                    return u(this, o), (e = a.call(this)).isShowInterstitialOnClose = !0, e.adIndex = 0,
                        e;
                }
                return d(o, [{
                    key: "onEnable",
                    value: function () {
                        i(n(o.prototype), "onEnable", this).call(this), o.OpenTime = Laya.timer.currTimer,
                            this.list.vScrollBarSkin = "", this.list.selectEnable = !0, this.list.renderHandler = new Laya.Handler(this, this.updateItem),
                            console.log("island:".concat(Fw.state.island), le.I.getIsland(Fw.state.island)),
                            this.list.array = le.I.getIsland(Fw.state.island).workerList, this.adIndex = q(0, this.list.length);
                    }
                }, {
                    key: "onDisable",
                    value: function () {
                        i(n(o.prototype), "onDisable", this).call(this), o.OpenTime = Laya.timer.currTimer;
                    }
                }, {
                    key: "updateItem",
                    value: function (t, a) {
                        var i, n, o = this, r = t.dataSource, s = t.getChildByName("Bg0"), l = t.getChildByName("Bg1");
                        if (r.lv > 0) {
                            s.visible = !1, l.visible = !0;
                            var h = l.getChildByName("TxtSpeed"), c = l.getChildByName("TxtPower");
                            h.text = X(r.speedMult), c.text = r.power + "";
                            var u = l.getChildByName("TxtCompleteBuild"), d = l.getChildByName("BtnCheck");
                            if (le.I.getIsland(Fw.state.island).buildProgress >= 1) u.visible = !0, d.visible = !1; else {
                                u.visible = !1, d.visible = !0;
                                var y = d.getChildByName("Check");
                                y.visible = r.isBuild, d.offAllCaller(this), d.on(Laya.Event.CLICK, this, function () {
                                    r.isBuild = !r.isBuild, y.visible = r.isBuild;
                                });
                            }
                            i = l.getChildByName("BtnCoin"), n = l.getChildByName("BtnAd");
                        } else {
                            s.visible = !0, l.visible = !1;
                            var m = s.getChildByName("TxtName"), f = s.getChildByName("TxtDesc");
                            m.text = r.info.name, f.text = r.info.desc, i = s.getChildByName("BtnCoin"), n = s.getChildByName("BtnAd");
                        }
                        if (n.offAllCaller(this), i.offAllCaller(this), r.index === this.adIndex) n.visible = !0,
                            i.visible = !1, n.on(Laya.Event.CLICK, this, function () {
                                J.I.unlock(function (e) {
                                    e && (r.lv++, o.refreshUI(), Fw.Sound.playSound(C.upgrade));
                                }, e.ad);
                            }); else {
                            n.visible = !1, i.visible = !0;
                            var w = i.getChildByName("TxtLevel");
                            w && (w.text = "Level ".concat(r.lv) + " "), i.getChildByName("TxtCoin").text = z(r.price),
                                i.on(Laya.Event.CLICK, this, function () {
                                    J.I.unlock(function (e) {
                                        if (!e) return Fw.msg("Thiếu xu!");
                                        r.lv++, o.refreshUI(), Fw.Sound.playSound(C.upgrade);
                                    }, e.coin, r.price);
                                });
                        }
                    }
                }, {
                    key: "refreshUI",
                    value: function () {
                        this.adIndex = q(0, this.list.length), this.list.refresh();
                    }
                }]), o;
            }(ne);
        Pe.OpenTime = 0, function (e) {
            e.Idle = "Idle", e.Run = "Run", e.Up = "Up", e.Down = "Down", e.Ride = "Ride", e.Chan = "Chan";
        }($ || ($ = {})), function (e) {
            e[e.WorkerHouse2Hole = 0] = "WorkerHouse2Hole", e[e.Recover2Hole = 1] = "Recover2Hole",
                e[e.BuildRecover2Hole = 2] = "BuildRecover2Hole", e[e.Hole2Recover = 3] = "Hole2Recover",
                e[e.Hole2BuildRecover = 4] = "Hole2BuildRecover";
        }(ee || (ee = {})), function (e) {
            e.Move = "Move", e.Stair = "Stair", e.Elevator = "Elevator", e.Portal = "Portal",
                e.Mining = "Mining";
        }(te || (te = {}));
        var Me = function () {
            function e(t) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                u(this, e), this.id = ++e.maxId, this.complete = 0, this.total = 0, this.v3_0 = new Laya.Vector3(),
                    this.type = t, this.path = a;
            }
            return d(e, [{
                key: "start",
                get: function () {
                    return this.path[0] instanceof Laya.Sprite3D ? this.path[0].transform.position : this.path[0];
                }
            }, {
                key: "end",
                get: function () {
                    return this.path[1] instanceof Laya.Sprite3D ? this.path[1].transform.position : this.path[1];
                }
            }, {
                key: "progress",
                get: function () {
                    return Math.min(this.complete / this.total, 1);
                }
            }, {
                key: "position",
                get: function () {
                    return Laya.Vector3.lerp(this.start, this.end, this.progress, this.v3_0), this.v3_0;
                }
            }]), e;
        }();
        Me.maxId = 0, function (e) {
            e[e.Wall = Math.pow(2, 1)] = "Wall", e[e.Land = Math.pow(2, 2)] = "Land", e[e.Unlock = Math.pow(2, 3)] = "Unlock",
                e[e.Player = Math.pow(2, 4)] = "Player", e[e.Worker = Math.pow(2, 5)] = "Worker",
                e[e.Block = Math.pow(2, 6)] = "Block", e[e.FirstBlock = Math.pow(2, 7)] = "FirstBlock",
                e[e.Tool = Math.pow(2, 8)] = "Tool", e[e.Stair = Math.pow(2, 9)] = "Stair", e[e.Elevator = Math.pow(2, 10)] = "Elevator",
                e[e.PortalUp = Math.pow(2, 11)] = "PortalUp", e[e.PortalDown = Math.pow(2, 12)] = "PortalDown",
                e[e.Ore = Math.pow(2, 13)] = "Ore", e[e.Diamond = Math.pow(2, 14)] = "Diamond",
                e[e.WorkerHouse = Math.pow(2, 15)] = "WorkerHouse", e[e.PetHouse = Math.pow(2, 17)] = "PetHouse",
                e[e.Recover = Math.pow(2, 18)] = "Recover", e[e.RecoverBuild = Math.pow(2, 19)] = "RecoverBuild",
                e[e.Motorcycle = Math.pow(2, 20)] = "Motorcycle", e[e.Magnet = Math.pow(2, 21)] = "Magnet",
                e[e.ElevatorUp = Math.pow(2, 22)] = "ElevatorUp", e[e.ElevatorDown = Math.pow(2, 23)] = "ElevatorDown";
        }(ae || (ae = {}));
        var De, xe = [[new Laya.Vector3(.3595, .103, .9098), new Laya.Vector3(.5198, .103, 1.0051), new Laya.Vector3(.5191, .103, .8403), new Laya.Vector3(-.5731, .103, .8886), new Laya.Vector3(-.4129, .103, .9839), new Laya.Vector3(-.4136, .103, .8191), new Laya.Vector3(.3595, .103, -1.1192), new Laya.Vector3(.5198, .103, -1.0239), new Laya.Vector3(.5191, .103, -1.1887), new Laya.Vector3(-.5731, .103, -1.1404), new Laya.Vector3(-.4129, .103, -1.0451), new Laya.Vector3(-.4136, .103, -1.2099), new Laya.Vector3(-.4136, .3529, -1.2099), new Laya.Vector3(-.4129, .3529, -1.0451), new Laya.Vector3(-.5731, .3529, -1.1404), new Laya.Vector3(.5191, .3529, -1.1887), new Laya.Vector3(.5198, .3529, -1.0239), new Laya.Vector3(.3595, .3529, -1.1192), new Laya.Vector3(-.4136, .3529, .8191), new Laya.Vector3(-.4129, .3529, .9839), new Laya.Vector3(-.5731, .3529, .8886), new Laya.Vector3(.5191, .3529, .8403), new Laya.Vector3(.5198, .3529, 1.0051), new Laya.Vector3(.3595, .3529, .9098)], [new Laya.Vector3(-.4136, 1.263, -1.3105), new Laya.Vector3(-.4129, 1.263, -1.1457), new Laya.Vector3(-.5731, 1.263, -1.241), new Laya.Vector3(.5191, 1.263, -1.2893), new Laya.Vector3(.5198, 1.263, -1.1244), new Laya.Vector3(.3595, 1.263, -1.2198), new Laya.Vector3(-.4136, 1.263, .7185), new Laya.Vector3(-.4129, 1.263, .8833), new Laya.Vector3(-.5731, 1.263, .788), new Laya.Vector3(.5191, 1.263, .7397), new Laya.Vector3(.5198, 1.263, .9046), new Laya.Vector3(.3595, 1.263, .8092), new Laya.Vector3(-.4136, 1.513, -1.3105), new Laya.Vector3(-.4129, 1.513, -1.1457), new Laya.Vector3(-.5731, 1.513, -1.241), new Laya.Vector3(.5191, 1.513, -1.2893), new Laya.Vector3(.5198, 1.513, -1.1244), new Laya.Vector3(.3595, 1.513, -1.2198), new Laya.Vector3(-.4136, 1.513, .7185), new Laya.Vector3(-.4129, 1.513, .8833), new Laya.Vector3(-.5731, 1.513, .788), new Laya.Vector3(.5191, 1.513, .7397), new Laya.Vector3(.5198, 1.513, .9046), new Laya.Vector3(.3595, 1.513, .8092)], [new Laya.Vector3(.7177, 1.1513, 1.2977), new Laya.Vector3(.4268, 1.1513, 1.2977), new Laya.Vector3(.136, 1.1513, 1.2977), new Laya.Vector3(-.1549, 1.1513, 1.2977), new Laya.Vector3(-.4457, 1.1513, 1.2977), new Laya.Vector3(-.7365, 1.1513, 1.2977), new Laya.Vector3(-.7365, 1.1513, 1.0013), new Laya.Vector3(-.4457, 1.1513, 1.0013), new Laya.Vector3(-.1549, 1.1513, 1.0013), new Laya.Vector3(.136, 1.1513, 1.0013), new Laya.Vector3(.4268, 1.1513, 1.0013), new Laya.Vector3(.7177, 1.1513, 1.0013), new Laya.Vector3(-.7365, 1.1513, .705), new Laya.Vector3(-.4457, 1.1513, .705), new Laya.Vector3(-.1549, 1.1513, .705), new Laya.Vector3(.136, 1.1513, .705), new Laya.Vector3(.4268, 1.1513, .705), new Laya.Vector3(.7177, 1.1513, .705), new Laya.Vector3(-.7365, 1.1513, .4086), new Laya.Vector3(-.4457, 1.1513, .4086), new Laya.Vector3(-.1549, 1.1513, .4086), new Laya.Vector3(.136, 1.1513, .4086), new Laya.Vector3(.4268, 1.1513, .4086), new Laya.Vector3(.7177, 1.1513, .4086), new Laya.Vector3(-.7365, 1.1513, .1122), new Laya.Vector3(-.4457, 1.1513, .1122), new Laya.Vector3(-.1549, 1.1513, .1122), new Laya.Vector3(.136, 1.1513, .1122), new Laya.Vector3(.4268, 1.1513, .1122), new Laya.Vector3(.7177, 1.1513, .1122), new Laya.Vector3(-.7365, 1.1513, -.1842), new Laya.Vector3(-.4457, 1.1513, -.1842), new Laya.Vector3(-.1549, 1.1513, -.1842), new Laya.Vector3(.136, 1.1513, -.1842), new Laya.Vector3(.4268, 1.1513, -.1842), new Laya.Vector3(.7177, 1.1513, -.1842), new Laya.Vector3(-.7365, 1.1513, -.4806), new Laya.Vector3(-.4457, 1.1513, -.4806), new Laya.Vector3(-.1549, 1.1513, -.4806), new Laya.Vector3(.136, 1.1513, -.4806), new Laya.Vector3(.4268, 1.1513, -.4806), new Laya.Vector3(.7177, 1.1513, -.4806), new Laya.Vector3(-.7365, 1.1513, -.777), new Laya.Vector3(-.4457, 1.1513, -.777), new Laya.Vector3(-.1549, 1.1513, -.777), new Laya.Vector3(.136, 1.1513, -.777), new Laya.Vector3(.4268, 1.1513, -.777), new Laya.Vector3(.7177, 1.1513, -.777), new Laya.Vector3(-.7365, 1.1513, -1.0733), new Laya.Vector3(-.4457, 1.1513, -1.0733), new Laya.Vector3(-.1549, 1.1513, -1.0733), new Laya.Vector3(.136, 1.1513, -1.0733), new Laya.Vector3(.4268, 1.1513, -1.0733), new Laya.Vector3(.7177, 1.1513, -1.0733), new Laya.Vector3(-.7365, 1.1513, -1.3697), new Laya.Vector3(-.4457, 1.1513, -1.3697), new Laya.Vector3(-.1549, 1.1513, -1.3697), new Laya.Vector3(.136, 1.1513, -1.3697), new Laya.Vector3(.4268, 1.1513, -1.3697), new Laya.Vector3(.7177, 1.1513, -1.3697), new Laya.Vector3(-.7365, 1.1513, -1.6661), new Laya.Vector3(-.4457, 1.1513, -1.6661), new Laya.Vector3(-.1549, 1.1513, -1.6661), new Laya.Vector3(.136, 1.1513, -1.6661), new Laya.Vector3(.4268, 1.1513, -1.6661), new Laya.Vector3(.7177, 1.1513, -1.6661)], [new Laya.Vector3(.7177, 1.4609, 1.2977), new Laya.Vector3(.4268, 1.4609, 1.2977), new Laya.Vector3(.136, 1.4609, 1.2977), new Laya.Vector3(-.1549, 1.4609, 1.2977), new Laya.Vector3(-.4457, 1.4609, 1.2977), new Laya.Vector3(-.7365, 1.4609, 1.2977), new Laya.Vector3(-.7365, 1.4609, 1.0013), new Laya.Vector3(-.4457, 1.4609, 1.0013), new Laya.Vector3(-.1549, 1.4609, 1.0013), new Laya.Vector3(.136, 1.4609, 1.0013), new Laya.Vector3(.4268, 1.4609, 1.0013), new Laya.Vector3(.7177, 1.4609, 1.0013), new Laya.Vector3(-1.0257, 1.4609, .705), new Laya.Vector3(-.7365, 1.4609, .705), new Laya.Vector3(-.4457, 1.4609, .705), new Laya.Vector3(-.1549, 1.4609, .705), new Laya.Vector3(.136, 1.4609, .705), new Laya.Vector3(.4268, 1.4609, .705), new Laya.Vector3(.7177, 1.4609, .705), new Laya.Vector3(1.0019, 1.4609, .705), new Laya.Vector3(-1.0257, 1.4609, .4086), new Laya.Vector3(-.7365, 1.4609, .4086), new Laya.Vector3(-.4457, 1.4609, .4086), new Laya.Vector3(-.1549, 1.4609, .4086), new Laya.Vector3(.136, 1.4609, .4086), new Laya.Vector3(.4268, 1.4609, .4086), new Laya.Vector3(.7177, 1.4609, .4086), new Laya.Vector3(1.0019, 1.4609, .4086), new Laya.Vector3(-1.0257, 1.4609, .1122), new Laya.Vector3(-.7365, 1.4609, .1122), new Laya.Vector3(-.4457, 1.4609, .1122), new Laya.Vector3(-.1549, 1.4609, .1122), new Laya.Vector3(.136, 1.4609, .1122), new Laya.Vector3(.4268, 1.4609, .1122), new Laya.Vector3(.7177, 1.4609, .1122), new Laya.Vector3(1.0019, 1.4609, .1122), new Laya.Vector3(-1.0257, 1.4609, -.1842), new Laya.Vector3(-.7365, 1.4609, -.1842), new Laya.Vector3(-.4457, 1.4609, -.1842), new Laya.Vector3(-.1549, 1.4609, -.1842), new Laya.Vector3(.136, 1.4609, -.1842), new Laya.Vector3(.4268, 1.4609, -.1842), new Laya.Vector3(.7177, 1.4609, -.1842), new Laya.Vector3(1.0019, 1.4609, -.1842), new Laya.Vector3(-1.0257, 1.4609, -.4806), new Laya.Vector3(-.7365, 1.4609, -.4806), new Laya.Vector3(-.4457, 1.4609, -.4806), new Laya.Vector3(-.1549, 1.4609, -.4806), new Laya.Vector3(.136, 1.4609, -.4806), new Laya.Vector3(.4268, 1.4609, -.4806), new Laya.Vector3(.7177, 1.4609, -.4806), new Laya.Vector3(1.0019, 1.4609, -.4806), new Laya.Vector3(-1.0257, 1.4609, -.777), new Laya.Vector3(-.7365, 1.4609, -.777), new Laya.Vector3(-.4457, 1.4609, -.777), new Laya.Vector3(-.1549, 1.4609, -.777), new Laya.Vector3(.136, 1.4609, -.777), new Laya.Vector3(.4268, 1.4609, -.777), new Laya.Vector3(.7177, 1.4609, -.777), new Laya.Vector3(1.0019, 1.4609, -.777), new Laya.Vector3(-1.0257, 1.4609, -1.0733), new Laya.Vector3(-.7365, 1.4609, -1.0733), new Laya.Vector3(-.4457, 1.4609, -1.0733), new Laya.Vector3(-.1549, 1.4609, -1.0733), new Laya.Vector3(.136, 1.4609, -1.0733), new Laya.Vector3(.4268, 1.4609, -1.0733), new Laya.Vector3(.7177, 1.4609, -1.0733), new Laya.Vector3(1.0019, 1.4609, -1.0733), new Laya.Vector3(-1.0257, 1.4609, -1.3697), new Laya.Vector3(-.7365, 1.4609, -1.3697), new Laya.Vector3(-.4457, 1.4609, -1.3697), new Laya.Vector3(-.1549, 1.4609, -1.3697), new Laya.Vector3(.136, 1.4609, -1.3697), new Laya.Vector3(.4268, 1.4609, -1.3697), new Laya.Vector3(.7177, 1.4609, -1.3697), new Laya.Vector3(1.0019, 1.4609, -1.3697), new Laya.Vector3(-1.0257, 1.4609, -1.6661), new Laya.Vector3(-.7365, 1.4609, -1.6661), new Laya.Vector3(-.4457, 1.4609, -1.6661), new Laya.Vector3(-.1549, 1.4609, -1.6661), new Laya.Vector3(.136, 1.4609, -1.6661), new Laya.Vector3(.4268, 1.4609, -1.6661), new Laya.Vector3(.7177, 1.4609, -1.6661), new Laya.Vector3(1.0019, 1.4609, -1.6661), new Laya.Vector3(.7177, 1.7706, 1.2977), new Laya.Vector3(.4268, 1.7706, 1.2977), new Laya.Vector3(.136, 1.7706, 1.2977), new Laya.Vector3(-.1549, 1.7706, 1.2977), new Laya.Vector3(-.4457, 1.7706, 1.2977), new Laya.Vector3(-.7365, 1.7706, 1.2977), new Laya.Vector3(-1.0257, 1.7706, 1.0013), new Laya.Vector3(-.7365, 1.7706, 1.0013), new Laya.Vector3(-.4457, 1.7706, 1.0013), new Laya.Vector3(-.1549, 1.7706, 1.0013), new Laya.Vector3(.136, 1.7706, 1.0013), new Laya.Vector3(.4268, 1.7706, 1.0013), new Laya.Vector3(.7177, 1.7706, 1.0013), new Laya.Vector3(1.0019, 1.7706, 1.0013), new Laya.Vector3(-1.0257, 1.7706, .705), new Laya.Vector3(-.7365, 1.7706, .705), new Laya.Vector3(-.4457, 1.7706, .705), new Laya.Vector3(-.1549, 1.7706, .705), new Laya.Vector3(.136, 1.7706, .705), new Laya.Vector3(.4268, 1.7706, .705), new Laya.Vector3(.7177, 1.7706, .705), new Laya.Vector3(1.0019, 1.7706, .705), new Laya.Vector3(-1.0257, 1.7706, .4086), new Laya.Vector3(-.7365, 1.7706, .4086), new Laya.Vector3(-.4457, 1.7706, .4086), new Laya.Vector3(-.1549, 1.7706, .4086), new Laya.Vector3(.136, 1.7706, .4086), new Laya.Vector3(.4268, 1.7706, .4086), new Laya.Vector3(.7177, 1.7706, .4086), new Laya.Vector3(1.0019, 1.7706, .4086), new Laya.Vector3(-1.0257, 1.7706, .1122), new Laya.Vector3(-.7365, 1.7706, .1122), new Laya.Vector3(-.4457, 1.7706, .1122), new Laya.Vector3(-.1549, 1.7706, .1122), new Laya.Vector3(.136, 1.7706, .1122), new Laya.Vector3(.4268, 1.7706, .1122), new Laya.Vector3(.7177, 1.7706, .1122), new Laya.Vector3(1.0019, 1.7706, .1122), new Laya.Vector3(-1.0257, 1.7706, -.1842), new Laya.Vector3(-.7365, 1.7706, -.1842), new Laya.Vector3(-.4457, 1.7706, -.1842), new Laya.Vector3(-.1549, 1.7706, -.1842), new Laya.Vector3(.136, 1.7706, -.1842), new Laya.Vector3(.4268, 1.7706, -.1842), new Laya.Vector3(.7177, 1.7706, -.1842), new Laya.Vector3(1.0019, 1.7706, -.1842), new Laya.Vector3(-1.0257, 1.7706, -.4806), new Laya.Vector3(-.7365, 1.7706, -.4806), new Laya.Vector3(-.4457, 1.7706, -.4806), new Laya.Vector3(-.1549, 1.7706, -.4806), new Laya.Vector3(.136, 1.7706, -.4806), new Laya.Vector3(.4268, 1.7706, -.4806), new Laya.Vector3(.7177, 1.7706, -.4806), new Laya.Vector3(1.0019, 1.7706, -.4806), new Laya.Vector3(-1.0257, 1.7706, -.777), new Laya.Vector3(-.7365, 1.7706, -.777), new Laya.Vector3(-.4457, 1.7706, -.777), new Laya.Vector3(-.1549, 1.7706, -.777), new Laya.Vector3(.136, 1.7706, -.777), new Laya.Vector3(.4268, 1.7706, -.777), new Laya.Vector3(.7177, 1.7706, -.777), new Laya.Vector3(1.0019, 1.7706, -.777), new Laya.Vector3(-1.0257, 1.7706, -1.0733), new Laya.Vector3(-.7365, 1.7706, -1.0733), new Laya.Vector3(-.4457, 1.7706, -1.0733), new Laya.Vector3(-.1549, 1.7706, -1.0733), new Laya.Vector3(.136, 1.7706, -1.0733), new Laya.Vector3(.4268, 1.7706, -1.0733), new Laya.Vector3(.7177, 1.7706, -1.0733), new Laya.Vector3(1.0019, 1.7706, -1.0733), new Laya.Vector3(-1.0257, 1.7706, -1.3697), new Laya.Vector3(-.7365, 1.7706, -1.3697), new Laya.Vector3(-.4457, 1.7706, -1.3697), new Laya.Vector3(-.1549, 1.7706, -1.3697), new Laya.Vector3(.136, 1.7706, -1.3697), new Laya.Vector3(.4268, 1.7706, -1.3697), new Laya.Vector3(.7177, 1.7706, -1.3697), new Laya.Vector3(1.0019, 1.7706, -1.3697), new Laya.Vector3(-1.0257, 1.7706, -1.6661), new Laya.Vector3(-.7365, 1.7706, -1.6661), new Laya.Vector3(-.4457, 1.7706, -1.6661), new Laya.Vector3(-.1549, 1.7706, -1.6661), new Laya.Vector3(.136, 1.7706, -1.6661), new Laya.Vector3(.4268, 1.7706, -1.6661), new Laya.Vector3(.7177, 1.7706, -1.6661), new Laya.Vector3(1.0019, 1.7706, -1.6661), new Laya.Vector3(.7177, 2.0803, 1.2977), new Laya.Vector3(.4268, 2.0803, 1.2977), new Laya.Vector3(.136, 2.0803, 1.2977), new Laya.Vector3(-.1549, 2.0803, 1.2977), new Laya.Vector3(-.4457, 2.0803, 1.2977), new Laya.Vector3(-.7365, 2.0803, 1.2977), new Laya.Vector3(-.7365, 2.0803, 1.0013), new Laya.Vector3(-.4457, 2.0803, 1.0013), new Laya.Vector3(-.1549, 2.0803, 1.0013), new Laya.Vector3(.136, 2.0803, 1.0013), new Laya.Vector3(.4268, 2.0803, 1.0013), new Laya.Vector3(.7177, 2.0803, 1.0013), new Laya.Vector3(-1.0257, 2.0803, .705), new Laya.Vector3(-.7365, 2.0803, .705), new Laya.Vector3(-.4457, 2.0803, .705), new Laya.Vector3(-.1549, 2.0803, .705), new Laya.Vector3(.136, 2.0803, .705), new Laya.Vector3(.4268, 2.0803, .705), new Laya.Vector3(.7177, 2.0803, .705), new Laya.Vector3(1.0019, 2.0803, .705), new Laya.Vector3(-1.0257, 2.0803, .4086), new Laya.Vector3(-.7365, 2.0803, .4086), new Laya.Vector3(-.4457, 2.0803, .4086), new Laya.Vector3(-.1549, 2.0803, .4086), new Laya.Vector3(.136, 2.0803, .4086), new Laya.Vector3(.4268, 2.0803, .4086), new Laya.Vector3(.7177, 2.0803, .4086), new Laya.Vector3(1.0019, 2.0803, .4086), new Laya.Vector3(-1.0257, 2.0803, .1122), new Laya.Vector3(-.7365, 2.0803, .1122), new Laya.Vector3(-.4457, 2.0803, .1122), new Laya.Vector3(-.1549, 2.0803, .1122), new Laya.Vector3(.136, 2.0803, .1122), new Laya.Vector3(.4268, 2.0803, .1122), new Laya.Vector3(.7177, 2.0803, .1122), new Laya.Vector3(1.0019, 2.0803, .1122), new Laya.Vector3(-1.0257, 2.0803, -.1842), new Laya.Vector3(-.7365, 2.0803, -.1842), new Laya.Vector3(-.4457, 2.0803, -.1842), new Laya.Vector3(-.1549, 2.0803, -.1842), new Laya.Vector3(.136, 2.0803, -.1842), new Laya.Vector3(.4268, 2.0803, -.1842), new Laya.Vector3(.7177, 2.0803, -.1842), new Laya.Vector3(1.0019, 2.0803, -.1842), new Laya.Vector3(-1.0257, 2.0803, -.4806), new Laya.Vector3(-.7365, 2.0803, -.4806), new Laya.Vector3(-.4457, 2.0803, -.4806), new Laya.Vector3(-.1549, 2.0803, -.4806), new Laya.Vector3(.136, 2.0803, -.4806), new Laya.Vector3(.4268, 2.0803, -.4806), new Laya.Vector3(.7177, 2.0803, -.4806), new Laya.Vector3(1.0019, 2.0803, -.4806), new Laya.Vector3(-1.0257, 2.0803, -.777), new Laya.Vector3(-.7365, 2.0803, -.777), new Laya.Vector3(-.4457, 2.0803, -.777), new Laya.Vector3(-.1549, 2.0803, -.777), new Laya.Vector3(.136, 2.0803, -.777), new Laya.Vector3(.4268, 2.0803, -.777), new Laya.Vector3(.7177, 2.0803, -.777), new Laya.Vector3(1.0019, 2.0803, -.777), new Laya.Vector3(-1.0257, 2.0803, -1.0733), new Laya.Vector3(-.7365, 2.0803, -1.0733), new Laya.Vector3(-.4457, 2.0803, -1.0733), new Laya.Vector3(-.1549, 2.0803, -1.0733), new Laya.Vector3(.136, 2.0803, -1.0733), new Laya.Vector3(.4268, 2.0803, -1.0733), new Laya.Vector3(.7177, 2.0803, -1.0733), new Laya.Vector3(1.0019, 2.0803, -1.0733), new Laya.Vector3(-1.0257, 2.0803, -1.3697), new Laya.Vector3(-.7365, 2.0803, -1.3697), new Laya.Vector3(-.4457, 2.0803, -1.3697), new Laya.Vector3(-.1549, 2.0803, -1.3697), new Laya.Vector3(.136, 2.0803, -1.3697), new Laya.Vector3(.4268, 2.0803, -1.3697), new Laya.Vector3(.7177, 2.0803, -1.3697), new Laya.Vector3(1.0019, 2.0803, -1.3697), new Laya.Vector3(-1.0257, 2.0803, -1.6661), new Laya.Vector3(-.7365, 2.0803, -1.6661), new Laya.Vector3(-.4457, 2.0803, -1.6661), new Laya.Vector3(-.1549, 2.0803, -1.6661), new Laya.Vector3(.136, 2.0803, -1.6661), new Laya.Vector3(.4268, 2.0803, -1.6661), new Laya.Vector3(.7177, 2.0803, -1.6661), new Laya.Vector3(1.0019, 2.0803, -1.6661)], [new Laya.Vector3(.7177, 2.39, 1.2977), new Laya.Vector3(.4268, 2.39, 1.2977), new Laya.Vector3(.136, 2.39, 1.2977), new Laya.Vector3(-.1549, 2.39, 1.2977), new Laya.Vector3(-.4457, 2.39, 1.2977), new Laya.Vector3(-.7365, 2.39, 1.2977), new Laya.Vector3(-.7365, 2.39, 1.0013), new Laya.Vector3(-.4457, 2.39, 1.0013), new Laya.Vector3(-.1549, 2.39, 1.0013), new Laya.Vector3(.136, 2.39, 1.0013), new Laya.Vector3(.4268, 2.39, 1.0013), new Laya.Vector3(.7177, 2.39, 1.0013), new Laya.Vector3(-1.0257, 2.39, .705), new Laya.Vector3(-.7365, 2.39, .705), new Laya.Vector3(-.4457, 2.39, .705), new Laya.Vector3(-.1549, 2.39, .705), new Laya.Vector3(.136, 2.39, .705), new Laya.Vector3(.4268, 2.39, .705), new Laya.Vector3(.7177, 2.39, .705), new Laya.Vector3(1.0019, 2.39, .705), new Laya.Vector3(-1.0257, 2.39, .4086), new Laya.Vector3(-.7365, 2.39, .4086), new Laya.Vector3(-.4457, 2.39, .4086), new Laya.Vector3(-.1549, 2.39, .4086), new Laya.Vector3(.136, 2.39, .4086), new Laya.Vector3(.4268, 2.39, .4086), new Laya.Vector3(.7177, 2.39, .4086), new Laya.Vector3(1.0019, 2.39, .4086), new Laya.Vector3(-1.0257, 2.39, .1122), new Laya.Vector3(-.7365, 2.39, .1122), new Laya.Vector3(-.4457, 2.39, .1122), new Laya.Vector3(-.1549, 2.39, .1122), new Laya.Vector3(.136, 2.39, .1122), new Laya.Vector3(.4268, 2.39, .1122), new Laya.Vector3(.7177, 2.39, .1122), new Laya.Vector3(1.0019, 2.39, .1122), new Laya.Vector3(-1.0257, 2.39, -.1842), new Laya.Vector3(-.7365, 2.39, -.1842), new Laya.Vector3(-.4457, 2.39, -.1842), new Laya.Vector3(-.1549, 2.39, -.1842), new Laya.Vector3(.136, 2.39, -.1842), new Laya.Vector3(.4268, 2.39, -.1842), new Laya.Vector3(.7177, 2.39, -.1842), new Laya.Vector3(1.0019, 2.39, -.1842), new Laya.Vector3(-1.0257, 2.39, -.4806), new Laya.Vector3(-.7365, 2.39, -.4806), new Laya.Vector3(-.4457, 2.39, -.4806), new Laya.Vector3(-.1549, 2.39, -.4806), new Laya.Vector3(.136, 2.39, -.4806), new Laya.Vector3(.4268, 2.39, -.4806), new Laya.Vector3(.7177, 2.39, -.4806), new Laya.Vector3(1.0019, 2.39, -.4806), new Laya.Vector3(-1.0257, 2.39, -.777), new Laya.Vector3(-.7365, 2.39, -.777), new Laya.Vector3(-.4457, 2.39, -.777), new Laya.Vector3(-.1549, 2.39, -.777), new Laya.Vector3(.136, 2.39, -.777), new Laya.Vector3(.4268, 2.39, -.777), new Laya.Vector3(.7177, 2.39, -.777), new Laya.Vector3(1.0019, 2.39, -.777), new Laya.Vector3(-1.0257, 2.39, -1.0733), new Laya.Vector3(-.7365, 2.39, -1.0733), new Laya.Vector3(-.4457, 2.39, -1.0733), new Laya.Vector3(-.1549, 2.39, -1.0733), new Laya.Vector3(.136, 2.39, -1.0733), new Laya.Vector3(.4268, 2.39, -1.0733), new Laya.Vector3(.7177, 2.39, -1.0733), new Laya.Vector3(1.0019, 2.39, -1.0733), new Laya.Vector3(-1.0257, 2.39, -1.3697), new Laya.Vector3(-.7365, 2.39, -1.3697), new Laya.Vector3(-.4457, 2.39, -1.3697), new Laya.Vector3(-.1549, 2.39, -1.3697), new Laya.Vector3(.136, 2.39, -1.3697), new Laya.Vector3(.4268, 2.39, -1.3697), new Laya.Vector3(.7177, 2.39, -1.3697), new Laya.Vector3(1.0019, 2.39, -1.3697), new Laya.Vector3(-1.0257, 2.39, -1.6661), new Laya.Vector3(-.7365, 2.39, -1.6661), new Laya.Vector3(-.4457, 2.39, -1.6661), new Laya.Vector3(-.1549, 2.39, -1.6661), new Laya.Vector3(.136, 2.39, -1.6661), new Laya.Vector3(.4268, 2.39, -1.6661), new Laya.Vector3(.7177, 2.39, -1.6661), new Laya.Vector3(1.0019, 2.39, -1.6661)], [new Laya.Vector3(.7177, 2.6997, 1.2977), new Laya.Vector3(.4268, 2.6997, 1.2977), new Laya.Vector3(.136, 2.6997, 1.2977), new Laya.Vector3(-.1549, 2.6997, 1.2977), new Laya.Vector3(-.4457, 2.6997, 1.2977), new Laya.Vector3(-.7365, 2.6997, 1.2977), new Laya.Vector3(-.7365, 2.6997, 1.0013), new Laya.Vector3(-.4457, 2.6997, 1.0013), new Laya.Vector3(-.1549, 2.6997, 1.0013), new Laya.Vector3(.136, 2.6997, 1.0013), new Laya.Vector3(.4268, 2.6997, 1.0013), new Laya.Vector3(.7177, 2.6997, 1.0013), new Laya.Vector3(-1.0257, 2.6997, .705), new Laya.Vector3(-.7365, 2.6997, .705), new Laya.Vector3(-.4457, 2.6997, .705), new Laya.Vector3(-.1549, 2.6997, .705), new Laya.Vector3(.136, 2.6997, .705), new Laya.Vector3(.4268, 2.6997, .705), new Laya.Vector3(.7177, 2.6997, .705), new Laya.Vector3(1.0019, 2.6997, .705), new Laya.Vector3(-1.0257, 2.6997, .4086), new Laya.Vector3(-.7365, 2.6997, .4086), new Laya.Vector3(-.4457, 2.6997, .4086), new Laya.Vector3(-.1549, 2.6997, .4086), new Laya.Vector3(.136, 2.6997, .4086), new Laya.Vector3(.4268, 2.6997, .4086), new Laya.Vector3(.7177, 2.6997, .4086), new Laya.Vector3(1.0019, 2.6997, .4086), new Laya.Vector3(-1.0257, 2.6997, .1122), new Laya.Vector3(-.7365, 2.6997, .1122), new Laya.Vector3(-.4457, 2.6997, .1122), new Laya.Vector3(-.1549, 2.6997, .1122), new Laya.Vector3(.136, 2.6997, .1122), new Laya.Vector3(.4268, 2.6997, .1122), new Laya.Vector3(.7177, 2.6997, .1122), new Laya.Vector3(1.0019, 2.6997, .1122), new Laya.Vector3(-1.0257, 2.6997, -.1842), new Laya.Vector3(-.7365, 2.6997, -.1842), new Laya.Vector3(-.4457, 2.6997, -.1842), new Laya.Vector3(-.1549, 2.6997, -.1842), new Laya.Vector3(.136, 2.6997, -.1842), new Laya.Vector3(.4268, 2.6997, -.1842), new Laya.Vector3(.7177, 2.6997, -.1842), new Laya.Vector3(1.0019, 2.6997, -.1842), new Laya.Vector3(-1.0257, 2.6997, -.4806), new Laya.Vector3(-.7365, 2.6997, -.4806), new Laya.Vector3(-.4457, 2.6997, -.4806), new Laya.Vector3(-.1549, 2.6997, -.4806), new Laya.Vector3(.136, 2.6997, -.4806), new Laya.Vector3(.4268, 2.6997, -.4806), new Laya.Vector3(.7177, 2.6997, -.4806), new Laya.Vector3(1.0019, 2.6997, -.4806), new Laya.Vector3(-1.0257, 2.6997, -.777), new Laya.Vector3(-.7365, 2.6997, -.777), new Laya.Vector3(-.4457, 2.6997, -.777), new Laya.Vector3(-.1549, 2.6997, -.777), new Laya.Vector3(.136, 2.6997, -.777), new Laya.Vector3(.4268, 2.6997, -.777), new Laya.Vector3(.7177, 2.6997, -.777), new Laya.Vector3(1.0019, 2.6997, -.777), new Laya.Vector3(-1.0257, 2.6997, -1.0733), new Laya.Vector3(-.7365, 2.6997, -1.0733), new Laya.Vector3(-.4457, 2.6997, -1.0733), new Laya.Vector3(-.1549, 2.6997, -1.0733), new Laya.Vector3(.136, 2.6997, -1.0733), new Laya.Vector3(.4268, 2.6997, -1.0733), new Laya.Vector3(.7177, 2.6997, -1.0733), new Laya.Vector3(1.0019, 2.6997, -1.0733), new Laya.Vector3(-1.0257, 2.6997, -1.3697), new Laya.Vector3(-.7365, 2.6997, -1.3697), new Laya.Vector3(-.4457, 2.6997, -1.3697), new Laya.Vector3(-.1549, 2.6997, -1.3697), new Laya.Vector3(.136, 2.6997, -1.3697), new Laya.Vector3(.4268, 2.6997, -1.3697), new Laya.Vector3(.7177, 2.6997, -1.3697), new Laya.Vector3(1.0019, 2.6997, -1.3697), new Laya.Vector3(-1.0257, 2.6997, -1.6661), new Laya.Vector3(-.7365, 2.6997, -1.6661), new Laya.Vector3(-.4457, 2.6997, -1.6661), new Laya.Vector3(-.1549, 2.6997, -1.6661), new Laya.Vector3(.136, 2.6997, -1.6661), new Laya.Vector3(.4268, 2.6997, -1.6661), new Laya.Vector3(.7177, 2.6997, -1.6661), new Laya.Vector3(1.0019, 2.6997, -1.6661), new Laya.Vector3(.4268, 2.6997, 1.5843), new Laya.Vector3(.136, 2.6997, 1.5843), new Laya.Vector3(-.1549, 2.6997, 1.5843), new Laya.Vector3(-.4457, 2.6997, 1.5843), new Laya.Vector3(-.4457, 2.9995, 1.5843), new Laya.Vector3(-.1549, 2.9995, 1.5843), new Laya.Vector3(.136, 2.9995, 1.5843), new Laya.Vector3(.4268, 2.9995, 1.5843), new Laya.Vector3(.7177, 2.9809, -1.3697), new Laya.Vector3(.4268, 2.9809, -1.3697), new Laya.Vector3(.136, 2.9809, -1.3697), new Laya.Vector3(-.1549, 2.9809, -1.3697), new Laya.Vector3(-.4457, 2.9809, -1.3697), new Laya.Vector3(-.7365, 2.9809, -1.3697), new Laya.Vector3(.7177, 2.9809, -1.0733), new Laya.Vector3(.4268, 2.9809, -1.0733), new Laya.Vector3(.136, 2.9809, -1.0733), new Laya.Vector3(-.1549, 2.9809, -1.0733), new Laya.Vector3(-.4457, 2.9809, -1.0733), new Laya.Vector3(-.7365, 2.9809, -1.0733), new Laya.Vector3(.7177, 2.9809, -.777), new Laya.Vector3(.4268, 2.9809, -.777), new Laya.Vector3(.136, 2.9809, -.777), new Laya.Vector3(-.1549, 2.9809, -.777), new Laya.Vector3(-.4457, 2.9809, -.777), new Laya.Vector3(-.7365, 2.9809, -.777), new Laya.Vector3(.7177, 2.9809, -.4806), new Laya.Vector3(.4268, 2.9809, -.4806), new Laya.Vector3(.136, 2.9809, -.4806), new Laya.Vector3(-.1549, 2.9809, -.4806), new Laya.Vector3(-.4457, 2.9809, -.4806), new Laya.Vector3(-.7365, 2.9809, -.4806), new Laya.Vector3(.7177, 2.9809, -.1842), new Laya.Vector3(.4268, 2.9809, -.1842), new Laya.Vector3(.136, 2.9809, -.1842), new Laya.Vector3(-.1549, 2.9809, -.1842), new Laya.Vector3(-.4457, 2.9809, -.1842), new Laya.Vector3(-.7365, 2.9809, -.1842), new Laya.Vector3(.7177, 2.9809, .1122), new Laya.Vector3(.4268, 2.9809, .1122), new Laya.Vector3(.136, 2.9809, .1122), new Laya.Vector3(-.1549, 2.9809, .1122), new Laya.Vector3(-.4457, 2.9809, .1122), new Laya.Vector3(-.7365, 2.9809, .1122), new Laya.Vector3(.7177, 2.9809, .4086), new Laya.Vector3(.4268, 2.9809, .4086), new Laya.Vector3(.136, 2.9809, .4086), new Laya.Vector3(-.1549, 2.9809, .4086), new Laya.Vector3(-.4457, 2.9809, .4086), new Laya.Vector3(-.7365, 2.9809, .4086), new Laya.Vector3(.7177, 2.9809, .705), new Laya.Vector3(.4268, 2.9809, .705), new Laya.Vector3(.136, 2.9809, .705), new Laya.Vector3(-.1549, 2.9809, .705), new Laya.Vector3(-.4457, 2.9809, .705), new Laya.Vector3(-.7365, 2.9809, .705), new Laya.Vector3(.7177, 2.9809, 1.0013), new Laya.Vector3(.4268, 2.9809, 1.0013), new Laya.Vector3(.136, 2.9809, 1.0013), new Laya.Vector3(-.1549, 2.9809, 1.0013), new Laya.Vector3(-.4457, 2.9809, 1.0013), new Laya.Vector3(-.7365, 2.9809, 1.0013), new Laya.Vector3(-.7365, 2.9809, 1.2977), new Laya.Vector3(-.4457, 2.9809, 1.2977), new Laya.Vector3(-.1549, 2.9809, 1.2977), new Laya.Vector3(.136, 2.9809, 1.2977), new Laya.Vector3(.4268, 2.9809, 1.2977), new Laya.Vector3(.7177, 2.9809, 1.2977)], [new Laya.Vector3(.4268, 3.2807, 2.7863), new Laya.Vector3(.136, 3.2807, 2.7863), new Laya.Vector3(-.1549, 3.2807, 2.7863), new Laya.Vector3(-.4457, 3.2807, 2.7863), new Laya.Vector3(.4268, 3.2807, 2.4841), new Laya.Vector3(.136, 3.2807, 2.4841), new Laya.Vector3(-.1549, 3.2807, 2.4841), new Laya.Vector3(-.4457, 3.2807, 2.4841), new Laya.Vector3(.4268, 3.2807, 2.1836), new Laya.Vector3(.136, 3.2807, 2.1836), new Laya.Vector3(-.1549, 3.2807, 2.1836), new Laya.Vector3(-.4457, 3.2807, 2.1836), new Laya.Vector3(.4268, 3.2807, 1.8832), new Laya.Vector3(.136, 3.2807, 1.8832), new Laya.Vector3(-.1549, 3.2807, 1.8832), new Laya.Vector3(-.4457, 3.2807, 1.8832), new Laya.Vector3(.7177, 3.2807, 1.5754), new Laya.Vector3(.4268, 3.2807, 1.5827), new Laya.Vector3(.136, 3.2807, 1.5827), new Laya.Vector3(-.1549, 3.2807, 1.5827), new Laya.Vector3(-.4457, 3.2807, 1.5827), new Laya.Vector3(-.7365, 3.2807, 1.5754), new Laya.Vector3(.7177, 3.2807, 1.2749), new Laya.Vector3(.4268, 3.2807, 1.2822), new Laya.Vector3(.136, 3.2807, 1.2822), new Laya.Vector3(-.1549, 3.2807, 1.2822), new Laya.Vector3(-.4457, 3.2807, 1.2822), new Laya.Vector3(-.7365, 3.2807, 1.2749), new Laya.Vector3(.7177, 3.2807, .9745), new Laya.Vector3(.4268, 3.2807, .9818), new Laya.Vector3(.136, 3.2807, .9818), new Laya.Vector3(-.1549, 3.2807, .9818), new Laya.Vector3(-.4457, 3.2807, .9818), new Laya.Vector3(-.7365, 3.2807, .9745), new Laya.Vector3(-.7365, 3.2807, .6841), new Laya.Vector3(-.4457, 3.2807, .6914), new Laya.Vector3(-.1549, 3.2807, .6914), new Laya.Vector3(.136, 3.2807, .6914), new Laya.Vector3(.4268, 3.2807, .6914), new Laya.Vector3(.7177, 3.2807, .6841), new Laya.Vector3(-.7365, 3.2807, .3937), new Laya.Vector3(-.4457, 3.2807, .401), new Laya.Vector3(-.1549, 3.2807, .401), new Laya.Vector3(.136, 3.2807, .401), new Laya.Vector3(.4268, 3.2807, .401), new Laya.Vector3(.7177, 3.2807, .3937), new Laya.Vector3(-.4457, 3.2807, .1106), new Laya.Vector3(-.1549, 3.2807, .1106), new Laya.Vector3(.136, 3.2807, .1106), new Laya.Vector3(.4268, 3.2807, .1106), new Laya.Vector3(-.1549, 3.2807, -.1798), new Laya.Vector3(.136, 3.2807, -.1798), new Laya.Vector3(-.1549, 3.5689, .1139), new Laya.Vector3(.136, 3.5689, .1139), new Laya.Vector3(.4268, 3.5689, .4043), new Laya.Vector3(.136, 3.5689, .4043), new Laya.Vector3(-.1549, 3.5689, .4043), new Laya.Vector3(-.4457, 3.5689, .4043), new Laya.Vector3(.7177, 3.5689, .6873), new Laya.Vector3(.4268, 3.5689, .6947), new Laya.Vector3(.136, 3.5689, .6947), new Laya.Vector3(-.1549, 3.5689, .6947), new Laya.Vector3(-.4457, 3.5689, .6947), new Laya.Vector3(-.7365, 3.5689, .6873), new Laya.Vector3(.7177, 3.5689, .9777), new Laya.Vector3(.4268, 3.5689, .985), new Laya.Vector3(.136, 3.5689, .985), new Laya.Vector3(-.1549, 3.5689, .985), new Laya.Vector3(-.4457, 3.5689, .985), new Laya.Vector3(-.7365, 3.5689, .9777), new Laya.Vector3(-.7365, 3.5689, 1.2681), new Laya.Vector3(-.4457, 3.5689, 1.2754), new Laya.Vector3(-.1549, 3.5689, 1.2754), new Laya.Vector3(.136, 3.5689, 1.2754), new Laya.Vector3(.4268, 3.5689, 1.2754), new Laya.Vector3(.7177, 3.5689, 1.2681), new Laya.Vector3(-.7365, 3.5689, 1.5686), new Laya.Vector3(-.4457, 3.5689, 1.5759), new Laya.Vector3(-.1549, 3.5689, 1.5759), new Laya.Vector3(.136, 3.5689, 1.5759), new Laya.Vector3(.4268, 3.5689, 1.5759), new Laya.Vector3(.7177, 3.5689, 1.5686), new Laya.Vector3(-.7365, 3.5689, 1.869), new Laya.Vector3(-.4457, 3.5689, 1.8763), new Laya.Vector3(-.1549, 3.5689, 1.8763), new Laya.Vector3(.136, 3.5689, 1.8763), new Laya.Vector3(.4268, 3.5689, 1.8763), new Laya.Vector3(.7177, 3.5689, 1.869), new Laya.Vector3(-.7365, 3.5689, 2.1695), new Laya.Vector3(-.4457, 3.5689, 2.1768), new Laya.Vector3(.4268, 3.5689, 2.1768), new Laya.Vector3(.136, 3.5689, 2.1768), new Laya.Vector3(-.1549, 3.5689, 2.1768), new Laya.Vector3(.7177, 3.5689, 2.1695), new Laya.Vector3(-.4457, 3.5689, 2.4773), new Laya.Vector3(-.1549, 3.5689, 2.4773), new Laya.Vector3(.136, 3.5689, 2.4773), new Laya.Vector3(.4268, 3.5689, 2.4773), new Laya.Vector3(-.4457, 3.5689, 2.7777), new Laya.Vector3(-.1549, 3.5689, 2.7777), new Laya.Vector3(.136, 3.5689, 2.7777), new Laya.Vector3(.4268, 3.5689, 2.7777), new Laya.Vector3(-.4457, 3.5689, 3.08), new Laya.Vector3(-.1549, 3.5689, 3.08), new Laya.Vector3(.136, 3.5689, 3.08), new Laya.Vector3(.4268, 3.5689, 3.08)], [new Laya.Vector3(.4268, 3.8534, .4043), new Laya.Vector3(.136, 3.8534, .4043), new Laya.Vector3(-.1549, 3.8534, .4043), new Laya.Vector3(-.4457, 3.8534, .4043), new Laya.Vector3(.7177, 3.8534, .6873), new Laya.Vector3(.4268, 3.8534, .6947), new Laya.Vector3(.136, 3.8534, .6947), new Laya.Vector3(-.1549, 3.8534, .6947), new Laya.Vector3(-.4457, 3.8534, .6947), new Laya.Vector3(-.7365, 3.8534, .6873), new Laya.Vector3(.7177, 3.8534, .9777), new Laya.Vector3(.4268, 3.8534, .985), new Laya.Vector3(.136, 3.8534, .985), new Laya.Vector3(-.1549, 3.8534, .985), new Laya.Vector3(-.4457, 3.8534, .985), new Laya.Vector3(-.7365, 3.8534, .9777), new Laya.Vector3(-.7365, 3.8534, 1.2681), new Laya.Vector3(-.4457, 3.8534, 1.2754), new Laya.Vector3(-.1549, 3.8534, 1.2754), new Laya.Vector3(.136, 3.8534, 1.2754), new Laya.Vector3(.4268, 3.8534, 1.2754), new Laya.Vector3(.7177, 3.8534, 1.2681), new Laya.Vector3(-.7365, 3.8534, 1.5686), new Laya.Vector3(-.4457, 3.8534, 1.5759), new Laya.Vector3(-.1549, 3.8534, 1.5759), new Laya.Vector3(.136, 3.8534, 1.5759), new Laya.Vector3(.4268, 3.8534, 1.5759), new Laya.Vector3(.7177, 3.8534, 1.5686), new Laya.Vector3(-.7365, 3.8534, 1.869), new Laya.Vector3(-.4457, 3.8534, 1.8763), new Laya.Vector3(-.1549, 3.8534, 1.8763), new Laya.Vector3(.136, 3.8534, 1.8763), new Laya.Vector3(.4268, 3.8534, 1.8763), new Laya.Vector3(.7177, 3.8534, 1.869), new Laya.Vector3(-.7365, 3.8534, 2.1695), new Laya.Vector3(-.4457, 3.8534, 2.1768), new Laya.Vector3(.4268, 3.8534, 2.1768), new Laya.Vector3(.136, 3.8534, 2.1768), new Laya.Vector3(-.1549, 3.8534, 2.1768), new Laya.Vector3(.7177, 3.8534, 2.1695), new Laya.Vector3(-.4457, 3.8534, 2.4772), new Laya.Vector3(-.1549, 3.8534, 2.4772), new Laya.Vector3(.136, 3.8534, 2.4772), new Laya.Vector3(.4268, 3.8534, 2.4772), new Laya.Vector3(-.4457, 3.8534, 2.7777), new Laya.Vector3(-.1549, 3.8534, 2.7777), new Laya.Vector3(.136, 3.8534, 2.7777), new Laya.Vector3(.4268, 3.8534, 2.7777), new Laya.Vector3(.136, 4.1379, .4043), new Laya.Vector3(-.1549, 4.1379, .4043), new Laya.Vector3(.7177, 4.1379, .6873), new Laya.Vector3(.4268, 4.1379, .6947), new Laya.Vector3(.136, 4.1379, .6947), new Laya.Vector3(-.1549, 4.1379, .6947), new Laya.Vector3(-.4457, 4.1379, .6947), new Laya.Vector3(-.7365, 4.1379, .6873), new Laya.Vector3(.7177, 4.1379, .9777), new Laya.Vector3(.4268, 4.1379, .985), new Laya.Vector3(.136, 4.1379, .985), new Laya.Vector3(-.1549, 4.1379, .985), new Laya.Vector3(-.4457, 4.1379, .985), new Laya.Vector3(-.7365, 4.1379, .9777), new Laya.Vector3(-.7365, 4.1379, 1.2681), new Laya.Vector3(-.4457, 4.1379, 1.2754), new Laya.Vector3(-.1549, 4.1379, 1.2754), new Laya.Vector3(.136, 4.1379, 1.2754), new Laya.Vector3(.4268, 4.1379, 1.2754), new Laya.Vector3(.7177, 4.1379, 1.2681), new Laya.Vector3(-.7365, 4.1379, 1.5686), new Laya.Vector3(-.4457, 4.1379, 1.5759), new Laya.Vector3(-.1549, 4.1379, 1.5759), new Laya.Vector3(.136, 4.1379, 1.5759), new Laya.Vector3(.4268, 4.1379, 1.5759), new Laya.Vector3(.7177, 4.1379, 1.5686), new Laya.Vector3(-.7365, 4.1379, 1.869), new Laya.Vector3(-.4457, 4.1379, 1.8763), new Laya.Vector3(-.1549, 4.1379, 1.8763), new Laya.Vector3(.136, 4.1379, 1.8763), new Laya.Vector3(.4268, 4.1379, 1.8763), new Laya.Vector3(.7177, 4.1379, 1.869), new Laya.Vector3(-.7365, 4.1379, 2.1695), new Laya.Vector3(-.4457, 4.1379, 2.1768), new Laya.Vector3(.4268, 4.1379, 2.1768), new Laya.Vector3(.136, 4.1379, 2.1768), new Laya.Vector3(-.1549, 4.1379, 2.1768), new Laya.Vector3(.7177, 4.1379, 2.1695), new Laya.Vector3(-.4457, 4.1379, 2.4772), new Laya.Vector3(-.1549, 4.1379, 2.4772), new Laya.Vector3(.136, 4.1379, 2.4772), new Laya.Vector3(.4268, 4.1379, 2.4772)], [new Laya.Vector3(.136, 4.4224, .6947), new Laya.Vector3(-.1549, 4.4224, .6947), new Laya.Vector3(.7177, 4.4224, .9777), new Laya.Vector3(.4268, 4.4224, .985), new Laya.Vector3(.136, 4.4224, .985), new Laya.Vector3(-.1549, 4.4224, .985), new Laya.Vector3(-.4457, 4.4224, .985), new Laya.Vector3(-.7365, 4.4224, .9777), new Laya.Vector3(-.7365, 4.4224, 1.2681), new Laya.Vector3(-.4457, 4.4224, 1.2754), new Laya.Vector3(-.1549, 4.4224, 1.2754), new Laya.Vector3(.136, 4.4224, 1.2754), new Laya.Vector3(.4268, 4.4224, 1.2754), new Laya.Vector3(.7177, 4.4224, 1.2681), new Laya.Vector3(-.7365, 4.4224, 1.5686), new Laya.Vector3(-.4457, 4.4224, 1.5759), new Laya.Vector3(-.1549, 4.4224, 1.5759), new Laya.Vector3(.136, 4.4224, 1.5759), new Laya.Vector3(.4268, 4.4224, 1.5759), new Laya.Vector3(.7177, 4.4224, 1.5686), new Laya.Vector3(-.7365, 4.4224, 1.869), new Laya.Vector3(-.4457, 4.4224, 1.8763), new Laya.Vector3(-.1549, 4.4224, 1.8763), new Laya.Vector3(.136, 4.4224, 1.8763), new Laya.Vector3(.4268, 4.4224, 1.8763), new Laya.Vector3(.7177, 4.4224, 1.869), new Laya.Vector3(-.4457, 4.4224, 2.1768), new Laya.Vector3(.4268, 4.4224, 2.1768), new Laya.Vector3(.136, 4.4224, 2.1768), new Laya.Vector3(-.1549, 4.4224, 2.1768), new Laya.Vector3(.136, 4.707, .985), new Laya.Vector3(-.1549, 4.707, .985), new Laya.Vector3(-.4457, 4.707, 1.2754), new Laya.Vector3(-.1549, 4.707, 1.2754), new Laya.Vector3(.136, 4.707, 1.2754), new Laya.Vector3(.4268, 4.707, 1.2754), new Laya.Vector3(-.7365, 4.707, 1.5686), new Laya.Vector3(-.4457, 4.707, 1.5759), new Laya.Vector3(-.1549, 4.707, 1.5759), new Laya.Vector3(.136, 4.707, 1.5759), new Laya.Vector3(.4268, 4.707, 1.5759), new Laya.Vector3(.7177, 4.707, 1.5686)], [new Laya.Vector3(-.7365, 4.9915, 1.5686), new Laya.Vector3(-.4457, 4.9915, 1.5759), new Laya.Vector3(.4268, 4.9915, 1.5759), new Laya.Vector3(.7177, 4.9915, 1.5686)], [new Laya.Vector3(-5e-4, 2.5245, -1.919), new Laya.Vector3(-.1828, 2.2953, -1.919), new Laya.Vector3(.2002, 2.2873, -1.919), new Laya.Vector3(.0191, 2.0342, -1.919), new Laya.Vector3(.0191, 1.7436, -2.1586), new Laya.Vector3(.2002, 1.9968, -2.1586), new Laya.Vector3(-.1828, 2.0048, -2.1586), new Laya.Vector3(.2993, -.204, 18.5815), new Laya.Vector3(.0191, 1.4531, -2.3765), new Laya.Vector3(.2002, 1.7062, -2.3765), new Laya.Vector3(-.1828, 1.7142, -2.3765), new Laya.Vector3(-5e-4, 1.9434, -2.3765), new Laya.Vector3(.0191, 1.1278, -2.5994), new Laya.Vector3(.2002, 1.3809, -2.5994), new Laya.Vector3(-.1828, 1.3889, -2.5994), new Laya.Vector3(-5e-4, 1.618, -2.5994), new Laya.Vector3(.0191, .8562, -2.7941), new Laya.Vector3(.2002, 1.1094, -2.7941), new Laya.Vector3(-.1828, 1.1174, -2.7941), new Laya.Vector3(-5e-4, 1.3465, -2.7941), new Laya.Vector3(.0191, .5182, -2.978), new Laya.Vector3(.2002, .7714, -2.978), new Laya.Vector3(-.1828, .7794, -2.978), new Laya.Vector3(-5e-4, 1.0085, -2.978)]], Ee = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                var e;
                return u(this, a), (e = t.call(this)).v3_0 = new Laya.Vector3(), e.v3_1 = new Laya.Vector3(),
                    e.isTween = !1, e.status = De.Recover, e.position = new Laya.Vector3(), e.island = 0,
                    e.block = 0, e.val = 1, e;
            }
            return d(a, [{
                key: "init",
                value: function () {
                    this.status = De.NotDig, this.collider = this.owner.getComponent(Laya.PhysicsCollider),
                        this.collider.collisionGroup = ae.Diamond, this.collider.canCollideWith = ae.Player | ae.Worker | ae.Magnet,
                        this.collider.enabled = !1;
                }
            }, {
                key: "onEnable",
                value: function () { }
            }, {
                key: "onLateUpdate",
                value: function () {
                    this.isTween && (Laya.Vector3.lerp(this.position, this.owner.transform.position, .15, this.position),
                        this.owner.transform.position = this.position);
                }
            }, {
                key: "materialNotDig",
                get: function () {
                    return a.getMaterialNotDig(this.island);
                }
            }, {
                key: "material",
                get: function () {
                    return a.getMaterial(this.island);
                }
            }, {
                key: "setMaterial",
                value: function () {
                    this.status === De.NotDig ? this.owner.meshRenderer.material = this.materialNotDig : this.owner.meshRenderer.material = this.material;
                }
            }, {
                key: "fall",
                value: function (e) {
                    var t = this;
                    this.status = De.Fall, this.setMaterial(), this.owner.transform.position.cloneTo(this.v3_0),
                        this.owner.scene.addChild(this.owner), this.owner.transform.position = this.v3_0;
                    var i = this.owner.transform.localPositionY + Math.random() + .5, n = e + a.radius;
                    Laya.Tween.to(this.owner.transform, {
                        localPositionY: i
                    }, 300, Laya.Ease.circOut, Laya.Handler.create(this, function () {
                        Laya.Tween.to(t.owner.transform, {
                            localPositionY: n
                        }, 300, Laya.Ease.circIn, Laya.Handler.create(t, function () {
                            t.collider.enabled = !0;
                        }));
                    })), Fw.on(K.FallOre + "_" + this.island + "_" + this.block, this, this.fall2);
                }
            }, {
                key: "fall2",
                value: function (e) {
                    var t = this;
                    this.owner.transform.position.cloneTo(this.v3_0);
                    var i = this.owner.transform.localPositionY + .5 * Math.random() + .25, n = e + a.radius;
                    Laya.Tween.to(this.owner.transform, {
                        localPositionY: i
                    }, 300, Laya.Ease.circOut, Laya.Handler.create(this, function () {
                        Laya.Tween.to(t.owner.transform, {
                            localPositionY: n
                        }, 300, Laya.Ease.circIn, Laya.Handler.create(t, function () {
                            t.collider.enabled = !0;
                        }));
                    }));
                }
            }, {
                key: "recover",
                value: function () {
                    this.isTween = !1, a.Recover(this.owner), M.I.setInc(this.val), M.I.playAni({
                        x: Laya.stage.width / 2,
                        y: Laya.stage.height / 2,
                        count: 1
                    });
                }
            }], [{
                key: "Create",
                value: function () {
                    var e, t;
                    return this.HidePool.length ? t = (e = this.HidePool.shift()).getComponent(a) : (t = (e = Fw.D3.createSprite3D(w + "Diamond.lh")).addComponent(a),
                        e.sc = t), t.init(), e.active = !0, this.ShowPool.push(e), e;
                }
            }, {
                key: "Recover",
                value: function (e) {
                    e.active = !1;
                    var t = e.getComponent(a);
                    Fw.offAllCaller(t), t.status = De.Recover;
                    var i = this.ShowPool.indexOf(e);
                    -1 !== i && this.ShowPool.splice(i, 1), this.HidePool.push(e);
                }
            }, {
                key: "RecoverFall",
                value: function (e) {
                    for (var t = null, i = 0, n = 0, o = this.ShowPool.length; n < o; n++) {
                        var r = this.ShowPool[n].sc;
                        r.island === e && r.status === De.Fall && (i++, t || (t = this.ShowPool[n]));
                    }
                    i > a.MaxFall && t && this.Recover(t);
                }
            }, {
                key: "getOneFall2Island",
                value: function (e) {
                    for (var t = [], a = 0, i = this.ShowPool.length; a < i; a++) {
                        var n = this.ShowPool[a].sc;
                        n.island === e && n.status === De.Fall && t.push(a);
                    }
                    return t.length ? this.ShowPool[Y(t)] : null;
                }
            }, {
                key: "getMaterialNotDig",
                value: function (e) {
                    return Fw.D3.getResMaterial(g + "LV" + (e % he.total + 1) + "/dixiakuangmian.lmat");
                }
            }, {
                key: "getMaterial",
                value: function (e) {
                    return Fw.D3.getResMaterial(g + "zhuanshi.lmat");
                }
            }]), a;
        }(Laya.Script3D);
        Ee.MaxFall = 25, Ee.ShowPool = [], Ee.HidePool = [], Ee.radius = .15, Ee.site = [[-Ee.radius, -Ee.radius], [-Ee.radius, Ee.radius], [Ee.radius, -Ee.radius], [Ee.radius, Ee.radius]],
            function (e) {
                e[e.NotDig = 0] = "NotDig", e[e.Fall = 1] = "Fall", e[e.Recover = 2] = "Recover";
            }(De || (De = {}));
        var Te = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                var e;
                return u(this, a), (e = t.call(this)).width = 3, e;
            }
            return d(a, [{
                key: "onEnable",
                value: function () {
                    this.body = this.owner.getChildByName("body"), window.num3d = this, this.setVal(q(0, 1000));
                }
            }, {
                key: "setVal",
                value: function (e) {
                    "number" == typeof e && (e = z(e));
                    var t = e + "";
                    this.body || (this.body = this.owner.getChildByName("body"));
                    var i, n = r(this.body._children);
                    try {
                        for (n.s(); !(i = n.n()).done;) {
                            i.value.active = !1;
                        }
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        n.e(e);
                    } finally {
                        n.f();
                    }
                    for (var o = 0, s = 0, l = t.length; s < l; s++) {
                        var h = t.charAt(s), c = a.charConf[h], u = this.body._children[s];
                        u && (u.meshRenderer.material = Fw.D3.getResMaterial(c.material), u.active = !0,
                            u.transform.localPositionX = o + c.width / 2, u.transform.localScaleX = c.width,
                            u.transform.localScaleY = c.height, o += c.width);
                    }
                    var d = this.width / o;
                    d > 1 && (d = 1), this.body.transform.localScale = new Laya.Vector3(d, d, d), this.body.transform.localPositionX = -o * d / 2;
                }
            }]), a;
        }(Laya.Script3D);
        Te.charConf = {
            0: {
                width: 43 / 54,
                height: 52 / 54,
                material: g + "num/0.lmat"
            },
            1: {
                width: 26 / 54,
                height: 51 / 54,
                material: g + "num/1.lmat"
            },
            2: {
                width: 39 / 54,
                height: 52 / 54,
                material: g + "num/2.lmat"
            },
            3: {
                width: 39 / 54,
                height: 1,
                material: g + "num/3.lmat"
            },
            4: {
                width: 45 / 54,
                height: 51 / 54,
                material: g + "num/4.lmat"
            },
            5: {
                width: 39 / 54,
                height: 51 / 54,
                material: g + "num/5.lmat"
            },
            6: {
                width: 40 / 54,
                height: 1,
                material: g + "num/6.lmat"
            },
            7: {
                width: 37 / 54,
                height: 51 / 54,
                material: g + "num/7.lmat"
            },
            8: {
                width: 41 / 54,
                height: 1,
                material: g + "num/8.lmat"
            },
            9: {
                width: 40 / 54,
                height: 1,
                material: g + "num/9.lmat"
            },
            K: {
                width: 46 / 54,
                height: 51 / 54,
                material: g + "num/K.lmat"
            },
            M: {
                width: 57 / 54,
                height: 50 / 54,
                material: g + "num/M.lmat"
            },
            G: {
                width: 50 / 54,
                height: 52 / 54,
                material: g + "num/G.lmat"
            },
            T: {
                width: 42 / 54,
                height: 51 / 54,
                material: g + "num/T.lmat"
            },
            P: {
                width: 41 / 54,
                height: 51 / 54,
                material: g + "num/P.lmat"
            },
            E: {
                width: 35 / 54,
                height: 51 / 54,
                material: g + "num/E.lmat"
            },
            B: {
                width: 43 / 54,
                height: 51 / 54,
                material: g + "num/B.lmat"
            },
            ".": {
                width: 17 / 54,
                height: 52 / 54,
                material: g + "num/point.lmat"
            },
            ",": {
                width: 20 / 54,
                height: 52 / 54,
                material: g + "num/comma.lmat"
            },
            "+": {
                width: 40 / 54,
                height: 40 / 54,
                material: g + "num/add.lmat"
            },
            "-": {
                width: 35 / 54,
                height: 18 / 54,
                material: g + "num/subtract.lmat"
            },
            x: {
                width: 44 / 54,
                height: 42 / 54,
                material: g + "num/multiply.lmat"
            },
            "÷": {
                width: 1,
                height: 55 / 54,
                material: g + "num/divide.lmat"
            },
            "%": {
                width: 1,
                height: 53 / 54,
                material: g + "num/percent.lmat"
            },
            "/": {
                width: 35 / 54,
                height: 67 / 54,
                material: g + "num/slash.lmat"
            }
        };
        var Re = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                var e;
                return u(this, a), (e = t.call(this)).v3_0 = new Laya.Vector3(), e;
            }
            return d(a, [{
                key: "onAwake",
                value: function () {
                    a.I = this, this.camera = this.owner.getChildByName("MainCamera");
                }
            }, {
                key: "onEnable",
                value: function () { }
            }, {
                key: "onLateUpdate",
                value: function () {
                    Je.I && (Laya.Vector3.lerp(this.owner.transform.position, Je.I.owner.transform.position, .5, this.v3_0),
                        this.owner.transform.position = this.v3_0);
                }
            }]), a;
        }(Laya.Script3D), Fe = function (e) {
            //主页
            h(a, e);
            var t = c(a);
            function a() {
                var e;
                return u(this, a), (e = t.call(this)).isMouseDown = !1, e.mouseDownPosition = new Laya.Vector2(),
                    e.point = new Laya.Point(), e.out = new Laya.Vector4(), e;
            }
            return d(a, [{
                key: "onEnable",
                value: function () {
                    a.I = this, P.I.tipsCoinPrefab = this.tipsCoinPrefab, M.I.tipsDiamondPrefab = this.tipsDiamondPrefab,
                        this.onUpdateOneSecond(), Laya.timer.loop(1e3, this, this.onUpdateOneSecond), a.nextOpenCustomPageDownTime = G.UMConfig.Value.GameViewCustom,
                        G.UMConfig.Value.GameBanner ? G.ShowBanner() : G.HideBanner(), G.UMConfig.Value.SingleGridChance && G.ShowCustom([G.UMConfig.Custom_LeftSingle_Index, G.UMConfig.Custom_RightSingle_Index]);
                    Laya.timer.once(1e3, this, h5splash.hideLoading)


                    if (Laya.LocalStorage.getItem("soundsound") == 0
                        || Laya.LocalStorage.getItem("soundsound") == null) {
                        this.issoundOff = false;
                        Laya.SoundManager.playMusic("sounds/bgm.mp3")
                        this.owner.onSoundBtn.skin = "new/on.png";
                    }
                    else {
                        this.issoundOff = true;
                        Laya.SoundManager.stopMusic("sounds/bgm.mp3")
                        this.owner.onSoundBtn.skin = "new/off.png";
                    };

                    this.owner.onSoundBtn.on(Laya.Event.CLICK, this, () => {
                        this.issoundOff = !this.issoundOff;
                        if (!this.issoundOff) {
                            Laya.LocalStorage.setItem("soundsound", 0);
                            Laya.SoundManager.playMusic("sounds/bgm.mp3")
                            this.owner.onSoundBtn.skin = "new/on.png";
                        }
                        else {
                            Laya.LocalStorage.setItem("soundsound", 1);
                            Laya.SoundManager.stopMusic("sounds/bgm.mp3");
                            this.owner.onSoundBtn.skin = "new/off.png";
                        }
                    });

                    this.owner.startbtn.on(Laya.Event.CLICK, this, () => {
                        YYGGames.showInterstitial(() => {

                            this.owner.startbtn.visible = !1
                            window.kaishiyouxi = !0
                            this.owner.BtnPet.visible = !0
                            this.owner.bgbg.visible = !1
                            this.owner.StatusBarMotorcycle.visible = !0
                            this.owner.StatusBarSpeed.visible = !0
                            this.owner.StatusBarMagnet.visible = !0
                            this.owner.StatusBarDiamond.visible = !0
                            this.owner.HoleInfo.visible = !0

                            YYGGames.gameBox.game1.visible = YYGGames.gameBox.game2.visible = false
                            //插屏
                        })
                    })
                }
            }, {
                key: "onUpdateOneSecond",
                value: function () {
                    // this.btnPet.visible = !!Fw.state.hasPet.length, this.btnMoreGame.visible = G.UMConfig.Value.Moregame && G.GetCustomStatus(G.UMConfig.Custom_Page5X5_Index), 
                    // Fw.state.gameStatus && (Fw.Dialog.has || (a.nextOpenCustomPageDownTime--, console.log("[自动打开原生矩阵页面] 倒计时: ".concat(a.nextOpenCustomPageDownTime, "秒")), 
                    // a.nextOpenCustomPageDownTime > 0 || (a.nextOpenCustomPageDownTime = 999999, Fw.state.gameStatus = !1, 
                    // G.OpenCustomPage(function() {
                    //     a.nextOpenCustomPageDownTime = G.UMConfig.Value.GameViewCustom, Fw.state.gameStatus = !0;
                    // }))));
                }
            }, {
                key: "onDisable",
                value: function () {
                    Fw.offAllCaller(this);
                }
            }, {
                key: "onMouseDown",
                value: function (e) {
                    if (window.kaishiyouxi) {

                        switch (e.target.name) {
                            case "BtnSet":
                                YYGGames.showInterstitial(() => {

                                    Fw.Dialog.open(Q.SetDialog);
                                })
                                break;

                            case "BtnPet":
                                YYGGames.showInterstitial(() => {
                                    Fw.Dialog.open(Q.MyPetDialog);
                                })
                                break;

                            case "BtnMoreGame":
                                G.OpenCustomPage();
                                break;

                            default:
                                this.isMouseDown = !0, this.mouseDownPosition.x = Laya.MouseManager.instance.mouseX,
                                    this.mouseDownPosition.y = Laya.MouseManager.instance.mouseY;
                        }

                    }
                }
            }, {
                key: "onStageMouseUp",
                value: function (e) {
                    this.isMouseDown = !1, Je.I.move.x = 0, Je.I.move.z = 0;
                }
            }, {
                key: "onMouseMove",
                value: function (e) {
                    this.isMouseDown &&
                        (Je.I.move.x = Laya.MouseManager.instance.mouseX - this.mouseDownPosition.x,
                            Je.I.move.z = Laya.MouseManager.instance.mouseY - this.mouseDownPosition.y);
                }
            }, {
                key: "onKeyDown",
                value: function (e) {
                    switch (e.keyCode) {
                        case Laya.Keyboard.W:
                            Je.I.move.z = -1;
                            break;

                        case Laya.Keyboard.S:
                            Je.I.move.z = 1;
                            break;

                        case Laya.Keyboard.A:
                            Je.I.move.x = -1;
                            break;

                        case Laya.Keyboard.D:
                            Je.I.move.x = 1;
                    }
                }
            }, {
                key: "onKeyUp",
                value: function (e) {
                    switch (e.keyCode) {
                        case Laya.Keyboard.W:
                        case Laya.Keyboard.S:
                            Je.I.move.z = 0;
                            break;

                        case Laya.Keyboard.A:
                        case Laya.Keyboard.D:
                            Je.I.move.x = 0;
                    }
                }
            }, {
                key: "playTipsCoin",
                value: function (e, t) {
                    Re.I.camera.worldToViewportPoint(e, this.out), this.point.x = this.out.x, this.point.y = this.out.y,
                        this.point = this.tips.globalToLocal(this.point, !1);
                    var a = Laya.Pool.getItemByCreateFun("tipsCoin", this.tipsCoin.create, this.tipsCoin);
                    this.tips.addChild(a), a.x = this.point.x, a.y = this.point.y, a.text = "+" + z(t),
                        a.scaleX = a.scaleY = this.out.z, Laya.Tween.to(a, {
                            y: this.point.y - 100
                        }, 600, Laya.Ease.circInOut, Laya.Handler.create(this, function () {
                            Laya.Pool.recover("tipsCoin", a), a.removeSelf();
                        }));
                }
            }]), a;
        }(Laya.Script);
        Fe.nextOpenCustomPageDownTime = 999999;
        var Ae, Ne, Ue;
        !function (e) {
            e[e.MetallicGlossTextureAlpha = 0] = "MetallicGlossTextureAlpha", e[e.AlbedoTextureAlpha = 1] = "AlbedoTextureAlpha";
        }(Ae || (Ae = {}));
        var Oe = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                var e;
                return u(this, a), (e = t.call(this))._smoothnessSource = 0, e.setShaderName("PBRBallFlash"),
                    e._shaderValues.setNumber(a.METALLIC, 0), e;
            }
            return d(a, [{
                key: "metallicGlossTexture",
                get: function () {
                    return this._shaderValues.getTexture(a.METALLICGLOSSTEXTURE);
                },
                set: function (e) {
                    e ? this._shaderValues.addDefine(a.SHADERDEFINE_METALLICGLOSSTEXTURE) : this._shaderValues.removeDefine(a.SHADERDEFINE_METALLICGLOSSTEXTURE),
                        this._shaderValues.setTexture(a.METALLICGLOSSTEXTURE, e);
                }
            }, {
                key: "metallic",
                get: function () {
                    return this._shaderValues.getNumber(a.METALLIC);
                },
                set: function (e) {
                    this._shaderValues.setNumber(a.METALLIC, Math.max(0, Math.min(1, e)));
                }
            }, {
                key: "smoothnessSource",
                get: function () {
                    return this._smoothnessSource;
                },
                set: function (e) {
                    e ? this._shaderValues.addDefine(a.SHADERDEFINE_SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA) : this._shaderValues.removeDefine(a.SHADERDEFINE_SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA),
                        this._smoothnessSource = e;
                }
            }, {
                key: "clone",
                value: function () {
                    var e = new a();
                    return this.cloneTo(e), e;
                }
            }], [{
                key: "__init__",
                value: function () {
                    a.SHADERDEFINE_METALLICGLOSSTEXTURE = Laya.Shader3D.getDefineByName("METALLICGLOSSTEXTURE"),
                        a.SHADERDEFINE_SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA = Laya.Shader3D.getDefineByName("SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA");
                    var e = {
                        a_Position: Laya.VertexMesh.MESH_POSITION0,
                        a_Normal: Laya.VertexMesh.MESH_NORMAL0,
                        a_Tangent0: Laya.VertexMesh.MESH_TANGENT0,
                        a_Texcoord0: Laya.VertexMesh.MESH_TEXTURECOORDINATE0,
                        a_Texcoord1: Laya.VertexMesh.MESH_TEXTURECOORDINATE1,
                        a_BoneWeights: Laya.VertexMesh.MESH_BLENDWEIGHT0,
                        a_BoneIndices: Laya.VertexMesh.MESH_BLENDINDICES0,
                        a_WorldMat: Laya.VertexMesh.MESH_WORLDMATRIX_ROW0,
                        a_SimpleTextureParams: Laya.VertexMesh.MESH_SIMPLEANIMATOR
                    }, t = {
                        u_Bones: Laya.Shader3D.PERIOD_CUSTOM,
                        u_MvpMatrix: Laya.Shader3D.PERIOD_SPRITE,
                        u_WorldMat: Laya.Shader3D.PERIOD_SPRITE,
                        u_LightmapScaleOffset: Laya.Shader3D.PERIOD_SPRITE,
                        u_LightMap: Laya.Shader3D.PERIOD_SPRITE,
                        u_LightMapDirection: Laya.Shader3D.PERIOD_SPRITE,
                        u_SimpleAnimatorTexture: Laya.Shader3D.PERIOD_SPRITE,
                        u_SimpleAnimatorParams: Laya.Shader3D.PERIOD_SPRITE,
                        u_SimpleAnimatorTextureSize: Laya.Shader3D.PERIOD_SPRITE,
                        u_ReflectCubeHDRParams: Laya.Shader3D.PERIOD_SPRITE,
                        u_ReflectTexture: Laya.Shader3D.PERIOD_SPRITE,
                        u_SpecCubeProbePosition: Laya.Shader3D.PERIOD_SPRITE,
                        u_SpecCubeBoxMax: Laya.Shader3D.PERIOD_SPRITE,
                        u_SpecCubeBoxMin: Laya.Shader3D.PERIOD_SPRITE,
                        u_CameraPos: Laya.Shader3D.PERIOD_CAMERA,
                        u_View: Laya.Shader3D.PERIOD_CAMERA,
                        u_ProjectionParams: Laya.Shader3D.PERIOD_CAMERA,
                        u_Viewport: Laya.Shader3D.PERIOD_CAMERA,
                        u_ViewProjection: Laya.Shader3D.PERIOD_CAMERA,
                        u_AlphaTestValue: Laya.Shader3D.PERIOD_MATERIAL,
                        u_AlbedoColor: Laya.Shader3D.PERIOD_MATERIAL,
                        u_EmissionColor: Laya.Shader3D.PERIOD_MATERIAL,
                        u_AlbedoTexture: Laya.Shader3D.PERIOD_MATERIAL,
                        u_NormalTexture: Laya.Shader3D.PERIOD_MATERIAL,
                        u_ParallaxTexture: Laya.Shader3D.PERIOD_MATERIAL,
                        u_OcclusionTexture: Laya.Shader3D.PERIOD_MATERIAL,
                        u_EmissionTexture: Laya.Shader3D.PERIOD_MATERIAL,
                        u_Smoothness: Laya.Shader3D.PERIOD_MATERIAL,
                        u_SmoothnessScale: Laya.Shader3D.PERIOD_MATERIAL,
                        u_occlusionStrength: Laya.Shader3D.PERIOD_MATERIAL,
                        u_NormalScale: Laya.Shader3D.PERIOD_MATERIAL,
                        u_ParallaxScale: Laya.Shader3D.PERIOD_MATERIAL,
                        u_TilingOffset: Laya.Shader3D.PERIOD_MATERIAL,
                        u_MetallicGlossTexture: Laya.Shader3D.PERIOD_MATERIAL,
                        u_Metallic: Laya.Shader3D.PERIOD_MATERIAL,
                        u_AmbientColor: Laya.Shader3D.PERIOD_SCENE,
                        u_FogStart: Laya.Shader3D.PERIOD_SCENE,
                        u_FogRange: Laya.Shader3D.PERIOD_SCENE,
                        u_FogColor: Laya.Shader3D.PERIOD_SCENE,
                        u_DirationLightCount: Laya.Shader3D.PERIOD_SCENE,
                        u_LightBuffer: Laya.Shader3D.PERIOD_SCENE,
                        u_LightClusterBuffer: Laya.Shader3D.PERIOD_SCENE,
                        u_ShadowBias: Laya.Shader3D.PERIOD_SCENE,
                        u_ShadowLightDirection: Laya.Shader3D.PERIOD_SCENE,
                        u_ShadowMap: Laya.Shader3D.PERIOD_SCENE,
                        u_ShadowParams: Laya.Shader3D.PERIOD_SCENE,
                        u_ShadowSplitSpheres: Laya.Shader3D.PERIOD_SCENE,
                        u_ShadowMatrices: Laya.Shader3D.PERIOD_SCENE,
                        u_ShadowMapSize: Laya.Shader3D.PERIOD_SCENE,
                        u_SpotShadowMap: Laya.Shader3D.PERIOD_SCENE,
                        u_SpotViewProjectMatrix: Laya.Shader3D.PERIOD_SCENE,
                        u_ShadowLightPosition: Laya.Shader3D.PERIOD_SCENE,
                        u_AmbientSHAr: Laya.Shader3D.PERIOD_SCENE,
                        u_AmbientSHAg: Laya.Shader3D.PERIOD_SCENE,
                        u_AmbientSHAb: Laya.Shader3D.PERIOD_SCENE,
                        u_AmbientSHBr: Laya.Shader3D.PERIOD_SCENE,
                        u_AmbientSHBg: Laya.Shader3D.PERIOD_SCENE,
                        u_AmbientSHBb: Laya.Shader3D.PERIOD_SCENE,
                        u_AmbientSHC: Laya.Shader3D.PERIOD_SCENE,
                        "u_DirectionLight.direction": Laya.Shader3D.PERIOD_SCENE,
                        "u_DirectionLight.color": Laya.Shader3D.PERIOD_SCENE,
                        "u_PointLight.position": Laya.Shader3D.PERIOD_SCENE,
                        "u_PointLight.range": Laya.Shader3D.PERIOD_SCENE,
                        "u_PointLight.color": Laya.Shader3D.PERIOD_SCENE,
                        "u_SpotLight.position": Laya.Shader3D.PERIOD_SCENE,
                        "u_SpotLight.direction": Laya.Shader3D.PERIOD_SCENE,
                        "u_SpotLight.range": Laya.Shader3D.PERIOD_SCENE,
                        "u_SpotLight.spot": Laya.Shader3D.PERIOD_SCENE,
                        "u_SpotLight.color": Laya.Shader3D.PERIOD_SCENE
                    }, i = {
                        s_Cull: Laya.Shader3D.RENDER_STATE_CULL,
                        s_Blend: Laya.Shader3D.RENDER_STATE_BLEND,
                        s_BlendSrc: Laya.Shader3D.RENDER_STATE_BLEND_SRC,
                        s_BlendDst: Laya.Shader3D.RENDER_STATE_BLEND_DST,
                        s_DepthTest: Laya.Shader3D.RENDER_STATE_DEPTH_TEST,
                        s_DepthWrite: Laya.Shader3D.RENDER_STATE_DEPTH_WRITE,
                        s_StencilTest: Laya.Shader3D.RENDER_STATE_STENCIL_TEST,
                        s_StencilWrite: Laya.Shader3D.RENDER_STATE_STENCIL_WRITE,
                        s_StencilRef: Laya.Shader3D.RENDER_STATE_STENCIL_REF,
                        s_StencilOp: Laya.Shader3D.RENDER_STATE_STENCIL_OP
                    }, n = Laya.Shader3D.add("PBRBallFlash", e, t, !0, !0), o = new Laya.SubShader(e, t);
                    n.addSubShader(o), o.addShaderPass('#if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n#include "Lighting.glsl";\r\n#include "LayaUtile.glsl"\r\n#include "Shadow.glsl"\r\n#include "PBRVSInput.glsl";\r\n#include "PBRVertex.glsl";\r\n\r\nvoid main()\r\n{\r\n\tvertexForward();\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n}', '#if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n\r\n#include "Lighting.glsl";\r\n#include "Shadow.glsl"\r\n#include "PBRFSInput.glsl";\r\n#include "LayaPBRBRDF.glsl";\r\n#include "GlobalIllumination.glsl";\r\n#include "PBRCore.glsl";\r\n\r\n\r\nuniform float u_Time;\r\n\r\nvoid main()\r\n{\r\n\tfragmentForward();\r\n\tvec4 white = vec4(1.0,1.0,1.0,1.0);\r\n\tvec4 offset = white-gl_FragColor;\r\n\tfloat speed = 4.0;\r\n    gl_FragColor = offset* (cos(u_Time * speed) * 0.5 + 0.5 ) +gl_FragColor;\r\n}\r\n', i, "Forward"),
                        o.addShaderPass('#include "ShadowCasterVS.glsl"\r\n\r\nvoid main()\r\n{\r\n\tvec4 positionCS =  shadowCasterVertex();\r\n\tgl_Position=remapGLPositionZ(positionCS);\r\n}', '#if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n\r\n#include "ShadowCasterFS.glsl"\r\n\r\nvoid main()\r\n{\r\n\tgl_FragColor=shadowCasterFragment();\r\n}', i, "ShadowCaster"),
                        o.addShaderPass('#if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n\r\n#include "Lighting.glsl";\r\n#include "LayaUtile.glsl"\r\n\r\nattribute vec4 a_Position;\r\nattribute vec3 a_Normal;\r\n\r\n#ifdef BONE\r\n\tconst int c_MaxBoneCount = 24;\r\n\tattribute vec4 a_BoneIndices;\r\n\tattribute vec4 a_BoneWeights;\r\n\tuniform mat4 u_Bones[c_MaxBoneCount];\r\n#endif\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_WorldMat;\r\n#else\r\n\tuniform mat4 u_WorldMat;\r\n#endif\r\nuniform mat4 u_View;\r\nuniform mat4 u_ViewProjection;\r\nuniform vec4 u_ProjectionParams;\r\n\r\n//传入法线\r\nvarying vec4 depthNormals;\r\n\r\n\r\nvec4 depthNormalsVertex()\r\n{\r\n\tmat4 worldMat;\r\n\t#ifdef GPU_INSTANCE\r\n\t\tworldMat = a_WorldMat;\r\n\t#else\r\n\t\tworldMat = u_WorldMat;\r\n\t#endif\r\n\t\r\n\t#ifdef BONE\r\n\t\tmat4 skinTransform;\r\n\t \t#ifdef SIMPLEBONE\r\n\t\t\tfloat currentPixelPos;\r\n\t\t\t#ifdef GPU_INSTANCE\r\n\t\t\t\tcurrentPixelPos = a_SimpleTextureParams.x+a_SimpleTextureParams.y;\r\n\t\t\t#else\r\n\t\t\t\tcurrentPixelPos = u_SimpleAnimatorParams.x+u_SimpleAnimatorParams.y;\r\n\t\t\t#endif\r\n\t\t\tfloat offset = 1.0/u_SimpleAnimatorTextureSize;\r\n\t\t\tskinTransform =  loadMatFromTexture(currentPixelPos,int(a_BoneIndices.x),offset) * a_BoneWeights.x;\r\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.y),offset) * a_BoneWeights.y;\r\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.z),offset) * a_BoneWeights.z;\r\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.w),offset) * a_BoneWeights.w;\r\n\t\t#else\r\n\t\t\tskinTransform =  u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\r\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\r\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\r\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\r\n\t\t#endif\r\n\t\tworldMat = worldMat * skinTransform;\r\n\t#endif\r\n\r\n\tvec4 positionWS = worldMat * a_Position;\r\n\r\n\tmat3 worldInvMat;\r\n\t#ifdef BONE\r\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat*skinTransform));\r\n\t#else\r\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat));\r\n\t#endif  \r\n\r\n\tvec3 normalWS = normalize(a_Normal*worldInvMat);//if no normalize will cause precision problem\r\n\t//depthNormals.xyz = normalWS;\r\n\t//存储View空间法线\r\n\tvec3 normalVS = mat3(u_View) * normalWS;\r\n\tdepthNormals.xyz = normalVS;\r\n\t\r\n\tvec4 positionCS = u_ViewProjection * positionWS;\r\n\tdepthNormals.w = (positionCS.z * 2.0 - positionCS.w)*u_ProjectionParams.w;\r\n\t\r\n    return positionCS;\r\n}\r\n\r\nvoid main()\r\n{\r\n\tvec4 positionCS =  depthNormalsVertex();\r\n\tgl_Position=remapGLPositionZ(positionCS);\r\n}', '#if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n#include "DepthNormalUtil.glsl";\r\n\r\nvarying vec4 depthNormals;\r\n\r\nvoid main()\r\n{\r\n\tgl_FragColor=depthNormalsFragment(depthNormals);\r\n}', i, "DepthNormal");
                }
            }]), a;
        }(Laya.PBRMaterial);
        Oe.METALLICGLOSSTEXTURE = Laya.Shader3D.propertyNameToID("u_MetallicGlossTexture"),
            Oe.METALLIC = Laya.Shader3D.propertyNameToID("u_Metallic");
        var He = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                var e;
                return u(this, a), (e = t.call(this)).v3_0 = new Laya.Vector3(), e.v3_1 = new Laya.Vector3(),
                    e.isTween = !1, e.status = Ne.Recover, e.position = new Laya.Vector3(), e.island = 0,
                    e.block = 0, e;
            }
            return d(a, [{
                key: "val",
                get: function () {
                    return this.island + 1;
                }
            }, {
                key: "init",
                value: function () {
                    this.status = Ne.NotDig, this.collider = this.owner.getComponent(Laya.PhysicsCollider),
                        this.collider.collisionGroup = ae.Ore, this.collider.canCollideWith = ae.Player | ae.Worker | ae.Magnet,
                        this.collider.enabled = !1;
                }
            }, {
                key: "onEnable",
                value: function () { }
            }, {
                key: "onLateUpdate",
                value: function () {
                    this.isTween && (Laya.Vector3.lerp(this.position, this.owner.transform.position, .15, this.position),
                        this.owner.transform.position = this.position);
                }
            }, {
                key: "materialNotDig",
                get: function () {
                    return a.getMaterialNotDig(this.island);
                }
            }, {
                key: "material",
                get: function () {
                    return a.getMaterial(this.island);
                }
            }, {
                key: "materialFall",
                get: function () {
                    return a.getMaterialFall(this.island);
                }
            }, {
                key: "setMaterial",
                value: function () {
                    this.status === Ne.NotDig ? this.owner.meshRenderer.material = this.materialNotDig : this.status === Ne.Fall ? this.owner.meshRenderer.material = this.materialFall : this.owner.meshRenderer.material = this.material;
                }
            }, {
                key: "fall",
                value: function (e) {
                    var t = this;
                    Laya.Tween.clearAll(this.owner.transform), this.status = Ne.Fall, this.setMaterial(),
                        this.owner.transform.position.cloneTo(this.v3_0), this.owner.scene.addChild(this.owner),
                        this.owner.transform.position = this.v3_0;
                    var i = this.owner.transform.localPositionY + Math.random() + .5, n = e + a.radius;
                    Laya.Tween.to(this.owner.transform, {
                        localPositionY: i
                    }, 300, Laya.Ease.circOut, Laya.Handler.create(this, function () {
                        Laya.Tween.to(t.owner.transform, {
                            localPositionY: n
                        }, 300, Laya.Ease.circIn, Laya.Handler.create(t, function () {
                            t.collider.enabled = !0;
                        }));
                    })), Fw.on(K.FallOre + "_" + this.island + "_" + this.block, this, this.fall2);
                }
            }, {
                key: "fall2",
                value: function (e) {
                    var t = this;
                    Laya.Tween.clearAll(this.owner.transform), this.owner.transform.position.cloneTo(this.v3_0);
                    var i = this.owner.transform.localPositionY + .5 * Math.random() + .25, n = e + a.radius;
                    Laya.Tween.to(this.owner.transform, {
                        localPositionY: i
                    }, 300, Laya.Ease.circOut, Laya.Handler.create(this, function () {
                        Laya.Tween.to(t.owner.transform, {
                            localPositionY: n
                        }, 300, Laya.Ease.circIn, Laya.Handler.create(t, function () {
                            t.collider.enabled = !0;
                        }));
                    }));
                }
            }, {
                key: "put",
                value: function (e) {
                    var t = this;
                    Laya.Tween.clearAll(this.owner.transform), Fw.offAllCaller(this), this.status = Ne.Put,
                        this.collider.enabled = !1, this.setMaterial(), this.owner.transform.position.cloneTo(this.v3_0),
                        e.addChild(this.owner), this.owner.transform.position = this.v3_0;
                    var i = e.numChildren - 1, n = Math.floor(i / 4), o = i % 4;
                    this.v3_1.x = .8 * a.site[o][0] - .325, this.v3_1.z = .8 * a.site[o][1], this.v3_1.y = .8 * a.radius * 2 * n,
                        this.isTween = !0, this.owner.transform.position.cloneTo(this.position), Laya.Tween.to(this.owner.transform, {
                            localPositionX: this.v3_1.x,
                            localPositionY: this.v3_1.y + Math.random() + .5,
                            localPositionZ: this.v3_1.z + .5 * Math.random() + .25
                        }, 300, Laya.Ease.circInOut, Laya.Handler.create(this, function () {
                            Laya.Tween.to(t.owner.transform, {
                                localPositionX: t.v3_1.x,
                                localPositionY: t.v3_1.y,
                                localPositionZ: t.v3_1.z
                            }, 300, Laya.Ease.circInOut, Laya.Handler.create(t, function () {
                                t.isTween = !1;
                            }));
                        }));
                }
            }, {
                key: "recover",
                value: function (e) {
                    var t = this;
                    Laya.Tween.clearAll(this.owner.transform), Fw.offAllCaller(this), this.status = Ne.Recover,
                        this.collider.enabled = !1, this.owner.transform.position.cloneTo(this.v3_0), this.owner.scene.addChild(this.owner),
                        this.owner.transform.position = this.v3_0, e.cloneTo(this.v3_1), this.isTween = !0,
                        this.owner.transform.position.cloneTo(this.position), Laya.Tween.to(this.owner.transform, {
                            localPositionX: this.v3_1.x + 2 * Math.random() * (Math.random() > .5 ? -1 : 1),
                            localPositionY: this.v3_1.y + (2 * Math.random() + 2) * (Math.random() > .5 ? -1 : 1),
                            localPositionZ: this.v3_1.z + 2 * Math.random() * (Math.random() > .5 ? -1 : 1)
                        }, 500 * Math.random() + 100, Laya.Ease.circInOut, Laya.Handler.create(this, function () {
                            var e = 500 * Math.random() + 100;
                            Laya.Tween.to(t.owner.transform, {
                                localPositionX: t.v3_1.x,
                                localPositionY: t.v3_1.y,
                                localPositionZ: t.v3_1.z
                            }, e, Laya.Ease.circInOut, Laya.Handler.create(t, function () {
                                t.isTween = !1, a.Recover(t.owner);
                            })), Laya.timer.once(.2 * e + .8 * e * Math.random(), t, function () {
                                t.tips(), P.I.setInc(t.val);
                            });
                        }));
                }
            }, {
                key: "recoverBuild",
                value: function (e) {
                    var t = this;
                    Laya.Tween.clearAll(this.owner.transform), Fw.offAllCaller(this), this.status = Ne.Recover,
                        this.collider.enabled = !1, this.owner.transform.position.cloneTo(this.v3_0), this.owner.scene.addChild(this.owner),
                        this.owner.transform.position = this.v3_0, e.cloneTo(this.v3_1), this.isTween = !0,
                        this.owner.transform.position.cloneTo(this.position), Laya.Tween.to(this.owner.transform, {
                            localPositionX: this.v3_1.x + 2 * Math.random() * (Math.random() > .5 ? -1 : 1),
                            localPositionY: this.v3_1.y + (2 * Math.random() + 2) * (Math.random() > .5 ? -1 : 1),
                            localPositionZ: this.v3_1.z + 2 * Math.random() * (Math.random() > .5 ? -1 : 1)
                        }, 500 * Math.random() + 100, Laya.Ease.circInOut, Laya.Handler.create(this, function () {
                            var e = 500 * Math.random() + 100;
                            Laya.Tween.to(t.owner.transform, {
                                localPositionX: t.v3_1.x,
                                localPositionY: t.v3_1.y,
                                localPositionZ: t.v3_1.z
                            }, e, Laya.Ease.circInOut, Laya.Handler.create(t, function () {
                                t.isTween = !1, a.Recover(t.owner);
                            })), Laya.timer.once(.2 * e + .8 * e * Math.random(), t, function () {
                                le.I.getIsland(t.island).buildComplete++, !Fw.Dialog.has && le.I.getIsland(t.island).buildComplete >= ue.total && Fw.Dialog.open(Q.UnlockBuildDialog),
                                    Fw.emit(K.RefreshBuildComplete);
                            });
                        }));
                }
            }, {
                key: "tips",
                value: function () {
                    Fe.I.playTipsCoin(this.owner.transform.position, this.val);
                }
            }], [{
                key: "Create",
                value: function () {
                    var e, t;
                    return this.HidePool.length ? t = (e = this.HidePool.shift()).getComponent(a) : (t = (e = Fw.D3.createSprite3D(w + "Ore.lh")).addComponent(a),
                        e.sc = t), t.init(), e.active = !0, this.ShowPool.push(e), e;
                }
            }, {
                key: "Recover",
                value: function (e) {
                    e.active = !1;
                    var t = e.getComponent(a);
                    Laya.Tween.clearAll(e.transform), Fw.offAllCaller(t), t.status = Ne.Recover;
                    var i = this.ShowPool.indexOf(e);
                    -1 !== i && this.ShowPool.splice(i, 1), this.HidePool.push(e);
                }
            }, {
                key: "RecoverIsland2Fall",
                value: function (e) {
                    for (var t = this.ShowPool.length - 1; t >= 0; --t) {
                        var a = this.ShowPool[t].sc;
                        a.island === e && a.status === Ne.Fall && this.Recover(this.ShowPool[t]);
                    }
                }
            }, {
                key: "RecoverFall",
                value: function (e) {
                    for (var t = null, i = 0, n = 0, o = this.ShowPool.length; n < o; n++) {
                        var r = this.ShowPool[n].sc;
                        r.island === e && r.status === Ne.Fall && (i++, t || (t = this.ShowPool[n]));
                    }
                    i > a.MaxFall && t && this.Recover(t);
                }
            }, {
                key: "getOneFallOre2Island",
                value: function (e) {
                    for (var t = [], a = 0, i = this.ShowPool.length; a < i; a++) {
                        var n = this.ShowPool[a].sc;
                        n.island === e && n.status === Ne.Fall && t.push(a);
                    }
                    return t.length ? this.ShowPool[Y(t)] : null;
                }
            }, {
                key: "getMaterialNotDig",
                value: function (e) {
                    return Fw.D3.getResMaterial(g + "LV" + (e % he.total + 1) + "/dixiakuangmian.lmat");
                }
            }, {
                key: "getMaterial",
                value: function (e) {
                    return Fw.D3.getResMaterial(g + "LV" + (e % he.total + 1) + "/yingbi.lmat");
                }
            }, {
                key: "getMaterialFall",
                value: function (e) {
                    var t = e % he.total;
                    if (!this.materialFallList[t]) {
                        var a = new Oe();
                        a.albedoColor = this.getMaterial(e).albedoColor, this.materialFallList[t] = a;
                    }
                    return this.materialFallList[t];
                }
            }]), a;
        }(Laya.Script3D);
        He.MaxFall = 50, He.ShowPool = [], He.HidePool = [], He.radius = .1125, He.materialFallList = [],
            He.site = [[-He.radius, -He.radius], [-He.radius, He.radius], [He.radius, -He.radius], [He.radius, He.radius]],
            function (e) {
                e[e.NotDig = 0] = "NotDig", e[e.Fall = 1] = "Fall", e[e.Put = 2] = "Put", e[e.Recover = 3] = "Recover";
            }(Ne || (Ne = {}));
        var Ge = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                var e;
                return u(this, a), (e = t.call(this)).name = "", e.isUnlockAct = !1, e;
            }
            return d(a, [{
                key: "runtime",
                get: function () {
                    return this.island.runtime;
                }
            }, {
                key: "area",
                get: function () {
                    return this.island["area".concat(this.name)];
                }
            }, {
                key: "bridge",
                get: function () {
                    return this.island["bridge".concat(this.name)];
                }
            }, {
                key: "unlockShort",
                get: function () {
                    return this.runtime["unlock".concat(this.name, "Short")];
                },
                set: function (e) {
                    this.runtime["unlock".concat(this.name, "Short")] = e;
                }
            }, {
                key: "isArea",
                get: function () {
                    return this.runtime["isArea".concat(this.name)];
                },
                set: function (e) {
                    console.log("isArea".concat(this.name)), this.runtime["isArea".concat(this.name)] = e;
                }
            }, {
                key: "setNum",
                value: function (e) {
                    this.num.setVal(Math.round(e));
                }
            }, {
                key: "onAwake",
                value: function () {
                    this.name = this.owner.name.substring(7), this.num = this.owner.getChildByName("Num").addComponent(Te),
                        console.log("name", this.name);
                }
            }, {
                key: "onEnable",
                value: function () {
                    var e = this;
                    this.isUnlockAct = !1, Laya.timer.frameOnce(1, this, function () {
                        e.refresh();
                    });
                }
            }, {
                key: "onCollisionStay",
                value: function (e) {
                    var t = this;
                    if (e.other.collisionGroup === ae.Player) {
                        console.log("碰撞555？？？？？", e.other.collisionGroup)
                        if (this.isUnlockAct) return;
                        this.isUnlockAct = !0;
                        var a = this.unlockShort;
                        P.I.num < this.unlockShort ? (this.unlockShort -= P.I.num, P.I.num = 0) : (P.I.setDec(this.unlockShort),
                            this.unlockShort = 0, this.isArea = !0);
                        var i = this.unlockShort, n = 0;
                        Laya.timer.frameLoop(1, this, function e() {
                            if (++n > 100) {
                                if (Laya.timer.clear(t, e), t.isUnlockAct = !1, !t.isArea) return;
                                t.owner.active = !1;
                                var o = t.bridge.transform.localPositionY;
                                return t.bridge.transform.localPositionY = o - 50, t.bridge.active = !0, void Laya.Tween.to(t.bridge.transform, {
                                    localPositionY: o
                                }, 600, Laya.Ease.circOut, Laya.Handler.create(t, function () {
                                    var e = t.area.transform.localPositionY;
                                    t.area.transform.localPositionY = e - 50, t.area.active = !0, Laya.Tween.to(t.area.transform, {
                                        localPositionY: e
                                    }, 600, Laya.Ease.circOut, Laya.Handler.create(t, function () {
                                        t.island.refreshArea(), 100 * Math.random() < G.UMConfig.Value.CuttingStatus ? Fw.Dialog.open("gameui/dialog/CuttingDialog.scene", !0, {}, Laya.Handler.create(t, function () {
                                            G.UMConfig.Value.SceneCustom && G.OpenCustomPage();
                                        })) : G.UMConfig.Value.SceneCustom && G.OpenCustomPage();
                                    }));
                                }));
                            }
                            t.setNum(a + (i - a) / 100 * n);
                        });
                    }
                }
            }, {
                key: "refresh",
                value: function () {
                    this.setNum(this.unlockShort);
                }
            }]), a;
        }(Laya.Script3D), We = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                return u(this, a), t.call(this);
            }
            return d(a, [{
                key: "onEnable",
                value: function () {
                    a.material || (a.material = this.owner.meshRenderer.material);
                }
            }, {
                key: "onUpdate",
                value: function () {
                    a.update(), this.owner.meshRenderer.material = a.material;
                }
            }], [{
                key: "update",
                value: function () {
                    var e;
                    Laya.timer.currTimer < this.next0 || (this.next0 = Laya.timer.currTimer + 30, this.material.tilingOffset.w += this.speedW,
                        this.speedZ0 = (e = this.speedZ0) + .015 * (this.speedZ1 - e), this.material.tilingOffset.z += this.speedZ0,
                        Laya.timer.currTimer < this.next1 || (this.next1 = Laya.timer.currTimer + 1e3 + 1e3 * Math.random(),
                            this.speedZ1 = .05 * (Math.random() - .5)));
                }
            }]), a;
        }(Laya.Script3D);
        We.next0 = 0, We.next1 = 0, We.speedW = .05, We.speedZ0 = .01, We.speedZ1 = .01;
        var je = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                var e;
                return u(this, a), (e = t.call(this)).playerSc = null, e;
            }
            return d(a, [{
                key: "isFull",
                get: function () {
                    return this.playerSc.isFull;
                }
            }, {
                key: "luokuang",
                get: function () {
                    return this.playerSc.luokuang;
                }
            }, {
                key: "onAwake",
                value: function () {
                    console.log(this.owner), this.rigidBody = this.owner.getComponent(Laya.Rigidbody3D),
                        this.rigidBody.collisionGroup = ae.Magnet, this.rigidBody.canCollideWith = ae.Ore || ae.Diamond;
                }
            }, {
                key: "onEnable",
                value: function () { }
            }, {
                key: "onTriggerStay",
                value: function (e) {
                    if (e.collisionGroup === ae.Ore) {
                        if (this.isFull) return;
                        e.owner.getComponent(He).put(this.luokuang);
                    } else e.collisionGroup === ae.Diamond && e.owner.getComponent(Ee).recover();
                }
            }]), a;
        }(Laya.Script3D), Ye = function (e) {
            h(i, e);
            var a = c(i);
            function i() {
                var e;
                return u(this, i), (e = a.call(this)).index = 0, e.island = null, e.magnetSc = null,
                    e.move = new Laya.Vector3(0, 0, 0), e.v3_0 = new Laya.Vector3(), e.v3_1 = new Laya.Vector3(),
                    e.v3_2 = new Laya.Vector3(), e.v3_3 = new Laya.Vector3(), e.v3_4 = new Laya.Vector3(),
                    e.gravity = new Laya.Vector3(), e.position = new Laya.Vector3(), e.prePosition = new Laya.Vector3(),
                    e.isGrounded = !0, e.downRay = new Laya.Ray(new Laya.Vector3(), v), e.downHitResult = new Laya.HitResult(),
                    e.actionList = [], e.action = null, e.mining = new Me(te.Move, [new Laya.Vector3(), new Laya.Vector3()]),
                    e.curAni = $.Idle, e.delayChan = 0, e;
            }
            return d(i, [{
                key: "runtime",
                get: function () {
                    return this.island.runtime.workerList[this.index];
                }
            }, {
                key: "elevatorSite",
                get: function () {
                    return this.island.elevatorSite[this.index + 1];
                }
            }, {
                key: "luoKunagOreTotal",
                get: function () {
                    return this.luokuang ? this.luokuang.numChildren : 0;
                }
            }, {
                key: "isFull",
                get: function () {
                    return this.luoKunagOreTotal >= ce.getWorkerPower(this.runtime.lv);
                }
            }, {
                key: "speed",
                get: function () {
                    return 3 * (1 + (J.I.skill.speed.isUsed ? 1 : 0));
                }
            }, {
                key: "onAwake",
                value: function () {
                    this.body = this.owner.getChildByName("Body"), this.animator = this.body.getComponent(Laya.Animator),
                        this.chan = findChild("chan", this.body), this.luokuang = findChild("luokuang", this.body),
                        this.magnetNode = this.owner.getChildByName("FX_citie"), this.magnetSc = this.magnetNode.addComponent(je),
                        this.magnetSc.playerSc = this, this.character = this.owner.addComponent(Laya.CharacterController);
                    var e = new Laya.CapsuleColliderShape(.5, 1.7, Laya.CapsuleColliderShape.SHAPEORIENTATION_UPY);
                    e.localOffset = new Laya.Vector3(0, .85, 0), this.character.stepHeight = .001, this.character.maxSlope = 45,
                        this.character.rollingFriction = 1, this.character.colliderShape = e, this.character.collisionGroup = ae.Worker,
                        this.character.canCollideWith = ae.Wall | ae.Land | ae.FirstBlock | ae.Block | ae.Ore | ae.Diamond | ae.Recover | ae.RecoverBuild,
                        this.gravity = this.character.gravity.clone();
                }
            }, {
                key: "onEnable",
                value: function () {
                    this.owner.transform.position.cloneTo(this.position);
                }
            }, {
                key: "onTriggerEnter",
                value: function (e) {

                    if (e.collisionGroup === ae.Recover) {

                        var a;
                        if (!this.luokuang.numChildren) return;
                        for (var i = this.luokuang.numChildren - 1; i >= 0; --i) this.luokuang.getChildAt(i).getComponent(He).recover(e.owner.transform.position);
                        this.action = null, this.actionList.length = 0, (a = this.actionList).push.apply(a, t(this.island.gotoRecover2Hole()));
                    } else if (e.collisionGroup === ae.RecoverBuild) {

                        var n;
                        if (!this.luokuang.numChildren) return;
                        for (var o = this.luokuang.numChildren - 1; o >= 0; --o) this.luokuang.getChildAt(o).getComponent(He).recoverBuild(e.owner.transform.position);
                        this.action = null, this.actionList.length = 0, (n = this.actionList).push.apply(n, t(this.island.gotoBuildRecover2Hole()));
                    }
                }
            }, {
                key: "onTriggerStay",
                value: function (e) {
                    if (e.collisionGroup === ae.Block) {
                        if (e.owner.active = !1, Fw.emit(K.CheckBlock), Fw.emit(K.FallOre + "_" + this.island.index + "_" + e.owner.blockIndex, this.owner.transform.position.y),
                            this.playAni($.Chan), Fw.emit(K.FxPlayBlock, [e.owner.transform.position, e.owner.transform.rotationEuler, "dixiakuangmian"]),
                            !e.owner.numChildren) return;
                        var a, i = r(e.owner.ore);
                        try {
                            for (i.s(); !(a = i.n()).done;) {
                                a.value.getComponent(He).fall(this.owner.transform.position.y);
                            }
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            i.e(e);
                        } finally {
                            i.f();
                        }
                        e.owner.ore.length = 0;
                        var n, o = r(e.owner.diamond);
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                n.value.getComponent(Ee).fall(this.owner.transform.position.y);
                            }
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            o.e(e);
                        } finally {
                            o.f();
                        }
                        e.owner.diamond.length = 0, this.initMining();
                    } else if (e.collisionGroup === ae.FirstBlock) e.owner.active = !1, Fw.emit(K.CheckFirstBlock),
                        this.playAni($.Chan), Fw.emit(K.FxPlayBlock, [e.owner.transform.position, e.owner.transform.rotationEuler, "kuangmian"]),
                        this.initMining(); else if (e.collisionGroup === ae.Ore) {
                            var s;
                            if (this.isFull) return this.action && this.action.type === te.Mining && (this.action = null),
                                void (this.actionList.length || (s = this.actionList).push.apply(s, t(this.runtime.isBuild ? this.island.gotoHole2BuildRecover(this.owner.transform.position) : this.island.gotoHole2Recover(this.owner.transform.position))));
                            e.owner.getComponent(He).put(this.luokuang), this.initMining();
                        } else e.collisionGroup === ae.Diamond && (e.owner.getComponent(Ee).recover(), this.initMining());
                }
            }, {
                key: "onLateUpdate",
                value: function () {
                    if (Fw.state.gameStatus && this.island.index === Fw.state.island) {
                        var e = 16 / 1e3;
                        if (!this.action) {
                            var a;
                            if (!this.actionList.length) return void (a = this.actionList).push.apply(a, t(this.island.gotoBuildRecover2Hole()));
                            if (this.elevatorSite && (this.elevatorSite.active = !1), this.action = this.actionList.shift(),
                                this.action.type === te.Mining) this.initMining(); else if (this.action.type === te.Move) {
                                    var i = Laya.Vector3.distance(this.action.start, this.action.end);
                                    this.action.complete = 0, this.action.total = i / this.speed;
                                } else if (this.action.type === te.Stair) {
                                    var n = Laya.Vector3.distance(this.action.start, this.action.end);
                                    this.action.complete = 0, this.action.total = n / (.75 * this.speed);
                                } else if (this.action.type === te.Elevator) {
                                    var o = Laya.Vector3.distance(this.action.start, this.action.end);
                                    this.action.complete = 0, this.action.total = o / (2 * this.speed), this.elevatorSite && (this.elevatorSite.active = !0,
                                        this.elevatorSite.transform.localPositionY = this.owner.transform.position.y - .3);
                                }
                        }
                        switch (this.action.type) {
                            case te.Mining:
                                this.character.move(p), this.character.gravity = this.gravity, this.playAni($.Run),
                                    this.body.transform.lookAt(this.mining.end, L, !1, !1), this.body.transform.localRotationEulerX = 0,
                                    this.body.transform.localRotationEulerZ = 0, this.body.transform.localRotationEulerY *= -1,
                                    this.mining.complete += e, this.owner.transform.position = this.mining.position,
                                    this.mining.complete >= this.mining.total && this.initMining();
                                break;

                            case te.Move:
                                this.character.move(p), this.character.gravity = this.gravity, this.playAni($.Run),
                                    this.body.transform.lookAt(this.action.end, L, !1, !1), this.body.transform.localRotationEulerX = 0,
                                    this.body.transform.localRotationEulerZ = 0, this.body.transform.localRotationEulerY *= -1,
                                    this.action.complete += e, this.owner.transform.position = this.action.position,
                                    this.action.complete >= this.action.total && (this.action = null);
                                break;

                            case te.Stair:
                                this.character.move(p), this.character.gravity = p, this.playAni(this.action.start.y > this.action.end.y ? $.Down : $.Up),
                                    this.owner.transform.localRotationEuler = k, this.body.transform.localRotationEuler = p,
                                    this.action.complete += e, this.owner.transform.position = this.action.position,
                                    this.action.complete >= this.action.total && (this.action = null);
                                break;

                            case te.Elevator:
                                this.character.move(p), this.character.gravity = p, this.playAni($.Idle), this.owner.transform.localRotationEuler = k,
                                    this.body.transform.localRotationEuler = p, this.action.complete += e, this.owner.transform.position = this.action.position,
                                    this.elevatorSite && (this.elevatorSite.transform.localPositionY = this.owner.transform.position.y - .3),
                                    this.action.complete >= this.action.total && (this.action = null);
                                break;

                            case te.Portal:
                                this.owner.transform.localRotationEuler = k, this.body.transform.localRotationEuler = p,
                                    this.owner.transform.position = this.action.end, this.action = null;
                        }
                        this.luokuang.active = !!this.luokuang.numChildren, this.magnetNode.active = J.I.skill.magnet.isUsed;
                    }
                }
            }, {
                key: "initMining",
                value: function () {
                    this.owner.transform.position.cloneTo(this.mining.path[0]), this.mining.complete = 0;
                    var e = He.getOneFallOre2Island(Fw.state.island), t = Ee.getOneFall2Island(Fw.state.island);
                    if (e && Math.random() < .75 && e.transform.position.cloneTo(this.mining.path[1]),
                        t && Math.random() < .75) t.transform.position.cloneTo(this.mining.path[1]); else if (this.island.hole.active) {
                            for (var a = [], i = 0, n = this.island.holeBlock.numChildren; i < n; i++) this.island.holeBlock.getChildAt(i).active && a.push(i);
                            a.length && this.island.holeBlock.getChildAt(Y(a)).transform.position.cloneTo(this.mining.path[1]);
                        } else if (this.island.holeFirst.active) {
                            for (var o = [], r = 0, s = this.island.holeFirstBlock.numChildren; r < s; r++) this.island.holeFirstBlock.getChildAt(r).active && o.push(r);
                            o.length && this.island.holeFirstBlock.getChildAt(Y(o)).transform.position.cloneTo(this.mining.path[1]);
                        }
                    var l = Laya.Vector3.distance(this.mining.start, this.mining.end);
                    this.mining.total = l / this.speed;
                }
            }, {
                key: "playAni",
                value: function (e) {
                    Laya.timer.currTimer < this.delayChan || e !== this.curAni && (this.curAni = e,
                        this.animator.crossFade(e, .03, 0, 0), e === $.Chan ? (this.animator.speed = 1.5,
                            this.delayChan = Laya.timer.currTimer + 16 / 30 * 1e3 / this.animator.speed, this.chan.active = !0) : (this.animator.speed = 1,
                                this.chan.active = !1));
                }
            }]), i;
        }(Laya.Script3D), ze = function (e) {
            h(i, e);
            var a = c(i);
            function i() {
                var e;
                return u(this, i), (e = a.call(this)).land = [], e.stairList = [], e.elevatorSite = [],
                    e.dimianList = [], e.unlockMain = null, e.bridgeMain = null, e.areaMain = null,
                    e.recover = null, e.numRecover = null, e.numHole = null, e.numHoleTotal = null,
                    e.treeList = [], e.motorcycle = null, e.board = {
                        ban: [],
                        ore: []
                    }, e.unlockWorker = null, e.bridgeWorker = null, e.areaWorker = null, e.workerList = [],
                    e.unlockBuild = null, e.bridgeBuild = null, e.areaBuild = null, e.numBuild = null,
                    e.numBuildShort = null, e.recoverBuildCollider = null, e.unlockPet = null, e.bridgePet = null,
                    e.areaPet = null, e.eggList = [], e.index = -1, e.runtime = null, e.style = null,
                    e.playerYIndex = 0, e.grasslandList = [], e.landList = [], e.roadList = [], e;
            }
            return d(i, [{
                key: "onAwake",
                value: function () {
                    this.areaMain = this.owner.getChildByName("Area-Main"), this.areaWorker = this.owner.getChildByName("Area-Worker"),
                        this.areaBuild = this.owner.getChildByName("Area-Build"), this.areaPet = this.owner.getChildByName("Area-Pet"),
                        this.bridgeWorker = this.owner.getChildByName("Bridge-Worker"), this.bridgeBuild = this.owner.getChildByName("Bridge-Build"),
                        this.bridgePet = this.owner.getChildByName("Bridge-Pet"), this.bridgeMain = this.owner.getChildByName("Bridge-Main"),
                        this.unlockWorker = this.owner.getChildByName("Unlock-Worker"), this.unlockBuild = this.owner.getChildByName("Unlock-Build"),
                        this.unlockPet = this.owner.getChildByName("Unlock-Pet"), this.unlockMain = this.owner.getChildByName("Unlock-Main"),
                        this.holeFirst = this.areaMain.getChildByName("HoleFirst"), console.log(" this.holeFirst", this.holeFirst),
                        this.holeFirstBlock = this.holeFirst.getChildByName("Block"), console.log(" this.holeFirstBlock", this.holeFirstBlock),
                        this.hole = this.areaMain.getChildByName("Hole"), this.holeBlock = this.hole.getChildByName("Block"),
                        this.holeFront = this.hole.getChildByName("Front"), this.holeFrontLand = this.holeFront.getChildByName("land"),
                        this.stair = this.areaMain.getChildByName("Stair"), this.stairUp = this.stair.getChildByName("Up"),
                        this.stairDown = this.stair.getChildByName("Down"), this.elevator = this.areaMain.getChildByName("Elevator"),
                        this.elevatorBody = this.elevator.getChildByName("Body"), this.elevatorUp = this.elevator.getChildByName("Up"),
                        this.elevatorDown = this.elevator.getChildByName("Down");
                    for (var e = 0; e < 5; e++) {
                        var t = this.elevator.getChildByName("Site" + e);
                        this.elevatorSite.push(t), t.active = !1;
                    }
                    this.portal = this.areaMain.getChildByName("Portal"), this.portalUp = this.portal.getChildByName("Up"),
                        this.portalDown = this.portal.getChildByName("Down");
                    for (var a = 0; a < 3; a++) {
                        var i = this.areaMain.getChildByName("land" + a), n = i.getChildByName("Num0");
                        i.num0 = n.addComponent(Te);
                        var o = i.getChildByName("Num1");
                        i.num1 = o.addComponent(Te), this.land[a] = i, this.stairList[a] = this.land[a].getChildByName("Stair");
                    }
                    this.recover = this.areaMain.getChildByName("Recover"), this.eggList.length = 0,
                        this.eggList.push(this.areaPet.getChildByName("egg0")), this.eggList.push(this.areaPet.getChildByName("egg1")),
                        this.treeList.length = 0, this.treeList.push(this.areaMain.getChildByName("tree0")),
                        this.treeList.push(this.areaMain.getChildByName("tree1")), this.treeList.push(this.areaBuild.getChildByName("tree2")),
                        this.treeList.push(this.areaBuild.getChildByName("tree3")), this.path = this.owner.getChildByName("Path");
                    var s = this.areaBuild.getChildByName("Build");
                    this.buildList = s.getChildByName("List"), this.buildOre = s.getChildByName("Ore"),
                        this.buildBottom = this.areaBuild.getChildByName("buildBottom").getChildByName("bianse"),
                        this.oreGroup = this.areaMain.getChildByName("OreGroup");
                    for (var l = 0, h = [this.areaMain.getChildByName("board1"), this.areaMain.getChildByName("board2"), this.areaBuild.getChildByName("board3")]; l < h.length; l++) {
                        var c = h[l];
                        this.board.ban.push(c.getChildByName("ban")), this.board.ore.push(c.getChildByName("ore"));
                    }
                    for (var u = 0; u < 4; u++) {
                        var d = this.owner.getChildByName("Worker".concat(u)), y = d.addComponent(Ye);
                        y.island = this, y.index = u, this.workerList.push(d), d.active = !1;
                    }
                    this.grasslandList = [this.areaMain.getChildByName("grassland"), this.holeFirst.getChildByName("grassland"), this.areaBuild.getChildByName("grassland"), this.areaWorker.getChildByName("grassland"), this.areaPet.getChildByName("grassland"), this.bridgeBuild.getChildByName("grassland"), this.bridgeMain.getChildByName("grassland"), this.bridgeWorker.getChildByName("grassland"), this.bridgePet.getChildByName("grassland")],
                        this.roadList = [this.areaMain.getChildByName("road"), this.bridgeWorker.getChildByName("road"), this.bridgeBuild.getChildByName("road"), this.bridgePet.getChildByName("road"), this.areaWorker.getChildByName("road"), this.areaBuild.getChildByName("road"), this.areaPet.getChildByName("road")],
                        this.landList = [this.areaBuild.getChildByName("land"), this.areaWorker.getChildByName("land"), this.areaPet.getChildByName("land"), this.bridgeBuild.getChildByName("land"), this.bridgeMain.getChildByName("land"), this.bridgeWorker.getChildByName("land"), this.bridgePet.getChildByName("land"), this.holeFirst.getChildByName("land")];
                    var m, f = r(this.land);
                    try {
                        for (f.s(); !(m = f.n()).done;) {
                            var w = m.value;
                            this.landList.push(w);
                        }
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        f.e(e);
                    } finally {
                        f.f();
                    }
                    this.dimianList = [this.holeFirst.getChildByName("dimian"), this.holeFront.getChildByName("dimian"), this.holeFront];
                    var g = this.areaMain.getChildByName("NumRecover");
                    this.numRecover = g.addComponent(Te);
                    var L = this.areaMain.getChildByName("NumHole");
                    this.numHole = L.addComponent(Te);
                    var v = this.holeFront.getChildByName("NumHoleTotal");
                    this.numHoleTotal = v.addComponent(Te);
                    var p = this.areaBuild.getChildByName("NumBuild");
                    this.numBuild = p.addComponent(Te);
                    var V = this.areaBuild.getChildByName("NumBuildShort");
                    this.numBuildShort = V.addComponent(Te);
                    for (var k = 0; k < 3; k++) this.owner.getChildByName("Water".concat(k)).addComponent(We);
                    var C = this.owner.getChildByName("Physics"), S = C.getChildByName("Land").getComponent(Laya.PhysicsCollider), _ = this.holeFirst.getComponent(Laya.PhysicsCollider), b = this.holeFront.getComponent(Laya.PhysicsCollider);
                    S.collisionGroup = _.collisionGroup = b.collisionGroup = ae.Land, S.canCollideWith = _.canCollideWith = b.canCollideWith = ae.Player | ae.Worker;
                    var I, B = r(this.land);
                    try {
                        for (B.s(); !(I = B.n()).done;) {
                            var P = I.value.getComponent(Laya.PhysicsCollider);
                            P.collisionGroup = ae.Wall, P.canCollideWith = ae.Player | ae.Worker;
                        }
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        B.e(e);
                    } finally {
                        B.f();
                    }
                    var M = C.getChildByName("Wall").getComponent(Laya.PhysicsCollider);
                    this.holeWall0 = C.getChildByName("HoleWall0"), this.holeWall1 = C.getChildByName("HoleWall1"),
                        this.holeWall2 = C.getChildByName("HoleWall2"), this.leftWall = C.getChildByName("LeftWall");
                    var D = this.holeWall0.getComponent(Laya.PhysicsCollider), x = this.holeWall1.getComponent(Laya.PhysicsCollider), E = this.holeWall2.getComponent(Laya.PhysicsCollider), T = this.leftWall.getComponent(Laya.PhysicsCollider);
                    T.collisionGroup = M.collisionGroup = D.collisionGroup = x.collisionGroup = E.collisionGroup = ae.Wall,
                        T.canCollideWith = M.canCollideWith = D.canCollideWith = x.canCollideWith = E.canCollideWith = ae.Player;
                    for (var R = 0, F = [this.unlockWorker, this.unlockBuild, this.unlockPet, this.unlockMain]; R < F.length; R++) {
                        var A = F[R];
                        A.addComponent(Ge).island = this;
                        var N = A.getComponent(Laya.PhysicsCollider);
                        N.collisionGroup = ae.Unlock, N.canCollideWith = ae.Player;
                    }
                    var U, O = r(this.holeFirstBlock._children);
                    try {
                        for (O.s(); !(U = O.n()).done;) {
                            var H = U.value.getComponent(Laya.PhysicsCollider);
                            H.collisionGroup = ae.FirstBlock, H.canCollideWith = ae.Player | ae.Worker;
                        }
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        O.e(e);
                    } finally {
                        O.f();
                    }
                    for (var G = 0, W = this.holeBlock.numChildren; G < W; G++) {
                        var j = this.holeBlock.getChildAt(G);
                        j.blockIndex = G, j.diamond = [], j.ore = [];
                        var Y = j.getComponent(Laya.PhysicsCollider);
                        Y.collisionGroup = ae.Block, Y.canCollideWith = ae.Player | ae.Worker;
                    }
                    var z, X = r(this.stairList);
                    try {
                        for (X.s(); !(z = X.n()).done;) {
                            var q = z.value.getComponent(Laya.PhysicsCollider);
                            q.collisionGroup = ae.Stair, q.canCollideWith = ae.Player | ae.Worker;
                        }
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        X.e(e);
                    } finally {
                        X.f();
                    }
                    var J = this.elevator.getChildByName("Up"), Z = J.getComponent(Laya.PhysicsCollider);
                    Z.collisionGroup = ae.ElevatorUp, Z.canCollideWith = ae.Player;
                    var Q = this.elevator.getChildByName("Down"), $ = Q.getComponent(Laya.PhysicsCollider);
                    $.collisionGroup = ae.ElevatorDown, $.canCollideWith = ae.Player, Q.elevatorOther = J,
                        J.elevatorOther = Q;
                    var ee = this.portal.getChildByName("Up"), te = ee.getComponent(Laya.PhysicsCollider);
                    te.collisionGroup = ae.PortalUp, te.canCollideWith = ae.Player;
                    var ie = this.portal.getChildByName("Down"), ne = ie.getComponent(Laya.PhysicsCollider);
                    ne.collisionGroup = ae.PortalDown, ne.canCollideWith = ae.Player, ie.portalOther = ee,
                        ee.portalOther = ie;
                    var oe = this.areaWorker.getChildByName("house").getComponent(Laya.PhysicsCollider);
                    oe.collisionGroup = ae.WorkerHouse, oe.canCollideWith = ae.Player, this.recoverBuild = this.areaBuild.getChildByName("RecoverBuild"),
                        this.recoverBuildCollider = this.recoverBuild.getComponent(Laya.PhysicsCollider),
                        this.recoverBuildCollider.collisionGroup = ae.RecoverBuild, this.recoverBuildCollider.canCollideWith = ae.Player | ae.Worker;
                    var re = this.areaPet.getChildByName("house").getComponent(Laya.PhysicsCollider);
                    re.collisionGroup = ae.PetHouse, re.canCollideWith = ae.Player;
                    var se = this.recover.getComponent(Laya.PhysicsCollider);
                    se.collisionGroup = ae.Recover, se.canCollideWith = ae.Player | ae.Worker, this.motorcycle = this.areaMain.getChildByName("Motorcycle");
                    var le = this.motorcycle.getComponent(Laya.PhysicsCollider);
                    le.collisionGroup = ae.Motorcycle, le.canCollideWith = ae.Player, Fw.on(K.CheckBlock, this, this.checkBlock),
                        Fw.on(K.CheckFirstBlock, this, this.checkFirstBlock), Fw.on(K.RefreshBuildComplete, this, this.refreshBuildComplete),
                        Fw.on(K.CreateWorker, this, this.createWorker);
                    var he, ce = r(xe);
                    try {
                        for (ce.s(); !(he = ce.n()).done;) {
                            he.value.length;
                        }
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        ce.e(e);
                    } finally {
                        ce.f();
                    }
                }
            }, {
                key: "onEnable",
                value: function () { }
            }, {
                key: "onLateUpdate",
                value: function () {
                    if (Fw.state.island === this.index && Je.I) {
                        this.playerYIndex = Math.round(Je.I.owner.transform.position.y / (100 * -me.blockHeight)),
                            this.playerYIndex < 1 && (this.playerYIndex = 1);
                        for (var e = 0, t = this.land.length; e < t; e++) {
                            var a = this.playerYIndex + e - 1;
                            this.land[e].transform.localPositionY = -(100 * me.blockHeight - .02) * a, this.land[e].num0.setVal(100 * a + 50),
                                this.land[e].num1.setVal(100 * a + 100);
                        }
                        var i = Laya.timer.currFrame % this.holeBlock.numChildren;
                        this.runtime.heloBlockList[i] = this.holeBlock.getChildAt(i).active ? 1 : 0, this.motorcycle.active = this.index > 0 && !J.I.skill.motorcycle.isUsed;
                    }
                }
            }, {
                key: "refreshBuildComplete",
                value: function () {
                    this.runtime.buildComplete >= ue.total ?

                        (this.recoverBuildCollider.enabled = !1, this.numBuildShort.setVal("1000/1000"), console.log("已满！"), window.yiman = !0)

                        //{"index":0,"isAreaMain":true,"unlockMainShort":250,"heloTotal":26,"heloBlockList":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1],"isAreaWorker":true,"unlockWorkerShort":0,"worker":[2,1,1,0],"isAreaBuild":true,"unlockBuildShort":0,"buildComplete":999,"isAreaPet":true,"unlockPetShort":0}


                        : (this.recoverBuildCollider.enabled = !0,
                            this.numBuildShort.setVal("".concat(this.runtime.buildComplete, "/").concat(ue.total)),
                            this.refreshBuild());
                }
            }, {
                key: "refreshArea",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                    console.log("refresh-area", e), -1 != e && (this.index = e), this.runtime = le.I.getIsland(this.index),
                        this.style = he.getStyle(this.index), console.log("refreshArea", this.index, this.runtime),
                        this.leftWall.active = 0 === this.index, this.owner.transform.localPositionX = he.width * this.index;
                    var t, a = r(this.grasslandList);
                    try {
                        for (a.s(); !(t = a.n()).done;) {
                            var i = t.value;
                            i.meshRenderer.material = Fw.D3.getResMaterial(g + this.style.lmat.grassland);
                        }
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        a.e(e);
                    } finally {
                        a.f();
                    }
                    var n, o = r(this.roadList);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var s = n.value;
                            s.meshRenderer.material = Fw.D3.getResMaterial(g + this.style.lmat.road);
                        }
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        o.e(e);
                    } finally {
                        o.f();
                    }
                    var l, h = r(this.board.ban);
                    try {
                        for (h.s(); !(l = h.n()).done;) {
                            var c = l.value;
                            c.meshRenderer.material = Fw.D3.getResMaterial(g + this.style.lmat.board_ban);
                        }
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        h.e(e);
                    } finally {
                        h.f();
                    }
                    var u, d = r(this.board.ore);
                    try {
                        for (d.s(); !(u = d.n()).done;) {
                            var y = u.value;
                            y.meshRenderer.material = Fw.D3.getResMaterial(g + this.style.lmat.board_ore);
                        }
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        d.e(e);
                    } finally {
                        d.f();
                    }
                    var m, f = r(this.eggList);
                    try {
                        for (f.s(); !(m = f.n()).done;) {
                            var L, v = m.value, k = r(v._children);
                            try {
                                for (k.s(); !(L = k.n()).done;) {
                                    var C = L.value;
                                    C.destroy(!0);
                                }
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                k.e(e);
                            } finally {
                                k.f();
                            }
                            v.removeChildren();
                            var S = v.addChild(Fw.D3.createSprite3D(w + this.style.lh.egg));
                            if (S) {

                                S.transform.localPosition = p, S.transform.localScale = V;
                            }
                        }
                    } catch (e) {
                        throw f.e(e);
                        // e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        // f.e(e);
                    } finally {
                        f.f();
                    }
                    var _, b = r(this.treeList);
                    try {
                        for (b.s(); !(_ = b.n()).done;) {
                            var I, B = _.value, P = r(B._children);
                            try {
                                for (P.s(); !(I = P.n()).done;) {
                                    var M = I.value;
                                    M.destroy(!0);
                                }
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                P.e(e);
                            } finally {
                                P.f();
                            }
                            B.removeChildren();
                            var D = B.addChild(Fw.D3.createSprite3D(w + this.style.lh.tree));
                            D.transform.localPosition = p, D.transform.localScale = V;
                        }
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        b.e(e);
                    } finally {
                        b.f();
                    }
                    this.buildBottom.meshRenderer.material = Fw.D3.getResMaterial(g + this.style.lmat.ore);
                    var x, E = r(this.oreGroup._children);
                    try {
                        for (E.s(); !(x = E.n()).done;) {
                            var T = x.value;
                            T.meshRenderer.material = Fw.D3.getResMaterial(g + this.style.lmat.ore);
                        }
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        E.e(e);
                    } finally {
                        E.f();
                    }
                    this.runtime.isAreaMain ? (this.areaMain.active = !0, this.bridgeMain.active = this.index > 0,
                        this.unlockWorker.active = !this.runtime.isAreaWorker, this.unlockWorker.active && this.unlockWorker.getComponent(Ge).refresh(),
                        this.areaWorker.active = this.bridgeWorker.active = this.runtime.isAreaWorker, this.unlockBuild.active = !this.runtime.isAreaBuild,
                        this.unlockBuild.active && this.unlockBuild.getComponent(Ge).refresh(), this.areaBuild.active = this.bridgeBuild.active = this.runtime.isAreaBuild,
                        this.unlockPet.active = !this.runtime.isAreaPet, this.unlockPet.active && this.unlockPet.getComponent(Ge).refresh(),
                        this.areaPet.active = this.bridgePet.active = this.runtime.isAreaPet, this.unlockMain.active = !1) : (this.areaMain.active = this.areaWorker.active = this.areaBuild.active = this.areaPet.active = this.bridgeWorker.active = this.bridgeBuild.active = this.bridgePet.active = this.bridgeMain.active = this.unlockWorker.active = this.unlockBuild.active = this.unlockPet.active = !1,
                            this.unlockMain.active = !0, this.unlockMain.getComponent(Ge).refresh()),


                        this.numBuild.setVal(ue.getMult(this.index)),

                        this.numBuildShort.setVal("".concat(this.runtime.buildComplete, "/").concat(ue.total)




                        );
                    // if(window.yiman = !0){
                    //     this.numBuildShort.setVal("1000/1000")
                    // }
                }
            }, {
                key: "refreshContent",
                value: function () {
                    console.log("refresh-content", this.index, Fw.state.island), this.numRecover.setVal(he.getOrePrice(this.index)),
                        this.refreshHole();
                    for (var e = 0; e < 4; e++) {
                        var a, i = this.runtime.workerList[e], n = this.workerList[e].getComponent(Ye);
                        i.lv > 0 ? (n.owner.transform.position = this.recover.transform.position, n.actionList.length = 0,
                            n.action = null, (a = n.actionList).push.apply(a, t(this.gotoRecover2Hole())), n.owner.active = !0) : n.owner.active = !1;
                    }
                    this.refreshBuild();
                }
            }, {
                key: "refreshHole",
                value: function () {
                    if (this.index === Fw.state.island) {
                        var e, t = r(this.holeFirstBlock._children);
                        try {
                            for (t.s(); !(e = t.n()).done;) {
                                e.value.meshRenderer.material = Fw.D3.getResMaterial(g + this.style.lmat.kuangmian);
                            }
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            t.e(e);
                        } finally {
                            t.f();
                        }
                        var a, i = r(this.holeBlock._children);
                        try {
                            for (i.s(); !(a = i.n()).done;) {
                                a.value.meshRenderer.material = Fw.D3.getResMaterial(g + this.style.lmat.dixiakuangmian);
                            }
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            i.e(e);
                        } finally {
                            i.f();
                        }
                        var n, o = r(this.landList);
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                n.value.meshRenderer.material = Fw.D3.getResMaterial(g + this.style.lmat.land[0]);
                            }
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            o.e(e);
                        } finally {
                            o.f();
                        }
                        var s, l = r(this.dimianList);
                        try {
                            for (l.s(); !(s = l.n()).done;) {
                                s.value.meshRenderer.material = Fw.D3.getResMaterial(g + this.style.lmat.land[0]);
                            }
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            l.e(e);
                        } finally {
                            l.f();
                        }
                        if (this.holeFrontLand.meshRenderer.material = Fw.D3.getResMaterial(g + this.style.lmat.land[(this.runtime.heloTotal + 1) % 2]),
                            this.holeFirst.active = !this.runtime.heloTotal, this.holeFirst.active) {
                            for (var h = 0, c = this.holeFirstBlock.numChildren; h < c; h++) this.holeFirstBlock.getChildAt(h).active = !!this.runtime.heloBlockList[h];
                            this.checkFirstBlock();
                        }
                        this.hole.active = !!this.runtime.heloTotal, this.holeFront.transform.localPositionY = this.holeBlock.transform.localPositionY = -me.blockHeight * (this.runtime.heloTotal - 1);
                        for (var u = !1, d = 0, y = this.holeBlock.numChildren; d < y; d++) {
                            var m = this.holeBlock.getChildAt(d);
                            if (m.active = !!this.runtime.heloBlockList[d], m.active) {
                                if (u = !0, m.ore.length) {
                                    var f, w = r(m.ore);
                                    try {
                                        for (w.s(); !(f = w.n()).done;) {
                                            var L = f.value.getComponent(He);
                                            L.island = this.index, L.setMaterial();
                                        }
                                    } catch (e) {
                                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                        w.e(e);
                                    } finally {
                                        w.f();
                                    }
                                } else for (var v = me.getOreTotal(); v > 0; v--) {
                                    var p = He.Create(), V = p.getComponent(He);
                                    V.island = this.index, V.block = m.blockIndex, V.status = Ne.NotDig, V.collider.enabled = !1,
                                        V.setMaterial(), m.addChild(p), p.transform.localPosition = new Laya.Vector3((Math.random() - .5) * me.blockWidth * .8, (Math.random() - .5) * me.blockHeight * .5, (Math.random() - .5) * me.blockWidth * .8),
                                        m.ore.push(p);
                                }
                                for (; m.diamond.length > 0;) m.diamond.shift().getComponent(Ee).recover();
                                m.diamond.length = 0;
                                var k = me.getDiamondTotal(this.runtime.heloTotal);
                                if (k > 0) for (var C = k; C > 0; C--) {
                                    var S = Ee.Create(), _ = S.getComponent(Ee);
                                    _.island = this.index, _.block = m.blockIndex, _.status = De.NotDig, _.collider.enabled = !1,
                                        _.setMaterial(), m.addChild(S), S.transform.localPosition = new Laya.Vector3((Math.random() - .5) * me.blockWidth * .8, (Math.random() - .5) * me.blockHeight * .5, (Math.random() - .5) * me.blockWidth * .8),
                                        S.transform.rotationEuler = new Laya.Vector3(q(25, 35), q(0, 360), 0), m.diamond.push(S);
                                }
                            }
                        }
                        console.log("hasBlockActive", u),
                            u || this.checkBlock(),
                            this.numHole.setVal(this.runtime.heloTotal),
                            this.numHoleTotal.setVal(this.runtime.heloTotal), this.holeWall0.active = !this.holeFirst.active && !!this.runtime.heloTotal;
                        var b, I = r(this.stairList);
                        try {
                            for (I.s(); !(b = I.n()).done;) {
                                b.value.active = !!this.runtime.heloTotal;
                            }
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            I.e(e);
                        } finally {
                            I.f();
                        }
                        this.stairDown.transform.localPositionY = -me.blockHeight * this.runtime.heloTotal,
                            this.elevator.active = this.runtime.heloTotal && this.runtime.heloTotal >= me.showElevatorLv,
                            this.holeWall1.active = !this.holeFirst.active && !this.elevator.active, this.elevatorBody.transform.localScaleY = me.blockHeight * this.runtime.heloTotal + 1,
                            this.elevatorDown.transform.localPositionY = -me.blockHeight * this.runtime.heloTotal - .35,
                            this.portal.active = this.runtime.heloTotal && this.runtime.heloTotal >= me.showPortalLv,
                            this.holeWall2.active = !this.holeFirst.active && !this.portal.active, this.portalDown.transform.localPositionY = -me.blockHeight * this.runtime.heloTotal + 1;
                    }
                }
            }, {
                key: "refreshBuild",
                value: function () {
                    for (var e = 0, t = !1, a = 0, i = xe.length; a < i; a++) {
                        var n = e, o = xe[a].length;
                        e += o;
                        var r = this.buildList.getChildAt(a);
                        if (this.runtime.buildComplete >= e) r.active = !0, r.meshRenderer.material = He.getMaterial(this.index); else if (r.active = !1,
                            !t) {
                            t = !0;
                            for (var s = Math.max(o, this.buildOre.numChildren), l = 0; l < s; l++) {
                                var h = this.buildOre.getChildAt(l);
                                h || (h = this.buildOre.addChild(Fw.D3.createSprite3D(w + "OreBuild.lh"))), n + l < this.runtime.buildComplete ? (console.log("i:".concat(a, ",j:").concat(l)),
                                    h.active = !0, h.transform.localPosition = xe[a][l], h.meshRenderer.material = He.getMaterial(this.index)) : h.active = !1;
                            }
                        }
                    }
                }
            }, {
                key: "checkBlock",
                value: function () {
                    if (this.holeBlock._children) {
                        for (var e = 0, t = this.holeBlock.numChildren; e < t; e++) this.runtime.heloBlockList[e] = this.holeBlock.getChildAt(e).active ? 1 : 0;
                        if (this.index === Fw.state.island) {
                            var a, i = r(this.runtime.heloBlockList);
                            try {
                                for (i.s(); !(a = i.n()).done;) {
                                    var n = a.value;
                                    if (n) return;
                                }
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                i.e(e);
                            } finally {
                                i.f();
                            }
                            this.runtime.heloTotal++;
                            for (var o = 0, s = this.runtime.heloBlockList.length; o < s; o++) this.runtime.heloBlockList[o] = 1;
                            this.refreshHole(), G.UMConfig.Value.GiftStatus > 100 * Math.random() && Fw.Dialog.open(Q.GiftDialog);
                        }
                    }
                }
            }, {
                key: "checkFirstBlock",
                value: function () {
                    if (this.holeFirstBlock._children) {
                        for (var e = 0, t = this.holeFirstBlock._children.length; e < t; e++) this.runtime.heloBlockList[e] = this.holeFirstBlock._children[e].active ? 1 : 0;
                        if (this.index === Fw.state.island) {
                            var a, i = r(this.holeFirstBlock._children);
                            try {
                                for (i.s(); !(a = i.n()).done;) {
                                    if (a.value.active) return;
                                }
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                i.e(e);
                            } finally {
                                i.f();
                            }
                            this.runtime.heloTotal++;
                            for (var n = 0, o = this.runtime.heloBlockList.length; n < o; n++) this.runtime.heloBlockList[n] = 1;
                            this.refreshHole(), 10 === this.runtime.heloTotal ? Fw.Dialog.open(Q.UnlockDiamondDialog) : 100 === this.runtime.heloTotal ? Fw.Dialog.open(Q.UnlockElevatorDialog) : 1e3 === this.runtime.heloTotal && Fw.Dialog.open(Q.UnlockPortalDialog);
                        }
                    }
                }
            }, {
                key: "uploadData",
                value: function () {
                    if (0 === this.runtime.heloTotal) for (var e = 0, t = this.holeFirstBlock._children.length; e < t; e++) this.runtime.heloBlockList[e] = this.holeFirstBlock._children[e].active ? 1 : 0; else for (var a = 0, i = this.holeBlock._children.length; a < i; a++) this.runtime.heloBlockList[a] = this.holeBlock._children[a].active ? 1 : 0;
                }
            }, {
                key: "gotoWorkerHouse2Hole",
                value: function () {
                    for (var e = [], t = this.path.getChildByName("WorkerHouse2Hole"), a = 1, i = t.numChildren; a < i; a++) e.push(new Me(te.Move, [t.getChildAt(a - 1), t.getChildAt(a)]));
                    return this.portal.active ? e.push(new Me(te.Move, [t.getChildAt(t.numChildren - 1), this.portalUp]), new Me(te.Portal, [this.portalUp, this.portalDown])) : this.elevator.active ? e.push(new Me(te.Move, [t.getChildAt(t.numChildren - 1), this.elevatorUp]), new Me(te.Elevator, [this.elevatorUp, this.elevatorDown])) : this.stair.active && e.push(new Me(te.Move, [t.getChildAt(t.numChildren - 1), this.stairUp]), new Me(te.Stair, [this.stairUp, this.stairDown])),
                        e.push(new Me(te.Mining)), e;
                }
            }, {
                key: "gotoBuildRecover2Hole",
                value: function () {
                    var e = [];
                    return this.portal.active ? e.push(new Me(te.Move, [this.recoverBuild, this.portalUp]), new Me(te.Portal, [this.portalUp, this.portalDown])) : this.elevator.active ? e.push(new Me(te.Move, [this.recoverBuild, this.elevatorUp]), new Me(te.Elevator, [this.elevatorUp, this.elevatorDown])) : this.stair.active && e.push(new Me(te.Move, [this.recoverBuild, this.stairUp]), new Me(te.Stair, [this.stairUp, this.stairDown])),
                        e.push(new Me(te.Mining)), e;
                }
            }, {
                key: "gotoHole2BuildRecover",
                value: function (e) {
                    return this.portal.active ? [new Me(te.Move, [e, this.portalDown]), new Me(te.Portal, [this.portalDown, this.portalUp]), new Me(te.Move, [this.portalUp, this.recoverBuild])] : this.elevator.active ? [new Me(te.Move, [e, this.elevatorDown]), new Me(te.Elevator, [this.elevatorDown, this.elevatorUp]), new Me(te.Move, [this.elevatorUp, this.recoverBuild])] : this.stair.active ? [new Me(te.Move, [e, this.stairDown]), new Me(te.Stair, [this.stairDown, this.stairUp]), new Me(te.Move, [this.stairUp, this.recoverBuild])] : void 0;
                }
            }, {
                key: "gotoRecover2Hole",
                value: function () {
                    var e = [];
                    return this.portal.active ? e.push(new Me(te.Move, [this.recover, this.portalUp]), new Me(te.Portal, [this.portalUp, this.portalDown])) : this.elevator.active ? e.push(new Me(te.Move, [this.recover, this.elevatorUp]), new Me(te.Elevator, [this.elevatorUp, this.elevatorDown])) : this.stair.active && e.push(new Me(te.Move, [this.recover, this.stairUp]), new Me(te.Stair, [this.stairUp, this.stairDown])),
                        e.push(new Me(te.Mining)), e;
                }
            }, {
                key: "gotoHole2Recover",
                value: function (e) {
                    return this.portal.active ? [new Me(te.Move, [e, this.portalDown]), new Me(te.Portal, [this.portalDown, this.portalUp]), new Me(te.Move, [this.portalUp, this.recover])] : this.elevator.active ? [new Me(te.Move, [e, this.elevatorDown]), new Me(te.Elevator, [this.elevatorDown, this.elevatorUp]), new Me(te.Move, [this.elevatorUp, this.recover])] : this.stair.active ? [new Me(te.Move, [e, this.stairDown]), new Me(te.Stair, [this.stairDown, this.stairUp]), new Me(te.Move, [this.stairUp, this.recover])] : void 0;
                }
            }, {
                key: "createWorker",
                value: function (e, a) {
                    var i = this;
                    if (this.index === Fw.state.island && this.index === e) {
                        var n = this.workerList[a], o = n.getComponent(Ye), r = this.path.getChildByName("WorkerHouse2Hole"), s = function () {
                            var e;
                            n.transform.position = r.getChildAt(0).transform.position, n.active = !0, (e = o.actionList).push.apply(e, t(i.gotoWorkerHouse2Hole()));
                        };
                        r && r._children ? s() : Laya.timer.frameOnce(2, this, function () {
                            var e = i.path.getChildByName("WorkerHouse2Hole");
                            e && e._children && s();
                        });
                    }
                }
            }]), i;
        }(Laya.Script3D), Xe = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                var e;
                return u(this, a), (e = t.call(this)).islandLen = 2, e.islandList = [], e.childIndex = 1,
                    e.isFirst = !0, e.preIslandIndex = -1, e.FxMap = {}, e;
            }
            return d(a, [{
                key: "curIsland",
                get: function () {
                    return this.islandList[Fw.state.island % this.islandLen];
                }
            }, {
                key: "otherIsland",
                get: function () {
                    return this.islandList[(Fw.state.island + 1) % this.islandLen];
                }
            }, {
                key: "onAwake",
                value: function () {
                    a.I = this;
                }
            }, {
                key: "onStart",
                value: function () {
                    var e = this, t = this.owner.getChildByName("Directional Light");
                    t.shadowMode = Laya.ShadowMode.SoftHigh, t.shadowDistance = 20, t.shadowResolution = 2048,
                        t.shadowCascadesMode = Laya.ShadowCascadesMode.FourCascades, t.shadowNormalBias = 0,
                        t.shadowDepthBias = 1;
                    for (var a = this.owner.getChildByName("Island"), i = 0; i < this.islandLen; i++) {
                        console.log("-----------------------------------------------", i);
                        var n = a.getChildByName("Island".concat(i));
                        if (n) {
                            var o = n.getComponent(ze);
                            o && (o.refreshArea(i), o.refreshContent(), this.islandList.push(o));
                        }
                    }
                    this.initFx(), Laya.timer.once(1e3, this, function () {
                        var t, a;
                        console.log("this.curIsland", e.curIsland), null === (t = e.curIsland) || void 0 === t || t.refreshArea(0),
                            null === (a = e.curIsland) || void 0 === a || a.refreshContent();
                    }), Laya.timer.loop(1e3, this, this.onUpdateSecond), Laya.timer.loop(100, this, this.onUpdate100ms);
                }
            }, {
                key: "onUpdateSecond",
                value: function () { }
            }, {
                key: "onUpdate100ms",
                value: function () {
                    He.RecoverFall(Fw.state.island);
                }
            }, {
                key: "onLateUpdate",
                value: function () {
                    var e, t;
                    if (Je.I) {
                        var a = Math.floor(Je.I.owner.transform.position.x / he.width + .5), i = Math.floor((Je.I.owner.transform.position.x - he.width * a + .5 * he.width) / (he.width / 3));
                        if (a !== Fw.state.island || i !== this.childIndex) {
                            if (console.log("区域更新", a, i), a !== Fw.state.island) Fw.emit(K.UploadIslandData),
                                Fw.state.island = a, this.childIndex = i, null === (e = this.curIsland) || void 0 === e || e.refreshContent(); else if (i !== this.childIndex) {
                                    if (this.childIndex = i, console.log("-----------------refreshArea-----------------", this.childIndex),
                                        1 === i) return;
                                    if (a < 1 && 0 === i) return;
                                    null === (t = this.otherIsland) || void 0 === t || t.refreshArea(0 === i ? a - 1 : a + 1);
                                }
                            this.preIslandIndex !== Fw.state.island && (He.RecoverIsland2Fall(this.preIslandIndex),
                                this.preIslandIndex = Fw.state.island);
                        }
                    }
                }
            }, {
                key: "initFx",
                value: function () {
                    var e = this;
                    ["FX_suikuai1", "FX_suikuai2", "FX_suikuai3", "FX_suikuai4"].forEach(function (t) {
                        Fw.D3.loadSprite3D(w + t + ".lh", Laya.Handler.create(e, function (a) {
                            e.playFx(t, _);
                        }));
                    }), Fw.on(K.FxPlay, this, this.playFx), Fw.on(K.FxPlayBlock, this, this.playFxBlock);
                }
            }, {
                key: "playFx",
                value: function (e, t) {
                    var a = this, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p, n = this.createFx(e);
                    n && (n.active = !1, n.transform.position = t, n.transform.localRotationEuler = i,
                        n.active = !0, Laya.timer.once(1500, this, function () {
                            a.removeFx(n);
                        }));
                }
            }, {
                key: "createFx",
                value: function (e) {
                    if (this.owner) {
                        if (this.FxMap[e] && this.FxMap[e].length) return this.FxMap[e].shift();
                        var t = Fw.D3.createSprite3D(w + e + ".lh");
                        return t ? (this.owner.addChild(t), t) : null;
                    }
                }
            }, {
                key: "removeFx",
                value: function (e) {
                    void 0 === this.FxMap[e.name] && (this.FxMap[e.name] = []), this.FxMap[e.name].push(e),
                        e.active = !1, e.transform.position = S;
                }
            }, {
                key: "destroyAllFx",
                value: function () {
                    for (var e in this.FxMap) if (this.FxMap[e]) {
                        var t, a = r(this.FxMap[e]);
                        try {
                            for (a.s(); !(t = a.n()).done;) {
                                var i = t.value;
                                Fw.D3.removeSprite3D(i);
                            }
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            a.e(e);
                        } finally {
                            a.f();
                        }
                        delete this.FxMap[e];
                    }
                }
            }, {
                key: "playFxBlock",
                value: function (e) {
                    var t = this, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", n = this.createFx("FX_suikuai" + Math.floor(4 * Math.random() + 1));
                    if (n) {
                        if (n.active = !1, n.transform.position = e, n.transform.localRotationEuler = a,
                            i) {
                            var o = Laya.loader.getRes(g + "LV" + (Fw.state.island + 1) % he.total + "/" + i + ".lmat");
                            if (!o) return;
                            var s, l = getMeshRenderersInChildren(n), h = r(l);
                            try {
                                for (h.s(); !(s = h.n()).done;) {
                                    var c = s.value;
                                    c.material = o;
                                }
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                h.e(e);
                            } finally {
                                h.f();
                            }
                        }
                        n.active = !0, Laya.timer.once(1500, this, function () {
                            t.removeFx(n);
                        });
                    }
                }
            }]), a;
        }(Laya.Script3D), qe = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                var e;
                return u(this, a), (e = t.call(this)).dotList = [], e.v3_0 = new Laya.Vector3(),
                    e.v3_1 = new Laya.Vector3(), e.v3_2 = new Laya.Vector3(), e.v3_3 = new Laya.Vector3(),
                    e.v3_4 = new Laya.Vector3(), e.isGuideHoleFirst = 0, e.isGuideRecover = 0, e.isGuideUnlockWorker = 0,
                    e;
            }
            return d(a, [{
                key: "onAwake",
                value: function () {
                    a.I = this, this.initGuide();
                }
            }, {
                key: "onEnable",
                value: function () { }
            }, {
                key: "onLateUpdate",
                value: function () {
                    if (Fw.state.gameStatus && this.dotList.length && Xe.I && Xe.I.curIsland && Je.I) {
                        for (var e = 0, t = this.owner.numChildren; e < t; e++) {
                            var a = this.owner.getChildAt(e);
                            a.active = e < this.dotList.length, a.active && (a.transform.position = 0 === e ? Je.I.owner.transform.position : this.dotList[e - 1].transform.position,
                                this.dotList[e].transform.position.cloneTo(this.v3_0), this.v3_0.y -= .4, a.transform.lookAt(this.v3_0, L),
                                a.transform.localRotationEulerY += 180, a.transform.localScaleZ = Laya.Vector3.distance(a.transform.position, this.dotList[e].transform.position));
                        }
                        if (Laya.Vector3.distance(Je.I.owner.transform.position, this.dotList[0].transform.position) < 2) {
                            if (this.dotList.shift(), this.dotList.length) return;
                            for (var i = 0, n = this.owner.numChildren; i < n; i++) this.owner.getChildAt(i).active = !1;
                        }
                    }
                }
            }, {
                key: "initGuide",
                value: function () {
                    this.isGuideHoleFirst = parseInt(Fw.Platform.getStorageItem("GuideHoleFirst", "0")),
                        this.isGuideRecover = parseInt(Fw.Platform.getStorageItem("GuideRecover", "0")),
                        this.isGuideUnlockWorker = parseInt(Fw.Platform.getStorageItem("GuideUnlockWorker", "0"));
                }
            }, {
                key: "guideHoleFirst",
                value: function () {
                    this.isGuideHoleFirst || (this.isGuideHoleFirst = 1, Fw.Platform.setStorageItem("GuideHoleFirst", "1"),
                        this.dotList.length = 0, Xe.I && Xe.I.curIsland && Je.I && this.dotList.push(Xe.I.curIsland.holeFirst));
                }
            }, {
                key: "guideRecover",
                value: function () {
                    Xe.I && Xe.I.curIsland && Je.I && (this.isGuideRecover || (this.isGuideRecover = 1,
                        Fw.Platform.setStorageItem("GuideRecover", "1"), this.dotList.length = 0, this.dotList.push(Xe.I.curIsland.stairDown, Xe.I.curIsland.stairUp, Xe.I.curIsland.recover)));
                }
            }, {
                key: "guideUnlockWorker",
                value: function () {
                    Xe.I && Xe.I.curIsland && Je.I && (this.isGuideUnlockWorker || P.I.num < Xe.I.curIsland.runtime.unlockWorkerShort || (this.isGuideUnlockWorker = 1,
                        Fw.Platform.setStorageItem("GuideUnlockWorker", "1"), this.dotList.length = 0, this.dotList.push(Xe.I.curIsland.unlockWorker)));
                }
            }]), a;
        }(Laya.Script3D), Je = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                var e;
                return u(this, a), (e = t.call(this)).magnetSc = null, e.move = new Laya.Vector3(0, 0, 0),
                    e._speed = 4, e.v3_0 = new Laya.Vector3(), e.v3_1 = new Laya.Vector3(), e.v3_2 = new Laya.Vector3(),
                    e.v3_3 = new Laya.Vector3(), e.v3_4 = new Laya.Vector3(), e.gravity = new Laya.Vector3(),
                    e.position = new Laya.Vector3(), e.prePosition = new Laya.Vector3(), e.isGrounded = !0,
                    e.downRay = new Laya.Ray(new Laya.Vector3(), v), e.downHitResult = new Laya.HitResult(),
                    e.isStair = !1, e.delayCheckStair = 0, e.isElevator = !1, e.isUpElevator = !1, e.delayCheckElevator = 0,
                    e.isPortal = !1, e.petDistance = 1, e.isTween = !1, e._vec4 = new Laya.Vector4(),
                    e.curAni = $.Idle, e.delayChan = 0, e;
            }
            return d(a, [{
                key: "elevatorSite",
                get: function () {
                    return Xe.I.curIsland.elevatorSite[0];
                }
            }, {
                key: "luoKunagOreTotal",
                get: function () {
                    return this.luokuang ? this.luokuang.numChildren : 0;
                }
            }, {
                key: "isFull",
                get: function () {
                    return this.luoKunagOreTotal >= ye.getPower(Fw.state.playerLv);
                }
            }, {
                key: "speed",
                get: function () {
                    return this._speed * (1 + (J.I.skill.motorcycle.isUsed ? 1 : 0));
                }
            }, {
                key: "getInfoPosition",
                value: function () {
                    return this.info && this.info.transform && Re.I.camera.viewport.project(this.info.transform.position, Re.I.camera.projectionViewMatrix, this._vec4),
                        this._vec4;
                }
            }, {
                key: "onAwake",
                value: function () {
                    a.I = this, window.player = this, this.body = this.owner.getChildByName("Body"),
                        this.motorcycle = this.body.getChildByName("Motorcycle"), this.info = this.body.getChildByName("Info"),
                        this.animator = this.body.getComponent(Laya.Animator), this.chan = findChild("chan", this.body),
                        this.luokuang = findChild("luokuang", this.body), this.magnetNode = this.owner.getChildByName("FX_citie"),
                        this.magnetSc = this.magnetNode.addComponent(je), this.magnetSc.playerSc = this,
                        this.character = this.owner.addComponent(Laya.CharacterController);
                    var e = new Laya.CapsuleColliderShape(.5, 1.7, Laya.CapsuleColliderShape.SHAPEORIENTATION_UPY);
                    e.localOffset = new Laya.Vector3(0, .85, 0), this.character.stepHeight = .001, this.character.maxSlope = 45,
                        this.character.rollingFriction = 1, this.character.colliderShape = e, this.character.collisionGroup = ae.Player,
                        this.character.canCollideWith = ae.Player | ae.Worker | ae.Wall | ae.Unlock | ae.Tool | ae.Land | ae.FirstBlock | ae.Block | ae.Stair | ae.ElevatorUp | ae.ElevatorDown | ae.PortalUp | ae.PortalDown | ae.Ore | ae.Diamond | ae.WorkerHouse | ae.PetHouse | ae.Recover | ae.RecoverBuild | ae.Motorcycle,
                        this.gravity = this.character.gravity.clone(), this.pet = this.owner.getChildByName("Pet"),
                        console.log("refreshPet onAwakeonAwakeonAwake")
                    this.owner.scene.addChild(this.pet), this.refreshPet(), Fw.on(K.RefreshPet, this, this.refreshPet);
                }
            }, {
                key: "onEnable",
                value: function () {
                    this.owner.transform.position.cloneTo(this.position), Laya.timer.once(1e3, this, function () {
                        qe.I.guideHoleFirst();
                    });
                }
            }, {
                key: "onLateUpdate",
                value: function () {
                    //玩家移动
                    // console.log("玩家移动：", Fw.state.gameStatus)

                    if (!window.kaishiyouxi) return
                    if (Fw.state.gameStatus) {
                        if (16, this.motorcycle.active = J.I.skill.motorcycle.isUsed,
                            this.owner.transform.position.cloneTo(this.downRay.origin),
                            this.owner.scene.physicsSimulation.rayCast(this.downRay, this.downHitResult, 10, this.character.collisionGroup, ae.Land) ? this.isGrounded = Laya.Vector3.distanceSquared(this.downHitResult.point, this.owner.transform.position) <= me.blockHeight * me.blockHeight : this.isGrounded = !1,
                            this.isPortal || this.isElevator || (this.isStair ? (this.v3_1.x = 0, this.v3_1.y = this.move.z > 0 ? -1 : this.move.z < 0 ? 1 : 0,
                                this.v3_1.z = 0, 0 !== this.v3_1.y ?
                                    (this.animator.speed = 1, this.playAni(this.v3_1.y > 0 ? $.Up : $.Down)) : this.animator.speed = 0,
                                this.delayCheckStair < Laya.timer.currTimer && (this.v3_1.y > 0 && this.prePosition.y < 0 && this.owner.transform.position.y > 0 || this.v3_1.y < 0 && this.owner.transform.position.y < Xe.I.curIsland.holeBlock.transform.position.y + .5) && (this.isStair = !1,
                                    this.delayCheckStair = Laya.timer.currTimer + 30, Laya.Vector3.normalize(this.move, this.v3_1),
                                    this.character.gravity = this.gravity), Laya.Vector3.scale(this.v3_1, this.speed / (1e3 / 16), this.v3_2),
                                this.character.move(this.v3_2)) : Laya.Vector3.equals(this.move, p) ?
                                    (this.character.move(this.move),
                                        this.playAni($.Idle)) : (Laya.Vector3.normalize(this.move, this.v3_1),
                                            this.playAni($.Run),
                                            this.owner.transform.localRotationEulerY = Math.atan2(this.v3_1.x, this.v3_1.z) / Math.PI * 180,
                                            Laya.Vector3.scale(this.v3_1, this.speed / (1e3 / 16), this.v3_2),
                                            this.character.move(this.v3_2))),
                            this.isTween ? this.body.transform.position = this.position = this.owner.transform.position : (Laya.Vector3.lerp(this.position, this.owner.transform.position, .15, this.position),
                                this.body.transform.position = this.position,
                                this.owner.transform.position.cloneTo(this.prePosition)),
                            this.pet.active && this.pet.numChildren)
                            for (var e = this.owner, t = 0; t < this.pet.numChildren; t++) {
                                var a = this.pet.getChildAt(t);
                                a.transform.lookAt(e.transform.position, L),
                                    a.transform.localRotationEulerY += 180,
                                    Laya.Vector3.distanceSquared(e.transform.position, a.transform.position) > this.petDistance * this.petDistance && (Laya.Vector3.lerp(a.transform.position, e.transform.position, .05, this.v3_3),
                                        a.transform.position = this.v3_3), e = a;
                            }
                        this.luokuang.active = !!this.luokuang.numChildren, this.magnetNode.active = J.I.skill.magnet.isUsed;
                    } else this.character.move(p);
                }
            }, {
                key: "onCollisionEnter",
                value: function (e) {

                    if (!window.pengchongwu) {

                        if (e.other.collisionGroup === ae.WorkerHouse) {
                            window.pengchongwu = !0
                            console.log("碰撞111？？？？？", e.other.collisionGroup)
                            
                            Fw.Dialog.open(Q.WorkerDialog);
                                YYGGames.showInterstitial(() => {
                            })
                        }



                        if (e.other.collisionGroup === ae.PetHouse) {
                            window.pengchongwu = !0
                            console.log("碰撞222？？？？？", e.other.collisionGroup)
                            Fw.Dialog.open(Q.PetDialog);
                                    YYGGames.showInterstitial(() => {
                            })
                        }

                        if (e.other.collisionGroup === ae.Motorcycle) {
                            window.pengchongwu = !0
                            console.log("碰撞333？？？？？", e.other.collisionGroup)
                            if (J.I.skill.motorcycle.isUsed) return;
                            Fw.Dialog.open(Q.MotorcycleDialog);
                                        YYGGames.showInterstitial(() => {
                            })
                        }
                    }
                    // if (e.other.collisionGroup !== ae.Land && e.other.collisionGroup !== ae.Wall)
                    //     if (e.other.collisionGroup === ae.WorkerHouse) {
                    //         console.log("碰撞111？？？？？", e.other.collisionGroup)
                    //         // if (Pe.OpenTime + 1e4 > Laya.timer.currTimer) return;
                    //         if (Fw.Dialog.has) return;
                    //         Fw.Dialog.open(Q.WorkerDialog);
                    //     } else if (e.other.collisionGroup === ae.PetHouse) {



                    //         console.log("碰撞222？？？？？", e.other.collisionGroup)
                    //         // if (Ve.OpenTime + 1e4 > Laya.timer.currTimer) return;
                    //         if (Fw.Dialog.has) return;
                    //         Fw.Dialog.open(Q.PetDialog);



                    //     } else if (e.other.collisionGroup === ae.Motorcycle) {
                    //         console.log("碰撞333？？？？？", e.other.collisionGroup)
                    //         // if (Le.OpenTime + 1e4 > Laya.timer.currTimer) return;
                    //         if (Fw.Dialog.has) return;
                    //         if (J.I.skill.motorcycle.isUsed) return;
                    //         Fw.Dialog.open(Q.MotorcycleDialog);
                    //     }
                }
            }, {
                key: "onCollisionStay",
                value: function (e) {


                }
            }, {
                key: "onCollisionExit",
                value: function (e) {

                    if (e.other.collisionGroup === ae.PetHouse) {
                        console.log("碰撞222？？？？？", window.pengchongwu)
                        window.pengchongwu = !1
                    }
                    if (e.other.collisionGroup === ae.Motorcycle) {
                        window.pengchongwu = !1
                    }
                    if (e.other.collisionGroup === ae.WorkerHouse) {
                        window.pengchongwu = !1
                    }
                    // e.other.collisionGroup === ae.WorkerHouse ? Pe.OpenTime = Laya.timer.currTimer - 9e3 : e.other.collisionGroup === ae.PetHouse ? Ve.OpenTime = Laya.timer.currTimer - 9e3 : e.other.collisionGroup === ae.Motorcycle && (Le.OpenTime = Laya.timer.currTimer - 9e3);
                }
            }, {
                key: "onTriggerEnter",
                value: function (e) {




                    var t = this;
                    if (e.collisionGroup === ae.Ore) {

                        if (this.isFull) return void qe.I.guideRecover();
                        e.owner.getComponent(He).put(this.luokuang);
                    } else if (e.collisionGroup === ae.Diamond) e.owner.getComponent(Ee).recover(); else if (e.collisionGroup === ae.Stair) {

                        if (Laya.timer.currTimer < this.delayCheckStair) return;
                        this.isStair || (this.delayCheckStair = Laya.timer.currTimer + 30, this.isStair = !0,
                            this.character.gravity = p, e.owner.transform.position.cloneTo(this.v3_0), this.v3_0.y = this.owner.transform.position.y,
                            this.v3_0.z += .25, this.owner.transform.position = this.v3_0, this.owner.transform.localRotationEulerY = 180);
                    } else if (e.collisionGroup === ae.Recover) {

                        if (!this.luokuang.numChildren) return;
                        for (var a = this.luokuang.numChildren - 1; a >= 0; --a) this.luokuang.getChildAt(a).getComponent(He).recover(e.owner.transform.position);
                        qe.I.guideUnlockWorker(), Fw.Sound.playSound(C.recover);
                    } else if (e.collisionGroup === ae.RecoverBuild) {
                        console.log("碰撞10")
                        if (!this.luokuang.numChildren) return;
                        for (var i = this.luokuang.numChildren - 1; i >= 0; --i) this.luokuang.getChildAt(i).getComponent(He).recoverBuild(e.owner.transform.position);
                        Fw.Sound.playSound(C.recover);
                    } else if (e.collisionGroup === ae.PortalUp) e.owner.portalOther.transform.position.cloneTo(this.v3_0),
                        this.v3_0.z += .65, this.position = this.owner.transform.position = this.v3_0, this.isPortal = !0,
                        Laya.timer.frameOnce(5, this, function () {
                            t.isPortal = !1;
                        }); else if (e.collisionGroup === ae.PortalDown) e.owner.portalOther.transform.position.cloneTo(this.v3_0),
                            this.v3_0.z -= .75, this.position = this.owner.transform.position = this.v3_0, this.isPortal = !0,
                            Laya.timer.frameOnce(5, this, function () {
                                t.isPortal = !1;
                            }); else if (e.collisionGroup === ae.ElevatorUp) {
                                if (this.isElevator) return;
                                if (Laya.timer.currTimer < this.delayCheckElevator) return;
                                this.delayCheckElevator = Laya.timer.currTimer + 300, this.isElevator = !0, this.playAni($.Idle),
                                    this.character.gravity = p, this.character.move(p), this.isTween = !0;
                                var n = Math.abs(e.owner.transform.position.y - e.owner.elevatorOther.transform.position.y) / (4 * this.speed) * 1e3;
                                Laya.Tween.to(this.owner.transform, {
                                    localPositionX: e.owner.transform.position.x,
                                    localPositionY: e.owner.transform.position.y,
                                    localPositionZ: e.owner.transform.position.z + .5,
                                    localRotationEulerY: 0
                                }, 60, null, Laya.Handler.create(this, function () {
                                    Laya.Tween.to(t.owner.transform, {
                                        localPositionX: e.owner.elevatorOther.transform.position.x,
                                        localPositionY: e.owner.elevatorOther.transform.position.y,
                                        localPositionZ: e.owner.elevatorOther.transform.position.z + .5
                                    }, n, null, Laya.Handler.create(t, function () {
                                        Laya.Tween.to(t.owner.transform, {
                                            localPositionX: e.owner.elevatorOther.transform.position.x,
                                            localPositionY: e.owner.elevatorOther.transform.position.y,
                                            localPositionZ: e.owner.elevatorOther.transform.position.z + 1
                                        }, 60, null, Laya.Handler.create(t, function () {
                                            t.delayCheckElevator = Laya.timer.currTimer + 300, t.isElevator = !1, t.character.gravity = t.gravity,
                                                t.isTween = !1;
                                        }));
                                    })), t.elevatorSite && (t.elevatorSite.active = !0, t.elevatorSite.transform.localPositionY = t.owner.transform.localPositionY - .3,
                                        Laya.Tween.to(t.elevatorSite.transform, {
                                            localPositionY: e.owner.elevatorOther.transform.position.y - .3
                                        }, n, null, Laya.Handler.create(t, function () {
                                            t.elevatorSite.active = !1;
                                        })));
                                }));
                            } else if (e.collisionGroup === ae.ElevatorDown) {
                                if (this.isElevator) return;
                                if (Laya.timer.currTimer < this.delayCheckElevator) return;
                                this.delayCheckElevator = Laya.timer.currTimer + 300, this.isElevator = !0, this.playAni($.Idle),
                                    this.character.gravity = p, this.character.move(p), this.isTween = !0;
                                var o = Math.abs(e.owner.transform.position.y - e.owner.elevatorOther.transform.position.y) / (4 * this.speed) * 1e3;
                                Laya.Tween.to(this.owner.transform, {
                                    localPositionX: e.owner.transform.position.x,
                                    localPositionY: e.owner.transform.position.y,
                                    localPositionZ: e.owner.transform.position.z + .5,
                                    localRotationEulerY: 180
                                }, 60, null, Laya.Handler.create(this, function () {
                                    Laya.Tween.to(t.owner.transform, {
                                        localPositionX: e.owner.elevatorOther.transform.position.x,
                                        localPositionY: e.owner.elevatorOther.transform.position.y,
                                        localPositionZ: e.owner.elevatorOther.transform.position.z + .5
                                    }, o, null, Laya.Handler.create(t, function () {
                                        Laya.Tween.to(t.owner.transform, {
                                            localPositionX: e.owner.elevatorOther.transform.position.x,
                                            localPositionY: e.owner.elevatorOther.transform.position.y,
                                            localPositionZ: e.owner.elevatorOther.transform.position.z - .75
                                        }, 60, null, Laya.Handler.create(t, function () {
                                            t.delayCheckElevator = Laya.timer.currTimer + 300, t.isElevator = !1, t.character.gravity = t.gravity,
                                                t.isTween = !1;
                                        }));
                                    })), t.elevatorSite && (t.elevatorSite.active = !0, t.elevatorSite.transform.localPositionY = t.owner.transform.localPositionY - .3,
                                        Laya.Tween.to(t.elevatorSite.transform, {
                                            localPositionY: e.owner.elevatorOther.transform.position.y - .3
                                        }, o, null, Laya.Handler.create(t, function () {
                                            t.elevatorSite.active = !1;
                                        })));
                                }));
                            }
                }
            }, {
                key: "onTriggerStay",
                value: function (e) {
                    if (e.collisionGroup === ae.Block) {
                        if (e.owner.active = !1, Fw.emit(K.CheckBlock), this.playAni($.Chan), Fw.emit(K.FallOre + "_" + Fw.state.island + "_" + e.owner.blockIndex, this.owner.transform.position.y),
                            Fw.emit(K.FxPlayBlock, [e.owner.transform.position, e.owner.transform.rotationEuler, "dixiakuangmian"]),
                            !e.owner.numChildren) return;
                        var t, a = r(e.owner.ore);
                        try {
                            for (a.s(); !(t = a.n()).done;) {
                                t.value.getComponent(He).fall(this.owner.transform.position.y);
                            }
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            a.e(e);
                        } finally {
                            a.f();
                        }
                        e.owner.ore.length = 0;
                        var i, n = r(e.owner.diamond);
                        try {
                            for (n.s(); !(i = n.n()).done;) {
                                i.value.getComponent(Ee).fall(this.owner.transform.position.y);
                            }
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            n.e(e);
                        } finally {
                            n.f();
                        }
                        e.owner.diamond.length = 0;
                    } else e.collisionGroup === ae.FirstBlock && (e.owner.active = !1, Fw.emit(K.CheckFirstBlock),
                        this.playAni($.Chan), Fw.emit(K.FxPlayBlock, [e.owner.transform.position, e.owner.transform.rotationEuler, "kuangmian"]));
                    e.collisionGroup !== ae.Block && e.collisionGroup !== ae.FirstBlock || (Fw.state.playerUpgradeComplete++,
                        Fw.state.playerUpgradeComplete >= ye.getUpgrade(Fw.state.playerLv) && (Fw.state.playerUpgradeComplete = 0,
                            Fw.state.playerLv++, Fw.Dialog.open(Q.UpgradeDialog)));
                }
            }, {
                key: "playAni",
                value: function (e) {
                    Laya.timer.currTimer < this.delayChan || (this.motorcycle.active && (e = $.Ride),
                        e !== this.curAni && (this.curAni = e, this.animator.crossFade(e, .03, 0, 0), e === $.Chan ? (this.animator.speed = 1.5,
                            this.delayChan = Laya.timer.currTimer + 16 / 30 * 1e3 / this.animator.speed, this.chan.active = !0) : (this.animator.speed = 1,
                                this.chan.active = !1)));
                }
            }, {
                key: "refreshPet",
                value: function () {
                    console.log("this.pet._children", this.pet._children)

                    var e, t = this;


                    const arr = this.pet._children.slice();
                    for (const it of arr) {
                        console.log("Fw.state.usePet.length", it)
                        it.removeSelf();
                        it.destroy(!0);
                    }



                    console.log("Fw.state.usePet.length", Fw.state.usePet)
                    for (var i = 0, n = 0, o = Fw.state.usePet.length; n < o; n++) {
                        var s = Fw.state.usePet[n];
                        console.log("Fw.state.usePet.length", s)
                        if (isNaN(s)) continue;
                        if (s < 0) continue;
                        console.log("Fw.state.usePet.length", s)
                        i++;
                        Fw.D3.loadSprite3D(w + de.getPetName(s) + ".lh", Laya.Handler.create(this, function (e) {
                            t.pet.addChild(e), e.transform.localPositionZ = -1 * t.petDistance * i;
                        }));
                    }
                }
            }]), a;
        }(Laya.Script3D);
        Je.I = null;
        var Ke = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                var e;
                return u(this, a), (e = t.call(this)).barWidth = 130, e.timeline = new Laya.TimeLine(),
                    e;
            }
            return d(a, [{
                key: "onAwake",
                value: function () {
                    this.bar = this.owner.getChildByName("Bar"), this.txtFull = this.owner.getChildByName("Full"),
                        this.txtTxt = this.owner.getChildByName("Txt"), this.txtLv = this.owner.getChildByName("Lv"),
                        this.timeline.to(this.txtFull, {
                            scaleX: 1.2,
                            scaleY: 1.2
                        }, 600).to(this.txtFull, {
                            scaleX: 1,
                            scaleY: 1
                        }, 600).play(0, !0);
                }
            }, {
                key: "onEnable",
                value: function () { }
            }, {
                key: "onLateUpdate",
                value: function () {
                    if (Je.I) {
                        var e = Je.I.luoKunagOreTotal, t = ye.getPower(Fw.state.playerLv);
                        e >= t ? (this.txtFull.visible = !0, this.txtTxt.visible = !1) : (this.txtFull.visible = !1,
                            this.txtTxt.visible = !0, this.txtTxt.text = "".concat(e, "/").concat(t)),
                            // console.log("Fw.state.playerLv",Fw.state.playerLv)
                            this.txtLv.text = Fw.state.playerLv + "",
                            this.bar.width = this.barWidth * Fw.state.playerUpgradeComplete / ye.getUpgrade(Fw.state.playerLv);
                        var a = Je.I.getInfoPosition();
                        this.owner.x = a.x, this.owner.y = a.y;
                    }
                }
            }]), a;
        }(Laya.Script), Ze = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                var e;
                return u(this, a), (e = t.call(this)).isOpenDialog = !0, e._earnutil_panel_id = "",
                    e._num = -1, e.isFontClip = !1, e;
            }
            return d(a, [{
                key: "onAwake",
                value: function () {
                    this._earnutil_panel_id = Laya.timer.currTimer + "_" + Math.ceil(1e4 * Math.random()),
                        this.owner.mouseEnabled = !0, this.owner.mouseThrough = !1, this.Icon = this.owner.getChildByName("Icon"),
                        this.Txt = this.owner.getChildByName("Txt"), this.Txt && (this.isFontClip = this.Txt instanceof Laya.FontClip),
                        P.I.addPanel(this);
                }
            }, {
                key: "onEnable",
                value: function () {
                    // this.Txt.text = "0"
                    this.update(P.I.num), Fw.onState("coin", this, this.update);
                }
            }, {
                key: "onClick",
                value: function () {
                    // this.isOpenDialog && Laya.Dialog.open(Q.CoinDialog);
                }
            }, {
                key: "onDisable",
                value: function () {
                    P.I.removePanel(this), Fw.offAllCaller(this);
                }
            }, {
                key: "update",
                value: function (e) {
                    var t = this;
                    e !== this._num && Laya.Tween.to(this, {
                        _num: e,
                        update: new Laya.Handler(this, function () {
                            t.setVal(t._num);
                        })
                    }, 600, Laya.Ease.linearNone, Laya.Handler.create(this, function () {
                        t._num = e, t.setVal(t._num);
                    }));
                }
            }, {
                key: "setVal",
                value: function (e) {
                    this.Txt && (this.isFontClip ? this.Txt.value = z(Math.floor(e)) + " " : this.Txt.text = z(Math.floor(e)) + " ");
                }
            }]), a;
        }(Laya.Script), Qe = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                var e;
                return u(this, a), (e = t.call(this)).isOpenDialog = !0, e._earnutil_panel_id = "",
                    e._num = 0, e.isFontClip = !1, e;
            }
            return d(a, [{
                key: "onAwake",
                value: function () {
                    this._earnutil_panel_id = Laya.timer.currTimer + "_" + Math.ceil(1e4 * Math.random()),
                        this.owner.mouseEnabled = !0, this.owner.mouseThrough = !1, this.Icon = this.owner.getChildByName("Icon"),
                        this.Txt = this.owner.getChildByName("Txt"), this.Txt && (this.isFontClip = this.Txt instanceof Laya.FontClip),
                        M.I.addPanel(this);
                }
            }, {
                key: "onEnable",
                value: function () {
                    // this.Txt.text = "0"
                    this.update(M.I.num), Fw.onState("diamond", this, this.update);
                }
            }, {
                key: "onClick",
                value: function () {
                    // this.isOpenDialog && Laya.Dialog.open(Q.DiamondDialog);
                }
            }, {
                key: "onDisable",
                value: function () {
                    M.I.removePanel(this), Fw.offAllCaller(this);
                }
            }, {
                key: "update",
                value: function (e) {
                    var t = this;
                    e !== this._num && Laya.Tween.to(this, {
                        _num: e,
                        update: new Laya.Handler(this, function () {
                            t.setVal(t._num);
                        })
                    }, 600, Laya.Ease.linearNone, Laya.Handler.create(this, function () {
                        t._num = e, t.setVal(t._num);
                    }));
                }
            }, {
                key: "setVal",
                value: function (e) {
                    this.Txt && (this.isFontClip ? this.Txt.value = z(Math.floor(e)) + " " : this.Txt.text = z(Math.floor(e)) + " ");
                }
            }]), a;
        }(Laya.Script), $e = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                var e;
                return u(this, a), (e = t.call(this)).barWidth = 324, e;
            }
            return d(a, [{
                key: "onEnable",
                value: function () {
                    this.refreshUI(), Laya.timer.frameLoop(60, this, this.refreshUI);
                }
            }, {
                key: "refreshUI",
                value: function () {
                    if (window.kaishiyouxi) {

                        var e = me.info();
                        this.owner.visible = e.active, this.owner.visible && (this.txtTitle.text = "Khu vực ".concat(e.island),
                            this.txtProgress.text = "".concat(e.complete, "/").concat(e.total), this.bar.width = this.barWidth * (e.complete / e.total));
                    }
                }
            }]), a;
        }(Laya.Script), et = function (t) {
            h(i, t);
            var a = c(i);
            function i() {
                var e;
                return u(this, i), (e = a.call(this)).key = "", e;
            }
            return d(i, [{
                key: "onEnable",
                value: function () {
                    this.bar = this.owner.getChildByName("Bar"), this.icon = this.owner.getChildByName("Icon"),
                        this.ad = this.owner.getChildByName("Ad");
                }
            }, {
                key: "onUpdate",
                value: function () {
                    var e = J.I.skill[this.key];
                    // console.log("使用道具：",e.cd)
                    e && (e.isUsed ? (this.ad.visible = !1, this.bar.visible = !0, this.bar.mask.graphics.clear(),
                        this.bar.mask.graphics.drawPie(this.bar.width / 2, this.bar.height / 2, this.bar.width / 2, 270, -360 * (1 - e.cd) + 270, "#ff0000")) : (this.ad.visible = G.IsShowVideoIcon,
                            this.bar.visible = !1));
                }
            }, {
                key: "onClick",
                value: function () {
                    //here
                    if (window.kaishiyouxi) {



                        var t = J.I.skill[this.key];
                        t && (t.isUsed || J.I.unlock(function (e) {
                            e && t.use();
                        }, e.ad));

                    }
                }
            }]), i;
        }(Laya.Script);
        !function (e) {
            e[e.high = 2] = "high", e[e.middle = 1] = "middle", e[e.low = 0] = "low";
        }(Ue || (Ue = {}));
        var tt = function () {
            function e() {
                if (u(this, e), this.rate = 1, this.Level = Ue.high, Laya.Browser.onMiniGame) {
                    if (this.SysInfo = wx.getSystemInfoSync(), Laya.Browser.onAndroid) {
                        var t = this.SysInfo.benchmarkLevel || 0;
                        this.Level = t;
                    } else if (Laya.Browser.onIOS || Laya.Browser.onIPhone) {
                        var a = this.SysInfo.model || "", i = (a = a.toLowerCase()).match(/^iphone (\d*|x|xr|se)/)[0].substring(7);
                        if ("x" === i || "xr" === i || "se" === i) this.Level = Ue.middle; else {
                            var n = parseInt(i);
                            this.Level = n > 10 ? Ue.high : Ue.low;
                        }
                    }
                } else this.SysInfo = {
                    model: "",
                    windowWidth: Laya.Browser.width,
                    windowHeight: Laya.Browser.height,
                    statusBarHeight: 0,
                    benchmarkLevel: -1,
                    safeArea: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: Laya.Browser.width,
                        height: Laya.Browser.height
                    },
                    deviceOrientation: Laya.Browser.height > Laya.Browser.width ? "portrait" : "landscape"
                }, this.Level = Ue.high;
                Laya.stage.height > Laya.stage.width ? this.rate = Laya.stage.width / this.SysInfo.windowWidth : this.rate = Laya.stage.height / this.SysInfo.windowHeight;
            }
            return d(e, [{
                key: "statusBarHeight",
                get: function () {
                    return this.SysInfo.statusBarHeight * this.rate;
                }
            }, {
                key: "safeArea",
                get: function () {
                    return {
                        left: this.SysInfo.safeArea.left * this.rate,
                        right: this.SysInfo.safeArea.right * this.rate,
                        top: this.SysInfo.safeArea.top * this.rate,
                        bottom: this.SysInfo.safeArea.bottom * this.rate,
                        width: this.SysInfo.safeArea.width * this.rate,
                        height: this.SysInfo.safeArea.height * this.rate
                    };
                }
            }, {
                key: "isLongScreen",
                get: function () {
                    return Laya.Browser.clientHeight / Laya.Browser.clientWidth > 2;
                }
            }], [{
                key: "I",
                get: function () {
                    return this._I || (this._I = new e()), this._I;
                }
            }]), e;
        }();
        tt._I = null;
        var at = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                var e;
                return u(this, a), (e = t.call(this)).isInit = !1, e.left = NaN, e.right = NaN,
                    e.top = NaN, e.bottom = NaN, e;
            }
            return d(a, [{
                key: "onEnable",
                value: function () {
                    this.init(), this.refresh();
                }
            }, {
                key: "init",
                value: function () {
                    this.isInit || (this.left = this.owner.left, this.right = this.owner.right, this.top = this.owner.top,
                        this.bottom = this.owner.bottom);
                }
            }, {
                key: "refresh",
                value: function () {
                    var e = tt.I.safeArea;
                    isNaN(this.owner.left) || (this.owner.left = e.left + this.left), isNaN(this.owner.right) || (this.owner.right = e.right + this.right),
                        isNaN(this.owner.top) || (this.owner.top = e.top + this.top), isNaN(this.owner.bottom) || (this.owner.bottom = e.bottom + this.bottom);
                }
            }]), a;
        }(Laya.Script), it = {
            MainScene: [Xe, {
                path: "Camera",
                script: Re
            }, {
                    path: "Player",
                    script: Je
                }, {
                    path: /^Island\/Island[0-9]$/,
                    script: ze
                }, {
                    path: "GuideLine",
                    script: qe
                }, {
                    path: /^GuideLine\/Arrow[0-9]$/,
                    script: function (e) {
                        h(a, e);
                        var t = c(a);
                        function a() {
                            return u(this, a), t.call(this);
                        }
                        return d(a, [{
                            key: "onAwake",
                            value: function () {
                                this.body = this.owner.getChildByName("Body"), this.material = this.body.meshRenderer.material.clone();
                            }
                        }, {
                            key: "onEnable",
                            value: function () { }
                        }, {
                            key: "onLateUpdate",
                            value: function () {
                                var e = 16 / 1e3;
                                this.material.tilingOffsetY = this.owner.transform.localScaleZ, this.material.tilingOffsetW -= e,
                                    this.body.meshRenderer.material = this.material;
                            }
                        }]), a;
                    }(Laya.Script3D)
                }],
            NumScene: [function (e) {
                h(a, e);
                var t = c(a);
                function a() {
                    return u(this, a), t.call(this);
                }
                return d(a, [{
                    key: "onEnable",
                    value: function () {
                        this.owner.getChildByName("Num").addComponent(Te);
                    }
                }]), a;
            }(Laya.Script3D)]
        }, nt = {}, ot = ["num/0", "num/1", "num/2", "num/3", "num/4", "num/5", "num/6", "num/7", "num/8", "num/9", "num/subtract", "num/slash", "num/K", "num/M", "num/G", "num/T", "num/P", "num/E", "num/B", "num/point", "num/comma", "zhuanshi"], rt = ["Ore", "OreBuild", "Diamond", "Arrow", "egg_1", "egg_2", "egg_3", "egg_4", "egg_5", "egg_6", "egg_7", "egg_8", "shu_1", "shu_2", "shu_3", "shu_4", "shu_5", "shu_6", "shan_7", "shi_8", "shu_9", "zhu_10"], st = function () {
            function e() {
                u(this, e), this.isLoadSubpackage = !1, this.isInitUMSdk = !1, this.startTime = 0,
                    this.isLoad3D = !0, this.load3DProgress = 1, this.isComplete = !1, this.isLoadFont = !1,
                    this.autoResArr = ["散图资源", "图集资源", "音效资源", "背景音乐", "3d资源", "UI资源", "字体文件"], this.autoProgressStatus = !0,
                    this.autoProgress = 0, this.fontMap = ["rrzzhh.ttf"];
            }
            return d(e, [{
                key: "init",
                value: function () {
                    return D(this, void 0, void 0, a.default.mark(function e() {
                        var t = this;
                        return a.default.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return J.I.init(), Fw.Platform.reportAnalytics("LoadStart"), this.startTime = Laya.timer.currTimer,
                                        this.loadSubpackage(), e.next = 6, G.Init().then(function () {
                                            t.isInitUMSdk = !0, t.complete();
                                        }).catch(function (e) {
                                            console.log("ccccccc", e), t.isInitUMSdk = !0, t.complete();
                                        });

                                case 6:
                                    this.load3d(), this.loadFont();

                                case 8:
                                case "end":
                                    return e.stop();
                            }
                        }, e, this);
                    }));
                }
            }, {
                key: "loadSubpackage",
                value: function () {
                    var e = this;
                    this.isLoadSubpackage = !0;
                    this.completeSounds()
                    // Fw.Platform.subpackageStatus ? function () {
                    //     for (var t = ["res", "resources", "sounds", "font"], a = t.length, i = 0, n = function (n) {
                    //         var o = t[n];
                    //         Fw.Platform.loadSubpackage(o, function () {
                    //             console.log("complete", i + 1, a), "sounds" === o && e.completeSounds(), ++i >= a && (e.isLoadSubpackage = !0,
                    //                 e.complete());
                    //         });
                    //     }, o = 0; o < a; o++) n(o);
                    // }() : (, this.completeSounds(), this.complete());
                }
            }, {
                key: "load3d",
                value: function () {
                    var e = this;
                    Fw.Platform.subpackageStatus ? Fw.Platform.loadSubpackage("d3", function (t) {
                        e.complete3d(), Fw.state.load3DProgress = 1, Fw.state.isLoad3D = !0;
                    }, function (e) {
                        Fw.state.load3DProgress = e;
                    }) : (this.complete3d(), Fw.state.isLoad3D = !0, Fw.state.load3DProgress = 1);
                }
            }, {
                key: "complete",
                value: function () {
                    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>INIT COMPLETE2", this.isLoadSubpackage, this.isInitUMSdk, this.isLoadFont);
                    if (!this.isComplete) {
                        this.isLoadSubpackage && this.isInitUMSdk && (this.isComplete = !0, this._complete());
                    }

                }
            }, {
                key: "_complete",
                value: function () {
                    var e = this;
                    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>INIT COMPLETE"),
                        Fw.Platform.reportAnalytics("LoadEnd", {
                            duration: Laya.timer.currTimer - this.startTime
                        }), Laya.timer.once(3e3, this, function () {
                            console.log("MainScene")
                            Fw.D3.openScene3D(w + "MainScene.ls", it.MainScene, Laya.Handler.create(e, function () {
                                e.autoProgressStatus = !1, e.autoProgress = 1, Fw.Scene.open(Q.GameView);
                            }));
                        });
                }
            }, {
                key: "completeSounds",
                value: function () {
                    // Fw.Sound.playMusic(C.bgm), Laya.stage.on(Laya.Event.CLICK, this, function (e) {
                    //     ("btn" === e.target.name.toLowerCase().substr(0, 3) || "close" === e.target.name) && Fw.Sound.playSound(C.click);
                    // });
                }
            }, {
                key: "complete3d",
                value: function () {
                    var e, t = r(rt);
                    try {
                        for (t.s(); !(e = t.n()).done;) {
                            var a = e.value;
                            Fw.D3.loadSprite3D(w + a + ".lh", nt[a]);
                        }
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        t.e(e);
                    } finally {
                        t.f();
                    }
                    for (var i = ["biaoshipai_bianse", "jinbi_bianse", "caodi", "dixiakuangmian", "kuangmian", "tudi", "tudi_bianse", "tulu", "yingbi"], n = 1; n <= 10; n++) {
                        var o, s = r(i);
                        try {
                            for (s.s(); !(o = s.n()).done;) {
                                var l = o.value;
                                ot.push("LV" + n + "/" + l);
                            }
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            s.e(e);
                        } finally {
                            s.f();
                        }
                    }
                    console.log("PreLoadMaterialList", ot);
                    var h, c = r(ot);
                    try {
                        for (c.s(); !(h = c.n()).done;) {
                            var u = h.value;
                            Fw.D3.loadMaterial(g + u + ".lmat", Laya.Handler.create(this, function (e) {
                                e.lock = !0;
                            }));
                        }
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        c.e(e);
                    } finally {
                        c.f();
                    }
                    Oe.__init__();
                }
            }, {
                key: "loadFont",
                value: function () {
                    var e = this;
                    Fw.Platform.subpackageStatus ? Fw.Platform.loadSubpackage("font", function (t) {
                        e._loadFont();
                    }, function (e) { }) : this._loadFont();
                }
            }, {
                key: "_loadFont",
                value: function () {
                    var e = this;
                    if (Laya.Browser.onMiniGame) {
                        var t, a = r(this.fontMap);
                        try {
                            for (a.s(); !(t = a.n()).done;) {
                                var i = t.value;
                                wx.loadFont(i);
                            }
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            a.e(e);
                        } finally {
                            a.f();
                        }
                        this.isLoadFont = !0, this.complete();
                    } else Laya.loader.load(this.fontMap, Laya.Handler.create(this, function () {
                        e.isLoadFont = !0, e.complete();
                    }));
                }
            }], [{
                key: "I",
                get: function () {
                    return this._I || (this._I = new this()), this._I;
                }
            }]), e;
        }();
        st._I = null;
        var lt = function (e) {
            h(a, e);
            var t = c(a);
            function a() {
                var e;
                return u(this, a), (e = t.call(this)).Txt = null, e.Bar = null, e;
            }
            return d(a, [{
                key: "onEnable",
                value: function () {
                    st.I.init();
                }
            }, {
                key: "onUpdate",
                value: function () {
                    st.I.autoProgressStatus && (st.I.autoProgress += .01, this.setProgress(st.I.autoProgress % 1, st.I.autoResArr[Math.floor(st.I.autoProgress) % st.I.autoResArr.length]));
                }
            }, {
                key: "setProgress",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "资源加载";
                    e < 0 ? e = 0 : e > 1 && (e = 1), this.Bar && (this.Bar.mask.graphics.clear(), this.Bar.mask.graphics.drawRect(0, 0, this.Bar.width * e, this.Bar.height, "#ff0000")),
                        this.Txt && (this.Txt.text = t + ":" + Math.ceil(100 * e) + "%");
                }
            }]), a;
        }(Laya.Script),
            ht = function (e) {
                h(a, e);
                var t = c(a);
                function a() {
                    var e;
                    return u(this, a), (e = t.call(this))._closeCallback = null, e;
                }
                return d(a, [{
                    key: "onEnable",
                    value: function () {
                        var e = this;
                        this.owner.onOpened = function (t) {
                            t && "function" == typeof t.onClose && (e._closeCallback = t.onClose);
                        }, G.UMConfig.Value.ForceGridAd && (this.btnClose.visible = !1, Laya.timer.once(3e3, this, function () {
                            e.btnClose.visible = !0;
                        })), G.SetCustomCloseCB(G.UMConfig.Custom_Page_Top_Index, null), G.ShowCustom([G.UMConfig.Custom_Page_Top_Index]);
                    }
                }, {
                    key: "onDisable",
                    value: function () {
                        "function" == typeof this._closeCallback && this._closeCallback(), G.HideCustom([G.UMConfig.Custom_Page_Top_Index]);
                    }
                }, {
                    key: "onClick",
                    value: function (e) {
                        switch (e.target.name) {
                            case "BtnClose":
                                this.owner.close();
                        }
                    }
                }]), a;
            }(Laya.Script), ct = function (e) {
                h(a, e);
                var t = c(a);
                function a() {
                    var e;
                    return u(this, a), (e = t.call(this)).Progress = null, e.MysticBoxBtn = null, e.nodeBoxClose = null,
                        e.nodeBoxOpen = null, e.nodeLight = null, e.barMax = 563, e._alreadyClick = !1,
                        e._clickRate = .14, e._autoRate = .006, e;
                }
                return d(a, [{
                    key: "onAwake",
                    value: function () {
                        this.owner.height = Laya.stage.height;
                    }
                }, {
                    key: "onEnable",
                    value: function () {
                        var e = this;
                        this.Progress.width = 0, this._fillRange = 0, this.MysticBoxBtn.visible = !0, this.nodeBoxClose.visible = !0,
                            this.nodeBoxOpen.visible = !1, this.nodeLight.visible = !1, this._alreadyClick = !1,
                            this._bannerStatus = G.GetBannerStatus(), this._bannerStatus && G.HideBanner(),
                            this.owner.onOpened = function (t) {
                                e._onClose = t.onClose;
                            }, this.random = .4 * Math.random() + .3;
                    }
                }, {
                    key: "ShowFinish",
                    value: function () {
                        var e = this;
                        this.MysticBoxBtn.visible = !1, this.nodeBoxClose.visible = !1, this.nodeBoxOpen.visible = !0,
                            this.nodeLight.visible = !0, Laya.timer.clearAll(this), Laya.timer.once(500, this, function () {
                                e.Hide();
                            });
                    }
                }, {
                    key: "Hide",
                    value: function () {
                        G.HideBanner(), this._bannerStatus && (G.ShowBanner(), this._bannerStatus = !1),
                            Laya.timer.clearAll(this.MysticBoxBtn), this.owner.close(), this._onClose && this._onClose();
                    }
                }, {
                    key: "onUpdate",
                    value: function () {
                        this._fillRange -= this._autoRate, this._fillRange <= 0 && (this._fillRange = 0),
                            this.Progress.width = this.barMax * this._fillRange, this.nodeLight.rotation += 2;
                    }
                }, {
                    key: "onClick",
                    value: function (e) {
                        var t = this;
                        switch (e.target.name) {
                            case "BtnClick":
                                this._fillRange += this._clickRate, this.Progress.width = this.barMax * this._fillRange,
                                    this._fillRange >= this.random && !this._alreadyClick && (this._alreadyClick = !0,
                                        G.ShowBanner(), Laya.timer.once(1e3, this.MysticBoxBtn, function () {
                                            G.HideBanner();
                                            (function e(a) {
                                                Laya.timer.once(1500, t.MysticBoxBtn, function () {
                                                    G.ShowBanner(), a(e);
                                                });
                                            })(function e(a) {
                                                Laya.timer.once(1e3, t.MysticBoxBtn, function () {
                                                    G.HideBanner(), a(e);
                                                });
                                            }), Laya.timer.once(300, t.MysticBoxBtn, function () {
                                                t.ShowFinish();
                                            });
                                        })), this._fillRange >= 1 && this.MysticBoxBtn.visible && (this._fillRange = 1,
                                            this.ShowFinish());
                        }
                    }
                }]), a;
            }(Laya.Script), ut = function (e) {
                h(a, e);
                var t = c(a);
                function a() {
                    var e;
                    return u(this, a), (e = t.call(this))._closeCallback = null, e._startTime = 0, e;
                }
                return d(a, [{
                    key: "onEnable",
                    value: function () {
                        var e = this;
                        this._startTime = Laya.timer.currTimer, this.owner.onOpened = function (t) {
                            t && "function" == typeof t.onClose && (e._closeCallback = t.onClose);
                        }, G.SetCustomCloseCB(G.UMConfig.Custom_Page_Top_Index, null), G.ShowCustom([G.UMConfig.Custom_Page_Top_Index]);
                    }
                }, {
                    key: "onDisable",
                    value: function () {
                        "function" == typeof this._closeCallback && this._closeCallback(), G.HideCustom([G.UMConfig.Custom_Page_Top_Index]);
                    }
                }, {
                    key: "onClick",
                    value: function (e) {
                        switch (e.target.name) {
                            case "BtnClose":
                                if (Laya.timer.currTimer < this._startTime + 1500) return;
                                this.owner.close();
                        }
                    }
                }]), a;
            }(Laya.Script), dt = function () {
                function e() {
                    u(this, e);
                }
                return d(e, null, [{
                    key: "init",
                    value: function () {
                        var e = Laya.ClassUtils.regClass;
                        //所有脚本
                        e("code2d/dialog/CuttingDialog.ts", oe), e("code2d/dialog/EggDialog.ts", fe), e("umsdk/prefab/VideoIcon.ts", we),
                            e("code2d/dialog/GiftDialog.ts", ge), e("code2d/dialog/MotorcycleDialog.ts", Le),
                            e("code2d/dialog/MyPetDialog.ts", ve), e("code2d/dialog/OfflineDialog.ts", pe),
                            e("code2d/dialog/PetDialog.ts", Ve), e("code2d/dialog/SetDialog.ts", ke), e("code2d/dialog/UnlockBuildDialog.ts", Ce),
                            e("code2d/dialog/UnlockDiamondDialog.ts", Se), e("code2d/dialog/UnlockElevatorDialog.ts", _e),
                            e("code2d/dialog/UnlockPetDialog.ts", be), e("code2d/dialog/UnlockPortalDialog.ts", Ie),
                            e("code2d/dialog/UpgradeDialog.ts", Be), e("code2d/dialog/WorkerDialog.ts", Pe),
                            e("code2d/prefab/PlayerInfo.ts", Ke), e("code2d/view/GameView.ts", Fe), e("code2d/prefab/CoinShow.ts", Ze),
                            e("code2d/prefab/DiamondShow.ts", Qe), e("code2d/prefab/HoleInfo.ts", $e), e("code2d/prefab/SkillCd.ts", et),
                            e("util/SafeArea.ts", at), e("code2d/view/LoadView.ts", lt), e("umsdk/export/laya/UMCustomPage.ts", ht),
                            e("umsdk/export/laya/UMLuckboxDialog.ts", ct), e("umsdk/export/laya/UMMultipleClicksPage.ts", H),
                            e("umsdk/export/laya/UMRecommendedAdPage.ts", ut);
                    }
                }]), e;
            }();
        dt.width = 750, dt.height = 1334, dt.scaleMode = "showall", dt.screenMode = "none",
            dt.alignV = "middle", dt.alignH = "center", dt.startScene = "loadui/LoadView.scene",
            dt.sceneRoot = "", dt.debug = !1, dt.stat = !1, dt.physicsDebug = !1, dt.exportSceneToJson = !0,
            dt.init();
        var yt, mt = Laya.ClassUtils.regClass;
        !function (e) {
            !function (e) {
                !function (e) {
                    var t = function (e) {
                        h(a, e);
                        var t = c(a);
                        function a() {
                            var e;
                            return u(this, a), (e = t.call(this)).effectData = a.uiView, e;
                        }
                        return d(a);
                    }(Laya.EffectAnimation);
                    t.uiView = {
                        type: "View",
                        props: {},
                        compId: 2,
                        child: [{
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                skin: "comp/image.png"
                            },
                            compId: 3
                        }],
                        animations: [{
                            nodes: [{
                                target: 3,
                                keyframes: {
                                    scaleY: [{
                                        value: 1,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleY",
                                        index: 0
                                    }, {
                                        value: 1.2,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleY",
                                        index: 1
                                    }],
                                    scaleX: [{
                                        value: 1,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleX",
                                        index: 0
                                    }, {
                                        value: 1.2,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleX",
                                        index: 1
                                    }]
                                }
                            }],
                            name: "ani1",
                            id: 1,
                            frameRate: 24,
                            action: 0
                        }],
                        loadList: ["comp/image.png"],
                        loadList3D: []
                    }, e.BtnDownUI = t, mt("ui.gameui.ani.BtnDownUI", t);
                    var a = function (e) {
                        h(a, e);
                        var t = c(a);
                        function a() {
                            var e;
                            return u(this, a), (e = t.call(this)).effectData = a.uiView, e;
                        }
                        return d(a);
                    }(Laya.EffectAnimation);
                    a.uiView = {
                        type: "View",
                        props: {},
                        compId: 2,
                        child: [{
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                skin: "comp/image.png"
                            },
                            compId: 3
                        }],
                        animations: [{
                            nodes: [{
                                target: 3,
                                keyframes: {
                                    scaleY: [{
                                        value: 1,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleY",
                                        index: 0
                                    }, {
                                        value: 1.2,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleY",
                                        index: 1
                                    }, {
                                        value: 1,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleY",
                                        index: 5
                                    }],
                                    scaleX: [{
                                        value: 1,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleX",
                                        index: 0
                                    }, {
                                        value: 1.2,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleX",
                                        index: 1
                                    }, {
                                        value: 1,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleX",
                                        index: 5
                                    }]
                                }
                            }],
                            name: "ani1",
                            id: 1,
                            frameRate: 24,
                            action: 0
                        }],
                        loadList: ["comp/image.png"],
                        loadList3D: []
                    }, e.BtnScaleUI = a, mt("ui.gameui.ani.BtnScaleUI", a);
                    var i = function (e) {
                        h(a, e);
                        var t = c(a);
                        function a() {
                            var e;
                            return u(this, a), (e = t.call(this)).effectData = a.uiView, e;
                        }
                        return d(a);
                    }(Laya.EffectAnimation);
                    i.uiView = {
                        type: "View",
                        props: {},
                        compId: 2,
                        child: [{
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                skin: "comp/image.png",
                                scaleY: .8,
                                scaleX: .8
                            },
                            compId: 3
                        }],
                        animations: [{
                            nodes: [{
                                target: 3,
                                keyframes: {
                                    scaleY: [{
                                        value: 1.2,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleY",
                                        index: 0
                                    }, {
                                        value: 1,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleY",
                                        index: 4
                                    }],
                                    scaleX: [{
                                        value: 1.2,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleX",
                                        index: 0
                                    }, {
                                        value: 1,
                                        tweenMethod: "linearNone",
                                        tween: !0,
                                        target: 3,
                                        key: "scaleX",
                                        index: 4
                                    }]
                                }
                            }],
                            name: "ani1",
                            id: 1,
                            frameRate: 24,
                            action: 0
                        }],
                        loadList: ["comp/image.png"],
                        loadList3D: []
                    }, e.BtnUpUI = i, mt("ui.gameui.ani.BtnUpUI", i);
                }(e.ani || (e.ani = {}));
            }(e.gameui || (e.gameui = {}));
        }(yt || (yt = {})), new (function () {
            function e() {
                var t = this;
                u(this, e);
                var a = new Config3D();
                a.isAntialias = !0, a.enableMultiLight = !1, window.Laya3D && Laya3D.init(dt.width, dt.height, a, Laya.Handler.create(this, function () {
                    Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(),
                        Laya.stage.scaleMode = dt.scaleMode, Laya.stage.screenMode = dt.screenMode, Laya.stage.alignV = dt.alignV,
                        Laya.stage.alignH = dt.alignH, Laya.URL.exportSceneToJson = dt.exportSceneToJson,
                        (dt.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(),
                        dt.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), dt.stat && Laya.Stat.show(),
                        Laya.alertGlobalError(!0), yt.gameui.ani.BtnScaleUI, UIConfig.closeDialogOnSide = !1,
                        UIConfig.popupBgAlpha = .8, m.name = Laya.Browser.onMiniGame ? "wx" : "debug", Fw.init(m, f),
                        Laya.ResourceVersion.enable("version.json", Laya.Handler.create(t, t.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
                }));
            }
            return d(e, [{
                key: "onVersionLoaded",
                value: function () {
                    Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
                }
            }, {
                key: "onConfigLoaded",
                value: function () {
                    window["showMetheAuthor"] = function () {
                        const iframe = document.createElement("iframe");
                        iframe.style.display = 'none';
                        document.head.appendChild(iframe);
                        const logger = iframe.contentWindow["console"];
                        logger.log.apply(this, [
                            "%c %c %c YYGGAMES %c%s %c %c ",
                            "background: #fb8cb3",
                            "background: #d44a52",
                            "color: #ffffff; background: #871905",
                            "color: #ffffff;background: #871905;",
                            '116,104,101,32,103,97,109,101,32,105,115,32,112,111,119,101,114,101,100,32,98,121,32,121,121,103'
                                .split(",").map(iter => { return String.fromCharCode(~~iter) }).join(""),
                            "background: #d44a52",
                            "background: #fb8cb3"]);
                    }

                    Laya.loader.load("d3/Conventional/Assets/Art/Texture/num/depth.png")
                    //Dig-Deep-V9\d3\Conventional\Assets\Art\Texture\num\depth.png
                    YYGGames.init("Dig-Deep", () => {
                        //logo
                        YYGGames.icon.scaleX = YYGGames.icon.scaleY = 0.5
                        YYGGames.icon.top = 5
                        YYGGames.icon.right = 5
                        //logo 交叉推广
                        YYGGames.gameBox.game1.visible = YYGGames.gameBox.game2.visible = false
                        YYGGames.gameBox.game1.y = YYGGames.gameBox.game2.y = 1225
                        YYGGames.gameBox.game1.x = 150
                        YYGGames.gameBox.game2.x = 150
                        YYGGames.gameBox.game2.x = 600
                        YYGGames.gameBox.game1.visible = true
                        YYGGames.gameBox.game2.visible = true
                        //滚动条
                        YYGGames.gameBanner.visible = false
                        YYGGames.gameBanner.bottom = 10
                        //加载游戏场景
                        dt.startScene && Laya.Scene.open(dt.startScene);
                    });
                }
            }]), e;
        }())();
    }();
})()

