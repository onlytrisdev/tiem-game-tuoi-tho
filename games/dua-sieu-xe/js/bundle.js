var __extends = this && this.__extends || function() {
    var t = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(t, e) {
        t.__proto__ = e
    } || function(t, e) {
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
    };
    return function(e, i) {
        function __() {
            this.constructor = e
        }
        t(e, i), e.prototype = null === i ? Object.create(i) : (__.prototype = i.prototype, new __)
    }
}();
! function() {
    return function r(t, e, i) {
        function o(n, s) {
            if (!e[n]) {
                if (!t[n]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(n, !0);
                    if (a) return a(n, !0);
                    var d = new Error("Cannot find module '" + n + "'");
                    throw d.code = "MODULE_NOT_FOUND", d
                }
                var c = e[n] = {
                    exports: {}
                };
                t[n][0].call(c.exports, function(e) {
                    return o(t[n][1][e] || e)
                }, c, c.exports, r, t, e, i)
            }
            return e[n].exports
        }
        for (var a = "function" == typeof require && require, n = 0; n < i.length; n++) o(i[n]);
        return o
    }
}()({
    1: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./compUI/zsAdList"),
            o = t("./script/views/LayoutView"),
            n = t("./script/views/GameEnd"),
            s = t("./script/views/GetBoxView"),
            r = t("./script/views/GuideUI"),
            l = t("./script/wx/WXLaunch"),
            d = t("./script/views/MainUI"),
            c = t("./script/views/MakeSureDia"),
            u = t("./script/views/PolymerizationUI"),
            h = t("./script/views/TipView"),
            f = t("./script/views/TogetANewCarUI"),
            p = t("./script/views/TogetMoneyUI"),
            m = function() {
                function GameConfig() {}
                return GameConfig.init = function() {
                    var t = Laya.ClassUtils.regClass;
                    t("compUI/zsAdList.ts", a.default), t("script/views/LayoutView.ts", o.default), t("script/views/GameEnd.ts", n.default), t("script/views/GetBoxView.ts", s.default), t("script/views/GuideUI.ts", r.default), t("script/wx/WXLaunch.ts", l.default), t("script/views/MainUI.ts", d.default), t("script/views/MakeSureDia.ts", c.default), t("script/views/PolymerizationUI.ts", u.default), t("script/views/TipView.ts", h.default), t("script/views/TogetANewCarUI.ts", f.default), t("script/views/TogetMoneyUI.ts", p.default)
                }, GameConfig.width = 750, GameConfig.height = 1334, GameConfig.scaleMode = "fixedwidth", GameConfig.screenMode = "vertical", GameConfig.alignV = "middle", GameConfig.alignH = "center", GameConfig.startScene = "Launch.scene", GameConfig.sceneRoot = "", GameConfig.debug = !1, GameConfig.stat = !1, GameConfig.physicsDebug = !1, GameConfig.exportSceneToJson = !0, GameConfig
            }();
        i.default = m, m.init()
    }, {
        "./compUI/zsAdList": 3,
        "./script/views/GameEnd": 27,
        "./script/views/GetBoxView": 28,
        "./script/views/GuideUI": 29,
        "./script/views/LayoutView": 30,
        "./script/views/MainUI": 31,
        "./script/views/MakeSureDia": 32,
        "./script/views/PolymerizationUI": 33,
        "./script/views/TipView": 34,
        "./script/views/TogetANewCarUI": 35,
        "./script/views/TogetMoneyUI": 36,
        "./script/wx/WXLaunch": 42
    }],
    2: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./GameConfig");
        new(function() {
            function Main() {
                window.Laya3D ? Laya3D.init(a.default.width, a.default.height) : Laya.init(a.default.width, a.default.height, Laya.WebGL), Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), Laya.stage.scaleMode = a.default.scaleMode, Laya.stage.screenMode = a.default.screenMode, Laya.URL.exportSceneToJson = a.default.exportSceneToJson, (a.default.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), a.default.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), a.default.stat && Laya.Stat.show(), Laya.alertGlobalError = !0, this.onVersionLoaded()
            }
            return Main.prototype.onVersionLoaded = function() {
                Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded))
            }, Main.prototype.onConfigLoaded = function() {
                var t = [{
                    url: "loading/loading.atlas",
                    type: Laya.Loader.ATLAS
                }];
                Laya.loader.load(t, Laya.Handler.create(this, function() {
                    a.default.startScene && Laya.Scene.open(a.default.startScene)
                }))
            }, Main
        }())
    }, {
        "./GameConfig": 1
    }],
    3: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        t("../script/models/UserData");
        var a = t("../script/platform/wx/zs.sdk.js"),
            o = t("../script/models/ConfigData"),
            n = function(t) {
                function zsAdList() {
                    var e = t.call(this) || this;
                    return e.dragSleep = 5e3, e.scrollSpeed = 5e3, e.hotIds = [], e.passedTime = 0, e.inAutoScroll = !1, e.isDataUpdate = !1, e.adData = [], e.list = null, e
                }
                return __extends(zsAdList, t), zsAdList.prototype.requestAdData = function() {}, zsAdList.prototype.initHotIds = function() {
                    for (var t = Math.random() < .5 ? 3 : 4, e = Math.floor(this.adData.length / t), i = 0; i < t; i++) this.hotIds.push(Math.floor(e * Math.random()) + i * e)
                }, zsAdList.prototype.freshAdList = function() {
                    this.adData = this.adData.filter(function(t) {
                        return Laya.Browser.onAndroid || "wx48820730357d81a6" != t.appid && "wxc136d75bfc63107c" != t.appid && "wx3df1cf2a43a6b16d" != t.appid && "wx19fe122baf8d8038" != t.appid && "wx00983713f183229b" != t.appid
                    }), this.list.array = this.adData, this.autoScroll && this.startAutoScrollAd();
                    if (null != this.maxNum)
                        if (this.adData.length < this.maxNum)
                            for (; this.adData.length < this.maxNum;) this.adData.push(this.adData[Math.floor(Math.random() * this.adData.length)]);
                        else if (this.adData.length > this.maxNum)
                        for (; this.adData.length > this.maxNum;) this.adData.splice(Math.floor(Math.random() * this.adData.length), 1);
                    this.list.array = this.adData, this.autoScroll && this.owner.frameOnce(1, this, this.startAutoScrollAd)
                }, zsAdList.prototype.startAutoScrollAd = function() {
                    this.inAutoScroll = !0;
                    var t = this.list.repeatX ? this.list.repeatX : 1,
                        e = this.list.repeatY ? this.list.repeatY : 1;
                    if ("垂直滑动" == this.scrollDir) {
                        var i = this.list.array.length - this.list.array.length % t - t;
                        this.autoScrollAd(0, i, i * this.scrollSpeed)
                    } else if ("水平滑动" == this.scrollDir) {
                        i = Math.ceil(this.list.array.length / e) - t;
                        this.autoScrollAd(0, i, i * this.scrollSpeed)
                    }
                }, zsAdList.prototype.autoScrollAd = function(t, e, i) {
                    this.list.tweenTo(e, i, Laya.Handler.create(this, this.autoScrollAd, [e, t, i]))
                }, zsAdList.prototype.onItemRender = function(t, e) {
                    var i = this.list.array[e],
                        a = t.getChildByName("icon");
                    a && a.loadImage(i.app_icon, null);
                    var o = t.getChildByName("name");
                    o && (o.text = i.app_title);
                    var n = t.getChildByName("desc");
                    if (n && (n.text = i.app_desc), 1 != this.isDataUpdate) {
                        var s = t.getChildByName("titleBg");
                        s && (s.index = Math.floor(s.clipY * Math.random()));
                        var r = t.getChildByName("tag");
                        if (r) this.hotIds.indexOf(e) > 0 ? (r.visible = !0, r.index = Math.floor(r.clipY * Math.random())) : r.visible = !1;
                        else {
                            var l = t.getChildByName("hot"),
                                d = t.getChildByName("new");
                            l && (l.visible = !1), d && (d.visible = !1), this.hotIds.indexOf(e) > 0 && (l && d ? Math.random() < .5 ? l.visible = !0 : d.visible = !0 : l && !d ? l.visible = !0 : d && !l && (d.visible = !0))
                        }
                    }
                }, zsAdList.prototype.onSelectAd = function(t) {
                    if (-1 != t) {
                        var e = this.list.array[t],
                            i = this;
                        a.navigate2Mini(e, this.userId, function() {
                            Laya.stage.event(o.default.EventDefine.ZS_APP_JUMP_SUCCESS)
                        }, function() {
                            Laya.stage.event(o.default.EventDefine.ZS_APP_JUMP_CANCEL)
                        }, function() {
                            i.isDataUpdate = !0, i.list.selectedIndex = -1
                        })
                    }
                }, zsAdList.prototype.params2String = function(t) {
                    for (var e = t[0] + "=" + t[1], i = 2; i < t.length; i += 2) e += "&" + t[i] + "=" + t[i + 1];
                    return e
                }, zsAdList.prototype.onDragStateChanged = function(t) {
                    this.inAutoScroll = !1, this.autoScroll && 0 == t && (this.passedTime = 0)
                }, zsAdList.prototype.onEnable = function() {}, zsAdList.prototype.onDisable = function() {}, zsAdList.prototype.onAwake = function() {}, zsAdList.prototype.onStart = function() {}, zsAdList.prototype.onUpdate = function() {}, zsAdList
            }(Laya.Script);
        i.default = n
    }, {
        "../script/models/ConfigData": 18,
        "../script/models/UserData": 19,
        "../script/platform/wx/zs.sdk.js": 22
    }],
    4: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./models/ConfigData"),
            o = t("./mgrCommon/HttpMgr"),
            n = t("./mgrCommon/StorageMgr"),
            s = t("./mgrCommon/PlatformMgr"),
            r = t("./models/UserData"),
            l = t("./mgrCommon/EventMgr"),
            d = t("./platform/wx/zs.sdk.js"),
            c = t("./platform/android/zs.sdk"),
            u = function(t) {
                function Login() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(Login, t), Login.prototype.login = function() {
                    this.loginFun()
                }, Login.prototype.loginFun = function() {
                    var t = this;
                    window.h5api && window.zsSdk.isLogin() ? (console.log("4399登录"), s.default.callAPIMethodByProxy("doLogin", {
                        success: function(t) {
                            console.log("获取本地数据缓存"), r.default.storageInitUser(), o.default.instance.getSystemConfig()
                        },
                        fail: function(e) {
                            t.loginFun()
                        }
                    })) : (console.log("获取本地数据缓存"), r.default.storageInitUser(), o.default.instance.getSystemConfig())
                }, Login.prototype.loginSuccess = function(t) {
                    if (t && t.data)
                        if (1 == t.data.status) {
                            if (r.default.isLogin = !t.androidLogin, r.default.userId = t.data.user_id || 0, r.default.openId = t.data.openid || "", r.default.isFirstLogin = t.data.is_first_login, r.default.isNew = 1 == t.data.is_new_user, r.default.isFirstLogin) "showInterstitialAd" == localStorage.getItem("showInterstitialAd") && localStorage.removeItem("showInterstitialAd"), localStorage.getItem("pushCarTime") && localStorage.removeItem("pushCarTime");
                            if (o.default.instance.getSystemConfig(), "qq" == a.default.platformType) d.init(r.default.userId, s.default.callAPIMethodByProxy("mobileType"));
                            else if ("android" == a.default.platformType || "h5" == a.default.platformType) {
                                var e = s.default.callAPIMethodByProxy("getLoginInfo"),
                                    i = e && e.identityId ? e.identityId : "",
                                    u = e && e.channel ? e.channel : "";
                                c.init(i, u)
                            }
                            n.default.saveUserData()
                        } else l.default.instance.emit("openTip", t.data.msg)
                }, Login
            }(Laya.Script);
        i.default = u
    }, {
        "./mgrCommon/EventMgr": 12,
        "./mgrCommon/HttpMgr": 13,
        "./mgrCommon/PlatformMgr": 14,
        "./mgrCommon/StorageMgr": 16,
        "./models/ConfigData": 18,
        "./models/UserData": 19,
        "./platform/android/zs.sdk": 21,
        "./platform/wx/zs.sdk.js": 22
    }],
    5: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./mgrCommon/PlatformMgr"),
            o = t("./models/ConfigData"),
            n = t("./mgrCommon/StorageMgr"),
            s = t("./Login"),
            r = t("./mgrCommon/ViewMgr"),
            l = t("./platform/wx/zs.sdk.js"),
            d = function() {
                function MyInit() {}
                return MyInit.init = function() {
                    o.default.initLocal(), n.default.getLocalUserData(), "qq" == o.default.platformType ? l.loadConfig(function(t) {
                        o.default.loadConfig = t, o.default.loadConfig.zs_version = o.default.loadConfig.zs_number, o.default.ctrlInfo.shareInfo = {
                            img: t.zs_share_img,
                            title: t.zs_share_title,
                            id: 1
                        }, o.default.bannerAdUnitIdArr = [o.default.loadConfig.zs_banner_adunit, o.default.loadConfig.zs_banner_adunit2, o.default.loadConfig.zs_banner_adunit3], a.default.initPlatform(), r.default.instance.init(), (new s.default).login()
                    }, function(t) {}) : "android" != o.default.platformType && "ios" != o.default.platformType && "h5" != o.default.platformType || (a.default.initPlatform(), r.default.instance.init(), (new s.default).login())
                }, MyInit
            }();
        i.default = d
    }, {
        "./Login": 4,
        "./mgrCommon/PlatformMgr": 14,
        "./mgrCommon/StorageMgr": 16,
        "./mgrCommon/ViewMgr": 17,
        "./models/ConfigData": 18,
        "./platform/wx/zs.sdk.js": 22
    }],
    6: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../tools/MyUtils"),
            o = t("./GameMgr"),
            n = t("../models/ConfigData"),
            s = t("../mgrCommon/EventMgr"),
            r = t("../models/UserData"),
            l = t("../mgrCommon/SoundMgr"),
            d = t("./BaseCar"),
            c = t("../tools/MyLog"),
            u = function(t) {
                function AICar() {
                    var e = t.call(this) || this;
                    return e.outPos = new Laya.Vector3, e.lastPoint = null, e.lastBuffPoint = [], e.listIndex = 0, e.loadAddRotY = 0, e.addRotY = 0, e.moveExecuteCount = 0, e.limitAddRotY = 0, e.collisionSuc = !1, e.collisionOffsetX = 0, e.collisionOffsetZ = 0, e
                }
                return __extends(AICar, t), AICar.prototype.getSerialNumber = function() {
                    return this.serialNumber
                }, AICar.prototype.init = function(t, e, i, o, s, r, l) {
                    var d = this;
                    if (this.InitBase("AICar"), this.child = this.GetObj().getChildAt(0).getChildAt(0), this.eff_somke = this.GetObj().getChildByName("eff_somke"), this.eff_shache = this.GetObj().getChildByName("eff_shache"), this.Show(), this.mapIndex = s, this.roadPointList = r, this.infoData = e, this.serialNumber = o, this.carId = i, this.myTween = new Laya.Tween, this.isDead = !1, this.lastCollisionCar = null, this.resurrectionPointList = l, this.moveState = n.CARMOVESTATE.default, n.default.carConfigInfo.forEach(function(t) {
                            t.id == i && (d.infoData.id = t.id, d.infoData.speed = t.speed, d.infoData.unit_rot_y = t.unit_rot_y, d.infoData.impact_force = t.impact_force, d.infoData.scale_resistance = t.scale_resistance, d.infoData.scale = t.scale, d.infoData.scale_factor = t.scale_factor, d.infoData.bump_resistance = t.bump_resistance)
                        }), t.y = 0, this.SetPosition(t), this.saveDeadPos = t, this.saveDeadTime = 0, this.saveCountdownToResurrection = 0, this.saveShowNumber = 0, this.resurrectionProbability = 60, this.roadPointList) {
                        var c = Number.MAX_VALUE;
                        this.roadPointList.forEach(function(t, e) {
                            var i = Laya.Vector3.distance(t, d.GetPosition());
                            i < c && (c = i, d.lastPoint = t, d.listIndex = e)
                        }), this.lastBuffPoint.push(this.lastPoint), this.setDirection()
                    } else {
                        var u = this.GetRotationEuler();
                        u.y = a.default.random(0, 359), this.SetRotationEuler(u), this.outVector.x = Math.cos(u.y * Math.PI / 180), this.outVector.z = -Math.sin(u.y * Math.PI / 180)
                    }
                    this.ResetChangRotation()
                }, AICar.prototype.onAwake = function() {}, AICar.prototype.onDestroy = function() {}, AICar.prototype.ResetChangRotation = function() {
                    this.isChangRotation = !1, this.leftTime = Laya.timer.currTimer + a.default.random(500, 3e3)
                }, AICar.prototype.moveType = function() {
                    var t = this.GetPosition(),
                        e = this.GetRotationEuler();
                    if (this.moveState == n.CARMOVESTATE.default) this.roadPointList ? this.toMoveRoadPoint(t, 1.5) : this.toMove(t, e), a.default.random(0, 999) < n.default.aiPursuitProbability && (this.moveState = n.CARMOVESTATE.pursueAndAttack, this.tragetCar = o.default.Instance.getTargetCar(this.GetPosition(), this.serialNumber), this.tragetStartTime = Laya.timer.currTimer + 5e3);
                    else if (this.moveState == n.CARMOVESTATE.pursueAndAttack)
                        if (this.tragetCar && 0 == this.tragetCar.getIsDead()) {
                            Laya.Vector3.subtract(this.tragetCar.GetPosition(), t, this.outPos), Laya.Vector3.normalize(this.outPos, this.outPos), this.outVector.x = this.outPos.x, this.outVector.z = this.outPos.z;
                            var i = Math.abs(this.outPos.z) / Math.abs(this.outPos.x),
                                s = 180 * Math.atan(i) / Math.PI;
                            this.outPos.x < 0 && this.outPos.z > 0 ? i = 180 + s : 0 == this.outPos.x && this.outPos.z > 0 ? i = 270 : this.outPos.x > 0 && this.outPos.z > 0 ? i = 360 - s : this.outPos.x > 0 && 0 == this.outPos.z ? i = 0 : this.outPos.x > 0 && this.outPos.z < 0 ? i = s : 0 == this.outPos.x && this.outPos.z < 0 ? i = 90 : this.outPos.x < 0 && this.outPos.z < 0 ? i = 180 - s : this.outPos.x < 0 && 0 == this.outPos.z && (i = 180), e.y = i, this.SetRotationEuler(e);
                            var r = t.x + this.outVector.x * this.infoData.speed,
                                l = t.z + this.outVector.z * this.infoData.speed;
                            a.default.mapMeshSizeJudge(this.mapIndex, r, l) ? (t.x = r, t.z = l, this.SetPosition(t), this.tragetStartTime < Laya.timer.currTimer && (this.moveState = n.CARMOVESTATE.default)) : this.moveState = n.CARMOVESTATE.default
                        } else this.moveState = n.CARMOVESTATE.default;
                    else this.moveState, n.CARMOVESTATE.runAway
                }, AICar.prototype.toMoveRoadPoint = function(t, e) {
                    var i = this;
                    if (Laya.Vector3.distance(this.lastPoint, this.GetPosition()) < e) {
                        if (this.mapIndex == n.MAPTYPE.map01 || this.mapIndex == n.MAPTYPE.map02 || this.mapIndex == n.MAPTYPE.map04) {
                            var o = Number.MAX_VALUE;
                            this.roadPointList.forEach(function(t) {
                                var e = !1;
                                if (i.lastBuffPoint.forEach(function(i) {
                                        i == t && (e = !0)
                                    }), 0 == e) {
                                    var a = Laya.Vector3.distance(t, i.GetPosition());
                                    a < o && (o = a, i.lastPoint = t)
                                }
                            }), this.lastBuffPoint.length >= 2 && this.lastBuffPoint.shift(), this.lastBuffPoint.push(this.lastPoint)
                        } else 0 == a.default.random(0, 1) ? this.listIndex++ : this.listIndex--, this.listIndex >= this.roadPointList.length ? this.listIndex = this.roadPointList.length - 1 : this.listIndex < 0 && (this.listIndex = 1), this.lastPoint = this.roadPointList[this.listIndex];
                        this.setDirection()
                    }
                    if (0 != this.loadAddRotY) {
                        var s = this.GetRotationEuler();
                        if (s.y < 0)
                            for (;;) {
                                if (!(s.y <= -360)) {
                                    s.y = 360 + s.y;
                                    break
                                }
                                s.y += 360
                            } else if (s.y > 0)
                                for (; s.y >= 360;) s.y -= 360;
                        var r = 0,
                            l = 0;
                        this.loadAddRotY < 0 ? (l = this.loadAddRotY <= -this.infoData.unit_rot_y ? -this.infoData.unit_rot_y : this.loadAddRotY, (r = s.y + l) < 0 && (r += 360), this.loadAddRotY -= l, this.loadAddRotY >= 0 && (this.loadAddRotY = 0)) : this.loadAddRotY > 0 && (l = this.loadAddRotY >= this.infoData.unit_rot_y ? this.infoData.unit_rot_y : this.loadAddRotY, (r = s.y + l) >= 360 && (r -= 360), this.loadAddRotY -= l, this.loadAddRotY <= 0 && (this.loadAddRotY = 0)), s.y = r, this.SetRotationEuler(s)
                    }
                    t.x += this.outVector.x * this.infoData.speed, t.z += this.outVector.z * this.infoData.speed, t.y > 0 && (t.y = 0), this.SetPosition(t)
                }, AICar.prototype.setDirection = function() {
                    Laya.Vector3.subtract(this.lastPoint, this.GetPosition(), this.outPos), Laya.Vector3.normalize(this.outPos, this.outPos), this.outVector.x = this.outPos.x, this.outVector.z = this.outPos.z;
                    var t = Math.abs(this.outPos.z) / Math.abs(this.outPos.x),
                        e = 180 * Math.atan(t) / Math.PI;
                    this.outPos.x < 0 && this.outPos.z > 0 ? t = 180 + e : 0 == this.outPos.x && this.outPos.z > 0 ? t = 270 : this.outPos.x > 0 && this.outPos.z > 0 ? t = 360 - e : this.outPos.x > 0 && 0 == this.outPos.z ? t = 0 : this.outPos.x > 0 && this.outPos.z < 0 ? t = e : 0 == this.outPos.x && this.outPos.z < 0 ? t = 90 : this.outPos.x < 0 && this.outPos.z < 0 ? t = 180 - e : this.outPos.x < 0 && 0 == this.outPos.z && (t = 180);
                    var i = this.GetRotationEuler();
                    if (i.y < 0)
                        for (;;) {
                            if (!(i.y <= -360)) {
                                i.y = 360 + i.y;
                                break
                            }
                            i.y += 360
                        } else if (i.y > 0)
                            for (; i.y >= 360;) i.y -= 360;
                    if (this.loadAddRotY = t - i.y, this.loadAddRotY > 0)
                        for (;;) {
                            if (!(this.loadAddRotY >= 360)) {
                                Math.abs(this.loadAddRotY) > 180 && (this.loadAddRotY -= 360);
                                break
                            }
                            this.loadAddRotY -= 360
                        } else if (this.loadAddRotY < 0)
                            for (;;) {
                                if (!(this.loadAddRotY <= -360)) {
                                    Math.abs(this.loadAddRotY) > 180 && (this.loadAddRotY += 360);
                                    break
                                }
                                this.loadAddRotY += 360
                            }
                }, AICar.prototype.toMove = function(t, e) {
                    if (0 != this.limitAddRotY) {
                        if ((n = e).y < 0)
                            for (;;) {
                                if (!(n.y <= -360)) {
                                    n.y = 360 + n.y;
                                    break
                                }
                                n.y += 360
                            } else if (n.y > 0)
                                for (; n.y >= 360;) n.y -= 360;
                        var i = 0,
                            o = 0;
                        this.limitAddRotY < 0 ? (o = this.limitAddRotY <= -this.infoData.unit_rot_y ? -this.infoData.unit_rot_y : this.limitAddRotY, (i = n.y + o) < 0 && (i += 360), this.limitAddRotY -= o, this.limitAddRotY >= 0 && (this.limitAddRotY = 0)) : this.limitAddRotY > 0 && (o = this.limitAddRotY >= this.infoData.unit_rot_y ? this.infoData.unit_rot_y : this.limitAddRotY, (i = n.y + o) >= 360 && (i -= 360), this.limitAddRotY -= o, this.limitAddRotY <= 0 && (this.limitAddRotY = 0)), n.y = i, this.SetRotationEuler(n), t.x += this.outVector.x * this.infoData.speed, t.z += this.outVector.z * this.infoData.speed, t.y > 0 && (t.y = 0), this.SetPosition(t), this.moveExecuteCount = 0
                    } else if (0 != this.addRotY) {
                        var n = e;
                        i = 0;
                        this.moveExecuteCount > 5 && (i = n.y + 180, this.addRotY = 0, this.outVector.x = Math.cos(i * Math.PI / 180), this.outVector.z = -Math.sin(i * Math.PI / 180));
                        var s = t.x + this.outVector.x * this.infoData.speed,
                            r = t.z + this.outVector.z * this.infoData.speed;
                        if (a.default.mapMeshSizeJudge(this.mapIndex, s, r)) {
                            t.x = s, t.z = r, t.y > 0 && (t.y = 0), this.SetPosition(t);
                            o = 0;
                            this.addRotY < 0 ? (o = this.addRotY <= -this.infoData.unit_rot_y ? -this.infoData.unit_rot_y : this.addRotY, (i = n.y + o) < 0 && (i += 360), this.addRotY -= o, this.addRotY >= 0 && (this.addRotY = 0, this.outVector.x = Math.cos(i * Math.PI / 180), this.outVector.z = -Math.sin(i * Math.PI / 180))) : this.addRotY > 0 && (o = this.addRotY >= this.infoData.unit_rot_y ? this.infoData.unit_rot_y : this.addRotY, (i = n.y + o) >= 360 && (i -= 360), this.addRotY -= o, this.addRotY <= 0 && (this.addRotY = 0, this.outVector.x = Math.cos(i * Math.PI / 180), this.outVector.z = -Math.sin(i * Math.PI / 180))), this.outVector.x = Math.cos(i * Math.PI / 180), this.outVector.z = -Math.sin(i * Math.PI / 180), n.y = i, this.SetRotationEuler(n), this.moveExecuteCount = 0
                        } else this.moveExecuteCount = Number.MAX_VALUE, this.randomAddRotYMove(t, e)
                    } else {
                        s = t.x + this.outVector.x * this.infoData.speed, r = t.z + this.outVector.z * this.infoData.speed;
                        !this.isChangRotation && a.default.mapMeshSizeJudge(this.mapIndex, s, r) ? (t.x = s, t.z = r, t.y > 0 && (t.y = 0), this.SetPosition(t), this.moveExecuteCount = 0) : (this.ResetChangRotation(), this.randomAddRotYMove(t, e))
                    }
                }, AICar.prototype.randomAddRotY = function(t) {
                    var e = 8 * a.default.random(1, 22),
                        i = t.y;
                    1 == a.default.random(0, 1) ? ((i += e) >= 360 && (i -= 360), this.addRotY = e) : ((i -= e) < 0 && (i += 360), this.addRotY = -e), this.outVector.x = Math.cos(i * Math.PI / 180), this.outVector.z = -Math.sin(i * Math.PI / 180)
                }, AICar.prototype.randomAddRotYMove = function(t, e) {
                    if (this.moveExecuteCount > 5) {
                        for (var i = Number.MAX_VALUE, o = null, n = 0; n < this.resurrectionPointList.length; n++) {
                            var s = Laya.Vector3.distance(this.resurrectionPointList[n], t);
                            i > s && a.default.mapMeshSizeJudge(this.mapIndex, this.resurrectionPointList[n].x, this.resurrectionPointList[n].z) && (i = s, o = new Laya.Vector3(this.resurrectionPointList[n].x, 0, this.resurrectionPointList[n].z))
                        }
                        if (o) {
                            Laya.Vector3.subtract(o, t, this.outPos), Laya.Vector3.normalize(this.outPos, this.outPos), this.outVector.x = this.outPos.x, this.outVector.z = this.outPos.z;
                            var l = Math.abs(this.outPos.z) / Math.abs(this.outPos.x),
                                d = 180 * Math.atan(l) / Math.PI;
                            this.outPos.x < 0 && this.outPos.z > 0 ? l = 180 + d : 0 == this.outPos.x && this.outPos.z > 0 ? l = 270 : this.outPos.x > 0 && this.outPos.z > 0 ? l = 360 - d : this.outPos.x > 0 && 0 == this.outPos.z ? l = 0 : this.outPos.x > 0 && this.outPos.z < 0 ? l = d : 0 == this.outPos.x && this.outPos.z < 0 ? l = 90 : this.outPos.x < 0 && this.outPos.z < 0 ? l = 180 - d : this.outPos.x < 0 && 0 == this.outPos.z && (l = 180);
                            var u = e.y;
                            if (u < 0)
                                for (;;) {
                                    if (!(u <= -360)) {
                                        u = 360 + u;
                                        break
                                    }
                                    u += 360
                                } else if (u > 0)
                                    for (; u >= 360;) u -= 360;
                            if (this.limitAddRotY = l - u, this.limitAddRotY > 0)
                                for (;;) {
                                    if (!(this.limitAddRotY >= 360)) {
                                        Math.abs(this.limitAddRotY) > 180 && (this.limitAddRotY -= 360);
                                        break
                                    }
                                    this.limitAddRotY -= 360
                                } else if (this.limitAddRotY < 0)
                                    for (;;) {
                                        if (!(this.limitAddRotY <= -360)) {
                                            Math.abs(this.limitAddRotY) > 180 && (this.limitAddRotY += 360);
                                            break
                                        }
                                        this.limitAddRotY += 360
                                    }
                        } else c.default.log(" 翻车了 翻车了 AICar move outpoint -- ", [i, o, t, r.default.gameData.mapComList, this.resurrectionPointList]);
                        this.moveExecuteCount = 0
                    } else this.moveExecuteCount++, this.randomAddRotY(e), this.toMove(t, e)
                }, AICar.prototype.toDead = function() {
                    var t = this.GetPosition();
                    if (this.saveDeadPos = new Laya.Vector3(t.x, 0, t.z), this.saveDeadTime = Laya.timer.currTimer + 1200, r.default.gameData.survivalNum--, s.default.instance.emit("chLabNumber"), this.lastCollisionCar) {
                        var e = this.GetScale().x - 1;
                        "Actor" == this.lastCollisionCar.GetType() && (r.default.gameData.killNum += 1, s.default.instance.emit("jsLabNumber", {
                            info: this.infoData,
                            pos: o.default.Instance.actorToUIPos()
                        }), l.default.instance.playSound("tobig")), this.lastCollisionCar.scaleToBig(e + this.infoData.scale)
                    }
                }, AICar.prototype.onUpdate = function() {
                    if (this.isDead) {
                        var t = this.GetPosition();
                        if (t.y -= 1, this.SetPosition(t), o.default.Instance.GetGameState() == n.GAMESTATE.gameing && this.resurrectionProbability > 0 && this.saveDeadTime < Laya.timer.currTimer && a.default.random(0, 99) < this.resurrectionProbability) {
                            var e = 0,
                                i = void 0;
                            (isNaN(this.saveDeadPos.x) || isNaN(this.saveDeadPos.y) || isNaN(this.saveDeadPos.z)) && (this.saveDeadPos = this.GetPosition(), this.saveDeadPos.y = 0, c.default.log("翻车了 saveDeadPos -- ", this.saveDeadPos));
                            for (var l = 0; l < this.resurrectionPointList.length; l++) {
                                var d = Laya.Vector3.distance(this.resurrectionPointList[l], t);
                                e < d && a.default.mapMeshSizeJudge(this.mapIndex, this.resurrectionPointList[l].x, this.resurrectionPointList[l].z) && (e = d, i = new Laya.Vector3(this.resurrectionPointList[l].x, 0, this.resurrectionPointList[l].z))
                            }
                            if (i) {
                                this.lastCollisionCar = null;
                                var u = i.x,
                                    h = a.default.random(0, 2);
                                1 == h ? u = i.x + 8 : 2 == h && (u = i.x - 8), i.y = 0;
                                var f = i.z;
                                0 == (h = a.default.random(0, 2)) ? f = i.z + 8 : 1 == h && (f = i.z - 8), a.default.mapMeshSizeJudge(this.mapIndex, u, f) && (i.x = u, i.x = f), this.SetPosition(i), this.lerpTScale = 0, this.SetScale(new Laya.Vector3(1, 1, 1)), 60 == this.resurrectionProbability ? this.resurrectionProbability = 30 : 30 == this.resurrectionProbability && (this.resurrectionProbability = 0), this.isDead = !1, this.saveCountdownToResurrection = Laya.timer.currTimer, this.saveShowNumber = 0, r.default.gameData.survivalNum++, s.default.instance.emit("chLabNumber")
                            } else c.default.log(" 翻车了 翻车了 AICar 复活 outpoint -- ", [e, i, this.saveDeadPos, r.default.gameData.mapComList, this.resurrectionPointList])
                        }
                    } else if (o.default.Instance.GetGameState() == n.GAMESTATE.gameing && (this.saveCountdownToResurrection > 0 && (Laya.timer.currTimer - this.saveCountdownToResurrection > 200 && (this.saveCountdownToResurrection = Laya.timer.currTimer, this.saveShowNumber++, this.child.active = this.saveShowNumber % 2 != 0), this.saveShowNumber > 5 && (this.child.active = !0, this.saveCountdownToResurrection = 0, this.saveShowNumber = 0)), !this.isDead)) {
                        if (0 != this.lerpTScale) {
                            this.lerpTScale += .08;
                            var p = new Laya.Vector3;
                            Laya.Vector3.lerp(this.originalScale, this.targetScale, this.lerpTScale, p), this.SetScale(p), this.lerpTScale >= 1 && (this.lerpTScale = 0)
                        }
                        0 == this.collisionLerpT && this.saveCountdownToResurrection <= 0 ? this.moveType() : this.collisionLerpT > 0 && this.collisionRecordPos && (Laya.Vector3.lerp(this.collisionRecordPos, this.collisionOffset, this.collisionLerpT, this.outPos), this.SetPosition(this.outPos)), a.default.mapMeshSizeJudge(this.mapIndex, this.child.transform.position.x, this.child.transform.position.z) || (this.isDead = !0, this.toDead()), !this.isChangRotation && this.leftTime < Laya.timer.currTimer && (this.isChangRotation = !0)
                    }
                }, AICar.prototype.collisionExecute = function(t) {
                    var e = this;
                    if (!this.isDead && !this.isCollision && t) {
                        this.lastCollisionCar = t;
                        var i = this.outVector.x,
                            o = this.outVector.z;
                        0 != this.collisionLerpT && (i = this.collisionOffsetX, o = this.collisionOffsetZ);
                        var n = 0,
                            s = 0,
                            r = this.GetPosition(),
                            l = t.getOutVector(),
                            d = t.GetPosition().x,
                            c = (0 - i * d) / o,
                            u = d + r.x,
                            h = c + r.z,
                            f = (r.z * (d - u) - h * (d - r.x)) / (d - u - (d - r.x)),
                            p = t.getInfoData(),
                            m = t.getNoobAddInfo();
                        if (i > 0 && o > 0 && t.GetPosition().z > f || i < 0 && o > 0 && t.GetPosition().z > f || i > 0 && o < 0 && t.GetPosition().z < f || i < 0 && o < 0 && t.GetPosition().z < f || i > 0 && 0 == o && t.GetPosition().x > r.x || i < 0 && 0 == o && t.GetPosition().x < r.x || 0 == i && o < 0 && t.GetPosition().z > r.z || 0 == i && o < 0 && t.GetPosition().z < r.z) {
                            this.collisionOffsetX = -i, this.collisionOffsetZ = -o;
                            var y = 0,
                                g = 0;
                            null != m && (y = -i * m.impact_force * (1 + p.scale_factor * (t.GetScale().x - 1) * 10), g = -o * m.impact_force * (1 + p.scale_factor * (t.GetScale().x - 1) * 10));
                            var _ = -i * p.impact_force * (1 + p.scale_factor * (t.GetScale().x - 1) * 10) + y + i * this.infoData.bump_resistance * (1 + this.infoData.scale_resistance * (this.GetScale().x - 1) * 10);
                            n = -i < 0 && _ > 0 || -i > 0 && _ < 0 ? 0 : _;
                            var w = -o * p.impact_force * (1 + p.scale_factor * (t.GetScale().x - 1) * 10) + g + o * this.infoData.bump_resistance * (1 + this.infoData.scale_resistance * (this.GetScale().x - 1) * 10);
                            s = -o < 0 && w > 0 || -o > 0 && w < 0 ? 0 : w
                        } else {
                            this.collisionOffsetX = l.x, this.collisionOffsetZ = l.z;
                            y = 0, g = 0;
                            null != m && (y = l.x * (m.impact_force + this.infoData.impact_force) * (1 + p.scale_factor * (t.GetScale().x - 1) * 10), g = l.z * (m.impact_force + this.infoData.impact_force) * (1 + p.scale_factor * (t.GetScale().x - 1) * 10)), n = l.x * (p.impact_force + this.infoData.impact_force) * (1 + p.scale_factor * (t.GetScale().x - 1) * 10) + y - l.x * this.infoData.bump_resistance * (1 + this.infoData.scale_resistance * (this.GetScale().x - 1) * 10), s = l.z * (p.impact_force + this.infoData.impact_force) * (1 + p.scale_factor * (t.GetScale().x - 1) * 10) + g - l.z * this.infoData.bump_resistance * (1 + this.infoData.scale_resistance * (this.GetScale().x - 1) * 10)
                        }
                        this.isCollision = !0, Laya.timer.once(100, this, function() {
                            e.isCollision = !1
                        }), this.collisionRecordPos = r, this.collisionOffset = new Laya.Vector3(this.collisionRecordPos.x + n, this.collisionRecordPos.y, this.collisionRecordPos.z + s), this.collisionLerpT = 1e-5, this.myTween.clear(), this.myTween.to(this, {
                            collisionLerpT: 1
                        }, 300, null, Laya.Handler.create(this, function() {
                            if (e.collisionLerpT = 0, !e.isDead && (e.SetPosition(e.collisionOffset), 1 == a.default.random(0, 1)))
                                if (e.roadPointList) e.toMoveRoadPoint(e.collisionOffset, Number.MAX_VALUE);
                                else {
                                    var t = e.GetRotationEuler();
                                    e.randomAddRotY(t)
                                }
                        }))
                    }
                }, AICar
            }(d.BaseCar);
        i.AICar = u
    }, {
        "../mgrCommon/EventMgr": 12,
        "../mgrCommon/SoundMgr": 15,
        "../models/ConfigData": 18,
        "../models/UserData": 19,
        "../tools/MyLog": 24,
        "../tools/MyUtils": 25,
        "./BaseCar": 8,
        "./GameMgr": 10
    }],
    7: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../tools/MyUtils"),
            o = t("./GameMgr"),
            n = t("../models/ConfigData"),
            s = t("../mgrCommon/EventMgr"),
            r = t("../models/UserData"),
            l = t("../mgrCommon/PlatformMgr"),
            d = t("../mgrCommon/SoundMgr"),
            c = function(t) {
                function Actor() {
                    var e = t.call(this) || this;
                    return e.actorSpeed = .34, e.temSpeed = 0, e.addRotY = 0, e.shacheSoundTime = 0, e.rotations = new Laya.Vector3(0, .01, 0), e.collisionOffsetX = 0, e.collisionOffsetZ = 0, e
                }
                return __extends(Actor, t), Actor.prototype.getSaveDeadPos = function() {
                    return this.saveDeadPos
                }, Actor.prototype.onDown = function() {
                    this.leftMouseX = Laya.MouseManager.instance.mouseX, this.leftMouseY = Laya.MouseManager.instance.mouseY, Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMove)
                }, Actor.prototype.onMove = function() {
                    var t = this,
                        e = Laya.MouseManager.instance.mouseX - this.leftMouseX,
                        i = Laya.MouseManager.instance.mouseY - this.leftMouseY,
                        a = Math.abs(i) / Math.abs(e),
                        s = 180 * Math.atan(a) / Math.PI;
                    e < 0 && i > 0 ? this.targetRotY = s : 0 == e && i > 0 ? this.targetRotY = 90 : e > 0 && i > 0 ? this.targetRotY = 180 - s : e > 0 && 0 == i ? this.targetRotY = 180 : e > 0 && i < 0 ? this.targetRotY = 180 + s : 0 == e && i < 0 ? this.targetRotY = 270 : e < 0 && i < 0 ? this.targetRotY = 360 - s : e < 0 && 0 == i && (this.targetRotY = 0);
                    var l = this.GetRotationEuler();
                    if (l.y < 0)
                        for (;;) {
                            if (!(l.y <= -360)) {
                                l.y = 360 + l.y;
                                break
                            }
                            l.y += 360
                        } else if (l.y > 0)
                            for (; l.y >= 360;) l.y -= 360;
                    if (this.addRotY = this.targetRotY - l.y, this.addRotY > 0)
                        for (;;) {
                            if (!(this.addRotY >= 360)) {
                                Math.abs(this.addRotY) > 180 && (this.addRotY -= 360);
                                break
                            }
                            this.addRotY -= 360
                        } else if (this.addRotY < 0)
                            for (;;) {
                                if (!(this.addRotY <= -360)) {
                                    Math.abs(this.addRotY) > 180 && (this.addRotY += 360);
                                    break
                                }
                                this.addRotY += 360
                            }
                    if (o.default.Instance.GetGameState() == n.GAMESTATE.gameing) {
                        if (!this.eff_shache && !this.eff_somke && !this.eff_shache1 && Math.abs(this.addRotY) > 30 && Math.abs(this.addRotY) < 90 && !this.eff_shache && !this.eff_somke && !this.eff_shache1) {
                            var c = r.default.car < 10 ? "car0" + r.default.car : "car" + r.default.car,
                                u = this.GetObj().getChildByName(c).getChildByName("eff_somke"),
                                h = this.GetObj().getChildByName(c).getChildByName("eff_shache"),
                                f = this.GetObj().getChildByName(c).getChildByName("eff_shache1"),
                                p = this.GetScale();
                            this.eff_shache = Laya.Sprite3D.instantiate(o.default.Instance.GetComponentList("ef_shache_01"), h, !1), this.eff_shache.active = !0, this.eff_shache.getChildByName("Trail").trailFilter.widthMultiplier = p.x, this.eff_shache1 = Laya.Sprite3D.instantiate(o.default.Instance.GetComponentList("ef_shache_01"), f, !1), this.eff_shache1.active = !0, this.eff_shache1.getChildByName("Trail").trailFilter.widthMultiplier = p.x, this.eff_somke = Laya.Sprite3D.instantiate(o.default.Instance.GetComponentList("ef_somke_01"), u, !1), this.eff_somke.active = !0, this.eff_somke.getChildByName("smoke").transform.localScale = p, this.shacheSoundTime + 1e3 < Laya.timer.currTimer && (this.shacheSoundTime = Laya.timer.currTimer, d.default.instance.playSound("shache")), Laya.timer.once(800, this, function() {
                                t.hiddenEffect()
                            })
                        }
                        this.temSpeed <= 0 && (this.temSpeed = this.actorSpeed)
                    }
                    this.outVector.x = Math.cos(l.y * Math.PI / 180), this.outVector.z = -Math.sin(l.y * Math.PI / 180)
                }, Actor.prototype.hiddenEffect = function() {
                    this.eff_somke && (this.eff_somke.destroy(), this.eff_somke = null), this.eff_shache && (this.eff_shache.destroy(), this.eff_shache = null), this.eff_shache1 && (this.eff_shache1.destroy(), this.eff_shache1 = null)
                }, Actor.prototype.onUp = function() {
                    Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMove), o.default.Instance.GetGameState() == n.GAMESTATE.gameing && this.temSpeed <= 0 && (this.temSpeed = this.actorSpeed)
                }, Actor.prototype.mapMainShow = function(t, e) {
                    this.resurrection(t, new Laya.Vector3(.8, .8, .8)), this.SetRotationEuler(e)
                }, Actor.prototype.Reset = function(t, e) {
                    this.mapIndex = t, this.saveDeadPos = e, this.leftMouseX = Number.NaN, this.temSpeed = 0, this.resurrection(e), this.actorRot(), this.hiddenEffect()
                }, Actor.prototype.resurrection = function(t, e) {
                    this.isDead = !1, this.lastCollisionCar = null, t.y = 0, this.SetPosition(t), this.lerpTScale = 0, this.SetScale(e || new Laya.Vector3(1, 1, 1))
                }, Actor.prototype.actorRot = function() {
                    var t = this.GetRotationEuler();
                    t.x = 0, t.z = 0, t.y = a.default.random(0, 359), this.SetRotationEuler(t), this.outVector.x = Math.cos(t.y * Math.PI / 180), this.outVector.z = -Math.sin(t.y * Math.PI / 180)
                }, Actor.prototype.disable = function() {
                    Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onDown), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onUp), this.leftMouseX = Number.NaN, s.default.instance.onOffEvent("showCurCarModel", this, this.showCurCarModel)
                }, Actor.prototype.childShow = function(t) {
                    this.lastChild && (this.lastChild.active = t)
                }, Actor.prototype.showCurCarModel = function() {
                    var t = this;
                    this.infoData || (this.infoData = []), n.default.carConfigInfo.forEach(function(e) {
                        e.id == r.default.car && (t.infoData.id = e.id, t.infoData.speed = e.speed, t.infoData.unit_rot_y = e.unit_rot_y, t.infoData.impact_force = e.impact_force, t.infoData.scale_resistance = e.scale_resistance, t.infoData.scale = e.scale, t.infoData.scale_factor = e.scale_factor, t.infoData.bump_resistance = e.bump_resistance, t.actorSpeed = t.infoData.speed + .04)
                    }), this.noobAdd();
                    var e = r.default.car < 10 ? "car0" + r.default.car : "car" + r.default.car,
                        i = this.GetObj().getChildByName(e);
                    i || (i = this.GetObj().getChildByName("car01")), this.lastChild ? this.lastChild != i && (this.lastChild.active = !1, i.active = !0, this.lastChild = i) : (this.lastChild = i, i.active = !0)
                }, Actor.prototype.init = function() {
                    this.InitBase("Actor"), this.child = this.GetObj().getChildByName("car01").getChildByName("car01"), this.myTween = new Laya.Tween, Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onDown), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onUp), s.default.instance.onEvent("showCurCarModel", this, this.showCurCarModel)
                }, Actor.prototype.onDestroy = function() {}, Actor.prototype.onUpdate = function() {
                    this.isDead && ((h = this.GetPosition()).y -= 1, this.SetPosition(h));
                    if (0 != this.addRotY) {
                        var t = this.GetRotationEuler();
                        if (t.y < 0)
                            for (;;) {
                                if (!(t.y <= -360)) {
                                    t.y = 360 + t.y;
                                    break
                                }
                                t.y += 360
                            } else if (t.y > 0)
                                for (; t.y >= 360;) t.y -= 360;
                        var e = 0,
                            i = 0,
                            l = this.infoData && this.infoData.unit_rot_y ? this.infoData.unit_rot_y : 400;
                        this.addRotY < 0 ? (i = this.addRotY <= -l ? -l : this.addRotY, (e = t.y + i) < 0 && (e += 360), this.addRotY -= i, this.addRotY >= 0 && (this.addRotY = 0)) : this.addRotY > 0 && (i = this.addRotY >= l ? l : this.addRotY, (e = t.y + i) >= 360 && (e -= 360), this.addRotY -= i, this.addRotY <= 0 && (this.addRotY = 0)), this.outVector.x = Math.cos(e * Math.PI / 180), this.outVector.z = -Math.sin(e * Math.PI / 180), t.y = e, this.SetRotationEuler(t)
                    }
                    if (o.default.Instance.GetGameState() == n.GAMESTATE.default) this.SetRotate(this.rotations);
                    else if (o.default.Instance.GetGameState() == n.GAMESTATE.gameing && !this.isDead) {
                        if (0 != this.lerpTScale) {
                            this.lerpTScale += .08;
                            var d = new Laya.Vector3;
                            Laya.Vector3.lerp(this.originalScale, this.targetScale, this.lerpTScale, d), this.SetScale(d), this.lerpTScale >= 1 && (this.lerpTScale = 0)
                        }
                        if (0 == this.collisionLerpT) {
                            var c = this.GetPosition();
                            c.x += this.outVector.x * this.temSpeed, c.z += this.outVector.z * this.temSpeed, c.y > 0 && (c.y = 0), this.SetPosition(c)
                        } else {
                            var u = new Laya.Vector3;
                            Laya.Vector3.lerp(this.collisionRecordPos, this.collisionOffset, this.collisionLerpT, u), this.SetPosition(u)
                        }
                        var h = this.GetPosition();
                        if (!a.default.mapMeshSizeJudge(this.mapIndex, this.child.transform.position.x, this.child.transform.position.z)) {
                            if (this.isDead = !0, this.addRotY = 0, r.default.gameData.survivalNum--, s.default.instance.emit("chLabNumber"), this.lastCollisionCar) {
                                var f = this.GetScale().x - 1;
                                this.lastCollisionCar.scaleToBig(f + this.infoData.scale)
                            }
                            this.saveDeadPos = new Laya.Vector3(h.x, 0, h.z), s.default.instance.emit("actorIsDead")
                        }
                    }
                }, Actor.prototype.collisionExecute = function(t, e) {
                    var i = this;
                    if (!this.isDead && !this.isCollision && t) {
                        this.lastCollisionCar = t;
                        var o = this.outVector.x,
                            n = this.outVector.z;
                        0 != this.collisionLerpT && (o = this.collisionOffsetX, n = this.collisionOffsetZ);
                        var r = this.GetPosition(),
                            c = 0,
                            u = 0,
                            h = t.getOutVector(),
                            f = t.GetPosition(),
                            p = f.x,
                            m = (0 - o * p) / n,
                            y = p + r.x,
                            g = m + r.z,
                            _ = (r.z * (p - y) - g * (p - r.x)) / (p - y - (p - r.x)),
                            w = t.getInfoData();
                        if (o > 0 && n > 0 && f.z > _ || o < 0 && n > 0 && f.z > _ || o > 0 && n < 0 && f.z < _ || o < 0 && n < 0 && f.z < _ || o > 0 && 0 == n && f.x > r.x || o < 0 && 0 == n && f.x < r.x || 0 == o && n < 0 && f.z > r.z || 0 == o && n < 0 && f.z < r.z) {
                            this.collisionOffsetX = -o, this.collisionOffsetZ = -n;
                            var v = 0,
                                C = 0;
                            null != this.noobAddInfo && (v = o * this.noobAddInfo.bump_resistance * (1 + this.infoData.scale_resistance * (this.GetScale().x - 1) * 10), C = n * this.noobAddInfo.bump_resistance * (1 + this.infoData.scale_resistance * (this.GetScale().x - 1) * 10));
                            var I = -o * w.impact_force * (1 + w.scale_factor * (t.GetScale().x - 1) * 10) + o * this.infoData.bump_resistance * (1 + this.infoData.scale_resistance * (this.GetScale().x - 1) * 10) + v;
                            c = -o < 0 && I > 0 || -o > 0 && I < 0 ? 0 : I;
                            var A = -n * w.impact_force * (1 + w.scale_factor * (t.GetScale().x - 1) * 10) + n * this.infoData.bump_resistance * (1 + this.infoData.scale_resistance * (this.GetScale().x - 1) * 10) + C;
                            u = -n < 0 && A > 0 || -n > 0 && A < 0 ? 0 : A
                        } else {
                            this.collisionOffsetX = h.x, this.collisionOffsetZ = h.z;
                            v = 0, C = 0;
                            null != this.noobAddInfo && (v = h.x * this.noobAddInfo.bump_resistance * (1 + this.infoData.scale_resistance * (this.GetScale().x - 1) * 10), C = h.z * this.noobAddInfo.bump_resistance * (1 + this.infoData.scale_resistance * (this.GetScale().x - 1) * 10)), c = h.x * (w.impact_force + this.infoData.impact_force) * (1 + w.scale_factor * (t.GetScale().x - 1) * 10) - h.x * this.infoData.bump_resistance * (1 + this.infoData.scale_resistance * (this.GetScale().x - 1) * 10) - v, u = h.z * (w.impact_force + this.infoData.impact_force) * (1 + w.scale_factor * (t.GetScale().x - 1) * 10) - h.z * this.infoData.bump_resistance * (1 + this.infoData.scale_resistance * (this.GetScale().x - 1) * 10) - C
                        }
                        this.isCollision = !0, Laya.timer.once(100, this, function() {
                            i.isCollision = !1
                        }), this.collisionRecordPos = r, this.collisionOffset = new Laya.Vector3(this.collisionRecordPos.x + c, 0, this.collisionRecordPos.z + u), this.collisionLerpT = 1e-5, this.myTween.clear(), this.myTween.to(this, {
                            collisionLerpT: 1
                        }, 300, null, Laya.Handler.create(this, function() {
                            i.collisionLerpT = 0, i.SetPosition(i.collisionOffset)
                        })), this.hiddenEffect(), l.default.callAPIMethodByProxy("vibrateShort"), d.default.instance.playSound(a.default.random(0, 2)), s.default.instance.emit("playerCollisionEffect", e)
                    }
                }, Actor
            }(t("./BaseCar").BaseCar);
        i.Actor = c
    }, {
        "../mgrCommon/EventMgr": 12,
        "../mgrCommon/PlatformMgr": 14,
        "../mgrCommon/SoundMgr": 15,
        "../models/ConfigData": 18,
        "../models/UserData": 19,
        "../tools/MyUtils": 25,
        "./BaseCar": 8,
        "./GameMgr": 10
    }],
    8: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./BaseScript"),
            o = t("../models/ConfigData"),
            n = t("../models/UserData"),
            s = function(t) {
                function BaseCar() {
                    var e = t.call(this) || this;
                    return e.outVector = new Laya.Vector3(1, 0, 0), e.collisionLerpT = 0, e.lerpTScale = 0, e.noobAddInfo = null, e
                }
                return __extends(BaseCar, t), BaseCar.prototype.getIsDead = function() {
                    return this.isDead
                }, BaseCar.prototype.getOutVector = function() {
                    return this.outVector
                }, BaseCar.prototype.getInfoData = function() {
                    return this.infoData
                }, BaseCar.prototype.getCarId = function() {
                    return this.carId
                }, BaseCar.prototype.getCollisionLerpT = function() {
                    return this.collisionLerpT
                }, BaseCar.prototype.getisCollision = function() {
                    return this.isCollision
                }, BaseCar.prototype.getNoobAddInfo = function() {
                    return this.noobAddInfo
                }, BaseCar.prototype.scaleToBig = function(t) {
                    0 != this.lerpTScale && this.targetScale && this.SetScale(this.targetScale);
                    var e = this.GetScale();
                    if (e.y < 1 + 10 * this.infoData.scale) {
                        var i = e.y + t > 1 + 10 * this.infoData.scale ? 1 + 10 * this.infoData.scale : e.y + t;
                        this.targetScale = new Laya.Vector3(i, i, i), this.originalScale = e, this.lerpTScale = .01
                    }
                }, BaseCar.prototype.noobAdd = function() {
                    if (this.noobAddInfo = null, o.default.noob_config)
                        for (var t = 0; t < o.default.noob_config.length; t++)
                            if (n.default.serverGameNumber <= o.default.noob_config[t].num) {
                                this.noobAddInfo = o.default.noob_config[t];
                                break
                            }
                }, BaseCar
            }(a.BaseScript);
        i.BaseCar = s
    }, {
        "../models/ConfigData": 18,
        "../models/UserData": 19,
        "./BaseScript": 9
    }],
    9: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = function(t) {
            function BaseScript() {
                return t.call(this) || this
            }
            return __extends(BaseScript, t), BaseScript.prototype.GetType = function() {
                return this.type
            }, BaseScript.prototype.InitBase = function(t) {
                this.obj = this.owner, this.type = t
            }, BaseScript.prototype.SetPosition = function(t) {
                this.obj.transform.position = t
            }, BaseScript.prototype.GetPosition = function() {
                return this.obj.transform.position
            }, BaseScript.prototype.Translate = function(t, e) {
                this.obj.transform.translate(t, e)
            }, BaseScript.prototype.SetRotate = function(t, e, i) {
                this.obj.transform.rotate(t, e, i)
            }, BaseScript.prototype.GetTransForm = function() {
                return this.obj.transform
            }, BaseScript.prototype.SetRotationEuler = function(t) {
                this.obj.transform.rotationEuler = t
            }, BaseScript.prototype.GetRotationEuler = function() {
                return this.obj.transform.rotationEuler
            }, BaseScript.prototype.SetScale = function(t) {
                this.obj.transform.scale = t
            }, BaseScript.prototype.GetScale = function() {
                return this.obj.transform.scale
            }, BaseScript.prototype.GetObj = function() {
                return this.obj
            }, BaseScript.prototype.Hidden = function() {
                this.obj.active = !1
            }, BaseScript.prototype.Show = function() {
                this.obj.active = !0
            }, BaseScript.prototype.Active = function() {
                return this.obj.active
            }, BaseScript.prototype.Destroy = function() {
                this.obj.destroy()
            }, BaseScript
        }(Laya.Script3D);
        i.BaseScript = a
    }, {}],
    10: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../mgrCommon/EventMgr"),
            o = t("./Actor"),
            n = t("../tools/MyUtils"),
            s = t("../tools/MyLog"),
            r = t("../models/ConfigData"),
            l = t("./AICar"),
            d = t("../models/UserData"),
            c = t("../mgrCommon/PlatformMgr"),
            u = t("../mgrCommon/SoundMgr"),
            h = t("./MapScript"),
            f = t("../mgrCommon/HttpMgr"),
            p = t("../mgrCommon/ViewMgr"),
            m = function(t) {
                function GameMgr() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.cameraRot = new Laya.Vector3(-55.499984460885905, 180, 0), e.cameraWinRot = new Laya.Vector3(-20, 180, 0), e.cameraOffsetMain = new Laya.Vector3(-25.76414624946318, 93.83683674892916, .4152551051795465), e._outPos = new Laya.Vector3, e._bod = [], e._car = [], e.componentList = {}, e._aiCarList = [], e._actorCountdownToResurrection = 0, e._showNumber = 0, e
                }
                return __extends(GameMgr, t), GameMgr.prototype.GetGameState = function() {
                    return this._gamestate
                }, GameMgr.prototype.GetParentComponent = function() {
                    return this._parentComponent
                }, GameMgr.prototype.GetComponentList = function(t) {
                    return this.componentList[t]
                }, GameMgr.prototype.prepareGame = function() {
                    u.default.instance.playBGM(), this._gamestate = r.GAMESTATE.djs, this._mapIndex = n.default.random(r.MAPTYPE.map01, r.MAPTYPE.map04), this._bod[this._mapIndex].activation(this._mapIndex), this._actor.Reset(this._mapIndex, this._bod[this._mapIndex].actorBirthPoint), this.cameraToActor(), this._camera.transform.rotationEuler = this.cameraRot, this._directionLight.active = !0, this._mainMap.active = !1, this._jiantou.active = !0;
                    for (var t = 0; t < GameMgr.aistartPointCount; t++) {
                        var e = "qq" == r.default.platformType ? n.default.random(r.CARTYPE.car01, r.CARTYPE.car11) : n.default.random(r.CARTYPE.car01, r.CARTYPE.car08),
                            i = this._bod[this._mapIndex].aiBirthPointList[t],
                            o = Laya.Sprite3D.instantiate(this._car[e], this._parentComponent, !1).addComponent(l.AICar);
                        o.init(i, d.default.otherPlays[t], e, t, this._mapIndex, this._bod[this._mapIndex].roadPointList, this._bod[this._mapIndex].getResurrectionPointList()), this._aiCarList.push(o)
                    }
                    d.default.gameData.survivalNum = this._aiCarList.length + 1, a.default.instance.emit("openFighting", {
                        mapIndex: this._mapIndex
                    })
                }, GameMgr.prototype.startGame = function() {
                    this._gamestate = r.GAMESTATE.gameing
                }, GameMgr.prototype.getTargetCar = function(t, e) {
                    var i = this._actor,
                        a = Laya.Vector3.distance(this._actor.GetPosition(), t);
                    if (this._aiCarList)
                        for (var o = 0; o < this._aiCarList.length; o++)
                            if (0 == this._aiCarList[o].getIsDead() && this._aiCarList[o].getSerialNumber() != e) {
                                var n = Laya.Vector3.distance(this._aiCarList[o].GetPosition(), t);
                                n < a && (a = n, i = this._aiCarList[o])
                            } return i
                }, GameMgr.prototype.actorToUIPos = function() {
                    return this._camera.viewport.project(this._actor.GetPosition(), this._camera.projectionViewMatrix, this._outPos), {
                        x: this._outPos.x / Laya.stage.clientScaleX,
                        y: this._outPos.y / Laya.stage.clientScaleY
                    }
                }, GameMgr.prototype.Reset = function(t) {
                    var e = this;
                    this._camera.transform.position = this._mapMainTrans.transform.position, this._camera.transform.rotationEuler = this.cameraOffsetMain, this._directionLight.active = !1, this._mainMap.active = !0, this._jiantou.active = !1, console.log("打开主界面");
                    var i = this._actorMainTrans.transform.position;
                    i.x = i.x, this._actor.mapMainShow(i, this._actorMainTrans.transform.rotationEuler), this.resetCommon(), a.default.instance.onOnceEvent("prepareGameToGameMgr", this, function() {
                        e.prepareGame()
                    }), a.default.instance.emit("goHome", t)
                }, GameMgr.prototype.resetCommon = function() {
                    var t = this;
                    if (this._gamestate = r.GAMESTATE.default, this._bod.forEach(function(t) {
                            t.reset()
                        }), d.default.gameData = {
                            killNum: 0,
                            survivalNum: 0,
                            resurgence: 2,
                            mapComList: [],
                            tryId: 1
                        }, this._aiCarList)
                        for (; this._aiCarList.length > 0;) this._aiCarList.pop().Destroy();
                    a.default.instance.onOnceEvent("startGameToGameMgr", this, function() {
                        t.startGame()
                    })
                }, GameMgr.prototype.oneMoreGame = function() {
                    var t = this;
                    this.resetCommon(), f.default.instance.getMainIndex(function(e) {
                        a.default.instance.emit("showCurCarModel"), f.default.instance.startGamePost(GameMgr.aistartPointCount, function(e) {
                            t.prepareGame()
                        })
                    })
                }, GameMgr.prototype.actorIsDead = function() {
                    this.GameEnd(!1)
                }, GameMgr.prototype.actorIsDeadToLeaveGame = function() {
                    this.GameEnd(!1)
                }, GameMgr.prototype.cameraToActor = function() {
                    var t = this._actor.GetPosition();
                    Laya.Vector3.add(t, this._mapGameTrans.transform.position, this._outPos), this._camera.transform.position = this._outPos
                }, GameMgr.prototype.actorIsDeadToContinueGame = function() {
                    d.default.gameData.resurgence--;
                    for (var t, e = Number.MAX_VALUE, i = this._actor.getSaveDeadPos(), o = this._bod[this._mapIndex].getResurrectionPointList(), l = 0; l < o.length; l++) {
                        var c = Laya.Vector3.distance(o[l], i);
                        e > c && n.default.mapMeshSizeJudge(this._mapIndex, o[l].x, o[l].z) && (e = c, t = new Laya.Vector3(o[l].x, 0, o[l].z))
                    }
                    t ? this._actor.resurrection(t) : (s.default.log("翻车了 翻车了 actor ", [e, t, i, d.default.gameData.mapComList, o]), this._actor.resurrection(this._bod[this._mapIndex].actorBirthPoint)), this.cameraToActor(), this._actorCountdownToResurrection = Laya.timer.currTimer, this._showNumber = 0, this._actor.actorRot(), d.default.gameData.survivalNum++, a.default.instance.emit("chLabNumber"), this._gamestate = r.GAMESTATE.gameing
                }, GameMgr.prototype.GameEnd = function(t) {
                    var e = this;
                    this._isWin = t, this._gamestate = r.GAMESTATE.transition_over, t ? (this.cameraLerpT = 1e-5, this.myTween.clear(), this.myTween.to(this, {
                        cameraLerpT: 1
                    }, 1e3 * r.default.camerafollows_config.winTime, null, Laya.Handler.create(this, function() {
                        e.cameraLerpT = 0, Laya.timer.once(1e3, e, function() {
                            e.openGameEndUI()
                        })
                    }))) : Laya.timer.once(1e3 * r.default.camerafollows_config.deadTime, this, function() {
                        e.openGameEndUI()
                    })
                }, GameMgr.prototype.openGameEndUI = function() {
                    u.default.instance.stopBGM(), u.default.instance.playSound(this._isWin ? "win" : "fail"), this._gamestate = r.GAMESTATE.over, d.default.reusltData = {
                        result: this._isWin,
                        closeALL: d.default.gameData.resurgence <= 0 || this._isWin
                    };
                    var t = r.default.getBoxAwardNum(),
                        e = localStorage.getItem("gameNumber");
                    console.log("awardNum", t, "UserData.gameNumber", e), console.log("执行到这");
                    var i = e >= r.default.loadConfig.zs_click_award_since && t < r.default.loadConfig.zs_click_award_num && r.default.loadConfig.zs_number != r.default.version;
                    console.log("isShowBox", i), i ? p.default.instance.openView({
                        viewName: "GetBox.scene",
                        closeAll: !0,
                        data: {
                            win: this._isWin,
                            gold: d.default.gameData.gold
                        }
                    }) : a.default.instance.emit("openGameEnd", {
                        result: this._isWin,
                        closeALL: d.default.gameData.resurgence <= 0 || this._isWin
                    })
                }, GameMgr.prototype.resetGameType = function(t) {
                    "main" == t.ui ? (this.Reset({
                        fullVideo: t.num > 1
                    }), c.default.callAPIMethodByProxy("showAppBox")) : "guide" == t.ui && this.oneMoreGame()
                }, GameMgr.prototype.onAwake = function() {
                    GameMgr.Instance = this, console.log("GameMGr Init!!!!!!!!!!!!!"), this._scene3d = this.owner, this._camera = this.owner.getChildByName("Main Camera"), this._directionLight = this.owner.getChildByName("Directional Light"), this._actor = this.owner.getChildByName("actor").addComponent(o.Actor), this._actor.init(), this._jiantou = this.owner.getChildByName("actor").getChildByName("jiantou"), this._mainMap = this.owner.getChildByName("map").getChildByName("map_main");
                    for (var t = 0; t < r.MAPTYPE.map05; t++) this._bod[t] = this.owner.getChildByName("map").getChildByName("map0" + (t + 1)).addComponent(h.MapScript), this._bod[t].init();
                    this._parentComponent = this.owner.getChildByName("parentComponent"), this._mapMainTrans = this._parentComponent.getChildByName("map_main_trans"), this._mapGameTrans = this._parentComponent.getChildByName("map_game_trans"), this._mapWinTrans = this._parentComponent.getChildByName("map_win_trans"), this._actorMainTrans = this._parentComponent.getChildByName("actor_main_trans"), this.componentList.ef_shache_01 = this._parentComponent.getChildByName("ef_shache_01"), this.componentList.ef_somke_01 = this._parentComponent.getChildByName("ef_somke_01");
                    var e = "qq" == r.default.platformType ? r.CARTYPE.car11 : r.CARTYPE.car08;
                    for (t = r.CARTYPE.car01; t <= e; t++) {
                        var i = t < 10 ? "car0" + t : "car" + t;
                        this._car[t] = this.owner.getChildByName("actor").getChildByName(i)
                    }
                    this._collisionEffect = this.owner.getChildByName("parentComponent").getChildByName("ef_Collision_01"), this._camera.clearFlag = Laya.BaseCamera.CLEARFLAG_SKY;
                    Laya.BaseMaterial.load("skybox/skybox.lmat", Laya.Handler.create(this, function(t) {
                        var e = this._scene3d.skyRenderer;
                        e.mesh = Laya.SkyBox.instance, e.material = t
                    })), this.myTween = new Laya.Tween, this.Reset()
                }, GameMgr.prototype.playerCollisionEffect = function(t) {
                    this._collisionEffect.transform.position = t, this._collisionEffect.active = !1, this._collisionEffect.active = !0
                }, GameMgr.prototype.onEnable = function() {
                    a.default.instance.onEvent("actorIsDead", this, this.actorIsDead), a.default.instance.onEvent("actorIsDeadToLeaveGame", this, this.actorIsDeadToLeaveGame), a.default.instance.onEvent("actorIsDeadToContinueGame", this, this.actorIsDeadToContinueGame), a.default.instance.onEvent("playerCollisionEffect", this, this.playerCollisionEffect)
                }, GameMgr.prototype.onDisable = function() {
                    a.default.instance.onOffEvent("actorIsDead", this, this.actorIsDead), a.default.instance.onOffEvent("actorIsDeadToLeaveGame", this, this.actorIsDeadToLeaveGame), a.default.instance.onOffEvent("actorIsDeadToContinueGame", this, this.actorIsDeadToContinueGame), a.default.instance.onOffEvent("playerCollisionEffect", this, this.playerCollisionEffect)
                }, GameMgr.prototype.onUpdate = function() {
                    if (this._gamestate == r.GAMESTATE.default);
                    else if (this._gamestate == r.GAMESTATE.gameing) {
                        if (this.cameraToActor(), this._actorCountdownToResurrection > 0 && (Laya.timer.currTimer - this._actorCountdownToResurrection > 200 && (this._actorCountdownToResurrection = Laya.timer.currTimer, this._showNumber++, this._actor.childShow(this._showNumber % 2 != 0)), this._showNumber > 5 && (this._actor.childShow(!0), this._actorCountdownToResurrection = 0, this._showNumber = 0)), this._aiCarList) {
                            for (var t = !0, e = [], i = [], o = 0; o < this._aiCarList.length; o++) {
                                var s = this._aiCarList[o];
                                if (0 == s.getIsDead()) {
                                    t = !1, this._camera.viewport.project(s.GetPosition(), this._camera.projectionViewMatrix, this._outPos);
                                    var l = n.default.indicateAIDirection(this._actor.GetPosition(), s.GetPosition());
                                    isNaN(l) || e.push(l), i.push({
                                        x: this._outPos.x / Laya.stage.clientScaleX,
                                        y: this._outPos.y / Laya.stage.clientScaleY - (60 + (s.GetScale().y - 1) / s.getInfoData().scale * 10),
                                        name: s.getInfoData().nickname
                                    });
                                    var c = n.default.boxCollisionExecute({
                                        id: d.default.car,
                                        rot: this._actor.GetRotationEuler().y,
                                        scale: this._actor.GetScale().y,
                                        offset: this._actor.GetPosition()
                                    }, {
                                        id: s.getCarId(),
                                        rot: s.GetRotationEuler().y,
                                        scale: s.GetScale().y,
                                        offset: s.GetPosition()
                                    });
                                    null != c && (this._actor.collisionExecute(s, new Laya.Vector3(c.x, 1.5, c.y)), s.collisionExecute(this._actor));
                                    for (var u = o + 1; u < this._aiCarList.length; u++) {
                                        null != n.default.boxCollisionExecute({
                                            id: s.getCarId(),
                                            rot: s.GetRotationEuler().y,
                                            scale: s.GetScale().y,
                                            offset: s.GetPosition()
                                        }, {
                                            id: this._aiCarList[u].getCarId(),
                                            rot: this._aiCarList[u].GetRotationEuler().y,
                                            scale: this._aiCarList[u].GetScale().y,
                                            offset: this._aiCarList[u].GetPosition()
                                        }) && (s.collisionExecute(this._aiCarList[u]), this._aiCarList[u].collisionExecute(s))
                                    }
                                }
                            }
                            t && this.GameEnd(!0), a.default.instance.emit("indicateAIDirection", {
                                rotList: e,
                                posList: i
                            })
                        }
                    } else if (this._gamestate == r.GAMESTATE.pause);
                    else if (this._gamestate == r.GAMESTATE.transition_over)
                        if (this._isWin) {
                            if (this.cameraLerpT) {
                                var h = this._actor.GetPosition(),
                                    f = new Laya.Vector3;
                                Laya.Vector3.add(h, this._mapGameTrans.transform.position, f);
                                var p = new Laya.Vector3;
                                Laya.Vector3.add(h, this._mapWinTrans.transform.position, p), Laya.Vector3.lerp(f, p, this.cameraLerpT, this._outPos), this._camera.transform.position = this._outPos, Laya.Vector3.lerp(this.cameraRot, this.cameraWinRot, this.cameraLerpT, this._outPos), this._camera.transform.rotationEuler = this._outPos
                            }
                        } else this.cameraToActor()
                }, GameMgr.aistartPointCount = 9, GameMgr.carCSSize = [{}, {
                    sX: 7.5,
                    sY: 3,
                    sZ: 3.4
                }, {
                    sX: 7.8,
                    sY: 3,
                    sZ: 3.5
                }, {
                    sX: 7.9,
                    sY: 3,
                    sZ: 3.6
                }, {
                    sX: 7.8,
                    sY: 3,
                    sZ: 3.5
                }, {
                    sX: 7.8,
                    sY: 3,
                    sZ: 3.8
                }, {
                    sX: 8,
                    sY: 3,
                    sZ: 3.3
                }, {
                    sX: 7.5,
                    sY: 3,
                    sZ: 3.6
                }, {
                    sX: 7.5,
                    sY: 3,
                    sZ: 3.5
                }, {
                    sX: 7.6,
                    sY: 3,
                    sZ: 3.6
                }, {
                    sX: 7.6,
                    sY: 3,
                    sZ: 3.4
                }, {
                    sX: 7.6,
                    sY: 3,
                    sZ: 3.9
                }], GameMgr.carCSCenter = [new Laya.Vector3, new Laya.Vector3(0, 1.62, 0), new Laya.Vector3(0, 1.62, 0), new Laya.Vector3(0, 1.62, 0), new Laya.Vector3(0, 1.62, 0), new Laya.Vector3(0, 1.62, 0), new Laya.Vector3(0, 1.62, 0), new Laya.Vector3(0, 1.62, 0), new Laya.Vector3(0, 1.62, 0), new Laya.Vector3(0, 1.62, 0), new Laya.Vector3(0, 1.62, 0), new Laya.Vector3(0, 1.62, 0)], GameMgr
            }(Laya.Script3D);
        i.default = m
    }, {
        "../mgrCommon/EventMgr": 12,
        "../mgrCommon/HttpMgr": 13,
        "../mgrCommon/PlatformMgr": 14,
        "../mgrCommon/SoundMgr": 15,
        "../mgrCommon/ViewMgr": 17,
        "../models/ConfigData": 18,
        "../models/UserData": 19,
        "../tools/MyLog": 24,
        "../tools/MyUtils": 25,
        "./AICar": 6,
        "./Actor": 7,
        "./MapScript": 11
    }],
    11: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./BaseScript"),
            o = t("../models/ConfigData"),
            n = t("../tools/MyUtils"),
            s = t("../models/UserData"),
            r = function(t) {
                function MapScript() {
                    var e = t.call(this) || this;
                    return e.map01DropGroup = [
                        [1, 2, 3, 4],
                        [5, 6, 7, 8],
                        [9, 10, 11, 12]
                    ], e.map0208DropGroup = [
                        [
                            [7],
                            [4, 8],
                            [3, 6, 9],
                            [2, 5]
                        ],
                        [
                            [9],
                            [5, 8],
                            [1, 6, 7],
                            [2, 4]
                        ],
                        [
                            [1],
                            [2, 5],
                            [3, 6, 9],
                            [4, 8]
                        ],
                        [
                            [3],
                            [2, 4],
                            [1, 6, 7],
                            [5, 8]
                        ]
                    ], e.redC = 0, e
                }
                return __extends(MapScript, t), MapScript.prototype.getResurrectionPointList = function() {
                    return this.resurrectionPointList
                }, MapScript.prototype.dropUnitMap = function(t) {
                    this.timerTime = t + Laya.timer.currTimer
                }, MapScript.prototype.dropUnitMapTo = function() {
                    if (!this.curDropGroup || this.curDropGroup.length <= 0) this.timerTime = 0;
                    else if (this.curType == o.MAPTYPE.map01) {
                        var t = n.default.random(0, this.curDropGroup.length - 1),
                            e = this.curDropGroup.splice(t, 1);
                        if (this.dropingGroup.push({
                                id: e,
                                sTime: Laya.timer.currTimer + 1e3 * this.curMapdropConfigInfo.warningTime
                            }), this.dropUnitMap(1e3 * this.curMapdropConfigInfo.intervalTime), this.curDropGroup.length <= 0)
                            if (this.map01DropGroupIndex++, this.map01DropGroupIndex < this.map01DropGroup.length)
                                for (var i = 0; i < this.map01DropGroup[this.map01DropGroupIndex].length; i++) this.curDropGroup.push(this.map01DropGroup[this.map01DropGroupIndex][i]);
                            else this.timerTime = 0
                    } else if (this.curType == o.MAPTYPE.map03) {
                        e = this.curDropGroup.shift();
                        this.dropingGroup.push({
                            id: e,
                            sTime: Laya.timer.currTimer + 1e3 * this.curMapdropConfigInfo.warningTime
                        }), this.dropUnitMap(1e3 * this.curMapdropConfigInfo.intervalTime)
                    } else if (this.curType == o.MAPTYPE.map02 || this.curType == o.MAPTYPE.map04) {
                        if ((e = this.curDropGroup.shift()) && e.length > 0) {
                            for (i = 0; i < e.length; i++) this.dropingGroup.push({
                                id: e[i],
                                sTime: Laya.timer.currTimer + 1e3 * this.curMapdropConfigInfo.warningTime + 200 * i
                            });
                            this.dropUnitMap(1e3 * this.curMapdropConfigInfo.intervalTime)
                        } else this.timerTime = 0
                    }
                }, MapScript.prototype.init = function() {
                    this.InitBase("Map"), this.Hidden(), this.childMapList = [];
                    var t = this.owner.getChildByName("Map");
                    if (t) {
                        for (var e = 1; e < t.numChildren + 1; e++) this.childMapList[e] = t.getChildByName("Object00" + e);
                        this.mapMeshPosY = t.transform.position.y
                    }
                    this.actorBirthPoint = this.owner.getChildByName("ActorStartPoint").transform.position, this.roadPointList = null;
                    var i = this.owner.getChildByName("RoadPoint");
                    if (i) {
                        this.roadPointList = [];
                        for (e = 0; e < i.numChildren; e++) {
                            var a = "p" + (e + 1);
                            if (r = i.getChildByName(a)) {
                                var o = r.transform.position;
                                this.roadPointList.push(new Laya.Vector3(o.x, 0, o.z))
                            }
                        }
                    }
                    this.resurrectionPointList = [];
                    var n = this.owner.getChildByName("ResurrectionPoint");
                    if (n)
                        for (e = 0; e < n.numChildren; e++) {
                            if (r = n.getChildAt(e))(o = r.transform.position).y = 0, this.resurrectionPointList.push(o)
                        }
                    this.aiBirthPointList = [];
                    var s = this.owner.getChildByName("AIPointStart");
                    if (s)
                        for (e = 0; e < s.numChildren; e++) {
                            var r;
                            if (r = s.getChildAt(e)) {
                                o = r.transform.position;
                                this.aiBirthPointList.push(o)
                            }
                        }
                }, MapScript.prototype.activation = function(t) {
                    var e = this;
                    if (this.isUpdate = !0, this.Show(), this.curType = t, o.default.mapdropConfigInfo.forEach(function(i) {
                            i.id == t && (e.curMapdropConfigInfo = i)
                        }), t == o.MAPTYPE.map01) {
                        this.map01DropGroupIndex = 0;
                        for (var i = 0; i < this.map01DropGroup[this.map01DropGroupIndex].length; i++) this.curDropGroup.push(this.map01DropGroup[this.map01DropGroupIndex][i])
                    } else if (t == o.MAPTYPE.map03)
                        for (var a = this.childMapList.length - 1, r = n.default.random(1, a), l = r; this.curDropGroup.push(l), ++l > a && (l = 1), r != l;);
                    else t != o.MAPTYPE.map02 && t != o.MAPTYPE.map04 || this.map0208DropGroup[n.default.random(0, this.map0208DropGroup.length - 1)].forEach(function(t) {
                        e.curDropGroup.push(t)
                    });
                    for (i = 1; i < this.childMapList.length; i++) s.default.gameData.mapComList.push(i);
                    this.dropUnitMap(1e3 * this.curMapdropConfigInfo.startTime)
                }, MapScript.prototype.reset = function() {
                    if (this.isUpdate = !1, this.dropingGroup && this.dropingGroup.length > 0 ? this.dropingGroup.splice(0) : this.dropingGroup = [], this.curDropGroup && this.curDropGroup.length > 0 ? this.curDropGroup.splice(0) : this.curDropGroup = [], this.timerTime = 0, this.childMapList && this.childMapList.length > 0)
                        for (var t = 1; t < this.childMapList.length; t++) {
                            var e = this.childMapList[t].transform.position;
                            e.y = this.mapMeshPosY, this.childMapList[t].transform.position = e, this.childMapList[t].meshRenderer.materials.forEach(function(t) {
                                t.albedoColor = new Laya.Vector4(1, 1, 1, 1)
                            })
                        }
                    this.Hidden()
                }, MapScript.prototype.onUpdate = function() {
                    var t = this;
                    if (this.isUpdate && (0 != this.timerTime && this.timerTime < Laya.timer.currTimer && this.dropUnitMapTo(), this.dropingGroup && this.dropingGroup.length > 0))
                        for (var e = 0; e < this.dropingGroup.length; e++) {
                            var i = this.dropingGroup[e];
                            if (i.sTime < Laya.timer.currTimer) {
                                for (var a = 0; a < s.default.gameData.mapComList.length; a++)
                                    if (s.default.gameData.mapComList[a] == i.id) {
                                        s.default.gameData.mapComList.splice(a, 1);
                                        break
                                    } var o = this.childMapList[i.id].transform.position;
                                o.y -= 1.2, this.childMapList[i.id].transform.position = o, this.childMapList[i.id].meshRenderer.materials.forEach(function(t) {
                                    t.albedoColor = new Laya.Vector4(1, 1, 1, 1)
                                })
                            } else this.redC += .1, this.redC > 1 && (this.redC = 0), this.childMapList[i.id].meshRenderer.materials.forEach(function(e) {
                                e.albedoColor = new Laya.Vector4(t.redC, 168 * t.redC / 255, 168 * t.redC / 255, 1)
                            })
                        }
                }, MapScript
            }(a.BaseScript);
        i.MapScript = r
    }, {
        "../models/ConfigData": 18,
        "../models/UserData": 19,
        "../tools/MyUtils": 25,
        "./BaseScript": 9
    }],
    12: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = laya.events.EventDispatcher,
            o = function(t) {
                function EventMgr() {
                    return t.call(this) || this
                }
                return __extends(EventMgr, t), EventMgr.prototype.emit = function(t, e) {
                    EventMgr.eventDispatcher.event(t, e)
                }, EventMgr.prototype.onEvent = function(t, e, i, a) {
                    EventMgr.eventDispatcher.on(t, e, i, null == a ? null : [a])
                }, EventMgr.prototype.onOnceEvent = function(t, e, i, a) {
                    EventMgr.eventDispatcher.once(t, e, i, null == a ? null : [a])
                }, EventMgr.prototype.onOffEvent = function(t, e, i, a) {
                    EventMgr.eventDispatcher.off(t, e, i)
                }, EventMgr.eventDispatcher = new a, EventMgr.instance = new EventMgr, EventMgr
            }(a);
        i.default = o
    }, {}],
    13: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../models/ConfigData"),
            o = t("../tools/HttpUtils"),
            n = t("../models/UserData"),
            s = t("./EventMgr"),
            r = function() {
                function HttpMgr() {
                    this._http = new o.default, this.defaultAI = [{
                        id: 36,
                        nickname: "Arcade 01",
                        avatar: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJe8DYowkUuOQJZt99pTAQRF0qXoicSx4KFTiaWJ00L1pLfIUMltsVVYwRhHvwOtRrFO1hu0WY8jxkQ/132"
                    }, {
                        id: 74,
                        nickname: "Arcade 02",
                        avatar: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJLnprribRydu7gNlt0xg7uYSR4OEgaNnv7y1rSm2I0LibISJicPsfTpzmf2goN8qFb6C1Hn5IUlmmCw/132"
                    }, {
                        id: 172,
                        nickname: "Arcade 03",
                        avatar: "https://wx.qlogo.cn/mmopen/vi_32/OJlWkHNsLYLicl1Mu5PkythBribPWYzOQkGSdicqQxJyiajPtT4YrwjLzyKCYoM6wZyjAFk8VPKmAuxUaDPal3A5Eg/132"
                    }, {
                        id: 236,
                        nickname: "Arcade 04",
                        avatar: "https://wx.qlogo.cn/mmopen/vi_32/Oh6EPXibMcdvpsI8zkOqPOv1dbU0NZmTO2OtAuwcicjRHKwG2a4ucUUKxQicOrqic5S7bb6a8gtjiccHoClEiaibFgLqg/132"
                    }, {
                        id: 273,
                        nickname: "Arcade 05",
                        avatar: "https://wx.qlogo.cn/mmopen/vi_32/PTgJ5AsCF9hgWuENehXKpbkZ7ricWc19TRiaF2mgD2B0QXFlsVwdBX5MKlgRyP5zDsgVqibW0UdAQ7uEvzOjvFkWQ/132"
                    }, {
                        id: 309,
                        nickname: "Arcade 06",
                        avatar: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqSMtWA8FvBDYTkJD5TZ5RedU4OT5Gwup4ia1y1WlEUHg2oAsFFQs6pWRKcmGI6jBKsnJBXUxetIrA/132"
                    }, {
                        id: 367,
                        nickname: "Arcade 07",
                        avatar: "https://wx.qlogo.cn/mmopen/vi_32/kII5KM7yEAkic76bRoe09qfdz6nUm1BRiaujcGKfrB46qNkltZosYluib554cYw4icibtRNpYJ4VCkDaL6H50elic7bQ/132"
                    }, {
                        id: 399,
                        nickname: "Arcade 08",
                        avatar: "https://wx.qlogo.cn/mmopen/vi_32/lQ1HcxQ49pj1rJ7qLdF64LTCaojD7rKkeTCwutyAPFSkMuO8ovSh72Dmm0eIAaVVNFYHibsFgFvibxm6kEuSjazg/132"
                    }, {
                        id: 470,
                        nickname: "Arcade 09",
                        avatar: "https://wx.qlogo.cn/mmopen/vi_32/zjKG0vP8r3icBWdr01J5aOK12CQSZTEzAhH1kfuv1aws8UsOhNsOguKXV02nqDw8icgbwqhk8YcCeBP1N8NrP43Q/132"
                    }], this.defaultStore = [{
                        id: 1,
                        car_id: 1,
                        car_name: "1级车",
                        car_des: "无",
                        buy_type: 1,
                        gold: 0,
                        share_num: 0,
                        video_num: 0,
                        type: "默认",
                        status: 1,
                        share_now: 0,
                        video_now: 0
                    }, {
                        id: 2,
                        car_id: 2,
                        car_name: "2级车",
                        car_des: "无",
                        buy_type: 5,
                        gold: 0,
                        share_num: 0,
                        video_num: 1,
                        type: "视频",
                        status: 0,
                        share_now: 0,
                        video_now: 0
                    }, {
                        id: 3,
                        car_id: 3,
                        car_name: "3级车",
                        car_des: "无",
                        buy_type: 5,
                        gold: 0,
                        share_num: 0,
                        video_num: 1,
                        type: "视频",
                        status: 0,
                        share_now: 0,
                        video_now: 0
                    }, {
                        id: 4,
                        car_id: 4,
                        car_name: "4级车",
                        car_des: "无",
                        buy_type: 2,
                        gold: 5e3,
                        share_num: 0,
                        video_num: 0,
                        type: "金币",
                        status: 0,
                        share_now: 0,
                        video_now: 0
                    }, {
                        id: 5,
                        car_id: 5,
                        car_name: "5级车",
                        car_des: "无",
                        buy_type: 5,
                        gold: 0,
                        share_num: 0,
                        video_num: 2,
                        type: "视频",
                        status: 0,
                        share_now: 0,
                        video_now: 0
                    }, {
                        id: 6,
                        car_id: 6,
                        car_name: "6级车",
                        car_des: "无",
                        buy_type: 5,
                        gold: 0,
                        share_num: 0,
                        video_num: 2,
                        type: "视频",
                        status: 0,
                        share_now: 0,
                        video_now: 0
                    }, {
                        id: 7,
                        car_id: 7,
                        car_name: "7级车",
                        car_des: "无",
                        buy_type: 5,
                        gold: 0,
                        share_num: 0,
                        video_num: 2,
                        type: "视频",
                        status: 0,
                        share_now: 0,
                        video_now: 0
                    }, {
                        id: 8,
                        car_id: 8,
                        car_name: "8级车",
                        car_des: "无",
                        buy_type: 2,
                        gold: 5e4,
                        share_num: 0,
                        video_num: 0,
                        type: "金币",
                        status: 0,
                        share_now: 0,
                        video_now: 0
                    }, {
                        id: 9,
                        car_id: 9,
                        car_name: "9级车",
                        car_des: "9",
                        buy_type: 5,
                        gold: 0,
                        share_num: 0,
                        video_num: 3,
                        type: "视频",
                        status: 0,
                        share_now: 0,
                        video_now: 0
                    }, {
                        id: 10,
                        car_id: 10,
                        car_name: "车辆10",
                        car_des: "无",
                        buy_type: 5,
                        gold: 0,
                        share_num: 0,
                        video_num: 3,
                        type: "视频",
                        status: 0,
                        share_now: 0,
                        video_now: 0
                    }, {
                        id: 11,
                        car_id: 11,
                        car_name: "车辆11",
                        car_des: "无",
                        buy_type: 5,
                        gold: 0,
                        share_num: 0,
                        video_num: 5,
                        type: "视频",
                        status: 0,
                        share_now: 0,
                        video_now: 0
                    }]
                }
                return HttpMgr.prototype.login = function(t, e) {
                    "h5" != a.default.platformType && this._http.request({
                        url: "user/login",
                        data: t,
                        callback: function(t) {
                            "android" == a.default.platformType && null == t && (t = {
                                code: 200,
                                msg: "ok",
                                data: {
                                    status: 1,
                                    msg: "Đã đăng nhập",
                                    user_id: 2,
                                    openid: "123456",
                                    is_first_login: 0,
                                    is_new_user: 0,
                                    time: 1566451490
                                },
                                androidLogin: "false"
                            }), 200 == t.code ? e.success && e.success(t) : (n.default.openId = null, e.fail && e.fail(t))
                        }
                    })
                }, HttpMgr.prototype.getSystemConfig = function() {
                    if ("h5" != a.default.platformType) this._http.request({
                        url: "config/get_config",
                        data: [],
                        callback: function(t) {
                            "android" == a.default.platformType && null == t && (t = {
                                code: 200,
                                msg: "ok",
                                data: {
                                    status: 1,
                                    share_img: "https://txcdn.ylll111.xyz/hanzi/210e858ec08fd3c3e910d4b11216711f.png",
                                    share_title: "这个是分享标题",
                                    video_time_get_gold: 3e3,
                                    video_get_gold: 2e3,
                                    share_in_off: 1,
                                    music_in_off: 1,
                                    config_list: !1,
                                    ai_config: {
                                        ai_config: [{
                                            id: 1,
                                            speed: .28,
                                            unit_rot_y: 400,
                                            impact_force: 4,
                                            scale_resistance: .09,
                                            scale: .12,
                                            scale_factor: .13,
                                            bump_resistance: 1
                                        }, {
                                            id: 2,
                                            speed: .285,
                                            unit_rot_y: 400,
                                            impact_force: 4,
                                            scale_resistance: .09,
                                            scale: .12,
                                            scale_factor: .13,
                                            bump_resistance: 1
                                        }, {
                                            id: 3,
                                            speed: .29,
                                            unit_rot_y: 400,
                                            impact_force: 4,
                                            scale_resistance: .09,
                                            scale: .12,
                                            scale_factor: .13,
                                            bump_resistance: 1
                                        }, {
                                            id: 4,
                                            speed: .295,
                                            unit_rot_y: 400,
                                            impact_force: 4,
                                            scale_resistance: .09,
                                            scale: .12,
                                            scale_factor: .13,
                                            bump_resistance: 1
                                        }, {
                                            id: 5,
                                            speed: .3,
                                            unit_rot_y: 400,
                                            impact_force: 4,
                                            scale_resistance: .09,
                                            scale: .12,
                                            scale_factor: .13,
                                            bump_resistance: 1
                                        }, {
                                            id: 6,
                                            speed: .305,
                                            unit_rot_y: 400,
                                            impact_force: 4,
                                            scale_resistance: .09,
                                            scale: .12,
                                            scale_factor: .13,
                                            bump_resistance: 1
                                        }, {
                                            id: 7,
                                            speed: .31,
                                            unit_rot_y: 400,
                                            impact_force: 4,
                                            scale_resistance: .09,
                                            scale: .12,
                                            scale_factor: .13,
                                            bump_resistance: 1
                                        }, {
                                            id: 8,
                                            speed: .315,
                                            unit_rot_y: 400,
                                            impact_force: 4,
                                            scale_resistance: .15,
                                            scale: .12,
                                            scale_factor: .13,
                                            bump_resistance: 1
                                        }],
                                        mapdrop_config: [{
                                            id: 0,
                                            startTime: 13,
                                            intervalTime: 5,
                                            warningTime: 3
                                        }, {
                                            id: 1,
                                            startTime: 20,
                                            intervalTime: 15,
                                            warningTime: 3
                                        }, {
                                            id: 2,
                                            startTime: 20,
                                            intervalTime: 15,
                                            warningTime: 3
                                        }, {
                                            id: 3,
                                            startTime: 20,
                                            intervalTime: 15,
                                            warningTime: 3
                                        }],
                                        ai_pursuit_probability: {
                                            pursuit: 2
                                        },
                                        noob_config: [{
                                            num: 1,
                                            impact_force: 1,
                                            bump_resistance: .5
                                        }, {
                                            num: 2,
                                            impact_force: 1,
                                            bump_resistance: .5
                                        }, {
                                            num: 3,
                                            impact_force: 1,
                                            bump_resistance: .5
                                        }, {
                                            num: 4,
                                            impact_force: 1,
                                            bump_resistance: .5
                                        }],
                                        btn_onoff: {
                                            btn_onoff: 1
                                        },
                                        watchvideo_config: {
                                            time: 120,
                                            money: 3e3,
                                            mtime: 10
                                        },
                                        togetanewcar_time: {
                                            time: 300
                                        },
                                        camerafollows_config: {
                                            deadTime: .2,
                                            winTime: 1.2
                                        },
                                        dropMoneyAni_config: {
                                            time: 4
                                        },
                                        settle_jump_config: {
                                            time: 1
                                        }
                                    }
                                }
                            }), 200 == t.code && t.data && 1 == t.data.status && (a.default.ctrlInfo.video_time_get_gold = t.data.video_time_get_gold, a.default.ctrlInfo.video_get_gold = t.data.video_get_gold, a.default.ctrlInfo.user_share_num = t.data.user_share_num, t.data.ai_config && (t.data.ai_config.ai_config && (a.default.carConfigInfo = t.data.ai_config.ai_config), t.data.ai_config.mapdrop_config && (a.default.mapdropConfigInfo = t.data.ai_config.mapdrop_config), t.data.ai_config.ai_pursuit_probability && (a.default.aiPursuitProbability = t.data.ai_config.ai_pursuit_probability.pursuit), t.data.ai_config.noob_config && (a.default.noob_config = t.data.ai_config.noob_config), t.data.ai_config.btn_onoff && (a.default.btn_onoff = t.data.ai_config.btn_onoff.btn_onoff), t.data.ai_config.watchvideo_config && (a.default.watchvideo_config = t.data.ai_config.watchvideo_config), t.data.ai_config.togetanewcar_time && (a.default.togetanewcar_time = t.data.ai_config.togetanewcar_time.time), t.data.ai_config.camerafollows_config && (a.default.camerafollows_config = t.data.ai_config.camerafollows_config), t.data.ai_config.dropMoneyAni_config && (a.default.dropMoneyAni_config = t.data.ai_config.dropMoneyAni_config.time), t.data.ai_config.settle_config && (a.default.settle_config = t.data.ai_config.settle_config), t.data.ai_config.luxury_car_push && (a.default.luxury_car_push = t.data.ai_config.luxury_car_push), t.data.ai_config.ios_audit_video && (a.default.iosAuditVideo = t.data.ai_config.ios_audit_video.audit))), s.default.instance.emit("getSystemParamListBack")
                        },
                        fail: function(t) {
                            s.default.instance.emit("getSystemParamListBack")
                        }
                    });
                    else {
                        s.default.instance.emit("getSystemParamListBack")
                    }
                }, HttpMgr.prototype.getMainIndex = function(t) {
                    if ("h5" != a.default.platformType) this._http.request({
                        url: "index/index",
                        data: ["user_id=" + n.default.userId, "timestamp=0"],
                        callback: function(e) {
                            "android" == a.default.platformType && null == e && (e = {
                                code: 200,
                                msg: "ok",
                                data: {
                                    status: 1,
                                    gold: 0,
                                    score: 0,
                                    game_num: 0,
                                    car_id: 1,
                                    car_ids: ["1"]
                                }
                            }), 200 == e.code && (e.data && 1 == e.data.status ? (n.default.gold = e.data.gold || 0, n.default.score = e.data.score || 0, n.default.car = e.data.car_id || 1, n.default.cars = e.data.car_ids || [], n.default.serverGameNumber = e.data.game_num || 0, n.default.gameData.tryId = n.default.car) : s.default.instance.emit("openTip", e.data.msg), t && t(e))
                        },
                        fail: function(t) {}
                    });
                    else {
                        n.default.gameData.tryId = n.default.car;
                        var e = {
                            code: 200,
                            msg: "ok",
                            data: {
                                status: 1,
                                gold: n.default.gold,
                                score: 0,
                                game_num: n.default.serverGameNumber,
                                car_id: n.default.car,
                                car_ids: n.default.cars
                            }
                        };
                        t && t(e)
                    }
                }, HttpMgr.prototype.updateUserInfo = function() {
                    "h5" != a.default.platformType && this._http.request({
                        url: "user/update",
                        data: {
                            user_id: n.default.userId,
                            nickname: n.default.nickName,
                            avatar: n.default.avatarUrl,
                            gender: n.default.gender,
                            timestamp: 0
                        }
                    })
                }, HttpMgr.prototype.startGamePost = function(t, e) {
                    var i = this;
                    if ("h5" == a.default.platformType) {
                        var o = {
                            code: 200,
                            msg: "ok",
                            data: {
                                status: 1,
                                msg: "ok",
                                game_id: "1"
                            },
                            nick_data: this.defaultAI
                        };
                        return n.default.otherPlays = this.defaultAI, n.default.gameId = "1", void e(o)
                    }
                    this._http.request({
                        url: "game/start",
                        data: ["user_id=" + n.default.userId, "timestamp=0", "num=" + t],
                        callback: function(t) {
                            "h5" == a.default.platformType && null == t && (t = {
                                code: 200,
                                msg: "ok",
                                data: {
                                    status: 1,
                                    msg: "ok",
                                    game_id: "76066"
                                }
                            }), 200 == t.code && (t.data && (t.data.nick_data = i.defaultAI, n.default.otherPlays = t.data.nick_data || [], n.default.gameId = t.data.game_id), e && e(t))
                        },
                        fail: function(t) {}
                    })
                }, HttpMgr.prototype.gameEndPost = function(t, e, i, o) {
                    if ("h5" == a.default.platformType) return console.log("num" + t), n.default.gold += t, console.log("gold" + n.default.gold), n.default.storageUserData(), void i();
                    this._http.request({
                        url: "game/end",
                        data: ["user_id=" + n.default.userId, "game_id=" + n.default.gameId, "timestamp=0", "gold=" + t, "score=0", "is_win=" + e],
                        callback: function(t) {
                            "android" == a.default.platformType && null == t && (t = {
                                code: 200,
                                msg: "ok",
                                data: {
                                    status: 1,
                                    gold: 0,
                                    score: 0,
                                    msg: "ok"
                                }
                            }), 200 == t.code && (t.data && 1 == t.data.status && (n.default.gold = t.data.gold || 0), i && i(t))
                        },
                        fail: function(t) {
                            o && o(t)
                        }
                    })
                }, HttpMgr.prototype.videoPost = function(t, e) {
                    if ("h5" == a.default.platformType) {
                        var i = {};
                        return 2 == t ? (n.default.video_num += 1, i = {
                            code: 200,
                            msg: "ok",
                            data: {
                                status: 1,
                                msg: "ok",
                                video_num: n.default.video_num
                            }
                        }, console.log("用户播放video" + n.default.video_num)) : 4 != t && 5 != t && 1 != t || (n.default.gold += 3e3, i = {
                            code: 200,
                            msg: "ok",
                            data: {
                                status: 1,
                                msg: "ok",
                                gold: n.default.gold
                            }
                        }, console.log("用户播放video" + n.default.gold)), e && e(i), void n.default.storageUserData()
                    }
                    this._http.request({
                        url: "index/video",
                        data: ["user_id=" + n.default.userId, "timestamp=0", "video_type=" + t],
                        callback: function(t) {
                            "android" == a.default.platformType && null == t && (t = {
                                code: 200,
                                msg: "ok",
                                data: {
                                    status: 1,
                                    msg: "ok",
                                    video_num: 1,
                                    gold: "12339"
                                }
                            }), 200 == t.code && e && e(t)
                        },
                        fail: function(t) {}
                    })
                }, HttpMgr.prototype.storePost = function(t) {
                    if ("h5" != a.default.platformType) this._http.request({
                        url: "store/index",
                        data: ["user_id=" + n.default.userId, "timestamp=0"],
                        callback: function(e) {
                            "android" == a.default.platformType && null == e && (e = {
                                code: 200,
                                msg: "ok",
                                data: {
                                    status: 1,
                                    list: [{
                                        id: 1,
                                        car_id: 1,
                                        car_name: "1级车",
                                        car_des: "无",
                                        buy_type: 1,
                                        gold: 0,
                                        share_num: 0,
                                        video_num: 0,
                                        type: "默认",
                                        status: 1,
                                        share_now: 0,
                                        video_now: 0
                                    }, {
                                        id: 2,
                                        car_id: 2,
                                        car_name: "2级车",
                                        car_des: "无",
                                        buy_type: 4,
                                        gold: 0,
                                        share_num: 0,
                                        video_num: 1,
                                        type: "视频",
                                        status: 0,
                                        share_now: 0,
                                        video_now: 0
                                    }, {
                                        id: 3,
                                        car_id: 3,
                                        car_name: "3级车",
                                        car_des: "无",
                                        buy_type: 4,
                                        gold: 0,
                                        share_num: 0,
                                        video_num: 1,
                                        type: "视频",
                                        status: 0,
                                        share_now: 0,
                                        video_now: 0
                                    }, {
                                        id: 9,
                                        car_id: 4,
                                        car_name: "4级车",
                                        car_des: "无",
                                        buy_type: 2,
                                        gold: 5e3,
                                        share_num: 0,
                                        video_num: 0,
                                        type: "金币",
                                        status: 0,
                                        share_now: 0,
                                        video_now: 0
                                    }, {
                                        id: 5,
                                        car_id: 5,
                                        car_name: "5级车",
                                        car_des: "无",
                                        buy_type: 4,
                                        gold: 0,
                                        share_num: 0,
                                        video_num: 2,
                                        type: "视频",
                                        status: 0,
                                        share_now: 0,
                                        video_now: 0
                                    }, {
                                        id: 6,
                                        car_id: 6,
                                        car_name: "6级车",
                                        car_des: "无",
                                        buy_type: 4,
                                        gold: 0,
                                        share_num: 0,
                                        video_num: 2,
                                        type: "视频",
                                        status: 0,
                                        share_now: 0,
                                        video_now: 0
                                    }, {
                                        id: 7,
                                        car_id: 7,
                                        car_name: "7级车",
                                        car_des: "无",
                                        buy_type: 4,
                                        gold: 0,
                                        share_num: 0,
                                        video_num: 2,
                                        type: "视频",
                                        status: 0,
                                        share_now: 0,
                                        video_now: 0
                                    }, {
                                        id: 8,
                                        car_id: 8,
                                        car_name: "8级车",
                                        car_des: "无",
                                        buy_type: 2,
                                        gold: 5e4,
                                        share_num: 0,
                                        video_num: 0,
                                        type: "金币",
                                        status: 0,
                                        share_now: 0,
                                        video_now: 0
                                    }, {
                                        id: 10,
                                        car_id: 9,
                                        car_name: "9级车",
                                        car_des: "9",
                                        buy_type: 4,
                                        gold: 0,
                                        share_num: 0,
                                        video_num: 3,
                                        type: "视频",
                                        status: 0,
                                        share_now: 0,
                                        video_now: 0
                                    }, {
                                        id: 11,
                                        car_id: 10,
                                        car_name: "车辆10",
                                        car_des: "无",
                                        buy_type: 4,
                                        gold: 0,
                                        share_num: 0,
                                        video_num: 3,
                                        type: "视频",
                                        status: 0,
                                        share_now: 0,
                                        video_now: 0
                                    }, {
                                        id: 12,
                                        car_id: 11,
                                        car_name: "车辆11",
                                        car_des: "无",
                                        buy_type: 4,
                                        gold: 0,
                                        share_num: 0,
                                        video_num: 5,
                                        type: "视频",
                                        status: 0,
                                        share_now: 0,
                                        video_now: 0
                                    }],
                                    video_num: 0
                                }
                            }), 200 == e.code && (t && t(e), e.data && 1 != e.data.status && s.default.instance.emit("openTip", e.data.msg))
                        },
                        fail: function(t) {}
                    });
                    else {
                        var e = {
                            code: 200,
                            msg: "ok",
                            data: {
                                status: 1,
                                list: this.defaultStore,
                                video_num: n.default.video_num
                            }
                        };
                        t(e)
                    }
                }, HttpMgr.prototype.storeBuyPost = function(t, e) {
                    if ("h5" != a.default.platformType) this._http.request({
                        url: "store/buy",
                        data: ["user_id=" + n.default.userId, "timestamp=0", "car_id=" + t],
                        callback: function(t) {
                            "android" == a.default.platformType && null == t && (t = {
                                code: 200,
                                msg: "ok",
                                data: {
                                    status: 0,
                                    msg: "Không có video"
                                }
                            }), 200 == t.code && (t.data && 1 == t.data.status && (n.default.gold = t.data.gold || 0), e && e(t))
                        },
                        fail: function(t) {
                            s.default.instance.emit("openTip", "Không thể mua!")
                        }
                    });
                    else if (n.default.storeList)
                        for (var i = 0; i < n.default.storeList.length; i++) {
                            var o = n.default.storeList[i];
                            if (o && o.id == t) {
                                if (2 == o.buy_type && n.default.gold >= n.default.storeList[i].gold) n.default.gold -= o.gold, e({
                                    code: 200,
                                    msg: "ok",
                                    data: {
                                        status: 1,
                                        msg: "Không có video"
                                    }
                                });
                                else if (2 == o.buy_type) {
                                    e({
                                        code: 0,
                                        msg: "fail",
                                        data: {
                                            status: 0,
                                            msg: "Không đủ tiền"
                                        }
                                    })
                                } else if (4 == o.buy_type || 5 == o.buy_type) {
                                    e({
                                        code: 200,
                                        msg: "ok",
                                        data: {
                                            status: 1
                                        }
                                    })
                                }
                                n.default.storageUserData();
                                break
                            }
                        }
                }, HttpMgr.prototype.storeSelectCarPost = function() {
                    "h5" != a.default.platformType && this._http.request({
                        url: "store/select_car",
                        data: ["user_id=" + n.default.userId, "timestamp=0", "car_id=" + n.default.car],
                        callback: function(t) {},
                        fail: function(t) {}
                    })
                }, HttpMgr.prototype.storeOpenBoxPost = function(t) {
                    "h5" != a.default.platformType && this._http.request({
                        url: "store/open_box",
                        data: ["user_id=" + n.default.userId, "timestamp=0", "car_id=" + t],
                        callback: function(t) {},
                        fail: function(t) {}
                    })
                }, HttpMgr.prototype.storeShareVideoPost = function(t, e, i) {
                    "h5" != a.default.platformType && this._http.request({
                        url: "store/share_video",
                        data: ["user_id=" + n.default.userId, "timestamp=0", "car_id=" + e, "type=" + t],
                        callback: function(t) {
                            "android" == a.default.platformType && null == t && (t = {
                                code: 200,
                                msg: "ok",
                                data: {
                                    status: 0,
                                    msg: "数据错误2"
                                }
                            }), 200 == t.code && i && i(t)
                        },
                        fail: function(t) {}
                    })
                }, HttpMgr.prototype.jumpAppVideoPost = function() {
                    "h5" != a.default.platformType && this._http.request({
                        url: a.default.adUrl + "jump_log/app_video",
                        data: ["appid=" + a.default.myAppid, "from_appid=" + n.default.fromImgid, "user_id=" + n.default.userId],
                        callback: function(t) {},
                        fail: function(t) {}
                    })
                }, HttpMgr.prototype.storePushBuyPost = function(t, e) {
                    "h5" != a.default.platformType && this._http.request({
                        url: "store/push_buy",
                        data: ["user_id=" + n.default.userId, "timestamp=0", "car_id=" + t],
                        callback: function(t) {
                            "android" == a.default.platformType && null == t && (t = {
                                code: 200,
                                msg: "ok",
                                data: {
                                    status: 0,
                                    msg: "用户信息不存在"
                                }
                            }), 200 == t.code && e && e(t)
                        },
                        fail: function(t) {
                            s.default.instance.emit("openTip", "Không thể mua!")
                        }
                    })
                }, HttpMgr.instance = new HttpMgr, HttpMgr
            }();
        i.default = r
    }, {
        "../models/ConfigData": 18,
        "../models/UserData": 19,
        "../tools/HttpUtils": 23,
        "./EventMgr": 12
    }],
    14: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../models/ConfigData"),
            o = t("../wx/WXAPI"),
            n = t("../wx/AndroidAPI"),
            s = t("../wx/IOSAPI"),
            r = t("../wx/H5API"),
            l = function(t) {
                function PlatformMgr() {
                    return t.call(this) || this
                }
                return __extends(PlatformMgr, t), PlatformMgr.initPlatform = function() {
                    switch (a.default.platformType) {
                        case "qq":
                            Laya.Browser.onQQMiniGame && (PlatformMgr.ptAPI = new o.default);
                            break;
                        case "android":
                            PlatformMgr.ptAPI = new n.default;
                            break;
                        case "ios":
                            PlatformMgr.ptAPI = new s.default;
                            break;
                        case "h5":
                            PlatformMgr.ptAPI = new r.default
                    }
                }, PlatformMgr.callAPIMethodByProxy = function(t, e) {
                    if (PlatformMgr.ptAPI && PlatformMgr.ptAPI[t]) return PlatformMgr.ptAPI[t](e)
                }, PlatformMgr
            }(Laya.Script);
        i.default = l
    }, {
        "../models/ConfigData": 18,
        "../wx/AndroidAPI": 37,
        "../wx/H5API": 39,
        "../wx/IOSAPI": 40,
        "../wx/WXAPI": 41
    }],
    15: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../models/ConfigData"),
            o = function() {
                function SoundMgr() {}
                return SoundMgr.prototype.playSound = function(t) {
                    if (a.default.isSound) {
                        var e = "res/sound/" + t + a.default.soundSuffix();
                        if (Laya.Browser.onQQMiniGame) {
                            var i = laya.utils.Pool.getItem(t);
                            null == i && ((i = window.qq.createInnerAudioContext()).src = "res/sound/" + t + a.default.soundSuffix(), i.onEnded(function() {
                                laya.utils.Pool.recover(t, i), i.offEnded()
                            })), i.play()
                        } else Laya.SoundManager.playSound(e, 1)
                    }
                }, SoundMgr.prototype.playBGM = function() {
                    if (a.default.isSound) {
                        var t = "res/sound/bg" + a.default.soundSuffix();
                        Laya.Browser.onQQMiniGame ? (this.bgm = window.qq.createInnerAudioContext(), this.bgm.src = t, this.bgm.loop = !0, this.bgm.play()) : Laya.SoundManager.playMusic(t, 0)
                    }
                }, SoundMgr.prototype.stopBGM = function() {
                    a.default.soundSuffix();
                    Laya.Browser.onQQMiniGame ? this.bgm && this.bgm.stop() : Laya.SoundManager.stopMusic()
                }, SoundMgr.instance = new SoundMgr, SoundMgr
            }();
        i.default = o
    }, {
        "../models/ConfigData": 18
    }],
    16: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../models/UserData"),
            o = function() {
                function StorageMgr() {}
                return StorageMgr.setStorage = function(t) {
                    var e = JSON.stringify(t.val);
                    Laya.Browser.onQQMiniGame ? window.qq.setStorage({
                        key: t.key,
                        data: e,
                        success: t.success,
                        fail: t.fail,
                        complete: t.complete
                    }) : localStorage.setItem(t.key, e)
                }, StorageMgr.getStorage = function(t) {
                    var e = null;
                    try {
                        e = Laya.Browser.onQQMiniGame ? window.qq.getStorageSync(t) : localStorage.getItem(t)
                    } catch (t) {}
                    return e
                }, StorageMgr.getLocalVirbort = function() {
                    return "1" != (Laya.Browser.onQQMiniGame ? window.qq.getStorageSync("virbort") : localStorage.getItem("virbort"))
                }, StorageMgr.setLocalVirbort = function(t) {
                    Laya.Browser.onQQMiniGame ? window.qq.setStorage({
                        key: "virbort",
                        success: null,
                        fail: null,
                        complete: null,
                        data: t
                    }) : localStorage.setItem("virbort", t)
                }, StorageMgr.getLocalSound = function() {
                    return "1" != (Laya.Browser.onQQMiniGame ? window.qq.getStorageSync("sound") : localStorage.getItem("sound"))
                }, StorageMgr.setLocalSound = function(t) {
                    Laya.Browser.onQQMiniGame ? window.qq.setStorage({
                        key: "sound",
                        success: null,
                        fail: null,
                        complete: null,
                        data: t
                    }) : localStorage.setItem("sound", t)
                }, StorageMgr.saveUserData = function() {
                    var t = {
                        openId: a.default.openId,
                        userId: a.default.userId
                    };
                    StorageMgr.setStorage({
                        key: "userDataLocal",
                        val: t
                    })
                }, StorageMgr.getLocalUserData = function() {
                    if (!a.default.isLogin) {
                        var t = StorageMgr.getStorage("userDataLocal");
                        if (t) {
                            var e = JSON.parse(t);
                            e && (e.openId && (a.default.openId = e.openId), e.userId && (a.default.userId = e.userId))
                        }
                    }
                }, StorageMgr
            }();
        i.default = o
    }, {
        "../models/UserData": 19
    }],
    17: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../tools/MyUtils"),
            o = t("./EventMgr"),
            n = function() {
                function ViewMgr() {
                    this.viewDic = {}, this.events = ["goHome", "openFighting", "openConvene", "openGameEnd", "openTip", "openResurgence", "openRank", "openTogetANewCar", "openTogetMoney"]
                }
                return ViewMgr.prototype.init = function() {
                    for (var t = 0; t < this.events.length; t++) o.default.instance.onEvent(this.events[t], this, this[this.events[t]])
                }, ViewMgr.prototype.goHome = function(t) {
                    this.openView({
                        viewName: "MainUI.scene",
                        closeAll: !0,
                        data: t
                    })
                }, ViewMgr.prototype.openFighting = function(t) {
                    this.openView({
                        viewName: "GuideUI.scene",
                        closeAll: !0,
                        data: t
                    })
                }, ViewMgr.prototype.openConvene = function(t) {
                    this.openView({
                        viewName: "ConveneUI.scene",
                        closeAll: !0,
                        data: t
                    })
                }, ViewMgr.prototype.openResurgence = function(t) {
                    this.openView({
                        viewName: "ResurgenceUI.scene",
                        closeAll: !1,
                        data: t
                    })
                }, ViewMgr.prototype.openGameEnd = function(t) {
                    this.openView({
                        viewName: "GameEnd.scene",
                        closeAll: t.closeALL,
                        data: t
                    })
                }, ViewMgr.prototype.openTip = function(t) {
                    this.openView({
                        viewName: "Tip.scene",
                        closeAll: !1,
                        data: t
                    })
                }, ViewMgr.prototype.openTogetANewCar = function(t) {
                    this.openView({
                        viewName: "TogetANewCar.scene",
                        closeAll: !1,
                        data: t
                    })
                }, ViewMgr.prototype.openTogetMoney = function(t) {
                    this.openView({
                        viewName: "TogetMoney.scene",
                        closeAll: !1,
                        data: t
                    })
                }, ViewMgr.prototype.openView = function(t) {
                    var e = this,
                        i = t.viewName,
                        o = (t.cls, t.closeAll || !1);
                    if (o && (this.viewDic = {}), a.default.isNull(this.viewDic[i])) Laya.Scene.open(i, o, Laya.Handler.create(this, function(a) {
                        e.viewDic[i] = a;
                        var o = a._components;
                        if (o)
                            for (var n = 0; n < o.length; n++) {
                                var s = o[n];
                                if (s.isMyBaseView) {
                                    s.openView(t.data);
                                    break
                                }
                            }
                    }));
                    else {
                        var n = this.viewDic[i]._components;
                        if (n)
                            for (var s = 0; s < n.length; s++) {
                                var r = n[s];
                                if (r.isMyBaseView) {
                                    r.openView(t.data);
                                    break
                                }
                            }
                    }
                }, ViewMgr.prototype.closeView = function(t) {
                    a.default.isNull(this.viewDic[t]) || (console.log("进到这来了"), this.viewDic[t].destroy(), this.viewDic[t] = null)
                }, ViewMgr.prototype.hideView = function(t) {
                    a.default.isNull(this.viewDic[t]) || (this.viewDic[t].visible = !1)
                }, ViewMgr.prototype.getView = function(t) {
                    var e = this.viewDic[t];
                    if (!a.default.isNull(e)) return e
                }, ViewMgr.instance = new ViewMgr, ViewMgr
            }();
        i.default = n
    }, {
        "../tools/MyUtils": 25,
        "./EventMgr": 12
    }],
    18: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../mgrCommon/StorageMgr");
        ! function(t) {
            t[t.map01 = 0] = "map01", t[t.map02 = 1] = "map02", t[t.map03 = 2] = "map03", t[t.map04 = 3] = "map04", t[t.map05 = 4] = "map05", t[t.map06 = 5] = "map06", t[t.map07 = 6] = "map07", t[t.map08 = 7] = "map08"
        }(i.MAPTYPE || (i.MAPTYPE = {})),
        function(t) {
            t[t.car01 = 1] = "car01", t[t.car02 = 2] = "car02", t[t.car03 = 3] = "car03", t[t.car04 = 4] = "car04", t[t.car05 = 5] = "car05", t[t.car06 = 6] = "car06", t[t.car07 = 7] = "car07", t[t.car08 = 8] = "car08", t[t.car09 = 9] = "car09", t[t.car10 = 10] = "car10", t[t.car11 = 11] = "car11"
        }(i.CARTYPE || (i.CARTYPE = {})),
        function(t) {
            t[t.default = 0] = "default", t[t.djs = 1] = "djs", t[t.gameing = 2] = "gameing", t[t.pause = 3] = "pause", t[t.transition_over = 4] = "transition_over", t[t.over = 5] = "over"
        }(i.GAMESTATE || (i.GAMESTATE = {})),
        function(t) {
            t[t.default = 0] = "default", t[t.pursueAndAttack = 1] = "pursueAndAttack", t[t.runAway = 2] = "runAway"
        }(i.CARMOVESTATE || (i.CARMOVESTATE = {}));
        var o = function() {
            function ConfigData() {}
            return ConfigData.soundSuffix = function() {
                return "qq" == ConfigData.platformType || "h5" == ConfigData.platformType ? ".mp3" : "android" == ConfigData.platformType ? ".ogg" : "ios" == ConfigData.platformType ? ".ogg" : ".mp3"
            }, ConfigData.initLocal = function() {
                "android" == ConfigData.platformType ? ConfigData.serverUrl = "https://apkadmin.qwpo2018.com/ppc_apk/api/v1/" : "ios" == ConfigData.platformType ? ConfigData.serverUrl = "https://apkadmin.qwpo2018.com/ppc_ios/api/v1/" : "h5" == ConfigData.platformType && (ConfigData.serverUrl = "https://platform.qwpo2018.com/ppc_4399/api/v1/"), ConfigData.isSound = a.default.getLocalSound(), ConfigData.isVirbort = a.default.getLocalVirbort(), Laya.Browser.onQQMiniGame && (this.systemInfo = window.qq.getSystemInfoSync())
            }, ConfigData.getConfigData = function(t) {
                return this.ctrlInfo[t]
            }, ConfigData.setSound = function(t) {
                !t || t.length <= 0 ? (ConfigData.isSound = !0, a.default.setLocalSound("")) : (a.default.setLocalSound("1"), ConfigData.isSound = !1)
            }, ConfigData.setVirbort = function(t) {
                !t || t.length <= 0 ? (ConfigData.isVirbort = !0, a.default.setLocalVirbort("")) : (a.default.setLocalVirbort("1"), ConfigData.isVirbort = !1)
            }, ConfigData.getBoxAwardNum = function() {
                var t = localStorage.getItem("boxAwardNum");
                return console.log("awardNum", t), t || localStorage.setItem("boxAwardNum", String(0)), Number(t)
            }, ConfigData.setBoxAwardNum = function(t) {
                t >= 0 && localStorage.setItem("boxAwardNum", String(t))
            }, ConfigData.EventDefine = {
                ZS_APP_JUMP_SUCCESS: "ZS_APP_JUMP_SUCCESS",
                ZS_APP_JUMP_CANCEL: "ZS_APP_JUMP_CANCEL",
                ZS_APP_SHOW: "ZS_APP_SHOW"
            }, ConfigData.myAppid = "1110095672", ConfigData.version = "1.0.1", ConfigData.jsonVersion = "100", ConfigData.serverUrl = "https://platform.qwpo2018.com/ppc_4399/api/v1/", ConfigData.adUrl = "https://ad.ali-yun.wang/api/", ConfigData.platformType = "h5", ConfigData.isCreateAuthorization = !1, ConfigData.repeatAuthorization = !1, ConfigData.isLog = !0, ConfigData.ctrlInfo = {
                video_time_get_gold: 3e3,
                video_get_gold: 3e3,
                user_share_num: 2
            }, ConfigData.systemInfo = {}, ConfigData.carConfigInfo = [{
                id: 1,
                speed: .28,
                unit_rot_y: 400,
                impact_force: 4,
                scale_resistance: .09,
                scale: .12,
                scale_factor: .13,
                bump_resistance: 1
            }, {
                id: 2,
                speed: .285,
                unit_rot_y: 400,
                impact_force: 4,
                scale_resistance: .09,
                scale: .12,
                scale_factor: .13,
                bump_resistance: 1
            }, {
                id: 3,
                speed: .29,
                unit_rot_y: 400,
                impact_force: 4,
                scale_resistance: .09,
                scale: .12,
                scale_factor: .13,
                bump_resistance: 1
            }, {
                id: 4,
                speed: .295,
                unit_rot_y: 400,
                impact_force: 4,
                scale_resistance: .09,
                scale: .12,
                scale_factor: .13,
                bump_resistance: 1
            }, {
                id: 5,
                speed: .3,
                unit_rot_y: 400,
                impact_force: 4,
                scale_resistance: .09,
                scale: .12,
                scale_factor: .13,
                bump_resistance: 1
            }, {
                id: 6,
                speed: .305,
                unit_rot_y: 400,
                impact_force: 4,
                scale_resistance: .09,
                scale: .12,
                scale_factor: .13,
                bump_resistance: 1
            }, {
                id: 7,
                speed: .31,
                unit_rot_y: 400,
                impact_force: 4,
                scale_resistance: .09,
                scale: .12,
                scale_factor: .13,
                bump_resistance: 1
            }, {
                id: 8,
                speed: .315,
                unit_rot_y: 400,
                impact_force: 4,
                scale_resistance: .15,
                scale: .12,
                scale_factor: .13,
                bump_resistance: 1
            }, {
                id: 9,
                speed: .315,
                unit_rot_y: 400,
                impact_force: 4,
                scale_resistance: .15,
                scale: .12,
                scale_factor: .13,
                bump_resistance: 1
            }, {
                id: 10,
                speed: .315,
                unit_rot_y: 400,
                impact_force: 4,
                scale_resistance: .15,
                scale: .12,
                scale_factor: .13,
                bump_resistance: 1
            }, {
                id: 11,
                speed: .315,
                unit_rot_y: 400,
                impact_force: 4,
                scale_resistance: .15,
                scale: .12,
                scale_factor: .13,
                bump_resistance: 1
            }], ConfigData.mapdropConfigInfo = [{
                id: 0,
                startTime: 13,
                intervalTime: 5,
                warningTime: 3
            }, {
                id: 1,
                startTime: 20,
                intervalTime: 15,
                warningTime: 3
            }, {
                id: 2,
                startTime: 20,
                intervalTime: 15,
                warningTime: 3
            }, {
                id: 3,
                startTime: 20,
                intervalTime: 15,
                warningTime: 3
            }], ConfigData.aiPursuitProbability = 1, ConfigData.noob_config = [{
                num: 1,
                impact_force: 1,
                bump_resistance: .5
            }, {
                num: 2,
                impact_force: 1,
                bump_resistance: .5
            }, {
                num: 3,
                impact_force: 1,
                bump_resistance: .5
            }, {
                num: 4,
                impact_force: 1,
                bump_resistance: .5
            }], ConfigData.watchvideo_config = {
                time: 120,
                money: 3e3,
                mtime: 10
            }, ConfigData.camerafollows_config = {
                deadTime: 3,
                winTime: 2
            }, ConfigData.dropMoneyAni_config = 2, ConfigData.togetanewcar_time = 5, ConfigData.settle_config = {
                time: 1,
                reward: 3
            }, ConfigData.btn_onoff = 0, ConfigData.loadConfig = {
                zs_close_text_time: 3e3
            }, ConfigData.luxury_car_push = [{
                ID: 1,
                name: "蓝色妖姬",
                rank: "S",
                vehicle_id: 2,
                checkpoint_num: 1,
                time: 1800,
                pictures: "newcar1",
                video_frequency: 1
            }, {
                ID: 2,
                name: "Aventador",
                rank: "S",
                vehicle_id: 3,
                checkpoint_num: 4,
                time: 1800,
                pictures: "newcar1",
                video_frequency: 1
            }, {
                ID: 3,
                name: "BAT战神",
                rank: "S",
                vehicle_id: 5,
                checkpoint_num: 7,
                time: 1800,
                pictures: "newcar3",
                video_frequency: 1
            }, {
                ID: 4,
                name: "贵族传承",
                rank: "S",
                vehicle_id: 3,
                checkpoint_num: 10,
                time: 1800,
                pictures: "newcar2",
                video_frequency: 1
            }], ConfigData.iosAuditVideo = !1, ConfigData.openScreenAd = !1, ConfigData.bannerAdUnitIdArr = [], ConfigData.EVENT_ON_SHOW = "EVENT_ON_SHOW", ConfigData.EVENT_ON_HIDE = "EVENT_ON_HIDE", ConfigData
        }();
        i.default = o
    }, {
        "../mgrCommon/StorageMgr": 16
    }],
    19: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = function() {
            function UserData() {}
            return UserData.storageUserData = function() {
                var t = {
                    gold: UserData.gold,
                    car: UserData.car,
                    cars: UserData.cars,
                    score: UserData.score,
                    serverGameNumber: UserData.serverGameNumber,
                    video_num: UserData.video_num
                };
                console.log("缓存用户数据gold" + UserData.gold, "cars" + UserData.cars, "video_num" + UserData.video_num), Laya.LocalStorage.setJSON("userData", t)
            }, UserData.storageInitUser = function() {
                var t = Laya.LocalStorage.getJSON("userData"),
                    e = {
                        gold: 0,
                        car: 1,
                        cars: [1],
                        serverGameNumber: 0,
                        video_num: 0
                    };
                t ? e = t : (this.isFirstLogin = 1, this.isNew = !0), this.gold = null == e.gold ? 0 : e.gold, this.car = e.car ? e.car : 1, this.cars = e.cars && 0 != e.cars.length ? e.cars : [1], this.serverGameNumber = null == e.serverGameNumber ? 0 : e.serverGameNumber, this.isLogin = !1, this.video_num = null == e.video_num ? 0 : e.video_num
            }, UserData.code = "", UserData.openId = null, UserData.nickName = "", UserData.gender = 0, UserData.avatarUrl = "", UserData.score = 0, UserData.gold = 0, UserData.gameId = "", UserData.car = 1, UserData.cars = [], UserData.otherPlays = [], UserData.isNew = !1, UserData.isLogin = !1, UserData.isFirstLogin = 0, UserData.gameNumber = 0, UserData.watchVideoBtnIntervalTime = 0, UserData.togetanewcarTime = 0, UserData.lastBannerType = 3, UserData.gameData = {
                killNum: 0,
                survivalNum: 0,
                resurgence: 2,
                mapComList: [],
                tryId: 0
            }, UserData.reusltData = null, UserData
        }();
        i.default = a
    }, {}],
    20: [function(t, e, i) {
        i.appId = "1", i.iosappId = "1", i.secret = "7CaD3L23LlGnENd1"
    }, {}],
    21: [function(t, e, i) {
        (function(a) {
            var o = t("./zs.sdk.conf"),
                n = "https://apkadmin.qwpo2018.com/api/";
            (function() {
                function sdk() {}
                var t = function(t, e) {
                        return t << e | t >>> 32 - e
                    },
                    a = function(t, e) {
                        var i, a, o, n, s;
                        return o = 2147483648 & t, n = 2147483648 & e, s = (1073741823 & t) + (1073741823 & e), (i = 1073741824 & t) & (a = 1073741824 & e) ? 2147483648 ^ s ^ o ^ n : i | a ? 1073741824 & s ? 3221225472 ^ s ^ o ^ n : 1073741824 ^ s ^ o ^ n : s ^ o ^ n
                    },
                    s = function(e, i, o, n, s, r, l) {
                        return e = a(e, a(a(function(t, e, i) {
                            return t & e | ~t & i
                        }(i, o, n), s), l)), a(t(e, r), i)
                    },
                    r = function(e, i, o, n, s, r, l) {
                        return e = a(e, a(a(function(t, e, i) {
                            return t & i | e & ~i
                        }(i, o, n), s), l)), a(t(e, r), i)
                    },
                    l = function(e, i, o, n, s, r, l) {
                        return e = a(e, a(a(function(t, e, i) {
                            return t ^ e ^ i
                        }(i, o, n), s), l)), a(t(e, r), i)
                    },
                    d = function(e, i, o, n, s, r, l) {
                        return e = a(e, a(a(function(t, e, i) {
                            return e ^ (t | ~i)
                        }(i, o, n), s), l)), a(t(e, r), i)
                    },
                    c = function(t) {
                        for (var e, i = t.length, a = i + 8, o = 16 * ((a - a % 64) / 64 + 1), n = Array(o - 1), s = 0, r = 0; r < i;) s = r % 4 * 8, n[e = (r - r % 4) / 4] = n[e] | t.charCodeAt(r) << s, r++;
                        return s = r % 4 * 8, n[e = (r - r % 4) / 4] = n[e] | 128 << s, n[o - 2] = i << 3, n[o - 1] = i >>> 29, n
                    },
                    u = function(t) {
                        var e, i = "",
                            a = "";
                        for (e = 0; e <= 3; e++) i += (a = "0" + (t >>> 8 * e & 255).toString(16)).substr(a.length - 2, 2);
                        return i
                    },
                    h = function(t) {
                        t = t.replace(/\x0d\x0a/g, "\n");
                        for (var e = "", i = 0; i < t.length; i++) {
                            var a = t.charCodeAt(i);
                            a < 128 ? e += String.fromCharCode(a) : a > 127 && a < 2048 ? (e += String.fromCharCode(a >> 6 | 192), e += String.fromCharCode(63 & a | 128)) : (e += String.fromCharCode(a >> 12 | 224), e += String.fromCharCode(a >> 6 & 63 | 128), e += String.fromCharCode(63 & a | 128))
                        }
                        return e
                    };

                function _buildSign(t, e) {
                    e = e || !0;
                    for (var i = Object.keys(t).sort(), n = "", f = 0; f < i.length; f++) n += i[f] + ":" + t[i[f]];
                    e && (n += o.secret);
                    var p = function(t) {
                        var e, i, o, n, f, p, m, y, g, _ = Array();
                        for (t = h(t), _ = c(t), p = 1732584193, m = 4023233417, y = 2562383102, g = 271733878, e = 0; e < _.length; e += 16) i = p, o = m, n = y, f = g, p = s(p, m, y, g, _[e + 0], 7, 3614090360), g = s(g, p, m, y, _[e + 1], 12, 3905402710), y = s(y, g, p, m, _[e + 2], 17, 606105819), m = s(m, y, g, p, _[e + 3], 22, 3250441966), p = s(p, m, y, g, _[e + 4], 7, 4118548399), g = s(g, p, m, y, _[e + 5], 12, 1200080426), y = s(y, g, p, m, _[e + 6], 17, 2821735955), m = s(m, y, g, p, _[e + 7], 22, 4249261313), p = s(p, m, y, g, _[e + 8], 7, 1770035416), g = s(g, p, m, y, _[e + 9], 12, 2336552879), y = s(y, g, p, m, _[e + 10], 17, 4294925233), m = s(m, y, g, p, _[e + 11], 22, 2304563134), p = s(p, m, y, g, _[e + 12], 7, 1804603682), g = s(g, p, m, y, _[e + 13], 12, 4254626195), y = s(y, g, p, m, _[e + 14], 17, 2792965006), m = s(m, y, g, p, _[e + 15], 22, 1236535329), p = r(p, m, y, g, _[e + 1], 5, 4129170786), g = r(g, p, m, y, _[e + 6], 9, 3225465664), y = r(y, g, p, m, _[e + 11], 14, 643717713), m = r(m, y, g, p, _[e + 0], 20, 3921069994), p = r(p, m, y, g, _[e + 5], 5, 3593408605), g = r(g, p, m, y, _[e + 10], 9, 38016083), y = r(y, g, p, m, _[e + 15], 14, 3634488961), m = r(m, y, g, p, _[e + 4], 20, 3889429448), p = r(p, m, y, g, _[e + 9], 5, 568446438), g = r(g, p, m, y, _[e + 14], 9, 3275163606), y = r(y, g, p, m, _[e + 3], 14, 4107603335), m = r(m, y, g, p, _[e + 8], 20, 1163531501), p = r(p, m, y, g, _[e + 13], 5, 2850285829), g = r(g, p, m, y, _[e + 2], 9, 4243563512), y = r(y, g, p, m, _[e + 7], 14, 1735328473), m = r(m, y, g, p, _[e + 12], 20, 2368359562), p = l(p, m, y, g, _[e + 5], 4, 4294588738), g = l(g, p, m, y, _[e + 8], 11, 2272392833), y = l(y, g, p, m, _[e + 11], 16, 1839030562), m = l(m, y, g, p, _[e + 14], 23, 4259657740), p = l(p, m, y, g, _[e + 1], 4, 2763975236), g = l(g, p, m, y, _[e + 4], 11, 1272893353), y = l(y, g, p, m, _[e + 7], 16, 4139469664), m = l(m, y, g, p, _[e + 10], 23, 3200236656), p = l(p, m, y, g, _[e + 13], 4, 681279174), g = l(g, p, m, y, _[e + 0], 11, 3936430074), y = l(y, g, p, m, _[e + 3], 16, 3572445317), m = l(m, y, g, p, _[e + 6], 23, 76029189), p = l(p, m, y, g, _[e + 9], 4, 3654602809), g = l(g, p, m, y, _[e + 12], 11, 3873151461), y = l(y, g, p, m, _[e + 15], 16, 530742520), m = l(m, y, g, p, _[e + 2], 23, 3299628645), p = d(p, m, y, g, _[e + 0], 6, 4096336452), g = d(g, p, m, y, _[e + 7], 10, 1126891415), y = d(y, g, p, m, _[e + 14], 15, 2878612391), m = d(m, y, g, p, _[e + 5], 21, 4237533241), p = d(p, m, y, g, _[e + 12], 6, 1700485571), g = d(g, p, m, y, _[e + 3], 10, 2399980690), y = d(y, g, p, m, _[e + 10], 15, 4293915773), m = d(m, y, g, p, _[e + 1], 21, 2240044497), p = d(p, m, y, g, _[e + 8], 6, 1873313359), g = d(g, p, m, y, _[e + 15], 10, 4264355552), y = d(y, g, p, m, _[e + 6], 15, 2734768916), m = d(m, y, g, p, _[e + 13], 21, 1309151649), p = d(p, m, y, g, _[e + 4], 6, 4149444226), g = d(g, p, m, y, _[e + 11], 10, 3174756917), y = d(y, g, p, m, _[e + 2], 15, 718787259), m = d(m, y, g, p, _[e + 9], 21, 3951481745), p = a(p, i), m = a(m, o), y = a(y, n), g = a(g, f);
                        return (u(p) + u(m) + u(y) + u(g)).toLowerCase()
                    }(n);
                    return p = p.toLowerCase()
                }

                function _getAdByPosition(t) {
                    var e = f();
                    switch (t) {
                        case "1":
                            return e.more;
                        case "2":
                            return e.promotion;
                        case "3":
                            return e.indexFloat;
                        case "7":
                            return e.indexLeft;
                        case "8":
                            return e.gameFloat;
                        case "9":
                            return e.endPage;
                        case "11":
                            return e.indexLeftFloat
                    }
                    return null
                }

                function request(t, e, i, a, o, n) {
                    if (window.wx) wx.request({
                        url: t,
                        data: e,
                        header: {
                            "content-type": "application/json"
                        },
                        method: i,
                        success: function(t) {
                            a && a(t.data)
                        },
                        fail: function(t) {
                            o && o(t)
                        },
                        complete: function(t) {
                            n && n(t)
                        }
                    });
                    else {
                        var s = new XMLHttpRequest;
                        s.onreadystatechange = function() {
                            if (4 == s.readyState) {
                                var t = s.responseText;
                                if (s.status >= 200 && s.status < 400) {
                                    var e = {};
                                    try {
                                        e = JSON.parse(t)
                                    } catch (e) {
                                        console.error("json parse error ", t), o && o(e)
                                    }
                                    a && a(e)
                                } else console.error("error ", t), o && o(t)
                            }
                        }, s.timeout = 3e3, s.ontimeout = function(t) {
                            console.error("error ", t), o && o(t)
                        }, s.open(i, t, !0), "POST" == i ? (s.open("POST", t), s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.send(function(t) {
                            var e = [];
                            for (var i in t) e.push(i + "=" + t[i]);
                            return e.join("&")
                        }(e))) : s.send()
                    }
                }
                var f = function(t) {
                        if (window.zs = window.zs || {}, t) {
                            var e = window.zs.cacheTimeStamp;
                            return null == e || Date.now() - e < t ? window.zs.cache : null
                        }
                        return window.zs.cache
                    },
                    p = function(t) {
                        return "function" == typeof t
                    },
                    m = !1,
                    y = [],
                    g = function(t, e) {
                        if ("3" == t.app_type) try {
                            var i = wx.getStorageSync(t.appid);
                            null == i ? wx.setStorageSync(t.appid, 1) : wx.setStorageSync(t.appid, Number(i) + 1)
                        } catch (t) {
                            console.error(t)
                        }
                        var a, s, r, l, d, c;
                        a = t.app_id, s = e, r = n + "appad_new/collect", l = Math.round((new Date).getTime() / 1e3).toString(), d = {
                            user_id: s,
                            from_id: o.appId,
                            to_id: a,
                            timestamp: l
                        }, c = _buildSign(d), request(r, Object.assign({}, d, {
                            sign: c
                        }), "POST", function() {}, function() {
                            console.log("appad_new/collect fail")
                        }, function() {
                            console.log("appad_new/collect complete")
                        }), b(t.appid)
                    },
                    _ = null,
                    w = null,
                    v = "",
                    C = "",
                    I = null,
                    A = null,
                    b = function(t) {
                        null != _ ? request(n + "jump_log/app_to", {
                            appid: o.appId,
                            from_appid: C,
                            to_appid: t,
                            user_id: _
                        }, "POST", function() {}, function() {
                            console.log('jump_log/app_to" fail')
                        }, function() {
                            console.log('jump_log/app_to" complete')
                        }) : console.error("userId is null")
                    },
                    L = function(t, e) {
                        request(n + "apk_ad/click_log", {
                            user_id: _,
                            apk_id: o.appId,
                            link_id: t,
                            channel: v
                        }, "POST", e, function() {})
                    };
                sdk.init = function(t, e) {
                    console.log("sdk.initapp"), o.appId, _ = t, v = e
                }, sdk.sendVideoLog = function() {
                    null != _ ? request(n + "jump_log/app_video", {
                        appid: o.appId,
                        from_appid: C,
                        user_id: _
                    }, "POST", function() {}, function() {
                        console.log('jump_log/app_to" fail')
                    }, function() {
                        console.log('jump_log/app_to" complete')
                    }) : console.error("userId is null")
                }, sdk.loadAd = function(t) {
                    var e, i, a, s, r, l = f(6e5);
                    l ? t(l) : m ? y.push(t) : (m = !0, y.push(t), e = function(t) {
                        var e, i = {
                            more: t["position-1"] || [],
                            promotion: t["position-2"] || [],
                            indexFloat: t["position-3"] || [],
                            banner: t["position-4"] || [],
                            indexLeft: t["position-7"] || [],
                            gameFloat: t["position-8"] || [],
                            endPage: t["position-9"] || [],
                            indexLeftFloat: t["position-11"] || [],
                            backAd: t["position-12"] || []
                        };
                        e = i, window.zs = window.zs || {}, window.zs.cache = e, window.zs.cacheTimeStamp = Date.now();
                        for (var a = 0; a < y.length; a++) y[a](i);
                        y = [], m = !1
                    }, i = n + "appad_new/index", a = Math.round((new Date).getTime() / 1e3).toString(), s = {
                        appid: o.appId,
                        timestamp: a
                    }, r = _buildSign(s), request(i, Object.assign({}, s, {
                        sign: r
                    }), "POST", function(t) {
                        for (var i in t.data) t.data[i].sort(function() {
                            return Math.random() > .5 ? 1 : -1
                        });
                        e && e(t.data)
                    }, function(t) {
                        console.log("requestAdData fail")
                    }, function(t) {
                        console.log("requestAdData complete")
                    }))
                }, sdk.adDownloadCompleteApp = function(t, e) {
                    request(n + "apk_ad/load_log", {
                        user_id: _,
                        apk_id: o.appId,
                        link_id: t,
                        log_id: e,
                        channel: v
                    }, "POST", function() {}, function() {})
                }, sdk.adClickApp = function(t, e) {
                    var i = t.link_path,
                        a = t.link_name,
                        o = t.id,
                        n = t.link_page,
                        s = t.link_h5,
                        r = e;
                    L(o, function(t) {
                        if (200 == t.code) {
                            var e = t.data.log_id;
                            "android" == r ? window.zsSdk && window.zsSdk.navigateToAndroidProgram(i, n, a, o, e) : "h5" == r && window.zsSdk && window.zsSdk.openWeb(s, "")
                        }
                    })
                }, sdk.requestApkAdData = function(t) {
                    var e = n + "apk_ad/index",
                        i = Math.round((new Date).getTime() / 1e3).toString(),
                        a = _buildSign({
                            apk_id: o.appId,
                            timestamp: i
                        });
                    request(e, {
                        apk_id: o.appId,
                        sign: a,
                        timestamp: i
                    }, "POST", function(e) {
                        e.data.length > 0 && (e.data.sort(function() {
                            Math.random()
                        }), t && t(e.data))
                    }, function() {
                        console.log("requestAdData fail")
                    }, function() {
                        console.log("requestAdData complete")
                    })
                }, sdk.navigate2Mini = function(t, e, i, a, o) {
                    if (window.wx) {
                        var n = t;
                        if (null != I && "3" == n.app_type) try {
                            var s = wx.getStorageSync(n.appid);
                            s = null != s ? Number(s) : 0, Number(s) + 1 >= I && null == (n = 1 == w ? function(t, e) {
                                var i = _getAdByPosition(t);
                                if (null == i) return console.error("custom link is null"), null;
                                for (var a = 0; a < i.length; a++)
                                    if (i[a].appid == e) return i[a]
                            }(n.position_type, A) : function(t) {
                                var e = _getAdByPosition(t);
                                if (null == e) return console.error("box is null"), null;
                                for (var i = 0; i < e.length; i++)
                                    if ("4" == e[i].app_type) return e[i];
                                return console.error("box is null"), null
                            }(n.position_type)) && (n = t)
                        } catch (t) {
                            console.error(t)
                        }
                        n.extraData = n.extraData || {}, wx.navigateToMiniProgram({
                            appId: n.appid,
                            path: n.link_path,
                            extraData: n.extraData,
                            success: function(t) {
                                g(n, e), p(i) && i()
                            },
                            fail: function(t) {
                                p(a) && a()
                            },
                            complete: function(t) {
                                p(o) && o()
                            }
                        })
                    } else p(i) && i()
                }, sdk.loadConfig = function(t, e) {
                    var i = Math.round((new Date).getTime() / 1e3).toString(),
                        a = {
                            appid: o.appId,
                            timestamp: i
                        },
                        n = _buildSign(a);
                    request("https://apkadmin.qwpo2018.com/api/list_config/index", Object.assign({}, a, {
                        sign: n
                    }), "POST", function(e) {
                        p(t) && t(e.data)
                    }, function(t) {
                        p(e) && e(t)
                    }, function(t) {
                        console.log("post loadConfig complete")
                    })
                }, sdk.getShareCard = function(t, e) {
                    var i = n + "app_card/item",
                        a = Math.round((new Date).getTime() / 1e3).toString(),
                        s = {
                            appid: o.appId,
                            timestamp: a
                        },
                        r = _buildSign(s);
                    request(i, Object.assign({}, s, {
                        sign: r
                    }), "POST", function(i) {
                        p(t) && i && i.data ? t(i.data.card) : p(e) && e(i)
                    }, function(t) {
                        p(e) && e(t)
                    }, function(t) {
                        console.log("post GetShareCard complete!")
                    })
                }, sdk.collectShareCardClick = function(t, e, i, a) {
                    var s = n + "app_card/collect",
                        r = Math.round((new Date).getTime() / 1e3).toString(),
                        l = {
                            appid: o.appId,
                            card_id: t,
                            user_id: e,
                            timestamp: r
                        },
                        d = _buildSign(l);
                    request(s, Object.assign({}, l, {
                        sign: d
                    }), "POST", function(t) {
                        p(i) && i(t)
                    }, function(t) {
                        p(a) && a(t)
                    }, function(t) {
                        console.log("post CollectShareCardClick complete!")
                    })
                };
                var M = sdk;
                void 0 !== e && "object" == typeof i ? e.exports = M : "function" == typeof define && (define.amd || define.cmd) ? define(function() {
                    return M
                }) : this.moduleName = M, window.OpenAdSdk = sdk
            }).call(function() {
                return this || ("undefined" != typeof window ? window : a)
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./zs.sdk.conf": 20
    }],
    22: [function(t, e, i) {
        (function(t) {
            var a = "1110095672",
                o = "7CaD3L23LlGnENd1",
                n = !0,
                s = function() {
                    var t = {},
                        e = function(t, e) {
                            return t << e | t >>> 32 - e
                        },
                        i = function(t, e) {
                            var i, a, o, n, s;
                            return o = 2147483648 & t, n = 2147483648 & e, s = (1073741823 & t) + (1073741823 & e), (i = 1073741824 & t) & (a = 1073741824 & e) ? 2147483648 ^ s ^ o ^ n : i | a ? 1073741824 & s ? 3221225472 ^ s ^ o ^ n : 1073741824 ^ s ^ o ^ n : s ^ o ^ n
                        },
                        s = function(t, a, o, n, s, r, l) {
                            return t = i(t, i(i(function(t, e, i) {
                                return t & e | ~t & i
                            }(a, o, n), s), l)), i(e(t, r), a)
                        },
                        r = function(t, a, o, n, s, r, l) {
                            return t = i(t, i(i(function(t, e, i) {
                                return t & i | e & ~i
                            }(a, o, n), s), l)), i(e(t, r), a)
                        },
                        l = function(t, a, o, n, s, r, l) {
                            return t = i(t, i(i(function(t, e, i) {
                                return t ^ e ^ i
                            }(a, o, n), s), l)), i(e(t, r), a)
                        },
                        d = function(t, a, o, n, s, r, l) {
                            return t = i(t, i(i(function(t, e, i) {
                                return e ^ (t | ~i)
                            }(a, o, n), s), l)), i(e(t, r), a)
                        },
                        c = function(t) {
                            var e, i = "",
                                a = "";
                            for (e = 0; e <= 3; e++) i += (a = "0" + (t >>> 8 * e & 255).toString(16)).substr(a.length - 2, 2);
                            return i
                        },
                        u = function(t) {
                            var e, a, o, n, u, h, f, p, m, y = Array();
                            for (y = function(t) {
                                    for (var e, i = t.length, a = i + 8, o = 16 * ((a - a % 64) / 64 + 1), n = Array(o - 1), s = 0, r = 0; r < i;) s = r % 4 * 8, n[e = (r - r % 4) / 4] = n[e] | t.charCodeAt(r) << s, r++;
                                    return s = r % 4 * 8, n[e = (r - r % 4) / 4] = n[e] | 128 << s, n[o - 2] = i << 3, n[o - 1] = i >>> 29, n
                                }(t = function(t) {
                                    t = t.replace(/\x0d\x0a/g, "\n");
                                    for (var e = "", i = 0; i < t.length; i++) {
                                        var a = t.charCodeAt(i);
                                        a < 128 ? e += String.fromCharCode(a) : a > 127 && a < 2048 ? (e += String.fromCharCode(a >> 6 | 192), e += String.fromCharCode(63 & a | 128)) : (e += String.fromCharCode(a >> 12 | 224), e += String.fromCharCode(a >> 6 & 63 | 128), e += String.fromCharCode(63 & a | 128))
                                    }
                                    return e
                                }(t)), h = 1732584193, f = 4023233417, p = 2562383102, m = 271733878, e = 0; e < y.length; e += 16) a = h, o = f, n = p, u = m, h = s(h, f, p, m, y[e + 0], 7, 3614090360), m = s(m, h, f, p, y[e + 1], 12, 3905402710), p = s(p, m, h, f, y[e + 2], 17, 606105819), f = s(f, p, m, h, y[e + 3], 22, 3250441966), h = s(h, f, p, m, y[e + 4], 7, 4118548399), m = s(m, h, f, p, y[e + 5], 12, 1200080426), p = s(p, m, h, f, y[e + 6], 17, 2821735955), f = s(f, p, m, h, y[e + 7], 22, 4249261313), h = s(h, f, p, m, y[e + 8], 7, 1770035416), m = s(m, h, f, p, y[e + 9], 12, 2336552879), p = s(p, m, h, f, y[e + 10], 17, 4294925233), f = s(f, p, m, h, y[e + 11], 22, 2304563134), h = s(h, f, p, m, y[e + 12], 7, 1804603682), m = s(m, h, f, p, y[e + 13], 12, 4254626195), p = s(p, m, h, f, y[e + 14], 17, 2792965006), f = s(f, p, m, h, y[e + 15], 22, 1236535329), h = r(h, f, p, m, y[e + 1], 5, 4129170786), m = r(m, h, f, p, y[e + 6], 9, 3225465664), p = r(p, m, h, f, y[e + 11], 14, 643717713), f = r(f, p, m, h, y[e + 0], 20, 3921069994), h = r(h, f, p, m, y[e + 5], 5, 3593408605), m = r(m, h, f, p, y[e + 10], 9, 38016083), p = r(p, m, h, f, y[e + 15], 14, 3634488961), f = r(f, p, m, h, y[e + 4], 20, 3889429448), h = r(h, f, p, m, y[e + 9], 5, 568446438), m = r(m, h, f, p, y[e + 14], 9, 3275163606), p = r(p, m, h, f, y[e + 3], 14, 4107603335), f = r(f, p, m, h, y[e + 8], 20, 1163531501), h = r(h, f, p, m, y[e + 13], 5, 2850285829), m = r(m, h, f, p, y[e + 2], 9, 4243563512), p = r(p, m, h, f, y[e + 7], 14, 1735328473), f = r(f, p, m, h, y[e + 12], 20, 2368359562), h = l(h, f, p, m, y[e + 5], 4, 4294588738), m = l(m, h, f, p, y[e + 8], 11, 2272392833), p = l(p, m, h, f, y[e + 11], 16, 1839030562), f = l(f, p, m, h, y[e + 14], 23, 4259657740), h = l(h, f, p, m, y[e + 1], 4, 2763975236), m = l(m, h, f, p, y[e + 4], 11, 1272893353), p = l(p, m, h, f, y[e + 7], 16, 4139469664), f = l(f, p, m, h, y[e + 10], 23, 3200236656), h = l(h, f, p, m, y[e + 13], 4, 681279174), m = l(m, h, f, p, y[e + 0], 11, 3936430074), p = l(p, m, h, f, y[e + 3], 16, 3572445317), f = l(f, p, m, h, y[e + 6], 23, 76029189), h = l(h, f, p, m, y[e + 9], 4, 3654602809), m = l(m, h, f, p, y[e + 12], 11, 3873151461), p = l(p, m, h, f, y[e + 15], 16, 530742520), f = l(f, p, m, h, y[e + 2], 23, 3299628645), h = d(h, f, p, m, y[e + 0], 6, 4096336452), m = d(m, h, f, p, y[e + 7], 10, 1126891415), p = d(p, m, h, f, y[e + 14], 15, 2878612391), f = d(f, p, m, h, y[e + 5], 21, 4237533241), h = d(h, f, p, m, y[e + 12], 6, 1700485571), m = d(m, h, f, p, y[e + 3], 10, 2399980690), p = d(p, m, h, f, y[e + 10], 15, 4293915773), f = d(f, p, m, h, y[e + 1], 21, 2240044497), h = d(h, f, p, m, y[e + 8], 6, 1873313359), m = d(m, h, f, p, y[e + 15], 10, 4264355552), p = d(p, m, h, f, y[e + 6], 15, 2734768916), f = d(f, p, m, h, y[e + 13], 21, 1309151649), h = d(h, f, p, m, y[e + 4], 6, 4149444226), m = d(m, h, f, p, y[e + 11], 10, 3174756917), p = d(p, m, h, f, y[e + 2], 15, 718787259), f = d(f, p, m, h, y[e + 9], 21, 3951481745), h = i(h, a), f = i(f, o), p = i(p, n), m = i(m, u);
                            return (c(h) + c(f) + c(p) + c(m)).toLowerCase()
                        },
                        h = function(t, e) {
                            e = e || !0;
                            for (var i = Object.keys(t).sort(), a = "", n = 0; n < i.length; n++) a += i[n] + ":" + t[i[n]];
                            e && (a += o);
                            var s = u(a);
                            return s = s.toLowerCase()
                        },
                        f = function(t) {
                            var e = _("zsAd");
                            switch (t) {
                                case "1":
                                    return e.more;
                                case "2":
                                    return e.promotion;
                                case "3":
                                    return e.indexFloat;
                                case "7":
                                    return e.indexLeft;
                                case "8":
                                    return e.gameFloat;
                                case "9":
                                    return e.endPage;
                                case "11":
                                    return e.indexLeftFloat;
                                case "12":
                                    return e.backAd;
                                case "13":
                                    return e.iosLinkAd
                            }
                            return null
                        },
                        p = function(t, e) {
                            var i = f(t);
                            if (null == i) return console.error("custom link is null"), null;
                            for (var a = 0; a < i.length; a++)
                                if (i[a].appid == e) return i[a]
                        },
                        m = function(t, e, i, a, o, n) {
                            if ("undefined" == typeof qq) {
                                var s = new XMLHttpRequest;
                                s.onreadystatechange = function() {
                                    if (4 == s.readyState) {
                                        var t = s.responseText;
                                        if (s.status >= 200 && s.status < 400) {
                                            var e = {};
                                            try {
                                                e = JSON.parse(t)
                                            } catch (e) {
                                                console.error("json parse error ", t), o && o(e)
                                            }
                                            a && a(e)
                                        } else console.error("error ", t), o && o(t)
                                    }
                                }, s.timeout = 3e3, s.ontimeout = function(t) {
                                    console.error("error ", t), o && o(t)
                                }, s.open(i, t, !0), "POST" == i ? (s.open("POST", t), s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.send(function(t) {
                                    var e = [];
                                    for (var i in t) e.push(i + "=" + t[i]);
                                    return e.join("&")
                                }(e))) : s.send()
                            } else qq.request({
                                url: t,
                                data: e,
                                header: {
                                    "content-type": "application/json"
                                },
                                method: i,
                                success: function(t) {
                                    a && a(t.data)
                                },
                                fail: function(t) {
                                    o && o(t)
                                },
                                complete: function(t) {
                                    n && n(t)
                                }
                            })
                        },
                        y = function(e, i) {
                            t.zsStorage = t.zsStorage || {}, t.zsStorage[e] = i
                        },
                        g = function(e) {
                            return t.zsStorage = t.zsStorage || {}, t.zsStorage[e]
                        },
                        _ = function(t, e) {
                            if (e) {
                                var i = g(t + "_time");
                                return null == i || Date.now() - Number(i) < e ? g(t) : null
                            }
                            return g(t)
                        },
                        w = function(t, e) {
                            y(t, e), y(t + "_time", Date.now())
                        },
                        v = function(t) {
                            return "function" == typeof t
                        },
                        C = function(e, i) {
                            if ("3" == e.app_type) {
                                var o = g(e.appid);
                                y(e.appid, null == o ? 1 : Number(o) + 1)
                            }
                            var s, r, l, d, c, u;
                            "undefined" != typeof qq && (s = e.app_id, r = i, l = Math.round((new Date).getTime() / 1e3).toString(), c = h(d = {
                                user_id: r,
                                from_id: a,
                                to_id: s,
                                timestamp: l
                            }), u = Object.assign({}, d, {
                                sign: c
                            }), m("https://ad.ali-yun.wang/api/appad_new/collect", u, "POST", function() {}, function() {
                                console.log("appad_new/collect fail")
                            }, function() {
                                console.log("appad_new/collect complete")
                            }), function(e) {
                                if (n)
                                    if (null != t.userId) {
                                        var i = {
                                            appid: a,
                                            from_appid: t.srcAppId,
                                            to_appid: e,
                                            user_id: t.userId
                                        };
                                        m("https://ad.ali-yun.wang/api/jump_log/app_to", i, "POST", function() {}, function() {
                                            console.log('jump_log/app_to" fail')
                                        }, function() {
                                            console.log('jump_log/app_to" complete')
                                        })
                                    } else console.error("userId is null")
                            }(e.appid))
                        };
                    t.userId = null, t.platformId = null, t.srcAppId = "", t.launchScene = "", t.adJumpNum = null, t.adJumpAppId = null, t.isEnableExportAdLinkId = "0", t.init = function(e, i) {
                        if (console.log("zsAdSdk.init"), this.userId = e, this.platformId = i, "undefined" == typeof qq) this.launchScene = 1038, this.srcAppId = "";
                        else {
                            var o = qq.getLaunchOptionsSync();
                            this.launchScene = o.scene ? o.scene : "", this.srcAppId = o.referrerInfo && o.referrerInfo.appId ? o.referrerInfo.appId : ""
                        }! function() {
                            if (null != t.userId) {
                                var e = {
                                    appid: a,
                                    from_id: t.srcAppId ? t.srcAppId : t.launchScene,
                                    user_id: t.userId
                                };
                                m("https://platform.qwpo2018.com/api/qq_jump/index", e, "POST", function() {
                                    console.log("qq_jump/index  --\x3e success")
                                }, function() {
                                    console.log("qq_jump/index  --\x3e fail")
                                }, function(t) {
                                    console.log("qq_jump/index  --\x3e complete", t)
                                })
                            } else console.error("userId is null")
                        }()
                    }, t.sendVideoLog = function() {
                        if (n)
                            if (null != this.userId) {
                                var t = {
                                    appid: a,
                                    from_appid: this.srcAppId,
                                    user_id: this.userId
                                };
                                m("https://ad.ali-yun.wang/api/jump_log/app_video", t, "POST", function() {}, function() {
                                    console.log('jump_log/app_to" fail')
                                }, function() {
                                    console.log('jump_log/app_to" complete')
                                })
                            } else console.error("userId is null")
                    }, t.cfgCbList = [], t.inCfgRequest = !1, t.loadConfig = function(e, i) {
                        var o = Math.round((new Date).getTime() / 1e3).toString(),
                            n = {
                                apk_id: a,
                                timestamp: o
                            },
                            s = h(n),
                            r = Object.assign({}, n, {
                                sign: s
                            }),
                            l = _("zsCfg", 1e3);
                        l ? v(e) && e(l) : this.inCfgRequest ? this.cfgCbList.push({
                            success: e,
                            fail: i
                        }) : (this.inCfgRequest = !0, this.cfgCbList.push({
                            success: e,
                            fail: i
                        }), m("https://platform.qwpo2018.com/api/list_config/index", r, "POST", function(e) {
                            var i = e.data;
                            w("zsCfg", i), t.adJumpNum = i.zs_ad_jump_num, t.adJumpAppId = i.zs_jump_appid, t.isEnableExportAdLinkId = i.zs_export_ad_switch;
                            for (var a = 0; a < t.cfgCbList.length; a++) v(t.cfgCbList[a].success) && t.cfgCbList[a].success(i);
                            t.cfgCbList = [], t.inCfgRequest = !1
                        }, function(e) {
                            for (var i = 0; i < t.cfgCbList.length; i++) v(t.cfgCbList[i].fail) && t.cfgCbList[i].fail(e);
                            t.cfgCbList = [], t.inCfgRequest = !1
                        }, function(e) {
                            t.cfgCbList = [], t.inCfgRequest = !1, console.log("post loadConfig complete")
                        }))
                    }, t.adCbList = [], t.inAdRequest = !1, t.loadAd = function(e) {
                        var i = _("zsAd", 1e3);
                        if (i) e(i);
                        else if (this.inAdRequest) this.adCbList.push(e);
                        else {
                            this.loadConfig(null), this.inAdRequest = !0, this.adCbList.push(e);
                            var o = Math.round((new Date).getTime() / 1e3).toString(),
                                n = {
                                    appid: a,
                                    timestamp: o
                                },
                                s = h(n),
                                r = Object.assign({}, n, {
                                    sign: s
                                });
                            m("https://ad.ali-yun.wang/api/appad_new/index", r, "POST", function(e) {
                                for (var i in t.inAdRequest = !1, e.data) {
                                    e.data[i].sort(function() {
                                        return Math.random() > .5 ? 1 : -1
                                    })
                                }
                                var a = {
                                    more: e.data["position-1"] || [],
                                    promotion: e.data["position-2"] || [],
                                    indexFloat: e.data["position-3"] || [],
                                    banner: e.data["position-4"] || [],
                                    indexLeft: e.data["position-7"] || [],
                                    gameFloat: e.data["position-8"] || [],
                                    endPage: e.data["position-9"] || [],
                                    indexLeftFloat: e.data["position-11"] || [],
                                    backAd: e.data["position-12"] || [],
                                    iosLinkAd: e.data["position-13"] || []
                                };
                                w("zsAd", a);
                                for (var o = 0; o < t.adCbList.length; o++) v(t.adCbList[o]) && t.adCbList[o](a);
                                t.adCbList = []
                            }, function(e) {
                                t.inAdRequest = !1, console.log("requestAdData fail");
                                for (var i = {
                                        more: [],
                                        promotion: [],
                                        indexFloat: [],
                                        banner: [],
                                        indexLeft: [],
                                        gameFloat: [],
                                        endPage: [],
                                        indexLeftFloat: [],
                                        backAd: [],
                                        iosLinkAd: []
                                    }, a = 0; a < t.adCbList.length; a++) v(t.adCbList[a]) && t.adCbList[a](i);
                                t.adCbList = []
                            }, function(e) {
                                t.inAdRequest = !1, t.adCbList = [], console.log("requestAdData complete")
                            })
                        }
                    }, t.navigate2Mini = function(t, e, i, a, o) {
                        var n = t;
                        if (null != this.adJumpNum && "3" == n.app_type) try {
                            var s = g(n.appid);
                            if (s = null != s ? Number(s) : 0, console.log(n.appid + ":" + s + "," + this.adJumpNum), Number(s) + 1 >= this.adJumpNum) {
                                if (1 == this.platformId) {
                                    var r = _("zsAd");
                                    if (r.iosLinkAd.length > 0) {
                                        var l = r.iosLinkAd[Math.floor(r.iosLinkAd.length * Math.random())];
                                        console.log("jump:" + JSON.stringify(l)), n = p(n.position_type, l.appid)
                                    } else this.adJumpAppId ? (console.log("jump:" + this.adJumpAppId), n = p(n.position_type, this.adJumpAppId)) : console.log("jump self")
                                } else console.log("jump link in Android"), n = function(t) {
                                    var e = f(t);
                                    if (null == e) return console.error("box is null"), null;
                                    for (var i = 0; i < e.length; i++)
                                        if ("4" == e[i].app_type) return e[i];
                                    return console.error("box is null"), null
                                }(n.position_type);
                                null == n && (n = t)
                            }
                        } catch (t) {
                            console.error(t)
                        }
                        if ("undefined" == typeof qq) return v(a) && a(), void(v(o) && o());
                        n.extraData = n.extraData || {}, qq.navigateToMiniProgram({
                            appId: n.appid,
                            path: n.link_path,
                            extraData: n.extraData,
                            success: function(t) {
                                C(n, e), v(i) && i()
                            },
                            fail: function(t) {
                                v(a) && a()
                            },
                            complete: function(t) {
                                v(o) && o()
                            }
                        })
                    }, t.getShareCard = function(t, e) {
                        var i = Math.round((new Date).getTime() / 1e3).toString(),
                            o = {
                                appid: a,
                                timestamp: i
                            },
                            n = h(o),
                            s = Object.assign({}, o, {
                                sign: n
                            });
                        m("https://ad.ali-yun.wang/api/app_card/item", s, "POST", function(i) {
                            v(t) && i && i.data ? t(i.data.card) : v(e) && e(i)
                        }, function(t) {
                            v(e) && e(t)
                        }, function(t) {
                            console.log("post GetShareCard complete!")
                        })
                    }, t.collectShareCardClick = function(t, e, i, o) {
                        var n = Math.round((new Date).getTime() / 1e3).toString(),
                            s = {
                                appid: a,
                                card_id: t,
                                user_id: e,
                                timestamp: n
                            },
                            r = h(s),
                            l = Object.assign({}, s, {
                                sign: r
                            });
                        m("https://ad.ali-yun.wang/api/app_card/collect", l, "POST", function(t) {
                            v(i) && i(t)
                        }, function(t) {
                            v(o) && o(t)
                        }, function(t) {
                            console.log("post CollectShareCardClick complete!")
                        })
                    };
                    var I = [1011, 1012, 1013, 1025, 1031, 1032, 1047, 1048, 1049];
                    t.launchInfo = null, t.isExportValid = function() {
                        return !(this.launchInfo && I.indexOf(this.launchInfo.scene) >= 0) && (null == this.launchInfo || null == this.launchInfo.query || this.launchInfo.query.customLink != this.isEnableExportAdLinkId)
                    }, t.isFromLink = function() {
                        return this.launchInfo && I.indexOf(this.launchInfo.scene) >= 0 ? (console.log("open by code"), !0) : null != this.launchInfo && null != this.launchInfo.query && this.launchInfo.query.customLink
                    };
                    return "undefined" == typeof qq || (t.launchInfo = qq.getLaunchOptionsSync(), t.isFromLink() && console.log("open by link")), t
                }(),
                r = "undefined" != typeof window ? window : t;
            r.zs = r.zs || {}, r.zs.sdk = s,
                function() {
                    var t = s;
                    void 0 !== e && "object" == typeof i ? e.exports = t : "function" == typeof define && (define.amd || define.cmd) ? define(function() {
                        return t
                    }) : this.moduleName = t
                }.call(function() {
                    return this || ("undefined" != typeof window ? window : t)
                })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    23: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../models/ConfigData"),
            o = t("./MyLog"),
            n = function() {
                function HttpUtils() {}
                return HttpUtils.prototype.request = function(t) {
                    var e = t.meth || "post",
                        i = t.data || [],
                        n = "";
                    n = t.url.indexOf("https://") > -1 || t.url.indexOf("http://") > -1 ? t.url : a.default.serverUrl + t.url;
                    var s = new Laya.HttpRequest;
                    s.once(Laya.Event.COMPLETE, this, function(e) {
                        e && (e = JSON.parse(e)), o.default.log(e, "res"), t.callback && t.callback(e), t.callback = null, t = null
                    }), s.once(Laya.Event.ERROR, this, function(e) {
                        "android" == a.default.platformType ? (t.callback && t.callback(null), t.callback = null) : (t.fail && t.fail(e), t.fail = null), t = null
                    }), s.http.timeout = 1e4, s.send(n, i.join("&"), e, "text", ["Content-Type", "application/x-www-form-urlencoded"])
                }, HttpUtils
            }();
        i.default = n
    }, {
        "../models/ConfigData": 18,
        "./MyLog": 24
    }],
    24: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../models/ConfigData"),
            o = function() {
                function MyLog() {}
                return MyLog.log = function(t, e) {
                    a.default.isLog && console.log(t, e)
                }, MyLog
            }();
        i.default = o
    }, {
        "../models/ConfigData": 18
    }],
    25: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../models/ConfigData"),
            o = t("../mgr3d/GameMgr"),
            n = t("../models/UserData"),
            s = function() {
                function MyUtils() {}
                return MyUtils.isNull = function(t) {
                    return null == t || "" == t || null == t
                }, MyUtils.formatMoney = function(t) {
                    var e = "";
                    return isNaN(t) && (t = 0), t < 1e3 ? e = t.toString() : t < 1e6 ? e = Math.floor(t / 1e3) + "K" : t < 1e9 ? e = Math.floor(t / 1e6) + "M" : t < 1e12 ? e = Math.floor(t / 1e9) + "G" : t < 1e15 ? e = Math.floor(t / 1e12) + "T" : t < 1e18 ? e = Math.floor(t / 1e15) + "P" : t < 1e21 ? e = Math.floor(t / 1e18) + "E" : t < 1e24 ? e = Math.floor(t / 1e21) + "Z" : t < 1e27 ? e = Math.floor(t / 1e24) + "Y" : t < 1e30 && (e = Math.floor(t / 1e27) + "B"), e
                }, MyUtils.random = function(t, e) {
                    var i = e - t,
                        a = Math.random();
                    return t + Math.round(a * i)
                }, MyUtils.compareVersion = function(t, e) {
                    t = t.split("."), e = e.split(".");
                    for (var i = Math.max(t.length, e.length); t.length < i;) t.push("0");
                    for (; e.length < i;) e.push("0");
                    for (var a = 0; a < i; a++) {
                        var o = parseInt(t[a]),
                            n = parseInt(e[a]);
                        if (o > n) return 1;
                        if (o < n) return -1
                    }
                    return 0
                }, MyUtils.autoScreenSize = function(t) {
                    if (Laya.Browser.onQQMiniGame) {
                        var e = a.default.systemInfo,
                            i = 20;
                        20 == e.statusBarHeight || (44 == e.statusBarHeight ? i += 70 : 27 == e.statusBarHeight && (i += 70)), t.forEach(function(t) {
                            t.y = i + t.height / 2
                        })
                    }
                }, MyUtils.mapMeshSizeJudge = function(t, e, i) {
                    if (t == a.MAPTYPE.map01) {
                        for (var o = 1.5, s = !1, r = 0; r < n.default.gameData.mapComList.length; r++) {
                            13 == (l = n.default.gameData.mapComList[r]) ? 13 * o - Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) >= 0 && (s = !0) : e > MyUtils.map01PointList[l].x * o - (MyUtils.map01UnitSize[l].x * o / 2 + .6) && e < MyUtils.map01PointList[l].x * o + (MyUtils.map01UnitSize[l].x * o / 2 + .6) && i > MyUtils.map01PointList[l].z * o - (MyUtils.map01UnitSize[l].z * o / 2 + .6) && i < MyUtils.map01PointList[l].z * o + (MyUtils.map01UnitSize[l].z * o / 2 + .6) && (s = !0)
                        }
                        return s
                    }
                    if (t == a.MAPTYPE.map02) {
                        for (s = !1, r = 0; r < n.default.gameData.mapComList.length; r++) {
                            var l = n.default.gameData.mapComList[r];
                            e > MyUtils.map02PointList[l].x - (MyUtils.map02UnitSize.x / 2 + .6) && e < MyUtils.map02PointList[l].x + (MyUtils.map02UnitSize.x / 2 + .6) && i > MyUtils.map02PointList[l].z - (MyUtils.map02UnitSize.z / 2 + .6) && i < MyUtils.map02PointList[l].z + (MyUtils.map02UnitSize.z / 2 + .6) && (6 == l && (e > -11.4 && e <= 11.6 && i > -4.76 && i <= 4.24 || e > -4.4 && e <= 4.6 && i > -11.76 && i <= 11.24) || (s = !0))
                        }
                        return s
                    }
                    if (t == a.MAPTYPE.map03) {
                        var d = 0,
                            c = Math.abs(i) / Math.abs(e),
                            u = 180 * Math.atan(c) / Math.PI;
                        e < 0 && i > 0 ? d = 360 - u : 0 == e && i > 0 ? d = 270 : e > 0 && i > 0 ? d = 180 + u : e > 0 && 0 == i ? d = 180 : e > 0 && i < 0 ? d = 180 - u : 0 == e && i < 0 ? d = 90 : e < 0 && i < 0 ? d = u : e < 0 && 0 == i && (d = 0);
                        s = !1;
                        if (45.8 - Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) > 0)
                            for (r = 0; r < n.default.gameData.mapComList.length; r++) {
                                var h = 337.5 + 45 * ((l = n.default.gameData.mapComList[r]) - 1);
                                h >= 360 && (h -= 360);
                                var f = 22.5 + 45 * (l - 1);
                                1 == l ? (d >= h && d <= 360 || d >= 0 && d <= f) && (s = !0) : d >= h && d <= f && (s = !0)
                            }
                        return s
                    }
                    if (t == a.MAPTYPE.map04) {
                        for (o = .8, s = !1, r = 0; r < n.default.gameData.mapComList.length; r++) {
                            l = n.default.gameData.mapComList[r];
                            e > MyUtils.map08PointList[l].x * o - (MyUtils.map08UnitSize.x * o / 2 + .6) && e < MyUtils.map08PointList[l].x * o + (MyUtils.map08UnitSize.x * o / 2 + .6) && i > MyUtils.map08PointList[l].z * o - (MyUtils.map08UnitSize.z * o / 2 + .6) && i < MyUtils.map08PointList[l].z * o + (MyUtils.map08UnitSize.z * o / 2 + .6) && (1 == l ? e <= 5.9 - 22.42 && e >= -28.32 && i <= -16.54 && i >= -26.54 || (s = !0) : 3 == l ? e <= 26.55 && e >= 16.55 && i <= -16.54 && i >= -26.54 || (s = !0) : 7 == l ? e <= 26.58 && e >= 16.58 && i <= 28.33 && i >= 16.53 || (s = !0) : 9 == l && e <= 5.9 - 22.42 && e >= -28.32 && i <= 28.42 && i >= 22.52 - 5.9 || (s = !0))
                        }
                        return s
                    }
                    return !0
                }, MyUtils.indicateAIDirection = function(t, e) {
                    var i = e.x > -15 + t.x && e.x < 15 + t.x && e.z > -28 + t.z && e.z < 54 + t.z;
                    if (!i && e.x > -28 + t.x && e.x < 28 + t.x && e.z > -28 + t.z && e.z < 54 + t.z) {
                        var a = {
                                x: 28 + t.x,
                                y: 54 + t.z
                            },
                            o = {
                                x: 15 + t.x,
                                y: -28 + t.z
                            },
                            n = {
                                x: -28 + t.x,
                                y: 54 + t.z
                            },
                            s = {
                                x: -15 + t.x,
                                y: -28 + t.z
                            },
                            r = {
                                x: e.x,
                                y: e.z
                            },
                            l = {
                                x: e.x,
                                y: -28 + t.z
                            };
                        (!MyUtils.parallel(a, o, r, l) && MyUtils.intersect_in(a, o, r, l) || !MyUtils.parallel(n, s, r, l) && MyUtils.intersect_in(n, s, r, l)) && (i = !0)
                    }
                    if (!i) {
                        var d = new Laya.Vector3;
                        Laya.Vector3.subtract(e, t, d);
                        var c = Math.abs(d.z) / Math.abs(d.x),
                            u = 180 * Math.atan(c) / Math.PI;
                        return d.x < 0 && d.z > 0 ? u = 180 - u : 0 == d.x && d.z > 0 ? u = 90 : d.x > 0 && d.z > 0 ? u = u : d.x > 0 && 0 == d.z ? u = 0 : d.x > 0 && d.z < 0 ? u = 360 - u : 0 == d.x && d.z < 0 ? u = 270 : d.x < 0 && d.z < 0 ? u = 180 + u : d.x < 0 && 0 == d.z && (u = 180), u
                    }
                    return Number.NaN
                }, MyUtils.carBoxPointCompute = function(t, e, i, a) {
                    var n = o.default.carCSSize[t],
                        s = n.sX * i,
                        r = n.sZ * i,
                        l = [{
                            x: s / 2,
                            y: r / 2
                        }, {
                            x: s / 2,
                            y: -r / 2
                        }, {
                            x: -s / 2,
                            y: -r / 2
                        }, {
                            x: -s / 2,
                            y: r / 2
                        }],
                        d = r / 2 / (s / 2),
                        c = 180 * Math.atan(d) / Math.PI;
                    if (e < 0)
                        for (;;) {
                            if (!(e <= -360)) {
                                e = 360 + e;
                                break
                            }
                            e += 360
                        } else if (e > 0)
                            for (; e >= 360;) e -= 360;
                    var u = Math.sqrt(Math.pow(r / 2, 2) + Math.pow(s / 2, 2)),
                        h = function(t, e) {
                            for (; t >= 360;) t -= 360;
                            var i = u * Math.cos(t * Math.PI / 180),
                                o = -u * Math.sin(t * Math.PI / 180);
                            l[e].x = i + a.x, l[e].y = o + a.z
                        };
                    return h(360 - c + e, 0), h(c + e, 1), h(180 - c + e, 2), h(180 + c + e, 3), l
                }, MyUtils.boxCollisionExecute = function(t, e) {
                    var i = MyUtils.carBoxPointCompute(t.id, t.rot, t.scale, t.offset),
                        a = MyUtils.carBoxPointCompute(e.id, e.rot, e.scale, e.offset);
                    return !MyUtils.parallel(i[0], i[1], a[0], a[1]) && MyUtils.intersect_in(i[0], i[1], a[0], a[1]) ? MyUtils.intersection(i[0], i[1], a[0], a[1]) : !MyUtils.parallel(i[0], i[1], a[1], a[2]) && MyUtils.intersect_in(i[0], i[1], a[1], a[2]) ? MyUtils.intersection(i[0], i[1], a[1], a[2]) : !MyUtils.parallel(i[0], i[1], a[2], a[3]) && MyUtils.intersect_in(i[0], i[1], a[2], a[3]) ? MyUtils.intersection(i[0], i[1], a[2], a[3]) : !MyUtils.parallel(i[0], i[1], a[3], a[0]) && MyUtils.intersect_in(i[0], i[1], a[3], a[0]) ? MyUtils.intersection(i[0], i[1], a[3], a[0]) : !MyUtils.parallel(i[1], i[2], a[0], a[1]) && MyUtils.intersect_in(i[1], i[2], a[0], a[1]) ? MyUtils.intersection(i[1], i[2], a[0], a[1]) : !MyUtils.parallel(i[1], i[2], a[1], a[2]) && MyUtils.intersect_in(i[1], i[2], a[1], a[2]) ? MyUtils.intersection(i[1], i[2], a[1], a[2]) : !MyUtils.parallel(i[1], i[2], a[2], a[3]) && MyUtils.intersect_in(i[1], i[2], a[2], a[3]) ? MyUtils.intersection(i[1], i[2], a[2], a[3]) : !MyUtils.parallel(i[1], i[2], a[3], a[0]) && MyUtils.intersect_in(i[1], i[2], a[3], a[0]) ? MyUtils.intersection(i[1], i[2], a[3], a[0]) : !MyUtils.parallel(i[2], i[3], a[0], a[1]) && MyUtils.intersect_in(i[2], i[3], a[0], a[1]) ? MyUtils.intersection(i[2], i[3], a[0], a[1]) : !MyUtils.parallel(i[2], i[3], a[1], a[2]) && MyUtils.intersect_in(i[2], i[3], a[1], a[2]) ? MyUtils.intersection(i[2], i[3], a[1], a[2]) : !MyUtils.parallel(i[2], i[3], a[2], a[3]) && MyUtils.intersect_in(i[2], i[3], a[2], a[3]) ? MyUtils.intersection(i[2], i[3], a[2], a[3]) : !MyUtils.parallel(i[2], i[3], a[3], a[0]) && MyUtils.intersect_in(i[2], i[3], a[3], a[0]) ? MyUtils.intersection(i[2], i[3], a[3], a[0]) : !MyUtils.parallel(i[3], i[0], a[0], a[1]) && MyUtils.intersect_in(i[3], i[0], a[0], a[1]) ? MyUtils.intersection(i[3], i[0], a[0], a[1]) : !MyUtils.parallel(i[3], i[0], a[1], a[2]) && MyUtils.intersect_in(i[3], i[0], a[1], a[2]) ? MyUtils.intersection(i[3], i[0], a[1], a[2]) : !MyUtils.parallel(i[3], i[0], a[2], a[3]) && MyUtils.intersect_in(i[3], i[0], a[2], a[3]) ? MyUtils.intersection(i[3], i[0], a[2], a[3]) : !MyUtils.parallel(i[3], i[0], a[3], a[0]) && MyUtils.intersect_in(i[3], i[0], a[3], a[0]) ? MyUtils.intersection(i[3], i[0], a[3], a[0]) : null
                }, MyUtils.zero = function(t) {
                    return (t > 0 ? t : -t) < 1e-8
                }, MyUtils.xmult = function(t, e, i) {
                    return (t.x - i.x) * (e.y - i.y) - (e.x - i.x) * (t.y - i.y)
                }, MyUtils.dot_online_in = function(t, e, i) {
                    return MyUtils.zero(MyUtils.xmult(t, e, i)) && (e.x - t.x) * (i.x - t.x) < 1e-8 && (e.y - t.y) * (i.y - t.y) < 1e-8
                }, MyUtils.same_side = function(t, e, i, a) {
                    return MyUtils.xmult(i, t, a) * MyUtils.xmult(i, e, a) > 1e-8
                }, MyUtils.parallel = function(t, e, i, a) {
                    return MyUtils.zero((t.x - e.x) * (i.y - a.y) - (i.x - a.x) * (t.y - e.y))
                }, MyUtils.dots_inline = function(t, e, i) {
                    return MyUtils.zero(MyUtils.xmult(t, e, i))
                }, MyUtils.intersect_in = function(t, e, i, a) {
                    return MyUtils.dots_inline(t, e, i) && MyUtils.dots_inline(t, e, a) ? MyUtils.dot_online_in(t, i, a) || MyUtils.dot_online_in(e, i, a) || MyUtils.dot_online_in(i, t, e) || MyUtils.dot_online_in(a, t, e) : !MyUtils.same_side(t, e, i, a) && !MyUtils.same_side(i, a, t, e)
                }, MyUtils.intersection = function(t, e, i, a) {
                    var o = t,
                        n = ((t.x - i.x) * (i.y - a.y) - (t.y - i.y) * (i.x - a.x)) / ((t.x - e.x) * (i.y - a.y) - (t.y - e.y) * (i.x - a.x));
                    return o.x += (e.x - t.x) * n, o.y += (e.y - t.y) * n, o
                }, MyUtils.circleCollisionExecute = function(t, e) {
                    return Laya.Vector3.distance(t.offset, e.offset) <= 2.6 * t.scale + 2.6 * e.scale ? {
                        x: (t.offset.x + e.offset.x) / 2,
                        y: (t.offset.z + e.offset.z) / 2
                    } : null
                }, MyUtils.point1 = new Laya.Vector3(-41.65, 0, 0), MyUtils.point2 = new Laya.Vector3(41.65, 0, 0), MyUtils.point3 = new Laya.Vector3(-27.3, 0, 0), MyUtils.point4 = new Laya.Vector3(27.3, 0, 0), MyUtils.point5 = new Laya.Vector3(-.57, 0, 1.4), MyUtils.point6 = new Laya.Vector3(-56.1, 0, 24.1), MyUtils.outScaleVector3 = new Laya.Vector3, MyUtils.map01UnitSize = [{}, {
                    x: 18.69352,
                    z: 18.69127
                }, {
                    x: 18.69127,
                    z: 18.69352
                }, {
                    x: 18.69352,
                    z: 18.69127
                }, {
                    x: 18.69128,
                    z: 18.69352
                }, {
                    x: 18.6935,
                    z: 18.69145
                }, {
                    x: 18.69145,
                    z: 18.69351
                }, {
                    x: 18.6935,
                    z: 18.69145
                }, {
                    x: 18.69146,
                    z: 18.69351
                }, {
                    x: 18.69191,
                    z: 18.69131
                }, {
                    x: 18.69131,
                    z: 18.69191
                }, {
                    x: 18.69191,
                    z: 18.69131
                }, {
                    x: 18.69132,
                    z: 18.69191
                }], MyUtils.map01PointList = [{}, {
                    x: 55.1032,
                    z: -.05719513
                }, {
                    x: -.05718517,
                    z: -55.10321
                }, {
                    x: -55.1032,
                    z: .05718803
                }, {
                    x: .05720285,
                    z: 55.10321
                }, {
                    x: 36.40969,
                    z: -.05742147
                }, {
                    x: -.05741215,
                    z: -36.4097
                }, {
                    x: -36.40969,
                    z: .05741549
                }, {
                    x: .0574303,
                    z: 36.4097
                }, {
                    x: 17.71699,
                    z: -.05748997
                }, {
                    x: -.05748224,
                    z: -17.71699
                }, {
                    x: -17.71699,
                    z: .0574851
                }, {
                    x: .0575004,
                    z: 17.71699
                }], MyUtils.map02UnitSize = {
                    x: 28.66667,
                    z: 28.66668
                }, MyUtils.map02PointList = [{}, {
                    x: -28.70377,
                    z: -28.82636
                }, {
                    x: -.03710461,
                    z: -28.82636
                }, {
                    x: 28.62956,
                    z: -28.82636
                }, {
                    x: 28.62956,
                    z: -.1596818
                }, {
                    x: -28.70377,
                    z: -.1596818
                }, {
                    x: -.03710461,
                    z: -.1596818
                }, {
                    x: 28.62956,
                    z: 28.50699
                }, {
                    x: -.03710461,
                    z: 28.50699
                }, {
                    x: -28.70377,
                    z: 28.50699
                }], MyUtils.map08UnitSize = {
                    x: 35.91283,
                    z: 36.00674
                }, MyUtils.map08PointList = [{}, {
                    x: -35.99645,
                    z: -35.94684
                }, {
                    x: -.03406143,
                    z: -35.95359
                }, {
                    x: 35.96239,
                    z: -35.94687
                }, {
                    x: 35.9678,
                    z: .06429578
                }, {
                    x: -36.00186,
                    z: .06429578
                }, {
                    x: -.03405857,
                    z: .06429864
                }, {
                    x: 35.96236,
                    z: 36.01116
                }, {
                    x: -.03406143,
                    z: 36.01789
                }, {
                    x: -35.99642,
                    z: 36.01114
                }], MyUtils
            }();
        i.default = s
    }, {
        "../mgr3d/GameMgr": 10,
        "../models/ConfigData": 18,
        "../models/UserData": 19
    }],
    26: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../mgrCommon/ViewMgr"),
            o = t("../mgrCommon/PlatformMgr"),
            n = function(t) {
                function BaseView() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.isMyBaseView = !0, e.offset = {
                        y: 0
                    }, e
                }
                return __extends(BaseView, t), BaseView.prototype.onAwake = function() {
                    this.owner.autoDestroyAtClosed = !0, this.owner.height = Laya.stage.height, this.offset = o.default.callAPIMethodByProxy("getOffsetOpenDomain") || this.offset
                }, BaseView.prototype.onEnable = function() {
                    this.addEvent()
                }, BaseView.prototype.onDisable = function() {
                    this.removeEvent()
                }, BaseView.prototype.addEvent = function() {}, BaseView.prototype.openView = function(t) {
                    this.owner.visible = !0, this.owner.height = Laya.stage.height, this._data = t || {}
                }, BaseView.prototype.removeEvent = function() {
                    this._isClick = null, Laya.timer.clearAll(this)
                }, BaseView.prototype.closeView = function(t) {
                    if (console.log("进入关闭面板"), this.owner) {
                        var e = this.owner.url;
                        t && t.notDestroy ? a.default.instance.hideView(e) : (console.log("调用面板管理关闭" + e), a.default.instance.closeView(e)), this._data && this._data.callback && this._data.callback(t), this._data = null
                    }
                }, BaseView
            }(Laya.Script);
        i.default = n
    }, {
        "../mgrCommon/PlatformMgr": 14,
        "../mgrCommon/ViewMgr": 17
    }],
    27: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./BaseView"),
            o = t("../mgrCommon/PlatformMgr"),
            n = t("../mgrCommon/EventMgr"),
            s = t("../models/UserData"),
            r = t("../mgrCommon/HttpMgr"),
            l = t("../mgr3d/GameMgr"),
            d = t("../models/ConfigData"),
            c = t("../tools/MyLog"),
            u = t("../wx/BannerAd"),
            h = function(t) {
                function GameEnd() {
                    var e = t.call(this) || this;
                    return e.bannerid = [1, 2], e
                }
                return __extends(GameEnd, t), GameEnd.prototype.onAwake = function() {
                    t.prototype.onAwake.call(this), this.node = this.owner.getChildByName("middleUI"), this.cgImg = this.node.getChildByName("tipImg"), this.sbImg = this.node.getChildByName("tip1Img");
                    d.default.systemInfo.windowWidth, d.default.systemInfo.windowHeight;
                    o.default.callAPIMethodByProxy("initBannerAD")
                }, GameEnd.prototype.addEvent = function() {
                    this.jumpBtn.on(Laya.Event.CLICK, this, this.defalutBtnClick), this.againBtn.on(Laya.Event.CLICK, this, this.againBtnClick), this.homeBtn.on(Laya.Event.CLICK, this, this.againBtnClick)
                }, GameEnd.prototype.adJumpSuccess = function() {
                    c.default.log("  --------adJumpSuccess  "), o.default.callAPIMethodByProxy("navigateToMiniProgram", {
                        notShowAd: !0
                    })
                }, GameEnd.prototype.onViewClose = function(t) {
                    "fullScreenAd" == t && o.default.callAPIMethodByProxy("showBannerAdHome")
                }, GameEnd.prototype.adJumpCancel = function(t) {
                    void 0 === t && (t = 1), 1 == d.default.loadConfig.zs_jump_switch && d.default.loadConfig.zs_number != d.default.version && d.default.loadConfig.zs_full_screen_jump && (Laya.Scene.open("FullScreenAd.scene", !1), o.default.callAPIMethodByProxy("destroyBannerAdHome"))
                }, GameEnd.prototype.defalutBtnClick = function() {
                    console.log("点击跳过"), this.jsClick || (console.log("跳过了"), this.djsStop = !0, this.isClose = !0, this.postToServerResult("main"))
                }, GameEnd.prototype.rewardSuccess = function() {
                    this.postToServerResult("main", d.default.settle_config.reward)
                }, GameEnd.prototype.againBtnClick = function() {
                    var t = this;
                    this._isClick || (this._isClick = !0, Laya.timer.once(500, this, function() {
                        t._isClick = null
                    }), this.djsStop = !0, 0 == this.btnState ? (this.isClose = !0, this.rewardSuccess()) : 1 == this.btnState ? this.videoBtnClick() : o.default.callAPIMethodByProxy("isShowShare") ? this.shareBtnClick() : this.jumpTo())
                }, GameEnd.prototype.shareBtnClick = function() {
                    var t = this;
                    if (Laya.Browser.onQQMiniGame) {
                        var e = {
                            caller: this,
                            callback: function(e) {
                                e.success ? t.jumpTo() : n.default.instance.emit("openTip", "分享给不同的群可以提高成功率哦！")
                            },
                            type: 0
                        };
                        o.default.callAPIMethodByProxy("shareAppMessage", e)
                    } else this.jumpTo()
                }, GameEnd.prototype.videoBtnClick = function() {
                    var t = this;
                    Laya.Browser.onQQMiniGame || "android" == d.default.platformType || "ios" == d.default.platformType || "h5" == d.default.platformType ? o.default.callAPIMethodByProxy("showVideo", {
                        caller: this,
                        callBackSuc: function() {
                            console.log("播放成功的回调"), r.default.instance.videoPost(3), t.jumpTo()
                        },
                        callBackFail: function() {
                            t.djsStop = !1, n.default.instance.emit("openTip", "看完视频才能复活哦！")
                        },
                        callBackErro: function(t) {
                            n.default.instance.emit("openTip", t)
                        }
                    }) : this.jumpTo()
                }, GameEnd.prototype.jumpTo = function() {
                    this.isClose = !0, o.default.callAPIMethodByProxy("destoryAllBannerAd"), n.default.instance.emit("actorIsDeadToContinueGame"), this.close()
                }, GameEnd.prototype.close = function() {
                    t.prototype.closeView.call(this), o.default.callAPIMethodByProxy("initBannerAD")
                }, GameEnd.prototype.removeEvent = function() {
                    this.jumpBtn.off(Laya.Event.CLICK, this, this.defalutBtnClick), this.againBtn.off(Laya.Event.CLICK, this, this.againBtnClick), this.homeBtn.off(Laya.Event.CLICK, this, this.againBtnClick), Laya.stage.off(d.default.EventDefine.ZS_APP_JUMP_SUCCESS, this, this.adJumpSuccess), Laya.stage.off(d.default.EventDefine.ZS_APP_JUMP_CANCEL, this, this.adJumpCancel), t.prototype.removeEvent.call(this)
                }, GameEnd.prototype.openView = function(e) {
                    t.prototype.openView.call(this, e), this.cgImg.visible = e.result, this.sbImg.visible = !e.result;
                    this.curGold = 100 + 100 * s.default.gameData.killNum, e.result && (this.curGold += 500), this.moneyLab.text = "Thưởng: " + this.curGold.toString(), this.curTime = Laya.timer.currTimer, this.djsTime = 10, this.isWin = e.result ? 1 : 0, this.djsStop = !1, o.default.callAPIMethodByProxy("isShowVideo") ? (this.btnState = 1, this.againBtn.index = 0) : (this.btnState = 2, this.againBtn.index = 1), e.closeALL || window.zsSdk && !window.zsSdk.canShowVideo() ? (this.btnState = 0, this.homeBtn.visible = !0, this.jumpBtn.visible = !1, this.againBtn.visible = !1, this.moneyImg.visible = !0) : (this.homeBtn.visible = !1, this.jumpBtn.visible = !0, this.againBtn.visible = !0, this.moneyImg.visible = !1);
                    window.zsSdk && !window.zsSdk.canShowVideo() && (this.againBtn.visible = !1), this.tgImgTo(), this.isClose = !1, d.default.loadConfig.zs_finish_jump && d.default.loadConfig.zs_jump_switch && d.default.loadConfig.zs_number != d.default.version ? this.mainAdFrame.visible = !0 : this.mainAdFrame.visible = !1, d.default.loadConfig.zs_switch
                }, GameEnd.prototype.tgImgTo = function() {
                    this.jumpBtn.centerX = 0, this.jumpBtn.bottom = -120
                }, GameEnd.prototype.onUpdate = function() {}, GameEnd.prototype.postToServerResult = function(t, e) {
                    var i = this;
                    void 0 === e && (e = 1), this.jsClick = !0, console.log(this.curGold), r.default.instance.gameEndPost(this.curGold * e, this.isWin, function(a) {
                        o.default.callAPIMethodByProxy("destoryAllBannerAd"), l.default.Instance.resetGameType({
                            ui: t,
                            num: e
                        }), i.close(), d.default.openScreenAd = !1, i.jsClick = !1
                    }, function(t) {
                        i.jsClick = !1
                    })
                }, GameEnd.prototype.getIsWin = function() {
                    return this.isWin
                }, GameEnd.prototype.getCurGold = function() {
                    return this.curGold
                }, GameEnd.prototype.refreshBanner = function() {
                    var t = this;
                    t.initBanner(), !t.banner_show || s.default.gameNumber < 2 || s.default.gameNumber % 2 != 1 || (console.log("banner轮换", s.default.lastBannerType), t.banner_show.destroy(), t.banner_left && (t.banner_left.resizePoint(u.BannerStyle.DEFAULT), t.banner_show.bannerType = u.BannerStyle.TOP_LEFT, s.default.lastBannerType = u.BannerStyle.TOP_LEFT), t.banner_show.createBanner(), t.initBanner())
                }, GameEnd.prototype.initBanner = function() {
                    for (var t = this, e = 0; e < t.bannerid.length; e++) {
                        var i = o.default.callAPIMethodByProxy("getBannerById", t.bannerid[e]);
                        i && i.bannerType == u.BannerStyle.TOP_LEFT ? t.banner_left = i : i && i.bannerType == u.BannerStyle.DEFAULT && (t.banner_show = i)
                    }
                }, GameEnd
            }(a.default);
        i.default = h
    }, {
        "../mgr3d/GameMgr": 10,
        "../mgrCommon/EventMgr": 12,
        "../mgrCommon/HttpMgr": 13,
        "../mgrCommon/PlatformMgr": 14,
        "../models/ConfigData": 18,
        "../models/UserData": 19,
        "../tools/MyLog": 24,
        "../wx/BannerAd": 38,
        "./BaseView": 26
    }],
    28: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./BaseView"),
            o = t("../models/ConfigData"),
            n = t("../mgrCommon/PlatformMgr"),
            s = t("../models/UserData"),
            r = t("../mgrCommon/EventMgr"),
            l = t("../mgrCommon/HttpMgr"),
            d = function(t) {
                function GetBoxView() {
                    var e = t.call(this) || this;
                    return e.isCuting = !1, e.isShow = !1, e.isGet = !1, e
                }
                return __extends(GetBoxView, t), GetBoxView.prototype.onAwake = function() {
                    t.prototype.onAwake.call(this), this.btn_click = this.owner.getChildByName("btn_click"), this.middle_box = this.owner.getChildByName("middle_box"), this.proBg = this.middle_box.getChildByName("proBg"), this.proValue = this.middle_box.getChildByName("proValue"), this.bg_award = this.middle_box.getChildByName("bg_award"), this.lab_tip = this.middle_box.getChildByName("lab_tip"), this.lab_desc = this.middle_box.getChildByName("lab_desc"), this.unknown = this.bg_award.getChildByName("unknown"), this.car_Icon = this.bg_award.getChildByName("car_Icon"), this.car_Icon.visible = !1, this.lab_desc.visible = !1, this.cutValue = this.proBg.width * Number(o.default.loadConfig.zs_click_award_back), this.addValue = this.proBg.width * Number(o.default.loadConfig.zs_click_award_add);
                    var e = o.default.loadConfig.zs_click_award_percent.split(","),
                        i = Number(e[0]),
                        a = Number(e[1]);
                    this.awardNum = Math.random() * (a - i) + i, this.carInfo = this.getUnlockCarInfo(), console.log("领取值", this.awardNum, "车信息", this.carInfo), o.default.setBoxAwardNum(o.default.getBoxAwardNum() + 1)
                }, GetBoxView.prototype.addEvent = function() {
                    t.prototype.addEvent.call(this), this.btn_click.on(Laya.Event.CLICK, this, this.onBtnClick)
                }, GetBoxView.prototype.openView = function(e) {
                    t.prototype.openView.call(this, e);
                    e && (this.isWin = e._isWin, this.gold = e.gold)
                }, GetBoxView.prototype.removeEvent = function() {
                    t.prototype.removeEvent.call(this), this.btn_click.off(Laya.Event.CLICK, this, this.onBtnClick), this.owner.off(Laya.Event.CLICK, this, this.close)
                }, GetBoxView.prototype.close = function() {
                    t.prototype.closeView.call(this), r.default.instance.emit("openGameEnd", s.default.reusltData), Laya.timer.clearAll(this)
                }, GetBoxView.prototype.onBtnClick = function() {
                    var t = this;
                    t.proValue.width = t.proValue.width + t.addValue > t.proBg.width ? t.proBg.width : t.proValue.width + t.addValue, t.proValue.width / t.proBg.width > this.awardNum && !t.isShow && (console.log("达到领取条件,显示banner"), n.default.callAPIMethodByProxy("showBanner"), Laya.timer.once(1e3, t, function() {
                        n.default.callAPIMethodByProxy("initBannerAD")
                    }), t.showBoxResult()), t.isCuting || (t.isCuting = !0, Laya.timer.frameLoop(2, t, t.progressLoop))
                }, GetBoxView.prototype.progressLoop = function() {
                    var t = this;
                    t.proValue.width > 0 ? t.proValue.width = t.proValue.width - t.cutValue < 0 ? 0 : t.proValue.width - t.cutValue : (Laya.timer.clear(t, t.progressLoop), t.isCuting = !1)
                }, GetBoxView.prototype.showBoxResult = function() {
                    var t = this;
                    t.proBg.visible = !1, t.proValue.visible = !1, t.btn_click.visible = !1, t.lab_tip.visible = !1, t.lab_desc.visible = !0, t.carInfo && Math.random() <= o.default.loadConfig.zs_click_award_money ? (console.log("获得皮肤~", t.carInfo.car_id), l.default.instance.storeOpenBoxPost(t.carInfo.car_id), s.default.cars.push(t.carInfo.car_id), r.default.instance.emit("openTip", "Nhận siêu xe mới!"), t.unknown.visible = !1, t.car_Icon.visible = !0, t.car_Icon.skin = "togetanewcar/" + t.carInfo.car_id + ".png", t.lab_desc.text = "Nhận xe mới!") : (t.lab_desc.text = "未获得奖品", r.default.instance.emit("openTip", "未获得奖品！")), Laya.timer.once(1e3, t, function() {
                        t.owner.on(Laya.Event.CLICK, t, t.close)
                    })
                }, GetBoxView.prototype.getUnlockCarInfo = function() {
                    if (console.log("userDataCars", s.default.cars), s.default.storeList && s.default.storeList.length > 0)
                        for (var t = 0; t < s.default.storeList.length; t++) {
                            for (var e = !0, i = 0; i < s.default.cars.length; i++) s.default.cars[i] == s.default.storeList[t].car_id && (e = !1);
                            if (e) return s.default.storeList[t]
                        }
                    return null
                }, GetBoxView
            }(a.default);
        i.default = d
    }, {
        "../mgrCommon/EventMgr": 12,
        "../mgrCommon/HttpMgr": 13,
        "../mgrCommon/PlatformMgr": 14,
        "../models/ConfigData": 18,
        "../models/UserData": 19,
        "./BaseView": 26
    }],
    29: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./BaseView"),
            o = t("../mgrCommon/PlatformMgr"),
            n = t("../mgrCommon/EventMgr"),
            s = t("../models/UserData"),
            r = t("../mgr3d/GameMgr"),
            l = t("../models/ConfigData"),
            d = function(t) {
                function GuideUI() {
                    return t.call(this) || this
                }
                return __extends(GuideUI, t), GuideUI.prototype.onAwake = function() {
                    t.prototype.onAwake.call(this), this.topImg = this.owner.getChildByName("topImg"), this.chLab = this.topImg.getChildByName("chLab"), this.jsLab = this.topImg.getChildByName("jsLab"), this.guideImg = this.owner.getChildByName("guideImg"), this.djsImg = this.guideImg.getChildByName("djsImg"), this.fingerImg = this.guideImg.getChildByName("fingerImg"), this.tipImg = this.owner.getChildByName("tipImg"), this.firstLab = this.tipImg.getChildByName("firstLab"), this.leftHeadImg = this.tipImg.getChildByName("leftHeadImg"), this.leftHeadBGImg = this.tipImg.getChildByName("leftBGImg"), this.leftHeadNameLab = this.leftHeadBGImg.getChildByName("nameLab"), this.rightHeadImg = this.tipImg.getChildByName("rightHeadImg"), this.rightHeadBGImg = this.tipImg.getChildByName("rightBGImg"), this.rightHeadNameLab = this.rightHeadBGImg.getChildByName("nameLab"), this.killImg = this.owner.getChildByName("killImg"), this.nodeInfoImgList = [];
                    for (var e = 0; e < 7; e++) {
                        var i = this.owner.getChildByName("nodeInfoImg" + e);
                        this.nodeInfoImgList.push(i)
                    }
                    this.nodeInfoLabList = [];
                    for (e = 0; e < r.default.aistartPointCount; e++) {
                        var a = new Laya.Label;
                        a.fontSize = 24, a.bold = !0, a.font = "Microsoft YaHei", a.color = "#ffffff", a.stroke = 3, a.strokeColor = "#000000", a.text = "", a.anchorX = .5, a.anchorY = .5, a.visible = !1, this.owner.addChild(a), this.nodeInfoLabList.push(a)
                    }
                    this.owner.setChildIndex(this.topImg, 20), this.mapDropImg = this.owner.getChildByName("mapDropImg"), this.mapDropLab = this.mapDropImg.getChildByName("djsLab"), this.owner.setChildIndex(this.mapDropImg, 20)
                }, GuideUI.prototype.addEvent = function() {
                    n.default.instance.onEvent("chLabNumber", this, this.chLabNumber), n.default.instance.onEvent("jsLabNumber", this, this.jsLabNumber), n.default.instance.onEvent("indicateAIDirection", this, this.indicateAIDirection)
                }, GuideUI.prototype.chLabNumber = function() {
                    var t = s.default.gameData.survivalNum < 0 ? 0 : s.default.gameData.survivalNum;
                    this.chLab.text = t
                }, GuideUI.prototype.jsLabNumber = function(t) {
                    this.jsLab.text = s.default.gameData.killNum, t && t.pos && (this.killImgShowTime = Laya.timer.currTimer, this.killImg.visible = !0, this.killImg.pos(t.pos.x, t.pos.y - 200))
                }, GuideUI.prototype.indicateAIDirection = function(t) {
                    if (t && t.rotList)
                        for (var e = 0; e < this.nodeInfoImgList.length; e++) e < t.rotList.length ? (this.nodeInfoImgList[e].visible = !0, this.nodeInfoImgList[e].rotation = t.rotList[e]) : this.nodeInfoImgList[e].visible = !1;
                    if (t && t.posList)
                        for (e = 0; e < this.nodeInfoLabList.length; e++) e < t.posList.length ? (this.nodeInfoLabList[e].visible = !0, this.nodeInfoLabList[e].pos(t.posList[e].x, t.posList[e].y), this.nodeInfoLabList[e].text = t.posList[e].name ? t.posList[e].name : "") : this.nodeInfoLabList[e].visible = !1
                }, GuideUI.prototype.removeEvent = function() {
                    n.default.instance.onOffEvent("chLabNumber", this, this.chLabNumber), n.default.instance.onOffEvent("jsLabNumber", this, this.jsLabNumber), n.default.instance.onOffEvent("indicateAIDirection", this, this.indicateAIDirection), t.prototype.removeEvent.call(this)
                }, GuideUI.prototype.openView = function(e) {
                    var i = this;
                    t.prototype.openView.call(this, e), o.default.callAPIMethodByProxy("showBanner"), this.guideImg.visible = !0, this.tipImg.visible = !1, this.countDownTime = Laya.timer.currTimer, this.countDownNum = 3, this.djsImg.skin = "game/" + this.countDownNum + ".png", this.chLab.text = "0", this.jsLab.text = "0", this.killImg.visible = !1, this.nodeInfoImgList.forEach(function(t) {
                        t.visible = !1
                    }), this.mapDropImg.visible = !1, this.chLabNumber(), l.default.mapdropConfigInfo.forEach(function(t) {
                        t.id == e.mapIndex && (i.mapDropDjsTime = 1e3 * t.startTime + Laya.timer.currTimer)
                    })
                }, GuideUI.prototype.onUpdate = function() {
                    if (this.countDownNum > 0 && this.countDownTime + 600 < Laya.timer.currTimer && (this.countDownTime = Laya.timer.currTimer, this.countDownNum--, this.countDownNum <= 0 ? (n.default.instance.emit("startGameToGameMgr"), this.guideImg.visible = !1, o.default.callAPIMethodByProxy("initBannerAD")) : this.djsImg.skin = "game/" + this.countDownNum + ".png"), this.killImgShowTime && this.killImgShowTime + 1e3 < Laya.timer.currTimer && (this.killImg.visible = !1, this.killImgShowTime = null), this.mapDropDjsTime > 0) {
                        var t = this.mapDropDjsTime - Laya.timer.currTimer;
                        t <= 0 ? (this.mapDropImg.visible = !1, this.mapDropDjsTime = 0) : t < 6e3 && (this.mapDropImg.visible = !0, this.mapDropLab.text = Math.floor(t / 1e3).toString())
                    }
                }, GuideUI
            }(a.default);
        i.default = d
    }, {
        "../mgr3d/GameMgr": 10,
        "../mgrCommon/EventMgr": 12,
        "../mgrCommon/PlatformMgr": 14,
        "../models/ConfigData": 18,
        "../models/UserData": 19,
        "./BaseView": 26
    }],
    30: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../mgrCommon/EventMgr"),
            o = t("../models/UserData"),
            n = function() {
                function LayoutEvent() {}
                return LayoutEvent.VIEW_OPENED = "VIEW_OPENED", LayoutEvent.VIEW_CLOSED = "VIEW_CLOSED", LayoutEvent
            }();
        i.LayoutEvent = n;
        var s = function(t) {
            function LayoutView() {
                return t.call(this) || this
            }
            return __extends(LayoutView, t), LayoutView.prototype.onAwake = function() {
                var t = this.owner;
                t.x = 0, t.y = 0, t.width = Laya.stage.width, t.height = Laya.stage.height, this.full && (this.full.width = Laya.stage.width, this.full.height = Laya.stage.height), this.head && (this.head.top = 0, this.head.centerX = 0), this.middle && (this.middle.centerY = 0, this.middle.centerX = 0), this.slide && (this.slide.left = 0, this.slide.centerY = 0), this.foot && (this.foot.bottom = 0, this.foot.centerX = 0), this.closeBtn && this.closeBtn.on(Laya.Event.CLICK, this, this.closeView)
            }, LayoutView.prototype.onDestroy = function() {
                this.closeBtn && this.closeBtn.off(Laya.Event.CLICK, this, this.closeView)
            }, LayoutView.prototype.onEnable = function() {
                Laya.stage.event(n.VIEW_OPENED, this.viewId)
            }, LayoutView.prototype.onDisable = function() {
                Laya.stage.event(n.VIEW_CLOSED, this.viewId)
            }, LayoutView.prototype.closeView = function() {
                this.owner.close(), a.default.instance.emit("openGameEnd", o.default.reusltData)
            }, LayoutView
        }(Laya.Script);
        i.default = s
    }, {
        "../mgrCommon/EventMgr": 12,
        "../models/UserData": 19
    }],
    31: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./BaseView"),
            o = t("../mgrCommon/PlatformMgr"),
            n = t("../mgrCommon/EventMgr"),
            s = t("../tools/MyUtils"),
            r = t("../mgrCommon/HttpMgr"),
            l = t("../models/UserData"),
            d = t("../mgr3d/GameMgr"),
            c = t("../mgrCommon/SoundMgr"),
            u = t("../models/ConfigData"),
            h = t("../tools/MyLog"),
            f = t("./LayoutView"),
            p = function(t) {
                function MainUI() {
                    var e = t.call(this) || this;
                    return e.isShowCard = !1, e.watchVideoBtnSwayIndex = 0, e
                }
                return __extends(MainUI, t), MainUI.prototype.onAwake = function() {
                    t.prototype.onAwake.call(this), this.logoImg = this.owner.getChildByName("top").getChildByName("logoImg"), this.moneyBGImg = this.owner.getChildByName("top").getChildByName("moneyBGImg"), this.moneyLab = this.moneyBGImg.getChildByName("myMoneyLab"), this.leftBtn = this.owner.getChildByName("midle").getChildByName("leftBtn"), this.rightBtn = this.owner.getChildByName("midle").getChildByName("rightBtn"), this.startBtn = this.owner.getChildByName("foot").getChildByName("startBtn"), this.buyBtn = this.owner.getChildByName("foot").getChildByName("buyBtn"), this.buyVideoImg = this.buyBtn.getChildByName("buyVideoImg"), this.videoBuyLabel = this.buyVideoImg.getChildByName("videoBuyLabel"), this.buyMoneyImg = this.buyBtn.getChildByName("buyMoneyImg"), this.moneyBuyLabel = this.buyMoneyImg.getChildByName("moneyBuyLabel"), this.tryBtn = this.owner.getChildByName("foot").getChildByName("tryBtn"), this.watchVideoBtn = this.owner.getChildByName("midle").getChildByName("watchVideoBtn"), this.lightImg = this.watchVideoBtn.getChildByName("lightImg"), this.wvBgImg = this.watchVideoBtn.getChildByName("wvBgImg"), this.watchVideoLab = this.watchVideoBtn.getChildByName("watchVideoLab"), this.myTween = new Laya.Tween, this.pushCarImg = this.owner.getChildByName("foot").getChildByName("pushCarImg"), this.countdownLab = this.pushCarImg.getChildByName("countdownLab"), s.default.autoScreenSize([this.moneyBGImg]);
                    u.default.systemInfo.windowWidth, u.default.systemInfo.windowHeight;
                    this.bottomAd.visible = !1, this.floatAdBtn.visible = 1 == u.default.loadConfig.zs_jump_switch && u.default.loadConfig.zs_number != u.default.version, 2 == o.default.callAPIMethodByProxy("mobileType") && (this.logoImg.scale(.7, .7), this.moneyBGImg.scale(.7, .7))
                }, MainUI.prototype.addEvent = function() {
                    t.prototype.addEvent.call(this), this.startBtn.on(Laya.Event.CLICK, this, this.startBtnClick), this.buyBtn.on(Laya.Event.CLICK, this, this.buyBtnClick), this.tryBtn.on(Laya.Event.CLICK, this, this.tryBtnClick), this.leftBtn.on(Laya.Event.CLICK, this, this.leftBtnClick), this.rightBtn.on(Laya.Event.CLICK, this, this.rightBtnClick), this.floatAdBtn.on(Laya.Event.CLICK, this, this.cnxhBtnClick), this.watchVideoBtn.on(Laya.Event.CLICK, this, this.watchVideoBtnClick), this.pushCarImg.on(Laya.Event.CLICK, this, this.pushCarBtnClick), Laya.stage.on(u.default.EventDefine.ZS_APP_JUMP_CANCEL, this, this.adJumpCancel), n.default.instance.onEvent("moneyLabChang", this, this.moneyLabChang), n.default.instance.onEvent("showDropMoneyAni", this, this.dropMoneyAni), n.default.instance.onEvent("refreshBuyTryButton", this, this.refreshBuyTryButton)
                }, MainUI.prototype.getPushCarInfo = function() {
                    var t = null;
                    return u.default.luxury_car_push && u.default.luxury_car_push.forEach(function(e) {
                        for (var i = !1, a = 0; a < l.default.cars.length; a++) l.default.cars[a] == e.vehicle_id && (i = !0);
                        i || e.checkpoint_num <= l.default.serverGameNumber && (t || (t = []), t.push(e))
                    }), t
                }, MainUI.prototype.refreshBuyTryButton = function(t) {
                    var e = t.carId;
                    if (t.buy && (this.pushCarInfo = null, this.pushCarImg.visible = !1), this.storeList)
                        for (var i = 0; i < this.storeList.length; i++) this.storeList[i].car_id == e && (this.storeIndex = i, this.changeCar()), t.buy && 5 == this.storeList[i].buy_type && (this.storeList[i].video_now += 1);
                    "android" != u.default.platformType && "ios" != u.default.platformType && "h5" != u.default.platformType || o.default.callAPIMethodByProxy("showBannerAdHome")
                }, MainUI.prototype.buyUnderMoney = function() {
                    window.zsSdk && !window.zsSdk.canShowVideo() || n.default.instance.emit("openTogetMoney")
                }, MainUI.prototype.buyBtnClick = function() {
                    var t = this;
                    if (!this._isClick && (this._isClick = !0, Laya.timer.once(500, this, function() {
                            t._isClick = null
                        }), this.storeList && this.storeList.length > this.storeIndex && this.storeIndex >= 0)) {
                        var e = this.storeList[this.storeIndex].buy_type;
                        if (2 == e) {
                            var i = this.storeList[this.storeIndex].gold ? this.storeList[this.storeIndex].gold : 0;
                            l.default.gold < i ? this.buyUnderMoney() : r.default.instance.storeBuyPost(this.storeList[this.storeIndex].car_id, function(e) {
                                e && e.data && 0 != e.data.status ? 1 == e.data.status ? (n.default.instance.emit("openTip", "Đã mua!"), l.default.cars.push(l.default.car), t.startBtn.visible = !0, t.tryBtn.visible = !1, t.buyBtn.visible = !1, n.default.instance.emit("moneyLabChang"), l.default.gameData.tryId = l.default.car) : 2 == e.data.status && t.buyUnderMoney() : n.default.instance.emit("openTip", e.data.msg)
                            })
                        } else 5 != e && 4 != e || (Laya.Browser.onQQMiniGame || "android" == u.default.platformType || "ios" == u.default.platformType || "h5" == u.default.platformType) && o.default.callAPIMethodByProxy("showVideo", {
                            caller: this,
                            callBackSuc: function() {
                                5 == e ? (console.log("播放成功的回调"), r.default.instance.videoPost(2, function(e) {
                                    e && e.data && 1 == e.data.status && (console.log("服务器回应奖励"), t.storeList.forEach(function(i) {
                                        5 == i.buy_type && (i.video_now = e.data.video_num, i.video_now >= i.video_num ? r.default.instance.storeBuyPost(i.car_id, function(e) {
                                            e && e.data && 1 == e.data.status && (l.default.cars.push(i.car_id), l.default.car == i.car_id && (n.default.instance.emit("openTip", "Đã mua!"), t.startBtn.visible = !0, t.tryBtn.visible = !1, t.buyBtn.visible = !1, l.default.gameData.tryId = l.default.car, t.pushCarInfo && t.pushCarInfo.vehicle_id == i.car_id && (t.pushCarInfo = null, t.pushCarImg.visible = !1)))
                                        }) : (t.videoBuyLabel.text = i.video_now + " / " + i.video_num, t.changeCar()))
                                    }))
                                })) : 4 == e && r.default.instance.storeShareVideoPost("video", l.default.car, function(e) {
                                    e && e.data && 1 == e.data.status && t.storeList.forEach(function(i) {
                                        i.car_id == l.default.car ? (i.video_now = e.data.num, i.video_now >= i.video_num ? r.default.instance.storeBuyPost(i.car_id, function(e) {
                                            e && e.data && 1 == e.data.status ? (n.default.instance.emit("openTip", "Đã mua!"), l.default.cars.push(i.car_id), t.startBtn.visible = !0, t.tryBtn.visible = !1, t.buyBtn.visible = !1, l.default.gameData.tryId = l.default.car, t.pushCarInfo && t.pushCarInfo.vehicle_id == i.car_id && (t.pushCarInfo = null, t.pushCarImg.visible = !1)) : n.default.instance.emit("openTip", e.data.msg)
                                        }) : (h.default.log("视频观看次数： res.data.num " + e.data.num + " element.video_now " + i.video_now), t.videoBuyLabel.text = i.video_now + " / " + i.video_num)) : 5 == i.buy_type && (i.video_now = e.data.video_num, i.video_now >= i.video_num && r.default.instance.storeBuyPost(i.car_id, function(e) {
                                            e && e.data && 1 == e.data.status && (l.default.cars.push(i.car_id), t.pushCarInfo && t.pushCarInfo.vehicle_id == i.car_id && (t.pushCarInfo = null, t.pushCarImg.visible = !1))
                                        }))
                                    })
                                })
                            },
                            callBackFail: function() {
                                n.default.instance.emit("openTip", "要看完视频哦！")
                            },
                            callBackErro: function(t) {
                                n.default.instance.emit("openTip", t)
                            }
                        })
                    }
                }, MainUI.prototype.tryBtnClick = function() {
                    var t = this;
                    this._isClick || (this._isClick = !0, Laya.timer.once(500, this, function() {
                        t._isClick = null
                    }), c.default.instance.playSound("click"), Laya.Browser.onQQMiniGame || "android" == u.default.platformType || "ios" == u.default.platformType || "h5" == u.default.platformType ? o.default.callAPIMethodByProxy("showVideo", {
                        caller: this,
                        callBackSuc: function() {
                            console.log("播放成功的回调"), r.default.instance.videoPost(6), t.inGame()
                        },
                        callBackFail: function() {
                            n.default.instance.emit("openTip", "要看完视频哦！")
                        },
                        callBackErro: function(t) {
                            n.default.instance.emit("openTip", t)
                        }
                    }) : this.inGame())
                }, MainUI.prototype.startBtnClick = function() {
                    var t = this;
                    this._isClick || (this._isClick = !0, Laya.timer.once(500, this, function() {
                        t._isClick = null
                    }), c.default.instance.playSound("click"), this.inGame())
                }, MainUI.prototype.inGame = function() {
                    var t = this;
                    o.default.callAPIMethodByProxy("destoryAllBannerAd"), r.default.instance.startGamePost(d.default.aistartPointCount, function(e) {
                        t.isClose = !0, n.default.instance.emit("prepareGameToGameMgr"), l.default.gameNumber += 1;
                        l.default.gameNumber;
                        h.default.log("UserData.gameNumber ", l.default.gameNumber);
                        var i = Number(localStorage.getItem("gameNumber"));
                        localStorage.setItem("gameNumber", (i + 1).toString()), o.default.callAPIMethodByProxy("initBannerAD")
                    })
                }, MainUI.prototype.leftBtnClick = function() {
                    var t = this;
                    this._isClick || (this._isClick = !0, Laya.timer.once(500, this, function() {
                        t._isClick = null
                    }), this.storeList && (this.storeIndex--, this.changeCar()))
                }, MainUI.prototype.rightBtnClick = function() {
                    var t = this;
                    this._isClick || (this._isClick = !0, Laya.timer.once(500, this, function() {
                        t._isClick = null
                    }), this.storeList && (this.storeIndex++, this.changeCar()))
                }, MainUI.prototype.changeCar = function() {
                    var t = this.storeList.length;
                    this.storeIndex <= 0 ? this.storeIndex = 0 : this.storeIndex >= t - 1 && (this.storeIndex = t - 1), this.leftBtn.visible = this.storeIndex > 0, this.rightBtn.visible = this.storeIndex < t - 1;
                    for (var e = this.storeList[this.storeIndex].car_id, i = this.storeList[this.storeIndex].buy_type, a = !1, o = 0; o < l.default.cars.length; o++)
                        if (l.default.cars[o] == e) {
                            a = !0;
                            break
                        } this.startBtn.visible = a || 2 != i && window.zsSdk && !window.zsSdk.canShowVideo(), this.startBtn.disabled = !a && 2 != i && window.zsSdk && !window.zsSdk.canShowVideo(), this.tryBtn.visible = !(a || window.zsSdk && !window.zsSdk.canShowVideo()), this.buyBtn.visible = !(a || 2 != i && window.zsSdk && !window.zsSdk.canShowVideo()), this.buyMoneyImg.visible = 2 == i, this.buyVideoImg.visible = 4 == i || 5 == i, this.videoBuyLabel.text = 4 == i || 5 == i ? this.storeList[this.storeIndex].video_now + " / " + this.storeList[this.storeIndex].video_num : "", this.moneyBuyLabel.text = this.storeList[this.storeIndex].gold ? s.default.formatMoney(this.storeList[this.storeIndex].gold) + " tiền" : "", l.default.car = e, n.default.instance.emit("showCurCarModel"), a && (l.default.gameData.tryId = e, r.default.instance.storeSelectCarPost())
                }, MainUI.prototype.cnxhBtnClick = function() {
                    o.default.callAPIMethodByProxy("showAppBox")
                }, MainUI.prototype.removeEvent = function() {
                    this.startBtn.off(Laya.Event.CLICK, this, this.startBtnClick), this.buyBtn.off(Laya.Event.CLICK, this, this.buyBtnClick), this.tryBtn.off(Laya.Event.CLICK, this, this.tryBtnClick), this.leftBtn.off(Laya.Event.CLICK, this, this.leftBtnClick), this.rightBtn.off(Laya.Event.CLICK, this, this.rightBtnClick), this.floatAdBtn.off(Laya.Event.CLICK, this, this.cnxhBtnClick), this.watchVideoBtn.off(Laya.Event.CLICK, this, this.watchVideoBtnClick), this.pushCarImg.off(Laya.Event.CLICK, this, this.pushCarBtnClick), Laya.stage.off(u.default.EventDefine.ZS_APP_JUMP_CANCEL, this, this.adJumpCancel), n.default.instance.onOffEvent("moneyLabChang", this, this.moneyLabChang), n.default.instance.onOffEvent("showDropMoneyAni", this, this.dropMoneyAni), n.default.instance.onOffEvent("refreshBuyTryButton", this, this.refreshBuyTryButton), this.destoryDropMoneyScene(), t.prototype.removeEvent.call(this)
                }, MainUI.prototype.adJumpCancel = function(t) {
                    void 0 === t && (t = 1), 0 == u.default.openScreenAd && 1 == u.default.loadConfig.zs_jump_switch && u.default.loadConfig.zs_number != u.default.version && u.default.loadConfig.zs_full_screen_jump && Laya.Scene.open("FullScreenAd.scene", !1)
                }, MainUI.prototype.moneyLabChang = function() {
                    this.moneyLab.text = s.default.formatMoney(l.default.gold)
                }, MainUI.prototype.pushCarBtnClick = function() {
                    var t = this;
                    this._isClick || (this._isClick = !0, Laya.timer.once(500, this, function() {
                        t._isClick = null
                    }), this.pushCarInfo && (o.default.callAPIMethodByProxy("destoryAllBannerAd"), n.default.instance.emit("openTogetANewCar", {
                        pushCarInfo: this.pushCarInfo
                    })))
                }, MainUI.prototype.watchVideoBtnClick = function() {
                    var t = this;
                    if (!this._isClick) {
                        this._isClick = !0, Laya.timer.once(500, this, function() {
                            t._isClick = null
                        });
                        var e = function() {
                            r.default.instance.videoPost(4, function(e) {
                                e && e.data && 1 == e.data.status && (console.log("服务器回应奖励"), l.default.gold = e.data.gold, t.watchVideoBtn.visible = !1, l.default.watchVideoBtnIntervalTime = Laya.timer.currTimer + 1e3 * u.default.watchvideo_config.time, t.dropMoneyAni())
                            })
                        };
                        Laya.Browser.onQQMiniGame || "android" == u.default.platformType || "ios" == u.default.platformType || "h5" == u.default.platformType ? o.default.callAPIMethodByProxy("showVideo", {
                            caller: this,
                            callBackSuc: function() {
                                console.log("播放成功的回调"), e()
                            },
                            callBackFail: function() {
                                n.default.instance.emit("openTip", "要看完视频哦！")
                            },
                            callBackErro: function(t) {
                                n.default.instance.emit("openTip", t)
                            }
                        }) : e()
                    }
                }, MainUI.prototype.openView = function(e) {
                    var i = this;
                    t.prototype.openView.call(this, e), this.isShowCard = !1, this.isClose = !1, this.pushCarInfo = null, this.pushCarImg.visible = !1, r.default.instance.getMainIndex(function(t) {
                        i.moneyLabChang(), r.default.instance.storePost(function(t) {
                            if (t && t.data && t.data.list) {
                                i.storeIndex = 0, i.storeList = t.data.list, l.default.storeList = t.data.list;
                                for (var e = !(0 != l.default.isFirstLogin && u.default.watchvideo_config && u.default.watchvideo_config.gnumber && l.default.gameNumber > 0 && l.default.gameNumber % u.default.watchvideo_config.gnumber == 0), a = 0, n = 0; n < i.storeList.length; n++) {
                                    if (!e) {
                                        for (var s = !0, r = 0; r < l.default.cars.length; r++) l.default.cars[r] == i.storeList[n].car_id && (s = !1);
                                        s && (e = !0, l.default.car = i.storeList[n].car_id)
                                    }
                                    i.storeList[n].car_id == l.default.car && (a = n), 5 == i.storeList[n].buy_type && (i.storeList[n].video_now = t.data.video_num)
                                }
                                i.storeIndex = a, i.changeCar(), console.log("isFirstLogin", l.default.isFirstLogin), 1 == l.default.isFirstLogin && (localStorage.setItem("boxAwardNum", String(0)), localStorage.setItem("gameNumber", String(0)));
                                var d = i.getPushCarInfo();
                                if (d) {
                                    var c = localStorage.getItem("pushCarTime"),
                                        h = (new Date).getTime();
                                    c ? h -= parseInt(c) : (localStorage.setItem("pushCarTime", h.toString()), h = 0);
                                    for (var f = 0; f < d.length && (!window.zsSdk || window.zsSdk.canShowVideo()); f++)
                                        if (1e3 * d[f].time - h > 0) {
                                            i.pushCarInfo = d[f], i.pushCarImg.visible = !0, i.pushCarImg.skin = "togetanewcar/" + i.pushCarInfo.vehicle_id + ".png", i.showNewCarAd({
                                                pushCarInfo: i.pushCarInfo
                                            }), i.isShowCard = !0;
                                            break
                                        }
                                }
                            }
                            u.default.openScreenAd && 1 == u.default.loadConfig.zs_jump_switch && u.default.loadConfig.zs_number != u.default.version && u.default.loadConfig.zs_full_screen_jump && (Laya.Scene.open("FullScreenAd.scene", !1), o.default.callAPIMethodByProxy("destroyBannerAdHome"), u.default.openScreenAd = !1)
                        })
                    }), this.watchVideoBtn.visible = (l.default.isNew && l.default.gameNumber > 0 || !l.default.isNew) && l.default.watchVideoBtnIntervalTime < Laya.timer.currTimer && !(window.zsSdk && !window.zsSdk.canShowVideo()), Laya.timer.loop(1e3 * u.default.watchvideo_config.mtime, this, function() {
                        i.watchVideoBtnSway(30, 50)
                    }), this.watchVideoLab.text = s.default.formatMoney(u.default.ctrlInfo.video_time_get_gold), this.isShowCard || o.default.callAPIMethodByProxy("showBanner")
                }, MainUI.prototype.showNewCarAd = function(t) {
                    u.default.openScreenAd && 1 == u.default.loadConfig.zs_jump_switch && u.default.loadConfig.zs_number != u.default.version && u.default.loadConfig.zs_full_screen_jump ? (Laya.Scene.open("FullScreenAd.scene", !1), Laya.stage.once(f.LayoutEvent.VIEW_CLOSED, this, this.onScreenAdClose, [t])) : window.zsSdk && !window.zsSdk.canShowVideo() || n.default.instance.emit("openTogetANewCar", t)
                }, MainUI.prototype.onScreenAdClose = function(t, e) {
                    u.default.openScreenAd = !1, o.default.callAPIMethodByProxy("destoryAllBannerAd"), window.zsSdk && !window.zsSdk.canShowVideo() || n.default.instance.emit("openTogetANewCar", t)
                }, MainUI.prototype.watchVideoBtnSway = function(t, e) {
                    var i = this;
                    this.watchVideoBtnSwayIndex++, Laya.Tween.to(this.watchVideoBtn, {
                        rotation: t
                    }, e, null, Laya.Handler.create(this, function() {
                        i.watchVideoBtnSwayIndex < 8 ? i.watchVideoBtnSway(-t, e) : (i.watchVideoBtnSwayIndex = 0, i.watchVideoBtn.rotation = 0)
                    }))
                }, MainUI.prototype.dropMoneyAni = function() {
                    var t = this;
                    n.default.instance.emit("moneyLabChang"), this.dropMoneyScene || (Laya.Scene3D.load("res3dMoney/LayaScene_DropMoneyAni/Conventional/DropMoneyAni.ls", Laya.Handler.create(this, function(t) {
                        this.dropMoneyScene = t, Laya.stage.addChildAt(t, 2)
                    })), Laya.timer.once(1e3 * u.default.dropMoneyAni_config, this, function() {
                        t.destoryDropMoneyScene()
                    }))
                }, MainUI.prototype.destoryDropMoneyScene = function() {
                    this.dropMoneyScene && (this.dropMoneyScene.destroy(), this.dropMoneyScene = null)
                }, MainUI.prototype.onUpdate = function() {
                    if (this.lightImg.rotation += 1, 0 != this.watchVideoBtn.visible || !(l.default.isNew && l.default.gameNumber > 0) && l.default.isNew || window.zsSdk && !window.zsSdk.canShowVideo() || l.default.watchVideoBtnIntervalTime < Laya.timer.currTimer && (this.watchVideoBtn.visible = !0), this.pushCarInfo) {
                        var t = localStorage.getItem("pushCarTime"),
                            e = (new Date).getTime();
                        t ? e -= parseInt(t) : e = 0;
                        var i = 1e3 * this.pushCarInfo.time - e;
                        if (i <= 0) this.pushCarInfo = null, this.pushCarImg.visible = !1;
                        else {
                            var a = Math.floor(i / 36e5),
                                o = i % 36e5,
                                n = Math.floor(o / 6e4),
                                s = i % 6e4,
                                r = Math.floor(s / 1e3),
                                d = "";
                            r > 0 && (d = r > 9 ? r.toString() : "0" + r.toString()), n > 0 && (r <= 0 && (d = "00"), d = (n > 9 ? n.toString() : "0" + n.toString()) + ":" + d), a > 0 && (r <= 0 && n <= 0 ? d = "00:00" : n <= 0 && (d = "00:" + d), d = (a > 9 ? a.toString() : "0" + a.toString()) + ":" + d), this.countdownLab.text = d
                        }
                    }
                }, MainUI
            }(a.default);
        i.default = p
    }, {
        "../mgr3d/GameMgr": 10,
        "../mgrCommon/EventMgr": 12,
        "../mgrCommon/HttpMgr": 13,
        "../mgrCommon/PlatformMgr": 14,
        "../mgrCommon/SoundMgr": 15,
        "../models/ConfigData": 18,
        "../models/UserData": 19,
        "../tools/MyLog": 24,
        "../tools/MyUtils": 25,
        "./BaseView": 26,
        "./LayoutView": 30
    }],
    32: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = function(t) {
            function MakeSureDia() {
                var e = t.call(this) || this;
                return e.callBack = null, e
            }
            return __extends(MakeSureDia, t), MakeSureDia.prototype.onOpened = function(t) {
                this.btn_sure.on("click", this, this.closeDia, [!0]), this.btn_chance.on("click", this, this.closeDia, [!1]), this.callBack = t
            }, MakeSureDia.prototype.closeDia = function(t) {
                this.callBack && this.callBack(t), this.close()
            }, MakeSureDia.prototype.onClosed = function() {
                this.btn_sure.off("click", this, this.closeDia), this.btn_chance.off("click", this, this.closeDia)
            }, MakeSureDia
        }(t("../../ui/layaMaxUI").ui.MakeSuerDiaUI);
        i.default = a
    }, {
        "../../ui/layaMaxUI": 43
    }],
    33: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./BaseView"),
            o = t("../mgrCommon/HttpMgr"),
            n = t("../mgrCommon/PlatformMgr"),
            s = t("../mgr3d/GameMgr"),
            r = function(t) {
                function PolymerizationUI() {
                    return t.call(this) || this
                }
                return __extends(PolymerizationUI, t), PolymerizationUI.prototype.onAwake = function() {
                    t.prototype.onAwake.call(this), this.backImg = this.owner.getChildByName("middleUI").getChildByName("backBtn")
                }, PolymerizationUI.prototype.addEvent = function() {
                    t.prototype.addEvent.call(this), this.backImg.on(Laya.Event.CLICK, this, this.backBtnClick)
                }, PolymerizationUI.prototype.removeEvent = function() {
                    this.backImg.off(Laya.Event.CLICK, this, this.backBtnClick), t.prototype.removeEvent.call(this)
                }, PolymerizationUI.prototype.backBtnClick = function() {
                    var t = this;
                    this._isClick || (this._isClick = !0, Laya.timer.once(500, this, function() {
                        t._isClick = null
                    }), this.postToServerResult("main"))
                }, PolymerizationUI.prototype.close = function() {
                    t.prototype.closeView.call(this)
                }, PolymerizationUI.prototype.startBtnClick = function() {
                    var t = this;
                    this._isClick || (this._isClick = !0, Laya.timer.once(500, this, function() {
                        t._isClick = null
                    }), this.postToServerResult("guide"))
                }, PolymerizationUI.prototype.openView = function(e) {
                    t.prototype.openView.call(this, e), e && (e.gold ? this.curGold = e.gold : this.curGold = 3e3, e.win ? this.isWin = e.win : this.isWin = 0), n.default.callAPIMethodByProxy("destoryAllBannerAd")
                }, PolymerizationUI.prototype.onUpdate = function() {}, PolymerizationUI.prototype.postToServerResult = function(t, e) {
                    var i = this;
                    void 0 === e && (e = 1), o.default.instance.gameEndPost(this.curGold * e, this.isWin, function(e) {
                        s.default.Instance.resetGameType({
                            ui: t
                        }), i.close()
                    }, function(t) {})
                }, PolymerizationUI
            }(a.default);
        i.default = r
    }, {
        "../mgr3d/GameMgr": 10,
        "../mgrCommon/HttpMgr": 13,
        "../mgrCommon/PlatformMgr": 14,
        "./BaseView": 26
    }],
    34: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = function(t) {
            function TipView() {
                return null !== t && t.apply(this, arguments) || this
            }
            return __extends(TipView, t), TipView.prototype.onAwake = function() {
                t.prototype.onAwake.call(this), this.tipLbl = this.owner.getChildByName("image").getChildByName("Label"), this.logo = this.owner.getChildByName("image").getChildByName("logo")
            }, TipView.prototype.addEvent = function() {
                this.owner.on(Laya.Event.CLICK, this, this.closeView), t.prototype.addEvent.call(this)
            }, TipView.prototype.removeEvent = function() {
                this.owner.off(Laya.Event.CLICK, this, this.closeView), t.prototype.removeEvent.call(this)
            }, TipView.prototype.openView = function(e) {
                var i = this;
                t.prototype.openView.call(this, e), this.tipLbl.text = e, Laya.timer.once(2e3, this, function() {
                    i.closeView()
                })
            }, TipView
        }(t("./BaseView").default);
        i.default = a
    }, {
        "./BaseView": 26
    }],
    35: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./BaseView"),
            o = t("../models/UserData"),
            n = t("../mgrCommon/HttpMgr"),
            s = t("../mgrCommon/PlatformMgr"),
            r = t("../mgrCommon/EventMgr"),
            l = t("../models/ConfigData"),
            d = function(t) {
                function TogetANewCarUI() {
                    return t.call(this) || this
                }
                return __extends(TogetANewCarUI, t), TogetANewCarUI.prototype.onAwake = function() {
                    t.prototype.onAwake.call(this);
                    var e = this.owner.getChildByName("node");
                    this.fqLab = e.getChildByName("fqLab"), this.obtainBtn = e.getChildByName("obtainBtn"), this.carIconImg = e.getChildByName("carIconImg"), this.carNameLab = e.getChildByName("carNameLab"), this.wzAniImg = e.getChildByName("wzAniImg"), this.wzAnimation = this.wzAniImg.getChildByName("wzAnimation"), this.effectAni(), 2 == s.default.callAPIMethodByProxy("mobileType") && e.scale(.7, .7)
                }, TogetANewCarUI.prototype.addEvent = function() {
                    t.prototype.addEvent.call(this), this.fqLab.on(Laya.Event.CLICK, this, this.tgBtnClick), this.obtainBtn.on(Laya.Event.CLICK, this, this.obtainBtnClick)
                }, TogetANewCarUI.prototype.removeEvent = function() {
                    this.fqLab.off(Laya.Event.CLICK, this, this.tgBtnClick), this.obtainBtn.off(Laya.Event.CLICK, this, this.obtainBtnClick), t.prototype.removeEvent.call(this)
                }, TogetANewCarUI.prototype.tgBtnClick = function() {
                    var t = this;
                    this._isClick || (this._isClick = !0, Laya.timer.once(500, this, function() {
                        t._isClick = null
                    }), this.close(!1))
                }, TogetANewCarUI.prototype.close = function(e) {
                    s.default.callAPIMethodByProxy("initBannerAD"), s.default.callAPIMethodByProxy("showBanner"), r.default.instance.emit("refreshBuyTryButton", {
                        buy: e,
                        carId: this.carId
                    }), this.destoryEffectScene(), t.prototype.closeView.call(this)
                }, TogetANewCarUI.prototype.buyCar = function() {
                    var t = this;
                    n.default.instance.storeBuyPost(this.carId, function(e) {
                        e && e.data && 1 == e.data.status && (o.default.cars.push(t.carId), r.default.instance.emit("openTip", "获得新豪车！"), t.close(!0))
                    })
                }, TogetANewCarUI.prototype.obtainBtnClick = function() {
                    var t = this;
                    if (!this._isClick) {
                        this._isClick = !0, Laya.timer.once(500, this, function() {
                            t._isClick = null
                        });
                        var e = function() {
                            console.log("进入完成观看奖励"), n.default.instance.storePushBuyPost(t.carId, function(e) {
                                console.log("服务器回应奖励"), e && e.data && 1 == e.data.status && (o.default.cars.push(t.carId), r.default.instance.emit("openTip", "获得新豪车！"), t.close(!0))
                            })
                        };
                        Laya.Browser.onQQMiniGame || "android" == l.default.platformType || "ios" == l.default.platformType || "h5" == l.default.platformType ? s.default.callAPIMethodByProxy("showVideo", {
                            caller: this,
                            callBackSuc: function() {
                                e()
                            },
                            callBackFail: function() {
                                r.default.instance.emit("openTip", "要看完视频哦！")
                            },
                            callBackErro: function(t) {
                                r.default.instance.emit("openTip", t)
                            }
                        }) : e()
                    }
                }, TogetANewCarUI.prototype.effectAni = function() {
                    this.effectScene || Laya.Scene3D.load("res3dMoney/LayaScene_TogetANewCarAni/Conventional/TogetANewCarAni.ls", Laya.Handler.create(this, function(t) {
                        this.effectScene = t, Laya.stage.addChildAt(t, 2)
                    }))
                }, TogetANewCarUI.prototype.destoryEffectScene = function() {
                    this.effectScene && (this.effectScene.destroy(), this.effectScene = null)
                }, TogetANewCarUI.prototype.openView = function(e) {
                    var i = this;
                    t.prototype.openView.call(this, e), this.wzAnimation.play(0, !1), this.carId = e.pushCarInfo.vehicle_id, this.fqLab.visible = !1, Laya.timer.once(500, this, function() {
                        i.fqLab.visible = !0
                    }), this.carIconImg.skin = "togetanewcar/" + this.carId + ".png", this.carNameLab.text = e.pushCarInfo.name
                }, TogetANewCarUI.prototype.onUpdate = function() {}, TogetANewCarUI
            }(a.default);
        i.default = d
    }, {
        "../mgrCommon/EventMgr": 12,
        "../mgrCommon/HttpMgr": 13,
        "../mgrCommon/PlatformMgr": 14,
        "../models/ConfigData": 18,
        "../models/UserData": 19,
        "./BaseView": 26
    }],
    36: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./BaseView"),
            o = t("../models/UserData"),
            n = t("../mgrCommon/HttpMgr"),
            s = t("../mgrCommon/PlatformMgr"),
            r = t("../mgrCommon/EventMgr"),
            l = t("../tools/MyUtils"),
            d = t("../models/ConfigData"),
            c = function(t) {
                function TogetMoneyUI() {
                    return t.call(this) || this
                }
                return __extends(TogetMoneyUI, t), TogetMoneyUI.prototype.onAwake = function() {
                    t.prototype.onAwake.call(this);
                    var e = this.owner.getChildByName("node");
                    this.fqLab = e.getChildByName("fqLab"), this.obtainBtn = e.getChildByName("obtainBtn"), this.moenyLab = e.getChildByName("moenyLab"), 2 == s.default.callAPIMethodByProxy("mobileType") && e.scale(.7, .7)
                }, TogetMoneyUI.prototype.addEvent = function() {
                    t.prototype.addEvent.call(this), this.fqLab.on(Laya.Event.CLICK, this, this.tgBtnClick), this.obtainBtn.on(Laya.Event.CLICK, this, this.obtainBtnClick)
                }, TogetMoneyUI.prototype.removeEvent = function() {
                    this.fqLab.off(Laya.Event.CLICK, this, this.tgBtnClick), this.obtainBtn.off(Laya.Event.CLICK, this, this.obtainBtnClick), t.prototype.removeEvent.call(this)
                }, TogetMoneyUI.prototype.tgBtnClick = function() {
                    var t = this;
                    this._isClick || (console.log("点击放弃"), this._isClick = !0, Laya.timer.once(500, this, function() {
                        t._isClick = null
                    }), this.close())
                }, TogetMoneyUI.prototype.close = function() {
                    t.prototype.closeView.call(this)
                }, TogetMoneyUI.prototype.obtainBtnClick = function() {
                    var t = this;
                    if (!this._isClick) {
                        this._isClick = !0, Laya.timer.once(500, this, function() {
                            t._isClick = null
                        });
                        var e = function() {
                            n.default.instance.videoPost(5, function(e) {
                                e && e.data && 1 == e.data.status && (console.log("服务器回应奖励"), o.default.gold = e.data.gold, r.default.instance.emit("showDropMoneyAni"), t.close())
                            })
                        };
                        Laya.Browser.onQQMiniGame || "android" == d.default.platformType || "ios" == d.default.platformType || "h5" == d.default.platformType ? s.default.callAPIMethodByProxy("showVideo", {
                            caller: this,
                            callBackSuc: function() {
                                console.log("播放完的回调"), e()
                            },
                            callBackFail: function() {
                                r.default.instance.emit("openTip", "要看完视频哦！")
                            },
                            callBackErro: function(t) {
                                r.default.instance.emit("openTip", t)
                            }
                        }) : e()
                    }
                }, TogetMoneyUI.prototype.openView = function(e) {
                    var i = this;
                    t.prototype.openView.call(this, e), this.moenyLab.text = l.default.formatMoney(d.default.ctrlInfo.video_get_gold), this.fqLab.visible = !1, Laya.timer.once(500, this, function() {
                        i.fqLab.visible = !0
                    })
                }, TogetMoneyUI.prototype.onUpdate = function() {}, TogetMoneyUI
            }(a.default);
        i.default = c
    }, {
        "../mgrCommon/EventMgr": 12,
        "../mgrCommon/HttpMgr": 13,
        "../mgrCommon/PlatformMgr": 14,
        "../models/ConfigData": 18,
        "../models/UserData": 19,
        "../tools/MyUtils": 25,
        "./BaseView": 26
    }],
    37: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../mgrCommon/HttpMgr"),
            o = t("../tools/MyUtils"),
            n = t("../models/ConfigData"),
            s = t("../mgrCommon/EventMgr"),
            r = t("../tools/MyLog"),
            l = function() {
                function AndroidAPI() {
                    this._launch = {}, this.btns = [], this.stime = 0, this.shareBackArgs = {}, this.bannerHomeIsHide = !0, this.bannerOtherIsHide = !0, this.bannerClassicEndIsHide = !0, this.isInited = !1, this.hasAd = !1, this.videoPlayedTimes = 0, this.sharePlayedTimes = 0, window.zsSdk && window.zsSdk.init()
                }
                return AndroidAPI.prototype.init = function() {}, AndroidAPI.prototype.getLoginInfo = function() {
                    return this.loginInfo
                }, AndroidAPI.prototype.doLogin = function(t) {
                    var e = this;
                    window.zsSdk && window.zsSdk.login(Laya.Handler.create(this, function(i) {
                        var o = JSON.parse(i);
                        e.loginInfo = o, a.default.instance.login(["code=0", "openid=" + o.identityId, "timestamp=0"], t)
                    }), Laya.Handler.create(this, function(t) {
                        s.default.instance.emit("openTip", "登陆失败")
                    }))
                }, AndroidAPI.prototype.getOffsetOpenDomain = function() {
                    return this.offsetOpenDomain
                }, AndroidAPI.prototype.getLaunchData = function() {
                    return this._launch
                }, AndroidAPI.prototype.getQuery = function() {
                    return this._launch.query
                }, AndroidAPI.prototype.getReferrerInfo = function() {
                    return this._launch.referrerInfo
                }, AndroidAPI.prototype.uploadRankDate = function(t) {}, AndroidAPI.prototype.showShareMenu = function() {}, AndroidAPI.prototype.createShareInfo = function(t) {}, AndroidAPI.prototype.shareAppMessage = function(t) {
                    s.default.instance.emit("openTip", "视频加载失败！")
                }, AndroidAPI.prototype.setOpenDomainOffset = function() {
                    var t = Laya.stage.width - 750;
                    t < 0 && (t = 0);
                    var e = Laya.stage.height - 1334;
                    e < 0 && (e = 0), this.offsetOpenDomain = new Laya.Vector2(t, e)
                }, AndroidAPI.prototype.createAuthorizationButton = function(t) {}, AndroidAPI.prototype.destoryAuthorization = function() {
                    n.default.repeatAuthorization ? this.setAuthorizationCheck(!1) : (n.default.isCreateAuthorization = !0, this.btns && this.btns.forEach(function(t) {
                        t && t.button.destroy()
                    }))
                }, AndroidAPI.prototype.setAuthorizationCheck = function(t) {
                    this.btns && this.btns.forEach(function(e) {
                        e && (t ? e.button.show() : e.button.hide())
                    })
                }, AndroidAPI.prototype.vibrateShort = function() {}, AndroidAPI.prototype.vibrateLong = function() {}, AndroidAPI.prototype.cleanVideoCall = function() {
                    this.myCaller = null, this.callBackSuc = null, this.callBackFail = null, this.callBackErro = null
                }, AndroidAPI.prototype.isShowVideo = function() {
                    return !0
                }, AndroidAPI.prototype.isShowShare = function() {
                    return !1
                }, AndroidAPI.prototype.showVideo = function(t) {
                    window.zsSdk && (this.callBackSuc = t.callBackSuc, this.callBackFail = t.callBackFail, this.callBackErro = t.callBackErro, window.zsSdk.playVideo(Laya.Handler.create(this, this.callBackSuc), Laya.Handler.create(this, this.callBackFail), Laya.Handler.create(this, this.callBackErro)))
                }, AndroidAPI.prototype.interstitialAdSDKVersion = function() {
                    return n.default.systemInfo.SDKVersion && o.default.compareVersion(n.default.systemInfo.SDKVersion, "2.6.0") >= 0
                }, AndroidAPI.prototype.loadInterstitialAd = function() {
                    window.zsSdk && window.zsSdk.showFullScreenAD(null)
                }, AndroidAPI.prototype.isShowBannerAd = function() {
                    return !0
                }, AndroidAPI.prototype.showBannerAdHome = function(t) {
                    window.zsSdk && window.zsSdk.showBanner(null)
                }, AndroidAPI.prototype.showBannerAdOtherFast = function() {
                    this.bannerOther ? this.bannerOther.show() : this.showBannerAdOther()
                }, AndroidAPI.prototype.showBannerAdOther = function(t) {}, AndroidAPI.prototype.showBannerAdClassicEndFast = function() {}, AndroidAPI.prototype.showBannerAdClassicEnd = function(t) {}, AndroidAPI.prototype.destroyBannerAdHome = function() {
                    window.zsSdk && window.zsSdk.hideBanner(null)
                }, AndroidAPI.prototype.destroyBannerAdOther = function() {}, AndroidAPI.prototype.destroyBannerAdClassicEnd = function() {}, AndroidAPI.prototype.destoryAllBannerAd = function() {
                    this.destroyBannerAdHome(), this.destroyBannerAdOther(), this.destroyBannerAdClassicEnd()
                }, AndroidAPI.prototype.misunderstandingClick = function() {
                    return !1
                }, AndroidAPI.prototype.bannerVerticalEnable = function() {
                    return !1
                }, AndroidAPI.prototype.bannerHorizontalEnable = function() {
                    return !1
                }, AndroidAPI.prototype.mobileType = function() {
                    var t = navigator.userAgent;
                    return t.indexOf("Android") > -1 || t.indexOf("Linux") > -1 ? 0 : t.indexOf("iPhone") > -1 ? 1 : 0
                }, AndroidAPI.prototype.navigateToMiniProgram = function(t) {
                    r.default.log("  --------navigateToMiniProgram  "), this.shareBackArgs.notShowAd = t.notShowAd
                }, AndroidAPI
            }();
        i.default = l
    }, {
        "../mgrCommon/EventMgr": 12,
        "../mgrCommon/HttpMgr": 13,
        "../models/ConfigData": 18,
        "../tools/MyLog": 24,
        "../tools/MyUtils": 25
    }],
    38: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a, o = t("../models/ConfigData"),
            n = t("../tools/MyLog");
        ! function(t) {
            t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 1] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 2] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 3] = "BOTTOM_RIGHT", t[t.DEFAULT = 4] = "DEFAULT"
        }(a = i.BannerStyle || (i.BannerStyle = {}));
        var s = function() {
            function BannerAd(t, e, i) {
                this.bannerType = a.TOP_LEFT, this.errCallBack = null, this.adUnitId = t, this.bannerType = e, this.errCallBack = i, this._width = Laya.stage.width / 2 - 50, this._height = .35 * this._width
            }
            return BannerAd.prototype.createBanner = function() {
                var t = this;
                console.log("创建曝光banner");
                o.default.systemInfo.windowWidth;
                var e = o.default.systemInfo.windowHeight;
                null == this.bannerAd && (this.bannerAd = window.qq.createBannerAd({
                    adUnitId: this.adUnitId,
                    style: {
                        left: 0,
                        top: e - t._height,
                        width: t._width,
                        height: t._height
                    }
                })), t.bannerAd.onResize(t.onResize.bind(this)), this.bannerAd.onError(function(e) {
                    n.default.log("banner广告加载错误：", e), t.errCallBack && t.errCallBack.runWith(e)
                })
            }, BannerAd.prototype.showBanner = function() {
                var t = this;
                console.log("显示曝光banner"), null != t.adUnitId && (null == t.bannerAd && t.createBanner(), this.bannerAd && this.bannerAd.show(), console.log("显示曝光banner成功"))
            }, BannerAd.prototype.onResize = function(t) {
                var e = this;
                if (e.bannerAd && t) {
                    var i, n;
                    switch (e.bannerType) {
                        case a.TOP_LEFT:
                            i = 10, n = 10;
                            break;
                        case a.TOP_RIGHT:
                            i = o.default.systemInfo.windowWidth - 10, n = 10 - t.height;
                            break;
                        case a.BOTTOM_LEFT:
                            i = 10 - t.width, n = o.default.systemInfo.windowHeight - 10;
                            break;
                        case a.BOTTOM_RIGHT:
                            i = o.default.systemInfo.windowWidth - 10, n = o.default.systemInfo.windowHeight - 10;
                            break;
                        case a.DEFAULT:
                            i = 10, n = 100
                    }
                    e.bannerAd.style.left = i, e.bannerAd.style.top = n, console.log("更新banner位置", e.bannerAd.style.left, e.bannerAd.style.top)
                }
            }, BannerAd.prototype.bannerHide = function() {
                console.log("隐藏曝光banner");
                this.bannerAd && this.bannerAd.hide()
            }, BannerAd.prototype.destroy = function() {
                var t = this;
                t.bannerAd && (t.bannerAd.destroy(), t.bannerAd = null)
            }, BannerAd.prototype.resizePoint = function(t) {
                var e = this;
                e.bannerType != t && (e.bannerType = t, e.bannerAd.style.width = 1, console.log("重置banner坐标位置", t, e.bannerAd.style.width, e.bannerAd.style.height))
            }, BannerAd
        }();
        i.default = s
    }, {
        "../models/ConfigData": 18,
        "../tools/MyLog": 24
    }],
    39: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../tools/MyUtils"),
            o = t("../models/ConfigData"),
            n = t("../mgrCommon/EventMgr"),
            s = t("../tools/MyLog"),
            r = function() {
                function H5API() {
                    this._launch = {}, this.btns = [], this.stime = 0, this.shareBackArgs = {}, this.bannerHomeIsHide = !0, this.bannerOtherIsHide = !0, this.bannerClassicEndIsHide = !0, this.isInited = !1, this.hasAd = !1, this.videoPlayedTimes = 0, this.sharePlayedTimes = 0, window.zsSdk && window.zsSdk.init()
                }
                return H5API.prototype.init = function() {}, H5API.prototype.getLoginInfo = function() {
                    return this.loginInfo
                }, H5API.prototype.doLogin = function(t) {
                    window.zsSdk && window.zsSdk.login(Laya.Handler.create(this, function(e) {
                        t.success()
                    }), Laya.Handler.create(this, function(t) {
                        n.default.instance.emit("openTip", "登陆失败")
                    }))
                }, H5API.prototype.loadingSuccess = function() {
                    window.zsSdk && (window.zsSdk.loadingSuccess(), s.default.log(" ----------callback  loadingSuccess"))
                }, H5API.prototype.getOffsetOpenDomain = function() {
                    return this.offsetOpenDomain
                }, H5API.prototype.getLaunchData = function() {
                    return this._launch
                }, H5API.prototype.getQuery = function() {
                    return this._launch.query
                }, H5API.prototype.getReferrerInfo = function() {
                    return this._launch.referrerInfo
                }, H5API.prototype.uploadRankDate = function(t) {}, H5API.prototype.showShareMenu = function() {}, H5API.prototype.createShareInfo = function(t) {}, H5API.prototype.shareAppMessage = function(t) {
                    n.default.instance.emit("openTip", "今日视频次数不足！")
                }, H5API.prototype.setOpenDomainOffset = function() {
                    var t = Laya.stage.width - 750;
                    t < 0 && (t = 0);
                    var e = Laya.stage.height - 1334;
                    e < 0 && (e = 0), this.offsetOpenDomain = new Laya.Vector2(t, e)
                }, H5API.prototype.createAuthorizationButton = function(t) {}, H5API.prototype.destoryAuthorization = function() {
                    o.default.repeatAuthorization ? this.setAuthorizationCheck(!1) : (o.default.isCreateAuthorization = !0, this.btns && this.btns.forEach(function(t) {
                        t && t.button.destroy()
                    }))
                }, H5API.prototype.setAuthorizationCheck = function(t) {
                    this.btns && this.btns.forEach(function(e) {
                        e && (t ? e.button.show() : e.button.hide())
                    })
                }, H5API.prototype.vibrateShort = function() {}, H5API.prototype.vibrateLong = function() {}, H5API.prototype.cleanVideoCall = function() {
                    this.myCaller = null, this.callBackSuc = null, this.callBackFail = null, this.callBackErro = null
                }, H5API.prototype.isShowVideo = function() {
                    return !0
                }, H5API.prototype.isShowShare = function() {
                    return !1
                }, H5API.prototype.showVideo = function(t) {
                    var e = this;
                    window.zsSdk && (e.callBackSuc = t.callBackSuc, e.callBackFail = t.callBackFail, e.callBackErro = t.callBackErro, Laya.Dialog.open("MakeSuerDia.scene", !1, function(t) {
                        t && window.zsSdk.playVideo(Laya.Handler.create(e, e.callBackSuc), Laya.Handler.create(e, e.callBackFail), Laya.Handler.create(e, e.callBackErro))
                    }))
                }, H5API.prototype.interstitialAdSDKVersion = function() {
                    return o.default.systemInfo.SDKVersion && a.default.compareVersion(o.default.systemInfo.SDKVersion, "2.6.0") >= 0
                }, H5API.prototype.loadInterstitialAd = function() {}, H5API.prototype.isShowBannerAd = function() {
                    return !0
                }, H5API.prototype.showBannerAdHome = function(t) {}, H5API.prototype.showBannerAdOtherFast = function() {}, H5API.prototype.showBannerAdOther = function(t) {}, H5API.prototype.showBannerAdClassicEndFast = function() {}, H5API.prototype.showBannerAdClassicEnd = function(t) {}, H5API.prototype.destroyBannerAdHome = function() {}, H5API.prototype.destroyBannerAdOther = function() {}, H5API.prototype.destroyBannerAdClassicEnd = function() {}, H5API.prototype.destoryAllBannerAd = function() {}, H5API.prototype.misunderstandingClick = function() {
                    return !1
                }, H5API.prototype.bannerVerticalEnable = function() {
                    return !1
                }, H5API.prototype.bannerHorizontalEnable = function() {
                    return !1
                }, H5API.prototype.mobileType = function() {
                    var t = navigator.userAgent;
                    return t.indexOf("Android") > -1 || t.indexOf("Linux") > -1 ? 0 : t.indexOf("iPhone") > -1 ? 1 : 0
                }, H5API.prototype.navigateToMiniProgram = function(t) {
                    s.default.log("  --------navigateToMiniProgram  "), this.shareBackArgs.notShowAd = t.notShowAd
                }, H5API
            }();
        i.default = r
    }, {
        "../mgrCommon/EventMgr": 12,
        "../models/ConfigData": 18,
        "../tools/MyLog": 24,
        "../tools/MyUtils": 25
    }],
    40: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../mgrCommon/HttpMgr"),
            o = t("../tools/MyUtils"),
            n = t("../models/ConfigData"),
            s = t("../mgrCommon/EventMgr"),
            r = t("../tools/MyLog"),
            l = function() {
                function IOSAPI() {
                    this._launch = {}, this.btns = [], this.stime = 0, this.shareBackArgs = {}, this.bannerHomeIsHide = !0, this.bannerOtherIsHide = !0, this.bannerClassicEndIsHide = !0, this.isInited = !1, this.hasAd = !1, this.videoPlayedTimes = 0, this.sharePlayedTimes = 0, window.zsSdk && window.zsSdk.init()
                }
                return IOSAPI.prototype.init = function() {}, IOSAPI.prototype.doLogin = function(t) {
                    window.zsSdk && window.zsSdk.login(Laya.Handler.create(this, function(e) {
                        var i = JSON.parse(e);
                        a.default.instance.login(["code=0", "openid=" + i.identityId, "timestamp=0"], t)
                    }), Laya.Handler.create(this, function(t) {
                        s.default.instance.emit("openTip", "登陆失败")
                    }))
                }, IOSAPI.prototype.getOffsetOpenDomain = function() {
                    return this.offsetOpenDomain
                }, IOSAPI.prototype.getLaunchData = function() {
                    return this._launch
                }, IOSAPI.prototype.getQuery = function() {
                    return this._launch.query
                }, IOSAPI.prototype.getReferrerInfo = function() {
                    return this._launch.referrerInfo
                }, IOSAPI.prototype.uploadRankDate = function(t) {}, IOSAPI.prototype.showShareMenu = function() {}, IOSAPI.prototype.createShareInfo = function(t) {}, IOSAPI.prototype.shareAppMessage = function(t) {
                    s.default.instance.emit("openTip", "视频加载失败！")
                }, IOSAPI.prototype.setOpenDomainOffset = function() {
                    var t = Laya.stage.width - 750;
                    t < 0 && (t = 0);
                    var e = Laya.stage.height - 1334;
                    e < 0 && (e = 0), this.offsetOpenDomain = new Laya.Vector2(t, e)
                }, IOSAPI.prototype.createAuthorizationButton = function(t) {}, IOSAPI.prototype.destoryAuthorization = function() {
                    n.default.repeatAuthorization ? this.setAuthorizationCheck(!1) : (n.default.isCreateAuthorization = !0, this.btns && this.btns.forEach(function(t) {
                        t && t.button.destroy()
                    }))
                }, IOSAPI.prototype.setAuthorizationCheck = function(t) {
                    this.btns && this.btns.forEach(function(e) {
                        e && (t ? e.button.show() : e.button.hide())
                    })
                }, IOSAPI.prototype.vibrateShort = function() {}, IOSAPI.prototype.vibrateLong = function() {}, IOSAPI.prototype.cleanVideoCall = function() {
                    this.myCaller = null, this.callBackSuc = null, this.callBackFail = null, this.callBackErro = null
                }, IOSAPI.prototype.isShowVideo = function() {
                    return !0
                }, IOSAPI.prototype.isShowShare = function() {
                    return !1
                }, IOSAPI.prototype.showVideo = function(t) {
                    if (1 != n.default.iosAuditVideo) {
                        window.zsSdk && (this.callBackSuc = t.callBackSuc, this.callBackFail = t.callBackFail, this.callBackErro = t.callBackErro, window.zsSdk.playVideo(Laya.Handler.create(this, this.callBackSuc), Laya.Handler.create(this, this.callBackFail), Laya.Handler.create(this, this.callBackErro)))
                    } else t.callBackSuc()
                }, IOSAPI.prototype.interstitialAdSDKVersion = function() {
                    return n.default.systemInfo.SDKVersion && o.default.compareVersion(n.default.systemInfo.SDKVersion, "2.6.0") >= 0
                }, IOSAPI.prototype.loadInterstitialAd = function() {
                    window.zsSdk && window.zsSdk.showFullScreenAD(null)
                }, IOSAPI.prototype.isShowBannerAd = function() {
                    return !0
                }, IOSAPI.prototype.showBannerAdHome = function(t) {
                    window.zsSdk && window.zsSdk.showBanner(null)
                }, IOSAPI.prototype.showBannerAdOtherFast = function() {
                    this.bannerOther ? this.bannerOther.show() : this.showBannerAdOther()
                }, IOSAPI.prototype.showBannerAdOther = function(t) {}, IOSAPI.prototype.showBannerAdClassicEndFast = function() {}, IOSAPI.prototype.showBannerAdClassicEnd = function(t) {}, IOSAPI.prototype.destroyBannerAdHome = function() {
                    window.zsSdk && window.zsSdk.hideBanner(null)
                }, IOSAPI.prototype.destroyBannerAdOther = function() {}, IOSAPI.prototype.destroyBannerAdClassicEnd = function() {}, IOSAPI.prototype.destoryAllBannerAd = function() {
                    this.destroyBannerAdHome(), this.destroyBannerAdOther(), this.destroyBannerAdClassicEnd()
                }, IOSAPI.prototype.misunderstandingClick = function() {
                    return !1
                }, IOSAPI.prototype.bannerVerticalEnable = function() {
                    return !1
                }, IOSAPI.prototype.bannerHorizontalEnable = function() {
                    return !1
                }, IOSAPI.prototype.mobileType = function() {
                    if (window.conch && JSON.parse(window.conch.config.getDeviceInfo()).devicename.indexOf("iPad") > -1) return r.default.log("iPad：----------------- "), 2;
                    return 0
                }, IOSAPI.prototype.navigateToMiniProgram = function(t) {
                    r.default.log("  --------navigateToMiniProgram  "), this.shareBackArgs.notShowAd = t.notShowAd
                }, IOSAPI
            }();
        i.default = l
    }, {
        "../mgrCommon/EventMgr": 12,
        "../mgrCommon/HttpMgr": 13,
        "../models/ConfigData": 18,
        "../tools/MyLog": 24,
        "../tools/MyUtils": 25
    }],
    41: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../models/UserData"),
            o = t("../mgrCommon/HttpMgr"),
            n = t("../tools/MyUtils"),
            s = t("../models/ConfigData"),
            r = t("../mgrCommon/EventMgr"),
            l = t("../tools/MyLog"),
            d = t("../mgrCommon/SoundMgr"),
            c = t("../mgrCommon/ViewMgr"),
            u = t("../mgr3d/GameMgr"),
            h = t("./BannerAd"),
            f = function() {
                function WXAPI() {
                    var t = this;
                    this._launch = {}, this.btns = [], this.stime = 0, this.shareBackArgs = {}, this.bannerHomeIsHide = !0, this.bannerOtherIsHide = !0, this.bannerClassicEndIsHide = !0, this.isInited = !1, this.hasAd = !1, this.videoPlayedTimes = 0, this.sharePlayedTimes = 0, this.bannerList = [{
                        id: 1,
                        unitId: "",
                        type: h.BannerStyle.DEFAULT
                    }, {
                        id: 2,
                        unitId: "",
                        type: h.BannerStyle.TOP_LEFT
                    }], this.bannerArray = {}, this._launch = window.qq.getLaunchOptionsSync(), r.default.instance.onOnceEvent("getSystemParamListBack", this, function() {
                        t.showShareMenu()
                    }), window.qq.onShow(function(e) {
                        var i = e.query,
                            a = (i.gdt_vid, i.weixinadinfo);
                        a && a.split(".")[0];
                        var o = t.shareBackArgs || {},
                            n = t;
                        Laya.Browser.now(), t.stime;
                        if (Laya.Browser.now() - t.stime > 2e3 ? (o.success = !0, t.shareBack && t.myCaller && (n.sharePlayedTimes += 1, t.shareBack.call(t.myCaller, o)), t.shareBack = null) : (o.success = !1, t.shareBack && t.myCaller && t.shareBack.call(t.myCaller, o), t.shareBack = null), 1 == s.default.loadConfig.zs_jump_switch) {
                            var r = !1;
                            t.shareBackArgs && (r = t.shareBackArgs.notShowAd), Laya.timer.frameOnce(1, t, function() {
                                var t = c.default.instance.getView("GameEnd.scene"),
                                    e = c.default.instance.getView("Polymerization.scene");
                                if (r && t && !e) {
                                    var i = 0,
                                        a = 0,
                                        o = t._components;
                                    if (o)
                                        for (var n = 0; n < o.length; n++) {
                                            var l = o[n];
                                            i = l.getIsWin(), a = l.getCurGold()
                                        }
                                    c.default.instance.openView({
                                        viewName: "Polymerization.scene",
                                        closeAll: !0,
                                        data: {
                                            win: i,
                                            gold: a
                                        }
                                    })
                                }!u.default.Instance || u.default.Instance.GetGameState() != s.GAMESTATE.gameing && u.default.Instance.GetGameState() != s.GAMESTATE.pause || d.default.instance.playBGM()
                            })
                        }
                        t.shareBackArgs = {}, console.log("派发显示游戏事件"), Laya.stage.event(s.default.EVENT_ON_SHOW, e)
                    }), window.qq.onHide(function() {
                        t.stime = Laya.Browser.now(), console.log("派发隐藏游戏事件"), Laya.stage.event(s.default.EVENT_ON_HIDE)
                    }), this.init()
                }
                return WXAPI.prototype.init = function() {
                    Laya.Browser.onQQMiniGame && (s.default.systemInfo.SDKVersion && (this.isInited = !0, this.initVedioCom(), this.initAppBox(), this.initBannerAD(null)), this.preBannerTimeHome = Laya.timer.currTimer, this.preBannerTimeOther = Laya.timer.currTimer, this.preBannerTimeClassicEnd = Laya.timer.currTimer)
                }, WXAPI.prototype.onGoShare = function(t) {
                    this.myCaller = t.caller, this.shareBack = t.callback, this.shareBackArgs = t.args || {}
                }, WXAPI.prototype.doLogin = function(t) {
                    var e = this;
                    if (Laya.Browser.onQQMiniGame) {
                        var i = {
                            timestamp: 0
                        };
                        i.success = t.success, i.fail = t.fail, null == a.default.openId || a.default.openId.length <= 0 ? window.qq.login({
                            success: function(t) {
                                var n = e.getLaunchData();
                                n.query && (a.default.fromAppid = n.query.cur_share_id || ""), n.referrerInfo ? a.default.fromImgid = n.referrerInfo.appId : a.default.fromImgid = 0, a.default.code = t.code, i.code = t.code, o.default.instance.login(["code=" + t.code, "openid=", "timestamp=0"], i)
                            },
                            fail: function(t) {}
                        }) : (l.default.log("openid = ", a.default.openId), o.default.instance.login(["code=", "openid=" + a.default.openId, "timestamp=0"], i))
                    }
                }, WXAPI.prototype.getOffsetOpenDomain = function() {
                    return this.offsetOpenDomain
                }, WXAPI.prototype.getLaunchData = function() {
                    return this._launch
                }, WXAPI.prototype.getQuery = function() {
                    return this._launch.query
                }, WXAPI.prototype.getReferrerInfo = function() {
                    return this._launch.referrerInfo
                }, WXAPI.prototype.uploadRankDate = function(t) {
                    if (Laya.Browser.onQQMiniGame) {
                        var e = [];
                        n.default.isNull(t.level) || e.push({
                            key: "level",
                            value: t.level + ""
                        }), n.default.isNull(t.score) || e.push({
                            key: "score",
                            value: t.score + ""
                        }), window.qq.setUserCloudStorage({
                            KVDataList: e,
                            success: function(t) {}
                        })
                    }
                }, WXAPI.prototype.showShareMenu = function() {
                    if (Laya.Browser.onQQMiniGame) {
                        window.qq.showShareMenu({
                            withShareTicket: !0
                        });
                        var t = this.createShareInfo();
                        window.qq.onShareAppMessage(function() {
                            return t
                        })
                    }
                }, WXAPI.prototype.createShareInfo = function(t) {
                    var e = s.default.getConfigData("shareInfo");
                    if (!e) return null;
                    var i = e.title,
                        o = e.img,
                        n = "invite_uid=" + (a.default.userId ? a.default.userId : "");
                    return n += "&cur_share_id=" + e.id, n += "&channel=" + (a.default.channelId ? a.default.channelId : ""), t && (t.id && (n += "&scene=" + t.id), t.itemId && (n += "&itemId=" + t.itemId), t.type && (n += "&type=" + t.type), t.share_title && (i = t.share_title), t.share_img && (o = t.share_img)), {
                        title: i,
                        imageUrl: o,
                        query: n
                    }
                }, WXAPI.prototype.shareAppMessage = function(t) {
                    if (this.sharePlayedTimes > s.default.ctrlInfo.user_share_num && !t.limit) r.default.instance.emit("openTip", "分享已达上限！");
                    else if (Laya.Browser.onQQMiniGame && (t.callback && this.onGoShare(t), s.default.getConfigData("shareInfo"))) {
                        var e = this.createShareInfo(t);
                        window.qq.shareAppMessage(e)
                    }
                }, WXAPI.prototype.setOpenDomainOffset = function() {
                    var t = Laya.stage.width - 750;
                    t < 0 && (t = 0);
                    var e = Laya.stage.height - 1334;
                    e < 0 && (e = 0), this.offsetOpenDomain = new Laya.Vector2(t, e)
                }, WXAPI.prototype.createAuthorizationButton = function(t) {
                    if (Laya.Browser.onQQMiniGame) {
                        var e = this;
                        window.qq.getSetting({
                            success: function(i) {
                                if (i.authSetting && i.authSetting["scope.userInfo"]) l.default.log("已经授权");
                                else {
                                    var n = Laya.stage.width,
                                        s = Laya.stage.height,
                                        r = Laya.Browser.width / Laya.Browser.pixelRatio / n,
                                        d = Laya.Browser.height / Laya.Browser.pixelRatio / s,
                                        c = (t.x - t.width / 2) * r,
                                        u = (t.y + e.offsetOpenDomain.y - t.height / 2) * d,
                                        h = t.width * r,
                                        f = t.height * d;
                                    t.isFull && (c = 0, u = (t.y + e.offsetOpenDomain.y / 2) * d, h = h, f = f, "#ff0703");
                                    var p = window.qq.createUserInfoButton({
                                        type: "text",
                                        text: "",
                                        style: {
                                            left: c,
                                            top: u,
                                            width: h,
                                            height: f
                                        }
                                    });
                                    e.btns && e.btns.push({
                                        button: p,
                                        isFull: t.isFull
                                    }), p.onTap(function(i) {
                                        i && i.userInfo ? (a.default.nickName = i.userInfo.nickName, a.default.gender = i.userInfo.gender, a.default.avatarUrl = i.userInfo.avatarUrl, o.default.instance.updateUserInfo(), e.btns && e.btns.forEach(function(t) {
                                            t && t.button.destroy()
                                        }), e.btns = null, p.destroy(), t.successBack && t.successBack()) : (e.destoryAuthorization(), t.failBack && t.failBack())
                                    })
                                }
                            },
                            fail: function() {},
                            complete: function() {}
                        })
                    }
                }, WXAPI.prototype.destoryAuthorization = function() {
                    s.default.repeatAuthorization ? this.setAuthorizationCheck(!1) : (s.default.isCreateAuthorization = !0, this.btns && this.btns.forEach(function(t) {
                        t && t.button.destroy()
                    }))
                }, WXAPI.prototype.setAuthorizationCheck = function(t) {
                    this.btns && this.btns.forEach(function(e) {
                        e && (t ? e.button.show() : e.button.hide())
                    })
                }, WXAPI.prototype.vibrateShort = function() {
                    Laya.Browser.onQQMiniGame && s.default.isVirbort && window.qq.vibrateShort()
                }, WXAPI.prototype.vibrateLong = function() {
                    Laya.Browser.onQQMiniGame && s.default.isVirbort && window.qq.vibrateLong()
                }, WXAPI.prototype.openCustomerServiceConversation = function() {
                    window.qq.openCustomerServiceConversation()
                }, WXAPI.prototype.cleanVideoCall = function() {
                    this.myCaller = null, this.callBackSuc = null, this.callBackFail = null, this.callBackErro = null
                }, WXAPI.prototype.isShowVideo = function() {
                    return -1 == s.default.loadConfig.zs_revive_video_num || s.default.loadConfig.zs_revive_video_num > this.videoPlayedTimes
                }, WXAPI.prototype.isShowShare = function() {
                    return -1 == s.default.loadConfig.zs_revive_share_num || s.default.loadConfig.zs_revive_share_num > this.sharePlayedTimes
                }, WXAPI.prototype.initVedioCom = function() {
                    var t = this,
                        e = this;
                    if (this.isInited) {
                        if (this.rewardedVideoAd = window.qq.createRewardedVideoAd({
                                adUnitId: s.default.loadConfig.zs_video_adunit
                            }), null == this.rewardedVideoAd) return;
                        this.rewardedVideoAd.onLoad(function() {
                            e.hasAd = !0
                        }), this.rewardedVideoAd.onError(function(i) {
                            e.hasAd = !1, t.callBackErro ? t.callBackErro(i) : (null != e.callBackSuc && (o.default.instance.jumpAppVideoPost(), e.callBackSuc()), t.cleanVideoCall())
                        }), this.rewardedVideoAd.onClose(function(i) {
                            i && i.isEnded || void 0 === i ? (e.videoPlayedTimes += 1, null != e.callBackSuc && (o.default.instance.jumpAppVideoPost(), e.callBackSuc())) : null != e.callBackFail && e.callBackFail(), t.cleanVideoCall()
                        })
                    }
                }, WXAPI.prototype.showVideo = function(t) {
                    if (this.isInited) {
                        var e = this;
                        this.myCaller = t.caller, this.callBackSuc = t.callBackSuc, this.callBackFail = t.callBackFail, this.callBackErro = t.callBackErro, this.hasAd ? (this.hasAd = !1, this.rewardedVideoAd.show()) : this.rewardedVideoAd.load().then(function() {
                            e.rewardedVideoAd.show(), e.hasAd = !1
                        })
                    }
                }, WXAPI.prototype.interstitialAdSDKVersion = function() {
                    return s.default.systemInfo.SDKVersion && n.default.compareVersion(s.default.systemInfo.SDKVersion, "2.6.0") >= 0
                }, WXAPI.prototype.loadInterstitialAd = function() {
                    Laya.Browser.onQQMiniGame && this.interstitialAdSDKVersion() && 0 != s.default.loadConfig.zs_full_screen_ad && (this.interstitialAd = window.qq.createInterstitialAd({
                        adUnitId: s.default.loadConfig.zs_full_screen_adunit
                    }), this.interstitialAd.onError(function(t) {
                        l.default.log("插屏广告加载错误:", t)
                    }), this.interstitialAd.onClose(function(t) {
                        l.default.log("插屏广告关闭:", t)
                    }), this.bannerHome.onLoad(function(t) {
                        l.default.log("插屏广告加载:", t), localStorage.setItem("showInterstitialAd", "showInterstitialAd")
                    }), null != this.interstitialAd && this.interstitialAd.show())
                }, WXAPI.prototype.isShowBannerAd = function() {
                    if (!Laya.Browser.onQQMiniGame || !this.isInited) return !1;
                    if (s.default.loadConfig.zs_banner_system && "" != s.default.loadConfig.zs_banner_system) {
                        if ("android" == s.default.loadConfig.zs_banner_system && 0 != this.mobileType()) return !1;
                        if ("ios" == s.default.loadConfig.zs_banner_system && 1 != this.mobileType()) return !1
                    }
                    return !(!s.default.loadConfig.zs_banner_adunit || s.default.loadConfig.zs_banner_adunit.length <= 0 || "" == s.default.loadConfig.zs_banner_adunit)
                }, WXAPI.prototype.showBannerAdHome = function(t) {
                    var e = this;
                    if (this.isShowBannerAd()) {
                        var i = Math.floor(Math.random() * s.default.bannerAdUnitIdArr.length),
                            a = s.default.bannerAdUnitIdArr[i];
                        if (console.log("这次bannerid为", a, i), a) {
                            this.destoryAllBannerAd();
                            var o = s.default.systemInfo.windowWidth,
                                n = Laya.stage.width / 2 - 50,
                                r = .35 * n,
                                l = s.default.systemInfo.windowHeight;
                            if (console.log("ConfigData.systemInfo", s.default.systemInfo, o, l), this.bannerHome = window.qq.createBannerAd({
                                    adUnitId: a,
                                    style: {
                                        left: 0,
                                        top: l - r,
                                        width: n,
                                        height: r
                                    }
                                }), null != this.bannerHome) {
                                var d, c = this;
                                this.bannerHome.onResize(function(t) {
                                    c.bannerHome && (console.log("banner size:", t.width, t.height), c.bannerHome.style.left = .5 * (o - t.width), c.bannerHome.style.top = l - t.height - 10, d = t)
                                }), this.bannerHome.onError(function(i) {
                                    console.log("广告加载错误:", i), e.bannerHome.destroy(), e.bannerHome = null, t && t()
                                }), this.preBannerTimeHome = Laya.timer.currTimer, Laya.timer.once(500, this, function() {
                                    console.log("显示banner", this.bannerHome), d && (this.bannerHome.style.left = .5 * (o - d.width), this.bannerHome.style.top = l - d.height - 10), null != this.bannerHome && this.bannerHome.show()
                                })
                            }
                        }
                    }
                }, WXAPI.prototype.showBannerAdOtherFast = function() {
                    this.bannerOther ? this.bannerOther.show() : this.showBannerAdOther()
                }, WXAPI.prototype.showBannerAdOther = function(t) {
                    var e = this;
                    if (Laya.Browser.onQQMiniGame && this.isInited) {
                        this.destoryAllBannerAd();
                        var i = s.default.systemInfo.windowWidth,
                            a = i,
                            o = s.default.systemInfo.windowHeight;
                        this.bannerOtherIsHide = !1, Laya.timer.currTimer - this.preBannerTimeOther > s.default.loadConfig.zs_banner_refresh_time && this.bannerOther && (this.bannerOther.destroy(), this.bannerOther = null), this.bannerOther || (this.destroyBannerAdOther(), this.bannerOther = window.qq.createBannerAd({
                            adUnitId: "",
                            style: {
                                left: 0,
                                top: o - 100,
                                width: a
                            }
                        }), this.bannerOther.onResize(function(t) {
                            e.bannerOther.style.left = (i - e.bannerOther.style.realWidth) / 2, e.bannerOther.style.top = o - e.bannerOther.style.realHeight - 10, o / i > 2 && (e.bannerOther.style.top = e.bannerOther.style.top - 25)
                        }), this.bannerOther.onError(function(t) {
                            l.default.log("广告加载错误:", t)
                        }), this.preBannerTimeOther = Laya.timer.currTimer), t || null != this.bannerOther && this.bannerOther.show()
                    }
                }, WXAPI.prototype.showBannerAdClassicEndFast = function() {
                    this.bannerClassicEnd ? this.bannerClassicEnd.show() : this.showBannerAdClassicEnd()
                }, WXAPI.prototype.showBannerAdClassicEnd = function(t) {
                    var e = this;
                    if (Laya.Browser.onQQMiniGame && this.isInited) {
                        this.destoryAllBannerAd();
                        var i = s.default.systemInfo.windowWidth,
                            a = i,
                            o = s.default.systemInfo.windowHeight;
                        this.bannerClassicEndIsHide = !1, Laya.timer.currTimer - this.preBannerTimeOther > s.default.loadConfig.zs_banner_refresh_time && this.bannerClassicEnd && (this.bannerClassicEnd.destroy(), this.bannerClassicEnd = null), this.bannerClassicEnd || (this.destroyBannerAdClassicEnd(), this.bannerClassicEnd = window.qq.createBannerAd({
                            adUnitId: "adunit-dcacf7fd6e654b4d",
                            style: {
                                left: 0,
                                top: o - 100,
                                width: a
                            }
                        }), this.bannerClassicEnd.onError(function(t) {
                            l.default.log("广告加载错误:", t)
                        }), this.bannerClassicEnd.onResize(function(t) {
                            e.bannerClassicEnd.style.left = (i - e.bannerClassicEnd.style.realWidth) / 2, e.bannerClassicEnd.style.top = o - e.bannerClassicEnd.style.realHeight - 10, o / i > 2 && (e.bannerClassicEnd.style.top = e.bannerClassicEnd.style.top - 25)
                        }), this.preBannerTimeOther = Laya.timer.currTimer), t || null != this.bannerClassicEnd && this.bannerClassicEnd.show()
                    }
                }, WXAPI.prototype.destroyBannerAdHome = function() {
                    this.bannerHome && (this.preBannerTimeHome = 0, this.bannerHome.destroy(), this.bannerHome = null)
                }, WXAPI.prototype.destroyBannerAdOther = function() {
                    this.bannerOtherIsHide = !0, this.bannerOther && (this.preBannerTimeOther = 0, this.bannerOther.hide())
                }, WXAPI.prototype.destroyBannerAdClassicEnd = function() {
                    this.bannerClassicEndIsHide = !0, this.bannerClassicEnd && (this.preBannerTimeClassicEnd = 0, this.bannerClassicEnd.hide())
                }, WXAPI.prototype.destoryAllBannerAd = function() {
                    this.destroyBannerAdHome(), this.destroyBannerAdOther(), this.destroyBannerAdClassicEnd()
                }, WXAPI.prototype.misunderstandingClick = function() {
                    return s.default.loadConfig.zs_number != s.default.version && 1 == s.default.loadConfig.zs_switch
                }, WXAPI.prototype.bannerVerticalEnable = function() {
                    return 1 == s.default.loadConfig.zs_banner_vertical_enable
                }, WXAPI.prototype.bannerHorizontalEnable = function() {
                    return 1 == s.default.loadConfig.zs_banner_horizontal_enable
                }, WXAPI.prototype.mobileType = function() {
                    var t = navigator.userAgent;
                    return t.indexOf("Android") > -1 || t.indexOf("Linux") > -1 ? 0 : t.indexOf("iPhone") > -1 ? 1 : 0
                }, WXAPI.prototype.navigateToMiniProgram = function(t) {
                    l.default.log("  --------navigateToMiniProgram  "), this.shareBackArgs.notShowAd = t.notShowAd
                }, WXAPI.prototype.initAllBanner = function() {
                    var t = this;
                    if (!(t.bannerList.length <= 0) && this.isShowBannerAd())
                        for (var e = 0; e < t.bannerList.length; e++) {
                            var i = t.bannerArray[t.bannerList[e].id];
                            if (!i) {
                                var a = s.default.bannerAdUnitIdArr[Math.floor(Math.random() * s.default.bannerAdUnitIdArr.length)];
                                a ? (i = t.bannerArray[t.bannerList[e].id] = new h.default(a, t.bannerList[e].type, null)).createBanner() : t.bannerArray[t.bannerList[e].id] = null
                            }
                        }
                }, WXAPI.prototype.getBannerById = function(t) {
                    if (t) {
                        var e = this.bannerArray[t];
                        return console.log("获取banner", e), e
                    }
                }, WXAPI.prototype.destroyAllBanner = function() {
                    var t = this;
                    for (var e in t.bannerArray) {
                        var i = t.bannerArray[e];
                        i && i.destroy()
                    }
                    t.bannerArray = {}
                }, WXAPI.prototype.initAppBox = function() {
                    Laya.Browser.onQQMiniGame && s.default.loadConfig.zs_box_adunit && s.default.loadConfig.zs_number != s.default.version && s.default.loadConfig.zs_box_switch && !(s.default.loadConfig.zs_box_switch <= 0) && !this.appBoxAd && n.default.compareVersion(s.default.systemInfo.SDKVersion, "1.7.1") >= 0 && (this.appBoxAd = window.qq.createAppBox({
                        adUnitId: s.default.loadConfig.zs_box_adunit
                    }), this.appBoxAd.load())
                }, WXAPI.prototype.showAppBox = function() {
                    this.appBoxAd ? this.appBoxAd.show() : (console.log("广告盒子没有初始化~"), this.initAppBox())
                }, WXAPI.prototype.initBannerAD = function(t) {
                    this.bannerAd && (this.bannerAd.destroy(), this.bannerAd = null);
                    var e = Math.floor(Math.random() * s.default.bannerAdUnitIdArr.length),
                        i = s.default.bannerAdUnitIdArr[e],
                        a = window.qq.getSystemInfoSync();
                    if (this.bannerAd = window.qq.createBannerAd({
                            adUnitId: i,
                            style: {
                                top: a.windowHeight - 100,
                                width: .9 * a.windowWidth,
                                left: a.windowWidth * (.5 * (1 - .9))
                            }
                        }), null != this.bannerAd) {
                        var o = this;
                        this.bannerAd.onResize(function(t) {
                            console.log(a), o.bannerAd && (o.bannerAd.style.top = a.windowHeight - t.height - 10, o.bannerAd.style.left = .5 * (a.windowWidth - t.width))
                        }), this.bannerAd.onError(function(e) {
                            console.log(e), o.bannerAd = null, t && t.run()
                        })
                    }
                }, WXAPI.prototype.showBanner = function(t) {
                    null == this.bannerAd && (console.log("initBannerAD"), this.initBannerAD(t)), this.bannerAd && (console.log("showBannerAD"), this.bannerAd.show())
                }, WXAPI.prototype.destroyBanner = function() {
                    this.bannerAd && (this.bannerAd.destroy(), this.bannerAd = null, this.initBannerAD(null))
                }, WXAPI
            }();
        i.default = f
    }, {
        "../mgr3d/GameMgr": 10,
        "../mgrCommon/EventMgr": 12,
        "../mgrCommon/HttpMgr": 13,
        "../mgrCommon/SoundMgr": 15,
        "../mgrCommon/ViewMgr": 17,
        "../models/ConfigData": 18,
        "../models/UserData": 19,
        "../tools/MyLog": 24,
        "../tools/MyUtils": 25,
        "./BannerAd": 38
    }],
    42: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../models/ConfigData"),
            o = t("../mgrCommon/PlatformMgr"),
            n = t("../mgr3d/GameMgr"),
            s = t("../tools/MyLog"),
            r = t("../MyInit"),
            l = function(t) {
                function WXLaunch() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.toProcess = 1, e.progress = 0, e.scene3dUrl = "res3d/LayaScene_MainNoPhysical/Conventional/MainNoPhysical.ls", e.mainScene = null, e.ls = !0, e.addScene = !1, e
                }
                return __extends(WXLaunch, t), WXLaunch.prototype.onStart = function() {
                    Laya.loader.load("config/publishVer.json", Laya.Handler.create(this, function(t) {
                        a.default.version = t
                    }))
                }, WXLaunch.prototype.onEnable = function() {
                    this.owner.height = Laya.stage.height;
                    var t = this.owner.getChildByName("midl").getChildByName("progressGroup");
                    this.pro = t.getChildByName("progress"), this.proLabel = t.getChildByName("proLab"), this.loadRes(), console.log("Laya.Browser~~~~~~~~~~~", Laya.Browser.onQQMiniGame)
                }, WXLaunch.prototype.loadRes = function() {
                    var t = this,
                        e = [{
                            url: "res/atlas/common.atlas",
                            type: Laya.Loader.ATLAS
                        }, {
                            url: "res/atlas/game.atlas",
                            type: Laya.Loader.ATLAS
                        }, {
                            url: "res/atlas/main.atlas",
                            type: Laya.Loader.ATLAS
                        }, {
                            url: "res/atlas/over.atlas",
                            type: Laya.Loader.ATLAS
                        }, {
                            url: "res/atlas/polymerization.atlas",
                            type: Laya.Loader.ATLAS
                        }, {
                            url: "res/atlas/togetanewcar.atlas",
                            type: Laya.Loader.ATLAS
                        }, {
                            url: "res/atlas/togetmoney.atlas",
                            type: Laya.Loader.ATLAS
                        }, {
                            url: "res/atlas/togetanewcar/ef_wenzi_01.atlas",
                            type: Laya.Loader.ATLAS
                        }, {
                            url: "res/json/config.json",
                            type: Laya.Loader.JSON
                        }, {
                            url: "res/sound/0" + a.default.soundSuffix(),
                            type: Laya.Loader.SOUND
                        }, {
                            url: "res/sound/1" + a.default.soundSuffix(),
                            type: Laya.Loader.SOUND
                        }, {
                            url: "res/sound/2" + a.default.soundSuffix(),
                            type: Laya.Loader.SOUND
                        }, {
                            url: "res/sound/shache" + a.default.soundSuffix(),
                            type: Laya.Loader.SOUND
                        }, {
                            url: "res/sound/bg" + a.default.soundSuffix(),
                            type: Laya.Loader.SOUND
                        }, {
                            url: "res/sound/click" + a.default.soundSuffix(),
                            type: Laya.Loader.SOUND
                        }, {
                            url: "res/sound/tobig" + a.default.soundSuffix(),
                            type: Laya.Loader.SOUND
                        }, {
                            url: "res/sound/win" + a.default.soundSuffix(),
                            type: Laya.Loader.SOUND
                        }, {
                            url: "res/sound/fail" + a.default.soundSuffix(),
                            type: Laya.Loader.SOUND
                        }],
                        i = this;
                    Laya.Browser.onQQMiniGame ? (console.log("开始分包加载3d资源"), window.qq.loadSubpackage({
                        name: "res3d",
                        success: function(a) {
                            console.log("加载3d分包成功"), window.qq.loadSubpackage({
                                name: "res",
                                success: function(a) {
                                    Laya.loader.load(e, Laya.Handler.create(t, function() {
                                        i.updateProgress(.99), t.loadResComplete()
                                    }), Laya.Handler.create(t, function(t) {
                                        i.updateProgress(.6 + .4 * t)
                                    }))
                                },
                                fail: function(e) {
                                    t.loadRes()
                                }
                            }).onProgressUpdate(function(t) {
                                i.updateProgress(.3 + .003 * t.progress)
                            })
                        },
                        fail: function(e) {
                            t.loadRes()
                        }
                    }).onProgressUpdate(function(t) {
                        i.updateProgress(.003 * t.progress)
                    })) : (console.log("$$$$$$$$$$$$$$$$$$$$$"), Laya.loader.load(e, Laya.Handler.create(this, function() {
                        i.updateProgress(.99), t.loadResComplete()
                    }), Laya.Handler.create(this, function(t) {
                        i.updateProgress(t)
                    })))
                }, WXLaunch.prototype.loadResComplete = function() {
                    console.log("~~~加载3d场景！"), r.default.init(), Laya.Scene3D.load(this.scene3dUrl, Laya.Handler.create(this, this.On3DResLoadComplete))
                }, WXLaunch.prototype.On3DResLoadComplete = function(t) {
                    console.log("加载3d场景完成"), this.mainScene = t, o.default.callAPIMethodByProxy("setOpenDomainOffset")
                }, WXLaunch.prototype.updateProgress = function(t) {
                    var e = this;
                    this.progress = t, this.progress = this.progress > this.toProcess ? this.toProcess : this.progress, this.isDis || (this.progress >= 1 ? (this.isDis = !0, this.proLabel.text = "Đang tải game...", this.pro.width = 500, Laya.timer.frameOnce(2, this, function() {
                        e.owner.destroy(), Laya.loader.clearRes("loading/loading.atlas"), e.destroy()
                    })) : (this.pro.width = 500 * this.progress, this.proLabel.text = "Vui lòng đợi..." + Math.floor(100 * this.progress) + "%", "h5" == a.default.platformType && this.progress > 0 && this.loadingSuccess()))
                }, WXLaunch.prototype.loadingSuccess = function() {
                    this.ls && (this.ls = !1, o.default.callAPIMethodByProxy("loadingSuccess"))
                }, WXLaunch.prototype.onUpdate = function() {
                    this.mainScene && !this.addScene && (s.default.log("in game-------------------"), this.updateProgress(1), this.addScene = !0, this.mainScene.addComponent(n.default), Laya.stage.addChildAt(this.mainScene, 0))
                }, WXLaunch
            }(Laya.Script);
        i.default = l
    }, {
        "../MyInit": 5,
        "../mgr3d/GameMgr": 10,
        "../mgrCommon/PlatformMgr": 14,
        "../models/ConfigData": 18,
        "../tools/MyLog": 24
    }],
    43: [function(t, e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = Laya.ClassUtils.regClass;
        ! function(t) {
            var e = function(t) {
                function MakeSuerDiaUI() {
                    return t.call(this) || this
                }
                return __extends(MakeSuerDiaUI, t), MakeSuerDiaUI.prototype.createChildren = function() {
                    t.prototype.createChildren.call(this), this.loadScene("MakeSuerDia")
                }, MakeSuerDiaUI
            }(Laya.Dialog);
            t.MakeSuerDiaUI = e, a("ui.MakeSuerDiaUI", e);
            var i = function(t) {
                function TogetANewCarUI() {
                    return t.call(this) || this
                }
                return __extends(TogetANewCarUI, t), TogetANewCarUI.prototype.createChildren = function() {
                    t.prototype.createChildren.call(this), this.loadScene("TogetANewCar")
                }, TogetANewCarUI
            }(Laya.View);
            t.TogetANewCarUI = i, a("ui.TogetANewCarUI", i);
            var o = function(t) {
                function TogetMoneyUI() {
                    return t.call(this) || this
                }
                return __extends(TogetMoneyUI, t), TogetMoneyUI.prototype.createChildren = function() {
                    t.prototype.createChildren.call(this), this.loadScene("TogetMoney")
                }, TogetMoneyUI
            }(Laya.View);
            t.TogetMoneyUI = o, a("ui.TogetMoneyUI", o);
            var n = function(t) {
                function winUI() {
                    return t.call(this) || this
                }
                return __extends(winUI, t), winUI.prototype.createChildren = function() {
                    t.prototype.createChildren.call(this), this.loadScene("win")
                }, winUI
            }(Laya.View);
            t.winUI = n, a("ui.winUI", n)
        }(i.ui || (i.ui = {}))
    }, {}]
}, {}, [2]);