window.__require = function t(e, n, o) {
    function i(a, s) {
        if (!n[a]) {
            if (!e[a]) {
                var c = a.split("/");
                if (c = c[c.length - 1], !e[c]) {
                    var u = "function" == typeof __require && __require;
                    if (!s && u) return u(c, !0);
                    if (r) return r(c, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
            }
            var l = n[a] = {
                exports: {}
            };
            e[a][0].call(l.exports, function(t) {
                return i(e[a][1][t] || t)
            }, l, l.exports, t, e, n, o)
        }
        return n[a].exports
    }
    for (var r = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
    return i
}({
    AdManager: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "23f58xnn9lNNIeeNkT+ihO+", "AdManager");
        var o = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            },
            r = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            a = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (t) {
                        r = [6, t], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("./UI/SignPanel"),
            c = t("./UI/TipPanel"),
            u = t("./UI/SurpriseADPanel"),
            l = t("./GameFacade"),
            d = t("./GameData"),
            h = t("./SureAdPanel"),
            p = cc._decorator,
            f = p.ccclass,
            v = p.property,
            y = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.signPanel = null, e.surpriseADPanel = null, e
                }
                var n;
                return o(e, t), n = e, Object.defineProperty(e, "Instance", {
                    get: function() {
                        return cc.isValid(this.instance) || (this.instance = cc.find("Scripts").getComponent("AdManager")), this.instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.onLoad = function() {
                    n.InitOppoNative()
                }, e.InitOppoNative = function() {
                    cc.sys.platform == cc.sys.OPPO_GAME ? n.nad = new TJ.DevKit.OPPO.QG.NativeAd(n.ad_native_insert_posId) : cc.sys.platform == cc.sys.VIVO_GAME && (console.log("\u83b7\u53d6VIVO\u539f\u751f\u6570\u636e" + n.ad_native_VIVO_insert_posId), n.nvd = new TJ.DevKit.VIVO.QG.NativeAd(n.ad_native_VIVO_insert_posId))
                }, e.ShowBanner = function() {
                    console.log(">:show banner");
                    var t = new TJ.ADS.Param;
                    t.place = TJ.ADS.Place.BOTTOM | TJ.ADS.Place.CENTER, TJ.ADS.Api.ShowBanner(t), console.log(">:begin banner")
                }, e.CloseBanner = function() {
                    console.log(">:close banner");
                    var t = new TJ.ADS.Param;
                    t.place = TJ.ADS.Place.BOTTOM | TJ.ADS.Place.CENTER, TJ.ADS.Api.RemoveBanner(t), console.log(">:end banner")
                }, e.ShowNormal = function() {
                    return r(this, void 0, void 0, function() {
                        var t;
                        return a(this, function(e) {
                            return console.log(">:show insert"), t = new TJ.ADS.Param, TJ.ADS.Api.ShowNormal(t), console.log(">:begin insert"), [2]
                        })
                    })
                }, e.ShowReward = function(t) {
                    var e = new TJ.ADS.Param;
                    e.extraAd = !0;
                    var n = !1;
                    l.default.Instance.isDemoPackage && null != t && d.default.Instance.awardsNUm == this.factAwardNum && (t(), d.default.Instance.awardsNUm++), h.default.Instance.Enter("Bạn muốn xem video để nhận thưởng?", function() {
                        e.cbi.Add(TJ.EventType.Reward, function() {
                            n = !0, null != t && t(), l.default.Instance.BGMusicMute(!d.default.Instance.music_switch), console.log()
                        }), e.cbi.Add(TJ.EventType.Close, function() {
                            n || c.default.instance.ShowLog("Hãy xem video quảng cáo để nhận thưởng!"), l.default.Instance.BGMusicMute(!d.default.Instance.music_switch)
                        }), e.cbi.Add(TJ.EventType.NoAds, function() {
                            c.default.instance.ShowLog("Không có video quảng cáo. Hãy thử lại sau!"), l.default.Instance.BGMusicMute(!d.default.Instance.music_switch)
                        }), TJ.ADS.Api.ShowReward(e)
                    })
                }, e.Event = function(t, e) {
                    console.log("Param:>" + t + "Value:>" + e);
                    var n = new TJ.GSA.Param;
                    n.id = t + e, TJ.GSA.Api.Event(n)
                }, e.ad_native_insert_posId = "138864", e.ad_native_VIVO_insert_posId = "1c9c4e7b7bb24fcb958ecdf21dc5a559", e.factAwardNum = 0, i([v(s.default)], e.prototype, "signPanel", void 0), i([v(u.default)], e.prototype, "surpriseADPanel", void 0), e = n = i([f], e)
            }(cc.Component);
        n.default = y, cc._RF.pop()
    }, {
        "./GameData": "GameData",
        "./GameFacade": "GameFacade",
        "./SureAdPanel": "SureAdPanel",
        "./UI/SignPanel": "SignPanel",
        "./UI/SurpriseADPanel": "SurpriseADPanel",
        "./UI/TipPanel": "TipPanel"
    }],
    AsIsNo: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "76720pPRpNJ/519DBBosTnD", "AsIsNo");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("./UI/TipPanel"),
            a = cc._decorator,
            s = a.ccclass,
            c = a.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.isShowText = !1, e
                }
                return o(e, t), e.prototype.onEnable = function() {
                    TJ.ADS.Api.RewardReady(new TJ.ADS.Param) ? this.node.active = !0 : (this.node.active = !1, console.log("Video chưa có sẵn"), this.isShowText && r.default.instance.ShowLog("Không có sẵn video quảng cáo!"))
                }, i([c(Boolean)], e.prototype, "isShowText", void 0), e = i([s], e)
            }(cc.Component);
        n.default = u, cc._RF.pop()
    }, {
        "./UI/TipPanel": "TipPanel"
    }],
    AudioManager: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "f5950RksMNB25G0PX93OoEJ", "AudioManager");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            },
            r = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            a = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (t) {
                        r = [6, t], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("./Other/Time"),
            c = t("./GameData"),
            u = t("./Other/General"),
            l = cc._decorator,
            d = l.ccclass,
            h = l.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.bgMusic_Audio = null, e.clips = new Array, e.audioSources = new Array, e.audioSourcesDic = new u.Dictionary, e.tempAudio = null, e.isStartDestroyAudio = !1, e
                }
                return o(e, t), e.prototype.onLoad = function() {}, e.prototype.update = function(t) {
                    this.isStartDestroyAudio && null != this.tempAudio && (this.tempAudio.volume -= t, this.tempAudio.volume <= 0 && (this.isStartDestroyAudio = !1, this.tempAudio.destroy()))
                }, e.prototype.StopAudioClip = function(t) {
                    this.audioSourcesDic.ContainKey(t) && (this.tempAudio = this.audioSourcesDic.TryGetValue(t), this.isStartDestroyAudio = !0, this.audioSourcesDic.Remove(t))
                }, e.prototype.PlayAudioClip = function(t) {
                    if (c.default.Instance.audio_switch) {
                        var e = this.node.addComponent(cc.AudioSource);
                        e.clip = this.clips[t], e.play(), this.audioSourcesDic.ContainKey(t) && this.audioSourcesDic.Remove(t), this.audioSourcesDic.Add(t, e), this.DestroyAudio(e, e.getDuration())
                    }
                }, e.prototype.DestroyAudio = function(t, e) {
                    return r(this, void 0, void 0, function() {
                        return a(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, s.default.WaitForSeconds(e)];
                                case 1:
                                    return n.sent(), null != t && (this.audioSourcesDic.ContainValue(t) && this.audioSourcesDic.RemoveByValue(t), t.destroy()), [2]
                            }
                        })
                    })
                }, e.clip_button = "sfx_button", e.clip_clear = "sfx_hexagon_1", e.clip_miss = "sfx_piece_misplaced", e.clip_moveIn = "sfx_piece_dropped_2", e.clip_gameover = "sfx_reload", e.clip_levelpass = "sfx_level_passed", e.clip_levelup = "sfx_levelup", i([h(cc.AudioSource)], e.prototype, "bgMusic_Audio", void 0), i([h({
                    type: cc.AudioClip
                })], e.prototype, "clips", void 0), e = i([d], e)
            }(cc.Component);
        n.default = p,
            function(t) {
                t[t.button = 0] = "button", t[t.hands = 1] = "hands", t[t.rightKey = 2] = "rightKey", t[t.getKey = 3] = "getKey", t[t.wrong = 4] = "wrong", t[t.coinHide = 5] = "coinHide"
            }(n.AudioClipName || (n.AudioClipName = {})), cc._RF.pop()
    }, {
        "./GameData": "GameData",
        "./Other/General": "General",
        "./Other/Time": "Time"
    }],
    BasePanel: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "2d8f6ycvAZJ5rA2taU8UZoa", "BasePanel");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            a = r.ccclass,
            s = (r.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.OnEnter = function() {}, e.prototype.OnExit = function() {}, e.prototype.ShowPanel = function() {}, e.prototype.HidePanel = function() {}, e = i([a], e)
            }(cc.Component));
        n.default = s, cc._RF.pop()
    }, {}],
    ButtonElement: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e3982Yyf3JDjqU9mHTWxmso", "ButtonElement");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r, a = t("./Level"),
            s = t("../GameFacade"),
            c = t("./CharacterController"),
            u = cc._decorator,
            l = u.ccclass,
            d = u.property;
        (function(t) {
            t[t.none = 0] = "none", t[t.order = 1] = "order", t[t.touch = 2] = "touch", t[t.characterController = 3] = "characterController"
        })(r || (r = {}));
        var h = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.level = null, e.CurLevelId = 1, e.characterController = null, e.buttonType = r.none, e.isKey = !1, e.orderNodes = [], e.orderId = "", e.id = "", e.targetNodes = [], e.orderNum = 0, e.isSuccess = !1, e
            }
            return o(e, t), e.prototype.onLoad = function() {
                switch (this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this), this.buttonType) {
                    case r.none:
                        break;
                    case r.order:
                        this.orderNum = this.orderNodes.length
                }
            }, e.prototype.start = function() {}, e.prototype.onTouchStart = function(t) {
                switch (this.isMouseDown = !0, this.currentPos = t.getLocation(), this.buttonType) {
                    case r.none:
                    case r.order:
                        break;
                    case r.touch:
                        if (null != this.level.touchs) {
                            for (var e = [], n = [], o = !1, i = -1, a = 0; a < this.level.touchs.length; a++) n[a] = this.level.touchs[a], e[a] = this.level.touchsNameId[a], o || n[a] != t.touch ? -1 == i && (null == n[a] && t.touch.getID() == a || n[a].getID() == t.touch.getID()) && (i = a) : o = !0;
                            if (!o)
                                if (-1 != i) n[i] = t.touch, e[i] = this.id;
                                else if (t.touch.getID() < this.level.touchs.length) {
                                for (a = this.level.touchs.length; a > t.touch.getID(); a--) n[a] = n[a - 1], e[a] = e[a - 1];
                                n[t.touch.getID()] = t.touch, e[t.touch.getID()] = this.id
                            } else n[this.level.touchs.length] = t.touch, e[this.level.touchs.length] = this.id;
                            this.level.touchs = n, this.level.touchsNameId = e
                        } else this.level.touchs = [t.touch], this.level.touchsNameId = [this.id];
                        this.TouchBtnByLevelIdStart(this.CurLevelId);
                        break;
                    case r.characterController:
                        20 == this.CurLevelId && (this.level.isGaming || this.level.isLogoAnim || (this.level.isGaming = !0), this.characterController.ClickMove())
                }
            }, e.prototype.onTouchEnd = function(t) {
                switch (this.isMouseDown = !1, this.currentPos.sub(t.getLocation()).mag() <= .01 && this.BtnClick(null, ""), this.buttonType) {
                    case r.none:
                    case r.order:
                        break;
                    case r.touch:
                        if (1 == this.level.touchs.length) this.level.touchs = [];
                        else {
                            for (var e = [], n = [], o = -1, i = 0; i < this.level.touchs.length; i++)
                                if (this.level.touchs[i].getID() == t.touch.getID()) {
                                    o = i;
                                    break
                                } for (var a = 0; a < o; a++) n[a] = this.level.touchs[a], e[a] = this.level.touchsNameId[a];
                            for (; a < this.level.touchs.length - 1; a++) n[a] = this.level.touchs[a + 1], e[a] = this.level.touchsNameId[a + 1];
                            this.level.touchs = n, this.level.touchsNameId = e
                        }
                        this.TouchBtnByLevelIdEnd(this.CurLevelId)
                }
            }, e.prototype.BtnClick = function(t, e) {
                switch (this.buttonType) {
                    case r.none:
                        this.NormalByLevelIdBtnClick(this.CurLevelId);
                        break;
                    case r.order:
                        this.level.currentOrderId > 0 && this.level.currentOrderId <= this.orderNodes.length ? (this.orderNodes[this.level.currentOrderId - 1].active = !0, this.level.currentOrderId++, this.level.currentOrderValue += this.orderId, this.isKey && this.level.orderValue == this.level.currentOrderValue ? s.default.Instance.currentLevel.Completed(cc.v2()) : 7 == this.level.currentOrderId && s.default.Instance.currentLevel.Failed(cc.v2(), !0, function() {
                            s.default.Instance.RestartLevel()
                        })) : s.default.Instance.currentLevel.Failed(cc.v2(), !0, function() {
                            s.default.Instance.RestartLevel()
                        })
                }
            }, e.prototype.onDestroy = function() {
                this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
            }, e.prototype.NormalByLevelIdBtnClick = function(t) {
                switch (t) {
                    case 29:
                        this.isKey && this.targetNodes[0].position.y < this.node.position.y ? s.default.Instance.currentLevel.Completed(this.node.position) : s.default.Instance.currentLevel.Failed(this.node.position);
                        break;
                    case 35:
                        "1" == this.id ? (this.level.targetNodesB[0].active = !1, s.default.Instance.RestartLevel()) : s.default.Instance.gamePanel.HintBtnClick()
                }
            }, e.prototype.TouchBtnByLevelIdEnd = function(t) {
                var e = this;
                switch (t) {
                    case 13:
                        this.isSuccess || this.level.isLogoAnim || (this.level.Failed(cc.v2(), !0, function() {
                            return e.level.isLogoAnim = !1
                        }), "1" == this.id ? this.level.ActiveNodeOnTime(this.level.elements[1], 1.3) : this.level.ActiveNodeOnTime(this.level.elements[0], 1.3), this.level.ActiveNodeOnTime(this.level.targetNodesA[parseInt(this.id) - 1], 1.3))
                }
            }, e.prototype.TouchBtnByLevelIdStart = function(t) {
                switch (t) {
                    case 13:
                        2 != this.level.touchsNameId.length || this.level.isLogoAnim || (this.level.CheckTouchNameID(["1", "4"], !1) ? (console.log("\u95ef\u5173\u6210\u529f"), this.isSuccess = !0, this.level.ActiveNode(this.level.targetNodesA[0]), this.level.ActiveNode(this.level.targetNodesA[3]), this.level.ActiveNode(this.level.targetNodesB[0]), s.default.Instance.currentLevel.Completed()) : this.level.CheckTouchNameID(["2", "3"], !1) && (console.log("\u95ef\u5173\u6210\u529f"), this.isSuccess = !0, this.level.ActiveNode(this.level.targetNodesA[1]), this.level.ActiveNode(this.level.targetNodesA[2]), this.level.ActiveNode(this.level.targetNodesB[1]), s.default.Instance.currentLevel.Completed()));
                        break;
                    case 30:
                        2 != this.level.touchsNameId.length || this.level.isLogoAnim || this.level.CheckTouchNameID(["1", "2"], !1) && (this.isSuccess = !0, this.level.ActiveNode(this.level.targetNodesA[0]), this.level.HideNode(this.level.targetNodesA[1]), s.default.Instance.currentLevel.Completed());
                    case 33:
                        2 != this.level.touchsNameId.length || this.level.isLogoAnim || (this.level.ConsoleTouchs(), this.level.CheckTouchNameID(["1", "2"], !1) && (this.isSuccess = !0, s.default.Instance.currentLevel.Completed()))
                }
            }, i([d(a.default)], e.prototype, "level", void 0), i([d(Number)], e.prototype, "CurLevelId", void 0), i([d(c.default)], e.prototype, "characterController", void 0), i([d({
                type: cc.Enum(r)
            })], e.prototype, "buttonType", void 0), i([d(Boolean)], e.prototype, "isKey", void 0), i([d(cc.Node)], e.prototype, "orderNodes", void 0), i([d(String)], e.prototype, "orderId", void 0), i([d(String)], e.prototype, "id", void 0), i([d(cc.Node)], e.prototype, "targetNodes", void 0), e = i([l], e)
        }(cc.Component);
        n.default = h, cc._RF.pop()
    }, {
        "../GameFacade": "GameFacade",
        "./CharacterController": "CharacterController",
        "./Level": "Level"
    }],
    CharacterController: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "c07fcz0hqFH6LYKMWxXpxBY", "CharacterController");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            },
            r = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            a = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (t) {
                        r = [6, t], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s, c, u = t("../GameFacade"),
            l = t("./Level"),
            d = t("../Other/Time"),
            h = cc._decorator,
            p = h.ccclass,
            f = h.property;
        (function(t) {
            t[t.none = 0] = "none", t[t.buttonUpToMove = 1] = "buttonUpToMove", t[t.buttonClickToMove = 2] = "buttonClickToMove"
        })(s || (s = {})),
        function(t) {
            t[t.noneClamp = 0] = "noneClamp", t[t.horizontal = 1] = "horizontal", t[t.vertical = 2] = "vertical"
        }(c || (c = {}));
        var v = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.level = null, e.characterType = s.none, e.moveType = c.noneClamp, e.rigid = null, e.HP = 100, e.moveSpeed = 0, e.targetMoveHorDis = 0, e.buttonClickMoveDisOnce = 0, e.isButtonDown = !1, e.initPos = cc.v2(), e.xSpeed = 0, e.ySpeed = 0, e.jumpDuration = 0, e.jumpSpeed = 0, e.isRightMove = !1, e.isLeftMove = !1, e.isJumpBtn = !1, e.isJump = !1, e
            }
            return o(e, t), e.prototype.onLoad = function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this), this.initPos = this.node.position, console.log("PlayerPOS:" + this.node.position)
            }, e.prototype.onEnable = function() {}, e.prototype.start = function() {}, e.prototype.OpenPhysics = function() {
                return r(this, void 0, void 0, function() {
                    return a(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, d.default.WaitForSeconds(.02)];
                            case 1:
                                return t.sent(), cc.director.getCollisionManager().enabled = !0, cc.director.getPhysicsManager().enabled = !0, [2]
                        }
                    })
                })
            }, e.prototype.update = function(t) {
                switch (this.characterType) {
                    case s.none:
                        switch (this.moveType) {
                            case c.noneClamp:
                                if (this.isRightMove && this.Walk(1), this.isLeftMove && this.Walk(-1), this.isJumpBtn) {
                                    var e = cc.director.getPhysicsManager().rayCast(this.node.position, cc.v2(this.node.position.x, this.node.position.y - u.default.Instance.canvas.height), cc.RayCastType.Any);
                                    e.length > 0 && console.log("info:>" + e[0].collider.name), this.isJump || this.Jump()
                                }
                                break;
                            case c.horizontal:
                            case c.vertical:
                        }
                        break;
                    case s.buttonUpToMove:
                        switch (this.moveType) {
                            case c.noneClamp:
                                break;
                            case c.horizontal:
                                this.level.isGaming && !this.isButtonDown && (this.node.position = new cc.Vec2(this.node.position.x + this.moveSpeed * t, this.node.position.y), this.node.position.x - this.initPos.x > this.targetMoveHorDis && (this.level.isGaming = !1, this.level.Failed(cc.v2(), !0, function() {
                                    u.default.Instance.RestartLevel()
                                })));
                                break;
                            case c.vertical:
                        }
                        break;
                    case s.buttonClickToMove:
                        switch (this.moveType) {
                            case c.noneClamp:
                                break;
                            case c.horizontal:
                                this.level.isGaming && this.node.x - this.initPos.x > this.targetMoveHorDis && (this.level.isGaming = !1, this.node.stopAllActions(), this.level.Completed());
                                break;
                            case c.vertical:
                        }
                }
            }, e.prototype.onDestroy = function() {
                this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
            }, e.prototype.onTouchStart = function(t) {
                this.isButtonDown = !0
            }, e.prototype.onTouchEnd = function(t) {
                this.isButtonDown = !1
            }, e.prototype.ClickMove = function() {
                if (this.level.isGaming && this.characterType == s.buttonClickToMove) switch (this.moveType) {
                    case c.noneClamp:
                        break;
                    case c.horizontal:
                        this.Move();
                        break;
                    case c.vertical:
                }
            }, e.prototype.Move = function() {
                this.node.stopAllActions(), this.node.runAction(cc.moveTo(.25, cc.v2(this.node.position.x + .25 * this.moveSpeed, this.node.position.y)))
            }, e.prototype.RightMoveBtnDown = function() {
                this.isRightMove = !0, this.node.scaleX < 0 && (this.node.scaleX *= -1)
            }, e.prototype.LeftMoveBtnDown = function() {
                this.isLeftMove = !0, this.node.scaleX > 0 && (this.node.scaleX *= -1)
            }, e.prototype.RightMoveBtnUp = function() {
                this.isRightMove = !1
            }, e.prototype.LeftMoveBtnUp = function() {
                this.isLeftMove = !1
            }, e.prototype.JumpBtnDown = function() {
                this.isJumpBtn = !0, this.isJump || this.Jump()
            }, e.prototype.JumpBtnUp = function() {
                this.isJumpBtn = !1
            }, e.prototype.Jump = function() {
                this.isJump = !0;
                var t = this.rigid.linearVelocity;
                t.y = this.jumpSpeed, this.rigid.linearVelocity = t, console.log("JUMP-speed:>" + this.rigid.linearVelocity)
            }, e.prototype.Walk = function(t) {
                var e = this.rigid.linearVelocity;
                e.x = this.xSpeed * t, this.rigid.linearVelocity = e, this.isJump
            }, e.prototype.onCollisionEnter = function(t, e) {
                console.log("CollisionInfo:" + t.node.name + "---" + e.node.name), this.isJump && (this.isJump = !1)
            }, e.prototype.onBeginContact = function(t, e, n) {
                var o = this;
                console.log("CollisionInfo:" + n.node.name + "---" + e.node.name), "floor" != n.node.name || this.level.isLogoAnim || (this.HP--, this.level.ActiveNodesByNum(this.HP), 0 == this.HP ? this.level.Failed(cc.v2(), !0, function() {
                    o.level.ActiveNode(o.level.targetNodesB[0])
                }) : this.level.Failed(cc.v2(), !0, function() {
                    o.level.isLogoAnim = !1, o.ResetPosition()
                })), this.isJump && (this.isJump = !1)
            }, e.prototype.ResetPosition = function() {
                this.node.scale = Math.abs(this.node.scale), this.node.position = this.initPos, this.characterAnim.play(this.characterAnim.getClips()[1].name)
            }, i([f(l.default)], e.prototype, "level", void 0), i([f({
                type: cc.Enum(s)
            })], e.prototype, "characterType", void 0), i([f({
                type: cc.Enum(c)
            })], e.prototype, "moveType", void 0), i([f(cc.RigidBody)], e.prototype, "rigid", void 0), i([f(Number)], e.prototype, "HP", void 0), i([f(Number)], e.prototype, "moveSpeed", void 0), i([f(Number)], e.prototype, "targetMoveHorDis", void 0), i([f(Number)], e.prototype, "buttonClickMoveDisOnce", void 0), i([f(Number)], e.prototype, "xSpeed", void 0), i([f(Number)], e.prototype, "ySpeed", void 0), i([f(Number)], e.prototype, "jumpDuration", void 0), i([f(Number)], e.prototype, "jumpSpeed", void 0), e = i([p], e)
        }(cc.Component);
        n.default = v, cc._RF.pop()
    }, {
        "../GameFacade": "GameFacade",
        "../Other/Time": "Time",
        "./Level": "Level"
    }],
    ContactElement: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "0e90ewSCzNPC4ZUlrmzThpr", "ContactElement");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            },
            r = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            a = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (t) {
                        r = [6, t], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s, c = t("../GameFacade"),
            u = t("./Level"),
            l = t("../Other/Time"),
            d = t("../Other/MyExtends");
        (function(t) {
            t[t.none = 0] = "none", t[t.addNum = 1] = "addNum", t[t.reduceNum = 2] = "reduceNum", t[t.clear = 3] = "clear", t[t.editBox = 4] = "editBox"
        })(s || (s = {}));
        var h = cc._decorator,
            p = h.ccclass,
            f = h.property,
            v = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.button = null, e.Id = 1, e.CurLevelId = 1, e.level = null, e.isDrag = !1, e.isShowAways = !0, e.isButton = !1, e.buttonType = s.none, e.isRandomPos = !1, e.isKey = !1, e.keyValue = 0, e.editBoxValue = "", e.isOffsetPercent = !0, e.offsetPercent = 0, e.isMoveBackAnim = !1, e.isMoveTarget = null, e.isMoveToTarget = !1, e.isKeyChangeSprite = !1, e.isCanTouchMoveSelf = !1, e.targetSprite = null, e.targetSpriteFrame = null, e.targetNodes = [], e.isMouseDown = !1, e.isOverNode = !1, e.currentPos = cc.v2(), e.initPos = cc.v2(), e.elementNum = 0, e.offsetDeltaW = 0, e.offsetDeltaH = 0, e
                }
                var n;
                return o(e, t), n = e, e.prototype.onLoad = function() {
                    this.isDrag ? (this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)) : this.isButton && (this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)), this.offsetDeltaW = this.node.width / 2, this.offsetDeltaH = this.node.height / 2, this.isRandomPos && c.default.Instance.currentLevel.RandomTargetElementPos(this.node), this.offsetPercent < 0 && (this.offsetPercent = 0), this.offsetPercent > .8 && (this.offsetPercent = .8);
                    var t = this.offsetPercent * this.node.width,
                        e = this.offsetPercent * this.node.height;
                    this.offsetPercent >= .5 ? (this.offsetDeltaW = -(t - this.node.width / 2), this.offsetDeltaH = -(e - this.node.height / 2)) : (this.offsetDeltaW = this.node.width / 2 - t, this.offsetDeltaH = this.node.height / 2 - e), this.initPos = this.node.position
                }, e.prototype.start = function() {}, e.prototype.update = function(t) {}, e.prototype.onTouchStart = function(t) {
                    this.isMouseDown = !0, this.currentPos = t.getLocation()
                }, e.prototype.onTouchMove = function(t) {
                    if (this.isMouseDown) {
                        this.isShowAways && this.node.getSiblingIndex() != this.node.parent.childrenCount - 1 && this.node.setSiblingIndex(this.node.parent.childrenCount - 1);
                        var e = t.getDelta(),
                            n = -this.node.parent.width / 2 + this.offsetDeltaW,
                            o = this.node.parent.width / 2 - this.offsetDeltaW,
                            i = -this.node.parent.height / 2 + this.offsetDeltaH,
                            r = this.node.parent.height / 2 - this.offsetDeltaH,
                            a = this.node.x + e.x,
                            s = this.node.y + e.y;
                        if (this.isOffsetPercent && (a > o ? a = o : a < n && (a = n), s > r ? s = r : s < i && (s = i)), 17 == this.CurLevelId) {
                            if (this.level.isElementAnim) return
                        } else if (25 == this.CurLevelId && this.level.isElementAnim) return;
                        this.isCanTouchMoveSelf || (this.node.x = a, this.node.y = s)
                    }
                }, e.prototype.onTouchEnd = function(t) {
                    (this.isMouseDown = !1, this.isButton) && (this.currentPos.sub(t.getLocation()).mag() <= .01 && this.BtnClick(null, ""));
                    this.TouchEndByLevelID(this.CurLevelId, t)
                }, e.prototype.BtnClick = function(t, e) {
                    switch (console.log("\u6211\u662f>:" + this.name), this.buttonType) {
                        case s.none:
                            this.BtnClickByLevelID(this.CurLevelId);
                            break;
                        case s.addNum:
                            this.level.elementNum++, this.level.elementNumTxt.string = this.level.elementNum.toString();
                            break;
                        case s.reduceNum:
                            this.level.elementNum--, this.level.elementNum < 0 && (this.level.elementNum = 0), this.level.elementNumTxt.string = this.level.elementNum.toString();
                            break;
                        case s.clear:
                            this.level.elementNum = 0, this.level.elementNumTxt.string = this.level.elementNum.toString();
                            break;
                        case s.editBox:
                            this.isKey && (22 == this.CurLevelId ? this.level.editBoxLab.string == this.editBoxValue.toLowerCase() ? c.default.Instance.currentLevel.Completed(cc.v2()) : c.default.Instance.currentLevel.Failed(cc.v2()) : 26 == this.CurLevelId ? this.level.editBoxLab.string != this.editBoxValue || this.level.isLogoAnim ? c.default.Instance.currentLevel.Failed(cc.v2()) : c.default.Instance.currentLevel.Completed(cc.v2()) : this.level.editBoxLab.string == this.editBoxValue ? c.default.Instance.currentLevel.Completed(cc.v2()) : c.default.Instance.currentLevel.Failed(cc.v2()))
                    }
                }, e.prototype.onDestroy = function() {
                    this.isDrag ? (this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)) : this.isButton && (this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this))
                }, e.prototype.IsMoveToTarget = function() {
                    return null != this.isMoveTarget && this.node.x <= this.isMoveTarget.x + this.isMoveTarget.width / 2 && this.node.x >= this.isMoveTarget.x - this.isMoveTarget.width / 2 && this.node.y <= this.isMoveTarget.y + this.isMoveTarget.height / 2 && this.node.y >= this.isMoveTarget.y - this.isMoveTarget.height / 2
                }, e.prototype.IsOverScreenPercent = function(t) {
                    var e = this.node.parent.width / 2 - this.node.width / 2,
                        n = -this.node.parent.width / 2 + this.node.width / 2,
                        o = this.node.parent.height / 2 - this.node.height / 2,
                        i = -this.node.parent.height / 2 + this.node.height / 2,
                        r = this.node.width * t,
                        a = this.node.height * t;
                    return this.node.x > e + r || this.node.x < n - r || this.node.y > o + a || this.node.y < i - a
                }, e.prototype.DisByToTarget = function(t, e) {
                    return t.position.sub(e.position).mag()
                }, e.prototype.TouchEndByLevelID = function(t, e) {
                    var o = this;
                    switch (t) {
                        case 17:
                            if (this.isDrag)
                                if (this.isKey)
                                    if (this.IsMoveToTarget()) {
                                        if (!this.level.isElementAnim) {
                                            this.level.isElementAnim = !0;
                                            var i = cc.moveTo(.3, cc.v2(this.isMoveTarget.position.x - this.isMoveTarget.width / 2 - this.node.width / 3, this.isMoveTarget.position.y + (this.node.height / 2 - this.isMoveTarget.height / 2))),
                                                r = cc.sequence(i, cc.callFunc(function() {
                                                    o.level.Completed()
                                                }));
                                            this.node.runAction(r)
                                        }
                                    } else {
                                        if (this.isMoveBackAnim && !this.level.isElementAnim) {
                                            i = cc.moveTo(.3, this.initPos);
                                            this.node.runAction(i)
                                        }
                                        this.level.Failed()
                                    }
                            else {
                                if (this.isMoveBackAnim && !this.level.isElementAnim) {
                                    i = cc.moveTo(.3, this.initPos);
                                    this.node.runAction(i)
                                }
                                this.level.Failed()
                            }
                            break;
                        case 18:
                            if (this.isDrag) {
                                if (this.isKey && this.IsMoveToTarget() && !this.level.isElementAnim) {
                                    this.level.isElementAnim = !0;
                                    i = cc.moveTo(.3, cc.v2(230, 27)), r = cc.sequence(i, cc.callFunc(function() {
                                        o.level.Completed()
                                    }));
                                    this.node.runAction(r)
                                }
                            } else this.level.isElementAnim || this.level.Failed();
                            break;
                        case 19:
                            if (this.isDrag && this.isKey && this.IsMoveToTarget() && !this.level.isElementAnim && this.isMoveToTarget)
                                if (1 == this.Id) {
                                    this.level.isElementAnim = !0;
                                    i = cc.moveTo(.3, cc.v2(this.isMoveTarget.position.x - 44.744, this.isMoveTarget.position.y - -247.506)), r = cc.sequence(i, cc.callFunc(function() {
                                        o.level.Completed()
                                    }));
                                    this.node.runAction(r)
                                } else {
                                    this.level.isElementAnim = !0;
                                    i = cc.moveTo(.3, cc.v2(this.node.position.x - 44.744, this.node.position.y - 247.506)), r = cc.sequence(i, cc.callFunc(function() {
                                        o.level.Completed()
                                    }));
                                    this.isMoveTarget.runAction(r)
                                } break;
                        case 21:
                            if (this.isDrag)
                                if (this.isCanTouchMoveSelf && !this.isOverNode) this.currentPos.sub(e.getLocation()).mag() >= 30 && (this.targetSprite.spriteFrame = this.targetSpriteFrame, this.isOverNode = !0);
                                else if (this.IsMoveToTarget() && this.isKeyChangeSprite) this.level.ChangeSprite(function() {
                                o.ActiveTarget(2)
                            }), this.node.active = !1;
                            else if (this.isMoveBackAnim && !this.level.isElementAnim) {
                                i = cc.moveTo(.3, this.initPos);
                                this.node.runAction(i)
                            }
                            break;
                        case 24:
                            this.isDrag && this.IsMoveToTarget() && (this.level.elementNum++, this.node.destroy());
                            break;
                        case 25:
                            if (this.isDrag)
                                if (this.isKey) {
                                    if (this.IsMoveToTarget() && !this.level.isElementAnim && this.isMoveToTarget)
                                        if (1 == this.Id) {
                                            if (this.DisByToTarget(this.node, this.targetNodes[0]) > 110) {
                                                this.level.isElementAnim = !0;
                                                i = cc.moveTo(.3, cc.v2(this.isMoveTarget.position.x - 16.438, this.isMoveTarget.position.y + 65.225)), r = cc.sequence(i, cc.callFunc(function() {
                                                    o.level.Completed()
                                                }));
                                                this.node.runAction(r)
                                            }
                                        } else if (this.DisByToTarget(this.isMoveTarget, this.targetNodes[0]) > 110) {
                                        this.level.isElementAnim = !0;
                                        i = cc.moveTo(.3, cc.v2(this.node.position.x - 16.438, this.node.position.y + 65.225)), r = cc.sequence(i, cc.callFunc(function() {
                                            o.level.Completed()
                                        }));
                                        this.isMoveTarget.runAction(r)
                                    }
                                } else if (this.targetNodes.length > 0) {
                                var a = this.targetNodes[0].getComponent(n);
                                a.TouchEndByLevelID(a.CurLevelId, null)
                            }
                            break;
                        case 34:
                            this.isOverNode || this.level.isElementAnim || d.default.IsFullExposedByCovers(this.level.targetNodesA[0], this.level.targetNodesB, -20) && (this.level.isElementAnim = !0, this.isOverNode = !0, this.level.StartUpCar());
                            break;
                        case 35:
                            this.isDrag && this.isKey && this.IsMoveToTarget() && !this.level.isLogoAnim && this.level.Completed()
                    }
                }, e.prototype.BtnClickByLevelID = function(t) {
                    switch (t) {
                        case 19:
                            this.level.isElementAnim || this.level.Failed(this.node.position);
                            break;
                        case 24:
                            3 != this.level.elementNum || this.isOverNode || (this.elementNum++, 3 == this.elementNum && (this.targetSprite.spriteFrame = this.targetSpriteFrame, this.isOverNode = !0));
                            break;
                        case 25:
                            this.level.isElementAnim || this.level.Failed(this.node.position);
                            break;
                        case 31:
                            if (this.isKey) {
                                if (!this.isOverNode) {
                                    this.isOverNode = !0;
                                    var e = cc.tintTo(2, 100, 100, 100);
                                    this.node.runAction(e), this.ActiveNodeOnTime()
                                }
                            } else this.isOverNode || (this.isOverNode = !0, this.targetNodes[0].active = !0, this.level.elementNum++, 8 == this.level.elementNum && c.default.Instance.currentLevel.Completed(cc.v2()));
                            break;
                        default:
                            this.isKey && this.level.elementNum == this.keyValue ? c.default.Instance.currentLevel.Completed(cc.v2()) : c.default.Instance.currentLevel.Failed(cc.v2())
                    }
                }, e.prototype.ActiveTarget = function(t) {
                    return r(this, void 0, void 0, function() {
                        return a(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, l.default.WaitForSeconds(t)];
                                case 1:
                                    return e.sent(), this.targetNodes[0].active = !0, this.targetSprite.spriteFrame = this.targetSpriteFrame, [2]
                            }
                        })
                    })
                }, e.prototype.ActiveNodeOnTime = function() {
                    return r(this, void 0, void 0, function() {
                        var t, e, n, o = this;
                        return a(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, l.default.WaitForSeconds(.6)];
                                case 1:
                                    return i.sent(), this.targetNodes[0].active = !0, [4, l.default.WaitForSeconds(.6)];
                                case 2:
                                    return i.sent(), this.targetNodes[1].active = !0, [4, l.default.WaitForSeconds(.8)];
                                case 3:
                                    return i.sent(), this.targetNodes[2].active = !0, t = cc.fadeTo(.5, 255), e = cc.callFunc(function() {
                                        o.targetNodes[4].runAction(cc.moveTo(1.5, cc.v2(o.targetNodes[4].position.x - 85, o.targetNodes[4].position.y)))
                                    }), n = cc.sequence(t, e), this.targetNodes[3].runAction(n), [2]
                            }
                        })
                    })
                }, i([f(Number)], e.prototype, "Id", void 0), i([f(Number)], e.prototype, "CurLevelId", void 0), i([f(u.default)], e.prototype, "level", void 0), i([f(Boolean)], e.prototype, "isDrag", void 0), i([f(Boolean)], e.prototype, "isShowAways", void 0), i([f(Boolean)], e.prototype, "isButton", void 0), i([f({
                    type: cc.Enum(s)
                })], e.prototype, "buttonType", void 0), i([f(Boolean)], e.prototype, "isRandomPos", void 0), i([f(Boolean)], e.prototype, "isKey", void 0), i([f(Number)], e.prototype, "keyValue", void 0), i([f(String)], e.prototype, "editBoxValue", void 0), i([f(Boolean)], e.prototype, "isOffsetPercent", void 0), i([f(cc.Float)], e.prototype, "offsetPercent", void 0), i([f(Boolean)], e.prototype, "isMoveBackAnim", void 0), i([f(cc.Node)], e.prototype, "isMoveTarget", void 0), i([f(Boolean)], e.prototype, "isMoveToTarget", void 0), i([f(Boolean)], e.prototype, "isKeyChangeSprite", void 0), i([f(Boolean)], e.prototype, "isCanTouchMoveSelf", void 0), i([f(cc.Sprite)], e.prototype, "targetSprite", void 0), i([f(cc.SpriteFrame)], e.prototype, "targetSpriteFrame", void 0), i([f(cc.Node)], e.prototype, "targetNodes", void 0), e = n = i([p], e)
            }(cc.Component);
        n.default = v, cc._RF.pop()
    }, {
        "../GameFacade": "GameFacade",
        "../Other/MyExtends": "MyExtends",
        "../Other/Time": "Time",
        "./Level": "Level"
    }],
    DP: [function(t, e, n) {
        "use strict";
        var o;
        cc._RF.push(e, "9afcalszhNFJ4/abb9oNLM2", "DP"),
            function(t) {
                (function(t) {
                    t.appGuid = "7a1134af-fca4-56e3-4984-4b29fd9d3e89", t.companyName = "\u82cf\u5dde\u756a\u8304\u4e92\u5a31\u4fe1\u606f\u79d1\u6280\u6709\u9650\u516c\u53f8", t.productName = "\u8111\u6d1e\u5927\u6bd4\u62fc", t.packageName = "com.tomatojoy.nddbp.vivominigame", t.versionName = "1.0.0", t.versionCode = 2, t.channel = "4399_AppRt"
                })(t.Basic || (t.Basic = {})),
                function(t) {
                    (function(t) {
                        t.appId = null, t.bannerId = null, t.insertId = null, t.videoId = null, t.nativeCustomInsert = null
                    })(t.QG || (t.QG = {}))
                }(t.OPPO || (t.OPPO = {})),
                function(t) {
                    t.appId = null, t.bannerId = null, t.videoId = null
                }(t.QQ || (t.QQ = {})),
                function(t) {
                    t.appId = "ba5c9f7ea4112102482c0a1290695ed0"
                }(t.ReYun || (t.ReYun = {})),
                function(t) {
                    t.appId = null, t.bannerId = null, t.videoId = null, t.promo = {
                        ttNavigateToMiniGameAppIdList: []
                    }
                }(t.TT || (t.TT = {})),
                function(t) {
                    (function(t) {
                        t.bannerId = null, t.insertId = null, t.videoId = null
                    })(t.QG || (t.QG = {}))
                }(t.VIVO || (t.VIVO = {})),
                function(t) {
                    t.appId = null, t.bannerId = null, t.insertId = null, t.videoId = null
                }(t.WX || (t.WX = {}))
            }(o || (o = {})), window.DP = o, cc._RF.pop()
    }, {}],
    DictionaryOld: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "bc850q/1K1ODZhu1SoLc9me", "DictionaryOld"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function t(t) {
                void 0 === t && (t = !1), this.keys = [], this.values = [], this.isCache = t
            }
            return Object.defineProperty(t.prototype, "count", {
                get: function() {
                    return this.Count()
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.Add = function(t, e) {
                return this.isCache && (this[t] = e), this.keys.push(t), this.values.push(e)
            }, t.prototype.Remove = function(t) {
                var e = this.keys.indexOf(t, 0);
                this.keys.splice(e, 1), this.values.splice(e, 1), this.isCache && delete this[t]
            }, t.prototype.Count = function() {
                return this.keys.length
            }, t.prototype.SetDicValue = function(t, e) {
                var n = this.keys.indexOf(t, 0);
                return -1 != n && (this.keys[n] = t, this.values[n] = e, this.isCache && (this[t] = e), !0)
            }, t.prototype.TryGetValue = function(t) {
                var e = this.keys.indexOf(t, 0);
                return -1 != e ? this.values[e] : null
            }, t.prototype.ContainsKey = function(t) {
                for (var e = this.keys, n = 0; n < e.length; ++n)
                    if (e[n] == t) return !0;
                return !1
            }, t.prototype.GetKeys = function() {
                return this.keys
            }, t.prototype.GetValue = function() {
                return this.values
            }, t
        }();
        n.default = o, cc._RF.pop()
    }, {}],
    EffectPanel: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "0624331XfpGULmvO+oYyT0B", "EffectPanel");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            a = r.ccclass,
            s = r.property,
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.keyNode = null, e.keyNumLabel = null, e
                }
                return o(e, t), e.prototype.GetKeyToNum = function(t, e) {
                    var n = this;
                    void 0 === e && (e = cc.v2()), this.keyNumLabel.string = "x " + t.toString(), this.keyNode.position = e, this.keyNode.active = !0, this.keyNode.stopAllActions();
                    var o = cc.moveTo(.8, cc.v2(e.x, e.y + 400)).easing(cc.easeSineOut()),
                        i = cc.callFunc(function() {
                            n.keyNode.active = !1
                        }),
                        r = cc.sequence(o, i);
                    this.keyNode.runAction(r)
                }, i([s(cc.Node)], e.prototype, "keyNode", void 0), i([s(cc.Label)], e.prototype, "keyNumLabel", void 0), e = i([a], e)
            }(cc.Component);
        n.default = c, cc._RF.pop()
    }, {}],
    Element: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "00e2aTbzKZPDq300xnJcbQX", "Element");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../GameFacade"),
            a = cc._decorator,
            s = a.ccclass,
            c = a.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.button = null, e.CurLevelId = 1, e.isDrag = !1, e.isButton = !1, e.isDEVICEMOTION = !1, e.isRandomPos = !1, e.isKey = !1, e.isNotKeyToFail = !1, e.isOffsetPercent = !0, e.offsetPercent = 0, e.isCompose = !1, e.isKeyScale = !1, e.keyScaleValue = 1, e.isKeyChangeSprite = !1, e.isKeyMove = !1, e.isReduceAlpha = !1, e.isReduceAlphaStep = 0, e.isMoveBackAnim = !1, e.targetNodes = [], e.isShockX = void 0, e.isShockY = void 0, e.shockNum = 0, e.isMouseDown = !1, e.currentPos = cc.v2(), e.initPos = cc.v2(), e.offsetDeltaW = 0, e.offsetDeltaH = 0, e.moveDis = 0, e.isUsed = !1, e
                }
                return o(e, t), e.prototype.onLoad = function() {
                    this.isDrag ? (this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)) : this.isButton && (this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)), this.isDEVICEMOTION && (cc.systemEvent.setAccelerometerEnabled(!0), cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this)), this.offsetDeltaW = this.node.width / 2, this.offsetDeltaH = this.node.height / 2, this.isRandomPos && r.default.Instance.currentLevel.RandomTargetElementPos(this.node), this.offsetPercent < 0 && (this.offsetPercent = 0), this.offsetPercent > .95 && (this.offsetPercent = .95);
                    var t = this.offsetPercent * this.node.width,
                        e = this.offsetPercent * this.node.height;
                    this.offsetPercent >= .5 ? (this.offsetDeltaW = -(t - this.node.width / 2), this.offsetDeltaH = -(e - this.node.height / 2)) : (this.offsetDeltaW = this.node.width / 2 - t, this.offsetDeltaH = this.node.height / 2 - e), this.initPos = this.node.position
                }, e.prototype.start = function() {}, e.prototype.update = function(t) {}, e.prototype.onDeviceMotionEvent = function(t) {
                    this.IsShock(t.acc.x, t.acc.y) && (console.log("TRUE"), this.shockNum++, this.DeviceMotionShockByLevelId(this.CurLevelId))
                }, e.prototype.IsShock = function(t, e) {
                    return void 0 == this.isShockX && t >= .08 && (this.isShockX = !0), void 0 == this.isShockY && e >= .08 && (this.isShockY = !0), !!(this.isShockX && t <= -.08 || this.isShockY && e <= -.08) && (this.isShockX = void 0, this.isShockY = void 0, !0)
                }, e.prototype.onTouchStart = function(t) {
                    r.default.Instance.currentLevel.isLogoAnim || (this.isMouseDown = !0, this.currentPos = t.getLocation())
                }, e.prototype.onTouchMove = function(t) {
                    if (!r.default.Instance.currentLevel.isLogoAnim && this.isMouseDown) {
                        this.node.getSiblingIndex() != this.node.parent.childrenCount - 1 && this.node.setSiblingIndex(this.node.parent.childrenCount - 1);
                        var e = t.getDelta(),
                            n = -this.node.parent.width / 2 + this.offsetDeltaW,
                            o = this.node.parent.width / 2 - this.offsetDeltaW,
                            i = -this.node.parent.height / 2 + this.offsetDeltaH,
                            a = this.node.parent.height / 2 - this.offsetDeltaH,
                            s = this.node.x + e.x,
                            c = this.node.y + e.y;
                        if (this.isOffsetPercent && (s > o ? s = o : s < n && (s = n), c > a ? c = a : c < i && (c = i)), this.node.x = s, this.node.y = c, this.isKeyMove && (this.moveDis += e.mag(), 14 == this.CurLevelId && this.moveDis >= 2 * this.node.parent.height && !this.isUsed)) {
                            this.isUsed = !0;
                            var u = r.default.Instance.currentLevel.targetNodesA[0];
                            u.position = this.node.position, u.active = !0, u.runAction(cc.moveBy(.4, cc.v2(-80, -80)))
                        }
                    }
                }, e.prototype.onTouchEnd = function(t) {
                    if (!r.default.Instance.currentLevel.isLogoAnim) {
                        if (this.isMouseDown = !1, this.isButton) this.currentPos.sub(t.getLocation()).mag() <= .001 && this.BtnClick(null, "");
                        if (this.isDrag && (this.isCompose && this.isKeyScale ? r.default.Instance.currentLevel.ComposeElementScale(this.node) : this.isKey ? this.isKeyChangeSprite ? this.IsOverScreenPercent(.7) && (r.default.Instance.currentLevel.ChangeSprite(), r.default.Instance.currentLevel.Completed(cc.v2())) : this.IsOverScreenPercent(.2) && 5 == this.CurLevelId && r.default.Instance.currentLevel.Completed(cc.v2()) : this.isNotKeyToFail && r.default.Instance.currentLevel.Failed(this.node.position), this.isMoveBackAnim && !r.default.Instance.currentLevel.isElementAnim)) {
                            var e = cc.moveTo(.3, this.initPos);
                            this.node.runAction(e)
                        }
                    }
                }, e.prototype.BtnClick = function(t, e) {
                    console.log("I am >:" + this.name), this.isDrag ? this.isCompose && this.isKeyScale && this.isKey && Math.abs(this.node.scale - this.keyScaleValue) < .01 ? r.default.Instance.currentLevel.Completed(this.node.position) : r.default.Instance.currentLevel.Failed(this.node.position) : this.isKey ? 23 == this.CurLevelId ? this.isReduceAlpha && (this.node.opacity -= this.isReduceAlphaStep, console.log("----" + this.node.opacity), this.node.opacity <= 0 && (r.default.Instance.currentLevel.isElementAnim = !0, r.default.Instance.currentLevel.Completed(this.node.position), this.destroy())) : r.default.Instance.currentLevel.Completed(this.node.position) : r.default.Instance.currentLevel.Failed(this.node.position)
                }, e.prototype.onDestroy = function() {
                    this.isDrag ? (this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)) : this.isButton && (this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)), this.isDEVICEMOTION && (cc.systemEvent.setAccelerometerEnabled(!1), cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this))
                }, e.prototype.IsOverScreenPercent = function(t) {
                    var e = this.node.parent.width / 2 - this.node.width / 2,
                        n = -this.node.parent.width / 2 + this.node.width / 2,
                        o = this.node.parent.height / 2 - this.node.height / 2,
                        i = -this.node.parent.height / 2 + this.node.height / 2,
                        r = this.node.width * t,
                        a = this.node.height * t;
                    return this.node.x > e + r || this.node.x < n - r || this.node.y > o + a || this.node.y < i - a
                }, e.prototype.DeviceMotionShockByLevelId = function(t) {
                    switch (t) {
                        case 32:
                            this.isKey && this.shockNum >= 3 && (this.targetNodes[0].active = !1, this.targetNodes[1].active = !0, r.default.Instance.currentLevel.Completed())
                    }
                }, i([c(Number)], e.prototype, "CurLevelId", void 0), i([c(Boolean)], e.prototype, "isDrag", void 0), i([c(Boolean)], e.prototype, "isButton", void 0), i([c(Boolean)], e.prototype, "isDEVICEMOTION", void 0), i([c(Boolean)], e.prototype, "isRandomPos", void 0), i([c(Boolean)], e.prototype, "isKey", void 0), i([c(Boolean)], e.prototype, "isNotKeyToFail", void 0), i([c(Boolean)], e.prototype, "isOffsetPercent", void 0), i([c(cc.Float)], e.prototype, "offsetPercent", void 0), i([c(Boolean)], e.prototype, "isCompose", void 0), i([c(Boolean)], e.prototype, "isKeyScale", void 0), i([c(Number)], e.prototype, "keyScaleValue", void 0), i([c(Boolean)], e.prototype, "isKeyChangeSprite", void 0), i([c(Boolean)], e.prototype, "isKeyMove", void 0), i([c(Boolean)], e.prototype, "isReduceAlpha", void 0), i([c(Number)], e.prototype, "isReduceAlphaStep", void 0), i([c(Boolean)], e.prototype, "isMoveBackAnim", void 0), i([c(cc.Node)], e.prototype, "targetNodes", void 0), e = i([s], e)
            }(cc.Component);
        n.default = u, cc._RF.pop()
    }, {
        "../GameFacade": "GameFacade"
    }],
    FrameMovie: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "aa814UTju5Ahp0DA3Zlm8yD", "FrameMovie");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            a = r.ccclass,
            s = r.property,
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lSprites = [], e.fSep = .05, e.IsLoop = !0, e.curFrame = 0, e.fDelta = 0, e
                }
                return o(e, t), Object.defineProperty(e.prototype, "FrameCount", {
                    get: function() {
                        return this.lSprites.length
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "showerWidth", {
                    get: function() {
                        return null == this.shower ? 0 : this.shower.node.width
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "showerHeight", {
                    get: function() {
                        return null == this.shower ? 0 : this.shower.node.height
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.onLoad = function() {
                    this.shower = this.node.getComponent(cc.Sprite)
                }, e.prototype.onEnable = function() {
                    this.curFrame = 0, this.Play(this.curFrame)
                }, e.prototype.Play = function(t) {
                    t >= this.FrameCount && (this.IsLoop ? t = 0 : (null != this.action && (this.action(), this.action = null), t = this.FrameCount - 1)), this.shower.spriteFrame = this.lSprites[t], this.curFrame = t
                }, e.prototype.update = function(t) {
                    this.fDelta += t, this.fDelta > this.fSep && (this.fDelta = 0, this.curFrame++, this.Play(this.curFrame))
                }, i([s({
                    type: cc.SpriteFrame
                })], e.prototype, "lSprites", void 0), i([s], e.prototype, "fSep", void 0), i([s], e.prototype, "IsLoop", void 0), e = i([a], e)
            }(cc.Component);
        n.default = c, cc._RF.pop()
    }, {}],
    GameData: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "76d2cnNgudKYpkTTwGhAFiX", "GameData");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("./GameFacade"),
            a = t("./AdManager"),
            s = cc._decorator,
            c = s.ccclass,
            u = s.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.levelNums = 16, e.levelDatas = new Array, e.levelDataStr = "", e.currentLevelDatas = [], e.currentLevelId = 1, e.currentGamingLevelId = 1, e.hintNums = 0, e.isGameAddDeskPanel = 0, e.music_switch = !0, e.audio_switch = !0, e.shock_switch = !0, e.isGuided1 = 0, e.awardsNUm = 0, e
                }
                var n;
                return o(e, t), n = e, Object.defineProperty(e, "Instance", {
                    get: function() {
                        return cc.isValid(this.instance) || (this.instance = cc.find("Scripts").getComponent(n)), this.instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.onLoad = function() {
                    var t = this;
                    this.currentLevelId = parseInt(cc.sys.localStorage.getItem("CurrentLevel")), this.currentLevelId != this.currentLevelId && (console.log("----no----" + this.currentLevelId), this.currentLevelId = 1, cc.sys.localStorage.setItem("CurrentLevel", this.currentLevelId)), 0 == this.isInGame && (0 == cc.sys.localStorage.gettItem("userNew", this.currentLevelId) && a.default.Event("NEW_LOAD_START", ""), a.default.Event("OLD_LOAD_START", "")), this.currentGamingLevelId = this.currentLevelId, this.hintNums = parseInt(cc.sys.localStorage.getItem("HintNums")), this.hintNums != this.hintNums && (this.hintNums = 0, cc.sys.localStorage.setItem("HintNums", this.hintNums)), this.isGuided1 = parseInt(cc.sys.localStorage.getItem("Guided1")), this.isGuided1 != this.isGuided1 && (this.isGuided1 = 0, cc.sys.localStorage.setItem("Guided1", this.isGuided1)), this.isGameAddDeskPanel = parseInt(cc.sys.localStorage.getItem("isGameAddDesk")), this.isGameAddDeskPanel != this.isGameAddDeskPanel && (this.isGameAddDeskPanel = 0, cc.sys.localStorage.setItem("isGameAddDesk", this.isGameAddDeskPanel)), cc.loader.loadRes("level", function(e, n) {
                        if (e) console.log("error---\x3e:" + e);
                        else {
                            console.log("success"), t.levelDataStr = n.text;
                            var o = t.levelDataStr.split("\n");
                            t.levelDatas = new Array(o.length);
                            for (var i = 0; i < o.length; i++)
                                for (var r = 0; r < o.length; r++) {
                                    var a = o[r].split("^");
                                    Number(a[4]) == i + 1 && (t.levelDatas[i] = o[r])
                                }
                        }
                    })
                }, e.prototype.start = function() {
                    0 == this.isInGame && (0 == cc.sys.localStorage.gettItem("userNew", this.currentLevelId) && a.default.Event("NEW_MAIN", ""), a.default.Event("OLD_MAIN", ""))
                }, e.prototype.update = function(t) {}, e.prototype.GetCurLevelData = function() {
                    return this.levelDatas[this.currentGamingLevelId - 1]
                }, e.prototype.CurLevelDataInit = function() {
                    this.currentLevelDatas = this.levelDatas[this.currentGamingLevelId - 1].split("^")
                }, e.prototype.GetCurrtPanel = function(t) {
                    if (this.currentGamingLevelId <= this.levelDatas.length) {
                        var e = this.levelDatas[this.currentGamingLevelId - 1].split("^");
                        return console.log("Nhập" + Number(e[5]) + this.currentGamingLevelId), Number(e[5])
                    }
                    return Number(-1)
                }, e.prototype.NextLevel = function() {
                    this.currentGamingLevelId < this.levelNums && (this.currentGamingLevelId++, this.currentGamingLevelId > this.currentLevelId && (this.currentLevelId++, cc.sys.localStorage.setItem("CurrentLevel", this.currentLevelId.toString())))
                }, e.prototype.UseHint = function(t) {
                    void 0 === t && (t = 1), this.hintNums >= t && (this.hintNums -= t, cc.sys.localStorage.setItem("HintNums", this.hintNums.toString()), null != r.default.Instance.gamePanel && r.default.Instance.gamePanel.UpdateHintInfo())
                }, e.prototype.AddHint = function(t) {
                    this.hintNums += t, cc.sys.localStorage.setItem("HintNums", this.hintNums.toString()), null != r.default.Instance.gamePanel && r.default.Instance.gamePanel.UpdateHintInfo()
                }, e.prototype.GameStart = function() {
                    this.grv.Start(180)
                }, e.prototype.InGame = function() {
                    this.grv.RecordClip(3, 3)
                }, e.prototype.GameEnd = function() {
                    this.grv.Stop(!1)
                }, e.prototype.GameShare = function() {
                    this.grv.Share()
                }, i([u(Number)], e.prototype, "levelNums", void 0), e = n = i([c], e)
            }(cc.Component);
        n.default = l, cc._RF.pop()
    }, {
        "./AdManager": "AdManager",
        "./GameFacade": "GameFacade"
    }],
    GameFacade: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "6bc72HCwwZMIJjh7eKCAq78", "GameFacade");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            },
            r = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            a = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (t) {
                        r = [6, t], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("./UIFramework/UIManager"),
            c = t("./UI/MenuPanel"),
            u = t("./UI/GamePanel"),
            l = t("./UI/LevelPanel"),
            d = t("./Prop/Level"),
            h = t("./PrefabManager"),
            p = t("./GameData"),
            f = t("./AudioManager"),
            v = t("./UI/MainPanel"),
            y = t("./Other/Time"),
            m = t("./UI/EffectPanel"),
            g = cc._decorator,
            A = g.ccclass,
            b = g.property,
            w = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.isDemoPackage = !1, e.isOpenPushAd = !0, e.UIMng = null, e.canvas = null, e.audioMng = null, e.effectPanel = null, e.mainPanel = null, e.menuPanel = null, e.gamePanel = null, e.levelPanel = null, e.currentLevel = null, e.guides = [], e.isCompleted = !1, e
                }
                var n;
                return o(e, t), n = e, Object.defineProperty(e, "Instance", {
                    get: function() {
                        return cc.isValid(this.instance) || (this.instance = cc.find("Scripts").getComponent("GameFacade")), this.instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.onLoad = function() {}, e.prototype.start = function() {
                    this.OpenPhysics(), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
                }, e.prototype.OpenPhysics = function() {
                    return r(this, void 0, void 0, function() {
                        return a(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, y.default.WaitForSeconds(.05)];
                                case 1:
                                    return t.sent(), console.log("OPEN PHYSICS"), cc.director.getCollisionManager().enabled = !0, cc.director.getPhysicsManager().enabled = !0, cc.director.getCollisionManager().enabledDebugDraw = !0, [2]
                            }
                        })
                    })
                }, e.prototype.LoadLevel = function(t) {
                    if (t > 0) {
                        this.isCompleted = !1, null != this.currentLevel && this.currentLevel.node.destroy(), console.log("LEVEL-ID:" + t);
                        var e = h.default.NewNode("level/Level" + t);
                        console.log("LEVEL-IDend:" + t), this.currentLevel = e.getComponent(d.default), this.currentLevel.node.setParent(this.gamePanel.gameViewNode), p.default.Instance.CurLevelDataInit(), this.gamePanel.Init()
                    } else null == this.levelPanel && (this.levelPanel = s.default.Instance.GetPanel(s.PanelType.LevelPanel)), this.levelPanel.OnEnter()
                }, e.prototype.RestartLevel = function() {
                    n.Instance.LoadLevel(p.default.Instance.GetCurrtPanel(p.default.Instance.currentGamingLevelId))
                }, e.prototype.CompletedAllLevels = function() {
                    p.default.Instance.currentGamingLevelId = 1, n.Instance.LoadLevel(p.default.Instance.GetCurrtPanel(p.default.Instance.currentGamingLevelId))
                }, e.prototype.LevelCompleted = function() {
                    this.gamePanel.LevelCompleted()
                }, e.prototype.PlayAudioByName = function(t) {
                    this.audioMng.PlayAudioClip(t)
                }, e.prototype.BGMusicMute = function(t) {
                    this.audioMng.bgMusic_Audio.mute = t
                }, e.prototype.StopAudioByName = function(t) {
                    this.audioMng.StopAudioClip(t)
                }, e.prototype.PlayGuideById = function(t) {
                    t > 0 && t <= this.gamePanel.guides.length && 0 == p.default.Instance.isGuided1 && (p.default.Instance.isGuided1 = 1, cc.sys.localStorage.setItem("Guided1", 1), this.gamePanel.guides[t - 1].active = !0)
                }, e.prototype.CommandGuideById = function(t) {
                    t > 0 && t <= this.gamePanel.guides.length && (this.gamePanel.guides[t - 1].active = !0)
                }, e.prototype.CloseGuideById = function(t) {
                    t > 0 && t <= this.gamePanel.guides.length && (this.gamePanel.guides[t - 1].active && (this.gamePanel.guides[t - 1].active = !1), this.gamePanel.isActiveKeyGuide = !1)
                }, e.prototype.onKeyDown = function(t) {
                    switch (t.keyCode) {
                        case cc.macro.KEY.back:
                            cc.sys.os == cc.sys.OS_ANDROID && TJ.APP.Api.Quit()
                    }
                }, e.prototype.onDestroy = function() {
                    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
                }, i([b(Boolean)], e.prototype, "isDemoPackage", void 0), i([b(Boolean)], e.prototype, "isOpenPushAd", void 0), i([b(cc.Node)], e.prototype, "canvas", void 0), i([b(f.default)], e.prototype, "audioMng", void 0), i([b(m.default)], e.prototype, "effectPanel", void 0), i([b(v.default)], e.prototype, "mainPanel", void 0), i([b(c.default)], e.prototype, "menuPanel", void 0), i([b(u.default)], e.prototype, "gamePanel", void 0), i([b(l.default)], e.prototype, "levelPanel", void 0), i([b(d.default)], e.prototype, "currentLevel", void 0), i([b(cc.Node)], e.prototype, "guides", void 0), e = n = i([A], e)
            }(cc.Component);
        n.default = w, cc._RF.pop()
    }, {
        "./AudioManager": "AudioManager",
        "./GameData": "GameData",
        "./Other/Time": "Time",
        "./PrefabManager": "PrefabManager",
        "./Prop/Level": "Level",
        "./UI/EffectPanel": "EffectPanel",
        "./UI/GamePanel": "GamePanel",
        "./UI/LevelPanel": "LevelPanel",
        "./UI/MainPanel": "MainPanel",
        "./UI/MenuPanel": "MenuPanel",
        "./UIFramework/UIManager": "UIManager"
    }],
    GamePanel: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "66cd2+lH0RISpAyALMKF/cG", "GamePanel");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../UIFramework/BasePanel"),
            a = t("../UIFramework/UIManager"),
            s = t("../GameFacade"),
            c = t("../GameData"),
            u = t("../AudioManager"),
            l = t("../AdManager"),
            d = t("./TipPanel"),
            h = t("../../TJ/Shortcut/script/S102"),
            p = cc._decorator,
            f = p.ccclass,
            v = p.property,
            y = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.pushAdObjs = [], e.gameViewNode = null, e.completedNode = null, e.completedPanel = null, e.completedTxt = null, e.comletedAnimNode = null, e.completedNextBtnNode = null, e.completedAdBtnNode = null, e.skipNode = null, e.skipPanel = null, e.hintNode = null, e.hintPanel = null, e.hintTxt = null, e.keyBtnTxt = null, e.hintAdNode = null, e.hintAdPanel = null, e.addDeskPanel = null, e.surpriseADNode = null, e.guides = [], e.levelDelta = 0, e.completedLevelTimer = 0, e.isStartTimer = !1, e.hintTimer = 0, e.isActiveKeyGuide = !1, e.isStartBannaerTimer = !1, e.bannaerTimer = 0, e
                }
                return o(e, t), e.prototype.onLoad = function() {
                    if (!s.default.Instance.isOpenPushAd)
                        for (var t = 0; t < this.pushAdObjs.length; t++) this.pushAdObjs[t].active = !1;
                    this.s102 = cc.find("Canvas/Panel/GamePanel/AddDeskPanel/Panel/S102 copy").getComponent(h.default)
                }, e.prototype.start = function() {
                    l.default.Event("ADV_RDA_SHOW_004", ""), l.default.Event("ADV_RDA_SHOW_005", ""), a.default.Instance, this.keyBtnTxt.string = c.default.Instance.hintNums.toString()
                }, e.prototype.update = function(t) {
                    this.isStartTimer && (this.completedLevelTimer += t, this.isActiveKeyGuide || (this.hintTimer += t, this.hintTimer > 10 && (this.isActiveKeyGuide = !0, this.hintTimer = 0, s.default.Instance.CommandGuideById(1)))), 1 == this.isStartBannaerTimer && (this.bannaerTimer += t, this.bannaerTimer > 30 && (this.isStartBannaerTimer = !1))
                }, e.prototype.OnEnter = function() {
                    this.node.active = !0, this.UpdateHintInfo()
                }, e.prototype.OnExit = function() {
                    this.node.active = !1
                }, e.prototype.Init = function() {
                    this.completedTxt.string = c.default.Instance.currentLevelDatas[3], l.default.Event("start_", c.default.Instance.currentGamingLevelId.toString()), this.completedLevelTimer = 0, this.hintTimer = 0, this.isStartTimer = !0, s.default.Instance.CloseGuideById(1), this.levelDelta++, this.levelDelta % 4 == 0 && (this.surpriseADNode.active = !0, l.default.Event("GAME_PAGE_001", "")), l.default.ShowBanner()
                }, e.prototype.LevelCompleted = function() {
                    var t = this;
                    this.levelDelta % 2 == 0 && (this.completedAdBtnNode.position = cc.v2(-this.completedAdBtnNode.position.x, this.completedAdBtnNode.position.y), this.completedNextBtnNode.position = cc.v2(-this.completedNextBtnNode.position.x, this.completedNextBtnNode.position.y)), this.comletedAnimNode.active = !1, this.completedPanel.scale = 0, this.completedNode.active = !0, l.default.Event("ADV_RDA_SHOW_002", ""), this.comletedAnimNode.position = new cc.Vec2(0, -this.node.height / 2 - this.comletedAnimNode.height / 2);
                    var e = cc.scaleTo(.3, 1).easing(cc.easeBackOut()),
                        n = cc.scaleTo(.3, 1),
                        o = cc.callFunc(function() {
                            t.comletedAnimNode.active = !0, t.comletedAnimNode.runAction(cc.moveTo(.3, new cc.Vec2(0, -t.node.height / 2 + t.comletedAnimNode.height / 2))), s.default.Instance.PlayAudioByName(u.AudioClipName.hands)
                        }),
                        i = cc.sequence(e, n, o);
                    this.completedPanel.runAction(i), this.isStartTimer = !1, this.completedLevelTimer > 20 && l.default.Event("win20_", c.default.Instance.currentGamingLevelId.toString()), l.default.Event("win_", c.default.Instance.currentGamingLevelId.toString()), c.default.Instance.currentGamingLevelId >= 2 && 0 == this.isStartBannaerTimer && (this.bannaerTimer = 0, this.isStartBannaerTimer = !0, l.default.ShowNormal()), this.levelDelta % 3 == 0 && (l.default.Instance.surpriseADPanel.node.active = !0), cc.sys.platform == cc.sys.OPPO_GAME && 4 == c.default.Instance.currentGamingLevelId && 0 == c.default.Instance.isGameAddDeskPanel && this.CheckShow(h.default.onSuccess)
                }, e.prototype.CheckShow = function(t) {
                    var e = this;
                    void 0 === t && (t = null);
                    var n = new TJ.Extern.OPPO.QG.HasShortcutInstalledParam;
                    n.success = function(n) {
                        console.log("OPPO.QG.HasShortcutInstalled success = " + JSON.stringify(n)), n ? null != t && t() : (e.s102.node.active = !0, e.addDeskPanel.active = !0)
                    }, TJ.Extern.OPPO.QG.HasShortcutInstalled(n)
                }, e.prototype.ActiveHintPanel = function() {
                    l.default.Event("ADV_RDA_CLICK_" + c.default.Instance.currentGamingLevelId + "_003", ""), this.hintPanel.scale = 0, this.hintTxt.string = c.default.Instance.currentLevelDatas[2], this.hintTxt.node.scale = 1, this.hintNode.active = !0, this.hintPanel.runAction(cc.scaleTo(.3, 1).easing(cc.easeBackOut()))
                }, e.prototype.LevelListBtnClick = function() {
                    null == s.default.Instance.levelPanel && (s.default.Instance.levelPanel = a.default.Instance.GetPanel(a.PanelType.LevelPanel)), s.default.Instance.levelPanel.OnEnter()
                }, e.prototype.MenuBtnClick = function() {
                    null == s.default.Instance.menuPanel && (s.default.Instance.menuPanel = a.default.Instance.GetPanel(a.PanelType.MenuPanel)), s.default.Instance.menuPanel.OnEnter()
                }, e.prototype.RestartBtnClick = function() {
                    s.default.Instance.LoadLevel(c.default.Instance.GetCurrtPanel(c.default.Instance.currentGamingLevelId)), l.default.Event("GAME_PAGE_" + c.default.Instance.currentGamingLevelId + "_003", "")
                }, e.prototype.NextBtnClick = function() {
                    l.default.Event("ADV_RDA_SHOW_006", ""), this.skipPanel.scale = 0, this.skipNode.active = !0;
                    var t = cc.scaleTo(.3, 1).easing(cc.easeBackOut()),
                        e = cc.scaleTo(.3, 1),
                        n = cc.sequence(t, e);
                    this.skipPanel.runAction(n)
                }, e.prototype.SkipPanelAdClick = function() {
                    var t = this;
                    c.default.Instance.currentGamingLevelId < c.default.Instance.levelNums ? (l.default.Event("ADV_RDA_CLICK_006", ""), l.default.Event("ADV_RDA_CLICK_" + c.default.Instance.currentGamingLevelId + "_001", ""), s.default.Instance.BGMusicMute(!0), c.default.Instance.awardsNUm = l.default.factAwardNum, l.default.ShowReward(function() {
                        c.default.Instance.NextLevel(), s.default.Instance.LoadLevel(c.default.Instance.GetCurrtPanel(c.default.Instance.currentGamingLevelId)), t.skipNode.active = !1, l.default.Event("ad_skip", ""), 1 == t.completedNode.active && (t.completedNode.active = !1, t.comletedAnimNode.stopAllActions(), s.default.Instance.StopAudioByName(u.AudioClipName.hands))
                    })) : d.default.instance.ShowLog("Chúng tôi sẽ cập nhật level mới sớm nhất")
                }, e.prototype.SkipPanelKeyClick = function() {
                    c.default.Instance.currentGamingLevelId < c.default.Instance.levelNums ? (l.default.Event("ADV_RDA_CLICK_" + c.default.Instance.currentGamingLevelId + "_002", ""), c.default.Instance.hintNums >= 2 ? (c.default.Instance.UseHint(2), c.default.Instance.NextLevel(), s.default.Instance.LoadLevel(c.default.Instance.GetCurrtPanel(c.default.Instance.currentGamingLevelId)), this.skipNode.active = !1, 1 == this.completedNode.active && (this.completedNode.active = !1, this.comletedAnimNode.stopAllActions(), s.default.Instance.StopAudioByName(u.AudioClipName.hands))) : d.default.instance.ShowLog("Không đủ chìa khóa"), s.default.Instance.CloseGuideById(1)) : d.default.instance.ShowLog("Arcade sẽ cập nhật level mới nhanh nhất")
                }, e.prototype.SkipPanelCloseClick = function() {
                    this.skipNode.active = !1
                }, e.prototype.NextLevelBtnClick = function() {
                    c.default.Instance.currentGamingLevelId == c.default.Instance.levelNums ? (s.default.Instance.gamePanel.LevelListBtnClick(), s.default.Instance.CompletedAllLevels()) : (c.default.Instance.NextLevel(), s.default.Instance.LoadLevel(c.default.Instance.GetCurrtPanel(c.default.Instance.currentGamingLevelId))), 1 == this.completedNode.active && (this.completedNode.active = !1, this.comletedAnimNode.stopAllActions(), s.default.Instance.StopAudioByName(u.AudioClipName.hands))
                }, e.prototype.HintBtnClick = function() {
                    if (c.default.Instance.hintNums > 0) c.default.Instance.UseHint(), this.ActiveHintPanel();
                    else if (this.hintAdPanel.scale = 0, TJ.ADS.Api.RewardReady(new TJ.ADS.Param)) {
                        console.log("\u6fc0\u52b1\u89c6\u9891\u51c6\u5907\u597d\u4e86"), this.hintAdNode.active = !0;
                        var t = cc.scaleTo(.3, 1).easing(cc.easeBackOut()),
                            e = cc.scaleTo(.3, 1),
                            n = cc.sequence(t, e);
                        this.hintAdPanel.runAction(n)
                    } else console.log("Video không có sẵn"), d.default.instance.ShowLog("Không còn lượt xem video quảng cáo");
                    s.default.Instance.CloseGuideById(1)
                }, e.prototype.HintPanelCloseBtnClick = function() {
                    this.hintNode.active = !1
                }, e.prototype.HintAdPanelAdClick = function() {
                    s.default.Instance.BGMusicMute(!0), c.default.Instance.awardsNUm = l.default.factAwardNum, l.default.ShowReward(function() {
                        c.default.Instance.AddHint(1), s.default.Instance.effectPanel.GetKeyToNum(1), l.default.Event("ad_key", "")
                    }), 0 == c.default.Instance.hintNums ? l.default.Event("ADV_RDA_CLICK_007", "") : l.default.Event("ADV_RDA_CLICK_008", "")
                }, e.prototype.HintAdPanelCloseClick = function() {
                    0 == c.default.Instance.hintNums ? l.default.Event("ADV_RDA_SHOW_007", "") : l.default.Event("ADV_RDA_SHOW_008", ""), this.hintAdNode.active = !1
                }, e.prototype.GetKeyADBtnClick = function(t, e) {
                    s.default.Instance.BGMusicMute(!0), c.default.Instance.awardsNUm = l.default.factAwardNum, l.default.ShowReward(function() {
                        c.default.Instance.AddHint(1), s.default.Instance.effectPanel.GetKeyToNum(1), l.default.Event("ad_key", "")
                    }), 1 == Number(e) ? (l.default.Event("ADV_RDA_CLICK_004", ""), l.default.Event("ADV_RDA_CLICK_" + c.default.Instance.currentGamingLevelId + "_001", "")) : l.default.Event("ADV_RDA_CLICK_002", "")
                }, e.prototype.GetAnswerBtnClick = function(t, e) {
                    var n = this;
                    s.default.Instance.BGMusicMute(!0), c.default.Instance.awardsNUm = l.default.factAwardNum, l.default.ShowReward(function() {
                        n.ActiveHintPanel(), l.default.Event("ad_tips", "")
                    }), 1 == Number(e) && (l.default.Event("ADV_RDA_CLICK_005", ""), l.default.Event("ADV_RDA_CLICK_" + c.default.Instance.currentGamingLevelId + "_002", ""))
                }, e.prototype.SurpriseADBtnClick = function() {
                    l.default.Event("GAME_PAGE_002", ""), this.surpriseADNode.active = !1, l.default.Instance.surpriseADPanel.node.active = !0
                }, e.prototype.AddDeskBtnClick = function() {
                    var t = new TJ.GSA.Param;
                    t.id = "ad_destop", TJ.GSA.Api.Event(t);
                    var e = new TJ.Extern.OPPO.QG.CallbackParam;
                    e.success = function() {
                        d.default.instance.ShowLog("Chúc mừng bạn nhận 1 chìa khóa!", function() {
                            l.default.Event("END_PAGE_004", "")
                        }), c.default.Instance.AddHint(1), s.default.Instance.effectPanel.GetKeyToNum(1)
                    }, TJ.Extern.OPPO.QG.InstallShortcut(e), d.default.instance.ShowLog("Thêm icon vào Desktop"), this.addDeskPanel.active = !1, c.default.Instance.isGameAddDeskPanel = 1, cc.sys.localStorage.setItem("isGameAddDesk", c.default.Instance.isGameAddDeskPanel)
                }, e.prototype.AddDeskCloseBtnClick = function() {
                    this.addDeskPanel.active = !1
                }, e.prototype.UpdateHintInfo = function() {
                    this.keyBtnTxt.string = c.default.Instance.hintNums.toString()
                }, i([v(cc.Node)], e.prototype, "pushAdObjs", void 0), i([v(cc.Node)], e.prototype, "gameViewNode", void 0), i([v(cc.Node)], e.prototype, "completedNode", void 0), i([v(cc.Node)], e.prototype, "completedPanel", void 0), i([v(cc.Label)], e.prototype, "completedTxt", void 0), i([v(cc.Node)], e.prototype, "comletedAnimNode", void 0), i([v(cc.Node)], e.prototype, "completedNextBtnNode", void 0), i([v(cc.Node)], e.prototype, "completedAdBtnNode", void 0), i([v(cc.Node)], e.prototype, "skipNode", void 0), i([v(cc.Node)], e.prototype, "skipPanel", void 0), i([v(cc.Node)], e.prototype, "hintNode", void 0), i([v(cc.Node)], e.prototype, "hintPanel", void 0), i([v(cc.Label)], e.prototype, "hintTxt", void 0), i([v(cc.Label)], e.prototype, "keyBtnTxt", void 0), i([v(cc.Node)], e.prototype, "hintAdNode", void 0), i([v(cc.Node)], e.prototype, "hintAdPanel", void 0), i([v(cc.Node)], e.prototype, "addDeskPanel", void 0), i([v(cc.Node)], e.prototype, "surpriseADNode", void 0), i([v(cc.Node)], e.prototype, "guides", void 0), e = i([f], e)
            }(r.default);
        n.default = y, cc._RF.pop()
    }, {
        "../../TJ/Shortcut/script/S102": "S102",
        "../AdManager": "AdManager",
        "../AudioManager": "AudioManager",
        "../GameData": "GameData",
        "../GameFacade": "GameFacade",
        "../UIFramework/BasePanel": "BasePanel",
        "../UIFramework/UIManager": "UIManager",
        "./TipPanel": "TipPanel"
    }],
    General: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "27628cUv1JAgYLh6XBq0omG", "General");
        var o = this && this.__extends || function() {
            var t = function(e, n) {
                return (t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(e, n)
            };
            return function(e, n) {
                function o() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.item = null, e.indexCount = 0, e.item = [], e.indexCount = 0, e
            }
            return o(e, t), Object.defineProperty(e.prototype, "Count", {
                get: function() {
                    return this.indexCount
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.Add = function(t) {
                this.item[this.indexCount++] = t
            }, e.prototype.Remove = function(t) {
                if (0 == this.indexCount) throw new Error("collection is not element");
                var e = this.ItemIndexOf(t);
                if (-1 == e) throw new Error("not this element ");
                this.RemoveItemUseIndex(e)
            }, e.prototype.RemoveAt = function(t) {
                if (0 == this.indexCount || t < 0 || t >= this.indexCount) throw new Error("Beyond the index " + t);
                this.RemoveItemUseIndex(t)
            }, e.prototype.RemoveItemUseIndex = function(t) {
                for (; t < this.indexCount - 1; t++) this.item[t] = this.item[t + 1];
                this.item[t] = null, this.indexCount--, this.item.length = this.indexCount
            }, e.prototype.Contain = function(t) {
                return this.indexCount > 0 && this.ItemIndexOf(t) > -1
            }, e.prototype.ItemIndexOf = function(t) {
                for (var e = 0; e < this.indexCount && t != this.item[e]; e++);
                return e < this.indexCount ? e : -1
            }, e.prototype.Item = function(t) {
                if (t >= 0 && t < this.indexCount) return this.item[t];
                throw new Error("Beyond the index " + t)
            }, e.prototype.SetItem = function(t, e) {
                if (!(t >= 0 && t < this.indexCount)) throw new Error("Beyond the index " + t);
                this.item[t] = e
            }, e.prototype.Clear = function() {
                this.item = [], this.item.length = 0, this.indexCount = 0
            }, e.prototype.ToArray = function() {
                return this.item
            }, e
        }(cc.ValueType);
        n.List = i;
        var r = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.indexCount = 0, e.itemKey = new i, e.itemValue = new i, e.indexCount = 0, e
            }
            return o(e, t), Object.defineProperty(e.prototype, "Count", {
                get: function() {
                    return this.indexCount
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.Add = function(t, e) {
                if (this.ContainKey(t)) throw new Error("contain this key");
                this.itemKey.Add(t), this.itemValue.Add(e), this.indexCount++
            }, e.prototype.Remove = function(t) {
                if (0 == this.indexCount) throw new Error("collection not element");
                var e = this.itemKey.ItemIndexOf(t);
                if (-1 == e) throw new Error("not this key value");
                this.itemKey.RemoveAt(e), this.itemValue.RemoveAt(e), this.indexCount--
            }, e.prototype.RemoveByValue = function(t) {
                if (0 == this.indexCount) throw new Error("collection not element");
                var e = this.itemValue.ItemIndexOf(t);
                if (-1 == e) throw new Error("not this key value");
                this.itemKey.RemoveAt(e), this.itemValue.RemoveAt(e), this.indexCount--
            }, e.prototype.RemoveAt = function(t) {
                if (0 == this.indexCount || t >= this.indexCount || t < 0) throw new Error("Beyond the index " + t);
                this.itemKey.RemoveAt(t), this.itemValue.RemoveAt(t), this.indexCount--
            }, e.prototype.ContainKey = function(t) {
                return this.itemKey.Contain(t)
            }, e.prototype.ContainValue = function(t) {
                return this.itemValue.Contain(t)
            }, e.prototype.TryGetValue = function(t) {
                if (0 == this.indexCount) return null;
                var e = this.itemKey.ItemIndexOf(t);
                return -1 == e ? null : this.itemValue.Item(e)
            }, e.prototype.Item = function(t) {
                if (0 == this.indexCount) throw new Error("collection not element");
                var e = this.itemKey.ItemIndexOf(t);
                if (-1 == e) throw new Error("not this key");
                return this.itemValue.Item(e)
            }, e.prototype.SetItem = function(t, e) {
                if (0 == this.indexCount) throw new Error("collection not element");
                var n = this.itemKey.ItemIndexOf(t);
                if (-1 == n) throw new Error("not this key");
                this.itemValue.SetItem(n, e)
            }, e.prototype.ItemKeyofIndex = function(t) {
                return this.itemKey.Item(t)
            }, e.prototype.ItemValueofIndex = function(t) {
                return this.itemValue.Item(t)
            }, e.prototype.GetValue = function() {
                return this.itemValue
            }, e.prototype.GetKey = function() {
                return this.itemKey
            }, e.prototype.Clear = function() {
                this.itemKey.Clear(), this.itemValue.Clear(), this.indexCount = 0
            }, e
        }(cc.ValueType);
        n.Dictionary = r;
        var a = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.indexCount = 0, e.item = [], e.indexCount = length, e
            }
            return o(e, t), Object.defineProperty(e.prototype, "Count", {
                get: function() {
                    return this.indexCount
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.Push = function(t) {
                this.item[this.indexCount++] = t
            }, e.prototype.Pop = function() {
                if (0 == this.indexCount) throw new Error("collection not element");
                var t = this.item[this.indexCount - 1];
                return this.indexCount--, this.item.length = this.indexCount, t
            }, e.prototype.See = function() {
                if (0 == this.indexCount) throw new Error("collection not element");
                return this.item[this.item.length - 1]
            }, e.prototype.Contain = function(t) {
                return this.ItemIndexOf(t) > -1
            }, e.prototype.ItemIndexOf = function(t) {
                for (var e = 0; e < this.indexCount && t != this.item[e]; e++);
                return e < this.indexCount ? e : -1
            }, e.prototype.Item = function(t) {
                if (t >= 0 && t < this.indexCount) return this.item[t];
                throw new Error("Beyond the index " + t)
            }, e.prototype.Clear = function() {
                this.item = [], this.item.length = 0, this.indexCount = 0
            }, e
        }(cc.ValueType);
        n.Stack = a;
        var s = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.indexCount = 0, e.item = [], e.indexCount = 0, e
            }
            return o(e, t), Object.defineProperty(e.prototype, "Count", {
                get: function() {
                    return this.indexCount
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.Push = function(t) {
                this.item[this.indexCount++] = t
            }, e.prototype.Pop = function() {
                if (0 == this.indexCount) throw new Error("collection not element");
                for (var t = this.item[0], e = 1; e < this.indexCount; e++) this.item[e - 1] = this.item[e];
                return this.item[this.indexCount - 1] = null, this.indexCount--, this.item.length = this.indexCount, t
            }, e.prototype.PopLast = function() {
                if (0 == this.indexCount) throw new Error("collection not element");
                var t = this.item[this.indexCount - 1];
                return this.indexCount--, this.item.length = this.indexCount, t
            }, e.prototype.See = function() {
                if (0 == this.indexCount) throw new Error("collection not element");
                return this.item[0]
            }, e.prototype.SeeLast = function() {
                if (0 == this.indexCount) throw new Error("collection not element");
                return this.item[this.indexCount - 1]
            }, e.prototype.Contain = function(t) {
                if (0 == this.indexCount) throw new Error("collection not element");
                return this.ItemIndexOf(t) > -1
            }, e.prototype.ItemIndexOf = function(t) {
                for (var e = 0; e < this.indexCount && t != this.item[e]; e++);
                return e < this.indexCount ? e : -1
            }, e.prototype.Item = function(t) {
                if (t >= 0 && t < this.indexCount) return this.item[t];
                throw new Error("Beyond the index " + t)
            }, e.prototype.Clear = function() {
                this.item = [], this.item.length = 0, this.indexCount = 0
            }, e
        }(cc.ValueType);
        n.Queue = s;
        var c = function(t) {
            function e(e) {
                void 0 === e && (e = 0);
                var n = t.call(this) || this;
                return n.seed = 0, n.seed = e, n
            }
            return o(e, t), e.prototype.Range = function(t, e) {
                return this.rnd() * (e - t) + t
            }, e.prototype.RangeInt = function(t, e) {
                return Math.round(this.rnd() * (e - t - 1) + t)
            }, e.prototype.rnd = function() {
                return this.seed = (9301 * this.seed + 49297) % 233280, this.seed / 233280
            }, e
        }(cc.ValueType);
        n.Random = c;
        var u = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.temp = [], e.length = 0, e
            }
            return o(e, t), Object.defineProperty(e.prototype, "Count", {
                get: function() {
                    return this.length
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.Add = function(t) {
                this.temp[this.length++] = t
            }, e.prototype.Contion = function(t) {
                for (var e = 0; e < this.length; e++)
                    if (this.temp[e] == t) return e;
                return -1
            }, e
        }(cc.ValueType);
        n.Test = u, cc._RF.pop()
    }, {}],
    InputElement: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "4f094P92qhJqoV8C0GE+NaU", "InputElement");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r, a = t("./CharacterController"),
            s = cc._decorator,
            c = s.ccclass,
            u = s.property;
        (function(t) {
            t[t.none = 0] = "none", t[t.characterRight = 1] = "characterRight", t[t.characterLeft = 2] = "characterLeft", t[t.characterJump = 3] = "characterJump"
        })(r || (r = {}));
        var l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.inputType = r.none, e.characterController = null, e.CurLevelId = 1, e.isButtonDown = !1, e
            }
            return o(e, t), e.prototype.onLoad = function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
            }, e.prototype.start = function() {}, e.prototype.onTouchStart = function(t) {
                this.isButtonDown = !0, this.onTouchStartByLevelId()
            }, e.prototype.onTouchEnd = function(t) {
                this.isButtonDown = !1, this.onTouchEndByLevelId()
            }, e.prototype.onDestroy = function() {
                this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
            }, e.prototype.onTouchStartByLevelId = function() {
                switch (this.CurLevelId) {
                    case 35:
                        switch (this.inputType) {
                            case r.characterLeft:
                                this.characterController.LeftMoveBtnDown();
                                break;
                            case r.characterRight:
                                this.characterController.RightMoveBtnDown();
                                break;
                            case r.characterJump:
                                this.characterController.JumpBtnDown()
                        }
                }
            }, e.prototype.onTouchEndByLevelId = function() {
                switch (this.CurLevelId) {
                    case 35:
                        switch (this.inputType) {
                            case r.characterLeft:
                                this.characterController.LeftMoveBtnUp();
                                break;
                            case r.characterRight:
                                this.characterController.RightMoveBtnUp();
                                break;
                            case r.characterJump:
                                this.characterController.JumpBtnUp()
                        }
                }
            }, i([u({
                type: cc.Enum(r)
            })], e.prototype, "inputType", void 0), i([u(a.default)], e.prototype, "characterController", void 0), i([u(Number)], e.prototype, "CurLevelId", void 0), e = i([c], e)
        }(cc.Component);
        n.default = l, cc._RF.pop()
    }, {
        "./CharacterController": "CharacterController"
    }],
    InputNumPanel: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "39de5/ZGWpHUISr1fMIjya9", "InputNumPanel");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            a = r.ccclass,
            s = r.property,
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.label = null, e.text = "", e.changelabel = null, e
                }
                return o(e, t), Object.defineProperty(e, "Instance", {
                    get: function() {
                        return cc.isValid(this.instance) || (this.instance = cc.find("Canvas/CountInputPanel").getComponent("InputNumPanel")), this.instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.EnterInput = function(t) {
                    this.text = "", this.ShowLabel("Nhập đáp án"), this.node.active = !0, this.changelabel = t
                }, e.prototype.InputNum = function(t, e) {
                    "Nhập đáp án" == this.text && (this.text = ""), this.text.length < 10 && (console.log("\u7c7b\u578b\uff1a" + typeof e), console.log("\u5185\u5bb91\uff1a" + e), console.log("\u5185\u5bb92\uff1a" + this.text), this.text = this.text.concat(e), console.log("\u5185\u5bb93\uff1a" + this.text), this.ShowLabel(this.text))
                }, e.prototype.DeleteNum = function() {
                    "" != this.text && "Nhập đáp án" != this.text && (this.text = this.text.substring(0, this.text.length - 1), "" == this.text && (this.text = "Nhập đáp án"), this.ShowLabel(this.text))
                }, e.prototype.ShowLabel = function(t) {
                    this.label.string = t
                }, e.prototype.SureChange = function() {
                    this.changelabel.string = this.text, this.text = "", this.ShowLabel("Nhập đáp án"), this.node.active = !1
                }, i([s(cc.Label)], e.prototype, "label", void 0), e = i([a], e)
            }(cc.Component);
        n.default = c, cc._RF.pop()
    }, {}],
    LevelItemData: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "f86d1efXvdEOYdno8IBUsni", "LevelItemData");
        var o = this && this.__decorate || function(t, e, n, o) {
            var i, r = arguments.length,
                a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
            else
                for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
            return r > 3 && a && Object.defineProperty(e, n, a), a
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            r = (i.ccclass, i.property),
            a = function() {
                function t(t, e, n) {
                    this.levelId = 1, this.bgSprite = null, this.lockedType = 0, this.levelId = t, this.bgSprite = e, this.lockedType = n
                }
                return o([r(Number)], t.prototype, "levelId", void 0), o([r(cc.SpriteFrame)], t.prototype, "bgSprite", void 0), o([r(Number)], t.prototype, "lockedType", void 0), t
            }();
        n.LevelItemData = a, cc._RF.pop()
    }, {}],
    LevelItem: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "4b9016jttxJ6Lm0RxBvYUG5", "LevelItem");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../GameData"),
            a = t("../GameFacade"),
            s = cc._decorator,
            c = s.ccclass,
            u = s.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.levelLabel = null, e.bgSprite = null, e.lockedTypeNodes = [], e.Unlocked = !1, e.levelId = 1, e
                }
                return o(e, t), e.prototype.Init = function(t) {
                    this.levelLabel.string = t.levelId.toString(), this.bgSprite.spriteFrame = t.bgSprite, this.levelId = t.levelId;
                    for (var e = 0; e < this.lockedTypeNodes.length; e++) e == t.lockedType ? (this.lockedTypeNodes[e].active = !0, 2 != t.lockedType ? this.Unlocked = !0 : this.Unlocked = !1) : this.lockedTypeNodes[e].active = !1
                }, e.prototype.LevelBtnClick = function() {
                    r.default.Instance.currentLevelId >= this.levelId && (r.default.Instance.currentGamingLevelId = this.levelId, a.default.Instance.LoadLevel(r.default.Instance.GetCurrtPanel(this.levelId)), a.default.Instance.levelPanel.node.active = !1)
                }, e.prototype.onLoad = function() {}, e.prototype.start = function() {}, i([u(cc.Label)], e.prototype, "levelLabel", void 0), i([u(cc.Sprite)], e.prototype, "bgSprite", void 0), i([u(cc.Node)], e.prototype, "lockedTypeNodes", void 0), e = i([c], e)
            }(cc.Component);
        n.default = l, cc._RF.pop()
    }, {
        "../GameData": "GameData",
        "../GameFacade": "GameFacade"
    }],
    LevelPanel: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "a6b16GXptBNnZ4ZDOoiHnJI", "LevelPanel");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../UIFramework/BasePanel"),
            a = t("../Other/LevelItemData"),
            s = t("../Other/Random"),
            c = t("../GameData"),
            u = t("../Other/LevelItem"),
            l = t("../AdManager"),
            d = cc._decorator,
            h = d.ccclass,
            p = d.property,
            f = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.itemParentNode = null, e.levelItem = null, e.OPPONativeNode = null, e.UpdateItem = null, e.itemSprites = [], e.levelItems = [], e.index = 0, e
                }
                return o(e, t), e.prototype.onLoad = function() {}, e.prototype.OnEnter = function() {
                    this.node.active = !0, 0 == this.levelItems.length ? this.Init() : this.UpdateLevelItems(), l.default.ShowBanner(), cc.sys.platform == cc.sys.OPPO_GAME || cc.sys.platform == cc.sys.VIVO_GAME ? (this.OPPONativeNode.active = !0, this.OPPONativeNode.setSiblingIndex(c.default.Instance.currentGamingLevelId - 1), console.log("\u5f53\u524dNative\u662fOPPO")) : this.OPPONativeNode.active = !1, this.UpdateItem.setSiblingIndex(this.UpdateItem.parent.childrenCount - 1)
                }, e.prototype.OnExit = function() {
                    this.node.active = !1
                }, e.prototype.start = function() {}, e.prototype.Init = function() {
                    this.levelItems = new Array(c.default.Instance.levelNums);
                    for (var t = 0; t < 29; t++) {
                        this.index = t;
                        var e = cc.instantiate(this.levelItem),
                            n = 0;
                        n = t + 1 < c.default.Instance.currentLevelId ? 1 : t + 1 == c.default.Instance.currentLevelId ? 0 : 2;
                        var o = new a.LevelItemData(t + 1, this.itemSprites[s.default.Range(0, this.itemSprites.length)], n);
                        this.itemParentNode.addChild(e);
                        var i = e.getComponent(u.default);
                        i.Init(o), this.levelItems[t] = i
                    }
                }, e.prototype.update = function(t) {}, e.prototype.UpdateLevelItems = function() {
                    for (var t = 0; t < 29; t++) {
                        var e = 0;
                        e = t + 1 < c.default.Instance.currentLevelId ? 1 : t + 1 == c.default.Instance.currentLevelId ? 0 : 2;
                        var n = new a.LevelItemData(t + 1, this.itemSprites[s.default.Range(0, this.itemSprites.length)], e);
                        this.levelItems[t].Init(n)
                    }
                }, e.prototype.BackBtnClick = function() {
                    this.node.active = !1
                }, i([p(cc.Node)], e.prototype, "itemParentNode", void 0), i([p(cc.Prefab)], e.prototype, "levelItem", void 0), i([p(cc.Node)], e.prototype, "OPPONativeNode", void 0), i([p(cc.Node)], e.prototype, "UpdateItem", void 0), i([p([cc.SpriteFrame])], e.prototype, "itemSprites", void 0), e = i([h], e)
            }(r.default);
        n.default = f, cc._RF.pop()
    }, {
        "../AdManager": "AdManager",
        "../GameData": "GameData",
        "../Other/LevelItem": "LevelItem",
        "../Other/LevelItemData": "LevelItemData",
        "../Other/Random": "Random",
        "../UIFramework/BasePanel": "BasePanel"
    }],
    Level: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "baab8CAJvZI37YWHlSkxUlB", "Level");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            },
            r = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            a = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (t) {
                        r = [6, t], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("../GameFacade"),
            c = t("../Other/Random"),
            u = t("../GameData"),
            l = t("../AudioManager"),
            d = t("../Other/General"),
            h = t("../Other/Time"),
            p = t("./CharacterController"),
            f = t("../InputNumPanel"),
            v = cc._decorator,
            y = v.ccclass,
            m = v.property,
            g = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.characterController = null, e.levelIDTxt = null, e.levelTitleTxt = null, e.completedLogo = null, e.failLogo = null, e.elements = [], e.isRamdomPos = !1, e.isActiveTitleTxt = !0, e.levelData = new Array(4), e.isGaming = !1, e.isLogoAnim = !1, e.isElementAnim = !1, e.elementNumTxt = null, e.elementNum = 0, e.changeSprite = null, e.changeSpriteFrame = null, e.changeSpriteTargetNode = null, e.editBoxLab = null, e.currentOrderId = 1, e.orderValue = "", e.currentOrderValue = "", e.targetNodesA = [], e.targetNodesB = [], e.targetNodesC = [], e
                }
                return o(e, t), e.prototype.onLoad = function() {
                    this.LevelInit(), this.completedLogo.active = !1, this.RandomElementsPos()
                }, e.prototype.start = function() {}, e.prototype.LevelInit = function() {
                    this.levelIDTxt.string = "Lv." + u.default.Instance.currentGamingLevelId.toString(), this.isActiveTitleTxt && (this.levelData = u.default.Instance.GetCurLevelData().split("^"), this.levelTitleTxt.string = this.levelData[1])
                }, e.prototype.RandomElementsPos = function() {
                    if (this.isRamdomPos && this.elements.length > 1) {
                        for (var t = Array(this.elements.length), e = 0; e < this.elements.length; e++) t[e] = this.elements[e].position;
                        var n = Array(this.elements.length);
                        for (e = 0; e < this.elements.length; e++) n[e] = e;
                        var o = Array(this.elements.length);
                        for (e = 0; e < this.elements.length; e++) {
                            var i = c.default.Range(0, n.length);
                            o[e] = n[i], n.splice(i, 1)
                        }
                        for (e = 0; e < this.elements.length; e++) this.elements[e].position = t[o[e]]
                    }
                }, e.prototype.RandomTargetElementPos = function(t) {
                    if (this.elements.length > 1) {
                        for (var e = Array(this.elements.length), n = 0; n < this.elements.length; n++) e[n] = this.elements[n].position;
                        var o = Array(this.elements.length);
                        for (n = 0; n < this.elements.length; n++) o[n] = n;
                        var i = Array(this.elements.length);
                        for (n = 0; n < this.elements.length; n++) {
                            var r = c.default.Range(0, o.length);
                            i[n] = o[r], o.splice(r, 1)
                        }
                        t.position = e[i[c.default.Range(0, this.elements.length)]]
                    }
                }, e.prototype.Completed = function(t) {
                    if (void 0 === t && (t = cc.v2()), !this.isLogoAnim) {
                        if (!s.default.Instance.isCompleted) {
                            this.isLogoAnim = !0, this.completedLogo.position = t, this.completedLogo.setSiblingIndex(this.node.childrenCount - 1), this.completedLogo.scale = 0, this.completedLogo.active = !0;
                            var e = cc.scaleTo(.7, 1),
                                n = cc.scaleTo(.3, 1),
                                o = cc.sequence(e, n, cc.callFunc(function() {
                                    s.default.Instance.isCompleted = !0, s.default.Instance.LevelCompleted()
                                }));
                            this.completedLogo.runAction(o)
                        }
                        console.log("\u58f0\u97f3\u64ad\u653e\uff1a" + l.AudioClipName.rightKey), s.default.Instance.PlayAudioByName(l.AudioClipName.rightKey)
                    }
                }, e.prototype.Failed = function(t, e, n) {
                    if (void 0 === t && (t = cc.v2()), void 0 === e && (e = !1), !this.isLogoAnim) {
                        e && (this.isLogoAnim = !0);
                        var o = cc.instantiate(this.failLogo);
                        o.parent = this.node, o.setSiblingIndex(this.node.childrenCount - 1), o.position = t, o.scale = 0, o.active = !0;
                        var i = cc.scaleTo(.5, 1),
                            r = cc.scaleTo(.3, 1),
                            a = cc.scaleTo(.5, 0),
                            c = cc.sequence(i, r, a, cc.callFunc(function() {
                                o.destroy(), n && n()
                            }));
                        o.runAction(c), s.default.Instance.PlayAudioByName(l.AudioClipName.wrong), s.default.Instance.PlayGuideById(1)
                    }
                }, e.prototype.ComposeElementScale = function(t, e) {
                    if (void 0 === e && (e = null), 0 != this.elements.length) {
                        for (var n, o, i = Number.MAX_VALUE, r = 0; r < this.elements.length; r++)
                            if (this.elements[r] != t) {
                                var a = this.elements[r].position.sub(t.position).mag();
                                a <= i && (i = a, e = this.elements[r], o = r)
                            } else n = r;
                        null != e && t.x <= e.x + e.width / 2 && t.x >= e.x - e.width / 2 && t.y <= e.y + e.height / 2 && t.y >= e.y - e.height / 2 && (e.width * e.scale >= t.width * t.scale ? (e.runAction(cc.scaleTo(.2, e.scale + .3 + t.scale - 1)), this.elements.splice(n, 1), t.destroy()) : (t.runAction(cc.scaleTo(.2, t.scale + .3 + e.scale - 1)), this.elements.splice(o, 1), e.destroy()))
                    }
                }, e.prototype.ChangeSprite = function(t) {
                    void 0 === t && (t = null), null != this.changeSprite && (this.changeSprite.spriteFrame = this.changeSpriteFrame, null != this.changeSpriteTargetNode && (this.changeSpriteTargetNode.active = !0), null != t && t())
                }, e.prototype.CheckTouchNameID = function(t, e) {
                    void 0 === e && (e = !0);
                    var n = !0;
                    if (e) {
                        for (i = new d.List, r = 0; r < t.length; r++) i.Add(this.touchsNameId[r]);
                        for (r = 0; r < t.length; r++) {
                            if (i[r] != t[r]) {
                                n = !1;
                                break
                            }
                            i.Remove(t[r])
                        }
                    } else {
                        for (var o = new d.List, i = new d.List, r = 0; r < t.length; r++) o.Add(t[r]), i.Add(this.touchsNameId[r]);
                        for (var r = 0; r < t.length; r++) i.Contain(t[r]) ? i.Remove(t[r]) : n = !1;
                        console.log("\u662f\u5426\u6b63\u786e" + n + "Length\uff1a" + i.Count)
                    }
                    return n
                }, e.prototype.ConsoleTouchs = function() {
                    for (var t = 0; t < this.touchs.length; t++) console.log("TouchId:>" + this.touchs[t].getID() + "EleId:>" + this.touchsNameId[t])
                }, e.prototype.ActiveNodeOnTime = function(t, e) {
                    return r(this, void 0, void 0, function() {
                        return a(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return t.active = !0, [4, h.default.WaitForSeconds(e)];
                                case 1:
                                    return n.sent(), t.active = !1, [2]
                            }
                        })
                    })
                }, e.prototype.ActiveNode = function(t) {
                    t.active = !0
                }, e.prototype.HideNode = function(t) {
                    t.active = !1
                }, e.prototype.ActiveNodesByNum = function(t) {
                    for (var e = 0; e < this.targetNodesA.length; e++) this.targetNodesA[e].active = e < t
                }, e.prototype.StartUpCar = function() {
                    return r(this, void 0, void 0, function() {
                        return a(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, h.default.WaitForSeconds(1)];
                                case 1:
                                    return t.sent(), this.targetNodesC[0].active = !1, this.targetNodesC[1].active = !0, [4, h.default.WaitForSeconds(1)];
                                case 2:
                                    return t.sent(), this.targetNodesC[1].active = !1, this.targetNodesC[2].runAction(cc.moveTo(3.5, cc.v2(382, this.targetNodesC[2].position.y))), [4, h.default.WaitForSeconds(3)];
                                case 3:
                                    return t.sent(), this.Completed(), [2]
                            }
                        })
                    })
                }, e.prototype.EditBoxInput = function(t, e) {
                    null != this.editBoxLab && f.default.Instance.EnterInput(this.editBoxLab)
                }, i([m(p.default)], e.prototype, "characterController", void 0), i([m(cc.Label)], e.prototype, "levelIDTxt", void 0), i([m(cc.Label)], e.prototype, "levelTitleTxt", void 0), i([m(cc.Node)], e.prototype, "completedLogo", void 0), i([m(cc.Node)], e.prototype, "failLogo", void 0), i([m(cc.Node)], e.prototype, "elements", void 0), i([m(Boolean)], e.prototype, "isRamdomPos", void 0), i([m(Boolean)], e.prototype, "isActiveTitleTxt", void 0), i([m(cc.Label)], e.prototype, "elementNumTxt", void 0), i([m(cc.Sprite)], e.prototype, "changeSprite", void 0), i([m(cc.SpriteFrame)], e.prototype, "changeSpriteFrame", void 0), i([m(cc.Node)], e.prototype, "changeSpriteTargetNode", void 0), i([m(cc.Label)], e.prototype, "editBoxLab", void 0), i([m(String)], e.prototype, "orderValue", void 0), i([m(cc.Node)], e.prototype, "targetNodesA", void 0), i([m(cc.Node)], e.prototype, "targetNodesB", void 0), i([m(cc.Node)], e.prototype, "targetNodesC", void 0), e = i([y], e)
            }(cc.Component);
        n.default = g, cc._RF.pop()
    }, {
        "../AudioManager": "AudioManager",
        "../GameData": "GameData",
        "../GameFacade": "GameFacade",
        "../InputNumPanel": "InputNumPanel",
        "../Other/General": "General",
        "../Other/Random": "Random",
        "../Other/Time": "Time",
        "./CharacterController": "CharacterController"
    }],
    MainPanel: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "96418ybWsdAhIKZoVzQAHL+", "MainPanel");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            },
            r = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            a = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (t) {
                        r = [6, t], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("../UIFramework/BasePanel"),
            c = t("../GameFacade"),
            u = t("../UIFramework/UIManager"),
            l = t("../GameData"),
            d = t("../Other/Time"),
            h = t("../AdManager"),
            p = t("./TipPanel"),
            f = t("../../TJ/Shortcut/script/S102"),
            v = cc._decorator,
            y = v.ccclass,
            m = v.property,
            g = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.pushAdObjs = [], e.addIcon = null, e
                }
                return o(e, t), e.prototype.onLoad = function() {
                    if (!c.default.Instance.isOpenPushAd)
                        for (var t = 0; t < this.pushAdObjs.length; t++) this.pushAdObjs[t].active = !1;
                    this.s101 = cc.find("Canvas/Panel/MainPanel/S102").getComponent(f.default), f.default.onSuccess = function() {
                        console.log("AddDestopReward_S102"), console.log("\u684c\u9762\u56fe\u6807\u70b9\u51fb\u540e\u53d1\u653e\u5956\u52b1");
                        var t = new TJ.GSA.Param;
                        t.id = "ad_destop", TJ.GSA.Api.Event(t), p.default.instance.ShowLog("Chúc mừng bạn nhận 1 chìa khóa!", function() {
                            h.default.Event("END_PAGE_004", "")
                        }), l.default.Instance.AddHint(1), c.default.Instance.effectPanel.GetKeyToNum(1)
                    }
                }, e.prototype.start = function() {}, e.prototype.OnEnter = function() {
                    this.node.active = !0, h.default.ShowBanner(), this.hasShortcutInstalled()
                }, e.prototype.OnExit = function() {
                    this.node.active = !1
                }, e.prototype.MenuBtnClick = function() {
                    null == c.default.Instance.menuPanel && (c.default.Instance.menuPanel = u.default.Instance.GetPanel(u.PanelType.MenuPanel)), c.default.Instance.menuPanel.OnEnter()
                }, e.prototype.StartGameBtnClick = function() {
                    null == c.default.Instance.gamePanel ? (c.default.Instance.gamePanel = u.default.Instance.GetPanel(u.PanelType.GamePanel), this.WaitToLoad()) : (c.default.Instance.gamePanel.OnEnter(), c.default.Instance.LoadLevel(l.default.Instance.GetCurrtPanel(l.default.Instance.currentGamingLevelId)))
                }, e.prototype.WaitToLoad = function() {
                    return r(this, void 0, void 0, function() {
                        return a(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, d.default.WaitForSeconds(.02)];
                                case 1:
                                    return t.sent(), console.log("OPEN PHYSICS>> GAME START"), c.default.Instance.gamePanel.OnEnter(), c.default.Instance.LoadLevel(l.default.Instance.GetCurrtPanel(l.default.Instance.currentGamingLevelId)), [2]
                            }
                        })
                    })
                }, e.prototype.installShortcut = function() {}, e.prototype.hasShortcutInstalled = function() {}, i([m(cc.Node)], e.prototype, "pushAdObjs", void 0), i([m(cc.Node)], e.prototype, "addIcon", void 0), e = i([y], e)
            }(s.default);
        n.default = g, cc._RF.pop()
    }, {
        "../../TJ/Shortcut/script/S102": "S102",
        "../AdManager": "AdManager",
        "../GameData": "GameData",
        "../GameFacade": "GameFacade",
        "../Other/Time": "Time",
        "../UIFramework/BasePanel": "BasePanel",
        "../UIFramework/UIManager": "UIManager",
        "./TipPanel": "TipPanel"
    }],
    MenuPanel: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "6a9909090VLx6laKbnaMLVR", "MenuPanel");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../UIFramework/BasePanel"),
            a = t("../GameFacade"),
            s = t("../GameData"),
            c = t("../AdManager"),
            u = cc._decorator,
            l = u.ccclass,
            d = u.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.pushAdObjs = [], e.backBtn = null, e.musicBtn = null, e.audioBtn = null, e.shockBtn = null, e.qianDaoBtn = null, e.shopBtn = null, e.musicAnim = null, e.audioAnim = null, e.shockAnim = null, e
                }
                return o(e, t), e.prototype.onLoad = function() {
                    if (this.musicAnim = this.musicBtn.getComponent(cc.Animation), this.audioAnim = this.audioBtn.getComponent(cc.Animation), this.shockAnim = this.shockBtn.getComponent(cc.Animation), !a.default.Instance.isOpenPushAd)
                        for (var t = 0; t < this.pushAdObjs.length; t++) this.pushAdObjs[t].active = !1
                }, e.prototype.start = function() {}, e.prototype.OnEnter = function() {
                    this.node.setSiblingIndex(this.node.parent.childrenCount - 1), this.node.active = !0, console.log("[menu index]" + this.node.parent.childrenCount), c.default.ShowBanner()
                }, e.prototype.OnExit = function() {
                    this.node.active = !1
                }, e.prototype.BackBtnClick = function() {
                    this.OnExit()
                }, e.prototype.MusicBtnClick = function() {
                    s.default.Instance.music_switch = !s.default.Instance.music_switch, s.default.Instance.music_switch ? (this.musicAnim.play("MusicBtnAnimYes"), a.default.Instance.BGMusicMute(!1)) : (this.musicAnim.play("MusicBtnAnimNo"), a.default.Instance.BGMusicMute(!0))
                }, e.prototype.AudioBtnClick = function() {
                    s.default.Instance.audio_switch = !s.default.Instance.audio_switch, s.default.Instance.audio_switch ? this.audioAnim.play("AudioBtnAnimYes") : this.audioAnim.play("AudioBtnAnimNo")
                }, e.prototype.ShockBtnClick = function() {
                    s.default.Instance.shock_switch = !s.default.Instance.shock_switch, s.default.Instance.shock_switch ? this.shockAnim.play("ShockBtnAnimYes") : this.shockAnim.play("ShockBtnAnimNo")
                }, e.prototype.SignBtnClick = function() {
                    c.default.Instance.signPanel.OnEnter()
                }, i([d(cc.Node)], e.prototype, "pushAdObjs", void 0), i([d(cc.Button)], e.prototype, "backBtn", void 0), i([d(cc.Button)], e.prototype, "musicBtn", void 0), i([d(cc.Button)], e.prototype, "audioBtn", void 0), i([d(cc.Button)], e.prototype, "shockBtn", void 0), i([d(cc.Button)], e.prototype, "qianDaoBtn", void 0), i([d(cc.Button)], e.prototype, "shopBtn", void 0), e = i([l], e)
            }(r.default);
        n.default = h, cc._RF.pop()
    }, {
        "../AdManager": "AdManager",
        "../GameData": "GameData",
        "../GameFacade": "GameFacade",
        "../UIFramework/BasePanel": "BasePanel"
    }],
    MyExtends: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e169cw0TlBD65IgKXxnsRU7", "MyExtends"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function t() {}
            return t.localConvertWorldPointAR = function(t) {
                return t ? t.convertToWorldSpaceAR(cc.v2(0, 0)) : null
            }, t.localConvertWorldPoint = function(t) {
                return t ? t.convertToWorldSpace(cc.v2(0, 0)) : null
            }, t.worldConvertLocalPointAR = function(t, e) {
                return t ? t.convertToNodeSpaceAR(e) : null
            }, t.worldConvertLocalPoint = function(t, e) {
                return t ? t.convertToNodeSpace(e) : null
            }, t.convetOtherNodeSpace = function(e, n) {
                if (!e || !n) return null;
                var o = t.localConvertWorldPoint(e);
                return t.worldConvertLocalPoint(n, o)
            }, t.convetOtherNodeSpaceAR = function(e, n) {
                if (!e || !n) return null;
                var o = t.localConvertWorldPointAR(e);
                return t.worldConvertLocalPointAR(n, o)
            }, t.IsAllCovered = function(t, e) {}, t.IsFullExposed = function(t, e, n) {
                var o = 0;
                return n && (o = n), t.x >= e.x + e.width / 2 + t.width / 2 + o || t.x <= e.x - e.width / 2 - t.width / 2 - o || t.y >= e.y + e.height / 2 + t.height / 2 + o || t.y <= e.y - e.height / 2 - t.height / 2 - o
            }, t.IsFullExposedByCovers = function(t, e, n) {
                for (var o = !0, i = 0; i < e.length; i++)
                    if (!this.IsFullExposed(t, e[i], n)) {
                        o = !1;
                        break
                    } return o
            }, t.Sequence = function(t) {}, t
        }();
        n.default = o, cc._RF.pop()
    }, {}],
    OppoNativeAd: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "09e16bQ5eJE7YQ2WAER4ixr", "OppoNativeAd");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("./AdManager"),
            a = cc._decorator,
            s = a.ccclass,
            c = a.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.isNativeInsertLoaded = !1, e.defaultNode = null, e.nativeInsertNode = null, e.insertIcon = null, e.insertTitle = null, e.insertDes = null, e.insertLogo = null, e.event_param = "", e
                }
                return o(e, t), e.prototype.onLoad = function() {
                    cc.sys.platform == cc.sys.VIVO_GAME || cc.sys.platform == cc.sys.VIVO_GAME ? (console.log("\u5f53\u524dNative\u663e\u793a"), this.node.active = !0) : (console.log("\u5f53\u524dNative\u4e0d\u663e\u793a"), this.node.active = !1), console.log("\u5f53\u524d\u5e73\u53f0" + cc.sys.platform)
                }, e.prototype.onEnable = function() {
                    cc.sys.platform == cc.sys.VIVO_GAME || cc.sys.platform == cc.sys.OPPO_GAME ? (console.log("\u5f53\u524dNative\u662fOPPO"), this.ShowDefaultNative(), console.log("onEnable"), this.IsGetNativeInsertAdData() ? (console.log("\u539f\u751f\u63d2\u5c4f\u52a0\u8f7d\u663e\u793a\u6210\u529f"), this.ShowNativeInsert()) : (console.log("\u539f\u751f\u63d2\u5c4f\u52a0\u8f7d\u663e\u793a\u5931\u8d25"), this.ShowDefaultNative())) : console.log("\u5f53\u524dNative\u4e0d\u662fOPPO")
                }, e.prototype.ShowDefaultNative = function() {
                    this.defaultNode.active = !0, this.nativeInsertNode.active = !1
                }, e.prototype.ShowNativeInsert = function() {
                    this.defaultNode.active = !1, this.nativeInsertNode.active = !0;
                    cc.sys.platform == cc.sys.OPPO_GAME ? (this.nativeInsertAdData.ReportAdShow(), this.LoadOnLineImage(this.insertIcon, this.nativeInsertAdData.iconUrlList[0]), this.LoadOnLineImage(this.insertLogo, this.nativeInsertAdData.logoUrl), this.insertTitle.string = this.nativeInsertAdData.title, this.insertDes.string = this.nativeInsertAdData.desc, console.log("OPPO\u5e73\u53f0")) : cc.sys.platform == cc.sys.VIVO_GAME ? (this.nativeInsertViVOAdData.ReportAdShow(), this.insertTitle.string = this.nativeInsertViVOAdData.title, this.insertDes.string = this.nativeInsertViVOAdData.desc, this.LoadOnLineImage(this.insertIcon, this.nativeInsertViVOAdData.icon), this.LoadOnLineImage(this.insertLogo, this.nativeInsertViVOAdData.logoUrl), console.log("ViVO\u5e73\u53f0:icon Url:" + this.nativeInsertViVOAdData.icon), console.log("ViVO\u5e73\u53f0:Logo Url:" + this.nativeInsertViVOAdData.logoUrl)) : console.log("\u975eViVO\u548cOPPO\u5e73\u53f0"), r.default.Event("ADV_NT_SHOW_003", "")
                }, e.prototype.IsGetNativeInsertAdData = function() {
                    return console.log("\u539f\u751f\u63d2\u5c4f\u5e7fplatform : " + cc.sys.platform), console.log("\u539f\u751f\u63d2\u5c4f\u5e7f\u544aOPPO_GAME : " + cc.sys.OPPO_GAME), console.log("\u539f\u751f\u63d2\u5c4f\u5e7f\u544aVIVO_GAME : " + cc.sys.VIVO_GAME), cc.sys.platform == cc.sys.OPPO_GAME ? (this.nativeInsertAdData = r.default.nad.Pop(), null != this.nativeInsertAdData ? (console.log("\u539f\u751f\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d : ", JSON.stringify(this.nativeInsertAdData)), !0) : (this.ShowDefaultNative(), !1)) : cc.sys.platform == cc.sys.VIVO_GAME ? (this.nativeInsertViVOAdData = r.default.nvd.Pop(), null != this.nativeInsertViVOAdData ? (console.log("\u539f\u751f\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d : ", JSON.stringify(this.nativeInsertViVOAdData)), !0) : (this.ShowDefaultNative(), !1)) : (cc.error("\u975eOPPO\u548cViVO\u5e73\u53f0"), !1)
                }, e.prototype.LoadOnLineImage = function(t, e) {
                    t.spriteFrame = void 0, cc.loader.load(e, function(e, n) {
                        null != e && console.log("load Image failed");
                        var o = new cc.SpriteFrame(n);
                        t.spriteFrame = o
                    })
                }, e.prototype.ClickNativeInsert = function() {
                    cc.sys.platform == cc.sys.VIVO_GAME ? this.nativeInsertViVOAdData.ReportAdClick() : cc.sys.platform == cc.sys.OPPO_GAME ? this.nativeInsertAdData.ReportAdClick() : cc.error("\u975eOPPO\u548cViVO\u5e73\u53f0"), r.default.Event("ADV_NT_CLICK_003", ""), console.log("---\x3e\u539f\u751f\u5e7f\u544a\u70b9\u51fb\u4e8b\u4ef6<---\x3enativeInsertAD:" + this.nativeInsertAd + "Data:>" + this.nativeInsertAdData)
                }, e.prototype.InsertAdBtnClick = function(t, e) {
                    console.log("\u539f\u751f\u5e7f\u544a\u6309\u94ae\u70b9\u51fb"), this.ClickNativeInsert(), this.ShowDefaultNative(), this.IsGetNativeInsertAdData() && this.ShowNativeInsert(), void 0 == e && console.log("\u672a\u8bbe\u7f6e\u7edf\u8ba1\u6253\u70b9\u53c2\u6570"), r.default.Event(this.event_param, "")
                }, e.prototype.Event = function(t) {
                    console.log("event:" + t);
                    var e = new TJ.GSA.Param;
                    e.id = t, TJ.GSA.Api.Event(e)
                }, i([c(cc.Node)], e.prototype, "defaultNode", void 0), i([c(cc.Node)], e.prototype, "nativeInsertNode", void 0), i([c(cc.Sprite)], e.prototype, "insertIcon", void 0), i([c(cc.Label)], e.prototype, "insertTitle", void 0), i([c(cc.Label)], e.prototype, "insertDes", void 0), i([c(cc.Sprite)], e.prototype, "insertLogo", void 0), i([c(String)], e.prototype, "event_param", void 0), e = i([s], e)
            }(cc.Component);
        n.default = u, cc._RF.pop()
    }, {
        "./AdManager": "AdManager"
    }],
    P101: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "3e09cD87PlIIbDqndgiSDAC", "P101");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            },
            r = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            a = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (t) {
                        r = [6, t], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("./PromoItem"),
            c = t("./PromoData"),
            u = t("./PromoList"),
            l = cc._decorator,
            d = l.ccclass,
            h = l.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.promoItem = null, e.shake = !1, e.animTime = 0, e.refrTime = 0, e
                }
                var n;
                return o(e, t), n = e, e.prototype.onLoad = function() {
                    c.default.Event(n.style, "Awake"), this.promoItem.style = n.style
                }, e.prototype.start = function() {
                    return r(this, void 0, void 0, function() {
                        var t;
                        return a(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return this.node.active = !1, [4, u.default.Get(n.style)];
                                case 1:
                                    return t = e.sent(), null == n.promoList && (n.promoList = t), n.promoList.count > 0 ? (c.default.Event(n.style, "Start"), this.node.active = !0, this.ShowIcon()) : this.node.destroy(), [2]
                            }
                        })
                    })
                }, e.prototype.update = function(t) {
                    this.refrTime += t, this.refrTime > 30 && (this.refrTime -= 30, this.ShowIcon()), this.shake && (this.animTime += t, this.animTime %= 2.5, this.animTime <= .75 ? this.promoItem.iconImage.node.rotation = 25 * Math.sin(6 * this.animTime * Math.PI) * (1 - this.animTime / .75) : this.promoItem.iconImage.node.rotation = 0)
                }, e.prototype.ShowIcon = function() {
                    var t = this,
                        e = n.promoList.Load();
                    null != e ? (n.promoList.Unload(this.promoItem.data), this.promoItem.data = e, this.promoItem.onClick = function() {
                        t.ShowIcon()
                    }, this.promoItem.Load(), this.promoItem.OnShow()) : null == this.promoItem.data && this.node.destroy()
                }, e.style = "P101", e.promoList = null, i([h(s.default)], e.prototype, "promoItem", void 0), i([h(Boolean)], e.prototype, "shake", void 0), e = n = i([d], e)
            }(cc.Component);
        n.default = p, cc._RF.pop()
    }, {
        "./PromoData": "PromoData",
        "./PromoItem": "PromoItem",
        "./PromoList": "PromoList"
    }],
    P102: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "45c98Uf7NRCTph+WyipgxcK", "P102");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            },
            r = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            a = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (t) {
                        r = [6, t], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("./PromoItem"),
            c = t("./PromoData"),
            u = t("./PromoList"),
            l = cc._decorator,
            d = l.ccclass,
            h = l.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.promoList = null, e.itemList = [], e.prefab = null, e.layout = null, e.bgs = [], e
                }
                var n;
                return o(e, t), n = e, e.prototype.onLoad = function() {
                    c.default.Event(n.style, "Awake")
                }, e.prototype.start = function() {
                    return r(this, void 0, void 0, function() {
                        var t, e, o, i, r, l, d;
                        return a(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return this.node.active = !1, [4, u.default.Get(n.style)];
                                case 1:
                                    if (t = a.sent(), null == this.promoList && (this.promoList = t), this.promoList.count > 0) {
                                        for (c.default.Event(n.style, "Start"), this.node.active = !0, e = 0; e < Math.min(this.promoList.count, 6); e++)(o = cc.instantiate(this.prefab)).parent = this.layout, o.active = !0, null != (d = o.getComponent(s.default)) && (this.itemList.push(d), d.style = n.style);
                                        for (i = 0, r = 0, l = this.itemList; r < l.length; r++) d = l[r], this.ShowIcon(d), d.bgImage.spriteFrame = this.bgs[i++ % this.bgs.length]
                                    } else this.node.destroy();
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.ShowIcon = function(t) {
                    var e = this,
                        n = this.promoList.Load();
                    null != n && (this.promoList.Unload(t.data), t.data = n, t.onClick = function(t) {
                        e.ShowIcon(t)
                    }, t.Load(), t.infoText.string = 1 + Math.floor(40 * Math.random()) / 10 + "w\u4eba\u5728\u73a9", t.OnShow())
                }, e.style = "P102", i([h(cc.Node)], e.prototype, "prefab", void 0), i([h(cc.Node)], e.prototype, "layout", void 0), i([h(cc.SpriteFrame)], e.prototype, "bgs", void 0), e = n = i([d], e)
            }(cc.Component);
        n.default = p, cc._RF.pop()
    }, {
        "./PromoData": "PromoData",
        "./PromoItem": "PromoItem",
        "./PromoList": "PromoList"
    }],
    P103: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "7dfbfF6EK1M0o9m5WCAT0TK", "P103");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            },
            r = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            a = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (t) {
                        r = [6, t], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("./PromoItem"),
            c = t("./PromoData"),
            u = t("./PromoList"),
            l = cc._decorator,
            d = l.ccclass,
            h = l.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.promoList = null, e.itemList = [], e.prefab = null, e.layout = null, e
                }
                var n;
                return o(e, t), n = e, e.prototype.onLoad = function() {
                    c.default.Event(n.style, "Awake")
                }, e.prototype.start = function() {
                    return r(this, void 0, void 0, function() {
                        var t, e, o, i, r, l;
                        return a(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return this.node.active = !1, [4, u.default.Get(n.style)];
                                case 1:
                                    if (t = a.sent(), null == this.promoList && (this.promoList = t), this.promoList.count > 0) {
                                        for (c.default.Event(n.style, "Start"), this.node.active = !0, e = 0; e < Math.min(this.promoList.count, 12); e++)(o = cc.instantiate(this.prefab)).parent = this.layout, o.active = !0, null != (l = o.getComponent(s.default)) && (this.itemList.push(l), l.style = n.style);
                                        for (i = 0, r = this.itemList; i < r.length; i++) l = r[i], this.ShowIcon(l)
                                    } else this.node.destroy();
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.ShowIcon = function(t) {
                    var e = this,
                        n = this.promoList.Load();
                    null != n && (this.promoList.Unload(t.data), t.data = n, t.onClick = function(t) {
                        e.ShowIcon(t)
                    }, t.Load(), t.OnShow())
                }, e.prototype.OnClose = function() {
                    this.node.active = !1
                }, e.style = "P103", i([h(cc.Node)], e.prototype, "prefab", void 0), i([h(cc.Node)], e.prototype, "layout", void 0), e = n = i([d], e)
            }(cc.Component);
        n.default = p, cc._RF.pop()
    }, {
        "./PromoData": "PromoData",
        "./PromoItem": "PromoItem",
        "./PromoList": "PromoList"
    }],
    P104: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "79df82rmSxPgrWQe3sHF9yp", "P104");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            },
            r = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            a = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (t) {
                        r = [6, t], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("./PromoItem"),
            c = t("./PromoData"),
            u = t("./PromoList"),
            l = cc._decorator,
            d = l.ccclass,
            h = l.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.promoList = null, e.itemList = [], e.prefab = null, e.layout = null, e.scroll = !1, e.initPos = !1, e.showLeft = !1, e.showing = [], e
                }
                var n;
                return o(e, t), n = e, e.prototype.onLoad = function() {
                    c.default.Event(n.style, "Awake")
                }, e.prototype.start = function() {
                    return r(this, void 0, void 0, function() {
                        var t, e, o, i, r, l;
                        return a(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return this.node.active = !1, [4, u.default.Get(n.style)];
                                case 1:
                                    if (t = a.sent(), null == this.promoList && (this.promoList = t), this.promoList.count > 0) {
                                        for (c.default.Event(n.style, "Start"), this.node.active = !0, e = 0; e < this.promoList.count; e++)(o = cc.instantiate(this.prefab)).parent = this.layout, o.active = !0, null != (l = o.getComponent(s.default)) && (this.itemList.push(l), l.style = n.style);
                                        for (i = 0, r = this.itemList; i < r.length; i++) l = r[i], this.ShowIcon(l);
                                        this.itemList.length > 4 && (this.initPos = !0, this.scroll = !0)
                                    } else this.node.destroy();
                                    return [2]
                            }
                        })
                    })
                }, Object.defineProperty(e.prototype, "maxLeft", {
                    get: function() {
                        var t = (this.layout.width - this.layout.parent.width) / 2;
                        return this.scroll && (t += 20), t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "maxRight", {
                    get: function() {
                        var t = (this.layout.parent.width - this.layout.width) / 2;
                        return this.scroll && (t -= 20), t
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.update = function(t) {
                    if (this.scroll) {
                        if (this.initPos) {
                            if (!(this.layout.width > 0)) return;
                            this.layout.x = this.maxLeft, this.initPos = !1
                        }
                        this.layout.x <= this.maxRight ? this.showLeft = !0 : this.layout.x >= this.maxLeft && (this.showLeft = !1), this.showLeft ? this.layout.x += 50 * t : this.layout.x -= 50 * t
                    } else this.layout.x = this.maxLeft;
                    this.CheckShow()
                }, e.prototype.ShowIcon = function(t) {
                    var e = this,
                        n = this.promoList.Load();
                    null != n && (t.data = n, t.onClick = function(t) {
                        e.ShowIcon(t)
                    }, t.Load())
                }, e.prototype.CheckShow = function() {
                    for (var t = 0, e = this.itemList; t < e.length; t++) {
                        var n = e[t],
                            o = Math.abs(n.node.x + this.layout.x),
                            i = this.showing.indexOf(n);
                        o < (this.layout.parent.width + this.prefab.width) / 2 ? i < 0 && (this.showing.push(n), n.OnShow()) : i >= 0 && (this.showing.splice(i, 1), n.OnHide())
                    }
                }, e.style = "P104", i([h(cc.Node)], e.prototype, "prefab", void 0), i([h(cc.Node)], e.prototype, "layout", void 0), e = n = i([d], e)
            }(cc.Component);
        n.default = p, cc._RF.pop()
    }, {
        "./PromoData": "PromoData",
        "./PromoItem": "PromoItem",
        "./PromoList": "PromoList"
    }],
    P105: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "a3945XFa+5GmI3dGt23ezx3", "P105");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            },
            r = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            a = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (t) {
                        r = [6, t], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("./PromoItem"),
            c = t("./PromoData"),
            u = t("./PromoList"),
            l = cc._decorator,
            d = l.ccclass,
            h = l.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.promoList = null, e.itemList = [], e.prefab = null, e.layout = null, e.move = null, e.show = null, e.hide = null, e.bgs = [], e.maxX = 640, e.targetX = 0, e
                }
                var n;
                return o(e, t), n = e, e.prototype.onLoad = function() {
                    c.default.Event(n.style, "Awake")
                }, e.prototype.start = function() {
                    return r(this, void 0, void 0, function() {
                        var t, e, o, i, r, l, d;
                        return a(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return this.show.parent.scaleX < 0 && (this.maxX = -this.maxX), this.node.active = !1, [4, u.default.Get(n.style)];
                                case 1:
                                    if (t = a.sent(), null == this.promoList && (this.promoList = t), this.promoList.count > 0) {
                                        for (c.default.Event(n.style, "Start"), this.node.active = !0, e = 0; e < Math.min(this.promoList.count, 12); e++)(o = cc.instantiate(this.prefab)).parent = this.layout, o.active = !0, null != (d = o.getComponent(s.default)) && (this.itemList.push(d), d.style = n.style);
                                        for (i = 0, r = 0, l = this.itemList; r < l.length; r++) d = l[r], this.ShowIcon(d), d.bgImage.spriteFrame = this.bgs[i++ % this.bgs.length]
                                    } else this.node.destroy();
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.ShowIcon = function(t) {
                    var e = this,
                        n = this.promoList.Load();
                    null != n && (this.promoList.Unload(t.data), t.data = n, t.onClick = function(t) {
                        e.ShowIcon(t)
                    }, t.Load())
                }, e.prototype.Show = function() {
                    this.targetX = this.maxX, this.show.active = !1, this.hide.active = !0, c.default.Event(n.style, "ShowBoard");
                    for (var t = 0, e = this.itemList; t < e.length; t++) {
                        e[t].OnShow()
                    }
                }, e.prototype.Hide = function() {
                    this.targetX = 0, c.default.Event(n.style, "HideBoard");
                    for (var t = 0, e = this.itemList; t < e.length; t++) {
                        e[t].OnHide()
                    }
                }, e.prototype.update = function(t) {
                    if (this.move.position.x != this.targetX) {
                        var e = this.targetX - this.move.position.x,
                            n = 3e3 * t;
                        e = e > 0 ? Math.min(this.move.position.x + n, this.targetX) : Math.max(this.move.position.x - n, this.targetX), this.move.position = new cc.Vec2(e, 0), 0 == this.move.position.x && (this.show.active = !0, this.hide.active = !1)
                    }
                }, e.style = "P105", i([h(cc.Node)], e.prototype, "prefab", void 0), i([h(cc.Node)], e.prototype, "layout", void 0), i([h(cc.Node)], e.prototype, "move", void 0), i([h(cc.Node)], e.prototype, "show", void 0), i([h(cc.Node)], e.prototype, "hide", void 0), i([h(cc.SpriteFrame)], e.prototype, "bgs", void 0), e = n = i([d], e)
            }(cc.Component);
        n.default = p, cc._RF.pop()
    }, {
        "./PromoData": "PromoData",
        "./PromoItem": "PromoItem",
        "./PromoList": "PromoList"
    }],
    P106: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "9f938N97CZBBLW6sn497IIE", "P106");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            },
            r = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            a = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (t) {
                        r = [6, t], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("./PromoItem"),
            c = t("./PromoData"),
            u = t("./PromoList"),
            l = cc._decorator,
            d = l.ccclass,
            h = l.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.promoList = null, e.itemList = [], e.prefab = null, e.layout = null, e
                }
                var n;
                return o(e, t), n = e, e.prototype.onLoad = function() {
                    c.default.Event(n.style, "Awake")
                }, e.prototype.start = function() {
                    return r(this, void 0, void 0, function() {
                        var t, e, o, i, r, l;
                        return a(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return this.node.active = !1, [4, u.default.Get(n.style)];
                                case 1:
                                    if (t = a.sent(), null == this.promoList && (this.promoList = t), this.promoList.count > 0) {
                                        for (c.default.Event(n.style, "Start"), this.node.active = !0, e = 0; e < this.promoList.count; e++)(o = cc.instantiate(this.prefab)).parent = this.layout, o.active = !0, null != (l = o.getComponent(s.default)) && (this.itemList.push(l), l.style = n.style);
                                        for (i = 0, r = this.itemList; i < r.length; i++) l = r[i], this.ShowIcon(l)
                                    } else this.node.destroy();
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.ShowIcon = function(t) {
                    var e = this,
                        n = this.promoList.Load();
                    null != n && (this.promoList.Unload(t.data), t.data = n, t.onClick = function(t) {
                        e.ShowIcon(t)
                    }, t.Load(), t.OnShow())
                }, e.prototype.OnClose = function() {
                    this.node.active = !1
                }, e.style = "P106", i([h(cc.Node)], e.prototype, "prefab", void 0), i([h(cc.Node)], e.prototype, "layout", void 0), e = n = i([d], e)
            }(cc.Component);
        n.default = p, cc._RF.pop()
    }, {
        "./PromoData": "PromoData",
        "./PromoItem": "PromoItem",
        "./PromoList": "PromoList"
    }],
    PrefabManager: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "03889A/5KRPlYFj5LefsKDg", "PrefabManager");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            },
            r = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            a = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (t) {
                        r = [6, t], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("./Other/Time"),
            c = t("./GameFacade"),
            u = t("./UIFramework/UIManager"),
            l = t("./AdManager"),
            d = cc._decorator,
            h = d.ccclass,
            p = (d.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                var n;
                return o(e, t), n = e, e.prototype.onLoad = function() {
                    cc.loader.loadResDir("", cc.Prefab, function(t, e, o) {
                        for (var i = 0; i < e.length; i++) {
                            var r = o[i];
                            n.PrefabsUrlKeys.push(r), n.PrefabsDic[r] = e[i]
                        }
                        n.WaitLoaded()
                    })
                }, e.prototype.start = function() {}, e.prototype.update = function(t) {}, e.WaitLoaded = function() {
                    return r(this, void 0, void 0, function() {
                        return a(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, s.default.WaitForSeconds(cc.director.getDeltaTime())];
                                case 1:
                                    return t.sent(), n.Loaded = !0, console.log("PrefabManager load ok!"), c.default.Instance.UIMng = u.default.Instance, c.default.Instance.mainPanel = u.default.Instance.GetPanel(u.PanelType.MainPanel), c.default.Instance.mainPanel.OnEnter(), l.default.Instance.signPanel.CheckSign(), [2]
                            }
                        })
                    })
                }, e.Load = function(t) {
                    return this.PrefabsDic[t]
                }, e.NewNode = function(t) {
                    return cc.instantiate(this.Load(t))
                }, e.Loaded = !1, e.PrefabsDic = {}, e.PrefabsUrlKeys = [], e = n = i([h], e)
            }(cc.Component));
        n.default = p, cc._RF.pop()
    }, {
        "./AdManager": "AdManager",
        "./GameFacade": "GameFacade",
        "./Other/Time": "Time",
        "./UIFramework/UIManager": "UIManager"
    }],
    PromoData: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "425c4vy7+ZM37m1qbJyHOv0", "PromoData");
        var o = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (t) {
                        r = [6, t], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = function() {
            function t() {}
            return Object.defineProperty(t, "dataUrl", {
                get: function() {
                    return DP.Basic.appGuid + "/promo/config.json"
                },
                enumerable: !0,
                configurable: !0
            }), t.LoadList = function(e) {
                return void 0 === e && (e = null), o(this, void 0, void 0, function() {
                    var n, o, r, a, s, c, u;
                    return i(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return null == this.www && (this.www = new TJ.Web.WWW(this.dataUrl)), null != this.www.text ? [3, 2] : (null == this.send && (this.send = this.www.Send()), [4, this.send]);
                            case 1:
                                i.sent(), this.send = null, i.label = 2;
                            case 2:
                                if (n = [], null != this.www.text && null != (o = JSON.parse(this.www.text)))
                                    for (r = 0, a = o; r < a.length; r++)
                                        if (s = a[r], null == e || null == s.promoStyle || 0 != s.promoStyle[e]) {
                                            for (u in (c = new t).style = e, s) c[u] = s[u];
                                            n.push(c)
                                        } return [2, n]
                        }
                    })
                })
            }, Object.defineProperty(t.prototype, "icon", {
                get: function() {
                    return "" + this.iconMD5
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "formatLogApp", {
                get: function() {
                    var t = DP.Basic.appGuid;
                    return null == t && (t = ""), "app{" + t + "}"
                },
                enumerable: !0,
                configurable: !0
            }), t.FormatLogStyle = function(t) {
                return null == t && (t = ""), "style{" + t + "}"
            }, Object.defineProperty(t.prototype, "formatLogStyle", {
                get: function() {
                    return t.FormatLogStyle(this.style)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "formatLogPromo", {
                get: function() {
                    var t = this.promoGuid;
                    return null == t && (t = ""), "promo{" + t + "}"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "formatLogIcon", {
                get: function() {
                    var t = this.iconMD5;
                    return null == t && (t = ""), "icon{" + t + "}"
                },
                enumerable: !0,
                configurable: !0
            }), t.FormatLogEvent = function(t) {
                return null == t && (t = ""), "event{" + t + "}"
            }, t.prototype.ReportLoad = function() {
                this.Event("Load")
            }, t.prototype.ReportShow = function() {
                this.Event("Show")
            }, t.prototype.ReportHide = function() {
                this.Event("Hide")
            }, t.prototype.ReportClick = function() {
                this.Event("Click")
            }, t.prototype.ReportOpen = function() {
                this.Event("Open")
            }, t.prototype.Event = function(e) {
                TJ.DevKit.ReYun.Event(t.reyunData, "[promo]-" + t.formatLogApp + "-" + this.formatLogPromo + "-" + t.FormatLogEvent(e)), TJ.DevKit.ReYun.Event(t.reyunData, "[icon]-" + t.formatLogApp + "-" + this.formatLogIcon + "-" + t.FormatLogEvent(e)), TJ.DevKit.ReYun.Event(t.reyunData, "[app]-" + t.formatLogApp + "-" + t.FormatLogEvent(e)), TJ.DevKit.ReYun.Event(t.reyunData, "[global-icon]-" + this.formatLogIcon + "-" + t.FormatLogEvent(e))
            }, t.Event = function(e, n) {
                TJ.DevKit.ReYun.Event(t.reyunData, t.formatLogApp + "-" + t.FormatLogStyle(e) + "-" + t.FormatLogEvent(n))
            }, Object.defineProperty(t, "reyunData", {
                get: function() {
                    var t = new TJ.DevKit.ReYun.Data;
                    return t.appid = "2af775abf83e6493fdeb60700734f21d", t.channelid = DP.Basic.appGuid, t.who = TJ.SystemInfo.deviceUniqueIdentifier, t.log = !1, t
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.Load = function() {
                if (this.iconList.length > 0) {
                    var t = Math.random() * this.iconList.length;
                    t = Math.floor(t), this.iconMD5 = this.iconList[t]
                } else this.iconMD5 = null;
                this.ReportLoad()
            }, t.prototype.Click = function() {
                var t = this;
                switch (this.ReportClick(), TJ.SystemInfo.channel) {
                    case TJ.Channel.oppoQG:
                        (e = new TJ.Extern.OPPO.QG.NavigateToMiniGameParam).pkgName = this.appPackageName, e.success = function(e) {
                            t.ReportOpen()
                        }, e.complete = function(t) {
                            console.log("OPPO.QG.NavigateToMiniGame complete", JSON.stringify(t))
                        }, TJ.Extern.OPPO.QG.NavigateToMiniGame(e);
                        break;
                    case TJ.Channel.wxGame:
                        var e;
                        (e = new TJ.Extern.WX.NavigateToMiniProgramParam).appId = this.appId, e.success = function(e) {
                            t.ReportOpen()
                        }, e.complete = function(t) {
                            console.log("WX.NavigateToMiniProgram complete", JSON.stringify(t))
                        }, TJ.Extern.WX.NavigateToMiniProgram(e)
                }
            }, t
        }();
        n.default = r, setTimeout(function() {
            TJ.DevKit.ReYun.Install(r.reyunData), TJ.DevKit.ReYun.Startup(r.reyunData)
        }, 0), cc._RF.pop()
    }, {}],
    PromoItem: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "ded63bTE2RBDr6z0LIuwRZJ", "PromoItem");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            a = r.ccclass,
            s = r.property,
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.bgImage = null, e.iconImage = null, e.nameText = null, e.infoText = null, e.flag1 = null, e.flag2 = null, e.flag3 = null, e
                }
                return o(e, t), e.prototype.Load = function() {
                    var t = this;
                    if (null != this.data) {
                        var e = this;
                        cc.loader.load({
                            url: this.data.icon,
                            type: "png"
                        }, function(n, o) {
                            e.iconImage.spriteFrame = new cc.SpriteFrame(o), null != t.nameText && (t.nameText.string = t.data.title), t.SetFlag()
                        })
                    }
                }, e.prototype.SetFlag = function() {
                    switch (null != this.flag1 && (this.flag1.active = !1), null != this.flag2 && (this.flag2.active = !1), null != this.flag3 && (this.flag3.active = !1), this.data.tag) {
                        case 1:
                            null != this.flag1 && (this.flag1.active = !0);
                            break;
                        case 2:
                            null != this.flag2 && (this.flag2.active = !0);
                            break;
                        case 3:
                            null != this.flag3 && (this.flag3.active = !0)
                    }
                }, e.prototype.OnShow = function() {
                    this.data.ReportShow()
                }, e.prototype.OnHide = function() {
                    this.data.ReportHide()
                }, e.prototype.OnClick = function() {
                    this.data.ReportClick(), this.Open(), null != this.onClick && this.onClick(this)
                }, e.prototype.Open = function() {
                    var t = this;
                    switch (console.log("open => " + this.data.appGuid), TJ.SystemInfo.channel) {
                        case TJ.Channel.oppoQG:
                            (e = new TJ.Extern.OPPO.QG.NavigateToMiniGameParam).pkgName = this.data.appPackageName, e.success = function(e) {
                                t.data.ReportOpen()
                            }, e.complete = function(t) {
                                console.log("OPPO.QG.NavigateToMiniGame complete", JSON.stringify(t))
                            }, TJ.Extern.OPPO.QG.NavigateToMiniGame(e);
                            break;
                        case TJ.Channel.wxGame:
                            var e;
                            (e = new TJ.Extern.WX.NavigateToMiniProgramParam).appId = this.data.appId, e.success = function(e) {
                                t.data.ReportOpen()
                            }, e.complete = function(t) {
                                console.log("WX.NavigateToMiniProgram complete", JSON.stringify(t))
                            }, TJ.Extern.WX.NavigateToMiniProgram(e)
                    }
                }, i([s(cc.Sprite)], e.prototype, "bgImage", void 0), i([s(cc.Sprite)], e.prototype, "iconImage", void 0), i([s(cc.Label)], e.prototype, "nameText", void 0), i([s(cc.Label)], e.prototype, "infoText", void 0), i([s(cc.Node)], e.prototype, "flag1", void 0), i([s(cc.Node)], e.prototype, "flag2", void 0), i([s(cc.Node)], e.prototype, "flag3", void 0), e = i([a], e)
            }(cc.Component);
        n.default = c, cc._RF.pop()
    }, {}],
    PromoList: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "a1691J4wOpIEY0Y9l6LCSwc", "PromoList");
        var o = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (t) {
                        r = [6, t], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("./PromoData"),
            a = function() {
                function t() {
                    this.datas = [], this.loaded = []
                }
                return t.prototype.Add = function(t) {
                    null != t && (this.datas.indexOf(t) < 0 && this.datas.push(t))
                }, t.prototype.Remove = function(t) {
                    if (null != t) {
                        var e = this.datas.indexOf(t);
                        e >= 0 && this.datas.splice(e, 1)
                    }
                }, Object.defineProperty(t.prototype, "count", {
                    get: function() {
                        return this.datas.length
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.Load = function(e) {
                    var n;
                    void 0 === e && (e = !1);
                    for (var o = [], i = 0, r = this.datas; i < r.length; i++) {
                        var a = r[i];
                        this.loaded.indexOf(a) < 0 && o.push(a)
                    }
                    if (o.length > 0) {
                        for (var s = [], c = 0, u = o; c < u.length; c++) {
                            a = u[c];
                            s.push(a.weight)
                        }
                        n = o[t.Random(s)]
                    }
                    null != n && (n.Load(), e || this.loaded.indexOf(n) < 0 && this.loaded.push(n));
                    return n
                }, t.prototype.Unload = function(t) {
                    if (null != t) {
                        var e = this.loaded.indexOf(t);
                        e >= 0 && this.loaded.splice(e, 1)
                    }
                }, t.Random = function(t) {
                    if (null != t) {
                        for (var e = 0, n = 0, o = 0, i = t; o < i.length; o++) {
                            e += i[o]
                        }
                        for (var r = Math.random() * e, a = 0; a < t.length; a++)
                            if ((n += t[a]) > r) return a
                    }
                    return 0
                }, t.Get = function(e) {
                    return void 0 === e && (e = null), o(this, void 0, void 0, function() {
                        var n, o, a, s;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return n = new t, o = 0, [4, r.default.LoadList(e)];
                                case 1:
                                    a = i.sent(), i.label = 2;
                                case 2:
                                    if (!(o < a.length)) return [3, 4];
                                    s = a[o], n.Add(s), i.label = 3;
                                case 3:
                                    return o++, [3, 2];
                                case 4:
                                    return [2, n]
                            }
                        })
                    })
                }, t
            }();
        n.default = a, cc._RF.pop()
    }, {
        "./PromoData": "PromoData"
    }],
    PromoOpen: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "055dbQWfc5PJYjNlj3I+aQV", "PromoOpen");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            a = r.ccclass,
            s = r.property,
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.target = null, e
                }
                return o(e, t), e.prototype.OnClick = function() {
                    this.target.active = !0
                }, i([s(cc.Node)], e.prototype, "target", void 0), e = i([a], e)
            }(cc.Component);
        n.default = c, cc._RF.pop()
    }, {}],
    Random: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "fa2b5k92eFPnKnqigVo9K6E", "Random"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function t() {}
            return t.Range = function(t, e, n) {
                return void 0 === n && (n = !0), t + Math.ceil(1e3 * Math.random()) % (e - t)
            }, t
        }();
        n.default = o, cc._RF.pop()
    }, {}],
    S101: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "4823egqB9VLl7KOJ3tZ21+q", "S101");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            a = r.ccclass,
            s = r.property,
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.root = null, e.move = null, e.time = 0, e
                }
                var n;
                return o(e, t), n = e, e.prototype.update = function(t) {
                    this.time += t, this.time %= 3;
                    this.time > 2.1 ? this.move.x = 25 * (Math.cos((this.time - 2.1) * (6 / .9) * Math.PI) - 1) : this.move.x = 0
                }, e.prototype.onEnable = function() {
                    TJ.SystemInfo.channel != TJ.Channel.Unknown && (this.root.active = !1, TJ.SystemInfo.channel == TJ.Channel.oppoQG && this.CheckShow())
                }, e.prototype.OnClick = function() {
                    var t = this;
                    if (TJ.SystemInfo.channel == TJ.Channel.oppoQG) {
                        var e = new TJ.Extern.OPPO.QG.CallbackParam;
                        e.complete = function(e) {
                            console.log("OPPO.QG.InstallShortcut complete = " + JSON.stringify(e)), t.root.active = !1, setTimeout(function() {
                                t.CheckShow(n.onSuccess)
                            }, 1e3)
                        }, TJ.Extern.OPPO.QG.InstallShortcut(e)
                    }
                }, e.prototype.CheckShow = function(t) {
                    var e = this;
                    void 0 === t && (t = null);
                    var n = new TJ.Extern.OPPO.QG.HasShortcutInstalledParam;
                    n.success = function(n) {
                        console.log("OPPO.QG.HasShortcutInstalled success = " + JSON.stringify(n)), n ? null != t && t() : e.root.active = !0
                    }, TJ.Extern.OPPO.QG.HasShortcutInstalled(n)
                }, i([s(cc.Node)], e.prototype, "root", void 0), i([s(cc.Node)], e.prototype, "move", void 0), e = n = i([a], e)
            }(cc.Component);
        n.default = c, cc._RF.pop()
    }, {}],
    S102: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "7b378PHOmRFDKqmKUk7SziB", "S102");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            a = r.ccclass,
            s = r.property,
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.root = null, e.move = null, e.time = 0, e
                }
                var n;
                return o(e, t), n = e, e.prototype.update = function(t) {
                    this.time += t, this.time %= 1.5, this.move.y = 100 * this.time / 1.5 - 150
                }, e.prototype.onEnable = function() {
                    TJ.SystemInfo.channel != TJ.Channel.Unknown && (this.root.active = !1, TJ.SystemInfo.channel == TJ.Channel.oppoQG && this.CheckShow())
                }, e.prototype.OnClick = function() {
                    var t = this;
                    if (TJ.SystemInfo.channel == TJ.Channel.oppoQG) {
                        var e = new TJ.Extern.OPPO.QG.CallbackParam;
                        e.complete = function(e) {
                            console.log("OPPO.QG.InstallShortcut complete = " + JSON.stringify(e)), t.root.active = !1, setTimeout(function() {
                                t.CheckShow(n.onSuccess)
                            }, 1e3)
                        }, TJ.Extern.OPPO.QG.InstallShortcut(e)
                    }
                }, e.prototype.CheckShow = function(t) {
                    var e = this;
                    void 0 === t && (t = null);
                    var n = new TJ.Extern.OPPO.QG.HasShortcutInstalledParam;
                    n.success = function(n) {
                        console.log("OPPO.QG.HasShortcutInstalled success = " + JSON.stringify(n)), n ? null != t && t() : e.root.active = !0
                    }, TJ.Extern.OPPO.QG.HasShortcutInstalled(n)
                }, i([s(cc.Node)], e.prototype, "root", void 0), i([s(cc.Node)], e.prototype, "move", void 0), e = n = i([a], e)
            }(cc.Component);
        n.default = c, cc._RF.pop()
    }, {}],
    ScaleElement: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e9138kjcfVJJ6y3mxOrOnWy", "ScaleElement");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("./Level"),
            a = t("../GameFacade"),
            s = cc._decorator,
            c = s.ccclass,
            u = s.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.level = null, e.ID = "", e.CurLevelID = 1, e.isScale = !1, e.MaxScale = 1, e.MinScale = 1, e.ScaleSpeed = .01, e.targetNodes = [], e.isMouseDown = !1, e.currentPos = cc.v2(), e.initPos = cc.v2(), e.initTouchsDis = 0, e.curTouchsDis = 0, e
                }
                return o(e, t), e.prototype.onLoad = function() {
                    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this), this.initPos = this.node.position
                }, e.prototype.start = function() {}, e.prototype.onTouchStart = function(t) {
                    if (!a.default.Instance.currentLevel.isLogoAnim) {
                        if (this.isMouseDown = !0, this.currentPos = t.getLocation(), this.isScale) {
                            if (null != this.level.touchs) {
                                for (var e = [], n = [], o = !1, i = -1, r = 0; r < this.level.touchs.length; r++) n[r] = this.level.touchs[r], e[r] = this.level.touchsNameId[r], o || n[r] != t.touch ? -1 == i && (null == n[r] && t.touch.getID() == r || n[r].getID() == t.touch.getID()) && (i = r) : o = !0;
                                if (!o)
                                    if (-1 != i) n[i] = t.touch, e[i] = this.ID;
                                    else if (t.touch.getID() < this.level.touchs.length) {
                                    for (r = this.level.touchs.length; r > t.touch.getID(); r--) n[r] = n[r - 1], e[r] = e[r - 1];
                                    n[t.touch.getID()] = t.touch, e[t.touch.getID()] = this.ID
                                } else n[this.level.touchs.length] = t.touch, e[this.level.touchs.length] = this.ID;
                                this.level.touchs = n, this.level.touchsNameId = e
                            } else this.level.touchs = [t.touch], this.level.touchsNameId = [this.ID];
                            2 == this.level.touchs.length && (this.initTouchsDis = this.level.touchs[0].getLocation().sub(this.level.touchs[1].getLocation()).mag(), this.curTouchsDis = this.initTouchsDis)
                        }
                        console.log("TOUCH-NUM:" + this.level.touchs.length)
                    }
                }, e.prototype.onTouchMove = function(t) {
                    if (!a.default.Instance.currentLevel.isLogoAnim && this.isMouseDown && this.isScale && 2 == this.level.touchs.length) {
                        var e = this.level.touchs[0].getLocation().sub(this.level.touchs[1].getLocation()).mag();
                        console.log("temp:" + e + "Cur:" + this.curTouchsDis + "Init:" + this.initTouchsDis), e > this.curTouchsDis ? (this.node.scale += (e - this.curTouchsDis) * this.ScaleSpeed, this.node.scale >= this.MaxScale && (this.node.scale = this.MaxScale)) : (this.node.scale += (e - this.curTouchsDis) * this.ScaleSpeed, this.node.scale <= this.MinScale && (this.node.scale = this.MinScale)), this.curTouchsDis = e, this.ScaleByLevelIdFunction(this.CurLevelID)
                    }
                }, e.prototype.onTouchEnd = function(t) {
                    if (!a.default.Instance.currentLevel.isLogoAnim && (this.isMouseDown = !1, this.isScale))
                        if (1 == this.level.touchs.length) this.level.touchs = [];
                        else {
                            for (var e = [], n = [], o = -1, i = 0; i < this.level.touchs.length; i++)
                                if (this.level.touchs[i].getID() == t.touch.getID()) {
                                    o = i;
                                    break
                                } for (var r = 0; r < o; r++) n[r] = this.level.touchs[r], e[r] = this.level.touchsNameId[r];
                            for (; r < this.level.touchs.length - 1; r++) n[r] = this.level.touchs[r + 1], e[r] = this.level.touchsNameId[r + 1];
                            this.level.touchs = n, this.level.touchsNameId = e
                        }
                }, e.prototype.onDestroy = function() {
                    this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
                }, e.prototype.ScaleByLevelIdFunction = function(t) {
                    switch (t) {
                        case 27:
                            this.node.scale > 1.3 && (this.targetNodes[0].active = !0)
                    }
                }, i([u(r.default)], e.prototype, "level", void 0), i([u(String)], e.prototype, "ID", void 0), i([u(Number)], e.prototype, "CurLevelID", void 0), i([u(Boolean)], e.prototype, "isScale", void 0), i([u(Number)], e.prototype, "MaxScale", void 0), i([u(Number)], e.prototype, "MinScale", void 0), i([u(Number)], e.prototype, "ScaleSpeed", void 0), i([u(cc.Node)], e.prototype, "targetNodes", void 0), e = i([c], e)
            }(cc.Component);
        n.default = l, cc._RF.pop()
    }, {
        "../GameFacade": "GameFacade",
        "./Level": "Level"
    }],
    SignItem: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "eaafdAHf5xEGLFvpYftnyuy", "SignItem");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../AdManager"),
            a = t("../GameData"),
            s = t("../UI/TipPanel"),
            c = t("../GameFacade"),
            u = cc._decorator,
            l = u.ccclass,
            d = u.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.SignId = 1, e.signNodes = [], e.curNodes = [], e
                }
                return o(e, t), e.prototype.start = function() {}, e.prototype.SignBtnClick = function() {
                    if (this.SignId == r.default.Instance.signPanel.curSignDay)
                        if (r.default.Instance.signPanel.isSignedToday) s.default.instance.ShowLog("Đã nhận quà đăng nhập hôm nay"), console.log("Today has signed");
                        else {
                            switch (this.Signed(), console.log("signing\uff1a" + this.SignId), this.SignId) {
                                case 1:
                                case 2:
                                case 3:
                                    a.default.Instance.AddHint(1), c.default.Instance.effectPanel.GetKeyToNum(1);
                                    break;
                                case 4:
                                    a.default.Instance.AddHint(2), c.default.Instance.effectPanel.GetKeyToNum(2);
                                    break;
                                case 5:
                                    a.default.Instance.AddHint(3), c.default.Instance.effectPanel.GetKeyToNum(3)
                            }
                            r.default.Event("sign", ""), r.default.Instance.signPanel.RecordSignDay()
                        }
                }, e.prototype.SignActive = function(t) {
                    t >= this.signNodes.length && (t = this.signNodes.length - 1), t < 0 && (t = 0);
                    for (var e = 0; e < this.signNodes.length; e++) this.signNodes[e].active = t == e
                }, e.prototype.Signed = function() {
                    console.log("--sign:" + this.SignId);
                    for (var t = 0; t < this.signNodes.length; t++) this.signNodes[t].active = 1 == t
                }, e.prototype.Locked = function() {
                    console.log("--locked:" + this.SignId);
                    for (var t = 0; t < this.signNodes.length; t++) this.signNodes[t].active = 0 == t
                }, e.prototype.CurDay = function(t) {
                    for (var e = 0; e < this.curNodes.length; e++) this.curNodes[e].color = t
                }, i([d(Number)], e.prototype, "SignId", void 0), i([d(cc.Node)], e.prototype, "signNodes", void 0), i([d(cc.Node)], e.prototype, "curNodes", void 0), e = i([l], e)
            }(cc.Component);
        n.default = h, cc._RF.pop()
    }, {
        "../AdManager": "AdManager",
        "../GameData": "GameData",
        "../GameFacade": "GameFacade",
        "../UI/TipPanel": "TipPanel"
    }],
    SignPanel: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "f2cd0J/NCJMOJlcs1gNnosh", "SignPanel");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../UIFramework/BasePanel"),
            a = t("../Prop/SignItem"),
            s = t("../AdManager"),
            c = t("./TipPanel"),
            u = t("../GameData"),
            l = t("../GameFacade"),
            d = cc._decorator,
            h = d.ccclass,
            p = d.property,
            f = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.tripleToggle = null, e.signItems = [], e.lastSignDay = 0, e.curSignDay = 0, e.isSignedToday = !1, e.isTripleReward = !1, e
                }
                return o(e, t), e.prototype.onLoad = function() {}, e.prototype.start = function() {}, e.prototype.OnEnter = function() {
                    if (this.node.active = !0, this.isSignedToday)
                        for (var t = 0; t < this.signItems.length; t++) t <= this.curSignDay - 1 ? this.signItems[t].Signed() : this.signItems[t].Locked(), this.curSignDay - 1 == t ? this.signItems[t].CurDay(new cc.Color(255, 203, 39, 255)) : this.signItems[t].CurDay(new cc.Color(0, 0, 0, 255));
                    else {
                        for (t = 0; t < this.signItems.length; t++) this.curSignDay - 1 == t ? (this.signItems[t].SignActive(2), this.signItems[t].CurDay(new cc.Color(255, 203, 39, 255))) : (t > this.curSignDay - 1 ? this.signItems[t].Locked() : this.signItems[t].Signed(), this.signItems[t].CurDay(new cc.Color(0, 0, 0, 255)));
                        s.default.Event("ADV_RDA_SHOW_001", "")
                    }
                    s.default.ShowBanner()
                }, e.prototype.OnExit = function() {
                    this.node.active = !1
                }, e.getCurTimeSecends = function() {
                    var t = new Date;
                    return Math.floor(t.getTime() / 1e3)
                }, e.getTodayDate = function() {
                    var t = new Date;
                    return t.setTime(t.getTime()), t
                }, e.prototype.CheckSign = function() {
                    this.isSignedToday = this.IsSignedToDay(), this.isSignedToday || this.OnEnter()
                }, e.prototype.IsSignedToDay = function() {
                    if (this.lastSignDay = parseInt(cc.sys.localStorage.getItem("lastSignDay")), this.lastSignDay != this.lastSignDay) {
                        var t = new Date;
                        return this.lastSignDay = t.getDate(), cc.sys.localStorage.setItem("lastSignDay", this.lastSignDay), this.curSignDay = 1, cc.sys.localStorage.setItem("curSignDay", this.curSignDay), !1
                    }
                    t = new Date;
                    return this.curSignDay = parseInt(cc.sys.localStorage.getItem("curSignDay")), t.getDate() == this.lastSignDay || (this.curSignDay++, this.curSignDay > 5 && (this.curSignDay = 1), cc.sys.localStorage.setItem("curSignDay", this.curSignDay), !1)
                }, e.prototype.RecordSignDay = function() {
                    var t = new Date;
                    this.lastSignDay = t.getDate(), cc.sys.localStorage.setItem("lastSignDay", this.lastSignDay), this.isSignedToday = !0
                }, e.prototype.BackBtnClick = function() {
                    this.OnExit()
                }, e.prototype.TripleToggleClick = function() {
                    this.isTripleReward = this.tripleToggle.isChecked, console.log("toggle:" + this.tripleToggle.isChecked)
                }, e.prototype.RewardBtnClick = function() {
                    var t = this;
                    this.isSignedToday ? (c.default.instance.ShowLog("Đã nhận quà đăng nhập ngày hôm nay"), console.log("today has signed")) : (s.default.Event("ADV_RDA_CLICK_001", ""), l.default.Instance.BGMusicMute(!0), u.default.Instance.awardsNUm = s.default.factAwardNum, s.default.ShowReward(function() {
                        u.default.Instance.AddHint(t.GetTripleRewardBySignDay()), t.signItems[t.curSignDay - 1].Signed(), l.default.Instance.effectPanel.GetKeyToNum(t.GetTripleRewardBySignDay()), s.default.Event("ad_sign", ""), t.RecordSignDay()
                    }))
                }, e.prototype.GetTripleRewardBySignDay = function() {
                    var t = 1;
                    switch (this.curSignDay) {
                        case 1:
                        case 2:
                        case 3:
                            t = 3;
                            break;
                        case 4:
                            t = 6;
                            break;
                        case 5:
                            t = 9
                    }
                    return t
                }, i([p(cc.Toggle)], e.prototype, "tripleToggle", void 0), i([p(a.default)], e.prototype, "signItems", void 0), e = i([h], e)
            }(r.default);
        n.default = f, cc._RF.pop()
    }, {
        "../AdManager": "AdManager",
        "../GameData": "GameData",
        "../GameFacade": "GameFacade",
        "../Prop/SignItem": "SignItem",
        "../UIFramework/BasePanel": "BasePanel",
        "./TipPanel": "TipPanel"
    }],
    SureAdPanel: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "d74c2yQbs5PJLguqnq8wyvi", "SureAdPanel");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            a = r.ccclass,
            s = r.property,
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.yesBtn = null, e.noBtn = null, e.disc = null, e
                }
                return o(e, t), Object.defineProperty(e, "Instance", {
                    get: function() {
                        return cc.isValid(this.instance) || (this.instance = cc.find("Canvas/SurePanel").getComponent("SureAdPanel")), this.instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.Enter = function(t, e) {
                    void 0 === t && (t = null);
                    this.disc.string = t, this.getAction = e, this.node.active = !0
                }, e.prototype.YesAds = function() {
                    this.getAction(), this.disc.string = "", this.getAction = null, this.node.active = !1
                }, e.prototype.NoAds = function() {
                    this.disc.string = "", this.getAction = null, this.node.active = !1
                }, i([s(cc.Button)], e.prototype, "yesBtn", void 0), i([s(cc.Button)], e.prototype, "noBtn", void 0), i([s(cc.Label)], e.prototype, "disc", void 0), e = i([a], e)
            }(cc.Component);
        n.default = c, cc._RF.pop()
    }, {}],
    SurpriseADPanel: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "2749bk+m7NKKKBs+74KAQ/J", "SurpriseADPanel");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../GameData"),
            a = t("../GameFacade"),
            s = t("../AdManager"),
            c = cc._decorator,
            u = c.ccclass,
            l = c.property,
            d = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.pushAdObjs = [], e.surpriseSecondPanel = null, e
                }
                return o(e, t), e.prototype.onLoad = function() {
                    if (!a.default.Instance.isOpenPushAd)
                        for (var t = 0; t < this.pushAdObjs.length; t++) this.pushAdObjs[t].active = !1
                }, e.prototype.start = function() {}, e.prototype.FreeGetBtnClick = function() {
                    s.default.Event("END_PAGE_001", ""), s.default.Event("ADV_RDA_SHOW_003", ""), this.surpriseSecondPanel.active = !0
                }, e.prototype.CloseBtnClick = function() {
                    s.default.Event("END_PAGE_002", ""), this.surpriseSecondPanel.active = !1, this.node.active = !1
                }, e.prototype.surpriseSecondPanelFreeClick = function() {
                    var t = this;
                    s.default.Event("ADV_RDA_CLICK_003", ""), a.default.Instance.BGMusicMute(!0), r.default.Instance.awardsNUm = s.default.factAwardNum, s.default.ShowReward(function() {
                        r.default.Instance.AddHint(2), a.default.Instance.effectPanel.GetKeyToNum(2), t.CloseBtnClick(), s.default.Event("ad_key", "")
                    })
                }, e.prototype.surpriseSecondPanelCloseClick = function() {
                    s.default.Event("END_PAGE_003", ""), this.surpriseSecondPanel.active = !1
                }, i([l(cc.Node)], e.prototype, "pushAdObjs", void 0), i([l(cc.Node)], e.prototype, "surpriseSecondPanel", void 0), e = i([u], e)
            }(cc.Component);
        n.default = d, cc._RF.pop()
    }, {
        "../AdManager": "AdManager",
        "../GameData": "GameData",
        "../GameFacade": "GameFacade"
    }],
    TJ: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "9dc0cuhqZZKdqw7+zjWi9mZ", "TJ");
        var o, i = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            r = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            a = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (t) {
                        r = [6, t], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        (function(t) {
            var e = function() {
                function t(t) {
                    this._value = t
                }
                return Object.defineProperty(t.prototype, "value", {
                    get: function() {
                        return this._value
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.toString = function() {
                    return "" + this.value
                }, t
            }();
            t.Num = e;
            var n = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), Object.defineProperty(e.prototype, "value", {
                    get: function() {
                        return Math.floor(this._value)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "javaSignature", {
                    get: function() {
                        return "I"
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }(e);
            t.Int = n;
            var o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), Object.defineProperty(e.prototype, "javaSignature", {
                    get: function() {
                        return "F"
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }(e);
            t.Float = o;
            var s = function() {
                function t(t) {
                    this._value = t
                }
                return Object.defineProperty(t.prototype, "value", {
                    get: function() {
                        return this._value
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.toString = function() {
                    return "" + this.value
                }, Object.defineProperty(t.prototype, "javaSignature", {
                    get: function() {
                        return "Z"
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }();
            t.Bool = s;
            var c = function() {
                function t(t) {
                    this._value = t
                }
                return Object.defineProperty(t.prototype, "value", {
                    get: function() {
                        return this._value
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.toString = function() {
                    return "" + this.value
                }, Object.defineProperty(t.prototype, "javaSignature", {
                    get: function() {
                        return "Ljava/lang/String;"
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }();
            t.Str = c;
            var u = function() {
                function t() {
                    this.hexcase = 0, this.b64pad = ""
                }
                return t.prototype.hex_md5 = function(t) {
                    return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(t)))
                }, t.prototype.b64_md5 = function(t) {
                    return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(t)))
                }, t.prototype.any_md5 = function(t, e) {
                    return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(t)), e)
                }, t.prototype.hex_hmac_md5 = function(t, e) {
                    return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)))
                }, t.prototype.b64_hmac_md5 = function(t, e) {
                    return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)))
                }, t.prototype.any_hmac_md5 = function(t, e, n) {
                    return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)), n)
                }, t.prototype.rstr_md5 = function(t) {
                    return this.binl2rstr(this.binl_md5(this.rstr2binl(t), 8 * t.length))
                }, t.prototype.rstr_hmac_md5 = function(t, e) {
                    var n = this.rstr2binl(t);
                    n.length > 16 && (n = this.binl_md5(n, 8 * t.length));
                    for (var o = Array(16), i = Array(16), r = 0; r < 16; r++) o[r] = 909522486 ^ n[r], i[r] = 1549556828 ^ n[r];
                    var a = this.binl_md5(o.concat(this.rstr2binl(e)), 512 + 8 * e.length);
                    return this.binl2rstr(this.binl_md5(i.concat(a), 640))
                }, t.prototype.rstr2hex = function(t) {
                    try {
                        this.hexcase
                    } catch (t) {
                        this.hexcase = 0
                    }
                    for (var e, n = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", o = "", i = 0; i < t.length; i++) e = t.charCodeAt(i), o += n.charAt(e >>> 4 & 15) + n.charAt(15 & e);
                    return o
                }, t.prototype.rstr2b64 = function(t) {
                    try {
                        this.b64pad
                    } catch (t) {
                        this.b64pad = ""
                    }
                    for (var e = "", n = t.length, o = 0; o < n; o += 3)
                        for (var i = t.charCodeAt(o) << 16 | (o + 1 < n ? t.charCodeAt(o + 1) << 8 : 0) | (o + 2 < n ? t.charCodeAt(o + 2) : 0), r = 0; r < 4; r++) 8 * o + 6 * r > 8 * t.length ? e += this.b64pad : e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >>> 6 * (3 - r) & 63);
                    return e
                }, t.prototype.rstr2any = function(t, e) {
                    var n, o, i, r, a, s = e.length,
                        c = Array(Math.ceil(t.length / 2));
                    for (n = 0; n < c.length; n++) c[n] = t.charCodeAt(2 * n) << 8 | t.charCodeAt(2 * n + 1);
                    var u = Math.ceil(8 * t.length / (Math.log(e.length) / Math.log(2))),
                        l = Array(u);
                    for (o = 0; o < u; o++) {
                        for (a = Array(), r = 0, n = 0; n < c.length; n++) r = (r << 16) + c[n], r -= (i = Math.floor(r / s)) * s, (a.length > 0 || i > 0) && (a[a.length] = i);
                        l[o] = r, c = a
                    }
                    var d = "";
                    for (n = l.length - 1; n >= 0; n--) d += e.charAt(l[n]);
                    return d
                }, t.prototype.str2rstr_utf8 = function(t) {
                    for (var e, n, o = "", i = -1; ++i < t.length;) e = t.charCodeAt(i), n = i + 1 < t.length ? t.charCodeAt(i + 1) : 0, 55296 <= e && e <= 56319 && 56320 <= n && n <= 57343 && (e = 65536 + ((1023 & e) << 10) + (1023 & n), i++), e <= 127 ? o += String.fromCharCode(e) : e <= 2047 ? o += String.fromCharCode(192 | e >>> 6 & 31, 128 | 63 & e) : e <= 65535 ? o += String.fromCharCode(224 | e >>> 12 & 15, 128 | e >>> 6 & 63, 128 | 63 & e) : e <= 2097151 && (o += String.fromCharCode(240 | e >>> 18 & 7, 128 | e >>> 12 & 63, 128 | e >>> 6 & 63, 128 | 63 & e));
                    return o
                }, t.prototype.str2rstr_utf16le = function(t) {
                    for (var e = "", n = 0; n < t.length; n++) e += String.fromCharCode(255 & t.charCodeAt(n), t.charCodeAt(n) >>> 8 & 255);
                    return e
                }, t.prototype.str2rstr_utf16be = function(t) {
                    for (var e = "", n = 0; n < t.length; n++) e += String.fromCharCode(t.charCodeAt(n) >>> 8 & 255, 255 & t.charCodeAt(n));
                    return e
                }, t.prototype.rstr2binl = function(t) {
                    for (var e = Array(t.length >> 2), n = 0; n < e.length; n++) e[n] = 0;
                    for (n = 0; n < 8 * t.length; n += 8) e[n >> 5] |= (255 & t.charCodeAt(n / 8)) << n % 32;
                    return e
                }, t.prototype.binl2rstr = function(t) {
                    for (var e = "", n = 0; n < 32 * t.length; n += 8) e += String.fromCharCode(t[n >> 5] >>> n % 32 & 255);
                    return e
                }, t.prototype.binl_md5 = function(t, e) {
                    t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
                    for (var n = 1732584193, o = -271733879, i = -1732584194, r = 271733878, a = 0; a < t.length; a += 16) {
                        var s = n,
                            c = o,
                            u = i,
                            l = r;
                        n = this.md5_ff(n, o, i, r, t[a + 0], 7, -680876936), r = this.md5_ff(r, n, o, i, t[a + 1], 12, -389564586), i = this.md5_ff(i, r, n, o, t[a + 2], 17, 606105819), o = this.md5_ff(o, i, r, n, t[a + 3], 22, -1044525330), n = this.md5_ff(n, o, i, r, t[a + 4], 7, -176418897), r = this.md5_ff(r, n, o, i, t[a + 5], 12, 1200080426), i = this.md5_ff(i, r, n, o, t[a + 6], 17, -1473231341), o = this.md5_ff(o, i, r, n, t[a + 7], 22, -45705983), n = this.md5_ff(n, o, i, r, t[a + 8], 7, 1770035416), r = this.md5_ff(r, n, o, i, t[a + 9], 12, -1958414417), i = this.md5_ff(i, r, n, o, t[a + 10], 17, -42063), o = this.md5_ff(o, i, r, n, t[a + 11], 22, -1990404162), n = this.md5_ff(n, o, i, r, t[a + 12], 7, 1804603682), r = this.md5_ff(r, n, o, i, t[a + 13], 12, -40341101), i = this.md5_ff(i, r, n, o, t[a + 14], 17, -1502002290), o = this.md5_ff(o, i, r, n, t[a + 15], 22, 1236535329), n = this.md5_gg(n, o, i, r, t[a + 1], 5, -165796510), r = this.md5_gg(r, n, o, i, t[a + 6], 9, -1069501632), i = this.md5_gg(i, r, n, o, t[a + 11], 14, 643717713), o = this.md5_gg(o, i, r, n, t[a + 0], 20, -373897302), n = this.md5_gg(n, o, i, r, t[a + 5], 5, -701558691), r = this.md5_gg(r, n, o, i, t[a + 10], 9, 38016083), i = this.md5_gg(i, r, n, o, t[a + 15], 14, -660478335), o = this.md5_gg(o, i, r, n, t[a + 4], 20, -405537848), n = this.md5_gg(n, o, i, r, t[a + 9], 5, 568446438), r = this.md5_gg(r, n, o, i, t[a + 14], 9, -1019803690), i = this.md5_gg(i, r, n, o, t[a + 3], 14, -187363961), o = this.md5_gg(o, i, r, n, t[a + 8], 20, 1163531501), n = this.md5_gg(n, o, i, r, t[a + 13], 5, -1444681467), r = this.md5_gg(r, n, o, i, t[a + 2], 9, -51403784), i = this.md5_gg(i, r, n, o, t[a + 7], 14, 1735328473), o = this.md5_gg(o, i, r, n, t[a + 12], 20, -1926607734), n = this.md5_hh(n, o, i, r, t[a + 5], 4, -378558), r = this.md5_hh(r, n, o, i, t[a + 8], 11, -2022574463), i = this.md5_hh(i, r, n, o, t[a + 11], 16, 1839030562), o = this.md5_hh(o, i, r, n, t[a + 14], 23, -35309556), n = this.md5_hh(n, o, i, r, t[a + 1], 4, -1530992060), r = this.md5_hh(r, n, o, i, t[a + 4], 11, 1272893353), i = this.md5_hh(i, r, n, o, t[a + 7], 16, -155497632), o = this.md5_hh(o, i, r, n, t[a + 10], 23, -1094730640), n = this.md5_hh(n, o, i, r, t[a + 13], 4, 681279174), r = this.md5_hh(r, n, o, i, t[a + 0], 11, -358537222), i = this.md5_hh(i, r, n, o, t[a + 3], 16, -722521979), o = this.md5_hh(o, i, r, n, t[a + 6], 23, 76029189), n = this.md5_hh(n, o, i, r, t[a + 9], 4, -640364487), r = this.md5_hh(r, n, o, i, t[a + 12], 11, -421815835), i = this.md5_hh(i, r, n, o, t[a + 15], 16, 530742520), o = this.md5_hh(o, i, r, n, t[a + 2], 23, -995338651), n = this.md5_ii(n, o, i, r, t[a + 0], 6, -198630844), r = this.md5_ii(r, n, o, i, t[a + 7], 10, 1126891415), i = this.md5_ii(i, r, n, o, t[a + 14], 15, -1416354905), o = this.md5_ii(o, i, r, n, t[a + 5], 21, -57434055), n = this.md5_ii(n, o, i, r, t[a + 12], 6, 1700485571), r = this.md5_ii(r, n, o, i, t[a + 3], 10, -1894986606), i = this.md5_ii(i, r, n, o, t[a + 10], 15, -1051523), o = this.md5_ii(o, i, r, n, t[a + 1], 21, -2054922799), n = this.md5_ii(n, o, i, r, t[a + 8], 6, 1873313359), r = this.md5_ii(r, n, o, i, t[a + 15], 10, -30611744), i = this.md5_ii(i, r, n, o, t[a + 6], 15, -1560198380), o = this.md5_ii(o, i, r, n, t[a + 13], 21, 1309151649), n = this.md5_ii(n, o, i, r, t[a + 4], 6, -145523070), r = this.md5_ii(r, n, o, i, t[a + 11], 10, -1120210379), i = this.md5_ii(i, r, n, o, t[a + 2], 15, 718787259), o = this.md5_ii(o, i, r, n, t[a + 9], 21, -343485551), n = this.safe_add(n, s), o = this.safe_add(o, c), i = this.safe_add(i, u), r = this.safe_add(r, l)
                    }
                    return [n, o, i, r]
                }, t.prototype.md5_cmn = function(t, e, n, o, i, r) {
                    return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(e, t), this.safe_add(o, r)), i), n)
                }, t.prototype.md5_ff = function(t, e, n, o, i, r, a) {
                    return this.md5_cmn(e & n | ~e & o, t, e, i, r, a)
                }, t.prototype.md5_gg = function(t, e, n, o, i, r, a) {
                    return this.md5_cmn(e & o | n & ~o, t, e, i, r, a)
                }, t.prototype.md5_hh = function(t, e, n, o, i, r, a) {
                    return this.md5_cmn(e ^ n ^ o, t, e, i, r, a)
                }, t.prototype.md5_ii = function(t, e, n, o, i, r, a) {
                    return this.md5_cmn(n ^ (e | ~o), t, e, i, r, a)
                }, t.prototype.safe_add = function(t, e) {
                    var n = (65535 & t) + (65535 & e);
                    return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
                }, t.prototype.bit_rol = function(t, e) {
                    return t << e | t >>> 32 - e
                }, t
            }();
            t.MD5 = u;
            var l = function() {
                function t() {}
                return t.New = function() {
                    for (var t = (new Date).getTime().toString(16); t.length < 32;) t += Math.floor(16 * Math.random()).toString(16);
                    return (new u).hex_md5(t)
                }, t
            }();
            t.Guid = l;
            var d = function() {
                function t() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this.invocationList = [];
                    for (var n = 0, o = t; n < o.length; n++) {
                        var i = o[n];
                        "function" == typeof i && this.Add(i)
                    }
                }
                return t.prototype.GetInvocationList = function() {
                    return this.invocationList
                }, t.prototype.Add = function(e) {
                    if (null != e)
                        if (e instanceof t)
                            for (var n = 0, o = e.invocationList; n < o.length; n++) {
                                var i = o[n];
                                this.Add(i)
                            } else this.invocationList.push(e);
                    return this
                }, t.prototype.Remove = function(e) {
                    if (null != e) {
                        var n = void 0;
                        if (e instanceof t)
                            for (var o = 0, i = e.invocationList; o < i.length; o++) {
                                var r = i[o];
                                this.Remove(r)
                            } else(n = this.invocationList.indexOf(e)) >= 0 && this.invocationList.splice(n, 1)
                    }
                }, t.prototype.Clear = function() {
                    this.invocationList = []
                }, t.prototype.Invoke = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    for (var n = 0, o = this.invocationList; n < o.length; n++) {
                        var i = o[n];
                        if (null != i) try {
                            i.apply(void 0, t)
                        } catch (t) {
                            console.log(t)
                        }
                    }
                }, t
            }();
            t.Action = d, window.ExternCallback = function(t, e) {
                console.log("ExternCallback = " + t + " - " + e), w.Get(t).Run(h[e])
            };
            var h, p, f, v, y, m, g, A, b, w = function() {
                    function t() {}
                    return t.Set = function(t) {
                        var e = l.New();
                        return this.callbacks[e] = t, e
                    }, t.Get = function(t) {
                        var e = this.callbacks[t];
                        return null == e && (e = new O), e
                    }, t.callbacks = {}, t
                }(),
                O = function() {
                    function t() {
                        this.callbacks = {}
                    }
                    return t.prototype.Clone = function() {
                        for (var e = new t, n = 0, o = Object.keys(this.callbacks); n < o.length; n++) {
                            var i = o[n];
                            e.callbacks[i] = this.callbacks[i]
                        }
                        return e
                    }, t.prototype.Get = function(t) {
                        null == t && (t = "");
                        var e = this.callbacks[t];
                        return null == e && (e = new d), e
                    }, t.prototype.Set = function(t, e) {
                        "function" == typeof e && (e = new d(e)), this.callbacks[t] = e
                    }, t.prototype.Add = function(t, e) {
                        this.Set(t, this.Get(t).Add(e))
                    }, t.prototype.Run = function(t) {
                        var e = this.Get(t);
                        if (null != e)
                            for (var n = 0, o = e.GetInvocationList(); n < o.length; n++) {
                                var i = o[n];
                                try {
                                    i()
                                } catch (t) {
                                    console.error(t)
                                }
                            }
                    }, t
                }();
            t.CallbackInfo = O,
                function(t) {
                    t[t.Click = 0] = "Click", t[t.Close = 1] = "Close", t[t.Expose = 2] = "Expose", t[t.NoAds = 3] = "NoAds", t[t.Reward = 4] = "Reward", t[t.NoReward = 5] = "NoReward", t[t.Success = 6] = "Success", t[t.Failure = 7] = "Failure", t[t.Error = 8] = "Error", t[t.Cancel = 9] = "Cancel", t[t.Complete = 10] = "Complete", t[t.Statistic = 11] = "Statistic"
                }(h = t.EventType || (t.EventType = {})),
                function(t) {
                    t[t.Unknown = 0] = "Unknown", t[t.Android = 1] = "Android", t[t.AppRt = 2] = "AppRt", t[t.Browser = 3] = "Browser"
                }(p = t.Platform || (t.Platform = {})),
                function(t) {
                    t[t.Unknown = 0] = "Unknown", t[t.editor = 1] = "editor", t[t.android = 2] = "android", t[t.oppoQG = 3] = "oppoQG", t[t.vivoQG = 4] = "vivoQG", t[t.wxGame = 5] = "wxGame", t[t.ttGame = 6] = "ttGame", t[t.qqGame = 7] = "qqGame", t[t.ucGame = 8] = "ucGame", t[t.qttGame = 9] = "qttGame", t[t._4399 = 10] = "_4399"
                }(f = t.Channel || (t.Channel = {})),
                function(t) {
                    var e = function() {
                        function e(t) {
                            this.objectIndex = t
                        }
                        return e.prototype.toString = function() {
                            return this.objectIndex
                        }, e.Get = function(n) {
                            return "string" == typeof n ? new e(n) : t.Java.SetValue(n)
                        }, e.prototype.GetValue = function(e) {
                            return null == e ? null : (e.prototype == n.prototype && (i = new n(t.Java.GetInt(this))), e.prototype == o.prototype && (i = new o(t.Java.GetFloat(this))), e.prototype == s.prototype && (i = new s(t.Java.GetBoolean(this))), e.prototype == c.prototype && (i = new c(t.Java.GetString(this))), i);
                            var i
                        }, e
                    }();
                    t.Object0 = e;
                    var i = function() {
                        function e(t) {
                            this.className = t
                        }
                        return e.prototype.SetStatic = function(e, n) {
                            t.Java.Set(this.className, e, r.SetValue(n), null)
                        }, e.prototype.GetStatic = function(e, n) {
                            var o = t.Java.Get(this.className, n, null);
                            return r.GetValue(e, o)
                        }, e.prototype.CallStatic = function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            var o = e.shift();
                            if ("string" != typeof o) {
                                var i = e.shift(),
                                    a = t.Java.Call(this.className, i, r.SetValues.apply(r, e), null);
                                return r.GetValue(o, a)
                            }
                            t.Java.Call(this.className, o, r.SetValues.apply(r, e), null)
                        }, e.prototype.New = function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            return t.Java.New(this.className, r.SetValues.apply(r, e))
                        }, e
                    }();
                    t.JavaClass = i;
                    var r = function() {
                        function n(t, e) {
                            this.javaClass = e, this.object = t
                        }
                        return n.prototype.toString = function() {
                            return "" + this.object
                        }, n.New = function(t) {
                            for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
                            var r = new i(t);
                            return new n(r.New.apply(r, e), r)
                        }, n.Get = function(e) {
                            return new n(e, new i(t.Java.Class(e)))
                        }, n.prototype.Set = function(o, i) {
                            var r;
                            r = i instanceof n ? i.object : e.Get(i), t.Java.Set(this.javaClass.className, o, r, this.object)
                        }, n.prototype.Get = function(e, o) {
                            var i = t.Java.Get(this.javaClass.className, o, this.object);
                            return n.GetValue(e, i)
                        }, n.prototype.Call = function() {
                            for (var e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
                            var i = e.shift();
                            if ("string" != typeof i) {
                                var r = e.shift(),
                                    a = t.Java.Call(this.javaClass.className, r, n.SetValues.apply(n, e), this.object);
                                return n.GetValue(i, a)
                            }
                            t.Java.Call(this.javaClass.className, i, n.SetValues.apply(n, e), this.object)
                        }, n.GetValue = function(t, e) {
                            return t.prototype == n.prototype ? n.Get(e) : e.GetValue(t)
                        }, n.SetValue = function(t) {
                            return t instanceof n ? t.object : e.Get(t)
                        }, n.SetValues = function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            for (var o = [], i = 0, r = t; i < r.length; i++) {
                                var a = r[i];
                                o.push(n.SetValue(a))
                            }
                            return o
                        }, n
                    }();
                    t.JavaObject = r
                }(v = t.Android || (t.Android = {})),
                function(t) {
                    var e = function() {
                        function t() {}
                        return t.Quit = function() {
                            switch (C.platform) {
                                case p.Android:
                                    new v.JavaClass("tj.APP.ExApi").CallStatic("Quit")
                            }
                        }, Object.defineProperty(t, "companyName", {
                            get: function() {
                                switch (C.platform) {
                                    case p.Android:
                                        return new v.JavaClass("tj.APP.ExApi").CallStatic(c, "CompanyName").value;
                                    case p.AppRt:
                                        return b.APP.Api.companyName
                                }
                                return ""
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t, "productName", {
                            get: function() {
                                switch (C.platform) {
                                    case p.Android:
                                        return new v.JavaClass("tj.APP.ExApi").CallStatic(c, "ProductName").value;
                                    case p.AppRt:
                                        return b.APP.Api.productName
                                }
                                return ""
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t, "packageName", {
                            get: function() {
                                switch (C.platform) {
                                    case p.Android:
                                        return new v.JavaClass("tj.APP.ExApi").CallStatic(c, "PackageName").value;
                                    case p.AppRt:
                                        return b.APP.Api.packageName
                                }
                                return ""
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t, "versionName", {
                            get: function() {
                                switch (C.platform) {
                                    case p.Android:
                                        return new v.JavaClass("tj.APP.ExApi").CallStatic(c, "VersionName").value;
                                    case p.AppRt:
                                        return b.APP.Api.versionName
                                }
                                return ""
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t, "versionCode", {
                            get: function() {
                                switch (C.platform) {
                                    case p.Android:
                                        return new v.JavaClass("tj.APP.ExApi").CallStatic(n, "VersionCode").value;
                                    case p.AppRt:
                                        return b.APP.Api.versionCode
                                }
                                return 0
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t, "channel", {
                            get: function() {
                                switch (C.platform) {
                                    case p.Android:
                                        return new v.JavaClass("tj.APP.ExApi").CallStatic(c, "Channel").value;
                                    case p.AppRt:
                                        return b.APP.Api.channel
                                }
                                return "test"
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t.UserAgreement = function() {
                            switch (C.platform) {
                                case p.Android:
                                    new v.JavaClass("tj.APP.ExApi").CallStatic("UserAgreement")
                            }
                        }, t.PrivacyPolicy = function() {
                            switch (C.platform) {
                                case p.Android:
                                    new v.JavaClass("tj.APP.ExApi").CallStatic("PrivacyPolicy")
                            }
                        }, t
                    }();
                    t.Api = e
                }(t.APP || (t.APP = {})),
                function(t) {
                    var e = function() {
                        return function() {
                            this.cbi = new O, this.product = new n, this.order = new o
                        }
                    }();
                    t.Param = e;
                    var n = function() {
                        return function() {}
                    }();
                    t.Product = n;
                    var o = function() {
                        return function() {}
                    }();
                    t.Order = o;
                    var i = function() {
                        function t() {}
                        return t.Param2Json = function(t) {
                            var e = {};
                            return e.cbi = w.Set(t.cbi), e.product = t.product, new c(JSON.stringify(e))
                        }, t.Purchase = function(t) {
                            switch (C.platform) {
                                case p.Android:
                                    new v.JavaClass("tj.IAP.ExApi").CallStatic("Purchase", this.Param2Json(t))
                            }
                        }, Object.defineProperty(t, "exist", {
                            get: function() {
                                switch (C.platform) {
                                    case p.Android:
                                        return new v.JavaClass("tj.IAP.ExApi").CallStatic(s, "Exist").value;
                                    case p.AppRt:
                                        return b.IAP.Api.exist
                                }
                                return !1
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t
                    }();
                    t.Api = i
                }(t.IAP || (t.IAP = {})),
                function(t) {
                    var e = function() {
                        return function() {
                            this.cbi = new O, this.id = null, this.place = 0, this.extraAd = !0, this.template = !0, this.video = !0, this.refresh = !1
                        }
                    }();
                    t.Param = e,
                        function(t) {
                            t[t.LEFT = 3] = "LEFT", t[t.RIGHT = 5] = "RIGHT", t[t.CENTER = 17] = "CENTER", t[t.TOP = 48] = "TOP", t[t.BOTTOM = 80] = "BOTTOM"
                        }(t.Place || (t.Place = {}));
                    var n = function() {
                        function t() {}
                        return t.Param2Json = function(t) {
                            var e = {};
                            return e.cbi = w.Set(t.cbi), e.id = t.id, e.place = t.place, e.extraAd = t.extraAd, e.template = t.template, e.video = t.video, new c(JSON.stringify(e))
                        }, t.ShowBanner = function(t) {
                            switch (console.log("ADS.ShowBanner"), C.platform) {
                                case p.Android:
                                    new v.JavaClass("tj.ADS.ExApi").CallStatic("ShowBanner", this.Param2Json(t));
                                    break;
                                case p.AppRt:
                                    b.ADS.Api.ShowBanner(t)
                            }
                        }, t.RemoveBanner = function(t) {
                            switch (console.log("ADS.RemoveBanner"), C.platform) {
                                case p.Android:
                                    new v.JavaClass("tj.ADS.ExApi").CallStatic("RemoveBanner", this.Param2Json(t));
                                    break;
                                case p.AppRt:
                                    b.ADS.Api.RemoveBanner(t)
                            }
                        }, t.NormalReady = function(t) {
                            switch (console.log("ADS.NormalReady"), C.platform) {
                                case p.Android:
                                    return new v.JavaClass("tj.ADS.ExApi").CallStatic(s, "NormalReady", this.Param2Json(t)).value;
                                case p.AppRt:
                                    return b.ADS.Api.NormalReady(t)
                            }
                            return !1
                        }, t.ShowNormal = function(t) {
                            switch (console.log("ADS.ShowNormal"), C.platform) {
                                case p.Android:
                                    new v.JavaClass("tj.ADS.ExApi").CallStatic("ShowNormal", this.Param2Json(t));
                                    break;
                                case p.AppRt:
                                    b.ADS.Api.ShowNormal(t)
                            }
                        }, t.RewardReady = function(t) {
                            switch (console.log("ADS.RewardReady"), C.platform) {
                                case p.Android:
                                    return new v.JavaClass("tj.ADS.ExApi").CallStatic(s, "RewardReady", this.Param2Json(t)).value;
                                case p.AppRt:
                                    return b.ADS.Api.RewardReady(t)
                            }
                            return !1
                        }, t.ShowReward = function(t) {
                            switch (console.log("ADS.ShowReward"), C.platform) {
                                case p.Android:
                                    new v.JavaClass("tj.ADS.ExApi").CallStatic("ShowReward", this.Param2Json(t));
                                    break;
                                case p.AppRt:
                                    b.ADS.Api.ShowReward(t)
                            }
                        }, Object.defineProperty(t, "exist", {
                            get: function() {
                                switch (C.platform) {
                                    case p.Android:
                                        return new v.JavaClass("tj.ADS.ExApi").CallStatic(s, "Exist").value;
                                    case p.AppRt:
                                        return b.ADS.Api.exist
                                }
                                return !1
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t
                    }();
                    t.Api = n
                }(t.ADS || (t.ADS = {})),
                function(t) {
                    var e = function() {
                        return function() {
                            this.dic = {}
                        }
                    }();
                    t.Param = e;
                    var n = function() {
                        function t() {}
                        return t.Param2Json = function(t) {
                            return new c(JSON.stringify(t))
                        }, t.Event = function(t) {
                            switch (C.platform) {
                                case p.Android:
                                    new v.JavaClass("tj.GSA.ExApi").CallStatic("Event", this.Param2Json(t));
                                    break;
                                case p.AppRt:
                                    b.GSA.Api.Event(t)
                            }
                        }, t.EventBegin = function(t) {
                            switch (C.platform) {
                                case p.Android:
                                    new v.JavaClass("tj.GSA.ExApi").CallStatic("EventBegin", this.Param2Json(t))
                            }
                        }, t.EventEnd = function(t) {
                            switch (C.platform) {
                                case p.Android:
                                    new v.JavaClass("tj.GSA.ExApi").CallStatic("EventEnd", this.Param2Json(t))
                            }
                        }, t.PageBegin = function(t) {
                            switch (C.platform) {
                                case p.Android:
                                    new v.JavaClass("tj.GSA.ExApi").CallStatic("PageBegin", this.Param2Json(t))
                            }
                        }, t.PageEnd = function(t) {
                            switch (C.platform) {
                                case p.Android:
                                    new v.JavaClass("tj.GSA.ExApi").CallStatic("PageEnd", this.Param2Json(t))
                            }
                        }, t.LevelStart = function(t) {
                            switch (C.platform) {
                                case p.Android:
                                    new v.JavaClass("tj.GSA.ExApi").CallStatic("LevelStart", this.Param2Json(t))
                            }
                        }, t.LevelFinish = function(t) {
                            switch (C.platform) {
                                case p.Android:
                                    new v.JavaClass("tj.GSA.ExApi").CallStatic("LevelFinish", this.Param2Json(t))
                            }
                        }, t.LevelFail = function(t) {
                            switch (C.platform) {
                                case p.Android:
                                    new v.JavaClass("tj.GSA.ExApi").CallStatic("LevelFail", this.Param2Json(t))
                            }
                        }, t.Pay = function(t) {
                            switch (C.platform) {
                                case p.Android:
                                    new v.JavaClass("tj.GSA.ExApi").CallStatic("Pay", this.Param2Json(t))
                            }
                        }, t.Buy = function(t) {
                            switch (C.platform) {
                                case p.Android:
                                    new v.JavaClass("tj.GSA.ExApi").CallStatic("Buy", this.Param2Json(t))
                            }
                        }, t.Use = function(t) {
                            switch (C.platform) {
                                case p.Android:
                                    new v.JavaClass("tj.GSA.ExApi").CallStatic("Use", this.Param2Json(t))
                            }
                        }, t.Bonus = function(t) {
                            switch (C.platform) {
                                case p.Android:
                                    new v.JavaClass("tj.GSA.ExApi").CallStatic("Bonus", this.Param2Json(t))
                            }
                        }, t
                    }();
                    t.Api = n
                }(t.GSA || (t.GSA = {})),
                function(t) {
                    var e = function() {
                        function t() {
                            this.isInit = !1
                        }
                        return t.prototype.DoInit = function() {
                            this.isInit || (this.isInit = !0, this.OnInit())
                        }, t.prototype.OnInit = function() {}, t
                    }();
                    t.CI = e;
                    var n = function() {
                        function t() {}
                        return t.AddComponent = function(t) {
                            var e = new t;
                            return this.components.push(e), e
                        }, t.GetComponent = function(t) {
                            for (var e = 0, n = this.components; e < n.length; e++) {
                                var o = n[e];
                                if (o == t.prototype || o instanceof t) return o
                            }
                            return null
                        }, t.GetComponents = function(t) {
                            for (var e = [], n = 0, o = this.components; n < o.length; n++) {
                                var i = o[n];
                                (i == t.prototype || i instanceof t) && e.push(i)
                            }
                            return e
                        }, t.GetComponentsWithInit = function(t) {
                            for (var e = this.GetComponents(t), n = 0, o = e; n < o.length; n++) {
                                o[n].DoInit()
                            }
                            return e
                        }, t.components = [], t
                    }();
                    t.CM = n
                }(y = t.Component || (t.Component = {})),
                function(t) {
                    (function(t) {
                        (function(t) {
                            var e = function() {
                                return function() {}
                            }();
                            t.CallbackResult = e;
                            var n = function() {
                                return function() {}
                            }();
                            t.CallbackParam = n;
                            (function(t) {
                                function e() {
                                    return null !== t && t.apply(this, arguments) || this
                                }
                                i(e, t)
                            })(e);
                            var o = function(t) {
                                function e() {
                                    return null !== t && t.apply(this, arguments) || this
                                }
                                return i(e, t), e
                            }(n);
                            t.LoginParam = o, t.Login = function(t) {
                                qg.login(t)
                            };
                            var r = function(t) {
                                function e() {
                                    return null !== t && t.apply(this, arguments) || this
                                }
                                return i(e, t), e
                            }(n);
                            t.NavigateToMiniGameParam = r, t.NavigateToMiniGame = function(t) {
                                qg.navigateToMiniGame(t)
                            }, t.SetLoadingProgress = function(t) {
                                var e = {};
                                e.progress = t, qg.setLoadingProgress(e)
                            }, t.LoadingComplete = function(t) {
                                qg.loadingComplete(t)
                            }, t.InstallShortcut = function(t) {
                                qg.installShortcut(t)
                            };
                            var a = function() {
                                return function() {}
                            }();
                            t.HasShortcutInstalledParam = a, t.HasShortcutInstalled = function(t) {
                                qg.hasShortcutInstalled(t)
                            };
                            var s = function(t) {
                                function e() {
                                    var e = null !== t && t.apply(this, arguments) || this;
                                    return e.isDebug = !1, e
                                }
                                return i(e, t), e
                            }(n);
                            t.InitAdServiceParam = s, t.InitAdService = function(t) {
                                qg.initAdService(t)
                            };
                            var c = function() {
                                function t(t) {
                                    this.bannerAd = t
                                }
                                return t.prototype.Show = function() {
                                    this.bannerAd.show()
                                }, t.prototype.Hide = function() {
                                    this.bannerAd.hide()
                                }, t.prototype.OnShow = function(t) {
                                    this.bannerAd.onShow(t)
                                }, t.prototype.OffShow = function(t) {
                                    this.bannerAd.offShow(t)
                                }, t.prototype.OnHide = function(t) {
                                    this.bannerAd.onHide(t)
                                }, t.prototype.OffHide = function(t) {
                                    this.bannerAd.offHide(t)
                                }, t.prototype.OnError = function(t) {
                                    this.bannerAd.onError(t)
                                }, t.prototype.OffError = function(t) {
                                    this.bannerAd.offError(t)
                                }, t.prototype.OnResize = function(t) {
                                    this.bannerAd.onResize(t)
                                }, t.prototype.OffResize = function() {
                                    this.bannerAd.offResize()
                                }, t.prototype.Destroy = function() {
                                    this.bannerAd.destroy()
                                }, t
                            }();
                            t.BannerAd = c, t.CreateBannerAd = function(t) {
                                var e = {};
                                e.posId = t;
                                var n = qg.createBannerAd(e);
                                return new c(n)
                            };
                            var u = function() {
                                function t(t) {
                                    this.insertAd = t
                                }
                                return t.prototype.Load = function() {
                                    this.insertAd.load()
                                }, t.prototype.Show = function() {
                                    this.insertAd.show()
                                }, t.prototype.OnLoad = function(t) {
                                    this.insertAd.onLoad(t)
                                }, t.prototype.OffLoad = function() {
                                    this.insertAd.offLoad()
                                }, t.prototype.OnShow = function(t) {
                                    this.insertAd.onShow(t)
                                }, t.prototype.OffShow = function() {
                                    this.insertAd.offShow()
                                }, t.prototype.OnError = function(t) {
                                    this.insertAd.onError(t)
                                }, t.prototype.OffError = function() {
                                    this.insertAd.offError()
                                }, t.prototype.Destroy = function() {
                                    this.insertAd.destroy()
                                }, t
                            }();
                            t.InsertAd = u, t.CreateInsertAd = function(t) {
                                var e = {};
                                e.posId = t;
                                var n = qg.createInsertAd(e);
                                return new u(n)
                            };
                            (function(t) {
                                function e() {
                                    return null !== t && t.apply(this, arguments) || this
                                }
                                i(e, t)
                            })(e);
                            var l = function() {
                                function t(t) {
                                    this.videoAd = t
                                }
                                return t.prototype.Load = function() {
                                    this.videoAd.load()
                                }, t.prototype.Show = function() {
                                    this.videoAd.show()
                                }, t.prototype.OnLoad = function(t) {
                                    this.videoAd.onLoad(t)
                                }, t.prototype.OffLoad = function() {
                                    this.videoAd.offLoad()
                                }, t.prototype.OnVideoStart = function(t) {
                                    this.videoAd.onVideoStart(t)
                                }, t.prototype.OffVideoStart = function() {
                                    this.videoAd.offVideoStart()
                                }, t.prototype.OnRewarded = function(t) {
                                    this.videoAd.onRewarded(t)
                                }, t.prototype.OffRewarded = function() {
                                    this.videoAd.offRewarded()
                                }, t.prototype.OnClose = function(t) {
                                    this.videoAd.onClose(t)
                                }, t.prototype.OffClose = function() {
                                    this.videoAd.offClose()
                                }, t.prototype.OnError = function(t) {
                                    this.videoAd.onError(t)
                                }, t.prototype.OffError = function() {
                                    this.videoAd.offError()
                                }, t.prototype.Destroy = function() {
                                    this.videoAd.destroy()
                                }, t
                            }();
                            t.RewardedVideoAd = l, t.CreateRewardedVideoAd = function(t) {
                                var e = {};
                                e.posId = t;
                                var n = qg.createRewardedVideoAd(e);
                                return new l(n)
                            };
                            var d = function() {
                                return function() {}
                            }();
                            t.NativeAdData = d;
                            var h = function() {
                                function t(t) {
                                    this.nativeAd = t
                                }
                                return t.prototype.Load = function() {
                                    this.nativeAd.load()
                                }, t.prototype.ReportAdShow = function(t) {
                                    var e = {};
                                    e.adId = t, this.nativeAd.reportAdShow(e)
                                }, t.prototype.ReportAdClick = function(t) {
                                    var e = {};
                                    e.adId = t, this.nativeAd.reportAdClick(e)
                                }, t.prototype.OnLoad = function(t) {
                                    this.nativeAd.onLoad(t)
                                }, t.prototype.OffLoad = function() {
                                    this.nativeAd.offLoad()
                                }, t.prototype.OnError = function(t) {
                                    this.nativeAd.onError(t)
                                }, t.prototype.OffError = function() {
                                    this.nativeAd.offError()
                                }, t.prototype.Destroy = function() {
                                    this.nativeAd.destroy()
                                }, t
                            }();
                            t.NativeAd = h, t.CreateNativeAd = function(t) {
                                var e = {};
                                e.posId = t;
                                var n = qg.createNativeAd(e);
                                return new h(n)
                            }
                        })(t.QG || (t.QG = {}))
                    })(t.OPPO || (t.OPPO = {})),
                    function(t) {
                        (function(t) {
                            var e = function() {
                                return function() {
                                    this.type = "token"
                                }
                            }();
                            t.AuthorizeParam = e, t.Authorize = function(t) {
                                qg.authorize(t)
                            };
                            var n = function() {
                                return function() {}
                            }();
                            t.GetProfileParam = n, t.GetProfile = function(t) {
                                qg.getProfile(t)
                            };
                            var o = function() {
                                function t(t) {
                                    this.bannerAd = t
                                }
                                return t.prototype.Show = function() {
                                    return this.bannerAd.show()
                                }, t.prototype.Hide = function() {
                                    return this.bannerAd.hide()
                                }, t.prototype.OnLoad = function(t) {
                                    this.bannerAd.onLoad(t)
                                }, t.prototype.OffLoad = function(t) {
                                    this.bannerAd.offLoad(t)
                                }, t.prototype.OnError = function(t) {
                                    this.bannerAd.onError(t)
                                }, t.prototype.OffError = function(t) {
                                    this.bannerAd.offError(t)
                                }, t.prototype.OnClose = function(t) {
                                    this.bannerAd.onClose(t)
                                }, t.prototype.OffClose = function(t) {
                                    this.bannerAd.offClose(t)
                                }, t.prototype.OnSize = function(t) {
                                    this.bannerAd.onSize(t)
                                }, t.prototype.OffSize = function(t) {
                                    this.bannerAd.offSize(t)
                                }, t
                            }();
                            t.BannerAd = o, t.CreateBannerAd = function(t) {
                                var e = {};
                                e.posId = t, e.style = {};
                                var n = qg.createBannerAd(e);
                                return new o(n)
                            };
                            var i = function() {
                                function t(t) {
                                    this.interstitialAd = t
                                }
                                return t.prototype.Show = function() {
                                    return this.interstitialAd.show()
                                }, t.prototype.OnLoad = function(t) {
                                    this.interstitialAd.onLoad(t)
                                }, t.prototype.OffLoad = function(t) {
                                    this.interstitialAd.offLoad(t)
                                }, t.prototype.OnError = function(t) {
                                    this.interstitialAd.onError(t)
                                }, t.prototype.OffError = function(t) {
                                    this.interstitialAd.offError(t)
                                }, t.prototype.OnClose = function(t) {
                                    this.interstitialAd.onClose(t)
                                }, t.prototype.OffClose = function(t) {
                                    this.interstitialAd.offClose(t)
                                }, t
                            }();
                            t.InterstitialAd = i, t.CreateInterstitialAd = function(t) {
                                var e = {};
                                e.posId = t;
                                var n = qg.createInterstitialAd(e);
                                return new i(n)
                            };
                            var r = function() {
                                function t(t) {
                                    this.rewardedVideoAd = t
                                }
                                return t.prototype.Load = function() {
                                    return this.rewardedVideoAd.load()
                                }, t.prototype.Show = function() {
                                    return this.rewardedVideoAd.show()
                                }, t.prototype.OnLoad = function(t) {
                                    this.rewardedVideoAd.onLoad(t)
                                }, t.prototype.OffLoad = function(t) {
                                    this.rewardedVideoAd.offLoad(t)
                                }, t.prototype.OnError = function(t) {
                                    this.rewardedVideoAd.onError(t)
                                }, t.prototype.OffError = function(t) {
                                    this.rewardedVideoAd.offError(t)
                                }, t.prototype.OnClose = function(t) {
                                    this.rewardedVideoAd.onClose(t)
                                }, t.prototype.OffClose = function(t) {
                                    this.rewardedVideoAd.offClose(t)
                                }, t
                            }();
                            t.RewardedVideoAd = r, t.CreateRewardedVideoAd = function(t) {
                                var e = {};
                                e.posId = t;
                                var n = qg.createRewardedVideoAd(e);
                                return new r(n)
                            };
                            var a = function() {
                                return function() {}
                            }();
                            t.NativeAdData = a;
                            var s = function() {
                                function t(t) {
                                    this.nativeAd = t
                                }
                                return t.prototype.Load = function() {
                                    this.nativeAd.load()
                                }, t.prototype.ReportAdShow = function(t) {
                                    var e = {};
                                    e.adId = t, this.nativeAd.reportAdShow(e)
                                }, t.prototype.ReportAdClick = function(t) {
                                    var e = {};
                                    e.adId = t, this.nativeAd.reportAdClick(e)
                                }, t.prototype.OnLoad = function(t) {
                                    this.nativeAd.onLoad(t)
                                }, t.prototype.OffLoad = function() {
                                    this.nativeAd.offLoad()
                                }, t.prototype.OnError = function(t) {
                                    this.nativeAd.onError(t)
                                }, t.prototype.OffError = function() {
                                    this.nativeAd.offError()
                                }, t
                            }();
                            t.NativeAd = s, t.CreateNativeAd = function(t) {
                                var e = {};
                                e.posId = t;
                                var n = qg.createNativeAd(e);
                                return new s(n)
                            };
                            var c = function() {
                                return function() {
                                    this.dataType = "json"
                                }
                            }();
                            t.RequestParam = c, t.Request = function(t) {
                                return qg.request(t)
                            }
                        })(t.QG || (t.QG = {}))
                    }(t.VIVO || (t.VIVO = {})),
                    function(t) {
                        t.GetSystemInfoSync = function() {
                            return tt.getSystemInfoSync()
                        };
                        var e = function() {
                                return function() {}
                            }(),
                            n = function() {
                                return function() {}
                            }(),
                            o = (function(t) {
                                function e() {
                                    return null !== t && t.apply(this, arguments) || this
                                }
                                i(e, t)
                            }(e), function(t) {
                                function e() {
                                    var e = null !== t && t.apply(this, arguments) || this;
                                    return e.force = !0, e
                                }
                                return i(e, t), e
                            }(n));
                        t.LoginParam = o, t.Login = function(t) {
                            tt.login(t)
                        };
                        (function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            i(e, t)
                        })(e);
                        var r = function(t) {
                            function e() {
                                var e = null !== t && t.apply(this, arguments) || this;
                                return e.withCredentials = !1, e
                            }
                            return i(e, t), e
                        }(n);
                        t.GetUserInfoParam = r, t.GetUserInfo = function(t) {
                            tt.getUserInfo(t)
                        };
                        var a = function(t) {
                            function e() {
                                var e = null !== t && t.apply(this, arguments) || this;
                                return e.envVersion = "current", e
                            }
                            return i(e, t), e
                        }(n);
                        t.NavigateToMiniProgramParam = a, t.NavigateToMiniProgram = function(t) {
                            tt.navigateToMiniProgram(t)
                        };
                        (function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            i(e, t)
                        })(e);
                        var s = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return i(e, t), e
                        }(n);
                        t.RecordClipParam = s;
                        (function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            i(e, t)
                        })(e);
                        var c = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return i(e, t), e
                        }(n);
                        t.ClipVideoParam = c;
                        var u = function() {
                            function t(t) {
                                this.gameRecorderManager = t
                            }
                            return t.prototype.Start = function(t) {
                                var e = {};
                                e.duration = t, this.gameRecorderManager.start(e)
                            }, t.prototype.OnStart = function(t) {
                                this.gameRecorderManager.onStart(t)
                            }, t.prototype.RecordClip = function(t) {
                                this.gameRecorderManager.recordClip(t)
                            }, t.prototype.Stop = function() {
                                this.gameRecorderManager.stop()
                            }, t.prototype.OnStop = function(t) {
                                this.gameRecorderManager.onStop(t)
                            }, t.prototype.ClipVideo = function(t) {
                                this.gameRecorderManager.clipVideo(t)
                            }, t
                        }();
                        t.GameRecorderManager = u, t.GetGameRecorderManager = function() {
                            if (null == tt.getGameRecorderManager) return null;
                            var t = tt.getGameRecorderManager();
                            return new u(t)
                        };
                        var l = function() {
                                return function() {
                                    this.createChallenge = !1
                                }
                            }(),
                            d = function(t) {
                                function e() {
                                    var e = null !== t && t.apply(this, arguments) || this;
                                    return e.extra = new l, e
                                }
                                return i(e, t), e
                            }(n);
                        t.ShareAppMessageParam = d, t.ShareAppMessage = function(t) {
                            tt.shareAppMessage(t)
                        }, t.ReportAnalytics = function(t, e) {
                            tt.reportAnalytics(t, e)
                        };
                        var h = function() {
                                return function() {}
                            }(),
                            p = function() {
                                return function() {
                                    this.style = new h, this.appLaunchOptions = []
                                }
                            }();
                        t.CreateMoreGamesButtonParam = p, t.CreateMoreGamesButton = function(t) {
                            if (null == tt.createMoreGamesButton) return null;
                            var e = tt.createMoreGamesButton(t);
                            return new f(e)
                        };
                        var f = function() {
                            function t(t) {
                                this.moreGamesButton = t
                            }
                            return t.prototype.Show = function() {
                                return this.moreGamesButton.show()
                            }, t.prototype.Hide = function() {
                                return this.moreGamesButton.hide()
                            }, t.prototype.OnTap = function(t) {
                                this.moreGamesButton.onTap(t)
                            }, t.prototype.OffTap = function(t) {
                                this.moreGamesButton.offTap(t)
                            }, t.prototype.Destroy = function() {
                                this.moreGamesButton.destroy()
                            }, t
                        }();
                        t.MoreGamesButton = f;
                        var v = function() {
                            return function() {}
                        }();
                        t.BannerAdStyle = v;
                        var y = function() {
                            function t(t) {
                                this.bannerAd = t
                            }
                            return Object.defineProperty(t.prototype, "style", {
                                get: function() {
                                    return this.bannerAd.style
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t.prototype.Show = function() {
                                return this.bannerAd.show()
                            }, t.prototype.Hide = function() {
                                return this.bannerAd.hide()
                            }, t.prototype.OnLoad = function(t) {
                                this.bannerAd.onLoad(t)
                            }, t.prototype.OffLoad = function(t) {
                                this.bannerAd.offLoad(t)
                            }, t.prototype.OnError = function(t) {
                                this.bannerAd.onError(t)
                            }, t.prototype.OffError = function(t) {
                                this.bannerAd.offError(t)
                            }, t.prototype.OnResize = function(t) {
                                this.bannerAd.onResize(t)
                            }, t.prototype.OffResize = function(t) {
                                this.bannerAd.offResize(t)
                            }, t.prototype.Destroy = function() {
                                this.bannerAd.destroy()
                            }, t
                        }();
                        t.BannerAd = y, t.CreateBannerAd = function(t, e) {
                            var n = {};
                            n.adUnitId = t, n.style = e;
                            var o = tt.createBannerAd(n);
                            return new y(o)
                        };
                        var m = function() {
                            function t(t) {
                                this.rewardedVideoAd = t
                            }
                            return t.prototype.Load = function() {
                                return this.rewardedVideoAd.load()
                            }, t.prototype.Show = function() {
                                return this.rewardedVideoAd.show()
                            }, t.prototype.OnLoad = function(t) {
                                this.rewardedVideoAd.onLoad(t)
                            }, t.prototype.OffLoad = function(t) {
                                this.rewardedVideoAd.offLoad(t)
                            }, t.prototype.OnError = function(t) {
                                this.rewardedVideoAd.onError(t)
                            }, t.prototype.OffError = function(t) {
                                this.rewardedVideoAd.offError(t)
                            }, t.prototype.OnClose = function(t) {
                                this.rewardedVideoAd.onClose(t)
                            }, t.prototype.OffClose = function(t) {
                                this.rewardedVideoAd.offClose(t)
                            }, t
                        }();
                        t.RewardedVideoAd = m, t.CreateRewardedVideoAd = function(t) {
                            if (null == tt.createRewardedVideoAd) return null;
                            var e = {};
                            e.adUnitId = t;
                            var n = tt.createRewardedVideoAd(e);
                            return new m(n)
                        }
                    }(t.TT || (t.TT = {})),
                    function(t) {
                        var e = function() {
                                return function() {}
                            }(),
                            n = function() {
                                return function() {}
                            }(),
                            o = function(t) {
                                function e() {
                                    return null !== t && t.apply(this, arguments) || this
                                }
                                return i(e, t), e
                            }(n);
                        t.ShowShareMenuParam = o, t.ShowShareMenu = function(t) {
                            qq.showShareMenu(t)
                        };
                        var r = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return i(e, t), e
                        }(n);
                        t.ShareAppMessageParam = r, t.ShareAppMessage = function(t) {
                            qq.shareAppMessage(t)
                        }, t.OnShareAppMessage = function(t) {
                            qq.onShareAppMessage(t)
                        }, t.OffShareAppMessage = function(t) {
                            qq.offShareAppMessage(t)
                        };
                        var a = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return i(e, t), e
                        }(n);
                        t.UpdateShareMenuParam = a, t.UpdateShareMenu = function(t) {
                            qq.updateShareMenu(t)
                        };
                        var s = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return i(e, t), e
                        }(n);
                        t.HideShareMenuParam = s, t.HideShareMenu = function(t) {
                            qq.hideShareMenu(t)
                        };
                        (function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            i(e, t)
                        })(e);
                        var c = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return i(e, t), e
                        }(n);
                        t.GetShareInfoParam = c, t.GetShareInfo = function(t) {
                            qq.getShareInfo(t)
                        };
                        var u = function(t) {
                            function e() {
                                var e = null !== t && t.apply(this, arguments) || this;
                                return e.envVersion = "release", e
                            }
                            return i(e, t), e
                        }(n);
                        t.NavigateToMiniProgramParam = u, t.NavigateToMiniProgram = function(t) {
                            qq.navigateToMiniProgram(t)
                        };
                        (function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            i(e, t)
                        })(e);
                        var l = function(t) {
                            function e() {
                                var e = null !== t && t.apply(this, arguments) || this;
                                return e.showCancel = !0, e.cancelText = "\u53d6\u6d88", e.cancelColor = "#000000", e.confirmText = "\u786e\u5b9a", e.confirmColor = "#576B95", e
                            }
                            return i(e, t), e
                        }(n);
                        t.ShowModalParam = l, t.ShowModal = function(t) {
                            qq.showModal(t)
                        };
                        var d = function() {
                            return function() {}
                        }();
                        t.BannerAdStyle = d;
                        var h = function() {
                            function t(t) {
                                this.bannerAd = t
                            }
                            return Object.defineProperty(t.prototype, "style", {
                                get: function() {
                                    return this.bannerAd.style
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t.prototype.Show = function() {
                                return this.bannerAd.show()
                            }, t.prototype.Hide = function() {
                                return this.bannerAd.hide()
                            }, t.prototype.OnLoad = function(t) {
                                this.bannerAd.onLoad(t)
                            }, t.prototype.OffLoad = function(t) {
                                this.bannerAd.offLoad(t)
                            }, t.prototype.OnError = function(t) {
                                this.bannerAd.onError(t)
                            }, t.prototype.OffError = function(t) {
                                this.bannerAd.offError(t)
                            }, t.prototype.OnResize = function(t) {
                                this.bannerAd.onResize(t)
                            }, t.prototype.OffResize = function(t) {
                                this.bannerAd.offResize(t)
                            }, t.prototype.Destroy = function() {
                                this.bannerAd.destroy()
                            }, t
                        }();
                        t.BannerAd = h, t.CreateBannerAd = function(t, e) {
                            var n = {};
                            n.adUnitId = t, n.style = e;
                            var o = qq.createBannerAd(n);
                            return new h(o)
                        };
                        var p = function() {
                            function t(t) {
                                this.rewardedVideoAd = t
                            }
                            return t.prototype.Load = function() {
                                return this.rewardedVideoAd.load()
                            }, t.prototype.Show = function() {
                                return this.rewardedVideoAd.show()
                            }, t.prototype.OnLoad = function(t) {
                                this.rewardedVideoAd.onLoad(t)
                            }, t.prototype.OffLoad = function(t) {
                                this.rewardedVideoAd.offLoad(t)
                            }, t.prototype.OnError = function(t) {
                                this.rewardedVideoAd.onError(t)
                            }, t.prototype.OffError = function(t) {
                                this.rewardedVideoAd.offError(t)
                            }, t.prototype.OnClose = function(t) {
                                this.rewardedVideoAd.onClose(t)
                            }, t.prototype.OffClose = function(t) {
                                this.rewardedVideoAd.offClose(t)
                            }, t
                        }();
                        t.RewardedVideoAd = p, t.CreateRewardedVideoAd = function(t) {
                            var e = {};
                            e.adUnitId = t;
                            var n = qq.createRewardedVideoAd(e);
                            return new p(n)
                        }
                    }(t.QQ || (t.QQ = {})),
                    function(t) {
                        var e = function() {
                                return function() {}
                            }(),
                            n = function() {
                                return function() {}
                            }(),
                            o = function(t) {
                                function e() {
                                    return null !== t && t.apply(this, arguments) || this
                                }
                                return i(e, t), e
                            }(n);
                        t.AuthorizeParam = o, t.Authorize = function(t) {
                            wx.authorize(t)
                        };
                        var r = function() {
                                return function() {}
                            }(),
                            a = function() {
                                return function() {
                                    this.style = new r
                                }
                            }();
                        t.CreateUserInfoButtonParam = a, t.CreateUserInfoButton = function(t) {
                            if (null == wx.createUserInfoButton) return null;
                            var e = wx.createUserInfoButton(t);
                            return new s(e)
                        };
                        (function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            i(e, t)
                        })(e);
                        var s = function() {
                            function t(t) {
                                this.userInfoButton = t
                            }
                            return Object.defineProperty(t.prototype, "type", {
                                get: function() {
                                    return this.userInfoButton.type
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "text", {
                                get: function() {
                                    return this.userInfoButton.text
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "image", {
                                get: function() {
                                    return this.userInfoButton.image
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "style", {
                                get: function() {
                                    return this.userInfoButton.style
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t.prototype.Show = function() {
                                return this.userInfoButton.show()
                            }, t.prototype.Hide = function() {
                                return this.userInfoButton.hide()
                            }, t.prototype.OnTap = function(t) {
                                this.userInfoButton.onTap(t)
                            }, t.prototype.OffTap = function(t) {
                                this.userInfoButton.offTap(t)
                            }, t.prototype.Destroy = function() {
                                this.userInfoButton.destroy()
                            }, t
                        }();
                        t.UserInfoButton = s;
                        (function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            i(e, t)
                        })(e);
                        var c = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return i(e, t), e
                        }(n);
                        t.LoginParam = c, t.Login = function(t) {
                            wx.login(t)
                        };
                        (function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            i(e, t)
                        })(e);
                        var u = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return i(e, t), e
                        }(n);
                        t.GetUserInfoParam = u, t.GetUserInfo = function(t) {
                            wx.getUserInfo(t)
                        };
                        var l = function(t) {
                            function e() {
                                var e = null !== t && t.apply(this, arguments) || this;
                                return e.envVersion = "release", e
                            }
                            return i(e, t), e
                        }(n);
                        t.NavigateToMiniProgramParam = l, t.NavigateToMiniProgram = function(t) {
                            wx.navigateToMiniProgram(t)
                        };
                        var d = function() {
                            return function() {}
                        }();
                        t.BannerAdStyle = d;
                        var h = function() {
                            function t(t) {
                                this.bannerAd = t
                            }
                            return Object.defineProperty(t.prototype, "style", {
                                get: function() {
                                    return this.bannerAd.style
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t.prototype.Show = function() {
                                return this.bannerAd.show()
                            }, t.prototype.Hide = function() {
                                return this.bannerAd.hide()
                            }, t.prototype.OnLoad = function(t) {
                                this.bannerAd.onLoad(t)
                            }, t.prototype.OffLoad = function(t) {
                                this.bannerAd.offLoad(t)
                            }, t.prototype.OnError = function(t) {
                                this.bannerAd.onError(t)
                            }, t.prototype.OffError = function(t) {
                                this.bannerAd.offError(t)
                            }, t.prototype.OnResize = function(t) {
                                this.bannerAd.onResize(t)
                            }, t.prototype.OffResize = function(t) {
                                this.bannerAd.offResize(t)
                            }, t.prototype.Destroy = function() {
                                this.bannerAd.destroy()
                            }, t
                        }();
                        t.BannerAd = h, t.CreateBannerAd = function(t, e, n) {
                            var o = {};
                            o.adUnitId = t, o.style = e, o.adIntervals = n;
                            var i = wx.createBannerAd(o);
                            return new h(i)
                        };
                        var p = function() {
                            function t(t) {
                                this.interstitialAd = t
                            }
                            return t.prototype.Load = function() {
                                return this.interstitialAd.load()
                            }, t.prototype.Show = function() {
                                return this.interstitialAd.show()
                            }, t.prototype.OnLoad = function(t) {
                                this.interstitialAd.onLoad(t)
                            }, t.prototype.OffLoad = function(t) {
                                this.interstitialAd.offLoad(t)
                            }, t.prototype.OnClose = function(t) {
                                this.interstitialAd.onClose(t)
                            }, t.prototype.OffClose = function(t) {
                                this.interstitialAd.offClose(t)
                            }, t.prototype.OnError = function(t) {
                                this.interstitialAd.onError(t)
                            }, t.prototype.OffError = function(t) {
                                this.interstitialAd.offError(t)
                            }, t.prototype.Destroy = function() {
                                this.interstitialAd.destroy()
                            }, t
                        }();
                        t.InterstitialAd = p, t.CreateInterstitialAd = function(t) {
                            var e = {};
                            e.adUnitId = t;
                            var n = wx.createInterstitialAd(e);
                            return new p(n)
                        };
                        var f = function() {
                            function t(t) {
                                this.rewardedVideoAd = t
                            }
                            return t.prototype.Load = function() {
                                return this.rewardedVideoAd.load()
                            }, t.prototype.Show = function() {
                                return this.rewardedVideoAd.show()
                            }, t.prototype.OnLoad = function(t) {
                                this.rewardedVideoAd.onLoad(t)
                            }, t.prototype.OffLoad = function(t) {
                                this.rewardedVideoAd.offLoad(t)
                            }, t.prototype.OnError = function(t) {
                                this.rewardedVideoAd.onError(t)
                            }, t.prototype.OffError = function(t) {
                                this.rewardedVideoAd.offError(t)
                            }, t.prototype.OnClose = function(t) {
                                this.rewardedVideoAd.onClose(t)
                            }, t.prototype.OffClose = function(t) {
                                this.rewardedVideoAd.offClose(t)
                            }, t.prototype.Destroy = function() {
                                this.rewardedVideoAd.destroy()
                            }, t
                        }();
                        t.RewardedVideoAd = f, t.CreateRewardedVideoAd = function(t, e) {
                            var n = {};
                            n.adUnitId = t, n.multiton = e;
                            var o = wx.createRewardedVideoAd(n);
                            return new f(o)
                        }
                    }(t.WX || (t.WX = {})),
                    function(t) {
                        var e = function() {
                            return function() {}
                        }();
                        t.BannerAdStyle = e;
                        var n = function() {
                            function t(t) {
                                this.bannerAd = t
                            }
                            return t.prototype.Show = function() {
                                return this.bannerAd.show()
                            }, t.prototype.Hide = function() {
                                return this.bannerAd.hide()
                            }, t.prototype.OnLoad = function(t) {
                                this.bannerAd.onLoad(t)
                            }, t.prototype.OnError = function(t) {
                                this.bannerAd.onError(t)
                            }, t.prototype.Destroy = function() {
                                this.bannerAd.destroy()
                            }, t
                        }();
                        t.BannerAd = n, t.CreateBannerAd = function(t) {
                            var e = {};
                            e.style = t;
                            var o = uc.createBannerAd(e);
                            return new n(o)
                        };
                        var o = function() {
                            function t(t) {
                                this.rewardedVideoAd = t
                            }
                            return t.prototype.Load = function() {
                                return this.rewardedVideoAd.load()
                            }, t.prototype.Show = function() {
                                return this.rewardedVideoAd.show()
                            }, t.prototype.OnShow = function(t) {
                                this.rewardedVideoAd.onShow(t)
                            }, t.prototype.OnLoad = function(t) {
                                this.rewardedVideoAd.onLoad(t)
                            }, t.prototype.OffLoad = function(t) {
                                this.rewardedVideoAd.offLoad(t)
                            }, t.prototype.OnError = function(t) {
                                this.rewardedVideoAd.onError(t)
                            }, t.prototype.OffError = function(t) {
                                this.rewardedVideoAd.offError(t)
                            }, t.prototype.OnClose = function(t) {
                                this.rewardedVideoAd.onClose(t)
                            }, t.prototype.OffClose = function(t) {
                                this.rewardedVideoAd.offClose(t)
                            }, t
                        }();
                        t.RewardedVideoAd = o, t.CreateRewardVideoAd = function() {
                            var t = uc.createRewardVideoAd();
                            return new o(t)
                        }
                    }(t.UC || (t.UC = {})),
                    function(t) {
                        t.ShowBanner = function() {
                            qttGame.showBanner()
                        }, t.HideBanner = function() {
                            qttGame.hideBanner()
                        };
                        var e = function() {
                                return function() {
                                    this.title = "\u5237\u65b0\u9053\u5177", this.url = "//newidea4-gamecenter-frontend.1sapp.com/game/prod/fkxxl_img/1.png"
                                }
                            }(),
                            n = function() {
                                return function() {
                                    this.gametype = 1, this.rewardtype = 1, this.data = new e
                                }
                            }();
                        t.VideoOptions = n, t.ShowVideo = function(t, e) {
                            void 0 === e && (e = new n), qttGame.showVideo(t, e)
                        }, t.ShowHDAD = function(t) {
                            void 0 === t && (t = new n), qttGame.showHDAD(t)
                        }, t.ShowHDReward = function(t) {
                            void 0 === t && (t = new n), qttGame.showHDReward(t)
                        }
                    }(t.QTTGame || (t.QTTGame = {})),
                    function(t) {
                        t.CanPlayAd = function(t) {
                            h5api.canPlayAd(t)
                        }, t.PlayAd = function(t) {
                            h5api.playAd(t)
                        }
                    }(t._4399 || (t._4399 = {}))
                }(m = t.Extern || (t.Extern = {})),
                function(t) {
                    var e = function() {
                        function t(t, e) {
                            void 0 === e && (e = null);
                            var n = this;
                            this._form = null, this._url = null, this._promise = null, this._resolve = null, this._error = null, this._text = null, this.guid = l.New(), this.logSend = !0, this.logError = !0, this.logText = !1, this._url = t, this._form = e, this._promise = new Promise(function(t) {
                                n._resolve = t
                            })
                        }
                        return Object.defineProperty(t.prototype, "logTag", {
                            get: function() {
                                return "WWW : " + this.guid + " ->"
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "error", {
                            get: function() {
                                return this._error
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t.prototype.LogError = function() {
                            this.logError && null != this.error && console.log(this.logTag, "error -> " + this.error)
                        }, Object.defineProperty(t.prototype, "text", {
                            get: function() {
                                return this._text
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t.prototype.LogText = function() {
                            this.logText && null != this.text && console.log(this.logTag, "text -> " + this.text)
                        }, t.prototype.Send = function(t, e) {
                            var n = this;
                            void 0 === t && (t = null), void 0 === e && (e = null), null == t && (t = "get");
                            var o = this._url,
                                i = null;
                            switch (e) {
                                case "form":
                                    for (var r = Object.keys(this._form), a = 0; a < r.length; a++) {
                                        var s = r[a];
                                        0 == a ? i = s + "=" + this._form[s] : i += "&" + s + "=" + this._form[s]
                                    }
                                    break;
                                case "json":
                                    i = JSON.stringify(this._form)
                            }
                            switch (t) {
                                case "get":
                                    null != i && (o += "?" + i)
                            }
                            switch (this.logSend && console.log(this.logTag, o, "<" + t + ">", i), C.channel) {
                                case f.vivoQG:
                                    var c = new m.VIVO.QG.RequestParam;
                                    c.url = o, c.method = t.toUpperCase(), c.data = i, c.dataType = "json", c.success = function(t) {
                                        n._text = JSON.stringify(t.data), n._resolve(), n.LogText()
                                    }, c.fail = function(t, e) {
                                        n._error = e + " - " + JSON.stringify(t), n._resolve(), n.LogError()
                                    }, m.VIVO.QG.Request(c);
                                    break;
                                default:
                                    var u = new XMLHttpRequest;
                                    switch (u.onreadystatechange = function() {
                                        4 == u.readyState && (200 == u.status ? n._text = u.responseText : n._error = u.status + " - " + u.responseText, n._resolve(), n.LogError(), n.LogText())
                                    }, u.open(t, o, !0), u.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), t) {
                                        case "get":
                                            //u.send();
                                            break;
                                        case "post":
                                            //u.send(i)
                                    }
                            }
                            return this._promise
                        }, t
                    }();
                    t.WWW = e,
                        function(t) {
                            var n = "";

                            function o(o, i) {
                                return r(this, void 0, void 0, function() {
                                    var r;
                                    return a(this, function(a) {
                                        switch (a.label) {
                                            case 0:
                                                return (r = new e(n + o, i)).logText = t.log, r.logSend = t.log, [4, r.Send("post", "json")];
                                            case 1:
                                                return a.sent(), [2]
                                        }
                                    })
                                })
                            }
                            t.log = !0, t.Install = function(t, e, n) {
                                var i = {},
                                    r = {};
                                r.deviceid = e, r.channelid = n, i.appid = t, i.context = r, o("install", i)
                            }, t.Startup = function(t, e, n) {
                                var i = {},
                                    r = {};
                                r.deviceid = e, r.channelid = n, i.appid = t, i.context = r, o("startup", i)
                            }, t.Register = function(t, e, n, i) {
                                var r = {},
                                    a = {};
                                a.deviceid = e, a.channelid = n, r.appid = t, r.context = a, r.who = i, o("register", r)
                            }, t.Loggedin = function(t, e, n, i) {
                                var r = {},
                                    a = {};
                                a.deviceid = e, a.channelid = n, r.appid = t, r.context = a, r.who = i, o("loggedin", r)
                            }, t.Payment = function(t, e, n, i, r, a, s, c, u, l, d) {
                                var h = {},
                                    p = {};
                                p.deviceid = e, p.channelid = n, h.appid = t, h.context = p, h.who = i, p.currencyAmount = r, p.currencytype = a, p.iapamount = s, p.iapname = c, p.paymenttype = u, p.transactionid = l, p.virtualcoinamount = d, o("payment", h)
                            }, t.Economy = function(t, e, n, i, r, a, s) {
                                var c = {},
                                    u = {};
                                u.deviceid = e, u.channelid = n, c.appid = t, c.context = u, c.who = i, u.itemamount = r, u.itemname = a, u.itemtotalprice = s, o("economy", c)
                            }, t.Quest = function(t, e, n, i, r, a, s) {
                                var c = {},
                                    u = {};
                                u.deviceid = e, u.channelid = n, c.appid = t, c.context = u, c.who = i, u.questid = r, u.queststatus = a, u.questtype = s, o("quest", c)
                            }, t.Event = function(t, e, n, i, r) {
                                var a = {},
                                    s = {};
                                s.deviceid = e, s.channelid = n, a.appid = t, a.context = s, a.who = i, a.what = r, o("event", a)
                            }, t.Heartbeat = function(t, e, n, i) {
                                var r = {},
                                    a = {};
                                a.deviceid = e, a.channelid = n, r.appid = t, r.context = a, r.who = i, o("heartbeat", r)
                            }
                        }(t.ReYun || (t.ReYun = {}))
                }(g = t.Web || (t.Web = {})),
                function(e) {
                    e.Url2Args = function(t) {
                            void 0 === t && (t = null), null == t && (t = "" + window.location);
                            var e = t.indexOf("?");
                            e > 0 && (t = t.substring(e));
                            for (var n = {}, o = 0, i = t.split("&"); o < i.length; o++) {
                                var r = i[o].split("=");
                                r.length > 1 && (n[r[0]] = r[1])
                            }
                            return n
                        },
                        function(t) {
                            var e = function() {
                                return function() {
                                    this.log = !0
                                }
                            }();

                            function n() {
                                var t = new e;
                                return t.appid = DP.ReYun.appId, t.channelid = DP.Basic.channel, t.who = C.deviceUniqueIdentifier, t
                            }
                            t.Data = e, t.Install = function(t) {
                                null == t && (t = n()), g.ReYun.log = t.log, g.ReYun.Install(t.appid, C.deviceUniqueIdentifier, t.channelid)
                            }, t.Startup = function(t) {
                                null == t && (t = n()), g.ReYun.log = t.log, g.ReYun.Startup(t.appid, C.deviceUniqueIdentifier, t.channelid)
                            }, t.Register = function(t) {
                                null == t && (t = n()), g.ReYun.log = t.log, g.ReYun.Register(t.appid, C.deviceUniqueIdentifier, t.channelid, t.who)
                            }, t.Loggedin = function(t) {
                                null == t && (t = n()), g.ReYun.log = t.log, g.ReYun.Loggedin(t.appid, C.deviceUniqueIdentifier, t.channelid, t.who)
                            }, t.Payment = function(t, e, o, i, r, a, s, c) {
                                null == t && (t = n()), g.ReYun.log = t.log, g.ReYun.Payment(t.appid, C.deviceUniqueIdentifier, t.channelid, t.who, e, o, i, r, a, s, c)
                            }, t.Economy = function(t, e, o, i) {
                                null == t && (t = n()), g.ReYun.log = t.log, g.ReYun.Economy(t.appid, C.deviceUniqueIdentifier, t.channelid, t.who, e, o, i)
                            }, t.Quest = function(t, e, o, i) {
                                null == t && (t = n()), g.ReYun.log = t.log, g.ReYun.Quest(t.appid, C.deviceUniqueIdentifier, t.channelid, t.who, e, o, i)
                            }, t.Event = function(t, e) {
                                null == t && (t = n()), g.ReYun.log = t.log, g.ReYun.Event(t.appid, C.deviceUniqueIdentifier, t.channelid, t.who, e)
                            }, t.Heartbeat = function(t) {
                                null == t && (t = n()), g.ReYun.log = t.log, g.ReYun.Heartbeat(t.appid, C.deviceUniqueIdentifier, t.channelid, t.who)
                            }
                        }(e.ReYun || (e.ReYun = {})),
                        function(e) {
                            (function(e) {
                                var n = function(t) {
                                    function e() {
                                        return null !== t && t.apply(this, arguments) || this
                                    }
                                    return i(e, t), e.prototype.ReportAdShow = function() {
                                        this.nativeAd.ReportAdShow(this.adId)
                                    }, e.prototype.ReportAdClick = function() {
                                        this.nativeAd.ReportAdClick(this.adId)
                                    }, e
                                }(t.Extern.OPPO.QG.NativeAdData);
                                e.NativeAdData = n;
                                var o, s, c, u = function() {
                                    function e(e) {
                                        var o = this;
                                        this.list = [], this.loadHandle = 0, C.channel == f.oppoQG && (this.nativeAd = t.Extern.OPPO.QG.CreateNativeAd(e), this.nativeAd.OnLoad(function(t) {
                                            for (var e = 0, i = t.adList; e < i.length; e++) {
                                                var r = i[e],
                                                    a = new n;
                                                o.list.push(a), a.nativeAd = o.nativeAd;
                                                for (var s = 0, c = Object.keys(r); s < c.length; s++) {
                                                    var u = c[s];
                                                    a[u] = r[u]
                                                }
                                            }
                                            o.Load(5e3)
                                        }), this.nativeAd.OnError(function(t) {
                                            console.log("OPPO.QG.NativeAd", e, "OnError = " + JSON.stringify(t)), o.Load(5e3)
                                        }), this.Load(0))
                                    }
                                    return e.prototype.Load = function(t) {
                                        var e = this;
                                        clearTimeout(this.loadHandle), this.loadHandle = setTimeout(function() {
                                            e.list.length < 1 && e.nativeAd.Load()
                                        }, t)
                                    }, e.prototype.Peek = function() {
                                        return this.list.length > 0 ? this.list[0] : null
                                    }, e.prototype.Pop = function() {
                                        var t = this.Peek();
                                        return null != t && (this.list.splice(0, 1), this.Load(0)), t
                                    }, e
                                }();
                                e.NativeAd = u, e.Login = function() {
                                    return r(this, void 0, void 0, function() {
                                        var t;
                                        return a(this, function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return null == s && (s = new Promise(function(t) {
                                                        o = t
                                                    }), C.channel == f.oppoQG ? ((t = new m.OPPO.QG.LoginParam).success = function(t) {
                                                        c = t.data.token
                                                    }, t.complete = function(t) {
                                                        console.log("QG.Login", "complete = " + JSON.stringify(t)), o()
                                                    }, m.OPPO.QG.Login(t)) : o()), [4, s];
                                                case 1:
                                                    return e.sent(), [2, {
                                                        token: c
                                                    }]
                                            }
                                        })
                                    })
                                }
                            })(e.QG || (e.QG = {}))
                        }(e.OPPO || (e.OPPO = {})),
                        function(e) {
                            (function(e) {
                                var n = function(t) {
                                    function e() {
                                        return null !== t && t.apply(this, arguments) || this
                                    }
                                    return i(e, t), e.prototype.ReportAdShow = function() {
                                        this.nativeAd.ReportAdShow(this.adId)
                                    }, e.prototype.ReportAdClick = function() {
                                        this.nativeAd.ReportAdClick(this.adId)
                                    }, e
                                }(t.Extern.VIVO.QG.NativeAdData);
                                e.NativeAdData = n;
                                var o = function() {
                                    function e(e) {
                                        var o = this;
                                        this.list = [], this.loadHandle = 0, C.channel == f.vivoQG && (this.nativeAd = t.Extern.VIVO.QG.CreateNativeAd(e), this.nativeAd.OnLoad(function(t) {
                                            for (var e = 0, i = t.adList; e < i.length; e++) {
                                                var r = i[e],
                                                    a = new n;
                                                o.list.push(a), a.nativeAd = o.nativeAd;
                                                for (var s = 0, c = Object.keys(r); s < c.length; s++) {
                                                    var u = c[s];
                                                    a[u] = r[u]
                                                }
                                            }
                                            o.Load(5e3)
                                        }), this.nativeAd.OnError(function(t) {
                                            console.log("VIVO.QG.NativeAd", e, "OnError = " + JSON.stringify(t)), o.Load(5e3)
                                        }), this.Load(5e3))
                                    }
                                    return e.prototype.Load = function(t) {
                                        var e = this;
                                        clearTimeout(this.loadHandle), this.loadHandle = setTimeout(function() {
                                            e.list.length < 1 && e.nativeAd.Load()
                                        }, t)
                                    }, e.prototype.Peek = function() {
                                        return this.list.length > 0 ? this.list[0] : null
                                    }, e.prototype.Pop = function() {
                                        var t = this.Peek();
                                        return null != t && (this.list.splice(0, 1), this.Load(5e3)), t
                                    }, e
                                }();
                                e.NativeAd = o
                            })(e.QG || (e.QG = {}))
                        }(e.VIVO || (e.VIVO = {})),
                        function(e) {
                            var n = function() {
                                return function() {
                                    this.time = Date.now()
                                }
                            }();
                            e.GameRecorderClip = n;
                            var o = function() {
                                function t() {
                                    var t = this;
                                    this.share = !1, this.clips = [], null != this.grm && (this.grm.OnStart(function(e) {
                                        t.clips = [], console.log("TT.GameRecorderVideo OnStart", JSON.stringify(e))
                                    }), this.grm.OnStop(function(e) {
                                        if (console.log("TT.GameRecorderVideo OnStop", JSON.stringify(e)), t.videoPath = e.videoPath, t.clips.length > 0) {
                                            var n = new m.TT.ClipVideoParam;
                                            n.path = t.videoPath, n.success = function(e) {
                                                console.log("TT.ClipVideo success", JSON.stringify(e)), t.videoPath = e.videoPath
                                            }, n.fail = function(t) {
                                                console.log("TT.ClipVideo fail", JSON.stringify(t))
                                            }, n.complete = function(e) {
                                                console.log("TT.ClipVideo complete", JSON.stringify(e)), t.share && t.Share()
                                            }, t.grm.ClipVideo(n)
                                        } else t.share && t.Share()
                                    }))
                                }
                                return Object.defineProperty(t.prototype, "grm", {
                                    get: function() {
                                        return C.channel != f.ttGame ? null : m.TT.GetGameRecorderManager()
                                    },
                                    enumerable: !0,
                                    configurable: !0
                                }), t.prototype.Start = function(t) {
                                    null != this.grm && this.grm.Start(t)
                                }, t.prototype.Stop = function(t) {
                                    void 0 === t && (t = !1), null != this.grm && (this.share = t, this.grm.Stop())
                                }, t.prototype.RecordClip = function(t, e) {
                                    var o = new n;
                                    if (this.clips.push(o), null == this.grm) return o;
                                    var i = new m.TT.RecordClipParam;
                                    return i.timeRange = [t, e], i.success = function(t) {
                                        console.log("TT.RecordClip success", JSON.stringify(t)), o.index = t.index
                                    }, i.fail = function(t) {
                                        console.log("TT.RecordClip fail", JSON.stringify(t))
                                    }, this.grm.RecordClip(i), o
                                }, t.prototype.Share = function() {
                                    if (null != this.grm) {
                                        var t = new m.TT.ShareAppMessageParam;
                                        t.channel = "video", t.extra.videoPath = this.videoPath, t.success = function(t) {
                                            console.log("TT.ShareAppMessage success", JSON.stringify(t))
                                        }, t.fail = function(t) {
                                            console.log("TT.ShareAppMessage fail", JSON.stringify(t))
                                        }, t.complete = function(t) {
                                            console.log("TT.ShareAppMessage complete", JSON.stringify(t))
                                        }, m.TT.ShareAppMessage(t)
                                    }
                                }, t
                            }();
                            e.GameRecorderVideo = o;
                            var i = function() {
                                function e(t, e, n, o) {
                                    this.CreateBtn(t, e, n, o), null != this.btn && this.btn.OnTap(this.OnTap)
                                }
                                return e.prototype.CreateBtn = function(e, n, o, i) {
                                    var r = C.windowSize;
                                    e = e - o / 2 + r.width / 2, n = n - i / 2 + r.height / 2;
                                    var a = new t.Extern.TT.CreateMoreGamesButtonParam;
                                    a.type = "text", a.text = "\u8fd9\u662f\u66f4\u591a\u6e38\u620f", a.image = "", a.style.left = e, a.style.top = n, a.style.width = o, a.style.height = i, a.style.backgroundColor = "#ff0000", a.style.borderColor = "#ff0000", a.style.borderWidth = 1, a.style.borderRadius = 4, a.style.textAlign = "center", a.style.fontSize = 16, a.style.lineHeight = 40, a.style.textColor = "#ffffff";
                                    for (var s = 0, c = DP.TT.promo.ttNavigateToMiniGameAppIdList; s < c.length; s++) {
                                        var u = c[s];
                                        a.appLaunchOptions.push({
                                            appId: u
                                        })
                                    }
                                    this.btn = t.Extern.TT.CreateMoreGamesButton(a)
                                }, e.prototype.OnTap = function(t) {
                                    null != this.onTap && this.onTap(t)
                                }, e.prototype.Show = function() {
                                    null != this.btn && this.btn.Show()
                                }, e.prototype.Hide = function() {
                                    null != this.btn && this.btn.Hide()
                                }, e.prototype.Destroy = function() {
                                    null != this.btn && (this.btn.OffTap(this.OnTap), this.btn.Destroy())
                                }, e
                            }();
                            e.MoreGamesButton = i
                        }(e.TT || (e.TT = {}))
                }(A = t.DevKit || (t.DevKit = {})),
                function(e) {
                    var n, o, s;
                    (function(t) {
                        var e = function() {
                            function t() {}
                            return Object.defineProperty(t, "companyName", {
                                get: function() {
                                    return DP.Basic.companyName
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t, "productName", {
                                get: function() {
                                    return DP.Basic.productName
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t, "packageName", {
                                get: function() {
                                    return DP.Basic.packageName
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t, "versionName", {
                                get: function() {
                                    return DP.Basic.versionName
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t, "versionCode", {
                                get: function() {
                                    return DP.Basic.versionCode
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t, "channel", {
                                get: function() {
                                    return DP.Basic.channel
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t
                        }();
                        t.Api = e
                    })(n = e.APP || (e.APP = {})),
                    function(t) {
                        var e = function() {
                            function t() {}
                            return Object.defineProperty(t, "exist", {
                                get: function() {
                                    return !1
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t
                        }();
                        t.Api = e
                    }(e.IAP || (e.IAP = {})),
                    function(e) {
                        var n, o = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return i(e, t), e.prototype.ADReady = function(t, e) {
                                return !1
                            }, e.prototype.ShowAD = function(t, e) {}, e.prototype.RemoveAD = function(t, e) {}, e
                        }(y.CI);
                        e.IAds = o,
                            function(t) {
                                t[t.banner = 0] = "banner", t[t.normal = 1] = "normal", t[t.reward = 2] = "reward"
                            }(n = e.Grade || (e.Grade = {}));
                        var r = function() {
                            function e() {}
                            return Object.defineProperty(e, "exist", {
                                get: function() {
                                    return y.CM.GetComponentsWithInit(o).length > 0
                                },
                                enumerable: !0,
                                configurable: !0
                            }), e.ReadyAds = function(t, e) {
                                var n = y.CM.GetComponentsWithInit(o);
                                console.log("ads = " + n.length);
                                for (var i = [], r = 0, a = n; r < a.length; r++) {
                                    var s = a[r],
                                        c = s.ADReady(t, e);
                                    console.log(typeof s + " ready = " + c), c && i.push(s)
                                }
                                return i
                            }, e.ShowAds = function(t, e) {
                                var n = this.ReadyAds(t, e);
                                this.QueueShowAd(n, t, e)
                            }, e.QueueShowAd = function(t, e, o) {
                                var i = this;
                                if (t.length > 0) {
                                    var r = t.shift(),
                                        a = e.cbi.Clone();
                                    switch (e.cbi.Add(h.Expose, function() {
                                        console.log(r, "\u66dd\u5149")
                                    }), e.cbi.Set(h.NoAds, function() {
                                        e.cbi = a, i.QueueShowAd(t, e, o)
                                    }), console.log(r, "show ad"), o) {
                                        case n.banner:
                                            null != this.lastBannerIAds && (this.lastBannerIAds == r && (e.refresh = !0), this.lastBannerIAds.RemoveAD(e, n.banner)), this.lastBannerIAds = r
                                    }
                                    r.ShowAD(e, o)
                                } else console.log(n[o] + " no ads"), e.cbi.Run(h.NoAds)
                            }, e.ShowBanner = function(t) {
                                console.log("ADS.ShowBanner"), this.lastBannerShowTime = Date.now(), this.ShowAds(t, n.banner)
                            }, e.RemoveBanner = function(t) {
                                console.log("ADS.RemoveBanner"), null != this.lastBannerIAds && (this.lastBannerIAds.RemoveAD(t, n.banner), this.lastBannerIAds = null)
                            }, e.NormalReady = function(t) {
                                return this.ReadyAds(t, n.normal).length > 0
                            }, e.ShowNormal = function(t) {
                                console.log("ADS.ShowNormal"), this.ShowAds(t, n.normal)
                            }, e.RewardReady = function(t) {
                                return this.ReadyAds(t, n.reward).length > 0
                            }, e.ShowReward = function(e) {
                                var o = this;
                                console.log("ADS.ShowReward");
                                var i = e.cbi.Clone();
                                e.extraAd && e.cbi.Add(h.Close, function() {
                                    o.ShowNormal(new t.ADS.Param)
                                }), e.cbi.Set(h.NoAds, function() {
                                    i.Run(h.NoAds)
                                }), this.ShowAds(e, n.reward)
                            }, e.lastBannerShowTime = 0, e
                        }();
                        e.Api = r
                    }(o = e.ADS || (e.ADS = {})),
                    function(t) {
                        var e = function(t) {
                            function e() {
                                return null !== t && t.apply(this, arguments) || this
                            }
                            return i(e, t), e.prototype.Event = function(t) {}, e
                        }(y.CI);
                        t.IGsa = e;
                        var n = function() {
                            function t() {}
                            return t.Event = function(t) {
                                for (var n = 0, o = y.CM.GetComponentsWithInit(e); n < o.length; n++) {
                                    var i = o[n];
                                    try {
                                        i.Event(t)
                                    } catch (t) {
                                        console.log(JSON.stringify(t))
                                    }
                                }
                            }, t
                        }();
                        t.Api = n
                    }(s = e.GSA || (e.GSA = {})),
                    function(e) {
                        var c, u, l, d, p, v, g, b, w;
                        (function(e) {
                            var n = function(t) {
                                function e() {
                                    return null !== t && t.apply(this, arguments) || this
                                }
                                return i(e, t), e.prototype.OnInit = function() {
                                    y.CM.AddComponent(o).DoInit()
                                }, e
                            }(y.CI);
                            e.Manager = n;
                            var o = function(e) {
                                function n() {
                                    return null !== e && e.apply(this, arguments) || this
                                }
                                return i(n, e), n.prototype.Event = function(e) {
                                    t.Ground.Api.Event(e.id)
                                }, n
                            }(s.IGsa)
                        })(c = e.Ground || (e.Ground = {})),
                        function(t) {
                            var e = function(t) {
                                function e() {
                                    return null !== t && t.apply(this, arguments) || this
                                }
                                return i(e, t), e.prototype.OnInit = function() {
                                    null != DP.ReYun.appId && y.CM.AddComponent(n).DoInit()
                                }, e
                            }(y.CI);
                            t.Manager = e;
                            var n = function(t) {
                                function e() {
                                    return null !== t && t.apply(this, arguments) || this
                                }
                                return i(e, t), e.prototype.OnInit = function() {
                                    A.ReYun.Install(null), A.ReYun.Startup(null), setInterval(function() {
                                        return A.ReYun.Heartbeat(null)
                                    }, 3e5);
                                    for (var t = 0, e = [5, 10, 30, 60, 120], n = 1; n <= 12; n++) e.push(300 * n);
                                    setInterval(function() {
                                        t += 1, e.length > 0 && t >= e[0] && A.ReYun.Event(null, "TimeEvent-" + e.shift())
                                    }, 1e3)
                                }, e.prototype.Event = function(t) {
                                    A.ReYun.Event(null, t.id)
                                }, e
                            }(s.IGsa)
                        }(u = e.ReYun || (e.ReYun = {})),
                        function(e) {
                            (function(e) {
                                var n = function(t) {
                                    function e() {
                                        return null !== t && t.apply(this, arguments) || this
                                    }
                                    return i(e, t), e.prototype.OnInit = function() {
                                        var t = new m.OPPO.QG.InitAdServiceParam;
                                        t.appId = DP.OPPO.QG.appId, t.success = function(t) {
                                            0 == t.code && y.CM.AddComponent(r).DoInit()
                                        }, t.complete = function(t) {
                                            console.log("QG.InitAdService", JSON.stringify(t))
                                        }, m.OPPO.QG.InitAdService(t)
                                    }, e
                                }(y.CI);
                                e.Manager = n;
                                var r = function(n) {
                                        function r() {
                                            var t = null !== n && n.apply(this, arguments) || this;
                                            return t.insertType = 0, t
                                        }
                                        return i(r, n), r.prototype.OnInit = function() {
                                            null != DP.OPPO.QG.bannerId && (this.banner = new a, this.banner.Init(DP.OPPO.QG.bannerId)), null != DP.OPPO.QG.insertId && (this.insert = new s, this.insert.Init(DP.OPPO.QG.insertId)), null != DP.OPPO.QG.videoId && (this.video = new c, this.video.Init(DP.OPPO.QG.videoId)), null != DP.OPPO.QG.nativeCustomInsert && (this.customInsert = new e.CustomInsert, this.customInsert.Init(DP.OPPO.QG.nativeCustomInsert))
                                        }, r.prototype.ADReady = function(t, e) {
                                            switch (e) {
                                                case o.Grade.banner:
                                                    return null != this.banner;
                                                case o.Grade.normal:
                                                    return null != this.customInsert && this.customInsert.Ready() ? (this.insertType = 2, !0) : !(null == this.insert || !this.insert.Ready()) && (this.insertType = 1, !0);
                                                case o.Grade.reward:
                                                    return !(null == this.video || !this.video.Ready())
                                            }
                                            return !1
                                        }, r.prototype.ShowAD = function(e, n) {
                                            switch (n) {
                                                case o.Grade.banner:
                                                    this.banner.Show(e), null != e.cbi && e.cbi.Run(h.Expose);
                                                    break;
                                                case o.Grade.normal:
                                                    switch (this.banner.Remove(new t.ADS.Param), this.insertType) {
                                                        case 1:
                                                            this.insert.Show(e);
                                                            break;
                                                        case 2:
                                                            this.customInsert.Show(e)
                                                    }
                                                    break;
                                                case o.Grade.reward:
                                                    e.cbi.Add(h.Complete, function() {
                                                        e.cbi.Run(h.Reward)
                                                    }), this.video.Show(e)
                                            }
                                        }, r.prototype.RemoveAD = function(t, e) {
                                            switch (e) {
                                                case o.Grade.banner:
                                                    this.banner.Remove(t)
                                            }
                                        }, r
                                    }(o.IAds),
                                    a = function() {
                                        function t() {}
                                        return Object.defineProperty(t, "recordCount", {
                                            get: function() {
                                                return u(this.recordKey).count
                                            },
                                            set: function(t) {
                                                var e = u(this.recordKey);
                                                e.count = t, l(this.recordKey, e)
                                            },
                                            enumerable: !0,
                                            configurable: !0
                                        }), t.prototype.Init = function() {
                                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                            this.posId = t[0]
                                        }, t.prototype.Show = function(e) {
                                            e.refresh && t.showing || (console.log("Banner.recordCount = " + t.recordCount), t.recordCount >= 5 || (this.Remove(e), this.bannerAd = m.OPPO.QG.CreateBannerAd(this.posId), this.bannerAd.OnShow(this.OnShow), this.bannerAd.OnHide(this.OnHide), this.bannerAd.OnError(this.OnError), this.bannerAd.Show()))
                                        }, t.prototype.Remove = function(e) {
                                            e.refresh || null != this.bannerAd && (this.bannerAd.OffShow(this.OnShow), this.bannerAd.OffHide(this.OnHide), this.bannerAd.OffError(this.OnError), this.bannerAd.Destroy(), this.bannerAd = null, t.showing = !1)
                                        }, t.prototype.OnShow = function(e) {
                                            console.log("QG.Banner.OnShow", JSON.stringify(e)), t.showing = !0
                                        }, t.prototype.OnHide = function(e) {
                                            console.log("QG.Banner.OnHide", JSON.stringify(e)), t.showing = !1, t.recordCount++
                                        }, t.prototype.OnError = function(t) {
                                            console.log("QG.Banner.OnError", JSON.stringify(t))
                                        }, t.recordKey = "OPPO.QG.Banner.Record", t.showing = !1, t
                                    }(),
                                    s = function() {
                                        function t() {
                                            this.loaded = !1, this.loadHandle = 0
                                        }
                                        return Object.defineProperty(t, "recordCount", {
                                            get: function() {
                                                return u(this.recordKey).count
                                            },
                                            set: function(t) {
                                                var e = u(this.recordKey);
                                                e.count = t, l(this.recordKey, e)
                                            },
                                            enumerable: !0,
                                            configurable: !0
                                        }), t.prototype.Init = function() {
                                            for (var e = this, n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
                                            this.posId = n[0], this.insertAd = m.OPPO.QG.CreateInsertAd(this.posId), this.insertAd.OnLoad(function(t) {
                                                console.log("QG.Insert.OnLoad", JSON.stringify(t)), e.loaded = !0
                                            }), this.insertAd.OnShow(function(n) {
                                                console.log("QG.Insert.OnShow", JSON.stringify(n)), e.loaded = !1, t.recordCount++, t.recordCount < 8 && e.Load(6e4), e.param.cbi.Run(h.Expose)
                                            }), this.insertAd.OnError(function(t) {
                                                console.log("QG.Insert.OnError", JSON.stringify(t)), e.Load(5e3)
                                            }), this.Load(1e3)
                                        }, t.prototype.Load = function(t) {
                                            var e = this;
                                            clearTimeout(this.loadHandle), this.loadHandle = setTimeout(function() {
                                                e.insertAd.Load()
                                            }, t)
                                        }, t.prototype.Ready = function() {
                                            return this.loaded
                                        }, t.prototype.Show = function(t) {
                                            this.param = t, this.insertAd.Show()
                                        }, t.recordKey = "OPPO.QG.Insert.Record", t
                                    }(),
                                    c = function() {
                                        function t() {
                                            this.loaded = !1, this.loadHandle = 0
                                        }
                                        return t.prototype.Init = function() {
                                            for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                            this.posId = e[0], this.videoAd = m.OPPO.QG.CreateRewardedVideoAd(this.posId), this.videoAd.OnLoad(function(e) {
                                                console.log("QG.Video.OnLoad", JSON.stringify(e)), t.loaded = !0
                                            }), this.videoAd.OnVideoStart(function(e) {
                                                console.log("QG.Video.OnVideoStart", JSON.stringify(e)), t.loaded = !1, t.param.cbi.Run(h.Expose)
                                            }), this.videoAd.OnError(function(e) {
                                                console.log("QG.Video.OnError", JSON.stringify(e)), t.Load(5e3)
                                            }), this.videoAd.OnRewarded(function(e) {
                                                console.log("QG.Video.OnRewarded", JSON.stringify(e)), t.param.cbi.Run(h.Complete)
                                            }), this.videoAd.OnClose(function(e) {
                                                console.log("QG.Video.OnClose", JSON.stringify(e)), t.Load(1e3), t.param.cbi.Run(h.Close)
                                            }), this.Load(1e3)
                                        }, t.prototype.Load = function(t) {
                                            var e = this;
                                            clearTimeout(this.loadHandle), this.loadHandle = setTimeout(function() {
                                                e.videoAd.Load()
                                            }, t)
                                        }, t.prototype.Ready = function() {
                                            return this.loaded
                                        }, t.prototype.Show = function(t) {
                                            this.param = t, this.videoAd.Show()
                                        }, t
                                    }();

                                function u(e) {
                                    var n = t.PlayerPrefs.Get(e),
                                        o = new Date,
                                        i = 1e4 * o.getFullYear() + 100 * (o.getMonth() + 1) + o.getDate();
                                    return (null == n || n.date < i) && (n = {
                                        count: 0,
                                        date: i
                                    }), n
                                }

                                function l(e, n) {
                                    t.PlayerPrefs.Set(e, n)
                                }
                            })(e.QG || (e.QG = {}))
                        }(l = e.OPPO || (e.OPPO = {})),
                        function(t) {
                            (function(t) {
                                var e = function(t) {
                                    function e() {
                                        return null !== t && t.apply(this, arguments) || this
                                    }
                                    return i(e, t), e.prototype.OnInit = function() {
                                        y.CM.AddComponent(n).DoInit()
                                    }, e
                                }(y.CI);
                                t.Manager = e;
                                var n = function(t) {
                                        function e() {
                                            return null !== t && t.apply(this, arguments) || this
                                        }
                                        return i(e, t), e.prototype.OnInit = function() {
                                            null != DP.VIVO.QG.bannerId && (this.banner = new r, this.banner.Init(DP.VIVO.QG.bannerId)), null != DP.VIVO.QG.insertId && (this.insert = new a, this.insert.Init(DP.VIVO.QG.insertId)), null != DP.VIVO.QG.videoId && (this.video = new s, this.video.Init(DP.VIVO.QG.videoId))
                                        }, e.prototype.ADReady = function(t, e) {
                                            switch (e) {
                                                case o.Grade.banner:
                                                    return null != this.banner;
                                                case o.Grade.normal:
                                                    return !(null == this.insert || !this.insert.Ready());
                                                case o.Grade.reward:
                                                    return !(null == this.video || !this.video.Ready())
                                            }
                                            return !1
                                        }, e.prototype.ShowAD = function(t, e) {
                                            switch (e) {
                                                case o.Grade.banner:
                                                    this.banner.Show(t), null != t.cbi && t.cbi.Run(h.Expose);
                                                    break;
                                                case o.Grade.normal:
                                                    this.insert.Show(t);
                                                    break;
                                                case o.Grade.reward:
                                                    t.cbi.Add(h.Complete, function() {
                                                        t.cbi.Run(h.Reward)
                                                    }), this.video.Show(t)
                                            }
                                        }, e.prototype.RemoveAD = function(t, e) {
                                            switch (e) {
                                                case o.Grade.banner:
                                                    this.banner.Remove()
                                            }
                                        }, e
                                    }(o.IAds),
                                    r = function() {
                                        function t() {}
                                        return t.prototype.Init = function() {
                                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                            this.posId = t[0]
                                        }, t.prototype.Show = function(t) {
                                            var e = this;
                                            this.bannerAd = m.VIVO.QG.CreateBannerAd(this.posId), this.bannerAd.OnLoad(function(t) {
                                                console.log("QG.Banner.OnLoad", JSON.stringify(t)), e.bannerAd.Show()
                                            }), this.bannerAd.OnSize(function(t) {
                                                console.log("QG.Banner.OnSize", JSON.stringify(t))
                                            }), this.bannerAd.OnClose(function(t) {
                                                console.log("QG.Banner.OnClose", JSON.stringify(t))
                                            }), this.bannerAd.OnError(function(t) {
                                                console.log("QG.Banner.OnError", JSON.stringify(t))
                                            })
                                        }, t.prototype.Remove = function() {
                                            this.bannerAd.Hide()
                                        }, t
                                    }(),
                                    a = function() {
                                        function t() {
                                            this.loaded = !1, this.loadHandle = 0
                                        }
                                        return t.prototype.Init = function() {
                                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                            this.posId = t[0], this.Load(1e3)
                                        }, t.prototype.Load = function(t) {
                                            var e = this;
                                            clearTimeout(this.loadHandle), this.loadHandle = setTimeout(function() {
                                                e.insertAd = m.VIVO.QG.CreateInterstitialAd(e.posId), e.insertAd.OnLoad(function(t) {
                                                    console.log("QG.Insert.OnLoad", JSON.stringify(t)), e.loaded = !0
                                                }), e.insertAd.OnClose(function(t) {
                                                    console.log("QG.Insert.OnClose", JSON.stringify(t)), e.loaded = !1, e.Load(1e3), e.param.cbi.Run(h.Expose)
                                                }), e.insertAd.OnError(function(t) {
                                                    console.log("QG.Insert.OnError", JSON.stringify(t)), e.Load(5e3)
                                                })
                                            }, t)
                                        }, t.prototype.Ready = function() {
                                            return this.loaded
                                        }, t.prototype.Show = function(t) {
                                            this.param = t, this.insertAd.Show()
                                        }, t
                                    }(),
                                    s = function() {
                                        function t() {
                                            this.loaded = !1, this.loadHandle = 0
                                        }
                                        return t.prototype.Init = function() {
                                            for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                            this.posId = e[0], this.videoAd = m.VIVO.QG.CreateRewardedVideoAd(this.posId), this.videoAd.OnLoad(function(e) {
                                                console.log("QG.Video.OnLoad", JSON.stringify(e)), t.loaded = !0
                                            }), this.videoAd.OnClose(function(e) {
                                                console.log("QG.Video.OnClose", JSON.stringify(e)), t.loaded = !1, t.Load(6e4), e.isEnded && t.param.cbi.Run(h.Complete), t.param.cbi.Run(h.Close)
                                            }), this.videoAd.OnError(function(e) {
                                                console.log("QG.Video.OnError", JSON.stringify(e)), t.Load(6e4)
                                            })
                                        }, t.prototype.Load = function(t) {
                                            var e = this;
                                            clearTimeout(this.loadHandle), this.loadHandle = setTimeout(function() {
                                                e.videoAd.Load()
                                            }, t)
                                        }, t.prototype.Ready = function() {
                                            return this.loaded
                                        }, t.prototype.Show = function(t) {
                                            this.param = t, this.videoAd.Show()
                                        }, t
                                    }()
                            })(t.QG || (t.QG = {}))
                        }(d = e.VIVO || (e.VIVO = {})),
                        function(t) {
                            var e = function(t) {
                                function e() {
                                    return null !== t && t.apply(this, arguments) || this
                                }
                                return i(e, t), e.prototype.OnInit = function() {
                                    y.CM.AddComponent(n).DoInit(), y.CM.AddComponent(r).DoInit()
                                }, e
                            }(y.CI);
                            t.Manager = e;
                            var n = function(t) {
                                    function e() {
                                        return null !== t && t.apply(this, arguments) || this
                                    }
                                    return i(e, t), e.prototype.OnInit = function() {}, e.prototype.Event = function(t) {
                                        m.TT.ReportAnalytics(t.id, t.dic)
                                    }, e
                                }(s.IGsa),
                                r = function(t) {
                                    function e() {
                                        return null !== t && t.apply(this, arguments) || this
                                    }
                                    return i(e, t), e.prototype.OnInit = function() {
                                        null != DP.TT.bannerId && (this.banner = new a, this.banner.Init(DP.TT.bannerId)), null != DP.TT.videoId && (this.video = new c, this.video.Init(DP.TT.videoId))
                                    }, e.prototype.ADReady = function(t, e) {
                                        switch (e) {
                                            case o.Grade.banner:
                                                return null != this.banner;
                                            case o.Grade.normal:
                                                return !1;
                                            case o.Grade.reward:
                                                return !(null == this.video || !this.video.Ready())
                                        }
                                        return !1
                                    }, e.prototype.ShowAD = function(t, e) {
                                        switch (e) {
                                            case o.Grade.banner:
                                                this.banner.Show(t), null != t.cbi && t.cbi.Run(h.Expose);
                                                break;
                                            case o.Grade.normal:
                                                break;
                                            case o.Grade.reward:
                                                t.cbi.Add(h.Complete, function() {
                                                    t.cbi.Run(h.Reward)
                                                }), this.video.Show(t)
                                        }
                                    }, e.prototype.RemoveAD = function(t, e) {
                                        switch (e) {
                                            case o.Grade.banner:
                                                this.banner.Remove()
                                        }
                                    }, e
                                }(o.IAds),
                                a = function() {
                                    function t() {}
                                    return t.prototype.Init = function() {
                                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                        this.posId = t[0]
                                    }, t.prototype.Show = function(t) {
                                        var e = this,
                                            n = C.windowSize,
                                            o = new m.TT.BannerAdStyle;
                                        o.width = n.width, o.height = .25 * o.width, o.left = (n.width - o.width) / 2, (32 & t.place) > 0 ? o.top = 0 : o.top = n.height - o.height, this.bannerAd = m.TT.CreateBannerAd(this.posId, o), this.bannerAd.OnLoad(function(t) {
                                            console.log("TT.Banner.OnLoad", JSON.stringify(t)), e.bannerAd.Show()
                                        }), this.bannerAd.OnResize(function(i) {
                                            console.log("TT.Banner.OnResize", JSON.stringify(i)), i.width > 0 && i.height > 0 && (o.width = i.width, o.height = i.height, o.left = (n.width - o.width) / 2, (32 & t.place) > 0 ? o.top = 0 : o.top = n.height - o.height, e.bannerAd.style.left != o.left && (e.bannerAd.style.left = o.left), e.bannerAd.style.top != o.top && (e.bannerAd.style.top = o.top))
                                        }), this.bannerAd.OnError(function(t) {
                                            console.log("TT.Banner.OnError", JSON.stringify(t))
                                        })
                                    }, t.prototype.Remove = function() {
                                        this.bannerAd.Destroy()
                                    }, t
                                }(),
                                c = function() {
                                    function t() {
                                        this.loaded = !1, this.loadHandle = 0
                                    }
                                    return t.prototype.Init = function() {
                                        for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                        this.posId = e[0], this.videoAd = m.TT.CreateRewardedVideoAd(this.posId), null != this.videoAd && (this.videoAd.OnLoad(function(e) {
                                            console.log("TT.Video.OnLoad", JSON.stringify(e)), t.loaded = !0
                                        }), this.videoAd.OnClose(function(e) {
                                            console.log("TT.Video.OnClose", JSON.stringify(e)), t.Load(1e3), e.isEnded && t.param.cbi.Run(h.Complete), t.param.cbi.Run(h.Close)
                                        }), this.videoAd.OnError(function(e) {
                                            console.log("TT.Video.OnError", JSON.stringify(e)), t.Load(5e3)
                                        }))
                                    }, t.prototype.Load = function(t) {
                                        var e = this;
                                        clearTimeout(this.loadHandle), this.loadHandle = setTimeout(function() {
                                            e.videoAd.Load()
                                        }, t)
                                    }, t.prototype.Ready = function() {
                                        return this.loaded
                                    }, t.prototype.Show = function(t) {
                                        this.param = t, this.videoAd.Show()
                                    }, t
                                }()
                        }(p = e.TT || (e.TT = {})),
                        function(t) {
                            var e = function(t) {
                                function e() {
                                    return null !== t && t.apply(this, arguments) || this
                                }
                                return i(e, t), e.prototype.OnInit = function() {
                                    y.CM.AddComponent(n).DoInit()
                                }, e
                            }(y.CI);
                            t.Manager = e;
                            var n = function(t) {
                                    function e() {
                                        return null !== t && t.apply(this, arguments) || this
                                    }
                                    return i(e, t), e.prototype.OnInit = function() {
                                        null != DP.QQ.bannerId && (this.banner = new s, this.banner.Init(DP.QQ.bannerId)), null != DP.QQ.videoId && (this.video = new c, this.video.Init(DP.QQ.videoId))
                                    }, e.prototype.ADReady = function(t, e) {
                                        switch (e) {
                                            case o.Grade.banner:
                                                return null != this.banner;
                                            case o.Grade.normal:
                                                return !1;
                                            case o.Grade.reward:
                                                return !(null == this.video || !this.video.Ready())
                                        }
                                        return !1
                                    }, e.prototype.ShowAD = function(t, e) {
                                        switch (e) {
                                            case o.Grade.banner:
                                                this.banner.Show(t), null != t.cbi && t.cbi.Run(h.Expose);
                                                break;
                                            case o.Grade.normal:
                                                break;
                                            case o.Grade.reward:
                                                t.cbi.Add(h.Complete, function() {
                                                    t.cbi.Run(h.Reward)
                                                }), this.video.Show(t)
                                        }
                                    }, e.prototype.RemoveAD = function(t, e) {
                                        switch (e) {
                                            case o.Grade.banner:
                                                this.banner.Remove()
                                        }
                                    }, e
                                }(o.IAds),
                                s = function() {
                                    function t() {}
                                    return t.prototype.Init = function() {
                                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                        this.posId = t[0]
                                    }, t.prototype.Show = function(t) {
                                        return r(this, void 0, void 0, function() {
                                            var e, n, o = this;
                                            return a(this, function(i) {
                                                return e = C.windowSize, (n = new m.QQ.BannerAdStyle).width = e.width, n.height = .25 * n.width, n.left = (e.width - n.width) / 2, (32 & t.place) > 0 ? n.top = 0 : n.top = e.height - n.height, this.bannerAd = m.QQ.CreateBannerAd(this.posId, n), this.bannerAd.OnLoad(function(t) {
                                                    console.log("QQ.Banner.OnLoad", JSON.stringify(t)), o.bannerAd.Show()
                                                }), this.bannerAd.OnResize(function(i) {
                                                    console.log("QQ.Banner.OnResize", JSON.stringify(i)), i.width > 0 && i.height > 0 && (n.width = i.width, n.height = i.height, n.left = (e.width - n.width) / 2, (32 & t.place) > 0 ? n.top = 0 : n.top = e.height - n.height, o.bannerAd.style.left != n.left && (o.bannerAd.style.left = n.left), o.bannerAd.style.top != n.top && (o.bannerAd.style.top = n.top))
                                                }), this.bannerAd.OnError(function(t) {
                                                    console.log("QQ.Banner.OnError", JSON.stringify(t))
                                                }), [2]
                                            })
                                        })
                                    }, t.prototype.Remove = function() {
                                        this.bannerAd.Destroy()
                                    }, t
                                }(),
                                c = function() {
                                    function t() {
                                        this.loaded = !1, this.loadHandle = 0
                                    }
                                    return t.prototype.Init = function() {
                                        for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                        this.posId = e[0], this.videoAd = m.QQ.CreateRewardedVideoAd(this.posId), this.videoAd.OnLoad(function(e) {
                                            console.log("QQ.Video.OnLoad", JSON.stringify(e)), t.loaded = !0
                                        }), this.videoAd.OnClose(function(e) {
                                            console.log("QQ.Video.OnClose", JSON.stringify(e)), t.Load(1e3), e.isEnded && t.param.cbi.Run(h.Complete), t.param.cbi.Run(h.Close)
                                        }), this.videoAd.OnError(function(e) {
                                            console.log("QQ.Video.OnError", JSON.stringify(e)), t.Load(5e3)
                                        })
                                    }, t.prototype.Load = function(t) {
                                        var e = this;
                                        clearTimeout(this.loadHandle), this.loadHandle = setTimeout(function() {
                                            e.videoAd.Load()
                                        }, t)
                                    }, t.prototype.Ready = function() {
                                        return this.loaded
                                    }, t.prototype.Show = function(t) {
                                        this.param = t, this.videoAd.Show()
                                    }, t
                                }()
                        }(v = e.QQ || (e.QQ = {})),
                        function(t) {
                            var e = function(t) {
                                function e() {
                                    return null !== t && t.apply(this, arguments) || this
                                }
                                return i(e, t), e.prototype.OnInit = function() {
                                    y.CM.AddComponent(n).DoInit()
                                }, e
                            }(y.CI);
                            t.Manager = e;
                            var n = function(t) {
                                    function e() {
                                        return null !== t && t.apply(this, arguments) || this
                                    }
                                    return i(e, t), e.prototype.OnInit = function() {
                                        null != DP.WX.bannerId && (this.banner = new r, this.banner.Init(DP.WX.bannerId)), null != DP.WX.insertId && (this.insert = new a, this.insert.Init(DP.WX.insertId)), null != DP.WX.videoId && (this.video = new s, this.video.Init(DP.WX.videoId))
                                    }, e.prototype.ADReady = function(t, e) {
                                        switch (e) {
                                            case o.Grade.banner:
                                                return null != this.banner;
                                            case o.Grade.normal:
                                                return !(null == this.insert || !this.insert.Ready());
                                            case o.Grade.reward:
                                                return !(null == this.video || !this.video.Ready())
                                        }
                                        return !1
                                    }, e.prototype.ShowAD = function(t, e) {
                                        switch (e) {
                                            case o.Grade.banner:
                                                this.banner.Show(t), null != t.cbi && t.cbi.Run(h.Expose);
                                                break;
                                            case o.Grade.normal:
                                                this.insert.Show(t);
                                                break;
                                            case o.Grade.reward:
                                                t.cbi.Add(h.Complete, function() {
                                                    t.cbi.Run(h.Reward)
                                                }), this.video.Show(t)
                                        }
                                    }, e.prototype.RemoveAD = function(t, e) {
                                        switch (e) {
                                            case o.Grade.banner:
                                                this.banner.Remove()
                                        }
                                    }, e
                                }(o.IAds),
                                r = function() {
                                    function t() {}
                                    return t.prototype.Init = function() {
                                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                        this.posId = t[0]
                                    }, t.prototype.Show = function(t) {
                                        var e = this,
                                            n = C.windowSize,
                                            o = new m.WX.BannerAdStyle;
                                        o.width = n.width, o.height = .3 * o.width, o.left = (n.width - o.width) / 2, (32 & t.place) > 0 ? o.top = 0 : o.top = n.height - o.height, this.bannerAd = m.WX.CreateBannerAd(this.posId, o, 30), this.bannerAd.OnLoad(function(t) {
                                            console.log("WX.Banner.OnLoad", JSON.stringify(t)), e.bannerAd.Show()
                                        }), this.bannerAd.OnResize(function(i) {
                                            console.log("WX.Banner.OnResize", JSON.stringify(i)), i.width > 0 && i.height > 0 && (o.width = i.width, o.height = i.height, o.left = (n.width - o.width) / 2, (32 & t.place) > 0 ? o.top = 0 : o.top = n.height - o.height, e.bannerAd.style.left != o.left && (e.bannerAd.style.left = o.left), e.bannerAd.style.top != o.top && (e.bannerAd.style.top = o.top))
                                        }), this.bannerAd.OnError(function(t) {
                                            console.log("WX.Banner.OnError", JSON.stringify(t))
                                        })
                                    }, t.prototype.Remove = function() {
                                        this.bannerAd.Destroy()
                                    }, t
                                }(),
                                a = function() {
                                    function t() {
                                        this.loaded = !1, this.loadHandle = 0
                                    }
                                    return t.prototype.Init = function() {
                                        for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                        this.posId = e[0], this.insertAd = m.WX.CreateInterstitialAd(this.posId), this.insertAd.OnLoad(function(e) {
                                            console.log("WX.Insert.OnLoad", JSON.stringify(e)), t.loaded = !0
                                        }), this.insertAd.OnClose(function(e) {
                                            console.log("WX.Insert.OnShow", JSON.stringify(e)), t.loaded = !1, t.Load(1e3), t.param.cbi.Run(h.Expose)
                                        }), this.insertAd.OnError(function(e) {
                                            console.log("WX.Insert.OnError", JSON.stringify(e)), t.Load(5e3)
                                        }), this.Load(1e3)
                                    }, t.prototype.Load = function(t) {
                                        var e = this;
                                        clearTimeout(this.loadHandle), this.loadHandle = setTimeout(function() {
                                            e.insertAd.Load()
                                        }, t)
                                    }, t.prototype.Ready = function() {
                                        return this.loaded
                                    }, t.prototype.Show = function(t) {
                                        this.param = t, this.insertAd.Show()
                                    }, t
                                }(),
                                s = function() {
                                    function t() {
                                        this.loaded = !1, this.loadHandle = 0
                                    }
                                    return t.prototype.Init = function() {
                                        for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                        this.posId = e[0], this.videoAd = m.WX.CreateRewardedVideoAd(this.posId), this.videoAd.OnLoad(function(e) {
                                            console.log("WX.Video.OnLoad", JSON.stringify(e)), t.loaded = !0
                                        }), this.videoAd.OnError(function(e) {
                                            console.log("WX.Video.OnError", JSON.stringify(e)), t.Load(5e3)
                                        }), this.videoAd.OnClose(function(e) {
                                            console.log("WX.Video.OnClose", JSON.stringify(e)), t.loaded = !1, t.Load(1e3), e.isEnded && t.param.cbi.Run(h.Complete), t.param.cbi.Run(h.Close)
                                        }), this.Load(1e3)
                                    }, t.prototype.Load = function(t) {
                                        var e = this;
                                        clearTimeout(this.loadHandle), this.loadHandle = setTimeout(function() {
                                            e.videoAd.Load()
                                        }, t)
                                    }, t.prototype.Ready = function() {
                                        return this.loaded
                                    }, t.prototype.Show = function(t) {
                                        this.param = t, this.videoAd.Show()
                                    }, t
                                }()
                        }(g = e.WX || (e.WX = {})),
                        function(t) {
                            var e = function(t) {
                                function e() {
                                    return null !== t && t.apply(this, arguments) || this
                                }
                                return i(e, t), e.prototype.OnInit = function() {
                                    setTimeout(function() {
                                        y.CM.AddComponent(n).DoInit()
                                    }, 1e3)
                                }, e
                            }(y.CI);
                            t.Manager = e;
                            var n = function(t) {
                                    function e() {
                                        return null !== t && t.apply(this, arguments) || this
                                    }
                                    return i(e, t), e.prototype.OnInit = function() {
                                        this.banner = new s, this.banner.Init(), this.video = new c, this.video.Init()
                                    }, e.prototype.ADReady = function(t, e) {
                                        switch (e) {
                                            case o.Grade.banner:
                                                return null != this.banner;
                                            case o.Grade.normal:
                                                return !1;
                                            case o.Grade.reward:
                                                return !(null == this.video || !this.video.Ready())
                                        }
                                        return !1
                                    }, e.prototype.ShowAD = function(t, e) {
                                        switch (e) {
                                            case o.Grade.banner:
                                                this.banner.Show(t), null != t.cbi && t.cbi.Run(h.Expose);
                                                break;
                                            case o.Grade.normal:
                                                break;
                                            case o.Grade.reward:
                                                t.cbi.Add(h.Complete, function() {
                                                    t.cbi.Run(h.Reward)
                                                }), this.video.Show(t)
                                        }
                                    }, e.prototype.RemoveAD = function(t, e) {
                                        switch (e) {
                                            case o.Grade.banner:
                                                this.banner.Remove()
                                        }
                                    }, e
                                }(o.IAds),
                                s = function() {
                                    function t() {}
                                    return t.prototype.Init = function() {
                                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
                                    }, t.prototype.Show = function(t) {
                                        return r(this, void 0, void 0, function() {
                                            var e, n, o = this;
                                            return a(this, function(i) {
                                                return this.param = t, e = C.windowSize, (n = new m.UC.BannerAdStyle).width = e.width, n.left = 0, n.right = 0, n.top = 0, n.bottom = 0, null != this.param && (32 & this.param.place) > 0 ? n.gravity = 1 : n.gravity = 7, this.bannerAd = m.UC.CreateBannerAd(n), this.bannerAd.OnLoad(function(t) {
                                                    console.log("UC.Banner.OnLoad", JSON.stringify(t)), o.bannerAd.Show()
                                                }), this.bannerAd.OnError(function(t) {
                                                    console.log("UC.Banner.OnError", JSON.stringify(t))
                                                }), [2]
                                            })
                                        })
                                    }, t.prototype.Remove = function() {
                                        this.bannerAd.Hide()
                                    }, t
                                }(),
                                c = function() {
                                    function t() {
                                        this.loaded = !1, this.loadHandle = 0
                                    }
                                    return t.prototype.Init = function() {
                                        for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                        this.videoAd = m.UC.CreateRewardVideoAd(), this.videoAd.OnLoad(function(e) {
                                            console.log("UC.Video.OnLoad", JSON.stringify(e)), t.loaded = !0
                                        }), this.videoAd.OnClose(function(e) {
                                            console.log("UC.Video.OnClose", JSON.stringify(e)), t.loaded = !1, t.Load(1e3), e.isEnded && t.param.cbi.Run(h.Complete), t.param.cbi.Run(h.Close)
                                        }), this.videoAd.OnError(function(e) {
                                            console.log("UC.Video.OnError", JSON.stringify(e)), t.Load(5e3)
                                        })
                                    }, t.prototype.Load = function(t) {
                                        var e = this;
                                        clearTimeout(this.loadHandle), this.loadHandle = setTimeout(function() {
                                            e.videoAd.Load()
                                        }, t)
                                    }, t.prototype.Ready = function() {
                                        return this.loaded
                                    }, t.prototype.Show = function(t) {
                                        this.param = t, this.videoAd.Show()
                                    }, t
                                }()
                        }(b = e.UC || (e.UC = {})),
                        function(t) {
                            var e = function(t) {
                                function e() {
                                    return null !== t && t.apply(this, arguments) || this
                                }
                                return i(e, t), e.prototype.OnInit = function() {
                                    y.CM.AddComponent(n).DoInit()
                                }, e
                            }(y.CI);
                            t.Manager = e;
                            var n = function(t) {
                                    function e() {
                                        return null !== t && t.apply(this, arguments) || this
                                    }
                                    return i(e, t), e.prototype.OnInit = function() {
                                        this.banner = new r, this.insert = new a, this.video = new s
                                    }, e.prototype.ADReady = function(t, e) {
                                        switch (e) {
                                            case o.Grade.banner:
                                                return null != this.banner;
                                            case o.Grade.normal:
                                                return !(null == this.insert || !this.insert.Ready());
                                            case o.Grade.reward:
                                                return !(null == this.video || !this.video.Ready())
                                        }
                                        return !1
                                    }, e.prototype.ShowAD = function(t, e) {
                                        switch (e) {
                                            case o.Grade.banner:
                                                this.banner.Show(t), null != t.cbi && t.cbi.Run(h.Expose);
                                                break;
                                            case o.Grade.normal:
                                                this.insert.Show(t);
                                                break;
                                            case o.Grade.reward:
                                                t.cbi.Add(h.Complete, function() {
                                                    t.cbi.Run(h.Reward)
                                                }), this.video.Show(t)
                                        }
                                    }, e.prototype.RemoveAD = function(t, e) {
                                        switch (e) {
                                            case o.Grade.banner:
                                                this.banner.Remove()
                                        }
                                    }, e
                                }(o.IAds),
                                r = function() {
                                    function t() {}
                                    return t.prototype.Show = function(t) {
                                        m.QTTGame.ShowBanner()
                                    }, t.prototype.Remove = function() {
                                        m.QTTGame.HideBanner()
                                    }, t
                                }(),
                                a = function() {
                                    function t() {}
                                    return t.prototype.Ready = function() {
                                        return !0
                                    }, t.prototype.Show = function(t) {
                                        m.QTTGame.ShowHDAD()
                                    }, t
                                }(),
                                s = function() {
                                    function t() {}
                                    return t.prototype.Ready = function() {
                                        return !0
                                    }, t.prototype.Show = function(t) {
                                        m.QTTGame.ShowVideo(function(t) {
                                            console.log("code = " + t)
                                        })
                                    }, t
                                }()
                        }(e.QTTGame || (e.QTTGame = {})),
                        function(t) {
                            var e = function(t) {
                                function e() {
                                    return null !== t && t.apply(this, arguments) || this
                                }
                                return i(e, t), e.prototype.OnInit = function() {
                                    /* var t = document.createElement("script");
                                    t.setAttribute("type", "text/javascript"), t.src = "http://h.api.4399.com/h5mini-2.0/h5api-interface.php", document.body.appendChild(t), document.title = n.Api.productName, y.CM.AddComponent(r).DoInit() */
                                }, e
                            }(y.CI);
                            t.Manager = e;
                            var r = function(t) {
                                    function e() {
                                        return null !== t && t.apply(this, arguments) || this
                                    }
                                    return i(e, t), e.prototype.OnInit = function() {
                                        this.video = new a, this.video.Init()
                                    }, e.prototype.ADReady = function(t, e) {
                                        switch (e) {
                                            case o.Grade.reward:
                                                return !(null == this.video || !this.video.Ready())
                                        }
                                        return !1
                                    }, e.prototype.ShowAD = function(t, e) {
                                        switch (e) {
                                            case o.Grade.reward:
                                                t.cbi.Add(h.Complete, function() {
                                                    t.cbi.Run(h.Reward)
                                                }), this.video.Show(t)
                                        }
                                    }, e
                                }(o.IAds),
                                a = function() {
                                    function t() {
                                        this.loaded = !1, this.loadHandle = 0
                                    }
                                    return t.prototype.Init = function() {
                                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                        this.Load(1e3)
                                    }, t.prototype.Ready = function() {
                                        return this.loaded
                                    }, t.prototype.Load = function(t) {
                                        var e = this;
                                        clearTimeout(this.loadHandle), this.loadHandle = setTimeout(function() {
                                            m._4399.CanPlayAd(function(t) {
                                                console.log("_4399.Video.CanPlayAd", JSON.stringify(t)), e.loaded = t.canPlayAd, e.loaded || e.Load(5e3)
                                            })
                                        }, t)
                                    }, t.prototype.Show = function(t) {
                                        var e = this;
                                        m._4399.PlayAd(function(n) {
                                            switch (console.log("_4399.Video.PlayAd", JSON.stringify(n)), n.code) {
                                                case 1e4:
                                                    t.cbi.Run(h.Expose);
                                                    break;
                                                case 10001:
                                                    t.cbi.Run(h.Complete), e.loaded = !1, e.Load(1e3);
                                                    break;
                                                default:
                                                    e.loaded = !1, e.Load(1e3)
                                            }
                                        })
                                    }, t
                                }()
                        }(w = e._4399 || (e._4399 = {})), setTimeout(function() {
                            if (t.SystemInfo.channel != f.editor) switch (y.CM.AddComponent(c.Manager).DoInit(), y.CM.AddComponent(u.Manager).DoInit(), C.channel) {
                                case f.oppoQG:
                                    y.CM.AddComponent(l.QG.Manager).DoInit();
                                    break;
                                case f.vivoQG:
                                    y.CM.AddComponent(d.QG.Manager).DoInit();
                                    break;
                                case f.ttGame:
                                    y.CM.AddComponent(p.Manager).DoInit();
                                    break;
                                case f.qqGame:
                                    y.CM.AddComponent(v.Manager).DoInit();
                                    break;
                                case f.wxGame:
                                    y.CM.AddComponent(g.Manager).DoInit();
                                    break;
                                case f.ucGame:
                                    y.CM.AddComponent(b.Manager).DoInit();
                                    break;
                                case f._4399:
                                    y.CM.AddComponent(w.Manager).DoInit()
                            }
                        }, 0)
                    }(e.SDK || (e.SDK = {}))
                }(b = t.AppRt || (t.AppRt = {}));
            var P = function() {
                function t() {}
                return Object.defineProperty(t, "guid", {
                    get: function() {
                        return I.GetString("TJ.User.guid")
                    },
                    set: function(t) {
                        I.SetString("TJ.User.guid", t)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }();
            t.User = P,
                function(e) {
                    var n = "https://api1.tomatojoy.cn/api",
                        o = (function() {}(), function() {}(), function() {}(), function() {}(), function() {}(), function() {
                            return function() {
                                this.score = 0, this.rank = 0
                            }
                        }());

                    function i(t) {
                        var e = new o;
                        return null != t && (e.userguid = t.userguid, e.score = t.score, e.userName = t.userInfo.userName, e.avatar = t.userInfo.avatar), e
                    }
                    e.RankData = o;
                    var s = function() {
                        function t() {}
                        return t.GetSelfRank = function(t) {
                            return null != this.selfRanks[t] ? this.selfRanks[t] : new o
                        }, t.GetRankList = function(t) {
                            return r(this, void 0, void 0, function() {
                                var e, o, r, s, c, u, l, d;
                                return a(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return e = [], (o = {}).A = "Rank.GetRankList", (r = {}).rankguid = t, r.userguid = P.guid, o.P = JSON.stringify(r), (s = new g.WWW(n, o)).logText = !0, [4, s.Send("post", "form")];
                                        case 1:
                                            if (a.sent(), null == s.error)
                                                if (null == (c = JSON.parse(s.text)).E) {
                                                    if (null != c.P.data) {
                                                        if (u = 0, this.selfRanks[t] = null, null != c.P.data.list)
                                                            for (u = c.P.data.list.length, d = 0; d < c.P.data.list.length; d++) l = i(c.P.data.list[d]), e.push(l), l.userguid == P.guid && (this.selfRanks[t] = l);
                                                        for (null != c.P.data.self && (l = i(c.P.data.self), null != this.selfRanks[t] ? (this.selfRanks[t].score = l.score, this.selfRanks[t].userName = l.userName, this.selfRanks[t].avatar = l.avatar) : (this.selfRanks[t] = l, e.push(l))), e.sort(function(t, e) {
                                                                return t.score > e.score ? c.P.data.sortType : t.score < e.score ? -c.P.data.sortType : 0
                                                            }), u > 0 && e.length > u && e.splice(u, e.length - u), d = 0; d < e.length; d++) e[d].rank = d + 1
                                                    }
                                                } else console.log("E = " + c.E);
                                            return [2, e]
                                    }
                                })
                            })
                        }, t.ReportScore = function(t, e) {
                            return r(this, void 0, void 0, function() {
                                var o, i, r;
                                return a(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return (o = {}).A = "Rank.ReportScore", (i = {}).rankguid = t, i.userguid = P.guid, i.score = e, o.P = JSON.stringify(i), (r = new g.WWW(n, o)).logText = !0, [4, r.Send("post", "form")];
                                        case 1:
                                            return a.sent(), [2]
                                    }
                                })
                            })
                        }, t.selfRanks = {}, t
                    }();
                    e.Rank = s;
                    var c = function() {
                        function t() {}
                        return t.DeleteAll = function() {
                            this.ClearData(I.keys), I.DeleteAll()
                        }, t.DeleteKey = function(t) {
                            for (var e = [], n = 0, o = I.tags; n < o.length; n++) {
                                var i = o[n];
                                e.push(i + t)
                            }
                            this.ClearData(e), I.DeleteKey(t)
                        }, t.GetString = function(t, e) {
                            return void 0 === e && (e = null), I.GetString(t, e)
                        }, t.SetString = function(t, e) {
                            I.SetString(t, e), t = I.stringTag + t, this.UploadData(t)
                        }, t.GetFloat = function(t, e) {
                            return void 0 === e && (e = 0), I.GetFloat(t, e)
                        }, t.SetFloat = function(t, e) {
                            I.SetFloat(t, e), t = I.floatTag + t, this.UploadData(t)
                        }, t.GetInt = function(t, e) {
                            return void 0 === e && (e = 0), I.GetInt(t, e)
                        }, t.SetInt = function(t, e) {
                            I.SetInt(t, e), t = I.intTag + t, this.UploadData(t)
                        }, t.UploadData = function(e) {
                            var n = {};
                            n[e] = _.Get(e), null != n[e] && t.SaveData(n)
                        }, t.GetData = function() {
                            return r(this, void 0, void 0, function() {
                                var t, e, o, i;
                                return a(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return (t = {}).A = "Player.GetData", (e = {}).userguid = P.guid, t.P = JSON.stringify(e), [4, (o = new g.WWW(n, t)).Send("post", "form")];
                                        case 1:
                                            if (r.sent(), null == o.error) {
                                                if (null == (i = JSON.parse(o.text)).E) return [2, i.P];
                                                console.log("E = " + i.E)
                                            }
                                            return [2, {}]
                                    }
                                })
                            })
                        }, t.SaveData = function(t) {
                            return r(this, void 0, void 0, function() {
                                var e, o, i, r;
                                return a(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return null == P.guid ? [2] : ((e = {}).A = "Player.SaveData", (o = {}).userguid = P.guid, o.data = t, e.P = JSON.stringify(o), [4, (i = new g.WWW(n, e)).Send("post", "form")]);
                                        case 1:
                                            return a.sent(), null == i.error && (null == (r = JSON.parse(i.text)).E || console.log("E = " + r.E)), [2]
                                    }
                                })
                            })
                        }, t.ClearData = function(t) {
                            return r(this, void 0, void 0, function() {
                                var e, o, i, r;
                                return a(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return null == P.guid ? [2] : ((e = {}).A = "Player.ClearData", (o = {}).userguid = P.guid, o.keys = t, e.P = JSON.stringify(o), [4, (i = new g.WWW(n, e)).Send("post", "form")]);
                                        case 1:
                                            return a.sent(), null == i.error && (null == (r = JSON.parse(i.text)).E || console.log("E = " + r.E)), [2]
                                    }
                                })
                            })
                        }, t.UpgradeData = function() {
                            return r(this, void 0, void 0, function() {
                                var e, o, i, r, s, c, u, l;
                                return a(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            for (e = {}, o = 0, i = I.keys; o < i.length; o++) r = i[o], e[r] = I.Get(r);
                                            return t.SaveData(e), (s = {}).A = "System.DelPlayer", (c = {}).appguid = DP.Basic.appGuid, s.P = JSON.stringify(c), [4, (u = new g.WWW(n, s)).Send("post", "form")];
                                        case 1:
                                            return a.sent(), null == u.error && (null == (l = JSON.parse(u.text)).E || console.log("E = " + l.E)), [2]
                                    }
                                })
                            })
                        }, t
                    }();
                    e.Storage = c;
                    var u;

                    function l(t) {
                        if (null == t.error) {
                            var e = JSON.parse(t.text);
                            if (null == e.E) {
                                var n = e.P;
                                P.guid = n.userguid
                            } else console.log("E = " + e.E)
                        }
                    }

                    function d() {
                        return r(this, void 0, void 0, function() {
                            var e, o, i, r;
                            return a(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, t.DevKit.OPPO.QG.Login()];
                                    case 1:
                                        return e = a.sent(), (o = {}).A = "Login.OPPOLogin", (i = {}).appguid = DP.Basic.appGuid, i.token = e.token, o.P = JSON.stringify(i), (r = new g.WWW(n, o)).logText = !0, [4, r.Send("post", "form")];
                                    case 2:
                                        return a.sent(), l(r), [2]
                                }
                            })
                        })
                    }

                    function h() {
                        return r(this, void 0, void 0, function() {
                            var t, e, o, i, r, s, c, u, d;
                            return a(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return e = new Promise(function(e) {
                                            t = e
                                        }), (i = new m.VIVO.QG.AuthorizeParam).success = function(t) {
                                            console.log("VIVO.QG.Authorize", "success = " + JSON.stringify(t)), o = t.accessToken
                                        }, i.complete = function(e) {
                                            console.log("VIVO.QG.Authorize", "complete = " + JSON.stringify(e)), t()
                                        }, m.VIVO.QG.Authorize(i), [4, e];
                                    case 1:
                                        return a.sent(), e = new Promise(function(e) {
                                            t = e
                                        }), (s = new m.VIVO.QG.GetProfileParam).token = o, s.success = function(t) {
                                            console.log("VIVO.QG.GetProfile", "success = " + JSON.stringify(t)), r = t
                                        }, s.complete = function(e) {
                                            console.log("VIVO.QG.GetProfile", "complete = " + JSON.stringify(e)), t()
                                        }, m.VIVO.QG.GetProfile(s), [4, e];
                                    case 2:
                                        return a.sent(), (c = {}).A = "Login.VIVOLogin", (u = {}).appguid = DP.Basic.appGuid, u.userInfo = r, c.P = JSON.stringify(u), (d = new g.WWW(n, c)).logText = !0, [4, d.Send("post", "form")];
                                    case 3:
                                        return a.sent(), l(d), [2]
                                }
                            })
                        })
                    }

                    function p() {
                        return r(this, void 0, void 0, function() {
                            var t, e, o, i, r, s, c, u, d;
                            return a(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return e = new Promise(function(e) {
                                            t = e
                                        }), (i = new m.TT.LoginParam).force = !1, i.success = function(t) {
                                            o = t.code
                                        }, i.complete = function(e) {
                                            console.log("TT.Login complete", JSON.stringify(e)), t()
                                        }, m.TT.Login(i), [4, e];
                                    case 1:
                                        return a.sent(), e = new Promise(function(e) {
                                            t = e
                                        }), (s = new m.TT.GetUserInfoParam).success = function(t) {
                                            r = t.userInfo
                                        }, s.complete = function(e) {
                                            console.log("TT.GetUserInfo complete", JSON.stringify(e)), t()
                                        }, m.TT.GetUserInfo(s), [4, e];
                                    case 2:
                                        return a.sent(), null == o ? [3, 4] : (console.log("TTT code = " + o), null == r && (r = {}), console.log("TTT userInfo = " + JSON.stringify(r)), (c = {}).A = "Login.TTLogin", (u = {}).appguid = DP.Basic.appGuid, u.code = o, u.userInfo = r, c.P = JSON.stringify(u), (d = new g.WWW(n, c)).logText = !0, [4, d.Send("post", "form")]);
                                    case 3:
                                        return a.sent(), l(d), [3, 5];
                                    case 4:
                                        console.log("no code"), a.label = 5;
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }

                    function v() {
                        return r(this, void 0, void 0, function() {
                            var t, e, o, i, r, s, c, u, d, h;
                            return a(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return e = new Promise(function(e) {
                                            t = e
                                        }), (i = new m.WX.LoginParam).success = function(t) {
                                            o = t.code
                                        }, i.complete = function(e) {
                                            console.log("WX.Login complete", JSON.stringify(e)), t()
                                        }, m.WX.Login(i), [4, e];
                                    case 1:
                                        return a.sent(), e = new Promise(function(e) {
                                            t = e
                                        }), (s = new m.WX.CreateUserInfoButtonParam).type = "image", s.style.left = 0, s.style.top = 0, s.style.width = C.windowSize.width, s.style.height = C.windowSize.height, (c = m.WX.CreateUserInfoButton(s)).OnTap(function(e) {
                                            r = e.userInfo, t(), c.Destroy()
                                        }), [4, e];
                                    case 2:
                                        return a.sent(), null == o ? [3, 4] : (console.log("WXX code = " + o), null == r && (r = {}), console.log("WXX userInfo = " + JSON.stringify(r)), (u = {}).A = "Login.WXLogin", (d = {}).appguid = DP.Basic.appGuid, d.code = o, d.userInfo = r, u.P = JSON.stringify(d), (h = new g.WWW(n, u)).logText = !0, [4, h.Send("post", "form")]);
                                    case 3:
                                        return a.sent(), l(h), [3, 5];
                                    case 4:
                                        console.log("no code"), a.label = 5;
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }

                    function y() {
                        return r(this, void 0, void 0, function() {
                            var e, o, i, r;
                            return a(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return e = t.DevKit.Url2Args(), (o = {}).A = "Login.QTTLogin", (i = {}).appguid = DP.Basic.appGuid, i.platform = e.platform, i.ticket = e.ticket, o.P = JSON.stringify(i), (r = new g.WWW(n, o)).logText = !0, [4, r.Send("post", "form")];
                                    case 1:
                                        return a.sent(), l(r), [2]
                                }
                            })
                        })
                    }
                    var b = new Promise(function(t) {
                        u = t
                    });

                    function w() {
                        return r(this, void 0, void 0, function() {
                            return a(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (null != P.guid) return [3, 11];
                                        switch (C.channel) {
                                            case f.oppoQG:
                                                return [3, 1];
                                            case f.vivoQG:
                                                return [3, 3];
                                            case f.ttGame:
                                                return [3, 5];
                                            case f.wxGame:
                                                return [3, 7];
                                            case f.qttGame:
                                                return [3, 9]
                                        }
                                        return [3, 11];
                                    case 1:
                                        return [4, d()];
                                    case 2:
                                        return t.sent(), [3, 11];
                                    case 3:
                                        return [4, h()];
                                    case 4:
                                        return t.sent(), [3, 11];
                                    case 5:
                                        return [4, p()];
                                    case 6:
                                        return t.sent(), [3, 11];
                                    case 7:
                                        return [4, v()];
                                    case 8:
                                        return t.sent(), [3, 11];
                                    case 9:
                                        return [4, y()];
                                    case 10:
                                        return t.sent(), [3, 11];
                                    case 11:
                                        return u(), A.ReYun.Register(null), A.ReYun.Loggedin(null), [2]
                                }
                            })
                        })
                    }
                    e.SyncStorage = function() {
                        return r(this, void 0, void 0, function() {
                            var t, e, n, o, i, r;
                            return a(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, b];
                                    case 1:
                                        return a.sent(), [4, c.GetData()];
                                    case 2:
                                        for (t = a.sent(), e = 0, n = Object.keys(t); e < n.length; e++) o = n[e], null != (i = t[o]) && ("string" != typeof i || "{" != i.substring(0, 1) ? I.Set(o, i) : null == (r = JSON.parse(i)) ? I.Set(o, i) : null == r.value ? I.Set(o, i) : I.GetRaw(o).time > r.time ? c.UploadData(o) : I.Set(o, r.value));
                                        return [2]
                                }
                            })
                        })
                    }, setTimeout(function() {
                        t.SystemInfo.channel != f.editor && w()
                    }, 10)
                }(t.Yun || (t.Yun = {})),
                function(e) {
                    var n = this,
                        o = "";

                    function i(t, e) {
                        return r(this, void 0, void 0, function() {
                            var n, i;
                            return a(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return (n = {}).data = encodeURI(JSON.stringify(e)), (i = new g.WWW(o + t, n)).logError = !1, i.logSend = !1, [4, i.Send("post", "form")];
                                    case 1:
                                        return r.sent(), [2]
                                }
                            })
                        })
                    }
                    var s = l.New();

                    function c() {
                        var t = {};
                        t.startupGuid = s, i("heartbeat", t)
                    }

                    function u(t) {
                        var e = {};
                        e.startupGuid = s, e.appInfo = t, i("appInfo", e)
                    }

                    function d(t) {
                        var e = {};
                        e.startupGuid = s, e.eventInfo = t, i("eventInfo", e)
                    }

                    function h(t, e) {
                        if (null != e) {
                            var n = {};
                            n.startupGuid = s, n.appGuid = t, n.token = e, i("login/oppo", n)
                        }
                    }

                    function p(t, e, n) {
                        var o = {};
                        o.startupGuid = s, o.appGuid = t, o.platform = e, o.ticket = n, i("login/qtt", o)
                    }
                    console.log("startupGuid = " + s), e.Heartbeat = c, e.DeviceInfo = function(t) {
                        var e = {};
                        e.startupGuid = s, e.deviceInfo = t, i("deviceInfo", e)
                    }, e.AppInfo = u, e.EventInfo = d, e.LoginOppo = h, e.LoginQTT = p, setTimeout(function() {
                        return r(n, void 0, void 0, function() {
                            return a(this, function(e) {
                                return t.SystemInfo.channel == f.editor ? [2] : (c(), [2])
                            })
                        })
                    }, 0);
                    var v = 0,
                        y = 0;
                    setInterval(function() {
                        t.SystemInfo.channel != f.editor && (v += 1, --y <= 0 && (y = v < 60 ? 1 : v < 300 ? 5 : v < 600 ? 10 : 30, c()))
                    }, 1e3), setTimeout(function() {
                        return r(n, void 0, void 0, function() {
                            var e;
                            return a(this, function(n) {
                                return t.SystemInfo.channel == f.editor ? [2] : ((e = {}).appGuid = DP.Basic.appGuid, e.appName = DP.Basic.productName, e.versionName = DP.Basic.versionName, e.versionCode = DP.Basic.versionCode, u(e), [2])
                            })
                        })
                    }, 0), setTimeout(function() {
                        return r(n, void 0, void 0, function() {
                            var e, n;
                            return a(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (t.SystemInfo.channel == f.editor) return [2];
                                        switch (t.SystemInfo.channel) {
                                            case f.oppoQG:
                                                return [3, 1];
                                            case f.qttGame:
                                                return [3, 3]
                                        }
                                        return [3, 4];
                                    case 1:
                                        return [4, t.DevKit.OPPO.QG.Login()];
                                    case 2:
                                        return e = o.sent(), h(DP.Basic.appGuid, e.token), [3, 4];
                                    case 3:
                                        return n = t.DevKit.Url2Args(), p(DP.Basic.appGuid, n.platform, n.ticket), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, 0);
                    var m = function() {
                        function t() {}
                        return t.Event = function(t) {
                            var e = {};
                            e.timePoint = Date.now() - this.startTime, e.eventName = t, d(e)
                        }, t.SystemEvent = function(t, e, n) {
                            var o = {};
                            o.system = t, o.timePoint = Date.now() - this.startTime, o.eventName = e, o.eventParam = n, d(o)
                        }, t.startTime = Date.now(), t
                    }();
                    e.Api = m
                }(t.Ground || (t.Ground = {}));
            var S = function() {
                    return function() {
                        this.value = null, this.time = 0
                    }
                }(),
                I = function() {
                    function t() {}
                    return t.DeleteAll = function() {
                        _.Clear()
                    }, t.DeleteKey = function(t) {
                        for (var e = [], n = 0, o = this.tags; n < o.length; n++) {
                            var i = o[n];
                            e.push(i + t)
                        }
                        for (var r = 0, a = e; r < a.length; r++) {
                            var s = a[r];
                            _.Set(s, null)
                        }
                    }, t.GetString = function(t, e) {
                        void 0 === e && (e = null);
                        var n = this.Get(this.stringTag + t);
                        return null == n && (n = e), n
                    }, t.SetString = function(t, e) {
                        this.Set(this.stringTag + t, new c(e).value)
                    }, t.GetFloat = function(t, e) {
                        void 0 === e && (e = 0);
                        var n = this.Get(this.floatTag + t);
                        return null == n && (n = e), n
                    }, t.SetFloat = function(t, e) {
                        this.Set(this.floatTag + t, new o(e).value)
                    }, t.GetInt = function(t, e) {
                        void 0 === e && (e = 0);
                        var n = this.Get(this.intTag + t);
                        return null == n && (n = e), n
                    }, t.SetInt = function(t, e) {
                        this.Set(this.intTag + t, new n(e).value)
                    }, t.Set = function(t, e) {
                        if (null != e) {
                            var n = new S;
                            n.value = e, n.time = Date.now();
                            var o = JSON.stringify(n);
                            _.Set(t, o)
                        } else _.Set(t, null)
                    }, t.Get = function(t) {
                        return this.GetRaw(t).value
                    }, t.GetRaw = function(t) {
                        var e = null,
                            n = _.Get(t);
                        return null == n || "" == n ? e = new S : "string" != typeof n || "{" != n.substring(0, 1) ? (e = new S).value = n : null == (e = JSON.parse(n)) ? (e = new S).value = n : null == e.value && (e.value = n), e
                    }, t.HasKey = function(t) {
                        for (var e = 0, n = this.tags; e < n.length; e++) {
                            var o = n[e];
                            if (null != this.Get(o + t)) return !0
                        }
                        return !1
                    }, Object.defineProperty(t, "intTag", {
                        get: function() {
                            return "int:"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t, "floatTag", {
                        get: function() {
                            return "float:"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t, "stringTag", {
                        get: function() {
                            return "string:"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t, "tags", {
                        get: function() {
                            var t = [];
                            return t.push(this.intTag), t.push(this.floatTag), t.push(this.stringTag), t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t, "keys", {
                        get: function() {
                            for (var t = [], e = 0, n = _.keys; e < n.length; e++)
                                for (var o = n[e], i = 0, r = this.tags; i < r.length; i++) {
                                    var a = r[i]; - 1 != o.search(a) && t.push(o)
                                }
                            return t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }();
            t.PlayerPrefs = I;
            var _ = function() {
                function t() {}
                return Object.defineProperty(t, "keys", {
                    get: function() {
                        return Object.keys(cc.sys.localStorage)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.Get = function(t) {
                    if (null == t) return null;
                    var e = cc.sys.localStorage.getItem(t);
                    return "" == e ? null : e
                }, t.Set = function(t, e) {
                    null != t && (null != e ? cc.sys.localStorage.setItem(t, e) : cc.sys.localStorage.removeItem(t))
                }, t.Clear = function() {
                    cc.sys.localStorage.clear()
                }, t
            }();
            t.LocalStorage = _;
            var C = function() {
                function t() {}
                return Object.defineProperty(t, "deviceUniqueIdentifier", {
                    get: function() {
                        var t = "SystemInfo.deviceUniqueIdentifier";
                        if (I.HasKey(t)) return I.GetString(t);
                        var e = l.New();
                        return I.SetString(t, e), e
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t, "windowSize", {
                    get: function() {
                        return cc.view.getFrameSize()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t, "platform", {
                    get: function() {
                        switch (this.channel) {
                            case f.android:
                                return p.Android;
                            case f.oppoQG:
                            case f.vivoQG:
                            case f.ttGame:
                            case f.qqGame:
                            case f.wxGame:
                            case f.ucGame:
                            case f.qttGame:
                            case f._4399:
                                return p.AppRt
                        }
                        return p.Unknown
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t, "channel", {
                    get: function() {
                        switch (cc.sys.platform) {
                            case cc.sys.EDITOR_PAGE:
                                return f.editor;
                            case cc.sys.OPPO_GAME:
                                return f.oppoQG;
                            case cc.sys.VIVO_GAME:
                                return f.vivoQG;
                            case cc.sys.WECHAT_GAME:
                                switch (DP.Basic.channel) {
                                    case "ZJTD_AppRt":
                                        return f.ttGame;
                                    case "SQ_AppRt":
                                        return f.qqGame
                                }
                                return f.wxGame;
                            case cc.sys.MOBILE_BROWSER:
                                switch (DP.Basic.channel) {
                                    case "UC_AppRt":
                                        return f.ucGame;
                                    case "QTT_AppRt":
                                        return f.qttGame;
                                    case "4399_AppRt":
                                        return f._4399
                                }
                                break;
                            case cc.sys.DESKTOP_BROWSER:
                                switch (DP.Basic.channel) {
                                    case "4399_AppRt":
                                        return f._4399
                                }
                                break;
                            case cc.sys.ANDROID:
                                return f.android
                        }
                        return f.Unknown
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }();
            t.SystemInfo = C,
                function(t) {
                    var e = function() {
                        function e() {}
                        return e.Send = function() {
                            for (var t, n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
                            return "undefined" != typeof jsb ? (t = jsb.reflection).callStaticMethod.apply(t, [e.javaClass].concat(n)) : ""
                        }, e.SerializeObjects = function(t) {
                            for (var e = [], n = 0, o = t; n < o.length; n++) {
                                var i = o[n];
                                e.push("" + i)
                            }
                            return JSON.stringify(e)
                        }, e.Set = function(t, n, o, i) {
                            e.Send("Set", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", t, n, "" + o, "" + i)
                        }, e.Get = function(n, o, i) {
                            var r = e.Send("Get", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;", n, o, "" + i);
                            return t.Object0.Get(r)
                        }, e.Call = function(n, o, i, r) {
                            var a = e.Send("Call", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;", n, o, this.SerializeObjects(i), "" + r);
                            return t.Object0.Get(a)
                        }, e.New = function(n, o) {
                            var i = e.Send("New", "(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;", n, this.SerializeObjects(o));
                            return t.Object0.Get(i)
                        }, e.Class = function(t) {
                            return e.Send("Class", "(Ljava/lang/String;)Ljava/lang/String;", "" + t)
                        }, e.GetInt = function(t) {
                            return e.Send("GetInt", "(Ljava/lang/String;)I", "" + t)
                        }, e.GetFloat = function(t) {
                            return e.Send("GetFloat", "(Ljava/lang/String;)F", "" + t)
                        }, e.GetBoolean = function(t) {
                            return e.Send("GetBoolean", "(Ljava/lang/String;)Z", "" + t)
                        }, e.GetString = function(t) {
                            return e.Send("GetString", "(Ljava/lang/String;)Ljava/lang/String;", "" + t)
                        }, e.SetValue = function(n) {
                            var o = e.Send("SetValue", "(" + n.javaSignature + ")Ljava/lang/String;", n.value);
                            return t.Object0.Get(o)
                        }, e.javaClass = "tj.tools.Java", e
                    }();
                    t.Java = e
                }(v = t.Android || (t.Android = {})),
                function(t) {
                    var e = function() {
                        function e(t) {
                            this.objectIndex = t
                        }
                        return e.prototype.toString = function() {
                            return this.objectIndex
                        }, e.Get = function(n) {
                            return "string" == typeof n ? new e(n) : t.Objc.SetValue(n)
                        }, e.prototype.GetValue = function(e) {
                            return null == e ? null : (e.prototype == n.prototype && (i = new n(t.Objc.GetInt(this))), e.prototype == o.prototype && (i = new o(t.Objc.GetFloat(this))), e.prototype == s.prototype && (i = new s(t.Objc.GetBoolean(this))), e.prototype == c.prototype && (i = new c(t.Objc.GetString(this))), i);
                            var i
                        }, e
                    }();
                    t.Object0 = e;
                    var i = function() {
                        function e(t) {
                            this.className = t
                        }
                        return e.prototype.SetStatic = function(e, n) {
                            t.Objc.Set(this.className, e, r.SetValue(n), null)
                        }, e.prototype.GetStatic = function(e, n) {
                            var o = t.Objc.Get(this.className, n, null);
                            return r.GetValue(e, o)
                        }, e.prototype.CallStatic = function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            var o = e.shift();
                            if ("string" != typeof o) {
                                var i = e.shift(),
                                    a = t.Objc.Call(this.className, i, r.SetValues.apply(r, e), null);
                                return r.GetValue(o, a)
                            }
                            t.Objc.Call(this.className, o, r.SetValues.apply(r, e), null)
                        }, e.prototype.New = function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            return t.Objc.New(this.className)
                        }, e
                    }();
                    t.ObjcClass = i;
                    var r = function() {
                        function n(t, e) {
                            this.javaClass = e, this.object = t
                        }
                        return n.prototype.toString = function() {
                            return "" + this.object
                        }, n.New = function(t) {
                            for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
                            var r = new i(t);
                            return new n(r.New.apply(r, e), r)
                        }, n.Get = function(e) {
                            return new n(e, new i(t.Objc.Class(e)))
                        }, n.prototype.Set = function(o, i) {
                            var r;
                            r = i instanceof n ? i.object : e.Get(i), t.Objc.Set(this.javaClass.className, o, r, this.object)
                        }, n.prototype.Get = function(e, o) {
                            var i = t.Objc.Get(this.javaClass.className, o, this.object);
                            return n.GetValue(e, i)
                        }, n.prototype.Call = function() {
                            for (var e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
                            var i = e.shift();
                            if ("string" != typeof i) {
                                var r = e.shift(),
                                    a = t.Objc.Call(this.javaClass.className, r, n.SetValues.apply(n, e), this.object);
                                return n.GetValue(i, a)
                            }
                            t.Objc.Call(this.javaClass.className, i, n.SetValues.apply(n, e), this.object)
                        }, n.GetValue = function(t, e) {
                            return t.prototype == n.prototype ? n.Get(e) : e.GetValue(t)
                        }, n.SetValue = function(t) {
                            return t instanceof n ? t.object : e.Get(t)
                        }, n.SetValues = function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            for (var o = [], i = 0, r = t; i < r.length; i++) {
                                var a = r[i];
                                o.push(n.SetValue(a))
                            }
                            return o
                        }, n
                    }();
                    t.ObjcObject = r
                }(t.iOS || (t.iOS = {})),
                function(t) {
                    var e = function() {
                        function e() {}
                        return e.Send = function() {
                            for (var t, n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
                            return "undefined" != typeof jsb ? (t = jsb.reflection).callStaticMethod.apply(t, [e.objcClass].concat(n)) : ""
                        }, e.SerializeObjects = function(t) {
                            for (var e = [], n = 0, o = t; n < o.length; n++) {
                                var i = o[n];
                                e.push("" + i)
                            }
                            return JSON.stringify(e)
                        }, e.Set = function(t, n, o, i) {
                            e.Send("Set", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", t, n, "" + o, "" + i)
                        }, e.Get = function(n, o, i) {
                            var r = e.Send("Get", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;", n, o, "" + i);
                            return t.Object0.Get(r)
                        }, e.Call = function(n, o, i, r) {
                            var a = e.Send("Call_className:Call_methodName:Call_values:Call_obj:", n, o, this.SerializeObjects(i), "" + r);
                            return t.Object0.Get(a)
                        }, e.New = function(n) {
                            var o = e.Send("New_className:", n);
                            return t.Object0.Get(o)
                        }, e.Class = function(t) {
                            return e.Send("Class", "(Ljava/lang/String;)Ljava/lang/String;", "" + t)
                        }, e.GetInt = function(t) {
                            return e.Send("GetObj:", "" + t)
                        }, e.GetFloat = function(t) {
                            return e.Send("GetObj:", "" + t)
                        }, e.GetBoolean = function(t) {
                            return e.Send("GetObj:", "" + t)
                        }, e.GetString = function(t) {
                            return e.Send("GetObj:", "" + t)
                        }, e.SetValue = function(n) {
                            var o = e.Send("SetObj:", n.value);
                            return t.Object0.Get(o)
                        }, e.objcClass = "TJ_Objc", e
                    }();
                    t.Objc = e
                }(t.iOS || (t.iOS = {})),
                function(e) {
                    (function(e) {
                        (function(e) {
                            (function(e) {
                                var n = function() {
                                    function e() {}
                                    return e.prototype.Init = function() {
                                        for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
                                        this.posId = n[0], this.nativeAd = new t.DevKit.OPPO.QG.NativeAd(this.posId), cc.loader.loadRes("CustomInsertNode", function(t, n) {
                                            null == t ? e.prefab = n : console.log("OPPO.QG.CustomInsert", "loadRes err = " + t)
                                        })
                                    }, e.prototype.Ready = function() {
                                        return null != this.nativeAd.Peek() && null != e.prefab
                                    }, e.prototype.Show = function(t) {
                                        var n = this.nativeAd.Pop(),
                                            o = cc.instantiate(e.prefab);
                                        o.getComponent("CustomInsertNode").nativeAdData = n, cc.director.getScene().addChild(o)
                                    }, e
                                }();
                                e.CustomInsert = n
                            })(e.QG || (e.QG = {}))
                        })(e.OPPO || (e.OPPO = {}))
                    })(e.SDK || (e.SDK = {}))
                }(b = t.AppRt || (t.AppRt = {}))
        })(o || (o = {})), window.TJ = o, cc._RF.pop()
    }, {}],
    Time: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "6b3ccvu0dtPCK8jb8YEgoEx", "Time"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function t() {}
            return t.WaitForSeconds = function(t) {
                return new Promise(function(e) {
                    setTimeout(function() {
                        return e()
                    }, 1e3 * t)
                })
            }, t
        }();
        n.default = o, cc._RF.pop()
    }, {}],
    TipPanel: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "25137jfvnBFoI9h57cWb33p", "TipPanel");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            a = r.ccclass,
            s = r.property,
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.contextLabel = null, e
                }
                var n;
                return o(e, t), n = e, e.prototype.onLoad = function() {
                    n.instance = this
                }, e.prototype.ShowLog = function(t, e) {
                    var n = this;
                    this.contextLabel.string = t, this.node.opacity = 0, this.node.stopAllActions(), this.node.active = !0;
                    var o = cc.fadeIn(.3),
                        i = cc.fadeTo(.5, 255),
                        r = cc.fadeOut(.3),
                        a = cc.callFunc(function() {
                            n.node.active = !1
                        }),
                        s = cc.sequence(o, i, r, a);
                    this.node.runAction(s), null != e && e()
                }, i([s(cc.Label)], e.prototype, "contextLabel", void 0), e = n = i([a], e)
            }(cc.Component);
        n.default = c, cc._RF.pop()
    }, {}],
    UIManager: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "ad796Xs2q5Hq7QxR9+mXCtw", "UIManager"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o, i = t("./BasePanel"),
            r = t("../PrefabManager"),
            a = t("../Other/General"),
            s = function() {
                function t() {
                    this.panelPath = new a.Dictionary;
                    for (var t in o) {
                        parseInt(t, 10) >= 0 && (0, console.log("key--\x3e" + o[t.toString()]), this.panelPath.Add(o[t.toString()], "UI/" + o[t]))
                    }
                    this.CanvasTransform, console.log("Keys:" + this.panelPath.GetKey())
                }
                return Object.defineProperty(t, "Instance", {
                    get: function() {
                        return null == this._instance && (this._instance = new t), this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "CanvasTransform", {
                    get: function() {
                        return null == this.canvasTransform && (this.canvasTransform = cc.find("Canvas/Panel"), console.log("Parent Node:" + this.canvasTransform.name)), this.canvasTransform
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.IsGetPanel = function(t) {
                    return null != this.panelDic && this.panelDic.ContainKey(t)
                }, t.prototype.GetPanel = function(t) {
                    null == this.panelDic && (this.panelDic = new a.Dictionary);
                    var e = this.panelDic.TryGetValue(t);
                    if (null == e) {
                        var n = r.default.NewNode(this.panelPath.Item(o[t.toString()]));
                        console.log("UI:" + n.name), n.setParent(this.CanvasTransform), e = n.getComponent(i.default), this.panelDic.Add(t, e)
                    }
                    return e
                }, t
            }();
        n.default = s,
            function(t) {
                t[t.MainPanel = 0] = "MainPanel", t[t.MenuPanel = 1] = "MenuPanel", t[t.GamePanel = 2] = "GamePanel", t[t.LevelPanel = 3] = "LevelPanel"
            }(o = n.PanelType || (n.PanelType = {})), cc._RF.pop()
    }, {
        "../Other/General": "General",
        "../PrefabManager": "PrefabManager",
        "./BasePanel": "BasePanel"
    }],
    demo: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "7c68bHAxOVMYoplF3q+RTzF", "demo");
        var o = this && this.__extends || function() {
                var t = function(e, n) {
                    return (t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(e, n)
                };
                return function(e, n) {
                    function o() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }(),
            i = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r, a, s = cc._decorator,
            c = s.ccclass,
            u = (s.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.start = function() {
                    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function(t) {
                        switch (t.keyCode) {
                            case cc.macro.KEY.back:
                                TJ.APP.Api.Quit()
                        }
                    }, this), console.log(TJ.APP.Api.companyName), console.log(TJ.APP.Api.productName), console.log(TJ.APP.Api.packageName), console.log(TJ.APP.Api.versionName), console.log(TJ.APP.Api.versionCode), console.log(TJ.APP.Api.channel), console.log(TJ.IAP.Api.exist), console.log(TJ.ADS.Api.exist);
                    var t = cc.sys.localStorage.getItem("string:SystemInfo.deviceUniqueIdentifier");
                    null != t && t.length > 0 && "{" != t.substring(0, 1) ? console.log("TJ.PlayerPrefs.DeleteAll()") : console.log("ok"), console.log(t)
                }, e.prototype.Pay1 = function() {
                    var t = new TJ.IAP.Param;
                    t.product.price = .01, t.product.name = "\u6d4b\u8bd5\u8ba1\u8d39\u70b91\u5206", t.product.description = "\u8fd9\u662f\u4e00\u4e2a\u4e00\u5206\u94b1\u7684\u6d4b\u8bd5\u8ba1\u8d39\u70b9", t.cbi.Add(TJ.EventType.Reward, function() {
                        console.log("\u652f\u4ed8\u6210\u529f")
                    }), t.cbi.Add(TJ.EventType.NoReward, function() {
                        console.log("\u652f\u4ed8\u5931\u8d25")
                    }), TJ.IAP.Api.Purchase(t)
                }, e.prototype.Pay2 = function() {
                    var t = new TJ.IAP.Param;
                    t.product.price = .1, t.product.name = "\u6d4b\u8bd5\u8ba1\u8d39\u70b91\u89d2", t.product.description = "\u8fd9\u662f\u4e00\u4e2a\u4e00\u89d2\u94b1\u7684\u6d4b\u8bd5\u8ba1\u8d39\u70b9", t.cbi.Add(TJ.EventType.Reward, function() {
                        console.log("\u652f\u4ed8\u6210\u529f")
                    }), t.cbi.Add(TJ.EventType.NoReward, function() {
                        console.log("\u652f\u4ed8\u5931\u8d25")
                    }), TJ.IAP.Api.Purchase(t)
                }, e.prototype.Pay3 = function() {
                    var t = new TJ.IAP.Param;
                    t.product.price = 1, t.product.name = "\u6d4b\u8bd5\u8ba1\u8d39\u70b91\u5143", t.product.description = "\u8fd9\u662f\u4e00\u4e2a\u4e00\u5143\u94b1\u7684\u6d4b\u8bd5\u8ba1\u8d39\u70b9", t.cbi.Add(TJ.EventType.Reward, function() {
                        console.log("\u652f\u4ed8\u6210\u529f")
                    }), t.cbi.Add(TJ.EventType.NoReward, function() {
                        console.log("\u652f\u4ed8\u5931\u8d25")
                    }), TJ.IAP.Api.Purchase(t)
                }, e.prototype.Event = function() {
                    var t = new TJ.GSA.Param;
                    t.id = "eventName", t.dic.extraParam1 = 1, t.dic.extraParam2 = "2", TJ.GSA.Api.Event(t)
                }, e.prototype.Banner = function() {
                    var t = new TJ.ADS.Param;
                    t.place = TJ.ADS.Place.BOTTOM | TJ.ADS.Place.CENTER, TJ.ADS.Api.ShowBanner(t)
                }, e.prototype.Normal = function() {
                    var t = new TJ.ADS.Param;
                    TJ.ADS.Api.ShowNormal(t)
                }, e.prototype.Reward = function() {
                    var t = new TJ.ADS.Param;
                    t.extraAd = !0, t.cbi.Add(TJ.EventType.Reward, function() {
                        console.log("\u53d1\u653e\u5956\u52b1")
                    }), t.cbi.Add(TJ.EventType.NoAds, function() {
                        console.log("\u6ca1\u6709\u5e7f\u544a")
                    }), TJ.ADS.Api.ShowReward(t)
                }, e = i([c], e)
            }(cc.Component));
        n.default = u, r || (r = {}), a || (a = {}), cc._RF.pop()
    }, {}]
}, {}, ["DP", "AdManager", "AsIsNo", "AudioManager", "GameData", "GameFacade", "InputNumPanel", "OppoNativeAd", "DictionaryOld", "General", "LevelItem", "LevelItemData", "MyExtends", "Random", "Time", "PrefabManager", "ButtonElement", "CharacterController", "ContactElement", "Element", "FrameMovie", "InputElement", "Level", "ScaleElement", "SignItem", "SureAdPanel", "BasePanel", "UIManager", "EffectPanel", "GamePanel", "LevelPanel", "MainPanel", "MenuPanel", "SignPanel", "SurpriseADPanel", "TipPanel", "TJ", "P101", "P102", "P103", "P104", "P105", "P106", "PromoData", "PromoItem", "PromoList", "PromoOpen", "S101", "S102", "demo"]);