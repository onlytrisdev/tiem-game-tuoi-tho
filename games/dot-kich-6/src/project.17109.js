window.__require = function e(a, t, i) {
    function n(s, r) {
        if (!t[s]) {
            if (!a[s]) {
                var c = s.split("/");
                if (c = c[c.length - 1], !a[c]) {
                    var l = "function" == typeof __require && __require;
                    if (!r && l) return l(c, !0);
                    if (o) return o(c, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
            }
            var q = t[s] = {
                exports: {}
            };
            a[s][0].call(q.exports, function(e) {
                return n(a[s][1][e] || e)
            }, q, q.exports, e, a, t, i)
        }
        return t[s].exports
    }
    for (var o = "function" == typeof __require && __require, s = 0; s < i.length; s++) n(i[s]);
    return n
}({
    AdsMgr: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "c457926TBVG57yYkTqmcjqC", "AdsMgr"), cc._RF.pop()
    }, {}],
    Launch: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "1e6cfS0lMBJArol03/KKXKh", "Launch");
        var i = e("mg_ViewManager"),
            n = e("mg_ScreenAdapter"),
            o = e("mg_LeuokBi"),
            s = e("mg_RemoteConfigManager"),
            r = e("mg_BuildingInfo"),
            c = e("mg_WeChatGame"),
            l = e("mg_Tools"),
            q = e("mg_ConfigDataManager"),
            h = e("mg_UserDataManager"),
            g = e("mg_CDB"),
            u = e("mg_ViewHome"),
            d = (e("mg_WXSubManager"), e("mg_ViewBattle")),
            m = cc.Class({
                extends: cc.Component,
                properties: {
                    qviewLoadinga: cc.Node,
                    ver: cc.Label,
                    qprogressLba: cc.Label,
                    qprogressBara: cc.ProgressBar,
                    bg: cc.Node
                },
                statics: {},
                ctor: function() {},
                randomString: function(e) {
                    e = e || 6;
                    for (var a = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", t = a.length, i = "", n = 0; n < e; n++) i += a.charAt(Math.floor(Math.random() * t));
                    return i
                },
                createUserId: function() {
                    var e = new Date;
                    return this.randomString(6) + e.getTime()
                },
                start: function() {
                    cc.game4399Mgr = {
                        _isShowing: 0,
                        _time: 0,
                        showVideoAD: function(e, a) {
                            if (cc.game4399Mgr._isShowing) return "undefined" != typeof TipsUI && TipsUI.show && TipsUI.show("B\u1ea1n b\u1ea5m qu\u00e1 nhanh!"), void console.log("[GVAdBreak] already showing");
                            cc.game4399Mgr._isShowing = !0;
                            var t = function() {
                                cc.game4399Mgr._isShowing = !1
                            };
                            if ("function" == typeof window.GVAdBreak) return cc.audioEngine.pauseAll(), void window.GVAdBreak(function() {
                                cc.audioEngine.resumeAll(), t(), e && e()
                            });
                            console.log("[GVAdBreak] not available, grant reward"), t(), e && e()
                        },
                        canPlayVideo: function() {
                            window.h5api.canPlayAd(function(e) {
                                return !!e.canPlayAd
                            })
                        },
                        showInsertAd: function() {},
                        showBanner: function() {},
                        hideBanner: function() {},
                        // showMoreGame: function() {
                            // console.log("\u66f4\u591a\u6e38\u620f"), window.h5api.showRecommend()
                        // }
                    }, n.ScreenAdapter.getInstance().qscreenFita(), o.LeuokBi.init(), o.LeuokBi.qsafeCalla("qappOncea", {
                        qactionNumbera: 1
                    }), this.onOpen()
                },
                onOpen: function() {
                    var e = n.ScreenAdapter.getInstance().getRet();
                    e > 1 && (this.bg.width = this.bg.width * e, this.bg.height = this.bg.height * e, this.bg.y = -this.bg.height / 2);
                    var a = this;
                    this.scheduleOnce(function() {
                        if (s.default.getInstance().qloadRemoteConfiga(), o.LeuokBi.qsafeCalla("qappOncea", {
                                qactionNumbera: 2
                            }), i.ViewManager.getInstance().qturnOffScreenClicka(), a.preLoadSpine(), r.default.qisWXChannela()) {
                            var e = c.WeChatGame.getInstance().qgetDeviceInfoa().qbenchmarkLevela;
                            e > 0 && e < 7 && l.Tools.setFPS(30)
                        }
                    }), this.ver.string = r.default.qgetVersiona()
                },
                qpreLoadResourcea: function() {
                    var e = this;
                    console.log("\u9884\u52a0\u8f7d\u8d44\u6e90");
                    var a = this;
                    cc.loader.loadResDir("prefab/battle/ui", cc.Prefab, function(e, t, i) {
                        a.onReceiveMessage({
                            type: "Download",
                            progress: e / t
                        })
                    }, function(t, i) {
                        if (t) return console.error(t), void e.qpreLoadResourcea();
                        q.default.getInstance().qloadAllConfigDataa(function(e) {
                            a.onReceiveMessage(e)
                        })
                    })
                },
                preLoadSpine: function() {
                    var e = this;
                    console.log("\u9884\u52a0\u8f7dspine");
                    var a = this;
                    cc.loader.loadResDir("spine", sp.SkeletonData, function(e, t, i) {
                        a.onReceiveMessage({
                            type: "LoadSpine",
                            progress: e / t
                        })
                    }, function(t, i) {
                        if (t) return console.error(t), void e.preLoadSpine();
                        for (var n = 0, o = i; n < o.length; n++) o[n];
                        a.qpreLoadResourcea()
                    })
                },
                qpreLoadUzia: function() {
                    var e = this;
                    cc.loader.loadRes("prefab/gun/mg_uzi", cc.Prefab, function(a, t) {
                        if (a) return console.error(a), void e.qpreLoadUzia();
                        console.log("preload quzia"), e.qpreLoad98Ka()
                    })
                },
                qpreLoad98Ka: function() {
                    var e = this;
                    cc.loader.loadRes("prefab/gun/mg_98K", cc.Prefab, function(a, t) {
                        if (a) return console.error(a), void e.qpreLoad98Ka();
                        console.log("preload q98Ka"), e.qpreLoad98Kicona()
                    })
                },
                qpreLoad98Kicona: function() {
                    var e = this;
                    cc.loader.loadRes("img/gun/q98Ka", cc.SpriteFrame, function(a, t) {
                        if (a) return console.error(a), void e.qpreLoad98Kicona();
                        console.log("preload q98Ka icon")
                    })
                },
                onReceiveMessage: function(e) {
                    l.Tools.qapplyCabinFontToLabela(this.qprogressLba);
                    if ("ConfigProgress" == e.type) e.errMsg ? this.qprogressLba.string = e.errMsg : (this.qprogressLba.string = "\u0110ang t\u1ea3i c\u1ea5u h\u00ecnh..." + (100 * e.progress).toFixed(0) + "%", this.qprogressBara.progress = e.progress, console.log(this.qprogressLba.string));
                    else if ("Download" == e.type) e.errMsg ? this.qprogressLba.string = e.errMsg : (this.qprogressLba.string = "\u0110ang t\u1ea3i t\u00e0i nguy\u00ean..." + (100 * e.progress).toFixed(0) + "%", this.qprogressBara.progress = e.progress);
                    else if ("LoadSpine" == e.type) e.errMsg ? this.qprogressLba.string = e.errMsg : (this.qprogressLba.string = "\u0110ang t\u1ea3i ho\u1ea1t \u1ea3nh..." + (100 * e.progress).toFixed(0) + "%", this.qprogressBara.progress = e.progress);
                    else if ("ConfigLoaded" == e.type) {
                        this.qprogressLba.string = "\u0110ang t\u1ea3i c\u1ea3nh", o.LeuokBi.qsafeCalla("qappOncea", {
                            qactionNumbera: 3
                        });
                        r.default.qgetChannelTypea() == r.qChannelTypea.WX ? c.WeChatGame.getInstance().qwxLogina(function() {
                            c.WeChatGame.getInstance().qgetWxUserInfoa(function(e) {
                                console.log("\u7528\u6237\u6388\u6743\u72b6\u6001\uff1a" + e)
                            })
                        }) : function() {
                            var self = this;
                            window.GVGameSave && window.GVGameSave.isEnabled() ? window.GVGameSave.loadFromCloud(function() {
                                h.qUserDataMgra.getInstance().getUserData(), self.qgotoHomea()
                            }) : (h.qUserDataMgra.getInstance().getUserData(), self.qgotoHomea())
                        }.call(this)
                    } else "qenterBattlea" == e.type && (e.errMsg ? this.qprogressLba.string = e.errMsg : (this.qprogressLba.string = "V\u00e0o chi\u1ebfn \u0111\u1ea5u..." + (100 * e.progress).toFixed(0) + "%", this.qprogressBara.progress = e.progress, console.log(this.qprogressLba.string)))
                },
                qdealLogina: function() {
                    r.default.qgetPublishTypea() == r.qPublishTypea.Debug ? g.CDB.qdebugModea = !0 : g.CDB.qdebugModea = !1;
                    var e = c.WeChatGame.getInstance(),
                        a = 0;
                    "android" == e.qplatforma ? a = 3 : "ios" == e.qplatforma && (a = 1), console.log(g.CDB);
                    var t = this,
                        i = {
                            gameId: 114,
                            qchannelIda: 1002,
                            platId: a,
                            code: e.code,
                            qtimestampsa: Math.floor((new Date).valueOf() / 1e3).toString(),
                            success: function(e) {
                                console.log("CDB login Success \u4e0a\u884c:" + JSON.stringify(i) + " \u4e0b\u884c:" + JSON.stringify(e)), console.log("\u52a0\u8f7dhome\u573a\u666f"), h.qUserDataMgra.getInstance().uid = e.info.uid, console.log("uid:" + h.qUserDataMgra.getInstance().uid), h.qUserDataMgra.getInstance().getUserData(), t.qgetCDBdataa(function() {
                                    t.qgotoHomea()
                                })
                            },
                            fail: function(e) {
                                console.error("CDB login Fail \u4e0a\u884c:" + JSON.stringify(i) + " \u4e0b\u884c:" + JSON.stringify(e)), h.qUserDataMgra.getInstance().getUserData(), t.qgotoHomea()
                            }
                        };
                    g.CDB.login(i)
                },
                qgetCDBdataa: function(e) {
                    if (r.default.qisWXChannela()) {
                        var a = this,
                            t = {
                                key: 1,
                                sdType: 0,
                                success: function(i) {
                                    console.log("CDB GetUserData Success \u4e0a\u884c:" + JSON.stringify(t) + " \u4e0b\u884c:" + JSON.stringify(i)), l.Tools.qisNullOrUndefineda(i.info) && (c.WeChatGame.getInstance().qcheckLaunchOptionsa(), a.qsaveUserFlagToCDBa()), e && e()
                                },
                                fail: function(a) {
                                    console.error("CDB GetUserData Fail \u4e0a\u884c:" + JSON.stringify(t) + " \u4e0b\u884c:" + JSON.stringify(a)), e && e()
                                }
                            };
                        g.CDB.getUserData(t)
                    }
                },
                qsaveUserFlagToCDBa: function(e) {
                    if (void 0 === e && (e = null), r.default.qgetChannelTypea() == r.qChannelTypea.WX) {
                        console.log("\u5199\u5165\u8001\u7528\u6237\u6807\u5fd7 save user flag into CDB");
                        var a = {
                            key: 1,
                            value: "1",
                            success: function(e) {
                                console.log("CDB qsetPrivateDataa Success \u4e0a\u884c:" + JSON.stringify(a) + " \u4e0b\u884c:" + JSON.stringify(e))
                            },
                            fail: function(e) {
                                console.error("CDB qsetPrivateDataa Fail \u4e0a\u884c:" + JSON.stringify(a) + " \u4e0b\u884c:" + JSON.stringify(e))
                            },
                            complete: function(a) {
                                e && e()
                            }
                        };
                        g.CDB.qsetPrivateDataa(a)
                    }
                },
                qgotoHomea: function() {
                    if (i.ViewManager.getInstance().qturnOnScreenClicka(), 1 == h.qUserDataMgra.getInstance().data.qguideIda || 2 == h.qUserDataMgra.getInstance().data.qguideIda) o.LeuokBi.qsafeCalla("qappOncea", {
                        qactionNumbera: 4
                    }), l.Tools.qapplyCabinFontToLabela(this.qprogressLba), this.qprogressLba.string = "V\u00e0o chi\u1ebfn \u0111\u1ea5u...0%", this.qprogressBara.progress = 0, this.qenterBattlea();
                    else {
                        var e = this;
                        i.ViewManager.getInstance().qopenViewa({
                            View: u.ViewHome,
                            qCustomDataa: {
                                qisFromLoadinga: !0
                            },
                            qFinishedCbka: function() {
                                e && e.qviewLoadinga && e.qviewLoadinga.destroy()
                            }
                        })
                    }
                    h.qUserDataMgra.getInstance().qsetTotalShareByLocationa()
                },
                qpreLoadHomea: function() {
                    var e = this;
                    cc.loader.loadRes("prefab/battle/mg_ViewBattle", cc.Prefab, function(a, t) {
                        if (a) return console.error(a), void e.qpreLoadHomea();
                        e.qenterBattlea()
                    })
                },
                qenterBattlea: function() {
                    o.LeuokBi.qsafeCalla("qappOncea", {
                        qactionNumbera: 5
                    });
                    var e = this;
                    cc.loader.loadRes("prefab/battle/mg_ViewBattle", cc.Prefab, function(a, t) {
                        if (a) return console.error(a), void e.qenterBattlea();
                        var n = cc.instantiate(t),
                            s = n.getComponent(d.ViewBattle),
                            r = h.qUserDataMgra.getInstance().data,
                            c = l.Tools.qgetTimestampMSa();
                        s.qpreLoada(r.qweaponIDa, r.qsecondWeaponIDa, r.qcurStageIDa, function(a) {
                            e.onReceiveMessage({
                                type: "qenterBattlea",
                                progress: a
                            })
                        }, function() {
                            console.log("load battle:" + (l.Tools.qgetTimestampMSa() - c)), h.qUserDataMgra.getInstance().data.qguideIda = 2, e && e.qviewLoadinga && e.qviewLoadinga.destroy(), i.ViewManager.getInstance().qshowViewa(n, {
                                View: d.ViewBattle
                            }), o.LeuokBi.qsafeCalla("adLogin", {}), o.LeuokBi.qsafeCalla("qappOncea", {
                                qactionNumbera: 6
                            })
                        })
                    })
                }
            });
        t.default = m, cc._RF.pop()
    }, {
        mg_BuildingInfo: "mg_BuildingInfo",
        mg_CDB: "mg_CDB",
        mg_ConfigDataManager: "mg_ConfigDataManager",
        mg_LeuokBi: "mg_LeuokBi",
        mg_RemoteConfigManager: "mg_RemoteConfigManager",
        mg_ScreenAdapter: "mg_ScreenAdapter",
        mg_Tools: "mg_Tools",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewBattle: "mg_ViewBattle",
        mg_ViewHome: "mg_ViewHome",
        mg_ViewManager: "mg_ViewManager",
        mg_WXSubManager: "mg_WXSubManager",
        mg_WeChatGame: "mg_WeChatGame"
    }],
    NativeAd: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "9baccrnHwpAlqV4eEDRkr4q", "NativeAd"), cc.Class({
            extends: cc.Component,
            properties: {
                imageNode: cc.Sprite,
                _msg: null
            },
            start: function() {},
            onEnable: function() {
                this.node.active = !1
            },
            onclickIt: function() {
                this._msg && qg.adsMgr._nativeAd && qg.adsMgr._nativeAd.reportAdClick({
                    adId: this._msg.adId
                })
            },
            onDisable: function() {
                this.node.active = !1, this._msg = null, this.imageNode.spriteFrame = "", qg.adsMgr._nativeAd && qg.adsMgr.reCreateNativeAd()
            }
        }), cc._RF.pop()
    }, {}],
    mg_AudioManager: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "a915e6h3GFFV7ok7Qzwm3Gz", "mg_AudioManager"), Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            function(e) {
                e.Click = "ui_1", e.qViewGameBgma = "bgm", e.qChangeWeapona = "reload_gun_1", e.qBossWarna = "sound_fight_bosschuxian"
            }(t.qAudioSourceNamea || (t.qAudioSourceNamea = {}));
        var i = cc._decorator,
            n = (i.qccclassa, i.property, cc.Class({
                extends: cc.Component,
                properties: {},
                statics: {
                    getInstance: function() {
                        return null == this.instance && (this.instance = new o, this.instance.init()), this.instance
                    },
                    instance: null
                },
                ctor: function() {
                    this.volume = null, this.enable = !0
                },
                init: function() {
                    this.volume = 1
                },
                setEnable: function(e) {
                    this.enable = e, e ? this.qresumeAllAudioa() : this.qpauseAllAudioa()
                },
                preload: function(e) {
                    cc.loader.loadRes("audio/" + e, cc.AudioClip, function(e, a) {
                        e && console.warn(e)
                    })
                },
                play: function(e, a, t) {
                    if (void 0 === a && (a = !1), this.enable, e) {
                        var i = this;
                        cc.loader.loadRes("audio/" + e, cc.AudioClip, function(e, n) {
                            if (e) return console.warn(e), void(t && t(0));
                            var o = cc.audioEngine.play(n, a, i.volume);
                            t && t(o)
                        })
                    } else t && t(0)
                },
                qpauseAudioa: function(e) {
                    cc.audioEngine.pause(e)
                },
                qresumeAudioa: function(e) {
                    cc.audioEngine.resume(e)
                },
                qpauseAllAudioa: function() {
                    cc.audioEngine.pauseAll()
                },
                qresumeAllAudioa: function() {
                    cc.audioEngine.resumeAll()
                },
                stop: function(e) {
                    cc.audioEngine.stop(e)
                }
            }));
        t.default = n;
        var o = n;
        cc._RF.pop()
    }, {}],
    mg_Box: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "36fe9KO8EBMS4fAKaAnNopR", "mg_Box");
        var i = cc._decorator,
            n = (i.qccclassa, i.property, cc.Class({
                extends: cc.Component,
                properties: {
                    qParachutea: cc.Node
                },
                statics: {},
                ctor: function() {
                    this.qopenCallbacka = null
                },
                qairbornea: function(e) {
                    this.qopenCallbacka = e;
                    var a = new cc.Vec2(0, -120);
                    this.node.setPosition(0, 530), this.node.zIndex = cc.macro.MAX_ZINDEX, this.qParachutea.active = !0;
                    var t = this,
                        i = (this.node.y - a.y) / 200;
                    this.node.runAction(cc.sequence(cc.moveTo(i, a), cc.callFunc(function() {
                        t.qParachutea.active = !1
                    })))
                },
                onBoxOpen: function() {
                    this.qopenCallbacka && (this.qopenCallbacka(), this.qopenCallbacka = null, this.node.destroy())
                }
            }));
        t.default = n, cc._RF.pop()
    }, {}],
    mg_BuildingInfo: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "9931exw8P5Hg7lfNvv2FYwL", "mg_BuildingInfo");
        var i = {
            WX: 0,
            H5: 1,
            QQPlay: 2,
            0: "WX",
            1: "H5",
            2: "QQPlay"
        };
        t.qChannelTypea = i;
        var n = {
            Debug: 0,
            qReleasea: 1,
            0: "Debug",
            1: "qReleasea"
        };
        t.qPublishTypea = n, t.default = {
            qchannela: i.H5,
            qpublisha: n.Debug,
            version: "1.0.5",
            useCDB: !1,
            qisUseSpineBBoxa: !1,
            qgetChannelTypea: function() {
                return this.qchannela
            },
            qgetPublishTypea: function() {
                return this.qpublisha
            },
            qgetVersiona: function() {
                return this.version
            },
            qgetCDNServerDomaina: function() {
                return ""
            },
            qisWXChannela: function() {
                return this.qgetChannelTypea() == i.WX
            },
            qisH5Channela: function() {
                return this.qgetChannelTypea() == i.H5
            },
            qisQQPlaya: function() {
                return this.qgetChannelTypea() == i.QQPlay
            },
            qisUseCDBa: function() {
                return this.useCDB
            },
            qgetConfigZipFileRootPatha: function() {
                return this.qgetCDNServerDomaina() + "/rxqt/bl2/" + this.version + "/"
            },
            qgetShareImgRootPatha: function() {
                return ""
            }
        }, cc._RF.pop()
    }, {}],
    mg_Bullet: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "5e3fewnP3tEJrXWGgIuswUl", "mg_Bullet");
        var i, n = e("mg_Tools"),
            o = e("mg_AudioManager");
        (function(e) {
            e[e.Bullet = 0] = "Bullet", e[e.qSniperBulleta = 1] = "qSniperBulleta"
        })(i = t.qBulletTypea || (t.qBulletTypea = {}));
        var s = cc._decorator,
            r = (s.qccclassa, s.property, cc.Class({
                extends: cc.Component,
                properties: {
                    qbulleta: cc.Node,
                    qsniperBulleta: cc.Node,
                    qanimRoota: cc.Node,
                    miss: cc.Node,
                    damTxt: cc.Node,
                    spark: cc.Node
                },
                statics: {},
                ctor: function() {
                    this.isUsed = !1
                },
                flyTo: function(e, a, t, n, o, s) {
                    var r, c, l = this;
                    if (this.miss.stopAllActions(), this.miss.active = !1, this.spark.active = !1, this.damTxt.active = !1, this.node.setPosition(a), n /= 1e3, e == i.Bullet) {
                        this.qbulleta.active = !0, this.qsniperBulleta.active = !1, this.node.setScale(1), this.qbulleta.setRotation(o);
                        var q = cc.scaleTo(n, .2),
                            h = cc.moveTo(n, t);
                        c = cc.spawn(h, q)
                    } else e == i.qSniperBulleta && (this.qbulleta.active = !1, this.qsniperBulleta.active = !0, this.node.setScale(1), c = cc.scaleTo(n, .2));
                    r = cc.sequence(c, cc.callFunc(function() {
                        l.qbulleta.active = !1, l.qsniperBulleta.active = !1, s && s()
                    })), this.node.runAction(r)
                },
                qshowMissa: function(e) {
                    this.miss.setPosition(0, 0), this.miss.active = !0, this.miss.opacity = 255, this.miss.stopAllActions(), this.miss.scale = 1 / this.node.scale, this.miss.runAction(cc.sequence(cc.moveBy(.5, 0, 550), cc.fadeOut(.5), cc.callFunc(function() {
                        e && e()
                    })))
                },
                qshowDama: function(e, a, t, i) {
                    this.damTxt.setPosition(0, 0), this.damTxt.getComponent(cc.Label).string = e, this.damTxt.active = !0, this.damTxt.opacity = 255, this.damTxt.stopAllActions(), a ? (this.damTxt.scale = 1.5 / this.node.scale, this.damTxt.color = cc.Color.RED) : (this.damTxt.scale = 1 / this.node.scale, this.damTxt.color = cc.Color.WHITE), t && (this.damTxt.scale = this.damTxt.scale / 3), this.damTxt.runAction(cc.sequence(cc.spawn(cc.moveBy(.7, 0, 550), cc.fadeOut(.7)), cc.callFunc(function() {
                        i && i()
                    })))
                },
                unuse: function() {
                    for (var e = 0, a = this.qanimRoota.children; e < a.length; e++) {
                        var t = a[e];
                        t.getComponent(cc.Animation).stop(), t.active = !1
                    }
                    this.miss.stopAllActions(), this.miss.active = !1, this.spark.active = !1, this.node.cleanup()
                },
                reuse: function() {},
                qplayHitEffecta: function(e, a, t) {
                    if (void 0 === a && (a = null), void 0 === t && (t = .4), this.node.parent) {
                        if (e.qisShielda) this.qplayHitShielda();
                        else {
                            var i = this.qanimRoota.getChildByName(e.qhitEffecta);
                            i.active = !0, i.setScale(t / this.node.scale), i.rotation = n.Tools.qgetRandomArbitrarya(0, 360), i.getComponent(cc.Animation).play()
                        }
                        a && this.node.runAction(cc.sequence(cc.delayTime(.7), cc.callFunc(function() {
                            a()
                        })))
                    } else a && a()
                },
                qplayHitShielda: function() {
                    o.default.getInstance().play("yx_hit_tank_1"), this.spark.active = !0, this.spark.setScale(.4 / this.node.scale), this.spark.rotation = n.Tools.qgetRandomArbitrarya(0, 360), this.spark.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "huoxing_1", !1)
                }
            }));
        t.default = r, cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_Tools: "mg_Tools"
    }],
    mg_CDB: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "a79aamoGN9ApprsNYHn8/bT", "mg_CDB");
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = "function" == typeof Symbol && "symbol" == i(Symbol.qiteratora) ? function(e) {
                return void 0 === e ? "undefined" : i(e)
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : i(e)
            },
            o = t.CDB = {
                qdebugModea: !1,
                gameId: 0,
                qchannelIda: 0,
                uid: 0,
                token: "",
                quniqueKeya: "",
                qsdkVersiona: "1.7",
                qchannelTypea: {
                    WX: 1002,
                    FACEBOOK: 7001,
                    MQQ: 2003,
                    OPPO: 8001,
                    vivo: 9001
                },
                qgetServerTimea: function(e) {
                    var a = o._url() + o._linkInfo.qkeyServerTimea;
                    o._check(e, o._linkInfo.qkeyServerTimea) || o._httpRequest(a, e, "GET")
                },
                login: function(e) {
                    if (!o._check(e, o._linkInfo.qkeyLogina)) {
                        e.data = e.data ? e.data : "";
                        var a = o._url() + o._linkInfo.qkeyLogina;
                        o.gameId = e.gameId, o.qchannelIda = e.qchannelIda, o._httpRequest(a, e, null, function(a) {
                            if (0 == a.state && a.info) {
                                o.uid = a.info.uid, o.token = a.info.token, o.quniqueKeya = a.info.quniqueKeya;
                                var t = o._getPlatObject();
                                t && (t.cdb.uid = o.uid, t.cdb.token = o.token, t.cdb.openId = a.info.openId || e.data.openId || "", t.cdb.quniqueKeya = o.quniqueKeya)
                            }
                            o._logInfo()
                        })
                    }
                },
                qgetWxDecryptionDataa: function(e) {
                    if ("object" === (void 0 === e ? "undefined" : n(e))) {
                        e.quniqueKeya = o.quniqueKeya, e.appid = o.gameId.toString(), e.qchannela = o.qchannelIda.toString();
                        var a = o._serviceUrl() + o._linkInfo.qkeyGetWxDecryptionDataa;
                        if (o._check(e, o._linkInfo.qkeyGetWxDecryptionDataa)) return;
                        o._httpRequest(a, e)
                    } else console.error("CDB getWxUnionKey ERROR params Type")
                },
                qsetPrivateDataa: function(e) {
                    var a = o._url() + o._linkInfo.qkeySavePrivateDataa;
                    o._check(e, o._linkInfo.qkeySavePrivateDataa) || o._httpRequest(a, e)
                },
                qsetPrivateDatasa: function(e) {
                    var a = o._url() + o._linkInfo.qkeySavePrivateDatasa;
                    o._check(e, o._linkInfo.qkeySavePrivateDatasa) || o._httpRequest(a, e)
                },
                qsetPublicDataa: function(e) {
                    var a = o._url() + o._linkInfo.qkeySavePublicDataa;
                    o._check(e, o._linkInfo.qkeySavePublicDataa) || o._httpRequest(a, e)
                },
                qsetOtherDataa: function(e) {
                    var a = o._url() + o._linkInfo.qkeySaveOhterDataa;
                    o._check(e, o._linkInfo.qkeySaveOhterDataa) || o._httpRequest(a, e)
                },
                getUserData: function(e) {
                    var a = o._url() + o._linkInfo.qkeyGetUserDataa;
                    o._check(e, o._linkInfo.qkeyGetUserDataa) || o._httpRequest(a, e)
                },
                qgetUserDatasa: function(e) {
                    var a = o._url() + o._linkInfo.qkeyGetUserDatasa;
                    o._check(e, o._linkInfo.qkeyGetUserDatasa) || o._httpRequest(a, e)
                },
                qgetUsersa: function(e) {
                    var a = o._url() + o._linkInfo.qkeyGetUsersa;
                    o._check(e, o._linkInfo.qkeyGetUsersa) || o._httpRequest(a, e)
                },
                qdeleteSelfDatasFromOthersa: function(e) {
                    var a = o._url() + o._linkInfo.qkeyDeleteSelfDatasFromOthersa;
                    o._check(e, o._linkInfo.qkeyDeleteSelfDatasFromOthersa) || o._httpRequest(a, e)
                },
                qgetRankListDataa: function(e) {
                    var a = o._url() + o._linkInfo.qkeyGetRankListDataa;
                    o._check(e, o._linkInfo.qkeyGetRankListDataa) || o._httpRequest(a, e)
                },
                qgetMyRankDataa: function(e) {
                    var a = o._url() + o._linkInfo.qkeyGetMyRankDataa;
                    o._check(e, o._linkInfo.qkeyGetMyRankDataa) || o._httpRequest(a, e)
                },
                qsetWorldRankDataa: function(e) {
                    var a = o._url() + o._linkInfo.qkeyAppendRankDataa;
                    o._check(e, o._linkInfo.qkeyAppendRankDataa) || o._httpRequest(a, e)
                },
                qgetOthersDataa: function(e) {
                    var a = o._url() + o._linkInfo.qkeyGetOthersDataa;
                    o._check(e, o._linkInfo.qkeyGetOthersDataa) || o._httpRequest(a, e)
                },
                qgetLocationInfoa: function(e) {
                    var a = o._url() + o._linkInfo.qkeyGetLocationa;
                    o._check(e, o._linkInfo.qkeyGetLocationa) || o._httpRequest(a, e)
                },
                qgetRandomUserInfosa: function(e) {
                    var a = o._url() + o._linkInfo.qkeyGetRandomUsersa;
                    o._check(e, o._linkInfo.qkeyGetRandomUsersa) || o._httpRequest(a, e)
                },
                qupdateWxUserInfoa: function(e) {
                    var a = o._url() + o._linkInfo.qkeyUpdateUserInfoa;
                    o._check(e, o._linkInfo.qkeyUpdateUserInfoa) || o._httpRequest(a, e)
                },
                qdeleteUserDatasa: function(e) {
                    var a = o._url() + o._linkInfo.qkeyDeleteSelfDatasa;
                    o._check(e, o._linkInfo.qkeyDeleteSelfDatasa) || o._httpRequest(a, e)
                },
                qcalculateUserDataa: function(e) {
                    var a = o._url() + o._linkInfo.qkeyCalculateDataa;
                    o._check(e, o._linkInfo.qkeyCalculateDataa) || o._httpRequest(a, e)
                },
                qcalculateUserDatasa: function(e) {
                    var a = o._url() + o._linkInfo.qkeyCalculateDatasa;
                    o._check(e, o._linkInfo.qkeyCalculateDatasa) || o._httpRequest(a, e)
                },
                qgetOthersKeysDataa: function(e) {
                    var a = o._url() + o._linkInfo.qkeyGetOthersKeysDataa;
                    o._check(e, o._linkInfo.qkeyGetOthersKeysDataa) || o._httpRequest(a, e)
                },
                _check: function(e, a) {
                    var t = function(e) {
                            return null == e || void 0 == e
                        },
                        i = function(e) {
                            return "number" == typeof e
                        },
                        s = function(e) {
                            return "string" == typeof e
                        },
                        r = function(e) {
                            return "object" === (void 0 === e ? "undefined" : n(e))
                        };
                    if (a == o._linkInfo.qkeyLogina) {
                        if (t(e.gameId) || t(e.qchannelIda) || t(e.platId) || t(e.qtimestampsa)) return console.error("CDB Error Params : " + JSON.stringify(e)), !0;
                        if (!(i(e.gameId) && i(e.qchannelIda) && i(e.platId) && s(e.qtimestampsa))) return console.error("CDB Error Params Type : " + JSON.stringify(e)), !0
                    } else if (a == o._linkInfo.qkeySavePrivateDataa) {
                        if (t(e.key) || t(e.value)) return console.error("CDB Error Params : " + JSON.stringify(e)), !0;
                        if (!i(e.key) || !s(e.value)) return console.error("CDB Error Params Type : " + JSON.stringify(e)), !0
                    } else if (a == o._linkInfo.qkeySavePrivateDatasa) {
                        if (t(e.data)) return console.error("CDB Error Params : " + JSON.stringify(e)), !0;
                        if (!r(e.data)) return console.error("CDB Error Params Type : " + JSON.stringify(e)), !0
                    } else if (a == o._linkInfo.qkeyGetUserDataa) {
                        if (t(e.key) || t(e.sdType)) return console.error("CDB Error Params : " + JSON.stringify(e)), !0;
                        if (!i(e.key) || !i(e.sdType)) return console.error("CDB Error Params Type : " + JSON.stringify(e)), !0
                    } else if (a == o._linkInfo.qkeyGetUserDatasa) {
                        if (t(e.keys) || t(e.sdType)) return console.error("CDB Error Params : " + JSON.stringify(e)), !0;
                        if (!r(e.keys) || !i(e.sdType)) return console.error("CDB Error Params Type : " + JSON.stringify(e)), !0
                    } else if (a == o._linkInfo.qkeySavePublicDataa) {
                        if (t(e.key) || t(e.score)) return console.error("CDB Error Params : " + JSON.stringify(e)), !0;
                        if (!i(e.key) || !i(e.score)) return console.error("CDB Error Params Type : " + JSON.stringify(e)), !0
                    } else if (a == o._linkInfo.qkeyGetOthersDataa) {
                        if (t(e.key) || t(e.qotherUidsa)) return console.error("CDB Error Params : " + JSON.stringify(e)), !0;
                        if (!i(e.key) || !r(e.qotherUidsa)) return console.error("CDB Error Params Type : " + JSON.stringify(e)), !0
                    } else if (a == o._linkInfo.qkeySaveOhterDataa) {
                        if (t(e.key) || t(e.qotherUida) || t(e.value)) return console.error("CDB Error Params : " + JSON.stringify(e)), !0;
                        if (!i(e.key) || !s(e.qotherUida) || !s(e.value)) return console.error("CDB Error Params Type : " + JSON.stringify(e)), !0
                    } else if (a == o._linkInfo.qkeyAppendRankDataa) {
                        if (t(e.key) || t(e.score)) return console.error("CDB Error Params : " + JSON.stringify(e)), !0;
                        if (!i(e.key) || !i(e.score)) return console.error("CDB Error Params Type : " + JSON.stringify(e)), !0
                    } else if (a == o._linkInfo.qkeyGetRankListDataa) {
                        if (t(e.key)) return console.error("CDB Error Params : " + JSON.stringify(e)), !0;
                        if (!i(e.key)) return console.error("CDB Error Params Type : " + JSON.stringify(e)), !0;
                        if (e.qotherUserDataKeysa && !r(e.qotherUserDataKeysa)) return console.error("CDB Error Params Type : " + JSON.stringify(e)), !0
                    } else if (a == o._linkInfo.qkeyGetMyRankDataa) {
                        if (t(e.key)) return console.error("CDB Error Params : " + JSON.stringify(e)), !0;
                        if (!i(e.key)) return console.error("CDB Error Params Type : " + JSON.stringify(e)), !0;
                        if (e.qotherUserDataKeysa && !r(e.qotherUserDataKeysa)) return console.error("CDB Error Params Type : " + JSON.stringify(e)), !0
                    } else if (a == o._linkInfo.qkeyGetUsersa) {
                        if (t(e.qotherUidsa)) return console.error("CDB Error Params : " + JSON.stringify(e)), !0;
                        if (!r(e.qotherUidsa)) return console.error("CDB Error Params Type : " + JSON.stringify(e)), !0
                    } else if (a == o._linkInfo.qkeyGetRandomUsersa) {
                        if (!t(e.num) && !i(e.num)) return console.error("CDB Error Params Type : " + JSON.stringify(e)), !0
                    } else if (a == o._linkInfo.qkeyDeleteSelfDatasFromOthersa) {
                        if (t(e.key) || t(e.values)) return console.error("CDB Error Params : " + JSON.stringify(e)), !0;
                        if (!i(e.key) || !r(e.values)) return console.error("CDB Error Params Type : " + JSON.stringify(e)), !0
                    } else if (a == o._linkInfo.qkeyDeleteSelfDatasa) {
                        if (0 == o.qdebugModea) return console.error("CDB Can not use DELETE DATA API by qReleasea"), !0;
                        if (e.qsdTypesa && !Array.isArray(e.qsdTypesa)) return console.error("CDB Error Params Type : " + JSON.stringify(e)), !0
                    } else if (a == o._linkInfo.qkeyCalculateDataa) {
                        if (t(e.uid) || t(e.key)) return console.error("CDB Error Params : " + JSON.stringify(e)), !0;
                        if (!i(e.uid) || !i(e.key)) return console.error("CDB Error Params Type : " + JSON.stringify(e)), !0
                    } else if (a == o._linkInfo.qkeyCalculateDatasa) {
                        if (t(e.uid) || t(e.data)) return console.error("CDB Error Params : " + JSON.stringify(e)), !0;
                        if (!i(e.uid) || !Array.isArray(e.data)) return console.error("CDB Error Params Type : " + JSON.stringify(e)), !0
                    } else if (a == o._linkInfo.qkeyGetWxDecryptionDataa) {
                        if (t(e.data) || t(e.quniqueKeya)) return console.error("CDB Error Params : " + JSON.stringify(e)), !0;
                        if (!s(e.data) || !s(e.quniqueKeya)) return console.error("CDB Error Params Type : " + JSON.stringify(e)), !0
                    } else if (a == o._linkInfo.qkeyUpdateUserInfoa) {
                        if ("undefined" == typeof qg) return console.error("CDB Error UpdateUserInfo is Wechat Only : " + JSON.stringify(e)), !0;
                        if (t(e.qnicknamea) || t(e.qavatarUrla)) return console.error("CDB Error Params : " + JSON.stringify(e)), !0;
                        if (!s(e.qnicknamea) || !s(e.qavatarUrla)) return console.error("CDB Error Params Type : " + JSON.stringify(e)), !0
                    } else if (a == o._linkInfo.qkeyGetOthersKeysDataa) {
                        if (t(e.qotherUidsa) || t(e.keys)) return console.error("CDB Error Params : " + JSON.stringify(e)), !0;
                        if (!r(e.qotherUidsa) || !r(e.keys)) return console.error("CDB Error Params Type : " + JSON.stringify(e)), !0
                    }
                    return !1
                },
                _linkInfo: {
                    qkeyServerTimea: "/api/userCloudData/time",
                    qkeyLogina: "/api/user/login",
                    qkeySavePrivateDataa: "/api/userCloudData/setSelfNormalData",
                    qkeySavePrivateDatasa: "/api/userCloudData/setSelfMultipleData",
                    qkeyGetUserDataa: "/api/userCloudData/getSelfData",
                    qkeyGetUserDatasa: "/api/userCloudData/getSelfDatas",
                    qkeySavePublicDataa: "/api/userCloudData/setSelfScoreOtherReadData",
                    qkeyGetOthersDataa: "/api/userCloudData/qgetOthersDataa",
                    qkeySaveOhterDataa: "/api/userCloudData/appendOtherSetData",
                    qkeyAppendRankDataa: "/api/userCloudData/appendRankList",
                    qkeyGetRankListDataa: "/api/userCloudData/getRankList",
                    qkeyGetMyRankDataa: "/api/userCloudData/getRank",
                    qkeyGetUsersa: "/api/user/qgetUsersa",
                    qkeyGetRandomUsersa: "/api/user/getRandomUsers",
                    qkeyDeleteSelfDatasFromOthersa: "/api/userCloudData/qdeleteSelfDatasFromOthersa",
                    qkeyDeleteSelfDatasa: "/cdb/test/resetUserData",
                    qkeyCalculateDataa: "/api/userCloudData/calculateSingleKey",
                    qkeyCalculateDatasa: "/api/userCloudData/calculateMultipleKeys",
                    qkeyGetWxDecryptionDataa: "/decryption",
                    qkeyGetLocationa: "/api/userCloudData/getLocation",
                    qkeyUpdateUserInfoa: "/api/userCloudData/refreshUserBasicInfo",
                    qkeyGetOthersKeysDataa: "/api/userCloudData/qgetOthersKeysDataa"
                },
                _url: function() {
                    return o.qdebugModea ? "https://test.gw.leuok.com/gl-ms-single-server" : "https://gw.gameley.com/gl-ms-single-server"
                },
                _serviceUrl: function() {
                    return o.qdebugModea ? "https://test.gw.leuok.com/gl-ms-minigame-service" : "https://gw.gameley.com/gl-ms-minigame-service"
                },
                _httpRequest: function(e, a, t, i) {
                    var n = o._getPlatObject() || {
                        cdb: {}
                    };
                    try {
                        t = t || "POST";
                        var s = new XMLHttpRequest;
                        s.open(t, e), s.onload = function() {
                            if (this.status >= 200 && this.status < 300) {
                                var e = JSON.parse(s.qresponsea);
                                0 == e.state ? (i && i(e), a.success && a.success(e)) : a.fail && a.fail(e), a.complete && a.complete(e)
                            } else {
                                var t = {
                                    status: this.status,
                                    qstatusTexta: s.qstatusTexta
                                };
                                a.fail && a.fail(t), a.complete && a.complete(t)
                            }
                        }, s.onerror = function() {
                            var e = {
                                status: this.status,
                                qstatusTexta: s.qstatusTexta
                            };
                            a.fail && a.fail(e), a.complete && a.complete(e)
                        }, s.qsetRequestHeadera("gameId", o.gameId.toString()), s.qsetRequestHeadera("qchannelIda", o.qchannelIda.toString()), s.qsetRequestHeadera("uid", n.cdb.uid || o.uid.toString()), s.qsetRequestHeadera("token", n.cdb.token || o.token), s.qsetRequestHeadera("Content-Type", "application/json"), s.send(JSON.stringify(a))
                    } catch (e) {
                        console.error("\u5ba2\u6237\u7aef\u53d1\u9001\u5931\u8d25:" + e)
                    }
                },
                _logInfo: function() {
                    console.log("[CDB INFO] gameId: " + o.gameId + " qchannelIda: " + o.qchannelIda + " uid: " + o.uid + " token: " + o.token)
                },
                _getPlatObject: function() {
                    return "object" === ("undefined" == typeof qg ? "undefined" : n(qg)) ? qg.leuok : "object" === ("undefined" == typeof BK ? "undefined" : n(BK)) ? BK.leuok : "object" === ("undefined" == typeof qg ? "undefined" : n(qg)) ? qg.leuok : "object" === ("undefined" == typeof window ? "undefined" : n(window)) ? window.leuok : void 0
                }
            };
        window.CDB = o, cc._RF.pop()
    }, {}],
    mg_ConfigDataManager: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "5b093e643dOYoAeY7EpjeFR", "mg_ConfigDataManager"), Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = e("mg_Tools"),
            n = e("mg_RemoteConfigManager"),
            o = e("mg_BuildingInfo"),
            s = e("mg_UserDataManager"),
            r = function(e, a) {
                this.id = 0, this.count = 0, this.id = e, this.count = a
            };
        t.qDataItema = r;
        var c = function() {
            function e() {
                this.qstartLoadTimea = 0, this.qattribMaxLva = 160, this.qstageMaxIda = 100, this.qinitMapa = {}, this.qLvUpMapa = {}, this.qgunLista = null, this.gunMap = {}, this.qfubenLista = [], this.qloadingTipLista = [], this.qnpcAttribMapa = {}, this.qnpcFubenMapa = {}, this.qboLimitMapa = {}, this.qnpcAIMapa = {}, this.npcMap = {}, this.qvideoMoneyLista = [], this.qactcombinationMapa = {}, this.qnpcAppearMapa = {}, this.qnpcAppearAvatarMapa = {}, this.qobstacleMapa = {}, this.qnpcSectionsa = [], this.qnpcSectionsXa = [], this.qobstacleSectionsa = [], this.qshareLista = null, this.qshareMapa = {}, this.qsignRewardLista = [], this.qlotteryLista = [], this.qlotteryPoolMapa = {}, this.qfubenRewardLista = [], this.qshareFailWxModala = !0
            }
            return e.getInstance = function() {
                return null == e.instance && (e.instance = new e), e.instance
            }, e.prototype.qloadAllConfigDataa = function(e) {
                this.qstartLoadTimea = i.Tools.qgetTimestampMSa(), this.qloadAllJsonInPackagea(e), this.qloadRemoteShareConfiga()
            }, e.prototype.qloadRemoteShareConfiga = function() {
                if (o.default.qisWXChannela()) {
                    var e = o.default.qgetCDNServerDomaina() + "/rxqt/bl2/share/share.json?" + Math.floor(i.Tools.qgetTimestampSa() / 300);
                    n.default.getInstance().shenhe && (e = o.default.qgetCDNServerDomaina() + "/rxqt/bl2/share/shenhe/share.json"), qg.downloadFile({
                        url: e,
                        success: function(a) {
                            404 === a.qstatusCodea ? console.error("Download file failed(404): " + e) : a.qtempFilePatha && (console.log("download successed for : " + e), cc.loader.load({
                                url: a.qtempFilePatha,
                                type: "json"
                            }, t))
                        },
                        fail: function(a) {
                            console.error("Download file failed: " + e), console.error(a)
                        }
                    })
                }
                var a = this;

                function t(e, t) {
                    e ? console.log(e) : (console.log("load share.json on CDN"), a.onFileLoaded("share", t))
                }
            }, e.prototype.qconvertToJsonDataa = function(e) {
                console.log("\u89e3\u6790zip\u5305");
                var a = this,
                    t = 0,
                    n = 0;
                e.folder("config").forEach(function(e, o) {
                    !o.dir && i.Tools.qisEndWithStringa(o.name, ".json") && (t++, o.async("string").then(function(e) {
                        var s = o.name.split("/")[1].split(".")[0],
                            r = JSON.parse(e);
                        a.onFileLoaded(s, r), ++n >= t && console.log(t + " \u4e0b\u8f7d\u89e3\u6790\u603b\u8017\u65f6ms " + (i.Tools.qgetTimestampMSa() - a.qstartLoadTimea))
                    }))
                })
            }, e.prototype.qloadAllJsonInPackagea = function(e) {
                var a = this;
                console.log("\u52a0\u8f7d\u5305\u5185json");
                var t = this;
                cc.loader.loadResDir("config", cc.JsonAsset, function(a, t, i) {
                    e && e({
                        type: "ConfigProgress",
                        progress: a / t
                    })
                }, function(n, o) {
                    if (n) return console.error(n), void a.qloadAllJsonInPackagea(e);
                    for (var s = 0, r = o; s < r.length; s++) {
                        var c = r[s];
                        t.onFileLoaded(c.name, c.json)
                    }
                    console.log(o.length + " \u4e0b\u8f7d\u89e3\u6790\u603b\u8017\u65f6ms " + (i.Tools.qgetTimestampMSa() - t.qstartLoadTimea)), e && e({
                        type: "ConfigLoaded"
                    })
                })
            }, e.prototype.onFileLoaded = function(e, a) {
                var t = a;
                switch (e) {
                    case "init":
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n].Key;
                            this.qinitMapa[o] = t[n]
                        }
                        for (n = 1; n <= 5; n++) this.qnpcSectionsa.push(i.Tools.qsplitToNumLista(this.qinitMapa["QUYU_" + n].Value)), this.qnpcSectionsXa.push(i.Tools.qsplitToNumLista(this.qinitMapa["QUYU_" + n + "_X"].Value)), n < 5 && this.qobstacleSectionsa.push(parseInt(this.qinitMapa["ZA_" + n].Value));
                        console.log("qinitMapa"), console.log(this.qinitMapa);
                        break;
                    case "Gun":
                        for (this.qgunLista = t, n = 0; n < t.length; n++) o = t[n].id, this.gunMap[o] = t[n];
                        break;
                    case "turntable":
                        this.qlotteryLista = t;
                        break;
                    case "poolturntable":
                        for (this.qlotteryPoolMapa = {}, n = 0; n < t.length; n++) o = t[n].id, null != this.qlotteryPoolMapa[o] && void 0 != this.qlotteryPoolMapa[o] || (this.qlotteryPoolMapa[o] = []), this.qlotteryPoolMapa[o].push(t[n]);
                        break;
                    case "LvUp":
                        for (this.qLvUpMapa = {}, n = 0; n < t.length; n++) o = t[n].qTypenamea, null != this.qLvUpMapa[o] && void 0 != this.qLvUpMapa[o] || (this.qLvUpMapa[o] = []), this.qLvUpMapa[o].push(t[n]);
                        break;
                    case "fuben":
                        this.qfubenLista = t;
                        break;
                    case "fubenreward":
                        this.qfubenRewardLista = t;
                        break;
                    case "videomoney":
                        this.qvideoMoneyLista = t;
                        break;
                    case "SignReward":
                        this.qsignRewardLista = t;
                        break;
                    case "loadingtip":
                        this.qloadingTipLista = t;
                        break;
                    case "obstacle":
                        for (n = 0; n < t.length; n++) o = t[n].qobstacleida, this.qobstacleMapa[o] = t[n];
                        break;
                    case "npcfuben":
                        for (n = 0; n < t.length; n++) {
                            var s = Math.floor(parseInt(t[n].boid) % 3e6 / 100),
                                r = t[n].boid % 100;
                            t[n].boid, null != this.qnpcFubenMapa[s] && void 0 != this.qnpcFubenMapa[s] || (this.qnpcFubenMapa[s] = []), r > this.qnpcFubenMapa[s].length && this.qnpcFubenMapa[s].push([]), this.qnpcFubenMapa[s][r - 1].push(t[n])
                        }
                        break;
                    case "npcproperty":
                        for (n = 0; n < t.length; n++) o = t[n].id, this.qnpcAttribMapa[o] = t[n];
                        break;
                    case "npcai":
                        for (n = 0; n < t.length; n++) o = t[n].aiid, this.qnpcAIMapa[o] = t[n];
                        break;
                    case "npc":
                        for (n = 0; n < t.length; n++) o = t[n].id, this.npcMap[o] = t[n];
                        break;
                    case "npcappear":
                        for (n = 0; n < t.length; n++) o = t[n].qfubenida, i.Tools.qisNullOrUndefineda(o) || (this.qnpcAppearMapa[o] = t[n]), o = t[n].avatar, this.qnpcAppearAvatarMapa[o] = t[n];
                        break;
                    case "bolimit":
                        for (n = 0; n < t.length; n++) o = t[n].boid, this.qboLimitMapa[o] = t[n];
                        break;
                    case "actcombination":
                        for (n = 0; n < t.length; n++) o = t[n].actid, this.qactcombinationMapa[o] = t[n];
                        break;
                    case "share":
                        for (this.qshareLista = t, this.qshareMapa = {}, n = 0; n < t.length; n++) o = t[n].id, this.qshareMapa[o] = t[n];
                        console.log(this.qshareLista)
                }
            }, e.prototype.qgetStageRewarda = function(e) {
                return e <= this.qfubenRewardLista.length ? this.qfubenRewardLista[e - 1] : this.qfubenRewardLista[this.qfubenRewardLista.length - 1]
            }, e.prototype.qgetRewardDataByStra = function(e) {
                for (var a = [], t = e.split(";"), i = 0; i < t.length; i++) {
                    var n = t[i].split("x"),
                        o = (n[0], parseInt(n[1])),
                        s = parseInt(n[2]),
                        c = new r(o, s);
                    a.push(c)
                }
                return a
            }, e.prototype.qgetHpLvDataa = function(e) {
                if (e <= this.qattribMaxLva) return this.qLvUpMapa[s.qAttribIDa.HP][e - 1];
                var a = this.qLvUpMapa[s.qAttribIDa.HP][this.qattribMaxLva - 1];
                return {
                    qTypenamea: s.qAttribIDa.HP,
                    qTypenumbera: Math.floor(a.qTypenumbera * Math.pow(1.075, e - this.qattribMaxLva)),
                    qShownumbera: parseInt(a.qShownumbera) + 50 * (e - this.qattribMaxLva),
                    qNeedgolda: 1e5
                }
            }, e.prototype.qgetMoneyLvDataa = function(e) {
                if (e <= this.qattribMaxLva) return this.qLvUpMapa[s.qAttribIDa.HANGUP_MONEY][e - 1];
                var a = this.qLvUpMapa[s.qAttribIDa.HANGUP_MONEY][this.qattribMaxLva - 1];
                return {
                    qTypenamea: s.qAttribIDa.HANGUP_MONEY,
                    qTypenumbera: parseFloat(a.qTypenumbera) + .025 * (e - this.qattribMaxLva),
                    qShownumbera: parseInt(a.qShownumbera) + 3 * (e - this.qattribMaxLva),
                    qNeedgolda: 1e5
                }
            }, e.prototype.qgetDamageLvDataa = function(e) {
                if (e <= this.qattribMaxLva) return this.qLvUpMapa[s.qAttribIDa.DAMAGE][e - 1];
                var a = this.qLvUpMapa[s.qAttribIDa.DAMAGE][this.qattribMaxLva - 1];
                return {
                    qTypenamea: s.qAttribIDa.DAMAGE,
                    qTypenumbera: Math.floor(a.qTypenumbera * Math.pow(1.04, e - this.qattribMaxLva)),
                    qShownumbera: parseInt(a.qShownumbera) + 15 * (e - this.qattribMaxLva),
                    qNeedgolda: 1e5
                }
            }, e.prototype.qgetStageInfoa = function(e) {
                return e <= this.qstageMaxIda ? this.qfubenLista[e - 1] : this.qfubenLista[70 + (e - this.qstageMaxIda - 1) % 30]
            }, e.prototype.qgetNpcFubenDataa = function(e) {
                if (e <= this.qstageMaxIda) return this.qnpcFubenMapa[e];
                var a = 71 + (e - this.qstageMaxIda - 1) % 30;
                return this.qnpcFubenMapa[a]
            }, e.prototype.qgetNpcMaxhpa = function(e, a) {
                if (a <= this.qstageMaxIda) return parseInt(e.hp);
                var t = Math.ceil((a - this.qstageMaxIda) / 30);
                return e.hp * Math.pow(18, t)
            }, e.prototype.qgetNpcAttacka = function(e, a) {
                if (a <= this.qstageMaxIda) return e;
                var t = Math.ceil((a - this.qstageMaxIda) / 30);
                return e * Math.pow(316, t)
            }, e.prototype.qgetNpcKillprofita = function(e, a) {
                return a <= this.qstageMaxIda ? e : 600
            }, e.prototype.qgetStageNeedPowera = function(e, a) {
                if (a <= this.qstageMaxIda) return e;
                var t = (a - 71 - (a - this.qstageMaxIda - 1) % 30) / 30 * 16e3 + 1600;
                return Math.floor(e + t)
            }, e.prototype.qgetStageIda = function(e) {
                return e <= this.qstageMaxIda ? e : 71 + (e - this.qstageMaxIda - 1) % 30
            }, e.prototype.qstageIsBossa = function(e) {
                return !(e % 10 && 5 != e)
            }, e.prototype.qstageUnlockWeaponIda = function(e) {
                for (var a = 0; a < this.qgunLista.length; a++)
                    if (parseInt(this.qgunLista[a].wave) == e) return parseInt(this.qgunLista[a].id);
                return 0
            }, e.prototype.qgetStageBossAvatara = function(a) {
                for (var t, i, n = e.getInstance().qgetNpcFubenDataa(a), o = 0; o < n.length; o++)
                    for (var s = 0; s < n[o].length; s++)
                        if (t = n[o][s].npcid, 1 == (i = this.npcMap[t]).boss) return i.avatar;
                return null
            }, e.prototype.qgetNextWeaponDataa = function(e, a) {
                for (var t = null, i = !1, n = 0; n < this.qgunLista.length; n++) {
                    var o = this.qgunLista[n];
                    if (o.qguntypea == a)
                        if (i || o.id != e) {
                            if (i) {
                                t = o;
                                break
                            }
                        } else i = !0
                }
                return t
            }, e.instance = null, e
        }();
        t.default = c, cc._RF.pop()
    }, {
        mg_BuildingInfo: "mg_BuildingInfo",
        mg_RemoteConfigManager: "mg_RemoteConfigManager",
        mg_Tools: "mg_Tools",
        mg_UserDataManager: "mg_UserDataManager"
    }],
    mg_EnemyBullet: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "cc902vP1vpAfbHQhSHU1bkG", "mg_EnemyBullet");
        var i, n = e("mg_Tools");
        (function(e) {
            e[e.Bullet = 0] = "Bullet", e[e.qGrenadea = 1] = "qGrenadea", e[e.Rocket = 2] = "Rocket"
        })(i = t.qEnemyBulletTypea || (t.qEnemyBulletTypea = {}));
        var o = cc._decorator,
            s = (o.qccclassa, o.property, cc.Class({
                extends: cc.Component,
                properties: {
                    qbulletNodea: cc.Node,
                    qgrenadea: cc.Node,
                    qrocketa: cc.Node,
                    qposuiNodea: cc.Node,
                    qexplodeNodea: cc.Node,
                    qbloodNodea: cc.Node,
                    qanimRoota: cc.Node,
                    body: cc.Node
                },
                statics: {},
                ctor: function() {
                    this.qviewBattlea = null
                },
                setType: function(e, a) {
                    switch (this.qviewBattlea = a, e) {
                        case i.Bullet:
                            this.qbulletNodea.active = !0, this.qgrenadea.active = !1, this.qrocketa.active = !1;
                            break;
                        case i.qGrenadea:
                            this.qbulletNodea.active = !1, this.qgrenadea.active = !0, this.qrocketa.active = !1, this.qgrenadea.getComponent(cc.Animation).play(), this.body.width = this.qgrenadea.width, this.body.height = this.qgrenadea.height;
                            break;
                        case i.Rocket:
                            this.qbulletNodea.active = !1, this.qgrenadea.active = !1, this.qrocketa.active = !0, this.qrocketa.getComponent(cc.Animation).play();
                            var t = this.qrocketa.getChildByName("sp");
                            t.rotation = 0, t.runAction(cc.sequence(cc.rotateTo(.2, 90), cc.rotateTo(.2, 180), cc.rotateTo(.2, 270), cc.rotateTo(.2, 360)).repeatForever()), this.body.width = this.qrocketa.width, this.body.height = this.qrocketa.height
                    }
                    this.qposuiNodea.active = !1, this.qbloodNodea.active = !1, this.qexplodeNodea.active = !1
                },
                qbulletFlya: function(e, a, t, i) {
                    var o = this;
                    this.qposuiNodea.setRotation(n.Tools.qgetRandomArbitrarya(0, 180)), this.qbloodNodea.setRotation(n.Tools.qgetRandomArbitrarya(0, 180));
                    var s = this.node.getPosition(),
                        r = 90 - Math.atan2(e.y - s.y, e.x - s.x) * (180 / Math.PI);

                    function c() {
                        i && i()
                    }
                    this.qbulletNodea.setRotation(r), this.node.setScale(.1), this.node.opacity = 255;
                    var l, q = cc.moveTo(.2, e),
                        h = cc.scaleTo(.2, 1);
                    l = cc.spawn(q, h);
                    var g;
                    g = a ? cc.sequence(l, cc.callFunc(function() {
                        o.qbulletNodea.active = !1, o.qposuiNodea.active = !0, !(o.qviewBattlea.qhelmetHpa <= 0) || o.qviewBattlea.qshielda.active && o.qviewBattlea.qshieldHpa || (o.qbloodNodea.active = !0), t && t()
                    }), cc.delayTime(.5), cc.fadeOut(.5), cc.callFunc(c)) : cc.sequence(l, cc.callFunc(c)), this.node.runAction(g)
                },
                qgrenadeFlya: function(e, a, t) {
                    var i = this,
                        o = this.node.getPosition();
                    this.qbloodNodea.setRotation(n.Tools.qgetRandomArbitrarya(0, 180)), this.node.setScale(.1), this.node.opacity = 255;
                    var s = new cc.Vec2(0, 0),
                        r = new cc.Vec2(0, 0);
                    s.x = (e.x - o.x) / 3 + o.x, s.y = o.y + 200, r.x = 2 * (e.x - o.x) / 3 + o.x, r.y = e.y + 200;
                    var c, l = [s, r, e],
                        q = cc.bezierTo(4, l),
                        h = cc.scaleTo(4, 1);
                    c = cc.spawn(q, h);
                    var g = cc.sequence(c, cc.callFunc(function() {
                        i.qplayExplodea(null), !(i.qviewBattlea.qhelmetHpa <= 0) || i.qviewBattlea.qshielda.active && i.qviewBattlea.qshieldHpa || (i.qbloodNodea.active = !0), a && a()
                    }), cc.delayTime(.5), cc.fadeOut(.5), cc.callFunc(function() {
                        t && t()
                    }));
                    this.node.runAction(g)
                },
                qrocketFlya: function(e, a, t) {
                    var i = this;
                    this.qbloodNodea.setRotation(n.Tools.qgetRandomArbitrarya(0, 180)), this.node.setScale(.1), this.node.opacity = 255;
                    var o, s = cc.moveTo(4, e),
                        r = cc.scaleTo(4, 1);
                    o = cc.spawn(s, r);
                    var c = cc.sequence(o, cc.callFunc(function() {
                        i.qplayExplodea(null), !(i.qviewBattlea.qhelmetHpa <= 0) || i.qviewBattlea.qshielda.active && i.qviewBattlea.qshieldHpa || (i.qbloodNodea.active = !0), a && a()
                    }), cc.delayTime(.5), cc.fadeOut(.5), cc.callFunc(function() {
                        t && t()
                    }));
                    this.node.runAction(c)
                },
                qplayExplodea: function(e) {
                    this.node.parent ? (this.qgrenadea.active = !1, this.qrocketa.active = !1, this.qexplodeNodea.active = !0, this.qexplodeNodea.getComponent(cc.Animation).play(), this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                        e && e()
                    })))) : e && e()
                },
                unuse: function() {
                    for (var e = 0, a = this.qanimRoota.children; e < a.length; e++) {
                        var t = a[e],
                            i = t.getComponent(cc.Animation);
                        i && i.stop(), t.active = !1
                    }
                    this.qrocketa.getChildByName("sp").stopAllActions(), this.node.cleanup()
                },
                reuse: function() {}
            }));
        t.default = s, cc._RF.pop()
    }, {
        mg_Tools: "mg_Tools"
    }],
    mg_FadeBreath: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "9b1dbnSMaVOfJiG2bsgnZV7", "mg_FadeBreath");
        var i = cc._decorator,
            n = (i.qccclassa, i.property, cc.Class({
                extends: cc.Component,
                properties: {},
                statics: {},
                ctor: function() {
                    this.qgapTimea = .5
                },
                onEnable: function() {
                    var e = cc.sequence(cc.fadeOut(this.qgapTimea / 2), cc.fadeIn(this.qgapTimea), cc.delayTime(this.qgapTimea / 2));
                    this.node.runAction(cc.repeatForever(e))
                },
                onDisable: function() {
                    this.node.stopAllActions()
                }
            }));
        t.default = n, cc._RF.pop()
    }, {}],
    mg_FrontSight: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "b6452k+UvJBz7pFEjx9ed1f", "mg_FrontSight");
        var i = e("mg_Tools"),
            n = cc._decorator,
            o = (n.qccclassa, n.property, cc.Class({
                extends: cc.Component,
                properties: {
                    circle: cc.Node,
                    up: cc.Node,
                    right: cc.Node,
                    down: cc.Node,
                    left: cc.Node,
                    qprogressBara: cc.ProgressBar,
                    qreloadAnimNodea: cc.Node
                },
                statics: {},
                ctor: function() {
                    var e = this;
                    e.radius = null, e.qstartChangeTimea = null, e.qreloadDurationa = null, e.qfocusNpcIda = null, e.qupdateTimea = null, e.mode = null, e.qcircleOriRadiusa = null, e.qreloadedCallbacka = null
                },
                onLoad: function() {
                    this.radius = this.up.y, this.qfocusNpcIda = 0, this.qupdateTimea = 0, this.mode = 0, this.qcircleOriRadiusa = this.circle.getContentSize().width / 2
                },
                qgetRadiusa: function() {
                    return this.radius
                },
                setRadius: function(e) {
                    this.radius = e, 0 == this.mode ? (this.up.y = e, this.right.x = e, this.down.y = -e, this.left.x = -e) : 1 == this.mode && this.circle.setScale(e / this.qcircleOriRadiusa)
                },
                shake: function(e, a) {
                    this.qstopScaleAnima();
                    var t = this.qgetRadiusa();

                    function i() {
                        a && a()
                    }
                    if (0 == this.mode) {
                        var n = t * e;
                        this.up.runAction(cc.sequence(cc.moveTo(.05, 0, n), cc.moveTo(.1, 0, t))), this.right.runAction(cc.sequence(cc.moveTo(.05, n, 0), cc.moveTo(.1, t, 0))), this.down.runAction(cc.sequence(cc.moveTo(.05, 0, -n), cc.moveTo(.1, 0, -t))), this.left.runAction(cc.sequence(cc.moveTo(.05, -n, 0), cc.moveTo(.1, -t, 0), cc.callFunc(i)))
                    } else if (1 == this.mode) {
                        var o = t / this.qcircleOriRadiusa;
                        this.circle.runAction(cc.sequence(cc.scaleTo(.05, o * e), cc.scaleTo(.1, o), cc.callFunc(i)))
                    }
                },
                qsetRadiusWithAnima: function(e, a, t) {
                    this.qstopScaleAnima();
                    var i = this;

                    function n() {
                        i.setRadius(e), t && t()
                    }
                    if (0 == this.mode) this.up.runAction(cc.moveTo(a, 0, e)), this.right.runAction(cc.moveTo(a, e, 0)), this.down.runAction(cc.moveTo(a, 0, -e)), this.left.runAction(cc.sequence(cc.moveTo(a, -e, 0), cc.callFunc(n)));
                    else if (1 == this.mode) {
                        var o = e / this.qcircleOriRadiusa;
                        this.circle.runAction(cc.sequence(cc.scaleTo(a, o), cc.callFunc(n)))
                    }
                },
                qstopScaleAnima: function() {
                    if (0 == this.mode)
                        for (var e = 0, a = this.circle.children; e < a.length; e++) {
                            var t = a[e];
                            t.stopAllActions(), t.cleanup()
                        } else 1 == this.mode && (this.circle.stopAllActions(), this.circle.cleanup())
                },
                update: function(e) {
                    if (this.qupdateTimea += e, this.qupdateTimea > .1) {
                        this.qupdateTimea = 0;
                        var a = i.Tools.qgetTimestampMSa();
                        this.qupdateReloadProgressa(a)
                    }
                },
                qsetClipBarValuea: function(e) {
                    cc._isMaxAmmo ? this.qprogressBara.progress = 1 : this.qprogressBara.progress = e
                },
                qstartChangeClipa: function(e, a, t) {
                    this.qstartChangeTimea = e, this.qreloadDurationa = a, this.circle.opacity = 1, this.qreloadAnimNodea.active = !0, this.qreloadedCallbacka = t
                },
                qupdateReloadProgressa: function(e) {
                    if (null != this.qstartChangeTimea) {
                        cc._isAddBuff, console.log("-------", e, this.qstartChangeTimea, this.qreloadDurationa);
                        var a = (e - this.qstartChangeTimea) / this.qreloadDurationa;
                        this.qsetClipBarValuea(a), a >= 1 && (this.qresetChangeClipViewa(), this.qreloadedCallbacka && (this.qreloadedCallbacka(), this.qreloadedCallbacka = null))
                    }
                },
                qresetChangeClipViewa: function() {
                    this.qstartChangeTimea = null, this.qreloadAnimNodea.active = !1, this.circle.opacity = 255
                },
                qsetCircleColora: function(e) {
                    if (0 == this.mode)
                        for (var a = 0, t = this.circle.children; a < t.length; a++) t[a].color = e;
                    else 1 == this.mode && (this.circle.color = e)
                }
            }));
        t.default = o, cc._RF.pop()
    }, {
        mg_Tools: "mg_Tools"
    }],
    mg_GainMoneyAnim: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "c85deKh/n5FMJcs/qWpnnh7", "mg_GainMoneyAnim");
        var i = e("mg_Tools"),
            n = cc._decorator,
            o = (n.qccclassa, n.property, cc.Class({
                extends: cc.Component,
                properties: {
                    qmoneySpfa: cc.SpriteFrame,
                    qdiamondSpfa: cc.SpriteFrame,
                    qchipSpfa: cc.SpriteFrame,
                    qflyTargetNodea: cc.Node
                },
                statics: {},
                ctor: function() {
                    this.qmoneyNodea = null
                },
                start: function() {},
                qcreateMoneyNodea: function(e) {
                    return this.qmoneyNodea && cc.isValid(this.qmoneyNodea) ? cc.instantiate(this.qmoneyNodea) : (this.qmoneyNodea = new cc.Node, this.qmoneyNodea.addComponent(cc.Sprite).spriteFrame = 1 == e ? this.qmoneySpfa : 2 == e ? this.qdiamondSpfa : this.qchipSpfa, this.qmoneyNodea)
                },
                qplayGainMoneya: function(e, a, t, n) {
                    void 0 === t && (t = null), void 0 === n && (n = 1), t || (t = this.qflyTargetNodea);
                    for (var o = function(o) {
                            var r = s.qcreateMoneyNodea(n);
                            r.parent = s.node, r.setScale(.8), r.setPosition(i.Tools.qgetRandomArbitrarya(-300, 300), 280);
                            var c = cc.moveBy(.5, 0, i.Tools.qgetRandomArbitrarya(-500, -260)),
                                l = cc.spawn(cc.moveTo(.3, i.Tools.qgetRelationPosa(t, s.node)), cc.scaleTo(1, .5));
                            o != e ? r.runAction(cc.sequence(cc.delayTime(i.Tools.qgetRandomArbitrarya(0, .2)), c, cc.delayTime(.2), l, cc.callFunc(function() {
                                r.destroy()
                            }))) : r.runAction(cc.sequence(cc.delayTime(.2), c, cc.delayTime(.2), l, cc.callFunc(function() {
                                r.destroy(), a && a()
                            })))
                        }, s = this, r = 1; r <= e; r++) o(r)
                }
            }));
        t.default = o, cc._RF.pop()
    }, {
        mg_Tools: "mg_Tools"
    }],
    mg_Guide: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "2f867v+nkBNpJ2zrsN8XNJq", "mg_Guide");
        var i = e("mg_Tools"),
            n = e("mg_FadeBreath"),
            o = cc._decorator,
            s = (o.qccclassa, o.property, cc.Class({
                extends: cc.Component,
                properties: {
                    tip: cc.RichText,
                    qtipNodea: cc.Node,
                    qtipBatleNodea: cc.Node,
                    qhanda: cc.Node,
                    mask: cc.Node,
                    qclickNodea: cc.Node,
                    qania: cc.Node
                },
                statics: {},
                ctor: function() {
                    this.qclickCallBacka = null
                },
                onLoad: function() {
                    this.mask.on(cc.Node.EventType.TOUCH_END, this.onClickGuide, this)
                },
                qhideAlla: function() {
                    this.qtipNodea.active = !1, this.qhanda.active = !1, this.mask.active = !1, this.qania.active = !1, this.qtipBatleNodea.active = !1
                },
                qshowMaska: function(e, a, t, n) {
                    void 0 === t && (t = 0), void 0 === n && (n = 0), this.qclickCallBacka = a, this.mask.active = !0;
                    var o = i.Tools.qgetRelationPosa(e, this.qclickNodea);
                    this.qclickNodea.setPosition(o), t && n ? this.qclickNodea.setContentSize(t, n) : this.qclickNodea.setContentSize(e.getContentSize())
                },
                onClickGuide: function(e) {
                    console.log("guide click");
                    var a = e.getLocation(),
                        t = this.qclickNodea.convertToWorldSpaceAR(cc.v2(0, 0));
                    cc.rect(t.x - this.qclickNodea.width / 2, t.y - this.qclickNodea.height / 2, this.qclickNodea.width, this.qclickNodea.height).contains(a) && (console.log("\u53ef\u70b9\u51fb\u8303\u56f4"), this.qclickCallBacka && this.qclickCallBacka())
                },
                qshowTipa: function(e, a) {
                    this.qtipNodea.active = !0, this.tip.string = e, this.tip.overflow = cc.Label.Overflow.RESIZE_HEIGHT, this.tip.enableWrapText = !0, this.tip.node && (this.tip.node.height = -1 !== e.indexOf("\n") ? 100 : 50), this.qtipNodea.height = -1 !== e.indexOf("\n") ? 100 : 50, i.Tools.qapplyCabinFontToLabela(this.tip), this.qtipNodea.setPosition(a)
                },
                qshowBattleTipa: function(e) {
                    this.qtipBatleNodea.getChildByName("tip").getComponent(n.default).qgapTimea = 2, this.qtipBatleNodea.active = !0, this.qtipBatleNodea.setPosition(e)
                },
                qshowHanda: function(e, a) {
                    void 0 === a && (a = 0), this.qhanda.active = !0;
                    var t = i.Tools.qgetRelationPosa(e, this.qhanda);
                    t.y += a, this.qhanda.setPosition(t)
                },
                qshowAnia: function() {
                    this.qania.active = !0
                }
            }));
        t.default = s, cc._RF.pop()
    }, {
        mg_FadeBreath: "mg_FadeBreath",
        mg_Tools: "mg_Tools"
    }],
    mg_GunListItem: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "46c77ubS/BAeYiIzuBTXepe", "mg_GunListItem");
        var i, n = cc._decorator;
        n.qccclassa, n.property;
        (function(e) {
            e[e.qCanEquipa = 0] = "qCanEquipa", e[e.Equip = 1] = "Equip", e[e.Unlock = 2] = "Unlock", e[e.Unknow = 3] = "Unknow"
        })(i = t.qGunListItemTypea || (t.qGunListItemTypea = {}));
        var o = cc.Class({
            extends: cc.Component,
            properties: {
                qbgCanEquipa: cc.Node,
                qbgEquipa: cc.Node,
                qbgUnlocka: cc.Node,
                qgunNamea: cc.Label,
                qgunIcona: cc.Sprite
            },
            statics: {},
            ctor: function() {
                var e = this;
                e.qclickCbka = null, e.qgunDataa = null, e.type = null
            },
            init: function(e, a, t) {
                this.qgunDataa = a, this.qclickCbka = t, this.qgunNamea.string = a.qgunNamea, this.setType(e), this.qshowGunIcona()
            },
            setType: function(e) {
                switch (this.type = e, e) {
                    case i.qCanEquipa:
                        this.qbgCanEquipa.active = !0, this.qbgEquipa.active = !1, this.qbgUnlocka.active = !1;
                        break;
                    case i.Equip:
                        this.qbgCanEquipa.active = !1, this.qbgEquipa.active = !0, this.qbgUnlocka.active = !1;
                        break;
                    case i.Unlock:
                    case i.Unknow:
                        this.qbgCanEquipa.active = !1, this.qbgEquipa.active = !1, this.qbgUnlocka.active = !0
                }
            },
            qshowGunIcona: function() {
                var e = this;
                this && this.qgunDataa && cc.loader.loadRes("img/gunicon/gunIcon_" + this.qgunDataa.qGunicona, cc.SpriteFrame, function(a, t) {
                    if (a) return console.log(a), void e.qshowGunIcona();
                    e && e.qgunIcona && (e.qgunIcona.spriteFrame = t, e.type == i.Unknow && (e.qgunIcona.node.color = cc.color(10, 10, 10)))
                })
            },
            onClickGun: function() {
                this.qclickCbka && this.qclickCbka(this.type, this.qgunDataa)
            }
        });
        t.default = o, cc._RF.pop()
    }, {}],
    mg_Gun: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "4f275lp8zFNY5FIV/u52dms", "mg_Gun");
        var i = e("mg_Tools"),
            n = e("mg_FrontSight"),
            o = e("mg_ConfigDataManager"),
            s = e("mg_AudioManager"),
            r = cc._decorator,
            c = (r.qccclassa, r.property, cc.Class({
                extends: cc.Component,
                properties: {
                    qfrontSightNodea: cc.Node,
                    qrightFirePointa: cc.Node,
                    qmidFirePointa: cc.Node,
                    qleftFirePointa: cc.Node,
                    qrightGunImgNodea: cc.Node,
                    qmidGunImgNodea: cc.Node,
                    qleftGunImgNodea: cc.Node,
                    qrightFireAnima: cc.Animation,
                    qmidFireAnima: cc.Animation,
                    qleftFireAnima: cc.Animation
                },
                statics: {},
                ctor: function() {
                    var e = this;
                    e.qfrontSighta = null, e.qrightGunOrigPosa = null, e.qrightGunRotationa = 0, e.qrightBulletRotationa = 0, e.qmidGunOrigPosa = null, e.qmidGunRotationa = 0, e.qmidBulletRotationa = 0, e.qleftGunOrigPosa = null, e.qleftGunRotationa = 0, e.qleftBulletRotationa = 0, e.qisReloada = !1, e.qcontinueShootCounta = null, e.qlastShootTimea = null, e.qgunDataa = null, e.qinitTargetRadiusa = 10, e.qtargetMaxRadiusa = 50, e.qradiusStepa = 2, e.qfrontSightCoolingTimea = 1e3, e.qchangeClipTimea = 3e3, e.qmaxClipCounta = 0, e.qclipCounta = 0, e.qisFiringa = !1, e.qaudioIda = 0, e.qviewBattlea = null
                },
                start: function() {},
                init: function(e, a) {
                    this.qfrontSighta = this.qfrontSightNodea.getComponent(n.default), this.qviewBattlea = a, this.qchangeClipTimea = o.default.getInstance().qinitMapa.SHOOT_SPACE.Value, e && (this.qgunDataa = e, this.qinitTargetRadiusa = e.Rmin, this.qtargetMaxRadiusa = e.Rmax, this.qradiusStepa = e.ration, this.qchangeClipTimea = e.qreloadSpeeda, this.qmaxClipCounta = e.qbulletBoxa), this.qclipCounta = this.qmaxClipCounta, this.qrefreshBulletProgressa(), this.qrightGunImgNodea && (this.qrightGunOrigPosa = this.qrightGunImgNodea.getPosition(), this.qrightGunRotationa = this.qrightGunImgNodea.rotation, this.qrightBulletRotationa = this.qgetBulletRotationa(this.qrightFirePointa)), this.qmidGunImgNodea && (this.qmidGunOrigPosa = this.qmidGunImgNodea.getPosition(), this.qmidGunRotationa = this.qmidGunImgNodea.rotation, this.qmidBulletRotationa = this.qgetBulletRotationa(this.qmidFirePointa)), this.qleftGunImgNodea && (this.qleftGunOrigPosa = this.qleftGunImgNodea.getPosition(), this.qleftGunRotationa = this.qleftGunImgNodea.rotation, this.qleftBulletRotationa = this.qgetBulletRotationa(this.qleftFirePointa))
                },
                fire: function(e) {
                    if (void 0 === e && (e = !1), this.qisReloada) return !1;
                    var a = i.Tools.qgetTimestampMSa();
                    if (cc._isMaxAmmo || this.qclipCounta--, this.qclipCounta < 0) return this.reload(), !1;
                    if (this.qcontinueShootCounta++, this.qlastShootTimea = a, this.qdealContinuousZhunxingChangea(a), this.qplayFireAnimEffecta(), this.qshowRecoila(), this.qplayZhunXingAnima(), this.qrefreshBulletProgressa(), e)
                        if (s.default.getInstance().play("yx_" + this.qgunDataa.qGunsounda), 1 == this.qgunDataa.bolt) {
                            var t = this;
                            this.qviewBattlea.node.runAction(cc.sequence(cc.delayTime(.4), cc.callFunc(function() {
                                t.qclipCounta ? t.qshowPullBolta() : t.reload()
                            })))
                        } else this.qclipCounta || this.reload();
                    else s.default.getInstance().play("yx_" + this.qgunDataa.qGunsounda);
                    return !0
                },
                reload: function() {
                    var e = 1;
                    cc._isAddBuff && (e *= .7);
                    var a = this;
                    if (!this.qisReloada) {
                        this.qisReloada = !0;
                        var t = !1;
                        this.qviewBattlea.qisSnipera && this.qviewBattlea.qisSniperScopeOpeneda() && (t = !0, this.qviewBattlea.qcloseSniperScopea()), this.qrightGunImgNodea && (this.qrightGunImgNodea.stopAllActions(), this.qrightGunImgNodea.setPosition(this.qrightGunOrigPosa), this.qrightGunImgNodea.setRotation(this.qrightGunRotationa), this.qrightGunImgNodea.runAction(cc.sequence(cc.rotateBy(.3 * e, -20), cc.delayTime((this.qchangeClipTimea / 1e3 - .6) * e), cc.rotateBy(.3 * e, 20)))), this.qmidGunImgNodea && (this.qmidGunImgNodea.stopAllActions(), this.qmidGunImgNodea.setPosition(this.qmidGunOrigPosa), this.qmidGunImgNodea.setRotation(this.qmidGunRotationa), this.qmidGunImgNodea.runAction(cc.sequence(cc.rotateBy(.3 * e, -20), cc.delayTime((this.qchangeClipTimea / 1e3 - .6) * e), cc.rotateBy(.3 * e, 20)))), this.qleftGunImgNodea && (this.qleftGunImgNodea.stopAllActions(), this.qleftGunImgNodea.setPosition(this.qleftGunOrigPosa), this.qleftGunImgNodea.setRotation(this.qleftGunRotationa), this.qleftGunImgNodea.runAction(cc.sequence(cc.rotateBy(.3 * e, 20), cc.delayTime((this.qchangeClipTimea / 1e3 - .6) * e), cc.rotateBy(.3 * e, -20))));
                        var n = this,
                            o = i.Tools.qgetTimestampMSa();
                        this.qfrontSighta.qstartChangeClipa(o, this.qchangeClipTimea * e, null);
                        var r = null;
                        this.qviewBattlea.qisSnipera && (r = this.qviewBattlea.qsniperScopeNodea.getChildByName("reload")), r && (r.active = !0), this.qviewBattlea.scheduleOnce(function() {
                            r && (r.active = !1), n.qisReloada = !1, n.qclipCounta = n.qmaxClipCounta, n.qfrontSighta.qresetChangeClipViewa(), n.qrefreshBulletProgressa(), t && a.qviewBattlea.qopenSniperScopea()
                        }, this.qchangeClipTimea * e / 1e3), this.qstopFirea(), s.default.getInstance().play("yx_" + this.qgunDataa.reload)
                    }
                },
                qshowPullBolta: function() {
                    var e = this,
                        a = (this.qgunDataa.qfireRatea - 400) / 1e3;
                    this.qviewBattlea.qcloseSniperScopea(), this.qfrontSighta.node.active = !1, this.qrightGunImgNodea.stopAllActions(), this.qrightGunImgNodea.setPosition(this.qrightGunOrigPosa), this.qrightGunImgNodea.setRotation(this.qrightGunRotationa), this.qrightGunImgNodea.runAction(cc.sequence(cc.rotateBy(.1, -20), cc.delayTime(a - .2), cc.rotateBy(.1, 20), cc.callFunc(function() {
                        e.qviewBattlea.qopenSniperScopea(), e.qfrontSighta.node.active = !0
                    })))
                },
                qrefreshBulletProgressa: function() {
                    this.qfrontSighta.qsetClipBarValuea(this.qclipCounta / this.qmaxClipCounta), this.qviewBattlea.qrefreshShowBulletCounta()
                },
                qstopFirea: function() {},
                qstopFireSounda: function() {},
                qshowRecoila: function() {
                    this.qrightGunImgNodea && (this.qrightGunImgNodea.stopAllActions(), this.qrightGunImgNodea.setPosition(this.qrightGunOrigPosa), this.qrightGunImgNodea.setRotation(this.qrightGunRotationa), this.qrightGunImgNodea.runAction(cc.sequence(cc.moveTo(.05, this.qrightGunOrigPosa.x + 30, this.qrightGunOrigPosa.y - 20), cc.moveTo(.1, this.qrightGunOrigPosa)))), this.qmidGunImgNodea && (this.qmidGunImgNodea.stopAllActions(), this.qmidGunImgNodea.setPosition(this.qmidGunOrigPosa), this.qmidGunImgNodea.setRotation(this.qmidGunRotationa), this.qmidGunImgNodea.runAction(cc.sequence(cc.moveTo(.05, this.qrightGunOrigPosa.x + 30, this.qrightGunOrigPosa.y - 20), cc.moveTo(.1, this.qrightGunOrigPosa)))), this.qleftGunImgNodea && (this.qleftGunImgNodea.stopAllActions(), this.qleftGunImgNodea.setPosition(this.qleftGunOrigPosa), this.qleftGunImgNodea.setRotation(this.qleftGunRotationa), this.qleftGunImgNodea.runAction(cc.sequence(cc.moveTo(.05, this.qleftGunOrigPosa.x - 30, this.qleftGunOrigPosa.y - 20), cc.moveTo(.1, this.qleftGunOrigPosa))))
                },
                qplayFireAnimEffecta: function() {
                    this.qrightFireAnima && (this.qrightFireAnima.node.active = !0, this.qrightFireAnima.play("qqiangkoupenhuoa", 0)), this.qmidFireAnima && (this.qmidFireAnima.node.active = !0, this.qmidFireAnima.play("qqiangkoupenhuoa", 0)), this.qleftFireAnima && (this.qleftFireAnima.node.active = !0, this.qleftFireAnima.play("qqiangkoupenhuoa", 0))
                },
                qplayZhunXingAnima: function() {
                    var e = this;

                    function a() {
                        e.qcontinueShootCounta = 0
                    }
                    this.qfrontSighta.shake(2, function() {
                        var t = e.qfrontSightCoolingTimea / 1e3;
                        e.qfrontSighta.qsetRadiusWithAnima(e.qinitTargetRadiusa, t, a)
                    })
                },
                qdealContinuousZhunxingChangea: function(e) {
                    if (e - this.qlastShootTimea < this.qfrontSightCoolingTimea) {
                        var a = this.qinitTargetRadiusa + (this.qcontinueShootCounta - 1) * this.qradiusStepa;
                        a > this.qtargetMaxRadiusa && (a = this.qtargetMaxRadiusa), this.qfrontSighta.setRadius(a)
                    }
                },
                qgetBulletRotationa: function(e) {
                    var a = this.qfrontSightNodea.getPosition(),
                        t = i.Tools.qgetRelationPosa(e, this.qfrontSightNodea);
                    return 90 - Math.atan2(a.y - t.y, a.x - t.x) * (180 / Math.PI)
                },
                onDestroy: function() {}
            }));
        t.default = c, cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_ConfigDataManager: "mg_ConfigDataManager",
        mg_FrontSight: "mg_FrontSight",
        mg_Tools: "mg_Tools"
    }],
    mg_InviteListItem: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "ba863GZDCNIA4hJniWFSPgP", "mg_InviteListItem");
        e("mg_ConfigDataManager");
        var i = e("mg_Tools"),
            n = (e("mg_UserDataManager"), e("mg_ViewManager")),
            o = e("mg_ViewGain"),
            s = (e("mg_ViewHome"), e("mg_ViewGunList"), cc._decorator),
            r = (s.qccclassa, s.property, cc.Class({
                extends: cc.Component,
                properties: {
                    ndGet: cc.Node,
                    ndInvite: cc.Node,
                    ndHasGet: cc.Node,
                    qheadIcona: cc.Sprite
                },
                statics: {},
                ctor: function() {
                    var e = this;
                    e.qclickCbka = null, e.qinvitePlayerDataa = null, e.type = null
                },
                onLoad: function() {
                    this.ndHasGet.active = !1, this.ndGet.active = !1, this.ndInvite.active = !0
                },
                init: function(e, a) {
                    this.ndInvite.active = !1, this.qinvitePlayerDataa = e, this.qclickCbka = a, this.setType(), this.qshowHeadIcona()
                },
                setType: function() {
                    1 == this.qinvitePlayerDataa.status ? (this.ndHasGet.active = !0, this.ndGet.active = !1) : 0 == this.qinvitePlayerDataa.status && (this.ndHasGet.active = !1, this.ndGet.active = !0)
                },
                qshowHeadIcona: function() {
                    var e = this;
                    i.Tools.qisValidStringa(this.qinvitePlayerDataa.head) && cc.loader.load({
                        url: this.qinvitePlayerDataa.head
                    }, function(a, t) {
                        a ? console.error(a) : (e.qheadIcona.node.active = !0, e.qheadIcona.spriteFrame = new cc.SpriteFrame(t), e.qheadIcona.node.setContentSize(80, 80))
                    })
                },
                onGetClick: function() {
                    var e = this;
                    mg.getInviteBonus({
                        id: this.qinvitePlayerDataa.id,
                        success: function(a) {
                            n.ViewManager.getInstance().qopenViewa({
                                View: o.ViewGain,
                                qCustomDataa: {
                                    qgainTypea: o.qViewGainTypea.qDiamonda,
                                    count: 30
                                }
                            }), e.ndHasGet.active = !1, e.ndGet.active = !0
                        }
                    })
                },
                onInviteClick: function() {
                    mg.share({})
                }
            }));
        t.default = r, cc._RF.pop()
    }, {
        mg_ConfigDataManager: "mg_ConfigDataManager",
        mg_Tools: "mg_Tools",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewGain: "mg_ViewGain",
        mg_ViewGunList: "mg_ViewGunList",
        mg_ViewHome: "mg_ViewHome",
        mg_ViewManager: "mg_ViewManager"
    }],
    mg_LeuokBi: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "d292bLXqcVP+r/jSj3J2EPs", "mg_LeuokBi"), Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = e("mg_StringKeyMap"),
            n = e("mg_WeChatGame"),
            o = e("mg_BuildingInfo");
        (function(e) {
            e[e.qClickPlaya = 2] = "qClickPlaya", e[e.qUnfinishClosea = 3] = "qUnfinishClosea", e[e.qPlayFinisha = 4] = "qPlayFinisha", e[e.qGetPrizea = 5] = "qGetPrizea", e[e.qNoVideoa = 6] = "qNoVideoa"
        })(t.qBiAdVideoSubTypea || (t.qBiAdVideoSubTypea = {}));
        var s = function() {
            function e() {}
            return e.init = function() {
                o.default.qgetPublishTypea() != o.qPublishTypea.Debug && (o.default.qgetChannelTypea() == o.qChannelTypea.WX ? (e.plat = qg, e.qinitWxAdvideoPointMapa()) : o.default.qgetChannelTypea() == o.qChannelTypea.QQPlay ? e.plat = BK : o.default.qgetChannelTypea() == o.qChannelTypea.H5 && (e.plat = window))
            }, e.qsafeCalla = function(a, t) {
                o.default.qgetPublishTypea() != o.qPublishTypea.Debug && e.plat && e.plat.leuok[a] && (console.log("LeuokBi.qsafeCalla -> " + a, t), e.plat.leuok[a](t))
            }, e.qinitWxAdvideoPointMapa = function() {
                e.qWxAdvideoPointMapa = new i.StringKeyMap, e.qWxAdvideoPointMapa.set(n.qAdUnitIda.qVideoWina, 1), e.qWxAdvideoPointMapa.set(n.qAdUnitIda.qVideoLosea, 2), e.qWxAdvideoPointMapa.set(n.qAdUnitIda.qVideoReborna, 3), e.qWxAdvideoPointMapa.set(n.qAdUnitIda.qVideoHangupa, 4), e.qWxAdvideoPointMapa.set(n.qAdUnitIda.qVideoSigna, 5), e.qWxAdvideoPointMapa.set(n.qAdUnitIda.qVideoFreeMoneya, 6), e.qWxAdvideoPointMapa.set(n.qAdUnitIda.qVideoLotterya, 7), e.qWxAdvideoPointMapa.set(n.qAdUnitIda.qVideoShielda, 8), e.qWxAdvideoPointMapa.set(n.qAdUnitIda.qVideoOpenCarda, 9), e.qWxAdvideoPointMapa.set(n.qAdUnitIda.qVideoChipa, 10), e.qWxAdvideoPointMapa.set(n.qAdUnitIda.qVideoFreeGuna, 11)
            }, e.qgetAdvideoPointIda = function(a) {
                if (o.default.qgetChannelTypea() == o.qChannelTypea.WX) return e.qWxAdvideoPointMapa.get(a);
                o.default.qgetChannelTypea() == o.qChannelTypea.QQPlay || (o.default.qgetChannelTypea(), o.qChannelTypea.H5)
            }, e.plat = null, e.qWxAdvideoPointMapa = null, e
        }();
        t.LeuokBi = s, cc._RF.pop()
    }, {
        mg_BuildingInfo: "mg_BuildingInfo",
        mg_StringKeyMap: "mg_StringKeyMap",
        mg_WeChatGame: "mg_WeChatGame"
    }],
    mg_MapItem: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "a4e80heu3xMd5CuOF0wJaTp", "mg_MapItem");
        var i, n = e("mg_ConfigDataManager"),
            o = cc._decorator;
        o.qccclassa;
        o.property,
            function(e) {
                e[e.qCanFighta = 0] = "qCanFighta", e[e.Unlock = 1] = "Unlock", e[e.qCurrenta = 2] = "qCurrenta"
            }(i = t.qMapItemTypea || (t.qMapItemTypea = {}));
        var s = cc.Class({
            extends: cc.Component,
            properties: {},
            statics: {},
            ctor: function() {
                this.qunlockWeaponIda = 0
            },
            setType: function(e, a, t, o) {
                var s = null,
                    r = this.node.getChildByName("qiconPassa"),
                    c = this.node.getChildByName("qiconUnlocka"),
                    l = this.node.getChildByName("qiconCura"),
                    q = this.node.getChildByName("qflasha"),
                    h = this.node.getChildByName("qstagea");
                switch (h.getComponent(cc.Label).string = a.toString(), e) {
                    case i.qCanFighta:
                        s = r, r.active = !0, c.active = !1, l.active = !1, q.active = !1, q.stopAllActions(), h.color = cc.color(0, 216, 251), h.setScale(1);
                        break;
                    case i.Unlock:
                        s = c, r.active = !1, c.active = !0, l.active = !1, q.active = !1, q.stopAllActions(), h.color = cc.color(197, 197, 197), h.setScale(1);
                        break;
                    case i.qCurrenta:
                        s = l, r.active = !1, c.active = !1, l.active = !0, q.active = !0, q.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.3, .8), cc.scaleTo(.3, 1.2)))), h.color = cc.color(255, 0, 0), h.setScale(1.3)
                }
                if (t ? (s.getChildByName("qbossa").active = !0, h.active = !1) : (s.getChildByName("qbossa").active = !1, h.active = !0), o && !this.qunlockWeaponIda) {
                    this.qunlockWeaponIda = o;
                    var g = this,
                        u = n.default.getInstance().gunMap[o.toString()];
                    cc.loader.loadRes("img/gunicon/gunIcon_" + u.qGunicona, cc.SpriteFrame, function(e, a) {
                        if (e) console.log(e);
                        else {
                            var t = new cc.Node;
                            t.addComponent(cc.Sprite).spriteFrame = a, t.y = 66, t.setScale(.5), t.parent = g.node
                        }
                    })
                }
            }
        });
        t.default = s, cc._RF.pop()
    }, {
        mg_ConfigDataManager: "mg_ConfigDataManager"
    }],
    mg_Map: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "165c6Jgwr5DQKiJdyMc9WJn", "mg_Map"), Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = e("mg_Tools"),
            n = function() {
                function e() {
                    this._size = 0
                }
                return e.prototype.put = function(e, a) {
                    this.qcontainsKeya(e) || this._size++, this.qgetTablea()[e] = a
                }, e.prototype.get = function(e) {
                    var a = this.qgetTablea()[e];
                    return i.Tools.qisNullOrUndefineda(a) ? null : a
                }, e.prototype.set = function(e, a) {
                    this.put(e, a)
                }, e.prototype.remove = function(e) {
                    var a = null;
                    return this.qcontainsKeya(e) && (a = this.get(e), this._size--), delete this.qgetTablea()[e], a
                }, e.prototype.clear = function() {
                    for (var e in this.qgetTablea()) delete this.qgetTablea()[e];
                    this._size = 0
                }, e.prototype.size = function() {
                    return this._size
                }, e.prototype.qisEmptya = function() {
                    return 0 == this._size
                }, e.prototype.qcontainsKeya = function(e) {
                    return !i.Tools.qisNullOrUndefineda(this.qgetTablea()[e])
                }, e.prototype.qforeacha = function(e) {
                    for (var a in this.qgetTablea())
                        if (1 == e(a, this.qgetTablea()[a])) break
                }, e.prototype.qtoArraya = function() {
                    var e = new Array;
                    for (var a in this.qgetTablea()) e.push(this.qgetTablea()[a]);
                    return e
                }, e.prototype.has = function(e) {
                    return null != this.get(e)
                }, e
            }();
        t.Map = n, cc._RF.pop()
    }, {
        mg_Tools: "mg_Tools"
    }],
    mg_Npc: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "55682BVIxpLZrPhWdzgohxm", "mg_Npc");
        var i = e("mg_ConfigDataManager"),
            n = e("mg_Tools"),
            o = e("mg_AudioManager"),
            s = e("mg_EnemyBullet"),
            r = e("mg_BuildingInfo"),
            c = e("mg_ViewManager"),
            l = e("mg_ViewNewEnemy"),
            q = cc._decorator,
            h = (q.qccclassa, q.property, function() {
                this.actid = null, this.scale = 0, this.qmoveTypea = null, this.qloopNuma = 0
            });
        t.AiUnit = h;
        var g = function() {
            this.qactTypea = 0, this.qactDelaya = 0, this.qbarbetteIdArra = null
        };
        t.qActUnita = g;
        var u, d = function() {
            this.hp = 0, this.qfireNodea = null, this.body = null
        };
        t.qBarbettea = d,
            function(e) {
                e[e.qHorizontala = 1] = "qHorizontala", e[e.qVerticala = 2] = "qVerticala", e[e.Fly = 3] = "Fly", e[e.NoMove = 4] = "NoMove"
            }(u = t.qAiMoveDirectionTypea || (t.qAiMoveDirectionTypea = {}));
        var m = cc.Class({
            extends: cc.Component,
            properties: {
                qnpcNodea: cc.Node,
                qexplodeNodea: cc.Node,
                qbloodNodea: cc.Node,
                spineNode: cc.Node,
                qfireNodea: cc.Node,
                quiRoota: cc.Node,
                qhpProga: cc.ProgressBar
            },
            statics: {},
            ctor: function() {
                var e = this;
                e.qviewBattlea = null, e.qbodyArra = null, e.qheada = null, e.qnpcFubenDataa = null, e.npcAi = null, e.qcurAiIndexa = 0, e.qnpcActiona = null, e.qisRandomActiona = !1, e.qcurActIndexa = 0, e.qcurActCounta = 0, e.qnpcAttriba = null, e.qexplodeHitblooda = .5, e.hp = 0, e.maxHp = 0, e.qmoveSpeeda = 0, e.qlastSpineActionNamea = null, e.qisNeedUpdateBoxa = !1, e.qisParachutea = !1, e.qAiMoveDirectiona = 1, e.qisParachuteBorna = !1, e.qbornScalea = .1, e.isBoss = !1, e.qisSnipera = !1, e.qlaserWarnNodea = null, e.qbarbetteArra = null, e.qVerticalXRatioa = 0, e.qobstaclea = null, e.qwindowIndexa = -1, e.qhitEffecta = "hit", e.qlaserWarna = null, e.qnpcNamea = "", e.qisShielda = !1, e.qboundingboxRoota = null, e.qfireAnia = null, e.qshootWarna = null
            },
            init: function(e, a, t) {
                this.qviewBattlea = a, this.qnpcFubenDataa = e, this.qobstaclea = t, this.npcAi = [];
                var o, s = i.default.getInstance().qnpcAIMapa[e.aiid];
                this.qbornScalea = parseFloat(s.qbornratioa), n.Tools.qisNullOrUndefineda(s.qmovetypea) ? this.npcAi.push(null) : ((o = new h).qmoveTypea = s.qmovetypea, o.scale = parseFloat(s.qcntratio1a), o.actid = s.actid1, this.npcAi.push(o)), n.Tools.qisNullOrUndefineda(s.qmovetype1a) ? this.npcAi.push(null) : ((o = new h).qmoveTypea = s.qmovetype1a, o.scale = parseFloat(s.qcntratio2a), o.actid = s.actid2, o.qloopNuma = parseInt(s.qcnt12numbera), this.npcAi.push(o)), n.Tools.qisNullOrUndefineda(s.qmovetype2a) ? this.npcAi.push(null) : ((o = new h).qmoveTypea = s.qmovetype2a, o.scale = parseFloat(s.qcntratio3a), o.actid = s.actid3, this.npcAi.push(o)), n.Tools.qisNullOrUndefineda(s.qmovetype3a) ? this.npcAi.push(null) : ((o = new h).qmoveTypea = s.qmovetype3a, o.scale = parseFloat(s.qcntratio4a), o.actid = s.actid4, o.qloopNuma = parseInt(s.qcnt34numbera), this.npcAi.push(o)), n.Tools.qisNullOrUndefineda(s.qmovetype4a) ? this.npcAi.push(null) : ((o = new h).qmoveTypea = s.qmovetype4a, o.scale = parseFloat(s.qcntratio5a), o.actid = s.actid5, this.npcAi.push(o)), this.qcurAiIndexa = 0;
                var r = i.default.getInstance().npcMap[e.npcid];
                if (this.qnpcNamea = r.name, this.qhitEffecta = r.qhiteffecta, this.qexplodeHitblooda = r.qhitblooda / 100, "zhanshi_4" == r.avatar || "zhanshi_2" == r.avatar || "zhanshi_5" == r.avatar || "zhanshi_3" == r.avatar ? this.qboundingboxRoota = this.node.getChildByName("qbboxa").getChildByName("qshibinga") : this.qboundingboxRoota = this.node.getChildByName("qbboxa").getChildByName(r.avatar), this.qnpcAttriba = i.default.getInstance().qnpcAttribMapa[e.qpropertyida], this.hp = i.default.getInstance().qgetNpcMaxhpa(this.qnpcAttriba, this.qviewBattlea.qstageIda), this.maxHp = this.hp, this.spineNode.active = !1, this.qexplodeNodea.active = !1, this.qbloodNodea.active = !1, this.qhpProga.node.active = !1, this.qhpProga.progress = 1, this.qisParachutea = !1, this.qisShielda = !1, this.node.opacity = 255, this.qfireNodea.getChildByName("qwarna").active = !1, this.qAiMoveDirectiona = parseInt(r.direction), 1 == r.boss ? this.isBoss = !0 : this.isBoss = !1, 1 == r.qsnipera ? this.qisSnipera = !0 : this.qisSnipera = !1, 1 == r.qsanjianga ? this.qisParachuteBorna = !0 : this.qisParachuteBorna = !1, this.qlastSpineActionNamea = null, this.qwindowIndexa = -1, this.qviewBattlea.qnpcAppearDataa && this.qviewBattlea.qnpcAppearDataa.avatar == r.avatar) {
                    this.qviewBattlea.qnpcAppearDataa = null, this.qviewBattlea.onPause();
                    var q = this;
                    c.ViewManager.getInstance().qopenViewa({
                        View: l.ViewNewEnemy,
                        qCustomDataa: {
                            avatar: r.avatar,
                            cbk: function() {
                                q.qviewBattlea.onResume(), q.loadSpine(r.avatar)
                            }
                        }
                    })
                } else this.loadSpine(r.avatar);
                this.qfireAnia || (this.qfireAnia = cc.instantiate(this.qviewBattlea.qnpcFireAnia), this.qfireAnia.parent = this.qviewBattlea.qnpcFireAniRoota), this.qshootWarna || (this.qshootWarna = cc.instantiate(this.qviewBattlea.qnpcFireWarna), this.qshootWarna.parent = this.qviewBattlea.qnpcFireAniRoota)
            },
            loadSpine: function(e) {
                var a = this;
                cc.loader.loadRes("spine/" + e + "/" + e, sp.SkeletonData, function(t, i) {
                    if (t) return console.error(t), void a.loadSpine(e);
                    a.spineNode.active = !0, a.spineNode.getComponent(sp.Skeleton).skeletonData = i, a.qstartAIa()
                })
            },
            qstartAIa: function() {
                if (this.qisParachuteBorna) {
                    var e = n.Tools.qgetRandomArbitrarya(-330, 330),
                        a = this.qnpcFubenDataa.quyuid,
                        t = new cc.Vec2(e, a);
                    this.node.setPosition(e, 530);
                    var o = this.qviewBattlea.qgetScaleByYa(a);
                    this.node.setScale(o), this.qmoveSpeeda = parseInt(this.qnpcAttriba.speed) * o, this.node.zIndex = this.qviewBattlea.minY - a;
                    for (var s = 200 * o, r = t.sub(this.node.getPosition()).mag() / s, c = 5 * o, l = [], q = c, h = 1; h < 12; h++) {
                        var g = new cc.Vec2(0, 0);
                        g.y = this.node.y + (t.y - this.node.y) / 12 * h, g.x = e + q, q = q > 0 ? -c : c, l.push(g)
                    }
                    l.push(t), this.qplaySpineAnimationa("jiangluo"), this.qisParachutea = !0;
                    var d = this,
                        m = 0;
                    (function e() {
                        m >= l.length ? (d.qisParachutea = !1, d.qcurAiIndexa = 0, d.qdoAiUnita()) : (d.node.runAction(cc.sequence(cc.moveTo(r / 12, l[m]), cc.callFunc(e))), m++)
                    })()
                } else if (this.qAiMoveDirectiona == u.NoMove) {
                    if (e = void 0, a = void 0, o = void 0, this.qobstaclea.qwindowsa.length) {
                        this.qwindowIndexa = this.qobstaclea.qfindNullWindowa(), -1 == this.qwindowIndexa && (this.qwindowIndexa = Math.floor(n.Tools.qgetRandomArbitrarya(0, this.qobstaclea.qwindowsa.length))), a = 0, this.qobstaclea.qwindowsa[this.qwindowIndexa].active = !0;
                        var p = this.qobstaclea.qwindowsa[this.qwindowIndexa].getChildByName("qnpcRoota"),
                            f = p.width / 2;
                        e = n.Tools.qgetRandomArbitrarya(-f, f), this.node.parent = p, this.node.setScale(1), this.qobstaclea.node.scaleX < 0 && (this.node.parent.scaleX = -1), 4 != this.qviewBattlea.qstageIda && this.qisShowMissa() && this.qobstaclea.qrefreshShowNpcFlaga(this.qwindowIndexa)
                    } else e = this.qobstaclea.node.x, a = this.qobstaclea.node.y + 1, this.node.zIndex = this.qviewBattlea.minY - a, o = this.qviewBattlea.qgetScaleByYa(a), this.node.setScale(o);
                    e < -350 ? e = -350 : e > 350 && (e = 350), this.node.setPosition(e, a), this.qcurAiIndexa = 0, this.qdoAiUnita()
                } else if (this.qAiMoveDirectiona == u.qHorizontala) e = void 0, a = void 0, this.qobstaclea ? (e = this.qobstaclea.node.x, a = this.qobstaclea.node.y + 1) : (e = 360, n.Tools.qgetRandomIntInclusivea(0, 100) < 50 && (e = -360), a = this.qnpcFubenDataa.quyuid), this.node.setPosition(e, a), o = this.qviewBattlea.qgetScaleByYa(a), this.node.setScale(o), this.qmoveSpeeda = parseInt(this.qnpcAttriba.speed) * o, this.node.zIndex = this.qviewBattlea.minY - a, this.qcurAiIndexa = 0, this.qdoAiUnita();
                else if (this.qAiMoveDirectiona == u.qVerticala) {
                    a = i.default.getInstance().qinitMapa.CSD_Y.Value;
                    var v = n.Tools.qsplitToNumLista(i.default.getInstance().qinitMapa.CSD_X.Value);
                    e = n.Tools.qgetRandomArbitrarya(v[0], v[1]), this.qVerticalXRatioa = (e - v[0]) / (v[1] - v[0]), this.node.setPosition(e, a), o = this.qviewBattlea.qgetScaleByYa(a), this.node.setScale(o), this.qmoveSpeeda = parseInt(this.qnpcAttriba.speed), this.node.zIndex = 0, this.qcurAiIndexa = 0, this.qdoAiUnita()
                } else if (this.qAiMoveDirectiona == u.Fly) {
                    f = this.qviewBattlea.qplaneBornSectina.width / 2;
                    var y = this.qviewBattlea.qplaneBornSectina.height / 2;
                    e = n.Tools.qgetRandomArbitrarya(-f, f) + this.qviewBattlea.qplaneBornSectina.x, a = n.Tools.qgetRandomArbitrarya(-y, y) + this.qviewBattlea.qplaneBornSectina.y, this.node.setPosition(e, a), this.node.setScale(this.qbornScalea), this.qmoveSpeeda = parseInt(this.qnpcAttriba.speed), this.node.zIndex = this.qviewBattlea.qgetEnemyPlaneZindexa(), this.qcurAiIndexa = 0, this.qdoAiUnita()
                }
                this.isBoss && this.qviewBattlea.qshowBossWarna(this.qnpcNamea)
            },
            qdoAiUnita: function() {
                var e, a;
                if (!(this.hp <= 0)) switch (this.qAiMoveDirectiona) {
                    case u.NoMove:
                        this.qstartActiona(this.npcAi[this.qcurAiIndexa].actid);
                        break;
                    case u.qHorizontala:
                        e = n.Tools.qgetRandomArbitrarya(-330, 330), this.npcAi[this.qcurAiIndexa] || console.log("err"), this.move(this.npcAi[this.qcurAiIndexa].qmoveTypea, cc.v2(e, this.node.y));
                        break;
                    case u.qVerticala:
                        for (; null == this.npcAi[this.qcurAiIndexa];) this.qcurAiIndexa++;
                        a = i.default.getInstance().qinitMapa.SHOT_Y.Value;
                        var t = n.Tools.qsplitToNumLista(i.default.getInstance().qinitMapa.SHOT_X.Value);
                        e = (t[1] - t[0]) * this.qVerticalXRatioa + t[0], this.node.zIndex = this.qviewBattlea.qgetVerticalNpcZindexa(this.qcurAiIndexa);
                        var o = this.qviewBattlea.qgetScaleByYa(a);
                        this.move(1, cc.v2(e, a), o);
                        break;
                    case u.Fly:
                        var s = this.qviewBattlea.qplaneMoveSectina.width / 2,
                            r = this.qviewBattlea.qplaneMoveSectina.height / 2;
                        e = n.Tools.qgetRandomArbitrarya(-s, s) + this.qviewBattlea.qplaneMoveSectina.x, a = n.Tools.qgetRandomArbitrarya(-r, r) + this.qviewBattlea.qplaneMoveSectina.y;
                        var c = this.npcAi[this.qcurAiIndexa].scale;
                        this.node.rotation = 0, c == this.node.scale && (a = this.node.y, e > this.node.x ? this.node.rotation = 15 : this.node.rotation = -15), this.move(this.npcAi[this.qcurAiIndexa].qmoveTypea, cc.v2(e, a), c)
                }
            },
            NextAI: function() {
                var e = this.npcAi[this.qcurAiIndexa];
                if (e && e.qloopNuma) e.qloopNuma--, this.qcurAiIndexa--;
                else {
                    if (this.qcurAiIndexa++, this.qcurAiIndexa >= this.npcAi.length) return;
                    if (this.qAiMoveDirectiona != u.qVerticala && null == this.npcAi[this.qcurAiIndexa]) return
                }
                this.qdoAiUnita()
            },
            move: function(e, a, t) {
                var i = this;
                if (void 0 === t && (t = 0), !(this.hp <= 0)) {
                    var o, s = a.sub(this.node.getPosition()).mag() / this.qmoveSpeeda;
                    switch (1 == e ? this.qplaySpineAnimationa("yidong") : 2 == e ? (s /= 3, this.qplaySpineAnimationa("fangun")) : n.Tools.qgetRandomArbitrarya(0, 100) <= 50 ? (e = 1, this.qplaySpineAnimationa("yidong")) : (e = 2, this.qplaySpineAnimationa("fangun")), this.qAiMoveDirectiona) {
                        case u.qHorizontala:
                            a.x < this.node.x || this.isBoss && 1 == e ? (this.node.scaleX = Math.abs(this.node.scaleX), this.qhpProga.node.scaleX = 1) : (this.node.scaleX = -Math.abs(this.node.scaleX), this.qhpProga.node.scaleX = -1), o = cc.moveTo(s, a);
                            break;
                        case u.qVerticala:
                        case u.Fly:
                            o = cc.spawn(cc.moveTo(s, a), cc.scaleTo(s, t))
                    }
                    var r = this;
                    this.node.runAction(cc.sequence(o, cc.callFunc(function() {
                        i.node.rotation = 0, r.npcAi[r.qcurAiIndexa] ? r.qstartActiona(r.npcAi[r.qcurAiIndexa].actid) : r.NextAI()
                    })))
                }
            },
            qstartActiona: function(e) {
                if (!(this.hp <= 0)) {
                    var a = i.default.getInstance().qactcombinationMapa[e];
                    this.qnpcActiona = [];
                    var t = new g;
                    t.qactTypea = parseInt(a.act1), t.qactDelaya = parseInt(a.qacttime1a), n.Tools.qisNullOrUndefineda(a.qturretact1a) || (t.qbarbetteIdArra = n.Tools.qsplitToNumLista(a.qturretact1a + "")), this.qnpcActiona.push(t), n.Tools.qisNullOrUndefineda(a.act2) || ((t = new g).qactTypea = parseInt(a.act2), t.qactDelaya = parseInt(a.qacttime2a), n.Tools.qisNullOrUndefineda(a.qturretact2a) || (t.qbarbetteIdArra = n.Tools.qsplitToNumLista(a.qturretact2a + "")), this.qnpcActiona.push(t), n.Tools.qisNullOrUndefineda(a.act3) || ((t = new g).qactTypea = parseInt(a.act3), t.qactDelaya = parseInt(a.qacttime3a), n.Tools.qisNullOrUndefineda(a.qturretact3a) || (t.qbarbetteIdArra = n.Tools.qsplitToNumLista(a.qturretact3a + "")), this.qnpcActiona.push(t), n.Tools.qisNullOrUndefineda(a.act4) || ((t = new g).qactTypea = parseInt(a.act4), t.qactDelaya = parseInt(a.qacttime4a), n.Tools.qisNullOrUndefineda(a.qturretact4a) || (t.qbarbetteIdArra = n.Tools.qsplitToNumLista(a.qturretact4a + "")), this.qnpcActiona.push(t)))), 0 == a.random ? this.qisRandomActiona = !1 : (this.qisRandomActiona = !0, this.qcurActCounta = parseInt(a.qactnumbera)), this.qcurActIndexa = 0, this.qnextActiona()
                }
            },
            qnextActiona: function() {
                if (!(this.hp <= 0))
                    if (this.qcurActIndexa >= this.qnpcActiona.length || this.qisRandomActiona && this.qcurActCounta <= 0) this.NextAI();
                    else if (this.qisRandomActiona) {
                    var e = Math.floor(n.Tools.qgetRandomArbitrarya(0, this.qnpcActiona.length));
                    this.qdoActUnita(this.qnpcActiona[e]), this.qcurActCounta--
                } else this.qdoActUnita(this.qnpcActiona[this.qcurActIndexa]), this.qcurActIndexa++
            },
            qdoActUnita: function(e) {
                if (!(this.hp <= 0)) {
                    var a, t, i = this;
                    switch (this.isBoss && (this.node.scaleX = Math.abs(this.node.scaleX)), e.qactTypea) {
                        case 1:
                            this.qisShielda ? this.qplaySpineAnimationa("fanghuz") : this.qplaySpineAnimationa("daiji_zhan"), this.qshowShootWarna(!0, e), a = this.qnpcAttriba.qbetween1a / 1e3, (t = Math.floor(e.qactDelaya / this.qnpcAttriba.qbetween1a)) && this.node.runAction(cc.sequence(cc.delayTime(a), cc.callFunc(s)).repeat(t));
                            break;
                        case 2:
                            this.qplaySpineAnimationa("daiji_dun"), this.qshowShootWarna(!0, e), a = this.qnpcAttriba.qbetween1a / 1e3, (t = Math.floor(e.qactDelaya / this.qnpcAttriba.qbetween1a)) && this.node.runAction(cc.sequence(cc.delayTime(a), cc.callFunc(s)).repeat(t));
                            break;
                        case 3:
                            this.qshowShootWarna(!1, e), this.qplaySpineAnimationa("daiji_dun");
                            break;
                        case 4:
                            this.qshowShootWarna(!1, e), this.qisShielda ? this.qplaySpineAnimationa("fanghuz") : this.qplaySpineAnimationa("daiji_zhan"), 1 == i.qviewBattlea.qstageIda && i.qviewBattlea.qcurWaveIda <= 2 ? this.scheduleOnce(function() {
                                i.qviewBattlea.isPaused || i.qviewBattlea.qcheckGuidea(i.node)
                            }) : (3 == this.qviewBattlea.qstageIda && this.node.y >= 170 || 4 == this.qviewBattlea.qstageIda && this.qobstaclea && this.qobstaclea.node.y >= 310) && this.scheduleOnce(function() {
                                i.qviewBattlea.qcheckSniperGuidea(i.node)
                            });
                            break;
                        case 5:
                            this.qplaySpineAnimationa("daiji_zhan"), this.qshowShootWarna(!0, e), a = this.qnpcAttriba.qbetween2a / 1e3, (t = Math.floor(e.qactDelaya / this.qnpcAttriba.qbetween2a)) && this.node.runAction(cc.sequence(cc.delayTime(a), cc.callFunc(function() {
                                if (i.isBoss) {
                                    if (e.qbarbetteIdArra)
                                        for (var a = void 0, t = 0; t < e.qbarbetteIdArra.length; t++) a = e.qbarbetteIdArra[t], i.qbarbetteArra[a - 1].hp > 0 && i.qgrenadea(i.qbarbetteArra[a - 1].qfireNodea)
                                } else i.qgrenadea(i.qfireNodea)
                            })).repeat(t));
                            break;
                        case 6:
                            this.qplaySpineAnimationa("daiji_zhan"), this.qshowShootWarna(!0, e), a = this.qnpcAttriba.qbetween2a / 1e3, this.node.runAction(cc.sequence(cc.delayTime(a), cc.callFunc(function() {
                                i.qbloodNodea.active = !0, i.qbloodNodea.setRotation(n.Tools.qgetRandomArbitrarya(0, 180));
                                var e = i.qgetAttack2Dmga();
                                i.qviewBattlea.qplayerHurta(e), i.qSelfExplodea()
                            })));
                            break;
                        case 7:
                            this.qisShielda ? this.qplaySpineAnimationa("fanghuz") : this.qplaySpineAnimationa("daiji_zhan"), this.qshowShootWarna(!0, e), a = this.qnpcAttriba.qbetween2a / 1e3, (t = Math.floor(e.qactDelaya / this.qnpcAttriba.qbetween2a)) && this.node.runAction(cc.sequence(cc.delayTime(a), cc.callFunc(function() {
                                if (i.isBoss) {
                                    if (e.qbarbetteIdArra)
                                        for (var a = void 0, t = 0; t < e.qbarbetteIdArra.length; t++) a = e.qbarbetteIdArra[t], i.qbarbetteArra[a - 1].hp > 0 && i.qfireRocketa(i.qbarbetteArra[a - 1].qfireNodea)
                                } else 2 == i.qviewBattlea.qstageIda && i.scheduleOnce(function() {
                                    i.qviewBattlea.qcheckRocketGuidea()
                                }, 1), i.qfireRocketa(i.qfireNodea)
                            })).repeat(t));
                            break;
                        case 8:
                            return this.qplaySpineAnimationa("fanghuz"), this.qisShielda = !0, this.node.runAction(cc.sequence(cc.delayTime(e.qactDelaya / 1e3), cc.callFunc(function() {
                                i.qisShielda = !1, i.qplaySpineAnimationa("daiji_zhan")
                            }))), void this.node.runAction(cc.sequence(cc.delayTime(.01), cc.callFunc(function() {
                                i.qnextActiona()
                            })))
                    }
                    this.node.runAction(cc.sequence(cc.delayTime(e.qactDelaya / 1e3), cc.callFunc(function() {
                        i.qshowShootWarna(!1, e), i.hp <= 0 || (i.node.stopAllActions(), i.qnextActiona())
                    })))
                }

                function s() {
                    if (o.default.getInstance().play("yx_gun_ak47_3"), i.isBoss) {
                        if (e.qbarbetteIdArra)
                            for (var a = void 0, t = 0; t < e.qbarbetteIdArra.length; t++) a = e.qbarbetteIdArra[t], i.qbarbetteArra[a - 1].hp > 0 && i.fire(i.qbarbetteArra[a - 1].qfireNodea)
                    } else i.fire(i.qfireNodea)
                }
            },
            qshowShootWarna: function(e, a) {
                if (this.isBoss)
                    if (e)
                        for (var t = 0; t < a.qbarbetteIdArra.length; t++) {
                            var i = a.qbarbetteIdArra[t];
                            this.qbarbetteArra[i - 1].hp > 0 && (this.qbarbetteArra[i - 1].qfireNodea.getChildByName("qwarna").active = !0, 5 == this.qviewBattlea.qstageIda && this.qviewBattlea.qcheckBossGuidea(this.qbarbetteArra[i - 1].qfireNodea))
                        } else
                            for (t = 0; t < this.qbarbetteArra.length; t++) this.qbarbetteArra[t].qfireNodea.getChildByName("qwarna").active = !1;
                    else if (e ? (this.qshootWarna.setPosition(n.Tools.qgetRelationPosa(this.quiRoota, this.qshootWarna)), this.qshootWarna.active = !0, this.node.parent == this.qviewBattlea.qnpcRoota ? this.qshootWarna.setScale(this.node.scaleY) : this.qshootWarna.setScale(this.qobstaclea.node.scaleY)) : this.qshootWarna.active = !1, this.qisSnipera)
                    if (e)
                        if (this.qlaserWarnNodea) this.qshowLaserWarna();
                        else {
                            var o = this;
                            cc.loader.loadRes("prefab/battle/mg_LaserWarn", cc.Prefab, function(e, a) {
                                e ? console.error(e) : (o.qlaserWarnNodea = cc.instantiate(a), o.qshowLaserWarna())
                            })
                        }
                else this.qlaserWarnNodea && (this.qlaserWarnNodea.removeFromParent(), this.qlaserWarnNodea.active = !1)
            },
            qshowLaserWarna: function() {
                this.qlaserWarnNodea.parent = this.qviewBattlea.qlaserWarnRoota, this.qlaserWarnNodea.active = !0;
                var e = this.qfireNodea.convertToWorldSpaceAR(cc.v2(0, 0)),
                    a = this.qviewBattlea.qlaserWarnRoota.convertToNodeSpaceAR(e);
                this.qlaserWarnNodea.setPosition(a);
                var t = cc.v2(0, -1060),
                    i = t.sub(a).mag(),
                    n = this.qlaserWarnNodea.getChildByName("qlinea");
                n.width = i;
                var o = -Math.atan2(t.y - a.y, t.x - a.x) * (180 / Math.PI);
                n.rotation = o
            },
            qsetBulletStartPosa: function(e, a, t, i) {
                var n = i.convertToWorldSpaceAR(cc.v2(0, 0)),
                    o = a.convertToNodeSpaceAR(n);
                o = o.sub(t), e.parent = a, e.setPosition(o)
            },
            fire: function(e) {
                var a = e.convertToWorldSpaceAR(cc.v2(0, 0)),
                    t = this.qfireAnia.parent.convertToNodeSpaceAR(a);
                this.qfireAnia.setPosition(t);
                var i = this.qfireAnia.getChildByName("qfireAnia");
                i.active = !0, i.getComponent(cc.Animation).play();
                var o = this.qgetAttack1Dmga(),
                    r = new cc.Vec2;
                o > 0 ? this.qviewBattlea.qshielda.active && this.qviewBattlea.qshieldHpa ? (r.x = n.Tools.qgetRandomArbitrarya(-105, 105), r.y = n.Tools.qgetRandomArbitrarya(-350, 35)) : (r.x = n.Tools.qgetRandomArbitrarya(-300, 300), r.y = n.Tools.qgetRandomArbitrarya(-450, 450)) : (n.Tools.qgetRandomArbitrarya(0, 100) > 50 ? r.x = 370 : r.x = -370, r.y = n.Tools.qgetRandomArbitrarya(-530, 530));
                var c = this.qviewBattlea.qgetEnemyBulleta();
                this.qsetBulletStartPosa(c, this.qviewBattlea.qgunNodea, this.qviewBattlea.qbattleCameraa.getPosition(), e);
                var l = c.getComponent(s.default),
                    q = this;
                l.setType(s.qEnemyBulletTypea.Bullet, this.qviewBattlea), l.qbulletFlya(r, o > 0, function() {
                    q.qviewBattlea.qplayerHurta(o, c)
                }, function() {
                    q.qviewBattlea.qenemyBulletCachePoola.put(c)
                })
            },
            qgrenadea: function(e) {
                var a = this.qgetAttack2Dmga(),
                    t = new cc.Vec2;
                t.x = n.Tools.qgetRandomArbitrarya(-300, 300), t.y = 0;
                var i = this.qviewBattlea.qgetEnemyBulleta();
                this.qsetBulletStartPosa(i, this.qviewBattlea.qenemyBulletRoota, cc.v2(0, 0), e);
                var o = i.getComponent(s.default);
                i.zIndex = this.qviewBattlea.qgetEnemyBulletZindexa();
                var r = this;
                o.setType(s.qEnemyBulletTypea.qGrenadea, this.qviewBattlea), o.qgrenadeFlya(t, function() {
                    r.qviewBattlea.qplayerHurta(a, i)
                }, function() {
                    r.qviewBattlea.qenemyBulletCachePoola.put(i)
                })
            },
            qfireRocketa: function(e) {
                var a = e.convertToWorldSpaceAR(cc.v2(0, 0)),
                    t = this.qfireAnia.parent.convertToNodeSpaceAR(a);
                this.qfireAnia.setPosition(t);
                var i = this.qfireAnia.getChildByName("qfireAnia");
                i.active = !0, i.getComponent(cc.Animation).play();
                var o = this.qgetAttack2Dmga(),
                    r = new cc.Vec2;
                r.x = n.Tools.qgetRandomArbitrarya(-300, 300), r.y = 0;
                var c = this.qviewBattlea.qgetEnemyBulleta();
                c.parent = this.qviewBattlea.qenemyBulletRoota, c.setPosition(t);
                var l = c.getComponent(s.default);
                c.zIndex = this.qviewBattlea.qgetEnemyBulletZindexa();
                var q = this;
                l.setType(s.qEnemyBulletTypea.Rocket, this.qviewBattlea), l.qrocketFlya(r, function() {
                    q.qviewBattlea.qplayerHurta(o, c)
                }, function() {
                    q.qviewBattlea.qenemyBulletCachePoola.put(c)
                })
            },
            qSelfExplodea: function(e) {
                void 0 === e && (e = 1), this.hp = 0, this.node.stopAllActions(), this.spineNode.active = !1, this.qexplodeNodea.active = !0, this.qexplodeNodea.setScale(e), this.qshowShootWarna(!1, null), this.hideHp();
                var a = this,
                    t = cc.sequence(cc.delayTime(.5), cc.fadeOut(.5), cc.callFunc(function() {
                        a.qviewBattlea.qnpcDeatha(a)
                    }));
                this.node.runAction(t);
                var i = "yx_explosion_tank_" + n.Tools.qgetRandomIntInclusivea(1, 3);
                o.default.getInstance().play(i), this.qexplodeNodea.getComponent(cc.Animation).play()
            },
            qplaySpineAnimationa: function(e, a) {
                void 0 === a && (a = !0);
                var t = this.spineNode.getComponent(sp.Skeleton);
                t.setAnimation(0, e, a), e != this.qlastSpineActionNamea && this.hp > 0 && (this.qlastSpineActionNamea = e, r.default.qisUseSpineBBoxa ? this.qupdateAllBoxSpinea(t) : this.qupdateAllBoxNodea(e, t))
            },
            qupdateAllBoxNodea: function(e, a) {
                if (this.qboundingboxRoota || cc.log("!!!!!!!!!!!!!!!!!!!"), this.qboundingboxRoota.getChildByName("z_body"))
                    if ("fangun" == e || "daiji_dun" == e ? (this.qbodyArra ? this.qbodyArra[0] = this.qboundingboxRoota.getChildByName("d_body") : (this.qbodyArra = [], this.qbodyArra.push(this.qboundingboxRoota.getChildByName("d_body"))), this.qboundingboxRoota.getChildByName("qd_heada") && (this.qheada = this.qboundingboxRoota.getChildByName("qd_heada"))) : (this.qbodyArra ? this.qbodyArra[0] = this.qboundingboxRoota.getChildByName("z_body") : (this.qbodyArra = [], this.qbodyArra.push(this.qboundingboxRoota.getChildByName("z_body"))), this.qboundingboxRoota.getChildByName("qz_heada") && (this.qheada = this.qboundingboxRoota.getChildByName("qz_heada"))), this.isBoss)
                        if (this.qbarbetteArra)
                            for (t = 1; t <= this.qbodyArra.length; t++) o = this.qbodyArra[0].getChildByName("fire" + t), this.qbarbetteArra[t - 1].qfireNodea.setPosition(n.Tools.qgetRelationPosa(o, this.qbarbetteArra[t - 1].qfireNodea));
                        else {
                            this.qbarbetteArra = [];
                            for (var t = 1; o = this.qbodyArra[0].getChildByName("fire" + t); t++) {
                                var i = new d;
                                (s = cc.instantiate(this.qfireNodea)).parent = this.qnpcNodea, s.setPosition(n.Tools.qgetRelationPosa(o, s)), i.qfireNodea = s, i.qfireNodea.width = 50, i.qfireNodea.height = 50, i.hp = this.maxHp / 4, this.qbarbetteArra.push(i)
                            }
                        }
                else this.qfireNodea.setPosition(n.Tools.qgetRelationPosa(this.qbodyArra[0].getChildByName("fire"), this.qfireNodea));
                else if (!this.qbodyArra) {
                    for (this.qbodyArra = [], t = 1; o = this.qboundingboxRoota.getChildByName("body" + t); t++) this.qbodyArra.push(o);
                    if (this.isBoss) {
                        if (!this.qbarbetteArra)
                            for (this.qbarbetteArra = [], t = 1;; t++) {
                                var o, s;
                                if (!(o = this.qboundingboxRoota.getChildByName("fire" + t))) break;
                                i = new d, (s = cc.instantiate(this.qfireNodea)).parent = this.qnpcNodea, s.setPosition(n.Tools.qgetRelationPosa(o, s)), i.qfireNodea = s, i.qfireNodea.width = 50, i.qfireNodea.height = 50, i.hp = this.maxHp / 4, this.qbarbetteArra.push(i)
                            }
                    } else this.qfireNodea.setPosition(n.Tools.qgetRelationPosa(this.qboundingboxRoota.getChildByName("fire"), this.qfireNodea))
                }
                this.quiRoota.y = this.qbodyArra[0].y + this.qbodyArra[0].height / 2 + 20
            },
            qupdateAllBoxSpinea: function(e) {
                if (this.qbodyArra && this.qbodyArra.length)
                    for (var a = 1; a <= this.qbodyArra.length; a++) this.qupdateBoxa(this.qbodyArra[a - 1], e, "shenti_bj" + a);
                else
                    for (this.qbodyArra = [], a = 1;; a++) {
                        var t = new cc.Node;
                        if (!this.qupdateBoxa(t, e, "shenti_bj" + a)) break;
                        t.parent = this.qnpcNodea, this.qbodyArra.push(t)
                    }
                if (this.qheada) this.qupdateBoxa(this.qheada, e, "tou_bj1");
                else {
                    var i = new cc.Node;
                    this.qupdateBoxa(i, e, "tou_bj1") && (i.parent = this.qnpcNodea, this.qheada = i)
                }
                this.qupdateNodea(this.quiRoota, e, "xueliang"), this.qupdateAllFireNodea(e)
            },
            qupdateAllFireNodea: function(e) {
                if (this.qupdateNodea(this.qfireNodea, e, "gongji"), this.isBoss)
                    if (this.qbarbetteArra && this.qbarbetteArra.length)
                        for (var a = 1; a <= this.qbarbetteArra.length; a++) this.qupdateNodea(this.qbarbetteArra[a - 1].qfireNodea, e, "gongji_" + a);
                    else
                        for (this.qbarbetteArra = [], a = 1;; a++) {
                            var t = new d,
                                i = cc.instantiate(this.qfireNodea);
                            if (!this.qupdateNodea(i, e, "gongji_" + a)) break;
                            i.parent = this.qnpcNodea, t.qfireNodea = i, t.qfireNodea.width = 50, t.qfireNodea.height = 50, t.hp = this.maxHp / 4, this.qbarbetteArra.push(t)
                        }
            },
            qcheckCollisionBodya: function(e) {
                if (this.hp <= 0 || !this.qbodyArra) return !1;
                for (var a = 0; a < this.qbodyArra.length; a++) {
                    var t = this.qbodyArra[a],
                        i = t.width,
                        n = t.height;
                    if (new cc.Rect(t.x - i / 2, t.y - n / 2, i, n).contains(e)) return !0
                }
                return !1
            },
            qcheckCollisionBarbettea: function(e, a) {
                if (void 0 === a && (a = null), this.hp <= 0 || !this.qbarbetteArra) return 0;
                for (var t = 0; t < this.qbarbetteArra.length; t++)
                    if (!(this.qbarbetteArra[t].hp <= 0)) {
                        var i = this.qbarbetteArra[t].qfireNodea;
                        if ((!a || i == a) && i) {
                            var n = i.width,
                                o = i.height;
                            if (new cc.Rect(i.x - n / 2, i.y - o / 2, n, o).contains(e)) return t + 1
                        }
                    } return 0
            },
            qcheckCollisionHeada: function(e) {
                if (this.hp <= 0 || !this.qheada) return !1;
                var a = this.qheada,
                    t = a.width,
                    i = a.height;
                return !!new cc.Rect(a.x - t / 2, a.y - i / 2, t, i).contains(e)
            },
            qupdateBoxa: function(e, a, t) {
                if (!e) return !1;
                var i = a.findSlot(t),
                    n = a.getAttachment(t, t);
                if (i) {
                    if (n) {
                        var o = [];
                        n.computeWorldVertices(i, 0, 8, o, 0, 2);
                        var s = Math.min(o[0], o[2], o[4], o[6]),
                            r = Math.max(o[0], o[2], o[4], o[6]),
                            c = Math.min(o[1], o[3], o[5], o[7]),
                            l = Math.max(o[1], o[3], o[5], o[7]),
                            q = cc.rect(s, c, r - s, l - c);
                        e.width = q.width, e.height = q.height, e.setPosition(q.x + q.width / 2, q.y + q.height / 2)
                    }
                    return !0
                }
                return !1
            },
            qupdateNodea: function(e, a, t) {
                var i = a.findBone(t);
                return !!i && (e.setPosition(i.worldX, i.worldY), !0)
            },
            hurt: function(e, a) {
                if (void 0 === a && (a = null), !(this.hp <= 0)) {
                    this.hp -= e;
                    var t = 3;
                    if (this.hp <= 0) {
                        var s = this;
                        if (this.hp = 0, a && a(), this.isBoss) r.default.qisWXChannela() && qg.vibrateLong(), this.qAiMoveDirectiona == u.Fly ? this.qSelfExplodea(2) : (this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                            s.qSelfExplodea(2)
                        }))), this.qplaySpineAnimationa("siwang", !1));
                        else {
                            if (r.default.qisWXChannela() && qg.vibrateShort(), this.qshowShootWarna(!1, null), this.qAiMoveDirectiona == u.Fly) {
                                this.node.stopAllActions();
                                var c = this.node.x,
                                    l = i.default.getInstance().qnpcSectionsa[1][1],
                                    q = i.default.getInstance().qnpcSectionsa[3][0],
                                    h = q + (this.node.scaleY - this.qbornScalea) * (l - q) / (1 - this.qbornScalea);
                                this.node.zIndex = this.qviewBattlea.minY - h, this.node.runAction(cc.sequence(cc.moveTo(.4, c, h), cc.callFunc(function() {
                                    s.qSelfExplodea()
                                })))
                            } else if ("qexplodea" == this.qhitEffecta) this.qSelfExplodea();
                            else {
                                this.qisParachutea || this.node.stopAllActions();
                                var g = "yx_enemy_death_" + n.Tools.qgetRandomIntInclusivea(1, 5);
                                o.default.getInstance().play(g), this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                                    s.qviewBattlea.qnpcDeatha(s)
                                })))
                            }
                            this.qplaySpineAnimationa("siwang", !1), t = .2
                        }
                    }
                    this.showHp(t)
                }
            },
            showHp: function(e) {
                this.node.scaleX < 0 ? this.qhpProga.node.scaleX = -1 : this.qhpProga.node.scaleX = 1, this.qhpProga.progress = this.hp / this.maxHp, this.qhpProga.node.active = !0, this.qhpProga.node.stopAllActions();
                var a = this;
                this.qhpProga.node.runAction(cc.sequence(cc.delayTime(e), cc.callFunc(function() {
                    a.qhpProga.node.active = !1
                })))
            },
            hideHp: function() {
                this.qhpProga.node.active = !1, this.qhpProga.node.stopAllActions()
            },
            qhurtBarbettea: function(e, a) {
                if (!(this.hp <= 0 || e < 1 || e > this.qbarbetteArra.length)) {
                    var t = this.qbarbetteArra[e - 1];
                    if (!(t.hp <= 0)) {
                        if (t.hp -= a, t.hp <= 0) {
                            t.hp = 0;
                            var i = t.qfireNodea.getChildByName("baozha");
                            i.active = !0, i.getComponent(cc.Animation).play(), t.qfireNodea.getChildByName("qwarna").active = !1
                        }
                        this.hurt(a)
                    }
                }
            },
            qgetAttack1Dmga: function() {
                var e = this.qnpcAttriba.qhitratea;
                return n.Tools.qgetRandomArbitrarya(0, 100) <= e ? i.default.getInstance().qgetNpcAttacka(parseInt(this.qnpcAttriba.qattactk1a), this.qviewBattlea.qstageIda) : 0
            },
            qgetAttack2Dmga: function() {
                return i.default.getInstance().qgetNpcAttacka(parseInt(this.qnpcAttriba.qattactk2a), this.qviewBattlea.qstageIda)
            },
            qisShowMissa: function() {
                if (this.qobstaclea) {
                    if (this.qobstaclea.node.y > this.qviewBattlea.qshowMissBaseYa) return !0
                } else if (this.node.y > this.qviewBattlea.qshowMissBaseYa && this.qAiMoveDirectiona != u.Fly && !this.qisParachutea) return !0;
                return !1
            },
            unuse: function() {
                for (var e = 0, a = this.qfireNodea.children; e < a.length; e++) {
                    var t = a[e],
                        i = t.getComponent(cc.Animation);
                    i && i.stop(), t.active = !1
                }
                this.qshootWarna && (this.qshootWarna.active = !1), this.qbarbetteArra = null, this.qbodyArra = null, this.qheada = null, this.qexplodeNodea.getComponent(cc.Animation).stop(), this.node.cleanup()
            }
        });
        t.default = m, cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_BuildingInfo: "mg_BuildingInfo",
        mg_ConfigDataManager: "mg_ConfigDataManager",
        mg_EnemyBullet: "mg_EnemyBullet",
        mg_Tools: "mg_Tools",
        mg_ViewManager: "mg_ViewManager",
        mg_ViewNewEnemy: "mg_ViewNewEnemy"
    }],
    mg_NumberGrowUpAnim: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "3698d4X0iNPLZuYrlWWjNIq", "mg_NumberGrowUpAnim");
        var i = e("mg_Tools"),
            n = cc._decorator,
            o = (n.qccclassa, n.property, cc.Class({
                extends: cc.Component,
                properties: {},
                statics: {},
                ctor: function() {
                    var e = this;
                    e.lb = null, e.qstartNuma = 0, e.endNum = 0, e.duration = 0, e.qgapTimea = .03, e.qstartTimea = 0, e.qtempTimea = 0, e.qendCallbacka = null
                },
                qplayAnima: function(e, a, t, n) {
                    void 0 === n && (n = null), t < this.qgapTimea && (t = this.qgapTimea), this.lb = this.node.getComponent(cc.Label), this.qstartNuma = e, this.lb.string = this.qstartNuma.toString(), this.endNum = a, this.duration = t, this.qendCallbacka = n, this.qstartTimea = i.Tools.qgetTimestampMSa()
                },
                update: function(e) {
                    if (this.qstartTimea && (this.qtempTimea += e, this.qtempTimea >= this.qgapTimea)) {
                        this.qtempTimea = 0;
                        var a = i.Tools.qgetTimestampMSa(),
                            t = void 0;
                        a - this.qstartTimea >= this.duration ? (this.qstartTimea = 0, t = this.endNum, this.qendCallbacka && (this.qendCallbacka(), this.qendCallbacka = null)) : t = this.qstartNuma + (this.endNum - this.qstartNuma) / this.duration * (a - this.qstartTimea), this.lb.string = Math.floor(t).toString()
                    }
                }
            }));
        t.default = o, cc._RF.pop()
    }, {
        mg_Tools: "mg_Tools"
    }],
    mg_NumberKeyMap: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "31b2b93Nr9E84Ccr9zirdKv", "mg_NumberKeyMap");
        var i = cc.Class({
            extends: e("mg_Map").Map,
            properties: {},
            statics: {},
            ctor: function() {
                this._table = {}
            },
            qgetTablea: function() {
                return this._table
            }
        });
        t.NumberKeyMap = i, cc._RF.pop()
    }, {
        mg_Map: "mg_Map"
    }],
    mg_Obstacle: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "2b48aF0tllIP5ZkpAbNXIe0", "mg_Obstacle");
        var i = e("mg_Npc"),
            n = cc._decorator,
            o = (n.qccclassa, n.property, cc.Class({
                extends: cc.Component,
                properties: {
                    spacing: 0,
                    qwindowsa: [cc.Node],
                    qnpcFlagsa: [cc.Node],
                    qexplodeNodea: cc.Node
                },
                statics: {},
                ctor: function() {
                    this.spacing = 0
                },
                qcheckCollisionNpca: function(e, a) {
                    for (var t, n, o = null, s = null, r = null, c = 0; c < this.qwindowsa.length; c++)
                        if (t = (r = this.qwindowsa[c]).width, n = r.height, new cc.Rect(r.x - t / 2, r.y - n / 2, t, n).contains(e))
                            for (var l = r.getChildByName("qnpcRoota"), q = l.childrenCount - 1; q >= 0; q--) {
                                var h = (o = (s = l.children[q]).getComponent(i.default)).qnpcNodea.convertToNodeSpaceAR(a);
                                if (o.qcheckCollisionBodya(h)) return s
                            }
                    return null
                },
                qfindNullWindowa: function() {
                    for (var e = 0; e < this.qwindowsa.length; e++)
                        if (!this.qwindowsa[e].getChildByName("qnpcRoota").childrenCount) return e;
                    return -1
                },
                qrefreshShowNpcFlaga: function(e) {
                    -1 != e && (this.qwindowsa[e] ? this.qwindowsa[e].getChildByName("qnpcRoota").childrenCount ? this.qnpcFlagsa[e].active = !0 : (this.qnpcFlagsa[e].active = !1, this.qwindowsa[e].active = !1) : this.qnpcFlagsa[e].active = !1)
                },
                qpointInPolygona: function(e) {
                    var a = this.node.getComponent(cc.PolygonCollider);
                    return cc.Intersection.pointInPolygon(e, a.points)
                },
                qexplodea: function() {
                    if (null != this.qexplodeNodea) {
                        this.node.getChildByName("sp").active = !1, this.qexplodeNodea.getChildByName("baozha").active = !0, this.qexplodeNodea = null;
                        var e = this;
                        this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                            e.node.destroy()
                        })))
                    }
                },
                pause: function() {
                    for (var e = 0; e < this.qwindowsa.length; e++)
                        for (var a = 0, t = this.qwindowsa[e].getChildByName("qnpcRoota").children; a < t.length; a++) {
                            var i = t[a];
                            i.pauseAllActions(), i.pauseSystemEvents(!0)
                        }
                },
                resume: function() {
                    for (var e = 0; e < this.qwindowsa.length; e++)
                        for (var a = 0, t = this.qwindowsa[e].getChildByName("qnpcRoota").children; a < t.length; a++) {
                            var i = t[a];
                            i.resumeAllActions(), i.resumeSystemEvents(!0)
                        }
                }
            }));
        t.default = o, cc._RF.pop()
    }, {
        mg_Npc: "mg_Npc"
    }],
    mg_RemoteConfigManager: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "8d5e9yb8WhO/6P3nzLdN2K2", "mg_RemoteConfigManager"), Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = e("mg_Tools"),
            n = e("mg_BuildingInfo"),
            o = function() {
                function e() {
                    this.shenhe = !1, this.qshareLosea = 0, this.qshareWina = 0, this.qshareReborna = 0, this.qshareHangupa = 0, this.qshareCard2a = 0, this.qshareCard3a = 0, this.qtotalSharea = 10, this.qinterAda = !0, this.qfreeLotterya = 0, this.qdialogBannera = !0
                }
                return e.getInstance = function() {
                    return null == e.instance && (e.instance = new e), e.instance
                }, e.prototype.qgetRemoteConfigPatha = function() {
                    return n.default.qgetCDNServerDomaina() + "/rxqt/bl2/" + n.default.qgetVersiona() + "/RemoteConfig.json?" + Math.floor(i.Tools.qgetTimestampSa() / 60)
                }, e.prototype.qloadRemoteConfiga = function(e) {
                    var a = this,
                        t = cc.loader.getXMLHttpRequest();
                    t.onreadystatechange = function() {
                        if (4 == t.qreadyStatea && t.status >= 200 && t.status < 400) {
                            var i = t.responseText;
                            console.log("\u8fdc\u7a0b\u914d\u7f6e\u4e0b\u8f7d\u6210\u529f", i);
                            var n = JSON.parse(i);
                            a.shenhe = n.shenhe, a.qshareLosea = n.qshareLosea, a.qshareWina = n.qshareWina, a.qshareReborna = n.qshareReborna, a.qshareHangupa = n.qshareHangupa, a.qshareCard2a = n.qshareCard2a, a.qshareCard3a = n.qshareCard3a, a.qtotalSharea = n.qtotalSharea, a.qinterAda = n.qinterAda, a.qdialogBannera = n.qdialogBannera, a.qfreeLotterya = n.qfreeLotterya, e && e()
                        }
                    }
                }, e.instance = null, e
            }();
        t.default = o, cc._RF.pop()
    }, {
        mg_BuildingInfo: "mg_BuildingInfo",
        mg_Tools: "mg_Tools"
    }],
    mg_ResourceBar: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "f7b10dlzTVIqafybQuAAtxo", "mg_ResourceBar");
        var i = e("mg_UserDataManager"),
            n = e("mg_ConfigDataManager"),
            o = e("mg_AudioManager"),
            s = e("mg_Tools"),
            r = e("mg_ViewManager"),
            c = e("mg_ViewLack"),
            l = e("mg_ViewInviteList"),
            q = e("mg_LeuokBi"),
            h = cc._decorator,
            g = (h.qccclassa, h.property, cc.Class({
                extends: cc.Component,
                properties: {
                    qdiamonda: cc.Label,
                    qmoneya: cc.Label,
                    qenergyStra: cc.Label,
                    qgunChipStra: cc.Label,
                    qenergyRecoverya: cc.Label
                },
                statics: {},
                ctor: function() {},
                start: function() {
                    this.qrefreshResourcea(), this.qrefreshEnergya(), this.schedule(this.qrefreshEnergya, 1)
                },
                qrefreshResourcea: function() {
                    this.qdiamonda.string = s.Tools.qnumberFormata(i.qUserDataMgra.getInstance().data.qdiamonda), this.qmoneya.string = s.Tools.qnumberFormata(i.qUserDataMgra.getInstance().data.qmoneya);
                    var e = i.qUserDataMgra.getInstance().data.qgunChipa.toString(),
                        a = i.qUserDataMgra.getInstance().qgetCurUnlockGuna();
                    a && (e += "/" + a.qfragmenta), this.qgunChipStra.string = e
                },
                qrefreshEnergya: function() {
                    i.qUserDataMgra.getInstance().qcalculateEnergya(), this.qenergyStra.string = i.qUserDataMgra.getInstance().data.qenergya + "/" + n.default.getInstance().qinitMapa.MAIN_LIMIT.Value, i.qUserDataMgra.getInstance().data.qenergya >= n.default.getInstance().qinitMapa.MAIN_LIMIT.Value ? this.qenergyRecoverya.node.active = !1 : (this.qenergyRecoverya.node.active = !0, this.qenergyRecoverya.string = s.Tools.qtimeFormatShorta(n.default.getInstance().qinitMapa.MAIN_SPEED.Value / 1e3 - s.Tools.qgetTimestampSa() + i.qUserDataMgra.getInstance().data.qlastRecoverEnergyTimea) + "+1")
                },
                onAddDiamondClick: function() {
                    q.LeuokBi.qsafeCalla("action", {
                        qactionTypea: 2,
                        qactionNumbera: 17
                    }), o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), r.ViewManager.getInstance().qopenViewa({
                        View: l.ViewInviteList
                    })
                },
                onAddMoneyClick: function() {
                    q.LeuokBi.qsafeCalla("action", {
                        qactionTypea: 2,
                        qactionNumbera: 18
                    }), o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), r.ViewManager.getInstance().qopenViewa({
                        View: c.ViewLack,
                        qCustomDataa: {
                            qexchangeTypea: c.qViewLackExchangeTypea.Money
                        }
                    })
                },
                onAddEnergyClick: function() {
                    q.LeuokBi.qsafeCalla("action", {
                        qactionTypea: 2,
                        qactionNumbera: 19
                    }), o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), r.ViewManager.getInstance().qopenViewa({
                        View: c.ViewLack,
                        qCustomDataa: {
                            qexchangeTypea: c.qViewLackExchangeTypea.Energy
                        }
                    })
                }
            }));
        t.default = g, cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_ConfigDataManager: "mg_ConfigDataManager",
        mg_LeuokBi: "mg_LeuokBi",
        mg_Tools: "mg_Tools",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewInviteList: "mg_ViewInviteList",
        mg_ViewLack: "mg_ViewLack",
        mg_ViewManager: "mg_ViewManager"
    }],
    mg_RotationForever: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "ada0e02YtJC7bNxFDNLEWK7", "mg_RotationForever");
        var i = cc._decorator,
            n = (i.qccclassa, i.property, cc.Class({
                extends: cc.Component,
                properties: {},
                statics: {},
                ctor: function() {},
                onEnable: function() {
                    this.rotation()
                },
                onDisable: function() {
                    this.node.stopAllActions()
                },
                rotation: function() {
                    var e = cc.rotateBy(.4, 180);
                    this.node.runAction(cc.repeatForever(e))
                }
            }));
        t.default = n, cc._RF.pop()
    }, {}],
    mg_ScreenAdapter: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "8ad4brVrAhPW4F5Er+irqbQ", "mg_ScreenAdapter"), Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {
                this.qscreenSizea = null, this.qframeSizea = null, this.qdesignSizea = new cc.Size(720, 1280), this.qisPortraita = !0, this.qoffsetValuea = 0, this.ret = 1
            }
            return e.getInstance = function() {
                return null == this.instance && (this.instance = new e, this.instance.init()), this.instance
            }, e.prototype.init = function() {
                console.log("ScreenAdapter.init()"), this.qframeSizea = cc.view.getFrameSize(), console.log("qframeSizea", this.qframeSizea), this.qscreenSizea = cc.view.getVisibleSizeInPixel(), console.log("qscreenSizea", this.qscreenSizea)
            }, e.prototype.qscreenFita = function() {
                var e = 1 * this.qframeSizea.width / this.qframeSizea.height,
                    a = this.qdesignSizea.width / this.qdesignSizea.height,
                    t = !0,
                    i = !0;
                e < a ? (t = !0, i = !1) : e == a ? (t = !0, i = !0) : (i = !0, t = !1);
                var n = cc.director.getScene(),
                    o = n.getChildByName("Canvas").getComponent(cc.Canvas);
                if (n && o && (o.fitHeight = i, o.fitWidth = t), console.log("fitWidth:" + t + " fitHeight:" + i), this.qisPortraita) {
                    var s = this.qscreenSizea.height / this.qdesignSizea.height;
                    s /= this.qscreenSizea.width / this.qdesignSizea.width, this.ret = s, this.qoffsetValuea = (this.qdesignSizea.height * s - this.qdesignSizea.height) / 2
                } else s = this.qscreenSizea.width / this.qdesignSizea.width, s /= this.qscreenSizea.height / this.qdesignSizea.height, this.ret = s, this.qoffsetValuea = (this.qdesignSizea.width * s - this.qdesignSizea.width) / 2;
                console.log("ret " + this.ret), console.log("qoffsetValuea " + this.qoffsetValuea)
            }, e.prototype.qgetScreenRatioa = function() {
                return 1 * this.qframeSizea.width / this.qframeSizea.height
            }, e.prototype.qgetDesignRatioa = function() {
                return 1 * this.qdesignSizea.width / this.qdesignSizea.height
            }, e.prototype.fitBg = function(e) {
                this.qisPortraita ? this.qgetScreenRatioa() < this.qgetDesignRatioa() && (e.height = this.qdesignSizea.height * this.ret) : this.qgetScreenRatioa() > this.qgetDesignRatioa() && (e.width = this.qdesignSizea.width * this.ret)
            }, e.prototype.qfitLefta = function(e) {
                if (this.qisPortraita) console.error("\u4e0d\u9002\u7528\u6b64\u65b9\u6cd5");
                else if (this.qgetScreenRatioa() > this.qgetDesignRatioa()) {
                    var a = e.position.x -= this.qoffsetValuea;
                    e.position.x -= this.qoffsetValuea, e.setPosition(a, e.position.y)
                }
            }, e.prototype.qfitRighta = function(e) {
                this.qisPortraita ? console.error("\u4e0d\u9002\u7528\u6b64\u65b9\u6cd5") : this.qgetScreenRatioa() > this.qgetDesignRatioa() && e.setPosition(e.position.x += this.qoffsetValuea, e.position.y)
            }, e.prototype.fitTop = function(e) {
                if (this.qisPortraita) {
                    if (this.qgetScreenRatioa() < this.qgetDesignRatioa()) {
                        var a;
                        a = this.qoffsetValuea > 60 ? e.position.y + 60 : e.position.y + this.qoffsetValuea, e.setPosition(e.x, a)
                    }
                } else console.error("\u4e0d\u9002\u7528\u6b64\u65b9\u6cd5")
            }, e.prototype.qfitBottoma = function(e) {
                this.qisPortraita ? this.qgetScreenRatioa() < this.qgetDesignRatioa() && (e.height = this.qdesignSizea.height * this.ret) : console.error("\u4e0d\u9002\u7528\u6b64\u65b9\u6cd5")
            }, e.prototype.fitBot = function(e) {
                if (this.qisPortraita) {
                    if (this.qgetScreenRatioa() < this.qgetDesignRatioa()) {
                        var a = e.position.y -= this.qoffsetValuea;
                        e.setPosition(e.x, a)
                    }
                } else console.error("\u4e0d\u9002\u7528\u6b64\u65b9\u6cd5")
            }, e.prototype.qgetDesignSizea = function() {
                return this.qdesignSizea
            }, e.prototype.getRet = function() {
                return this.ret
            }, e.prototype.getOffset = function() {
                return this.qoffsetValuea
            }, e.prototype.qgetScreenSizea = function() {
                return this.qscreenSizea
            }, e.prototype.getFrameSize = function() {
                return this.qframeSizea
            }, e.instance = null, e
        }();
        t.ScreenAdapter = i, cc._RF.pop()
    }, {}],
    mg_SdkCommon: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "4ec89M//VdB5JJ8NltpJDAX", "mg_SdkCommon"), Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, n = e("mg_WeChatGame"),
            o = e("mg_BuildingInfo"),
            s = e("mg_ViewManager"),
            r = e("mg_UserDataManager");
        (function(e) {
            e[e.Test = 0] = "Test"
        })(i = t.AdId || (t.AdId = {}));
        var c = function() {
            function e() {}
            return e.qshowVideoAda = function(e, a, t) {
                void 0 === t && (t = !1), o.default.qgetChannelTypea() == o.qChannelTypea.WX ? n.WeChatGame.getInstance().qshowVideoAda(e, a) : o.default.qgetChannelTypea() == o.qChannelTypea.QQPlay || o.default.qgetChannelTypea() == o.qChannelTypea.H5 && e(3)
            }, e.qloadVideoAda = function(e, a) {
                o.default.qgetChannelTypea() == o.qChannelTypea.WX ? n.WeChatGame.getInstance().qloadVideoAda(e, a) : e(!0)
            }, e.share = function(e, a, t, i, c, l) {
                void 0 === c && (c = null), void 0 === l && (l = !1), console.log("Sdk share"), o.default.qgetChannelTypea() == o.qChannelTypea.WX ? n.WeChatGame.getInstance().share(function() {
                    s.ViewManager.getInstance().qshowTipa("Người chơi mới nhấp vào liên kết chia sẻ, bạn có thể nhận thêm phần thưởng", 2, !1, -210), r.qUserDataMgra.getInstance().qisShowInterAda = !1, e && e()
                }, a, t, i, c, l) : o.default.qgetChannelTypea() == o.qChannelTypea.QQPlay || o.default.qgetChannelTypea() == o.qChannelTypea.H5 && e && e()
            }, e.qinviteFrienda = function(e, a, t) {
                o.default.qgetChannelTypea() == o.qChannelTypea.WX ? n.WeChatGame.getInstance().qinviteFrienda(e, a, t) : o.default.qgetChannelTypea() == o.qChannelTypea.QQPlay || o.default.qgetChannelTypea() == o.qChannelTypea.H5 && e()
            }, e.qgetChannelAdIda = function(e) {
                if (o.default.qgetChannelTypea() == o.qChannelTypea.WX) switch (e) {
                    case i.Test:
                        return ""
                } else o.default.qgetChannelTypea(), o.qChannelTypea.QQPlay
            }, e
        }();
        t.SdkCommon = c, cc._RF.pop()
    }, {
        mg_BuildingInfo: "mg_BuildingInfo",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewManager: "mg_ViewManager",
        mg_WeChatGame: "mg_WeChatGame"
    }],
    mg_StringKeyMap: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "368bbgMAwtJrJAcyhwM8QSp", "mg_StringKeyMap");
        var i = cc.Class({
            extends: e("mg_Map").Map,
            properties: {},
            statics: {},
            ctor: function() {
                this._table = {}
            },
            qgetTablea: function() {
                return this._table
            }
        });
        t.StringKeyMap = i, cc._RF.pop()
    }, {
        mg_Map: "mg_Map"
    }],
    mg_Tools: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "9a6baM1d61I14tGRl1CTTXt", "mg_Tools"), Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = parseFloat("1.192092896e-07F"),
            n = function() {
                function e() {}
                return e.qgetRandomIntInclusivea = function(e, a) {
                    return e = Math.ceil(e), a = Math.floor(a), Math.floor(Math.random() * (a - e + 1)) + e
                }, e.qgetRandomArbitrarya = function(e, a) {
                    return Math.random() * (a - e) + e
                }, e.qnumberFormata = function(e) {
                    return e >= 1e7 ? Math.floor(e / 1e6) + "m" : e >= 1e4 ? Math.floor(e / 1e3) + "k" : e.toString()
                }, e.qnumberFormatKa = function(e) {
                    return Math.floor(e / 1e3) + "k"
                }, e.qisNullOrUndefineda = function(e) {
                    return null == e || void 0 == e
                }, e.qgetMd5Urla = function(e) {
                    return cc.loader.qmd5Pipea && (e = cc.loader.qmd5Pipea.transformURL(e)), e
                }, e.qgetRawUrla = function(a) {
                    var t = cc.url.raw(a);
                    return e.qgetMd5Urla(t)
                }, e.qgetRemoteRawUrla = function(a) {
                    return console.log(wxDownloader.REMOTE_SERVER_ROOT + "/" + e.qgetRawUrla(a)), wxDownloader.REMOTE_SERVER_ROOT + "/" + e.qgetRawUrla(a)
                }, e.qgetOrAddComponenta = function(e, a) {
                    if (e && a) {
                        var t = e.getComponent(a);
                        return t || (t = e.addComponent(a)), t
                    }
                    return null
                }, e.qgetTimestampMSa = function() {
                    return Math.floor(Date.now())
                }, e.qgetTimestampSa = function() {
                    return Math.floor(e.qgetTimestampMSa() / 1e3)
                }, e.qsplitToNumLista = function(e, a) {
                    void 0 === a && (a = ",");
                    for (var t = e.split(a), i = [], n = 0; n < t.length; n++) t[n].length > 0 && i.push(Number(t[n]));
                    return i
                }, e.clamp = function(e, a, t) {
                    return Math.max(e, Math.min(a, t))
                }, e.qisOutOfScreena = function(e) {
                    var a = cc.winSize;
                    return Math.abs(e.x) > a.width / 2 || Math.abs(e.y) > a.height / 2
                }, e.qcompareVersionStra = function(e, a) {
                    if (e === a) return 0;
                    for (var t = e.split("."), i = a.split("."), n = Math.min(t.length, i.length), o = 0; o < n; o++) {
                        if (parseInt(t[o]) > parseInt(i[o])) return 1;
                        if (parseInt(t[o]) < parseInt(i[o])) return -1
                    }
                    return t.length > i.length ? 1 : t.length < i.length ? -1 : 0
                }, e.qgetTimeNumbera = function(e) {
                    e = e.replace(/-/g, "/"), console.log(e);
                    var a = Date.parse(e);
                    return console.log(a), a
                }, e.qgetTimeDiffa = function(e, a) {
                    var t = a - e;
                    return {
                        day: Math.floor(t / 86400),
                        hour: Math.floor(t % 86400 / 3600),
                        minute: Math.floor(t % 86400 % 3600 / 60),
                        second: Math.floor(t % 86400 % 3600 % 60)
                    }
                }, e.qtimestampToTimea = function(e) {
                    var a = new Date(e);
                    return a.getFullYear() + "-" + (a.getMonth() + 1 < 10 ? "0" + (a.getMonth() + 1) : a.getMonth() + 1) + "-" + (a.getDate() + 1 < 10 ? "0" + a.getDate() : a.getDate())
                }, e.qarrContainsa = function(e, a) {
                    for (var t = 0, i = e; t < i.length; t++)
                        if (i[t] === a) return !0;
                    return !1
                }, e.qpAngleSigneda = function(e, a) {
                    var t = e.normalize(),
                        n = a.normalize(),
                        o = Math.atan2(t.x * n.y - t.y * n.x, t.dot(n));
                    return Math.abs(o) < i ? 0 : o
                }, e.qgetRelationPosa = function(e, a) {
                    var t = e.parent.convertToWorldSpaceAR(e.getPosition());
                    return a.parent.convertToNodeSpaceAR(t)
                }, e.Normal = function(e, a, t) {
                    return 1 / (Math.sqrt(6.28) * t) * Math.exp(-1 * (e - a) * (e - a) / (2 * t * t))
                }, e.qRandom_Normala = function(a, t, i, n) {
                    var o = null,
                        s = null,
                        r = null;
                    do {
                        o = e.qgetRandomArbitrarya(i, n), r = e.Normal(o, a, t), s = e.qgetRandomArbitrarya(0, e.Normal(a, a, t))
                    } while (s > r);
                    return o
                }, e.qgetTimeByStra = function(e, a) {
                    e *= 1e3;
                    var t = a.split(":"),
                        i = new Date(e),
                        n = i.getFullYear() + "-" + (i.getMonth() + 1 < 10 ? "0" + (i.getMonth() + 1) : i.getMonth() + 1) + "-" + i.getDate() + " " + t[0] + ":" + t[1] + ":" + t[2];
                    n = n.replace(/-/g, "/");
                    var o = new Date(n);
                    return Math.floor(o.getTime() / 1e3)
                }, e.setFPS = function(e) {
                    window.qg && qg.setPreferredFramesPerSecond(e)
                }, e.qgetRandomArrayElementsa = function(e, a) {
                    for (var t, i, n = e.slice(0), o = e.length, s = o - a; o-- > s;) t = n[i = Math.floor((o + 1) * Math.random())], n[i] = n[o], n[o] = t;
                    return n.slice(s)
                }, e.qgetShowNickNamea = function(a, t) {
                    return e.qgetStrLengtha(a) > 2 * t ? e.qsubStrByCharactera(a, 2 * t) : a
                }, e.qgetStrLengtha = function(e) {
                    for (var a = 0, t = e.length, i = -1, n = 0; n < t; n++) a += (i = e.charCodeAt(n)) >= 0 && i <= 128 ? 1 : 2;
                    return a
                }, e.qsubStrByCharactera = function(e, a) {
                    for (var t = 0, i = 0, n = -1, o = 0; o < e.length && !((i += (n = e.charCodeAt(o)) >= 0 && n <= 128 ? 1 : 2) > a); o++) t += 1;
                    return e.substring(0, t)
                }, e.qtimeFormata = function(e) {
                    var a = Math.floor(e / 3600),
                        t = Math.floor(e / 60 - 60 * a),
                        i = Math.floor(e - 3600 * a - 60 * t);
                    return (a < 10 ? "0" + a : a) + ":" + (t < 10 ? "0" + t : t) + ":" + (i < 10 ? "0" + i : i)
                }, e.qtimeFormatMina = function(e) {
                    var a = Math.floor(e / 3600),
                        t = Math.floor(e / 60 - 60 * a);
                    return (a < 10 ? "0" + a : a) + ":" + (t < 10 ? "0" + t : t)
                }, e.qtimeFormatShorta = function(e) {
                    var a = Math.floor(e / 60),
                        t = Math.floor(e - 60 * a);
                    return (a < 10 ? "0" + a : a) + ":" + (t < 10 ? "0" + t : t)
                }, e.qloadSpriteFramea = function(e, a, t, i) {
                    t ? cc.loader.loadRes(a, cc.SpriteFrame, function(a, t) {
                        if (a) return console.log(a), void(i && i());
                        e.spriteFrame = t, i && i()
                    }) : cc.loader.load({
                        url: a,
                        type: "png"
                    }, function(a, t) {
                        if (a) return console.error(a), void(i && i());
                        e.spriteFrame = new cc.SpriteFrame(t), i && i()
                    })
                }, e.qcloneObjecta = function(e) {
                    return JSON.parse(JSON.stringify(e))
                }, e.qisEndWithStringa = function(e, a) {
                    var t = e.length - a.length;
                    return e.substr(t, a.length) == a
                }, e.qdownloadZipFilea = function(e, a, t, i) {
                    void 0 === i && (i = null), console.log("\u4e0b\u8f7dzip\u5305... " + e);
                    var n = cc.loader.getXMLHttpRequest();
                    n.onreadystatechange = function() {
                        if (4 == n.qreadyStatea && n.status >= 200 && n.status < 400) {
                            console.log("\u4e0b\u8f7d\u5b8c\u6210");
                            var e = new JSZip;
                            e.qloadAsynca(n.qresponsea).then(function() {
                                a(e)
                            })
                        }
                    }, n.qresponseTypea = "arraybuffer", n.open("GET", e, !0), n.onerror = function() {
                        console.log("\u4e0b\u8f7d\u51fa\u9519"), t()
                    }, n.ontimeout = function() {
                        console.log("\u4e0b\u8f7d\u8d85\u65f6"), t()
                    }, i && n.addEventListener("progress", function(e) {
                        e.qlengthComputablea && i(e.loaded / e.total)
                    }, !1), n.send()
                }, e.qisValidStringa = function(e) {
                    return "string" == typeof e && e.length > 0
                }, e.qapplyCabinFontToLabela = function(a) {
                    if (a && a.node) {
                        a.font = null;
                        try {
                            a.useSystemFont = !0
                        } catch (t) {}
                        a._isSystemFontUsed = !0, a.fontFamily = "Cabin-Bold", a._forceUpdateRenderData && a._forceUpdateRenderData()
                    }
                }, e.qapplyCabinFontToNodea = function(a) {
                    if (a) {
                        var t = a.getComponentsInChildren(cc.Label);
                        if (t)
                            for (var i = 0; i < t.length; i++) e.qapplyCabinFontToLabela(t[i])
                    }
                }, e
            }();
        t.Tools = n, cc._RF.pop()
    }, {}],
    mg_TouchBlock: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "31cabJifJlHg72cZx9/thxE", "mg_TouchBlock");
        var i = cc._decorator,
            n = (i.qccclassa, i.property, cc.Class({
                extends: cc.Component,
                properties: {
                    qloadingNodea: cc.Node,
                    qdescRlba: cc.RichText
                },
                statics: {},
                ctor: function() {},
                onload: function() {
                    this.qloadingNodea.active = !1, this.qdescRlba.string = ""
                },
                showLoading: function(e) {
                    if (this.node.stopAllActions(), this.qloadingNodea.active = !1, e) {
                        var a = this;
                        this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                            a.qloadingNodea.active = !0
                        })))
                    }
                },
                qshowDesca: function(e) {
                    this.qdescRlba.string = e
                }
            }));
        t.default = n, cc._RF.pop()
    }, {}],
    mg_UIDepth: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "bc335CWqNZF4rAQ/cRHBvfq", "mg_UIDepth"), Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            function(e) {
                e[e.UIRoot = 100] = "UIRoot", e[e.qTipRoota = 200] = "qTipRoota", e[e.TouchBlock = 500] = "TouchBlock"
            }(t.UIDepth || (t.UIDepth = {})), cc._RF.pop()
    }, {}],
    mg_UserDataManager: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "af2921X3xNIxKUGuUYNB/FC", "mg_UserDataManager");
        var i, n, o = e("mg_Tools"),
            s = e("mg_AudioManager"),
            r = e("mg_BuildingInfo"),
            c = e("mg_CDB"),
            l = e("mg_ConfigDataManager"),
            q = e("mg_ViewManager"),
            h = e("mg_RemoteConfigManager");
        (function(e) {
            e.HP = "10001", e.HANGUP_MONEY = "10002", e.DAMAGE = "10003", e.CLIP_COUNT = "10004", e.ROCKET_DAMAGE = "10005", e.ROCKET_RELOAD = "10006"
        })(i = t.qAttribIDa || (t.qAttribIDa = {})),
        function(e) {
            e[e.qNotInvitea = 0] = "qNotInvitea", e[e.CanGet = 1] = "CanGet", e[e.qAlreadyGeta = 2] = "qAlreadyGeta"
        }(n = t.qInvitePlayerTypea || (t.qInvitePlayerTypea = {}));
        var g = function() {
            this.uid = null, this.type = n.qNotInvitea, this.qavatarUrla = null
        };
        t.qInvitePlayerDataa = g;
        var u = cc.Class({
            extends: cc.Component,
            properties: {},
            statics: {
                getInstance: function() {
                    return null == this.instance && (this.instance = new d), this.instance
                },
                instance: null
            },
            ctor: function() {
                var e = this;
                e.data = null, e.uid = "", e.isNew = !1, e.qlastSyncWxSubScorea = null, e.qpowera = 0, e.qisGuangdonga = !1, e.qinviteLista = [], e.qyouziMoreGameShowTimesa = 0, e.qfreeWeaponIda = 0, e.qcurFreeWeaponIda = 0, e.qisShowInterAda = !0
            },
            randomWeapon: function() {
                var e = Math.floor(9 * Math.random() + 1);
                e + 2e5 <= this.data.qweaponIDa ? this.randomWeapon() : (this.qfreeWeaponIda = 2e5 + e, this.qcurFreeWeaponIda = 0, console.log("this.qfreeWeaponIda------------", this.qfreeWeaponIda))
            },
            qgenerateRandomStringa: function() {
                return Math.random().toString(36).substr(2)
            },
            qgetUserDataFileNamea: function() {
                return "b" + this.uid
            },
            getUserData: function() {
                console.log("\u52a0\u8f7d\u672c\u5730\u7528\u6237\u6570\u636e...");
                var e = cc.sys.localStorage.getItem("bl2"),
                    a = cc.sys.localStorage.getItem(this.qgetUserDataFileNamea());
                if (null == e || void 0 == e || "" == e) e = a;
                else if (null != a && void 0 != a && "" != a) {
                    var t = JSON.parse(e),
                        i = JSON.parse(a);
                    t.stageID < i.stageID && (e = a)
                }
                this.data = null != e && void 0 != e && "" != e ? JSON.parse(e) : {
                    sound: !0,
                    qdiamonda: 0,
                    qmoneya: 1560,
                    qenergya: parseInt(l.default.getInstance().qinitMapa.MAIN_LIMIT.Value),
                    qlastRecoverEnergyTimea: o.Tools.qgetTimestampSa(),
                    qlastHangupTimea: o.Tools.qgetTimestampSa(),
                    qlastHangupSaveTimea: o.Tools.qgetTimestampSa(),
                    qhangupMoneya: parseInt(l.default.getInstance().qinitMapa.DOLLAR_NUMBER.Value),
                    qmaxHpLva: 1,
                    qhangupMoneyLva: 1,
                    qdamageLva: 1,
                    qweaponIDa: 200001,
                    qsecondWeaponIDa: 0,
                    qunlockWeaponArra: [200001],
                    stageID: 1,
                    qcurStageIDa: 1,
                    qinviteIdGetLista: [],
                    qguideIda: 1,
                    qshareNuma: 0,
                    qhangUpPopa: o.Tools.qtimestampToTimea(o.Tools.qgetTimestampMSa()),
                    qsignDatea: "",
                    qsignNuma: 0,
                    qfreeMoneyDatea: "",
                    qfreeMoneyNuma: 0,
                    qlotteryDatea: "",
                    qlotteryDataa: null,
                    qlotteryNuma: 0,
                    qhelmeta: 0,
                    qhelmetGuidea: 0,
                    qlotteryGuidea: 0,
                    qisShowFreeLotterya: !1,
                    qisShowFreeShielda: !1,
                    qgunChipa: 0,
                    qmustGetChipa: !1
                }, o.Tools.qisNullOrUndefineda(this.data.qguideIda) && (this.data.qguideIda = 0), o.Tools.qisNullOrUndefineda(this.data.qshareNuma) && (this.data.qshareNuma = 0), o.Tools.qisNullOrUndefineda(this.data.qsignNuma) && (this.data.qsignNuma = 0), o.Tools.qisNullOrUndefineda(this.data.qhelmeta) && (this.data.qhelmeta = 0), o.Tools.qisNullOrUndefineda(this.data.qhelmetGuidea) && (this.data.qhelmetGuidea = 0), o.Tools.qisNullOrUndefineda(this.data.qlotteryGuidea) && (this.data.qlotteryGuidea = 0), o.Tools.qisNullOrUndefineda(this.data.qisShowFreeShielda) && (this.data.qisShowFreeShielda = !1), o.Tools.qisNullOrUndefineda(this.data.qisShowFreeLotterya) && (this.data.qisShowFreeLotterya = !1), o.Tools.qisNullOrUndefineda(this.data.qmustGetChipa) && (this.data.qmustGetChipa = !1), o.Tools.qisNullOrUndefineda(this.data.qgunChipa) && (this.data.qgunChipa = 0), this.qinitInviteLista(), this.qpowera = this.qcalculatePowera(), s.default.getInstance().setEnable(this.data.sound)
            },
            qgetCurUnlockGuna: function() {
                for (var e = l.default.getInstance().qgunLista, a = 0; a < e.length; a++)
                    if (-1 == this.data.qunlockWeaponArra.indexOf(e[a].id)) return e[a];
                return null
            },
            qgetLotteryNuma: function() {
                var e = o.Tools.qtimestampToTimea(o.Tools.qgetTimestampMSa());
                return this.data.qlotteryDatea != e && (this.data.qlotteryDatea = e, this.data.qlotteryNuma = 0, this.data.qlotteryDataa = null), this.data.qlotteryNuma
            },
            qgetLotteryDataa: function() {
                return this.qgetLotteryNuma(), !o.Tools.qisNullOrUndefineda(this.data.qlotteryDataa) && this.data.qlotteryDataa.length || this.qgenerateLotteryDataa(), this.data.qlotteryDataa
            },
            qgenerateLotteryDataa: function() {
                var e = this.data.stageID - 1;
                e < 1 ? e = 1 : e > 100 && (e = 100), this.data.qlotteryDataa = [];
                for (var a = 0; a < 5; a++) {
                    var t = l.default.getInstance().qlotteryLista[a].pool,
                        i = [],
                        n = l.default.getInstance().qlotteryPoolMapa[t];
                    for (var s in n) e >= n[s].lvmin && e <= n[s].lvmax && i.push(n[s]);
                    var r = i[Math.floor(o.Tools.qgetRandomArbitrarya(0, i.length))];
                    this.data.qlotteryDataa.push(r)
                }
            },
            qisCanFreeMoneya: function() {
                var e = o.Tools.qtimestampToTimea(o.Tools.qgetTimestampMSa());
                return this.data.qfreeMoneyDatea != e ? (this.data.qfreeMoneyDatea = e, this.data.qfreeMoneyNuma = 0, !0) : this.data.qfreeMoneyNuma < l.default.getInstance().qinitMapa.VIDEOMONEY.Value
            },
            qisCanSigna: function() {
                return this.data.qsignDatea != o.Tools.qtimestampToTimea(o.Tools.qgetTimestampMSa())
            },
            qcalculatePowera: function() {
                var e = 100 * this.data.qmaxHpLva;
                this.data.qhelmeta && (this.data.qmaxHpLva <= 160 ? e = parseInt(l.default.getInstance().qLvUpMapa[i.HP][this.data.qmaxHpLva - 1].Effect) : e += 390);
                var a = l.default.getInstance().gunMap[this.data.qweaponIDa.toString()],
                    t = e + 100 * this.data.qdamageLva + parseInt(a.fight);
                if (this.data.qsecondWeaponIDa) {
                    var n = l.default.getInstance().gunMap[this.data.qsecondWeaponIDa.toString()];
                    t += parseInt(n.fight)
                }
                return t
            },
            qrefreshPowera: function() {
                var e = this.qcalculatePowera();
                e != this.qpowera && (q.ViewManager.getInstance().qshowPowerTipa(this.qpowera, e), this.qpowera = e)
            },
            qcalculateEnergya: function() {
                var e = o.Tools.qgetTimestampSa(),
                    a = e - this.data.qlastRecoverEnergyTimea,
                    t = Math.floor(l.default.getInstance().qinitMapa.MAIN_SPEED.Value / 1e3);
                if (a >= t) {
                    var i = Math.floor(a / t);
                    console.log("\u4f53\u529b\u6062\u590d " + i + " \u70b9"), this.data.qenergya += i, this.data.qenergya >= l.default.getInstance().qinitMapa.MAIN_LIMIT.Value && (this.data.qenergya = l.default.getInstance().qinitMapa.MAIN_LIMIT.Value), this.data.qlastRecoverEnergyTimea = e - Math.floor(a % t)
                }
            },
            qpassStagea: function(e) {
                this.data.stageID == e ? (this.data.stageID++, this.data.qcurStageIDa = this.data.stageID, 0 == this.qgetLotteryNuma() && (this.data.qlotteryDataa = null), r.default.qisWXChannela() && this.data.stageID != this.qlastSyncWxSubScorea && (this.qlastSyncWxSubScorea = this.data.stageID)) : this.data.qcurStageIDa++
            },
            qsaveUserDataa: function() {
                console.log("\u4fdd\u5b58\u7528\u6237\u6570\u636e..."), this.data.sound = s.default.getInstance().enable, cc.sys.localStorage.setItem("bl2", JSON.stringify(this.data))
            },
            qisNewInvitea: function() {
                for (var e = 0; e < this.qinviteLista.length; e++)
                    if (this.qinviteLista[e].type == n.CanGet) return !0;
                return !1
            },
            qinitInviteLista: function() {
                for (var e = 0; e < this.data.qinviteIdGetLista.length; e++) {
                    var a = new g;
                    a.uid = this.data.qinviteIdGetLista[e], a.type = n.qAlreadyGeta, this.qinviteLista.push(a)
                }
            },
            qpushIntoInviteGetLista: function(e) {
                -1 == this.data.qinviteIdGetLista.indexOf(e) && this.data.qinviteIdGetLista.push(e)
            },
            qpushIntoInviteLista: function(e) {
                for (var a = 0; a < this.qinviteLista.length; a++)
                    if (this.qinviteLista[a].uid == e) return;
                var t = new g;
                t.uid = e, t.type = n.CanGet, this.qinviteLista.push(t)
            },
            qupdateInvitePlayerDataa: function(e, a) {
                for (var t = 0; t < this.qinviteLista.length; t++)
                    if (this.qinviteLista[t].uid == e) return void(this.qinviteLista[t].qavatarUrla = a)
            },
            qgetInviteLista: function(e) {
                if (r.default.qgetChannelTypea() == r.qChannelTypea.WX) {
                    console.log("qgetInviteLista from CDB");
                    var a = this,
                        t = {
                            key: 1,
                            sdType: 2,
                            success: function(i) {
                                console.log("CDB GetUserData Success \u4e0a\u884c:" + JSON.stringify(t) + " \u4e0b\u884c:" + JSON.stringify(i));
                                for (var n = 0, o = i.info; n < o.length; n++) {
                                    var s = o[n];
                                    a.qpushIntoInviteLista(s)
                                }
                                console.log(a.qinviteLista), e && e()
                            },
                            fail: function(a) {
                                console.error("CDB GetUserData Fail \u4e0a\u884c:" + JSON.stringify(t) + " \u4e0b\u884c:" + JSON.stringify(a)), e && e()
                            }
                        };
                    c.CDB.getUserData(t)
                }
            },
            qunlockWeapona: function(e) {
                this.data.qunlockWeaponArra.indexOf(e) > -0 || this.data.qunlockWeaponArra.push(e)
            },
            qequipWeapona: function(e) {
                1 == l.default.getInstance().gunMap[e.toString()].qguntypea ? this.data.qweaponIDa = e : this.data.qsecondWeaponIDa = e, this.qrefreshPowera()
            },
            qisMaxShareCounta: function() {
                return this.data.qshareNuma >= h.default.getInstance().qtotalSharea
            },
            qsetTotalShareByLocationa: function() {
                if (r.default.qgetChannelTypea() == r.qChannelTypea.WX) {
                    console.log("qgetLocationInfoa from CDB");
                    var e = {
                        success: function(a) {
                            console.log("CDB qgetLocationInfoa Success \u4e0a\u884c:" + JSON.stringify(e) + " \u4e0b\u884c:" + JSON.stringify(a)), !a.info || 19 != a.info.id && 32 != a.info.id || (h.default.getInstance().qtotalSharea = 0, this.qisGuangdonga = !0)
                        },
                        fail: function(a) {
                            console.error("CDB qgetLocationInfoa Fail \u4e0a\u884c:" + JSON.stringify(e) + " \u4e0b\u884c:" + JSON.stringify(a))
                        }
                    };
                    c.CDB.qgetLocationInfoa(e)
                }
            }
        });
        t.qUserDataMgra = u;
        var d = u;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_BuildingInfo: "mg_BuildingInfo",
        mg_CDB: "mg_CDB",
        mg_ConfigDataManager: "mg_ConfigDataManager",
        mg_RemoteConfigManager: "mg_RemoteConfigManager",
        mg_Tools: "mg_Tools",
        mg_ViewManager: "mg_ViewManager"
    }],
    mg_ViewBase: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "df40fYJ5wBGtIQWi29GeHEX", "mg_ViewBase");
        var i = cc.Class({
            extends: cc.Component,
            properties: {},
            statics: {
                qprafabPatha: ""
            },
            ctor: function() {
                var e = this;
                e.qisFullScreena = !1, e.isHide = !1, e.isPaused = !1, e.qinstanceIda = 0, e.qblackBga = null
            },
            onClose: function() {},
            onHide: function() {},
            onShow: function() {},
            onPause: function() {},
            onResume: function() {},
            onReceiveMessage: function(e) {},
            close: function() {
                this.onClose(), this.node.destroy()
            },
            hide: function() {
                this.node.active = !1, this.isHide = !0, this.onHide()
            },
            show: function() {
                this.node.active = !0, this.isHide = !1, this.onShow()
            },
            pause: function() {
                this.isPaused = !0, this.onPause()
            },
            resume: function() {
                this.isPaused = !1, this.onResume()
            },
            qshowBlackBga: function(e, a) {
                if (void 0 === a && (a = null), e)
                    if (null == this.qblackBga) {
                        var t = this;
                        cc.loader.loadRes("prefab/common/mg_BlackBg", cc.Prefab, function(i, n) {
                            if (i) return console.error(i), void t.qshowBlackBga(e, a);
                            var o = cc.instantiate(n);
                            t.node.addChild(o, -1), t.qblackBga = o, a && a()
                        })
                    } else this.qblackBga.active = !0, a && a();
                else null != this.qblackBga && (this.qblackBga.active = !1), a && a()
            },
            qplayOpenAnima: function(e) {
                if (this.node.setScale(.2), e) {
                    var a = cc.sequence(cc.scaleTo(.3, 1, 1).easing(cc.easeBackOut()), cc.callFunc(e));
                    this.node.runAction(a)
                } else this.node.runAction(cc.scaleTo(.3, 1, 1).easing(cc.easeBackOut()))
            },
            qplayCloseAnima: function(e) {
                if (e) {
                    var a = cc.sequence(cc.scaleTo(.3, 0, 0).easing(cc.easeBackIn()), cc.callFunc(e));
                    this.node.runAction(a)
                } else this.node.runAction(cc.scaleTo(.3, 0, 0).easing(cc.easeBackIn()))
            }
        });
        t.ViewBase = i, cc._RF.pop()
    }, {}],
    mg_ViewBattle: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "b15e6jYQChNBIgQwo26s9vE", "mg_ViewBattle");
        var i = e("mg_ViewBase"),
            n = e("mg_Tools"),
            o = e("mg_ScreenAdapter"),
            s = e("mg_Gun"),
            r = e("mg_ConfigDataManager"),
            c = e("mg_Bullet"),
            l = e("mg_UserDataManager"),
            q = e("mg_Npc"),
            h = e("mg_Obstacle"),
            g = e("mg_ViewManager"),
            u = e("mg_ViewWin"),
            d = e("mg_ViewHome"),
            m = e("mg_AudioManager"),
            p = e("mg_EnemyBullet"),
            f = e("mg_ViewLose"),
            v = e("mg_ViewReborn"),
            y = e("mg_LeuokBi"),
            C = (e("mg_WeChatGame"), e("mg_Guide")),
            w = (e("mg_BuildingInfo"), e("mg_ViewHelmet")),
            _ = e("mg_Box"),
            I = e("mg_ViewShield"),
            b = e("mg_ViewMaxAmmo"),
            M = e("mg_ViewBuff"),
            S = cc._decorator,
            k = (S.qccclassa, S.property, cc.Class({
                extends: i.ViewBase,
                properties: {
                    qgunNodea: cc.Node,
                    qstageIDlba: cc.Label,
                    qenemyCountlba: cc.Label,
                    qenemyCoutProgressa: cc.ProgressBar,
                    qbulletlba: cc.Label,
                    qbulletCountProga: cc.ProgressBar,
                    qhpProga: cc.ProgressBar,
                    hplb: cc.Label,
                    qxueguangNodea: cc.Node,
                    qbattleCameraa: cc.Node,
                    qhitHeadNodea: cc.Node,
                    qhitHeadSpa: cc.Node,
                    top: cc.Node,
                    qsniperScopeNodea: cc.Node,
                    qsniperScopeSpa: cc.Node,
                    qtipSniperMovea: cc.Node,
                    qsniperCameraa: cc.Camera,
                    qsniperSpritea: cc.Sprite,
                    btnChangeWeapon: cc.Node,
                    qtipBtnChangeGuna: cc.Node,
                    qtipAnimBtnChangeGuna: cc.Node,
                    qbossWarnNodea: cc.Node,
                    qbossWarnBga: cc.Node,
                    qbossWarnDesca: cc.Label,
                    qsniperAimAnia: cc.Node,
                    qbtnHelmeta: cc.Node,
                    qhelmeta: cc.Node,
                    qhelmetHpProga: cc.ProgressBar,
                    qhelmetPera: cc.Label,
                    qbtnShielda: cc.Node,
                    qiconShielda: cc.Node,
                    qshieldHpProga: cc.ProgressBar,
                    qshielda: cc.Node,
                    qshieldHoleRoota: cc.Node,
                    qshieldNoCrasha: cc.Node,
                    qshieldCrasha: cc.Node,
                    qshieldCrashAnia: cc.Node,
                    qnpcFireAnia: cc.Node,
                    qnpcFireWarna: cc.Node,
                    maxAmmoBtn: cc.Node,
                    addBuffBtn: cc.Node,
                    buffAmmo: cc.Node,
                    buffQiang: cc.Node,
                    buffQiang2: cc.Node
                },
                statics: {
                    qprafabPatha: "prefab/battle/mg_ViewBattle"
                },
                ctor: function() {
                    var e = this;
                    e.qisFullScreena = !0, e.bgNode = null, e.qnpcRoota = null, e.qbulletRoota = null, e.qenemyBulletRoota = null, e.qenemyBulletZindea = cc.macro.MAX_ZINDEX, e.qenemyPlaneZindea = cc.macro.MAX_ZINDEX, e.qnpcVerticalZindexsa = [], e.qmaxEnemyCounta = 0, e.qcurEnemyCounta = 0, e.qbulletPfba = null, e.qbulletCachePoola = null, e.qenemyBulletPfba = null, e.qenemyBulletCachePoola = null, e.hp = 0, e.maxHp = 0, e.qmaxShowHpa = 0, e.qatkBasea = 0, e.atk = 0, e.qatkShowBasea = 0, e.qatkShowa = 0, e.npcPfb = null, e.qnpcCachePoola = null, e.qpreLoadMaxStepa = 0, e.qpreLoadCurStepa = 0, e.qpreLoadCbka = null, e.qpreLoadFinishCbka = null, e.qshootSpeeda = 200, e.qbulletFlytimea = 150, e.qweaponIDa = 0, e.qsecondWeaponIDa = 0, e.qisSnipera = !1, e.gun = null, e.qsecondGuna = null, e.qgunDataa = null, e.qmoneya = 0, e.qstageIda = 0, e.qcurWaveIda = 0, e.qcurWaveStartTimea = 0, e.qmaxWaveIda = 1, e.qcurNpcCountArra = null, e.qcurNpcCounta = 0, e.qmaxNpcCounta = 100, e.minY = 300, e.qminScalea = .3, e.qnormalYa = -60, e.qnormalScalea = 1, e.maxY = -530, e.qmaxScalea = 2, e.qminVerticalYa = 205, e.qminVerticalScalea = .2, e.qnormalVerticalYa = 80, e.qnormalVerticalScalea = 1, e.qmaxVerticalYa = -100, e.qmaxVerticalScalea = 2, e.isFire = !1, e.qobstacleArra = [], e.qplaneBornSectina = null, e.qplaneMoveSectina = null, e.qisCanReborna = !0, e.qlaserWarnRoota = null, e.qisBattleEnda = !1, e.qshowMissBaseYa = 0, e.qsniperGuideStepa = 0, e.guide = null, e.qguideArrowa = null, e.qisShowGuidea = !1, e.qisShowRocketGuidea = !1, e.qbossGuideNodea = null, e.qisShowBossGuideAlreadya = !1, e.qsniperTargetNodea = null, e.qisVerticala = !1, e.qstartTimea = 0, e.qnpcAppearDataa = null, e.qhelmetHpa = 0, e.qhelmetMaxHpa = 0, e.qisCanAirDropa = !0, e.qisShowAirDropBoxa = !1, e.qshieldHpa = 0, e.qshieldMaxHpa = 0, e.qnpcFireAniRoota = null, e.Timer = null
                },
                // onclickMaxAmmo: function() {
                    // console.log("MaxAmmo---------------------");
                    // var e = this;
                    // g.ViewManager.getInstance().qopenViewa({
                        // View: b.ViewMaxAmmo,
                        // qCustomDataa: {
                            // cbk: function() {
                                // console.log("use-------ammo-------------"), cc._isMaxAmmo = !0, e.maxAmmoBtn.active = !1, e.buffAmmo.active = !0
                            // }
                        // }
                    // })
                // },
                // onclickAddBuff: function() {
                    // console.log("AddBuff---------------------");
                    // var e = this;
                    // g.ViewManager.getInstance().qopenViewa({
                        // View: M.ViewBuff,
                        // qCustomDataa: {
                            // cbk: function() {
                                // cc._isAddBuff = !0, e.addBuffBtn.active = !1, e.buffQiang.active = !0, e.buffQiang2.active = !0, console.log("use-------Buff-------------")
                            // }
                        // }
                    // })
                // },
                onOpen: function(e) {
                    window.GVGameSave && window.GVGameSave.hideClearDataButton();
                    cc._isMaxAmmo = !1, cc._isAddBuff = !1, this.buffAmmo.active = !1, this.buffQiang.active = !1, this.buffQiang2.active = !1, this.maxAmmoBtn.active = !0, this.addBuffBtn.active = !0;
                    var a = new cc.RenderTexture,
                        t = cc.game._renderContext;
                    a.initWithSize(640, 640, t.STENCIL_INDEX8);
                    var i = new cc.SpriteFrame;
                    i.setTexture(a), this.qsniperSpritea.spriteFrame = i, this.qsniperCameraa.targetTexture = a, o.ScreenAdapter.getInstance().fitTop(this.top), o.ScreenAdapter.getInstance().qfitBottoma(this.node.getChildByName("ui").getChildByName("bottom")), cc.Camera.main.clearFlags = 0, this.qinitTouchEvneta(), this.qstageIDlba.string = this.qstageIda.toString(), this.qshowMissBaseYa = r.default.getInstance().qinitMapa.WMZ_Y.Value;
                    var s = r.default.getInstance().qgetHpLvDataa(l.qUserDataMgra.getInstance().data.qmaxHpLva);
                    this.hp = parseInt(s.qTypenumbera);
                    var c = r.default.getInstance().qgetDamageLvDataa(l.qUserDataMgra.getInstance().data.qdamageLva);
                    this.atk = c.qTypenumbera, this.qatkShowa = c.qShownumbera;
                    var q = r.default.getInstance().gunMap[this.qweaponIDa.toString()];
                    this.hp = this.hp * (1 + q.hp / 1e4), this.atk = this.atk * (1 + q.damage / 1e4), this.qatkShowa = this.qatkShowa * (1 + q.damage / 1e4);
                    var h = q.fight;
                    this.qsecondWeaponIDa && (q = r.default.getInstance().gunMap[this.qsecondWeaponIDa.toString()], this.hp = this.hp * (1 + q.hp / 1e4), this.atk = this.atk * (1 + q.damage / 1e4), this.qatkShowa = this.qatkShowa * (1 + q.damage / 1e4), h += q.fight), this.qweaponIDa == l.qUserDataMgra.getInstance().qcurFreeWeaponIda && (this.hp = 1.34 * this.hp, this.atk = 1.17 * this.atk), this.qatkBasea = this.atk, this.qatkShowBasea = this.qatkShowa, this.maxHp = this.hp, this.qmaxShowHpa = parseInt(s.qShownumbera) + Math.floor(h / 4);
                    for (var g = 0; g < this.qobstacleArra.length; g++)
                        for (var u = 0; u < this.qobstacleArra[g].length; u++) this.qobstacleArra[g][u].parent = this.qnpcRoota;
                    this.qnpcAppearDataa = r.default.getInstance().qnpcAppearMapa[this.qstageIda], this.qisCanAirDropa = !0, this.qisShowAirDropBoxa = !1;
                    var d = 1e3;
                    for (g = 0; g < r.default.getInstance().qnpcSectionsa.length; g++) this.qnpcVerticalZindexsa.push(d), d += 1e3;
                    this.qshielda.active = !1, this.qshieldHpProga.progress = 0, this.qshieldHpa = .5 * this.hp, this.qshieldMaxHpa = this.qshieldHpa, this.qrefreshShowHpa(), this.qrefreshShowEnemyCounta(), this.qrefreshShowBulletCounta(), 1 != this.qstageIda && 2 != this.qstageIda && 3 != this.qstageIda || (this.btnChangeWeapon.getComponent(cc.Button).interactable = !1, this.btnChangeWeapon.getChildByName("lock").active = !0), y.LeuokBi.qsafeCalla("battle", {
                        qlogTypea: 1,
                        qbattleTypea: 1,
                        qbattleIda: this.qstageIda
                    });
                    var m = this;
                    this.qcheckHelmetEquipa(function() {
                        m.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(m.qcheckNextWavea, m))), m.qstartTimea = n.Tools.qgetTimestampSa()
                    })
                },
                qcheckHelmetEquipa: function(e) {
                    l.qUserDataMgra.getInstance().qinviteLista.length >= 2 && !l.qUserDataMgra.getInstance().data.qhelmeta ? (l.qUserDataMgra.getInstance().data.qhelmetGuidea = 1, g.ViewManager.getInstance().qopenViewa({
                        View: w.ViewHelmet,
                        qCustomDataa: {
                            qcloseCbka: function() {
                                e && e()
                            }
                        }
                    })) : e && e()
                },
                qpreLoada: function(e, a, t, i, n) {
                    this.qstageIda = t, this.qweaponIDa = e, this.qsecondWeaponIDa = a, this.qpreLoadMaxStepa = 6, this.qpreLoadCbka = i, this.qpreLoadFinishCbka = n, this.qInitNpca(), this.qInitBulleta(), this.qInitObstaclesa();
                    var o = r.default.getInstance().qgetNpcFubenDataa(t);
                    this.qmaxWaveIda = o.length;
                    for (var s = 0; s < o.length; s++)
                        for (var c = 0; c < o[s].length; c++) this.qmaxEnemyCounta += o[s][c].qnpcnumbera;
                    this.qcurEnemyCounta = this.qmaxEnemyCounta
                },
                qInitScenea: function() {
                    var e = n.Tools.qgetTimestampMSa(),
                        a = this,
                        t = r.default.getInstance().qgetStageInfoa(this.qstageIda);
                    cc.loader.loadRes("prefab/battle/bg/mg_" + t.map, cc.Prefab, function(i, o) {
                        if (i) return console.error(i), void a.qInitScenea();
                        var s = cc.instantiate(o);
                        a.node.getChildByName("bg").addChild(s), a.bgNode = s.getChildByName("sp"), a.qnpcRoota = s.getChildByName("qnpcRoota"), a.qbulletRoota = s.getChildByName("qbulletRoota"), a.qlaserWarnRoota = s.getChildByName("qlaserWarnRoota"), a.qplaneBornSectina = s.getChildByName("qplaneBorna"), a.qplaneMoveSectina = s.getChildByName("plane"), a.qnpcFireAniRoota = s.getChildByName("qfireAniRoota"), 2 == t.direction ? (a.qbattleCameraa.y = 195, a.qsniperCameraa.node.y = 195, a.qisVerticala = !0) : "qfuben_3a" == t.map && (a.qbattleCameraa.y = 195, a.qsniperCameraa.node.y = 195), console.log("loaded background:" + (n.Tools.qgetTimestampMSa() - e)), a.onLoadFinish(), a.qenemyBulletRoota = s.getChildByName("qenemyBulletRoota")
                    })
                },
                qInitWeapona: function(e) {
                    void 0 === e && (e = null);
                    var a = n.Tools.qgetTimestampMSa(),
                        t = this;
                    this.qgunDataa = r.default.getInstance().gunMap[this.qweaponIDa.toString()], e || (e = this.qgunDataa.qGunicona), cc.loader.loadRes("prefab/gun/mg_" + e, cc.Prefab, function(e, i) {
                        if (e) return console.error(e), void t.qInitWeapona("quzia");
                        var o = cc.instantiate(i);
                        o.zIndex = 100, t.gun = o.getComponent(s.default), t.gun.init(t.qgunDataa, t), t.qgunNodea.addChild(o), console.log("loaded weapon:" + (n.Tools.qgetTimestampMSa() - a)), t.qInitSecondWeapona()
                    }), this.qbulletFlytimea = r.default.getInstance().qinitMapa.FLYTIME.Value, this.qshootSpeeda = this.qgunDataa.qfireRatea
                },
                qInitSecondWeapona: function(e) {
                    if (void 0 === e && (e = null), this.qsecondWeaponIDa) {
                        var a = n.Tools.qgetTimestampMSa(),
                            t = this,
                            i = r.default.getInstance().gunMap[this.qsecondWeaponIDa.toString()];
                        e || (e = i.qGunicona), cc.loader.loadRes("prefab/gun/mg_" + e, cc.Prefab, function(e, o) {
                            if (e) return console.error(e), void t.qInitSecondWeapona("q98Ka");
                            var r = cc.instantiate(o);
                            r.zIndex = 100, t.qsecondGuna = r.getComponent(s.default), t.qsecondGuna.init(i, t), t.qgunNodea.addChild(r), r.active = !1, console.log("loaded second weapon:" + (n.Tools.qgetTimestampMSa() - a)), t.onLoadFinish()
                        })
                    } else this.onLoadFinish()
                },
                qInitNpca: function() {
                    var e = n.Tools.qgetTimestampMSa(),
                        a = this;
                    cc.loader.loadRes("prefab/battle/ui/mg_Npc", cc.Prefab, function(t, i) {
                        if (t) return console.error(t), void a.qInitNpca();
                        a.qnpcCachePoola = new cc.NodePool(q.default), a.npcPfb = i;
                        for (var o = 1; o <= 20; o++) {
                            var s = cc.instantiate(a.npcPfb);
                            a.qnpcCachePoola.put(s)
                        }
                        console.log("loaded qnpca:" + (n.Tools.qgetTimestampMSa() - e)), a.onLoadFinish(), a.qInitScenea()
                    })
                },
                qInitBulleta: function() {
                    var e = n.Tools.qgetTimestampMSa(),
                        a = this;
                    cc.loader.loadRes("prefab/battle/ui/mg_Bullet", cc.Prefab, function(t, i) {
                        if (t) return console.error(t), void a.qInitBulleta();
                        a.qbulletCachePoola = new cc.NodePool(c.default), a.qbulletPfba = i;
                        for (var o = 1; o <= 10; o++) {
                            var s = cc.instantiate(a.qbulletPfba);
                            a.qbulletCachePoola.put(s)
                        }
                        console.log("loaded qbulleta:" + (n.Tools.qgetTimestampMSa() - e)), a.onLoadFinish(), a.qInitEnemyBulleta()
                    })
                },
                qInitEnemyBulleta: function() {
                    var e = n.Tools.qgetTimestampMSa(),
                        a = this;
                    cc.loader.loadRes("prefab/battle/ui/mg_EnemyBullet", cc.Prefab, function(t, i) {
                        if (t) console.error(t);
                        else {
                            a.qenemyBulletCachePoola = new cc.NodePool(p.default), a.qenemyBulletPfba = i;
                            for (var o = 1; o <= 10; o++) {
                                var s = cc.instantiate(a.qenemyBulletPfba);
                                a.qenemyBulletCachePoola.put(s)
                            }
                        }
                        console.log("loaded qenemya qbulleta:" + (n.Tools.qgetTimestampMSa() - e)), a.onLoadFinish(), a.qInitWeapona()
                    })
                },
                qInitObstaclesa: function() {
                    var e = n.Tools.qgetTimestampMSa(),
                        a = r.default.getInstance().qgetStageInfoa(this.qstageIda);
                    if (n.Tools.qisNullOrUndefineda(a.obstacle1)) return console.log("no obstacle"), void this.onLoadFinish();
                    for (var t = [], i = 1; i <= 10; i++) n.Tools.qisNullOrUndefineda(a["obstacle" + i]) || t.push(a["obstacle" + i]);
                    var o = 0,
                        s = this;
                    s.qobstacleArra = [],
                        function a() {
                            if (o >= t.length) return console.log("loaded Obstacles:" + (n.Tools.qgetTimestampMSa() - e)), void s.onLoadFinish();
                            var i, c, l = n.Tools.qsplitToNumLista(t[o], "x"),
                                q = l[0],
                                h = l[1];
                            3 == l.length ? (c = l[2], i = n.Tools.qgetRandomArbitrarya(-300, 300)) : (i = l[2], c = l[3]);
                            var g = s.qgetScaleByYa(c),
                                u = r.default.getInstance().qobstacleMapa[q];
                            cc.loader.loadRes("prefab/battle/obstacle/mg_" + u.qobstaclea, cc.Prefab, function(e, t) {
                                if (e) return console.error(e), void s.qInitObstaclesa();
                                for (var n = [], r = 0; r < h; r++) {
                                    var l = cc.instantiate(t);
                                    n.push(l), l.setPosition(i, c), i += parseFloat(l.getComponent("mg_Obstacle").spacing) * g, l.setScale(g * l.scaleX), l.zIndex = s.minY - c, l.active = !0, 1 == u.turn && (l.scaleX = -l.scaleX)
                                }
                                s.qobstacleArra.push(n), console.log("loaded Obstacle:" + o), o++, a()
                            })
                        }()
                },
                qinitTouchEvneta: function() {
                    var e = this;
                    this.node.getChildByName("bg").on(cc.Node.EventType.TOUCH_MOVE, function(a) {
                        if (!e.isPaused || e.qisShowGuidea || e.qisShowRocketGuidea || e.qsniperGuideStepa || e.qbossGuideNodea) {
                            var t = a.touch.getDelta(),
                                i = 2;
                            e.qisSniperScopeOpeneda() && (i = 1);
                            var o = t.x * i,
                                s = t.y * i,
                                r = n.Tools.clamp(-cc.winSize.width / 2, cc.winSize.width / 2, e.qbattleCameraa.x + o),
                                c = n.Tools.clamp(-530, 530, e.qbattleCameraa.y + s);
                            e.qbattleCameraa.setPosition(r, c), e.qsniperCameraa.node.setPosition(r, c + 110)
                        }
                    }), this.node.getChildByName("bg").on(cc.Node.EventType.TOUCH_START, function() {
                        e.isFire = !0
                    }), this.node.getChildByName("bg").on(cc.Node.EventType.TOUCH_END, function() {
                        e.isFire = !1, e.qisSnipera || e.gun.qstopFirea()
                    })
                },
                qrefreshShowHpa: function() {
                    r.default.getInstance().qgetHpLvDataa(l.qUserDataMgra.getInstance().data.qmaxHpLva);
                    var e = Math.floor(this.hp / this.maxHp * this.qmaxShowHpa);
                    this.hplb.string = e + "/" + this.qmaxShowHpa, this.qhpProga.progress = this.hp / this.maxHp, this.qhpProga.progress <= .5 && this.qstageIda >= 5 && this.qisCanAirDropa && this.qairDropa()
                },
                qairDropa: function() {
                    if (!this.qisBattleEnda) {
                        this.qisCanAirDropa = !1;
                        var e = this;
                        cc.loader.loadRes("prefab/battle/mg_Box", cc.Prefab, function(a, t) {
                            if (a) return console.log(a), void e.qairDropa();
                            var i = cc.instantiate(t);
                            i.getComponent(_.default).qairbornea(function() {
                                e.onOpenDropBox()
                            }), i.parent = e.qnpcRoota
                        })
                    }
                },
                onOpenDropBox: function() {
                    if (!this.qisBattleEnda && !this.qiconShielda.active) {
                        console.log("onOpenDropBox"), m.default.getInstance().play("yx_" + m.qAudioSourceNamea.Click);
                        var e = this,
                            a = !1;
                        l.qUserDataMgra.getInstance().data.qisShowFreeShielda || (a = !0), g.ViewManager.getInstance().qopenViewa({
                            View: I.ViewShield,
                            qCustomDataa: {
                                isFree: a,
                                cbk: function(a) {
                                    a ? (e.qbtnShielda.active = !1, e.qiconShielda.active = !0, e.qshielda.active = !0, e.qshielda.y = -500, e.qshielda.runAction(cc.moveTo(.2, 0, 0))) : (e.qbtnShielda.active = !0, e.qiconShielda.active = !1), e.qisShowAirDropBoxa = !0
                                }
                            }
                        })
                    }
                },
                qrefreshShowEnemyCounta: function() {
                    var e = this.qcurEnemyCounta / this.qmaxEnemyCounta,
                        a = Math.floor(100 * e);
                    !a && e && (a = 1), this.qenemyCountlba.string = this.qcurEnemyCounta.toString(), this.qenemyCoutProgressa.progress = e
                },
                qrefreshShowBulletCounta: function() {
                    this.qisSnipera ? (this.qbulletlba.string = this.qsecondGuna.qclipCounta + "/" + this.qsecondGuna.qmaxClipCounta, this.qbulletCountProga.progress = this.qsecondGuna.qclipCounta / this.qsecondGuna.qmaxClipCounta) : (this.qbulletlba.string = this.gun.qclipCounta + "/" + this.gun.qmaxClipCounta, this.qbulletCountProga.progress = this.gun.qclipCounta / this.gun.qmaxClipCounta), cc._isMaxAmmo && (this.qbulletCountProga.progress = 1, this.qisSnipera ? this.qbulletlba.string = this.qsecondGuna.qmaxClipCounta + "/" + this.qsecondGuna.qmaxClipCounta : this.qbulletlba.string = this.gun.qmaxClipCounta + "/" + this.gun.qmaxClipCounta)
                },
                update: function(e) {
                    if (!this.qisBattleEnda && (!this.isPaused || this.qisShowGuidea || this.qisShowRocketGuidea || this.qbossGuideNodea || 2 == this.qsniperGuideStepa)) {
                        var a = n.Tools.qgetTimestampMSa();
                        if (this.qisSnipera) {
                            if (a - this.qsecondGuna.qlastShootTimea >= this.qshootSpeeda && !this.qsecondGuna.qisReloada) {
                                var t = new cc.Vec2(0, 0),
                                    i = this.qbattleCameraa.getPosition();
                                t = t.add(i);
                                var o = this.qcheckCollisiona(t);
                                if (!o) return this.qsniperAimAnia.active = !1, void this.qsniperAimAnia.stopAllActions();
                                if (1 == o.type && !o.node.getComponent(h.default).qexplodeNodea) return this.qsniperAimAnia.active = !1, void this.qsniperAimAnia.stopAllActions();
                                if (this.qsniperTargetNodea != o.node) this.qsniperTargetNodea && (this.qsniperAimAnia.active = !1, this.qsniperAimAnia.stopAllActions()), this.qsniperTargetNodea = o.node;
                                else if (this.qsniperAimAnia.active) return;
                                var s = this;
                                this.qsniperAimAnia.active = !0, this.qsniperAimAnia.getComponent(cc.Animation).play(), this.qsniperAimAnia.runAction(cc.sequence(cc.delayTime(.8), cc.callFunc(function() {
                                    s.qsniperFirea(s.qsniperTargetNodea)
                                })))
                            }
                        } else if (a - this.gun.qlastShootTimea >= this.qshootSpeeda && this.gun && !this.gun.qisReloada) {
                            t = new cc.Vec2(0, 0), i = this.qbattleCameraa.getPosition(), t = t.add(i);
                            var r = this.qcheckCollisiona(t);
                            if (!r) return void this.gun.qstopFirea();
                            if (1 == r.type && !r.node.getComponent(h.default).qexplodeNodea) return void this.gun.qstopFirea();
                            if (this.gun.fire()) {
                                var c = this,
                                    l = cc.v2(0, 0);
                                if (1 == this.gun.qcontinueShootCounta);
                                else {
                                    var q = this.gun.qfrontSighta.qgetRadiusa();
                                    l.x = n.Tools.qRandom_Normala(l.x, this.gun.qradiusStepa, -q, q), l.y = n.Tools.qRandom_Normala(l.y, this.gun.qradiusStepa, -q, q)
                                }
                                l = l.add(i), this.gun.qrightFirePointa && this.qshootBulleta(this.gun.qrightFirePointa, l, i, this.gun.qrightBulletRotationa, function(e) {
                                    c.hitNpc(l, r.node, e, !0)
                                }), this.gun.qmidFirePointa && this.qshootBulleta(this.gun.qmidFirePointa, l, i, this.gun.qmidBulletRotationa, function(e) {
                                    c.hitNpc(l, r.node, e, !0)
                                }), this.gun.qleftFirePointa && this.qshootBulleta(this.gun.qleftFirePointa, l, i, this.gun.qleftBulletRotationa, function(e) {
                                    c.qbulletCachePoola.put(e)
                                }), this.qisShowGuidea ? (this.qhideGuidea(), this.qisShowGuidea = !1) : this.qisShowRocketGuidea && (this.qhideGuidea(), this.qisShowRocketGuidea = !1)
                            }
                        }
                    }
                },
                qsniperFirea: function(e) {
                    if (void 0 === e && (e = null), (!this.isPaused || 2 == this.qsniperGuideStepa) && n.Tools.qgetTimestampMSa() - this.qsecondGuna.qlastShootTimea >= this.qshootSpeeda && this.qsecondGuna.fire(!0)) {
                        var a, t = this,
                            i = this.qbattleCameraa.getPosition(),
                            o = null;
                        if (e) a = (a = new cc.Vec2(0, 0)).add(i), o = e;
                        else {
                            var s = this.qgunDataa.Rmin;
                            a = (a = new cc.Vec2(n.Tools.qgetRandomArbitrarya(-s, s), n.Tools.qgetRandomArbitrarya(-s, s))).add(i);
                            var r = this.qcheckCollisiona(a);
                            r && (1 == r.type ? r.node.getComponent(h.default).qexplodeNodea && (o = r.node) : o = r.node)
                        }
                        if (this.qshootBulleta(null, a, i, 0, function(i) {
                                t.hitNpc(a, o, i, !1, null != e)
                            }, c.qBulletTypea.qSniperBulleta), 0 == this.qgunDataa.bolt) {
                            var l = this.qsniperScopeNodea.getChildByName("reload");
                            l.active = !0, l.runAction(cc.sequence(cc.delayTime(this.qshootSpeeda / 1e3), cc.callFunc(function() {
                                l.active = !1
                            })))
                        }
                        this.qsniperAimAnia.active = !1, this.qsniperAimAnia.stopAllActions();
                        var q = n.Tools.qgetRandomArbitrarya(-5, 5),
                            g = n.Tools.qgetRandomArbitrarya(10, 20),
                            u = n.Tools.clamp(-cc.winSize.width / 2, cc.winSize.width / 2, t.qbattleCameraa.x + q),
                            d = n.Tools.clamp(-530, 530, t.qbattleCameraa.y + g);
                        this.qbattleCameraa.runAction(cc.moveTo(.15, u, d).easing(cc.easeCubicActionOut())), this.qsniperCameraa.node.runAction(cc.moveTo(.15, u, d + 110).easing(cc.easeCubicActionOut())), this.qsniperScopeNodea.stopAllActions(), this.qsniperScopeNodea.setScale(1), this.qsniperScopeNodea.runAction(cc.sequence(cc.scaleTo(.15, 1.1).easing(cc.easeCubicActionOut()), cc.scaleTo(.15, 1).easing(cc.easeCubicActionIn()))), this.qsniperScopeSpa.stopAllActions(), this.qsniperScopeSpa.rotation = 0, this.qsniperScopeSpa.runAction(cc.sequence(cc.rotateTo(.15, -4).easing(cc.easeCubicActionOut()), cc.rotateTo(.225, 2), cc.rotateTo(.075, 0)))
                    }
                },
                qcheckCollisiona: function(e) {
                    var a = this.bgNode.convertToWorldSpaceAR(e),
                        t = null,
                        i = null,
                        n = null,
                        o = null,
                        s = null;
                    if (this.qbossGuideNodea) {
                        for (var r = this.qnpcRoota.childrenCount - 1; r >= 0; r--)
                            if (t = (n = this.qnpcRoota.children[r]).getComponent(h.default));
                            else {
                                if ((i = n.getComponent(q.default)).hp <= 0) continue;
                                var c = i.qnpcNodea.convertToNodeSpaceAR(a);
                                if (i.isBoss && i.qcheckCollisionBarbettea(c, this.qbossGuideNodea)) return this.qhideGuidea(), this.qbossGuideNodea = null, {
                                    type: 0,
                                    node: n
                                }
                            } return null
                    }
                    for (r = this.qenemyBulletRoota.childrenCount - 1; r >= 0; r--) {
                        s = (n = this.qenemyBulletRoota.children[r]).convertToNodeSpaceAR(a);
                        var l = (o = n.getComponent(p.default)).body.width,
                            g = o.body.height;
                        if (new cc.Rect(o.body.x - l / 2, o.body.y - g / 2, l, g).contains(s)) return {
                            type: 2,
                            node: n
                        }
                    }
                    if (this.qisShowRocketGuidea) return null;
                    for (r = this.qnpcRoota.childrenCount - 1; r >= 0; r--)
                        if (t = (n = this.qnpcRoota.children[r]).getComponent(h.default)) {
                            var u = t.node.convertToNodeSpaceAR(a);
                            if (t.qpointInPolygona(u)) {
                                var d = t.qcheckCollisionNpca(u, a);
                                return d ? {
                                    type: 0,
                                    node: d
                                } : {
                                    type: 1,
                                    node: n
                                }
                            }
                        } else if (i = n.getComponent(q.default)) {
                        if (i.hp <= 0) continue;
                        var m = i.qnpcNodea.convertToNodeSpaceAR(a);
                        if (i.qcheckCollisionBodya(m)) return {
                            type: 0,
                            node: n
                        };
                        if (i.isBoss && i.qcheckCollisionBarbettea(m)) return {
                            type: 0,
                            node: n
                        }
                    } else if (n.getComponent(_.default) && (s = n.convertToNodeSpaceAR(a), l = n.width, g = n.height, new cc.Rect(-l / 2, -g / 2, l, g).contains(s))) return {
                        type: 3,
                        node: n
                    };
                    return null
                },
                qplayerHurta: function(e, a) {
                    if (void 0 === a && (a = null), !(this.hp <= 0)) {
                        if (this.qhelmetHpa) {
                            var t = e;
                            this.qhelmetHpa < t && (t = this.qhelmetHpa), this.qhelmetHpa -= t, this.qhelmetHpProga.progress = 1 - this.qhelmetHpa / this.qhelmetMaxHpa, this.qhelmetPera.string = Math.floor(this.qhelmetHpa / this.qhelmetMaxHpa * 100) + "%", e -= t, m.default.getInstance().play("yx_hit_helmet")
                        }
                        if (e > 0) {
                            if (this.qshielda.active && this.qshieldHpa) {
                                if (this.qshieldHpa -= e, this.qshieldHpa < 0 && (this.qshieldHpa = 0), this.qshieldHpProga.progress = 1 - this.qshieldHpa / this.qshieldMaxHpa, this.qshieldHpa) {
                                    if (m.default.getInstance().play("yx_hit_shield"), a) {
                                        var i, n = a.getPosition();
                                        if (a.parent != this.qgunNodea) {
                                            var o = this.qbattleCameraa.getPosition();
                                            n = n.sub(o)
                                        }
                                        i = a.parent.convertToWorldSpaceAR(n);
                                        var s = this.qshielda.convertToNodeSpaceAR(i),
                                            r = cc.instantiate(a.getChildByName("qposuia"));
                                        r.active = !0, r.setPosition(s), r.stopAllActions(), r.scale = .4, r.parent = this.qshielda.getChildByName("qholeRoota")
                                    }
                                    this.qshielda.stopAllActions(), this.qshielda.setPosition(0, 0), this.qshielda.runAction(cc.sequence(cc.moveBy(.02, 5, 7), cc.moveBy(.02, -6, 7), cc.moveBy(.02, -13, 3), cc.moveBy(.02, 3, -6), cc.moveBy(.02, -5, 5), cc.moveBy(.02, 2, -8), cc.moveBy(.02, -8, -10), cc.moveBy(.02, 3, 10), cc.moveTo(.02, 0, 0)))
                                } else {
                                    m.default.getInstance().play("yx_bad_shield"), this.qshieldNoCrasha.active = !1, this.qshieldCrasha.active = !0, this.qshieldCrashAnia.active = !0, this.qshieldCrashAnia.getComponent(cc.Animation).play(), this.qshielda.stopAllActions();
                                    var c = this;
                                    this.qshielda.runAction(cc.sequence(cc.delayTime(.2), cc.moveTo(.2, 0, -500), cc.callFunc(function() {
                                        c.qshielda.active = !1, c.qiconShielda.active = !1
                                    })))
                                }
                                return void this.qplayDangera(cc.color(200, 200, 200))
                            }
                            cc._isAddBuff ? this.hp -= .7 * e : this.hp -= e, console.log("this.hp---------", this.hp), this.qplayDangera(), this.hp <= 0 && (this.hp = 0), this.qrefreshShowHpa(), this.hp && this.hp > 0 || this.qbattleReborna()
                        } else this.qplayDangera(cc.color(200, 200, 200))
                    }
                },
                qgetHitPerByScalea: function(e) {
                    var a = 100;
                    return e < this.qnormalScalea && (a = 10 + 90 / (this.qnormalScalea - this.qminScalea) * (e - this.qminScalea)), a
                },
                hitNpc: function(e, a, t, i, o) {
                    if (void 0 === i && (i = !1), void 0 === o && (o = !1), a && a.isValid) {
                        var s = a.getComponent(q.default);
                        if (s) {
                            if (s.hp > 0) {
                                if (!this.qisVerticala && i && !o) {
                                    var r = a.scaleY;
                                    s.qobstaclea && (r = s.qobstaclea.node.scaleY);
                                    var l = this.qgetHitPerByScalea(r),
                                        g = n.Tools.qgetRandomArbitrarya(0, 100);
                                    if (s.qisShowMissa()) {
                                        if (this.qshowTipChangeGuna(), g > l) {
                                            var u = this;
                                            return void t.getComponent(c.default).qshowMissa(function() {
                                                u.qbulletCachePoola.put(t)
                                            })
                                        }
                                    } else if (this.qhideTipChangeGuna(), g > l) return void this.qbulletCachePoola.put(t)
                                }
                                var d = this.atk,
                                    m = this.qatkShowa,
                                    f = this.bgNode.convertToWorldSpaceAR(e),
                                    v = s.qnpcNodea.convertToNodeSpaceAR(f);
                                if (s.qisShielda && (m = (d = d * s.qnpcAttriba.qshielda / 1e4) * s.qnpcAttriba.qshielda / 1e4), s.isBoss) {
                                    var y = s.qcheckCollisionBarbettea(v);
                                    if (y) {
                                        var C = this;
                                        return t.getComponent(c.default).qplayHitEffecta(s, function() {
                                            C.qbulletCachePoola.put(t)
                                        }), void s.qhurtBarbettea(y, d)
                                    }
                                    if (s.qcheckCollisionBodya(v)) {
                                        var w = this;
                                        return t.getComponent(c.default).qplayHitEffecta(s, function() {
                                            w.qbulletCachePoola.put(t)
                                        }), void s.hurt(d)
                                    }
                                } else if (o || s.qcheckCollisionBodya(v)) {
                                    var I = !1;
                                    s.qcheckCollisionHeada(v) && (d *= 3, m *= 3, I = !0);
                                    var b = this;
                                    return t.getComponent(c.default).qplayHitEffecta(s), t.getComponent(c.default).qshowDama(Math.floor(m), I, this.qisSnipera, function() {
                                        b.qbulletCachePoola.put(t)
                                    }), void s.hurt(d, function() {
                                        I && b.qshowHitHeada()
                                    })
                                }
                            }
                        } else {
                            if (a.getComponent(p.default)) {
                                var M = this;
                                return void a.getComponent(p.default).qplayExplodea(function() {
                                    M.qenemyBulletCachePoola.put(a)
                                })
                            }
                            if (a.getComponent(h.default)) {
                                var S = a.getComponent(h.default);
                                if (S.qexplodeNodea) {
                                    var k = this,
                                        A = a.getPosition(),
                                        N = S.qexplodeNodea.width * a.scaleX,
                                        B = S.qexplodeNodea.height * a.scaleY;
                                    S.qexplodea(), this.node.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function() {
                                        k.qexplodeHurtNpca(A, N, B)
                                    })))
                                }
                            } else a.getComponent(_.default) && a.getComponent(_.default).onBoxOpen()
                        }
                        this.qbulletCachePoola.put(t)
                    } else this.qbulletCachePoola.put(t)
                },
                qexplodeHurtNpca: function(e, a, t) {
                    for (var i, n, o, s = new cc.Rect(e.x - a / 2, e.y - t / 2, a, t), r = this.qnpcRoota.childrenCount - 1; r >= 0; r--)(n = (i = this.qnpcRoota.children[r]).getComponent(q.default)) && n.qAiMoveDirectiona != q.qAiMoveDirectionTypea.Fly && s.contains(i.getPosition()) && (o = n.maxHp, n.hurt(o))
                },
                qnpcDeatha: function(e) {
                    this.qhideTipChangeGuna(), this.qmoneya += r.default.getInstance().qgetNpcKillprofita(parseInt(e.qnpcFubenDataa.qkillprofita), this.qstageIda), this.qcurEnemyCounta--, this.qcurNpcCounta--, 1 == this.qstageIda && y.LeuokBi.qsafeCalla("qappOncea", {
                        qactionNumbera: 99 + this.qmaxEnemyCounta - this.qcurEnemyCounta
                    }), this.qrefreshShowEnemyCounta(), this.qcurEnemyCounta <= 0 ? this.qbattleWina() : this.qcurNpcCounta <= 0 && (this.qcurWaveStartTimea = 0), this.qnpcCachePoola.put(e.node), 2 == this.qsniperGuideStepa && (this.qsniperGuideStepa = 3, this.guide.qshowTipa("Bấm để chuyển súng tiểu liên", cc.v2(0, 110)), this.guide.qshowHanda(this.btnChangeWeapon), this.qtipSniperMovea.active = !1, this.qguideArrowa.destroy(), this.qguideArrowa = null), -1 != e.qwindowIndexa && e.qobstaclea.qrefreshShowNpcFlaga(e.qwindowIndexa)
                },
                qbattleReborna: function() {
                    var e = this;
                    console.log("this.qisCanReborna---------", this.qisCanReborna), this.qisCanReborna ? (this.qisCanReborna = !1, g.ViewManager.getInstance().qopenViewa({
                        View: v.ViewReborn,
                        qCustomDataa: {
                            cbk: function(a) {
                                console.log("----create---------", a), a ? (r.default.getInstance().qgetHpLvDataa(l.qUserDataMgra.getInstance().data.qmaxHpLva), e.hp = e.maxHp, e.qhelmetHpa = e.qhelmetMaxHpa, e.qhelmetHpProga.progress = 0, e.qhelmetPera.string = "100%", e.qrefreshShowHpa()) : e.qbattleLosea()
                            }
                        }
                    })) : this.qbattleLosea()
                },
                qbattleLosea: function() {
                    if (console.log("this.qisBattleEnda---------", this.qisBattleEnda), !this.qisBattleEnda) {
                        this.qisBattleEnda = !0, l.qUserDataMgra.getInstance().qcurFreeWeaponIda = 0;
                        window.GVGameSave && window.GVGameSave.onBattleEnd();
                        var e = !1;
                        !l.qUserDataMgra.getInstance().qcurFreeWeaponIda && l.qUserDataMgra.getInstance().qfreeWeaponIda && (e = !0), l.qUserDataMgra.getInstance().qisShowInterAda = !0;
                        var a = this;
                        console.log("battleWLose, qmoneya:" + this.qmoneya), g.ViewManager.getInstance().qopenViewa({
                            View: f.ViewLose,
                            qCustomDataa: {
                                qmoneya: this.qmoneya,
                                qisShowYuzia: e,
                                cbk: function(e) {
                                    console.log("get times:" + e), a.qendBattlea(e)
                                }
                            }
                        });
                        var t = n.Tools.qgetTimestampSa() - this.qstartTimea;
                        y.LeuokBi.qsafeCalla("battle", {
                            qlogTypea: 3,
                            qbattleTypea: 1,
                            qbattleIda: this.qstageIda,
                            time: t
                        })
                    }
                },
                qbattleWina: function() {
                    var e = this;
                    if (!this.qisBattleEnda) {
                        if (this.qisBattleEnda = !0, l.qUserDataMgra.getInstance().qfreeWeaponIda = 0, l.qUserDataMgra.getInstance().qcurFreeWeaponIda = 0, l.qUserDataMgra.getInstance().qisShowInterAda = !0, this.qisShowAirDropBoxa && !l.qUserDataMgra.getInstance().data.qisShowFreeShielda && (l.qUserDataMgra.getInstance().data.qisShowFreeShielda = !0), 2 == l.qUserDataMgra.getInstance().data.qguideIda && (l.qUserDataMgra.getInstance().data.qguideIda = 3), console.log("qbattleWina, qmoneya:" + this.qmoneya), l.qUserDataMgra.getInstance().data.stageID == this.qstageIda && this.qstageIda > 1) {
                            var a = parseInt(r.default.getInstance().qinitMapa.MAIN_EXPEND.Value);
                            l.qUserDataMgra.getInstance().data.qenergya += a, g.ViewManager.getInstance().qshowEnergyTipa(a)
                        }
                        y.LeuokBi.qsafeCalla("qappOncea", {
                            qactionNumbera: 6 + this.qstageIda
                        });
                        var openWinView = function() {
                            g.ViewManager.getInstance().qopenViewa({
                                View: u.ViewWin,
                                qCustomDataa: {
                                    qstageIda: e.qstageIda,
                                    cbk: function() {
                                        l.qUserDataMgra.getInstance().qpassStagea(e.qstageIda), l.qUserDataMgra.getInstance().qsaveUserDataa(), window.GVGameSave && window.GVGameSave.saveCloudOnly(), g.ViewManager.getInstance().qcloseViewa({
                                            View: A
                                        }), g.ViewManager.getInstance().qopenViewa({
                                            View: d.ViewHome,
                                            qCustomDataa: {
                                                qfromBattlea: 1
                                            }
                                        })
                                    }
                                }
                            })
                        };
                        l.qUserDataMgra.getInstance().qsaveUserDataa(), window.GVGameSave && window.GVGameSave.submitVictoryScore ? window.GVGameSave.submitVictoryScore(openWinView, e.qstageIda) : openWinView();
                        var t = n.Tools.qgetTimestampSa() - this.qstartTimea;
                        y.LeuokBi.qsafeCalla("battle", {
                            qlogTypea: 2,
                            qbattleTypea: 1,
                            qbattleIda: this.qstageIda,
                            time: t
                        })
                    }
                },
                qendBattlea: function(e) {
                    console.log("qendBattlea:" + e), this.qisShowAirDropBoxa && !l.qUserDataMgra.getInstance().data.qisShowFreeShielda && (l.qUserDataMgra.getInstance().data.qisShowFreeShielda = !0), l.qUserDataMgra.getInstance().data.qmoneya += this.qmoneya * e, l.qUserDataMgra.getInstance().qsaveUserDataa(), window.GVGameSave && window.GVGameSave.onBattleEnd(), g.ViewManager.getInstance().qcloseViewa({
                        View: A
                    });
                    var a = 8;
                    0 == this.qmoneya && (a = 0), e > 1 && (a = 15);
                    var t = 0;
                    this.qstageIda >= 5 && (t = 1), g.ViewManager.getInstance().qopenViewa({
                        View: d.ViewHome,
                        qCustomDataa: {
                            qFlyMoneya: a,
                            qfromBattlea: 1,
                            qisLoseGuidea: t
                        }
                    })
                },
                onPause: function() {
                    this.isPaused = !0, this.node.pauseAllActions(), this.qsniperAimAnia.active = !1, this.qsniperAimAnia.stopAllActions();
                    for (var e = 0, a = this.qnpcRoota.children; e < a.length; e++) {
                        (s = a[e]).pauseAllActions(), s.pauseSystemEvents(!0);
                        var t = s.getComponent(h.default);
                        if (t) t.pause();
                        else if (s.getChildByName("qnpcNodea")) {
                            var i = s.getChildByName("spine");
                            i && (i.getComponent(sp.Skeleton).paused = !0)
                        }
                    }
                    for (var n = 0, o = this.qenemyBulletRoota.children; n < o.length; n++) {
                        var s;
                        (s = o[n]).pauseAllActions(), s.pauseSystemEvents(!0)
                    }
                },
                onResume: function() {
                    this.isPaused = !1, this.node.resumeAllActions();
                    for (var e = 0, a = this.qnpcRoota.children; e < a.length; e++) {
                        (s = a[e]).resumeAllActions(), s.resumeSystemEvents(!0);
                        var t = s.getComponent(h.default);
                        if (t) t.resume();
                        else if (s.getChildByName("qnpcNodea")) {
                            var i = s.getChildByName("spine");
                            i && (i.getComponent(sp.Skeleton).paused = !1)
                        }
                    }
                    for (var n = 0, o = this.qenemyBulletRoota.children; n < o.length; n++) {
                        var s;
                        (s = o[n]).resumeAllActions(), s.resumeSystemEvents(!0)
                    }
                },
                qshootBulleta: function(e, a, t, i, n, o) {
                    var s;
                    if (void 0 === o && (o = c.qBulletTypea.Bullet), o == c.qBulletTypea.qSniperBulleta) s = a;
                    else {
                        var r = e.convertToWorldSpaceAR(cc.v2(0, 0));
                        s = (s = this.qbulletRoota.convertToNodeSpaceAR(r)).add(t)
                    }
                    var l = this.qgetBulleta();
                    l.parent = this.qbulletRoota, l.getComponent(c.default).flyTo(o, s, a, this.qbulletFlytimea, i, function() {
                        n && n(l)
                    })
                },
                qgetBulleta: function() {
                    return this.qbulletCachePoola.size() > 0 ? this.qbulletCachePoola.get() : cc.instantiate(this.qbulletPfba)
                },
                qgetEnemyBulleta: function() {
                    return this.qenemyBulletCachePoola.size() > 0 ? this.qenemyBulletCachePoola.get() : cc.instantiate(this.qenemyBulletPfba)
                },
                qgetVerticalNpcZindexa: function(e) {
                    return this.qnpcRoota.childrenCount || (this.qnpcVerticalZindexsa[e] = 1e3 * (e + 1)), this.qnpcVerticalZindexsa[e]--, this.qnpcVerticalZindexsa[e]
                },
                qgetEnemyBulletZindexa: function() {
                    return this.qenemyBulletRoota.childrenCount && this.qenemyBulletZindea || (this.qenemyBulletZindea = cc.macro.MAX_ZINDEX), this.qenemyBulletZindea--, this.qenemyBulletZindea
                },
                qgetEnemyPlaneZindexa: function() {
                    return this.qnpcRoota.childrenCount && this.qenemyPlaneZindea || (this.qenemyPlaneZindea = cc.macro.MAX_ZINDEX), this.qenemyPlaneZindea--, this.qenemyPlaneZindea
                },
                qloadCurWaveInfoa: function() {
                    this.qcurNpcCountArra && this.qcurNpcCountArra.length > 0 && console.error("qcurNpcCountArra is not null"), this.qcurNpcCountArra = [];
                    for (var e = r.default.getInstance().qgetNpcFubenDataa(this.qstageIda)[this.qcurWaveIda - 1], a = 0; a < e.length; a++) {
                        var t = {
                            index: a,
                            count: parseInt(e[a].qnpcnumbera)
                        };
                        this.qcurNpcCountArra.push(t), this.qcurNpcCounta += parseInt(e[a].qnpcnumbera)
                    }
                },
                qcheckNextWavea: function() {
                    if (!(this.qcurWaveIda > this.qmaxWaveIda))
                        if (this.qcurNpcCountArra && this.qcurNpcCountArra.length) this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(this.qcheckNextWavea, this)));
                        else {
                            var e = n.Tools.qgetTimestampMSa();
                            if (e - this.qcurWaveStartTimea >= r.default.getInstance().qinitMapa.CHAPTER_GAPTIME2.Value) {
                                if (console.log("wave:" + this.qcurWaveIda + " t:" + (e - this.qcurWaveStartTimea)), this.qcurWaveIda++, this.qcurWaveIda > this.qmaxWaveIda) return;
                                this.qloadCurWaveInfoa(), this.qdispatchTroopsa(), this.qcurWaveStartTimea = n.Tools.qgetTimestampMSa()
                            }
                            this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(this.qcheckNextWavea, this)))
                        }
                },
                qdispatchTroopsa: function() {
                    if (this.qcurNpcCountArra && this.qcurNpcCountArra.length) {
                        var e = (3e6 + 100 * r.default.getInstance().qgetStageIda(this.qstageIda) + this.qcurWaveIda).toString(),
                            a = r.default.getInstance().qboLimitMapa[e],
                            t = r.default.getInstance().qgetNpcFubenDataa(this.qstageIda)[this.qcurWaveIda - 1];
                        if (1 == a.random)
                            for (var i = 0; i < a.qcreatenumbera; i++) {
                                var o = Math.floor(n.Tools.qgetRandomArbitrarya(0, this.qcurNpcCountArra.length));
                                if (this.qcreateNpca(t[this.qcurNpcCountArra[o].index]), this.qcurNpcCountArra[o].count--, !this.qcurNpcCountArra[o].count && (this.qcurNpcCountArra.splice(o, 1), !this.qcurNpcCountArra.length)) break
                            } else
                                for (i = 0; i < a.qcreatenumbera && (this.qcreateNpca(t[this.qcurNpcCountArra[0].index]), this.qcurNpcCountArra[0].count--, this.qcurNpcCountArra[0].count || (this.qcurNpcCountArra.splice(0, 1), this.qcurNpcCountArra.length)); i++);
                        this.node.runAction(cc.sequence(cc.delayTime(a.qchubingtimea / 1e3), cc.callFunc(this.qdispatchTroopsa, this)))
                    }
                },
                qcreateNpca: function(e) {
                    var a = this.getNpc(),
                        t = a.getComponent(q.default);
                    if (11 == e.qbirthida) a.parent = this.qnpcRoota, t.init(e, this, null);
                    else {
                        var i = e.qbirthida - 1,
                            o = Math.floor(n.Tools.qgetRandomArbitrarya(0, this.qobstacleArra[i].length)),
                            s = this.qobstacleArra[i][o].getComponent("mg_Obstacle");
                        s.qwindowsa.length ? t.init(e, this, s) : (a.parent = this.qnpcRoota, t.init(e, this, s))
                    }
                },
                getNpc: function() {
                    return this.qnpcCachePoola.size() > 0 ? this.qnpcCachePoola.get() : cc.instantiate(this.npcPfb)
                },
                qshowTipChangeGuna: function() {
                    this.qinitChangeGunTipLabela(), this.qtipAnimBtnChangeGuna.active = !0, this.qtipBtnChangeGuna.active = !0
                },
                qhideTipChangeGuna: function() {
                    this.qtipAnimBtnChangeGuna.active = !1, this.qtipBtnChangeGuna.active = !1
                },
                qinitChangeGunTipLabela: function() {
                    if (this._changeGunTipLabelReady || !this.qtipBtnChangeGuna) return;
                    var e = this.qtipBtnChangeGuna.getChildByName("qtxta");
                    if (!e) return;
                    var a = e.getComponent(cc.Sprite);
                    a && (a.enabled = !1);
                    var t = e.getComponent(cc.Label);
                    t || (t = e.addComponent(cc.Label)), t.string = "B\u1eaft t\u1ec9a", t.fontSize = 22, t.lineHeight = 36, t.horizontalAlign = cc.Label.HorizontalAlign.CENTER, t.verticalAlign = cc.Label.VerticalAlign.CENTER, n.Tools.qapplyCabinFontToLabela(t), this._changeGunTipLabelReady = !0
                },
                onChangeWeaponClick: function() {
                    var e;
                    if (m.default.getInstance().play("yx_" + m.qAudioSourceNamea.qChangeWeapona, !1), this.qgunDataa.id == this.qweaponIDa) this.gun.node.active = !1, this.qsecondGuna.node.active = !0, e = this.qsecondWeaponIDa, this.qisSnipera = !0, this.btnChangeWeapon.getChildByName("qgun1a").active = !1, this.btnChangeWeapon.getChildByName("qgun2a").active = !0, this.qopenSniperScopea(), 1 == this.qsniperGuideStepa && (this.qsniperGuideStepa = 2, this.guide.qhideAlla()), this.atk = 3 * this.qatkBasea, this.qatkShowa = 3 * this.qatkShowBasea;
                    else {
                        if (2 == this.qsniperGuideStepa) return;
                        this.gun.node.active = !0, this.qsecondGuna.node.active = !1, e = this.qweaponIDa, this.qisSnipera = !1, this.btnChangeWeapon.getChildByName("qgun1a").active = !0, this.btnChangeWeapon.getChildByName("qgun2a").active = !1, this.qcloseSniperScopea(), 3 == this.qsniperGuideStepa && (this.qhideGuidea(), this.qsniperGuideStepa = 0), this.atk = this.qatkBasea, this.qatkShowa = this.qatkShowBasea
                    }
                    this.qhideTipChangeGuna(), this.qgunDataa = r.default.getInstance().gunMap[e.toString()], this.qshootSpeeda = this.qgunDataa.qfireRatea, this.qrefreshShowBulletCounta()
                },
                onReloadClick: function() {
                    this.qisSnipera ? this.qsecondGuna.reload() : this.gun.reload()
                },
                qopenSniperScopea: function() {
                    this.qisSnipera && (this.qsniperScopeNodea.x = 0, 3 == this.qstageIda && (this.qtipSniperMovea.active = !0))
                },
                qisSniperScopeOpeneda: function() {
                    return !this.qsniperScopeNodea.x
                },
                qcloseSniperScopea: function() {
                    this.qsniperScopeNodea.x = 1e4
                },
                qgetScaleByYa: function(e) {
                    return this.qisVerticala ? e >= this.qnormalVerticalYa ? this.qnormalVerticalScalea + (this.qnormalVerticalScalea - this.qminVerticalScalea) / (this.qnormalVerticalYa - this.qminVerticalYa) * (e - this.qnormalVerticalYa) : this.qnormalVerticalScalea + (this.qnormalVerticalScalea - this.qmaxVerticalScalea) / (this.qnormalVerticalYa - this.qmaxVerticalYa) * (e - this.qnormalVerticalYa) : e >= this.qnormalYa ? this.qnormalScalea + (this.qnormalScalea - this.qminScalea) / (this.qnormalYa - this.minY) * (e - this.qnormalYa) : this.qnormalScalea + (this.qnormalScalea - this.qmaxScalea) / (this.qnormalYa - this.maxY) * (e - this.qnormalYa)
                },
                qplayDangera: function(e) {
                    void 0 === e && (e = cc.Color.RED), this.qxueguangNodea.color = e, this.qxueguangNodea.active = !0, this.qxueguangNodea.stopAllActions(), this.qxueguangNodea.opacity = 0;
                    var a = this;
                    this.qxueguangNodea.runAction(cc.sequence(cc.fadeIn(.35), cc.fadeOut(.35), cc.callFunc(function() {
                        a.qxueguangNodea.active = !1
                    })))
                },
                qshowHitHeada: function() {
                    this.qhitHeadNodea.active = !0, this.qhitHeadNodea.opacity = 255, this.qhitHeadNodea.stopAllActions(), this.qhitHeadNodea.runAction(cc.sequence(cc.delayTime(1), cc.fadeOut(.5))), this.qhitHeadSpa.stopAllActions(), this.qhitHeadSpa.opacity = 255, this.qhitHeadSpa.scale = 1, this.qhitHeadSpa.runAction(cc.spawn(cc.scaleTo(.5, 2), cc.fadeOut(.7))), m.default.getInstance().play("yx_headshot")
                },
                qshowBossWarna: function(e) {
                    var a = this;
                    void 0 === e && (e = "BOSS"), this.onPause(), this.qbossWarnNodea.active = !0;
                    var t = this.qbossWarnBga.y;
                    this.qbossWarnBga.runAction(cc.sequence(cc.moveTo(2, cc.v2(743, t)), cc.callFunc(function() {
                        a.qbossWarnBga.x = 0
                    })).repeatForever()), this.qbossWarnDesca.string = e + " \u0111ang t\u1edbi", n.Tools.qapplyCabinFontToLabela(this.qbossWarnDesca), m.default.getInstance().play("yx_" + m.qAudioSourceNamea.qBossWarna);
                    var i = this;
                    this.node.parent.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
                        i.qbossWarnNodea.stopAllActions(), i.qbossWarnNodea.active = !1, i.onResume()
                    })))
                },
                onLoadFinish: function() {
                    this.qinitChangeGunTipLabela(), this.qpreLoadCurStepa++, this.qpreLoadCbka && this.qpreLoadCbka(this.qpreLoadCurStepa / this.qpreLoadMaxStepa), this.qpreLoadCurStepa >= this.qpreLoadMaxStepa && this.qpreLoadFinishCbka && (this.qpreLoadFinishCbka(), this.qpreLoadFinishCbka = null)
                },
                onHelmetClick: function() {
                    m.default.getInstance().play("yx_" + m.qAudioSourceNamea.Click), g.ViewManager.getInstance().qopenViewa({
                        View: w.ViewHelmet,
                        qCustomDataa: {
                            qcloseCbka: function() {}
                        }
                    })
                },
                qcheckGuidea: function(e) {
                    if (2 == l.qUserDataMgra.getInstance().data.qguideIda) {
                        this.onPause();
                        var a = this;
                        g.ViewManager.getInstance().qturnOffScreenClicka(!0), this.qloadGuidea(function() {
                            a.qloadGuideArrowa(function() {
                                g.ViewManager.getInstance().qturnOnScreenClicka(), a.guide.node.parent = a.node.getChildByName("bg"), a.qsetGuideArrowPosa(e, 150), a.qisShowGuidea = !0, a.guide.qshowBattleTipa(cc.v2(0, 170))
                            })
                        })
                    }
                },
                qcheckRocketGuidea: function() {
                    var e = this;
                    if (!this.qisShowRocketGuidea) {
                        this.onPause();
                        var a = this;
                        g.ViewManager.getInstance().qturnOffScreenClicka(!0), this.qloadGuidea(function() {
                            a.qloadGuideArrowa(function() {
                                g.ViewManager.getInstance().qturnOnScreenClicka(), a.qisShowRocketGuidea = !0, a.guide.qshowTipa("Tên lửa đang tới, phá hủy nó!", cc.v2(0, 280));
                                for (var t = null, i = a.qenemyBulletRoota.childrenCount - 1; i >= 0 && 0 == (t = e.qenemyBulletRoota.children[i]).getComponent(p.default).qrocketa.active; i--) t = null;
                                t ? a.qsetGuideArrowPosa(t, 50) : (a.qhideGuidea(), a.qisShowRocketGuidea = !1)
                            })
                        })
                    }
                },
                qcheckBossGuidea: function(e) {
                    if (!this.qbossGuideNodea && !this.qisShowBossGuideAlreadya) {
                        this.qisShowBossGuideAlreadya = !0, this.onPause();
                        var a = this;
                        g.ViewManager.getInstance().qturnOffScreenClicka(!0), this.qloadGuidea(function() {
                            a.qloadGuideArrowa(function() {
                                g.ViewManager.getInstance().qturnOnScreenClicka(), a.qbossGuideNodea = e, a.guide.qshowTipa("Nhắm vòng tròn màu đỏ,\nphá hủy vũ khí của kẻ thù!", cc.v2(0, 280)), a.qsetGuideArrowPosa(e, 50)
                            })
                        })
                    }
                },
                qcheckSniperGuidea: function(e) {
                    if (!this.qsniperGuideStepa && !this.qisSniperScopeOpeneda()) {
                        this.onPause();
                        var a = this;
                        g.ViewManager.getInstance().qturnOffScreenClicka(!0), this.qloadGuidea(function() {
                            a.qloadGuideArrowa(function() {
                                g.ViewManager.getInstance().qturnOnScreenClicka(), a.btnChangeWeapon.getComponent(cc.Button).interactable = !0, a.btnChangeWeapon.getChildByName("lock").active = !1, a.qsniperGuideStepa = 1, a.guide.qshowTipa("Kẻ thù ở xa, đổi súng tỉa", cc.v2(0, 110)), a.guide.qshowHanda(a.btnChangeWeapon), 4 == a.qstageIda ? a.qsetGuideArrowPosa(e, 50) : a.qsetGuideArrowPosa(e, 100)
                            })
                        })
                    }
                },
                qloadGuidea: function(e) {
                    this.guide && e();
                    var a = this;
                    cc.loader.loadRes("prefab/battle/mg_Guide", cc.Prefab, function(t, i) {
                        if (t) return console.log(t), void a.qloadGuidea(e);
                        var n = cc.instantiate(i);
                        a.guide = n.getComponent(C.default), a.guide.qhideAlla(), n.parent = a.node, e()
                    })
                },
                qloadGuideArrowa: function(e) {
                    if (this.qguideArrowa) e();
                    else {
                        var a = this;
                        cc.loader.loadRes("prefab/battle/mg_GuideArrow", cc.Prefab, function(t, i) {
                            if (t) return console.log(t), void a.qloadGuideArrowa(e);
                            a.qguideArrowa = cc.instantiate(i), e()
                        })
                    }
                },
                qsetGuideArrowPosa: function(e, a) {
                    if (this.qguideArrowa.parent = this.qnpcRoota.parent, 4 == this.qstageIda || 5 == this.qstageIda) {
                        var t = n.Tools.qgetRelationPosa(e, this.qnpcRoota);
                        this.qguideArrowa.x = t.x, this.qguideArrowa.y = t.y + a
                    } else this.qguideArrowa.x = e.x, this.qguideArrowa.y = e.y + a
                },
                qhideGuidea: function() {
                    this.onResume(), this.guide.node.destroy(), this.guide = null, this.qguideArrowa && (this.qguideArrowa.destroy(), this.qguideArrowa = null)
                },
                onClose: function() {
                    cc.Camera.main.clearFlags = 7
                },
                onDestroy: function() {}
            }));
        t.ViewBattle = k;
        var A = k;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_Box: "mg_Box",
        mg_BuildingInfo: "mg_BuildingInfo",
        mg_Bullet: "mg_Bullet",
        mg_ConfigDataManager: "mg_ConfigDataManager",
        mg_EnemyBullet: "mg_EnemyBullet",
        mg_Guide: "mg_Guide",
        mg_Gun: "mg_Gun",
        mg_LeuokBi: "mg_LeuokBi",
        mg_Npc: "mg_Npc",
        mg_Obstacle: "mg_Obstacle",
        mg_ScreenAdapter: "mg_ScreenAdapter",
        mg_Tools: "mg_Tools",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewBase: "mg_ViewBase",
        mg_ViewBuff: "mg_ViewBuff",
        mg_ViewHelmet: "mg_ViewHelmet",
        mg_ViewHome: "mg_ViewHome",
        mg_ViewLose: "mg_ViewLose",
        mg_ViewManager: "mg_ViewManager",
        mg_ViewMaxAmmo: "mg_ViewMaxAmmo",
        mg_ViewReborn: "mg_ViewReborn",
        mg_ViewShield: "mg_ViewShield",
        mg_ViewWin: "mg_ViewWin",
        mg_WeChatGame: "mg_WeChatGame"
    }],
    mg_ViewBoss: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "ed3f15BZpZKhp0NtZblRDZp", "mg_ViewBoss");
        var i = e("mg_ViewBase"),
            n = e("mg_ViewManager"),
            o = e("mg_AudioManager"),
            s = e("mg_ConfigDataManager"),
            r = e("mg_UserDataManager"),
            T = e("mg_Tools"),
            c = (e("mg_WeChatGame"), cc._decorator),
            l = (c.qccclassa, c.property, cc.Class({
                extends: i.ViewBase,
                properties: {
                    qnpcNamea: cc.Label,
                    qnpca: cc.Node,
                    qnpcPowera: cc.Label,
                    qloadinga: cc.Node,
                    qbtnFighta: cc.Node,
                    qbtnForceFighta: cc.Node,
                    qbtnLvUpa: cc.Node
                },
                statics: {
                    qprafabPatha: "prefab/battle/mg_ViewBoss"
                },
                ctor: function() {
                    var e = this;
                    e.qisFullScreena = !1, e.cbk = null, e.ret = !1
                },
                onOpen: function(e) {
                    this.cbk = e.cbk;
                    var a = s.default.getInstance().qnpcAppearAvatarMapa[e.avatar];
                    this.loadSpine(a.avatar), this.qnpcNamea.string = a.name, this.qnpcPowera.string = "" + e.qpowera, this.qnpca.setScale(a.ratio), r.qUserDataMgra.getInstance().qpowera >= e.qpowera ? (this.qbtnFighta.active = !0, this.qbtnForceFighta.active = !1, this.qbtnLvUpa.active = !1) : (this.qbtnFighta.active = !1, this.qbtnForceFighta.active = !0, this.qbtnLvUpa.active = !0), T.Tools.qapplyCabinFontToNodea(this.node), o.default.getInstance().play("yx_" + o.qAudioSourceNamea.qBossWarna)
                },
                loadSpine: function(e) {
                    var a = this;
                    cc.loader.loadRes("spine/" + e + "/" + e, sp.SkeletonData, function(t, i) {
                        if (t) return console.error(t), void a.loadSpine(e);
                        var n = a.qnpca.getChildByName("spine");
                        n.active = !0, n.getComponent(sp.Skeleton).skeletonData = i, n.getComponent(sp.Skeleton).setAnimation(0, "daiji_zhan", !0), a.qloadinga.active = !1
                    })
                },
                onFightClick: function() {
                    this.ret = !0, o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), n.ViewManager.getInstance().qcloseViewa({
                        View: q
                    })
                },
                onLvUpClick: function() {
                    this.ret = !1, o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), n.ViewManager.getInstance().qcloseViewa({
                        View: q
                    })
                },
                onCloseClick: function() {
                    this.cbk = null, o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), n.ViewManager.getInstance().qcloseViewa({
                        View: q
                    })
                },
                onClose: function() {
                    this.cbk && this.cbk(this.ret)
                }
            }));
        t.ViewBoss = l;
        var q = l;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_ConfigDataManager: "mg_ConfigDataManager",
        mg_Tools: "mg_Tools",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewBase: "mg_ViewBase",
        mg_ViewManager: "mg_ViewManager",
        mg_WeChatGame: "mg_WeChatGame"
    }],
    mg_ViewBuff: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "573f3KqkmVEyqEgYZR1Gbub", "mg_ViewBuff");
        var i = e("mg_ViewBase"),
            n = e("mg_ViewManager"),
            o = e("mg_AudioManager"),
            s = (e("mg_ConfigDataManager"), e("mg_UserDataManager")),
            r = (e("mg_WeChatGame"), e("mg_SdkCommon"), e("mg_Tools"), e("mg_RemoteConfigManager")),
            c = (e("mg_BuildingInfo"), cc._decorator),
            l = (c.qccclassa, c.property, cc.Class({
                extends: i.ViewBase,
                properties: {
                    qbtnClosea: cc.Node
                },
                statics: {
                    qprafabPatha: "prefab/battle/mg_ViewBuff"
                },
                ctor: function() {
                    this.qisFullScreena = !1, this.cbk = null
                },
                onOpen: function(e) {
                    this.cbk = e.cbk;
                    this.qbtnClosea.active = !0
                },
                onVideoClick: function() {
                    var e = this;
                    this.node.getComponent("shareUtils").doShare({
                        success: function() {
                            e.cbk && e.cbk(), e.onCloseClick()
                        }
                    })
                },
                onCloseClick: function() {
                    o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), n.ViewManager.getInstance().qcloseViewa({
                        View: q
                    })
                },
                onClose: function() {
                    !s.qUserDataMgra.getInstance().qisGuangdonga && r.default.getInstance().qdialogBannera
                }
            }));
        t.ViewBuff = l;
        var q = l;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_BuildingInfo: "mg_BuildingInfo",
        mg_ConfigDataManager: "mg_ConfigDataManager",
        mg_RemoteConfigManager: "mg_RemoteConfigManager",
        mg_SdkCommon: "mg_SdkCommon",
        mg_Tools: "mg_Tools",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewBase: "mg_ViewBase",
        mg_ViewManager: "mg_ViewManager",
        mg_WeChatGame: "mg_WeChatGame"
    }],
    mg_ViewFreeGun: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "893a3QM7IRPrKCep4SA9Nn0", "mg_ViewFreeGun");
        var i = e("mg_ViewBase"),
            n = e("mg_ViewManager"),
            o = e("mg_AudioManager"),
            s = e("mg_ConfigDataManager"),
            r = e("mg_UserDataManager"),
            T = e("mg_Tools"),
            c = (e("mg_WeChatGame"), e("mg_SdkCommon"), cc._decorator),
            l = (c.qccclassa, c.property, cc.Class({
                extends: i.ViewBase,
                properties: {
                    qgunImga: cc.Sprite,
                    qgunNamea: cc.Label,
                    qpowera: cc.Label,
                    qloadinga: cc.Node,
                    ndClose: cc.Node
                },
                statics: {
                    qprafabPatha: "prefab/home/mg_ViewFreeGun"
                },
                ctor: function() {
                    this.qisFullScreena = !1, this.cbk = null
                },
                onOpen: function(e) {
                    this.cbk = e.cbk;
                    var a = e.gunId,
                        t = s.default.getInstance().gunMap[a];
                    this.qpowera.string = t.fight, this.qgunNamea.string = t.qgunNamea, this.qshowGunIcona(t), T.Tools.qapplyCabinFontToNodea(this.node)
                },
                qshowGunIcona: function(e) {
                    var a = this;
                    this && cc.loader.loadRes("img/gunicon/gunIcon_" + e.qGunicona, cc.SpriteFrame, function(t, i) {
                        if (t) return console.log(t), void a.qshowGunIcona(e);
                        a && a.qgunImga && (a.qgunImga.spriteFrame = i, a.qloadinga.active = !1)
                    })
                },
                onVideoClick: function() {
                    var e = this;
                    this.node.getComponent("shareUtils").doShare({
                        success: function() {
                            r.qUserDataMgra.getInstance().qcurFreeWeaponIda = r.qUserDataMgra.getInstance().qfreeWeaponIda, e.onCloseClick()
                        }
                    })
                },
                onCloseClick: function() {
                    o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), this.cbk && this.cbk(), n.ViewManager.getInstance().qcloseViewa({
                        View: q
                    })
                },
                onClose: function() {}
            }));
        t.ViewFreeGun = l;
        var q = l;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_ConfigDataManager: "mg_ConfigDataManager",
        mg_SdkCommon: "mg_SdkCommon",
        mg_Tools: "mg_Tools",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewBase: "mg_ViewBase",
        mg_ViewManager: "mg_ViewManager",
        mg_WeChatGame: "mg_WeChatGame"
    }],
    mg_ViewFreeMoney: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "77159HBbq9P0ZXcZRhP9Sva", "mg_ViewFreeMoney");
        var i = e("mg_ViewBase"),
            n = e("mg_ViewManager"),
            o = e("mg_AudioManager"),
            s = e("mg_ConfigDataManager"),
            r = e("mg_UserDataManager"),
            c = (e("mg_WeChatGame"), e("mg_SdkCommon"), e("mg_Tools")),
            l = e("mg_RemoteConfigManager"),
            q = (e("mg_BuildingInfo"), cc._decorator),
            h = (q.qccclassa, q.property, cc.Class({
                extends: i.ViewBase,
                properties: {
                    qmoneya: cc.Label,
                    qbtnClosea: cc.Node
                },
                statics: {
                    qprafabPatha: "prefab/battle/mg_ViewFreeMoney"
                },
                ctor: function() {
                    var e = this;
                    e.qisFullScreena = !1, e.qmoneyCounta = 0, e.cbk = null
                },
                onOpen: function(e) {
                    this.cbk = e.cbk;
                    this.qbtnClosea.active = !0;
                    var a = r.qUserDataMgra.getInstance().data,
                        t = Math.floor((a.qmaxHpLva + a.qdamageLva + a.qhangupMoneyLva) / 3);
                    this.qmoneyCounta = s.default.getInstance().qvideoMoneyLista[s.default.getInstance().qvideoMoneyLista.length - 1].qmoneya, t < s.default.getInstance().qvideoMoneyLista.length && (this.qmoneyCounta = s.default.getInstance().qvideoMoneyLista[t - 1].qmoneya), this.qmoneya.string = c.Tools.qnumberFormata(this.qmoneyCounta), c.Tools.qapplyCabinFontToNodea(this.node), !r.qUserDataMgra.getInstance().qisGuangdonga && l.default.getInstance().qdialogBannera
                },
                onVideoClick: function() {
                    var e = this;
                    this.node.getComponent("shareUtils").doShare({
                        success: function() {
                            r.qUserDataMgra.getInstance().data.qmoneya += e.qmoneyCounta, r.qUserDataMgra.getInstance().data.qfreeMoneyNuma++, r.qUserDataMgra.getInstance().qsaveUserDataa(), e.cbk && e.cbk(), e.onCloseClick()
                        }
                    })
                },
                onCloseClick: function() {
                    o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), n.ViewManager.getInstance().qcloseViewa({
                        View: g
                    })
                },
                onClose: function() {
                    !r.qUserDataMgra.getInstance().qisGuangdonga && l.default.getInstance().qdialogBannera
                }
            }));
        t.ViewFreeMoney = h;
        var g = h;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_BuildingInfo: "mg_BuildingInfo",
        mg_ConfigDataManager: "mg_ConfigDataManager",
        mg_RemoteConfigManager: "mg_RemoteConfigManager",
        mg_SdkCommon: "mg_SdkCommon",
        mg_Tools: "mg_Tools",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewBase: "mg_ViewBase",
        mg_ViewManager: "mg_ViewManager",
        mg_WeChatGame: "mg_WeChatGame"
    }],
    mg_ViewFriendRank: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "03d7bsO4TNI07vKomTioci5", "mg_ViewFriendRank");
        var i = e("mg_ViewBase"),
            n = e("mg_ViewManager"),
            o = (e("mg_WeChatGame"), e("mg_AudioManager")),
            s = cc.Class({
                extends: i.ViewBase,
                properties: {
                    rankSprite: cc.Sprite,
                    ndClose: cc.Node
                },
                statics: {
                    qprafabPatha: "prefab/home/friendrank/mg_ViewFriendRank"
                },
                ctor: function() {},
                onLoad: function() {
                    this._timeCounter = 0, this.lastTime = 0, this.rankTexture = new cc.Texture2D, this.rankSpriteFrame = new cc.SpriteFrame, this.resizeSharedCanvas(this.rankSprite.node.width, this.rankSprite.node.height)
                },
                onOpen: function() {
                    mg.wxRank.showFriendRank()
                },
                resizeSharedCanvas: function(e, a) {
                    if (qg) {
                        var t = qg.getOpenDataContext().canvas;
                        t.width = e, t.height = a
                    }
                },
                onTouchMove: function(e) {
                    var a = e.getDeltaY(),
                        t = (new Date).getTime();
                    t - this.lastTime > 50 && (this.lastTime = t, mg.wxRank.scroll(a))
                },
                onCloseClick: function() {
                    o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), n.ViewManager.getInstance().qcloseViewa({
                        View: r
                    })
                },
                onPrePageClick: function() {
                    o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), mg.wxRank.pageUp()
                },
                onNextPageClick: function() {
                    o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), mg.wxRank.pageDown()
                },
                onStartFightClick: function() {
                    mg.share({})
                },
                updateRankList: function() {
                    if (qg && this.rankTexture) {
                        var e = qg.getOpenDataContext().canvas;
                        this.rankTexture.initWithElement(e), this.rankTexture.handleLoadedTexture(), this.rankSpriteFrame.setTexture(this.rankTexture), this.rankSprite.spriteFrame = this.rankSpriteFrame
                    }
                },
                update: function(e) {
                    this._timeCounter += e, this._timeCounter < this.rendInterval || (this._timeCounter = 0, this.updateRankList())
                },
                onClose: function() {}
            });
        t.ViewFriendRank = s;
        var r = s;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_ViewBase: "mg_ViewBase",
        mg_ViewManager: "mg_ViewManager",
        mg_WeChatGame: "mg_WeChatGame"
    }],
    mg_ViewGain: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "1cb82kIhrNC1oUf7mlIKRP6", "mg_ViewGain");
        var i, n = e("mg_ViewBase"),
            o = e("mg_ViewManager"),
            s = e("mg_Tools"),
            r = e("mg_AudioManager"),
            c = e("mg_RemoteConfigManager"),
            l = e("mg_UserDataManager"),
            q = (e("mg_SdkCommon"), e("mg_WeChatGame"), e("mg_Guide"));
        (function(e) {
            e[e.qDiamonda = 0] = "qDiamonda", e[e.Money = 1] = "Money", e[e.Energy = 2] = "Energy", e[e.Chip = 3] = "Chip"
        })(i = t.qViewGainTypea || (t.qViewGainTypea = {}));
        var h = cc._decorator,
            g = (h.qccclassa, h.property, cc.Class({
                extends: n.ViewBase,
                properties: {
                    qiconDiamonda: cc.Node,
                    qiconMoneya: cc.Node,
                    qiconEnergya: cc.Node,
                    qiconChipa: cc.Node,
                    qflasha: cc.Node,
                    count: cc.Label,
                    qbtnClosea: cc.Node,
                    qbtnFreea: cc.Node,
                    qbtnVideoa: cc.Node,
                    qbtnDesca: cc.Label,
                    share: cc.Node,
                    qvideoa: cc.Node,
                    qtoggleSharea: cc.Toggle,
                    qchipProNodea: cc.Node,
                    qchipProTxta: cc.Label
                },
                statics: {
                    qprafabPatha: "prefab/home/mg_ViewGain"
                },
                ctor: function() {
                    var e = this;
                    e.qisFullScreena = !1, e.qgainTypea = null, e.cbk = null, e.qisGuidea = !1, e.guide = null
                },
                onOpen: function(e) {
                    if (s.Tools.qisNullOrUndefineda(e.qisGuidea) || (this.qisGuidea = e.qisGuidea), e.qisBattleWina)
                        if (this.qbtnClosea.active = !1, this.qbtnFreea.active = !0, this.qbtnVideoa.active = !0, this.qisGuidea) {
                            this.qvideoa.active = !1, this.share.active = !1, this.qtoggleSharea.node.active = !1, this.qbtnDesca.node.x = 0, this.qbtnFreea.active = !1, o.ViewManager.getInstance().qturnOffScreenClicka(!0);
                            var a = this;
                            this.qloadGuidea(function() {
                                o.ViewManager.getInstance().qturnOnScreenClicka(), a.guide.qhideAlla(), a.guide.qshowHanda(a.qbtnVideoa)
                            })
                        } else 0 == c.default.getInstance().qshareWina || l.qUserDataMgra.getInstance().qisMaxShareCounta() ? (this.qvideoa.active = !0, this.share.active = !1, this.qtoggleSharea.node.active = !1) : 1 == c.default.getInstance().qshareHangupa ? (this.qvideoa.active = !1, this.share.active = !0, this.qtoggleSharea.node.active = !1) : (this.qvideoa.active = !1, this.share.active = !1, this.qtoggleSharea.node.active = !0, this.qbtnDesca.node.x = 0);
                    else this.qbtnClosea.active = !0, this.qbtnFreea.active = !1, this.qbtnVideoa.active = !1, this.qtoggleSharea.node.active = !1;
                    switch (this.cbk = e.cbk, this.qgainTypea = e.qgainTypea, this.qiconDiamonda.active = !1, this.qiconMoneya.active = !1, this.qiconEnergya.active = !1, this.qiconChipa.active = !1, this.qchipProNodea.active = !1, this.qgainTypea) {
                        case i.qDiamonda:
                            this.qiconDiamonda.active = !0, this.count.string = s.Tools.qnumberFormata(e.count);
                            break;
                        case i.Money:
                            this.qiconMoneya.active = !0, this.count.string = s.Tools.qnumberFormata(e.count), this.qbtnDesca.string = "Nh\u1eadn x3";
                            break;
                        case i.Energy:
                            this.count.string = s.Tools.qnumberFormata(e.count), this.qiconEnergya.active = !0;
                            break;
                        case i.Chip:
                            this.qiconChipa.active = !0, this.count.string = "M\u1ea3nh s\u00fang x" + s.Tools.qnumberFormata(e.count), this.qbtnDesca.string = "Nh\u1eadn x2";
                            var t = l.qUserDataMgra.getInstance().qgetCurUnlockGuna();
                            if (t) {
                                var n = t.qfragmenta - l.qUserDataMgra.getInstance().data.qgunChipa;
                                this.qchipProTxta.string = "C\u1ea7n th\u00eam " + n, this.qchipProNodea.active = !0
                            }
                    }
                    s.Tools.qapplyCabinFontToNodea(this.node), this.qflasha.runAction(cc.sequence(cc.rotateTo(5, 90), cc.rotateTo(5, 180), cc.rotateTo(5, 270), cc.rotateTo(5, 360)).repeatForever()), this.node.getChildByName("NativeAd").active = !0
                },
                qloadGuidea: function(e) {
                    if (this.guide) e();
                    else {
                        var a = this;
                        cc.loader.loadRes("prefab/battle/mg_Guide", cc.Prefab, function(t, i) {
                            if (t) return console.log(t), void a.qloadGuidea(e);
                            var n = cc.instantiate(i);
                            a.guide = n.getComponent(q.default), n.parent = a.node, e()
                        })
                    }
                },
                onCloseClick: function() {
                    r.default.getInstance().play("yx_" + r.qAudioSourceNamea.Click), this.cbk && this.cbk(), o.ViewManager.getInstance().qcloseViewa({
                        View: u
                    })
                },
                onFreeClick: function() {
                    this.node.getChildByName("NativeAd").active = !1, r.default.getInstance().play("yx_" + r.qAudioSourceNamea.Click), this.cbk && this.cbk(1), o.ViewManager.getInstance().qcloseViewa({
                        View: u
                    })
                },
                onGetPrizes: function() {
                    this.node.getChildByName("NativeAd").active = !1, this.qiconChipa.active ? this.cbk && this.cbk(2) : this.cbk && this.cbk(3), o.ViewManager.getInstance().qcloseViewa({
                        View: u
                    })
                },
                onVideoClick: function() {
                    var e = this;
                    e.qisGuidea ? e.onGetPrizes() : this.node.getComponent("shareUtils").doShare({
                        success: function() {
                            e.onGetPrizes()
                        }
                    })
                },
                onClose: function() {}
            }));
        t.ViewGain = g;
        var u = g;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_Guide: "mg_Guide",
        mg_RemoteConfigManager: "mg_RemoteConfigManager",
        mg_SdkCommon: "mg_SdkCommon",
        mg_Tools: "mg_Tools",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewBase: "mg_ViewBase",
        mg_ViewManager: "mg_ViewManager",
        mg_WeChatGame: "mg_WeChatGame"
    }],
    mg_ViewGetHangUp: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "de1ea4gcDpM1ZQCOE1raVSy", "mg_ViewGetHangUp");
        var i = e("mg_ViewBase"),
            n = e("mg_ViewManager"),
            o = e("mg_AudioManager"),
            s = (e("mg_SdkCommon"), e("mg_WeChatGame"), e("mg_Tools")),
            r = e("mg_RemoteConfigManager"),
            c = e("mg_UserDataManager"),
            l = (e("mg_BuildingInfo"), cc._decorator),
            q = (l.qccclassa, l.property, cc.Class({
                extends: i.ViewBase,
                properties: {
                    qfreeMoneya: cc.Label,
                    qmoneya: cc.Label,
                    qvideoa: cc.Node,
                    ndClose: cc.Node
                },
                statics: {
                    qprafabPatha: "prefab/battle/mg_ViewGetHangUp"
                },
                ctor: function() {
                    var e = this;
                    e.qisFullScreena = !1, e.cbk = null, e.qcloseCbka = null
                },
                onOpen: function(e) {
                    s.Tools.qapplyCabinFontToNodea(this.node), e.qmoneya > 1e7 ? this.qfreeMoneya.string = s.Tools.qnumberFormata(e.qmoneya) : e.qmoneya > 1e4 ? this.qfreeMoneya.string = s.Tools.qnumberFormatKa(e.qmoneya) : this.qfreeMoneya.string = e.qmoneya, this.cbk = e.cbk, this.qcloseCbka = e.qcloseCbka, 0 == r.default.getInstance().qshareHangupa || c.qUserDataMgra.getInstance().qisMaxShareCounta() ? this.qvideoa.active = !0 : (r.default.getInstance().qshareHangupa, this.qvideoa.active = !1)
                },
                onCloseClick: function() {
                    o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), n.ViewManager.getInstance().qcloseViewa({
                        View: h
                    })
                },
                onFreeGetClick: function() {
                    this.cbk && this.cbk(1), this.onCloseClick()
                },
                onVideoClick: function() {
                    var e = this;
                    this.node.getComponent("shareUtils").doShare({
                        success: function() {
                            e.cbk && e.cbk(3), e.onCloseClick()
                        }
                    })
                },
                onClose: function() {
                    this.qcloseCbka && this.qcloseCbka()
                }
            }));
        t.ViewGetHangUp = q;
        var h = q;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_BuildingInfo: "mg_BuildingInfo",
        mg_RemoteConfigManager: "mg_RemoteConfigManager",
        mg_SdkCommon: "mg_SdkCommon",
        mg_Tools: "mg_Tools",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewBase: "mg_ViewBase",
        mg_ViewManager: "mg_ViewManager",
        mg_WeChatGame: "mg_WeChatGame"
    }],
    mg_ViewGunList: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "373b8p/B15PmaWO/dkYcVT9", "mg_ViewGunList");
        var i, n = e("mg_ViewBase"),
            o = e("mg_ViewManager"),
            s = e("mg_AudioManager"),
            r = e("mg_ScreenAdapter"),
            c = e("mg_ViewHome"),
            l = e("mg_ConfigDataManager"),
            q = e("mg_UserDataManager"),
            h = e("mg_GunListItem"),
            T = e("mg_Tools");
        e("mg_BuildingInfo"), e("mg_WeChatGame");
        (function(e) {
            e[e.Main = 1] = "Main", e[e.Second = 2] = "Second"
        })(i = t.qGunListTypea || (t.qGunListTypea = {}));
        var g = cc._decorator,
            u = (g.qccclassa, g.property, cc.Class({
                extends: n.ViewBase,
                properties: {
                    qgunContenta: cc.Node,
                    qgunImga: cc.Sprite,
                    qgunNamea: cc.Label,
                    qbtnEquipa: cc.Button,
                    qequipTxta: cc.Node,
                    qequipAlreadyTxta: cc.Node,
                    qunlockTxta: cc.Label,
                    qtxtInfoa: cc.Node,
                    qmainGunTypea: cc.Node,
                    qsecondGunTypea: cc.Node
                },
                statics: {
                    qprafabPatha: "prefab/home/GunList/mg_ViewGunList"
                },
                ctor: function() {
                    var e = this;
                    e.qisFullScreena = !0, e.qgunDataa = null, e.qgunListTypea = null
                },
                onOpen: function(e) {
                    r.ScreenAdapter.getInstance().qfitBottoma(this.node.getChildByName("bottom")), this.qgunListTypea = e.qgunListTypea, this.qgunListTypea == i.Main ? (this.qmainGunTypea.active = !0, this.qsecondGunTypea.active = !1, this.qrefreshGunInfoa(h.qGunListItemTypea.Equip, l.default.getInstance().gunMap[q.qUserDataMgra.getInstance().data.qweaponIDa])) : (this.qmainGunTypea.active = !1, this.qsecondGunTypea.active = !0, this.qrefreshGunInfoa(h.qGunListItemTypea.Equip, l.default.getInstance().gunMap[q.qUserDataMgra.getInstance().data.qsecondWeaponIDa])), this.qrefreshLista()
                },
                qrefreshLista: function() {
                    var e = this,
                        a = this;

                    function t(e, t) {
                        s.default.getInstance().play("yx_" + s.qAudioSourceNamea.Click), e == h.qGunListItemTypea.Unknow ? o.ViewManager.getInstance().qshowTipa("Mảnh súng đã mở khóa, hãy chăm chỉ thu thập chúng") : a.qrefreshGunInfoa(e, t)
                    }
                    cc.loader.loadRes("prefab/home/GunList/mg_GunListItem", cc.Prefab, function(n, o) {
                        if (n) return console.log(n), void a.qrefreshLista();
                        for (var s = 1, r = 0; r < l.default.getInstance().qgunLista.length; r++) {
                            var c = h.qGunListItemTypea.Unknow,
                                g = l.default.getInstance().qgunLista[r];
                            if (e.qgunListTypea == g.qguntypea) {
                                e.qgunListTypea == i.Main && g.id == q.qUserDataMgra.getInstance().data.qweaponIDa || e.qgunListTypea == i.Second && g.id == q.qUserDataMgra.getInstance().data.qsecondWeaponIDa ? c = h.qGunListItemTypea.Equip : q.qUserDataMgra.getInstance().data.qunlockWeaponArra.indexOf(parseInt(g.id)) > -1 ? c = h.qGunListItemTypea.qCanEquipa : s ? (c = h.qGunListItemTypea.Unlock, s = 0) : c = h.qGunListItemTypea.Unknow;
                                var u = cc.instantiate(o);
                                u.parent = a.qgunContenta, u.getComponent(h.default).init(c, g, t)
                            }
                        }
                    })
                },
                qrefreshGunInfoa: function(e, a) {
                    this.qgunDataa = a, this.qgunNamea.string = a.qgunNamea, this.setType(e);
                    var t = 1;
                    parseInt(a.damage) && (this.qtxtInfoa.getChildByName("qattribTxt" + t + "a").getComponent(cc.Label).string = "S\u00e1t th\u01b0\u01a1ng+" + Math.floor(parseInt(a.damage) / 100) + "%", t++), parseInt(a.hp) && (this.qtxtInfoa.getChildByName("qattribTxt" + t + "a").getComponent(cc.Label).string = "M\u00e1u:" + Math.floor(parseInt(a.hp) / 100) + "%", t++), parseInt(a.qbulletBoxa) && (this.qtxtInfoa.getChildByName("qattribTxt" + t + "a").getComponent(cc.Label).string = "B\u0103ng \u0111\u1ea1n:" + a.qbulletBoxa, t++), parseInt(a.qreloadSpeeda) && (this.qtxtInfoa.getChildByName("qattribTxt" + t + "a").getComponent(cc.Label).string = "N\u1ea1p \u0111\u1ea1n:" + a.qreloadSpeeda / 1e3 + " gi\u00e2y", t++);
                    for (var i = t; i <= 4; i++) this.qtxtInfoa.getChildByName("qattribTxt" + i + "a").getComponent(cc.Label).string = "";
                    T.Tools.qapplyCabinFontToLabela(this.qgunNamea);
                    for (var n = 1; n <= 4; n++) T.Tools.qapplyCabinFontToLabela(this.qtxtInfoa.getChildByName("qattribTxt" + n + "a").getComponent(cc.Label));
                    this.qshowGunIcona()
                },
                qshowGunIcona: function() {
                    var e = this;
                    this && this.qgunDataa && cc.loader.loadRes("img/gun/gun_" + this.qgunDataa.qGunicona, cc.SpriteFrame, function(a, t) {
                        if (a) return console.log(a), void e.qshowGunIcona();
                        e && e.qgunImga && (e.qgunImga.spriteFrame = t)
                    })
                },
                setType: function(e) {
                    switch (e) {
                        case h.qGunListItemTypea.Equip:
                            this.qbtnEquipa.interactable = !1, this.qequipAlreadyTxta.active = !0, this.qequipTxta.active = !1, this.qunlockTxta.node.active = !1;
                            break;
                        case h.qGunListItemTypea.qCanEquipa:
                            this.qbtnEquipa.interactable = !0, this.qequipAlreadyTxta.active = !1, this.qequipTxta.active = !0, this.qunlockTxta.node.active = !1;
                            break;
                        case h.qGunListItemTypea.Unlock:
                            this.qbtnEquipa.interactable = !1, this.qequipAlreadyTxta.active = !1, this.qequipTxta.active = !1, this.qunlockTxta.node.active = !0, this.qunlockTxta.string = this.qgunDataa.qfragmenta
                    }
                },
                onclickGetChips: function() {
                    cc.game4399Mgr.showVideoAD(function() {}, function() {})
                },
                onEquipClick: function() {
                    var e;
                    s.default.getInstance().play("yx_" + s.qAudioSourceNamea.Click), this.qgunListTypea == i.Main ? (e = q.qUserDataMgra.getInstance().data.qweaponIDa, q.qUserDataMgra.getInstance().data.qweaponIDa = parseInt(this.qgunDataa.id)) : (e = q.qUserDataMgra.getInstance().data.qsecondWeaponIDa, q.qUserDataMgra.getInstance().data.qsecondWeaponIDa = parseInt(this.qgunDataa.id)), this.setType(h.qGunListItemTypea.Equip), q.qUserDataMgra.getInstance().qrefreshPowera();
                    for (var a = 0, t = this.qgunContenta.getComponentsInChildren(h.default); a < t.length; a++) {
                        var n = t[a];
                        n.qgunDataa.id == this.qgunDataa.id ? n.setType(h.qGunListItemTypea.Equip) : n.qgunDataa.id == e && n.setType(h.qGunListItemTypea.qCanEquipa)
                    }
                },
                onCloseClick: function() {
                    s.default.getInstance().play("yx_" + s.qAudioSourceNamea.Click), o.ViewManager.getInstance().qcloseViewa({
                        View: d
                    }), o.ViewManager.getInstance().qopenViewa({
                        View: c.ViewHome
                    })
                },
                onReceiveMessage: function(e) {
                    e.type
                },
                onClose: function() {}
            }));
        t.ViewGunList = u;
        var d = u;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_BuildingInfo: "mg_BuildingInfo",
        mg_ConfigDataManager: "mg_ConfigDataManager",
        mg_GunListItem: "mg_GunListItem",
        mg_ScreenAdapter: "mg_ScreenAdapter",
        mg_Tools: "mg_Tools",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewBase: "mg_ViewBase",
        mg_ViewHome: "mg_ViewHome",
        mg_ViewManager: "mg_ViewManager",
        mg_WeChatGame: "mg_WeChatGame"
    }],
    mg_ViewHelmet: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "a83ebQwxJRMkIl0mPxHOiPw", "mg_ViewHelmet");
        var i = e("mg_ViewBase"),
            n = e("mg_ViewManager"),
            o = e("mg_AudioManager"),
            s = e("mg_SdkCommon"),
            r = (e("mg_WeChatGame"), e("mg_UserDataManager")),
            c = e("mg_ViewHome"),
            l = (e("mg_BuildingInfo"), cc._decorator),
            q = (l.qccclassa, l.property, cc.Class({
                extends: i.ViewBase,
                properties: {
                    qbtnClosea: cc.Node,
                    qbtnInvitea: cc.Node,
                    qbtnEquipa: cc.Node,
                    qtitleSucca: cc.Node,
                    qtitleInvitea: cc.Node,
                    qheadIcon1a: cc.Node,
                    qheadIcon2a: cc.Node,
                    qtoggleSharea: cc.Toggle
                },
                statics: {
                    qprafabPatha: "prefab/battle/mg_ViewHelmet"
                },
                ctor: function() {
                    this.qisFullScreena = !1, this.qcloseCbka = null
                },
                onOpen: function(e) {
                    e && (this.qcloseCbka = e.qcloseCbka), r.qUserDataMgra.getInstance().qinviteLista.length >= 2 ? (this.qtitleInvitea.active = !1, this.qtitleSucca.active = !0, this.qbtnClosea.active = !1, this.qbtnEquipa.active = !0, this.qbtnInvitea.active = !1, this.qheadIcon1a.getChildByName("qheada").active = !0, this.qheadIcon2a.getChildByName("qheada").active = !0, this.node.getChildByName("tip").active = !1, this.node.getChildByName("qtxta").getComponent(cc.RichText).string = "\u0110\u00e3 m\u1edf kh\u00f3a m\u0169 c\u1ea5p 3", this.qtoggleSharea.node.active = !0) : (this.qtitleInvitea.active = !0, this.qtitleSucca.active = !1, this.qbtnClosea.active = !0, this.qbtnEquipa.active = !1, this.qbtnInvitea.active = !0, r.qUserDataMgra.getInstance().qinviteLista.length > 0 ? (this.qheadIcon1a.getChildByName("qheada").active = !0, this.node.getChildByName("qtxta").getComponent(cc.RichText).string = "M\u1eddi th\u00eam <color=#00ff00><size=50>1</size></c> b\u1ea1n m\u1edbi, m\u1edf kh\u00f3a m\u0169 c\u1ea5p 3") : this.qheadIcon1a.getChildByName("qheada").active = !1, this.qheadIcon2a.getChildByName("qheada").active = !1)
                },
                onCloseClick: function() {
                    o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), n.ViewManager.getInstance().qcloseViewa({
                        View: h
                    })
                },
                onInviteClick: function() {
                    s.SdkCommon.share(null, null, null, 108, null, !0)
                },
                onEquipClick: function() {
                    var e = this;
                    1 == this.qtoggleSharea.isChecked ? s.SdkCommon.share(function() {
                        e.onEquip()
                    }, null, "Giúp mở khóa vũ khí siêu cấp", 109, null, !0) : this.onEquip()
                },
                onEquip: function() {
                    r.qUserDataMgra.getInstance().data.qhelmeta = 1, r.qUserDataMgra.getInstance().data.qhelmetGuidea = 1, r.qUserDataMgra.getInstance().qrefreshPowera(), r.qUserDataMgra.getInstance().qsaveUserDataa(), n.ViewManager.getInstance().qsendViewMessagea(c.ViewHome, {
                        type: "qrefreshBtnHelmeta"
                    }), n.ViewManager.getInstance().qsendViewMessagea(c.ViewHome, {
                        type: "qrefresha"
                    }), this.onCloseClick()
                },
                onClose: function() {
                    this.qcloseCbka && this.qcloseCbka()
                }
            }));
        t.ViewHelmet = q;
        var h = q;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_BuildingInfo: "mg_BuildingInfo",
        mg_SdkCommon: "mg_SdkCommon",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewBase: "mg_ViewBase",
        mg_ViewHome: "mg_ViewHome",
        mg_ViewManager: "mg_ViewManager",
        mg_WeChatGame: "mg_WeChatGame"
    }],
    mg_ViewHome: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "33374xw8n1JQaRJ6exq5l56", "mg_ViewHome");
        var i = e("mg_ViewBase"),
            n = e("mg_ViewManager"),
            o = e("mg_UserDataManager"),
            s = e("mg_Tools"),
            r = e("mg_AudioManager"),
            c = e("mg_ScreenAdapter"),
            l = (e("mg_BuildingInfo"), e("mg_ViewMap")),
            q = e("mg_ResourceBar"),
            h = e("mg_ConfigDataManager"),
            g = e("mg_ViewGunList"),
            u = e("mg_ViewInviteList"),
            d = e("mg_GainMoneyAnim"),
            m = e("mg_ViewLack"),
            p = e("mg_ViewFriendRank"),
            f = e("mg_LeuokBi"),
            v = e("mg_WeChatGame"),
            y = e("mg_Guide"),
            C = e("mg_ViewGetHangUp"),
            w = e("mg_ViewBoss"),
            _ = e("mg_ViewSign"),
            I = e("mg_ViewWarn"),
            b = e("mg_SdkCommon"),
            M = e("mg_ViewFreeMoney"),
            S = e("mg_ViewLottery"),
            k = e("mg_ViewHelmet"),
            A = e("mg_MapItem"),
            N = e("mg_ViewFreeGun"),
            B = (cc._decorator, cc.Class({
                extends: i.ViewBase,
                properties: {
                    qresourceBara: q.default,
                    qbtnStartGamea: cc.Node,
                    qpowerNuma: cc.Label,
                    qneedPowerSpa: cc.Node,
                    qneedPowerNuma: cc.Label,
                    qMapItemNodea: [cc.Node],
                    qhangupTimea: cc.Label,
                    qhangupTicka: cc.Node,
                    qhangupMoneya: cc.Label,
                    qhangupFilla: cc.ProgressBar,
                    qbtnHpa: cc.Node,
                    qhpUpCosta: cc.Label,
                    qhpLva: cc.Label,
                    qhpVala: cc.Label,
                    qhpValAdda: cc.Label,
                    qhpHota: cc.Node,
                    qbtnMoneya: cc.Node,
                    qmoneyUpCosta: cc.Label,
                    qmoneyLva: cc.Label,
                    qmoneyVala: cc.Label,
                    qmoneyValAdda: cc.Label,
                    qmoneyHota: cc.Node,
                    btnDamage: cc.Node,
                    qdamageUpCosta: cc.Label,
                    qdamageLva: cc.Label,
                    qdamageVala: cc.Label,
                    qdamageValAdda: cc.Label,
                    qdamageHota: cc.Node,
                    qinviteRedHota: cc.Node,
                    qhelmetRedHota: cc.Node,
                    qsignRedHota: cc.Node,
                    qbtnLotterya: cc.Node,
                    qbtnInvitea: cc.Node,
                    qbtnHelmeta: cc.Node,
                    qmenuBara: cc.Node,
                    qbtnOpenBara: cc.Node,
                    qgunIcona: cc.Sprite,
                    qgunFreea: cc.Node,
                    qgunUnlocka: cc.Node,
                    endAdBtn: cc.Node
                },
                statics: {
                    qprafabPatha: "prefab/home/mg_ViewHome"
                },
                ctor: function() {
                    var e = this;
                    e.qisFullScreena = !0, e.qhpUpCostNuma = 0, e.qmoneyUpCostNuma = 0, e.qdamageUpCostNuma = 0, e.guide = null, e.qisBannerErrora = !1, e.qisFreeGunVideoa = !1
                },
                onLoad: function() {
                    this.adjustEndAdBtn()
                },
                onOpen: function(e) {
                    var a = this;
                    window.GVGameSave && window.GVGameSave.hideClearDataButton && window.GVGameSave.hideClearDataButton(), this.qsetupHomeSideMenuButtonsa();
                    c.ScreenAdapter.getInstance().qfitBottoma(this.node.getChildByName("bottom"));
                    var t = this;
                    if (this.qrefreshInfoa(), this.qrefreshBtnHelmeta(), this.qshowSmallMapa(), this.qshowHangUpa(), this.qisFreeGunVideoa = !1, e && e.qisLoseGuidea) {
                        var i = this;
                        n.ViewManager.getInstance().qturnOffScreenClicka(!0), this.qloadGuidea(function() {
                            i.guide.qhideAlla(), n.ViewManager.getInstance().qturnOnScreenClicka();
                            var e = o.qUserDataMgra.getInstance().data.qcurStageIDa,
                                a = h.default.getInstance().qgetStageInfoa(e).Limit,
                                t = h.default.getInstance().qgetStageNeedPowera(a, e);
                            if (o.qUserDataMgra.getInstance().qpowera < t) o.qUserDataMgra.getInstance().data.qdamageLva <= o.qUserDataMgra.getInstance().data.qmaxHpLva ? i.qshowDamageUpGuidea(!1) : i.qshowHpUpGuidea(!1);
                            else {
                                var s = o.qUserDataMgra.getInstance().qfreeWeaponIda;
                                (!s || o.qUserDataMgra.getInstance().qfreeWeaponIda < o.qUserDataMgra.getInstance().data.qweaponIDa) && (s = o.qUserDataMgra.getInstance().data.qweaponIDa);
                                var r = h.default.getInstance().qgetNextWeaponDataa(s, 1);
                                r && (n.ViewManager.getInstance().qturnOffScreenClicka(!0), b.SdkCommon.qloadVideoAda(function(e) {
                                    n.ViewManager.getInstance().qturnOnScreenClicka(), e && (i.qisFreeGunVideoa = !0, o.qUserDataMgra.getInstance().qfreeWeaponIda = r.id, i.qgunUnlocka.active = !1, i.qgunFreea.active = !0, i.qshowGunIcona(r, i.qgunFreea.getChildByName("qgunfreea").getChildByName("icon").getComponent(cc.Sprite)), i.guide.qshowHanda(i.qgunFreea, -38))
                                }, v.qAdUnitIda.qVideoFreeGuna))
                            }
                        })
                    } else this.qcheckGuidea(function(i) {
                        i || a.qcheckHelmetEquipPopa(function() {
                            e && !s.Tools.qisNullOrUndefineda(e.qisFromLoadinga) ? o.qUserDataMgra.getInstance().data.qhangUpPopa != s.Tools.qtimestampToTimea(s.Tools.qgetTimestampMSa()) ? o.qUserDataMgra.getInstance().data.qhangupMoneya >= h.default.getInstance().qinitMapa.DOLLAR_NUMBER.Value && t.onAutoPopGetHangUp(function() {
                                t.qcheckSignPopa()
                            }) : o.qUserDataMgra.getInstance().data.qhangupMoneya >= h.default.getInstance().qinitMapa.DOLLAR_MIN.Value ? t.onAutoPopGetHangUp(function() {
                                t.qcheckSignPopa()
                            }) : t.qcheckSignPopa() : t.qhangupTicka.active ? 6 == o.qUserDataMgra.getInstance().data.stageID && t.qcheckSignPopa() : t.onAutoPopGetHangUp(function() {
                                6 == o.qUserDataMgra.getInstance().data.stageID && t.qcheckSignPopa()
                            })
                        })
                    });

                    function r() {
                        o.qUserDataMgra.getInstance().qgetInviteLista(function() {
                            t.qcheckRedHota(), t.scheduleOnce(r, 60)
                        })
                    }
                    s.Tools.qisNullOrUndefineda(e) || s.Tools.qisNullOrUndefineda(e.qFlyMoneya) ? (this.scheduleOnce(function() {
                        v.WeChatGame.getInstance().qshowGameClubBtna()
                    }, 1), r()) : (this.qshowFlyMoneya(e.qFlyMoneya), this.scheduleOnce(function() {
                        r()
                    }, 2.5)), this.qcheckSignRedHota(), this.qcheckLotteryRedHota(), o.qUserDataMgra.getInstance().data.stageID > 5 && !s.Tools.qisNullOrUndefineda(e) && !s.Tools.qisNullOrUndefineda(e.qfromBattlea) && o.qUserDataMgra.getInstance().qisShowInterAda && v.WeChatGame.getInstance().qshowInterstitialAda(), this.qgunFreea.active = !1, setTimeout(function() {}, 1500)
                },
                // onMoreGame: function() {
                    // cc.game4399Mgr.showMoreGame()
                // },
                adjustEndAdBtn: function() {
                    var e = this.qresourceBara.node.getComponent(cc.Widget),
                        a = cc.view.getFrameSize();
                    (a.width > a.height ? a.width : a.height) / (a.width <= a.height ? a.width : a.height) >= 896 / 414 && (e.top = 65)
                },
                qcheckRedHota: function() {
                    this && this.qinviteRedHota && (o.qUserDataMgra.getInstance().qisNewInvitea() ? this.qinviteRedHota.active = !0 : this.qinviteRedHota.active = !1, o.qUserDataMgra.getInstance().qinviteLista.length >= 2 && !o.qUserDataMgra.getInstance().data.qhelmeta ? this.qhelmetRedHota.active = !0 : this.qhelmetRedHota.active = !1)
                },
                qcheckSignPopa: function() {
                    o.qUserDataMgra.getInstance().qisCanSigna() && this.onSignClick()
                },
                qcheckSignRedHota: function() {
                    o.qUserDataMgra.getInstance().qisCanSigna() ? this.qsignRedHota.active = !0 : this.qsignRedHota.active = !1, this.qbtnOpenBara.getChildByName("qhota").active = this.qsignRedHota.active
                },
                qcheckLotteryRedHota: function() {
                    var e = this.qbtnLotterya.getChildByName("sp");
                    v.WeChatGame.getInstance().qisVideoNoDataa ? (this.qbtnLotterya.getChildByName("qhota").active = !1, e.stopAllActions(), e.rotation = 0, e.getComponent(cc.Sprite).setState(cc.Sprite.State.GRAY)) : (this.qbtnLotterya.getChildByName("qhota").active = !0, e.stopAllActions(), e.runAction(cc.sequence(cc.rotateTo(1.5, 90), cc.rotateTo(1.5, 180), cc.rotateTo(1.5, 270), cc.rotateTo(1.5, 360)).repeatForever()), e.getComponent(cc.Sprite).setState(cc.Sprite.State.NORMAL))
                },
                qcheckHelmetEquipPopa: function(e) {
                    void 0 === e && (e = null), o.qUserDataMgra.getInstance().qinviteLista.length >= 2 && !o.qUserDataMgra.getInstance().data.qhelmeta ? this.qshowHelmeta(function() {
                        e && e()
                    }) : e && e()
                },
                qshowHangUpa: function() {
                    var e = s.Tools.qgetTimestampSa(),
                        a = e - o.qUserDataMgra.getInstance().data.qlastHangupTimea;
                    if (a >= 86400) {
                        if (a = 86400, o.qUserDataMgra.getInstance().data.qlastHangupSaveTimea) {
                            if (n = Math.floor((o.qUserDataMgra.getInstance().data.qlastHangupTimea + 86400 - o.qUserDataMgra.getInstance().data.qlastHangupSaveTimea) / 10)) {
                                var t = h.default.getInstance().qgetMoneyLvDataa(o.qUserDataMgra.getInstance().data.qhangupMoneyLva),
                                    i = Math.ceil(parseFloat(t.qTypenumbera) * n * 10);
                                o.qUserDataMgra.getInstance().data.qhangupMoneya += i
                            }
                            o.qUserDataMgra.getInstance().data.qlastHangupSaveTimea = 0
                        }
                        this.qhangupTimea.string = s.Tools.qtimeFormatMina(a), this.qhangupMoneya.string = s.Tools.qnumberFormata(o.qUserDataMgra.getInstance().data.qhangupMoneya), this.qhangupTicka.active = !1, this.qhangupFilla.progress = 1
                    } else {
                        var n;
                        (n = Math.floor((e - o.qUserDataMgra.getInstance().data.qlastHangupSaveTimea) / 10)) && (t = h.default.getInstance().qgetMoneyLvDataa(o.qUserDataMgra.getInstance().data.qhangupMoneyLva), i = Math.ceil(parseFloat(t.qTypenumbera) * n * 10), o.qUserDataMgra.getInstance().data.qhangupMoneya += i, o.qUserDataMgra.getInstance().data.qlastHangupSaveTimea += 10 * n), this.qhangupTimea.string = s.Tools.qtimeFormatMina(a), this.qhangupMoneya.string = s.Tools.qnumberFormata(o.qUserDataMgra.getInstance().data.qhangupMoneya), this.qhangupFilla.progress = a / 86400;
                        var r = (e - o.qUserDataMgra.getInstance().data.qlastHangupSaveTimea) % 10,
                            c = 360 * r / 10,
                            l = (10 - r) / 2,
                            q = (360 + c) / 2;
                        console.log("startTick:" + r + " startAngle:" + c), this.qhangupTicka.active = !0, this.qhangupTicka.rotation = c;
                        var g = this;
                        this.qhangupTicka.runAction(cc.sequence(cc.rotateTo(l, q), cc.rotateTo(l, 360), cc.callFunc(function() {
                            g.qshowHangUpa()
                        })))
                    }
                    this.isPaused || o.qUserDataMgra.getInstance().qsaveUserDataa()
                },
                onAutoPopGetHangUp: function(e) {
                    if (void 0 === e && (e = null), f.LeuokBi.qsafeCalla("action", {
                            qactionTypea: 2,
                            qactionNumbera: 16
                        }), r.default.getInstance().play("yx_" + r.qAudioSourceNamea.Click), o.qUserDataMgra.getInstance().data.qhangupMoneya) {
                        if (o.qUserDataMgra.getInstance().data.qhangupMoneya < h.default.getInstance().qinitMapa.DOLLAR_NUMBER.Value) return o.qUserDataMgra.getInstance().data.qhangUpPopa = s.Tools.qtimestampToTimea(s.Tools.qgetTimestampMSa()), void this.qshowGetMoneya(1);
                        var a = this;
                        n.ViewManager.getInstance().qopenViewa({
                            View: C.ViewGetHangUp,
                            qCustomDataa: {
                                qmoneya: o.qUserDataMgra.getInstance().data.qhangupMoneya,
                                cbk: function(e) {
                                    o.qUserDataMgra.getInstance().data.qhangUpPopa = s.Tools.qtimestampToTimea(s.Tools.qgetTimestampMSa()), a.qshowGetMoneya(e)
                                },
                                qcloseCbka: function() {
                                    e && e()
                                }
                            }
                        })
                    }
                },
                onGetHangUpClick: function() {
                    this.onAutoPopGetHangUp()
                },
                qshowGetMoneya: function(e) {
                    o.qUserDataMgra.getInstance().data.qmoneya += o.qUserDataMgra.getInstance().data.qhangupMoneya * e, o.qUserDataMgra.getInstance().data.qhangupMoneya = 0, o.qUserDataMgra.getInstance().data.qlastHangupSaveTimea ? (o.qUserDataMgra.getInstance().data.qlastHangupTimea = o.qUserDataMgra.getInstance().data.qlastHangupSaveTimea, this.qhangupFilla.progress = 0, this.qhangupTimea.string = "00:00", this.qhangupMoneya.string = "0", o.qUserDataMgra.getInstance().qsaveUserDataa()) : (o.qUserDataMgra.getInstance().data.qlastHangupTimea = o.qUserDataMgra.getInstance().data.qlastHangupSaveTimea = s.Tools.qgetTimestampSa(), this.qshowHangUpa()), this.qshowFlyMoneya(e > 1 ? 15 : 8)
                },
                qshowFlyMoneya: function(e, a) {
                    if (void 0 === a && (a = 1), e) {
                        var t = null;
                        2 == a && (t = this.qresourceBara.node.getChildByName("qdiamonda").getChildByName("icon")), this.node.getComponent(d.default).qplayGainMoneya(e, null, t, a), this.qrefreshInfoa()
                    }
                },
                qshowSmallMapa: function() {
                    for (var e, a, t = o.qUserDataMgra.getInstance().data.qcurStageIDa - 1, i = 0; i < 3; i++) t < 1 ? this.qMapItemNodea[i].active = !1 : (a = this.qMapItemNodea[i].getComponent(A.default), e = h.default.getInstance().qstageIsBossa(t), t == o.qUserDataMgra.getInstance().data.qcurStageIDa ? a.setType(A.qMapItemTypea.qCurrenta, t, e, 0) : t <= o.qUserDataMgra.getInstance().data.stageID ? a.setType(A.qMapItemTypea.qCanFighta, t, e, 0) : a.setType(A.qMapItemTypea.Unlock, t, e, 0)), t++
                },
                qrefreshInfoa: function() {
                    var e = o.qUserDataMgra.getInstance().data.qcurStageIDa,
                        a = h.default.getInstance().qgetStageInfoa(e).Limit,
                        t = h.default.getInstance().qgetStageNeedPowera(a, e);
                    this.qneedPowerNuma.string = t;
                    var i = o.qUserDataMgra.getInstance().qpowera;
                    this.qpowerNuma.string = i.toString(), i >= t ? (this.qneedPowerNuma.node.color = cc.color(255, 150, 0), this.qneedPowerSpa.color = cc.color(255, 150, 0), this.qpowerNuma.node.color = cc.Color.WHITE) : (this.qneedPowerNuma.node.color = cc.Color.RED, this.qneedPowerSpa.color = cc.Color.RED, this.qpowerNuma.node.color = cc.Color.RED), this.qresourceBara.qrefreshResourcea(), this.qrefreshLvUpInfoa();
                    var n = o.qUserDataMgra.getInstance().qgetCurUnlockGuna();
                    if (n) {
                        this.qgunIcona.node.active = !0;
                        var x = n.qfragmenta - o.qUserDataMgra.getInstance().data.qgunChipa,
                            w = this.qgunIcona.node.getChildByName("qtxta").getComponent(cc.Label);
                        w.string = "C\u1ea7n th\u00eam " + x, s.Tools.qapplyCabinFontToLabela(w), this.qshowGunIcona(n, this.qgunIcona)
                    } else this.qgunIcona.node.active = !1
                },
                qshowGunIcona: function(e, a) {
                    var t = this;
                    this && e && cc.loader.loadRes("img/gunicon/gunIcon_" + e.qGunicona, cc.SpriteFrame, function(i, n) {
                        if (i) return console.log(i), void t.qshowGunIcona(e, a);
                        cc.isValid(a) && (a.spriteFrame = n)
                    })
                },
                onStartGameClick: function() {
                    r.default.getInstance().play("yx_" + r.qAudioSourceNamea.Click);
                    var e = o.qUserDataMgra.getInstance().data.qcurStageIDa;
                    if (console.log("boss------------------", h.default.getInstance().qstageIsBossa(e)), h.default.getInstance().qstageIsBossa(e) || o.qUserDataMgra.getInstance().randomWeapon(), e > 1 && o.qUserDataMgra.getInstance().data.qenergya < h.default.getInstance().qinitMapa.MAIN_EXPEND.Value) n.ViewManager.getInstance().qopenViewa({
                        View: m.ViewLack,
                        qCustomDataa: {
                            qexchangeTypea: m.qViewLackExchangeTypea.Energy
                        }
                    });
                    else {
                        var a = this;
                        if (2 < o.qUserDataMgra.getInstance().data.stageID && o.qUserDataMgra.getInstance().data.stageID % 5 != 0 && (this.qisFreeGunVideoa = !0), console.log("-----------this.qisFreeGunVideoa-------", this.qisFreeGunVideoa), this.qisFreeGunVideoa && o.qUserDataMgra.getInstance().qfreeWeaponIda && !o.qUserDataMgra.getInstance().qcurFreeWeaponIda) n.ViewManager.getInstance().qopenViewa({
                            View: N.ViewFreeGun,
                            qCustomDataa: {
                                gunId: o.qUserDataMgra.getInstance().qfreeWeaponIda,
                                cbk: function() {
                                    a.qstartFighta()
                                }
                            }
                        });
                        else {
                            var t = h.default.getInstance().qgetStageInfoa(e).Limit,
                                i = h.default.getInstance().qgetStageNeedPowera(t, e);
                            if (h.default.getInstance().qstageIsBossa(e)) {
                                var s = h.default.getInstance().qgetStageBossAvatara(e);
                                n.ViewManager.getInstance().qopenViewa({
                                    View: w.ViewBoss,
                                    qCustomDataa: {
                                        avatar: s,
                                        qpowera: i,
                                        cbk: function(e) {
                                            e ? a.qstartFighta() : a.qshowLvUpGuidea()
                                        }
                                    }
                                })
                            } else e < 10 && o.qUserDataMgra.getInstance().qpowera < i ? n.ViewManager.getInstance().qopenViewa({
                                View: I.ViewWarn,
                                qCustomDataa: {
                                    cbk: function(e) {
                                        e ? a.qstartFighta() : a.qshowLvUpGuidea()
                                    }
                                }
                            }) : this.qstartFighta()
                        }
                    }
                },
                qstartFighta: function() {
                    if (f.LeuokBi.qsafeCalla("action", {
                            qactionTypea: 2,
                            qactionNumbera: 1
                        }), o.qUserDataMgra.getInstance().data.qcurStageIDa > 1) {
                        var e = -parseInt(h.default.getInstance().qinitMapa.MAIN_EXPEND.Value);
                        o.qUserDataMgra.getInstance().data.qenergya += e, n.ViewManager.getInstance().qshowEnergyTipa(e)
                    }
                    var a = o.qUserDataMgra.getInstance().qcurFreeWeaponIda;
                    a || (a = o.qUserDataMgra.getInstance().data.qweaponIDa);
                    var t = o.qUserDataMgra.getInstance().data.qsecondWeaponIDa;
                    f.LeuokBi.qsafeCalla("qappOncea", {
                        qactionNumbera: 5
                    }), n.ViewManager.getInstance().qopenViewa({
                        View: l.ViewMap,
                        qCustomDataa: {
                            startBattle: !0,
                            qweaponIda: a,
                            qsecondWeaponIda: t
                        },
                        qFinishedCbka: function() {
                            n.ViewManager.getInstance().qcloseViewa({
                                View: D
                            })
                        }
                    }), 6 == o.qUserDataMgra.getInstance().data.qguideIda && (o.qUserDataMgra.getInstance().data.qguideIda = 0)
                },
                onRankClick: function() {
                    f.LeuokBi.qsafeCalla("action", {
                        qactionTypea: 2,
                        qactionNumbera: 2
                    }), r.default.getInstance().play("yx_" + r.qAudioSourceNamea.Click);
                    try {
                        if (window.HistoryLeaderboard && typeof window.HistoryLeaderboard.open === "function") {
                            window.HistoryLeaderboard.open();
                            return
                        }
                        var e = document.querySelector("[data-history-leaderboard]");
                        e && e.click()
                    } catch (a) {
                        console.warn("[ViewHome] open leaderboard failed", a)
                    }
                },
                onClearDataClick: function() {
                    r.default.getInstance().play("yx_" + r.qAudioSourceNamea.Click);
                    window.GVGameSave && window.GVGameSave.showConfirmDialog ? window.GVGameSave.showConfirmDialog("B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n x\u00f3a t\u1ea5t c\u1ea3 d\u1eef li\u1ec7u v\u00e0 ch\u01a1i l\u1ea1i t\u1eeb \u0111\u1ea7u?", window.GVGameSave.resetAllData, null) : console.warn("[ViewHome] GVGameSave.showConfirmDialog missing")
                },
                qsetupHomeSideMenuButtonsa: function() {
                    if (!this.qmenuBara) return;
                    var e = this.qmenuBara.getChildByName("bg");
                    if (!e) return;
                    var a = e.getChildByName("qbtnSigna"),
                        t = e.getChildByName("qbtnRanka"),
                        i = e.getChildByName("qbtnCSa"),
                        n = a && a.width ? a.width : 88,
                        o = a && a.height ? a.height : 107,
                        // Fit icons inside login slot; slightly inset so visual weight matches Đăng nhập
                        s = Math.floor(.82 * Math.min(n, o));

                    function c(e) {
                        e && (e.active = !0)
                    }

                    function l(e, a) {
                        e && cc.loader.load({
                            url: a,
                            type: "png"
                        }, function(t, i) {
                            if (t || !e.isValid) return void console.warn("[ViewHome] load icon failed", a, t);
                            var o = e.getComponent(cc.Sprite);
                            if (!o) return;
                            var c = i.width || 1,
                                l = i.height || 1,
                                q = Math.min(s / c, s / l),
                                h = Math.round(c * q),
                                g = Math.round(l * q);
                            o.spriteFrame = new cc.SpriteFrame(i), o.sizeMode = cc.Sprite.SizeMode.CUSTOM, e.setScale(1), e.setContentSize(h, g);
                            var u = e.parent && e.parent.getComponent(cc.Layout);
                            u && u.updateLayout && u.updateLayout()
                        })
                    }
                    c(a), c(t), c(i);
                    var q = 10 + 20 + 40 + 3 * o;
                    e.setContentSize(130, q), e.width = 130, e.height = q;
                    var h = e.getComponent(cc.Layout);
                    h && (h.enabled = !0, h.paddingTop = 10, h.paddingBottom = 20, h.spacingY = 20, h.type = cc.Layout.Type.VERTICAL, h.updateLayout && h.updateLayout()), this.qmenuBara.setContentSize(130, Math.max(409, q + 40)), l(t, "res/bxh-gv.png"), l(i, "res/clear-data.png");
                    if (i) {
                        var g = i.getComponent(cc.Button);
                        g && g.clickEvents && g.clickEvents.length && (g.clickEvents[0].handler = "onClearDataClick")
                    }
                },
                onMainGunClick: function() {
                    f.LeuokBi.qsafeCalla("action", {
                        qactionTypea: 2,
                        qactionNumbera: 3
                    }), r.default.getInstance().play("yx_" + r.qAudioSourceNamea.Click), n.ViewManager.getInstance().qcloseViewa({
                        View: D
                    }), n.ViewManager.getInstance().qopenViewa({
                        View: g.ViewGunList,
                        qCustomDataa: {
                            qgunListTypea: g.qGunListTypea.Main
                        }
                    })
                },
                onSecondGunClick: function() {
                    f.LeuokBi.qsafeCalla("action", {
                        qactionTypea: 2,
                        qactionNumbera: 4
                    }), r.default.getInstance().play("yx_" + r.qAudioSourceNamea.Click), n.ViewManager.getInstance().qcloseViewa({
                        View: D
                    }), n.ViewManager.getInstance().qopenViewa({
                        View: g.ViewGunList,
                        qCustomDataa: {
                            qgunListTypea: g.qGunListTypea.Second
                        }
                    })
                },
                onMapClick: function() {
                    f.LeuokBi.qsafeCalla("action", {
                        qactionTypea: 2,
                        qactionNumbera: 5
                    }), r.default.getInstance().play("yx_" + r.qAudioSourceNamea.Click), n.ViewManager.getInstance().qcloseViewa({
                        View: D
                    }), n.ViewManager.getInstance().qopenViewa({
                        View: l.ViewMap
                    })
                },
                onInviteClick: function() {
                    r.default.getInstance().play("yx_" + r.qAudioSourceNamea.Click), n.ViewManager.getInstance().qopenViewa({
                        View: u.ViewInviteList
                    })
                },
                onSignClick: function() {
                    r.default.getInstance().play("yx_" + r.qAudioSourceNamea.Click);
                    var e = this;
                    n.ViewManager.getInstance().qopenViewa({
                        View: _.ViewSign,
                        qCustomDataa: {
                            cbk: function(a, t) {
                                1 == a ? e.qshowFlyMoneya(t > 1 ? 15 : 8) : e.qshowFlyMoneya(t, a), e.qcheckSignRedHota()
                            }
                        }
                    })
                },
                onLotteryClick: function() {
                    this.qshowLotterya()
                },
                qshowLotterya: function(e) {
                    void 0 === e && (e = null), f.LeuokBi.qsafeCalla("action", {
                        qactionTypea: 2,
                        qactionNumbera: 20
                    }), r.default.getInstance().play("yx_" + r.qAudioSourceNamea.Click), o.qUserDataMgra.getInstance().data.qlotteryGuidea = 1, r.default.getInstance().play("yx_" + r.qAudioSourceNamea.Click), n.ViewManager.getInstance().qopenViewa({
                        View: S.ViewLottery,
                        qCustomDataa: {
                            qcloseCbka: function() {
                                e && e()
                            }
                        }
                    })
                },
                qrefreshLvUpInfoa: function() {
                    var e = o.qUserDataMgra.getInstance().data.qmoneya,
                        a = h.default.getInstance().qgetHpLvDataa(o.qUserDataMgra.getInstance().data.qmaxHpLva),
                        t = h.default.getInstance().qgetHpLvDataa(o.qUserDataMgra.getInstance().data.qmaxHpLva + 1);
                    this.qhpUpCostNuma = a.qNeedgolda, this.qhpUpCosta.string = s.Tools.qnumberFormata(this.qhpUpCostNuma), e < this.qhpUpCostNuma ? this.qhideLvUpHota(this.qhpHota) : this.qshowLvUpHota(this.qhpHota), this.qhpLva.string = "Lv" + o.qUserDataMgra.getInstance().data.qmaxHpLva, this.qhpVala.string = a.qShownumbera, this.qhpValAdda.string = "+" + (t.qShownumbera - a.qShownumbera), a = h.default.getInstance().qgetMoneyLvDataa(o.qUserDataMgra.getInstance().data.qhangupMoneyLva), t = h.default.getInstance().qgetMoneyLvDataa(o.qUserDataMgra.getInstance().data.qhangupMoneyLva + 1), this.qmoneyUpCostNuma = a.qNeedgolda, this.qmoneyUpCosta.string = s.Tools.qnumberFormata(this.qmoneyUpCostNuma), e < this.qmoneyUpCostNuma ? this.qhideLvUpHota(this.qmoneyHota) : this.qshowLvUpHota(this.qmoneyHota), this.qmoneyLva.string = "Lv" + o.qUserDataMgra.getInstance().data.qhangupMoneyLva, this.qmoneyVala.string = a.qShownumbera, this.qmoneyValAdda.string = "+" + (t.qShownumbera - a.qShownumbera), a = h.default.getInstance().qgetDamageLvDataa(o.qUserDataMgra.getInstance().data.qdamageLva), t = h.default.getInstance().qgetDamageLvDataa(o.qUserDataMgra.getInstance().data.qdamageLva + 1), this.qdamageUpCostNuma = a.qNeedgolda, this.qdamageUpCosta.string = s.Tools.qnumberFormata(this.qdamageUpCostNuma), e < this.qdamageUpCostNuma ? this.qhideLvUpHota(this.qdamageHota) : this.qshowLvUpHota(this.qdamageHota), this.qdamageLva.string = "Lv" + o.qUserDataMgra.getInstance().data.qdamageLva, this.qdamageVala.string = a.qShownumbera, this.qdamageValAdda.string = "+" + (t.qShownumbera - a.qShownumbera)
                },
                qshowLvUpHota: function(e) {
                    e.stopAllActions(), e.active = !0, e.setPosition(0, 0), e.opacity = 255, e.runAction(cc.sequence(cc.fadeIn(.05), cc.moveTo(.4, 0, 20), cc.fadeOut(.05), cc.moveTo(.1, 0, 0)).repeatForever())
                },
                qhideLvUpHota: function(e) {
                    e.stopAllActions(), e.active = !1
                },
                onHpUpClick: function() {
                    this.guide && this.guide.qhideAlla(), o.qUserDataMgra.getInstance().data.qmoneya >= this.qhpUpCostNuma ? (f.LeuokBi.qsafeCalla("action", {
                        qactionTypea: 2,
                        qactionNumbera: 10
                    }), o.qUserDataMgra.getInstance().data.qmoneya -= this.qhpUpCostNuma, o.qUserDataMgra.getInstance().data.qmaxHpLva++, o.qUserDataMgra.getInstance().qrefreshPowera(), this.qplayLvUpAnimationa(this.qbtnHpa.getChildByName("effect")), this.qrefreshInfoa(), o.qUserDataMgra.getInstance().qsaveUserDataa()) : (f.LeuokBi.qsafeCalla("action", {
                        qactionTypea: 2,
                        qactionNumbera: 11
                    }), this.qshowLackMoneya())
                },
                onMoneyUpClick: function() {
                    o.qUserDataMgra.getInstance().data.qmoneya >= this.qmoneyUpCostNuma ? (f.LeuokBi.qsafeCalla("action", {
                        qactionTypea: 2,
                        qactionNumbera: 12
                    }), o.qUserDataMgra.getInstance().data.qmoneya -= this.qmoneyUpCostNuma, o.qUserDataMgra.getInstance().data.qhangupMoneyLva++, this.qplayLvUpAnimationa(this.qbtnMoneya.getChildByName("effect")), this.qrefreshInfoa(), o.qUserDataMgra.getInstance().qsaveUserDataa()) : (f.LeuokBi.qsafeCalla("action", {
                        qactionTypea: 2,
                        qactionNumbera: 13
                    }), this.qshowLackMoneya())
                },
                onDamageUpClick: function() {
                    this.guide && this.guide.qhideAlla(), o.qUserDataMgra.getInstance().data.qmoneya >= this.qdamageUpCostNuma ? (f.LeuokBi.qsafeCalla("action", {
                        qactionTypea: 2,
                        qactionNumbera: 14
                    }), o.qUserDataMgra.getInstance().data.qmoneya -= this.qdamageUpCostNuma, o.qUserDataMgra.getInstance().data.qdamageLva++, o.qUserDataMgra.getInstance().qrefreshPowera(), this.qplayLvUpAnimationa(this.btnDamage.getChildByName("effect")), this.qrefreshInfoa(), o.qUserDataMgra.getInstance().qsaveUserDataa()) : (f.LeuokBi.qsafeCalla("action", {
                        qactionTypea: 2,
                        qactionNumbera: 15
                    }), this.qshowLackMoneya())
                },
                qplayLvUpAnimationa: function(e) {
                    r.default.getInstance().play("yx_shengji"), e.stopAllActions(), e.active = !0, e.getComponent(cc.Animation).play("qzhuangbeishengjia"), e.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function() {
                        e.active = !1
                    })))
                },
                qshowLackMoneya: function() {
                    if (o.qUserDataMgra.getInstance().qisCanFreeMoneya()) {
                        var e = this;
                        n.ViewManager.getInstance().qopenViewa({
                            View: M.ViewFreeMoney,
                            qCustomDataa: {
                                cbk: function() {
                                    e.qshowFlyMoneya(15)
                                }
                            }
                        })
                    } else n.ViewManager.getInstance().qshowTipa("Thiếu tài nguyên")
                },
                qshowAddMoneya: function() {
                    n.ViewManager.getInstance().qopenViewa({
                        View: m.ViewLack,
                        qCustomDataa: {
                            qexchangeTypea: m.qViewLackExchangeTypea.Money
                        }
                    })
                },
                qcheckGuidea: function(e) {
                    var a = o.qUserDataMgra.getInstance().data,
                        t = a.qguideIda,
                        i = a.qcurStageIDa;
                    if (!t && i > 5 && a.qhelmetGuidea) return this.guide && (this.guide.node.destroy(), this.guide = null), void e(!1);
                    var s = this;
                    n.ViewManager.getInstance().qturnOffScreenClicka(!0), this.qloadGuidea(function() {
                        n.ViewManager.getInstance().qturnOnScreenClicka(), s.qshowGuidea(e)
                    })
                },
                qloadGuidea: function(e) {
                    if (this.guide) e();
                    else {
                        var a = this;
                        cc.loader.loadRes("prefab/battle/mg_Guide", cc.Prefab, function(t, i) {
                            if (t) return console.log(t), void a.qloadGuidea(e);
                            var n = cc.instantiate(i);
                            a.guide = n.getComponent(y.default), n.parent = a.node.getChildByName("qguideNodea"), e()
                        })
                    }
                },
                qshowGuidea: function(e) {
                    void 0 === e && (e = null);
                    var a = this,
                        t = o.qUserDataMgra.getInstance().data.qguideIda;
                    switch (this.guide.qhideAlla(), t) {
                        case 1:
                        case 2:
                            this.guide.qshowHanda(this.qbtnStartGamea), this.guide.qshowMaska(this.qbtnStartGamea, function() {
                                o.qUserDataMgra.getInstance().data.qguideIda = 2, a.onStartGameClick()
                            });
                            break;
                        case 3:
                        case 4:
                            this.guide.qshowTipa("Nâng cấp <color=#00ff00>sát thương</c>", cc.v2(0, -300));
                            var i = this.btnDamage.getChildByName("bg");
                            this.guide.qshowHanda(i), this.guide.qshowMaska(i, function() {
                                o.qUserDataMgra.getInstance().data.qguideIda = 5, a.onDamageUpClick(), a.qshowGuidea()
                            });
                            break;
                        case 5:
                            this.guide.qshowTipa("Thu thập <color=#00ff00> tiền </c>", cc.v2(150, 450));
                            var n = this.node.getChildByName("mid").getChildByName("qbtnHangupa");
                            this.guide.qshowHanda(n), this.guide.qshowMaska(n, function() {
                                o.qUserDataMgra.getInstance().data.qguideIda = 6, a.onGetHangUpClick(), a.qshowGuidea()
                            });
                            break;
                        case 6:
                            this.guide.qshowHanda(this.qbtnStartGamea), this.guide.qshowMaska(this.qbtnStartGamea, function() {
                                o.qUserDataMgra.getInstance().data.qguideIda = 0, a.onStartGameClick()
                            });
                            break;
                        case 0:
                            if (!o.qUserDataMgra.getInstance().data.qhelmetGuidea && o.qUserDataMgra.getInstance().data.qcurStageIDa > 3);
                            else if (!o.qUserDataMgra.getInstance().data.qlotteryGuidea && o.qUserDataMgra.getInstance().data.qcurStageIDa > 4);
                            else {
                                var s = o.qUserDataMgra.getInstance().data.qmoneya;
                                if (s >= this.qdamageUpCostNuma && s >= this.qhpUpCostNuma) o.qUserDataMgra.getInstance().data.qdamageLva <= o.qUserDataMgra.getInstance().data.qmaxHpLva ? this.qshowDamageUpGuidea() : this.qshowHpUpGuidea();
                                else if (s >= this.qdamageUpCostNuma) this.qshowDamageUpGuidea();
                                else {
                                    if (!(s >= this.qhpUpCostNuma)) return void(e && e(!1));
                                    this.qshowHpUpGuidea()
                                }
                            }
                    }
                    e && e(!0)
                },
                qshowStartGameGuidea: function() {
                    if (3 == o.qUserDataMgra.getInstance().data.qcurStageIDa) {
                        var e = this;
                        this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
                            e && e.guide && e.guide.qshowHanda(e.qbtnStartGamea)
                        })))
                    }
                },
                qshowHelmetGuidea: function() {
                    var e = this;
                    this.guide.qshowHanda(this.qbtnHelmeta), this.guide.qshowMaska(this.qbtnHelmeta, function() {
                        e.guide.qhideAlla(), e.qshowHelmeta(function() {
                            o.qUserDataMgra.getInstance().data.qcurStageIDa <= 5 && e.qshowGuidea()
                        })
                    })
                },
                qshowLotteryGuidea: function() {
                    var e = this;
                    this.guide.qshowHanda(this.qbtnLotterya), this.guide.qshowMaska(this.qbtnLotterya, function() {
                        e.guide.qhideAlla(), e.qshowLotterya(function() {
                            o.qUserDataMgra.getInstance().data.qcurStageIDa <= 5 && e.qshowGuidea()
                        })
                    })
                },
                qshowDamageUpGuidea: function(e) {
                    void 0 === e && (e = !0);
                    var a = this;
                    this.guide.qshowTipa("Nâng cấp <color=#00ff00>sát thương</c>", cc.v2(0, -300));
                    var t = this.btnDamage.getChildByName("bg");
                    this.guide.qshowHanda(t), e && this.guide.qshowMaska(t, function() {
                        a.onDamageUpClick(), a.guide.qhideAlla(), a.qshowStartGameGuidea()
                    })
                },
                qshowHpUpGuidea: function(e) {
                    void 0 === e && (e = !0);
                    var a = this;
                    a.guide.qshowTipa("Nâng cấp <color=#00ff00> HP tối đa", cc.v2(0, -300));
                    var t = this.qbtnHpa.getChildByName("bg");
                    a.guide.qshowHanda(t), e && a.guide.qshowMaska(t, function() {
                        a.onHpUpClick(), a.guide.qhideAlla(), a.qshowStartGameGuidea()
                    })
                },
                qshowLvUpGuidea: function() {
                    var e = this,
                        a = this;
                    n.ViewManager.getInstance().qturnOffScreenClicka(!0), this.qloadGuidea(function() {
                        e.guide.qhideAlla(), n.ViewManager.getInstance().qturnOnScreenClicka(), o.qUserDataMgra.getInstance().data.qdamageLva <= o.qUserDataMgra.getInstance().data.qmaxHpLva ? a.qshowDamageUpGuidea() : a.qshowHpUpGuidea()
                    })
                },
                qrefreshBtnHelmeta: function() {},
                onHelmetClick: function() {
                    this.qshowHelmeta()
                },
                qshowHelmeta: function(e) {
                    void 0 === e && (e = null), o.qUserDataMgra.getInstance().data.qhelmetGuidea = 1, r.default.getInstance().play("yx_" + r.qAudioSourceNamea.Click), n.ViewManager.getInstance().qopenViewa({
                        View: k.ViewHelmet,
                        qCustomDataa: {
                            qcloseCbka: function() {
                                e && e()
                            }
                        }
                    })
                },
                onOpenBarClick: function() {
                    this.qmenuBara.active = !0, this.qbtnOpenBara.active = !1, this.qmenuBara.x = -490, this.qmenuBara.stopAllActions(), this.qmenuBara.runAction(cc.moveBy(.2, 130, 0))
                },
                onCloseBarClick: function() {
                    this.qmenuBara.active = !0, this.qmenuBara.x = -360, this.qbtnOpenBara.active = !1, this.qmenuBara.stopAllActions();
                    var e = this;
                    this.qmenuBara.runAction(cc.sequence(cc.moveBy(.2, -130, 0), cc.callFunc(function() {
                        e && e.qmenuBara && e.qbtnOpenBara && (e.qmenuBara.active = !1, e.qbtnOpenBara.active = !0)
                    })))
                },
                onCustomClick: function() {},
                onFreeGunClick: function() {
                    this.guide && this.guide.qhideAlla();
                    var e = this;
                    this.node.getComponent("shareUtils").doShare({
                        success: function() {
                            o.qUserDataMgra.getInstance().qcurFreeWeaponIda = o.qUserDataMgra.getInstance().qfreeWeaponIda, e.qgunFreea.active = !1, e.qgunUnlocka.active = !0
                        }
                    })
                },
                onMoreGameClick: function() {},
                onExitClick: function() {},
                onClose: function() {
                    window.GVGameSave && window.GVGameSave.hideClearDataButton(), v.WeChatGame.getInstance().qhideGameClubBtna()
                },
                onPause: function() {},
                onResume: function() {},
                onReceiveMessage: function(e) {
                    "qrefresha" == e.type ? this.qrefreshInfoa() : "refreshRedHot" == e.type ? this.qcheckRedHota() : "qrefreshBtnHelmeta" == e.type ? this.qrefreshBtnHelmeta() : "refreshLotteryHot" == e.type && this.qcheckLotteryRedHota()
                }
            }));
        t.ViewHome = B;
        var D = B;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_BuildingInfo: "mg_BuildingInfo",
        mg_ConfigDataManager: "mg_ConfigDataManager",
        mg_GainMoneyAnim: "mg_GainMoneyAnim",
        mg_Guide: "mg_Guide",
        mg_LeuokBi: "mg_LeuokBi",
        mg_MapItem: "mg_MapItem",
        mg_ResourceBar: "mg_ResourceBar",
        mg_ScreenAdapter: "mg_ScreenAdapter",
        mg_SdkCommon: "mg_SdkCommon",
        mg_Tools: "mg_Tools",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewBase: "mg_ViewBase",
        mg_ViewBoss: "mg_ViewBoss",
        mg_ViewFreeGun: "mg_ViewFreeGun",
        mg_ViewFreeMoney: "mg_ViewFreeMoney",
        mg_ViewFriendRank: "mg_ViewFriendRank",
        mg_ViewGetHangUp: "mg_ViewGetHangUp",
        mg_ViewGunList: "mg_ViewGunList",
        mg_ViewHelmet: "mg_ViewHelmet",
        mg_ViewInviteList: "mg_ViewInviteList",
        mg_ViewLack: "mg_ViewLack",
        mg_ViewLottery: "mg_ViewLottery",
        mg_ViewManager: "mg_ViewManager",
        mg_ViewMap: "mg_ViewMap",
        mg_ViewSign: "mg_ViewSign",
        mg_ViewWarn: "mg_ViewWarn",
        mg_WeChatGame: "mg_WeChatGame"
    }],
    mg_ViewInviteList: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "c0592UB0qFC6Y6RFMYukTXA", "mg_ViewInviteList");
        var i = e("mg_ViewBase"),
            n = e("mg_ViewManager"),
            o = e("mg_AudioManager"),
            s = (e("mg_ConfigDataManager"), e("mg_UserDataManager")),
            r = e("mg_InviteListItem"),
            c = (e("mg_Tools"), e("mg_BuildingInfo")),
            l = cc._decorator,
            q = (l.qccclassa, l.property, cc.Class({
                extends: i.ViewBase,
                properties: {
                    qinviteContenta: cc.Node,
                    ndClose: cc.Node
                },
                statics: {
                    qprafabPatha: "prefab/home/InviteList/mg_ViewInviteList"
                },
                ctor: function() {
                    var e = this;
                    e.qisFullScreena = !1, e.qinviteLista = [], e.qnoneAvatarLista = []
                },
                onOpen: function(e) {
                    console.log("\u83b7\u53d6\u9080\u8bf7\u5217\u8868\uff01\uff01\uff01"), n.ViewManager.getInstance().qturnOffScreenClicka(!0)
                },
                qrefreshLista: function(e) {
                    var a = this;

                    function t() {
                        a.onShareClick()
                    }
                    for (var i = 0; i < e.length; i++) {
                        this.qinviteContenta.children[i].getComponent(r.default).init(e[i], t)
                    }
                    n.ViewManager.getInstance().qturnOnScreenClicka()
                },
                qrefreshHeadIcona: function() {
                    if (c.default.qgetChannelTypea() == c.qChannelTypea.WX && c.default.qisUseCDBa()) {
                        var e = this,
                            a = {
                                qotherUidsa: e.qnoneAvatarLista,
                                success: function(t) {
                                    console.log("CDB qgetUsersa Success \u4e0a\u884c:" + JSON.stringify(a) + " \u4e0b\u884c:" + JSON.stringify(t));
                                    for (var i = 0, n = t.info; i < n.length; i++) {
                                        var o = n[i];
                                        s.qUserDataMgra.getInstance().qupdateInvitePlayerDataa(o.uid, o.icon)
                                    }
                                    for (var c = 0, l = e.qinviteContenta.getComponentsInChildren(r.default); c < l.length; c++) l[c].qshowHeadIcona()
                                },
                                fail: function(e) {
                                    console.error("CDB qgetUsersa Fail \u4e0a\u884c:" + JSON.stringify(a) + " \u4e0b\u884c:" + JSON.stringify(e))
                                }
                            };
                        u.CDB.qgetUsersa(a)
                    }
                },
                onShareClick: function() {},
                onCloseClick: function() {
                    o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), n.ViewManager.getInstance().qcloseViewa({
                        View: h
                    })
                },
                onClose: function() {}
            }));
        t.ViewInviteList = q;
        var h = q;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_BuildingInfo: "mg_BuildingInfo",
        mg_ConfigDataManager: "mg_ConfigDataManager",
        mg_InviteListItem: "mg_InviteListItem",
        mg_Tools: "mg_Tools",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewBase: "mg_ViewBase",
        mg_ViewManager: "mg_ViewManager"
    }],
    mg_ViewLack: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "a90ebKEVq1NPI5Oi98AMp7v", "mg_ViewLack");
        var i, n = e("mg_ViewBase"),
            o = e("mg_ViewManager"),
            s = e("mg_UserDataManager"),
            r = e("mg_AudioManager"),
            c = e("mg_ConfigDataManager"),
            l = e("mg_ViewHome"),
            q = e("mg_ViewGain"),
            h = e("mg_ViewGunList"),
            g = (e("mg_ViewInviteList"), e("mg_Tools")),
            u = (e("mg_WeChatGame"), e("mg_ViewWin"));
        e("mg_BuildingInfo");
        (function(e) {
            e[e.Money = 0] = "Money", e[e.Energy = 1] = "Energy"
        })(i = t.qViewLackExchangeTypea || (t.qViewLackExchangeTypea = {}));
        var d = cc._decorator,
            m = (d.qccclassa, d.property, cc.Class({
                extends: n.ViewBase,
                properties: {
                    qdiamondNuma: cc.Label,
                    qdiamondStra: cc.Label,
                    qvala: cc.Label,
                    qlackMoneyTxta: cc.Node,
                    qiconMoneya: cc.Node,
                    qlackEnergyTxta: cc.Node,
                    qiconEnergya: cc.Node,
                    qbtnAdda: cc.Button,
                    qbtnDeca: cc.Button,
                    qbtnExchangea: cc.Button
                },
                statics: {
                    qprafabPatha: "prefab/home/mg_ViewLack"
                },
                ctor: function() {
                    var e = this;
                    e.qisFullScreena = !1, e.qexchangeTypea = i.Money, e.qdiamonda = 0
                },
                onOpen: function(e) {
                    this.qexchangeTypea = e.qexchangeTypea, this.qexchangeTypea == i.Money ? (this.qiconMoneya.active = !0, this.qlackMoneyTxta.active = !0, this.qiconEnergya.active = !1, this.qlackEnergyTxta.active = !1) : (this.qiconMoneya.active = !1, this.qlackMoneyTxta.active = !1, this.qiconEnergya.active = !0, this.qlackEnergyTxta.active = !0), s.qUserDataMgra.getInstance().data.qdiamonda && (this.qdiamonda = 1), g.Tools.qapplyCabinFontToNodea(this.node), this.qapplyLackButtonLabelsa(), this.qrefresha()
                },
                qapplyLackButtonLabelsa: function() {
                    var e = this.qbtnExchangea.node.getChildByName("qtxta");
                    if (e) {
                        var a = e.getComponent(cc.Label);
                        a && (a.string = "\u0110\u1ed5i", g.Tools.qapplyCabinFontToLabela(a))
                    }
                    var t = this.node.getChildByName("qbtnAddDiamonda");
                    if (t) {
                        var i = t.getChildByName("qtxta");
                        if (i) {
                            var n = i.getComponent(cc.Label);
                            n && (n.string = "Nh\u1eadn KC", g.Tools.qapplyCabinFontToLabela(n))
                        }
                    }
                },
                qrefresha: function() {
                    this.qdiamonda <= 0 ? (this.qdiamonda, s.qUserDataMgra.getInstance().data.qdiamonda ? this.qbtnAdda.interactable = !0 : this.qbtnAdda.interactable = !1, this.qbtnExchangea.interactable = !1, this.qbtnDeca.interactable = !1) : (this.qdiamonda >= s.qUserDataMgra.getInstance().data.qdiamonda ? (this.qdiamonda, s.qUserDataMgra.getInstance().data.qdiamonda, this.qbtnAdda.interactable = !1) : this.qbtnAdda.interactable = !0, this.qbtnExchangea.interactable = !0, this.qbtnDeca.interactable = !0), this.qdiamondNuma.string = this.qdiamonda.toString(), this.qdiamondStra.string = "D\u00f9ng " + this.qdiamonda, g.Tools.qapplyCabinFontToLabela(this.qdiamondStra), g.Tools.qapplyCabinFontToLabela(this.qdiamondNuma), g.Tools.qapplyCabinFontToLabela(this.qvala), this.qexchangeTypea == i.Money ? this.qvala.string = g.Tools.qnumberFormata(this.qdiamonda * c.default.getInstance().qinitMapa.JEWEL_MONEY.Value) : this.qvala.string = (this.qdiamonda * c.default.getInstance().qinitMapa.JEWEL_MAIN.Value).toString()
                },
                onCloseClick: function() {
                    r.default.getInstance().play("yx_" + r.qAudioSourceNamea.Click), o.ViewManager.getInstance().qcloseViewa({
                        View: p
                    })
                },
                onAddClick: function() {
                    this.qdiamonda++, this.qrefresha()
                },
                onDecClick: function() {
                    this.qdiamonda--, this.qrefresha()
                },
                onExchangeClick: function() {
                    if (s.qUserDataMgra.getInstance().data.qdiamonda -= this.qdiamonda, this.qexchangeTypea == i.Money) {
                        var e = this.qdiamonda * c.default.getInstance().qinitMapa.JEWEL_MONEY.Value;
                        s.qUserDataMgra.getInstance().data.qmoneya += e, o.ViewManager.getInstance().qopenViewa({
                            View: q.ViewGain,
                            qCustomDataa: {
                                qgainTypea: q.qViewGainTypea.Money,
                                count: e
                            }
                        })
                    } else e = this.qdiamonda * c.default.getInstance().qinitMapa.JEWEL_MAIN.Value, s.qUserDataMgra.getInstance().data.qenergya += e, o.ViewManager.getInstance().qshowEnergyTipa(e), o.ViewManager.getInstance().qopenViewa({
                        View: q.ViewGain,
                        qCustomDataa: {
                            qgainTypea: q.qViewGainTypea.Energy,
                            count: e
                        }
                    });
                    s.qUserDataMgra.getInstance().qsaveUserDataa(), this.qdiamonda = 0, this.qrefresha(), o.ViewManager.getInstance().qsendViewMessagea(l.ViewHome, {
                        type: "qrefresha"
                    }), o.ViewManager.getInstance().qsendViewMessagea(h.ViewGunList, {
                        type: "qrefresha"
                    }), o.ViewManager.getInstance().qsendViewMessagea(u.ViewWin, {
                        type: "qrefresha"
                    })
                },
                onAddDiamondClick: function() {
                    var e = this;
                    cc.game4399Mgr.showVideoAD(function() {
                        s.qUserDataMgra.getInstance().data.qdiamonda += 20, e.cbk && e.cbk(2, 2), s.qUserDataMgra.getInstance().qsaveUserDataa(), e.qrefresha(), s.qUserDataMgra.getInstance().qsaveUserDataa(), e.qdiamonda = 0, e.qrefresha(), o.ViewManager.getInstance().qsendViewMessagea(l.ViewHome, {
                            type: "qrefresha"
                        }), o.ViewManager.getInstance().qsendViewMessagea(h.ViewGunList, {
                            type: "qrefresha"
                        }), o.ViewManager.getInstance().qsendViewMessagea(u.ViewWin, {
                            type: "qrefresha"
                        })
                    }, function() {
                        console.log("\u9886\u53d6\u5931\u8d25")
                    })
                }
            }));
        t.ViewLack = m;
        var p = m;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_BuildingInfo: "mg_BuildingInfo",
        mg_ConfigDataManager: "mg_ConfigDataManager",
        mg_Tools: "mg_Tools",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewBase: "mg_ViewBase",
        mg_ViewGain: "mg_ViewGain",
        mg_ViewGunList: "mg_ViewGunList",
        mg_ViewHome: "mg_ViewHome",
        mg_ViewInviteList: "mg_ViewInviteList",
        mg_ViewManager: "mg_ViewManager",
        mg_ViewWin: "mg_ViewWin",
        mg_WeChatGame: "mg_WeChatGame"
    }],
    mg_ViewLose: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "9971eSYJthMOpDR1Op+SJ3T", "mg_ViewLose");
        var i = e("mg_ViewBase"),
            n = e("mg_ViewManager"),
            o = e("mg_AudioManager"),
            s = (e("mg_SdkCommon"), e("mg_WeChatGame"), e("mg_Tools")),
            r = e("mg_BuildingInfo"),
            c = e("mg_UserDataManager"),
            l = (e("mg_RemoteConfigManager"), cc._decorator),
            q = (l.qccclassa, l.property, cc.Class({
                extends: i.ViewBase,
                properties: {
                    qfreeMoneya: cc.Label,
                    qmoneya: cc.Label,
                    share: cc.Node,
                    qvideoa: cc.Node,
                    qVideoTxta: cc.Label,
                    shareTxt: cc.Label,
                    ndClose: cc.Node
                },
                statics: {
                    qprafabPatha: "prefab/battle/ui/mg_ViewLose"
                },
                ctor: function() {
                    var e = this;
                    e.qisFullScreena = !1, e.cbk = null, e.qisShowYouzia = !1
                },
                onOpen: function(e) {
                    s.Tools.qapplyCabinFontToNodea(this.node), this.cbk = e.cbk, e.qmoneya > 1e4 ? (this.qfreeMoneya.string = s.Tools.qnumberFormata(e.qmoneya), this.qVideoTxta.string = s.Tools.qnumberFormata(3 * e.qmoneya), this.shareTxt.string = s.Tools.qnumberFormata(3 * e.qmoneya)) : (this.qfreeMoneya.string = e.qmoneya, this.qVideoTxta.string = 3 * e.qmoneya, this.shareTxt.string = 3 * e.qmoneya)
                },
                onCloseClick: function() {
                    n.ViewManager.getInstance().qcloseViewa({
                        View: h
                    }), r.default.qisWXChannela() && (c.qUserDataMgra.getInstance().qyouziMoreGameShowTimesa < 2 || this.qisShowYouzia) && (c.qUserDataMgra.getInstance().qyouziMoreGameShowTimesa++, c.qUserDataMgra.getInstance().qisShowInterAda = !1)
                },
                onFreeClick: function() {
                    o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), this.cbk && this.cbk(1), this.onCloseClick()
                },
                onVideoClick: function() {
                    var e = this;
                    this.node.getComponent("shareUtils").doShare({
                        success: function() {
                            e.cbk && e.cbk(3), e.onCloseClick()
                        }
                    })
                }
            }));
        t.ViewLose = q;
        var h = q;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_BuildingInfo: "mg_BuildingInfo",
        mg_RemoteConfigManager: "mg_RemoteConfigManager",
        mg_SdkCommon: "mg_SdkCommon",
        mg_Tools: "mg_Tools",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewBase: "mg_ViewBase",
        mg_ViewManager: "mg_ViewManager",
        mg_WeChatGame: "mg_WeChatGame"
    }],
    mg_ViewLottery: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "861b5cqlftGIKlbNl5V86LU", "mg_ViewLottery");
        var i = e("mg_ViewBase"),
            n = e("mg_ViewManager"),
            o = e("mg_UserDataManager"),
            s = e("mg_AudioManager"),
            r = e("mg_ConfigDataManager"),
            c = (e("mg_SdkCommon"), e("mg_Tools")),
            l = (e("mg_WeChatGame"), e("mg_GainMoneyAnim")),
            q = e("mg_ViewHome"),
            h = e("mg_ResourceBar"),
            g = e("mg_ViewGain"),
            u = e("mg_ViewUnlock"),
            d = e("mg_LeuokBi"),
            m = e("mg_RemoteConfigManager"),
            p = cc._decorator,
            f = (p.qccclassa, p.property, cc.Class({
                extends: i.ViewBase,
                properties: {
                    qlotteryNuma: cc.Label,
                    qbtnVideoa: cc.Button,
                    qresourceBara: h.default,
                    qvideoa: cc.Node,
                    free: cc.Node
                },
                statics: {
                    qprafabPatha: "prefab/home/mg_ViewLottery"
                },
                ctor: function() {
                    var e = this;
                    e.qisFullScreena = !1, e.qnodeBasea = null, e.qpanNodea = null, e.qeffectNodea = null, e.qcloseCbka = null, e.qlotteryDataLista = []
                },
                onOpen: function(e) {
                    e && (this.qcloseCbka = e.qcloseCbka), this.qnodeBasea = this.node.getChildByName("mid"), this.qresourceBara.node.active = !0, this.qgenerateLotteryDataa(), this.qrefresha(), !o.qUserDataMgra.getInstance().data.qisShowFreeLotterya && m.default.getInstance().qfreeLotterya ? (this.free.active = !0, this.qvideoa.active = !1) : (this.qvideoa.active = !0, this.free.active = !1)
                },
                qgenerateLotteryDataa: function() {
                    for (var e = o.qUserDataMgra.getInstance().qgetLotteryDataa(), a = this.qnodeBasea.getChildByName("item"), t = 0; t < e.length; t++) {
                        var i = e[t],
                            n = c.Tools.qsplitToNumLista(i.reward, "x"),
                            s = cc.instantiate(a);
                        s.active = !0;
                        var r = {
                            id: i.id,
                            type: n[0],
                            num: n[1],
                            icon: i.icon,
                            node: s
                        };
                        1 == r.type ? (s.getChildByName("chip").active = !1, s.getChildByName("num").active = !0, s.getChildByName("num").getComponent(cc.Label).string = c.Tools.qnumberFormata(r.num)) : (s.getChildByName("chip").active = !0, s.getChildByName("num").active = !1, s.getChildByName("chip").getChildByName("num").getComponent(cc.Label).string = "x" + c.Tools.qnumberFormata(r.num)), this.qlotteryDataLista.push(r)
                    }
                    this.qloadItemIcona(0)
                },
                qloadItemIcona: function(e) {
                    if (!(e >= this.qlotteryDataLista.length)) {
                        var a = this;
                        cc.loader.loadRes("img/lottery/" + this.qlotteryDataLista[e].icon, cc.SpriteFrame, function(t, i) {
                            if (a && a.qlotteryDataLista) return t ? (console.log(t), void a.qloadItemIcona(e)) : (a.qlotteryDataLista[e].node.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = i, void a.qloadItemIcona(e + 1))
                        })
                    }
                },
                qrefresha: function() {
                    var e = r.default.getInstance().qinitMapa.TURNTABLE_NUMBER.Value,
                        a = o.qUserDataMgra.getInstance().qgetLotteryNuma();
                    a < e ? (this.qlotteryNuma.string = "L\u01b0\u1ee3t:" + (e - a) + "/" + e, this.qbtnVideoa.interactable = !0) : (this.qlotteryNuma.string = "L\u01b0\u1ee3t:0/" + e, this.qbtnVideoa.interactable = !1), c.Tools.qapplyCabinFontToLabela(this.qlotteryNuma), this.qresourceBara.qrefreshResourcea(), this.qlotteryDataLista.length || this.qgenerateLotteryDataa();
                    var t = 0,
                        i = 360 / this.qlotteryDataLista.length,
                        n = 1.5 * i;
                    for (1 == this.qlotteryDataLista.length && (n = 0), this.qpanNodea = this.qnodeBasea.getChildByName("qpan" + this.qlotteryDataLista.length + "a"), this.qeffectNodea = this.qnodeBasea.getChildByName("qeffect" + this.qlotteryDataLista.length + "a"), t = 0; t < 5; t++) {
                        var s = t + 1;
                        this.qnodeBasea.getChildByName("qpan" + s + "a").active = !1, this.qnodeBasea.getChildByName("qeffect" + s + "a").active = !1, t < this.qlotteryDataLista.length && (this.qlotteryDataLista[t].node.setRotation(n), this.qlotteryDataLista[t].node.parent = this.qpanNodea, n += i)
                    }
                    this.qpanNodea.active = !0
                },
                qgetRandomAnglea: function(e) {
                    return 360 - this.qlotteryDataLista[e].node.getRotation() + 360 * (Math.floor(2 * Math.random()) + 3)
                },
                qgetRandomIndexa: function() {
                    var e = o.qUserDataMgra.getInstance().data.qlotteryNuma;
                    if (0 == e || 2 == e) {
                        for (var a = [], t = 0; t < this.qlotteryDataLista.length; t++) "600001" == this.qlotteryDataLista[t].id && a.push(t);
                        return a[Math.floor(c.Tools.qgetRandomArbitrarya(0, a.length))]
                    }
                    if (1 == e || 3 == e) {
                        for (a = [], t = 0; t < this.qlotteryDataLista.length; t++) "600002" == this.qlotteryDataLista[t].id && a.push(t);
                        return a[Math.floor(c.Tools.qgetRandomArbitrarya(0, a.length))]
                    }
                    return 0
                },
                onCloseClick: function() {
                    s.default.getInstance().play("yx_" + s.qAudioSourceNamea.Click), this.qcloseCbka && this.qcloseCbka(), n.ViewManager.getInstance().qcloseViewa({
                        View: v
                    })
                },
                qstartLotterya: function() {
                    var e = this,
                        a = e.qgetRandomIndexa(),
                        t = e.qgetRandomAnglea(a);
                    n.ViewManager.getInstance().qturnOffScreenClicka(), e.qpanNodea.runAction(cc.sequence(cc.rotateBy(3, t).easing(cc.easeCubicActionOut()), cc.callFunc(function() {
                        e.qeffectNodea.active = !0;
                        var t = e.qlotteryDataLista[a].type,
                            i = e.qlotteryDataLista[a].num;
                        e.scheduleOnce(function() {
                            n.ViewManager.getInstance().qopenViewa({
                                View: g.ViewGain,
                                qCustomDataa: {
                                    qgainTypea: t,
                                    count: i,
                                    cbk: function() {
                                        var s;
                                        1 == t ? (o.qUserDataMgra.getInstance().data.qmoneya += i, s = e.qresourceBara.node.getChildByName("qmoneya").getChildByName("icon")) : (o.qUserDataMgra.getInstance().data.qgunChipa += i, s = e.qresourceBara.node.getChildByName("chip").getChildByName("icon")), o.qUserDataMgra.getInstance().data.qlotteryNuma++, d.LeuokBi.qsafeCalla("action", {
                                            qactionTypea: 4,
                                            qactionNumbera: o.qUserDataMgra.getInstance().data.qlotteryNuma
                                        }), e.qlotteryDataLista[a].node.destroy(), e.qlotteryDataLista.splice(a, 1), e.qlotteryDataLista.length || (o.qUserDataMgra.getInstance().data.qlotteryNuma = 0), o.qUserDataMgra.getInstance().data.qlotteryDataa.splice(a, 1);
                                        var r = e.node.getComponent(l.default),
                                            c = i > 15 ? 15 : i;
                                        r.qplayGainMoneya(c, null, s, t), 3 == t ? n.ViewManager.getInstance().qopenViewa({
                                            View: u.ViewUnlock,
                                            qCustomDataa: {
                                                cbk: function() {
                                                    o.qUserDataMgra.getInstance().qsaveUserDataa(), e.qpanNodea.setRotation(0), e.qeffectNodea.active = !1, e.qrefresha(), n.ViewManager.getInstance().qsendViewMessagea(q.ViewHome, {
                                                        type: "qrefresha"
                                                    }), n.ViewManager.getInstance().qsendViewMessagea(q.ViewHome, {
                                                        type: "refreshLotteryHot"
                                                    }), n.ViewManager.getInstance().qturnOnScreenClicka()
                                                }
                                            }
                                        }) : (o.qUserDataMgra.getInstance().qsaveUserDataa(), e.qpanNodea.setRotation(0), e.qeffectNodea.active = !1, e.qrefresha(), n.ViewManager.getInstance().qsendViewMessagea(q.ViewHome, {
                                            type: "qrefresha"
                                        }), n.ViewManager.getInstance().qsendViewMessagea(q.ViewHome, {
                                            type: "refreshLotteryHot"
                                        }), n.ViewManager.getInstance().qturnOnScreenClicka())
                                    }
                                }
                            })
                        }, .5)
                    })))
                },
                onVideoClick: function() {
                    var e = this;
                    cc.game4399Mgr.showVideoAD(function() {
                        e.qstartLotterya()
                    }, function() {})
                }
            }));
        t.ViewLottery = f;
        var v = f;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_ConfigDataManager: "mg_ConfigDataManager",
        mg_GainMoneyAnim: "mg_GainMoneyAnim",
        mg_LeuokBi: "mg_LeuokBi",
        mg_RemoteConfigManager: "mg_RemoteConfigManager",
        mg_ResourceBar: "mg_ResourceBar",
        mg_SdkCommon: "mg_SdkCommon",
        mg_Tools: "mg_Tools",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewBase: "mg_ViewBase",
        mg_ViewGain: "mg_ViewGain",
        mg_ViewHome: "mg_ViewHome",
        mg_ViewManager: "mg_ViewManager",
        mg_ViewUnlock: "mg_ViewUnlock",
        mg_WeChatGame: "mg_WeChatGame"
    }],
    mg_ViewManager: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "21418Er0kRIErYFWkpmv91e", "mg_ViewManager");
        var i = e("mg_TouchBlock"),
            n = e("mg_UIDepth"),
            o = e("mg_NumberGrowUpAnim"),
            s = cc.Class({
                extends: cc.Component,
                properties: {},
                statics: {
                    getInstance: function() {
                        if (null == this.instance) {
                            var e = new cc.Node("ViewManager");
                            cc.game.addPersistRootNode(e), this.instance = e.addComponent(this), this.instance.init()
                        }
                        return this.instance
                    },
                    instance: null
                },
                ctor: function() {
                    var e = this;
                    e.qviewLista = null, e.quiRoota = null, e.qtipRoota = null, e.qtouchBlockNodea = null, e.qtestBannerStatea = null
                },
                init: function() {
                    this.qviewLista = [], this.quiRoota = cc.find("Canvas/UIRoot"), this.quiRoota.zIndex = n.UIDepth.UIRoot, this.qtipRoota = cc.find("Canvas/qTipRoota"), this.qtipRoota.zIndex = n.UIDepth.qTipRoota, this.qinitTouchBlockViewa()
                },
                qinitTouchBlockViewa: function() {
                    var e = this;
                    cc.loader.loadRes("prefab/common/mg_TouchBlock", cc.Prefab, function(a, t) {
                        var i = cc.instantiate(t);
                        i.parent = cc.find("Canvas"), i.setPosition(cc.Vec2.ZERO), i.zIndex = n.UIDepth.TouchBlock, i.active = !1, e.qtouchBlockNodea = i
                    })
                },
                qturnOffScreenClicka: function(e, a) {
                    void 0 === e && (e = !1), void 0 === a && (a = ""), null != this.qtouchBlockNodea && (this.qtouchBlockNodea.active = !0, this.qtouchBlockNodea.getComponent(i.default).showLoading(e), this.qtouchBlockNodea.getComponent(i.default).qshowDesca(a))
                },
                qturnOnScreenClicka: function() {
                    null != this.qtouchBlockNodea && (this.qtouchBlockNodea.active = !1)
                },
                qrefreshTurnOffScreenClickTipa: function(e) {
                    null != this.qtouchBlockNodea && this.qtouchBlockNodea.getComponent(i.default).qshowDesca(e)
                },
                qshowViewa: function(e, a) {
                    for (var t = e.getComponent(a.View), i = 0, n = this.qviewLista; i < n.length; i++) {
                        var o = n[i];
                        o.isPaused || (o.pause(), console.log(o.name + " onPause")), t.qisFullScreena && (o.isHide || (o.hide(), console.log(o.name + " onHide")))
                    }
                    e.parent = this.quiRoota, e.setPosition(cc.Vec2.ZERO), t.qisFullScreena ? t.qshowBlackBga(!1) : t.qshowBlackBga(!0), console.log(t.name + " open"), t.onOpen(a.qCustomDataa), console.log(t.name + " onOpen"), t.qinstanceIda = this.qviewLista.length + 1, this.qviewLista.push(t)
                },
                qopenViewa: function(e) {
                    var a = this;
                    this.qturnOffScreenClicka(!0);
                    for (var t = 0, i = a.qviewLista; t < i.length; t++) {
                        var n = i[t];
                        n.isPaused || (n.pause(), console.log(n.name + " onPause"))
                    }
                    console.log("loadRes:" + e.View.qprafabPatha), cc.loader.loadRes(e.View.qprafabPatha, cc.Prefab, function(t, i) {
                        if (t) return console.error(t), void a.qopenViewa(e);
                        for (var n = cc.instantiate(i), o = n.getComponent(e.View), s = 0, r = a.qviewLista; s < r.length; s++) {
                            var c = r[s];
                            o.qisFullScreena && (c.isHide || (c.hide(), console.log(c.name + " onHide")))
                        }
                        var l = null;
                        cc.loader.loadRes("prefab/common/mg_BlackBg", cc.Prefab, function(t, i) {
                            t ? console.error(t) : (l = cc.instantiate(i), a.quiRoota.addChild(l), l.active = !1), n.parent = a.quiRoota, n.setPosition(cc.Vec2.ZERO), o.qisFullScreena ? (l && l.destroy(), o.qshowBlackBga(!1)) : 0 == e.qPlayAnima ? (l && l.destroy(), o.qshowBlackBga(!0)) : (l && (l.active = !0), o.qplayOpenAnima(function() {
                                o.qshowBlackBga(!0, function() {
                                    l && l.destroy()
                                })
                            })), console.log(o.name + " open"), o.onOpen(e.qCustomDataa), console.log(o.name + " onOpen"), a.qturnOnScreenClicka(), o.qinstanceIda = a.qviewLista.length + 1, a.qviewLista.push(o), e.qFinishedCbka && e.qFinishedCbka()
                        })
                    })
                },
                qcloseViewa: function(e) {
                    for (var a = function(a) {
                            var i = t.qviewLista[a];
                            if (i instanceof e.View) return i.qisFullScreena || 0 == e.qPlayAnima ? (console.log(i.name + " onClose"), i.close()) : (i.qshowBlackBga(!1), i.qplayCloseAnima(function() {
                                console.log(i.name + " onClose"), i.close()
                            })), t.qviewLista.splice(a, 1), "break"
                        }, t = this, i = this.qviewLista.length - 1; i >= 0 && "break" !== a(i); i--);
                    for (i = this.qviewLista.length - 1; i >= 0; i--)
                        if ((n = this.qviewLista[i]).isPaused) {
                            n.resume(), console.log(n.name + " onResume");
                            break
                        } for (i = this.qviewLista.length - 1; i >= 0; i--) {
                        var n;
                        if ((n = this.qviewLista[i]).isHide && (n.show(), console.log(n.name + " onShow")), n.qisFullScreena) break
                    }
                },
                qsendViewMessagea: function(e, a) {
                    for (var t = 0, i = this.qviewLista; t < i.length; t++) {
                        var n = i[t];
                        if (n instanceof e && n.onReceiveMessage) return n.onReceiveMessage(a), !0
                    }
                    return !1
                },
                qgetViewa: function(e) {
                    for (var a = 0, t = this.qviewLista; a < t.length; a++) {
                        var i = t[a];
                        if (i instanceof e) return i
                    }
                    return null
                },
                qshowTipa: function(e, a, t, i) {
                    void 0 === a && (a = 2), void 0 === t && (t = !0), void 0 === i && (i = 0);
                    var n = this;
                    cc.loader.loadRes("prefab/common/mg_Tip", cc.Prefab, function(o, s) {
                        if (o) console.log(o);
                        else {
                            var r = cc.instantiate(s);
                            r.getChildByName("qrlba").getComponent(cc.RichText).string = t ? "<color=#F70000>" + e + "</color>" : e, r.parent = n.qtipRoota, r.setPosition(0, i), r.setScale(.2);
                            var c = cc.sequence(cc.scaleTo(.3, 1, 1).easing(cc.easeBackOut()), cc.delayTime(a), cc.fadeOut(.3), cc.callFunc(function() {
                                r.destroy(), cc.loader.releaseRes("prefab/common/mg_Tip")
                            }));
                            r.runAction(c)
                        }
                    })
                },
                qshowPowerTipa: function(e, a) {
                    var t = this;
                    if (e != a) {
                        var i = this;
                        cc.loader.loadRes("prefab/common/mg_PowerTip", cc.Prefab, function(n, s) {
                            if (n) console.log(n);
                            else {
                                var r = cc.instantiate(s);
                                r.parent = i.qtipRoota, r.setPosition(0, 110), e > a && r.getChildByName("sp").setRotation(180), r.getChildByName("qpowera").getComponent(o.default).qplayAnima(e, a, 1e3), t.scheduleOnce(function() {
                                    r.destroy()
                                }, 1.5)
                            }
                        })
                    }
                },
                qshowEnergyTipa: function(e) {
                    var a = this;
                    cc.loader.loadRes("prefab/common/mg_EnergyTip", cc.Prefab, function(t, i) {
                        if (t) console.log(t);
                        else {
                            var n = cc.instantiate(i);
                            n.parent = a.qtipRoota, n.setPosition(0, -210), n.getChildByName("qtxta").getComponent(cc.Label).string = e > 0 ? "+" : "-", n.getChildByName("qenergya").getComponent(cc.Label).string = Math.abs(e).toString(), n.setScale(.2);
                            var o = cc.sequence(cc.scaleTo(.3, 1, 1).easing(cc.easeBackOut()), cc.delayTime(1), cc.fadeOut(.3), cc.callFunc(function() {
                                n.destroy(), cc.loader.releaseRes("prefab/common/mg_EnergyTip")
                            }));
                            n.runAction(o)
                        }
                    })
                }
            });
        t.ViewManager = s, cc._RF.pop()
    }, {
        mg_NumberGrowUpAnim: "mg_NumberGrowUpAnim",
        mg_TouchBlock: "mg_TouchBlock",
        mg_UIDepth: "mg_UIDepth"
    }],
    mg_ViewMap: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "509f5YQ5k1E36GShplhSKNC", "mg_ViewMap");
        var i = e("mg_ViewBase"),
            n = e("mg_ViewBattle"),
            o = e("mg_ViewManager"),
            s = e("mg_Tools"),
            r = e("mg_AudioManager"),
            c = e("mg_ViewHome"),
            l = e("mg_UserDataManager"),
            q = e("mg_MapItem"),
            h = e("mg_ConfigDataManager"),
            g = e("mg_ScreenAdapter"),
            u = (e("mg_WeChatGame"), e("mg_LeuokBi")),
            d = cc._decorator,
            m = (d.qccclassa, d.property, cc.Class({
                extends: i.ViewBase,
                properties: {
                    qmapNodea: cc.Node,
                    qbtnClosea: cc.Node,
                    qloadingNodea: cc.Node,
                    qloadingTxta: cc.Label,
                    qtipNodea: cc.Node,
                    qtipTxta: cc.Label
                },
                statics: {
                    qprafabPatha: "prefab/home/mg_ViewMap"
                },
                ctor: function() {
                    var e = this;
                    e.qisFullScreena = !0, e.qviewBattleNodea = null, e.qisCanClicka = !0, e.qbeginStageIndexa = 0, e.mapId = 0
                },
                onOpen: function(e) {
                    s.Tools.qisNullOrUndefineda(e) || s.Tools.qisNullOrUndefineda(e.startBattle) || 1 != e.startBattle ? this.qsetIsCanClicka(!0) : (this.qLoadBattlea(e.qweaponIda, e.qsecondWeaponIda), this.qsetIsCanClicka(!1));
                    var a = this;
                    this.qrefreshMapa(function() {
                        a.qrefresha(!0)
                    }), g.ScreenAdapter.getInstance().qfitBottoma(this.node.getChildByName("bottom"))
                },
                qrefreshMapa: function(e, a) {
                    void 0 === a && (a = 0);
                    var t = this;
                    a || (a = Math.floor((l.qUserDataMgra.getInstance().data.stageID - 1) / 10) % 10 + 1), this.mapId = a, cc.loader.loadRes("prefab/home/map/mg_ViewMap" + this.mapId, cc.Prefab, function(a, i) {
                        if (a) return console.log(a), void t.qrefreshMapa(e, 1);
                        var n = cc.instantiate(i);
                        t && t.qmapNodea && n && t.qmapNodea.addChild(n), e && e()
                    })
                },
                qsetIsCanClicka: function(e) {
                    this.qbtnClosea.active = !!e, this.qisCanClicka = e
                },
                qrefresha: function(e) {
                    if (this && this.qmapNodea) {
                        var a, t, i, n, o, s, r = (l.qUserDataMgra.getInstance().data.stageID - 1) % 10 + 1;
                        this.qbeginStageIndexa = l.qUserDataMgra.getInstance().data.stageID - r;
                        for (var c = this.qbeginStageIndexa + 1; c <= this.qbeginStageIndexa + 10; c++)(i = (t = this.qmapNodea.getChildByName("ViewMap" + this.mapId).getChildByName("qstage" + (c - this.qbeginStageIndexa) + "a")).getChildByName("MapItem")) || ((i = cc.instantiate(this.qmapNodea.getChildByName("ViewMap" + this.mapId).getChildByName("qstage1a").getChildByName("MapItem"))).parent = t), a = i.getComponent(q.default), n = h.default.getInstance().qstageIsBossa(c), o = 0, c == l.qUserDataMgra.getInstance().data.qcurStageIDa ? a.setType(q.qMapItemTypea.qCurrenta, c, n, o) : c <= l.qUserDataMgra.getInstance().data.stageID ? a.setType(q.qMapItemTypea.qCanFighta, c, n, o) : a.setType(q.qMapItemTypea.Unlock, c, n, o), e && ((s = new cc.Component.EventHandler).target = this.node, s.component = "ViewMap", s.handler = "onClickStage", s.customEventData = c.toString(), t.getComponent(cc.Button).clickEvents.push(s))
                    }
                },
                qLoadBattlea: function(e, a) {
                    this.qshowLoadBattlea(0);
                    var t = this;
                    cc.loader.loadRes("prefab/battle/mg_ViewBattle", cc.Prefab, function(i, o) {
                        if (i) return console.error(i), void t.qLoadBattlea(e, a);
                        t.qviewBattleNodea = cc.instantiate(o), t.qviewBattleNodea.getComponent(n.ViewBattle).qpreLoada(e, a, l.qUserDataMgra.getInstance().data.qcurStageIDa, function(e) {
                            t.qshowLoadBattlea(e)
                        }, function() {
                            t.qEnterBattlea()
                        })
                    }), this.qshowTipa()
                },
                qshowLoadBattlea: function(e) {
                    this.qloadingNodea.active = !0, this.qloadingTxta.string = "Đang tải..." + (100 * e).toFixed(0) + "%"
                },
                qshowTipa: function() {
                    this.qtipNodea.active = !0;
                    var e = Math.floor(s.Tools.qgetRandomArbitrarya(0, h.default.getInstance().qloadingTipLista.length));
                    s.Tools.qapplyCabinFontToLabela(this.qtipTxta), this.qtipTxta.string = h.default.getInstance().qloadingTipLista[e].string
                },
                qEnterBattlea: function() {
                    this.qviewBattleNodea && (o.ViewManager.getInstance().qcloseViewa({
                        View: p
                    }), o.ViewManager.getInstance().qshowViewa(this.qviewBattleNodea, {
                        View: n.ViewBattle
                    }), u.LeuokBi.qsafeCalla("qappOncea", {
                        qactionNumbera: 6
                    }))
                },
                onCloseClick: function() {
                    this.qisCanClicka && (r.default.getInstance().play("yx_" + r.qAudioSourceNamea.Click), o.ViewManager.getInstance().qcloseViewa({
                        View: p
                    }), o.ViewManager.getInstance().qopenViewa({
                        View: c.ViewHome
                    }))
                },
                qgetCurStageNodePosa: function() {
                    var e = (l.qUserDataMgra.getInstance().data.qcurStageIDa - 1) % 10 + 1;
                    return this.qmapNodea.getChildByName("ViewMap" + this.mapId).getChildByName("qstagea" + e).getPosition()
                },
                onClickStage: function(e, a) {
                    if (this.qisCanClicka) {
                        var t = parseInt(a);
                        console.log("onClickStage:" + t), t > l.qUserDataMgra.getInstance().data.stageID || (r.default.getInstance().play("yx_" + r.qAudioSourceNamea.Click), l.qUserDataMgra.getInstance().data.qcurStageIDa = t, this.qrefresha(!1), this.scheduleOnce(function() {
                            o.ViewManager.getInstance().qcloseViewa({
                                View: p
                            }), o.ViewManager.getInstance().qopenViewa({
                                View: c.ViewHome
                            })
                        }, .1))
                    }
                },
                onClose: function() {}
            }));
        t.ViewMap = m;
        var p = m;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_ConfigDataManager: "mg_ConfigDataManager",
        mg_LeuokBi: "mg_LeuokBi",
        mg_MapItem: "mg_MapItem",
        mg_ScreenAdapter: "mg_ScreenAdapter",
        mg_Tools: "mg_Tools",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewBase: "mg_ViewBase",
        mg_ViewBattle: "mg_ViewBattle",
        mg_ViewHome: "mg_ViewHome",
        mg_ViewManager: "mg_ViewManager",
        mg_WeChatGame: "mg_WeChatGame"
    }],
    mg_ViewMaxAmmo: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "a9d102lmOBGzq2wQu5Nb1LF", "mg_ViewMaxAmmo");
        var i = e("mg_ViewBase"),
            n = e("mg_ViewManager"),
            o = e("mg_AudioManager"),
            s = (e("mg_ConfigDataManager"), e("mg_UserDataManager")),
            r = (e("mg_WeChatGame"), e("mg_SdkCommon"), e("mg_Tools"), e("mg_RemoteConfigManager")),
            c = (e("mg_BuildingInfo"), cc._decorator),
            l = (c.qccclassa, c.property, cc.Class({
                extends: i.ViewBase,
                properties: {
                    qbtnClosea: cc.Node
                },
                statics: {
                    qprafabPatha: "prefab/battle/mg_ViewMaxAmmo"
                },
                ctor: function() {
                    this.qisFullScreena = !1, this.cbk = null
                },
                onOpen: function(e) {
                    this.cbk = e.cbk;
                    this.qbtnClosea.active = !0
                },
                onVideoClick: function() {
                    var e = this;
                    this.node.getComponent("shareUtils").doShare({
                        success: function() {
                            e.cbk && e.cbk(), e.onCloseClick()
                        }
                    })
                },
                onCloseClick: function() {
                    o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), n.ViewManager.getInstance().qcloseViewa({
                        View: q
                    })
                },
                onClose: function() {
                    !s.qUserDataMgra.getInstance().qisGuangdonga && r.default.getInstance().qdialogBannera
                }
            }));
        t.ViewMaxAmmo = l;
        var q = l;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_BuildingInfo: "mg_BuildingInfo",
        mg_ConfigDataManager: "mg_ConfigDataManager",
        mg_RemoteConfigManager: "mg_RemoteConfigManager",
        mg_SdkCommon: "mg_SdkCommon",
        mg_Tools: "mg_Tools",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewBase: "mg_ViewBase",
        mg_ViewManager: "mg_ViewManager",
        mg_WeChatGame: "mg_WeChatGame"
    }],
    mg_ViewNewEnemy: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "2b792lLqmZEGpkvivAdcjLY", "mg_ViewNewEnemy");
        var i = e("mg_ViewBase"),
            n = e("mg_ViewManager"),
            o = e("mg_AudioManager"),
            s = e("mg_ConfigDataManager"),
            T = e("mg_Tools"),
            r = cc._decorator,
            c = (r.qccclassa, r.property, cc.Class({
                extends: i.ViewBase,
                properties: {
                    qstarNodea: cc.Node,
                    qnpcNamea: cc.Label,
                    qnpca: cc.Node,
                    qnpcDesca: cc.Label,
                    qloadinga: cc.Node
                },
                statics: {
                    qprafabPatha: "prefab/battle/mg_ViewNewEnemy"
                },
                ctor: function() {
                    this.qisFullScreena = !1, this.cbk = null
                },
                onOpen: function(e) {
                    this.cbk = e.cbk;
                    var a = s.default.getInstance().qnpcAppearAvatarMapa[e.avatar];
                    this.loadSpine(a.avatar), this.qnpcNamea.string = a.name, this.qnpcDesca.string = "\u0110\u1eb7c \u0111i\u1ec3m: " + a.qdescribea, T.Tools.qapplyCabinFontToLabela(this.qnpcNamea), T.Tools.qapplyCabinFontToLabela(this.qnpcDesca), this.qnpca.setScale(a.ratio), this.qstarNodea.width = 210 * a.star / 5, o.default.getInstance().play("yx_" + o.qAudioSourceNamea.qBossWarna)
                },
                loadSpine: function(e) {
                    var a = this;
                    cc.loader.loadRes("spine/" + e + "/" + e, sp.SkeletonData, function(t, i) {
                        if (t) return console.error(t), void a.loadSpine(e);
                        var n = a.qnpca.getChildByName("spine");
                        n.active = !0, n.getComponent(sp.Skeleton).skeletonData = i, n.getComponent(sp.Skeleton).setAnimation(0, "daiji_zhan", !0), a.qloadinga.active = !1, a.scheduleOnce(function() {
                            a.onCloseClick()
                        }, 3)
                    })
                },
                onCloseClick: function() {
                    o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), n.ViewManager.getInstance().qcloseViewa({
                        View: l
                    }), this.cbk && this.cbk()
                }
            }));
        t.ViewNewEnemy = c;
        var l = c;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_ConfigDataManager: "mg_ConfigDataManager",
        mg_Tools: "mg_Tools",
        mg_ViewBase: "mg_ViewBase",
        mg_ViewManager: "mg_ViewManager"
    }],
    mg_ViewReborn: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "6a379FBmmRO6Yv0KinYunzM", "mg_ViewReborn");
        var i = e("mg_ViewBase"),
            n = e("mg_ViewManager"),
            o = e("mg_AudioManager"),
            T = e("mg_Tools"),
            s = (e("mg_SdkCommon"), e("mg_WeChatGame"), e("mg_BuildingInfo"), e("mg_RemoteConfigManager"), e("mg_UserDataManager"), cc._decorator),
            r = (s.qccclassa, s.property, cc.Class({
                extends: i.ViewBase,
                properties: {
                    qticka: cc.Label,
                    friendSpr: cc.Sprite
                },
                statics: {
                    qprafabPatha: "prefab/battle/ui/mg_ViewReborn"
                },
                ctor: function() {
                    var e = this;
                    e.qisFullScreena = !1, e.qtickCounta = 5, e.cbk = null, e.qisPausea = !1
                },
                onLoad: function() {},
                resizeSharedCanvas: function(e, a) {
                    qg
                },
                onOpen: function(e) {
                    var a = this;
                    T.Tools.qapplyCabinFontToNodea(this.node), this.node.getChildByName("NativeAd").active = !0, this.cbk = e.cbk, this.qticka.string = this.qtickCounta + "s", this.schedule(function() {
                        a.qisPausea || (o.default.getInstance().play("yx_ui_daojishi"), a.qtickCounta--, a.qtickCounta <= 0 ? (a.onCloseClick(), a.cbk && a.cbk(!1)) : a.qticka.string = a.qtickCounta + "s")
                    }, 1)
                },
                onCloseClick: function() {
                    this.node.getChildByName("NativeAd").active = !1, n.ViewManager.getInstance().qcloseViewa({
                        View: c
                    }), this.unscheduleAllCallbacks()
                },
                onclickCanelBack: function() {
                    this.cbk && this.cbk(!1), this.onCloseClick()
                },
                onVideoClick: function() {
                    var e = this;
                    this.qisPausea = !0, o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click);
                    var a = this;
                    cc.game4399Mgr.showVideoAD(function() {
                        a.cbk && a.cbk(!0), a.onCloseClick()
                    }, function() {
                        e.qisPausea = !1
                    })
                },
                updateRankList: function() {
                    if (qg && this.friendTexture) {
                        var e = qg.getOpenDataContext().canvas;
                        this.friendTexture.initWithElement(e), this.friendTexture.handleLoadedTexture(), this.friendSpriteFrame.setTexture(this.friendTexture), this.friendSpr.spriteFrame = this.friendSpriteFrame
                    }
                },
                update: function(e) {},
                onClose: function() {}
            }));
        t.ViewReborn = r;
        var c = r;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_BuildingInfo: "mg_BuildingInfo",
        mg_RemoteConfigManager: "mg_RemoteConfigManager",
        mg_SdkCommon: "mg_SdkCommon",
        mg_Tools: "mg_Tools",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewBase: "mg_ViewBase",
        mg_ViewManager: "mg_ViewManager",
        mg_WeChatGame: "mg_WeChatGame"
    }],
    mg_ViewShield: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "7f8462OOGBI8pX2y49hYD4a", "mg_ViewShield");
        var i = e("mg_ViewBase"),
            n = e("mg_ViewManager"),
            o = e("mg_AudioManager"),
            s = (e("mg_WeChatGame"), e("mg_SdkCommon"), cc._decorator),
            r = (s.qccclassa, s.property, cc.Class({
                extends: i.ViewBase,
                properties: {
                    qbtnClosea: cc.Node,
                    qvideoa: cc.Node,
                    free: cc.Node
                },
                statics: {
                    qprafabPatha: "prefab/battle/mg_ViewShield"
                },
                ctor: function() {
                    this.qisFullScreena = !1, this.cbk = null
                },
                onOpen: function(e) {
                    this.cbk = e.cbk, e.isFree ? (this.qvideoa.active = !1, this.free.active = !0) : (this.qvideoa.active = !0, this.free.active = !1)
                },
                onUseClick: function() {
                    if (o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), this.qvideoa.active) {
                        var e = this;
                        this.node.getComponent("shareUtils").doShare({
                            success: function() {
                                e.cbk && e.cbk(!0), n.ViewManager.getInstance().qcloseViewa({
                                    View: c
                                })
                            }
                        })
                    } else this.cbk && this.cbk(!0), n.ViewManager.getInstance().qcloseViewa({
                        View: c
                    })
                },
                onCloseClick: function() {
                    this.cbk && this.cbk(!1), o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), n.ViewManager.getInstance().qcloseViewa({
                        View: c
                    })
                }
            }));
        t.ViewShield = r;
        var c = r;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_SdkCommon: "mg_SdkCommon",
        mg_ViewBase: "mg_ViewBase",
        mg_ViewManager: "mg_ViewManager",
        mg_WeChatGame: "mg_WeChatGame"
    }],
    mg_ViewSign: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "ae0d6NrcDhAG48RQQ/AjEtR", "mg_ViewSign");
        var i = e("mg_ViewBase"),
            n = e("mg_ViewManager"),
            o = e("mg_AudioManager"),
            s = (e("mg_SdkCommon"), e("mg_WeChatGame"), e("mg_UserDataManager")),
            r = e("mg_ConfigDataManager"),
            c = e("mg_Tools"),
            l = cc._decorator,
            q = (l.qccclassa, l.property, cc.Class({
                extends: i.ViewBase,
                properties: {
                    btnFreeGet: cc.Node,
                    qbtnAlreadya: cc.Node,
                    qbtnVideoa: cc.Node,
                    ndClose: cc.Node
                },
                statics: {
                    qprafabPatha: "prefab/battle/mg_ViewSign"
                },
                ctor: function() {
                    var e = this;
                    e.qisFullScreena = !1, e.qrewardTypea = 0, e.qrewardNuma = 0, e.cbk = null
                },
                onOpen: function(e) {
                    this.cbk = e.cbk;
                    var a = s.qUserDataMgra.getInstance().qisCanSigna();
                    a ? (this.qbtnAlreadya.active = !1, this.btnFreeGet.active = !0, this.qbtnVideoa.active = !0) : (this.qbtnAlreadya.active = !0, this.btnFreeGet.active = !1, this.qbtnVideoa.active = !1), c.Tools.qapplyCabinFontToNodea(this.node);
                    var t = s.qUserDataMgra.getInstance().data.qsignNuma;
                    t >= 14 && (t = t % 7 + 7);
                    var i = 0;
                    t >= 7 && (i = 7);
                    for (var n = null, o = null, l = null, q = ["Ng\u00e0y 1", "Ng\u00e0y 2", "Ng\u00e0y 3", "Ng\u00e0y 4", "Ng\u00e0y 5", "Ng\u00e0y 6", "Ng\u00e0y 7"], h = 0; h < 7; h++) {
                        var g = r.default.getInstance().qsignRewardLista[h + i];
                        (o = (n = this.node.getChildByName("qday" + (h + 1).toString() + "a")).getChildByName("item")) || ((o = cc.instantiate(this.node.getChildByName("qday1a").getChildByName("item"))).parent = n), o.getChildByName("date").getComponent(cc.Label).string = q[h], c.Tools.qapplyCabinFontToLabela(o.getChildByName("date").getComponent(cc.Label));
                        var u = c.Tools.qsplitToNumLista(g.reward, "x");
                        1 == u[0] ? (o.getChildByName("qdiamonda").active = !1, o.getChildByName("qmoneya").active = !0, l = o.getChildByName("qmoneya")) : (o.getChildByName("qdiamonda").active = !0, o.getChildByName("qmoneya").active = !1, l = o.getChildByName("qdiamonda")), o.getChildByName("num").getComponent(cc.Label).string = u[1], l.getComponent(cc.Sprite).setState(cc.Sprite.State.NORMAL), o.getChildByName("num").color = cc.color(255, 255, 255), o.getChildByName("qalreadya").active = !1, h + i < t ? (o.getChildByName("qalreadya").active = !0, l.getComponent(cc.Sprite).setState(cc.Sprite.State.GRAY), o.getChildByName("num").color = cc.color(127, 127, 127)) : h + i == t && a && (this.qrewardTypea = u[0], this.qrewardNuma = u[1])
                    }
                },
                onCloseClick: function() {
                    o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), n.ViewManager.getInstance().qcloseViewa({
                        View: h
                    })
                },
                onFreeGetClick: function() {
                    s.qUserDataMgra.getInstance().data.qsignNuma++, s.qUserDataMgra.getInstance().data.qsignDatea = c.Tools.qtimestampToTimea(c.Tools.qgetTimestampMSa()), 1 == this.qrewardTypea ? (s.qUserDataMgra.getInstance().data.qmoneya += this.qrewardNuma, this.cbk && this.cbk(this.qrewardTypea, 1)) : (s.qUserDataMgra.getInstance().data.qdiamonda += this.qrewardNuma, this.cbk && this.cbk(this.qrewardTypea, this.qrewardNuma)), s.qUserDataMgra.getInstance().qsaveUserDataa(), this.onCloseClick()
                },
                onVideoClick: function() {
                    var e = this;
                    this.node.getComponent("shareUtils").doShare({
                        success: function() {
                            s.qUserDataMgra.getInstance().data.qsignNuma++, s.qUserDataMgra.getInstance().data.qsignDatea = c.Tools.qtimestampToTimea(c.Tools.qgetTimestampMSa()), 1 == e.qrewardTypea ? (s.qUserDataMgra.getInstance().data.qmoneya += 3 * e.qrewardNuma, e.cbk && e.cbk(e.qrewardTypea, 3)) : (s.qUserDataMgra.getInstance().data.qdiamonda += 3 * e.qrewardNuma, e.cbk && e.cbk(e.qrewardTypea, 3 * e.qrewardNuma)), s.qUserDataMgra.getInstance().qsaveUserDataa(), e.onCloseClick()
                        }
                    })
                },
                onClose: function() {}
            }));
        t.ViewSign = q;
        var h = q;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_ConfigDataManager: "mg_ConfigDataManager",
        mg_SdkCommon: "mg_SdkCommon",
        mg_Tools: "mg_Tools",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewBase: "mg_ViewBase",
        mg_ViewManager: "mg_ViewManager",
        mg_WeChatGame: "mg_WeChatGame"
    }],
    mg_ViewUnlock: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "3c88bCStC1EFoUhKGBsz4pj", "mg_ViewUnlock");
        var i = e("mg_ViewBase"),
            n = e("mg_ViewManager"),
            o = e("mg_UserDataManager"),
            s = e("mg_AudioManager"),
            r = e("mg_SdkCommon"),
            T = e("mg_Tools"),
            c = cc._decorator,
            l = (c.qccclassa, c.property, cc.Class({
                extends: i.ViewBase,
                properties: {
                    qgunIcona: cc.Sprite,
                    gunBg: cc.Sprite,
                    qtitleUnlocka: cc.Node,
                    qtitleGeta: cc.Node,
                    qgunProgBga: cc.Node,
                    qgunProgCovera: cc.Node,
                    mask: cc.Node,
                    qchipProgNodea: cc.Node,
                    qchipDesca: cc.Label,
                    qchipProga: cc.Label,
                    qflasha: cc.Node,
                    qgunNamea: cc.Label,
                    qtoggleSharea: cc.Toggle,
                    qloadinga: cc.Node,
                    qbtnEquipa: cc.Node,
                    qbtnClosea: cc.Node
                },
                statics: {
                    qprafabPatha: "prefab/battle/mg_ViewUnlock"
                },
                ctor: function() {
                    var e = this;
                    e.qisFullScreena = !1, e.qgunDataa = null, e.cbk = null, e.qstartAnia = !1, e.qmaskMaxWa = 0, e.qmaskStepa = 0
                },
                onOpen: function(e) {
                    this.cbk = e.cbk, this.qgunDataa = o.qUserDataMgra.getInstance().qgetCurUnlockGuna(), this.qshowGunIcona(), this.qgunNamea.string = this.qgunDataa.qgunNamea, this.qmaskMaxWa = this.qgunProgBga.width * o.qUserDataMgra.getInstance().data.qgunChipa / this.qgunDataa.qfragmenta, this.qmaskMaxWa >= this.qgunProgBga.width && (this.qmaskMaxWa = this.qgunProgBga.width), this.qmaskStepa = this.qmaskMaxWa / .8, this.qstartAnia = !0, this.mask.width = 0, T.Tools.qapplyCabinFontToNodea(this.node)
                },
                update: function(e) {
                    if (this.qstartAnia && (this.mask.width += this.qmaskStepa * e, this.mask.width >= this.qmaskMaxWa)) {
                        this.qstartAnia = !1;
                        var a = this;
                        if (this.qmaskMaxWa >= this.qgunProgBga.width) this.scheduleOnce(function() {
                            a.qbtnEquipa.active = !0, a.qtitleUnlocka.active = !1, a.qtitleGeta.active = !0, a.qflasha.active = !0, a.qflasha.scale = 0, a.qflasha.runAction(cc.sequence(cc.scaleTo(.3, 1.2), cc.scaleTo(.1, 1))), a.qflasha.runAction(cc.sequence(cc.rotateTo(5, 90), cc.rotateTo(5, 180), cc.rotateTo(5, 270), cc.rotateTo(5, 360)).repeatForever()), a.qgunProgBga.active = !1, a.qgunProgCovera.active = !1
                        });
                        else {
                            this.qbtnClosea.active = !0, this.qchipProgNodea.active = !0;
                            var t = this.qgunDataa.qfragmenta - o.qUserDataMgra.getInstance().data.qgunChipa;
                            this.qchipDesca.string = "C\u1ea7n th\u00eam " + t, this.qchipProga.string = o.qUserDataMgra.getInstance().data.qgunChipa + "/" + this.qgunDataa.qfragmenta, T.Tools.qapplyCabinFontToLabela(this.qchipDesca), T.Tools.qapplyCabinFontToLabela(this.qchipProga), this.scheduleOnce(function() {
                                a.onCloseClick()
                            }, 5)
                        }
                    }
                },
                qshowGunIcona: function() {
                    var e = this;
                    if (this && this.qgunDataa) {
                        var a = this.qgunDataa.qGunicona;
                        console.log("qshowGunIcona:" + a), cc.loader.loadRes("img/gun/gun_" + a, cc.SpriteFrame, function(a, t) {
                            if (a) return console.log(a), void e.qshowGunIcona();
                            e && e.qgunIcona && (e.qgunIcona.spriteFrame = t, e.gunBg.spriteFrame = t, e.qloadinga.active = !1)
                        })
                    }
                },
                onEquipClick: function() {
                    if (s.default.getInstance().play("yx_" + s.qAudioSourceNamea.Click), 1 == this.qtoggleSharea.isChecked) {
                        var e = this;
                        r.SdkCommon.share(function() {
                            e.qunlockWeapona(), n.ViewManager.getInstance().qcloseViewa({
                                View: q
                            }), e.cbk && e.cbk(!0)
                        }, null, null, 107)
                    } else this.qunlockWeapona(), n.ViewManager.getInstance().qcloseViewa({
                        View: q
                    }), this.cbk && this.cbk(!0)
                },
                qunlockWeapona: function() {
                    o.qUserDataMgra.getInstance().data.qgunChipa -= this.qgunDataa.qfragmenta, o.qUserDataMgra.getInstance().qunlockWeapona(this.qgunDataa.id), o.qUserDataMgra.getInstance().qequipWeapona(this.qgunDataa.id)
                },
                onCloseClick: function() {
                    s.default.getInstance().play("yx_" + s.qAudioSourceNamea.Click), n.ViewManager.getInstance().qcloseViewa({
                        View: q
                    }), this.cbk && this.cbk(!1), this.cbk = null
                },
                onClose: function() {}
            }));
        t.ViewUnlock = l;
        var q = l;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_SdkCommon: "mg_SdkCommon",
        mg_Tools: "mg_Tools",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewBase: "mg_ViewBase",
        mg_ViewManager: "mg_ViewManager"
    }],
    mg_ViewWarn: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "580echKX/1JrZkhcPpJHMNd", "mg_ViewWarn");
        var i = e("mg_ViewBase"),
            n = e("mg_ViewManager"),
            o = e("mg_AudioManager"),
            s = (e("mg_WeChatGame"), cc._decorator),
            r = (s.qccclassa, s.property, cc.Class({
                extends: i.ViewBase,
                properties: {},
                statics: {
                    qprafabPatha: "prefab/battle/mg_ViewWarn"
                },
                ctor: function() {
                    var e = this;
                    e.qisFullScreena = !1, e.cbk = null, e.ret = !1
                },
                onOpen: function(e) {
                    this.cbk = e.cbk, o.default.getInstance().play("yx_" + o.qAudioSourceNamea.qBossWarna)
                },
                onFightClick: function() {
                    this.ret = !0, o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), n.ViewManager.getInstance().qcloseViewa({
                        View: c
                    })
                },
                onLvUpClick: function() {
                    this.ret = !1, o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), n.ViewManager.getInstance().qcloseViewa({
                        View: c
                    })
                },
                onCloseClick: function() {
                    this.cbk = null, o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), n.ViewManager.getInstance().qcloseViewa({
                        View: c
                    })
                },
                onClose: function() {
                    this.cbk && this.cbk(this.ret)
                }
            }));
        t.ViewWarn = r;
        var c = r;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_ViewBase: "mg_ViewBase",
        mg_ViewManager: "mg_ViewManager",
        mg_WeChatGame: "mg_WeChatGame"
    }],
    mg_ViewWin: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "0b0a5zX3RNNjJQlCerhLRcG", "mg_ViewWin");
        var i = e("mg_ViewBase"),
            n = e("mg_ViewManager"),
            o = e("mg_AudioManager"),
            s = e("mg_SdkCommon"),
            r = (e("mg_WeChatGame"), e("mg_Tools")),
            c = (e("mg_BuildingInfo"), e("mg_RemoteConfigManager")),
            l = e("mg_UserDataManager"),
            q = e("mg_ConfigDataManager"),
            h = e("mg_ResourceBar"),
            g = e("mg_ViewGain"),
            u = e("mg_GainMoneyAnim"),
            d = e("mg_ViewUnlock"),
            m = e("mg_Guide"),
            p = cc._decorator,
            f = (p.qccclassa, p.property, cc.Class({
                extends: i.ViewBase,
                properties: {
                    qtoggleSharea: cc.Toggle,
                    qbtnClosea: cc.Node,
                    gunBg: cc.Sprite,
                    gun: cc.Sprite,
                    mask: cc.Node,
                    qchipDesca: cc.Label,
                    qchipProga: cc.Label,
                    qresourceBara: h.default,
                    lockNode: cc.Node,
                    _lockReword: !1
                },
                statics: {
                    qprafabPatha: "prefab/battle/ui/mg_ViewWin"
                },
                ctor: function() {
                    var e = this;
                    e.qisFullScreena = !1, e.qcardArra = [], e.qrewardLista = [], e.qtotalWeighta = 0, e.qopenNuma = 0, e.qgunDataa = null, e.qisGuidea = !1, e.guide = null, e.qstageIda = 0, e.cbk = null
                },
                onLockingChips: function() {
                    console.log("\u9501\u5b9a\u788e\u7247-----------------"), console.log("this.qrewardLista----------", this.qrewardLista);
                    var e = this;
                    cc.game4399Mgr.showVideoAD(function() {
                        e._lockReword = !0, e.lockNode.getChildByName("btn").active = !1, e.lockNode.getChildByName("txt").active = !0, e.onOpenCard(0, function() {
                            e.qsetOpenTypea()
                        })
                    }, function(e) {
                        e && console.log("lockReword fail back", e)
                    })
                },
                onOpen: function(e) {
                    var a = this;
                    this.qopenNuma = 0, this.qtotalWeighta = 0, this.qbtnClosea.active = !1, this.qstageIda = e.qstageIda, this.cbk = e.cbk, 1 == this.qstageIda && (this.qisGuidea = !0);
                    for (var t = q.default.getInstance().qgetStageRewarda(this.qstageIda), i = 1; i <= 3; i++) {
                        var o = r.Tools.qsplitToNumLista(t["reward" + i], "x"),
                            s = {
                                type: o[0],
                                num: o[1],
                                weight: parseInt(t["weight" + i])
                            };
                        this.qtotalWeighta += s.weight, this.qrewardLista.push(s);
                        var c = this.node.getChildByName("qcard" + i + "a"),
                            l = c.getChildByName("qfacea"),
                            h = c.getChildByName("back");
                        l.active = !0, h.active = !1, 1 == s.type ? (l.getChildByName("qmoneya").active = !0, l.getChildByName("chip").active = !1) : (l.getChildByName("qmoneya").active = !1, l.getChildByName("chip").active = !0), l.getChildByName("num").getComponent(cc.Label).string = "x" + r.Tools.qnumberFormata(s.num), this.qcardArra.push(c)
                    }
                    this.qrefresha(), r.Tools.qapplyCabinFontToNodea(this.node), this.qresourceBara.node.active = !0;
                    var g = this,
                        u = function() {
                            g.scheduleOnce(function() {
                                g.lockNode.active = !0
                            }, 5.2), g.scheduleOnce(function() {
                                for (var e = 0; e < 3; e++) g.qturnCarda(g.qcardArra[e]);
                                g.scheduleOnce(function() {
                                    g.qchangeCarda(function() {
                                        for (var e = 0; e < 3; e++) {
                                            var t = g.qcardArra[e].getChildByName("back");
                                            t.getChildByName("cover").active = !0, t.getChildByName("free").active = !0
                                        }
                                        g.qisGuidea && (n.ViewManager.getInstance().qturnOffScreenClicka(!0), a.qloadGuidea(function() {
                                            n.ViewManager.getInstance().qturnOnScreenClicka();
                                            var e = g.qcardArra[0].getChildByName("back");
                                            g.guide.qhideAlla(), g.guide.qshowHanda(e), g.guide.qshowMaska(e, function() {
                                                g.guide.qhideAlla(), g.onClickOpenCard(0)
                                            })
                                        }))
                                    })
                                }, 1)
                            }, 2)
                        };
                    u()
                },
                qloadGuidea: function(e) {
                    if (this.guide) e();
                    else {
                        var a = this;
                        cc.loader.loadRes("prefab/battle/mg_Guide", cc.Prefab, function(t, i) {
                            if (t) return console.log(t), void a.qloadGuidea(e);
                            var n = cc.instantiate(i);
                            a.guide = n.getComponent(m.default), n.parent = a.node, e()
                        })
                    }
                },
                qchangeCarda: function(e, a) {
                    if (void 0 === a && (a = 0), a > 5) e();
                    else {
                        var t = [0, 1, 2],
                            i = a;
                        i > 2 && (i = Math.floor(r.Tools.qgetRandomArbitrarya(0, 3)));
                        var n = t[i],
                            o = this.qcardArra[n].x;
                        t.splice(i, 1);
                        var s = t[i = Math.floor(r.Tools.qgetRandomArbitrarya(0, 2))],
                            c = this.qcardArra[s].x,
                            l = this;
                        this.qmoveCarda(n, c), this.qmoveCarda(s, o, function() {
                            l.qcardArra[n].x = c, l.qcardArra[n].stopAllActions(), l.qcardArra[s].x = o, l.qcardArra[s].stopAllActions(), l.scheduleOnce(function() {
                                l.qchangeCarda(e, a + 1)
                            }, .1)
                        })
                    }
                },
                qmoveCarda: function(e, a, t) {
                    void 0 === t && (t = null);
                    var i = this.qcardArra[e];
                    i.runAction(cc.sequence(cc.moveTo(.2, a, i.y), cc.callFunc(function() {
                        t && t()
                    })))
                },
                qturnCarda: function(e, a) {
                    void 0 === a && (a = null), e.scaleX = 1, e.stopAllActions();
                    var t = e.getChildByName("qfacea"),
                        i = e.getChildByName("back");
                    e.runAction(cc.sequence(cc.scaleTo(.2, 0, 1), cc.callFunc(function() {
                        t.active ? (t.active = !1, i.active = !0) : (t.active = !0, i.active = !1)
                    }), cc.scaleTo(.2, 1, 1), cc.delayTime(.3), cc.callFunc(function() {
                        a && a()
                    })))
                },
                qrefresha: function() {
                    if (this.qresourceBara.qrefreshResourcea(), this.qgunDataa = l.qUserDataMgra.getInstance().qgetCurUnlockGuna(), this.qgunDataa) {
                        var e = this.qgunDataa.qfragmenta - l.qUserDataMgra.getInstance().data.qgunChipa;
                        this.qchipDesca.string = "C\u1ea7n th\u00eam " + e, this.qchipProga.string = l.qUserDataMgra.getInstance().data.qgunChipa + "/" + this.qgunDataa.qfragmenta, this.mask.width = 300 * l.qUserDataMgra.getInstance().data.qgunChipa / this.qgunDataa.qfragmenta, this.gunBg.setState(1), this.qshowGunIcona(this.qgunDataa), r.Tools.qapplyCabinFontToLabela(this.qchipDesca), r.Tools.qapplyCabinFontToLabela(this.qchipProga)
                    } else this.node.getChildByName("gun").active = !1;
                    this.node.getChildByName("gun").active ? this.node.getChildByName("sp").y = 420 : this.node.getChildByName("sp").y = 330
                },
                qshowGunIcona: function(e) {
                    var a = this;
                    this && e && cc.loader.loadRes("img/gunicon/gunIcon_" + e.qGunicona, cc.SpriteFrame, function(t, i) {
                        if (t) return console.log(t), void a.qshowGunIcona(e);
                        a && a.gunBg && (a.gunBg.spriteFrame = i, a.gun.spriteFrame = i)
                    })
                },
                onCloseClick: function() {
                    o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click), n.ViewManager.getInstance().qcloseViewa({
                        View: v
                    }), this.cbk && this.cbk()
                },
                onClickOpenCard: function(e) {
                    this.lockNode.active = !1;
                    var a = this.qcardArra[e].getChildByName("back");
                    if (a.active && a.getChildByName("cover").active) {
                        o.default.getInstance().play("yx_" + o.qAudioSourceNamea.Click);
                        var t = this;
                        a.getChildByName("share").active || this.qtoggleSharea.node.active && 1 == this.qtoggleSharea.isChecked ? this.qopenCardSharea(e, function() {
                            t.qsetOpenTypea()
                        }) : a.getChildByName("free").active ? this.onOpenCard(e, function() {
                            t.qsetOpenTypea()
                        }) : a.getChildByName("qvideoa").active && this.qopenCardVideoa(e, function() {
                            t.qsetOpenTypea()
                        })
                    }
                },
                qsetOpenTypea: function() {
                    var e = 0;
                    if (l.qUserDataMgra.getInstance().qisMaxShareCounta() && (e = 0), this.qrewardLista.length) {
                        2 == (e = 2 == this.qrewardLista.length ? c.default.getInstance().qshareCard2a : c.default.getInstance().qshareCard3a) ? (this.qtoggleSharea.node.active = !0, this.qtoggleSharea.check()) : this.qtoggleSharea.node.active = !1;
                        for (var a = 0; a < 3; a++) {
                            var t = this.qcardArra[a].getChildByName("back");
                            if (t.active && t.getChildByName("cover").active) {
                                var i = t.getChildByName("free"),
                                    n = t.getChildByName("share"),
                                    o = t.getChildByName("qvideoa");
                                i.active = !1, n.active = !1, o.active = !1, 0 == e ? o.active = !0 : 1 == e ? n.active = !0 : i.active = !0
                            }
                        }
                        if (!this.qbtnClosea.active) {
                            var s = this;
                            this.scheduleOnce(function() {
                                s.qbtnClosea.active = !0, s.qbtnClosea.opacity = 0, s.qbtnClosea.runAction(cc.fadeIn(1.2))
                            }, 2)
                        }
                    } else this.onCloseClick()
                },
                qopenCardSharea: function(e, a) {
                    var t = this;
                    s.SdkCommon.share(function() {
                        l.qUserDataMgra.getInstance().data.qshareNuma++, t.onOpenCard(e, a)
                    }, null, null, 110)
                },
                qopenCardVideoa: function(e, a) {
                    var t = this;
                    cc.game4399Mgr.showVideoAD(function() {
                        t.onOpenCard(e, a)
                    }, function() {})
                },
                onOpenCard: function(e, a) {
                    var t = this.qcardArra[e],
                        i = t.getChildByName("back"),
                        o = t.getChildByName("qfacea"),
                        s = !1,
                        c = 0;
                    if (!this.qisGuidea || e) {
                        if (2 != this.qstageIda || 3 != this.qrewardLista.length) {
                            var q = 0,
                                h = r.Tools.qgetRandomArbitrarya(0, this.qtotalWeighta);
                            for (c = 0; c < this.qrewardLista.length && !(h < (q += this.qrewardLista[c].weight)); c++);
                        }
                    } else s = !0;
                    c >= this.qrewardLista.length && (c = 0), 3 == this.qrewardLista.length && (l.qUserDataMgra.getInstance().data.qmustGetChipa = !0), c || (l.qUserDataMgra.getInstance().data.qmustGetChipa = !1);
                    var m = this.qrewardLista[c];
                    if (this._lockReword) {
                        for (var p in this.qrewardLista) 3 == this.qrewardLista[p].type && (m = this.qrewardLista[p], console.log("ffffffffffffff---------------", m), c = p);
                        this._lockReword = !1
                    }
                    this.qrewardLista.splice(c, 1), 1 == m.type ? (o.getChildByName("qmoneya").active = !0, o.getChildByName("chip").active = !1) : (o.getChildByName("qmoneya").active = !1, o.getChildByName("chip").active = !0), o.getChildByName("num").getComponent(cc.Label).string = "x" + r.Tools.qnumberFormata(m.num), i.getChildByName("cover").active = !1, n.ViewManager.getInstance().qturnOffScreenClicka();
                    var f = this;
                    this.qturnCarda(t, function() {
                        var e = g.qViewGainTypea.Money;
                        3 == m.type && (e = g.qViewGainTypea.Chip), n.ViewManager.getInstance().qopenViewa({
                            View: g.ViewGain,
                            qCustomDataa: {
                                qisGuidea: s,
                                qisBattleWina: 1,
                                qgainTypea: e,
                                count: m.num,
                                cbk: function(e) {
                                    var t, i = m.num * e;
                                    1 == m.type ? (l.qUserDataMgra.getInstance().data.qmoneya += i, t = f.qresourceBara.node.getChildByName("qmoneya").getChildByName("icon")) : (l.qUserDataMgra.getInstance().data.qgunChipa += i, t = f.qresourceBara.node.getChildByName("chip").getChildByName("icon"));
                                    var o = f.node.getComponent(u.default),
                                        s = i > 15 ? 15 : i;
                                    o.qplayGainMoneya(s, null, t, m.type), 3 == m.type ? n.ViewManager.getInstance().qopenViewa({
                                        View: d.ViewUnlock,
                                        qCustomDataa: {
                                            cbk: function(e) {
                                                e && (f.node.getChildByName("gun").active = !1), f.qrefresha(), a(), n.ViewManager.getInstance().qturnOnScreenClicka()
                                            }
                                        }
                                    }) : (f.qrefresha(), a(), n.ViewManager.getInstance().qturnOnScreenClicka()), f.lockNode.active = !1
                                }
                            }
                        })
                    })
                },
                onOpenCard1Click: function() {
                    this.onClickOpenCard(0)
                },
                onOpenCard2Click: function() {
                    this.onClickOpenCard(1)
                },
                onOpenCard3Click: function() {
                    this.onClickOpenCard(2)
                },
                onClose: function() {},
                onReceiveMessage: function(e) {
                    "qrefresha" == e.type && this.qrefresha()
                }
            }));
        t.ViewWin = f;
        var v = f;
        cc._RF.pop()
    }, {
        mg_AudioManager: "mg_AudioManager",
        mg_BuildingInfo: "mg_BuildingInfo",
        mg_ConfigDataManager: "mg_ConfigDataManager",
        mg_GainMoneyAnim: "mg_GainMoneyAnim",
        mg_Guide: "mg_Guide",
        mg_RemoteConfigManager: "mg_RemoteConfigManager",
        mg_ResourceBar: "mg_ResourceBar",
        mg_SdkCommon: "mg_SdkCommon",
        mg_Tools: "mg_Tools",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewBase: "mg_ViewBase",
        mg_ViewGain: "mg_ViewGain",
        mg_ViewManager: "mg_ViewManager",
        mg_ViewUnlock: "mg_ViewUnlock",
        mg_WeChatGame: "mg_WeChatGame"
    }],
    mg_WXSubManager: [function(e, a, i) {
        "use strict";
        cc._RF.push(a, "9f3acH92g5FSqWxuEpJi3kh", "mg_WXSubManager");
        var n, o, s = e("mg_ScreenAdapter"),
            r = e("mg_BuildingInfo");
        (n || (n = {})).Score = "maxScore",
            function(e) {
                e[e.qShowRankLista = 1] = "qShowRankLista", e[e.qLoadRankLista = 11] = "qLoadRankLista", e[e.qHideRankLista = 1e3] = "qHideRankLista", e[e.qShowBeyondFrienda = 4] = "qShowBeyondFrienda", e[e.qLoadBeyondFrienda = 41] = "qLoadBeyondFrienda", e[e.qHideBeyondFrienda = 4e3] = "qHideBeyondFrienda"
            }(o || (o = {}));
        var c = cc.Class({
            extends: cc.Component,
            properties: {},
            statics: {
                getInstance: function() {
                    if (r.default.qisWXChannela()) return null == t.instance && (t.instance = new t, t.instance.init()), t.instance
                },
                instance: null
            },
            ctor: function() {
                this.qsubViewa = null
            },
            init: function() {
                var e = new cc.Size(s.ScreenAdapter.getInstance().qgetDesignSizea().width, s.ScreenAdapter.getInstance().qgetDesignSizea().height + 2 * s.ScreenAdapter.getInstance().getOffset()),
                    a = new cc.Node("WXSubContextView");
                a.setContentSize(e), this.qsubViewa = a.addComponent(cc.WXSubContextView), cc.game.addPersistRootNode(a), a.setPosition(e.width / 2, e.height / 2), this.qsubViewa.enabled = !1
            },
            qgetSubViewa: function() {
                return this.qsubViewa
            },
            qrefreshSubViewa: function() {
                this.qsubViewa.node.stopAllActions();
                var e = cc.sequence(cc.delayTime(.1), cc.callFunc(this.qupdateSubViewa, this), cc.delayTime(.2), cc.callFunc(this.qupdateSubViewa, this), cc.delayTime(.4), cc.callFunc(this.qupdateSubViewa, this), cc.delayTime(.8), cc.callFunc(this.qupdateSubViewa, this), cc.delayTime(1.6), cc.callFunc(this.qupdateSubViewa, this), cc.delayTime(2), cc.callFunc(this.qupdateSubViewa, this));
                this.qsubViewa.node.runAction(e)
            },
            qupdateSubViewa: function() {
                this.qsubViewa.update()
            },
            qsubmitDataa: function(e) {
                var a = [];
                a.push({
                    key: n.Score,
                    value: e.toString()
                }), console.log("KVDataList", a), wx.setUserCloudStorage({
                    KVDataList: a,
                    success: function(a) {
                        console.log("\u6258\u7ba1\u6570\u636e\u6210\u529f " + e, a)
                    },
                    fail: function(e) {
                        console.log("\u6258\u7ba1\u6570\u636e\u5931\u8d25", e)
                    }
                })
            },
            qshowRankLista: function(e) {
                this.qsubViewa.node.active = !0, wx.postMessage({
                    id: o.qShowRankLista,
                    data: e
                }), this.qsubViewa.enabled = !0
            },
            qloadRankLista: function() {
                wx.postMessage({
                    id: o.qLoadRankLista
                })
            },
            qhideRankLista: function() {
                wx.postMessage({
                    id: o.qHideRankLista
                }), this.qsubViewa.enabled = !1, this.qsubViewa.node.active = !1, this.scheduleOnce(this.qupdateSubViewa, .1)
            },
            qloadBeyondFrienda: function(e) {
                wx.postMessage({
                    id: o.qLoadBeyondFrienda,
                    data: e
                })
            },
            qshowBeyondFrienda: function(e) {
                this.qsubViewa.node.active = !0, wx.postMessage({
                    id: o.qShowBeyondFrienda,
                    data: e
                }), this.qsubViewa.enabled = !0
            },
            qhideBeyondFrienda: function() {
                wx.postMessage({
                    id: o.qHideBeyondFrienda
                }), this.qsubViewa.enabled = !1, this.qsubViewa.node.active = !1, this.scheduleOnce(this.qupdateSubViewa, .1)
            }
        });
        i.WXSubManager = c, cc._RF.pop()
    }, {
        mg_BuildingInfo: "mg_BuildingInfo",
        mg_ScreenAdapter: "mg_ScreenAdapter"
    }],
    mg_WeChatGame: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "3d574jSiGBEhJx66pfkpwxa", "mg_WeChatGame");
        var i = e("mg_Tools"),
            n = e("mg_UserDataManager"),
            o = e("mg_ViewManager"),
            s = e("mg_ConfigDataManager"),
            r = e("mg_LeuokBi"),
            c = e("mg_RemoteConfigManager"),
            l = e("mg_ScreenAdapter"),
            q = e("mg_StringKeyMap"),
            h = e("mg_BuildingInfo"),
            g = e("mg_CDB");
        (function(e) {
            e[e.qNoSuitedAda = 1004] = "qNoSuitedAda", e[e.qAdInCheckinga = 1005] = "qAdInCheckinga", e[e.qAdRejecteda = 1006] = "qAdRejecteda"
        })(t.qVideoAdErrorCodea || (t.qVideoAdErrorCodea = {})),
        function(e) {
            e.qVideoWina = "adunit-8b75ce4e81cb1b4a", e.qVideoLosea = "adunit-3ba4bf333cd349f7", e.qVideoReborna = "adunit-a80b33383834c9a4", e.qVideoHangupa = "adunit-222b83dc2136c548", e.qVideoSigna = "adunit-7ede2f21189eaef5", e.qVideoFreeMoneya = "adunit-05f9b8df1b63342d", e.qVideoLotterya = "adunit-e5eec7ff52da2285", e.qVideoShielda = "adunit-6850f8a6088d0ce0", e.qVideoOpenCarda = "adunit-2b45b806c61298c5", e.qVideoChipa = "adunit-7d8e3fafbd889403", e.qVideoFreeGuna = "adunit-c04ff7bc828ebecd"
        }(t.qAdUnitIda || (t.qAdUnitIda = {}));
        var u = cc.Class({
            extends: cc.Component,
            properties: {},
            statics: {
                getInstance: function() {
                    return null == this.instance && (this.instance = new d, this.instance.init()), this.instance
                },
                instance: null
            },
            ctor: function() {
                var e = this;
                e.code = null, e.qwxLoginInfoa = {}, e.qBannerIda = [], e.qBannerMaxHeighta = 220, e.qcurrentBannerIndexa = 0, e.qUserInfoBtnMapa = null, e.onShareEndCbk = null, e.qdeviceInfoa = null, e.qplatforma = "", e.qreshareParama = null, e.qshareStartTimea = null, e.qshareFlaga = 0, e.qbannerAda = null, e.qisShowBannera = !1, e.GameClubButton = null, e.qbanner_OnloadFunca = null, e.qbanner_OnErrorFunca = null, e.qbanner_OnResizeFunca = null, e.qvideoAda = null, e.qisVideoNoDataa = !1, e.qisVideoPlaya = !1, e.qvideoAd_OnErrorFunca = null, e.qvideoAd_OnCloseFunca = null, e.qisPassedLogina = null, e.qshareFailCbka = null, e.qinterstitialAda = null
            },
            qgetWxAppida: function() {
                return "wx82a6148ae9de31c8"
            },
            init: function() {
                this.qisPassedLogina = !1, this.qUserInfoBtnMapa = new q.StringKeyMap, this.qinitSharea(), this.qregisterOnShowEventa(), this.qinitDeviceInfoa(), h.default.qisWXChannela() && !i.Tools.qisNullOrUndefineda(qg.qcreateInterstitialAda) && c.default.getInstance().qinterAda && (this.qinterstitialAda = qg.qcreateInterstitialAda({
                    qadUnitIda: ""
                }))
            },
            qinitDeviceInfoa: function() {
                h.default.qisWXChannela() && (this.qplatforma = this.qgetDeviceInfoa().qplatforma)
            },
            qgetDeviceInfoa: function() {
                if (h.default.qisWXChannela()) return null == this.qdeviceInfoa && (console.log("qg.getSystemInfo"), this.qdeviceInfoa = qg.getSystemInfoSync()), this.qdeviceInfoa
            },
            qgetPassLoginStatea: function() {
                return this.qisPassedLogina
            },
            qwxLogina: function(e) {
                var a = this;
                qg.login({
                    success: function(t) {
                        console.log("qg login success"), t.code && (a.code = t.code), e()
                    }
                })
            },
            qgetWxUserInfoa: function(e) {
                var a = this;
                qg.getUserInfo({
                    qwithCredentialsa: !0,
                    success: function(t) {
                        console.log("\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u6210\u529f"), a.qisPassedLogina = !0, a.qsaveUserInfoa(t), e(!0)
                    },
                    fail: function(a) {
                        console.log("\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u5931\u8d25"), e(!1)
                    }
                })
            },
            qcreateWxUserInfoBtna: function(e, a, t, o) {
                void 0 === o && (o = null);
                var s = this.qgetWxRangea(e),
                    r = qg.createUserInfoButton({
                        style: {
                            left: s.left,
                            top: s.top,
                            width: s.width,
                            height: s.height
                        },
                        type: "image",
                        text: "",
                        image: i.Tools.qgetRawUrla("resources/img/wxUserInfoBtn/alpha0.png"),
                        qwithCredentialsa: !0
                    }),
                    c = this;
                r.onTap(function(e) {
                    console.log("\u70b9\u51fb\u6388\u6743\u9009\u9879 "), console.log(e), n.qUserDataMgra.getInstance().data.qisWxUserInfoSelecteda = !0, n.qUserDataMgra.getInstance().qsaveUserDataa(), "getUserInfo:ok" == e.errMsg ? (c.qisPassedLogina = !0, c.qsaveUserInfoa(e), t()) : o && o()
                }), this.qUserInfoBtnMapa.qcontainsKeya(a) && this.qUserInfoBtnMapa.get(a).destroy(), this.qUserInfoBtnMapa.set(a, r)
            },
            qsaveUserInfoa: function(e) {
                this.qwxLoginInfoa.quserInfoa = e.quserInfoa, this.qwxLoginInfoa.qrawDataa = e.qrawDataa, this.qwxLoginInfoa.qsignaturea = e.qsignaturea, this.qwxLoginInfoa.qencryptedDataa = e.qencryptedDataa, this.qwxLoginInfoa.iv = e.iv
            },
            qcheckLaunchOptionsa: function() {
                if (h.default.qgetChannelTypea() == h.qChannelTypea.WX) {
                    var e = qg.getLaunchOptionsSync();
                    if (console.log("\u68c0\u67e5\u542f\u52a8\u53c2\u6570", e), e.query && e.query.qsharePointIda && "0" != e.query.qsharePointIda && (r.LeuokBi.qsafeCalla("sharedIn", {
                            type: parseInt(e.query.qsharePointIda)
                        }), e.query && e.query.defId && "0" != e.query.defId ? r.LeuokBi.qsafeCalla("action", {
                            qactionTypea: 1,
                            qactionNumbera: parseInt(e.query.defId)
                        }) : r.LeuokBi.qsafeCalla("action", {
                            qactionTypea: 1,
                            qactionNumbera: parseInt(e.query.qsharePointIda)
                        })), e.query && e.query.qinviter_ida) {
                        console.log("\u70b9\u51fb\u4e86\u522b\u4eba\u7684\u9080\u8bf7\u94fe\u63a5");
                        var a = {
                            key: 1,
                            qotherUida: e.query.qinviter_ida,
                            value: n.qUserDataMgra.getInstance().uid.toString(),
                            success: function(e) {
                                console.log("CDB qsetOtherDataa Success \u4e0a\u884c:" + JSON.stringify(a) + " \u4e0b\u884c:" + JSON.stringify(e))
                            },
                            fail: function(e) {
                                console.error("CDB qsetOtherDataa Fail \u4e0a\u884c:" + JSON.stringify(a) + " \u4e0b\u884c:" + JSON.stringify(e))
                            }
                        };
                        g.CDB.qsetOtherDataa(a)
                    }
                }
            },
            qinitSharea: function() {
                if (h.default.qisWXChannela() && !c.default.getInstance().shenhe) {
                    var e = this;
                    qg.showShareMenu({
                        qwithShareTicketa: !1
                    }), qg.onShareAppMessage(function(a) {
                        console.log("\u7528\u6237\u70b9\u51fb\u4e86\u83dc\u5355\u680f\u8f6c\u53d1\u6309\u94ae");
                        var t = e.qgetRandomShareDefa();
                        return {
                            title: t.qdesca,
                            imageUrl: h.default.qgetCDNServerDomaina() + "/rxqt/bl2/share/" + t.pic + ".jpg?" + Math.floor(i.Tools.qgetTimestampSa() / 3600),
                            query: "",
                            success: function(e) {}
                        }
                    })
                }
            },
            qgetRandomShareDefa: function() {
                var e = i.Tools.qgetRandomIntInclusivea(0, s.default.getInstance().qshareLista.length - 1);
                return s.default.getInstance().qshareLista[e]
            },
            qscreenShoota: function(e) {
                if (h.default.qisWXChannela()) {
                    var a = l.ScreenAdapter.getInstance().qgetDesignSizea().height,
                        t = cc.game.canvas.height / a;
                    console.log("\u5fae\u4fe1\u622a\u56fe", t);
                    var i = e.qimgWidtha,
                        n = e.qimgHeighta,
                        o = e.offset;
                    return canvas.toTempFilePathSync({
                        x: Math.round((cc.game.canvas.width - i) / 2 + o.x),
                        y: Math.round((cc.game.canvas.height - a) / 2 + (a - n) / 2 + o.y),
                        width: Math.round(i),
                        height: Math.round(n),
                        qdestWidtha: e.qdstWidtha,
                        qdestHeighta: e.qdstHeighta
                    })
                }
            },
            qgetWxRangea: function(e) {
                var a = cc.size(e.width + 10, e.height + 10),
                    t = cc.view.getFrameSize(),
                    i = cc.director.getWinSize();
                return {
                    left: (.5 * i.width + e.x - .5 * a.width) / i.width * t.width,
                    top: (.5 * i.height - e.y - .5 * a.height) / i.height * t.height,
                    width: a.width / i.width * t.width,
                    height: a.height / i.height * t.height
                }
            },
            qretrySharea: function() {
                if (console.log("qinviteFrienda"), h.default.qisWXChannela()) {
                    var e = this,
                        a = this.qreshareParama.cbk,
                        t = this.qreshareParama.qimgPatha,
                        s = this.qreshareParama.title,
                        c = this.qreshareParama.qsharePointIda,
                        l = this.qreshareParama.qshareFailCbka;
                    o.ViewManager.getInstance().qturnOffScreenClicka(!0), qg.updateShareMenu({
                        qwithShareTicketa: !0,
                        success: function(o) {
                            var q = e.qgetRandomShareDefa(),
                                g = q.id;
                            s && t && (g = 0), s || (s = q.qdesca), t || (t = h.default.qgetCDNServerDomaina() + "/rxqt/bl2/share/" + q.pic + ".jpg?" + Math.floor(i.Tools.qgetTimestampSa() / 3600)), qg.shareAppMessage({
                                title: s,
                                imageUrl: t,
                                query: "qinviter_ida=" + n.qUserDataMgra.getInstance().uid + "&defId=" + g + "&qsharePointIda=" + c
                            }), r.LeuokBi.qsafeCalla("sharedOut", {
                                type: c
                            }), r.LeuokBi.qsafeCalla("action", {
                                qactionTypea: 3,
                                qactionNumbera: g
                            }), e.qshareStartTimea = i.Tools.qgetTimestampSa(), e.onShareEndCbk = a || null, l && (e.qshareFailCbka = l)
                        },
                        fail: function() {
                            console.log("shareAppMessage fail"), o.ViewManager.getInstance().qturnOnScreenClicka()
                        },
                        complete: function() {
                            console.log("shareAppMessage complete"), o.ViewManager.getInstance().qturnOnScreenClicka()
                        }
                    })
                }
            },
            qinviteFrienda: function(e, a, t, s, c) {
                if (void 0 === s && (s = 0), void 0 === c && (c = null), console.log("qinviteFrienda"), h.default.qisWXChannela()) {
                    var l = this;
                    this.qreshareParama = {
                        cbk: e,
                        qimgPatha: a,
                        title: t,
                        qsharePointIda: s,
                        qshareFailCbka: c
                    }, o.ViewManager.getInstance().qturnOffScreenClicka(!0), qg.updateShareMenu({
                        qwithShareTicketa: !0,
                        success: function(o) {
                            var q = l.qgetRandomShareDefa(),
                                g = q.id;
                            t && a && (g = 0), t || (t = q.qdesca), a || (a = h.default.qgetCDNServerDomaina() + "/rxqt/bl2/share/" + q.pic + ".jpg?" + Math.floor(i.Tools.qgetTimestampSa() / 3600)), qg.shareAppMessage({
                                title: t,
                                imageUrl: a,
                                query: "qinviter_ida=" + n.qUserDataMgra.getInstance().uid + "&defId=" + g + "&qsharePointIda=" + s
                            }), r.LeuokBi.qsafeCalla("sharedOut", {
                                type: s
                            }), r.LeuokBi.qsafeCalla("action", {
                                qactionTypea: 3,
                                qactionNumbera: g
                            }), l.qshareStartTimea = i.Tools.qgetTimestampSa(), 0 == l.qshareFlaga && (l.qshareFlaga = 1), l.onShareEndCbk = e || null, c && (l.qshareFailCbka = c)
                        },
                        fail: function() {
                            console.log("shareAppMessage fail"), o.ViewManager.getInstance().qturnOnScreenClicka()
                        },
                        complete: function() {
                            console.log("shareAppMessage complete"), o.ViewManager.getInstance().qturnOnScreenClicka()
                        }
                    })
                }
            },
            share: function(e, a, t, i, n, o) {
                void 0 === n && (n = null), void 0 === o && (o = !1), console.log("share"), h.default.qisWXChannela() && (o || !c.default.getInstance().shenhe && !o ? (console.log("to qinviteFrienda"), this.qinviteFrienda(e, a, t, i, n)) : e && e())
            },
            qupDataAppa: function() {
                if ("function" == typeof qg.getUpdateManager) {
                    var e = qg.getUpdateManager();
                    e.onCheckForUpdate(function(a) {
                        a.qhasUpdatea && (e.onUpdateReady(function() {
                            qg.showModal({
                                title: "C\u1eadp nh\u1eadt",
                                content: "Phi\u00ean b\u1ea3n m\u1edbi \u0111\u00e3 s\u1eb5n s\u00e0ng, b\u1ea1n c\u00f3 mu\u1ed1n kh\u1edfi \u0111\u1ed9ng l\u1ea1i \u1ee9ng d\u1ee5ng?",
                                success: function(a) {
                                    a.confirm && e.applyUpdate()
                                }
                            })
                        }), e.onUpdateFailed(function() {
                            console.log("\u65b0\u7248\u672c\u4e0b\u8f7d\u5931\u8d25")
                        }))
                    })
                }
            },
            qregisterOnShowEventa: function() {
                var e = this;

                function a() {
                    e.qshareFailCbka && (e.qshareFailCbka(), e.qshareFailCbka = null)
                }
                h.default.qisWXChannela() && qg.onShow(function(t) {
                    if (console.log("\u5c0f\u6e38\u620f\u56de\u5230\u524d\u53f0"), o.ViewManager.getInstance().qturnOnScreenClicka(), e.onShareEndCbk && null != e.qshareStartTimea) {
                        if (i.Tools.qgetTimestampSa() - e.qshareStartTimea >= 3) {
                            if (1 == e.qshareFlaga && 100 * Math.random() <= 30) return e.qshareFlaga = 2, s.default.getInstance().qshareFailWxModala ? e.qshowShareFailDialoga(a, function() {
                                e.qretrySharea()
                            }, !0) : (o.ViewManager.getInstance().qshowTipa("Lỗi chia sẻ"), a()), void(e.qshareStartTimea = null);
                            e.qshareFlaga = 0, e.onShareEndCbk(), e.onShareEndCbk = null
                        } else s.default.getInstance().qshareFailWxModala ? e.qshowShareFailDialoga(a, function() {
                            e.qretrySharea()
                        }, !1) : (o.ViewManager.getInstance().qshowTipa("Lỗi chia sẻ"), a());
                        e.qshareStartTimea = null
                    }
                    e.qupDataAppa()
                })
            },
            qshowShareFailDialoga: function(e, a, t) {
                var i = "Th\u00f4ng b\u00e1o",
                    n = "Thao t\u00e1c th\u1ea5t b\u1ea1i, ch\u01b0a chia s\u1ebb th\u00e0nh c\u00f4ng cho b\u1ea1n b\u00e8.";
                t && (i = "Chia s\u1ebb th\u1ea5t b\u1ea1i", n = "Chia s\u1ebb sang nh\u00f3m kh\u00e1c m\u1edbi nh\u1eadn \u0111\u01b0\u1ee3c ph\u1ea7n th\u01b0\u1edfng"), qg.showModal({
                    title: i,
                    content: n,
                    qcancelTexta: "\u0110\u00e3 hi\u1ec3u",
                    qconfirmTexta: "X\u00e1c nh\u1eadn",
                    success: function(t) {
                        t.confirm ? (console.log("\u7528\u6237\u70b9\u51fb\u786e\u5b9a"), a && a()) : (console.log("\u7528\u6237\u70b9\u51fb\u53d6\u6d88"), e && e())
                    }
                })
            },
            qregisterShareFailCallbacka: function(e) {
                this.qshareFailCbka = e
            },
            qgetBannerAda: function() {
                return this.qbannerAda
            },
            createBannerAd: function(e) {},
            qshowBannera: function() {},
            qhideBannera: function() {},
            qdestroyBannera: function() {},
            qsetBannerOnLoadCallbacka: function(e) {},
            qsetBannerOnErrorCallbacka: function(e) {},
            qsetBannerOnResizeCallbacka: function(e) {},
            qloadVideoAda: function(e, a) {
                o.ViewManager.getInstance().qturnOffScreenClicka(!0), this.qvideoAda = qg.createRewardedVideoAd({
                    qadUnitIda: a
                }), this.qvideoAda.load().then(function() {
                    o.ViewManager.getInstance().qturnOnScreenClicka(), e(!0)
                }).catch(function(a) {
                    o.ViewManager.getInstance().qturnOnScreenClicka(), e(!1)
                })
            },
            qshowVideoAda: function(e, a, t) {
                var i = this;
                if (void 0 === t && (t = !1), console.log("qshowVideoAda:" + a), h.default.qisWXChannela()) {
                    o.ViewManager.getInstance().qturnOffScreenClicka(!0), r.LeuokBi.qsafeCalla("adVideo", {
                        type: r.LeuokBi.qgetAdvideoPointIda(a),
                        qsubTypea: r.qBiAdVideoSubTypea.qClickPlaya,
                        battle: n.qUserDataMgra.getInstance().data.qcurStageIDa
                    });
                    var s = this;
                    t || (this.qvideoAda = qg.createRewardedVideoAd({
                        qadUnitIda: a
                    })), this.qisVideoPlaya = !0, this.qvideoAd_OnErrorFunca && this.qvideoAda.offError(this.qvideoAd_OnErrorFunca), this.qvideoAd_OnErrorFunca = function(t) {
                        console.log("onError,\u89c6\u9891\u5e7f\u544a\u62c9\u53d6\u51fa\u9519"), console.log(t), r.LeuokBi.qsafeCalla("error", {
                            qerrorTypea: "qvideoa",
                            qerrCodea: t.qerrCodea
                        }), s.qisVideoPlaya && (s.qisVideoNoDataa = !0, r.LeuokBi.qsafeCalla("adVideo", {
                            type: r.LeuokBi.qgetAdvideoPointIda(a),
                            qsubTypea: r.qBiAdVideoSubTypea.qNoVideoa,
                            battle: n.qUserDataMgra.getInstance().data.qcurStageIDa
                        }), o.ViewManager.getInstance().qturnOnScreenClicka(), e(1), s.qisVideoPlaya = !1)
                    }, this.qvideoAda.onError(this.qvideoAd_OnErrorFunca), this.qvideoAd_OnCloseFunca && this.qvideoAda.offClose(this.qvideoAd_OnCloseFunca), this.qvideoAd_OnCloseFunca = function(t) {
                        s.qisVideoPlaya && (o.ViewManager.getInstance().qturnOnScreenClicka(), t.qisEndeda ? (s.qisVideoNoDataa = !1, n.qUserDataMgra.getInstance().qisShowInterAda = !1, e(3), r.LeuokBi.qsafeCalla("adVideo", {
                            type: r.LeuokBi.qgetAdvideoPointIda(a),
                            qsubTypea: r.qBiAdVideoSubTypea.qPlayFinisha,
                            battle: n.qUserDataMgra.getInstance().data.qcurStageIDa
                        }), r.LeuokBi.qsafeCalla("adVideo", {
                            type: r.LeuokBi.qgetAdvideoPointIda(a),
                            qsubTypea: r.qBiAdVideoSubTypea.qGetPrizea,
                            battle: n.qUserDataMgra.getInstance().data.qcurStageIDa
                        })) : (s.qisVideoNoDataa = !1, e(2), r.LeuokBi.qsafeCalla("adVideo", {
                            type: r.LeuokBi.qgetAdvideoPointIda(a),
                            qsubTypea: r.qBiAdVideoSubTypea.qUnfinishClosea,
                            battle: n.qUserDataMgra.getInstance().data.qcurStageIDa
                        })), s.qisVideoPlaya = !1)
                    }, this.qvideoAda.onClose(this.qvideoAd_OnCloseFunca), t ? this.qvideoAda.show() : this.qvideoAda.load().then(function() {
                        i.qvideoAda.show()
                    })
                } else e(1)
            },
            qshowBannerAda: function(e, a, t, i) {},
            qsetBannerPosa: function(e) {
                if (h.default.qgetPublishTypea() == h.qPublishTypea.qReleasea && h.default.qgetChannelTypea() == h.qChannelTypea.WX) {
                    var a = this.qgetDeviceInfoa(),
                        t = this.qgetBannerAda();
                    if (null != t) {
                        if (0 == e ? 0 != t.style.left && (t.style.left = 0) : 1 == e && t.style.left != (a.qscreenWidtha - t.style.qrealWidtha) / 2 && (t.style.left = (a.qscreenWidtha - t.style.qrealWidtha) / 2), 1 == e) {
                            var i = this.qBannerMaxHeighta + l.ScreenAdapter.getInstance().getOffset(),
                                n = 720 * t.style.qrealHeighta / a.qscreenWidtha;
                            if (console.log("bannerPixHeight:" + n + ", qBannerMaxHeighta=" + i), n > i) {
                                var o = i * a.qscreenWidtha / 720;
                                t.style.width = t.style.qrealWidtha * o / t.style.qrealHeighta, t.style.height = o
                            } else n < i && t.style.qrealWidtha < a.qscreenWidtha && (o = i * a.qscreenWidtha / 720, t.style.width = t.style.qrealWidtha * o / t.style.qrealHeighta, t.style.height = o)
                        }
                        var s = this;
                        r(), this.scheduleOnce(r, .1)
                    }
                }

                function r() {
                    s.qisIPhoneXa() ? t.style.top != a.qscreenHeighta - t.style.qrealHeighta - 30 && (t.style.top = a.qscreenHeighta - t.style.qrealHeighta - 30) : t.style.top != a.qscreenHeighta - t.style.qrealHeighta && (t.style.top = a.qscreenHeighta - t.style.qrealHeighta)
                }
            },
            qisIPhoneXa: function() {
                return -1 != this.qgetDeviceInfoa().model.indexOf("iPhone X")
            },
            qshowGameClubBtna: function() {
                if (h.default.qisWXChannela() && qg.createGameClubButton) {
                    if (!this.GameClubButton) {
                        console.log("initCircle");
                        var e = cc.view.getFrameSize(),
                            a = cc.director.getWinSize();
                        console.log("qframeSizea" + e), console.log("winSize" + a);
                        var t = (a.width - 100) / a.width * e.width,
                            i = 120;
                        a.height > 1280 && (i += (a.height - 1280) / 2), i = i / a.height * e.height;
                        var n = 40 / a.width * e.width;
                        console.log("left:" + t + ",top" + i + ",width" + n), this.GameClubButton = qg.createGameClubButton({
                            icon: "green",
                            style: {
                                left: t,
                                top: i,
                                width: n,
                                height: n
                            }
                        })
                    }
                    this.GameClubButton.show()
                }
            },
            qhideGameClubBtna: function() {
                h.default.qisWXChannela() && qg.createGameClubButton && this.GameClubButton && this.GameClubButton.hide()
            },
            qshowInterstitialAda: function() {
                h.default.qisWXChannela() && !i.Tools.qisNullOrUndefineda(qg.qcreateInterstitialAda) && c.default.getInstance().qinterAda && this.qinterstitialAda && this.qinterstitialAda.show().catch(function(e) {
                    console.error(e)
                })
            },
            showToast: function(e) {
                qg.showToast({
                    message: e,
                    duration: 1500
                })
            }
        });
        t.WeChatGame = u;
        var d = u;
        cc._RF.pop()
    }, {
        mg_BuildingInfo: "mg_BuildingInfo",
        mg_CDB: "mg_CDB",
        mg_ConfigDataManager: "mg_ConfigDataManager",
        mg_LeuokBi: "mg_LeuokBi",
        mg_RemoteConfigManager: "mg_RemoteConfigManager",
        mg_ScreenAdapter: "mg_ScreenAdapter",
        mg_StringKeyMap: "mg_StringKeyMap",
        mg_Tools: "mg_Tools",
        mg_UserDataManager: "mg_UserDataManager",
        mg_ViewManager: "mg_ViewManager"
    }],
    shareUtils: [function(e, a, t) {
        "use strict";
        cc._RF.push(a, "464e1hfaLVNO5dU3MieA86e", "shareUtils"), cc.Class({
            extends: cc.Component,
            properties: {
                type: 0,
                shareType: 0,
                btnGetVideo: [cc.Node],
                btnGetShare: [cc.Node]
            },
            onLoad: function() {
                this.shareNum = 0
            },
            onEnable: function() {
                this.shareNum = 0, console.log("log------------onEnable this.node.name type shareType :", this.node.name, this.type, this.shareType), this.type = 1, this.shareType = 0, this.getDoShareMethod()
            },
            setBtnSprite: function(e, a) {
                if (console.log("log------------setBtnSprite this.node.name type shareType :", this.node.name, e, a), 1 == e && (0 == a || 1 == a && mg.SDKMgr.haveVideo()))
                    for (var t in this.btnGetVideo) this.btnGetVideo[t].active = !0, this.btnGetShare[t].active = !1;
                else
                    for (var t in this.btnGetVideo) this.btnGetVideo[t].active = !1, this.btnGetShare[t].active = !0
            },
            getDoShareMethod: function() {
                switch (this.type) {
                    case 1:
                        this.setVideoType(this.shareType), this.setBtnSprite(this.type, this.shareType);
                        break;
                    case 2:
                        this.setShareType(this.shareType), this.setBtnSprite(this.type, this.shareType);
                        break;
                    case 3:
                        this.setRandomType(this.shareType, this.shareType)
                }
            },
            doShare: function(e) {
                this.options = e, this.shareMethod && this.shareMethod()
            },
            resetShareNum: function() {
                this.shareNum = 0
            },
            setVideoType: function(e) {
                switch (e) {
                    case 0:
                        this.shareMethod = this.lookVideo;
                        break;
                    case 1:
                        this.shareMethod = this.videoShare
                }
            },
            setShareType: function(e) {
                switch (e) {
                    case 0:
                        this.shareMethod = this.inducedShare0;
                        break;
                    case 1:
                        this.shareMethod = this.inducedShare1;
                        break;
                    case 2:
                        this.shareMethod = this.inducedShare2;
                        break;
                    case 3:
                        this.shareMethod = this.inducedShare3;
                        break;
                    case 4:
                        this.shareMethod = this.generalShare
                }
            },
            setRandomType: function(e) {
                switch (e) {
                    case 0:
                        this.randomShare()
                }
            },
            lookVideo: function() {
                cc.game4399Mgr.showVideoAD(this.options.success, this.options.fail)
            },
            videoShare: function() {
                this.showToast("Chia s\u1ebb")
            },
            inducedShare0: function() {
                0 == this.shareNum ? this.mustShareFail() : 1 == this.shareNum ? this.generalShare("Vui l\u00f2ng chia s\u1ebb cho b\u1ea1n kh\u00e1c", 5e3) : 2 == this.shareNum ? this.generalShare("Vui l\u00f2ng kh\u00f4ng l\u00e0m phi\u1ec1n c\u00f9ng m\u1ed9t ng\u01b0\u1eddi") : this.generalShare("Chia s\u1ebb th\u1ea5t b\u1ea1i")
            },
            inducedShare1: function() {
                0 == this.shareNum ? this.mayShareFail("Vui l\u00f2ng chia s\u1ebb v\u00e0o nh\u00f3m WeChat", 2500, .5) : 1 == this.shareNum ? this.mayShareFail("Vui l\u00f2ng chia s\u1ebb sang nh\u00f3m kh\u00e1c", 2500, .5) : 2 == this.shareNum && this.mustShareSuccess()
            },
            inducedShare2: function() {
                0 == this.shareNum ? this.mayShareFail("Ch\u1ec9 b\u1ea1n \u1edf nh\u00f3m kh\u00e1c m\u1edbi gi\u00fap \u0111\u01b0\u1ee3c b\u1ea1n", 2500, .8) : 1 == this.shareNum && this.mustShareSuccess()
            },
            inducedShare3: function() {
                0 == this.shareNum ? this.generalShare("Chia s\u1ebb th\u1ea5t b\u1ea1i, \u0111\u1eebng l\u00e0m phi\u1ec1n c\u00f9ng m\u1ed9t nh\u00f3m", 5e3) : this.generalShare("Chia s\u1ebb th\u1ea5t b\u1ea1i, vui l\u00f2ng chia s\u1ebb sang nh\u00f3m kh\u00e1c", 2500)
            },
            mustShareFail: function() {
                var e = this;
                mg.share({
                    success: function() {
                        e.showToast("K\u1ebft n\u1ed1i th\u1ea5t b\u1ea1i"), e.shareNum++
                    },
                    fail: function() {
                        e.showToast("K\u1ebft n\u1ed1i th\u1ea5t b\u1ea1i"), e.shareNum++
                    }
                })
            },
            mustShareSuccess: function() {
                var e = this;
                mg.share({
                    success: function() {
                        e.options.success && e.options.success(), e.resetShareNum()
                    },
                    fail: function() {
                        e.options.success && e.options.success(), e.resetShareNum()
                    }
                })
            },
            mayShareFail: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    a = (arguments.length > 1 && void 0 !== arguments[1] && arguments[1], arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .5),
                    t = this;
                mg.share({
                    success: function() {
                        Math.random() > a ? (t.options.success && t.options.success(), t.resetShareNum()) : (t.showToast(e), t.shareNum++)
                    },
                    fail: function() {
                        t.showToast(e), t.shareNum++
                    }
                })
            },
            generalShare: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    a = (arguments.length > 1 && void 0 !== arguments[1] && arguments[1], this);
                mg.share({
                    success: function() {
                        a.options.success && a.options.success(), a.resetShareNum()
                    },
                    fail: function() {
                        a.showToast(e), a.shareNum++
                    }
                })
            },
            randomShare: function() {
                var e = 0;
                Math.random() < .5 ? (e = Math.floor(2 * Math.random()), !mg.SDKMgr.haveVideo() && mg.SDKMgr.isVideoFailShare() && (e = 1), this.setVideoType(e), this.setBtnSprite(1, e)) : (e = Math.floor(5 * Math.random()), this.setShareType(e), this.setBtnSprite(2, e))
            },
            showToast: function(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                e && qg.showToast({
                    message: e,
                    duration: 2e3
                })
            }
        }), cc._RF.pop()
    }, {}]
}, {}, ["Launch", "mg_AudioManager", "mg_ViewManager", "mg_BuildingInfo", "mg_ConfigDataManager", "mg_RemoteConfigManager", "mg_UserDataManager", "mg_Box", "mg_Bullet", "mg_EnemyBullet", "mg_FadeBreath", "mg_FrontSight", "mg_GainMoneyAnim", "mg_Guide", "mg_Gun", "mg_GunListItem", "mg_InviteListItem", "mg_Map", "mg_MapItem", "mg_Npc", "mg_NumberGrowUpAnim", "mg_Obstacle", "mg_ResourceBar", "mg_RotationForever", "mg_TouchBlock", "AdsMgr", "NativeAd", "mg_NumberKeyMap", "mg_ScreenAdapter", "mg_StringKeyMap", "mg_Tools", "mg_UIDepth", "shareUtils", "mg_ViewBase", "mg_ViewBattle", "mg_ViewBoss", "mg_ViewBuff", "mg_ViewFreeGun", "mg_ViewFreeMoney", "mg_ViewFriendRank", "mg_ViewGain", "mg_ViewGetHangUp", "mg_ViewGunList", "mg_ViewHelmet", "mg_ViewHome", "mg_ViewInviteList", "mg_ViewLack", "mg_ViewLose", "mg_ViewLottery", "mg_ViewMap", "mg_ViewMaxAmmo", "mg_ViewNewEnemy", "mg_ViewReborn", "mg_ViewShield", "mg_ViewSign", "mg_ViewUnlock", "mg_ViewWarn", "mg_ViewWin", "mg_CDB", "mg_LeuokBi", "mg_SdkCommon", "mg_WXSubManager", "mg_WeChatGame"]);