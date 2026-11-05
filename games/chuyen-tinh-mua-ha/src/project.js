window.__require = function t(e, i, n) {
    function o(s, c) {
        if (!i[s]) {
            if (!e[s]) {
                var r = s.split("/");
                if (r = r[r.length - 1], !e[r]) {
                    var l = "function" == typeof __require && __require;
                    if (!c && l) return l(r, !0);
                    if (a) return a(r, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
                s = r
            }
            var h = i[s] = {
                exports: {}
            };
            e[s][0].call(h.exports, function(t) {
                return o(e[s][1][t] || t)
            }, h, h.exports, t, e, i, n)
        }
        return i[s].exports
    }
    for (var a = "function" == typeof __require && __require, s = 0; s < n.length; s++) o(n[s]);
    return o
}({
    Achievement: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "9887dB2B9NItKeT3gr/KnNF", "Achievement");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            s = a.ccclass,
            c = a.property,
            r = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.achieveRed = [], e.achieveTrigger = [!1, !1, !1, !1], e.refreshTs = 0, e
                }
                var i;
                return n(e, t), i = e, e.getInstance = function() {
                    return i.instance
                }, e.prototype.onLoad = function() {
                    i.instance = this
                }, e.prototype.start = function() {}, e.prototype.update = function(t) {
                    this.refreshTs += t, this.refreshTs >= 1 && (this.refreshTs = 0, this.RefreshRedPoint())
                }, e.prototype.RefreshRedPoint = function() {
                    for (var t = 0; t < this.achieveTrigger.length; t++) this.achieveTrigger[t] ? this.achieveRed[t].active || (this.achieveRed[t].active = !0) : this.achieveRed[t].active && (this.achieveRed[t].active = !1)
                }, e.instance = null, o([c(cc.Node)], e.prototype, "achieveRed", void 0), e = i = o([s], e)
            }(cc.Component);
        i.default = r, cc._RF.pop()
    }, {}],
    AdsMananger: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "3635eLg4AlHj540Ah33SqdK", "AdsMananger");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./GameLocalData"),
            s = cc._decorator,
            c = s.ccclass,
            r = s.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.bannerAd = null, e.interstitialAd = null, e.rewardedVideoAd = null, e.callBack = null, e.checkTs = 60, e.isCheck = !1, e.isShowBanner = !1, e.autoVideoTS = 0, e.adsSwitch = 0, e.checkNode = null, e
                }
                var i;
                return n(e, t), i = e, e.GetInstance = function() {
                    return this.instance
                }, e.prototype.onLoad = function() {
                    cc.game.addPersistRootNode(this.node), i.instance = this
                }, e.prototype.start = function() {
                    this.checkNode.on(cc.Node.EventType.TOUCH_END, this.onClickCheck, this), this.checkNode._touchListener.setSwallowTouches(!1), this.controlAds()
                }, e.prototype.update = function(t) {
                    1 == this.adsSwitch && (this.autoVideoTS += t, this.autoVideoTS > 120 && (cc.audioEngine.isMusicPlaying() && cc.audioEngine.pauseMusic(), MetaAd.show(function() {
                        1 == a.default.getInstance().isMusic && cc.audioEngine.resumeMusic()
                    }), this.autoVideoTS = 0))
                }, e.prototype.CreateBanner = function() {
                    var t = this;
                    this.bannerAd && this.bannerAd.destroy();
                    var e = qq.getSystemInfoSync(),
                        i = e.windowWidth,
                        n = e.windowHeight;
                    this.bannerAd = qq.createBannerAd({
                        adUnitId: "c8cebcb1a6c7d0a57c5b7101313f2a6b",
                        style: {
                            width: 300,
                            top: n - 168.75,
                            left: (i - 300) / 2
                        }
                    }), this.bannerAd.style.left = (i - 300) / 2, this.bannerAd.onResize(function(e) {
                        console.log(e.width, e.height), t.bannerAd.style.top = n - e.height, t.bannerAd.style.left = (i - e.width) / 2
                    }), this.bannerAd.onError(function(t) {
                        console.log(t)
                    }), this.bannerAd.onLoad(function() {
                        console.log("banner \u5e7f\u544a\u52a0\u8f7d\u6210\u529f")
                    })
                }, e.prototype.ShowBanner = function() {}, e.prototype.DelayBannerShow = function() {}, e.prototype.HideBanner = function() {}, e.prototype.Createinterstitial = function() {
                    var t = this;
                    this.interstitialAd = qq.createInterstitialAd({
                        adUnitId: "4d9d09f9d1fb4e95d87ada9ac53d85db"
                    }), this.interstitialAd.onLoad(function() {
                        console.log("Quảng cáo xen kẽ được tải thành công")
                    }), this.interstitialAd.onError(function(t) {
                        console.log(t)
                    }), this.interstitialAd.onClose(function(e) {
                        t.isCheck = !0, console.log("Tắt quảng cáo xen kẽ")
                    })
                }, e.prototype.Showinterstitial = function() {}, e.prototype.CreateRewardedVideo = function() {
                    var t = this;
                    this.rewardedVideoAd = qq.createRewardedVideoAd({
                        adUnitId: "614a06e3a289a55b3ba710b42e7d4cbc"
                    }), this.rewardedVideoAd.onLoad(function() {
                        console.log("Đã tải thành công quảng cáo video có tặng thưởng")
                    }), this.rewardedVideoAd.onError(function(t) {
                        console.log(t)
                    }), this.rewardedVideoAd.onClose(function(e) {
                        e && e.isEnded || void 0 === e ? t.wachAdFinish(!0) : t.wachAdFinish(!1)
                    })
                }, e.prototype.ShowRewardVideo = function(t) {
                    cc.audioEngine.isMusicPlaying() && cc.audioEngine.pauseMusic();
                    var e = this;
                    this.callBack = t, MetaAd.show(function() {
                        console.log("Sau khi xem video, nhận phần thưởng"), e.wachAdFinish(!0)
                    })
					console.log("78987544",e);
                }, e.prototype.wachAdFinish = function(t) {
                    var e = this.callBack;
                    t ? e && (this.scheduleOnce(e, .5), this.callBack = null, a.default.getInstance().missionWatchNum < 3 && a.default.getInstance().missionWatchNum++) : qq.showToast({
                        title: "Nếu bạn chưa xem video hoàn chỉnh, không có phần thưởng",
                        icon: "none",
                        duration: 2e3
                    }), 1 == a.default.getInstance().isMusic && cc.audioEngine.resumeMusic()
					console.log("ppppppp",e,a);
                }, e.prototype.onClickCheck = function(t) {
                    this.checkTs = 60
                }, e.prototype.controlAds = function() {}, e.instance = null, o([r(cc.Node)], e.prototype, "checkNode", void 0), e = i = o([c], e)
            }(cc.Component);
        i.default = l, cc._RF.pop()
    }, {
        "./GameLocalData": "GameLocalData"
    }],
    AirDrop: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "dee5eJfEndPE5ac6dhS4a+1", "AirDrop");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./GameLocalData"),
            s = t("./make/Make"),
            c = t("./AdsMananger"),
            r = t("./AudioManager"),
            l = cc._decorator,
            h = l.ccclass,
            u = l.property,
            d = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.balloon = null, e.touch = null, e.make = null, e.special = null, e.pingfen = null, e.makeEvenlop = null, e.moveType = 0, e.worldPos = cc.Vec2.ZERO, e.buildLev = 0, e.buildNum = 0, e.showTs = 60, e.isSurper = !1, e.isFly = !1, e
                }
                return n(e, t), e.prototype.start = function() {
                    this.balloon.parent.active = !1, this.touch.on(cc.Node.EventType.TOUCH_END, this.onClickBoloon, this, !0)
                }, e.prototype.update = function(t) {
                    if (this.isSurper && (this.showTs -= t, this.showTs <= 0)) {
                        this.balloon.getComponent(dragonBones.ArmatureDisplay).playAnimation("gift", 0), this.balloon.parent.active = !0, this.isSurper = !1, this.showTs = 60;
                        var e = Math.floor(2 * Math.random() + 1);
                        1 == e ? this.balloon.parent.setPosition(new cc.Vec2(360, 355)) : this.balloon.parent.setPosition(new cc.Vec2(-360, 355)), this.moveType = e, this.isFly = !0
                    }
                    this.isFly && (this.pingfen.active ? this.balloon.parent.active && (this.balloon.parent.active = !1) : this.balloon.parent.active || (this.balloon.parent.active = !0)), this.SetBalloonMoveType(t)
                }, e.prototype.SetBalloonMoveType = function(t) {
                    var e;
                    this.isFly && (1 == this.moveType ? ((e = this.balloon.parent.position).x -= 20 * t, this.balloon.parent.setPosition(e), e.x <= -360 && (this.balloon.parent.active = !1, this.isFly = !1, this.worldPos = new cc.Vec2(0, 992), this.isSurper = !0)) : ((e = this.balloon.parent.position).x += 20 * t, this.balloon.parent.setPosition(e), e.x >= 360 && (this.balloon.parent.active = !1, this.isFly = !1, this.worldPos = new cc.Vec2(720, 992), this.isSurper = !0)))
                }, e.prototype.onClickBoloon = function(t) {
                    this.worldPos = t.getLocation(), this.isFly = !1, this.balloon.parent.active = !1, this.special.active = !0, this.special.setScale(0), cc.tween(this.special).to(.25, {
                        scale: 1.25
                    }).to(.1, {
                        scale: 1
                    }).start()
                }, e.prototype.onClickMore = function() {
                    /* var t = this;
                    c.default.GetInstance().ShowRewardVideo(function() {
                        return t.MoreSuccess()
						console.log("iiiiiiii");
                    }) */
					r.default.getInstance().PlayBtAudio(9), this.special.active = !1, this.scheduleOnce(this.DelayBuild, .01)
					console.log("54844ff");
                }, e.prototype.MoreSuccess = function() {
                    r.default.getInstance().PlayBtAudio(9), this.special.active = !1, this.scheduleOnce(this.DelayBuild, .01)
                }, e.prototype.CloseMoreSpcial = function() {
                    this.special.active = !1, this.isSurper = !0
                }, e.prototype.DelayBuild = function() {
                    this.BuildEnvelop()
                }, e.prototype.BuildEnvelop = function() {
                    var t = a.default.getInstance().getPartsHighestLevs(this.make.getComponent(s.default).charaType);
                    this.buildNum = 8, t - 5 <= 1 ? t = 1 : t -= 5, this.buildLev = t, this.balloon.parent.active = !1, this.schedule(this.DelayBuildMatter, .75)
                }, e.prototype.DelayBuildMatter = function() {
                    if (this.buildNum > 0) {
                        for (var t = 0; t < 12; t++) {
                            var e = a.default.getInstance().getGirdLevs(this.make.getComponent(s.default).charaType, t);
                            if (e <= 0 && -1 != e) {
                                this.buildNum--, this.make.getComponent(s.default).BuildEnvelope(t, this.buildLev, this.worldPos), this.CheckEvenlop();
                                break
                            }
                        }
                        this.buildNum <= 0 && (this.isSurper = !0, this.unschedule(this.DelayBuildMatter))
                    }
                }, e.prototype.CheckEvenlop = function() {
                    if (!this.make.getComponent(s.default).isMoveIn && !this.pingfen.active) {
                        var t = this;
                        this.makeEvenlop.active = !0, this.makeEvenlop.setPosition(this.balloon.parent.position), cc.tween(this.makeEvenlop).to(.65, {
                            position: new cc.Vec3(-156, -557, 0)
                        }).call(function() {
                            t.makeEvenlop.active = !1
                        }).start()
                    }
                }, o([u(cc.Node)], e.prototype, "balloon", void 0), o([u(cc.Node)], e.prototype, "touch", void 0), o([u(cc.Node)], e.prototype, "make", void 0), o([u(cc.Node)], e.prototype, "special", void 0), o([u(cc.Node)], e.prototype, "pingfen", void 0), o([u(cc.Node)], e.prototype, "makeEvenlop", void 0), e = o([h], e)
            }(cc.Component);
        i.default = d, cc._RF.pop()
    }, {
        "./AdsMananger": "AdsMananger",
        "./AudioManager": "AudioManager",
        "./GameLocalData": "GameLocalData",
        "./make/Make": "Make"
    }],
    AssetsManager: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "cab36gZXJRHkqI8OUKdkmOv", "AssetsManager");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./CharacterInfo"),
            s = cc._decorator,
            c = s.ccclass,
            r = (s.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.iconHairs = [], e.iconOrnaments = [], e.iconClothes = [], e.iconBags = [], e.iconShoes = [], e.iconSpecials = [], e.mainHairs = [], e.mainOrnaments = [], e.mainClothes = [], e.mainBags = [], e.mainShoes = [], e.mainSpecials = [], e.isLoadOver = !1, e.isStartLoad = !1, e.totalNum = 0, e.iconCount = [0, 0, 0, 0, 0, 0], e.iconLoad = [!1, !1, !1, !1, !1, !1], e.mainCount = [0, 0, 0, 0, 0, 0], e.mainLoad = [!1, !1, !1, !1, !1, !1], e.isLoadHair = !1, e.isLoadOrnament = !1, e.isLoadClothes = !1, e.isLoadBag = !1, e.isLoadShoes = !1, e.isLoadSpecial = !1, e
                }
                var i;
                return n(e, t), i = e, e.getInstance = function() {
                    return i.instance
                }, e.prototype.onLoad = function() {
                    cc.game.addPersistRootNode(this.node), i.instance = this
                }, e.prototype.start = function() {
                    this.isLoadOver = !1, this.isLoadHair = !1, this.isLoadOrnament = !1, this.isLoadClothes = !1, this.isLoadBag = !1, this.isLoadShoes = !1, this.isLoadSpecial = !1
                }, e.prototype.update = function(t) {
                    if (this.isStartLoad) {
                        var e = this;
                        if (this.isLoadOver = !0, this.iconCount[0] < 35) {
                            if (!this.iconLoad[0]) {
                                this.iconLoad[0] = !0;
                                var i = "icons/a01hair/hair" + (this.iconCount[0] + 1 < 10 ? "0" + (this.iconCount[0] + 1) : this.iconCount[0] + 1);
                                cc.loader.loadRes(i, cc.Texture2D, function(t, i) {
                                    e.iconHairs[e.iconCount[0]] = i, e.iconLoad[0] = !1, e.iconCount[0]++, e.totalNum++
                                })
                            }
                            this.isLoadOver = !1
                        }
                        if (this.iconCount[1] < 35) {
                            if (!this.iconLoad[1]) {
                                this.iconLoad[1] = !0;
                                i = "icons/a02top/tap" + (this.iconCount[1] + 1 < 10 ? "0" + (this.iconCount[1] + 1) : this.iconCount[1] + 1);
                                cc.loader.loadRes(i, cc.Texture2D, function(t, i) {
                                    e.iconOrnaments[e.iconCount[1]] = i, e.iconLoad[1] = !1, e.iconCount[1]++, e.totalNum++
                                })
                            }
                            this.isLoadOver = !1
                        }
                        if (this.iconCount[2] < 35) {
                            if (!this.iconLoad[2]) {
                                this.iconLoad[2] = !0;
                                i = "icons/a03clothes/cloth" + (this.iconCount[2] + 1 < 10 ? "0" + (this.iconCount[2] + 1) : this.iconCount[2] + 1);
                                cc.loader.loadRes(i, cc.Texture2D, function(t, i) {
                                    e.iconClothes[e.iconCount[2]] = i, e.iconLoad[2] = !1, e.iconCount[2]++, e.totalNum++
                                })
                            }
                            this.isLoadOver = !1
                        }
                        if (this.iconCount[3] < 35) {
                            if (!this.iconLoad[3]) {
                                this.iconLoad[3] = !0;
                                i = "icons/a04bags/bag" + (this.iconCount[3] + 1 < 10 ? "0" + (this.iconCount[3] + 1) : this.iconCount[3] + 1);
                                cc.loader.loadRes(i, cc.Texture2D, function(t, i) {
                                    e.iconBags[e.iconCount[3]] = i, e.iconLoad[3] = !1, e.iconCount[3]++, e.totalNum++
                                })
                            }
                            this.isLoadOver = !1
                        }
                        if (this.iconCount[4] < 35) {
                            if (!this.iconLoad[4]) {
                                this.iconLoad[4] = !0;
                                i = "icons/a05shoes/shoe" + (this.iconCount[4] + 1 < 10 ? "0" + (this.iconCount[4] + 1) : this.iconCount[4] + 1);
                                cc.loader.loadRes(i, cc.Texture2D, function(t, i) {
                                    e.iconShoes[e.iconCount[4]] = i, e.iconLoad[4] = !1, e.iconCount[4]++, e.totalNum++
                                })
                            }
                            this.isLoadOver = !1
                        }
                        if (this.iconCount[5] < 26) {
                            if (!this.iconLoad[5]) {
                                this.iconLoad[5] = !0;
                                i = "icons/a06special/sp" + (this.iconCount[5] + 1 < 10 ? "0" + (this.iconCount[5] + 1) : this.iconCount[5] + 1);
                                cc.loader.loadRes(i, cc.Texture2D, function(t, i) {
                                    e.iconSpecials[e.iconCount[5]] = i, e.iconLoad[5] = !1, e.iconCount[5]++, e.totalNum++
                                })
                            }
                            this.isLoadOver = !1
                        }
                        if (this.mainCount[0] < 35) {
                            if (!this.mainLoad[0]) {
                                this.mainLoad[0] = !0;
                                i = "main/a01hair/hair" + (this.mainCount[0] + 1 < 10 ? "0" + (this.mainCount[0] + 1) : this.mainCount[0] + 1);
                                cc.loader.loadRes(i, cc.Texture2D, function(t, i) {
                                    e.mainHairs[e.mainCount[0]] = i, e.mainLoad[0] = !1, e.mainCount[0]++, e.totalNum++
                                })
                            }
                            this.isLoadOver = !1
                        }
                        if (this.mainCount[1] < 35) {
                            if (!this.mainLoad[1]) {
                                this.mainLoad[1] = !0;
                                i = "main/a02top/tap" + (this.mainCount[1] + 1 < 10 ? "0" + (this.mainCount[1] + 1) : this.mainCount[1] + 1);
                                cc.loader.loadRes(i, cc.Texture2D, function(t, i) {
                                    e.mainOrnaments[e.mainCount[1]] = i, e.mainLoad[1] = !1, e.mainCount[1]++, e.totalNum++
                                })
                            }
                            this.isLoadOver = !1
                        }
                        if (this.mainCount[2] < 35) {
                            if (!this.mainLoad[2]) {
                                this.mainLoad[2] = !0;
                                i = "main/a03clothes/cloth_0" + (this.mainCount[2] + 1 < 10 ? "0" + (this.mainCount[2] + 1) : this.mainCount[2] + 1);
                                cc.loader.loadRes(i, cc.Texture2D, function(t, i) {
                                    e.mainClothes[e.mainCount[2]] = i, e.mainLoad[2] = !1, e.mainCount[2]++, e.totalNum++
                                })
                            }
                            this.isLoadOver = !1
                        }
                        if (this.mainCount[3] < 35) {
                            if (!this.mainLoad[3]) {
                                this.mainLoad[3] = !0;
                                i = "main/a04bags/bag_0" + (this.mainCount[3] + 1 < 10 ? "0" + (this.mainCount[3] + 1) : this.mainCount[3] + 1);
                                cc.loader.loadRes(i, cc.Texture2D, function(t, i) {
                                    e.mainBags[e.mainCount[3]] = i, e.mainLoad[3] = !1, e.mainCount[3]++, e.totalNum++
                                })
                            }
                            this.isLoadOver = !1
                        }
                        if (this.mainCount[4] < 35) {
                            if (!this.mainLoad[4]) {
                                this.mainLoad[4] = !0;
                                i = "main/a05shoes/shoe" + (this.mainCount[4] + 1 < 10 ? "0" + (this.mainCount[4] + 1) : this.mainCount[4] + 1);
                                cc.loader.loadRes(i, cc.Texture2D, function(t, i) {
                                    e.mainShoes[e.mainCount[4]] = i, e.mainLoad[4] = !1, e.mainCount[4]++, e.totalNum++
                                })
                            }
                            this.isLoadOver = !1
                        }
                        if (this.mainCount[5] < 26) {
                            if (!this.mainLoad[5]) {
                                this.mainLoad[5] = !0;
                                i = "main/ao6sp/sp" + (this.mainCount[5] + 1 < 10 ? "0" + (this.mainCount[5] + 1) : this.mainCount[5] + 1);
                                cc.loader.loadRes(i, cc.Texture2D, function(t, i) {
                                    e.mainSpecials[e.mainCount[5]] = i, e.mainLoad[5] = !1, e.mainCount[5]++, e.totalNum++
                                })
                            }
                            this.isLoadOver = !1
                        }
                    }
                }, e.prototype.getIcon = function(t, e) {
                    var i = null;
                    switch (t) {
                        case a.default.Cha_Hair:
                            i = this.iconHairs[e];
                            break;
                        case a.default.Cha_Ornament:
                            i = this.iconOrnaments[e];
                            break;
                        case a.default.Cha_Clothes:
                            i = this.iconClothes[e];
                            break;
                        case a.default.Cha_Bag:
                            i = this.iconBags[e];
                            break;
                        case a.default.Cha_Shoes:
                            i = this.iconShoes[e];
                            break;
                        case a.default.Cha_Special:
                            i = this.iconSpecials[e]
                    }
                    return i
                }, e.prototype.GetMain = function(t, e) {
                    var i = null;
                    switch (t) {
                        case a.default.Cha_Hair:
                            i = this.mainHairs[e];
                            break;
                        case a.default.Cha_Ornament:
                            i = this.mainOrnaments[e];
                            break;
                        case a.default.Cha_Clothes:
                            i = this.mainClothes[e];
                            break;
                        case a.default.Cha_Bag:
                            i = this.mainBags[e];
                            break;
                        case a.default.Cha_Shoes:
                            i = this.mainShoes[e];
                            break;
                        case a.default.Cha_Special:
                            i = this.mainSpecials[e]
                    }
                    return i
                }, e.instance = null, e = i = o([c], e)
            }(cc.Component));
        i.default = r, cc._RF.pop()
    }, {
        "./CharacterInfo": "CharacterInfo"
    }],
    AudioManager: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "318abmpSKNAlbvCAdlPIjOr", "AudioManager");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./GameLocalData"),
            s = cc._decorator,
            c = s.ccclass,
            r = s.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.audioClip = [], e.isMusic = !0, e.isAudio = !0, e.musicSp = null, e.audioSp = null, e.auidoSpr = [], e
                }
                var i;
                return n(e, t), i = e, e.getInstance = function() {
                    return i.instance
                }, e.prototype.onLoad = function() {
                    cc.game.addPersistRootNode(this.node), i.instance = this
                }, e.prototype.start = function() {
                    this.isMusic = Boolean(a.default.getInstance().isMusic), this.isAudio = Boolean(a.default.getInstance().isAudio), this.CheckAudioBt(), this.isMusic && this.PlayBgAudio(0)
                }, e.prototype.CheckAudioBt = function() {
                    this.isMusic ? this.musicSp.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.auidoSpr[0] : this.musicSp.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.auidoSpr[1], this.isAudio ? this.audioSp.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.auidoSpr[0] : this.audioSp.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.auidoSpr[1]
                }, e.prototype.PlayBgAudio = function(t) {
                    this.isMusic && cc.audioEngine.playMusic(this.audioClip[t], !0)
                }, e.prototype.PlayBtAudio = function(t) {
                    this.isAudio && cc.audioEngine.playEffect(this.audioClip[t], !1)
                }, e.prototype.ChangeMusic = function() {
                    this.isMusic ? (this.isMusic = !1, a.default.getInstance().isMusic = 0, cc.audioEngine.pauseMusic(), this.musicSp.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.auidoSpr[1]) : (this.isMusic = !0, a.default.getInstance().isMusic = 1, cc.audioEngine.resumeMusic(), this.musicSp.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.auidoSpr[0]), a.default.getInstance().saveData()
                }, e.prototype.ChangeAudio = function() {
                    this.isAudio ? (this.isAudio = !1, a.default.getInstance().isAudio = 0, this.audioSp.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.auidoSpr[1]) : (this.isAudio = !0, a.default.getInstance().isAudio = 1, this.audioSp.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.auidoSpr[0]), a.default.getInstance().saveData()
                }, e.instance = null, o([r({
                    type: cc.AudioClip
                })], e.prototype, "audioClip", void 0), o([r(cc.Node)], e.prototype, "musicSp", void 0), o([r(cc.Node)], e.prototype, "audioSp", void 0), o([r(cc.SpriteFrame)], e.prototype, "auidoSpr", void 0), e = i = o([c], e)
            }(cc.Component);
        i.default = l, cc._RF.pop()
    }, {
        "./GameLocalData": "GameLocalData"
    }],
    ButtonSet: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "55de8MMaBRN7YRDDDzCjaFt", "ButtonSet");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            s = a.ccclass,
            c = a.property,
            r = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.buttons = [], e.btSpriteNormal = [], e.btSpritePress = [], e
                }
                return n(e, t), e.prototype.start = function() {}, e.prototype.SetButtonState = function(t) {
                    for (var e = 0; e < this.buttons.length; e++) {
                        this.buttons[e].getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.btSpriteNormal[e]
                    }
                    this.buttons[t].getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.btSpritePress[t]
                }, e.prototype.SetButtonInit = function() {
                    for (var t = 0; t < this.buttons.length; t++) {
                        this.buttons[t].getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.btSpriteNormal[t]
                    }
                }, o([c([cc.Node])], e.prototype, "buttons", void 0), o([c([cc.SpriteFrame])], e.prototype, "btSpriteNormal", void 0), o([c([cc.SpriteFrame])], e.prototype, "btSpritePress", void 0), e = o([s], e)
            }(cc.Component);
        i.default = r, cc._RF.pop()
    }, {}],
    Buy: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "749cb/mgMdBH6mKWBUCBulq", "Buy");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./ButtonSet"),
            s = t("./GameLocalData"),
            c = t("./CharacterInfo"),
            r = t("./make/Make"),
            l = t("./AssetsManager"),
            h = t("./GameManger"),
            u = t("./AdsMananger"),
            d = cc._decorator,
            p = d.ccclass,
            g = d.property,
            f = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.make = null, e.buy = null, e.tips = null, e.shangTouch = null, e.buttons = null, e.buyNode = null, e.gridItems = [], e.typeIndex = 0, e.isMoveIn = !1, e.startPos = cc.Vec2.ZERO, e
                }
                return n(e, t), e.prototype.onLoad = function() {
                    this.startPos = this.node.getPosition(), this.node.y = this.startPos.y - 665, this.SetBuyAllItem()
                }, e.prototype.start = function() {
                    this.shangTouch.on(cc.Node.EventType.TOUCH_END, this.onTouchShangEnd, this)
                }, e.prototype.onTouchShangEnd = function(t) {
                    this.moveOut()
                }, e.prototype.CloseBuyScene = function() {
                    this.make.getComponent(r.default).moveIn(), this.moveOut()
                }, e.prototype.onclickBt = function(t, e) {
                    var i = parseInt(e);
                    this.typeIndex = i, this.buttons.SetButtonState(i), this.SetIconFrame(), this.SetAllTypeItem(this.typeIndex)
                }, e.prototype.onclickBuy = function(t, e) {
                    var i = this,
                        n = parseInt(e),
                        o = s.default.getInstance().getPartsHighestLevs(this.typeIndex);
                    n < s.default.getInstance().unlockTag[this.typeIndex] ? (this.buildMatter(n), this.RefreshMatter(), this.Refreshprice(n)) : o >= 6 && n + 4 == o ? u.default.GetInstance().ShowRewardVideo(function() {
                        return i.AdsVideoUnlock(n)
						console.log("llklklk");
                    }) : n > 29 ? h.default.getInstance().uiRoot.hint.setHint("Có trong phần quay thưởng") : h.default.getInstance().uiRoot.hint.setHint("Cấp độ tối đa của trang phục khi đạt Lv " + (n + 5).toString() /* + "Mở khóa sau khi cấp độ!" */)
					console.log("uuuuuuuuurrr");
                }, e.prototype.Refreshprice = function(t) {
                    var e = this.gridItems[t].getChildByName("main03"),
                        i = s.default.getInstance().getLevsCount(this.typeIndex, t),
                        n = t + 1,
                        o = Math.floor(c.default.getMatterEnhancePrice(this.typeIndex, n, i + 1));
                    e.getChildByName("Label").getComponent(cc.Label).string = h.default.getInstance().RetainInt(o, 2)
                }, e.prototype.AdsVideoUnlock = function(t) {
                    var e = s.default.getInstance().getPartsLowestLevs(this.typeIndex);
                    s.default.getInstance().setPartsLowestLevs(this.typeIndex, e + 1), this.buildMatter(t), this.RefreshMatter(), s.default.getInstance().unlockTag[this.typeIndex] += 1, s.default.getInstance().saveData(), this.SetAllTypeItem(this.typeIndex)
                }, e.prototype.buildMatter = function(t) {
                    for (var e = !1, i = 0; i < 12; i++) {
                        var n = s.default.getInstance().getGirdLevs(this.typeIndex, i);
                        if (n <= 0 && -1 != n) {
                            var o = s.default.getInstance().getLevsCount(this.typeIndex, t),
                                a = t + 1,
                                l = Math.floor(c.default.getMatterEnhancePrice(this.typeIndex, a, o + 1)),
                                u = s.default.getInstance().getGoldCoinNum();
                            return void(l <= u ? (e = !0, s.default.getInstance().setGoldCoinNum(u - l), s.default.getInstance().setLevsCount(this.typeIndex, t, o + 1), this.make.getComponent(r.default).charaType != this.typeIndex ? this.make.getComponent(r.default).DifferentCreateItem(this.typeIndex, i, a) : this.make.getComponent(r.default).createItem(this.typeIndex, i, a), s.default.getInstance().setGirdLevs(this.typeIndex, i, a), this.make.getComponent(r.default).requestSecCoinNum(), this.make.getComponent(r.default).RefreshMatter(), h.default.getInstance().uiRoot.hint.setHint("Mua trang phục thành công")) : (e = !0, this.ShowAllTip()))
                        }
                    }
                    e || h.default.getInstance().uiRoot.hint.setHint("Đầy ba lô!")
                }, e.prototype.RefreshMatter = function() {
                    var t = s.default.getInstance().getPartsLowestLevs(this.typeIndex) - 1,
                        e = s.default.getInstance().getLevsCount(this.typeIndex, t),
                        i = s.default.getInstance().getPartsLowestLevs(this.typeIndex),
                        n = Math.floor(c.default.getMatterEnhancePrice(this.typeIndex, i, e + 1));
                    this.make.getChildByName("Button1").getChildByName("Background").getChildByName("Label1").getComponent(cc.Label).string = i.toString(), this.make.getChildByName("Button1").getChildByName("Background").getChildByName("Label2").getComponent(cc.Label).string = h.default.getInstance().RetainInt(n, 2)
                }, e.prototype.SetBuyAllItem = function() {
                    for (var t = this.node.getChildByName("make02").getChildByName("16").getChildByName("buy1").getChildByName("view").getChildByName("content"), e = 0; e < 35; e++) {
                        var i = cc.instantiate(this.buyNode);
                        t.addChild(i), this.gridItems.push(i);
                        var n = i.getChildByName("Button1").getComponent(cc.Button),
                            o = new cc.Component.EventHandler;
                        o.target = this.node, o.component = "Buy", o.handler = "onclickBuy", o.customEventData = e + "", n.clickEvents.push(o)
                    }
                    this.SetIconFrame()
                }, e.prototype.SetIconFrame = function() {
                    for (var t = 0; t < this.gridItems.length; t++) {
                        var e = this.gridItems[t].getChildByName("Button1");
                        e.getChildByName("make11").getChildByName("Label").getComponent(cc.Label).string = (t + 1).toString(), e.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(l.default.getInstance().getIcon(this.typeIndex, t)), e.getChildByName("make12").getChildByName("shipin").active = !1
                    }
                }, e.prototype.SetAllTypeItem = function(t) {
                    for (var e = s.default.getInstance().unlockTag[t], i = 0; i < 35; i++) {
                        var n = this.gridItems[i],
                            o = n.getChildByName("Button1"),
                            a = n.getChildByName("main03");
                        if (o.getChildByName("make12").active = !0, o.getChildByName("make11").getChildByName("black").active = !0, i < e) o.getChildByName("make12").active = !1, o.getChildByName("make11").getChildByName("black").active = !1;
                        else if (i > 29) {
                            a.active = !1;
                            continue
                        }
                        var r = s.default.getInstance().getLevsCount(t, i),
                            l = i + 1,
                            u = Math.floor(c.default.getMatterEnhancePrice(t, l, r + 1));
                        a.getChildByName("Label").getComponent(cc.Label).string = h.default.getInstance().RetainInt(u, 2)
                    }
                    var d = s.default.getInstance().getPartsHighestLevs(this.typeIndex);
                    d >= 6 && e + 4 == d && ((o = this.gridItems[e].getChildByName("Button1")).getChildByName("make12").getChildByName("shipin").active = !0)
                }, e.prototype.moveIn = function() {
                    if (!this.isMoveIn) {
                        this.isMoveIn = !0;
                        this.node.active = !0, this.buttons.SetButtonState(this.typeIndex), this.SetIconFrame(), this.SetAllTypeItem(this.typeIndex), this.node.stopAllActions();
                        var t = this.node.getPosition().sub(this.startPos).mag() / 665 * .2;
                        cc.tween(this.node).to(t, {
                            position: cc.v2(this.startPos.x, this.startPos.y)
                        }).call(function() {}).start()
                    }
                }, e.prototype.moveOut = function() {
                    if (this.isMoveIn) {
                        this.isMoveIn = !1, this.node.stopAllActions();
                        var t = (665 - this.node.getPosition().sub(this.startPos).mag()) / 665 * .2,
                            e = this;
                        cc.tween(this.node).to(t, {
                            position: cc.v2(this.startPos.x, this.startPos.y - 665)
                        }).call(function() {
                            e.node.active = !1
                        }).start()
                    }
                }, e.prototype.ShowAllTip = function() {
                    for (var t = 1; t < 5; t++) this.tips.getChildByName("di03").getChildByName("tishi" + t).active = !1;
                    this.tips.active = !0, this.tips.setScale(0), cc.tween(this.tips).to(.25, {
                        scale: 1.25
                    }).to(.1, {
                        scale: 1
                    }).start(), this.tips.getChildByName("di03").getChildByName("tishi2").active = !0, this.tips.getChildByName("di03").getChildByName("tishi2").getChildByName(" Label3").getComponent(cc.Label).string = "Thiếu vàng, xem video để nhận thêm " + h.default.getInstance().RetainInt(.2 * s.default.getInstance().secGoldCoinNum * 60 * 60, 1) + " vàng?"
                }, e.prototype.NoGoldAds = function() {
                    var t = this;
                    u.default.GetInstance().ShowRewardVideo(function() {
						console.log("42hhh");
                        return t.GoldAdsSuccess()
                    })
					console.log("666666");
                }, e.prototype.GoldAdsSuccess = function() {
                    var t = .2 * s.default.getInstance().secGoldCoinNum * 60 * 60;
                    s.default.getInstance().setGoldCoinNum(s.default.getInstance().getGoldCoinNum() + t), s.default.getInstance().saveData(), this.tips.active = !1
					console.log("khhttt");
                }, o([g(cc.Node)], e.prototype, "make", void 0), o([g(cc.Node)], e.prototype, "buy", void 0), o([g(cc.Node)], e.prototype, "tips", void 0), o([g(cc.Node)], e.prototype, "shangTouch", void 0), o([g(a.default)], e.prototype, "buttons", void 0), o([g(cc.Prefab)], e.prototype, "buyNode", void 0), e = o([p], e)
            }(cc.Component);
        i.default = f, cc._RF.pop()
    }, {
        "./AdsMananger": "AdsMananger",
        "./AssetsManager": "AssetsManager",
        "./ButtonSet": "ButtonSet",
        "./CharacterInfo": "CharacterInfo",
        "./GameLocalData": "GameLocalData",
        "./GameManger": "GameManger",
        "./make/Make": "Make"
    }],
    ChangeMenu: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "d6d6c5NkDNHrpS3RcFSpaOS", "ChangeMenu");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./AudioManager"),
            s = cc._decorator,
            c = s.ccclass,
            r = s.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.pageAll = [], e.pageIndex = null, e.pageNum = 0, e.currentNum = 0, e
                }
                return n(e, t), e.prototype.start = function() {
                    this.pageNum = this.pageAll.length, this.pageIndex.string = (this.currentNum + 1).toString() + "/" + this.pageNum
                }, e.prototype.SetChangePageAdd = function() {
                    if (a.default.getInstance().PlayBtAudio(3), this.currentNum + 1 < this.pageNum) {
                        this.currentNum += 1, this.pageIndex.string = (this.currentNum + 1).toString() + "/" + this.pageNum;
                        for (var t = 0, e = this.pageAll; t < e.length; t++) {
                            var i = e[t],
                                n = cc.moveBy(.25, new cc.Vec2(-720, 0));
                            i.runAction(n)
                        }
                    }
                }, e.prototype.SetChangePageCut = function() {
                    if (a.default.getInstance().PlayBtAudio(3), this.currentNum - 1 >= 0) {
                        this.currentNum -= 1, this.pageIndex.string = (this.currentNum + 1).toString() + "/" + this.pageNum;
                        for (var t = 0, e = this.pageAll; t < e.length; t++) {
                            var i = e[t],
                                n = cc.moveBy(.25, new cc.Vec2(720, 0));
                            i.runAction(n)
                        }
                    }
                }, o([r(cc.Node)], e.prototype, "pageAll", void 0), o([r(cc.Label)], e.prototype, "pageIndex", void 0), e = o([c], e)
            }(cc.Component);
        i.default = l, cc._RF.pop()
    }, {
        "./AudioManager": "AudioManager"
    }],
    CharacterInfo: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "437cfjg5rVPoasCbu14xEPo", "CharacterInfo"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}
            return t.getMatterPrice = function(t, e) {
                return [200, 200, 200, 200, 200][t] * Math.pow(3, e - 1)
            }, t.getMatterEnhancePrice = function(e, i, n) {
                var o = t.getMatterPrice(e, i),
                    a = 1.1;
                return a = i >= 1 && i <= 5 ? 1.2 : i >= 6 && i <= 10 ? 1.2 : i >= 11 && i <= 15 ? 1.3 : i >= 16 && i <= 20 ? 1.3 : 1.4, o * Math.pow(a, n - 1)
            }, t.getMatterEarningsPrice = function(t, e) {
                return 1.2 * ([20, 20, 20, 20, 20][t] * Math.pow(2, e - 1))
            }, t.getMatterEarningsTime = function(t, e) {
                return 6 - .1 * (e - 1)
            }, t.Cha_Hair = 0, t.Cha_Ornament = 1, t.Cha_Clothes = 2, t.Cha_Bag = 3, t.Cha_Shoes = 4, t.Cha_Special = 5, t
        }();
        i.default = n, cc._RF.pop()
    }, {}],
    CheckBanner: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "bf01fra/cVKbaPdgDV3NKu5", "CheckBanner");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./AdsMananger"),
            s = cc._decorator,
            c = s.ccclass,
            r = s.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.AllSceneNode = [], e.checkTs = 0, e.isBanner = !1, e.bannerIndex = 0, e
                }
                return n(e, t), e.prototype.start = function() {}, e.prototype.update = function(t) {
                    if (this.isBanner) this.AllSceneNode[this.bannerIndex].active || (a.default.GetInstance().HideBanner(), this.isBanner = !1);
                    else if (this.checkTs += t, this.checkTs >= 1) {
                        this.checkTs = 0;
                        for (var e = !1, i = 0; i < this.AllSceneNode.length; i++)
                            if (this.AllSceneNode[i].active) {
                                this.bannerIndex = i, this.isBanner = !0, e = !0, a.default.GetInstance().ShowBanner();
                                break
                            } e || a.default.GetInstance().isShowBanner && a.default.GetInstance().HideBanner()
                    }
                }, o([r(cc.Node)], e.prototype, "AllSceneNode", void 0), e = o([c], e)
            }(cc.Component);
        i.default = l, cc._RF.pop()
    }, {
        "./AdsMananger": "AdsMananger"
    }],
    Envelope: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "0534119bK5KN46rHYf9rh51", "Envelope");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            s = a.ccclass,
            c = (a.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.envelopeTag = 0, e.latticeTag = 0, e.parentPos = new cc.Vec2(0, 0), e.targetPos = cc.Vec3.ZERO, e.make = null, e
                }
                return n(e, t), e.prototype.start = function() {
                    var t = this;
                    if (0 == this.parentPos.x && 0 == this.parentPos.y) {
                        var e = cc.tween().to(.1, {
                            angle: -35
                        }).to(.1, {
                            angle: 35
                        }).to(.1, {
                            angle: -35
                        }).to(.1, {
                            angle: 35
                        }).to(.1, {
                            angle: 0
                        }).delay(2);
                        cc.tween(this.node).then(e).repeatForever().start()
                    } else cc.tween(this.node).to(.65, {
                        position: this.parentPos
                    }).call(function() {
                        t.SetEnveLopeRotate()
                    }).start()
                }, e.prototype.SetEnveLopeRotate = function() {
                    var t = cc.tween().to(.1, {
                        angle: -35
                    }).to(.1, {
                        angle: 35
                    }).to(.1, {
                        angle: -35
                    }).to(.1, {
                        angle: 35
                    }).to(.1, {
                        angle: 0
                    }).delay(2);
                    cc.tween(this.node).then(t).repeatForever().start(), this.parentPos.x = 0, this.parentPos.y = 0
                }, e.prototype.onClickBuild = function() {
                    if (this.make)
                        for (var t = 0; t < this.make.gridItems.length; t++)
                            if (this.node == this.make.gridItems[t]) {
                                this.make.gridItems.splice(t, 1), this.node.removeFromParent(!0), this.make.BuildEnvelopMatter(this.envelopeTag, this.latticeTag);
                                break
                            }
                }, e.prototype.AllEnvelopOpen = function() {
                    if (this.make)
                        for (var t = 0; t < this.make.gridItems.length; t++)
                            if (this.node == this.make.gridItems[t]) {
                                this.node.removeFromParent(!0), this.make.BuildEnvelopMatter(this.envelopeTag, this.latticeTag);
                                break
                            }
                }, e = o([s], e)
            }(cc.Component));
        i.default = c, cc._RF.pop()
    }, {}],
    Exchange: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "15620ImeGlLAYEIS84aOfE0", "Exchange");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./GameLocalData"),
            s = t("./GameManger"),
            c = t("./MainUI"),
            r = t("./AssetsManager"),
            l = t("./LuckDraw"),
            h = cc._decorator,
            u = h.ccclass,
            d = h.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.limitClothes = [], e.mainUI = null, e.luck = null, e.conent = null, e.clothesFrame = [], e.exchangeFab = null, e.perce = [50, 50, 50, 50, 50, 300, 300, 300, 300, 300, 50, 50, 50, 50, 50, 300, 300, 300, 300, 300, 300, 300, 300, 1e3, 1e3, 1e3], e
                }
                return n(e, t), e.prototype.start = function() {
                    for (var t = 0; t < 26; t++) {
                        var e = cc.instantiate(this.exchangeFab);
                        this.conent.addChild(e), this.limitClothes.push(e);
                        var i = new cc.Component.EventHandler;
                        i.target = this.node, i.component = "Exchange", i.handler = "GetLimitClothes", i.customEventData = t + "", e.getChildByName("Button").getComponent(cc.Button).clickEvents.push(i), e.getChildByName("Label").getComponent(cc.Label).string = this.perce[t] + "", e.getChildByName("touxiang").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(r.default.getInstance().iconSpecials[t]);
                        var n = e.getChildByName("duih03").getComponent(cc.Sprite);
                        50 == this.perce[t] ? n.spriteFrame = this.clothesFrame[0] : 300 == this.perce[t] ? n.spriteFrame = this.clothesFrame[1] : 1e3 == this.perce[t] && (n.spriteFrame = this.clothesFrame[2])
                    }
                    this.CheckLimitClothes()
                }, e.prototype.CheckLimitClothes = function() {
                    if (!(this.limitClothes.length <= 0)) {
                        for (var t = 0; t < a.default.getInstance().specialLevels.length; t++) {
                            var e = this.limitClothes[t].getChildByName("Button");
                            e.getComponent(cc.Button).interactable = !0, e.getChildByName("Background").active = !0, e.getChildByName("duih05").active = !1
                        }
                        for (t = 0; t < a.default.getInstance().specialLevels.length; t++)
                            if (-1 != a.default.getInstance().specialLevels[t]) {
                                var i = this.limitClothes[a.default.getInstance().specialLevels[t]].getChildByName("Button");
                                i.getComponent(cc.Button).interactable = !1, i.getChildByName("Background").active = !1, i.getChildByName("duih05").active = !0
                            }
                    }
                }, e.prototype.GetLimitClothes = function(t, e) {
                    var i = parseInt(e),
                        n = this.limitClothes[i].getChildByName("Label").getComponent(cc.Label),
                        o = parseInt(n.string);
                    if (a.default.getInstance().getDiamondsNum() >= o) {
                        a.default.getInstance().setDiamondsnNum(a.default.getInstance().getDiamondsNum() - o), a.default.getInstance().specialLevels[i] = i;
                        var r = this.limitClothes[i].getChildByName("Button");
                        r.getComponent(cc.Button).interactable = !1, r.getChildByName("Background").active = !1, r.getChildByName("duih05").active = !0, a.default.getInstance().saveData(), this.mainUI.getComponent(c.default).BuildSpecialOneItem(i), this.luck.getComponent(l.default).ShowRewardSpecial(i)
                    } else s.default.getInstance().uiRoot.hint.setHint("Thiếu kim cương!")
                }, e.prototype.CloseLimitUI = function() {
                    this.node.active = !1
                }, e.prototype.ShowLimitUI = function() {
                    this.node.active = !0, this.node.setScale(0), cc.tween(this.node).to(.25, {
                        scale: 1.25
                    }).to(.1, {
                        scale: 1
                    }).start(), this.CheckLimitClothes()
                }, o([d(cc.Node)], e.prototype, "limitClothes", void 0), o([d(cc.Node)], e.prototype, "mainUI", void 0), o([d(cc.Node)], e.prototype, "luck", void 0), o([d(cc.Node)], e.prototype, "conent", void 0), o([d(cc.SpriteFrame)], e.prototype, "clothesFrame", void 0), o([d(cc.Prefab)], e.prototype, "exchangeFab", void 0), e = o([u], e)
            }(cc.Component);
        i.default = p, cc._RF.pop()
    }, {
        "./AssetsManager": "AssetsManager",
        "./GameLocalData": "GameLocalData",
        "./GameManger": "GameManger",
        "./LuckDraw": "LuckDraw",
        "./MainUI": "MainUI"
    }],
    GameLocalData: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "958c8oqHTRHvrj60UcA+Jwj", "GameLocalData");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./CharacterInfo"),
            s = cc._decorator,
            c = s.ccclass,
            r = (s.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.partsHighestLevs = [], e.partsLowestLevs = [], e.girdHairLevs = [], e.girdOrnamentLevs = [], e.girdClothesLevs = [], e.girdBagLevs = [], e.girdShoesLevs = [], e.hairLevsCount = [], e.ornamentLevsCount = [], e.clothesLevsCount = [], e.bagLevsCount = [], e.shoesLevsCount = [], e.girdHairEnvelopLevs = [], e.girdOrnamentEnvelopLevs = [], e.girdClothesEnvelopLevs = [], e.girdBagEnvelopLevs = [], e.girdShoesEnvelopLevs = [], e.hairLevels = [], e.ornamentLevels = [], e.clothesLevels = [], e.bagLevels = [], e.shoesLevels = [], e.specialLevels = [], e.luckClothes = [], e.specialStory = [0, 0, 0, 0, 0], e.story = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], e.goldCoinNum = 3e3, e.unlockTag = [1, 1, 1, 1, 1], e.profitMul = 1, e.missionStage = [0, 0, 0, 0, 0], e.missionType = [0, 0, 0, 0, 0], e.isMusic = 1, e.isAudio = 1, e.isTeach = 0, e.shareTirrg = 0, e.teachGrade = 1, e.teachReach = 0, e.missionWatchNum = 0, e.missionComposeNum = 0, e.dataTime = [0, 0, 0, 0, 0, 0], e.isEvetMissionSuc = [0, 0], e.plotIndex = 2, e.grade = 1, e.gradeScore = 0, e.sports = 5, e.isOffLine = 0, e.luckNum = 2, e.rankLev = 0, e.myRank = 1, e.isShow = 0, e.stCompanyNum = 0, e.invitationNum = 0, e.secGoldCoinNum = 0, e.maxRankScore = 0, e.diamondsNum = 0, e
                }
                var i;
                return n(e, t), i = e, e.getInstance = function() {
                    return i.instance
                }, e.prototype.onLoad = function() {
                    i.instance = this, cc.game.addPersistRootNode(this.node);
                    for (var t = 0; t < 6; t++) 5 == t ? (this.partsHighestLevs[t] = 0, this.partsLowestLevs[t] = 0) : (this.partsHighestLevs[t] = 1, this.partsLowestLevs[t] = 1);
                    for (t = 0; t < 12; t++) this.girdHairLevs[t] = 0, this.girdOrnamentLevs[t] = 0, this.girdClothesLevs[t] = 0, this.girdBagLevs[t] = 0, this.girdShoesLevs[t] = 0;
                    for (t = 0; t < 30; t++) this.hairLevsCount[t] = 0, this.ornamentLevsCount[t] = 0, this.clothesLevsCount[t] = 0, this.bagLevsCount[t] = 0, this.shoesLevsCount[t] = 0;
                    for (t = 0; t < 12; t++) this.girdHairEnvelopLevs[t] = 0, this.girdOrnamentEnvelopLevs[t] = 0, this.girdClothesEnvelopLevs[t] = 0, this.girdBagEnvelopLevs[t] = 0, this.girdShoesEnvelopLevs[t] = 0;
                    for (t = 0; t < 35; t++) this.hairLevels[t] = 0, this.ornamentLevels[t] = 0, this.clothesLevels[t] = 0, this.bagLevels[t] = 0, this.shoesLevels[t] = 0;
                    for (t = 0; t < 26; t++) this.specialLevels[t] = -1;
                    this.hairLevels[0] = 1, this.ornamentLevels[0] = 1, this.clothesLevels[0] = 1, this.bagLevels[0] = 1, this.shoesLevels[0] = 1;
                    for (t = 0; t < 25; t++) this.luckClothes[t] = 0;
                    if (void 0 != cc.sys.localStorage.getItem("teachReach"))
                        if (this.teachReach = parseInt(cc.sys.localStorage.getItem("teachReach")), 0 != this.teachReach) {
                            var e = cc.sys.localStorage.getItem("userData8");
                            if (e) {
                                var n = JSON.parse(e);
                                n && (void 0 != n.partsHighestLevs && (this.partsHighestLevs = n.partsHighestLevs), void 0 != n.partsLowestLevs && (this.partsLowestLevs = n.partsLowestLevs), void 0 != n.girdHairLevs && (this.girdHairLevs = n.girdHairLevs), void 0 != n.girdOrnamentLevs && (this.girdOrnamentLevs = n.girdOrnamentLevs), void 0 != n.girdClothesLevs && (this.girdClothesLevs = n.girdClothesLevs), void 0 != n.girdBagLevs && (this.girdBagLevs = n.girdBagLevs), void 0 != n.girdShoesLevs && (this.girdShoesLevs = n.girdShoesLevs), void 0 != n.hairLevsCount && (this.hairLevsCount = n.hairLevsCount), void 0 != n.ornamentLevsCount && (this.ornamentLevsCount = n.ornamentLevsCount), void 0 != n.clothesLevsCount && (this.clothesLevsCount = n.clothesLevsCount), void 0 != n.bagLevsCount && (this.bagLevsCount = n.bagLevsCount), void 0 != n.shoesLevsCount && (this.shoesLevsCount = n.shoesLevsCount), void 0 != n.hairLevels && (this.hairLevels = n.hairLevels), void 0 != n.ornamentLevels && (this.ornamentLevels = n.ornamentLevels), void 0 != n.clothesLevels && (this.clothesLevels = n.clothesLevels), void 0 != n.bagLevels && (this.bagLevels = n.bagLevels), void 0 != n.shoesLevels && (this.shoesLevels = n.shoesLevels), void 0 != n.specialLevels && (this.specialLevels = n.specialLevels), void 0 != n.sports && (this.sports = n.sports), void 0 != n.story && (this.story = n.story), void 0 != n.specialStory && (this.specialStory = n.specialStory), void 0 != n.dataTime && (this.dataTime = n.dataTime), void 0 != n.unlockTag && (this.unlockTag = n.unlockTag), void 0 != n.invitationNum && (this.invitationNum = n.invitationNum), void 0 != n.missionStage && (this.missionStage = n.missionStage), void 0 != n.missionType && (this.missionType = n.missionType), void 0 != n.missionWatchNum && (this.missionWatchNum = n.missionWatchNum), void 0 != n.missionComposeNum && (this.missionComposeNum = n.missionComposeNum), void 0 != n.secGoldCoinNum && (this.secGoldCoinNum = n.secGoldCoinNum), void 0 != n.grade && (this.grade = n.grade), void 0 != n.luckNum && (this.luckNum = n.luckNum), void 0 != n.maxRankScore && (this.maxRankScore = n.maxRankScore), void 0 != n.isMusic && (this.isMusic = n.isMusic), void 0 != n.isAudio && (this.isAudio = n.isAudio), void 0 != n.isOffLine && (this.isOffLine = n.isOffLine), void 0 != n.luckClothes && (this.luckClothes = n.luckClothes), void 0 != n.isEvetMissionSuc && (this.isEvetMissionSuc = n.isEvetMissionSuc), void 0 != n.isTeach && (this.isTeach = n.isTeach), void 0 != n.shareTirrg && (this.shareTirrg = n.shareTirrg), void 0 != n.teachGrade && (this.teachGrade = n.teachGrade), void 0 != n.plotIndex && (this.plotIndex = n.plotIndex), void 0 != n.stCompanyNum && (this.stCompanyNum = n.stCompanyNum), void 0 != n.goldCoinNum && (this.goldCoinNum = n.goldCoinNum), void 0 != n.diamondsNum && (this.diamondsNum = n.diamondsNum))
                            }
                        } else cc.sys.localStorage.removeItem("userData8");
                    else cc.sys.localStorage.removeItem("userData8")
                }, e.prototype.start = function() {}, e.prototype.saveData = function() {
                    var t = {
                        partsHighestLevs: this.partsHighestLevs,
                        partsLowestLevs: this.partsLowestLevs,
                        girdHairLevs: this.girdHairLevs,
                        girdOrnamentLevs: this.girdOrnamentLevs,
                        girdClothesLevs: this.girdClothesLevs,
                        girdBagLevs: this.girdBagLevs,
                        girdShoesLevs: this.girdShoesLevs,
                        hairLevsCount: this.hairLevsCount,
                        ornamentLevsCount: this.ornamentLevsCount,
                        clothesLevsCount: this.clothesLevsCount,
                        bagLevsCount: this.bagLevsCount,
                        shoesLevsCount: this.shoesLevsCount,
                        hairLevels: this.hairLevels,
                        ornamentLevels: this.ornamentLevels,
                        clothesLevels: this.clothesLevels,
                        bagLevels: this.bagLevels,
                        shoesLevels: this.shoesLevels,
                        specialLevels: this.specialLevels,
                        unlockTag: this.unlockTag,
                        missionStage: this.missionStage,
                        missionType: this.missionType,
                        secGoldCoinNum: this.secGoldCoinNum,
                        grade: this.grade,
                        maxRankScore: this.maxRankScore,
                        goldCoinNum: this.goldCoinNum,
                        diamondsNum: this.diamondsNum,
                        isOffLine: this.isOffLine,
                        missionWatchNum: this.missionWatchNum,
                        missionComposeNum: this.missionComposeNum,
                        isEvetMissionSuc: this.isEvetMissionSuc,
                        dataTime: this.dataTime,
                        isMusic: this.isMusic,
                        isAudio: this.isAudio,
                        isTeach: this.isTeach,
                        luckNum: this.luckNum,
                        story: this.story,
                        specialStory: this.specialStory,
                        sports: this.sports,
                        plotIndex: this.plotIndex,
                        luckClothes: this.luckClothes,
                        teachGrade: this.teachGrade,
                        invitationNum: this.invitationNum,
                        stCompanyNum: this.stCompanyNum,
                        shareTirrg: this.shareTirrg
                    };
                    cc.sys.localStorage.setItem("userData8", JSON.stringify(t))
                }, e.prototype.getPartsHighestLevs = function(t) {
                    return this.partsHighestLevs[t]
                }, e.prototype.setPartsHighestLevs = function(t, e) {
                    this.partsHighestLevs[t] = e
                }, e.prototype.getPartsLowestLevs = function(t) {
                    return this.partsLowestLevs[t]
                }, e.prototype.setPartsLowestLevs = function(t, e) {
                    this.partsLowestLevs[t] = e
                }, e.prototype.getGirdLevs = function(t, e) {
                    var i = 0;
                    switch (t) {
                        case a.default.Cha_Hair:
                            i = this.girdHairLevs[e];
                            break;
                        case a.default.Cha_Ornament:
                            i = this.girdOrnamentLevs[e];
                            break;
                        case a.default.Cha_Clothes:
                            i = this.girdClothesLevs[e];
                            break;
                        case a.default.Cha_Bag:
                            i = this.girdBagLevs[e];
                            break;
                        case a.default.Cha_Shoes:
                            i = this.girdShoesLevs[e];
                            break;
                        case a.default.Cha_Special:
                    }
                    return i
                }, e.prototype.setGirdLevs = function(t, e, i) {
                    switch (t) {
                        case a.default.Cha_Hair:
                            this.girdHairLevs[e] = i;
                            break;
                        case a.default.Cha_Ornament:
                            this.girdOrnamentLevs[e] = i;
                            break;
                        case a.default.Cha_Clothes:
                            this.girdClothesLevs[e] = i;
                            break;
                        case a.default.Cha_Bag:
                            this.girdBagLevs[e] = i;
                            break;
                        case a.default.Cha_Shoes:
                            this.girdShoesLevs[e] = i;
                            break;
                        case a.default.Cha_Special:
                    }
                }, e.prototype.getLevsCount = function(t, e) {
                    var i = 0;
                    switch (t) {
                        case a.default.Cha_Hair:
                            i = this.hairLevsCount[e];
                            break;
                        case a.default.Cha_Ornament:
                            i = this.ornamentLevsCount[e];
                            break;
                        case a.default.Cha_Clothes:
                            i = this.clothesLevsCount[e];
                            break;
                        case a.default.Cha_Bag:
                            i = this.bagLevsCount[e];
                            break;
                        case a.default.Cha_Shoes:
                            i = this.shoesLevsCount[e];
                            break;
                        case a.default.Cha_Special:
                    }
                    return i
                }, e.prototype.setLevsCount = function(t, e, i) {
                    switch (t) {
                        case a.default.Cha_Hair:
                            this.hairLevsCount[e] = i;
                            break;
                        case a.default.Cha_Ornament:
                            this.ornamentLevsCount[e] = i;
                            break;
                        case a.default.Cha_Clothes:
                            this.clothesLevsCount[e] = i;
                            break;
                        case a.default.Cha_Bag:
                            this.bagLevsCount[e] = i;
                            break;
                        case a.default.Cha_Shoes:
                            this.shoesLevsCount[e] = i;
                            break;
                        case a.default.Cha_Special:
                    }
                }, e.prototype.getGirdEnvelopeLevs = function(t, e) {
                    var i = 0;
                    switch (t) {
                        case a.default.Cha_Hair:
                            i = this.girdHairEnvelopLevs[e];
                            break;
                        case a.default.Cha_Ornament:
                            i = this.girdOrnamentEnvelopLevs[e];
                            break;
                        case a.default.Cha_Clothes:
                            i = this.girdClothesEnvelopLevs[e];
                            break;
                        case a.default.Cha_Bag:
                            i = this.girdBagEnvelopLevs[e];
                            break;
                        case a.default.Cha_Shoes:
                            i = this.girdShoesEnvelopLevs[e];
                            break;
                        case a.default.Cha_Special:
                    }
                    return i
                }, e.prototype.setGirdEnvelopeLevs = function(t, e, i) {
                    switch (t) {
                        case a.default.Cha_Hair:
                            this.girdHairEnvelopLevs[e] = i;
                            break;
                        case a.default.Cha_Ornament:
                            this.girdOrnamentEnvelopLevs[e] = i;
                            break;
                        case a.default.Cha_Clothes:
                            this.girdClothesEnvelopLevs[e] = i;
                            break;
                        case a.default.Cha_Bag:
                            this.girdBagEnvelopLevs[e] = i;
                            break;
                        case a.default.Cha_Shoes:
                            this.girdShoesEnvelopLevs[e] = i;
                            break;
                        case a.default.Cha_Special:
                    }
                }, e.prototype.getGoldCoinNum = function() {
                    return this.goldCoinNum
                }, e.prototype.setGoldCoinNum = function(t) {
                    this.goldCoinNum = t
                }, e.prototype.getDiamondsNum = function() {
                    return this.diamondsNum
                }, e.prototype.setDiamondsnNum = function(t) {
                    this.diamondsNum = t
                }, e.prototype.SetOffLineTime = function(t) {
                    this.dataTime = t, this.saveData()
                }, e.prototype.GetOffLineTime = function() {
                    return this.dataTime
                }, e.instance = null, e = i = o([c], e)
            }(cc.Component));
        i.default = r, cc._RF.pop()
    }, {
        "./CharacterInfo": "CharacterInfo"
    }],
    GameManger: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "b8af1ondZxGGZ4hu3vsSg+P", "GameManger");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./UiRoot"),
            s = cc._decorator,
            c = s.ccclass,
            r = s.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.blankScreen = null, e.uiRoot = null, e.loadCount = 0, e.loadMaxCount = 0, e.loadPhyCount = 0, e.onLevelStr = "", e.currLevelStr = "", e.inDfpsTime = 0, e.isJudgSingIn = !1, e.isCurrentMain = !0, e.currBallPrefab = null, e.currCarNode = null, e.perState = "loadState", e.currState = "loadState", e.experieLev = [0, 2, 6, 8], e.uiBgCount = 0, e.uiBg2Count = 0, e
                }
                var i;
                return n(e, t), i = e, e.getInstance = function() {
                    return i.instance
                }, e.prototype.onLoad = function() {
                    cc.game.addPersistRootNode(this.node), i.instance = this
                }, e.prototype.start = function() {}, e.prototype.secondUpdate = function() {}, e.prototype.init = function() {}, e.prototype.creatrObjFactory = function(t, e) {
                    return null
                }, e.prototype.recyclingFactory = function(t, e) {
                    return null
                }, e.prototype.loadSubAss = function() {
                    cc.loader.downloader.loadSubpackage("subfbx", function(t) {
                        if (t) return console.error(t)
                    })
                }, e.prototype.RetainInt = function(t, e) {
                    for (var i = 0, n = ""; t >= 1e4;) t /= 1e4, i += 1;
                    return 0 == i ? n = (parseInt((t * Math.pow(10, e) + .5).toString(), 10) / Math.pow(10, e)).toString() : 1 == i ? n = (parseInt((t * Math.pow(10, e) + .5).toString(), 10) / Math.pow(10, e)).toString() + " vạn" : 2 == i ? n = (parseInt((t * Math.pow(10, e) + .5).toString(), 10) / Math.pow(10, e)).toString() + " trăm triệu" : 3 == i ? n = (parseInt((t * Math.pow(10, e) + .5).toString(), 10) / Math.pow(10, e)).toString() + " ngàn tỷ" : 4 == i && (n = (parseInt((t * Math.pow(10, e) + .5).toString(), 10) / Math.pow(10, e)).toString() + " vạn ngàn tỷ"), n
                }, e.prototype.RetainNoIntStr = function(t, e) {
                    for (var i = 0; t >= 1e4;) t /= 1e4, i += 1;
                    return 0 == i ? parseInt((t * Math.pow(10, e) + .5).toString(), 10) / Math.pow(10, e) : 1 == i ? parseInt((t * Math.pow(10, e) + .5).toString(), 10) / Math.pow(10, e) : 2 == i ? parseInt((t * Math.pow(10, e) + .5).toString(), 10) / Math.pow(10, e) : 3 == i ? parseInt((t * Math.pow(10, e) + .5).toString(), 10) / Math.pow(10, e) : 4 == i ? parseInt((t * Math.pow(10, e) + .5).toString(), 10) / Math.pow(10, e) : void 0
                }, e.prototype.update = function(t) {
                    switch (this.currState) {
                        case i.loadState:
                    }
                    this.uiBgCount > 0 && !this.isShowOrHideBg() && (this.uiBgCount = 0, this.hideBg()), this.uiBg2Count > 0 && !this.isShowOrHideBg2() && (this.uiBg2Count = 0, this.hideBg2())
                }, e.prototype.convertState = function(t) {
                    switch (this.currState, i.gameState, this.perState = this.currState, this.perState) {
                        case i.gameState:
                        case i.loadState:
                        case i.fengMianState:
                        case i.totalState:
                        case i.loseState:
                    }
                    switch (t) {
                        case i.loadState:
                            this.initLoad();
                            break;
                        case i.fengMianState:
                            this.initFengMian();
                            break;
                        case i.gameState:
                            this.initGame2();
                            break;
                        case i.settingState:
                            this.initSetting();
                            break;
                        case i.totalState:
                            this.initTotal();
                            break;
                        case i.loseState:
                            this.initLose();
                        case i.selectSkinState:
                            this.initSelectSkin();
                            break;
                        case i.newCarState:
                            this.initNewCar();
                            break;
                        case i.selectLevelState:
                            this.initSelectLevel();
                            break;
                        case i.signInState:
                            this.initSignIn();
                            break;
                        case i.rankState:
                            this.initRank()
                    }
                    this.currState = t
                }, e.prototype.initLoad = function() {}, e.prototype.initFengMian = function() {
                    this.isJudgSingIn || (this.isJudgSingIn = !0, this.scheduleOnce(this.signFunc, 1))
                }, e.prototype.signFunc = function() {}, e.prototype.initGame2 = function() {}, e.prototype.initGame = function() {}, e.prototype.loadExperie = function(t) {}, e.prototype.initSetting = function() {}, e.prototype.initTotal = function() {}, e.prototype.initLose = function() {}, e.prototype.initSelectSkin = function() {}, e.prototype.initNewCar = function() {}, e.prototype.initSelectLevel = function() {}, e.prototype.initSignIn = function() {}, e.prototype.initRank = function() {
                    this.uiRoot.hideAllView()
                }, e.prototype.showBg = function(t) {
                    if (this.uiBgCount <= 0) {
                        this.uiRoot.uiBg.active = !0;
                        var e = cc.fadeTo(.2, t);
                        this.uiRoot.uiBg.runAction(e)
                    }
                    this.uiBgCount += 1
                }, e.prototype.hideBg = function() {
                    this.uiBgCount -= 1, this.uiBgCount <= 0 && (this.uiBgCount = 0)
                }, e.prototype.isShowOrHideBg = function() {
                    return !1
                }, e.prototype.showBg2 = function(t) {
                    this.uiBg2Count += 1
                }, e.prototype.hideBg2 = function() {}, e.prototype.isShowOrHideSkinUi = function() {
                    return !1
                }, e.prototype.isShowOrHideBg2 = function() {
                    return !1
                }, e.prototype.turnBlankScreen = function(t) {
                    var e = this,
                        i = cc.fadeTo(.2, 255).easing(cc.easeSineIn()),
                        n = cc.sequence(i, cc.callFunc(function() {
                            t(), e.outBlankScreen()
                        }, this.blankScreen));
                    this.blankScreen.runAction(n)
                }, e.prototype.outBlankScreen = function() {
                    var t = cc.fadeTo(.2, 0).easing(cc.easeSineIn()),
                        e = cc.sequence(t, cc.callFunc(function() {}));
                    this.blankScreen.runAction(e)
                }, e.prototype.clickStartBtn = function(t) {}, e.prototype.getCurDay = function() {
                    var t = (new Date).getTime();
                    return Math.floor(t / 864e5)
                }, e.prototype.showInsufficPower = function() {}, e.prototype.getPower = function() {
                    return 0
                }, e.prototype.getPower2 = function() {
                    return 0
                }, e.prototype.setGameCamera = function(t, e) {}, e.prototype.getNoGetRail = function() {
                    return -1
                }, e.prototype.getNoGetHuoChe = function() {
                    return -1
                }, e.prototype.refshData = function() {}, e.loadState = "loadState", e.fengMianState = "fengmian", e.gameState = "gamestate", e.settingState = "setting", e.totalState = "total", e.loseState = "loseState", e.selectSkinState = "selectskill", e.newCarState = "newcarstate", e.selectLevelState = "selectLevelState", e.signInState = "signInState", e.rankState = "rankState", e.instance = null, o([r(cc.Node)], e.prototype, "blankScreen", void 0), o([r(a.default)], e.prototype, "uiRoot", void 0), e = i = o([c], e)
            }(cc.Component);
        i.default = l, cc._RF.pop()
    }, {
        "./UiRoot": "UiRoot"
    }],
    GameTeaching: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "65aa1huQ1tMzIqd4bqgXAKc", "GameTeaching");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./MainUI"),
            s = t("./make/Make"),
            c = t("./GameLocalData"),
            r = t("./SignIn"),
            l = t("./AdsMananger"),
            h = cc._decorator,
            u = h.ccclass,
            d = h.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.main = null, e.signin = null, e.block = null, e.make = null, e.help = null, e.touchNode = null, e.mask = null, e.teachNodes = [], e.teachStr = [], e.helpPos1 = [new cc.Vec2(120.398, -202.876), new cc.Vec2(129.2, 221.177), new cc.Vec2(129.2, 221.177), new cc.Vec2(129.2, 221.177), new cc.Vec2(137.349, -300.367), new cc.Vec2(118.101, 114.165), new cc.Vec2(118.101, 114.165), new cc.Vec2(109.545, 309.92), new cc.Vec2(109.545, 309.92), new cc.Vec2(109.545, 309.92), new cc.Vec2(109.545, 309.92), new cc.Vec2(109.545, 309.92), new cc.Vec2(109.545, 309.92), new cc.Vec2(109.545, 309.92), new cc.Vec2(109.545, 309.92), new cc.Vec2(109.545, 309.92)], e.helpPos2 = [new cc.Vec2(-87.404, -575.411), new cc.Vec2(40.596, -624.411), new cc.Vec2(40.596, -624.411), new cc.Vec2(-219.843, -195.38), new cc.Vec2(-303.66, -60.466), new cc.Vec2(329.552, 338.418), new cc.Vec2(297.844, 199.384), new cc.Vec2(-270.654, -83.615), new cc.Vec2(-206.896, -557.328), new cc.Vec2(-272.599, -204.224), new cc.Vec2(34.331, -594.086), new cc.Vec2(335.931, 474.266), new cc.Vec2(211.377, -621.252), new cc.Vec2(29.677, -169.174), new cc.Vec2(339.097, -56.98), new cc.Vec2(29.677, -169.174)], e.isTeachSucc = [!1, !1, !1, !1], e.teachGrade = 1, e.isTeach = !1, e.isTeachOver = !1, e.isShareTea = !1, e.isBeganCompose = !1, e
                }
                var i;
                return n(e, t), i = e, e.getInstance = function() {
                    return i.instance
                }, e.prototype.onLoad = function() {
                    i.instance = this;
                    var t = cc.sys.localStorage.getItem("teach");
                    if (t) {
                        var e = JSON.parse(t);
                        e && void 0 != e.isTeachSucc && (this.isTeachSucc = e.isTeachSucc)
                    }
                }, e.prototype.start = function() {
                    this.touchNode.on(cc.Node.EventType.TOUCH_END, this.TouchMask, this), this.isTeach = !1, this.isTeachOver = Boolean(c.default.getInstance().isTeach), this.teachGrade = c.default.getInstance().teachGrade, this.touchNode._touchListener.setSwallowTouches(!1), this.isTeachOver && (l.default.GetInstance().isCheck = !0)
                }, e.prototype.update = function(t) {
                    this.isTeach && !this.isTeachOver && (this.block.active = !0, this.scheduleOnce(this.CheckTeach, .5), this.isTeach = !1)
                }, e.prototype.SetTeachBegan = function() {
                    this.isTeach = !0
                }, e.prototype.CheckTriggerTeach = function(t) {
                    if (1 == t) {
                        for (var e = !1, i = 0; i < 5; i++)
                            if (c.default.getInstance().getPartsHighestLevs(i) < 3) {
                                e = !0;
                                break
                            } e || (this.isTeach = !0, this.isTeachOver = !1, this.teachGrade = 8, this.isTeachSucc[1] = !0, this.SaveTeachData())
                    } else if (2 == t) {
                        e = !1;
                        for (var n = 0; n < 5; n++)
                            if (c.default.getInstance().getPartsHighestLevs(n) < 2) {
                                e = !0;
                                break
                            } e || (this.isTeach = !0, this.isTeachOver = !1, this.teachGrade = 10, this.isTeachSucc[0] = !0, this.SaveTeachData())
                    } else if (3 == t) {
                        e = !1;
                        for (var o = 0; o < 5; o++)
                            if (c.default.getInstance().getPartsHighestLevs(o) < 4) {
                                e = !0;
                                break
                            } e || (this.isTeach = !0, this.isTeachOver = !1, this.teachGrade = 15, this.isTeachSucc[3] = !0, this.SaveTeachData())
                    }
                }, e.prototype.CheckTeach = function() {
                    if (this.block.active = !1, 1 == this.teachGrade ? (this.make.active = !0, this.help.active = !0, this.make.setContentSize(this.teachNodes[0].getContentSize()), this.make.setPosition(this.teachNodes[0].position)) : 2 == this.teachGrade ? (this.make.active = !0, this.help.active = !0, this.main.getComponent(a.default).makeUi.getComponent(s.default).isMoveIn || this.main.getComponent(a.default).onClickTeachIn(), this.make.setContentSize(this.teachNodes[1].getContentSize()), this.make.setPosition(this.teachNodes[1].position)) : 3 == this.teachGrade ? (this.make.active = !0, this.help.active = !0, this.main.getComponent(a.default).makeUi.getComponent(s.default).isMoveIn || this.main.getComponent(a.default).onClickTeachIn(), this.make.setContentSize(this.teachNodes[1].getContentSize()), this.make.setPosition(this.teachNodes[1].position)) : 4 == this.teachGrade ? (this.make.active = !0, this.help.active = !0, this.main.getComponent(a.default).makeUi.getComponent(s.default).isMoveIn || this.main.getComponent(a.default).onClickTeachIn(), this.make.setContentSize(this.teachNodes[2].getContentSize()), this.make.setPosition(this.teachNodes[2].position)) : 5 == this.teachGrade ? (this.make.active = !0, this.help.active = !0, this.make.setContentSize(this.teachNodes[3].getContentSize()), this.make.setPosition(this.teachNodes[3].position)) : 6 == this.teachGrade ? (this.make.active = !0, this.help.active = !0, this.make.setContentSize(this.teachNodes[4].getContentSize()), this.make.setPosition(this.teachNodes[4].position)) : 7 == this.teachGrade ? (this.make.active = !0, this.help.active = !0, this.make.setContentSize(this.teachNodes[5].getContentSize()), this.make.setPosition(this.teachNodes[5].position)) : 8 == this.teachGrade ? (this.make.active = !0, this.help.active = !0, this.main.getComponent(a.default).onClickTeachOut(), this.make.setContentSize(this.teachNodes[6].getContentSize()), this.make.setPosition(this.teachNodes[6].position)) : 9 == this.teachGrade ? (this.make.active = !0, this.help.active = !0, this.make.setContentSize(this.teachNodes[7].getContentSize()), this.make.setPosition(this.teachNodes[7].position)) : 10 == this.teachGrade ? (this.make.active = !0, this.help.active = !0, this.main.getComponent(a.default).onClickTeachOut(), this.make.setContentSize(this.teachNodes[8].getContentSize()), this.make.setPosition(this.teachNodes[8].position)) : 11 == this.teachGrade ? (this.make.active = !0, this.help.active = !0, this.make.setContentSize(this.teachNodes[9].getContentSize()), this.make.setPosition(this.teachNodes[9].position)) : 13 == this.teachGrade ? (this.make.active = !0, this.help.active = !0, this.make.setContentSize(this.teachNodes[11].getContentSize()), this.make.setPosition(this.teachNodes[11].position), this.main.getComponent(a.default).makeUi && this.main.getComponent(a.default).makeUi.getComponent(s.default).onTouchEnd(null)) : 14 == this.teachGrade ? (this.make.active = !0, this.help.active = !0, this.make.setContentSize(this.teachNodes[12].getContentSize()), this.make.setPosition(this.teachNodes[12].position)) : 15 == this.teachGrade ? (this.make.active = !0, this.help.active = !0, this.make.setContentSize(this.teachNodes[13].getContentSize()), this.make.setPosition(this.teachNodes[13].position), this.main.getComponent(a.default).makeUi && this.main.getComponent(a.default).makeUi.getComponent(s.default).onTouchEnd(null)) : 16 == this.teachGrade && (this.make.active = !0, this.help.active = !0, this.make.setContentSize(this.teachNodes[14].getContentSize()), this.make.setPosition(this.teachNodes[14].position)), this.help.getChildByName("help2").setPosition(this.helpPos1[this.teachGrade - 1]), this.help.getChildByName("help3").setPosition(this.helpPos2[this.teachGrade - 1]), 4 == this.teachGrade) {
                        (e = this.help.getChildByName("help3")).stopAllActions();
                        var t = cc.tween().to(.1, {
                            position: new cc.Vec2(-219.843, -195.38)
                        }).to(1, {
                            position: new cc.Vec2(-50.843, -195.38)
                        }).delay(.5);
                        cc.tween(e).then(t).repeatForever().start()
                    } else {
                        var e;
                        (e = this.help.getChildByName("help3")).stopAllActions();
                        t = cc.tween().to(.1, {
                            scale: .65
                        }).to(.1, {
                            scale: 1
                        }).delay(.25);
                        cc.tween(e).then(t).repeatForever().start()
                    }
                    for (var i = 0, n = this.teachStr; i < n.length; i++) {
                        n[i].active = !1
                    }
                    this.teachStr[this.teachGrade - 1].active = !0, c.default.getInstance().teachGrade = this.teachGrade, c.default.getInstance().saveData()
                }, e.prototype.SetGameTeachOver = function() {
                    this.make.active = !1, this.isTeachOver = !0, this.help.active = !1, c.default.getInstance().isTeach = 1, this.main.getComponent(a.default).makeUi.getComponent(s.default).SetAirDropOpen(), c.default.getInstance().saveData(), this.signin.getComponent(r.default).isDaily = !0, l.default.GetInstance().isCheck = !0, c.default.getInstance().teachReach = 1, cc.sys.localStorage.setItem("teachReach", c.default.getInstance().teachReach)
                }, e.prototype.TouchMask = function(t) {
                    if (this.isTeachOver) this.touchNode._touchListener.setSwallowTouches(!1);
                    else {
                        var e = t.getLocation();
                        this.mask.children[0].active = !1, this.mask.getBoundingBoxToWorld().contains(e) ? this.touchNode._touchListener.setSwallowTouches(!1) : this.touchNode._touchListener.setSwallowTouches(!0), this.mask.children[0].active = !0
                    }
                }, e.prototype.ShareTeaching = function() {
                    if (this.main.active && !this.make.active && this.main.getComponent(a.default).makeUi.getComponent(s.default).isMoveIn) {
                        this.isShareTea = !0, this.main.getComponent(a.default).onClickTeachOut(), this.make.active = !0, this.help.active = !0, this.make.setContentSize(this.teachNodes[10].getContentSize()), this.make.setPosition(this.teachNodes[10].position);
                        for (var t = 0, e = this.teachStr; t < e.length; t++) {
                            e[t].active = !1
                        }
                        this.teachStr[11].active = !0, this.help.getChildByName("help2").setPosition(this.helpPos1[11]), this.help.getChildByName("help3").setPosition(this.helpPos2[11]);
                        var i = this.help.getChildByName("help3");
                        i.stopAllActions();
                        var n = cc.tween().to(.1, {
                            scale: .65
                        }).to(.1, {
                            scale: 1
                        }).delay(.25);
                        cc.tween(i).then(n).repeatForever().start()
                    }
                }, e.prototype.CloseShareTeach = function() {
                    this.isShareTea && 0 == c.default.getInstance().shareTirrg && (this.isShareTea = !1, this.make.active = !1, this.help.active = !1, c.default.getInstance().shareTirrg = 1, c.default.getInstance().saveData())
                }, e.prototype.BeganGameGuide = function() {
                    this.isBeganCompose = !0;
                    var t = new cc.Vec2(40.596, -624.411);
                    this.help.active = !0, this.help.getChildByName("help2").active = !1;
                    var e = this.help.getChildByName("help3");
                    e.setPosition(t);
                    var i = cc.tween().to(.1, {
                        scale: .65
                    }).to(.1, {
                        scale: 1
                    }).delay(.5);
                    cc.tween(e).then(i).repeatForever().start()
                }, e.prototype.HideGameGuide = function() {
                    this.isBeganCompose && (this.isBeganCompose = !1, this.help.getChildByName("help3").stopAllActions(), this.help.active = !1, this.help.getChildByName("help2").active = !0)
                }, e.prototype.CheckStartCompany = function() {
                    this.isTeachSucc[2] || (c.default.getInstance().stCompanyNum++, c.default.getInstance().stCompanyNum >= 3 && (this.isTeach = !0, this.isTeachOver = !1, this.teachGrade = 13, this.isTeachSucc[2] = !0, this.SaveTeachData()))
                }, e.prototype.SaveTeachData = function() {
                    var t = {
                        isTeachSucc: this.isTeachSucc
                    };
                    cc.sys.localStorage.setItem("teach", JSON.stringify(t))
                }, e.instance = null, o([d(cc.Node)], e.prototype, "main", void 0), o([d(cc.Node)], e.prototype, "signin", void 0), o([d(cc.Node)], e.prototype, "block", void 0), o([d(cc.Node)], e.prototype, "make", void 0), o([d(cc.Node)], e.prototype, "help", void 0), o([d(cc.Node)], e.prototype, "touchNode", void 0), o([d(cc.Node)], e.prototype, "mask", void 0), o([d(cc.Node)], e.prototype, "teachNodes", void 0), o([d(cc.Node)], e.prototype, "teachStr", void 0), e = i = o([u], e)
            }(cc.Component);
        i.default = p, cc._RF.pop()
    }, {
        "./AdsMananger": "AdsMananger",
        "./GameLocalData": "GameLocalData",
        "./MainUI": "MainUI",
        "./SignIn": "SignIn",
        "./make/Make": "Make"
    }],
    GlobalData: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "d3c061waDNFuLwhh2TlO/cr", "GlobalData");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            s = a.ccclass,
            c = (a.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                var i;
                return n(e, t), i = e, e.prototype.onLoad = function() {
                    i.instance = this
                }, e.prototype.start = function() {}, e.instance = null, e.MinMaxInterval = 5, e = i = o([s], e)
            }(cc.Component));
        i.default = c, cc._RF.pop()
    }, {}],
    GradeSetting: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "9819a+bLSlMhY2OS8OHsqv7", "GradeSetting");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./GrilController"),
            s = t("./GameLocalData"),
            c = t("./GameManger"),
            r = t("./AudioManager"),
            l = t("./MainUI"),
            h = t("./GameTeaching"),
            u = t("./make/Make"),
            d = t("./AdsMananger"),
            p = t("./Achievement"),
            g = cc._decorator,
            f = g.ccclass,
            m = g.property,
            v = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.gril = null, e.progress = null, e.particle = null, e.levelSp = null, e.shareVideoSp = null, e.lizi = null, e.tips = null, e.pingfen = null, e.skip = null, e.main = null, e.make = null, e.synopsis = null, e.Promote = null, e.pingfenLimit = null, e.rankLev = null, e.shareVideo = [], e.signTexture = [], e.levelTexture = [], e.sortScoreStr = null, e.maxScoreStr = null, e.lateToggle = null, e.armature = null, e.property = [
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        [2, 3, 4, 5, 6, 7, 8, 9, 10, 1],
                        [3, 4, 5, 6, 7, 8, 9, 10, 1, 2],
                        [4, 5, 6, 7, 8, 9, 10, 1, 2, 3],
                        [5, 6, 7, 8, 9, 10, 1, 2, 3, 4],
                        [6, 7, 8, 9, 10, 1, 2, 3, 4, 5],
                        [7, 8, 9, 10, 1, 2, 3, 4, 5, 6],
                        [8, 9, 10, 1, 2, 3, 4, 5, 6, 7],
                        [9, 10, 1, 2, 3, 4, 5, 6, 7, 8],
                        [10, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        [2, 3, 4, 5, 6, 7, 8, 9, 10, 1],
                        [3, 4, 5, 6, 7, 8, 9, 10, 1, 2],
                        [4, 5, 6, 7, 8, 9, 10, 1, 2, 3],
                        [5, 6, 7, 8, 9, 10, 1, 2, 3, 4],
                        [6, 7, 8, 9, 10, 1, 2, 3, 4, 5],
                        [7, 8, 9, 10, 1, 2, 3, 4, 5, 6],
                        [8, 9, 10, 1, 2, 3, 4, 5, 6, 7],
                        [9, 10, 1, 2, 3, 4, 5, 6, 7, 8],
                        [10, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        [2, 3, 4, 5, 6, 7, 8, 9, 10, 1],
                        [3, 4, 5, 6, 7, 8, 9, 10, 1, 2],
                        [4, 5, 6, 7, 8, 9, 10, 1, 2, 3],
                        [5, 6, 7, 8, 9, 10, 1, 2, 3, 4],
                        [6, 7, 8, 9, 10, 1, 2, 3, 4, 5],
                        [7, 8, 9, 10, 1, 2, 3, 4, 5, 6],
                        [8, 9, 10, 1, 2, 3, 4, 5, 6, 7],
                        [9, 10, 1, 2, 3, 4, 5, 6, 7, 8],
                        [10, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        [1, 6, 1, 6, 1, 6, 1, 6, 1, 7],
                        [2, 7, 2, 7, 2, 7, 2, 7, 2, 8],
                        [3, 8, 3, 8, 3, 8, 3, 8, 3, 9],
                        [4, 9, 4, 9, 4, 9, 4, 9, 4, 10],
                        [5, 10, 5, 10, 5, 10, 5, 10, 5, 6]
                    ], e.scoreGrade = [500, 2500, 7500, 15e3, 25e3, 35e3], e.maxShow = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], e.gradeReward = [0, .1, .3, .5, 1, 2, 3], e.multi = 0, e.gradeNum = 0, e.sortScoreValue = 0, e.initScore = 0, e.labelTag = 0, e.isGrade = !1, e.isSkip = !1, e.goldReward = 0, e.isPlayAudio = !1, e.isFrist = !0, e.mainSpcrit = null, e.sortScore = [], e
                }
                return n(e, t), e.prototype.start = function() {
                    this.mainSpcrit = this.main.getComponent(l.default)
                }, e.prototype.update = function(t) {
                    this.mainSpcrit.is_record && (this.mainSpcrit.recordTs += t, this.mainSpcrit.record_time += t, this.mainSpcrit.recordTs >= 5 && !this.mainSpcrit.isTriggerVideo && (this.mainSpcrit.isLuzhi = !0, this.mainSpcrit.isTriggerVideo = !0, this.mainSpcrit.luzhifenxiang.active = !0))
                }, e.prototype.Init = function() {
                    this.isSkip = !1, this.skip.active = !0, this.node.getChildByName("Button3").active = !0, this.pingfenLimit.string = s.default.getInstance().sports + " / 5", this.levelSp.spriteFrame = this.levelTexture[s.default.getInstance().grade - 1], this.maxScoreStr.string = "Điểm cao nhất: " + s.default.getInstance().maxRankScore.toString()
                }, e.prototype.judgeIsOpen = function() {
                    for (var t = !0, e = 0; e < 5; e++)
                        if (s.default.getInstance().getPartsHighestLevs(e) < 2) {
                            t = !1;
                            break
                        } return t
                }, e.prototype.ShowGradeSceneUI = function() {
                    (r.default.getInstance().PlayBtAudio(3), this.judgeIsOpen()) ? (d.default.GetInstance().Showinterstitial(), p.default.getInstance().achieveTrigger[2] = !1, this.main.getComponent(l.default).ChangeStatusBar(), this.Init(), this.main.active = !1, this.node.active = !0, this.sortScoreStr.string = s.default.getInstance().gradeScore.toString(), this.rankLev.string = s.default.getInstance().myRank + "", h.default.getInstance().isTeachOver || (h.default.getInstance().isTeach = !0, h.default.getInstance().teachGrade += 1), c.default.getInstance().isCurrentMain = !1) : c.default.getInstance().uiRoot.hint.setHint("Mở khóa sau khi kết hợp ít nhất 1 trang phục!")
                }, e.prototype.CloseGradeSceneUI = function() {
                    this.unscheduleAllCallbacks(), this.node.stopAllActions(), this.progress.fillRange = 0;
                    var t = this.lizi.position;
                    t.y = -360, this.lizi.setPosition(t), this.armature.node.active = !1, r.default.getInstance().PlayBtAudio(3), this.node.active = !1, this.main.active = !0, c.default.getInstance().isCurrentMain = !0
                }, e.prototype.SkipGrade = function() {
                    s.default.getInstance().isShow = 1;
                    if (s.default.getInstance().sports > 0) {
                        this.unscheduleAllCallbacks(), this.isSkip = !0, this.skip.active = !1, this.SetStartGrilGrade();
                        for (var t = 0; t < 5; t++) {
                            this.armature.node.active = !0, this.armature.playAnimation("stage02", 1);
                            var e = this.armature.node.getChildByName("Label");
                            e.setScale(0), cc.tween(e).to(1, {
                                scale: 1
                            }).start();
                            var i = this.gril.grilProperty[t] * this.gril.grilProperty[t] * 2 + 3 * this.gril.grilProperty[t] + 5;
                            this.multi > 0 && (i += Math.floor(i * this.multi)), this.initScore += i, this.gradeNum++
                        }
                        this.armature.node.getChildByName("Label").getComponent(cc.Label).string = this.initScore.toString();
                        var n = this;
                        cc.tween(this.node).delay(1.25).call(function() {
                            n.armature.node.active = !1, n.particle.resetSystem()
                        }).start(), cc.tween(this.node).delay(1.75).call(function() {
                            n.schedule(n.CheckScore, .005)
                        }).start()
                    } else this.ShowAllTip();
                }, e.prototype.startGrade = function() {
                    r.default.getInstance().PlayBtAudio(12), this.isPlayAudio = !1, this.armature.node.active = !0, this.armature.playAnimation("stage02", 1);
                    var t = this.armature.node.getChildByName("Label").getComponent(cc.Label),
                        e = this.armature.node.getChildByName("Label");
                    e.setScale(0), cc.tween(e).to(.5, {
                        scale: 1
                    }).start();
                    var i = this.gril.grilProperty[this.gradeNum] * this.gril.grilProperty[this.gradeNum] * 2 + 3 * this.gril.grilProperty[this.gradeNum] + 5;
                    this.multi > 0 && (i += Math.floor(i * this.multi)), t.string = i.toString(), this.initScore = this.sortScoreValue + i, this.gradeNum++;
                    var n = this;
                    cc.tween(this.node).delay(1.25).call(function() {
                        n.armature.node.active = !1, n.particle.resetSystem()
                    }).start(), cc.tween(this.node).delay(1.75).call(function() {
                        n.schedule(n.CheckScore, .005)
                    }).start()
                }, e.prototype.SetStartGrilGrade = function() {
                    if (s.default.getInstance().sports > 0) {
                        var t = 0;
                        this.initScore = 0, this.sortScoreValue = 0, this.progress.fillRange = 0;
                        var e = this.lizi.position;
                        e.y = -360, this.lizi.setPosition(e), this.sortScore.splice(0), s.default.getInstance().missionType[4]++, r.default.getInstance().PlayBtAudio(13), this.node.getChildByName("Button3").active = !1;
                        for (var i = 0; i < 5; i++) this.sortScore.push(this.property[this.gril.grilProperty[i] - 1][t]), this.sortScore.push(this.property[this.gril.grilProperty[i] - 1][t + 1]), t += 2;
                        for (var n = 0, o = 0; o < this.sortScore.length; o++)
                            for (var a = o + 1; a < this.sortScore.length; a++) this.sortScore[o] == this.sortScore[a] && n++;
                        for (i = 0; i < this.sortScore.length; i++) this.maxShow[this.sortScore[i] - 1] += 1;
                        this.labelTag = 0;
                        for (i = 0; i < this.maxShow.length; i++) this.maxShow[i] > this.maxShow[this.labelTag] && (this.labelTag = i);
                        this.multi = .2 * n, this.isGrade = !0, this.gradeNum = 0, this.isSkip || this.startGrade(), h.default.getInstance().isTeachOver || (this.make.getComponent(u.default).autoTs > 0 && (this.make.getComponent(u.default).isAutoComp = !0), h.default.getInstance().SetGameTeachOver())
                    } else this.ShowAllTip()
                }, e.prototype.CheckScore = function() {
                    if (this.sortScoreValue < this.initScore) {
                        var t;
                        if (this.isPlayAudio || (r.default.getInstance().PlayBtAudio(14), this.isPlayAudio = !0), this.sortScoreValue += 8, this.sortScoreValue > this.initScore && (this.sortScoreValue = this.initScore), this.sortScoreStr.string = this.sortScoreValue.toString(), this.progress.fillRange < 1) this.progress.fillRange = this.sortScoreValue / this.scoreGrade[s.default.getInstance().grade - 1], (t = this.lizi.position).y = 742 * this.progress.fillRange - 360, this.lizi.setPosition(t);
                        else this.progress.fillRange = 1, (t = this.lizi.position).y = 742 * this.progress.fillRange - 360, this.lizi.setPosition(t);
                        var that = this;
                        this.sortScoreValue == this.initScore && (this.unschedule(this.CheckScore), this.gradeNum > 4 ? this.CheckShowPingFen() : this.startGrade())
                    }
                }, e.prototype.CheckShowPingFen = function() {
                    /* if (s.default.getInstance().isShow == 1) {
                        var instance = s.default.getInstance();
                        instance.isShow = 0;
                        var that = this;
                        window.h5api.submitRankScore(382, this.sortScoreValue, function(res) {
                            instance.myRank = res.data.rank;
                            that.rankLev.string = instance.myRank + "";
                            that.ShowPingFen();
                        });
                    } */
					console.log("6544");
                }, e.prototype.ShowPingFen = function() {
                    this.isGrade = !1, this.pingfen.active = !0, this.pingfen.setScale(0), cc.tween(this.pingfen).to(.25, {
                        scale: 1.25
                    }).to(.1, {
                        scale: 1
                    }).start();
                    if (this.sortScoreValue > s.default.getInstance().maxRankScore) {
                        s.default.getInstance().maxRankScore = this.sortScoreValue;
                    };
                    this.main.getComponent(l.default).submitScoreButtonFunc(s.default.getInstance().maxRankScore.toString()), s.default.getInstance().sports--, this.Init(), this.skip.active = !1, this.pingfen.getChildByName("main03").getChildByName("Label").getComponent(cc.Label).string = this.sortScoreValue.toString(), this.pingfen.getChildByName("pingfen10").getChildByName("shuxing01").getComponent(cc.Sprite).spriteFrame = this.signTexture[this.labelTag], s.default.getInstance().grade < 8 && this.sortScoreValue >= this.scoreGrade[s.default.getInstance().grade - 1] && this.scheduleOnce(this.ShowPromote, 1), p.default.getInstance().achieveTrigger[3] = !0, s.default.getInstance().saveData()
                }, e.prototype.ClosePingFen = function() {
                    this.unscheduleAllCallbacks(), this.node.stopAllActions(), r.default.getInstance().PlayBtAudio(3), this.pingfen.active = !1, this.skip.active = !0
                }, e.prototype.ShowPromote = function() {
                    for (this.lateToggle.isChecked = !0, this.Promote.active = !0, this.Promote.setScale(0), cc.tween(this.Promote).to(.25, {
                            scale: 1.25
                        }).to(.1, {
                            scale: 1
                        }).start(), s.default.getInstance().gradeScore = this.sortScoreValue; this.sortScoreValue >= this.scoreGrade[s.default.getInstance().grade - 1];) {
                        this.sortScoreValue -= this.scoreGrade[s.default.getInstance().grade - 1], s.default.getInstance().grade += 1, this.Promote.getChildByName("di03").getChildByName("main03").getChildByName("Label").getComponent(cc.Label).string = "+" + c.default.getInstance().RetainInt(s.default.getInstance().secGoldCoinNum * this.gradeReward[s.default.getInstance().grade - 1] * 60 * 60, 2), this.goldReward = s.default.getInstance().secGoldCoinNum * this.gradeReward[s.default.getInstance().grade - 1] * 60 * 60
                    }
                    this.Promote.getChildByName("di03").getChildByName("level1").getComponent(cc.Sprite).spriteFrame = this.levelTexture[s.default.getInstance().grade - 1], this.Promote.getChildByName("di03").getChildByName("level2").getComponent(cc.Sprite).spriteFrame = this.levelTexture[s.default.getInstance().grade]
                }, e.prototype.GetRewardSingle = function() {
                    this.lateToggle.isChecked ? this.GetDouble() : this.GetReWardUI()
                }, e.prototype.GetReWardUI = function() {
                    this.Promote.active = !1, c.default.getInstance().uiRoot.hint.setHint("Nhận " + (this.goldReward / 1e4).toString() + " vạn vàng"), s.default.getInstance().setGoldCoinNum(s.default.getInstance().getGoldCoinNum() + this.goldReward), s.default.getInstance().saveData()
                }, e.prototype.GetDouble = function() {
                    var t = this;
                    d.default.GetInstance().ShowRewardVideo(function() {
                        return t.DoubleSuccess()
						console.log("322");
                    })
					console.log("888888888");
                }, e.prototype.DoubleSuccess = function() {
                    this.Promote.active = !1, c.default.getInstance().uiRoot.hint.setHint("Nhận " + (2 * this.goldReward / 1e4).toString() + " vạn vàng"), s.default.getInstance().setGoldCoinNum(s.default.getInstance().getGoldCoinNum() + this.goldReward), s.default.getInstance().saveData()
					console.log("llllllllll");
                }, e.prototype.ShowSynopsis = function() {
                    this.synopsis.active = !0, this.synopsis.setScale(0), cc.tween(this.synopsis).to(.25, {
                        scale: 1.25
                    }).to(.1, {
                        scale: 1
                    }).start()
                }, e.prototype.CloseSynopsis = function() {
                    this.synopsis.active = !1
                }, e.prototype.ShowAllTip = function() {
                    for (var t = 1; t < 5; t++) this.tips.getChildByName("di03").getChildByName("tishi" + t).active = !1;
                    this.tips.active = !0, this.tips.setScale(0), cc.tween(this.tips).to(.25, {
                        scale: 1.25
                    }).to(.1, {
                        scale: 1
                    }).start(), this.tips.getChildByName("di03").getChildByName("tishi3").active = !0
                }, e.prototype.NoGradeAds = function() {
                    var t = this;
                    d.default.GetInstance().ShowRewardVideo(function() {
                        return t.GradeAdsSuccess()
						console.log("mmmmmee");
                    })
					console.log("bbgfff");
                }, e.prototype.GradeAdsSuccess = function() {
                    s.default.getInstance().sports += 2, s.default.getInstance().saveData(), this.tips.active = !1, this.pingfenLimit.string = s.default.getInstance().sports + " / 5"
                }, e.prototype.VideoShareSuccess = function() {
                    this.isFrist ? (this.shareVideoSp.spriteFrame = this.shareVideo[1], c.default.getInstance().uiRoot.hint.setHint("Nhận 100 kim cương"), s.default.getInstance().setDiamondsnNum(s.default.getInstance().getDiamondsNum() + 100), this.isFrist = !1) : (c.default.getInstance().uiRoot.hint.setHint("Nhận 50 kim cương"), s.default.getInstance().setDiamondsnNum(s.default.getInstance().getDiamondsNum() + 50)), s.default.getInstance().saveData(), this.pingfen.getChildByName("share").active = !1
                }, o([m(a.default)], e.prototype, "gril", void 0), o([m(cc.Sprite)], e.prototype, "progress", void 0), o([m(cc.ParticleSystem)], e.prototype, "particle", void 0), o([m(cc.Sprite)], e.prototype, "levelSp", void 0), o([m(cc.Sprite)], e.prototype, "shareVideoSp", void 0), o([m(cc.Node)], e.prototype, "lizi", void 0), o([m(cc.Node)], e.prototype, "tips", void 0), o([m(cc.Node)], e.prototype, "pingfen", void 0), o([m(cc.Node)], e.prototype, "skip", void 0), o([m(cc.Node)], e.prototype, "main", void 0), o([m(cc.Node)], e.prototype, "make", void 0), o([m(cc.Node)], e.prototype, "synopsis", void 0), o([m(cc.Node)], e.prototype, "Promote", void 0), o([m(cc.Label)], e.prototype, "pingfenLimit", void 0), o([m(cc.Label)], e.prototype, "rankLev", void 0), o([m(cc.SpriteFrame)], e.prototype, "shareVideo", void 0), o([m(cc.SpriteFrame)], e.prototype, "signTexture", void 0), o([m(cc.SpriteFrame)], e.prototype, "levelTexture", void 0), o([m(cc.Label)], e.prototype, "sortScoreStr", void 0), o([m(cc.Label)], e.prototype, "maxScoreStr", void 0), o([m(cc.Toggle)], e.prototype, "lateToggle", void 0), o([m(dragonBones.ArmatureDisplay)], e.prototype, "armature", void 0), e = o([f], e)
            }(cc.Component);
        i.default = v, cc._RF.pop()
    }, {
        "./Achievement": "Achievement",
        "./AdsMananger": "AdsMananger",
        "./AudioManager": "AudioManager",
        "./GameLocalData": "GameLocalData",
        "./GameManger": "GameManger",
        "./GameTeaching": "GameTeaching",
        "./GrilController": "GrilController",
        "./MainUI": "MainUI",
        "./make/Make": "Make"
    }],
    GrilController: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "06f4bofZ7JARautmYv97mQN", "GrilController");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./CharacterInfo"),
            s = t("./AssetsManager"),
            c = cc._decorator,
            r = c.ccclass,
            l = c.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.hair = null, e.clothes = null, e.bags = null, e.shoes = null, e.headdress = null, e.itemglass = null, e.itemears = null, e.itemneck = null, e.itemlegs = null, e.itemchain = null, e.itemFly = null, e.itemscarf = null, e.grilProperty = [1, 1, 1, 1, 1], e.wear = [0, 0, 0, 0, 0], e.specailwear = [-1, -1, -1, -1, -1, -1], e.currentIndex = [0, 0, 0, 0, 0, 0], e
                }
                var i;
                return n(e, t), i = e, e.getInstance = function() {
                    return i.instance
                }, e.prototype.onLoad = function() {
                    i.instance = this;
                    var t = cc.sys.localStorage.getItem("userData1");
                    if (t) {
                        var e = JSON.parse(t);
                        e && (void 0 != e.wear && (this.wear = e.wear), void 0 != e.specailwear && (this.specailwear = e.specailwear))
                    }
                }, e.prototype.start = function() {
                    this.SetGrilSpriFrame()
                }, e.prototype.SetGrilSpriFrame = function() {
                    for (var t = 0; t < this.wear.length; t++) this.SetGrilMod(t, this.wear[t]);
                    for (t = 0; t < this.specailwear.length; t++) - 1 != this.specailwear[t] && this.SetGrilMod(5, this.specailwear[t])
                }, e.prototype.SetGrilMod = function(t, e) {
                    switch (t) {
                        case a.default.Cha_Hair:
                            this.hair.spriteFrame = new cc.SpriteFrame(s.default.getInstance().GetMain(t, e));
                            break;
                        case a.default.Cha_Ornament:
                            this.headdress.spriteFrame = new cc.SpriteFrame(s.default.getInstance().mainOrnaments[e]);
                            break;
                        case a.default.Cha_Clothes:
                            this.clothes.spriteFrame = new cc.SpriteFrame(s.default.getInstance().mainClothes[e]);
                            break;
                        case a.default.Cha_Bag:
                            this.bags.spriteFrame = new cc.SpriteFrame(s.default.getInstance().mainBags[e]);
                            break;
                        case a.default.Cha_Shoes:
                            this.shoes.spriteFrame = new cc.SpriteFrame(s.default.getInstance().mainShoes[e]);
                            break;
                        case a.default.Cha_Special:
                            void 0 != e.toString()[3] ? this.SetSpeicalBody(parseInt(e.toString()[1]), parseInt(e.toString()[2] + e.toString()[3])) : this.SetSpeicalBody(parseInt(e.toString()[1]), parseInt(e.toString()[2]))
                    }
                    t < 5 && (this.grilProperty[t] = e + 1, this.wear[t] = e), this.saveData()
                }, e.prototype.SetSpeicalBody = function(t, e) {
                    var i = !1;
                    0 == t ? null == this.itemglass.spriteFrame ? (this.itemglass.spriteFrame = new cc.SpriteFrame(s.default.getInstance().mainSpecials[e]), i = !0, this.currentIndex[t] = e) : this.currentIndex[t] != e ? (this.itemglass.spriteFrame = new cc.SpriteFrame(s.default.getInstance().mainSpecials[e]), i = !0, this.currentIndex[t] = e) : this.itemglass.spriteFrame = null : 1 == t ? null == this.itemneck.spriteFrame ? (this.itemneck.spriteFrame = new cc.SpriteFrame(s.default.getInstance().mainSpecials[e]), i = !0, this.currentIndex[t] = e) : this.currentIndex[t] != e ? (this.itemneck.spriteFrame = new cc.SpriteFrame(s.default.getInstance().mainSpecials[e]), i = !0, this.currentIndex[t] = e) : this.itemneck.spriteFrame = null : 2 == t ? null == this.itemears.spriteFrame ? (this.itemears.spriteFrame = new cc.SpriteFrame(s.default.getInstance().mainSpecials[e]), i = !0, this.currentIndex[t] = e) : this.currentIndex[t] != e ? (this.itemears.spriteFrame = new cc.SpriteFrame(s.default.getInstance().mainSpecials[e]), i = !0, this.currentIndex[t] = e) : this.itemears.spriteFrame = null : 3 == t ? null == this.itemlegs.spriteFrame ? (this.itemlegs.spriteFrame = new cc.SpriteFrame(s.default.getInstance().mainSpecials[e]), i = !0, this.currentIndex[t] = e) : this.currentIndex[t] != e ? (this.itemlegs.spriteFrame = new cc.SpriteFrame(s.default.getInstance().mainSpecials[e]), i = !0, this.currentIndex[t] = e) : this.itemlegs.spriteFrame = null : 4 == t ? null == this.itemscarf.spriteFrame ? (this.itemscarf.spriteFrame = new cc.SpriteFrame(s.default.getInstance().mainSpecials[e]), i = !0, this.currentIndex[t] = e) : this.currentIndex[t] != e ? (this.itemscarf.spriteFrame = new cc.SpriteFrame(s.default.getInstance().mainSpecials[e]), i = !0, this.currentIndex[t] = e) : this.itemscarf.spriteFrame = null : 5 == t && (null == this.itemFly.spriteFrame ? (this.itemFly.spriteFrame = new cc.SpriteFrame(s.default.getInstance().mainSpecials[e]), i = !0, this.currentIndex[t] = e) : this.currentIndex[t] != e ? (this.itemFly.spriteFrame = new cc.SpriteFrame(s.default.getInstance().mainSpecials[e]), i = !0, this.currentIndex[t] = e) : this.itemFly.spriteFrame = null), i ? e >= 0 && e < 5 ? this.specailwear[t] = parseInt("10" + e.toString()) : e >= 5 && e < 10 ? this.specailwear[t] = parseInt("11" + e.toString()) : e >= 10 && e < 15 ? this.specailwear[t] = parseInt("12" + e.toString()) : e >= 15 && e < 20 ? this.specailwear[t] = parseInt("13" + e.toString()) : e >= 20 && e < 23 ? this.specailwear[t] = parseInt("14" + e.toString()) : e >= 23 && e < 26 && (this.specailwear[t] = parseInt("15" + e.toString())) : this.specailwear[t] = -1
                }, e.prototype.saveData = function() {
                    var t = {
                        wear: this.wear,
                        specailwear: this.specailwear
                    };
                    cc.sys.localStorage.setItem("userData1", JSON.stringify(t))
                }, e.instance = null, o([l(cc.Sprite)], e.prototype, "hair", void 0), o([l(cc.Sprite)], e.prototype, "clothes", void 0), o([l(cc.Sprite)], e.prototype, "bags", void 0), o([l(cc.Sprite)], e.prototype, "shoes", void 0), o([l(cc.Sprite)], e.prototype, "headdress", void 0), o([l(cc.Sprite)], e.prototype, "itemglass", void 0), o([l(cc.Sprite)], e.prototype, "itemears", void 0), o([l(cc.Sprite)], e.prototype, "itemneck", void 0), o([l(cc.Sprite)], e.prototype, "itemlegs", void 0), o([l(cc.Sprite)], e.prototype, "itemchain", void 0), o([l(cc.Sprite)], e.prototype, "itemFly", void 0), o([l(cc.Sprite)], e.prototype, "itemscarf", void 0), e = i = o([r], e)
            }(cc.Component);
        i.default = h, cc._RF.pop()
    }, {
        "./AssetsManager": "AssetsManager",
        "./CharacterInfo": "CharacterInfo"
    }],
    Hint: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "a8b7f6lcVFKBrl8rnJ9G7OI", "Hint");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            s = a.ccclass,
            c = a.property,
            r = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.label = null, e.isShowHintIng = !1, e.showTime = 0, e
                }
                return n(e, t), e.prototype.start = function() {
                    this.isShowHintIng = !1
                }, e.prototype.setHint = function(t) {
                    if (this.label.string = t, this.node.active = !0, this.showTime = 2, !this.isShowHintIng) {
                        this.isShowHintIng = !0, this.node.scaleY = 0;
                        var e = cc.scaleTo(.2, 1, 1),
                            i = this;
                        this.node.runAction(cc.sequence(e, cc.callFunc(function() {
                            i.isShowHintIng = !1
                        })))
                    }
                }, e.prototype.update = function(t) {
                    this.showTime > 0 && (this.showTime -= t, this.showTime <= 0 && (this.showTime = 0, this.node.active = !1))
                }, o([c(cc.Label)], e.prototype, "label", void 0), e = o([s], e)
            }(cc.Component);
        i.default = r, cc._RF.pop()
    }, {}],
    "Illustrated ": [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "ff3826vlO5LiIgGQHyqv42g", "Illustrated ");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./GrilController"),
            s = t("./GameManger"),
            c = t("./GameLocalData"),
            r = cc._decorator,
            l = r.ccclass,
            h = r.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.girl = null, e.suitComplete = [!1, !1, !1, !1, !1], e
                }
                return n(e, t), e.prototype.start = function() {}, e.prototype.IntoIllustratedUI = function() {
                    this.node.active = !0, this.node.setScale(0), cc.tween(this.node).to(.25, {
                        scale: 1.25
                    }).to(.1, {
                        scale: 1
                    }).start()
                }, e.prototype.CloseIllustratedUI = function() {
                    this.node.active = !1
                }, e.prototype.ChangeClothesOneAuto = function(t) {
                    if (this.suitComplete[t])
                        for (var e = this.girl.getComponent(a.default), i = 0; i < 5; i++) e.SetGrilMod(i, t);
                    else s.default.getInstance().uiRoot.hint.setHint("Bộ đồ chưa được mở khóa")
                }, e.prototype.CheckSuitCompletePercent = function() {
                    for (var t = 0; t < 5; t++) c.default.getInstance().specialStory[t] >= 5 && (this.suitComplete[t] = !0)
                }, o([h(cc.Node)], e.prototype, "girl", void 0), e = o([l], e)
            }(cc.Component);
        i.default = u, cc._RF.pop()
    }, {
        "./GameLocalData": "GameLocalData",
        "./GameManger": "GameManger",
        "./GrilController": "GrilController"
    }],
    LoadManager: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "d048fNDCNBJGp/bSwLfZ51A", "LoadManager");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./AssetsManager"),
            s = cc._decorator,
            c = s.ccclass,
            r = s.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.progress = null, e.isLoadBegan = !1, e.totalNum = 402, e.loadnum = 0, e
                }
                return n(e, t), e.prototype.start = function() {
                    this.loadnum = 5
                }, e.prototype.update = function(t) {
                    var e = this;
                    5 == this.loadnum && (a.default.getInstance().isStartLoad = !0), a.default.getInstance().totalNum / this.totalNum < .8 && (this.progress.fillRange = a.default.getInstance().totalNum / this.totalNum), a.default.getInstance().isLoadOver && !this.isLoadBegan && (cc.director.preloadScene("main", function(t, i, n) {
                        t / i && t / i > .8 && (e.progress.fillRange = t / i)
                    }, function(t) {
                        cc.director.loadScene("main")
                    }), this.isLoadBegan = !0)
                }, o([r(cc.Sprite)], e.prototype, "progress", void 0), e = o([c], e)
            }(cc.Component);
        i.default = l, cc._RF.pop()
    }, {
        "./AssetsManager": "AssetsManager"
    }],
    LuckDraw: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "13496Rct1VDHJE71Cdo/LvT", "LuckDraw");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./GameLocalData"),
            s = t("./MainUI"),
            c = t("./AssetsManager"),
            r = t("./AudioManager"),
            l = t("./GameManger"),
            h = t("./GameTeaching"),
            u = t("./Exchange"),
            d = t("./make/Make"),
            p = t("./AdsMananger"),
            g = t("./StorySet"),
            f = t("./GrilController"),
            m = cc._decorator,
            v = m.ccclass,
            y = m.property,
            C = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.mainUI = null, e.make = null, e.jiangli = null, e.red = null, e.goldCoinStr = null, e.diamondsStr = null, e.effect = null, e.exahcne = null, e.luckRoot = null, e.invit = null, e.units = [], e.luckNode = [], e.alreadyLuckNum = 0, e.rewardNumber = 0, e.goldCoinNum = 0, e.diamondsNum = 0, e.countSec = 0, e.luckIndex = 0, e.currentindex = 0, e.rotateNum = 0, e.rotateSce = .15, e.isLuckOver = !1, e.isStartLuck = !1, e.isShared = !1, e.shareTag = "", e.closeTime = null, e
                }
                return n(e, t), e.prototype.onLoad = function() {
                    this.SetGoldCoinStr(), this.CheckLuckDrawNumber()
                }, e.prototype.start = function() {}, e.prototype.update = function(t) {
                    this.countSec += t, this.countSec >= 1 && (this.countSec = 0, this.SetGoldCoinStr())
                }, e.prototype.RefreshRed = function() {
                    a.default.getInstance().luckNum > 0 && !this.red.active ? this.red.active = !0 : a.default.getInstance().luckNum <= 0 && this.red.active && (this.red.active = !1)
                }, e.prototype.SetGoldCoinStr = function() {
                    if (this.goldCoinStr) {
                        for (var t = 0, e = a.default.getInstance().getGoldCoinNum(), i = e; e >= 1e4;) e /= 1e4, t += 1;
                        this.goldCoinStr.string = l.default.getInstance().RetainNoIntStr(i, 1) + "";
                        for (var n = 0; n < this.units.length; n++) this.units[n].active = !1;
                        if (t > 0 && t <= this.units.length) this.units[t - 1].getComponent(cc.Widget).updateAlignment(), this.units[t - 1].active = !0;
                        this.diamondsStr.string = a.default.getInstance().getDiamondsNum() + ""
                    }
                }, e.prototype.CheckLuck = function() {
                    for (var t = 0; t < this.luckNode.length; t++) {
                        this.luckNode[t].getChildByName("luck").active = !1
                    }
                }, e.prototype.OpenLuckDraw = function() {
                    r.default.getInstance().PlayBtAudio(3), a.default.getInstance().secGoldCoinNum <= 0 ? l.default.getInstance().uiRoot.hint.setHint("Chức năng chưa được bật và tạm thời không thể dùng") : (this.node.active = !0, this.SetGoldCoinStr(), this.CheckLuck(), this.CheckLuckDrawNumber(), l.default.getInstance().isCurrentMain = !1), h.default.getInstance().isTeachOver || (this.make.getComponent(d.default).autoTs > 0 && (this.make.getComponent(d.default).isAutoComp = !0), h.default.getInstance().isTeach = !0, h.default.getInstance().teachGrade += 1)
                }, e.prototype.CloseLuckDraw = function() {
                    r.default.getInstance().PlayBtAudio(3), this.node.active = !1, l.default.getInstance().isCurrentMain = !0
                }, e.prototype.StartRotate = function() {
                    var t = this,
                        e = cc.tween().call(function() {
                            t.SetLuckNodeShow(t.luckIndex)
                        }).delay(this.rotateSce);
                    cc.tween(this.node).then(e).repeatForever().start()
                }, e.prototype.SetLuckNodeShow = function(t) {
                    var e = this;
                    if (this.CheckLuck(), this.luckNode[t].getChildByName("luck").active = !0, this.luckIndex += 1, this.rotateNum += 1, 4 == this.rotateNum) {
                        this.isLuckOver = !0, this.rotateSce = .3, this.node.stopAllActions();
                        var i = cc.tween().call(function() {
                            e.SetLuckNodeShow(e.luckIndex)
                        }).delay(this.rotateSce);
                        cc.tween(this.node).delay(.3).then(i).repeatForever().start()
                    }
                    this.isLuckOver && this.luckIndex == this.currentindex + 1 && (this.node.stopAllActions(), this.rotateSce = .15, this.rotateNum = 0, this.isLuckOver = !1, this.isStartLuck = !1, this.jiangli.getChildByName("Button2").active = !0, this.jiangli.active = !0, this.jiangli.setScale(0), cc.tween(this.jiangli).to(.25, {
                        scale: 1.25
                    }).to(.1, {
                        scale: 1
                    }).start(), this.SetGoldCoinStr()), this.luckIndex = this.luckIndex >= this.luckNode.length ? 0 : this.luckIndex
                }, e.prototype.onclickLuckDraw = function() {
                    /* var t = this;
                    this.isStartLuck || (a.default.getInstance().luckNum > 0 ? this.LuckDrawSuccess() : p.default.GetInstance().ShowRewardVideo(function() {
                        return t.LuckDrawSuccess()
						console.log("bbbbbbb");
                    })) */
					if (a.default.getInstance().luckNum > 0 && a.default.getInstance().luckNum--, this.isStartLuck = !0, this.alreadyLuckNum++, r.default.getInstance().PlayBtAudio(10), this.StartRotate(), this.alreadyLuckNum >= 3) this.alreadyLuckNum = 0, this.MustGetRareClothes();
                    else {
                        var t = Math.floor(100 * Math.random() + 1),
                            e = 0;
                        this.judgeIsHaveNew() || this.isHaveOtherClothes() ? t <= 30 ? e = 0 : t > 30 && t <= 40 ? e = 1 : t > 40 && t <= 45 ? e = 2 : t > 45 && t <= 75 ? e = 3 : t > 75 && t <= 80 ? e = 4 : t > 80 && t <= 95 ? e = 5 : t > 95 && (e = 6) : t <= 40 ? e = 3 : t > 40 && t <= 50 ? e = 4 : t > 50 && t <= 90 ? e = 5 : t > 90 && (e = 6);
                        switch (this.rewardNumber = e, e) {
                            case 0:
                                if (this.judgeIsHaveNew() && this.isHaveOtherClothes()) 0 == Math.floor(2 * Math.random() + 0) ? this.ChoiceWhatIndex(1) : this.ChoiceOtherClothesIndex(1);
                                else this.judgeIsHaveNew() ? this.ChoiceWhatIndex(1) : this.isHaveOtherClothes() && this.ChoiceOtherClothesIndex(1);
                                break;
                            case 1:
                                if (this.judgeIsHaveNew() && this.isHaveOtherClothes()) 0 == Math.floor(2 * Math.random() + 0) ? this.ChoiceWhatIndex(2) : this.ChoiceOtherClothesIndex(2);
                                else this.judgeIsHaveNew() ? this.ChoiceWhatIndex(2) : this.isHaveOtherClothes() && this.ChoiceOtherClothesIndex(2);
                                break;
                            case 2:
                                if (this.judgeIsHaveNew() && this.isHaveOtherClothes()) 0 == Math.floor(2 * Math.random() + 0) ? this.ChoiceWhatIndex(3) : this.ChoiceOtherClothesIndex(2);
                                else this.judgeIsHaveNew() ? this.ChoiceWhatIndex(3) : this.isHaveOtherClothes() && this.ChoiceOtherClothesIndex(2);
                                break;
                            case 3:
                                this.goldCoinNum = .1 * a.default.getInstance().secGoldCoinNum * 60 * 60, this.ShowRewardUI(1, 0, 0);
                                break;
                            case 4:
                                this.goldCoinNum = .3 * a.default.getInstance().secGoldCoinNum * 60 * 60, this.ShowRewardUI(1, 0, 0);
                                break;
                            case 5:
                                this.diamondsNum = 15, this.ShowRewardUI(2, 0, 0);
                                break;
                            case 6:
                                this.diamondsNum = 60, this.ShowRewardUI(2, 0, 0)
                        }
                    }
                    a.default.getInstance().missionType[1]++, h.default.getInstance().isTeachOver ? (h.default.getInstance().isTeachSucc[1] = !0, h.default.getInstance().SaveTeachData()) : h.default.getInstance().SetGameTeachOver(), this.CheckLuckDrawNumber()
					console.log("8890099");
                }, e.prototype.LuckDrawSuccess = function() {
                    if (a.default.getInstance().luckNum > 0 && a.default.getInstance().luckNum--, this.isStartLuck = !0, this.alreadyLuckNum++, r.default.getInstance().PlayBtAudio(10), this.StartRotate(), this.alreadyLuckNum >= 3) this.alreadyLuckNum = 0, this.MustGetRareClothes();
                    else {
                        var t = Math.floor(100 * Math.random() + 1),
                            e = 0;
                        this.judgeIsHaveNew() || this.isHaveOtherClothes() ? t <= 30 ? e = 0 : t > 30 && t <= 40 ? e = 1 : t > 40 && t <= 45 ? e = 2 : t > 45 && t <= 75 ? e = 3 : t > 75 && t <= 80 ? e = 4 : t > 80 && t <= 95 ? e = 5 : t > 95 && (e = 6) : t <= 40 ? e = 3 : t > 40 && t <= 50 ? e = 4 : t > 50 && t <= 90 ? e = 5 : t > 90 && (e = 6);
                        switch (this.rewardNumber = e, e) {
                            case 0:
                                if (this.judgeIsHaveNew() && this.isHaveOtherClothes()) 0 == Math.floor(2 * Math.random() + 0) ? this.ChoiceWhatIndex(1) : this.ChoiceOtherClothesIndex(1);
                                else this.judgeIsHaveNew() ? this.ChoiceWhatIndex(1) : this.isHaveOtherClothes() && this.ChoiceOtherClothesIndex(1);
                                break;
                            case 1:
                                if (this.judgeIsHaveNew() && this.isHaveOtherClothes()) 0 == Math.floor(2 * Math.random() + 0) ? this.ChoiceWhatIndex(2) : this.ChoiceOtherClothesIndex(2);
                                else this.judgeIsHaveNew() ? this.ChoiceWhatIndex(2) : this.isHaveOtherClothes() && this.ChoiceOtherClothesIndex(2);
                                break;
                            case 2:
                                if (this.judgeIsHaveNew() && this.isHaveOtherClothes()) 0 == Math.floor(2 * Math.random() + 0) ? this.ChoiceWhatIndex(3) : this.ChoiceOtherClothesIndex(2);
                                else this.judgeIsHaveNew() ? this.ChoiceWhatIndex(3) : this.isHaveOtherClothes() && this.ChoiceOtherClothesIndex(2);
                                break;
                            case 3:
                                this.goldCoinNum = .1 * a.default.getInstance().secGoldCoinNum * 60 * 60, this.ShowRewardUI(1, 0, 0);
                                break;
                            case 4:
                                this.goldCoinNum = .3 * a.default.getInstance().secGoldCoinNum * 60 * 60, this.ShowRewardUI(1, 0, 0);
                                break;
                            case 5:
                                this.diamondsNum = 15, this.ShowRewardUI(2, 0, 0);
                                break;
                            case 6:
                                this.diamondsNum = 60, this.ShowRewardUI(2, 0, 0)
                        }
                    }
                    a.default.getInstance().missionType[1]++, h.default.getInstance().isTeachOver ? (h.default.getInstance().isTeachSucc[1] = !0, h.default.getInstance().SaveTeachData()) : h.default.getInstance().SetGameTeachOver(), this.CheckLuckDrawNumber()
                }, e.prototype.ChoiceWhatIndex = function(t) {
                    var e = Math.floor(2 * Math.random() + 1),
                        i = null,
                        n = !1;
                    if (1 == t) {
                        for (var o = !1, c = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14], r = 0; r < c.length; r++)
                            if (-1 == a.default.getInstance().specialLevels[c[r]]) {
                                o = !0;
                                break
                            } if (!o) return
                    } else if (2 == t) {
                        o = !1, c = [0, 1, 2, 3, 4, 15, 16, 17, 18, 19];
                        for (var l = 0; l < c.length; l++)
                            if (-1 == a.default.getInstance().specialLevels[c[l]]) {
                                o = !0;
                                break
                            } if (!o) return
                    } else if (3 == t) {
                        o = !1, c = [20, 21, 22, 23, 24, 25];
                        for (var h = 0; h < c.length; h++)
                            if (-1 == a.default.getInstance().specialLevels[c[h]]) {
                                o = !0;
                                break
                            } if (!o) return
                    }
                    if (1 == e) {
                        1 == t ? i = [5, 6, 7, 8, 9] : 2 == t ? i = [0, 1, 2, 3, 4] : 3 == t && (i = [20, 21, 22]);
                        for (var d = 0; d < i.length; d++)
                            if (-1 == a.default.getInstance().specialLevels[i[d]]) {
                                n = !0;
                                break
                            } n || (1 == t ? i = [10, 11, 12, 13, 14] : 2 == t ? i = [15, 16, 17, 18, 19] : 3 == t && (i = [23, 24, 25]))
                    } else {
                        1 == t ? i = [10, 11, 12, 13, 14] : 2 == t ? i = [15, 16, 17, 18, 19] : 3 == t && (i = [23, 24, 25]);
                        for (var p = 0; p < i.length; p++)
                            if (-1 == a.default.getInstance().specialLevels[i[p]]) {
                                n = !0;
                                break
                            } n || (1 == t ? i = [5, 6, 7, 8, 9] : 2 == t ? i = [0, 1, 2, 3, 4] : 3 == t && (i = [20, 21, 22]))
                    }
                    var g = !1,
                        f = Math.floor(Math.random() * (i.length - 0) + 0);
                    do {
                        g = !1, f = Math.floor(Math.random() * (i.length - 0) + 0), -1 != a.default.getInstance().specialLevels[i[f]] && (g = !0)
                    } while (g);
                    this.jiangli.getChildByName("di04").getChildByName("qua").getComponent(cc.Sprite).spriteFrame = this.exahcne.getComponent(u.default).clothesFrame[t - 1], this.mainUI.getComponent(s.default).BuildSpecialOneItem(i[f]), this.ShowRewardUI(3, 0, i[f])
                }, e.prototype.ChoiceOtherClothesIndex = function(t) {
                    var e = [],
                        i = 0;
                    if (1 == t) {
                        e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
                        for (var n = !1, o = 0; o < 20; o++)
                            if (0 == a.default.getInstance().luckClothes[e[o]]) {
                                n = !0;
                                break
                            } if (!n) return void this.ChoiceOtherClothesIndex(2);
                        var c = !1;
                        i = 0;
                        do {
                            c = !1, i = Math.floor(20 * Math.random() + 0), 0 != a.default.getInstance().luckClothes[i] && (c = !0)
                        } while (c);
                        a.default.getInstance().luckClothes[i] = 1, i >= 0 && i < 5 ? (f.default.getInstance().SetGrilMod(0, i + 30), this.mainUI.getComponent(s.default).BuildOneItem(0, !0, i + 30), this.ShowRewardUI(4, 0, i + 30)) : i >= 5 && i < 10 ? (f.default.getInstance().SetGrilMod(3, i + 25), this.mainUI.getComponent(s.default).BuildOneItem(3, !0, i + 25), this.ShowRewardUI(4, 1, i + 25)) : i >= 10 && i < 15 ? (f.default.getInstance().SetGrilMod(3, i + 20), this.mainUI.getComponent(s.default).BuildOneItem(3, !0, i + 20), this.ShowRewardUI(4, 3, i + 20)) : i >= 15 && i < 20 && (f.default.getInstance().SetGrilMod(4, i + 15), this.mainUI.getComponent(s.default).BuildOneItem(4, !0, i + 15), this.ShowRewardUI(4, 4, i + 15))
                    } else {
                        var r = !1;
                        e = [20, 21, 22, 23, 24];
                        for (o = 0; o < 5; o++)
                            if (0 == a.default.getInstance().luckClothes[e[o]]) {
                                r = !0;
                                break
                            } if (!r) return void this.ChoiceOtherClothesIndex(1);
                        c = !1;
                        i = 0;
                        do {
                            c = !1, i = Math.floor(5 * Math.random() + 0), 0 != a.default.getInstance().luckClothes[e[i]] && (c = !0)
                        } while (c);
                        a.default.getInstance().luckClothes[e[i]] = 1, f.default.getInstance().SetGrilMod(2, e[i] + 10), this.mainUI.getComponent(s.default).BuildOneItem(2, !0, e[i] + 10), this.ShowRewardUI(4, 2, e[i] + 10)
                    }
                }, e.prototype.isHaveOtherClothes = function() {
                    for (var t = !1, e = 0; e < a.default.getInstance().luckClothes.length; e++)
                        if (0 == a.default.getInstance().luckClothes[e]) {
                            t = !0;
                            break
                        } return t
                }, e.prototype.ShowRewardUI = function(t, e, i) {
                    if (this.jiangli.getChildByName("di04").getChildByName("lixian03").active = !1, this.jiangli.getChildByName("di04").getChildByName("lixian04").active = !1, this.jiangli.getChildByName("di04").getChildByName("lixian05").active = !1, 1 == t)(n = this.jiangli.getChildByName("di04").getChildByName("lixian03")).active = !0, (o = this.jiangli.getChildByName("di04").getChildByName("main03").getChildByName("Label").getComponent(cc.Label)).node.active = !0, o.string = "+" + l.default.getInstance().RetainInt(this.goldCoinNum, 2), this.effect.color = new cc.Color(126, 211, 251), this.currentindex = 7;
                    else if (2 == t) {
                        (n = this.jiangli.getChildByName("di04").getChildByName("lixian04")).active = !0, (o = this.jiangli.getChildByName("di04").getChildByName("main03").getChildByName("Label").getComponent(cc.Label)).node.active = !0, o.string = "+" + this.diamondsNum.toString(), this.effect.color = new cc.Color(178, 108, 253), this.currentindex = 6
                    } else if (3 == t) {
                        (n = this.jiangli.getChildByName("di04").getChildByName("lixian05")).getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(c.default.getInstance().iconSpecials[i]), n.active = !0, (o = this.jiangli.getChildByName("di04").getChildByName("main03").getChildByName("Label").getComponent(cc.Label)).node.active = !0, o.string = "+ 1", this.effect.color = new cc.Color(236, 250, 5), this.currentindex = 5, this.jiangli.getChildByName("di04").getChildByName("qua").active = !0
                    } else if (4 == t) {
                        var n, o;
                        (n = this.jiangli.getChildByName("di04").getChildByName("lixian05")).active = !0, (o = this.jiangli.getChildByName("di04").getChildByName("main03").getChildByName("Label").getComponent(cc.Label)).node.active = !0, o.string = "+ 1", this.effect.color = new cc.Color(236, 250, 5), this.jiangli.getChildByName("di04").getChildByName("qua").active = !0, 0 == e ? (n.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(c.default.getInstance().iconHairs[i]), this.currentindex = 0, this.jiangli.getChildByName("di04").getChildByName("qua").getComponent(cc.Sprite).spriteFrame = this.exahcne.getComponent(u.default).clothesFrame[1]) : 1 == e ? (n.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(c.default.getInstance().iconOrnaments[i]), this.currentindex = 1, this.jiangli.getChildByName("di04").getChildByName("qua").getComponent(cc.Sprite).spriteFrame = this.exahcne.getComponent(u.default).clothesFrame[1]) : 2 == e ? (n.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(c.default.getInstance().iconClothes[i]), this.currentindex = 2, this.jiangli.getChildByName("di04").getChildByName("qua").getComponent(cc.Sprite).spriteFrame = this.exahcne.getComponent(u.default).clothesFrame[2]) : 3 == e ? (n.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(c.default.getInstance().iconBags[i]), this.currentindex = 3, this.jiangli.getChildByName("di04").getChildByName("qua").getComponent(cc.Sprite).spriteFrame = this.exahcne.getComponent(u.default).clothesFrame[1]) : 4 == e && (n.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(c.default.getInstance().iconShoes[i]), this.currentindex = 4, this.jiangli.getChildByName("di04").getChildByName("qua").getComponent(cc.Sprite).spriteFrame = this.exahcne.getComponent(u.default).clothesFrame[1])
                    }
                }, e.prototype.ShowRewardSpecial = function(t) {
                    this.jiangli.getChildByName("di04").getChildByName("lixian03").active = !1, this.jiangli.getChildByName("di04").getChildByName("lixian04").active = !1;
                    var e = this.jiangli.getChildByName("di04").getChildByName("lixian05");
                    e.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(c.default.getInstance().iconSpecials[t]), e.active = !0;
                    var i = this.jiangli.getChildByName("di04").getChildByName("main03").getChildByName("Label").getComponent(cc.Label);
                    i.node.active = !0, i.string = "+ 1", this.effect.color = new cc.Color(236, 250, 5), this.jiangli.getChildByName("Button2").active = !0, this.jiangli.active = !0, this.jiangli.setScale(0), cc.tween(this.jiangli).to(.25, {
                        scale: 1.25
                    }).to(.1, {
                        scale: 1
                    }).start()
                }, e.prototype.judgeIsHaveNew = function() {
                    for (var t = !1, e = 0; e < 26; e++)
                        if (-1 == a.default.getInstance().specialLevels[e]) {
                            t = !0;
                            break
                        } return t
                }, e.prototype.GetReward = function() {
                    this.jiangli.active = !1, this.jiangli.getChildByName("di04").getChildByName("qua").active = !1, r.default.getInstance().PlayBtAudio(16), this.exahcne.active || (3 == this.rewardNumber ? a.default.getInstance().setGoldCoinNum(a.default.getInstance().getGoldCoinNum() + .1 * a.default.getInstance().secGoldCoinNum * 60 * 60) : 4 == this.rewardNumber ? a.default.getInstance().setGoldCoinNum(a.default.getInstance().getGoldCoinNum() + .4 * a.default.getInstance().secGoldCoinNum * 60 * 60) : 5 == this.rewardNumber ? a.default.getInstance().setDiamondsnNum(a.default.getInstance().getDiamondsNum() + 15) : 6 == this.rewardNumber && a.default.getInstance().setDiamondsnNum(a.default.getInstance().getDiamondsNum() + 60), this.currentindex <= 4 && g.default.getInstance().CheckSpecialClothes(this.currentindex))
                }, e.prototype.CheckLuckDrawNumber = function() {
                    a.default.getInstance().invitationNum >= 3 && (a.default.getInstance().invitationNum = 0, a.default.getInstance().luckNum += 1), this.luckRoot.getChildByName("main03").getChildByName("Label").getComponent(cc.Label).string = "Số lần Free " + a.default.getInstance().luckNum + "/2", this.luckRoot.getChildByName("moive").active = !1, a.default.getInstance().luckNum <= 0 && (this.luckRoot.getChildByName("main03").active = !1, this.luckRoot.getChildByName("main04").active = !0, this.luckRoot.getChildByName("moive").active = !0), this.invit.getComponent(cc.Label).string = "Tích lũy:" + a.default.getInstance().invitationNum + "/3", a.default.getInstance().saveData()
                }, e.prototype.onClickInvita = function() {
                    this.isShared = !0, this.closeTime = (new Date).getTime(), qq.shareAppMessage({
                        title: "Hãy đến xem buổi trình diễn trang phục của cô gái hàng xóm!",
                        imageUrl: "share.jpg",
                        query: null
                    })
                }, e.prototype.MustGetRareClothes = function() {
                    if (this.judgeIsHaveNew() && this.isHaveOtherClothes()) {
                        var t = Math.floor(3 * Math.random() + 0);
                        if (this.rewardNumber = t, 0 == t)
                            if (this.judgeIsHaveNew() && this.isHaveOtherClothes()) 0 == Math.floor(2 * Math.random() + 0) ? this.ChoiceWhatIndex(1) : this.ChoiceOtherClothesIndex(1);
                            else this.judgeIsHaveNew() ? this.ChoiceWhatIndex(1) : this.isHaveOtherClothes() && this.ChoiceOtherClothesIndex(1);
                        else if (1 == t) {
                            if (this.judgeIsHaveNew() && this.isHaveOtherClothes()) 0 == Math.floor(2 * Math.random() + 0) ? this.ChoiceWhatIndex(2) : this.ChoiceOtherClothesIndex(2);
                            else this.judgeIsHaveNew() ? this.ChoiceWhatIndex(2) : this.isHaveOtherClothes() && this.ChoiceOtherClothesIndex(2)
                        } else if (2 == t) {
                            if (this.judgeIsHaveNew() && this.isHaveOtherClothes()) 0 == Math.floor(2 * Math.random() + 0) ? this.ChoiceWhatIndex(3) : this.ChoiceOtherClothesIndex(2);
                            else this.judgeIsHaveNew() ? this.ChoiceWhatIndex(3) : this.isHaveOtherClothes() && this.ChoiceOtherClothesIndex(2)
                        }
                    } else this.rewardNumber = 5, this.diamondsNum = 15, this.ShowRewardUI(2, 0, 0)
                }, o([y(cc.Node)], e.prototype, "mainUI", void 0), o([y(cc.Node)], e.prototype, "make", void 0), o([y(cc.Node)], e.prototype, "jiangli", void 0), o([y(cc.Node)], e.prototype, "red", void 0), o([y(cc.Label)], e.prototype, "goldCoinStr", void 0), o([y(cc.Label)], e.prototype, "diamondsStr", void 0), o([y(cc.Node)], e.prototype, "effect", void 0), o([y(cc.Node)], e.prototype, "exahcne", void 0), o([y(cc.Node)], e.prototype, "luckRoot", void 0), o([y(cc.Node)], e.prototype, "invit", void 0), o([y([cc.Node])], e.prototype, "units", void 0), o([y([cc.Node])], e.prototype, "luckNode", void 0), e = o([v], e)
            }(cc.Component);
        i.default = C, cc._RF.pop()
    }, {
        "./AdsMananger": "AdsMananger",
        "./AssetsManager": "AssetsManager",
        "./AudioManager": "AudioManager",
        "./Exchange": "Exchange",
        "./GameLocalData": "GameLocalData",
        "./GameManger": "GameManger",
        "./GameTeaching": "GameTeaching",
        "./GrilController": "GrilController",
        "./MainUI": "MainUI",
        "./StorySet": "StorySet",
        "./make/Make": "Make"
    }],
    MainUI: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "ae3494OlBNAn7sbzxL8fbDA", "MainUI");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./CharacterInfo"),
            s = t("./PartsRoot"),
            c = t("./GameLocalData"),
            r = t("./GameManger"),
            l = t("./make/Make"),
            h = t("./AssetsManager"),
            u = t("./GrilController"),
            d = t("./ButtonSet"),
            p = t("./MissionSet"),
            g = t("./AudioManager"),
            f = t("./LuckDraw"),
            m = t("./GameTeaching"),
            v = t("./StorySet"),
            y = t("./GradeSetting"),
            C = t("./Exchange"),
            I = t("./AdsMananger"),
            S = t("./Achievement"),
            N = cc._decorator,
            L = N.ccclass,
            B = N.property,
            k = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.partsRootNode = null, e.touchNode = null, e.gamePlay = null, e.grade = null, e.mission = null, e.coinLabel = null, e.secCoinLabel = null, e.diamondsLabel = null, e.roomItem = null, e.makeUi = null, e.unclockUI = null, e.exchange = null, e.tipsSpe = null, e.luck = null, e.setUI = null, e.offLineUI = null, e.levelSp = null, e.recordIcon = null, e.luzhifenxiang = null, e.PinfenRecord = null, e.girl = null, e.lateToggle = [], e.recordSprite = [], e.levelSpriteFrame = [], e.units = [], e.rooms = [], e.roomBts = [], e.roomBtRoot = null, e.compangNode = null, e.storyNode = null, e.recorder = null, e.isShared = !1, e.shareTag = "", e.closeTime = null, e.shareTs = 0, e.clickTag = 0, e.countSec = 0, e.rewardNum = 0, e.dimondsAmount = 0, e.offlineCoin = 0, e.gradeLevel = 0, e.videoPath = "", e.recordTs = 0, e.newNum = 0, e.is_record = !1, e.record_time = 0, e.isLuzhi = !1, e.isTriggerVideo = !1, e.isLoadAss = !1, e.isOffLine = !1, e.isShowBegan = !1, e.clipIndexList = [], e
                }
                return n(e, t), e.prototype.onLoad = function() {
                    this.refsh()
                }, e.prototype.start = function() {
                    this.roomBtRoot = this.partsRootNode.getComponent(d.default), this.touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchBegin, this, !0), this.touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this, !0), this.touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, !0), this.touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this, !0), this.makeUi.getComponent(l.default).requestSecCoinNum(), this.gradeLevel = c.default.getInstance().grade, this.levelSp.spriteFrame = this.levelSpriteFrame[this.gradeLevel - 1], this.compangNode = this.node.getChildByName("Button").getChildByName(" Button8"), this.storyNode = this.node.getChildByName("Button").getChildByName(" Button9"), this.isOffLine || 1 != c.default.getInstance().isOffLine || (this.scheduleOnce(this.OPenOffLine, 1), this.isOffLine = !0)
                }, e.prototype.update = function(t) {
                    if (this.countSec += t, this.countSec >= 1) {
                        this.countSec = 0;
                        var e = this.makeUi.getComponent(l.default);
                        c.default.getInstance().secGoldCoinNum = e.secCoinPrice, c.default.getInstance().setGoldCoinNum(c.default.getInstance().getGoldCoinNum() + e.secCoinPrice), this.refsh(), this.flashingEffe(this.coinLabel.node), this.makeUi.getComponent(l.default).CheckCanBuyType()
                    }
                    if (this.dimondsAmount != c.default.getInstance().getDiamondsNum()) {
                        this.dimondsAmount = c.default.getInstance().getDiamondsNum();
                        for (var i = this.diamondsLabel.node, n = 0, o = this.dimondsAmount; o >= 1e4;) n += 1, o /= 1e4;
                        i.children.forEach(function(t) {
                            t.active = !1
                        }), 1 == n ? i.getChildByName("wan").active = !0 : 2 == n ? i.getChildByName("yi").active = !0 : 3 == n ? i.getChildByName("zhao").active = !0 : 4 == n && (i.getChildByName("wanzhao").active = !0), i.getComponent(cc.Label).string = r.default.getInstance().RetainNoIntStr(o, 1).toString()
                    }!this.isLoadAss && h.default.getInstance().isLoadOver && (this.isLoadAss = !0, this.BuildAllRoomItem(), this.BuildClothesFrame()), this.mission && this.mission.CheckMissionReach(), this.gradeLevel != c.default.getInstance().grade && (this.gradeLevel = c.default.getInstance().grade, this.levelSp.spriteFrame = this.grade.getComponent(y.default).levelTexture[this.gradeLevel - 1]), this.luck.getComponent(f.default).RefreshRed()
                }, e.prototype.flashingEffe = function(t) {
                    cc.tween(t).to(.2, {
                        scale: 1.4
                    }).to(.2, {
                        scale: 1
                    }).repeatForever().start()
                }, e.prototype.refsh = function() {
                    if (this.coinLabel) {
                        for (var t = 0, e = c.default.getInstance().getGoldCoinNum(), i = e; e >= 1e4;) e /= 1e4, t += 1;
                        this.coinLabel.string = r.default.getInstance().RetainNoIntStr(i, 1) + "";
                        for (var n = 0; n < this.units.length; n++) this.units[n].active = !1;
                        if (t > 0 && t <= this.units.length) this.units[t - 1].getComponent(cc.Widget).updateAlignment(), this.units[t - 1].active = !0
                    }
                    if (this.secCoinLabel) {
                        var o = this.makeUi.getComponent(l.default);
                        this.secCoinLabel.string = r.default.getInstance().RetainInt(o.secCoinPrice, 1) + ""
                    }
                }, e.prototype.clickPartsBtn = function(t, e) {
                    var i = parseInt(e);
                    switch (this.roomBtRoot.SetButtonState(i), this.clickTag = i, this.moveInPartsRoot(), this.ShowRoom(i), i) {
                        case a.default.Cha_Hair:
                        case a.default.Cha_Ornament:
                        case a.default.Cha_Clothes:
                        case a.default.Cha_Bag:
                        case a.default.Cha_Shoes:
                        case a.default.Cha_Special:
                    }
                    m.default.getInstance().isTeachOver || (m.default.getInstance().isTeach = !0, m.default.getInstance().teachGrade += 1)
                }, e.prototype.clickRoomIcon = function(t, e) {
                    var i = parseInt(e);
                    g.default.getInstance().PlayBtAudio(11), u.default.getInstance().SetGrilMod(this.clickTag, i);
                    var n = t.target,
                        o = n.getComponent(cc.Button);
                    if (5 == this.clickTag) {
                        var a = parseInt(i.toString()[1]);
                        0 == a ? n.parent.children.forEach(function(t) {
                            if (t != n) {
                                var e = t.getComponent(cc.Button),
                                    i = parseInt(e.clickEvents[0].customEventData),
                                    o = 0;
                                if ((o = void 0 != i.toString()[3] ? parseInt(i.toString()[2] + i.toString()[3]) : parseInt(i.toString()[2])) >= 0 && o < 5) t.getChildByName("gou").active = !1
                            }
                        }) : 1 == a ? n.parent.children.forEach(function(t) {
                            if (t != n) {
                                var e = t.getComponent(cc.Button),
                                    i = parseInt(e.clickEvents[0].customEventData),
                                    o = 0;
                                if ((o = void 0 != i.toString()[3] ? parseInt(i.toString()[2] + i.toString()[3]) : parseInt(i.toString()[2])) >= 5 && o < 10) t.getChildByName("gou").active = !1
                            }
                        }) : 2 == a ? n.parent.children.forEach(function(t) {
                            if (t != n) {
                                var e = t.getComponent(cc.Button),
                                    i = parseInt(e.clickEvents[0].customEventData),
                                    o = 0;
                                if ((o = void 0 != i.toString()[3] ? parseInt(i.toString()[2] + i.toString()[3]) : parseInt(i.toString()[2])) >= 10 && o < 15) t.getChildByName("gou").active = !1
                            }
                        }) : 3 == a ? n.parent.children.forEach(function(t) {
                            if (t != n) {
                                var e = t.getComponent(cc.Button),
                                    i = parseInt(e.clickEvents[0].customEventData),
                                    o = 0;
                                if ((o = void 0 != i.toString()[3] ? parseInt(i.toString()[2] + i.toString()[3]) : parseInt(i.toString()[2])) >= 15 && o < 20) t.getChildByName("gou").active = !1
                            }
                        }) : 4 == a ? n.parent.children.forEach(function(t) {
                            if (t != n) {
                                var e = t.getComponent(cc.Button),
                                    i = parseInt(e.clickEvents[0].customEventData),
                                    o = 0;
                                if ((o = void 0 != i.toString()[3] ? parseInt(i.toString()[2] + i.toString()[3]) : parseInt(i.toString()[2])) >= 20 && o < 23) t.getChildByName("gou").active = !1
                            }
                        }) : 5 == a && n.parent.children.forEach(function(t) {
                            if (t != n) {
                                var e = t.getComponent(cc.Button),
                                    i = parseInt(e.clickEvents[0].customEventData),
                                    o = 0;
                                if ((o = void 0 != i.toString()[3] ? parseInt(i.toString()[2] + i.toString()[3]) : parseInt(i.toString()[2])) >= 23 && o < 26) t.getChildByName("gou").active = !1
                            }
                        });
                        var s = n.getChildByName("gou");
                        s.active ? s.active = !1 : s.active = !0
                    } else this.CheckClothesIsNew(o.node, !0);
                    m.default.getInstance().isTeachOver || (m.default.getInstance().SetGameTeachOver(), v.default.getInstance().ShowTipStartGame())
                }, e.prototype.moveInPartsRoot = function() {
                    this.partsRootNode.getComponent(s.default).moveIn(194, .2), this.gamePlay.getComponent(s.default).moveIn(120, .3), this.compangNode.active = !1, this.storyNode.active = !1
                }, e.prototype.PoppedUpComposeUI = function() {
                    if (!this.isShowBegan && 1 == c.default.getInstance().isOffLine && r.default.getInstance().isCurrentMain && (this.isShowBegan = !0, this.clickMakeBtn(null, null), m.default.getInstance().BeganGameGuide()), 0 == c.default.getInstance().isOffLine && c.default.getInstance().secGoldCoinNum > 0) {
                        c.default.getInstance().isOffLine = 1;
                        var t = new Date,
                            e = [t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds()];
                        c.default.getInstance().SetOffLineTime(e)
                    }
                }, e.prototype.CheckClothesIsNew = function(t, e) {
                    var i = t.parent;
                    e && (t.getChildByName("room05").active = !1);
                    if (i.children.forEach(function(t) {
                            t.getChildByName("gou").active = !1
                        }), e) {
                        var n = !1;
                        i.children.forEach(function(t) {
                            t.getChildByName("room05").active && (n = !0)
                        }), n || (this.roomBts[this.clickTag].active = !1)
                    }
                    t.getChildByName("gou").active = !0
                }, e.prototype.BuildAllRoomItem = function() {
                    for (var t = 0; t < 6; t++) {
                        var e = this.rooms[t].getChildByName("New ScrollView").getChildByName("view").getChildByName("content"),
                            i = null,
                            n = 0;
                        0 == t ? i = c.default.getInstance().hairLevels : 1 == t ? i = c.default.getInstance().ornamentLevels : 2 == t ? i = c.default.getInstance().clothesLevels : 3 == t ? i = c.default.getInstance().bagLevels : 4 == t ? i = c.default.getInstance().shoesLevels : 5 == t && (i = c.default.getInstance().specialLevels);
                        for (var o = 0; o < i.length; o++)
                            if (5 == t) {
                                if (-1 != i[o]) {
                                    var a = cc.instantiate(this.roomItem);
                                    e.addChild(a), n++
                                }
                            } else if (0 != i[o]) {
                            var s = cc.instantiate(this.roomItem);
                            e.addChild(s), n++
                        }
                        var r = cc.instantiate(this.roomItem);
                        e.addChild(r), n++, e.setContentSize(new cc.Size(194, 165.2 * n + 50))
                    }
                }, e.prototype.BuildClothesFrame = function() {
                    var t = this,
                        e = cc.delayTime(2),
                        i = cc.callFunc(function() {
                            for (var e = 0; e < 6; e++) {
                                var i = t.rooms[e].getChildByName("New ScrollView").getChildByName("view").getChildByName("content"),
                                    n = null;
                                if (0 == e ? n = c.default.getInstance().hairLevels : 1 == e ? n = c.default.getInstance().ornamentLevels : 2 == e ? n = c.default.getInstance().clothesLevels : 3 == e ? n = c.default.getInstance().bagLevels : 4 == e ? n = c.default.getInstance().shoesLevels : 5 == e && (n = c.default.getInstance().specialLevels), 5 == e) {
                                    for (var o = 0, a = 0; a < n.length; a++)
                                        if (-1 != n[a]) {
                                            (d = (l = i.children[o]).getChildByName("room04").getComponent(cc.Sprite)).spriteFrame = new cc.SpriteFrame(h.default.getInstance().iconSpecials[c.default.getInstance().specialLevels[a]]), o++, (p = l.getChildByName("quality")).active = !0;
                                            var s = t.exchange.getComponent(C.default);
                                            n[a] >= 0 && n[a] < 5 || n[a] >= 10 && n[a] < 15 ? p.getComponent(cc.Sprite).spriteFrame = s.clothesFrame[0] : n[a] >= 5 && n[a] < 10 || n[a] >= 15 && n[a] < 23 ? p.getComponent(cc.Sprite).spriteFrame = s.clothesFrame[1] : p.getComponent(cc.Sprite).spriteFrame = s.clothesFrame[2], (g = new cc.Component.EventHandler).target = t.node, g.component = "MainUI", g.handler = "clickRoomIcon";
                                            var r = n[a];
                                            r >= 0 && r < 5 ? (g.customEventData = "10" + r.toString(), t.girl.getComponent(u.default).specailwear[0] == parseInt(g.customEventData) && (l.getChildByName("gou").active = !0)) : r >= 5 && r < 10 ? (g.customEventData = "11" + r.toString(), t.girl.getComponent(u.default).specailwear[1] == parseInt(g.customEventData) && (l.getChildByName("gou").active = !0)) : r >= 10 && r < 15 ? (g.customEventData = "12" + r.toString(), t.girl.getComponent(u.default).specailwear[2] == parseInt(g.customEventData) && (l.getChildByName("gou").active = !0)) : r >= 15 && r < 20 ? (g.customEventData = "13" + r.toString(), t.girl.getComponent(u.default).specailwear[3] == parseInt(g.customEventData) && (l.getChildByName("gou").active = !0)) : r >= 20 && r < 23 ? (g.customEventData = "14" + r.toString(), t.girl.getComponent(u.default).specailwear[4] == parseInt(g.customEventData) && (l.getChildByName("gou").active = !0)) : r >= 23 && r < 26 && (g.customEventData = "15" + r.toString(), t.girl.getComponent(u.default).specailwear[5] == parseInt(g.customEventData) && (l.getChildByName("gou").active = !0)), l.getComponent(cc.Button).clickEvents.push(g)
                                        } else if (a == n.length - 1) {
                                        var l = i.children[o];
                                        (g = new cc.Component.EventHandler).target = t.node, g.component = "MainUI", g.handler = "ShowTipLuck", l.getComponent(cc.Button).clickEvents.push(g)
                                    }
                                } else
                                    for (o = 0, a = 0; a < n.length; a++)
                                        if (0 != n[a]) {
                                            var d = (l = i.children[o]).getChildByName("room04").getComponent(cc.Sprite);
                                            o++;
                                            var p = l.getChildByName("quality");
                                            s = t.exchange.getComponent(C.default);
                                            n[a] >= 30 && (p.active = !0, p.getComponent(cc.Sprite).spriteFrame = s.clothesFrame[2]), 0 == e ? d.spriteFrame = new cc.SpriteFrame(h.default.getInstance().iconHairs[n[a] - 1]) : 1 == e ? d.spriteFrame = new cc.SpriteFrame(h.default.getInstance().iconOrnaments[n[a] - 1]) : 2 == e ? d.spriteFrame = new cc.SpriteFrame(h.default.getInstance().iconClothes[n[a] - 1]) : 3 == e ? d.spriteFrame = new cc.SpriteFrame(h.default.getInstance().iconBags[n[a] - 1]) : 4 == e && (d.spriteFrame = new cc.SpriteFrame(h.default.getInstance().iconShoes[n[a] - 1])), t.girl.getComponent(u.default).wear[e] == n[a] - 1 && (l.getChildByName("gou").active = !0), (g = new cc.Component.EventHandler).target = t.node, g.component = "MainUI", g.handler = "clickRoomIcon", g.customEventData = a.toString(), l.getComponent(cc.Button).clickEvents.push(g)
                                        } else if (a == n.length - 1) {
                                    var g;
                                    l = i.children[o];
                                    (g = new cc.Component.EventHandler).target = t.node, g.component = "MainUI", g.handler = "TipIntoCompane", g.customEventData = e + "", l.getComponent(cc.Button).clickEvents.push(g)
                                }
                            }
                        });
                    this.node.runAction(cc.sequence(e, i, null))
                }, e.prototype.BuildOneItem = function(t, e, i) {
                    var n = this.rooms[t].getChildByName("New ScrollView").getChildByName("view").getChildByName("content"),
                        o = n.children[n.childrenCount - 1].getChildByName("room04").getComponent(cc.Sprite),
                        a = this.unclockUI.getChildByName("jiesuo01").getChildByName("cloth_001").getComponent(cc.Sprite);
                    n.children[n.childrenCount - 1].getChildByName("room05").active = !0, a.node.setScale(2), 0 == t ? (o.spriteFrame = new cc.SpriteFrame(h.default.getInstance().iconHairs[i]), a.spriteFrame = new cc.SpriteFrame(h.default.getInstance().iconHairs[i])) : 1 == t ? (o.spriteFrame = new cc.SpriteFrame(h.default.getInstance().iconOrnaments[i]), a.spriteFrame = new cc.SpriteFrame(h.default.getInstance().iconOrnaments[i])) : 2 == t ? (o.spriteFrame = new cc.SpriteFrame(h.default.getInstance().iconClothes[i]), a.spriteFrame = new cc.SpriteFrame(h.default.getInstance().iconClothes[i])) : 3 == t ? (o.spriteFrame = new cc.SpriteFrame(h.default.getInstance().iconBags[i]), a.spriteFrame = new cc.SpriteFrame(h.default.getInstance().iconBags[i])) : 4 == t && (o.spriteFrame = new cc.SpriteFrame(h.default.getInstance().iconShoes[i]), a.spriteFrame = new cc.SpriteFrame(h.default.getInstance().iconShoes[i])), this.roomBts[t].active = !0;
                    var s = cc.instantiate(this.roomItem);
                    n.addChild(s);
                    var r = new cc.Component.EventHandler;
                    r.target = this.node, r.component = "MainUI", r.handler = "clickRoomIcon", r.customEventData = i.toString();
                    var l = n.children[n.childrenCount - 2].getComponent(cc.Button);
                    l.clickEvents.length > 0 ? l.clickEvents[0] = r : l.clickEvents.push(r), this.BuildCompaneTip(n, t), this.CheckClothesIsNew(l.node, !1), n.setContentSize(new cc.Size(194, 165.2 * n.childrenCount + 50));
                    var u = 0;
                    u = e ? i : c.default.getInstance().getPartsHighestLevs(t), 0 == t ? c.default.getInstance().hairLevels[u] = u + 1 : 1 == t ? c.default.getInstance().ornamentLevels[u] = u + 1 : 2 == t ? c.default.getInstance().clothesLevels[u] = u + 1 : 3 == t ? c.default.getInstance().bagLevels[u] = u + 1 : 4 == t && (c.default.getInstance().shoesLevels[u] = u + 1), c.default.getInstance().saveData()
                }, e.prototype.BuildSpecialOneItem = function(t) {
                    var e = this.rooms[5].getChildByName("New ScrollView").getChildByName("view").getChildByName("content"),
                        i = e.children[e.childrenCount - 1].getChildByName("room04").getComponent(cc.Sprite),
                        n = this.unclockUI.getChildByName("jiesuo01").getChildByName("cloth_001").getComponent(cc.Sprite);
                    e.children[e.childrenCount - 1].getChildByName("room05").active = !0, n.node.setScale(2), i.spriteFrame = new cc.SpriteFrame(h.default.getInstance().iconSpecials[t]), n.spriteFrame = new cc.SpriteFrame(h.default.getInstance().iconSpecials[t]);
                    var o = e.children[e.childrenCount - 1].getChildByName("quality");
                    o.active = !0, this.roomBts[5].active = !0;
                    var a = cc.instantiate(this.roomItem);
                    e.addChild(a);
                    var s = this.exchange.getComponent(C.default);
                    o.getComponent(cc.Sprite).spriteFrame = t >= 0 && t < 5 || t >= 10 && t < 15 ? s.clothesFrame[0] : t >= 5 && t < 10 || t >= 15 && t < 23 ? s.clothesFrame[1] : s.clothesFrame[2], e.setContentSize(new cc.Size(194, 165.2 * e.childrenCount + 50));
                    var r = new cc.Component.EventHandler;
                    r.target = this.node, r.component = "MainUI", r.handler = "clickRoomIcon", t >= 0 && t < 5 ? r.customEventData = "10" + t.toString() : t >= 5 && t < 10 ? r.customEventData = "11" + t.toString() : t >= 10 && t < 15 ? r.customEventData = "12" + t.toString() : t >= 15 && t < 20 ? r.customEventData = "13" + t.toString() : t >= 20 && t < 23 ? r.customEventData = "14" + t.toString() : t >= 23 && t < 26 && (r.customEventData = "15" + t.toString());
                    var l = e.children[e.childrenCount - 2].getComponent(cc.Button);
                    l.clickEvents.length > 0 ? l.clickEvents[0] = r : l.clickEvents.push(r), this.BuildTip(e), c.default.getInstance().specialLevels[t] = t, c.default.getInstance().saveData()
                }, e.prototype.ShowGameTip = function(t) {
                    this.AllTipsUI(4), this.tipsSpe.getChildByName("di03").getChildByName("tishi4").getChildByName("Label5").getComponent(cc.Label).string = t
                }, e.prototype.ShowTipLuck = function(t) {
                    this.AllTipsUI(1)
                }, e.prototype.IntoLuck = function(t) {
                    this.tipsSpe.active = !1, this.luck.getComponent(f.default).OpenLuckDraw()
                }, e.prototype.CloseTipsLuck = function() {
                    this.tipsSpe.active = !1
                }, e.prototype.AllTipsUI = function(t) {
                    for (var e = 1; e < 5; e++) this.tipsSpe.getChildByName("di03").getChildByName("tishi" + e).active = !1;
                    this.tipsSpe.active = !0, this.tipsSpe.setScale(0), cc.tween(this.tipsSpe).to(.25, {
                        scale: 1.25
                    }).to(.1, {
                        scale: 1
                    }).start(), this.tipsSpe.getChildByName("di03").getChildByName("tishi" + t).active = !0
                }, e.prototype.BuildTip = function(t) {
                    var e = new cc.Component.EventHandler;
                    e.target = this.node, e.component = "MainUI", e.handler = "ShowTipLuck";
                    var i = t.children[t.childrenCount - 1].getComponent(cc.Button);
                    i.clickEvents.length > 0 ? i.clickEvents[0] = e : i.clickEvents.push(e)
                }, e.prototype.BuildCompaneTip = function(t, e) {
                    var i = new cc.Component.EventHandler;
                    i.target = this.node, i.component = "MainUI", i.handler = "TipIntoCompane", i.customEventData = e + "";
                    var n = t.children[t.childrenCount - 1].getComponent(cc.Button);
                    n.clickEvents.length > 0 ? n.clickEvents[0] = i : n.clickEvents.push(i)
                }, e.prototype.TipIntoCompane = function(t, e) {
                    parseInt(e);
                    this.clickMakeBtn(null, null), this.makeUi.getComponent(l.default).clickPartsBtn(null, e)
                }, e.prototype.OPenOffLine = function() {
                    var t = new Date,
                        e = [t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds()],
                        i = c.default.getInstance().GetOffLineTime(),
                        n = 0;
                    if (c.default.getInstance().SetOffLineTime(e), e[0] == i[0] && e[1] == i[1] && e[2] == i[2] || (c.default.getInstance().missionComposeNum = 0, c.default.getInstance().missionWatchNum = 0, c.default.getInstance().isEvetMissionSuc = [0, 0], c.default.getInstance().sports = 5, c.default.getInstance().luckNum = 2), e[1] != i[1] || e[2] - i[2] > 0) n = 3600;
                    else if (e[2] - i[2] >= 1) n = 3600;
                    else {
                        var o = 0;
                        e[5] - i[5] < 0 && (e[2] -= 1, o += e[5] - i[5] + 60), e[4] - i[4] < 0 && (e[3] -= 1, o += 60 * (e[4] - i[4] + 60)), n = 60 * (e[3] - i[3]) * 60 + o
                    }
                    if (n >= 600) {
                        var a = n * c.default.getInstance().secGoldCoinNum;
                        this.offlineCoin = a / 12, this.offLineUI.getChildByName("di04").getChildByName("main03").getChildByName("Label").getComponent(cc.Label).string = "+ " + r.default.getInstance().RetainInt(this.offlineCoin, 2), this.lateToggle[0].isChecked = !0, this.offLineUI.active = !0, this.offLineUI.setScale(0), cc.tween(this.offLineUI).to(.25, {
                            scale: 1.25
                        }).to(.1, {
                            scale: 1
                        }).start()
                    }
                }, e.prototype.CloseOffLineUI = function() {
                    this.offLineUI.active = !1, this.lateToggle[0].isChecked ? this.GetDoubleOffLine() : (g.default.getInstance().PlayBtAudio(3), c.default.getInstance().setGoldCoinNum(c.default.getInstance().getGoldCoinNum() + this.offlineCoin))
                }, e.prototype.GetDoubleOffLine = function() {
                    /* var t = this;
                    g.default.getInstance().PlayBtAudio(3), I.default.GetInstance().ShowRewardVideo(function() {
                        return t.DoubleOffLineSuccess()
						console.log("hhhhyy66");
                    }) */
					this.offLineUI.active = !1, c.default.getInstance().setGoldCoinNum(c.default.getInstance().getGoldCoinNum() + 2 * this.offlineCoin)
					console.log("llii9988");
                }, e.prototype.DoubleOffLineSuccess = function() {
                    this.offLineUI.active = !1, c.default.getInstance().setGoldCoinNum(c.default.getInstance().getGoldCoinNum() + 2 * this.offlineCoin)
                }, e.prototype.ShowRoom = function(t) {
                    g.default.getInstance().PlayBtAudio(3), this.rooms.forEach(function(t) {
                        t.active = !1
                    }), this.rooms[t].active = !0
                }, e.prototype.ShowUnClockNewClothes = function(t) {
                    this.unclockUI.getChildByName("jiesuo01").getChildByName("main03").getChildByName("Label").getComponent(cc.Label).string = Math.floor(2 + 1.3 * c.default.getInstance().getPartsHighestLevs(t)).toString(), this.rewardNum = Math.floor(2 + 1.3 * c.default.getInstance().getPartsHighestLevs(t)), this.newNum++, this.newNum >= 3 && (this.newNum = 0, this.lateToggle[1].isChecked = !0), this.unclockUI.active = !0, this.unclockUI.setScale(0), cc.tween(this.unclockUI).to(.25, {
                        scale: 1.25
                    }).to(.1, {
                        scale: 1
                    }).start();
                    var e = c.default.getInstance().getPartsHighestLevs(t);
                    u.default.getInstance().SetGrilMod(t, e), this.BuildOneItem(t, !1, e), S.default.getInstance().achieveTrigger[2] = !0, m.default.getInstance().isTeachOver || this.scheduleOnce(this.DelayHideNew, 1)
                }, e.prototype.DelayHideNew = function() {
                    this.lateToggle[1].isChecked = !1, this.GetNewClothes()
                }, e.prototype.CloseTips = function() {
                    this.tipsSpe.active = !1
                }, e.prototype.ShowSetScene = function() {
                    g.default.getInstance().PlayBtAudio(3), this.setUI.active = !0, this.setUI.setScale(0), cc.tween(this.setUI).to(.2, {
                        scale: 1.25
                    }).to(.1, {
                        scale: 1
                    }).start(), g.default.getInstance().CheckAudioBt()
                }, e.prototype.CloseSetScene = function() {
                    g.default.getInstance().PlayBtAudio(3), this.setUI.active = !1
                }, e.prototype.GetNewClothes = function() {
                    this.lateToggle[1].isChecked ? this.DoubleReward() : (g.default.getInstance().PlayBtAudio(3), this.unclockUI.active = !1, c.default.getInstance().setDiamondsnNum(c.default.getInstance().getDiamondsNum() + this.rewardNum), m.default.getInstance().isTeachOver && (m.default.getInstance().isTeachSucc[0] || m.default.getInstance().CheckTriggerTeach(2), m.default.getInstance().isTeachSucc[1] || m.default.getInstance().CheckTriggerTeach(1), m.default.getInstance().isTeachSucc[3] || m.default.getInstance().CheckTriggerTeach(3), v.default.getInstance().CheckStoryTrigger()))
                }, e.prototype.DoubleReward = function() {
                    /* var t = this;
                    g.default.getInstance().PlayBtAudio(3), I.default.GetInstance().ShowRewardVideo(function() {
                        return t.DoubleMainScueess()
						console.log("lliiii");
                    }) */
					this.unclockUI.active = !1, c.default.getInstance().setDiamondsnNum(c.default.getInstance().getDiamondsNum() + 2 * this.rewardNum), c.default.getInstance().saveData(), m.default.getInstance().isTeachOver && (m.default.getInstance().isTeachSucc[0] || m.default.getInstance().CheckTriggerTeach(2), m.default.getInstance().isTeachSucc[1] || m.default.getInstance().CheckTriggerTeach(1), m.default.getInstance().isTeachSucc[3] || m.default.getInstance().CheckTriggerTeach(3), v.default.getInstance().CheckStoryTrigger())
					console.log("44rrr");
                }, e.prototype.DoubleMainScueess = function() {
                    this.unclockUI.active = !1, c.default.getInstance().setDiamondsnNum(c.default.getInstance().getDiamondsNum() + 2 * this.rewardNum), c.default.getInstance().saveData(), m.default.getInstance().isTeachOver && (m.default.getInstance().isTeachSucc[0] || m.default.getInstance().CheckTriggerTeach(2), m.default.getInstance().isTeachSucc[1] || m.default.getInstance().CheckTriggerTeach(1), m.default.getInstance().isTeachSucc[3] || m.default.getInstance().CheckTriggerTeach(3), v.default.getInstance().CheckStoryTrigger())
					console.log("llluiitu");
                }, e.prototype.clickMakeBtn = function(t, e) {
                    g.default.getInstance().PlayBtAudio(3);
                    var i = this.makeUi.getComponent(l.default);
                    i.moveIn(), i.gameBtRoot.SetButtonState(i.initIndex), m.default.getInstance().isTeachOver || (m.default.getInstance().isTeach = !0, m.default.getInstance().teachGrade += 1)
                }, e.prototype.onClickTeachIn = function() {
                    var t = this.makeUi.getComponent(l.default);
                    t.moveIn(), t.gameBtRoot.SetButtonState(t.initIndex)
                }, e.prototype.onClickTeachOut = function() {
                    var t = this.makeUi.getComponent(l.default);
                    t.moveOut(), t.gameBtRoot.SetButtonInit()
                }, e.prototype.clickStoryBtn = function(t, e) {}, e.prototype.onTouchBegin = function(t) {
                    this.partsRootNode.getComponent(s.default).moveOut(194, .2), this.gamePlay.getComponent(s.default).moveOut(120, .3), this.roomBtRoot.SetButtonInit(), this.compangNode.active = !0, this.storyNode.active = !0
                }, e.prototype.onTouchMoved = function(t) {}, e.prototype.onTouchEnd = function(t) {}, e.prototype.onTouchCancel = function(t) {}, e.prototype.ChangeStatusBar = function() {
                    this.partsRootNode.getComponent(s.default).moveOut(194, .2), this.gamePlay.getComponent(s.default).moveOut(120, .3), this.roomBtRoot.SetButtonInit(), this.compangNode.active = !0, this.storyNode.active = !0
                }, e.prototype.WxExitGame = function() {
                    var t = new Date,
                        e = [t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds()];
                    c.default.getInstance().SetOffLineTime(e)
                }, e.prototype.TouchShare = function() {}, e.prototype.submitScoreButtonFunc = function(t) {}, e.prototype.record_btn_click = function() {}, e.prototype.SpecialRecord = function() {}, e.prototype.shareVideo = function(t) {
                    this.isShared = !0, this.closeTime = (new Date).getTime()
                }, e.prototype.SpecialShare = function() {}, e.prototype.SetRecordClip = function(t, e) {}, o([B(cc.Node)], e.prototype, "partsRootNode", void 0), o([B(cc.Node)], e.prototype, "touchNode", void 0), o([B(cc.Node)], e.prototype, "gamePlay", void 0), o([B(cc.Node)], e.prototype, "grade", void 0), o([B(p.default)], e.prototype, "mission", void 0), o([B(cc.Label)], e.prototype, "coinLabel", void 0), o([B(cc.Label)], e.prototype, "secCoinLabel", void 0), o([B(cc.Label)], e.prototype, "diamondsLabel", void 0), o([B(cc.Prefab)], e.prototype, "roomItem", void 0), o([B(cc.Node)], e.prototype, "makeUi", void 0), o([B(cc.Node)], e.prototype, "unclockUI", void 0), o([B(cc.Node)], e.prototype, "exchange", void 0), o([B(cc.Node)], e.prototype, "tipsSpe", void 0), o([B(cc.Node)], e.prototype, "luck", void 0), o([B(cc.Node)], e.prototype, "setUI", void 0), o([B(cc.Node)], e.prototype, "offLineUI", void 0), o([B(cc.Sprite)], e.prototype, "levelSp", void 0), o([B(cc.Sprite)], e.prototype, "recordIcon", void 0), o([B(cc.Node)], e.prototype, "luzhifenxiang", void 0), o([B(cc.Node)], e.prototype, "PinfenRecord", void 0), o([B(cc.Node)], e.prototype, "girl", void 0), o([B(cc.Toggle)], e.prototype, "lateToggle", void 0), o([B([cc.SpriteFrame])], e.prototype, "recordSprite", void 0), o([B(cc.SpriteFrame)], e.prototype, "levelSpriteFrame", void 0), o([B([cc.Node])], e.prototype, "units", void 0), o([B([cc.Node])], e.prototype, "rooms", void 0), o([B([cc.Node])], e.prototype, "roomBts", void 0), e = o([L], e)
            }(cc.Component);
        i.default = k, cc._RF.pop()
    }, {
        "./Achievement": "Achievement",
        "./AdsMananger": "AdsMananger",
        "./AssetsManager": "AssetsManager",
        "./AudioManager": "AudioManager",
        "./ButtonSet": "ButtonSet",
        "./CharacterInfo": "CharacterInfo",
        "./Exchange": "Exchange",
        "./GameLocalData": "GameLocalData",
        "./GameManger": "GameManger",
        "./GameTeaching": "GameTeaching",
        "./GradeSetting": "GradeSetting",
        "./GrilController": "GrilController",
        "./LuckDraw": "LuckDraw",
        "./MissionSet": "MissionSet",
        "./PartsRoot": "PartsRoot",
        "./StorySet": "StorySet",
        "./make/Make": "Make"
    }],
    MakeItem: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "7f6e1XM2JZC062EcTK7JR/A", "MakeItem");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../GameLocalData"),
            s = t("../AssetsManager"),
            c = t("../CharacterInfo"),
            r = t("../GlobalData"),
            l = t("./Make"),
            h = t("../GameManger"),
            u = t("../AudioManager"),
            d = t("../GameTeaching"),
            p = cc._decorator,
            g = p.ccclass,
            f = p.property,
            m = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.charaType = 0, e.level = 0, e.locat = 0, e.icon = null, e.levelLab = null, e.addMoneyLab = null, e.combine = null, e.make = null, e.isMoveRec = !1, e.isShake = !1, e.addMoneyTime = 0, e.currAddMoneyTime = 0, e.addMoney = 0, e
                }
                var i;
                return n(e, t), i = e, e.prototype.start = function() {
                    this.make = cc.find("Canvas").getChildByName("UiRoot").getChildByName("make").getComponent(l.default)
                }, e.prototype.onEnable = function() {
                    this.addMoneyLab.node.parent.active = !1, this.currAddMoneyTime = this.addMoneyTime, this.addMoneyLab.node.parent.y = -46.995, this.node.setScale(0), cc.tween(this.node).to(.15, {
                        scale: 1.25
                    }).to(.1, {
                        scale: 1
                    }).start()
                }, e.prototype.setCharaType = function(t) {
                    this.charaType = t
                }, e.prototype.setLevel = function(t) {
                    if (this.CloseShake(), this.level = t, a.default.getInstance().setGirdLevs(this.charaType, this.locat, this.level), a.default.getInstance().getPartsHighestLevs(this.charaType) < this.level) {
                        a.default.getInstance().setPartsHighestLevs(this.charaType, this.level);
                        var e = a.default.getInstance().getPartsLowestLevs(this.charaType);
                        e <= this.level - r.default.MinMaxInterval && a.default.getInstance().setPartsLowestLevs(this.charaType, e + 1)
                    }
                    this.addMoneyTime = c.default.getMatterEarningsTime(this.charaType, this.level), this.addMoney = c.default.getMatterEarningsPrice(this.charaType, this.level) * a.default.getInstance().profitMul, this.addMoneyLab.string = "+" + h.default.getInstance().RetainInt(this.addMoney, 1)
                }, e.prototype.setlocat = function(t) {
                    this.locat = t
                }, e.prototype.SetCombine = function() {
                    if (this.combine) {
                        this.combine.node.active = !0, this.combine.playAnimation("newAnimation", 1);
                        var t = this;
                        cc.tween(this.combine).delay(.5).call(function() {
                            t.combine.node.active = !1
                        }).start()
                    }
                }, e.prototype.refsh = function() {
                    this.levelLab.string = this.level + "";
                    var t = this.icon.getComponent(cc.Sprite);
                    if (this.level > 0) {
                        t.spriteFrame;
                        var e = new cc.SpriteFrame(s.default.getInstance().getIcon(this.charaType, this.level - 1));
                        t.spriteFrame && t.spriteFrame.destroy(), t.spriteFrame = e
                    }
                }, e.prototype.flashingEffe = function(t) {
                    this.addMoneyLab.string != "+" + h.default.getInstance().RetainInt(this.addMoney * a.default.getInstance().profitMul, 1) && (this.addMoneyLab.string = "+" + h.default.getInstance().RetainInt(this.addMoney * a.default.getInstance().profitMul, 1)), t.stopAllActions(), this.addMoneyLab.node.active = !0, t.active = !0, t.opacity = 255, t.y = -46.995, cc.tween(t).by(1, {
                        position: cc.v2(0, 100)
                    }).call(function() {
                        t.active = !1, t.y = -46.995
                    }).start()
                }, e.prototype.CheckSameItem = function() {
                    this.node.angle = 0, this.node.stopAllActions(), this.node.setScale(1.1);
                    for (var t = 0, e = this.make.gridItems; t < e.length; t++) {
                        var n = e[t];
                        if (void 0 != n.getComponent(i) && this.node != n && !n.getComponent(i).isMoveRec) {
                            var o = n.getComponent(i);
                            o.node.setScale(1), o.node.stopAllActions(), o.level != this.level && (o.node.opacity = 100)
                        }
                    }
                }, e.prototype.CloseSameItem = function() {
                    this.node.setScale(1);
                    for (var t = 0, e = this.make.gridItems; t < e.length; t++) {
                        var n = e[t];
                        if (void 0 != n.getComponent(i) && this.node != n) {
                            var o = n.getComponent(i);
                            o.level != this.level && (o.node.opacity = 255)
                        }
                    }
                }, e.prototype.CheckGride = function() {
                    if (!this.isMoveRec && this.make && !this.isShake)
                        for (var t = 0, e = this.make.gridItems; t < e.length; t++) {
                            var n = e[t];
                            if (void 0 != n.getComponent(i) && this.node != n) {
                                var o = n.getComponent(i);
                                if (o.level == this.level) {
                                    o.OpenShake();
                                    break
                                }
                            }
                        }
                }, e.prototype.OpenShake = function() {
                    this.node.setScale(1.1), this.node.stopAllActions(), this.isShake = !0;
                    var t = cc.tween().to(.1, {
                        angle: -25
                    }).to(.1, {
                        angle: 25
                    }).to(.1, {
                        angle: -25
                    }).to(.1, {
                        angle: 25
                    }).to(.1, {
                        angle: 0
                    }).delay(2);
                    cc.tween(this.node).then(t).repeatForever().start()
                }, e.prototype.CloseShake = function() {
                    this.isShake = !1, this.node.setScale(1), this.node.stopAllActions(), this.node.angle = 0
                }, e.prototype.ScaleShake = function() {
                    if (!this.isMoveRec) {
                        this.node.stopAllActions(), this.node.setScale(1.1), this.node.angle = 0;
                        var t = cc.tween().to(.1, {
                            angle: -25
                        }).to(.1, {
                            angle: 25
                        }).to(.1, {
                            angle: -25
                        }).to(.1, {
                            angle: 25
                        }).to(.1, {
                            angle: 0
                        }).delay(2);
                        cc.tween(this.node).then(t).repeatForever().start()
                    }
                }, e.prototype.update = function(t) {
                    this.currAddMoneyTime > 0 && (this.currAddMoneyTime -= t, this.currAddMoneyTime <= 0 && (this.currAddMoneyTime = this.addMoneyTime, this.flashingEffe(this.addMoneyLab.node.parent)))
                }, e.prototype.judgeIsCompound = function() {
                    for (var t = 0, e = this.make.gridItems; t < e.length; t++) {
                        var n = e[t];
                        if (n && void 0 != n.getComponent(i) && n != this.node) {
                            var o = n.getComponent(i);
                            if (n.getBoundingBox().contains(this.node.getPosition()) && o.level == this.level && this.level < 30) return u.default.getInstance().PlayBtAudio(7), this.make.upgrade(n, this.node), this.make.TriggerSame(), void(d.default.getInstance().isTeachOver || d.default.getInstance().isTeachSucc[2] || (d.default.getInstance().isTeach = !0, d.default.getInstance().teachGrade += 1))
                        }
                    }
                    for (var s = 0; s < this.make.locatGrids.length; s++) {
                        var c = this.make.locatGrids[s],
                            r = a.default.getInstance().getGirdLevs(this.charaType, s);
                        c && c.getBoundingBox().contains(this.node.getPosition()) && r <= 0 && -1 != r && (a.default.getInstance().setGirdLevs(this.charaType, this.locat, 0), a.default.getInstance().setGirdLevs(this.charaType, s, this.level), this.setlocat(s))
                    }
                    var l = this.locat;
                    this.node.position = this.make.locatGrids[l].position, this.node.zIndex = 0, u.default.getInstance().PlayBtAudio(6), this.make.TriggerSame()
                }, o([f(cc.Sprite)], e.prototype, "icon", void 0), o([f(cc.Label)], e.prototype, "levelLab", void 0), o([f(cc.Label)], e.prototype, "addMoneyLab", void 0), o([f(dragonBones.ArmatureDisplay)], e.prototype, "combine", void 0), e = i = o([g], e)
            }(cc.Component);
        i.default = m, cc._RF.pop()
    }, {
        "../AssetsManager": "AssetsManager",
        "../AudioManager": "AudioManager",
        "../CharacterInfo": "CharacterInfo",
        "../GameLocalData": "GameLocalData",
        "../GameManger": "GameManger",
        "../GameTeaching": "GameTeaching",
        "../GlobalData": "GlobalData",
        "./Make": "Make"
    }],
    Make: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "9f731qpjs5B2JzlrY2wF5U2", "Make");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("../CharacterInfo"),
            s = t("./MakeItem"),
            c = t("../GameLocalData"),
            r = t("../GameManger"),
            l = t("../MainUI"),
            h = t("../ButtonSet"),
            u = t("../GlobalData"),
            d = t("../Buy"),
            p = t("../Envelope"),
            g = t("../AirDrop"),
            f = t("../AudioManager"),
            m = t("../AssetsManager"),
            v = t("../GameTeaching"),
            y = t("../AdsMananger"),
            C = t("../Achievement"),
            I = cc._decorator,
            S = I.ccclass,
            N = I.property,
            L = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.charaType = -1, e.typeBtns = [], e.locatGrids = [], e.gridsNode = null, e.touchNode = null, e.shangTouch = null, e.buyUI = null, e.unclockUI = null, e.autoUI = null, e.profitUI = null, e.airDrop = null, e.unclockLevelBt = null, e.lateToggle = null, e.rewardEffect = [], e.effects = null, e.gameBtRoot = null, e.envelope = null, e.itemPrefab = null, e.gridItemPool = null, e.sellOutBt = null, e.gridItems = [], e.secCoinPrice = 0, e.maxProfitTs = 120, e.isProfit = !1, e.TouchNums = 0, e.profitTs = 120, e.profitMul = 1, e.maxAutoTs = 120, e.autoMul = 1, e.isAutoComp = !1, e.autoTs = 0, e.initIndex = 0, e.startPos = cc.Vec2.ZERO, e.isMoveIn = !1, e.rewardNum = 0, e.changeGoldBuy = 0, e.currMatter = null, e
                }
                return n(e, t), e.prototype.onLoad = function() {
                    this.startPos = this.node.getPosition(), this.node.y = this.startPos.y - 665, this.gridItemPool = new cc.NodePool, this.gridItems.splice(0), this.touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchBegin, this), this.touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this), this.touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this), this.shangTouch.on(cc.Node.EventType.TOUCH_END, this.onTouchShangEnd, this)
                }, e.prototype.start = function() {
                    for (var t = 0; t < 5; t++)
                        for (var e = 0; e < 12; e++) {
                            -1 == c.default.getInstance().getGirdLevs(t, e) && c.default.getInstance().setGirdLevs(t, e, 0)
                        } - 1 == this.charaType && this.setCharaType(0), v.default.getInstance().isTeachOver && (this.airDrop.getComponent(g.default).isSurper = !0), this.sellOutBt = this.node.getChildByName("make01").getChildByName("Button4"), this.CheckUpdateLevel()
                }, e.prototype.update = function(t) {
                    this.isAutoComp && (this.autoUI.getChildByName("di03").getChildByName("jiasu07").getChildByName("New Label").getComponent(cc.Label).string = Math.floor(this.autoTs / 60) + ":" + Math.floor(this.autoTs % 60), this.autoUI.getChildByName("di03").getChildByName("ProgressBar").getComponent(cc.ProgressBar).progress = this.autoTs / (this.maxAutoTs * this.autoMul), this.autoTs -= t, this.autoTs <= 0 && (this.autoMul = 1, this.isAutoComp = !1, this.rewardEffect[0].active = !1, this.unschedule(this.AutoCompound)));
                    this.isProfit && (this.profitUI.getChildByName("di03").getChildByName("jiasu07").getChildByName("New Label").getComponent(cc.Label).string = Math.floor(this.profitTs / 60) + ":" + Math.floor(this.profitTs % 60), this.profitUI.getChildByName("di03").getChildByName("ProgressBar").getComponent(cc.ProgressBar).progress = this.profitTs / (this.maxProfitTs * this.profitMul), this.profitTs -= t, this.profitTs <= 0 && (this.profitMul = 1, this.isProfit = !1, this.rewardEffect[1].active = !1, c.default.getInstance().profitMul = 1, this.requestSecCoinNum()))
                }, e.prototype.SetAirDropOpen = function() {
                    this.airDrop.getComponent(g.default).isSurper = !0
                }, e.prototype.CheckItemIsSame = function() {
                    if (!(this.gridItems.length < 2)) {
                        for (var t = 0, e = this.gridItems; t < e.length; t++) {
                            var i = e[t];
                            void 0 != i.getComponent(s.default) && (i.angle = 0, i.setScale(1), i.stopAllActions())
                        }
                        for (var n = 1; n < 36; n++) {
                            for (var o = !1, a = 0, c = this.gridItems; a < c.length; a++) {
                                var r = c[a];
                                if (void 0 != r.getComponent(s.default)) {
                                    var l = r.getComponent(s.default);
                                    if (l.level == n) {
                                        for (var h = 0, u = this.gridItems; h < u.length; h++) {
                                            var d = u[h];
                                            if (void 0 != d.getComponent(s.default) && d != r) {
                                                var p = d.getComponent(s.default);
                                                if (p.level == l.level) {
                                                    o = !0, l.ScaleShake(), p.ScaleShake();
                                                    break
                                                }
                                            }
                                        }
                                        if (o) break
                                    }
                                }
                            }
                            if (o) break
                        }
                    }
                }, e.prototype.setCharaType = function(t) {
                    this.makeMatter(t), this.refshParts(), this.RefreshMatter()
                }, e.prototype.setBtnInteractable = function(t) {
                    for (var e = 0, i = this.typeBtns; e < i.length; e++) {
                        i[e].interactable = t
                    }
                }, e.prototype.refshParts = function() {
                    this.setBtnInteractable(!0), this.typeBtns[this.charaType].interactable = !1
                }, e.prototype.makeMatter = function(t) {
                    if (this.charaType != t) {
                        this.charaType = t, this.removeAllItem();
                        for (var e = 0; e < 12; e++) {
                            var i = c.default.getInstance().getGirdLevs(this.charaType, e);
                            if (i > 0 && -1 != i) this.createItem(this.charaType, e, i);
                            else if (-1 == i) {
                                var n = c.default.getInstance().getGirdEnvelopeLevs(this.charaType, e);
                                n > 0 && this.BuildEnvelope(e, n, new cc.Vec2(0, 0))
                            }
                        }
                    }
                }, e.prototype.removeAllItem = function() {
                    for (var t = 0, e = this.gridItems; t < e.length; t++) {
                        var i = e[t];
                        i && (void 0 != i.getComponent(s.default) ? this.gridItemPool.put(i) : i.removeFromParent(!0))
                    }
                    this.gridItems.splice(0)
                }, e.prototype.removeItem = function(t) {
                    for (var e = 0, i = this.gridItems; e < i.length; e++) {
                        var n = i[e];
                        if (n && n == t) {
                            var o = n.getComponent(s.default);
                            this.gridItemPool.put(n);
                            var a = this.gridItems.indexOf(t);
                            return this.gridItems.splice(a, 1), void c.default.getInstance().setGirdLevs(this.charaType, o.locat, 0)
                        }
                    }
                }, e.prototype.createItem = function(t, e, i) {
                    var n = this.gridItemPool.get();
                    n || (n = cc.instantiate(this.itemPrefab)), n.stopAllActions(), n.zIndex = 0, n.position = this.locatGrids[e].position;
                    var o = n.getComponent(s.default);
                    o.setCharaType(t), o.setlocat(e), o.setLevel(i), o.refsh(), this.gridsNode.addChild(n), this.gridItems.push(n)
                }, e.prototype.createEnvelopItem = function(t, e, i) {
                    var n = this.gridItemPool.get();
                    n || (n = cc.instantiate(this.itemPrefab)), n.stopAllActions(), n.zIndex = 0, n.position = this.locatGrids[e].position;
                    var o = n.getComponent(s.default);
                    return o.setCharaType(t), o.setlocat(e), o.setLevel(i), o.refsh(), this.gridsNode.addChild(n), n
                }, e.prototype.DifferentCreateItem = function(t, e, i) {
                    var n = this.gridItemPool.get();
                    n || (n = cc.instantiate(this.itemPrefab)), n.stopAllActions(), n.zIndex = 0, n.position = this.locatGrids[e].position;
                    var o = n.getComponent(s.default);
                    o.setCharaType(t), o.setlocat(e), o.setLevel(i), o.refsh(), this.gridItems.push(n)
                }, e.prototype.buildMatter = function() {
                    for (var t = !1, e = 0; e < 12; e++) {
                        var i = c.default.getInstance().getGirdLevs(this.charaType, e);
                        if (i <= 0 && -1 != i) {
                            var n = c.default.getInstance().getPartsLowestLevs(this.charaType) - 1,
                                o = c.default.getInstance().getLevsCount(this.charaType, n),
                                s = c.default.getInstance().getPartsLowestLevs(this.charaType),
                                l = Math.floor(a.default.getMatterEnhancePrice(this.charaType, s, o + 1)),
                                h = c.default.getInstance().getGoldCoinNum();
                            l <= h ? (t = !0, c.default.getInstance().setGoldCoinNum(h - l), c.default.getInstance().setLevsCount(this.charaType, n, o + 1), this.createItem(this.charaType, e, s), c.default.getInstance().setGirdLevs(this.charaType, e, s), this.requestSecCoinNum()) : (t = !0, this.buyUI.getComponent(d.default).ShowAllTip());
                            break
                        }
                    }
                    t || r.default.getInstance().uiRoot.hint.setHint("Đầy ba lô!"), c.default.getInstance().saveData()
                }, e.prototype.BuildMatterIndex = function(t) {
                    for (var e = !1, i = 0; i < 12; i++) {
                        var n = c.default.getInstance().getGirdLevs(this.charaType, i);
                        if (n <= 0 && -1 != n) {
                            var o = c.default.getInstance().getLevsCount(this.charaType, n),
                                s = t,
                                l = Math.floor(a.default.getMatterEnhancePrice(this.charaType, s, o + 1)),
                                h = c.default.getInstance().getGoldCoinNum();
                            l <= h ? (e = !0, c.default.getInstance().setGoldCoinNum(h - l), c.default.getInstance().setLevsCount(this.charaType, n, o + 1), this.createItem(this.charaType, i, s), c.default.getInstance().setGirdLevs(this.charaType, i, s), this.requestSecCoinNum()) : (e = !0, this.buyUI.getComponent(d.default).ShowAllTip());
                            break
                        }
                    }
                    e || r.default.getInstance().uiRoot.hint.setHint("Đầy ba lô!"), c.default.getInstance().saveData()
                }, e.prototype.BuildEnvelope = function(t, e, i) {
                    var n = cc.instantiate(this.envelope);
                    n.getComponent(p.default).make = this, n.getComponent(p.default).envelopeTag = e, n.getComponent(p.default).latticeTag = t, n.zIndex = 0, this.isMoveIn && (0 != i.x || 0 != i.y) ? (n.getComponent(p.default).parentPos = this.locatGrids[t].getPosition(), n.setPosition(this.gridsNode.convertToNodeSpaceAR(i))) : n.position = this.locatGrids[t].position, this.gridsNode.addChild(n), this.gridItems.push(n), c.default.getInstance().setGirdEnvelopeLevs(this.charaType, t, e), c.default.getInstance().setGirdLevs(this.charaType, t, -1), c.default.getInstance().saveData()
                }, e.prototype.BuildEnvelopMatter = function(t, e) {
                    var i = c.default.getInstance().getLevsCount(this.charaType, t);
                    c.default.getInstance().setLevsCount(this.charaType, t, i + 1), this.createItem(this.charaType, e, t), c.default.getInstance().setGirdLevs(this.charaType, e, t), this.requestSecCoinNum(), c.default.getInstance().saveData()
                }, e.prototype.RefreshMatter = function() {
                    var t = c.default.getInstance().getPartsLowestLevs(this.charaType),
                        e = c.default.getInstance().getLevsCount(this.charaType, t - 1),
                        i = Math.floor(a.default.getMatterEnhancePrice(this.charaType, t, e + 1));
                    this.node.getChildByName("Button1").getChildByName("Background").getChildByName("Label1").getComponent(cc.Label).string = t.toString();
                    for (var n = this.node.getChildByName("Button1").getChildByName("Background").getChildByName("Label2"), o = 0; i >= 1e4;) o += 1, i /= 1e4;
                    this.changeGoldBuy != o && (this.changeGoldBuy = o, n.children.forEach(function(t) {
                        t.active = !1
                    })), 1 == o ? n.getChildByName("wan").active = !0 : 2 == o ? n.getChildByName("yi").active = !0 : 3 == o ? n.getChildByName("zhao").active = !0 : 4 == o && (n.getChildByName("wanzhao").active = !0), n.getComponent(cc.Label).string = r.default.getInstance().RetainNoIntStr(i, 1).toString()
                }, e.prototype.judgeIsCompound = function(t) {
                    t && t.getComponent(s.default).judgeIsCompound()
                }, e.prototype.upgrade = function(t, e) {
                    var i = this;
                    c.default.getInstance().missionComposeNum < 30 && c.default.getInstance().missionComposeNum++, c.default.getInstance().missionType[0]++;
                    var n = t.getComponent(s.default);
                    n.isMoveRec = !0;
                    var o = e.getComponent(s.default);
                    o.isMoveRec = !0, t.position = this.locatGrids[n.locat].position, e.position = this.locatGrids[n.locat].position;
                    var a = this;
                    t.stopAllActions(), e.stopAllActions(), cc.tween(t).by(.1, {
                        position: cc.v2(-100, 0)
                    }).by(.1, {
                        position: cc.v2(100, 0)
                    }).start(), cc.tween(e).by(.1, {
                        position: cc.v2(100, 0)
                    }).by(.1, {
                        position: cc.v2(-100, 0)
                    }).call(function() {
                        n.isMoveRec = !1, o.isMoveRec = !1, a.judgeIsNewClothes(n.level + 1, t), n.setLevel(n.level + 1), n.SetCombine(), n.refsh(), c.default.getInstance().getPartsLowestLevs(i.charaType) <= n.level + 1 - (u.default.MinMaxInterval - 1) && i.RefreshMatter(), a.removeItem(e), a.requestSecCoinNum(), c.default.getInstance().saveData()
                    }).start()
                }, e.prototype.getSecCoinNum = function() {
                    for (var t = 0, e = 0; e < 5; e++)
                        for (var i = e, n = 0; n < 12; n++) {
                            var o = n,
                                s = c.default.getInstance().getGirdLevs(i, o);
                            if (s > 0) t += a.default.getMatterEarningsPrice(i, s) / a.default.getMatterEarningsTime(i, s)
                        }
                    return Math.floor(t)
                }, e.prototype.requestSecCoinNum = function() {
                    this.secCoinPrice = this.getSecCoinNum() * c.default.getInstance().profitMul
                }, e.prototype.OpenAutoUI = function() {
                    v.default.getInstance().isTeachOver || (v.default.getInstance().isTeach = !0, v.default.getInstance().teachGrade += 1), this.autoUI.active = !0, this.autoUI.setScale(0), cc.tween(this.autoUI).to(.25, {
                        scale: 1.25
                    }).to(.1, {
                        scale: 1
                    }).start()
                }, e.prototype.CloseAutoUI = function() {
                    this.autoUI.active = !1
                }, e.prototype.SetAutoCompound = function() {
                    /* var t = this;
                    f.default.getInstance().PlayBtAudio(12), v.default.getInstance().isTeachOver ? y.default.GetInstance().ShowRewardVideo(function() {
                        return t.AutoCompoundSuccess()
						console.log("996996");
                    }) : (v.default.getInstance().SetGameTeachOver(), this.AutoCompoundSuccess()), v.default.getInstance().isTeachSucc[2] || (v.default.getInstance().isTeachSucc[2] = !0, v.default.getInstance().SaveTeachData()) */
					this.isAutoComp ? (this.autoTs += this.maxAutoTs, r.default.getInstance().uiRoot.hint.setHint("Thời gian tổng hợp tự động + 5 phút"), this.autoMul += 1) : this.autoTs = this.maxAutoTs, this.isAutoComp = !0, this.autoUI.active = !1, this.effects.node.active = !0, this.rewardEffect[0].active = !0, this.effects.playAnimation("hecheng", 1), this.OpenEnvelope(), this.schedule(this.AutoCompound, 1)
					console.log("114888");
                }, e.prototype.AutoCompoundSuccess = function() {
                    this.isAutoComp ? (this.autoTs += this.maxAutoTs, r.default.getInstance().uiRoot.hint.setHint("Thời gian tổng hợp tự động + 5 phút"), this.autoMul += 1) : this.autoTs = this.maxAutoTs, this.isAutoComp = !0, this.autoUI.active = !1, this.effects.node.active = !0, this.rewardEffect[0].active = !0, this.effects.playAnimation("hecheng", 1), this.OpenEnvelope(), this.schedule(this.AutoCompound, 1)
                }, e.prototype.OpenEnvelope = function() {
                    for (var t = 0; t < this.gridItems.length; t++) {
                        void 0 != (i = this.gridItems[t]).getComponent(p.default) && i.getComponent(p.default).AllEnvelopOpen()
                    }
                    for (var e = 0; e < this.gridItems.length; e++) {
                        var i;
                        void 0 != (i = this.gridItems[e]).getComponent(p.default) && this.gridItems.splice(e, 1)
                    }
                }, e.prototype.AutoCompound = function() {
                    if (this.gridItems.length > 1)
                        for (var t = !1, e = 0, i = this.gridItems; e < i.length; e++) {
                            var n = i[e];
                            if (void 0 != n.getComponent(s.default)) {
                                for (var o = n.getComponent(s.default), a = 0, c = this.gridItems; a < c.length; a++) {
                                    var r = c[a];
                                    if (void 0 != r.getComponent(s.default)) {
                                        var l = r.getComponent(s.default);
                                        if (r != n && l.level == o.level && o.level < 30) {
                                            t = !0, this.upgrade(r, n);
                                            break
                                        }
                                    }
                                }
                                if (t) break
                            }
                        }
                }, e.prototype.OpenProfitUI = function() {
                    v.default.getInstance().isTeachOver || (v.default.getInstance().isTeach = !0, v.default.getInstance().teachGrade += 1), v.default.getInstance().isTeachSucc[3] || (v.default.getInstance().isTeachSucc[3] = !0, v.default.getInstance().SaveTeachData()), this.profitUI.active = !0, this.profitUI.setScale(0), cc.tween(this.profitUI).to(.25, {
                        scale: 1.25
                    }).to(.1, {
                        scale: 1
                    }).start()
                }, e.prototype.CloseProfitUI = function() {
                    this.profitUI.active = !1
                }, e.prototype.SetProfit = function() {
                    /* var t = this;
                    f.default.getInstance().PlayBtAudio(12), v.default.getInstance().isTeachOver ? y.default.GetInstance().ShowRewardVideo(function() {
                        return t.ProfitSuccess()
						console.log("yy7765");
                    }) : (v.default.getInstance().SetGameTeachOver(), this.ProfitSuccess()) */
					this.isProfit ? (this.profitTs += this.maxProfitTs, r.default.getInstance().uiRoot.hint.setHint("Thời gian tăng tốc thu nhập + 5 phút"), this.profitMul += 1) : this.profitTs = this.maxProfitTs, this.isProfit = !0, c.default.getInstance().profitMul = 2, this.profitUI.active = !1, this.effects.node.active = !0, this.rewardEffect[1].active = !0, this.effects.playAnimation("shouyi", 1), this.requestSecCoinNum()
					console.log("uuu733");
                }, e.prototype.ProfitSuccess = function() {
                    this.isProfit ? (this.profitTs += this.maxProfitTs, r.default.getInstance().uiRoot.hint.setHint("Thời gian tăng tốc thu nhập + 5 phút"), this.profitMul += 1) : this.profitTs = this.maxProfitTs, this.isProfit = !0, c.default.getInstance().profitMul = 2, this.profitUI.active = !1, this.effects.node.active = !0, this.rewardEffect[1].active = !0, this.effects.playAnimation("shouyi", 1), this.requestSecCoinNum()
                }, e.prototype.judgeIsNewClothes = function(t, e) {
                    var i = e.getComponent(s.default).charaType;
                    if (t > c.default.getInstance().getPartsHighestLevs(i)) {
                        if (t < 4) {
                            for (var n = 0, o = 0; o < 5; o++) 2 != c.default.getInstance().getPartsHighestLevs(o) && 3 != c.default.getInstance().getPartsHighestLevs(o) || n++;
                            5 == n && 7 == v.default.getInstance().teachGrade && (this.isAutoComp = !1)
                        }
                        r.default.getInstance().uiRoot.mainUi.getComponent(l.default).ShowUnClockNewClothes(i), c.default.getInstance().missionType[2]++, t >= 6 && (c.default.getInstance().unlockTag[this.charaType] = -(4 - t)), this.CheckUpdateLevel()
                    } else v.default.getInstance().CheckStartCompany()
                }, e.prototype.moveIn = function() {
                    if (!this.isMoveIn) {
                        this.isMoveIn = !0;
                        this.node.active = !0, this.node.stopAllActions();
                        var t = this.node.getPosition().sub(this.startPos).mag() / 665 * .2;
                        cc.tween(this.node).to(t, {
                            position: cc.v2(this.startPos.x, this.startPos.y)
                        }).call(function() {}).start(), this.TriggerSame()
                    }
                }, e.prototype.moveOut = function() {
                    if (this.isMoveIn) {
                        this.isMoveIn = !1, this.node.stopAllActions();
                        var t = (665 - this.node.getPosition().sub(this.startPos).mag()) / 665 * .2,
                            e = this;
                        cc.tween(this.node).to(t, {
                            position: cc.v2(this.startPos.x, this.startPos.y - 665)
                        }).call(function() {
                            e.node.active = !1
                        }).start()
                    }
                }, e.prototype.SellOut = function() {
                    if (this.currMatter) {
                        var t = this.currMatter;
                        if (this.CloseAllItemAction(), t.getBoundingBoxToWorld().intersects(this.sellOutBt.getBoundingBoxToWorld())) {
                            f.default.getInstance().PlayBtAudio(8);
                            var e = c.default.getInstance().getGoldCoinNum(),
                                i = a.default.getMatterEarningsPrice(t.getComponent(s.default).charaType, t.getComponent(s.default).level);
                            c.default.getInstance().setGoldCoinNum(e + i), r.default.getInstance().uiRoot.hint.setHint("Bán " + r.default.getInstance().RetainInt(i, 2)), this.removeItem(t)
                        } else this.judgeIsCompound(this.currMatter);
                        c.default.getInstance().saveData()
                    }
                }, e.prototype.CheckUpdateLevel = function() {
                    var t = c.default.getInstance().getPartsHighestLevs(this.charaType),
                        e = c.default.getInstance().getPartsLowestLevs(this.charaType);
                    t >= 9 && e < t - 1 && e < 30 ? (this.unclockLevelBt.opacity = 255, this.unclockLevelBt.getChildByName("Background").getChildByName("Label2").getComponent(cc.Label).string = 5 == e ? (e + 2).toString() : (e + 1).toString()) : this.unclockLevelBt.opacity = 100
                }, e.prototype.UpdatelevelClothes = function() {
                    var t = this;
                    f.default.getInstance().PlayBtAudio(9);
                    var e = c.default.getInstance().getPartsHighestLevs(this.charaType),
                        i = c.default.getInstance().getPartsLowestLevs(this.charaType);
                    e >= 9 && i < e - 1 && i < 30 ? y.default.GetInstance().ShowRewardVideo(function() {
                        return t.UpdateLevelSuccess()
                    }) : r.default.getInstance().uiRoot.hint.setHint("Cấp độ không đủ để mở khóa")
                }, e.prototype.UpdateLevelSuccess = function() {
                    var t = c.default.getInstance().getPartsLowestLevs(this.charaType),
                        e = this.unclockUI.getChildByName("jiesuo01").getChildByName("jiesuo02").getChildByName("cloth");
                    e.children.forEach(function(t) {
                        t.active = !1
                    }), e.children[this.charaType].active = !0, this.unclockUI.getChildByName("jiesuo01").getChildByName("main03").getChildByName("Label").getComponent(cc.Label).string = (5 + 3 * t).toString(), this.rewardNum = 5 + 3 * t;
                    var i = this.unclockUI.getChildByName("jiesuo01").getChildByName("cloth_001").getComponent(cc.Sprite);
                    i.node.setScale(2), i.spriteFrame = new cc.SpriteFrame(m.default.getInstance().getIcon(this.charaType, t)), this.unclockUI.getChildByName("jiesuo01").getChildByName("jiesuo02").getChildByName("Label").getComponent(cc.Label).string = (t + 1).toString(), this.unclockUI.active = !0, this.lateToggle.isChecked = !0, this.unclockUI.setScale(0), cc.tween(this.unclockUI).to(.25, {
                        scale: 1.25
                    }).to(.1, {
                        scale: 1
                    }).start()
                }, e.prototype.GetUpdateLevel = function() {
                    if (this.lateToggle.isChecked) this.DoubleLevelReward();
                    else {
                        var t = c.default.getInstance().getPartsLowestLevs(this.charaType);
                        c.default.getInstance().setPartsLowestLevs(this.charaType, t + 1), c.default.getInstance().unlockTag[this.charaType] += 1, this.RefreshMatter(), this.unclockUI.active = !1, c.default.getInstance().saveData(), this.CheckUpdateLevel()
                    }
                }, e.prototype.DoubleLevelReward = function() {
                    var t = this;
                    y.default.GetInstance().ShowRewardVideo(function() {
                        return t.DoubleLevelSuccess()
						console.log("00oooo");
                    })
					console.log("55555hh");
                }, e.prototype.DoubleLevelSuccess = function() {
                    var t = c.default.getInstance().getPartsLowestLevs(this.charaType);
                    c.default.getInstance().setPartsLowestLevs(this.charaType, t + 1), this.RefreshMatter(), this.unclockUI.active = !1, c.default.getInstance().setDiamondsnNum(c.default.getInstance().getDiamondsNum() + 2 * this.rewardNum), c.default.getInstance().saveData()
                }, e.prototype.ShowSellUI = function() {
                    r.default.getInstance().uiRoot.hint.setHint("Kéo và thả trang phục ở đây để bán~")
                }, e.prototype.CloseAllItemAction = function() {
                    if (this.gridItems.length > 0) {
                        this.currMatter.getComponent(s.default).CloseSameItem();
                        for (var t = 0, e = this.gridItems; t < e.length; t++) {
                            var i = e[t];
                            if (void 0 != i.getComponent(s.default)) {
                                var n = i.getComponent(s.default);
                                n.isShake && n.CloseShake()
                            }
                        }
                    }
                }, e.prototype.TriggerSame = function() {
                    this.unschedule(this.CheckItemIsSame), this.scheduleOnce(this.CheckItemIsSame, 3)
                }, e.prototype.onTouchBegin = function(t) {
                    var e = t.getLocation();
                    this.currMatter = null;
                    for (var i = 0, n = this.gridItems; i < n.length; i++) {
                        var o = n[i];
                        if (o && o.getBoundingBoxToWorld().contains(e)) {
                            this.currMatter = o, void 0 != this.currMatter.getComponent(s.default) && (this.currMatter.getComponent(s.default).CheckSameItem(), this.currMatter.getComponent(s.default).CheckGride());
                            break
                        }
                    }
                }, e.prototype.onTouchMoved = function(t) {
                    var e = t.getLocation();
                    if (this.currMatter && void 0 != this.currMatter.getComponent(s.default)) {
                        var i = this.gridsNode.convertToNodeSpaceAR(e);
                        this.currMatter.position = i;
                        this.currMatter.zIndex;
                        this.currMatter.zIndex = 1
                    }
                }, e.prototype.onTouchEnd = function(t) {
                    this.currMatter && void 0 != this.currMatter.getComponent(p.default) ? this.currMatter.getComponent(p.default).onClickBuild() : this.SellOut()
                }, e.prototype.onTouchCancel = function(t) {
                    this.currMatter && void 0 != this.currMatter.getComponent(p.default) ? this.currMatter.getComponent(p.default).onClickBuild() : this.SellOut()
                }, e.prototype.onTouchShangEnd = function(t) {
                    this.moveOut(), this.gameBtRoot.SetButtonInit(), v.default.getInstance().HideGameGuide()
                }, e.prototype.clickPartsBtn = function(t, e) {
                    f.default.getInstance().PlayBtAudio(3);
                    var i = parseInt(e);
                    this.initIndex = i, this.gameBtRoot.SetButtonState(i), this.setCharaType(i), this.TriggerSame(), this.CheckUpdateLevel()
                }, e.prototype.clickBuildBtn = function(t, e) {
                    !v.default.getInstance().isTeachOver && v.default.getInstance().teachGrade > 3 || (f.default.getInstance().PlayBtAudio(5), this.buildMatter(), this.RefreshMatter(), this.TriggerSame(), v.default.getInstance().HideGameGuide(), v.default.getInstance().isTeachOver || (v.default.getInstance().isTeach = !0, v.default.getInstance().teachGrade += 1))
                }, e.prototype.clickCloseBtn = function(t, e) {
                    this.moveOut(), this.gameBtRoot.SetButtonInit(), v.default.getInstance().HideGameGuide(), v.default.getInstance().isTeachOver || (v.default.getInstance().isTeach = !0, v.default.getInstance().teachGrade += 1)
                }, e.prototype.clickBuyBt = function() {
                    this.moveOut(), this.buyUI.getComponent(d.default).typeIndex = this.charaType, this.buyUI.getComponent(d.default).moveIn(), v.default.getInstance().HideGameGuide()
                }, e.prototype.CheckCanBuyType = function() {
                    for (var t = c.default.getInstance().getGoldCoinNum(), e = !1, i = 0; i < 5; i++) {
                        var n, o = c.default.getInstance().getPartsLowestLevs(i) - 1,
                            s = c.default.getInstance().getLevsCount(i, o),
                            r = c.default.getInstance().getPartsLowestLevs(i);
                        if (t >= Math.floor(a.default.getMatterEnhancePrice(i, r, s + 1)))(n = this.typeBtns[i].node.getChildByName("main35")).active = !0, C.default.getInstance().achieveTrigger[0] = !0, e = !0;
                        else(n = this.typeBtns[i].node.getChildByName("main35")).active && (n.active = !1)
                    }
                    e || (C.default.getInstance().achieveTrigger[0] = !1)
                }, o([N([cc.Button])], e.prototype, "typeBtns", void 0), o([N([cc.Node])], e.prototype, "locatGrids", void 0), o([N(cc.Node)], e.prototype, "gridsNode", void 0), o([N(cc.Node)], e.prototype, "touchNode", void 0), o([N(cc.Node)], e.prototype, "shangTouch", void 0), o([N(cc.Node)], e.prototype, "buyUI", void 0), o([N(cc.Node)], e.prototype, "unclockUI", void 0), o([N(cc.Node)], e.prototype, "autoUI", void 0), o([N(cc.Node)], e.prototype, "profitUI", void 0), o([N(cc.Node)], e.prototype, "airDrop", void 0), o([N(cc.Node)], e.prototype, "unclockLevelBt", void 0), o([N(cc.Toggle)], e.prototype, "lateToggle", void 0), o([N(cc.Node)], e.prototype, "rewardEffect", void 0), o([N(dragonBones.ArmatureDisplay)], e.prototype, "effects", void 0), o([N(h.default)], e.prototype, "gameBtRoot", void 0), o([N(cc.Prefab)], e.prototype, "envelope", void 0), o([N(cc.Prefab)], e.prototype, "itemPrefab", void 0), e = o([S], e)
            }(cc.Component);
        i.default = L, cc._RF.pop()
    }, {
        "../Achievement": "Achievement",
        "../AdsMananger": "AdsMananger",
        "../AirDrop": "AirDrop",
        "../AssetsManager": "AssetsManager",
        "../AudioManager": "AudioManager",
        "../ButtonSet": "ButtonSet",
        "../Buy": "Buy",
        "../CharacterInfo": "CharacterInfo",
        "../Envelope": "Envelope",
        "../GameLocalData": "GameLocalData",
        "../GameManger": "GameManger",
        "../GameTeaching": "GameTeaching",
        "../GlobalData": "GlobalData",
        "../MainUI": "MainUI",
        "./MakeItem": "MakeItem"
    }],
    MissionSet: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "8a21ckuuptAnJ3Fu2QWha65", "MissionSet");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./GameLocalData"),
            s = t("./AudioManager"),
            c = t("./MainUI"),
            r = t("./LuckDraw"),
            l = t("./GradeSetting"),
            h = t("./GameManger"),
            u = cc._decorator,
            d = u.ccclass,
            p = u.property,
            g = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.tips = null, e.redPoint = null, e.main = null, e.luck = null, e.grade = null, e.missionNode = [], e.getBt = [], e.gotoBt = [], e.missionTerm = [
                        [100, 300, 1e3, 3e3, 1e4],
                        [5, 10, 30, 100, 300],
                        [20, 50, 80, 120, 200],
                        [2, 3, 4, 5, 6],
                        [3, 10, 30, 50, 100]
                    ], e.missionGoldReward = [
                        [.05, .2, .5, .8, 1],
                        [.05, .2, .5, .8, 1],
                        [.05, .2, .5, .8, 1],
                        [.05, .2, .5, .8, 1],
                        [.05, .2, .5, .8, 1]
                    ], e.missionDiamondReward = [
                        [5, 10, 15, 25, 50],
                        [5, 10, 15, 25, 50],
                        [5, 10, 15, 25, 50],
                        [5, 10, 15, 25, 50],
                        [5, 10, 15, 25, 50]
                    ], e.rechNum = [0, 0, 0, 0, 0], e.isSuccess = [!1, !1, !1, !1, !1], e
                }
                return n(e, t), e.prototype.start = function() {}, e.prototype.SetEveryDayProgress = function() {
                    var t = this.node.getChildByName("di01").getChildByName("renwu1").getChildByName("ProgressBar").getComponent(cc.ProgressBar),
                        e = this.node.getChildByName("di01").getChildByName("renwu1").getChildByName("ProgressBar").getChildByName("New Label").getComponent(cc.Label),
                        i = this.node.getChildByName("di01").getChildByName("renwu1").getChildByName("main02").getChildByName("Label4").getComponent(cc.Label);
                    t.progress = a.default.getInstance().missionWatchNum / 3, e.string = a.default.getInstance().missionWatchNum.toString() + " / 3";
                    var n = Math.floor(.1 * a.default.getInstance().secGoldCoinNum * 60 * 60);
                    i.string = h.default.getInstance().RetainInt(n, 2);
                    var o = this.node.getChildByName("di01").getChildByName("renwu2").getChildByName("ProgressBar").getComponent(cc.ProgressBar),
                        s = this.node.getChildByName("di01").getChildByName("renwu2").getChildByName("ProgressBar").getChildByName("New Label").getComponent(cc.Label),
                        c = this.node.getChildByName("di01").getChildByName("renwu2").getChildByName("main02").getChildByName("Label4").getComponent(cc.Label),
                        r = this.node.getChildByName("di01").getChildByName("renwu2").getChildByName("zuanshi").getChildByName("Label5").getComponent(cc.Label);
                    o.progress = a.default.getInstance().missionComposeNum / 50, s.string = a.default.getInstance().missionComposeNum.toString() + " / 50";
                    var l = Math.floor(.3 * a.default.getInstance().secGoldCoinNum * 60 * 60);
                    c.string = h.default.getInstance().RetainInt(l, 2), r.string = "20"
                }, e.prototype.CheckEveryDayMission = function() {
                    (this.getBt[0].active = !1, this.gotoBt[0].active = !0, this.getBt[1].active = !1, this.gotoBt[1].active = !0, 2 != a.default.getInstance().isEvetMissionSuc[0] && a.default.getInstance().missionWatchNum >= 3) ? (this.node.getChildByName("di01").getChildByName("renwu1").getChildByName("Button2").getChildByName("main35").active = !0, this.redPoint.active = !0, a.default.getInstance().isEvetMissionSuc[0] = 1, this.getBt[0].active = !0, this.gotoBt[0].active = !1) : 2 == a.default.getInstance().isEvetMissionSuc[0] && (this.getBt[0].active = !1, this.gotoBt[0].active = !1);
                    2 != a.default.getInstance().isEvetMissionSuc[1] && a.default.getInstance().missionComposeNum >= 50 ? (this.node.getChildByName("di01").getChildByName("renwu2").getChildByName("Button2").getChildByName("main35").active = !0, this.redPoint.active = !0, a.default.getInstance().isEvetMissionSuc[1] = 1, this.getBt[1].active = !0, this.gotoBt[1].active = !1) : 2 == a.default.getInstance().isEvetMissionSuc[1] && (this.getBt[1].active = !1, this.gotoBt[1].active = !1)
                }, e.prototype.ShowMissionUI = function() {
                    s.default.getInstance().PlayBtAudio(3);
                    for (var t = 0; t < this.rechNum.length; t++) this.rechNum[t] = a.default.getInstance().missionType[t];
                    this.SetEveryDayProgress(), this.SetMissionProgress(), this.CheckEveryDayMission(), this.CheckMissionSuccess(), this.node.active = !0, h.default.getInstance().isCurrentMain = !1
                }, e.prototype.CloseMissionUI = function() {
                    s.default.getInstance().PlayBtAudio(3), this.node.active = !1, h.default.getInstance().isCurrentMain = !0
                }, e.prototype.CheckMissionSuccess = function() {
                    for (var t = 0; t < 5; t++) {
                        var e = a.default.getInstance().missionStage[t],
                            i = a.default.getInstance().missionType[t],
                            n = this.missionNode[t].getChildByName("Button2").getChildByName("main35");
                        n.active = !1, this.getBt[t + 2].active = !1, this.gotoBt[t + 2].active = !0, i >= this.missionTerm[t][e] && (n.active = !0, this.isSuccess[t] = !0, this.redPoint.active = !0, this.getBt[t + 2].active = !0, this.gotoBt[t + 2].active = !1)
                    }
                }, e.prototype.SetMissionProgress = function() {
                    for (var t = 0; t < 5; t++) {
                        var e = a.default.getInstance().missionStage[t],
                            i = a.default.getInstance().missionType[t],
                            n = this.missionNode[t].getChildByName("ProgressBar").getComponent(cc.ProgressBar),
                            o = this.missionNode[t].getChildByName("ProgressBar").getChildByName("New Label").getComponent(cc.Label),
                            s = this.missionNode[t].getChildByName("Label2").getComponent(cc.Label),
                            c = this.missionNode[t].getChildByName("main02").getChildByName("Label4").getComponent(cc.Label),
                            r = this.missionNode[t].getChildByName("zuanshi").getChildByName("Label5").getComponent(cc.Label);
                        c.string = h.default.getInstance().RetainInt(a.default.getInstance().secGoldCoinNum * this.missionGoldReward[t][e] * 60 * 60, 2), r.string = this.missionDiamondReward[t][e].toString(), o.string = i.toString() + " / " + this.missionTerm[t][e].toString(), 0 == t ? s.string = "Kết hợp" + this.missionTerm[t][e].toString() + "Hạng hai" : 1 == t ? s.string = "vé số" + this.missionTerm[t][e].toString() + "Hạng hai" : 2 == t ? s.string = "Mở khóa " + this.missionTerm[t][e].toString() + " bộ đồ mới" : 3 == t ? s.string = "Cốt truyện đã tiến triển " + this.missionTerm[t][e].toString() + "chương" : 4 == t && (s.string = "Đấu trường " + this.missionTerm[t][e].toString() + "Hạng hai"), i >= this.missionTerm[t][e] ? n.progress = 1 : n.progress = i / this.missionTerm[t][e]
                    }
                }, e.prototype.onClickMission = function(t, e) {
                    var i = parseInt(e);
                    if (this.redPoint.active = !1, this.isSuccess[i]) {
                        this.isSuccess[i] = !1, s.default.getInstance().PlayBtAudio(16);
                        var n = this.tips.getChildByName("tishi02").getChildByName("Label3").getComponent(cc.Label),
                            o = a.default.getInstance().missionStage[i],
                            c = Math.floor(a.default.getInstance().secGoldCoinNum * this.missionGoldReward[i][o] * 60 * 60);
                        a.default.getInstance().setGoldCoinNum(a.default.getInstance().getGoldCoinNum() + c);
                        var r = this.missionDiamondReward[i][o];
                        a.default.getInstance().setDiamondsnNum(a.default.getInstance().getDiamondsNum() + r), a.default.getInstance().missionStage[i]++, this.SetMissionProgress(), this.CheckMissionSuccess(), n.string = "Nhận " + c / 1e4 + " vạn xu và " + r + " kim cương!";
                        var l = this;
                        this.tips.active = !0, this.tips.setScale(0), cc.tween(this.tips).to(.25, {
                            scale: 1.25
                        }).to(.1, {
                            scale: 1
                        }).delay(2).call(function() {
                            l.tips.active = !1
                        }).start(), a.default.getInstance().saveData()
                    }
                }, e.prototype.onClickEvery = function(t, e) {
                    var i = parseInt(e);
                    if (1 == a.default.getInstance().isEvetMissionSuc[i]) {
                        var n = this.tips.getChildByName("tishi02").getChildByName("Label3").getComponent(cc.Label);
                        if (0 == i) {
                            this.node.getChildByName("di01").getChildByName("renwu1").getChildByName("Button2").getChildByName("main35").active = !1;
                            var o = Math.floor(.2 * a.default.getInstance().secGoldCoinNum * 60 * 60);
                            a.default.getInstance().setGoldCoinNum(a.default.getInstance().getGoldCoinNum() + o), n.string = "Nhận " + o / 1e4 + " vạn xu!"
                        } else {
                            this.node.getChildByName("di01").getChildByName("renwu2").getChildByName("Button2").getChildByName("main35").active = !1;
                            o = Math.floor(.2 * a.default.getInstance().secGoldCoinNum * 60 * 60);
                            a.default.getInstance().setGoldCoinNum(a.default.getInstance().getGoldCoinNum() + o);
                            a.default.getInstance().setDiamondsnNum(a.default.getInstance().getDiamondsNum() + 15), n.string = "Nhận " + o / 1e4 + "vạn xu + 15 kim cương!"
                        }
                        a.default.getInstance().isEvetMissionSuc[i] = 2, this.getBt[i].active = !1, this.gotoBt[i].active = !1;
                        var s = this;
                        this.tips.active = !0, this.tips.setScale(0), cc.tween(this.tips).to(.25, {
                            scale: 1.25
                        }).to(.1, {
                            scale: 1
                        }).delay(2).call(function() {
                            s.tips.active = !1
                        }).start(), a.default.getInstance().saveData()
                    }
                }, e.prototype.CheckMissionReach = function() {
                    this.rechNum[0] != a.default.getInstance().missionType[0] && (this.CheckEveryDayMission(), this.CheckMissionSuccess(), this.rechNum[0] = a.default.getInstance().missionType[0]), this.rechNum[1] != a.default.getInstance().missionType[1] && (this.CheckEveryDayMission(), this.CheckMissionSuccess(), this.rechNum[1] = a.default.getInstance().missionType[1]), this.rechNum[2] != a.default.getInstance().missionType[2] && (this.CheckEveryDayMission(), this.CheckMissionSuccess(), this.rechNum[2] = a.default.getInstance().missionType[2]), this.rechNum[3] != a.default.getInstance().missionType[3] && (this.CheckEveryDayMission(), this.CheckMissionSuccess(), this.rechNum[3] = a.default.getInstance().missionType[3]), this.rechNum[4] != a.default.getInstance().missionType[4] && (this.CheckEveryDayMission(), this.CheckMissionSuccess(), this.rechNum[4] = a.default.getInstance().missionType[4])
                }, e.prototype.GoToMission = function(t, e) {
                    var i = parseInt(e);
                    0 == i ? h.default.getInstance().uiRoot.hint.setHint("Xem quảng cáo video") : 1 == i ? (this.CloseMissionUI(), this.main.getComponent(c.default).clickMakeBtn(null, null)) : 2 == i ? (this.CloseMissionUI(), this.main.getComponent(c.default).clickMakeBtn(null, null)) : 3 == i ? (this.CloseMissionUI(), this.luck.getComponent(r.default).OpenLuckDraw()) : 4 == i ? (this.CloseMissionUI(), this.main.getComponent(c.default).clickMakeBtn(null, null)) : 5 == i ? (this.CloseMissionUI(), this.main.getComponent(c.default).clickMakeBtn(null, null)) : 6 == i && (this.CloseMissionUI(), this.grade.getComponent(l.default).ShowGradeSceneUI())
                }, o([p(cc.Node)], e.prototype, "tips", void 0), o([p(cc.Node)], e.prototype, "redPoint", void 0), o([p(cc.Node)], e.prototype, "main", void 0), o([p(cc.Node)], e.prototype, "luck", void 0), o([p(cc.Node)], e.prototype, "grade", void 0), o([p(cc.Node)], e.prototype, "missionNode", void 0), o([p(cc.Node)], e.prototype, "getBt", void 0), o([p(cc.Node)], e.prototype, "gotoBt", void 0), e = o([d], e)
            }(cc.Component);
        i.default = g, cc._RF.pop()
    }, {
        "./AudioManager": "AudioManager",
        "./GameLocalData": "GameLocalData",
        "./GameManger": "GameManger",
        "./GradeSetting": "GradeSetting",
        "./LuckDraw": "LuckDraw",
        "./MainUI": "MainUI"
    }],
    PartsRoot: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "246b2Vw5phHN7cnI4Ky2b22", "PartsRoot");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            s = a.ccclass,
            c = (a.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.startPos = cc.Vec2.ZERO, e.isMoveIn = !1, e
                }
                return n(e, t), e.prototype.start = function() {
                    this.startPos = this.node.getPosition(), this.isMoveIn = !1
                }, e.prototype.moveIn = function(t, e) {
                    if (!this.isMoveIn) {
                        this.isMoveIn = !0, this.node.stopAllActions();
                        var i = (t - this.node.getPosition().sub(this.startPos).mag()) / t * e;
                        cc.tween(this.node).to(i, {
                            position: cc.v2(this.startPos.x - t, this.startPos.y)
                        }).start()
                    }
                }, e.prototype.moveOut = function(t, e) {
                    if (this.isMoveIn) {
                        this.isMoveIn = !1, this.node.stopAllActions();
                        var i = this.node.getPosition().sub(this.startPos).mag() / t * e;
                        cc.tween(this.node).to(i, {
                            position: cc.v2(this.startPos.x, this.startPos.y)
                        }).start()
                    }
                }, e = o([s], e)
            }(cc.Component));
        i.default = c, cc._RF.pop()
    }, {}],
    PlotSet: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "656b1Sh/SdGf5UpPQ4qut2q", "PlotSet");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./AudioManager"),
            s = t("./GameLocalData"),
            c = t("./ChangeMenu"),
            r = t("./StorySet"),
            l = t("./GameManger"),
            h = t("./Achievement"),
            u = cc._decorator,
            d = u.ccclass,
            p = u.property,
            g = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.plot = [
                        ["Lời mở đầu cho phía bên kia của thành công", "Cuộc thi thiết kế thời trang hàng năm sắp bước vào vòng chung kết xếp hạng. Đây là người chiến thắng yêu thích của chúng tôi: Zhixia!", "Zhixia, nhanh lên, đến lượt bạn chơi." , "Chờ một chút ...", "Có chuyện gì vậy?", "Em đang chọn trang phục đẹp nhất!", "Vậy anh nhanh lên, không để khán giả đợi lâu.", "Được rồi!", "Tuyệt vời! Zhixia Bạn là người đẹp nhất!", "Kết quả lựa chọn cuối cùng của cuộc thi thiết kế thời trang mới nhất đã ra. Tôi thông báo rằng người đoạt danh hiệu nhà thiết kế xuất sắc nhất năm là: Zhixia!", "Có thể bạn hỏi? Tại sao bạn lại có được nó ở độ tuổi trẻ như vậy. Danh hiệu nhà thiết kế xuất sắc nhất? "," Dù tôi còn trẻ nhưng không có nghĩa là tôi được trả ít hơn, và tôi luôn được hỗ trợ bởi người tôi tin tưởng. . "," Sau đó ngươi nghĩ như thế nào dấn thân vào con đường thiết kế thời trang cái gì? "," Chuyện này ... Chuyện này sẽ bắt đầu từ lúc đó ... "," Zhi Xia rơi vào ký ức ... "],
                        ["Chương 1 - Giấc mơ bắt đầu", "Khi mùa tốt nghiệp đến gần, Zhixia gặp phải một vấn đề khó khăn trong cuộc sống. Tương lai cô ấy sẽ đi về đâu? Với học thức và kiến ​​thức của mình, cô ấy có thể tìm được một công việc tốt hơn. Nhưng cô ấy không muốn, không muốn lặp lại công việc không thay đổi này mỗi ngày. Cô ấy không được hòa giải ... Cô ấy có lý tưởng của riêng mình ... Lý tưởng của cô ấy là ... ", "Ugh!", "Zhixia?", "Tiền bối! Sao anh đột nhiên xuất hiện khiến em giật mình!", "Em xuất hiện lâu rồi, anh không thấy à?", "A?", "Có chuyện gì vậy, anh nhìn đi. khó chịu? "," Tiền bối, ta ... "," ... ", "Tiền bối, tốt nghiệp rồi, không biết tiếp theo nên làm cái gì?", "Tìm việc, không khó để tìm được một công việc đúng với khả năng của mình.", "Nó không khó, nhưng, nhưng tôi không muốn ...", "Uh, bạn muốn làm gì?", "Tôi nghĩ ...", "Nói đi, bạn đang làm gì vậy? Đây không phải là tính cách của bạn!", "Tôi muốn trở thành một nhà thiết kế! Nhà thiết kế trang phục!", "Được rồi, nếu bạn có lý tưởng rõ ràng, hãy nỗ lực để hiện thực hóa nó!", "Nhưng tôi không biết gì cả?", "Bất cứ ai cũng bắt đầu từ bước đầu tiên. Chỉ cần nó bắt đầu thì cũng chưa muộn.", "Em có cả người mẫu, ngay cả thiết kế quần áo cũng không có chỗ để khoe ...", "Hahaha ...", "Em cười cái gì vậy?", "Em đẹp quá, và bạn là người giỏi nhất. Người mẫu, quần áo 6 điểm, hiệu ứng 9 điểm đối với bạn, đừng lãng phí một tài năng tốt như vậy. "," Thật không? ", "Ừ, chăm chỉ đi, ta sẽ tiếp tục hỗ trợ ngươi."],
                        ["Chương 2 - Thiết kế", "Zhixia đang tiến tới ước mơ của mình, nhưng ước mơ không dễ thành hiện thực, mặc dù cô ấy làm việc rất chăm chỉ.", "Zhixia, dạo này em bị sao vậy, sao em trông bơ phờ vậy?", "Có lẽ em không thích hợp làm nhà thiết kế?", "Đã lùi bước sớm vậy?", "Nó không phải là co lại. Tôi đã làm việc chăm chỉ và thiết kế một số quần áo đẹp, nhưng không ai quan tâm đến nó ...", "Điều này là không thể tránh khỏi!", "A!", "Bạn có biết bạn thiếu gì nhất không?", "What?", "Fame? Không nổi tiếng, nếu tác phẩm của tân binh của bạn nổi tiếng, thì quái!", "Tôi phải làm gì đây?", "Vừa rồi có một bữa tiệc hóa trang lớn ở trường. Bạn có thể thêm quần áo do mình thiết kế và mang đến hiện trường. Biết đâu nó sẽ tăng thêm danh tiếng cho bạn?", "Thật không?", "Thử đi, thử thì tốt hơn là không làm nó. "," Hừ! "],
                        ["Chương 3 - thành tựu nho nhỏ", "Trong bữa tiệc hóa trang lần trước, Zhixia đã trưng bày tại chỗ những bộ trang phục đẹp đẽ khác nhau. Bởi vì thiết kế xuất sắc, Zhixia đã tích lũy được một chút danh tiếng trong giới, có thể rất nhỏ. Nhưng đây là lần đầu tiên bước tới thành công. ", "Xin chào, chị Zhixia!", "A! Chị phải không?", "Em tên là Yuna. Em thật may mắn khi nhìn thấy những bộ trang phục tuyệt đẹp mà chị đã thiết kế bởi Senpai lần trước trong buổi tiệc hóa trang! Em rất thích!", "A, thật là bình thường!", "Chị ơi, chị có thể thiết kế cho em một bộ quần áo được không? Và cả các bạn cùng lớp nữa!", "Tất nhiên rồi!"],
                        ["Chương 4 - chào mừng mùa hè", "Zhixia bắt đầu đạt được những thành tựu nhỏ trên con đường thiết kế thời trang, nhưng cô ấy cũng gặp phải một nút thắt cổ chai. Cô ấy sẽ thiết kế tất cả các loại quần áo ưa nhìn, nhưng chỉ cần ưa nhìn. Cô ấy cần một đột phá! ", "Zhixia, chúc mừng! Ngươi hiện tại càng ngày càng gần lý tưởng!", "Cám ơn tiền bối!", "Chỉ là...... Ta quả thực càng ngày càng gần lý tưởng, nhưng cũng càng ngày càng xa.", "Tiền bối, ngươi đã từng nghĩ tới chưa? Trên đời có ngàn vạn quần áo đẹp, nhưng có mấy người. còn nhớ những bộ quần áo này không? Ai đã thiết kế lại nó? "," Không ... ", "Có hàng ngàn bộ quần áo đẹp, nhưng chỉ có một số nhà thiết kế quen thuộc với bạn.", "Bởi vì những người đó có phong cách độc đáo của riêng họ, mọi người có thể nhìn thấy quần áo họ thiết kế và biết rằng họ là họ. chỉ nhớ những bộ quần áo đẹp như thế nào! "," Điều này ... Tôi không bao giờ nghĩ rằng Zhixia có thể có cái nhìn sâu sắc về thiết kế quần áo sớm như vậy! "," Tôi không thể tìm thấy phương hướng bây giờ ... "," Zhixia, bạn thấy mùa hạ có đẹp không? "," Tất nhiên, mặt trời trong mùa hè là bài thơ đẹp nhất! "," Zhixia, Zhixia, bạn có biết phong cách của mình là gì không? "," Biết là mùa hè !! ! "],
                        ["Chương 5 - Cuộc thi thiết kế", "Zhixia đã xác định được phong cách riêng của mình đã bắt đầu tỏa sáng trên con đường thiết kế thời trang, thậm chí cuộc thi thiết kế thời trang quốc gia hàng năm cũng chủ động gửi thư mời như cô ấy.", "Cô Zhixia nhận được thư mời tham gia cuộc thi thiết kế thời trang? "," Đã nhận. "," Bạn sẽ tham gia chứ? "," Tôi không rõ về điều này, tôi cần chuẩn bị trước khi đưa ra quyết định. "," Vậy hãy chờ quyết định của cô Zhixia . "," Tiền bối, em có nên tham gia không? "," Tất nhiên, đây là lý tưởng của anh. Chỉ cần đạt thứ hạng tốt, lý tưởng của anh sẽ thành hiện thực! "," Nhưng nếu thất bại thì sao? "," Rồi sẽ đến năm sau trở lại, ngươi còn trẻ, còn có cơ hội, hơn nữa còn có ta hỗ trợ! "," Cám ơn tiền bối! "],
                        ["Chương 6 - Thành công và Danh vọng", "Cùng với cuộc thi thiết kế thời trang, Zhixia đã đạt thành tích xuất sắc. Cuối cùng Zhixia đã nhận ra lý tưởng ban đầu của mình và trở thành một nhà thiết kế thời trang. Tuy nhiên, Zhixia hiểu rằng đây là con đường thiết kế thời trang của cô. Đó là một điểm sáng, nhưng nó không có nghĩa là đỉnh cao nhất, cũng không phải là điểm kết thúc. "," Zhixia, xin chúc mừng, chúc mừng cuối cùng bạn đã nhận ra lý tưởng ban đầu của mình và trở thành một nhà thiết kế thời trang thành công! ", "Cảm ơn tiền bối, thành công của em không thể tách rời sự hỗ trợ và hướng dẫn của anh, tiền bối!", "Vậy em định làm gì tiếp theo, Zhixia?", "Thiết kế quần áo!", "Không phải em đã thành công rồi sao?", "Đúng, nhưng lý tưởng của tôi là trở thành một nhà thiết kế thời trang và sau đó thiết kế quần áo, hơn là thiết kế quần áo và cuối cùng trở thành một nhà thiết kế thời trang!", "Haha, Zhixia, hy vọng anh có thể thiết kế nhiều bộ quần áo đẹp hơn nữa!", "Cảm ơn tiền bối!"],
                        ["Extras: The Kiss of the Midie", "The Kiss of the Midie: Quý tộc và cám dỗ không mâu thuẫn với nhau. Tôi theo đuổi sự cao quý, nhưng điều đó không ngăn cản tôi đầy cám dỗ, giống như chiếc đĩa thủy tinh chết chóc, cao quý, nhưng cũng đầy cám dỗ. Dẫu biết một nụ hôn Anh sẽ chết, nhưng anh không thể không cho những con thiêu thân lao vào lửa, tỏa sáng huy hoàng giây phút ấy! "],
                        ["Fan Wai Pian Wandering in the Sea of ​​Stars", "Wandering in the Sea of ​​Stars: Từ xa xưa, loài người luôn tò mò về các vì sao trên bầu trời, nhưng bị giới hạn bởi khả năng của mình, con người chỉ có thể mơ ước. lang thang trong biển sao. Cuối cùng, một ngày nào đó, một nhà thiết kế trang phục xuất chúng sẽ lên trời. Những ngôi sao của tôi được điểm xuyết trên quần áo của tôi, như thể đây là cách những người mặc trang phục này có thể đi lang thang trên biển Những ngôi sao. "],
                        ["Fan Ngoại Chương Khoảng Cách Bóng Hoa", "Khoảng Cách Bóng Hoa: Có hoa đẹp trong bình. Có gương trên tường. Gương phản chiếu hoa trong bình trên bàn. Hoa trong bình cũng đẹp và xinh đẹp. Rất dày vò, dày vò bởi ánh nắng mặt trời, nước trong chai gần như cạn kiệt, và cuối cùng bông hoa trong chai cũng héo úa, và bông hoa trong gương cũng chết ngay lúc cô nhận ra rằng mình thực sự không nên cười với bông hoa trong chai, cô ấy nên chia sẻ niềm vui và nỗi buồn với bông hoa trong chai., cùng nhau đối mặt với số phận! "],
                        ["The Extra Extra Elves Hymn", "Elves Hymn: Elves, chủng tộc đẹp nhất trên thế giới, nhưng sắc đẹp không chỉ là lời ca tụng, mà còn là bi kịch. Do sự ghen tị của các vị thần, cuối cùng họ đã biến mất vào dòng sông dài của lịch sử, Chỉ để lại truyền thuyết. Thiết kế trang phục Để tái hiện vẻ đẹp của thần tiên, cô giáo đã thiết kế bộ trang phục này. Tuy không phản ánh hết vẻ đẹp của thần tiên nhưng cũng khiến người ta kinh ngạc "],
                        ["Fan Extra Story Foggy Night Aria", "Fog Night Aria: Bầu trời đêm tối dường như có những điểm sáng, và dường như có mây và khói dưới những điểm sáng. Không, đó không phải là mây và khói mà là một phần mơ hồ của lòng em Lòng em như dâng trào Sóng, lăn lộn không biết trôi về đâu: lòng em như thân cây mùa thu buồn, nhìn lá rơi bên em, em đừng ' Tôi không biết phải làm gì, nhưng tôi không biết phải nói thế nào. Mây và khói hòa vào một đêm mù sương. "]
                    ], e.order = [
                        [0, 1, 4, 3, 4, 3, 4, 3, 4, 1, 5, 3, 6, 3, 1],
                        [0, 1, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4],
                        [0, 1, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3],
                        [0, 1, 7, 3, 7, 3, 7, 3],
                        [0, 1, 4, 3, 4, 3, 4, 3, 3, 4, 3, 4, 3, 4, 3],
                        [0, 1, 5, 3, 5, 3, 5, 3, 4, 3, 4, 3],
                        [0, 1, 4, 3, 4, 3, 4, 3, 4, 3],
                        [0, 1],
                        [0, 1],
                        [0, 1],
                        [0, 1],
                        [0, 1]
                    ], e.plotMain = null, e.plotEssence = null, e.introduce = null, e.prologue = null, e.duihua1 = null, e.duihua2 = null, e.talkSprite = null, e.zhangjie = null, e.talkRect = null, e.conent = null, e.headFrame = [], e.storyFrame = [], e.titleFrame = [], e.limit = [0, 5, 10, 20, 25, 30], e.brief = [
                        ["Cuộc thi thiết kế thời trang hàng năm sắp bước vào vòng chung kết cuối cùng rồi ...", "Sắp đến mùa tốt nghiệp, Zhixia gặp phải một vấn đề khó khăn trong cuộc sống.", "Zhixia đang tiến tới ước mơ của mình, nhưng ước mơ thì không. rất dễ đạt được. "],
                        ["Zhi Xia có một chút danh tiếng, có thể nhỏ, nhưng đây là bước đầu tiên dẫn đến thành công.", "Zhi Xia đã gặp phải nút thắt trên con đường thiết kế thời trang, cô ấy cần phải bứt phá!", "Zhi Xia nhận được thư mời cho Cuộc thi Thiết kế Thời trang Quốc gia hàng năm. "],
                        ["Thành công của Zhixia không phải là kết thúc, mà là điểm bắt đầu.", "Quý tộc và cám dỗ không mâu thuẫn với nhau. Tôi theo đuổi sự cao quý, nhưng điều đó không ngăn cản tôi đầy cám dỗ.", "Đặt những vì sao trên bầu trời vào tôi quần áo, cơ thể Những người mặc quần áo này có thể đi dạo quanh biển sao. "],
                        ["Trong bình có những bông hoa xinh đẹp, và tấm gương phản chiếu những bông hoa trong bình trên bàn.", "Yêu tinh, chủng tộc đẹp nhất trên thế giới, nhưng sắc đẹp không chỉ là lời ca tụng, mà còn là bi kịch.", " bầu trời đêm đen dường như Có những điểm sáng, và dường như có những đám mây dưới những điểm sáng, không, đó là trái tim mờ mịt của tôi. "]
                    ], e.wordIndex = 0, e.plotIndex = 0, e.isAuto = !1, e.isScene = !1, e.isCanTouch = !1, e
                }
                return n(e, t), e.prototype.start = function() {
                    var t = this;
                    this.talkRect.on(cc.Node.EventType.TOUCH_END, this.onClickSplot, this, !0);
                    for (var e = 0, i = 0; i < 4; i++) {
                        var n = cc.instantiate(this.zhangjie);
                        this.conent.addChild(n), this.node.getComponent(c.default).pageAll.push(n);
                        for (var o = 0; o < 3; o++) {
                            var a = n.getChildByName("zhang" + (o + 1)),
                                r = a.getChildByName("bai"),
                                l = a.getChildByName("hei"),
                                h = a.getChildByName("Button").getComponent(cc.Button);
                            r.getChildByName("zhanga01").getComponent(cc.Sprite).spriteFrame = this.titleFrame[e], l.getChildByName("zhangb01").getComponent(cc.Sprite).spriteFrame = this.titleFrame[e], r.getChildByName("Label").getComponent(cc.Label).string = this.brief[i][o];
                            var u = new cc.Component.EventHandler;
                            if (u.target = this.node, u.component = "PlotSet", u.handler = "IntoPlotLevel", u.customEventData = e.toString(), h.clickEvents.push(u), r.getComponent(cc.Button).clickEvents.push(u), 0 != s.default.getInstance().story[e]) l.active = !1, a.getChildByName("Button").getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.storyFrame[e];
                            e++
                        }
                    }
                    cc.tween(this.node).delay(1).call(function() {
                        t.conent.getComponent(cc.Layout).enabled = !1
                    }).start()
                }, e.prototype.OpenPlotScene = function() {
                    if (a.default.getInstance().PlayBtAudio(3), this.node.active = !0, this.plotEssence.getChildByName("Back").active = !0, this.plotEssence.getChildByName("Button1").active = !1, 4 == this.conent.childrenCount)
                        for (var t = 0, e = 0; e < 4; e++)
                            for (var i = 0; i < 3; i++) {
                                if (0 != s.default.getInstance().story[t]) {
                                    var n = this.conent.children[e].getChildByName("zhang" + (i + 1));
                                    n.getChildByName("hei").active = !1, n.getChildByName("Button").getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.storyFrame[t]
                                }
                                t++
                            }
                    l.default.getInstance().isCurrentMain = !1
                }, e.prototype.ClosePlotScene = function() {
                    a.default.getInstance().PlayBtAudio(3), this.node.active = !1
                }, e.prototype.RefreshStory = function() {
                    for (var t = 0, e = 0; e < 4; e++)
                        for (var i = this.conent.children[e], n = 0; n < 3; n++) {
                            var o = i.getChildByName("zhang" + (n + 1)),
                                a = o.getChildByName("hei");
                            if (0 != s.default.getInstance().story[t]) a.active = !1, o.getChildByName("Button").getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.storyFrame[t];
                            t++
                        }
                }, e.prototype.onClickSplot = function() {
                    this.isCanTouch && (this.isAuto && (this.plotEssence.stopAllActions(), this.isAuto = !1), this.SetPlotLabel())
                }, e.prototype.IntoPlotLevel = function(t, e) {
                    var i = parseInt(e);
                    0 != s.default.getInstance().story[i] ? (this.plotIndex = i, this.plotEssence.active = !0, this.plotMain.active = !0, this.wordIndex = 0, this.isAuto = !1, this.isScene = !1, this.prologue.string = "", this.introduce.string = "", this.duihua1.active = !1, this.duihua2.active = !1, this.plotMain.stopAllActions(), this.plotEssence.stopAllActions(), this.SetPlotLabel()) : i >= 7 ? l.default.getInstance().uiRoot.hint.setHint("Chưa mở khóa!") : l.default.getInstance().uiRoot.hint.setHint("Cấp độ " + this.limit[i - 1] + " mở khóa")
                }, e.prototype.IntoStroy = function(t) {
                    0 != s.default.getInstance().story[t] && (this.plotIndex = t, this.plotEssence.active = !0, this.wordIndex = 0, this.isAuto = !1, this.prologue.string = "", this.introduce.string = "", this.duihua1.active = !1, this.duihua2.active = !1, h.default.getInstance().achieveTrigger[1] = !1, this.talkRect.on(cc.Node.EventType.TOUCH_END, this.onClickSplot, this, !0), this.SetPlotLabel())
                }, e.prototype.SetPlotLabel = function() {
                    var t = this,
                        e = this;
                    this.isCanTouch = !1, this.duihua1.active = !1, this.duihua2.active = !1;
                    var i = this.plotIndex;
                    if (this.wordIndex >= this.order[i].length) return this.plotEssence.stopAllActions(), this.isAuto = !1, void(this.isScene && (this.CloseMainStory(), this.isScene = !1));
                    if (0 == this.order[i][this.wordIndex]) {
                        this.prologue.string = this.plot[i][this.wordIndex], this.prologue.node.opacity = 0;
                        var n = cc.fadeIn(1),
                            o = cc.callFunc(function() {
                                e.wordIndex + 1 < e.order[i].length && (e.plotEssence.stopAllActions(), cc.tween(e.plotEssence).delay(2).call(function() {
                                    e.SetPlotLabel()
                                }).start()), e.isCanTouch = !0, e.wordIndex++
                            });
                        this.prologue.node.runAction(cc.sequence(n, o, null))
                    } else if (1 == this.order[i][this.wordIndex]) {
                        this.introduce.string = this.plot[i][this.wordIndex], this.introduce.node.opacity = 0;
                        n = cc.fadeIn(1), o = cc.callFunc(function() {
                            e.wordIndex + 1 < e.order[i].length ? (e.plotEssence.stopAllActions(), cc.tween(e.plotEssence).delay(2).call(function() {
                                e.SetPlotLabel()
                            }).start()) : e.isScene && (e.CloseMainStory(), e.isScene = !1), e.isCanTouch = !0, e.wordIndex++
                        });
                        this.introduce.node.runAction(cc.sequence(n, o, null))
                    } else if (3 == this.order[i][this.wordIndex]) {
                        this.duihua1.active = !0, this.duihua1.getChildByName("Label").getComponent(cc.Label).string = this.plot[i][this.wordIndex], (l = this.duihua1.getChildByName("juqing13")).stopAllActions();
                        var a = cc.tween().to(.5, {
                            position: cc.v2(263, -60)
                        }).to(.5, {
                            position: cc.v2(263, -69)
                        });
                        cc.tween(l).then(a).repeatForever().start(), this.isAuto && (this.wordIndex + 1 < this.order[i].length ? (this.plotEssence.stopAllActions(), cc.tween(this.plotEssence).delay(2).call(function() {
                            t.SetPlotLabel()
                        }).start()) : this.isScene && (this.CloseMainStory(), this.isScene = !1)), this.isCanTouch = !0, this.wordIndex++
                    } else {
                        for (var s = 0, c = this.headFrame; s < c.length; s++) {
                            var r = c[s];
                            if (r.name == "head0" + this.order[i][this.wordIndex]) {
                                this.talkSprite.spriteFrame = r, 5 == this.order[i][this.wordIndex] ? this.duihua2.getChildByName("duihua04").getChildByName("Label").getComponent(cc.Label).string = "Chị cả" : this.duihua2.getChildByName("duihua04").getChildByName("Label").getComponent(cc.Label).string = "Cấp cao";
                                break
                            }
                        }
                        var l;
                        this.duihua2.active = !0, this.duihua2.getChildByName("Label").getComponent(cc.Label).string = this.plot[i][this.wordIndex], (l = this.duihua2.getChildByName("juqing13")).stopAllActions();
                        a = cc.tween().to(.5, {
                            position: cc.v2(-263, -60)
                        }).to(.5, {
                            position: cc.v2(-263, -69)
                        });
                        cc.tween(l).then(a).repeatForever().start(), this.isAuto && (this.wordIndex + 1 < this.order[i].length ? (this.plotEssence.stopAllActions(), cc.tween(this.plotEssence).delay(2).call(function() {
                            t.SetPlotLabel()
                        }).start()) : this.isScene && (this.CloseMainStory(), this.isScene = !1)), this.isCanTouch = !0, this.wordIndex++
                    }
                }, e.prototype.ShowSpecialStory = function(t) {
                    this.plotEssence.active = !0, this.plotEssence.opacity = 0;
                    var e = this,
                        i = cc.fadeIn(1),
                        n = cc.callFunc(function() {
                            e.SetPlotLabel()
                        });
                    this.plotEssence.runAction(cc.sequence(i, n, null))
                }, e.prototype.AutoPlotPlay = function() {
                    var t = this;
                    this.isAuto = !0, this.plotEssence.stopAllActions(), cc.tween(this.plotEssence).delay(2).call(function() {
                        t.SetPlotLabel()
                    }).start()
                }, e.prototype.ClosePlot = function() {
                    this.unscheduleAllCallbacks(), this.plotMain.stopAllActions(), this.plotEssence.stopAllActions(), this.prologue.node.stopAllActions(), this.introduce.node.stopAllActions(), this.isAuto = !1, this.plotEssence.active = !1, this.plotMain.active = !0
                }, e.prototype.CloseMainStory = function() {
                    this.unscheduleAllCallbacks(), this.plotMain.stopAllActions(), this.plotEssence.stopAllActions(), this.prologue.node.stopAllActions(), this.introduce.node.stopAllActions(), this.isAuto = !1, this.plotEssence.active = !1, 2 == s.default.getInstance().plotIndex && r.default.getInstance().SetTeachOpen(), s.default.getInstance().plotIndex += 1, s.default.getInstance().missionType[3] += 1, s.default.getInstance().saveData(), l.default.getInstance().isCurrentMain = !0
                }, o([p(cc.Node)], e.prototype, "plotMain", void 0), o([p(cc.Node)], e.prototype, "plotEssence", void 0), o([p(cc.Label)], e.prototype, "introduce", void 0), o([p(cc.Label)], e.prototype, "prologue", void 0), o([p(cc.Node)], e.prototype, "duihua1", void 0), o([p(cc.Node)], e.prototype, "duihua2", void 0), o([p(cc.Sprite)], e.prototype, "talkSprite", void 0), o([p(cc.Prefab)], e.prototype, "zhangjie", void 0), o([p(cc.Node)], e.prototype, "talkRect", void 0), o([p(cc.Node)], e.prototype, "conent", void 0), o([p(cc.SpriteFrame)], e.prototype, "headFrame", void 0), o([p(cc.SpriteFrame)], e.prototype, "storyFrame", void 0), o([p(cc.SpriteFrame)], e.prototype, "titleFrame", void 0), e = o([d], e)
            }(cc.Component);
        i.default = g, cc._RF.pop()
    }, {
        "./Achievement": "Achievement",
        "./AudioManager": "AudioManager",
        "./ChangeMenu": "ChangeMenu",
        "./GameLocalData": "GameLocalData",
        "./GameManger": "GameManger",
        "./StorySet": "StorySet"
    }],
    RankSet: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "7c296bXL1JH+rvi9XeQTjnj", "RankSet");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./GameLocalData"),
            s = t("./Achievement"),
            c = cc._decorator,
            r = c.ccclass,
            l = c.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.phbPrefab = null, e.contNode = null, e.playerRank = null, e.rankNode = null, e.randTs = 0, e.isRand = !1, e.repeatName = [], e.rankItems = [], e.peoNames = [], e.sortScore = [], e.repeatScore = [], e.rankingScore = [
                        [3e4, 35840],
                        [25e3, 3e4],
                        [15e3, 25e3],
                        [7500, 15e3],
                        [2500, 7500],
                        [500, 2500],
                        [0, 500]
                    ], e.rankingLev = [
                        [1, 10],
                        [11, 100],
                        [101, 1e3],
                        [1001, 5e3],
                        [5001, 1e4],
                        [1e4, 3e4],
                        [3e4, 1e5]
                    ], e
                }
                return n(e, t), e.prototype.onLoad = function() {
                    for (var t = this, e = 0; e < 10; e++) {
                        var i = cc.instantiate(this.phbPrefab);
                        this.contNode.addChild(i), this.rankItems.push(i)
                    }
                    cc.loader.loadRes("name", cc.JsonAsset, function(e, i) {
                        t.peoNames = i.json.name, t.CheckRank()
                    })
                }, e.prototype.start = function() {
                    this.InitPlayer()
                }, e.prototype.update = function(t) {
                    this.isRand && (this.randTs += t, this.randTs >= 360 && (this.randTs = 0, this.RandScore(), this.InitPlayer()))
                }, e.prototype.ShowRank = function() {
                    /* window.h5api.showRankList();
                    return;
                    this.isRand = !0, this.rankNode.active = !0, this.rankNode.setScale(0), cc.tween(this.rankNode).to(.25, {
                        scale: 1.25
                    }).to(.1, {
                        scale: 1
                    }).start(), s.default.getInstance().achieveTrigger[3] && this.InitPlayer(), s.default.getInstance().achieveTrigger[3] = !1 */
					console.log("5553");
                }, e.prototype.CloseRank = function() {
                    this.rankNode.active = !1
                }, e.prototype.CheckRank = function() {
                    this.repeatScore.splice(0);
                    for (var t = 0; t < 10; t++) {
                        for (var e = 0, i = !1; !i;) {
                            i = !0, e = Math.floor(Math.random() * (this.rankingScore[0][1] - this.rankingScore[0][0]) + this.rankingScore[0][0]);
                            for (var n = 0; n < this.repeatScore.length; n++) {
                                if (e == this.repeatScore[n]) {
                                    i = !1;
                                    break
                                }
                            }
                        }
                        this.sortScore.push(e), this.repeatScore.push(e)
                    }
                    this.sortScore.sort(), this.repeatName.splice(0);
                    for (t = 0; t < 10; t++) {
                        var o = this.rankItems[t],
                            a = o.getChildByName("score").getComponent(cc.Label),
                            s = o.getChildByName("name").getComponent(cc.Label),
                            c = o.getChildByName("mingci").getComponent(cc.Label);
                        0 == t ? (o.getChildByName("mingci").active = !1, o.getChildByName("phb04").active = !0) : 1 == t ? (o.getChildByName("mingci").active = !1, o.getChildByName("phb05").active = !0) : 2 == t && (o.getChildByName("mingci").active = !1, o.getChildByName("phb06").active = !0);
                        var r = "";
                        for (i = !1; !i;) {
                            i = !0, r = this.peoNames[Math.floor(Math.random() * (this.peoNames.length - 0) + 0)];
                            for (var l = 0; l < this.repeatName.length; l++) {
                                if (r == this.repeatName[l]) {
                                    i = !1;
                                    break
                                }
                            }
                        }
                        s.string = r, c.string = t + 1 + "", a.string = this.sortScore[9 - t] + "", this.repeatName.push(r)
                    }
                }, e.prototype.RandScore = function() {
                    for (var t = [], e = 0; e < 5; e++) {
                        for (var i = !0, n = 0; i;) {
                            i = !1, n = Math.floor(10 * Math.random() + 0);
                            for (var o = 0; o < t.length; o++)
                                if (n == t[o]) {
                                    i = !0;
                                    break
                                }
                        }
                        t.push(n)
                    }
                    for (o = 0; o < t.length; o++)
                        for (var a = 0; a < this.repeatName.length; a++)
                            if (this.repeatName[t[o]] == this.repeatName[a]) {
                                this.repeatName.splice(a, 1), this.sortScore.splice(a, 1), this.repeatScore.splice(a, 1);
                                break
                            } for (o = 0; o < 5; o++) {
                        for (var s = 0, c = !1; !c;) {
                            c = !0, s = Math.floor(Math.random() * (this.rankingScore[0][1] - this.rankingScore[0][0]) + this.rankingScore[0][0]);
                            for (var r = 0; r < this.repeatScore.length; r++) {
                                if (s == this.repeatScore[r]) {
                                    c = !1;
                                    break
                                }
                            }
                        }
                        this.sortScore.push(s), this.repeatScore.push(s);
                        for (var l = "", h = !1; !h;) {
                            h = !0, l = this.peoNames[Math.floor(Math.random() * (this.peoNames.length - 0) + 0)];
                            for (var u = 0; u < this.repeatName.length; u++) {
                                if (l == this.repeatName[u]) {
                                    h = !1;
                                    break
                                }
                            }
                        }
                        this.repeatName.push(l)
                    }
                    this.sortScore.sort();
                    for (a = 0; a < 10; a++) {
                        var d = this.rankItems[a],
                            p = d.getChildByName("score").getComponent(cc.Label),
                            g = d.getChildByName("name").getComponent(cc.Label),
                            f = d.getChildByName("mingci").getComponent(cc.Label);
                        g.string = this.repeatName[a], f.string = a + 1 + "", p.string = this.sortScore[9 - a] + ""
                    }
                }, e.prototype.InitPlayer = function() {
                    var t = a.default.getInstance().maxRankScore;
                    this.playerRank.getChildByName("name").getComponent(cc.Label).string = "Của tôi", this.playerRank.getChildByName("score").getComponent(cc.Label).string = t + "111";
                    for (var e = 0; e < this.rankingScore.length; e++)
                        if (t >= this.rankingScore[e][0] && t <= this.rankingScore[e][1]) {
                            0 == e && (this.playerRank.getChildByName("mingci").active = !1, this.playerRank.getChildByName("phb04").active = !0);
                            var i = Math.floor(Math.random() * (this.rankingLev[e][1] - this.rankingLev[e][0]) + this.rankingLev[e][0]);
                            this.playerRank.getChildByName("mingci").getComponent(cc.Label).string = i + "", a.default.getInstance().rankLev = i;
                            break
                        }
                }, o([l(cc.Prefab)], e.prototype, "phbPrefab", void 0), o([l(cc.Node)], e.prototype, "contNode", void 0), o([l(cc.Node)], e.prototype, "playerRank", void 0), o([l(cc.Node)], e.prototype, "rankNode", void 0), e = o([r], e)
            }(cc.Component);
        i.default = h, cc._RF.pop()
    }, {
        "./Achievement": "Achievement",
        "./GameLocalData": "GameLocalData"
    }],
    SignIn: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "1d3feUpSgNAJqOM9f+480QE", "SignIn");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./GameLocalData"),
            s = t("./GameManger"),
            c = t("./AssetsManager"),
            r = t("./MainUI"),
            l = t("./GameTeaching"),
            h = t("./AdsMananger"),
            u = cc._decorator,
            d = u.ccclass,
            p = u.property,
            g = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.mainUI = null, e.jiangli = null, e.signInUI = null, e.getUI = null, e.doubleGetUI = null, e.effect = null, e.lateToggle = null, e.signInNode = [], e.mainLabel = null, e.rewardIcon = null, e.goldIcon = null, e.dimoIcon = null, e.priceReward = [.5, 1, 50, 2, 30, 100, 150], e.isClear = [!1, !1, !1], e.rewardTag = [0, 0, 0], e.isDaily = !1, e
                }
                return n(e, t), e.prototype.start = function() {
                    l.default.getInstance().isTeachOver && this.GetDataDay() != (new Date).getDate() ? this.scheduleOnce(this.ShowSignInUI, 1) : this.scheduleOnce(this.DelayPopued, .65), this.rewardIcon = this.jiangli.getChildByName("di04").getChildByName("lixian05"), this.goldIcon = this.jiangli.getChildByName("di04").getChildByName("lixian03"), this.dimoIcon = this.jiangli.getChildByName("di04").getChildByName("lixian04"), this.mainLabel = this.jiangli.getChildByName("di04").getChildByName("main03"), this.jiangli.getChildByName("Button2").active = !1
                }, e.prototype.update = function(t) {
                    this.isDaily && (this.GetDataDay() != (new Date).getDate() && this.scheduleOnce(this.ShowSignInUI, 1), this.isDaily = !1)
                }, e.prototype.DelayPopued = function() {
                    this.mainUI.getComponent(r.default).PoppedUpComposeUI()
                }, e.prototype.ShowSignInUI = function() {
                    this.lateToggle.isChecked = !0, this.signInUI.active = !0, this.signInUI.setScale(0), cc.tween(this.signInUI).to(.25, {
                        scale: 1.25
                    }).to(.1, {
                        scale: 1
                    }).start(), this.CheckSignIn()
                }, e.prototype.CloseSignInUI = function() {
                    this.signInUI.active = !1, this.mainUI.getComponent(r.default).PoppedUpComposeUI()
                }, e.prototype.CheckSignIn = function() {
                    for (var t = 0; t < this.GetDailyDay() - 1; t++) {
                        this.signInNode[t].getChildByName("Sign06").active = !0
                    }
                    this.GetDataDay() != (new Date).getDate() ? (this.Setqiandao(1), this.getUI.active = !0) : (this.Setqiandao(2), this.getUI.active = !1);
                    for (var e = 0; e < 3; e++) {
                        var i = !1,
                            n = 0,
                            o = [];
                        0 == e ? o = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14] : 1 == e ? o = [0, 1, 2, 3, 4, 15, 16, 17, 18, 19] : 2 == e && (o = [20, 21, 22, 23, 24, 25]);
                        for (t = 0; t < o.length; t++)
                            if (-1 == a.default.getInstance().specialLevels[o[t]]) {
                                n = o[t], this.rewardTag[e] = n, i = !0;
                                break
                            } 0 == e ? i ? (this.signInNode[1].getChildByName("main02").active = !1, this.signInNode[1].getChildByName("Label").active = !1, this.isClear[0] = !0) : (this.signInNode[1].getChildByName("gift").active = !1, this.signInUI.getChildByName("di01").getChildByName("Button3").active = !1) : 1 == e ? i ? (this.signInNode[1].getChildByName("main02").active = !1, this.signInNode[4].getChildByName("Label").active = !1, this.isClear[1] = !0) : (this.signInNode[1].getChildByName("gift").active = !1, this.signInUI.getChildByName("di01").getChildByName("Button3").active = !1) : 2 == e && (i ? (this.signInNode[1].getChildByName("main02").active = !1, this.signInNode[6].getChildByName("Label").active = !1, this.isClear[2] = !0) : (this.signInNode[1].getChildByName("gift").active = !1, this.signInUI.getChildByName("di01").getChildByName("Button3").active = !1))
                    }
                }, e.prototype.onClickDouble = function() {
                    /* var t = this;
                    this.Getqiandao() && h.default.GetInstance().ShowRewardVideo(function() {
                        return t.SigInOnClick(null, "2")
						console.log("jjjjjjjjfdf");
                    }) */
					if (this.Getqiandao()) {
                        this.dimoIcon.active = !1, this.rewardIcon.active = !1, this.goldIcon.active = !1, this.mainLabel.active = !1, e = parseInt(e), this.Setqiandao(2);
                        var i = this.GetDailyDay();
                        if (1 == i) {
                            var n = 0;
                            1 == e ? n = a.default.getInstance().secGoldCoinNum * (60 * this.priceReward[0] * 60) : (n = a.default.getInstance().secGoldCoinNum * (60 * this.priceReward[0] * 60), n *= 2), a.default.getInstance().setGoldCoinNum(a.default.getInstance().getGoldCoinNum() + n), this.goldIcon.active = !0, this.mainLabel.active = !0, this.mainLabel.getChildByName("Label").getComponent(cc.Label).string = "+" + s.default.getInstance().RetainInt(n, 2)
                        } else if (2 == i)
                            if (this.isClear[0]) this.mainUI.getComponent(r.default).BuildSpecialOneItem(this.rewardTag[0]), this.rewardIcon.active = !0, this.rewardIcon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(c.default.getInstance().iconSpecials[this.rewardTag[0]]), this.effect.color = new cc.Color(126, 211, 251), this.mainLabel.active = !0, this.mainLabel.getChildByName("Label").getComponent(cc.Label).string = "+ 1";
                            else {
                                n = 0;
                                1 == e ? n = a.default.getInstance().secGoldCoinNum * (60 * this.priceReward[1] * 60) : (n = a.default.getInstance().secGoldCoinNum * (60 * this.priceReward[1] * 60), n *= 2), a.default.getInstance().setGoldCoinNum(a.default.getInstance().getGoldCoinNum() + n), this.goldIcon.active = !0, this.mainLabel.active = !0, this.mainLabel.getChildByName("Label").getComponent(cc.Label).string = "+" + s.default.getInstance().RetainInt(n, 2)
                            }
                        else if (3 == i) {
                            var o = 0;
                            1 == e ? o = this.priceReward[2] : (o = this.priceReward[2], o *= 2), s.default.getInstance().uiRoot.hint.setHint("Nhận kim cương" + o), a.default.getInstance().setDiamondsnNum(a.default.getInstance().getDiamondsNum() + o), this.dimoIcon.active = !0, this.mainLabel.active = !0, this.mainLabel.getChildByName("Label").getComponent(cc.Label).string = "+" + o
                        } else if (4 == i) {
                            n = 0;
                            1 == e ? n = a.default.getInstance().secGoldCoinNum * (60 * this.priceReward[3] * 60) : (n = a.default.getInstance().secGoldCoinNum * (60 * this.priceReward[3] * 60), n *= 2), a.default.getInstance().setGoldCoinNum(a.default.getInstance().getGoldCoinNum() + n), this.goldIcon.active = !0, this.mainLabel.active = !0, this.mainLabel.getChildByName("Label").getComponent(cc.Label).string = "+" + s.default.getInstance().RetainInt(n, 2)
                        } else if (5 == i)
                            if (this.isClear[1]) this.mainUI.getComponent(r.default).BuildSpecialOneItem(this.rewardTag[1]), this.rewardIcon.active = !0, this.rewardIcon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(c.default.getInstance().iconSpecials[this.rewardTag[1]]), this.effect.color = new cc.Color(178, 108, 253), this.mainLabel.active = !0, this.mainLabel.getChildByName("Label").getComponent(cc.Label).string = "+ 1";
                            else {
                                o = 0;
                                1 == e ? o = this.priceReward[4] : (o = this.priceReward[4], o *= 2), a.default.getInstance().setDiamondsnNum(a.default.getInstance().getDiamondsNum() + o), this.dimoIcon.active = !0, this.mainLabel.active = !0, this.mainLabel.getChildByName("Label").getComponent(cc.Label).string = "+" + o
                            }
                        else if (6 == i) {
                            o = 0;
                            1 == e ? o = this.priceReward[5] : (o = this.priceReward[5], o *= 2), a.default.getInstance().setDiamondsnNum(a.default.getInstance().getDiamondsNum() + o), this.dimoIcon.active = !0, this.mainLabel.active = !0, this.mainLabel.getChildByName("Label").getComponent(cc.Label).string = "+" + o
                        } else if (7 == i)
                            if (this.isClear[2]) this.mainUI.getComponent(r.default).BuildSpecialOneItem(this.rewardTag[2]), this.rewardIcon.active = !0, this.rewardIcon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(c.default.getInstance().iconSpecials[this.rewardTag[2]]), this.effect.color = new cc.Color(236, 250, 5), this.mainLabel.active = !0, this.mainLabel.getChildByName("Label").getComponent(cc.Label).string = "+ 1";
                            else {
                                o = 0;
                                1 == e ? o = this.priceReward[6] : (o = this.priceReward[6], o *= 2), a.default.getInstance().setDiamondsnNum(a.default.getInstance().getDiamondsNum() + o), this.dimoIcon.active = !0, this.mainLabel.active = !0, this.mainLabel.getChildByName("Label").getComponent(cc.Label).string = "+" + o
                            } this.SetDailyDay(i + 1), this.SetDataDay((new Date).getDate()), this.CheckSignIn(), this.ShowJiangLiUI(), a.default.getInstance().saveData()
                    }
					console.log("8954k454kk",t,e,h);
                }, e.prototype.onClickSingle = function() {
                    this.lateToggle.isChecked ? this.onClickDouble() : this.SigInOnClick(null, 1)
                }, e.prototype.SigInOnClick = function(t, e) {
                    if (this.Getqiandao()) {
                        this.dimoIcon.active = !1, this.rewardIcon.active = !1, this.goldIcon.active = !1, this.mainLabel.active = !1, e = parseInt(e), this.Setqiandao(2);
                        var i = this.GetDailyDay();
                        if (1 == i) {
                            var n = 0;
                            1 == e ? n = a.default.getInstance().secGoldCoinNum * (60 * this.priceReward[0] * 60) : (n = a.default.getInstance().secGoldCoinNum * (60 * this.priceReward[0] * 60), n *= 2), a.default.getInstance().setGoldCoinNum(a.default.getInstance().getGoldCoinNum() + n), this.goldIcon.active = !0, this.mainLabel.active = !0, this.mainLabel.getChildByName("Label").getComponent(cc.Label).string = "+" + s.default.getInstance().RetainInt(n, 2)
                        } else if (2 == i)
                            if (this.isClear[0]) this.mainUI.getComponent(r.default).BuildSpecialOneItem(this.rewardTag[0]), this.rewardIcon.active = !0, this.rewardIcon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(c.default.getInstance().iconSpecials[this.rewardTag[0]]), this.effect.color = new cc.Color(126, 211, 251), this.mainLabel.active = !0, this.mainLabel.getChildByName("Label").getComponent(cc.Label).string = "+ 1";
                            else {
                                n = 0;
                                1 == e ? n = a.default.getInstance().secGoldCoinNum * (60 * this.priceReward[1] * 60) : (n = a.default.getInstance().secGoldCoinNum * (60 * this.priceReward[1] * 60), n *= 2), a.default.getInstance().setGoldCoinNum(a.default.getInstance().getGoldCoinNum() + n), this.goldIcon.active = !0, this.mainLabel.active = !0, this.mainLabel.getChildByName("Label").getComponent(cc.Label).string = "+" + s.default.getInstance().RetainInt(n, 2)
                            }
                        else if (3 == i) {
                            var o = 0;
                            1 == e ? o = this.priceReward[2] : (o = this.priceReward[2], o *= 2), s.default.getInstance().uiRoot.hint.setHint("Nhận kim cương" + o), a.default.getInstance().setDiamondsnNum(a.default.getInstance().getDiamondsNum() + o), this.dimoIcon.active = !0, this.mainLabel.active = !0, this.mainLabel.getChildByName("Label").getComponent(cc.Label).string = "+" + o
                        } else if (4 == i) {
                            n = 0;
                            1 == e ? n = a.default.getInstance().secGoldCoinNum * (60 * this.priceReward[3] * 60) : (n = a.default.getInstance().secGoldCoinNum * (60 * this.priceReward[3] * 60), n *= 2), a.default.getInstance().setGoldCoinNum(a.default.getInstance().getGoldCoinNum() + n), this.goldIcon.active = !0, this.mainLabel.active = !0, this.mainLabel.getChildByName("Label").getComponent(cc.Label).string = "+" + s.default.getInstance().RetainInt(n, 2)
                        } else if (5 == i)
                            if (this.isClear[1]) this.mainUI.getComponent(r.default).BuildSpecialOneItem(this.rewardTag[1]), this.rewardIcon.active = !0, this.rewardIcon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(c.default.getInstance().iconSpecials[this.rewardTag[1]]), this.effect.color = new cc.Color(178, 108, 253), this.mainLabel.active = !0, this.mainLabel.getChildByName("Label").getComponent(cc.Label).string = "+ 1";
                            else {
                                o = 0;
                                1 == e ? o = this.priceReward[4] : (o = this.priceReward[4], o *= 2), a.default.getInstance().setDiamondsnNum(a.default.getInstance().getDiamondsNum() + o), this.dimoIcon.active = !0, this.mainLabel.active = !0, this.mainLabel.getChildByName("Label").getComponent(cc.Label).string = "+" + o
                            }
                        else if (6 == i) {
                            o = 0;
                            1 == e ? o = this.priceReward[5] : (o = this.priceReward[5], o *= 2), a.default.getInstance().setDiamondsnNum(a.default.getInstance().getDiamondsNum() + o), this.dimoIcon.active = !0, this.mainLabel.active = !0, this.mainLabel.getChildByName("Label").getComponent(cc.Label).string = "+" + o
                        } else if (7 == i)
                            if (this.isClear[2]) this.mainUI.getComponent(r.default).BuildSpecialOneItem(this.rewardTag[2]), this.rewardIcon.active = !0, this.rewardIcon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(c.default.getInstance().iconSpecials[this.rewardTag[2]]), this.effect.color = new cc.Color(236, 250, 5), this.mainLabel.active = !0, this.mainLabel.getChildByName("Label").getComponent(cc.Label).string = "+ 1";
                            else {
                                o = 0;
                                1 == e ? o = this.priceReward[6] : (o = this.priceReward[6], o *= 2), a.default.getInstance().setDiamondsnNum(a.default.getInstance().getDiamondsNum() + o), this.dimoIcon.active = !0, this.mainLabel.active = !0, this.mainLabel.getChildByName("Label").getComponent(cc.Label).string = "+" + o
                            } this.SetDailyDay(i + 1), this.SetDataDay((new Date).getDate()), this.CheckSignIn(), this.ShowJiangLiUI(), a.default.getInstance().saveData()
                    }
                }, e.prototype.ShowJiangLiUI = function() {
                    var t = this;
                    this.signInUI.active = !1, this.jiangli.active = !0, this.jiangli.setScale(0), cc.tween(this.jiangli).to(.25, {
                        scale: 1.25
                    }).to(.1, {
                        scale: 1
                    }).delay(1.5).call(function() {
                        t.jiangli.active = !1, t.mainUI.getComponent(r.default).PoppedUpComposeUI()
                    }).start()
                }, e.prototype.Setqiandao = function(t) {
                    cc.sys.localStorage.setItem("setqiandaotig", t)
                }, e.prototype.Getqiandao = function() {
                    return 1 == (cc.sys.localStorage.getItem("setqiandaotig") || 1)
                }, e.prototype.SetDailyDay = function(t) {
                    cc.sys.localStorage.setItem("qianDay", t > 7 ? 1 : t)
                }, e.prototype.GetDailyDay = function() {
                    var t = cc.sys.localStorage.getItem("qianDay") || 1;
                    return Number(t)
                }, e.prototype.SetDataDay = function(t) {
                    cc.sys.localStorage.setItem("today", t)
                }, e.prototype.GetDataDay = function() {
                    var t = cc.sys.localStorage.getItem("today") || 0;
                    return Number(t)
                }, o([p(cc.Node)], e.prototype, "mainUI", void 0), o([p(cc.Node)], e.prototype, "jiangli", void 0), o([p(cc.Node)], e.prototype, "signInUI", void 0), o([p(cc.Node)], e.prototype, "getUI", void 0), o([p(cc.Node)], e.prototype, "doubleGetUI", void 0), o([p(cc.Node)], e.prototype, "effect", void 0), o([p(cc.Toggle)], e.prototype, "lateToggle", void 0), o([p(cc.Node)], e.prototype, "signInNode", void 0), e = o([d], e)
            }(cc.Component);
        i.default = g, cc._RF.pop()
    }, {
        "./AdsMananger": "AdsMananger",
        "./AssetsManager": "AssetsManager",
        "./GameLocalData": "GameLocalData",
        "./GameManger": "GameManger",
        "./GameTeaching": "GameTeaching",
        "./MainUI": "MainUI"
    }],
    StorySet: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "6fd57qVjJtBzI4kpf0POwWe", "StorySet");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./GameLocalData"),
            s = t("./PlotSet"),
            c = t("./GameTeaching"),
            r = t("./MainUI"),
            l = t("./Achievement"),
            h = cc._decorator,
            u = h.ccclass,
            d = h.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.main = null, e.storyTip = null, e.story = null, e.teach = null, e.isFrist = !1, e.limit = [0, 5, 10, 20, 25, 30], e.isStroy = [!1, !1, !1, !1, !1, !1], e.specialStr = ["\u606d\u559c\u4f60\u627e\u5230\u8ff7\u8776\u4e4b\u543b\u5957\u88c5\u7684\u7b2c\u4e00\u4ef6\u8863\u670d\uff0c\u5f53\u4f60\u6536\u96c6\u5b8c\u5168\u5957\u8863\u670d\u540e\uff0c\u53ef\u4ee5\u89e3\u9501\u76f8\u5e94\u7684\u5267\u60c5\u3002\u52aa\u529b\u53bb\u6536\u96c6\u5427\uff01", "\u606d\u559c\u4f60\u627e\u5230\u5f9c\u5f89\u661f\u6d77\u5957\u88c5\u7684\u7b2c\u4e00\u4ef6\u8863\u670d\uff0c\u5f53\u4f60\u6536\u96c6\u5b8c\u5168\u5957\u8863\u670d\u540e\uff0c\u53ef\u4ee5\u89e3\u9501\u76f8\u5e94\u7684\u5267\u60c5\u3002\u52aa\u529b\u53bb\u6536\u96c6\u5427\uff01", "\u606d\u559c\u4f60\u627e\u5230\u82b1\u5f71\u4e4b\u9065\u5957\u88c5\u7684\u7b2c\u4e00\u4ef6\u8863\u670d\uff0c\u5f53\u4f60\u6536\u96c6\u5b8c\u5168\u5957\u8863\u670d\u540e\uff0c\u53ef\u4ee5\u89e3\u9501\u76f8\u5e94\u7684\u5267\u60c5\u3002\u52aa\u529b\u53bb\u6536\u96c6\u5427\uff01", "\u606d\u559c\u4f60\u627e\u5230\u7cbe\u7075\u8d5e\u6b4c\u5957\u88c5\u7684\u7b2c\u4e00\u4ef6\u8863\u670d\uff0c\u5f53\u4f60\u6536\u96c6\u5b8c\u5168\u5957\u8863\u670d\u540e\uff0c\u53ef\u4ee5\u89e3\u9501\u76f8\u5e94\u7684\u5267\u60c5\u3002\u52aa\u529b\u53bb\u6536\u96c6\u5427\uff01", "\u606d\u559c\u4f60\u627e\u5230\u96fe\u591c\u548f\u53f9\u5957\u88c5\u7684\u7b2c\u4e00\u4ef6\u8863\u670d\uff0c\u5f53\u4f60\u6536\u96c6\u5b8c\u5168\u5957\u8863\u670d\u540e\uff0c\u53ef\u4ee5\u89e3\u9501\u76f8\u5e94\u7684\u5267\u60c5\u3002\u52aa\u529b\u53bb\u6536\u96c6\u5427\uff01"], e.specialsucessStr = ["\u8ff7\u8776\u4e4b\u543b\u5957\u88c5\u5df2\u7ecf\u6536\u96c6\u5b8c\u6574\uff0c\u53ef\u4ee5\u5728\u8bbe\u8ba1\u5e08\u4e4b\u8def\u91cc\u9762\u67e5\u770b\u89e3\u9501\u7684\u5267\u60c5\u3002", "\u5f9c\u5f89\u661f\u6d77\u5957\u88c5\u5df2\u7ecf\u6536\u96c6\u5b8c\u6574\uff0c\u53ef\u4ee5\u5728\u8bbe\u8ba1\u5e08\u4e4b\u8def\u91cc\u9762\u67e5\u770b\u89e3\u9501\u7684\u5267\u60c5\u3002", "\u82b1\u5f71\u4e4b\u9065\u5957\u88c5\u5df2\u7ecf\u6536\u96c6\u5b8c\u6574\uff0c\u53ef\u4ee5\u5728\u8bbe\u8ba1\u5e08\u4e4b\u8def\u91cc\u9762\u67e5\u770b\u89e3\u9501\u7684\u5267\u60c5\u3002\uff01", "\u7cbe\u7075\u8d5e\u6b4c\u5957\u88c5\u5df2\u7ecf\u6536\u96c6\u5b8c\u6574\uff0c\u53ef\u4ee5\u5728\u8bbe\u8ba1\u5e08\u4e4b\u8def\u91cc\u9762\u67e5\u770b\u89e3\u9501\u7684\u5267\u60c5\u3002", "\u96fe\u591c\u548f\u53f9\u5957\u88c5\u5df2\u7ecf\u6536\u96c6\u5b8c\u6574\uff0c\u53ef\u4ee5\u5728\u8bbe\u8ba1\u5e08\u4e4b\u8def\u91cc\u9762\u67e5\u770b\u89e3\u9501\u7684\u5267\u60c5\u3002", "\u606d\u559c\u4f60\u627e\u5230\u96fe\u591c\u548f\u53f9\u5957\u88c5\u7684\u7b2c\u4e00\u4ef6\u8863\u670d\uff0c\u5f53\u4f60\u6536\u96c6\u5b8c\u5168\u5957\u8863\u670d\u540e\uff0c\u53ef\u4ee5\u89e3\u9501\u76f8\u5e94\u7684\u5267\u60c5\u3002\u52aa\u529b\u53bb\u6536\u96c6\u5427\uff01"], e
                }
                var i;
                return n(e, t), i = e, e.getInstance = function() {
                    return i.instance
                }, e.prototype.onLoad = function() {
                    i.instance = this
                }, e.prototype.start = function() {
                    this.CheckStoryTrigger()
                }, e.prototype.CheckStoryTrigger = function() {
                    a.default.getInstance().plotIndex;
                    if (!(a.default.getInstance().plotIndex > 7)) {
                        for (var t = !1, e = 0; e < 5; e++)
                            if (a.default.getInstance().getPartsHighestLevs(e) < this.limit[a.default.getInstance().plotIndex - 2]) {
                                t = !0;
                                break
                            } if (!t)
                            if (this.isFrist) {
                                var i = this;
                                this.storyTip.active = !0, this.storyTip.getChildByName("Label1").active = !1, this.storyTip.getChildByName("Label").active = !0, this.storyTip.setScale(0), cc.tween(this.storyTip).to(.25, {
                                    scale: 1.25
                                }).to(.1, {
                                    scale: 1
                                }).delay(2).call(function() {
                                    i.storyTip.active = !1
                                }).start(), this.DelayStory()
                            } else this.DelayStory(), this.isFrist = !0
                    }
                }, e.prototype.ShowTipStartGame = function() {
                    var t = this;
                    this.storyTip.active = !0, this.storyTip.getChildByName("Label").active = !1, this.storyTip.getChildByName("Label1").active = !0, this.storyTip.setScale(0), cc.tween(this.storyTip).to(.25, {
                        scale: 1.25
                    }).to(.1, {
                        scale: 1
                    }).delay(2).call(function() {
                        t.storyTip.active = !1
                    }).start()
                }, e.prototype.DelayStory = function() {
                    a.default.getInstance().story[a.default.getInstance().plotIndex - 1] = 1, this.story.getComponent(s.default).isScene = !0, this.story.getComponent(s.default).plotEssence.getChildByName("Back").active = !1, this.story.getComponent(s.default).plotEssence.getChildByName("Button1").active = !0, this.story.getComponent(s.default).IntoStroy(a.default.getInstance().plotIndex - 1), l.default.getInstance().achieveTrigger[1] = !0, a.default.getInstance().saveData()
                }, e.prototype.SkipStory = function() {
                    2 == a.default.getInstance().plotIndex ? (this.story.getComponent(s.default).CloseMainStory(), c.default.getInstance().SetTeachBegan()) : this.story.getComponent(s.default).CloseMainStory()
                }, e.prototype.SetTeachOpen = function() {
                    c.default.getInstance().SetTeachBegan()
                }, e.prototype.CheckSpecialClothes = function(t) {
                    a.default.getInstance().specialStory[t]++, 1 == a.default.getInstance().specialStory[t] && this.main.getComponent(r.default).ShowGameTip(this.specialStr[t]), a.default.getInstance().specialStory[t] >= 5 && (a.default.getInstance().story[t + 7] = 1, this.main.getComponent(r.default).ShowGameTip(this.specialsucessStr[t]), a.default.getInstance().saveData(), l.default.getInstance().achieveTrigger[1] = !0)
                }, e.instance = null, o([d(cc.Node)], e.prototype, "main", void 0), o([d(cc.Node)], e.prototype, "storyTip", void 0), o([d(cc.Node)], e.prototype, "story", void 0), o([d(cc.Node)], e.prototype, "teach", void 0), e = i = o([u], e)
            }(cc.Component);
        i.default = p, cc._RF.pop()
    }, {
        "./Achievement": "Achievement",
        "./GameLocalData": "GameLocalData",
        "./GameTeaching": "GameTeaching",
        "./MainUI": "MainUI",
        "./PlotSet": "PlotSet"
    }],
    Tools: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "52f83MMiZBMU4Y+8lo5JMHY", "Tools");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            s = a.ccclass,
            c = (a.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                var i;
                return n(e, t), i = e, e.prototype.start = function() {}, e.createCircle = function(t, e, i) {
                    for (var n = 2 * Math.PI / t, o = new Array, a = 0; a < t; a++) o.push(new cc.Vec2(e.x + i * Math.cos(n * a), e.y + i * Math.sin(n * a)));
                    return o
                }, e.isPointInCircle = function(t, e, i, n, o) {
                    var a = t.sub(e);
                    n.x = a.x, n.y = a.y;
                    var s = a.mag();
                    return s, s <= i
                }, e.getCurTime = function() {
                    var t = (new Date).getTime();
                    return Math.floor(t / 1e3)
                }, e.vectorsToDegress = function(t) {
                    if (0 == t.x && 0 == t.y) return 0;
                    var e = cc.v2(1, 0),
                        i = t.signAngle(e);
                    return cc.misc.radiansToDegrees(i)
                }, e.degreesToVectors = function(t) {
                    var e = cc.misc.degreesToRadians(t);
                    return cc.v2(0, 1).rotate(-e)
                }, e.scaleSize = function(t, e, i, n) {
                    if (i) {
                        var o = cc.scaleTo(3 * e / 4, 1.1),
                            a = cc.scaleTo(e / 4, 1),
                            s = cc.callFunc(function() {
                                n && n()
                            });
                        t.runAction(cc.sequence(o, a, s))
                    } else {
                        o = cc.scaleTo(e, 0), s = cc.callFunc(function() {
                            n && n()
                        });
                        t.runAction(cc.sequence(o, s))
                    }
                }, e.getCurDay = function() {
                    var t = (new Date).getTime();
                    return Math.floor(t / 864e5)
                }, e.random = function(t, e) {
                    return Math.floor(Math.random() * (e - t + 1)) + t
                }, e.sysTime = function() {
                    var t = new Date,
                        e = t.getFullYear(),
                        n = t.getMonth() + 1,
                        o = t.getDate(),
                        a = t.getHours(),
                        s = t.getMinutes(),
                        c = t.getSeconds();
                    return e + "-" + i.getMakeZero(n) + "-" + i.getMakeZero(o) + " " + i.getMakeZero(a) + ":" + i.getMakeZero(s) + ":" + i.getMakeZero(c)
                }, e.getMakeZero = function(t) {
                    return t < 10 ? "0" + t : t
                }, e = i = o([s], e)
            }(cc.Component));
        i.default = c, cc._RF.pop()
    }, {}],
    UiRoot: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "80543AjXh1HnrYfaCVoe2y2", "UiRoot");
        var n = this && this.__extends || function() {
                var t = function(e, i) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(e, i)
                };
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }
            }(),
            o = this && this.__decorate || function(t, e, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
                return a > 3 && s && Object.defineProperty(e, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = t("./Hint"),
            s = cc._decorator,
            c = s.ccclass,
            r = s.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.hint = null, e.achieveUi = null, e.mainUi = null, e.uiBg = null, e
                }
                return n(e, t), e.prototype.onLoad = function() {}, e.prototype.start = function() {}, e.prototype.refsh = function() {}, e.prototype.hideAllView = function() {
                    this.uiBg.stopAllActions(), this.uiBg.opacity = 0, this.refsh()
                }, o([r(a.default)], e.prototype, "hint", void 0), o([r(cc.Node)], e.prototype, "achieveUi", void 0), o([r(cc.Node)], e.prototype, "mainUi", void 0), o([r(cc.Node)], e.prototype, "uiBg", void 0), e = o([c], e)
            }(cc.Component);
        i.default = l, cc._RF.pop()
    }, {
        "./Hint": "Hint"
    }],
    dData: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "e356a5q3TdDbr0LIXvvPHmv", "dData"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = function() {
            return function() {}
        }();
        i.default = n, cc._RF.pop()
    }, {}]
}, {}, ["Achievement", "AdsMananger", "AirDrop", "AssetsManager", "AudioManager", "ButtonSet", "Buy", "ChangeMenu", "CharacterInfo", "CheckBanner", "Envelope", "Exchange", "GameLocalData", "GameManger", "GameTeaching", "GlobalData", "GradeSetting", "GrilController", "Hint", "Illustrated ", "LoadManager", "LuckDraw", "MainUI", "MissionSet", "PartsRoot", "PlotSet", "RankSet", "SignIn", "StorySet", "Tools", "UiRoot", "dData", "Make", "MakeItem"]);