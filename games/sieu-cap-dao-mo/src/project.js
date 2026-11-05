window.__require = function t(e, o, n) {
    function i(c, r) {
        if (!o[c]) {
            if (!e[c]) {
                var s = c.split("/");
                if (s = s[s.length - 1], !e[s]) {
                    var l = "function" == typeof __require && __require;
                    if (!r && l) return l(s, !0);
                    if (a) return a(s, !0);
                    throw new Error("Cannot find module '" + c + "'")
                }
            }
            var d = o[c] = {
                exports: {}
            };
            e[c][0].call(d.exports, function(t) {
                return i(e[c][1][t] || t)
            }, d, d.exports, t, e, o, n)
        }
        return o[c].exports
    }
    for (var a = "function" == typeof __require && __require, c = 0; c < n.length; c++) i(n[c]);
    return i
}({
    "4399AdManager": [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "5eb6czUMThE2pIxKr+D1E77", "4399AdManager");
        var n = cc.Class({
            properties: {
                videoAdCall: null
            },
            initSDK: function() {
                this.platform = "pc", window.h5api && (this.platform = "m4399")
            },
            ShowMyVideoAds: function(t) {
                if ("m4399" == this.platform) {
                    this.videoAdCall = t;
                    var e = this;
                    h5api.canPlayAd() && h5api.playAd(function(t) {
                        if (console.log("\u4ee3\u7801:" + t.code + ",\u6d88\u606f:" + t.message), 1e4 === t.code) {
                            console.log("\u5f00\u59cb\u64ad\u653e");
                            var o = cc.sys.localStorage.getItem("hc_4399_count");
                            o = parseInt(o), o--, cc.sys.localStorage.setItem("hc_4399_count", o)
                        } else 10001 === t.code ? (e.videoAdCall(1), console.log("\u64ad\u653e\u7ed3\u675f")) : console.log("\u5e7f\u544a\u5f02\u5e38")
                    })
                }
            }
        });
        e.exports = new n, cc._RF.pop()
    }, {}],
    AudioMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "21f58jcdpVGIKcjBg7TrqR6", "AudioMgr");
        var n = this && this.__extends || function() {
                var t = function(e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function(e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
                return a > 3 && c && Object.defineProperty(e, o, c), c
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            r = (a.property, function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.bgmAudioID = -1, e.bgmSwitch = 1, e._shockSwitch = 1, e.bgmurl = "sounds/homebg", e.bgmVideo = !0, e
                }
                var o;
                return n(e, t), o = e, e.getInstance = function() {
                    return null == o._instance && (o._instance = new o, o._instance.init(), cc.AudioMgr = o._instance), this._instance
                }, e.prototype.init = function() {
                    var t = this,
                        e = cc.sys.localStorage.getItem("myGameSound");
                    e ? (this.bgmSwitch = parseInt(e), cc.sys.localStorage.setItem("myGameSound", e)) : cc.sys.localStorage.setItem("myGameSound", 1);
                    var o = cc.sys.localStorage.getItem("myGameshock");
                    o ? this._shockSwitch = parseInt(o) : (this._shockSwitch = 1, cc.sys.localStorage.setItem("myGameshock", this._shockSwitch)), cc.game.on(cc.game.EVENT_HIDE, function() {
                        console.log("cc.audioEngine.stopAll"), cc.audioEngine.stopAll()
                    }), cc.game.on(cc.game.EVENT_SHOW, function() {
                        console.log("cc.audioEngine.resumeAll"), t.playBGM(t.bgmurl)
                    }), 1 == this.bgmSwitch && this.playBGM("sounds/homebg")
                }, e.prototype.playBGM = function(t) {
                    if (this.bgmurl = t, 0 != this.bgmVideo && 0 != this.bgmSwitch) {
                        this.bgmAudioID >= 0 && (cc.audioEngine.stopMusic(), this.bgmAudioID = -1);
                        var e = this;
                        cc.loader.loadRes(t, cc.AudioClip, function(t, o) {
                            t || (e.bgmAudioID = cc.audioEngine.playMusic(o, !0))
                        })
                    }
                }, e.prototype.playSFX = function(t) {
                    0 != this.bgmVideo && 0 != this.bgmSwitch && cc.loader.loadRes(t, cc.AudioClip, function(t, e) {
                        t || cc.audioEngine.play(e, !1, 1)
                    })
                }, e.prototype.setbgmSwitch = function(t) {
                    this.bgmSwitch != t && (this.bgmSwitch = t, cc.sys.localStorage.setItem("myGameSound", this.bgmSwitch), 1 == this.bgmSwitch ? this.playBGM(this.bgmurl) : cc.audioEngine.stopAll())
                }, e.prototype.setShockSwitch = function(t) {
                    this._shockSwitch = t, cc.sys.localStorage.setItem("myGameshock", this._shockSwitch)
                }, e.prototype.getbgmSwitch = function() {
                    return this.bgmSwitch
                }, e.prototype.getShockSwitch = function() {
                    return this._shockSwitch
                }, e.prototype.CtlAndioForAd = function(t) {
                    this.bgmVideo = t, 1 == t ? this.playBGM(this.bgmurl) : cc.audioEngine.pauseAll()
                }, e.prototype.pauseAll = function() {
                    cc.audioEngine.pauseAll()
                }, e.prototype.resumeAll = function() {
                    1 == this.bgmSwitch && cc.audioEngine.resumeAll()
                }, e.prototype.doShock = function() {
                    0 != this.bgmVideo && 1 == this._shockSwitch && cc.adCtl.doShock()
                }, e = o = i([c], e)
            }(cc.Component));
        o.default = r, cc._RF.pop()
    }, {}],
    BaiduAdManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "28154LsS2hAKK3FtpvPLj1p", "BaiduAdManager");
        cc.Class({
            extends: cc.Component,
            properties: {
                platform: "baidu",
                bannerAdCtrl: null,
                videoAdCtrl: null,
                videoAdCall: null,
                videoPath: "",
                recorderManager: null,
                _stopCallBack: !1,
                _shareCallBack: null,
                _recordTime: 0
            },
            initSDK: function() {
                window.swan ? this.platform = "baidu" : this.platform = "pc", this.initMyVideoAds()
            },
            showToast: function(t) {
                cc.log(t), "baidu" == this.platform && swan.showToast({
                    title: t,
                    icon: "none",
                    duration: 2e3
                })
            },
            initMyVideoAds: function() {
                if ("baidu" == this.platform) {
                    var t = this;
                    this.videoAdCtrl = swan.createRewardedVideoAd({
                        adUnitId: "6994410",
                        appSid: "c346dd75"
                    }), this.videoAdCtrl.onError(function(t) {
                        console.log("\u5e7f\u544a\u52a0\u8f7d\u51fa\u9519 " + t.errMsg)
                    }), this.videoAdCtrl.onLoad(function() {
                        console.log("\u52a0\u8f7d\u4e8b\u4ef6\u56de\u8c03")
                    }), this.videoAdCtrl.onClose(function(e) {
                        console.log("\u662f\u5426\u89c2\u770b\u5b8c\u6574\u4e86 " + e.isEnded), e.isEnded ? t.videoAdCall(1) : t.showToast("Không thể nhận được phần thưởng nếu chưa chơi xong")
                    })
                }
            },
            ShowMyVideoAds: function(t) {
                var e = this;
                if (console.log("ShowVideoAds \u4e8b\u4ef6\u56de\u8c03"), this.videoAdCall = t, "baidu" == this.platform) {
                    if (null == this.videoAdCtrl) return void this.videoAdCall(0);
                    this.videoAdCtrl.load().then(function() {
                        return e.videoAdCtrl.show()
                    }).catch(function(t) {
                        return console.log(t.errMsg)
                    })
                } else console.log("mycb\u4e8b\u4ef6\u56de\u8c03"), this.videoAdCall(1)
            },
            CloseBannerAds: function() {
                null != this.bannerAdCtrl && (this.bannerAdCtrl.destroy(), this.bannerAdCtrl = null)
            },
            ShowBannerAds: function() {
                var t = this,
                    e = this;
                if (this.resizeTime = 0, this.allScreen = !1, "baidu" == this.platform) {
                    null != this.bannerAdCtrl && this.bannerAdCtrl.destroy();
                    var o = {};
                    o.W = swan.getSystemInfoSync().windowWidth, o.H = swan.getSystemInfoSync().windowHeight, this.bannerAdCtrl = swan.createBannerAd({
                        adUnitId: "6994409",
                        appSid: "c346dd75",
                        style: {
                            left: 0,
                            top: o.H - 168.75,
                            width: 300
                        }
                    }), this.bannerAdCtrl.onResize(function(e) {
                        t.bannerAdCtrl.style.top = o.H - e.height, t.bannerAdCtrl.style.left = (o.W - e.width) / 2
                    }), this.bannerAdCtrl.style.width = 310, this.bannerAdCtrl.onLoad(function() {
                        console.log(" banner \u52a0\u8f7d\u5b8c\u6210"), e.bannerAdCtrl.show().then(function() {
                            console.log("\u5e7f\u544a\u663e\u793a\u6210\u529f")
                        }).catch(function(t) {
                            console.log("\u5e7f\u544a\u7ec4\u4ef6\u51fa\u73b0\u95ee\u9898", t)
                        })
                    }), this.bannerAdCtrl.onError(function(t) {
                        console.log(t)
                    }), console.log("\u51c6\u5907\u663e\u793abanner\u5e7f\u544a")
                }
            },
            openMiniGame: function() {
                swan.navigateToMiniProgram({
                    appKey: "GYdOhA5ISzOBuWTEcNGadsMlbBA1Dg62",
                    path: "",
                    extraData: {},
                    success: function(t) {
                        console.log("navigateToMiniProgram success", t)
                    },
                    fail: function(t) {
                        console.log("navigateToMiniProgram fail", t)
                    }
                })
            }
        }), cc._RF.pop()
    }, {}],
    BrickCtl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f1776BytWFId47mzkuA5ioZ", "BrickCtl");
        var n = this && this.__extends || function() {
                var t = function(e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function(e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
                return a > 3 && c && Object.defineProperty(e, o, c), c
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../enum/EnumData"),
            c = t("../view/GameResCtl"),
            r = t("../enum/gameData"),
            s = t("../utils/Emitter"),
            l = t("../utils/GameManager"),
            d = t("../utils/AudioMgr"),
            u = cc._decorator,
            h = u.ccclass,
            p = u.property,
            f = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.crackSprite = null, e.smallBrick = null, e.detailNode = null, e.rootNode = null, e._crashKind = 0, e._MaxHit = 3, e._curHit = 0, e._kind = 0, e._idx = 0, e._myGroupId = "", e._myGroupTarget = !1, e._isWaitBoom = !1, e._myBrickCtlPool = null, e._myShadow = null, e._myEffect = null, e._myNugget = null, e._mySpFrame = null, e._arrInfo = null, e
                }
                return n(e, t), e.prototype.onLoad = function() {
                    this.initSelf()
                }, e.prototype.setKind = function(t) {
                    this._kind = t
                }, e.prototype.setIdx = function(t) {
                    this._idx = t
                }, e.prototype.setShadow = function(t) {
                    this._myShadow = t
                }, e.prototype.setEffect = function(t) {
                    this._myEffect = t
                }, e.prototype.setNugget = function(t) {
                    this._myNugget = t
                }, e.prototype.setSpFrame = function(t) {
                    this._mySpFrame = t
                }, e.prototype.setGroupId = function(t, e) {
                    this._myGroupId = t, this._myGroupTarget = e
                }, e.prototype.setArrInfo = function(t) {
                    this._arrInfo = t
                }, e.prototype.setShowState = function(t) {
                    this._myShadow && (this._myShadow.active = t), this.node.active = t, this._myEffect && (this._myEffect.active = t)
                }, e.prototype.initSelf = function() {
                    this._isWaitBoom = !1, this.smallBrick.width = this.node.width, this.smallBrick.height = this.node.height, this.crackSprite.node.width = this.node.width, this.crackSprite.node.height = this.node.height, this.crackSprite.node.active = !1, this._crashKind = Math.floor(4 * Math.random()) + 1, this.smallBrick.getComponent(cc.Sprite).spriteFrame = this._mySpFrame;
                    var t = this._arrInfo[0];
                    this._MaxHit = l.default.getInstance().getBrickHp(t), this._curHit = 0;
                    var e = t % r.zoning.length,
                        o = r.zoning.Zones[e + ""].colorSet;
                    if (this.smallBrick.color = (new cc.Color).fromHEX("#" + o.mainColorHex), this._kind & a.BrickEnum.b_nugget && (this.node.zIndex = 10, this.smallBrick.color = (new cc.Color).fromHEX("#" + o.detailColorHex)), this._kind & a.BrickEnum.b_withDetail) {
                        this.detailNode.active = !0, this.detailNode.color = (new cc.Color).fromHEX("#" + o.detailColorHex);
                        var n = c.default.myGameResCtl.brickAtlas.getSpriteFrame("tileDetail_" + this._idx);
                        if (n) {
                            var i = n.getRect().width,
                                s = n.getRect().height,
                                d = .4 * this.node.height / s,
                                u = .4 * this.node.width / i,
                                h = d > u ? u : d;
                            h < 1 && (this.detailNode.scale = h), this.detailNode.getComponent(cc.Sprite).spriteFrame = n
                        }
                    } else this.detailNode.active = !1;
                    if (this._kind & a.BrickEnum.b_withdark && (this.node.zIndex = 2, this.smallBrick.color = (new cc.Color).fromHEX("#" + o.detailColorHex), this.detailNode.color = this.smallBrick.color), this._kind & a.BrickEnum.b_static && (this.node.zIndex = 3, this.smallBrick.color = (new cc.Color).fromHEX("#421919")), this._kind & a.BrickEnum.b_rubble) {
                        var p = Math.floor(4 * Math.random());
                        this.smallBrick.angle = -90 * p, this._myShadow.angle = -90 * p
                    }
                    this._kind & a.BrickEnum.b_end && (this.node.zIndex = 11, this.smallBrick.color = 0 == this._idx ? cc.Color.WHITE : cc.Color.BLACK)
                }, e.prototype.hitBrickAct = function() {
                    this.rootNode.y = 0, 0 == this.rootNode.getNumberOfRunningActions() && this.rootNode.runAction(cc.sequence(cc.moveBy(.2, cc.v2(0, -8)), cc.moveBy(.2, cc.v2(0, 8)))), 0 == this._myShadow.getNumberOfRunningActions() && this._myShadow.runAction(cc.sequence(cc.moveBy(.2, cc.v2(0, -8)), cc.moveBy(.2, cc.v2(0, 8)))), this.showCrash()
                }, e.prototype.checkHp = function(t) {
                    if (-1 == t) return this.removeBrick(), !1;
                    if (!this._isWaitBoom) {
                        if (!(this._kind & a.BrickEnum.b_static)) return this._curHit += t, this._curHit >= this._MaxHit ? ((this._kind & a.BrickEnum.b_end || this._kind & a.BrickEnum.b_group) && s.default.getInstance().emit("hit_group", {
                            groupid: this._myGroupId,
                            isHitTarget: this._myGroupTarget,
                            curTarget: this.node,
                            isEnd: this._kind & a.BrickEnum.b_end,
                            idx: this._idx
                        }), (this._kind & a.BrickEnum.b_end || this._kind & a.BrickEnum.b_group || this._kind & a.BrickEnum.b_nugget) && d.default.getInstance().doShock(), s.default.getInstance().emit("hit_effect", {
                            name: "Pieces",
                            pos: this.node.position,
                            color: this.smallBrick.color
                        }), this.removeBrick(), !0) : (this._kind & a.BrickEnum.b_nugget ? d.default.getInstance().playSFX("sounds/hit_gem") : this._kind & a.BrickEnum.b_group ? d.default.getInstance().playSFX("sounds/hit_treasure") : d.default.getInstance().playSFX("sounds/hit_brick"), this.hitBrickAct(), !1);
                        d.default.getInstance().playSFX("sounds/hit_unbreakable_block")
                    }
                }, e.prototype.setBoom = function(t) {
                    this._isWaitBoom = !0, this.scheduleOnce(function() {
                        this.checkHp(-1)
                    }, t)
                }, e.prototype.removeBrick = function() {
                    if (l.default.getInstance()._myMapDataArr["lv" + this._arrInfo[0]][this._arrInfo[2]][this._arrInfo[1]][0] = this._kind | a.BrickEnum.b_none, this._myShadow && this._myShadow.removeFromParent(), this._myNugget && this._myEffect) {
                        var t = [cc.scaleTo(.5, 1.5), cc.removeSelf()];
                        this._myNugget.runAction(cc.sequence(t));
                        var e = 50,
                            o = this._arrInfo[0];
                        e = e * o + 50, e = Math.floor(e * this._myNugget.scale);
                        var n = this.node.position,
                            i = cc.callFunc(function() {
                                d.default.getInstance().playSFX("sounds/gem_broken"), s.default.getInstance().emit("hit_effect", {
                                    name: "getNugget",
                                    pos: n,
                                    gem: e
                                })
                            }),
                            c = [cc.scaleTo(.5, 1.5), i, cc.removeSelf()];
                        this._myEffect.runAction(cc.sequence(c)), l.default.getInstance().addExp(r.expGetData.nugget)
                    } else d.default.getInstance().playSFX("sounds/hit_brick_break"), l.default.getInstance().addExp(r.expGetData.brick);
                    this.node.removeFromParent()
                }, e.prototype.showCrash = function() {
                    var t = 0;
                    t = this._curHit < .25 * this._MaxHit ? 1 : this._curHit < .5 * this._MaxHit ? 2 : this._curHit < .75 * this._MaxHit ? 3 : 4, this.crackSprite.node.active = !0, this.crackSprite.spriteFrame = c.default.myGameResCtl.brickAtlas.getSpriteFrame("tileCrack" + this._crashKind + "_" + t)
                }, e.prototype.reuse = function(t) {}, e.prototype.unuse = function() {}, i([p(cc.Sprite)], e.prototype, "crackSprite", void 0), i([p(cc.Node)], e.prototype, "smallBrick", void 0), i([p(cc.Node)], e.prototype, "detailNode", void 0), i([p(cc.Node)], e.prototype, "rootNode", void 0), e = i([h], e)
            }(cc.Component);
        o.default = f, cc._RF.pop()
    }, {
        "../enum/EnumData": "EnumData",
        "../enum/gameData": "gameData",
        "../utils/AudioMgr": "AudioMgr",
        "../utils/Emitter": "Emitter",
        "../utils/GameManager": "GameManager",
        "../view/GameResCtl": "GameResCtl"
    }],
    Emitter: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6a28ejVXrZJAoQIDs6+7/r4", "Emitter");
        var n = this && this.__extends || function() {
                var t = function(e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function(e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
                return a > 3 && c && Object.defineProperty(e, o, c), c
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            r = (a.property, function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.event_list = [], e
                }
                var o;
                return n(e, t), o = e, e.getInstance = function() {
                    return null == this._instance && (this._instance = new o), this._instance
                }, e.prototype.on = function(t, e, o) {
                    t && e && o && this.event_list.push({
                        eventName: t,
                        cb: e,
                        target: o
                    })
                }, e.prototype.emit = function(t, e) {
                    for (var o = 0; o < this.event_list.length; o++) this.event_list[o].eventName == t && this.event_list[o].cb.call(this.event_list[o].target, e)
                }, e.prototype.off = function(t, e) {
                    for (var o = this.event_list.length - 1; o >= 0; o--) this.event_list[o].eventName == t && this.event_list[o].target == e && this.event_list.splice(o, 1)
                }, e.prototype.emitOnce = function(t, e) {
                    for (var o = this.event_list.length - 1; o >= 0; o--)
                        if (this.event_list[o].eventName == t) return void this.event_list[o].cb.call(this.event_list[o].target, e)
                }, e = o = i([c], e)
            }(cc.Component));
        o.default = r, cc._RF.pop()
    }, {}],
    EnumData: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a503dLbfuVDooMOIOdKdK4c", "EnumData"), Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            function(t) {
                t[t.b_none = 1] = "b_none", t[t.b_ice = 2] = "b_ice", t[t.b_stone = 4] = "b_stone", t[t.b_rubble = 8] = "b_rubble", t[t.b_withdark = 16] = "b_withdark", t[t.b_withDetail = 32] = "b_withDetail", t[t.b_nugget = 64] = "b_nugget", t[t.b_static = 128] = "b_static", t[t.b_end = 256] = "b_end", t[t.b_group = 512] = "b_group"
            }(o.BrickEnum || (o.BrickEnum = {})), cc._RF.pop()
    }, {}],
    ExpLvNode: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "685cfhyp3tJkKGoap5/xBip", "ExpLvNode");
        var n = this && this.__extends || function() {
                var t = function(e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function(e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
                return a > 3 && c && Object.defineProperty(e, o, c), c
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../utils/GameManager"),
            c = cc._decorator,
            r = c.ccclass,
            s = c.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.expProgress = null, e.lvStart = null, e.lvEnd = null, e
                }
                return n(e, t), e.prototype.onLoad = function() {
                    this.schedule(function() {
                        this.expProgress.progress = a.default.getInstance().getExpPre();
                        var t = a.default.getInstance().getData("expLv");
                        this.lvStart.string = t, this.lvEnd.string = t + 1
                    }, .5)
                }, i([s(cc.ProgressBar)], e.prototype, "expProgress", void 0), i([s(cc.Label)], e.prototype, "lvStart", void 0), i([s(cc.Label)], e.prototype, "lvEnd", void 0), e = i([r], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {
        "../utils/GameManager": "GameManager"
    }],
    GameChannelCtl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "9e410ZNioVOTL8iLMBZMxQG", "GameChannelCtl");
        var n = t("MyChannelEnum");
        cc.Class({
            extends: cc.Component,
            properties: {
                MyChannel: {
                    default: [],
                    type: n
                },
                isAll: !1,
                isCull: !1
            },
            onLoad: function() {
                var t = !1;
                this.isAll ? t = !0 : this.MyChannel.forEach(function(e) {
                    cc.adCtl._curChannel == e && (t = !0)
                }), t && (t = cc.adCtl.testM4399T()), this.isCull && (t = !t), cc.adCtl._noneAd && (t = !1), this.node.active = t
            },
            start: function() {}
        }), cc._RF.pop()
    }, {
        MyChannelEnum: "MyChannelEnum"
    }],
    GameCtl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "2b0ef6Kw0ZM2IrbBHovnHbt", "GameCtl");
        var n = t("myGameEnum");
        cc.Class({
            extends: cc.Component,
            properties: {
                MyGame: {
                    default: n.gm_tf,
                    type: n
                }
            },
            onLoad: function() {
                this.node.active = cc.adCtl._curGame == this.MyGame
            },
            start: function() {}
        }), cc._RF.pop()
    }, {
        myGameEnum: "myGameEnum"
    }],
    GameManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ca66cnnPiZMCakbJSfSPjCH", "GameManager");
        var n = this && this.__extends || function() {
                var t = function(e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function(e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
                return a > 3 && c && Object.defineProperty(e, o, c), c
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../enum/gameData"),
            c = t("./Emitter"),
            r = cc._decorator,
            s = r.ccclass,
            l = (r.property, function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e._myRecordData = null, e._myMapDataArr = null, e._perCollection = null, e
                }
                var o;
                return n(e, t), o = e, e.getInstance = function() {
                    return null == o._instance && (o._instance = new o, o._instance.initData(), cc.GameManager = o._instance), o._instance
                }, e.prototype.initData = function() {
                    this._myMapDataArr = {};
                    var t = cc.sys.localStorage.getItem("HammerJumpdata");
                    t ? this._myRecordData = JSON.parse(t) : (this._myRecordData = {
                        selectWeapon: "0",
                        selfGold: 0,
                        curLevel: 0,
                        powerLv: 0,
                        expLv: 0,
                        expHad: 0,
                        unlockCollect: [],
                        getCollectAward: [],
                        curPos: []
                    }, this.savaMyData()), this.perloadCollection()
                }, e.prototype.savaMyData = function() {
                    cc.sys.localStorage.setItem("HammerJumpdata", JSON.stringify(this._myRecordData))
                }, e.prototype.getData = function(t) {
                    if (this._myRecordData.hasOwnProperty(t)) return this._myRecordData[t]
                }, e.prototype.setData = function(t, e) {
                    this._myRecordData[t] = e, this.savaMyData()
                }, e.prototype.showToast = function(t, e, o) {
                    void 0 === o && (o = 1), cc.loader.loadRes("plugs/GameTips", function(n, i) {
                        var a = cc.instantiate(i);
                        a.getComponent("GameTips").setTips(t), a.getComponent("GameTips").setCallBack(e), a.getComponent("GameTips").setBtnKind(o), cc.find("Canvas").addChild(a)
                    })
                }, e.prototype.addGold = function(t, e) {
                    void 0 === e && (e = !0);
                    var o = parseInt(t),
                        n = this.getData("selfGold");
                    n += o, e && this.showToast("Nhận " + t + " xu", null), this.setData("selfGold", n)
                }, e.prototype.addGoldOnly = function(t) {
                    var e = parseInt(t),
                        o = this.getData("selfGold");
                    o += e, this._myRecordData.selfGold = o
                }, e.prototype.expendGold = function(t) {
                    var e = parseInt(t),
                        o = this.getData("selfGold");
                    return !((o -= e) < 0) && (this.setData("selfGold", o), !0)
                }, e.prototype.selectWeapon = function(t) {
                    this._myRecordData.selectWeapon = t, this.savaMyData()
                }, e.prototype.unlockCollect = function(t) {
                    -1 == this._myRecordData.unlockCollect.indexOf(t + "") && (this._myRecordData.unlockCollect.push(t + ""), this.savaMyData())
                }, e.prototype.getCollectAward = function(t) {
                    -1 == this._myRecordData.getCollectAward.indexOf(t + "") && (this._myRecordData.getCollectAward.push(t + ""), this.savaMyData())
                }, e.prototype.addExp = function(t) {
                    var e = parseInt(t),
                        o = a.expData.expDefault * Math.pow(a.expData.expMult, this._myRecordData.expLv);
                    this._myRecordData.expHad += e, this._myRecordData.expHad > o && (this._myRecordData.expLv++, this._myRecordData.expHad = 0, c.default.getInstance().emit("uimanager", {
                        name: "showaward",
                        des: "Cấp hiện tại " + this._myRecordData.expLv,
                        title: "Lên cấp",
                        gold: 5e3,
                        type: "gold"
                    }))
                }, e.prototype.getExpPre = function() {
                    var t = a.expData.expDefault * Math.pow(a.expData.expMult, this._myRecordData.expLv);
                    return this._myRecordData.expHad / t
                }, e.prototype.upPowerLv = function() {
                    return !!this.expendGold(this.getPowerPrice()) && (this._myRecordData.powerLv++, this.savaMyData(), !0)
                }, e.prototype.getPowerHit = function() {
                    var t = a.powerData.powerHit * Math.pow(a.powerData.powerHitMult, this._myRecordData.powerLv);
                    return t = Math.floor(t)
                }, e.prototype.getPowerPrice = function() {
                    var t = a.powerData.powerPrice * Math.pow(a.powerData.powerPriceMult, this._myRecordData.powerLv);
                    return t = Math.floor(t)
                }, e.prototype.getBrickHp = function(t) {
                    var e = a.levelData.brickHp * Math.pow(a.levelData.brickHpMult, t);
                    return e = Math.floor(e)
                }, e.prototype.perloadCollection = function() {
                    this._perCollection = null;
                    var t = Math.floor(Math.random() * a.collectionData.length) + 1,
                        e = this;
                    cc.loader.loadRes("collection/c" + t + "_bw", cc.SpriteFrame, function(t, o) {
                        t && console.log("perloadCollection err", t), e._perCollection = o
                    })
                }, e.prototype.getMySpriteFrame = function(t) {
                    return new Promise(function(e, o) {
                        cc.loader.loadRes(t, cc.SpriteFrame, function(t, o) {
                            e(o)
                        })
                    })
                }, e.prototype.saveAllLevelData = function() {
                    for (var t in this._myMapDataArr)
                        if (this._myMapDataArr.hasOwnProperty(t)) {
                            var e = this._myMapDataArr[t];
                            cc.sys.localStorage.setItem("HammerJumpLevedata" + t, JSON.stringify(e))
                        }
                }, e.prototype.saveLevelData = function(t, e) {
                    this._myMapDataArr["lv" + t] = e, cc.sys.localStorage.setItem("HammerJumpLevedatalv" + t, JSON.stringify(e))
                }, e.prototype.getLevelData = function(t) {
                    if (this._myMapDataArr && this._myMapDataArr["lv" + t]) return this._myMapDataArr["lv" + t];
                    var e = cc.sys.localStorage.getItem("HammerJumpLevedatalv" + t);
                    return e ? (this._myMapDataArr["lv" + t] = JSON.parse(e), this._myMapDataArr["lv" + t]) : null
                }, e._instance = null, e = o = i([s], e)
            }(cc.Component));
        o.default = l, cc._RF.pop()
    }, {
        "../enum/gameData": "gameData",
        "./Emitter": "Emitter"
    }],
    GameResCtl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "aa8cbnuCrtK/4VhGj2yz7US", "GameResCtl");
        var n = this && this.__extends || function() {
                var t = function(e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function(e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
                return a > 3 && c && Object.defineProperty(e, o, c), c
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            r = a.property,
            s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.brickAtlas = null, e.weaponAtlas = null, e.weaponColorAtlas = null, e
                }
                var o;
                return n(e, t), o = e, e.prototype.onLoad = function() {
                    o.myGameResCtl = this
                }, e.myGameResCtl = null, i([r(cc.SpriteAtlas)], e.prototype, "brickAtlas", void 0), i([r(cc.SpriteAtlas)], e.prototype, "weaponAtlas", void 0), i([r(cc.SpriteAtlas)], e.prototype, "weaponColorAtlas", void 0), e = o = i([c], e)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {}],
    GameScene: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "89ef7qDSIpIgqVqGdTpPk5i", "GameScene");
        var n = this && this.__extends || function() {
                var t = function(e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function(e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
                return a > 3 && c && Object.defineProperty(e, o, c), c
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../utils/AudioMgr"),
            c = t("../utils/GameManager"),
            r = cc._decorator,
            s = r.ccclass,
            l = r.property,
            d = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.weaponNode = null, e.brickCamera = null, e._touchLoc = cc.v2(), e
                }
                return n(e, t), e.prototype.onLoad = function() {
                    var t = c.default.getInstance().getData("curPos");
                    t && 2 == t.length && (this.weaponNode.position = cc.v2(t[0], t[1])), this.schedule(function() {
                        1 == cc.adCtl.getDouyinAward() && (c.default.getInstance().showToast("Nhận 50.000 xu vàng"), c.default.getInstance().addGoldOnly(5e4))
                    }, 1), this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
                }, e.prototype.onDestroy = function() {
                    this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this), this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
                }, e.prototype.onTouchBegan = function(t) {
                    this._touchLoc = t.touch.getLocation(), this.hitTa(), this.schedule(this.reapetHit, .8)
                }, e.prototype.onTouchMove = function(t) {
                    this._touchLoc = t.touch.getLocation()
                }, e.prototype.onTouchEnd = function(t) {
                    this.unschedule(this.reapetHit), this.weaponNode.getComponent("WeaponCtl").overHit();
                    var e = this.weaponNode.getComponent(cc.RigidBody);
                    e.linearVelocity = e.linearVelocity.mulSelf(.5)
                }, e.prototype.reapetHit = function() {
                    this.hitTa()
                }, e.prototype.hitTa = function() {
                    if (0 != this.weaponNode.active) {
                        a.default.getInstance().playSFX("sounds/powerHit");
                        var t = this.brickCamera.getScreenToWorldPoint(this._touchLoc, cc.v2()),
                            e = this.weaponNode.convertToWorldSpaceAR(cc.v2()),
                            o = cc.v2(e.x, e.y),
                            n = cc.v2(t).sub(o);
                        this.weaponNode.angle = 180 * Math.atan2(n.y, n.x) / Math.PI - 90, this.weaponNode.getComponent("WeaponCtl").setHit();
                        n.mag();
                        var i = this.weaponNode.getComponent(cc.RigidBody),
                            c = n.normalize().mulSelf(2e3 * i.getMass());
                        i.angularVelocity = 0, i.linearVelocity = cc.v2(), i.applyLinearImpulse(c, i.getWorldCenter(), !0)
                    }
                }, i([l(cc.Node)], e.prototype, "weaponNode", void 0), i([l(cc.Camera)], e.prototype, "brickCamera", void 0), e = i([s], e)
            }(cc.Component);
        o.default = d, cc._RF.pop()
    }, {
        "../utils/AudioMgr": "AudioMgr",
        "../utils/GameManager": "GameManager"
    }],
    GameTips: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "169df57jPBNxLi14pWYe8vn", "GameTips");
        var n = this && this.__extends || function() {
                var t = function(e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function(e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
                return a > 3 && c && Object.defineProperty(e, o, c), c
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../utils/AudioMgr"),
            c = cc._decorator,
            r = c.ccclass,
            s = c.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.showLabel = null, e.btnNodeArr = [], e.myCallBack = null, e._showStr = null, e._kind = 0, e
                }
                return n(e, t), e.prototype.onLoad = function() {
                    this.showLabel.string = this._showStr, 1 == this._kind && (this.btnNodeArr[0].active = !1)
                }, e.prototype.setCallBack = function(t) {
                    this.myCallBack = t
                }, e.prototype.setTips = function(t) {
                    this._showStr = t
                }, e.prototype.setBtnKind = function(t) {
                    this._kind = t
                }, e.prototype.closeBtn = function() {
                    a.default.getInstance().playSFX("sounds/click"), this.myCallBack && this.myCallBack(0), this.node.removeFromParent()
                }, e.prototype.trueBtn = function() {
                    a.default.getInstance().playSFX("sounds/click"), this.myCallBack && this.myCallBack(1), this.node.removeFromParent()
                }, i([s(cc.Label)], e.prototype, "showLabel", void 0), i([s(cc.Node)], e.prototype, "btnNodeArr", void 0), e = i([r], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {
        "../utils/AudioMgr": "AudioMgr"
    }],
    GameUI: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "9bb93LQQbxE2Z3sj4cIfTGr", "GameUI");
        var n = this && this.__extends || function() {
                var t = function(e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function(e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
                return a > 3 && c && Object.defineProperty(e, o, c), c
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../utils/GameManager"),
            c = t("../enum/gameData"),
            r = t("../utils/Emitter"),
            s = t("../utils/AudioMgr"),
            l = cc._decorator,
            d = l.ccclass,
            u = l.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.hadGoldLabel = null, e.disLabel = null, e.weaponNode = null, e.settingNode = null, e.showAwardNode = null, e.showSkinNode = null, e.shareVideoNode = null, e._time = 30, e
                }
                return n(e, t), e.prototype.onLoad = function() {
                    this.refreshUI(), this.schedule(function() {
                        this.refreshUI()
                    }, .5), r.default.getInstance().on("uimanager", this.uiManager, this), 0 == cc.adCtl.testChannel(5) && this.uiManager({
                        name: "showaward",
                        des: "",
                        title: "Thưởng đăng nhập",
                        gold: 5e4,
                        type: "gold"
                    }), this.setShareVideoNode()
                }, e.prototype.setShareVideoNode = function() {
                    cc.adCtl.startRecord(), this.shareVideoNode.active = !1, this.scheduleOnce(function() {
                        cc.adCtl.testChannel(1) && (this.shareVideoNode.active = !0)
                    }, 5)
                }, e.prototype.doShowShare = function() {
                    var t = this;
                    cc.adCtl.endRecord(function(e) {
                        if (1 == e) {
                            var o = Math.floor(Math.random() * c.weaponInfo.length);
                            a.default.getInstance().selectWeapon(o + ""), r.default.getInstance().emit("uimanager", {
                                name: "selectweapon"
                            })
                        }
                        t.setShareVideoNode()
                    })
                }, e.prototype.refreshUI = function() {
                    this.hadGoldLabel.string = "$ " + a.default.getInstance().getData("selfGold");
                    var t = c.levelData.startHeightPer * cc.winSize.height,
                        e = this.weaponNode.y - t;
                    e > 0 && (e = 0), this.disLabel.string = Math.abs(Math.floor(.1 * e)) + " ft."
                }, e.prototype.uiManager = function(t) {
                    "doHit" == t.name ? this.weaponNode.getComponent("WeaponCtl").setPower(t.time) : "showaward" == t.name ? (this.setShowPop(this.showAwardNode), this.showAwardNode.getComponent("showAward").showUI(t)) : "showSkin" == t.name ? (this.setShowPop(this.showSkinNode), cc.adCtl.showInst()) : "selectweapon" == t.name && this.weaponNode.getComponent("WeaponCtl").refreshWeapon()
                }, e.prototype.settingBtn = function(t) {
                    s.default.getInstance().playSFX("sounds/button"), this.setShowPop(this.settingNode)
                }, e.prototype.onShareGameBtn = function(t) {
                    s.default.getInstance().playSFX("sounds/button"), cc.adCtl.shareGame()
                }, e.prototype.setShowPop = function(t) {
                    s.default.getInstance().playSFX("sounds/menu_in"), t.active = !0
                }, i([u(cc.Label)], e.prototype, "hadGoldLabel", void 0), i([u(cc.Label)], e.prototype, "disLabel", void 0), i([u(cc.Node)], e.prototype, "weaponNode", void 0), i([u(cc.Node)], e.prototype, "settingNode", void 0), i([u(cc.Node)], e.prototype, "showAwardNode", void 0), i([u(cc.Node)], e.prototype, "showSkinNode", void 0), i([u(cc.Node)], e.prototype, "shareVideoNode", void 0), e = i([d], e)
            }(cc.Component);
        o.default = h, cc._RF.pop()
    }, {
        "../enum/gameData": "gameData",
        "../utils/AudioMgr": "AudioMgr",
        "../utils/Emitter": "Emitter",
        "../utils/GameManager": "GameManager"
    }],
    HomeScene: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "2e44fPkCpNMCZCfHtA4H3Nl", "HomeScene");
        var n = this && this.__extends || function() {
                var t = function(e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function(e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
                return a > 3 && c && Object.defineProperty(e, o, c), c
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../utils/RigidRead"),
            c = cc._decorator,
            r = c.ccclass,
            s = (c.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return n(e, t), e.prototype.onLoad = function() {
                    var t = this;
                    cc.loader.loadRes("weapon/weaponRid", function(e, o) {
                        cc.loader.load(o.nativeUrl, function(e, o) {
                            a.default.getInstance().readPlist(o), t.preLoadMyScene()
                        })
                    })
                }, e.prototype.preLoadMyScene = function() {
                    var t = this;
                    cc.director.preloadScene("GameScene", function() {
                        t.doNextScene()
                    })
                }, e.prototype.doNextScene = function() {
                    this.scheduleOnce(function() {
                        cc.director.loadScene("GameScene")
                    }, 1)
                }, e = i([r], e)
            }(cc.Component));
        o.default = s, cc._RF.pop()
    }, {
        "../utils/RigidRead": "RigidRead"
    }],
    InitChannel: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "79fefsDmsRAPKRnUVlKrzWI", "InitChannel");
        var n = t("MyChannelEnum"),
            i = t("myGameEnum");
        cc.Class({
            extends: cc.Component,
            properties: {
                MyChannel: {
                    default: n.qd_android,
                    type: n
                },
                MyGame: {
                    default: i.gm_tf,
                    type: i
                }
            },
            onLoad: function() {
                null == cc.adCtl._curChannel && (cc.adCtl._curChannel = this.MyChannel, console.log("current channel ", this.MyChannel), cc.adCtl._curGame = this.MyGame, cc.adCtl._noneAd = cc.adCtl._curChannel == n.qd_noneAd, cc.adCtl.initSdk(), cc.adCtl.testChannel(3) && cc.thinkLandSw.initSDK())
            },
            start: function() {}
        }), cc._RF.pop()
    }, {
        MyChannelEnum: "MyChannelEnum",
        myGameEnum: "myGameEnum"
    }],
    MyAdCtl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a388f5c1UdJ7qPtBywXmH+1", "MyAdCtl");
        var n = t("MyChannelEnum"),
            i = cc.Class({
                name: "MyAdCtl",
                properties: {},
                ctor: function() {
                    this._curChannel = null, this._curGame = null, this._ttAd = null, this._oppoAndVivoAD = null, this._qqAd = null, this._m4399 = null, this._bdAD = null, this._mAndroid = null, this._isShare = !1, this._bannerDelay = 0, this._whiteState = !0, this._odds = null, this._timespan = null
                },
                initSdk: function() {
                    try {
                        if (this._curChannel == n.qd_mini_tt && window.tt) {
                            var e = t("TTAdManager");
                            this._ttAd = new e, this._ttAd.initSDK()
                        } else if (this._curChannel == n.qd_mini_shouq && window.qq) this._qqAd = t("QQAdManager"), this._qqAd.initSDK();
                        else if (this._curChannel == n.qd_mini_4399 && window.h5api) this._m4399 = t("4399AdManager"), this._m4399.initSDK();
                        else if (this._curChannel == n.qd_mini_baidu && window.swan) {
                            var o = t("BaiduAdManager");
                            this._bdAD = new o, this._bdAD.initSDK()
                        } else if (cc.sys.platform == cc.sys.VIVO_GAME || cc.sys.platform == cc.sys.OPPO_GAME) {
                            var i = t("myAdManager");
                            this._oppoAndVivoAD = i, this._oppoAndVivoAD.initAd()
                        } else if (this._curChannel == n.qd_mini_xiaomi && cc.sys.platform == cc.sys.XIAOMI_GAME) {
                            var a = t("xiaomiAdManager");
                            this._xiaomiAd = new a, this._xiaomiAd.initSDK()
                        } else if (cc.sys.os == cc.sys.OS_ANDROID) {
                            var c = t("androidManager");
                            this._mAndroid = new c, this._mAndroid.initSDK()
                        }
                    } catch (t) {
                        console.log(t)
                    }
                },
                testChannel: function(t) {
                    return this._curChannel == t
                },
                testM4399T: function() {
                    var t = !0;
                    if (cc.adCtl._curChannel == n.qd_mini_4399) {
                        cc.sys.localStorage.getItem("hc_4399_day") != (new Date).getDate() && (cc.sys.localStorage.setItem("hc_4399_day", (new Date).getDate()), cc.sys.localStorage.setItem("hc_4399_count", 10));
                        var e = cc.sys.localStorage.getItem("hc_4399_count"),
                            o = !1;
                        window.h5api && (o = window.h5api.canPlayAd()), t = o && e > 0
                    }
                    return t
                },
                getDouyinAward: function() {
                    return this._ttAd ? this._ttAd.getDouyinAward() : 0
                },
                showVideo: function(t) {
                    if (cc.adCtl._noneAd) t(1);
                    else if (null != this._ttAd) this._ttAd.ShowMyVideoAds(t);
                    else if (null != this._oppoAndVivoAD) this._oppoAndVivoAD.showRewardVideo(t);
                    else if (null != this._qqAd) this._qqAd.ShowMyVideoAds(t);
                    else if (null != this._m4399) {
                        var e = this;
                        cc.GameManager.showToast("Xem video quảng cáo?", function(o) {
                            1 == o && e._m4399.ShowMyVideoAds(t)
                        }, 0)
                    } else null != this._mAndroid ? (this._mAndroid.showAdInGame(2), this._mAndroid.setVideoCall(t)) : null != this._xiaomiAd ? this._xiaomiAd.ShowMyVideoAds(t) : null != this._bdAD ? this._bdAD.ShowMyVideoAds(t) : cc.sys.platform == cc.sys.DESKTOP_BROWSER && (console.log("---showVideo"), t(1))
                },
                showInst: function() {
                    null != this._oppoAndVivoAD ? this._oppoAndVivoAD.showInterstitialAd() : null != this._xiaomiAd ? this._xiaomiAd.showInstAd() : null != this._mAndroid ? this._mAndroid.showAdInGame(1) : null != this._ttAd && this._ttAd.showInst()
                },
                showBanner: function() {
                    var t = Math.floor((new Date).getTime() / 1e3);
                    this._bannerDelay > t || (this._bannerDelay = t, null != this._ttAd ? this._ttAd.ShowBannerAds() : null != this._qqAd ? this._qqAd.ShowBannerAds() : null != this._oppoAndVivoAD ? this._oppoAndVivoAD.showBanner() : null != this._bdAD && this._bdAD.ShowBannerAds())
                },
                HideBanner: function() {
                    var t = Math.floor((new Date).getTime() / 1e3) + 10;
                    this._bannerDelay = t, null != this._ttAd ? this._ttAd.CloseBannerAds() : null != this._qqAd ? this._qqAd.CloseBannerAds() : null != this._oppoAndVivoAD ? this._oppoAndVivoAD.hideBanner() : null != this._bdAD && this._bdAD.CloseBannerAds()
                },
                startRecord: function() {
                    null != this._ttAd && (this._isShare = !1, this._ttAd.StartRecordScreen()), cc.sys.platform == cc.sys.DESKTOP_BROWSER && console.log("---startRecord")
                },
                selfClipVideo: function() {
                    null != this._ttAd && this._ttAd.SelfClipVideo()
                },
                endRecord: function(t) {
                    if (null != this._ttAd) {
                        if (this._isShare) return void this._ttAd.showToast("Đã chia sẻ thành công!");
                        this._isShare = !0, this._ttAd.StopRecordScreen(t)
                    } else cc.sys.platform == cc.sys.DESKTOP_BROWSER && (console.log("---endRecord"), t(1))
                },
                shareRecord: function(t) {
                    if (null != this._ttAd) {
                        if (this._isShare) return void this._ttAd.showToast("Đã chia sẻ thành công!");
                        this._isShare = !0, this._ttAd.StopRecordScreen(t)
                    } else cc.sys.platform == cc.sys.DESKTOP_BROWSER && (console.log("---shareRecord"), t(1))
                },
                shareGame: function(t) {
                    null != this._ttAd ? this._ttAd.GameShare(t) : cc.sys.platform == cc.sys.DESKTOP_BROWSER && (console.log("---shareGame"), t())
                },
                moreGame: function() {
                    null != this._qqAd && this._qqAd.showAppBox()
                },
                moreGameState: function(t) {
                    null != this._ttAd && this._ttAd.moreGameState(t)
                },
                getNativeAdData: function() {
                    if (this._oppoAndVivoAD) return this._oppoAndVivoAD.getNativeAdData()
                },
                NativeAdEvent: function(t, e) {
                    this._oppoAndVivoAD && (1 == t ? this._oppoAndVivoAD.showNativeAd(e) : this._oppoAndVivoAD.clickNativeAd(e))
                },
                doShock: function() {
                    null != this._ttAd ? this._ttAd.doShock() : this._oppoAndVivoAD && this._oppoAndVivoAD.doShock()
                }
            });
        cc.adCtl = new i, e.exports = cc.adCtl, cc._RF.pop()
    }, {
        "4399AdManager": "4399AdManager",
        BaiduAdManager: "BaiduAdManager",
        MyChannelEnum: "MyChannelEnum",
        QQAdManager: "QQAdManager",
        TTAdManager: "TTAdManager",
        androidManager: "androidManager",
        myAdManager: "myAdManager",
        xiaomiAdManager: "xiaomiAdManager"
    }],
    MyChannelEnum: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "7946dXQrw1J4p4ROsikZ3Q+", "MyChannelEnum");
        var n = cc.Enum({
            qd_android: 0,
            qd_mini_tt: 1,
            qd_mini_oppo: 2,
            qd_mini_vivo: 3,
            qd_mini_shouq: 4,
            qd_mini_4399: 5,
            qd_mini_wechat: 6,
            qd_mini_xiaomi: 7,
            qd_mini_baidu: 8,
            qd_noneAd: 100
        });
        e.exports = n, cc._RF.pop()
    }, {}],
    NativeAdMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "e84bbX/kd5IU43xJ3IJnY9c", "NativeAdMgr"), cc.Class({
            extends: cc.Component,
            properties: {
                ad1Node: cc.Node,
                ad2Node: cc.Node,
                _curAdid: 0,
                _curData: null,
                _callBack: null
            },
            onLoad: function() {
                var t = "";
                this._curData.imgUrlList.length > 0 ? t = this._curData.imgUrlList[0] : this._curData.iconUrlList.length > 0 ? t = this._curData.iconUrlList[0] : this._curData.icon && (t = this._curData.icon), this.ad1Node.active = !0;
                var e = this.ad1Node.getChildByName("icon").getComponent(cc.Sprite),
                    o = this.ad1Node.getChildByName("title").getComponent(cc.Label),
                    n = this.ad1Node.getChildByName("des").getComponent(cc.Label);
                (o.string = this._curData.title, n.string = this._curData.desc, cc.loader.load(t, function(t, o) {
                    t ? console.log("showNativeAd load= " + t) : e.spriteFrame = new cc.SpriteFrame(o)
                }), 0 == cc.adCtl._whiteState) ? Math.floor(100 * Math.random()) <= cc.adCtl._odds && this.scheduleOnce(function() {
                    cc.adCtl.NativeAdEvent(2, this._curAdid)
                }, .5): cc.adCtl.showBanner()
            },
            onDestroy: function() {
                cc.adCtl.HideBanner()
            },
            setCallfun: function(t) {
                this._callBack = t
            },
            showWithData: function(t) {
                this._curAdid = t.adId, this._curData = t
            },
            btnCall: function(t, e) {
                if ("close" == e) {
                    Math.random();
                    cc.thinkLandSw.isCanAuto() && cc.adCtl.NativeAdEvent(2, this._curAdid), this.closeNode()
                } else "click2" == e || (cc.adCtl.NativeAdEvent(2, this._curAdid), this.closeNode())
            },
            closeNode: function() {
                this._callBack && this._callBack("0"), this.node.removeFromParent()
            }
        }), cc._RF.pop()
    }, {}],
    NativeIcon: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a1d94azPzhBXLY5S+cUWkYw", "NativeIcon"), cc.Class({
            extends: cc.Component,
            properties: {
                nativeIcon: cc.Sprite,
                nameLabel: cc.Label,
                _nativeAdId: 0
            },
            onLoad: function() {
                this.nativeIcon.node.active = !1;
                t("MyChannelEnum");
                this.node.on(cc.Node.EventType.TOUCH_START, this.btnTouch, this), this.scheduleOnce(function() {
                    this.showImage()
                }, 1), this.schedule(function() {
                    this.showImage()
                }, 10)
            },
            onDestroy: function() {
                this.node.off(cc.Node.EventType.TOUCH_START, this.btnTouch, this)
            },
            showImage: function() {
                var t = this,
                    e = cc.adCtl.getNativeAdData();
                if (null != e) {
                    var o = "";
                    e.iconUrlList && e.iconUrlList.length > 0 ? o = e.iconUrlList[0] : e.icon ? o = e.icon : e.imgUrlList && e.imgUrlList.length > 0 && (o = e.imgUrlList[0]), cc.loader.load(o, function(o, n) {
                        o ? console.log("showNativeAd icon load= " + o) : (cc.adCtl.NativeAdEvent(1, e.adId), t._nativeAdId = e.adId, t.nativeIcon.node.active = !0, t.nativeIcon.spriteFrame = new cc.SpriteFrame(n), t.nameLabel.string = e.title)
                    })
                }
            },
            btnTouch: function(t) {
                cc.adCtl.NativeAdEvent(2, this._nativeAdId)
            }
        }), cc._RF.pop()
    }, {
        MyChannelEnum: "MyChannelEnum"
    }],
    QQAdManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "1e203rE+chAwZHurO+9/vO/", "QQAdManager");
        var n = cc.Class({
            properties: {
                platform: "qq",
                bannerAdCtrl: null,
                videoAdCtrl: null,
                videoAdCall: null,
                videoPath: "",
                recorderManager: null,
                _stopCallBack: !1,
                _shareCallBack: null,
                _recordTime: 0
            },
            initSDK: function() {
                window.qq || (this.platform = "pc"), this.initMyVideoAds(), window.qq && (console.log("window.qq"), qq.showShareMenu({
                    showShareItems: ["qq", "qzone", "wechatFriends", "wechatMoment"]
                }), qq.onShareAppMessage(function() {
                    return {
                        title: "Đam mê chiến đấu, kích thích vô hạn",
                        imageUrl: "https://wyxmini.oss-cn-hangzhou.aliyuncs.com/%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%A1%94%E9%98%B2/share/share.jpg"
                    }
                }))
            },
            showToast: function(t) {
                cc.log(t), "qq" == this.platform && qq.showToast({
                    title: t,
                    icon: "none",
                    duration: 2e3
                })
            },
            initMyVideoAds: function() {
                if ("qq" == this.platform) {
                    0;
                    var t = this;
                    this.videoAdCtrl = qq.createRewardedVideoAd({
                        adUnitId: "5183943b108b17bc0f74e3da4205324e"
                    }), this.videoAdCtrl.onError(function(t) {
                        console.log("\u5e7f\u544a\u52a0\u8f7d\u51fa\u9519 " + t.errMsg)
                    }), this.videoAdCtrl.onLoad(function() {
                        console.log("\u52a0\u8f7d\u4e8b\u4ef6\u56de\u8c03")
                    }), this.videoAdCtrl.onClose(function(e) {
                        console.log("\u662f\u5426\u89c2\u770b\u5b8c\u6574\u4e86 " + e.isEnded), e.isEnded ? t.videoAdCall(1) : (t.videoAdCall(0), t.showToast("Không thể nhận được phần thưởng nếu chưa chơi xong"))
                    })
                }
            },
            ShowMyVideoAds: function(t) {
                var e = this;
                if (console.log("ShowVideoAds \u4e8b\u4ef6\u56de\u8c03"), this.videoAdCall = t, "qq" == this.platform) {
                    if (null == this.videoAdCtrl) return void this.videoAdCall(0);
                    this.videoAdCtrl.load().then(function() {
                        return e.videoAdCtrl.show()
                    }).catch(function(t) {
                        return console.log(t.errMsg)
                    })
                } else console.log("mycb\u4e8b\u4ef6\u56de\u8c03"), this.videoAdCall(0)
            },
            CloseBannerAds: function() {
                "qq" == this.platform && null != this.bannerAdCtrl && (this.bannerAdCtrl.destroy(), this.bannerAdCtrl = null)
            },
            ShowBannerAds: function() {
                var t = this;
                if (this.resizeTime = 0, this.allScreen = !1, "qq" == this.platform) {
                    0;
                    null != this.bannerAdCtrl && this.bannerAdCtrl.destroy();
                    var e = {};
                    e.W = qq.getSystemInfoSync().windowWidth, e.H = qq.getSystemInfoSync().windowHeight, this.bannerAdCtrl = qq.createBannerAd({
                        adUnitId: "5822209a213680e920307c0cc30213ab",
                        style: {
                            left: 0,
                            top: e.H - 128,
                            width: 300
                        }
                    });
                    this.bannerAdCtrl.onResize(function(o) {
                        t.bannerAdCtrl.style.left = .5 * (e.W - o.realWidth), t.bannerAdCtrl.style.top = e.H - o.height
                    }), t.bannerAdCtrl.style.width = 310, this.bannerAdCtrl.onLoad(function() {
                        console.log(" banner \u52a0\u8f7d\u5b8c\u6210"), t.bannerAdCtrl.show().then(function() {
                            console.log("\u5e7f\u544a\u663e\u793a\u6210\u529f")
                        }).catch(function(t) {
                            console.log("\u5e7f\u544a\u7ec4\u4ef6\u51fa\u73b0\u95ee\u9898", t)
                        })
                    }), this.bannerAdCtrl.onError(function(t) {
                        console.log(t)
                    }), console.log("\u51c6\u5907\u663e\u793abanner\u5e7f\u544a")
                }
            },
            showAppBox: function() {
                if ("qq" == this.platform) {
                    console.log("showAppBox");
                    try {
                        var t = qq.createAppBox({
                            adUnitId: "5f57734b1779037abe5bcbb241e25aa5"
                        });
                        t.load().then(function() {
                            console.log("showAppBox 2"), t.show()
                        })
                    } catch (t) {
                        console.log("showAppBox" + t)
                    }
                }
            }
        });
        e.exports = new n, cc._RF.pop()
    }, {}],
    RigidRead: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "7695b6NU1VKN7IakiMfA10t", "RigidRead");
        var n = this && this.__extends || function() {
                var t = function(e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function(e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
                return a > 3 && c && Object.defineProperty(e, o, c), c
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            r = (a.property, function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e._rigidData = {}, e
                }
                var o;
                return n(e, t), o = e, e.getInstance = function() {
                    return null == o._instance && (o._instance = new o), o._instance
                }, e.prototype.readPlist = function(t) {
                    var e = t.bodies,
                        o = 0;
                    do {
                        var n = "tools_" + o,
                            i = e.hasOwnProperty(n);
                        if (i) {
                            var a = e[n].fixtures[0];
                            if (this._rigidData[n] = {}, this._rigidData[n].fixture_type = a.fixture_type, "POLYGON" == a.fixture_type) {
                                for (var c = [], r = 0; r < a.polygons.length; r++) {
                                    for (var s = a.polygons[r], l = [], d = 0; d < s.length; d++) {
                                        var u = s[d],
                                            h = (u = u.substring(2, u.length - 2)).split(",");
                                        l.push(cc.v2(parseFloat(h[0]), parseFloat(h[1])))
                                    }
                                    c.push(l)
                                }
                                this._rigidData[n].polygons = c
                            } else "CIRCLE" == a.fixture_type && (this._rigidData[n].circle = a.circle.radius)
                        }
                        o++
                    } while (i)
                }, e.prototype.getRigidByIndex = function(t) {
                    var e = "tools_" + t;
                    if (this._rigidData.hasOwnProperty(e)) return this._rigidData[e]
                }, e._instance = null, e = o = i([c], e)
            }(cc.Component));
        o.default = r, cc._RF.pop()
    }, {}],
    SettingNode: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c5f06XErHhAeJi4H9n2TvcJ", "SettingNode");
        var n = this && this.__extends || function() {
                var t = function(e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function(e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
                return a > 3 && c && Object.defineProperty(e, o, c), c
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../utils/AudioMgr"),
            c = t("../enum/gameData"),
            r = t("../utils/GameManager"),
            s = t("../utils/Emitter"),
            l = cc._decorator,
            d = l.ccclass,
            u = l.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.collectionNode = null, e.collectionContent = null, e.settingNode = null, e._itemBarNode = null, e._getAwardArr = [], e
                }
                return n(e, t), e.prototype.onLoad = function() {
                    this._itemBarNode = this.collectionContent.getChildByName("itemBar"), this._itemBarNode.parent = null
                }, e.prototype.onDestroy = function() {}, e.prototype.onEnable = function() {
                    this.initCollectionNode(), cc.adCtl.showInst()
                }, e.prototype.initCollectionNode = function() {
                    this._getAwardArr = [];
                    for (var t = r.default.getInstance().getData("unlockCollect"), e = 0; e < c.collectionGroupData.length; e++) {
                        var o = e + 1 + "",
                            n = c.collectionGroupData.Group[o],
                            i = "Group" + o,
                            a = null;
                        this.collectionContent.getChildByName(i) ? a = this.collectionContent.getChildByName(i) : (a = cc.instantiate(this._itemBarNode), this.collectionContent.addChild(a), a.name = i), a.getChildByName("name").getComponent(cc.Label).string = n.name;
                        for (var s = n.need, l = 0, d = function(e) {
                                var o = a.getChildByName("item" + (e + 1)),
                                    n = t.indexOf(s[e]);
                                o.getChildByName("get").active = -1 != n, o.getChildByName("lock").active = -1 == n, o.getChildByName("image").color = -1 == n ? cc.Color.BLACK : cc.Color.WHITE, -1 != n && l++;
                                var i = o.getChildByName("image").getComponent(cc.Sprite),
                                    c = o.getChildByName("frame").getBoundingBox();
                                r.default.getInstance().getMySpriteFrame("collection/c" + s[e] + "_color").then(function(t) {
                                    var e = t.getRect().width,
                                        o = t.getRect().height,
                                        n = c.width / e,
                                        a = c.height / o;
                                    i.node.scale = n > a ? a : n, i.spriteFrame = t
                                })
                            }, u = 0; u < s.length; u++) d(u);
                        var h = a.getChildByName("item4");
                        h.getChildByName("get").active = 3 == l, h.getChildByName("open").active = 3 == l, h.getChildByName("lock").active = 3 != l, h.getChildByName("image").color = 3 != l ? cc.Color.BLACK : cc.Color.WHITE, 3 == l && this._getAwardArr.push({
                            name: n.name,
                            idx: o,
                            award: n.value
                        })
                    }
                    this.showAwardFrame()
                }, e.prototype.showAwardFrame = function() {
                    if (this._getAwardArr.length > 0) {
                        var t = this._getAwardArr.shift(); - 1 == r.default.getInstance().getData("getCollectAward").indexOf(t.idx) ? (r.default.getInstance().getCollectAward(t.idx), s.default.getInstance().emit("uimanager", {
                            name: "showaward",
                            des: t.name,
                            title: "Bộ sưu tập đã hoàn thành",
                            gold: t.award,
                            type: "collectionaward",
                            callback: this.refreshUI,
                            target: this
                        })) : this.showAwardFrame()
                    }
                }, e.prototype.refreshUI = function() {
                    this.showAwardFrame()
                }, e.prototype.selectBtn = function(t) {
                    a.default.getInstance().playSFX("sounds/button"), "collection" == t.target.name ? (this.collectionNode.active = !0, this.settingNode.active = !1) : "setting" == t.target.name && (this.collectionNode.active = !1, this.settingNode.active = !0, this.settingNode.getChildByName("soundToggle").getComponent(cc.Toggle).isChecked = 1 == a.default.getInstance().getbgmSwitch(), this.settingNode.getChildByName("shockToggle").getComponent(cc.Toggle).isChecked = 1 == a.default.getInstance().getShockSwitch())
                }, e.prototype.closeBtn = function(t) {
                    a.default.getInstance().playSFX("sounds/menu_out"), this.node.active = !1
                }, e.prototype.soundSwBtn = function(t) {
                    a.default.getInstance().playSFX("sounds/button"), a.default.getInstance().setbgmSwitch(t.isChecked ? 1 : 0)
                }, e.prototype.shockSwBtn = function(t) {
                    a.default.getInstance().setShockSwitch(t.isChecked ? 1 : 0)
                }, i([u(cc.Node)], e.prototype, "collectionNode", void 0), i([u(cc.Node)], e.prototype, "collectionContent", void 0), i([u(cc.Node)], e.prototype, "settingNode", void 0), e = i([d], e)
            }(cc.Component);
        o.default = h, cc._RF.pop()
    }, {
        "../enum/gameData": "gameData",
        "../utils/AudioMgr": "AudioMgr",
        "../utils/Emitter": "Emitter",
        "../utils/GameManager": "GameManager"
    }],
    ShowBanner: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "99a4dMMnotEgLypvQG9nStK", "ShowBanner");
        var n = t("MyChannelEnum");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onEnable: function() {
                cc.adCtl.showBanner()
            },
            onDisable: function() {
                cc.adCtl._curChannel != n.qd_mini_vivo && cc.adCtl.HideBanner()
            },
            onDestroy: function() {
                cc.adCtl._curChannel != n.qd_mini_vivo && cc.adCtl.HideBanner()
            }
        }), cc._RF.pop()
    }, {
        MyChannelEnum: "MyChannelEnum"
    }],
    SkinNode: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "e7732RQj25AWr912EHA6LhH", "SkinNode");
        var n = this && this.__extends || function() {
                var t = function(e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function(e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
                return a > 3 && c && Object.defineProperty(e, o, c), c
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../enum/gameData"),
            c = t("../utils/GameManager"),
            r = t("./GameResCtl"),
            s = t("../utils/Emitter"),
            l = t("../utils/AudioMgr"),
            d = cc._decorator,
            u = d.ccclass,
            h = d.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.headFrame = null, e.rootContent = null, e.titleLabel = null, e.mPageView = null, e._recordName = [], e._recordNoLottery = [], e._curIndex = 0, e
                }
                return n(e, t), e.prototype.onEnable = function() {
                    this._curIndex = 3, this.mPageView.scrollToPage(this._curIndex - 1, .1), this.initSkinNode()
                }, e.prototype.initSkinNode = function() {
                    for (var t = c.default.getInstance().getData("powerLv"), e = c.default.getInstance().getData("expLv"), o = c.default.getInstance().getData("selectWeapon"), n = 0; n < a.weaponInfo.data.length; n++) {
                        var i = a.weaponInfo.data[n],
                            s = this.rootContent.getChildByName("page_" + (n + 1));
                        if (s.getChildByName("des").getComponent(cc.Label).string = i.description, i.hasOwnProperty("slots"))
                            for (var l = s.getChildByName("frame"), d = l.getChildByName("item1"), u = 0; u < i.slots.length; u++) {
                                var h = i.slots[u],
                                    p = l.getChildByName("newitem" + (u + 1));
                                if (!p) {
                                    (p = cc.instantiate(d)).active = !0, p.name = "newitem" + (u + 1), l.addChild(p), p.getChildByName("unlockun").getChildByName("image").getComponent(cc.Sprite).spriteFrame = r.default.myGameResCtl.weaponAtlas.getSpriteFrame("tools_" + h.id);
                                    var f = new cc.Component.EventHandler;
                                    f.target = this.node, f.component = "SkinNode", f.handler = "selectBtn", f.customEventData = h.id, p.getComponent(cc.Button).clickEvents.push(f)
                                }
                                this._recordNoLottery.length < 18 && this._recordNoLottery.push(parseInt(h.id));
                                var m = 0;
                                "powerLevel" == h.unlockTypeId ? m = t : "level" == h.unlockTypeId && (m = e);
                                var _ = p.getChildByName("lockun");
                                m >= h.unlockRequirement ? (_.active = !1, p.getChildByName("select").active = o == h.id, p.getComponent(cc.Button).interactable = !0) : (p.getComponent(cc.Button).interactable = !1, _.active = !0, _.getComponentInChildren(cc.ProgressBar).progress = m / h.unlockRequirement, _.getComponentInChildren(cc.Label).string = "lvl " + m + "/" + h.unlockRequirement)
                            }
                        this._recordName.length < 3 && this._recordName.push({
                            name: i.name,
                            color: i.headerColor
                        })
                    }
                }, e.prototype.showUI = function() {
                    this.titleLabel.string = this._recordName[this._curIndex - 1].name, this.headFrame.color = (new cc.Color).fromHEX("#" + this._recordName[this._curIndex - 1].color)
                }, e.prototype.selectBtn = function(t, e) {
                    l.default.getInstance().playSFX("sounds/button"), this.selectWeapon(e)
                }, e.prototype.closeBtn = function(t) {
                    l.default.getInstance().playSFX("sounds/menu_out"), this.node.active = !1
                }, e.prototype.pageViewCall = function(t, e) {
                    e === cc.PageView.EventType.PAGE_TURNING && (this._curIndex = t.getCurrentPageIndex() + 1, this.showUI())
                }, e.prototype.arrowBtn = function(t, e) {
                    l.default.getInstance().playSFX("sounds/button"), e > 0 ? (this._curIndex++, this.rootContent.childrenCount < this._curIndex && (this._curIndex = this.rootContent.childrenCount)) : (this._curIndex--, this._curIndex < 1 && (this._curIndex = 1)), this.mPageView.scrollToPage(this._curIndex - 1, .1), this.showUI()
                }, e.prototype.videoLottery = function(t) {
                    l.default.getInstance().playSFX("sounds/button");
                    var e = this;
                    cc.adCtl.showVideo(function(t) {
                        1 == t && e.lotteryWeapon()
                    })
                }, e.prototype.selectWeapon = function(t) {
                    c.default.getInstance().selectWeapon(t), s.default.getInstance().emit("uimanager", {
                        name: "selectweapon"
                    }), this.node.active = !1
                }, e.prototype.lotteryWeapon = function() {
                    var t = Math.floor(Math.random() * a.weaponInfo.length); - 1 == this._recordNoLottery.indexOf(t) ? this.selectWeapon(t + "") : this.lotteryWeapon()
                }, i([h(cc.Node)], e.prototype, "headFrame", void 0), i([h(cc.Node)], e.prototype, "rootContent", void 0), i([h(cc.Label)], e.prototype, "titleLabel", void 0), i([h(cc.PageView)], e.prototype, "mPageView", void 0), e = i([u], e)
            }(cc.Component);
        o.default = p, cc._RF.pop()
    }, {
        "../enum/gameData": "gameData",
        "../utils/AudioMgr": "AudioMgr",
        "../utils/Emitter": "Emitter",
        "../utils/GameManager": "GameManager",
        "./GameResCtl": "GameResCtl"
    }],
    TTAdManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f16b4wmOIFCHbs0eEJhysuO", "TTAdManager");
        cc.Class({
            extends: cc.Component,
            properties: {
                platform: "tt",
                bannerAdCtrl: null,
                videoAdCtrl: null,
                videoAdCall: null,
                videoPath: "",
                recorderManager: null,
                _stopCallBack: null,
                _shareCallBack: null,
                _recordTime: 0,
                _isRecordState: 0,
                _moreGameBtn: null,
                clipIndexList: [],
                _curScene1: 0,
                _curScene2: 0,
                _curAppName: ""
            },
            initSDK: function() {
                window.tt || (this.platform = "pc"), this.initDouyin(), this.initMyVideoAds(), this.myMoreGame()
            },
            initDouyin: function() {
                if (window.tt) try {
                    var t = tt.getSystemInfoSync();
                    this._curAppName = t.appName, console.log("sysData ", t);
                    var e = this,
                        o = tt.getLaunchOptionsSync();
                    this._curScene1 = o.scene, console.log("_ttData", o), tt.onShow(function(t) {
                        e._curScene2 = t.scene, console.log("onShow", t)
                    })
                } catch (t) {
                    console.log("\u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f\u5931\u8d25")
                }
            },
            getDouyinAward: function() {
                if ("021001" == this._curScene1 || "021001" == this._curScene2) {
                    console.log("this._curScene1 ", this._curScene1, this._curScene2);
                    var t = (new Date).getDate(),
                        e = cc.sys.localStorage.getItem("sl_douyin_award");
                    return e && e == t ? 0 : (cc.sys.localStorage.setItem("sl_douyin_award", t), 1)
                }
                return 0
            },
            miniLogin: function() {
                var t = this;
                "tt" == this.platform && tt.login({
                    success: function(t) {},
                    fail: function(e) {
                        tt.showModal({
                            title: "Đăng nhập thất bại",
                            content: "Đăng nhập lại?",
                            cancelText: "Tiếp tục trò chơi",
                            success: function(e) {
                                e.confirm ? (console.log("Bấm OK"), t.miniLogin()) : e.cancel && console.log("Bấm Hủy")
                            }
                        })
                    }
                })
            },
            showToast: function(t) {
                cc.log(t), "tt" == this.platform && tt.showToast({
                    title: t,
                    icon: "none",
                    duration: 2e3
                })
            },
            showInst: function() {
                if ("Toutiao" === tt.getSystemInfoSync().appName) {
                    var t = tt.createInterstitialAd({
                        adUnitId: "25jdolgg1n495ifc6b"
                    });
                    t.load().then(function() {
                        t.show()
                    }).catch(function(t) {
                        console.log(t)
                    })
                }
            },
            initMyVideoAds: function() {
                if ("tt" == this.platform) {
                    var t = this;
                    this.videoAdCtrl = tt.createRewardedVideoAd({
                        adUnitId: "15cm8nns5gpdk43d37"
                    }), this.videoAdCtrl.onError(function(t) {
                        console.log("\u5e7f\u544a\u52a0\u8f7d\u51fa\u9519 " + t.errMsg)
                    }), this.videoAdCtrl.onLoad(function() {
                        console.log("\u52a0\u8f7d\u4e8b\u4ef6\u56de\u8c03")
                    }), this.videoAdCtrl.onClose(function(e) {
                        console.log("\u662f\u5426\u89c2\u770b\u5b8c\u6574\u4e86 " + e.isEnded), t.videoAdCall && (e.isEnded ? t.videoAdCall(1) : t.videoAdCall(0))
                    })
                }
            },
            ShowMyVideoAds: function(t) {
                var e = this;
                console.log("ShowVideoAds \u4e8b\u4ef6\u56de\u8c03"), this.videoAdCall = t;
                var o = this;
                if ("tt" == this.platform) {
                    if (null == this.videoAdCtrl) return this.videoAdCall(1), void o.showToast("Quảng cáo thất bại, hãy kiểm tra mạng hoặc thử lại");
                    this.videoAdCtrl.load().then(function() {
                        return e.videoAdCtrl.show()
                    }).catch(function(t) {
                        console.log(t.errMsg), o.showToast("Quảng cáo thất bại, hãy kiểm tra mạng hoặc thử lại")
                    })
                } else console.log("mycb\u4e8b\u4ef6\u56de\u8c03"), cc.sys.platform == cc.sys.DESKTOP_BROWSER && this.videoAdCall(1)
            },
            CloseBannerAds: function() {
                null != this.bannerAdCtrl && (this.bannerAdCtrl.destroy(), this.bannerAdCtrl = null)
            },
            ShowBannerAds: function() {
                var t = this,
                    e = this;
                if (this.resizeTime = 0, this.allScreen = !1, "tt" == this.platform) {
                    null != this.bannerAdCtrl && this.bannerAdCtrl.destroy();
                    var o = {};
                    o.W = tt.getSystemInfoSync().windowWidth, o.H = tt.getSystemInfoSync().windowHeight, this.bannerAdCtrl = tt.createBannerAd({
                        adUnitId: "36o5ke82ste5ia43j1",
                        style: {
                            left: 0,
                            top: o.H - 168.75,
                            width: 300
                        }
                    }), this.bannerAdCtrl.onResize(function(e) {
                        t.bannerAdCtrl.style.top = o.H - e.height, t.bannerAdCtrl.style.left = (o.W - e.width) / 2
                    }), this.bannerAdCtrl.style.width = 310, this.bannerAdCtrl.onLoad(function() {
                        console.log(" banner \u52a0\u8f7d\u5b8c\u6210"), e.bannerAdCtrl.show().then(function() {
                            console.log("\u5e7f\u544a\u663e\u793a\u6210\u529f")
                        }).catch(function(t) {
                            console.log("\u5e7f\u544a\u7ec4\u4ef6\u51fa\u73b0\u95ee\u9898", t)
                        })
                    }), this.bannerAdCtrl.onError(function(t) {
                        console.log(t)
                    }), console.log("\u51c6\u5907\u663e\u793abanner\u5e7f\u544a")
                }
            },
            GameShare: function(t) {
                console.log("\u51c6\u5907GameShare"), "tt" == this.platform ? tt.shareAppMessage({
                    templateId: "35bk3jihhaj52cn2pd",
                    query: "",
                    success: function() {
                        t(), console.log("\u5206\u4eab\u89c6\u6210\u529f")
                    },
                    fail: function(t) {
                        console.log("\u5206\u4eab\u89c6\u5931\u8d25" + JSON.stringify(t))
                    }
                }) : t()
            },
            StartRecordScreen: function() {
                var t = this;
                if ("tt" == this.platform) {
                    if (1 == this._isRecordState) return;
                    this.clipIndexList = [], this.videoPath = "", null == this.recorderManager && (this.recorderManager = tt.getGameRecorderManager(), this.recorderManager.onStart(function(e) {
                        console.log("\u5f55\u5236\u5f00\u59cb\u4e86: " + e), t._recordTime = Math.floor(.001 * (new Date).getTime()), t._isRecordState = 1
                    }), this.recorderManager.onStop(function(e) {
                        console.log("\u5f55\u5236\u7ed3\u675f\u4e86: " + e.videoPath), Math.floor(.001 * (new Date).getTime()) - t._recordTime < 4 ? (t.showToast("Quay màn hình thất bại, thời gian quay ngắn hơn 3s"), null != t._stopCallBack && (t._stopCallBack(0), t._stopCallBack = null)) : (t.videoPath = e.videoPath, 0 != t.clipIndexList.length ? (t.clipIndexList.length > 5 && t.clipIndexList.splice(5, t.clipIndexList.length - 5), t.recorderManager.clipVideo({
                            path: t.videoPath,
                            clipRange: t.clipIndexList,
                            success: function(e) {
                                t.videoPath = e.videoPath, null != t._stopCallBack && t.ShareRecordScreen(function(e) {
                                    t._stopCallBack(e), t._stopCallBack = null
                                }), console.log(e.videoPath)
                            },
                            fail: function(t) {
                                console.error(t)
                            }
                        })) : null != t._stopCallBack && t.ShareRecordScreen(function(e) {
                            t._stopCallBack(e), t._stopCallBack = null
                        })), t._isRecordState = 0
                    }), this.recorderManager.onPause(function() {
                        console.log("\u5f55\u5236\u6682\u505c\u4e86")
                    }), this.recorderManager.onResume(function() {
                        console.log("\u5f55\u5236\u6062\u590d\u4e86")
                    }), this.recorderManager.onError(function(e) {
                        t.showToast(e), t._isRecordState = 0, console.log("\u5f55\u5236\u51fa\u9519\u4e86:" + e)
                    })), this.recorderManager.start({
                        duration: 300
                    })
                } else cc.sys.platform, cc.sys.DESKTOP_BROWSER
            },
            SelfClipVideo: function() {
                if (this.recorderManager && 1 == this._isRecordState) {
                    var t = this;
                    this.recorderManager.recordClip({
                        timeRange: [1, 2],
                        success: function(e) {
                            console.log(e.index), t.clipIndexList.push(e.index)
                        }
                    })
                }
            },
            StopRecordScreen: function(t) {
                if (this._stopCallBack = t, "tt" == this.platform) {
                    if (null == this.recorderManager) return this.showToast("Lỗi chia sẻ, hãy thử lại"), this._isRecordState = 0, this._stopCallBack(0), void(this._stopCallBack = null);
                    if (console.log("\u505c\u6b62\u5f55\u5236"), "" != this.videoPath && "0" != this.videoPath) {
                        var e = this;
                        e.ShareRecordScreen(function(t) {
                            null != e._stopCallBack && (e._stopCallBack(t), e._stopCallBack = null)
                        })
                    } else this.recorderManager.stop()
                } else cc.sys.platform == cc.sys.DESKTOP_BROWSER && null != this._stopCallBack && (this._stopCallBack(1), this._stopCallBack = null)
            },
            ShareRecordScreen: function(t) {
                this._shareCallBack = t;
                var e = this;
                if ("tt" == this.platform) {
                    if (null == this.recorderManager || "" == this.videoPath) return e.showToast("Quay màn hình thất bại, thời gian quay ngắn hơn 3s"), void(this._shareCallBack && this._shareCallBack(0));
                    if ("0" == this.videoPath) return void e.showToast("Đã chia sẻ!");
                    console.log("\u5206\u4eab\u5f55\u5236\u7684\u89c6\u9891"), tt.shareAppMessage({
                        channel: "video",
                        title: "Không giới hạn!",
                        imageUrl: "",
                        query: "",
                        extra: {
                            videoPath: this.videoPath,
                            videoTopics: ["\u5927\u952480"]
                        },
                        success: function() {
                            e.showToast("Chia sẻ thành công"), e._shareCallBack && e._shareCallBack(1), e.videoPath = "0", console.log("Chia sẻ thành công")
                        },
                        fail: function(t) {
                            e.showToast("Lỗi chia sẻ video"), e._shareCallBack && e._shareCallBack(0), console.log("Lỗi chia sẻ video" + JSON.stringify(t))
                        }
                    })
                } else this._shareCallBack(1)
            },
            doShock: function() {
                "tt" == this.platform && tt.vibrateShort({
                    success: function(t) {},
                    fail: function(t) {}
                })
            },
            myMoreGame: function() {
                if ("tt" == this.platform) {
                    var t = cc.url.raw("resources/moregame.png");
                    cc.loader.md5Pipe && (t = cc.loader.md5Pipe.transformURL(t));
                    var e = {};
                    e.W = tt.getSystemInfoSync().windowWidth, e.H = tt.getSystemInfoSync().windowHeight, this._moreGameBtn = tt.createMoreGamesButton({
                        type: "image",
                        image: t,
                        style: {
                            left: 20,
                            top: .3 * e.H,
                            width: 62,
                            height: 122 * .4,
                            lineHeight: 40,
                            backgroundColor: "#ff0000",
                            textColor: "#ffffff",
                            textAlign: "center",
                            fontSize: 16,
                            borderRadius: 4,
                            borderWidth: 0,
                            borderColor: "#ff0000"
                        },
                        appLaunchOptions: [{
                            appId: "tte8309e8d771adfd6",
                            query: "foo=bar&baz=qux",
                            extraData: {}
                        }],
                        onNavigateToMiniGame: function(t) {
                            console.log("\u8df3\u8f6c\u5176\u4ed6\u5c0f\u6e38\u620f", t)
                        }
                    }), this._moreGameBtn.onTap(function() {
                        console.log("\u70b9\u51fb\u66f4\u591a\u6e38\u620f")
                    })
                }
            },
            moreGameState: function(t) {
                this._moreGameBtn || 1 != t ? 1 == t ? this._moreGameBtn.show() : this._moreGameBtn.hide() : this.myMoreGame()
            }
        }), cc._RF.pop()
    }, {}],
    UnderBar: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "84d3czddn9J9LhyXzKhdniX", "UnderBar");
        var n = this && this.__extends || function() {
                var t = function(e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function(e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
                return a > 3 && c && Object.defineProperty(e, o, c), c
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../utils/GameManager"),
            c = t("../utils/Emitter"),
            r = t("../utils/AudioMgr"),
            s = cc._decorator,
            l = s.ccclass,
            d = s.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.powLvlabel = null, e.powLvPrice = null, e.timeDownLabel = null, e.upPowerNode = null, e._downTime = 0, e
                }
                return n(e, t), e.prototype.onLoad = function() {
                    this.refreshUI(), this.schedule(this.timeDownCall, 1), this.upPowerNode.runAction(cc.sequence(cc.scaleTo(.2, 1.1), cc.scaleTo(.2, 1), cc.scaleTo(.2, 1.1), cc.scaleTo(.2, 1), cc.delayTime(10)).repeatForever())
                }, e.prototype.refreshUI = function() {
                    this.powLvlabel.string = "lvl " + a.default.getInstance().getData("powerLv"), this.powLvPrice.string = "Xu " + a.default.getInstance().getPowerPrice()
                }, e.prototype.powerUpBtn = function(t) {
                    a.default.getInstance().upPowerLv() ? (r.default.getInstance().playSFX("sounds/tool_upgrade"), this.refreshUI()) : (r.default.getInstance().playSFX("sounds/button"), cc.adCtl.testM4399T() && c.default.getInstance().emit("uimanager", {
                        name: "showaward",
                        des: "Miễn phí",
                        title: "Thiếu xu",
                        gold: 5e4,
                        type: "freecoin"
                    }))
                }, e.prototype.skinBtn = function(t) {
                    r.default.getInstance().playSFX("sounds/button"), c.default.getInstance().emit("uimanager", {
                        name: "showSkin"
                    })
                }, e.prototype.doHitBtn = function(t) {
                    r.default.getInstance().playSFX("sounds/button");
                    var e = this;
                    cc.adCtl.showVideo(function(o) {
                        1 == o && (t.target.active = !1, c.default.getInstance().emit("uimanager", {
                            name: "doHit",
                            time: 20
                        }), e.timeDownLabel.string = "00:20", e._downTime = 20, e.scheduleOnce(function() {
                            t.target.active = !0
                        }, 20))
                    })
                }, e.prototype.timeDownCall = function() {
                    0 != this._downTime && (this._downTime--, this.timeDownLabel.string = "00:" + this.PrefixZero(this._downTime))
                }, e.prototype.PrefixZero = function(t, e) {
                    return void 0 === e && (e = 2), (Array(e).join("0") + t).slice(-e)
                }, i([d(cc.Label)], e.prototype, "powLvlabel", void 0), i([d(cc.Label)], e.prototype, "powLvPrice", void 0), i([d(cc.Label)], e.prototype, "timeDownLabel", void 0), i([d(cc.Node)], e.prototype, "upPowerNode", void 0), e = i([l], e)
            }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {
        "../utils/AudioMgr": "AudioMgr",
        "../utils/Emitter": "Emitter",
        "../utils/GameManager": "GameManager"
    }],
    WeaponCtl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6f408NJmZNCNrpEW9LvGNtK", "WeaponCtl");
        var n = this && this.__extends || function() {
                var t = function(e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function(e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
                return a > 3 && c && Object.defineProperty(e, o, c), c
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../utils/GameManager"),
            c = t("../utils/RigidRead"),
            r = t("../view/GameResCtl"),
            s = t("../utils/AudioMgr"),
            l = cc._decorator,
            d = l.ccclass,
            u = l.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.brickCameraNode = null, e.brickWallNode = null, e.hitTail = null, e.ringNode = null, e.toolglow = null, e._isGlow = !1, e._canPassCount = 0, e._cameraX = 0, e
                }
                return n(e, t), e.prototype.onLoad = function() {
                    this.toolglow.node.active = !1, this.ringNode.children[0].runAction(cc.sequence(cc.scaleTo(1, 1), cc.hide(), cc.scaleTo(.01, .1), cc.show()).repeatForever()), this.refreshWeapon(), this._cameraX = this.brickCameraNode.x
                }, e.prototype.refreshWeapon = function() {
                    s.default.getInstance().doShock(), this.node.active = !1;
                    var t = this.node.getComponents(cc.PhysicsPolygonCollider),
                        e = this.node.getComponents(cc.PhysicsCircleCollider);
                    t && t.forEach(function(t) {
                        t.destroy()
                    }), e && e.forEach(function(t) {
                        t.destroy()
                    });
                    var o = a.default.getInstance().getData("selectWeapon"),
                        n = c.default.getInstance().getRigidByIndex(o);
                    if ("POLYGON" == n.fixture_type)
                        for (var i = 0; i < n.polygons.length; i++) {
                            var l = n.polygons[i];
                            (h = this.node.addComponent(cc.PhysicsPolygonCollider)).restitution = 1, h.friction = .1, h.points = [];
                            for (var d = 0; d < l.length; d++) {
                                var u = l[d];
                                h.points.push(u)
                            }
                        } else if ("CIRCLE" == n.fixture_type) {
                            var h;
                            (h = this.node.addComponent(cc.PhysicsCircleCollider)).restitution = 1, h.friction = .1, h.radius = n.circle
                        } this.node.getComponent(cc.Sprite).spriteFrame = r.default.myGameResCtl.weaponAtlas.getSpriteFrame("tools_" + o), this.toolglow.spriteFrame = r.default.myGameResCtl.weaponColorAtlas.getSpriteFrame("toolsGlow_" + o), this.node.active = !0, this.showGlow(2)
                }, e.prototype.showGlow = function(t) {
                    this._isGlow = !0, this.toolglow.node.active = !0, this.ringNode.active = !0, this.toolglow.node.stopAllActions();
                    var e = cc.callFunc(function() {
                        this.toolglow.node.active = !1, this.ringNode.active = !1, this._isGlow = !1
                    }, this);
                    this.toolglow.node.runAction(cc.sequence(cc.delayTime(t), e))
                }, e.prototype.setPower = function(t) {
                    s.default.getInstance().doShock();
                    var e = 0;
                    this.schedule(function() {
                        e % 2 ? this.brickCameraNode.x -= 10 : this.brickCameraNode.x += 10, e++
                    }, .1, 5), this.showGlow(t)
                }, e.prototype.setHit = function() {
                    this._canPassCount = 8, this.showTail()
                }, e.prototype.overHit = function() {
                    this._canPassCount = 0
                }, e.prototype.showTail = function() {
                    this.hitTail.getComponent(cc.ParticleSystem).resetSystem()
                }, e.prototype.onBeginContact = function(t, e, o) {
                    if ("wall" != o.node.group) {
                        var n = a.default.getInstance().getPowerHit();
                        this._isGlow && (n *= 3), o.node.getComponent("BrickCtl").checkHp(n) && this._canPassCount > 0 && (this._canPassCount--, t.disabled = !0)
                    }
                }, e.prototype.onEndContact = function(t, e, o) {}, e.prototype.onPreSolve = function(t, e, o) {}, e.prototype.onPostSolve = function(t, e, o) {}, e.prototype.update = function(t) {
                    this.brickCameraNode.y = this.node.y - 200, this.brickWallNode.y = this.node.y, this.hitTail.setPosition(this.node.position)
                }, i([u(cc.Node)], e.prototype, "brickCameraNode", void 0), i([u(cc.Node)], e.prototype, "brickWallNode", void 0), i([u(cc.Node)], e.prototype, "hitTail", void 0), i([u(cc.Node)], e.prototype, "ringNode", void 0), i([u(cc.Sprite)], e.prototype, "toolglow", void 0), e = i([d], e)
            }(cc.Component);
        o.default = h, cc._RF.pop()
    }, {
        "../utils/AudioMgr": "AudioMgr",
        "../utils/GameManager": "GameManager",
        "../utils/RigidRead": "RigidRead",
        "../view/GameResCtl": "GameResCtl"
    }],
    androidManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "346c5JBGm5BLZ898kLsu1AZ", "androidManager"), cc.Class({
            extends: cc.Component,
            properties: {
                _videoCall: null
            },
            initSDK: function() {
                cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
            },
            onKeyDown: function(t) {
                switch (console.log("Press back key = " + t.keyCode), t.keyCode) {
                    case cc.macro.KEY.back:
                        console.log("Press back key"), this.exitGameInJava()
                }
            },
            PurchaseOrderJNI: function(t) {
                if (cc.sys.platform != cc.sys.VIVO_GAME && cc.sys.platform != cc.sys.OPPO_GAME) {
                    var e = parseInt(t);
                    "undefined" != typeof jsb && cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "PurchaseOrder", "(I)V", e) : this.PaySuccess(e)
                }
            },
            exitGameInJava: function() {
                if (cc.sys.platform != cc.sys.VIVO_GAME && cc.sys.platform != cc.sys.OPPO_GAME && cc.sys.os == cc.sys.OS_ANDROID) {
                    if ("undefined" == typeof jsb) return;
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "exitGame", "()V")
                }
            },
            showAdInGame: function(t) {
                if (cc.sys.platform != cc.sys.VIVO_GAME && cc.sys.platform != cc.sys.OPPO_GAME && cc.sys.os == cc.sys.OS_ANDROID) {
                    if ("undefined" == typeof jsb) return;
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showAdInGame", "(I)V", t)
                }
            },
            setVideoCall: function(t) {
                this._videoCall = t
            },
            completeVideo: function() {
                this._videoCall(1)
            }
        }), cc._RF.pop()
    }, {}],
    findMyGameIcon: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "91a11jN48hNQ5DaJxzsmaRY", "findMyGameIcon");
        var n = this && this.__extends || function() {
                var t = function(e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function(e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
                return a > 3 && c && Object.defineProperty(e, o, c), c
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            r = a.property,
            s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.showPic = null, e._curAppName = null, e
                }
                return n(e, t), e.prototype.onLoad = function() {
                    if (window.tt) {
                        var t = tt.getSystemInfoSync();
                        this._curAppName = t.appName, "Douyin" == this._curAppName || (this.node.active = !1)
                    } else this.node.active = !1
                }, e.prototype.start = function() {}, e.prototype.showPicBtn = function(t) {
                    var e = cc.instantiate(this.showPic);
                    e.group = this.node.group, cc.find("Canvas").addChild(e)
                }, i([r(cc.Prefab)], e.prototype, "showPic", void 0), e = i([c], e)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {}],
    findMyGamePic: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "81285Ff7b1JqJH3o7U3bvCD", "findMyGamePic");
        var n = this && this.__extends || function() {
                var t = function(e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function(e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
                return a > 3 && c && Object.defineProperty(e, o, c), c
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            r = a.property,
            s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.contentNode = null, e._curPos = 1, e
                }
                return n(e, t), e.prototype.onLoad = function() {
                    this.showNext()
                }, e.prototype.start = function() {}, e.prototype.showNext = function() {
                    var t = this;
                    this.contentNode.children.forEach(function(e) {
                        e.active = e.name == t._curPos + ""
                    })
                }, e.prototype.nextBtn = function(t, e) {
                    this._curPos++, this.showNext()
                }, e.prototype.endBtn = function(t, e) {
                    this.node.removeFromParent()
                }, i([r(cc.Node)], e.prototype, "contentNode", void 0), e = i([c], e)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {}],
    gameData: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c9975xeX1pGEJIC+snqbCCa", "gameData"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.expData = {
            expDefault: 300,
            expMult: 1.35
        }, o.expGetData = {
            brick: 1,
            nugget: 5,
            collect: 20
        }, o.powerData = {
            powerPrice: 5500,
            powerPriceMult: 1.25,
            powerHit: 10,
            powerHitMult: 1.2
        }, o.levelData = {
            brickHp: 20,
            brickHpMult: 1.25,
            startHeightPer: -.5,
            lineCount: 10,
            heightCount: 60
        }, o.zoning = {
            length: 9,
            Zones: {
                0: {
                    colorSet: {
                        dark: !0,
                        mainColorHex: "E6FFFF",
                        detailColorHex: "88C7ED",
                        spriteId: "round"
                    },
                    BGColors: ["4293E7"]
                },
                1: {
                    colorSet: {
                        dark: !0,
                        mainColorHex: "595985",
                        detailColorHex: "464672",
                        spriteId: "cronch"
                    },
                    BGColors: ["f4bb4f"]
                },
                2: {
                    colorSet: {
                        dark: !0,
                        mainColorHex: "894c45",
                        detailColorHex: "763932",
                        spriteId: "round"
                    },
                    BGColors: ["95e68e"]
                },
                3: {
                    colorSet: {
                        dark: !0,
                        mainColorHex: "734f74",
                        detailColorHex: "603c61",
                        spriteId: "round"
                    },
                    BGColors: ["99e8f1"]
                },
                4: {
                    colorSet: {
                        dark: !0,
                        mainColorHex: "715941",
                        detailColorHex: "5c4633"
                    },
                    BGColors: ["f89ceb"]
                },
                5: {
                    colorSet: {
                        dark: !0,
                        mainColorHex: "4c5f85",
                        detailColorHex: "374d74",
                        spriteId: "cronch"
                    },
                    BGColors: ["89e7a7"]
                },
                6: {
                    colorSet: {
                        dark: !0,
                        mainColorHex: "53645f",
                        detailColorHex: "40514c",
                        spriteId: "round"
                    },
                    BGColors: ["cba9ff"]
                },
                7: {
                    colorSet: {
                        dark: !0,
                        mainColorHex: "3e698e",
                        detailColorHex: "295479",
                        spriteId: "round"
                    },
                    BGColors: ["ffb980"]
                },
                8: {
                    colorSet: {
                        dark: !0,
                        mainColorHex: "5e5e5e",
                        detailColorHex: "4b4b4b",
                        spriteId: "cronch"
                    },
                    BGColors: ["f26b70"]
                }
            }
        }, o.collectionData = {
            length: 51,
            collection: {
                1: {
                    name: "Thạch anh tím",
                    value: 12e3
                },
                2: {
                    name: "Hộp sọ thạch anh tím",
                    value: 1e5
                },
                3: {
                    name: "Mũ xanh cổ đại",
                    value: 2e3
                },
                4: {
                    name: "Guma",
                    value: 3e3
                },
                5: {
                    name: "Chìa khóa cổ đại",
                    value: 8e3
                },
                6: {
                    name: "Bàn đá",
                    value: 500
                },
                7: {
                    name: "Vỏ sò",
                    value: 1e4
                },
                8: {
                    name: "Sọ pha lê",
                    value: 1e5
                },
                9: {
                    name: "Dalama",
                    value: 4e3
                },
                10: {
                    name: "Diablo 0,2",
                    value: 2e4
                },
                11: {
                    name: "Trứng rồng",
                    value: 5e5
                },
                12: {
                    name: "Xương hàng đầu",
                    value: 5e4
                },
                13: {
                    name: "Răng rồng",
                    value: 1e4
                },
                14: {
                    name: "Nữ giới",
                    value: 5e3
                },
                15: {
                    name: "Ngọc lục bảo",
                    value: 1e4
                },
                16: {
                    name: "Phòng phát quang",
                    value: 5e3
                },
                17: {
                    name: "Ngôi nhà ma ám",
                    value: 5e3
                },
                18: {
                    name: "Răng khổng lồ",
                    value: 1500
                },
                19: {
                    name: "Giày vàng",
                    value: 3e4
                },
                20: {
                    name: "Jin Runshi",
                    value: 4e4
                },
                21: {
                    name: "Xương cá vàng",
                    value: 2e3
                },
                22: {
                    name: "Chén Thánh",
                    value: 8e3
                },
                23: {
                    name: "Thung lũng hạnh phúc",
                    value: 5e3
                },
                24: {
                    name: "Ngọc xương",
                    value: 1e5
                },
                25: {
                    name: "Mặt nạ cáo",
                    value: 5e4
                },
                26: {
                    name: "Mặt nạ cáo đen",
                    value: 5e4
                },
                27: {
                    name: "Chó con thất lạc",
                    value: 2500
                },
                28: {
                    name: "Giày thất lạc",
                    value: 800
                },
                29: {
                    name: "Vỏ sò biển",
                    value: 1e5
                },
                30: {
                    name: "Xương voi ma mút",
                    value: 2e3
                },
                31: {
                    name: "Gấu mặt trăng",
                    value: 8e3
                },
                32: {
                    name: "Móng vuốt bí ẩn",
                    value: 1e4
                },
                33: {
                    name: "Namek",
                    value: 1e4
                },
                34: {
                    name: "Mèo nhím",
                    value: 5e3
                },
                35: {
                    name: "Vỏ sò quý",
                    value: 24e3
                },
                36: {
                    name: "Pha lê cầu vồng",
                    value: 5e4
                },
                37: {
                    name: "Ngựa biển hiếm",
                    value: 2e3
                },
                38: {
                    name: "Vỏ hiếm",
                    value: 5e3
                },
                39: {
                    name: "Đơn vị sửa chữa 1100100",
                    value: 11e3
                },
                40: {
                    name: "Robot kỳ lân",
                    value: 2e5
                },
                41: {
                    name: "Mèo Sabre",
                    value: 25e3
                },
                42: {
                    name: "Mặt nạ Sakura Fox",
                    value: 2e4
                },
                43: {
                    name: "Serpentine",
                    value: 5e3
                },
                44: {
                    name: "Thanh kiếm Spartan",
                    value: 5e3
                },
                45: {
                    name: "Stegosaurus",
                    value: 5e3
                },
                46: {
                    name: "Overlord xương hàng đầu",
                    value: 12e4
                },
                47: {
                    name: "Con gấu bông đầu tiên",
                    value: 1e3
                },
                48: {
                    name: "Rương kho báu",
                    value: 1e4
                },
                49: {
                    name: "Mũ bảo hiểm Trojan",
                    value: 5500
                },
                50: {
                    name: "Giày cũ",
                    value: 500
                },
                51: {
                    name: "Gà Zombie",
                    value: 1e3
                }
            }
        }, o.collectionGroupData = {
            length: 17,
            Group: {
                1: {
                    name: "Hóa thạch",
                    need: ["45", "41", "30"],
                    value: 5e3
                },
                2: {
                    name: "Kho báu",
                    need: ["5", "48", "22"],
                    value: 5e3
                },
                3: {
                    name: "Pha lê",
                    need: ["1", "15", "36"],
                    value: 5e3
                },
                4: {
                    name: "Hy Lạp",
                    need: ["44", "4", "49"],
                    value: 5e3
                },
                5: {
                    name: "Sọ",
                    need: ["2", "8", "24"],
                    value: 5e3
                },
                6: {
                    name: "Giày",
                    need: ["50", "28", "19"],
                    value: 5e3
                },
                7: {
                    name: "Tyrannosaurus Rex",
                    need: ["32", "14", "46"],
                    value: 5e3
                },
                8: {
                    name: "Tượng",
                    need: ["9", "31", "27"],
                    value: 5e3
                },
                9: {
                    name: "Ngọc Quý",
                    need: ["43", "23", "20"],
                    value: 5e3
                },
                10: {
                    name: "Robot",
                    need: ["39", "10", "40"],
                    value: 5e3
                },
                11: {
                    name: "Vỏ sò",
                    need: ["29", "35", "7"],
                    value: 5e3
                },
                12: {
                    name: "Rồng",
                    need: ["13", "12", "11"],
                    value: 5e3
                },
                13: {
                    name: "Thất lạc",
                    need: ["34", "6", "47"],
                    value: 5e3
                },
                14: {
                    name: "Mặt nạ",
                    need: ["25", "26", "42"],
                    value: 5e3
                },
                15: {
                    name: "Bãi biển",
                    need: ["38", "21", "37"],
                    value: 5e3
                },
                16: {
                    name: "Nấm",
                    need: ["16", "17", "3"],
                    value: 5e3
                },
                17: {
                    name: "Hóa thạch",
                    need: ["18", "51", "33"],
                    value: 5e3
                }
            }
        }, o.weaponInfo = {
            length: 64,
            data: [{
                name: "Công cụ",
                description: "Mở khóa và nâng cấp!",
                headerColor: "a6866c",
                slots: [{
                    id: "0",
                    unlockTypeId: "powerLevel",
                    unlockRequirement: 0
                }, {
                    id: "1",
                    unlockTypeId: "powerLevel",
                    unlockRequirement: 3
                }, {
                    id: "3",
                    unlockTypeId: "powerLevel",
                    unlockRequirement: 4
                }, {
                    id: "5",
                    unlockTypeId: "powerLevel",
                    unlockRequirement: 10
                }, {
                    id: "6",
                    unlockTypeId: "powerLevel",
                    unlockRequirement: 20
                }, {
                    id: "7",
                    unlockTypeId: "powerLevel",
                    unlockRequirement: 40
                }, {
                    id: "23",
                    unlockTypeId: "powerLevel",
                    unlockRequirement: 70
                }, {
                    id: "31",
                    unlockTypeId: "powerLevel",
                    unlockRequirement: 130
                }, {
                    id: "32",
                    unlockTypeId: "powerLevel",
                    unlockRequirement: 250
                }]
            }, {
                name: "Cổ vật",
                description: "Nhiều cấp độ kinh nghiệm!",
                headerColor: "80a236",
                headerSecondary: "ffffa8",
                slots: [{
                    id: "2",
                    unlockTypeId: "level",
                    unlockRequirement: 10
                }, {
                    id: "8",
                    unlockTypeId: "level",
                    unlockRequirement: 15
                }, {
                    id: "9",
                    unlockTypeId: "level",
                    unlockRequirement: 25
                }, {
                    id: "11",
                    unlockTypeId: "level",
                    unlockRequirement: 35
                }, {
                    id: "15",
                    unlockTypeId: "level",
                    unlockRequirement: 50
                }, {
                    id: "34",
                    unlockTypeId: "level",
                    unlockRequirement: 75
                }, {
                    id: "36",
                    unlockTypeId: "level",
                    unlockRequirement: 100
                }, {
                    id: "38",
                    unlockTypeId: "level",
                    unlockRequirement: 150
                }, {
                    id: "40",
                    unlockTypeId: "level",
                    unlockRequirement: 200
                }]
            }, {
                name: "Kho báu",
                description: "Sẽ xuất hiện trong phiên bản\ncập nhật tiếp theo tại Arcade!",
                headerColor: "c68c2a"
            }]
        }, cc._RF.pop()
    }, {}],
    initBricks: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a77a8IebxdBk6LV+KCjsRCT", "initBricks");
        var n = this && this.__extends || function() {
                var t = function(e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function(e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
                return a > 3 && c && Object.defineProperty(e, o, c), c
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../utils/GameManager"),
            c = t("../enum/EnumData"),
            r = t("./GameResCtl"),
            s = t("../utils/myUtils"),
            l = t("../utils/Emitter"),
            d = t("../enum/gameData"),
            u = cc._decorator,
            h = u.ccclass,
            p = u.property,
            f = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.brick = null, e.brickShadow = null, e.effectNode = null, e.nuggetNode = null, e.gemLabelNode = null, e.collectionNode = null, e.weaponSp = null, e.BackGroundNode = null, e.myBrickCtlPool = null, e._lineCount = 10, e._heightCount = 8, e._curLevel = 0, e._sumGroupData = {}, e._startY = 0, e._limitHCenter = 0, e._lvZone = [], e._weaponInLv = 0, e
                }
                return n(e, t), e.prototype.onLoad = function() {
                    this._lineCount = d.levelData.lineCount, this._heightCount = d.levelData.heightCount, this._curLevel = a.default.getInstance().getData("curLevel"), cc.director.getPhysicsManager().enabled = !0, this.scheduleOnce(function() {
                        var t = this;
                        this.initLevelData(this._curLevel).then(function() {
                            return t.initLevelData(t._curLevel + 1)
                        }).then(function() {
                            a.default.getInstance().saveAllLevelData(), t.initViewData()
                        })
                    }, .1);
                    var t = this;
                    cc.game.on(cc.game.EVENT_HIDE, function() {
                        a.default.getInstance().setData("curPos", [t.weaponSp.x, t.weaponSp.y]), a.default.getInstance().saveAllLevelData()
                    }), this.schedule(function() {
                        this.setBrickState(this.weaponSp.y)
                    }, .1), l.default.getInstance().on("hit_group", this.hitGroup, this), l.default.getInstance().on("hit_effect", this.hitEffect, this);
                    var e = d.zoning.Zones[this._weaponInLv + ""].BGColors;
                    this.BackGroundNode.color = (new cc.Color).fromHEX("#" + e)
                }, e.prototype.onDestroy = function() {
                    cc.director.getPhysicsManager().enabled = !1, l.default.getInstance().off("hit_group", this), l.default.getInstance().off("hit_effect", this)
                }, e.prototype.initMyPool = function() {
                    this.myBrickCtlPool = new cc.NodePool("BrickCtl");
                    for (var t = 0; t < 200; ++t) {
                        var e = cc.instantiate(this.brick);
                        this.myBrickCtlPool.put(e)
                    }
                }, e.prototype.initLevelData = function(t) {
                    var e = this;
                    return new Promise(function(o, n) {
                        if (!a.default.getInstance().getLevelData(t)) {
                            var i = [],
                                r = Math.floor(100 * Math.random()),
                                l = 0;
                            l = r < 33 ? c.BrickEnum.b_ice : r > 66 ? c.BrickEnum.b_stone : c.BrickEnum.b_rubble;
                            for (var d = [], u = 0; u < e._heightCount; u++) {
                                for (var h = [], p = 0; p < e._lineCount; p++) {
                                    var f = Math.floor(100 * Math.random()),
                                        m = -1,
                                        _ = 0 | l,
                                        g = 0;
                                    if (i && i.length > 0)
                                        for (var v = 0; v < i.length; v++) {
                                            var y = i[v];
                                            y[0] == p && y[1] == u && (m = v)
                                        } - 1 != m ? (i = i.splice(m, 1), _ |= c.BrickEnum.b_nugget, 5 != (g = Math.floor(17 * Math.random()) + 1) && 13 != g || (g = 7)) : f < 10 ? (i && (i = e.getNuggetKind(p, u)), _ |= c.BrickEnum.b_nugget, 5 != (g = Math.floor(17 * Math.random()) + 1) && 13 != g || (g = 7)) : f < 70 && f > 50 ? (_ |= c.BrickEnum.b_withDetail, g = Math.floor(16 * Math.random()) + 1) : f < 75 && f >= 70 && (p < 3 || p > e._lineCount - 3) ? _ |= c.BrickEnum.b_static : f < 90 && f >= 75 && (_ |= c.BrickEnum.b_none), h.push([_, g, "", !1])
                                }
                                d.push(h)
                            }
                            var A = s.default.getInstance().getMyUUid();
                            for (u = e._heightCount - 2; u < e._heightCount; u++) {
                                var C = d[u],
                                    w = e._heightCount - 1 - u;
                                for (p = 0; p < C.length; p++) {
                                    _ = 0;
                                    _ |= c.BrickEnum.b_end, _ |= c.BrickEnum.b_ice, w = 0 == w ? 1 : 0, C[p] = [_, w, A, !0]
                                }
                            }
                            var b = s.default.getInstance().getMyUUid(),
                                S = a.default.getInstance()._perCollection;
                            if (S) {
                                console.log(S);
                                var I = S._name.split("_")[0],
                                    M = parseInt(I.substr(1)),
                                    N = cc.winSize,
                                    D = Math.ceil(N.width / e._lineCount),
                                    k = S.getRect().width,
                                    R = S.getRect().height,
                                    O = Math.floor(k / D) + 1,
                                    B = Math.floor(R / D) + 1,
                                    P = Math.floor(Math.random() * (e._lineCount - O - 1)),
                                    E = Math.floor(Math.random() * (e._heightCount - B - 4)),
                                    G = !0;
                                for (u = 0; u < B; u++)
                                    for (C = d[u + E], p = 0; p < O; p++) {
                                        _ = 0;
                                        _ |= l, _ |= c.BrickEnum.b_group, G && (_ |= c.BrickEnum.b_withDetail, G = !1), C[p + P] = [_, M, b, !0]
                                    }
                            }
                            a.default.getInstance().perloadCollection(), a.default.getInstance().saveLevelData(t, d)
                        }
                        o(), n("no data")
                    })
                }, e.prototype.getNuggetKind = function(t, e) {
                    var o = [],
                        n = Math.floor(1e3 * Math.random());
                    return n < 1e3 && o.push([t, e]), n < 900 && o.push([t + 1, e + 1]), n < 800 && o.push([t + 2, e + 2]), n < 700 && o.push([t, e + 2]), n < 600 && o.push([t + 2, e]), n < 500 && o.push([t + 1, e]), n < 400 && o.push([t + 1, e + 2]), n < 300 && o.push([t, e + 1]), n < 200 && o.push([t + 2, e + 1]), o
                }, e.prototype.getGroupBrick = function(t, e) {
                    return []
                }, e.prototype.showWeapon = function() {
                    this.weaponSp.active = !0
                }, e.prototype.initViewData = function() {
                    var t = cc.winSize,
                        e = Math.ceil(t.width / this._lineCount),
                        o = 0,
                        n = d.levelData.startHeightPer * t.height;
                    this._startY = n, this._lvZone.push(n);
                    var i = a.default.getInstance().getData("curPos"),
                        c = 0;
                    c = 0 == i.length ? 0 : Math.floor((-i[1] - n) / e) + 1, this._limitHCenter = c;
                    for (var r = [], s = 0; s < this._curLevel + 2; s++) {
                        var l = a.default.getInstance().getLevelData(s);
                        r = r.concat(l)
                    }
                    var u = 0,
                        h = Math.floor(.1 * r.length) + 1;
                    this.schedule(function() {
                        for (var t = u; t < u + 10 && !(r.length <= t); t++)
                            for (var n = r[t], i = 0; i < n.length; i++) {
                                o = e * i;
                                var a = Math.floor(t / this._heightCount),
                                    s = Math.floor((t + 1) / this._heightCount);
                                this._lvZone.length <= s && this._lvZone.push(this._startY);
                                var l = t % this._heightCount,
                                    d = !1;
                                t < c + 10 && t > c - 10 && (d = !0), this.createBrick(n[i], e, cc.v2(o + .5 * e, this._startY), [a, i, l], d), i == this._lineCount - 1 && (o = .5 * e, this._startY -= e)
                            }
                        u += 10, r.length <= u && this.showWeapon()
                    }, .1, h)
                }, e.prototype.completeCurLevel = function() {
                    var t = this;
                    this._curLevel++, a.default.getInstance().setData("curLevel", this._curLevel);
                    var e = this._curLevel + 1;
                    this.initLevelData(e).then(function() {
                        a.default.getInstance().saveAllLevelData(), t.addBrickData()
                    })
                }, e.prototype.addBrickData = function() {
                    var t = a.default.getInstance().getLevelData(this._curLevel + 1),
                        e = 0,
                        o = cc.winSize,
                        n = Math.ceil(o.width / this._lineCount),
                        i = 0,
                        c = Math.floor(.1 * t.length) + 1;
                    this.schedule(function() {
                        for (var o = e; o < e + 10 && !(t.length <= o); o++)
                            for (var a = t[o], c = 0; c < a.length; c++) {
                                i = n * c, Math.floor((o + 1) / this._heightCount) >= 1 && this._lvZone.push(this._startY);
                                var r = o % this._heightCount;
                                this.createBrick(a[c], n, cc.v2(i + .5 * n, this._startY), [this._curLevel + 1, c, r], !1), c == this._lineCount - 1 && (i = .5 * n, this._startY -= n)
                            }
                        e += 10
                    }, .1, c)
                }, e.prototype.createBrick = function(t, e, o, n, i) {
                    var a = null,
                        s = t[0],
                        l = t[1],
                        d = t[2],
                        u = t[3];
                    if (s & c.BrickEnum.b_none)(s & c.BrickEnum.b_end || s & c.BrickEnum.b_group) && (this._sumGroupData.hasOwnProperty(d) || (this._sumGroupData[d] = []), this._sumGroupData[d].push(u ? 1 : 0));
                    else {
                        s & c.BrickEnum.b_group && s & c.BrickEnum.b_withDetail && this.addGroupImage(l, cc.v2(o.x - .5 * e, o.y + .5 * e), d), s & c.BrickEnum.b_ice ? a = r.default.myGameResCtl.brickAtlas.getSpriteFrame("TileBase") : s & c.BrickEnum.b_stone ? a = r.default.myGameResCtl.brickAtlas.getSpriteFrame("tile_round") : s & c.BrickEnum.b_rubble && (a = r.default.myGameResCtl.brickAtlas.getSpriteFrame("tilebase_cronch"));
                        var h = 1.4;
                        s & c.BrickEnum.b_end && (h = 1);
                        var p = new cc.Node;
                        p.color = cc.Color.BLACK, p.addComponent(cc.Sprite).spriteFrame = a, p.setPosition(cc.v2(o.x + 5, o.y + 5)), p.active = i, this.brickShadow.addChild(p), p.width = e * h, p.height = e * h;
                        var f = null,
                            m = null;
                        if (s & c.BrickEnum.b_nugget) {
                            var _ = [cc.Color.GREEN, cc.Color.WHITE, cc.Color.YELLOW, cc.Color.RED],
                                g = this.effectNode.getChildByName("nugget");
                            (f = cc.instantiate(g)).setPosition(o), f.active = i, this.effectNode.addChild(f);
                            var v = r.default.myGameResCtl.brickAtlas.getSpriteFrame("nugget" + this.PrefixZero(l)),
                                y = this.nuggetNode.getChildByName("nugget");
                            (m = cc.instantiate(y)).active = !0, m.color = _[Math.floor(Math.random() * _.length)], m.setPosition(o), m.angle = 120 * Math.random() - 60, m.getComponent(cc.Sprite).spriteFrame = v, m.width = e * h * .6, m.height = e * h * .6, m.scale = .5 * Math.random() + .5, this.nuggetNode.addChild(m)
                        }
                        var A = cc.instantiate(this.brick);
                        A.name = "brick" + (n[0] * this._heightCount + n[2]) + n[1], A.active = i, A.width = e * h, A.height = e * h, A.setPosition(o), A.getComponent(cc.PhysicsBoxCollider).size = cc.size(e, e);
                        var C = A.getComponent("BrickCtl");
                        C.setKind(s), C.setIdx(l), C.setGroupId(d, u), C.setSpFrame(a), C.setShadow(p), C.setArrInfo(n), C.setEffect(f), C.setNugget(m), A.parent = this.node, (s & c.BrickEnum.b_end || s & c.BrickEnum.b_group) && (this._sumGroupData.hasOwnProperty(d) || (this._sumGroupData[d] = []), this._sumGroupData[d].push(A))
                    }
                }, e.prototype.setBrickState = function(t) {
                    this.node.children.forEach(function(e) {
                        var o = e.y > t - 1200 && e.y < t + 800;
                        e.getComponent("BrickCtl").setShowState(o)
                    });
                    for (var e = 0, o = 0; o < this._lvZone.length; o++) {
                        var n = this._lvZone[o];
                        if (t > n) {
                            (e = o - 1) < 0 && (e = 0);
                            break
                        }
                    }
                    if (this._weaponInLv != e) {
                        this._weaponInLv = e;
                        var i = this._weaponInLv % d.zoning.length,
                            a = d.zoning.Zones[i + ""].BGColors,
                            c = (new cc.Color).fromHEX("#" + a);
                        this.BackGroundNode.stopAllActions(), this.BackGroundNode.runAction(cc.tintTo(.2, c.getR(), c.getG(), c.getB()))
                    }
                }, e.prototype.addGroupImage = function(t, e, o) {
                    var n = this;
                    a.default.getInstance().getMySpriteFrame("collection/c" + t + "_bw").then(function(t) {
                        var i = n.collectionNode.getChildByName("image"),
                            a = cc.instantiate(i);
                        a.name = o, a.active = !0, a.setPosition(e), a.getComponent(cc.Sprite).spriteFrame = t, n.collectionNode.addChild(a)
                    })
                }, e.prototype.hitGroup = function(t) {
                    if (this._sumGroupData.hasOwnProperty(t.groupid)) {
                        for (var e = 0, o = 0, n = this._sumGroupData[t.groupid].length, i = 0; i < n; i++) {
                            var c = this._sumGroupData[t.groupid][i];
                            c == t.curTarget ? (this._sumGroupData[t.groupid][i] = t.isHitTarget ? 1 : 0, t.isHitTarget && (e++, o = i)) : 1 == c && e++
                        }
                        var r = !1;
                        if (t.isEnd && e >= 2 ? r = !0 : .3 * n < e && (r = !0), r) {
                            var s = this.effectNode.getChildByName("boom1"),
                                u = [],
                                h = [],
                                p = this._sumGroupData[t.groupid],
                                f = .1;
                            for (i = o; i < p.length; i++) {
                                1 != (_ = p[i]) && 0 != _ && (f += .1, _.getComponent("BrickCtl").setBoom(f), u.push(cc.moveTo(.1, _.getPosition())), this.showGem(5, _.getPosition(), f))
                            }
                            if (u.push(cc.removeSelf()), u.length > 1) {
                                var m = cc.instantiate(s);
                                m.active = !0, this.effectNode.addChild(m), m.runAction(cc.sequence(u))
                            }
                            f = .1;
                            for (i = o; i >= 0; i--) {
                                var _;
                                1 != (_ = p[i]) && 0 != _ && (f += .1, _.getComponent("BrickCtl").setBoom(f), h.push(cc.moveTo(.1, _.getPosition())), this.showGem(5, _.getPosition(), f))
                            }
                            if (h.push(cc.removeSelf()), h.length > 1) {
                                var g = cc.instantiate(s);
                                g.active = !0, this.effectNode.addChild(g), g.runAction(cc.sequence(h))
                            }
                            if (t.isEnd) this.completeCurLevel();
                            else {
                                a.default.getInstance().unlockCollect(t.idx);
                                var v = d.collectionData.collection[t.idx + ""].name,
                                    y = d.collectionData.collection[t.idx + ""].value;
                                l.default.getInstance().emit("uimanager", {
                                    name: "showaward",
                                    des: v,
                                    title: "Tôi đã phát hiện được kho báu này!",
                                    gold: y,
                                    type: "collection",
                                    cid: t.idx
                                }), this.collectionNode.getChildByName(t.groupid).removeFromParent(), a.default.getInstance().addExp(d.expGetData.collect)
                            }
                            delete this._sumGroupData[t.groupid]
                        }
                    }
                }, e.prototype.hitEffect = function(t) {
                    if ("Pieces" == t.name) {
                        for (var e = this.effectNode.getChildByName("Pieces"), o = 0; o < 8; o++) {
                            var n = cc.instantiate(e);
                            n.active = !0, n.color = t.color, n.setPosition(t.pos);
                            var i = 15 * Math.random() + 5;
                            n.width = i, n.height = i, this.effectNode.addChild(n), n.getComponent(cc.RigidBody).linearVelocity = cc.v2(200 * Math.random(), 200 * Math.random()), n.runAction(cc.sequence(cc.delayTime(2), cc.removeSelf()))
                        }
                        this.showGem(1, t.pos, 0)
                    } else t.name && this.showGem(t.gem, t.pos, 0)
                }, e.prototype.showGem = function(t, e, o) {
                    a.default.getInstance().addGoldOnly(t);
                    var n = this.gemLabelNode.getChildByName("showLabel"),
                        i = cc.instantiate(n);
                    i.setPosition(e), i.getComponent(cc.Label).string = "$" + t, this.gemLabelNode.addChild(i);
                    var c = [];
                    0 != o && (i.getComponent(cc.RenderComponent).enabled = !1, c.push(cc.hide()), c.push(cc.delayTime(o)), c.push(cc.show())), c.push(cc.moveBy(1, cc.v2(0, 100))), c.push(cc.removeSelf()), i.runAction(cc.sequence(c))
                }, e.prototype.PrefixZero = function(t, e) {
                    return void 0 === e && (e = 2), (Array(e).join("0") + t).slice(-e)
                }, i([p(cc.Prefab)], e.prototype, "brick", void 0), i([p(cc.Node)], e.prototype, "brickShadow", void 0), i([p(cc.Node)], e.prototype, "effectNode", void 0), i([p(cc.Node)], e.prototype, "nuggetNode", void 0), i([p(cc.Node)], e.prototype, "gemLabelNode", void 0), i([p(cc.Node)], e.prototype, "collectionNode", void 0), i([p(cc.Node)], e.prototype, "weaponSp", void 0), i([p(cc.Node)], e.prototype, "BackGroundNode", void 0), e = i([h], e)
            }(cc.Component);
        o.default = f, cc._RF.pop()
    }, {
        "../enum/EnumData": "EnumData",
        "../enum/gameData": "gameData",
        "../utils/Emitter": "Emitter",
        "../utils/GameManager": "GameManager",
        "../utils/myUtils": "myUtils",
        "./GameResCtl": "GameResCtl"
    }],
    keyCtl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ea174nEYYVFbI0EIns3Hflt", "keyCtl");
        e.exports = {
            vivo: {
                game0: {
                    AppID: "",
                    inst: "",
                    video: "",
                    banner: ""
                },
                game1: {
                    AppID: "b6c3eedb9d704752990a1b1d8981bad1",
                    inst: "",
                    video: "568e12c62e4440b6945457bd664b213f",
                    banner: "3fbf1f515c8d4349b254d50ca38b0ee8",
                    native: "50bf234f074641ecb96cf789a35b4d4f"
                }
            },
            oppo: {
                game0: {
                    AppID: "",
                    inst: "",
                    native: "",
                    native2: "",
                    video: "",
                    banner: ""
                },
                game1: {
                    AppID: "30250077",
                    inst: "",
                    native: "166579",
                    native2: "",
                    video: "166580",
                    banner: "166577"
                }
            }
        }, cc._RF.pop()
    }, {}],
    m4399Ctl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "5c9c1bxjxBNCpDA/Ddht6++", "m4399Ctl"), cc.Class({
            extends: cc.Component,
            properties: {
                is4399Hide: !1
            },
            onLoad: function() {
                var e = t("MyChannelEnum");
                if (cc.adCtl._curChannel == e.qd_mini_4399) {
                    cc.sys.localStorage.getItem("hc_4399_day") != (new Date).getDate() && (cc.sys.localStorage.setItem("hc_4399_day", (new Date).getDate()), cc.sys.localStorage.setItem("hc_4399_count", 10));
                    var o = cc.sys.localStorage.getItem("hc_4399_count"),
                        n = !1;
                    window.h5api && (n = window.h5api.canPlayAd());
                    var i = n && o > 0;
                    this.node.active = i, this.is4399Hide && (this.node.active = !1)
                }
                cc.adCtl._noneAd && (this.node.active = !1)
            },
            start: function() {}
        }), cc._RF.pop()
    }, {
        MyChannelEnum: "MyChannelEnum"
    }],
    myAdManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "af09damJK1JlrsOaaFcpNN0", "myAdManager");
        var n = t("keyCtl"),
            i = cc.Class({
                name: "myAdManager",
                properties: {},
                ctor: function() {
                    this._isCanAd = !1, this._rewardedVideoAd = null, this._bannerAd = null, this._interstitialAd = null, this._nativeAd = null, this._nativeData = null, this.vivoAdAppID = "", this.vivoAd_inst = "", this.vivoAd_video = "", this.vivoAd_banner = "", this.vivoAd_Native = "", this.oppoAdAppID = "", this.oppoAd_inst = "", this.oppoAd_native = "", this.oppoAd_native2 = "", this.oppoAd_video = "", this.oppoAd_banner = "", this.lastInstTime = 0, this.lastNativeTime = 0, this.videoCall = null, this._isFirstInit = !0, this._isShowNativeAD = !1, this._oppoAdState = 0
                },
                initAd: function() {
                    console.log("cc.sys.platform" + cc.sys.platform), this.firstShow = !0;
                    try {
                        this.videoDelay = 0, this.initAdData()
                    } catch (t) {
                        console.log("\u4e0d\u652f\u6301\u5e7f\u544a" + t)
                    }
                },
                initAdData: function() {
                    if (cc.sys.platform == cc.sys.VIVO_GAME) {
                        var t = n.vivo["game" + cc.adCtl._curGame];
                        this.vivoAdAppID = t.AppID, this.vivoAd_inst = t.inst, this.vivoAd_video = t.video, this.vivoAd_banner = t.banner, this.vivoAd_Native = t.native, "" != this.vivoAdAppID && this.initVivoAd()
                    } else if (cc.sys.platform == cc.sys.OPPO_GAME) {
                        var e = n.oppo["game" + cc.adCtl._curGame];
                        this.oppoAdAppID = e.AppID, this.oppoAd_inst = e.inst, this.oppoAd_native = e.native, this.oppoAd_native2 = e.native2, this.oppoAd_video = e.video, this.oppoAd_banner = e.banner, "" != this.oppoAdAppID && this.initOppoAd()
                    }
                },
                showRewardVideo: function(t) {
                    this.videoCall = t;
                    var e = Math.floor((new Date).getTime() / 1e3);
                    if (e - this.videoDelay < 60) return this.videoDelay = e, this.showToast("Không có video quảng cáo"), void(this.videoCall && this.videoCall(0));
                    if (cc.sys.platform != cc.sys.DESKTOP_BROWSER) {
                        if (null == this._rewardedVideoAd) return this.showToast("Không có video quảng cáo"), void(this.videoCall && this.videoCall(0));
                        cc.sys.platform == cc.sys.VIVO_GAME ? this.loadRewardVideo() : this._rewardedVideoAd.load()
                    } else this.videoCall && this.videoCall(0)
                },
                loadRewardVideo: function() {
                    var t = this;
                    if (null != this._rewardedVideoAd && cc.sys.platform == cc.sys.VIVO_GAME) {
                        var e = this;
                        this._rewardedVideoAd.load().catch(function(o) {
                            t.videoCall && t.videoCall(0), e.showToast("Không có video quảng cáo"), console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", JSON.stringify(o))
                        })
                    }
                },
                showBanner: function() {
                    var t = this;
                    cc.sys.platform == cc.sys.VIVO_GAME ? "" != t.vivoAd_banner && window.qg && (null != this._bannerAd && (this._bannerAd.destroy(), this._bannerAd = null), this._bannerAd = qg.createBannerAd({
                        posId: t.vivoAd_banner,
                        style: {}
                    }), this._bannerAd.onError(function(t) {
                        console.log("bannerAd", t)
                    }), this._bannerAd.onLoad(function() {
                        t._bannerAd.show()
                    })) : cc.sys.platform == cc.sys.OPPO_GAME && "" != t.oppoAd_banner && window.qg && (null != this._bannerAd && (this._bannerAd.destroy(), this._bannerAd = null, this._oppoAdState = 0), this.getOppoIsCanBanner() && 0 == this._oppoAdState && (this._oppoAdState = 2, this._bannerAd = qg.createBannerAd({
                        adUnitId: t.oppoAd_banner
                    }), this._bannerAd.onError(function(t) {
                        console.log(t)
                    }), this._bannerAd.onHide(function() {
                        console.log("banner \u5e7f\u544a\u9690\u85cf"), t.setOppoBannerTime(), t._oppoAdState = 0
                    }), this._bannerAd.onLoad(function() {
                        t._bannerAd.show()
                    })))
                },
                hideBanner: function() {
                    null != this._bannerAd && (this._bannerAd.destroy(), this._bannerAd = null, this._oppoAdState = 0)
                },
                showInterstitialAd: function() {
                    var t = this;
                    if (cc.sys.platform == cc.sys.VIVO_GAME) {
                        if ("" == this.vivoAd_inst) return void this.loadNativeAd(!0);
                        var e = qg.createInterstitialAd({
                            posId: t.vivoAd_inst
                        }).show();
                        e && e.then(function() {
                            console.log("\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u6210\u529f")
                        }).catch(function(t) {
                            switch (t.code) {
                                case 30003:
                                    console.log("\u65b0\u7528\u62371\u5929\u5185\u4e0d\u80fd\u66dd\u5149Banner\uff0c\u8bf7\u5c06\u624b\u673a\u65f6\u95f4\u8c03\u6574\u4e3a1\u5929\u540e\uff0c\u9000\u51fa\u6e38\u620f\u91cd\u65b0\u8fdb\u5165");
                                    break;
                                case 30009:
                                    console.log("10\u79d2\u5185\u8c03\u7528\u5e7f\u544a\u6b21\u6570\u8d85\u8fc71\u6b21\uff0c10\u79d2\u540e\u518d\u8c03\u7528");
                                    break;
                                case 30002:
                                    console.log("load\u5e7f\u544a\u5931\u8d25\uff0c\u91cd\u65b0\u52a0\u8f7d\u5e7f\u544a");
                                    break;
                                default:
                                    console.log("\u63d2\u5c4f\u5e7f\u544a\u5c55\u793a\u5931\u8d25"), console.log(JSON.stringify(t))
                            }
                        })
                    } else if (cc.sys.platform == cc.sys.OPPO_GAME) {
                        Math.floor((new Date).getTime() / 1e3) > this.lastInstTime && this.getOppoIsCanInst() && 0 == this._oppoAdState && (this._oppoAdState = 1, this.loadOppoNative(this.oppoAd_native, function(e) {
                            0 == e ? t.showOppoInstAd() : (t.setOppoInstTime(), t.lastInstTime = Math.floor((new Date).getTime() / 1e3) + 60, t.doShowNativeAd())
                        }))
                    }
                    console.log("showInterstitialAd")
                },
                showOppoInstAd: function() {
                    cc.sys.platform == cc.sys.OPPO_GAME && this._interstitialAd && this._interstitialAd.load()
                },
                doShowNativeAd: function() {
                    if (null != this._nativeAd)
                        if (null != this._nativeData && this._nativeData.length > 0) {
                            var t = this._nativeData[0],
                                e = t.adId;
                            this.showNativeAd(e), this.showNativeNode(t)
                        } else this.showOppoInstAd()
                },
                loadNativeAd: function(t) {
                    if (!this._isShowNativeAD) {
                        var e = Math.floor((new Date).getTime() / 1e3);
                        if (!(e < this.lastNativeTime) && (this.lastNativeTime = e + 10, window.qg)) {
                            var o = this;
                            if (qg.createNativeAd) {
                                this._nativeAd = qg.createNativeAd({
                                    posId: o.vivoAd_Native
                                }), this._nativeAd.onLoad(function(e) {
                                    console.log("\u539f\u751f\u5e7f\u544a\u52a0\u8f7d\u5b8c\u6210", JSON.stringify(e)), e && e.adList && (o._nativeData = [], o._nativeData.push(e.adList.pop()), t && o.doShowNativeAd())
                                });
                                var n = this._nativeAd.load();
                                n && n.then(function() {
                                    console.log("\u539f\u751f\u5e7f\u544a\u52a0\u8f7d\u5b8c\u6210", JSON.stringify(res))
                                }).catch(function(t) {
                                    console.log("\u52a0\u8f7d\u5931\u8d25", JSON.stringify(t))
                                })
                            }
                        }
                    }
                },
                getNativeAdData: function() {
                    return null != this._nativeData && this._nativeData.length > 0 ? this._nativeData[0] : null == this._nativeAd ? null : (this._nativeAd.load(), null)
                },
                showNativeAd: function(t) {
                    null != this._nativeAd && this._nativeAd.reportAdShow({
                        adId: t + ""
                    })
                },
                clickNativeAd: function(t) {
                    null != this._nativeAd && (this._nativeData.shift(), console.log("_nativeAd clickNativeAd"), this._nativeAd.reportAdClick({
                        adId: t + ""
                    }), this._nativeData.length <= 0 && this._nativeAd.load())
                },
                initVivoAd: function() {
                    var t = this;
                    qg.getSystemInfoSync().platformVersionCode >= 1031 && ("" != t.vivoAd_video && qg.getSystemInfoSync().platformVersionCode >= 1041 && (this._rewardedVideoAd = qg.createRewardedVideoAd({
                        posId: t.vivoAd_video
                    }), this._rewardedVideoAd.onLoad(function() {
                        t.firstShow || t._rewardedVideoAd.show().then(function() {
                            cc.AudioMgr.CtlAndioForAd(!1), console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u6210\u529f")
                        }).catch(function(t) {
                            console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u5931\u8d25", JSON.stringify(t))
                        }), t.firstShow = !1, console.log("\u6fc0\u52b1\u89c6\u9891\u5df2\u52a0\u8f7d")
                    }), this._rewardedVideoAd.onError(function(e) {
                        console.log("\u6fc0\u52b1\u89c6\u9891\u5f02\u5e38", JSON.stringify(e)), t.showToast("Không có video quảng cáo"), t.videoCall(0)
                    }), this._rewardedVideoAd.onClose(function(e) {
                        e && e.isEnded ? (t.videoCall(1), console.log("\u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1")) : (t.videoCall(0), console.log("\u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1")), cc.AudioMgr.CtlAndioForAd(!0)
                    })), this.loadNativeAd(!1))
                },
                initOppoAd: function() {
                    var t = this;
                    qg.initAdService({
                        appId: t.oppoAdAppID,
                        success: function(t) {
                            console.log("oppoad success")
                        },
                        fail: function(t) {
                            console.log("oppoad fail:" + t.code + t.msg)
                        },
                        complete: function(e) {
                            console.log("oppoad complete"), t.createOppoAd()
                        }
                    })
                },
                createOppoAd: function() {
                    var t = this;
                    "" != t.oppoAd_video && (qg.reportMonitor && qg.reportMonitor("game_scene", 0), this._rewardedVideoAd = qg.createRewardedVideoAd({
                        posId: t.oppoAd_video
                    }), this._rewardedVideoAd.onLoad(function() {
                        cc.AudioMgr.CtlAndioForAd(!1), t._rewardedVideoAd.show(), console.log("\u6fc0\u52b1\u89c6\u9891\u5df2\u52a0\u8f7d")
                    }), this._rewardedVideoAd.onError(function(e) {
                        t.showToast("Không có video quảng cáo");
                        var o = JSON.stringify(e);
                        console.log("\u6fc0\u52b1\u89c6\u9891\u5f02\u5e38", o), t.videoCall(0)
                    }), this._rewardedVideoAd.onClose(function(e) {
                        e && e.isEnded ? (t.videoCall(1), console.log("\u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1")) : (t.videoCall(0), console.log("\u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1")), cc.AudioMgr.CtlAndioForAd(!0)
                    })), "" != t.oppoAd_inst && (this._interstitialAd = qg.createInsertAd({
                        posId: t.oppoAd_inst
                    }), this._interstitialAd.onLoad(function() {
                        console.log("\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d", res.adList), t._interstitialAd.show(), t.setOppoInstTime(), t.lastInstTime = Math.floor((new Date).getTime() / 1e3) + 60
                    }), this._interstitialAd.onClose(function() {
                        t._oppoAdState = 0, console.log("\u63d2\u5c4f\u5e7f\u544a\u5173\u95ed")
                    }))
                },
                setOppoInstTime: function() {
                    var t = cc.sys.localStorage.getItem("OppoInstTime");
                    t || (t = 0), t = parseInt(t), t++, cc.sys.localStorage.setItem("OppoInstTime", t)
                },
                getOppoIsCanInst: function() {
                    var t = cc.sys.localStorage.getItem("OppoInstTime");
                    return t || (t = 0), (t = parseInt(t)) < 8
                },
                setOppoBannerTime: function() {
                    var t = cc.sys.localStorage.getItem("OppoBannerTime");
                    t || (t = 0), t = parseInt(t), t++, cc.sys.localStorage.setItem("OppoBannerTime", t)
                },
                getOppoIsCanBanner: function() {
                    var t = cc.sys.localStorage.getItem("OppoBannerTime");
                    return t || (t = 0), (t = parseInt(t)) < 5
                },
                loadOppoNaviveBanner: function(t) {
                    if (0 != this.getOppoIsCanBanner()) {
                        var e = this;
                        this.loadOppoNative(this.oppoAd_native2, function(o) {
                            1 == o && e.setOppoBannerTime(), t(o)
                        })
                    } else t(0)
                },
                loadOppoNative: function(t, e) {
                    if (cc.sys.platform == cc.sys.OPPO_GAME) {
                        var o = t;
                        if (null == t && (o = this.oppoAd_native), 1 == t ? o = this.oppoAd_native : 2 == t && (o = this.oppoAd_native2), "" != o) {
                            console.log("loadOppoNative");
                            var n = this;
                            this._nativeAd && this._nativeAd.destroy(), this._nativeAd = qg.createNativeAd({
                                adUnitId: o
                            }), this._nativeAd.onError(function(t) {
                                var o = JSON.stringify(t);
                                console.log("nativeAd.onError" + o), null != e && e(0)
                            }), this._nativeAd.onLoad(function(t) {
                                console.log("\u539f\u751f\u5e7f\u544a\u52a0\u8f7d", t.adList), console.log(JSON.stringify(t.adList)), n._nativeData = [], n._nativeData.push(t.adList.pop()), null != e && e(1)
                            }), this._nativeAd.load()
                        }
                    }
                },
                showToast: function(t) {
                    cc.GameManager.showToast(t, function() {})
                },
                showNativeNode: function(t) {
                    console.log("showNativeNode", t);
                    var e = this;
                    this._isShowNativeAD = !0, cc.loader.loadRes("nativenode/sl_NativeAdNode", function(o, n) {
                        var i = cc.instantiate(n);
                        i.getComponent("NativeAdMgr").setCallfun(function() {
                            e._isShowNativeAD = !1, e._oppoAdState = 0
                        }), i.getComponent("NativeAdMgr").showWithData(t), cc.director.getScene().addChild(i)
                    })
                },
                doShock: function(t) {
                    window.qg && (1 == t ? qg.vibrateShort() : qg.vibrateLong())
                }
            });
        e.exports = new i, cc._RF.pop()
    }, {
        keyCtl: "keyCtl"
    }],
    myGameEnum: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "d826a0kzO5NI5PZ9TQTp45z", "myGameEnum");
        var n = cc.Enum({
            gm_tf: 0,
            gm_jydc: 1
        });
        e.exports = n, cc._RF.pop()
    }, {}],
    myUtils: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "03f92XJI81PqK5SzsFxqdnt", "myUtils");
        var n = this && this.__extends || function() {
                var t = function(e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function(e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
                return a > 3 && c && Object.defineProperty(e, o, c), c
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            r = (a.property, function(t) {
                function e() {
                    return t.call(this) || this
                }
                var o;
                return n(e, t), o = e, e.getInstance = function() {
                    return null == o._instance && (o._instance = new o), o._instance
                }, e.prototype.getMyUUid = function() {
                    return this.S4() + this.S4() + this.S4()
                }, e.prototype.S4 = function() {
                    return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
                }, e._instance = null, e = o = i([c], e)
            }(cc.Component));
        o.default = r, cc._RF.pop()
    }, {}],
    shadowCamera: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "86083nZJsRM65JyWWvp6dX6", "shadowCamera");
        var n = this && this.__extends || function() {
                var t = function(e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function(e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
                return a > 3 && c && Object.defineProperty(e, o, c), c
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            r = a.property,
            s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.showPic = null, e._camera = null, e
                }
                return n(e, t), e.prototype.onLoad = function() {
                    this._camera = this.node.getComponent(cc.Camera), this.showPic.node.x = 10, this.showPic.node.y = -10, this.schedule(function() {
                        this.upCamera()
                    }, .1)
                }, e.prototype.upCamera = function() {
                    var t = new cc.RenderTexture;
                    t.initWithSize(cc.winSize.width + 50, cc.winSize.height + 50), this._camera.targetTexture = t, this._camera.render();
                    var e = new cc.SpriteFrame;
                    e.setTexture(t), this.showPic.spriteFrame = e
                }, e.prototype.update = function(t) {}, i([r(cc.Sprite)], e.prototype, "showPic", void 0), e = i([c], e)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {}],
    showAward: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "7195cDdzU1GA42VFOcZBpH0", "showAward");
        var n = this && this.__extends || function() {
                var t = function(e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function(e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
                return a > 3 && c && Object.defineProperty(e, o, c), c
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../utils/GameManager"),
            c = t("../utils/AudioMgr"),
            r = cc._decorator,
            s = r.ccclass,
            l = r.property,
            d = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.rootNode = null, e.freeCoinNode = null, e.otherNode = null, e.videoToggleNode = null, e.goldIcon = null, e._goldNum = 0, e._tipData = null, e._callback = null, e._target = null, e._isPlayVideo = !1, e
                }
                return n(e, t), e.prototype.onLoad = function() {
                    var t = this.rootNode.getChildByName("RingLight");
                    t.scale = .1;
                    var e = this.rootNode.getChildByName("RingLight1");
                    e.scale = .1, t.runAction(cc.sequence(cc.scaleTo(1, 1), cc.fadeOut(.2), cc.spawn(cc.scaleTo(.01, .1), cc.fadeIn(.01))).repeatForever()), e.runAction(cc.sequence(cc.delayTime(.2), cc.scaleTo(1, 1), cc.fadeOut(.2), cc.spawn(cc.scaleTo(.01, .1), cc.fadeIn(.01))).repeatForever())
                }, e.prototype.showUI = function(t) {
                    c.default.getInstance().playSFX("sounds/openaward"), this._goldNum = t.gold, this._tipData = t, this.node.active = !0, this.rootNode.getChildByName("title").getComponent(cc.Label).string = t.title, this.rootNode.getChildByName("name").getComponent(cc.Label).string = t.des, this.rootNode.getChildByName("gold").getComponent(cc.Label).string = "Xu *" + t.gold, this.freeCoinNode.active = "freecoin" == t.type, this.otherNode.active = "freecoin" != t.type;
                    var e = this;
                    if ("gold" == t.type || "collectionaward" == t.type || "freecoin" == t.type) {
                        var o = e.rootNode.getChildByName("image");
                        o.getComponent(cc.Sprite).spriteFrame = this.goldIcon, o.scale = .78
                    } else "collection" == t.type && a.default.getInstance().getMySpriteFrame("collection/c" + t.cid + "_color").then(function(t) {
                        var o = t.getRect().width,
                            n = 280 / t.getRect().height,
                            i = 280 / o,
                            a = e.rootNode.getChildByName("image");
                        a.getComponent(cc.Sprite).spriteFrame = t, a.scale = n > i ? i : n
                    });
                    t.callback && (this._callback = t.callback), t.target && (this._target = t.target), cc.adCtl.testChannel(5) && (cc.adCtl.testM4399T() ? this.videoToggleNode.node.active = "Lên cấp" == t.title : this.videoToggleNode.node.active = !1), this.videoToggleNode.isChecked = !0, this.videoToggleNode.node.active ? this._isPlayVideo = !0 : this._isPlayVideo = !1
                }, e.prototype.doMyCallBack = function() {
                    this._target && this._callback && this._callback.call(this._target)
                }, e.prototype.videoBtn = function(t) {
                    c.default.getInstance().playSFX("sounds/button");
                    var e = this.node.getComponentInChildren(cc.Toggle).node.active;
                    if (this._isPlayVideo && e) {
                        var o = this;
                        cc.adCtl.showVideo(function(t) {
                            1 == t && a.default.getInstance().addGold(4 * o._goldNum, !0)
                        })
                    } else a.default.getInstance().addGold(this._goldNum, !0);
                    this.node.active = !1, this.doMyCallBack()
                }, e.prototype.freeCoinVideoBtn = function(t) {
                    c.default.getInstance().playSFX("sounds/button");
                    var e = this;
                    cc.adCtl.showVideo(function(t) {
                        1 == t && (a.default.getInstance().addGold(e._goldNum, !0), e.node.active = !1, e.doMyCallBack())
                    })
                }, e.prototype.closeBtn = function(t) {
                    c.default.getInstance().playSFX("sounds/menu_out"), this.node.active = !1, this.doMyCallBack()
                }, e.prototype.vidoeToggleBtn = function(t, e) {
                    c.default.getInstance().playSFX("sounds/button"), this._isPlayVideo = t.isChecked
                }, e.prototype.doubleVideoBtn = function(t, e) {
                    c.default.getInstance().playSFX("sounds/button");
                    var o = this;
                    cc.adCtl.showVideo(function(t) {
                        1 == t && a.default.getInstance().addGold(4 * o._goldNum, !0)
                    }), this.node.active = !1, this.doMyCallBack()
                }, i([l(cc.Node)], e.prototype, "rootNode", void 0), i([l(cc.Node)], e.prototype, "freeCoinNode", void 0), i([l(cc.Node)], e.prototype, "otherNode", void 0), i([l(cc.Toggle)], e.prototype, "videoToggleNode", void 0), i([l(cc.SpriteFrame)], e.prototype, "goldIcon", void 0), e = i([s], e)
            }(cc.Component);
        o.default = d, cc._RF.pop()
    }, {
        "../utils/AudioMgr": "AudioMgr",
        "../utils/GameManager": "GameManager"
    }],
    sl_ScaleEffect: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "7c46aANn7lOwqO1Pto8+/kk", "sl_ScaleEffect");
        var n = this && this.__extends || function() {
                var t = function(e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function(e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
                return a > 3 && c && Object.defineProperty(e, o, c), c
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            r = (a.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return n(e, t), e.prototype.onLoad = function() {
                    this.schedule(function() {
                        this.node.runAction(cc.sequence(cc.scaleTo(.1, 1.2), cc.scaleTo(.1, 1.3, 1), cc.scaleTo(.1, .9), cc.scaleTo(.1, 1)))
                    }, Math.ceil(10 * Math.random()) + 10)
                }, e = i([c], e)
            }(cc.Component));
        o.default = r, cc._RF.pop()
    }, {}],
    thinkLandSwitch: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "04ebcfec1NOyaFdjN1AgmFu", "thinkLandSwitch");
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            i = cc.Class({
                name: "thinkLandSwitch",
                properties: {
                    _limitData: null,
                    _limitCity: 1
                },
                ctor: function() {},
                initSDK: function() {
                    var t = this;
                    this.getGameSwitch("minigame_jydcbsa", "1.1.0", "vivo").then(function(e) {
                        var o = JSON.parse(e);
                        t._limitData = o, console.log(o)
                    }), this.getCityLimit("vivo").then(function(e) {
                        t._limitCity = e, console.log(e, t.isCanAuto())
                    })
                },
                getGameSwitch: function(t, e, o) {
                    var n = new Array;
                    return n.gameid = t, n.versions = e, n.channel = o, new Promise(function(t, e) {
                        var o = "";
                        for (var i in n) o += i + "=" + n[i] + "&";
                        var a = cc.loader.getXMLHttpRequest();
                        a.onreadystatechange = function() {
                            if (cc.log("xhr.readyState=" + a.readyState + "  xhr.status=" + a.status), 4 === a.readyState && a.status >= 200 && a.status < 300) {
                                var e = a.responseText;
                                t(e)
                            }
                        };
                        a.open("POST", "http://115.29.170.177/gameswitch/getGameSwitch.php", !0), a.timeout = 5e3, a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.send(o)
                    })
                },
                getCityLimit: function(t) {
                    var e = new Array;
                    return e.channel = t, new Promise(function(t, o) {
                        var n = "";
                        for (var i in e) n += i + "=" + e[i] + "&";
                        var a = cc.loader.getXMLHttpRequest();
                        a.onreadystatechange = function() {
                            if (cc.log("xhr.readyState=" + a.readyState + "  xhr.status=" + a.status), 4 === a.readyState && a.status >= 200 && a.status < 300) {
                                var e = a.responseText;
                                t(e)
                            }
                        };
                        a.open("POST", "http://115.29.170.177/gamelimit/limit.php", !0), a.timeout = 5e3, a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.send(n)
                    })
                },
                isCanAuto: function() {
                    var t = 100 * Math.random();
                    if (0 == this._limitCity) {
                        var e = this._limitData;
                        if (!e) return !1;
                        if ("object" == (void 0 === e ? "undefined" : n(e))) {
                            var o = e[0];
                            if (o.hasOwnProperty("switch1") && 1 == o.switch1) {
                                var i = o.switch3.split(";");
                                if (i && 6 == i.length)
                                    if (t <= i[4]) return !0
                            }
                        }
                    }
                    return !1
                }
            });
        cc.thinkLandSw = new i, e.exports = cc.thinkLandSw, cc._RF.pop()
    }, {}],
    wallbound: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "12d18AdfiJOU4P7rGHe3h8k", "wallbound");
        var n = this && this.__extends || function() {
                var t = function(e, o) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                        })(e, o)
                };
                return function(e, o) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
                }
            }(),
            i = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (c = (a < 3 ? i(c) : a > 3 ? i(e, o, c) : i(e, o)) || c);
                return a > 3 && c && Object.defineProperty(e, o, c), c
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            r = a.property,
            s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.mouseJoint = !0, e
                }
                return n(e, t), e.prototype.onLoad = function() {}, e.prototype.initView = function() {
                    cc.winSize.width, cc.winSize.height, this.node
                }, e.prototype._addBound = function(t, e, o, n, i) {
                    var a = t.addComponent(cc.PhysicsBoxCollider);
                    a.offset.x = e, a.offset.y = o, a.size.width = n, a.size.height = i
                }, i([r], e.prototype, "mouseJoint", void 0), e = i([c], e)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {}],
    xiaomiAdManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ed062vC9L9AD4lUk40QX5Hi", "xiaomiAdManager");
        cc.Class({
            extends: cc.Component,
            properties: {
                platform: "xiaomi",
                videoAdCtrl: null,
                videoAdCall: null,
                lastInstTime: 0
            },
            initSDK: function() {
                window.qg ? this.platform = "xiaomi" : this.platform = "pc", this.initMyVideoAds()
            },
            showToast: function(t) {
                cc.log(t), "xiaomi" == this.platform && qg.showToast({
                    title: t,
                    icon: "none",
                    duration: 2e3
                })
            },
            initMyVideoAds: function() {
                if ("xiaomi" == this.platform) {
                    var t = this;
                    this.videoAdCtrl = qg.createRewardedVideoAd({
                        adUnitId: "8a4029fe5a30c180d9b7f6a0b1e390f3"
                    }), this.videoAdCtrl.onError(function(t) {
                        console.log("\u5e7f\u544a\u52a0\u8f7d\u51fa\u9519 " + JSON.stringify(t))
                    }), this.videoAdCtrl.onLoad(function() {
                        console.log("\u52a0\u8f7d\u4e8b\u4ef6\u56de\u8c03")
                    }), this.videoAdCtrl.onClose(function(e) {
                        console.log("\u662f\u5426\u89c2\u770b\u5b8c\u6574\u4e86 " + e.isEnded), e.isEnded ? t.videoAdCall(1) : t.videoAdCall(0)
                    })
                }
            },
            ShowMyVideoAds: function(t) {
                var e = this;
                if (console.log("xiaomi ShowVideoAds \u4e8b\u4ef6\u56de\u8c03"), this.videoAdCall = t, "xiaomi" == this.platform) {
                    if (null == this.videoAdCtrl) return void this.videoAdCall(0);
                    var o = Math.floor((new Date).getTime() / 1e3);
                    o > this.lastInstTime ? (this.videoAdCtrl.load().then(function() {
                        return e.videoAdCtrl.show()
                    }).catch(function(t) {
                        return console.log(t.errMsg)
                    }), this.lastInstTime = Math.floor(o) + 60) : cc.GameManager.showToast("Không có quảng cáo")
                } else console.log("mycb\u4e8b\u4ef6\u56de\u8c03"), cc.sys.platform == cc.sys.DESKTOP_BROWSER && this.videoAdCall(1)
            },
            showInstAd: function() {
                if ("xiaomi" == this.platform) {
                    var t = Math.floor((new Date).getTime() / 1e3);
                    if (t > this.lastInstTime) {
                        this.lastInstTime = Math.floor(t) + 60;
                        var e = qg.createInterstitialAd({
                            adUnitId: "54dc40dd3914b64bc20300ca6b9d2751"
                        });
                        e.onLoad(function() {
                            e.show()
                        }), e.onError(function(t) {
                            console.log("Lỗi khi tải quảng cáo " + JSON.stringify(t))
                        })
                    }
                }
            }
        }), cc._RF.pop()
    }, {}]
}, {}, ["4399AdManager", "BaiduAdManager", "GameChannelCtl", "GameCtl", "InitChannel", "MyAdCtl", "MyChannelEnum", "QQAdManager", "ShowBanner", "TTAdManager", "androidManager", "keyCtl", "m4399Ctl", "myAdManager", "myGameEnum", "xiaomiAdManager", "BrickCtl", "WeaponCtl", "shadowCamera", "sl_ScaleEffect", "wallbound", "EnumData", "gameData", "AudioMgr", "Emitter", "GameManager", "RigidRead", "myUtils", "ExpLvNode", "GameResCtl", "GameScene", "GameTips", "GameUI", "HomeScene", "SettingNode", "SkinNode", "UnderBar", "initBricks", "showAward", "NativeAdMgr", "NativeIcon", "thinkLandSwitch", "findMyGameIcon", "findMyGamePic"]);